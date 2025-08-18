import React from 'react';
import SimpleImage from './SimpleImage';
import ImageModal from './ImageModal';
import { useImageModal } from '@/hooks/useImageModal';
import { cn } from '@/lib/utils';

const ImageGallery = ({ 
  images = [], 
  className = '',
  columns = 3,
  gap = 4,
  showLoadingStates = true,
  enableModal = true,
  onImageClick
}) => {
  const {
    isOpen,
    currentIndex,
    currentImage,
    openModal,
    closeModal,
    goToNext,
    goToPrevious
  } = useImageModal(images);

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  const gapClasses = {
    2: 'gap-2',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8'
  };

  const handleImageClick = (image, index) => {
    if (onImageClick) {
      onImageClick(image, index);
    } else if (enableModal) {
      openModal(index);
    }
  };

  return (
    <>
      <div 
        className={cn(
          'grid',
          gridCols[columns] || gridCols[3],
          gapClasses[gap] || gapClasses[4],
          className
        )}
      >
        {images.map((image, index) => (
          <div 
            key={image.id || index}
            className={cn(
              "relative group overflow-hidden rounded-lg bg-gray-100",
              (enableModal || onImageClick) && "cursor-pointer"
            )}
            onClick={() => handleImageClick(image, index)}
          >
            <SimpleImage
              src={image.src || image.imageUrl}
              alt={image.alt || image.title || `Gallery image ${index + 1}`}
              fallback={image.fallback}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              showPlaceholder={true}
              placeholderType="portfolio"
              placeholderText={image.title || "Portfolio Image"}
              onLoad={() => console.log(`Image ${index + 1} loaded successfully`)}
              onError={() => console.warn(`Image ${index + 1} failed to load`)}
            />
            
            {/* Hover overlay with image info */}
            {(image.title || image.description) && (
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  {image.title && (
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                  )}
                  {image.description && (
                    <p className="text-sm text-gray-200 mt-1">{image.description}</p>
                  )}
                  {image.category && (
                    <span className="inline-block mt-2 px-2 py-1 bg-blue-600/80 text-xs rounded-full">
                      {image.category}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Click indicator */}
            {(enableModal || onImageClick) && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {enableModal && (
        <ImageModal
          isOpen={isOpen}
          onClose={closeModal}
          image={currentImage}
          images={images}
          currentIndex={currentIndex}
          onNext={goToNext}
          onPrevious={goToPrevious}
        />
      )}
    </>
  );
};

export default ImageGallery;