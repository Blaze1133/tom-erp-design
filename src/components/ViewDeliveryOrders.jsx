import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewDeliveryOrders = ({ setCurrentPage, onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('All Delivery Orders');
  const [selectedOrders, setSelectedOrders] = useState([]);

  // Sample delivery orders data
  const [deliveryOrders] = useState([
    {
      id: 1,
      transactionNumber: 'DO-000123',
      customer: 'ACME Corporation',
      date: '02/15/2024',
      shipDate: '02/15/2024',
      status: 'Picked',
      createdFrom: 'SO-2024-001',
      location: 'Main Warehouse',
      trackingNumber: '1234567890',
      carrier: 'DHL'
    },
    {
      id: 2,
      transactionNumber: 'DO-000124',
      customer: 'TECH ONSHORE MEP-PREFABRICATORS PTE LTD',
      date: '02/16/2024',
      shipDate: '02/16/2024',
      status: 'Packed',
      createdFrom: 'SO-2024-002',
      location: 'Singapore (MEP)',
      trackingNumber: '9876543210',
      carrier: 'FedEx'
    },
    {
      id: 3,
      transactionNumber: 'DO-000125',
      customer: 'Global Industries Ltd',
      date: '02/17/2024',
      shipDate: '02/17/2024',
      status: 'Shipped',
      createdFrom: 'SO-2024-003',
      location: 'TOM-11',
      trackingNumber: '5555666677',
      carrier: 'Local Courier'
    },
    {
      id: 4,
      transactionNumber: 'DO-000126',
      customer: 'Marine Solutions Inc',
      date: '02/18/2024',
      shipDate: '02/18/2024',
      status: 'Picked',
      createdFrom: 'SO-2024-004',
      location: 'Mega yard',
      trackingNumber: '1122334455',
      carrier: 'DHL'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleNewDeliveryOrder = () => {
    if (onNewClick) {
      onNewClick();
    } else if (setCurrentPage) {
      setCurrentPage('create-delivery-order');
    }
  };

  const handleViewDetail = (order) => {
    if (onViewClick) {
      onViewClick(order);
    } else if (setCurrentPage) {
      setCurrentPage('view-delivery-order-detail');
    }
  };

  const handleEdit = (order) => {
    if (onEditClick) {
      onEditClick(order);
    } else if (setCurrentPage) {
      setCurrentPage('edit-delivery-order');
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Picked':
        return '#fff3e0'; // Light orange background
      case 'Packed':
        return '#e3f2fd'; // Light blue background
      case 'Shipped':
        return '#e8f5e9'; // Light green background
      default:
        return '#f5f5f5';
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
            <option value="All Delivery Orders">All Delivery Orders</option>
            <option value="Picked">Picked</option>
            <option value="Packed">Packed</option>
            <option value="Shipped">Shipped</option>
          </select>
        </div>
        <button className="btn-new-transaction" onClick={handleNewDeliveryOrder}>
          <i className="fas fa-plus"></i> New Delivery Order
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
            <option>Ship Date</option>
            <option>Transaction Number</option>
            <option>Customer Name</option>
            <option>Status</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {deliveryOrders.length}
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th></th>
              <th>EDIT | VIEW</th>
              <th>TRANSACTION NUMBER</th>
              <th>CUSTOMER</th>
              <th>DATE</th>
              <th>SHIP DATE ▲</th>
              <th>STATUS</th>
              <th>CREATED FROM</th>
              <th>LOCATION</th>
              <th>TRACKING NUMBER</th>
              <th>CARRIER</th>
            </tr>
          </thead>
          <tbody>
            {deliveryOrders.map((order) => (
              <tr key={order.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEdit(order)}
                    style={{ marginRight: '4px' }}
                  >
                    Edit
                  </button>
                  <span style={{ color: '#999' }}>|</span>
                  <button 
                    className="view-link"
                    onClick={() => handleViewDetail(order)}
                    style={{ marginLeft: '4px' }}
                  >
                    View
                  </button>
                </td>
                <td className="doc-number">{order.transactionNumber}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td>{order.shipDate}</td>
                <td>
                  <span style={{ 
                    backgroundColor: getStatusColor(order.status),
                    color: '#333',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    display: 'inline-block'
                  }}>
                    {order.status}
                  </span>
                </td>
                <td className="doc-number">{order.createdFrom}</td>
                <td>{order.location}</td>
                <td>{order.trackingNumber}</td>
                <td>{order.carrier}</td>
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

export default ViewDeliveryOrders;
