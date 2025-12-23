import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewMakeDeposits = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');

  const [deposits] = useState([
    {
      id: 1,
      documentNumber: 'DEP-2024-001',
      date: '31/3/2021',
      account: '11180 ALL Bank Accounts : GD 072-904177-1',
      subsidiary: 'Tech Offshore Marine (DQ) Pte Ltd',
      amount: 15000.00,
      status: 'DEPOSITED',
      memo: 'Customer payments deposit'
    },
    {
      id: 2,
      documentNumber: 'DEP-2024-002',
      date: '15/4/2021',
      account: '11110 ALL Bank Accounts : TSV DBS SGD 072-004442-8',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
      amount: 25000.00,
      status: 'DEPOSITED',
      memo: 'Project advance payment'
    },
    {
      id: 3,
      documentNumber: 'DEP-2024-003',
      date: '20/4/2021',
      account: '11120 ALL Bank Accounts : TEA DBS SGD 072-004465-7',
      subsidiary: 'TOM Shipyard Pte Ltd',
      amount: 8500.00,
      status: 'PENDING',
      memo: 'Miscellaneous deposits'
    },
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewDeposit = (deposit) => {
    if (setCurrentPage) {
      setCurrentPage('view-deposit-detail');
      sessionStorage.setItem('selectedDeposit', JSON.stringify(deposit));
    }
  };

  const handleEdit = (deposit) => {
    if (setCurrentPage) {
      setCurrentPage('edit-deposit');
      sessionStorage.setItem('selectedDeposit', JSON.stringify(deposit));
    }
  };

  const handleNewDeposit = () => {
    if (setCurrentPage) {
      setCurrentPage('make-deposit');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-money-check-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Deposits</h1>
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
            <option value="all">All Deposits</option>
            <option value="deposited">Deposited</option>
            <option value="pending">Pending</option>
            <option value="voided">Voided</option>
          </select>
        </div>
        <button className="btn-new-transaction" onClick={handleNewDeposit}>
          <i className="fas fa-plus"></i> New Deposit
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
            <option>31/3/2021 — 20/4/2021</option>
            <option>Date</option>
            <option>Account</option>
            <option>Amount</option>
            <option>Status</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {deposits.length}
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
              <th>ACCOUNT</th>
              <th>SUBSIDIARY</th>
              <th>MEMO</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {deposits.map((deposit) => (
              <tr key={deposit.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button 
                      className="view-link"
                      onClick={() => handleEdit(deposit)}
                    >
                      Edit
                    </button>
                    <span style={{ color: '#999' }}>|</span>
                    <button 
                      className="view-link"
                      onClick={() => handleViewDeposit(deposit)}
                    >
                      View
                    </button>
                  </div>
                </td>
                <td>
                  {deposit.status === 'PENDING' ? (
                    <span className="status-badge" style={{ background: '#ff9800', color: 'white' }}>
                      {deposit.status}
                    </span>
                  ) : deposit.status === 'DEPOSITED' ? (
                    <span className="status-badge" style={{ background: '#4caf50', color: 'white' }}>
                      {deposit.status}
                    </span>
                  ) : (
                    <span>*</span>
                  )}
                </td>
                <td>{deposit.date}</td>
                <td className="doc-number">{deposit.documentNumber}</td>
                <td>{deposit.account}</td>
                <td>{deposit.subsidiary}</td>
                <td>{deposit.memo}</td>
                <td className="amount">{deposit.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
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

export default ViewMakeDeposits;
