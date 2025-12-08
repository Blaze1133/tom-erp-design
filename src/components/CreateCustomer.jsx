import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateCustomer = ({ isEdit = false, onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [emailPhoneCollapsed, setEmailPhoneCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('relationships');
  const [financialSubTab, setFinancialSubTab] = useState('currencies');
  const [salesSubTab, setSalesSubTab] = useState('opportunities');
  const [communicationSubTab, setCommunicationSubTab] = useState('messages');
  const [relationshipsSubTab, setRelationshipsSubTab] = useState('contacts');

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
  const [customerSubsidiaries, setCustomerSubsidiaries] = useState([
    {
      id: 1,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      primary: true,
      inactive: false
    }
  ]);
  const [selectedSubsidiary, setSelectedSubsidiary] = useState('');
  
  // Financial tab states
  const [currencies, setCurrencies] = useState([
    { id: 1, currency: 'MYR', format: 'Format Example: RM1,234.56\nSymbol: RM\nSymbol Placement: Before Number' }
  ]);
  const [selectedCurrency, setSelectedCurrency] = useState('');
  
  const [creditCards, setCreditCards] = useState([]);
  const [creditCardForm, setCreditCardForm] = useState({
    cardNumber: '',
    expirationDate: '',
    cardholderName: ''
  });
  
  const [groupPricing, setGroupPricing] = useState([]);
  const [groupPricingForm, setGroupPricingForm] = useState({
    pricingGroup: '',
    priceLevel: ''
  });
  
  const [itemPricing, setItemPricing] = useState([]);
  const [itemPricingForm, setItemPricingForm] = useState({
    item: '',
    priceLevel: 'Base Price',
    currency: '',
    unitPrice: ''
  });

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

  const handleAddSubsidiary = () => {
    if (!selectedSubsidiary) {
      showToast('Please select a subsidiary', 'error');
      return;
    }
    
    // Check if subsidiary already exists
    if (customerSubsidiaries.some(s => s.subsidiary === selectedSubsidiary)) {
      showToast('Subsidiary already added', 'error');
      return;
    }
    
    const newSubsidiary = {
      id: Date.now(),
      subsidiary: selectedSubsidiary,
      primary: customerSubsidiaries.length === 0,
      inactive: false
    };
    
    setCustomerSubsidiaries([...customerSubsidiaries, newSubsidiary]);
    setSelectedSubsidiary('');
    showToast('Subsidiary added successfully', 'success');
  };

  const handleRemoveSubsidiary = (id) => {
    if (window.confirm('Are you sure you want to remove this subsidiary?')) {
      setCustomerSubsidiaries(customerSubsidiaries.filter(s => s.id !== id));
      showToast('Subsidiary removed successfully', 'success');
    }
  };

  // Currency handlers
  const handleAddCurrency = () => {
    if (!selectedCurrency) {
      showToast('Please select a currency', 'error');
      return;
    }
    if (currencies.some(c => c.currency === selectedCurrency)) {
      showToast('Currency already added', 'error');
      return;
    }
    const newCurrency = {
      id: Date.now(),
      currency: selectedCurrency,
      format: `Format Example: ${selectedCurrency}1,234.56\nSymbol: ${selectedCurrency}\nSymbol Placement: Before Number`
    };
    setCurrencies([...currencies, newCurrency]);
    setSelectedCurrency('');
    showToast('Currency added successfully', 'success');
  };

  const handleRemoveCurrency = (id) => {
    if (window.confirm('Are you sure you want to remove this currency?')) {
      setCurrencies(currencies.filter(c => c.id !== id));
      showToast('Currency removed successfully', 'success');
    }
  };

  // Credit Card handlers
  const handleAddCreditCard = () => {
    if (!creditCardForm.cardNumber) {
      showToast('Credit card number is required', 'error');
      return;
    }
    const newCard = {
      id: Date.now(),
      ...creditCardForm,
      cardType: 'Unknown',
      cardState: 'Unknown',
      memo: '',
      defaultCard: false
    };
    setCreditCards([...creditCards, newCard]);
    setCreditCardForm({ cardNumber: '', expirationDate: '', cardholderName: '' });
    showToast('Credit card added successfully', 'success');
  };

  const handleRemoveCreditCard = (id) => {
    if (window.confirm('Are you sure you want to remove this credit card?')) {
      setCreditCards(creditCards.filter(c => c.id !== id));
      showToast('Credit card removed successfully', 'success');
    }
  };

  // Group Pricing handlers
  const handleAddGroupPricing = () => {
    if (!groupPricingForm.pricingGroup || !groupPricingForm.priceLevel) {
      showToast('Pricing group and price level are required', 'error');
      return;
    }
    const newPricing = {
      id: Date.now(),
      ...groupPricingForm
    };
    setGroupPricing([...groupPricing, newPricing]);
    setGroupPricingForm({ pricingGroup: '', priceLevel: '' });
    showToast('Group pricing added successfully', 'success');
  };

  const handleRemoveGroupPricing = (id) => {
    if (window.confirm('Are you sure you want to remove this pricing group?')) {
      setGroupPricing(groupPricing.filter(p => p.id !== id));
      showToast('Group pricing removed successfully', 'success');
    }
  };

  // Item Pricing handlers
  const handleAddItemPricing = () => {
    if (!itemPricingForm.item || !itemPricingForm.priceLevel) {
      showToast('Item and price level are required', 'error');
      return;
    }
    const newPricing = {
      id: Date.now(),
      ...itemPricingForm
    };
    setItemPricing([...itemPricing, newPricing]);
    setItemPricingForm({ item: '', priceLevel: 'Base Price', currency: '', unitPrice: '' });
    showToast('Item pricing added successfully', 'success');
  };

  const handleRemoveItemPricing = (id) => {
    if (window.confirm('Are you sure you want to remove this item pricing?')) {
      setItemPricing(itemPricing.filter(p => p.id !== id));
      showToast('Item pricing removed successfully', 'success');
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
          <button className="btn-action" onClick={() => onCancel && onCancel()}>List</button>
          <button className="btn-action">Search</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar" onClick={() => onCancel && onCancel()}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        {isEdit && (
          <>
            <button className="btn-toolbar">
              <i className="fas fa-print"></i>
              Print
            </button>
            <button className="btn-toolbar">
              <i className="fas fa-copy"></i>
              Copy
            </button>
            <button className="btn-toolbar">
              <i className="fas fa-trash"></i>
              Delete
            </button>
          </>
        )}
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
                <label>TYPE</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="type"
                      value="Company"
                      checked={formData.type === 'Company'}
                      onChange={(e) => handleInputChange('type', e.target.value)}
                      style={{ accentColor: '#dc3545' }}
                    />
                    <span>COMPANY</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="type"
                      value="Individual"
                      checked={formData.type === 'Individual'}
                      onChange={(e) => handleInputChange('type', e.target.value)}
                    />
                    <span>INDIVIDUAL</span>
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
              <div className="detail-field">
                <label>COMMENTS</label>
                <textarea
                  className="form-control"
                  rows="3"
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
              className={`tab-btn ${activeTab === 'subsidiaries' ? 'active' : ''}`}
              onClick={() => setActiveTab('subsidiaries')}
            >
              Subsidiaries
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'relationships' && (
              <div style={{ padding: '1rem' }}>
                <div style={{ marginBottom: '1.5rem', padding: '0.75rem', background: '#f0f0f0', borderRadius: '4px' }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '600', color: '#555', margin: 0 }}>OTHER RELATIONSHIPS</h4>
                </div>

                {/* Relationships Sub-tabs */}
                <div style={{ borderBottom: '2px solid #e0e0e0', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0' }}>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: relationshipsSubTab === 'contacts' ? '#6c7a89' : 'transparent',
                        color: relationshipsSubTab === 'contacts' ? 'white' : '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                      onClick={() => setRelationshipsSubTab('contacts')}
                    >
                      Contacts
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: relationshipsSubTab === 'subcustomers' ? '#6c7a89' : 'transparent',
                        color: relationshipsSubTab === 'subcustomers' ? 'white' : '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                      onClick={() => setRelationshipsSubTab('subcustomers')}
                    >
                      Subcustomers
                    </button>
                  </div>
                </div>

                {/* Contacts Tab */}
                {relationshipsSubTab === 'contacts' && (
                  <div>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-end' }}>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>CONTACT</label>
                        <input type="text" className="form-control" placeholder="<Type then tab>" />
                      </div>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>ROLE</label>
                        <select className="form-control">
                          <option>Default</option>
                          {contactRoles.map(role => (
                            <option key={role} value={role}>{role}</option>
                          ))}
                        </select>
                      </div>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>VIEW</label>
                        <select className="form-control">
                          <option>Default</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                        New Contact
                      </button>
                      <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                        Attach
                      </button>
                      <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                        Update Primary
                      </button>
                      <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                        Customize View
                      </button>
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
                )}

                {/* Subcustomers Tab */}
                {relationshipsSubTab === 'subcustomers' && (
                  <div>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>VIEW</label>
                      <select className="form-control" style={{ maxWidth: '300px' }}>
                        <option>Customer Default</option>
                      </select>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                        New Sublead
                      </button>
                      <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                        New Subprospect
                      </button>
                      <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                        New Subcustomer
                      </button>
                      <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                        Customize View
                      </button>
                    </div>
                    <table className="detail-items-table">
                      <thead>
                        <tr>
                          <th>EDIT</th>
                          <th>ID</th>
                          <th>NAME</th>
                          <th>CATEGORY</th>
                          <th>PRIMARY CONTACT</th>
                          <th>PHONE</th>
                          <th>EMAIL</th>
                          <th>SALES REP</th>
                          <th>STAGE</th>
                          <th>STATUS</th>
                          <th>STOP SENDING SMS</th>
                          <th>MESSAGEMEDIA LAST OPTIN KEYWORD</th>
                          <th>MESSAGEMEDIA ISKEYLINK ENTITY</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="13" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                            No records to show.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'communication' && (
              <div style={{ padding: '1rem' }}>
                {/* Communication Sub-tabs */}
                <div style={{ borderBottom: '2px solid #e0e0e0', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0' }}>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: communicationSubTab === 'messages' ? '#6c7a89' : 'transparent',
                        color: communicationSubTab === 'messages' ? 'white' : '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                      onClick={() => setCommunicationSubTab('messages')}
                    >
                      Messages
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: communicationSubTab === 'activities' ? '#6c7a89' : 'transparent',
                        color: communicationSubTab === 'activities' ? 'white' : '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                      onClick={() => setCommunicationSubTab('activities')}
                    >
                      Activities
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: communicationSubTab === 'files' ? '#6c7a89' : 'transparent',
                        color: communicationSubTab === 'files' ? 'white' : '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                      onClick={() => setCommunicationSubTab('files')}
                    >
                      Files
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: communicationSubTab === 'userNotes' ? '#6c7a89' : 'transparent',
                        color: communicationSubTab === 'userNotes' ? 'white' : '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                      onClick={() => setCommunicationSubTab('userNotes')}
                    >
                      User Notes
                    </button>
                  </div>
                </div>

                {/* Messages Tab */}
                {communicationSubTab === 'messages' && (
                  <div>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>VIEW</label>
                      <select className="form-control" style={{ maxWidth: '300px' }}>
                        <option>Default</option>
                      </select>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                      <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                        Email
                      </button>
                      <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                        Attach
                      </button>
                      <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                        Letter
                      </button>
                      <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                        PDF
                      </button>
                      <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                        Fax
                      </button>
                      <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                        Refresh
                      </button>
                      <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                        View History
                      </button>
                      <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                        Customize View
                      </button>
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
                {communicationSubTab === 'activities' && (
                  <div>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-end' }}>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>VIEW</label>
                        <select className="form-control">
                          <option>Default</option>
                        </select>
                      </div>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>STATUS</label>
                        <select className="form-control">
                          <option>- All -</option>
                        </select>
                      </div>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>ACTIVITY TYPE</label>
                        <select className="form-control">
                          <option>- All -</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                      <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                        New Task
                      </button>
                      <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                        Log Task
                      </button>
                      <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                        New Phone Call
                      </button>
                      <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                        Log Phone Call
                      </button>
                      <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                        New Event
                      </button>
                      <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                        Log Event
                      </button>
                      <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                        View History
                      </button>
                      <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                        Customize View
                      </button>
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
                {communicationSubTab === 'files' && (
                  <div>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>ATTACH EXISTING FILES</label>
                      <input type="text" className="form-control" placeholder="<Type then tab>" style={{ maxWidth: '400px' }} />
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                        Attach
                      </button>
                      <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                        New File
                      </button>
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
                {communicationSubTab === 'userNotes' && (
                  <div>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>VIEW</label>
                      <select className="form-control" style={{ maxWidth: '300px' }}>
                        <option>Default</option>
                      </select>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                        New Note
                      </button>
                      <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                        View History
                      </button>
                      <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                        Customize View
                      </button>
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
              <div style={{ padding: '1rem' }}>
                {/* Sales Sub-tabs */}
                <div style={{ borderBottom: '2px solid #e0e0e0', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0' }}>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: salesSubTab === 'opportunities' ? '#6c7a89' : 'transparent',
                        color: salesSubTab === 'opportunities' ? 'white' : '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                      onClick={() => setSalesSubTab('opportunities')}
                    >
                      Opportunities
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: salesSubTab === 'transactions' ? '#6c7a89' : 'transparent',
                        color: salesSubTab === 'transactions' ? 'white' : '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                      onClick={() => setSalesSubTab('transactions')}
                    >
                      Transactions
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: salesSubTab === 'itemsPurchased' ? '#6c7a89' : 'transparent',
                        color: salesSubTab === 'itemsPurchased' ? 'white' : '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                      onClick={() => setSalesSubTab('itemsPurchased')}
                    >
                      Items Purchased
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: salesSubTab === 'upsell' ? '#6c7a89' : 'transparent',
                        color: salesSubTab === 'upsell' ? 'white' : '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                      onClick={() => setSalesSubTab('upsell')}
                    >
                      Upsell
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: salesSubTab === 'projects' ? '#6c7a89' : 'transparent',
                        color: salesSubTab === 'projects' ? 'white' : '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                      onClick={() => setSalesSubTab('projects')}
                    >
                      Projects
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: salesSubTab === 'qualification' ? '#6c7a89' : 'transparent',
                        color: salesSubTab === 'qualification' ? 'white' : '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                      onClick={() => setSalesSubTab('qualification')}
                    >
                      Qualification
                    </button>
                  </div>
                </div>

                {/* Opportunities Tab */}
                {salesSubTab === 'opportunities' && (
                  <div>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-end' }}>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>VIEW</label>
                        <select className="form-control">
                          <option>Opportunity Default</option>
                        </select>
                      </div>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>STATUS</label>
                        <select className="form-control">
                          <option>- All -</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                        New Enquiry
                      </button>
                      <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                        Customize View
                      </button>
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

                {/* Transactions Tab */}
                {salesSubTab === 'transactions' && (
                  <div>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-end' }}>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>VIEW</label>
                        <select className="form-control">
                          <option>Search Project</option>
                        </select>
                      </div>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>CUSTOMER SUB OF</label>
                        <input type="text" className="form-control" placeholder="<Type then tab>" />
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                        New Quotation
                      </button>
                      <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                        New Sales Order
                      </button>
                      <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                        New Invoice
                      </button>
                      <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                        New Cash Sale
                      </button>
                      <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                        Customize View
                      </button>
                    </div>
                    <table className="detail-items-table">
                      <thead>
                        <tr>
                          <th>EDIT</th>
                          <th>DATE</th>
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

                {/* Items Purchased Tab */}
                {salesSubTab === 'itemsPurchased' && (
                  <div>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>VIEW</label>
                      <select className="form-control" style={{ maxWidth: '300px' }}>
                        <option>Deal/Item</option>
                      </select>
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                        Customize View
                      </button>
                    </div>
                    <table className="detail-items-table">
                      <thead>
                        <tr>
                          <th>ITEM</th>
                          <th>DESCRIPTION</th>
                          <th>QUANTITY</th>
                          <th>TOTAL</th>
                          <th>UNIT PRICE (AVERAGE)</th>
                          <th>LAST PURCHASE DATE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                            No records to show.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Upsell Tab */}
                {salesSubTab === 'upsell' && (
                  <div>
                    <div style={{ marginBottom: '1.5rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '4px' }}>
                      <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '1rem' }}>Create Opportunity</h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                        <div>
                          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>ITEMS PURCHASED</label>
                          <div style={{ fontSize: '13px', color: '#888' }}>No records to show.</div>
                        </div>
                        <div>
                          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>ITEMS TO UPSELL</label>
                          <div style={{ fontSize: '13px', color: '#888' }}>No records to show.</div>
                        </div>
                        <div>
                          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>▸ CORRELATION</label>
                          <div style={{ fontSize: '13px', color: '#888' }}>COUNT</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Projects Tab */}
                {salesSubTab === 'projects' && (
                  <div>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-end' }}>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>VIEW</label>
                        <select className="form-control">
                          <option>Job Default</option>
                        </select>
                      </div>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>PROJECT TYPE</label>
                        <select className="form-control">
                          <option>- All -</option>
                        </select>
                      </div>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>STATUS</label>
                        <select className="form-control">
                          <option>- All -</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                        New Project
                      </button>
                      <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                        Customize View
                      </button>
                    </div>
                    <table className="detail-items-table">
                      <thead>
                        <tr>
                          <th>EDIT</th>
                          <th>ID</th>
                          <th>NAME</th>
                          <th>PROJECT TYPE</th>
                          <th>PRIMARY CONTACT</th>
                          <th>STATUS</th>
                          <th>START DATE</th>
                          <th>ACTUAL END DATE</th>
                          <th>PROJECT MANAGER</th>
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

                {/* Qualification Tab */}
                {salesSubTab === 'qualification' && (
                  <div>
                    <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '4px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                        <div>
                          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>ESTIMATED BUDGET</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div>
                          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>BUYING REASON</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div>
                          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                            <input type="checkbox" />
                            <span style={{ fontSize: '13px', fontWeight: '500' }}>BUDGET APPROVED</span>
                          </label>
                        </div>
                        <div>
                          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>BUYING TIME FRAME</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div>
                          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>SALES READINESS</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'marketing' && (
              <div style={{ padding: '1rem' }}>
                {/* Lead Information Section */}
                <div style={{ marginBottom: '2rem', padding: '1rem', background: '#f8f9fa', borderRadius: '4px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Lead Information</h4>
                  <div style={{ maxWidth: '400px' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>LEAD SOURCE</label>
                    <select className="form-control">
                      <option value=""></option>
                      <option>Website</option>
                      <option>Referral</option>
                      <option>Social Media</option>
                    </select>
                  </div>
                </div>

                {/* Online Forms Section */}
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Online Forms</h4>
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
              <div style={{ padding: '1rem' }}>
                {/* Financial Sub-tabs */}
                <div style={{ borderBottom: '2px solid #e0e0e0', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0' }}>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: financialSubTab === 'currencies' ? '#6c7a89' : 'transparent',
                        color: financialSubTab === 'currencies' ? 'white' : '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px',
                        borderBottom: financialSubTab === 'currencies' ? '2px solid #6c7a89' : 'none'
                      }}
                      onClick={() => setFinancialSubTab('currencies')}
                    >
                      Currencies
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: financialSubTab === 'creditCards' ? '#6c7a89' : 'transparent',
                        color: financialSubTab === 'creditCards' ? 'white' : '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px',
                        borderBottom: financialSubTab === 'creditCards' ? '2px solid #6c7a89' : 'none'
                      }}
                      onClick={() => setFinancialSubTab('creditCards')}
                    >
                      Credit Cards
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: financialSubTab === 'groupPricing' ? '#6c7a89' : 'transparent',
                        color: financialSubTab === 'groupPricing' ? 'white' : '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px',
                        borderBottom: financialSubTab === 'groupPricing' ? '2px solid #6c7a89' : 'none'
                      }}
                      onClick={() => setFinancialSubTab('groupPricing')}
                    >
                      Group Pricing
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: financialSubTab === 'itemPricing' ? '#6c7a89' : 'transparent',
                        color: financialSubTab === 'itemPricing' ? 'white' : '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px',
                        borderBottom: financialSubTab === 'itemPricing' ? '2px solid #6c7a89' : 'none'
                      }}
                      onClick={() => setFinancialSubTab('itemPricing')}
                    >
                      Item Pricing
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
                        {currencies.length > 0 ? (
                          currencies.map((curr) => (
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

                {/* Credit Cards Tab */}
                {financialSubTab === 'creditCards' && (
                  <div>
                    <div style={{ marginBottom: '1.5rem', padding: '1rem', background: '#f8f9fa', borderRadius: '4px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
                        <div className="detail-field">
                          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>CREDIT CARD NUMBER <span style={{ color: 'red' }}>*</span></label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="detail-field">
                          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>EXPIRATION DATE</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="detail-field">
                          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>CARDHOLDER NAME</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                          <i className="fas fa-check"></i> Add
                        </button>
                        <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                          <i className="fas fa-times"></i> Cancel
                        </button>
                        <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                          <i className="fas fa-trash"></i> Remove
                        </button>
                      </div>
                    </div>

                    <table className="detail-items-table">
                      <thead>
                        <tr>
                          <th>CREDIT CARD NUMBER</th>
                          <th>EXPIRATION DATE</th>
                          <th>CARDHOLDER NAME</th>
                          <th>CREDIT CARD TYPE</th>
                          <th>CARD STATE</th>
                          <th>MEMO</th>
                          <th>DEFAULT CREDIT CARD</th>
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

                {/* Group Pricing Tab */}
                {financialSubTab === 'groupPricing' && (
                  <div>
                    <div style={{ marginBottom: '1.5rem', padding: '1rem', background: '#f8f9fa', borderRadius: '4px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
                        <div className="detail-field">
                          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>PRICING GROUP <span style={{ color: 'red' }}>*</span></label>
                          <select className="form-control">
                            <option value=""></option>
                          </select>
                        </div>
                        <div className="detail-field">
                          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>PRICE LEVEL <span style={{ color: 'red' }}>*</span></label>
                          <select className="form-control">
                            <option value=""></option>
                          </select>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                          <i className="fas fa-check"></i> Add
                        </button>
                        <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                          <i className="fas fa-times"></i> Cancel
                        </button>
                        <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                          <i className="fas fa-trash"></i> Remove
                        </button>
                      </div>
                    </div>

                    <table className="detail-items-table">
                      <thead>
                        <tr>
                          <th>PRICING GROUP</th>
                          <th>PRICE LEVEL</th>
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

                {/* Item Pricing Tab */}
                {financialSubTab === 'itemPricing' && (
                  <div>
                    <div style={{ marginBottom: '1.5rem', padding: '1rem', background: '#f8f9fa', borderRadius: '4px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
                        <div className="detail-field">
                          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>ITEM <span style={{ color: 'red' }}>*</span></label>
                          <select className="form-control">
                            <option value=""></option>
                          </select>
                        </div>
                        <div className="detail-field">
                          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>PRICE LEVEL <span style={{ color: 'red' }}>*</span></label>
                          <select className="form-control">
                            <option>Base Price</option>
                          </select>
                        </div>
                        <div className="detail-field">
                          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>CURRENCY</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="detail-field">
                          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>UNIT PRICE</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                          <i className="fas fa-check"></i> Add
                        </button>
                        <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                          <i className="fas fa-times"></i> Cancel
                        </button>
                        <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                          <i className="fas fa-trash"></i> Remove
                        </button>
                      </div>
                    </div>

                    <table className="detail-items-table">
                      <thead>
                        <tr>
                          <th>ITEM</th>
                          <th>PRICE LEVEL</th>
                          <th>CURRENCY</th>
                          <th>UNIT PRICE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="4" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                            No records to show.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'preferences' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-grid" style={{ gap: '1.5rem' }}>
                  <div className="detail-field">
                    <label>NUMBER FORMAT</label>
                    <select className="form-control">
                      <option value=""></option>
                      <option>1 000 000,00</option>
                      <option>1 000 000.00</option>
                      <option>1,000,000.00</option>
                      <option>1.000.000,00</option>
                      <option>1.000.000.00</option>
                      <option>1.000.000.00</option>
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>SHIP COMPLETE</label>
                    <select className="form-control">
                      <option value=""></option>
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>NEGATIVE NUMBER FORMAT</label>
                    <select className="form-control">
                      <option value=""></option>
                      <option>(100)</option>
                      <option>-100</option>
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>SHIPPING CARRIER</label>
                    <select className="form-control">
                      <option>More</option>
                      <option>UPS</option>
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
                      <option value=""></option>
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
                      <option>Licensee</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e0e0e0' }}>
                  <h4 style={{ marginBottom: '1rem', fontSize: '14px', fontWeight: '600', color: '#333' }}>SEND TRANSACTIONS VIA EMAIL</h4>
                  <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input type="checkbox" />
                      <span style={{ fontSize: '13px', fontWeight: '500' }}>EMAIL</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input type="checkbox" />
                      <span style={{ fontSize: '13px', fontWeight: '500' }}>PRINT</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input type="checkbox" />
                      <span style={{ fontSize: '13px', fontWeight: '500' }}>FAX</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'system-info' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-field" style={{ maxWidth: '300px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input type="checkbox" />
                    <span style={{ fontSize: '13px', fontWeight: '500' }}>INACTIVE</span>
                  </label>
                </div>
              </div>
            )}

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
                      <th style={{ width: '100px' }}>PRIMARY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customerSubsidiaries.length > 0 ? (
                      customerSubsidiaries.map((sub) => (
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
                          <td style={{ textAlign: 'center' }}>
                            {sub.primary ? <span style={{ color: '#28a745', fontWeight: '500' }}>✓ Yes</span> : ''}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                          No subsidiaries added yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
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
