import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const AdjustInventory = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [formData, setFormData] = useState({
    customForm: 'TOM Inventory Issue to Department',
    refNo: 'To Be Generated',
    customer: '',
    accountCode: '50100 Cost Of Sales : Material Purcha',
    estimatedTotalValue: '0.00',
    postingPeriod: '',
    date: '8/11/2025',
    memo: '',
    subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
    class: '',
    department: '',
    adjustmentLocation: '',
    requestedBy: ''
  });

  const [inventoryItems, setInventoryItems] = useState([
    {
      id: 1,
      item: '',
      displayName: '',
      description: '',
      location: '',
      units: '',
      onHand: 0,
      newQuantity: '',
      quantityAdjusted: '',
      unitCost: 0,
      binNumber: '',
      memo: '',
      serialLotNumber: '',
      expirationDate: '',
      department: '',
      class: '',
      customer: ''
    }
  ]);

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleItemChange = (id, field, value) => {
    setInventoryItems(inventoryItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleAddItem = () => {
    const newItem = {
      id: inventoryItems.length + 1,
      item: '',
      displayName: '',
      description: '',
      location: '',
      units: '',
      onHand: 0,
      newQuantity: '',
      quantityAdjusted: '',
      unitCost: 0,
      binNumber: '',
      memo: '',
      serialLotNumber: '',
      expirationDate: '',
      department: '',
      class: '',
      customer: ''
    };
    setInventoryItems([...inventoryItems, newItem]);
    showToast('New item added to table', 'success');
  };

  const handleRemoveItem = (id) => {
    if (inventoryItems.length > 1) {
      setInventoryItems(inventoryItems.filter(item => item.id !== id));
      showToast('Item removed from table', 'success');
    } else {
      showToast('Cannot remove the last item', 'error');
    }
  };

  const handleSave = () => {
    showToast('Inventory adjustment saved successfully!', 'success');
    setTimeout(() => {
      if (setCurrentPage) {
        setCurrentPage('view-inventory-adjustment-detail');
      }
    }, 1000);
  };

  const handleCancel = () => {
    if (setCurrentPage) {
      setCurrentPage('view-inventory-adjustments');
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="sales-quotation">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-box" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Inventory Issue/Adjustment</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={handleCancel}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-sync"></i>
            Actions
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
              <label className="form-label">
                CUSTOM FORM <span className="required">*</span>
              </label>
              <select 
                className="form-control"
                value={formData.customForm}
                onChange={(e) => handleFormChange('customForm', e.target.value)}
              >
                <option>TOM Inventory Issue to Department</option>
                <option>Standard Inventory Issue/Adjustment</option>
                <option>TOM Inventory Adjustment</option>
                <option>TOM Inventory Issue For the Project</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                ACCOUNT CODE <span className="required">*</span>
              </label>
              <select 
                className="form-control"
                value={formData.accountCode}
                onChange={(e) => handleFormChange('accountCode', e.target.value)}
              >
                <option>50100 Cost Of Sales : Material Purcha</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">POSTING PERIOD</label>
              <select 
                className="form-control"
                value={formData.postingPeriod}
                onChange={(e) => handleFormChange('postingPeriod', e.target.value)}
              >
                <option value="">Select...</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">REF NO.</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.refNo}
                onChange={(e) => handleFormChange('refNo', e.target.value)}
                readOnly
              />
            </div>

            <div className="form-group">
              <label className="form-label">ESTIMATED TOTAL VALUE</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.estimatedTotalValue}
                onChange={(e) => handleFormChange('estimatedTotalValue', e.target.value)}
                readOnly
              />
            </div>

            <div className="form-group">
              <label className="form-label">MEMO</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.memo}
                onChange={(e) => handleFormChange('memo', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">CUSTOMER</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.customer}
                onChange={(e) => handleFormChange('customer', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                DATE <span className="required">*</span>
              </label>
              <input 
                type="text" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleFormChange('date', e.target.value)}
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Classification */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-tags"></i>
            Classification
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">
                SUBSIDIARY <span className="required">*</span>
              </label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleFormChange('subsidiary', e.target.value)}
              >
                <option>Tech Marine Offshore (S) Pte Ltd</option>
                <option>Tech Onshore MEP Prefabricators Pte Ltd.</option>
                <option>TOM Offshore Marine Engineering Pte Ltd</option>
                <option>TOM Shipyard Pte Ltd</option>
                <option>TOM Engineering & Trading Pte Ltd</option>
                <option>TOM Industrial Services Pte Ltd</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">CLASS</label>
              <select 
                className="form-control"
                value={formData.class}
                onChange={(e) => handleFormChange('class', e.target.value)}
              >
                <option value="">Select...</option>
                <option>TOM : Projects</option>
                <option>TOM : Operations</option>
                <option>TOM : Maintenance</option>
                <option>TOM : Administration</option>
                <option>TOM : Sales</option>
                <option>TOM : Engineering</option>
                <option>TOM : Fabrication</option>
                <option>TOM : Installation</option>
                <option>TOM : Repair</option>
                <option>TOM : Consultancy</option>
                <option>TOM : Trading</option>
                <option>TOM : Services</option>
                <option>TOM : Rental</option>
                <option>TOM : Supply</option>
                <option>TOM : Support</option>
                <option>TOM : Quality Control</option>
                <option>TOM : Research & Development</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                DEPARTMENT <span className="required">*</span>
              </label>
              <select 
                className="form-control"
                value={formData.department}
                onChange={(e) => handleFormChange('department', e.target.value)}
              >
                <option value="">Select...</option>
                <option>TOM : Human Resource</option>
                <option>TOM : Finance : Internal Transfer</option>
                <option>TOM : IT</option>
                <option>TOM : Logistic</option>
                <option>TOM : Operating</option>
                <option>TOM : Purchase</option>
                <option>TOM : Sales and Marketing</option>
                <option>TOM : Security</option>
                <option>TOM : TOM INTERNALS : TOM HR</option>
                <option>TOM : Nampak Reinsure</option>
                <option>TOM : Auction Handover</option>
                <option>TOM : Engineering</option>
                <option>TOM : Production</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">ADJUSTMENT LOCATION</label>
              <select 
                className="form-control"
                value={formData.adjustmentLocation}
                onChange={(e) => handleFormChange('adjustmentLocation', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Hong Hang Shipyard</option>
                <option>Mega yard</option>
                <option>MEP MARINE CC</option>
                <option>Shipyards/Construction</option>
                <option>Singapore(MEP)</option>
                <option>TOM -11</option>
                <option>TOM External Workshop</option>
                <option>TOM – 13</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">REQUESTED BY</label>
              <select
                className="form-control"
                value={formData.requestedBy}
                onChange={(e) => handleFormChange('requestedBy', e.target.value)}
              >
                <option value="">Select Requested By</option>
                <option value="MEP01 001 JEGANATHAN SUNDARAVELU">
                  MEP01 001 JEGANATHAN SUNDARAVELU
                </option>
              </select>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Items Section */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-list-ul"></i>
            Items
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <button className="add-item-btn" onClick={handleAddItem}>
            <i className="fas fa-plus"></i>
            Add Item
          </button>

          {inventoryItems.length > 0 ? (
            <div className="items-table-wrapper">
              <table className="detail-items-table">
                <thead>
                  <tr>
                    <th style={{ width: '3%' }}>#</th>
                    <th style={{ width: '10%' }}>ITEM</th>
                    <th style={{ width: '10%' }}>DISPLAY NAME</th>
                    <th style={{ width: '12%' }}>DESCRIPTION</th>
                    <th style={{ width: '10%' }}>LOCATION</th>
                    <th style={{ width: '6%' }}>UNITS</th>
                    <th style={{ width: '7%' }}>ON HAND</th>
                    <th style={{ width: '8%' }}>NEW QUANTITY</th>
                    <th style={{ width: '8%' }}>QTY ADJUSTED</th>
                    <th style={{ width: '7%' }}>UNIT COST</th>
                    <th style={{ width: '8%' }}>BIN NUMBER</th>
                    <th style={{ width: '8%' }}>MEMO</th>
                    <th style={{ width: '3%' }}>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {inventoryItems.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input"
                          value={item.item}
                          onChange={(e) => handleItemChange(item.id, 'item', e.target.value)}
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input"
                          value={item.displayName}
                          onChange={(e) => handleItemChange(item.id, 'displayName', e.target.value)}
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input"
                          value={item.description}
                          onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <select 
                          className="table-input"
                          value={item.location}
                          onChange={(e) => handleItemChange(item.id, 'location', e.target.value)}
                          style={{ width: '100%' }}
                        >
                          <option value="">Select...</option>
                          <option>Hong Hang Shipyard</option>
                          <option>Mega yard</option>
                          <option>MEP MARINE CC</option>
                          <option>Singapore(MEP)</option>
                        </select>
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input"
                          value={item.units}
                          onChange={(e) => handleItemChange(item.id, 'units', e.target.value)}
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="table-input"
                          value={item.onHand}
                          onChange={(e) => handleItemChange(item.id, 'onHand', e.target.value)}
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="table-input"
                          value={item.newQuantity}
                          onChange={(e) => handleItemChange(item.id, 'newQuantity', e.target.value)}
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="table-input"
                          value={item.quantityAdjusted}
                          onChange={(e) => handleItemChange(item.id, 'quantityAdjusted', e.target.value)}
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="table-input"
                          value={item.unitCost}
                          onChange={(e) => handleItemChange(item.id, 'unitCost', e.target.value)}
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input"
                          value={item.binNumber}
                          onChange={(e) => handleItemChange(item.id, 'binNumber', e.target.value)}
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input"
                          value={item.memo}
                          onChange={(e) => handleItemChange(item.id, 'memo', e.target.value)}
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <button 
                          className="btn-icon-danger"
                          onClick={() => handleRemoveItem(item.id)}
                          title="Remove"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-items-message">
              <p>No items added yet. Click "Add Item" to start adding items to this adjustment.</p>
            </div>
          )}
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-secondary" onClick={handleSave}>
              <i className="fas fa-save"></i>
              Save
            </button>
            <button className="btn btn-secondary">
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

export default AdjustInventory;
