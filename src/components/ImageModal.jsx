import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, Info } from 'lucide-react';
import Modal from './Modal';
import OptimizedImage from './OptimizedImage';
import { cn } from '@/lib/utils';

const ImageModal = ({
  isOpen,
  onClose,
  image,
  images = [],
  currentIndex = 0,
  onNext,
  onPrevious,
  showNavigation = true,
  showZoom = true,
  showInfo = true,
  className = ''
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [showDetails, setShowDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const touchStartRef = useRef({ x: 0, y: 0, time: 0 });
  const touchEndRef = useRef({ x: 0, y: 0, time: 0 });

  // Reset zoom and position when image changes
  useEffect(() => {
    if (isOpen) {
      setZoomLevel(1);
      setPosition({ x: 0, y: 0 });
      setShowDetails(false);
      setIsLoading(true);
    }
  }, [isOpen, image?.id]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          if (onPrevious && showNavigation) onPrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          if (onNext && showNavigation) onNext();
          break;
        case '+':
        case '=':
          e.preventDefault();
          handleZoomIn();
          break;
        case '-':
          e.preventDefault();
          handleZoomOut();
          break;
        case '0':
          e.preventDefault();
          handleResetZoom();
          break;
        case 'i':
        case 'I':
          e.preventDefault();
          setShowDetails(prev => !prev);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onNext, onPrevious, showNavigation]);

  // Zoom functions
  const handleZoomIn = useCallback(() => {
    setZoomLevel(prev => Math.min(prev * 1.5, 5));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoomLevel(prev => Math.max(prev / 1.5, 0.5));
  }, []);

  const handleResetZoom = useCallback(() => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  // Mouse drag handlers
  const handleMouseDown = useCallback((e) => {
    if (zoomLevel <= 1) return;
    
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  }, [zoomLevel, position]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || zoomLevel <= 1) return;

    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  }, [isDragging, zoomLevel, dragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch handlers for swipe navigation and pinch zoom
  const handleTouchStart = useCallback((e) => {
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };

    if (e.touches.length === 1 && zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y
      });
    }
  }, [zoomLevel, position]);

  const handleTouchMove = useCallback((e) => {
    if (e.touches.length === 1 && isDragging && zoomLevel > 1) {
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y
      });
    }
  }, [isDragging, zoomLevel, dragStart]);

  const handleTouchEnd = useCallback((e) => {
    const touch = e.changedTouches[0];
    touchEndRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };

    setIsDragging(false);

    // Detect swipe gestures
    const deltaX = touchEndRef.current.x - touchStartRef.current.x;
    const deltaY = Math.abs(touchEndRef.current.y - touchStartRef.current.y);
    const deltaTime = touchEndRef.current.time - touchStartRef.current.time;

    // Only trigger swipe if it's horizontal, fast enough, and long enough
    if (
      Math.abs(deltaX) > 50 && 
      deltaY < 100 && 
      deltaTime < 300 && 
      zoomLevel <= 1 &&
      showNavigation
    ) {
      if (deltaX > 0 && onPrevious) {
        onPrevious();
      } else if (deltaX < 0 && onNext) {
        onNext();
      }
    }
  }, [zoomLevel, showNavigation, onNext, onPrevious]);

  // Mouse event listeners
  useEffect(() => {
    if (!isDragging) return;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleImageLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleImageError = useCallback(() => {
    setIsLoading(false);
  }, []);

  if (!image) return null;

  const hasNavigation = showNavigation && images.length > 1;
  const canGoPrevious = hasNavigation && currentIndex > 0;
  const canGoNext = hasNavigation && currentIndex < images.length - 1;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      closeOnOverlayClick={zoomLevel <= 1}
      showCloseButton={false}
      className={cn("bg-black", className)}
    >
      <div 
        ref={containerRef}
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        )}

        {/* Main Image */}
        <motion.div
          className="relative max-w-full max-h-full cursor-grab active:cursor-grabbing"
          style={{
            transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
            cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
          }}
          onMouseDown={handleMouseDown}
          animate={{
            scale: zoomLevel,
            x: position.x / zoomLevel,
            y: position.y / zoomLevel
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          <OptimizedImage
            ref={imageRef}
            src={image.src || image.imageUrl}
            alt={image.alt || image.title}
            className="max-w-[90vw] max-h-[90vh] object-contain select-none"
            placeholderType="portfolio"
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="eager"
            draggable={false}
          />
        </motion.div>

        {/* Navigation Arrows */}
        {hasNavigation && (
          <>
            <button
              onClick={onPrevious}
              disabled={!canGoPrevious}
              className={cn(
                "absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all backdrop-blur-sm",
                !canGoPrevious && "opacity-50 cursor-not-allowed"
              )}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={onNext}
              disabled={!canGoNext}
              className={cn(
                "absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all backdrop-blur-sm",
                !canGoNext && "opacity-50 cursor-not-allowed"
              )}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Top Controls */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          {/* Image Counter */}
          {hasNavigation && (
            <div className="px-3 py-1 rounded-full bg-black/50 text-white text-sm backdrop-blur-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
          
          <div className="flex items-center space-x-2">
            {/* Info Toggle */}
            {showInfo && (image.title || image.description) && (
              <button
                onClick={() => setShowDetails(prev => !prev)}
                className={cn(
                  "p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all backdrop-blur-sm",
                  showDetails && "bg-blue-600/80 hover:bg-blue-600"
                )}
                aria-label="Toggle image details"
              >
                <Info className="h-5 w-5" />
              </button>
            )}
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all backdrop-blur-sm"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Zoom Controls */}
        {showZoom && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 bg-black/50 rounded-full px-4 py-2 backdrop-blur-sm">
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 0.5}
              className={cn(
                "p-2 text-white hover:bg-white/20 rounded-full transition-colors",
                zoomLevel <= 0.5 && "opacity-50 cursor-not-allowed"
              )}
              aria-label="Zoom out"
            >
              <ZoomOut className="h-4 w-4" />
            </button>
            
            <span className="text-white text-sm min-w-[3rem] text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            
            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 5}
              className={cn(
                "p-2 text-white hover:bg-white/20 rounded-full transition-colors",
                zoomLevel >= 5 && "opacity-50 cursor-not-allowed"
              )}
              aria-label="Zoom in"
            >
              <ZoomIn className="h-4 w-4" />
            </button>
            
            <button
              onClick={handleResetZoom}
              className="p-2 text-white hover:bg-white/20 rounded-full transition-colors"
              aria-label="Reset zoom"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Image Details Overlay */}
        <AnimatePresence>
          {showDetails && showInfo && (image.title || image.description) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-4 right-4 max-w-sm bg-black/80 text-white p-4 rounded-lg backdrop-blur-sm"
            >
              {image.title && (
                <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
              )}
              {image.description && (
                <p className="text-sm text-gray-200 mb-2">{image.description}</p>
              )}
              {image.category && (
                <span className="inline-block px-2 py-1 bg-blue-600/80 text-xs rounded-full">
                  {image.category}
                </span>
              )}
              {image.location && (
                <p className="text-xs text-gray-300 mt-2">📍 {image.location}</p>
              )}
              {image.projectDate && (
                <p className="text-xs text-gray-300 mt-1">
                  📅 {new Date(image.projectDate).toLocaleDateString()}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Keyboard Shortcuts Help */}
        <div className="absolute bottom-4 left-4 text-xs text-gray-400 space-y-1 opacity-50 hover:opacity-100 transition-opacity">
          <div>← → Navigate</div>
          <div>+ - Zoom</div>
          <div>0 Reset</div>
          <div>I Info</div>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;