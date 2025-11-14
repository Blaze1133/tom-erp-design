import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateLeavePayCalendar = ({ calendarData, onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('publicHoliday');
  const [formData, setFormData] = useState(calendarData || {
    name: '',
    owner: '',
    inactive: false,
    year: new Date().getFullYear(),
    startDate: '',
    endDate: '',
    monthlyCpfOwCeiling: '6,000.00',
    annualCpfAwCeiling: '102,000.00',
    calendarClose: false,
    entitlementCreated: false,
    enrollmentCreated: false,
    leaveCarryForward: false,
    leaveCalendar: false,
    financialCalendar: false,
    carryForwardLeaveExpiryDate: '',
    subsidiary: '',
    country: 'Singapore',
    dataProcessLoader: false
  });

  const [publicHolidays, setPublicHolidays] = useState([
    { id: 1, date: '6/9/2021', description: 'For Attendance Testing', appInternalId: '', isNew: false }
  ]);

  const [newHoliday, setNewHoliday] = useState({ date: '', description: '', appInternalId: '' });
  const [showAddHoliday, setShowAddHoliday] = useState(false);

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!formData.name || !formData.subsidiary) {
      showToast('Please fill in required fields', 'error');
      return;
    }
    showToast('Leave/Pay Calendar saved successfully!', 'success');
    if (onSave) onSave(formData);
  };

  const handleAddHoliday = () => {
    if (newHoliday.date && newHoliday.description) {
      setPublicHolidays([...publicHolidays, { ...newHoliday, id: Date.now(), isNew: false }]);
      setNewHoliday({ date: '', description: '', appInternalId: '' });
      setShowAddHoliday(false);
      showToast('Public holiday added successfully!', 'success');
    }
  };

  const handleCancelAdd = () => {
    setNewHoliday({ date: '', description: '', appInternalId: '' });
    setShowAddHoliday(false);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="create-form">
      <div className="quotation-header-clean">
        <div className="page-title-clean">
          <i className="fas fa-calendar-alt"></i>
          <div>
            <h1>Leave/Pay Calendar</h1>
            <p className="page-subtitle">{calendarData ? calendarData.name : 'New Calendar'}</p>
          </div>
        </div>
        <div className="header-actions-clean">
          <button className="btn-clean btn-save" onClick={handleSave}>Save</button>
          <button className="btn-clean btn-cancel" onClick={onCancel}>Cancel</button>
          <button className="btn-clean"><i className="fas fa-cog"></i> Actions</button>
        </div>
      </div>

      <div className="quotation-container-clean">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          {/* Left Column */}
          <div className="form-section-clean">
            <div className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="form-group">
                <label className="form-label required">NAME</label>
                <input type="text" className="form-control" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">OWNER</label>
                <input type="text" className="form-control" value={formData.owner} onChange={(e) => handleInputChange('owner', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.inactive} onChange={(e) => handleInputChange('inactive', e.target.checked)} />
                  INACTIVE
                </label>
              </div>
              <div className="form-group">
                <label className="form-label required">YEAR</label>
                <select className="form-control" value={formData.year} onChange={(e) => handleInputChange('year', e.target.value)}>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">START DATE</label>
                <input type="text" className="form-control" value={formData.startDate} onChange={(e) => handleInputChange('startDate', e.target.value)} placeholder="1/1/2021" />
              </div>
              <div className="form-group">
                <label className="form-label">END DATE</label>
                <input type="text" className="form-control" value={formData.endDate} onChange={(e) => handleInputChange('endDate', e.target.value)} placeholder="31/12/2021" />
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="form-section-clean">
            <div className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="form-group">
                <label className="form-label">MONTHLY CPF OW CEILING</label>
                <input type="text" className="form-control" value={formData.monthlyCpfOwCeiling} onChange={(e) => handleInputChange('monthlyCpfOwCeiling', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">ANNUAL CPF AW CEILING</label>
                <input type="text" className="form-control" value={formData.annualCpfAwCeiling} onChange={(e) => handleInputChange('annualCpfAwCeiling', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.calendarClose} onChange={(e) => handleInputChange('calendarClose', e.target.checked)} />
                  CALENDAR CLOSE
                </label>
              </div>
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.entitlementCreated} onChange={(e) => handleInputChange('entitlementCreated', e.target.checked)} />
                  ENTITLEMENT CREATED
                </label>
              </div>
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.enrollmentCreated} onChange={(e) => handleInputChange('enrollmentCreated', e.target.checked)} />
                  ENROLLMENT CREATED
                </label>
              </div>
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.leaveCarryForward} onChange={(e) => handleInputChange('leaveCarryForward', e.target.checked)} />
                  LEAVE CARRY FORWARD
                </label>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="form-section-clean">
            <div className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.leaveCalendar} onChange={(e) => handleInputChange('leaveCalendar', e.target.checked)} />
                  LEAVE CALENDAR
                </label>
              </div>
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.financialCalendar} onChange={(e) => handleInputChange('financialCalendar', e.target.checked)} />
                  FINANCIAL CALENDAR
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">CARRY FORWARD LEAVE EXPIRY DATE</label>
                <input type="text" className="form-control" value={formData.carryForwardLeaveExpiryDate} onChange={(e) => handleInputChange('carryForwardLeaveExpiryDate', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label required">SUBSIDIARY</label>
                <select className="form-control" value={formData.subsidiary} onChange={(e) => handleInputChange('subsidiary', e.target.value)}>
                  <option value="">Select Subsidiary</option>
                  {subsidiaries.map((sub, idx) => <option key={idx} value={sub}>{sub}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">COUNTRY</label>
                <select className="form-control" value={formData.country} onChange={(e) => handleInputChange('country', e.target.value)}>
                  <option value="Singapore">Singapore</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Indonesia">Indonesia</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.dataProcessLoader} onChange={(e) => handleInputChange('dataProcessLoader', e.target.checked)} />
                  DATA PROCESS LOADER
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'publicHoliday' ? 'active' : ''}`} onClick={() => setActiveTab('publicHoliday')}>Public Holiday</button>
            <button className={`tab-btn ${activeTab === 'payPeriod' ? 'active' : ''}`} onClick={() => setActiveTab('payPeriod')}>Pay Period</button>
          </div>

          <div className="tabs-content">
            {activeTab === 'publicHoliday' && (
              <div className="tab-content-wrapper" style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <button className="btn btn-secondary" onClick={() => setShowAddHoliday(true)}>New Public Holiday</button>
                </div>
                
                {showAddHoliday && (
                  <div style={{ marginBottom: '1.5rem', padding: '1rem', background: '#f9f9f9', borderRadius: '8px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label required">DATE</label>
                        <input type="text" className="form-control" value={newHoliday.date} onChange={(e) => setNewHoliday({...newHoliday, date: e.target.value})} placeholder="6/9/2021" />
                      </div>
                      <div className="form-group">
                        <label className="form-label required">DESCRIPTION</label>
                        <input type="text" className="form-control" value={newHoliday.description} onChange={(e) => setNewHoliday({...newHoliday, description: e.target.value})} placeholder="For Attendance Testing" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">APP INTERNAL ID</label>
                        <input type="text" className="form-control" value={newHoliday.appInternalId} onChange={(e) => setNewHoliday({...newHoliday, appInternalId: e.target.value})} />
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="btn btn-primary" onClick={handleAddHoliday}><i className="fas fa-check"></i> Add</button>
                      <button className="btn btn-secondary" onClick={handleCancelAdd}><i className="fas fa-times"></i> Cancel</button>
                      <button className="btn btn-secondary"><i className="fas fa-plus"></i> Insert</button>
                      <button className="btn btn-secondary"><i className="fas fa-trash"></i> Remove</button>
                    </div>
                  </div>
                )}

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
                    {publicHolidays.length === 0 ? (
                      <tr>
                        <td colSpan="4" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>No public holidays added yet</td>
                      </tr>
                    ) : (
                      publicHolidays.map((holiday) => (
                        <tr key={holiday.id}>
                          <td><button className="view-link">Edit</button></td>
                          <td>{holiday.date}</td>
                          <td>{holiday.description}</td>
                          <td>{holiday.appInternalId}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'payPeriod' && (
              <div className="tab-content-wrapper" style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <label>PAY PERIOD</label>
                  <input type="text" className="form-control" placeholder="<type then tab>" style={{ width: '200px' }} />
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-secondary">New Pay Period</button>
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
                    <tr>
                      <td className="doc-number">April</td>
                      <td></td>
                      <td></td>
                      <td className="amount">30</td>
                      <td className="amount">0</td>
                      <td>1/4/{formData.year}</td>
                      <td>30/4/{formData.year}</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td className="doc-number">August</td>
                      <td></td>
                      <td></td>
                      <td className="amount">31</td>
                      <td className="amount">0</td>
                      <td>1/8/{formData.year}</td>
                      <td>31/8/{formData.year}</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td className="doc-number">December</td>
                      <td></td>
                      <td></td>
                      <td className="amount">31</td>
                      <td className="amount">0</td>
                      <td>1/12/{formData.year}</td>
                      <td>31/12/{formData.year}</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td className="doc-number">February</td>
                      <td></td>
                      <td></td>
                      <td className="amount">28</td>
                      <td className="amount">0</td>
                      <td>1/2/{formData.year}</td>
                      <td>28/2/{formData.year}</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td className="doc-number">January</td>
                      <td></td>
                      <td></td>
                      <td className="amount">31</td>
                      <td className="amount">0</td>
                      <td>1/1/{formData.year}</td>
                      <td>31/1/{formData.year}</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td className="doc-number">July</td>
                      <td></td>
                      <td></td>
                      <td className="amount">31</td>
                      <td className="amount">0</td>
                      <td>1/7/{formData.year}</td>
                      <td>31/7/{formData.year}</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td className="doc-number">June</td>
                      <td></td>
                      <td></td>
                      <td className="amount">30</td>
                      <td className="amount">0</td>
                      <td>1/6/{formData.year}</td>
                      <td>30/6/{formData.year}</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td className="doc-number">March</td>
                      <td></td>
                      <td></td>
                      <td className="amount">31</td>
                      <td className="amount">0</td>
                      <td>1/3/{formData.year}</td>
                      <td>31/3/{formData.year}</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td className="doc-number">May</td>
                      <td></td>
                      <td></td>
                      <td className="amount">31</td>
                      <td className="amount">0</td>
                      <td>1/5/{formData.year}</td>
                      <td>31/5/{formData.year}</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td className="doc-number">November</td>
                      <td></td>
                      <td></td>
                      <td className="amount">30</td>
                      <td className="amount">0</td>
                      <td>1/11/{formData.year}</td>
                      <td>30/11/{formData.year}</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td className="doc-number">October</td>
                      <td></td>
                      <td></td>
                      <td className="amount">31</td>
                      <td className="amount">0</td>
                      <td>1/10/{formData.year}</td>
                      <td>31/10/{formData.year}</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td className="doc-number">September</td>
                      <td></td>
                      <td></td>
                      <td className="amount">30</td>
                      <td className="amount">1</td>
                      <td>1/9/{formData.year}</td>
                      <td>30/9/{formData.year}</td>
                      <td>No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default CreateLeavePayCalendar;
