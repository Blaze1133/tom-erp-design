import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCpfAppliedAgeGroups = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');
  const [searchProject, setSearchProject] = useState('');

  // Sample data based on the uploaded image
  const [cpfAgeGroups] = useState([
    {
      id: 1,
      refCpfType: 'Full and Graduated PR (1st year)',
      ageGroup: '50 & Below',
      status: 'Active'
    },
    {
      id: 2,
      refCpfType: 'Full and Graduated PR (2nd year)',
      ageGroup: '50 & Below',
      status: 'Active'
    },
    {
      id: 3,
      refCpfType: 'Permanent Resident (3rd year & Above)',
      ageGroup: '50 & Below',
      status: 'Active'
    },
    {
      id: 4,
      refCpfType: 'Graduated PR(2nd year)',
      ageGroup: '50 & Below',
      status: 'Active'
    },
    {
      id: 5,
      refCpfType: 'Graduated PR(1st year)',
      ageGroup: '50 & Below',
      status: 'Active'
    },
    {
      id: 6,
      refCpfType: 'Full and Graduated PR (1st year)',
      ageGroup: 'Above 50 to 55',
      status: 'Active'
    },
    {
      id: 7,
      refCpfType: 'Full and Graduated PR (2nd year)',
      ageGroup: 'Above 50 to 55',
      status: 'Active'
    },
    {
      id: 8,
      refCpfType: 'Permanent Resident (3rd year & Above)',
      ageGroup: 'Above 50 to 55',
      status: 'Active'
    },
    {
      id: 9,
      refCpfType: 'Graduated PR(2nd year)',
      ageGroup: 'Above 50 to 55',
      status: 'Active'
    },
    {
      id: 10,
      refCpfType: 'Graduated PR(1st year)',
      ageGroup: 'Above 50 to 55',
      status: 'Active'
    },
    {
      id: 11,
      refCpfType: 'Full and Graduated PR (1st year)',
      ageGroup: 'Above 55 to 60',
      status: 'Active'
    },
    {
      id: 12,
      refCpfType: 'Full and Graduated PR (2nd year)',
      ageGroup: 'Above 55 to 60',
      status: 'Active'
    },
    {
      id: 13,
      refCpfType: 'Permanent Resident (3rd year & Above)',
      ageGroup: 'Above 55 to 60',
      status: 'Active'
    },
    {
      id: 14,
      refCpfType: 'Graduated PR(2nd year)',
      ageGroup: 'Above 55 to 60',
      status: 'Active'
    },
    {
      id: 15,
      refCpfType: 'Graduated PR(1st year)',
      ageGroup: 'Above 55 to 60',
      status: 'Active'
    },
    {
      id: 16,
      refCpfType: 'Full and Graduated PR (1st year)',
      ageGroup: 'Above 60-65',
      status: 'Active'
    },
    {
      id: 17,
      refCpfType: 'Full and Graduated PR (2nd year)',
      ageGroup: 'Above 60-65',
      status: 'Active'
    },
    {
      id: 18,
      refCpfType: 'Permanent Resident (3rd year & Above)',
      ageGroup: 'Above 60-65',
      status: 'Active'
    },
    {
      id: 19,
      refCpfType: 'Graduated PR(2nd year)',
      ageGroup: 'Above 60-65',
      status: 'Active'
    },
    {
      id: 20,
      refCpfType: 'Graduated PR(1st year)',
      ageGroup: 'Above 60-65',
      status: 'Active'
    }
  ]);

  const filteredAgeGroups = cpfAgeGroups.filter(group => {
    if (viewFilter === 'all') return true;
    return group.status === viewFilter;
  });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (group) => {
    if (onViewClick) {
      onViewClick(group);
    }
  };

  const handleEdit = (group) => {
    if (onEditClick) {
      onEditClick(group);
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-users"></i>
          <h1>CPF Applied Age Group List</h1>
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
            New CPF Applied Age Group
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
              <option>REF CPF TYPE</option>
              <option>AGE GROUP</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {filteredAgeGroups.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '10%' }}>EDIT | VIEW</th>
              <th style={{ width: '5%' }}>ID ▲</th>
              <th style={{ width: '40%' }}>REF CPF TYPE</th>
              <th style={{ width: '25%' }}>AGE GROUP</th>
              <th style={{ width: '20%' }}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {filteredAgeGroups.map((group) => (
              <tr key={group.id}>
                <td>
                  <span 
                    onClick={() => handleEdit(group)}
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
                    onClick={() => handleView(group)}
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
                <td>{group.id}</td>
                <td>{group.refCpfType}</td>
                <td>{group.ageGroup}</td>
                <td>{group.status}</td>
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

export default ViewCpfAppliedAgeGroups;
