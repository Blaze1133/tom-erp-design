import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewEmployeeLeaveReinstatements = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Default');

  const [reinstatements] = useState([]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (reinstatement) => {
    if (onViewClick) onViewClick(reinstatement);
  };

  const handleEdit = (reinstatement) => {
    if (onEditClick) onEditClick(reinstatement);
  };

  const handleNew = () => {
    if (onNewClick) onNewClick();
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-undo"></i>
          <h1>Employee Leave Reinstatement List</h1>
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
          <select value={viewFilter} onChange={(e) => setViewFilter(e.target.value)} className="form-control" style={{ width: '200px' }}>
            <option value="Default">Default</option>
          </select>
          <button className="btn btn-secondary" style={{ marginLeft: '1rem' }}>Customize View</button>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNew}>New Employee Leave Reinstatement</button>
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button className="btn-icon" title="Export"><i className="fas fa-file-export"></i></button>
          <button className="btn-icon" title="Excel"><i className="fas fa-file-excel"></i></button>
          <button className="btn-icon" title="PDF"><i className="fas fa-file-pdf"></i></button>
          <button className="btn-icon" title="Print"><i className="fas fa-print"></i></button>
          <label className="checkbox-label"><input type="checkbox" />SHOW INACTIVES</label>
          <button className="btn-icon" title="Edit"><span>EDIT</span></button>
          <button className="btn-icon" title="Delete"><i className="fas fa-times"></i></button>
        </div>
        <div className="filter-right-group">
          <div className="quick-sort">
            <label>QUICK SORT</label>
            <select className="form-control"><option>All Reinstatements</option></select>
          </div>
          <div className="list-total">TOTAL: {reinstatements.length}</div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '10%' }}>EDIT | VIEW</th>
            </tr>
          </thead>
          <tbody>
            {reinstatements.length === 0 ? (
              <tr>
                <td colSpan="1" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                  No records to show.
                </td>
              </tr>
            ) : (
              reinstatements.map((reinstatement) => (
                <tr key={reinstatement.id}>
                  <td><button className="view-link" onClick={() => handleEdit(reinstatement)}>Edit</button>{' | '}<button className="view-link" onClick={() => handleView(reinstatement)}>View</button></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default ViewEmployeeLeaveReinstatements;
