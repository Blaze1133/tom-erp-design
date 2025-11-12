import React, { useState } from 'react';
import Toast from './Toast';

const EditIntegration = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('authentication');

  const [formData, setFormData] = useState({
    name: 'Default Web Services Integrations',
    description: 'Default Web Services Integrations',
    state: 'Enabled',
    note: '',
    tokenBasedAuth: false,
    tbaIssueTokenEndpoint: '',
    tbaAuthorizationFlow: '',
    callbackUrl: '',
    authorizationCodeGrant: '',
    publicClient: '',
    redirectUri: '',
    restlets: true,
    restWebServices: true,
    suiteanalyticsConnect: true,
    netsuiteAiConnector: true,
    applicationLogo: '',
    applicationTermsOfUse: '',
    applicationPrivacyPolicy: '',
    oauth2ConsentPolicy: 'Always Ask',
    refreshTokenValidity: '168',
    maxTimeForTokenRotation: '168',
    clientCredentialsGrant: '',
    userCredentials: true
  });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field) => {
    setFormData(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSave = () => {
    if (!formData.name) {
      showToast('Please enter Integration Name', 'error');
      return;
    }
    showToast('Integration saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (setCurrentPage) setCurrentPage('setup-manage-integration');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-plug" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Integration</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary">List</button>
          <button className="btn btn-secondary">More</button>
        </div>
      </div>

      <div className="form-container">
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-primary" onClick={handleSave}>Save</button>
          <button className="btn btn-tertiary" onClick={handleCancel}>Cancel</button>
        </div>

        <div className="form-section">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">NAME</label>
              <input type="text" className="form-control" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label required">STATE</label>
              <select className="form-control" value={formData.state} onChange={(e) => handleInputChange('state', e.target.value)}>
                <option>Enabled</option>
                <option>Disabled</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">CREATED BY</label>
              <input type="text" className="form-control" disabled />
            </div>

            <div className="form-group">
              <label className="form-label">DESCRIPTION</label>
              <input type="text" className="form-control" value={formData.description} onChange={(e) => handleInputChange('description', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">NOTE</label>
              <textarea className="form-control" rows="2" value={formData.note} onChange={(e) => handleInputChange('note', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">LAST STATE CHANGE</label>
              <input type="text" className="form-control" value="2021-08-06 00:00:00.0" disabled />
            </div>

            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label className="form-label">SCRIPT ID</label>
              <input type="text" className="form-control" value="custinteg_12b9377cbe7e5c94e8a7dd9d239295234d1a4e95479313f0f8a3959c7b8d49ac8" disabled style={{ fontSize: '0.75rem' }} />
            </div>
          </div>
        </div>

        <div className="detail-tabs">
          <div className="tabs-header" style={{ backgroundColor: '#5a6c7d' }}>
            <button className={`tab-btn ${activeTab === 'authentication' ? 'active' : ''}`} onClick={() => setActiveTab('authentication')} style={{ color: 'white' }}>Authentication</button>
            <button className={`tab-btn ${activeTab === 'executionLog' ? 'active' : ''}`} onClick={() => setActiveTab('executionLog')} style={{ color: 'white' }}>Execution Log</button>
            <button className={`tab-btn ${activeTab === 'systemNotes' ? 'active' : ''}`} onClick={() => setActiveTab('systemNotes')} style={{ color: 'white' }}>System Notes</button>
          </div>

          <div className="tabs-content">
            {activeTab === 'authentication' && (
              <div style={{ padding: '1rem' }}>
                <h3 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.75rem', backgroundColor: '#e8e8e8', padding: '0.5rem 1rem' }}>Token-based Authentication</h3>
                <div className="form-grid" style={{ marginBottom: '1rem' }}>
                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" checked={formData.tokenBasedAuth} onChange={() => handleCheckboxChange('tokenBasedAuth')} />
                      <span>TOKEN-BASED AUTHENTICATION</span>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="form-label">TBA - ISSUETOKEN ENDPOINT</label>
                    <input type="text" className="form-control" value={formData.tbaIssueTokenEndpoint} onChange={(e) => handleInputChange('tbaIssueTokenEndpoint', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">TBA - AUTHORIZATION FLOW</label>
                    <input type="text" className="form-control" value={formData.tbaAuthorizationFlow} onChange={(e) => handleInputChange('tbaAuthorizationFlow', e.target.value)} />
                  </div>
                  <div className="form-group"></div>
                  <div className="form-group">
                    <label className="form-label">CALLBACK URL</label>
                    <input type="text" className="form-control" value={formData.callbackUrl} onChange={(e) => handleInputChange('callbackUrl', e.target.value)} />
                  </div>
                </div>

                <h3 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.75rem', backgroundColor: '#e8e8e8', padding: '0.5rem 1rem' }}>OAuth 2.0</h3>
                <div className="form-grid" style={{ marginBottom: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">AUTHORIZATION CODE GRANT</label>
                    <input type="text" className="form-control" value={formData.authorizationCodeGrant} onChange={(e) => handleInputChange('authorizationCodeGrant', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">SCOPE</label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <label className="checkbox-label" style={{ marginBottom: 0 }}>
                        <input type="checkbox" checked={formData.restlets} onChange={() => handleCheckboxChange('restlets')} />
                        <span>RESTLETS</span>
                      </label>
                      <label className="checkbox-label" style={{ marginBottom: 0 }}>
                        <input type="checkbox" checked={formData.restWebServices} onChange={() => handleCheckboxChange('restWebServices')} />
                        <span>REST WEB SERVICES</span>
                      </label>
                      <label className="checkbox-label" style={{ marginBottom: 0 }}>
                        <input type="checkbox" checked={formData.suiteanalyticsConnect} onChange={() => handleCheckboxChange('suiteanalyticsConnect')} />
                        <span>SUITEANALYTICS CONNECT</span>
                      </label>
                      <label className="checkbox-label" style={{ marginBottom: 0 }}>
                        <input type="checkbox" checked={formData.netsuiteAiConnector} onChange={() => handleCheckboxChange('netsuiteAiConnector')} />
                        <span>NETSUITE AI CONNECTOR SERVICE</span>
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">APPLICATION LOGO</label>
                    <input type="text" className="form-control" value={formData.applicationLogo} onChange={(e) => handleInputChange('applicationLogo', e.target.value)} />
                  </div>

                  <div className="form-group">
                    <label className="form-label">PUBLIC CLIENT</label>
                    <input type="text" className="form-control" value={formData.publicClient} onChange={(e) => handleInputChange('publicClient', e.target.value)} />
                  </div>
                  <div className="form-group"></div>
                  <div className="form-group">
                    <label className="form-label">APPLICATION TERMS OF USE</label>
                    <input type="text" className="form-control" value={formData.applicationTermsOfUse} onChange={(e) => handleInputChange('applicationTermsOfUse', e.target.value)} />
                  </div>

                  <div className="form-group">
                    <label className="form-label">REDIRECT URI</label>
                    <input type="text" className="form-control" value={formData.redirectUri} onChange={(e) => handleInputChange('redirectUri', e.target.value)} />
                  </div>
                  <div className="form-group"></div>
                  <div className="form-group">
                    <label className="form-label">APPLICATION PRIVACY POLICY</label>
                    <input type="text" className="form-control" value={formData.applicationPrivacyPolicy} onChange={(e) => handleInputChange('applicationPrivacyPolicy', e.target.value)} />
                  </div>

                  <div className="form-group">
                    <label className="form-label">OAUTH 2.0 CONSENT POLICY</label>
                    <select className="form-control" value={formData.oauth2ConsentPolicy} onChange={(e) => handleInputChange('oauth2ConsentPolicy', e.target.value)}>
                      <option>Always Ask</option>
                      <option>Never Ask</option>
                    </select>
                  </div>
                  <div className="form-group"></div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="form-label">REFRESH TOKEN VALIDITY (IN HOURS)</label>
                    <input type="number" className="form-control" value={formData.refreshTokenValidity} onChange={(e) => handleInputChange('refreshTokenValidity', e.target.value)} />
                  </div>
                  <div className="form-group"></div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="form-label">MAXIMUM TIME FOR TOKEN ROTATION (IN HOURS)</label>
                    <input type="number" className="form-control" value={formData.maxTimeForTokenRotation} onChange={(e) => handleInputChange('maxTimeForTokenRotation', e.target.value)} />
                  </div>
                  <div className="form-group"></div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="form-label">CLIENT CREDENTIALS (MACHINE TO MACHINE) GRANT</label>
                    <input type="text" className="form-control" value={formData.clientCredentialsGrant} onChange={(e) => handleInputChange('clientCredentialsGrant', e.target.value)} />
                  </div>
                </div>

                <h3 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.75rem', backgroundColor: '#e8e8e8', padding: '0.5rem 1rem' }}>User Credentials</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" checked={formData.userCredentials} onChange={() => handleCheckboxChange('userCredentials')} />
                      <span>USER CREDENTIALS</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default EditIntegration;
