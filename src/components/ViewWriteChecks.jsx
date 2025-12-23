import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewWriteChecks = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');

  const [checks] = useState([
    {
      id: 1,
      documentNumber: 'CHK-2024-001',
      date: '8/11/2025',
      payee: '1000 TEAM LEAD CONSTRUCTION PTE LTD',
      account: '11230 ALL Bank Accounts : NEP UOB 9314-301-906-1',
      checkNumber: '491',
      amount: 5000.00,
      status: 'PENDING',
      memo: 'Payment for construction services'
    },
    {
      id: 2,
      documentNumber: 'CHK-2024-002',
      date: '9/11/2025',
      payee: '1006 Netco Marine Pte Ltd',
      account: '11110 ALL Bank Accounts : TSV DBS SGD 072-004442-8',
      checkNumber: '492',
      amount: 12500.00,
      status: 'CLEARED',
      memo: 'Marine equipment payment'
    },
    {
      id: 3,
      documentNumber: 'CHK-2024-003',
      date: '10/11/2025',
      payee: '1010 Technical Asia Pte Ltd',
      account: '11120 ALL Bank Accounts : TEA DBS SGD 072-004465-7',
      checkNumber: '493',
      amount: 8750.50,
      status: 'PENDING',
      memo: 'Technical services'
    },
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewCheck = (check) => {
    if (setCurrentPage) {
      setCurrentPage('view-check-detail');
      sessionStorage.setItem('selectedCheck', JSON.stringify(check));
    }
  };

  const handleEdit = (check) => {
    if (setCurrentPage) {
      setCurrentPage('edit-check');
      sessionStorage.setItem('selectedCheck', JSON.stringify(check));
    }
  };

  const handleNewCheck = () => {
    if (setCurrentPage) {
      setCurrentPage('write-check');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-money-check" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Checks</h1>
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
            <option value="all">All Checks</option>
            <option value="pending">Pending Checks</option>
            <option value="cleared">Cleared Checks</option>
            <option value="voided">Voided Checks</option>
          </select>
        </div>
        <button className="btn-new-transaction" onClick={handleNewCheck}>
          <i className="fas fa-plus"></i> New Check
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
            <option>8/11/2025 — 10/11/2025</option>
            <option>Date</option>
            <option>Payee Name</option>
            <option>Amount</option>
            <option>Status</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {checks.length}
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
              <th>PAYEE</th>
              <th>ACCOUNT</th>
              <th>CHECK #</th>
              <th>MEMO</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {checks.map((check) => (
              <tr key={check.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button 
                      className="view-link"
                      onClick={() => handleEdit(check)}
                    >
                      Edit
                    </button>
                    <span style={{ color: '#999' }}>|</span>
                    <button 
                      className="view-link"
                      onClick={() => handleViewCheck(check)}
                    >
                      View
                    </button>
                  </div>
                </td>
                <td>
                  {check.status === 'PENDING' ? (
                    <span className="status-badge" style={{ background: '#ff9800', color: 'white' }}>
                      {check.status}
                    </span>
                  ) : check.status === 'CLEARED' ? (
                    <span className="status-badge" style={{ background: '#4caf50', color: 'white' }}>
                      {check.status}
                    </span>
                  ) : (
                    <span>*</span>
                  )}
                </td>
                <td>{check.date}</td>
                <td className="doc-number">{check.documentNumber}</td>
                <td>{check.payee}</td>
                <td>{check.account}</td>
                <td>{check.checkNumber}</td>
                <td>{check.memo}</td>
                <td className="amount">{check.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
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

export default ViewWriteChecks;
