// Performance monitoring utilities for production

export const measurePerformance = (name, fn) => {
  if (typeof performance !== 'undefined' && performance.mark) {
    const startMark = `${name}-start`;
    const endMark = `${name}-end`;
    const measureName = `${name}-measure`;

    performance.mark(startMark);
    
    const result = fn();
    
    if (result && typeof result.then === 'function') {
      // Handle async functions
      return result.finally(() => {
        performance.mark(endMark);
        performance.measure(measureName, startMark, endMark);
        
        if (process.env.NODE_ENV === 'development') {
          const measure = performance.getEntriesByName(measureName)[0];
          console.log(`${name} took ${measure.duration.toFixed(2)}ms`);
        }
      });
    } else {
      // Handle sync functions
      performance.mark(endMark);
      performance.measure(measureName, startMark, endMark);
      
      if (process.env.NODE_ENV === 'development') {
        const measure = performance.getEntriesByName(measureName)[0];
        console.log(`${name} took ${measure.duration.toFixed(2)}ms`);
      }
      
      return result;
    }
  }
  
  return fn();
};

export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    }).catch(() => {
      // web-vitals not available, skip reporting
    });
  }
};

export const logPerformanceMetrics = () => {
  if (typeof performance !== 'undefined' && performance.getEntriesByType) {
    const navigation = performance.getEntriesByType('navigation')[0];
    const paint = performance.getEntriesByType('paint');
    
    if (navigation) {
      console.group('Performance Metrics');
      console.log('DOM Content Loaded:', `${navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart}ms`);
      console.log('Load Complete:', `${navigation.loadEventEnd - navigation.loadEventStart}ms`);
      console.log('Total Load Time:', `${navigation.loadEventEnd - navigation.fetchStart}ms`);
      
      paint.forEach(entry => {
        console.log(`${entry.name}:`, `${entry.startTime.toFixed(2)}ms`);
      });
      
      console.groupEnd();
    }
  }
};

// Image loading performance tracker
export const trackImageLoad = (src, startTime) => {
  const loadTime = performance.now() - startTime;
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`Image loaded: ${src} (${loadTime.toFixed(2)}ms)`);
  }
  
  // In production, you might want to send this to analytics
  if (process.env.NODE_ENV === 'production' && loadTime > 3000) {
    // Log slow image loads
    console.warn(`Slow image load detected: ${src} (${loadTime.toFixed(2)}ms)`);
  }
};

// Component render performance tracker
export const withPerformanceTracking = (Component, componentName) => {
  return React.memo((props) => {
    const renderStart = performance.now();
    
    React.useEffect(() => {
      const renderTime = performance.now() - renderStart;
      if (process.env.NODE_ENV === 'development' && renderTime > 16) {
        console.warn(`Slow render detected: ${componentName} (${renderTime.toFixed(2)}ms)`);
      }
    });
    
    return React.createElement(Component, props);
  });
};