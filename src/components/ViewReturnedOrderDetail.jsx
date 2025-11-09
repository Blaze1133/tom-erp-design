import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewReturnedOrderDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('items');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);

  const receiptData = {
    customForm: 'TOM Item Receipt',
    reference: 'IR00194',
    vendor: 'CHIA HOCK HARDWARE TRADING',
    createdFrom: 'Purchase Order #POTOM00077',
    date: '16/12/2021',
    postingPeriod: 'Dec 2021',
    memo: '',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    currency: 'SGD',
    exchangeRate: '1.00'
  };

  const items = [
    {
      id: 1,
      item: 'safety goggles',
      vendorName: 'safety goggles',
      description: 'safety goggles',
      toLocation: 'TOM - 13',
      onHand: 0,
      remaining: 36,
      quantity: 36,
      units: 'Pcs',
      options: '',
      rate: '',
      currency: 'SGD',
      doQuantity: ''
    },
    {
      id: 2,
      item: 'Whistle',
      vendorName: 'Whistle',
      description: 'Whistle',
      toLocation: 'TOM - 13',
      onHand: 0,
      remaining: 24,
      quantity: 24,
      units: 'Pcs',
      options: '',
      rate: '',
      currency: 'SGD',
      doQuantity: ''
    },
    {
      id: 3,
      item: 'Head Light',
      vendorName: 'LED',
      description: 'LED',
      toLocation: 'TOM - 13',
      onHand: 0,
      remaining: 10,
      quantity: 10,
      units: 'Pcs',
      options: '',
      rate: '',
      currency: 'SGD',
      doQuantity: ''
    }
  ];

  const tabs = [
    { id: 'items', label: 'Items & Expenses', icon: 'fas fa-box' },
    { id: 'relationships', label: 'Relationships', icon: 'fas fa-link' },
    { id: 'communication', label: 'Communication', icon: 'fas fa-comments' },
    { id: 'system', label: 'System Information', icon: 'fas fa-info-circle' },
    { id: 'custom', label: 'Custom', icon: 'fas fa-cog' },
    { id: 'gl', label: 'GL Impact', icon: 'fas fa-chart-line' }
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = () => {
    setCurrentPage('edit-returned-order');
  };

  const handleBack = () => {
    setCurrentPage('view-returned-orders');
  };

  const handleList = () => {
    setCurrentPage('view-returned-orders');
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-box-open"></i>
          <div>
            <h1>Item Receipt</h1>
            <div className="detail-subtitle">
              <span>{receiptData.reference}</span>
              <span style={{ marginLeft: '1rem', color: '#666' }}>{receiptData.vendor}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-action">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-action" onClick={handleList}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary" onClick={handleEdit}>
          <i className="fas fa-edit"></i>
          Edit
        </button>
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-copy"></i>
          Copy
        </button>
        <div className="toolbar-dropdown" style={{ marginLeft: 'auto' }}>
          <button className="btn-toolbar">
            <i className="fas fa-cog"></i>
            Actions
            <i className="fas fa-chevron-down" style={{ marginLeft: '0.5rem', fontSize: '0.7rem' }}></i>
          </button>
        </div>
      </div>

      <div className="detail-content">
        {/* Primary Information */}
        <div className={`detail-section ${primaryInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setPrimaryInfoCollapsed(!primaryInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>REFERENCE #</label>
                <div className="field-value">{receiptData.reference}</div>
              </div>
              <div className="detail-field">
                <label>DATE</label>
                <div className="field-value">{receiptData.date}</div>
              </div>
              <div className="detail-field">
                <label>VENDOR</label>
                <div className="field-value">{receiptData.vendor}</div>
              </div>
              <div className="detail-field">
                <label>POSTING PERIOD</label>
                <div className="field-value">{receiptData.postingPeriod}</div>
              </div>
              <div className="detail-field">
                <label>CREATED FROM</label>
                <div className="field-value">{receiptData.createdFrom}</div>
              </div>
              <div className="detail-field">
                <label>MEMO</label>
                <div className="field-value">{receiptData.memo || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className={`detail-section ${classificationCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setClassificationCollapsed(!classificationCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{receiptData.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>CURRENCY</label>
                <div className="field-value">{receiptData.currency}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="detail-section">
          <div className="tabs-header">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tabs-content">
            {activeTab === 'items' && (
              <>
                <div className="detail-field" style={{ marginBottom: '1.5rem', maxWidth: '300px', padding: '1rem' }}>
                  <label>EXCHANGE RATE</label>
                  <div className="field-value">{receiptData.exchangeRate}</div>
                </div>

                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>ITEM</th>
                        <th>VENDOR NAME</th>
                        <th>DESCRIPTION</th>
                        <th>TO LOCATION</th>
                        <th>ON HAND</th>
                        <th>REMAINING</th>
                        <th>QUANTITY</th>
                        <th>UNITS</th>
                        <th>OPTIONS</th>
                        <th>RATE</th>
                        <th>CURRENCY</th>
                        <th>DO QUANTITY</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr key={item.id}>
                          <td style={{ color: 'var(--blue-accent)' }}>{item.item}</td>
                          <td>{item.vendorName}</td>
                          <td>{item.description}</td>
                          <td>{item.toLocation}</td>
                          <td>{item.onHand}</td>
                          <td>{item.remaining}</td>
                          <td>{item.quantity}</td>
                          <td>{item.units}</td>
                          <td>{item.options || '-'}</td>
                          <td>{item.rate || '-'}</td>
                          <td>{item.currency}</td>
                          <td>{item.doQuantity || '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {activeTab === 'relationships' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>No relationship records available.</p>
              </div>
            )}

            {activeTab === 'communication' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>No communication records available.</p>
              </div>
            )}

            {activeTab === 'system' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>System information not available.</p>
              </div>
            )}

            {activeTab === 'custom' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>No custom fields configured.</p>
              </div>
            )}

            {activeTab === 'gl' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>GL Impact information not available.</p>
              </div>
            )}
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

export default ViewReturnedOrderDetail;
