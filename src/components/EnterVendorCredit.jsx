import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EnterVendorCredit = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('items');

  const [formData, setFormData] = useState({
    customForm: 'TOM Vendor Credit',
    transactionNumber: 'To Be Generated',
    referenceNo: '',
    vendor: '',
    account: '20010 Accounts Pa... Trade Creditors',
    amount: '',
    tax: 0.00,
    createdFrom: '',
    dueDate: '',
    currency: 'SGD',
    exchangeRate: 1.00,
    vatRegistration: '',
    date: '2025-07-11',
    postingPeriod: 'Jan 2021',
    memo: '',
    subsidiary: '',
    purchaseType: '',
    approvalStatus: 'Submit For Approval',
    materialSpecification: '',
    customCreatedFrom: '',
    // Billing tab
    vendor: '',
    vendorSelect: '',
    // Relationships tab
    contacts: [],
    // Communication tab
    toBePrinted: false,
    events: [],
    // Custom tab
    materialType: '',
    testTransactionField: '',
    doRecordCreated: false,
    gstType: '',
    // Tax Reporting tab
    referenceNoOriginalInvoice: '',
    // Supplier Received Items tab
    receivedItems: []
  });

  const [expenseLines, setExpenseLines] = useState([
    {
      id: 1,
      account: '',
      amount: '',
      taxCode: '',
      taxRate: '',
      taxAmt: '',
      grossAmt: '',
      memo: '',
      department: '',
      class: '',
      location: '',
      customer: '',
      billable: ''
    }
  ]);

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddExpenseLine = () => {
    setExpenseLines([...expenseLines, {
      id: expenseLines.length + 1,
      account: '',
      amount: '',
      taxCode: '',
      taxRate: '',
      taxAmt: '',
      grossAmt: '',
      memo: '',
      department: '',
      class: '',
      location: '',
      customer: '',
      billable: ''
    }]);
  };

  const handleRemoveExpenseLine = (id) => {
    if (expenseLines.length > 1) {
      setExpenseLines(expenseLines.filter(line => line.id !== id));
    }
  };

  const handleExpenseLineChange = (id, field, value) => {
    setExpenseLines(expenseLines.map(line => 
      line.id === id ? { ...line, [field]: value } : line
    ));
  };

  const handleSave = () => {
    showToast('Vendor credit saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-vendor-credits');
      }
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Bill Credit</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn-secondary">
            Recalc
          </button>
          <button className="btn btn-secondary">
            Actions
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information */}
        <div style={{ 
          background: 'white', 
          borderRadius: '8px', 
          padding: '24px',
          marginBottom: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: '16px', 
            fontWeight: '600', 
            color: '#333', 
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <i className="fas fa-info-circle" style={{ color: '#4a90e2' }}></i>
            Primary Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0 0 20px 0' }} />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px 30px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Custom Form <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <select 
                className="form-control"
                value={formData.customForm}
                onChange={(e) => handleFormChange('customForm', e.target.value)}
              >
                <option>TOM Vendor Credit</option>
                <option>Standard Vendor Credit</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Amount</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.amount}
                onChange={(e) => handleFormChange('amount', e.target.value)}
                step="0.01"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Tax</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.tax}
                onChange={(e) => handleFormChange('tax', e.target.value)}
                step="0.01"
                readOnly
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Transaction Number</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.transactionNumber}
                onChange={(e) => handleFormChange('transactionNumber', e.target.value)}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Created From</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.createdFrom}
                onChange={(e) => handleFormChange('createdFrom', e.target.value)}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Due Date</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.dueDate}
                onChange={(e) => handleFormChange('dueDate', e.target.value)}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Reference No.</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.referenceNo}
                onChange={(e) => handleFormChange('referenceNo', e.target.value)}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Currency <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <select 
                className="form-control"
                value={formData.currency}
                onChange={(e) => handleFormChange('currency', e.target.value)}
              >
                <option>SGD</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Date <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <input 
                type="date" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleFormChange('date', e.target.value)}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Vendor <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <input 
                type="text" 
                className="form-control"
                value={formData.vendor}
                onChange={(e) => handleFormChange('vendor', e.target.value)}
                placeholder="<Type then tab>"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Exchange Rate <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <input 
                type="number" 
                className="form-control"
                value={formData.exchangeRate}
                onChange={(e) => handleFormChange('exchangeRate', e.target.value)}
                step="0.01"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Posting Period <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <select 
                className="form-control"
                value={formData.postingPeriod}
                onChange={(e) => handleFormChange('postingPeriod', e.target.value)}
              >
                <option>Jan 2021</option>
                <option>Feb 2021</option>
                <option>Mar 2021</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Account</label>
              <select 
                className="form-control"
                value={formData.account}
                onChange={(e) => handleFormChange('account', e.target.value)}
              >
                <option>20010 Accounts Pa... Trade Creditors</option>
                <option>20020 Accounts Payable - Other</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>VAT Registration</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.vatRegistration}
                onChange={(e) => handleFormChange('vatRegistration', e.target.value)}
              />
            </div>

            <div style={{ gridColumn: 'span 3' }}>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Memo</label>
              <textarea 
                className="form-control"
                value={formData.memo}
                onChange={(e) => handleFormChange('memo', e.target.value)}
                rows="2"
              />
            </div>
          </div>
        </div>

        {/* Classification */}
        <div style={{ 
          background: 'white', 
          borderRadius: '8px', 
          padding: '24px',
          marginTop: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: '16px', 
            fontWeight: '600', 
            color: '#333', 
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <i className="fas fa-tags" style={{ color: '#4a90e2' }}></i>
            Classification
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0 0 20px 0' }} />
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Subsidiary <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleFormChange('subsidiary', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Tech Offshore Marine (SV) Pte Ltd</option>
                <option>Tech Onshore MEP Prefabricators Pte Ltd.</option>
                <option>Tech Electric & Automation Pte Ltd</option>
                <option>Tech Marine Offshore (S) Pte Ltd</option>
                <option>Tech Offshore Marine (DQ) Pte Ltd</option>
                <option>Tech Offshore Marine (s) Pte Ltd</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Approval Status
              </label>
              <select 
                className="form-control"
                value={formData.approvalStatus}
                onChange={(e) => handleFormChange('approvalStatus', e.target.value)}
              >
                <option>Submit For Approval</option>
                <option>Pending Approval</option>
                <option>Approved</option>
                <option>Rejected</option>
                <option>Submitted To Client</option>
                <option>Updated to Sales Team</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Custom Created From
              </label>
              <input 
                type="text" 
                className="form-control"
                value={formData.customCreatedFrom}
                onChange={(e) => handleFormChange('customCreatedFrom', e.target.value)}
                placeholder="<Type & tab for single value>"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Purchase Type
              </label>
              <select 
                className="form-control"
                value={formData.purchaseType}
                onChange={(e) => handleFormChange('purchaseType', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Critical</option>
                <option>Non Critical</option>
              </select>
            </div>

            <div style={{ gridColumn: 'span 2' }}></div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Material Specification
              </label>
              <select 
                className="form-control"
                value={formData.materialSpecification}
                onChange={(e) => handleFormChange('materialSpecification', e.target.value)}
              >
                <option value="">Select...</option>
                <option>GST BEHALF OF</option>
                <option>Material Specification</option>
                <option>test2</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tabbed Interface */}
        <div className="detail-tabs" style={{ marginTop: '2rem' }}>
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'items' ? 'active' : ''}`} onClick={() => setActiveTab('items')}>Items</button>
            <button className={`tab-btn ${activeTab === 'billing' ? 'active' : ''}`} onClick={() => setActiveTab('billing')}>Billing</button>
            <button className={`tab-btn ${activeTab === 'relationships' ? 'active' : ''}`} onClick={() => setActiveTab('relationships')}>Relationships</button>
            <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>Communication</button>
            <button className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`} onClick={() => setActiveTab('custom')}>Custom</button>
            <button className={`tab-btn ${activeTab === 'taxReporting' ? 'active' : ''}`} onClick={() => setActiveTab('taxReporting')}>Tax Reporting</button>
            <button className={`tab-btn ${activeTab === 'supplierReceived' ? 'active' : ''}`} onClick={() => setActiveTab('supplierReceived')}>Supplier Received Items</button>
          </div>

          {/* Items Tab */}
          {activeTab === 'items' && (
            <div className="tab-content">
              <div className="form-section">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', fontWeight: '600' }}>
                    <span>UNAPPLIED</span>
                    <span>0.00</span>
                    <span style={{ marginLeft: '2rem' }}>APPLIED</span>
                    <span>0.00</span>
                    <label style={{ marginLeft: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input type="checkbox" />
                      AUTO APPLY
                    </label>
                  </div>
                </div>
                <div style={{ marginBottom: '1rem', fontSize: '0.875rem', fontWeight: '600', color: '#333' }}>
                  Expenses 0.00 &nbsp;&nbsp; Items 0.00 &nbsp;&nbsp; Apply 0.00 ▼
                </div>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setExpenseLines([])}
                  style={{ fontSize: '0.875rem', padding: '0.5rem 1rem', marginBottom: '1rem' }}
                >
                  Clear All Lines
                </button>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #e0e0e0' }}>
                  <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>
                    ACCOUNT <span style={{ color: '#e53e3e' }}>*</span>
                  </th>
                  <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>
                    AMOUNT <span style={{ color: '#e53e3e' }}>*</span>
                  </th>
                  <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>TAX CODE</th>
                  <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>TAX RATE</th>
                  <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>TAX AMT</th>
                  <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>GROSS AMT</th>
                  <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>MEMO</th>
                  <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>DEPARTMENT</th>
                  <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>CLASS</th>
                  <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>LOCATION</th>
                  <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>CUSTOMER</th>
                  <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>BILLABLE</th>
                </tr>
              </thead>
              <tbody>
                {expenseLines.map((line) => (
                  <tr key={line.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '8px' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={line.account}
                        onChange={(e) => handleExpenseLineChange(line.id, 'account', e.target.value)}
                        placeholder="<Type then tab>"
                        style={{ minWidth: '150px' }}
                      />
                    </td>
                    <td style={{ padding: '8px' }}>
                      <input 
                        type="number" 
                        className="form-control"
                        value={line.amount}
                        onChange={(e) => handleExpenseLineChange(line.id, 'amount', e.target.value)}
                        style={{ minWidth: '100px' }}
                      />
                    </td>
                    <td style={{ padding: '8px' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={line.taxCode}
                        onChange={(e) => handleExpenseLineChange(line.id, 'taxCode', e.target.value)}
                        style={{ minWidth: '80px' }}
                      />
                    </td>
                    <td style={{ padding: '8px' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={line.taxRate}
                        onChange={(e) => handleExpenseLineChange(line.id, 'taxRate', e.target.value)}
                        style={{ minWidth: '80px' }}
                      />
                    </td>
                    <td style={{ padding: '8px' }}>
                      <input 
                        type="number" 
                        className="form-control"
                        value={line.taxAmt}
                        onChange={(e) => handleExpenseLineChange(line.id, 'taxAmt', e.target.value)}
                        style={{ minWidth: '80px' }}
                      />
                    </td>
                    <td style={{ padding: '8px' }}>
                      <input 
                        type="number" 
                        className="form-control"
                        value={line.grossAmt}
                        onChange={(e) => handleExpenseLineChange(line.id, 'grossAmt', e.target.value)}
                        style={{ minWidth: '100px' }}
                      />
                    </td>
                    <td style={{ padding: '8px' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={line.memo}
                        onChange={(e) => handleExpenseLineChange(line.id, 'memo', e.target.value)}
                        style={{ minWidth: '120px' }}
                      />
                    </td>
                    <td style={{ padding: '8px' }}>
                      <select 
                        className="form-control"
                        value={line.department}
                        onChange={(e) => handleExpenseLineChange(line.id, 'department', e.target.value)}
                        style={{ minWidth: '120px' }}
                      >
                        <option value="">Select...</option>
                      </select>
                    </td>
                    <td style={{ padding: '8px' }}>
                      <select 
                        className="form-control"
                        value={line.class}
                        onChange={(e) => handleExpenseLineChange(line.id, 'class', e.target.value)}
                        style={{ minWidth: '120px' }}
                      >
                        <option value="">Select...</option>
                      </select>
                    </td>
                    <td style={{ padding: '8px' }}>
                      <select 
                        className="form-control"
                        value={line.location}
                        onChange={(e) => handleExpenseLineChange(line.id, 'location', e.target.value)}
                        style={{ minWidth: '120px' }}
                      >
                        <option value="">Select...</option>
                      </select>
                    </td>
                    <td style={{ padding: '8px' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={line.customer}
                        onChange={(e) => handleExpenseLineChange(line.id, 'customer', e.target.value)}
                        style={{ minWidth: '120px' }}
                      />
                    </td>
                    <td style={{ padding: '8px' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={line.billable}
                        onChange={(e) => handleExpenseLineChange(line.id, 'billable', e.target.value)}
                        style={{ minWidth: '80px' }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
            <button 
              className="btn btn-primary"
              onClick={handleAddExpenseLine}
              style={{ fontSize: '13px', padding: '6px 16px' }}
            >
              <i className="fas fa-plus"></i> Add
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => expenseLines.length > 0 && handleRemoveExpenseLine(expenseLines[expenseLines.length - 1].id)}
              style={{ fontSize: '13px', padding: '6px 16px' }}
            >
              <i className="fas fa-times"></i> Cancel
            </button>
            <button 
              className="btn btn-secondary"
              style={{ fontSize: '13px', padding: '6px 16px' }}
            >
              <i className="fas fa-copy"></i> Copy Previous
            </button>
            <button 
              className="btn btn-secondary"
              style={{ fontSize: '13px', padding: '6px 16px' }}
            >
              Insert
            </button>
            <button 
              className="btn btn-secondary"
              style={{ fontSize: '13px', padding: '6px 16px' }}
            >
              Remove
            </button>
          </div>
              </div>
            </div>
          )}

          {/* Billing Tab */}
          {activeTab === 'billing' && (
            <div className="tab-content">
              <div className="form-section">
                <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div className="form-group">
                    <label className="form-label">VENDOR</label>
                    <textarea 
                      className="form-control"
                      value={formData.vendor}
                      onChange={(e) => handleFormChange('vendor', e.target.value)}
                      rows="4"
                      placeholder="Vendor address..."
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">VENDOR SELECT</label>
                    <select 
                      className="form-control"
                      value={formData.vendorSelect}
                      onChange={(e) => handleFormChange('vendorSelect', e.target.value)}
                    >
                      <option value="">- Custom -</option>
                      <option>Primary Address</option>
                      <option>Billing Address</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Relationships Tab */}
          {activeTab === 'relationships' && (
            <div className="tab-content">
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Contacts
                </h3>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                    <i className="fas fa-plus"></i> Add
                  </button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                    <i className="fas fa-times"></i> Cancel
                  </button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                    <i className="fas fa-plus"></i> Insert
                  </button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                    <i className="fas fa-trash"></i> Remove
                  </button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Remove all</button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Clear All Lines</button>
                </div>
                <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                  <table className="items-table" style={{ width: '100%', fontSize: '0.75rem' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '8px 6px' }}>CONTACT #</th>
                        <th style={{ padding: '8px 6px' }}>JOB TITLE</th>
                        <th style={{ padding: '8px 6px' }}>EMAIL</th>
                        <th style={{ padding: '8px 6px' }}>MAIN PHONE</th>
                        <th style={{ padding: '8px 6px' }}>SUBSIDIARY #</th>
                        <th style={{ padding: '8px 6px' }}>ROLE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: '4px' }}><input type="text" className="table-input" style={{ width: '150px' }} /></td>
                        <td style={{ padding: '4px' }}><input type="text" className="table-input" style={{ width: '150px' }} /></td>
                        <td style={{ padding: '4px' }}><input type="text" className="table-input" style={{ width: '150px' }} /></td>
                        <td style={{ padding: '4px' }}><input type="text" className="table-input" style={{ width: '120px' }} /></td>
                        <td style={{ padding: '4px' }}><input type="text" className="table-input" style={{ width: '150px' }} /></td>
                        <td style={{ padding: '4px' }}><input type="text" className="table-input" style={{ width: '120px' }} /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Communication Tab */}
          {activeTab === 'communication' && (
            <div className="tab-content">
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Printing
                </h3>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                    <input 
                      type="checkbox"
                      checked={formData.toBePrinted}
                      onChange={(e) => handleFormChange('toBePrinted', e.target.checked)}
                    />
                    TO BE PRINTED
                  </label>
                </div>

                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Events
                </h3>
                <div style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.25rem', fontSize: '0.75rem' }}>
                  <button style={{ padding: '0.25rem 0.5rem', background: '#f0f0f0', border: '1px solid #ccc', borderRadius: '3px', cursor: 'pointer' }}>Tasks</button>
                  <button style={{ padding: '0.25rem 0.5rem', background: '#f0f0f0', border: '1px solid #ccc', borderRadius: '3px', cursor: 'pointer' }}>Phone Calls</button>
                  <button style={{ padding: '0.25rem 0.5rem', background: '#f0f0f0', border: '1px solid #ccc', borderRadius: '3px', cursor: 'pointer' }}>Files</button>
                  <button style={{ padding: '0.25rem 0.5rem', background: '#f0f0f0', border: '1px solid #ccc', borderRadius: '3px', cursor: 'pointer' }}>User Notes</button>
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                    <i className="fas fa-plus"></i> Add
                  </button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                    <i className="fas fa-times"></i> Cancel
                  </button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                    <i className="fas fa-plus"></i> Insert
                  </button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                    <i className="fas fa-trash"></i> Remove
                  </button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Remove all</button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Clear All Lines</button>
                </div>
                <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                  <table className="items-table" style={{ width: '100%', fontSize: '0.75rem' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '8px 6px' }}>TITLE #</th>
                        <th style={{ padding: '8px 6px' }}>LOCATION</th>
                        <th style={{ padding: '8px 6px' }}>DATE #</th>
                        <th style={{ padding: '8px 6px' }}>ALL DAY</th>
                        <th style={{ padding: '8px 6px' }}>START TIME</th>
                        <th style={{ padding: '8px 6px' }}>END TIME</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: '4px' }}><input type="text" className="table-input" style={{ width: '150px' }} /></td>
                        <td style={{ padding: '4px' }}><input type="text" className="table-input" style={{ width: '150px' }} /></td>
                        <td style={{ padding: '4px' }}><input type="date" className="table-input" value="2025-11-18" style={{ width: '150px' }} /></td>
                        <td style={{ padding: '4px', textAlign: 'center' }}><input type="checkbox" /></td>
                        <td style={{ padding: '4px' }}><input type="time" className="table-input" value="11:00" style={{ width: '100px' }} /></td>
                        <td style={{ padding: '4px' }}><input type="time" className="table-input" value="12:00" style={{ width: '100px' }} /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Custom Tab */}
          {activeTab === 'custom' && (
            <div className="tab-content">
              <div className="form-section">
                <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div className="form-group">
                    <label className="form-label">MATERIAL TYPE</label>
                    <textarea 
                      className="form-control"
                      value={formData.materialType}
                      onChange={(e) => handleFormChange('materialType', e.target.value)}
                      rows="6"
                      placeholder="Type text and format it using the toolbar."
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">TEST TRANSACTION FIELD</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.testTransactionField}
                      onChange={(e) => handleFormChange('testTransactionField', e.target.value)}
                    />
                    <div style={{ marginTop: '1rem' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                        <input 
                          type="checkbox"
                          checked={formData.doRecordCreated}
                          onChange={(e) => handleFormChange('doRecordCreated', e.target.checked)}
                        />
                        DO RECORD CREATED
                      </label>
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                      <label className="form-label">GST TYPE</label>
                      <input 
                        type="text" 
                        className="form-control"
                        value={formData.gstType}
                        onChange={(e) => handleFormChange('gstType', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tax Reporting Tab */}
          {activeTab === 'taxReporting' && (
            <div className="tab-content">
              <div className="form-section">
                <div className="form-group" style={{ maxWidth: '400px' }}>
                  <label className="form-label">REFERENCE NO. OF ORIGINAL INVOICE</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.referenceNoOriginalInvoice}
                    onChange={(e) => handleFormChange('referenceNoOriginalInvoice', e.target.value)}
                  />
                </div>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-primary">Save</button>
                  <button className="btn btn-secondary">Cancel</button>
                  <button className="btn btn-secondary">Recalc</button>
                  <button className="btn btn-secondary">Actions</button>
                </div>
              </div>
            </div>
          )}

          {/* Supplier Received Items Tab */}
          {activeTab === 'supplierReceived' && (
            <div className="tab-content">
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Received Items
                </h3>
                <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                  <table className="items-table" style={{ width: '100%', fontSize: '0.75rem' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '8px 6px' }}>ITEM</th>
                        <th style={{ padding: '8px 6px' }}>COUNT OF QUANTITY</th>
                        <th style={{ padding: '8px 6px' }}>MEMO</th>
                        <th style={{ padding: '8px 6px' }}>SUM OF AMOUNT (FOREIGN CURRENCY)</th>
                        <th style={{ padding: '8px 6px' }}>NAME</th>
                        <th style={{ padding: '8px 6px' }}>DOCUMENT NUMBER</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#999', fontSize: '0.875rem' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-primary">Save</button>
                  <button className="btn btn-secondary">Cancel</button>
                  <button className="btn btn-secondary">Recalc</button>
                  <button className="btn btn-secondary">Actions</button>
                </div>
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
            <button className="btn btn-secondary">
              <i className="fas fa-save"></i>
              Save
            </button>
            <button className="btn btn-primary" onClick={handleSave}>
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

export default EnterVendorCredit;
