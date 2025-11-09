import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewFulfillOrderDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('items');

  const fulfillmentData = {
    customForm: 'TOM Item Fulfillment',
    status: 'Shipped',
    date: '8/11/2025',
    postingPeriod: 'Nov 2025',
    customer: '21-0162 Piping Modification Works',
    createdFrom: 'Sales Order #S2100065',
    memo: 'Project No : 21-0162',
    fulfillmentNo: 'IF-2025-001'
  };

  const items = [
    {
      id: 1,
      item: 'Fabrication',
      description: 'To provide qualified skilled Supervisor, technicians, consumables, and necessary hand tools to carry out the following scope of work.\nDwg No: P2107-06001-0100-DG-0001\nScope of Work:\nMakeup an interface spool for HRP001 to C01 SPHL',
      location: 'Hong Hang Shipyard',
      onHand: 5,
      remaining: 0,
      committed: 1,
      quantity: 1,
      units: 'Each',
      fulfilled: 1
    }
  ];

  const tabs = [
    { id: 'items', label: 'Items', icon: 'fas fa-box' },
    { id: 'shipping', label: 'Shipping', icon: 'fas fa-shipping-fast' },
    { id: 'packages', label: 'Packages', icon: 'fas fa-cube' },
    { id: 'relationships', label: 'Relationships', icon: 'fas fa-link' },
    { id: 'communication', label: 'Communication', icon: 'fas fa-comments' },
    { id: 'system-info', label: 'System Information', icon: 'fas fa-info-circle' },
    { id: 'custom', label: 'Custom', icon: 'fas fa-cog' }
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = () => {
    setCurrentPage('edit-fulfill-order');
    sessionStorage.setItem('editFulfillOrderData', JSON.stringify(fulfillmentData));
  };

  const handleBack = () => {
    setCurrentPage('view-fulfill-orders');
  };

  const handleList = () => {
    setCurrentPage('view-fulfill-orders');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-box-open" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <div>
            <h1>Item Fulfillment #{fulfillmentData.fulfillmentNo}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.25rem' }}>
              <span style={{ fontSize: '0.875rem', color: '#666' }}>
                {fulfillmentData.createdFrom}
              </span>
              <span style={{ 
                padding: '0.25rem 0.75rem', 
                background: '#d4edda', 
                color: '#155724',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: '600',
                textTransform: 'uppercase'
              }}>
                {fulfillmentData.status}
              </span>
            </div>
          </div>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn btn-secondary" onClick={handleList}>
            <i className="fas fa-list"></i>
            List
          </button>
          <button className="btn btn-primary" onClick={handleEdit}>
            <i className="fas fa-edit"></i>
            Edit
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-info-circle"></i>
            Primary Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">CUSTOM FORM</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {fulfillmentData.customForm}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">DATE</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {fulfillmentData.date}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">FULFILLMENT NO.</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none', color: '#4a90e2', fontWeight: '500' }}>
                {fulfillmentData.fulfillmentNo}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">POSTING PERIOD</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {fulfillmentData.postingPeriod}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">CUSTOMER</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {fulfillmentData.customer}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">MEMO</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {fulfillmentData.memo}
              </div>
            </div>

            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label">CREATED FROM</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none', color: '#4a90e2', fontWeight: '500' }}>
                {fulfillmentData.createdFrom}
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Tabs Section */}
        <div className="form-section">
          <div style={{ borderBottom: '2px solid #e0e0e0', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto' }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    border: 'none',
                    background: activeTab === tab.id ? '#4a90e2' : 'transparent',
                    color: activeTab === tab.id ? 'white' : '#666',
                    borderBottom: activeTab === tab.id ? '3px solid #4a90e2' : '3px solid transparent',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <i className={tab.icon}></i>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Items Tab Content */}
          {activeTab === 'items' && (
            <>
              <div className="items-table-container">
                <table className="items-table">
                  <thead>
                    <tr>
                      <th>ITEM</th>
                      <th>DESCRIPTION</th>
                      <th>LOCATION</th>
                      <th style={{ textAlign: 'right' }}>ON HAND</th>
                      <th style={{ textAlign: 'right' }}>REMAINING</th>
                      <th style={{ textAlign: 'right' }}>COMMITTED</th>
                      <th style={{ textAlign: 'right' }}>QUANTITY</th>
                      <th style={{ textAlign: 'right' }}>FULFILLED</th>
                      <th>UNITS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td style={{ fontWeight: '500' }}>{item.item}</td>
                        <td>
                          <div style={{ maxWidth: '400px', whiteSpace: 'pre-wrap', fontSize: '0.8rem', lineHeight: '1.4' }}>
                            {item.description}
                          </div>
                        </td>
                        <td>{item.location}</td>
                        <td style={{ textAlign: 'right' }}>{item.onHand}</td>
                        <td style={{ textAlign: 'right' }}>{item.remaining}</td>
                        <td style={{ textAlign: 'right' }}>{item.committed}</td>
                        <td style={{ textAlign: 'right', fontWeight: '600', color: '#4a90e2' }}>{item.quantity}</td>
                        <td style={{ textAlign: 'right', fontWeight: '600', color: '#2e7d32' }}>{item.fulfilled}</td>
                        <td>{item.units}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Summary - Simple flat cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginTop: '2rem', padding: '1.5rem 0' }}>
                <div style={{ background: 'white', padding: '1.25rem', border: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                    SUBTOTAL
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                    $168000.00
                  </div>
                </div>
                <div style={{ background: 'white', padding: '1.25rem', border: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                    TAX AMOUNT
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                    $0.00
                  </div>
                </div>
                <div style={{ background: 'white', padding: '1.25rem', border: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                    DISCOUNT
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                    $0.00
                  </div>
                </div>
                <div style={{ background: 'white', padding: '1.25rem', border: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                    TOTAL AMOUNT
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '600', color: '#4a90e2' }}>
                    $168000.00
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Other Tabs Placeholder */}
          {activeTab !== 'items' && (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>
              <i className="fas fa-info-circle" style={{ fontSize: '2rem', marginBottom: '1rem' }}></i>
              <p>{tabs.find(t => t.id === activeTab)?.label} section - Coming soon</p>
            </div>
          )}
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

export default ViewFulfillOrderDetail;
