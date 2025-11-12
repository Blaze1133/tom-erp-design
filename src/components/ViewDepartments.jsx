import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewDepartments = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [showFilters, setShowFilters] = useState(false);
  const [showInactives, setShowInactives] = useState(false);

  const [departments] = useState([
    { id: 1, name: 'Construction' },
    { id: 2, name: 'MEP' },
    { id: 3, name: 'MEP MARINE' },
    { id: 4, name: 'O&G' },
    { id: 5, name: 'Piping' },
    { id: 6, name: 'Shipyard' },
    { id: 7, name: 'Keppel Fels' },
    { id: 8, name: 'Keppel Shipyard' },
    { id: 9, name: 'Megayard' },
    { id: 10, name: 'Sembawang' },
    { id: 11, name: 'TOM' },
    { id: 12, name: 'Admin' },
    { id: 13, name: 'Electrical and E&I' },
    { id: 14, name: 'Facility' },
    { id: 15, name: 'Finance' },
    { id: 16, name: 'Internal Transfer' },
    { id: 17, name: 'Human Resource' },
    { id: 18, name: 'IT' },
    { id: 19, name: 'Logistic' },
    { id: 20, name: 'Operating' },
    { id: 21, name: 'Purchase' },
    { id: 22, name: 'Sales and Marketing' },
    { id: 23, name: 'Security' }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (department) => {
    sessionStorage.setItem('selectedDepartment', JSON.stringify(department));
    setCurrentPage('view-department-detail');
  };

  const handleEdit = (department) => {
    sessionStorage.setItem('selectedDepartment', JSON.stringify(department));
    setCurrentPage('edit-department');
  };

  const handleNew = () => {
    setCurrentPage('new-department');
  };

  const handleCustomizeView = () => {
    showToast('Customize View functionality coming soon', 'info');
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-sitemap" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Departments</h1>
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
            <option value="default">Department Default</option>
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
            New Department
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
            TOTAL: {departments.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '15%', fontSize: '11px', backgroundColor: '#e8eef5' }}>EDIT | VIEW</th>
              <th style={{ width: '85%', fontSize: '11px', backgroundColor: '#e8eef5' }}>NAME</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department) => (
              <tr key={department.id}>
                <td style={{ fontSize: '13px' }}>
                  <button 
                    className="view-link"
                    onClick={() => handleEdit(department)}
                    style={{ fontSize: '13px' }}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleView(department)}
                    style={{ fontSize: '13px' }}
                  >
                    View
                  </button>
                </td>
                <td style={{ fontSize: '13px' }}>{department.name}</td>
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

export default ViewDepartments;
