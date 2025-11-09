import React, { useState } from 'react';
import './Enquiries.css';

const WriteTaxLiability = ({ setCurrentPage }) => {
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

  const handleSave = () => {
    console.log('Saving tax liability:', formData);
    setCurrentPage('view-tax-liabilities');
  };

  const handleCancel = () => {
    setCurrentPage('view-tax-liabilities');
  };

  return (
    <div className="sales-quotation">
      {/* Header */}
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice-dollar" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <div>
            <h1 style={{ margin: 0 }}>Tax Liability Cheque</h1>
          </div>
        </div>
        <div className="page-actions" style={{ display: 'flex', gap: '12px' }}>
          <button 
            onClick={handleSave}
            style={{
              padding: '8px 24px',
              background: '#4a90e2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              minWidth: '80px'
            }}
          >
            Save
          </button>
          <button 
            onClick={handleCancel}
            style={{
              padding: '8px 24px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              minWidth: '80px'
            }}
          >
            Cancel
          </button>
          <button 
            style={{
              padding: '8px 24px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              minWidth: '80px'
            }}
          >
            List
          </button>
          <button 
            style={{
              padding: '8px 24px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              minWidth: '80px'
            }}
          >
            More
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Main Form */}
        <div className="form-section">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">ACCOUNT</label>
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

              <div className="form-group">
                <label className="form-label">BALANCE</label>
                <input 
                  type="text"
                  className="form-control"
                  value={formData.balance}
                  onChange={(e) => setFormData({...formData, balance: e.target.value})}
                  disabled
                  style={{ background: '#f5f5f5' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">SUBSIDIARY</label>
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

              <div className="form-group">
                <label className="form-label">CURRENCY</label>
                <input 
                  type="text"
                  className="form-control"
                  value={formData.currency}
                  onChange={(e) => setFormData({...formData, currency: e.target.value})}
                  disabled
                  style={{ background: '#f5f5f5' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">TAX ACCOUNT</label>
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

              <div className="form-group">
                <label className="form-label">DO RECORD CREATED</label>
                <div style={{ padding: '8px 0', fontSize: '13px', color: '#666' }}>
                  -
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label required">PAYEE</label>
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

              <div className="form-group">
                <label className="form-label required">DATE</label>
                <input 
                  type="text"
                  className="form-control"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label className="form-label">POSTING PERIOD</label>
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

              <div className="form-group">
                <label className="form-label required">AMOUNT</label>
                <input 
                  type="text"
                  className="form-control"
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  placeholder="0"
                />
              </div>

              <div className="form-group">
                <label className="form-label">MEMO</label>
                <input 
                  type="text"
                  className="form-control"
                  value={formData.memo}
                  onChange={(e) => setFormData({...formData, memo: e.target.value})}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="footer-actions" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          gap: '12px',
          marginTop: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid #e0e0e0'
        }}>
          <button 
            onClick={handleCancel}
            style={{
              padding: '10px 28px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              minWidth: '100px'
            }}
          >
            Cancel
          </button>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              onClick={handleSave}
              style={{
                padding: '10px 28px',
                background: '#4a90e2',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                minWidth: '100px'
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteTaxLiability;
