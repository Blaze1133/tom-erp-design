import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateVendor = ({ isEdit = false, onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [emailPhoneCollapsed, setEmailPhoneCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('subsidiaries');
  const [vendorSubsidiaries, setVendorSubsidiaries] = useState([
    {
      id: 1,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      primary: true,
      inactive: false
    }
  ]);
  const [selectedSubsidiary, setSelectedSubsidiary] = useState('');
  const [vendorContacts, setVendorContacts] = useState([]);
  const [financialSubTab, setFinancialSubTab] = useState('currencies');
  const [vendorCurrencies, setVendorCurrencies] = useState(
    isEdit ? [
      {
        id: 1,
        currency: 'SGD',
        format: 'Format Example: $1,234.56\nSymbol: $\nSymbol Placement: Before Number'
      }
    ] : []
  );
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [communicationActiveTab, setCommunicationActiveTab] = useState('messages');
  const [newContact, setNewContact] = useState({
    contact: '',
    jobTitle: '',
    email: '',
    mainPhone: '',
    subsidiary: '',
    role: ''
  });

  // Form state
  const [formData, setFormData] = useState({
    // Primary Information
    vendorId: isEdit ? 'VEN-2024-12324' : '',
    name: isEdit ? '5MS Enterprise Pte Ltd' : '',
    companyName: isEdit ? '5MS Enterprise Pte Ltd' : '',
    type: 'Company',
    category: 'Supplies',
    webAddress: '',
    comments: '',
    
    // Individual specific fields
    salutation: 'Mr.',
    individualName: '',
    jobTitle: '',
    
    // Contact Information
    email: '',
    phone: '',
    altPhone: '',
    altEmail: '',
    mobilePhone: '',
    homePhone: '',
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
  const [addresses, setAddresses] = useState(
    isEdit ? [
      {
        id: 1,
        defaultShipping: true,
        defaultBilling: true,
        label: 'Serangoon Road',
        address: 'Serangoon Road\nSingapore\nSingapore'
      }
    ] : []
  );
  const [newAddress, setNewAddress] = useState({
    defaultShipping: false,
    defaultBilling: false,
    label: '',
    address: ''
  });

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
    if (onCancel) {
      onCancel();
    }
  };

  const handleAddSubsidiary = () => {
    if (!selectedSubsidiary) {
      showToast('Please select a subsidiary', 'error');
      return;
    }
    
    // Check if subsidiary already exists
    if (vendorSubsidiaries.some(s => s.subsidiary === selectedSubsidiary)) {
      showToast('Subsidiary already added', 'error');
      return;
    }
    
    const newSubsidiary = {
      id: Date.now(),
      subsidiary: selectedSubsidiary,
      primary: vendorSubsidiaries.length === 0,
      inactive: false
    };
    
    setVendorSubsidiaries([...vendorSubsidiaries, newSubsidiary]);
    setSelectedSubsidiary('');
    showToast('Subsidiary added successfully', 'success');
  };

  const handleRemoveSubsidiary = (id) => {
    if (window.confirm('Are you sure you want to remove this subsidiary?')) {
      setVendorSubsidiaries(vendorSubsidiaries.filter(s => s.id !== id));
      showToast('Subsidiary removed successfully', 'success');
    }
  };

  // Address handlers
  const handleAddAddress = () => {
    if (!newAddress.label || !newAddress.address) {
      showToast('Please fill in Label and Address fields', 'error');
      return;
    }
    setAddresses([...addresses, { ...newAddress, id: Date.now() }]);
    setNewAddress({ defaultShipping: false, defaultBilling: false, label: '', address: '' });
    showToast('Address added successfully!', 'success');
  };

  const handleRemoveAddress = (id) => {
    if (window.confirm('Are you sure you want to remove this address?')) {
      setAddresses(addresses.filter(addr => addr.id !== id));
      showToast('Address removed successfully!', 'success');
    }
  };

  // Currency handlers
  const handleAddCurrency = () => {
    if (!selectedCurrency) {
      showToast('Please select a currency', 'error');
      return;
    }
    if (vendorCurrencies.some(c => c.currency === selectedCurrency)) {
      showToast('Currency already added', 'error');
      return;
    }
    const currencySymbols = {
      'MYR': 'RM',
      'USD': '$',
      'EUR': '€',
      'SGD': '$'
    };
    const symbol = currencySymbols[selectedCurrency] || selectedCurrency;
    const newCurrency = {
      id: Date.now(),
      currency: selectedCurrency,
      format: `Format Example: ${symbol}1,234.56\nSymbol: ${symbol}\nSymbol Placement: Before Number`
    };
    setVendorCurrencies([...vendorCurrencies, newCurrency]);
    setSelectedCurrency('');
    showToast('Currency added successfully', 'success');
  };

  const handleRemoveCurrency = (id) => {
    if (window.confirm('Are you sure you want to remove this currency?')) {
      setVendorCurrencies(vendorCurrencies.filter(c => c.id !== id));
      showToast('Currency removed successfully', 'success');
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
              {isEdit ? (
                <>
                  <span style={{ fontWeight: '600', color: '#333' }}>{formData.vendorId}</span>
                  <span style={{ margin: '0 0.5rem', color: '#999' }}>|</span>
                  <span style={{ color: '#666' }}>{formData.name}</span>
                </>
              ) : (
                <span style={{ color: '#999', fontStyle: 'italic' }}># To be generated – New Vendor</span>
              )}
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
        <button className="btn-toolbar" onClick={handleCancel}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          Cancel
        </button>
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
                <label>VENDOR ID <span style={{ color: 'red' }}>*</span></label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.vendorId || 'To Be Generated'}
                  readOnly
                  style={{ background: '#f5f5f5', cursor: 'not-allowed' }}
                />
              </div>

              {/* Company Type Fields */}
              {formData.type === 'Company' && (
                <>
                  <div className="detail-field">
                    <label>COMPANY NAME <span style={{ color: 'red' }}>*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      required
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
                </>
              )}

              {/* Individual Type Fields */}
              {formData.type === 'Individual' && (
                <>
                  <div className="detail-field">
                    <label>COMPANY NAME</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                    />
                  </div>
                  <div className="detail-field">
                    <label>JOB TITLE</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.jobTitle}
                      onChange={(e) => handleInputChange('jobTitle', e.target.value)}
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
                    <label>MR./MS.</label>
                    <select
                      className="form-control"
                      value={formData.salutation}
                      onChange={(e) => handleInputChange('salutation', e.target.value)}
                    >
                      <option value="Mr.">Mr.</option>
                      <option value="Ms.">Ms.</option>
                      <option value="Mrs.">Mrs.</option>
                      <option value="Dr.">Dr.</option>
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>NAME <span style={{ color: 'red' }}>*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.individualName}
                      onChange={(e) => handleInputChange('individualName', e.target.value)}
                      placeholder="Enter name"
                      required
                    />
                  </div>
                </>
              )}

              {/* TYPE Field - Common for both */}
              <div className="detail-field">
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>TYPE</label>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <label className="radio-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="type"
                      value="Company"
                      checked={formData.type === 'Company'}
                      onChange={(e) => handleInputChange('type', e.target.value)}
                    />
                    <span>Company</span>
                  </label>
                  <label className="radio-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="type"
                      value="Individual"
                      checked={formData.type === 'Individual'}
                      onChange={(e) => handleInputChange('type', e.target.value)}
                    />
                    <span>Individual</span>
                  </label>
                </div>
              </div>
              
              <div className="detail-field">
                <label>COMMENTS</label>
                <textarea
                  className="form-control"
                  rows="2"
                  value={formData.comments}
                  onChange={(e) => handleInputChange('comments', e.target.value)}
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
              {/* Company Type - Email/Phone/Address */}
              {formData.type === 'Company' && (
                <>
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
                  <div className="detail-field" style={{ gridColumn: 'span 1', gridRow: 'span 2' }}>
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
                </>
              )}

              {/* Individual Type - Email/Phone/Address */}
              {formData.type === 'Individual' && (
                <>
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
                  <div className="detail-field" style={{ gridColumn: 'span 1', gridRow: 'span 3' }}>
                    <label>ADDRESS</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                    />
                    <small style={{color: 'blue', cursor: 'pointer'}}>🗺 Map</small>
                  </div>
                  <div className="detail-field">
                    <label>ALT. EMAIL</label>
                    <input
                      type="email"
                      className="form-control"
                      value={formData.altEmail}
                      onChange={(e) => handleInputChange('altEmail', e.target.value)}
                    />
                  </div>
                  <div className="detail-field">
                    <label>MOBILE PHONE</label>
                    <input
                      type="tel"
                      className="form-control"
                      value={formData.mobilePhone}
                      onChange={(e) => handleInputChange('mobilePhone', e.target.value)}
                    />
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
                    <label>HOME PHONE</label>
                    <input
                      type="tel"
                      className="form-control"
                      value={formData.homePhone}
                      onChange={(e) => handleInputChange('homePhone', e.target.value)}
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
                </>
              )}
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
              className={`tab-btn ${activeTab === 'system-info' ? 'active' : ''}`}
              onClick={() => setActiveTab('system-info')}
            >
              System Information
            </button>
            <button 
              className={`tab-btn ${activeTab === 'time-tracking' ? 'active' : ''}`}
              onClick={() => setActiveTab('time-tracking')}
            >
              Time Tracking
            </button>
            <button 
              className={`tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'subsidiaries' && (
              <div>
                <div style={{ marginBottom: '1.5rem', padding: '1rem', background: '#f8f9fa', borderRadius: '4px' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>SUBSIDIARY</label>
                    <select 
                      className="form-control" 
                      style={{ maxWidth: '400px' }}
                      value={selectedSubsidiary}
                      onChange={(e) => setSelectedSubsidiary(e.target.value)}
                    >
                      <option value="">Select a subsidiary...</option>
                      {subsidiaries.map(sub => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button 
                      className="btn-toolbar-primary" 
                      onClick={handleAddSubsidiary}
                      style={{ padding: '0.5rem 1.5rem' }}
                    >
                      <i className="fas fa-check"></i> Add
                    </button>
                    <button 
                      className="btn-toolbar" 
                      onClick={() => setSelectedSubsidiary('')}
                      style={{ padding: '0.5rem 1.5rem' }}
                    >
                      <i className="fas fa-times"></i> Cancel
                    </button>
                  </div>
                </div>

                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th style={{ width: '50px' }}>REMOVE</th>
                      <th>SUBSIDIARY</th>
                      <th style={{ width: '200px' }}>CREDIT LIMIT</th>
                      <th style={{ width: '200px' }}>TAX CODE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vendorSubsidiaries.length > 0 ? (
                      vendorSubsidiaries.map((sub) => (
                        <tr key={sub.id}>
                          <td style={{ textAlign: 'center' }}>
                            <button 
                              onClick={() => handleRemoveSubsidiary(sub.id)}
                              style={{ 
                                background: 'transparent', 
                                border: 'none', 
                                color: '#dc3545', 
                                cursor: 'pointer',
                                padding: '0.25rem 0.5rem'
                              }}
                              title="Remove"
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                          </td>
                          <td>{sub.subsidiary}</td>
                          <td>
                            <input 
                              type="text" 
                              className="form-control"
                              value={sub.creditLimit || ''}
                              onChange={(e) => {
                                const updated = vendorSubsidiaries.map(s => 
                                  s.id === sub.id ? { ...s, creditLimit: e.target.value } : s
                                );
                                setVendorSubsidiaries(updated);
                              }}
                              placeholder="0.00"
                              style={{ width: '100%' }}
                            />
                          </td>
                          <td>
                            <select 
                              className="form-control"
                              value={sub.taxCode || ''}
                              onChange={(e) => {
                                const updated = vendorSubsidiaries.map(s => 
                                  s.id === sub.id ? { ...s, taxCode: e.target.value } : s
                                );
                                setVendorSubsidiaries(updated);
                              }}
                              style={{ width: '100%' }}
                            >
                              <option value="">- New -</option>
                              <option value="GST_SG:0%">GST_SG:0%</option>
                              <option value="GST_SG:4.5%">GST_SG:4.5%</option>
                              <option value="GST_SG:7%">GST_SG:7%</option>
                              <option value="GST_SG:8%">GST_SG:8%</option>
                              <option value="GST_SG:9%">GST_SG:9%</option>
                              <option value="GST_SG:Zero Rated">GST_SG:Zero Rated</option>
                            </select>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                          No subsidiaries added yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'relationships' && (
              <div style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ marginBottom: '1.5rem', fontSize: '13px', fontWeight: '600', color: '#333' }}>Contacts</h4>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <button 
                      className="btn-toolbar" 
                      onClick={() => {
                        if (window.confirm('Remove all contacts?')) {
                          setVendorContacts([]);
                          showToast('All contacts removed', 'success');
                        }
                      }}
                      style={{ padding: '0.5rem 1.2rem', fontSize: '12px' }}
                    >
                      Remove all
                    </button>
                  </div>
                  
                  <table className="detail-items-table" style={{ marginTop: '1.5rem' }}>
                    <thead>
                      <tr>
                        <th style={{ width: '200px' }}>CONTACT <span style={{ color: 'red' }}>*</span></th>
                        <th style={{ width: '150px' }}>JOB TITLE</th>
                        <th style={{ width: '180px' }}>EMAIL</th>
                        <th style={{ width: '130px' }}>MAIN PHONE</th>
                        <th style={{ width: '200px' }}>SUBSIDIARY <span style={{ color: 'red' }}>*</span></th>
                        <th style={{ width: '150px' }}>ROLE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input 
                            type="text" 
                            className="form-control"
                            value={newContact.contact}
                            onChange={(e) => setNewContact({...newContact, contact: e.target.value})}
                            placeholder="Enter contact name"
                          />
                        </td>
                        <td>
                          <input 
                            type="text" 
                            className="form-control"
                            value={newContact.jobTitle}
                            onChange={(e) => setNewContact({...newContact, jobTitle: e.target.value})}
                          />
                        </td>
                        <td>
                          <input 
                            type="email" 
                            className="form-control"
                            value={newContact.email}
                            onChange={(e) => setNewContact({...newContact, email: e.target.value})}
                          />
                        </td>
                        <td>
                          <input 
                            type="tel" 
                            className="form-control"
                            value={newContact.mainPhone}
                            onChange={(e) => setNewContact({...newContact, mainPhone: e.target.value})}
                          />
                        </td>
                        <td>
                          <select 
                            className="form-control"
                            value={newContact.subsidiary}
                            onChange={(e) => setNewContact({...newContact, subsidiary: e.target.value})}
                          >
                            <option value="">Select...</option>
                            {subsidiaries.map(sub => (
                              <option key={sub} value={sub}>{sub}</option>
                            ))}
                          </select>
                        </td>
                        <td>
                          <select 
                            className="form-control"
                            value={newContact.role}
                            onChange={(e) => setNewContact({...newContact, role: e.target.value})}
                          >
                            <option value="">Select...</option>
                            {contactRoles.map(role => (
                              <option key={role} value={role}>{role}</option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      {vendorContacts.map((contact) => (
                        <tr key={contact.id}>
                          <td>{contact.contact}</td>
                          <td>{contact.jobTitle}</td>
                          <td>{contact.email}</td>
                          <td>{contact.mainPhone}</td>
                          <td>{contact.subsidiary}</td>
                          <td>{contact.role}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                    <button 
                      className="btn-toolbar-primary" 
                      onClick={() => {
                        if (!newContact.contact || !newContact.subsidiary) {
                          showToast('Contact name and subsidiary are required', 'error');
                          return;
                        }
                        const contact = {
                          id: Date.now(),
                          ...newContact
                        };
                        setVendorContacts([...vendorContacts, contact]);
                        setNewContact({
                          contact: '',
                          jobTitle: '',
                          email: '',
                          mainPhone: '',
                          subsidiary: '',
                          role: ''
                        });
                        showToast('Contact added successfully', 'success');
                      }}
                      style={{ padding: '0.5rem 1.5rem' }}
                    >
                      <i className="fas fa-check"></i> Add
                    </button>
                    <button 
                      className="btn-toolbar" 
                      onClick={() => setNewContact({
                        contact: '',
                        jobTitle: '',
                        email: '',
                        mainPhone: '',
                        subsidiary: '',
                        role: ''
                      })}
                      style={{ padding: '0.5rem 1.5rem' }}
                    >
                      <i className="fas fa-times"></i> Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'communication' && (
              <div>
                {/* Communication Sub-tabs */}
                <div className="detail-tabs">
                  <div className="tabs-header">
                    <button 
                      className={`tab-btn ${communicationActiveTab === 'messages' ? 'active' : ''}`}
                      onClick={() => setCommunicationActiveTab('messages')}
                    >
                      Messages
                    </button>
                    <button 
                      className={`tab-btn ${communicationActiveTab === 'activities' ? 'active' : ''}`}
                      onClick={() => setCommunicationActiveTab('activities')}
                    >
                      Activities
                    </button>
                    <button 
                      className={`tab-btn ${communicationActiveTab === 'files' ? 'active' : ''}`}
                      onClick={() => setCommunicationActiveTab('files')}
                    >
                      Files
                    </button>
                    <button 
                      className={`tab-btn ${communicationActiveTab === 'user-notes' ? 'active' : ''}`}
                      onClick={() => setCommunicationActiveTab('user-notes')}
                    >
                      User Notes
                    </button>
                  </div>
                </div>

                {/* Messages Tab */}
                {communicationActiveTab === 'messages' && (
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ fontSize: '11px', color: '#666', marginBottom: '0.25rem', display: 'block' }}>VIEW</label>
                      <select className="form-control" style={{ width: '150px' }}>
                        <option>Default</option>
                      </select>
                    </div>
                    <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                      <button className="btn-toolbar">Attach</button>
                      <button className="btn-toolbar">Letter</button>
                      <button className="btn-toolbar">PDF</button>
                      <button className="btn-toolbar">Fax</button>
                      <button className="btn-toolbar">View History</button>
                      <button className="btn-toolbar">Customize View</button>
                      <button className="btn-toolbar-primary">Email</button>
                      <button className="btn-toolbar-primary">Refresh</button>
                    </div>
                    <table className="detail-items-table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>VIEW</th>
                          <th>DATE</th>
                          <th>AUTHOR</th>
                          <th>PRIMARY RECIPIENT</th>
                          <th>SUBJECT</th>
                          <th>TYPE</th>
                          <th>FILES</th>
                          <th>ATTACHMENTS</th>
                          <th>INTERNAL ONLY</th>
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
                )}

                {/* Activities Tab */}
                {communicationActiveTab === 'activities' && (
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                      <div>
                        <label style={{ fontSize: '11px', color: '#666', marginBottom: '0.25rem', display: 'block' }}>VIEW</label>
                        <select className="form-control" style={{ width: '150px' }}>
                          <option>Default</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ fontSize: '11px', color: '#666', marginBottom: '0.25rem', display: 'block' }}>STATUS</label>
                        <select className="form-control" style={{ width: '150px' }}>
                          <option>- All -</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ fontSize: '11px', color: '#666', marginBottom: '0.25rem', display: 'block' }}>ACTIVITY TYPE</label>
                        <select className="form-control" style={{ width: '150px' }}>
                          <option>- All -</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                      <button className="btn-toolbar">New Task</button>
                      <button className="btn-toolbar">Log Task</button>
                      <button className="btn-toolbar">New Phone Call</button>
                      <button className="btn-toolbar">Log Phone Call</button>
                      <button className="btn-toolbar">New Event</button>
                      <button className="btn-toolbar">Log Event</button>
                      <button className="btn-toolbar">View History</button>
                      <button className="btn-toolbar">Customize View</button>
                    </div>
                    <table className="detail-items-table">
                      <thead>
                        <tr>
                          <th>EDIT</th>
                          <th>TITLE</th>
                          <th>DATE</th>
                          <th>TIME</th>
                          <th>OWNER</th>
                          <th>STATUS</th>
                          <th>ASSIGNED TO</th>
                          <th>TYPE</th>
                          <th>MARK</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="9" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                            No records to show.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Files Tab */}
                {communicationActiveTab === 'files' && (
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ fontSize: '11px', color: '#666', marginBottom: '0.25rem', display: 'block' }}>ATTACH EXISTING FILES</label>
                      <input className="form-control" placeholder="<Type then tab>" style={{ width: '300px' }} />
                    </div>
                    <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                      <button className="btn-toolbar">Attach</button>
                      <button className="btn-toolbar">New File</button>
                    </div>
                    <table className="detail-items-table">
                      <thead>
                        <tr>
                          <th>ATTACHED FILES</th>
                          <th>FOLDER</th>
                          <th>SIZE (KB)</th>
                          <th>LAST MODIFIED</th>
                          <th>DOCUMENT TYPE</th>
                          <th>REMOVE</th>
                          <th>EDIT</th>
                          <th>DOWNLOAD</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="8" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                            No records to show.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {/* User Notes Tab */}
                {communicationActiveTab === 'user-notes' && (
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ fontSize: '11px', color: '#666', marginBottom: '0.25rem', display: 'block' }}>VIEW</label>
                      <select className="form-control" style={{ width: '150px' }}>
                        <option>Default</option>
                      </select>
                    </div>
                    <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                      <button className="btn-toolbar">New Note</button>
                      <button className="btn-toolbar">View History</button>
                      <button className="btn-toolbar">Customize View</button>
                    </div>
                    <table className="detail-items-table">
                      <thead>
                        <tr>
                          <th>EDIT</th>
                          <th>DATE</th>
                          <th>AUTHOR</th>
                          <th>TITLE</th>
                          <th>MEMO</th>
                          <th>DIRECTION</th>
                          <th>TYPE</th>
                          <th>REMOVE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="8" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                            No records to show.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'address' && (
              <div style={{ padding: '1rem' }}>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th style={{ width: '12%' }}>DEFAULT SHIPPING</th>
                      <th style={{ width: '12%' }}>DEFAULT BILLING</th>
                      <th style={{ width: '20%' }}>LABEL</th>
                      <th style={{ width: '46%' }}>ADDRESS</th>
                      <th style={{ width: '10%' }}>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {addresses.map((addr) => (
                      <tr key={addr.id}>
                        <td style={{ textAlign: 'center' }}>{addr.defaultShipping ? 'Yes' : ''}</td>
                        <td style={{ textAlign: 'center' }}>{addr.defaultBilling ? 'Yes' : ''}</td>
                        <td>{addr.label}</td>
                        <td style={{ whiteSpace: 'pre-line' }}>{addr.address}</td>
                        <td style={{ textAlign: 'center' }}>
                          <button 
                            className="btn btn-sm btn-secondary" 
                            onClick={() => handleRemoveAddress(addr.id)}
                            style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                    {/* Editable Row for Adding New Address */}
                    <tr style={{ background: '#f8f9fa' }}>
                      <td style={{ textAlign: 'center', padding: '0.5rem' }}>
                        <input 
                          type="checkbox" 
                          checked={newAddress.defaultShipping} 
                          onChange={(e) => setNewAddress({...newAddress, defaultShipping: e.target.checked})} 
                        />
                      </td>
                      <td style={{ textAlign: 'center', padding: '0.5rem' }}>
                        <input 
                          type="checkbox" 
                          checked={newAddress.defaultBilling} 
                          onChange={(e) => setNewAddress({...newAddress, defaultBilling: e.target.checked})} 
                        />
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={newAddress.label} 
                          onChange={(e) => setNewAddress({...newAddress, label: e.target.value})} 
                          placeholder="e.g., Office, Warehouse"
                          style={{ fontSize: '0.85rem', padding: '0.4rem' }}
                        />
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <textarea 
                          className="form-control" 
                          value={newAddress.address} 
                          onChange={(e) => setNewAddress({...newAddress, address: e.target.value})} 
                          rows="2"
                          placeholder="Enter full address"
                          style={{ fontSize: '0.85rem', padding: '0.4rem' }}
                        />
                      </td>
                      <td style={{ textAlign: 'center', padding: '0.5rem' }}>
                        <button 
                          className="btn-toolbar-primary" 
                          onClick={handleAddAddress}
                          style={{ fontSize: '0.85rem', padding: '0.4rem 1rem' }}
                        >
                          Add
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'financial' && (
              <div style={{ padding: '1rem' }}>
                {/* Financial Sub-tabs */}
                <div style={{ borderBottom: '2px solid #e0e0e0', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0' }}>
                    <button 
                      className={`tab-btn ${financialSubTab === 'currencies' ? 'active' : ''}`}
                      onClick={() => setFinancialSubTab('currencies')}
                      style={{ 
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: financialSubTab === 'currencies' ? '#fff' : 'transparent',
                        borderBottom: financialSubTab === 'currencies' ? '3px solid #dc2626' : '3px solid transparent',
                        cursor: 'pointer',
                        fontWeight: financialSubTab === 'currencies' ? '600' : '400',
                        color: financialSubTab === 'currencies' ? '#dc2626' : '#666'
                      }}
                    >
                      Currencies
                    </button>
                    <button 
                      className={`tab-btn ${financialSubTab === 'accountInfo' ? 'active' : ''}`}
                      onClick={() => setFinancialSubTab('accountInfo')}
                      style={{ 
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: financialSubTab === 'accountInfo' ? '#fff' : 'transparent',
                        borderBottom: financialSubTab === 'accountInfo' ? '3px solid #dc2626' : '3px solid transparent',
                        cursor: 'pointer',
                        fontWeight: financialSubTab === 'accountInfo' ? '600' : '400',
                        color: financialSubTab === 'accountInfo' ? '#dc2626' : '#666'
                      }}
                    >
                      Account Information
                    </button>
                  </div>
                </div>

                {/* Currencies Tab */}
                {financialSubTab === 'currencies' && (
                  <div>
                    <div style={{ marginBottom: '1.5rem', padding: '1rem', background: '#f8f9fa', borderRadius: '4px' }}>
                      <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>CURRENCY <span style={{ color: 'red' }}>*</span></label>
                        <select 
                          className="form-control" 
                          style={{ maxWidth: '400px' }}
                          value={selectedCurrency}
                          onChange={(e) => setSelectedCurrency(e.target.value)}
                        >
                          <option value=""></option>
                          <option>MYR</option>
                          <option>USD</option>
                          <option>EUR</option>
                          <option>SGD</option>
                        </select>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }} onClick={handleAddCurrency}>
                          <i className="fas fa-check"></i> Add
                        </button>
                        <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }} onClick={() => setSelectedCurrency('')}>
                          <i className="fas fa-times"></i> Cancel
                        </button>
                      </div>
                    </div>

                    <table className="detail-items-table">
                      <thead>
                        <tr>
                          <th style={{ width: '50px' }}>REMOVE</th>
                          <th style={{ width: '150px' }}>CURRENCY</th>
                          <th>FORMAT</th>
                        </tr>
                      </thead>
                      <tbody>
                        {vendorCurrencies.length > 0 ? (
                          vendorCurrencies.map((curr) => (
                            <tr key={curr.id}>
                              <td style={{ textAlign: 'center' }}>
                                <button 
                                  onClick={() => handleRemoveCurrency(curr.id)}
                                  style={{ 
                                    background: 'transparent', 
                                    border: 'none', 
                                    color: '#dc3545', 
                                    cursor: 'pointer',
                                    padding: '0.25rem 0.5rem'
                                  }}
                                  title="Remove"
                                >
                                  <i className="fas fa-trash"></i>
                                </button>
                              </td>
                              <td>{curr.currency}</td>
                              <td>
                                <div style={{ fontSize: '12px', color: '#666', whiteSpace: 'pre-line' }}>
                                  {curr.format}
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="3" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                              No currencies added yet.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Account Information Tab */}
                {financialSubTab === 'accountInfo' && (
                  <div>
                    <div className="detail-section">
                      <div className="section-header">
                        <i className="fas fa-chevron-down"></i>
                        <h3>Account Information</h3>
                      </div>
                      <div className="section-body">
                        <div className="detail-grid">
                          <div className="detail-field">
                            <label>LEGAL NAME</label>
                            <input
                              type="text"
                              className="form-control"
                              value={formData.account}
                              onChange={(e) => handleInputChange('account', e.target.value)}
                            />
                          </div>
                          <div className="detail-field">
                            <label>DEFAULT VENDOR PAYMENT ACCOUNT</label>
                            <select
                              className="form-control"
                              value={formData.defaultVendorPaymentAccount}
                              onChange={(e) => handleInputChange('defaultVendorPaymentAccount', e.target.value)}
                            >
                              <option value="">Select...</option>
                              <option value="Cash">Cash</option>
                              <option value="Bank Account">Bank Account</option>
                            </select>
                          </div>
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
                            <label>PRIMARY CURRENCY <span style={{ color: 'red' }}>*</span></label>
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
                            <select
                              className="form-control"
                              value={formData.defaultExpenseAccount}
                              onChange={(e) => handleInputChange('defaultExpenseAccount', e.target.value)}
                            >
                              <option value="">Select...</option>
                              <option value="50400 Cost Of Sales - Tools">50400 Cost Of Sales - Tools</option>
                              <option value="50100 Cost Of Sales">50100 Cost Of Sales</option>
                            </select>
                          </div>
                          <div className="detail-field">
                            <label>TERMS</label>
                            <select
                              className="form-control"
                              value={formData.terms}
                              onChange={(e) => handleInputChange('terms', e.target.value)}
                            >
                              <option value="">Select...</option>
                              <option value="Net 30">Net 30</option>
                              <option value="Net 15">Net 15</option>
                              <option value="COD">COD</option>
                              <option value="Due on Receipt">Due on Receipt</option>
                            </select>
                          </div>
                          <div className="detail-field">
                            <label>DEFAULT PAYABLES ACCOUNT</label>
                            <select
                              className="form-control"
                              value={formData.defaultPayablesAccount}
                              onChange={(e) => handleInputChange('defaultPayablesAccount', e.target.value)}
                            >
                              <option value="">Select...</option>
                              <option value="Accounts Payable">Accounts Payable</option>
                            </select>
                          </div>
                          <div className="detail-field">
                            <label>CREDIT LIMIT</label>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <input
                                type="number"
                                className="form-control"
                                value={formData.creditLimit}
                                onChange={(e) => handleInputChange('creditLimit', e.target.value)}
                                step="0.01"
                                placeholder="0.00"
                                style={{ flex: 1 }}
                              />
                              <span style={{ color: '#666' }}>(SGD)</span>
                            </div>
                          </div>
                          <div className="detail-field">
                            <label>INCOTERM</label>
                            <select
                              className="form-control"
                              value={formData.incoterm}
                              onChange={(e) => handleInputChange('incoterm', e.target.value)}
                            >
                              <option value="">Select...</option>
                              <option value="FOB">FOB</option>
                              <option value="CIF">CIF</option>
                              <option value="EXW">EXW</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="detail-section" style={{ marginTop: '1.5rem' }}>
                      <div className="section-header">
                        <i className="fas fa-chevron-down"></i>
                        <h3>Tax Information</h3>
                      </div>
                      <div className="section-body">
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
                  </div>
                )}
              </div>
            )}

            {activeTab === 'system-info' && (
              <div style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <label style={{ fontSize: '11px', color: '#666', marginBottom: '0.25rem', display: 'block' }}>DATE CREATED</label>
                    <div style={{ fontSize: '13px', color: '#333' }}>27/12/2022 3:47 pm</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="checkbox" style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                    <label style={{ fontSize: '13px', color: '#333', cursor: 'pointer', margin: 0 }}>INACTIVE</label>
                  </div>
                </div>

                {/* System Notes Tabs */}
                <div className="detail-tabs" style={{ marginTop: '1.5rem' }}>
                  <div className="tabs-header">
                    <button className="tab-btn active">
                      System Notes ●
                    </button>
                    <button className="tab-btn">
                      Active Workflows
                    </button>
                    <button className="tab-btn">
                      Workflow History
                    </button>
                  </div>
                  <div className="tabs-content" style={{ marginTop: '1rem' }}>
                    <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
                      <div>
                        <label style={{ fontSize: '11px', color: '#666', marginBottom: '0.25rem', display: 'block' }}>VIEW</label>
                        <select className="form-control" style={{ width: '150px' }}>
                          <option>Default</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ fontSize: '11px', color: '#666', marginBottom: '0.25rem', display: 'block' }}>FIELD <span style={{ color: 'red' }}>*</span></label>
                        <input className="form-control" placeholder="<Type then tab>" style={{ width: '200px' }} />
                      </div>
                      <button className="btn-toolbar">Customize View</button>
                    </div>

                    <table className="detail-items-table">
                      <thead>
                        <tr>
                          <th>DATE <span style={{ color: 'red' }}>▼</span></th>
                          <th>SET BY</th>
                          <th>CONTEXT</th>
                          <th>TYPE</th>
                          <th>FIELD</th>
                          <th>OLD VALUE</th>
                          <th>NEW VALUE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>27/12/2022 3:47 pm</td>
                          <td>TOM -KARTHIGAI SELVI</td>
                          <td>UI</td>
                          <td>Create</td>
                          <td>Record</td>
                          <td>Vendor</td>
                          <td>8879</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'time-tracking' && (
              <div style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ fontSize: '11px', color: '#666', marginBottom: '0.25rem', display: 'block' }}>TIME APPROVER</label>
                  <input className="form-control" placeholder="<Type then tab>" style={{ width: '300px' }} />
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '11px', color: '#666', marginBottom: '0.25rem', display: 'block' }}>VIEW</label>
                    <select className="form-control" style={{ width: '150px' }}>
                      <option>Default</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', color: '#666', marginBottom: '0.25rem', display: 'block' }}>STATUS</label>
                    <select className="form-control" style={{ width: '150px' }}>
                      <option>Either</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', color: '#666', marginBottom: '0.25rem', display: 'block' }}>APPROVED</label>
                    <select className="form-control" style={{ width: '150px' }}>
                      <option>- All -</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn-toolbar">New Time</button>
                  <button className="btn-toolbar">New Weekly Time</button>
                  <button className="btn-toolbar">Customize View</button>
                </div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>EDIT</th>
                      <th>DATE</th>
                      <th>ITEM</th>
                      <th>DURATION</th>
                      <th>APPROVED</th>
                      <th>STATUS</th>
                      <th>TYPE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                        No records to show.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'dashboard' && (
              <div style={{ padding: '1.5rem' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '1.5rem' }}>Vendor Financial Dashboard</h4>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h5 style={{ fontSize: '13px', fontWeight: '600', color: '#666', marginBottom: '1rem' }}>Payment Details</h5>
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>PAYMENT DATE</th>
                        <th>PAYMENT METHOD</th>
                        <th>AMOUNT (SGD)</th>
                        <th>BILL NO</th>
                        <th>STATUS</th>
                        <th>REFERENCE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>18/12/2024</td>
                        <td>Bank Transfer</td>
                        <td>12,500.00</td>
                        <td>BILL-2024-045</td>
                        <td><span style={{ color: '#10b981', fontWeight: '600' }}>Paid</span></td>
                        <td>PMT-20241218-001</td>
                      </tr>
                      <tr>
                        <td>12/12/2024</td>
                        <td>Cheque</td>
                        <td>8,350.75</td>
                        <td>BILL-2024-042</td>
                        <td><span style={{ color: '#10b981', fontWeight: '600' }}>Paid</span></td>
                        <td>CHQ-789456</td>
                      </tr>
                      <tr>
                        <td>08/12/2024</td>
                        <td>Bank Transfer</td>
                        <td>15,200.00</td>
                        <td>BILL-2024-038</td>
                        <td><span style={{ color: '#f59e0b', fontWeight: '600' }}>Pending</span></td>
                        <td>PMT-20241208-005</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h5 style={{ fontSize: '13px', fontWeight: '600', color: '#666', marginBottom: '1rem' }}>Purchase Orders</h5>
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>PO NO</th>
                        <th>DATE</th>
                        <th>DELIVERY DATE</th>
                        <th>AMOUNT (SGD)</th>
                        <th>RECEIVED AMOUNT (SGD)</th>
                        <th>BALANCE (SGD)</th>
                        <th>STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>PO-2024-156</td>
                        <td>02/12/2024</td>
                        <td>18/12/2024</td>
                        <td>12,500.00</td>
                        <td>12,500.00</td>
                        <td>0.00</td>
                        <td><span style={{ color: '#10b981', fontWeight: '600' }}>Completed</span></td>
                      </tr>
                      <tr>
                        <td>PO-2024-148</td>
                        <td>28/11/2024</td>
                        <td>12/12/2024</td>
                        <td>8,350.75</td>
                        <td>8,350.75</td>
                        <td>0.00</td>
                        <td><span style={{ color: '#10b981', fontWeight: '600' }}>Completed</span></td>
                      </tr>
                      <tr>
                        <td>PO-2024-162</td>
                        <td>15/12/2024</td>
                        <td>28/12/2024</td>
                        <td>15,200.00</td>
                        <td>0.00</td>
                        <td>15,200.00</td>
                        <td><span style={{ color: '#f59e0b', fontWeight: '600' }}>In Progress</span></td>
                      </tr>
                      <tr>
                        <td>PO-2024-165</td>
                        <td>20/12/2024</td>
                        <td>05/01/2025</td>
                        <td>9,800.00</td>
                        <td>0.00</td>
                        <td>9,800.00</td>
                        <td><span style={{ color: '#3b82f6', fontWeight: '600' }}>Pending</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h5 style={{ fontSize: '13px', fontWeight: '600', color: '#666', marginBottom: '1rem' }}>Bills</h5>
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>BILL NO</th>
                        <th>DATE</th>
                        <th>DUE DATE</th>
                        <th>AMOUNT (SGD)</th>
                        <th>PAID AMOUNT (SGD)</th>
                        <th>BALANCE (SGD)</th>
                        <th>STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>BILL-2024-045</td>
                        <td>05/12/2024</td>
                        <td>18/12/2024</td>
                        <td>12,500.00</td>
                        <td>12,500.00</td>
                        <td>0.00</td>
                        <td><span style={{ color: '#10b981', fontWeight: '600' }}>Paid</span></td>
                      </tr>
                      <tr>
                        <td>BILL-2024-042</td>
                        <td>01/12/2024</td>
                        <td>14/12/2024</td>
                        <td>8,350.75</td>
                        <td>8,350.75</td>
                        <td>0.00</td>
                        <td><span style={{ color: '#10b981', fontWeight: '600' }}>Paid</span></td>
                      </tr>
                      <tr>
                        <td>BILL-2024-038</td>
                        <td>25/11/2024</td>
                        <td>08/12/2024</td>
                        <td>15,200.00</td>
                        <td>0.00</td>
                        <td>15,200.00</td>
                        <td><span style={{ color: '#ef4444', fontWeight: '600' }}>Overdue</span></td>
                      </tr>
                      <tr>
                        <td>BILL-2024-050</td>
                        <td>18/12/2024</td>
                        <td>31/12/2024</td>
                        <td>9,800.00</td>
                        <td>0.00</td>
                        <td>9,800.00</td>
                        <td><span style={{ color: '#f59e0b', fontWeight: '600' }}>Pending</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <h5 style={{ fontSize: '13px', fontWeight: '600', color: '#666', marginBottom: '1rem' }}>Transaction Reports</h5>
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>TRANSACTION ID</th>
                        <th>DATE</th>
                        <th>TYPE</th>
                        <th>DESCRIPTION</th>
                        <th>DEBIT (SGD)</th>
                        <th>CREDIT (SGD)</th>
                        <th>BALANCE (SGD)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>TXN-V-20241220-001</td>
                        <td>20/12/2024</td>
                        <td>Bill</td>
                        <td>Purchase Bill - Raw Materials</td>
                        <td>9,800.00</td>
                        <td>-</td>
                        <td>45,850.75</td>
                      </tr>
                      <tr>
                        <td>TXN-V-20241218-002</td>
                        <td>18/12/2024</td>
                        <td>Payment</td>
                        <td>Payment Made - Bank Transfer</td>
                        <td>-</td>
                        <td>12,500.00</td>
                        <td>36,050.75</td>
                      </tr>
                      <tr>
                        <td>TXN-V-20241215-003</td>
                        <td>15/12/2024</td>
                        <td>PO</td>
                        <td>Purchase Order - Equipment</td>
                        <td>15,200.00</td>
                        <td>-</td>
                        <td>48,550.75</td>
                      </tr>
                      <tr>
                        <td>TXN-V-20241212-001</td>
                        <td>12/12/2024</td>
                        <td>Payment</td>
                        <td>Payment Made - Cheque</td>
                        <td>-</td>
                        <td>8,350.75</td>
                        <td>33,350.75</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
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

export default CreateVendor;
