import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewEmployeeLoanApplications = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Outstanding Loan');

  const [loanApplications] = useState([
    {
      id: 1,
      loanId: 1,
      employeeName: '222267 Demo employee',
      loanAmount: '12,000.00',
      amountRepaid: '0.00',
      balanceAmount: '12,000.00'
    },
    {
      id: 2,
      loanId: 2,
      employeeName: 'MEP007 annamalai murugan',
      loanAmount: '500.00',
      amountRepaid: '375.00',
      balanceAmount: '500.00'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (loan) => {
    if (onViewClick) {
      onViewClick(loan);
    }
  };

  const handleEdit = (loan) => {
    if (onEditClick) {
      onEditClick(loan);
    }
  };

  const handleNewLoan = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-hand-holding-usd"></i>
          <h1>Employee Loan Application List</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>VIEW</label>
          <select 
            value={viewFilter} 
            onChange={(e) => setViewFilter(e.target.value)}
            className="form-control"
            style={{ width: '200px' }}
          >
            <option value="Outstanding Loan">Outstanding Loan</option>
            <option value="All Loans">All Loans</option>
            <option value="Closed Loans">Closed Loans</option>
          </select>
          <button className="btn btn-secondary" style={{ marginLeft: '1rem' }}>Edit View</button>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewLoan}>
            New Employee Loan Application
          </button>
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button className="btn-icon" title="Export">
            <i className="fas fa-file-export"></i>
          </button>
          <button className="btn-icon" title="Excel">
            <i className="fas fa-file-excel"></i>
          </button>
          <button className="btn-icon" title="PDF">
            <i className="fas fa-file-pdf"></i>
          </button>
          <button className="btn-icon" title="Print">
            <i className="fas fa-print"></i>
          </button>
          <label className="checkbox-label">
            <input type="checkbox" />
            SHOW INACTIVES
          </label>
          <button className="btn-icon" title="Edit">
            <span>EDIT</span>
          </button>
          <button className="btn-icon" title="Delete">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="filter-right-group">
          <div className="quick-sort">
            <label>QUICK SORT</label>
            <select className="form-control">
              <option>All Loans</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {loanApplications.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '10%' }}>EDIT | VIEW</th>
              <th style={{ width: '10%' }}>LOAN ID ▲</th>
              <th style={{ width: '30%' }}>EMPLOYEE NAME</th>
              <th style={{ width: '15%' }}>LOAN AMOUNT</th>
              <th style={{ width: '15%' }}>AMOUNT REPAID</th>
              <th style={{ width: '20%' }}>BALANCE AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {loanApplications.map((loan) => (
              <tr key={loan.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEdit(loan)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleView(loan)}
                  >
                    View
                  </button>
                </td>
                <td>{loan.loanId}</td>
                <td>{loan.employeeName}</td>
                <td className="amount">{loan.loanAmount}</td>
                <td className="amount">{loan.amountRepaid}</td>
                <td className="amount">{loan.balanceAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
};

export default ViewEmployeeLoanApplications;
