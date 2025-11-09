import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateCommitOrderSchedule = ({ onBack }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [expandedSections, setExpandedSections] = useState({
    primary: true,
    schedule: true,
    commitOptions: true,
    searchCriteria: true
  });

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    inactive: false,
    recurrenceFrequency: 'Monthly',
    repeatEvery: '1',
    repeatEveryUnit: 'month(s)',
    nextDate: '',
    nextTime: '11:00 am',
    timezone: '(GMT+08:00) Kuala Lumpur, Singapore',
    subsidiary: '',
    setOrderLineToFirm: false,
    reallocateOpenQuantities: false,
    useSearchCriteria: false,
    savedSearch: ''
  });

  const recurrenceFrequencies = [
    'Daily',
    'Weekly',
    'Monthly',
    'Yearly'
  ];

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
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

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSave = () => {
    if (!formData.name) {
      showToast('Please enter a name for the schedule', 'error');
      return;
    }
    showToast('Commit Order Schedule saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Changes cancelled', 'info');
      if (onBack) onBack();
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-calendar-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Commit Order Schedule</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={handleCancel}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information */}
        <div className="form-section">
          <div 
            className="section-title" 
            onClick={() => toggleSection('primary')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div>
              <i className={`fas fa-chevron-${expandedSections.primary ? 'down' : 'right'}`} style={{ marginRight: '10px' }}></i>
              <i className="fas fa-info-circle" style={{ marginRight: '10px' }}></i>
              Primary Information
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          {expandedSections.primary && (
            <>
              <div className="form-grid" style={{ gridTemplateColumns: '1fr auto' }}>
                <div className="form-group">
                  <label className="form-label">NAME <span className="required">*</span></label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter schedule name"
                  />
                </div>
                <div className="form-group" style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: '0.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', margin: 0 }}>
                    <input 
                      type="checkbox"
                      checked={formData.inactive}
                      onChange={(e) => handleInputChange('inactive', e.target.checked)}
                      style={{ marginRight: '8px', width: '18px', height: '18px', cursor: 'pointer' }}
                    />
                    <span className="form-label" style={{ margin: 0, fontSize: '13px' }}>INACTIVE</span>
                  </label>
                </div>
              </div>
              <div className="form-group" style={{ marginTop: '1rem' }}>
                <label className="form-label">DESCRIPTION</label>
                <textarea 
                  className="form-control"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows="3"
                  placeholder="Enter description"
                  style={{ resize: 'vertical' }}
                />
              </div>
            </>
          )}
        </div>

        {/* Schedule */}
        <div className="form-section">
          <div 
            className="section-title" 
            onClick={() => toggleSection('schedule')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div>
              <i className={`fas fa-chevron-${expandedSections.schedule ? 'down' : 'right'}`} style={{ marginRight: '10px' }}></i>
              <i className="fas fa-clock" style={{ marginRight: '10px' }}></i>
              Schedule
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          {expandedSections.schedule && (
            <div className="form-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              <div className="form-group">
                <label className="form-label">RECURRENCE FREQUENCY <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.recurrenceFrequency}
                  onChange={(e) => handleInputChange('recurrenceFrequency', e.target.value)}
                >
                  {recurrenceFrequencies.map((freq, index) => (
                    <option key={index} value={freq}>{freq}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">REPEAT EVERY <span className="required">*</span></label>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <input 
                    type="number" 
                    className="form-control"
                    value={formData.repeatEvery}
                    onChange={(e) => handleInputChange('repeatEvery', e.target.value)}
                    min="1"
                    style={{ width: '100px', flex: 'none' }}
                  />
                  <span style={{ color: '#666', fontSize: '14px', fontWeight: '500' }}>{formData.repeatEveryUnit}</span>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">NEXT DATE <span className="required">*</span></label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.nextDate}
                  onChange={(e) => handleInputChange('nextDate', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">NEXT TIME <span className="required">*</span></label>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <input 
                    type="time" 
                    className="form-control"
                    value={formData.nextTime}
                    onChange={(e) => handleInputChange('nextTime', e.target.value)}
                    style={{ width: '150px', flex: 'none' }}
                  />
                  <span style={{ color: '#666', fontSize: '12px', whiteSpace: 'nowrap' }}>
                    {formData.timezone}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Commit Order Options */}
        <div className="form-section">
          <div 
            className="section-title" 
            onClick={() => toggleSection('commitOptions')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div>
              <i className={`fas fa-chevron-${expandedSections.commitOptions ? 'down' : 'right'}`} style={{ marginRight: '10px' }}></i>
              <i className="fas fa-cog" style={{ marginRight: '10px' }}></i>
              Commit Order Options
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          {expandedSections.commitOptions && (
            <>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">SUBSIDIARY <span className="required">*</span></label>
                  <select 
                    className="form-control"
                    value={formData.subsidiary}
                    onChange={(e) => handleInputChange('subsidiary', e.target.value)}
                  >
                    <option value="">Select...</option>
                    {subsidiaries.map((sub, index) => (
                      <option key={index} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input 
                    type="checkbox"
                    checked={formData.setOrderLineToFirm}
                    onChange={(e) => handleInputChange('setOrderLineToFirm', e.target.checked)}
                    style={{ marginRight: '10px', width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                  <span className="form-label" style={{ margin: 0, fontSize: '13px' }}>SET ORDER LINE TO FIRM</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input 
                    type="checkbox"
                    checked={formData.reallocateOpenQuantities}
                    onChange={(e) => handleInputChange('reallocateOpenQuantities', e.target.checked)}
                    style={{ marginRight: '10px', width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                  <span className="form-label" style={{ margin: 0, fontSize: '13px' }}>REALLOCATE OPEN QUANTITIES</span>
                </label>
              </div>
            </>
          )}
        </div>

        {/* Search Criteria */}
        <div className="form-section">
          <div 
            className="section-title" 
            onClick={() => toggleSection('searchCriteria')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div>
              <i className={`fas fa-chevron-${expandedSections.searchCriteria ? 'down' : 'right'}`} style={{ marginRight: '10px' }}></i>
              <i className="fas fa-search" style={{ marginRight: '10px' }}></i>
              Search Criteria
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          {expandedSections.searchCriteria && (
            <>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input 
                    type="checkbox"
                    checked={formData.useSearchCriteria}
                    onChange={(e) => handleInputChange('useSearchCriteria', e.target.checked)}
                    style={{ marginRight: '10px', width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                  <span className="form-label" style={{ margin: 0, fontSize: '13px' }}>USE SEARCH CRITERIA</span>
                </label>
              </div>
              {formData.useSearchCriteria && (
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">SAVED SEARCH <span className="required">*</span></label>
                    <select 
                      className="form-control"
                      value={formData.savedSearch}
                      onChange={(e) => handleInputChange('savedSearch', e.target.value)}
                    >
                      <option value="">Select...</option>
                    </select>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Actions */}
        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-primary" onClick={handleSave}>
              <i className="fas fa-save"></i>
              Save
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

export default CreateCommitOrderSchedule;
