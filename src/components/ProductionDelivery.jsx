import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ProductionDelivery = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Form state
  const [formData, setFormData] = useState({
    moduleNo: 'GE365 DFHA-10',
    activity1: { yes: true, no: false },
    activity2: { yes: true, no: false },
    activity3: { yes: false, no: true },
    locationStatus: '',
    defaultLoadOut: '30-Oct-2020 10:58:54',
    projectName: 'REPN-2',
    photo: '',
    // Component sections
    dfamFrame: {
      checkedByProduction: '',
      checkedByQC: '',
      comments: '',
      clearedNotCleared: ''
    },
    acmePiping: {
      checkedByProduction: '',
      checkedByQC: '',
      comments: '',
      clearedNotCleared: ''
    },
    acmeDucting: {
      checkedByProduction: '',
      checkedByQC: '',
      comments: '',
      clearedNotCleared: ''
    },
    activeFirePiping: {
      checkedByProduction: '',
      checkedByQC: '',
      comments: '',
      clearedNotCleared: ''
    },
    activeFireTrunking: {
      checkedByProduction: '',
      checkedByQC: '',
      comments: '',
      clearedNotCleared: ''
    },
    wahoonElectricalContainment: {
      checkedByProduction: '',
      checkedByQC: '',
      comments: '',
      clearedNotCleared: ''
    }
  });

  const adjustmentLocations = [
    'Hong Hang Shipyard',
    'Mega yard',
    'MEP MARINE CC',
    'Shipyards/Construction',
    'Singapore (MEP)',
    'TOM-11',
    'TOM External Workshop',
    'TOM-13'
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

  const handleSectionChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleActivityChange = (activity, field, value) => {
    setFormData(prev => ({
      ...prev,
      [activity]: {
        ...prev[activity],
        [field]: value,
        [field === 'yes' ? 'no' : 'yes']: !value
      }
    }));
  };

  const handleSubmit = () => {
    // Store completion status in localStorage to persist across components
    localStorage.setItem('deliveryStatus', 'Completed');
    
    showToast('Delivery completed successfully!', 'success');
    
    // Navigate back to module dashboard after a delay
    setTimeout(() => {
      setCurrentPage('dashboard-module');
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      moduleNo: 'GE365 DFHA-10',
      activity1: { yes: true, no: false },
      activity2: { yes: true, no: false },
      activity3: { yes: false, no: true },
      locationStatus: '',
      defaultLoadOut: '30-Oct-2020 10:58:54',
      projectName: 'REPN-2',
      photo: '',
      dfamFrame: { checkedByProduction: '', checkedByQC: '', comments: '', clearedNotCleared: '' },
      acmePiping: { checkedByProduction: '', checkedByQC: '', comments: '', clearedNotCleared: '' },
      acmeDucting: { checkedByProduction: '', checkedByQC: '', comments: '', clearedNotCleared: '' },
      activeFirePiping: { checkedByProduction: '', checkedByQC: '', comments: '', clearedNotCleared: '' },
      activeFireTrunking: { checkedByProduction: '', checkedByQC: '', comments: '', clearedNotCleared: '' },
      wahoonElectricalContainment: { checkedByProduction: '', checkedByQC: '', comments: '', clearedNotCleared: '' }
    });
  };

  const renderComponentSection = (sectionKey, sectionTitle) => (
    <div key={sectionKey} style={{ marginBottom: '3rem' }}>
      {/* Section Header */}
      <div style={{ 
        marginBottom: '2rem', 
        marginTop: '3rem',
        paddingBottom: '1rem', 
        borderBottom: '2px solid #e5e7eb' 
      }}>
        <h2 style={{ 
          margin: 0, 
          fontSize: '1.5rem', 
          fontWeight: '600', 
          color: '#374151' 
        }}>
          {sectionTitle}
        </h2>
      </div>
      
      {/* Checked By Production */}
      <div style={{ marginBottom: '2rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
          Checked By Production
        </label>
        <select
          value={formData[sectionKey].checkedByProduction}
          onChange={(e) => handleSectionChange(sectionKey, 'checkedByProduction', e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontSize: '0.875rem',
            marginBottom: '1rem'
          }}
        >
          <option value="">Draw your signature</option>
          <option value="production1">Production Signature 1</option>
          <option value="production2">Production Signature 2</option>
        </select>
        
        {/* Production Signature Area */}
        <div style={{
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          padding: '1rem',
          backgroundColor: '#f9fafb',
          minHeight: '120px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
            color: '#6b7280',
            fontSize: '0.75rem',
            cursor: 'pointer'
          }}>
            [Clear]
          </div>
          <p style={{ margin: '0 0 1rem 0', color: '#6b7280', fontSize: '0.875rem' }}>Draw your signature</p>
          <div style={{
            height: '2px',
            backgroundColor: '#374151',
            width: '80%',
            marginTop: '3rem'
          }}></div>
        </div>
      </div>

      {/* Checked By QC */}
      <div style={{ marginBottom: '2rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
          Checked By QC
        </label>
        <select
          value={formData[sectionKey].checkedByQC}
          onChange={(e) => handleSectionChange(sectionKey, 'checkedByQC', e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontSize: '0.875rem',
            marginBottom: '1rem'
          }}
        >
          <option value="">Draw your signature</option>
          <option value="qc1">QC Signature 1</option>
          <option value="qc2">QC Signature 2</option>
        </select>
        
        {/* QC Signature Area */}
        <div style={{
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          padding: '1rem',
          backgroundColor: '#f9fafb',
          minHeight: '120px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
            color: '#6b7280',
            fontSize: '0.75rem',
            cursor: 'pointer'
          }}>
            [Clear]
          </div>
          <p style={{ margin: '0 0 1rem 0', color: '#6b7280', fontSize: '0.875rem' }}>Draw your signature</p>
          <div style={{
            height: '2px',
            backgroundColor: '#374151',
            width: '80%',
            marginTop: '3rem'
          }}></div>
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
            Comments
          </label>
          <textarea 
            value={formData[sectionKey].comments}
            onChange={(e) => handleSectionChange(sectionKey, 'comments', e.target.value)}
            rows="4"
            placeholder="Enter comments..."
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
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
            Cleared/Not Cleared
          </label>
          <select 
            value={formData[sectionKey].clearedNotCleared}
            onChange={(e) => handleSectionChange(sectionKey, 'clearedNotCleared', e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '0.875rem'
            }}
          >
            <option value="">-Select-</option>
            <option value="Cleared">Cleared</option>
            <option value="Not Cleared">Not Cleared</option>
          </select>
        </div>
      </div>
    </div>
  );

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-truck"></i>
          <h1>Delivery</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">Form</button>
          <button className="btn-view-option">Delivery</button>
          <button className="btn-view-option">History</button>
        </div>
      </div>

      <div className="quotation-container">
        <div className="form-section">
          {/* Basic Information */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '1.5rem' }}>
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
                  fontSize: '0.875rem',
                  backgroundColor: '#f9fafb'
                }}
                readOnly
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
                  fontSize: '0.875rem'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Location Status
              </label>
              <select
                value={formData.locationStatus}
                onChange={(e) => handleInputChange('locationStatus', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem'
                }}
              >
                <option value="">Select Location</option>
                {adjustmentLocations.map((location, index) => (
                  <option key={index} value={location}>{location}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Date of Load out
              </label>
              <input
                type="text"
                value={formData.defaultLoadOut}
                onChange={(e) => handleInputChange('defaultLoadOut', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem'
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Photo
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleInputChange('photo', e.target.files[0])}
                style={{ display: 'none' }}
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#4f46e5',
                  color: 'white',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                Select Image
              </label>
              <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                {formData.photo ? formData.photo.name || 'Image selected' : 'No image selected'}
              </span>
            </div>
          </div>

          {/* Activities Header */}
          <div style={{ 
            marginBottom: '2rem', 
            marginTop: '3rem',
            paddingBottom: '1rem', 
            borderBottom: '2px solid #e5e7eb' 
          }}>
            <h2 style={{ 
              margin: 0, 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              color: '#374151' 
            }}>
              Activities
            </h2>
          </div>

          {['activity1', 'activity2', 'activity3'].map((activity, index) => (
            <div key={activity} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                  Activity {index + 1}
                </label>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input 
                      type="radio" 
                      name={activity}
                      checked={formData[activity].yes}
                      onChange={(e) => handleActivityChange(activity, 'yes', e.target.checked)}
                      style={{
                        width: '18px',
                        height: '18px',
                        accentColor: '#4f46e5'
                      }}
                    />
                    <span style={{ fontSize: '0.875rem' }}>Yes</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input 
                      type="radio" 
                      name={activity}
                      checked={formData[activity].no}
                      onChange={(e) => handleActivityChange(activity, 'no', e.target.checked)}
                      style={{
                        width: '18px',
                        height: '18px',
                        accentColor: '#4f46e5'
                      }}
                    />
                    <span style={{ fontSize: '0.875rem' }}>No</span>
                  </label>
                </div>
              </div>
            </div>
          ))}

          {/* Component Sections */}
          {renderComponentSection('dfamFrame', 'DFAM Frame')}
          {renderComponentSection('acmePiping', 'ACME Piping')}
          {renderComponentSection('acmeDucting', 'ACME Ducting')}
          {renderComponentSection('activeFirePiping', 'Active Fire Piping')}
          {renderComponentSection('activeFireTrunking', 'Active Fire Trunking')}
          {renderComponentSection('wahoonElectricalContainment', 'WaHoon Electrical containment')}

          {/* Action Buttons */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1rem', 
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid #e5e7eb'
          }}>
            <button
              onClick={handleSubmit}
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Submit
            </button>
            <button
              onClick={handleReset}
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: '#6b7280',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
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

export default ProductionDelivery;
