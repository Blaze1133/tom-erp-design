import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const PostVendorBillVariances = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  const [formData, setFormData] = useState({
    postingPeriod: 'Dec 2025',
    journalDate: '14/12/2025',
    subsidiary: '',
    transactionType: 'Bill',
    transactionStatus: 'Open',
    vendor: '',
    includeBillsWithoutReceipts: false
  });

  const [transactions, setTransactions] = useState([]);

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'Tech Electric & Automation Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Offshore Marine (DQ) Pte Ltd',
    'Tech Offshore Marine (s) Pte Ltd',
    'Tech Offshore Marine (SV) Pte Ltd'
  ];

  const transactionTypes = [
    'Bill',
    'Purchase Order'
  ];

  const transactionStatuses = [
    'Open',
    'Paid In Full'
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

  const handleMarkAll = () => {
    showToast('All transactions marked', 'success');
  };

  const handleUnmarkAll = () => {
    showToast('All transactions unmarked', 'success');
  };

  const handleCustomize = () => {
    showToast('Customize view', 'info');
  };

  const handleCreateJournalEntries = () => {
    if (!formData.subsidiary) {
      showToast('Please select a subsidiary', 'error');
      return;
    }
    showToast('Journal entries created successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Changes cancelled', 'info');
      if (setCurrentPage) {
        setCurrentPage('dashboard');
      }
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-invoice-dollar"></i>
          <div>
            <h1>Post Vendor Bill Variances</h1>
            <div className="detail-subtitle">
              <span>Create Journal Entries</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">More</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary" onClick={handleCreateJournalEntries}>
          <i className="fas fa-plus"></i>
          Create Journal Entries
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          <i className="fas fa-times"></i>
          Cancel
        </button>
      </div>

      <div className="detail-content">
        {/* Filter Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Filter Criteria</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>JOURNAL POSTING PERIOD <span style={{ color: '#dc2626' }}>*</span></label>
                <select 
                  className="form-control"
                  value={formData.postingPeriod}
                  onChange={(e) => handleInputChange('postingPeriod', e.target.value)}
                >
                  <option>Dec 2025</option>
                  <option>Jan 2026</option>
                  <option>Feb 2026</option>
                  <option>Mar 2026</option>
                </select>
              </div>

              <div className="detail-field">
                <label>TRANSACTION STATUS</label>
                <select 
                  className="form-control"
                  value={formData.transactionStatus}
                  onChange={(e) => handleInputChange('transactionStatus', e.target.value)}
                >
                  {transactionStatuses.map((status, index) => (
                    <option key={index} value={status}>{status}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>JOURNAL DATE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.journalDate}
                  onChange={(e) => handleInputChange('journalDate', e.target.value)}
                  placeholder="DD/MM/YYYY"
                />
              </div>

              <div className="detail-field">
                <label>VENDOR</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.vendor}
                  onChange={(e) => handleInputChange('vendor', e.target.value)}
                  placeholder="<Type then tab>"
                />
              </div>

              <div className="detail-field">
                <label>SUBSIDIARY <span style={{ color: '#dc2626' }}>*</span></label>
                <select 
                  className="form-control"
                  value={formData.subsidiary}
                  onChange={(e) => handleInputChange('subsidiary', e.target.value)}
                >
                  <option value="">Select Subsidiary</option>
                  {subsidiaries.map((subsidiary, index) => (
                    <option key={index} value={subsidiary}>{subsidiary}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>TRANSACTION TYPE</label>
                <select 
                  className="form-control"
                  value={formData.transactionType}
                  onChange={(e) => handleInputChange('transactionType', e.target.value)}
                >
                  {transactionTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input 
                    type="checkbox"
                    checked={formData.includeBillsWithoutReceipts}
                    onChange={(e) => handleInputChange('includeBillsWithoutReceipts', e.target.checked)}
                    style={{ marginRight: '8px' }}
                  />
                  INCLUDE BILLS WITHOUT RECEIPTS
                </label>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Transactions Table Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Transactions</h3>
          </div>
          <div className="section-body">
            <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
              <button className="btn-toolbar" onClick={handleMarkAll}>
                Mark All
              </button>
              <button className="btn-toolbar" onClick={handleUnmarkAll}>
                Unmark All
              </button>
              <button className="btn-toolbar" onClick={handleCustomize}>
                Customize
              </button>
            </div>

            <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="items-table">
                <thead>
                  <tr>
                    <th style={{ width: '60px' }}>SELECT</th>
                    <th style={{ minWidth: '150px' }}>TRANSACTION NUMBER</th>
                    <th style={{ minWidth: '120px' }}>DATE</th>
                    <th style={{ minWidth: '150px' }}>TRANSACTION STATUS</th>
                    <th style={{ minWidth: '200px' }}>VENDOR</th>
                    <th style={{ minWidth: '200px' }}>ITEM</th>
                    <th style={{ minWidth: '100px' }}>QUANTITY</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.length === 0 ? (
                    <tr>
                      <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                        No records to show.
                      </td>
                    </tr>
                  ) : (
                    transactions.map((transaction, index) => (
                      <tr key={index}>
                        <td style={{ textAlign: 'center' }}>
                          <input type="checkbox" />
                        </td>
                        <td>{transaction.transactionNumber}</td>
                        <td>{transaction.date}</td>
                        <td>{transaction.status}</td>
                        <td>{transaction.vendor}</td>
                        <td>{transaction.item}</td>
                        <td style={{ textAlign: 'right' }}>{transaction.quantity}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="detail-footer">
          <button className="btn-toolbar" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn-toolbar-primary" onClick={handleCreateJournalEntries}>
            <i className="fas fa-plus"></i>
            Create Journal Entries
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

export default PostVendorBillVariances;
