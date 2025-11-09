import React, { useState } from 'react';
import './Enquiries.css';

const ViewDepositDetail = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('deposits');

  const depositData = {
    deposit: '237',
    customForm: 'TOM Deposit',
    account: '11180 ALL Bank Accounts : TDQ DBS SGD 072-904177-1',
    amount: 0.00,
    currency: 'SGD',
    exchangeRate: '1.00',
    date: '31/3/2021',
    postingPeriod: 'Mar 2021',
    memo: '',
    toBePrinted: false,
    subsidiary: 'Tech Offshore Marine (DQ) Pte Ltd',
    class: '',
    location: '',
    department: 'TOM : Finance',
    payments: [
      {
        id: 1,
        date: '31/3/2021',
        type: 'Payment',
        number: 'PVTOMXQ00004',
        memo: 'VOID',
        paymentMethod: '',
        refNo: '',
        from: '845 Mazars Doubtful Debts',
        currency: 'SGD',
        paymentAmount: 0.00,
        amountSGD: 0.00
      }
    ]
  };

  const handleEdit = () => {
    setCurrentPage('edit-deposit');
  };

  const handleBack = () => {
    setCurrentPage('view-deposits');
  };

  return (
    <div className="sales-quotation">
      {/* Header */}
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-university" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <div>
            <h1 style={{ margin: 0, marginBottom: '4px' }}>Deposit</h1>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>{depositData.deposit}</span>
            </div>
          </div>
        </div>
        <div className="page-actions" style={{ display: 'flex', gap: '12px' }}>
          <button 
            onClick={handleEdit}
            style={{
              padding: '8px 24px',
              background: '#4a90e2',
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
              <label className="form-label">DEPOSIT #</label>
              <div className="form-value">{depositData.deposit}</div>
            </div>

            <div className="form-group">
              <label className="form-label">CURRENCY</label>
              <div className="form-value">{depositData.currency}</div>
            </div>

            <div className="form-group">
              <label className="form-label">POSTING PERIOD</label>
              <div className="form-value">{depositData.postingPeriod}</div>
            </div>

            <div className="form-group">
              <label className="form-label">CUSTOM FORM</label>
              <div className="form-value">{depositData.customForm}</div>
            </div>

            <div className="form-group">
              <label className="form-label">EXCHANGE RATE</label>
              <div className="form-value">{depositData.exchangeRate}</div>
            </div>

            <div className="form-group">
              <label className="form-label">MEMO</label>
              <div className="form-value">{depositData.memo || '-'}</div>
            </div>

            <div className="form-group">
              <label className="form-label">ACCOUNT</label>
              <div className="form-value">{depositData.account}</div>
            </div>

            <div className="form-group">
              <label className="form-label">DATE</label>
              <div className="form-value">{depositData.date}</div>
            </div>

            <div className="form-group">
              <label className="form-label">TO BE PRINTED</label>
              <div className="form-value">{depositData.toBePrinted ? 'Yes' : 'No'}</div>
            </div>

            <div className="form-group">
              <label className="form-label">AMOUNT</label>
              <div className="form-value">{depositData.amount.toFixed(2)}</div>
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
              <div className="form-value">{depositData.subsidiary}</div>
            </div>

            <div className="form-group">
              <label className="form-label">CLASS</label>
              <div className="form-value">{depositData.class || '-'}</div>
            </div>

            <div className="form-group">
              <label className="form-label">LOCATION</label>
              <div className="form-value">{depositData.location || '-'}</div>
            </div>

            <div className="form-group">
              <label className="form-label">DEPARTMENT</label>
              <div className="form-value">{depositData.department}</div>
            </div>
          </div>
          </div>
        </div>

        {/* Deposits Section with Tabs */}
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
            Deposits
          </h2>
          <div style={{ padding: '20px', background: 'white', border: '1px solid #e0e0e0', borderTop: 'none' }}>

          {/* Tabs */}
          <div style={{ 
            display: 'flex', 
            gap: '0', 
            borderBottom: '2px solid #e0e0e0',
            marginBottom: '16px'
          }}>
            <button
              onClick={() => setActiveTab('deposits')}
              style={{
                padding: '12px 24px',
                background: activeTab === 'deposits' ? '#4a90e2' : '#f5f5f5',
                color: activeTab === 'deposits' ? 'white' : '#666',
                border: 'none',
                borderBottom: activeTab === 'deposits' ? '2px solid #4a90e2' : 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '14px'
              }}
            >
              Payments 0.00
            </button>
            <button
              onClick={() => setActiveTab('other')}
              style={{
                padding: '12px 24px',
                background: activeTab === 'other' ? '#4a90e2' : '#f5f5f5',
                color: activeTab === 'other' ? 'white' : '#666',
                border: 'none',
                borderBottom: activeTab === 'other' ? '2px solid #4a90e2' : 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '14px'
              }}
            >
              Other Deposits 0.00
            </button>
            <button
              onClick={() => setActiveTab('cash')}
              style={{
                padding: '12px 24px',
                background: activeTab === 'cash' ? '#4a90e2' : '#f5f5f5',
                color: activeTab === 'cash' ? 'white' : '#666',
                border: 'none',
                borderBottom: activeTab === 'cash' ? '2px solid #4a90e2' : 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '14px'
              }}
            >
              Cash Back 0.00
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
              onClick={() => setActiveTab('gl')}
              style={{
                padding: '12px 24px',
                background: activeTab === 'gl' ? '#4a90e2' : '#f5f5f5',
                color: activeTab === 'gl' ? 'white' : '#666',
                border: 'none',
                borderBottom: activeTab === 'gl' ? '2px solid #4a90e2' : 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '14px'
              }}
            >
              GL Impact
            </button>
          </div>

          {activeTab === 'deposits' && (
            <div className="items-table-wrapper">
              <table className="items-table">
                <thead>
                  <tr>
                    <th>DATE</th>
                    <th>TYPE</th>
                    <th>NUMBER</th>
                    <th>MEMO</th>
                    <th>PAYMENT METHOD</th>
                    <th>REF NO.</th>
                    <th>FROM</th>
                    <th>CURRENCY</th>
                    <th>PAYMENT AMOUNT</th>
                    <th>AMOUNT (SGD)</th>
                  </tr>
                </thead>
                <tbody>
                  {depositData.payments.map((payment) => (
                    <tr key={payment.id}>
                      <td style={{ padding: '8px', fontSize: '13px' }}>{payment.date}</td>
                      <td style={{ padding: '8px', fontSize: '13px' }}>{payment.type}</td>
                      <td style={{ padding: '8px', fontSize: '13px', color: '#4a90e2' }}>{payment.number}</td>
                      <td style={{ padding: '8px', fontSize: '13px' }}>{payment.memo}</td>
                      <td style={{ padding: '8px', fontSize: '13px' }}>{payment.paymentMethod || '-'}</td>
                      <td style={{ padding: '8px', fontSize: '13px' }}>{payment.refNo || '-'}</td>
                      <td style={{ padding: '8px', fontSize: '13px' }}>{payment.from}</td>
                      <td style={{ padding: '8px', fontSize: '13px' }}>{payment.currency}</td>
                      <td style={{ padding: '8px', fontSize: '13px', textAlign: 'right' }}>{payment.paymentAmount.toFixed(2)}</td>
                      <td style={{ padding: '8px', fontSize: '13px', textAlign: 'right' }}>{payment.amountSGD.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab !== 'deposits' && (
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
            Void
          </button>
          <button 
            style={{
              padding: '10px 28px',
              background: '#4a90e2',
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
            <i className="fas fa-cog"></i>
            Actions
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDepositDetail;
