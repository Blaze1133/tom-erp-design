import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewShiftMasters = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Default');

  const [shifts] = useState([
    { id: 1, name: '1 PM To 10 PM', shiftCategory: '', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', markAttendance: '', shiftType: 'Night Shift', searchInBefore: 30, searchInAfter: 29, searchOutBefore: 420, searchOutAfter: 900, lunchHours: 60, gracePeriod: '', gracePeriodOut: '', considerOT: '', halfDaySchedule: '5:00 pm', excludeLunch: 'Yes', dinnerBreak: '5:00 pm', sameDayCheckout: 'Yes' },
    { id: 2, name: '10 Am To 7 Pm', shiftCategory: 'Shift 1', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', markAttendance: '', shiftType: 'Night Shift', searchInBefore: 30, searchInAfter: 29, searchOutBefore: 420, searchOutAfter: 900, lunchHours: 60, gracePeriod: '', gracePeriodOut: '', considerOT: '', halfDaySchedule: '2:00 pm', excludeLunch: 'Yes', dinnerBreak: '2:00 pm', sameDayCheckout: 'Yes' },
    { id: 3, name: '10 PM To 7 AM', shiftCategory: '', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', markAttendance: '', shiftType: 'Night Shift', searchInBefore: 30, searchInAfter: 29, searchOutBefore: 420, searchOutAfter: 900, lunchHours: 60, gracePeriod: '', gracePeriodOut: '', considerOT: '', halfDaySchedule: '2:00 am', excludeLunch: 'Yes', dinnerBreak: '2:00 am', sameDayCheckout: 'No' },
    { id: 4, name: '11 AM To 8PM', shiftCategory: '', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', markAttendance: '', shiftType: 'Night Shift', searchInBefore: 30, searchInAfter: 29, searchOutBefore: 420, searchOutAfter: 900, lunchHours: 60, gracePeriod: '', gracePeriodOut: '', considerOT: '', halfDaySchedule: '3:00 pm', excludeLunch: 'Yes', dinnerBreak: '3:00 pm', sameDayCheckout: 'Yes' },
    { id: 5, name: '12 PM To 9 PM', shiftCategory: '', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', markAttendance: '', shiftType: 'Night Shift', searchInBefore: 30, searchInAfter: 29, searchOutBefore: 420, searchOutAfter: 900, lunchHours: 60, gracePeriod: '', gracePeriodOut: '', considerOT: '', halfDaySchedule: '4:00 pm', excludeLunch: 'Yes', dinnerBreak: '4:00 pm', sameDayCheckout: 'Yes' },
    { id: 6, name: '2 PM To 11 PM', shiftCategory: '', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', markAttendance: '', shiftType: 'Night Shift', searchInBefore: 30, searchInAfter: 29, searchOutBefore: 420, searchOutAfter: 900, lunchHours: 60, gracePeriod: '', gracePeriodOut: '', considerOT: '', halfDaySchedule: '6:00 pm', excludeLunch: 'Yes', dinnerBreak: '6:00 pm', sameDayCheckout: 'Yes' },
    { id: 7, name: '3 PM To 12 AM', shiftCategory: '', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', markAttendance: '', shiftType: 'Night Shift', searchInBefore: 30, searchInAfter: 29, searchOutBefore: 420, searchOutAfter: 900, lunchHours: 60, gracePeriod: '', gracePeriodOut: '', considerOT: '', halfDaySchedule: '7:00 pm', excludeLunch: 'Yes', dinnerBreak: '7:00 pm', sameDayCheckout: 'No' },
    { id: 8, name: '4 PM To 1 AM', shiftCategory: '', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', markAttendance: '', shiftType: 'Night Shift', searchInBefore: 30, searchInAfter: 29, searchOutBefore: 420, searchOutAfter: 900, lunchHours: 60, gracePeriod: '', gracePeriodOut: '', considerOT: '', halfDaySchedule: '8:00 pm', excludeLunch: 'Yes', dinnerBreak: '8:00 pm', sameDayCheckout: 'No' },
    { id: 9, name: '5 Am To 2 Pm', shiftCategory: 'Shift 1', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', markAttendance: '', shiftType: 'Night Shift', searchInBefore: 30, searchInAfter: 29, searchOutBefore: 420, searchOutAfter: 900, lunchHours: 60, gracePeriod: '', gracePeriodOut: '', considerOT: '', halfDaySchedule: '9:00 am', excludeLunch: 'Yes', dinnerBreak: '9:00 am', sameDayCheckout: 'Yes' },
    { id: 10, name: '5 days Shift (Monday-Friday)', shiftCategory: 'Shift 1', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', markAttendance: '', shiftType: 'Day Shift', searchInBefore: 30, searchInAfter: 29, searchOutBefore: 420, searchOutAfter: 900, lunchHours: 60, gracePeriod: '', gracePeriodOut: '', considerOT: '', halfDaySchedule: '1:00 pm', excludeLunch: 'Yes', dinnerBreak: '1:00 am', sameDayCheckout: 'No' },
    { id: 11, name: '5 PM To 2 AM', shiftCategory: '', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', markAttendance: '', shiftType: 'Night Shift', searchInBefore: 30, searchInAfter: 29, searchOutBefore: 420, searchOutAfter: 900, lunchHours: 60, gracePeriod: '', gracePeriodOut: '', considerOT: '', halfDaySchedule: '9:00 pm', excludeLunch: 'Yes', dinnerBreak: '9:00 pm', sameDayCheckout: 'No' },
    { id: 12, name: '6 AM To 3 PM', shiftCategory: 'Shift 1', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', markAttendance: '', shiftType: 'Night Shift', searchInBefore: 30, searchInAfter: 29, searchOutBefore: 420, searchOutAfter: 900, lunchHours: 60, gracePeriod: '', gracePeriodOut: '', considerOT: '', halfDaySchedule: '10:00 am', excludeLunch: 'Yes', dinnerBreak: '10:00 am', sameDayCheckout: 'Yes' },
    { id: 13, name: '6 PM To 3 AM', shiftCategory: '', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', markAttendance: '', shiftType: 'Night Shift', searchInBefore: 30, searchInAfter: 29, searchOutBefore: 420, searchOutAfter: 900, lunchHours: 60, gracePeriod: '', gracePeriodOut: '', considerOT: '', halfDaySchedule: '10:00 pm', excludeLunch: 'Yes', dinnerBreak: '10:00 pm', sameDayCheckout: 'No' },
    { id: 14, name: '7 AM To 4 PM', shiftCategory: 'Shift 1', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', markAttendance: '', shiftType: 'Night Shift', searchInBefore: 30, searchInAfter: 29, searchOutBefore: 420, searchOutAfter: 900, lunchHours: 60, gracePeriod: '', gracePeriodOut: '', considerOT: '', halfDaySchedule: '11:00 am', excludeLunch: 'Yes', dinnerBreak: '11:00 am', sameDayCheckout: 'Yes' },
    { id: 15, name: '7 PM To 4 AM', shiftCategory: '', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', markAttendance: '', shiftType: 'Night Shift', searchInBefore: 30, searchInAfter: 29, searchOutBefore: 420, searchOutAfter: 900, lunchHours: 60, gracePeriod: '', gracePeriodOut: '', considerOT: '', halfDaySchedule: '11:00 pm', excludeLunch: 'Yes', dinnerBreak: '11:00 pm', sameDayCheckout: 'No' },
    { id: 16, name: '8 AM To 5 PM', shiftCategory: 'Shift 1', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', markAttendance: '', shiftType: 'Night Shift', searchInBefore: 30, searchInAfter: 29, searchOutBefore: 420, searchOutAfter: 900, lunchHours: 60, gracePeriod: '', gracePeriodOut: '', considerOT: '', halfDaySchedule: '12:00 pm', excludeLunch: 'Yes', dinnerBreak: '12:00 pm', sameDayCheckout: 'Yes' },
    { id: 17, name: '8 Pm To 5 AM', shiftCategory: '', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', markAttendance: '', shiftType: 'Night Shift', searchInBefore: 30, searchInAfter: 29, searchOutBefore: 420, searchOutAfter: 900, lunchHours: 60, gracePeriod: '', gracePeriodOut: '', considerOT: '', halfDaySchedule: '12:00 am', excludeLunch: 'Yes', dinnerBreak: '12:00 am', sameDayCheckout: 'No' },
    { id: 18, name: '8AM to 5PM 5Days', shiftCategory: 'Shift 1', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', markAttendance: '', shiftType: 'Day Shift', searchInBefore: '', searchInAfter: '', searchOutBefore: '', searchOutAfter: '', lunchHours: 60, gracePeriod: '', gracePeriodOut: '', considerOT: '', halfDaySchedule: '', excludeLunch: 'Yes', dinnerBreak: '', sameDayCheckout: 'Yes' },
    { id: 19, name: '9 AM To 6 PM', shiftCategory: '', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', markAttendance: '', shiftType: 'Night Shift', searchInBefore: 30, searchInAfter: 29, searchOutBefore: 420, searchOutAfter: 900, lunchHours: 60, gracePeriod: '', gracePeriodOut: '', considerOT: '', halfDaySchedule: '1:00 pm', excludeLunch: 'Yes', dinnerBreak: '1:00 pm', sameDayCheckout: 'Yes' },
    { id: 20, name: '9 Pm To 6 AM', shiftCategory: '', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', country: 'Singapore', markAttendance: '', shiftType: 'Night Shift', searchInBefore: 30, searchInAfter: 29, searchOutBefore: 420, searchOutAfter: 900, lunchHours: 60, gracePeriod: '', gracePeriodOut: '', considerOT: '', halfDaySchedule: '1:00 am', excludeLunch: 'Yes', dinnerBreak: '1:00 am', sameDayCheckout: 'No' }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (shift) => {
    if (onViewClick) {
      onViewClick(shift);
    }
  };

  const handleEdit = (shift) => {
    if (onEditClick) {
      onEditClick(shift);
    }
  };

  const handleNewShift = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-clock"></i>
          <h1>Shift Master List</h1>
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
          <button className="btn btn-secondary" style={{ marginLeft: '1rem' }}>Customize View</button>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewShift}>
            New Shift Master
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
          <div className="list-total">
            TOTAL: {shifts.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '5%' }}>EDIT | VIEW</th>
              <th style={{ width: '10%' }}>NAME ▲</th>
              <th style={{ width: '8%' }}>SHIFT CATEGORY</th>
              <th style={{ width: '15%' }}>SUBSIDIARY</th>
              <th style={{ width: '8%' }}>COUNTRY</th>
              <th style={{ width: '8%' }}>MARK ATTENDANCE STATUS FOR WEEKLY OFF</th>
              <th style={{ width: '8%' }}>SHIFT TYPE</th>
              <th style={{ width: '5%' }}>SEARCH PERIOD FOR IN PUNCH BEFORE SHIFT TIME</th>
              <th style={{ width: '5%' }}>SEARCH PERIOD FOR IN PUNCH AFTER SHIFT TIME</th>
              <th style={{ width: '5%' }}>SEARCH PERIOD FOR OUT PUNCH BEFORE SHIFT TIME</th>
              <th style={{ width: '5%' }}>SEARCH PERIOD FOR OUT PUNCH AFTER SHIFT TIME</th>
              <th style={{ width: '5%' }}>LUNCH HOURS (MIN)</th>
              <th style={{ width: '5%' }}>GRACE PERIOD</th>
              <th style={{ width: '5%' }}>GRACE PERIOD OUT (MIN)</th>
              <th style={{ width: '5%' }}>CONSIDER FOR OT AFTER (MIN)</th>
              <th style={{ width: '8%' }}>HALF DAY SCHEDULE IN OUT</th>
              <th style={{ width: '5%' }}>EXCLUDE LUNCH</th>
              <th style={{ width: '8%' }}>DINNER BREAK</th>
              <th style={{ width: '5%' }}>SAME DAY CHECK OUT ?</th>
            </tr>
          </thead>
          <tbody>
            {shifts.map((shift) => (
              <tr key={shift.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEdit(shift)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleView(shift)}
                  >
                    View
                  </button>
                </td>
                <td>{shift.name}</td>
                <td>{shift.shiftCategory}</td>
                <td>{shift.subsidiary}</td>
                <td>{shift.country}</td>
                <td>{shift.markAttendance}</td>
                <td>{shift.shiftType}</td>
                <td className="amount">{shift.searchInBefore}</td>
                <td className="amount">{shift.searchInAfter}</td>
                <td className="amount">{shift.searchOutBefore}</td>
                <td className="amount">{shift.searchOutAfter}</td>
                <td className="amount">{shift.lunchHours}</td>
                <td>{shift.gracePeriod}</td>
                <td>{shift.gracePeriodOut}</td>
                <td>{shift.considerOT}</td>
                <td>{shift.halfDaySchedule}</td>
                <td>{shift.excludeLunch}</td>
                <td>{shift.dinnerBreak}</td>
                <td>{shift.sameDayCheckout}</td>
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

export default ViewShiftMasters;
