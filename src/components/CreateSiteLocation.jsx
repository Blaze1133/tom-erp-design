import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateSiteLocation = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Form state
  const [formData, setFormData] = useState({
    siteId: '',
    siteName: '',
    siteAddress: ''
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

  const handleSubmit = () => {
    if (!formData.siteId || !formData.siteName) {
      showToast('Please fill in required fields', 'error');
      return;
    }
    showToast('Site Location saved successfully!', 'success');
  };

  const handleReset = () => {
    setFormData({
      siteId: '',
      siteName: '',
      siteAddress: ''
    });
    showToast('Form reset successfully', 'info');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-map-marker-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Site Locations</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={() => window.history.back()}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn btn-primary" onClick={handleSubmit}>
            <i className="fas fa-save"></i>
            Submit
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-info-circle"></i>
            Site Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Site ID <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.siteId}
                onChange={(e) => handleInputChange('siteId', e.target.value)}
                placeholder="Enter Site ID"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Site Name <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.siteName}
                onChange={(e) => handleInputChange('siteName', e.target.value)}
                placeholder="Enter Site Name"
              />
            </div>
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label">Site Address</label>
              <textarea 
                className="form-control"
                value={formData.siteAddress}
                onChange={(e) => handleInputChange('siteAddress', e.target.value)}
                placeholder="Enter Site Address"
                rows="4"
              />
            </div>
          </div>
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleReset}>
            <i className="fas fa-undo"></i>
            Reset
          </button>
          <div>
            <button className="btn btn-primary" onClick={handleSubmit}>
              <i className="fas fa-check"></i>
              Submit
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

export default CreateSiteLocation;
