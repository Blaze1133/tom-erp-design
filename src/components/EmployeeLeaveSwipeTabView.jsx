import React, { useState } from 'react';

const EmployeeLeaveSwipeTabView = () => {
  const [leaveSwipeSubTab, setLeaveSwipeSubTab] = useState('timeTracking');

  const timeTrackingData = {
    timeApprover: '',
    view: 'Default',
    status: 'Either',
    approved: '- All -'
  };

  const leaveEnrollmentData = {
    view: 'Default View',
    employeeLeaveEnrollment: ''
  };

  // Sample data for display
  const timeTrackingRecords = [];
  const leaveEnrollmentRecords = [];

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
              
              {/* Filter Display */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(4, 1fr)', 
                gap: '1rem', 
                marginBottom: '1rem',
                padding: '1rem',
                background: '#f8f9fa',
                borderRadius: '4px'
              }}>
                <div className="detail-field">
                  <label>TIME APPROVER</label>
                  <div className="field-value">{timeTrackingData.timeApprover || '-'}</div>
                </div>
                <div className="detail-field">
                  <label>VIEW</label>
                  <div className="field-value">{timeTrackingData.view}</div>
                </div>
                <div className="detail-field">
                  <label>STATUS</label>
                  <div className="field-value">{timeTrackingData.status}</div>
                </div>
                <div className="detail-field">
                  <label>APPROVED</label>
                  <div className="field-value">{timeTrackingData.approved}</div>
                </div>
              </div>

              {/* Time Tracking Table */}
              <div className="items-table-wrapper">
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>EDIT</th>
                      <th>DATE</th>
                      <th>ITEM</th>
                      <th>DURATION</th>
                      <th>APPROVED</th>
                      <th>STATUS</th>
                      <th>TYPE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timeTrackingRecords.length === 0 ? (
                      <tr>
                        <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                          No time tracking records available
                        </td>
                      </tr>
                    ) : (
                      timeTrackingRecords.map((record, index) => (
                        <tr key={index}>
                          <td>
                            <button className="view-link">
                              <i className="fas fa-edit"></i>
                            </button>
                          </td>
                          <td>{record.date}</td>
                          <td>{record.item}</td>
                          <td>{record.duration}</td>
                          <td>{record.approved}</td>
                          <td>{record.status}</td>
                          <td>{record.type}</td>
                        </tr>
                      ))
                    )}
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
              
              {/* Filter Display */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '1rem', 
                marginBottom: '1rem',
                padding: '1rem',
                background: '#f8f9fa',
                borderRadius: '4px'
              }}>
                <div className="detail-field">
                  <label>VIEW</label>
                  <div className="field-value">{leaveEnrollmentData.view}</div>
                </div>
                <div className="detail-field">
                  <label>EMPLOYEE LEAVE ENROLLMENT</label>
                  <div className="field-value">{leaveEnrollmentData.employeeLeaveEnrollment || '-'}</div>
                </div>
              </div>

              {/* Leave Enrollment Table */}
              <div className="items-table-wrapper">
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>EDIT</th>
                      <th>ENTITLEMENT CREATED</th>
                      <th>COUNTRY</th>
                      <th>PREVIOUS LEAVE ENTITLEMENT ID</th>
                      <th>ADJ WAGE MONTH</th>
                      <th>LEAVE GROUP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaveEnrollmentRecords.length === 0 ? (
                      <tr>
                        <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                          No leave enrollment records available
                        </td>
                      </tr>
                    ) : (
                      leaveEnrollmentRecords.map((record, index) => (
                        <tr key={index}>
                          <td>
                            <button className="view-link">
                              <i className="fas fa-edit"></i>
                            </button>
                          </td>
                          <td>{record.entitlementCreated}</td>
                          <td>{record.country}</td>
                          <td>{record.previousLeaveEntitlementId}</td>
                          <td>{record.adjWageMonth}</td>
                          <td>{record.leaveGroup}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EmployeeLeaveSwipeTabView;
