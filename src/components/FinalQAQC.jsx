import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const FinalQAQC = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    moduleNo: 'L4-2FMA-016',
    completionStatus: 'Completed',
    completedOn: new Date().toISOString().split('T')[0],
    checkedBy: '',
    checkedBySignature: null,
    checkedDate: '',
    verifiedBy: '',
    verifiedBySignature: null,
    verifiedDate: '',
    photo: null
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

  const handleFileUpload = (field, file) => {
    if (file) {
      setFormData(prev => ({
        ...prev,
        [field]: file
      }));
      showToast(`${field === 'photo' ? 'Photo' : 'Signature'} uploaded successfully`, 'success');
    }
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.moduleNo || !formData.completionStatus) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    // Store completion status in localStorage
    localStorage.setItem('finalQAQCStatus', 'Completed');
    
    showToast('Final QA/QC completed successfully!', 'success');
    
    // Navigate back to module dashboard after a delay
    setTimeout(() => {
      setCurrentPage('dashboard-module');
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      moduleNo: 'L4-2FMA-016',
      completionStatus: 'Completed',
      completedOn: new Date().toISOString().split('T')[0],
      checkedBy: '',
      checkedBySignature: null,
      checkedDate: '',
      verifiedBy: '',
      verifiedBySignature: null,
      verifiedDate: '',
      photo: null
    });
    showToast('Form reset successfully', 'success');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-clipboard-check" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Final QA/QC</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={() => setCurrentPage('dashboard-module')}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn btn-primary" onClick={handleSubmit}>
            <i className="fas fa-save"></i>
            Submit
          </button>
          <button className="btn btn-secondary" onClick={handleReset}>
            <i className="fas fa-redo"></i>
            Reset
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-info-circle"></i>
            Module Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">MODULE NO. <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.moduleNo}
                onChange={(e) => handleInputChange('moduleNo', e.target.value)}
                placeholder="L4-2FMA-016"
              />
            </div>
            <div className="form-group">
              <label className="form-label">COMPLETION STATUS <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.completionStatus}
                onChange={(e) => handleInputChange('completionStatus', e.target.value)}
              >
                <option value="">Select status...</option>
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Failed</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">COMPLETED ON</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.completedOn}
                onChange={(e) => handleInputChange('completedOn', e.target.value)}
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Checked By Section */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-user-check"></i>
            Checked By
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">CHECKED BY</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.checkedBy}
                onChange={(e) => handleInputChange('checkedBy', e.target.value)}
                placeholder="Enter your name..."
              />
            </div>
            <div className="form-group">
              <label className="form-label">CHECKED DATE</label>
              <input 
                type="datetime-local" 
                className="form-control"
                value={formData.checkedDate}
                onChange={(e) => handleInputChange('checkedDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">SIGNATURE</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <input 
                  type="file" 
                  className="form-control"
                  accept="image/*"
                  onChange={(e) => handleFileUpload('checkedBySignature', e.target.files[0])}
                  style={{ flex: 1 }}
                />
                {formData.checkedBySignature && (
                  <span style={{ color: '#28a745', fontSize: '0.875rem' }}>
                    <i className="fas fa-check-circle"></i> Uploaded
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Verified By Section */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-user-shield"></i>
            Verified By
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">VERIFIED BY</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.verifiedBy}
                onChange={(e) => handleInputChange('verifiedBy', e.target.value)}
                placeholder="Enter your name..."
              />
            </div>
            <div className="form-group">
              <label className="form-label">VERIFIED DATE</label>
              <input 
                type="datetime-local" 
                className="form-control"
                value={formData.verifiedDate}
                onChange={(e) => handleInputChange('verifiedDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">SIGNATURE</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <input 
                  type="file" 
                  className="form-control"
                  accept="image/*"
                  onChange={(e) => handleFileUpload('verifiedBySignature', e.target.files[0])}
                  style={{ flex: 1 }}
                />
                {formData.verifiedBySignature && (
                  <span style={{ color: '#28a745', fontSize: '0.875rem' }}>
                    <i className="fas fa-check-circle"></i> Uploaded
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Photo Upload Section */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-camera"></i>
            Photo Documentation
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          <div className="form-grid">
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label className="form-label">PHOTO</label>
              <div style={{ 
                border: '2px dashed #d0d0d0', 
                borderRadius: '8px', 
                padding: '2rem', 
                textAlign: 'center',
                backgroundColor: '#fafafa'
              }}>
                <input 
                  type="file" 
                  id="photo-upload"
                  accept="image/*"
                  onChange={(e) => handleFileUpload('photo', e.target.files[0])}
                  style={{ display: 'none' }}
                />
                <label 
                  htmlFor="photo-upload" 
                  style={{ 
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <i className="fas fa-cloud-upload-alt" style={{ fontSize: '3rem', color: '#4a90e2' }}></i>
                  <div>
                    <p style={{ margin: 0, fontSize: '1rem', fontWeight: '500' }}>
                      {formData.photo ? formData.photo.name : 'Select Image'}
                    </p>
                    <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem', color: '#666' }}>
                      Click to browse or drag and drop
                    </p>
                  </div>
                </label>
                {formData.photo && (
                  <div style={{ marginTop: '1rem' }}>
                    <span style={{ color: '#28a745', fontSize: '0.875rem' }}>
                      <i className="fas fa-check-circle"></i> Photo uploaded successfully
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={() => setCurrentPage('dashboard-module')}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-secondary" onClick={handleReset}>
              <i className="fas fa-redo"></i>
              Reset
            </button>
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

export default FinalQAQC;
