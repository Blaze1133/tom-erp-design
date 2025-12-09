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
  const [vendorCurrencies, setVendorCurrencies] = useState([
    {
      id: 1,
      currency: 'SGD',
      balance: '0.00',
      prepaymentBalance: '0.00',
      unbilledOrders: '0.00'
    }
  ]);
  const [newCurrency, setNewCurrency] = useState('');
  const [currenciesActiveTab, setCurrenciesActiveTab] = useState('currencies');
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
              <div className="detail-field">
                <label>NAME <span style={{ color: 'red' }}>*</span></label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
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
                <label>WEB ADDRESS</label>
                <input
                  type="url"
                  className="form-control"
                  value={formData.webAddress}
                  onChange={(e) => handleInputChange('webAddress', e.target.value)}
                />
              </div>
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
                <label>ADDRESS <span style={{ color: 'red' }}>*</span></label>
                <textarea
                  className="form-control"
                  rows="2"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                />
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
              <div className="detail-field" style={{ display: 'none' }}>
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
              <div style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.2rem' }}>
                    Add Address
                  </button>
                </div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th style={{ width: '120px', textAlign: 'center' }}>DEFAULT SHIPPING</th>
                      <th style={{ width: '120px', textAlign: 'center' }}>DEFAULT BILLING</th>
                      <th style={{ width: '200px' }}>LABEL</th>
                      <th>ADDRESS</th>
                      <th style={{ width: '100px', textAlign: 'center' }}>EDIT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {addresses.map((addr) => (
                      <tr key={addr.id}>
                        <td style={{ textAlign: 'center' }}>
                          <input type="checkbox" checked={addr.defaultShipping} style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <input type="checkbox" checked={addr.defaultBilling} style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                        </td>
                        <td>
                          <input type="text" className="form-control" value={addr.label} readOnly style={{ background: '#fff' }} />
                        </td>
                        <td>
                          <textarea className="form-control" rows="2" value={addr.address} readOnly style={{ background: '#fff', resize: 'vertical' }} />
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <button className="view-link" style={{ color: '#007bff', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}>
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'financial' && (
              <div style={{ padding: '1.5rem' }}>
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


                {/* Tax Information */}
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

                {/* Balance Information */}
                <div className="detail-section" style={{ marginTop: '1.5rem' }}>
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Balance Information</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>BALANCE</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <input
                            type="text"
                            className="form-control"
                            value="0.00"
                            readOnly
                            style={{ background: '#f5f5f5', flex: 1 }}
                          />
                          <span style={{ color: '#666' }}>(SGD)</span>
                        </div>
                      </div>
                      <div className="detail-field">
                        <label>UNBILLED ORDERS</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <input
                            type="text"
                            className="form-control"
                            value="0.00"
                            readOnly
                            style={{ background: '#f5f5f5', flex: 1 }}
                          />
                          <span style={{ color: '#666' }}>(SGD)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Information */}
                <div className="detail-section" style={{ marginTop: '1.5rem' }}>
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Project Information</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>PROJECT RESOURCE</label>
                        <input
                          type="checkbox"
                          style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vendor Bill Matching */}
                <div className="detail-section" style={{ marginTop: '1.5rem' }}>
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Vendor Bill Matching</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>VENDOR BILL - PURCHASE ORDER QUANTITY TOLERANCE</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="0.00"
                        />
                      </div>
                      <div className="detail-field">
                        <label>VENDOR BILL - ITEM RECEIPT QUANTITY TOLERANCE</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="0.00"
                        />
                      </div>
                      <div className="detail-field">
                        <label>VENDOR BILL - PURCHASE ORDER AMOUNT TOLERANCE</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="0.00"
                        />
                      </div>
                      <div className="detail-field">
                        <label>VENDOR BILL - ITEM RECEIPT AMOUNT TOLERANCE</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="0.00"
                        />
                      </div>
                      <div className="detail-field">
                        <label>VENDOR BILL - PURCHASE ORDER QUANTITY DIFFERENCE</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="0.00"
                        />
                      </div>
                      <div className="detail-field">
                        <label>VENDOR BILL - ITEM RECEIPT QUANTITY DIFFERENCE</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="0.00"
                        />
                      </div>
                      <div className="detail-field">
                        <label>PREPAYMENT BALANCE</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <input
                            type="text"
                            className="form-control"
                            value="0.00"
                            readOnly
                            style={{ background: '#f5f5f5', flex: 1 }}
                          />
                          <span style={{ color: '#666' }}>(SGD)</span>
                        </div>
                      </div>
                      <div className="detail-field">
                        <label>BILLING CLASS</label>
                        <select className="form-control">
                          <option value="">Select...</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Currencies Sub-table with Tabs */}
                <div className="detail-section" style={{ marginTop: '1.5rem' }}>
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Currencies</h3>
                  </div>
                  <div className="section-body">
                    {/* Tabs */}
                    <div className="detail-tabs" style={{ marginBottom: '1rem' }}>
                      <div className="tabs-header">
                        <button 
                          className={`tab-btn ${currenciesActiveTab === 'currencies' ? 'active' : ''}`}
                          onClick={() => setCurrenciesActiveTab('currencies')}
                        >
                          Currencies ●
                        </button>
                        <button 
                          className={`tab-btn ${currenciesActiveTab === 'pricing' ? 'active' : ''}`}
                          onClick={() => setCurrenciesActiveTab('pricing')}
                        >
                          Pricing Schedules
                        </button>
                        <button 
                          className={`tab-btn ${currenciesActiveTab === 'transactions' ? 'active' : ''}`}
                          onClick={() => setCurrenciesActiveTab('transactions')}
                        >
                          Transactions ●
                        </button>
                        <button 
                          className={`tab-btn ${currenciesActiveTab === 'items' ? 'active' : ''}`}
                          onClick={() => setCurrenciesActiveTab('items')}
                        >
                          Items
                        </button>
                      </div>
                    </div>

                    {/* Currencies Tab */}
                    {currenciesActiveTab === 'currencies' && (
                      <div>
                        <table className="detail-items-table">
                          <thead>
                            <tr>
                              <th style={{ width: '200px' }}>CURRENCY <span style={{ color: 'red' }}>*</span></th>
                              <th style={{ width: '150px' }}>BALANCE</th>
                              <th style={{ width: '180px' }}>PREPAYMENT BALANCE</th>
                              <th style={{ width: '150px' }}>UNBILLED ORDERS</th>
                            </tr>
                          </thead>
                          <tbody>
                            {vendorCurrencies.map((curr) => (
                              <tr key={curr.id}>
                                <td>
                                  <span style={{ 
                                    background: '#5a6c7d', 
                                    color: 'white', 
                                    padding: '0.25rem 0.75rem', 
                                    borderRadius: '3px',
                                    fontSize: '12px',
                                    fontWeight: '500'
                                  }}>
                                    {curr.currency}
                                  </span>
                                </td>
                                <td>{curr.balance}</td>
                                <td>{curr.prepaymentBalance}</td>
                                <td>{curr.unbilledOrders}</td>
                              </tr>
                            ))}
                            <tr>
                              <td>
                                <select 
                                  className="form-control"
                                  value={newCurrency}
                                  onChange={(e) => setNewCurrency(e.target.value)}
                                >
                                  <option value="">Select...</option>
                                  <option value="SGD">SGD</option>
                                  <option value="USD">USD</option>
                                  <option value="EUR">EUR</option>
                                  <option value="INR">INR</option>
                                  <option value="MYR">MYR</option>
                                </select>
                              </td>
                              <td>
                                <input 
                                  type="text" 
                                  className="form-control" 
                                  value="0.00" 
                                  readOnly
                                  style={{ background: '#f5f5f5' }}
                                />
                              </td>
                              <td>
                                <input 
                                  type="text" 
                                  className="form-control" 
                                  value="0.00" 
                                  readOnly
                                  style={{ background: '#f5f5f5' }}
                                />
                              </td>
                              <td>
                                <input 
                                  type="text" 
                                  className="form-control" 
                                  value="0.00" 
                                  readOnly
                                  style={{ background: '#f5f5f5' }}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                          <button 
                            className="btn-toolbar-primary" 
                            onClick={() => {
                              if (!newCurrency) {
                                showToast('Please select a currency', 'error');
                                return;
                              }
                              if (vendorCurrencies.some(c => c.currency === newCurrency)) {
                                showToast('Currency already added', 'error');
                                return;
                              }
                              const currency = {
                                id: Date.now(),
                                currency: newCurrency,
                                balance: '0.00',
                                prepaymentBalance: '0.00',
                                unbilledOrders: '0.00'
                              };
                              setVendorCurrencies([...vendorCurrencies, currency]);
                              setNewCurrency('');
                              showToast('Currency added successfully', 'success');
                            }}
                            style={{ padding: '0.5rem 1.5rem' }}
                          >
                            <i className="fas fa-check"></i> Add
                          </button>
                          <button 
                            className="btn-toolbar" 
                            onClick={() => setNewCurrency('')}
                            style={{ padding: '0.5rem 1.5rem' }}
                          >
                            <i className="fas fa-times"></i> Cancel
                          </button>
                          <button 
                            className="btn-toolbar" 
                            style={{ padding: '0.5rem 1.5rem' }}
                          >
                            <i className="fas fa-trash"></i> Remove
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Pricing Schedules Tab */}
                    {currenciesActiveTab === 'pricing' && (
                      <div>
                        <div style={{ marginBottom: '1rem' }}>
                          <strong>New Pricing Schedule</strong>
                        </div>
                        <table className="detail-items-table">
                          <thead>
                            <tr>
                              <th>SCHEDULE</th>
                              <th style={{ textAlign: 'right' }}>▲ BASE DISCOUNT</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="2" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                                No records to show.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Transactions Tab */}
                    {currenciesActiveTab === 'transactions' && (
                      <div>
                        <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                          <div>
                            <label style={{ fontSize: '11px', color: '#666', marginBottom: '0.25rem', display: 'block' }}>VIEW</label>
                            <select className="form-control" style={{ width: '200px' }}>
                              <option>Search Project</option>
                            </select>
                          </div>
                          <div>
                            <label style={{ fontSize: '11px', color: '#666', marginBottom: '0.25rem', display: 'block' }}>CUSTOMER SUB OF <span style={{ color: 'red' }}>*</span></label>
                            <input className="form-control" placeholder="<Type then tab>" style={{ width: '200px' }} />
                          </div>
                        </div>
                        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                          <button className="btn-toolbar">New Purchase Order</button>
                          <button className="btn-toolbar">New Bill</button>
                          <button className="btn-toolbar">Customize View</button>
                        </div>
                        <table className="detail-items-table">
                          <thead>
                            <tr>
                              <th>EDIT</th>
                              <th>DATE <span style={{ color: 'red' }}>*</span></th>
                              <th>TYPE</th>
                              <th>DOCUMENT NUMBER</th>
                              <th>VENDOR</th>
                              <th>ACCOUNT</th>
                              <th>MEMO</th>
                              <th>ITEM</th>
                              <th>ITEM QTY</th>
                              <th>ITEM UNIT PRICE</th>
                              <th>AMOUNT</th>
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

                    {/* Items Tab */}
                    {currenciesActiveTab === 'items' && (
                      <div>
                        <div style={{ marginBottom: '1rem' }}>
                          <select className="form-control" style={{ width: '200px' }}>
                            <option>Vendor Items</option>
                          </select>
                        </div>
                        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                          <button className="btn-toolbar">Import Price List...</button>
                          <button className="btn-toolbar">Customize View</button>
                        </div>
                        <table className="detail-items-table">
                          <thead>
                            <tr>
                              <th>EDIT</th>
                              <th>NAME</th>
                              <th>PURCHASE DESCRIPTION</th>
                              <th>VENDOR CODE</th>
                              <th>VENDOR PRICE</th>
                              <th>VENDOR SCHEDULE</th>
                              <th>VENDOR PRICE CURRENCY</th>
                              <th>BASE PRICE</th>
                              <th>BOX</th>
                              <th>ROW</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="10" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                                No records to show.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
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
