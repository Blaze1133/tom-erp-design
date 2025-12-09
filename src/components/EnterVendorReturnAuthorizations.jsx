import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EnterVendorReturnAuthorizations = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('expenses');
  const [showVendorDropdown, setShowVendorDropdown] = useState(false);
  const [vendorSearch, setVendorSearch] = useState('');
  const [showAddVendor, setShowAddVendor] = useState(false);
  const [isHoveringVendor, setIsHoveringVendor] = useState(false);
  const [filteredVendors, setFilteredVendors] = useState([]);
  
  const allVendors = [
    '365 PROPERTY SG PTE LTD',
    '5MS Enterprise Pte Ltd',
    '7-ELEVEN COLD STORAGE',
    '8 POINT ENGINEERING PTE LTD',
    '818 TRADERS',
    '96 CRANE SOLUTIONS PTE LTD',
    'A & B SCAFFOLD ENGINEERING PTE LTD',
    'A & G EQUIPMENT PTE LTD',
    'A G AUTO PTE LTD',
    'A S K ELECTRONIC PTE LTD',
    'EASTERN SEALAND SUPPLY PTE LTD',
    'LOH & SONS PAINT CO. (S) PTE. LTD',
    'TOKIO MARINE INSURANCE SINGAPORE LTD.'
  ];
  
  const [formData, setFormData] = useState({
    customForm: 'TOM Vendor Return Authorization',
    referenceNo: 'To Be Generated',
    date: '2025-11-06',
    tax: '',
    vendor: '',
    amount: '',
    vatRegistration: '',
    status: 'Pending Approval',
    currency: 'SGD',
    memo: '',
    exchangeRate: '1.00',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    purchaseType: '',
    materialSpecification: '',
    customCreatedFrom: '',
    expenses: []
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
    showToast('Vendor return authorization saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-vendor-return-authorizations');
      }
    }
  };

  const handleAddExpense = () => {
    const newExpense = {
      id: formData.expenses.length + 1,
      account: '',
      amount: 0.00,
      taxCode: '',
      taxRate: '',
      taxAmount: 0.00,
      grossAmount: 0.00,
      memo: '',
      project: '',
      department: '',
      class: '',
      location: '',
      customer: '',
      billable: false
    };
    setFormData(prev => ({
      ...prev,
      expenses: [...prev.expenses, newExpense]
    }));
  };

  const handleVendorSearch = (searchTerm) => {
    setVendorSearch(searchTerm);
    if (searchTerm.trim() === '') {
      setFilteredVendors(allVendors);
    } else {
      const filtered = allVendors.filter(vendor =>
        vendor.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredVendors(filtered);
    }
  };

  const handleSaveNewVendor = (newVendorData) => {
    showToast('Vendor added successfully!', 'success');
    setShowAddVendor(false);
    handleInputChange('vendor', newVendorData.name);
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-undo" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <div>
            <h1>Vendor Return Authorization</h1>
            <div className="detail-subtitle">
              <span>{formData.referenceNo || 'To Be Generated'}</span>
              <span style={{ margin: '0 8px', color: '#ccc' }}>|</span>
              <span>New Vendor Return Authorization</span>
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
            Recall
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
                <option>TOM Vendor Return Authorization</option>
                <option>Standard Vendor Return</option>
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
              <label className="form-label">Reference No.</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.referenceNo}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">Tax</label>
              <select 
                className="form-control"
                value={formData.tax}
                onChange={(e) => handleInputChange('tax', e.target.value)}
              >
                <option value="">Select Tax Rate</option>
                <option value="9.0%">9.0%</option>
                <option value="Zero Rated">Zero Rated</option>
              </select>
            </div>
            <div className="form-group" style={{ position: 'relative' }}>
              <label className="form-label required">Vendor</label>
              <div 
                style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
                onMouseEnter={() => setIsHoveringVendor(true)}
                onMouseLeave={() => setIsHoveringVendor(false)}
              >
                <div style={{ position: 'relative', flex: 1 }}>
                  <input 
                    type="text"
                    className="form-control"
                    value={formData.vendor}
                    onChange={(e) => handleInputChange('vendor', e.target.value)}
                    onFocus={() => {
                      setShowVendorDropdown(true);
                      setFilteredVendors(allVendors);
                    }}
                    placeholder="<Type then tab>"
                  />
                  <button 
                    type="button"
                    style={{ 
                      position: 'absolute', 
                      right: '8px', 
                      top: '50%', 
                      transform: 'translateY(-50%)', 
                      background: 'none', 
                      border: 'none', 
                      cursor: 'pointer',
                      color: '#666',
                      fontSize: '14px'
                    }}
                    onClick={() => {
                      setShowVendorDropdown(!showVendorDropdown);
                      if (!showVendorDropdown) {
                        setFilteredVendors(allVendors);
                      }
                    }}
                  >
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  {showVendorDropdown && (
                    <>
                      <div 
                        style={{ 
                          position: 'fixed', 
                          top: 0, 
                          left: 0, 
                          right: 0, 
                          bottom: 0, 
                          zIndex: 9999 
                        }}
                        onClick={() => setShowVendorDropdown(false)}
                      />
                      <div style={{ 
                        position: 'absolute', 
                        top: '100%', 
                        left: 0, 
                        right: 0, 
                        background: '#fff', 
                        border: '1px solid #ddd', 
                        borderRadius: '4px', 
                        marginTop: '4px', 
                        zIndex: 10000,
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        maxHeight: '300px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column'
                      }}>
                        <div style={{ padding: '12px', borderBottom: '1px solid #e0e0e0', background: '#f8f9fa' }}>
                          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <i className="fas fa-search" style={{ color: '#666', fontSize: '14px' }}></i>
                            <input 
                              type="text"
                              placeholder="Search vendors..."
                              value={vendorSearch}
                              onChange={(e) => handleVendorSearch(e.target.value)}
                              style={{ 
                                flex: 1, 
                                padding: '6px 10px', 
                                border: '1px solid #ddd', 
                                borderRadius: '4px',
                                fontSize: '13px'
                              }}
                            />
                          </div>
                        </div>
                        <div style={{ 
                          flex: 1, 
                          overflowY: 'auto',
                          maxHeight: '200px'
                        }}>
                          {(filteredVendors.length > 0 ? filteredVendors : allVendors).map((vendor, idx) => (
                            <div 
                              key={idx}
                              onClick={() => {
                                handleInputChange('vendor', vendor);
                                setShowVendorDropdown(false);
                                setVendorSearch('');
                              }}
                              style={{ 
                                padding: '10px 12px', 
                                cursor: 'pointer',
                                fontSize: '13px',
                                borderBottom: '1px solid #f0f0f0',
                                transition: 'background 0.2s'
                              }}
                              onMouseEnter={(e) => e.target.style.background = '#f8f9fa'}
                              onMouseLeave={(e) => e.target.style.background = 'transparent'}
                            >
                              {vendor}
                            </div>
                          ))}
                          {filteredVendors.length === 0 && vendorSearch && (
                            <div style={{ padding: '20px', textAlign: 'center', color: '#999', fontSize: '13px' }}>
                              No vendors found
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
                {isHoveringVendor && (
                  <button 
                    type="button"
                    className="btn btn-secondary" 
                    style={{ 
                      padding: '8px 16px',
                      fontSize: '14px',
                      minWidth: 'auto',
                      transition: 'opacity 0.2s'
                    }}
                    onClick={() => setShowAddVendor(true)}
                    title="Add new vendor"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                )}
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Amount</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.amount}
                onChange={(e) => handleInputChange('amount', e.target.value)}
                placeholder="0.00"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Status</label>
              <select 
                className="form-control"
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
              >
                <option>Pending Approval</option>
                <option>Approved</option>
                <option>Rejected</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">GST Registration</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.vatRegistration}
                onChange={(e) => handleInputChange('vatRegistration', e.target.value)}
                placeholder="Enter GST registration"
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
              <label className="form-label required">Exchange Rate</label>
              <input 
                type="number" 
                className="form-control"
                step="0.01"
                value={formData.exchangeRate}
                onChange={(e) => handleInputChange('exchangeRate', e.target.value)}
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
              <label className="form-label required">Subsidiary</label>
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
              <label className="form-label">Material Specification</label>
              <select 
                className="form-control"
                value={formData.materialSpecification}
                onChange={(e) => handleInputChange('materialSpecification', e.target.value)}
              >
                <option value="">Select...</option>
                <option>- New -</option>
                <option>GST BEHALF OF</option>
                <option>Material Specification</option>
                <option>test2</option>
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

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Tabbed Interface */}
        <div className="detail-tabs" style={{ marginTop: '2rem' }}>
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'expenses' ? 'active' : ''}`} onClick={() => setActiveTab('expenses')}>Expenses & Items</button>
            <button className={`tab-btn ${activeTab === 'billing' ? 'active' : ''}`} onClick={() => setActiveTab('billing')}>Billing</button>
            <button className={`tab-btn ${activeTab === 'relationships' ? 'active' : ''}`} onClick={() => setActiveTab('relationships')}>Relationships</button>
            <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>Communication</button>
            <button className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`} onClick={() => setActiveTab('custom')}>Custom</button>
            <button className={`tab-btn ${activeTab === 'tax' ? 'active' : ''}`} onClick={() => setActiveTab('tax')}>Tax Reporting</button>
            <button className={`tab-btn ${activeTab === 'supplier' ? 'active' : ''}`} onClick={() => setActiveTab('supplier')}>Supplier Received Items</button>
          </div>

          <div className="tabs-content">
            {/* Expenses & Items Tab */}
            {activeTab === 'expenses' && (
              <div className="form-section">
                <h2 className="section-title">
                  <i className="fas fa-receipt"></i>
                  Expenses
                </h2>
                
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Clear All Lines</button>
                </div>
                
                <button className="add-item-btn" onClick={handleAddExpense}>
                  <i className="fas fa-plus"></i>
                  Add Expense
                </button>
          {formData.expenses.length > 0 ? (
            <div className="items-table-wrapper">
              <table className="detail-items-table">
                <thead>
                  <tr>
                    <th style={{width: '10%'}}>ACCOUNT <span className="required">*</span></th>
                    <th style={{width: '7%'}}>AMOUNT <span className="required">*</span></th>
                    <th style={{width: '7%'}}>TAX CODE <span className="required">*</span></th>
                    <th style={{width: '6%'}}>TAX RATE</th>
                    <th style={{width: '7%'}}>TAX AMT</th>
                    <th style={{width: '7%'}}>GROSS AMT</th>
                    <th style={{width: '10%'}}>MEMO</th>
                    <th style={{width: '8%'}}>DEPARTMENT <span className="required">*</span></th>
                    <th style={{width: '8%'}}>CLASS</th>
                    <th style={{width: '8%'}}>LOCATION</th>
                    <th style={{width: '8%'}}>CUSTOMER</th>
                    <th style={{width: '5%'}}>BILLABLE</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.expenses.map((expense) => (
                    <tr key={expense.id}>
                      <td>
                        <select className="table-input" style={{width: '100%'}}>
                          <option value="">{'<Type then tab>'}</option>
                        </select>
                      </td>
                      <td><input type="number" className="table-input" style={{width: '100%'}} step="0.01" /></td>
                      <td><input type="text" className="table-input" style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" style={{width: '100%'}} step="0.01" /></td>
                      <td><input type="number" className="table-input" style={{width: '100%'}} step="0.01" /></td>
                      <td><input type="text" className="table-input" style={{width: '100%'}} /></td>
                      <td>
                        <select className="table-input" style={{width: '100%'}}>
                          <option value="">Select...</option>
                          <option>MEP</option>
                          <option>Engineering</option>
                          <option>Operations</option>
                        </select>
                      </td>
                      <td>
                        <select className="table-input" style={{width: '100%'}}>
                          <option value="">Select...</option>
                          <option>Consumable Item</option>
                          <option>Material Supply</option>
                          <option>Fabrication</option>
                        </select>
                      </td>
                      <td>
                        <select className="table-input" style={{width: '100%'}}>
                          <option value="">Select...</option>
                          <option>Singapore Yard</option>
                          <option>Johor Facility</option>
                        </select>
                      </td>
                      <td><input type="text" className="table-input" style={{width: '100%'}} /></td>
                      <td style={{textAlign: 'center'}}>
                        <input type="checkbox" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
                ) : (
                  <div className="empty-items-message">
                    <p>No expenses added yet. Click "Add Expense" to start adding expenses.</p>
                  </div>
                )}
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div className="form-section">
                <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '100%' }}>
                  <div className="form-group">
                    <label className="form-label" style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', color: '#666' }}>VENDOR</label>
                    <div style={{ 
                      padding: '3rem 1rem', 
                      background: '#f5f5f5', 
                      borderRadius: '4px',
                      border: '1px solid #e0e0e0',
                      minHeight: '120px'
                    }}></div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', color: '#666' }}>VENDOR SELECT</label>
                    <select className="form-control" style={{ fontSize: '0.875rem' }}>
                      <option>- Custom -</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Relationships Tab */}
            {activeTab === 'relationships' && (
              <div className="form-section">
                <h3 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Contacts</h3>
                <div style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>Remove all</button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>Clear All Lines</button>
                </div>
                <div className="items-table-wrapper">
                  <table className="detail-items-table" style={{ fontSize: '0.75rem' }}>
                    <thead>
                      <tr>
                        <th style={{width: '25%', padding: '0.5rem', fontSize: '0.7rem'}}>CONTACT <span className="required">*</span></th>
                        <th style={{width: '20%', padding: '0.5rem', fontSize: '0.7rem'}}>JOB TITLE</th>
                        <th style={{width: '20%', padding: '0.5rem', fontSize: '0.7rem'}}>EMAIL</th>
                        <th style={{width: '15%', padding: '0.5rem', fontSize: '0.7rem'}}>MAIN PHONE</th>
                        <th style={{width: '15%', padding: '0.5rem', fontSize: '0.7rem'}}>SUBSIDIARY <span className="required">*</span></th>
                        <th style={{width: '5%', padding: '0.5rem', fontSize: '0.7rem'}}>ROLE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{padding: '0.4rem'}}><input type="text" className="table-input" style={{width: '100%', fontSize: '0.75rem', padding: '0.3rem'}} /></td>
                        <td style={{padding: '0.4rem'}}><input type="text" className="table-input" style={{width: '100%', fontSize: '0.75rem', padding: '0.3rem'}} /></td>
                        <td style={{padding: '0.4rem'}}><input type="text" className="table-input" style={{width: '100%', fontSize: '0.75rem', padding: '0.3rem'}} /></td>
                        <td style={{padding: '0.4rem'}}><input type="text" className="table-input" style={{width: '100%', fontSize: '0.75rem', padding: '0.3rem'}} /></td>
                        <td style={{padding: '0.4rem'}}><input type="text" className="table-input" style={{width: '100%', fontSize: '0.75rem', padding: '0.3rem'}} /></td>
                        <td style={{padding: '0.4rem'}}><input type="text" className="table-input" style={{width: '100%', fontSize: '0.75rem', padding: '0.3rem'}} /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-primary" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}><i className="fas fa-check"></i> Add</button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}><i className="fas fa-times"></i> Cancel</button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>Insert</button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>Remove</button>
                </div>
              </div>
            )}

            {/* Communication Tab */}
            {activeTab === 'communication' && (
              <div className="form-section">
                <h3 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Messages</h3>
                <div style={{ borderBottom: '2px solid #e0e0e0', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0' }}>
                    <button style={{ padding: '0.5rem 1rem', background: '#5b6b8a', color: '#fff', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.75rem', cursor: 'pointer' }}>Events</button>
                    <button style={{ padding: '0.5rem 1rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.75rem', cursor: 'pointer' }}>Tasks</button>
                    <button style={{ padding: '0.5rem 1rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.75rem', cursor: 'pointer' }}>Phone Calls</button>
                    <button style={{ padding: '0.5rem 1rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.75rem', cursor: 'pointer' }}>Files</button>
                    <button style={{ padding: '0.5rem 1rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', fontSize: '0.75rem', cursor: 'pointer' }}>User Notes</button>
                  </div>
                </div>
                <div style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>Remove all</button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>Clear All Lines</button>
                </div>
                <div className="items-table-wrapper">
                  <table className="detail-items-table" style={{ fontSize: '0.75rem' }}>
                    <thead>
                      <tr>
                        <th style={{width: '20%', padding: '0.5rem', fontSize: '0.7rem'}}>TITLE <span className="required">*</span></th>
                        <th style={{width: '15%', padding: '0.5rem', fontSize: '0.7rem'}}>LOCATION</th>
                        <th style={{width: '15%', padding: '0.5rem', fontSize: '0.7rem'}}>DATE <span className="required">*</span></th>
                        <th style={{width: '10%', padding: '0.5rem', fontSize: '0.7rem'}}>ALL DAY</th>
                        <th style={{width: '15%', padding: '0.5rem', fontSize: '0.7rem'}}>START TIME</th>
                        <th style={{width: '15%', padding: '0.5rem', fontSize: '0.7rem'}}>END TIME</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{padding: '0.4rem'}}><input type="text" className="table-input" style={{width: '100%', fontSize: '0.75rem', padding: '0.3rem'}} /></td>
                        <td style={{padding: '0.4rem'}}><input type="text" className="table-input" style={{width: '100%', fontSize: '0.75rem', padding: '0.3rem'}} /></td>
                        <td style={{padding: '0.4rem'}}><input type="text" className="table-input" defaultValue="17/11/2025" style={{width: '100%', fontSize: '0.75rem', padding: '0.3rem'}} /></td>
                        <td style={{padding: '0.4rem', textAlign: 'center'}}><input type="checkbox" style={{ width: '14px', height: '14px' }} /></td>
                        <td style={{padding: '0.4rem'}}><input type="text" className="table-input" defaultValue="6:00 pm" style={{width: '100%', fontSize: '0.75rem', padding: '0.3rem'}} /></td>
                        <td style={{padding: '0.4rem'}}><input type="text" className="table-input" defaultValue="7:00 pm" style={{width: '100%', fontSize: '0.75rem', padding: '0.3rem'}} /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-primary" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}><i className="fas fa-check"></i> Add</button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}><i className="fas fa-times"></i> Cancel</button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>Insert</button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>Remove</button>
                </div>
              </div>
            )}

            {/* Custom Tab */}
            {activeTab === 'custom' && (
              <div className="form-section">
                <h3 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Custom Fields</h3>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.5rem', maxWidth: '100%' }}>
                  <div>
                    <div className="form-group">
                      <label className="form-label" style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', color: '#666' }}>MATERIAL TYPE</label>
                      <div style={{ position: 'relative' }}>
                        <div style={{ 
                          display: 'flex',
                          gap: '4px',
                          alignItems: 'center',
                          marginBottom: '0.5rem',
                          padding: '0.4rem',
                          background: '#f8f9fa',
                          borderRadius: '4px 4px 0 0',
                          border: '1px solid #ddd',
                          borderBottom: 'none'
                        }}>
                          <button style={{ padding: '3px 6px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer', borderRadius: '3px', fontSize: '0.7rem' }}><i className="fas fa-bold"></i></button>
                          <button style={{ padding: '3px 6px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer', borderRadius: '3px', fontSize: '0.7rem' }}><i className="fas fa-italic"></i></button>
                          <button style={{ padding: '3px 6px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer', borderRadius: '3px', fontSize: '0.7rem' }}><i className="fas fa-underline"></i></button>
                          <span style={{ fontSize: '0.7rem', color: '#999', marginLeft: 'auto' }}>Paragraph</span>
                        </div>
                        <textarea 
                          className="form-control" 
                          rows="4"
                          placeholder="Type text and format it using the toolbar."
                          style={{ fontSize: '0.8rem', borderRadius: '0 0 4px 4px' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="form-group">
                      <label className="form-label" style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', color: '#666' }}>TEST TRANSACTION FIELD</label>
                      <input type="text" className="form-control" style={{ fontSize: '0.8rem' }} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', color: '#666' }}>DO RECORD CREATED</label>
                      <input type="text" className="form-control" style={{ fontSize: '0.8rem' }} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', color: '#666' }}>GST TYPE</label>
                      <input type="text" className="form-control" style={{ fontSize: '0.8rem' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tax Reporting Tab */}
            {activeTab === 'tax' && (
              <div className="form-section">
                <h3 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Tax Reporting</h3>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.5rem', maxWidth: '100%' }}>
                  <div className="form-group">
                    <label className="form-label" style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', color: '#666' }}>DELIVERY TERMS</label>
                    <select className="form-control" style={{ fontSize: '0.8rem' }}>
                      <option value=""></option>
                      <option>- New -</option>
                      <option>EXW</option>
                      <option>FCA</option>
                      <option>FAS</option>
                      <option>FOB</option>
                      <option>CFR</option>
                      <option>CIF</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', color: '#666' }}>REGIME CODE OF SUPPLY</label>
                    <select className="form-control" style={{ fontSize: '0.8rem' }}>
                      <option value=""></option>
                      <option>- New -</option>
                      <option>0 - Standard supply (all supplies with value over 10,000 CZK, except those with code 1 or 2)</option>
                      <option>1 - § 89 - Special regime for travel service (markup of travel agencies, that is not subject of VAT)</option>
                      <option>2 - § 90 - Special regime for antiques (without VAT)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Supplier Received Items Tab */}
            {activeTab === 'supplier' && (
              <div className="form-section">
                <h3 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Received Items</h3>
                <div className="items-table-wrapper">
                  <table className="detail-items-table" style={{ fontSize: '0.75rem' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '0.5rem', fontSize: '0.7rem' }}>ITEM</th>
                        <th style={{ padding: '0.5rem', fontSize: '0.7rem' }}>COUNT OF QUANTITY</th>
                        <th style={{ padding: '0.5rem', fontSize: '0.7rem' }}>MEMO</th>
                        <th style={{ padding: '0.5rem', fontSize: '0.7rem' }}>SUM OF AMOUNT (FOREIGN CURRENCY)</th>
                        <th style={{ padding: '0.5rem', fontSize: '0.7rem' }}>NAME</th>
                        <th style={{ padding: '0.5rem', fontSize: '0.7rem' }}>DOCUMENT NUMBER</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="6" style={{ textAlign: 'center', padding: '1.5rem', color: '#999', fontSize: '0.8rem' }}>
                          No records to show.
                        </td>
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
              Recall
            </button>
            <button className="btn btn-secondary">
              Actions
            </button>
          </div>
        </div>
      </div>

      {/* Add Vendor Modal */}
      {showAddVendor && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          background: 'rgba(0,0,0,0.5)', 
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{ 
            background: '#fff', 
            borderRadius: '8px', 
            maxWidth: '600px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
          }}>
            <div style={{ 
              padding: '20px 24px', 
              borderBottom: '1px solid #e0e0e0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#f8f9fa'
            }}>
              <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '600', color: '#333' }}>
                <i className="fas fa-user-plus" style={{ marginRight: '10px', color: '#4a90e2' }}></i>
                Add New Vendor
              </h2>
              <button 
                onClick={() => setShowAddVendor(false)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  fontSize: '24px', 
                  cursor: 'pointer',
                  color: '#666',
                  padding: '0',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px'
                }}
                onMouseEnter={(e) => e.target.style.background = '#e0e0e0'}
                onMouseLeave={(e) => e.target.style.background = 'none'}
              >
                ×
              </button>
            </div>
            <div style={{ padding: '24px' }}>
              <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                <div className="form-group">
                  <label className="form-label required">Vendor Name</label>
                  <input type="text" className="form-control" placeholder="Enter vendor name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Company Registration No.</label>
                  <input type="text" className="form-control" placeholder="Enter registration number" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Enter email address" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input type="tel" className="form-control" placeholder="Enter phone number" />
                </div>
                <div className="form-group">
                  <label className="form-label">Address</label>
                  <textarea className="form-control" rows="3" placeholder="Enter address"></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">GST Registration</label>
                  <input type="text" className="form-control" placeholder="Enter GST registration" />
                </div>
              </div>
            </div>
            <div style={{ 
              padding: '16px 24px', 
              borderTop: '1px solid #e0e0e0',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '12px',
              background: '#f8f9fa'
            }}>
              <button 
                className="btn btn-tertiary"
                onClick={() => setShowAddVendor(false)}
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => handleSaveNewVendor({ name: 'New Vendor' })}
              >
                <i className="fas fa-save"></i> Save Vendor
              </button>
            </div>
          </div>
        </div>
      )}

      <Toast 
        message={toast.message} 
        type={toast.type} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
    </div>
  );
};

export default EnterVendorReturnAuthorizations;
