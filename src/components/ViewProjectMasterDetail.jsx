import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewProjectMasterDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('financial');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [projectDatesCollapsed, setProjectDatesCollapsed] = useState(false);
  const [emailPhoneCollapsed, setEmailPhoneCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);

  const projectData = {
    id: 28,
    customForm: 'TOM Project Form',
    jobId: '28',
    projectName: 'PROJECT_NAME',
    customer: '24 (Pirtek Asia Pte Ltd)',
    status: 'In Progress',
    startDate: '28/11/2025',
    vesselName: '',
    scopeOfWork: '',
    projectLocation: '',
    email: '',
    type: 'Default',
    phone: '',
    altPhone: '',
    fax: '',
    address: '',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    projDepartment: '',
    projClass: '',
    customerProjectNo: '',
    account: '',
    primaryCurrency: 'SGD',
    openingBalance: '',
    openingBalanceDate: '',
    openingBalanceAccount: '10100 Accounts Rec. ie - Trade Debtors',
    revRecOverridePercComplete: '',
    estimatedCost: '',
    estimatedRevenue: ''
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
          <i className="fas fa-project-diagram"></i>
          <div>
            <h1>Project</h1>
            <div className="detail-subtitle">
              <span>{projectData.jobId}</span>
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
                <label>CUSTOM FORM</label>
                <div className="field-value">{projectData.customForm}</div>
              </div>
              <div className="detail-field">
                <label>STATUS</label>
                <div className="field-value">{projectData.status}</div>
              </div>
              <div className="detail-field">
                <label>JOB ID</label>
                <div className="field-value">{projectData.jobId}</div>
              </div>
              <div className="detail-field">
                <label>CUSTOMER</label>
                <div className="field-value">{projectData.customer}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Dates Section */}
        <div className={`detail-section ${projectDatesCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setProjectDatesCollapsed(!projectDatesCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Project Dates</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>START DATE</label>
                <div className="field-value">{projectData.startDate}</div>
              </div>
              <div className="detail-field">
                <label>VESSEL NAME</label>
                <div className="field-value">{projectData.vesselName || '-'}</div>
              </div>
              <div className="detail-field">
                <label>PROJECT LOCATION</label>
                <div className="field-value">{projectData.projectLocation || '-'}</div>
              </div>
              <div className="detail-field">
                <label>SCOPE OF WORK</label>
                <div className="field-value">{projectData.scopeOfWork || '-'}</div>
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
                <div className="field-value">{projectData.email || '-'}</div>
              </div>
              <div className="detail-field">
                <label>TYPE</label>
                <div className="field-value">{projectData.type}</div>
              </div>
              <div className="detail-field">
                <label>ALT. PHONE</label>
                <div className="field-value">{projectData.altPhone || '-'}</div>
              </div>
              <div className="detail-field">
                <label>ADDRESS</label>
                <div className="field-value">{projectData.address || '-'}</div>
              </div>
              <div className="detail-field">
                <label>PHONE</label>
                <div className="field-value">{projectData.phone || '-'}</div>
              </div>
              <div className="detail-field">
                <label>FAX</label>
                <div className="field-value">{projectData.fax || '-'}</div>
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
                <label>SUBSIDIARY</label>
                <div className="field-value">{projectData.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>PROJ CLASS</label>
                <div className="field-value">{projectData.projClass || '-'}</div>
              </div>
              <div className="detail-field">
                <label>PROJ DEPARTMENT</label>
                <div className="field-value">{projectData.projDepartment || '-'}</div>
              </div>
              <div className="detail-field">
                <label>CUSTOMER PROJECT NO</label>
                <div className="field-value">{projectData.customerProjectNo || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'financial' ? 'active' : ''}`}
              onClick={() => setActiveTab('financial')}
            >
              Financial
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
              className={`tab-btn ${activeTab === 'related-records' ? 'active' : ''}`}
              onClick={() => setActiveTab('related-records')}
            >
              Related Records
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
              className={`tab-btn ${activeTab === 'project-indicators' ? 'active' : ''}`}
              onClick={() => setActiveTab('project-indicators')}
            >
              Project Indicators
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'financial' && (
              <div>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ marginBottom: '1rem' }}>Billing Information</h4>
                  <div className="detail-grid">
                    <div className="detail-field">
                      <label>ACCOUNT</label>
                      <div className="field-value">{projectData.account || '-'}</div>
                    </div>
                    <div className="detail-field">
                      <label>PRIMARY CURRENCY</label>
                      <div className="field-value">{projectData.primaryCurrency}</div>
                    </div>
                    <div className="detail-field">
                      <label>OPENING BALANCE</label>
                      <div className="field-value">{projectData.openingBalance || '-'}</div>
                    </div>
                    <div className="detail-field">
                      <label>OPENING BALANCE DATE</label>
                      <div className="field-value">{projectData.openingBalanceDate || '-'}</div>
                    </div>
                    <div className="detail-field">
                      <label>OPENING BALANCE ACCOUNT</label>
                      <div className="field-value">{projectData.openingBalanceAccount}</div>
                    </div>
                    <div className="detail-field">
                      <label>REV REC OVERRIDE PERC COMPLETE</label>
                      <div className="field-value">{projectData.revRecOverridePercComplete || '-'}</div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <h4 style={{ marginBottom: '1rem' }}>Quotations</h4>
                  <div className="detail-grid">
                    <div className="detail-field">
                      <label>ESTIMATED COST</label>
                      <div className="field-value">{projectData.estimatedCost || '-'}</div>
                    </div>
                    <div className="detail-field">
                      <label>ESTIMATED REVENUE</label>
                      <div className="field-value">{projectData.estimatedRevenue || '-'}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'relationships' && (
              <div>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ marginBottom: '1rem' }}>Contacts</h4>
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>CONTACT</th>
                        <th>JOB TITLE</th>
                        <th>EMAIL</th>
                        <th>MAIN PHONE</th>
                        <th>SUBSIDIARY</th>
                        <th>ROLE</th>
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
              </div>
            )}

            {activeTab === 'communication' && (
              <div>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ marginBottom: '1rem' }}>Phone Calls</h4>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <h4>Tasks</h4>
                    <h4>Events</h4>
                    <h4>Files</h4>
                    <h4>User_Notes</h4>
                  </div>
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>SUBJECT</th>
                        <th>PHONE NUMBER</th>
                        <th>ORGANIZER</th>
                        <th>DATE</th>
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

            {activeTab === 'related-records' && (
              <div>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ marginBottom: '1rem' }}>Enquiries</h4>
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>ESTIMATED BUDGET</th>
                        <th>BUDGET APPROVED</th>
                        <th>SALES READINESS</th>
                        <th>BUYING TIME FRAME</th>
                        <th>BUYING REASON</th>
                        <th>TITLE</th>
                        <th>STATUS</th>
                        <th>EXPECTED CLOSE</th>
                        <th>PROJECTED TOTAL</th>
                        <th>DETAILS</th>
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
              </div>
            )}

            {activeTab === 'system-info' && (
              <div>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>DATE CREATED</label>
                    <div className="field-value">28/11/2025 11:40 pm</div>
                  </div>
                  <div className="detail-field">
                    <label>INACTIVE</label>
                    <div className="field-value">-</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'project-indicators' && (
              <div>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ marginBottom: '1rem' }}>Project Indicators</h4>
                  <div>
                    <label>VIEW</label>
                    <select className="form-control" style={{ width: '200px' }}>
                      <option>Project Indicators</option>
                    </select>
                  </div>
                  <div style={{ marginTop: '1rem' }}>
                    <button className="btn btn-secondary">Customize View</button>
                  </div>
                  <table className="detail-items-table" style={{ marginTop: '1rem' }}>
                    <thead>
                      <tr>
                        <th>LAST UPDATE</th>
                        <th>TYPE</th>
                        <th>STATUS</th>
                        <th>MESSAGE</th>
                        <th>RECOMMENDED ACTION</th>
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

            {/* Other tabs with placeholder content */}
            {['custom'].includes(activeTab) && (
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

export default ViewProjectMasterDetail;
