import React, { useState, useEffect } from 'react';
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

  const [subTab, setSubTab] = useState('expenses');
  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

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

  const [itemLines, setItemLines] = useState([
    {
      id: 1,
      item: '',
      vendorName: '',
      quantity: 0,
      units: 'Pcs',
      description: '',
      rate: 0.00,
      amount: 0.00,
      taxCode: '',
      taxRate: '',
      grossAmt: 0.00,
      taxAmt: 0.00,
      options: '',
      department: '',
      class: '',
      location: '',
      customerProject: '',
      billable: false
    }
  ]);

  const [applyLines, setApplyLines] = useState([
    {
      id: 1,
      apply: false,
      dateDue: '',
      type: '',
      refNo: '',
      origAmt: 0.00,
      amtDue: 0.00,
      currency: 'SGD',
      payment: 0.00
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

  const handleAddItemLine = () => {
    setItemLines([...itemLines, {
      id: itemLines.length + 1,
      item: '',
      vendorName: '',
      quantity: 0,
      units: 'Pcs',
      description: '',
      rate: 0.00,
      amount: 0.00,
      taxCode: '',
      taxRate: '',
      grossAmt: 0.00,
      taxAmt: 0.00,
      options: '',
      department: '',
      class: '',
      location: '',
      customerProject: '',
      billable: false
    }]);
  };

  const handleRemoveItemLine = (id) => {
    if (itemLines.length > 1) {
      setItemLines(itemLines.filter(line => line.id !== id));
    }
  };

  const handleItemLineChange = (id, field, value) => {
    setItemLines(itemLines.map(line => 
      line.id === id ? { ...line, [field]: value } : line
    ));
  };

  const handleApplyLineChange = (id, field, value) => {
    setApplyLines(applyLines.map(line => 
      line.id === id ? { ...line, [field]: value } : line
    ));
  };

  const handleMenuToggle = (index, event) => {
    event.stopPropagation();
    if (activeMenu === index) {
      setActiveMenu(null);
    } else {
      const rect = event.currentTarget.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + 5,
        left: rect.left + (rect.width / 2) - 80
      });
      setActiveMenu(index);
    }
  };

  const handleInsertAboveExpense = (index) => {
    const newLine = {
      id: Date.now(),
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
    };
    setExpenseLines([...expenseLines.slice(0, index), newLine, ...expenseLines.slice(index)]);
    setActiveMenu(null);
  };

  const handleInsertBelowExpense = (index) => {
    const newLine = {
      id: Date.now(),
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
    };
    setExpenseLines([...expenseLines.slice(0, index + 1), newLine, ...expenseLines.slice(index + 1)]);
    setActiveMenu(null);
  };

  const handleDeleteExpense = (index) => {
    if (expenseLines.length > 1) {
      setExpenseLines(expenseLines.filter((_, i) => i !== index));
    }
    setActiveMenu(null);
  };

  const handleInsertAboveItem = (index) => {
    const newLine = {
      id: Date.now(),
      item: '',
      vendorName: '',
      quantity: 0,
      units: 'Pcs',
      description: '',
      rate: 0.00,
      amount: 0.00,
      taxCode: '',
      taxRate: '',
      grossAmt: 0.00,
      taxAmt: 0.00,
      options: '',
      department: '',
      class: '',
      location: '',
      customerProject: '',
      billable: false
    };
    setItemLines([...itemLines.slice(0, index), newLine, ...itemLines.slice(index)]);
    setActiveMenu(null);
  };

  const handleInsertBelowItem = (index) => {
    const newLine = {
      id: Date.now(),
      item: '',
      vendorName: '',
      quantity: 0,
      units: 'Pcs',
      description: '',
      rate: 0.00,
      amount: 0.00,
      taxCode: '',
      taxRate: '',
      grossAmt: 0.00,
      taxAmt: 0.00,
      options: '',
      department: '',
      class: '',
      location: '',
      customerProject: '',
      billable: false
    };
    setItemLines([...itemLines.slice(0, index + 1), newLine, ...itemLines.slice(index + 1)]);
    setActiveMenu(null);
  };

  const handleDeleteItem = (index) => {
    if (itemLines.length > 1) {
      setItemLines(itemLines.filter((_, i) => i !== index));
    }
    setActiveMenu(null);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveMenu(null);
    };
    if (activeMenu !== null) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeMenu]);

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
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '1rem', padding: '1rem', background: '#f8f9fa', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>UNAPPLIED</label>
                    <input 
                      type="text" 
                      value="0.00" 
                      readOnly 
                      style={{ 
                        padding: '8px 12px', 
                        border: '1px solid #ddd', 
                        borderRadius: '4px', 
                        background: '#fff',
                        fontSize: '14px',
                        color: '#333'
                      }} 
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>APPLIED</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <input 
                        type="text" 
                        value="0.00" 
                        readOnly 
                        style={{ 
                          padding: '8px 12px', 
                          border: '1px solid #ddd', 
                          borderRadius: '4px', 
                          background: '#fff',
                          fontSize: '14px',
                          color: '#333',
                          flex: 1
                        }} 
                      />
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                        <input type="checkbox" />
                        <span style={{ fontSize: '13px', fontWeight: '600' }}>AUTO APPLY</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Sub-tabs for Expenses, Items, Apply */}
                <div style={{ 
                  display: 'flex', 
                  gap: '0', 
                  borderBottom: '1px solid #dee2e6', 
                  marginBottom: '1.5rem',
                  background: '#fff'
                }}>
                  <button 
                    onClick={() => setSubTab('expenses')}
                    style={{ 
                      padding: '1rem 2rem', 
                      border: 'none', 
                      background: subTab === 'expenses' ? '#fff' : 'transparent',
                      borderBottom: subTab === 'expenses' ? '2px solid #4a90e2' : '2px solid transparent',
                      fontWeight: subTab === 'expenses' ? '600' : '500',
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      color: subTab === 'expenses' ? '#4a90e2' : '#6c757d',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Expenses 0.00
                  </button>
                  <button 
                    onClick={() => setSubTab('items')}
                    style={{ 
                      padding: '1rem 2rem', 
                      border: 'none', 
                      background: subTab === 'items' ? '#fff' : 'transparent',
                      borderBottom: subTab === 'items' ? '2px solid #4a90e2' : '2px solid transparent',
                      fontWeight: subTab === 'items' ? '600' : '500',
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      color: subTab === 'items' ? '#4a90e2' : '#6c757d',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Items 0.00
                  </button>
                  <button 
                    onClick={() => setSubTab('apply')}
                    style={{ 
                      padding: '1rem 2rem', 
                      border: 'none', 
                      background: subTab === 'apply' ? '#fff' : 'transparent',
                      borderBottom: subTab === 'apply' ? '2px solid #4a90e2' : '2px solid transparent',
                      fontWeight: subTab === 'apply' ? '600' : '500',
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      color: subTab === 'apply' ? '#4a90e2' : '#6c757d',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Apply 0.00
                  </button>
                </div>

                {/* Expenses Table */}
                {subTab === 'expenses' && (
                  <>
                    <div style={{ overflowX: 'auto', padding: '0 0 1.5rem 0' }}>
                      <table className="detail-items-table" style={{ minWidth: '2200px', borderCollapse: 'separate', borderSpacing: 0 }}>
                        <thead>
                          <tr>
                            <th style={{ width: '40px' }}></th>
                            <th style={{ minWidth: '180px' }}>ACCOUNT <span style={{ color: '#e53e3e' }}>*</span></th>
                            <th style={{ minWidth: '120px' }}>AMOUNT <span style={{ color: '#e53e3e' }}>*</span></th>
                            <th style={{ minWidth: '100px' }}>TAX CODE</th>
                            <th style={{ minWidth: '100px' }}>TAX RATE</th>
                            <th style={{ minWidth: '100px' }}>TAX AMT</th>
                            <th style={{ minWidth: '120px' }}>GROSS AMT</th>
                            <th style={{ minWidth: '250px' }}>MEMO</th>
                            <th style={{ minWidth: '150px' }}>DEPARTMENT</th>
                            <th style={{ minWidth: '150px' }}>CLASS</th>
                            <th style={{ minWidth: '150px' }}>LOCATION</th>
                            <th style={{ minWidth: '150px' }}>CUSTOMER</th>
                            <th style={{ minWidth: '100px' }}>BILLABLE</th>
                          </tr>
                        </thead>
                        <tbody>
                          {expenseLines.map((line, index) => (
                            <tr 
                              key={line.id} 
                              onMouseEnter={() => setHoveredRow(index)}
                              onMouseLeave={() => setHoveredRow(null)}
                            >
                              <td style={{ position: 'relative' }}>
                                {hoveredRow === index && (
                                  <button 
                                    className="row-actions-btn"
                                    title="Row Actions"
                                    onClick={(e) => handleMenuToggle(index, e)}
                                  >
                                    <i className="fas fa-ellipsis-v"></i>
                                  </button>
                                )}
                                {activeMenu === index && (
                                  <div 
                                    className="row-actions-menu"
                                    style={{
                                      position: 'fixed',
                                      top: `${menuPosition.top}px`,
                                      left: `${menuPosition.left}px`,
                                      display: 'block',
                                      zIndex: 10000
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <button onClick={() => handleInsertAboveExpense(index)}>
                                      <i className="fas fa-arrow-up"></i>
                                      Insert Above
                                    </button>
                                    <button onClick={() => handleInsertBelowExpense(index)}>
                                      <i className="fas fa-arrow-down"></i>
                                      Insert Below
                                    </button>
                                    <button onClick={() => handleDeleteExpense(index)} className="delete-action">
                                      <i className="fas fa-trash"></i>
                                      Delete Row
                                    </button>
                                  </div>
                                )}
                              </td>
                              <td style={{ padding: '8px' }}>
                                <input 
                                  type="text" 
                                  className="form-control"
                                  value={line.account}
                                  onChange={(e) => handleExpenseLineChange(line.id, 'account', e.target.value)}
                                  placeholder="<Type then tab>"
                                  style={{ minWidth: '180px', height: '40px' }}
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
                                  style={{ minWidth: '100px', height: '40px' }}
                                />
                              </td>
                              <td style={{ padding: '8px' }}>
                                <input 
                                  type="text" 
                                  className="form-control"
                                  value={line.taxRate}
                                  onChange={(e) => handleExpenseLineChange(line.id, 'taxRate', e.target.value)}
                                  style={{ minWidth: '100px', height: '40px' }}
                                />
                              </td>
                              <td style={{ padding: '8px' }}>
                                <input 
                                  type="number" 
                                  className="form-control"
                                  value={line.taxAmt}
                                  onChange={(e) => handleExpenseLineChange(line.id, 'taxAmt', e.target.value)}
                                  style={{ minWidth: '100px', height: '40px' }}
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
                                <textarea 
                                  className="form-control"
                                  value={line.memo}
                                  onChange={(e) => handleExpenseLineChange(line.id, 'memo', e.target.value)}
                                  style={{ minWidth: '250px', minHeight: '60px', resize: 'vertical' }}
                                  rows="3"
                                />
                              </td>
                              <td style={{ padding: '8px' }}>
                                <select 
                                  className="form-control"
                                  value={line.department}
                                  onChange={(e) => handleExpenseLineChange(line.id, 'department', e.target.value)}
                                  style={{ minWidth: '150px', height: '40px' }}
                                >
                                  <option value="">Select...</option>
                                </select>
                              </td>
                              <td style={{ padding: '8px' }}>
                                <select 
                                  className="form-control"
                                  value={line.class}
                                  onChange={(e) => handleExpenseLineChange(line.id, 'class', e.target.value)}
                                  style={{ minWidth: '150px', height: '40px' }}
                                >
                                  <option value="">Select...</option>
                                </select>
                              </td>
                              <td style={{ padding: '8px' }}>
                                <select 
                                  className="form-control"
                                  value={line.location}
                                  onChange={(e) => handleExpenseLineChange(line.id, 'location', e.target.value)}
                                  style={{ minWidth: '150px', height: '40px' }}
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
                                  style={{ minWidth: '150px', height: '40px' }}
                                />
                              </td>
                              <td style={{ padding: '8px', textAlign: 'center' }}>
                                <input 
                                  type="checkbox" 
                                  checked={line.billable}
                                  onChange={(e) => handleExpenseLineChange(line.id, 'billable', e.target.checked)}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}

                {/* Items Table */}
                {subTab === 'items' && (
                  <>
                    <div style={{ overflowX: 'auto', padding: '0 0 1.5rem 0' }}>
                      <table className="detail-items-table" style={{ minWidth: '2400px', borderCollapse: 'separate', borderSpacing: 0 }}>
                        <thead>
                          <tr>
                            <th style={{ width: '40px' }}></th>
                            <th style={{ minWidth: '180px' }}>ITEM</th>
                            <th style={{ minWidth: '300px' }}>DESCRIPTION</th>
                            <th style={{ minWidth: '150px' }}>VENDOR NAME</th>
                            <th style={{ minWidth: '100px' }}>QUANTITY</th>
                            <th style={{ minWidth: '120px' }}>UNITS</th>
                            <th style={{ minWidth: '120px' }}>RATE</th>
                            <th style={{ minWidth: '120px' }}>AMOUNT</th>
                            <th style={{ minWidth: '100px' }}>TAX CODE</th>
                            <th style={{ minWidth: '100px' }}>TAX RATE</th>
                            <th style={{ minWidth: '120px' }}>GROSS AMT</th>
                            <th style={{ minWidth: '100px' }}>TAX AMT</th>
                            <th style={{ minWidth: '120px' }}>OPTIONS</th>
                            <th style={{ minWidth: '150px' }}>DEPARTMENT</th>
                            <th style={{ minWidth: '150px' }}>CLASS</th>
                            <th style={{ minWidth: '150px' }}>LOCATION</th>
                            <th style={{ minWidth: '150px' }}>CUSTOMER:PROJECT</th>
                            <th style={{ minWidth: '100px' }}>BILLABLE</th>
                          </tr>
                        </thead>
                        <tbody>
                          {itemLines.map((line, index) => (
                            <tr 
                              key={line.id}
                              onMouseEnter={() => setHoveredRow(index)}
                              onMouseLeave={() => setHoveredRow(null)}
                            >
                              <td style={{ position: 'relative' }}>
                                {hoveredRow === index && (
                                  <button 
                                    className="row-actions-btn"
                                    title="Row Actions"
                                    onClick={(e) => handleMenuToggle(index, e)}
                                  >
                                    <i className="fas fa-ellipsis-v"></i>
                                  </button>
                                )}
                                {activeMenu === index && (
                                  <div 
                                    className="row-actions-menu"
                                    style={{
                                      position: 'fixed',
                                      top: `${menuPosition.top}px`,
                                      left: `${menuPosition.left}px`,
                                      display: 'block',
                                      zIndex: 10000
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <button onClick={() => handleInsertAboveItem(index)}>
                                      <i className="fas fa-arrow-up"></i>
                                      Insert Above
                                    </button>
                                    <button onClick={() => handleInsertBelowItem(index)}>
                                      <i className="fas fa-arrow-down"></i>
                                      Insert Below
                                    </button>
                                    <button onClick={() => handleDeleteItem(index)} className="delete-action">
                                      <i className="fas fa-trash"></i>
                                      Delete Row
                                    </button>
                                  </div>
                                )}
                              </td>
                              <td style={{ padding: '8px' }}>
                                <input type="text" className="form-control" value={line.item} onChange={(e) => handleItemLineChange(line.id, 'item', e.target.value)} placeholder="<Type then tab>" style={{ minWidth: '180px', height: '40px' }} />
                              </td>
                              <td style={{ padding: '8px' }}>
                                <textarea className="form-control" value={line.description} onChange={(e) => handleItemLineChange(line.id, 'description', e.target.value)} style={{ minWidth: '300px', minHeight: '60px', resize: 'vertical' }} rows="3" />
                              </td>
                              <td style={{ padding: '8px' }}>
                                <input type="text" className="form-control" value={line.vendorName} onChange={(e) => handleItemLineChange(line.id, 'vendorName', e.target.value)} style={{ minWidth: '150px', height: '40px' }} />
                              </td>
                              <td style={{ padding: '8px' }}>
                                <input type="number" className="form-control" value={line.quantity} onChange={(e) => handleItemLineChange(line.id, 'quantity', e.target.value)} style={{ minWidth: '100px', height: '40px' }} />
                              </td>
                              <td style={{ padding: '8px' }}>
                                <select className="form-control" value={line.units} onChange={(e) => handleItemLineChange(line.id, 'units', e.target.value)} style={{ minWidth: '120px', height: '40px' }}>
                                  <option>Pcs</option>
                                  <option>Set</option>
                                  <option>Kg</option>
                                  <option>M</option>
                                  <option>L</option>
                                </select>
                              </td>
                              <td style={{ padding: '8px' }}>
                                <input type="number" className="form-control" value={line.rate} onChange={(e) => handleItemLineChange(line.id, 'rate', e.target.value)} step="0.01" style={{ minWidth: '120px', height: '40px' }} />
                              </td>
                              <td style={{ padding: '8px' }}>
                                <input type="number" className="form-control" value={line.amount} onChange={(e) => handleItemLineChange(line.id, 'amount', e.target.value)} step="0.01" style={{ minWidth: '120px', height: '40px' }} />
                              </td>
                              <td style={{ padding: '8px' }}>
                                <input type="text" className="form-control" value={line.taxCode} onChange={(e) => handleItemLineChange(line.id, 'taxCode', e.target.value)} style={{ minWidth: '100px', height: '40px' }} />
                              </td>
                              <td style={{ padding: '8px' }}>
                                <input type="text" className="form-control" value={line.taxRate} onChange={(e) => handleItemLineChange(line.id, 'taxRate', e.target.value)} style={{ minWidth: '100px', height: '40px' }} />
                              </td>
                              <td style={{ padding: '8px' }}>
                                <input type="number" className="form-control" value={line.grossAmt} onChange={(e) => handleItemLineChange(line.id, 'grossAmt', e.target.value)} step="0.01" style={{ minWidth: '120px', height: '40px' }} />
                              </td>
                              <td style={{ padding: '8px' }}>
                                <input type="number" className="form-control" value={line.taxAmt} onChange={(e) => handleItemLineChange(line.id, 'taxAmt', e.target.value)} step="0.01" style={{ minWidth: '100px', height: '40px' }} />
                              </td>
                              <td style={{ padding: '8px' }}>
                                <input type="text" className="form-control" value={line.options} onChange={(e) => handleItemLineChange(line.id, 'options', e.target.value)} style={{ minWidth: '120px', height: '40px' }} />
                              </td>
                              <td style={{ padding: '8px' }}>
                                <select className="form-control" value={line.department} onChange={(e) => handleItemLineChange(line.id, 'department', e.target.value)} style={{ minWidth: '150px', height: '40px' }}>
                                  <option value="">Select...</option>
                                </select>
                              </td>
                              <td style={{ padding: '8px' }}>
                                <select className="form-control" value={line.class} onChange={(e) => handleItemLineChange(line.id, 'class', e.target.value)} style={{ minWidth: '150px', height: '40px' }}>
                                  <option value="">Select...</option>
                                </select>
                              </td>
                              <td style={{ padding: '8px' }}>
                                <select className="form-control" value={line.location} onChange={(e) => handleItemLineChange(line.id, 'location', e.target.value)} style={{ minWidth: '150px', height: '40px' }}>
                                  <option value="">Select...</option>
                                </select>
                              </td>
                              <td style={{ padding: '8px' }}>
                                <input type="text" className="form-control" value={line.customerProject} onChange={(e) => handleItemLineChange(line.id, 'customerProject', e.target.value)} style={{ minWidth: '150px', height: '40px' }} />
                              </td>
                              <td style={{ padding: '8px', textAlign: 'center' }}>
                                <input type="checkbox" checked={line.billable} onChange={(e) => handleItemLineChange(line.id, 'billable', e.target.checked)} />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}

                {/* Apply Table */}
                {subTab === 'apply' && (
                  <>
                    <div style={{ marginBottom: '1rem' }}>
                      <input 
                        type="text" 
                        placeholder="SELECT ITEM"
                        className="form-control"
                        style={{ maxWidth: '300px', marginBottom: '1rem' }}
                      />
                      <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
                        <button className="btn btn-primary" style={{ fontSize: '13px', padding: '6px 16px' }}>
                          Pay All
                        </button>
                        <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '6px 16px' }}>
                          Auto Apply
                        </button>
                        <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '6px 16px' }}>
                          Clear
                        </button>
                        <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '6px 16px' }}>
                          Customize
                        </button>
                        <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '6px 16px' }}>
                          Clear All Lines
                        </button>
                      </div>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                        <thead>
                          <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #e0e0e0' }}>
                            <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>APPLY</th>
                            <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>DATE DUE</th>
                            <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>TYPE</th>
                            <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>REF NO.</th>
                            <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>ORIG. AMT.</th>
                            <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>AMT. DUE</th>
                            <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>CURRENCY</th>
                            <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>PAYMENT</th>
                          </tr>
                        </thead>
                        <tbody>
                          {applyLines.length === 0 ? (
                            <tr>
                              <td colSpan="8" style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
                                No records to show.
                              </td>
                            </tr>
                          ) : (
                            applyLines.map((line) => (
                              <tr key={line.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                                <td style={{ padding: '8px' }}>
                                  <input 
                                    type="checkbox" 
                                    checked={line.apply} 
                                    onChange={(e) => handleApplyLineChange(line.id, 'apply', e.target.checked)} 
                                  />
                                </td>
                                <td style={{ padding: '8px' }}>
                                  <input 
                                    type="date" 
                                    className="form-control" 
                                    value={line.dateDue} 
                                    onChange={(e) => handleApplyLineChange(line.id, 'dateDue', e.target.value)} 
                                    style={{ minWidth: '120px' }} 
                                  />
                                </td>
                                <td style={{ padding: '8px' }}>
                                  <input 
                                    type="text" 
                                    className="form-control" 
                                    value={line.type} 
                                    onChange={(e) => handleApplyLineChange(line.id, 'type', e.target.value)} 
                                    style={{ minWidth: '100px' }} 
                                  />
                                </td>
                                <td style={{ padding: '8px' }}>
                                  <input 
                                    type="text" 
                                    className="form-control" 
                                    value={line.refNo} 
                                    onChange={(e) => handleApplyLineChange(line.id, 'refNo', e.target.value)} 
                                    style={{ minWidth: '120px' }} 
                                  />
                                </td>
                                <td style={{ padding: '8px' }}>
                                  <input 
                                    type="number" 
                                    className="form-control" 
                                    value={line.origAmt} 
                                    onChange={(e) => handleApplyLineChange(line.id, 'origAmt', e.target.value)} 
                                    step="0.01" 
                                    style={{ minWidth: '100px' }} 
                                  />
                                </td>
                                <td style={{ padding: '8px' }}>
                                  <input 
                                    type="number" 
                                    className="form-control" 
                                    value={line.amtDue} 
                                    onChange={(e) => handleApplyLineChange(line.id, 'amtDue', e.target.value)} 
                                    step="0.01" 
                                    style={{ minWidth: '100px' }} 
                                  />
                                </td>
                                <td style={{ padding: '8px' }}>
                                  <select 
                                    className="form-control" 
                                    value={line.currency} 
                                    onChange={(e) => handleApplyLineChange(line.id, 'currency', e.target.value)} 
                                    style={{ minWidth: '100px', height: '40px' }}
                                  >
                                    <option>SGD</option>
                                    <option>USD</option>
                                    <option>EUR</option>
                                    <option>GBP</option>
                                  </select>
                                </td>
                                <td style={{ padding: '8px' }}>
                                  <input 
                                    type="number" 
                                    className="form-control" 
                                    value={line.payment} 
                                    onChange={(e) => handleApplyLineChange(line.id, 'payment', e.target.value)} 
                                    step="0.01" 
                                    style={{ minWidth: '100px' }} 
                                  />
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>

                    <div style={{ marginTop: '1rem', textAlign: 'right', fontSize: '13px', color: '#666' }}>
                      <span>1 to 100 of 512</span>
                    </div>
                  </>
                )}

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
