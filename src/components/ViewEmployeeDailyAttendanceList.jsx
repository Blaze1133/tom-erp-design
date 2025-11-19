import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewEmployeeDailyAttendanceList = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [showInactives, setShowInactives] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(50);

  const [attendanceRecords] = useState([
    {
      id: 51101,
      employeeName: 'TMO008 Natarajan Muruganandham',
      biometricNumber: 'TMO008',
      subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
      shift: '8 AM To 5 PM',
      inDate: '1/2/2022',
      outDate: '2/2/2022',
      shiftInTime: '8:00 am',
      shiftOutTime: '5:00 pm',
      inTime: '8:00 am',
      outTime: '6:00 pm',
      netWorkingHours: '33.00',
      earlyGo: '0',
      lateArrival: '0',
      attendanceStatus: 'H',
      manualUpdate: '',
      extraWorkingHours: '0',
      latitudeTimeIn: '',
      latitudeTimeOut: '',
      longitudeTimeIn: '',
      longitudeTimeOut: '',
      timeInAddress: '',
      timeOutAddress: '',
      attendanceRemark: 'Modified From SFTP CSV File',
      attendanceStatus1: 'P',
      attendanceOperationFlag: '1',
      leaveUpdateFlag: 'No',
      leaveUpdateAgainstAbsent: 'No',
      isWeeklyOff: 'No',
      isHalfDayWeeklyOff: 'No',
      isPHFullDay: 'Yes',
      phWorkingMinutesLess: '0',
      netWorkingMinutes: '1,980',
      totalShiftMinutes: '540',
      otPaid: 'No',
      totalShiftMinutesWithoutLunch: '480',
      isPaidLeave: 'No',
      day: 'Tuesday',
      exemptForBiometric: 'Yes',
      updatedFromDayShiftScript: 'No',
      updatedFromNightShiftScript: 'No'
    },
    {
      id: 51102,
      employeeName: 'TMO008 Natarajan Muruganandham',
      biometricNumber: 'TMO008',
      subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
      shift: '8 AM To 5 PM',
      inDate: '2/2/2022',
      outDate: '3/2/2022',
      shiftInTime: '8:00 am',
      shiftOutTime: '5:00 pm',
      inTime: '8:00 am',
      outTime: '7:00 pm',
      netWorkingHours: '34.00',
      earlyGo: '0',
      lateArrival: '0',
      attendanceStatus: 'H',
      manualUpdate: '',
      extraWorkingHours: '0',
      latitudeTimeIn: '',
      latitudeTimeOut: '',
      longitudeTimeIn: '',
      longitudeTimeOut: '',
      timeInAddress: '',
      timeOutAddress: '',
      attendanceRemark: 'Modified From SFTP CSV File',
      attendanceStatus1: 'P',
      attendanceOperationFlag: '1',
      leaveUpdateFlag: 'No',
      leaveUpdateAgainstAbsent: 'No',
      isWeeklyOff: 'No',
      isHalfDayWeeklyOff: 'No',
      isPHFullDay: 'Yes',
      phWorkingMinutesLess: '0',
      netWorkingMinutes: '2,040',
      totalShiftMinutes: '540',
      otPaid: 'No',
      totalShiftMinutesWithoutLunch: '480',
      isPaidLeave: 'No',
      day: 'Wednesday',
      exemptForBiometric: 'Yes',
      updatedFromDayShiftScript: 'No',
      updatedFromNightShiftScript: 'No'
    },
    {
      id: 51103,
      employeeName: 'TMO008 Natarajan Muruganandham',
      biometricNumber: 'TMO008',
      subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
      shift: '8 AM To 5 PM',
      inDate: '3/2/2022',
      outDate: '4/2/2022',
      shiftInTime: '8:00 am',
      shiftOutTime: '5:00 pm',
      inTime: '8:00 am',
      outTime: '7:00 pm',
      netWorkingHours: '34.00',
      earlyGo: '0',
      lateArrival: '0',
      attendanceStatus: 'P',
      manualUpdate: '',
      extraWorkingHours: '0',
      latitudeTimeIn: '',
      latitudeTimeOut: '',
      longitudeTimeIn: '',
      longitudeTimeOut: '',
      timeInAddress: '',
      timeOutAddress: '',
      attendanceRemark: 'Modified From SFTP CSV File',
      attendanceStatus1: 'P',
      attendanceOperationFlag: '1',
      leaveUpdateFlag: 'No',
      leaveUpdateAgainstAbsent: 'No',
      isWeeklyOff: 'No',
      isHalfDayWeeklyOff: 'No',
      isPHFullDay: 'No',
      phWorkingMinutesLess: '0',
      netWorkingMinutes: '2,040',
      totalShiftMinutes: '540',
      otPaid: 'No',
      totalShiftMinutesWithoutLunch: '480',
      isPaidLeave: 'No',
      day: 'Thursday',
      exemptForBiometric: 'Yes',
      updatedFromDayShiftScript: 'No',
      updatedFromNightShiftScript: 'No'
    },
    {
      id: 51104,
      employeeName: 'TMO008 Natarajan Muruganandham',
      biometricNumber: 'TMO008',
      subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
      shift: '8 AM To 5 PM',
      inDate: '4/2/2022',
      outDate: '5/2/2022',
      shiftInTime: '8:00 am',
      shiftOutTime: '5:00 pm',
      inTime: '8:00 am',
      outTime: '6:00 pm',
      netWorkingHours: '33.00',
      earlyGo: '0',
      lateArrival: '0',
      attendanceStatus: 'P',
      manualUpdate: '',
      extraWorkingHours: '0',
      latitudeTimeIn: '',
      latitudeTimeOut: '',
      longitudeTimeIn: '',
      longitudeTimeOut: '',
      timeInAddress: '',
      timeOutAddress: '',
      attendanceRemark: 'Modified From SFTP CSV File',
      attendanceStatus1: 'P',
      attendanceOperationFlag: '1',
      leaveUpdateFlag: 'No',
      leaveUpdateAgainstAbsent: 'No',
      isWeeklyOff: 'No',
      isHalfDayWeeklyOff: 'No',
      isPHFullDay: 'No',
      phWorkingMinutesLess: '0',
      netWorkingMinutes: '1,980',
      totalShiftMinutes: '540',
      otPaid: 'No',
      totalShiftMinutesWithoutLunch: '480',
      isPaidLeave: 'No',
      day: 'Friday',
      exemptForBiometric: 'Yes',
      updatedFromDayShiftScript: 'No',
      updatedFromNightShiftScript: 'No'
    },
    {
      id: 51105,
      employeeName: 'TMO008 Natarajan Muruganandham',
      biometricNumber: 'TMO008',
      subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
      shift: '8 AM To 5 PM',
      inDate: '5/2/2022',
      outDate: '5/2/2022',
      shiftInTime: '8:00 am',
      shiftOutTime: '12:00 pm',
      inTime: '8:00 am',
      outTime: '12:00 pm',
      netWorkingHours: '4',
      earlyGo: '0',
      lateArrival: '0',
      attendanceStatus: 'R',
      manualUpdate: '',
      extraWorkingHours: '0',
      latitudeTimeIn: '',
      latitudeTimeOut: '',
      longitudeTimeIn: '',
      longitudeTimeOut: '',
      timeInAddress: '',
      timeOutAddress: '',
      attendanceRemark: 'Created From Monthly Rated Employee Schedule',
      attendanceStatus1: 'P',
      attendanceOperationFlag: '1',
      leaveUpdateFlag: 'No',
      leaveUpdateAgainstAbsent: 'No',
      isWeeklyOff: 'Yes',
      isHalfDayWeeklyOff: 'Yes',
      isPHFullDay: 'No',
      phWorkingMinutesLess: '0',
      netWorkingMinutes: '240',
      totalShiftMinutes: '240',
      otPaid: 'No',
      totalShiftMinutesWithoutLunch: '240',
      isPaidLeave: 'No',
      day: 'Saturday',
      exemptForBiometric: 'Yes',
      updatedFromDayShiftScript: 'No',
      updatedFromNightShiftScript: 'No'
    },
    {
      id: 51106,
      employeeName: 'TMO008 Natarajan Muruganandham',
      biometricNumber: 'TMO008',
      subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
      shift: '8 AM To 5 PM',
      inDate: '6/2/2022',
      outDate: '6/2/2022',
      shiftInTime: '8:00 am',
      shiftOutTime: '5:00 pm',
      inTime: '',
      outTime: '',
      netWorkingHours: '0',
      earlyGo: '0',
      lateArrival: '',
      attendanceStatus: '',
      manualUpdate: '',
      extraWorkingHours: '',
      latitudeTimeIn: '',
      latitudeTimeOut: '',
      longitudeTimeIn: '',
      longitudeTimeOut: '',
      timeInAddress: '',
      timeOutAddress: '',
      attendanceRemark: '',
      attendanceStatus1: '',
      attendanceOperationFlag: '',
      leaveUpdateFlag: '',
      leaveUpdateAgainstAbsent: '',
      isWeeklyOff: '',
      isHalfDayWeeklyOff: '',
      isPHFullDay: '',
      phWorkingMinutesLess: '',
      netWorkingMinutes: '',
      totalShiftMinutes: '',
      otPaid: '',
      totalShiftMinutesWithoutLunch: '',
      isPaidLeave: '',
      day: '',
      exemptForBiometric: '',
      updatedFromDayShiftScript: '',
      updatedFromNightShiftScript: ''
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (record) => {
    if (onViewClick) onViewClick(record);
  };

  const handleEdit = (record) => {
    if (onEditClick) onEditClick(record);
  };

  const filteredRecords = attendanceRecords.filter(record => {
    if (searchText && !record.employeeName.toLowerCase().includes(searchText.toLowerCase()) &&
        !record.biometricNumber.toLowerCase().includes(searchText.toLowerCase()) &&
        !record.id.toString().includes(searchText)) return false;
    return true;
  });

  // Pagination
  const totalRecords = 437423; // As shown in the image
  const startRecord = (currentPage - 1) * recordsPerPage + 1;
  const endRecord = Math.min(currentPage * recordsPerPage, totalRecords);

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-calendar-check"></i>
          <h1>Employee Daily Attendance List</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option active">List</button>
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
            <option value="present">Present</option>
            <option value="absent">Absent</option>
            <option value="half-day">Half Day</option>
            <option value="leave">Leave</option>
          </select>
        </div>
        <div className="view-filter">
          <label>FILTERS</label>
          <button className="btn-customize">
            <i className="fas fa-filter"></i>
            Filters
          </button>
        </div>
        <div className="view-filter">
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input 
              type="checkbox" 
              checked={showInactives}
              onChange={(e) => setShowInactives(e.target.checked)}
            />
            Show Inactives
          </label>
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button className="btn-icon" title="Edit View">
            <i className="fas fa-edit"></i>
            <span>EDIT</span>
          </button>
          <button className="btn-icon" title="View">
            <i className="fas fa-eye"></i>
            <span>VIEW</span>
          </button>
        </div>
        <div className="filter-right-group">
          <div className="quick-sort">
            <label>QUICK SORT</label>
            <select className="form-control">
              <option>All Records</option>
              <option>Recent First</option>
              <option>Employee Name</option>
              <option>Date</option>
            </select>
          </div>
          <div className="pagination-info">
            {startRecord} — {endRecord} of {totalRecords.toLocaleString()}
          </div>
          <div className="list-total">
            Total: {totalRecords.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th>Edit | View</th>
              <th>ID</th>
              <th>Employee Name</th>
              <th>Biometric Number</th>
              <th>Subsidiary</th>
              <th>Shift</th>
              <th>In-date</th>
              <th>Out Date</th>
              <th>Shift In Time</th>
              <th>Shift Out Time</th>
              <th>In time</th>
              <th>Out Time</th>
              <th>Net Working Hours</th>
              <th>Early Go (In Minute)</th>
              <th>Late Arrival (In Minute)</th>
              <th>Attendance Status</th>
              <th>Manual Update</th>
              <th>Extra Working Hours (OT)</th>
              <th>LATITUDE TIME IN</th>
              <th>LATITUDE TIME OUT</th>
              <th>LONGITUDE TIME IN</th>
              <th>LONGITUDE TIME OUT</th>
              <th>TIME IN ADDRESS</th>
              <th>TIME OUT ADDRESS</th>
              <th>Attendance Remark</th>
              <th>Attendance Status 1</th>
              <th>Attendance Operation Flag</th>
              <th>Leave Update Flag Against Late Coming</th>
              <th>Leave update against absent</th>
              <th>Is Weekly Off</th>
              <th>Is Half Day Weekly Off</th>
              <th>Is PH Full Day</th>
              <th>PH Working Minutes Less</th>
              <th>Net Working Minutes</th>
              <th>Total Shift Minutes</th>
              <th>OT Paid</th>
              <th>Total Shift Minutes ( Without Lunch)</th>
              <th>Is Paid Leave?</th>
              <th>Day</th>
              <th>Exempt for Biometric</th>
              <th>Updated from day shift script</th>
              <th>Updated from Night shift script</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((record) => (
              <tr key={record.id}>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button 
                      className="btn-table-action"
                      onClick={() => handleEdit(record)}
                      title="Edit"
                    >
                      Edit
                    </button>
                    <span>|</span>
                    <button 
                      className="btn-table-action"
                      onClick={() => handleView(record)}
                      title="View"
                    >
                      View
                    </button>
                  </div>
                </td>
                <td>{record.id}</td>
                <td>{record.employeeName}</td>
                <td>{record.biometricNumber}</td>
                <td>{record.subsidiary}</td>
                <td>{record.shift}</td>
                <td>{record.inDate}</td>
                <td>{record.outDate}</td>
                <td>{record.shiftInTime}</td>
                <td>{record.shiftOutTime}</td>
                <td>{record.inTime}</td>
                <td>{record.outTime}</td>
                <td>{record.netWorkingHours}</td>
                <td>{record.earlyGo}</td>
                <td>{record.lateArrival}</td>
                <td>
                  <span className={`status-badge ${
                    record.attendanceStatus === 'P' ? 'success' : 
                    record.attendanceStatus === 'A' ? 'error' : 
                    record.attendanceStatus === 'H' ? 'warning' : 
                    record.attendanceStatus === 'R' ? 'info' : 'default'
                  }`}>
                    {record.attendanceStatus}
                  </span>
                </td>
                <td>{record.manualUpdate}</td>
                <td>{record.extraWorkingHours}</td>
                <td>{record.latitudeTimeIn}</td>
                <td>{record.latitudeTimeOut}</td>
                <td>{record.longitudeTimeIn}</td>
                <td>{record.longitudeTimeOut}</td>
                <td>{record.timeInAddress}</td>
                <td>{record.timeOutAddress}</td>
                <td>{record.attendanceRemark}</td>
                <td>{record.attendanceStatus1}</td>
                <td>{record.attendanceOperationFlag}</td>
                <td>{record.leaveUpdateFlag}</td>
                <td>{record.leaveUpdateAgainstAbsent}</td>
                <td>{record.isWeeklyOff}</td>
                <td>{record.isHalfDayWeeklyOff}</td>
                <td>{record.isPHFullDay}</td>
                <td>{record.phWorkingMinutesLess}</td>
                <td>{record.netWorkingMinutes}</td>
                <td>{record.totalShiftMinutes}</td>
                <td>{record.otPaid}</td>
                <td>{record.totalShiftMinutesWithoutLunch}</td>
                <td>{record.isPaidLeave}</td>
                <td>{record.day}</td>
                <td>{record.exemptForBiometric}</td>
                <td>{record.updatedFromDayShiftScript}</td>
                <td>{record.updatedFromNightShiftScript}</td>
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

export default ViewEmployeeDailyAttendanceList;
