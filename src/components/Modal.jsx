import React, { useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = ({ 
  isOpen, 
  onClose, 
  children, 
  size = 'lg',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  title,
  className = ''
}) => {
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);

  // Size variants for responsive design
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-[95vw] max-h-[95vh]'
  };

  // Animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      y: 20,
      transition: {
        duration: 0.2
      }
    }
  };

  // Get all focusable elements within the modal
  const getFocusableElements = useCallback(() => {
    if (!modalRef.current) return [];
    
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'textarea:not([disabled])',
      'select:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])'
    ].join(', ');
    
    return Array.from(modalRef.current.querySelectorAll(focusableSelectors));
  }, []);

  // Handle focus trap
  const handleTabKey = useCallback((e) => {
    const focusableElements = getFocusableElements();
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }, [getFocusableElements]);

  // Handle keyboard events
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape' && closeOnEscape) {
      onClose();
    } else if (e.key === 'Tab') {
      handleTabKey(e);
    }
  }, [closeOnEscape, onClose, handleTabKey]);

  // Handle overlay click
  const handleOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      onClose();
    }
  }, [closeOnOverlayClick, onClose]);

  // Manage focus and body scroll
  useEffect(() => {
    if (isOpen) {
      // Store the currently focused element
      previousFocusRef.current = document.activeElement;
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Add event listeners
      document.addEventListener('keydown', handleKeyDown);
      
      // Focus the modal after a brief delay to ensure it's rendered
      setTimeout(() => {
        const focusableElements = getFocusableElements();
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        } else if (modalRef.current) {
          modalRef.current.focus();
        }
      }, 100);
    }

    return () => {
      // Restore body scroll
      document.body.style.overflow = 'unset';
      
      // Remove event listeners
      document.removeEventListener('keydown', handleKeyDown);
      
      // Restore focus to the previously focused element
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus();
      }
    };
  }, [isOpen, handleKeyDown, getFocusableElements]);

  // Don't render anything if modal is not open
  if (!isOpen) return null;

  const modalContent = (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={overlayVariants}
          onClick={handleOverlayClick}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden="true"
          />
          
          {/* Modal Content */}
          <motion.div
            ref={modalRef}
            className={`
              relative bg-white dark:bg-gray-900 rounded-lg shadow-2xl 
              ${sizeClasses[size]} w-full max-h-[90vh] overflow-hidden
              ${className}
            `}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "modal-title" : undefined}
            tabIndex={-1}
          >
            {/* Close Button */}
            {showCloseButton && (
              <button
                type="button"
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors backdrop-blur-sm"
                onClick={onClose}
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            )}
            
            {/* Modal Header */}
            {title && (
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h2 id="modal-title" className="text-xl font-semibold text-gray-900 dark:text-white">
                  {title}
                </h2>
              </div>
            )}
            
            {/* Modal Body */}
            <div className={`overflow-auto ${title ? 'max-h-[calc(90vh-8rem)]' : 'max-h-[90vh]'}`}>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Render modal in a portal
  return createPortal(modalContent, document.body);
};

export default Modal;
