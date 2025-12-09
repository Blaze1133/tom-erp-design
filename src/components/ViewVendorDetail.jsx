import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewVendorDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('subsidiaries');
  const [communicationActiveTab, setCommunicationActiveTab] = useState('messages');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [emailPhoneCollapsed, setEmailPhoneCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);

  const vendorData = {
    id: 'VEN-2024-12324',
    name: '5MS Enterprise Pte Ltd',
    type: 'Company',
    category: 'Supplies',
    companyName: '5MS Enterprise Pte Ltd',
    webAddress: '',
    comments: '',
    email: '',
    phone: '',
    altPhone: '',
    fax: '',
    address: 'Serangoon Road\nSingapore\nSingapore Map',
    primarySubsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    
    // Financial Information
    account: 'SMS Enterprises',
    defaultExpenseAccount: '50400 Cost Of Sales - Tools',
    defaultPayablesAccount: '',
    defaultVendorPaymentAccount: '',
    primaryCurrency: 'SGD',
    terms: '',
    creditLimit: '(SGD)',
    incoterm: '',
    
    // Tax Information
    taxRegNumber: '',
    taxRoundingMethod: 'Round Off',
    taxRoundingPrecision: '0.01 and Below',
    taxEligible: '1099 ELIGIBLE',
    
    // Balance Information
    balance: '0.00 (SGD)',
    unbilledOrders: '0.00',
    
    // Project Information
    projectResource: '',
    
    // Vendor Bill Matching
    vendorBillPurchaseOrderQuantityTolerance: '',
    vendorBillItemReceiptQuantityTolerance: '',
    vendorBillPurchaseOrderAmountTolerance: '',
    vendorBillItemReceiptAmountTolerance: '',
    vendorBillPurchaseOrderQuantityDifference: '',
    vendorBillItemReceiptQuantityDifference: '',
    prepaymentBalance: '0.00 (SGD)',
    billingClass: '',
    
    // System Information
    dateCreated: '27/12/2022 3:47 pm',
    inactive: false
  };

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
          <i className="fas fa-truck"></i>
          <div>
            <h1>Vendor</h1>
            <div className="detail-subtitle">
              <span style={{ fontWeight: '600', color: '#333' }}>{vendorData.id}</span>
              <span style={{ margin: '0 0.5rem', color: '#999' }}>|</span>
              <span style={{ color: '#666' }}>{vendorData.name}</span>
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
          Make Payment
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
                <label>VENDOR ID</label>
                <div className="field-value">{vendorData.id}</div>
              </div>
              <div className="detail-field">
                <label>WEB ADDRESS</label>
                <div className="field-value">{vendorData.webAddress || '-'}</div>
              </div>
              <div className="detail-field">
                <label>COMMENTS</label>
                <div className="field-value">{vendorData.comments || '-'}</div>
              </div>
              <div className="detail-field">
                <label>NAME</label>
                <div className="field-value">{vendorData.name}</div>
              </div>
              <div className="detail-field">
                <label>CATEGORY</label>
                <div className="field-value">{vendorData.category}</div>
              </div>
              <div className="detail-field">
                <label>TYPE</label>
                <div className="field-value">{vendorData.type}</div>
              </div>
              <div className="detail-field">
                <label>COMPANY NAME</label>
                <div className="field-value">{vendorData.companyName}</div>
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
                <div className="field-value">{vendorData.email || '-'}</div>
              </div>
              <div className="detail-field">
                <label>ALT. PHONE</label>
                <div className="field-value">{vendorData.altPhone || '-'}</div>
              </div>
              <div className="detail-field">
                <label>ADDRESS</label>
                <div className="field-value">
                  {vendorData.address}
                  <br />
                  <small style={{color: 'blue', cursor: 'pointer'}}>🗺 Singapore Map</small>
                </div>
              </div>
              <div className="detail-field">
                <label>PHONE</label>
                <div className="field-value">{vendorData.phone || '-'}</div>
              </div>
              <div className="detail-field">
                <label>FAX</label>
                <div className="field-value">{vendorData.fax || '-'}</div>
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
                <div className="field-value">{vendorData.primarySubsidiary}</div>
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
                      <td>Tech Onshore MEP Prefabricators Pte Ltd.</td>
                      <td>Yes</td>
                      <td></td>
                      <td>0.00 (SGD)</td>
                      <td>0.00 (SGD)</td>
                      <td>0.00 (SGD)</td>
                      <td>0.00 (SGD)</td>
                      <td>(SGD)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'relationships' && (
              <div style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '1rem' }}>Contacts</h4>
                  <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
                    <div>
                      <label style={{ fontSize: '11px', color: '#666', marginBottom: '0.25rem', display: 'block' }}>CONTACT</label>
                      <input className="form-control" placeholder="<Type then tab>" style={{ width: '200px' }} />
                    </div>
                    <div>
                      <label style={{ fontSize: '11px', color: '#666', marginBottom: '0.25rem', display: 'block' }}>ROLE</label>
                      <select className="form-control" style={{ width: '150px' }}>
                        <option>Default</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: '11px', color: '#666', marginBottom: '0.25rem', display: 'block' }}>VIEW</label>
                      <select className="form-control" style={{ width: '150px' }}>
                        <option>Default</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                    <button className="btn-toolbar">New Contact</button>
                    <button className="btn-toolbar">Attach</button>
                    <button className="btn-toolbar">Update Primary</button>
                    <button className="btn-toolbar">Customize View</button>
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
                    <tr>
                      <td>Yes</td>
                      <td>Yes</td>
                      <td>Serangoon Road</td>
                      <td>Serangoon Road<br />Singapore<br />Singapore</td>
                      <td><button className="view-link">Edit</button></td>
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
                        <div className="field-value">{vendorData.account}</div>
                      </div>
                      <div className="detail-field">
                        <label>PRIMARY CURRENCY</label>
                        <div className="field-value">{vendorData.primaryCurrency}</div>
                      </div>
                      <div className="detail-field">
                        <label>DEFAULT EXPENSE ACCOUNT</label>
                        <div className="field-value">{vendorData.defaultExpenseAccount}</div>
                      </div>
                      <div className="detail-field">
                        <label>TERMS</label>
                        <div className="field-value">{vendorData.terms || '-'}</div>
                      </div>
                      <div className="detail-field">
                        <label>DEFAULT PAYABLES ACCOUNT</label>
                        <div className="field-value">{vendorData.defaultPayablesAccount || '-'}</div>
                      </div>
                      <div className="detail-field">
                        <label>CREDIT LIMIT</label>
                        <div className="field-value">{vendorData.creditLimit}</div>
                      </div>
                      <div className="detail-field">
                        <label>DEFAULT VENDOR PAYMENT ACCOUNT</label>
                        <div className="field-value">{vendorData.defaultVendorPaymentAccount || '-'}</div>
                      </div>
                      <div className="detail-field">
                        <label>INCOTERM</label>
                        <div className="field-value">{vendorData.incoterm || '-'}</div>
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
                        <div className="field-value">{vendorData.taxRegNumber || '-'}</div>
                      </div>
                      <div className="detail-field">
                        <label>TAX ROUNDING METHOD</label>
                        <div className="field-value">{vendorData.taxRoundingMethod}</div>
                      </div>
                      <div className="detail-field">
                        <label>TAX ROUNDING PRECISION</label>
                        <div className="field-value">{vendorData.taxRoundingPrecision}</div>
                      </div>
                      <div className="detail-field">
                        <label>1099 ELIGIBLE</label>
                        <div className="field-value">{vendorData.taxEligible}</div>
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
                        <div className="field-value">{vendorData.balance}</div>
                      </div>
                      <div className="detail-field">
                        <label>UNBILLED ORDERS</label>
                        <div className="field-value">{vendorData.unbilledOrders}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`detail-section`}>
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Project Information</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>PROJECT RESOURCE</label>
                        <div className="field-value">{vendorData.projectResource || '-'}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`detail-section`}>
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Vendor Bill Matching</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>VENDOR BILL - PURCHASE ORDER QUANTITY TOLERANCE</label>
                        <div className="field-value">{vendorData.vendorBillPurchaseOrderQuantityTolerance || '-'}</div>
                      </div>
                      <div className="detail-field">
                        <label>VENDOR BILL - ITEM RECEIPT QUANTITY TOLERANCE</label>
                        <div className="field-value">{vendorData.vendorBillItemReceiptQuantityTolerance || '-'}</div>
                      </div>
                      <div className="detail-field">
                        <label>VENDOR BILL - PURCHASE ORDER AMOUNT TOLERANCE</label>
                        <div className="field-value">{vendorData.vendorBillPurchaseOrderAmountTolerance || '-'}</div>
                      </div>
                      <div className="detail-field">
                        <label>VENDOR BILL - ITEM RECEIPT AMOUNT TOLERANCE</label>
                        <div className="field-value">{vendorData.vendorBillItemReceiptAmountTolerance || '-'}</div>
                      </div>
                      <div className="detail-field">
                        <label>VENDOR BILL - PURCHASE ORDER QUANTITY DIFFERENCE</label>
                        <div className="field-value">{vendorData.vendorBillPurchaseOrderQuantityDifference || '-'}</div>
                      </div>
                      <div className="detail-field">
                        <label>VENDOR BILL - ITEM RECEIPT QUANTITY DIFFERENCE</label>
                        <div className="field-value">{vendorData.vendorBillItemReceiptQuantityDifference || '-'}</div>
                      </div>
                      <div className="detail-field">
                        <label>PREPAYMENT BALANCE</label>
                        <div className="field-value">{vendorData.prepaymentBalance}</div>
                      </div>
                      <div className="detail-field">
                        <label>BILLING CLASS</label>
                        <div className="field-value">{vendorData.billingClass || '-'}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <h4>Currencies</h4>
                  <h4>Pricing Schedules</h4>
                  <h4>Transactions</h4>
                  <h4>Items</h4>
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>CURRENCY</th>
                        <th>BALANCE</th>
                        <th>PREPAYMENT BALANCE</th>
                        <th>UNBILLED ORDERS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>SGD</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'system-info' && (
              <div style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <label style={{ fontSize: '11px', color: '#666', marginBottom: '0.25rem', display: 'block' }}>DATE CREATED</label>
                    <div style={{ fontSize: '13px', color: '#333' }}>{vendorData.dateCreated}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="checkbox" checked={vendorData.inactive} disabled style={{ width: '18px', height: '18px' }} />
                    <label style={{ fontSize: '13px', color: '#333', margin: 0 }}>INACTIVE</label>
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
                        <input className="form-control" placeholder="<Type then tab>" style={{ width: '200px' }} readOnly />
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

            {activeTab === 'time-tracking' && (
              <div style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ fontSize: '11px', color: '#666', marginBottom: '0.25rem', display: 'block' }}>TIME APPROVER</label>
                  <div style={{ fontSize: '13px', color: '#333' }}>-</div>
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
            Make Payment
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

export default ViewVendorDetail;
