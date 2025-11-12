import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditAccountingList = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('active-workflows');

  const item = JSON.parse(sessionStorage.getItem('selectedAccountingList') || '{}');

  const [formData, setFormData] = useState({
    name: item.description || 'Legacy',
    inactive: false,
    global: true
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
      showToast('Please enter a name', 'error');
      return;
    }
    showToast('Changes saved successfully!', 'success');
    setTimeout(() => {
      setCurrentPage('setup-accounting-list');
    }, 1500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      setCurrentPage('setup-accounting-list');
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
          <i className="fas fa-list-alt" style={{ fontSize: '20px', color: '#4a90e2' }}></i>
          <h1 style={{ fontSize: '18px', fontWeight: '600', margin: 0 }}>Budget Category</h1>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button className="btn-view-option" onClick={() => setCurrentPage('setup-accounting-list')} style={{ padding: '6px 12px', fontSize: '13px' }}>List</button>
          <button className="btn-view-option" onClick={() => showToast('More', 'info')} style={{ padding: '6px 12px', fontSize: '13px' }}>More</button>
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
          <i className="fas fa-ellipsis-h" style={{ fontSize: '12px' }}></i>
          Actions
        </button>
      </div>

      {/* Basic Information Section */}
      <div className="form-section" style={{ padding: '12px 20px', backgroundColor: '#f9f9f9' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px 20px' }}>
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

          <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              checked={formData.inactive}
              onChange={(e) => handleInputChange('inactive', e.target.checked)}
              style={{ width: '14px', height: '14px' }}
            />
            <label style={{ margin: 0, fontSize: '12px' }}>INACTIVE</label>
          </div>

          <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              checked={formData.global}
              onChange={(e) => handleInputChange('global', e.target.checked)}
              style={{ width: '14px', height: '14px' }}
            />
            <label style={{ margin: 0, fontSize: '12px' }}>GLOBAL</label>
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
            className={`tab ${activeTab === 'active-workflows' ? 'active' : ''}`}
            onClick={() => setActiveTab('active-workflows')}
            style={{
              padding: '12px 20px',
              backgroundColor: activeTab === 'active-workflows' ? '#5b7a9e' : '#7a92b0',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500',
              borderRight: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            Active Workflows
          </button>
          <button
            className={`tab ${activeTab === 'workflow-history' ? 'active' : ''}`}
            onClick={() => setActiveTab('workflow-history')}
            style={{
              padding: '12px 20px',
              backgroundColor: activeTab === 'workflow-history' ? '#5b7a9e' : '#7a92b0',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500'
            }}
          >
            Workflow History
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content" style={{ padding: '20px', minHeight: '150px' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '20px',
          padding: '15px',
          backgroundColor: '#f9f9f9',
          borderRadius: '4px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <label style={{ fontSize: '12px', fontWeight: '500' }}>VIEW</label>
            <select className="form-control" style={{ width: '200px', fontSize: '13px' }}>
              <option>Default</option>
            </select>
            <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>
              Customize View
            </button>
            <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>
              Refresh
            </button>
          </div>
        </div>

        <div className="enquiries-table-container">
          <table className="enquiries-table">
            <thead>
              <tr>
                <th style={{ backgroundColor: '#e8eef5', fontSize: '11px' }}>WORKFLOW</th>
                <th style={{ backgroundColor: '#e8eef5', fontSize: '11px' }}>CURRENT STATE</th>
                <th style={{ backgroundColor: '#e8eef5', fontSize: '11px' }}>DATE ENTERED WORKFLOW</th>
                <th style={{ backgroundColor: '#e8eef5', fontSize: '11px' }}>DATE ENTERED STATE</th>
                <th style={{ backgroundColor: '#e8eef5', fontSize: '11px' }}>OPTIONS</th>
                <th style={{ backgroundColor: '#e8eef5', fontSize: '11px' }}>STATUS</th>
                <th style={{ backgroundColor: '#e8eef5', fontSize: '11px' }}>CANCEL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="7" style={{ textAlign: 'center', padding: '40px', color: '#999', fontSize: '13px' }}>
                  No records to show.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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

export default EditAccountingList;
