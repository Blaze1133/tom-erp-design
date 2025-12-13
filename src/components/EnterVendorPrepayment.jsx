import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EnterVendorPrepayment = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [formData, setFormData] = useState({
    customForm: 'TOM Vendor Prepayment Form',
    transactionNumber: 'To Be Generated',
    payee: '',
    purchaseOrder: '',
    account: '',
    balance: '',
    paymentAmount: '',
    currency: 'SGD',
    exchangeRate: 1.00,
    date: '2025-07-11',
    postingPeriod: 'Nov 2025',
    prepaymentAccount: '',
    toBePrinted: false,
    voucher: false,
    check: '',
    memo: '',
    subsidiary: '',
    department: '',
    class: '',
    location: ''
  });

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    showToast('Vendor prepayment saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-vendor-prepayments');
      }
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-invoice-dollar"></i>
          <div>
            <h1>Vendor Prepayment</h1>
            <div className="detail-subtitle">
              <span># New Vendor Prepayment</span>
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
        <button className="btn-toolbar" onClick={handleCancel}>
          Cancel
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
                <label>CUSTOM FORM <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.customForm}
                  onChange={(e) => handleFormChange('customForm', e.target.value)}
                >
                  <option>TOM Vendor Prepayment Form</option>
                  <option>Standard Vendor Prepayment Form</option>
                </select>
              </div>

              <div className="detail-field">
                <label>TRANSACTION NUMBER</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.transactionNumber}
                  onChange={(e) => handleFormChange('transactionNumber', e.target.value)}
                  readOnly
                  style={{ background: '#f9f9f9' }}
                />
              </div>

              <div className="detail-field">
                <label>CHECK #</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.check}
                  onChange={(e) => handleFormChange('check', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>PAYEE <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.payee}
                  onChange={(e) => handleFormChange('payee', e.target.value)}
                  placeholder="<Type then tab>"
                />
              </div>

              <div className="detail-field">
                <label>PURCHASE ORDER</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.purchaseOrder}
                  onChange={(e) => handleFormChange('purchaseOrder', e.target.value)}
                  placeholder="<Type then tab>"
                />
              </div>

              <div className="detail-field">
                <label>ACCOUNT <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.account}
                  onChange={(e) => handleFormChange('account', e.target.value)}
                >
                  <option value="">Select...</option>
                  <option>11140 ALL Bank A...SGD 003-906132-3</option>
                  <option>11230 ALL Bank Accounts : MEP JOB 9314-301-906-1</option>
                </select>
              </div>

              <div className="detail-field">
                <label>BALANCE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.balance}
                  onChange={(e) => handleFormChange('balance', e.target.value)}
                  readOnly
                  style={{ background: '#f9f9f9' }}
                />
              </div>

              <div className="detail-field">
                <label>PAYMENT AMOUNT <span className="required">*</span></label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.paymentAmount}
                  onChange={(e) => handleFormChange('paymentAmount', e.target.value)}
                  step="0.01"
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
                <label>EXCHANGE RATE <span className="required">*</span></label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.exchangeRate}
                  onChange={(e) => handleFormChange('exchangeRate', e.target.value)}
                  step="0.01"
                />
              </div>

              <div className="detail-field">
                <label>DATE <span className="required">*</span></label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.date}
                  onChange={(e) => handleFormChange('date', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>POSTING PERIOD <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.postingPeriod}
                  onChange={(e) => handleFormChange('postingPeriod', e.target.value)}
                >
                  <option>Nov 2025</option>
                  <option>Dec 2025</option>
                  <option>Jan 2026</option>
                </select>
              </div>

              <div className="detail-field">
                <label>PREPAYMENT ACCOUNT</label>
                <select 
                  className="form-control"
                  value={formData.prepaymentAccount}
                  onChange={(e) => handleFormChange('prepaymentAccount', e.target.value)}
                >
                  <option value="">Select...</option>
                  <option>12105 Vendor Prepayments</option>
                </select>
              </div>

              <div className="detail-field">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '8px' }}>
                  <input 
                    type="checkbox"
                    checked={formData.toBePrinted}
                    onChange={(e) => handleFormChange('toBePrinted', e.target.checked)}
                  />
                  <label style={{ margin: 0, fontSize: '13px' }}>TO BE PRINTED</label>
                </div>
              </div>

              <div className="detail-field">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '8px' }}>
                  <input 
                    type="checkbox"
                    checked={formData.voucher}
                    onChange={(e) => handleFormChange('voucher', e.target.checked)}
                  />
                  <label style={{ margin: 0, fontSize: '13px' }}>VOUCHER</label>
                </div>
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

        {/* Classification */}
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
                  <option value="">Select...</option>
                  <option>Tech Offshore Marine (SV) Pte Ltd</option>
                  <option>Tech Onshore MEP Prefabricators Pte Ltd.</option>
                  <option>Tech Electric & Automation Pte Ltd</option>
                  <option>Tech Marine Offshore (S) Pte Ltd</option>
                  <option>Tech Offshore Marine (DQ) Pte Ltd</option>
                  <option>Tech Offshore Marine (s) Pte Ltd</option>
                </select>
              </div>
              
              <div className="detail-field">
                <label>DEPARTMENT <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.department}
                  onChange={(e) => handleFormChange('department', e.target.value)}
                >
                  <option value="">Select...</option>
                  <option>TOM</option>
                  <option>TOM : Admin</option>
                  <option>TOM : Electrical and E&I</option>
                  <option>TOM : Facility</option>
                  <option>TOM : Finance</option>
                  <option>TOM : Finance : Internal Transfer</option>
                  <option>TOM : Human Resource</option>
                  <option>TOM : IT</option>
                  <option>TOM : Logistic</option>
                  <option>TOM : Operating</option>
                  <option>TOM : Purchase</option>
                  <option>TOM : Sales and Marketing</option>
                  <option>TOM : Security</option>
                </select>
              </div>

              <div className="detail-field">
                <label>CLASS</label>
                <select 
                  className="form-control"
                  value={formData.class}
                  onChange={(e) => handleFormChange('class', e.target.value)}
                >
                  <option value="">Select...</option>
                  <option>Consumable Item</option>
                  <option>Electrical Works</option>
                  <option>Engineering Services</option>
                  <option>Fabrication Works</option>
                  <option>Installation Works</option>
                  <option>Marine Equipment</option>
                  <option>Material Supply</option>
                  <option>MEP Works</option>
                  <option>Mechanical Works</option>
                  <option>Piping Works</option>
                  <option>Project Management</option>
                  <option>Rental Equipment</option>
                  <option>Structural Works</option>
                  <option>Technical Consultancy</option>
                  <option>Testing & Commissioning</option>
                  <option>Transportation</option>
                  <option>Welding Services</option>
                </select>
              </div>

              <div className="detail-field">
                <label>LOCATION</label>
                <select 
                  className="form-control"
                  value={formData.location}
                  onChange={(e) => handleFormChange('location', e.target.value)}
                >
                  <option value="">Select...</option>
                  <option>TOM -11</option>
                  <option>Hong Hang Shipyard</option>
                  <option>Mega yard</option>
                  <option>MEP MARINE CC</option>
                  <option>Shipyards/Construction</option>
                  <option>Singapore(MEP)</option>
                  <option>TOM External Workshop</option>
                  <option>TOM - 13</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Payee Address Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Payee Address</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>ADDRESS TO SELECT</label>
                <select className="form-control">
                  <option value="">Select...</option>
                </select>
              </div>

              <div className="detail-field">
                <label>PAY TO</label>
                <textarea 
                  className="form-control" 
                  rows="4"
                  placeholder="Enter address..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ 
          display: 'flex', 
          gap: '0.75rem', 
          padding: '1.5rem 0', 
          borderTop: '1px solid #e0e0e0',
          marginTop: '2rem'
        }}>
          <button 
            className="btn-toolbar"
            onClick={handleCancel}
          >
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button 
            className="btn-toolbar"
            onClick={handleCancel}
          >
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button 
            className="btn-toolbar-primary"
            onClick={handleSave}
          >
            <i className="fas fa-save"></i>
            Save
          </button>
          <button 
            className="btn-toolbar"
            onClick={handleSave}
          >
            <i className="fas fa-check"></i>
            Submit
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

export default EnterVendorPrepayment;
