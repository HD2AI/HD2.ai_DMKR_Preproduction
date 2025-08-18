import { useState, useEffect, useCallback } from 'react';
import { getPlaceholderImage } from '@/assets/placeholders';

export const useImageLoader = (src, fallbackSrc = null, maxRetries = 2, placeholderType = 'default') => {
  const [imageState, setImageState] = useState({
    status: 'loading', // 'loading' | 'loaded' | 'error'
    currentSrc: src,
    retryCount: 0,
    error: null
  });

  // Reset state when src changes
  useEffect(() => {
    setImageState({
      status: 'loading',
      currentSrc: src,
      retryCount: 0,
      error: null
    });
  }, [src]);

  const handleLoad = useCallback(() => {
    setImageState(prev => ({
      ...prev,
      status: 'loaded',
      error: null
    }));
  }, []);

  const handleError = useCallback((error) => {
    setImageState(prev => {
      const newRetryCount = prev.retryCount + 1;
      
      // If we haven't exceeded max retries and we're still on the original src
      if (newRetryCount <= maxRetries && prev.currentSrc === src) {
        // Retry with cache-busting parameter
        const cacheBustSrc = `${src}?retry=${newRetryCount}&t=${Date.now()}`;
        return {
          ...prev,
          currentSrc: cacheBustSrc,
          retryCount: newRetryCount,
          status: 'loading'
        };
      }
      
      // If we have a fallback and haven't tried it yet
      if (fallbackSrc && prev.currentSrc !== fallbackSrc) {
        return {
          ...prev,
          currentSrc: fallbackSrc,
          retryCount: 0,
          status: 'loading'
        };
      }
      
      // Try branded placeholder as final fallback
      const brandedPlaceholder = getPlaceholderImage(placeholderType);
      if (prev.currentSrc !== brandedPlaceholder) {
        return {
          ...prev,
          currentSrc: brandedPlaceholder,
          retryCount: 0,
          status: 'loading'
        };
      }
      
      // Final fallback - show error state
      return {
        ...prev,
        status: 'error',
        error: error || new Error('Failed to load image')
      };
    });
  }, [src, fallbackSrc, maxRetries]);

  const retry = useCallback(() => {
    setImageState({
      status: 'loading',
      currentSrc: src,
      retryCount: 0,
      error: null
    });
  }, [src]);

  return {
    ...imageState,
    handleLoad,
    handleError,
    retry,
    isLoading: imageState.status === 'loading',
    isLoaded: imageState.status === 'loaded',
    hasError: imageState.status === 'error'
  };
};