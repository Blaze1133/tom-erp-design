import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateTransferFund = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('communication');

  const [formData, setFormData] = useState({
    transactionNumber: 'To Be Generated',
    transfer: 'To Be Generated',
    fromAccount: '11210 ALL Bank Accounts : MEP OCBC 536-82592-001',
    toAccount: '11140 ALL Bank Accounts : MEP DBS SGD 003-906132-3',
    date: '3/12/2021',
    postingPeriod: 'Dec 2021',
    currency: 'SGD',
    amount: '200000.00',
    currency2: 'SGD',
    amount2: '200000.00',
    exchangeRate: '1.00',
    memo: 'MEP OCBC TO DBS',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
    department: '',
    class: '',
    location: ''
  });

  const subsidiaryOptions = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];

  const departmentOptions = [
    'TOM: Human Resource',
    'TOM: Finance: Internal Transfer',
    'TOM: IT',
    'TOM: Logistic',
    'TOM: Operating',
    'TOM: Purchase',
    'TOM: Sales and Marketing',
    'TOM: Security'
  ];

  const classOptions = [
    'Consumable Item',
    'Course',
    'Cutting Works',
    'Electrical',
    'Fabrication',
    'Hydrotesting',
    'Installation work',
    'Manpower Supply',
    'Material Supply',
    'Module /Prefab',
    'Piping',
    'Project Works',
    'Refurbishment works',
    'Rental',
    'Repair & Referable',
    'Sale of Scrap Metal',
    'Structure'
  ];

  const locationOptions = [
    'Hong Hang Shipyard',
    'Mega yard',
    'MEP MARINE CC',
    'Shipyards/Construction',
    'Singapore (MEP)',
    'TOM-11',
    'TOM External Workshop',
    'TOM-13'
  ];

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setToast({ show: true, message: 'Transfer saved successfully!', type: 'success' });
    setTimeout(() => {
      if (setCurrentPage) {
        setCurrentPage('view-transfers');
      }
    }, 1500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-transfers');
      }
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-exchange-alt"></i>
          <div>
            <h1>Transfer</h1>
            <div className="detail-subtitle">
              <span>{formData.transfer || '# To be generated – New Transfer'}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={() => setCurrentPage('view-transfers')}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
      </div>

      <div className="detail-content">
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>TRANSACTION NUMBER</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={formData.transactionNumber}
                  disabled
                  style={{ background: '#f9f9f9' }}
                />
              </div>

              <div className="detail-field">
                <label>TRANSFER #</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={formData.transfer}
                  disabled
                  style={{ background: '#f9f9f9' }}
                />
              </div>

              <div className="detail-field">
                <label>FROM ACCOUNT <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.fromAccount}
                  onChange={(e) => handleFormChange('fromAccount', e.target.value)}
                  placeholder="<Type then tab>"
                />
              </div>

              <div className="detail-field">
                <label>TO ACCOUNT <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.toAccount}
                  onChange={(e) => handleFormChange('toAccount', e.target.value)}
                  placeholder="<Type then tab>"
                />
              </div>

              <div className="detail-field">
                <label>DATE <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.date}
                  onChange={(e) => handleFormChange('date', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>POSTING PERIOD <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.postingPeriod}
                  onChange={(e) => handleFormChange('postingPeriod', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>CURRENCY <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.currency}
                  onChange={(e) => handleFormChange('currency', e.target.value)}
                >
                  <option>SGD</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>

              <div className="detail-field">
                <label>AMOUNT <span className="required">*</span></label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.amount}
                  onChange={(e) => handleFormChange('amount', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>CURRENCY</label>
                <select 
                  className="form-control"
                  value={formData.currency2}
                  onChange={(e) => handleFormChange('currency2', e.target.value)}
                >
                  <option>SGD</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>

              <div className="detail-field">
                <label>AMOUNT</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.amount2}
                  onChange={(e) => handleFormChange('amount2', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>EXCHANGE RATE</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.exchangeRate}
                  onChange={(e) => handleFormChange('exchangeRate', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>MEMO</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.memo}
                  onChange={(e) => handleFormChange('memo', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.subsidiary}
                  onChange={(e) => handleFormChange('subsidiary', e.target.value)}
                >
                  <option value=""></option>
                  {subsidiaryOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>DEPARTMENT</label>
                <select 
                  className="form-control"
                  value={formData.department}
                  onChange={(e) => handleFormChange('department', e.target.value)}
                >
                  <option value=""></option>
                  {departmentOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>CLASS</label>
                <select 
                  className="form-control"
                  value={formData.class}
                  onChange={(e) => handleFormChange('class', e.target.value)}
                >
                  <option value=""></option>
                  {classOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>LOCATION</label>
                <select 
                  className="form-control"
                  value={formData.location}
                  onChange={(e) => handleFormChange('location', e.target.value)}
                >
                  <option value=""></option>
                  {locationOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-tabs" style={{ marginTop: '2rem' }}>
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>
              Communication
            </button>
            <button className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`} onClick={() => setActiveTab('system')}>
              System Information
            </button>
          </div>

          {activeTab === 'communication' && (
            <div className="tab-content">
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Events
                </h3>
                <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                  <table className="items-table" style={{ width: '100%', fontSize: '0.75rem' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '8px 6px' }}>TITLE <span style={{ color: 'red' }}>*</span></th>
                        <th style={{ padding: '8px 6px' }}>LOCATION</th>
                        <th style={{ padding: '8px 6px' }}>DATE <span style={{ color: 'red' }}>*</span></th>
                        <th style={{ padding: '8px 6px' }}>ALL DAY</th>
                        <th style={{ padding: '8px 6px' }}>START TIME</th>
                        <th style={{ padding: '8px 6px' }}>END TIME</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="6" style={{ textAlign: 'center', padding: '1rem', color: '#999' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'system' && (
            <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
              System Information - No data available
            </div>
          )}
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end', paddingBottom: '2rem' }}>
          <button className="btn-toolbar" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
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

export default CreateTransferFund;
