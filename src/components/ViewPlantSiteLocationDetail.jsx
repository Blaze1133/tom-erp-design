import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewPlantSiteLocationDetail = ({ onBack, onEdit, siteData }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);

  const site = siteData || {
    siteId: 'SITE001',
    siteName: 'Plant Manufacturing Facility A',
    siteAddress: '123 Industrial Park, Jurong West, Singapore 638458',
    status: 'Active',
    createdDate: '2024-01-10',
    createdBy: 'Admin User',
    lastModified: '2024-01-15'
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit(site);
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <h1>Plant Site Location</h1>
            <div className="detail-subtitle">
              <span>{site.siteId}</span>
              <span>{site.siteName}</span>
              <span className={`status-badge-detail ${site.status.toLowerCase()}`}>
                {site.status}
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
                  <label>SITE ID</label>
                  <div className="field-value">{site.siteId}</div>
                </div>
                <div className="detail-field">
                  <label>SITE NAME</label>
                  <div className="field-value">{site.siteName}</div>
                </div>
                <div className="detail-field full-width">
                  <label>SITE ADDRESS</label>
                  <div className="field-value">{site.siteAddress}</div>
                </div>
                <div className="detail-field">
                  <label>STATUS</label>
                  <div className="field-value">
                    <span className={`status-badge ${site.status.toLowerCase()}`}>
                      {site.status}
                    </span>
                  </div>
                </div>
                <div className="detail-field">
                  <label>CREATED DATE</label>
                  <div className="field-value">{site.createdDate}</div>
                </div>
                <div className="detail-field">
                  <label>CREATED BY</label>
                  <div className="field-value">{site.createdBy}</div>
                </div>
                <div className="detail-field">
                  <label>LAST MODIFIED</label>
                  <div className="field-value">{site.lastModified}</div>
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

export default ViewPlantSiteLocationDetail;
