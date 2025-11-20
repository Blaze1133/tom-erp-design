import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateSdlMaster = ({ onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('user-notes');
  
  // Form data state
  const [formData, setFormData] = useState({
    customForm: 'PLS SDL Master Form',
    monthlyRemuneration: '',
    inactive: false,
    highRange: 0,
    lowRange: 0,
    sdlPayable: '',
    maxMinSdl: 0
  });

  // Custom form options from the uploaded image
  const customFormOptions = [
    'PLS SDL Master Form',
    'Standard SDL Master Form'
  ];

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
    // Basic validation
    if (!formData.monthlyRemuneration || !formData.highRange || !formData.lowRange) {
      showToast('Please fill in required fields: Monthly Remuneration, High Range, Low Range', 'error');
      return;
    }

    showToast('New SDL Master created successfully!', 'success');
    if (onSave) {
      onSave(formData);
    }
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (onCancel) {
        onCancel();
      }
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-percentage" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>SDL Master</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-cog"></i>
            Actions
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-list"></i>
            List
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-search"></i>
            Search
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-cog"></i>
            Customize
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-ellipsis-h"></i>
            More
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* SDL Master Information */}
        <div className="form-section">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '5px' }}>
                CUSTOM FORM <span className="required" style={{ color: '#dc3545' }}>*</span>
              </label>
              <select 
                className="form-control"
                value={formData.customForm}
                onChange={(e) => handleInputChange('customForm', e.target.value)}
                style={{ fontSize: '14px', padding: '8px 12px' }}
              >
                {customFormOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '5px' }}>
                LOW RANGE <span className="required" style={{ color: '#dc3545' }}>*</span>
              </label>
              <input 
                type="number" 
                className="form-control"
                value={formData.lowRange}
                onChange={(e) => handleInputChange('lowRange', parseFloat(e.target.value) || 0)}
                placeholder="Enter low range"
                style={{ fontSize: '14px', padding: '8px 12px' }}
              />
            </div>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '5px' }}>
                HIGH RANGE <span className="required" style={{ color: '#dc3545' }}>*</span>
              </label>
              <input 
                type="number" 
                className="form-control"
                value={formData.highRange}
                onChange={(e) => handleInputChange('highRange', parseFloat(e.target.value) || 0)}
                placeholder="Enter high range"
                style={{ fontSize: '14px', padding: '8px 12px' }}
              />
            </div>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '5px' }}>
                MONTHLY REMUNERATION <span className="required" style={{ color: '#dc3545' }}>*</span>
              </label>
              <input 
                type="text" 
                className="form-control"
                value={formData.monthlyRemuneration}
                onChange={(e) => handleInputChange('monthlyRemuneration', e.target.value)}
                placeholder="Enter monthly remuneration range (e.g., $0-$800)"
                style={{ fontSize: '14px', padding: '8px 12px' }}
              />
            </div>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '5px' }}>
                SDL PAYABLE(%)
              </label>
              <input 
                type="text" 
                className="form-control"
                value={formData.sdlPayable}
                onChange={(e) => handleInputChange('sdlPayable', e.target.value)}
                placeholder="Enter SDL payable percentage (e.g., 5.0%)"
                style={{ fontSize: '14px', padding: '8px 12px' }}
              />
            </div>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '5px' }}>
                MAX/MIN SDL
              </label>
              <input 
                type="number" 
                className="form-control"
                value={formData.maxMinSdl}
                onChange={(e) => handleInputChange('maxMinSdl', parseFloat(e.target.value) || 0)}
                placeholder="Enter max/min SDL value"
                style={{ fontSize: '14px', padding: '8px 12px' }}
                step="0.01"
              />
            </div>
          </div>
          
          {/* Checkbox in separate row */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#666' }}>
                <input 
                  type="checkbox" 
                  checked={formData.inactive}
                  onChange={(e) => handleInputChange('inactive', e.target.checked)}
                  style={{ marginRight: '8px' }}
                />
                INACTIVE
              </label>
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="form-section">
          <div style={{
            background: '#6c757d',
            padding: '12px 20px',
            color: 'white',
            fontSize: '14px',
            fontWeight: '600',
            display: 'flex',
            gap: '20px',
            marginBottom: '0'
          }}>
            <span 
              style={{ 
                cursor: 'pointer',
                borderBottom: activeTab === 'user-notes' ? '2px solid white' : 'none',
                paddingBottom: '5px'
              }}
              onClick={() => setActiveTab('user-notes')}
            >
              Notes
            </span>
            <span 
              style={{ 
                cursor: 'pointer',
                borderBottom: activeTab === 'files' ? '2px solid white' : 'none',
                paddingBottom: '5px'
              }}
              onClick={() => setActiveTab('files')}
            >
              Files
            </span>
            <span 
              style={{ 
                cursor: 'pointer',
                borderBottom: activeTab === 'workflow' ? '2px solid white' : 'none',
                paddingBottom: '5px'
              }}
              onClick={() => setActiveTab('workflow')}
            >
              Workflow
            </span>
          </div>
          
          <div style={{ padding: '20px', border: '1px solid #e9ecef', borderTop: 'none' }}>
            {activeTab === 'user-notes' && (
              <div>
                <div style={{
                  background: '#6c757d',
                  padding: '10px 15px',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '15px',
                  display: 'flex',
                  gap: '20px'
                }}>
                  <span style={{ 
                    borderBottom: '2px solid white',
                    paddingBottom: '5px'
                  }}>
                    User Notes
                  </span>
                  <span style={{ cursor: 'pointer' }}>
                    System Notes ●
                  </span>
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: '#666' }}>VIEW</label>
                    <select style={{
                      padding: '4px 8px',
                      border: '1px solid #ced4da',
                      borderRadius: '4px',
                      fontSize: '12px'
                    }}>
                      <option>Default</option>
                    </select>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
                    <button style={{
                      background: '#28a745',
                      color: 'white',
                      border: '1px solid #28a745',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      New Note
                    </button>
                    <button style={{
                      background: 'white',
                      color: '#495057',
                      border: '1px solid #ced4da',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}>
                      Customize View
                    </button>
                  </div>
                </div>

                <div style={{ overflowX: 'auto' }}>
                  <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '12px'
                  }}>
                    <thead>
                      <tr style={{ background: '#f8f9fa' }}>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>EDIT</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>DATE</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>AUTHOR</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>TITLE</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>MEMO</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>DIRECTION</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>TYPE</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>REMOVE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="8" style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'files' && (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
                Files information will be displayed here.
              </div>
            )}

            {activeTab === 'workflow' && (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
                Workflow information will be displayed here.
              </div>
            )}
          </div>
        </div>

        {/* Bottom Action Buttons */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #e0e0e0' }}>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-cog"></i>
            Actions
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

export default CreateSdlMaster;
