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
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-chart-bar" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Statistical Schedule</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-view-option">
            <i className="fas fa-list"></i>
            List
          </button>
          <button className="btn btn-view-option">
            <i className="fas fa-ellipsis-h"></i>
            More
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information */}
        <div className="form-section">
          <h2 className="section-title" style={{ fontSize: '18px', fontWeight: '600' }}>
            <i className="fas fa-info-circle"></i>
            Primary Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0 1rem 0' }} />
          
          <div className="form-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="form-group">
              <label className="form-label required">Name</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Account Subsidiaries</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.accountSubsidiaries}
                onChange={(e) => handleInputChange('accountSubsidiaries', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label required">Statistical Account</label>
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
            
            <div className="form-group">
              <label className="form-label">Unit Type</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.unitType}
                onChange={(e) => handleInputChange('unitType', e.target.value)}
              />
            </div>
          </div>

          {/* Saved Search Section */}
          <div style={{ marginTop: '20px', display: 'flex', gap: '10px', alignItems: 'flex-end', maxWidth: '600px' }}>
            <div style={{ flex: 1 }}>
              <label className="form-label">Saved Search <span style={{ color: '#e53e3e' }}>*</span></label>
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
            <button className="btn btn-secondary" onClick={handleValidate} style={{ padding: '8px 16px', fontSize: '13px' }}>
              Validate
            </button>
          </div>
        </div>

        {/* Scheduling */}
        <div className="form-section" style={{ marginTop: '1.5rem' }}>
          <h2 className="section-title" style={{ fontSize: '18px', fontWeight: '600' }}>
            <i className="fas fa-calendar-alt"></i>
            Scheduling
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0 1rem 0' }} />
          
          <div className="form-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="form-group">
              <label className="form-label">Frequency</label>
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
            
            <div className="form-group">
              <label className="form-label required">Time Zone</label>
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
            
            <div className="form-group">
              <label className="form-label">Subsequent Date</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.subsequentDate}
                onChange={(e) => handleInputChange('subsequentDate', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label required">Start Date</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.startDate}
                onChange={(e) => handleInputChange('startDate', e.target.value)}
              />
            </div>
          </div>
        </div>

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

export default CreateStatisticalSchedule;
