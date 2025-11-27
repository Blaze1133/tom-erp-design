import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewBankMasterDetail = ({ onBack, onEdit, bankData }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('notes');
  const [activeNotesTab, setActiveNotesTab] = useState('user');
  const [activeWorkflowTab, setActiveWorkflowTab] = useState('active');

  // Sample data
  const bankMasterData = {
    name: bankData?.name || 'CITIBANK',
    inactive: bankData?.inactive || false,
    bankId: bankData?.bankId || '',
    subsidiary: bankData?.subsidiary || 'Tech Onshore MEP Prefabricators Pte Ltd.',
    systemNotes: [
      {
        id: 1,
        date: '28/4/2025 10:49 pm',
        setBy: 'TOM-Kavitha',
        context: 'UI',
        type: 'Set',
        field: 'Name',
        oldValue: '',
        newValue: 'CITIBANK'
      },
      {
        id: 2,
        date: '28/4/2025 10:49 pm',
        setBy: 'TOM-Kavitha',
        context: 'UI',
        type: 'Create',
        field: 'Record',
        oldValue: '',
        newValue: '45'
      }
    ]
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit(bankMasterData);
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
          <i className="fas fa-university"></i>
          <div>
            <h1>Bank Master</h1>
            <div className="detail-subtitle">
              <span>{bankMasterData.name}</span>
              {bankMasterData.inactive && (
                <span className="status-badge-detail" style={{ background: '#999' }}>
                  INACTIVE
                </span>
              )}
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
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>NAME</label>
                <div className="field-value">{bankMasterData.name}</div>
              </div>
              <div className="detail-field">
                <label>BANK ID</label>
                <div className="field-value">{bankMasterData.bankId || '-'}</div>
              </div>
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{bankMasterData.subsidiary}</div>
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
          </div>

          <div className="tabs-content">
            {activeTab === 'notes' && (
              <div>
                <div className="subtabs-header" style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  borderBottom: '1px solid #e0e0e0',
                  padding: '1rem 0 0 0',
                  marginBottom: '1rem'
                }}>
                  <button 
                    className={`subtab-btn ${activeNotesTab === 'user' ? 'active' : ''}`}
                    onClick={() => setActiveNotesTab('user')}
                    style={{
                      padding: '0.5rem 1rem',
                      background: activeNotesTab === 'user' ? '#5b6b8f' : '#e0e0e0',
                      color: activeNotesTab === 'user' ? 'white' : '#666',
                      border: 'none',
                      borderRadius: '4px 4px 0 0',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}
                  >
                    User Notes
                  </button>
                  <button 
                    className={`subtab-btn ${activeNotesTab === 'system' ? 'active' : ''}`}
                    onClick={() => setActiveNotesTab('system')}
                    style={{
                      padding: '0.5rem 1rem',
                      background: activeNotesTab === 'system' ? '#5b6b8f' : '#e0e0e0',
                      color: activeNotesTab === 'system' ? 'white' : '#666',
                      border: 'none',
                      borderRadius: '4px 4px 0 0',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}
                  >
                    System Notes
                  </button>
                </div>

                {activeNotesTab === 'user' && (
                  <div style={{ padding: '1rem 0' }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#666', marginBottom: '0.5rem', display: 'block' }}>
                        VIEW
                      </label>
                      <select className="form-control" style={{ width: '200px' }}>
                        <option>Default</option>
                      </select>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                      <button className="btn btn-secondary">
                        <i className="fas fa-plus"></i>
                        New Note
                      </button>
                      <button className="btn btn-secondary">
                        Customize View
                      </button>
                    </div>

                    <div className="items-table-wrapper">
                      <table className="detail-items-table">
                        <thead>
                          <tr>
                            <th style={{ width: '5%' }}>EDIT</th>
                            <th style={{ width: '15%' }}>DATE</th>
                            <th style={{ width: '15%' }}>AUTHOR</th>
                            <th style={{ width: '20%' }}>TITLE</th>
                            <th style={{ width: '20%' }}>MEMO</th>
                            <th style={{ width: '10%' }}>DIRECTION</th>
                            <th style={{ width: '10%' }}>TYPE</th>
                            <th style={{ width: '5%' }}>REMOVE</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="8" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                              No records to show.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeNotesTab === 'system' && (
                  <div style={{ padding: '1rem 0' }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#666', marginBottom: '0.5rem', display: 'block' }}>
                        FIELD
                      </label>
                      <select className="form-control" style={{ width: '200px' }}>
                        <option>All</option>
                      </select>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                      <button className="btn btn-secondary">
                        Customize View
                      </button>
                    </div>

                    <div className="items-table-wrapper">
                      <table className="detail-items-table">
                        <thead>
                          <tr>
                            <th style={{ width: '15%' }}>DATE</th>
                            <th style={{ width: '15%' }}>SET BY</th>
                            <th style={{ width: '10%' }}>CONTEXT</th>
                            <th style={{ width: '10%' }}>TYPE</th>
                            <th style={{ width: '15%' }}>FIELD</th>
                            <th style={{ width: '17.5%' }}>OLD VALUE</th>
                            <th style={{ width: '17.5%' }}>NEW VALUE</th>
                          </tr>
                        </thead>
                        <tbody>
                          {bankMasterData.systemNotes.map((note) => (
                            <tr key={note.id}>
                              <td>{note.date}</td>
                              <td>{note.setBy}</td>
                              <td>{note.context}</td>
                              <td>{note.type}</td>
                              <td>{note.field}</td>
                              <td>{note.oldValue || '-'}</td>
                              <td>{note.newValue}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'files' && (
              <div style={{ padding: '1rem 0' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1rem' }}>
                    ATTACH EXISTING FILES
                  </p>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="<Type then tab>"
                    style={{ width: '300px', marginBottom: '1rem' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                  <button className="btn btn-secondary">
                    <i className="fas fa-paperclip"></i>
                    Attach
                  </button>
                  <button className="btn btn-secondary">
                    New File
                  </button>
                </div>

                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th style={{ width: '30%' }}>ATTACHED FILES</th>
                        <th style={{ width: '15%' }}>FOLDER</th>
                        <th style={{ width: '10%' }}>SIZE (KB)</th>
                        <th style={{ width: '15%' }}>LAST MODIFIED</th>
                        <th style={{ width: '15%' }}>DOCUMENT TYPE</th>
                        <th style={{ width: '5%' }}>REMOVE</th>
                        <th style={{ width: '5%' }}>EDIT</th>
                        <th style={{ width: '5%' }}>DOWNLOAD</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="8" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'workflow' && (
              <div style={{ padding: '1rem 0' }}>
                <div className="subtabs-header" style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  borderBottom: '1px solid #e0e0e0',
                  padding: '1rem 0 0 0',
                  marginBottom: '1rem'
                }}>
                  <button 
                    className={`subtab-btn ${activeWorkflowTab === 'active' ? 'active' : ''}`}
                    onClick={() => setActiveWorkflowTab('active')}
                    style={{
                      padding: '0.5rem 1rem',
                      background: activeWorkflowTab === 'active' ? '#5b6b8f' : '#e0e0e0',
                      color: activeWorkflowTab === 'active' ? 'white' : '#666',
                      border: 'none',
                      borderRadius: '4px 4px 0 0',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}
                  >
                    Active Workflows
                  </button>
                  <button 
                    className={`subtab-btn ${activeWorkflowTab === 'history' ? 'active' : ''}`}
                    onClick={() => setActiveWorkflowTab('history')}
                    style={{
                      padding: '0.5rem 1rem',
                      background: activeWorkflowTab === 'history' ? '#5b6b8f' : '#e0e0e0',
                      color: activeWorkflowTab === 'history' ? 'white' : '#666',
                      border: 'none',
                      borderRadius: '4px 4px 0 0',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}
                  >
                    Workflow History
                  </button>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#666', marginBottom: '0.5rem', display: 'block' }}>
                    VIEW
                  </label>
                  <select className="form-control" style={{ width: '200px' }}>
                    <option>Default</option>
                  </select>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                  <button className="btn btn-secondary">
                    Customize View
                  </button>
                  <button className="btn btn-secondary">
                    Refresh
                  </button>
                </div>

                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th style={{ width: '20%' }}>WORKFLOW</th>
                        <th style={{ width: '15%' }}>CURRENT STATE</th>
                        <th style={{ width: '15%' }}>DATE ENTERED WORKFLOW</th>
                        <th style={{ width: '15%' }}>DATE ENTERED STATE</th>
                        <th style={{ width: '15%' }}>OPTIONS</th>
                        <th style={{ width: '10%' }}>STATUS</th>
                        <th style={{ width: '10%' }}>CANCEL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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

export default ViewBankMasterDetail;
