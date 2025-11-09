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
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice-dollar" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Vendor Prepayment</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-info-circle"></i>
            Primary Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0 1rem 0' }} />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px 30px' }}>
            <div className="form-group">
              <label className="form-label required">CUSTOM FORM</label>
              <select 
                className="form-control"
                value={formData.customForm}
                onChange={(e) => handleFormChange('customForm', e.target.value)}
              >
                <option>TOM Vendor Prepayment Form</option>
                <option>Standard Vendor Prepayment Form</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label required">CURRENCY</label>
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

            <div className="form-group">
              <label className="form-label">TRANSACTION NUMBER</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.transactionNumber}
                onChange={(e) => handleFormChange('transactionNumber', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label required">EXCHANGE RATE</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.exchangeRate}
                onChange={(e) => handleFormChange('exchangeRate', e.target.value)}
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label className="form-label required">PAYEE</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.payee}
                onChange={(e) => handleFormChange('payee', e.target.value)}
                placeholder="<Type then tab>"
              />
            </div>

            <div className="form-group">
              <label className="form-label required">DATE</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleFormChange('date', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">PURCHASE ORDER</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.purchaseOrder}
                onChange={(e) => handleFormChange('purchaseOrder', e.target.value)}
                placeholder="<Type then tab>"
              />
            </div>

            <div className="form-group">
              <label className="form-label required">POSTING PERIOD</label>
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

            <div className="form-group">
              <label className="form-label required">ACCOUNT</label>
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

            <div className="form-group">
              <label className="form-label">PREPAYMENT ACCOUNT</label>
              <select 
                className="form-control"
                value={formData.prepaymentAccount}
                onChange={(e) => handleFormChange('prepaymentAccount', e.target.value)}
              >
                <option value="">Select...</option>
                <option>12105 Vendor Prepayments</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">BALANCE</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.balance}
                onChange={(e) => handleFormChange('balance', e.target.value)}
                readOnly
              />
            </div>

            <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingTop: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input 
                  type="checkbox"
                  checked={formData.toBePrinted}
                  onChange={(e) => handleFormChange('toBePrinted', e.target.checked)}
                />
                <span style={{ fontSize: '13px', color: '#666' }}>TO BE PRINTED</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input 
                  type="checkbox"
                  checked={formData.voucher}
                  onChange={(e) => handleFormChange('voucher', e.target.checked)}
                />
                <span style={{ fontSize: '13px', color: '#666' }}>VOUCHER</span>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label required">PAYMENT AMOUNT</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.paymentAmount}
                onChange={(e) => handleFormChange('paymentAmount', e.target.value)}
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label className="form-label">CHECK #</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.check}
                onChange={(e) => handleFormChange('check', e.target.value)}
              />
            </div>

            <div className="form-group" style={{ gridColumn: 'span 3' }}>
              <label className="form-label">MEMO</label>
              <textarea 
                className="form-control"
                value={formData.memo}
                onChange={(e) => handleFormChange('memo', e.target.value)}
                rows="2"
              />
            </div>
          </div>
        </div>

        {/* Classification */}
        <div style={{ 
          background: 'white', 
          borderRadius: '8px', 
          padding: '24px',
          marginTop: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: '16px', 
            fontWeight: '600', 
            color: '#333', 
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <i className="fas fa-tags" style={{ color: '#4a90e2' }}></i>
            Classification
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Subsidiary <span style={{ color: '#e53e3e' }}>*</span>
              </label>
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
            
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Class</label>
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

            <div></div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Department <span style={{ color: '#e53e3e' }}>*</span>
              </label>
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
            
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Location</label>
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

        {/* Payee Address Section */}
        <div style={{ 
          background: 'white', 
          borderRadius: '8px', 
          padding: '24px',
          marginTop: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: '16px', 
            fontWeight: '600', 
            color: '#333', 
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <i className="fas fa-map-marker-alt" style={{ color: '#4a90e2' }}></i>
            Payee Address
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                ADDRESS TO SELECT
              </label>
              <select className="form-control">
                <option value="">Select...</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                PAY TO
              </label>
              <textarea 
                className="form-control" 
                rows="4"
                style={{ resize: 'vertical' }}
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
            <button className="btn btn-secondary">
              <i className="fas fa-save"></i>
              Save
            </button>
            <button className="btn btn-primary" onClick={handleSave}>
              <i className="fas fa-check"></i>
              Submit
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

export default EnterVendorPrepayment;
