import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const DocumentNumberSeriesList = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Default');
  const [showInactives, setShowInactives] = useState(false);

  const [series] = useState([
    { 
      id: 1, 
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. - Tech Electric & Automation Pte Ltd', 
      prefix: 'PRO', 
      runningNumber: '47', 
      length: '5',
      externalId: ''
    },
    { 
      id: 2, 
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', 
      prefix: 'TOM22', 
      runningNumber: '744', 
      length: '5',
      externalId: ''
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (id) => {
    setCurrentPage('view-document-series-detail');
  };

  const handleEdit = (id) => {
    setCurrentPage('edit-document-series');
  };

  const handleNew = () => {
    setCurrentPage('new-document-series');
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-file-alt"></i>
          <h1>Document Number Series List</h1>
        </div>
        <div className="list-actions">
          <button className="btn btn-secondary">List</button>
          <button className="btn btn-secondary">Search</button>
          <button className="btn btn-secondary">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>VIEW</label>
          <select 
            className="form-control"
            value={viewFilter}
            onChange={(e) => setViewFilter(e.target.value)}
          >
            <option>Default</option>
            <option>All</option>
          </select>
          <button className="btn btn-secondary">Customize View</button>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNew}>
            New Document Number Series
          </button>
        </div>
      </div>

      <div className="list-filters">
        <button className="filter-toggle">
          <i className="fas fa-filter"></i>
          FILTERS
        </button>
        <div className="filter-actions">
          <button className="btn-icon">
            <i className="fas fa-file"></i>
          </button>
          <button className="btn-icon">
            <i className="fas fa-file-excel" style={{ color: '#28a745' }}></i>
          </button>
          <button className="btn-icon">
            <i className="fas fa-file-pdf" style={{ color: '#dc3545' }}></i>
          </button>
          <button className="btn-icon">
            <i className="fas fa-print"></i>
          </button>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={showInactives}
              onChange={(e) => setShowInactives(e.target.checked)}
            />
            <span>SHOW INACTIVES</span>
          </label>
          <div style={{ marginLeft: 'auto' }}>
            <button className="btn btn-secondary" style={{ marginRight: '0.5rem' }}>EDIT</button>
            <button className="btn-icon">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <label style={{ fontSize: '0.875rem', color: '#666' }}>QUICK SORT</label>
          <select className="form-control" style={{ width: '150px' }}>
            <option>Default</option>
          </select>
          <span className="total-count">TOTAL: {series.length}</span>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '10%' }}>EDIT | VIEW</th>
              <th style={{ width: '5%' }}>ID ▲</th>
              <th style={{ width: '40%' }}>SUBSIDIARY</th>
              <th style={{ width: '15%' }}>PREFIX</th>
              <th style={{ width: '10%' }}>RUNNING NUMBER</th>
              <th style={{ width: '10%' }}>LENGTH</th>
              <th style={{ width: '10%' }}>EXTERNAL ID</th>
            </tr>
          </thead>
          <tbody>
            {series.map((item) => (
              <tr key={item.id}>
                <td>
                  <button className="link-button" onClick={() => handleEdit(item.id)}>Edit</button>
                  {' | '}
                  <button className="link-button" onClick={() => handleView(item.id)}>View</button>
                </td>
                <td>{item.id}</td>
                <td>{item.subsidiary}</td>
                <td>{item.prefix}</td>
                <td>{item.runningNumber}</td>
                <td>{item.length}</td>
                <td>{item.externalId}</td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default DocumentNumberSeriesList;
