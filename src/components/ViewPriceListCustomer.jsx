import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewPriceListCustomer = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [emailPhoneCollapsed, setEmailPhoneCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('relationships');

  const customerData = JSON.parse(sessionStorage.getItem('selectedPriceListCustomer') || '{}');

  const [formData] = useState({
    customerId: '3',
    name: customerData.name || 'Sembcorp Marine Integrated Yard Pte Ltd',
    type: 'Company',
    companyName: customerData.name || 'Sembcorp Marine Integrated Yard Pte Ltd',
    email: '',
    phone: '',
    altPhone: '',
    fax: '',
    address: 'SEMBCORP MARINE INTEGRATED YARD PTE LTD\nAdmiralty Road West,\nSingapore 739956\nSingapore Rep',
    status: 'CUSTOMER-Closed Won',
    salesRep: 'MEP954 Kandasamy Kanniah',
    webAddress: '',
    category: '',
    defaultOrderPriority: '',
    comments: '',
    primarySubsidiary: 'Tech Offshore Marine (DO) Pte Ltd',
    lastSalesActivity: ''
  });

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

  const handleEdit = () => {
    setCurrentPage('edit-price-list-customer');
  };

  const handleBack = () => {
    setCurrentPage('generate-price-lists');
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-user"></i>
          <div>
            <h1>Customer</h1>
            <div className="detail-subtitle">
              <span>{formData.customerId} {formData.name}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-action">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-action">List</button>
          <button className="btn-action">View Dashboard</button>
          <button className="btn-action">View Customer 360</button>
          <button className="btn-action">Search</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary" onClick={handleEdit}>
          <i className="fas fa-edit"></i>
          Edit
        </button>
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar" onClick={() => showToast('Accept Payment', 'info')}>
          Accept Payment
        </button>
        <button className="btn-toolbar" onClick={() => showToast('Print', 'info')}>
          <i className="fas fa-print"></i>
          Print
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
        {/* Primary Information */}
        <div className={`detail-section ${primaryInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setPrimaryInfoCollapsed(!primaryInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>CUSTOMER ID</label>
                <div className="field-value">{formData.customerId}</div>
              </div>
              <div className="detail-field">
                <label>STATUS</label>
                <div className="field-value">{formData.status}</div>
              </div>
              <div className="detail-field">
                <label>NAME</label>
                <div className="field-value">{formData.name}</div>
              </div>
              <div className="detail-field">
                <label>SALES REP</label>
                <div className="field-value">{formData.salesRep}</div>
              </div>
              <div className="detail-field">
                <label>TYPE</label>
                <div className="field-value">
                  <i className="fas fa-building" style={{ marginRight: '0.5rem' }}></i>
                  {formData.type}
                </div>
              </div>
              <div className="detail-field">
                <label>WEB ADDRESS</label>
                <div className="field-value">{formData.webAddress || '-'}</div>
              </div>
              <div className="detail-field">
                <label>COMPANY NAME</label>
                <div className="field-value">{formData.companyName}</div>
              </div>
              <div className="detail-field">
                <label>CATEGORY</label>
                <div className="field-value">{formData.category || '-'}</div>
              </div>
              <div className="detail-field">
                <label>DEFAULT ORDER PRIORITY</label>
                <div className="field-value">{formData.defaultOrderPriority || '-'}</div>
              </div>
              <div className="detail-field">
                <label>COMMENTS</label>
                <div className="field-value">{formData.comments || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Email | Phone | Address */}
        <div className={`detail-section ${emailPhoneCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setEmailPhoneCollapsed(!emailPhoneCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Email | Phone | Address</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>EMAIL</label>
                <div className="field-value">{formData.email || '-'}</div>
              </div>
              <div className="detail-field">
                <label>ALT. PHONE</label>
                <div className="field-value">{formData.altPhone || '-'}</div>
              </div>
              <div className="detail-field">
                <label>PHONE</label>
                <div className="field-value">{formData.phone || '-'}</div>
              </div>
              <div className="detail-field">
                <label>ADDRESS</label>
                <div className="field-value" style={{ whiteSpace: 'pre-line' }}>
                  {formData.address}
                </div>
              </div>
              <div className="detail-field">
                <label>FAX</label>
                <div className="field-value">{formData.fax || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className={`detail-section ${classificationCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setClassificationCollapsed(!classificationCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>PRIMARY SUBSIDIARY</label>
                <div className="field-value">{formData.primarySubsidiary}</div>
              </div>
              <div className="detail-field">
                <label>LAST SALES ACTIVITY</label>
                <div className="field-value">{formData.lastSalesActivity || '-'}</div>
              </div>
            </div>
          </div>
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

export default ViewPriceListCustomer;
