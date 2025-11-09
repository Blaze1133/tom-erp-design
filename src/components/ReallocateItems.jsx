import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ReallocateItems = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    item: '',
    location: '',
    quantityOnHand: 0,
    uncommitted: 0,
    quantityCommitted: 0,
    quantityRequired: 0,
    units: ''
  });

  const [orders, setOrders] = useState([
    {
      id: 1,
      selected: false,
      orderDate: '15/3/2024',
      orderNo: 'SO-2024-001',
      specialOrder: 'Yes',
      customer: 'Pacific Shipping Ltd',
      quantityOrdered: 500,
      quantityRemaining: 500,
      quantityReceived: 0,
      commit: 0,
      quantityCommitted: 0
    },
    {
      id: 2,
      selected: false,
      orderDate: '18/3/2024',
      orderNo: 'SO-2024-002',
      specialOrder: 'No',
      customer: 'Oceanic Engineering Pte Ltd',
      quantityOrdered: 300,
      quantityRemaining: 300,
      quantityReceived: 0,
      commit: 0,
      quantityCommitted: 0
    },
    {
      id: 3,
      selected: false,
      orderDate: '20/3/2024',
      orderNo: 'SO-2024-003',
      specialOrder: 'Yes',
      customer: 'Maritime Solutions Inc',
      quantityOrdered: 750,
      quantityRemaining: 750,
      quantityReceived: 0,
      commit: 0,
      quantityCommitted: 0
    },
    {
      id: 4,
      selected: false,
      orderDate: '22/3/2024',
      orderNo: 'SO-2024-004',
      specialOrder: 'No',
      customer: 'Coastal Industries Ltd',
      quantityOrdered: 200,
      quantityRemaining: 200,
      quantityReceived: 0,
      commit: 0,
      quantityCommitted: 0
    }
  ]);

  const items = [
    '12" Divider',
    '110 V Female Connector',
    'Cable Gland M20',
    'Steel Pipe 6"',
    'Valve Ball 2"',
    'Flange ANSI 150#',
    'Gasket Ring Joint',
    'Bolt M16x50',
    'Nut M16',
    'Washer M16'
  ];

  const locations = [
    'Hong Hang Shipyard',
    'Mega yard',
    'MEP MARINE CC',
    'Shipyards/Construction',
    'Singapore (MEP)',
    'TOM-11',
    'TOM External Workshop',
    'TOM-13'
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Simulate fetching item details when item is selected
    if (field === 'item' && value) {
      setFormData(prev => ({
        ...prev,
        quantityOnHand: 1500,
        uncommitted: 250,
        quantityCommitted: 1250,
        quantityRequired: 1750,
        units: 'Pcs'
      }));
    }
  };

  const handleSelectAll = (checked) => {
    setOrders(orders.map(order => ({ ...order, selected: checked })));
  };

  const handleSelectOrder = (id, checked) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, selected: checked } : order
    ));
  };

  const handleCommitChange = (id, value) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, commit: parseInt(value) || 0 } : order
    ));
  };

  const handleAutoCommit = () => {
    let remainingQty = formData.uncommitted;
    const updatedOrders = orders.map(order => {
      if (remainingQty > 0 && order.quantityRemaining > 0) {
        const commitQty = Math.min(remainingQty, order.quantityRemaining);
        remainingQty -= commitQty;
        return { ...order, commit: commitQty, selected: true };
      }
      return order;
    });
    setOrders(updatedOrders);
    showToast('Auto-commit completed successfully', 'success');
  };

  const handleMarkAll = () => {
    setOrders(orders.map(order => ({ ...order, selected: true })));
    showToast('All orders marked', 'info');
  };

  const handleUnmarkAll = () => {
    setOrders(orders.map(order => ({ ...order, selected: false })));
    showToast('All orders unmarked', 'info');
  };

  const handleSubmit = () => {
    const selectedOrders = orders.filter(order => order.selected && order.commit > 0);
    if (selectedOrders.length === 0) {
      showToast('Please select at least one order and specify commit quantity', 'error');
      return;
    }
    if (!formData.item) {
      showToast('Please select an item', 'error');
      return;
    }
    if (!formData.location) {
      showToast('Please select a location', 'error');
      return;
    }
    showToast(`Successfully reallocated ${selectedOrders.length} order(s)`, 'success');
  };

  const totalCommit = orders.reduce((sum, order) => sum + (order.commit || 0), 0);

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-exchange-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Reallocate Items</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={() => window.history.back()}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn btn-primary" onClick={handleSubmit}>
            <i className="fas fa-check"></i>
            Submit
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Item Selection Section */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-box"></i>
            Item Details
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">ITEM <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.item}
                onChange={(e) => handleInputChange('item', e.target.value)}
              >
                <option value="">Select Item</option>
                {items.map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">LOCATION <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
              >
                <option value="">Select Location</option>
                {locations.map((location, index) => (
                  <option key={index} value={location}>{location}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">QUANTITY ON HAND</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.quantityOnHand}
                readOnly
                style={{ background: '#f5f5f5' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label">UNCOMMITTED</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.uncommitted}
                readOnly
                style={{ background: '#f5f5f5' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label">QUANTITY COMMITTED</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.quantityCommitted}
                readOnly
                style={{ background: '#f5f5f5' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label">QUANTITY REQUIRED</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.quantityRequired}
                readOnly
                style={{ background: '#f5f5f5' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label">UNITS</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.units}
                readOnly
                style={{ background: '#f5f5f5' }}
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Orders Table Section */}
        <div className="form-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 className="section-title" style={{ margin: 0 }}>
              <i className="fas fa-list-alt"></i>
              Sales Orders
            </h2>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                className="btn btn-secondary" 
                onClick={handleAutoCommit}
                disabled={!formData.item || formData.uncommitted === 0}
              >
                <i className="fas fa-magic"></i>
                Auto Commit
              </button>
              <button className="btn btn-secondary" onClick={handleMarkAll}>
                <i className="fas fa-check-square"></i>
                Mark All
              </button>
              <button className="btn btn-secondary" onClick={handleUnmarkAll}>
                <i className="fas fa-square"></i>
                Unmark All
              </button>
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />

          <div className="items-table-container" style={{ overflowX: 'auto' }}>
            <table className="items-table">
              <thead>
                <tr>
                  <th style={{ width: '50px', textAlign: 'center' }}>
                    <input 
                      type="checkbox" 
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      checked={orders.every(order => order.selected)}
                      style={{ cursor: 'pointer' }}
                    />
                  </th>
                  <th>ORDER DATE</th>
                  <th>ORDER NO.</th>
                  <th>SPECIAL ORDER</th>
                  <th>CUSTOMER</th>
                  <th style={{ textAlign: 'right' }}>QUANTITY ORDERED</th>
                  <th style={{ textAlign: 'right' }}>QUANTITY REMAINING</th>
                  <th style={{ textAlign: 'right' }}>QUANTITY RECEIVED</th>
                  <th style={{ textAlign: 'right' }}>COMMIT</th>
                  <th style={{ textAlign: 'right' }}>QUANTITY COMMITTED</th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan="10" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                      No orders available. Please select an item to view related orders.
                    </td>
                  </tr>
                ) : (
                  orders.map((order) => (
                    <tr key={order.id} className={order.selected ? 'selected-row' : ''}>
                      <td style={{ textAlign: 'center' }}>
                        <input 
                          type="checkbox" 
                          checked={order.selected}
                          onChange={(e) => handleSelectOrder(order.id, e.target.checked)}
                          style={{ cursor: 'pointer' }}
                        />
                      </td>
                      <td>{order.orderDate}</td>
                      <td>
                        <span style={{ color: '#4a90e2', fontWeight: '500' }}>
                          {order.orderNo}
                        </span>
                      </td>
                      <td>
                        <span style={{ 
                          padding: '0.25rem 0.5rem', 
                          borderRadius: '4px',
                          background: order.specialOrder === 'Yes' ? '#e3f2fd' : '#f5f5f5',
                          color: order.specialOrder === 'Yes' ? '#1976d2' : '#666',
                          fontSize: '0.875rem',
                          fontWeight: '500'
                        }}>
                          {order.specialOrder}
                        </span>
                      </td>
                      <td>{order.customer}</td>
                      <td style={{ textAlign: 'right' }}>{order.quantityOrdered}</td>
                      <td style={{ textAlign: 'right' }}>{order.quantityRemaining}</td>
                      <td style={{ textAlign: 'right' }}>{order.quantityReceived}</td>
                      <td style={{ textAlign: 'right' }}>
                        <input 
                          type="number" 
                          className="form-control"
                          value={order.commit}
                          onChange={(e) => handleCommitChange(order.id, e.target.value)}
                          min="0"
                          max={order.quantityRemaining}
                          style={{ 
                            width: '100px', 
                            textAlign: 'right',
                            padding: '0.5rem',
                            margin: '0 auto'
                          }}
                        />
                      </td>
                      <td style={{ textAlign: 'right' }}>{order.quantityCommitted}</td>
                    </tr>
                  ))
                )}
              </tbody>
              {orders.length > 0 && (
                <tfoot>
                  <tr style={{ background: '#f8f9fa', fontWeight: '600' }}>
                    <td colSpan="8" style={{ textAlign: 'right', padding: '1rem' }}>
                      Total Commit:
                    </td>
                    <td style={{ textAlign: 'right', color: '#4a90e2', fontSize: '1.1rem' }}>
                      {totalCommit}
                    </td>
                    <td></td>
                  </tr>
                </tfoot>
              )}
            </table>
          </div>
        </div>

        {/* Summary Section */}
        {formData.item && (
          <div className="form-section" style={{ marginTop: '2rem', background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.25rem' }}>UNCOMMITTED</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '600', color: '#4a90e2' }}>
                  {formData.uncommitted}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.25rem' }}>TOTAL COMMIT</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '600', color: totalCommit > formData.uncommitted ? '#d32f2f' : '#2e7d32' }}>
                  {totalCommit}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.25rem' }}>REMAINING</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '600', color: formData.uncommitted - totalCommit < 0 ? '#d32f2f' : '#666' }}>
                  {formData.uncommitted - totalCommit}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.25rem' }}>SELECTED ORDERS</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '600', color: '#666' }}>
                  {orders.filter(o => o.selected).length} / {orders.length}
                </div>
              </div>
            </div>
          </div>
        )}
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

export default ReallocateItems;
