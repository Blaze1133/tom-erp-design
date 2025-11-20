import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewEmployeePFDetail = ({ onBack, onEdit, selectedEmployeePF }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('notes');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [notesView, setNotesView] = useState('Default');

  // Sample data
  const employeePFData = {
    name: 'Nigeria PF',
    inactive: false,
    effectDate: '',
    employeeContribution: '',
    employerContribution: '',
    pfEmployeeComponent: 'Statutory - PF Employee',
    pfEmployerComponent: 'Statutory - PF Employer',
    pfWagesLimit: '6',
    limitPfAmountOn15000: false,
    lowerLimitForPf: ''
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit(selectedEmployeePF);
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
          <i className="fas fa-piggy-bank"></i>
          <div>
            <h1>Employee PF</h1>
            <div className="detail-subtitle">
              <span>{employeePFData.name}</span>
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
            <h3>Employee PF Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>NAME</label>
                <div className="field-value">{employeePFData.name}</div>
              </div>
              <div className="detail-field">
                <label>PF EMPLOYEE COMPONENT</label>
                <div className="field-value">{employeePFData.pfEmployeeComponent}</div>
              </div>
              <div className="detail-field">
                <label>INACTIVE</label>
                <div className="field-value">
                  <input type="checkbox" checked={employeePFData.inactive} disabled />
                </div>
              </div>
              <div className="detail-field">
                <label>PF EMPLOYER COMPONENT</label>
                <div className="field-value">{employeePFData.pfEmployerComponent}</div>
              </div>
              <div className="detail-field">
                <label>EFFECT DATE</label>
                <div className="field-value">{employeePFData.effectDate || '-'}</div>
              </div>
              <div className="detail-field">
                <label>PF WAGES LIMIT</label>
                <div className="field-value">{employeePFData.pfWagesLimit}</div>
              </div>
              <div className="detail-field">
                <label>EMPLOYEE CONTRIBUTION %</label>
                <div className="field-value">{employeePFData.employeeContribution || '-'}</div>
              </div>
              <div className="detail-field">
                <label>LIMIT PF AMOUNT ON 15000</label>
                <div className="field-value">
                  <input type="checkbox" checked={employeePFData.limitPfAmountOn15000} disabled />
                </div>
              </div>
              <div className="detail-field">
                <label>EMPLOYER CONTRIBUTION %</label>
                <div className="field-value">{employeePFData.employerContribution || '-'}</div>
              </div>
              <div className="detail-field">
                <label>LOWER LIMIT FOR PF</label>
                <div className="field-value">{employeePFData.lowerLimitForPf || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'notes' ? 'active' : ''}`}
              onClick={() => setActiveTab('notes')}
            >
              Notes
            </button>
            <button 
              className={`tab-btn ${activeTab === 'files' ? 'active' : ''}`}
              onClick={() => setActiveTab('files')}
            >
              Files
            </button>
            <button 
              className={`tab-btn ${activeTab === 'workflow' ? 'active' : ''}`}
              onClick={() => setActiveTab('workflow')}
            >
              Workflow
            </button>
            <button 
              className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`}
              onClick={() => setActiveTab('custom')}
            >
              Custom
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'notes' && (
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: '#666' }}>VIEW</label>
                    <select 
                      value={notesView}
                      onChange={(e) => setNotesView(e.target.value)}
                      style={{
                        padding: '4px 8px',
                        border: '1px solid #ced4da',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    >
                      <option>Default</option>
                      <option>Summary</option>
                      <option>Detailed</option>
                    </select>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{
                      background: '#28a745',
                      color: 'white',
                      border: '1px solid #28a745',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      New Note
                    </button>
                    <button style={{
                      background: 'white',
                      color: '#495057',
                      border: '1px solid #ced4da',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}>
                      Customize View
                    </button>
                  </div>
                </div>

                <div style={{ overflowX: 'auto' }}>
                  <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '12px'
                  }}>
                    <thead>
                      <tr style={{ background: '#f8f9fa' }}>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>EDIT</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>DATE</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>AUTHOR</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>TITLE</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>MEMO</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>DIRECTION</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>TYPE</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>REMOVE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="8" style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'files' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>No files attached.</p>
              </div>
            )}

            {activeTab === 'workflow' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>Workflow information will be displayed here.</p>
              </div>
            )}

            {activeTab === 'custom' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>No custom fields configured.</p>
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

export default ViewEmployeePFDetail;
