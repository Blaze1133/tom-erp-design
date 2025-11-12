import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewDepartmentDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('workflow');
  const [activeWorkflowTab, setActiveWorkflowTab] = useState('active');

  const department = JSON.parse(sessionStorage.getItem('selectedDepartment') || '{}');

  const [formData] = useState({
    departmentIsInactive: false,
    name: department.name || 'Construction',
    parentDepartment: '',
    subsidiaries: [
      'Tech Onshore MEP Prefabricators Pte Ltd.',
      'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd',
      'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd',
      'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DQ) Pte Ltd',
      'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (s) Pte Ltd',
      'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (SV) Pte Ltd'
    ],
    includeChildren: false,
    defaultBank: '',
    internalId: '20'
  });

  const [workflows] = useState([]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = () => {
    setCurrentPage('edit-department');
  };

  const handleBack = () => {
    setCurrentPage('view-departments');
  };

  const handleList = () => {
    setCurrentPage('view-departments');
  };

  const handleSearch = () => {
    showToast('Search functionality coming soon', 'info');
  };

  const handleCustomize = () => {
    showToast('Customize functionality coming soon', 'info');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-sitemap" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Department</h1>
        </div>
        <div className="page-actions">
          <button className="btn-icon" onClick={handleBack} title="Back">
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-icon" onClick={() => showToast('Forward', 'info')} title="Forward">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-view-option" onClick={handleList}>List</button>
          <button className="btn-view-option" onClick={handleSearch}>Search</button>
          <button className="btn-view-option" onClick={handleCustomize}>Customize</button>
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px 20px' }}>
          <div className="form-group" style={{ gridColumn: 'span 2', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px' }}>
            <input
              type="checkbox"
              id="inactive"
              checked={formData.departmentIsInactive}
              disabled
              style={{ width: '14px', height: '14px' }}
            />
            <label htmlFor="inactive" style={{ margin: 0, fontWeight: '500', fontSize: '12px' }}>DEPARTMENT IS INACTIVE</label>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>NAME *</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.name}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>SUBSIDIARIES</label>
            <div style={{ fontSize: '13px', color: '#333' }}>
              {formData.subsidiaries[0] || '-'}
            </div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>PARENT DEPARTMENT</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.parentDepartment || '-'}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>DEFAULT BANK</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.defaultBank || '-'}</div>
          </div>

          <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              checked={formData.includeChildren}
              disabled
              style={{ width: '14px', height: '14px' }}
            />
            <label style={{ margin: 0, fontSize: '12px' }}>INCLUDE CHILDREN</label>
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
                  fontSize: '13px',
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
                  fontSize: '13px',
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
                <label style={{ fontSize: '12px', fontWeight: '500' }}>VIEW</label>
                <select 
                  className="form-control"
                  style={{ width: '200px', fontSize: '13px' }}
                >
                  <option>Default</option>
                </select>
                <button 
                  className="btn btn-secondary"
                  style={{ padding: '6px 12px', fontSize: '12px' }}
                >
                  Customize View
                </button>
                <button 
                  className="btn btn-secondary"
                  style={{ padding: '6px 12px', fontSize: '12px' }}
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
                  {workflows.length === 0 ? (
                    <tr>
                      <td colSpan="7" style={{ textAlign: 'center', padding: '40px', color: '#999', fontSize: '13px' }}>
                        No records to show.
                      </td>
                    </tr>
                  ) : (
                    workflows.map((workflow, index) => (
                      <tr key={index}>
                        <td style={{ fontSize: '13px' }}>{workflow.name}</td>
                        <td style={{ fontSize: '13px' }}>{workflow.currentState}</td>
                        <td style={{ fontSize: '13px' }}>{workflow.dateEntered}</td>
                        <td style={{ fontSize: '13px' }}>{workflow.dateEnteredState}</td>
                        <td style={{ fontSize: '13px' }}>{workflow.options}</td>
                        <td style={{ fontSize: '13px' }}>{workflow.status}</td>
                        <td style={{ fontSize: '13px' }}>{workflow.cancel}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'system-notes' && (
          <div>
            {/* System Notes View Controls */}
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
                <select 
                  className="form-control"
                  style={{ width: '150px', fontSize: '13px' }}
                >
                  <option>Default</option>
                </select>
                <label style={{ fontSize: '12px', fontWeight: '500', marginLeft: '10px' }}>FIELD</label>
                <select 
                  className="form-control"
                  style={{ width: '150px', fontSize: '13px' }}
                >
                  <option>- All -</option>
                </select>
                <button 
                  className="btn btn-secondary"
                  style={{ padding: '6px 12px', fontSize: '12px' }}
                >
                  Customize View
                </button>
              </div>
            </div>

            {/* System Notes Table */}
            <div className="enquiries-table-container">
              <table className="enquiries-table">
                <thead>
                  <tr>
                    <th style={{ backgroundColor: '#e8eef5', fontSize: '11px' }}>DATE</th>
                    <th style={{ backgroundColor: '#e8eef5', fontSize: '11px' }}>SET BY</th>
                    <th style={{ backgroundColor: '#e8eef5', fontSize: '11px' }}>CONTEXT</th>
                    <th style={{ backgroundColor: '#e8eef5', fontSize: '11px' }}>TYPE</th>
                    <th style={{ backgroundColor: '#e8eef5', fontSize: '11px' }}>FIELD</th>
                    <th style={{ backgroundColor: '#e8eef5', fontSize: '11px' }}>OLD VALUE</th>
                    <th style={{ backgroundColor: '#e8eef5', fontSize: '11px' }}>NEW VALUE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="7" style={{ textAlign: 'center', padding: '40px', color: '#999', fontSize: '13px' }}>
                      No system notes available.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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

export default ViewDepartmentDetail;
