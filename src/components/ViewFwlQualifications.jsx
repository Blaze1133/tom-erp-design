import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewFwlQualifications = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');
  const [searchProject, setSearchProject] = useState('');

  // Sample data based on the uploaded image
  const [fwlQualifications] = useState([
    {
      id: 1,
      name: 'Construction Work Permit Holder Basic Tier-300',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Construction Work Permit Holder Basic Tier-700',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Construction Work Permit Holder MYE Waiver-600',
      status: 'Active'
    },
    {
      id: 4,
      name: 'Construction Work Permit Holder MYE Waiver-950',
      status: 'Active'
    },
    {
      id: 5,
      name: 'Manufacturing WPH Basic Tier 2- 350',
      status: 'Active'
    },
    {
      id: 6,
      name: 'Manufacturing WPH Basic Tier 2- 470',
      status: 'Active'
    },
    {
      id: 7,
      name: 'Manufacturing WPH Basic Tier 3- 550',
      status: 'Active'
    },
    {
      id: 8,
      name: 'Manufacturing WPH Basic Tier 3- 650',
      status: 'Active'
    },
    {
      id: 9,
      name: 'Manufacturing WPH Basic Tier- 250',
      status: 'Active'
    },
    {
      id: 10,
      name: 'Manufacturing WPH Basic Tier- 370',
      status: 'Active'
    },
    {
      id: 11,
      name: 'Marine WPH Basic Tier-300',
      status: 'Active'
    },
    {
      id: 12,
      name: 'Marine WPH Basic Tier-400',
      status: 'Active'
    },
    {
      id: 13,
      name: 'Process WPH Basic Tier-300',
      status: 'Active'
    },
    {
      id: 14,
      name: 'Process WPH Basic Tier-650',
      status: 'Active'
    },
    {
      id: 15,
      name: 'Process WPH MYE Waiver- 600',
      status: 'Active'
    },
    {
      id: 16,
      name: 'Process WPH MYE Waiver- 750',
      status: 'Active'
    },
    {
      id: 17,
      name: 'S-Pass Basic Tier 2-650',
      status: 'Active'
    },
    {
      id: 18,
      name: 'S-Pass Basic Tier-550',
      status: 'Active'
    }
  ]);

  const filteredQualifications = fwlQualifications.filter(qualification => {
    if (viewFilter === 'all') return true;
    return qualification.status === viewFilter;
  });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (qualification) => {
    if (onViewClick) {
      onViewClick(qualification);
    }
  };

  const handleEdit = (qualification) => {
    if (onEditClick) {
      onEditClick(qualification);
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-certificate"></i>
          <h1>FWL Qualification List</h1>
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
            New FWL Qualification
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
            TOTAL: {filteredQualifications.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '15%' }}>EDIT | VIEW</th>
              <th style={{ width: '85%' }}>NAME ▲</th>
            </tr>
          </thead>
          <tbody>
            {filteredQualifications.map((qualification) => (
              <tr key={qualification.id}>
                <td>
                  <span 
                    onClick={() => handleEdit(qualification)}
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
                    onClick={() => handleView(qualification)}
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
                <td>{qualification.name}</td>
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

export default ViewFwlQualifications;
