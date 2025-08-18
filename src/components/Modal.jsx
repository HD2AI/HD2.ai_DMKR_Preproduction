import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-black/80 transition-opacity backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      ></div>
      <div className="relative bg-background rounded-lg shadow-xl max-w-5xl mx-auto z-50 m-4 max-h-[90vh] overflow-auto">
        <button
          type="button"
          className="absolute top-3 right-3 z-10 text-muted-foreground hover:text-foreground bg-background/80 rounded-full p-2 backdrop-blur-sm transition-colors"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
