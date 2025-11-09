import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCashRefunds = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Vendor Bills');

  const [refunds] = useState([]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleNew = () => {
    setCurrentPage('refund-cash-sale');
  };

  const handleView = (refundId) => {
    setCurrentPage('view-cash-refund-detail');
    sessionStorage.setItem('selectedCashRefund', refundId);
  };

  const handleEdit = (refundId) => {
    setCurrentPage('edit-cash-refund');
    sessionStorage.setItem('selectedCashRefund', refundId);
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-money-bill-wave"></i>
          <h1>Cash Refunds</h1>
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
            <option value="All Refunds">All Refunds</option>
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
          <button className="btn-icon" title="Delete">
            <i className="fas fa-times"></i>
          </button>
          <button className="btn-icon" title="Export">
            <i className="fas fa-file-export"></i>
          </button>
          <button className="btn-icon" title="Print">
            <i className="fas fa-print"></i>
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
            TOTAL: {refunds.length}
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
            </tr>
          </thead>
          <tbody>
            {refunds.length === 0 ? (
              <tr>
                <td colSpan="16" style={{ textAlign: 'center', padding: '3rem', color: '#999' }}>
                  No records to show.
                </td>
              </tr>
            ) : (
              refunds.map((refund) => (
                <tr key={refund.id}>
                  <td>
                    <button 
                      className="view-link"
                      onClick={() => handleEdit(refund.id)}
                    >
                      Edit
                    </button>
                    {' | '}
                    <button 
                      className="view-link"
                      onClick={() => handleView(refund.id)}
                    >
                      View
                    </button>
                  </td>
                  <td style={{ fontSize: '0.85rem' }}>{refund.orderType}</td>
                  <td style={{ fontSize: '0.85rem' }}>{refund.subsidiary}</td>
                  <td>{refund.date}</td>
                  <td>{refund.asOfDate}</td>
                  <td>{refund.period}</td>
                  <td>{refund.taxPeriod}</td>
                  <td style={{ color: 'var(--blue-accent)', fontWeight: '500' }}>
                    {refund.documentNumber}
                  </td>
                  <td>{refund.name}</td>
                  <td className="amount">{refund.amountNetOfTax}</td>
                  <td className="amount">{refund.taxTotal}</td>
                  <td className="amount">{refund.amount}</td>
                  <td style={{ fontSize: '0.85rem' }}>{refund.account}</td>
                  <td style={{ color: '#666' }}>{refund.memo}</td>
                  <td>{refund.pmIssueSpec}</td>
                  <td>{refund.approvalStatus}</td>
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

export default ViewCashRefunds;
