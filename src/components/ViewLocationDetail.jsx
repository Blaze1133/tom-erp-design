import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewLocationDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('address');

  const location = JSON.parse(sessionStorage.getItem('selectedLocation') || '{}');

  const [formData] = useState({
    locationIsInactive: false,
    name: location.name || 'Blok Seng Yard',
    parentLocation: '',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    locationType: '',
    timeZone: '',
    latitude: '',
    longitude: '',
    documentNumberPrefix: '',
    logo: '',
    defaultAllocationPriority: '',
    makeInventoryAvailable: false,
    branchId: '',
    displayInRssSr: false,
    internalId: '33'
  });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = () => {
    setCurrentPage('edit-location');
  };

  const handleBack = () => {
    setCurrentPage('view-locations');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-map-marker-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Location</h1>
        </div>
        <div className="page-actions">
          <button className="btn-icon" onClick={handleBack} title="Back">
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-icon" onClick={() => showToast('Forward', 'info')} title="Forward">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-view-option" onClick={() => setCurrentPage('view-locations')}>List</button>
          <button className="btn-view-option" onClick={() => showToast('Search', 'info')}>Search</button>
          <button className="btn-view-option" onClick={() => showToast('Customize', 'info')}>Customize</button>
          <button className="btn-view-option" onClick={() => showToast('More', 'info')}>More</button>
        </div>
      </div>

      <div className="form-actions" style={{ 
        padding: '10px 20px', 
        borderBottom: '1px solid #ddd',
        display: 'flex',
        gap: '8px'
      }}>
        <button className="btn btn-primary" onClick={handleEdit}>
          <i className="fas fa-edit"></i>
          Edit
        </button>
        <button className="btn btn-secondary" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn btn-secondary">
          <i className="fas fa-search"></i>
          Search
        </button>
        <button className="btn btn-secondary">
          <i className="fas fa-ellipsis-h"></i>
          Actions
        </button>
      </div>

      {/* Basic Information Section */}
      <div className="form-section" style={{ padding: '12px 20px', backgroundColor: '#f9f9f9' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px 20px' }}>
          <div className="form-group" style={{ gridColumn: 'span 3', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px' }}>
            <input
              type="checkbox"
              id="inactive"
              checked={formData.locationIsInactive}
              disabled
              style={{ width: '14px', height: '14px' }}
            />
            <label htmlFor="inactive" style={{ margin: 0, fontWeight: '500', fontSize: '12px' }}>LOCATION IS INACTIVE</label>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>NAME *</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.name}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>TIME ZONE</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.timeZone || '-'}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>DEFAULT ALLOCATION PRIORITY</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.defaultAllocationPriority || '-'}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>PARENT LOCATION</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.parentLocation || '-'}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>LATITUDE</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.latitude || '-'}</div>
          </div>

          <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              checked={formData.makeInventoryAvailable}
              disabled
              style={{ width: '14px', height: '14px' }}
            />
            <label style={{ margin: 0, fontSize: '12px' }}>MAKE INVENTORY AVAILABLE</label>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>SUBSIDIARY</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.subsidiary}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>LONGITUDE</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.longitude || '-'}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>BRANCH ID</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.branchId || '-'}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>LOCATION TYPE</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.locationType || '-'}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>DOCUMENT NUMBER PREFIX</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.documentNumberPrefix || '-'}</div>
          </div>

          <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              checked={formData.displayInRssSr}
              disabled
              style={{ width: '14px', height: '14px' }}
            />
            <label style={{ margin: 0, fontSize: '12px' }}>DISPLAY IN RSS SR</label>
          </div>

          <div className="form-group" style={{ gridColumn: 'span 2' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>LOGO</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.logo || '-'}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>INTERNAL ID</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.internalId}</div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="tabs-container" style={{ borderBottom: '2px solid #5b7a9e' }}>
        <div className="tabs" style={{ 
          display: 'flex', 
          backgroundColor: '#5b7a9e',
          padding: '0'
        }}>
          {['Address', 'Workflow', 'System Notes'].map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab.toLowerCase() ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.toLowerCase())}
              style={{
                padding: '12px 20px',
                backgroundColor: activeTab === tab.toLowerCase() ? '#5b7a9e' : '#7a92b0',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '500',
                borderRight: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content" style={{ padding: '20px', minHeight: '200px' }}>
        {activeTab === 'address' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '10px' }}>ADDRESS</h3>
                <div style={{ fontSize: '13px', color: '#666' }}>No address information available.</div>
              </div>
              <div>
                <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '10px' }}>RETURN ADDRESS</h3>
                <div style={{ fontSize: '13px', color: '#666' }}>No return address information available.</div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'workflow' && (
          <div style={{ color: '#666', fontSize: '13px' }}>
            <p>Workflow information will be displayed here.</p>
          </div>
        )}
        {activeTab === 'system notes' && (
          <div style={{ color: '#666', fontSize: '13px' }}>
            <p>System Notes will be displayed here.</p>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="form-actions" style={{ 
        padding: '10px 20px', 
        borderTop: '1px solid #ddd',
        display: 'flex',
        gap: '8px',
        marginTop: '10px'
      }}>
        <button className="btn btn-primary" onClick={handleEdit}>
          <i className="fas fa-edit"></i>
          Edit
        </button>
        <button className="btn btn-secondary" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
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

export default ViewLocationDetail;
