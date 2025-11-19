import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewEmployeeDailyAttendanceDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [attendanceInfoCollapsed, setAttendanceInfoCollapsed] = useState(false);
  const [locationInfoCollapsed, setLocationInfoCollapsed] = useState(false);
  const [systemInfoCollapsed, setSystemInfoCollapsed] = useState(false);

  const attendanceData = {
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
    updatedFromNightShiftScript: 'No',
    createdBy: 'System',
    createdDate: '1/2/2022 8:00:00 AM',
    lastModifiedBy: 'Admin User',
    lastModifiedDate: '1/2/2022 6:30:00 PM'
  };

  const handleEdit = () => {
    if (onEdit) onEdit();
  };

  const handleBack = () => {
    if (onBack) onBack();
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-calendar-check"></i>
          <div>
            <h1>Employee Daily Attendance</h1>
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
        <button className="btn-toolbar-primary" onClick={handleEdit}>
          <i className="fas fa-edit"></i>
          Edit
        </button>
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
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
        {/* Employee Information - Two Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          {/* Left Column */}
          <div>
            <div className="detail-field">
              <label>ID</label>
              <div className="field-value">{attendanceData.id}</div>
            </div>
            
            <div className="detail-field">
              <label>INACTIVE</label>
              <div className="field-value">
                <input type="checkbox" checked={attendanceData.inactive || false} disabled />
              </div>
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
              <div className="field-value">{attendanceData.shift}</div>
            </div>

            <div className="detail-field">
              <label>INDATE</label>
              <div className="field-value">{attendanceData.inDate}</div>
            </div>

            <div className="detail-field">
              <label>OUT DATE</label>
              <div className="field-value">{attendanceData.outDate}</div>
            </div>

            <div className="detail-field">
              <label>SHIFT IN TIME</label>
              <div className="field-value">{attendanceData.shiftInTime}</div>
            </div>

            <div className="detail-field">
              <label>SHIFT OUT TIME</label>
              <div className="field-value">{attendanceData.shiftOutTime}</div>
            </div>

            <div className="detail-field">
              <label>IN TIME</label>
              <div className="field-value">{attendanceData.inTime}</div>
            </div>

            <div className="detail-field">
              <label>OUT TIME</label>
              <div className="field-value">{attendanceData.outTime}</div>
            </div>

            <div className="detail-field">
              <label>NET WORKING HOURS</label>
              <div className="field-value">{attendanceData.netWorkingHours}</div>
            </div>

            <div className="detail-field">
              <label>EARLY GO (IN MINUTE)</label>
              <div className="field-value">{attendanceData.earlyGo}</div>
            </div>

            <div className="detail-field">
              <label>LATE ARRIVAL (IN MINUTE)</label>
              <div className="field-value">{attendanceData.lateArrival}</div>
            </div>

            <div className="detail-field">
              <label>ATTENDANCE STATUS</label>
              <div className="field-value">
                <span className={`status-badge ${
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

          {/* Right Column */}
          <div>
            <div className="detail-field">
              <label>EXTRA WORKING HOURS (OT)</label>
              <div className="field-value">{attendanceData.extraWorkingHours}</div>
            </div>

            <div className="detail-field">
              <label>IS HOLIDAY</label>
              <div className="field-value">
                <input type="checkbox" checked={attendanceData.isHoliday || false} disabled />
              </div>
            </div>

            <div className="detail-field">
              <label>LATITUDE TIME IN</label>
              <div className="field-value">{attendanceData.latitudeTimeIn || '-'}</div>
            </div>

            <div className="detail-field">
              <label>IS PH FULL DAY</label>
              <div className="field-value">
                <input type="checkbox" checked={attendanceData.isPHFullDay === 'Yes'} disabled />
              </div>
            </div>

            <div className="detail-field">
              <label>LATITUDE TIME OUT</label>
              <div className="field-value">{attendanceData.latitudeTimeOut || '-'}</div>
            </div>

            <div className="detail-field">
              <label>PH WORKING MINUTES LESS</label>
              <div className="field-value">{attendanceData.phWorkingMinutesLess}</div>
            </div>

            <div className="detail-field">
              <label>LONGITUDE TIME IN</label>
              <div className="field-value">{attendanceData.longitudeTimeIn || '-'}</div>
            </div>

            <div className="detail-field">
              <label>PHW WORKING MINUTES</label>
              <div className="field-value">{attendanceData.phwWorkingMinutes || '0'}</div>
            </div>

            <div className="detail-field">
              <label>LONGITUDE TIME OUT</label>
              <div className="field-value">{attendanceData.longitudeTimeOut || '-'}</div>
            </div>

            <div className="detail-field">
              <label>OT MINUTES</label>
              <div className="field-value">{attendanceData.otMinutes || '0'}</div>
            </div>

            <div className="detail-field">
              <label>TIME IN ADDRESS</label>
              <div className="field-value">{attendanceData.timeInAddress || '-'}</div>
            </div>

            <div className="detail-field">
              <label>NET WORKING MINUTES</label>
              <div className="field-value">{attendanceData.netWorkingMinutes}</div>
            </div>

            <div className="detail-field">
              <label>TIME OUT ADDRESS</label>
              <div className="field-value">{attendanceData.timeOutAddress || '-'}</div>
            </div>

            <div className="detail-field">
              <label>TOTAL SHIFT MINUTES</label>
              <div className="field-value">{attendanceData.totalShiftMinutes}</div>
            </div>

            <div className="detail-field">
              <label>ATTENDANCE REMARK</label>
              <div className="field-value">{attendanceData.attendanceRemark}</div>
            </div>

            <div className="detail-field">
              <label>OT PAID</label>
              <div className="field-value">
                <input type="checkbox" checked={attendanceData.otPaid === 'Yes'} disabled />
              </div>
            </div>

            <div className="detail-field">
              <label>ATTENDANCE STATUS 1</label>
              <div className="field-value">{attendanceData.attendanceStatus1}</div>
            </div>

            <div className="detail-field">
              <label>TOTAL SHIFT MINUTES ( WITHOUT LUNCH)</label>
              <div className="field-value">{attendanceData.totalShiftMinutesWithoutLunch}</div>
            </div>

            <div className="detail-field">
              <label>ATTENDANCE OPERATION FLAG</label>
              <div className="field-value">{attendanceData.attendanceOperationFlag}</div>
            </div>

            <div className="detail-field">
              <label>IS PAID LEAVE?</label>
              <div className="field-value">
                <input type="checkbox" checked={attendanceData.isPaidLeave === 'Yes'} disabled />
              </div>
            </div>

            <div className="detail-field">
              <label>LEAVE UPDATE FLAG AGAINST LATE COMING</label>
              <div className="field-value">{attendanceData.leaveUpdateFlag}</div>
            </div>

            <div className="detail-field">
              <label>DAY</label>
              <div className="field-value">{attendanceData.day}</div>
            </div>

            <div className="detail-field">
              <label>LEAVE UPDATE AGAINST ABSENT</label>
              <div className="field-value">{attendanceData.leaveUpdateAgainstAbsent}</div>
            </div>

            <div className="detail-field">
              <label>IS HALF DAY WEEKLY OFF</label>
              <div className="field-value">
                <input type="checkbox" checked={attendanceData.isHalfDayWeeklyOff === 'Yes'} disabled />
              </div>
            </div>

            <div className="detail-field">
              <label>REF LEAVE APPLICATION</label>
              <div className="field-value">{attendanceData.refLeaveApplication || '- New -'}</div>
            </div>

            <div className="detail-field">
              <label>EXEMPT FOR BIOMETRIC</label>
              <div className="field-value">
                <input type="checkbox" checked={attendanceData.exemptForBiometric === 'Yes'} disabled />
              </div>
            </div>

            <div className="detail-field">
              <label>IS WEEKLY OFF</label>
              <div className="field-value">
                <input type="checkbox" checked={attendanceData.isWeeklyOff === 'Yes'} disabled />
              </div>
            </div>

            <div className="detail-field">
              <label>UPDATED FROM DAY SHIFT SCRIPT</label>
              <div className="field-value">{attendanceData.updatedFromDayShiftScript}</div>
            </div>

            <div className="detail-field">
              <label>UPDATED FROM NIGHT SHIFT SCRIPT</label>
              <div className="field-value">{attendanceData.updatedFromNightShiftScript}</div>
            </div>

            <div className="detail-field">
              <label>UPDATE ()</label>
              <div className="field-value">{attendanceData.update || '-'}</div>
            </div>
          </div>
        </div>


        {/* System Information Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>System Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>CREATED BY</label>
                <div className="field-value">{attendanceData.createdBy}</div>
              </div>
              <div className="detail-field">
                <label>LAST MODIFIED BY</label>
                <div className="field-value">{attendanceData.lastModifiedBy}</div>
              </div>
              <div className="detail-field">
                <label>CREATED DATE</label>
                <div className="field-value">{attendanceData.createdDate}</div>
              </div>
              <div className="detail-field">
                <label>LAST MODIFIED DATE</label>
                <div className="field-value">{attendanceData.lastModifiedDate}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="detail-footer-actions">
          <button className="btn-toolbar-primary" onClick={handleEdit}>
            <i className="fas fa-edit"></i>
            Edit
          </button>
          <button className="btn-toolbar" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
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

export default ViewEmployeeDailyAttendanceDetail;
