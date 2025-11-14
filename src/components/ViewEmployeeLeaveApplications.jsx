import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewEmployeeLeaveApplications = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Default');

  const [leaveApplications] = useState([
    { id: 'LRC000023', employee: 'MEP059 Muruganandam Kayalvizhi', workDays: 5, joiningDate: '1/7/2020', applyLeaveOn: '7/3/2022', applyLeaveType: 'Annual Leave Executive', leaveFrom: '14/3/2022', fromHalfDay: 'No', leaveTo: '25/3/2022', remark: '', approverRemark: '', contactDetailsAndAddress: '', attachments: '', attUpdated: 'Yes', supervisor: 'MEP045 Mayandi K Goutham Vijay', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', country: 'Singapore', finalApprovedBy: 'Praveen Chandraseka', nextApprover: '', nextCanceler: '', finalCancelledBy: '', mobileAppApprovalCheck: 'Yes', mobileAppRejectionCheck: 'No', allowDirectLeaveCancellation: 'No', amPm: 'Full Day', amPm2: 'Full Day', leaveCreatedBy: 'Praveen Chandraseka' },
    { id: 'LRC000031', employee: 'MEP037 Vinayagan Subramaniam', workDays: 5.5, joiningDate: '1/9/2017', applyLeaveOn: '29/4/2023', applyLeaveType: 'Home Leave', leaveFrom: '2/5/2023', fromHalfDay: 'No', leaveTo: '5/5/2023', remark: 'holiday', approverRemark: '', contactDetailsAndAddress: '98997781 / 86166341', attachments: '', attUpdated: 'No', supervisor: 'MEP057 Mahendran S/O Minisamy', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', country: 'Singapore', finalApprovedBy: '', nextApprover: '', nextCanceler: '', finalCancelledBy: '', mobileAppApprovalCheck: 'No', mobileAppRejectionCheck: 'No', allowDirectLeaveCancellation: 'No', amPm: 'Full Day', amPm2: 'Full Day', leaveCreatedBy: 'MEP037 Vinayagan Subramaniam' }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (application) => {
    if (onViewClick) onViewClick(application);
  };

  const handleEdit = (application) => {
    if (onEditClick) onEditClick(application);
  };

  const handleNewApplication = () => {
    if (onNewClick) onNewClick();
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-calendar-alt"></i>
          <h1>Employee Leave Application List</h1>
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
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewApplication}>New Employee Leave Application</button>
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
            <select className="form-control"><option>All Applications</option></select>
          </div>
          <div className="list-total">TOTAL: {leaveApplications.length}</div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table" style={{ fontSize: '0.85rem' }}>
          <thead>
            <tr>
              <th style={{ width: '5%' }}>EDIT | VIEW</th>
              <th style={{ width: '6%' }}>ID</th>
              <th style={{ width: '10%' }}>EMPLOYEE</th>
              <th style={{ width: '4%' }}>WORK DAYS</th>
              <th style={{ width: '6%' }}>JOINING DATE</th>
              <th style={{ width: '6%' }}>APPLY LEAVE ON</th>
              <th style={{ width: '8%' }}>APPLY LEAVE TYPE</th>
              <th style={{ width: '6%' }}>LEAVE FROM</th>
              <th style={{ width: '5%' }}>FROM HALF DAY</th>
              <th style={{ width: '6%' }}>LEAVE TO</th>
              <th style={{ width: '6%' }}>REMARK</th>
              <th style={{ width: '6%' }}>APPROVER REMARK</th>
              <th style={{ width: '8%' }}>CONTACT DETAILS AND ADDRESS</th>
              <th style={{ width: '5%' }}>ATTACHMENTS</th>
              <th style={{ width: '5%' }}>ATT-UPDATED</th>
              <th style={{ width: '10%' }}>SUPERVISOR</th>
              <th style={{ width: '10%' }}>SUBSIDIARY</th>
              <th style={{ width: '5%' }}>COUNTRY</th>
              <th style={{ width: '8%' }}>FINAL APPROVED BY</th>
              <th style={{ width: '6%' }}>NEXT APPROVER</th>
              <th style={{ width: '6%' }}>NEXT CANCELER</th>
              <th style={{ width: '8%' }}>FINAL CANCELLED BY</th>
              <th style={{ width: '7%' }}>MOBILE APP APPROVAL CHECK</th>
              <th style={{ width: '7%' }}>MOBILE APP REJECTION CHECK</th>
              <th style={{ width: '8%' }}>ALLOW DIRECT LEAVE CANCELLATION</th>
              <th style={{ width: '5%' }}>AM / PM</th>
              <th style={{ width: '5%' }}>AM / PM.</th>
              <th style={{ width: '8%' }}>LEAVE CREATED BY</th>
            </tr>
          </thead>
          <tbody>
            {leaveApplications.map((app) => (
              <tr key={app.id}>
                <td><button className="view-link" onClick={() => handleEdit(app)}>Edit</button>{' | '}<button className="view-link" onClick={() => handleView(app)}>View</button></td>
                <td>{app.id}</td>
                <td>{app.employee}</td>
                <td className="amount">{app.workDays}</td>
                <td>{app.joiningDate}</td>
                <td>{app.applyLeaveOn}</td>
                <td>{app.applyLeaveType}</td>
                <td>{app.leaveFrom}</td>
                <td>{app.fromHalfDay}</td>
                <td>{app.leaveTo}</td>
                <td>{app.remark}</td>
                <td>{app.approverRemark}</td>
                <td>{app.contactDetailsAndAddress}</td>
                <td>{app.attachments}</td>
                <td>{app.attUpdated}</td>
                <td>{app.supervisor}</td>
                <td>{app.subsidiary}</td>
                <td>{app.country}</td>
                <td>{app.finalApprovedBy}</td>
                <td>{app.nextApprover}</td>
                <td>{app.nextCanceler}</td>
                <td>{app.finalCancelledBy}</td>
                <td>{app.mobileAppApprovalCheck}</td>
                <td>{app.mobileAppRejectionCheck}</td>
                <td>{app.allowDirectLeaveCancellation}</td>
                <td>{app.amPm}</td>
                <td>{app.amPm2}</td>
                <td>{app.leaveCreatedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default ViewEmployeeLeaveApplications;
