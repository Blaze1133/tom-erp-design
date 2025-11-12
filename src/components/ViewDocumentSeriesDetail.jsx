import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewDocumentSeriesDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('notes');

  const seriesData = {
    id: '1',
    inactive: false,
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. - Tech Electric & Automation Pte Ltd',
    prefix: 'PRO',
    runningNumber: '47',
    length: '5',
    externalId: ''
  };

  const handleEdit = () => {
    if (onEdit) onEdit();
  };

  const handleBack = () => {
    if (onBack) onBack();
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-alt"></i>
          <div>
            <h1>Document Number Series</h1>
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
        <button className="btn-toolbar">Actions</button>
      </div>

      <div className="detail-content">
        <div style={{ padding: '1.5rem', backgroundColor: 'white', marginBottom: '1rem', borderRadius: '4px' }}>
          <div className="detail-grid">
            <div className="detail-field">
              <label>ID</label>
              <div className="field-value">{seriesData.id}</div>
            </div>
            <div className="detail-field">
              <label>RUNNING NUMBER</label>
              <div className="field-value">{seriesData.runningNumber}</div>
            </div>
            <div className="detail-field"></div>

            <div className="detail-field">
              <label>INACTIVE</label>
              <div className="field-value">{seriesData.inactive ? '☑' : '☐'}</div>
            </div>
            <div className="detail-field">
              <label>LENGTH</label>
              <div className="field-value">{seriesData.length}</div>
            </div>
            <div className="detail-field"></div>

            <div className="detail-field">
              <label>SUBSIDIARY</label>
              <div className="field-value">{seriesData.subsidiary}</div>
            </div>
            <div className="detail-field">
              <label>EXTERNAL ID</label>
              <div className="field-value">{seriesData.externalId || '-'}</div>
            </div>
            <div className="detail-field"></div>

            <div className="detail-field">
              <label>PREFIX</label>
              <div className="field-value">{seriesData.prefix}</div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-section">
          <div className="detail-tabs">
            <div className="tabs-header" style={{ backgroundColor: '#5a6c7d' }}>
              <button 
                className={`tab-btn ${activeTab === 'notes' ? 'active' : ''}`}
                onClick={() => setActiveTab('notes')}
                style={{ color: 'white' }}
              >
                Notes
              </button>
              <button 
                className={`tab-btn ${activeTab === 'files' ? 'active' : ''}`}
                onClick={() => setActiveTab('files')}
                style={{ color: 'white' }}
              >
                Files
              </button>
              <button 
                className={`tab-btn ${activeTab === 'workflow' ? 'active' : ''}`}
                onClick={() => setActiveTab('workflow')}
                style={{ color: 'white' }}
              >
                Workflow
              </button>
            </div>

            <div className="tabs-content">
              {activeTab === 'notes' && (
                <div style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <button className="btn btn-secondary" style={{ fontWeight: '600' }}>User Notes</button>
                    <span style={{ fontSize: '0.875rem', color: '#666' }}>System Notes •</span>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: '500', marginRight: '0.5rem' }}>VIEW</label>
                    <select className="form-control" style={{ width: '150px', display: 'inline-block' }}>
                      <option>Default</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                    <button className="btn btn-secondary">New Note</button>
                    <button className="btn btn-secondary">Customize View</button>
                  </div>
                  <div className="items-table-wrapper">
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
            </div>
          </div>
        </div>

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

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default ViewDocumentSeriesDetail;
