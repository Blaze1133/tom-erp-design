import React, { useState } from 'react';
import './Enquiries.css';

const ViewCheckDetail = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('expenses');

  const checkData = {
    transactionNumber: '300450',
    customForm: 'TOM Check',
    payee: 'TECH MARINE ENGINEERING (SN) PTE LTD',
    account: '11230 ALL Bank Accounts : MEP UOB 9314-301-906-1',
    balance: '11,495.18',
    currency: 'SGD',
    exchangeRate: '1.00',
    date: '1/11/2021',
    postingPeriod: 'Nov 2021',
    check: '300450',
    toBePrinted: false,
    memo: 'TSN AUDIT FEE',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    expenses: [
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
    ]
  };

  const handleEdit = () => {
    setCurrentPage('edit-check');
  };

  const handleBack = () => {
    setCurrentPage('view-checks');
  };

  const calculateExpensesTotal = () => {
    return checkData.expenses.reduce((sum, expense) => sum + expense.amount, 0).toFixed(2);
  };

  return (
    <div className="sales-quotation">
      {/* Header */}
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-money-check" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <div>
            <h1 style={{ margin: 0, marginBottom: '4px' }}>Check</h1>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>{checkData.transactionNumber}</span>
              <span style={{ fontSize: '14px', color: '#666' }}>{checkData.payee}</span>
            </div>
          </div>
        </div>
        <div className="page-actions" style={{ display: 'flex', gap: '12px' }}>
          <button 
            onClick={handleEdit}
            style={{
              padding: '8px 24px',
              background: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              minWidth: '80px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <i className="fas fa-edit"></i>
            Edit
          </button>
          <button 
            onClick={handleBack}
            style={{
              padding: '8px 24px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              minWidth: '80px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button 
            style={{
              padding: '8px 24px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              minWidth: '100px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <i className="fas fa-cog"></i>
            Actions
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information Section */}
        <div className="form-section">
          <h2 className="section-title" style={{ 
            marginBottom: '0',
            background: '#f5f5f5',
            padding: '12px 16px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#333',
            borderRadius: '4px 4px 0 0'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '12px', marginRight: '8px', color: '#666' }}></i>
            Primary Information
          </h2>
          <div style={{ padding: '20px', background: 'white', border: '1px solid #e0e0e0', borderTop: 'none' }}>
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">CUSTOM FORM</label>
              <div className="form-value">{checkData.customForm}</div>
            </div>

            <div className="form-group">
              <label className="form-label">AMOUNT</label>
              <div className="form-value">{checkData.expenses.reduce((sum, e) => sum + e.amount, 0).toFixed(2)}</div>
            </div>

            <div className="form-group">
              <label className="form-label">POSTING PERIOD</label>
              <div className="form-value">{checkData.postingPeriod}</div>
            </div>

            <div className="form-group">
              <label className="form-label">TRANSACTION NUMBER</label>
              <div className="form-value">{checkData.transactionNumber}</div>
            </div>

            <div className="form-group">
              <label className="form-label">CURRENCY</label>
              <div className="form-value">{checkData.currency}</div>
            </div>

            <div className="form-group">
              <label className="form-label">TO BE PRINTED</label>
              <div className="form-value">{checkData.toBePrinted ? 'Yes' : 'No'}</div>
            </div>

            <div className="form-group">
              <label className="form-label">ACCOUNT</label>
              <div className="form-value">{checkData.account}</div>
            </div>

            <div className="form-group">
              <label className="form-label">EXCHANGE RATE</label>
              <div className="form-value">{checkData.exchangeRate}</div>
            </div>

            <div className="form-group">
              <label className="form-label">CHECK #</label>
              <div className="form-value">{checkData.check}</div>
            </div>

            <div className="form-group">
              <label className="form-label">BALANCE</label>
              <div className="form-value">{checkData.balance}</div>
            </div>

            <div className="form-group">
              <label className="form-label">TAX</label>
              <div className="form-value">-</div>
            </div>

            <div className="form-group">
              <label className="form-label">MEMO</label>
              <div className="form-value">{checkData.memo}</div>
            </div>

            <div className="form-group">
              <label className="form-label">PAYEE</label>
              <div className="form-value">{checkData.payee}</div>
            </div>

            <div className="form-group">
              <label className="form-label">DATE</label>
              <div className="form-value">{checkData.date}</div>
            </div>
          </div>
          </div>
        </div>

        {/* Classification Section */}
        <div className="form-section" style={{ marginTop: '2rem' }}>
          <h2 className="section-title" style={{ 
            marginBottom: '0',
            background: '#f5f5f5',
            padding: '12px 16px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#333',
            borderRadius: '4px 4px 0 0'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '12px', marginRight: '8px', color: '#666' }}></i>
            Classification
          </h2>
          <div style={{ padding: '20px', background: 'white', border: '1px solid #e0e0e0', borderTop: 'none' }}>
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">SUBSIDIARY</label>
              <div className="form-value">{checkData.subsidiary}</div>
            </div>
          </div>
          </div>
        </div>

        {/* Expenses & Items Section with Tabs */}
        <div className="form-section" style={{ marginTop: '2rem' }}>
          <h2 className="section-title" style={{ 
            marginBottom: '0',
            background: '#f5f5f5',
            padding: '12px 16px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#333',
            borderRadius: '4px 4px 0 0'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '12px', marginRight: '8px', color: '#666' }}></i>
            Expenses & Items
          </h2>
          <div style={{ padding: '20px', background: 'white', border: '1px solid #e0e0e0', borderTop: 'none' }}>

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
              onClick={() => setActiveTab('system')}
              style={{
                padding: '12px 24px',
                background: activeTab === 'system' ? '#4a90e2' : '#f5f5f5',
                color: activeTab === 'system' ? 'white' : '#666',
                border: 'none',
                borderBottom: activeTab === 'system' ? '2px solid #4a90e2' : 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '14px'
              }}
            >
              System Information
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
            <div className="items-table-wrapper">
              <table className="items-table">
                <thead>
                  <tr>
                    <th>ACCOUNT</th>
                    <th>AMOUNT</th>
                    <th>TAX CODE</th>
                    <th>TAX RATE</th>
                    <th>TAX AMT</th>
                    <th>GROSS AMT</th>
                    <th>MEMO</th>
                    <th>DEPARTMENT</th>
                    <th>CLASS</th>
                    <th>LOCATION</th>
                    <th>CUSTOMER</th>
                    <th>BILLABLE</th>
                  </tr>
                </thead>
                <tbody>
                  {checkData.expenses.map((expense) => (
                    <tr key={expense.id}>
                      <td style={{ padding: '8px', fontSize: '13px' }}>{expense.account}</td>
                      <td style={{ padding: '8px', fontSize: '13px', textAlign: 'right' }}>{expense.amount.toFixed(2)}</td>
                      <td style={{ padding: '8px', fontSize: '13px' }}>{expense.taxCode}</td>
                      <td style={{ padding: '8px', fontSize: '13px' }}>{expense.taxRate}</td>
                      <td style={{ padding: '8px', fontSize: '13px', textAlign: 'right' }}>{expense.taxAmt.toFixed(2)}</td>
                      <td style={{ padding: '8px', fontSize: '13px', textAlign: 'right' }}>{expense.grossAmt.toFixed(2)}</td>
                      <td style={{ padding: '8px', fontSize: '13px' }}>{expense.memo}</td>
                      <td style={{ padding: '8px', fontSize: '13px' }}>{expense.department}</td>
                      <td style={{ padding: '8px', fontSize: '13px' }}>{expense.class || '-'}</td>
                      <td style={{ padding: '8px', fontSize: '13px' }}>{expense.location || '-'}</td>
                      <td style={{ padding: '8px', fontSize: '13px' }}>{expense.customer || '-'}</td>
                      <td style={{ padding: '8px', fontSize: '13px', textAlign: 'center' }}>{expense.billable ? 'Yes' : 'No'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab !== 'expenses' && (
            <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} section - No records to show
            </div>
          )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="footer-actions" style={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          gap: '12px',
          marginTop: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid #e0e0e0'
        }}>
          <button 
            style={{
              padding: '10px 28px',
              background: 'white',
              color: '#4a90e2',
              border: '2px solid #4a90e2',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              minWidth: '100px'
            }}
          >
            Save
          </button>
          <button 
            style={{
              padding: '10px 28px',
              background: 'white',
              color: '#4a90e2',
              border: '2px solid #4a90e2',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              minWidth: '100px'
            }}
          >
            Auto Fill
          </button>
          <button 
            style={{
              padding: '10px 28px',
              background: 'white',
              color: '#4a90e2',
              border: '2px solid #4a90e2',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              minWidth: '100px'
            }}
          >
            Recalc
          </button>
          <button 
            style={{
              padding: '10px 28px',
              background: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              minWidth: '120px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <i className="fas fa-check"></i>
            Actions
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewCheckDetail;
