import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewAllocationSchedules = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [showInactives, setShowInactives] = useState(false);

  const [schedules] = useState([
    {
      id: 1,
      name: 'Monthly Overhead Allocation',
      nextDate: '31/12/2024',
      enter: 'Tech Onshore MEP',
      frequency: 'Monthly',
      remaining: '12',
      intercompany: 'No'
    },
    {
      id: 2,
      name: 'Quarterly Cost Distribution',
      nextDate: '31/03/2025',
      enter: 'Tech Electric & Auto',
      frequency: 'Quarterly',
      remaining: '4',
      intercompany: 'Yes'
    },
    {
      id: 3,
      name: 'Weekly Labor Allocation',
      nextDate: '15/11/2024',
      enter: 'Tech Marine Offshore',
      frequency: 'Weekly',
      remaining: '52',
      intercompany: 'No'
    },
    {
      id: 4,
      name: 'Annual Budget Allocation',
      nextDate: '31/12/2024',
      enter: 'Tech Offshore (DQ)',
      frequency: 'Yearly',
      remaining: '1',
      intercompany: 'No'
    },
    {
      id: 5,
      name: 'Bi-Weekly Expense Allocation',
      nextDate: '20/11/2024',
      enter: 'Tech Onshore MEP',
      frequency: 'Every Two Weeks',
      remaining: '26',
      intercompany: 'Yes'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = (schedule) => {
    if (setCurrentPage) {
      setCurrentPage('create-allocation-schedules');
    }
  };

  const handleView = (schedule) => {
    if (setCurrentPage) {
      setCurrentPage('view-allocation-schedule-detail');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-chart-pie" style={{ color: '#4a90e2', fontSize: '24px' }}></i>
          <h1>Allocation Schedules</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option active">List</button>
          <button className="btn-view-option">Search</button>
        </div>
      </div>

      <div className="filters-section" style={{ background: '#f8f9fa', padding: '20px', marginBottom: '0' }}>
        <div className="filter-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div className="filter-group" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <label style={{ fontWeight: '500', fontSize: '13px', color: '#666' }}>VIEW:</label>
              <select className="filter-select" style={{ padding: '6px 12px', border: '1px solid #ddd', borderRadius: '4px' }}>
                <option>Default</option>
                <option>All Schedules</option>
              </select>
            </div>
            <button className="btn-filter" style={{ padding: '6px 16px', border: '1px solid #ddd', background: 'white', borderRadius: '4px', fontSize: '13px' }}>Customize View</button>
            <button className="btn-filter-primary" onClick={() => setCurrentPage && setCurrentPage('create-allocation-schedules')} style={{ padding: '8px 20px', background: '#4a90e2', color: 'white', border: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: '500' }}>
              <i className="fas fa-plus"></i> New Allocation Schedule
            </button>
          </div>
        </div>
      </div>

      <div className="filters-bar" style={{ background: '#f8f9fa', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <button className="btn-filters-toggle" style={{ background: 'transparent', border: 'none', fontSize: '13px', fontWeight: '600', color: '#333', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <i className="fas fa-plus"></i>
            FILTERS
          </button>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              checked={showInactives}
              onChange={(e) => setShowInactives(e.target.checked)}
            />
            SHOW INACTIVES
          </label>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button style={{ padding: '4px 8px', border: '1px solid #ddd', background: 'white', borderRadius: '3px' }}>
            <i className="fas fa-download"></i>
          </button>
          <button style={{ padding: '4px 8px', border: '1px solid #ddd', background: 'white', borderRadius: '3px' }}>
            <i className="fas fa-file-pdf"></i>
          </button>
          <button style={{ padding: '4px 8px', border: '1px solid #ddd', background: 'white', borderRadius: '3px' }}>
            <i className="fas fa-print"></i>
          </button>
          <span style={{ fontSize: '12px', fontWeight: '600', marginLeft: '15px' }}>TOTAL: {schedules.length}</span>
        </div>
      </div>

      <div className="table-container" style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div className="table-wrapper" style={{ overflowX: 'auto' }}>
          <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                <th style={{ width: '40px', padding: '10px', textAlign: 'center' }}>
                  <input type="checkbox" />
                </th>
                <th style={{ width: '100px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>EDIT | VIEW</th>
                <th style={{ width: '120px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>NEXT DATE</th>
                <th style={{ width: '250px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>NAME</th>
                <th style={{ width: '200px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>ENTER</th>
                <th style={{ width: '150px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>FREQUENCY</th>
                <th style={{ width: '100px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>REMAINING</th>
                <th style={{ width: '120px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>INTERCOMPANY</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule, index) => (
                <tr key={schedule.id} style={{ borderBottom: '1px solid #e9ecef', background: index % 2 === 0 ? 'white' : '#fafbfc' }}>
                  <td style={{ padding: '12px', textAlign: 'center' }}>
                    <input type="checkbox" />
                  </td>
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
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{schedule.nextDate}</td>
                  <td style={{ padding: '12px', color: '#4a90e2', fontSize: '13px' }}>{schedule.name}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{schedule.enter}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{schedule.frequency}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{schedule.remaining}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{schedule.intercompany}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

export default ViewAllocationSchedules;
