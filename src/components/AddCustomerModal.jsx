import React from 'react';
import AddCustomerForm from './AddCustomerForm';

const AddCustomerModal = ({ show, onClose, onSave }) => {
  if (!show) return null;

  const handleSave = (customerData) => {
    if (onSave) {
      onSave(customerData);
    }
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        style={{ maxWidth: '1200px', width: '95%', maxHeight: '90vh', overflow: 'auto' }} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header" style={{ padding: '1.5rem 2rem', borderBottom: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '600', color: '#333' }}>Add New Customer</h2>
          <button 
            className="modal-close-btn" 
            onClick={onClose} 
            style={{ 
              background: 'none', 
              border: 'none', 
              fontSize: '1.75rem', 
              cursor: 'pointer', 
              color: '#666', 
              padding: '0', 
              width: '30px', 
              height: '30px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}
          >
            ×
          </button>
        </div>
        
        <div className="modal-body" style={{ padding: '0' }}>
          <AddCustomerForm 
            onSave={handleSave}
            onCancel={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default AddCustomerModal;
