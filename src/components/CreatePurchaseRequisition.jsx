import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreatePurchaseRequisition = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Form state
  const [formData, setFormData] = useState({
    customForm: 'TOM Purchase Requisition Form',
    entryNo: 'To Be Generated',
    amount: 0.00,
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    refProjectNo: 'PROJ-2024-OMEGA-015',
    requestedBy: 'Sarah Chen - Engineering Manager',
    requestedType: 'Project PR',
    requireDate: '2024-11-20',
    currency: 'SGD',
    exchangeRate: 1.00,
    date: new Date().toISOString().split('T')[0],
    postingPeriod: 'Nov 2024',
    memo: 'Materials required for Project Omega - Offshore Platform Fabrication',
    status: 'Pending Submit',
    items: []
  });

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'Tech Electric & Automation Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Offshore Marine (DQ) Pte Ltd',
    'Tech Offshore Marine (s) Pte Ltd',
    'Tech Offshore Marine (SV) Pte Ltd'
  ];

  const statusOptions = [
    'Pending Submit',
    'Pending to Process PO',
    'Rejected/Cancelled',
    'Partial Ordered',
    'Fully Ordered',
    'Pending Manager Approval',
    'Pending Logistic Approval',
    'Delivered And Closed'
  ];

  const requestedTypes = [
    '- New -',
    'Project PR',
    'Department PR',
    'Enquiry PR',
    'Store Requisition'
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveRequisition = () => {
    showToast('Purchase Requisition saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to close this transaction? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-purchase-requisition');
      }
    }
  };

  const handleAddItem = () => {
    const sampleItems = [
      {
        itemCategory: 'Mechanical',
        itemCode: 'STL-PLATE-10MM',
        itemDescription: 'Stainless Steel Plate 10mm - Grade 316L',
        unitType: 'KG',
        qty: 500,
        preferredVendor: 'Steel & Metal Suppliers',
        preferredSequence: '1',
        unitPrice: 12.50,
        amount: 6250.00,
        memo: 'For offshore platform structure',
        name: 'Project Omega - Fabrication',
        department: 'Engineering',
        class: 'Material Supply'
      },
      {
        itemCategory: 'Electrical',
        itemCode: 'CABLE-MARINE-6MM',
        itemDescription: 'Marine Grade Cable 6mm² - Tinned Copper',
        unitType: 'MTR',
        qty: 1000,
        preferredVendor: 'Oceanic Engineering Supplies',
        preferredSequence: '1',
        unitPrice: 8.50,
        amount: 8500.00,
        memo: 'Electrical installation - Phase 2',
        name: 'Project Omega - Electrical',
        department: 'Engineering',
        class: 'Material Supply'
      },
      {
        itemCategory: 'Safety',
        itemCode: 'PPE-HELMET-ADV',
        itemDescription: 'Advanced Safety Helmet with Face Shield',
        unitType: 'PCS',
        qty: 25,
        preferredVendor: 'Safety Equipment Specialists',
        preferredSequence: '1',
        unitPrice: 65.00,
        amount: 1625.00,
        memo: 'Site safety requirements',
        name: 'Project Omega - Safety',
        department: 'HSE',
        class: 'Operating Expenses'
      }
    ];
    
    const itemIndex = formData.items.length % sampleItems.length;
    const newItem = {
      id: formData.items.length + 1,
      ...sampleItems[itemIndex],
      bidCreated: '',
      poQuantity: '',
      rclQuantity: ''
    };
    
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };

  const calculateSubtotal = () => {
    return formData.items.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Purchase Requisition</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-secondary" onClick={handleSaveRequisition}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-primary">
            <i className="fas fa-cog"></i>
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
              <label className="form-label">
                CUSTOM FORM <span className="required">*</span>
              </label>
              <select 
                className="form-control"
                value={formData.customForm}
                onChange={(e) => handleFormChange('customForm', e.target.value)}
              >
                <option>TOM Purchase Requisition Form</option>
                <option>Standard Purchase Requisition</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">
                CURRENCY <span className="required">*</span>
              </label>
              <select 
                className="form-control"
                value={formData.currency}
                onChange={(e) => handleFormChange('currency', e.target.value)}
              >
                <option>SGD</option>
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
                <option>INR</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">POSTING PERIOD</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.postingPeriod}
                onChange={(e) => handleFormChange('postingPeriod', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">ENTRY NO.</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.entryNo}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                EXCHANGE RATE <span className="required">*</span>
              </label>
              <input 
                type="number" 
                className="form-control"
                step="0.01"
                value={formData.exchangeRate}
                onChange={(e) => handleFormChange('exchangeRate', parseFloat(e.target.value) || 1.00)}
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
              <label className="form-label">AMOUNT</label>
              <input 
                type="number" 
                className="form-control"
                value={calculateSubtotal().toFixed(2)}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                DATE <span className="required">*</span>
              </label>
              <input 
                type="date" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleFormChange('date', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                STATUS <span className="required">*</span>
              </label>
              <select 
                className="form-control"
                value={formData.status}
                onChange={(e) => handleFormChange('status', e.target.value)}
              >
                {statusOptions.map((status, index) => (
                  <option key={index} value={status}>{status}</option>
                ))}
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
              <label className="form-label">
                SUBSIDIARY <span className="required">*</span>
              </label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleFormChange('subsidiary', e.target.value)}
              >
                <option value="">Select...</option>
                {subsidiaries.map((sub, index) => (
                  <option key={index} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">REF PROJECT NO.</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.refProjectNo}
                onChange={(e) => handleFormChange('refProjectNo', e.target.value)}
                placeholder="<Type then Tab>"
              />
            </div>
            <div className="form-group">
              <label className="form-label">APPROVAL REJECTION REMARKS</label>
              <textarea 
                className="form-control"
                rows="1"
              />
            </div>
            <div className="form-group">
              <label className="form-label">REQUESTED BY</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.requestedBy}
                onChange={(e) => handleFormChange('requestedBy', e.target.value)}
                placeholder="<Type then Tab>"
              />
            </div>
            <div className="form-group">
              <label className="form-label">REQUESTED TYPE</label>
              <select 
                className="form-control"
                value={formData.requestedType}
                onChange={(e) => handleFormChange('requestedType', e.target.value)}
              >
                {requestedTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">REQUIRE DATE</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.requireDate}
                onChange={(e) => handleFormChange('requireDate', e.target.value)}
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Items Section */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-boxes"></i>
            Lines
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
                    <th style={{width: '7%'}}>ITEM CATEGORY</th>
                    <th style={{width: '7%'}}>ITEM CODE</th>
                    <th style={{width: '10%'}}>ITEM DESCRIPTION</th>
                    <th style={{width: '5%'}}>UNIT TYPE</th>
                    <th style={{width: '5%'}}>QTY</th>
                    <th style={{width: '8%'}}>PREFERRED VENDOR</th>
                    <th style={{width: '7%'}}>PREFERRED SEQUENCE</th>
                    <th style={{width: '6%'}}>UNIT PRICE</th>
                    <th style={{width: '7%'}}>AMOUNT <span className="required">*</span></th>
                    <th style={{width: '6%'}}>BID CREATED</th>
                    <th style={{width: '8%'}}>MEMO</th>
                    <th style={{width: '6%'}}>NAME</th>
                    <th style={{width: '6%'}}>DEPARTMENT</th>
                    <th style={{width: '6%'}}>CLASS</th>
                    <th style={{width: '6%'}}>PO QUANTITY</th>
                    <th style={{width: '6%'}}>RCL QUANTITY</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.items.map((item) => (
                    <tr key={item.id}>
                      <td><input type="text" className="table-input" defaultValue={item.itemCategory} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.itemCode} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.itemDescription} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.unitType} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.qty} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.preferredVendor} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.preferredSequence} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.unitPrice} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.amount} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.bidCreated} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.memo} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.name} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.department} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.class} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.poQuantity} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.rclQuantity} style={{width: '100%'}} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-items-message">
              <p>No items added yet. Click "Add Item" to start adding items to this requisition.</p>
            </div>
          )}

          {/* Summary */}
          {formData.items.length > 0 && (
            <div style={{ marginTop: '1.5rem', textAlign: 'right', paddingRight: '1rem' }}>
              <div style={{ display: 'inline-block', minWidth: '200px' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  padding: '0.5rem 0',
                  borderBottom: '2px solid #e0e0e0',
                  fontWeight: '600'
                }}>
                  <span>TOTAL:</span>
                  <span style={{ color: '#4a90e2' }}>${calculateSubtotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Footer Actions */}
        <div className="form-section">
          <div className="footer-actions">
            <button className="btn btn-tertiary" onClick={handleCancel}>
              <i className="fas fa-times"></i>
              Cancel
            </button>
            <div>
              <button className="btn btn-secondary" onClick={handleSaveRequisition}>
                <i className="fas fa-save"></i>
                Save
              </button>
              <button className="btn btn-primary">
                <i className="fas fa-cog"></i>
                Actions
              </button>
            </div>
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

export default CreatePurchaseRequisition;
