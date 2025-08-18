import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import PlaceholderImage from './PlaceholderImage';

const OptimizedImage = ({
  src,
  alt,
  fallbackSrc,
  className = '',
  loading = 'lazy',
  onLoad,
  onError,
  showLoadingState = false, // Disable loading state by default to show images immediately
  placeholderType = 'default',
  ...props
}) => {
  const [imageState, setImageState] = useState({
    status: 'loading',
    hasError: false,
    currentSrc: src
  });

  const handleImageLoad = (event) => {
    setImageState(prev => ({
      ...prev,
      status: 'loaded',
      hasError: false
    }));
    onLoad?.(event);
  };

  const handleImageError = (event) => {
    // Try fallback if available
    if (fallbackSrc && imageState.currentSrc !== fallbackSrc) {
      setImageState(prev => ({
        ...prev,
        currentSrc: fallbackSrc,
        status: 'loading'
      }));
      return;
    }
    
    // Show error state
    setImageState(prev => ({
      ...prev,
      status: 'error',
      hasError: true
    }));
    onError?.(event);
  };

  const retry = () => {
    setImageState({
      status: 'loading',
      hasError: false,
      currentSrc: src
    });
  };

  // Show error state with retry option
  if (imageState.hasError && showLoadingState) {
    return (
      <div className={cn(className)} {...props}>
        <PlaceholderImage 
          type="error"
          text="Failed to load"
          className="w-full h-full cursor-pointer"
          onClick={retry}
          title="Click to retry loading image"
        />
      </div>
    );
  }

  // Show loading state only if explicitly enabled
  if (imageState.status === 'loading' && showLoadingState) {
    return (
      <div className={cn(className)} {...props}>
        <PlaceholderImage 
          type={placeholderType}
          text="Loading..."
          className="w-full h-full"
        />
        {/* Hidden img to actually load the image */}
        <img
          src={imageState.currentSrc}
          alt={alt}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ display: 'none' }}
        />
      </div>
    );
  }

  // Just show the image directly
  return (
    <img
      src={imageState.currentSrc}
      alt={alt}
      className={cn(className)}
      loading={loading}
      onLoad={handleImageLoad}
      onError={handleImageError}
      {...props}
    />
  );
};

export default OptimizedImage;