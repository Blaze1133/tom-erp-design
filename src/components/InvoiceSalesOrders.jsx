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
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-file-invoice"></i>
          <h1>Invoice Sales Orders</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">More</button>
        </div>
      </div>

      <div style={{ padding: '20px', background: 'white', marginBottom: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '25px' }}>
          <button className="btn btn-primary" onClick={handleSubmit}>
            <i className="fas fa-check"></i>
            Submit
          </button>
          <button className="btn btn-secondary" onClick={handleMarkAll}>
            Mark All
          </button>
          <button className="btn btn-secondary" onClick={handleUnmarkAll}>
            Unmark All
          </button>
        </div>

        <div className="form-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          <div className="form-group">
            <label className="form-label">Customer</label>
            <select className="form-control">
              <option>All</option>
              <option>20-0131 Gimi Ms Corporation</option>
              <option>21-0139 Best Fit Engineering</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">A/R Account</label>
            <select className="form-control">
              <option>Use System Preference</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Posting Period</label>
            <select className="form-control">
              <option>Nov 2025</option>
              <option>Dec 2025</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Date</label>
            <input type="date" className="form-control" defaultValue="2025-11-06" />
          </div>
          <div className="form-group">
            <label className="form-label">Next Bill On Or Before</label>
            <input type="date" className="form-control" defaultValue="2025-11-30" />
          </div>
          <div className="form-group">
            <label className="form-label">To Be Printed</label>
            <select className="form-control">
              <option>Respect Customer Preference</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">To Be Emailed</label>
            <select className="form-control">
              <option>Respect Customer Preference</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '30px', marginTop: '20px', padding: '15px', background: '#f8f9fa', borderRadius: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="checkbox" id="creditCard" style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
            <label htmlFor="creditCard" style={{ margin: 0, cursor: 'pointer', fontSize: '0.875rem' }}>Credit Card Approved</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="checkbox" id="noGrouping" style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
            <label htmlFor="noGrouping" style={{ margin: 0, cursor: 'pointer', fontSize: '0.875rem' }}>Do Not Apply Grouping</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="checkbox" id="includeInvoices" style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
            <label htmlFor="includeInvoices" style={{ margin: 0, cursor: 'pointer', fontSize: '0.875rem' }}>Include Invoices For Grouping</label>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px', background: 'white', borderRadius: '8px' }}>
        <div style={{ marginBottom: '15px', display: 'flex', gap: '10px', borderBottom: '2px solid #e0e0e0', paddingBottom: '10px' }}>
          <button className="tab-btn active" style={{ padding: '8px 16px', background: '#f0f0f0', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '500' }}>
            Orders
          </button>
          <button className="tab-btn" style={{ padding: '8px 16px', background: 'transparent', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Set Fields
          </button>
          <button className="btn-customize" style={{ marginLeft: 'auto' }}>
            Customize
          </button>
        </div>

        <div className="enquiries-table-container">
          <table className="enquiries-table">
            <thead>
              <tr>
                <th></th>
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

        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
          <button className="btn btn-secondary" onClick={handleMarkAll}>
            Mark All
          </button>
          <button className="btn btn-secondary" onClick={handleUnmarkAll}>
            Unmark All
          </button>
        </div>
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
