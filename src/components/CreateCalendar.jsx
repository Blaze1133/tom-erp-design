import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateCalendar = ({ onBack, onSave, calendarData }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [optionsCollapsed, setOptionsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('public-holiday');
  const [showAddHoliday, setShowAddHoliday] = useState(false);
  const [showAddPayPeriod, setShowAddPayPeriod] = useState(false);
  const [holidayForm, setHolidayForm] = useState({
    date: '',
    description: '',
    appInternalId: ''
  });
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
  const [formData, setFormData] = useState({
    name: '',
    owner: 'Infocom IT Solutions Pte Ltd',
    year: new Date().getFullYear(),
    startDate: '',
    endDate: '',
    monthlyCpfCeiling: '6,000.00',
    annualCpfAwCeiling: '102,000.00',
    subsidiary: '',
    country: 'Singapore',
    inactive: false,
    leaveCalendar: false,
    financialCalendar: false,
    carryForwardLeaveExpiryDate: '',
    calendarClose: false,
    entitlementCreated: false,
    enrollmentCreated: false,
    leaveCarryForward: false,
    dataProcessLoader: true,
    publicHolidays: [],
    payPeriods: [],
    ...(calendarData || {}),
    publicHolidays: calendarData?.publicHolidays || [],
    payPeriods: calendarData?.payPeriods || []
  });

  const subsidiaries = [
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd',
    'Tech Offshore Marine (DQ) Pte Ltd',
    'Tech Electric & Automation Pte Ltd',
    'Tech Offshore Marine (SV) Pte Ltd'
  ];

  const countries = [
    'Singapore',
    'Malaysia',
    'Indonesia',
    'Thailand',
    'Vietnam'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleHolidayInputChange = (e) => {
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

  const handleAddHoliday = () => {
    setShowAddHoliday(true);
    setHolidayForm({ date: '', description: '', appInternalId: '' });
  };

  const handleSaveHoliday = () => {
    if (!holidayForm.date || !holidayForm.description) {
      showToast('Please fill in Date and Description', 'error');
      return;
    }
    setFormData(prev => ({
      ...prev,
      publicHolidays: [...prev.publicHolidays, { ...holidayForm, id: Date.now() }]
    }));
    setShowAddHoliday(false);
    setHolidayForm({ date: '', description: '', appInternalId: '' });
    showToast('Public Holiday added', 'success');
  };

  const handleCancelHoliday = () => {
    setShowAddHoliday(false);
    setHolidayForm({ date: '', description: '', appInternalId: '' });
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
    setFormData(prev => ({
      ...prev,
      payPeriods: [...prev.payPeriods, { ...payPeriodForm, id: Date.now() }]
    }));
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
    showToast('Pay Period added', 'success');
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

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleSave = () => {
    if (!formData.name || !formData.subsidiary || !formData.startDate || !formData.endDate) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    showToast('Leave/Pay Calendar saved successfully', 'success');
    setTimeout(() => {
      if (onSave) onSave(formData);
      if (onBack) onBack();
    }, 1500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (onBack) onBack();
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
              <span>{calendarData ? 'Edit Calendar' : 'New Calendar'}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={handleCancel}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-action">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-action" onClick={handleCancel}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
          <button className="btn-action">More</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar" onClick={handleCancel}>
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

      <div className="detail-content">
        <div className={`detail-section ${primaryInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setPrimaryInfoCollapsed(!primaryInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Calendar Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>NAME <span style={{ color: 'red' }}>*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="e.g., 2024 (MEP)"
                />
              </div>
              <div className="detail-field">
                <label>MONTHLY CPF OW CEILING</label>
                <input
                  type="text"
                  name="monthlyCpfCeiling"
                  value={formData.monthlyCpfCeiling}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="detail-field">
                <label>OWNER</label>
                <input
                  type="text"
                  name="owner"
                  value={formData.owner}
                  onChange={handleInputChange}
                  className="form-control"
                  readOnly
                />
              </div>
              <div className="detail-field">
                <label>ANNUAL CPF AW CEILING</label>
                <input
                  type="text"
                  name="annualCpfAwCeiling"
                  value={formData.annualCpfAwCeiling}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="detail-field">
                <label>YEAR <span style={{ color: 'red' }}>*</span></label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  {[2021, 2022, 2023, 2024, 2025, 2026].map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <div className="detail-field">
                <label>SUBSIDIARY <span style={{ color: 'red' }}>*</span></label>
                <select
                  name="subsidiary"
                  value={formData.subsidiary}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="">Select Subsidiary</option>
                  {subsidiaries.map(sub => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>
              <div className="detail-field">
                <label>START DATE <span style={{ color: 'red' }}>*</span></label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="detail-field">
                <label>COUNTRY</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div className="detail-field">
                <label>END DATE <span style={{ color: 'red' }}>*</span></label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="detail-field">
                <label>INACTIVE</label>
                <input
                  type="checkbox"
                  name="inactive"
                  checked={formData.inactive}
                  onChange={handleInputChange}
                />
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
                <input
                  type="checkbox"
                  name="leaveCalendar"
                  checked={formData.leaveCalendar}
                  onChange={handleInputChange}
                />
              </div>
              <div className="detail-field">
                <label>CALENDAR CLOSE</label>
                <input
                  type="checkbox"
                  name="calendarClose"
                  checked={formData.calendarClose}
                  onChange={handleInputChange}
                />
              </div>
              <div className="detail-field">
                <label>FINANCIAL CALENDAR</label>
                <input
                  type="checkbox"
                  name="financialCalendar"
                  checked={formData.financialCalendar}
                  onChange={handleInputChange}
                />
              </div>
              <div className="detail-field">
                <label>ENTITLEMENT CREATED</label>
                <input
                  type="checkbox"
                  name="entitlementCreated"
                  checked={formData.entitlementCreated}
                  onChange={handleInputChange}
                />
              </div>
              <div className="detail-field">
                <label>CARRY FORWARD LEAVE EXPIRY DATE</label>
                <input
                  type="date"
                  name="carryForwardLeaveExpiryDate"
                  value={formData.carryForwardLeaveExpiryDate}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="detail-field">
                <label>ENROLLMENT CREATED</label>
                <input
                  type="checkbox"
                  name="enrollmentCreated"
                  checked={formData.enrollmentCreated}
                  onChange={handleInputChange}
                />
              </div>
              <div className="detail-field">
                <label>LEAVE CARRY FORWARD</label>
                <input
                  type="checkbox"
                  name="leaveCarryForward"
                  checked={formData.leaveCarryForward}
                  onChange={handleInputChange}
                />
              </div>
              <div className="detail-field">
                <label>DATA PROCESS LOADER</label>
                <input
                  type="checkbox"
                  name="dataProcessLoader"
                  checked={formData.dataProcessLoader}
                  onChange={handleInputChange}
                />
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
                            onChange={handleHolidayInputChange}
                            className="form-control"
                            style={{ width: '100%', border: '1px solid #ddd' }}
                          />
                        </td>
                        <td>
                          <input 
                            type="text"
                            name="description"
                            value={holidayForm.description}
                            onChange={handleHolidayInputChange}
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
                            onChange={handleHolidayInputChange}
                            className="form-control"
                            style={{ width: '100%', border: '1px solid #ddd' }}
                          />
                        </td>
                      </tr>
                    )}
                    {formData.publicHolidays.map((holiday) => (
                      <tr key={holiday.id} style={{ background: '#fff' }}>
                        <td>
                          <button className="view-link">
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
                    {formData.payPeriods.map((period) => (
                      <tr key={period.id} style={{ background: '#fff' }}>
                        <td><a href="#" style={{ color: '#4a90e2' }}>{period.name}</a></td>
                        <td>{period.startDate}</td>
                        <td>{period.endDate}</td>
                        <td>{period.calendarDays}</td>
                        <td>{period.publicHoliday}</td>
                        <td>{period.monthStartDate}</td>
                        <td>{period.monthEndDate}</td>
                        <td>{period.closePeriod ? 'Yes' : 'No'}</td>
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

export default CreateCalendar;
