import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewTransferFundDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('communication');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);

  const transferData = {
    documentNumber: 'TRF-2024-001',
    status: 'COMPLETED',
    transactionNumber: 'TRF-2024-001',
    transfer: 'TRF-2024-001',
    fromAccount: '11210 ALL Bank Accounts : MEP OCBC 536-82592-001',
    toAccount: '11140 ALL Bank Accounts : MEP DBS SGD 003-906132-3',
    date: '3/12/2021',
    postingPeriod: 'Dec 2021',
    currency: 'SGD',
    amount: 200000.00,
    currency2: 'SGD',
    amount2: 200000.00,
    exchangeRate: '1.00',
    memo: 'MEP OCBC TO DBS',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
    department: 'TOM: Finance',
    class: 'Material Supply',
    location: 'TOM-11'
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-transfers');
    }
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('edit-transfer');
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-exchange-alt"></i>
          <div>
            <h1>Transfer</h1>
            <div className="detail-subtitle">
              <span>{transferData.documentNumber}</span>
              <span>{transferData.fromAccount} → {transferData.toAccount}</span>
              <span className="status-badge-detail" style={{ background: '#4caf50' }}>
                {transferData.status}
              </span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-action">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-action" onClick={() => setCurrentPage('view-transfers')}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary" onClick={handleEdit}>
          <i className="fas fa-edit"></i>
          Edit
        </button>
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-copy"></i>
          Copy
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-ban"></i>
          Void
        </button>
        <div className="toolbar-dropdown" style={{ marginLeft: 'auto' }}>
          <button className="btn-toolbar">
            <i className="fas fa-cog"></i>
            Actions
            <i className="fas fa-chevron-down" style={{ marginLeft: '0.5rem', fontSize: '0.7rem' }}></i>
          </button>
        </div>
      </div>

      <div className="detail-content">
        <div className={`detail-section ${primaryInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setPrimaryInfoCollapsed(!primaryInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>TRANSACTION NUMBER</label>
                <div className="field-value">{transferData.transactionNumber}</div>
              </div>
              <div className="detail-field">
                <label>TRANSFER #</label>
                <div className="field-value">{transferData.transfer}</div>
              </div>
              <div className="detail-field">
                <label>FROM ACCOUNT</label>
                <div className="field-value">{transferData.fromAccount}</div>
              </div>
              <div className="detail-field">
                <label>TO ACCOUNT</label>
                <div className="field-value">{transferData.toAccount}</div>
              </div>
              <div className="detail-field">
                <label>DATE</label>
                <div className="field-value">{transferData.date}</div>
              </div>
              <div className="detail-field">
                <label>POSTING PERIOD</label>
                <div className="field-value">{transferData.postingPeriod}</div>
              </div>
              <div className="detail-field">
                <label>CURRENCY</label>
                <div className="field-value">{transferData.currency}</div>
              </div>
              <div className="detail-field">
                <label>AMOUNT</label>
                <div className="field-value">{transferData.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
              </div>
              <div className="detail-field">
                <label>CURRENCY</label>
                <div className="field-value">{transferData.currency2}</div>
              </div>
              <div className="detail-field">
                <label>AMOUNT</label>
                <div className="field-value">{transferData.amount2.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
              </div>
              <div className="detail-field">
                <label>EXCHANGE RATE</label>
                <div className="field-value">{transferData.exchangeRate}</div>
              </div>
              <div className="detail-field">
                <label>MEMO</label>
                <div className="field-value">{transferData.memo || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        <div className={`detail-section ${classificationCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setClassificationCollapsed(!classificationCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{transferData.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>DEPARTMENT</label>
                <div className="field-value">{transferData.department}</div>
              </div>
              <div className="detail-field">
                <label>CLASS</label>
                <div className="field-value">{transferData.class}</div>
              </div>
              <div className="detail-field">
                <label>LOCATION</label>
                <div className="field-value">{transferData.location}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-tabs" style={{ marginTop: '2rem' }}>
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>Communication</button>
            <button className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`} onClick={() => setActiveTab('system')}>System Information</button>
          </div>

          {activeTab === 'communication' && (
            <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
              Communication section - No data available
            </div>
          )}

          {activeTab === 'system' && (
            <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
              System Information - No data available
            </div>
          )}
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
          <button className="btn-toolbar" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn-toolbar-primary" onClick={handleEdit}>
            <i className="fas fa-edit"></i>
            Edit
          </button>
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

export default ViewTransferFundDetail;
