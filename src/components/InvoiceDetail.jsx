import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const InvoiceDetail = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('items');

  const invoiceData = {
    status: 'To Be Generated',
    customForm: 'TOM Service Invoice',
    invoiceNumber: 'To Be Generated',
    postingPeriod: 'Nov 2025',
    customerProject: '18-0317 Sdk Consortium : WHC-MEP',
    dueDate: '',
    date: '6/11/2025',
    poNumber: 'SDK/TOM/LOA/00065',
    startDate: '',
    memo: '',
    endDate: '',
    contactPerson: '',
    salesRep: 'MEP057 Mahendran S/O Minisamy',
    salesEffectiveDate: '',
    opportunity: '',
    createdFrom: 'Sales Order #S2200871',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    class: '',
    location: '',
    department: 'MEP',
    countryOfOrigin: '',
    hsCode: '',
    forInvoiceGrouping: false,
    discountItem: '',
    rate: '',
    items: [
      {
        id: 1,
        item: 'Retention-Customer',
        backOrdered: '',
        unbilled: '',
        quantity: '',
        units: '',
        description: '',
        priceLevel: 'Base Price',
        rate: 0.00,
        amount: 472505.00,
        taxCode: 'GST_SG:9%',
        grossAmount: 515030.45,
        class: '',
        costEstimateType: 'Fixed',
        estimatedExtendedCost: 0.00
      }
    ],
    itemsTotal: 472505.00,
    billableItems: 0.00,
    billableExpenses: 0.00,
    billableTime: 0.00,
    subtotal: 472505.00,
    discountItemValue: 0.00,
    taxTotal: 42525.45,
    total: 515030.45,
    
    // Shipping Information
    shippingCarrier: '',
    shippingAddress: '',
    
    // Billing Information
    terms: '',
    billingAddress: '',
    refBankPrint: '',
    
    // Accounting
    account: '10100 Accounts Receivable : Trade Debtors',
    exchangeRate: '1.00',
    currency: 'SGD',
    
    // Communication
    toBePrinted: false,
    toBeEmailed: false,
    toBeFaxed: false,
    selectMessage: '',
    customerMessage: '',
    
    // System Information
    amountInWords: '',
    refCustomer: '',
    invoiceType: 'Invoice',
    
    // Custom
    testTransactionField: '',
    gstType: '0'
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleSave = () => {
    showToast('Invoice saved successfully!', 'success');
  };

  const handleCancel = () => {
    showToast('Invoice cancelled', 'info');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Invoice</h1>
          <span style={{ marginLeft: '15px', fontSize: '0.9rem', color: '#666', fontWeight: 'normal' }}>{invoiceData.status}</span>
        </div>
        <div className="page-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-secondary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save Draft
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-check"></i>
            Submit
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-info-circle"></i>
            Primary Information
          </h2>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label required">Custom Form</label>
              <select className="form-control" value={invoiceData.customForm}>
                <option>TOM Service Invoice</option>
                <option>Standard Invoice</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label required">Posting Period</label>
              <select className="form-control" value={invoiceData.postingPeriod}>
                <option>Nov 2025</option>
                <option>Dec 2025</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Invoice #</label>
              <input 
                type="text" 
                className="form-control"
                value={invoiceData.invoiceNumber}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">Due Date</label>
              <input 
                type="date" 
                className="form-control"
                value={invoiceData.dueDate}
              />
            </div>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label className="form-label required">Customer:Project</label>
              <select className="form-control" value={invoiceData.customerProject}>
                <option>18-0317 Sdk Consortium : WHC-MEP</option>
                <option>20-0131 Gimi Ms Corporation</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label required">Date</label>
              <input 
                type="date" 
                className="form-control"
                value={invoiceData.date}
              />
            </div>
            <div className="form-group">
              <label className="form-label">PO #</label>
              <input 
                type="text" 
                className="form-control"
                value={invoiceData.poNumber}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Start Date</label>
              <input 
                type="date" 
                className="form-control"
                value={invoiceData.startDate}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Memo</label>
              <input 
                type="text" 
                className="form-control"
                value={invoiceData.memo}
              />
            </div>
            <div className="form-group">
              <label className="form-label">End Date</label>
              <input 
                type="date" 
                className="form-control"
                value={invoiceData.endDate}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Contact Person</label>
              <select className="form-control" value={invoiceData.contactPerson}>
                <option value="">Select...</option>
              </select>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Sales Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-chart-line"></i>
            Sales Information
          </h2>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Sales Rep</label>
              <select className="form-control" value={invoiceData.salesRep}>
                <option>MEP057 Mahendran S/O Minisamy</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Sales Effective Date</label>
              <input 
                type="date" 
                className="form-control"
                value={invoiceData.salesEffectiveDate}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Opportunity</label>
              <select className="form-control" value={invoiceData.opportunity}>
                <option value="">Select...</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Created From</label>
              <div className="field-value" style={{ padding: '8px', background: '#f5f5f5', borderRadius: '4px' }}>
                {invoiceData.createdFrom}
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Classification */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-tags"></i>
            Classification
          </h2>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Subsidiary</label>
              <select className="form-control" value={invoiceData.subsidiary}>
                <option>Tech Onshore MEP Prefabricators Pte Ltd.</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Class</label>
              <select className="form-control" value={invoiceData.class}>
                <option value="">Select...</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Location</label>
              <select className="form-control" value={invoiceData.location}>
                <option value="">Select...</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label required">Department</label>
              <select className="form-control" value={invoiceData.department}>
                <option>MEP</option>
                <option>Engineering</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Country of Origin</label>
              <input 
                type="text" 
                className="form-control"
                value={invoiceData.countryOfOrigin}
                placeholder="Enter country of origin"
              />
            </div>
            <div className="form-group">
              <label className="form-label">HS Code</label>
              <input 
                type="text" 
                className="form-control"
                value={invoiceData.hsCode}
                placeholder="Enter HS code"
              />
            </div>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input 
                  type="checkbox" 
                  checked={invoiceData.forInvoiceGrouping}
                />
                For Invoice Grouping
              </label>
            </div>
          </div>
        </div>

        {/* Tabbed Interface */}
        <div className="detail-tabs" style={{ marginTop: '2rem' }}>
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
              <div className="form-section">
                <h2 className="section-title">
                  <i className="fas fa-boxes"></i>
                  Items
                </h2>
                
                <button className="add-item-btn" style={{ marginBottom: '15px' }}>
                  <i className="fas fa-plus"></i>
                  Add Item
                </button>

          <div className="items-table-wrapper">
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th style={{width: '8%'}}>ITEM</th>
                  <th style={{width: '6%'}}>BACK ORDERED</th>
                  <th style={{width: '6%'}}>UNBILLED</th>
                  <th style={{width: '5%'}}>QTY</th>
                  <th style={{width: '5%'}}>UNITS</th>
                  <th style={{width: '10%'}}>DESC</th>
                  <th style={{width: '7%'}}>PRICE LEVEL</th>
                  <th style={{width: '6%'}}>RATE</th>
                  <th style={{width: '6%'}}>AMT</th>
                  <th style={{width: '7%'}}>TAX CODE</th>
                  <th style={{width: '7%'}}>GROSS AMT</th>
                  <th style={{width: '8%'}}>CLASS</th>
                  <th style={{width: '9%'}}>COST ESTIMATE TYPE</th>
                  <th style={{width: '10%'}}>EST. EXTENDED COST</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.items.map((item) => (
                  <tr key={item.id}>
                    <td><input type="text" className="table-input" defaultValue={item.item} style={{width: '100%'}} /></td>
                    <td><input type="number" className="table-input" defaultValue={item.backOrdered} style={{width: '100%'}} /></td>
                    <td><input type="number" className="table-input" defaultValue={item.unbilled} style={{width: '100%'}} /></td>
                    <td><input type="number" className="table-input" defaultValue={item.quantity} style={{width: '100%'}} /></td>
                    <td><input type="text" className="table-input" defaultValue={item.units} style={{width: '100%'}} /></td>
                    <td><input type="text" className="table-input" defaultValue={item.description} style={{width: '100%'}} /></td>
                    <td><input type="text" className="table-input" defaultValue={item.priceLevel} style={{width: '100%'}} /></td>
                    <td><input type="number" className="table-input" defaultValue={item.rate} style={{width: '100%'}} /></td>
                    <td><input type="number" className="table-input" defaultValue={item.amount} style={{width: '100%'}} /></td>
                    <td><input type="text" className="table-input" defaultValue={item.taxCode} style={{width: '100%'}} /></td>
                    <td><input type="number" className="table-input" defaultValue={item.grossAmount} style={{width: '100%'}} /></td>
                    <td>
                      <select className="table-input" defaultValue={item.class} style={{width: '100%'}}>
                        <option value="">Select...</option>
                        <option>Consumable Item</option>
                        <option>Course</option>
                        <option>Cutting Works</option>
                        <option>Electrical</option>
                        <option>Fabrication</option>
                        <option>Hydrotesting</option>
                        <option>Installation work</option>
                        <option>Manpower Supply</option>
                        <option>Material Supply</option>
                        <option>Module /Prefab</option>
                        <option>Piping</option>
                        <option>Project Works</option>
                        <option>Refurbishment works</option>
                        <option>Rental</option>
                        <option>Repair & Referable</option>
                        <option>Sale of Scrap Metal</option>
                        <option>Structure</option>
                      </select>
                    </td>
                    <td>
                      <select className="table-input" defaultValue={item.costEstimateType} style={{width: '100%'}}>
                        <option>Fixed</option>
                        <option>Variable</option>
                        <option>Estimated</option>
                      </select>
                    </td>
                    <td><input type="number" className="table-input" defaultValue={item.estimatedExtendedCost} style={{width: '100%'}} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Grid */}
          <div className="summary-grid">
            <div className="summary-card">
              <div className="summary-title">SUBTOTAL</div>
              <div className="summary-value">${invoiceData.subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
            </div>
            <div className="summary-card">
              <div className="summary-title">TAX AMOUNT</div>
              <div className="summary-value">${invoiceData.taxTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
            </div>
            <div className="summary-card">
              <div className="summary-title">DISCOUNT</div>
              <div className="summary-value">$0.00</div>
            </div>
            <div className="summary-card" style={{ background: 'var(--gray-ultralight)' }}>
              <div className="summary-title">TOTAL AMOUNT</div>
              <div className="summary-value" style={{ color: 'var(--red-primary)' }}>${invoiceData.total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
            </div>
          </div>
              </div>
            )}

            {/* Shipping Tab - Same as CreateInvoice */}
            {activeTab === 'shipping' && (
              <div className="form-section">
                <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '600px' }}>
                  <div className="form-group">
                    <label className="form-label">SHIPPING CARRIER</label>
                    <select className="form-control" value={invoiceData.shippingCarrier}><option value="">Select...</option><option>UPS</option><option>More</option></select>
                  </div>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Shipping Address</h4>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '600px' }}>
                  <div className="form-group">
                    <label className="form-label">SHIP TO SELECT</label>
                    <select className="form-control"><option value="">- Custom -</option></select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">SHIP TO</label>
                    <textarea className="form-control" rows="4" value={invoiceData.shippingAddress} placeholder="Enter shipping address" />
                  </div>
                  <div><a href="#" style={{ color: '#4a90e2', fontSize: '0.875rem', textDecoration: 'none' }}>🗺 Map</a></div>
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div className="form-section">
                <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '600px' }}>
                  <div className="form-group">
                    <label className="form-label">TERMS</label>
                    <select className="form-control" value={invoiceData.terms}><option value="">Select...</option><option>Net 30</option></select>
                  </div>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Billing Address</h4>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '600px' }}>
                  <div className="form-group">
                    <label className="form-label">BILL TO SELECT</label>
                    <select className="form-control"><option value="">- New -</option><option>- Custom -</option><option>Gimi MS Corporation</option></select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">BILL TO</label>
                    <textarea className="form-control" rows="4" value={invoiceData.billingAddress} placeholder="Enter billing address" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">REF BANK PRINT</label>
                    <select className="form-control" value={invoiceData.refBankPrint}><option value="">- New -</option><option>Tech Electric & Automation Pte Ltd,(DBS)</option><option>Tech Marine Offshore(s) DBS</option><option>Tech Offshore Marine (DQ) -DBS</option><option>Tech Offshore Marine (s)(DBS)</option><option>TOM MEP OCBC</option><option>TOM(S) DBS BANK SGD</option></select>
                  </div>
                  <div><a href="#" style={{ color: '#4a90e2', fontSize: '0.875rem', textDecoration: 'none' }}>🗺 Map</a></div>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Payment Mode</h4>
                <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '4px' }}>
                  <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0' }}>All Payment Mode by Giro to Tech Onshore MEP-Prefabricators Pte. Ltd.<br />A/c DBS Bank A/C No.: 003-906132-3, Swift Code: DBSSSGSG</p>
                </div>
              </div>
            )}

            {/* Accounting Tab */}
            {activeTab === 'accounting' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Account Information</h3>
                <div className="form-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                  <div className="form-group">
                    <label className="form-label">ACCOUNT</label>
                    <select className="form-control" value={invoiceData.account}><option>- New -</option><option>10100 Accounts Receivable : Trade Debtors</option><option>10200 Accounts Receivable : Contract Assets Debtor</option><option>10400 Accounts Receivable : Intercompany Debtors</option><option>10700 Accounts Receivable : Other Account Receivables</option><option>10900 Accounts Receivable : Other Debtor</option></select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">EXCHANGE RATE <span className="required">*</span></label>
                    <input type="text" className="form-control" value={invoiceData.exchangeRate} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">CURRENCY</label>
                    <input type="text" className="form-control" value={invoiceData.currency} readOnly style={{ backgroundColor: '#f5f5f5' }} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">EST. EXTENDED COST</label>
                    <input type="text" className="form-control" value="0.00" readOnly style={{ backgroundColor: '#f5f5f5' }} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">EST. GROSS PROFIT</label>
                    <input type="text" className="form-control" value="SGD 0.00" readOnly style={{ backgroundColor: '#f5f5f5' }} />
                  </div>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Tax Information</h3>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                  <div className="form-group">
                    <label className="form-label">TAX ID</label>
                    <input type="text" className="form-control" placeholder="Enter tax ID" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">EST. GROSS PROFIT PERCENT</label>
                    <input type="text" className="form-control" value="97.80%" readOnly style={{ backgroundColor: '#f5f5f5' }} />
                  </div>
                </div>
              </div>
            )}

            {/* Relationships Tab */}
            {activeTab === 'relationships' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Contacts</h3>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Remove all</button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Clear All Lines</button>
                </div>
                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th style={{width: '25%'}}>CONTACT <span className="required">*</span></th>
                        <th style={{width: '20%'}}>JOB TITLE</th>
                        <th style={{width: '20%'}}>EMAIL</th>
                        <th style={{width: '15%'}}>MAIN PHONE</th>
                        <th style={{width: '15%'}}>SUBSIDIARY <span className="required">*</span></th>
                        <th style={{width: '5%'}}>ROLE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><input type="text" className="table-input" placeholder="Type to search" style={{width: '100%'}} /></td>
                        <td><input type="text" className="table-input" style={{width: '100%'}} /></td>
                        <td><input type="text" className="table-input" style={{width: '100%'}} /></td>
                        <td><input type="text" className="table-input" style={{width: '100%'}} /></td>
                        <td><input type="text" className="table-input" style={{width: '100%'}} /></td>
                        <td><input type="text" className="table-input" style={{width: '100%'}} /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-primary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}><i className="fas fa-check"></i> Add</button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}><i className="fas fa-times"></i> Cancel</button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Insert</button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Remove</button>
                </div>
              </div>
            )}

            {/* Communication Tab */}
            {activeTab === 'communication' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Messages <span className="required">*</span></h3>
                <div style={{ borderBottom: '2px solid #e0e0e0', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0' }}>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: '#fff', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.875rem', cursor: 'pointer' }}>Events</button>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.875rem', cursor: 'pointer' }}>Tasks</button>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.875rem', cursor: 'pointer' }}>Phone Calls</button>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.875rem', cursor: 'pointer' }}>Files</button>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', fontSize: '0.875rem', cursor: 'pointer' }}>User Notes</button>
                  </div>
                </div>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <div className="form-group">
                      <label className="form-label">TO BE PRINTED</label>
                      <input type="checkbox" checked={invoiceData.toBePrinted} style={{ width: '18px', height: '18px' }} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">TO BE EMAILED</label>
                      <input type="checkbox" checked={invoiceData.toBeEmailed} style={{ width: '18px', height: '18px' }} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">TO BE FAXED</label>
                      <input type="checkbox" checked={invoiceData.toBeFaxed} style={{ width: '18px', height: '18px' }} />
                    </div>
                  </div>
                  <div>
                    <div className="form-group">
                      <label className="form-label">SELECT MESSAGE</label>
                      <select className="form-control" value={invoiceData.selectMessage}><option value=""></option><option>All work is complete!</option><option>It's been a pleasure working with you!</option><option>Please remit to above address.</option><option>Thank you for your business.</option><option>We appreciate your prompt payment.</option></select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">CUSTOMER MESSAGE</label>
                      <textarea className="form-control" rows="6" value={invoiceData.customerMessage} placeholder="Enter customer message" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* System Information Tab */}
            {activeTab === 'system' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>System Information</h3>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '600px' }}>
                  <div className="form-group">
                    <label className="form-label">AMOUNT IN WORDS</label>
                    <input type="text" className="form-control" value={invoiceData.amountInWords} placeholder="and .CENT(S) ONLY" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">REF CUSTOMER</label>
                    <div style={{ position: 'relative' }}>
                      <input type="text" className="form-control" value={invoiceData.refCustomer} placeholder="< Type then tab >" />
                      <div style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: '0.25rem' }}>
                        <button style={{ background: 'none', border: 'none', padding: '0.25rem', cursor: 'pointer', fontSize: '0.875rem' }}>📋 List</button>
                        <button style={{ background: 'none', border: 'none', padding: '0.25rem', cursor: 'pointer', fontSize: '0.875rem' }}>🔍 Search</button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">INVOICE TYPE</label>
                    <select className="form-control" value={invoiceData.invoiceType}><option>- New -</option><option>Invoice</option><option>Debit Note</option></select>
                  </div>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Active Workflows •</h4>
                <p style={{ fontSize: '0.875rem', color: '#666' }}>No active workflows</p>
              </div>
            )}

            {/* Custom Tab */}
            {activeTab === 'custom' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Custom Fields</h3>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '600px' }}>
                  <div className="form-group">
                    <label className="form-label">TEST TRANSACTION FIELD</label>
                    <input type="text" className="form-control" value={invoiceData.testTransactionField} placeholder="Enter test transaction field" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">GST TYPE</label>
                    <input type="text" className="form-control" value={invoiceData.gstType} placeholder="0" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Terms & Conditions */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-file-contract"></i>
            Terms & Conditions
          </h2>
          <textarea 
            className="form-control"
            rows="3"
            placeholder="Enter terms and conditions..."
          />
          
          <div className="footer-actions">
            <button className="btn btn-tertiary" onClick={handleCancel}>
              <i className="fas fa-times"></i>
              Cancel
            </button>
            <div>
              <button className="btn btn-secondary" onClick={handleSave}>
                <i className="fas fa-save"></i>
                Save Draft
              </button>
              <button className="btn btn-primary" onClick={handleSave}>
                <i className="fas fa-check"></i>
                Submit
              </button>
            </div>
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

export default InvoiceDetail;
