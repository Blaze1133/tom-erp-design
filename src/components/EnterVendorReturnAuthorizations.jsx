import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EnterVendorReturnAuthorizations = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  const [formData, setFormData] = useState({
    customForm: 'TOM Vendor Return Authorization',
    referenceNo: 'To Be Generated',
    date: '2025-11-06',
    tax: '',
    vendor: '',
    amount: '',
    vatRegistration: '',
    status: 'Pending Approval',
    currency: 'SGD',
    memo: '',
    exchangeRate: '1.00',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    class: '',
    location: '',
    department: 'MEP',
    purchaseType: '',
    materialSpecification: '',
    customCreatedFrom: '',
    expenses: []
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
    showToast('Vendor return authorization saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Vendor return authorization cancelled', 'info');
    }
  };

  const handleAddExpense = () => {
    const newExpense = {
      id: formData.expenses.length + 1,
      account: '',
      amount: 0.00,
      taxCode: '',
      taxRate: '',
      taxAmount: 0.00,
      grossAmount: 0.00,
      memo: '',
      department: '',
      class: '',
      location: '',
      customer: '',
      billable: false
    };
    setFormData(prev => ({
      ...prev,
      expenses: [...prev.expenses, newExpense]
    }));
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-undo" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Vendor Return Authorization</h1>
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
            Recall
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
                <option>TOM Vendor Return Authorization</option>
                <option>Standard Vendor Return</option>
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
              <label className="form-label">Reference No.</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.referenceNo}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">Tax</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.tax}
                onChange={(e) => handleInputChange('tax', e.target.value)}
                placeholder="Enter tax"
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
                <option>EASTERN SEALAND SUPPLY PTE LTD</option>
                <option>TOKIO MARINE INSURANCE SINGAPORE LTD.</option>
                <option>BEN'S EXPRESS ENGINEERING PTE LTD</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Amount</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.amount}
                onChange={(e) => handleInputChange('amount', e.target.value)}
                placeholder="0.00"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Status</label>
              <select 
                className="form-control"
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
              >
                <option>Pending Approval</option>
                <option>Approved</option>
                <option>Rejected</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">GST Registration</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.vatRegistration}
                onChange={(e) => handleInputChange('vatRegistration', e.target.value)}
                placeholder="Enter GST registration"
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
              <label className="form-label required">Exchange Rate</label>
              <input 
                type="number" 
                className="form-control"
                step="0.01"
                value={formData.exchangeRate}
                onChange={(e) => handleInputChange('exchangeRate', e.target.value)}
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
              <label className="form-label">Material Specification</label>
              <select 
                className="form-control"
                value={formData.materialSpecification}
                onChange={(e) => handleInputChange('materialSpecification', e.target.value)}
              >
                <option value="">Select...</option>
                <option>- New -</option>
                <option>GST BEHALF OF</option>
                <option>Material Specification</option>
                <option>test2</option>
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

        {/* Expenses & Items */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-receipt"></i>
            Expenses
          </h2>
          
          <button className="add-item-btn" onClick={handleAddExpense}>
            <i className="fas fa-plus"></i>
            Add Expense
          </button>
          {formData.expenses.length > 0 ? (
            <div className="items-table-wrapper">
              <table className="detail-items-table">
                <thead>
                  <tr>
                    <th style={{width: '12%'}}>ACCOUNT</th>
                    <th style={{width: '8%'}}>AMOUNT</th>
                    <th style={{width: '8%'}}>TAX CODE</th>
                    <th style={{width: '7%'}}>TAX RATE</th>
                    <th style={{width: '8%'}}>TAX AMT</th>
                    <th style={{width: '8%'}}>GROSS AMT</th>
                    <th style={{width: '12%'}}>MEMO</th>
                    <th style={{width: '10%'}}>DEPARTMENT</th>
                    <th style={{width: '9%'}}>CLASS</th>
                    <th style={{width: '9%'}}>LOCATION</th>
                    <th style={{width: '9%'}}>CUSTOMER</th>
                    <th style={{width: '6%'}}>BILLABLE</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.expenses.map((expense) => (
                    <tr key={expense.id}>
                      <td>
                        <select className="table-input" style={{width: '100%'}}>
                          <option value="">{'<Type then tab>'}</option>
                        </select>
                      </td>
                      <td><input type="number" className="table-input" style={{width: '100%'}} step="0.01" /></td>
                      <td><input type="text" className="table-input" style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" style={{width: '100%'}} step="0.01" /></td>
                      <td><input type="number" className="table-input" style={{width: '100%'}} step="0.01" /></td>
                      <td><input type="text" className="table-input" style={{width: '100%'}} /></td>
                      <td>
                        <select className="table-input" style={{width: '100%'}}>
                          <option value="">Select...</option>
                          <option>MEP</option>
                          <option>Engineering</option>
                          <option>Operations</option>
                        </select>
                      </td>
                      <td>
                        <select className="table-input" style={{width: '100%'}}>
                          <option value="">Select...</option>
                          <option>Consumable Item</option>
                          <option>Material Supply</option>
                          <option>Fabrication</option>
                        </select>
                      </td>
                      <td>
                        <select className="table-input" style={{width: '100%'}}>
                          <option value="">Select...</option>
                          <option>Singapore Yard</option>
                          <option>Johor Facility</option>
                        </select>
                      </td>
                      <td><input type="text" className="table-input" style={{width: '100%'}} /></td>
                      <td style={{textAlign: 'center'}}>
                        <input type="checkbox" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-items-message">
              <p>No expenses added yet. Click "Add Expense" to start adding expenses.</p>
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
              Recall
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

export default EnterVendorReturnAuthorizations;
