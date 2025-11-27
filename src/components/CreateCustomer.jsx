import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateCustomer = ({ isEdit = false, onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [emailPhoneCollapsed, setEmailPhoneCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('relationships');

  // Form state
  const [formData, setFormData] = useState({
    // Primary Information
    customForm: 'TOM Customer Form',
    customerId: isEdit ? '24' : '',
    name: isEdit ? 'Pirtek Asia Pte Ltd' : '',
    companyName: isEdit ? 'Pirtek Asia Pte Ltd' : '',
    type: 'Company',
    parentCompany: '',
    status: 'CUSTOMER-Closed Won',
    salesRep: '',
    webAddress: '',
    category: '',
    defaultOrderPriority: '',
    comments: '',
    
    // Contact Information
    email: '',
    phone: '',
    altPhone: '',
    fax: '',
    address: isEdit ? '101A Pioneer Road, Singapore - 639606.' : '',
    
    // Classification
    primarySubsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    lastSalesActivity: '',
    
    // Financial
    terms: '',
    priceLevel: '',
    creditLimit: '',
    taxable: false,
    taxItem: '',
    currency: 'SGD'
  });

  // Sub-table data
  const [contacts, setContacts] = useState([]);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      defaultShipping: true,
      defaultBilling: true,
      residential: false,
      label: 'Singapore - 639606',
      address: '101A Pioneer Road'
    }
  ]);

  const customForms = [
    'TOM Customer Form',
    'Standard Customer Form',
    'Standard Lead Form',
    'TOM Lead Form'
  ];

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'Tech Electric & Automation Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Offshore Marine (DQ) Pte Ltd',
    'Tech Offshore Marine (s) Pte Ltd',
    'Tech Offshore Marine (SV) Pte Ltd'
  ];

  const customerStatuses = [
    'PROSPECT-In Discussion',
    'PROSPECT-Identified Decision Makers',
    'PROSPECT-Proposal',
    'PROSPECT-In Negotiation',
    'PROSPECT-Purchasing',
    'CUSTOMER-Lost Customer',
    'CUSTOMER-Closed Won',
    'CUSTOMER-Renewal'
  ];

  const categories = [
    'Direct Owner',
    'Oil & Gas',
    'Other',
    'Shipyard'
  ];

  const salesReps = [
    '- Reassign Using Territories -',
    'MEP049 Camila Shirde',
    'MEP054 Kandasamy Kannan',
    'MEP057 Mahendran S/O Minisamy',
    'MEP074 Sasapu Venkateswara Rao',
    'Praveen Chandraseka',
    'TDQ059 Kumarasamy Madhavan Subbiah'
  ];

  const parentCompanies = [
    '100 Baroid Surface Solutions ,Halliburton Energy Services Inc',
    '1000 TEAM LEAD CONSTRUCTION PTE LTD',
    '1001 TECH ONSHORE MEP-PREFABRICATORS PTE LTD',
    '1002 TECH MARINE OFFSHORE (S) PTE LTD',
    '1003 TECH ELECTRIC AUTOMATION PTE LTD',
    '1004 TECH OFFSHORE MARINE (DQ) PTE LTD',
    '1005 TECH OFFSHORE MARINE (SV) PTE LTD',
    '1006 Netco Marine Pte Ltd',
    '1007 DAIKINAIRCONDITIONING(SINGAPORE)PTE.LTD'
  ];

  const contactRoles = [
    'Alternate Contact',
    'Consultant',
    'Decision Maker',
    'Order Creator',
    'Primary Contact'
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
      showToast('Customer name is required', 'error');
      return;
    }
    
    showToast(`Customer ${isEdit ? 'updated' : 'created'} successfully!`, 'success');
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
          <i className="fas fa-user"></i>
          <div>
            <h1>Customer</h1>
            <div className="detail-subtitle">
              <span>{formData.customerId} ({formData.name})</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">List</button>
          <button className="btn-action">View Dashboard</button>
          <button className="btn-action">View Customer 360</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
          <button className="btn-action">More</button>
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
          Merge
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
                <label>CUSTOM FORM <span style={{color: 'orange'}}>*</span></label>
                <select
                  className="form-control"
                  value={formData.customForm}
                  onChange={(e) => handleInputChange('customForm', e.target.value)}
                >
                  {customForms.map(form => (
                    <option key={form} value={form}>{form}</option>
                  ))}
                </select>
              </div>
              <div className="detail-field">
                <label>PARENT COMPANY</label>
                <select
                  className="form-control"
                  value={formData.parentCompany}
                  onChange={(e) => handleInputChange('parentCompany', e.target.value)}
                >
                  <option value="">&lt;Type then tab&gt;</option>
                  {parentCompanies.map(company => (
                    <option key={company} value={company}>{company}</option>
                  ))}
                </select>
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
                <label>CUSTOMER ID <span style={{color: 'orange'}}>*</span></label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.customerId}
                  onChange={(e) => handleInputChange('customerId', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>STATUS <span style={{color: 'orange'}}>*</span></label>
                <select
                  className="form-control"
                  value={formData.status}
                  onChange={(e) => handleInputChange('status', e.target.value)}
                >
                  {customerStatuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
              <div className="detail-field">
                <label>DEFAULT ORDER PRIORITY</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.defaultOrderPriority}
                  onChange={(e) => handleInputChange('defaultOrderPriority', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>NAME</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>SALES REP</label>
                <select
                  className="form-control"
                  value={formData.salesRep}
                  onChange={(e) => handleInputChange('salesRep', e.target.value)}
                >
                  <option value=""></option>
                  {salesReps.map(rep => (
                    <option key={rep} value={rep}>{rep}</option>
                  ))}
                </select>
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
                <label>WEB ADDRESS</label>
                <input
                  type="url"
                  className="form-control"
                  value={formData.webAddress}
                  onChange={(e) => handleInputChange('webAddress', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>COMPANY NAME <span style={{color: 'orange'}}>*</span></label>
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
                <label>PRIMARY SUBSIDIARY <span style={{color: 'orange'}}>*</span></label>
                <select
                  className="form-control"
                  value={formData.primarySubsidiary}
                  onChange={(e) => handleInputChange('primarySubsidiary', e.target.value)}
                >
                  {subsidiaries.map(subsidiary => (
                    <option key={subsidiary} value={subsidiary}>{subsidiary}</option>
                  ))}
                </select>
              </div>
              <div className="detail-field">
                <label>LAST SALES ACTIVITY</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.lastSalesActivity}
                  onChange={(e) => handleInputChange('lastSalesActivity', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
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
              className={`tab-btn ${activeTab === 'sales' ? 'active' : ''}`}
              onClick={() => setActiveTab('sales')}
            >
              Sales
            </button>
            <button 
              className={`tab-btn ${activeTab === 'marketing' ? 'active' : ''}`}
              onClick={() => setActiveTab('marketing')}
            >
              Marketing
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
              className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`}
              onClick={() => setActiveTab('custom')}
            >
              Custom
            </button>
            <button 
              className={`tab-btn ${activeTab === 'access' ? 'active' : ''}`}
              onClick={() => setActiveTab('access')}
            >
              Access
            </button>
            <button 
              className={`tab-btn ${activeTab === 'subsidiaries' ? 'active' : ''}`}
              onClick={() => setActiveTab('subsidiaries')}
            >
              Subsidiaries
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'relationships' && (
              <div>
                <div style={{ marginBottom: '1rem' }}>
                  <h4>OTHER RELATIONSHIPS</h4>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <h4>Contacts</h4>
                    <h4>Subcustomers</h4>
                  </div>
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
                        <th>MESSAGES/MEDIA LAST OPTIN KEYWORD</th>
                        <th>MESSAGES/MEDIA EXPIRY ENTITY</th>
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
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <button className="btn btn-primary">Save</button>
                    <button className="btn btn-secondary">Cancel</button>
                    <button className="btn btn-secondary">Merge</button>
                    <button className="btn btn-secondary"><i className="fas fa-print"></i></button>
                    <button className="btn btn-secondary">Actions</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'communication' && (
              <div>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ marginBottom: '1rem' }}>Messages</h4>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <h4>Activities</h4>
                    <h4>Files</h4>
                    <h4>User_Notes</h4>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label>VIEW</label>
                      <select className="form-control" style={{ width: '200px' }}>
                        <option>Default</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <button className="btn btn-primary">Email</button>
                    <button className="btn btn-secondary">Attach</button>
                    <button className="btn btn-secondary">Letter</button>
                    <button className="btn btn-secondary">PDF</button>
                    <button className="btn btn-secondary">Fax</button>
                    <button className="btn btn-secondary">Refresh</button>
                    <button className="btn btn-secondary">View History</button>
                    <button className="btn btn-secondary">Customize View</button>
                  </div>
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>DATE</th>
                        <th>AUTHOR</th>
                        <th>MEMO/RECIPIENT</th>
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
                        <td colSpan="9" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
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
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>DEFAULT SHIPPING</th>
                      <th>DEFAULT BILLING</th>
                      <th>RESIDENTIAL ADDRESS</th>
                      <th>LABEL</th>
                      <th>ADDRESS</th>
                      <th>EDIT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {addresses.map(addr => (
                      <tr key={addr.id}>
                        <td>{addr.defaultShipping ? 'Yes' : ''}</td>
                        <td>{addr.defaultBilling ? 'Yes' : ''}</td>
                        <td>{addr.residential ? 'Yes' : ''}</td>
                        <td>{addr.label}</td>
                        <td>{addr.address}</td>
                        <td><button className="view-link">Edit</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'sales' && (
              <div>
                <div style={{ marginBottom: '2rem' }}>
                  <h4>TERRITORY</h4>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <h4>Opportunities</h4>
                  <h4>Transactions</h4>
                  <h4>Items Purchased</h4>
                  <h4>Upsell</h4>
                  <h4>Projects</h4>
                  <h4>Qualification</h4>
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label>VIEW</label>
                    <select className="form-control" style={{ width: '200px' }}>
                      <option>Opportunity Default</option>
                    </select>
                  </div>
                  <div>
                    <label>STATUS</label>
                    <select className="form-control" style={{ width: '200px' }}>
                      <option>- All -</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <button className="btn btn-primary">New Enquiry</button>
                  <button className="btn btn-secondary">Customize View</button>
                </div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>EDIT</th>
                      <th>DATE</th>
                      <th>TITLE</th>
                      <th>DOCUMENT NUMBER</th>
                      <th>CUSTOMER</th>
                      <th>ENQUIRY STATUS</th>
                      <th>EXPECTED CLOSE</th>
                      <th>PROJECTED TOTAL</th>
                      <th>PROBABILITY</th>
                      <th>FORECAST TYPE</th>
                      <th>APPROVAL STATUS</th>
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

            {activeTab === 'marketing' && (
              <div>
                <div className={`detail-section`}>
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Lead Information</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>LEAD SOURCE</label>
                        <select className="form-control">
                          <option></option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <h4 style={{ marginBottom: '1rem' }}>Online Forms</h4>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label>FORM</label>
                      <select className="form-control" style={{ width: '200px' }}>
                        <option>&lt;Type then tab&gt;</option>
                      </select>
                    </div>
                    <div>
                      <label>DATE SENT</label>
                      <input type="date" className="form-control" style={{ width: '200px' }} />
                    </div>
                    <div>
                      <label>CONTACT</label>
                      <select className="form-control" style={{ width: '200px' }}>
                        <option>&lt;Type then tab&gt;</option>
                      </select>
                    </div>
                    <div>
                      <label>LEAD SOURCE</label>
                      <select className="form-control" style={{ width: '200px' }}>
                        <option>&lt;Type then tab&gt;</option>
                      </select>
                    </div>
                    <div>
                      <label>CAMPAIGN EVENT</label>
                      <select className="form-control" style={{ width: '200px' }}>
                        <option>&lt;Type then tab&gt;</option>
                      </select>
                    </div>
                  </div>
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>FORM</th>
                        <th>DATE SENT</th>
                        <th>CONTACT</th>
                        <th>LEAD SOURCE</th>
                        <th>CAMPAIGN EVENT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="5" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'financial' && (
              <div>
                <div className={`detail-section`}>
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Account Information</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>ACCOUNT</label>
                        <select className="form-control">
                          <option></option>
                        </select>
                      </div>
                      <div className="detail-field">
                        <label>END DATE</label>
                        <input type="date" className="form-control" />
                      </div>
                      <div className="detail-field">
                        <label>PRIMARY CURRENCY</label>
                        <select className="form-control">
                          <option>SGD</option>
                        </select>
                      </div>
                      <div className="detail-field">
                        <label>DEFAULT RECEIVABLES ACCOUNT</label>
                        <select className="form-control">
                          <option>Use System Preference</option>
                        </select>
                      </div>
                      <div className="detail-field">
                        <label>REMINDER DAYS</label>
                        <input type="number" className="form-control" />
                      </div>
                      <div className="detail-field">
                        <label>TERMS</label>
                        <select className="form-control">
                          <option></option>
                        </select>
                      </div>
                      <div className="detail-field">
                        <label>START DATE</label>
                        <input type="date" className="form-control" />
                      </div>
                      <div className="detail-field">
                        <label>PRICE LEVEL</label>
                        <select className="form-control">
                          <option></option>
                        </select>
                      </div>
                      <div className="detail-field">
                        <label>CREDIT LIMIT</label>
                        <input type="text" className="form-control" placeholder="HOLD AUTO" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`detail-section`}>
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Tax Information</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>TAX REG. NUMBER</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="detail-field">
                        <label>TAX ROUNDING METHOD</label>
                        <select className="form-control">
                          <option>Round Off</option>
                        </select>
                      </div>
                      <div className="detail-field">
                        <label>RESALE NUMBER</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="detail-field">
                        <label>TAX ROUNDING PRECISION</label>
                        <select className="form-control">
                          <option>0.01 and Below</option>
                        </select>
                      </div>
                      <div className="detail-field">
                        <label>TAX ITEM</label>
                        <select className="form-control">
                          <option></option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`detail-section`}>
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Balance Information</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>BALANCE</label>
                        <input type="text" className="form-control" value="0.00" readOnly />
                      </div>
                      <div className="detail-field">
                        <label>OVERDUE BALANCE</label>
                        <input type="text" className="form-control" value="0.00" readOnly />
                      </div>
                      <div className="detail-field">
                        <label>DAYS OVERDUE</label>
                        <input type="text" className="form-control" readOnly />
                      </div>
                      <div className="detail-field">
                        <label>UNBILLED BALANCE</label>
                        <input type="text" className="form-control" value="0.00" readOnly />
                      </div>
                      <div className="detail-field">
                        <label>UNBILLED ORDERS</label>
                        <input type="text" className="form-control" value="0.00" readOnly />
                      </div>
                      <div className="detail-field">
                        <label>DEPOSIT BALANCE</label>
                        <input type="text" className="form-control" value="0.00" readOnly />
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <h4>Currencies</h4>
                  <h4>Credit Cards</h4>
                  <h4>Group Pricing</h4>
                  <h4>Item Pricing</h4>
                  <h4>Time Tracking</h4>
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>CURRENCY</th>
                        <th>BALANCE</th>
                        <th>DEPOSIT BALANCE</th>
                        <th>OVERDUE BALANCE</th>
                        <th>UNBILLED ORDERS</th>
                        <th>FORMAT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>SGD</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>Symbol: S$ Symbol Placement: Before Number</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>NUMBER FORMAT</label>
                    <select className="form-control">
                      <option></option>
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>SHIP COMPLETE</label>
                    <select className="form-control">
                      <option></option>
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>NEGATIVE NUMBER FORMAT</label>
                    <select className="form-control">
                      <option></option>
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>SHIPPING CARRIER</label>
                    <select className="form-control">
                      <option>More</option>
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>EMAIL PREFERENCE</label>
                    <select className="form-control">
                      <option>Default</option>
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>SHIPPING METHOD</label>
                    <select className="form-control">
                      <option></option>
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>PRINT ON CHECK AS</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="detail-field">
                    <label>ALCOHOL RECIPIENT TYPE</label>
                    <select className="form-control">
                      <option>Consumer</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <h4>SEND TRANSACTIONS VIA EMAIL</h4>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>EMAIL</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>PRINT</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>FAX</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'system-info' && (
              <div>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>DATE CREATED</label>
                    <input type="text" className="form-control" value={new Date().toLocaleString()} readOnly />
                  </div>
                  <div className="detail-field">
                    <label>INACTIVE</label>
                    <input type="checkbox" />
                  </div>
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <h4>System Notes</h4>
                  <h4>Active Workflows</h4>
                  <h4>Workflow History</h4>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label>VIEW</label>
                      <select className="form-control" style={{ width: '200px' }}>
                        <option>Default</option>
                      </select>
                    </div>
                    <div>
                      <label>FIELD</label>
                      <select className="form-control" style={{ width: '200px' }}>
                        <option>&lt;Type then tab&gt;</option>
                      </select>
                    </div>
                  </div>
                  <button className="btn btn-secondary">Customize View</button>
                  <table className="detail-items-table" style={{ marginTop: '1rem' }}>
                    <thead>
                      <tr>
                        <th>DATE</th>
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
                        <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'subsidiaries' && (
              <div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>SUBSIDIARY</th>
                      <th>PRIMARY</th>
                      <th>INACTIVE</th>
                      <th>BALANCE</th>
                      <th>UNBILLED ORDERS</th>
                      <th>DEPOSIT BALANCE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{formData.primarySubsidiary}</td>
                      <td>Yes</td>
                      <td></td>
                      <td>0.00 (SGD)</td>
                      <td>0.00 (SGD)</td>
                      <td>0.00 (SGD)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Other tabs with placeholder content */}
            {['custom', 'access'].includes(activeTab) && (
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

export default CreateCustomer;
