import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCommunityContributionFunds = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');
  const [searchProject, setSearchProject] = useState('');

  // Sample data based on the uploaded image
  const [communityFunds] = useState([
    {
      id: 1,
      name: 'CDAC',
      status: 'Active'
    },
    {
      id: 2,
      name: 'ECF',
      status: 'Active'
    },
    {
      id: 3,
      name: 'MBMF',
      status: 'Active'
    },
    {
      id: 4,
      name: 'SINDA',
      status: 'Active'
    }
  ]);

  const filteredFunds = communityFunds.filter(fund => {
    if (viewFilter === 'all') return true;
    return fund.status === viewFilter;
  });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (fund) => {
    if (onViewClick) {
      onViewClick(fund);
    }
  };

  const handleEdit = (fund) => {
    if (onEditClick) {
      onEditClick(fund);
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-hand-holding-heart"></i>
          <h1>Community Contribution Fund List</h1>
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
            New Community Contribution Fund
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
              <option>STATUS</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {filteredFunds.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '10%' }}>EDIT | VIEW</th>
              <th style={{ width: '90%' }}>NAME ▲</th>
            </tr>
          </thead>
          <tbody>
            {filteredFunds.map((fund) => (
              <tr key={fund.id}>
                <td>
                  <span 
                    onClick={() => handleEdit(fund)}
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
                    onClick={() => handleView(fund)}
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
                <td>{fund.name}</td>
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

export default ViewCommunityContributionFunds;
