import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewPayGroups = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');

  const [payGroups] = useState([
    {
      id: 1,
      name: 'EP & Local (MEP)',
      calendarDaysCalculation: 'Yes',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      country: 'Singapore',
      payrollPeriod: 'Monthly'
    },
    {
      id: 2,
      name: 'EP & Local (TDQ)',
      calendarDaysCalculation: 'Yes',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DQ) Pte Ltd',
      country: 'Singapore',
      payrollPeriod: 'Monthly'
    },
    {
      id: 3,
      name: 'EP & Local (TEA)',
      calendarDaysCalculation: 'Yes',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd',
      country: 'Singapore',
      payrollPeriod: 'Monthly'
    },
    {
      id: 4,
      name: 'EP & Local (TMO)',
      calendarDaysCalculation: 'Yes',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd',
      country: 'Singapore',
      payrollPeriod: 'Monthly'
    },
    {
      id: 5,
      name: 'EP & Local (TSV)',
      calendarDaysCalculation: 'Yes',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (SV) Pte Ltd',
      country: 'Singapore',
      payrollPeriod: 'Monthly'
    },
    {
      id: 6,
      name: 'Hourly (MEP)',
      calendarDaysCalculation: 'No',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      country: 'Singapore',
      payrollPeriod: ''
    },
    {
      id: 7,
      name: 'Hourly (TDQ)',
      calendarDaysCalculation: 'No',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DQ) Pte Ltd',
      country: 'Singapore',
      payrollPeriod: ''
    },
    {
      id: 8,
      name: 'Hourly (TEA)',
      calendarDaysCalculation: 'No',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd',
      country: 'Singapore',
      payrollPeriod: ''
    },
    {
      id: 9,
      name: 'Hourly (TMO)',
      calendarDaysCalculation: 'No',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd',
      country: 'Singapore',
      payrollPeriod: ''
    },
    {
      id: 10,
      name: 'Hourly (TSV)',
      calendarDaysCalculation: 'No',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (SV) Pte Ltd',
      country: 'Singapore',
      payrollPeriod: ''
    },
    {
      id: 11,
      name: 'NVT GROUP',
      calendarDaysCalculation: 'No',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd',
      country: 'Singapore',
      payrollPeriod: 'Monthly'
    },
    {
      id: 12,
      name: 'TestPaygroup',
      calendarDaysCalculation: 'No',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      country: 'Singapore',
      payrollPeriod: 'Monthly'
    }
  ]);

  const handleViewPayGroup = (payGroup) => {
    if (onViewClick) {
      onViewClick(payGroup);
    }
  };

  const handleEditPayGroup = (payGroup) => {
    if (onEditClick) {
      onEditClick(payGroup);
    }
  };

  const handleNewPayGroup = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-users"></i>
          <h1>Pay Group List</h1>
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
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <button className="btn-customize">Customize View</button>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewPayGroup}>
            <i className="fas fa-plus"></i>
            New Pay Group
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
              <option>Name</option>
              <option>Country</option>
              <option>Payroll Period</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {payGroups.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '15%' }}>EDIT | VIEW</th>
              <th style={{ width: '20%' }}>NAME ▲</th>
              <th style={{ width: '15%' }}>CALENDAR DAYS CALCULATION</th>
              <th style={{ width: '35%' }}>SUBSIDIARY</th>
              <th style={{ width: '10%' }}>COUNTRY</th>
              <th style={{ width: '15%' }}>PAYROLL PERIOD</th>
            </tr>
          </thead>
          <tbody>
            {payGroups.map((payGroup) => (
              <tr key={payGroup.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditPayGroup(payGroup)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleViewPayGroup(payGroup)}
                  >
                    View
                  </button>
                </td>
                <td>{payGroup.name}</td>
                <td>{payGroup.calendarDaysCalculation}</td>
                <td>{payGroup.subsidiary}</td>
                <td>{payGroup.country}</td>
                <td>{payGroup.payrollPeriod}</td>
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

export default ViewPayGroups;
