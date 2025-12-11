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
          <button className="btn-save" onClick={handleEdit}>
            Save
          </button>
          <button className="btn-cancel" onClick={handleBack}>
            Cancel
          </button>
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
          </div>
          <div className="tabs-content">
            {/* Items Tab */}
            {activeTab === 'items' && (
              <div className="form-section" style={{ padding: '1.5rem' }}>
                <h2 className="section-title">
                  <i className="fas fa-boxes"></i>
                  Items
                </h2>
                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th style={{minWidth: '150px'}}>ITEM</th>
                        <th style={{minWidth: '400px'}}>DESCRIPTION</th>
                        <th style={{minWidth: '80px'}}>QUANTITY</th>
                        <th style={{minWidth: '100px'}}>UNITS</th>
                        <th style={{minWidth: '100px'}}>COMMITTED</th>
                        <th style={{minWidth: '100px'}}>FULFILLED</th>
                        <th style={{minWidth: '100px'}}>INVOICED</th>
                        <th style={{minWidth: '120px'}}>BACK ORDERED</th>
                        <th style={{minWidth: '120px'}}>PRICE LEVEL</th>
                        <th style={{minWidth: '100px'}}>RATE</th>
                        <th style={{minWidth: '100px'}}>AMOUNT</th>
                        <th style={{minWidth: '100px'}}>TAX RATE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderData.items.map((item) => (
                        <tr key={item.id}>
                          <td style={{minWidth: '150px'}}>{item.item}</td>
                          <td style={{minWidth: '400px', whiteSpace: 'pre-wrap'}}>{item.description}</td>
                          <td style={{minWidth: '80px', textAlign: 'center'}}>{item.quantity}</td>
                          <td style={{minWidth: '100px'}}>{item.units || '-'}</td>
                          <td style={{minWidth: '100px', textAlign: 'center'}}>{item.committed}</td>
                          <td style={{minWidth: '100px', textAlign: 'center'}}>{item.fulfilled}</td>
                          <td style={{minWidth: '100px', textAlign: 'center'}}>{item.invoiced}</td>
                          <td style={{minWidth: '120px', textAlign: 'center'}}>{item.backOrdered}</td>
                          <td style={{minWidth: '120px'}}>{item.priceLevel}</td>
                          <td style={{minWidth: '100px', textAlign: 'right'}}>{item.rate.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                          <td style={{minWidth: '100px', textAlign: 'right'}}>{item.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                          <td style={{minWidth: '100px'}}>{item.taxRate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Summary Grid */}
                <div className="summary-grid">
                  <div className="summary-card">
                    <div className="summary-title">SUBTOTAL</div>
                    <div className="summary-value">$168,000.00</div>
                  </div>
                  <div className="summary-card">
                    <div className="summary-title">TAX AMOUNT</div>
                    <div className="summary-value">$0.00</div>
                  </div>
                  <div className="summary-card">
                    <div className="summary-title">DISCOUNT</div>
                    <div className="summary-value">$0.00</div>
                  </div>
                  <div className="summary-card" style={{ background: 'var(--gray-ultralight)' }}>
                    <div className="summary-title">TOTAL AMOUNT</div>
                    <div className="summary-value" style={{ color: 'var(--red-primary)' }}>$168,000.00</div>
                  </div>
                </div>
              </div>
            )}

            {/* Shipping Tab */}
            {activeTab === 'shipping' && (
              <div className="tab-content" style={{ padding: '1.5rem', background: '#fafafa' }}>
                {/* Shipping Information Section */}
                <div className="detail-section" style={{ marginBottom: '1rem' }}>
                  <div className="section-header" style={{ background: '#f5f5f5', padding: '0.75rem 1rem', borderRadius: '4px' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.75rem' }}></i>
                    <h3 style={{ display: 'inline', fontSize: '0.9rem', fontWeight: '600', color: '#555' }}>Shipping Information</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem', background: '#fff', borderRadius: '0 0 4px 4px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#666', marginBottom: '0.35rem', textTransform: 'uppercase' }}>Ship Date</label>
                        <div className="field-value" style={{ fontSize: '0.875rem' }}>-</div>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#666', marginBottom: '0.35rem', textTransform: 'uppercase' }}>Shipping Carrier</label>
                        <div className="field-value" style={{ fontSize: '0.875rem' }}>-</div>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#666', marginBottom: '0.35rem', textTransform: 'uppercase' }}>Shipping Method</label>
                        <div className="field-value" style={{ fontSize: '0.875rem' }}>-</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                      <input type="checkbox" disabled style={{ width: '14px', height: '14px', marginRight: '0.4rem' }} />
                      <label style={{ fontWeight: '500', fontSize: '0.8rem', margin: 0 }}>SHIP COMPLETE</label>
                    </div>
                  </div>
                </div>

                {/* Shipping Address Section */}
                <div className="detail-section">
                  <div className="section-header" style={{ background: '#f5f5f5', padding: '0.75rem 1rem', borderRadius: '4px' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.75rem' }}></i>
                    <h3 style={{ display: 'inline', fontSize: '0.9rem', fontWeight: '600', color: '#555' }}>Shipping Address</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem', background: '#fff', borderRadius: '0 0 4px 4px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#666', marginBottom: '0.35rem', textTransform: 'uppercase' }}>Ship To</label>
                      <div className="field-value" style={{ fontSize: '0.875rem' }}>-</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div className="tab-content" style={{ padding: '1.5rem', background: '#fafafa' }}>
                <div className="detail-section" style={{ marginBottom: '1rem' }}>
                  <div className="section-header" style={{ background: '#f5f5f5', padding: '0.75rem 1rem', borderRadius: '4px' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.75rem' }}></i>
                    <h3 style={{ display: 'inline', fontSize: '0.9rem', fontWeight: '600', color: '#555' }}>Billing Information</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem', background: '#fff', borderRadius: '0 0 4px 4px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#666', marginBottom: '0.35rem', textTransform: 'uppercase' }}>Terms</label>
                        <div className="field-value" style={{ fontSize: '0.875rem' }}>-</div>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#666', marginBottom: '0.35rem', textTransform: 'uppercase' }}>Billing Schedule</label>
                        <div className="field-value" style={{ fontSize: '0.875rem' }}>-</div>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#666', marginBottom: '0.35rem', textTransform: 'uppercase' }}>Ref Bank Print</label>
                        <div className="field-value" style={{ fontSize: '0.875rem' }}>-</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="detail-section">
                  <div className="section-header" style={{ background: '#f5f5f5', padding: '0.75rem 1rem', borderRadius: '4px' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.75rem' }}></i>
                    <h3 style={{ display: 'inline', fontSize: '0.9rem', fontWeight: '600', color: '#555' }}>Billing Address</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem', background: '#fff', borderRadius: '0 0 4px 4px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#666', marginBottom: '0.35rem', textTransform: 'uppercase' }}>Bill To</label>
                      <div className="field-value" style={{ fontSize: '0.875rem' }}>-</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Accounting Tab */}
            {activeTab === 'accounting' && (
              <div className="tab-content" style={{ padding: '1.5rem', background: '#fafafa' }}>
                <div className="detail-section" style={{ marginBottom: '1rem' }}>
                  <div className="section-header" style={{ background: '#f5f5f5', padding: '0.75rem 1rem', borderRadius: '4px' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.75rem' }}></i>
                    <h3 style={{ display: 'inline', fontSize: '0.9rem', fontWeight: '600', color: '#555' }}>Account Information</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem', background: '#fff', borderRadius: '0 0 4px 4px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#666', marginBottom: '0.35rem', textTransform: 'uppercase' }}>Currency</label>
                        <div className="field-value" style={{ fontSize: '0.875rem' }}>SGD</div>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#666', marginBottom: '0.35rem', textTransform: 'uppercase' }}>Exchange Rate</label>
                        <div className="field-value" style={{ fontSize: '0.875rem' }}>1.00</div>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#666', marginBottom: '0.35rem', textTransform: 'uppercase' }}>Est. Extended Cost</label>
                        <div className="field-value" style={{ fontSize: '0.875rem' }}>0.00</div>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#666', marginBottom: '0.35rem', textTransform: 'uppercase' }}>Est. Gross Profit</label>
                        <div className="field-value" style={{ fontSize: '0.875rem' }}>0.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="detail-section">
                  <div className="section-header" style={{ background: '#f5f5f5', padding: '0.75rem 1rem', borderRadius: '4px' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.75rem' }}></i>
                    <h3 style={{ display: 'inline', fontSize: '0.9rem', fontWeight: '600', color: '#555' }}>Tax Information</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem', background: '#fff', borderRadius: '0 0 4px 4px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#666', marginBottom: '0.35rem', textTransform: 'uppercase' }}>Tax ID</label>
                        <div className="field-value" style={{ fontSize: '0.875rem' }}>-</div>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#666', marginBottom: '0.35rem', textTransform: 'uppercase' }}>Est. Gross Profit Percent</label>
                        <div className="field-value" style={{ fontSize: '0.875rem' }}>-</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Relationships Tab */}
            {activeTab === 'relationships' && (
              <div className="form-section" style={{ padding: '1.5rem' }}>
                <h2 className="section-title">
                  <i className="fas fa-users"></i>
                  Contacts
                </h2>
                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th style={{minWidth: '200px'}}>CONTACT</th>
                        <th style={{minWidth: '150px'}}>JOB TITLE</th>
                        <th style={{minWidth: '200px'}}>EMAIL</th>
                        <th style={{minWidth: '150px'}}>MAIN PHONE</th>
                        <th style={{minWidth: '200px'}}>SUBSIDIARY</th>
                        <th style={{minWidth: '150px'}}>ROLE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="6" style={{ textAlign: 'center', padding: '1.5rem', color: '#888', fontSize: '0.875rem' }}>No contacts added</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Communication Tab */}
            {activeTab === 'communication' && (
              <div className="tab-content" style={{ padding: '1.5rem', background: '#fafafa' }}>
                <div className="detail-section">
                  <div className="section-header" style={{ background: '#f5f5f5', padding: '0.75rem 1rem', borderRadius: '4px' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.75rem' }}></i>
                    <h3 style={{ display: 'inline', fontSize: '0.9rem', fontWeight: '600', color: '#555' }}>Messages</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem', background: '#fff', borderRadius: '0 0 4px 4px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#666', marginBottom: '0.35rem', textTransform: 'uppercase' }}>To Be Printed</label>
                        <div className="field-value" style={{ fontSize: '0.875rem' }}><input type="checkbox" disabled /></div>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#666', marginBottom: '0.35rem', textTransform: 'uppercase' }}>To Be Emailed</label>
                        <div className="field-value" style={{ fontSize: '0.875rem' }}><input type="checkbox" disabled /></div>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#666', marginBottom: '0.35rem', textTransform: 'uppercase' }}>To Be Faxed</label>
                        <div className="field-value" style={{ fontSize: '0.875rem' }}><input type="checkbox" disabled /></div>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#666', marginBottom: '0.35rem', textTransform: 'uppercase' }}>Select Message</label>
                        <div className="field-value" style={{ fontSize: '0.875rem' }}>-</div>
                      </div>
                      <div style={{ gridColumn: '1 / -1' }}>
                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#666', marginBottom: '0.35rem', textTransform: 'uppercase' }}>Customer Message</label>
                        <div className="field-value" style={{ fontSize: '0.875rem' }}>-</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* System Information Tab */}
            {activeTab === 'system' && (
              <div className="tab-content" style={{ padding: '1.5rem', background: '#fafafa' }}>
                <div className="detail-section">
                  <div className="section-header" style={{ background: '#f5f5f5', padding: '0.75rem 1rem', borderRadius: '4px' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.75rem' }}></i>
                    <h3 style={{ display: 'inline', fontSize: '0.9rem', fontWeight: '600', color: '#555' }}>System Information</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem', background: '#fff', borderRadius: '0 0 4px 4px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '500', color: '#666', marginBottom: '0.35rem', textTransform: 'uppercase' }}>Ref Customer</label>
                        <div className="field-value" style={{ fontSize: '0.875rem' }}>-</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
    </div>
  );
};

export default ViewSalesOrderDetail;
