import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EnterBills = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('expenses');

  // Form state with dummy data
  const [formData, setFormData] = useState({
    customForm: 'TOM Vendor Bill',
    transactionNumber: 'VENDOR2714',
    referenceNo: 'BALANCE B/F-A1',
    vendor: 'A1 ENGINEERING SERVICES PTE LTD',
    account: '20010 Accounts Payable : Trade Creditors',
    amount: 1802.95,
    currency: 'SGD',
    exchangeRate: 1.00,
    vatRegistration: '',
    tax: 0.00,
    discAmt: '',
    discDate: '',
    paymentHold: false,
    dueDate: '2021-01-12',
    date: '2021-07-13',
    postingPeriod: 'Jan 2021',
    memo: 'Old System opening Balance',
    approvalStatus: 'Approved',
    nextApprover: '',
    approvalStatus2: 'Approved',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    purchaseType: '',
    expenses: [
      {
        id: 1,
        category: '30301 Equity : Opening Balance',
        account: '',
        amount: 1802.95,
        taxCode: 'GST_SG-7%',
        taxRate: '0.0%',
        taxAmt: 0.00,
        grossAmt: 1802.95,
        memo: 'Old System opening balance',
        department: '',
        class: '',
        location: '',
        customerProject: '',
        billable: false
      }
    ],
    items: [],
    // Billing tab
    terms: '',
    incoterm: '',
    vendorSelect: '- Custom -',
    // Relationships tab
    contacts: [],
    // Communication tab
    printingPreference: 'TO BE PRINTED',
    events: [],
    // Custom tab
    materialType: '',
    testTransactionField: '',
    doRecordCreated: '',
    gstType: '',
    // Supplier Received Items tab
    receivedItems: []
  });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddExpense = () => {
    const newExpense = {
      id: formData.expenses.length + 1,
      category: '',
      account: '',
      amount: 0,
      taxCode: 'GST_SG-7%',
      taxRate: '0.0%',
      taxAmt: 0.00,
      grossAmt: 0.00,
      memo: '',
      department: '',
      class: '',
      location: '',
      customerProject: '',
      billable: false
    };
    setFormData(prev => ({
      ...prev,
      expenses: [...prev.expenses, newExpense]
    }));
  };

  const handleClearExpenses = () => {
    if (window.confirm('Are you sure you want to clear all expense lines?')) {
      setFormData(prev => ({
        ...prev,
        expenses: []
      }));
    }
  };

  const handleAddItem = () => {
    const newItem = {
      id: formData.items.length + 1,
      item: '',
      vendorName: '',
      quantity: 0,
      units: 'Pcs',
      description: '',
      rate: 0,
      amount: 0,
      taxCode: 'GST_SG-7%',
      taxRate: '0.0%',
      taxAmt: 0.00,
      grossAmt: 0.00,
      department: '',
      class: '',
      location: '',
      customerProject: '',
      billable: false
    };
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };

  const handleClearItems = () => {
    if (window.confirm('Are you sure you want to clear all item lines?')) {
      setFormData(prev => ({
        ...prev,
        items: []
      }));
    }
  };

  const handleSave = () => {
    showToast('Bill saved successfully!', 'success');
    setTimeout(() => {
      if (setCurrentPage) {
        setCurrentPage('view-bills');
      }
    }, 1500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-bills');
      }
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Bill</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary">
            Cancel
          </button>
          <button className="btn btn-secondary">
            Auto Fill
          </button>
          <button className="btn btn-secondary">
            Rescale
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
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label required">CUSTOM FORM</label>
              <select 
                className="form-control"
                value={formData.customForm}
                onChange={(e) => handleFormChange('customForm', e.target.value)}
              >
                <option>TOM Vendor Bill</option>
                <option>Standard Vendor Bill</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label required">CURRENCY</label>
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

            <div className="form-group">
              <label className="form-label">DUE DATE</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.dueDate}
                onChange={(e) => handleFormChange('dueDate', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">TRANSACTION NUMBER</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.transactionNumber}
                onChange={(e) => handleFormChange('transactionNumber', e.target.value)}
                placeholder="To Be Generated"
              />
            </div>

            <div className="form-group">
              <label className="form-label required">EXCHANGE RATE</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.exchangeRate}
                onChange={(e) => handleFormChange('exchangeRate', e.target.value)}
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label className="form-label required">DATE</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleFormChange('date', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label required">VENDOR</label>
              <select 
                className="form-control"
                value={formData.vendor}
                onChange={(e) => handleFormChange('vendor', e.target.value)}
              >
                <option value="">Select...</option>
                <option>A1 ENGINEERING SERVICES PTE LTD</option>
                <option>CHIA HOCK HARDWARE TRADING</option>
                <option>TRONIX WORLD LOGISTICS PTE LTD</option>
                <option>METAL FORMS PRIVATE LIMITED</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">VAT REGISTRATION</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.vatRegistration}
                onChange={(e) => handleFormChange('vatRegistration', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label required">POSTING PERIOD</label>
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

            <div className="form-group">
              <label className="form-label required">ACCOUNT</label>
              <select 
                className="form-control"
                value={formData.account}
                onChange={(e) => handleFormChange('account', e.target.value)}
              >
                <option>20010 Accounts Payable : Trade Creditors</option>
                <option>20020 Accounts Payable : Intercompany Creditors</option>
                <option>20025 Other Payable Creditors</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">TAX</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.tax}
                onChange={(e) => handleFormChange('tax', e.target.value)}
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label className="form-label">MEMO</label>
              <textarea 
                className="form-control"
                value={formData.memo}
                onChange={(e) => handleFormChange('memo', e.target.value)}
                rows="2"
              />
            </div>

            <div className="form-group">
              <label className="form-label">AMOUNT</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.amount}
                onChange={(e) => handleFormChange('amount', e.target.value)}
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label className="form-label">DISC. AMT</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.discAmt}
                onChange={(e) => handleFormChange('discAmt', e.target.value)}
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label className="form-label">APPROVAL STATUS</label>
              <select 
                className="form-control"
                value={formData.approvalStatus}
                onChange={(e) => handleFormChange('approvalStatus', e.target.value)}
              >
                <option>Approved</option>
                <option>Pending Approval</option>
                <option>Rejected</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">AVAILABLE VENDOR CREDIT</label>
              <input 
                type="number" 
                className="form-control"
                readOnly
                value="0.00"
              />
            </div>

            <div className="form-group">
              <label className="form-label">DISC. DATE</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.discDate}
                onChange={(e) => handleFormChange('discDate', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">NEXT APPROVER</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.nextApprover}
                onChange={(e) => handleFormChange('nextApprover', e.target.value)}
                placeholder="<Type then tab>"
              />
            </div>

            <div className="form-group" style={{ gridColumn: 'span 3' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input 
                  type="checkbox"
                  checked={formData.paymentHold}
                  onChange={(e) => handleFormChange('paymentHold', e.target.checked)}
                />
                <span style={{ fontSize: '13px', color: '#666' }}>PAYMENT HOLD</span>
              </label>
            </div>

            <div className="form-group">
              <label className="form-label">APPROVAL STATUS</label>
              <select 
                className="form-control"
                value={formData.approvalStatus2}
                onChange={(e) => handleFormChange('approvalStatus2', e.target.value)}
              >
                <option>Approved</option>
                <option>Pending Approval</option>
                <option>Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className="form-section" style={{ marginTop: '2rem' }}>
          <h2 className="section-title">
            <i className="fas fa-tags"></i>
            Classification
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label required">SUBSIDIARY</label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleFormChange('subsidiary', e.target.value)}
              >
                <option>Tech Onshore MEP Prefabricators Pte Ltd.</option>
                <option>Tech Electric & Automation Pte Ltd</option>
                <option>Tech Marine Offshore (S) Pte Ltd</option>
                <option>Tech Offshore Marine (DQ) Pte Ltd</option>
                <option>Tech Offshore Marine (s) Pte Ltd</option>
                <option>Tech Offshore Marine (SV) Pte Ltd</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">PURCHASE TYPE</label>
              <select 
                className="form-control"
                value={formData.purchaseType}
                onChange={(e) => handleFormChange('purchaseType', e.target.value)}
              >
                <option value="">Select...</option>
                <option>- New -</option>
                <option>Critical</option>
                <option>Non Critical</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tabbed Interface */}
        <div className="detail-tabs" style={{ marginTop: '2rem' }}>
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'expenses' ? 'active' : ''}`} onClick={() => setActiveTab('expenses')}>Expenses & Items</button>
            <button className={`tab-btn ${activeTab === 'billing' ? 'active' : ''}`} onClick={() => setActiveTab('billing')}>Billing</button>
            <button className={`tab-btn ${activeTab === 'relationships' ? 'active' : ''}`} onClick={() => setActiveTab('relationships')}>Relationships</button>
            <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>Communication</button>
            <button className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`} onClick={() => setActiveTab('custom')}>Custom</button>
            <button className={`tab-btn ${activeTab === 'supplier' ? 'active' : ''}`} onClick={() => setActiveTab('supplier')}>Supplier Received Items</button>
          </div>

          {/* Expenses & Items Tab */}
          {activeTab === 'expenses' && (
            <div className="tab-content">

          <div style={{ marginBottom: '15px' }}>
            <strong style={{ fontSize: '14px' }}>Expenses {formData.amount.toFixed(2)}</strong>
          </div>

          <div style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
            <button className="btn btn-secondary" onClick={handleAddExpense}>
              <i className="fas fa-plus"></i> Add
            </button>
            <button className="btn btn-secondary" onClick={handleClearExpenses}>
              <i className="fas fa-trash"></i> Clear All Lines
            </button>
          </div>

          <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="items-table" style={{ width: '100%', minWidth: '1400px' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>CATEGORY</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>ACCOUNT <span style={{ color: '#e53e3e' }}>*</span></th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>AMOUNT <span style={{ color: '#e53e3e' }}>*</span></th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>TAX CODE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>TAX RATE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>TAX AMT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>GROSS AMT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>MEMO</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DEPARTMENT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>CLASS</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>LOCATION</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>CUSTOMER:PROJECT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>BILLABLE</th>
                </tr>
              </thead>
              <tbody>
                {formData.expenses.map((expense) => (
                  <tr key={expense.id}>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="text" 
                        className="table-input" 
                        value={expense.category}
                        style={{ width: '150px' }} 
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="text" 
                        className="table-input" 
                        value={expense.account}
                        style={{ width: '150px' }} 
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="number" 
                        className="table-input" 
                        value={expense.amount}
                        style={{ width: '100px' }} 
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <select className="table-input" style={{ width: '120px' }}>
                        <option>GST_SG-7%</option>
                        <option>GST_SG-0%</option>
                      </select>
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="text" 
                        className="table-input" 
                        value={expense.taxRate}
                        style={{ width: '80px' }} 
                        readOnly
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="number" 
                        className="table-input" 
                        value={expense.taxAmt}
                        style={{ width: '80px' }} 
                        readOnly
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="number" 
                        className="table-input" 
                        value={expense.grossAmt}
                        style={{ width: '100px' }} 
                        readOnly
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="text" 
                        className="table-input" 
                        value={expense.memo}
                        style={{ width: '150px' }} 
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <select className="table-input" style={{ width: '100px' }}>
                        <option value="">Select...</option>
                        <option>TOM</option>
                        <option>MEP</option>
                      </select>
                    </td>
                    <td style={{ padding: '4px' }}>
                      <select className="table-input" style={{ width: '100px' }}>
                        <option value="">Select...</option>
                        <option>Consumable Item</option>
                      </select>
                    </td>
                    <td style={{ padding: '4px' }}>
                      <select className="table-input" style={{ width: '100px' }}>
                        <option value="">Select...</option>
                        <option>TOM -11</option>
                      </select>
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="text" 
                        className="table-input" 
                        value={expense.customerProject}
                        style={{ width: '120px' }} 
                      />
                    </td>
                    <td style={{ padding: '4px', textAlign: 'center' }}>
                      <input 
                        type="checkbox" 
                        checked={expense.billable}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '30px' }}>
            <strong style={{ fontSize: '14px' }}>Items 0.00</strong>
          </div>

          <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
            <button className="btn btn-secondary" onClick={handleAddItem}>
              <i className="fas fa-plus"></i> Add Multiple
            </button>
            <button className="btn btn-secondary" onClick={handleClearItems}>
              <i className="fas fa-trash"></i> Clear All Lines
            </button>
          </div>

          {formData.items.length === 0 ? (
            <div style={{ marginTop: '15px', fontSize: '13px', color: '#666' }}>
              No records to show.
            </div>
          ) : (
            <div className="items-table-wrapper" style={{ overflowX: 'auto', marginTop: '15px' }}>
              <table className="items-table" style={{ width: '100%', minWidth: '1400px' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '8px 6px', fontSize: '11px' }}>ITEM</th>
                    <th style={{ padding: '8px 6px', fontSize: '11px' }}>VENDOR NAME</th>
                    <th style={{ padding: '8px 6px', fontSize: '11px' }}>QUANTITY</th>
                    <th style={{ padding: '8px 6px', fontSize: '11px' }}>UNITS</th>
                    <th style={{ padding: '8px 6px', fontSize: '11px' }}>DESCRIPTION</th>
                    <th style={{ padding: '8px 6px', fontSize: '11px' }}>RATE</th>
                    <th style={{ padding: '8px 6px', fontSize: '11px' }}>AMOUNT</th>
                    <th style={{ padding: '8px 6px', fontSize: '11px' }}>TAX CODE</th>
                    <th style={{ padding: '8px 6px', fontSize: '11px' }}>TAX RATE</th>
                    <th style={{ padding: '8px 6px', fontSize: '11px' }}>TAX AMT</th>
                    <th style={{ padding: '8px 6px', fontSize: '11px' }}>GROSS AMT</th>
                    <th style={{ padding: '8px 6px', fontSize: '11px' }}>DEPARTMENT</th>
                    <th style={{ padding: '8px 6px', fontSize: '11px' }}>CLASS</th>
                    <th style={{ padding: '8px 6px', fontSize: '11px' }}>LOCATION</th>
                    <th style={{ padding: '8px 6px', fontSize: '11px' }}>CUSTOMER:PROJECT</th>
                    <th style={{ padding: '8px 6px', fontSize: '11px' }}>BILLABLE</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.items.map((item, index) => (
                    <tr key={item.id}>
                      <td style={{ padding: '4px' }}>
                        <input 
                          type="text" 
                          className="table-input" 
                          value={item.item}
                          style={{ width: '120px' }} 
                        />
                      </td>
                      <td style={{ padding: '4px' }}>
                        <input 
                          type="text" 
                          className="table-input" 
                          value={item.vendorName}
                          style={{ width: '120px' }} 
                        />
                      </td>
                      <td style={{ padding: '4px' }}>
                        <input 
                          type="number" 
                          className="table-input" 
                          value={item.quantity}
                          style={{ width: '80px' }} 
                        />
                      </td>
                      <td style={{ padding: '4px' }}>
                        <select className="table-input" style={{ width: '80px' }}>
                          <option>Pcs</option>
                          <option>Kg</option>
                          <option>m</option>
                        </select>
                      </td>
                      <td style={{ padding: '4px' }}>
                        <input 
                          type="text" 
                          className="table-input" 
                          value={item.description}
                          style={{ width: '150px' }} 
                        />
                      </td>
                      <td style={{ padding: '4px' }}>
                        <input 
                          type="number" 
                          className="table-input" 
                          value={item.rate}
                          style={{ width: '80px' }} 
                        />
                      </td>
                      <td style={{ padding: '4px' }}>
                        <input 
                          type="number" 
                          className="table-input" 
                          value={item.amount}
                          style={{ width: '100px' }} 
                          readOnly
                        />
                      </td>
                      <td style={{ padding: '4px' }}>
                        <select className="table-input" style={{ width: '120px' }}>
                          <option>GST_SG-7%</option>
                          <option>GST_SG-0%</option>
                        </select>
                      </td>
                      <td style={{ padding: '4px' }}>
                        <input 
                          type="text" 
                          className="table-input" 
                          value={item.taxRate}
                          style={{ width: '80px' }} 
                          readOnly
                        />
                      </td>
                      <td style={{ padding: '4px' }}>
                        <input 
                          type="number" 
                          className="table-input" 
                          value={item.taxAmt}
                          style={{ width: '80px' }} 
                          readOnly
                        />
                      </td>
                      <td style={{ padding: '4px' }}>
                        <input 
                          type="number" 
                          className="table-input" 
                          value={item.grossAmt}
                          style={{ width: '100px' }} 
                          readOnly
                        />
                      </td>
                      <td style={{ padding: '4px' }}>
                        <select className="table-input" style={{ width: '100px' }}>
                          <option value="">Select...</option>
                          <option>TOM</option>
                          <option>MEP</option>
                        </select>
                      </td>
                      <td style={{ padding: '4px' }}>
                        <select className="table-input" style={{ width: '100px' }}>
                          <option value="">Select...</option>
                          <option>Consumable Item</option>
                        </select>
                      </td>
                      <td style={{ padding: '4px' }}>
                        <select className="table-input" style={{ width: '100px' }}>
                          <option value="">Select...</option>
                          <option>TOM -11</option>
                        </select>
                      </td>
                      <td style={{ padding: '4px' }}>
                        <input 
                          type="text" 
                          className="table-input" 
                          value={item.customerProject}
                          style={{ width: '120px' }} 
                        />
                      </td>
                      <td style={{ padding: '4px', textAlign: 'center' }}>
                        <input 
                          type="checkbox" 
                          checked={item.billable}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
            </div>
          )}

          {/* Billing Tab */}
          {activeTab === 'billing' && (
            <div className="tab-content">
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Billing Information</h3>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div className="form-group">
                    <label className="form-label">TERMS</label>
                    <select 
                      className="form-control"
                      value={formData.terms}
                      onChange={(e) => handleFormChange('terms', e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option>Net 30</option>
                      <option>Net 60</option>
                      <option>Due on Receipt</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">INCOTERM</label>
                    <select 
                      className="form-control"
                      value={formData.incoterm}
                      onChange={(e) => handleFormChange('incoterm', e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option>FOB</option>
                      <option>CIF</option>
                      <option>EXW</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">VENDOR SELECT</label>
                    <select 
                      className="form-control"
                      value={formData.vendorSelect}
                      onChange={(e) => handleFormChange('vendorSelect', e.target.value)}
                    >
                      <option>- Custom -</option>
                      <option>Vendor 1</option>
                      <option>Vendor 2</option>
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
                  Contacts (1)
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
                        <td colSpan="6" style={{ textAlign: 'center', padding: '1rem', color: '#999' }}>
                          No records to show.
                        </td>
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
                <div className="form-group" style={{ maxWidth: '400px' }}>
                  <label className="form-label">TO BE PRINTED</label>
                  <select 
                    className="form-control"
                    value={formData.printingPreference}
                    onChange={(e) => handleFormChange('printingPreference', e.target.value)}
                  >
                    <option>TO BE PRINTED</option>
                    <option>TO BE EMAILED</option>
                    <option>TO BE FAXED</option>
                  </select>
                </div>
              </div>

              <div className="form-section" style={{ marginTop: '1rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Events (1)
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
                        <td style={{ padding: '4px' }}><input type="date" className="table-input" value="2025-11-17" style={{ width: '150px' }} /></td>
                        <td style={{ padding: '4px', textAlign: 'center' }}><input type="checkbox" /></td>
                        <td style={{ padding: '4px' }}><input type="time" className="table-input" value="08:00" style={{ width: '100px' }} /></td>
                        <td style={{ padding: '4px' }}><input type="time" className="table-input" value="09:00" style={{ width: '100px' }} /></td>
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
                      rows="3"
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
                  </div>
                  <div className="form-group">
                    <label className="form-label">DO RECORD CREATED</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.doRecordCreated}
                      onChange={(e) => handleFormChange('doRecordCreated', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
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
          )}

          {/* Supplier Received Items Tab */}
          {activeTab === 'supplier' && (
            <div className="tab-content">
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Received Items (1)
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
                        <td colSpan="6" style={{ textAlign: 'center', padding: '1rem', color: '#999' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Supporting Documents */}
        <div className="form-section" style={{ marginTop: '2rem' }}>
          <h2 className="section-title">
            <i className="fas fa-paperclip"></i>
            Supporting Documents
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button className="btn btn-secondary">
              <i className="fas fa-upload"></i> Upload File
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-link"></i> Attach URL
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-trash"></i> Delete
            </button>
          </div>
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

export default EnterBills;
