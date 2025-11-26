import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ReconcileBankStatement = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('deposits');

  // Form state
  const [formData, setFormData] = useState({
    account: '',
    currency: 'SGD',
    subsidiary: '',
    statementDate: '',
    startDate: '',
    endingStatementBalance: '',
    lastReconciledBalance: '',
    reconciledThisStatement: '',
    difference: ''
  });

  // Transaction data
  const [transactions, setTransactions] = useState([]);

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    showToast('Bank reconciliation saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Changes cancelled', 'info');
      window.location.reload();
    }
  };

  const handleRefresh = () => {
    showToast('Data refreshed', 'success');
  };

  const handleCompleteLater = () => {
    showToast('Reconciliation saved for later completion', 'info');
  };

  const handleHistory = () => {
    showToast('Opening history...', 'info');
  };

  const handleActions = () => {
    showToast('Opening actions menu...', 'info');
  };

  const handleMarkAll = () => {
    showToast('All transactions marked', 'success');
  };

  const handleUnmarkAll = () => {
    showToast('All transactions unmarked', 'success');
  };

  const handleMarkAllClearedToReconcile = () => {
    showToast('All cleared transactions marked to reconcile', 'success');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-balance-scale" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Reconcile Bank Statement</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-secondary" onClick={handleCompleteLater}>
            <i className="fas fa-clock"></i>
            Complete Later
          </button>
          <button className="btn btn-secondary" onClick={handleRefresh}>
            <i className="fas fa-sync"></i>
            Refresh
          </button>
          <button className="btn btn-secondary" onClick={handleHistory}>
            <i className="fas fa-history"></i>
            History
          </button>
          <button className="btn btn-secondary" onClick={handleActions}>
            <i className="fas fa-cog"></i>
            Actions
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-info-circle"></i>
            Account Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <div className="form-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="form-group">
              <label className="form-label">ACCOUNT <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.account}
                onChange={(e) => handleInputChange('account', e.target.value)}
              >
                <option value="">Select Account</option>
                <option value="bank1">DBS Bank - Current Account</option>
                <option value="bank2">OCBC Bank - Savings Account</option>
                <option value="bank3">UOB Bank - Business Account</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">SUBSIDIARY</label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleInputChange('subsidiary', e.target.value)}
              >
                <option value="">Select Subsidiary</option>
                {subsidiaries.map((sub, index) => (
                  <option key={index} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">CURRENCY</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.currency}
                onChange={(e) => handleInputChange('currency', e.target.value)}
                readOnly
                style={{ backgroundColor: '#f5f5f5' }}
              />
            </div>
            <div className="form-group">
              <label className="form-label">STATEMENT DATE <span className="required">*</span></label>
              <input 
                type="date" 
                className="form-control"
                value={formData.statementDate}
                onChange={(e) => handleInputChange('statementDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">START DATE</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.startDate}
                onChange={(e) => handleInputChange('startDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">ENDING STATEMENT BALANCE <span className="required">*</span></label>
              <input 
                type="number" 
                className="form-control"
                value={formData.endingStatementBalance}
                onChange={(e) => handleInputChange('endingStatementBalance', e.target.value)}
                step="0.01"
                placeholder="0.00"
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Reconciliation Summary */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-calculator"></i>
            Reconciliation Summary
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <div className="form-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="form-group">
              <label className="form-label">LAST RECONCILED BALANCE</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.lastReconciledBalance}
                readOnly
                style={{ backgroundColor: '#f5f5f5', fontWeight: '600' }}
                placeholder="0.00"
              />
            </div>
            <div className="form-group">
              <label className="form-label">RECONCILED THIS STATEMENT</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.reconciledThisStatement}
                readOnly
                style={{ backgroundColor: '#f5f5f5', fontWeight: '600' }}
                placeholder="0.00"
              />
            </div>
            <div className="form-group">
              <label className="form-label">DIFFERENCE</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.difference}
                readOnly
                style={{ 
                  backgroundColor: '#f5f5f5', 
                  fontWeight: '600',
                  color: formData.difference === '0.00' ? '#4caf50' : '#f44336'
                }}
                placeholder="0.00"
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Transactions Section */}
        <div className="form-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              <i className="fas fa-list-ul"></i>
              Transactions
            </h2>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-secondary btn-sm" onClick={handleMarkAll}>
                Mark All
              </button>
              <button className="btn btn-secondary btn-sm" onClick={handleUnmarkAll}>
                Unmark All
              </button>
              <button className="btn btn-secondary btn-sm" onClick={handleMarkAllClearedToReconcile}>
                Mark All Cleared to Reconcile
              </button>
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />

          {/* Transaction Tabs */}
          <div className="detail-tabs">
            <div className="tabs-header" style={{ borderBottom: '2px solid #e0e0e0' }}>
              <button 
                className={`tab-btn ${activeTab === 'deposits' ? 'active' : ''}`}
                onClick={() => setActiveTab('deposits')}
              >
                Deposits and Credits 0.00
              </button>
              <button 
                className={`tab-btn ${activeTab === 'checks' ? 'active' : ''}`}
                onClick={() => setActiveTab('checks')}
              >
                Checks and Payments 0.00
              </button>
              <button 
                className={`tab-btn ${activeTab === 'new-charges' ? 'active' : ''}`}
                onClick={() => setActiveTab('new-charges')}
              >
                New Charges 0.00
              </button>
              <button 
                className={`tab-btn ${activeTab === 'new-deposits' ? 'active' : ''}`}
                onClick={() => setActiveTab('new-deposits')}
              >
                New Deposits 0.00
              </button>
            </div>

            <div className="tabs-content" style={{ marginTop: '1.5rem' }}>
              {activeTab === 'deposits' && (
                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th style={{ width: '5%' }}>RECONCILE</th>
                        <th style={{ width: '5%' }}>CLEARED</th>
                        <th style={{ width: '10%' }}>DATE</th>
                        <th style={{ width: '10%' }}>TYPE</th>
                        <th style={{ width: '15%' }}>TRAN NO</th>
                        <th style={{ width: '15%' }}>PAYEE</th>
                        <th style={{ width: '15%' }}>MEMO</th>
                        <th style={{ width: '10%' }}>P/N REF</th>
                        <th style={{ width: '10%' }}>AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="9" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'checks' && (
                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th style={{ width: '5%' }}>RECONCILE</th>
                        <th style={{ width: '5%' }}>CLEARED</th>
                        <th style={{ width: '10%' }}>DATE</th>
                        <th style={{ width: '10%' }}>TYPE</th>
                        <th style={{ width: '15%' }}>TRAN NO</th>
                        <th style={{ width: '15%' }}>PAYEE</th>
                        <th style={{ width: '15%' }}>MEMO</th>
                        <th style={{ width: '10%' }}>P/N REF</th>
                        <th style={{ width: '10%' }}>AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="9" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'new-charges' && (
                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th style={{ width: '5%' }}>RECONCILE</th>
                        <th style={{ width: '5%' }}>CLEARED</th>
                        <th style={{ width: '10%' }}>DATE</th>
                        <th style={{ width: '10%' }}>TYPE</th>
                        <th style={{ width: '15%' }}>TRAN NO</th>
                        <th style={{ width: '15%' }}>PAYEE</th>
                        <th style={{ width: '15%' }}>MEMO</th>
                        <th style={{ width: '10%' }}>P/N REF</th>
                        <th style={{ width: '10%' }}>AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="9" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'new-deposits' && (
                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th style={{ width: '5%' }}>RECONCILE</th>
                        <th style={{ width: '5%' }}>CLEARED</th>
                        <th style={{ width: '10%' }}>DATE</th>
                        <th style={{ width: '10%' }}>TYPE</th>
                        <th style={{ width: '15%' }}>TRAN NO</th>
                        <th style={{ width: '15%' }}>PAYEE</th>
                        <th style={{ width: '15%' }}>MEMO</th>
                        <th style={{ width: '10%' }}>P/N REF</th>
                        <th style={{ width: '10%' }}>AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="9" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-primary" onClick={handleSave}>
              <i className="fas fa-save"></i>
              Save
            </button>
            <button className="btn btn-secondary" onClick={handleCompleteLater}>
              <i className="fas fa-clock"></i>
              Complete Later
            </button>
            <button className="btn btn-secondary" onClick={handleRefresh}>
              <i className="fas fa-sync"></i>
              Refresh
            </button>
          </div>
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

export default ReconcileBankStatement;
