import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewLocations = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [showFilters, setShowFilters] = useState(false);
  const [showInactives, setShowInactives] = useState(false);

  const [locations] = useState([
    { id: 1, name: 'Blok Seng Yard', phone: '', city: '', stateProvince: '', country: 'SG' },
    { id: 2, name: 'Hong Hang Shipyard', phone: '', city: '', stateProvince: '', country: 'SG' },
    { id: 3, name: 'Mega yard', phone: '', city: '', stateProvince: '', country: 'SG' },
    { id: 4, name: 'MEP MARINE CC', phone: '', city: '', stateProvince: '', country: 'SG' },
    { id: 5, name: 'Shipyards/Construction', phone: '', city: '', stateProvince: '', country: 'SG' },
    { id: 6, name: 'Singapore (TDQ)', phone: '', city: '', stateProvince: '', country: 'SG' },
    { id: 7, name: 'Singapore (TEA)', phone: '', city: 'Singapore', stateProvince: '', country: 'SG' },
    { id: 8, name: 'Singapore (TMO)', phone: '', city: '', stateProvince: '', country: 'SG' },
    { id: 9, name: 'Singapore (TOMS)', phone: '', city: 'Singapore', stateProvince: '', country: 'SG' },
    { id: 10, name: 'Singapore (TSV)', phone: '', city: '', stateProvince: '', country: 'SG' },
    { id: 11, name: 'Singapore(MEP)', phone: '', city: '', stateProvince: '', country: 'SG' },
    { id: 12, name: 'TOM -11', phone: '', city: '', stateProvince: '', country: 'SG' },
    { id: 13, name: 'TOM External Workshop', phone: '', city: 'Singapore', stateProvince: '', country: 'SG' },
    { id: 14, name: 'TOM - 13', phone: '', city: '', stateProvince: '', country: 'SG' }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (location) => {
    sessionStorage.setItem('selectedLocation', JSON.stringify(location));
    setCurrentPage('view-location-detail');
  };

  const handleEdit = (location) => {
    sessionStorage.setItem('selectedLocation', JSON.stringify(location));
    setCurrentPage('edit-location');
  };

  const handleNew = () => {
    setCurrentPage('new-location');
  };

  const handleCustomizeView = () => {
    showToast('Customize View functionality coming soon', 'info');
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-map-marker-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Locations</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>VIEW</label>
          <select 
            className="form-control"
            style={{ width: '200px' }}
          >
            <option value="default">Location Default</option>
            <option value="custom1">Custom View 1</option>
          </select>
          <button 
            className="btn btn-secondary"
            onClick={handleCustomizeView}
            style={{ marginLeft: '10px' }}
          >
            Customize View
          </button>
          <button 
            className="btn btn-primary"
            onClick={handleNew}
            style={{ marginLeft: '10px' }}
          >
            New Location
          </button>
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button 
            className="btn-icon" 
            title="Filters"
            onClick={() => setShowFilters(!showFilters)}
          >
            <i className="fas fa-filter"></i>
            <span>FILTERS</span>
          </button>
          <button className="btn-icon" title="Edit View">
            <i className="fas fa-edit"></i>
          </button>
          <button className="btn-icon" title="View">
            <i className="fas fa-eye"></i>
          </button>
          <button className="btn-icon" title="Print">
            <i className="fas fa-print"></i>
          </button>
        </div>
        <div className="filter-right-group">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <input
              type="checkbox"
              id="showInactives"
              checked={showInactives}
              onChange={(e) => setShowInactives(e.target.checked)}
              style={{ width: '14px', height: '14px' }}
            />
            <label htmlFor="showInactives" style={{ margin: 0, fontSize: '12px', fontWeight: '500' }}>SHOW INACTIVES</label>
          </div>
          <div className="list-total" style={{ fontSize: '12px', fontWeight: '600' }}>
            TOTAL: {locations.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '12%', fontSize: '11px', backgroundColor: '#e8eef5' }}>EDIT | VIEW</th>
              <th style={{ width: '25%', fontSize: '11px', backgroundColor: '#e8eef5' }}>NAME</th>
              <th style={{ width: '15%', fontSize: '11px', backgroundColor: '#e8eef5' }}>PHONE</th>
              <th style={{ width: '18%', fontSize: '11px', backgroundColor: '#e8eef5' }}>CITY</th>
              <th style={{ width: '15%', fontSize: '11px', backgroundColor: '#e8eef5' }}>STATE/PROVINCE</th>
              <th style={{ width: '15%', fontSize: '11px', backgroundColor: '#e8eef5' }}>COUNTRY</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.id}>
                <td style={{ fontSize: '13px' }}>
                  <button 
                    className="view-link"
                    onClick={() => handleEdit(location)}
                    style={{ fontSize: '13px' }}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleView(location)}
                    style={{ fontSize: '13px' }}
                  >
                    View
                  </button>
                </td>
                <td style={{ fontSize: '13px' }}>{location.name}</td>
                <td style={{ fontSize: '13px' }}>{location.phone || '-'}</td>
                <td style={{ fontSize: '13px' }}>{location.city || '-'}</td>
                <td style={{ fontSize: '13px' }}>{location.stateProvince || '-'}</td>
                <td style={{ fontSize: '13px' }}>{location.country}</td>
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

export default ViewLocations;
