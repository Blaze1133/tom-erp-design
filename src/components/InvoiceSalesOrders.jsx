import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const InvoiceSalesOrders = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [selectedOrders, setSelectedOrders] = useState([]);

  const [orders] = useState([
    {
      id: 1,
      invoice: 'Invoice',
      process: 'Invoice',
      orderDate: '15/01/2024',
      orderNumber: 'SO-2024-001',
      billDate: '6/11/2025',
      customerProjectName: 'Pacific Shipping Ltd : Marine Equipment Supply - Q1 2024',
      memo: 'Project No : PSL-2024-001',
      currency: 'SGD',
      orderType: 'Invoice'
    },
    {
      id: 2,
      invoice: 'Invoice',
      process: 'Invoice',
      orderDate: '22/01/2024',
      orderNumber: 'SO-2024-002',
      billDate: '6/11/2025',
      customerProjectName: 'Oceanic Engineering Pte Ltd : Offshore Platform Parts Delivery',
      memo: 'Project No : OEP-2024-003',
      currency: 'SGD',
      orderType: 'Invoice'
    },
    {
      id: 3,
      invoice: 'Invoice',
      process: 'Invoice',
      orderDate: '05/02/2024',
      orderNumber: 'SO-2024-003',
      billDate: '6/11/2025',
      customerProjectName: 'Marine Construction Co : Fabrication Services Contract',
      memo: 'Project No : MCC-2024-007',
      currency: 'SGD',
      orderType: 'Invoice'
    },
    {
      id: 4,
      invoice: 'Invoice',
      process: 'Invoice',
      orderDate: '18/02/2024',
      orderNumber: 'SO-2024-004',
      billDate: '6/11/2025',
      customerProjectName: 'Tech Onshore MEP Prefabricators : HVAC System Installation',
      memo: 'Project No : TOM-2024-012',
      currency: 'SGD',
      orderType: 'Invoice'
    },
    {
      id: 5,
      invoice: 'Invoice',
      process: 'Invoice',
      orderDate: '28/02/2024',
      orderNumber: 'SO-2024-005',
      billDate: '6/11/2025',
      customerProjectName: 'Singapore Shipyard Services : Hull Repair and Maintenance',
      memo: 'Project No : SSS-2024-015',
      currency: 'SGD',
      orderType: 'Invoice'
    },
    {
      id: 6,
      invoice: 'Invoice',
      process: 'Invoice',
      orderDate: '10/03/2024',
      orderNumber: 'SO-2024-006',
      billDate: '6/11/2025',
      customerProjectName: 'Asia Marine Solutions : Piping Modification Works',
      memo: 'Project No : AMS-2024-018',
      currency: 'SGD',
      orderType: 'Invoice'
    },
    {
      id: 7,
      invoice: 'Invoice',
      process: 'Invoice',
      orderDate: '25/03/2024',
      orderNumber: 'SO-2024-007',
      billDate: '6/11/2025',
      customerProjectName: 'Global Offshore Engineering : Structural Steel Supply',
      memo: 'Project No : GOE-2024-021',
      currency: 'USD',
      orderType: 'Invoice'
    },
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInvoiceClick = (order) => {
    // Navigate to invoice detail page
    if (setCurrentPage) {
      setCurrentPage('invoice-detail');
    }
  };

  const handleCheckboxChange = (orderId) => {
    setSelectedOrders(prev => {
      if (prev.includes(orderId)) {
        return prev.filter(id => id !== orderId);
      } else {
        return [...prev, orderId];
      }
    });
  };

  const handleMarkAll = () => {
    setSelectedOrders(orders.map(o => o.id));
    showToast('All orders marked', 'success');
  };

  const handleUnmarkAll = () => {
    setSelectedOrders([]);
    showToast('All orders unmarked', 'success');
  };

  const handleSubmit = () => {
    if (selectedOrders.length === 0) {
      showToast('Please select at least one order', 'warning');
      return;
    }
    showToast(`Submitting ${selectedOrders.length} invoice(s)`, 'success');
  };

  return (
    <div className="enquiries-list">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Invoice Sales Orders</h1>
        </div>
        <div className="page-actions">
          <button className="btn-view-option active">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div style={{ background: 'white', padding: '2rem', margin: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginBottom: '2rem' }}>
          <button className="btn-new-transaction" onClick={handleSubmit}>
            <i className="fas fa-check"></i> Submit
          </button>
          <button className="toolbar-btn" onClick={handleMarkAll}>
            Mark All
          </button>
          <button className="toolbar-btn" onClick={handleUnmarkAll}>
            Unmark All
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem 2rem', marginBottom: '1.5rem' }}>
          <div className="detail-field">
            <label className="detail-label" style={{ fontSize: '0.75rem', fontWeight: '600', color: '#666', marginBottom: '0.5rem', display: 'block', textTransform: 'uppercase' }}>CUSTOMER</label>
            <select className="form-control" style={{ width: '100%' }}>
              <option>All</option>
              <option>Pacific Shipping Ltd</option>
              <option>Oceanic Engineering Pte Ltd</option>
            </select>
          </div>
          <div className="detail-field">
            <label className="detail-label" style={{ fontSize: '0.75rem', fontWeight: '600', color: '#666', marginBottom: '0.5rem', display: 'block', textTransform: 'uppercase' }}>A/R ACCOUNT</label>
            <select className="form-control" style={{ width: '100%' }}>
              <option>Use System Preference</option>
            </select>
          </div>
          <div className="detail-field">
            <label className="detail-label" style={{ fontSize: '0.75rem', fontWeight: '600', color: '#666', marginBottom: '0.5rem', display: 'block', textTransform: 'uppercase' }}>POSTING PERIOD</label>
            <select className="form-control" style={{ width: '100%' }}>
              <option>Nov 2025</option>
              <option>Dec 2025</option>
            </select>
          </div>
          <div className="detail-field">
            <label className="detail-label" style={{ fontSize: '0.75rem', fontWeight: '600', color: '#666', marginBottom: '0.5rem', display: 'block', textTransform: 'uppercase' }}>DATE</label>
            <input type="date" className="form-control" defaultValue="2025-11-06" style={{ width: '100%' }} />
          </div>
          <div className="detail-field">
            <label className="detail-label" style={{ fontSize: '0.75rem', fontWeight: '600', color: '#666', marginBottom: '0.5rem', display: 'block', textTransform: 'uppercase' }}>NEXT BILL ON OR BEFORE</label>
            <input type="date" className="form-control" defaultValue="2025-11-30" style={{ width: '100%' }} />
          </div>
          <div className="detail-field">
            <label className="detail-label" style={{ fontSize: '0.75rem', fontWeight: '600', color: '#666', marginBottom: '0.5rem', display: 'block', textTransform: 'uppercase' }}>TO BE PRINTED</label>
            <select className="form-control" style={{ width: '100%' }}>
              <option>Respect Customer Preference</option>
            </select>
          </div>
          <div className="detail-field">
            <label className="detail-label" style={{ fontSize: '0.75rem', fontWeight: '600', color: '#666', marginBottom: '0.5rem', display: 'block', textTransform: 'uppercase' }}>TO BE EMAILED</label>
            <select className="form-control" style={{ width: '100%' }}>
              <option>Respect Customer Preference</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '2rem', padding: '0.75rem 0', marginTop: '1rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.875rem', color: '#333' }}>
            <input type="checkbox" style={{ width: '16px', height: '16px' }} />
            Credit Card Approved
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.875rem', color: '#333' }}>
            <input type="checkbox" style={{ width: '16px', height: '16px' }} />
            Do Not Apply Grouping
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.875rem', color: '#333' }}>
            <input type="checkbox" style={{ width: '16px', height: '16px' }} />
            Include Invoices For Grouping
          </label>
        </div>
      </div>

      <div style={{ background: 'white', padding: '1rem 2rem', margin: '0 1.5rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e0e0e0' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="toolbar-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            <i className="fas fa-th"></i> Orders
          </button>
          <button className="toolbar-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            Customize
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>QUICK SORT:</label>
            <select className="form-control" style={{ minWidth: '180px', fontSize: '0.875rem' }}>
              <option>Order Date</option>
              <option>Customer Name</option>
              <option>Order Number</option>
            </select>
          </div>
          <div style={{ fontSize: '0.75rem', fontWeight: '600', color: '#666' }}>
            TOTAL: {orders.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '40px' }}></th>
              <th>INVOICE</th>
              <th>PROCESS</th>
              <th>ORDER DATE</th>
              <th>ORDER #</th>
              <th>BILL DATE</th>
              <th>CUSTOMER:PROJECT NAME</th>
              <th>MEMO</th>
              <th>CURRENCY</th>
              <th>ORDER TYPE</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>
                  <input 
                    type="checkbox" 
                    checked={selectedOrders.includes(order.id)}
                    onChange={() => handleCheckboxChange(order.id)}
                  />
                </td>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleInvoiceClick(order)}
                  >
                    {order.invoice}
                  </button>
                </td>
                <td>{order.process}</td>
                <td>{order.orderDate}</td>
                <td className="doc-number">{order.orderNumber}</td>
                <td>{order.billDate}</td>
                <td>{order.customerProjectName}</td>
                <td>{order.memo}</td>
                <td>{order.currency}</td>
                <td>{order.orderType}</td>
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

export default InvoiceSalesOrders;
