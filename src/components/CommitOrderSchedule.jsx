import React, { useState } from 'react';
import Toast from './Toast';
import CreateCommitOrderSchedule from './CreateCommitOrderSchedule';
import './Enquiries.css';

const CommitOrderSchedule = ({ onNewClick, onViewClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Commit Order Schedules');
  const [showFilters, setShowFilters] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const [schedules] = useState([]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleNew = () => {
    setShowCreateForm(true);
  };

  const handleBackToList = () => {
    setShowCreateForm(false);
  };

  const handleEdit = () => {
    showToast('Edit functionality', 'info');
  };

  const handleView = () => {
    showToast('View functionality', 'info');
  };

  const handleExport = () => {
    showToast('Exporting schedules...', 'info');
  };

  const handlePrint = () => {
    showToast('Printing schedules...', 'info');
  };

  const handleCustomizeView = () => {
    showToast('Customize view', 'info');
  };

  // Show create form if requested
  if (showCreateForm) {
    return <CreateCommitOrderSchedule onBack={handleBackToList} />;
  }

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-calendar-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Commit Order Schedule</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary">
            List
          </button>
          <button className="btn btn-secondary">
            Search
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* View and Actions Bar */}
        <div className="form-section" style={{ padding: '1rem', backgroundColor: '#f8f9fa', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontWeight: '500' }}>VIEW</span>
              <select 
                className="form-control"
                value={viewFilter}
                onChange={(e) => setViewFilter(e.target.value)}
                style={{ width: 'auto', minWidth: '200px' }}
              >
                <option value="Commit Order Schedules">Commit Order Schedules</option>
              </select>
              <button className="btn btn-tertiary" onClick={handleCustomizeView}>
                Customize View
              </button>
              <button 
                className="btn btn-primary" 
                onClick={handleNew}
                style={{ backgroundColor: '#4a90e2' }}
              >
                New Commit Order Schedule
              </button>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="form-section" style={{ marginBottom: '1rem' }}>
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: '0.75rem 1rem', 
              backgroundColor: '#f8f9fa',
              cursor: 'pointer',
              borderRadius: '4px'
            }}
            onClick={() => setShowFilters(!showFilters)}
          >
            <i className={`fas fa-chevron-${showFilters ? 'down' : 'right'}`} style={{ marginRight: '10px' }}></i>
            <i className="fas fa-filter" style={{ marginRight: '10px' }}></i>
            <span style={{ fontWeight: '500' }}>FILTERS</span>
          </div>
          
          {showFilters && (
            <div style={{ padding: '1rem', border: '1px solid #e0e0e0', borderTop: 'none' }}>
              <p style={{ color: '#666', margin: 0 }}>No filters applied</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', padding: '0 1rem' }}>
          <button className="btn btn-tertiary" onClick={handleExport} title="Export">
            <i className="fas fa-file-export"></i>
          </button>
          <button className="btn btn-tertiary" onClick={handlePrint} title="Print">
            <i className="fas fa-print"></i>
          </button>
          <button className="btn btn-tertiary" onClick={handleEdit} title="Edit">
            <span style={{ fontSize: '14px' }}>EDIT</span>
          </button>
          <button className="btn btn-tertiary" onClick={handleView} title="View">
            <span style={{ fontSize: '14px' }}>VIEW</span>
          </button>
          <span style={{ color: '#999', fontSize: '14px', alignSelf: 'center', marginLeft: '1rem' }}>
            EDIT | VIEW
          </span>
        </div>

        {/* Schedules Table */}
        <div className="form-section">
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ fontWeight: '500', color: '#333' }}>TOTAL: {schedules.length}</span>
          </div>
          
          <div className="items-table-container" style={{ overflowX: 'auto' }}>
            <table className="items-table">
              <thead>
                <tr>
                  <th style={{ width: '50px' }}>
                    <input type="checkbox" />
                  </th>
                  <th>EDIT | VIEW</th>
                  <th>INTERNAL ID</th>
                  <th>NAME</th>
                  <th>FREQUENCY</th>
                  <th>REPEAT EVERY</th>
                  <th>NEXT DATE</th>
                </tr>
              </thead>
              <tbody>
                {schedules.length === 0 ? (
                  <tr>
                    <td colSpan="7" style={{ textAlign: 'center', padding: '3rem', color: '#999' }}>
                      No records to show.
                    </td>
                  </tr>
                ) : (
                  schedules.map((schedule, index) => (
                    <tr key={index}>
                      <td><input type="checkbox" /></td>
                      <td>
                        <button 
                          className="btn-link" 
                          onClick={() => handleEdit()}
                          style={{ marginRight: '8px' }}
                        >
                          Edit
                        </button>
                        |
                        <button 
                          className="btn-link" 
                          onClick={() => handleView()}
                          style={{ marginLeft: '8px' }}
                        >
                          View
                        </button>
                      </td>
                      <td>{schedule.internalId}</td>
                      <td>{schedule.name}</td>
                      <td>{schedule.frequency}</td>
                      <td>{schedule.repeatEvery}</td>
                      <td>{schedule.nextDate}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Help Icon */}
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem' }}>
          <button 
            className="btn btn-primary"
            style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontSize: '20px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}
            title="Help"
          >
            <i className="fas fa-question"></i>
          </button>
        </div>
      </div>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: '', type: 'success' })}
        />
      )}
    </div>
  );
};

export default CommitOrderSchedule;
