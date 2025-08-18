import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import ImageModal from './ImageModal';
import { useImageModal } from '@/hooks/useImageModal';
import { cn } from '@/lib/utils';

const ImageModalDemo = () => {
  const [selectedDemo, setSelectedDemo] = useState('gallery');

  // Sample portfolio images for demonstration
  const portfolioImages = [
    {
      id: 'bathroom-1',
      src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
      alt: 'Modern bathroom tiling',
      title: 'Luxury Bathroom Renovation',
      description: 'Premium ceramic tiles with intricate geometric patterns creating a spa-like atmosphere.',
      category: 'Bathroom',
      location: 'London, UK',
      projectDate: '2024-01-15',
      type: 'portfolio'
    },
    {
      id: 'kitchen-1',
      src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
      alt: 'Kitchen backsplash tiling',
      title: 'Contemporary Kitchen Backsplash',
      description: 'Elegant subway tiles with dark grout for a modern kitchen design.',
      category: 'Kitchen',
      location: 'Manchester, UK',
      projectDate: '2024-02-20',
      type: 'portfolio'
    },
    {
      id: 'floor-1',
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      alt: 'Large format floor tiles',
      title: 'Open Plan Living Space',
      description: 'Large format porcelain tiles creating seamless flow throughout the living area.',
      category: 'Flooring',
      location: 'Birmingham, UK',
      projectDate: '2024-03-10',
      type: 'portfolio'
    },
    {
      id: 'outdoor-1',
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      alt: 'Outdoor patio tiling',
      title: 'Garden Patio Installation',
      description: 'Weather-resistant outdoor tiles perfect for entertaining spaces.',
      category: 'Outdoor',
      location: 'Leeds, UK',
      projectDate: '2024-04-05',
      type: 'portfolio'
    },
    {
      id: 'commercial-1',
      src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
      alt: 'Commercial space tiling',
      title: 'Restaurant Interior Design',
      description: 'Durable commercial-grade tiles designed for high-traffic areas.',
      category: 'Commercial',
      location: 'Liverpool, UK',
      projectDate: '2024-05-12',
      type: 'portfolio'
    },
    {
      id: 'shower-1',
      src: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop',
      alt: 'Walk-in shower tiling',
      title: 'Walk-in Shower Suite',
      description: 'Waterproof tiling solution with anti-slip properties for safety and style.',
      category: 'Bathroom',
      location: 'Sheffield, UK',
      projectDate: '2024-06-18',
      type: 'portfolio'
    }
  ];

  const {
    isOpen: isStandaloneOpen,
    currentIndex: standaloneIndex,
    currentImage: standaloneImage,
    openModal: openStandaloneModal,
    closeModal: closeStandaloneModal,
    goToNext: goToNextStandalone,
    goToPrevious: goToPreviousStandalone
  } = useImageModal(portfolioImages);

  const demoSections = {
    gallery: {
      title: 'Interactive Gallery',
      description: 'Click on any image to open it in the modal viewer'
    },
    standalone: {
      title: 'Standalone Modal',
      description: 'Open modal programmatically with navigation controls'
    },
    features: {
      title: 'Feature Overview',
      description: 'Key features and capabilities of the ImageModal component'
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          ImageModal Component Demo
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Specialized modal for portfolio image viewing with navigation, zoom functionality, 
          touch/swipe support, and detailed project information overlay.
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

        {selectedDemo === 'gallery' && (
          <div className="space-y-6">
            <ImageGallery 
              images={portfolioImages}
              columns={3}
              gap={6}
              enableModal={true}
            />
            <div className="text-center text-sm text-gray-500">
              Click on any image to open it in the modal viewer
            </div>
          </div>
        )}

        {selectedDemo === 'standalone' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {portfolioImages.slice(0, 6).map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => openStandaloneModal(index)}
                  className="group relative overflow-hidden rounded-lg bg-gray-100 hover:shadow-lg transition-shadow"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Open Modal</span>
                  </div>
                </button>
              ))}
            </div>
            
            <ImageModal
              isOpen={isStandaloneOpen}
              onClose={closeStandaloneModal}
              image={standaloneImage}
              images={portfolioImages}
              currentIndex={standaloneIndex}
              onNext={goToNextStandalone}
              onPrevious={goToPreviousStandalone}
            />
          </div>
        )}

        {selectedDemo === 'features' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Navigation Features</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Arrow key navigation (← →)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Touch/swipe gestures on mobile
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Click navigation buttons
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Image counter display
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Zoom & Pan</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Zoom in/out with + and - keys
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Mouse drag to pan when zoomed
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Touch drag support on mobile
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Reset zoom with '0' key
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Information Display</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Project title and description
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Category and location tags
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Project completion date
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Toggle info with 'I' key
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Accessibility</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Full keyboard navigation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    ARIA labels and semantic HTML
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Focus management and trapping
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Screen reader compatible
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Keyboard Shortcuts Reference */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Keyboard Shortcuts
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">←</kbd>
            <span className="text-gray-600">Previous image</span>
          </div>
          <div className="flex items-center space-x-2">
            <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">→</kbd>
            <span className="text-gray-600">Next image</span>
          </div>
          <div className="flex items-center space-x-2">
            <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">+</kbd>
            <span className="text-gray-600">Zoom in</span>
          </div>
          <div className="flex items-center space-x-2">
            <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">-</kbd>
            <span className="text-gray-600">Zoom out</span>
          </div>
          <div className="flex items-center space-x-2">
            <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">0</kbd>
            <span className="text-gray-600">Reset zoom</span>
          </div>
          <div className="flex items-center space-x-2">
            <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">I</kbd>
            <span className="text-gray-600">Toggle info</span>
          </div>
          <div className="flex items-center space-x-2">
            <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Esc</kbd>
            <span className="text-gray-600">Close modal</span>
          </div>
          <div className="flex items-center space-x-2">
            <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Drag</kbd>
            <span className="text-gray-600">Pan when zoomed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModalDemo;