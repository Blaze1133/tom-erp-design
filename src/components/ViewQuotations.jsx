import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewQuotations = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');

  const [quotations] = useState([
    {
      id: 1,
      documentNumber: 'Q21TOM00025',
      date: '7/1/2022',
      customer: '612 Raise Pte Ltd',
      title: 'Supply of Aluminum Electrode',
      status: 'Proposal',
      probability: '50.0%',
      expiryDate: '7/1/2022',
      amount: 64.20,
      statusBadge: 'EXPIRED'
    },
    {
      id: 2,
      documentNumber: 'Q21TOM00026',
      date: '7/1/2022',
      customer: '451 Loyang Offshore Supply Base',
      title: 'Scrap Cutting Works',
      status: 'Proposal',
      probability: '60.0%',
      expiryDate: '15/2/2024',
      amount: 12749.05,
      statusBadge: 'ACTIVE'
    },
    {
      id: 3,
      documentNumber: 'Q21TOM00027',
      date: '7/1/2022',
      customer: '451 Loyang Offshore Supply Base',
      title: 'Marine Equipment Supply',
      status: 'Proposal',
      probability: '75.0%',
      expiryDate: '20/3/2024',
      amount: 8500.00,
      statusBadge: 'ACTIVE'
    },
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewQuotation = (quotation) => {
    if (setCurrentPage) {
      setCurrentPage('view-quotation-detail');
      sessionStorage.setItem('selectedQuotation', JSON.stringify(quotation));
    }
  };

  const handleEdit = (quotation) => {
    if (setCurrentPage) {
      setCurrentPage('edit-quotation');
      sessionStorage.setItem('selectedQuotation', JSON.stringify(quotation));
    }
  };

  const handleNewQuotation = () => {
    if (setCurrentPage) {
      setCurrentPage('create-quotation');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Quotations</h1>
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
            <option value="all">Search Project</option>
            <option value="active">Active Quotations</option>
            <option value="expired">Expired Quotations</option>
            <option value="pending">Pending Approval</option>
          </select>
        </div>
        <button className="btn-new-transaction" onClick={handleNewQuotation}>
          <i className="fas fa-plus"></i> New Quotation
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
            <option>7/1/2022 — 31/1/2022</option>
            <option>Date</option>
            <option>Customer Name</option>
            <option>Amount</option>
            <option>Status</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {quotations.length}
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
              <th>VENDOR</th>
              <th>NAME</th>
              <th>MEMO</th>
              <th>ITEM</th>
              <th>ITEM QTY</th>
              <th>ITEM UNIT PRICE</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {quotations.map((quotation) => (
              <tr key={quotation.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button 
                      className="view-link"
                      onClick={() => handleEdit(quotation)}
                    >
                      Edit
                    </button>
                    <span style={{ color: '#999' }}>|</span>
                    <button 
                      className="view-link"
                      onClick={() => handleViewQuotation(quotation)}
                    >
                      View
                    </button>
                  </div>
                </td>
                <td>
                  {quotation.statusBadge === 'EXPIRED' ? (
                    <span className="status-badge" style={{ background: '#f44336', color: 'white' }}>
                      {quotation.statusBadge}
                    </span>
                  ) : (
                    <span>*</span>
                  )}
                </td>
                <td>{quotation.date}</td>
                <td className="doc-number">{quotation.documentNumber}</td>
                <td>{quotation.customer}</td>
                <td>{quotation.title}</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td className="amount">{quotation.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
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

export default ViewQuotations;
