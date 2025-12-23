import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const WriteTaxLiability = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    account: '11110 ALL Bank Accounts : TSV DBS SGD 072-004442-8',
    balance: '-13,485.52',
    subsidiary: 'Tech Offshore Marine (SV) Pte Ltd',
    currency: 'SGD',
    taxAccount: '13100 GST on Purchases SG',
    payee: '',
    date: '8/11/2025',
    postingPeriod: 'Jan 2021',
    amount: '0',
    memo: ''
  });

  const accountOptions = [
    '11110 ALL Bank Accounts : TSV DBS SGD 072-004442-8',
    '11120 ALL Bank Accounts : TEA DBS SGD 072-004465-7',
    '11130 ALL Bank Accounts : TMO DBS SGD 072-027380-0',
    '11140 ALL Bank Accounts : MEP DBS SGD 003-906132-3',
    '11150 ALL Bank Accounts : TDQ DBS SGD 072-004177-1',
    '11160 ALL Bank Accounts : TMO MAYBANK 0-421-10-2400-6',
    '11170 ALL Bank Accounts : TEA MAYBANK 0-421-10-2401-3',
    '11180 ALL Bank Accounts : TDQ MAYBANK 0-421-10-2404-3'
  ];

  const subsidiaries = [
    'Tech Offshore Marine (SV) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'Tech Offshore Marine (DQ) Pte Ltd'
  ];

  const taxAccountOptions = [
    '13100 GST on Purchases SG',
    '21510 GST on Sales SG',
    '22000 GST Control Account'
  ];

  const payeeOptions = [
    'Default Tax Agency SG'
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleSave = () => {
    showToast('Tax Liability Cheque saved successfully!', 'success');
    setTimeout(() => {
      setCurrentPage('view-tax-liabilities');
    }, 1500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      setCurrentPage('view-tax-liabilities');
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-invoice-dollar"></i>
          <div>
            <h1>Tax Liability Cheque</h1>
            <div className="detail-subtitle">
              <span>New Tax Liability Cheque</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={() => setCurrentPage('view-tax-liabilities')}>List</button>
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
          Cancel
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print
        </button>
        <div className="toolbar-dropdown" style={{ marginLeft: 'auto' }}>
          <button className="btn-toolbar">
            <i className="fas fa-cog"></i>
            Actions
            <i className="fas fa-chevron-down" style={{ marginLeft: '0.5rem', fontSize: '0.7rem' }}></i>
          </button>
        </div>
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
                <label>ACCOUNT <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.account}
                  onChange={(e) => setFormData({...formData, account: e.target.value})}
                >
                  {accountOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>BALANCE</label>
                <input 
                  type="text"
                  className="form-control"
                  value={formData.balance}
                  onChange={(e) => setFormData({...formData, balance: e.target.value})}
                  disabled
                  style={{ backgroundColor: '#f5f5f5', cursor: 'not-allowed' }}
                />
              </div>

              <div className="detail-field">
                <label>SUBSIDIARY <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.subsidiary}
                  onChange={(e) => setFormData({...formData, subsidiary: e.target.value})}
                >
                  {subsidiaries.map(sub => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>CURRENCY</label>
                <input 
                  type="text"
                  className="form-control"
                  value={formData.currency}
                  onChange={(e) => setFormData({...formData, currency: e.target.value})}
                  disabled
                  style={{ backgroundColor: '#f5f5f5', cursor: 'not-allowed' }}
                />
              </div>

              <div className="detail-field">
                <label>TAX ACCOUNT <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.taxAccount}
                  onChange={(e) => setFormData({...formData, taxAccount: e.target.value})}
                >
                  {taxAccountOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>PAYEE <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.payee}
                  onChange={(e) => setFormData({...formData, payee: e.target.value})}
                >
                  <option value="">Select Payee</option>
                  {payeeOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>DATE <span className="required">*</span></label>
                <input 
                  type="text"
                  className="form-control"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>

              <div className="detail-field">
                <label>POSTING PERIOD</label>
                <select 
                  className="form-control"
                  value={formData.postingPeriod}
                  onChange={(e) => setFormData({...formData, postingPeriod: e.target.value})}
                >
                  <option>Jan 2021</option>
                  <option>Feb 2021</option>
                  <option>Mar 2021</option>
                  <option>Apr 2021</option>
                  <option>May 2021</option>
                  <option>Jun 2021</option>
                  <option>Jul 2021</option>
                  <option>Aug 2021</option>
                  <option>Sep 2021</option>
                  <option>Oct 2021</option>
                  <option>Nov 2021</option>
                  <option>Dec 2021</option>
                </select>
              </div>

              <div className="detail-field">
                <label>AMOUNT <span className="required">*</span></label>
                <input 
                  type="text"
                  className="form-control"
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  placeholder="0"
                />
              </div>

              <div className="detail-field">
                <label>MEMO</label>
                <input 
                  type="text"
                  className="form-control"
                  value={formData.memo}
                  onChange={(e) => setFormData({...formData, memo: e.target.value})}
                />
              </div>
              <div className="detail-field">
                <label>DO RECORD CREATED</label>
                <div className="field-value" style={{ padding: '8px 0', fontSize: '13px', color: '#666' }}>
                  -
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="detail-footer">
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

export default WriteTaxLiability;
