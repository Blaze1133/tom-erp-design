import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateInvoice = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  const [formData, setFormData] = useState({
    customForm: 'TOM Service Invoice',
    invoiceNumber: 'To Be Generated',
    postingPeriod: 'Nov 2025',
    customerProject: '',
    dueDate: '',
    poNumber: '',
    date: '2025-11-06',
    memo: '',
    startDate: '',
    contactPerson: '',
    endDate: '',
    salesRep: '',
    opportunity: '',
    salesEffectiveDate: '',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    class: '',
    location: '',
    department: 'MEP',
    countryOfOrigin: '',
    hsCode: '',
    forInvoiceGrouping: false,
    items: []
  });

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
    showToast('Invoice saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Invoice cancelled', 'info');
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

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Invoice</h1>
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
                <option>TOM Service Invoice</option>
                <option>TOM Debit Note</option>
                <option>TOM Jurong Port Service Invoice</option>
                <option>TOM Letterhead Invoice</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label required">Posting Period</label>
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
              <label className="form-label">Invoice #</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.invoiceNumber}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">Due Date</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.dueDate}
                onChange={(e) => handleInputChange('dueDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label required">Customer:Project</label>
              <select 
                className="form-control"
                value={formData.customerProject}
                onChange={(e) => handleInputChange('customerProject', e.target.value)}
              >
                <option value="">{'<Type then tab>'}</option>
                <option>Pacific Shipping Ltd : Marine Equipment Supply</option>
                <option>Oceanic Engineering Pte Ltd : Offshore Platform</option>
                <option>Marine Construction Co : Fabrication Services</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">PO #</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.poNumber}
                onChange={(e) => handleInputChange('poNumber', e.target.value)}
                placeholder="Enter PO Number"
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
              <label className="form-label">Contact Person</label>
              <select 
                className="form-control"
                value={formData.contactPerson}
                onChange={(e) => handleInputChange('contactPerson', e.target.value)}
              >
                <option value="">Select...</option>
                <option>John Smith</option>
                <option>Jane Doe</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Start Date</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.startDate}
                onChange={(e) => handleInputChange('startDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">End Date</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.endDate}
                onChange={(e) => handleInputChange('endDate', e.target.value)}
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Sales Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-chart-line"></i>
            Sales Information
          </h2>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Sales Rep</label>
              <select 
                className="form-control"
                value={formData.salesRep}
                onChange={(e) => handleInputChange('salesRep', e.target.value)}
              >
                <option value="">Select...</option>
                <option>John Anderson</option>
                <option>Sarah Chen</option>
                <option>Michael Wong</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Opportunity</label>
              <select 
                className="form-control"
                value={formData.opportunity}
                onChange={(e) => handleInputChange('opportunity', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Q4 Marine Project</option>
                <option>Offshore Expansion</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Sales Effective Date</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.salesEffectiveDate}
                onChange={(e) => handleInputChange('salesEffectiveDate', e.target.value)}
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
              <label className="form-label required">Subsidiary</label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleInputChange('subsidiary', e.target.value)}
              >
                <option>Tech Onshore MEP Prefabricators Pte Ltd.</option>
                <option>TOM Singapore</option>
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
                <option>Marine Engineering</option>
                <option>Offshore Services</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label required">Location</label>
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
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input 
                  type="checkbox" 
                  checked={formData.forInvoiceGrouping}
                  onChange={(e) => handleInputChange('forInvoiceGrouping', e.target.checked)}
                />
                For Invoice Grouping
              </label>
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
              <p>No items added yet. Click "Add Item" to start adding items to this invoice.</p>
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

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

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

export default CreateInvoice;
