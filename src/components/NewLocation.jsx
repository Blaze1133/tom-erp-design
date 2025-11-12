import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const NewLocation = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('address');

  const [formData, setFormData] = useState({
    locationIsInactive: false,
    name: '',
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
    displayInRssSr: false
  });

  const parentLocations = [
    'Hong Hang Shipyard',
    'Mega yard',
    'MEP MARINE CC',
    'Shipyards/Construction',
    'Singapore (TDQ)',
    'Singapore (TEA)',
    'Singapore (TMO)'
  ];

  const logos = [
    '- New -',
    'balaguru.png',
    'Camila',
    'Gowtham Sign',
    'Kannan Sign',
    'Mahen Sign',
    'MEP'
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
      showToast('Please enter a location name', 'error');
      return;
    }
    showToast('Location created successfully!', 'success');
    setTimeout(() => {
      setCurrentPage('view-locations');
    }, 1500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      setCurrentPage('view-locations');
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-map-marker-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Location</h1>
        </div>
        <div className="page-actions">
          <button className="btn-icon" onClick={handleCancel} title="Back">
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
        <button className="btn btn-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn btn-secondary" onClick={handleCancel}>
          <i className="fas fa-times"></i>
          Cancel
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
              onChange={(e) => handleInputChange('locationIsInactive', e.target.checked)}
              style={{ width: '14px', height: '14px' }}
            />
            <label htmlFor="inactive" style={{ margin: 0, fontWeight: '500', fontSize: '12px' }}>LOCATION IS INACTIVE</label>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>NAME *</label>
            <input
              type="text"
              className="form-control"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              placeholder="Enter location name"
              style={{ fontSize: '13px' }}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>TIME ZONE</label>
            <input
              type="text"
              className="form-control"
              value={formData.timeZone}
              onChange={(e) => handleInputChange('timeZone', e.target.value)}
              style={{ fontSize: '13px' }}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>DEFAULT ALLOCATION PRIORITY</label>
            <input
              type="text"
              className="form-control"
              value={formData.defaultAllocationPriority}
              onChange={(e) => handleInputChange('defaultAllocationPriority', e.target.value)}
              style={{ fontSize: '13px' }}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>PARENT LOCATION</label>
            <select
              className="form-control"
              value={formData.parentLocation}
              onChange={(e) => handleInputChange('parentLocation', e.target.value)}
              style={{ fontSize: '13px' }}
            >
              <option value="">- Select -</option>
              {parentLocations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>LATITUDE</label>
            <input
              type="text"
              className="form-control"
              value={formData.latitude}
              onChange={(e) => handleInputChange('latitude', e.target.value)}
              style={{ fontSize: '13px' }}
            />
          </div>

          <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              checked={formData.makeInventoryAvailable}
              onChange={(e) => handleInputChange('makeInventoryAvailable', e.target.checked)}
              style={{ width: '14px', height: '14px' }}
            />
            <label style={{ margin: 0, fontSize: '12px' }}>MAKE INVENTORY AVAILABLE</label>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>SUBSIDIARY</label>
            <select
              className="form-control"
              value={formData.subsidiary}
              onChange={(e) => handleInputChange('subsidiary', e.target.value)}
              style={{ fontSize: '13px' }}
            >
              <option value="Tech Onshore MEP Prefabricators Pte Ltd.">Tech Onshore MEP Prefabricators Pte Ltd.</option>
            </select>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>LONGITUDE</label>
            <input
              type="text"
              className="form-control"
              value={formData.longitude}
              onChange={(e) => handleInputChange('longitude', e.target.value)}
              style={{ fontSize: '13px' }}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>BRANCH ID</label>
            <input
              type="text"
              className="form-control"
              value={formData.branchId}
              onChange={(e) => handleInputChange('branchId', e.target.value)}
              style={{ fontSize: '13px' }}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>LOCATION TYPE</label>
            <select
              className="form-control"
              value={formData.locationType}
              onChange={(e) => handleInputChange('locationType', e.target.value)}
              style={{ fontSize: '13px' }}
            >
              <option value="">- Select -</option>
            </select>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>DOCUMENT NUMBER PREFIX</label>
            <input
              type="text"
              className="form-control"
              value={formData.documentNumberPrefix}
              onChange={(e) => handleInputChange('documentNumberPrefix', e.target.value)}
              style={{ fontSize: '13px' }}
            />
          </div>

          <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              checked={formData.displayInRssSr}
              onChange={(e) => handleInputChange('displayInRssSr', e.target.checked)}
              style={{ width: '14px', height: '14px' }}
            />
            <label style={{ margin: 0, fontSize: '12px' }}>DISPLAY IN RSS SR</label>
          </div>

          <div className="form-group" style={{ gridColumn: 'span 2' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>LOGO</label>
            <select
              className="form-control"
              value={formData.logo}
              onChange={(e) => handleInputChange('logo', e.target.value)}
              style={{ fontSize: '13px' }}
            >
              <option value="">- Select -</option>
              {logos.map(logo => (
                <option key={logo} value={logo}>{logo}</option>
              ))}
            </select>
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
      <div className="tab-content" style={{ padding: '20px', minHeight: '150px' }}>
        {activeTab === 'address' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '10px' }}>ADDRESS</h3>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Enter address"
                  style={{ fontSize: '13px' }}
                />
                <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
                  <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>
                    <i className="fas fa-map"></i> Map
                  </button>
                  <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>
                    <i className="fas fa-edit"></i> Edit
                  </button>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '10px' }}>RETURN ADDRESS</h3>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Enter return address"
                  style={{ fontSize: '13px' }}
                />
                <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
                  <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>
                    <i className="fas fa-map"></i> Map
                  </button>
                  <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>
                    <i className="fas fa-edit"></i> Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'workflow' && (
          <div style={{ color: '#666', fontSize: '13px' }}>
            <p>Workflow information can be configured here.</p>
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
        <button className="btn btn-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn btn-secondary" onClick={handleCancel}>
          <i className="fas fa-times"></i>
          Cancel
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

export default NewLocation;
