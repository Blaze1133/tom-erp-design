import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewEmployeePFs = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');

  const [employeePFs] = useState([
    {
      id: 1,
      name: 'Nigeria PF',
      pfEmployeeComponent: 'Statutory - PF Employee',
      pfEmployerComponent: 'Statutory - PF Employer',
      pfWagesLimit: '6',
      limitPfAmountOn15000: 'No'
    },
    {
      id: 2,
      name: 'PF 12/12',
      pfEmployeeComponent: 'Statutory - PF Employee',
      pfEmployerComponent: 'Statutory - PF Employer',
      pfWagesLimit: '60000',
      limitPfAmountOn15000: 'No'
    },
    {
      id: 3,
      name: 'Provident Fund 10%',
      pfEmployeeComponent: 'Statutory - PF Employee',
      pfEmployerComponent: 'Statutory - PF Employer',
      pfWagesLimit: '60000',
      limitPfAmountOn15000: 'No'
    },
    {
      id: 4,
      name: 'Provident Fund 3%',
      pfEmployeeComponent: 'Statutory - PF Employee',
      pfEmployerComponent: 'Statutory - PF Employer',
      pfWagesLimit: '60000',
      limitPfAmountOn15000: 'No'
    },
    {
      id: 5,
      name: 'Provident Fund 5%',
      pfEmployeeComponent: 'Statutory - PF Employee',
      pfEmployerComponent: 'Statutory - PF Employer',
      pfWagesLimit: '60000',
      limitPfAmountOn15000: 'No'
    },
    {
      id: 6,
      name: 'Provident Fund 7%',
      pfEmployeeComponent: 'Statutory - PF Employee',
      pfEmployerComponent: 'Statutory - PF Employer',
      pfWagesLimit: '60000',
      limitPfAmountOn15000: 'No'
    }
  ]);

  const handleViewEmployeePF = (employeePF) => {
    if (onViewClick) {
      onViewClick(employeePF);
    }
  };

  const handleEditEmployeePF = (employeePF) => {
    if (onEditClick) {
      onEditClick(employeePF);
    }
  };

  const handleNewEmployeePF = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-piggy-bank"></i>
          <h1>Employee PF List</h1>
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
          <button className="btn btn-primary" onClick={handleNewEmployeePF}>
            <i className="fas fa-plus"></i>
            New Employee PF
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
              <option>PF Employee Component</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {employeePFs.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '15%' }}>EDIT | VIEW</th>
              <th style={{ width: '20%' }}>NAME ▲</th>
              <th style={{ width: '20%' }}>PF EMPLOYEE COMPONENT</th>
              <th style={{ width: '20%' }}>PF EMPLOYER COMPONENT</th>
              <th style={{ width: '15%' }}>PF WAGES LIMIT</th>
              <th style={{ width: '10%' }}>LIMIT PF AMOUNT ON 15000</th>
            </tr>
          </thead>
          <tbody>
            {employeePFs.map((employeePF) => (
              <tr key={employeePF.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditEmployeePF(employeePF)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleViewEmployeePF(employeePF)}
                  >
                    View
                  </button>
                </td>
                <td>{employeePF.name}</td>
                <td>{employeePF.pfEmployeeComponent}</td>
                <td>{employeePF.pfEmployerComponent}</td>
                <td>{employeePF.pfWagesLimit}</td>
                <td>{employeePF.limitPfAmountOn15000}</td>
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

export default ViewEmployeePFs;
