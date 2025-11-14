import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewLeaveTypes = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Default');

  const [leaveTypes] = useState([
    { id: 26, name: 'Annual Leave Executive', lastModified: '21/12/2022 10:27 am', entitlementNoYear: 14, isCarryForward: 'No', buyBackEncashment: 'No', considerWeeklyOff: 'No', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', country: 'Singapore', isCompoff: 'No', attendanceCharacter: 'E', leaveTypeTransfer: 'Yes', lapsLeavePolicyApplicable: 'No', maximumCarryForward: '', maximumEnCash: '', allowDirectLeaveCancellation: 'No', leaveGroup: '', leaveTypeDepartment: 'Admin,Finance,Human Resource,IT,Logistic,Purchase,Sales and Marketing,TOM', employmentType: '', halfDayLeaveAttendanceCharacter: 'HEL', halfDayPresentHalfDayLeaveChar: 'HPHE', canNotCombineWithOtherLeave: '', maximumApplicationCountInOneYear: '', maxNumberOfDayInOneApplication: '', maximumHalfDayApplicationInYear: '', minDaysInOneApplication: '', departureDate: '', homeLeave: '', homeLeaveReturn: '', homeLeaveCancel: '', arrivalDate: '', levyClaim: '', levyApproveAmt: '' },
    { id: 80, name: 'Annual Leave Staff', lastModified: '21/12/2022 10:29 am', entitlementNoYear: 7, isCarryForward: 'No', buyBackEncashment: 'No', considerWeeklyOff: 'No', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', country: 'Singapore', isCompoff: 'No', attendanceCharacter: 'AL', leaveTypeTransfer: 'Yes', lapsLeavePolicyApplicable: 'No', maximumCarryForward: '', maximumEnCash: '', allowDirectLeaveCancellation: 'No', leaveGroup: '', leaveTypeDepartment: 'Admin,Construction,Electrical and E&I,Facility,Finance,Human Resource,IT,Internal Transfer,Keppel Fels,Keppel Shipyard,Logistic,MEP,Megayard,O&G,Piping,Purchase,Sales and Marketing,Security,Sembawang,Shipyard,TOM', employmentType: '', halfDayLeaveAttendanceCharacter: 'HEL', halfDayPresentHalfDayLeaveChar: 'HPHE', canNotCombineWithOtherLeave: '', maximumApplicationCountInOneYear: '', maxNumberOfDayInOneApplication: '', maximumHalfDayApplicationInYear: '', minDaysInOneApplication: '', departureDate: '', homeLeave: '', homeLeaveReturn: '', homeLeaveCancel: '', arrivalDate: '', levyClaim: '', levyApproveAmt: '' },
    { id: 36, name: 'Annual Leave Workers', lastModified: '21/12/2022 10:30 am', entitlementNoYear: 7, isCarryForward: 'No', buyBackEncashment: 'No', considerWeeklyOff: 'No', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', country: 'Singapore', isCompoff: 'No', attendanceCharacter: 'E', leaveTypeTransfer: 'Yes', lapsLeavePolicyApplicable: 'No', maximumCarryForward: '', maximumEnCash: '', allowDirectLeaveCancellation: 'No', leaveGroup: '', leaveTypeDepartment: '', employmentType: '', halfDayLeaveAttendanceCharacter: 'HEL', halfDayPresentHalfDayLeaveChar: 'HPHE', canNotCombineWithOtherLeave: '', maximumApplicationCountInOneYear: '', maxNumberOfDayInOneApplication: '', maximumHalfDayApplicationInYear: '', minDaysInOneApplication: '', departureDate: '', homeLeave: '', homeLeaveReturn: '', homeLeaveCancel: '', arrivalDate: '', levyClaim: '', levyApproveAmt: '' },
    { id: 23, name: 'Birthday Leave', lastModified: '21/12/2022 10:30 am', entitlementNoYear: 1, isCarryForward: 'No', buyBackEncashment: 'No', considerWeeklyOff: 'No', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', country: 'Singapore', isCompoff: 'No', attendanceCharacter: 'BDL', leaveTypeTransfer: 'Yes', lapsLeavePolicyApplicable: 'No', maximumCarryForward: '', maximumEnCash: '', allowDirectLeaveCancellation: 'No', leaveGroup: '', leaveTypeDepartment: '', employmentType: '', halfDayLeaveAttendanceCharacter: '', halfDayPresentHalfDayLeaveChar: '', canNotCombineWithOtherLeave: '', maximumApplicationCountInOneYear: '', maxNumberOfDayInOneApplication: '', maximumHalfDayApplicationInYear: '', minDaysInOneApplication: '', departureDate: '', homeLeave: '', homeLeaveReturn: '', homeLeaveCancel: '', arrivalDate: '', levyClaim: '', levyApproveAmt: '' },
    { id: 66, name: 'Childcare Leave', lastModified: '21/12/2022 10:30 am', entitlementNoYear: 6, isCarryForward: 'No', buyBackEncashment: 'No', considerWeeklyOff: 'No', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', country: 'Singapore', isCompoff: 'No', attendanceCharacter: 'CC', leaveTypeTransfer: 'Yes', lapsLeavePolicyApplicable: 'No', maximumCarryForward: '', maximumEnCash: '', allowDirectLeaveCancellation: 'No', leaveGroup: '', leaveTypeDepartment: '', employmentType: '', halfDayLeaveAttendanceCharacter: 'HCC', halfDayPresentHalfDayLeaveChar: 'HPHCL', canNotCombineWithOtherLeave: '', maximumApplicationCountInOneYear: '', maxNumberOfDayInOneApplication: '', maximumHalfDayApplicationInYear: '', minDaysInOneApplication: '', departureDate: '', homeLeave: '', homeLeaveReturn: '', homeLeaveCancel: '', arrivalDate: '', levyClaim: '', levyApproveAmt: '' },
    { id: 27, name: 'Comp off', lastModified: '24/1/2023 11:30 am', entitlementNoYear: 0, isCarryForward: 'No', buyBackEncashment: 'Yes', considerWeeklyOff: 'No', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', isCompoff: 'Yes', attendanceCharacter: 'O', leaveTypeTransfer: 'Yes', lapsLeavePolicyApplicable: 'No', maximumCarryForward: '', maximumEnCash: '', allowDirectLeaveCancellation: '', leaveGroup: '', leaveTypeDepartment: '', employmentType: '', halfDayLeaveAttendanceCharacter: '', halfDayPresentHalfDayLeaveChar: '', canNotCombineWithOtherLeave: '', maximumApplicationCountInOneYear: '', maxNumberOfDayInOneApplication: '', maximumHalfDayApplicationInYear: '', minDaysInOneApplication: '', departureDate: '', homeLeave: '', homeLeaveReturn: '', homeLeaveCancel: '', arrivalDate: '', levyClaim: '', levyApproveAmt: '' }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (leaveType) => {
    if (onViewClick) {
      onViewClick(leaveType);
    }
  };

  const handleEdit = (leaveType) => {
    if (onEditClick) {
      onEditClick(leaveType);
    }
  };

  const handleNewLeaveType = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-calendar-check"></i>
          <h1>Leave Type List</h1>
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
            style={{ width: '200px' }}
          >
            <option value="Default">Default</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewLeaveType}>
            New Leave Type
          </button>
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button className="btn-icon" title="Export">
            <i className="fas fa-file-export"></i>
          </button>
          <button className="btn-icon" title="Excel">
            <i className="fas fa-file-excel"></i>
          </button>
          <button className="btn-icon" title="PDF">
            <i className="fas fa-file-pdf"></i>
          </button>
          <button className="btn-icon" title="Print">
            <i className="fas fa-print"></i>
          </button>
          <label className="checkbox-label">
            <input type="checkbox" />
            SHOW INACTIVES
          </label>
          <button className="btn-icon" title="Edit">
            <span>EDIT</span>
          </button>
          <button className="btn-icon" title="Delete">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="filter-right-group">
          <div className="quick-sort">
            <label>QUICK SORT</label>
            <select className="form-control">
              <option>All Leave Types</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {leaveTypes.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table" style={{ fontSize: '0.85rem' }}>
          <thead>
            <tr>
              <th style={{ width: '5%' }}>EDIT | VIEW</th>
              <th style={{ width: '8%' }}>NAME</th>
              <th style={{ width: '3%' }}>ID</th>
              <th style={{ width: '8%' }}>LAST MODIFIED</th>
              <th style={{ width: '5%' }}>ENTITLEMENT NO/YEAR</th>
              <th style={{ width: '5%' }}>IS CARRY FORWARD</th>
              <th style={{ width: '6%' }}>BUY BACK/ENCASHMENT</th>
              <th style={{ width: '7%' }}>CONSIDER WEEKLY OFF IN LEAVE DAYS</th>
              <th style={{ width: '12%' }}>SUBSIDIARY</th>
              <th style={{ width: '5%' }}>COUNTRY</th>
              <th style={{ width: '5%' }}>IS COMPOFF</th>
              <th style={{ width: '6%' }}>ATTENDANCE CHARACTER</th>
              <th style={{ width: '6%' }}>LEAVE TYPE TRANSFER</th>
              <th style={{ width: '7%' }}>LAPS LEAVE POLICY APPLICABLE</th>
              <th style={{ width: '6%' }}>MAXIMUM CARRY FORWARD</th>
              <th style={{ width: '6%' }}>MAXIMUM EN-CASH</th>
              <th style={{ width: '8%' }}>ALLOW DIRECT LEAVE CANCELLATION</th>
              <th style={{ width: '5%' }}>LEAVE GROUP</th>
              <th style={{ width: '10%' }}>LEAVE TYPE DEPARTMENT</th>
              <th style={{ width: '7%' }}>EMPLOYMENT TYPE</th>
              <th style={{ width: '10%' }}>HALF DAY LEAVE ATTENDANCE CHARACTER</th>
              <th style={{ width: '10%' }}>HALF DAY PRESENT HALF DAY LEAVE CHAR</th>
            </tr>
          </thead>
          <tbody>
            {leaveTypes.map((leaveType) => (
              <tr key={leaveType.id}>
                <td>
                  <button className="view-link" onClick={() => handleEdit(leaveType)}>Edit</button>
                  {' | '}
                  <button className="view-link" onClick={() => handleView(leaveType)}>View</button>
                </td>
                <td>{leaveType.name}</td>
                <td>{leaveType.id}</td>
                <td>{leaveType.lastModified}</td>
                <td className="amount">{leaveType.entitlementNoYear}</td>
                <td>{leaveType.isCarryForward}</td>
                <td>{leaveType.buyBackEncashment}</td>
                <td>{leaveType.considerWeeklyOff}</td>
                <td>{leaveType.subsidiary}</td>
                <td>{leaveType.country}</td>
                <td>{leaveType.isCompoff}</td>
                <td>{leaveType.attendanceCharacter}</td>
                <td>{leaveType.leaveTypeTransfer}</td>
                <td>{leaveType.lapsLeavePolicyApplicable}</td>
                <td>{leaveType.maximumCarryForward}</td>
                <td>{leaveType.maximumEnCash}</td>
                <td>{leaveType.allowDirectLeaveCancellation}</td>
                <td>{leaveType.leaveGroup}</td>
                <td>{leaveType.leaveTypeDepartment}</td>
                <td>{leaveType.employmentType}</td>
                <td>{leaveType.halfDayLeaveAttendanceCharacter}</td>
                <td>{leaveType.halfDayPresentHalfDayLeaveChar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default ViewLeaveTypes;
