import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreatePlantSiteLocation = ({ onBack, editData }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    siteId: editData?.siteId || '',
    siteName: editData?.siteName || '',
    siteAddress: editData?.siteAddress || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.siteId || !formData.siteName || !formData.siteAddress) {
      setToast({ show: true, message: 'Please fill in all required fields', type: 'error' });
      return;
    }

    setToast({ 
      show: true, 
      message: editData ? 'Site Location updated successfully!' : 'Site Location created successfully!', 
      type: 'success' 
    });

    setTimeout(() => {
      if (onBack) onBack();
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      siteId: '',
      siteName: '',
      siteAddress: ''
    });
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <h1>{editData ? 'Edit Site Location' : 'New Site Location'}</h1>
            <div className="detail-subtitle">
              {editData ? (
                <>
                  <span>{editData.siteId}</span>
                  <span>{editData.siteName}</span>
                </>
              ) : (
                <span>New Site</span>
              )}
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={onBack}>List</button>
          <button className="btn-action">Search</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <div className="toolbar-left">
          <button type="submit" className="btn-toolbar-primary" onClick={handleSubmit}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button type="button" className="btn-toolbar" onClick={onBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button type="button" className="btn-toolbar" onClick={handleReset}>
            <i className="fas fa-redo"></i>
            Reset
          </button>
        </div>
      </div>

      <div className="detail-content">
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Site Information</h3>
          </div>
          <div className="section-body">
            <form onSubmit={handleSubmit}>
              <div className="detail-grid">
                <div className="detail-field">
                  <label>SITE ID <span className="required">*</span></label>
                  <input
                    type="text"
                    name="siteId"
                    value={formData.siteId}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter Site ID"
                    required
                  />
                </div>

                <div className="detail-field">
                  <label>SITE NAME <span className="required">*</span></label>
                  <input
                    type="text"
                    name="siteName"
                    value={formData.siteName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter Site Name"
                    required
                  />
                </div>

                <div className="detail-field full-width">
                  <label>SITE ADDRESS <span className="required">*</span></label>
                  <textarea
                    name="siteAddress"
                    value={formData.siteAddress}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter Site Address"
                    rows="3"
                    required
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="detail-footer">
        <button className="btn-secondary" onClick={onBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-primary" onClick={handleSubmit}>
          <i className="fas fa-save"></i>
          Save
        </button>
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

export default CreatePlantSiteLocation;
