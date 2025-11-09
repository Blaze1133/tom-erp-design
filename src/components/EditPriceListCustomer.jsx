import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditPriceListCustomer = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [expandedSections, setExpandedSections] = useState({
    primary: true,
    emailPhone: true,
    classification: true
  });
  const [activeTab, setActiveTab] = useState('relationships');

  const customerData = JSON.parse(sessionStorage.getItem('selectedPriceListCustomer') || '{}');

  const [formData, setFormData] = useState({
    customForm: 'TOM Customer Form',
    customerId: '3',
    name: customerData.name || 'Sembcorp Marine Integrated Yard Pte Ltd',
    type: 'Company',
    individual: false,
    companyName: customerData.name || 'Sembcorp Marine Integrated Yard Pte Ltd',
    parentCompany: '',
    status: 'CUSTOMER-Closed Won',
    salesRep: 'MEP954 Kandasamy Kanniah',
    webAddress: '',
    category: '',
    defaultOrderPriority: '',
    comments: '',
    email: '',
    phone: '',
    altPhone: '',
    fax: '',
    address: 'SEMBCORP MARINE INTEGRATED YARD PTE LTD\nAdmiralty Road West,\nSingapore 739956\nSingapore Rep',
    primarySubsidiary: 'Tech Offshore Marine (DO) Pte Ltd',
    lastSalesActivity: ''
  });

  const customForms = [
    'TOM Customer Form',
    'Standard Customer Form'
  ];

  const parentCompanies = [
    '100 Baroid Surface Solutions ,Halliburton Energy Services Inc',
    '1000 TEAM LEAD CONSTRUCTION PTE LTD',
    '1001 TECH ONSHORE MEP-PREFABRICATORS PTE LTD',
    '1002 TECH MARINE OFFSHORE (S) PTE LTD',
    '1003 TECH ELECTRIC AUTOMATION PTE LTD',
    '1004 TECH OFFSHORE MARINE (DO) PTE LTD'
  ];

  const categories = [
    'Direct Owner',
    'Oil & Gas',
    'Other',
    'Shipyard'
  ];

  const statuses = [
    'PROSPECT-In Discussion',
    'PROSPECT-Identified Decision Makers',
    'PROSPECT-Proposal',
    'PROSPECT-In Negotiation',
    'PROSPECT-Purchasing',
    'CUSTOMER-Lost Customer',
    'CUSTOMER-Closed Won',
    'CUSTOMER-Renewal'
  ];

  const roles = [
    'Alternate Contact',
    'Consultant',
    'Decision Maker',
    'Order Creator',
    'Primary Contact'
  ];

  const views = [
    'Default',
    'Contacts without sales activity in the last week',
    'Phone'
  ];

  const tabs = [
    { id: 'relationships', label: 'Relationships' },
    { id: 'communication', label: 'Communication' },
    { id: 'address', label: 'Address' },
    { id: 'sales', label: 'Sales' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'financial', label: 'Financial' },
    { id: 'preferences', label: 'Preferences' },
    { id: 'system-info', label: 'System Information' },
    { id: 'custom', label: 'Custom' },
    { id: 'access', label: 'Access' },
    { id: 'subsidiaries', label: 'Subsidiaries' }
  ];

  const contacts = [
    {
      name: 'Jeff',
      company: '3 Sembcorp Marine Integrated Yard Pte Ltd',
      jobTitle: 'Manager',
      phone: '+65123 456',
      email: 'Care@Tech.com',
      role: 'Primary Contact'
    }
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

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSave = () => {
    showToast('Customer updated successfully!', 'success');
    setTimeout(() => {
      setCurrentPage('view-price-list-customer');
    }, 1000);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      setCurrentPage('view-price-list-customer');
    }
  };

  const handleMerge = () => {
    showToast('Merge functionality', 'info');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-user" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Customer</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={() => showToast('Accept Payment', 'info')}>
            Accept Payment
          </button>
        </div>
      </div>

      <div className="quotation-container">
        <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-tertiary" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn-secondary" onClick={handleMerge}>
            Merge
          </button>
          <button className="btn btn-secondary" onClick={() => showToast('Actions', 'info')}>
            Actions
          </button>
        </div>

        {/* Primary Information */}
        <div className="form-section">
          <div 
            className="section-title" 
            onClick={() => toggleSection('primary')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <i className={`fas fa-chevron-${expandedSections.primary ? 'down' : 'right'}`} style={{ marginRight: '10px' }}></i>
            <i className="fas fa-info-circle" style={{ marginRight: '10px' }}></i>
            Primary Information
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          {expandedSections.primary && (
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">CUSTOM FORM <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.customForm}
                  onChange={(e) => handleInputChange('customForm', e.target.value)}
                >
                  {customForms.map((form, index) => (
                    <option key={index} value={form}>{form}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">PARENT COMPANY</label>
                <select 
                  className="form-control"
                  value={formData.parentCompany}
                  onChange={(e) => handleInputChange('parentCompany', e.target.value)}
                >
                  <option value="">- Type then tab -</option>
                  {parentCompanies.map((company, index) => (
                    <option key={index} value={company}>{company}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">CUSTOMER ID</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.customerId}
                  readOnly
                  style={{ background: '#f5f5f5' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">CATEGORY</label>
                <select 
                  className="form-control"
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                >
                  <option value="">Select...</option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">NAME</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">DEFAULT ORDER PRIORITY</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.defaultOrderPriority}
                  onChange={(e) => handleInputChange('defaultOrderPriority', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">COMPANY NAME <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">COMMENTS</label>
                <textarea 
                  className="form-control"
                  value={formData.comments}
                  onChange={(e) => handleInputChange('comments', e.target.value)}
                  rows="2"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">STATUS <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.status}
                  onChange={(e) => handleInputChange('status', e.target.value)}
                >
                  {statuses.map((status, index) => (
                    <option key={index} value={status}>{status}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">SALES REP</label>
                <select 
                  className="form-control"
                  value={formData.salesRep}
                  onChange={(e) => handleInputChange('salesRep', e.target.value)}
                >
                  <option value={formData.salesRep}>{formData.salesRep}</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">WEB ADDRESS</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.webAddress}
                  onChange={(e) => handleInputChange('webAddress', e.target.value)}
                />
              </div>

              <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '0.5rem' }}>
                <input 
                  type="checkbox" 
                  checked={formData.individual}
                  onChange={(e) => handleInputChange('individual', e.target.checked)}
                  style={{ width: '18px', height: '18px' }}
                />
                <label style={{ fontWeight: '600', fontSize: '0.875rem', margin: 0 }}>INDIVIDUAL</label>
              </div>
            </div>
          )}
        </div>

        {/* Email | Phone | Address */}
        <div className="form-section">
          <div 
            className="section-title" 
            onClick={() => toggleSection('emailPhone')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <i className={`fas fa-chevron-${expandedSections.emailPhone ? 'down' : 'right'}`} style={{ marginRight: '10px' }}></i>
            <i className="fas fa-envelope" style={{ marginRight: '10px' }}></i>
            Email | Phone | Address
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          {expandedSections.emailPhone && (
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">EMAIL</label>
                <input 
                  type="email" 
                  className="form-control"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">ALT. PHONE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.altPhone}
                  onChange={(e) => handleInputChange('altPhone', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">PHONE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">ADDRESS</label>
                <textarea 
                  className="form-control"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  rows="3"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">FAX</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.fax}
                  onChange={(e) => handleInputChange('fax', e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        {/* Classification */}
        <div className="form-section">
          <div 
            className="section-title" 
            onClick={() => toggleSection('classification')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <i className={`fas fa-chevron-${expandedSections.classification ? 'down' : 'right'}`} style={{ marginRight: '10px' }}></i>
            <i className="fas fa-tags" style={{ marginRight: '10px' }}></i>
            Classification
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          {expandedSections.classification && (
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">PRIMARY SUBSIDIARY</label>
                <select 
                  className="form-control"
                  value={formData.primarySubsidiary}
                  onChange={(e) => handleInputChange('primarySubsidiary', e.target.value)}
                >
                  <option value={formData.primarySubsidiary}>{formData.primarySubsidiary}</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">LAST SALES ACTIVITY</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.lastSalesActivity}
                  readOnly
                  style={{ background: '#f5f5f5' }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="detail-tabs">
          <div className="tabs-header">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tabs-content">
            {activeTab === 'relationships' && (
              <div style={{ padding: '1.5rem' }}>
                <h4 style={{ 
                  fontSize: '0.875rem', 
                  fontWeight: '600', 
                  color: '#666', 
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  OTHER RELATIONSHIPS
                </h4>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  padding: '1rem',
                  background: '#f8f9fa',
                  borderRadius: '4px',
                  marginBottom: '2rem'
                }}>
                  <i className="fas fa-link" style={{ color: '#999' }}></i>
                  <span style={{ color: '#666', fontSize: '0.875rem' }}>0</span>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <h4 style={{ 
                    fontSize: '0.875rem', 
                    fontWeight: '600', 
                    color: '#666', 
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Contacts ● Subcustomers
                  </h4>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <button className="btn btn-secondary">New Contact</button>
                    <button className="btn btn-secondary">Attach</button>
                    <button className="btn btn-secondary">Update Primary</button>
                    <button className="btn btn-secondary">Customize View</button>
                  </div>

                  <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <label className="form-label" style={{ marginBottom: 0 }}>CONTACT</label>
                    <input type="text" className="form-control" placeholder="- Type then tab -" style={{ width: '250px' }} />
                    <label className="form-label" style={{ marginBottom: 0 }}>ROLE</label>
                    <select className="form-control" style={{ width: '200px' }}>
                      <option value="">Select...</option>
                      {roles.map((role, index) => (
                        <option key={index} value={role}>{role}</option>
                      ))}
                    </select>
                    <label className="form-label" style={{ marginBottom: 0 }}>VIEW</label>
                    <select className="form-control" style={{ width: '200px' }}>
                      {views.map((view, index) => (
                        <option key={index} value={view}>{view}</option>
                      ))}
                    </select>
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
                        <th>ROLE</th>
                        <th>REMOVE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contacts.map((contact, index) => (
                        <tr key={index}>
                          <td>
                            <button 
                              onClick={() => showToast('Edit contact', 'info')}
                              style={{
                                background: 'none',
                                border: 'none',
                                color: '#4a90e2',
                                cursor: 'pointer',
                                fontSize: '0.875rem'
                              }}
                            >
                              Edit
                            </button>
                          </td>
                          <td>{contact.name}</td>
                          <td style={{ fontSize: '0.85rem' }}>{contact.company}</td>
                          <td>{contact.jobTitle}</td>
                          <td>{contact.phone}</td>
                          <td>{contact.email}</td>
                          <td>{contact.role}</td>
                          <td>
                            <button 
                              onClick={() => showToast('Remove contact', 'info')}
                              style={{
                                background: 'none',
                                border: 'none',
                                color: '#e74c3c',
                                cursor: 'pointer',
                                fontSize: '0.875rem'
                              }}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab !== 'relationships' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>
                No data available for this tab
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

export default EditPriceListCustomer;
