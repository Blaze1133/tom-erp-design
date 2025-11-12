import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewRoleDetail = ({ onBack }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [generalCollapsed, setGeneralCollapsed] = useState(false);
  const [subsidiaryCollapsed, setSubsidiaryCollapsed] = useState(false);
  const [authCollapsed, setAuthCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('permissions');

  const roleData = {
    name: 'TOM Account Role',
    id: 'customrole_tom_tomaccountrole',
    customStandard: 'Custom',
    centerType: 'Accounting Center',
    parentRole: 'Accountant',
    employeeRestrictions: 'NONE - NO DEFAULT',
    allowViewing: true,
    doNotRestrictEmployeeFields: true,
    restrictTimeAndExpenses: false,
    salesRole: false,
    supportRole: false,
    inactive: false,
    crmAdministrationPermissions: false,
    accessibleSubsidiaries: 'ALL',
    active: 'ACTIVE',
    userHierarchy: 'USER HIERARCHY',
    selected: 'SELECTED',
    restrictCrossSubsidiaryRecordViewing: false,
    enableSingleSignOnOnly: false,
    restrictThisRoleByDeviceId: false,
    twoFactorAuthRequired: 'Not required',
    durationOfTrustedDevice: '30 session'
  };

  const handleBack = () => {
    if (onBack) onBack();
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-user-shield"></i>
          <div>
            <h1>Role</h1>
            <div className="detail-subtitle">
              <span>{roleData.name}</span>
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
          <button className="btn-action">System Notes</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary">
          <i className="fas fa-edit"></i>
          Edit
        </button>
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
      </div>

      <div className="detail-content">
        {/* General Section */}
        <div className={`detail-section ${generalCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setGeneralCollapsed(!generalCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>General</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>NAME</label>
                <div className="field-value">{roleData.name}</div>
              </div>
              <div className="detail-field">
                <label>DO NOT RESTRICT EMPLOYEE FIELDS</label>
                <div className="field-value">{roleData.doNotRestrictEmployeeFields ? '☑' : '☐'}</div>
              </div>
              <div className="detail-field">
                <label>ID</label>
                <div className="field-value">{roleData.id}</div>
              </div>
              <div className="detail-field">
                <label>RESTRICT TIME AND EXPENSES</label>
                <div className="field-value">{roleData.restrictTimeAndExpenses ? '☑' : '☐'}</div>
              </div>
              <div className="detail-field">
                <label>CUSTOM/STANDARD</label>
                <div className="field-value">{roleData.customStandard}</div>
              </div>
              <div className="detail-field">
                <label>SALES ROLE</label>
                <div className="field-value">{roleData.salesRole ? '☑' : '☐'}</div>
              </div>
              <div className="detail-field">
                <label>CENTER TYPE</label>
                <div className="field-value">{roleData.centerType}</div>
              </div>
              <div className="detail-field">
                <label>SUPPORT ROLE</label>
                <div className="field-value">{roleData.supportRole ? '☑' : '☐'}</div>
              </div>
              <div className="detail-field">
                <label>PARENT ROLE</label>
                <div className="field-value">{roleData.parentRole}</div>
              </div>
              <div className="detail-field">
                <label>INACTIVE</label>
                <div className="field-value">{roleData.inactive ? '☑' : '☐'}</div>
              </div>
              <div className="detail-field">
                <label>EMPLOYEE RESTRICTIONS</label>
                <div className="field-value">{roleData.employeeRestrictions}</div>
              </div>
              <div className="detail-field">
                <label>CRM ADMINISTRATION PERMISSIONS</label>
                <div className="field-value">{roleData.crmAdministrationPermissions ? '☑' : '☐'}</div>
              </div>
              <div className="detail-field">
                <label>ALLOW VIEWING</label>
                <div className="field-value">{roleData.allowViewing ? '☑' : '☐'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Subsidiary Restrictions Section */}
        <div className={`detail-section ${subsidiaryCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setSubsidiaryCollapsed(!subsidiaryCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Subsidiary Restrictions</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>ACCESSIBLE SUBSIDIARIES</label>
                <div className="field-value">{roleData.accessibleSubsidiaries}</div>
              </div>
              <div className="detail-field">
                <label>RESTRICT CROSS-SUBSIDIARY RECORD VIEWING</label>
                <div className="field-value">{roleData.restrictCrossSubsidiaryRecordViewing ? '☑' : '☐'}</div>
              </div>
              <div className="detail-field">
                <label>ACTIVE</label>
                <div className="field-value">{roleData.active}</div>
              </div>
              <div className="detail-field"></div>
              <div className="detail-field">
                <label>USER HIERARCHY</label>
                <div className="field-value">{roleData.userHierarchy}</div>
              </div>
              <div className="detail-field"></div>
              <div className="detail-field">
                <label>SELECTED</label>
                <div className="field-value">{roleData.selected}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Authentication Section */}
        <div className={`detail-section ${authCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setAuthCollapsed(!authCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Authentication</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>ENABLE SINGLE SIGN-ON ONLY</label>
                <div className="field-value">{roleData.enableSingleSignOnOnly ? '☑' : '☐'}</div>
              </div>
              <div className="detail-field">
                <label>TWO-FACTOR AUTHENTICATION REQUIRED</label>
                <div className="field-value">{roleData.twoFactorAuthRequired}</div>
              </div>
              <div className="detail-field">
                <label>RESTRICT THIS ROLE BY DEVICE ID</label>
                <div className="field-value">{roleData.restrictThisRoleByDeviceId ? '☑' : '☐'}</div>
              </div>
              <div className="detail-field">
                <label>DURATION OF TRUSTED DEVICE</label>
                <div className="field-value">{roleData.durationOfTrustedDevice}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-section">
          <div className="detail-tabs">
            <div className="tabs-header" style={{ backgroundColor: '#5a6c7d' }}>
              <button 
                className={`tab-btn ${activeTab === 'permissions' ? 'active' : ''}`}
                onClick={() => setActiveTab('permissions')}
                style={{ color: 'white' }}
              >
                Permissions
              </button>
              <button 
                className={`tab-btn ${activeTab === 'restrictions' ? 'active' : ''}`}
                onClick={() => setActiveTab('restrictions')}
                style={{ color: 'white' }}
              >
                Restrictions
              </button>
              <button 
                className={`tab-btn ${activeTab === 'forms' ? 'active' : ''}`}
                onClick={() => setActiveTab('forms')}
                style={{ color: 'white' }}
              >
                Forms
              </button>
              <button 
                className={`tab-btn ${activeTab === 'searches' ? 'active' : ''}`}
                onClick={() => setActiveTab('searches')}
                style={{ color: 'white' }}
              >
                Searches
              </button>
              <button 
                className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`}
                onClick={() => setActiveTab('users')}
                style={{ color: 'white' }}
              >
                Users
              </button>
              <button 
                className={`tab-btn ${activeTab === 'preferences' ? 'active' : ''}`}
                onClick={() => setActiveTab('preferences')}
                style={{ color: 'white' }}
              >
                Preferences
              </button>
              <button 
                className={`tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
                onClick={() => setActiveTab('dashboard')}
                style={{ color: 'white' }}
              >
                Dashboard
              </button>
              <button 
                className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
                onClick={() => setActiveTab('history')}
                style={{ color: 'white' }}
              >
                History
              </button>
            </div>

            <div className="tabs-content">
              {activeTab === 'permissions' && (
                <div style={{ padding: '1rem' }}>
                  <p style={{ color: '#666', fontSize: '0.875rem' }}>Permissions content would be displayed here</p>
                </div>
              )}
              {activeTab === 'users' && (
                <div style={{ padding: '1rem' }}>
                  <p style={{ color: '#666', fontSize: '0.875rem' }}>Users list would be displayed here</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="detail-footer-actions">
          <button className="btn-toolbar-primary">
            <i className="fas fa-edit"></i>
            Edit
          </button>
          <button className="btn-toolbar" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default ViewRoleDetail;
