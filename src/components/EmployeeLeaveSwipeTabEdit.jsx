import React, { useState } from 'react';
import TimeTrackingModal from './TimeTrackingModal';
import WeeklyTimeTrackingModal from './WeeklyTimeTrackingModal';

const EmployeeLeaveSwipeTabEdit = () => {
  const [leaveSwipeSubTab, setLeaveSwipeSubTab] = useState('timeTracking');
  const [timeTrackingModalOpen, setTimeTrackingModalOpen] = useState(false);
  const [weeklyTimeModalOpen, setWeeklyTimeModalOpen] = useState(false);

  const [timeTrackingData, setTimeTrackingData] = useState({
    timeApprover: '',
    view: 'Default',
    status: 'Either',
    approved: '- All -'
  });

  const [leaveEnrollmentData, setLeaveEnrollmentData] = useState({
    view: 'Default View',
    employeeLeaveEnrollment: ''
  });

  const viewOptions = ['Default', 'Employee Search'];
  const statusOptions = ['Either', 'Unbilled', 'Billed'];
  const approvedOptions = ['- All -', 'Yes', 'No'];
  const leaveViewOptions = ['Default View'];

  const handleTimeTrackingChange = (field, value) => {
    setTimeTrackingData(prev => ({ ...prev, [field]: value }));
  };

  const handleLeaveEnrollmentChange = (field, value) => {
    setLeaveEnrollmentData(prev => ({ ...prev, [field]: value }));
  };

  const handleNewTime = () => {
    console.log('Opening Time Tracking Modal');
    setTimeTrackingModalOpen(true);
  };

  const handleNewWeeklyTime = () => {
    console.log('Opening Weekly Time Modal');
    setWeeklyTimeModalOpen(true);
  };

  return (
    <div className="tab-content-wrapper">
      {/* Leave/Swipe Sub-tabs */}
      <div style={{
        borderBottom: '2px solid #e0e0e0',
        background: '#f8f9fa',
        display: 'flex',
        gap: '0.5rem',
        padding: '0.5rem 1rem'
      }}>
        <button
          className={`tab-btn ${leaveSwipeSubTab === 'timeTracking' ? 'active' : ''}`}
          onClick={() => setLeaveSwipeSubTab('timeTracking')}
          style={{
            fontSize: '0.8rem',
            padding: '0.5rem 1rem',
            border: 'none',
            background: leaveSwipeSubTab === 'timeTracking' ? '#4a5568' : 'transparent',
            color: leaveSwipeSubTab === 'timeTracking' ? '#fff' : '#4a5568',
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          Time Tracking
        </button>
        <button
          className={`tab-btn ${leaveSwipeSubTab === 'employeeLeaveEnrollment' ? 'active' : ''}`}
          onClick={() => setLeaveSwipeSubTab('employeeLeaveEnrollment')}
          style={{
            fontSize: '0.8rem',
            padding: '0.5rem 1rem',
            border: 'none',
            background: leaveSwipeSubTab === 'employeeLeaveEnrollment' ? '#4a5568' : 'transparent',
            color: leaveSwipeSubTab === 'employeeLeaveEnrollment' ? '#fff' : '#4a5568',
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          Employee Leave Enrollment
        </button>
      </div>

      <div style={{ padding: '1.5rem', background: '#fff' }}>
        {/* Time Tracking Sub-tab */}
        {leaveSwipeSubTab === 'timeTracking' && (
          <>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#4a5568', fontWeight: 600 }}>
                Time Tracking
              </h3>
              
              {/* Filter Controls */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(4, 1fr)', 
                gap: '1rem', 
                marginBottom: '1rem',
                padding: '1rem',
                background: '#f8f9fa',
                borderRadius: '4px'
              }}>
                <div className="form-group">
                  <label className="form-label">TIME APPROVER</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="<Type then tab>"
                    value={timeTrackingData.timeApprover}
                    onChange={(e) => handleTimeTrackingChange('timeApprover', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">VIEW</label>
                  <select 
                    className="form-control"
                    value={timeTrackingData.view}
                    onChange={(e) => handleTimeTrackingChange('view', e.target.value)}
                  >
                    {viewOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">STATUS</label>
                  <select 
                    className="form-control"
                    value={timeTrackingData.status}
                    onChange={(e) => handleTimeTrackingChange('status', e.target.value)}
                  >
                    {statusOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">APPROVED</label>
                  <select 
                    className="form-control"
                    value={timeTrackingData.approved}
                    onChange={(e) => handleTimeTrackingChange('approved', e.target.value)}
                  >
                    {approvedOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <button className="btn btn-primary" onClick={handleNewTime}>
                  New Time
                </button>
                <button className="btn btn-primary" onClick={handleNewWeeklyTime}>
                  New Weekly Time
                </button>
                <button className="btn btn-secondary">
                  Customize View
                </button>
              </div>

              {/* Time Tracking Table */}
              <div style={{ overflowX: 'auto' }}>
                <table className="detail-items-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>EDIT</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>DATE</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>ITEM</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>DURATION</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>APPROVED</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>STATUS</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>TYPE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                        No records to show.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Employee Leave Enrollment Sub-tab */}
        {leaveSwipeSubTab === 'employeeLeaveEnrollment' && (
          <>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#4a5568', fontWeight: 600 }}>
                Employee Leave Enrollment
              </h3>
              
              {/* Filter Controls */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '1rem', 
                marginBottom: '1rem',
                padding: '1rem',
                background: '#f8f9fa',
                borderRadius: '4px'
              }}>
                <div className="form-group">
                  <label className="form-label">VIEW</label>
                  <select 
                    className="form-control"
                    value={leaveEnrollmentData.view}
                    onChange={(e) => handleLeaveEnrollmentChange('view', e.target.value)}
                  >
                    {leaveViewOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">EMPLOYEE LEAVE ENROLLMENT</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="<Type then tab>"
                    value={leaveEnrollmentData.employeeLeaveEnrollment}
                    onChange={(e) => handleLeaveEnrollmentChange('employeeLeaveEnrollment', e.target.value)}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <button className="btn btn-primary">
                  New Employee Leave Enrollment
                </button>
                <button className="btn btn-secondary">
                  Attach
                </button>
                <button className="btn btn-secondary">
                  Customize View
                </button>
              </div>

              {/* Leave Enrollment Table */}
              <div style={{ overflowX: 'auto' }}>
                <table className="detail-items-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>EDIT</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>ENTITLEMENT CREATED</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>COUNTRY</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>PREVIOUS LEAVE ENTITLEMENT ID</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>ADJ WAGE MONTH</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>LEAVE GROUP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                        No records to show.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Modals */}
      <TimeTrackingModal 
        isOpen={timeTrackingModalOpen}
        onClose={() => setTimeTrackingModalOpen(false)}
      />

      <WeeklyTimeTrackingModal 
        isOpen={weeklyTimeModalOpen}
        onClose={() => setWeeklyTimeModalOpen(false)}
      />
    </div>
  );
};

export default EmployeeLeaveSwipeTabEdit;
