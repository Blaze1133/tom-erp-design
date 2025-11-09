import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CommitOrders = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [expandedSections, setExpandedSections] = useState({
    primary: true,
    range: true,
    processing: true
  });

  // Form state
  const [formData, setFormData] = useState({
    subsidiary: '',
    location: '',
    item: '',
    customer: '',
    orderNo: '',
    transactionType: '',
    commitCriteria: '',
    orderPriorityFrom: '',
    orderPriorityTo: '',
    transactionDateFrom: '',
    transactionDateTo: '',
    expectedShipDateFrom: '',
    expectedShipDateTo: '',
    sortBy: 'Transaction Date',
    thenBy: 'Commit',
    thenBy2: 'Commit',
    sortOrder1: true,
    sortOrder2: true,
    sortOrder3: true,
    setOrderLineToFirm: false,
    selectAllOrders: false,
    reallocateOpenQuantities: false
  });

  const [orders, setOrders] = useState([]);

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];

  const commitCriteriaOptions = [
    'SELECT ALL ORDERS',
    'REALLOCATE OPEN QUANTITIES',
    'Available Qty',
    'Complete Qty',
    'Do Not Commit'
  ];

  const transactionTypes = [
    'Sales Order',
    'Transfer Order',
    'Work Order'
  ];

  const sortByOptions = [
    'Transaction Date',
    'Location',
    'Order No.',
    'Order Priority',
    'Order Quantity',
    'Quantity Committed',
    'Quantity Fulfilled',
    'Transaction Type'
  ];

  const thenByOptions = [
    'Commit',
    'Customer',
    'Expected Ship Date',
    'Item',
    'Location',
    'Order No.',
    'Order Priority',
    'Order Quantity'
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleMarkAll = () => {
    showToast('All orders marked', 'success');
  };

  const handleUnmarkAll = () => {
    showToast('All orders unmarked', 'info');
  };

  const handleCustomize = () => {
    showToast('Customize view', 'info');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-clipboard-check" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Commit Orders</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={handleMarkAll}>
            Mark All
          </button>
          <button className="btn btn-secondary" onClick={handleUnmarkAll}>
            Unmark All
          </button>
          <button className="btn btn-tertiary">
            <i className="fas fa-ellipsis-h"></i>
            More
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Options and Criteria */}
        <div className="form-section">
          <div 
            className="section-title" 
            onClick={() => toggleSection('primary')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div>
              <i className={`fas fa-chevron-${expandedSections.primary ? 'down' : 'right'}`} style={{ marginRight: '10px' }}></i>
              <i className="fas fa-info-circle" style={{ marginRight: '10px' }}></i>
              Primary Options and Criteria
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          {expandedSections.primary && (
            <div className="form-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              <div className="form-group">
                <label className="form-label">SUBSIDIARY <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.subsidiary}
                  onChange={(e) => handleInputChange('subsidiary', e.target.value)}
                >
                  <option value="">Select...</option>
                  {subsidiaries.map((sub, index) => (
                    <option key={index} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">CUSTOMER</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="<Type then tab>"
                    value={formData.customer}
                    onChange={(e) => handleInputChange('customer', e.target.value)}
                  />
                  <i className="fas fa-times" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#999' }}></i>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">COMMIT CRITERIA</label>
                <select 
                  className="form-control"
                  value={formData.commitCriteria}
                  onChange={(e) => handleInputChange('commitCriteria', e.target.value)}
                >
                  <option value="">Select...</option>
                  {commitCriteriaOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">LOCATION</label>
                <select 
                  className="form-control"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                >
                  <option value="">Select...</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">ORDER NO.</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.orderNo}
                  onChange={(e) => handleInputChange('orderNo', e.target.value)}
                />
              </div>

              <div className="form-group"></div>

              <div className="form-group">
                <label className="form-label">ITEM</label>
                <select 
                  className="form-control"
                  value={formData.item}
                  onChange={(e) => handleInputChange('item', e.target.value)}
                >
                  <option value="">Select...</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">TRANSACTION TYPE</label>
                <select 
                  className="form-control"
                  value={formData.transactionType}
                  onChange={(e) => handleInputChange('transactionType', e.target.value)}
                >
                  <option value="">Select...</option>
                  {transactionTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="form-group" style={{ gridColumn: '1 / -1', display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input 
                    type="checkbox"
                    checked={formData.selectAllOrders}
                    onChange={(e) => handleInputChange('selectAllOrders', e.target.checked)}
                    style={{ marginRight: '8px' }}
                  />
                  <span className="form-label" style={{ margin: 0 }}>SELECT ALL ORDERS</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input 
                    type="checkbox"
                    checked={formData.reallocateOpenQuantities}
                    onChange={(e) => handleInputChange('reallocateOpenQuantities', e.target.checked)}
                    style={{ marginRight: '8px' }}
                  />
                  <span className="form-label" style={{ margin: 0 }}>REALLOCATE OPEN QUANTITIES</span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Range and Sorting Criteria */}
        <div className="form-section">
          <div 
            className="section-title" 
            onClick={() => toggleSection('range')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div>
              <i className={`fas fa-chevron-${expandedSections.range ? 'down' : 'right'}`} style={{ marginRight: '10px' }}></i>
              <i className="fas fa-filter" style={{ marginRight: '10px' }}></i>
              Range and Sorting Criteria
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          {expandedSections.range && (
            <div className="form-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              <div className="form-group">
                <label className="form-label">ORDER PRIORITY FROM</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.orderPriorityFrom}
                  onChange={(e) => handleInputChange('orderPriorityFrom', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">ORDER PRIORITY TO</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.orderPriorityTo}
                  onChange={(e) => handleInputChange('orderPriorityTo', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">SORT BY</label>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <select 
                    className="form-control"
                    value={formData.sortBy}
                    onChange={(e) => handleInputChange('sortBy', e.target.value)}
                    style={{ flex: 1 }}
                  >
                    {sortByOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', whiteSpace: 'nowrap', margin: 0 }}>
                    <input 
                      type="checkbox"
                      checked={formData.sortOrder1}
                      onChange={(e) => handleInputChange('sortOrder1', e.target.checked)}
                      style={{ marginRight: '4px' }}
                    />
                    <span style={{ fontSize: '12px' }}>DESCENDING</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">TRANSACTION DATE FROM</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.transactionDateFrom}
                  onChange={(e) => handleInputChange('transactionDateFrom', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">TRANSACTION DATE TO</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.transactionDateTo}
                  onChange={(e) => handleInputChange('transactionDateTo', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">THEN BY</label>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <select 
                    className="form-control"
                    value={formData.thenBy}
                    onChange={(e) => handleInputChange('thenBy', e.target.value)}
                    style={{ flex: 1 }}
                  >
                    {thenByOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', whiteSpace: 'nowrap', margin: 0 }}>
                    <input 
                      type="checkbox"
                      checked={formData.sortOrder2}
                      onChange={(e) => handleInputChange('sortOrder2', e.target.checked)}
                      style={{ marginRight: '4px' }}
                    />
                    <span style={{ fontSize: '12px' }}>DESCENDING</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">EXPECTED SHIP DATE FROM</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.expectedShipDateFrom}
                  onChange={(e) => handleInputChange('expectedShipDateFrom', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">EXPECTED SHIP DATE TO</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.expectedShipDateTo}
                  onChange={(e) => handleInputChange('expectedShipDateTo', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">THEN BY</label>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <select 
                    className="form-control"
                    value={formData.thenBy2}
                    onChange={(e) => handleInputChange('thenBy2', e.target.value)}
                    style={{ flex: 1 }}
                  >
                    {thenByOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', whiteSpace: 'nowrap', margin: 0 }}>
                    <input 
                      type="checkbox"
                      checked={formData.sortOrder3}
                      onChange={(e) => handleInputChange('sortOrder3', e.target.checked)}
                      style={{ marginRight: '4px' }}
                    />
                    <span style={{ fontSize: '12px' }}>DESCENDING</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Processing Options */}
        <div className="form-section">
          <div 
            className="section-title" 
            onClick={() => toggleSection('processing')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div>
              <i className={`fas fa-chevron-${expandedSections.processing ? 'down' : 'right'}`} style={{ marginRight: '10px' }}></i>
              <i className="fas fa-cog" style={{ marginRight: '10px' }}></i>
              Processing Options
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          {expandedSections.processing && (
            <div className="form-grid">
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input 
                    type="checkbox"
                    checked={formData.setOrderLineToFirm}
                    onChange={(e) => handleInputChange('setOrderLineToFirm', e.target.checked)}
                    style={{ marginRight: '8px' }}
                  />
                  <span className="form-label" style={{ margin: 0 }}>SET ORDER LINE TO FIRM</span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Orders Table */}
        <div className="form-section" style={{ marginTop: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <button className="btn btn-tertiary" onClick={handleCustomize}>
              Customize
            </button>
          </div>
          
          <div className="items-table-container" style={{ overflowX: 'auto' }}>
            <table className="items-table">
              <thead>
                <tr>
                  <th style={{ width: '50px' }}>
                    <input type="checkbox" />
                  </th>
                  <th>SELECT</th>
                  <th>ITEM</th>
                  <th>CUSTOMER</th>
                  <th>TRANSACTION TYPE</th>
                  <th>ORDER NO.</th>
                  <th>TRANSACTION DATE</th>
                  <th>QUANTITY IN TRANSACTION UNITS</th>
                  <th>ORDER QUANTITY</th>
                  <th>QUANTITY COMMITTED</th>
                  <th>QUANTITY FULFILLED</th>
                  <th>ORDER PRIORITY</th>
                  <th>EXPECTED SHIP DATE</th>
                  <th>COMMIT</th>
                  <th>SPECIAL ORDER</th>
                  <th>ASSEMBLY</th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan="16" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                      No records to show.
                    </td>
                  </tr>
                ) : (
                  orders.map((order, index) => (
                    <tr key={index}>
                      <td><input type="checkbox" /></td>
                      <td>{order.select}</td>
                      <td>{order.item}</td>
                      <td>{order.customer}</td>
                      <td>{order.transactionType}</td>
                      <td>{order.orderNo}</td>
                      <td>{order.transactionDate}</td>
                      <td>{order.quantityInUnits}</td>
                      <td>{order.orderQuantity}</td>
                      <td>{order.quantityCommitted}</td>
                      <td>{order.quantityFulfilled}</td>
                      <td>{order.orderPriority}</td>
                      <td>{order.expectedShipDate}</td>
                      <td>{order.commit}</td>
                      <td>{order.specialOrder}</td>
                      <td>{order.assembly}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="footer-actions">
          <button className="btn btn-secondary">
            Mark All
          </button>
          <button className="btn btn-secondary">
            Unmark All
          </button>
        </div>
      </div>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: '', type: 'success' })}
        />
      )}
    </div>
  );
};

export default CommitOrders;
