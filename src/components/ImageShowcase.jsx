import React, { useState } from 'react';
import OptimizedImage from './OptimizedImage';
import PlaceholderImage from './PlaceholderImage';
import ImageGallery from './ImageGallery';
import { cn } from '@/lib/utils';

const ImageShowcase = () => {
  const [selectedDemo, setSelectedDemo] = useState('optimized');

  // Sample images for demonstration
  const sampleImages = [
    {
      id: 1,
      src: '/api/placeholder/400/300', // This will fail and show fallback
      alt: 'Sample portfolio image 1',
      title: 'Bathroom Tiling Project',
      description: 'Modern ceramic tiles with intricate patterns',
      type: 'portfolio'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop', // This should work
      alt: 'Sample portfolio image 2',
      title: 'Kitchen Backsplash',
      description: 'Elegant subway tiles in kitchen setting',
      type: 'portfolio'
    },
    {
      id: 3,
      src: '/invalid-image.jpg', // This will fail and show fallback
      alt: 'Sample portfolio image 3',
      title: 'Floor Tiling',
      description: 'Large format tiles for modern flooring',
      type: 'portfolio'
    }
  ];

  const demoSections = {
    optimized: {
      title: 'Optimized Image Component',
      description: 'Demonstrates loading states, error handling, and fallbacks'
    },
    placeholders: {
      title: 'Placeholder Components',
      description: 'Various placeholder types and styles'
    },
    gallery: {
      title: 'Image Gallery',
      description: 'Responsive gallery with hover effects'
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Enhanced Image Handling System
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Demonstration of the OptimizedImage component with fallback support, 
          loading states, and error handling for the DMKR website.
        </p>
      </div>

      {/* Demo Navigation */}
      <div className="flex justify-center space-x-4">
        {Object.entries(demoSections).map(([key, section]) => (
          <button
            key={key}
            onClick={() => setSelectedDemo(key)}
            className={cn(
              'px-4 py-2 rounded-lg font-medium transition-colors',
              selectedDemo === key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            )}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Demo Content */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            {demoSections[selectedDemo].title}
          </h2>
          <p className="text-gray-600">
            {demoSections[selectedDemo].description}
          </p>
        </div>

        {selectedDemo === 'optimized' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Working Image</h3>
              <OptimizedImage
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=200&fit=crop"
                alt="Working image example"
                className="w-full h-48 object-cover rounded-lg"
                placeholderType="portfolio"
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Failed Image (with fallback)</h3>
              <OptimizedImage
                src="/non-existent-image.jpg"
                alt="Failed image example"
                className="w-full h-48 object-cover rounded-lg"
                placeholderType="portfolio"
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Slow Loading Simulation</h3>
              <OptimizedImage
                src="https://httpbin.org/delay/3"
                alt="Slow loading example"
                className="w-full h-48 object-cover rounded-lg"
                placeholderType="default"
              />
            </div>
          </div>
        )}

        {selectedDemo === 'placeholders' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <PlaceholderImage type="default" size="lg" />
              <p className="text-sm text-gray-600">Default</p>
            </div>
            <div className="text-center space-y-2">
              <PlaceholderImage type="portfolio" size="lg" />
              <p className="text-sm text-gray-600">Portfolio</p>
            </div>
            <div className="text-center space-y-2">
              <PlaceholderImage type="testimonial" size="lg" />
              <p className="text-sm text-gray-600">Testimonial</p>
            </div>
            <div className="text-center space-y-2">
              <PlaceholderImage type="error" size="lg" />
              <p className="text-sm text-gray-600">Error</p>
            </div>
          </div>
        )}

        {selectedDemo === 'gallery' && (
          <ImageGallery 
            images={sampleImages}
            columns={3}
            gap={6}
            className="mb-6"
          />
        )}
      </div>

      {/* Technical Details */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Technical Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Image Loading</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Automatic retry with exponential backoff</li>
              <li>• Fallback to branded placeholders</li>
              <li>• Lazy loading with Intersection Observer</li>
              <li>• Loading state management</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Error Handling</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Graceful degradation on failures</li>
              <li>• Click-to-retry functionality</li>
              <li>• Multiple fallback strategies</li>
              <li>• Branded error placeholders</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageShowcase;