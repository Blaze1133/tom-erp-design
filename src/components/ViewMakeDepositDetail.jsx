import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewMakeDepositDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('payments');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);

  const depositData = {
    documentNumber: 'DEP-2024-001',
    status: 'DEPOSITED',
    customForm: 'TOM Deposit',
    deposit: 'DEP-2024-001',
    currency: 'SGD',
    exchangeRate: '1.00',
    account: '11180 ALL Bank Accounts : GD 072-904177-1',
    amount: 15000.00,
    date: '31/3/2021',
    postingPeriod: 'Mar 2021',
    toBePrinted: false,
    memo: 'Customer payments deposit',
    subsidiary: 'Tech Offshore Marine (DQ) Pte Ltd',
    class: 'Project Works',
    location: 'TOM-11',
    department: 'TOM: Finance',
    payments: [
      {
        id: 1,
        selected: true,
        date: '31/12/2022',
        type: 'Payment',
        number: 'PVTOMSV00008',
        memo: 'VOID',
        paymentMethod: 'Bank Transfer',
        refNo: 'REF-001',
        from: '3 Sembcorp Marine Integrated Yard Pte Ltd',
        currency: 'SGD',
        paymentAmount: 15000.00,
        amountSGD: 15000.00
      }
    ],
    otherDeposits: [
      {
        id: 1,
        name: 'Miscellaneous Income',
        amount: 500.00,
        account: '40100 Other Income',
        paymentMethod: 'Bank Transfer',
        number: 'OD-001',
        department: 'TOM: Finance',
        class: 'Material Supply',
        location: 'TOM-11',
        memo: 'Additional deposit'
      }
    ],
    cashBack: [
      {
        id: 1,
        amount: 100.00,
        account: '60100 Operating Expenses',
        department: 'TOM: Operating',
        class: 'Consumable Item',
        location: 'TOM-11',
        memo: 'Cash back for expenses'
      }
    ],
    subtotal: 15000.00,
    total: 15000.00
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-deposits');
    }
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('edit-deposit');
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-money-check-alt"></i>
          <div>
            <h1>Deposit</h1>
            <div className="detail-subtitle">
              <span>{depositData.documentNumber}</span>
              <span>{depositData.account}</span>
              <span className="status-badge-detail" style={{ background: '#4caf50' }}>
                {depositData.status}
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
          <button className="btn-action" onClick={() => setCurrentPage('view-deposits')}>List</button>
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
                <label>CUSTOM FORM</label>
                <div className="field-value">{depositData.customForm}</div>
              </div>
              <div className="detail-field">
                <label>DEPOSIT #</label>
                <div className="field-value">{depositData.deposit}</div>
              </div>
              <div className="detail-field">
                <label>CURRENCY</label>
                <div className="field-value">{depositData.currency}</div>
              </div>
              <div className="detail-field">
                <label>EXCHANGE RATE</label>
                <div className="field-value">{depositData.exchangeRate}</div>
              </div>
              <div className="detail-field">
                <label>ACCOUNT</label>
                <div className="field-value">{depositData.account}</div>
              </div>
              <div className="detail-field">
                <label>AMOUNT</label>
                <div className="field-value">{depositData.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
              </div>
              <div className="detail-field">
                <label>DATE</label>
                <div className="field-value">{depositData.date}</div>
              </div>
              <div className="detail-field">
                <label>POSTING PERIOD</label>
                <div className="field-value">{depositData.postingPeriod}</div>
              </div>
              <div className="detail-field">
                <label>TO BE PRINTED</label>
                <div className="field-value">{depositData.toBePrinted ? 'Yes' : 'No'}</div>
              </div>
              <div className="detail-field">
                <label>MEMO</label>
                <div className="field-value">{depositData.memo || '-'}</div>
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
                <div className="field-value">{depositData.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>CLASS</label>
                <div className="field-value">{depositData.class}</div>
              </div>
              <div className="detail-field">
                <label>LOCATION</label>
                <div className="field-value">{depositData.location}</div>
              </div>
              <div className="detail-field">
                <label>DEPARTMENT</label>
                <div className="field-value">{depositData.department}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-tabs" style={{ marginTop: '2rem' }}>
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'payments' ? 'active' : ''}`} onClick={() => setActiveTab('payments')}>
              Payments {depositData.payments.reduce((sum, p) => sum + p.amountSGD, 0).toFixed(2)} ●
            </button>
            <button className={`tab-btn ${activeTab === 'otherDeposits' ? 'active' : ''}`} onClick={() => setActiveTab('otherDeposits')}>
              Other Deposits {depositData.otherDeposits.reduce((sum, d) => sum + (d.amount || 0), 0).toFixed(2)}
            </button>
            <button className={`tab-btn ${activeTab === 'cashBack' ? 'active' : ''}`} onClick={() => setActiveTab('cashBack')}>
              Cash Back {depositData.cashBack.reduce((sum, c) => sum + (c.amount || 0), 0).toFixed(2)}
            </button>
            <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>Communication</button>
            <button className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`} onClick={() => setActiveTab('system')}>System Information</button>
          </div>

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
                          <td>{payment.date}</td>
                          <td>{payment.type}</td>
                          <td>{payment.number}</td>
                          <td>{payment.memo}</td>
                          <td>{payment.paymentMethod}</td>
                          <td>{payment.refNo}</td>
                          <td>{payment.from}</td>
                          <td>{payment.currency}</td>
                          <td style={{ textAlign: 'right' }}>{payment.paymentAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                          <td style={{ textAlign: 'right' }}>{payment.amountSGD.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'otherDeposits' && (
            <div className="tab-content">
              <div className="form-section" style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Other Deposits
                </h3>
                <div className="items-table-container">
                  <table className="items-table">
                    <thead>
                      <tr>
                        <th>NAME</th>
                        <th>AMOUNT</th>
                        <th>ACCOUNT</th>
                        <th>PAYMENT METHOD</th>
                        <th>NUMBER</th>
                        <th>DEPARTMENT</th>
                        <th>CLASS</th>
                        <th>LOCATION</th>
                        <th>MEMO</th>
                      </tr>
                    </thead>
                    <tbody>
                      {depositData.otherDeposits.length === 0 ? (
                        <tr>
                          <td colSpan="9" style={{ textAlign: 'center', padding: '1rem', color: '#999' }}>
                            No other deposits
                          </td>
                        </tr>
                      ) : (
                        depositData.otherDeposits.map((deposit) => (
                          <tr key={deposit.id}>
                            <td>{deposit.name}</td>
                            <td style={{ textAlign: 'right' }}>{deposit.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                            <td>{deposit.account}</td>
                            <td>{deposit.paymentMethod}</td>
                            <td>{deposit.number}</td>
                            <td>{deposit.department}</td>
                            <td>{deposit.class}</td>
                            <td>{deposit.location}</td>
                            <td>{deposit.memo}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cashBack' && (
            <div className="tab-content">
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Cash Back
                </h3>
                <div className="items-table-container">
                  <table className="items-table">
                    <thead>
                      <tr>
                        <th>AMOUNT</th>
                        <th>ACCOUNT</th>
                        <th>DEPARTMENT</th>
                        <th>CLASS</th>
                        <th>LOCATION</th>
                        <th>MEMO</th>
                      </tr>
                    </thead>
                    <tbody>
                      {depositData.cashBack.length === 0 ? (
                        <tr>
                          <td colSpan="6" style={{ textAlign: 'center', padding: '1rem', color: '#999' }}>
                            No cash back
                          </td>
                        </tr>
                      ) : (
                        depositData.cashBack.map((cash) => (
                          <tr key={cash.id}>
                            <td style={{ textAlign: 'right' }}>{cash.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                            <td>{cash.account}</td>
                            <td>{cash.department}</td>
                            <td>{cash.class}</td>
                            <td>{cash.location}</td>
                            <td>{cash.memo}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

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

export default ViewMakeDepositDetail;
