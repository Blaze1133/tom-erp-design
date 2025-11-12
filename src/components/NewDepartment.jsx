import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const NewDepartment = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('workflow');

  const [formData, setFormData] = useState({
    departmentIsInactive: false,
    name: '',
    parentDepartment: '',
    subsidiaries: [],
    includeChildren: false,
    defaultBank: ''
  });

  const parentDepartments = [
    'MEP',
    'MEP MARINE',
    'O&G',
    'Piping',
    'Shipyard',
    'Shipyard : Keppel Fels',
    'Shipyard : Keppel Shipyard'
  ];

  const defaultBanks = [
    '- New -',
    'Tech Electric & Automation Pte Ltd.,(DBS)',
    'Tech Marine Offshore(s) DBS',
    'Tech Offshore Marine (DQ) -DBS',
    'Tech Offshore Marine (s)(DBS)',
    'TOM MEP OCBC',
    'TOM(S) DBS BANK SGD'
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
      showToast('Please enter a department name', 'error');
      return;
    }
    showToast('Department created successfully!', 'success');
    setTimeout(() => {
      setCurrentPage('view-departments');
    }, 1500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      setCurrentPage('view-departments');
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-sitemap" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Department</h1>
        </div>
        <div className="page-actions">
          <button className="btn-icon" onClick={handleCancel} title="Back">
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-icon" onClick={() => showToast('Forward', 'info')} title="Forward">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-view-option" onClick={() => setCurrentPage('view-departments')}>List</button>
          <button className="btn-view-option" onClick={() => showToast('Search', 'info')}>Search</button>
          <button className="btn-view-option" onClick={() => showToast('Customize', 'info')}>Customize</button>
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px 20px' }}>
          <div className="form-group" style={{ gridColumn: 'span 2', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px' }}>
            <input
              type="checkbox"
              id="inactive"
              checked={formData.departmentIsInactive}
              onChange={(e) => handleInputChange('departmentIsInactive', e.target.checked)}
              style={{ width: '14px', height: '14px' }}
            />
            <label htmlFor="inactive" style={{ margin: 0, fontWeight: '500', fontSize: '12px' }}>DEPARTMENT IS INACTIVE</label>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>NAME *</label>
            <input
              type="text"
              className="form-control"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              placeholder="Enter department name"
              style={{ fontSize: '13px' }}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>SUBSIDIARIES</label>
            <select
              className="form-control"
              value={formData.subsidiaries[0] || ''}
              onChange={(e) => handleInputChange('subsidiaries', [e.target.value])}
              style={{ fontSize: '13px' }}
            >
              <option value="">- Select Subsidiary -</option>
              <option value="Tech Onshore MEP Prefabricators Pte Ltd.">Tech Onshore MEP Prefabricators Pte Ltd.</option>
              <option value="Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd">Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd</option>
              <option value="Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd">Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd</option>
              <option value="Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DQ) Pte Ltd">Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DQ) Pte Ltd</option>
              <option value="Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (s) Pte Ltd">Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (s) Pte Ltd</option>
              <option value="Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (SV) Pte Ltd">Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (SV) Pte Ltd</option>
            </select>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>PARENT DEPARTMENT</label>
            <select
              className="form-control"
              value={formData.parentDepartment}
              onChange={(e) => handleInputChange('parentDepartment', e.target.value)}
              style={{ fontSize: '13px' }}
            >
              <option value="">- Select -</option>
              {parentDepartments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>DEFAULT BANK</label>
            <select
              className="form-control"
              value={formData.defaultBank}
              onChange={(e) => handleInputChange('defaultBank', e.target.value)}
              style={{ fontSize: '13px' }}
            >
              <option value="">- Select -</option>
              {defaultBanks.map(bank => (
                <option key={bank} value={bank}>{bank}</option>
              ))}
            </select>
          </div>

          <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              checked={formData.includeChildren}
              onChange={(e) => handleInputChange('includeChildren', e.target.checked)}
              style={{ width: '14px', height: '14px' }}
            />
            <label style={{ margin: 0, fontSize: '12px' }}>INCLUDE CHILDREN</label>
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
          <button
            className={`tab ${activeTab === 'workflow' ? 'active' : ''}`}
            onClick={() => setActiveTab('workflow')}
            style={{
              padding: '12px 20px',
              backgroundColor: activeTab === 'workflow' ? '#5b7a9e' : '#7a92b0',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500',
              borderRight: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            Workflow
          </button>
          <button
            className={`tab ${activeTab === 'system-notes' ? 'active' : ''}`}
            onClick={() => setActiveTab('system-notes')}
            style={{
              padding: '12px 20px',
              backgroundColor: activeTab === 'system-notes' ? '#5b7a9e' : '#7a92b0',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500'
            }}
          >
            System Notes
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content" style={{ padding: '20px', minHeight: '150px' }}>
        {activeTab === 'workflow' && (
          <div style={{ color: '#666', fontSize: '13px' }}>
            <p>Workflow information can be configured here.</p>
          </div>
        )}
        {activeTab === 'system-notes' && (
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

export default NewDepartment;
