import React, { useState, useEffect } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateMakeDeposit = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('payments');
  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const [formData, setFormData] = useState({
    customForm: 'TOM Deposit',
    deposit: 'To Be Generated',
    currency: 'SGD',
    exchangeRate: '1.00',
    account: '11180 ALL Bank Accounts : GD 072-904177-1',
    amount: '',
    date: '31/3/2021',
    postingPeriod: 'Mar 2021',
    toBePrinted: false,
    memo: '',
    subsidiary: 'Tech Offshore Marine (DQ) Pte Ltd',
    class: '',
    location: '',
    department: 'TOM : Finance',
    payments: [
      {
        id: 1,
        selected: true,
        date: '31/12/2022',
        type: 'Payment',
        number: 'PVTOMSV00008',
        memo: 'VOID',
        paymentMethod: '',
        refNo: '',
        from: '3 Sembcorp Marine Integrated Yard Pte Ltd',
        currency: 'SGD',
        paymentAmount: 0.00,
        amountSGD: 0.00
      }
    ],
    otherDeposits: [],
    cashBack: []
  });

  const customFormOptions = ['TOM Deposit', 'Standard Deposit'];
  
  const subsidiaryOptions = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
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

  const handlePaymentChange = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      payments: prev.payments.map(payment =>
        payment.id === id ? { ...payment, [field]: value } : payment
      )
    }));
  };

  const handleOtherDepositChange = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      otherDeposits: prev.otherDeposits.map(deposit =>
        deposit.id === id ? { ...deposit, [field]: value } : deposit
      )
    }));
  };

  const handleCashBackChange = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      cashBack: prev.cashBack.map(cash =>
        cash.id === id ? { ...cash, [field]: value } : cash
      )
    }));
  };

  const handleAddOtherDeposit = () => {
    const newDeposit = {
      id: formData.otherDeposits.length + 1,
      name: '',
      amount: 0,
      account: '',
      paymentMethod: '',
      number: '',
      department: '',
      class: '',
      location: '',
      memo: ''
    };
    setFormData(prev => ({
      ...prev,
      otherDeposits: [...prev.otherDeposits, newDeposit]
    }));
  };

  const handleRemoveOtherDeposit = (id) => {
    setFormData(prev => ({
      ...prev,
      otherDeposits: prev.otherDeposits.filter(deposit => deposit.id !== id)
    }));
  };

  const handleAddCashBack = () => {
    const newCashBack = {
      id: formData.cashBack.length + 1,
      amount: 0,
      account: '',
      department: '',
      class: '',
      location: '',
      memo: ''
    };
    setFormData(prev => ({
      ...prev,
      cashBack: [...prev.cashBack, newCashBack]
    }));
  };

  const handleRemoveCashBack = (id) => {
    setFormData(prev => ({
      ...prev,
      cashBack: prev.cashBack.filter(cash => cash.id !== id)
    }));
  };

  const handleRowAction = (e, index, type) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    setMenuPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX
    });
    setActiveMenu({ index, type });
  };

  const handleInsertAbove = () => {
    if (activeMenu) {
      if (activeMenu.type === 'otherDeposit') {
        const newDeposit = {
          id: Date.now(),
          name: '',
          amount: 0,
          account: '',
          paymentMethod: '',
          number: '',
          department: '',
          class: '',
          location: '',
          memo: ''
        };
        setFormData(prev => ({
          ...prev,
          otherDeposits: [
            ...prev.otherDeposits.slice(0, activeMenu.index),
            newDeposit,
            ...prev.otherDeposits.slice(activeMenu.index)
          ]
        }));
      } else if (activeMenu.type === 'cashBack') {
        const newCashBack = {
          id: Date.now(),
          amount: 0,
          account: '',
          department: '',
          class: '',
          location: '',
          memo: ''
        };
        setFormData(prev => ({
          ...prev,
          cashBack: [
            ...prev.cashBack.slice(0, activeMenu.index),
            newCashBack,
            ...prev.cashBack.slice(activeMenu.index)
          ]
        }));
      }
    }
    setActiveMenu(null);
  };

  const handleInsertBelow = () => {
    if (activeMenu) {
      if (activeMenu.type === 'otherDeposit') {
        const newDeposit = {
          id: Date.now(),
          name: '',
          amount: 0,
          account: '',
          paymentMethod: '',
          number: '',
          department: '',
          class: '',
          location: '',
          memo: ''
        };
        setFormData(prev => ({
          ...prev,
          otherDeposits: [
            ...prev.otherDeposits.slice(0, activeMenu.index + 1),
            newDeposit,
            ...prev.otherDeposits.slice(activeMenu.index + 1)
          ]
        }));
      } else if (activeMenu.type === 'cashBack') {
        const newCashBack = {
          id: Date.now(),
          amount: 0,
          account: '',
          department: '',
          class: '',
          location: '',
          memo: ''
        };
        setFormData(prev => ({
          ...prev,
          cashBack: [
            ...prev.cashBack.slice(0, activeMenu.index + 1),
            newCashBack,
            ...prev.cashBack.slice(activeMenu.index + 1)
          ]
        }));
      }
    }
    setActiveMenu(null);
  };

  const handleDeleteRow = () => {
    if (activeMenu) {
      if (activeMenu.type === 'otherDeposit') {
        setFormData(prev => ({
          ...prev,
          otherDeposits: prev.otherDeposits.filter((_, idx) => idx !== activeMenu.index)
        }));
      } else if (activeMenu.type === 'cashBack') {
        setFormData(prev => ({
          ...prev,
          cashBack: prev.cashBack.filter((_, idx) => idx !== activeMenu.index)
        }));
      }
    }
    setActiveMenu(null);
  };

  const handleSave = () => {
    setToast({ show: true, message: 'Deposit saved successfully!', type: 'success' });
    setTimeout(() => {
      if (setCurrentPage) {
        setCurrentPage('view-deposits');
      }
    }, 1500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-deposits');
      }
    }
  };

  const calculatePaymentsTotal = () => {
    return formData.payments.reduce((sum, payment) => sum + (parseFloat(payment.amountSGD) || 0), 0).toFixed(2);
  };

  const calculateOtherDepositsTotal = () => {
    return formData.otherDeposits.reduce((sum, deposit) => sum + (parseFloat(deposit.amount) || 0), 0).toFixed(2);
  };

  const calculateCashBackTotal = () => {
    return formData.cashBack.reduce((sum, cash) => sum + (parseFloat(cash.amount) || 0), 0).toFixed(2);
  };

  return (
    <div className="enquiry-detail" onClick={() => setActiveMenu(null)}>
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-money-check-alt"></i>
          <div>
            <h1>Deposit</h1>
            <div className="detail-subtitle">
              <span>{formData.deposit || '# To be generated – New Deposit'}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={() => setCurrentPage('view-deposits')}>List</button>
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
                <label>DEPOSIT #</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={formData.deposit}
                  disabled
                  style={{ background: '#f9f9f9' }}
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
                />
              </div>

              <div className="detail-field">
                <label>ACCOUNT <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.account}
                  onChange={(e) => handleFormChange('account', e.target.value)}
                  placeholder="<Type then tab>"
                />
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
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.postingPeriod}
                  onChange={(e) => handleFormChange('postingPeriod', e.target.value)}
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

              <div className="detail-field">
                <label>CLASS</label>
                <select 
                  className="form-control"
                  value={formData.class}
                  onChange={(e) => handleFormChange('class', e.target.value)}
                >
                  <option value=""></option>
                  {classOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>LOCATION</label>
                <select 
                  className="form-control"
                  value={formData.location}
                  onChange={(e) => handleFormChange('location', e.target.value)}
                >
                  <option value=""></option>
                  {locationOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>DEPARTMENT</label>
                <select 
                  className="form-control"
                  value={formData.department}
                  onChange={(e) => handleFormChange('department', e.target.value)}
                >
                  <option value=""></option>
                  {departmentOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-tabs" style={{ marginTop: '2rem' }}>
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'payments' ? 'active' : ''}`} onClick={() => setActiveTab('payments')}>
              Payments {calculatePaymentsTotal()} ●
            </button>
            <button className={`tab-btn ${activeTab === 'otherDeposits' ? 'active' : ''}`} onClick={() => setActiveTab('otherDeposits')}>
              Other Deposits {calculateOtherDepositsTotal()}
            </button>
            <button className={`tab-btn ${activeTab === 'cashBack' ? 'active' : ''}`} onClick={() => setActiveTab('cashBack')}>
              Cash Back {calculateCashBackTotal()}
            </button>
            <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>
              Communication
            </button>
          </div>

          {activeTab === 'payments' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <div style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
                <button className="add-item-btn">
                  <i className="fas fa-check"></i> Mark All
                </button>
                <button className="add-item-btn">
                  <i className="fas fa-times"></i> Unmark All
                </button>
                <button className="add-item-btn">
                  <i className="fas fa-cog"></i> Customize
                </button>
              </div>

              <div className="items-table-container">
                <table className="items-table">
                  <thead>
                    <tr>
                      <th style={{width: '30px'}}></th>
                      <th style={{minWidth: '100px'}}>DATE ▲</th>
                      <th style={{minWidth: '100px'}}>TYPE</th>
                      <th style={{minWidth: '150px'}}>NUMBER</th>
                      <th style={{minWidth: '200px'}}>MEMO</th>
                      <th style={{minWidth: '150px'}}>PAYMENT METHOD</th>
                      <th style={{minWidth: '100px'}}>REF NO.</th>
                      <th style={{minWidth: '250px'}}>FROM</th>
                      <th style={{minWidth: '100px'}}>CURRENCY</th>
                      <th style={{minWidth: '120px'}}>PAYMENT AMOUNT</th>
                      <th style={{minWidth: '120px'}}>AMOUNT (SGD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.payments.map((payment) => (
                      <tr key={payment.id}>
                        <td style={{ textAlign: 'center' }}>
                          <input
                            type="checkbox"
                            checked={payment.selected}
                            onChange={(e) => handlePaymentChange(payment.id, 'selected', e.target.checked)}
                            style={{width: '16px', height: '16px'}}
                          />
                        </td>
                        <td>{payment.date}</td>
                        <td>{payment.type}</td>
                        <td>{payment.number}</td>
                        <td>{payment.memo}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={payment.paymentMethod}
                            onChange={(e) => handlePaymentChange(payment.id, 'paymentMethod', e.target.value)}
                            style={{minWidth: '150px', height: '40px'}}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={payment.refNo}
                            onChange={(e) => handlePaymentChange(payment.id, 'refNo', e.target.value)}
                            style={{minWidth: '100px', height: '40px'}}
                          />
                        </td>
                        <td>{payment.from}</td>
                        <td>{payment.currency}</td>
                        <td style={{ textAlign: 'right' }}>{payment.paymentAmount.toFixed(2)}</td>
                        <td style={{ textAlign: 'right' }}>{payment.amountSGD.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'otherDeposits' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <div style={{ marginBottom: '12px' }}>
                <button className="add-item-btn" onClick={handleAddOtherDeposit}>
                  <i className="fas fa-plus"></i> Add
                </button>
              </div>

              <div className="items-table-container">
                <table className="items-table">
                  <thead>
                    <tr>
                      <th style={{width: '30px'}}></th>
                      <th style={{minWidth: '200px'}}>NAME</th>
                      <th style={{minWidth: '120px'}}>AMOUNT <span style={{ color: 'red' }}>*</span></th>
                      <th style={{minWidth: '200px'}}>ACCOUNT <span style={{ color: 'red' }}>*</span></th>
                      <th style={{minWidth: '150px'}}>PAYMENT METHOD</th>
                      <th style={{minWidth: '100px'}}>NUMBER</th>
                      <th style={{minWidth: '150px'}}>DEPARTMENT <span style={{ color: 'red' }}>*</span></th>
                      <th style={{minWidth: '150px'}}>CLASS</th>
                      <th style={{minWidth: '150px'}}>LOCATION</th>
                      <th style={{minWidth: '200px'}}>MEMO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.otherDeposits.length === 0 ? (
                      <tr>
                        <td colSpan="10" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                          No other deposits added yet
                        </td>
                      </tr>
                    ) : (
                      formData.otherDeposits.map((deposit, index) => (
                        <tr 
                          key={deposit.id}
                          className={`table-row-with-actions ${hoveredRow === index ? 'hovered' : ''}`}
                          onMouseEnter={() => setHoveredRow(index)}
                          onMouseLeave={() => setHoveredRow(null)}
                        >
                          <td style={{ textAlign: 'center', position: 'relative' }}>
                            {hoveredRow === index && (
                              <button 
                                className="row-actions-btn"
                                onClick={(e) => handleRowAction(e, index, 'otherDeposit')}
                                style={{
                                  position: 'absolute',
                                  left: '5px',
                                  top: '50%',
                                  transform: 'translateY(-50%)',
                                  background: '#4a90e2',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '3px',
                                  padding: '4px 8px',
                                  cursor: 'pointer',
                                  fontSize: '12px',
                                  zIndex: 10
                                }}
                              >
                                ⋮
                              </button>
                            )}
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              value={deposit.name}
                              onChange={(e) => handleOtherDepositChange(deposit.id, 'name', e.target.value)}
                              placeholder="<Type then tab>"
                              style={{minWidth: '200px', height: '40px'}}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              value={deposit.amount}
                              onChange={(e) => handleOtherDepositChange(deposit.id, 'amount', e.target.value)}
                              style={{minWidth: '120px', height: '40px', textAlign: 'right'}}
                              step="0.01"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              value={deposit.account}
                              onChange={(e) => handleOtherDepositChange(deposit.id, 'account', e.target.value)}
                              placeholder="<Type then tab>"
                              style={{minWidth: '200px', height: '40px'}}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              value={deposit.paymentMethod}
                              onChange={(e) => handleOtherDepositChange(deposit.id, 'paymentMethod', e.target.value)}
                              style={{minWidth: '150px', height: '40px'}}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              value={deposit.number}
                              onChange={(e) => handleOtherDepositChange(deposit.id, 'number', e.target.value)}
                              style={{minWidth: '100px', height: '40px'}}
                            />
                          </td>
                          <td>
                            <select 
                              className="form-control"
                              value={deposit.department}
                              onChange={(e) => handleOtherDepositChange(deposit.id, 'department', e.target.value)}
                              style={{minWidth: '150px', height: '40px'}}
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
                              value={deposit.class}
                              onChange={(e) => handleOtherDepositChange(deposit.id, 'class', e.target.value)}
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
                              value={deposit.location}
                              onChange={(e) => handleOtherDepositChange(deposit.id, 'location', e.target.value)}
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
                              value={deposit.memo}
                              onChange={(e) => handleOtherDepositChange(deposit.id, 'memo', e.target.value)}
                              style={{minWidth: '200px', height: '40px'}}
                            />
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'cashBack' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <div style={{ marginBottom: '12px' }}>
                <button className="add-item-btn" onClick={handleAddCashBack}>
                  <i className="fas fa-plus"></i> Add
                </button>
              </div>

              <div className="items-table-container">
                <table className="items-table">
                  <thead>
                    <tr>
                      <th style={{width: '30px'}}></th>
                      <th style={{minWidth: '120px'}}>AMOUNT <span style={{ color: 'red' }}>*</span></th>
                      <th style={{minWidth: '200px'}}>ACCOUNT <span style={{ color: 'red' }}>*</span></th>
                      <th style={{minWidth: '150px'}}>DEPARTMENT <span style={{ color: 'red' }}>*</span></th>
                      <th style={{minWidth: '150px'}}>CLASS</th>
                      <th style={{minWidth: '150px'}}>LOCATION</th>
                      <th style={{minWidth: '200px'}}>MEMO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.cashBack.length === 0 ? (
                      <tr>
                        <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                          No cash back added yet
                        </td>
                      </tr>
                    ) : (
                      formData.cashBack.map((cash, index) => (
                        <tr 
                          key={cash.id}
                          className={`table-row-with-actions ${hoveredRow === index ? 'hovered' : ''}`}
                          onMouseEnter={() => setHoveredRow(index)}
                          onMouseLeave={() => setHoveredRow(null)}
                        >
                          <td style={{ textAlign: 'center', position: 'relative' }}>
                            {hoveredRow === index && (
                              <button 
                                className="row-actions-btn"
                                onClick={(e) => handleRowAction(e, index, 'cashBack')}
                                style={{
                                  position: 'absolute',
                                  left: '5px',
                                  top: '50%',
                                  transform: 'translateY(-50%)',
                                  background: '#4a90e2',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '3px',
                                  padding: '4px 8px',
                                  cursor: 'pointer',
                                  fontSize: '12px',
                                  zIndex: 10
                                }}
                              >
                                ⋮
                              </button>
                            )}
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              value={cash.amount}
                              onChange={(e) => handleCashBackChange(cash.id, 'amount', e.target.value)}
                              style={{minWidth: '120px', height: '40px', textAlign: 'right'}}
                              step="0.01"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              value={cash.account}
                              onChange={(e) => handleCashBackChange(cash.id, 'account', e.target.value)}
                              placeholder="<Type then tab>"
                              style={{minWidth: '200px', height: '40px'}}
                            />
                          </td>
                          <td>
                            <select 
                              className="form-control"
                              value={cash.department}
                              onChange={(e) => handleCashBackChange(cash.id, 'department', e.target.value)}
                              style={{minWidth: '150px', height: '40px'}}
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
                              value={cash.class}
                              onChange={(e) => handleCashBackChange(cash.id, 'class', e.target.value)}
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
                              value={cash.location}
                              onChange={(e) => handleCashBackChange(cash.id, 'location', e.target.value)}
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
                              value={cash.memo}
                              onChange={(e) => handleCashBackChange(cash.id, 'memo', e.target.value)}
                              style={{minWidth: '200px', height: '40px'}}
                            />
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
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
            </div>
          )}
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end', paddingBottom: '2rem' }}>
          <button className="btn-toolbar" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn-toolbar-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
        </div>
      </div>

      {activeMenu && (
        <div 
          className="row-action-menu"
          style={{
            position: 'absolute',
            top: `${menuPosition.top}px`,
            left: `${menuPosition.left}px`,
            background: 'white',
            border: '1px solid #ddd',
            borderRadius: '4px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            zIndex: 1000,
            minWidth: '150px'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={handleInsertAbove}
            style={{
              display: 'block',
              width: '100%',
              padding: '8px 12px',
              border: 'none',
              background: 'none',
              textAlign: 'left',
              cursor: 'pointer',
              fontSize: '13px'
            }}
            onMouseEnter={(e) => e.target.style.background = '#f5f5f5'}
            onMouseLeave={(e) => e.target.style.background = 'none'}
          >
            Insert Line Above
          </button>
          <button 
            onClick={handleInsertBelow}
            style={{
              display: 'block',
              width: '100%',
              padding: '8px 12px',
              border: 'none',
              background: 'none',
              textAlign: 'left',
              cursor: 'pointer',
              fontSize: '13px'
            }}
            onMouseEnter={(e) => e.target.style.background = '#f5f5f5'}
            onMouseLeave={(e) => e.target.style.background = 'none'}
          >
            Insert Line Below
          </button>
          <button 
            onClick={handleDeleteRow}
            style={{
              display: 'block',
              width: '100%',
              padding: '8px 12px',
              border: 'none',
              background: 'none',
              textAlign: 'left',
              cursor: 'pointer',
              fontSize: '13px',
              color: '#dc3545'
            }}
            onMouseEnter={(e) => e.target.style.background = '#f5f5f5'}
            onMouseLeave={(e) => e.target.style.background = 'none'}
          >
            Delete Line
          </button>
        </div>
      )}

      <Toast 
        message={toast.message} 
        type={toast.type} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
    </div>
  );
};

export default CreateMakeDeposit;
