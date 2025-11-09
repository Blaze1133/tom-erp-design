import React, { useEffect } from 'react';

const Toast = ({ message, type, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div className={`toast ${show ? 'show' : ''} ${type}`}>
      <i className={`fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}`}></i>
      <div className="toast-message">{message}</div>
    </div>
  );
};

export default Toast;
