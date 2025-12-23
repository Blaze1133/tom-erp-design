import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewBankReconciliations = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');

  const [reconciliations] = useState([
    {
      id: 1,
      documentNumber: 'RECON-2024-001',
      account: '11210 ALL Bank Accounts : MEP OCBC 536-82592-001',
      statementDate: '31/12/2024',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
      endingBalance: 150000.00,
      difference: 0.00,
      status: 'RECONCILED'
    },
    {
      id: 2,
      documentNumber: 'RECON-2024-002',
      account: '11140 ALL Bank Accounts : MEP DBS SGD 003-906132-3',
      statementDate: '31/12/2024',
      subsidiary: 'TOM Shipyard Pte Ltd',
      endingBalance: 85000.00,
      difference: 500.00,
      status: 'PENDING'
    },
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewReconciliation = (reconciliation) => {
    if (setCurrentPage) {
      setCurrentPage('view-bank-reconciliation-detail');
      sessionStorage.setItem('selectedReconciliation', JSON.stringify(reconciliation));
    }
  };

  const handleEdit = (reconciliation) => {
    if (setCurrentPage) {
      setCurrentPage('edit-bank-reconciliation');
      sessionStorage.setItem('selectedReconciliation', JSON.stringify(reconciliation));
    }
  };

  const handleNewReconciliation = () => {
    if (setCurrentPage) {
      setCurrentPage('reconcile-bank-statement');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-balance-scale" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Bank Reconciliations</h1>
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
            value={viewFilter}
            onChange={(e) => setViewFilter(e.target.value)}
          >
            <option value="all">All Reconciliations</option>
            <option value="reconciled">Reconciled</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <button className="btn-new-transaction" onClick={handleNewReconciliation}>
          <i className="fas fa-plus"></i> New Reconciliation
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
            <option>Statement Date</option>
            <option>Account</option>
            <option>Status</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {reconciliations.length}
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th></th>
              <th>EDIT | VIEW</th>
              <th>*</th>
              <th>STATEMENT DATE</th>
              <th>DOCUMENT NUMBER</th>
              <th>ACCOUNT</th>
              <th>SUBSIDIARY</th>
              <th>ENDING BALANCE</th>
              <th>DIFFERENCE</th>
            </tr>
          </thead>
          <tbody>
            {reconciliations.map((recon) => (
              <tr key={recon.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button 
                      className="view-link"
                      onClick={() => handleEdit(recon)}
                    >
                      Edit
                    </button>
                    <span style={{ color: '#999' }}>|</span>
                    <button 
                      className="view-link"
                      onClick={() => handleViewReconciliation(recon)}
                    >
                      View
                    </button>
                  </div>
                </td>
                <td>
                  {recon.status === 'PENDING' ? (
                    <span className="status-badge" style={{ background: '#ff9800', color: 'white' }}>
                      {recon.status}
                    </span>
                  ) : recon.status === 'RECONCILED' ? (
                    <span className="status-badge" style={{ background: '#4caf50', color: 'white' }}>
                      {recon.status}
                    </span>
                  ) : (
                    <span>*</span>
                  )}
                </td>
                <td>{recon.statementDate}</td>
                <td className="doc-number">{recon.documentNumber}</td>
                <td>{recon.account}</td>
                <td>{recon.subsidiary}</td>
                <td className="amount">{recon.endingBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                <td className="amount" style={{ color: recon.difference === 0 ? '#4caf50' : '#f44336' }}>
                  {recon.difference.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </td>
              </tr>
            ))}
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

export default ViewBankReconciliations;
