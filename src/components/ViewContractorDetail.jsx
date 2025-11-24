import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewContractorDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('details');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);

  // Sample data
  const contractorData = {
    autoNumber: '1097',
    contractorName: 'YEW CHEW',
    status: 'ACTIVE',
    createdDate: '2024-01-15',
    createdBy: 'Admin User',
    lastModified: '2024-01-20',
    description: 'Specialized contractor for marine and offshore construction projects.',
    contactPerson: 'Mr. Yew Chew',
    contactNumber: '+65 6234 5678',
    email: 'contact@yewchew.com',
    address: '123 Marine Drive, Singapore 018956',
    registrationNumber: 'REG-YC-2024-001',
    licenseNumber: 'LIC-001-2024'
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
          <i className="fas fa-hard-hat"></i>
          <div>
            <h1>Contractor</h1>
            <div className="detail-subtitle">
              <span>{contractorData.autoNumber} - {contractorData.contractorName}</span>
              <span className="status-badge-detail" style={{ background: '#4caf50' }}>
                {contractorData.status}
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
          <button className="btn-action">List</button>
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
            <h3>Contractor Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>AUTO NUMBER</label>
                <div className="field-value">{contractorData.autoNumber}</div>
              </div>
              <div className="detail-field">
                <label>CONTRACTOR NAME</label>
                <div className="field-value">{contractorData.contractorName}</div>
              </div>
              <div className="detail-field">
                <label>STATUS</label>
                <div className="field-value">{contractorData.status}</div>
              </div>
              <div className="detail-field">
                <label>CONTACT PERSON</label>
                <div className="field-value">{contractorData.contactPerson}</div>
              </div>
              <div className="detail-field">
                <label>CONTACT NUMBER</label>
                <div className="field-value">{contractorData.contactNumber}</div>
              </div>
              <div className="detail-field">
                <label>EMAIL</label>
                <div className="field-value">{contractorData.email}</div>
              </div>
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label>ADDRESS</label>
                <div className="field-value">{contractorData.address}</div>
              </div>
              <div className="detail-field">
                <label>REGISTRATION NUMBER</label>
                <div className="field-value">{contractorData.registrationNumber}</div>
              </div>
              <div className="detail-field">
                <label>LICENSE NUMBER</label>
                <div className="field-value">{contractorData.licenseNumber}</div>
              </div>
              <div className="detail-field">
                <label>CREATED BY</label>
                <div className="field-value">{contractorData.createdBy}</div>
              </div>
              <div className="detail-field">
                <label>CREATED DATE</label>
                <div className="field-value">{contractorData.createdDate}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`}
              onClick={() => setActiveTab('details')}
            >
              Details
            </button>
            <button 
              className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
            <button 
              className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`}
              onClick={() => setActiveTab('communication')}
            >
              Communication
            </button>
            <button 
              className={`tab-btn ${activeTab === 'system-info' ? 'active' : ''}`}
              onClick={() => setActiveTab('system-info')}
            >
              System Information
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'details' && (
              <div style={{ padding: '2rem' }}>
                <div className="detail-grid">
                  <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                    <label>DESCRIPTION</label>
                    <div className="field-value">{contractorData.description}</div>
                  </div>
                  <div className="detail-field">
                    <label>LAST MODIFIED</label>
                    <div className="field-value">{contractorData.lastModified}</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>No projects assigned to this contractor.</p>
              </div>
            )}

            {activeTab === 'communication' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>No communication records available.</p>
              </div>
            )}

            {activeTab === 'system-info' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>System information will be displayed here.</p>
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

export default ViewContractorDetail;
