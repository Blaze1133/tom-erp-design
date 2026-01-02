import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewWriteCheckDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('expensesItems');
  const [expenseItemTab, setExpenseItemTab] = useState('expense');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);

  const checkData = {
    documentNumber: 'CHK-2024-001',
    transactionNumber: 'CHK-2024-001',
    status: 'PENDING',
    customForm: 'TOM Check',
    account: '11230 ALL Bank Accounts : NEP UOB 9314-301-906-1',
    balance: '-13,485.52',
    payee: '1000 TEAM LEAD CONSTRUCTION PTE LTD',
    amount: 5000.00,
    currency: 'SGD',
    exchangeRate: '1.00',
    tax: '0.00',
    date: '8/11/2025',
    postingPeriod: 'Nov 2025',
    checkNumber: '491',
    toBePrinted: true,
    memo: 'Payment for construction services',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
    expenses: [
      {
        id: 1,
        account: '50100 Operating Expenses : Construction Services',
        amount: 5000.00,
        taxCode: 'GST_SG-7%',
        taxRate: '7.0%',
        grossAmt: 5350.00,
        taxAmt: 350.00,
        memo: 'Construction payment',
        department: 'TOM: Operating',
        class: 'Project Works',
        location: 'TOM-11',
        customer: 'ABC Corporation',
        billable: true
      }
    ],
    items: [
      {
        id: 1,
        item: 'Welding Electrodes',
        vendorName: 'Technical Asia Pte Ltd',
        quantity: 50,
        units: 'Pcs',
        description: 'Aluminum Electrodes 3.2mm x 50 pcs for construction project',
        rate: 15.00,
        amount: 750.00,
        taxCode: 'GST_SG-7%',
        taxRate: '7.0%',
        grossAmt: 802.50,
        taxAmt: 52.50,
        class: 'Material Supply',
        location: 'TOM-11',
        customerProject: 'ABC Corporation: Marine Equipment Supply',
        billable: true
      }
    ],
    subtotal: 5000.00,
    taxTotal: 350.00,
    total: 5350.00
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-checks');
    }
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('edit-check');
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-money-check"></i>
          <div>
            <h1>Check</h1>
            <div className="detail-subtitle">
              <span>{checkData.documentNumber}</span>
              <span>{checkData.payee}</span>
              <span className="status-badge-detail" style={{ background: '#ff9800' }}>
                {checkData.status}
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
          <button className="btn-action" onClick={() => setCurrentPage('view-checks')}>List</button>
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
                <div className="field-value">{checkData.customForm}</div>
              </div>
              <div className="detail-field">
                <label>TRANSACTION NUMBER</label>
                <div className="field-value">{checkData.transactionNumber}</div>
              </div>
              <div className="detail-field">
                <label>ACCOUNT</label>
                <div className="field-value">{checkData.account}</div>
              </div>
              <div className="detail-field">
                <label>BALANCE</label>
                <div className="field-value">{checkData.balance}</div>
              </div>
              <div className="detail-field">
                <label>PAYEE</label>
                <div className="field-value">{checkData.payee}</div>
              </div>
              <div className="detail-field">
                <label>AMOUNT</label>
                <div className="field-value">{checkData.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
              </div>
              <div className="detail-field">
                <label>CURRENCY</label>
                <div className="field-value">{checkData.currency}</div>
              </div>
              <div className="detail-field">
                <label>EXCHANGE RATE</label>
                <div className="field-value">{checkData.exchangeRate}</div>
              </div>
              <div className="detail-field">
                <label>TAX</label>
                <div className="field-value">{checkData.tax}</div>
              </div>
              <div className="detail-field">
                <label>DATE</label>
                <div className="field-value">{checkData.date}</div>
              </div>
              <div className="detail-field">
                <label>POSTING PERIOD</label>
                <div className="field-value">{checkData.postingPeriod}</div>
              </div>
              <div className="detail-field">
                <label>CHECK #</label>
                <div className="field-value">{checkData.checkNumber}</div>
              </div>
              <div className="detail-field">
                <label>TO BE PRINTED</label>
                <div className="field-value">{checkData.toBePrinted ? 'Yes' : 'No'}</div>
              </div>
              <div className="detail-field">
                <label>MEMO</label>
                <div className="field-value">{checkData.memo || '-'}</div>
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
                <div className="field-value">{checkData.subsidiary}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-tabs" style={{ marginTop: '2rem' }}>
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'expensesItems' ? 'active' : ''}`} onClick={() => setActiveTab('expensesItems')}>Expenses & Items</button>
            <button className={`tab-btn ${activeTab === 'relatedRecords' ? 'active' : ''}`} onClick={() => setActiveTab('relatedRecords')}>Related Records</button>
            <button className={`tab-btn ${activeTab === 'relationships' ? 'active' : ''}`} onClick={() => setActiveTab('relationships')}>Relationships</button>
            <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>Communication</button>
            <button className={`tab-btn ${activeTab === 'glImpact' ? 'active' : ''}`} onClick={() => setActiveTab('glImpact')}>GL Impact</button>
            <button className={`tab-btn ${activeTab === 'payeeAddress' ? 'active' : ''}`} onClick={() => setActiveTab('payeeAddress')}>Payee Address</button>
            <button className={`tab-btn ${activeTab === 'supplierItems' ? 'active' : ''}`} onClick={() => setActiveTab('supplierItems')}>Supplier Received Items</button>
            <button className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`} onClick={() => setActiveTab('system')}>System Information</button>
          </div>

          {activeTab === 'expensesItems' && (
            <div className="tab-content" style={{ padding: '0' }}>
              <div style={{ display: 'flex', gap: '0', borderBottom: '2px solid #e0e0e0', paddingLeft: '1.5rem', background: '#f8f8f8' }}>
                <button 
                  onClick={() => setExpenseItemTab('expense')}
                  style={{ 
                    padding: '0.75rem 1.5rem',
                    background: expenseItemTab === 'expense' ? '#5b6b8a' : 'transparent',
                    color: expenseItemTab === 'expense' ? '#fff' : 'rgba(0,0,0,0.6)',
                    border: 'none',
                    borderRight: '1px solid rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: expenseItemTab === 'expense' ? '600' : '500',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <i className="fas fa-receipt"></i>
                  Expense
                </button>
                <button 
                  onClick={() => setExpenseItemTab('item')}
                  style={{ 
                    padding: '0.75rem 1.5rem',
                    background: expenseItemTab === 'item' ? '#5b6b8a' : 'transparent',
                    color: expenseItemTab === 'item' ? '#fff' : 'rgba(0,0,0,0.6)',
                    border: 'none',
                    borderRight: '1px solid rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: expenseItemTab === 'item' ? '600' : '500',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <i className="fas fa-box"></i>
                  Item
                </button>
              </div>

              {expenseItemTab === 'expense' && (
            <div className="tab-content">
              <div className="items-table-container">
                <table className="items-table">
                  <thead>
                    <tr>
                      <th>ACCOUNT</th>
                      <th>AMOUNT</th>
                      <th>TAX CODE</th>
                      <th>TAX RATE</th>
                      <th>GROSS AMT</th>
                      <th>TAX AMT</th>
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
                        <td>{expense.account}</td>
                        <td style={{ textAlign: 'right' }}>{expense.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                        <td>{expense.taxCode}</td>
                        <td style={{ textAlign: 'center' }}>{expense.taxRate}</td>
                        <td style={{ textAlign: 'right' }}>{expense.grossAmt.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                        <td style={{ textAlign: 'right' }}>{expense.taxAmt.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                        <td>{expense.memo}</td>
                        <td>{expense.department}</td>
                        <td>{expense.class}</td>
                        <td>{expense.location}</td>
                        <td>{expense.customer}</td>
                        <td style={{ textAlign: 'center' }}>{expense.billable ? '✓' : '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <div className="summary-grid" style={{ marginTop: '2rem' }}>
                  <div className="summary-card">
                    <div className="summary-title">SUBTOTAL</div>
                    <div className="summary-value">${checkData.subtotal.toFixed(2)}</div>
                  </div>
                  <div className="summary-card">
                    <div className="summary-title">TAX (7%)</div>
                    <div className="summary-value">${checkData.taxTotal.toFixed(2)}</div>
                  </div>
                  <div className="summary-card" style={{ background: '#f8f9fa' }}>
                    <div className="summary-title">TOTAL AMOUNT</div>
                    <div className="summary-value" style={{ color: '#4a90e2' }}>${checkData.total.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            </div>
              )}

              {expenseItemTab === 'item' && (
            <div className="tab-content">
              {checkData.items.length === 0 ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
                  No items added
                </div>
              ) : (
                <div className="items-table-container">
                  <table className="items-table">
                    <thead>
                      <tr>
                        <th>ITEM</th>
                        <th>VENDOR NAME</th>
                        <th>QUANTITY</th>
                        <th>UNITS</th>
                        <th>DESCRIPTION</th>
                        <th>RATE</th>
                        <th>AMOUNT</th>
                        <th>TAX CODE</th>
                        <th>TAX RATE</th>
                        <th>GROSS AMT</th>
                        <th>TAX AMT</th>
                        <th>CLASS</th>
                        <th>LOCATION</th>
                        <th>CUSTOMER:PROJECT</th>
                        <th>BILLABLE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {checkData.items.map((item) => (
                        <tr key={item.id}>
                          <td>{item.item}</td>
                          <td>{item.vendorName}</td>
                          <td style={{ textAlign: 'center' }}>{item.quantity}</td>
                          <td>{item.units}</td>
                          <td>{item.description}</td>
                          <td style={{ textAlign: 'right' }}>{item.rate.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                          <td style={{ textAlign: 'right' }}>{item.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                          <td>{item.taxCode}</td>
                          <td style={{ textAlign: 'center' }}>{item.taxRate}</td>
                          <td style={{ textAlign: 'right' }}>{item.grossAmt.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                          <td style={{ textAlign: 'right' }}>{item.taxAmt.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                          <td>{item.class}</td>
                          <td>{item.location}</td>
                          <td>{item.customerProject}</td>
                          <td style={{ textAlign: 'center' }}>{item.billable ? '✓' : '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
              )}
            </div>
          )}

          {activeTab === 'relatedRecords' && (
            <div className="tab-content">
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Reimbursements
                </h3>
                <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                  <table className="items-table" style={{ width: '100%', fontSize: '0.75rem' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '8px 6px' }}>DATE</th>
                        <th style={{ padding: '8px 6px' }}>NUMBER</th>
                        <th style={{ padding: '8px 6px' }}>AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="3" style={{ textAlign: 'center', padding: '1rem', color: '#999' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'relationships' && (
            <div className="tab-content">
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Contacts
                </h3>
                <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                  <table className="items-table" style={{ width: '100%', fontSize: '0.75rem' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '8px 6px' }}>CONTACT</th>
                        <th style={{ padding: '8px 6px' }}>JOB TITLE</th>
                        <th style={{ padding: '8px 6px' }}>EMAIL</th>
                        <th style={{ padding: '8px 6px' }}>MAIN PHONE</th>
                        <th style={{ padding: '8px 6px' }}>SUBSIDIARY</th>
                        <th style={{ padding: '8px 6px' }}>ROLE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="6" style={{ textAlign: 'center', padding: '1rem', color: '#999' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'communication' && (
            <div className="tab-content">
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Events
                </h3>
                <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                  <table className="items-table" style={{ width: '100%', fontSize: '0.75rem' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '8px 6px' }}>TITLE</th>
                        <th style={{ padding: '8px 6px' }}>LOCATION</th>
                        <th style={{ padding: '8px 6px' }}>DATE</th>
                        <th style={{ padding: '8px 6px' }}>ALL DAY</th>
                        <th style={{ padding: '8px 6px' }}>START TIME</th>
                        <th style={{ padding: '8px 6px' }}>END TIME</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="6" style={{ textAlign: 'center', padding: '1rem', color: '#999' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="form-section" style={{ marginTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Phone Calls
                </h3>
                <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                  <table className="items-table" style={{ width: '100%', fontSize: '0.75rem' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '8px 6px' }}>TITLE</th>
                        <th style={{ padding: '8px 6px' }}>ASSIGNED</th>
                        <th style={{ padding: '8px 6px' }}>PHONE</th>
                        <th style={{ padding: '8px 6px' }}>PRIORITY</th>
                        <th style={{ padding: '8px 6px' }}>STATUS</th>
                        <th style={{ padding: '8px 6px' }}>START DATE</th>
                        <th style={{ padding: '8px 6px' }}>START TIME</th>
                        <th style={{ padding: '8px 6px' }}>COMPLETED DATE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="8" style={{ textAlign: 'center', padding: '1rem', color: '#999' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="form-section" style={{ marginTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Files
                </h3>
                <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                  <table className="items-table" style={{ width: '100%', fontSize: '0.75rem' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '8px 6px' }}>NAME</th>
                        <th style={{ padding: '8px 6px' }}>SIZE</th>
                        <th style={{ padding: '8px 6px' }}>TYPE</th>
                        <th style={{ padding: '8px 6px' }}>DATE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="4" style={{ textAlign: 'center', padding: '1rem', color: '#999' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="form-section" style={{ marginTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  User Notes
                </h3>
                <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                  <table className="items-table" style={{ width: '100%', fontSize: '0.75rem' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '8px 6px' }}>TITLE</th>
                        <th style={{ padding: '8px 6px' }}>NOTE</th>
                        <th style={{ padding: '8px 6px' }}>NOTE TYPE</th>
                        <th style={{ padding: '8px 6px' }}>NOTE DATE</th>
                        <th style={{ padding: '8px 6px' }}>AUTHOR</th>
                        <th style={{ padding: '8px 6px' }}>TIME</th>
                        <th style={{ padding: '8px 6px' }}>DIRECTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="7" style={{ textAlign: 'center', padding: '1rem', color: '#999' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'glImpact' && (
            <div className="tab-content">
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  GL Impact
                </h3>
                <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                  <table className="items-table" style={{ width: '100%', fontSize: '0.75rem' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '8px 6px' }}>ACCOUNT</th>
                        <th style={{ padding: '8px 6px' }}>AMOUNT (DEBIT)</th>
                        <th style={{ padding: '8px 6px' }}>AMOUNT (CREDIT)</th>
                        <th style={{ padding: '8px 6px' }}>POSTING</th>
                        <th style={{ padding: '8px 6px' }}>MEMO</th>
                        <th style={{ padding: '8px 6px' }}>NAME</th>
                        <th style={{ padding: '8px 6px' }}>SUBSIDIARY</th>
                        <th style={{ padding: '8px 6px' }}>DEPARTMENT</th>
                        <th style={{ padding: '8px 6px' }}>CLASS</th>
                        <th style={{ padding: '8px 6px' }}>LOCATION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>50100 Operating Expenses : Construction Services</td>
                        <td style={{ padding: '8px 6px', textAlign: 'right' }}>5,000.00</td>
                        <td style={{ padding: '8px 6px', textAlign: 'right' }}>-</td>
                        <td style={{ padding: '8px 6px' }}>Yes</td>
                        <td style={{ padding: '8px 6px' }}>Construction payment</td>
                        <td style={{ padding: '8px 6px' }}>1000 TEAM LEAD CONSTRUCTION PTE LTD</td>
                        <td style={{ padding: '8px 6px' }}>Tech Onshore MEP Prefabricators Pte Ltd</td>
                        <td style={{ padding: '8px 6px' }}>TOM: Operating</td>
                        <td style={{ padding: '8px 6px' }}>Project Works</td>
                        <td style={{ padding: '8px 6px' }}>TOM-11</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>11230 ALL Bank Accounts : NEP UOB 9314-301-906-1</td>
                        <td style={{ padding: '8px 6px', textAlign: 'right' }}>-</td>
                        <td style={{ padding: '8px 6px', textAlign: 'right' }}>5,000.00</td>
                        <td style={{ padding: '8px 6px' }}>Yes</td>
                        <td style={{ padding: '8px 6px' }}>Payment for construction services</td>
                        <td style={{ padding: '8px 6px' }}>1000 TEAM LEAD CONSTRUCTION PTE LTD</td>
                        <td style={{ padding: '8px 6px' }}>Tech Onshore MEP Prefabricators Pte Ltd</td>
                        <td style={{ padding: '8px 6px' }}>-</td>
                        <td style={{ padding: '8px 6px' }}>-</td>
                        <td style={{ padding: '8px 6px' }}>-</td>
                      </tr>
                      <tr style={{ fontWeight: 'bold', background: '#f5f5f5' }}>
                        <td style={{ padding: '8px 6px' }}>TOTAL</td>
                        <td style={{ padding: '8px 6px', textAlign: 'right' }}>5,000.00</td>
                        <td style={{ padding: '8px 6px', textAlign: 'right' }}>5,000.00</td>
                        <td colSpan="7"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'payeeAddress' && (
            <div className="tab-content">
              <div className="form-section" style={{ padding: '1.5rem' }}>
                <div className="detail-section">
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Payee Address</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>ADDRESS TO SELECT</label>
                        <div className="field-value">Primary Address</div>
                      </div>
                      <div className="detail-field">
                        <label>PAY TO</label>
                        <div className="field-value" style={{ whiteSpace: 'pre-wrap', background: '#f5f5f5', padding: '10px', borderRadius: '4px', minHeight: '80px' }}>
                          {checkData.payee}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'supplierItems' && (
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
                          <td style={{ padding: '8px 6px' }}>Welding Electrodes</td>
                          <td style={{ padding: '8px 6px', textAlign: 'center' }}>50</td>
                          <td style={{ padding: '8px 6px' }}>Aluminum Electrodes for construction</td>
                          <td style={{ padding: '8px 6px', textAlign: 'right' }}>750.00 SGD</td>
                          <td style={{ padding: '8px 6px' }}>Technical Asia Pte Ltd</td>
                          <td style={{ padding: '8px 6px' }}>IR-2024-0123</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'system' && (
            <div className="tab-content">
              <div className="form-section" style={{ padding: '1.5rem' }}>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>CREATED BY</label>
                    <div className="field-value">Admin User</div>
                  </div>
                  <div className="detail-field">
                    <label>DATE CREATED</label>
                    <div className="field-value">8/11/2025 10:30 AM</div>
                  </div>
                  <div className="detail-field">
                    <label>LAST MODIFIED BY</label>
                    <div className="field-value">Admin User</div>
                  </div>
                  <div className="detail-field">
                    <label>LAST MODIFIED</label>
                    <div className="field-value">8/11/2025 2:15 PM</div>
                  </div>
                  <div className="detail-field">
                    <label>INTERNAL ID</label>
                    <div className="field-value">CHK-2024-001-INT-12345</div>
                  </div>
                  <div className="detail-field">
                    <label>STATUS</label>
                    <div className="field-value">
                      <span className="status-badge" style={{ background: '#ff9800', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem' }}>
                        PENDING
                      </span>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                    Activity Log
                  </h3>
                  <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                    <table className="items-table" style={{ width: '100%', fontSize: '0.75rem' }}>
                      <thead>
                        <tr>
                          <th style={{ padding: '8px 6px' }}>DATE & TIME</th>
                          <th style={{ padding: '8px 6px' }}>USER</th>
                          <th style={{ padding: '8px 6px' }}>ACTION</th>
                          <th style={{ padding: '8px 6px' }}>FIELD</th>
                          <th style={{ padding: '8px 6px' }}>OLD VALUE</th>
                          <th style={{ padding: '8px 6px' }}>NEW VALUE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ padding: '8px 6px' }}>8/11/2025 2:15 PM</td>
                          <td style={{ padding: '8px 6px' }}>Admin User</td>
                          <td style={{ padding: '8px 6px' }}>Modified</td>
                          <td style={{ padding: '8px 6px' }}>Amount</td>
                          <td style={{ padding: '8px 6px' }}>4,500.00</td>
                          <td style={{ padding: '8px 6px' }}>5,000.00</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '8px 6px' }}>8/11/2025 10:30 AM</td>
                          <td style={{ padding: '8px 6px' }}>Admin User</td>
                          <td style={{ padding: '8px 6px' }}>Created</td>
                          <td style={{ padding: '8px 6px' }}>-</td>
                          <td style={{ padding: '8px 6px' }}>-</td>
                          <td style={{ padding: '8px 6px' }}>Check Created</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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

export default ViewWriteCheckDetail;
