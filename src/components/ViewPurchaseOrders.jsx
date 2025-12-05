import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewPurchaseOrders = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');

  const [purchaseOrders] = useState([
    {
      id: 1,
      date: '15/01/2024',
      documentNumber: 'PO-2024-001',
      vendor: 'Pacific Marine Supplies',
      name: 'Pacific Marine Supplies',
      memo: 'Marine Equipment Purchase',
      item: 'Hydraulic Pumps',
      itemQty: 10,
      itemUnitPrice: 850.00,
      amount: 8500.00
    },
    {
      id: 2,
      date: '15/01/2024',
      documentNumber: 'PO-2024-001',
      vendor: 'Pacific Marine Supplies',
      name: 'Default Tax Agency SG',
      memo: 'VAT',
      item: 'GST 9%',
      itemQty: 1,
      itemUnitPrice: 765.00,
      amount: 765.00
    },
    {
      id: 3,
      date: '22/01/2024',
      documentNumber: 'PO-2024-002',
      vendor: 'Oceanic Engineering Supplies',
      name: 'Oceanic Engineering Supplies',
      memo: 'Offshore Platform Components',
      item: 'Steel Beams Grade A',
      itemQty: 25,
      itemUnitPrice: 420.00,
      amount: 10500.00
    },
    {
      id: 4,
      date: '05/02/2024',
      documentNumber: 'PO-2024-003',
      vendor: 'Marine Construction Materials',
      name: 'Marine Construction Materials',
      memo: 'Fabrication Materials',
      item: 'Welding Equipment',
      itemQty: 5,
      itemUnitPrice: 1200.00,
      amount: 6000.00
    },
    {
      id: 5,
      date: '18/02/2024',
      documentNumber: 'PO-2024-004',
      vendor: 'Tech MEP Suppliers',
      name: 'Tech MEP Suppliers',
      memo: 'HVAC Components',
      item: 'Air Conditioning Units',
      itemQty: 8,
      itemUnitPrice: 2500.00,
      amount: 20000.00
    },
    {
      id: 6,
      date: '28/02/2024',
      documentNumber: 'PO-2024-005',
      vendor: 'Singapore Shipyard Supplies',
      name: 'Singapore Shipyard Supplies',
      memo: 'Hull Repair Materials',
      item: 'Marine Paint 20L',
      itemQty: 50,
      itemUnitPrice: 180.00,
      amount: 9000.00
    },
    {
      id: 7,
      date: '10/03/2024',
      documentNumber: 'PO-2024-006',
      vendor: 'Asia Marine Solutions',
      name: 'Asia Marine Solutions',
      memo: 'Piping Materials',
      item: 'Stainless Steel Pipes',
      itemQty: 100,
      itemUnitPrice: 95.00,
      amount: 9500.00
    },
    {
      id: 8,
      date: '25/03/2024',
      documentNumber: 'PO-2024-007',
      vendor: 'Global Offshore Supplies',
      name: 'Global Offshore Supplies',
      memo: 'Structural Steel Supply',
      item: 'I-Beams 12m',
      itemQty: 30,
      itemUnitPrice: 650.00,
      amount: 19500.00
    },
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = (order) => {
    if (setCurrentPage) {
      setCurrentPage('enter-purchase-orders');
    }
  };

  const handleView = (order) => {
    if (setCurrentPage) {
      setCurrentPage('view-purchase-order-detail');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-file-invoice"></i>
          <h1>Purchase Orders</h1>
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
            <option value="all">Search Project</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="received">Received</option>
          </select>
          <button className="btn-edit-view">Edit View</button>
        </div>
        <button className="btn-new-enquiry" onClick={() => setCurrentPage && setCurrentPage('enter-purchase-orders')}>
          <i className="fas fa-plus"></i>
          New Transaction
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
            <option>Vendor</option>
            <option>Amount</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {purchaseOrders.length}
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
            {purchaseOrders.map((order) => (
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
                      onClick={() => handleView(order)}
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
                <td className="amount">{typeof order.itemUnitPrice === 'number' ? order.itemUnitPrice.toFixed(2) : order.itemUnitPrice}</td>
                <td className="amount">{order.amount.toFixed(2)}</td>
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

export default ViewPurchaseOrders;
