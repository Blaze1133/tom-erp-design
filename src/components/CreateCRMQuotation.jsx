import React, { useState } from 'react';
import './Enquiries.css';
import Toast from './Toast';

const CreateCRMQuotation = ({ onBack }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [formData, setFormData] = useState({
    quotationNumber: '',
    opportunityName: '',
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    quotationDate: '',
    validUntil: '',
    totalAmount: '',
    status: 'Draft',
    paymentTerms: '',
    deliveryTerms: '',
    subsidiary: '',
    assignedTo: '',
    revision: '1',
    notes: '',
    termsConditions: '',
    items: []
  });

  const statuses = [
    'Draft',
    'Sent',
    'Under Review',
    'Accepted',
    'Rejected',
    'Expired'
  ];

  const paymentTermsList = [
    'Net 30',
    'Net 60',
    'Net 90',
    '50% Advance, 50% on Delivery',
    'Payment on Delivery',
    'Letter of Credit'
  ];

  const deliveryTermsList = [
    'FOB',
    'CIF',
    'EXW',
    'DDP',
    'DAP'
  ];

  const salesPersons = [
    'Sarah Lee',
    'David Chen',
    'Michael Tan',
    'Lisa Wong'
  ];

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];

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
    if (!formData.opportunityName || !formData.companyName || !formData.contactPerson || !formData.email || !formData.subsidiary || !formData.totalAmount) {
      showToast('Please fill in all required fields (Opportunity Name, Company Name, Contact Person, Email, Subsidiary, Total Amount)', 'error');
      return;
    }
    showToast('Quotation created successfully!', 'success');
    setTimeout(() => {
      if (onBack) onBack();
    }, 2000);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Changes cancelled', 'info');
      if (onBack) onBack();
    }
  };

  const handleConvertToSalesEnquiry = () => {
    if (!formData.opportunityName || !formData.companyName || !formData.contactPerson || !formData.email || !formData.subsidiary || !formData.totalAmount) {
      showToast('Please fill in all required fields before converting to sales enquiry', 'error');
      return;
    }
    if (formData.status !== 'Accepted') {
      showToast('Only accepted quotations can be converted to sales enquiry', 'warning');
      return;
    }
    showToast('Quotation converted to sales enquiry successfully!', 'success');
    setTimeout(() => {
      if (onBack) onBack();
    }, 2000);
  };

  const handleAddItem = () => {
    const newItem = {
      id: formData.items.length + 1,
      description: '',
      quantity: 1,
      unitPrice: 0,
      amount: 0
    };
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };

  const handleRemoveItem = (id) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== id)
    }));
  };

  const handleItemChange = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.map(item => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value };
          if (field === 'quantity' || field === 'unitPrice') {
            updatedItem.amount = updatedItem.quantity * updatedItem.unitPrice;
          }
          return updatedItem;
        }
        return item;
      })
    }));
  };

  const calculateTotal = () => {
    return formData.items.reduce((sum, item) => sum + (item.amount || 0), 0);
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice-dollar" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Create New Quotation</h1>
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
              <label className="form-label">QUOTATION NUMBER</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.quotationNumber}
                onChange={(e) => handleInputChange('quotationNumber', e.target.value)}
                placeholder="Auto-generated"
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">OPPORTUNITY NAME <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.opportunityName}
                onChange={(e) => handleInputChange('opportunityName', e.target.value)}
                placeholder="Enter opportunity name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">COMPANY NAME <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                placeholder="Enter company name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">CONTACT PERSON <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.contactPerson}
                onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                placeholder="Enter contact person name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">PHONE</label>
              <input 
                type="tel" 
                className="form-control"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+65 XXXX XXXX"
              />
            </div>
            <div className="form-group">
              <label className="form-label">EMAIL <span className="required">*</span></label>
              <input 
                type="email" 
                className="form-control"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="contact@company.com"
              />
            </div>
            <div className="form-group">
              <label className="form-label">QUOTATION DATE</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.quotationDate}
                onChange={(e) => handleInputChange('quotationDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">VALID UNTIL</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.validUntil}
                onChange={(e) => handleInputChange('validUntil', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">TOTAL AMOUNT <span className="required">*</span></label>
              <input 
                type="number" 
                className="form-control"
                value={formData.totalAmount}
                onChange={(e) => handleInputChange('totalAmount', e.target.value)}
                placeholder="0.00"
                step="0.01"
              />
            </div>
            <div className="form-group">
              <label className="form-label">STATUS</label>
              <select 
                className="form-control"
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
              >
                {statuses.map((status, index) => (
                  <option key={index} value={status}>{status}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">PAYMENT TERMS</label>
              <select 
                className="form-control"
                value={formData.paymentTerms}
                onChange={(e) => handleInputChange('paymentTerms', e.target.value)}
              >
                <option value="">Select Payment Terms</option>
                {paymentTermsList.map((term, index) => (
                  <option key={index} value={term}>{term}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">DELIVERY TERMS</label>
              <select 
                className="form-control"
                value={formData.deliveryTerms}
                onChange={(e) => handleInputChange('deliveryTerms', e.target.value)}
              >
                <option value="">Select Delivery Terms</option>
                {deliveryTermsList.map((term, index) => (
                  <option key={index} value={term}>{term}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">SUBSIDIARY <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleInputChange('subsidiary', e.target.value)}
              >
                <option value="">Select Subsidiary</option>
                {subsidiaries.map((subsidiary, index) => (
                  <option key={index} value={subsidiary}>{subsidiary}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">ASSIGNED TO</label>
              <select 
                className="form-control"
                value={formData.assignedTo}
                onChange={(e) => handleInputChange('assignedTo', e.target.value)}
              >
                <option value="">Select Sales Person</option>
                {salesPersons.map((person, index) => (
                  <option key={index} value={person}>{person}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">REVISION</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.revision}
                onChange={(e) => handleInputChange('revision', e.target.value)}
                disabled
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Line Items */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-list"></i>
            Line Items
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <button 
            className="btn btn-secondary" 
            onClick={handleAddItem}
            style={{ marginBottom: '1rem' }}
          >
            <i className="fas fa-plus"></i>
            Add Item
          </button>

          {formData.items.length > 0 && (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                    <th style={{ padding: '12px', textAlign: 'left', width: '40%' }}>DESCRIPTION</th>
                    <th style={{ padding: '12px', textAlign: 'right', width: '15%' }}>QUANTITY</th>
                    <th style={{ padding: '12px', textAlign: 'right', width: '20%' }}>UNIT PRICE</th>
                    <th style={{ padding: '12px', textAlign: 'right', width: '20%' }}>AMOUNT</th>
                    <th style={{ padding: '12px', textAlign: 'center', width: '5%' }}>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.items.map((item) => (
                    <tr key={item.id} style={{ borderBottom: '1px solid #dee2e6' }}>
                      <td style={{ padding: '12px' }}>
                        <input 
                          type="text"
                          className="form-control"
                          value={item.description}
                          onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                          placeholder="Item description"
                        />
                      </td>
                      <td style={{ padding: '12px' }}>
                        <input 
                          type="number"
                          className="form-control"
                          value={item.quantity}
                          onChange={(e) => handleItemChange(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                          style={{ textAlign: 'right' }}
                        />
                      </td>
                      <td style={{ padding: '12px' }}>
                        <input 
                          type="number"
                          className="form-control"
                          value={item.unitPrice}
                          onChange={(e) => handleItemChange(item.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                          style={{ textAlign: 'right' }}
                          step="0.01"
                        />
                      </td>
                      <td style={{ padding: '12px', textAlign: 'right', fontWeight: '600' }}>
                        ${item.amount.toFixed(2)}
                      </td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>
                        <button 
                          className="btn btn-secondary"
                          onClick={() => handleRemoveItem(item.id)}
                          style={{ padding: '4px 8px', fontSize: '12px' }}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr style={{ backgroundColor: '#f8f9fa', fontWeight: '600' }}>
                    <td colSpan="3" style={{ padding: '12px', textAlign: 'right' }}>TOTAL:</td>
                    <td style={{ padding: '12px', textAlign: 'right' }}>${calculateTotal().toFixed(2)}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Additional Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-sticky-note"></i>
            Additional Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">NOTES</label>
              <textarea 
                className="form-control"
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                placeholder="Add any additional notes..."
                rows="4"
              />
            </div>
            <div className="form-group">
              <label className="form-label">TERMS & CONDITIONS</label>
              <textarea 
                className="form-control"
                value={formData.termsConditions}
                onChange={(e) => handleInputChange('termsConditions', e.target.value)}
                placeholder="Enter terms and conditions..."
                rows="4"
              />
            </div>
          </div>
        </div>

        {/* Convert to Sales Enquiry Section */}
        <div style={{ 
          marginTop: '2rem', 
          padding: '1.5rem', 
          backgroundColor: '#f8f9fa', 
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '16px', fontWeight: '600' }}>
              <i className="fas fa-file-alt" style={{ marginRight: '8px', color: '#17a2b8' }}></i>
              Ready to Create Sales Enquiry?
            </h3>
            <p style={{ margin: 0, fontSize: '14px', color: '#6c757d' }}>
              Convert this accepted quotation to a sales enquiry to begin the sales process.
            </p>
          </div>
          <button 
            className="btn btn-primary" 
            onClick={handleConvertToSalesEnquiry}
            style={{ 
              padding: '12px 24px',
              fontSize: '15px',
              fontWeight: '600',
              whiteSpace: 'nowrap'
            }}
          >
            <i className="fas fa-arrow-right" style={{ marginRight: '8px' }}></i>
            Convert to Sales Enquiry
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

export default CreateCRMQuotation;
