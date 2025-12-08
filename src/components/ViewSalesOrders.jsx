import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewSalesOrders = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');

  const [salesOrders] = useState([
    {
      id: 1,
      documentNumber: 'S2100067',
      date: '26/11/2020',
      vendor: '20-0131 Gimi Ms Corporation',
      name: '20-0131-Gimi-Fabrication of Cargo Tank Vapour Line (Budgetary)-W',
      memo: 'Project No : 20-0131',
      item: 'Fabrication',
      itemQty: 1,
      itemUnitPrice: 168000.00,
      amount: 168000.00,
      status: 'PENDING BILLING'
    },
    {
      id: 2,
      documentNumber: 'S2100065',
      date: '2/12/2020',
      vendor: '21-0162 Mos Engineering Pte Ltd',
      name: 'Piping Modification Works',
      memo: 'Project No : 21-0162',
      item: '-',
      itemQty: '-',
      itemUnitPrice: '-',
      amount: 18600.00,
      status: 'PENDING BILLING'
    },
    {
      id: 3,
      documentNumber: 'S2100068',
      date: '28/11/2020',
      vendor: '20-0145 Pacific Marine Services Ltd',
      name: 'Hull Repair and Maintenance',
      memo: 'Project No : 20-0145',
      item: 'Welding',
      itemQty: 5,
      itemUnitPrice: 12500.00,
      amount: 62500.00,
      status: 'PENDING BILLING'
    },
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewOrder = (order) => {
    if (setCurrentPage) {
      setCurrentPage('view-sales-order-detail');
      sessionStorage.setItem('selectedSalesOrder', JSON.stringify(order));
    }
  };

  const handleEdit = (order) => {
    if (setCurrentPage) {
      setCurrentPage('edit-sales-order');
      sessionStorage.setItem('selectedSalesOrder', JSON.stringify(order));
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-shopping-cart"></i>
          <h1>Sales Orders</h1>
        </div>
        <div className="list-actions">
          <button 
            className="btn-new-transaction"
            onClick={() => setCurrentPage && setCurrentPage('create-sales-order')}
          >
            <i className="fas fa-plus"></i>
            New
          </button>
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
            <option value="pending">Pending Billing</option>
            <option value="billed">Billed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <button className="btn-edit-view">Edit View</button>
        </div>
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
            <option>Vendor</option>
            <option>Amount</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {salesOrders.length}
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
            {salesOrders.map((order) => (
              <tr key={order.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button 
                      className="view-link"
                      onClick={() => handleEdit(order)}
                    >
                      Edit
                    </button>
                    <span style={{ color: '#999' }}>|</span>
                    <button 
                      className="view-link"
                      onClick={() => handleViewOrder(order)}
                    >
                      View
                    </button>
                  </div>
                </td>
                <td>*</td>
                <td>{order.date}</td>
                <td className="doc-number">{order.documentNumber}</td>
                <td>{order.vendor}</td>
                <td>{order.name}</td>
                <td>{order.memo}</td>
                <td>{order.item}</td>
                <td>{order.itemQty}</td>
                <td className="amount">{typeof order.itemUnitPrice === 'number' ? order.itemUnitPrice.toLocaleString('en-US', { minimumFractionDigits: 2 }) : order.itemUnitPrice}</td>
                <td className="amount">{order.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
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

export default ViewSalesOrders;
