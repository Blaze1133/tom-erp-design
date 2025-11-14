import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateShiftMaster = ({ shiftData, onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState(shiftData || {
    customForm: 'Shift Master Form',
    name: '',
    inactive: false,
    shiftCategory: '',
    serverScheduledIn: '',
    serverScheduledOut: '',
    subsidiary: '',
    country: 'Singapore',
    appId: '',
    scheduledIn: '1:00 pm',
    scheduledOut: '10:00 pm',
    workingHour: '09:00',
    daysWeek: 5,
    halfSunday: false,
    halfMonday: false,
    halfTuesday: false,
    halfWednesday: false,
    halfThursday: false,
    halfFriday: false,
    halfSaturday: false,
    sunday: true,
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    markAttendanceStatus: '',
    shiftType: 'Night Shift',
    searchInBefore: 30,
    searchInAfter: 29,
    searchOutBefore: 420,
    searchOutAfter: 900,
    lunchHours: 60,
    gracePeriodIn: '',
    gracePeriodOut: '',
    considerOT: '',
    halfDaySchedule: '5:00 pm',
    excludeLunch: true,
    appliedSubsidiaries: '',
    dinnerBreak: '5:00 pm',
    sameDayCheckout: true,
    sameDayCheckoutHalfDay: false
  });

  const customForms = ['Shift Master Form', 'Singapore Shift Master', 'Standard Shift Master Form'];
  const shiftCategories = ['- New -', 'Shift 1', 'Shift 2'];
  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];
  const markAttendanceOptions = ['- New -', 'A', 'AL', 'BDL', 'C', 'CC', 'CE'];
  const shiftTypes = ['- New -', 'Day Shift', 'Night Shift'];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!formData.name || !formData.subsidiary) {
      showToast('Please fill in required fields', 'error');
      return;
    }
    showToast('Shift Master saved successfully!', 'success');
    if (onSave) onSave(formData);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="create-form">
      <div className="quotation-header-clean">
        <div className="page-title-clean">
          <i className="fas fa-clock"></i>
          <div>
            <h1>Shift Master</h1>
            <p className="page-subtitle">{shiftData ? shiftData.name : 'New Shift'}</p>
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
                <label className="form-label required">CUSTOM FORM</label>
                <select className="form-control" value={formData.customForm} onChange={(e) => handleInputChange('customForm', e.target.value)}>
                  {customForms.map((form, idx) => <option key={idx} value={form}>{form}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label required">NAME</label>
                <input type="text" className="form-control" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.inactive} onChange={(e) => handleInputChange('inactive', e.target.checked)} />
                  INACTIVE
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">SHIFT CATEGORY</label>
                <select className="form-control" value={formData.shiftCategory} onChange={(e) => handleInputChange('shiftCategory', e.target.value)}>
                  <option value="">Select Category</option>
                  {shiftCategories.map((cat, idx) => <option key={idx} value={cat}>{cat}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">SERVER SCHEDULED IN</label>
                <input type="text" className="form-control" value={formData.serverScheduledIn} onChange={(e) => handleInputChange('serverScheduledIn', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">SERVER SCHEDULED OUT</label>
                <input type="text" className="form-control" value={formData.serverScheduledOut} onChange={(e) => handleInputChange('serverScheduledOut', e.target.value)} />
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
                <label className="form-label">APP ID</label>
                <input type="text" className="form-control" value={formData.appId} onChange={(e) => handleInputChange('appId', e.target.value)} disabled style={{ background: '#f5f5f5' }} />
              </div>
              <div className="form-group">
                <label className="form-label required">SCHEDULED IN</label>
                <input type="text" className="form-control" value={formData.scheduledIn} onChange={(e) => handleInputChange('scheduledIn', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label required">SCHEDULED OUT</label>
                <input type="text" className="form-control" value={formData.scheduledOut} onChange={(e) => handleInputChange('scheduledOut', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label required">WORKING HOUR</label>
                <input type="text" className="form-control" value={formData.workingHour} onChange={(e) => handleInputChange('workingHour', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">DAYS/WEEK</label>
                <input type="number" className="form-control" value={formData.daysWeek} onChange={(e) => handleInputChange('daysWeek', e.target.value)} />
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="form-section-clean">
            <div className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="form-group">
                <label className="form-label">MARK ATTENDANCE STATUS</label>
                <select className="form-control" value={formData.markAttendanceStatus} onChange={(e) => handleInputChange('markAttendanceStatus', e.target.value)}>
                  <option value="">Select Status</option>
                  {markAttendanceOptions.map((opt, idx) => <option key={idx} value={opt}>{opt}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">SHIFT TYPE</label>
                <select className="form-control" value={formData.shiftType} onChange={(e) => handleInputChange('shiftType', e.target.value)}>
                  {shiftTypes.map((type, idx) => <option key={idx} value={type}>{type}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">SEARCH PERIOD FOR IN PUNCH BEFORE SHIFT TIME</label>
                <input type="number" className="form-control" value={formData.searchInBefore} onChange={(e) => handleInputChange('searchInBefore', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">SEARCH PERIOD FOR IN PUNCH AFTER SHIFT TIME</label>
                <input type="number" className="form-control" value={formData.searchInAfter} onChange={(e) => handleInputChange('searchInAfter', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">SEARCH PERIOD FOR OUT PUNCH BEFORE SHIFT TIME</label>
                <input type="number" className="form-control" value={formData.searchOutBefore} onChange={(e) => handleInputChange('searchOutBefore', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">SEARCH PERIOD FOR OUT PUNCH AFTER SHIFT TIME</label>
                <input type="number" className="form-control" value={formData.searchOutAfter} onChange={(e) => handleInputChange('searchOutAfter', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">LUNCH/DINNER HOURS (MIN)</label>
                <input type="number" className="form-control" value={formData.lunchHours} onChange={(e) => handleInputChange('lunchHours', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">GRACE PERIOD IN (MIN)</label>
                <input type="text" className="form-control" value={formData.gracePeriodIn} onChange={(e) => handleInputChange('gracePeriodIn', e.target.value)} />
              </div>
              <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Working Days</h4>
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.sunday} onChange={(e) => handleInputChange('sunday', e.target.checked)} />
                  SUNDAY
                </label>
              </div>
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.monday} onChange={(e) => handleInputChange('monday', e.target.checked)} />
                  MONDAY
                </label>
              </div>
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.tuesday} onChange={(e) => handleInputChange('tuesday', e.target.checked)} />
                  TUESDAY
                </label>
              </div>
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.wednesday} onChange={(e) => handleInputChange('wednesday', e.target.checked)} />
                  WEDNESDAY
                </label>
              </div>
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.thursday} onChange={(e) => handleInputChange('thursday', e.target.checked)} />
                  THURSDAY
                </label>
              </div>
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.friday} onChange={(e) => handleInputChange('friday', e.target.checked)} />
                  FRIDAY
                </label>
              </div>
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.saturday} onChange={(e) => handleInputChange('saturday', e.target.checked)} />
                  SATURDAY
                </label>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="form-section-clean">
            <div className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="form-group">
                <label className="form-label">GRACE PERIOD OUT (MIN)</label>
                <input type="text" className="form-control" value={formData.gracePeriodOut} onChange={(e) => handleInputChange('gracePeriodOut', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">CONSIDER FOR OT AFTER (MIN)</label>
                <input type="text" className="form-control" value={formData.considerOT} onChange={(e) => handleInputChange('considerOT', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">HALF DAY SCHEDULE IN\OUT TIME</label>
                <input type="text" className="form-control" value={formData.halfDaySchedule} onChange={(e) => handleInputChange('halfDaySchedule', e.target.value)} />
              </div>
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.excludeLunch} onChange={(e) => handleInputChange('excludeLunch', e.target.checked)} />
                  EXCLUDE LUNCH
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">APPLIED SUBSIDIARIES</label>
                <select className="form-control" value={formData.appliedSubsidiaries} onChange={(e) => handleInputChange('appliedSubsidiaries', e.target.value)}>
                  <option value="">Select Subsidiary</option>
                  {subsidiaries.map((sub, idx) => <option key={idx} value={sub}>{sub}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">DINNER BREAK</label>
                <input type="text" className="form-control" value={formData.dinnerBreak} onChange={(e) => handleInputChange('dinnerBreak', e.target.value)} />
              </div>
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.sameDayCheckout} onChange={(e) => handleInputChange('sameDayCheckout', e.target.checked)} />
                  SAME DAY CHECK OUT ?
                </label>
              </div>
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.sameDayCheckoutHalfDay} onChange={(e) => handleInputChange('sameDayCheckoutHalfDay', e.target.checked)} />
                  SAME DAY CHECK OUT(HALF DAY)
                </label>
              </div>
              <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Half Days</h4>
              <div className="form-group">
                <label className="form-label">HALF SUNDAY</label>
                <input type="text" className="form-control" value={formData.halfSunday} onChange={(e) => handleInputChange('halfSunday', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">HALF MONDAY</label>
                <input type="text" className="form-control" value={formData.halfMonday} onChange={(e) => handleInputChange('halfMonday', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">HALF TUESDAY</label>
                <input type="text" className="form-control" value={formData.halfTuesday} onChange={(e) => handleInputChange('halfTuesday', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">HALF WEDNESDAY</label>
                <input type="text" className="form-control" value={formData.halfWednesday} onChange={(e) => handleInputChange('halfWednesday', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">HALF THURSDAY</label>
                <input type="text" className="form-control" value={formData.halfThursday} onChange={(e) => handleInputChange('halfThursday', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">HALF FRIDAY</label>
                <input type="text" className="form-control" value={formData.halfFriday} onChange={(e) => handleInputChange('halfFriday', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">HALF SATURDAY</label>
                <input type="text" className="form-control" value={formData.halfSaturday} onChange={(e) => handleInputChange('halfSaturday', e.target.value)} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default CreateShiftMaster;
