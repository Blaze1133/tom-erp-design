import React, { useState } from 'react';
import Toast from './Toast';

const ReceiveOrders = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [vendor, setVendor] = useState('all');
  const [postingPeriod, setPostingPeriod] = useState('Nov 2025');
  const [date] = useState('6/11/2025');

  const [orders] = useState([
    {
      id: 1,
      transactionType: 'Purchase Order',
      itemFulfillment: 'Partial',
      itemFulfillmentDate: '7/1/2022',
      itemFulfillmentNumber: 'IF-2022-001',
      packageTrackingNumber: 'PKG-8821-SG',
      dateA: '8/1/2022',
      poNumber: 'POTOM00141',
      vendorName: 'LOH & SONS PAINT CO.',
      billTo: 'Natural Cool Holdings, Singapore',
      memo: 'Marine Paint',
      orderTotal: 410.88,
      currency: 'SGD'
    },
    {
      id: 2,
      transactionType: 'Purchase Order',
      itemFulfillment: 'Pending',
      itemFulfillmentDate: '',
      itemFulfillmentNumber: '',
      packageTrackingNumber: 'PKG-9012-SG',
      dateA: '10/1/2022',
      poNumber: 'POTOM00145',
      vendorName: 'EASTERN SEALAND SUPPLY',
      billTo: '17 Tuas South St 5',
      memo: 'TOM-PO-2133',
      orderTotal: 23.11,
      currency: 'SGD'
    },
    {
      id: 3,
      transactionType: 'Purchase Order',
      itemFulfillment: 'Pending',
      itemFulfillmentDate: '',
      itemFulfillmentNumber: '',
      packageTrackingNumber: 'PKG-9013-SG',
      dateA: '10/1/2022',
      poNumber: 'POTOM00147',
      vendorName: 'EASTERN SEALAND SUPPLY',
      billTo: '17 Tuas South St 5',
      memo: 'TOM-PO-2765',
      orderTotal: 642.00,
      currency: 'SGD'
    },
    {
      id: 4,
      transactionType: 'Purchase Order',
      itemFulfillment: 'Pending',
      itemFulfillmentDate: '',
      itemFulfillmentNumber: '',
      packageTrackingNumber: 'PKG-9014-SG',
      dateA: '10/1/2022',
      poNumber: 'POTOM00146',
      vendorName: 'EASTERN SEALAND SUPPLY',
      billTo: '17 Tuas South St 5',
      memo: 'TOM-PO-2765',
      orderTotal: 642.00,
      currency: 'SGD'
    },
    {
      id: 5,
      transactionType: 'Purchase Order',
      itemFulfillment: 'Pending',
      itemFulfillmentDate: '',
      itemFulfillmentNumber: '',
      packageTrackingNumber: 'PKG-9015-SG',
      dateA: '11/1/2022',
      poNumber: 'POTOM00187',
      vendorName: 'HOE HUAT HARDWARE',
      billTo: '25 Pioneer Road',
      memo: 'PR-221TOM00138',
      orderTotal: 807.42,
      currency: 'SGD'
    },
    {
      id: 6,
      transactionType: 'Purchase Order',
      itemFulfillment: 'Complete',
      itemFulfillmentDate: '12/1/2022',
      itemFulfillmentNumber: 'IF-2022-002',
      packageTrackingNumber: 'PKG-9016-SG',
      dateA: '13/1/2022',
      poNumber: 'POTOM00207',
      vendorName: 'DANCON PTE LTD',
      billTo: '18 Boon Lay Way',
      memo: 'Electrical',
      orderTotal: 636.13,
      currency: 'SGD'
    },
    {
      id: 7,
      transactionType: 'Purchase Order',
      itemFulfillment: 'Pending',
      itemFulfillmentDate: '',
      itemFulfillmentNumber: '',
      packageTrackingNumber: 'PKG-9017-SG',
      dateA: '15/1/2022',
      poNumber: 'POTOM00220',
      vendorName: 'SIN JIN HARDWARE',
      billTo: '5 Tanjong Ketong Rd',
      memo: 'Hardware',
      orderTotal: 4900.00,
      currency: 'SGD'
    },
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleReceive = (order) => {
    // Navigate to item receipt page
    setCurrentPage('item-receipt');
    showToast(`Opening receipt for ${order.poNumber}`, 'info');
  };

  const handleSubmit = () => {
    showToast('Orders submitted successfully!', 'success');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-box-open" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Receive Orders</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary">
            More
          </button>
        </div>
      </div>

      <div className="quotation-container">
        <div style={{ marginBottom: '25px', display: 'flex', gap: '10px' }}>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
          <button className="btn btn-secondary">
            Mark All
          </button>
          <button className="btn btn-secondary">
            Unmark All
          </button>
        </div>

        <div className="form-section" style={{ padding: '20px', background: '#f8f9fa', borderRadius: '8px', marginBottom: '25px' }}>
          <div className="form-grid" style={{ marginBottom: '0' }}>
            <div className="form-group">
              <label className="form-label required">Vendor</label>
              <select 
                className="form-control"
                value={vendor}
                onChange={(e) => setVendor(e.target.value)}
              >
                <option value="all">- All -</option>
                <option>LOH & SONS PAINT CO. (S) PTE. LTD</option>
                <option>EASTERN SEALAND SUPPLY PTE LTD</option>
                <option>HOE HUAT</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Date</label>
              <input 
                type="text" 
                className="form-control"
                value={date}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">Posting Period</label>
              <select 
                className="form-control"
                value={postingPeriod}
                onChange={(e) => setPostingPeriod(e.target.value)}
              >
                <option>Nov 2025</option>
                <option>Dec 2025</option>
                <option>Jan 2026</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button className="btn btn-secondary">
              Customize
            </button>
            <span style={{ color: '#666', fontSize: '14px' }}>1 to 200 of 3016</span>
          </div>

          <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="detail-items-table" style={{ minWidth: '100%', fontSize: '14px' }}>
              <thead>
                <tr>
                  <th style={{ width: '50px', padding: '10px 8px' }}>RECEIVE</th>
                  <th style={{ width: '90px', padding: '10px 8px' }}>PROCESS</th>
                  <th style={{ width: '140px', padding: '10px 8px' }}>TYPE</th>
                  <th style={{ width: '100px', padding: '10px 8px' }}>STATUS</th>
                  <th style={{ width: '110px', padding: '10px 8px' }}>TRACKING #</th>
                  <th style={{ width: '90px', padding: '10px 8px' }}>DATE ▲</th>
                  <th style={{ width: '120px', padding: '10px 8px' }}>PO #</th>
                  <th style={{ width: '180px', padding: '10px 8px' }}>VENDOR</th>
                  <th style={{ width: '180px', padding: '10px 8px' }}>BILL TO</th>
                  <th style={{ width: '130px', padding: '10px 8px' }}>MEMO</th>
                  <th style={{ width: '100px', padding: '10px 8px' }}>TOTAL</th>
                  <th style={{ width: '70px', padding: '10px 8px' }}>CURR</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td style={{ textAlign: 'center', padding: '8px' }}>
                      <input type="checkbox" />
                    </td>
                    <td style={{ padding: '8px' }}>
                      <button 
                        className="view-link"
                        onClick={() => handleReceive(order)}
                        style={{ color: '#4a90e2', cursor: 'pointer', border: 'none', background: 'none', textDecoration: 'underline', fontWeight: '500' }}
                      >
                        Receive
                      </button>
                    </td>
                    <td style={{ padding: '8px' }}>{order.transactionType}</td>
                    <td style={{ padding: '8px' }}>
                      <span style={{ 
                        padding: '3px 6px', 
                        borderRadius: '3px', 
                        fontSize: '11px',
                        background: order.itemFulfillment === 'Complete' ? '#d4edda' : order.itemFulfillment === 'Partial' ? '#fff3cd' : '#f8f9fa',
                        color: order.itemFulfillment === 'Complete' ? '#155724' : order.itemFulfillment === 'Partial' ? '#856404' : '#6c757d',
                        whiteSpace: 'nowrap'
                      }}>
                        {order.itemFulfillment}
                      </span>
                    </td>
                    <td style={{ fontSize: '13px', padding: '8px' }}>{order.packageTrackingNumber}</td>
                    <td style={{ padding: '8px' }}>{order.dateA}</td>
                    <td style={{ fontWeight: '500', color: '#4a90e2', padding: '8px' }}>{order.poNumber}</td>
                    <td style={{ padding: '8px' }}>{order.vendorName}</td>
                    <td style={{ fontSize: '13px', color: '#666', padding: '8px' }}>{order.billTo}</td>
                    <td style={{ fontSize: '13px', padding: '8px' }}>{order.memo}</td>
                    <td className="amount" style={{ fontWeight: '600', padding: '8px' }}>{order.orderTotal.toFixed(2)}</td>
                    <td style={{ padding: '8px' }}>{order.currency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

export default ReceiveOrders;
