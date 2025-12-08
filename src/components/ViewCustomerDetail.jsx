import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCustomerDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('relationships');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [emailPhoneCollapsed, setEmailPhoneCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);

  const customerData = {
    id: 24,
    name: 'Pirtek Asia Pte Ltd',
    customerId: 'Client001',
    status: 'CUSTOMER-Closed Won',
    salesRep: '',
    webAddress: '',
    category: '',
    defaultOrderPriority: '',
    comments: '',
    email: '',
    phone: '',
    altPhone: '',
    fax: '',
    address: '101A Pioneer Road, Singapore - 639606',
    primarySubsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    lastSalesActivity: '',
    company: 'Pirtek Asia Pte Ltd'
  };

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

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
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
              <span>{customerData.id} ({customerData.name})</span>
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
        <button className="btn-toolbar">
          Accept Payment
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-copy"></i>
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
                <label>CUSTOMER ID</label>
                <div className="field-value">{customerData.id}</div>
              </div>
              <div className="detail-field">
                <label>STATUS</label>
                <div className="field-value">{customerData.status}</div>
              </div>
              <div className="detail-field">
                <label>DEFAULT ORDER PRIORITY</label>
                <div className="field-value">{customerData.defaultOrderPriority || '-'}</div>
              </div>
              <div className="detail-field">
                <label>NAME</label>
                <div className="field-value">{customerData.name}</div>
              </div>
              <div className="detail-field">
                <label>SALES REP</label>
                <div className="field-value">{customerData.salesRep || '-'}</div>
              </div>
              <div className="detail-field">
                <label>COMMENTS</label>
                <div className="field-value">{customerData.comments || '-'}</div>
              </div>
              <div className="detail-field">
                <label>TYPE</label>
                <div className="field-value">Company</div>
              </div>
              <div className="detail-field">
                <label>WEB ADDRESS</label>
                <div className="field-value">{customerData.webAddress || '-'}</div>
              </div>
              <div className="detail-field">
                <label>CATEGORY</label>
                <div className="field-value">{customerData.category || '-'}</div>
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
                <div className="field-value">{customerData.email || '-'}</div>
              </div>
              <div className="detail-field">
                <label>ALT. PHONE</label>
                <div className="field-value">{customerData.altPhone || '-'}</div>
              </div>
              <div className="detail-field">
                <label>ADDRESS</label>
                <div className="field-value">{customerData.address}</div>
              </div>
              <div className="detail-field">
                <label>PHONE</label>
                <div className="field-value">{customerData.phone || '-'}</div>
              </div>
              <div className="detail-field">
                <label>FAX</label>
                <div className="field-value">{customerData.fax || '-'}</div>
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
                <label>PRIMARY SUBSIDIARY</label>
                <div className="field-value">{customerData.primarySubsidiary}</div>
              </div>
              <div className="detail-field">
                <label>LAST SALES ACTIVITY</label>
                <div className="field-value">{customerData.lastSalesActivity || '-'}</div>
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
                        background: '#6c7a89',
                        color: 'white',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                    >
                      Contacts
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: 'transparent',
                        color: '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                    >
                      Subcustomers
                    </button>
                  </div>
                </div>

                {/* Contacts Content */}
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
                    <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                      Attach
                    </button>
                    <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                      Update Primary
                    </button>
                    <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                      Customize View
                    </button>
                    <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                      New Contact
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
                        background: '#6c7a89',
                        color: 'white',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                    >
                      Messages
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: 'transparent',
                        color: '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                    >
                      Activities
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: 'transparent',
                        color: '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                    >
                      Files
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: 'transparent',
                        color: '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                    >
                      User_Notes
                    </button>
                  </div>
                </div>

                {/* Messages Content */}
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
                    <tr>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td></td>
                      <td>Singapore - 639606</td>
                      <td>101A Pioneer Road</td>
                      <td><button className="view-link">Edit</button></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>101A</td>
                      <td>101A Pioneer Road, Singapore - 639606.</td>
                      <td><button className="view-link">Edit</button></td>
                    </tr>
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
                        background: '#6c7a89',
                        color: 'white',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                    >
                      Opportunities
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: 'transparent',
                        color: '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                    >
                      Transactions
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: 'transparent',
                        color: '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                    >
                      Items Purchased
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: 'transparent',
                        color: '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                    >
                      Upsell
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: 'transparent',
                        color: '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                    >
                      Projects
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: 'transparent',
                        color: '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                    >
                      Qualification
                    </button>
                  </div>
                </div>

                {/* Opportunities Content */}
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
                    <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                      Customize View
                    </button>
                    <button className="btn-toolbar-primary" style={{ padding: '0.5rem 1.5rem' }}>
                      New Enquiry
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
              </div>
            )}

            {activeTab === 'financial' && (
              <div style={{ padding: '1rem' }}>
                {/* Account Information Collapsible Section */}
                <div className="detail-section" style={{ marginBottom: '1rem' }}>
                  <div className="section-header" style={{ background: '#f0f0f0', padding: '0.75rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem' }}></i>
                    <h3 style={{ fontSize: '14px', fontWeight: '600', margin: 0, display: 'inline' }}>Account Information</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem', border: '1px solid #e0e0e0', borderTop: 'none' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                      <div className="detail-field">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>ACCOUNT</label>
                        <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>-</div>
                      </div>
                      <div className="detail-field">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>END DATE</label>
                        <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>-</div>
                      </div>
                      <div className="detail-field">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>PRIMARY CURRENCY <span style={{ color: 'red' }}>*</span></label>
                        <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>SGD</div>
                      </div>
                      <div className="detail-field">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>DEFAULT RECEIVABLES ACCOUNT</label>
                        <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>Use System Preference</div>
                      </div>
                      <div className="detail-field">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>REMINDER DAYS</label>
                        <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>-</div>
                      </div>
                      <div className="detail-field">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>TERMS</label>
                        <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>-</div>
                      </div>
                      <div className="detail-field">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>START DATE</label>
                        <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>-</div>
                      </div>
                      <div className="detail-field">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>PRICE LEVEL</label>
                        <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>-</div>
                      </div>
                      <div className="detail-field">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>CREDIT LIMIT</label>
                        <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>HOLD AUTO</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tax Information Collapsible Section */}
                <div className="detail-section" style={{ marginBottom: '1rem' }}>
                  <div className="section-header" style={{ background: '#f0f0f0', padding: '0.75rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem' }}></i>
                    <h3 style={{ fontSize: '14px', fontWeight: '600', margin: 0, display: 'inline' }}>Tax Information</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem', border: '1px solid #e0e0e0', borderTop: 'none' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                      <div className="detail-field">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>TAX REG. NUMBER</label>
                        <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>-</div>
                      </div>
                      <div className="detail-field">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>TAX ROUNDING METHOD</label>
                        <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>Round Off</div>
                      </div>
                      <div className="detail-field">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>TAX ITEM</label>
                        <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>-</div>
                      </div>
                      <div className="detail-field">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>TAX ROUNDING PRECISION</label>
                        <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>0.01 and Below</div>
                      </div>
                      <div className="detail-field">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>RESALE NUMBER</label>
                        <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>-</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Balance Information Collapsible Section */}
                <div className="detail-section" style={{ marginBottom: '1.5rem' }}>
                  <div className="section-header" style={{ background: '#f0f0f0', padding: '0.75rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem' }}></i>
                    <h3 style={{ fontSize: '14px', fontWeight: '600', margin: 0, display: 'inline' }}>Balance Information</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem', border: '1px solid #e0e0e0', borderTop: 'none' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                      <div className="detail-field">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>BALANCE</label>
                        <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>0.00</div>
                      </div>
                      <div className="detail-field">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>OVERDUE BALANCE</label>
                        <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>0.00</div>
                      </div>
                      <div className="detail-field">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>DAYS OVERDUE</label>
                        <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>-</div>
                      </div>
                      <div className="detail-field">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>DEPOSIT BALANCE</label>
                        <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>0.00</div>
                      </div>
                      <div className="detail-field">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>UNBILLED ORDERS</label>
                        <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>0.00</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <input type="checkbox" disabled style={{ cursor: 'not-allowed' }} />
                        <label style={{ fontSize: '13px', fontWeight: '500', margin: 0 }}>GROUP INVOICES</label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Financial Sub-tabs */}
                <div style={{ borderBottom: '2px solid #e0e0e0', marginTop: '2rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0' }}>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: '#6c7a89',
                        color: 'white',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                    >
                      Currencies
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: 'transparent',
                        color: '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                    >
                      Credit Cards
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: 'transparent',
                        color: '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                    >
                      Group Pricing
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: 'transparent',
                        color: '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                    >
                      Item Pricing
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: 'transparent',
                        color: '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                    >
                      Time Tracking
                    </button>
                  </div>
                </div>

                {/* Currencies Table */}
                <div>
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

            {activeTab === 'system-info' && (
              <div style={{ padding: '1rem' }}>
                {/* System Notes Sub-tabs */}
                <div style={{ borderBottom: '2px solid #e0e0e0', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0' }}>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: '#6c7a89',
                        color: 'white',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                    >
                      System Notes
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: 'transparent',
                        color: '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                    >
                      Active Workflows
                    </button>
                    <button 
                      style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: 'transparent',
                        color: '#666',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px'
                      }}
                    >
                      Workflow History
                    </button>
                  </div>
                </div>

                {/* System Notes Content */}
                <div>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-end' }}>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>VIEW</label>
                      <select className="form-control">
                        <option>Default</option>
                      </select>
                    </div>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>FIELD</label>
                      <input type="text" className="form-control" placeholder="<Type then tab>" />
                    </div>
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <button className="btn-toolbar" style={{ padding: '0.5rem 1.5rem' }}>
                      Customize View
                    </button>
                  </div>
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>DATE ▼</th>
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
                        <td>2/11/2021 2:21 pm</td>
                        <td>vikram</td>
                        <td>CSV</td>
                        <td>Change</td>
                        <td>Primary Subsidiary</td>
                        <td>Tech Offshore Marine (s) Pte Ltd</td>
                        <td>Tech Onshore MEP Prefabricators Pte Ltd.</td>
                      </tr>
                      <tr>
                        <td>10/10/2021 11:40 pm</td>
                        <td>Nuvista Consultant1 Nuvista Consultant1</td>
                        <td>CSV</td>
                        <td>Create</td>
                        <td>Record</td>
                        <td>CustJob</td>
                        <td>496</td>
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
                      <td>Tech Onshore MEP Prefabricators Pte Ltd.</td>
                      <td>Yes</td>
                      <td></td>
                      <td>0.00 (SGD)</td>
                      <td>0.00 (SGD)</td>
                      <td>0.00 (SGD)</td>
                    </tr>
                    <tr>
                      <td>Tech Offshore Marine (s) Pte Ltd</td>
                      <td></td>
                      <td></td>
                      <td>0.00 (SGD)</td>
                      <td>0.00 (SGD)</td>
                      <td>0.00 (SGD)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'marketing' && (
              <div style={{ padding: '1rem' }}>
                {/* Lead Information Collapsible Section */}
                <div className="detail-section" style={{ marginBottom: '1.5rem' }}>
                  <div className="section-header" style={{ background: '#f0f0f0', padding: '0.75rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
                    <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem' }}></i>
                    <h3 style={{ fontSize: '14px', fontWeight: '600', margin: 0, display: 'inline' }}>Lead Information</h3>
                  </div>
                  <div className="section-body" style={{ padding: '1rem', border: '1px solid #e0e0e0', borderTop: 'none' }}>
                    <div className="detail-field" style={{ maxWidth: '400px' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>LEAD SOURCE</label>
                      <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>-</div>
                    </div>
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

            {activeTab === 'preferences' && (
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div className="detail-field">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>NUMBER FORMAT</label>
                    <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>-</div>
                  </div>
                  <div className="detail-field">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>SHIP COMPLETE</label>
                    <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>-</div>
                  </div>
                  <div className="detail-field">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>NEGATIVE NUMBER FORMAT</label>
                    <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>-</div>
                  </div>
                  <div className="detail-field">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>SHIPPING CARRIER</label>
                    <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>More</div>
                  </div>
                  <div className="detail-field">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>EMAIL PREFERENCE</label>
                    <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>Default</div>
                  </div>
                  <div className="detail-field">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>SHIPPING METHOD</label>
                    <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>-</div>
                  </div>
                  <div className="detail-field">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>PRINT ON CHECK AS</label>
                    <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>-</div>
                  </div>
                  <div className="detail-field">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '13px', color: '#666' }}>ALCOHOL RECIPIENT TYPE</label>
                    <div className="field-value" style={{ padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px', fontSize: '14px' }}>Consumer</div>
                  </div>
                </div>
                
                <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '4px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>SEND TRANSACTIONS VIA EMAIL</h4>
                  <div style={{ display: 'flex', gap: '2rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input type="checkbox" disabled style={{ cursor: 'not-allowed' }} />
                      <span style={{ fontSize: '13px', fontWeight: '500' }}>EMAIL</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input type="checkbox" disabled style={{ cursor: 'not-allowed' }} />
                      <span style={{ fontSize: '13px', fontWeight: '500' }}>PRINT</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input type="checkbox" disabled style={{ cursor: 'not-allowed' }} />
                      <span style={{ fontSize: '13px', fontWeight: '500' }}>FAX</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Footer Actions */}
        <div className="detail-footer-actions">
          <button className="btn-toolbar-primary" onClick={handleEdit}>
            <i className="fas fa-edit"></i>
            Edit
          </button>
          <button className="btn-toolbar" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn-toolbar">
            Accept Payment
          </button>
          <button className="btn-toolbar">
            <i className="fas fa-cog"></i>
            Actions
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

export default ViewCustomerDetail;
