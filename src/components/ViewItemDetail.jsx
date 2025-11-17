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
    <div className="sales-quotation">
      {/* Top Header */}
      <div style={{ 
        background: '#f8f9fa', 
        padding: '12px 20px', 
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <i className="fas fa-box" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '4px' }}>Non-inventory Item for Purchase</div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#333' }}>{itemData.itemName}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>List</button>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>Search</button>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>Customize</button>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>More</button>
        </div>
      </div>

      {/* Action Buttons Bar */}
      <div style={{ 
        background: 'white', 
        padding: '12px 20px', 
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn btn-primary" onClick={handleEdit} style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-edit"></i> Edit
          </button>
          <button className="btn btn-secondary" onClick={handleBack} style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-arrow-left"></i> Back
          </button>
        </div>
        <div>
          <button className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-cog"></i> Actions
          </button>
        </div>
      </div>

      <div className="quotation-container" style={{ background: '#f8f9fa', padding: '20px' }}>
        {/* Primary Information */}
        <div style={{ 
          background: 'white', 
          borderRadius: '4px', 
          marginBottom: '20px',
          border: '1px solid #e0e0e0'
        }}>
          <div style={{ 
            padding: '15px 20px',
            borderBottom: '1px solid #e0e0e0',
            background: '#f8f9fa',
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '11px', color: '#666' }}></i>
            <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0, color: '#333' }}>Primary Information</h3>
          </div>
          <div style={{ padding: '20px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '30px 60px',
              fontSize: '13px'
            }}>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>ITEM NAME/NUMBER</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{itemData.itemName}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>VENDOR NAME/CODE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{itemData.vendorName || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>PRIMARY PURCHASE UNIT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{itemData.primaryPurchaseUnit}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DISPLAY NAME/CODE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{itemData.displayName || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>PRIMARY UNITS TYPE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>General UOM</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>SUBITEM OF</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{itemData.subitemOf || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div style={{ 
          background: 'white', 
          borderRadius: '4px', 
          marginBottom: '20px',
          border: '1px solid #e0e0e0'
        }}>
          <div style={{ 
            padding: '15px 20px',
            borderBottom: '1px solid #e0e0e0',
            background: '#f8f9fa',
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '11px', color: '#666' }}></i>
            <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0, color: '#333' }}>Classification</h3>
          </div>
          <div style={{ padding: '20px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '30px 60px',
              fontSize: '13px'
            }}>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>SUBSIDIARY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{itemData.subsidiary}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CLASS</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{itemData.class || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DEPARTMENT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{itemData.department}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>LOCATION</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{itemData.location || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>UPC CODE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{itemData.upcCode || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>ITEM CATEGORY1</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{itemData.itemCategory}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>PRIMARY BASE UNIT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{itemData.primaryBaseUnit}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div style={{ 
          background: 'white', 
          borderRadius: '4px', 
          marginBottom: '20px',
          border: '1px solid #e0e0e0'
        }}>
          <div style={{ 
            background: '#5a6c7d', 
            padding: '0',
            display: 'flex',
            borderRadius: '4px 4px 0 0',
            overflowX: 'auto'
          }}>
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

          <div style={{ padding: '20px' }}>
            {/* Purchasing Tab */}
            {activeTab === 'purchasing' && (
              <div>
                <h3 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '1rem' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Item / Cost Detail
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px 60px', marginBottom: '2rem' }}>
                  <div>
                    <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>PURCHASE PRICE</div>
                    <div style={{ color: '#333', fontSize: '14px' }}>{itemData.purchasePrice || '-'} per Pcs</div>
                  </div>
                  <div>
                    <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>PURCHASE DESCRIPTION</div>
                    <div style={{ color: '#333', fontSize: '14px' }}>-</div>
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px 60px', marginBottom: '2rem' }}>
                  <div>
                    <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CURRENCY</div>
                    <div style={{ color: '#333', fontSize: '14px' }}>{itemData.currency}</div>
                  </div>
                  <div>
                    <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>EXPENSE ACCOUNT</div>
                    <div style={{ color: '#4a90e2', fontSize: '14px', cursor: 'pointer' }}>{itemData.expenseAccount}</div>
                  </div>
                </div>

                <h3 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '1rem' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Tax / Tariff
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px 60px' }}>
                  <div>
                    <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>TAX SCHEDULE</div>
                    <div style={{ color: '#333', fontSize: '14px' }}>{itemData.taxSchedule}</div>
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

        <div className="footer-actions">
          <button className="btn btn-secondary" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <div>
            <button className="btn btn-primary" onClick={handleEdit}>
              <i className="fas fa-edit"></i>
              Edit
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-cog"></i>
              Actions
            </button>
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

export default ViewItemDetail;
