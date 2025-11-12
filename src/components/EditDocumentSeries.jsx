import React, { useState } from 'react';
import Toast from './Toast';

const EditDocumentSeries = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('notes');

  const [formData, setFormData] = useState({
    id: '1',
    inactive: false,
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    prefix: 'PRO',
    runningNumber: '47',
    length: '5',
    externalId: ''
  });

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'Tech Marine Offshore (S) Pte Ltd',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd'
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field) => {
    setFormData(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSave = () => {
    showToast('Document Number Series saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (setCurrentPage) setCurrentPage('setup-document-number-series');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Document Number Series</h1>
        </div>
        <div className="page-actions">
          <button className="btn-action" style={{ padding: '0.5rem 1rem' }}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-action" style={{ padding: '0.5rem 1rem' }}>
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn btn-secondary">List</button>
          <button className="btn btn-secondary">Search</button>
          <button className="btn btn-secondary">Customize</button>
          <button className="btn btn-secondary">More</button>
        </div>
      </div>

      <div className="form-container">
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-primary" onClick={handleSave}>Save</button>
          <button className="btn btn-tertiary" onClick={handleCancel}>Cancel</button>
          <button className="btn btn-secondary">
            <i className="fas fa-sync-alt"></i>
          </button>
          <button className="btn btn-secondary">Actions</button>
        </div>

        <div className="form-section">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">ID</label>
              <input type="text" className="form-control" value={formData.id} disabled />
            </div>
            <div className="form-group">
              <label className="form-label">RUNNING NUMBER</label>
              <input type="number" className="form-control" value={formData.runningNumber} onChange={(e) => handleInputChange('runningNumber', e.target.value)} />
            </div>
            <div className="form-group"></div>

            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" checked={formData.inactive} onChange={() => handleCheckboxChange('inactive')} />
                <span>INACTIVE</span>
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">LENGTH</label>
              <input type="number" className="form-control" value={formData.length} onChange={(e) => handleInputChange('length', e.target.value)} />
            </div>
            <div className="form-group"></div>

            <div className="form-group">
              <label className="form-label">SUBSIDIARY</label>
              <select className="form-control" value={formData.subsidiary} onChange={(e) => handleInputChange('subsidiary', e.target.value)}>
                {subsidiaries.map((sub, i) => <option key={i}>{sub}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">EXTERNAL ID</label>
              <input type="text" className="form-control" value={formData.externalId} onChange={(e) => handleInputChange('externalId', e.target.value)} />
            </div>
            <div className="form-group"></div>

            <div className="form-group">
              <label className="form-label">PREFIX</label>
              <input type="text" className="form-control" value={formData.prefix} onChange={(e) => handleInputChange('prefix', e.target.value)} />
            </div>
          </div>
        </div>

        <div className="detail-tabs">
          <div className="tabs-header" style={{ backgroundColor: '#5a6c7d' }}>
            <button className={`tab-btn ${activeTab === 'notes' ? 'active' : ''}`} onClick={() => setActiveTab('notes')} style={{ color: 'white' }}>Notes</button>
            <button className={`tab-btn ${activeTab === 'files' ? 'active' : ''}`} onClick={() => setActiveTab('files')} style={{ color: 'white' }}>Files</button>
            <button className={`tab-btn ${activeTab === 'workflow' ? 'active' : ''}`} onClick={() => setActiveTab('workflow')} style={{ color: 'white' }}>Workflow</button>
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

        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-primary" onClick={handleSave}>Save</button>
          <button className="btn btn-tertiary" onClick={handleCancel}>Cancel</button>
          <button className="btn btn-secondary">Actions</button>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default EditDocumentSeries;
