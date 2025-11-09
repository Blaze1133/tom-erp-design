import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EnterPurchaseOrders = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  const [formData, setFormData] = useState({
    customForm: 'TOM Purchase Order',
    vendorNumber: '',
    receiveBy: '',
    vendor: '',
    date: '2025-11-06',
    poType: 'Main',
    poNumber: 'To Be Generated',
    refPoNumber: '',
    otherComments: '',
    approvalStatus: 'Submit For Approval',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    class: '',
    location: '',
    department: 'MEP',
    countryOfOrigin: '',
    hsCode: '',
    currency: 'SGD',
    purchaseType: '',
    customCreatedFrom: '',
    exchangeRate: '1.00',
    items: []
  });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    showToast('Purchase order saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Purchase order cancelled', 'info');
    }
  };

  const handleAddItem = () => {
    const newItem = {
      id: formData.items.length + 1,
      item: '',
      quantity: 0,
      units: 'Pcs',
      description: '',
      priceLevel: 'Custom',
      rate: 0.00,
      amount: 0.00,
      taxCode: 'GST_SG-9%',
      grossAmount: 0.00,
      class: '',
      costEstimateType: 'Fixed',
      estimatedExtendedCost: 0.00
    };
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };

  // Calculation functions
  const calculateSubtotal = () => {
    return formData.items.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
  };

  const calculateTaxAmount = () => {
    return formData.items.reduce((sum, item) => {
      const amount = parseFloat(item.amount) || 0;
      const taxRate = 9.0; // 9% GST
      return sum + (amount * taxRate / 100);
    }, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTaxAmount();
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Purchase Order</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-secondary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary">
            Auto Fill
          </button>
          <button className="btn btn-secondary">
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
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label required">Custom Form</label>
              <select 
                className="form-control"
                value={formData.customForm}
                onChange={(e) => handleInputChange('customForm', e.target.value)}
              >
                <option>TOM Purchase Order</option>
                <option>Standard Drop Ship Purchase Order</option>
                <option>Standard Purchase Order</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Receive By</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.receiveBy}
                onChange={(e) => handleInputChange('receiveBy', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Vendor #</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.vendorNumber}
                onChange={(e) => handleInputChange('vendorNumber', e.target.value)}
                placeholder="Enter vendor number"
              />
            </div>
            <div className="form-group">
              <label className="form-label required">Date</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label required">Vendor</label>
              <select 
                className="form-control"
                value={formData.vendor}
                onChange={(e) => handleInputChange('vendor', e.target.value)}
              >
                <option value="">{'<Type then tab>'}</option>
                <option>RAIVY INTERNATIONAL</option>
                <option>SMARTR INTERNATIONAL PTE LTD</option>
                <option>Pacific Marine Supplies</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">PO #</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.poNumber}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">PO Type</label>
              <select 
                className="form-control"
                value={formData.poType}
                onChange={(e) => handleInputChange('poType', e.target.value)}
              >
                <option>Main</option>
                <option>Sub</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Other Comments or Special Instructions</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.otherComments}
                onChange={(e) => handleInputChange('otherComments', e.target.value)}
                placeholder="Enter comments"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Ref PO Number</label>
              <select 
                className="form-control"
                value={formData.refPoNumber}
                onChange={(e) => handleInputChange('refPoNumber', e.target.value)}
              >
                <option value="">{'<Type then tab>'}</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Approval Status</label>
              <select 
                className="form-control"
                value={formData.approvalStatus}
                onChange={(e) => handleInputChange('approvalStatus', e.target.value)}
              >
                <option>Submit For Approval</option>
                <option>Pending Approval</option>
                <option>Approved</option>
              </select>
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
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Subsidiary</label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleInputChange('subsidiary', e.target.value)}
              >
                <option value="">Select...</option>
                <option value="TOM S">Tech Offshore Marine (S) Pte Ltd - "TOM S" (ROC 200709673M)</option>
                <option value="DQ">Tech Offshore Marine (DQ) Pte Ltd - "DQ" (ROC 200704907R)</option>
                <option value="TEA">Tech Electric & Automation Pte Ltd - "TEA" (ROC 198700264M)</option>
                <option value="TMO">Tech Marine Offshore (S) Pte Ltd - "TMO" (ROC 200512260M)</option>
                <option value="SV">Tech Offshore Marine (SV) Pte Ltd - "SV" (ROC 200608955Z)</option>
                <option value="TOM">Tech Onshore MEP Prefabricators Pte Ltd - "TOM" (ROC 199507962E)</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Class</label>
              <select 
                className="form-control"
                value={formData.class}
                onChange={(e) => handleInputChange('class', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Consumable Item</option>
                <option>Course</option>
                <option>Cutting Works</option>
                <option>Electrical</option>
                <option>Fabrication</option>
                <option>Hydrotesting</option>
                <option>Installation work</option>
                <option>Manpower Supply</option>
                <option>Material Supply</option>
                <option>Module /Prefab</option>
                <option>Piping</option>
                <option>Project Works</option>
                <option>Refurbishment works</option>
                <option>Rental</option>
                <option>Repair & Referable</option>
                <option>Sale of Scrap Metal</option>
                <option>Structure</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Location</label>
              <select 
                className="form-control"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Singapore Yard</option>
                <option>Johor Facility</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label required">Department</label>
              <select 
                className="form-control"
                value={formData.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
              >
                <option>MEP</option>
                <option>Engineering</option>
                <option>Operations</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Country of Origin</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.countryOfOrigin}
                onChange={(e) => handleInputChange('countryOfOrigin', e.target.value)}
                placeholder="Enter country of origin"
              />
            </div>
            <div className="form-group">
              <label className="form-label">HS Code</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.hsCode}
                onChange={(e) => handleInputChange('hsCode', e.target.value)}
                placeholder="Enter HS code"
              />
            </div>
            <div className="form-group">
              <label className="form-label required">Currency</label>
              <select 
                className="form-control"
                value={formData.currency}
                onChange={(e) => handleInputChange('currency', e.target.value)}
              >
                <option>SGD</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Purchase Type</label>
              <select 
                className="form-control"
                value={formData.purchaseType}
                onChange={(e) => handleInputChange('purchaseType', e.target.value)}
              >
                <option value="">Select...</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Custom Created From</label>
              <select 
                className="form-control"
                value={formData.customCreatedFrom}
                onChange={(e) => handleInputChange('customCreatedFrom', e.target.value)}
              >
                <option value="">{'<Type & tab for single value>'}</option>
              </select>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Items Section */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-boxes"></i>
            Items
          </h2>
          
          <button className="add-item-btn" onClick={handleAddItem}>
            <i className="fas fa-plus"></i>
            Add Item
          </button>
          {formData.items.length > 0 ? (
            <div className="items-table-wrapper">
              <table className="detail-items-table">
                <thead>
                  <tr>
                    <th style={{width: '8%'}}>ITEM</th>
                    <th style={{width: '7%'}}>QTY</th>
                    <th style={{width: '6%'}}>UNITS</th>
                    <th style={{width: '12%'}}>DESC</th>
                    <th style={{width: '8%'}}>PRICE LEVEL</th>
                    <th style={{width: '7%'}}>RATE</th>
                    <th style={{width: '7%'}}>AMT</th>
                    <th style={{width: '8%'}}>TAX CODE</th>
                    <th style={{width: '8%'}}>GROSS AMT</th>
                    <th style={{width: '9%'}}>CLASS</th>
                    <th style={{width: '10%'}}>COST ESTIMATE TYPE</th>
                    <th style={{width: '10%'}}>EST. EXTENDED COST</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.items.map((item) => (
                    <tr key={item.id}>
                      <td><input type="text" className="table-input" defaultValue={item.item} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.quantity} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.units} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.description} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.priceLevel} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.rate} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.amount} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.taxCode} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.grossAmount} style={{width: '100%'}} /></td>
                      <td>
                        <select className="table-input" defaultValue={item.class} style={{width: '100%'}}>
                          <option value="">Select...</option>
                          <option>Consumable Item</option>
                          <option>Course</option>
                          <option>Cutting Works</option>
                          <option>Electrical</option>
                          <option>Fabrication</option>
                          <option>Hydrotesting</option>
                          <option>Installation work</option>
                          <option>Manpower Supply</option>
                          <option>Material Supply</option>
                          <option>Module /Prefab</option>
                          <option>Piping</option>
                          <option>Project Works</option>
                          <option>Refurbishment works</option>
                          <option>Rental</option>
                          <option>Repair & Referable</option>
                          <option>Sale of Scrap Metal</option>
                          <option>Structure</option>
                        </select>
                      </td>
                      <td>
                        <select className="table-input" defaultValue={item.costEstimateType} style={{width: '100%'}}>
                          <option>Fixed</option>
                          <option>Variable</option>
                          <option>Estimated</option>
                        </select>
                      </td>
                      <td><input type="number" className="table-input" defaultValue={item.estimatedExtendedCost} style={{width: '100%'}} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-items-message">
              <p>No items added yet. Click "Add Item" to start adding items to this purchase order.</p>
            </div>
          )}

          {/* Summary Grid */}
          {formData.items.length > 0 && (
            <div className="summary-grid">
              <div className="summary-card">
                <div className="summary-title">SUBTOTAL</div>
                <div className="summary-value">${calculateSubtotal().toFixed(2)}</div>
              </div>
              <div className="summary-card">
                <div className="summary-title">TAX AMOUNT</div>
                <div className="summary-value">${calculateTaxAmount().toFixed(2)}</div>
              </div>
              <div className="summary-card">
                <div className="summary-title">DISCOUNT</div>
                <div className="summary-value">$0.00</div>
              </div>
              <div className="summary-card" style={{ background: 'var(--gray-ultralight)' }}>
                <div className="summary-title">TOTAL AMOUNT</div>
                <div className="summary-value" style={{ color: 'var(--red-primary)' }}>${calculateTotal().toFixed(2)}</div>
              </div>
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
              Auto Fill
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

export default EnterPurchaseOrders;
