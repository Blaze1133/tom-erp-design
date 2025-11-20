import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewPayeeEmployees = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');
  const [searchProject, setSearchProject] = useState('');
  const [showInactives, setShowInactives] = useState(false);

  const [payeeEmployees] = useState([
    {
      id: 1,
      editView: true,
      employeeCode: 'TSV002',
      employeeName: 'Hossain Anwar',
      dateOfBirth: '5/10/1978',
      department: 'Shipyard : Megayard',
      location: 'Singapore (TSV)',
      hireDate: '14/2/2007',
      empGroup: '',
      shiftType: '8 AM To 5 PM',
      workDaysWeek: 5.5,
      offDays: 0,
      compWorkDays: 25,
      presentDays: 25,
      noPayLeave: 0,
      paidDays: 25,
      paidLeave: 0,
      ot1Hour: 0,
      ot2Hour: 0,
      cpfMaw: 102000.00,
      attanSave: true,
      leftDate: '',
      monthlyBasicPay: 1500.00,
      paySlipMessage: '',
      currentAge: 'ERROR: Invalid Expression',
      employeeType: 'Permanent',
      employeeMiddleName: '',
      employeeLastName: '',
      employeeWageType: 'MONTHLY',
      mobilePayslip: true
    },
    {
      id: 2,
      editView: true,
      employeeCode: 'TSV009',
      employeeName: 'Mamun',
      dateOfBirth: '10/6/1985',
      department: 'Shipyard : Megayard',
      location: 'Singapore (TSV)',
      hireDate: '3/6/2008',
      empGroup: '',
      shiftType: '8 AM To 5 PM',
      workDaysWeek: 5.5,
      offDays: 0,
      compWorkDays: 25,
      presentDays: 25,
      noPayLeave: 0,
      paidDays: 25,
      paidLeave: 0,
      ot1Hour: 0,
      ot2Hour: 0,
      cpfMaw: 102000.00,
      attanSave: true,
      leftDate: '',
      monthlyBasicPay: 1500.00,
      paySlipMessage: '',
      currentAge: 'ERROR: Invalid Expression',
      employeeType: 'Permanent',
      employeeMiddleName: '',
      employeeLastName: '',
      employeeWageType: 'MONTHLY',
      mobilePayslip: true
    },
    {
      id: 3,
      editView: true,
      employeeCode: 'TSV013',
      employeeName: 'Rahman Mizanur',
      dateOfBirth: '10/10/1984',
      department: 'Shipyard : Megayard',
      location: 'Singapore (TSV)',
      hireDate: '18/9/2006',
      empGroup: '',
      shiftType: '8 AM To 5 PM',
      workDaysWeek: 5.5,
      offDays: 0,
      compWorkDays: 25,
      presentDays: 25,
      noPayLeave: 0,
      paidDays: 25,
      paidLeave: 0,
      ot1Hour: 0,
      ot2Hour: 0,
      cpfMaw: 102000.00,
      attanSave: true,
      leftDate: '15/3/2023',
      monthlyBasicPay: 1700.00,
      paySlipMessage: '',
      currentAge: 'ERROR: Invalid Expression',
      employeeType: 'Permanent',
      employeeMiddleName: '',
      employeeLastName: '',
      employeeWageType: 'MONTHLY',
      mobilePayslip: true
    },
    {
      id: 4,
      editView: true,
      employeeCode: 'TSV014',
      employeeName: 'Harun Mohammad',
      dateOfBirth: '17/7/1980',
      department: 'Shipyard : Megayard',
      location: 'Singapore (TSV)',
      hireDate: '24/6/2008',
      empGroup: '',
      shiftType: '8 AM To 5 PM',
      workDaysWeek: 5.5,
      offDays: 0,
      compWorkDays: 25,
      presentDays: 25,
      noPayLeave: 0,
      paidDays: 25,
      paidLeave: 0,
      ot1Hour: 0,
      ot2Hour: 0,
      cpfMaw: 102000.00,
      attanSave: true,
      leftDate: '',
      monthlyBasicPay: 1400.00,
      paySlipMessage: '',
      currentAge: 'ERROR: Invalid Expression',
      employeeType: 'Permanent',
      employeeMiddleName: '',
      employeeLastName: '',
      employeeWageType: 'MONTHLY',
      mobilePayslip: true
    },
    {
      id: 5,
      editView: true,
      employeeCode: 'TSV016',
      employeeName: 'Hossain Mohan',
      dateOfBirth: '20/2/1983',
      department: 'Shipyard : Megayard',
      location: 'Singapore (TSV)',
      hireDate: '30/6/2007',
      empGroup: '',
      shiftType: '8 AM To 5 PM',
      workDaysWeek: 5.5,
      offDays: 0,
      compWorkDays: 25,
      presentDays: 25,
      noPayLeave: 0,
      paidDays: 25,
      paidLeave: 0,
      ot1Hour: 0,
      ot2Hour: 0,
      cpfMaw: 102000.00,
      attanSave: true,
      leftDate: '',
      monthlyBasicPay: 1500.00,
      paySlipMessage: '',
      currentAge: 'ERROR: Invalid Expression',
      employeeType: 'Permanent',
      employeeMiddleName: '',
      employeeLastName: '',
      employeeWageType: 'MONTHLY',
      mobilePayslip: true
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewEmployee = (employee) => {
    if (onViewClick) {
      onViewClick(employee);
    }
  };

  const handleEditEmployee = (employee) => {
    if (onEditClick) {
      onEditClick(employee);
    }
  };

  const handleNewEmployee = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  const filteredEmployees = payeeEmployees.filter(employee => {
    if (!showInactives && employee.leftDate) {
      return false;
    }
    return true;
  });

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-users"></i>
          <h1>Payee Employee</h1>
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
            value={searchProject}
            onChange={(e) => setSearchProject(e.target.value)}
            className="form-control"
            style={{ width: '250px' }}
          >
            <option value="">All Departments</option>
            <option value="shipyard">Shipyard : Megayard</option>
            <option value="mep">MEP</option>
            <option value="tom">TOM</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewEmployee}>
            <i className="fas fa-plus"></i>
            New Payee Employee
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
          <div className="filter-checkbox">
            <label className="checkbox-label">
              <input 
                type="checkbox" 
                checked={showInactives}
                onChange={(e) => setShowInactives(e.target.checked)}
              />
              <span className="checkmark"></span>
              Show Inactives
            </label>
          </div>
          <div className="quick-sort">
            <label>QUICK SORT</label>
            <select className="form-control">
              <option>176 — 261</option>
              <option>A — Z</option>
              <option>Date Hired</option>
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
              <th style={{ width: '8%' }}>EMPLOYEE CODE</th>
              <th style={{ width: '12%' }}>EMPLOYEE NAME</th>
              <th style={{ width: '8%' }}>DATE OF BIRTH</th>
              <th style={{ width: '12%' }}>DEPARTMENT</th>
              <th style={{ width: '10%' }}>LOCATION</th>
              <th style={{ width: '8%' }}>HIRE DATE</th>
              <th style={{ width: '8%' }}>SHIFT TYPE</th>
              <th style={{ width: '6%' }}>WORK DAYS WEEK</th>
              <th style={{ width: '5%' }}>OFF DAYS</th>
              <th style={{ width: '6%' }}>PRESENT DAYS</th>
              <th style={{ width: '8%' }}>MONTHLY BASIC PAY</th>
              <th style={{ width: '4%' }}>MOBILE PAYSLIP</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee.id} className={employee.leftDate ? 'inactive-row' : ''}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditEmployee(employee)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleViewEmployee(employee)}
                  >
                    View
                  </button>
                </td>
                <td className="doc-number">{employee.employeeCode}</td>
                <td>{employee.employeeName}</td>
                <td>{employee.dateOfBirth}</td>
                <td>{employee.department}</td>
                <td>{employee.location}</td>
                <td>{employee.hireDate}</td>
                <td>{employee.shiftType}</td>
                <td className="amount">{employee.workDaysWeek}</td>
                <td className="amount">{employee.offDays}</td>
                <td className="amount">{employee.presentDays}</td>
                <td className="amount">{employee.monthlyBasicPay.toFixed(2)}</td>
                <td className="text-center">
                  {employee.mobilePayslip ? (
                    <i className="fas fa-check" style={{ color: '#28a745' }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: '#dc3545' }}></i>
                  )}
                </td>
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

export default ViewPayeeEmployees;
