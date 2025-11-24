import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const TestingAlignment = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    moduleNo: 'GERA53-DFMA-16',
    testingAlignmentDate: '30-Oct-2025 10:44:55',
    testing: '',
    // Test items
    hydro: { yes: false, no: false, notApplicable: false, remarks1: '', remarks2: '', remarks3: '' },
    smoke: { yes: false, no: false, notApplicable: false, remarks1: '', remarks2: '', remarks3: '' },
    others: { yes: false, no: false, notApplicable: false, remarks1: '', remarks2: '', remarks3: '' },
    // Additional fields
    photo: '',
    section: '',
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

  const handleTestChange = (item, field, value) => {
    setFormData(prev => ({
      ...prev,
      [item]: {
        ...prev[item],
        [field]: value
      }
    }));
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.testing) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    // Store completion status in localStorage to persist across components
    localStorage.setItem('testingAlignmentStatus', 'Completed');
    
    // Update the module status to completed
    showToast('Testing & Alignment completed successfully!', 'success');
    
    // Navigate back to module dashboard after a delay
    setTimeout(() => {
      setCurrentPage('dashboard-module');
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      moduleNo: 'GERA53-DFMA-16',
      testingAlignmentDate: '30-Oct-2025 10:44:55',
      testing: '',
      hydro: { yes: false, no: false, notApplicable: false, remarks1: '', remarks2: '', remarks3: '' },
      smoke: { yes: false, no: false, notApplicable: false, remarks1: '', remarks2: '', remarks3: '' },
      others: { yes: false, no: false, notApplicable: false, remarks1: '', remarks2: '', remarks3: '' },
      photo: '',
      section: '',
      projectName: 'GERA5-2'
    });
    showToast('Form reset successfully', 'success');
  };

  const testItems = [
    { key: 'hydro', label: 'Hydro test' },
    { key: 'smoke', label: 'Smoke Test' },
    { key: 'others', label: 'Others' }
  ];

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-vial"></i>
          <h1>Testing & Alignment</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">Form</button>
          <button className="btn-view-option">Tests</button>
          <button className="btn-view-option">History</button>
        </div>
      </div>

      <div className="quotation-container">
        <div className="form-section">
          {/* Basic Information */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Module No.
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
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Testing & Alignment Date
              </label>
              <input
                type="text"
                value={formData.testingAlignmentDate}
                onChange={(e) => handleInputChange('testingAlignmentDate', e.target.value)}
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
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Testing
            </label>
            <textarea
              value={formData.testing}
              onChange={(e) => handleInputChange('testing', e.target.value)}
              rows={4}
              placeholder="Enter testing details..."
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem',
                resize: 'vertical'
              }}
            />
          </div>

          {/* Test Items Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: '600' }}>
              Test Results
            </h3>
            
            <div style={{
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid #e5e7eb'
            }}>
              {/* Header */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '2fr 80px 80px 120px 1fr 1fr 1fr',
                gap: '1rem',
                padding: '1rem',
                backgroundColor: '#e5e7eb',
                fontWeight: '600',
                fontSize: '0.875rem'
              }}>
                <div>Test Item</div>
                <div style={{ textAlign: 'center' }}>Yes</div>
                <div style={{ textAlign: 'center' }}>No</div>
                <div style={{ textAlign: 'center' }}>Not Applicable</div>
                <div>Remarks1</div>
                <div>Remarks2</div>
                <div>Remarks3</div>
              </div>

              {/* Test Items */}
              {testItems.map((item, index) => (
                <div
                  key={item.key}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 80px 80px 120px 1fr 1fr 1fr',
                    gap: '1rem',
                    padding: '1rem',
                    borderBottom: index < testItems.length - 1 ? '1px solid #e5e7eb' : 'none',
                    backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8f9fa'
                  }}
                >
                  <div style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                    {item.label}
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <input
                      type="radio"
                      name={item.key}
                      checked={formData[item.key]?.yes || false}
                      onChange={() => handleTestChange(item.key, 'yes', true)}
                      style={{ transform: 'scale(1.2)' }}
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <input
                      type="radio"
                      name={item.key}
                      checked={formData[item.key]?.no || false}
                      onChange={() => handleTestChange(item.key, 'no', true)}
                      style={{ transform: 'scale(1.2)' }}
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <input
                      type="radio"
                      name={item.key}
                      checked={formData[item.key]?.notApplicable || false}
                      onChange={() => handleTestChange(item.key, 'notApplicable', true)}
                      style={{ transform: 'scale(1.2)' }}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={formData[item.key]?.remarks1 || ''}
                      onChange={(e) => handleTestChange(item.key, 'remarks1', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '0.875rem'
                      }}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={formData[item.key]?.remarks2 || ''}
                      onChange={(e) => handleTestChange(item.key, 'remarks2', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '0.875rem'
                      }}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={formData[item.key]?.remarks3 || ''}
                      onChange={(e) => handleTestChange(item.key, 'remarks3', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '0.875rem'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
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
              backgroundColor: '#f9fafb'
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
                Choose File
              </label>
            </div>
          </div>

          {/* Bottom Fields */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Section
              </label>
              <input
                type="text"
                value={formData.section}
                onChange={(e) => handleInputChange('section', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem'
                }}
              />
            </div>
            <div>
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
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
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
              <i className="fas fa-save"></i>
              Save
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

export default TestingAlignment;
