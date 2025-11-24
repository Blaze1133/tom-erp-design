import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const Packaging = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    moduleNo: 'GERA53-DFMA-10',
    packaging: 'Completed',
    packageConditionOn: '30-Oct-2025 10:56:20',
    photo: '',
    projectName: 'GERA5-2'
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
    // Validate required fields
    if (!formData.moduleNo) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    // Store completion status in localStorage to persist across components
    localStorage.setItem('packagingStatus', 'Completed');
    
    // Update the module status to completed
    showToast('Packaging completed successfully!', 'success');
    
    // Navigate back to module dashboard after a delay
    setTimeout(() => {
      setCurrentPage('dashboard-module');
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      moduleNo: 'GERA53-DFMA-10',
      packaging: 'Completed',
      packageConditionOn: '30-Oct-2025 10:56:20',
      photo: '',
      projectName: 'GERA5-2'
    });
    showToast('Form reset successfully', 'success');
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-box"></i>
          <h1>Packaging</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">Form</button>
          <button className="btn-view-option">Package</button>
          <button className="btn-view-option">History</button>
        </div>
      </div>

      <div className="quotation-container">
        <div className="form-section">
          {/* Basic Information */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Module No <span style={{ color: '#dc2626' }}>*</span>
            </label>
            <input
              type="text"
              value={formData.moduleNo}
              onChange={(e) => handleInputChange('moduleNo', e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem',
                backgroundColor: '#f9fafb'
              }}
              readOnly
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Packaging
            </label>
            <select
              value={formData.packaging}
              onChange={(e) => handleInputChange('packaging', e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem'
              }}
            >
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Not Started">Not Started</option>
            </select>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Package Condition on
            </label>
            <input
              type="text"
              value={formData.packageConditionOn}
              onChange={(e) => handleInputChange('packageConditionOn', e.target.value)}
              placeholder="dd-MM-yyyy HH:mm:ss"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem',
                backgroundColor: '#f9fafb'
              }}
              readOnly
            />
          </div>

          {/* Photo Upload Section */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Photo
            </label>
            <div style={{
              border: '2px dashed #d1d5db',
              borderRadius: '6px',
              padding: '2rem',
              textAlign: 'center',
              backgroundColor: '#f9fafb',
              position: 'relative'
            }}>
              <i className="fas fa-camera" style={{ fontSize: '2rem', color: '#9ca3af', marginBottom: '1rem' }}></i>
              <p style={{ margin: '0 0 1rem 0', color: '#6b7280', fontSize: '0.875rem' }}>Select Image</p>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleInputChange('photo', e.target.files[0])}
                style={{ display: 'none' }}
                id="photo-upload"
              />
              <label
                htmlFor="photo-upload"
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#4f46e5',
                  color: 'white',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <i className="fas fa-upload"></i>
                Select Image
              </label>
              {/* Upload and Delete buttons */}
              <div style={{ 
                position: 'absolute', 
                top: '10px', 
                right: '10px',
                display: 'flex',
                gap: '0.5rem'
              }}>
                <button style={{
                  padding: '0.25rem 0.5rem',
                  backgroundColor: '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  cursor: 'pointer'
                }}>
                  <i className="fas fa-upload"></i>
                </button>
                <button style={{
                  padding: '0.25rem 0.5rem',
                  backgroundColor: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  cursor: 'pointer'
                }}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Project Name
            </label>
            <input
              type="text"
              value={formData.projectName}
              onChange={(e) => handleInputChange('projectName', e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem',
                backgroundColor: '#f9fafb'
              }}
              readOnly
            />
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '3rem' }}>
            <button 
              onClick={handleSubmit}
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <i className="fas fa-check"></i>
              Submit
            </button>
            <button 
              onClick={handleReset}
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <i className="fas fa-redo"></i>
              Reset
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

export default Packaging;
