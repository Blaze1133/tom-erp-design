import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateProjectMaster = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Form state
  const [formData, setFormData] = useState({
    projectId: '',
    projectName: '',
    clientName: '',
    poNo: '',
    mainCon: ''
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
    if (!formData.projectId || !formData.projectName) {
      showToast('Please fill in required fields', 'error');
      return;
    }
    showToast('Project Master saved successfully!', 'success');
  };

  const handleReset = () => {
    setFormData({
      projectId: '',
      projectName: '',
      clientName: '',
      poNo: '',
      mainCon: ''
    });
    showToast('Form reset successfully', 'info');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-project-diagram" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Project Master</h1>
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
            Project Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Project ID <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.projectId}
                onChange={(e) => handleInputChange('projectId', e.target.value)}
                placeholder="Enter Project ID"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Project Name <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.projectName}
                onChange={(e) => handleInputChange('projectName', e.target.value)}
                placeholder="Enter Project Name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Client Name</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.clientName}
                onChange={(e) => handleInputChange('clientName', e.target.value)}
                placeholder="Enter Client Name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">PO No</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.poNo}
                onChange={(e) => handleInputChange('poNo', e.target.value)}
                placeholder="Enter PO Number"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Main Con</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.mainCon}
                onChange={(e) => handleInputChange('mainCon', e.target.value)}
                placeholder="Enter Main Contractor"
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

export default CreateProjectMaster;
