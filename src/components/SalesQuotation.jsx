import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const SalesQuotation = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      description: 'Steel Beams (Grade A)',
      quantity: 10,
      unitPrice: 120.00,
    },
    {
      id: 2,
      description: 'Marine Paint (5L)',
      quantity: 5,
      unitPrice: 85.50,
    },
  ]);

  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [formData, setFormData] = useState({
    customForm: 'Standard Quotation',
    estimateNumber: 'EST-2023-001',
    customerProject: '',
    title: '',
    date: '',
    expires: '',
    expectedClose: '',
    status: 'Draft',
    probability: '',
    memo: '',
    customerName: 'Select Customer',
    contactPerson: 'John Smith',
    email: 'contact@customer.com',
    phone: '+1 (505) 123-4567',
    salesRep: 'John Doe',
    terms: `1. Payment due within 30 days of invoice date.
2. Prices valid for 30 days from quotation date.
3. Delivery within 2 weeks after order confirmation.`,
  });

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.10;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const addItem = () => {
    setItems([...items, {
      id: Date.now(),
      description: '',
      quantity: 1,
      unitPrice: 0,
    }]);
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
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
    showToast('Quotation submitted successfully!', 'success');
  };

  const handleSaveDraft = () => {
    showToast('Draft saved successfully!', 'success');
  };

  const handleConvertToOrder = () => {
    showToast('Quotation converted to sales order!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to close this transaction? Any unsaved changes will be lost.')) {
      showToast('Transaction cancelled', 'error');
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-invoice-dollar"></i>
          <div>
            <h1>Sales Quotation</h1>
            <div className="detail-subtitle">
              <span>New Sales Quotation</span>
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
        <button className="btn-toolbar-primary" onClick={handleSubmit}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn-toolbar" onClick={handleSaveDraft}>
          <i className="fas fa-copy"></i>
          Save Draft
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print
        </button>
        <button className="btn-toolbar" onClick={handleConvertToOrder}>
          <i className="fas fa-exchange-alt"></i>
          Convert to Order
        </button>
        <div className="toolbar-dropdown" style={{ marginLeft: 'auto' }}>
          <button className="btn-toolbar">
            <i className="fas fa-cog"></i>
            Actions
            <i className="fas fa-chevron-down" style={{ marginLeft: '0.5rem', fontSize: '0.7rem' }}></i>
          </button>
        </div>
      </div>

        <div className="detail-content">
          {/* Primary Information Section */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Primary Information</h3>
            </div>
            <div className="section-body">
              <div className="detail-grid">
                <div className="detail-field">
                  <label>ESTIMATE #</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.estimateNumber}
                    onChange={(e) => handleInputChange('estimateNumber', e.target.value)}
                  />
                </div>
                <div className="detail-field">
                  <label>STATUS</label>
                  <select 
                    className="form-control"
                    value={formData.status}
                    onChange={(e) => handleInputChange('status', e.target.value)}
                  >
                    <option>Draft</option>
                    <option>Proposal</option>
                    <option>Sent</option>
                    <option>Accepted</option>
                    <option>Expired</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>CUSTOMER:PROJECT</label>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="<Type then tab>"
                    value={formData.customerProject}
                    onChange={(e) => handleInputChange('customerProject', e.target.value)}
                  />
                </div>
                <div className="detail-field">
                  <label>PROBABILITY</label>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="50.0%"
                    value={formData.probability}
                    onChange={(e) => handleInputChange('probability', e.target.value)}
                  />
                </div>
                <div className="detail-field">
                  <label>TITLE</label>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="Enter quotation title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                  />
                </div>
                <div className="detail-field">
                  <label>EXP. CLOSE</label>
                  <input 
                    type="date" 
                    className="form-control"
                    value={formData.expectedClose}
                    onChange={(e) => handleInputChange('expectedClose', e.target.value)}
                    placeholder="dd/mm/yyyy"
                  />
                </div>
                <div className="detail-field">
                  <label>EXPIRES</label>
                  <input 
                    type="date" 
                    className="form-control"
                    value={formData.expires}
                    onChange={(e) => handleInputChange('expires', e.target.value)}
                    placeholder="dd/mm/yyyy"
                  />
                </div>
                <div className="detail-field">
                  <label>MEMO</label>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="Enter memo"
                    value={formData.memo}
                    onChange={(e) => handleInputChange('memo', e.target.value)}
                  />
                </div>
                <div className="detail-field">
                  <label>CURRENCY</label>
                  <select 
                    className="form-control"
                    value={formData.currency || 'SGD'}
                    onChange={(e) => handleInputChange('currency', e.target.value)}
                  >
                    <option value="SGD">SGD - Singapore Dollar</option>
                    <option value="USD">USD - US Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                    <option value="JPY">JPY - Japanese Yen</option>
                    <option value="AUD">AUD - Australian Dollar</option>
                    <option value="CNY">CNY - Chinese Yuan</option>
                    <option value="MYR">MYR - Malaysian Ringgit</option>
                    <option value="INR">INR - Indian Rupee</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>DATE</label>
                  <input 
                    type="date" 
                    className="form-control"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    placeholder="dd/mm/yyyy"
                  />
                </div>
                <div className="detail-field">
                  <label>SALES REP</label>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="Search sales rep..."
                    value={formData.salesRep}
                    onChange={(e) => handleInputChange('salesRep', e.target.value)}
                  />
                </div>
                <div className="detail-field">
                  <label>OPPORTUNITY</label>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="To Be Generated"
                    disabled
                  />
                </div>
                <div className="detail-field">
                  <label>FORECAST TYPE</label>
                  <select className="form-control">
                    <option>Omitted</option>
                    <option>Included</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Classification Section */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Classification</h3>
            </div>
            <div className="section-body">
              <div className="detail-grid">
                <div className="detail-field">
                  <label>SUBSIDIARY</label>
                  <select className="form-control">
                    <option>Tech Onshore MEP Prefabricators Pte Ltd.</option>
                    <option>Tech Marine Offshore (S) Pte Ltd</option>
                    <option>TOM Offshore Marine Engineering Pte Ltd</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>CLASS</label>
                  <select className="form-control">
                    <option>Select...</option>
                    <option>Consumable Item</option>
                    <option>Course</option>
                    <option>Electrical</option>
                    <option>Fabrication</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>LOCATION</label>
                  <select className="form-control">
                    <option>Select...</option>
                    <option>Hong Hang Shipyard</option>
                    <option>Mega yard</option>
                    <option>Singapore (MEP)</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>DEPARTMENT</label>
                  <select className="form-control">
                    <option>Select...</option>
                    <option>TOM: Engineering</option>
                    <option>TOM: Production</option>
                    <option>TOM: Sales and Marketing</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Items</h3>
            </div>
            <div className="section-body">
              <div className="items-table-container">
                <table className="items-table">
                  <thead>
                    <tr>
                      <th style={{ width: '40%' }}>Item Description</th>
                      <th style={{ width: '15%' }}>Quantity</th>
                      <th style={{ width: '15%' }}>Unit Price</th>
                      <th style={{ width: '20%' }}>Total</th>
                      <th style={{ width: '10%' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <select 
                            className="form-control"
                            value={item.description}
                            onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                          >
                            <option value="">Select Item</option>
                            <option value="Steel Beams (Grade A)">Steel Beams (Grade A)</option>
                            <option value="Marine Paint (5L)">Marine Paint (5L)</option>
                            <option value="Concrete Mix">Concrete Mix</option>
                          </select>
                        </td>
                        <td>
                          <input 
                            type="number" 
                            className="form-control"
                            value={item.quantity}
                            onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                            min="1"
                          />
                        </td>
                        <td>
                          <input 
                            type="number" 
                            className="form-control"
                            value={item.unitPrice}
                            onChange={(e) => updateItem(item.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                            step="0.01"
                            min="0"
                          />
                        </td>
                        <td>
                          <strong>${(item.quantity * item.unitPrice).toFixed(2)}</strong>
                        </td>
                        <td>
                          <button 
                            className="item-action"
                            onClick={() => removeItem(item.id)}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <button className="btn btn-primary" onClick={addItem}>
                  <i className="fas fa-plus"></i>
                  Add Item
                </button>
              </div>

              <div className="summary-grid">
                <div className="summary-card">
                  <div className="summary-title">Subtotal</div>
                  <div className="summary-value">${calculateSubtotal().toFixed(2)}</div>
                </div>
                <div className="summary-card">
                  <div className="summary-title">Tax (10%)</div>
                  <div className="summary-value">${calculateTax().toFixed(2)}</div>
                </div>
                <div className="summary-card">
                  <div className="summary-title">Discount</div>
                  <div className="summary-value">$0.00</div>
                </div>
                <div className="summary-card" style={{ background: 'var(--gray-ultralight)' }}>
                  <div className="summary-title">Total Amount</div>
                  <div className="summary-value" style={{ color: 'var(--red-primary)' }}>${calculateTotal().toFixed(2)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Terms & Conditions</h3>
            </div>
            <div className="section-body">
              <textarea 
                className="form-control"
                rows="3"
                value={formData.terms}
                onChange={(e) => handleInputChange('terms', e.target.value)}
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="detail-footer">
            <button className="btn-toolbar" onClick={handleCancel}>
              <i className="fas fa-times"></i>
              Cancel
            </button>
            <button className="btn-toolbar-primary" onClick={handleSubmit}>
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

export default SalesQuotation;
