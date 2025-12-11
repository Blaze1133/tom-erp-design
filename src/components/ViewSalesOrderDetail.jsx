import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewSalesOrderDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('items');

  const orderData = {
    documentNumber: 'S2100067',
    title: '20-0131 Gimi Ms Corporation : 20-0131-Gimi-Fabrication of Cargo Tank Vapour Line (Budgetary)-W',
    statusBadge: 'PENDING BILLING',
    orderNumber: 'S2100067',
    date: '26/11/2020',
    status: 'Pending Approval',
    customer: '20-0131 Gimi Ms Corporation',
    project: '20-0131-Gimi-Fabrication of Cargo Tank Vapour Line (Budgetary)-W',
    startDate: '',
    endDate: '',
    poNumber: '',
    memo: 'Project No : 20-0131',
    salesRep: '',
    opportunity: '',
    salesEffectiveDate: '26/11/2020',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    class: 'Piping',
    location: '',
    department: 'MEP',
    forInvoiceGrouping: false,
    approvalStatus: 'Submit For Approval',
    contactPerson: '',
    items: [
      {
        id: 1,
        item: 'Fabrication',
        committed: 1,
        fulfilled: 0,
        invoiced: 0,
        backOrdered: 0,
        quantity: 1,
        units: '',
        description: 'Fabrication of Stainless Steel Piping of Cargo Tank Vapour Line',
        priceLevel: 'Custom',
        rate: 168000.00,
        amount: 168000.00,
        taxRate: '0.0%'
      }
    ],
    subtotal: 168000.00,
    discountItem: '',
    taxTotal: 0.00,
    total: 168000.00
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('edit-sales-order');
    }
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-sales-orders');
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-shopping-cart"></i>
          <div>
            <h1>Sales Order</h1>
            <div className="detail-subtitle">
              <span className="doc-number">{orderData.documentNumber}</span>
              <span style={{ fontSize: '0.9rem' }}>{orderData.title}</span>
              <span className="status-badge" style={{ background: '#ff9800', color: 'white', padding: '4px 12px', borderRadius: '4px' }}>
                {orderData.statusBadge}
              </span>
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
          <i className="fas fa-truck"></i>
          Fulfill
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-file-invoice"></i>
          Bill Remaining
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-times-circle"></i>
          Close Order
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
                <label>ORDER #</label>
                <div className="field-value">{orderData.orderNumber}</div>
              </div>
              <div className="detail-field">
                <label>DATE</label>
                <div className="field-value">{orderData.date}</div>
              </div>
              <div className="detail-field">
                <label>STATUS</label>
                <div className="field-value">{orderData.status || 'Pending Approval'}</div>
              </div>
              <div className="detail-field">
                <label>CUSTOMER</label>
                <div className="field-value">{orderData.customer || '-'}</div>
              </div>
              <div className="detail-field">
                <label>PROJECT</label>
                <div className="field-value">{orderData.project || '-'}</div>
              </div>
              <div className="detail-field">
                <label>START DATE</label>
                <div className="field-value">{orderData.startDate || '-'}</div>
              </div>
              <div className="detail-field">
                <label>END DATE</label>
                <div className="field-value">{orderData.endDate || '-'}</div>
              </div>
              <div className="detail-field">
                <label>PO #</label>
                <div className="field-value">{orderData.poNumber || '-'}</div>
              </div>
              <div className="detail-field">
                <label>MEMO</label>
                <div className="field-value">{orderData.memo}</div>
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
                <div className="field-value">{orderData.salesRep || '-'}</div>
              </div>
              <div className="detail-field">
                <label>SALES EFFECTIVE DATE</label>
                <div className="field-value">{orderData.salesEffectiveDate}</div>
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
                <div className="field-value">{orderData.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>CLASS</label>
                <div className="field-value">{orderData.class}</div>
              </div>
              <div className="detail-field">
                <label>LOCATION</label>
                <div className="field-value">{orderData.location || '-'}</div>
              </div>
              <div className="detail-field">
                <label>DEPARTMENT</label>
                <div className="field-value">{orderData.department}</div>
              </div>
              <div className="detail-field">
                <label>FOR INVOICE GROUPING</label>
                <div className="field-value">
                  <input type="checkbox" checked={orderData.forInvoiceGrouping} disabled />
                </div>
              </div>
              <div className="detail-field">
                <label>APPROVAL STATUS</label>
                <div className="field-value">{orderData.approvalStatus}</div>
              </div>
              <div className="detail-field">
                <label>CONTACT PERSON</label>
                <div className="field-value">{orderData.contactPerson || '-'}</div>
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
                <div className="form-grid" style={{ marginBottom: '20px' }}>
                  <div className="detail-field">
                    <label>DISCOUNT ITEM</label>
                    <div className="field-value">{orderData.discountItem || '-'}</div>
                  </div>
                  <div className="detail-field">
                    <label>RATE</label>
                    <div className="field-value">-</div>
                  </div>
                </div>
                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>ITEM</th>
                        <th>COMMITTED</th>
                        <th>FULFILLED</th>
                        <th>INVOICED</th>
                        <th>BACK ORDERED</th>
                        <th>QUANTITY</th>
                        <th>UNITS</th>
                        <th>DESCRIPTION</th>
                        <th>PRICE LEVEL</th>
                        <th>RATE</th>
                        <th>AMOUNT</th>
                        <th>TAX RATE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderData.items.map((item) => (
                        <tr key={item.id}>
                          <td>{item.item}</td>
                          <td>{item.committed}</td>
                          <td>{item.fulfilled}</td>
                          <td>{item.invoiced}</td>
                          <td>{item.backOrdered}</td>
                          <td>{item.quantity}</td>
                          <td>{item.units || '-'}</td>
                          <td>{item.description}</td>
                          <td>{item.priceLevel}</td>
                          <td>{item.rate.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                          <td>{item.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                          <td>{item.taxRate}</td>
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
                    <label>SHIP DATE</label>
                    <div className="field-value">-</div>
                  </div>
                  <div className="detail-field">
                    <label>SHIPPING CARRIER</label>
                    <div className="field-value">-</div>
                  </div>
                  <div className="detail-field">
                    <label>SHIPPING METHOD</label>
                    <div className="field-value">-</div>
                  </div>
                  <div className="detail-field">
                    <label>SHIP COMPLETE</label>
                    <div className="field-value"><input type="checkbox" disabled /></div>
                  </div>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Shipping Address</h4>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>SHIP TO</label>
                    <div className="field-value">-</div>
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
                    <div className="field-value">-</div>
                  </div>
                  <div className="detail-field">
                    <label>BILLING SCHEDULE</label>
                    <div className="field-value">-</div>
                  </div>
                  <div className="detail-field">
                    <label>REF BANK PRINT</label>
                    <div className="field-value">-</div>
                  </div>
                  <div className="detail-field">
                    <label>PAYMENT PERIOD</label>
                    <div className="field-value">-</div>
                  </div>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Billing Address</h4>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>BILL TO</label>
                    <div className="field-value">-</div>
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
                    <label>CURRENCY</label>
                    <div className="field-value">SGD</div>
                  </div>
                  <div className="detail-field">
                    <label>EXCHANGE RATE</label>
                    <div className="field-value">1.00</div>
                  </div>
                  <div className="detail-field">
                    <label>EST. EXTENDED COST</label>
                    <div className="field-value">0.00</div>
                  </div>
                  <div className="detail-field">
                    <label>EST. GROSS PROFIT</label>
                    <div className="field-value">0.00</div>
                  </div>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Tax Information</h4>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>TAX ID</label>
                    <div className="field-value">-</div>
                  </div>
                  <div className="detail-field">
                    <label>EST. GROSS PROFIT PERCENT</label>
                    <div className="field-value">-</div>
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
                    <div className="field-value"><input type="checkbox" disabled /></div>
                  </div>
                  <div className="detail-field">
                    <label>TO BE EMAILED</label>
                    <div className="field-value"><input type="checkbox" disabled /></div>
                  </div>
                  <div className="detail-field">
                    <label>TO BE FAXED</label>
                    <div className="field-value"><input type="checkbox" disabled /></div>
                  </div>
                  <div className="detail-field">
                    <label>SELECT MESSAGE</label>
                    <div className="field-value">-</div>
                  </div>
                  <div className="detail-field" style={{ gridColumn: '1 / -1' }}>
                    <label>CUSTOMER MESSAGE</label>
                    <div className="field-value">-</div>
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
                    <label>REF CUSTOMER</label>
                    <div className="field-value">-</div>
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
                    <div className="field-value">-</div>
                  </div>
                  <div className="detail-field">
                    <label>GST TYPE</label>
                    <div className="field-value">-</div>
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
                <div className="summary-value">${orderData.subtotal.toFixed(2)}</div>
              </div>
              <div className="summary-card">
                <div className="summary-title">TAX AMOUNT</div>
                <div className="summary-value">${orderData.taxTotal.toFixed(2)}</div>
              </div>
              <div className="summary-card">
                <div className="summary-title">DISCOUNT</div>
                <div className="summary-value">$0.00</div>
              </div>
              <div className="summary-card" style={{ background: '#f8f9fa' }}>
                <div className="summary-title">TOTAL AMOUNT</div>
                <div className="summary-value" style={{ color: '#4a90e2' }}>${orderData.total.toFixed(2)}</div>
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

export default ViewSalesOrderDetail;
