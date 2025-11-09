import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ItemReceipt = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  const [formData, setFormData] = useState({
    customForm: 'TOM Item Receipt',
    referenceNumber: 'To Be Generated',
    date: '2025-11-06',
    vendor: 'LOH & SONS PAINT CO. (S) PTE. LTD',
    postingPeriod: 'Nov 2025',
    createdFrom: 'Purchase Order #POTOM00141',
    memo: '',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    currency: 'SGD',
    countryOfOrigin: '',
    hsCode: '',
    exchangeRate: '1.00',
    items: [
      {
        id: 1,
        receive: true,
        item: 'Galvanizing Spray',
        vendorName: 'LOH & SONS PAINT CO.',
        description: 'Cold galvanized zink spray, couger brands',
        toLocation: 'TOM-11',
        onHand: 0,
        remaining: 48,
        quantity: 48,
        units: 'Pcs',
        options: '',
        rate: 8.56,
        currency: 'SGD',
        doQuantity: ''
      }
    ]
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
    showToast('Item receipt saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Item receipt cancelled', 'info');
    }
  };

  const handleAddItem = () => {
    const newItem = {
      id: formData.items.length + 1,
      receive: false,
      item: '',
      vendorName: '',
      description: '',
      toLocation: '',
      onHand: 0,
      remaining: 0,
      quantity: 0,
      units: 'Pcs',
      options: '',
      rate: 0.00,
      currency: 'SGD',
      doQuantity: ''
    };
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };

  const handleCheckboxChange = (itemId, checked) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.map(item => 
        item.id === itemId ? { ...item, receive: checked } : item
      )
    }));
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-box-open" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Item Receipt</h1>
          <span style={{ marginLeft: '10px', color: '#666', fontSize: '14px' }}>To Be Generated</span>
        </div>
        <div className="page-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
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
                <option>TOM Item Receipt</option>
                <option>Standard Item Receipt</option>
              </select>
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
              <label className="form-label">Reference #</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.referenceNumber}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">Posting Period</label>
              <select 
                className="form-control"
                value={formData.postingPeriod}
                onChange={(e) => handleInputChange('postingPeriod', e.target.value)}
              >
                <option>Nov 2025</option>
                <option>Dec 2025</option>
                <option>Jan 2026</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Vendor</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.vendor}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">Memo</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.memo}
                onChange={(e) => handleInputChange('memo', e.target.value)}
                placeholder="Enter memo"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Created From</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.createdFrom}
                disabled
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
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Subsidiary</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.subsidiary}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">Currency</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.currency}
                disabled
              />
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
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Items & Expenses */}
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
                    <th style={{width: '5%'}}>RECEIVE</th>
                    <th style={{width: '10%'}}>ITEM</th>
                    <th style={{width: '10%'}}>VENDOR NAME</th>
                    <th style={{width: '15%'}}>DESC</th>
                    <th style={{width: '8%'}}>TO LOCATION</th>
                    <th style={{width: '6%'}}>ON HAND</th>
                    <th style={{width: '7%'}}>REMAINING</th>
                    <th style={{width: '6%'}}>QTY</th>
                    <th style={{width: '6%'}}>UNITS</th>
                    <th style={{width: '8%'}}>OPTIONS</th>
                    <th style={{width: '7%'}}>RATE</th>
                    <th style={{width: '6%'}}>CURRENCY</th>
                    <th style={{width: '6%'}}>DO QUANTITY</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.items.map((item) => (
                    <tr key={item.id}>
                      <td style={{textAlign: 'center'}}>
                        <input 
                          type="checkbox" 
                          checked={item.receive} 
                          onChange={(e) => handleCheckboxChange(item.id, e.target.checked)}
                        />
                      </td>
                      <td><input type="text" className="table-input" defaultValue={item.item} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.vendorName} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.description} style={{width: '100%'}} /></td>
                      <td>
                        <select className="table-input" defaultValue={item.toLocation} style={{width: '100%'}}>
                          <option value="">Select...</option>
                          <option>TOM-11</option>
                          <option>TOM-12</option>
                          <option>Warehouse A</option>
                          <option>Warehouse B</option>
                        </select>
                      </td>
                      <td><input type="number" className="table-input" defaultValue={item.onHand} style={{width: '100%'}} disabled /></td>
                      <td><input type="number" className="table-input" defaultValue={item.remaining} style={{width: '100%'}} disabled /></td>
                      <td><input type="number" className="table-input" defaultValue={item.quantity} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.units} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.options} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.rate} style={{width: '100%'}} step="0.01" /></td>
                      <td><input type="text" className="table-input" defaultValue={item.currency} style={{width: '100%'}} disabled /></td>
                      <td><input type="text" className="table-input" defaultValue={item.doQuantity} style={{width: '100%'}} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-items-message">
              <p>No items added yet. Click "Add Item" to start adding items to this receipt.</p>
            </div>
          )}
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-primary" onClick={handleSave}>
              <i className="fas fa-save"></i>
              Save
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

export default ItemReceipt;
