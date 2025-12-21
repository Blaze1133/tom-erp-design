import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCalendarDetail = ({ onBack, calendarData, onNewPublicHoliday, onNewPayPeriod }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('public-holiday');
  const [showAddHoliday, setShowAddHoliday] = useState(false);
  const [holidayForm, setHolidayForm] = useState({
    date: '',
    description: '',
    appInternalId: ''
  });
  const [editingHoliday, setEditingHoliday] = useState(null);
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [optionsCollapsed, setOptionsCollapsed] = useState(false);
  const [showAddPayPeriod, setShowAddPayPeriod] = useState(false);
  const [payPeriodForm, setPayPeriodForm] = useState({
    name: '',
    startDate: '',
    endDate: '',
    calendarDays: '',
    publicHoliday: '0',
    monthStartDate: '',
    monthEndDate: '',
    closePeriod: false
  });

  const data = calendarData || {
    name: '2021 (MEP)',
    owner: 'Infocom IT Solutions Pte Ltd',
    year: 2021,
    startDate: '1/1/2021',
    endDate: '31/12/2021',
    monthlyCpfCeiling: '6,000.00',
    annualCpfAwCeiling: '102,000.00',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    country: 'Singapore',
    inactive: false,
    calendarClose: false,
    entitlementCreated: false,
    enrollmentCreated: false,
    leaveCarryForward: false,
    dataProcessLoader: true,
    publicHolidays: [
      {
        id: 1,
        date: '6/9/2021',
        description: 'For Attendance Testing',
        appInternalId: ''
      }
    ]
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleBack = () => {
    if (onBack) onBack();
  };

  const handleAddHoliday = () => {
    setShowAddHoliday(true);
    setEditingHoliday(null);
    setHolidayForm({
      date: '',
      description: '',
      appInternalId: ''
    });
  };

  const handleEditHoliday = (holiday) => {
    setEditingHoliday(holiday);
    setShowAddHoliday(true);
    setHolidayForm({
      date: holiday.date,
      description: holiday.description,
      appInternalId: holiday.appInternalId || ''
    });
  };

  const handleSaveHoliday = () => {
    if (!holidayForm.date || !holidayForm.description) {
      showToast('Please fill in Date and Description', 'error');
      return;
    }

    if (editingHoliday) {
      showToast('Public Holiday updated successfully', 'success');
    } else {
      showToast('Public Holiday added successfully', 'success');
    }
    
    setShowAddHoliday(false);
    setHolidayForm({
      date: '',
      description: '',
      appInternalId: ''
    });
  };

  const handleCancelHoliday = () => {
    setShowAddHoliday(false);
    setEditingHoliday(null);
    setHolidayForm({
      date: '',
      description: '',
      appInternalId: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHolidayForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayPeriodInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPayPeriodForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAddPayPeriod = () => {
    setShowAddPayPeriod(true);
    setPayPeriodForm({
      name: '',
      startDate: '',
      endDate: '',
      calendarDays: '',
      publicHoliday: '0',
      monthStartDate: '',
      monthEndDate: '',
      closePeriod: false
    });
  };

  const handleSavePayPeriod = () => {
    if (!payPeriodForm.name) {
      showToast('Please fill in Name', 'error');
      return;
    }
    showToast('Pay Period saved successfully', 'success');
    setShowAddPayPeriod(false);
  };

  const handleCancelPayPeriod = () => {
    setShowAddPayPeriod(false);
    setPayPeriodForm({
      name: '',
      startDate: '',
      endDate: '',
      calendarDays: '',
      publicHoliday: '0',
      monthStartDate: '',
      monthEndDate: '',
      closePeriod: false
    });
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-calendar-alt"></i>
          <div>
            <h1>Leave/Pay Calendar</h1>
            <div className="detail-subtitle">
              <span>{data.name}</span>
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
          <button className="btn-action" onClick={handleBack}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
          <button className="btn-action">More</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar-primary">
          <i className="fas fa-edit"></i>
          Edit
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-times"></i>
          Close Calendar
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-cog"></i>
          Actions
        </button>
      </div>

      <div className="detail-content">
        <div className={`detail-section ${primaryInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setPrimaryInfoCollapsed(!primaryInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Calendar Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>NAME</label>
                <div className="field-value">{data.name}</div>
              </div>
              <div className="detail-field">
                <label>MONTHLY CPF OW CEILING</label>
                <div className="field-value">{data.monthlyCpfCeiling}</div>
              </div>
              <div className="detail-field">
                <label>OWNER</label>
                <div className="field-value">{data.owner}</div>
              </div>
              <div className="detail-field">
                <label>ANNUAL CPF AW CEILING</label>
                <div className="field-value">{data.annualCpfAwCeiling}</div>
              </div>
              <div className="detail-field">
                <label>YEAR</label>
                <div className="field-value">{data.year}</div>
              </div>
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{data.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>START DATE</label>
                <div className="field-value">{data.startDate}</div>
              </div>
              <div className="detail-field">
                <label>END DATE</label>
                <div className="field-value">{data.endDate}</div>
              </div>
              <div className="detail-field">
                <label>COUNTRY</label>
                <div className="field-value">{data.country}</div>
              </div>
              <div className="detail-field">
                <label>DATA PROCESS LOADER</label>
                <div className="field-value">
                  <i className={`fas ${data.dataProcessLoader ? 'fa-check-square' : 'fa-square'}`}></i>
                </div>
              </div>
            </div>

          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        <div className={`detail-section ${optionsCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setOptionsCollapsed(!optionsCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Calendar Options</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>LEAVE CALENDAR</label>
                <div className="field-value">
                  <input type="checkbox" checked={false} readOnly />
                </div>
              </div>
              <div className="detail-field">
                <label>CALENDAR CLOSE</label>
                <div className="field-value">
                  <input type="checkbox" checked={data.calendarClose} readOnly />
                </div>
              </div>
              <div className="detail-field">
                <label>FINANCIAL CALENDAR</label>
                <div className="field-value">
                  <input type="checkbox" checked={false} readOnly />
                </div>
              </div>
              <div className="detail-field">
                <label>ENTITLEMENT CREATED</label>
                <div className="field-value">
                  <input type="checkbox" checked={data.entitlementCreated} readOnly />
                </div>
              </div>
              <div className="detail-field">
                <label>CARRY FORWARD LEAVE EXPIRY DATE</label>
                <div className="field-value">-</div>
              </div>
              <div className="detail-field">
                <label>ENROLLMENT CREATED</label>
                <div className="field-value">
                  <input type="checkbox" checked={data.enrollmentCreated} readOnly />
                </div>
              </div>
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label>LEAVE CARRY FORWARD</label>
                <div className="field-value">
                  <input type="checkbox" checked={data.leaveCarryForward} readOnly />
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        <div className="detail-tabs" style={{ marginTop: '0' }}>
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'public-holiday' ? 'active' : ''}`} onClick={() => setActiveTab('public-holiday')}>Public Holiday</button>
            <button className={`tab-btn ${activeTab === 'pay-period' ? 'active' : ''}`} onClick={() => setActiveTab('pay-period')}>Pay Period</button>
          </div>

              {activeTab === 'public-holiday' && (
                <div className="tab-content" style={{ padding: '1.5rem', background: '#f5f5f5' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <button 
                      className="btn-new-transaction"
                      onClick={handleAddHoliday}
                    >
                      <i className="fas fa-plus"></i> New Public Holiday
                    </button>
                  </div>

                  <div className="items-table-container">
                    <table className="items-table" style={{ background: 'white' }}>
                      <thead>
                        <tr style={{ background: '#e8e8e8' }}>
                          <th style={{width: '80px'}}>EDIT</th>
                          <th style={{minWidth: '150px'}}>DATE</th>
                          <th style={{minWidth: '300px'}}>DESCRIPTION</th>
                          <th style={{minWidth: '150px'}}>APP INTERNAL ID</th>
                        </tr>
                      </thead>
                      <tbody>
                        {showAddHoliday && (
                          <tr style={{ background: '#fffbea' }}>
                            <td>
                              <button className="view-link">New</button>
                            </td>
                            <td>
                              <input 
                                type="date"
                                name="date"
                                value={holidayForm.date}
                                onChange={handleInputChange}
                                className="form-control"
                                style={{ width: '100%', border: '1px solid #ddd' }}
                              />
                            </td>
                            <td>
                              <input 
                                type="text"
                                name="description"
                                value={holidayForm.description}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Enter description"
                                style={{ width: '100%', border: '1px solid #ddd' }}
                              />
                            </td>
                            <td>
                              <input 
                                type="text"
                                name="appInternalId"
                                value={holidayForm.appInternalId}
                                onChange={handleInputChange}
                                className="form-control"
                                style={{ width: '100%', border: '1px solid #ddd' }}
                              />
                            </td>
                          </tr>
                        )}
                        {data.publicHolidays.map((holiday) => (
                          <tr key={holiday.id} style={{ background: '#fff' }}>
                            <td>
                              <button 
                                className="view-link"
                                onClick={() => handleEditHoliday(holiday)}
                              >
                                Edit
                              </button>
                            </td>
                            <td>{holiday.date}</td>
                            <td>{holiday.description}</td>
                            <td>{holiday.appInternalId || '-'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  {showAddHoliday && (
                    <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                      <button 
                        className="btn-toolbar-primary"
                        onClick={handleSaveHoliday}
                      >
                        <i className="fas fa-save"></i> Save
                      </button>
                      <button 
                        className="btn-toolbar"
                        onClick={handleCancelHoliday}
                      >
                        <i className="fas fa-times"></i> Cancel
                      </button>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'pay-period' && (
                <div className="tab-content" style={{ padding: '1.5rem', background: '#f5f5f5' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <button 
                      className="btn-new-transaction"
                      onClick={handleAddPayPeriod}
                    >
                      <i className="fas fa-plus"></i> New Pay Period
                    </button>
                  </div>

                  <div className="items-table-container">
                    <table className="items-table" style={{ background: 'white' }}>
                      <thead>
                        <tr style={{ background: '#e8e8e8' }}>
                          <th style={{minWidth: '150px'}}>NAME</th>
                          <th style={{minWidth: '120px'}}>START DATE</th>
                          <th style={{minWidth: '120px'}}>END DATE</th>
                          <th style={{minWidth: '120px'}}>CALENDER DAYS</th>
                          <th style={{minWidth: '120px'}}>PUBLIC HOLIDAY</th>
                          <th style={{minWidth: '150px'}}>MONTH START DATE</th>
                          <th style={{minWidth: '150px'}}>MONTH END DATE</th>
                          <th style={{minWidth: '120px'}}>CLOSE PERIOD</th>
                          <th style={{width: '80px'}}>EDIT</th>
                        </tr>
                      </thead>
                      <tbody>
                        {showAddPayPeriod && (
                          <tr style={{ background: '#fffbea' }}>
                            <td>
                              <input 
                                type="text"
                                name="name"
                                value={payPeriodForm.name}
                                onChange={handlePayPeriodInputChange}
                                className="form-control"
                                placeholder="e.g., January"
                                style={{ width: '100%', border: '1px solid #ddd' }}
                              />
                            </td>
                            <td>
                              <input 
                                type="date"
                                name="startDate"
                                value={payPeriodForm.startDate}
                                onChange={handlePayPeriodInputChange}
                                className="form-control"
                                style={{ width: '100%', border: '1px solid #ddd' }}
                              />
                            </td>
                            <td>
                              <input 
                                type="date"
                                name="endDate"
                                value={payPeriodForm.endDate}
                                onChange={handlePayPeriodInputChange}
                                className="form-control"
                                style={{ width: '100%', border: '1px solid #ddd' }}
                              />
                            </td>
                            <td>
                              <input 
                                type="number"
                                name="calendarDays"
                                value={payPeriodForm.calendarDays}
                                onChange={handlePayPeriodInputChange}
                                className="form-control"
                                style={{ width: '100%', border: '1px solid #ddd' }}
                              />
                            </td>
                            <td>
                              <input 
                                type="number"
                                name="publicHoliday"
                                value={payPeriodForm.publicHoliday}
                                onChange={handlePayPeriodInputChange}
                                className="form-control"
                                style={{ width: '100%', border: '1px solid #ddd' }}
                              />
                            </td>
                            <td>
                              <input 
                                type="date"
                                name="monthStartDate"
                                value={payPeriodForm.monthStartDate}
                                onChange={handlePayPeriodInputChange}
                                className="form-control"
                                style={{ width: '100%', border: '1px solid #ddd' }}
                              />
                            </td>
                            <td>
                              <input 
                                type="date"
                                name="monthEndDate"
                                value={payPeriodForm.monthEndDate}
                                onChange={handlePayPeriodInputChange}
                                className="form-control"
                                style={{ width: '100%', border: '1px solid #ddd' }}
                              />
                            </td>
                            <td>
                              <input 
                                type="checkbox"
                                name="closePeriod"
                                checked={payPeriodForm.closePeriod}
                                onChange={handlePayPeriodInputChange}
                              />
                            </td>
                            <td>
                              <button className="view-link">New</button>
                            </td>
                          </tr>
                        )}
                        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                          <tr key={month} style={{ background: '#fff' }}>
                            <td><a href="#" style={{ color: '#4a90e2' }}>{month}</a></td>
                            <td></td>
                            <td></td>
                            <td>{[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][index]}</td>
                            <td>0</td>
                            <td>1/{index + 1}/2021</td>
                            <td>{[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][index]}/{index + 1}/2021</td>
                            <td>No</td>
                            <td>
                              <button className="view-link">
                                Edit
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  {showAddPayPeriod && (
                    <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                      <button 
                        className="btn-toolbar-primary"
                        onClick={handleSavePayPeriod}
                      >
                        <i className="fas fa-save"></i> Save
                      </button>
                      <button 
                        className="btn-toolbar"
                        onClick={handleCancelPayPeriod}
                      >
                        <i className="fas fa-times"></i> Cancel
                      </button>
                    </div>
                  )}
                </div>
              )}
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

export default ViewCalendarDetail;
