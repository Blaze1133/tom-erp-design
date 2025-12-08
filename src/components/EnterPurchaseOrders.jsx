import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EnterPurchaseOrders = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('items');
  
  const [formData, setFormData] = useState({
    customForm: 'TOM Purchase Order',
    vendorNumber: '',
    receiveBy: '',
    vendor: '',
    date: '2025-11-06',
    poType: 'Main',
    poNumber: 'To Be Generated',
    refPoNumber: '',
    otherComments: '',
    approvalStatus: 'Submit For Approval',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    countryOfOrigin: '',
    hsCode: '',
    currency: 'SGD',
    purchaseType: '',
    customCreatedFrom: '',
    exchangeRate: '1.00',
    items: [],
    
    // Shipping Information
    shippingMethod: '',
    shipTo: '',
    shipToSelect: '',
    fob: '',
    
    // Billing Information
    vendor: '',
    vendorSelect: '- Custom -',
    terms: '',
    incoterm: '',
    
    // Accounting
    taxId: '',
    
    // Relationships
    contacts: [],
    
    // Communication
    toBePrinted: false,
    toBeEmailed: false,
    toBeFaxed: false,
    vendorMessage: '',
    
    // System Information
    approvalStatus: 'Pending Approval',
    
    // Custom
    materialType: '',
    testTransactionField: '',
    materialSpecification: '',
    doRecordCreated: false,
    gstType: ''
  });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    showToast('Purchase order saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-purchase-orders');
      }
    }
  };

  const handleAddItem = () => {
    const newItem = {
      id: formData.items.length + 1,
      item: '',
      quantity: 0,
      units: 'Pcs',
      description: '',
      priceLevel: 'Custom',
      rate: 0.00,
      amount: 0.00,
      taxCode: 'GST_SG-9%',
      grossAmount: 0.00,
      project: '',
      class: '',
      department: '',
      location: '',
      costEstimateType: 'Fixed',
      estimatedExtendedCost: 0.00
    };
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };

  // Calculation functions
  const calculateSubtotal = () => {
    return formData.items.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
  };

  const calculateTaxAmount = () => {
    return formData.items.reduce((sum, item) => {
      const amount = parseFloat(item.amount) || 0;
      const taxRate = 9.0; // 9% GST
      return sum + (amount * taxRate / 100);
    }, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTaxAmount();
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <div>
            <h1>Purchase Order</h1>
            <div className="detail-subtitle">
              <span># To be generated – New Purchase Order</span>
            </div>
          </div>
        </div>
        <div className="page-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-secondary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary">
            Auto Fill
          </button>
          <button className="btn btn-secondary">
            Actions
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
              <select 
                className="form-control"
                value={formData.customForm}
                onChange={(e) => handleInputChange('customForm', e.target.value)}
              >
                <option>TOM Purchase Order</option>
                <option>Standard Drop Ship Purchase Order</option>
                <option>Standard Purchase Order</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Receive By</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.receiveBy}
                onChange={(e) => handleInputChange('receiveBy', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Vendor #</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.vendorNumber}
                onChange={(e) => handleInputChange('vendorNumber', e.target.value)}
                placeholder="Enter vendor number"
              />
            </div>
            <div className="form-group">
              <label className="form-label required">Date</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label required">Vendor</label>
              <select 
                className="form-control"
                value={formData.vendor}
                onChange={(e) => handleInputChange('vendor', e.target.value)}
              >
                <option value="">{'<Type then tab>'}</option>
                <option>RAIVY INTERNATIONAL</option>
                <option>SMARTR INTERNATIONAL PTE LTD</option>
                <option>Pacific Marine Supplies</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">PO #</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.poNumber}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">PO Type</label>
              <select 
                className="form-control"
                value={formData.poType}
                onChange={(e) => handleInputChange('poType', e.target.value)}
              >
                <option>Main</option>
                <option>Sub</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Other Comments or Special Instructions</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.otherComments}
                onChange={(e) => handleInputChange('otherComments', e.target.value)}
                placeholder="Enter comments"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Ref PO Number</label>
              <select 
                className="form-control"
                value={formData.refPoNumber}
                onChange={(e) => handleInputChange('refPoNumber', e.target.value)}
              >
                <option value="">{'<Type then tab>'}</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Approval Status</label>
              <select 
                className="form-control"
                value={formData.approvalStatus}
                onChange={(e) => handleInputChange('approvalStatus', e.target.value)}
              >
                <option>Submit For Approval</option>
                <option>Pending Approval</option>
                <option>Approved</option>
              </select>
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
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleInputChange('subsidiary', e.target.value)}
              >
                <option value="">Select...</option>
                <option value="TOM S">Tech Offshore Marine (S) Pte Ltd - "TOM S" (ROC 200709673M)</option>
                <option value="DQ">Tech Offshore Marine (DQ) Pte Ltd - "DQ" (ROC 200704907R)</option>
                <option value="TEA">Tech Electric & Automation Pte Ltd - "TEA" (ROC 198700264M)</option>
                <option value="TMO">Tech Marine Offshore (S) Pte Ltd - "TMO" (ROC 200512260M)</option>
                <option value="SV">Tech Offshore Marine (SV) Pte Ltd - "SV" (ROC 200608955Z)</option>
                <option value="TOM">Tech Onshore MEP Prefabricators Pte Ltd - "TOM" (ROC 199507962E)</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Country of Origin</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.countryOfOrigin}
                onChange={(e) => handleInputChange('countryOfOrigin', e.target.value)}
                placeholder="Enter country of origin"
              />
            </div>
            <div className="form-group">
              <label className="form-label">HS Code</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.hsCode}
                onChange={(e) => handleInputChange('hsCode', e.target.value)}
                placeholder="Enter HS code"
              />
            </div>
            <div className="form-group">
              <label className="form-label required">Currency</label>
              <select 
                className="form-control"
                value={formData.currency}
                onChange={(e) => handleInputChange('currency', e.target.value)}
              >
                <option>SGD</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Purchase Type</label>
              <select 
                className="form-control"
                value={formData.purchaseType}
                onChange={(e) => handleInputChange('purchaseType', e.target.value)}
              >
                <option value="">Select...</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Custom Created From</label>
              <select 
                className="form-control"
                value={formData.customCreatedFrom}
                onChange={(e) => handleInputChange('customCreatedFrom', e.target.value)}
              >
                <option value="">{'<Type & tab for single value>'}</option>
              </select>
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
            <button className={`tab-btn ${activeTab === 'supplier' ? 'active' : ''}`} onClick={() => setActiveTab('supplier')}>Supplier Received Items</button>
          </div>

          <div className="tabs-content">
            {/* Items Tab */}
            {activeTab === 'items' && (
              <div className="form-section">
                <h2 className="section-title">
                  <i className="fas fa-boxes"></i>
                  Items
                </h2>
                
                <button className="add-item-btn" onClick={handleAddItem}>
                  <i className="fas fa-plus"></i>
                  Add Item
                </button>
          {formData.items.length > 0 ? (
            <div className="items-table-wrapper">
              <table className="detail-items-table">
                <thead>
                  <tr>
                    <th style={{width: '6%'}}>ITEM</th>
                    <th style={{width: '5%'}}>QTY</th>
                    <th style={{width: '5%'}}>UNITS</th>
                    <th style={{width: '10%'}}>DESC</th>
                    <th style={{width: '6%'}}>RATE</th>
                    <th style={{width: '6%'}}>AMT</th>
                    <th style={{width: '7%'}}>TAX CODE</th>
                    <th style={{width: '7%'}}>GROSS AMT</th>
                    <th style={{width: '8%'}}>PROJECT</th>
                    <th style={{width: '8%'}}>CLASS</th>
                    <th style={{width: '8%'}}>DEPARTMENT</th>
                    <th style={{width: '8%'}}>LOCATION</th>
                    <th style={{width: '8%'}}>COST ESTIMATE TYPE</th>
                    <th style={{width: '8%'}}>EST. EXTENDED COST</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.items.map((item) => (
                    <tr key={item.id}>
                      <td><input type="text" className="table-input" defaultValue={item.item} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.quantity} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.units} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.description} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.rate} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.amount} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.taxCode} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.grossAmount} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.project} placeholder="Project" style={{width: '100%'}} /></td>
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
                        <select className="table-input" defaultValue={item.department} style={{width: '100%'}}>
                          <option value="">Select...</option>
                          <option>MEP</option>
                          <option>Engineering</option>
                          <option>Operations</option>
                        </select>
                      </td>
                      <td>
                        <select className="table-input" defaultValue={item.location} style={{width: '100%'}}>
                          <option value="">Select...</option>
                          <option>Singapore Yard</option>
                          <option>Johor Facility</option>
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
          ) : (
            <div className="empty-items-message">
              <p>No items added yet. Click "Add Item" to start adding items to this purchase order.</p>
            </div>
          )}

          {/* Summary Grid */}
          {formData.items.length > 0 && (
            <div className="summary-grid">
              <div className="summary-card">
                <div className="summary-title">SUBTOTAL</div>
                <div className="summary-value">${calculateSubtotal().toFixed(2)}</div>
              </div>
              <div className="summary-card">
                <div className="summary-title">TAX AMOUNT</div>
                <div className="summary-value">${calculateTaxAmount().toFixed(2)}</div>
              </div>
              <div className="summary-card">
                <div className="summary-title">DISCOUNT</div>
                <div className="summary-value">$0.00</div>
              </div>
              <div className="summary-card" style={{ background: 'var(--gray-ultralight)' }}>
                <div className="summary-title">TOTAL AMOUNT</div>
                <div className="summary-value" style={{ color: 'var(--red-primary)' }}>${calculateTotal().toFixed(2)}</div>
              </div>
            </div>
          )}
                
                {/* Supporting Documents Section */}
                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />
                <div className="form-section">
                  <h2 className="section-title">
                    <i className="fas fa-file-alt"></i>
                    Supporting Documents
                  </h2>
                  <div style={{ 
                    padding: '2rem', 
                    background: '#fff', 
                    border: '2px dashed #d0d5dd', 
                    borderRadius: '8px',
                    textAlign: 'center',
                    marginTop: '1rem'
                  }}>
                    <i className="fas fa-cloud-upload-alt" style={{ fontSize: '3rem', color: '#98a2b3', marginBottom: '1rem' }}></i>
                    <p style={{ margin: '0 0 0.5rem 0', color: '#344054', fontSize: '0.95rem', fontWeight: '500' }}>
                      No supporting documents attached
                    </p>
                    <p style={{ margin: '0 0 1.5rem 0', color: '#667085', fontSize: '0.875rem' }}>
                      Upload invoices, receipts, or other relevant files (PDF, DOC, XLS, JPG, PNG)
                    </p>
                    <button className="btn btn-primary" style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem' }}>
                      <i className="fas fa-paperclip"></i> Attach Document
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Shipping Tab */}
            {activeTab === 'shipping' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Shipping Information</h3>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '600px' }}>
                  <div className="form-group">
                    <label className="form-label">SHIPPING METHOD</label>
                    <select className="form-control" value={formData.shippingMethod} onChange={(e) => handleInputChange('shippingMethod', e.target.value)}>
                      <option value="">Select...</option>
                      <option>Air Freight</option>
                      <option>Sea Freight</option>
                      <option>Land Transport</option>
                    </select>
                  </div>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Shipping Address</h4>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '600px' }}>
                  <div className="form-group">
                    <label className="form-label">SHIP TO</label>
                    <input type="text" className="form-control" value={formData.shipTo} onChange={(e) => handleInputChange('shipTo', e.target.value)} placeholder="<Type then tab>" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">SHIP TO SELECT</label>
                    <select className="form-control" value={formData.shipToSelect} onChange={(e) => handleInputChange('shipToSelect', e.target.value)}>
                      <option value="">Select...</option>
                      <option>Tech Onshore MEP Prefabricators Pte Ltd.</option>
                      <option>13 Tuas South Street 3</option>
                      <option>Singapore 638031</option>
                      <option>Singapore</option>
                    </select>
                  </div>
                  <div><a href="#" style={{ color: '#4a90e2', fontSize: '0.875rem', textDecoration: 'none' }}>🗺 Map</a></div>
                  <div className="form-group">
                    <label className="form-label">FOB</label>
                    <input type="text" className="form-control" value={formData.fob} onChange={(e) => handleInputChange('fob', e.target.value)} placeholder="Enter FOB" />
                  </div>
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Billing Address</h3>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '600px' }}>
                  <div className="form-group">
                    <label className="form-label">VENDOR SELECT</label>
                    <select className="form-control" value={formData.vendorSelect} onChange={(e) => handleInputChange('vendorSelect', e.target.value)}>
                      <option>- Custom -</option>
                      <option>Vendor Address 1</option>
                      <option>Vendor Address 2</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">VENDOR</label>
                    <textarea className="form-control" rows="4" value={formData.vendor} onChange={(e) => handleInputChange('vendor', e.target.value)} placeholder="Enter vendor address" />
                  </div>
                  <div><a href="#" style={{ color: '#4a90e2', fontSize: '0.875rem', textDecoration: 'none' }}>🗺 Map</a></div>
                  <div className="form-group">
                    <label className="form-label">TERMS</label>
                    <select className="form-control" value={formData.terms} onChange={(e) => handleInputChange('terms', e.target.value)}>
                      <option value="">Select...</option>
                      <option>1% 10 Net 30</option>
                      <option>2% 10 Net 30</option>
                      <option>COD</option>
                      <option>Due on receipt</option>
                      <option>Immediate</option>
                      <option>Net 10</option>
                      <option>Net 15</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">INCOTERM</label>
                    <select className="form-control" value={formData.incoterm} onChange={(e) => handleInputChange('incoterm', e.target.value)}>
                      <option value="">Select...</option>
                      <option>DAP</option>
                      <option>EXW</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Accounting Tab */}
            {activeTab === 'accounting' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Tax Information</h3>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '600px' }}>
                  <div className="form-group">
                    <label className="form-label">TAX ID</label>
                    <input type="text" className="form-control" value={formData.taxId} onChange={(e) => handleInputChange('taxId', e.target.value)} placeholder="Enter tax ID" />
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
                      <input type="checkbox" checked={formData.toBePrinted} onChange={(e) => handleInputChange('toBePrinted', e.target.checked)} style={{ width: '18px', height: '18px' }} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">TO BE E-MAILED</label>
                      <input type="checkbox" checked={formData.toBeEmailed} onChange={(e) => handleInputChange('toBeEmailed', e.target.checked)} style={{ width: '18px', height: '18px' }} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">TO BE FAXED</label>
                      <input type="checkbox" checked={formData.toBeFaxed} onChange={(e) => handleInputChange('toBeFaxed', e.target.checked)} style={{ width: '18px', height: '18px' }} />
                    </div>
                  </div>
                  <div>
                    <div className="form-group">
                      <label className="form-label">VENDOR MESSAGE</label>
                      <textarea className="form-control" rows="6" value={formData.vendorMessage} onChange={(e) => handleInputChange('vendorMessage', e.target.value)} placeholder="Enter vendor message" />
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
                    <label className="form-label">APPROVAL STATUS</label>
                    <select className="form-control" value={formData.approvalStatus} onChange={(e) => handleInputChange('approvalStatus', e.target.value)}>
                      <option>Pending Approval</option>
                      <option>Approved</option>
                      <option>Rejected</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Custom Tab */}
            {activeTab === 'custom' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Custom Fields</h3>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '600px' }}>
                  <div className="form-group">
                    <label className="form-label">MATERIAL TYPE</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem', background: '#f8f9fa', borderRadius: '4px' }}>
                      <input type="text" className="form-control" value={formData.materialType} onChange={(e) => handleInputChange('materialType', e.target.value)} style={{ flex: 1 }} />
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button style={{ padding: '0.5rem 0.75rem', background: '#fff', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer', fontWeight: '600' }}>B</button>
                        <button style={{ padding: '0.5rem 0.75rem', background: '#fff', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer', fontStyle: 'italic' }}>I</button>
                        <button style={{ padding: '0.5rem 0.75rem', background: '#fff', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer', textDecoration: 'underline' }}>U</button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">TEST TRANSACTION FIELD</label>
                    <input type="text" className="form-control" value={formData.testTransactionField} onChange={(e) => handleInputChange('testTransactionField', e.target.value)} placeholder="Enter test transaction field" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">MATERIAL SPECIFICATION</label>
                    <select className="form-control" value={formData.materialSpecification} onChange={(e) => handleInputChange('materialSpecification', e.target.value)}>
                      <option value="">Select...</option>
                      <option>- New -</option>
                      <option>GST BEHALF OF</option>
                      <option>Material Specification</option>
                      <option>test2</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">DO RECORD CREATED</label>
                    <input type="checkbox" checked={formData.doRecordCreated} onChange={(e) => handleInputChange('doRecordCreated', e.target.checked)} style={{ width: '18px', height: '18px' }} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">GST TYPE</label>
                    <input type="text" className="form-control" value={formData.gstType} onChange={(e) => handleInputChange('gstType', e.target.value)} placeholder="Enter GST type" />
                  </div>
                </div>
              </div>
            )}

            {/* Supplier Received Items Tab */}
            {activeTab === 'supplier' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Received Items</h3>
                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>ITEM</th>
                        <th>COUNT OF QUANTITY</th>
                        <th>MEMO</th>
                        <th>SUM OF AMOUNT (FOREIGN CURRENCY)</th>
                        <th>NAME</th>
                        <th>DOCUMENT NUMBER</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>No records to show.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-secondary" onClick={handleSave}>
              <i className="fas fa-save"></i>
              Save
            </button>
            <button className="btn btn-secondary">
              Auto Fill
            </button>
            <button className="btn btn-secondary">
              Actions
            </button>
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

export default EnterPurchaseOrders;
