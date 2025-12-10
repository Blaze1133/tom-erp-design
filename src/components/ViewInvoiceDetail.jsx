import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewInvoiceDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('items');

  const invoiceData = {
    documentNumber: 'INV-2024-001',
    title: 'Pacific Shipping Ltd : Marine Equipment Supply - Q1 2024',
    statusBadge: 'PAID IN FULL',
    customForm: 'TOM Service Invoice',
    invoiceNumber: 'INV-2024-001',
    postingPeriod: 'Jan 2024',
    customerProject: 'Pacific Shipping Ltd : Marine Equipment Supply - Q1 2024',
    dueDate: '14/02/2024',
    date: '15/01/2024',
    poNumber: 'PSL-PO-2024-001',
    startDate: '01/01/2024',
    memo: 'Project No: PSL-2024-001',
    endDate: '31/03/2024',
    contactPerson: 'John Smith',
    salesRep: 'Sarah Chen',
    salesEffectiveDate: '15/01/2024',
    opportunity: 'Q1 Marine Project',
    createdFrom: 'Sales Order #SO-2024-001',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    class: 'Marine Engineering',
    location: 'Singapore Yard',
    department: 'MEP',
    countryOfOrigin: 'Singapore',
    hsCode: '8901.10',
    forInvoiceGrouping: false,
    items: [
      {
        id: 1,
        item: 'Marine Equipment',
        backOrdered: 0,
        unbilled: 0,
        quantity: 5,
        units: 'Units',
        description: 'High-grade marine equipment for offshore operations',
        priceLevel: 'Standard',
        rate: 8500.00,
        amount: 42500.00,
        taxCode: 'GST_SG-9%',
        grossAmount: 46325.00,
        class: 'Marine Engineering',
        costEstimateType: 'Fixed',
        estimatedExtendedCost: 35000.00
      }
    ],
    subtotal: 42500.00,
    taxTotal: 3825.00,
    total: 46325.00,
    
    // Additional fields
    shippingCarrier: 'UPS',
    shippingAddress: 'Pacific Shipping Ltd\n123 Marina Bay\nSingapore 018956',
    terms: 'Net 30',
    billingAddress: 'Pacific Shipping Ltd\n123 Marina Bay\nSingapore 018956',
    refBankPrint: 'TOM(S) DBS BANK SGD',
    account: '10100 Accounts Receivable : Trade Debtors',
    exchangeRate: '1.00',
    currency: 'SGD',
    toBePrinted: true,
    toBeEmailed: true,
    toBeFaxed: false,
    selectMessage: 'Thank you for your business.',
    customerMessage: 'Thank you for your business. Payment is due within 30 days.',
    amountInWords: 'Forty Six Thousand Three Hundred Twenty Five and 00/100 CENT(S) ONLY',
    refCustomer: '',
    invoiceType: 'Invoice',
    testTransactionField: '',
    gstType: '0'
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('edit-invoice');
    }
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-invoices');
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-invoice"></i>
          <div>
            <h1>Invoice</h1>
            <div className="detail-subtitle">
              <span>I22TOMDQ00001</span>
              <span>{invoiceData.customerProject || '18-0317 Sdk Consortium'}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-action">
            <i className="fas fa-arrow-right"></i>
          </button>
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
          <i className="fas fa-print"></i>
          Print
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-envelope"></i>
          Email
        </button>
        <div className="toolbar-dropdown">
          <button className="btn-toolbar">
            Actions
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      </div>

      <div className="detail-content">
        {/* Primary Information */}
        <div className="detail-section">
          <div className="section-header" onClick={(e) => e.currentTarget.parentElement.classList.toggle('collapsed')}>
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>INVOICE #</label>
                <div className="field-value">I22TOMDQ00001</div>
              </div>
              <div className="detail-field">
                <label>PO NUMBER</label>
                <div className="field-value">{invoiceData.poNumber || '-'}</div>
              </div>
              <div className="detail-field">
                <label>POSTING PERIOD</label>
                <div className="field-value">Nov 2025</div>
              </div>
              <div className="detail-field">
                <label>DATE</label>
                <div className="field-value">{invoiceData.date || '-'}</div>
              </div>
              <div className="detail-field">
                <label>DUE DATE</label>
                <div className="field-value">{invoiceData.dueDate || '-'}</div>
              </div>
              <div className="detail-field">
                <label>CUSTOMER</label>
                <div className="field-value">18-0317 Sdk Consortium</div>
              </div>
              <div className="detail-field">
                <label>PROJECT</label>
                <div className="field-value">-</div>
              </div>
              <div className="detail-field">
                <label>START DATE</label>
                <div className="field-value">{invoiceData.startDate || '-'}</div>
              </div>
              <div className="detail-field">
                <label>END DATE</label>
                <div className="field-value">-</div>
              </div>
              <div className="detail-field">
                <label>CONTACT PERSON</label>
                <div className="field-value">-</div>
              </div>
              <div className="detail-field">
                <label>MEMO</label>
                <div className="field-value">{invoiceData.memo || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sales Information */}
        <div className="detail-section">
          <div className="section-header" onClick={(e) => e.currentTarget.parentElement.classList.toggle('collapsed')}>
            <i className="fas fa-chevron-down"></i>
            <h3>Sales Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SALES REP</label>
                <div className="field-value">{invoiceData.salesRep || '-'}</div>
              </div>
              <div className="detail-field">
                <label>SALES EFFECTIVE DATE</label>
                <div className="field-value">{invoiceData.salesEffectiveDate || '-'}</div>
              </div>
              <div className="detail-field">
                <label>CREATED FROM</label>
                <div className="field-value">Sales Order #S2200871</div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className="detail-section">
          <div className="section-header" onClick={(e) => e.currentTarget.parentElement.classList.toggle('collapsed')}>
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{invoiceData.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>CLASS</label>
                <div className="field-value">{invoiceData.class}</div>
              </div>
              <div className="detail-field">
                <label>LOCATION</label>
                <div className="field-value">{invoiceData.location}</div>
              </div>
              <div className="detail-field">
                <label>DEPARTMENT</label>
                <div className="field-value">{invoiceData.department}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'items' ? 'active' : ''}`} onClick={() => setActiveTab('items')}>Items</button>
            <button className={`tab-btn ${activeTab === 'shipping' ? 'active' : ''}`} onClick={() => setActiveTab('shipping')}>Shipping</button>
            <button className={`tab-btn ${activeTab === 'billing' ? 'active' : ''}`} onClick={() => setActiveTab('billing')}>Billing</button>
            <button className={`tab-btn ${activeTab === 'accounting' ? 'active' : ''}`} onClick={() => setActiveTab('accounting')}>Accounting</button>
            <button className={`tab-btn ${activeTab === 'relationships' ? 'active' : ''}`} onClick={() => setActiveTab('relationships')}>Relationships</button>
            <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>Communication</button>
            <button className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`} onClick={() => setActiveTab('system')}>System Information</button>
            <button className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`} onClick={() => setActiveTab('custom')}>Custom</button>
          </div>
          <div className="tabs-content">
            {/* Items Tab */}
            {activeTab === 'items' && (
              <>
                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>ITEM</th>
                        <th>BACK ORDERED</th>
                        <th>UNBILLED</th>
                        <th>QUANTITY</th>
                        <th>UNITS</th>
                        <th>DESCRIPTION</th>
                        <th>PRICE LEVEL</th>
                        <th>RATE</th>
                        <th>AMOUNT</th>
                        <th>TAX CODE</th>
                        <th>GROSS AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoiceData.items.map((item) => (
                        <tr key={item.id}>
                          <td>{item.item}</td>
                          <td>{item.backOrdered}</td>
                          <td>{item.unbilled}</td>
                          <td>{item.quantity}</td>
                          <td>{item.units}</td>
                          <td>{item.description}</td>
                          <td>{item.priceLevel}</td>
                          <td>{item.rate.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                          <td>{item.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                          <td>{item.taxCode}</td>
                          <td>{item.grossAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {/* Shipping Tab */}
            {activeTab === 'shipping' && (
              <div>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>SHIPPING CARRIER</label>
                    <div className="field-value">{invoiceData.shippingCarrier || '-'}</div>
                  </div>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Shipping Address</h4>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>SHIP TO</label>
                    <div className="field-value" style={{ whiteSpace: 'pre-line' }}>{invoiceData.shippingAddress || '-'}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>TERMS</label>
                    <div className="field-value">{invoiceData.terms || '-'}</div>
                  </div>
                  <div className="detail-field">
                    <label>REF BANK PRINT</label>
                    <div className="field-value">{invoiceData.refBankPrint || '-'}</div>
                  </div>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Billing Address</h4>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>BILL TO</label>
                    <div className="field-value" style={{ whiteSpace: 'pre-line' }}>{invoiceData.billingAddress || '-'}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Accounting Tab */}
            {activeTab === 'accounting' && (
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Account Information</h4>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>ACCOUNT</label>
                    <div className="field-value">{invoiceData.account}</div>
                  </div>
                  <div className="detail-field">
                    <label>EXCHANGE RATE</label>
                    <div className="field-value">{invoiceData.exchangeRate}</div>
                  </div>
                  <div className="detail-field">
                    <label>CURRENCY</label>
                    <div className="field-value">{invoiceData.currency}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Relationships Tab */}
            {activeTab === 'relationships' && (
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Contacts</h4>
                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>CONTACT</th>
                        <th>JOB TITLE</th>
                        <th>EMAIL</th>
                        <th>MAIN PHONE</th>
                        <th>SUBSIDIARY</th>
                        <th>ROLE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>No contacts added</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Communication Tab */}
            {activeTab === 'communication' && (
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Messages</h4>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>TO BE PRINTED</label>
                    <div className="field-value"><input type="checkbox" checked={invoiceData.toBePrinted} disabled /></div>
                  </div>
                  <div className="detail-field">
                    <label>TO BE EMAILED</label>
                    <div className="field-value"><input type="checkbox" checked={invoiceData.toBeEmailed} disabled /></div>
                  </div>
                  <div className="detail-field">
                    <label>TO BE FAXED</label>
                    <div className="field-value"><input type="checkbox" checked={invoiceData.toBeFaxed} disabled /></div>
                  </div>
                  <div className="detail-field">
                    <label>SELECT MESSAGE</label>
                    <div className="field-value">{invoiceData.selectMessage || '-'}</div>
                  </div>
                  <div className="detail-field" style={{ gridColumn: '1 / -1' }}>
                    <label>CUSTOMER MESSAGE</label>
                    <div className="field-value">{invoiceData.customerMessage || '-'}</div>
                  </div>
                </div>
              </div>
            )}

            {/* System Information Tab */}
            {activeTab === 'system' && (
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>System Information</h4>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>AMOUNT IN WORDS</label>
                    <div className="field-value">{invoiceData.amountInWords}</div>
                  </div>
                  <div className="detail-field">
                    <label>INVOICE TYPE</label>
                    <div className="field-value">{invoiceData.invoiceType}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Custom Tab */}
            {activeTab === 'custom' && (
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Custom Fields</h4>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>TEST TRANSACTION FIELD</label>
                    <div className="field-value">{invoiceData.testTransactionField || '-'}</div>
                  </div>
                  <div className="detail-field">
                    <label>GST TYPE</label>
                    <div className="field-value">{invoiceData.gstType}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Summary Grid - After Items Table */}
        <div className="detail-section">
          <div className="section-header">
            <h3>Summary</h3>
          </div>
          <div className="section-body">
            <div className="summary-grid">
              <div className="summary-card">
                <div className="summary-title">SUBTOTAL</div>
                <div className="summary-value">${invoiceData.subtotal.toFixed(2)}</div>
              </div>
              <div className="summary-card">
                <div className="summary-title">TAX AMOUNT</div>
                <div className="summary-value">${invoiceData.taxTotal.toFixed(2)}</div>
              </div>
              <div className="summary-card">
                <div className="summary-title">DISCOUNT</div>
                <div className="summary-value">$0.00</div>
              </div>
              <div className="summary-card" style={{ background: '#f8f9fa' }}>
                <div className="summary-title">TOTAL AMOUNT</div>
                <div className="summary-value" style={{ color: '#4a90e2' }}>${invoiceData.total.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-footer-actions">
          <button className="btn-toolbar-primary" onClick={handleEdit}>
            <i className="fas fa-edit"></i>
            Edit
          </button>
          <button className="btn-toolbar" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
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

export default ViewInvoiceDetail;
