import React, { useState } from 'react';
import Toast from './Toast';

const SalesOrder = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      item: 'Steel Beams (Grade A)',
      quantity: 10,
      units: 'Pieces',
      description: '',
      priceLevel: 'Standard',
      rate: 120.00,
      amount: 0.00,
      taxCode: 'GST_SG-9%',
      grossAmount: 0.00,
      class: '',
      costEstimateType: 'Fixed',
      estimatedExtendedCost: 0.00
    },
  ]);

  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [formData, setFormData] = useState({
    // Primary Information
    customForm: 'TOM Performa Invoice',
    orderNumber: 'To Be Generated',
    customerProject: '',
    date: '',
    status: 'Pending Approval',
    startDate: '',
    endDate: '',
    poNumber: '',
    memo: '',
    
    // Sales Information
    salesRep: '',
    opportunity: '',
    salesEffectiveDate: '',
    
    // Classification
    subsidiary: '',
    class: '',
    location: '',
    department: '',
    forInvoiceGrouping: false,
    approvalStatus: 'Submit For Approval',
    contactPerson: '',
    countryOfOrigin: '',
    hsCode: '',
  });

  const calculateAmount = (item) => {
    return item.quantity * item.rate;
  };

  const calculateTaxAmount = (item) => {
    const amount = calculateAmount(item);
    return amount * 0.10; // 10% tax
  };

  const calculateGrossAmount = (item) => {
    return calculateAmount(item) + calculateTaxAmount(item);
  };

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
  };

  const calculateTotalTax = () => {
    return items.reduce((sum, item) => {
      const amount = parseFloat(item.amount) || 0;
      const taxRate = 9.0; // 9% GST
      return sum + (amount * taxRate / 100);
    }, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTotalTax();
  };

  const addItem = () => {
    setItems([...items, {
      id: Date.now(),
      item: '',
      quantity: 1,
      units: 'Pcs',
      description: '',
      priceLevel: 'Custom',
      rate: 0,
      amount: 0.00,
      taxCode: 'GST_SG-9%',
      grossAmount: 0.00,
      class: '',
      costEstimateType: 'Fixed',
      estimatedExtendedCost: 0.00
    }]);
  };

  const removeItem = (id) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id, field, value) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleSubmit = () => {
    showToast('Sales Order submitted successfully!', 'success');
  };

  const handleSaveDraft = () => {
    showToast('Draft saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to close this transaction? Any unsaved changes will be lost.')) {
      showToast('Transaction cancelled', 'error');
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-shopping-cart" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Enter Sales Order</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Close Transaction
          </button>
            <button className="btn btn-secondary" onClick={handleSaveDraft}>
              <i className="fas fa-save"></i>
              Save Draft
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-exchange-alt"></i>
              Convert to Invoice
            </button>
            <button className="btn btn-primary" onClick={handleSubmit}>
              <i className="fas fa-check"></i>
              Submit
            </button>
        </div>
      </div>

      <div className="form-container">
        {/* Primary Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-info-circle"></i>
            Primary Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0' }} />
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label required">Custom Form</label>
              <select 
                className="form-control"
                value={formData.customForm}
                onChange={(e) => handleInputChange('customForm', e.target.value)}
              >
                <option>TOM Performa Invoice</option>
                <option>Standard Sales Order</option>
                <option>TOM Service Order</option>
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
              <label className="form-label">Order #</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.orderNumber}
                readOnly
                placeholder="To Be Generated"
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
            <div className="form-group">
              <label className="form-label required">Customer:Project</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.customerProject}
                onChange={(e) => handleInputChange('customerProject', e.target.value)}
                placeholder="<Type then tab>"
              />
            </div>
            <div className="form-group">
              <label className="form-label">PO #</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.poNumber}
                onChange={(e) => handleInputChange('poNumber', e.target.value)}
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
              />
            </div>
            <div className="form-group">
              <label className="form-label required">Status</label>
              <select 
                className="form-control"
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
              >
                <option>Pending Approval</option>
                <option>Approved</option>
                <option>Rejected</option>
                <option>In Progress</option>
              </select>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Sales Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-briefcase"></i>
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
                <option>TEA0021 Subbiah</option>
                <option>TEA0022 John Tan</option>
                <option>TEA0023 Mary Lim</option>
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
                <option>Marine Project 2024</option>
                <option>Offshore Platform Build</option>
                <option>Ship Repair Contract</option>
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
                <option>Batam Workshop</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label required">Department</label>
              <select 
                className="form-control"
                value={formData.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Sales</option>
                <option>Engineering</option>
                <option>Operations</option>
                <option>MEP</option>
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
                <option>Rejected</option>
              </select>
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
                <option>Mike Johnson</option>
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

        {/* Items Table */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-boxes"></i>
            Items
          </h2>
          <div className="items-table-wrapper">
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th style={{width: '10%'}}>ITEM</th>
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
                  <th style={{width: '8%'}}>EST. EXTENDED COST</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td><input type="text" className="table-input" value={item.item} onChange={(e) => updateItem(item.id, 'item', e.target.value)} style={{width: '100%'}} /></td>
                    <td><input type="number" className="table-input" value={item.quantity} onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)} style={{width: '100%'}} /></td>
                    <td><input type="text" className="table-input" value={item.units} onChange={(e) => updateItem(item.id, 'units', e.target.value)} style={{width: '100%'}} /></td>
                    <td><input type="text" className="table-input" value={item.description} onChange={(e) => updateItem(item.id, 'description', e.target.value)} style={{width: '100%'}} /></td>
                    <td><input type="text" className="table-input" value={item.priceLevel} onChange={(e) => updateItem(item.id, 'priceLevel', e.target.value)} style={{width: '100%'}} /></td>
                    <td><input type="number" className="table-input" value={item.rate} onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)} style={{width: '100%'}} /></td>
                    <td><input type="number" className="table-input" value={item.amount} onChange={(e) => updateItem(item.id, 'amount', parseFloat(e.target.value) || 0)} style={{width: '100%'}} /></td>
                    <td><input type="text" className="table-input" value={item.taxCode} onChange={(e) => updateItem(item.id, 'taxCode', e.target.value)} style={{width: '100%'}} /></td>
                    <td><input type="number" className="table-input" value={item.grossAmount} onChange={(e) => updateItem(item.id, 'grossAmount', parseFloat(e.target.value) || 0)} style={{width: '100%'}} /></td>
                    <td>
                      <select className="table-input" value={item.class} onChange={(e) => updateItem(item.id, 'class', e.target.value)} style={{width: '100%'}}>
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
                      <select className="table-input" value={item.costEstimateType} onChange={(e) => updateItem(item.id, 'costEstimateType', e.target.value)} style={{width: '100%'}}>
                        <option>Fixed</option>
                        <option>Variable</option>
                        <option>Estimated</option>
                      </select>
                    </td>
                    <td><input type="number" className="table-input" value={item.estimatedExtendedCost} onChange={(e) => updateItem(item.id, 'estimatedExtendedCost', parseFloat(e.target.value) || 0)} style={{width: '100%'}} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="add-item-btn" onClick={addItem}>
            <i className="fas fa-plus"></i>
            Add Item
          </button>

          {/* Summary Grid */}
          {items.length > 0 && (
            <div className="summary-grid">
              <div className="summary-card">
                <div className="summary-title">SUBTOTAL</div>
                <div className="summary-value">${calculateSubtotal().toFixed(2)}</div>
              </div>
              <div className="summary-card">
                <div className="summary-title">TAX AMOUNT</div>
                <div className="summary-value">${calculateTotalTax().toFixed(2)}</div>
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

        {/* Footer Actions */}
        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Close Transaction
          </button>
          <div>
            <button className="btn btn-secondary" onClick={handleSaveDraft}>
              <i className="fas fa-save"></i>
              Save Draft
            </button>
            <button className="btn btn-secondary" onClick={() => showToast('Converting to invoice...', 'info')}>
              <i className="fas fa-exchange-alt"></i>
              Convert to Invoice
            </button>
            <button className="btn btn-primary" onClick={handleSubmit}>
              <i className="fas fa-check"></i>
              Submit
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

export default SalesOrder;
