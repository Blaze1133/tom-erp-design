import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewSdlMasters = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');
  const [searchProject, setSearchProject] = useState('');

  // Sample data based on the uploaded image
  const [sdlMasters] = useState([
    {
      id: 1,
      name: '$0-$800',
      highRange: 800,
      lowRange: 0,
      sdlPayable: '0%',
      maxMinSdl: 0,
      status: 'Active'
    },
    {
      id: 2,
      name: '$801-$4499',
      highRange: 4499,
      lowRange: 801,
      sdlPayable: '0.25%',
      maxMinSdl: 0,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Above & equal $4500',
      highRange: 99999,
      lowRange: 4500,
      sdlPayable: '10.0%',
      maxMinSdl: 11.25,
      status: 'Active'
    }
  ]);

  const filteredSdlMasters = sdlMasters.filter(sdl => {
    if (viewFilter === 'all') return true;
    return sdl.status === viewFilter;
  });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (sdl) => {
    if (onViewClick) {
      onViewClick(sdl);
    }
  };

  const handleEdit = (sdl) => {
    if (onEditClick) {
      onEditClick(sdl);
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-percentage"></i>
          <h1>SDL Master List</h1>
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
            value={viewFilter}
            onChange={(e) => setViewFilter(e.target.value)}
            className="form-control"
            style={{ width: '250px' }}
          >
            <option value="all">Default</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button className="btn-customize">Customize View</button>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={onNewClick}>
            <i className="fas fa-plus"></i>
            New SDL Master
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
              <option>Default</option>
              <option>NAME</option>
              <option>HIGH RANGE</option>
              <option>LOW RANGE</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {filteredSdlMasters.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '10%' }}>EDIT | VIEW</th>
              <th style={{ width: '25%' }}>NAME ▲</th>
              <th style={{ width: '15%' }}>HIGH RANGE</th>
              <th style={{ width: '15%' }}>LOW RANGE</th>
              <th style={{ width: '15%' }}>SDL PAYABLE(%)</th>
              <th style={{ width: '20%' }}>MAX/MIN SDL</th>
            </tr>
          </thead>
          <tbody>
            {filteredSdlMasters.map((sdl) => (
              <tr key={sdl.id}>
                <td>
                  <span 
                    onClick={() => handleEdit(sdl)}
                    style={{ 
                      color: '#007bff', 
                      cursor: 'pointer', 
                      textDecoration: 'none',
                      fontSize: '12px'
                    }}
                  >
                    Edit
                  </span>
                  <span style={{ color: '#ccc', margin: '0 5px' }}>|</span>
                  <span 
                    onClick={() => handleView(sdl)}
                    style={{ 
                      color: '#007bff', 
                      cursor: 'pointer', 
                      textDecoration: 'none',
                      fontSize: '12px'
                    }}
                  >
                    View
                  </span>
                </td>
                <td>{sdl.name}</td>
                <td>{sdl.highRange.toLocaleString()}</td>
                <td>{sdl.lowRange}</td>
                <td>{sdl.sdlPayable}</td>
                <td>{sdl.maxMinSdl}</td>
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

export default ViewSdlMasters;
