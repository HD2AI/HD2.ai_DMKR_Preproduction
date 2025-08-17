import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
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
        className="fixed inset-0 bg-black opacity-50 transition-opacity"
        aria-hidden="true"
        onClick={onClose}
      ></div>
      <div className="relative bg-background rounded-lg shadow-xl p-6 max-w-lg mx-auto z-50">
        <button
          type="button"
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
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
        <div className="mt-3 text-center sm:mt-0 sm:text-left">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;