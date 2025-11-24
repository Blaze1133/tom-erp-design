import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewSiteLocationDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('details');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);

  // Sample data
  const siteLocationData = {
    siteId: 'SITE001',
    siteName: 'Hong Hang Shipyard',
    siteAddress: '1 Benoi Road, Singapore 629890',
    status: 'ACTIVE',
    createdDate: '2024-01-15',
    createdBy: 'Admin User',
    lastModified: '2024-01-20',
    description: 'Main shipyard facility for marine construction and repair operations.',
    contactPerson: 'John Doe',
    contactNumber: '+65 6123 4567',
    email: 'contact@honghangsyard.com',
    operatingHours: '24/7',
    facilities: 'Dry dock, Crane facilities, Workshop areas'
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
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <h1>Site Location</h1>
            <div className="detail-subtitle">
              <span>{siteLocationData.siteId} - {siteLocationData.siteName}</span>
              <span className="status-badge-detail" style={{ background: '#4caf50' }}>
                {siteLocationData.status}
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
            <h3>Site Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SITE ID</label>
                <div className="field-value">{siteLocationData.siteId}</div>
              </div>
              <div className="detail-field">
                <label>SITE NAME</label>
                <div className="field-value">{siteLocationData.siteName}</div>
              </div>
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label>SITE ADDRESS</label>
                <div className="field-value">{siteLocationData.siteAddress}</div>
              </div>
              <div className="detail-field">
                <label>STATUS</label>
                <div className="field-value">{siteLocationData.status}</div>
              </div>
              <div className="detail-field">
                <label>CONTACT PERSON</label>
                <div className="field-value">{siteLocationData.contactPerson}</div>
              </div>
              <div className="detail-field">
                <label>CONTACT NUMBER</label>
                <div className="field-value">{siteLocationData.contactNumber}</div>
              </div>
              <div className="detail-field">
                <label>EMAIL</label>
                <div className="field-value">{siteLocationData.email}</div>
              </div>
              <div className="detail-field">
                <label>OPERATING HOURS</label>
                <div className="field-value">{siteLocationData.operatingHours}</div>
              </div>
              <div className="detail-field">
                <label>CREATED BY</label>
                <div className="field-value">{siteLocationData.createdBy}</div>
              </div>
              <div className="detail-field">
                <label>CREATED DATE</label>
                <div className="field-value">{siteLocationData.createdDate}</div>
              </div>
              <div className="detail-field">
                <label>LAST MODIFIED</label>
                <div className="field-value">{siteLocationData.lastModified}</div>
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
              className={`tab-btn ${activeTab === 'facilities' ? 'active' : ''}`}
              onClick={() => setActiveTab('facilities')}
            >
              Facilities
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
                    <div className="field-value">{siteLocationData.description}</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'facilities' && (
              <div style={{ padding: '2rem' }}>
                <div className="detail-grid">
                  <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                    <label>AVAILABLE FACILITIES</label>
                    <div className="field-value">{siteLocationData.facilities}</div>
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

export default ViewSiteLocationDetail;
