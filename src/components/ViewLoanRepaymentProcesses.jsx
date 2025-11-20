import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewLoanRepaymentProcesses = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');
  const [searchProject, setSearchProject] = useState('');

  // Sample data based on the uploaded image
  const [loanProcesses] = useState([
    {
      id: 1,
      month: 'January',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      workCalendar: '2022 MEP',
      year: 2022,
      status: 'Transfer to Payroll'
    },
    {
      id: 2,
      month: 'May',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      workCalendar: '2022 MEP',
      year: 2022,
      status: 'Transfer to Payroll'
    },
    {
      id: 3,
      month: 'June',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      workCalendar: '2022 MEP',
      year: 2022,
      status: 'Transfer to Payroll'
    },
    {
      id: 4,
      month: 'July',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      workCalendar: '2022 MEP',
      year: 2022,
      status: 'Transfer to Payroll'
    },
    {
      id: 5,
      month: 'April',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      workCalendar: '2022 MEP',
      year: 2022,
      status: 'Transfer to Payroll'
    },
    {
      id: 6,
      month: 'November',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      workCalendar: '2022 MEP',
      year: 2022,
      status: 'Transfer to Payroll'
    },
    {
      id: 7,
      month: 'December',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      workCalendar: '2022 MEP',
      year: 2022,
      status: 'Transfer to Payroll'
    },
    {
      id: 8,
      month: 'October',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      workCalendar: '2022 MEP',
      year: 2022,
      status: 'Transfer to Payroll'
    },
    {
      id: 9,
      month: 'September',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      workCalendar: '2022 MEP',
      year: 2022,
      status: 'Transfer to Payroll'
    },
    {
      id: 10,
      month: 'May',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      workCalendar: '2022 MEP',
      year: 2022,
      status: 'Transfer to Payroll'
    },
    {
      id: 11,
      month: 'February',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      workCalendar: '2022 MEP',
      year: 2022,
      status: 'Transfer to Payroll'
    },
    {
      id: 12,
      month: 'June',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      workCalendar: '2022 MEP',
      year: 2022,
      status: 'Transfer to Payroll'
    }
  ]);

  const filteredProcesses = loanProcesses.filter(process => {
    if (viewFilter === 'all') return true;
    return process.status === viewFilter;
  });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (process) => {
    if (onViewClick) {
      onViewClick(process);
    }
  };

  const handleEdit = (process) => {
    if (onEditClick) {
      onEditClick(process);
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-money-check-alt"></i>
          <h1>Loan Repayment Process List</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <button className="btn-view-option">Edit View</button>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={onNewClick}>
            <i className="fas fa-plus"></i>
            New Loan Repayment Process
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
              <option>MONTH</option>
              <option>SUBSIDIARY</option>
              <option>STATUS</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {filteredProcesses.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '8%' }}>EDIT | VIEW</th>
              <th style={{ width: '10%' }}>MONTH</th>
              <th style={{ width: '35%' }}>SUBSIDIARY ▲</th>
              <th style={{ width: '15%' }}>WORK CALENDAR</th>
              <th style={{ width: '8%' }}>YEAR</th>
              <th style={{ width: '24%' }}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {filteredProcesses.map((process) => (
              <tr key={process.id}>
                <td>
                  <span 
                    onClick={() => handleEdit(process)}
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
                    onClick={() => handleView(process)}
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
                <td>{process.month}</td>
                <td>{process.subsidiary}</td>
                <td>{process.workCalendar}</td>
                <td>{process.year}</td>
                <td>{process.status}</td>
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

export default ViewLoanRepaymentProcesses;
