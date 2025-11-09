import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewFulfillOrders = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');
  const [customer, setCustomer] = useState('');
  const [bulkFulfillLocation, setBulkFulfillLocation] = useState('');
  const [postingPeriod, setPostingPeriod] = useState('Nov 2025');
  const [date, setDate] = useState('8/11/2025');
  const [transactionType, setTransactionType] = useState('');
  const [filterBy, setFilterBy] = useState('Some Items Committed');
  const [shipVia, setShipVia] = useState('Default From Order');

  const [orders] = useState([
    {
      id: 1,
      fulfill: true,
      process: 'Fulfill',
      transactionType: 'Sales Order',
      date: '2/12/2020',
      orderNo: 'S2100065',
      customerProject: '21-0162 Mos Engineering Pte Ltd : Piping Modification Works',
      memo: 'Project No : 21-0162',
      currency: 'SGD'
    },
    {
      id: 2,
      fulfill: true,
      process: 'Fulfill',
      transactionType: 'Sales Order',
      date: '18/8/2020',
      orderNo: 'S2100089',
      customerProject: 'TOM21-00015 Acmes-Kings Corporation Pte Ltd : 22-0002-Frame Fabrication and Installation work in Singapore',
      memo: 'Project Name : MSC MESSINA',
      currency: 'SGD'
    },
    {
      id: 3,
      fulfill: true,
      process: 'Fulfill',
      transactionType: 'Sales Order',
      date: '13/10/2021',
      orderNo: 'S2100074',
      customerProject: '21-0134 Halliburton Singapore Pte Ltd : 21-0134-Halliburton-Fabrication of H1117 Haltank skid frames',
      memo: 'Project No : 21-0134',
      currency: 'USD'
    },
    {
      id: 4,
      fulfill: true,
      process: 'Fulfill',
      transactionType: 'Sales Order',
      date: '4/11/2021',
      orderNo: 'S2100074',
      customerProject: '319-1 Halliburton Singapore Pte Ltd : Fabrication Service',
      memo: 'Project No : 21-0148',
      currency: 'SGD'
    },
    {
      id: 5,
      fulfill: true,
      process: 'Fulfill',
      transactionType: 'Sales Order',
      date: '10/11/2021',
      orderNo: 'S2100098',
      customerProject: '857-1 Skon Offshore : Piping Installation',
      memo: 'Project No : SS01C/00040 FPSO Prosperity',
      currency: 'SGD'
    },
    {
      id: 6,
      fulfill: true,
      process: 'Fulfill',
      transactionType: 'Sales Order',
      date: '3/1/2022',
      orderNo: 'S2100073',
      customerProject: '850-1 Gills Pte Ltd : Fabrication Service',
      memo: 'Project No : 21-0113',
      currency: 'SGD'
    },
    {
      id: 7,
      fulfill: true,
      process: 'Fulfill',
      transactionType: 'Sales Order',
      date: '4/1/2022',
      orderNo: 'S2100089',
      customerProject: 'P-78 Renovas : Piping Works',
      memo: 'Project No : P-78 FPSO',
      currency: 'SGD'
    },
    {
      id: 8,
      fulfill: true,
      process: 'Fulfill',
      transactionType: 'Sales Order',
      date: '4/1/2022',
      orderNo: 'S2100083',
      customerProject: '857-1 Keppel Fels Limited : Project',
      memo: 'Project No : 2021/FS01103966/00',
      currency: 'SGD'
    }
  ]);

  const customers = [
    '21-0134 Halliburton Singapore Pte Ltd : 21-0134-Halliburton-Fabrication of H1117 Haltank skid frames',
    '319-1 Halliburton Singapore Pte Ltd : Fabrication Service',
    'TOM21-00015 Acmes-Kings Corporation Pte Ltd : 22-0002-Frame Fabrication and Installation work in Singapore',
    '857-1 Keppel Fels Limited : Project',
    '21-0162 Mos Engineering Pte Ltd : Piping Modification Works',
    'TOM21-00049 Ogas Solutions Singapore Pte. Ltd. (A Seaowl Company) : 22-0013-OGAS-Project Works',
    'TOM22-00624 Petroleum Equipment And Supplies Fze : 24-0146-PES-supply of JB and Cable Glands'
  ];

  const locations = [
    '- New -',
    'Bok Seng Yard',
    'Hong Hang Shipyard',
    'Mega yard',
    'MEP MARINE CC',
    'Shipyards/Construction',
    'Singapore (TDO)'
  ];

  const filterByOptions = [
    'Some Items Committed',
    'Respect Ship Complete',
    'All Items Fully Committed',
    'Ignore Item Availability'
  ];

  const shipViaOptions = [
    'Default From Order',
    'Airborne',
    'DHL',
    'DHL - Next Day',
    'FedEX',
    'FedEx',
    'FedEx - Express',
    'FedEx - Fast'
  ];

  const transactionTypes = [
    'Sales Order',
    'Transfer Order'
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleFulfill = (orderId) => {
    const order = orders.find(o => o.id === orderId);
    if (order) {
      setCurrentPage('create-fulfill-order');
      // Store order data for the create page
      sessionStorage.setItem('fulfillOrderData', JSON.stringify(order));
    }
  };

  const handleDateClick = (orderNo) => {
    // Navigate to sales order detail view
    setCurrentPage('view-sales-order-detail');
    sessionStorage.setItem('selectedSalesOrder', orderNo);
  };

  const handleMarkAll = () => {
    showToast('All orders marked', 'info');
  };

  const handleUnmarkAll = () => {
    showToast('All orders unmarked', 'info');
  };

  const handleImportCSV = () => {
    showToast('CSV import functionality coming soon', 'info');
  };

  const handleSubmit = () => {
    const selectedOrders = orders.filter(o => o.fulfill);
    if (selectedOrders.length === 0) {
      showToast('Please select at least one order to fulfill', 'error');
      return;
    }
    showToast(`${selectedOrders.length} order(s) submitted for fulfillment`, 'success');
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-box-open"></i>
          <h1>Fulfill Orders</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">More</button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="list-controls" style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
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
          <button className="btn btn-secondary" onClick={handleImportCSV}>
            Import - CSV
          </button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="list-controls" style={{ paddingTop: '0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', width: '100%' }}>
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>CUSTOMER</label>
              <select 
                className="form-control"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
              >
                <option value="">- All -</option>
                {customers.map((cust, index) => (
                  <option key={index} value={cust}>{cust}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>POSTING PERIOD</label>
              <select 
                className="form-control"
                value={postingPeriod}
                onChange={(e) => setPostingPeriod(e.target.value)}
              >
                <option value="Nov 2025">Nov 2025</option>
                <option value="Oct 2025">Oct 2025</option>
                <option value="Sep 2025">Sep 2025</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>DATE</label>
              <input 
                type="text" 
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>TRANSACTION TYPE</label>
              <select 
                className="form-control"
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
              >
                <option value=""></option>
                {transactionTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                BULK FULFILL FROM LOCATION <span className="required">*</span>
              </label>
              <select 
                className="form-control"
                value={bulkFulfillLocation}
                onChange={(e) => setBulkFulfillLocation(e.target.value)}
              >
                <option value=""></option>
                {locations.map((loc, index) => (
                  <option key={index} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>FILTER BY</label>
              <select 
                className="form-control"
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
              >
                {filterByOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>SHIP VIA</label>
              <select 
                className="form-control"
                value={shipVia}
                onChange={(e) => setShipVia(e.target.value)}
              >
                {shipViaOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div style={{ padding: '0 1.5rem' }}>

        <div className="items-table-wrapper">
          <table className="detail-items-table">
            <thead>
              <tr>
                <th style={{ width: '40px', textAlign: 'center' }}>
                  <input type="checkbox" />
                </th>
                <th>FULFILL</th>
                <th>PROCESS</th>
                <th>TRANSACTION TYPE</th>
                <th>DATE</th>
                <th>ORDER #</th>
                <th>CUSTOMER/PROJECT NAME</th>
                <th>MEMO</th>
                <th>CURRENCY</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td style={{ textAlign: 'center' }}>
                    <input type="checkbox" checked={order.fulfill} readOnly style={{ cursor: 'pointer' }} />
                  </td>
                  <td>
                    <button 
                      className="view-link"
                      onClick={() => handleFulfill(order.id)}
                    >
                      {order.process}
                    </button>
                  </td>
                  <td>{order.transactionType}</td>
                  <td>
                    <button 
                      className="view-link"
                      onClick={() => handleDateClick(order.orderNo)}
                    >
                      {order.date}
                    </button>
                  </td>
                  <td style={{ color: 'var(--blue-accent)', fontWeight: '500' }}>
                    {order.orderNo}
                  </td>
                  <td>{order.customerProject}</td>
                  <td style={{ color: '#666' }}>{order.memo}</td>
                  <td>{order.currency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
    </div>
  );
};

export default ViewFulfillOrders;
