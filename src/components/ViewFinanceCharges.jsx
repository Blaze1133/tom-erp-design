import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewFinanceCharges = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Vendor Bills');

  const [charges] = useState([]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleNew = () => {
    setCurrentPage('assess-finance-charge');
  };

  const handleView = (chargeId) => {
    setCurrentPage('view-finance-charge-detail');
    sessionStorage.setItem('selectedFinanceCharge', chargeId);
  };

  const handleEdit = (chargeId) => {
    setCurrentPage('edit-finance-charge');
    sessionStorage.setItem('selectedFinanceCharge', chargeId);
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-file-invoice-dollar"></i>
          <h1>Finance Charges</h1>
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
            <option value="All Charges">All Charges</option>
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
            TOTAL: {charges.length}
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
              <th>PM ISSUE SPECIFICATION</th>
              <th>APPROVAL STATUS</th>
              <th>REF POINT</th>
            </tr>
          </thead>
          <tbody>
            {charges.length === 0 ? (
              <tr>
                <td colSpan="17" style={{ textAlign: 'center', padding: '3rem', color: '#999' }}>
                  No records to show.
                </td>
              </tr>
            ) : (
              charges.map((charge) => (
                <tr key={charge.id}>
                  <td>
                    <button 
                      className="view-link"
                      onClick={() => handleEdit(charge.id)}
                    >
                      Edit
                    </button>
                    {' | '}
                    <button 
                      className="view-link"
                      onClick={() => handleView(charge.id)}
                    >
                      View
                    </button>
                  </td>
                  <td style={{ fontSize: '0.85rem' }}>{charge.orderType}</td>
                  <td style={{ fontSize: '0.85rem' }}>{charge.subsidiary}</td>
                  <td>{charge.date}</td>
                  <td>{charge.asOfDate}</td>
                  <td>{charge.period}</td>
                  <td>{charge.taxPeriod}</td>
                  <td style={{ color: 'var(--blue-accent)', fontWeight: '500' }}>
                    {charge.documentNumber}
                  </td>
                  <td>{charge.name}</td>
                  <td className="amount">{charge.amountNetOfTax}</td>
                  <td className="amount">{charge.taxTotal}</td>
                  <td className="amount">{charge.amount}</td>
                  <td style={{ fontSize: '0.85rem' }}>{charge.account}</td>
                  <td style={{ color: '#666' }}>{charge.memo}</td>
                  <td>{charge.pmIssueSpec}</td>
                  <td>{charge.approvalStatus}</td>
                  <td>{charge.refPoint}</td>
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

export default ViewFinanceCharges;
