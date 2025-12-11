import React, { useState, useEffect } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EnterBills = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('expenses');
  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (activeMenu !== null) {
        setActiveMenu(null);
      }
    };
    
    if (activeMenu !== null) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeMenu]);

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

  // Row action handlers
  const handleMenuToggle = (index, e) => {
    e.stopPropagation();
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setMenuPosition({
      top: rect.bottom,
      left: rect.left
    });
    setActiveMenu(activeMenu === index ? null : index);
  };

  const handleInsertAbove = (index) => {
    const newExpense = {
      id: Date.now(),
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
      expenses: [
        ...prev.expenses.slice(0, index),
        newExpense,
        ...prev.expenses.slice(index)
      ]
    }));
  };

  const handleInsertBelow = (index) => {
    const newExpense = {
      id: Date.now(),
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
      expenses: [
        ...prev.expenses.slice(0, index + 1),
        newExpense,
        ...prev.expenses.slice(index + 1)
      ]
    }));
  };

  const handleDeleteExpenseRow = (index) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      setFormData(prev => ({
        ...prev,
        expenses: prev.expenses.filter((_, i) => i !== index)
      }));
    }
  };

  const handleInsertItemAbove = (index) => {
    const newItem = {
      id: Date.now(),
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
      items: [
        ...prev.items.slice(0, index),
        newItem,
        ...prev.items.slice(index)
      ]
    }));
  };

  const handleInsertItemBelow = (index) => {
    const newItem = {
      id: Date.now(),
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
      items: [
        ...prev.items.slice(0, index + 1),
        newItem,
        ...prev.items.slice(index + 1)
      ]
    }));
  };

  const handleDeleteItemRow = (index) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setFormData(prev => ({
        ...prev,
        items: prev.items.filter((_, i) => i !== index)
      }));
    }
  };

  return (
    <div className="enquiry-detail" onClick={() => setActiveMenu(null)}>
      {/* Global Row Actions Menu */}
      {activeMenu !== null && (
        <div 
          className="row-actions-menu"
          style={{
            position: 'fixed',
            top: `${menuPosition.top}px`,
            left: `${menuPosition.left}px`,
            display: 'block',
            zIndex: 1000
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {typeof activeMenu === 'number' ? (
            // Expense menu
            <>
              <button onClick={() => {
                handleInsertAbove(activeMenu);
                setActiveMenu(null);
              }}>
                <i className="fas fa-arrow-up"></i>
                Insert Above
              </button>
              <button onClick={() => {
                handleInsertBelow(activeMenu);
                setActiveMenu(null);
              }}>
                <i className="fas fa-arrow-down"></i>
                Insert Below
              </button>
              <button onClick={() => {
                handleDeleteExpenseRow(activeMenu);
                setActiveMenu(null);
              }} className="delete-action">
                <i className="fas fa-trash"></i>
                Delete Row
              </button>
            </>
          ) : (
            // Item menu
            <>
              <button onClick={() => {
                handleInsertItemAbove(parseInt(activeMenu.split('-')[1]));
                setActiveMenu(null);
              }}>
                <i className="fas fa-arrow-up"></i>
                Insert Above
              </button>
              <button onClick={() => {
                handleInsertItemBelow(parseInt(activeMenu.split('-')[1]));
                setActiveMenu(null);
              }}>
                <i className="fas fa-arrow-down"></i>
                Insert Below
              </button>
              <button onClick={() => {
                handleDeleteItemRow(parseInt(activeMenu.split('-')[1]));
                setActiveMenu(null);
              }} className="delete-action">
                <i className="fas fa-trash"></i>
                Delete Row
              </button>
            </>
          )}
        </div>
      )}
      
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-invoice-dollar"></i>
          <div>
            <h1>Bill</h1>
            <div className="detail-subtitle">
              <span>{formData.transactionNumber || '# To be generated – New Bill'}</span>
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
        <button className="btn-toolbar" onClick={handleCancel}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
      </div>

      <div className="detail-content">
        {/* Primary Information */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>TRANSACTION NUMBER</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.transactionNumber}
                  onChange={(e) => handleFormChange('transactionNumber', e.target.value)}
                  placeholder="To Be Generated"
                  readOnly
                  style={{ background: '#f9f9f9' }}
                />
              </div>

              <div className="detail-field">
                <label>DATE <span className="required">*</span></label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.date}
                  onChange={(e) => handleFormChange('date', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>VENDOR <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.vendor}
                  onChange={(e) => handleFormChange('vendor', e.target.value)}
                  placeholder="<Type then tab>"
                />
              </div>

              <div className="detail-field">
                <label>REFERENCE NO</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.referenceNo}
                  onChange={(e) => handleFormChange('referenceNo', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>DUE DATE</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.dueDate}
                  onChange={(e) => handleFormChange('dueDate', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>CURRENCY <span className="required">*</span></label>
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

              <div className="detail-field">
                <label>EXCHANGE RATE <span className="required">*</span></label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.exchangeRate}
                  onChange={(e) => handleFormChange('exchangeRate', e.target.value)}
                  step="0.01"
                />
              </div>

              <div className="detail-field">
                <label>POSTING PERIOD</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.postingPeriod}
                  onChange={(e) => handleFormChange('postingPeriod', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>MEMO</label>
                <textarea 
                  className="form-control"
                  value={formData.memo}
                  onChange={(e) => handleFormChange('memo', e.target.value)}
                  rows="3"
                  placeholder="Enter memo"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY <span className="required">*</span></label>
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
              
              <div className="detail-field">
                <label>PURCHASE TYPE</label>
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

              <div className="detail-field">
                <label>APPROVAL STATUS</label>
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
            </div>
          </div>
        </div>

        {/* Tabbed Interface */}
        <div className="detail-tabs" style={{ marginTop: '2rem' }}>
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'expenses' ? 'active' : ''}`} onClick={() => setActiveTab('expenses')}>Expenses</button>
            <button className={`tab-btn ${activeTab === 'items' ? 'active' : ''}`} onClick={() => setActiveTab('items')}>Items</button>
            <button className={`tab-btn ${activeTab === 'billing' ? 'active' : ''}`} onClick={() => setActiveTab('billing')}>Billing</button>
            <button className={`tab-btn ${activeTab === 'relationships' ? 'active' : ''}`} onClick={() => setActiveTab('relationships')}>Relationships</button>
            <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>Communication</button>
            <button className={`tab-btn ${activeTab === 'supplier' ? 'active' : ''}`} onClick={() => setActiveTab('supplier')}>Supplier Received Items</button>
          </div>

          {/* Expenses Tab */}
          {activeTab === 'expenses' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <h2 className="section-title">
                <i className="fas fa-receipt"></i>
                Expenses
              </h2>
              
              <div className="items-table-container" style={{ marginBottom: '1rem' }}>
                <table className="items-table">
                  <thead>
                    <tr>
                      <th style={{width: '30px'}}></th>
                      <th style={{minWidth: '200px'}}>CATEGORY</th>
                      <th style={{minWidth: '200px'}}>ACCOUNT <span style={{ color: 'red' }}>*</span></th>
                      <th style={{minWidth: '120px'}}>AMOUNT <span style={{ color: 'red' }}>*</span></th>
                      <th style={{minWidth: '150px'}}>TAX CODE</th>
                      <th style={{minWidth: '100px'}}>TAX RATE</th>
                      <th style={{minWidth: '100px'}}>TAX AMT</th>
                      <th style={{minWidth: '120px'}}>GROSS AMT</th>
                      <th style={{minWidth: '250px'}}>MEMO</th>
                      <th style={{minWidth: '150px'}}>DEPARTMENT</th>
                      <th style={{minWidth: '150px'}}>CLASS</th>
                      <th style={{minWidth: '150px'}}>LOCATION</th>
                      <th style={{minWidth: '150px'}}>CUSTOMER</th>
                      <th style={{minWidth: '150px'}}>PROJECT</th>
                      <th style={{minWidth: '80px'}}>BILLABLE</th>
                    </tr>
                  </thead>
              <tbody>
                {formData.expenses.map((expense, index) => (
                  <tr 
                    key={expense.id}
                    className={`table-row-with-actions ${hoveredRow === index ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredRow(index)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td style={{ textAlign: 'center', position: 'relative' }}>
                      {hoveredRow === index && (
                        <button 
                          className="row-actions-btn"
                          title="Row Actions"
                          onClick={(e) => handleMenuToggle(index, e)}
                        >
                          <i className="fas fa-ellipsis-v"></i>
                        </button>
                      )}
                    </td>
                    <td>
                      <select className="form-control" style={{minWidth: '200px', height: '32px'}}>
                        <option value="">Select...</option>
                        <option>30301 Equity : Opening Balance</option>
                        <option>Cost of Goods Sold</option>
                        <option>Operating Expenses</option>
                      </select>
                    </td>
                    <td><input type="text" className="form-control" value={expense.account} style={{minWidth: '200px', height: '32px'}} /></td>
                    <td><input type="number" className="form-control" value={expense.amount} style={{minWidth: '120px', height: '32px', textAlign: 'right'}} step="0.01" /></td>
                    <td>
                      <select className="form-control" style={{minWidth: '150px', height: '32px'}}>
                        <option>GST_SG-7%</option>
                        <option>GST_SG-0%</option>
                      </select>
                    </td>
                    <td><input type="text" className="form-control" value={expense.taxRate} style={{minWidth: '100px', height: '32px', textAlign: 'center'}} readOnly /></td>
                    <td><input type="number" className="form-control" value={expense.taxAmt} style={{minWidth: '100px', height: '32px', textAlign: 'right'}} readOnly step="0.01" /></td>
                    <td><input type="number" className="form-control" value={expense.grossAmt} style={{minWidth: '120px', height: '32px', textAlign: 'right'}} readOnly step="0.01" /></td>
                    <td><input type="text" className="form-control" value={expense.memo} style={{minWidth: '250px', height: '32px'}} /></td>
                    <td>
                      <select className="form-control" style={{minWidth: '150px', height: '32px'}}>
                        <option value="">Select...</option>
                        <option>TOM</option>
                        <option>MEP</option>
                      </select>
                    </td>
                    <td>
                      <select className="form-control" style={{minWidth: '150px', height: '32px'}}>
                        <option value="">Select...</option>
                        <option>Consumable Item</option>
                      </select>
                    </td>
                    <td>
                      <select className="form-control" style={{minWidth: '150px', height: '32px'}}>
                        <option value="">Select...</option>
                        <option>TOM -11</option>
                      </select>
                    </td>
                    <td>
                      <select className="form-control" style={{minWidth: '150px', height: '40px'}}>
                        <option value="">Select...</option>
                        <option>Customer A</option>
                        <option>Customer B</option>
                      </select>
                    </td>
                    <td>
                      <select className="form-control" style={{minWidth: '150px', height: '40px'}}>
                        <option value="">Select...</option>
                        <option>Project 1</option>
                        <option>Project 2</option>
                      </select>
                    </td>
                    <td style={{textAlign: 'center'}}><input type="checkbox" checked={expense.billable} style={{width: '16px', height: '16px'}} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="add-item-btn" onClick={handleAddExpense} style={{marginTop: '1rem'}}>
            <i className="fas fa-plus"></i>
            Add Expense
          </button>
            </div>
          )}

          {/* Items Tab */}
          {activeTab === 'items' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <h2 className="section-title">
                <i className="fas fa-box"></i>
                Items
              </h2>
              
              <div className="items-table-container" style={{ marginBottom: '1rem' }}>
            <table className="items-table">
              <thead>
                <tr>
                  <th style={{width: '30px'}}></th>
                  <th style={{minWidth: '150px'}}>ITEM</th>
                  <th style={{minWidth: '400px'}}>DESCRIPTION</th>
                  <th style={{minWidth: '150px'}}>VENDOR NAME</th>
                  <th style={{minWidth: '80px'}}>QUANTITY</th>
                  <th style={{minWidth: '100px'}}>UNITS</th>
                  <th style={{minWidth: '100px'}}>RATE</th>
                  <th style={{minWidth: '100px'}}>AMOUNT</th>
                  <th style={{minWidth: '150px'}}>TAX CODE</th>
                  <th style={{minWidth: '100px'}}>TAX RATE</th>
                  <th style={{minWidth: '100px'}}>GROSS AMT</th>
                  <th style={{minWidth: '100px'}}>TAX AMT</th>
                  <th style={{minWidth: '100px'}}>OPTIONS</th>
                  <th style={{minWidth: '150px'}}>DEPARTMENT</th>
                  <th style={{minWidth: '150px'}}>CLASS</th>
                  <th style={{minWidth: '150px'}}>LOCATION</th>
                  <th style={{minWidth: '150px'}}>CUSTOMER</th>
                  <th style={{minWidth: '150px'}}>PROJECT</th>
                  <th style={{minWidth: '80px'}}>BILLABLE</th>
                  <th style={{minWidth: '100px'}}>RECEIPTS</th>
                </tr>
              </thead>
              <tbody>
                {formData.items.length === 0 ? (
                  <tr>
                    <td colSpan="19" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                      No items added yet
                    </td>
                  </tr>
                ) : (
                  formData.items.map((item, index) => (
                    <tr 
                      key={item.id}
                      className={`table-row-with-actions ${hoveredRow === `item-${index}` ? 'hovered' : ''}`}
                      onMouseEnter={() => setHoveredRow(`item-${index}`)}
                      onMouseLeave={() => setHoveredRow(null)}
                    >
                      <td style={{ textAlign: 'center', position: 'relative' }}>
                        {hoveredRow === `item-${index}` && (
                          <button 
                            className="row-actions-btn"
                            title="Row Actions"
                            onClick={(e) => handleMenuToggle(`item-${index}`, e)}
                          >
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                        )}
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={item.item} 
                          placeholder="Enter item"
                          style={{minWidth: '200px', height: '40px'}} 
                        />
                      </td>
                      <td>
                        <textarea 
                          className="form-control"
                          value={item.description}
                          placeholder="Enter description"
                          style={{ 
                            minWidth: '400px', 
                            minHeight: '60px',
                            resize: 'both',
                            overflow: 'auto'
                          }}
                          rows="3"
                          onInput={(e) => {
                            e.target.style.height = 'auto';
                            e.target.style.height = Math.max(60, e.target.scrollHeight) + 'px';
                          }}
                        />
                      </td>
                      <td><input type="text" className="form-control" value={item.vendorName} style={{minWidth: '150px', height: '40px'}} /></td>
                      <td><input type="number" className="form-control" value={item.quantity} style={{minWidth: '80px', height: '40px', textAlign: 'center'}} /></td>
                      <td>
                        <select className="form-control" style={{minWidth: '100px', height: '40px'}}>
                          <option>Pcs</option>
                          <option>Kg</option>
                          <option>m</option>
                        </select>
                      </td>
                      <td><input type="number" className="form-control" value={item.rate} style={{minWidth: '100px', height: '40px', textAlign: 'right'}} step="0.01" /></td>
                      <td><input type="number" className="form-control" value={item.amount} style={{minWidth: '100px', height: '40px', textAlign: 'right'}} readOnly step="0.01" /></td>
                      <td>
                        <select className="form-control" style={{minWidth: '150px', height: '40px'}}>
                          <option>GST_SG-7%</option>
                          <option>GST_SG-0%</option>
                        </select>
                      </td>
                      <td><input type="text" className="form-control" value={item.taxRate} style={{minWidth: '100px', height: '40px', textAlign: 'center'}} readOnly /></td>
                      <td><input type="number" className="form-control" value={item.grossAmt} style={{minWidth: '100px', height: '40px', textAlign: 'right'}} readOnly step="0.01" /></td>
                      <td><input type="number" className="form-control" value={item.taxAmt} style={{minWidth: '100px', height: '40px', textAlign: 'right'}} readOnly step="0.01" /></td>
                      <td><input type="text" className="form-control" style={{minWidth: '100px', height: '40px'}} /></td>
                      <td>
                        <select className="form-control" style={{minWidth: '150px', height: '40px'}}>
                          <option value="">Select...</option>
                          <option>TOM</option>
                          <option>MEP</option>
                        </select>
                      </td>
                      <td>
                        <select className="form-control" style={{minWidth: '150px', height: '40px'}}>
                          <option value="">Select...</option>
                          <option>Consumable Item</option>
                        </select>
                      </td>
                      <td>
                        <select className="form-control" style={{minWidth: '150px', height: '40px'}}>
                          <option value="">Select...</option>
                          <option>TOM -11</option>
                        </select>
                      </td>
                      <td>
                        <select className="form-control" style={{minWidth: '150px', height: '40px'}}>
                          <option value="">Select...</option>
                          <option>Customer A</option>
                          <option>Customer B</option>
                        </select>
                      </td>
                      <td>
                        <select className="form-control" style={{minWidth: '150px', height: '40px'}}>
                          <option value="">Select...</option>
                          <option>Project 1</option>
                          <option>Project 2</option>
                        </select>
                      </td>
                      <td style={{textAlign: 'center'}}><input type="checkbox" checked={item.billable} style={{width: '16px', height: '16px'}} /></td>
                      <td><input type="text" className="form-control" style={{minWidth: '100px', height: '40px'}} /></td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <button className="add-item-btn" onClick={handleAddItem} style={{marginTop: '1rem'}}>
            <i className="fas fa-plus"></i>
            Add Item
          </button>
            </div>
          )}

          {/* Billing Tab */}
          {activeTab === 'billing' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <div className="detail-section">
                <div className="section-header">
                  <i className="fas fa-chevron-down"></i>
                  <h3>Billing Information</h3>
                </div>
                <div className="section-body">
                  <div className="detail-grid">
                    <div className="detail-field">
                      <label>TERMS</label>
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
                    <div className="detail-field">
                      <label>INCOTERM</label>
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
                    <div className="detail-field">
                      <label>VENDOR SELECT</label>
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
                    <div className="detail-field">
                      <label>VENDOR</label>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <textarea 
                          className="form-control"
                          rows="3"
                          placeholder="Vendor address"
                          style={{ flex: 1 }}
                        />
                        <button className="btn-secondary" style={{ padding: '0.5rem 0.75rem', fontSize: '0.875rem' }}>
                          <i className="fas fa-map-marker-alt"></i> Map
                        </button>
                      </div>
                    </div>
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

          {/* Supplier Received Items Tab */}
          {activeTab === 'supplier' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <div className="detail-section">
                <div className="section-header">
                  <i className="fas fa-chevron-down"></i>
                  <h3>Received Items ()</h3>
                </div>
                <div className="section-body">
                  <div className="items-table-container">
                    <table className="items-table">
                      <thead>
                        <tr>
                          <th style={{ minWidth: '150px' }}>ITEM</th>
                          <th style={{ minWidth: '150px' }}>COUNT OF QUANTITY</th>
                          <th style={{ minWidth: '200px' }}>MEMO</th>
                          <th style={{ minWidth: '200px' }}>SUM OF AMOUNT (FOREIGN CURRENCY)</th>
                          <th style={{ minWidth: '150px' }}>NAME</th>
                          <th style={{ minWidth: '150px' }}>DOCUMENT NUMBER</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                            No records to show.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Supporting Documents */}
        <div className="detail-section" style={{ marginTop: '2rem' }}>
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Supporting Documents</h3>
          </div>
          <div className="section-body">
            <div style={{ 
              border: '2px dashed #ddd', 
              borderRadius: '4px', 
              padding: '3rem 2rem', 
              textAlign: 'center',
              background: '#fff'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <i className="fas fa-cloud-upload-alt" style={{ fontSize: '3.5rem', color: '#999' }}></i>
              </div>
              <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: '#555', fontSize: '0.95rem' }}>
                No supporting documents attached
              </div>
              <div style={{ marginBottom: '1.5rem', fontSize: '0.875rem', color: '#888' }}>
                Upload invoices, receipts, or other relevant files (PDF, DOC, XLS, JPG, PNG)
              </div>
              <button 
                className="btn-primary" 
                style={{
                  background: '#dc3545',
                  border: 'none',
                  padding: '0.6rem 1.5rem',
                  fontSize: '0.875rem',
                  borderRadius: '4px',
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <i className="fas fa-paperclip"></i> Attach Document
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ 
          display: 'flex', 
          gap: '0.75rem', 
          padding: '1rem 1.5rem', 
          borderTop: '1px solid #e0e0e0',
          background: '#fff'
        }}>
          <button 
            className="btn-toolbar"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button 
            className="btn-toolbar"
            onClick={handleCancel}
          >
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button 
            className="btn-toolbar-primary"
            onClick={handleSave}
          >
            <i className="fas fa-save"></i>
            Save
          </button>
        </div>
      </div>

      {toast.show && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast({ ...toast, show: false })} 
        />
      )}
    </div>
  );
};

export default EnterBills;
