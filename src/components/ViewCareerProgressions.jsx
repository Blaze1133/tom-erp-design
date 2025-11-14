import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCareerProgressions = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Default');

  const [careerProgressions] = useState([
    { id: 1, idNumber: 1, reason: '', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', department: 'TOM : Admin' },
    { id: 2, idNumber: 2, reason: '', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', department: 'TOM : Finance' },
    { id: 3, idNumber: 3, reason: '', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', department: 'TOM : Admin' },
    { id: 4, idNumber: 4, reason: '', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', department: '' },
    { id: 5, idNumber: 5, reason: '', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', department: '' },
    { id: 6, idNumber: 6, reason: 'Merit Increment', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', country: 'Singapore', department: 'MEP' },
    { id: 7, idNumber: 7, reason: 'Merit Increment', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', country: 'Singapore', department: 'Construction' },
    { id: 8, idNumber: 8, reason: 'Merit Increment', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DO) Pte Ltd', country: 'Singapore', department: 'O&G' },
    { id: 9, idNumber: 9, reason: 'Merit Increment', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DO) Pte Ltd', country: 'Singapore', department: '' },
    { id: 10, idNumber: 10, reason: 'Merit Increment', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', country: 'Singapore', department: 'MEP' },
    { id: 11, idNumber: 11, reason: 'Merit Increment', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', department: 'TOM : IT' },
    { id: 12, idNumber: 12, reason: 'Merit Increment', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', country: 'Singapore', department: 'O&G' },
    { id: 13, idNumber: 13, reason: 'Merit Increment', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', country: 'Singapore', department: 'MEP' },
    { id: 14, idNumber: 14, reason: 'Merit Increment', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', country: 'Singapore', department: 'MEP' }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (progression) => {
    if (onViewClick) {
      onViewClick(progression);
    }
  };

  const handleEdit = (progression) => {
    if (onEditClick) {
      onEditClick(progression);
    }
  };

  const handleNewProgression = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-chart-line"></i>
          <h1>Career Progression-Salary List</h1>
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
            style={{ width: '200px' }}
          >
            <option value="Default">Default</option>
          </select>
          <button className="btn btn-secondary" style={{ marginLeft: '1rem' }}>Customize View</button>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewProgression}>
            New Career Progression-Salary
          </button>
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button className="btn-icon" title="Export">
            <i className="fas fa-file-export"></i>
          </button>
          <button className="btn-icon" title="Excel">
            <i className="fas fa-file-excel"></i>
          </button>
          <button className="btn-icon" title="PDF">
            <i className="fas fa-file-pdf"></i>
          </button>
          <button className="btn-icon" title="Print">
            <i className="fas fa-print"></i>
          </button>
          <label className="checkbox-label">
            <input type="checkbox" />
            SHOW INACTIVES
          </label>
          <button className="btn-icon" title="Edit">
            <span>EDIT</span>
          </button>
          <button className="btn-icon" title="Delete">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="filter-right-group">
          <div className="quick-sort">
            <label>QUICK SORT</label>
            <select className="form-control">
              <option>All Progressions</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {careerProgressions.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '10%' }}>EDIT | VIEW</th>
              <th style={{ width: '10%' }}>ID ▲</th>
              <th style={{ width: '15%' }}>REASON</th>
              <th style={{ width: '35%' }}>SUBSIDIARY</th>
              <th style={{ width: '15%' }}>COUNTRY</th>
              <th style={{ width: '15%' }}>DEPARTMENT</th>
            </tr>
          </thead>
          <tbody>
            {careerProgressions.map((progression) => (
              <tr key={progression.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEdit(progression)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleView(progression)}
                  >
                    View
                  </button>
                </td>
                <td>{progression.idNumber}</td>
                <td>{progression.reason}</td>
                <td>{progression.subsidiary}</td>
                <td>{progression.country}</td>
                <td>{progression.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
};

export default ViewCareerProgressions;
