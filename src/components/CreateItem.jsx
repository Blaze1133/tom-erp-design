import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateItem = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('purchasing');

  const [formData, setFormData] = useState({
    customForm: 'TOM Non-Inventory Part Form',
    itemName: '10FEEN',
    displayName: '',
    vendorName: '',
    primaryPurchaseUnit: 'Pcs',
    primaryUnitsType: 'General UOM',
    subitemOf: '',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
    includeChildren: false,
    department: '',
    class: '',
    location: '',
    itemCategory: 'Consumable',
    upcCode: '',
    primaryBaseUnit: 'Pcs',
    purchasePrice: '',
    purchaseDescription: '',
    currency: 'SGD',
    expenseAccount: '50900 Cost Of Sales : Consumables',
    taxSchedule: 'Tax 7%',
  });

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleSave = () => {
    showToast('Item saved successfully!', 'success');
    setTimeout(() => {
      if (setCurrentPage) {
        setCurrentPage('view-items');
      }
    }, 1500);
  };

  const handleCancel = () => {
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
          <h1 style={{ fontSize: '18px', fontWeight: '600', margin: 0, color: '#333' }}>
            Non-inventory Item for Purchase
          </h1>
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
        gap: '10px'
      }}>
        <button className="btn btn-primary" onClick={handleSave} style={{ padding: '6px 16px', fontSize: '13px' }}>
          Save
        </button>
        <button className="btn btn-secondary" onClick={handleCancel} style={{ padding: '6px 16px', fontSize: '13px' }}>
          Cancel
        </button>
        <button className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '13px' }}>
          <i className="fas fa-cog"></i> Actions
        </button>
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              <div className="form-group">
                <label className="form-label">CUSTOM FORM</label>
                <select 
                  className="form-control"
                  value={formData.customForm}
                  onChange={(e) => handleFormChange('customForm', e.target.value)}
                >
                  <option>TOM Non-Inventory Part Form</option>
                  <option>Standard Non-Inventory Part Form</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">VENDOR NAME/CODE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.vendorName}
                  onChange={(e) => handleFormChange('vendorName', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">PRIMARY PURCHASE UNIT *</label>
                <select 
                  className="form-control"
                  value={formData.primaryPurchaseUnit}
                  onChange={(e) => handleFormChange('primaryPurchaseUnit', e.target.value)}
                >
                  <option>Pcs</option>
                  <option>Packed</option>
                  <option>Pallet</option>
                  <option>Bags.</option>
                  <option>Bottle.</option>
                  <option>Box.</option>
                  <option>Can.</option>
                  <option>Each</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">ITEM NAME/NUMBER *</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.itemName}
                  onChange={(e) => handleFormChange('itemName', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">PRIMARY UNITS TYPE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.primaryUnitsType}
                  onChange={(e) => handleFormChange('primaryUnitsType', e.target.value)}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label className="form-label">SUBITEM OF</label>
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="<Type then tab>"
                  value={formData.subitemOf}
                  onChange={(e) => handleFormChange('subitemOf', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">DISPLAY NAME/CODE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.displayName}
                  onChange={(e) => handleFormChange('displayName', e.target.value)}
                />
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              <div className="form-group">
                <label className="form-label">SUBSIDIARY</label>
                <select 
                  className="form-control"
                  value={formData.subsidiary}
                  onChange={(e) => handleFormChange('subsidiary', e.target.value)}
                >
                  <option>Tech Onshore MEP Prefabricators Pte Ltd</option>
                  <option>Tech Marine Offshore (S) Pte Ltd</option>
                  <option>TOM Offshore Marine Engineering Pte Ltd</option>
                  <option>TOM Shipyard Pte Ltd</option>
                </select>
                <div style={{ marginTop: '0.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                    <input 
                      type="checkbox"
                      checked={formData.includeChildren}
                      onChange={(e) => handleFormChange('includeChildren', e.target.checked)}
                    />
                    INCLUDE CHILDREN
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">DEPARTMENT</label>
                <select 
                  className="form-control"
                  value={formData.department}
                  onChange={(e) => handleFormChange('department', e.target.value)}
                >
                  <option value="">- Select -</option>
                  <option>TOM: Human Resource</option>
                  <option>TOM: Finance</option>
                  <option>TOM: IT</option>
                  <option>TOM: Logistic</option>
                  <option>TOM: Operating</option>
                  <option>TOM: Purchase</option>
                  <option>TOM: Sales and Marketing</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">LOCATION</label>
                <select 
                  className="form-control"
                  value={formData.location}
                  onChange={(e) => handleFormChange('location', e.target.value)}
                >
                  <option value="">- Select -</option>
                  <option>Hong Hang Shipyard</option>
                  <option>Mega yard</option>
                  <option>Singapore (MEP)</option>
                  <option>TOM-11</option>
                  <option>TOM-13</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">UPC CODE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.upcCode}
                  onChange={(e) => handleFormChange('upcCode', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">CLASS</label>
                <select 
                  className="form-control"
                  value={formData.class}
                  onChange={(e) => handleFormChange('class', e.target.value)}
                >
                  <option value="">- Select -</option>
                  <option>Consumable Item</option>
                  <option>Course</option>
                  <option>Cutting Works</option>
                  <option>Electrical</option>
                  <option>Fabrication</option>
                  <option>Installation work</option>
                  <option>Manpower Supply</option>
                  <option>Material Supply</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">ITEM CATEGORY1</label>
                <select 
                  className="form-control"
                  value={formData.itemCategory}
                  onChange={(e) => handleFormChange('itemCategory', e.target.value)}
                >
                  <option>Consumable</option>
                  <option>Material</option>
                  <option>Other</option>
                  <option>Rental</option>
                  <option>Service</option>
                  <option>Fixed Asset</option>
                  <option>Administration</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">PRIMARY BASE UNIT</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.primaryBaseUnit}
                  onChange={(e) => handleFormChange('primaryBaseUnit', e.target.value)}
                  readOnly
                />
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
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '2rem' }}>
                  <div className="form-group">
                    <label className="form-label">PURCHASE PRICE</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={formData.purchasePrice}
                        onChange={(e) => handleFormChange('purchasePrice', e.target.value)}
                        style={{ flex: 1 }}
                      />
                      <span style={{ fontSize: '13px', color: '#666' }}>per Pcs</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">PURCHASE DESCRIPTION</label>
                    <textarea 
                      className="form-control"
                      rows="3"
                      value={formData.purchaseDescription}
                      onChange={(e) => handleFormChange('purchaseDescription', e.target.value)}
                    />
                  </div>
                </div>

                <h3 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '1rem' }}>Vendors</h3>
                <table style={{ width: '100%', fontSize: '11px', borderCollapse: 'collapse', marginBottom: '1rem' }}>
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '2rem' }}>
                  <div className="form-group">
                    <label className="form-label">CURRENCY</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.currency}
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">EXPENSE ACCOUNT</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.expenseAccount}
                      onChange={(e) => handleFormChange('expenseAccount', e.target.value)}
                    />
                  </div>
                </div>

                <h3 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '1rem' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Tax / Tariff
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div className="form-group">
                    <label className="form-label">TAX SCHEDULE</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.taxSchedule}
                      onChange={(e) => handleFormChange('taxSchedule', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Other Tabs */}
            {activeTab !== 'purchasing' && activeTab !== 'accounting' && (
              <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                <p>Content for {activeTab} tab</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="footer-actions">
        <button className="btn btn-tertiary" onClick={handleCancel}>
          <i className="fas fa-times"></i>
          Cancel
        </button>
        <div>
          <button className="btn btn-secondary">
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-check"></i>
            Submit
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

export default CreateItem;
