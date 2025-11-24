import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewProjectDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('financial');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [projectDatesCollapsed, setProjectDatesCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);

  const projectData = {
    jobId: 'PRO-00003',
    name: 'TOM Project',
    status: 'CLOSED',
    projectName: 'TOM Project',
    customer: '13 Test Arjun',
    startDate: '4/10/2021',
    projectLocation: '',
    vesselName: '',
    scopeOfWork: '',
    subsidiary: 'Tech Electric & Automation Pte Ltd',
    projDepartment: '',
    projClass: '',
    customerProjectNo: '',
    email: 'Default',
    phone: '',
    fax: '',
    address: 'Test Arjun\nSingapore Map',
    estimatedCost: 0.00,
    estimatedRevenue: 0.00,
    revRecOverridePercent: 0.00,
    primaryCurrency: 'SGD',
    keyRecOverridePercent: 0.00
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-projects');
    }
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('edit-project');
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
              <span>{projectData.name}</span>
              <span className="status-badge-detail" style={{ background: '#28a745' }}>
                {projectData.status}
              </span>
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
          <button className="btn-action" onClick={() => setCurrentPage('view-projects')}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
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
          Print
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-copy"></i>
          Copy
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
                <label>JOB ID</label>
                <div className="field-value">{projectData.jobId}</div>
              </div>
              <div className="detail-field">
                <label>PROJECT NAME</label>
                <div className="field-value">{projectData.projectName}</div>
              </div>
              <div className="detail-field">
                <label>STATUS</label>
                <div className="field-value">{projectData.status}</div>
              </div>
              <div className="detail-field">
                <label>NAME</label>
                <div className="field-value">{projectData.name}</div>
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
                <label>PROJECT LOCATION</label>
                <div className="field-value">{projectData.projectLocation || '-'}</div>
              </div>
              <div className="detail-field">
                <label>VESSEL NAME</label>
                <div className="field-value">{projectData.vesselName || '-'}</div>
              </div>
              <div className="detail-field">
                <label>SCOPE OF WORK</label>
                <div className="field-value">{projectData.scopeOfWork || '-'}</div>
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
                <label>PROJ DEPARTMENT</label>
                <div className="field-value">{projectData.projDepartment || '-'}</div>
              </div>
              <div className="detail-field">
                <label>PROJ CLASS</label>
                <div className="field-value">{projectData.projClass || '-'}</div>
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
              className={`tab-btn ${activeTab === 'system-information' ? 'active' : ''}`}
              onClick={() => setActiveTab('system-information')}
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
            <button 
              className={`tab-btn ${activeTab === 'resources' ? 'active' : ''}`}
              onClick={() => setActiveTab('resources')}
            >
              Resources
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'financial' && (
              <div className="financial-content">
                <div className="billing-info">
                  <h4>Billing Information</h4>
                  <div className="detail-grid">
                    <div className="detail-field">
                      <label>ACCOUNT</label>
                      <div className="field-value">-</div>
                    </div>
                    <div className="detail-field">
                      <label>PRIMARY CURRENCY</label>
                      <div className="field-value">{projectData.primaryCurrency}</div>
                    </div>
                    <div className="detail-field">
                      <label>REV REC OVERRIDE PERCENT COMPLETE</label>
                      <div className="field-value">{projectData.revRecOverridePercent}%</div>
                    </div>
                  </div>
                </div>
                <div className="quotations-info">
                  <h4>Quotations</h4>
                  <div className="detail-grid">
                    <div className="detail-field">
                      <label>ESTIMATED COST</label>
                      <div className="field-value">${projectData.estimatedCost.toFixed(2)}</div>
                    </div>
                    <div className="detail-field">
                      <label>ESTIMATED REVENUE</label>
                      <div className="field-value">${projectData.estimatedRevenue.toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'relationships' && (
              <div className="relationships-content">
                <div className="contacts-section">
                  <div className="section-header-small">
                    <h4>Contacts</h4>
                    <div className="section-controls">
                      <button className="btn-small">New Contact</button>
                      <button className="btn-small">Attach</button>
                      <button className="btn-small">Update Primary</button>
                      <button className="btn-small">Customize View</button>
                    </div>
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
                        <th>MESSAGING/LAST OPTOUT/KEYWORD</th>
                        <th>MESSAGING/EXPLICIT ENTITY</th>
                        <th>ROLE</th>
                        <th>REMOVE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="11" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="subprojects-section" style={{ marginTop: '2rem' }}>
                  <h4>Subprojects</h4>
                  <div style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>
                    <p>No subprojects found</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'communication' && (
              <div className="communication-content">
                <div className="messages-section">
                  <div className="section-header-small">
                    <h4>Messages</h4>
                    <div className="section-controls">
                      <select className="form-control-small">
                        <option>Default</option>
                      </select>
                    </div>
                  </div>
                  <div className="communication-tabs">
                    <button className="comm-tab active">Email</button>
                    <button className="comm-tab">Attach</button>
                    <button className="comm-tab">Letter</button>
                    <button className="comm-tab">PDF</button>
                    <button className="comm-tab">Fax</button>
                    <button className="comm-tab">Refresh</button>
                    <button className="comm-tab">View History</button>
                    <button className="comm-tab">Customize View</button>
                  </div>
                  <table className="detail-items-table">
                    <thead>
                      <tr>
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
                        <td colSpan="10" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'address' && (
              <div className="address-content">
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
                      <td>-</td>
                      <td>Test Arjun</td>
                      <td>Singapore</td>
                      <td>
                        <button className="view-link">Edit</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'related-records' && (
              <div className="related-records-content">
                <div className="enquiries-section">
                  <div className="section-header-small">
                    <h4>Enquiries</h4>
                    <div className="section-controls">
                      <select className="form-control-small">
                        <option>Opportunity Default</option>
                        <option>All</option>
                      </select>
                      <button className="btn-small">New Enquiry</button>
                      <button className="btn-small">Customize View</button>
                    </div>
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
                        <td colSpan="11" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'system-information' && (
              <div className="system-info-content">
                <table className="detail-items-table">
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
                      <td>17/1/2022 12:52 pm</td>
                      <td>Ravi Tech</td>
                      <td>UI</td>
                      <td>Change</td>
                      <td>Job ID</td>
                      <td>PRO-00002</td>
                      <td>PRO-00003</td>
                    </tr>
                    <tr>
                      <td>17/1/2022 12:51 pm</td>
                      <td>Ravi Tech</td>
                      <td>UI</td>
                      <td>Change</td>
                      <td>Job ID</td>
                      <td>PRO-01</td>
                      <td>PRO-00002</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'custom' && (
              <div className="custom-content">
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>APP INTERNAL ID</label>
                    <div className="field-value">-</div>
                  </div>
                  <div className="detail-field">
                    <label>PROJECT MANAGER</label>
                    <div className="field-value">-</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'project-indicators' && (
              <div className="project-indicators-content">
                <div className="indicators-section">
                  <div className="section-header-small">
                    <h4>Project Indicators</h4>
                    <div className="section-controls">
                      <select className="form-control-small">
                        <option>Project Indicators</option>
                      </select>
                      <button className="btn-small">Customize View</button>
                    </div>
                  </div>
                  <table className="detail-items-table">
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
                        <td>4/10/2021</td>
                        <td>Expenses to approve</td>
                        <td><span className="status-indicator green"></span></td>
                        <td>All expenses for this project are approved.</td>
                        <td>No action necessary</td>
                      </tr>
                      <tr>
                        <td>4/10/2021</td>
                        <td>Time not tracked</td>
                        <td><span className="status-indicator green"></span></td>
                        <td>All planned time has been tracked for this project.</td>
                        <td>No action necessary</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="resources-content">
                <div className="time-tracking-section">
                  <div className="section-header-small">
                    <h4>Time Tracking</h4>
                    <div className="section-controls">
                      <select className="form-control-small">
                        <option>Default</option>
                      </select>
                      <select className="form-control-small">
                        <option>Either</option>
                      </select>
                      <select className="form-control-small">
                        <option>All</option>
                      </select>
                      <button className="btn-small">New Time</button>
                      <button className="btn-small">New Weekly Time</button>
                      <button className="btn-small">Customize View</button>
                    </div>
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
                        <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

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

export default ViewProjectDetail;
