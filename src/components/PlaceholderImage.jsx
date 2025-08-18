import React from 'react';
import { cn } from '@/lib/utils';

const PlaceholderImage = ({ 
  className = '', 
  type = 'default',
  size = 'md',
  showText = true,
  text = 'Image Loading...',
  ...props 
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64',
    full: 'w-full h-full'
  };

  const typeStyles = {
    default: 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600',
    portfolio: 'bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600',
    testimonial: 'bg-gradient-to-br from-green-100 to-green-200 text-green-600',
    error: 'bg-gradient-to-br from-red-100 to-red-200 text-red-600'
  };

  const IconComponent = ({ type }) => {
    switch (type) {
      case 'portfolio':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        );
      case 'testimonial':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
          </svg>
        );
      case 'error':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <div 
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-current/20",
        sizeClasses[size],
        typeStyles[type],
        className
      )}
      {...props}
    >
      <IconComponent type={type} />
      {showText && (
        <div className="text-xs mt-2 text-center px-2 font-medium">
          {text}
        </div>
      )}
    </div>
  );
};

export default PlaceholderImage;