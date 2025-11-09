import React, { useState } from 'react';
import Toast from './Toast';

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
    customerName: 'Select Customer',
    contactPerson: 'John Smith',
    email: 'contact@customer.com',
    phone: '+1 (505) 123-4567',
    quotationNumber: 'QT-2023-001',
    date: '',
    validUntil: '',
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
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice-dollar" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Sales Quotation Preparation</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-secondary" onClick={handleSaveDraft}>
            <i className="fas fa-save"></i>
            Save Draft
          </button>
          <button className="btn btn-secondary" onClick={handleConvertToOrder}>
            <i className="fas fa-exchange-alt"></i>
            Convert to Order
          </button>
          <button className="btn btn-primary" onClick={handleSubmit}>
            <i className="fas fa-check"></i>
            Submit
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Customer Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-user"></i>
            Customer Information
          </h2>
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label required">Customer Name</label>
            <select 
              className="form-control"
              value={formData.customerName}
              onChange={(e) => handleInputChange('customerName', e.target.value)}
            >
              <option>Select Customer</option>
              <option>ABC Corporation</option>
              <option>XYZ Industries</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label required">Contact Person</label>
            <input 
              type="text" 
              className="form-control"
              value={formData.contactPerson}
              onChange={(e) => handleInputChange('contactPerson', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label required">Email</label>
            <input 
              type="email" 
              className="form-control"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </div>
        </div>
        <div className="form-grid" style={{ marginTop: '20px' }}>
          <div className="form-group">
            <label className="form-label">Phone</label>
            <input 
              type="tel" 
              className="form-control"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
          </div>
        </div>
      </div>

        {/* Quotation Details */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-info-circle"></i>
            Quotation Details
          </h2>
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Quotation Number</label>
            <input 
              type="text" 
              className="form-control"
              value={formData.quotationNumber}
              onChange={(e) => handleInputChange('quotationNumber', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label required">Date</label>
            <input 
              type="date" 
              className="form-control"
              value={formData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              placeholder="dd/mm/yyyy"
            />
          </div>
          <div className="form-group">
            <label className="form-label required">Valid Until</label>
            <input 
              type="date" 
              className="form-control"
              value={formData.validUntil}
              onChange={(e) => handleInputChange('validUntil', e.target.value)}
              placeholder="dd/mm/yyyy"
            />
          </div>
        </div>
        <div className="form-grid" style={{ marginTop: '20px' }}>
          <div className="form-group">
            <label className="form-label">Sales Representative</label>
            <input 
              type="text" 
              className="form-control"
              value={formData.salesRep}
              onChange={(e) => handleInputChange('salesRep', e.target.value)}
            />
          </div>
        </div>
      </div>

        {/* Items */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-boxes"></i>
            Items
          </h2>
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
        <button className="add-item-btn" onClick={addItem}>
          <i className="fas fa-plus"></i>
          Add Item
        </button>

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

        {/* Terms & Conditions */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-file-contract"></i>
            Terms & Conditions
          </h2>
        <textarea 
          className="form-control"
          rows="3"
          value={formData.terms}
          onChange={(e) => handleInputChange('terms', e.target.value)}
        />
        
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
            <button className="btn btn-secondary" onClick={handleConvertToOrder}>
              <i className="fas fa-exchange-alt"></i>
              Convert to Order
            </button>
            <button className="btn btn-primary" onClick={handleSubmit}>
              <i className="fas fa-check"></i>
              Submit
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

export default SalesQuotation;
