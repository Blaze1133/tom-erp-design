import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewAssetNameListDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('notes');

  const assetData = {
    name: 'Laptop',
    inactive: false,
    description: '',
    assetType: 'Computers',
    assetSerialNumber: '',
    assetLifetime: '',
    depreciationPeriod: '',
    assetLocation: '',
    assetImage: '',
    availableForLoan: false
  };

  const userNotes = [];
  const systemNotes = [
    { date: '28/9/2021 3:54 pm', setBy: 'vikram', context: 'UI', type: 'Set', field: 'Name', oldValue: '', newValue: 'Laptop' },
    { date: '28/9/2021 3:54 pm', setBy: 'vikram', context: 'UI', type: 'Create', field: 'Record', oldValue: '', newValue: '1' }
  ];

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
          <i className="fas fa-clipboard-list"></i>
          <div>
            <h1>Asset Name List</h1>
            <div className="detail-subtitle">
              <span>{assetData.name}</span>
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
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-redo"></i>
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
        <div className="detail-section">
          <div className="section-header">
            <h3>Asset Name Details</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>NAME</label>
                <div className="field-value">{assetData.name}</div>
              </div>
              <div className="detail-field">
                <label>INACTIVE</label>
                <div className="field-value">
                  <input type="checkbox" checked={assetData.inactive} disabled />
                </div>
              </div>
              <div className="detail-field">
                <label>DESCRIPTION</label>
                <div className="field-value">{assetData.description || '-'}</div>
              </div>
              <div className="detail-field">
                <label>ASSET TYPE</label>
                <div className="field-value">{assetData.assetType}</div>
              </div>
              <div className="detail-field">
                <label>ASSET SERIAL NUMBER</label>
                <div className="field-value">{assetData.assetSerialNumber || '-'}</div>
              </div>
              <div className="detail-field">
                <label>ASSET LIFETIME</label>
                <div className="field-value">{assetData.assetLifetime || '-'}</div>
              </div>
              <div className="detail-field">
                <label>DEPRECIATION PERIOD</label>
                <div className="field-value">{assetData.depreciationPeriod || '-'}</div>
              </div>
              <div className="detail-field">
                <label>ASSET LOCATION</label>
                <div className="field-value">{assetData.assetLocation || '-'}</div>
              </div>
              <div className="detail-field">
                <label>ASSET IMAGE</label>
                <div className="field-value">{assetData.assetImage || '-'}</div>
              </div>
              <div className="detail-field">
                <label>AVAILABLE FOR LOAN</label>
                <div className="field-value">
                  <input type="checkbox" checked={assetData.availableForLoan} disabled />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'notes' ? 'active' : ''}`} onClick={() => setActiveTab('notes')}>Notes</button>
            <button className={`tab-btn ${activeTab === 'workflow' ? 'active' : ''}`} onClick={() => setActiveTab('workflow')}>Workflow</button>
          </div>

          <div className="tabs-content">
            {activeTab === 'notes' && (
              <div className="tab-content-wrapper" style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', borderBottom: '2px solid #e0e0e0' }}>
                    <button style={{ padding: '0.5rem 1rem', border: 'none', background: '#4a5568', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
                      User Notes
                    </button>
                    <button style={{ padding: '0.5rem 1rem', border: 'none', background: 'transparent', color: '#4a5568', fontWeight: 600, cursor: 'pointer' }}>
                      System Notes ●
                    </button>
                  </div>
                  <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <label>VIEW</label>
                    <select className="form-control" style={{ width: '200px' }}>
                      <option>Default</option>
                    </select>
                    <button className="btn btn-secondary">New Note</button>
                    <button className="btn btn-secondary">Customize View</button>
                  </div>
                </div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>EDIT</th>
                      <th>DATE</th>
                      <th>AUTHOR</th>
                      <th>TITLE</th>
                      <th>MEMO</th>
                      <th>DIRECTION</th>
                      <th>TYPE</th>
                      <th>REMOVE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userNotes.length === 0 ? (
                      <tr>
                        <td colSpan="8" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                          No records to show.
                        </td>
                      </tr>
                    ) : (
                      userNotes.map((note, idx) => (
                        <tr key={idx}>
                          <td><button className="view-link">Edit</button></td>
                          <td>{note.date}</td>
                          <td>{note.author}</td>
                          <td>{note.title}</td>
                          <td>{note.memo}</td>
                          <td>{note.direction}</td>
                          <td>{note.type}</td>
                          <td><button className="view-link">Remove</button></td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>

                <div style={{ marginTop: '2rem' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem' }}>System Notes</h4>
                  <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <label>VIEW</label>
                    <select className="form-control" style={{ width: '200px' }}>
                      <option>Default</option>
                    </select>
                    <label>FIELD</label>
                    <select className="form-control" style={{ width: '200px' }}>
                      <option>- All -</option>
                    </select>
                  </div>
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>DATE ▼</th>
                        <th>SET BY</th>
                        <th>CONTEXT</th>
                        <th>TYPE</th>
                        <th>FIELD</th>
                        <th>OLD VALUE</th>
                        <th>NEW VALUE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {systemNotes.map((note, idx) => (
                        <tr key={idx}>
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

            {activeTab === 'workflow' && (
              <div className="tab-content-wrapper" style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', borderBottom: '2px solid #e0e0e0' }}>
                    <button style={{ padding: '0.5rem 1rem', border: 'none', background: '#4a5568', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
                      Active Workflows
                    </button>
                    <button style={{ padding: '0.5rem 1rem', border: 'none', background: 'transparent', color: '#4a5568', fontWeight: 600, cursor: 'pointer' }}>
                      Workflow History
                    </button>
                  </div>
                  <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <label>VIEW</label>
                    <select className="form-control" style={{ width: '200px' }}>
                      <option>Default</option>
                    </select>
                    <button className="btn btn-secondary">Customize View</button>
                    <button className="btn btn-primary">Refresh</button>
                  </div>
                </div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>WORKFLOW</th>
                      <th>CURRENT STATE</th>
                      <th>DATE ENTERED WORKFLOW</th>
                      <th>DATE ENTERED STATE</th>
                      <th>OPTIONS</th>
                      <th>STATUS</th>
                      <th>CANCEL</th>
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
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
};

export default ViewAssetNameListDetail;
