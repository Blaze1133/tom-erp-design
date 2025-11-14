import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewEmployeeExitProcesses = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Default');

  const [exitProcesses] = useState([]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (exitProcess) => {
    if (onViewClick) {
      onViewClick(exitProcess);
    }
  };

  const handleEdit = (exitProcess) => {
    if (onEditClick) {
      onEditClick(exitProcess);
    }
  };

  const handleNewExitProcess = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-sign-out-alt"></i>
          <h1>Employee Exit Process List</h1>
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
          <button className="btn btn-primary" onClick={handleNewExitProcess}>
            New Employee Exit Process
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
              <option>All Exit Processes</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {exitProcesses.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '8%' }}>EDIT | VIEW</th>
              <th style={{ width: '10%' }}>EMPLOYEE</th>
              <th style={{ width: '10%' }}>HIRE DATE</th>
              <th style={{ width: '10%' }}>RESIGNED DATE</th>
              <th style={{ width: '10%' }}>EXIT TYPE</th>
              <th style={{ width: '10%' }}>NOTICE PERIOD</th>
              <th style={{ width: '10%' }}>FINAL RELEASE DATE</th>
              <th style={{ width: '12%' }}>COMMENTS BY EMPLOYEE</th>
              <th style={{ width: '12%' }}>COMMENTS BY REVIEWER</th>
              <th style={{ width: '10%' }}>REMARKS BY HR</th>
              <th style={{ width: '10%' }}>U/P DOCUMENTS PROVIDED</th>
              <th style={{ width: '10%' }}>REASON FOR RESIGNATION</th>
            </tr>
          </thead>
          <tbody>
            {exitProcesses.length === 0 ? (
              <tr>
                <td colSpan="12" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                  No records to show.
                </td>
              </tr>
            ) : (
              exitProcesses.map((exitProcess) => (
                <tr key={exitProcess.id}>
                  <td>
                    <button 
                      className="view-link"
                      onClick={() => handleEdit(exitProcess)}
                    >
                      Edit
                    </button>
                    {' | '}
                    <button 
                      className="view-link"
                      onClick={() => handleView(exitProcess)}
                    >
                      View
                    </button>
                  </td>
                  <td>{exitProcess.employee}</td>
                  <td>{exitProcess.hireDate}</td>
                  <td>{exitProcess.resignedDate}</td>
                  <td>{exitProcess.exitType}</td>
                  <td>{exitProcess.noticePeriod}</td>
                  <td>{exitProcess.finalReleaseDate}</td>
                  <td>{exitProcess.commentsByEmployee}</td>
                  <td>{exitProcess.commentsByReviewer}</td>
                  <td>{exitProcess.remarksByHr}</td>
                  <td>{exitProcess.upDocumentsProvided}</td>
                  <td>{exitProcess.reasonForResignation}</td>
                </tr>
              ))
            )}
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

export default ViewEmployeeExitProcesses;
