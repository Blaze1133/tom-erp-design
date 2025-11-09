import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const PaySingleVendor = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [formData, setFormData] = useState({
    apAccount: '20010 Accounts Payable : Trade Creditors',
    customForm: 'TOM Bill Payment',
    transactionNumber: 'To Be Generated',
    payee: '',
    account: '',
    balance: '',
    amount: 0.00,
    currency: 'SGD',
    exchangeRate: 1.00,
    date: '2025-07-11',
    postingPeriod: 'Nov 2025',
    toBePrinted: false,
    voucher: false,
    check: '',
    memo: '',
    approvalStatus: 'Pending Approval',
    nextApprover: '',
    subsidiary: '',
    department: '',
    class: '',
    location: '',
    approvalStatusSubmit: 'Submit For Approval'
  });

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    showToast('Bill payment saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-vendor-payments');
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
          <i className="fas fa-money-check-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <div>
            <h1 style={{ margin: 0, marginBottom: '4px' }}>Bill Payment</h1>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>300444</span>
              <span style={{ fontSize: '14px', color: '#666' }}>EQUIPE SERVICES & TECHNOLOGY PTE LTD</span>
            </div>
          </div>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn-secondary">
            Actions
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
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">A/P ACCOUNT</label>
              <select 
                className="form-control"
                value={formData.apAccount}
                onChange={(e) => handleFormChange('apAccount', e.target.value)}
              >
                <option>20010 Accounts Payable : Trade Creditors</option>
                <option>20020 Accounts Payable : Intercompany Creditors</option>
                <option>20025 Other Payable Creditors</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">AMOUNT</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.amount}
                onChange={(e) => handleFormChange('amount', e.target.value)}
                step="0.01"
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
              <label className="form-label required">CUSTOM FORM</label>
              <select 
                className="form-control"
                value={formData.customForm}
                onChange={(e) => handleFormChange('customForm', e.target.value)}
              >
                <option>TOM Bill Payment</option>
                <option>Standard Bill Payment</option>
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
              <label className="form-label">CHECK #</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.check}
                onChange={(e) => handleFormChange('check', e.target.value)}
              />
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
              <label className="form-label">MEMO</label>
              <textarea 
                className="form-control"
                value={formData.memo}
                onChange={(e) => handleFormChange('memo', e.target.value)}
                rows="2"
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
              <label className="form-label">APPROVAL STATUS</label>
              <select 
                className="form-control"
                value={formData.approvalStatus}
                onChange={(e) => handleFormChange('approvalStatus', e.target.value)}
              >
                <option>- New -</option>
                <option>Submit For Approval</option>
                <option>Pending Approval</option>
                <option>Approved</option>
                <option>Rejected</option>
                <option>Submitted To Client</option>
                <option>Updated to Sales Team</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label required">ACCOUNT</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.account}
                onChange={(e) => handleFormChange('account', e.target.value)}
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
              <label className="form-label">NEXT APPROVER</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.nextApprover}
                onChange={(e) => handleFormChange('nextApprover', e.target.value)}
                placeholder="<Type then tab>"
              />
            </div>

            <div className="form-group">
              <label className="form-label">BALANCE</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.balance}
                onChange={(e) => handleFormChange('balance', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className="form-section" style={{ marginTop: '1.5rem' }}>
          <h2 className="section-title">
            <i className="fas fa-tags"></i>
            Classification
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0 1rem 0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label required">SUBSIDIARY</label>
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
            
            <div className="form-group">
              <label className="form-label">CLASS</label>
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
            
            <div className="form-group">
              <label className="form-label">LOCATION</label>
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

            <div className="form-group">
              <label className="form-label required">DEPARTMENT</label>
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

            <div className="form-group">
              <label className="form-label">APPROVAL STATUS</label>
              <select 
                className="form-control"
                value={formData.approvalStatusSubmit}
                onChange={(e) => handleFormChange('approvalStatusSubmit', e.target.value)}
              >
                <option>Submit For Approval</option>
                <option>Approved</option>
                <option>Pending Approval</option>
                <option>Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Apply Section */}
        <div className="form-section" style={{ marginTop: '1.5rem' }}>
          <h2 className="section-title">
            <i className="fas fa-check-circle"></i>
            Apply
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0 1rem 0' }} />

          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontSize: '13px', color: '#666', marginBottom: '8px', display: 'block' }}>SELECT ITEM</label>
            <input type="text" className="form-control" style={{ maxWidth: '300px' }} />
          </div>

          <div style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
            <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '6px 16px' }}>
              Mark All
            </button>
            <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '6px 16px' }}>
              Unmark All
            </button>
            <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '6px 16px' }}>
              Customize
            </button>
          </div>

          <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="items-table" style={{ width: '100%', minWidth: '1200px' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>APPLY</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DATE DUE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>TYPE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>REF NO.</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>ORIG. AMT.</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>AMT. DUE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>CURRENCY</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DISC. DATE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DISC. AVAIL.</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DISC. TAKEN</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>PAYMENT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="11" style={{ padding: '20px', textAlign: 'center', color: '#999', fontSize: '13px' }}>
                    No records to show.
                  </td>
                </tr>
              </tbody>
            </table>
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

export default PaySingleVendor;
