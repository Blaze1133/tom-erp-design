import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const DocumentNumberSeriesList = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Default');
  const [showInactives, setShowInactives] = useState(false);
  const [quickSort, setQuickSort] = useState('Default');
  const [filtersExpanded, setFiltersExpanded] = useState(false);

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
      {/* Header */}
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-list-ol" style={{ color: '#4a90e2', marginRight: '0.75rem' }}></i>
          <h1>Document Number Series List</h1>
        </div>
        <div className="list-actions">
          <button className="btn-action">List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Audit Trail</button>
        </div>
      </div>

      {/* Controls Section */}
      <div className="list-controls" style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="view-filter" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <label style={{ fontWeight: '500', fontSize: '0.875rem', color: '#495057' }}>VIEW</label>
            <select 
              className="form-control"
              value={viewFilter}
              onChange={(e) => setViewFilter(e.target.value)}
              style={{ width: '150px' }}
            >
              <option>Default</option>
              <option>All</option>
              <option>Active Only</option>
            </select>
            <button className="btn btn-outline-primary" style={{ fontSize: '0.875rem' }}>
              Customize View
            </button>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <button className="btn btn-danger" onClick={handleNew} style={{ fontWeight: '500' }}>
              New Document Number Series
            </button>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="list-filters" style={{ padding: '0.75rem 1rem', backgroundColor: '#ffffff', borderBottom: '1px solid #dee2e6' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button 
            className="filter-toggle"
            onClick={() => setFiltersExpanded(!filtersExpanded)}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              padding: '0.375rem 0.75rem',
              border: '1px solid #ced4da',
              backgroundColor: '#f8f9fa',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}
          >
            <i className="fas fa-filter" style={{ color: '#6c757d' }}></i>
            FILTERS
          </button>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button className="btn-icon" title="Export to Word">
              <i className="fas fa-file-word" style={{ color: '#2b579a' }}></i>
            </button>
            <button className="btn-icon" title="Export to Excel">
              <i className="fas fa-file-excel" style={{ color: '#217346' }}></i>
            </button>
            <button className="btn-icon" title="Export to PDF">
              <i className="fas fa-file-pdf" style={{ color: '#d32f2f' }}></i>
            </button>
            <button className="btn-icon" title="Print">
              <i className="fas fa-print" style={{ color: '#6c757d' }}></i>
            </button>
          </div>

          <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
            <input
              type="checkbox"
              checked={showInactives}
              onChange={(e) => setShowInactives(e.target.checked)}
            />
            <span style={{ fontWeight: '500', color: '#495057' }}>SHOW INACTIVES</span>
          </label>

          <button className="btn btn-outline-secondary" style={{ fontSize: '0.875rem' }}>
            EDIT
          </button>

          <button className="btn-icon" title="Clear">
            <i className="fas fa-times" style={{ color: '#dc3545' }}></i>
          </button>

          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#495057' }}>QUICK SORT</label>
              <select 
                className="form-control" 
                value={quickSort}
                onChange={(e) => setQuickSort(e.target.value)}
                style={{ width: '120px', fontSize: '0.875rem' }}
              >
                <option>Default</option>
                <option>ID</option>
                <option>Subsidiary</option>
                <option>Prefix</option>
              </select>
            </div>
            <span className="total-count" style={{ fontSize: '0.875rem', fontWeight: '600', color: '#495057' }}>
              TOTAL: {series.length}
            </span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="enquiries-table-container" style={{ margin: '0', border: 'none' }}>
        <table className="enquiries-table" style={{ marginBottom: '0' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <th style={{ width: '12%', padding: '0.75rem', fontWeight: '600', fontSize: '0.875rem', color: '#495057', borderBottom: '2px solid #dee2e6' }}>
                EDIT | VIEW
              </th>
              <th style={{ width: '8%', padding: '0.75rem', fontWeight: '600', fontSize: '0.875rem', color: '#495057', borderBottom: '2px solid #dee2e6' }}>
                ID <i className="fas fa-sort-up" style={{ marginLeft: '0.25rem', fontSize: '0.75rem' }}></i>
              </th>
              <th style={{ width: '45%', padding: '0.75rem', fontWeight: '600', fontSize: '0.875rem', color: '#495057', borderBottom: '2px solid #dee2e6' }}>
                SUBSIDIARY
              </th>
              <th style={{ width: '12%', padding: '0.75rem', fontWeight: '600', fontSize: '0.875rem', color: '#495057', borderBottom: '2px solid #dee2e6' }}>
                PREFIX
              </th>
              <th style={{ width: '13%', padding: '0.75rem', fontWeight: '600', fontSize: '0.875rem', color: '#495057', borderBottom: '2px solid #dee2e6' }}>
                RUNNING NUMBER
              </th>
              <th style={{ width: '10%', padding: '0.75rem', fontWeight: '600', fontSize: '0.875rem', color: '#495057', borderBottom: '2px solid #dee2e6' }}>
                LENGTH
              </th>
              <th style={{ width: '10%', padding: '0.75rem', fontWeight: '600', fontSize: '0.875rem', color: '#495057', borderBottom: '2px solid #dee2e6' }}>
                EXTERNAL ID
              </th>
            </tr>
          </thead>
          <tbody>
            {series.map((item, index) => (
              <tr 
                key={item.id} 
                style={{ 
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8f9fa',
                  borderBottom: '1px solid #dee2e6'
                }}
              >
                <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>
                  <button 
                    className="view-link"
                    onClick={() => handleEdit(item.id)}
                    style={{ color: '#007bff', textDecoration: 'none', border: 'none', background: 'none', cursor: 'pointer' }}
                  >
                    Edit
                  </button>
                  <span style={{ margin: '0 0.25rem', color: '#6c757d' }}>|</span>
                  <button 
                    className="view-link"
                    onClick={() => handleView(item.id)}
                    style={{ color: '#007bff', textDecoration: 'none', border: 'none', background: 'none', cursor: 'pointer' }}
                  >
                    View
                  </button>
                </td>
                <td style={{ padding: '0.75rem', fontSize: '0.875rem', fontWeight: '500' }}>{item.id}</td>
                <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>{item.subsidiary}</td>
                <td style={{ padding: '0.75rem', fontSize: '0.875rem', fontWeight: '500' }}>{item.prefix}</td>
                <td style={{ padding: '0.75rem', fontSize: '0.875rem', textAlign: 'center' }}>{item.runningNumber}</td>
                <td style={{ padding: '0.75rem', fontSize: '0.875rem', textAlign: 'center' }}>{item.length}</td>
                <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>{item.externalId || '-'}</td>
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
