import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ItemReceipt = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('items');
  
  const [formData, setFormData] = useState({
    customForm: 'TOM Item Receipt',
    referenceNumber: 'To Be Generated',
    date: '2025-11-06',
    vendor: 'LOH & SONS PAINT CO. (S) PTE. LTD',
    postingPeriod: 'Nov 2025',
    createdFrom: 'Purchase Order #POTOM00141',
    memo: '',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    currency: 'SGD',
    countryOfOrigin: '',
    hsCode: '',
    exchangeRate: '1.00',
    // Custom fields
    refProjectNo: '',
    refItemTransactionRecord: '',
    projectAddress: '',
    items: [
      {
        id: 1,
        receive: true,
        item: 'Galvanizing Spray',
        vendorName: 'LOH & SONS PAINT CO.',
        description: 'Cold galvanized zink spray, couger brands',
        toLocation: 'TOM-11',
        onHand: 0,
        remaining: 48,
        quantity: 48,
        units: 'Pcs',
        options: '',
        rate: 8.56,
        currency: 'SGD',
        doQuantity: ''
      }
    ]
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
    showToast('Item receipt saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-receive-orders');
      }
    }
  };

  const handleAddItem = () => {
    const newItem = {
      id: formData.items.length + 1,
      receive: false,
      item: '',
      vendorName: '',
      description: '',
      toLocation: '',
      onHand: 0,
      remaining: 0,
      quantity: 0,
      units: 'Pcs',
      options: '',
      rate: 0.00,
      currency: 'SGD',
      doQuantity: ''
    };
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };

  const handleCheckboxChange = (itemId, checked) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.map(item => 
        item.id === itemId ? { ...item, receive: checked } : item
      )
    }));
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-box-open" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Item Receipt</h1>
          <span style={{ marginLeft: '10px', color: '#666', fontSize: '14px' }}>To Be Generated</span>
        </div>
        <div className="page-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
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
                <option>TOM Item Receipt</option>
                <option>Standard Item Receipt</option>
              </select>
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
              <label className="form-label">Reference #</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.referenceNumber}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">Posting Period</label>
              <select 
                className="form-control"
                value={formData.postingPeriod}
                onChange={(e) => handleInputChange('postingPeriod', e.target.value)}
              >
                <option>Nov 2025</option>
                <option>Dec 2025</option>
                <option>Jan 2026</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Vendor</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.vendor}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">Memo</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.memo}
                onChange={(e) => handleInputChange('memo', e.target.value)}
                placeholder="Enter memo"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Created From</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.createdFrom}
                disabled
              />
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
              <input 
                type="text" 
                className="form-control"
                value={formData.subsidiary}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">Currency</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.currency}
                disabled
              />
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
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Tabbed Interface */}
        <div className="detail-tabs" style={{ marginTop: '2rem' }}>
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'items' ? 'active' : ''}`} onClick={() => setActiveTab('items')}>Items & Expenses</button>
            <button className={`tab-btn ${activeTab === 'relationships' ? 'active' : ''}`} onClick={() => setActiveTab('relationships')}>Relationships</button>
            <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>Communication</button>
            <button className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`} onClick={() => setActiveTab('system')}>System Information</button>
            <button className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`} onClick={() => setActiveTab('custom')}>Custom</button>
          </div>

          <div className="tabs-content">
            {/* Items & Expenses Tab */}
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
                    <th style={{width: '5%'}}>RECEIVE</th>
                    <th style={{width: '10%'}}>ITEM</th>
                    <th style={{width: '10%'}}>VENDOR NAME</th>
                    <th style={{width: '15%'}}>DESC</th>
                    <th style={{width: '8%'}}>TO LOCATION</th>
                    <th style={{width: '6%'}}>ON HAND</th>
                    <th style={{width: '7%'}}>REMAINING</th>
                    <th style={{width: '6%'}}>QTY</th>
                    <th style={{width: '6%'}}>UNITS</th>
                    <th style={{width: '8%'}}>OPTIONS</th>
                    <th style={{width: '7%'}}>RATE</th>
                    <th style={{width: '6%'}}>CURRENCY</th>
                    <th style={{width: '6%'}}>DO QUANTITY</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.items.map((item) => (
                    <tr key={item.id}>
                      <td style={{textAlign: 'center'}}>
                        <input 
                          type="checkbox" 
                          checked={item.receive} 
                          onChange={(e) => handleCheckboxChange(item.id, e.target.checked)}
                        />
                      </td>
                      <td><input type="text" className="table-input" defaultValue={item.item} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.vendorName} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.description} style={{width: '100%'}} /></td>
                      <td>
                        <select className="table-input" defaultValue={item.toLocation} style={{width: '100%'}}>
                          <option value="">Select...</option>
                          <option>TOM-11</option>
                          <option>TOM-12</option>
                          <option>Warehouse A</option>
                          <option>Warehouse B</option>
                        </select>
                      </td>
                      <td><input type="number" className="table-input" defaultValue={item.onHand} style={{width: '100%'}} disabled /></td>
                      <td><input type="number" className="table-input" defaultValue={item.remaining} style={{width: '100%'}} disabled /></td>
                      <td><input type="number" className="table-input" defaultValue={item.quantity} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.units} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.options} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.rate} style={{width: '100%'}} step="0.01" /></td>
                      <td><input type="text" className="table-input" defaultValue={item.currency} style={{width: '100%'}} disabled /></td>
                      <td><input type="text" className="table-input" defaultValue={item.doQuantity} style={{width: '100%'}} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
                ) : (
                  <div className="empty-items-message">
                    <p>No items added yet. Click "Add Item" to start adding items to this receipt.</p>
                  </div>
                )}
              </div>
            )}

            {/* Relationships Tab */}
            {activeTab === 'relationships' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Contacts</h3>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Remove all</button>
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
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Messages</h3>
                <div style={{ borderBottom: '2px solid #e0e0e0', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0' }}>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: '#fff', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.875rem', cursor: 'pointer' }}>Events</button>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.875rem', cursor: 'pointer' }}>Tasks</button>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.875rem', cursor: 'pointer' }}>Phone Calls</button>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.875rem', cursor: 'pointer' }}>Files</button>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', fontSize: '0.875rem', cursor: 'pointer' }}>User Notes</button>
                  </div>
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Remove all</button>
                </div>
                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th style={{width: '20%'}}>TITLE <span className="required">*</span></th>
                        <th style={{width: '15%'}}>LOCATION</th>
                        <th style={{width: '15%'}}>DATE <span className="required">*</span></th>
                        <th style={{width: '10%'}}>ALL DAY</th>
                        <th style={{width: '15%'}}>START TIME</th>
                        <th style={{width: '15%'}}>END TIME</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><input type="text" className="table-input" style={{width: '100%'}} /></td>
                        <td><input type="text" className="table-input" style={{width: '100%'}} /></td>
                        <td><input type="text" className="table-input" defaultValue="17/11/2025" style={{width: '100%'}} /></td>
                        <td><input type="checkbox" style={{ width: '18px', height: '18px' }} /></td>
                        <td><input type="text" className="table-input" defaultValue="6:00 pm" style={{width: '100%'}} /></td>
                        <td><input type="text" className="table-input" defaultValue="7:00 pm" style={{width: '100%'}} /></td>
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

            {/* System Information Tab */}
            {activeTab === 'system' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Active Workflows <span className="required">*</span></h3>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: '500', marginRight: '0.5rem' }}>VIEW</label>
                  <select className="form-control" style={{ width: 'auto', fontSize: '0.875rem' }}>
                    <option>Default</option>
                  </select>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Customize View</button>
                  <button className="btn btn-primary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Refresh</button>
                </div>
                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>WORKFLOW</th>
                        <th>CURRENT STATE</th>
                        <th>DATE ENTERED WORKFLOW</th>
                        <th>DATE ENTERED STATE <span className="required">*</span></th>
                        <th>OPTIONS</th>
                        <th>STATUS</th>
                        <th>CANCEL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Purchase Order Approval</td>
                        <td>Approved By CEO</td>
                        <td>8/1/2022 4:49 pm</td>
                        <td>8/1/2022 4:52 pm</td>
                        <td></td>
                        <td><span style={{ color: '#28a745', fontWeight: '500' }}>Active</span></td>
                        <td><a href="#" style={{ color: '#4a90e2', textDecoration: 'none' }}>Cancel</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Workflow History <span className="required">*</span></h4>
                <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
                  <p style={{ margin: 0, color: '#666', fontSize: '0.875rem' }}>No workflow history available</p>
                </div>
              </div>
            )}

            {/* Custom Tab */}
            {activeTab === 'custom' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Custom Fields</h3>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '900px' }}>
                  <div>
                    <div className="form-group">
                      <label className="form-label">REF PROJECT NO</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={formData.refProjectNo} 
                        onChange={(e) => handleInputChange('refProjectNo', e.target.value)} 
                        placeholder="<Type then tab>" 
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">REF ITEM TRANSACTION RECORD</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={formData.refItemTransactionRecord} 
                        onChange={(e) => handleInputChange('refItemTransactionRecord', e.target.value)} 
                        placeholder="<Type then tab>" 
                      />
                    </div>
                  </div>
                  <div>
                    <div className="form-group">
                      <label className="form-label">PROJECT ADDRESS</label>
                      <textarea 
                        className="form-control" 
                        rows="6" 
                        value={formData.projectAddress} 
                        onChange={(e) => handleInputChange('projectAddress', e.target.value)} 
                        placeholder="Enter project address"
                      />
                    </div>
                  </div>
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
            <button className="btn btn-primary" onClick={handleSave}>
              <i className="fas fa-save"></i>
              Save
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

export default ItemReceipt;
