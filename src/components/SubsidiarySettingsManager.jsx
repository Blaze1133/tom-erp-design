import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const SubsidiarySettingsManager = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [showFilters, setShowFilters] = useState(true);
  
  // Filter state
  const [filters, setFilters] = useState({
    subsidiary: '',
    country: '',
    currency: '',
    inactive: 'No'
  });

  const [subsidiaries] = useState([
    {
      id: 1,
      name: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      country: 'Singapore',
      currency: 'SGD',
      invoicingEmail: true
    },
    {
      id: 2,
      name: 'Tech Offshore Marine (s) Pte Ltd',
      country: 'Singapore',
      currency: 'SGD',
      invoicingEmail: true
    },
    {
      id: 3,
      name: 'Tech Offshore Marine (DG) Pte Ltd',
      country: 'Singapore',
      currency: 'SGD',
      invoicingEmail: true
    },
    {
      id: 4,
      name: 'Tech Electric & Automation Pte Ltd',
      country: 'Singapore',
      currency: 'SGD',
      invoicingEmail: true
    },
    {
      id: 5,
      name: 'Tech Marine Offshore (S) Pte Ltd',
      country: 'Singapore',
      currency: 'SGD',
      invoicingEmail: true
    },
    {
      id: 6,
      name: 'Tech Offshore Marine (SV) Pte Ltd',
      country: 'Singapore',
      currency: 'SGD',
      invoicingEmail: true
    }
  ]);

  const countries = [
    'Singapore',
    'Malaysia',
    'Indonesia',
    'Thailand',
    'Philippines'
  ];

  const currencies = [
    'SGD',
    'USD',
    'EUR',
    'MYR',
    'IDR'
  ];

  const inactiveOptions = [
    'No',
    'Yes'
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSettings = (subsidiary) => {
    // Store subsidiary data in sessionStorage for the detail page
    sessionStorage.setItem('selectedSubsidiary', JSON.stringify(subsidiary));
    setCurrentPage('setup-subsidiary-settings-detail');
  };

  const handleEnableFeatures = () => {
    showToast('Enable Features functionality coming soon', 'info');
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-cog" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Subsidiary Settings Manager</h1>
        </div>
        <div className="list-actions">
          <button 
            className="btn-icon" 
            title="Enable Features"
            onClick={handleEnableFeatures}
            style={{ 
              backgroundColor: '#4a90e2', 
              color: 'white', 
              padding: '8px 16px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <i className="fas fa-toggle-on"></i>
            <span>Enable Features</span>
          </button>
        </div>
      </div>

      {/* Filters Section */}
      <div className="filters-section" style={{ 
        backgroundColor: '#5b7a9e', 
        padding: '12px 20px',
        marginBottom: '0',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: 'white'
      }}
      onClick={() => setShowFilters(!showFilters)}
      >
        <i className={`fas fa-chevron-${showFilters ? 'down' : 'right'}`}></i>
        <span style={{ fontWeight: '500' }}>Filters</span>
      </div>

      {showFilters && (
        <div className="filters-content" style={{
          backgroundColor: '#f5f5f5',
          padding: '20px',
          borderBottom: '1px solid #ddd',
          marginBottom: '20px'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '20px',
            maxWidth: '1200px'
          }}>
            <div className="form-group">
              <label style={{ 
                display: 'block', 
                marginBottom: '8px',
                fontSize: '13px',
                fontWeight: '500',
                color: '#333'
              }}>
                Subsidiary
              </label>
              <input
                type="text"
                className="form-control"
                value={filters.subsidiary}
                onChange={(e) => handleFilterChange('subsidiary', e.target.value)}
                placeholder="Enter subsidiary name"
              />
            </div>

            <div className="form-group">
              <label style={{ 
                display: 'block', 
                marginBottom: '8px',
                fontSize: '13px',
                fontWeight: '500',
                color: '#333'
              }}>
                Country
              </label>
              <select
                className="form-control"
                value={filters.country}
                onChange={(e) => handleFilterChange('country', e.target.value)}
              >
                <option value="">All Countries</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label style={{ 
                display: 'block', 
                marginBottom: '8px',
                fontSize: '13px',
                fontWeight: '500',
                color: '#333'
              }}>
                Currency
              </label>
              <select
                className="form-control"
                value={filters.currency}
                onChange={(e) => handleFilterChange('currency', e.target.value)}
              >
                <option value="">All Currencies</option>
                {currencies.map(currency => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label style={{ 
                display: 'block', 
                marginBottom: '8px',
                fontSize: '13px',
                fontWeight: '500',
                color: '#333'
              }}>
                Inactive
              </label>
              <select
                className="form-control"
                value={filters.inactive}
                onChange={(e) => handleFilterChange('inactive', e.target.value)}
              >
                {inactiveOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Table Section */}
      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '35%', backgroundColor: '#e8eef5' }}>SUBSIDIARY</th>
              <th style={{ width: '15%', backgroundColor: '#e8eef5' }}>COUNTRY</th>
              <th style={{ width: '15%', backgroundColor: '#e8eef5' }}>CURRENCY</th>
              <th style={{ width: '20%', backgroundColor: '#e8eef5', textAlign: 'center' }}>SETTINGS</th>
              <th style={{ width: '15%', backgroundColor: '#e8eef5', textAlign: 'center' }}>INVOICING EMAIL</th>
            </tr>
          </thead>
          <tbody>
            {subsidiaries.map((subsidiary) => (
              <tr key={subsidiary.id}>
                <td>{subsidiary.name}</td>
                <td>{subsidiary.country}</td>
                <td>{subsidiary.currency}</td>
                <td style={{ textAlign: 'center' }}>
                  <button 
                    className="btn-icon"
                    onClick={() => handleSettings(subsidiary)}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#4a90e2',
                      fontSize: '18px',
                      padding: '4px 8px'
                    }}
                    title="Settings"
                  >
                    <i className="fas fa-sliders-h"></i>
                  </button>
                </td>
                <td style={{ textAlign: 'center' }}>
                  {subsidiary.invoicingEmail && (
                    <i className="fas fa-check" style={{ color: '#4a90e2', fontSize: '16px' }}></i>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default SubsidiarySettingsManager;
