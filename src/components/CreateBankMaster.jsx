import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateBankMaster = ({ onBack, bankData }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('notes');

  // Form state
  const [formData, setFormData] = useState({
    name: bankData?.name || '',
    inactive: bankData?.inactive || false,
    bankId: bankData?.bankId || '',
    subsidiary: bankData?.subsidiary || 'Tech Onshore MEP Prefabricators Pte Ltd.',
    userNotes: [],
    systemNotes: [],
    files: [],
    workflows: []
  });

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];

  const subsidiaryOptions = [
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DQ) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (s) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (SV) Pte Ltd'
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    if (!formData.name) {
      showToast('Please enter a bank name', 'error');
      return;
    }
    showToast('Bank Master saved successfully!', 'success');
    setTimeout(() => {
      if (onBack) onBack();
    }, 1500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (onBack) onBack();
    }
  };

  const handleNewNote = () => {
    showToast('New note functionality will be implemented', 'info');
  };

  const handleAttachFile = () => {
    showToast('File attachment functionality will be implemented', 'info');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-university" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Bank Master</h1>
          {formData.name && (
            <div style={{ marginLeft: '1rem', fontSize: '1.25rem', fontWeight: '500', color: '#666' }}>
              {formData.name}
            </div>
          )}
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-sync"></i>
            Actions
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information */}
        <div className="form-section">
          <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="form-group">
              <label className="form-label">NAME <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter bank name"
              />
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
                <input 
                  type="checkbox" 
                  id="inactive"
                  checked={formData.inactive}
                  onChange={(e) => handleInputChange('inactive', e.target.checked)}
                  style={{ marginRight: '0.5rem' }}
                />
                <label htmlFor="inactive" style={{ margin: 0, fontSize: '0.875rem', cursor: 'pointer' }}>
                  INACTIVE
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">BANK ID</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.bankId}
                onChange={(e) => handleInputChange('bankId', e.target.value)}
                placeholder="Enter bank ID"
              />
            </div>
          </div>
          <div className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
            <div className="form-group">
              <label className="form-label">SUBSIDIARY <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleInputChange('subsidiary', e.target.value)}
              >
                {subsidiaryOptions.map((sub, index) => (
                  <option key={index} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'notes' ? 'active' : ''}`}
              onClick={() => setActiveTab('notes')}
            >
              Notes
            </button>
            <button 
              className={`tab-btn ${activeTab === 'files' ? 'active' : ''}`}
              onClick={() => setActiveTab('files')}
            >
              Files
            </button>
            <button 
              className={`tab-btn ${activeTab === 'workflow' ? 'active' : ''}`}
              onClick={() => setActiveTab('workflow')}
            >
              Workflow
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'notes' && (
              <div>
                <div className="subtabs-header" style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  borderBottom: '1px solid #e0e0e0',
                  padding: '1rem 0 0 0',
                  marginBottom: '1rem'
                }}>
                  <button 
                    className="subtab-btn active"
                    style={{
                      padding: '0.5rem 1rem',
                      background: '#5b6b8f',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px 4px 0 0',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}
                  >
                    User Notes
                  </button>
                  <button 
                    className="subtab-btn"
                    style={{
                      padding: '0.5rem 1rem',
                      background: '#e0e0e0',
                      color: '#666',
                      border: 'none',
                      borderRadius: '4px 4px 0 0',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}
                  >
                    System Notes
                  </button>
                </div>
                
                <div style={{ padding: '1rem 0' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#666', marginBottom: '0.5rem', display: 'block' }}>
                      VIEW
                    </label>
                    <select className="form-control" style={{ width: '200px' }}>
                      <option>Default</option>
                    </select>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                    <button className="btn btn-secondary" onClick={handleNewNote}>
                      <i className="fas fa-plus"></i>
                      New Note
                    </button>
                    <button className="btn btn-secondary">
                      Customize View
                    </button>
                  </div>

                  <div className="items-table-wrapper">
                    <table className="detail-items-table">
                      <thead>
                        <tr>
                          <th style={{ width: '5%' }}>EDIT</th>
                          <th style={{ width: '15%' }}>DATE</th>
                          <th style={{ width: '15%' }}>AUTHOR</th>
                          <th style={{ width: '20%' }}>TITLE</th>
                          <th style={{ width: '20%' }}>MEMO</th>
                          <th style={{ width: '10%' }}>DIRECTION</th>
                          <th style={{ width: '10%' }}>TYPE</th>
                          <th style={{ width: '5%' }}>REMOVE</th>
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
                </div>
              </div>
            )}

            {activeTab === 'files' && (
              <div style={{ padding: '1rem 0' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1rem' }}>
                    ATTACH EXISTING FILES
                  </p>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="<Type then tab>"
                    style={{ width: '300px', marginBottom: '1rem' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                  <button className="btn btn-secondary" onClick={handleAttachFile}>
                    <i className="fas fa-paperclip"></i>
                    Attach
                  </button>
                  <button className="btn btn-secondary">
                    New File
                  </button>
                </div>

                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th style={{ width: '30%' }}>ATTACHED FILES</th>
                        <th style={{ width: '15%' }}>FOLDER</th>
                        <th style={{ width: '10%' }}>SIZE (KB)</th>
                        <th style={{ width: '15%' }}>LAST MODIFIED</th>
                        <th style={{ width: '15%' }}>DOCUMENT TYPE</th>
                        <th style={{ width: '5%' }}>REMOVE</th>
                        <th style={{ width: '5%' }}>EDIT</th>
                        <th style={{ width: '5%' }}>DOWNLOAD</th>
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
              </div>
            )}

            {activeTab === 'workflow' && (
              <div style={{ padding: '1rem 0' }}>
                <div className="subtabs-header" style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  borderBottom: '1px solid #e0e0e0',
                  padding: '1rem 0 0 0',
                  marginBottom: '1rem'
                }}>
                  <button 
                    className="subtab-btn active"
                    style={{
                      padding: '0.5rem 1rem',
                      background: '#5b6b8f',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px 4px 0 0',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}
                  >
                    Active Workflows
                  </button>
                  <button 
                    className="subtab-btn"
                    style={{
                      padding: '0.5rem 1rem',
                      background: '#e0e0e0',
                      color: '#666',
                      border: 'none',
                      borderRadius: '4px 4px 0 0',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}
                  >
                    Workflow History
                  </button>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#666', marginBottom: '0.5rem', display: 'block' }}>
                    VIEW
                  </label>
                  <select className="form-control" style={{ width: '200px' }}>
                    <option>Default</option>
                  </select>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                  <button className="btn btn-secondary">
                    Customize View
                  </button>
                  <button className="btn btn-secondary">
                    Refresh
                  </button>
                </div>

                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th style={{ width: '20%' }}>WORKFLOW</th>
                        <th style={{ width: '15%' }}>CURRENT STATE</th>
                        <th style={{ width: '15%' }}>DATE ENTERED WORKFLOW</th>
                        <th style={{ width: '15%' }}>DATE ENTERED STATE</th>
                        <th style={{ width: '15%' }}>OPTIONS</th>
                        <th style={{ width: '10%' }}>STATUS</th>
                        <th style={{ width: '10%' }}>CANCEL</th>
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
              </div>
            )}
          </div>
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-secondary" onClick={handleSave}>
              <i className="fas fa-save"></i>
              Save
            </button>
            <button className="btn btn-secondary">
              Actions
            </button>
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

export default CreateBankMaster;
