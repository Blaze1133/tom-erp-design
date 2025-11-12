import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewClasses = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [showFilters, setShowFilters] = useState(false);
  const [showInactives, setShowInactives] = useState(false);

  const [classes] = useState([
    { id: 1, name: 'Consumable Item' },
    { id: 2, name: 'Course' },
    { id: 3, name: 'Cutting Works' },
    { id: 4, name: 'Electrical' },
    { id: 5, name: 'Fabrication' },
    { id: 6, name: 'Hydrotesting' },
    { id: 7, name: 'Installation work' },
    { id: 8, name: 'Manpower Supply' },
    { id: 9, name: 'Material Supply' },
    { id: 10, name: 'Module /Prefab' },
    { id: 11, name: 'Piping' },
    { id: 12, name: 'Project Works' },
    { id: 13, name: 'Refurbishment works' },
    { id: 14, name: 'Rental' },
    { id: 15, name: 'Repair & Referable' },
    { id: 16, name: 'Sale of Scrap Metal' },
    { id: 17, name: 'Structure' }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (classItem) => {
    sessionStorage.setItem('selectedClass', JSON.stringify(classItem));
    setCurrentPage('view-class-detail');
  };

  const handleEdit = (classItem) => {
    sessionStorage.setItem('selectedClass', JSON.stringify(classItem));
    setCurrentPage('edit-class');
  };

  const handleNew = () => {
    setCurrentPage('new-class');
  };

  const handleCustomizeView = () => {
    showToast('Customize View functionality coming soon', 'info');
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-tags" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Classes</h1>
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
            <option value="default">Class Default</option>
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
            New Class
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
            TOTAL: {classes.length}
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
            {classes.map((classItem) => (
              <tr key={classItem.id}>
                <td style={{ fontSize: '13px' }}>
                  <button 
                    className="view-link"
                    onClick={() => handleEdit(classItem)}
                    style={{ fontSize: '13px' }}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleView(classItem)}
                    style={{ fontSize: '13px' }}
                  >
                    View
                  </button>
                </td>
                <td style={{ fontSize: '13px' }}>{classItem.name}</td>
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

export default ViewClasses;
