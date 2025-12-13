import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewBillDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('expenses');
  const [expensesSubTab, setExpensesSubTab] = useState('expenses');

  const billData = {
    transactionNumber: 'VENDOR2714',
    referenceNo: 'BALANCE B/F-A1',
    vendor: 'A1 ENGINEERING SERVICES PTE LTD',
    currency: 'SGD',
    exchangeRate: 1.00,
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
        customer: '',
        project: '',
        billable: false
      }
    ],
    items: [],
    terms: '',
    incoterm: '',
    vendorSelect: '- Custom -',
    printingPreference: 'TO BE PRINTED'
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
              <span>{billData.transactionNumber}</span>
              <span style={{ color: '#666', fontSize: '13px', marginLeft: '10px' }}>{billData.vendor}</span>
              <span className="status-badge" style={{ background: '#48bb78', color: 'white', padding: '4px 8px', borderRadius: '4px', marginLeft: '10px', fontSize: '11px', fontWeight: '600' }}>
                PAID IN FULL
              </span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={handleBack}>List</button>
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
                <label>VENDOR</label>
                <div className="field-value" style={{ color: '#4a90e2', cursor: 'pointer' }}>{billData.vendor}</div>
              </div>
              <div className="detail-field">
                <label>TRANSACTION NUMBER</label>
                <div className="field-value">{billData.transactionNumber}</div>
              </div>
              <div className="detail-field">
                <label>DATE</label>
                <div className="field-value">{billData.date}</div>
              </div>
              <div className="detail-field">
                <label>DUE DATE</label>
                <div className="field-value">{billData.dueDate}</div>
              </div>
              <div className="detail-field">
                <label>REFERENCE NO</label>
                <div className="field-value">{billData.referenceNo}</div>
              </div>
              <div className="detail-field">
                <label>POSTING PERIOD</label>
                <div className="field-value">{billData.postingPeriod}</div>
              </div>
              <div className="detail-field">
                <label>CURRENCY</label>
                <div className="field-value">{billData.currency}</div>
              </div>
              <div className="detail-field">
                <label>EXCHANGE RATE</label>
                <div className="field-value">{billData.exchangeRate.toFixed(2)}</div>
              </div>
              <div className="detail-field">
                <label>MEMO</label>
                <div className="field-value">{billData.memo}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{billData.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>PURCHASE TYPE</label>
                <div className="field-value">{billData.purchaseType}</div>
              </div>
              <div className="detail-field">
                <label>APPROVAL STATUS</label>
                <div className="field-value">{billData.approvalStatus}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Interface */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'expenses' ? 'active' : ''}`} onClick={() => setActiveTab('expenses')}>Expenses and Items</button>
            <button className={`tab-btn ${activeTab === 'billing' ? 'active' : ''}`} onClick={() => setActiveTab('billing')}>Billing</button>
            <button className={`tab-btn ${activeTab === 'relationships' ? 'active' : ''}`} onClick={() => setActiveTab('relationships')}>Relationships</button>
            <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>Communication</button>
            <button className={`tab-btn ${activeTab === 'related' ? 'active' : ''}`} onClick={() => setActiveTab('related')}>Related Records</button>
            <button className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`} onClick={() => setActiveTab('system')}>System Information</button>
            <button className={`tab-btn ${activeTab === 'glimpact' ? 'active' : ''}`} onClick={() => setActiveTab('glimpact')}>GL Impact</button>
            <button className={`tab-btn ${activeTab === 'supplier' ? 'active' : ''}`} onClick={() => setActiveTab('supplier')}>Supplier Received Items</button>
          </div>

          {/* Expenses and Items Tab */}
          {activeTab === 'expenses' && (
            <div className="tab-content">
              {/* Sub-tabs for Expenses and Items */}
              <div className="sub-tabs-header" style={{ borderBottom: '1px solid #e0e0e0', padding: '0 1.5rem', background: '#f8f9fa' }}>
                <button 
                  className={`sub-tab-btn ${expensesSubTab === 'expenses' ? 'active' : ''}`}
                  onClick={() => setExpensesSubTab('expenses')}
                  style={{
                    padding: '12px 20px',
                    border: 'none',
                    background: expensesSubTab === 'expenses' ? '#fff' : 'transparent',
                    borderBottom: expensesSubTab === 'expenses' ? '2px solid #dc2626' : '2px solid transparent',
                    cursor: 'pointer',
                    fontWeight: expensesSubTab === 'expenses' ? '600' : '400',
                    color: expensesSubTab === 'expenses' ? '#dc2626' : '#666',
                    fontSize: '13px'
                  }}
                >
                  Expenses
                </button>
                <button 
                  className={`sub-tab-btn ${expensesSubTab === 'items' ? 'active' : ''}`}
                  onClick={() => setExpensesSubTab('items')}
                  style={{
                    padding: '12px 20px',
                    border: 'none',
                    background: expensesSubTab === 'items' ? '#fff' : 'transparent',
                    borderBottom: expensesSubTab === 'items' ? '2px solid #dc2626' : '2px solid transparent',
                    cursor: 'pointer',
                    fontWeight: expensesSubTab === 'items' ? '600' : '400',
                    color: expensesSubTab === 'items' ? '#dc2626' : '#666',
                    fontSize: '13px'
                  }}
                >
                  Items
                </button>
              </div>

              {/* Expenses Sub-tab Content */}
              {expensesSubTab === 'expenses' && (
                <div className="form-section" style={{ padding: '1.5rem' }}>
                  <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#333', margin: 0 }}>Expenses</h3>
                    <span style={{ fontSize: '13px', color: '#666' }}>0.00</span>
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
                          <th style={{ minWidth: '200px' }}>CUSTOMER:PROJECT</th>
                          <th style={{ minWidth: '80px' }}>BILLABLE</th>
                          <th style={{ minWidth: '100px' }}>HISTORY</th>
                        </tr>
                      </thead>
                      <tbody>
                        {billData.expenses.length === 0 ? (
                          <tr>
                            <td colSpan="14" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                              No records to show.
                            </td>
                          </tr>
                        ) : (
                          billData.expenses.map((expense) => (
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
                              <td>{expense.customer && expense.project ? `${expense.customer}:${expense.project}` : '-'}</td>
                              <td style={{ textAlign: 'center' }}>{expense.billable ? '✓' : '-'}</td>
                              <td style={{ textAlign: 'center' }}>-</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Items Sub-tab Content */}
              {expensesSubTab === 'items' && (
                <div className="form-section" style={{ padding: '1.5rem' }}>
                  <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#333', margin: 0 }}>Items</h3>
                    <span style={{ fontSize: '13px', color: '#666' }}>0.00</span>
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
                          <th style={{ minWidth: '200px' }}>CUSTOMER:PROJECT</th>
                          <th style={{ minWidth: '80px' }}>BILLABLE</th>
                          <th style={{ minWidth: '100px' }}>RECEIPTS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {billData.items.length === 0 ? (
                          <tr>
                            <td colSpan="18" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                              No records to show.
                            </td>
                          </tr>
                        ) : (
                          billData.items.map((item) => (
                            <tr key={item.id}>
                              <td>{item.item}</td>
                              <td>{item.description}</td>
                              <td>{item.vendorName || '-'}</td>
                              <td style={{ textAlign: 'center' }}>{item.quantity}</td>
                              <td>{item.units}</td>
                              <td style={{ textAlign: 'right' }}>{item.rate.toFixed(2)}</td>
                              <td style={{ textAlign: 'right' }}>{item.amount.toFixed(2)}</td>
                              <td>{item.taxCode}</td>
                              <td style={{ textAlign: 'center' }}>{item.taxRate}</td>
                              <td style={{ textAlign: 'right' }}>{item.grossAmt.toFixed(2)}</td>
                              <td style={{ textAlign: 'right' }}>{item.taxAmt.toFixed(2)}</td>
                              <td>-</td>
                              <td>{item.department || '-'}</td>
                              <td>{item.class || '-'}</td>
                              <td>{item.location || '-'}</td>
                              <td>{item.customer && item.project ? `${item.customer}:${item.project}` : '-'}</td>
                              <td style={{ textAlign: 'center' }}>{item.billable ? '✓' : '-'}</td>
                              <td>-</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
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
                      <div className="field-value">{billData.terms || '-'}</div>
                    </div>
                    <div className="detail-field">
                      <label>INCOTERM</label>
                      <div className="field-value">{billData.incoterm || '-'}</div>
                    </div>
                    <div className="detail-field">
                      <label>VENDOR SELECT</label>
                      <div className="field-value">{billData.vendorSelect}</div>
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
                    <div className="field-value">{billData.printingPreference}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Related Records Tab */}
          {activeTab === 'related' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <div className="items-table-container">
                <table className="items-table">
                  <thead>
                    <tr>
                      <th style={{ minWidth: '150px' }}>TYPE</th>
                      <th style={{ minWidth: '150px' }}>DOCUMENT NUMBER</th>
                      <th style={{ minWidth: '150px' }}>DATE</th>
                      <th style={{ minWidth: '150px' }}>AMOUNT</th>
                      <th style={{ minWidth: '200px' }}>MEMO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                        No records to show.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* System Information Tab */}
          {activeTab === 'system' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <div className="detail-grid">
                <div className="detail-field">
                  <label>CREATED BY</label>
                  <div className="field-value">System Administrator</div>
                </div>
                <div className="detail-field">
                  <label>DATE CREATED</label>
                  <div className="field-value">1/1/2021 12:00 AM</div>
                </div>
                <div className="detail-field">
                  <label>LAST MODIFIED BY</label>
                  <div className="field-value">System Administrator</div>
                </div>
                <div className="detail-field">
                  <label>DATE LAST MODIFIED</label>
                  <div className="field-value">1/1/2021 12:00 AM</div>
                </div>
              </div>
            </div>
          )}

          {/* GL Impact Tab */}
          {activeTab === 'glimpact' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <div className="items-table-container">
                <table className="items-table">
                  <thead>
                    <tr>
                      <th style={{ minWidth: '200px' }}>ACCOUNT</th>
                      <th style={{ minWidth: '120px' }}>DEBIT</th>
                      <th style={{ minWidth: '120px' }}>CREDIT</th>
                      <th style={{ minWidth: '250px' }}>MEMO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="4" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                        No records to show.
                      </td>
                    </tr>
                  </tbody>
                </table>
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
