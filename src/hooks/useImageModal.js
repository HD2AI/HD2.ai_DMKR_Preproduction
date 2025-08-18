import { useState, useCallback, useEffect } from 'react';

export const useImageModal = (images = []) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(null);

  // Update current image when index changes
  useEffect(() => {
    if (images.length > 0 && currentIndex >= 0 && currentIndex < images.length) {
      setCurrentImage(images[currentIndex]);
    } else {
      setCurrentImage(null);
    }
  }, [images, currentIndex]);

  const openModal = useCallback((imageOrIndex = 0) => {
    if (images.length === 0) return;

    let index = 0;
    
    // If imageOrIndex is a number, use it as index
    if (typeof imageOrIndex === 'number') {
      index = Math.max(0, Math.min(imageOrIndex, images.length - 1));
    } 
    // If it's an object (image), find its index
    else if (typeof imageOrIndex === 'object' && imageOrIndex.id) {
      const foundIndex = images.findIndex(img => img.id === imageOrIndex.id);
      index = foundIndex >= 0 ? foundIndex : 0;
    }
    // If it's a string (image id), find its index
    else if (typeof imageOrIndex === 'string') {
      const foundIndex = images.findIndex(img => img.id === imageOrIndex);
      index = foundIndex >= 0 ? foundIndex : 0;
    }

    setCurrentIndex(index);
    setIsOpen(true);
  }, [images]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const goToNext = useCallback(() => {
    if (images.length === 0) return;
    
    setCurrentIndex(prev => {
      const nextIndex = prev + 1;
      return nextIndex < images.length ? nextIndex : prev;
    });
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => {
      const prevIndex = prev - 1;
      return prevIndex >= 0 ? prevIndex : prev;
    });
  }, []);

  const goToIndex = useCallback((index) => {
    if (images.length === 0) return;
    
    const clampedIndex = Math.max(0, Math.min(index, images.length - 1));
    setCurrentIndex(clampedIndex);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          goToNext();
          break;
        case 'Escape':
          e.preventDefault();
          closeModal();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, goToNext, goToPrevious, closeModal]);

  return {
    // State
    isOpen,
    currentIndex,
    currentImage,
    
    // Actions
    openModal,
    closeModal,
    goToNext,
    goToPrevious,
    goToIndex,
    
    // Computed properties
    canGoNext: currentIndex < images.length - 1,
    canGoPrevious: currentIndex > 0,
    totalImages: images.length,
    
    // Helper functions
    isFirstImage: currentIndex === 0,
    isLastImage: currentIndex === images.length - 1,
    hasMultipleImages: images.length > 1
  };
};