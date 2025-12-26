import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewPlantSiteLocations = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [searchTerm, setSearchTerm] = useState('');

  const [siteLocations] = useState([
    {
      id: 1,
      siteId: 'SITE001',
      siteName: 'Plant Manufacturing Facility A',
      siteAddress: '123 Industrial Park, Jurong West, Singapore 638458',
      status: 'Active',
      createdDate: '2024-01-10'
    },
    {
      id: 2,
      siteId: 'SITE002',
      siteName: 'Assembly Workshop B',
      siteAddress: '456 Factory Road, Woodlands, Singapore 738123',
      status: 'Active',
      createdDate: '2024-01-15'
    },
    {
      id: 3,
      siteId: 'SITE003',
      siteName: 'Production Unit C',
      siteAddress: '789 Manufacturing Avenue, Tuas, Singapore 639798',
      status: 'Active',
      createdDate: '2024-02-01'
    },
    {
      id: 4,
      siteId: 'SITE004',
      siteName: 'Quality Control Center',
      siteAddress: '321 Testing Lane, Changi, Singapore 498765',
      status: 'Active',
      createdDate: '2024-02-10'
    },
    {
      id: 5,
      siteId: 'SITE005',
      siteName: 'Warehouse Storage D',
      siteAddress: '654 Logistics Drive, Pasir Ris, Singapore 519876',
      status: 'Inactive',
      createdDate: '2024-02-20'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewSite = (site) => {
    if (onViewClick) {
      onViewClick(site);
    }
  };

  const handleEditSite = (site) => {
    if (onEditClick) {
      onEditClick(site);
    }
  };

  const handleNewSite = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  const filteredSites = siteLocations.filter(site =>
    site.siteName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    site.siteId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    site.siteAddress.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-map-marker-alt"></i>
          <h1>Plant Site Locations</h1>
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
          <button className="btn btn-primary" onClick={handleNewSite}>
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
              <option>All Sites</option>
              <option>Active Sites</option>
              <option>Inactive Sites</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {filteredSites.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '10%' }}>EDIT | VIEW</th>
              <th style={{ width: '12%' }}>SITE ID</th>
              <th style={{ width: '20%' }}>SITE NAME</th>
              <th style={{ width: '40%' }}>SITE ADDRESS</th>
              <th style={{ width: '10%' }}>STATUS</th>
              <th style={{ width: '12%' }}>CREATED DATE</th>
            </tr>
          </thead>
          <tbody>
            {filteredSites.map((site) => (
              <tr key={site.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditSite(site)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleViewSite(site)}
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

export default ViewPlantSiteLocations;
