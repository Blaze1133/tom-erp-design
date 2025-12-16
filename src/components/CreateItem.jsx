import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateItem = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [itemType, setItemType] = useState('non-inventory'); // 'inventory' or 'non-inventory'
  const [activeTab, setActiveTab] = useState('purchasing');
  const [purchasingSubTab, setPurchasingSubTab] = useState('locations'); // 'locations' or 'vendors'

  const [formData, setFormData] = useState({
    customForm: itemType === 'inventory' ? 'Standard Inventory Part Form' : 'Standard Non-Inventory Part Form',
    itemName: '',
    displayName: '',
    vendorName: '',
    upcCode: '',
    primaryStockUnit: '',
    primaryPurchaseUnit: '',
    primarySaleUnit: '',
    primaryBaseUnit: '',
    primaryUnitsType: 'General UOM',
    subitemOf: '',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
    includeChildren: false,
    department: '',
    class: '',
    location: '',
    itemCategory: '',
    costingMethod: 'FIFO',
    totalValue: '',
    purchasePrice: '',
    purchaseDescription: '',
    stockDescription: '',
    matchBillToReceipt: false,
    reorderMultiple: '',
    transferPrice: '',
    manufacturer: '',
    manufacturerCountry: '',
    mpn: '',
    vendorBillPOQtyTolerance: '',
    vendorBillItemReceiptQtyTolerance: '',
    vendorBillPOAmtTolerance: '',
    vendorBillItemReceiptAmtTolerance: '',
    vendorBillPOQtyDifference: '',
    vendorBillItemReceiptQtyDifference: '',
    preferredLocation: '',
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
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-box"></i>
          <div>
            <h1>{itemType === 'inventory' ? 'Inventory Item' : 'Non-inventory Item for Purchase'}</h1>
            <div className="detail-subtitle">
              <span>Create New Item</span>
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginRight: 'auto' }}>
          <label style={{ fontWeight: '600', fontSize: '0.9rem' }}>Item Type:</label>
          <select 
            className="form-control"
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
            style={{ width: '200px' }}
          >
            <option value="inventory">Inventory Item</option>
            <option value="non-inventory">Non-Inventory Item</option>
          </select>
        </div>
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
      </div>

      <div className="detail-content">
        {/* Primary Information - Inventory Item */}
        {itemType === 'inventory' && (
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid" style={{ gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">PRIMARY STOCK UNIT</label>
                <select 
                  className="form-control"
                  value={formData.primaryStockUnit}
                  onChange={(e) => handleFormChange('primaryStockUnit', e.target.value)}
                >
                  <option value="">- Select -</option>
                  <option>Pcs</option>
                  <option>Kg</option>
                  <option>Meters</option>
                  <option>Liters</option>
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
                <label className="form-label">PRIMARY PURCHASE UNIT</label>
                <select 
                  className="form-control"
                  value={formData.primaryPurchaseUnit}
                  onChange={(e) => handleFormChange('primaryPurchaseUnit', e.target.value)}
                >
                  <option value="">- Select -</option>
                  <option>Pcs</option>
                  <option>Kg</option>
                  <option>Meters</option>
                  <option>Liters</option>
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
                <label className="form-label">PRIMARY SALE UNIT</label>
                <select 
                  className="form-control"
                  value={formData.primarySaleUnit}
                  onChange={(e) => handleFormChange('primarySaleUnit', e.target.value)}
                >
                  <option value="">- Select -</option>
                  <option>Pcs</option>
                  <option>Kg</option>
                  <option>Meters</option>
                  <option>Liters</option>
                </select>
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
              <div className="form-group">
                <label className="form-label">PRIMARY BASE UNIT</label>
                <select 
                  className="form-control"
                  value={formData.primaryBaseUnit}
                  onChange={(e) => handleFormChange('primaryBaseUnit', e.target.value)}
                >
                  <option value="">- Select -</option>
                  <option>Pcs</option>
                  <option>Kg</option>
                  <option>Meters</option>
                  <option>Liters</option>
                </select>
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
                <label className="form-label">PRIMARY UNITS TYPE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.primaryUnitsType}
                  onChange={(e) => handleFormChange('primaryUnitsType', e.target.value)}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Primary Information - Non-Inventory Item */}
        {itemType === 'non-inventory' && (
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid" style={{ gap: '1rem' }}>
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
                <label className="form-label">UPC CODE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.upcCode}
                  onChange={(e) => handleFormChange('upcCode', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">PRIMARY PURCHASE UNIT</label>
                <select 
                  className="form-control"
                  value={formData.primaryPurchaseUnit}
                  onChange={(e) => handleFormChange('primaryPurchaseUnit', e.target.value)}
                >
                  <option value="">- Select -</option>
                  <option>Pcs</option>
                  <option>Kg</option>
                  <option>Meters</option>
                  <option>Liters</option>
                </select>
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
            </div>
          </div>
        </div>
        )}

        {/* Classification - Inventory Item */}
        {itemType === 'inventory' && (
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid" style={{ gap: '1rem' }}>
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
            </div>
          </div>
        </div>
        )}

        {/* Classification - Non-Inventory Item */}
        {itemType === 'non-inventory' && (
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid" style={{ gap: '1rem' }}>
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
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <input 
                    type="checkbox"
                    checked={formData.includeChildren}
                    onChange={(e) => handleFormChange('includeChildren', e.target.checked)}
                  />
                  INCLUDE CHILDREN
                </label>
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
                <label className="form-label">PRIMARY BASE UNIT</label>
                <select 
                  className="form-control"
                  value={formData.primaryBaseUnit}
                  onChange={(e) => handleFormChange('primaryBaseUnit', e.target.value)}
                >
                  <option value="">- Select -</option>
                  <option>Pcs</option>
                  <option>Kg</option>
                  <option>Meters</option>
                  <option>Liters</option>
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
            </div>
          </div>
        </div>
        )}

        {/* Tabs Section */}
        <div className="detail-tabs" style={{ marginTop: '2rem' }}>
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'purchasing' ? 'active' : ''}`} onClick={() => setActiveTab('purchasing')}>Purchasing</button>
            <button className={`tab-btn ${activeTab === 'accounting' ? 'active' : ''}`} onClick={() => setActiveTab('accounting')}>Accounting</button>
            <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>Communication</button>
            <button className={`tab-btn ${activeTab === 'systemInfo' ? 'active' : ''}`} onClick={() => setActiveTab('systemInfo')}>System Information</button>
          </div>

          <div className="tab-content" style={{ padding: '1.5rem' }}>
            {/* Purchasing Tab - Inventory Item */}
            {activeTab === 'purchasing' && itemType === 'inventory' && (
              <div>
                {/* Item/Cost Detail Section */}
                <div className="detail-section" style={{ marginBottom: '1rem' }}>
                  <div className="section-header" style={{ background: '#f5f5f5', padding: '0.75rem', cursor: 'pointer' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem' }}></i>
                    <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0 }}>Item/Cost Detail</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label">COSTING METHOD</label>
                        <select 
                          className="form-control"
                          value={formData.costingMethod}
                          onChange={(e) => handleFormChange('costingMethod', e.target.value)}
                        >
                          <option>FIFO</option>
                          <option>LIFO</option>
                          <option>Average</option>
                        </select>
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
                      <div className="form-group">
                        <label className="form-label">TOTAL VALUE</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.totalValue}
                          onChange={(e) => handleFormChange('totalValue', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">STOCK DESCRIPTION</label>
                        <textarea 
                          className="form-control"
                          rows="3"
                          value={formData.stockDescription}
                          onChange={(e) => handleFormChange('stockDescription', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">PURCHASE PRICE</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.purchasePrice}
                          onChange={(e) => handleFormChange('purchasePrice', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', marginTop: '1rem' }}>
                          <input 
                            type="checkbox"
                            checked={formData.matchBillToReceipt}
                            onChange={(e) => handleFormChange('matchBillToReceipt', e.target.checked)}
                          />
                          MATCH BILL TO RECEIPT
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inventory Management Section */}
                <div className="detail-section" style={{ marginBottom: '1rem' }}>
                  <div className="section-header" style={{ background: '#f5f5f5', padding: '0.75rem', cursor: 'pointer' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem' }}></i>
                    <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0 }}>Inventory Management</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label">REORDER MULTIPLE</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.reorderMultiple}
                          onChange={(e) => handleFormChange('reorderMultiple', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">TRANSFER PRICE</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.transferPrice}
                          onChange={(e) => handleFormChange('transferPrice', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Manufacturing Section */}
                <div className="detail-section" style={{ marginBottom: '1rem' }}>
                  <div className="section-header" style={{ background: '#f5f5f5', padding: '0.75rem', cursor: 'pointer' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem' }}></i>
                    <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0 }}>Manufacturing</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label">MANUFACTURER</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.manufacturer}
                          onChange={(e) => handleFormChange('manufacturer', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">MANUFACTURER COUNTRY</label>
                        <select 
                          className="form-control"
                          value={formData.manufacturerCountry}
                          onChange={(e) => handleFormChange('manufacturerCountry', e.target.value)}
                        >
                          <option value="">- Select -</option>
                          <option>Singapore</option>
                          <option>Malaysia</option>
                          <option>China</option>
                          <option>India</option>
                          <option>USA</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">MPN</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.mpn}
                          onChange={(e) => handleFormChange('mpn', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vendor Bill Matching Section */}
                <div className="detail-section" style={{ marginBottom: '1rem' }}>
                  <div className="section-header" style={{ background: '#f5f5f5', padding: '0.75rem', cursor: 'pointer' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem' }}></i>
                    <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0 }}>Vendor Bill Matching</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label">VENDOR BILL - PURCHASE ORDER QUANTITY TOLERANCE</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.vendorBillPOQtyTolerance}
                          onChange={(e) => handleFormChange('vendorBillPOQtyTolerance', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">VENDOR BILL - ITEM RECEIPT QUANTITY TOLERANCE</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.vendorBillItemReceiptQtyTolerance}
                          onChange={(e) => handleFormChange('vendorBillItemReceiptQtyTolerance', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">VENDOR BILL - PURCHASE ORDER AMOUNT TOLERANCE</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.vendorBillPOAmtTolerance}
                          onChange={(e) => handleFormChange('vendorBillPOAmtTolerance', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">VENDOR BILL - ITEM RECEIPT AMOUNT TOLERANCE</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.vendorBillItemReceiptAmtTolerance}
                          onChange={(e) => handleFormChange('vendorBillItemReceiptAmtTolerance', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">VENDOR BILL - PURCHASE ORDER QUANTITY DIFFERENCE</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.vendorBillPOQtyDifference}
                          onChange={(e) => handleFormChange('vendorBillPOQtyDifference', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">VENDOR BILL - ITEM RECEIPT QUANTITY DIFFERENCE</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.vendorBillItemReceiptQtyDifference}
                          onChange={(e) => handleFormChange('vendorBillItemReceiptQtyDifference', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-tabs for Locations and Vendors */}
                <div style={{ marginTop: '2rem' }}>
                  <div className="tabs-header">
                    <button className={`tab-btn ${purchasingSubTab === 'locations' ? 'active' : ''}`} onClick={() => setPurchasingSubTab('locations')}>Locations</button>
                    <button className={`tab-btn ${purchasingSubTab === 'vendors' ? 'active' : ''}`} onClick={() => setPurchasingSubTab('vendors')}>Vendors</button>
                  </div>

                  {/* Locations Tab */}
                  {purchasingSubTab === 'locations' && (
                    <div style={{ padding: '1.5rem' }}>
                      <div className="form-group" style={{ marginBottom: '1rem' }}>
                        <label className="form-label">PREFERRED LOCATION</label>
                        <select 
                          className="form-control"
                          value={formData.preferredLocation}
                          onChange={(e) => handleFormChange('preferredLocation', e.target.value)}
                          style={{ maxWidth: '300px' }}
                        >
                          <option value="">- Select -</option>
                          <option>Bok Seng Yard</option>
                          <option>Hong Hang Shipyard</option>
                          <option>Mega yard</option>
                          <option>MEP MARINE CC</option>
                          <option>Shipyards/Construction</option>
                          <option>Singapore (TDO)</option>
                          <option>Singapore (TEA)</option>
                          <option>Singapore (TMO)</option>
                          <option>Singapore (TOMS)</option>
                          <option>Singapore (TSV)</option>
                          <option>Singapore(MEP)</option>
                          <option>TOM - 11</option>
                          <option>TOM External Workshop</option>
                          <option>TOM - 13</option>
                        </select>
                      </div>
                      <table className="enquiries-table" style={{ fontSize: '0.875rem' }}>
                        <thead>
                          <tr>
                            <th>LOCATION</th>
                            <th>QUANTITY ON HAND</th>
                            <th>REORDER POINT</th>
                            <th>PREFERRED STOCK LEVEL</th>
                            <th>DEFAULT RETURN COST</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Bok Seng Yard</td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                          </tr>
                          <tr>
                            <td>Hong Hang Shipyard</td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                          </tr>
                          <tr>
                            <td>Mega yard</td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                          </tr>
                          <tr>
                            <td>MEP MARINE CC</td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                          </tr>
                          <tr>
                            <td>Shipyards/Construction</td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                          </tr>
                          <tr>
                            <td>Singapore (TDO)</td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                          </tr>
                          <tr>
                            <td>Singapore (TEA)</td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                          </tr>
                          <tr>
                            <td>Singapore (TMO)</td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                          </tr>
                          <tr>
                            <td>Singapore (TOMS)</td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                          </tr>
                          <tr>
                            <td>Singapore (TSV)</td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                          </tr>
                          <tr>
                            <td>Singapore(MEP)</td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                          </tr>
                          <tr>
                            <td>TOM - 11</td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                          </tr>
                          <tr>
                            <td>TOM External Workshop</td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                          </tr>
                          <tr>
                            <td>TOM - 13</td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Vendors Tab */}
                  {purchasingSubTab === 'vendors' && (
                    <div style={{ padding: '1.5rem' }}>
                      <table className="enquiries-table" style={{ fontSize: '0.875rem' }}>
                        <thead>
                          <tr>
                            <th>VENDOR</th>
                            <th>CODE</th>
                            <th>SUBSIDIARY</th>
                            <th>SCHEDULE</th>
                            <th>PREFERRED</th>
                            <th>PURCHASE PRICES</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><input type="text" className="form-control" /></td>
                            <td><input type="text" className="form-control" /></td>
                            <td><input type="text" className="form-control" /></td>
                            <td><input type="text" className="form-control" /></td>
                            <td><input type="checkbox" /></td>
                            <td><input type="text" className="form-control" /></td>
                          </tr>
                        </tbody>
                      </table>
                      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                        <button className="btn-toolbar" style={{ fontSize: '0.875rem' }}>
                          <i className="fas fa-check"></i> Add
                        </button>
                        <button className="btn-toolbar" style={{ fontSize: '0.875rem' }}>
                          <i className="fas fa-times"></i> Cancel
                        </button>
                        <button className="btn-toolbar" style={{ fontSize: '0.875rem' }}>
                          <i className="fas fa-plus"></i> Insert
                        </button>
                        <button className="btn-toolbar" style={{ fontSize: '0.875rem' }}>
                          <i className="fas fa-trash"></i> Remove
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Purchasing Tab - Non-Inventory Item */}
            {activeTab === 'purchasing' && itemType === 'non-inventory' && (
              <div>
                {/* Item/Cost Detail Section */}
                <div className="detail-section" style={{ marginBottom: '1rem' }}>
                  <div className="section-header" style={{ background: '#f5f5f5', padding: '0.75rem', cursor: 'pointer' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem' }}></i>
                    <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0 }}>Item / Cost Detail</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label">PURCHASE PRICE</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.purchasePrice}
                          onChange={(e) => handleFormChange('purchasePrice', e.target.value)}
                        />
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
                  </div>
                </div>

                {/* Vendor Bill Matching Section */}
                <div className="detail-section" style={{ marginBottom: '1rem' }}>
                  <div className="section-header" style={{ background: '#f5f5f5', padding: '0.75rem', cursor: 'pointer' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem' }}></i>
                    <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0 }}>Vendor Bill Matching</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label">VENDOR BILL - PURCHASE ORDER QUANTITY TOLERANCE</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.vendorBillPOQtyTolerance}
                          onChange={(e) => handleFormChange('vendorBillPOQtyTolerance', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">VENDOR BILL - ITEM RECEIPT QUANTITY TOLERANCE</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.vendorBillItemReceiptQtyTolerance}
                          onChange={(e) => handleFormChange('vendorBillItemReceiptQtyTolerance', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">VENDOR BILL - PURCHASE ORDER AMOUNT TOLERANCE</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.vendorBillPOAmtTolerance}
                          onChange={(e) => handleFormChange('vendorBillPOAmtTolerance', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">VENDOR BILL - ITEM RECEIPT AMOUNT TOLERANCE</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.vendorBillItemReceiptAmtTolerance}
                          onChange={(e) => handleFormChange('vendorBillItemReceiptAmtTolerance', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">VENDOR BILL - PURCHASE ORDER QUANTITY DIFFERENCE</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.vendorBillPOQtyDifference}
                          onChange={(e) => handleFormChange('vendorBillPOQtyDifference', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">VENDOR BILL - ITEM RECEIPT QUANTITY DIFFERENCE</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.vendorBillItemReceiptQtyDifference}
                          onChange={(e) => handleFormChange('vendorBillItemReceiptQtyDifference', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vendors Sub-tab */}
                <div style={{ marginTop: '2rem' }}>
                  <div className="tabs-header">
                    <button className="tab-btn active">Vendors</button>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <table className="enquiries-table" style={{ fontSize: '0.875rem' }}>
                      <thead>
                        <tr>
                          <th>VENDOR</th>
                          <th>CODE</th>
                          <th>SUBSIDIARY</th>
                          <th>SCHEDULE</th>
                          <th>PREFERRED</th>
                          <th>PURCHASE PRICES</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><input type="text" className="form-control" /></td>
                          <td><input type="text" className="form-control" /></td>
                          <td><input type="text" className="form-control" /></td>
                          <td><input type="text" className="form-control" /></td>
                          <td><input type="checkbox" /></td>
                          <td><input type="text" className="form-control" /></td>
                        </tr>
                      </tbody>
                    </table>
                    <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                      <button className="btn-toolbar" style={{ fontSize: '0.875rem' }}>
                        <i className="fas fa-check"></i> Add
                      </button>
                      <button className="btn-toolbar" style={{ fontSize: '0.875rem' }}>
                        <i className="fas fa-times"></i> Cancel
                      </button>
                      <button className="btn-toolbar" style={{ fontSize: '0.875rem' }}>
                        <i className="fas fa-plus"></i> Insert
                      </button>
                      <button className="btn-toolbar" style={{ fontSize: '0.875rem' }}>
                        <i className="fas fa-trash"></i> Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Sales/Pricing Tab */}
            {activeTab === 'sales' && itemType === 'inventory' && (
              <div>
                {/* Sales Section */}
                <div className="detail-section" style={{ marginBottom: '1rem' }}>
                  <div className="section-header" style={{ background: '#f5f5f5', padding: '0.75rem', cursor: 'pointer' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem' }}></i>
                    <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0 }}>Sales</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label">SALES DESCRIPTION</label>
                        <textarea 
                          className="form-control"
                          rows="3"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">ITEM DEFINED COST</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">COST ESTIMATE TYPE</label>
                        <select className="form-control">
                          <option>Average Cost</option>
                          <option>Standard Cost</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">BILLING SCHEDULE</label>
                        <select className="form-control">
                          <option value="">- Select -</option>
                        </select>
                      </div>
                      <div className="form-group"></div>
                      <div className="form-group">
                        <label className="form-label">MAXIMUM QUANTITY</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group"></div>
                      <div className="form-group">
                        <label className="form-label">MINIMUM QUANTITY</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shipping Section */}
                <div className="detail-section" style={{ marginBottom: '1rem' }}>
                  <div className="section-header" style={{ background: '#f5f5f5', padding: '0.75rem', cursor: 'pointer' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem' }}></i>
                    <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0 }}>Shipping</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label">ITEM WEIGHT</label>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <input type="text" className="form-control" style={{ flex: 1 }} />
                          <select className="form-control" style={{ width: '80px' }}>
                            <option>lb</option>
                            <option>kg</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">SCHEDULE B NUMBER</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing Section */}
                <div className="detail-section" style={{ marginBottom: '1rem' }}>
                  <div className="section-header" style={{ background: '#f5f5f5', padding: '0.75rem', cursor: 'pointer' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem' }}></i>
                    <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0 }}>Pricing</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem 0' }}>
                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                      <label className="form-label">QUANTITY PRICING SCHEDULE</label>
                      <select className="form-control" style={{ maxWidth: '300px' }}>
                        <option value="">- Select -</option>
                      </select>
                    </div>
                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                        <input type="checkbox" />
                        USE MARGINAL RATES
                      </label>
                    </div>
                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                      <label className="form-label">CALCULATE QUANTITY DISCOUNTS</label>
                      <select className="form-control" style={{ maxWidth: '300px' }}>
                        <option>By Line Quantity</option>
                      </select>
                    </div>
                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                      <label className="form-label">PRICING GROUP</label>
                      <select className="form-control" style={{ maxWidth: '300px' }}>
                        <option value="">- Select -</option>
                      </select>
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                      <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '2px solid #e0e0e0', marginBottom: '0.5rem' }}>
                        <button style={{ padding: '0.5rem 1rem', background: '#4a90e2', color: 'white', border: 'none', fontWeight: '600', fontSize: '0.875rem' }}>SGD</button>
                        <button style={{ padding: '0.5rem 1rem', background: '#f5f5f5', color: '#333', border: 'none', fontWeight: '600', fontSize: '0.875rem' }}>CAD</button>
                        <button style={{ padding: '0.5rem 1rem', background: '#f5f5f5', color: '#333', border: 'none', fontWeight: '600', fontSize: '0.875rem' }}>EUR</button>
                        <button style={{ padding: '0.5rem 1rem', background: '#f5f5f5', color: '#333', border: 'none', fontWeight: '600', fontSize: '0.875rem' }}>GBP</button>
                        <button style={{ padding: '0.5rem 1rem', background: '#f5f5f5', color: '#333', border: 'none', fontWeight: '600', fontSize: '0.875rem' }}>INR</button>
                        <button style={{ padding: '0.5rem 1rem', background: '#f5f5f5', color: '#333', border: 'none', fontWeight: '600', fontSize: '0.875rem' }}>MYR</button>
                        <button style={{ padding: '0.5rem 1rem', background: '#f5f5f5', color: '#333', border: 'none', fontWeight: '600', fontSize: '0.875rem' }}>USD</button>
                      </div>
                      <table className="enquiries-table" style={{ fontSize: '0.875rem' }}>
                        <thead>
                          <tr>
                            <th>PRICE LEVEL</th>
                            <th>DEFAULT DISCOUNT %</th>
                            <th>QTY 0</th>
                            <th>QTY</th>
                            <th>QTY</th>
                            <th>QTY</th>
                            <th>QTY</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Default Discount %</td>
                            <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                          </tr>
                          <tr>
                            <td>Base Price</td>
                            <td></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                          </tr>
                          <tr>
                            <td>Alternate Price 1</td>
                            <td></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                          </tr>
                          <tr>
                            <td>Alternate Price 2</td>
                            <td></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                          </tr>
                          <tr>
                            <td>Alternate Price 3</td>
                            <td></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                            <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Accounting Tab - Inventory Item */}
            {activeTab === 'accounting' && itemType === 'inventory' && (
              <div>
                {/* Accounts Section */}
                <div className="detail-section" style={{ marginBottom: '1rem' }}>
                  <div className="section-header" style={{ background: '#f5f5f5', padding: '0.75rem', cursor: 'pointer' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem' }}></i>
                    <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0 }}>Accounts</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label">COGS ACCOUNT <span style={{ color: 'red' }}>*</span></label>
                        <select className="form-control">
                          <option>50100 Cost Of Sales : Material Purcha</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">QUANTITY VARIANCE ACCOUNT</label>
                        <input type="text" className="form-control" placeholder="<Type then tab>" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">ASSET ACCOUNT <span style={{ color: 'red' }}>*</span></label>
                        <select className="form-control">
                          <option>12010 Inventory : Stock on Hand</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">EXCHANGE RATE VARIANCE ACCOUNT</label>
                        <input type="text" className="form-control" placeholder="<Type then tab>" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">INCOME ACCOUNT <span style={{ color: 'red' }}>*</span></label>
                        <select className="form-control">
                          <option>40100 Sales : Sales</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">CUSTOMER RETURN VARIANCE ACCOUNT</label>
                        <input type="text" className="form-control" placeholder="<Type then tab>" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">GAIN/LOSS ACCOUNT</label>
                        <input type="text" className="form-control" placeholder="<Type then tab>" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">VENDOR RETURN VARIANCE ACCOUNT</label>
                        <input type="text" className="form-control" placeholder="<Type then tab>" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">PRICE VARIANCE ACCOUNT</label>
                        <input type="text" className="form-control" placeholder="<Type then tab>" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tax/Tariff Section */}
                <div className="detail-section" style={{ marginBottom: '1rem' }}>
                  <div className="section-header" style={{ background: '#f5f5f5', padding: '0.75rem', cursor: 'pointer' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem' }}></i>
                    <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0 }}>Tax / Tariff</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label">TAX SCHEDULE <span style={{ color: 'red' }}>*</span></label>
                        <select className="form-control">
                          <option value="">- Select -</option>
                          <option>Tax 7%</option>
                          <option>Tax 9%</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Accounting Tab - Non-Inventory Item */}
            {activeTab === 'accounting' && itemType === 'non-inventory' && (
              <div>
                {/* Accounts Section */}
                <div className="detail-section" style={{ marginBottom: '1rem' }}>
                  <div className="section-header" style={{ background: '#f5f5f5', padding: '0.75rem', cursor: 'pointer' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem' }}></i>
                    <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0 }}>Accounts</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label">CURRENCY</label>
                        <select className="form-control">
                          <option>SGD</option>
                          <option>USD</option>
                          <option>EUR</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">EXCHANGE RATE VARIANCE ACCOUNT</label>
                        <input type="text" className="form-control" placeholder="<Type then tab>" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">PRICE VARIANCE ACCOUNT</label>
                        <input type="text" className="form-control" placeholder="<Type then tab>" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">EXPENSE ACCOUNT <span style={{ color: 'red' }}>*</span></label>
                        <select className="form-control">
                          <option>50500 Cost Of Sales : Consumables</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">QUANTITY VARIANCE ACCOUNT</label>
                        <input type="text" className="form-control" placeholder="<Type then tab>" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tax/Tariff Section */}
                <div className="detail-section" style={{ marginBottom: '1rem' }}>
                  <div className="section-header" style={{ background: '#f5f5f5', padding: '0.75rem', cursor: 'pointer' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem' }}></i>
                    <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0 }}>Tax / Tariff</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label">TAX SCHEDULE <span style={{ color: 'red' }}>*</span></label>
                        <select className="form-control">
                          <option value="">- Select -</option>
                          <option>Tax 7%</option>
                          <option>Tax 9%</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Communication Tab */}
            {activeTab === 'communication' && (
              <div>
                <div className="detail-section" style={{ marginBottom: '1rem' }}>
                  <div className="section-header" style={{ background: '#f5f5f5', padding: '0.75rem', cursor: 'pointer' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem' }}></i>
                    <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0 }}>User Notes</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <button className="btn-toolbar" style={{ fontSize: '0.875rem' }}>
                        Remove all
                      </button>
                    </div>
                    <table className="enquiries-table" style={{ fontSize: '0.875rem' }}>
                      <thead>
                        <tr>
                          <th>TITLE</th>
                          <th>MEMO</th>
                          <th>DATE</th>
                          <th>TIME</th>
                          <th>TYPE</th>
                          <th>DIRECTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><input type="text" className="form-control" /></td>
                          <td></td>
                          <td>15/12/2025</td>
                          <td>5:44 pm</td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                    <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                      <button className="btn-toolbar" style={{ fontSize: '0.875rem' }}>
                        <i className="fas fa-check"></i> Add
                      </button>
                      <button className="btn-toolbar" style={{ fontSize: '0.875rem' }}>
                        <i className="fas fa-times"></i> Cancel
                      </button>
                      <button className="btn-toolbar" style={{ fontSize: '0.875rem' }}>
                        <i className="fas fa-plus"></i> Insert
                      </button>
                      <button className="btn-toolbar" style={{ fontSize: '0.875rem' }}>
                        <i className="fas fa-trash"></i> Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* System Information Tab */}
            {activeTab === 'systemInfo' && (
              <div>
                <div className="form-group">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                    <input type="checkbox" />
                    INACTIVE
                  </label>
                </div>
              </div>
            )}


          </div>
        </div>
        {/* Footer Actions */}
        <div className="detail-footer">
          <button className="btn-toolbar" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn-toolbar-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
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
