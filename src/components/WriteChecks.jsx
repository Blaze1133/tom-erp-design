import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const WriteChecks = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('expenses');

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
    memo: ''
  });

  const [expenses, setExpenses] = useState([
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
  ]);

  const customFormOptions = [
    'TOM Check',
    'Standard Check',
    'TOM CHK'
  ];

  const subsidiaryOptions = [
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

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleExpenseChange = (id, field, value) => {
    setExpenses(prevExpenses =>
      prevExpenses.map(expense =>
        expense.id === id ? { ...expense, [field]: value } : expense
      )
    );
  };

  const handleAddExpense = () => {
    const newExpense = {
      id: expenses.length + 1,
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
    setExpenses([...expenses, newExpense]);
  };

  const handleRemoveExpense = (id) => {
    if (expenses.length > 1) {
      setExpenses(expenses.filter(expense => expense.id !== id));
    }
  };

  const handleSave = () => {
    setToast({ show: true, message: 'Check saved successfully!', type: 'success' });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  const calculateExpensesTotal = () => {
    return expenses.reduce((sum, expense) => sum + (parseFloat(expense.amount) || 0), 0).toFixed(2);
  };

  const calculateItemsTotal = () => {
    return '0.00';
  };

  return (
    <div className="quotation-container">
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: '', type: 'success' })}
        />
      )}

      {/* Header */}
      <div className="page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <i className="fas fa-money-check" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1 className="page-title">Check</h1>
        </div>
        <div className="page-actions">
          <button className="btn-action" onClick={() => setCurrentPage('view-checks')}>
            <i className="fas fa-list"></i> List
          </button>
          <button className="btn-action">
            <i className="fas fa-search"></i> Search
          </button>
          <button className="btn-action">
            <i className="fas fa-file-alt"></i> Auto Fill
          </button>
          <button className="btn-action">
            <i className="fas fa-sync"></i> Recalc
          </button>
          <button className="btn-action">
            <i className="fas fa-ellipsis-h"></i> Actions
          </button>
        </div>
      </div>

      {/* Main Form */}
      <div className="form-content">
        {/* Primary Information Section */}
        <div className="form-section">
          <div className="section-title">
            <i className="fas fa-info-circle"></i>
            <span>Primary Information</span>
          </div>
          <hr style={{ margin: '12px 0 20px 0', border: 'none', borderTop: '1px solid #e0e0e0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">CUSTOM FORM <span className="required">*</span></label>
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

            <div className="form-group">
              <label className="form-label">AMOUNT</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.amount}
                onChange={(e) => handleFormChange('amount', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">POSTING PERIOD <span className="required">*</span></label>
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

            <div className="form-group">
              <label className="form-label">TRANSACTION NUMBER</label>
              <input 
                type="text" 
                className="form-control" 
                value={formData.transactionNumber}
                disabled
              />
            </div>

            <div className="form-group">
              <label className="form-label">CURRENCY <span className="required">*</span></label>
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

            <div className="form-group">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '28px' }}>
                <input 
                  type="checkbox"
                  checked={formData.toBePrinted}
                  onChange={(e) => handleFormChange('toBePrinted', e.target.checked)}
                />
                <label style={{ margin: 0, fontWeight: 'normal', fontSize: '13px' }}>TO BE PRINTED</label>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">ACCOUNT <span className="required">*</span></label>
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

            <div className="form-group">
              <label className="form-label">EXCHANGE RATE <span className="required">*</span></label>
              <input 
                type="number" 
                className="form-control"
                value={formData.exchangeRate}
                onChange={(e) => handleFormChange('exchangeRate', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">CHECK # <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.checkNumber}
                onChange={(e) => handleFormChange('checkNumber', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">BALANCE</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.balance}
                disabled
                style={{ background: '#f5f5f5' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label">TAX</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.tax}
                onChange={(e) => handleFormChange('tax', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">MEMO</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.memo}
                onChange={(e) => handleFormChange('memo', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">PAYEE <span className="required">*</span></label>
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

            <div className="form-group">
              <label className="form-label">DATE <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleFormChange('date', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Classification Section */}
        <div className="form-section">
          <div className="section-title">
            <i className="fas fa-tags"></i>
            <span>Classification</span>
          </div>
          <hr style={{ margin: '12px 0 20px 0', border: 'none', borderTop: '1px solid #e0e0e0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">SUBSIDIARY <span className="required">*</span></label>
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

        {/* Expenses & Items Section with Tabs */}
        <div className="form-section">
          <div className="section-title">
            <i className="fas fa-receipt"></i>
            <span>Expenses & Items</span>
          </div>

          {/* Tabs */}
          <div style={{ 
            display: 'flex', 
            gap: '0', 
            borderBottom: '2px solid #e0e0e0',
            marginTop: '16px',
            marginBottom: '16px'
          }}>
            <button
              onClick={() => setActiveTab('expenses')}
              style={{
                padding: '12px 24px',
                background: activeTab === 'expenses' ? '#4a90e2' : '#f5f5f5',
                color: activeTab === 'expenses' ? 'white' : '#666',
                border: 'none',
                borderBottom: activeTab === 'expenses' ? '2px solid #4a90e2' : 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '14px'
              }}
            >
              Expenses {calculateExpensesTotal()}
            </button>
            <button
              onClick={() => setActiveTab('items')}
              style={{
                padding: '12px 24px',
                background: activeTab === 'items' ? '#4a90e2' : '#f5f5f5',
                color: activeTab === 'items' ? 'white' : '#666',
                border: 'none',
                borderBottom: activeTab === 'items' ? '2px solid #4a90e2' : 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '14px'
              }}
            >
              Items {calculateItemsTotal()}
            </button>
            <button
              onClick={() => setActiveTab('related')}
              style={{
                padding: '12px 24px',
                background: activeTab === 'related' ? '#4a90e2' : '#f5f5f5',
                color: activeTab === 'related' ? 'white' : '#666',
                border: 'none',
                borderBottom: activeTab === 'related' ? '2px solid #4a90e2' : 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '14px'
              }}
            >
              Related Records
            </button>
            <button
              onClick={() => setActiveTab('relationships')}
              style={{
                padding: '12px 24px',
                background: activeTab === 'relationships' ? '#4a90e2' : '#f5f5f5',
                color: activeTab === 'relationships' ? 'white' : '#666',
                border: 'none',
                borderBottom: activeTab === 'relationships' ? '2px solid #4a90e2' : 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '14px'
              }}
            >
              Relationships
            </button>
            <button
              onClick={() => setActiveTab('communication')}
              style={{
                padding: '12px 24px',
                background: activeTab === 'communication' ? '#4a90e2' : '#f5f5f5',
                color: activeTab === 'communication' ? 'white' : '#666',
                border: 'none',
                borderBottom: activeTab === 'communication' ? '2px solid #4a90e2' : 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '14px'
              }}
            >
              Communication
            </button>
          </div>

          {activeTab === 'expenses' && (
            <>
              <div style={{ marginBottom: '12px' }}>
                <button className="add-item-btn" onClick={handleAddExpense}>
                  <i className="fas fa-plus"></i> Add
                </button>
              </div>

              <div className="items-table-wrapper">
                <table className="items-table">
                  <thead>
                    <tr>
                      <th style={{ width: '40px' }}></th>
                      <th>ACCOUNT <span className="required">*</span></th>
                      <th>AMOUNT <span className="required">*</span></th>
                      <th>TAX CODE</th>
                      <th>TAX RATE</th>
                      <th>TAX AMT</th>
                      <th>GROSS AMT</th>
                      <th>MEMO</th>
                      <th>DEPARTMENT <span className="required">*</span></th>
                      <th>CLASS</th>
                      <th>LOCATION</th>
                      <th>CUSTOMER</th>
                      <th>BILLABLE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expenses.map((expense) => (
                      <tr key={expense.id}>
                        <td>
                          <button
                            onClick={() => handleRemoveExpense(expense.id)}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: '#dc3545',
                              cursor: 'pointer',
                              fontSize: '16px'
                            }}
                          >
                            <i className="fas fa-times"></i>
                          </button>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="table-input"
                            value={expense.account}
                            onChange={(e) => handleExpenseChange(expense.id, 'account', e.target.value)}
                            placeholder="< type then tab >"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="table-input"
                            value={expense.amount}
                            onChange={(e) => handleExpenseChange(expense.id, 'amount', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="table-input"
                            value={expense.taxCode}
                            onChange={(e) => handleExpenseChange(expense.id, 'taxCode', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="table-input"
                            value={expense.taxRate}
                            onChange={(e) => handleExpenseChange(expense.id, 'taxRate', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="table-input"
                            value={expense.taxAmt}
                            onChange={(e) => handleExpenseChange(expense.id, 'taxAmt', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="table-input"
                            value={expense.grossAmt}
                            onChange={(e) => handleExpenseChange(expense.id, 'grossAmt', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="table-input"
                            value={expense.memo}
                            onChange={(e) => handleExpenseChange(expense.id, 'memo', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="table-input"
                            value={expense.department}
                            onChange={(e) => handleExpenseChange(expense.id, 'department', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="table-input"
                            value={expense.class}
                            onChange={(e) => handleExpenseChange(expense.id, 'class', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="table-input"
                            value={expense.location}
                            onChange={(e) => handleExpenseChange(expense.id, 'location', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="table-input"
                            value={expense.customer}
                            onChange={(e) => handleExpenseChange(expense.id, 'customer', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={expense.billable}
                            onChange={(e) => handleExpenseChange(expense.id, 'billable', e.target.checked)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab !== 'expenses' && (
            <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} section - Coming Soon
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="footer-actions">
          <button className="btn-tertiary" onClick={() => setCurrentPage('view-checks')}>
            Cancel
          </button>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn-secondary" onClick={handleSave}>
              Save
            </button>
            <button className="btn-secondary">
              Auto Fill
            </button>
            <button className="btn-secondary">
              Recalc
            </button>
            <button className="btn-primary" onClick={handleSave}>
              <i className="fas fa-check"></i> Actions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteChecks;
