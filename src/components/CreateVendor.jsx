import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateVendor = ({ isEdit = false, onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [emailPhoneCollapsed, setEmailPhoneCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('subsidiaries');

  // Form state
  const [formData, setFormData] = useState({
    // Primary Information
    vendorId: isEdit ? '5MS Enterprise Pte Ltd' : '',
    name: isEdit ? '5MS Enterprise Pte Ltd' : '',
    companyName: isEdit ? '5MS Enterprise Pte Ltd' : '',
    type: 'Company',
    category: 'Supplies',
    webAddress: '',
    comments: '',
    
    // Contact Information
    email: '',
    phone: '',
    altPhone: '',
    fax: '',
    address: isEdit ? 'Serangoon Road\nSingapore\nSingapore' : '',
    
    // Classification
    primarySubsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    
    // Financial
    account: 'SMS Enterprises',
    defaultExpenseAccount: '50400 Cost Of Sales - Tools',
    defaultPayablesAccount: '',
    defaultVendorPaymentAccount: '',
    primaryCurrency: 'SGD',
    terms: '',
    creditLimit: '',
    incoterm: '',
    
    // Tax Information
    taxRegNumber: '',
    taxRoundingMethod: 'Round Off',
    taxRoundingPrecision: '0.01 and Below',
    taxEligible: '1099 ELIGIBLE'
  });

  // Sub-table data
  const [contacts, setContacts] = useState([]);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      defaultShipping: true,
      defaultBilling: true,
      label: 'Serangoon Road',
      address: 'Serangoon Road\nSingapore\nSingapore'
    }
  ]);

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'Tech Electric & Automation Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Offshore Marine (DQ) Pte Ltd',
    'Tech Offshore Marine (s) Pte Ltd',
    'Tech Offshore Marine (SV) Pte Ltd'
  ];

  const categories = [
    'Supplies',
    'Consultant',
    'Services',
    'Materials',
    'Equipment',
    'Contractor'
  ];

  const currencies = [
    'SGD - Singapore Dollar',
    'USD - US Dollar',
    'EUR - Euro',
    'MYR - Malaysian Ringgit'
  ];

  const taxRoundingMethods = [
    'Round Off',
    'Round Up',
    'Round Down'
  ];

  const taxRoundingPrecisions = [
    '0.01 and Below',
    '0.1 and Below',
    '1 and Below'
  ];

  const contactRoles = [
    'Primary Contact',
    'Billing Contact',
    'Technical Contact',
    'Purchase Contact'
  ];

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
    if (!formData.name.trim()) {
      showToast('Vendor name is required', 'error');
      return;
    }
    
    showToast(`Vendor ${isEdit ? 'updated' : 'created'} successfully!`, 'success');
    if (onSave) {
      onSave(formData);
    }
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (onCancel) {
        onCancel();
      }
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-truck"></i>
          <div>
            <h1>Vendor</h1>
            <div className="detail-subtitle">
              <span>{formData.vendorId || 'New Vendor'}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">List</button>
          <button className="btn-action">View Dashboard</button>
          <button className="btn-action">Search</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn-toolbar">
          Make Payment
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
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
        {/* Primary Information Section */}
        <div className={`detail-section ${primaryInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setPrimaryInfoCollapsed(!primaryInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>VENDOR ID</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.vendorId}
                  onChange={(e) => handleInputChange('vendorId', e.target.value)}
                  placeholder="Auto-generated if left blank"
                />
              </div>
              <div className="detail-field">
                <label>WEB ADDRESS</label>
                <input
                  type="url"
                  className="form-control"
                  value={formData.webAddress}
                  onChange={(e) => handleInputChange('webAddress', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>COMMENTS</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={formData.comments}
                  onChange={(e) => handleInputChange('comments', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>NAME *</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
              </div>
              <div className="detail-field">
                <label>CATEGORY</label>
                <select
                  className="form-control"
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                >
                  <option value=""></option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div className="detail-field">
                <label>TYPE</label>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="type"
                      value="Company"
                      checked={formData.type === 'Company'}
                      onChange={(e) => handleInputChange('type', e.target.value)}
                    />
                    <span style={{color: 'red'}}>●</span> COMPANY
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="type"
                      value="Individual"
                      checked={formData.type === 'Individual'}
                      onChange={(e) => handleInputChange('type', e.target.value)}
                    />
                    <span>○ INDIVIDUAL</span>
                  </label>
                </div>
              </div>
              <div className="detail-field">
                <label>COMPANY NAME</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Email | Phone | Address Section */}
        <div className={`detail-section ${emailPhoneCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setEmailPhoneCollapsed(!emailPhoneCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Email | Phone | Address</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>EMAIL</label>
                <input
                  type="email"
                  className="form-control"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>ALT. PHONE</label>
                <input
                  type="tel"
                  className="form-control"
                  value={formData.altPhone}
                  onChange={(e) => handleInputChange('altPhone', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>ADDRESS</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                />
                <small style={{color: 'blue', cursor: 'pointer'}}>🗺 Map</small>
              </div>
              <div className="detail-field">
                <label>PHONE</label>
                <input
                  type="tel"
                  className="form-control"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>FAX</label>
                <input
                  type="tel"
                  className="form-control"
                  value={formData.fax}
                  onChange={(e) => handleInputChange('fax', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Classification Section */}
        <div className={`detail-section ${classificationCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setClassificationCollapsed(!classificationCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>PRIMARY SUBSIDIARY *</label>
                <select
                  className="form-control"
                  value={formData.primarySubsidiary}
                  onChange={(e) => handleInputChange('primarySubsidiary', e.target.value)}
                  required
                >
                  {subsidiaries.map(subsidiary => (
                    <option key={subsidiary} value={subsidiary}>{subsidiary}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'subsidiaries' ? 'active' : ''}`}
              onClick={() => setActiveTab('subsidiaries')}
            >
              Subsidiaries
            </button>
            <button 
              className={`tab-btn ${activeTab === 'relationships' ? 'active' : ''}`}
              onClick={() => setActiveTab('relationships')}
            >
              Relationships
            </button>
            <button 
              className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`}
              onClick={() => setActiveTab('communication')}
            >
              Communication
            </button>
            <button 
              className={`tab-btn ${activeTab === 'address' ? 'active' : ''}`}
              onClick={() => setActiveTab('address')}
            >
              Address
            </button>
            <button 
              className={`tab-btn ${activeTab === 'financial' ? 'active' : ''}`}
              onClick={() => setActiveTab('financial')}
            >
              Financial
            </button>
            <button 
              className={`tab-btn ${activeTab === 'preferences' ? 'active' : ''}`}
              onClick={() => setActiveTab('preferences')}
            >
              Preferences
            </button>
            <button 
              className={`tab-btn ${activeTab === 'system-info' ? 'active' : ''}`}
              onClick={() => setActiveTab('system-info')}
            >
              System Information
            </button>
            <button 
              className={`tab-btn ${activeTab === 'access' ? 'active' : ''}`}
              onClick={() => setActiveTab('access')}
            >
              Access
            </button>
            <button 
              className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`}
              onClick={() => setActiveTab('custom')}
            >
              Custom
            </button>
            <button 
              className={`tab-btn ${activeTab === 'time-tracking' ? 'active' : ''}`}
              onClick={() => setActiveTab('time-tracking')}
            >
              Time Tracking
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'subsidiaries' && (
              <div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>SUBSIDIARY</th>
                      <th>PRIMARY</th>
                      <th>INACTIVE</th>
                      <th>BALANCE</th>
                      <th>PREPAYMENT BALANCE</th>
                      <th>UNBILLED ORDERS</th>
                      <th>CREDIT LIMIT</th>
                      <th>TAX CODE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <select className="form-control">
                          {subsidiaries.map(sub => (
                            <option key={sub} value={sub}>{sub}</option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <input type="checkbox" defaultChecked />
                      </td>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>0.00 (SGD)</td>
                      <td>0.00 (SGD)</td>
                      <td>0.00 (SGD)</td>
                      <td>
                        <input type="text" className="form-control" placeholder="0.00 (SGD)" />
                      </td>
                      <td>
                        <input type="text" className="form-control" placeholder="(SGD)" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'relationships' && (
              <div>
                <div style={{ marginBottom: '1rem' }}>
                  <h4>OTHER RELATIONSHIPS</h4>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <h4>Contacts</h4>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label>CONTACT</label>
                      <select className="form-control" style={{ width: '200px' }}>
                        <option>&lt;Type then tab&gt;</option>
                      </select>
                    </div>
                    <div>
                      <label>ROLE</label>
                      <select className="form-control" style={{ width: '200px' }}>
                        <option>Default</option>
                        {contactRoles.map(role => (
                          <option key={role} value={role}>{role}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label>VIEW</label>
                      <select className="form-control" style={{ width: '200px' }}>
                        <option>Default</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <button className="btn btn-primary">New Contact</button>
                    <button className="btn btn-secondary">Attach</button>
                    <button className="btn btn-secondary">Update Primary</button>
                    <button className="btn btn-secondary">Customize View</button>
                  </div>
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>EDIT</th>
                        <th>NAME</th>
                        <th>COMPANY</th>
                        <th>JOB TITLE</th>
                        <th>PHONE</th>
                        <th>EMAIL</th>
                        <th>STOP SENDING SMS</th>
                        <th>MESSAGEMEDIA LAST OPTIN KEYWORD</th>
                        <th>MESSAGEMEDIA ISKEYLINK ENTITY</th>
                        <th>ROLE</th>
                        <th>REMOVE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="11" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'address' && (
              <div>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <button className="btn btn-primary">Add Address</button>
                </div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>DEFAULT SHIPPING</th>
                      <th>DEFAULT BILLING</th>
                      <th>LABEL</th>
                      <th>ADDRESS</th>
                      <th>EDIT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {addresses.map((addr) => (
                      <tr key={addr.id}>
                        <td>
                          <input type="checkbox" checked={addr.defaultShipping} />
                        </td>
                        <td>
                          <input type="checkbox" checked={addr.defaultBilling} />
                        </td>
                        <td>
                          <input type="text" className="form-control" value={addr.label} />
                        </td>
                        <td>
                          <textarea className="form-control" rows="2" value={addr.address} />
                        </td>
                        <td>
                          <button className="view-link">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'financial' && (
              <div>
                <div className="form-section">
                  <h4>Account Information</h4>
                  <div className="detail-grid">
                    <div className="detail-field">
                      <label>ACCOUNT</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.account}
                        onChange={(e) => handleInputChange('account', e.target.value)}
                      />
                    </div>
                    <div className="detail-field">
                      <label>PRIMARY CURRENCY</label>
                      <select
                        className="form-control"
                        value={formData.primaryCurrency}
                        onChange={(e) => handleInputChange('primaryCurrency', e.target.value)}
                      >
                        {currencies.map(currency => (
                          <option key={currency} value={currency.split(' - ')[0]}>{currency}</option>
                        ))}
                      </select>
                    </div>
                    <div className="detail-field">
                      <label>DEFAULT EXPENSE ACCOUNT</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.defaultExpenseAccount}
                        onChange={(e) => handleInputChange('defaultExpenseAccount', e.target.value)}
                      />
                    </div>
                    <div className="detail-field">
                      <label>TERMS</label>
                      <select
                        className="form-control"
                        value={formData.terms}
                        onChange={(e) => handleInputChange('terms', e.target.value)}
                      >
                        <option value="">Select Terms</option>
                        <option value="Net 30">Net 30</option>
                        <option value="Net 15">Net 15</option>
                        <option value="COD">COD</option>
                        <option value="Due on Receipt">Due on Receipt</option>
                      </select>
                    </div>
                    <div className="detail-field">
                      <label>DEFAULT PAYABLES ACCOUNT</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.defaultPayablesAccount}
                        onChange={(e) => handleInputChange('defaultPayablesAccount', e.target.value)}
                      />
                    </div>
                    <div className="detail-field">
                      <label>CREDIT LIMIT</label>
                      <input
                        type="number"
                        className="form-control"
                        value={formData.creditLimit}
                        onChange={(e) => handleInputChange('creditLimit', e.target.value)}
                        step="0.01"
                      />
                    </div>
                    <div className="detail-field">
                      <label>DEFAULT VENDOR PAYMENT ACCOUNT</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.defaultVendorPaymentAccount}
                        onChange={(e) => handleInputChange('defaultVendorPaymentAccount', e.target.value)}
                      />
                    </div>
                    <div className="detail-field">
                      <label>INCOTERM</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.incoterm}
                        onChange={(e) => handleInputChange('incoterm', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h4>Tax Information</h4>
                  <div className="detail-grid">
                    <div className="detail-field">
                      <label>TAX REG. NUMBER</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.taxRegNumber}
                        onChange={(e) => handleInputChange('taxRegNumber', e.target.value)}
                      />
                    </div>
                    <div className="detail-field">
                      <label>TAX ROUNDING METHOD</label>
                      <select
                        className="form-control"
                        value={formData.taxRoundingMethod}
                        onChange={(e) => handleInputChange('taxRoundingMethod', e.target.value)}
                      >
                        {taxRoundingMethods.map(method => (
                          <option key={method} value={method}>{method}</option>
                        ))}
                      </select>
                    </div>
                    <div className="detail-field">
                      <label>TAX ROUNDING PRECISION</label>
                      <select
                        className="form-control"
                        value={formData.taxRoundingPrecision}
                        onChange={(e) => handleInputChange('taxRoundingPrecision', e.target.value)}
                      >
                        {taxRoundingPrecisions.map(precision => (
                          <option key={precision} value={precision}>{precision}</option>
                        ))}
                      </select>
                    </div>
                    <div className="detail-field">
                      <label>1099 ELIGIBLE</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.taxEligible}
                        onChange={(e) => handleInputChange('taxEligible', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other tabs with placeholder content */}
            {['communication', 'preferences', 'system-info', 'access', 'custom', 'time-tracking'].includes(activeTab) && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>Content for {activeTab} tab will be displayed here.</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="detail-footer-actions">
          <button className="btn-toolbar-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn-toolbar" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
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

export default CreateVendor;
