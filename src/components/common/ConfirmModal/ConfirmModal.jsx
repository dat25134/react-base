import React from 'react';
import Button from '../Button/Button';

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm',
  message = 'Are you sure you want to perform this action?',
  confirmText = 'Confirm',
  cancelText = 'Cancel'
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          {title}
        </h2>
        <p className="text-gray-600 mb-6">
          {message}
        </p>
        <div className="flex justify-end space-x-4">
          <Button
            variant="danger"
            onClick={onConfirm}
          >
            {confirmText}
          </Button>
          <Button
            variant="secondary"
            onClick={onClose}
          >
            {cancelText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal; 