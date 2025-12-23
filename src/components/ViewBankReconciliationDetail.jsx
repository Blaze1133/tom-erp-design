import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewBankReconciliationDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('deposits');
  const [infoCollapsed, setInfoCollapsed] = useState(false);

  const reconciliationData = {
    documentNumber: 'RECON-2024-001',
    status: 'RECONCILED',
    account: '11210 ALL Bank Accounts : MEP OCBC 536-82592-001',
    currency: 'SGD',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
    statementDate: '31/12/2024',
    startDate: '1/12/2024',
    endingStatementBalance: 150000.00,
    lastReconciledBalance: 120000.00,
    reconciledThisStatement: 30000.00,
    difference: 0.00,
    deposits: [
      {
        id: 1,
        date: '5/12/2024',
        type: 'Deposit',
        number: 'DEP-2024-001',
        name: 'Customer Payment',
        memo: 'Payment received',
        amount: 15000.00,
        reconciled: true
      }
    ],
    payments: [
      {
        id: 1,
        date: '10/12/2024',
        type: 'Check',
        number: 'CHK-2024-001',
        name: 'Supplier Payment',
        memo: 'Invoice payment',
        amount: -5000.00,
        reconciled: true
      }
    ]
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-bank-reconciliations');
    }
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('edit-bank-reconciliation');
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-balance-scale"></i>
          <div>
            <h1>Bank Reconciliation</h1>
            <div className="detail-subtitle">
              <span>{reconciliationData.documentNumber}</span>
              <span>{reconciliationData.account}</span>
              <span className="status-badge-detail" style={{ background: '#4caf50' }}>
                {reconciliationData.status}
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
          <button className="btn-action" onClick={() => setCurrentPage('view-bank-reconciliations')}>List</button>
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
          <i className="fas fa-file-pdf"></i>
          Export PDF
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
        <div className={`detail-section ${infoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setInfoCollapsed(!infoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Reconciliation Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>ACCOUNT</label>
                <div className="field-value">{reconciliationData.account}</div>
              </div>
              <div className="detail-field">
                <label>CURRENCY</label>
                <div className="field-value">{reconciliationData.currency}</div>
              </div>
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{reconciliationData.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>STATEMENT DATE</label>
                <div className="field-value">{reconciliationData.statementDate}</div>
              </div>
              <div className="detail-field">
                <label>START DATE</label>
                <div className="field-value">{reconciliationData.startDate}</div>
              </div>
              <div className="detail-field">
                <label>ENDING STATEMENT BALANCE</label>
                <div className="field-value">{reconciliationData.endingStatementBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
              </div>
              <div className="detail-field">
                <label>LAST RECONCILED BALANCE</label>
                <div className="field-value">{reconciliationData.lastReconciledBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
              </div>
              <div className="detail-field">
                <label>RECONCILED THIS STATEMENT</label>
                <div className="field-value">{reconciliationData.reconciledThisStatement.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
              </div>
              <div className="detail-field">
                <label>DIFFERENCE</label>
                <div className="field-value" style={{ color: reconciliationData.difference === 0 ? '#4caf50' : '#f44336', fontWeight: 'bold' }}>
                  {reconciliationData.difference.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-tabs" style={{ marginTop: '2rem' }}>
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'deposits' ? 'active' : ''}`} onClick={() => setActiveTab('deposits')}>
              Deposits
            </button>
            <button className={`tab-btn ${activeTab === 'payments' ? 'active' : ''}`} onClick={() => setActiveTab('payments')}>
              Payments
            </button>
          </div>

          {activeTab === 'deposits' && (
            <div className="tab-content">
              <div className="form-section" style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Deposits
                </h3>
                <div className="items-table-container">
                  <table className="items-table">
                    <thead>
                      <tr>
                        <th>DATE</th>
                        <th>TYPE</th>
                        <th>NUMBER</th>
                        <th>NAME</th>
                        <th>MEMO</th>
                        <th>AMOUNT</th>
                        <th>RECONCILED</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reconciliationData.deposits.map((deposit) => (
                        <tr key={deposit.id}>
                          <td>{deposit.date}</td>
                          <td>{deposit.type}</td>
                          <td>{deposit.number}</td>
                          <td>{deposit.name}</td>
                          <td>{deposit.memo}</td>
                          <td style={{ textAlign: 'right' }}>{deposit.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                          <td style={{ textAlign: 'center' }}>
                            {deposit.reconciled ? (
                              <i className="fas fa-check" style={{ color: '#4caf50' }}></i>
                            ) : (
                              <i className="fas fa-times" style={{ color: '#f44336' }}></i>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'payments' && (
            <div className="tab-content">
              <div className="form-section" style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Payments
                </h3>
                <div className="items-table-container">
                  <table className="items-table">
                    <thead>
                      <tr>
                        <th>DATE</th>
                        <th>TYPE</th>
                        <th>NUMBER</th>
                        <th>NAME</th>
                        <th>MEMO</th>
                        <th>AMOUNT</th>
                        <th>RECONCILED</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reconciliationData.payments.map((payment) => (
                        <tr key={payment.id}>
                          <td>{payment.date}</td>
                          <td>{payment.type}</td>
                          <td>{payment.number}</td>
                          <td>{payment.name}</td>
                          <td>{payment.memo}</td>
                          <td style={{ textAlign: 'right' }}>{payment.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                          <td style={{ textAlign: 'center' }}>
                            {payment.reconciled ? (
                              <i className="fas fa-check" style={{ color: '#4caf50' }}></i>
                            ) : (
                              <i className="fas fa-times" style={{ color: '#f44336' }}></i>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
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

export default ViewBankReconciliationDetail;
