import React from 'react';
import './CustomAlert.css';

const CustomAlert = ({ 
  show, 
  type = 'alert', 
  title, 
  message, 
  onConfirm, 
  onCancel,
  confirmText = 'OK',
  cancelText = 'Cancel',
  variant = 'info'
}) => {
  if (!show) return null;

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
  };

  const getIcon = () => {
    switch (variant) {
      case 'success':
        return 'fas fa-check-circle';
      case 'error':
      case 'danger':
        return 'fas fa-exclamation-circle';
      case 'warning':
        return 'fas fa-exclamation-triangle';
      case 'info':
      default:
        return 'fas fa-info-circle';
    }
  };

  return (
    <div className="custom-alert-overlay">
      <div className="custom-alert-container">
        <div className={`custom-alert-header ${variant}`}>
          <i className={getIcon()}></i>
          <h3>{title || (type === 'confirm' ? 'Confirm Action' : 'Alert')}</h3>
        </div>
        
        <div className="custom-alert-body">
          <p>{message}</p>
        </div>
        
        <div className="custom-alert-footer">
          {type === 'confirm' ? (
            <>
              <button 
                className="custom-alert-btn custom-alert-btn-cancel" 
                onClick={handleCancel}
              >
                {cancelText}
              </button>
              <button 
                className="custom-alert-btn custom-alert-btn-confirm" 
                onClick={handleConfirm}
              >
                {confirmText}
              </button>
            </>
          ) : (
            <button 
              className="custom-alert-btn custom-alert-btn-confirm" 
              onClick={handleConfirm}
            >
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;
