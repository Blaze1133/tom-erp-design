import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewTransferFunds = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');

  const [transfers] = useState([
    {
      id: 1,
      documentNumber: 'TRF-2024-001',
      date: '3/12/2021',
      fromAccount: '11210 ALL Bank Accounts : MEP OCBC 536-82592-001',
      toAccount: '11140 ALL Bank Accounts : MEP DBS SGD 003-906132-3',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
      amount: 200000.00,
      status: 'COMPLETED',
      memo: 'MEP OCBC TO DBS'
    },
    {
      id: 2,
      documentNumber: 'TRF-2024-002',
      date: '5/12/2021',
      fromAccount: '11110 ALL Bank Accounts : TSV DBS SGD 072-004442-8',
      toAccount: '11120 ALL Bank Accounts : TEA DBS SGD 072-004465-7',
      subsidiary: 'TOM Shipyard Pte Ltd',
      amount: 50000.00,
      status: 'PENDING',
      memo: 'Internal transfer'
    },
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewTransfer = (transfer) => {
    if (setCurrentPage) {
      setCurrentPage('view-transfer-detail');
      sessionStorage.setItem('selectedTransfer', JSON.stringify(transfer));
    }
  };

  const handleEdit = (transfer) => {
    if (setCurrentPage) {
      setCurrentPage('edit-transfer');
      sessionStorage.setItem('selectedTransfer', JSON.stringify(transfer));
    }
  };

  const handleNewTransfer = () => {
    if (setCurrentPage) {
      setCurrentPage('transfer-funds');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-exchange-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Transfer Funds</h1>
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
            <option value="all">All Transfers</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="voided">Voided</option>
          </select>
        </div>
        <button className="btn-new-transaction" onClick={handleNewTransfer}>
          <i className="fas fa-plus"></i> New Transfer
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
            <option>3/12/2021 — 5/12/2021</option>
            <option>Date</option>
            <option>Amount</option>
            <option>Status</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {transfers.length}
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th></th>
              <th>EDIT | VIEW</th>
              <th>*</th>
              <th>DATE</th>
              <th>DOCUMENT NUMBER</th>
              <th>FROM ACCOUNT</th>
              <th>TO ACCOUNT</th>
              <th>SUBSIDIARY</th>
              <th>MEMO</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {transfers.map((transfer) => (
              <tr key={transfer.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button 
                      className="view-link"
                      onClick={() => handleEdit(transfer)}
                    >
                      Edit
                    </button>
                    <span style={{ color: '#999' }}>|</span>
                    <button 
                      className="view-link"
                      onClick={() => handleViewTransfer(transfer)}
                    >
                      View
                    </button>
                  </div>
                </td>
                <td>
                  {transfer.status === 'PENDING' ? (
                    <span className="status-badge" style={{ background: '#ff9800', color: 'white' }}>
                      {transfer.status}
                    </span>
                  ) : transfer.status === 'COMPLETED' ? (
                    <span className="status-badge" style={{ background: '#4caf50', color: 'white' }}>
                      {transfer.status}
                    </span>
                  ) : (
                    <span>*</span>
                  )}
                </td>
                <td>{transfer.date}</td>
                <td className="doc-number">{transfer.documentNumber}</td>
                <td>{transfer.fromAccount}</td>
                <td>{transfer.toAccount}</td>
                <td>{transfer.subsidiary}</td>
                <td>{transfer.memo}</td>
                <td className="amount">{transfer.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
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

export default ViewTransferFunds;
