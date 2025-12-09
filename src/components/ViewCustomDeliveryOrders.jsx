import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCustomDeliveryOrders = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');
  const [searchProject, setSearchProject] = useState('');

  const [deliveryOrders] = useState([
    {
      id: 1,
      editView: true,
      date: '7/1/2022',
      documentNumber: 'DOCTOM00002',
      vendor: '',
      name: '123456 Requisition/DO Tracking',
      account: '',
      memo: 'test do',
      item: '',
      itemQty: '',
      itemUnit: '',
      amount: 0.00
    },
    {
      id: 2,
      editView: true,
      date: '7/1/2022',
      documentNumber: 'DOCTOM00003',
      vendor: '',
      name: '123456 Requisition/DO Tracking',
      account: '',
      memo: 'testing',
      item: '',
      itemQty: '',
      itemUnit: '',
      amount: 0.00
    },
    {
      id: 3,
      editView: true,
      date: '7/1/2022',
      documentNumber: 'DOCTOM00004',
      vendor: '',
      name: '123456 Requisition/DO Tracking',
      account: '',
      memo: 'Giving machine for repair to supplier',
      item: '',
      itemQty: '',
      itemUnit: '',
      amount: 0.00
    },
    {
      id: 4,
      editView: true,
      date: '11/1/2022',
      documentNumber: 'DOCTOM00005',
      vendor: '',
      name: '123456 Requisition/DO Tracking',
      account: '',
      memo: 'For galvanizing',
      item: '',
      itemQty: '',
      itemUnit: '',
      amount: 0.00
    },
    {
      id: 5,
      editView: true,
      date: '13/1/2022',
      documentNumber: 'DOCTOM00006',
      vendor: '',
      name: '123456 Requisition/DO Tracking',
      account: '',
      memo: '',
      item: '',
      itemQty: '',
      itemUnit: '',
      amount: 0.00
    },
    {
      id: 6,
      editView: true,
      date: '13/1/2022',
      documentNumber: 'DOCTOM00007',
      vendor: '',
      name: '123456 Requisition/DO Tracking',
      account: '',
      memo: '',
      item: '',
      itemQty: '',
      itemUnit: '',
      amount: 0.00
    },
    {
      id: 7,
      editView: true,
      date: '13/1/2022',
      documentNumber: 'DOCTOM00008',
      vendor: '',
      name: '123456 Requisition/DO Tracking',
      account: '',
      memo: '',
      item: '',
      itemQty: '',
      itemUnit: '',
      amount: 0.00
    },
    {
      id: 8,
      editView: true,
      date: '17/1/2022',
      documentNumber: 'DOCTOM00009',
      vendor: '',
      name: '123456 Requisition/DO Tracking',
      account: '',
      memo: '',
      item: '',
      itemQty: '',
      itemUnit: '',
      amount: 0.00
    },
    {
      id: 9,
      editView: true,
      date: '17/1/2022',
      documentNumber: 'DOCTOM00010',
      vendor: '',
      name: '123456 Requisition/DO Tracking',
      account: '',
      memo: '',
      item: '',
      itemQty: '',
      itemUnit: '',
      amount: 0.00
    },
    {
      id: 10,
      editView: true,
      date: '17/1/2022',
      documentNumber: 'DOCTOM00011',
      vendor: '',
      name: '123456 Requisition/DO Tracking',
      account: '',
      memo: '',
      item: '',
      itemQty: '',
      itemUnit: '',
      amount: 0.00
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewDeliveryOrder = (order) => {
    if (onViewClick) {
      onViewClick(order);
    }
  };

  const handleEditDeliveryOrder = (order) => {
    if (onEditClick) {
      onEditClick(order);
    }
  };

  const handleNewDeliveryOrder = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-truck"></i>
          <h1>Delivery Orders</h1>
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
            value={searchProject}
            onChange={(e) => setSearchProject(e.target.value)}
            className="form-control"
            style={{ width: '250px' }}
          >
            <option value="">Search Project</option>
            <option value="project1">20-0052 Fortis Construction Pte. Ltd</option>
            <option value="project2">21-0149 GF-OSM-WOODLANDS</option>
            <option value="project3">22-0026 NORT-Lifting</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewDeliveryOrder}>
            <i className="fas fa-plus"></i>
            New Delivery Order
          </button>
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button className="btn-icon" title="Edit View">
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
              <option>7/1/2022 — 31/1/2022</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {deliveryOrders.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '5%' }}>EDIT | VIEW</th>
              <th style={{ width: '8%' }}>DATE</th>
              <th style={{ width: '10%' }}>DOCUMENT NUMBER</th>
              <th style={{ width: '12%' }}>VENDOR</th>
              <th style={{ width: '15%' }}>NAME</th>
              <th style={{ width: '10%' }}>ACCOUNT</th>
              <th style={{ width: '15%' }}>MEMO</th>
              <th style={{ width: '10%' }}>ITEM</th>
              <th style={{ width: '5%' }}>ITEM QTY</th>
              <th style={{ width: '5%' }}>ITEM UNIT</th>
              <th style={{ width: '5%' }}>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {deliveryOrders.map((order) => (
              <tr key={order.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditDeliveryOrder(order)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleViewDeliveryOrder(order)}
                  >
                    View
                  </button>
                </td>
                <td>{order.date}</td>
                <td className="doc-number">{order.documentNumber}</td>
                <td>{order.vendor}</td>
                <td>{order.name}</td>
                <td>{order.account}</td>
                <td>{order.memo}</td>
                <td>{order.item}</td>
                <td className="amount">{order.itemQty}</td>
                <td>{order.itemUnit}</td>
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

export default ViewCustomDeliveryOrders;
