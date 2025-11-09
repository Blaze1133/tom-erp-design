import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCustomerDeposits = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Vendor Bills');

  const [deposits] = useState([]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleNew = () => {
    setCurrentPage('record-customer-deposit');
  };

  const handleView = (depositId) => {
    setCurrentPage('view-customer-deposit-detail');
    sessionStorage.setItem('selectedCustomerDeposit', depositId);
  };

  const handleEdit = (depositId) => {
    setCurrentPage('edit-customer-deposit');
    sessionStorage.setItem('selectedCustomerDeposit', depositId);
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-hand-holding-usd"></i>
          <h1>Customer Deposits</h1>
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
            style={{ width: '250px' }}
          >
            <option value="Vendor Bills">Vendor Bills</option>
            <option value="All Deposits">All Deposits</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-secondary" onClick={() => showToast('Edit View coming soon', 'info')}>
            Edit View
          </button>
          <button className="btn btn-primary" onClick={handleNew}>
            New Transaction
          </button>
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button className="btn-icon" title="Edit">
            <i className="fas fa-edit"></i>
            <span>EDIT</span>
          </button>
          <button className="btn-icon" title="View">
            <i className="fas fa-eye"></i>
            <span>VIEW</span>
          </button>
          <button className="btn-icon" title="Order Type">
            <i className="fas fa-filter"></i>
            <span>ORDER TYPE</span>
          </button>
          <button className="btn-icon" title="Export">
            <i className="fas fa-file-export"></i>
          </button>
          <button className="btn-icon" title="Print">
            <i className="fas fa-print"></i>
            <span>EDIT</span>
          </button>
        </div>
        <div className="filter-right-group">
          <div className="quick-sort">
            <label>QUICK SORT</label>
            <select className="form-control">
              <option>All Dates</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {deposits.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '100px' }}>EDIT | VIEW</th>
              <th>ORDER TYPE</th>
              <th>SUBSIDIARY</th>
              <th>DATE ▲</th>
              <th>AS-OF DATE</th>
              <th>PERIOD</th>
              <th>TAX PERIOD</th>
              <th>DOCUMENT NUMBER</th>
              <th>NAME</th>
              <th style={{ textAlign: 'right' }}>AMOUNT (NET OF TAX)</th>
              <th style={{ textAlign: 'right' }}>TAX TOTAL</th>
              <th style={{ textAlign: 'right' }}>AMOUNT</th>
              <th>ACCOUNT</th>
              <th>MEMO</th>
              <th>STATUS</th>
              <th>PM ISSUE SPECIFICATION</th>
            </tr>
          </thead>
          <tbody>
            {deposits.length === 0 ? (
              <tr>
                <td colSpan="16" style={{ textAlign: 'center', padding: '3rem', color: '#999' }}>
                  No records to show.
                </td>
              </tr>
            ) : (
              deposits.map((deposit) => (
                <tr key={deposit.id}>
                  <td>
                    <button 
                      className="view-link"
                      onClick={() => handleEdit(deposit.id)}
                    >
                      Edit
                    </button>
                    {' | '}
                    <button 
                      className="view-link"
                      onClick={() => handleView(deposit.id)}
                    >
                      View
                    </button>
                  </td>
                  <td style={{ fontSize: '0.85rem' }}>{deposit.orderType}</td>
                  <td style={{ fontSize: '0.85rem' }}>{deposit.subsidiary}</td>
                  <td>{deposit.date}</td>
                  <td>{deposit.asOfDate}</td>
                  <td>{deposit.period}</td>
                  <td>{deposit.taxPeriod}</td>
                  <td style={{ color: 'var(--blue-accent)', fontWeight: '500' }}>
                    {deposit.documentNumber}
                  </td>
                  <td>{deposit.name}</td>
                  <td className="amount">{deposit.amountNetOfTax}</td>
                  <td className="amount">{deposit.taxTotal}</td>
                  <td className="amount">{deposit.amount}</td>
                  <td style={{ fontSize: '0.85rem' }}>{deposit.account}</td>
                  <td style={{ color: '#666' }}>{deposit.memo}</td>
                  <td>{deposit.status}</td>
                  <td>{deposit.pmIssueSpec}</td>
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

export default ViewCustomerDeposits;
