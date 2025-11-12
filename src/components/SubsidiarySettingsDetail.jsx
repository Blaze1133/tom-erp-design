import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const SubsidiarySettingsDetail = ({ setCurrentPage, subsidiary }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('workflow');
  const [activeWorkflowTab, setActiveWorkflowTab] = useState('active');

  const [formData, setFormData] = useState({
    inactive: false,
    subsidiary: subsidiary?.name || 'Tech Onshore MEP Prefabricators Pte Ltd.',
    country: subsidiary?.country || 'Singapore',
    currency: subsidiary?.currency || 'SGD'
  });

  const [workflows] = useState([]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEdit = () => {
    showToast('Edit mode enabled', 'info');
  };

  const handleBack = () => {
    if (window.confirm('Are you sure you want to go back? Any unsaved changes will be lost.')) {
      setCurrentPage('setup-subsidiary-settings-manager');
    }
  };

  const handleCustomizeView = () => {
    showToast('Customize View functionality coming soon', 'info');
  };

  const handleRefresh = () => {
    showToast('Refreshing workflows...', 'info');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-cog" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Subsidiary Settings: {formData.subsidiary}</h1>
        </div>
        <div className="page-actions">
          <button 
            className="btn-icon" 
            onClick={handleBack}
            title="Back"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #ccc',
              padding: '8px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '8px'
            }}
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <button 
            className="btn-icon" 
            onClick={() => showToast('Forward functionality coming soon', 'info')}
            title="Forward"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #ccc',
              padding: '8px 12px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="form-actions" style={{ 
        padding: '15px 20px', 
        borderBottom: '1px solid #ddd',
        display: 'flex',
        gap: '10px'
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

      {/* Basic Information Section */}
      <div className="form-section" style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
          <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="checkbox"
              id="inactive"
              checked={formData.inactive}
              onChange={(e) => handleInputChange('inactive', e.target.checked)}
              style={{ width: '18px', height: '18px' }}
            />
            <label htmlFor="inactive" style={{ margin: 0, fontWeight: '500' }}>INACTIVE</label>
          </div>

          <div style={{ display: 'flex', gap: '40px', flex: 1 }}>
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '5px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#666',
                  textTransform: 'uppercase'
                }}>
                  Country
                </label>
                <div style={{ fontSize: '14px', color: '#333' }}>{formData.country}</div>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '5px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#666',
                  textTransform: 'uppercase'
                }}>
                  Currency
                </label>
                <div style={{ fontSize: '14px', color: '#333' }}>{formData.currency}</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '15px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '5px',
            fontSize: '12px',
            fontWeight: '600',
            color: '#666',
            textTransform: 'uppercase'
          }}>
            Subsidiary
          </label>
          <div style={{ fontSize: '14px', color: '#4a90e2' }}>{formData.subsidiary}</div>
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
              padding: '12px 24px',
              backgroundColor: activeTab === 'workflow' ? '#5b7a9e' : '#7a92b0',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              borderRight: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            Workflow
          </button>
          <button
            className={`tab ${activeTab === 'invoicing-email' ? 'active' : ''}`}
            onClick={() => setActiveTab('invoicing-email')}
            style={{
              padding: '12px 24px',
              backgroundColor: activeTab === 'invoicing-email' ? '#5b7a9e' : '#7a92b0',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              borderRight: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            Invoicing Email
          </button>
          <button
            className={`tab ${activeTab === 'system-notes' ? 'active' : ''}`}
            onClick={() => setActiveTab('system-notes')}
            style={{
              padding: '12px 24px',
              backgroundColor: activeTab === 'system-notes' ? '#5b7a9e' : '#7a92b0',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            System Notes
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content" style={{ padding: '20px' }}>
        {activeTab === 'workflow' && (
          <div>
            {/* Workflow Sub-tabs */}
            <div style={{ 
              display: 'flex', 
              gap: '0',
              marginBottom: '20px',
              borderBottom: '1px solid #ddd'
            }}>
              <button
                onClick={() => setActiveWorkflowTab('active')}
                style={{
                  padding: '10px 20px',
                  backgroundColor: activeWorkflowTab === 'active' ? 'white' : '#f5f5f5',
                  border: 'none',
                  borderBottom: activeWorkflowTab === 'active' ? '3px solid #4a90e2' : '3px solid transparent',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: activeWorkflowTab === 'active' ? '600' : '400',
                  color: activeWorkflowTab === 'active' ? '#333' : '#666'
                }}
              >
                Active Workflows
              </button>
              <button
                onClick={() => setActiveWorkflowTab('history')}
                style={{
                  padding: '10px 20px',
                  backgroundColor: activeWorkflowTab === 'history' ? 'white' : '#f5f5f5',
                  border: 'none',
                  borderBottom: activeWorkflowTab === 'history' ? '3px solid #4a90e2' : '3px solid transparent',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: activeWorkflowTab === 'history' ? '600' : '400',
                  color: activeWorkflowTab === 'history' ? '#333' : '#666'
                }}
              >
                Workflow History
              </button>
            </div>

            {/* View Controls */}
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
                <label style={{ fontSize: '13px', fontWeight: '500' }}>VIEW</label>
                <select 
                  className="form-control"
                  style={{ width: '200px' }}
                >
                  <option>Default</option>
                  <option>Custom View 1</option>
                  <option>Custom View 2</option>
                </select>
                <button 
                  className="btn btn-secondary"
                  onClick={handleCustomizeView}
                  style={{ padding: '6px 12px', fontSize: '13px' }}
                >
                  Customize View
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={handleRefresh}
                  style={{ padding: '6px 12px', fontSize: '13px' }}
                >
                  Refresh
                </button>
              </div>
            </div>

            {/* Workflows Table */}
            <div className="enquiries-table-container">
              <table className="enquiries-table">
                <thead>
                  <tr>
                    <th style={{ backgroundColor: '#e8eef5' }}>WORKFLOW</th>
                    <th style={{ backgroundColor: '#e8eef5' }}>CURRENT STATE</th>
                    <th style={{ backgroundColor: '#e8eef5' }}>DATE ENTERED WORKFLOW</th>
                    <th style={{ backgroundColor: '#e8eef5' }}>DATE ENTERED STATE</th>
                    <th style={{ backgroundColor: '#e8eef5' }}>OPTIONS</th>
                    <th style={{ backgroundColor: '#e8eef5' }}>STATUS</th>
                    <th style={{ backgroundColor: '#e8eef5' }}>CANCEL</th>
                  </tr>
                </thead>
                <tbody>
                  {workflows.length === 0 ? (
                    <tr>
                      <td colSpan="7" style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
                        No data available
                      </td>
                    </tr>
                  ) : (
                    workflows.map((workflow, index) => (
                      <tr key={index}>
                        <td>{workflow.name}</td>
                        <td>{workflow.currentState}</td>
                        <td>{workflow.dateEntered}</td>
                        <td>{workflow.dateEnteredState}</td>
                        <td>{workflow.options}</td>
                        <td>{workflow.status}</td>
                        <td>{workflow.cancel}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'invoicing-email' && (
          <div style={{ padding: '20px' }}>
            <p style={{ color: '#666' }}>Invoicing Email settings will be displayed here.</p>
          </div>
        )}

        {activeTab === 'system-notes' && (
          <div style={{ padding: '20px' }}>
            <p style={{ color: '#666' }}>System Notes will be displayed here.</p>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="form-actions" style={{ 
        padding: '15px 20px', 
        borderTop: '1px solid #ddd',
        display: 'flex',
        gap: '10px',
        marginTop: '20px'
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

export default SubsidiarySettingsDetail;
