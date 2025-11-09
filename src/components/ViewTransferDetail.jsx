import React, { useState } from 'react';
import './Enquiries.css';

const ViewTransferDetail = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('custom');

  const transferData = {
    transactionNumber: 'TRANSFER9',
    transfer: '9',
    fromAccount: '11210 ALL Bank Accounts : MEP OCBC 536-82592-001',
    fromBalance: '675,985.25',
    toAccount: '11140 ALL Bank Accounts : MEP DBS SGD 003-906132-3',
    toBalance: '931,641.43',
    date: '3/12/2021',
    postingPeriod: 'Dec 2021',
    currency: 'SGD',
    exchangeRate: '1.00',
    amount: 200000.00,
    memo: 'MEP OCBC TO DBS',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
    department: '',
    class: '',
    location: ''
  };

  const handleEdit = () => {
    setCurrentPage('edit-transfer');
  };

  const handleBack = () => {
    setCurrentPage('view-transfers');
  };

  return (
    <div className="sales-quotation">
      {/* Header */}
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-exchange-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <div>
            <h1 style={{ margin: 0, marginBottom: '4px' }}>Transfer</h1>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>{transferData.transfer}</span>
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
        {/* Transaction Information */}
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
            Transaction Information
          </h2>
          <div style={{ padding: '20px', background: 'white', border: '1px solid #e0e0e0', borderTop: 'none' }}>
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">TRANSACTION NUMBER</label>
              <div className="form-value">{transferData.transactionNumber}</div>
            </div>

            <div className="form-group">
              <label className="form-label">CURRENCY</label>
              <div className="form-value">{transferData.currency}</div>
            </div>

            <div className="form-group">
              <label className="form-label">AMOUNT</label>
              <div className="form-value">{transferData.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
            </div>

            <div className="form-group">
              <label className="form-label">TRANSFER #</label>
              <div className="form-value">{transferData.transfer}</div>
            </div>

            <div className="form-group">
              <label className="form-label">CURRENCY</label>
              <div className="form-value">{transferData.currency}</div>
            </div>

            <div className="form-group">
              <label className="form-label">AMOUNT</label>
              <div className="form-value">{transferData.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
            </div>

            <div className="form-group">
              <label className="form-label">FROM ACCOUNT</label>
              <div className="form-value">{transferData.fromAccount}</div>
            </div>

            <div className="form-group">
              <label className="form-label">EXCHANGE RATE</label>
              <div className="form-value">{transferData.exchangeRate}</div>
            </div>

            <div className="form-group">
              <label className="form-label">MEMO</label>
              <div className="form-value">{transferData.memo}</div>
            </div>

            <div className="form-group">
              <label className="form-label">TO ACCOUNT</label>
              <div className="form-value">{transferData.toAccount}</div>
            </div>

            <div className="form-group">
              <label className="form-label">DATE</label>
              <div className="form-value">{transferData.date}</div>
            </div>

            <div className="form-group">
              <label className="form-label">SUBSIDIARY</label>
              <div className="form-value">{transferData.subsidiary}</div>
            </div>

            <div className="form-group">
              <label className="form-label"></label>
              <div className="form-value"></div>
            </div>

            <div className="form-group">
              <label className="form-label">POSTING PERIOD</label>
              <div className="form-value">{transferData.postingPeriod}</div>
            </div>

            <div className="form-group">
              <label className="form-label">DEPARTMENT</label>
              <div className="form-value">{transferData.department || '-'}</div>
            </div>

            <div className="form-group">
              <label className="form-label"></label>
              <div className="form-value"></div>
            </div>

            <div className="form-group">
              <label className="form-label"></label>
              <div className="form-value"></div>
            </div>

            <div className="form-group">
              <label className="form-label">CLASS</label>
              <div className="form-value">{transferData.class || '-'}</div>
            </div>

            <div className="form-group">
              <label className="form-label"></label>
              <div className="form-value"></div>
            </div>

            <div className="form-group">
              <label className="form-label"></label>
              <div className="form-value"></div>
            </div>

            <div className="form-group">
              <label className="form-label">LOCATION</label>
              <div className="form-value">{transferData.location || '-'}</div>
            </div>
          </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="form-section" style={{ marginTop: '2rem' }}>
          <div style={{ 
            display: 'flex', 
            gap: '0', 
            borderBottom: '2px solid #e0e0e0',
            background: '#4a6fa5',
            padding: '0'
          }}>
            <button
              onClick={() => setActiveTab('custom')}
              style={{
                padding: '12px 24px',
                background: activeTab === 'custom' ? 'white' : 'transparent',
                color: activeTab === 'custom' ? '#333' : 'white',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '14px',
                borderRadius: activeTab === 'custom' ? '4px 4px 0 0' : '0'
              }}
            >
              Custom
            </button>
            <button
              onClick={() => setActiveTab('gl')}
              style={{
                padding: '12px 24px',
                background: activeTab === 'gl' ? 'white' : 'transparent',
                color: activeTab === 'gl' ? '#333' : 'white',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '14px',
                borderRadius: activeTab === 'gl' ? '4px 4px 0 0' : '0'
              }}
            >
              GL Impact
            </button>
          </div>

          <div style={{ padding: '20px', background: 'white', border: '1px solid #e0e0e0', borderTop: 'none' }}>
            {activeTab === 'custom' && (
              <div style={{ padding: '20px 0' }}>
                <p style={{ color: '#666', fontSize: '14px' }}>DO RECORD CREATED</p>
              </div>
            )}

            {activeTab === 'gl' && (
              <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
                GL Impact section - No records to show
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
            onClick={handleEdit}
            style={{
              padding: '10px 28px',
              background: '#4a90e2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              minWidth: '100px'
            }}
          >
            Edit
          </button>
          <button 
            onClick={handleBack}
            style={{
              padding: '10px 28px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              minWidth: '100px'
            }}
          >
            Back
          </button>
          <button 
            style={{
              padding: '10px 28px',
              background: 'white',
              border: '1px solid #ddd',
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

export default ViewTransferDetail;
