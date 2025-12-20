import React, { useState } from 'react';
import './Enquiries.css';

const ViewTimesheetPoolDetail = () => {
  const [activeTab, setActiveTab] = useState('detail');

  const timesheetInfo = {
    id: 'TS-2024-001',
    employee: 'TMO008 Natarajan Muruganandham',
    employeeId: 'TMO008',
    date: '10-Mar-2024',
    subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
    shift: '8 AM To 5 PM',
    dayType: 'Weekday',
    firstInTime: '08:00',
    lastOutTime: '01:00',
    totalNormalHours: '8.00',
    totalOT15Hours: '1.00',
    totalOT20Hours: '7.00',
    totalWeekendHours: '0.00',
    totalHolidayHours: '0.00',
    status: 'Approved',
    approvedBy: 'HR Manager',
    approvedDate: '11-Mar-2024',
    source: 'Biometric',
    remarks: 'Cross-midnight shift handled'
  };

  const detailRecords = [
    {
      id: 1,
      project: 'Project A - Marine Fabrication',
      projectCode: 'PRJ-A-001',
      inTime: '08:00',
      outTime: '17:00',
      normalHours: '8.00',
      ot15Hours: '1.00',
      ot20Hours: '0.00',
      weekendHours: '0.00',
      holidayHours: '0.00',
      breakTime: '1.00',
      remarks: 'Regular shift'
    },
    {
      id: 2,
      project: 'Project B - Offshore Installation',
      projectCode: 'PRJ-B-002',
      inTime: '18:00',
      outTime: '01:00',
      normalHours: '0.00',
      ot15Hours: '0.00',
      ot20Hours: '7.00',
      weekendHours: '0.00',
      holidayHours: '0.00',
      breakTime: '0.00',
      remarks: 'Night shift OT'
    }
  ];

  return (
    <div className="detail-view">
      <div className="detail-header">
        <div className="detail-title-section">
          <i className="fas fa-clock" style={{ fontSize: '1.5rem', color: '#4a5568' }}></i>
          <div>
            <h1>Timesheet Pool Detail</h1>
            <p className="detail-subtitle">
              {timesheetInfo.id} • {timesheetInfo.employee} • {timesheetInfo.date}
              <span className={`status-badge ${timesheetInfo.status === 'Approved' ? 'success' : 'warning'}`} style={{ marginLeft: '10px' }}>
                {timesheetInfo.status}
              </span>
            </p>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-icon"><i className="fas fa-arrow-left"></i></button>
          <button className="btn-icon"><i className="fas fa-arrow-right"></i></button>
          <button className="btn-icon"><i className="fas fa-list"></i></button>
          <button className="btn-icon"><i className="fas fa-search"></i></button>
          <button className="btn-icon"><i className="fas fa-cog"></i></button>
        </div>
      </div>

      <div className="detail-toolbar">
        <div className="toolbar-left">
          <button className="btn-toolbar-primary">
            <i className="fas fa-edit"></i>
            Edit
          </button>
          <button className="btn-toolbar">
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
        </div>
        <div className="toolbar-right">
          <button className="btn-toolbar">
            <i className="fas fa-cog"></i>
            Actions
          </button>
        </div>
      </div>

      <div className="detail-content">
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <span>TIMESHEET INFORMATION</span>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>TIMESHEET ID</label>
                <div className="field-value">{timesheetInfo.id}</div>
              </div>
              <div className="detail-field">
                <label>EMPLOYEE</label>
                <div className="field-value">{timesheetInfo.employee}</div>
              </div>
              <div className="detail-field">
                <label>EMPLOYEE ID</label>
                <div className="field-value">{timesheetInfo.employeeId}</div>
              </div>
              <div className="detail-field">
                <label>DATE</label>
                <div className="field-value">{timesheetInfo.date}</div>
              </div>
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{timesheetInfo.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>SHIFT</label>
                <div className="field-value">{timesheetInfo.shift}</div>
              </div>
              <div className="detail-field">
                <label>DAY TYPE</label>
                <div className="field-value">{timesheetInfo.dayType}</div>
              </div>
              <div className="detail-field">
                <label>SOURCE</label>
                <div className="field-value">{timesheetInfo.source}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <span>TIME SUMMARY</span>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>FIRST IN TIME</label>
                <div className="field-value">{timesheetInfo.firstInTime}</div>
              </div>
              <div className="detail-field">
                <label>LAST OUT TIME</label>
                <div className="field-value">{timesheetInfo.lastOutTime}</div>
              </div>
              <div className="detail-field">
                <label>TOTAL NORMAL HOURS</label>
                <div className="field-value">{timesheetInfo.totalNormalHours}</div>
              </div>
              <div className="detail-field">
                <label>TOTAL OT 1.5X HOURS</label>
                <div className="field-value">{timesheetInfo.totalOT15Hours}</div>
              </div>
              <div className="detail-field">
                <label>TOTAL OT 2.0X HOURS</label>
                <div className="field-value">{timesheetInfo.totalOT20Hours}</div>
              </div>
              <div className="detail-field">
                <label>TOTAL WEEKEND HOURS</label>
                <div className="field-value">{timesheetInfo.totalWeekendHours}</div>
              </div>
              <div className="detail-field">
                <label>TOTAL HOLIDAY HOURS</label>
                <div className="field-value">{timesheetInfo.totalHolidayHours}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <span>APPROVAL INFORMATION</span>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>STATUS</label>
                <div className="field-value">
                  <span className={`status-badge ${timesheetInfo.status === 'Approved' ? 'success' : 'warning'}`}>
                    {timesheetInfo.status}
                  </span>
                </div>
              </div>
              <div className="detail-field">
                <label>APPROVED BY</label>
                <div className="field-value">{timesheetInfo.approvedBy}</div>
              </div>
              <div className="detail-field">
                <label>APPROVED DATE</label>
                <div className="field-value">{timesheetInfo.approvedDate}</div>
              </div>
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label>REMARKS</label>
                <div className="field-value">{timesheetInfo.remarks}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'detail' ? 'active' : ''}`}
              onClick={() => setActiveTab('detail')}
            >
              Work Sessions (Detail Records)
            </button>
            <button 
              className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`}
              onClick={() => setActiveTab('system')}
            >
              System Information
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'detail' && (
              <div className="items-table-wrapper">
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>PROJECT</th>
                      <th>PROJECT CODE</th>
                      <th>IN TIME</th>
                      <th>OUT TIME</th>
                      <th>NORMAL HOURS</th>
                      <th>OT 1.5X</th>
                      <th>OT 2.0X</th>
                      <th>WEEKEND HOURS</th>
                      <th>HOLIDAY HOURS</th>
                      <th>BREAK TIME</th>
                      <th>REMARKS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detailRecords.map(record => (
                      <tr key={record.id}>
                        <td>{record.project}</td>
                        <td>{record.projectCode}</td>
                        <td>{record.inTime}</td>
                        <td>{record.outTime}</td>
                        <td>{record.normalHours}</td>
                        <td>{record.ot15Hours}</td>
                        <td>{record.ot20Hours}</td>
                        <td>{record.weekendHours}</td>
                        <td>{record.holidayHours}</td>
                        <td>{record.breakTime}</td>
                        <td>{record.remarks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'system' && (
              <div className="detail-grid" style={{ padding: '1.5rem' }}>
                <div className="detail-field">
                  <label>CREATED BY</label>
                  <div className="field-value">System</div>
                </div>
                <div className="detail-field">
                  <label>CREATED DATE</label>
                  <div className="field-value">10-Mar-2024 20:30</div>
                </div>
                <div className="detail-field">
                  <label>LAST MODIFIED BY</label>
                  <div className="field-value">HR Manager</div>
                </div>
                <div className="detail-field">
                  <label>LAST MODIFIED DATE</label>
                  <div className="field-value">11-Mar-2024 09:15</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="detail-footer">
          <button className="btn-toolbar">
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn-toolbar-primary">
            <i className="fas fa-edit"></i>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewTimesheetPoolDetail;
