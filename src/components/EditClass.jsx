import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditClass = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('workflow');

  const classItem = JSON.parse(sessionStorage.getItem('selectedClass') || '{}');

  const [formData, setFormData] = useState({
    classIsInactive: false,
    name: classItem.name || 'Consumable Item',
    parentClass: '',
    subsidiaries: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    includeChildren: false,
    uenIdcFin: ''
  });

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
      showToast('Please enter a class name', 'error');
      return;
    }
    showToast('Class saved successfully!', 'success');
    setTimeout(() => {
      setCurrentPage('view-classes');
    }, 1500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      setCurrentPage('view-classes');
    }
  };

  return (
    <div className="sales-quotation">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '12px 20px',
        backgroundColor: '#fff',
        borderBottom: '2px solid #e8eef5'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <i className="fas fa-tags" style={{ fontSize: '20px', color: '#4a90e2' }}></i>
          <h1 style={{ fontSize: '18px', fontWeight: '600', margin: 0 }}>Class</h1>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button className="btn-icon" onClick={handleCancel} title="Back" style={{ padding: '6px 10px' }}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-icon" onClick={() => showToast('Forward', 'info')} title="Forward" style={{ padding: '6px 10px' }}>
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-view-option" onClick={() => setCurrentPage('view-classes')} style={{ padding: '6px 12px', fontSize: '13px' }}>List</button>
          <button className="btn-view-option" onClick={() => showToast('Search', 'info')} style={{ padding: '6px 12px', fontSize: '13px' }}>Search</button>
          <button className="btn-view-option" onClick={() => showToast('Customize', 'info')} style={{ padding: '6px 12px', fontSize: '13px' }}>Customize</button>
        </div>
      </div>

      <div style={{ 
        padding: '10px 20px', 
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        gap: '8px'
      }}>
        <button onClick={handleSave} style={{
          padding: '7px 16px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '13px',
          fontWeight: '500',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <i className="fas fa-save" style={{ fontSize: '12px' }}></i>
          Save
        </button>
        <button onClick={handleCancel} style={{
          padding: '7px 16px',
          backgroundColor: 'white',
          color: '#333',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '13px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <i className="fas fa-times" style={{ fontSize: '12px' }}></i>
          Cancel
        </button>
        <button style={{
          padding: '7px 16px',
          backgroundColor: 'white',
          color: '#333',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '13px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <i className="fas fa-search" style={{ fontSize: '12px' }}></i>
          Search
        </button>
        <button style={{
          padding: '7px 16px',
          backgroundColor: 'white',
          color: '#333',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '13px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <i className="fas fa-ellipsis-h" style={{ fontSize: '12px' }}></i>
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
              checked={formData.classIsInactive}
              onChange={(e) => handleInputChange('classIsInactive', e.target.checked)}
              style={{ width: '14px', height: '14px' }}
            />
            <label htmlFor="inactive" style={{ margin: 0, fontWeight: '500', fontSize: '12px' }}>CLASS IS INACTIVE</label>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>NAME *</label>
            <input
              type="text"
              className="form-control"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              style={{ fontSize: '13px' }}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>SUBSIDIARIES</label>
            <select
              className="form-control"
              value={formData.subsidiaries}
              onChange={(e) => handleInputChange('subsidiaries', e.target.value)}
              style={{ fontSize: '13px' }}
            >
              <option value="Tech Onshore MEP Prefabricators Pte Ltd.">Tech Onshore MEP Prefabricators Pte Ltd.</option>
              <option value="Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd">Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd</option>
              <option value="Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd">Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd</option>
              <option value="Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DQ) Pte Ltd">Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DQ) Pte Ltd</option>
            </select>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>PARENT CLASS</label>
            <select
              className="form-control"
              value={formData.parentClass}
              onChange={(e) => handleInputChange('parentClass', e.target.value)}
              style={{ fontSize: '13px' }}
            >
              <option value="">- Select -</option>
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

          <div className="form-group" style={{ gridColumn: 'span 2' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>UEN / IDIC / FIN</label>
            <input
              type="text"
              className="form-control"
              value={formData.uenIdcFin}
              onChange={(e) => handleInputChange('uenIdcFin', e.target.value)}
              style={{ fontSize: '13px' }}
            />
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
      <div style={{ 
        padding: '10px 20px', 
        borderTop: '1px solid #ddd',
        display: 'flex',
        gap: '8px',
        marginTop: '10px'
      }}>
        <button onClick={handleSave} style={{
          padding: '7px 16px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '13px',
          fontWeight: '500',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <i className="fas fa-save" style={{ fontSize: '12px' }}></i>
          Save
        </button>
        <button onClick={handleCancel} style={{
          padding: '7px 16px',
          backgroundColor: 'white',
          color: '#333',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '13px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <i className="fas fa-times" style={{ fontSize: '12px' }}></i>
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

export default EditClass;
