import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditCheck = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('expenses');

  const [formData, setFormData] = useState({
    customForm: 'TOM Check',
    transactionNumber: 'CHECK47',
    account: '11230 ALL Bank Accounts : MEP UOB 9314-301-906-1',
    balance: '11,495.18',
    payee: 'TECH MARINE ENGINEERING (SN) PTE LTD',
    subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
    amount: '900.00',
    currency: 'SGD',
    exchangeRate: '1.00',
    tax: '',
    date: '1/11/2021',
    postingPeriod: 'Nov 2021',
    toBePrinted: false,
    check: '300450',
    memo: 'TSN AUDIT FEE'
  });

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      account: '23030 Amount Due to TSN Trade',
      amount: 900.00,
      taxCode: 'GST_SG-0%',
      taxRate: '0.0%',
      taxAmt: 0.00,
      grossAmt: 900.00,
      memo: 'AUDIT FEE FOR TSN',
      department: 'TSN AUDIT FEE',
      class: '',
      location: '',
      customer: '',
      billable: false
    }
  ]);

  const customFormOptions = [
    'TOM Check',
    'Standard Check'
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

  const subsidiaryOptions = [
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
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
    setTimeout(() => {
      setCurrentPage('view-check-detail');
    }, 1500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      setCurrentPage('view-check-detail');
    }
  };

  const calculateExpensesTotal = () => {
    return expenses.reduce((sum, expense) => sum + (parseFloat(expense.amount) || 0), 0).toFixed(2);
  };

  return (
    <div className="sales-quotation">
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          show={toast.show}
          onClose={() => setToast({ show: false, message: '', type: 'success' })}
        />
      )}

      {/* Header */}
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-money-check" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <div>
            <h1 style={{ margin: 0, marginBottom: '4px' }}>Check</h1>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>{formData.check}</span>
              <span style={{ fontSize: '14px', color: '#666' }}>{formData.payee}</span>
            </div>
          </div>
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
            <i className="fas fa-sync"></i> Recalc
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-ellipsis-h"></i> Actions
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information Section */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-info-circle"></i>
            Primary Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0 1rem 0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label required">CUSTOM FORM</label>
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
              <label className="form-label required">POSTING PERIOD</label>
              <select 
                className="form-control"
                value={formData.postingPeriod}
                onChange={(e) => handleFormChange('postingPeriod', e.target.value)}
              >
                <option>Nov 2021</option>
                <option>Dec 2021</option>
                <option>Jan 2022</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">TRANSACTION NUMBER</label>
              <input 
                type="text" 
                className="form-control" 
                value={formData.transactionNumber}
                disabled
                style={{ background: '#f5f5f5' }}
              />
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
              <label className="form-label required">ACCOUNT</label>
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
              <label className="form-label required">EXCHANGE RATE</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.exchangeRate}
                onChange={(e) => handleFormChange('exchangeRate', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label required">CHECK #</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.check}
                onChange={(e) => handleFormChange('check', e.target.value)}
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
              <label className="form-label required">PAYEE</label>
              <select 
                className="form-control"
                value={formData.payee}
                onChange={(e) => handleFormChange('payee', e.target.value)}
              >
                {payeeOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label required">DATE</label>
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
        <div className="form-section" style={{ marginTop: '1.5rem' }}>
          <h2 className="section-title">
            <i className="fas fa-tags"></i>
            Classification
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0 1rem 0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label required">SUBSIDIARY</label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleFormChange('subsidiary', e.target.value)}
              >
                {subsidiaryOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Expenses & Items Section with Tabs */}
        <div className="form-section" style={{ marginTop: '1.5rem' }}>
          <h2 className="section-title">
            <i className="fas fa-receipt"></i>
            Expenses & Items
          </h2>

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
              Items 0.00
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
                            style={{ minWidth: '200px' }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="table-input"
                            value={expense.amount}
                            onChange={(e) => handleExpenseChange(expense.id, 'amount', e.target.value)}
                            style={{ width: '100px' }}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="table-input"
                            value={expense.taxCode}
                            onChange={(e) => handleExpenseChange(expense.id, 'taxCode', e.target.value)}
                            style={{ width: '100px' }}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="table-input"
                            value={expense.taxRate}
                            onChange={(e) => handleExpenseChange(expense.id, 'taxRate', e.target.value)}
                            style={{ width: '80px' }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="table-input"
                            value={expense.taxAmt}
                            onChange={(e) => handleExpenseChange(expense.id, 'taxAmt', e.target.value)}
                            style={{ width: '100px' }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="table-input"
                            value={expense.grossAmt}
                            onChange={(e) => handleExpenseChange(expense.id, 'grossAmt', e.target.value)}
                            style={{ width: '100px' }}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="table-input"
                            value={expense.memo}
                            onChange={(e) => handleExpenseChange(expense.id, 'memo', e.target.value)}
                            style={{ minWidth: '150px' }}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="table-input"
                            value={expense.department}
                            onChange={(e) => handleExpenseChange(expense.id, 'department', e.target.value)}
                            style={{ minWidth: '120px' }}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="table-input"
                            value={expense.class}
                            onChange={(e) => handleExpenseChange(expense.id, 'class', e.target.value)}
                            style={{ width: '100px' }}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="table-input"
                            value={expense.location}
                            onChange={(e) => handleExpenseChange(expense.id, 'location', e.target.value)}
                            style={{ width: '100px' }}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="table-input"
                            value={expense.customer}
                            onChange={(e) => handleExpenseChange(expense.id, 'customer', e.target.value)}
                            style={{ width: '100px' }}
                          />
                        </td>
                        <td style={{ textAlign: 'center' }}>
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
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-secondary" onClick={handleSave}>
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
    </div>
  );
};

export default EditCheck;
