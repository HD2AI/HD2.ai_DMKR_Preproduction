import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import BrandedPlaceholder from './BrandedPlaceholder';

const SimpleImage = ({ 
  src, 
  alt, 
  fallback, 
  className = '', 
  onError, 
  onLoad,
  showPlaceholder = false,
  placeholderText,
  placeholderType = 'default',
  ...props 
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = (event) => {
    setIsLoading(false);
    setHasError(false);
    onLoad?.(event);
  };

  const handleError = (event) => {
    console.error('Image failed to load:', currentSrc);
    
    // Try fallback if available and not already tried
    if (fallback && currentSrc !== fallback) {
      console.log('Trying fallback image:', fallback);
      setCurrentSrc(fallback);
      setIsLoading(true);
      return;
    }
    
    // No fallback available or fallback also failed
    setHasError(true);
    setIsLoading(false);
    onError?.(event);
  };

  // Show error state with branded placeholder
  if (hasError && showPlaceholder) {
    return (
      <BrandedPlaceholder
        type={placeholderType}
        text={placeholderText}
        className={className}
        {...props}
      />
    );
  }

  // Show the image (or let it fail naturally if no placeholder)
  return (
    <img
      src={currentSrc}
      alt={alt}
      className={cn(className)}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
};

export default SimpleImage;