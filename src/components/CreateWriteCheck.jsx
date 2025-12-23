import React, { useState, useEffect } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateWriteCheck = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('expenses');
  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const [formData, setFormData] = useState({
    customForm: 'TOM Check',
    transactionNumber: 'To Be Generated',
    account: '11230 ALL Bank Accounts : NEP UOB 9314-301-906-1',
    balance: '-13,485.52',
    payee: '',
    subsidiary: '',
    amount: '',
    currency: 'SGD',
    exchangeRate: '1.00',
    tax: '0.00',
    date: '8/11/2025',
    postingPeriod: '',
    toBePrinted: false,
    checkNumber: '491',
    memo: '',
    expenses: [
      {
        id: 1,
        account: '',
        amount: 0,
        taxCode: '',
        taxRate: 0,
        taxAmt: 0,
        grossAmt: 0,
        memo: '',
        department: '',
        class: '',
        location: '',
        customer: '',
        billable: false
      }
    ],
    items: []
  });

  const customFormOptions = [
    'TOM Check',
    'Standard Check',
    'TOM CHK'
  ];

  const subsidiaryOptions = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];

  const accountOptions = [
    '11110 ALL Bank Accounts : TSV DBS SGD 072-004442-8',
    '11120 ALL Bank Accounts : TEA DBS SGD 072-004465-7',
    '11130 ALL Bank Accounts : TMO DBS SGD 072-027380-0',
    '11140 ALL Bank Accounts : MEP DBS SGD 003-906132-3',
    '11150 ALL Bank Accounts : TDQ DBS SGD 072-004177-1',
    '11160 ALL Bank Accounts : TMO MAYBANK 0-421-10-2400-6',
    '11170 ALL Bank Accounts : TEA MAYBANK 0-421-10-2401-3',
    '11180 ALL Bank Accounts : TDQ MAYBANK 0-421-10-2404-3'
  ];

  const currencyOptions = ['SGD', 'USD', 'EUR', 'GBP', 'JPY'];

  const postingPeriodOptions = [
    'Nov 2021',
    'Dec 2021',
    'Jan 2022',
    'Feb 2022'
  ];

  const payeeOptions = [
    '100 Baroid Surface Solutions ,Halliburton Energy Services Inc',
    '1000 TEAM LEAD CONSTRUCTION PTE LTD',
    '1001 TECH ONSHORE MEP-PREFABRICATORS PTE LTD',
    '1002 TECH MARINE OFFSHORE (S) PTE LTD',
    '1003 TECH ELECTRIC AUTOMATION PTE LTD',
    '1004 TECH OFFSHORE MARINE (DQ) PTE LTD',
    '1005 TECH OFFSHORE MARINE (SV) PTE LTD',
    '1006 Netco Marine Pte Ltd',
    '1007 DAIKINAIRCONDITIONING(SINGAPORE)PTE.LTD',
    '1008 DAIKIN AIRCONDITIONING (SINGAPORE).LTD',
    '1009 TECH ONSHORE MEP PRE FABRICATORS (PVT) LTD',
    '101 Batt Cables',
    '1010 Technical Asia Pte Ltd'
  ];

  const departmentOptions = [
    'TOM: Human Resource',
    'TOM: Finance: Internal Transfer',
    'TOM: IT',
    'TOM: Logistic',
    'TOM: Operating',
    'TOM: Purchase',
    'TOM: Sales and Marketing',
    'TOM: Security',
    'TOM: TOM INTERNALS: TOM HR',
    'TOM: Nampak Reinsure',
    'TOM: Auction Handover',
    'TOM: Engineering',
    'TOM: Production'
  ];

  const classOptions = [
    'Consumable Item',
    'Course',
    'Cutting Works',
    'Electrical',
    'Fabrication',
    'Hydrotesting',
    'Installation work',
    'Manpower Supply',
    'Material Supply',
    'Module /Prefab',
    'Piping',
    'Project Works',
    'Refurbishment works',
    'Rental',
    'Repair & Referable',
    'Sale of Scrap Metal',
    'Structure'
  ];

  const locationOptions = [
    'Hong Hang Shipyard',
    'Mega yard',
    'MEP MARINE CC',
    'Shipyards/Construction',
    'Singapore (MEP)',
    'TOM-11',
    'TOM External Workshop',
    'TOM-13'
  ];

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

  const handleExpenseChange = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      expenses: prev.expenses.map(expense =>
        expense.id === id ? { ...expense, [field]: value } : expense
      )
    }));
  };

  const handleItemChange = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  const handleAddExpense = () => {
    const newExpense = {
      id: formData.expenses.length + 1,
      account: '',
      amount: 0,
      taxCode: '',
      taxRate: 0,
      taxAmt: 0,
      grossAmt: 0,
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
      grossAmt: 0,
      taxAmt: 0,
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

  const handleInsertExpenseAbove = (index) => {
    const newExpense = {
      id: Date.now(),
      account: '',
      amount: 0,
      taxCode: '',
      taxRate: 0,
      taxAmt: 0,
      grossAmt: 0,
      memo: '',
      department: '',
      class: '',
      location: '',
      customer: '',
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

  const handleInsertExpenseBelow = (index) => {
    const newExpense = {
      id: Date.now(),
      account: '',
      amount: 0,
      taxCode: '',
      taxRate: 0,
      taxAmt: 0,
      grossAmt: 0,
      memo: '',
      department: '',
      class: '',
      location: '',
      customer: '',
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
      grossAmt: 0,
      taxAmt: 0,
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
      grossAmt: 0,
      taxAmt: 0,
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

  const handleSave = () => {
    setToast({ show: true, message: 'Check saved successfully!', type: 'success' });
    setTimeout(() => {
      if (setCurrentPage) {
        setCurrentPage('view-checks');
      }
    }, 1500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-checks');
      }
    }
  };

  const calculateExpensesTotal = () => {
    return formData.expenses.reduce((sum, expense) => sum + (parseFloat(expense.amount) || 0), 0).toFixed(2);
  };

  const calculateItemsTotal = () => {
    return formData.items.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0).toFixed(2);
  };

  return (
    <div className="enquiry-detail" onClick={() => setActiveMenu(null)}>
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
            <>
              <button onClick={() => {
                handleInsertExpenseAbove(activeMenu);
                setActiveMenu(null);
              }}>
                <i className="fas fa-arrow-up"></i>
                Insert Above
              </button>
              <button onClick={() => {
                handleInsertExpenseBelow(activeMenu);
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
          <i className="fas fa-money-check"></i>
          <div>
            <h1>Check</h1>
            <div className="detail-subtitle">
              <span>{formData.transactionNumber || '# To be generated – New Check'}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={() => setCurrentPage('view-checks')}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-sync"></i>
          Recalc
        </button>
      </div>

      <div className="detail-content">
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>CUSTOM FORM <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.customForm}
                  onChange={(e) => handleFormChange('customForm', e.target.value)}
                >
                  {customFormOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>TRANSACTION NUMBER</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={formData.transactionNumber}
                  disabled
                  style={{ background: '#f9f9f9' }}
                />
              </div>

              <div className="detail-field">
                <label>ACCOUNT <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.account}
                  onChange={(e) => handleFormChange('account', e.target.value)}
                >
                  {accountOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>BALANCE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.balance}
                  disabled
                  style={{ background: '#f5f5f5' }}
                />
              </div>

              <div className="detail-field">
                <label>PAYEE <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.payee}
                  onChange={(e) => handleFormChange('payee', e.target.value)}
                >
                  <option value="">Select Payee...</option>
                  {payeeOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>AMOUNT</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.amount}
                  onChange={(e) => handleFormChange('amount', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>CURRENCY <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.currency}
                  onChange={(e) => handleFormChange('currency', e.target.value)}
                >
                  {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>EXCHANGE RATE <span className="required">*</span></label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.exchangeRate}
                  onChange={(e) => handleFormChange('exchangeRate', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>TAX</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.tax}
                  onChange={(e) => handleFormChange('tax', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>DATE <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.date}
                  onChange={(e) => handleFormChange('date', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>POSTING PERIOD <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.postingPeriod}
                  onChange={(e) => handleFormChange('postingPeriod', e.target.value)}
                >
                  <option value=""></option>
                  {postingPeriodOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>CHECK # <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.checkNumber}
                  onChange={(e) => handleFormChange('checkNumber', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '28px' }}>
                  <input 
                    type="checkbox"
                    checked={formData.toBePrinted}
                    onChange={(e) => handleFormChange('toBePrinted', e.target.checked)}
                  />
                  <label style={{ margin: 0, fontWeight: 'normal', fontSize: '13px' }}>TO BE PRINTED</label>
                </div>
              </div>

              <div className="detail-field">
                <label>MEMO</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.memo}
                  onChange={(e) => handleFormChange('memo', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

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
                  <option value=""></option>
                  {subsidiaryOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-tabs" style={{ marginTop: '2rem' }}>
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'expenses' ? 'active' : ''}`} onClick={() => setActiveTab('expenses')}>
              Expenses {calculateExpensesTotal()}
            </button>
            <button className={`tab-btn ${activeTab === 'items' ? 'active' : ''}`} onClick={() => setActiveTab('items')}>
              Items {calculateItemsTotal()}
            </button>
            <button className={`tab-btn ${activeTab === 'relationships' ? 'active' : ''}`} onClick={() => setActiveTab('relationships')}>
              Relationships
            </button>
            <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>
              Communication
            </button>
            <button className={`tab-btn ${activeTab === 'payeeAddress' ? 'active' : ''}`} onClick={() => setActiveTab('payeeAddress')}>
              Payee Address
            </button>
            <button className={`tab-btn ${activeTab === 'supplierItems' ? 'active' : ''}`} onClick={() => setActiveTab('supplierItems')}>
              Supplier Received Items
            </button>
          </div>

          {activeTab === 'expenses' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <h2 className="section-title">
                <i className="fas fa-receipt"></i>
                Expenses {calculateExpensesTotal()}
              </h2>
              
              <div className="items-table-container" style={{ marginBottom: '1rem' }}>
                <table className="items-table">
                  <thead>
                    <tr>
                      <th style={{width: '30px'}}></th>
                      <th style={{minWidth: '200px'}}>ACCOUNT <span style={{ color: 'red' }}>*</span></th>
                      <th style={{minWidth: '120px'}}>AMOUNT <span style={{ color: 'red' }}>*</span></th>
                      <th style={{minWidth: '150px'}}>TAX CODE</th>
                      <th style={{minWidth: '100px'}}>TAX RATE</th>
                      <th style={{minWidth: '100px'}}>GROSS AMT</th>
                      <th style={{minWidth: '100px'}}>TAX AMT</th>
                      <th style={{minWidth: '250px'}}>MEMO</th>
                      <th style={{minWidth: '150px'}}>DEPARTMENT <span style={{ color: 'red' }}>*</span></th>
                      <th style={{minWidth: '150px'}}>CLASS</th>
                      <th style={{minWidth: '150px'}}>LOCATION</th>
                      <th style={{minWidth: '150px'}}>CUSTOMER</th>
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
                          <input
                            type="text"
                            className="form-control"
                            value={expense.account}
                            onChange={(e) => handleExpenseChange(expense.id, 'account', e.target.value)}
                            placeholder="<Type then tab>"
                            style={{minWidth: '200px', height: '32px'}}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={expense.amount}
                            onChange={(e) => handleExpenseChange(expense.id, 'amount', e.target.value)}
                            style={{minWidth: '120px', height: '32px', textAlign: 'right'}}
                            step="0.01"
                          />
                        </td>
                        <td>
                          <select 
                            className="form-control" 
                            value={expense.taxCode}
                            onChange={(e) => handleExpenseChange(expense.id, 'taxCode', e.target.value)}
                            style={{minWidth: '150px', height: '32px'}}
                          >
                            <option value="">Select...</option>
                            <option>GST_SG-7%</option>
                            <option>GST_SG-0%</option>
                          </select>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={expense.taxRate}
                            readOnly
                            style={{minWidth: '100px', height: '32px', textAlign: 'center'}}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={expense.grossAmt}
                            readOnly
                            style={{minWidth: '100px', height: '32px', textAlign: 'right'}}
                            step="0.01"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={expense.taxAmt}
                            readOnly
                            style={{minWidth: '100px', height: '32px', textAlign: 'right'}}
                            step="0.01"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={expense.memo}
                            onChange={(e) => handleExpenseChange(expense.id, 'memo', e.target.value)}
                            style={{minWidth: '250px', height: '32px'}}
                          />
                        </td>
                        <td>
                          <select 
                            className="form-control"
                            value={expense.department}
                            onChange={(e) => handleExpenseChange(expense.id, 'department', e.target.value)}
                            style={{minWidth: '150px', height: '32px'}}
                          >
                            <option value="">Select...</option>
                            {departmentOptions.map(opt => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        </td>
                        <td>
                          <select 
                            className="form-control"
                            value={expense.class}
                            onChange={(e) => handleExpenseChange(expense.id, 'class', e.target.value)}
                            style={{minWidth: '150px', height: '32px'}}
                          >
                            <option value="">Select...</option>
                            {classOptions.map(opt => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        </td>
                        <td>
                          <select 
                            className="form-control"
                            value={expense.location}
                            onChange={(e) => handleExpenseChange(expense.id, 'location', e.target.value)}
                            style={{minWidth: '150px', height: '32px'}}
                          >
                            <option value="">Select...</option>
                            {locationOptions.map(opt => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={expense.customer}
                            onChange={(e) => handleExpenseChange(expense.id, 'customer', e.target.value)}
                            placeholder="<Type then tab>"
                            style={{minWidth: '150px', height: '32px'}}
                          />
                        </td>
                        <td style={{textAlign: 'center'}}>
                          <input
                            type="checkbox"
                            checked={expense.billable}
                            onChange={(e) => handleExpenseChange(expense.id, 'billable', e.target.checked)}
                            style={{width: '16px', height: '16px'}}
                          />
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

          {activeTab === 'items' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <h2 className="section-title">
                <i className="fas fa-box"></i>
                Items {calculateItemsTotal()}
              </h2>
              
              <div className="items-table-container" style={{ marginBottom: '1rem' }}>
                <table className="items-table">
                  <thead>
                    <tr>
                      <th style={{width: '30px'}}></th>
                      <th style={{minWidth: '150px'}}>ITEM</th>
                      <th style={{minWidth: '150px'}}>VENDOR NAME</th>
                      <th style={{minWidth: '80px'}}>QUANTITY</th>
                      <th style={{minWidth: '100px'}}>UNITS</th>
                      <th style={{minWidth: '400px'}}>DESCRIPTION</th>
                      <th style={{minWidth: '100px'}}>RATE</th>
                      <th style={{minWidth: '100px'}}>AMOUNT</th>
                      <th style={{minWidth: '150px'}}>TAX CODE</th>
                      <th style={{minWidth: '100px'}}>TAX RATE</th>
                      <th style={{minWidth: '100px'}}>GROSS AMT</th>
                      <th style={{minWidth: '100px'}}>TAX AMT</th>
                      <th style={{minWidth: '100px'}}>OPTIONS</th>
                      <th style={{minWidth: '150px'}}>CLASS</th>
                      <th style={{minWidth: '150px'}}>LOCATION</th>
                      <th style={{minWidth: '150px'}}>CUSTOMER:PROJECT</th>
                      <th style={{minWidth: '80px'}}>BILLABLE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.items.length === 0 ? (
                      <tr>
                        <td colSpan="17" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
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
                              onChange={(e) => handleItemChange(item.id, 'item', e.target.value)}
                              placeholder="<Type then tab>"
                              style={{minWidth: '150px', height: '40px'}} 
                            />
                          </td>
                          <td>
                            <input 
                              type="text" 
                              className="form-control" 
                              value={item.vendorName}
                              onChange={(e) => handleItemChange(item.id, 'vendorName', e.target.value)}
                              style={{minWidth: '150px', height: '40px'}} 
                            />
                          </td>
                          <td>
                            <input 
                              type="number" 
                              className="form-control" 
                              value={item.quantity}
                              onChange={(e) => handleItemChange(item.id, 'quantity', e.target.value)}
                              style={{minWidth: '80px', height: '40px', textAlign: 'center'}} 
                            />
                          </td>
                          <td>
                            <select 
                              className="form-control"
                              value={item.units}
                              onChange={(e) => handleItemChange(item.id, 'units', e.target.value)}
                              style={{minWidth: '100px', height: '40px'}}
                            >
                              <option>Pcs</option>
                              <option>Kg</option>
                              <option>m</option>
                            </select>
                          </td>
                          <td>
                            <textarea 
                              className="form-control"
                              value={item.description}
                              onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                              placeholder="Enter description"
                              style={{ 
                                minWidth: '400px', 
                                minHeight: '60px',
                                resize: 'both',
                                overflow: 'auto'
                              }}
                              rows="3"
                            />
                          </td>
                          <td>
                            <input 
                              type="number" 
                              className="form-control" 
                              value={item.rate}
                              onChange={(e) => handleItemChange(item.id, 'rate', e.target.value)}
                              style={{minWidth: '100px', height: '40px', textAlign: 'right'}} 
                              step="0.01" 
                            />
                          </td>
                          <td>
                            <input 
                              type="number" 
                              className="form-control" 
                              value={item.amount}
                              readOnly
                              style={{minWidth: '100px', height: '40px', textAlign: 'right'}} 
                              step="0.01" 
                            />
                          </td>
                          <td>
                            <select 
                              className="form-control"
                              value={item.taxCode}
                              onChange={(e) => handleItemChange(item.id, 'taxCode', e.target.value)}
                              style={{minWidth: '150px', height: '40px'}}
                            >
                              <option>GST_SG-7%</option>
                              <option>GST_SG-0%</option>
                            </select>
                          </td>
                          <td>
                            <input 
                              type="text" 
                              className="form-control" 
                              value={item.taxRate}
                              readOnly
                              style={{minWidth: '100px', height: '40px', textAlign: 'center'}} 
                            />
                          </td>
                          <td>
                            <input 
                              type="number" 
                              className="form-control" 
                              value={item.grossAmt}
                              readOnly
                              style={{minWidth: '100px', height: '40px', textAlign: 'right'}} 
                              step="0.01" 
                            />
                          </td>
                          <td>
                            <input 
                              type="number" 
                              className="form-control" 
                              value={item.taxAmt}
                              readOnly
                              style={{minWidth: '100px', height: '40px', textAlign: 'right'}} 
                              step="0.01" 
                            />
                          </td>
                          <td>
                            <input 
                              type="text" 
                              className="form-control" 
                              style={{minWidth: '100px', height: '40px'}} 
                            />
                          </td>
                          <td>
                            <select 
                              className="form-control"
                              value={item.class}
                              onChange={(e) => handleItemChange(item.id, 'class', e.target.value)}
                              style={{minWidth: '150px', height: '40px'}}
                            >
                              <option value="">Select...</option>
                              {classOptions.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <select 
                              className="form-control"
                              value={item.location}
                              onChange={(e) => handleItemChange(item.id, 'location', e.target.value)}
                              style={{minWidth: '150px', height: '40px'}}
                            >
                              <option value="">Select...</option>
                              {locationOptions.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <input 
                              type="text" 
                              className="form-control"
                              value={item.customerProject}
                              onChange={(e) => handleItemChange(item.id, 'customerProject', e.target.value)}
                              placeholder="<Type then tab>"
                              style={{minWidth: '150px', height: '40px'}} 
                            />
                          </td>
                          <td style={{textAlign: 'center'}}>
                            <input 
                              type="checkbox" 
                              checked={item.billable}
                              onChange={(e) => handleItemChange(item.id, 'billable', e.target.checked)}
                              style={{width: '16px', height: '16px'}} 
                            />
                          </td>
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
                        <th style={{ padding: '8px 6px' }}>CONTACT <span style={{ color: 'red' }}>*</span></th>
                        <th style={{ padding: '8px 6px' }}>JOB TITLE</th>
                        <th style={{ padding: '8px 6px' }}>EMAIL</th>
                        <th style={{ padding: '8px 6px' }}>MAIN PHONE</th>
                        <th style={{ padding: '8px 6px' }}>SUBSIDIARY <span style={{ color: 'red' }}>*</span></th>
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

          {activeTab === 'communication' && (
            <div className="tab-content">
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Events
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
                        <th style={{ padding: '8px 6px' }}>TITLE <span style={{ color: 'red' }}>*</span></th>
                        <th style={{ padding: '8px 6px' }}>LOCATION</th>
                        <th style={{ padding: '8px 6px' }}>DATE <span style={{ color: 'red' }}>*</span></th>
                        <th style={{ padding: '8px 6px' }}>ALL DAY</th>
                        <th style={{ padding: '8px 6px' }}>START TIME</th>
                        <th style={{ padding: '8px 6px' }}>END TIME</th>
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

              <div className="form-section" style={{ marginTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Phone Calls
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
                        <th style={{ padding: '8px 6px' }}>TITLE <span style={{ color: 'red' }}>*</span></th>
                        <th style={{ padding: '8px 6px' }}>ASSIGNED</th>
                        <th style={{ padding: '8px 6px' }}>PHONE</th>
                        <th style={{ padding: '8px 6px' }}>PRIORITY</th>
                        <th style={{ padding: '8px 6px' }}>STATUS</th>
                        <th style={{ padding: '8px 6px' }}>START DATE</th>
                        <th style={{ padding: '8px 6px' }}>START TIME</th>
                        <th style={{ padding: '8px 6px' }}>COMPLETED DATE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="8" style={{ textAlign: 'center', padding: '1rem', color: '#999' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="form-section" style={{ marginTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Files
                </h3>
                <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                  <table className="items-table" style={{ width: '100%', fontSize: '0.75rem' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '8px 6px' }}>NAME</th>
                        <th style={{ padding: '8px 6px' }}>SIZE</th>
                        <th style={{ padding: '8px 6px' }}>TYPE</th>
                        <th style={{ padding: '8px 6px' }}>DATE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="4" style={{ textAlign: 'center', padding: '1rem', color: '#999' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="form-section" style={{ marginTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  User Notes
                </h3>
                <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                  <table className="items-table" style={{ width: '100%', fontSize: '0.75rem' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '8px 6px' }}>TITLE <span style={{ color: 'red' }}>*</span></th>
                        <th style={{ padding: '8px 6px' }}>NOTE</th>
                        <th style={{ padding: '8px 6px' }}>NOTE TYPE</th>
                        <th style={{ padding: '8px 6px' }}>NOTE DATE</th>
                        <th style={{ padding: '8px 6px' }}>AUTHOR</th>
                        <th style={{ padding: '8px 6px' }}>TIME</th>
                        <th style={{ padding: '8px 6px' }}>DIRECTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="7" style={{ textAlign: 'center', padding: '1rem', color: '#999' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'payeeAddress' && (
            <div className="tab-content">
              <div className="form-section" style={{ padding: '1.5rem' }}>
                <div className="detail-section">
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Payee Address</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>ADDRESS TO SELECT</label>
                        <select className="form-control">
                          <option value="">Select...</option>
                          <option>Primary Address</option>
                          <option>Billing Address</option>
                          <option>Shipping Address</option>
                        </select>
                      </div>
                      <div className="detail-field">
                        <label>PAY TO</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <textarea 
                            className="form-control"
                            rows="4"
                            placeholder="Payee address"
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
            </div>
          )}

          {activeTab === 'supplierItems' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <div className="detail-section">
                <div className="section-header">
                  <i className="fas fa-chevron-down"></i>
                  <h3>Received Items</h3>
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

export default CreateWriteCheck;
