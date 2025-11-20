import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewIR8AYears = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');
  const [searchProject, setSearchProject] = useState('');

  const [ir8aYears] = useState([
    {
      id: 1,
      editView: true,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      dataProcess: 'Yes'
    },
    {
      id: 2,
      editView: true,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      dataProcess: 'Yes'
    },
    {
      id: 3,
      editView: true,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      dataProcess: 'Yes'
    },
    {
      id: 4,
      editView: true,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      dataProcess: 'Yes'
    },
    {
      id: 5,
      editView: true,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      dataProcess: 'Yes'
    },
    {
      id: 6,
      editView: true,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd',
      dataProcess: 'Yes'
    },
    {
      id: 7,
      editView: true,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd',
      dataProcess: 'Yes'
    },
    {
      id: 8,
      editView: true,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd',
      dataProcess: 'Yes'
    },
    {
      id: 9,
      editView: true,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd',
      dataProcess: 'Yes'
    },
    {
      id: 10,
      editView: true,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd',
      dataProcess: 'Yes'
    },
    {
      id: 11,
      editView: true,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd',
      dataProcess: 'Yes'
    },
    {
      id: 12,
      editView: true,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd',
      dataProcess: 'Yes'
    },
    {
      id: 13,
      editView: true,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd',
      dataProcess: 'Yes'
    },
    {
      id: 14,
      editView: true,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd',
      dataProcess: 'Yes'
    },
    {
      id: 15,
      editView: true,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DQ) Pte Ltd',
      dataProcess: 'Yes'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewIR8AYear = (ir8aYear) => {
    if (onViewClick) {
      onViewClick(ir8aYear);
    }
  };

  const handleEditIR8AYear = (ir8aYear) => {
    if (onEditClick) {
      onEditClick(ir8aYear);
    }
  };

  const handleNewIR8AYear = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-file-alt"></i>
          <h1>IR8A Year List</h1>
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
            <option value="processed">Processed</option>
            <option value="pending">Pending</option>
          </select>
          <button className="btn-customize">Customize View</button>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewIR8AYear}>
            <i className="fas fa-plus"></i>
            New IR8A Year
          </button>
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button className="btn-icon" title="Show Inactives">
            <i className="fas fa-eye-slash"></i>
            <span>SHOW INACTIVES</span>
          </button>
          <button className="btn-icon" title="Edit">
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
              <option>Subsidiary</option>
              <option>Data Process</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {ir8aYears.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '15%' }}>EDIT | VIEW</th>
              <th style={{ width: '70%' }}>SUBSIDIARY ▲</th>
              <th style={{ width: '15%' }}>DATA PROCESS</th>
            </tr>
          </thead>
          <tbody>
            {ir8aYears.map((ir8aYear) => (
              <tr key={ir8aYear.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditIR8AYear(ir8aYear)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleViewIR8AYear(ir8aYear)}
                  >
                    View
                  </button>
                </td>
                <td>{ir8aYear.subsidiary}</td>
                <td>{ir8aYear.dataProcess}</td>
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

export default ViewIR8AYears;
