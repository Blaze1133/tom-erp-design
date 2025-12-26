import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreatePlantProjectMaster = ({ onBack, editData }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    projectId: editData?.projectId || '',
    projectName: editData?.projectName || '',
    clientName: editData?.clientName || '',
    poNo: editData?.poNo || '',
    mainCon: editData?.mainCon || ''
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
    
    if (!formData.projectId || !formData.projectName || !formData.clientName || !formData.poNo) {
      setToast({ show: true, message: 'Please fill in all required fields', type: 'error' });
      return;
    }

    setToast({ 
      show: true, 
      message: editData ? 'Project Master updated successfully!' : 'Project Master created successfully!', 
      type: 'success' 
    });

    setTimeout(() => {
      if (onBack) onBack();
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      projectId: '',
      projectName: '',
      clientName: '',
      poNo: '',
      mainCon: ''
    });
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-project-diagram"></i>
          <div>
            <h1>{editData ? 'Edit Plant Project Master' : 'New Plant Project Master'}</h1>
            <div className="detail-subtitle">
              {editData ? (
                <>
                  <span>{editData.projectId}</span>
                  <span>{editData.projectName}</span>
                </>
              ) : (
                <span>New Project</span>
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
            <h3>Project Information</h3>
          </div>
          <div className="section-body">
            <form onSubmit={handleSubmit}>
              <div className="detail-grid">
                <div className="detail-field">
                  <label>PROJECT ID <span className="required">*</span></label>
                  <input
                    type="text"
                    name="projectId"
                    value={formData.projectId}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter Project ID"
                    required
                  />
                </div>

                <div className="detail-field">
                  <label>PROJECT NAME <span className="required">*</span></label>
                  <input
                    type="text"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter Project Name"
                    required
                  />
                </div>

                <div className="detail-field">
                  <label>CLIENT NAME <span className="required">*</span></label>
                  <input
                    type="text"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter Client Name"
                    required
                  />
                </div>

                <div className="detail-field">
                  <label>PO NO <span className="required">*</span></label>
                  <input
                    type="text"
                    name="poNo"
                    value={formData.poNo}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter PO Number"
                    required
                  />
                </div>

                <div className="detail-field">
                  <label>MAIN CONTRACTOR</label>
                  <input
                    type="text"
                    name="mainCon"
                    value={formData.mainCon}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter Main Contractor"
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

export default CreatePlantProjectMaster;
