import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateProjectMaster = ({ isEdit = false, onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('financial');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [projectDatesCollapsed, setProjectDatesCollapsed] = useState(false);
  const [emailPhoneCollapsed, setEmailPhoneCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    customForm: 'TOM Project Form',
    jobId: isEdit ? '28' : '',
    projectName: isEdit ? 'PROJECT_NAME' : '',
    customer: isEdit ? '24 (Pirtek Asia Pte Ltd)' : '',
    status: '',
    startDate: isEdit ? '28/11/2025' : '',
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
  });

  const customForms = ['TOM Project Form', 'TOM Standard Form'];

  const statuses = ['Awarded', 'Closed', 'In Progress', 'Not Awarded', 'Pending'];

  const types = ['Default', 'HTML', 'PDF'];

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];

  const classes = [
    'Consumable Item', 'Course', 'Cutting Works', 'Electrical', 'Fabrication',
    'Hydrotesting', 'Installation work', 'Manpower Supply', 'Material Supply',
    'Module /Prefab', 'Piping', 'Project Works', 'Refurbishment works',
    'Rental', 'Repair & Referable', 'Sale of Scrap Metal', 'Structure'
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!formData.projectName.trim()) {
      showToast('Project name is required', 'error');
      return;
    }
    showToast(`Project ${isEdit ? 'updated' : 'created'} successfully!`, 'success');
    if (onSave) onSave(formData);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (onCancel) onCancel();
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
              <span>{formData.jobId}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">List</button>
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
                <select className="form-control" value={formData.customForm} onChange={(e) => handleInputChange('customForm', e.target.value)}>
                  {customForms.map(form => <option key={form} value={form}>{form}</option>)}
                </select>
              </div>
              <div className="detail-field">
                <label>STATUS <span style={{color: 'orange'}}>*</span></label>
                <select className="form-control" value={formData.status} onChange={(e) => handleInputChange('status', e.target.value)}>
                  <option value=""></option>
                  {statuses.map(status => <option key={status} value={status}>{status}</option>)}
                </select>
              </div>
              <div className="detail-field">
                <label>JOB ID <span style={{color: 'orange'}}>*</span></label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="text" className="form-control" value={formData.jobId} onChange={(e) => handleInputChange('jobId', e.target.value)} placeholder="To Be Generated" />
                  <label style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
                    <input type="checkbox" style={{ marginRight: '0.25rem' }} />
                    AUTO
                  </label>
                </div>
              </div>
              <div className="detail-field">
                <label>CUSTOMER</label>
                <input type="text" className="form-control" value={formData.customer} onChange={(e) => handleInputChange('customer', e.target.value)} />
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
                <input type="date" className="form-control" value={formData.startDate} onChange={(e) => handleInputChange('startDate', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>VESSEL NAME</label>
                <input type="text" className="form-control" value={formData.vesselName} onChange={(e) => handleInputChange('vesselName', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>PROJECT LOCATION</label>
                <input type="text" className="form-control" value={formData.projectLocation} onChange={(e) => handleInputChange('projectLocation', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>SCOPE OF WORK</label>
                <textarea className="form-control" rows="3" value={formData.scopeOfWork} onChange={(e) => handleInputChange('scopeOfWork', e.target.value)} />
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
                <input type="email" className="form-control" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>TYPE</label>
                <select className="form-control" value={formData.type} onChange={(e) => handleInputChange('type', e.target.value)}>
                  {types.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>
              <div className="detail-field">
                <label>ALT. PHONE</label>
                <input type="tel" className="form-control" value={formData.altPhone} onChange={(e) => handleInputChange('altPhone', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>ADDRESS</label>
                <textarea className="form-control" rows="3" value={formData.address} onChange={(e) => handleInputChange('address', e.target.value)} />
                <small style={{color: 'blue', cursor: 'pointer'}}>🗺 Map</small>
              </div>
              <div className="detail-field">
                <label>PHONE</label>
                <input type="tel" className="form-control" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>FAX</label>
                <input type="tel" className="form-control" value={formData.fax} onChange={(e) => handleInputChange('fax', e.target.value)} />
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
                <label>SUBSIDIARY <span style={{color: 'orange'}}>*</span></label>
                <select className="form-control" value={formData.subsidiary} onChange={(e) => handleInputChange('subsidiary', e.target.value)}>
                  {subsidiaries.map(subsidiary => <option key={subsidiary} value={subsidiary}>{subsidiary}</option>)}
                </select>
              </div>
              <div className="detail-field">
                <label>PROJ CLASS</label>
                <select className="form-control" value={formData.projClass} onChange={(e) => handleInputChange('projClass', e.target.value)}>
                  <option value=""></option>
                  {classes.map(cls => <option key={cls} value={cls}>{cls}</option>)}
                </select>
              </div>
              <div className="detail-field">
                <label>PROJ DEPARTMENT</label>
                <input type="text" className="form-control" value={formData.projDepartment} onChange={(e) => handleInputChange('projDepartment', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>CUSTOMER PROJECT NO</label>
                <input type="text" className="form-control" value={formData.customerProjectNo} onChange={(e) => handleInputChange('customerProjectNo', e.target.value)} />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'financial' ? 'active' : ''}`} onClick={() => setActiveTab('financial')}>Financial</button>
            <button className={`tab-btn ${activeTab === 'relationships' ? 'active' : ''}`} onClick={() => setActiveTab('relationships')}>Relationships</button>
            <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>Communication</button>
            <button className={`tab-btn ${activeTab === 'address' ? 'active' : ''}`} onClick={() => setActiveTab('address')}>Address</button>
            <button className={`tab-btn ${activeTab === 'related-records' ? 'active' : ''}`} onClick={() => setActiveTab('related-records')}>Related Records</button>
            <button className={`tab-btn ${activeTab === 'system-info' ? 'active' : ''}`} onClick={() => setActiveTab('system-info')}>System Information</button>
            <button className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`} onClick={() => setActiveTab('custom')}>Custom</button>
            <button className={`tab-btn ${activeTab === 'project-indicators' ? 'active' : ''}`} onClick={() => setActiveTab('project-indicators')}>Project Indicators</button>
          </div>

          <div className="tabs-content">
            {activeTab === 'financial' && (
              <div>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ marginBottom: '1rem' }}>Billing Information</h4>
                  <div className="detail-grid">
                    <div className="detail-field">
                      <label>ACCOUNT</label>
                      <input type="text" className="form-control" value={formData.account} onChange={(e) => handleInputChange('account', e.target.value)} />
                    </div>
                    <div className="detail-field">
                      <label>PRIMARY CURRENCY</label>
                      <select className="form-control" value={formData.primaryCurrency} onChange={(e) => handleInputChange('primaryCurrency', e.target.value)}>
                        <option>SGD</option>
                        <option>USD</option>
                        <option>EUR</option>
                      </select>
                    </div>
                    <div className="detail-field">
                      <label>OPENING BALANCE</label>
                      <input type="number" className="form-control" value={formData.openingBalance} onChange={(e) => handleInputChange('openingBalance', e.target.value)} />
                    </div>
                    <div className="detail-field">
                      <label>OPENING BALANCE DATE</label>
                      <input type="date" className="form-control" value={formData.openingBalanceDate} onChange={(e) => handleInputChange('openingBalanceDate', e.target.value)} />
                    </div>
                    <div className="detail-field">
                      <label>OPENING BALANCE ACCOUNT</label>
                      <input type="text" className="form-control" value={formData.openingBalanceAccount} onChange={(e) => handleInputChange('openingBalanceAccount', e.target.value)} />
                    </div>
                    <div className="detail-field">
                      <label>REV REC OVERRIDE PERC COMPLETE</label>
                      <input type="text" className="form-control" value={formData.revRecOverridePercComplete} onChange={(e) => handleInputChange('revRecOverridePercComplete', e.target.value)} />
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <h4 style={{ marginBottom: '1rem' }}>Quotations</h4>
                  <div className="detail-grid">
                    <div className="detail-field">
                      <label>ESTIMATED COST</label>
                      <input type="number" className="form-control" value={formData.estimatedCost} onChange={(e) => handleInputChange('estimatedCost', e.target.value)} />
                    </div>
                    <div className="detail-field">
                      <label>ESTIMATED REVENUE</label>
                      <input type="number" className="form-control" value={formData.estimatedRevenue} onChange={(e) => handleInputChange('estimatedRevenue', e.target.value)} />
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
                      <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                        No records to show.
                      </td>
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
                    <input type="text" className="form-control" value={new Date().toLocaleString()} readOnly />
                  </div>
                  <div className="detail-field">
                    <label>INACTIVE</label>
                    <input type="checkbox" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'project-indicators' && (
              <div>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ marginBottom: '1rem' }}>Project Indicators</h4>
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
                        <td colSpan="5" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {['custom'].includes(activeTab) && (
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

export default CreateProjectMaster;
