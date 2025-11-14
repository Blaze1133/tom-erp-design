import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewEmployeeLeaveEnrollments = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [enrollments] = useState([
    { id: 1, employeeName: 'TMO001 Al Amin', leaveCalendar: 'TMO 2024', department: 'Shipyard : Keppel Shipyard', hireDate: '13/8/2011', status: 'Confirmed Employment', gender: 'Male', yearOfService: '14.27', year: '2024', memo: '' },
    { id: 2, employeeName: 'TMO002 Sankarsha Awal', leaveCalendar: 'TMO 2024', department: 'Shipyard : Keppel Shipyard', hireDate: '13/8/2011', status: 'Confirmed Employment', gender: 'Male', yearOfService: '14.27', year: '2024', memo: '' }
  ]);

  const handleView = (enrollment) => {
    if (onViewClick) onViewClick(enrollment);
  };

  const handleEdit = (enrollment) => {
    if (onEditClick) onEditClick(enrollment);
  };

  const handleNew = () => {
    if (onNewClick) onNewClick();
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-user-check"></i>
          <h1>Employee Leave Enrollment List</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <button className="btn btn-secondary">Edit View</button>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNew}>New Employee Leave Enrollment</button>
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
            <select className="form-control"><option>All Enrollments</option></select>
          </div>
          <div className="list-total">TOTAL: {enrollments.length}</div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '8%' }}>EDIT | VIEW</th>
              <th style={{ width: '15%' }}>EMPLOYEE NAME</th>
              <th style={{ width: '10%' }}>LEAVE CALENDAR</th>
              <th style={{ width: '15%' }}>DEPARTMENT</th>
              <th style={{ width: '8%' }}>HIRE DATE</th>
              <th style={{ width: '12%' }}>STATUS</th>
              <th style={{ width: '6%' }}>GENDER</th>
              <th style={{ width: '8%' }}>YEAR OF SERVICE</th>
              <th style={{ width: '6%' }}>YEAR</th>
              <th style={{ width: '12%' }}>MEMO</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => (
              <tr key={enrollment.id}>
                <td><button className="view-link" onClick={() => handleEdit(enrollment)}>Edit</button>{' | '}<button className="view-link" onClick={() => handleView(enrollment)}>View</button></td>
                <td>{enrollment.employeeName}</td>
                <td>{enrollment.leaveCalendar}</td>
                <td>{enrollment.department}</td>
                <td>{enrollment.hireDate}</td>
                <td>{enrollment.status}</td>
                <td>{enrollment.gender}</td>
                <td>{enrollment.yearOfService}</td>
                <td>{enrollment.year}</td>
                <td>{enrollment.memo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default ViewEmployeeLeaveEnrollments;
