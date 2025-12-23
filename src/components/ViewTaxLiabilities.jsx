import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewTaxLiabilities = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewType, setViewType] = useState('Vendor Bills');

  // Empty state - no records to show
  const taxLiabilities = [];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleNewTransaction = () => {
    setCurrentPage('write-tax-liability');
  };

  return (
    <div className="enquiries-list">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice-dollar" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Tax Liability Cheques</h1>
        </div>
        <div className="page-actions">
          <button className="btn-view-option active">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>VIEW:</label>
          <select 
            className="form-control"
            value={viewType}
            onChange={(e) => setViewType(e.target.value)}
          >
            <option>Vendor Bills</option>
            <option>All Tax Liabilities</option>
            <option>Recent Tax Liabilities</option>
          </select>
        </div>
        <button className="btn-new-transaction" onClick={handleNewTransaction}>
          <i className="fas fa-plus"></i> New Transaction
        </button>
      </div>

      <div className="list-filters">
        <div className="list-toolbar">
          <button className="toolbar-btn" title="Edit">
            <i className="fas fa-edit"></i> EDIT
          </button>
          <button className="toolbar-btn" title="Delete">
            <i className="fas fa-times"></i>
          </button>
          <button className="toolbar-btn" title="Attach">
            <i className="fas fa-paperclip"></i>
          </button>
          <button className="toolbar-btn" title="Print">
            <i className="fas fa-print"></i>
          </button>
        </div>
        <div className="list-sort">
          <label>QUICK SORT:</label>
          <select className="form-control">
            <option>Date</option>
            <option>Document Number</option>
            <option>Amount</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {taxLiabilities.length}
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th></th>
              <th>EDIT | VIEW</th>
              <th>DATE</th>
              <th>DOCUMENT NUMBER</th>
              <th>SUBSIDIARY</th>
              <th>PAYEE</th>
              <th>TAX ACCOUNT</th>
              <th>POSTING PERIOD</th>
              <th>AMOUNT</th>
              <th>MEMO</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {taxLiabilities.length === 0 ? (
              <tr>
                <td colSpan="11" style={{ padding: '40px', textAlign: 'center', color: '#999', fontSize: '14px' }}>
                  No records to show.
                </td>
              </tr>
            ) : (
              taxLiabilities.map((liability) => (
                <tr key={liability.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button className="view-link">Edit</button>
                      <span style={{ color: '#999' }}>|</span>
                      <button className="view-link">View</button>
                    </div>
                  </td>
                  <td>{liability.date}</td>
                  <td className="doc-number">{liability.documentNumber}</td>
                  <td>{liability.subsidiary}</td>
                  <td>{liability.payee}</td>
                  <td>{liability.taxAccount}</td>
                  <td>{liability.postingPeriod}</td>
                  <td className="amount">{liability.amount}</td>
                  <td>{liability.memo}</td>
                  <td>{liability.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
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

export default ViewTaxLiabilities;
