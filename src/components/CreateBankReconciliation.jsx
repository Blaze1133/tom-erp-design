import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateBankReconciliation = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('deposits');
  const [hoveredRow, setHoveredRow] = useState(null);

  const [formData, setFormData] = useState({
    account: '11210 ALL Bank Accounts : MEP OCBC 536-82592-001',
    currency: 'SGD',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
    statementDate: '31/12/2024',
    startDate: '1/12/2024',
    endingStatementBalance: '150000.00',
    lastReconciledBalance: '120000.00',
    reconciledThisStatement: '30000.00',
    difference: '0.00',
    deposits: [
      {
        id: 1,
        selected: false,
        date: '5/12/2024',
        type: 'Deposit',
        number: 'DEP-2024-001',
        name: 'Customer Payment',
        memo: 'Payment received',
        amount: 15000.00
      }
    ],
    payments: [
      {
        id: 1,
        selected: false,
        date: '10/12/2024',
        type: 'Check',
        number: 'CHK-2024-001',
        name: 'Supplier Payment',
        memo: 'Invoice payment',
        amount: -5000.00
      }
    ]
  });

  const subsidiaryOptions = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDepositChange = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      deposits: prev.deposits.map(deposit =>
        deposit.id === id ? { ...deposit, [field]: value } : deposit
      )
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

  const handleMarkAll = (type) => {
    if (type === 'deposits') {
      setFormData(prev => ({
        ...prev,
        deposits: prev.deposits.map(d => ({ ...d, selected: true }))
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        payments: prev.payments.map(p => ({ ...p, selected: true }))
      }));
    }
  };

  const handleUnmarkAll = (type) => {
    if (type === 'deposits') {
      setFormData(prev => ({
        ...prev,
        deposits: prev.deposits.map(d => ({ ...d, selected: false }))
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        payments: prev.payments.map(p => ({ ...p, selected: false }))
      }));
    }
  };

  const handleSave = () => {
    setToast({ show: true, message: 'Bank reconciliation saved successfully!', type: 'success' });
    setTimeout(() => {
      if (setCurrentPage) {
        setCurrentPage('view-bank-reconciliations');
      }
    }, 1500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-bank-reconciliations');
      }
    }
  };

  const calculateDepositsTotal = () => {
    return formData.deposits
      .filter(d => d.selected)
      .reduce((sum, d) => sum + d.amount, 0)
      .toFixed(2);
  };

  const calculatePaymentsTotal = () => {
    return formData.payments
      .filter(p => p.selected)
      .reduce((sum, p) => sum + p.amount, 0)
      .toFixed(2);
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-balance-scale"></i>
          <div>
            <h1>Reconcile Bank Statement</h1>
            <div className="detail-subtitle">
              <span>{formData.account}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={() => setCurrentPage('view-bank-reconciliations')}>List</button>
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
          Refresh
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-clock"></i>
          Complete Later
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-history"></i>
          History
        </button>
      </div>

      <div className="detail-content">
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Reconciliation Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
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
                <label>CURRENCY</label>
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
                <label>STATEMENT DATE <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.statementDate}
                  onChange={(e) => handleFormChange('statementDate', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>START DATE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.startDate}
                  onChange={(e) => handleFormChange('startDate', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>ENDING STATEMENT BALANCE <span className="required">*</span></label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.endingStatementBalance}
                  onChange={(e) => handleFormChange('endingStatementBalance', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>LAST RECONCILED BALANCE</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.lastReconciledBalance}
                  disabled
                  style={{ background: '#f9f9f9' }}
                />
              </div>

              <div className="detail-field">
                <label>RECONCILED THIS STATEMENT</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.reconciledThisStatement}
                  disabled
                  style={{ background: '#f9f9f9' }}
                />
              </div>

              <div className="detail-field">
                <label>DIFFERENCE</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.difference}
                  disabled
                  style={{ background: '#f9f9f9' }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="detail-tabs" style={{ marginTop: '2rem' }}>
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'deposits' ? 'active' : ''}`} onClick={() => setActiveTab('deposits')}>
              Deposits {calculateDepositsTotal()}
            </button>
            <button className={`tab-btn ${activeTab === 'payments' ? 'active' : ''}`} onClick={() => setActiveTab('payments')}>
              Payments {calculatePaymentsTotal()}
            </button>
          </div>

          {activeTab === 'deposits' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <div style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
                <button className="add-item-btn" onClick={() => handleMarkAll('deposits')}>
                  <i className="fas fa-check"></i> Mark All
                </button>
                <button className="add-item-btn" onClick={() => handleUnmarkAll('deposits')}>
                  <i className="fas fa-times"></i> Unmark All
                </button>
                <button className="add-item-btn">
                  <i className="fas fa-check-double"></i> Mark All Cleared to Reconcile
                </button>
              </div>

              <div className="items-table-container">
                <table className="items-table">
                  <thead>
                    <tr>
                      <th style={{width: '30px'}}></th>
                      <th style={{minWidth: '100px'}}>DATE</th>
                      <th style={{minWidth: '100px'}}>TYPE</th>
                      <th style={{minWidth: '150px'}}>NUMBER</th>
                      <th style={{minWidth: '200px'}}>NAME</th>
                      <th style={{minWidth: '200px'}}>MEMO</th>
                      <th style={{minWidth: '120px'}}>AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.deposits.map((deposit) => (
                      <tr 
                        key={deposit.id}
                        onMouseEnter={() => setHoveredRow(deposit.id)}
                        onMouseLeave={() => setHoveredRow(null)}
                      >
                        <td style={{ textAlign: 'center' }}>
                          <input
                            type="checkbox"
                            checked={deposit.selected}
                            onChange={(e) => handleDepositChange(deposit.id, 'selected', e.target.checked)}
                            style={{width: '16px', height: '16px'}}
                          />
                        </td>
                        <td>{deposit.date}</td>
                        <td>{deposit.type}</td>
                        <td>{deposit.number}</td>
                        <td>{deposit.name}</td>
                        <td>{deposit.memo}</td>
                        <td style={{ textAlign: 'right' }}>{deposit.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'payments' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <div style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
                <button className="add-item-btn" onClick={() => handleMarkAll('payments')}>
                  <i className="fas fa-check"></i> Mark All
                </button>
                <button className="add-item-btn" onClick={() => handleUnmarkAll('payments')}>
                  <i className="fas fa-times"></i> Unmark All
                </button>
                <button className="add-item-btn">
                  <i className="fas fa-check-double"></i> Mark All Cleared to Reconcile
                </button>
              </div>

              <div className="items-table-container">
                <table className="items-table">
                  <thead>
                    <tr>
                      <th style={{width: '30px'}}></th>
                      <th style={{minWidth: '100px'}}>DATE</th>
                      <th style={{minWidth: '100px'}}>TYPE</th>
                      <th style={{minWidth: '150px'}}>NUMBER</th>
                      <th style={{minWidth: '200px'}}>NAME</th>
                      <th style={{minWidth: '200px'}}>MEMO</th>
                      <th style={{minWidth: '120px'}}>AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.payments.map((payment) => (
                      <tr 
                        key={payment.id}
                        onMouseEnter={() => setHoveredRow(payment.id)}
                        onMouseLeave={() => setHoveredRow(null)}
                      >
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
                        <td>{payment.name}</td>
                        <td>{payment.memo}</td>
                        <td style={{ textAlign: 'right' }}>{payment.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

      <Toast 
        message={toast.message} 
        type={toast.type} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
    </div>
  );
};

export default CreateBankReconciliation;
