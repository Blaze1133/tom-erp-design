import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewBillPaymentDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('expenses');

  const billData = {
    transactionNumber: 'VENDBILL15642',
    referenceNo: '28119',
    vendor: 'BROTHERS GLOVE MERCHANT',
    account: '20010 Accounts Payable : Trade Creditors',
    amount: 231.63,
    currency: 'SGD',
    exchangeRate: 1.00,
    vatRegistration: '',
    tax: 19.13,
    discAmt: '',
    discDate: '',
    paymentHold: false,
    dueDate: '8/5/2025',
    date: '8/5/2025',
    postingPeriod: 'May 2025',
    memo: 'PO created from PR-# PR22TOMSV00119',
    approvalStatus: 'Approved',
    nextApprover: '',
    subsidiary: 'Tech Offshore Marine (SV) Pte Ltd',
    purchaseType: '',
    status: 'OPEN',
    expenses: [],
    items: [
      {
        id: 1,
        item: 'GLOVES',
        vendorName: '-',
        quantity: 25,
        units: 'Pcs',
        description: 'Impact Gloves Size : L',
        rate: 8.50,
        amount: 211.50,
        taxCode: 'GST_SG-0%',
        taxRate: '0.0%',
        taxAmt: 19.13,
        grossAmt: 231.63,
        options: '-',
        department: 'Shipyard Contingency',
        class: '-',
        location: 'JML Ltd. - 5009-110035-P-82 EPC for W BULD FPO',
        customer: '-',
        project: '-',
        billable: false,
        receipts: '-'
      }
    ]
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('pay-bills');
    }
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('edit-bill-payment');
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
              <span>{billData.referenceNo}</span>
              <span style={{ color: '#666', fontSize: '13px', marginLeft: '10px' }}>{billData.vendor}</span>
              <span className="status-badge" style={{ background: '#48bb78', color: 'white', padding: '4px 8px', borderRadius: '4px', marginLeft: '10px', fontSize: '11px', fontWeight: '600' }}>
                {billData.status}
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
                <label>ACCOUNT</label>
                <div className="field-value">{billData.account}</div>
              </div>
              <div className="detail-field">
                <label>VAT REGISTRATION</label>
                <div className="field-value">{billData.vatRegistration || '-'}</div>
              </div>
              <div className="detail-field">
                <label>MEMO</label>
                <div className="field-value">{billData.memo}</div>
              </div>
              <div className="detail-field">
                <label>AMOUNT</label>
                <div className="field-value">{billData.amount.toFixed(2)}</div>
              </div>
              <div className="detail-field">
                <label>TAX</label>
                <div className="field-value">{billData.tax.toFixed(2)}</div>
              </div>
              <div className="detail-field">
                <label>APPROVAL STATUS</label>
                <div className="field-value">{billData.approvalStatus}</div>
              </div>
              <div className="detail-field">
                <label>CURRENCY</label>
                <div className="field-value">{billData.currency}</div>
              </div>
              <div className="detail-field">
                <label>DISC. AMT</label>
                <div className="field-value">{billData.discAmt || '-'}</div>
              </div>
              <div className="detail-field">
                <label>NEXT APPROVER</label>
                <div className="field-value">{billData.nextApprover || '-'}</div>
              </div>
              <div className="detail-field">
                <label>EXCHANGE RATE</label>
                <div className="field-value">{billData.exchangeRate.toFixed(2)}</div>
              </div>
              <div className="detail-field">
                <label>DISC. DATE</label>
                <div className="field-value">{billData.discDate || '-'}</div>
              </div>
              <div className="detail-field">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '8px' }}>
                  <input type="checkbox" disabled checked={billData.paymentHold} />
                  <label style={{ margin: 0, fontSize: '13px' }}>PAYMENT HOLD</label>
                </div>
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
                <div className="field-value">{billData.purchaseType || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Interface - Same structure as EnterBills */}
        <div className="detail-tabs" style={{ marginTop: '2rem' }}>
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'expenses' ? 'active' : ''}`} onClick={() => setActiveTab('expenses')}>Expenses</button>
            <button className={`tab-btn ${activeTab === 'items' ? 'active' : ''}`} onClick={() => setActiveTab('items')}>Items</button>
            <button className={`tab-btn ${activeTab === 'billing' ? 'active' : ''}`} onClick={() => setActiveTab('billing')}>Billing</button>
            <button className={`tab-btn ${activeTab === 'relationships' ? 'active' : ''}`} onClick={() => setActiveTab('relationships')}>Relationships</button>
            <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>Communication</button>
            <button className={`tab-btn ${activeTab === 'related' ? 'active' : ''}`} onClick={() => setActiveTab('related')}>Related Records</button>
            <button className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`} onClick={() => setActiveTab('system')}>System Information</button>
            <button className={`tab-btn ${activeTab === 'glimpact' ? 'active' : ''}`} onClick={() => setActiveTab('glimpact')}>GL Impact</button>
            <button className={`tab-btn ${activeTab === 'supplier' ? 'active' : ''}`} onClick={() => setActiveTab('supplier')}>Supplier Received Items</button>
          </div>

          {/* Expenses Tab */}
          {activeTab === 'expenses' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <h2 className="section-title">
                <i className="fas fa-receipt"></i>
                Expenses
              </h2>
              <div style={{ marginBottom: '1rem', fontSize: '14px', fontWeight: '600' }}>0.00</div>
              
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
                      <th style={{ minWidth: '100px' }}>HISTORY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {billData.expenses.length === 0 ? (
                      <tr>
                        <td colSpan="15" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
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
                          <td>{expense.customer || '-'}</td>
                          <td>{expense.project || '-'}</td>
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

          {/* Items Tab */}
          {activeTab === 'items' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <h2 className="section-title">
                <i className="fas fa-box"></i>
                Items
              </h2>
              <div style={{ marginBottom: '1rem', fontSize: '14px', fontWeight: '600' }}>213.50</div>
              
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
                      <th style={{ minWidth: '100px' }}>HISTORY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {billData.items.length === 0 ? (
                      <tr>
                        <td colSpan="20" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                          No records to show.
                        </td>
                      </tr>
                    ) : (
                      billData.items.map((item) => (
                        <tr key={item.id}>
                          <td>{item.item}</td>
                          <td>{item.description}</td>
                          <td>{item.vendorName}</td>
                          <td style={{ textAlign: 'center' }}>{item.quantity}</td>
                          <td>{item.units}</td>
                          <td style={{ textAlign: 'right' }}>{item.rate.toFixed(2)}</td>
                          <td style={{ textAlign: 'right' }}>{item.amount.toFixed(2)}</td>
                          <td>{item.taxCode}</td>
                          <td style={{ textAlign: 'center' }}>{item.taxRate}</td>
                          <td style={{ textAlign: 'right' }}>{item.grossAmt.toFixed(2)}</td>
                          <td style={{ textAlign: 'right' }}>{item.taxAmt.toFixed(2)}</td>
                          <td>{item.options}</td>
                          <td>{item.department}</td>
                          <td>{item.class}</td>
                          <td>{item.location}</td>
                          <td>{item.customer}</td>
                          <td>{item.project}</td>
                          <td style={{ textAlign: 'center' }}>{item.billable ? '✓' : '-'}</td>
                          <td>{item.receipts}</td>
                          <td style={{ textAlign: 'center', color: '#4a90e2', cursor: 'pointer' }}>History</td>
                        </tr>
                      ))
                    )}
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
                      <div className="field-value">-</div>
                    </div>
                    <div className="detail-field">
                      <label>INCOTERM</label>
                      <div className="field-value">-</div>
                    </div>
                    <div className="detail-field">
                      <label>VENDOR SELECT</label>
                      <div className="field-value">- Custom -</div>
                    </div>
                    <div className="detail-field">
                      <label>VENDOR</label>
                      <div className="field-value">100 Sungei Tengah Road Singapore 698994 <span style={{ color: '#4a90e2', cursor: 'pointer' }}>Map</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Relationships Tab */}
          {activeTab === 'relationships' && (
            <div className="tab-content">
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Contacts ()
                </h3>
                <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                  <table className="items-table" style={{ width: '100%', fontSize: '0.75rem' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '8px 6px' }}>CONTACT #</th>
                        <th style={{ padding: '8px 6px' }}>JOB TITLE</th>
                        <th style={{ padding: '8px 6px' }}>EMAIL</th>
                        <th style={{ padding: '8px 6px' }}>MAIN PHONE</th>
                        <th style={{ padding: '8px 6px' }}>SUBSIDIARY #</th>
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

          {/* Communication Tab */}
          {activeTab === 'communication' && (
            <div className="tab-content">
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Printing
                </h3>
                <div className="form-group" style={{ maxWidth: '400px' }}>
                  <label className="form-label">TO BE PRINTED</label>
                  <input type="checkbox" checked readOnly style={{ marginLeft: '0.5rem' }} />
                </div>
              </div>

              <div className="form-section" style={{ marginTop: '2rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Events ()
                </h3>
                <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                  <table className="items-table" style={{ width: '100%', fontSize: '0.75rem' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '8px 6px' }}>TITLE #</th>
                        <th style={{ padding: '8px 6px' }}>LOCATION</th>
                        <th style={{ padding: '8px 6px' }}>DATE #</th>
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
            </div>
          )}

          {/* Related Records Tab */}
          {activeTab === 'related' && (
            <div className="tab-content">
              {/* Payments */}
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Payments (0)
                </h3>
                <div style={{ marginBottom: '1rem', fontSize: '13px', fontWeight: '600' }}>Print</div>
                <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                  <table className="items-table" style={{ width: '100%', fontSize: '0.75rem' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '8px 6px' }}>DATE</th>
                        <th style={{ padding: '8px 6px' }}>TYPE</th>
                        <th style={{ padding: '8px 6px' }}>NUMBER</th>
                        <th style={{ padding: '8px 6px' }}>STATUS</th>
                        <th style={{ padding: '8px 6px' }}>AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="5" style={{ textAlign: 'center', padding: '1rem', color: '#999' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Purchase Orders */}
              <div className="form-section" style={{ marginTop: '2rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Purchase Orders (1)
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
                        <td style={{ padding: '8px 6px' }}>5/5/2025</td>
                        <td style={{ padding: '8px 6px', color: '#4a90e2', cursor: 'pointer' }}>POTOMSV00124</td>
                        <td style={{ padding: '8px 6px', textAlign: 'right' }}>231.63</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Reimbursements */}
              <div className="form-section" style={{ marginTop: '2rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Reimbursements (0)
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

              {/* Transformations */}
              <div className="form-section" style={{ marginTop: '2rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Transformations (0)
                </h3>
                <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                  <table className="items-table" style={{ width: '100%', fontSize: '0.75rem' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '8px 6px' }}>DATE</th>
                        <th style={{ padding: '8px 6px' }}>TYPE</th>
                        <th style={{ padding: '8px 6px' }}>NUMBER</th>
                        <th style={{ padding: '8px 6px' }}>AMOUNT</th>
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
            </div>
          )}

          {/* System Information Tab */}
          {activeTab === 'system' && (
            <div className="tab-content">
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  System Notes ()
                </h3>
                <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                  <table className="items-table" style={{ width: '100%', fontSize: '0.75rem' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '8px 6px' }}>DATE *</th>
                        <th style={{ padding: '8px 6px' }}>SET BY</th>
                        <th style={{ padding: '8px 6px' }}>CONTEXT</th>
                        <th style={{ padding: '8px 6px' }}>TYPE</th>
                        <th style={{ padding: '8px 6px' }}>FIELD</th>
                        <th style={{ padding: '8px 6px' }}>OLD VALUE</th>
                        <th style={{ padding: '8px 6px' }}>NEW VALUE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>13/5/2025 11:54 am</td>
                        <td style={{ padding: '8px 6px' }}>TOM-Maha</td>
                        <td style={{ padding: '8px 6px' }}>UI</td>
                        <td style={{ padding: '8px 6px' }}>Set</td>
                        <td style={{ padding: '8px 6px' }}>Posting Period</td>
                        <td style={{ padding: '8px 6px' }}></td>
                        <td style={{ padding: '8px 6px' }}>May 2025</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>13/5/2025 11:54 am</td>
                        <td style={{ padding: '8px 6px' }}>TOM-Maha</td>
                        <td style={{ padding: '8px 6px' }}>UI</td>
                        <td style={{ padding: '8px 6px' }}>Change</td>
                        <td style={{ padding: '8px 6px' }}>Approval Status</td>
                        <td style={{ padding: '8px 6px' }}>Pending Approval</td>
                        <td style={{ padding: '8px 6px' }}>Approved</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>13/5/2025 11:54 am</td>
                        <td style={{ padding: '8px 6px' }}>TOM-Maha</td>
                        <td style={{ padding: '8px 6px' }}>UI</td>
                        <td style={{ padding: '8px 6px' }}>Change</td>
                        <td style={{ padding: '8px 6px' }}>Document Status</td>
                        <td style={{ padding: '8px 6px' }}>Pending Approval</td>
                        <td style={{ padding: '8px 6px' }}>Open</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>13/5/2025 11:54 am</td>
                        <td style={{ padding: '8px 6px' }}>TOM-Maha</td>
                        <td style={{ padding: '8px 6px' }}>UI</td>
                        <td style={{ padding: '8px 6px' }}>Change</td>
                        <td style={{ padding: '8px 6px' }}>Impact</td>
                        <td style={{ padding: '8px 6px', color: '#4a90e2', cursor: 'pointer' }}>View</td>
                        <td style={{ padding: '8px 6px', color: '#4a90e2', cursor: 'pointer' }}>View</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>12/5/2025 6:12 pm</td>
                        <td style={{ padding: '8px 6px' }}>TOM-KARTHIGAI SELVI</td>
                        <td style={{ padding: '8px 6px' }}>UI</td>
                        <td style={{ padding: '8px 6px' }}>Change</td>
                        <td style={{ padding: '8px 6px' }}>Approval Status</td>
                        <td style={{ padding: '8px 6px' }}>Submit For Approval</td>
                        <td style={{ padding: '8px 6px' }}>Pending Approval</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>12/5/2025 6:12 pm</td>
                        <td style={{ padding: '8px 6px' }}>TOM-KARTHIGAI SELVI</td>
                        <td style={{ padding: '8px 6px' }}>UI</td>
                        <td style={{ padding: '8px 6px' }}>Set</td>
                        <td style={{ padding: '8px 6px' }}>Vendor</td>
                        <td style={{ padding: '8px 6px' }}></td>
                        <td style={{ padding: '8px 6px' }}>BROTHERS GLOVE MERCHANT</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>12/5/2025 6:12 pm</td>
                        <td style={{ padding: '8px 6px' }}>TOM-KARTHIGAI SELVI</td>
                        <td style={{ padding: '8px 6px' }}>UI</td>
                        <td style={{ padding: '8px 6px' }}>Set</td>
                        <td style={{ padding: '8px 6px' }}>Account</td>
                        <td style={{ padding: '8px 6px' }}></td>
                        <td style={{ padding: '8px 6px' }}>Trade Creditors</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>12/5/2025 6:12 pm</td>
                        <td style={{ padding: '8px 6px' }}>TOM-KARTHIGAI SELVI</td>
                        <td style={{ padding: '8px 6px' }}>UI</td>
                        <td style={{ padding: '8px 6px' }}>Set</td>
                        <td style={{ padding: '8px 6px' }}>Amount</td>
                        <td style={{ padding: '8px 6px' }}></td>
                        <td style={{ padding: '8px 6px' }}>231.63</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>12/5/2025 6:12 pm</td>
                        <td style={{ padding: '8px 6px' }}>TOM-KARTHIGAI SELVI</td>
                        <td style={{ padding: '8px 6px' }}>UI</td>
                        <td style={{ padding: '8px 6px' }}>Set</td>
                        <td style={{ padding: '8px 6px' }}>Subsidiary</td>
                        <td style={{ padding: '8px 6px' }}></td>
                        <td style={{ padding: '8px 6px' }}>Tech Offshore Marine (SV) Pte Ltd</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>12/5/2025 6:12 pm</td>
                        <td style={{ padding: '8px 6px' }}>TOM-KARTHIGAI SELVI</td>
                        <td style={{ padding: '8px 6px' }}>UI</td>
                        <td style={{ padding: '8px 6px' }}>Set</td>
                        <td style={{ padding: '8px 6px' }}>Memo</td>
                        <td style={{ padding: '8px 6px' }}></td>
                        <td style={{ padding: '8px 6px' }}>PO created from PR-# PR22TOMSV00119</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>12/5/2025 6:12 pm</td>
                        <td style={{ padding: '8px 6px' }}>TOM-KARTHIGAI SELVI</td>
                        <td style={{ padding: '8px 6px' }}>UI</td>
                        <td style={{ padding: '8px 6px' }}>Set</td>
                        <td style={{ padding: '8px 6px' }}>Reference No.</td>
                        <td style={{ padding: '8px 6px' }}></td>
                        <td style={{ padding: '8px 6px' }}>28119</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>12/5/2025 6:12 pm</td>
                        <td style={{ padding: '8px 6px' }}>TOM-KARTHIGAI SELVI</td>
                        <td style={{ padding: '8px 6px' }}>UI</td>
                        <td style={{ padding: '8px 6px' }}>Set</td>
                        <td style={{ padding: '8px 6px' }}>Vendor</td>
                        <td style={{ padding: '8px 6px' }}></td>
                        <td style={{ padding: '8px 6px' }}>100 Sungei Tengah Road Singapore 698994</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* GL Impact Tab */}
          {activeTab === 'glimpact' && (
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
                        <td style={{ padding: '8px 6px', color: '#4a90e2', cursor: 'pointer' }}>20010 Accounts Payable : Trade Creditors</td>
                        <td style={{ padding: '8px 6px' }}></td>
                        <td style={{ padding: '8px 6px', textAlign: 'right' }}>S$231.63</td>
                        <td style={{ padding: '8px 6px' }}>Yes</td>
                        <td style={{ padding: '8px 6px' }}>PO created from PR-# PR22TOMSV00119</td>
                        <td style={{ padding: '8px 6px' }}>BROTHERS GLOVE MERCHANT</td>
                        <td style={{ padding: '8px 6px' }}>Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (SV) Pte Ltd</td>
                        <td style={{ padding: '8px 6px' }}>Shipyard : Megayard</td>
                        <td style={{ padding: '8px 6px' }}></td>
                        <td style={{ padding: '8px 6px' }}></td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 6px', color: '#4a90e2', cursor: 'pointer' }}>50500 Cost Of Sales : Consumables</td>
                        <td style={{ padding: '8px 6px', textAlign: 'right' }}>S$212.50</td>
                        <td style={{ padding: '8px 6px' }}></td>
                        <td style={{ padding: '8px 6px' }}>Yes</td>
                        <td style={{ padding: '8px 6px' }}>Impact Gloves Size : L 948-0008 Seafrium (SG) Pte. Ltd. : 5009-110036 P-82 EPC for NEW BUILD FPSO</td>
                        <td style={{ padding: '8px 6px' }}>BROTHERS GLOVE MERCHANT</td>
                        <td style={{ padding: '8px 6px' }}>Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (SV) Pte Ltd</td>
                        <td style={{ padding: '8px 6px' }}>Shipyard : Megayard</td>
                        <td style={{ padding: '8px 6px' }}>Shipyard : Sembawang</td>
                        <td style={{ padding: '8px 6px' }}></td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 6px', color: '#4a90e2', cursor: 'pointer' }}>13100 GST on Purchases SG</td>
                        <td style={{ padding: '8px 6px', textAlign: 'right' }}>S$19.13</td>
                        <td style={{ padding: '8px 6px' }}></td>
                        <td style={{ padding: '8px 6px' }}>Yes</td>
                        <td style={{ padding: '8px 6px' }}>VAT</td>
                        <td style={{ padding: '8px 6px' }}>Default Tax Agency SG : Default Tax Agency SG (10 - Tech Offshore Marine (SV) Pte Ltd) (20210830-062746)</td>
                        <td style={{ padding: '8px 6px' }}>Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (SV) Pte Ltd</td>
                        <td style={{ padding: '8px 6px' }}>Shipyard : Megayard</td>
                        <td style={{ padding: '8px 6px' }}>Shipyard : Sembawang</td>
                        <td style={{ padding: '8px 6px' }}></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Supplier Received Items Tab */}
          {activeTab === 'supplier' && (
            <div className="tab-content">
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                  <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
                  Received Items ()
                </h3>
                <div style={{ marginBottom: '1rem', textAlign: 'right', color: '#666', fontSize: '0.75rem' }}>
                  1 to 25 of 160
                </div>
                <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                  <table className="items-table" style={{ width: '100%', fontSize: '0.75rem' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '8px 6px' }}>ITEM *</th>
                        <th style={{ padding: '8px 6px' }}>COUNT OF QUANTITY</th>
                        <th style={{ padding: '8px 6px' }}>MEMO</th>
                        <th style={{ padding: '8px 6px' }}>SUM OF AMOUNT (FOREIGN CURRENCY)</th>
                        <th style={{ padding: '8px 6px' }}>NAME</th>
                        <th style={{ padding: '8px 6px' }}>DOCUMENT NUMBER</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>Cotton Gloves</td>
                        <td style={{ padding: '8px 6px', textAlign: 'center' }}>1</td>
                        <td style={{ padding: '8px 6px' }}>COTTON GLOVES</td>
                        <td style={{ padding: '8px 6px', textAlign: 'right' }}>650.00</td>
                        <td style={{ padding: '8px 6px' }}>BROTHERS GLOVE MERCHANT</td>
                        <td style={{ padding: '8px 6px' }}>POTOM01875</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>Cotton Gloves</td>
                        <td style={{ padding: '8px 6px', textAlign: 'center' }}>1</td>
                        <td style={{ padding: '8px 6px' }}>Cotton Gloves</td>
                        <td style={{ padding: '8px 6px', textAlign: 'right' }}>260.00</td>
                        <td style={{ padding: '8px 6px' }}>BROTHERS GLOVE MERCHANT</td>
                        <td style={{ padding: '8px 6px' }}>POTOM01347</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>Cotton Gloves</td>
                        <td style={{ padding: '8px 6px', textAlign: 'center' }}>1</td>
                        <td style={{ padding: '8px 6px' }}>Hand Gloves (EN388 4543)</td>
                        <td style={{ padding: '8px 6px', textAlign: 'right' }}>150.00</td>
                        <td style={{ padding: '8px 6px' }}>BROTHERS GLOVE MERCHANT</td>
                        <td style={{ padding: '8px 6px' }}>POTOM05370</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>Cotton Gloves</td>
                        <td style={{ padding: '8px 6px', textAlign: 'center' }}>1</td>
                        <td style={{ padding: '8px 6px' }}>Hand Gloves (EN388 4543)</td>
                        <td style={{ padding: '8px 6px', textAlign: 'right' }}>300.00</td>
                        <td style={{ padding: '8px 6px' }}>BROTHERS GLOVE MERCHANT</td>
                        <td style={{ padding: '8px 6px' }}>POTOM05806</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>Cotton Gloves</td>
                        <td style={{ padding: '8px 6px', textAlign: 'center' }}>1</td>
                        <td style={{ padding: '8px 6px' }}>Cotton Gloves</td>
                        <td style={{ padding: '8px 6px', textAlign: 'right' }}>780.00</td>
                        <td style={{ padding: '8px 6px' }}>BROTHERS GLOVE MERCHANT</td>
                        <td style={{ padding: '8px 6px' }}>POTOM05873</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>Cotton Gloves</td>
                        <td style={{ padding: '8px 6px', textAlign: 'center' }}>1</td>
                        <td style={{ padding: '8px 6px' }}>COTTON GLOVES</td>
                        <td style={{ padding: '8px 6px', textAlign: 'right' }}>520.00</td>
                        <td style={{ padding: '8px 6px' }}>BROTHERS GLOVE MERCHANT</td>
                        <td style={{ padding: '8px 6px' }}>POTOM02841</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>Cotton Gloves</td>
                        <td style={{ padding: '8px 6px', textAlign: 'center' }}>1</td>
                        <td style={{ padding: '8px 6px' }}>750 Cotton gloves</td>
                        <td style={{ padding: '8px 6px', textAlign: 'right' }}>520.00</td>
                        <td style={{ padding: '8px 6px' }}>BROTHERS GLOVE MERCHANT</td>
                        <td style={{ padding: '8px 6px' }}>POTOM02533</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>Cotton Gloves</td>
                        <td style={{ padding: '8px 6px', textAlign: 'center' }}>1</td>
                        <td style={{ padding: '8px 6px' }}>Cotton Gloves</td>
                        <td style={{ padding: '8px 6px', textAlign: 'right' }}>3120.00</td>
                        <td style={{ padding: '8px 6px' }}>BROTHERS GLOVE MERCHANT</td>
                        <td style={{ padding: '8px 6px' }}>POTOM06844</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px 6px' }}>Cotton Gloves</td>
                        <td style={{ padding: '8px 6px', textAlign: 'center' }}>1</td>
                        <td style={{ padding: '8px 6px' }}>Hand Gloves ( EN388 4843)</td>
                        <td style={{ padding: '8px 6px', textAlign: 'right' }}>750.00</td>
                        <td style={{ padding: '8px 6px' }}>BROTHERS GLOVE MERCHANT</td>
                        <td style={{ padding: '8px 6px' }}>POTOM07334</td>
                      </tr>
                    </tbody>
                  </table>
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

export default ViewBillPaymentDetail;
