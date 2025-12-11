import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewBillDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('expenses');

  const billData = {
    transactionNumber: 'VENDOR2714',
    referenceNo: 'BALANCE B/F-A1',
    vendor: 'A1 ENGINEERING SERVICES PTE LTD',
    account: '20010 Accounts Payable : Trade Creditors',
    amount: 1802.95,
    currency: 'SGD',
    exchangeRate: 1.00,
    vatRegistration: '',
    tax: 0.00,
    dueDate: '1/1/2021',
    date: '1/1/2021',
    postingPeriod: 'Jan 2021',
    memo: 'Old System opening Balance',
    approvalStatus: 'Approved',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    purchaseType: 'Non Critical',
    expenses: [
      {
        id: 1,
        category: '30301 Equity : Opening Balance',
        account: '',
        amount: 1802.95,
        taxCode: 'GST_SG-7%',
        taxRate: '0.0%',
        taxAmt: 0.00,
        grossAmt: 1802.95,
        memo: 'Old System opening balance',
        department: '',
        class: '',
        location: '',
        customerProject: '',
        billable: false
      }
    ]
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-bills');
    }
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('enter-bills');
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-invoice-dollar"></i>
          <div>
            <h1>Bill</h1>
            <div className="detail-subtitle">
              <span className="doc-number">{billData.transactionNumber}</span>
              <span className="status-badge" style={{ background: '#48bb78', color: 'white', padding: '4px 12px', borderRadius: '4px' }}>
                PAID IN FULL
              </span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">List</button>
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
          Credit
        </button>
        <button className="btn-toolbar">
          Authorize Return
        </button>
        <button className="btn-toolbar">
          Make Payment
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print
        </button>
      </div>

      <div className="detail-content">
        {/* Primary Information */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>TRANSACTION NUMBER</label>
                <div className="detail-value">{billData.transactionNumber}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>EXCHANGE RATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.exchangeRate.toFixed(2)}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DUE DATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.dueDate}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>REFERENCE NO.</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.referenceNo}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>VAT REGISTRATION</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.vatRegistration || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.date}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>VENDOR</div>
                <div style={{ color: '#4a90e2', fontSize: '14px', cursor: 'pointer' }}>{billData.vendor}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>TAX</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.tax.toFixed(2)}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>POSTING PERIOD</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.postingPeriod}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>ACCOUNT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.account}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>MEMO</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.memo}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>APPROVAL STATUS</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.approvalStatus}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>AMOUNT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.amount.toFixed(2)}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DISC. DATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>-</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>APPROVAL STATUS</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.approvalStatus}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CURRENCY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.currency}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" disabled />
                <span style={{ fontSize: '13px', color: '#666' }}>PAYMENT HOLD</span>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>NEXT APPROVER</div>
                <div style={{ color: '#333', fontSize: '14px' }}>-</div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div style={{ 
          background: 'white', 
          borderRadius: '4px', 
          marginBottom: '20px',
          border: '1px solid #e0e0e0'
        }}>
          <div style={{ 
            padding: '15px 20px',
            borderBottom: '1px solid #e0e0e0',
            background: '#f8f9fa',
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '11px', color: '#666' }}></i>
            <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0, color: '#333' }}>Classification</h3>
          </div>
          <div style={{ padding: '20px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '30px 60px',
              fontSize: '13px'
            }}>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>SUBSIDIARY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.subsidiary}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>PURCHASE TYPE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.purchaseType}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Interface */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'expenses' ? 'active' : ''}`} onClick={() => setActiveTab('expenses')}>Expenses</button>
            <button className={`tab-btn ${activeTab === 'items' ? 'active' : ''}`} onClick={() => setActiveTab('items')}>Items</button>
            <button className={`tab-btn ${activeTab === 'billing' ? 'active' : ''}`} onClick={() => setActiveTab('billing')}>Billing</button>
            <button className={`tab-btn ${activeTab === 'relationships' ? 'active' : ''}`} onClick={() => setActiveTab('relationships')}>Relationships</button>
            <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>Communication</button>
            <button className={`tab-btn ${activeTab === 'supplier' ? 'active' : ''}`} onClick={() => setActiveTab('supplier')}>Supplier Received Items</button>
          </div>

          {/* Expenses Tab */}
          {activeTab === 'expenses' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <div style={{ marginBottom: '1rem', fontSize: '0.875rem', fontWeight: '600', color: '#333' }}>
                Expenses {billData.amount.toFixed(2)}
              </div>
              <div className="items-table-container">
            <table className="items-table">
              <thead>
                <tr>
                  <th style={{ minWidth: '200px' }}>CATEGORY</th>
                  <th style={{ minWidth: '200px' }}>ACCOUNT</th>
                  <th style={{ minWidth: '120px' }}>AMOUNT</th>
                  <th style={{ minWidth: '150px' }}>TAX CODE</th>
                  <th style={{ minWidth: '100px' }}>TAX RATE</th>
                  <th style={{ minWidth: '100px' }}>TAX AMT</th>
                  <th style={{ minWidth: '120px' }}>GROSS AMT</th>
                  <th style={{ minWidth: '250px' }}>MEMO</th>
                  <th style={{ minWidth: '150px' }}>DEPARTMENT</th>
                  <th style={{ minWidth: '150px' }}>CLASS</th>
                  <th style={{ minWidth: '150px' }}>LOCATION</th>
                  <th style={{ minWidth: '150px' }}>CUSTOMER</th>
                  <th style={{ minWidth: '150px' }}>PROJECT</th>
                  <th style={{ minWidth: '80px' }}>BILLABLE</th>
                </tr>
              </thead>
              <tbody>
                {billData.expenses.map((expense) => (
                  <tr key={expense.id}>
                    <td>{expense.category}</td>
                    <td>{expense.account || '-'}</td>
                    <td style={{ textAlign: 'right' }}>{expense.amount.toFixed(2)}</td>
                    <td>{expense.taxCode}</td>
                    <td style={{ textAlign: 'center' }}>{expense.taxRate}</td>
                    <td style={{ textAlign: 'right' }}>{expense.taxAmt.toFixed(2)}</td>
                    <td style={{ textAlign: 'right' }}>{expense.grossAmt.toFixed(2)}</td>
                    <td>{expense.memo}</td>
                    <td>{expense.department || '-'}</td>
                    <td>{expense.class || '-'}</td>
                    <td>{expense.location || '-'}</td>
                    <td>-</td>
                    <td>-</td>
                    <td style={{ textAlign: 'center' }}>{expense.billable ? '✓' : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
            </div>
          )}

          {/* Items Tab */}
          {activeTab === 'items' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <div style={{ marginBottom: '1rem', fontSize: '0.875rem', fontWeight: '600', color: '#333' }}>
                Items 0.00
              </div>
              <div className="items-table-container">
                <table className="items-table">
                  <thead>
                    <tr>
                      <th style={{ minWidth: '150px' }}>ITEM</th>
                      <th style={{ minWidth: '400px' }}>DESCRIPTION</th>
                      <th style={{ minWidth: '150px' }}>VENDOR NAME</th>
                      <th style={{ minWidth: '80px' }}>QUANTITY</th>
                      <th style={{ minWidth: '100px' }}>UNITS</th>
                      <th style={{ minWidth: '100px' }}>RATE</th>
                      <th style={{ minWidth: '100px' }}>AMOUNT</th>
                      <th style={{ minWidth: '150px' }}>TAX CODE</th>
                      <th style={{ minWidth: '100px' }}>TAX RATE</th>
                      <th style={{ minWidth: '100px' }}>GROSS AMT</th>
                      <th style={{ minWidth: '100px' }}>TAX AMT</th>
                      <th style={{ minWidth: '100px' }}>OPTIONS</th>
                      <th style={{ minWidth: '150px' }}>DEPARTMENT</th>
                      <th style={{ minWidth: '150px' }}>CLASS</th>
                      <th style={{ minWidth: '150px' }}>LOCATION</th>
                      <th style={{ minWidth: '150px' }}>CUSTOMER</th>
                      <th style={{ minWidth: '150px' }}>PROJECT</th>
                      <th style={{ minWidth: '80px' }}>BILLABLE</th>
                      <th style={{ minWidth: '100px' }}>RECEIPTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="19" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                        No records to show.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Billing Tab */}
          {activeTab === 'billing' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <div className="detail-section">
                <div className="section-header">
                  <i className="fas fa-chevron-down"></i>
                  <h3>Billing Information</h3>
                </div>
                <div className="section-body">
                  <div className="detail-grid">
                    <div className="detail-field">
                      <label>TERMS</label>
                      <div className="detail-value">-</div>
                    </div>
                    <div className="detail-field">
                      <label>INCOTERM</label>
                      <div className="detail-value">-</div>
                    </div>
                    <div className="detail-field">
                      <label>VENDOR SELECT</label>
                      <div className="detail-value">- Custom -</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Relationships Tab */}
          {activeTab === 'relationships' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <div className="detail-section">
                <div className="section-header">
                  <i className="fas fa-chevron-down"></i>
                  <h3>Contacts</h3>
                </div>
                <div className="section-body">
                  <p style={{ color: '#888', textAlign: 'center', padding: '2rem' }}>No records to show.</p>
                </div>
              </div>
            </div>
          )}

          {/* Communication Tab */}
          {activeTab === 'communication' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <div className="detail-section">
                <div className="section-header">
                  <i className="fas fa-chevron-down"></i>
                  <h3>Printing</h3>
                </div>
                <div className="section-body">
                  <div className="detail-field">
                    <label>TO BE PRINTED</label>
                    <div className="detail-value">TO BE PRINTED</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Supplier Received Items Tab */}
          {activeTab === 'supplier' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <div className="detail-section">
                <div className="section-header">
                  <i className="fas fa-chevron-down"></i>
                  <h3>Received Items</h3>
                </div>
                <div className="section-body">
                  <div className="items-table-container">
                    <table className="items-table">
                      <thead>
                        <tr>
                          <th style={{ minWidth: '150px' }}>ITEM</th>
                          <th style={{ minWidth: '150px' }}>COUNT OF QUANTITY</th>
                          <th style={{ minWidth: '200px' }}>MEMO</th>
                          <th style={{ minWidth: '200px' }}>SUM OF AMOUNT (FOREIGN CURRENCY)</th>
                          <th style={{ minWidth: '150px' }}>NAME</th>
                          <th style={{ minWidth: '150px' }}>DOCUMENT NUMBER</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                            No records to show.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
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

export default ViewBillDetail;
