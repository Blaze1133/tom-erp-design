import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateContractor = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Form state
  const [formData, setFormData] = useState({
    contractorName: ''
  });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    if (!formData.contractorName.trim()) {
      showToast('Please enter contractor name', 'error');
      return;
    }
    showToast('Contractor saved successfully!', 'success');
  };

  const handleClearAll = () => {
    setFormData({
      contractorName: ''
    });
    showToast('Form cleared successfully', 'info');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-hard-hat" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Add Contractor</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={() => window.history.back()}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-info-circle"></i>
            Contractor Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          <div className="form-grid">
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label">Contractor Name <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.contractorName}
                onChange={(e) => handleInputChange('contractorName', e.target.value)}
                placeholder="Enter Contractor Name"
              />
            </div>
          </div>
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleClearAll}>
            <i className="fas fa-eraser"></i>
            Clear All
          </button>
          <div>
            <button className="btn btn-primary" onClick={handleSave}>
              <i className="fas fa-save"></i>
              Save
            </button>
          </div>
        </div>
      </div>

      <Toast 
        message={toast.message} 
        type={toast.type} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
    </div>
  );
};

export default CreateContractor;
