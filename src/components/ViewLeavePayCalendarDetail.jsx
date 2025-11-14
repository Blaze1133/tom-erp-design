import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewLeavePayCalendarDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('publicHoliday');

  const calendarData = {
    name: '2021 (MEP)',
    owner: 'NuVista Consultant 3',
    inactive: false,
    year: 2021,
    startDate: '1/1/2021',
    endDate: '31/12/2021',
    monthlyCpfOwCeiling: '6,000.00',
    annualCpfAwCeiling: '102,000.00',
    calendarClose: false,
    entitlementCreated: false,
    enrollmentCreated: false,
    leaveCarryForward: false,
    leaveCalendar: false,
    financialCalendar: false,
    carryForwardLeaveExpiryDate: '',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    country: 'Singapore',
    dataProcessLoader: true
  };

  const publicHolidays = [
    { id: 1, date: '6/9/2021', description: 'For Attendance Testing', appInternalId: '' }
  ];

  const payPeriods = [
    { id: 1, name: 'April', startDate: '', endDate: '', calendarDays: 30, publicHoliday: 0, monthStartDate: '1/4/2021', monthEndDate: '30/4/2021', closePeriod: 'No' },
    { id: 2, name: 'August', startDate: '', endDate: '', calendarDays: 31, publicHoliday: 0, monthStartDate: '1/8/2021', monthEndDate: '31/8/2021', closePeriod: 'No' },
    { id: 3, name: 'December', startDate: '', endDate: '', calendarDays: 31, publicHoliday: 0, monthStartDate: '1/12/2021', monthEndDate: '31/12/2021', closePeriod: 'No' },
    { id: 4, name: 'February', startDate: '', endDate: '', calendarDays: 28, publicHoliday: 0, monthStartDate: '1/2/2021', monthEndDate: '28/2/2021', closePeriod: 'No' },
    { id: 5, name: 'January', startDate: '', endDate: '', calendarDays: 31, publicHoliday: 0, monthStartDate: '1/1/2021', monthEndDate: '31/1/2021', closePeriod: 'No' },
    { id: 6, name: 'July', startDate: '', endDate: '', calendarDays: 31, publicHoliday: 0, monthStartDate: '1/7/2021', monthEndDate: '31/7/2021', closePeriod: 'No' },
    { id: 7, name: 'June', startDate: '', endDate: '', calendarDays: 30, publicHoliday: 0, monthStartDate: '1/6/2021', monthEndDate: '30/6/2021', closePeriod: 'No' },
    { id: 8, name: 'March', startDate: '', endDate: '', calendarDays: 31, publicHoliday: 0, monthStartDate: '1/3/2021', monthEndDate: '31/3/2021', closePeriod: 'No' },
    { id: 9, name: 'May', startDate: '', endDate: '', calendarDays: 31, publicHoliday: 0, monthStartDate: '1/5/2021', monthEndDate: '31/5/2021', closePeriod: 'No' },
    { id: 10, name: 'November', startDate: '', endDate: '', calendarDays: 30, publicHoliday: 0, monthStartDate: '1/11/2021', monthEndDate: '30/11/2021', closePeriod: 'No' },
    { id: 11, name: 'October', startDate: '', endDate: '', calendarDays: 31, publicHoliday: 0, monthStartDate: '1/10/2021', monthEndDate: '31/10/2021', closePeriod: 'No' },
    { id: 12, name: 'September', startDate: '', endDate: '', calendarDays: 30, publicHoliday: 1, monthStartDate: '1/9/2021', monthEndDate: '30/9/2021', closePeriod: 'No' }
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-calendar-alt"></i>
          <div>
            <h1>Leave/Pay Calendar</h1>
            <div className="detail-subtitle">
              <span>{calendarData.name}</span>
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
          <button className="btn-action">
            <i className="fas fa-question-circle"></i>
          </button>
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
        <button className="btn-toolbar">Close Calendar</button>
        <button className="btn-toolbar">
          <i className="fas fa-bell"></i>
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
        {/* Main Information Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginBottom: '2rem', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
          <div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>NAME</label>
              <div className="field-value">{calendarData.name}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>OWNER</label>
              <div className="field-value">{calendarData.owner}</div>
            </div>
            <div className="detail-field">
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={calendarData.inactive} disabled />
                INACTIVE
              </label>
            </div>
            <div className="detail-field" style={{ marginTop: '1rem' }}>
              <label>YEAR</label>
              <div className="field-value">{calendarData.year}</div>
            </div>
            <div className="detail-field" style={{ marginTop: '1rem' }}>
              <label>START DATE</label>
              <div className="field-value">{calendarData.startDate}</div>
            </div>
            <div className="detail-field" style={{ marginTop: '1rem' }}>
              <label>END DATE</label>
              <div className="field-value">{calendarData.endDate}</div>
            </div>
          </div>

          <div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>MONTHLY CPF OW CEILING</label>
              <div className="field-value">{calendarData.monthlyCpfOwCeiling}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>ANNUAL CPF AW CEILING</label>
              <div className="field-value">{calendarData.annualCpfAwCeiling}</div>
            </div>
            <div className="detail-field">
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={calendarData.calendarClose} disabled />
                CALENDAR CLOSE
              </label>
            </div>
            <div className="detail-field">
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={calendarData.entitlementCreated} disabled />
                ENTITLEMENT CREATED
              </label>
            </div>
            <div className="detail-field">
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={calendarData.enrollmentCreated} disabled />
                ENROLLMENT CREATED
              </label>
            </div>
            <div className="detail-field">
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={calendarData.leaveCarryForward} disabled />
                LEAVE CARRY FORWARD
              </label>
            </div>
          </div>

          <div>
            <div className="detail-field">
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={calendarData.leaveCalendar} disabled />
                LEAVE CALENDAR
              </label>
            </div>
            <div className="detail-field">
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={calendarData.financialCalendar} disabled />
                FINANCIAL CALENDAR
              </label>
            </div>
            <div className="detail-field" style={{ marginTop: '1rem' }}>
              <label>CARRY FORWARD LEAVE EXPIRY DATE</label>
              <div className="field-value">{calendarData.carryForwardLeaveExpiryDate || '-'}</div>
            </div>
            <div className="detail-field" style={{ marginTop: '1rem' }}>
              <label>SUBSIDIARY</label>
              <div className="field-value">{calendarData.subsidiary}</div>
            </div>
            <div className="detail-field" style={{ marginTop: '1rem' }}>
              <label>COUNTRY</label>
              <div className="field-value">{calendarData.country}</div>
            </div>
            <div className="detail-field" style={{ marginTop: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={calendarData.dataProcessLoader} disabled />
                DATA PROCESS LOADER
              </label>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'publicHoliday' ? 'active' : ''}`}
              onClick={() => setActiveTab('publicHoliday')}
            >
              Public Holiday
            </button>
            <button 
              className={`tab-btn ${activeTab === 'payPeriod' ? 'active' : ''}`}
              onClick={() => setActiveTab('payPeriod')}
            >
              Pay Period
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'publicHoliday' && (
              <div className="tab-content-wrapper" style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <label>VIEW</label>
                  <select className="form-control" style={{ width: '200px' }}>
                    <option>Default View</option>
                  </select>
                  <label>PUBLIC HOLIDAY</label>
                  <input type="text" className="form-control" placeholder="<type then tab>" style={{ width: '200px' }} />
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-secondary">New Public Holiday</button>
                  <button className="btn btn-secondary">Attach</button>
                  <button className="btn btn-secondary">Customize View</button>
                </div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>EDIT</th>
                      <th>DATE</th>
                      <th>DESCRIPTION</th>
                      <th>APP INTERNAL ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {publicHolidays.map((holiday) => (
                      <tr key={holiday.id}>
                        <td>
                          <button className="view-link">Edit</button>
                        </td>
                        <td>{holiday.date}</td>
                        <td>{holiday.description}</td>
                        <td>{holiday.appInternalId}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'payPeriod' && (
              <div className="tab-content-wrapper" style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ marginRight: '1rem' }}>PAY PERIOD</label>
                  <input type="text" className="form-control" placeholder="<type then tab>" style={{ width: '200px', display: 'inline-block' }} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <button className="btn btn-secondary" style={{ marginRight: '0.5rem' }}>New Pay Period</button>
                  <button className="btn btn-secondary">Attach</button>
                </div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>NAME ▲</th>
                      <th>START DATE</th>
                      <th>END DATE</th>
                      <th>CALENDER DAYS</th>
                      <th>PUBLIC HOLIDAY</th>
                      <th>MONTH START DATE</th>
                      <th>MONTH END DATE</th>
                      <th>CLOSE PERIOD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payPeriods.map((period) => (
                      <tr key={period.id}>
                        <td className="doc-number">{period.name}</td>
                        <td>{period.startDate}</td>
                        <td>{period.endDate}</td>
                        <td className="amount">{period.calendarDays}</td>
                        <td className="amount">{period.publicHoliday}</td>
                        <td>{period.monthStartDate}</td>
                        <td>{period.monthEndDate}</td>
                        <td>{period.closePeriod}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
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
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
};

export default ViewLeavePayCalendarDetail;
