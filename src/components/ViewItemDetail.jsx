import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewItemDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('purchasing');

  const itemData = {
    itemName: '10FEEN',
    displayName: '',
    vendorName: '',
    primaryPurchaseUnit: 'Pcs',
    subitemOf: '',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
    department: 'TOM : Human Resource',
    class: '',
    location: '',
    itemCategory: 'Consumable',
    upcCode: '',
    primaryBaseUnit: 'Pcs',
    purchasePrice: '',
    currency: 'SGD',
    expenseAccount: '50900 Cost Of Sales : Consumables',
    taxSchedule: 'Tax 7%',
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('create-item');
    }
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-items');
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-box"></i>
          <div>
            <h1>Non-inventory Item for Purchase</h1>
            <div className="detail-subtitle">
              <span>{itemData.itemName}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">List</button>
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
      </div>

      <div className="detail-content">
        {/* Primary Information */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>ITEM NAME/NUMBER</label>
                <div className="field-value">{itemData.itemName}</div>
              </div>
              <div className="detail-field">
                <label>VENDOR NAME/CODE</label>
                <div className="field-value">{itemData.vendorName || '-'}</div>
              </div>
              <div className="detail-field">
                <label>PRIMARY PURCHASE UNIT</label>
                <div className="field-value">{itemData.primaryPurchaseUnit}</div>
              </div>
              <div className="detail-field">
                <label>DISPLAY NAME/CODE</label>
                <div className="field-value">{itemData.displayName || '-'}</div>
              </div>
              <div className="detail-field">
                <label>PRIMARY UNITS TYPE</label>
                <div className="field-value">General UOM</div>
              </div>
              <div className="detail-field">
                <label>SUBITEM OF</label>
                <div className="field-value">{itemData.subitemOf || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{itemData.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>CLASS</label>
                <div className="field-value">{itemData.class || '-'}</div>
              </div>
              <div className="detail-field">
                <label>DEPARTMENT</label>
                <div className="field-value">{itemData.department}</div>
              </div>
              <div className="detail-field">
                <label>LOCATION</label>
                <div className="field-value">{itemData.location || '-'}</div>
              </div>
              <div className="detail-field">
                <label>UPC CODE</label>
                <div className="field-value">{itemData.upcCode || '-'}</div>
              </div>
              <div className="detail-field">
                <label>ITEM CATEGORY1</label>
                <div className="field-value">{itemData.itemCategory}</div>
              </div>
              <div className="detail-field">
                <label>PRIMARY BASE UNIT</label>
                <div className="field-value">{itemData.primaryBaseUnit}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-section">
          <div className="tabs-container">
            {['purchasing', 'accounting', 'relatedRecords', 'communication', 'preferences', 'systemInfo', 'custom'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{ 
                  background: activeTab === tab ? 'white' : 'transparent', 
                  border: 'none', 
                  padding: '10px 20px', 
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: activeTab === tab ? '600' : '500',
                  color: activeTab === tab ? '#333' : 'white',
                  borderRadius: '4px 4px 0 0',
                  whiteSpace: 'nowrap',
                  textTransform: 'capitalize'
                }}
              >
                {tab === 'systemInfo' ? 'System Information' : tab === 'relatedRecords' ? 'Related Records' : tab}
              </button>
            ))}
          </div>

          <div className="section-body">
            {/* Purchasing Tab */}
            {activeTab === 'purchasing' && (
              <div>
                <h3 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '1rem' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Item / Cost Detail
                </h3>
                <div className="detail-grid" style={{ marginBottom: '2rem' }}>
                  <div className="detail-field">
                    <label>PURCHASE PRICE</label>
                    <div className="field-value">{itemData.purchasePrice || '-'} per Pcs</div>
                  </div>
                  <div className="detail-field">
                    <label>PURCHASE DESCRIPTION</label>
                    <div className="field-value">-</div>
                  </div>
                </div>

                <h3 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '1rem' }}>Vendors</h3>
                <table style={{ width: '100%', fontSize: '11px', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #e0e0e0' }}>
                      <th style={{ padding: '8px', textAlign: 'left' }}>VENDOR</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>CODE</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>SUBSIDIARY</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>SCHEDULE</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>PREFERRED</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>PURCHASE PRICES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="6" style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>No records to show.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Accounting Tab */}
            {activeTab === 'accounting' && (
              <div>
                <h3 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '1rem' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Accounts
                </h3>
                <div className="detail-grid" style={{ marginBottom: '2rem' }}>
                  <div className="detail-field">
                    <label>CURRENCY</label>
                    <div className="field-value">{itemData.currency}</div>
                  </div>
                  <div className="detail-field">
                    <label>EXPENSE ACCOUNT</label>
                    <div className="field-value" style={{ color: '#4a90e2', cursor: 'pointer' }}>{itemData.expenseAccount}</div>
                  </div>
                </div>

                <h3 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '1rem' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Tax / Tariff
                </h3>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>TAX SCHEDULE</label>
                    <div className="field-value">{itemData.taxSchedule}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Other Tabs */}
            {activeTab !== 'purchasing' && activeTab !== 'accounting' && (
              <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                <p>No data available for {activeTab} tab</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="detail-footer">
          <button className="btn-toolbar" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn-toolbar-primary" onClick={handleEdit}>
            <i className="fas fa-edit"></i>
            Edit
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

export default ViewItemDetail;
