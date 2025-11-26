import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const MEHookup = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    moduleNo: 'L14-DFMA-015',
    completionStatus: 'Completed',
    completedOn: '',
    photo: null
  });

  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [photoPreview, setPhotoPreview] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        photo: file
      }));
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // Validation
    if (!formData.moduleNo) {
      showToast('Please enter Module No', 'error');
      return;
    }
    
    if (!formData.completedOn) {
      showToast('Please select Completed On date', 'error');
      return;
    }

    // Save to localStorage
    localStorage.setItem('meHookupStatus', formData.completionStatus);
    localStorage.setItem('meHookupCompletedOn', formData.completedOn);
    
    showToast('M&E Hookup status updated successfully!', 'success');
    
    // Redirect to dashboard after a delay
    setTimeout(() => {
      setCurrentPage('dashboard-module');
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      moduleNo: 'L14-DFMA-015',
      completionStatus: 'Completed',
      completedOn: '',
      photo: null
    });
    setPhotoPreview(null);
    showToast('Form reset successfully', 'info');
  };

  const handleBack = () => {
    setCurrentPage('dashboard-module');
  };

  return (
    <div className="enquiries-list">
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: '', type: '' })}
        />
      )}

      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-plug"></i>
          <h1>M&E Hookup</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">Form</button>
          <button className="btn-view-option">History</button>
        </div>
      </div>

      <div className="quotation-container">
        <div className="form-section">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            {/* Module No */}
            <div>
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
                  fontSize: '0.875rem'
                }}
                placeholder="Enter Module No"
              />
            </div>

            {/* Completion Status */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Completion Status <span style={{ color: '#dc2626' }}>*</span>
              </label>
              <select
                value={formData.completionStatus}
                onChange={(e) => handleInputChange('completionStatus', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem'
                }}
              >
                <option value="">Select Status</option>
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
                <option value="Not Started">Not Started</option>
                <option value="On Hold">On Hold</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            {/* Completed On */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Completed on <span style={{ color: '#dc2626' }}>*</span>
              </label>
              <input
                type="datetime-local"
                value={formData.completedOn}
                onChange={(e) => handleInputChange('completedOn', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem'
                }}
              />
            </div>

            {/* Photo Upload */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Photo
              </label>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <input
                  type="file"
                  id="photo"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  style={{ display: 'none' }}
                />
                <label 
                  htmlFor="photo" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    background: '#4a90e2',
                    color: 'white',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    border: 'none'
                  }}
                >
                  <i className="fas fa-cloud-upload-alt"></i>
                  Select Image
                </label>
                {photoPreview && (
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <img 
                      src={photoPreview} 
                      alt="Preview" 
                      style={{
                        width: '80px',
                        height: '80px',
                        objectFit: 'cover',
                        borderRadius: '6px',
                        border: '2px solid #e5e7eb'
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, photo: null }));
                        setPhotoPreview(null);
                      }}
                      style={{
                        position: 'absolute',
                        top: '-8px',
                        right: '-8px',
                        background: '#dc2626',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontSize: '0.75rem'
                      }}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'flex-start',
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '2px solid #e5e7eb'
          }}>
            <button
              onClick={handleSubmit}
              style={{
                padding: '0.75rem 2rem',
                background: '#4a90e2',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <i className="fas fa-save"></i>
              Submit
            </button>
            <button
              onClick={handleReset}
              style={{
                padding: '0.75rem 2rem',
                background: '#6b7280',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <i className="fas fa-redo"></i>
              Reset
            </button>
            <button
              onClick={handleBack}
              style={{
                padding: '0.75rem 2rem',
                background: 'white',
                color: '#374151',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <i className="fas fa-times"></i>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MEHookup;
