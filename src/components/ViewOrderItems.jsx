import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewOrderItems = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('All Items');

  const orderItems = [
    {
      id: 1,
      itemName: 'Welding Electrodes 3.2mm',
      itemCode: 'WLD-3.2-001',
      location: 'TOM-11',
      department: 'TOM : Operating',
      vendor: 'A1 Engineering Services Pte Ltd',
      quantityOnHand: 150,
      reorderPoint: 50,
      preferredVendor: 'Yes',
      status: 'In Stock'
    },
    {
      id: 2,
      itemName: 'Steel Pipes 2 inch',
      itemCode: 'STL-2IN-002',
      location: 'Mega yard',
      department: 'TOM : Logistic',
      vendor: 'Pacific Shipping Ltd',
      quantityOnHand: 25,
      reorderPoint: 30,
      preferredVendor: 'Yes',
      status: 'Low Stock'
    },
    {
      id: 3,
      itemName: 'Safety Helmets',
      itemCode: 'SFT-HLM-003',
      location: 'Singapore(MEP)',
      department: 'TOM : Operating',
      vendor: 'Marine Solutions Co',
      quantityOnHand: 200,
      reorderPoint: 100,
      preferredVendor: 'No',
      status: 'In Stock'
    }
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (item) => {
    console.log('Viewing item:', item);
    showToast('Opening item details...', 'info');
  };

  const handleNewTransaction = () => {
    if (setCurrentPage) {
      setCurrentPage('order-items');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-shopping-cart" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Order Items</h1>
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
            <option value="All Items">All Items</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Out of Stock">Out of Stock</option>
            <option value="Preferred Vendor">Preferred Vendor</option>
          </select>
        </div>
        <button className="btn-new-transaction" onClick={handleNewTransaction}>
          <i className="fas fa-plus"></i> New Transaction
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
            <option>Item Name</option>
            <option>Item Code</option>
            <option>Location</option>
            <option>Quantity</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {orderItems.length}
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th>ITEM CODE</th>
              <th>ITEM NAME</th>
              <th>LOCATION</th>
              <th>DEPARTMENT</th>
              <th>VENDOR</th>
              <th>QTY ON HAND</th>
              <th>REORDER POINT</th>
              <th>PREFERRED VENDOR</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {orderItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <button
                    className="view-link"
                    onClick={() => handleView(item)}
                  >
                    {item.itemCode}
                  </button>
                </td>
                <td>{item.itemName}</td>
                <td>{item.location}</td>
                <td>{item.department}</td>
                <td>{item.vendor}</td>
                <td>{item.quantityOnHand}</td>
                <td>{item.reorderPoint}</td>
                <td>{item.preferredVendor}</td>
                <td>
                  <span className={`status-badge ${item.status === 'Low Stock' ? 'status-warning' : 'status-success'}`}>
                    {item.status}
                  </span>
                </td>
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

export default ViewOrderItems;
