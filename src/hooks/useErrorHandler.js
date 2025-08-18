import { useState, useCallback } from 'react';

export const useAsyncError = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const throwError = useCallback((error) => {
    throw error;
  }, []);

  const handleAsyncError = useCallback((error) => {
    console.error('Async error:', error);
    setError(error);
    
    // Log to error service in production
    if (process.env.NODE_ENV === 'production') {
      logErrorToService(error);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
    setRetryCount(0);
  }, []);

  const retry = useCallback(async (asyncFunction, ...args) => {
    setIsLoading(true);
    setRetryCount(prev => prev + 1);
    
    try {
      const result = await asyncFunction(...args);
      clearError();
      return result;
    } catch (error) {
      handleAsyncError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [handleAsyncError, clearError]);

  return {
    error,
    isLoading,
    retryCount,
    handleAsyncError,
    clearError,
    retry,
    throwError
  };
};

export const useNetworkError = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [networkError, setNetworkError] = useState(null);

  const handleNetworkError = useCallback((error) => {
    if (!navigator.onLine) {
      setNetworkError({
        type: 'offline',
        message: 'You appear to be offline. Please check your internet connection.',
        originalError: error
      });
    } else if (error.name === 'TypeError' && error.message.includes('fetch')) {
      setNetworkError({
        type: 'fetch_failed',
        message: 'Network request failed. Please try again.',
        originalError: error
      });
    } else {
      setNetworkError({
        type: 'unknown',
        message: 'A network error occurred. Please try again.',
        originalError: error
      });
    }
  }, []);

  const clearNetworkError = useCallback(() => {
    setNetworkError(null);
  }, []);

  // Listen for online/offline events
  React.useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      if (networkError?.type === 'offline') {
        clearNetworkError();
      }
    };

    const handleOffline = () => {
      setIsOnline(false);
      setNetworkError({
        type: 'offline',
        message: 'You are currently offline. Some features may not work.',
        originalError: null
      });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [networkError, clearNetworkError]);

  return {
    isOnline,
    networkError,
    handleNetworkError,
    clearNetworkError
  };
};

// Enhanced fetch with retry logic and error handling
export const useEnhancedFetch = () => {
  const { handleAsyncError } = useAsyncError();
  const { handleNetworkError } = useNetworkError();

  const enhancedFetch = useCallback(async (url, options = {}, retries = 3) => {
    const {
      timeout = 10000,
      retryDelay = 1000,
      ...fetchOptions
    } = options;

    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        // Create abort controller for timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        return response;
      } catch (error) {
        if (attempt === retries) {
          // Last attempt failed
          if (error.name === 'AbortError') {
            const timeoutError = new Error(`Request timeout after ${timeout}ms`);
            timeoutError.name = 'TimeoutError';
            handleNetworkError(timeoutError);
            throw timeoutError;
          } else {
            handleNetworkError(error);
            throw error;
          }
        }

        // Wait before retry (exponential backoff)
        await new Promise(resolve => 
          setTimeout(resolve, retryDelay * Math.pow(2, attempt))
        );
      }
    }
  }, [handleAsyncError, handleNetworkError]);

  return { enhancedFetch };
};

// Utility function to log errors to external service
const logErrorToService = (error) => {
  try {
    const errorData = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      type: 'async_error'
    };

    // In a real app, send to your error tracking service
    console.log('Async error logged:', errorData);
    
    // Example: Send to error tracking service
    // fetch('/api/errors', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(errorData)
    // }).catch(console.error);
  } catch (loggingError) {
    console.error('Failed to log async error:', loggingError);
  }
};