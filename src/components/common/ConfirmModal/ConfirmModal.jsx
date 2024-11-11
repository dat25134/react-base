import React from 'react';
import Button from '../Button/Button';
import './ConfirmModal.css';

const ConfirmModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title = 'Xác nhận', 
  message = 'Bạn có chắc chắn muốn thực hiện hành động này?',
  confirmText = 'Đồng ý',
  cancelText = 'Hủy'
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="modal-buttons">
          <Button variant="danger" onClick={onConfirm}>
            {confirmText}
          </Button>
          <Button variant="secondary" onClick={onClose}>
            {cancelText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal; 