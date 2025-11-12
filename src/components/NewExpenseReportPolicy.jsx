import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const NewExpenseReportPolicy = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeSection, setActiveSection] = useState({
    primaryInformation: true,
    filters: true,
    policy: true,
    overageNotification: true,
    specificRecipients: false
  });

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    inactive: false,
    startDate: '',
    endDate: '',
    subsidiary: '',
    department: '',
    location: '',
    customer: '',
    expenseCategory: '',
    billable: '',
    action: 'Warn but allow expenses...',
    requiresReceipt: false,
    doNotWarnIfRequired: false,
    fieldsAreIncluded: false,
    maximumAmount: '',
    employees: []
  });

  const [employeeSearch, setEmployeeSearch] = useState('');

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
    setActiveSection(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSave = () => {
    if (!formData.name) {
      showToast('Please enter a policy name', 'error');
      return;
    }
    showToast('Expense Report Policy created successfully!', 'success');
    setTimeout(() => {
      setCurrentPage('setup-expense-report-policies');
    }, 1500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      setCurrentPage('setup-expense-report-policies');
    }
  };

  const handleAddRow = () => {
    showToast('Add row functionality', 'info');
  };

  const handleInsert = () => {
    showToast('Insert functionality', 'info');
  };

  const handleRemove = () => {
    showToast('Remove functionality', 'info');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Expense Report Policy</h1>
        </div>
        <div className="page-actions">
          <button className="btn-view-option" onClick={() => setCurrentPage('setup-expense-report-policies')}>List</button>
        </div>
      </div>

      <div className="form-actions" style={{ 
        padding: '10px 20px', 
        borderBottom: '1px solid #ddd',
        display: 'flex',
        gap: '8px'
      }}>
        <button className="btn btn-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn btn-secondary" onClick={handleCancel}>
          <i className="fas fa-times"></i>
          Cancel
        </button>
      </div>

      {/* Primary Information Section */}
      <div style={{ margin: '0' }}>
        <div 
          onClick={() => toggleSection('primaryInformation')}
          style={{
            padding: '12px 20px',
            backgroundColor: '#f0f0f0',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderBottom: '1px solid #ddd'
          }}
        >
          <i className={`fas fa-chevron-${activeSection.primaryInformation ? 'down' : 'right'}`} style={{ fontSize: '12px' }}></i>
          <span style={{ fontSize: '13px', fontWeight: '600' }}>Primary Information</span>
        </div>
        {activeSection.primaryInformation && (
          <div className="form-section" style={{ padding: '12px 20px', backgroundColor: '#f9f9f9' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px 20px' }}>
              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>NAME *</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter policy name"
                  required
                  style={{ fontSize: '13px' }}
                />
              </div>

              <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '20px' }}>
                <input 
                  type="checkbox" 
                  checked={formData.inactive} 
                  onChange={(e) => handleInputChange('inactive', e.target.checked)}
                  style={{ width: '14px', height: '14px' }} 
                />
                <label style={{ margin: 0, fontSize: '12px' }}>INACTIVE</label>
              </div>

              <div className="form-group" style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>DESCRIPTION</label>
                <textarea
                  className="form-control"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows="3"
                  style={{ fontSize: '13px', resize: 'vertical' }}
                />
                <div style={{ fontSize: '11px', color: '#666', marginTop: '4px' }}>0 / 400</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Filters Section */}
      <div style={{ margin: '0' }}>
        <div 
          onClick={() => toggleSection('filters')}
          style={{
            padding: '12px 20px',
            backgroundColor: '#f0f0f0',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderBottom: '1px solid #ddd'
          }}
        >
          <i className={`fas fa-chevron-${activeSection.filters ? 'down' : 'right'}`} style={{ fontSize: '12px' }}></i>
          <span style={{ fontSize: '13px', fontWeight: '600' }}>Filters</span>
        </div>
        {activeSection.filters && (
          <div className="form-section" style={{ padding: '12px 20px', backgroundColor: '#f9f9f9' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px 20px' }}>
              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>START DATE *</label>
                <input
                  type="date"
                  className="form-control"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  style={{ fontSize: '13px' }}
                />
              </div>

              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>DEPARTMENT</label>
                <select
                  className="form-control"
                  value={formData.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                  style={{ fontSize: '13px' }}
                >
                  <option value="">- Select -</option>
                  <option value="Construction">Construction</option>
                  <option value="MEP">MEP</option>
                  <option value="MEP MARINE">MEP MARINE</option>
                  <option value="O&G">O&G</option>
                  <option value="Piping">Piping</option>
                  <option value="Shipyard">Shipyard</option>
                </select>
              </div>

              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>EXPENSE CATEGORY *</label>
                <select
                  className="form-control"
                  value={formData.expenseCategory}
                  onChange={(e) => handleInputChange('expenseCategory', e.target.value)}
                  style={{ fontSize: '13px' }}
                >
                  <option value="">- Select -</option>
                </select>
              </div>

              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>END DATE</label>
                <input
                  type="date"
                  className="form-control"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange('endDate', e.target.value)}
                  style={{ fontSize: '13px' }}
                />
              </div>

              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>LOCATION</label>
                <select
                  className="form-control"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  style={{ fontSize: '13px' }}
                >
                  <option value="">- Select -</option>
                </select>
              </div>

              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>BILLABLE</label>
                <select
                  className="form-control"
                  value={formData.billable}
                  onChange={(e) => handleInputChange('billable', e.target.value)}
                  style={{ fontSize: '13px' }}
                >
                  <option value="">- Select -</option>
                </select>
              </div>

              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>SUBSIDIARY</label>
                <select
                  className="form-control"
                  value={formData.subsidiary}
                  onChange={(e) => handleInputChange('subsidiary', e.target.value)}
                  style={{ fontSize: '13px' }}
                >
                  <option value="">- Select -</option>
                </select>
              </div>

              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>CUSTOMER</label>
                <select
                  className="form-control"
                  value={formData.customer}
                  onChange={(e) => handleInputChange('customer', e.target.value)}
                  style={{ fontSize: '13px' }}
                >
                  <option value="">- Select -</option>
                  <option value="Start typing for Suggestions...">Start typing for Suggestions...</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Policy Section */}
      <div style={{ margin: '0' }}>
        <div 
          onClick={() => toggleSection('policy')}
          style={{
            padding: '12px 20px',
            backgroundColor: '#f0f0f0',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderBottom: '1px solid #ddd'
          }}
        >
          <i className={`fas fa-chevron-${activeSection.policy ? 'down' : 'right'}`} style={{ fontSize: '12px' }}></i>
          <span style={{ fontSize: '13px', fontWeight: '600' }}>Policy</span>
        </div>
        {activeSection.policy && (
          <div className="form-section" style={{ padding: '12px 20px', backgroundColor: '#f9f9f9' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px 20px' }}>
              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>ACTION *</label>
                <select
                  className="form-control"
                  value={formData.action}
                  onChange={(e) => handleInputChange('action', e.target.value)}
                  style={{ fontSize: '13px' }}
                >
                  <option value="Warn but allow expenses...">Warn but allow expenses...</option>
                </select>
              </div>

              <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input 
                    type="checkbox" 
                    checked={formData.requiresReceipt} 
                    onChange={(e) => handleInputChange('requiresReceipt', e.target.checked)}
                    style={{ width: '14px', height: '14px' }} 
                  />
                  <label style={{ margin: 0, fontSize: '12px' }}>REQUIRES RECEIPT</label>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input 
                    type="checkbox" 
                    checked={formData.doNotWarnIfRequired} 
                    onChange={(e) => handleInputChange('doNotWarnIfRequired', e.target.checked)}
                    style={{ width: '14px', height: '14px' }} 
                  />
                  <label style={{ margin: 0, fontSize: '12px' }}>DO NOT WARN IF REQUIRED</label>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input 
                    type="checkbox" 
                    checked={formData.fieldsAreIncluded} 
                    onChange={(e) => handleInputChange('fieldsAreIncluded', e.target.checked)}
                    style={{ width: '14px', height: '14px' }} 
                  />
                  <label style={{ margin: 0, fontSize: '12px' }}>FIELDS ARE INCLUDED</label>
                </div>
              </div>

              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>MAXIMUM AMOUNT</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.maximumAmount}
                  onChange={(e) => handleInputChange('maximumAmount', e.target.value)}
                  style={{ fontSize: '13px' }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overage Notification Section */}
      <div style={{ margin: '0' }}>
        <div 
          onClick={() => toggleSection('overageNotification')}
          style={{
            padding: '12px 20px',
            backgroundColor: '#5b7a9e',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderBottom: '1px solid #ddd'
          }}
        >
          <i className={`fas fa-chevron-${activeSection.overageNotification ? 'down' : 'right'}`} style={{ fontSize: '12px' }}></i>
          <span style={{ fontSize: '13px', fontWeight: '600' }}>Overage Notification</span>
        </div>
        {activeSection.overageNotification && (
          <div className="form-section" style={{ padding: '12px 20px', backgroundColor: '#f9f9f9' }}>
            <div 
              onClick={() => toggleSection('specificRecipients')}
              style={{
                padding: '8px 12px',
                backgroundColor: '#e8eef5',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '10px'
              }}
            >
              <i className={`fas fa-chevron-${activeSection.specificRecipients ? 'down' : 'right'}`} style={{ fontSize: '11px' }}></i>
              <span style={{ fontSize: '12px', fontWeight: '600' }}>Specific Recipients</span>
            </div>
            {activeSection.specificRecipients && (
              <div style={{ marginBottom: '15px' }}>
                <div style={{ marginBottom: '10px' }}>
                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>EMPLOYEE</label>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <input
                      type="text"
                      className="form-control"
                      value={employeeSearch}
                      onChange={(e) => setEmployeeSearch(e.target.value)}
                      placeholder="Start typing for suggestions..."
                      style={{ fontSize: '13px', flex: 1 }}
                    />
                    <button className="btn-icon" onClick={handleAddRow} title="Add Row">
                      <i className="fas fa-plus"></i>
                      Add Row
                    </button>
                    <button className="btn-icon" onClick={handleInsert} title="Insert">
                      <i className="fas fa-arrow-up"></i>
                      Insert
                    </button>
                    <button className="btn-icon" onClick={handleRemove} title="Remove">
                      <i className="fas fa-times"></i>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="form-actions" style={{ 
        padding: '10px 20px', 
        borderTop: '1px solid #ddd',
        display: 'flex',
        gap: '8px',
        marginTop: '10px'
      }}>
        <button className="btn btn-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn btn-secondary" onClick={handleCancel}>
          <i className="fas fa-times"></i>
          Cancel
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

export default NewExpenseReportPolicy;
