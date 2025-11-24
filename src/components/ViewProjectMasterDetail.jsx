import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewProjectMasterDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('details');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);

  // Sample data
  const projectData = {
    projectId: 'PRJ001',
    projectName: 'MEP Installation Project',
    clientName: 'ABC Construction Pte Ltd',
    poNo: 'PO-2024-001',
    mainCon: 'Main Contractor A',
    status: 'ACTIVE',
    createdDate: '2024-01-15',
    createdBy: 'Admin User',
    lastModified: '2024-01-20',
    description: 'Complete MEP installation for commercial building project including electrical, plumbing, and HVAC systems.',
    startDate: '2024-02-01',
    endDate: '2024-08-31',
    budget: 'SGD 2,500,000',
    location: 'Singapore'
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
            <h1>Project Master</h1>
            <div className="detail-subtitle">
              <span>{projectData.projectId} - {projectData.projectName}</span>
              <span className="status-badge-detail" style={{ background: '#4caf50' }}>
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
            <h3>Project Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>PROJECT ID</label>
                <div className="field-value">{projectData.projectId}</div>
              </div>
              <div className="detail-field">
                <label>PROJECT NAME</label>
                <div className="field-value">{projectData.projectName}</div>
              </div>
              <div className="detail-field">
                <label>CLIENT NAME</label>
                <div className="field-value">{projectData.clientName}</div>
              </div>
              <div className="detail-field">
                <label>PO NO</label>
                <div className="field-value">{projectData.poNo}</div>
              </div>
              <div className="detail-field">
                <label>MAIN CON</label>
                <div className="field-value">{projectData.mainCon}</div>
              </div>
              <div className="detail-field">
                <label>STATUS</label>
                <div className="field-value">{projectData.status}</div>
              </div>
              <div className="detail-field">
                <label>START DATE</label>
                <div className="field-value">{projectData.startDate}</div>
              </div>
              <div className="detail-field">
                <label>END DATE</label>
                <div className="field-value">{projectData.endDate}</div>
              </div>
              <div className="detail-field">
                <label>BUDGET</label>
                <div className="field-value">{projectData.budget}</div>
              </div>
              <div className="detail-field">
                <label>LOCATION</label>
                <div className="field-value">{projectData.location}</div>
              </div>
              <div className="detail-field">
                <label>CREATED BY</label>
                <div className="field-value">{projectData.createdBy}</div>
              </div>
              <div className="detail-field">
                <label>CREATED DATE</label>
                <div className="field-value">{projectData.createdDate}</div>
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
            <button 
              className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`}
              onClick={() => setActiveTab('custom')}
            >
              Custom
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'details' && (
              <div style={{ padding: '2rem' }}>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>DESCRIPTION</label>
                    <div className="field-value">{projectData.description}</div>
                  </div>
                  <div className="detail-field">
                    <label>LAST MODIFIED</label>
                    <div className="field-value">{projectData.lastModified}</div>
                  </div>
                </div>
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

            {activeTab === 'custom' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>No custom fields configured.</p>
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
