import React from 'react';
import { cn } from '@/lib/utils';

const BrandedPlaceholder = ({ 
  type = 'default', 
  className = '', 
  text,
  ...props 
}) => {
  const getPlaceholderContent = () => {
    switch (type) {
      case 'portfolio':
        return {
          icon: '🏠',
          text: text || 'Portfolio Image',
          bgColor: 'bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900'
        };
      case 'testimonial':
        return {
          icon: '👤',
          text: text || 'Profile',
          bgColor: 'bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900'
        };
      case 'blog':
        return {
          icon: '📝',
          text: text || 'Blog Image',
          bgColor: 'bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900'
        };
      case 'hero':
        return {
          icon: '🔨',
          text: text || 'Professional Work',
          bgColor: 'bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900'
        };
      default:
        return {
          icon: '🖼️',
          text: text || 'Image',
          bgColor: 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900'
        };
    }
  };

  const { icon, text: placeholderText, bgColor } = getPlaceholderContent();

  return (
    <div 
      className={cn(
        "flex flex-col items-center justify-center text-gray-600 dark:text-gray-400 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg",
        bgColor,
        className
      )}
      {...props}
    >
      <div className="text-4xl mb-2 opacity-60">{icon}</div>
      <div className="text-sm font-medium text-center px-2">{placeholderText}</div>
      <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">DMKR.co.uk</div>
    </div>
  );
};

export default BrandedPlaceholder;