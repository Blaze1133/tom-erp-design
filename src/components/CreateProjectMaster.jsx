import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateProjectMaster = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

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
    if (!formData.projectId || !formData.projectName || !formData.clientName || !formData.poNo) {
      showToast('Please fill in required fields', 'error');
      return;
    }
    showToast('Project Master saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      setFormData({
        projectId: '',
        projectName: '',
        clientName: '',
        poNo: '',
        mainCon: ''
      });
      showToast('Form reset successfully', 'info');
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-project-diagram"></i>
          <div>
            <h1>Projects_Master</h1>
            <div className="detail-subtitle">
              <span>New Project Master</span>
              <span style={{ marginLeft: '1rem', padding: '0.25rem 0.75rem', background: '#4a90e2', color: 'white', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '600' }}>MEP MODULE</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary" onClick={handleSubmit}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print
        </button>
        <div className="toolbar-dropdown" style={{ marginLeft: 'auto' }}>
          <button className="btn-toolbar">
            <i className="fas fa-cog"></i>
            Actions
            <i className="fas fa-chevron-down" style={{ marginLeft: '0.5rem', fontSize: '0.7rem' }}></i>
          </button>
        </div>
      </div>

      <div className="detail-content">
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Project Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>PROJECT ID <span style={{color: 'red'}}>*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.projectId}
                  onChange={(e) => handleInputChange('projectId', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>PROJECT NAME <span style={{color: 'red'}}>*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.projectName}
                  onChange={(e) => handleInputChange('projectName', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>CLIENT NAME <span style={{color: 'red'}}>*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.clientName}
                  onChange={(e) => handleInputChange('clientName', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>PO NO <span style={{color: 'red'}}>*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.poNo}
                  onChange={(e) => handleInputChange('poNo', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>MAIN CON</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.mainCon}
                  onChange={(e) => handleInputChange('mainCon', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="detail-footer">
          <button className="btn-toolbar" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn-toolbar-primary" onClick={handleSubmit}>
            <i className="fas fa-save"></i>
            Save
          </button>
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
