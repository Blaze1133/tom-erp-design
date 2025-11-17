import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCashSales = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');

  const [cashSales] = useState([]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = (cashSale) => {
    if (setCurrentPage) {
      setCurrentPage('edit-cash-sale');
    }
  };

  const handleView = (cashSale) => {
    if (setCurrentPage) {
      setCurrentPage('view-cash-sale-detail');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-cash-register"></i>
          <h1>Cash Sales</h1>
        </div>
        <div className="list-actions">
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
            <option value="all">All Cash Sales</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          <button className="btn-edit-view">Edit View</button>
        </div>
        <button className="btn-new-enquiry" onClick={() => setCurrentPage && setCurrentPage('enter-cash-sales')}>
          <i className="fas fa-plus"></i>
          New Cash Sale
        </button>
      </div>

      <div className="list-filters">
        <button className="filter-btn">
          <i className="fas fa-filter"></i>
          FILTERS
        </button>
        <div className="list-toolbar">
          <button className="toolbar-btn" title="Export to Excel">
            <i className="fas fa-file-excel"></i>
          </button>
          <button className="toolbar-btn" title="Export to PDF">
            <i className="fas fa-file-pdf"></i>
          </button>
          <button className="toolbar-btn" title="Print">
            <i className="fas fa-print"></i>
          </button>
          <button className="toolbar-btn">EDIT</button>
        </div>
        <div className="list-sort">
          <label>QUICK SORT:</label>
          <select className="form-control">
            <option>Date</option>
            <option>Document Number</option>
            <option>Customer</option>
            <option>Amount</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {cashSales.length}
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th></th>
              <th>EDIT | VIEW</th>
              <th>*</th>
              <th>DATE ▲</th>
              <th>DOCUMENT NUMBER</th>
              <th>CUSTOMER</th>
              <th>NAME</th>
              <th>ACCOUNT</th>
              <th>MEMO</th>
              <th>ITEM</th>
              <th>ITEM QTY</th>
              <th>ITEM UNIT PRICE</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {cashSales.map((cashSale) => (
              <tr key={cashSale.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button 
                      className="view-link"
                      onClick={() => handleEdit(cashSale)}
                    >
                      Edit
                    </button>
                    <span style={{ color: '#999' }}>|</span>
                    <button 
                      className="view-link"
                      onClick={() => handleView(cashSale)}
                    >
                      View
                    </button>
                  </div>
                </td>
                <td>*</td>
                <td>{cashSale.date}</td>
                <td className="doc-number">{cashSale.documentNumber}</td>
                <td>{cashSale.customer}</td>
                <td>{cashSale.name}</td>
                <td>{cashSale.account}</td>
                <td>{cashSale.memo}</td>
                <td>{cashSale.item}</td>
                <td>{cashSale.itemQty}</td>
                <td className="amount">{cashSale.itemUnitPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                <td className="amount">{cashSale.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
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

export default ViewCashSales;
