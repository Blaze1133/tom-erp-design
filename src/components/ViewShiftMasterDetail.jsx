import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewShiftMasterDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const shiftData = {
    name: '1 PM To 10 PM',
    inactive: false,
    shiftCategory: '',
    serverScheduledIn: '',
    serverScheduledOut: '',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd',
    country: 'Singapore',
    appId: '61b2d10983f6e73b3daa6bb',
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
  };

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
          <i className="fas fa-clock"></i>
          <div>
            <h1>Shift Master</h1>
            <div className="detail-subtitle">
              <span>{shiftData.name}</span>
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
              <div className="field-value">{shiftData.name}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={shiftData.inactive} disabled />
                INACTIVE
              </label>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>SHIFT CATEGORY</label>
              <div className="field-value">{shiftData.shiftCategory || '-'}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>SERVER SCHEDULED IN</label>
              <div className="field-value">{shiftData.serverScheduledIn || '-'}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>SERVER SCHEDULED OUT</label>
              <div className="field-value">{shiftData.serverScheduledOut || '-'}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>SUBSIDIARY</label>
              <div className="field-value">{shiftData.subsidiary}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>COUNTRY</label>
              <div className="field-value">{shiftData.country}</div>
            </div>
            <div className="detail-field">
              <label>APP ID</label>
              <div className="field-value">{shiftData.appId}</div>
            </div>
          </div>

          <div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>MARK ATTENDANCE STATUS</label>
              <div className="field-value">{shiftData.markAttendanceStatus || '-'}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>SHIFT TYPE</label>
              <div className="field-value">{shiftData.shiftType}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>SEARCH PERIOD FOR IN PUNCH BEFORE SHIFT TIME</label>
              <div className="field-value">{shiftData.searchInBefore}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>SEARCH PERIOD FOR IN PUNCH AFTER SHIFT TIME</label>
              <div className="field-value">{shiftData.searchInAfter}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>SEARCH PERIOD FOR OUT PUNCH BEFORE SHIFT TIME</label>
              <div className="field-value">{shiftData.searchOutBefore}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>SEARCH PERIOD FOR OUT PUNCH AFTER SHIFT TIME</label>
              <div className="field-value">{shiftData.searchOutAfter}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>LUNCH/DINNER HOURS (MIN)</label>
              <div className="field-value">{shiftData.lunchHours}</div>
            </div>
            <div className="detail-field">
              <label>GRACE PERIOD IN (MIN)</label>
              <div className="field-value">{shiftData.gracePeriodIn || '-'}</div>
            </div>
          </div>

          <div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>GRACE PERIOD OUT (MIN)</label>
              <div className="field-value">{shiftData.gracePeriodOut || '-'}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>CONSIDER FOR OT AFTER (MIN)</label>
              <div className="field-value">{shiftData.considerOT || '-'}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>HALF DAY SCHEDULE IN\OUT TIME</label>
              <div className="field-value">{shiftData.halfDaySchedule}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={shiftData.excludeLunch} disabled />
                EXCLUDE LUNCH
              </label>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>APPLIED SUBSIDIARIES</label>
              <div className="field-value">{shiftData.appliedSubsidiaries || '-'}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>DINNER BREAK</label>
              <div className="field-value">{shiftData.dinnerBreak}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={shiftData.sameDayCheckout} disabled />
                SAME DAY CHECK OUT ?
              </label>
            </div>
            <div className="detail-field">
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={shiftData.sameDayCheckoutHalfDay} disabled />
                SAME DAY CHECK OUT(HALF DAY)
              </label>
            </div>
          </div>
        </div>

        {/* Schedule Information */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginBottom: '2rem', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
          <div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>SCHEDULED IN</label>
              <div className="field-value">{shiftData.scheduledIn}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>SCHEDULED OUT</label>
              <div className="field-value">{shiftData.scheduledOut}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>WORKING HOUR</label>
              <div className="field-value">{shiftData.workingHour}</div>
            </div>
            <div className="detail-field">
              <label>DAYS/WEEK</label>
              <div className="field-value">{shiftData.daysWeek}</div>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 600 }}>Working Days</h4>
            <div className="detail-field" style={{ marginBottom: '0.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={shiftData.sunday} disabled />
                SUNDAY
              </label>
            </div>
            <div className="detail-field" style={{ marginBottom: '0.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={shiftData.monday} disabled />
                MONDAY
              </label>
            </div>
            <div className="detail-field" style={{ marginBottom: '0.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={shiftData.tuesday} disabled />
                TUESDAY
              </label>
            </div>
            <div className="detail-field" style={{ marginBottom: '0.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={shiftData.wednesday} disabled />
                WEDNESDAY
              </label>
            </div>
            <div className="detail-field" style={{ marginBottom: '0.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={shiftData.thursday} disabled />
                THURSDAY
              </label>
            </div>
            <div className="detail-field" style={{ marginBottom: '0.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={shiftData.friday} disabled />
                FRIDAY
              </label>
            </div>
            <div className="detail-field">
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={shiftData.saturday} disabled />
                SATURDAY
              </label>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 600 }}>Half Days</h4>
            <div className="detail-field" style={{ marginBottom: '0.5rem' }}>
              <label>HALF SUNDAY</label>
              <div className="field-value">{shiftData.halfSunday ? 'Yes' : 'No'}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '0.5rem' }}>
              <label>HALF MONDAY</label>
              <div className="field-value">{shiftData.halfMonday ? 'Yes' : 'No'}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '0.5rem' }}>
              <label>HALF TUESDAY</label>
              <div className="field-value">{shiftData.halfTuesday ? 'Yes' : 'No'}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '0.5rem' }}>
              <label>HALF WEDNESDAY</label>
              <div className="field-value">{shiftData.halfWednesday ? 'Yes' : 'No'}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '0.5rem' }}>
              <label>HALF THURSDAY</label>
              <div className="field-value">{shiftData.halfThursday ? 'Yes' : 'No'}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '0.5rem' }}>
              <label>HALF FRIDAY</label>
              <div className="field-value">{shiftData.halfFriday ? 'Yes' : 'No'}</div>
            </div>
            <div className="detail-field">
              <label>HALF SATURDAY</label>
              <div className="field-value">{shiftData.halfSaturday ? 'Yes' : 'No'}</div>
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
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
};

export default ViewShiftMasterDetail;
