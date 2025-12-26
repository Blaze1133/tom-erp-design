import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewPlantProjectMasterDetail = ({ onBack, onEdit, projectData }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);

  const project = projectData || {
    projectId: 'PLT001',
    projectName: 'Plant Manufacturing Project A',
    clientName: 'Industrial Corp Pte Ltd',
    poNo: 'PO-PLT-2024-001',
    mainCon: 'Main Contractor Alpha',
    status: 'Active',
    createdDate: '2024-01-15',
    createdBy: 'Admin User',
    lastModified: '2024-01-20'
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit(project);
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-project-diagram"></i>
          <div>
            <h1>Plant Project Master</h1>
            <div className="detail-subtitle">
              <span>{project.projectId}</span>
              <span>{project.projectName}</span>
              <span className={`status-badge-detail ${project.status.toLowerCase()}`}>
                {project.status}
              </span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={handleBack}>List</button>
          <button className="btn-action">Search</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <div className="toolbar-left">
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
        </div>
      </div>

      <div className="detail-content">
        <div className="detail-section">
          <div 
            className="section-header" 
            onClick={() => setPrimaryInfoCollapsed(!primaryInfoCollapsed)}
          >
            <i className={`fas fa-chevron-${primaryInfoCollapsed ? 'right' : 'down'}`}></i>
            <h3>Primary Information</h3>
          </div>
          {!primaryInfoCollapsed && (
            <div className="section-body">
              <div className="detail-grid">
                <div className="detail-field">
                  <label>PROJECT ID</label>
                  <div className="field-value">{project.projectId}</div>
                </div>
                <div className="detail-field">
                  <label>PROJECT NAME</label>
                  <div className="field-value">{project.projectName}</div>
                </div>
                <div className="detail-field">
                  <label>CLIENT NAME</label>
                  <div className="field-value">{project.clientName}</div>
                </div>
                <div className="detail-field">
                  <label>PO NO</label>
                  <div className="field-value">{project.poNo}</div>
                </div>
                <div className="detail-field">
                  <label>MAIN CONTRACTOR</label>
                  <div className="field-value">{project.mainCon || '-'}</div>
                </div>
                <div className="detail-field">
                  <label>STATUS</label>
                  <div className="field-value">
                    <span className={`status-badge ${project.status.toLowerCase()}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="detail-field">
                  <label>CREATED DATE</label>
                  <div className="field-value">{project.createdDate}</div>
                </div>
                <div className="detail-field">
                  <label>CREATED BY</label>
                  <div className="field-value">{project.createdBy}</div>
                </div>
                <div className="detail-field">
                  <label>LAST MODIFIED</label>
                  <div className="field-value">{project.lastModified}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="detail-footer">
        <button className="btn-secondary" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-primary" onClick={handleEdit}>
          <i className="fas fa-edit"></i>
          Edit
        </button>
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

export default ViewPlantProjectMasterDetail;
