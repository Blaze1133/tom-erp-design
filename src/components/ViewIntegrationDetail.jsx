import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewIntegrationDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [tokenAuthCollapsed, setTokenAuthCollapsed] = useState(false);
  const [oauth2Collapsed, setOauth2Collapsed] = useState(false);
  const [userCredsCollapsed, setUserCredsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('authentication');

  const integrationData = {
    name: 'Default Web Services Integrations',
    description: 'Default Web Services Integrations',
    state: 'Enabled',
    note: '',
    createdBy: '',
    lastStateChange: '2021-08-06 00:00:00.0',
    lastStateChangedBy: '',
    scriptId: 'custinteg_12b9377cbe7e5c94e8a7dd9d239295234d1a4e95479313f0f8a3959c7b8d49ac8',
    tokenBasedAuth: false,
    tbaIssueTokenEndpoint: '',
    tbaAuthorizationFlow: '',
    callbackUrl: '',
    authorizationCodeGrant: '',
    publicClient: '',
    redirectUri: '',
    scope: ['RESTLETS', 'REST WEB SERVICES', 'SUITEANALYTICS CONNECT', 'NETSUITE AI CONNECTOR SERVICE'],
    applicationLogo: '',
    applicationTermsOfUse: '',
    applicationPrivacyPolicy: '',
    oauth2ConsentPolicy: 'Always Ask',
    refreshTokenValidity: '168',
    maxTimeForTokenRotation: '168',
    clientCredentialsGrant: '',
    userCredentials: true
  };

  const handleEdit = () => {
    if (onEdit) onEdit();
  };

  const handleBack = () => {
    if (onBack) onBack();
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-plug"></i>
          <div>
            <h1>Integration</h1>
            <div className="detail-subtitle">
              <span>{integrationData.name}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">List</button>
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
        <button className="btn-toolbar">Actions</button>
      </div>

      <div className="detail-content">
        {/* Basic Info */}
        <div style={{ padding: '1.5rem', backgroundColor: 'white', marginBottom: '1rem', borderRadius: '4px' }}>
          <div className="detail-grid">
            <div className="detail-field">
              <label>NAME</label>
              <div className="field-value">{integrationData.name}</div>
            </div>
            <div className="detail-field">
              <label>STATE</label>
              <div className="field-value">{integrationData.state}</div>
            </div>
            <div className="detail-field">
              <label>CREATED BY</label>
              <div className="field-value">{integrationData.createdBy || '-'}</div>
            </div>
            <div className="detail-field">
              <label>DESCRIPTION</label>
              <div className="field-value">{integrationData.description}</div>
            </div>
            <div className="detail-field">
              <label>NOTE</label>
              <div className="field-value">{integrationData.note || '-'}</div>
            </div>
            <div className="detail-field">
              <label>LAST STATE CHANGE</label>
              <div className="field-value">{integrationData.lastStateChange}</div>
            </div>
            <div className="detail-field"></div>
            <div className="detail-field"></div>
            <div className="detail-field">
              <label>LAST STATE CHANGED BY</label>
              <div className="field-value">{integrationData.lastStateChangedBy || '-'}</div>
            </div>
            <div className="detail-field"></div>
            <div className="detail-field"></div>
            <div className="detail-field">
              <label>SCRIPT ID</label>
              <div className="field-value" style={{ fontSize: '0.75rem', wordBreak: 'break-all' }}>{integrationData.scriptId}</div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-section">
          <div className="detail-tabs">
            <div className="tabs-header" style={{ backgroundColor: '#5a6c7d' }}>
              <button 
                className={`tab-btn ${activeTab === 'authentication' ? 'active' : ''}`}
                onClick={() => setActiveTab('authentication')}
                style={{ color: 'white' }}
              >
                Authentication
              </button>
              <button 
                className={`tab-btn ${activeTab === 'executionLog' ? 'active' : ''}`}
                onClick={() => setActiveTab('executionLog')}
                style={{ color: 'white' }}
              >
                Execution Log
              </button>
              <button 
                className={`tab-btn ${activeTab === 'systemNotes' ? 'active' : ''}`}
                onClick={() => setActiveTab('systemNotes')}
                style={{ color: 'white' }}
              >
                System Notes
              </button>
            </div>

            <div className="tabs-content">
              {activeTab === 'authentication' && (
                <div style={{ padding: '1.5rem' }}>
                  {/* Token-based Authentication */}
                  <div className={`detail-section ${tokenAuthCollapsed ? 'collapsed' : ''}`} style={{ marginBottom: '1rem' }}>
                    <div className="section-header" onClick={() => setTokenAuthCollapsed(!tokenAuthCollapsed)} style={{ backgroundColor: '#e8e8e8', padding: '0.75rem 1rem' }}>
                      <i className="fas fa-chevron-down"></i>
                      <h3>Token-based Authentication</h3>
                    </div>
                    <div className="section-body">
                      <div className="detail-grid">
                        <div className="detail-field">
                          <label>TOKEN-BASED AUTHENTICATION</label>
                          <div className="field-value">{integrationData.tokenBasedAuth ? '☑' : '☐'}</div>
                        </div>
                        <div className="detail-field">
                          <label>TBA - ISSUETOKEN ENDPOINT</label>
                          <div className="field-value">{integrationData.tbaIssueTokenEndpoint || '-'}</div>
                        </div>
                        <div className="detail-field">
                          <label>TBA - AUTHORIZATION FLOW</label>
                          <div className="field-value">{integrationData.tbaAuthorizationFlow || '-'}</div>
                        </div>
                        <div className="detail-field"></div>
                        <div className="detail-field">
                          <label>CALLBACK URL</label>
                          <div className="field-value">{integrationData.callbackUrl || '-'}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* OAuth 2.0 */}
                  <div className={`detail-section ${oauth2Collapsed ? 'collapsed' : ''}`} style={{ marginBottom: '1rem' }}>
                    <div className="section-header" onClick={() => setOauth2Collapsed(!oauth2Collapsed)} style={{ backgroundColor: '#e8e8e8', padding: '0.75rem 1rem' }}>
                      <i className="fas fa-chevron-down"></i>
                      <h3>OAuth 2.0</h3>
                    </div>
                    <div className="section-body">
                      <div className="detail-grid">
                        <div className="detail-field">
                          <label>AUTHORIZATION CODE GRANT</label>
                          <div className="field-value">{integrationData.authorizationCodeGrant || '-'}</div>
                        </div>
                        <div className="detail-field">
                          <label>SCOPE</label>
                          <div className="field-value">
                            {integrationData.scope.map((s, i) => (
                              <div key={i} style={{ marginBottom: '0.25rem' }}>☑ {s}</div>
                            ))}
                          </div>
                        </div>
                        <div className="detail-field">
                          <label>APPLICATION LOGO</label>
                          <div className="field-value">{integrationData.applicationLogo || '-'}</div>
                        </div>
                        <div className="detail-field">
                          <label>PUBLIC CLIENT</label>
                          <div className="field-value">{integrationData.publicClient || '-'}</div>
                        </div>
                        <div className="detail-field"></div>
                        <div className="detail-field">
                          <label>APPLICATION TERMS OF USE</label>
                          <div className="field-value">{integrationData.applicationTermsOfUse || '-'}</div>
                        </div>
                        <div className="detail-field">
                          <label>REDIRECT URI</label>
                          <div className="field-value">{integrationData.redirectUri || '-'}</div>
                        </div>
                        <div className="detail-field"></div>
                        <div className="detail-field">
                          <label>APPLICATION PRIVACY POLICY</label>
                          <div className="field-value">{integrationData.applicationPrivacyPolicy || '-'}</div>
                        </div>
                        <div className="detail-field"></div>
                        <div className="detail-field"></div>
                        <div className="detail-field">
                          <label>OAUTH 2.0 CONSENT POLICY</label>
                          <div className="field-value">{integrationData.oauth2ConsentPolicy}</div>
                        </div>
                        <div className="detail-field">
                          <label>REFRESH TOKEN VALIDITY (IN HOURS)</label>
                          <div className="field-value">{integrationData.refreshTokenValidity}</div>
                        </div>
                        <div className="detail-field"></div>
                        <div className="detail-field"></div>
                        <div className="detail-field">
                          <label>MAXIMUM TIME FOR TOKEN ROTATION (IN HOURS)</label>
                          <div className="field-value">{integrationData.maxTimeForTokenRotation}</div>
                        </div>
                        <div className="detail-field"></div>
                        <div className="detail-field"></div>
                        <div className="detail-field">
                          <label>CLIENT CREDENTIALS (MACHINE TO MACHINE) GRANT</label>
                          <div className="field-value">{integrationData.clientCredentialsGrant || '-'}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* User Credentials */}
                  <div className={`detail-section ${userCredsCollapsed ? 'collapsed' : ''}`}>
                    <div className="section-header" onClick={() => setUserCredsCollapsed(!userCredsCollapsed)} style={{ backgroundColor: '#e8e8e8', padding: '0.75rem 1rem' }}>
                      <i className="fas fa-chevron-down"></i>
                      <h3>User Credentials</h3>
                    </div>
                    <div className="section-body">
                      <div className="detail-grid">
                        <div className="detail-field">
                          <label>USER CREDENTIALS</label>
                          <div className="field-value">{integrationData.userCredentials ? '☑' : '☐'}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
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

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default ViewIntegrationDetail;
