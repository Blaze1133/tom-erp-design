import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewStatisticalSchedules = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [schedules] = useState([
    {
      id: 1,
      scheduleName: 'Monthly Employee Count',
      statisticalAccount: 'Employee Headcount',
      savedSearch: 'Active Employees Search',
      frequency: 'Monthly',
      nextScheduledDateTime: '01/12/2024 00:00'
    },
    {
      id: 2,
      scheduleName: 'Quarterly Revenue Analysis',
      statisticalAccount: 'Revenue Statistics',
      savedSearch: 'Department OKR\'s completed Status',
      frequency: 'Quarterly',
      nextScheduledDateTime: '31/12/2024 23:59'
    },
    {
      id: 3,
      scheduleName: 'Weekly Project Hours',
      statisticalAccount: 'Project Time Tracking',
      savedSearch: 'Employee Leave Entitlement',
      frequency: 'Weekly',
      nextScheduledDateTime: '11/11/2024 00:00'
    },
    {
      id: 4,
      scheduleName: 'Daily Shipyard Utilization',
      statisticalAccount: 'Shipyard Capacity',
      savedSearch: 'Pay_Run_Process_Pay Dedution Search',
      frequency: 'Daily',
      nextScheduledDateTime: '08/11/2024 06:00'
    },
    {
      id: 5,
      scheduleName: 'Annual Budget Tracking',
      statisticalAccount: 'Budget Statistics',
      savedSearch: '--Org Manpower Budget Open Status',
      frequency: 'Yearly',
      nextScheduledDateTime: '01/01/2025 00:00'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = (schedule) => {
    if (setCurrentPage) {
      setCurrentPage('create-statistical-schedule');
    }
  };

  const handleView = (schedule) => {
    if (setCurrentPage) {
      setCurrentPage('view-statistical-schedule-detail');
    }
  };

  const handleNew = () => {
    if (setCurrentPage) {
      setCurrentPage('create-statistical-schedule');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-chart-bar" style={{ color: '#4a90e2', fontSize: '24px' }}></i>
          <h1>Statistical Schedules</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option active">List</button>
          <button className="btn-view-option">Search</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>VIEW:</label>
          <select className="form-control">
            <option>All Schedules</option>
            <option>Active</option>
          </select>
        </div>
        <button className="btn-new-transaction" onClick={handleNew}>
          <i className="fas fa-plus"></i> New Schedule
        </button>
      </div>

      <div className="table-container" style={{ background: 'white', overflow: 'hidden' }}>
        {schedules.length > 0 ? (
          <div className="table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                  <th style={{ width: '100px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>EDIT | VIEW</th>
                  <th style={{ width: '80px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>ID</th>
                  <th style={{ width: '250px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>SCHEDULE NAME</th>
                  <th style={{ width: '200px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>STATISTICAL ACCOUNT</th>
                  <th style={{ width: '250px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>SAVED SEARCH</th>
                  <th style={{ width: '120px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>FREQUENCY</th>
                  <th style={{ width: '180px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>NEXT SCHEDULED DATE AND TIME</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((schedule, index) => (
                  <tr key={schedule.id} style={{ borderBottom: '1px solid #e9ecef', background: index % 2 === 0 ? 'white' : '#fafbfc' }}>
                    <td style={{ padding: '12px', whiteSpace: 'nowrap' }}>
                      <button 
                        onClick={() => handleEdit(schedule)}
                        style={{ color: '#4a90e2', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', textDecoration: 'underline', padding: '0', marginRight: '4px' }}
                      >
                        Edit
                      </button>
                      <span style={{ color: '#999', margin: '0 4px' }}>|</span>
                      <button 
                        onClick={() => handleView(schedule)}
                        style={{ color: '#4a90e2', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', textDecoration: 'underline', padding: '0', marginLeft: '4px' }}
                      >
                        View
                      </button>
                    </td>
                    <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{schedule.id}</td>
                    <td style={{ padding: '12px', fontSize: '13px', color: '#4a90e2' }}>{schedule.scheduleName}</td>
                    <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{schedule.statisticalAccount}</td>
                    <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{schedule.savedSearch}</td>
                    <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{schedule.frequency}</td>
                    <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{schedule.nextScheduledDateTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
            No records to show.
          </div>
        )}
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

export default ViewStatisticalSchedules;
