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
                        <div className="field-value">-</div>
                      </div>
                      <div className="detail-field">
                        <label>END DATE</label>
                        <div className="field-value">-</div>
                      </div>
                      <div className="detail-field">
                        <label>PRIMARY CURRENCY</label>
                        <div className="field-value">SGD</div>
                      </div>
                      <div className="detail-field">
                        <label>DEFAULT RECEIVABLES ACCOUNT</label>
                        <div className="field-value">Use System Preference</div>
                      </div>
                      <div className="detail-field">
                        <label>REMINDER DAYS</label>
                        <div className="field-value">-</div>
                      </div>
                      <div className="detail-field">
                        <label>TERMS</label>
                        <div className="field-value">-</div>
                      </div>
                      <div className="detail-field">
                        <label>START DATE</label>
                        <div className="field-value">-</div>
                      </div>
                      <div className="detail-field">
                        <label>PRICE LEVEL</label>
                        <div className="field-value">-</div>
                      </div>
                      <div className="detail-field">
                        <label>CREDIT LIMIT</label>
                        <div className="field-value">HOLD AUTO</div>
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
                        <div className="field-value">-</div>
                      </div>
                      <div className="detail-field">
                        <label>TAX ROUNDING METHOD</label>
                        <div className="field-value">Round Off</div>
                      </div>
                      <div className="detail-field">
                        <label>RESALE NUMBER</label>
                        <div className="field-value">-</div>
                      </div>
                      <div className="detail-field">
                        <label>TAX ROUNDING PRECISION</label>
                        <div className="field-value">0.01 and Below</div>
                      </div>
                      <div className="detail-field">
                        <label>TAX ITEM</label>
                        <div className="field-value">-</div>
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
                        <div className="field-value">0.00</div>
                      </div>
                      <div className="detail-field">
                        <label>OVERDUE BALANCE</label>
                        <div className="field-value">0.00</div>
                      </div>
                      <div className="detail-field">
                        <label>DAYS OVERDUE</label>
                        <div className="field-value">-</div>
                      </div>
                      <div className="detail-field">
                        <label>UNBILLED BALANCE</label>
                        <div className="field-value">0.00</div>
                      </div>
                      <div className="detail-field">
                        <label>UNBILLED ORDERS</label>
                        <div className="field-value">0.00</div>
                      </div>
                      <div className="detail-field">
                        <label>DEPOSIT BALANCE</label>
                        <div className="field-value">0.00</div>
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

            {activeTab === 'system-info' && (
              <div>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>DATE CREATED</label>
                    <div className="field-value">10/10/2021 11:40 pm</div>
                  </div>
                  <div className="detail-field">
                    <label>INACTIVE</label>
                    <div className="field-value">-</div>
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
                      </tr>
                      <tr>
                        <td>10/10/2021 11:40 pm</td>
                        <td>Nuvista Consultant1 Nuvista Consultant1</td>
                        <td>CSV</td>
                        <td>Create</td>
                        <td>Record</td>
                        <td>Custom</td>
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
                        <div className="field-value">-</div>
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

            {activeTab === 'preferences' && (
              <div>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>NUMBER FORMAT</label>
                    <div className="field-value">-</div>
                  </div>
                  <div className="detail-field">
                    <label>SHIP COMPLETE</label>
                    <div className="field-value">-</div>
                  </div>
                  <div className="detail-field">
                    <label>NEGATIVE NUMBER FORMAT</label>
                    <div className="field-value">-</div>
                  </div>
                  <div className="detail-field">
                    <label>SHIPPING CARRIER</label>
                    <div className="field-value">More</div>
                  </div>
                  <div className="detail-field">
                    <label>EMAIL PREFERENCE</label>
                    <div className="field-value">Default</div>
                  </div>
                  <div className="detail-field">
                    <label>SHIPPING METHOD</label>
                    <div className="field-value">-</div>
                  </div>
                  <div className="detail-field">
                    <label>PRINT ON CHECK AS</label>
                    <div className="field-value">-</div>
                  </div>
                  <div className="detail-field">
                    <label>ALCOHOL RECIPIENT TYPE</label>
                    <div className="field-value">Consumer</div>
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
