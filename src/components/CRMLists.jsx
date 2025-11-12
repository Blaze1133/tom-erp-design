import React, { useState } from 'react';
import Toast from './Toast';

const CRMLists = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [showInactives, setShowInactives] = useState(false);
  const [viewFilter, setViewFilter] = useState('Subsidiary Default');

  const [lists] = useState([
    { id: 1, description: 'New Requirement', list: 'Buying Reason' },
    { id: 2, description: 'Other', list: 'Buying Reason' },
    { id: 3, description: 'Replace Existing', list: 'Buying Reason' },
    { id: 4, description: '1 - 3 months', list: 'Buying Time Frame' },
    { id: 5, description: '10 - 12 months', list: 'Buying Time Frame' },
    { id: 6, description: '3 Days', list: 'Buying Time Frame' },
    { id: 7, description: '4 - 6 months', list: 'Buying Time Frame' },
    { id: 8, description: '7 - 9 months', list: 'Buying Time Frame' },
    { id: 9, description: 'Greater than 1 year', list: 'Buying Time Frame' },
    { id: 10, description: 'Less than 1 month', list: 'Buying Time Frame' },
    { id: 11, description: 'Alternate Contact', list: 'Contact Role' },
    { id: 12, description: 'Consultant', list: 'Contact Role' },
    { id: 13, description: 'Decision Maker', list: 'Contact Role' },
    { id: 14, description: 'Order Creator', list: 'Contact Role' },
    { id: 15, description: 'Primary Contact', list: 'Contact Role' },
    { id: 16, description: 'Conference Call', list: 'Note Type' },
    { id: 17, description: 'E-mail', list: 'Note Type' },
    { id: 18, description: 'Fax', list: 'Note Type' },
    { id: 19, description: 'Letter', list: 'Note Type' },
    { id: 20, description: 'Meeting', list: 'Note Type' },
    { id: 21, description: 'Note', list: 'Note Type' }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (id) => {
    setCurrentPage('view-crm-list-detail');
  };

  const handleNew = () => {
    setCurrentPage('new-crm-list');
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <i className="fas fa-list-ul" style={{ fontSize: '1.5rem', color: '#4a90e2' }}></i>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#333', margin: 0 }}>CRM Lists</h1>
        </div>
      </div>

      {/* Controls Card */}
      <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '1.5rem', marginBottom: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#666' }}>VIEW</label>
            <select 
              className="form-control"
              value={viewFilter}
              onChange={(e) => setViewFilter(e.target.value)}
              style={{ width: '200px' }}
            >
              <option>Subsidiary Default</option>
              <option>All Lists</option>
            </select>
            <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>Customize View</button>
          </div>
          <button className="btn btn-primary" onClick={handleNew} style={{ padding: '0.5rem 1.5rem' }}>
            New CRM List
          </button>
        </div>
      </div>

      {/* Filters */}
      <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '1rem 1.5rem', marginBottom: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: '600', cursor: 'pointer' }}>
            <i className="fas fa-chevron-down"></i>
            FILTERS
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button className="btn-icon">
              <i className="fas fa-edit" style={{ fontSize: '1.1rem' }}></i>
            </button>
            <button className="btn-icon">
              <i className="fas fa-eye" style={{ fontSize: '1.1rem' }}></i>
            </button>
            <button className="btn-icon">
              <i className="fas fa-print" style={{ fontSize: '1.1rem' }}></i>
            </button>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={showInactives}
                onChange={(e) => setShowInactives(e.target.checked)}
              />
              <span>SHOW INACTIVES</span>
            </label>
            <span style={{ fontSize: '0.875rem', color: '#666' }}>TOTAL: {lists.length}</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #e9ecef' }}>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>EDIT | VIEW</th>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>DESCRIPTION</th>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>LIST</th>
            </tr>
          </thead>
          <tbody>
            {lists.map((item, index) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #e9ecef', backgroundColor: index % 2 === 0 ? 'white' : '#fafbfc' }}>
                <td style={{ padding: '1rem' }}>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); setCurrentPage('edit-crm-list'); }}
                    style={{ color: '#3182CE', textDecoration: 'none', marginRight: '0.5rem' }}
                  >
                    Edit
                  </a>
                  <span style={{ color: '#999' }}>|</span>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handleView(item.id); }}
                    style={{ color: '#3182CE', textDecoration: 'none', marginLeft: '0.5rem' }}
                  >
                    View
                  </a>
                </td>
                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>{item.description}</td>
                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>{item.list}</td>
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

export default CRMLists;
