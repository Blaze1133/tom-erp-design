import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateStatisticalSchedule = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  const [formData, setFormData] = useState({
    name: '',
    statisticalAccount: '',
    accountSubsidiaries: '',
    unitType: '',
    savedSearch: 'Ad Hoc Detail Custom Leave Buy Back Search',
    frequency: 'End of Period',
    timeZone: '(GMT+08:00) Kuala Lumpur, Singapore',
    startDate: '',
    subsequentDate: ''
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

  const handleSave = () => {
    showToast('Statistical Schedule saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-statistical-schedules');
      }
    }
  };

  const handleValidate = () => {
    showToast('Search validated successfully!', 'success');
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-chart-bar"></i>
          <div>
            <h1>Statistical Schedule</h1>
            <div className="detail-subtitle">
              <span>{formData.name || 'New Statistical Schedule'}</span>
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
        <button className="btn-toolbar" onClick={handleCancel}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
      </div>

      <div className="detail-content">
        {/* Primary Information */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
            <div className="detail-field">
              <label>NAME <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
            
            <div className="detail-field">
              <label>ACCOUNT SUBSIDIARIES</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.accountSubsidiaries}
                onChange={(e) => handleInputChange('accountSubsidiaries', e.target.value)}
              />
            </div>
            
            <div className="detail-field">
              <label>STATISTICAL ACCOUNT <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.statisticalAccount}
                onChange={(e) => handleInputChange('statisticalAccount', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Statistical Account 1</option>
                <option>Statistical Account 2</option>
                <option>Statistical Account 3</option>
              </select>
            </div>
            
            <div className="detail-field">
              <label>UNIT TYPE</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.unitType}
                onChange={(e) => handleInputChange('unitType', e.target.value)}
              />
            </div>
            <div className="detail-field" style={{ gridColumn: '1 / -1' }}>
              <label>SAVED SEARCH <span className="required">*</span></label>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
                <div style={{ flex: 1 }}>
              <select 
                className="form-control"
                value={formData.savedSearch}
                onChange={(e) => handleInputChange('savedSearch', e.target.value)}
              >
                <option>Ad Hoc Detail Custom Leave Buy Back Search</option>
                <option>Department OKR's completed Status</option>
                <option>Employee Leave Entitlement</option>
                <option>Employee Leave Reinstatement</option>
                <option>Pay_Run_Process_Pay Dedution Search</option>
                <option>#Script Eligible Employee List for AWS Search(Don't Delete or Edit)</option>
                <option>--Org Manpower Budget Open Status</option>
                <option>3WAY Vendor Bill - Item Receipt Quantity Subsidiary Tolerance</option>
              </select>
                </div>
                <button className="btn-toolbar" onClick={handleValidate}>
                  <i className="fas fa-check"></i>
                  Validate
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Scheduling */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Scheduling</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
            <div className="detail-field">
              <label>FREQUENCY</label>
              <select 
                className="form-control"
                value={formData.frequency}
                onChange={(e) => handleInputChange('frequency', e.target.value)}
              >
                <option>End of Period</option>
                <option>Never</option>
                <option>Hourly</option>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Every Two Weeks</option>
                <option>Twice a Month</option>
                <option>Every Four Weeks</option>
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Yearly</option>
              </select>
            </div>
            
            <div className="detail-field">
              <label>TIME ZONE <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.timeZone}
                onChange={(e) => handleInputChange('timeZone', e.target.value)}
              >
                <option>(GMT+08:00) Kuala Lumpur, Singapore</option>
                <option>(GMT+08:00) Taipei</option>
                <option>(GMT+08:00) Perth</option>
                <option>(GMT+08:00) Irkutsk</option>
                <option>(GMT+08:00) Manila</option>
                <option>(GMT+09:00) Seoul</option>
                <option>(GMT+09:00) Osaka, Sapporo, Tokyo</option>
                <option>(GMT+09:00) Yakutsk</option>
              </select>
            </div>
            
            <div className="detail-field">
              <label>SUBSEQUENT DATE</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.subsequentDate}
                onChange={(e) => handleInputChange('subsequentDate', e.target.value)}
              />
            </div>
            
            <div className="detail-field">
              <label>START DATE <span className="required">*</span></label>
              <input 
                type="date" 
                className="form-control"
                value={formData.startDate}
                onChange={(e) => handleInputChange('startDate', e.target.value)}
              />
            </div>
            </div>
          </div>
        </div>

        <div className="detail-footer">
          <button className="btn-toolbar" onClick={handleCancel}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn-toolbar-primary" onClick={handleSave}>
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

export default CreateStatisticalSchedule;
