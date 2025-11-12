import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewTaxCodes = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showInactives, setShowInactives] = useState(false);

  const [taxCodes] = useState([
    { id: 1, name: '9%', description: 'GST 9%', country: 'Singapore', rate: '9.00%', city: '', county: '', stateProvinceCounty: '', category: '' },
    { id: 2, name: '8%', description: 'GST 8%', country: 'Singapore', rate: '8.00%', city: '', county: '', stateProvinceCounty: '', category: '' },
    { id: 3, name: '7%', description: '', country: 'Singapore', rate: '7.00%', city: '', county: '', stateProvinceCounty: '', category: '' },
    { id: 4, name: '4.5%', description: 'GST 4.5%', country: 'Singapore', rate: '4.50%', city: '', county: '', stateProvinceCounty: '', category: '' },
    { id: 5, name: '0%', description: '', country: 'Singapore', rate: '0.00%', city: '', county: '', stateProvinceCounty: '', category: '' }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (id) => {
    setCurrentPage('view-tax-code-detail');
  };

  const handleEdit = (id) => {
    setCurrentPage('edit-tax-code');
  };

  const handleNewTaxCode = () => {
    setCurrentPage('new-tax-code');
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <i className="fas fa-percentage" style={{ fontSize: '1.5rem', color: '#4a90e2' }}></i>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#333', margin: 0 }}>Tax Codes</h1>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>List</button>
          <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>Search</button>
        </div>
      </div>

      {/* Controls Card */}
      <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '1.5rem', marginBottom: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#666' }}>VIEW:</label>
            <select 
              className="form-control"
              value={viewFilter}
              onChange={(e) => setViewFilter(e.target.value)}
              style={{ width: '200px' }}
            >
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>Customize View</button>
          </div>
          <button className="btn btn-primary" onClick={handleNewTaxCode} style={{ padding: '0.5rem 1.5rem' }}>
            <i className="fas fa-plus" style={{ marginRight: '0.5rem' }}></i>
            New
          </button>
        </div>
      </div>

      {/* Filters and Actions */}
      <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '1rem 1.5rem', marginBottom: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: '600', cursor: 'pointer' }}>
            <i className="fas fa-chevron-down"></i>
            FILTERS
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px', width: '200px' }}
            />
            <button className="btn-icon" title="Export to Excel">
              <i className="fas fa-file-excel" style={{ color: '#28a745', fontSize: '1.25rem' }}></i>
            </button>
            <button className="btn-icon" title="Export to PDF">
              <i className="fas fa-file-pdf" style={{ color: '#dc3545', fontSize: '1.25rem' }}></i>
            </button>
            <button className="btn-icon" title="Print">
              <i className="fas fa-print" style={{ fontSize: '1.25rem' }}></i>
            </button>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={showInactives}
                onChange={(e) => setShowInactives(e.target.checked)}
              />
              <span>SHOW INACTIVES</span>
            </label>
            <span style={{ fontSize: '0.875rem', color: '#666' }}>TOTAL: {taxCodes.length}</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #e9ecef' }}>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>EDIT | VIEW</th>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>NAME</th>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>DESCRIPTION</th>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>COUNTRY</th>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>RATE</th>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>CITY</th>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>COUNTY</th>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>STATE/PROVINCE/COUNTY</th>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>CATEGORY</th>
            </tr>
          </thead>
          <tbody>
            {taxCodes.map((code, index) => (
              <tr key={code.id} style={{ borderBottom: '1px solid #e9ecef', backgroundColor: index % 2 === 0 ? 'white' : '#fafbfc' }}>
                <td style={{ padding: '1rem' }}>
                  <button 
                    onClick={() => handleEdit(code.id)}
                    style={{ 
                      background: 'none', 
                      border: '1px solid #ddd', 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '4px', 
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      marginRight: '0.5rem'
                    }}
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleView(code.id)}
                    style={{ 
                      background: 'none', 
                      border: '1px solid #ddd', 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '4px', 
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}
                  >
                    View
                  </button>
                </td>
                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>{code.name}</td>
                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>{code.description}</td>
                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>{code.country}</td>
                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>{code.rate}</td>
                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>{code.city}</td>
                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>{code.county}</td>
                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>{code.stateProvinceCounty}</td>
                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>{code.category}</td>
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

export default ViewTaxCodes;
