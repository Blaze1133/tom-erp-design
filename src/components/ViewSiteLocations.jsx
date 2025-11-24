import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewSiteLocations = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [searchTerm, setSearchTerm] = useState('');

  const [siteLocations] = useState([
    {
      id: 1,
      siteId: 'SITE001',
      siteName: 'Hong Hang Shipyard',
      siteAddress: '1 Benoi Road, Singapore 629890',
      status: 'Active',
      createdDate: '2024-01-15'
    },
    {
      id: 2,
      siteId: 'SITE002',
      siteName: 'Mega yard',
      siteAddress: '50 Gul Road, Singapore 629351',
      status: 'Active',
      createdDate: '2024-01-20'
    },
    {
      id: 3,
      siteId: 'SITE003',
      siteName: 'MEP MARINE CC',
      siteAddress: '2 Boon Leat Terrace, Singapore 119844',
      status: 'Active',
      createdDate: '2024-02-01'
    },
    {
      id: 4,
      siteId: 'SITE004',
      siteName: 'Shipyards/Construction',
      siteAddress: '15 Pioneer Road, Singapore 628457',
      status: 'Active',
      createdDate: '2024-02-10'
    },
    {
      id: 5,
      siteId: 'SITE005',
      siteName: 'Singapore (MEP)',
      siteAddress: '10 Tuas South Street 3, Singapore 636738',
      status: 'Active',
      createdDate: '2024-02-15'
    },
    {
      id: 6,
      siteId: 'SITE006',
      siteName: 'TOM-11',
      siteAddress: '11 Tuas Avenue 20, Singapore 638824',
      status: 'Active',
      createdDate: '2024-02-20'
    },
    {
      id: 7,
      siteId: 'SITE007',
      siteName: 'TOM External Workshop',
      siteAddress: '25 Tuas West Drive, Singapore 638404',
      status: 'Active',
      createdDate: '2024-02-25'
    },
    {
      id: 8,
      siteId: 'SITE008',
      siteName: 'TOM-13',
      siteAddress: '13 Tuas Avenue 20, Singapore 638824',
      status: 'Active',
      createdDate: '2024-03-01'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewSiteLocation = (siteLocation) => {
    if (onViewClick) {
      onViewClick(siteLocation);
    }
  };

  const handleEditSiteLocation = (siteLocation) => {
    if (onEditClick) {
      onEditClick(siteLocation);
    }
  };

  const handleNewSiteLocation = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  const filteredSiteLocations = siteLocations.filter(site =>
    site.siteName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    site.siteId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    site.siteAddress.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-map-marker-alt"></i>
          <h1>Site Locations</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>SEARCH</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
            style={{ width: '250px' }}
            placeholder="Search site locations..."
          />
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewSiteLocation}>
            <i className="fas fa-plus"></i>
            New Site Location
          </button>
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button className="btn-icon" title="Edit View">
            <i className="fas fa-edit"></i>
            <span>EDIT</span>
          </button>
          <button className="btn-icon" title="Delete">
            <i className="fas fa-times"></i>
          </button>
          <button className="btn-icon" title="Export">
            <i className="fas fa-file-export"></i>
          </button>
          <button className="btn-icon" title="Print">
            <i className="fas fa-print"></i>
          </button>
        </div>
        <div className="filter-right-group">
          <div className="quick-sort">
            <label>QUICK SORT</label>
            <select className="form-control">
              <option>All Locations</option>
              <option>Active Locations</option>
              <option>Inactive Locations</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {filteredSiteLocations.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '15%' }}>EDIT | VIEW</th>
              <th style={{ width: '15%' }}>SITE ID</th>
              <th style={{ width: '25%' }}>SITE NAME</th>
              <th style={{ width: '30%' }}>SITE ADDRESS</th>
              <th style={{ width: '10%' }}>STATUS</th>
              <th style={{ width: '15%' }}>CREATED DATE</th>
            </tr>
          </thead>
          <tbody>
            {filteredSiteLocations.map((site) => (
              <tr key={site.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditSiteLocation(site)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleViewSiteLocation(site)}
                  >
                    View
                  </button>
                </td>
                <td className="doc-number">{site.siteId}</td>
                <td>{site.siteName}</td>
                <td>{site.siteAddress}</td>
                <td>
                  <span className={`status-badge ${site.status.toLowerCase()}`}>
                    {site.status}
                  </span>
                </td>
                <td>{site.createdDate}</td>
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

export default ViewSiteLocations;
