import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewEmployees = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showInactive, setShowInactive] = useState(false);

  const [employees] = useState([
    {
      id: 1,
      employeeId: 'MEP01 001',
      name: 'JEGANATHAN SUNDARAVELU',
      phone: '',
      email: 'tom@tom.sg',
      supervisor: 'MEP057 Mahendran S/O Minisamy',
      loginAccess: 'No',
      class: '',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      department: 'MEP MARINE',
      location: 'MEP MARINE CC',
      salesRep: 'No',
      supportRep: 'No'
    },
    {
      id: 2,
      employeeId: 'MEP01 002',
      name: 'KALIYAMOORTHY PRAKASH',
      phone: '',
      email: 'tom@tom.sg',
      supervisor: 'MEP057 Mahendran S/O Minisamy',
      loginAccess: 'No',
      class: '',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      department: 'MEP MARINE',
      location: 'MEP MARINE CC',
      salesRep: 'No',
      supportRep: 'No'
    },
    {
      id: 3,
      employeeId: 'MEP01 003',
      name: 'KARUPPU UDAYAR',
      phone: '',
      email: 'tom@tom.sg',
      supervisor: 'MEP057 Mahendran S/O Minisamy',
      loginAccess: 'No',
      class: '',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      department: 'MEP MARINE',
      location: 'MEP MARINE CC',
      salesRep: 'No',
      supportRep: 'No'
    },
    {
      id: 4,
      employeeId: 'MEP01 004',
      name: 'MANICKAVELU VEERASELVAM',
      phone: '',
      email: 'tom@tom.sg',
      supervisor: 'MEP057 Mahendran S/O Minisamy',
      loginAccess: 'No',
      class: '',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      department: 'MEP MARINE',
      location: 'MEP MARINE CC',
      salesRep: 'No',
      supportRep: 'No'
    },
    {
      id: 5,
      employeeId: 'MEP01 005',
      name: 'SOORIYAMURTHY ISAYARASAN',
      phone: '',
      email: 'tom@tom.sg',
      supervisor: 'MEP057 Mahendran S/O Minisamy',
      loginAccess: 'No',
      class: '',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      department: 'MEP MARINE',
      location: 'MEP MARINE CC',
      salesRep: 'No',
      supportRep: 'No'
    },
    {
      id: 6,
      employeeId: 'MEP01 006',
      name: 'PARAMASIVAM',
      phone: '',
      email: 'tom@tom.sg',
      supervisor: 'MEP057 Mahendran S/O Minisamy',
      loginAccess: 'No',
      class: '',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      department: 'MEP MARINE',
      location: 'MEP MARINE CC',
      salesRep: 'No',
      supportRep: 'No'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (employee) => {
    if (onViewClick) {
      onViewClick(employee);
    }
  };

  const handleEdit = (employee) => {
    if (onEditClick) {
      onEditClick(employee);
    }
  };

  const handleNewEmployee = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         emp.employeeId.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-users"></i>
          <h1>Employees</h1>
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
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewEmployee}>
            <i className="fas fa-plus"></i>
            New Employee
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
              <option>All Employees</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {filteredEmployees.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '5%' }}>EDIT | VIEW</th>
              <th style={{ width: '8%' }}>ID</th>
              <th style={{ width: '15%' }}>NAME</th>
              <th style={{ width: '8%' }}>PHONE</th>
              <th style={{ width: '12%' }}>EMAIL</th>
              <th style={{ width: '12%' }}>SUPERVISOR</th>
              <th style={{ width: '5%' }}>LOGIN ACCESS</th>
              <th style={{ width: '5%' }}>CLASS</th>
              <th style={{ width: '12%' }}>SUBSIDIARY</th>
              <th style={{ width: '8%' }}>DEPARTMENT</th>
              <th style={{ width: '8%' }}>LOCATION</th>
              <th style={{ width: '5%' }}>SALES REP</th>
              <th style={{ width: '5%' }}>SUPPORT REP</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEdit(employee)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleView(employee)}
                  >
                    View
                  </button>
                </td>
                <td>{employee.employeeId}</td>
                <td>{employee.name}</td>
                <td>{employee.phone}</td>
                <td className="doc-number">{employee.email}</td>
                <td>{employee.supervisor}</td>
                <td>{employee.loginAccess}</td>
                <td>{employee.class}</td>
                <td>{employee.subsidiary}</td>
                <td>{employee.department}</td>
                <td>{employee.location}</td>
                <td>{employee.salesRep}</td>
                <td>{employee.supportRep}</td>
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

export default ViewEmployees;
