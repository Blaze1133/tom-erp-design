import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditEmployeeDailyAttendance = ({ onBack, onSave }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [attendanceInfoCollapsed, setAttendanceInfoCollapsed] = useState(false);
  const [locationInfoCollapsed, setLocationInfoCollapsed] = useState(false);
  const [workingHoursCollapsed, setWorkingHoursCollapsed] = useState(false);

  const [attendanceData, setAttendanceData] = useState({
    id: '51101',
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
  });

  const shifts = [
    '8 AM To 5 PM',
    '7 AM To 4 PM',
    '5 Am To 2 Pm',
    '10 Am To 7 Pm',
    '9 AM To 6 PM',
    '12 PM To 9 PM',
    '1 PM To 10 PM',
    '2 PM To 11 PM'
  ];

  const attendanceStatuses = ['P', 'A', 'H', 'L', 'R'];
  const yesNoOptions = ['Yes', 'No'];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setAttendanceData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    showToast('Employee Daily Attendance record updated successfully', 'success');
    if (onSave) {
      setTimeout(() => {
        onSave(attendanceData);
      }, 1500);
    }
  };

  const handleBack = () => {
    if (onBack) onBack();
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Changes cancelled', 'info');
      if (onBack) onBack();
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-calendar-check"></i>
          <div>
            <h1>Edit Employee Daily Attendance</h1>
            <div className="detail-subtitle">
              <span>{attendanceData.id}</span>
              <span className={`status-badge-detail ${
                attendanceData.attendanceStatus === 'P' ? 'success' : 
                attendanceData.attendanceStatus === 'A' ? 'error' : 
                attendanceData.attendanceStatus === 'H' ? 'warning' : 
                attendanceData.attendanceStatus === 'R' ? 'info' : 'default'
              }`}>
                {attendanceData.attendanceStatus}
              </span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-action">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-action">List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-copy"></i>
          Copy
        </button>
        <div className="toolbar-dropdown" style={{ marginLeft: 'auto' }}>
          <button className="btn-toolbar">
            <i className="fas fa-cog"></i>
            Actions
            <i className="fas fa-chevron-down" style={{ marginLeft: '0.5rem', fontSize: '0.7rem' }}></i>
          </button>
        </div>
      </div>

      <div className="detail-content">
        {/* Employee Information - Left Column */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          {/* Left Column */}
          <div>
            <div className="detail-field">
              <label>ID</label>
              <div className="field-value">{attendanceData.id}</div>
            </div>
            
            <div className="detail-field">
              <label>INACTIVE</label>
              <input 
                type="checkbox" 
                checked={attendanceData.inactive || false}
                onChange={(e) => handleInputChange('inactive', e.target.checked)}
              />
            </div>

            <div className="detail-field">
              <label>EMPLOYEE NAME</label>
              <div className="field-value">{attendanceData.employeeName}</div>
            </div>

            <div className="detail-field">
              <label>BIOMETRIC NUMBER</label>
              <div className="field-value">{attendanceData.biometricNumber}</div>
            </div>

            <div className="detail-field">
              <label>SUBSIDIARY</label>
              <div className="field-value">{attendanceData.subsidiary}</div>
            </div>

            <div className="detail-field">
              <label>SHIFT</label>
              <select
                className="form-control"
                value={attendanceData.shift}
                onChange={(e) => handleInputChange('shift', e.target.value)}
              >
                {shifts.map((shift, index) => (
                  <option key={index} value={shift}>{shift}</option>
                ))}
              </select>
            </div>

            <div className="detail-field">
              <label>INDATE</label>
              <input
                type="date"
                className="form-control"
                value={attendanceData.inDate}
                onChange={(e) => handleInputChange('inDate', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>OUT DATE</label>
              <input
                type="date"
                className="form-control"
                value={attendanceData.outDate}
                onChange={(e) => handleInputChange('outDate', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>SHIFT IN TIME</label>
              <input
                type="time"
                className="form-control"
                value={attendanceData.shiftInTime}
                onChange={(e) => handleInputChange('shiftInTime', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>SHIFT OUT TIME</label>
              <input
                type="time"
                className="form-control"
                value={attendanceData.shiftOutTime}
                onChange={(e) => handleInputChange('shiftOutTime', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>IN TIME</label>
              <input
                type="time"
                className="form-control"
                value={attendanceData.inTime}
                onChange={(e) => handleInputChange('inTime', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>OUT TIME</label>
              <input
                type="time"
                className="form-control"
                value={attendanceData.outTime}
                onChange={(e) => handleInputChange('outTime', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>NET WORKING HOURS</label>
              <input
                type="number"
                step="0.01"
                className="form-control"
                value={attendanceData.netWorkingHours}
                onChange={(e) => handleInputChange('netWorkingHours', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>EARLY GO (IN MINUTE)</label>
              <input
                type="number"
                className="form-control"
                value={attendanceData.earlyGo}
                onChange={(e) => handleInputChange('earlyGo', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>LATE ARRIVAL (IN MINUTE)</label>
              <input
                type="number"
                className="form-control"
                value={attendanceData.lateArrival}
                onChange={(e) => handleInputChange('lateArrival', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>ATTENDANCE STATUS</label>
              <select
                className="form-control"
                value={attendanceData.attendanceStatus}
                onChange={(e) => handleInputChange('attendanceStatus', e.target.value)}
              >
                <option value="">Select Status</option>
                {attendanceStatuses.map((status, index) => (
                  <option key={index} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="detail-field">
              <label>EXTRA WORKING HOURS (OT)</label>
              <input
                type="number"
                step="0.01"
                className="form-control"
                value={attendanceData.extraWorkingHours}
                onChange={(e) => handleInputChange('extraWorkingHours', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input 
                  type="checkbox" 
                  checked={attendanceData.isHoliday || false}
                  onChange={(e) => handleInputChange('isHoliday', e.target.checked)}
                />
                IS HOLIDAY
              </label>
            </div>

            <div className="detail-field">
              <label>LATITUDE TIME IN</label>
              <input
                type="text"
                className="form-control"
                value={attendanceData.latitudeTimeIn}
                onChange={(e) => handleInputChange('latitudeTimeIn', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input 
                  type="checkbox" 
                  checked={attendanceData.isPHFullDay || false}
                  onChange={(e) => handleInputChange('isPHFullDay', e.target.checked)}
                />
                IS PH FULL DAY
              </label>
            </div>

            <div className="detail-field">
              <label>LATITUDE TIME OUT</label>
              <input
                type="text"
                className="form-control"
                value={attendanceData.latitudeTimeOut}
                onChange={(e) => handleInputChange('latitudeTimeOut', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>PH WORKING MINUTES LESS</label>
              <input
                type="number"
                className="form-control"
                value={attendanceData.phWorkingMinutesLess}
                onChange={(e) => handleInputChange('phWorkingMinutesLess', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>LONGITUDE TIME IN</label>
              <input
                type="text"
                className="form-control"
                value={attendanceData.longitudeTimeIn}
                onChange={(e) => handleInputChange('longitudeTimeIn', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>PHW WORKING MINUTES</label>
              <input
                type="number"
                className="form-control"
                value={attendanceData.phwWorkingMinutes || '0'}
                onChange={(e) => handleInputChange('phwWorkingMinutes', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>LONGITUDE TIME OUT</label>
              <input
                type="text"
                className="form-control"
                value={attendanceData.longitudeTimeOut}
                onChange={(e) => handleInputChange('longitudeTimeOut', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>OT MINUTES</label>
              <input
                type="number"
                className="form-control"
                value={attendanceData.otMinutes || '0'}
                onChange={(e) => handleInputChange('otMinutes', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>TIME IN ADDRESS</label>
              <textarea
                className="form-control"
                rows="2"
                value={attendanceData.timeInAddress}
                onChange={(e) => handleInputChange('timeInAddress', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>NET WORKING MINUTES</label>
              <input
                type="text"
                className="form-control"
                value={attendanceData.netWorkingMinutes}
                onChange={(e) => handleInputChange('netWorkingMinutes', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>TIME OUT ADDRESS</label>
              <textarea
                className="form-control"
                rows="2"
                value={attendanceData.timeOutAddress}
                onChange={(e) => handleInputChange('timeOutAddress', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>TOTAL SHIFT MINUTES</label>
              <input
                type="number"
                className="form-control"
                value={attendanceData.totalShiftMinutes}
                onChange={(e) => handleInputChange('totalShiftMinutes', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>ATTENDANCE REMARK</label>
              <textarea
                className="form-control"
                rows="3"
                value={attendanceData.attendanceRemark}
                onChange={(e) => handleInputChange('attendanceRemark', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input 
                  type="checkbox" 
                  checked={attendanceData.otPaid === 'Yes'}
                  onChange={(e) => handleInputChange('otPaid', e.target.checked ? 'Yes' : 'No')}
                />
                OT PAID
              </label>
            </div>

            <div className="detail-field">
              <label>ATTENDANCE STATUS 1</label>
              <select
                className="form-control"
                value={attendanceData.attendanceStatus1}
                onChange={(e) => handleInputChange('attendanceStatus1', e.target.value)}
              >
                <option value="">Select Status</option>
                {attendanceStatuses.map((status, index) => (
                  <option key={index} value={status}>{status}</option>
                ))}
              </select>
            </div>

            <div className="detail-field">
              <label>TOTAL SHIFT MINUTES ( WITHOUT LUNCH)</label>
              <input
                type="number"
                className="form-control"
                value={attendanceData.totalShiftMinutesWithoutLunch}
                onChange={(e) => handleInputChange('totalShiftMinutesWithoutLunch', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>ATTENDANCE OPERATION FLAG</label>
              <input
                type="text"
                className="form-control"
                value={attendanceData.attendanceOperationFlag}
                onChange={(e) => handleInputChange('attendanceOperationFlag', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input 
                  type="checkbox" 
                  checked={attendanceData.isPaidLeave === 'Yes'}
                  onChange={(e) => handleInputChange('isPaidLeave', e.target.checked ? 'Yes' : 'No')}
                />
                IS PAID LEAVE?
              </label>
            </div>

            <div className="detail-field">
              <label>LEAVE UPDATE FLAG AGAINST LATE COMING</label>
              <input
                type="text"
                className="form-control"
                value={attendanceData.leaveUpdateFlag}
                onChange={(e) => handleInputChange('leaveUpdateFlag', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>DAY</label>
              <div className="field-value">{attendanceData.day}</div>
            </div>

            <div className="detail-field">
              <label>LEAVE UPDATE AGAINST ABSENT</label>
              <input
                type="text"
                className="form-control"
                value={attendanceData.leaveUpdateAgainstAbsent}
                onChange={(e) => handleInputChange('leaveUpdateAgainstAbsent', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input 
                  type="checkbox" 
                  checked={attendanceData.isHalfDayWeeklyOff === 'Yes'}
                  onChange={(e) => handleInputChange('isHalfDayWeeklyOff', e.target.checked ? 'Yes' : 'No')}
                />
                IS HALF DAY WEEKLY OFF
              </label>
            </div>

            <div className="detail-field">
              <label>REF LEAVE APPLICATION</label>
              <select
                className="form-control"
                value={attendanceData.refLeaveApplication || ''}
                onChange={(e) => handleInputChange('refLeaveApplication', e.target.value)}
              >
                <option value="">- New -</option>
                <option value="LRC000023">LRC000023</option>
                <option value="LRC000031">LRC000031</option>
              </select>
            </div>

            <div className="detail-field">
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input 
                  type="checkbox" 
                  checked={attendanceData.exemptForBiometric === 'Yes'}
                  onChange={(e) => handleInputChange('exemptForBiometric', e.target.checked ? 'Yes' : 'No')}
                />
                EXEMPT FOR BIOMETRIC
              </label>
            </div>

            <div className="detail-field">
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input 
                  type="checkbox" 
                  checked={attendanceData.isWeeklyOff === 'Yes'}
                  onChange={(e) => handleInputChange('isWeeklyOff', e.target.checked ? 'Yes' : 'No')}
                />
                IS WEEKLY OFF
              </label>
            </div>

            <div className="detail-field">
              <label>UPDATED FROM DAY SHIFT SCRIPT</label>
              <input
                type="text"
                className="form-control"
                value={attendanceData.updatedFromDayShiftScript}
                onChange={(e) => handleInputChange('updatedFromDayShiftScript', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>UPDATED FROM NIGHT SHIFT SCRIPT</label>
              <input
                type="text"
                className="form-control"
                value={attendanceData.updatedFromNightShiftScript}
                onChange={(e) => handleInputChange('updatedFromNightShiftScript', e.target.value)}
              />
            </div>

            <div className="detail-field">
              <label>UPDATE ()</label>
              <input
                type="text"
                className="form-control"
                value={attendanceData.update || ''}
                onChange={(e) => handleInputChange('update', e.target.value)}
              />
            </div>
          </div>
        </div>


        {/* Footer Actions */}
        <div className="detail-footer-actions">
          <button className="btn-toolbar" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn-toolbar" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn-toolbar-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
        </div>
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

export default EditEmployeeDailyAttendance;
