import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateEmployeeLeaveEnrollment = ({ enrollmentData, onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('custom');
  const [formData, setFormData] = useState(enrollmentData || {
    employeeName: '',
    leaveCalendar: '',
    year: 2024,
    hireDate: '',
    department: '',
    citizenship: 'Foreigner',
    status: 'Confirmed Employment',
    gender: 'Male',
    yearOfService: '14.27',
    entitlementCreated: false,
    memo: '',
    leaveEffectiveDate: '',
    yearStartDate: '',
    yearEndDate: '',
    monthYear: 12,
    monthProrated: 12,
    employeeSubsidiary: '',
    country: 'Singapore',
    previousLeaveEntitlementId: '',
    addWageMonth: '',
    leaveGroup: '',
    monthsRemainToWorkInYears: 161
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!formData.employeeName) {
      showToast('Please fill in required fields', 'error');
      return;
    }
    showToast('Employee Leave Enrollment saved successfully!', 'success');
    if (onSave) onSave(formData);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="create-form">
      <div className="quotation-header-clean">
        <div className="page-title-clean">
          <i className="fas fa-user-check"></i>
          <div>
            <h1>Employee Leave Enrollment</h1>
            <p className="page-subtitle">{enrollmentData ? enrollmentData.employeeName : 'New Enrollment'}</p>
          </div>
        </div>
        <div className="header-actions-clean">
          <button className="btn-clean btn-save" onClick={handleSave}>Save</button>
          <button className="btn-clean btn-cancel" onClick={onCancel}>Cancel</button>
          <button className="btn-clean"><i className="fas fa-redo"></i> Actions</button>
        </div>
      </div>

      <div className="quotation-container-clean">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div className="form-section-clean">
            <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '0.8rem' }}>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label required">EMPLOYEE NAME</label><select className="form-control" value={formData.employeeName} onChange={(e) => handleInputChange('employeeName', e.target.value)}><option value="">Select Employee</option><option value="TMO001 Al Amin">TMO001 Al Amin</option></select></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">LEAVE CALENDAR</label><select className="form-control" value={formData.leaveCalendar} onChange={(e) => handleInputChange('leaveCalendar', e.target.value)}><option value="">Select Calendar</option><option value="TMO 2024">TMO 2024</option></select></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">YEAR</label><input type="number" className="form-control" value={formData.year} onChange={(e) => handleInputChange('year', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">HIRE DATE</label><input type="date" className="form-control" value={formData.hireDate} onChange={(e) => handleInputChange('hireDate', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">DEPARTMENT</label><input type="text" className="form-control" value={formData.department} onChange={(e) => handleInputChange('department', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">CITIZENSHIP</label><input type="text" className="form-control" value={formData.citizenship} onChange={(e) => handleInputChange('citizenship', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">STATUS</label><input type="text" className="form-control" value={formData.status} onChange={(e) => handleInputChange('status', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">GENDER</label><select className="form-control" value={formData.gender} onChange={(e) => handleInputChange('gender', e.target.value)}><option value="Male">Male</option><option value="Female">Female</option></select></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">YEAR OF SERVICE</label><input type="text" className="form-control" value={formData.yearOfService} onChange={(e) => handleInputChange('yearOfService', e.target.value)} /></div>
            </div>
          </div>
          <div className="form-section-clean">
            <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '0.8rem' }}>
              <div className="form-group" style={{ marginBottom: '0.3rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={formData.entitlementCreated} onChange={(e) => handleInputChange('entitlementCreated', e.target.checked)} />ENTITLEMENT CREATED</label></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">MEMO</label><textarea className="form-control" value={formData.memo} onChange={(e) => handleInputChange('memo', e.target.value)} rows="2" /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">LEAVE EFFECTIVE DATE (YEAR)</label><input type="date" className="form-control" value={formData.leaveEffectiveDate} onChange={(e) => handleInputChange('leaveEffectiveDate', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">YEAR START DATE</label><input type="date" className="form-control" value={formData.yearStartDate} onChange={(e) => handleInputChange('yearStartDate', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">YEAR END DATE</label><input type="date" className="form-control" value={formData.yearEndDate} onChange={(e) => handleInputChange('yearEndDate', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">MONTH(YEAR)</label><input type="number" className="form-control" value={formData.monthYear} onChange={(e) => handleInputChange('monthYear', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">MONTH(PRORATED)</label><input type="number" className="form-control" value={formData.monthProrated} onChange={(e) => handleInputChange('monthProrated', e.target.value)} /></div>
            </div>
          </div>
          <div className="form-section-clean">
            <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '0.8rem' }}>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">EMPLOYEE SUBSIDIARY</label><input type="text" className="form-control" value={formData.employeeSubsidiary} onChange={(e) => handleInputChange('employeeSubsidiary', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">COUNTRY</label><select className="form-control" value={formData.country} onChange={(e) => handleInputChange('country', e.target.value)}><option value="Singapore">Singapore</option><option value="Malaysia">Malaysia</option><option value="Indonesia">Indonesia</option></select></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">PREVIOUS LEAVE ENTITLEMENT ID</label><input type="text" className="form-control" value={formData.previousLeaveEntitlementId} onChange={(e) => handleInputChange('previousLeaveEntitlementId', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">ADD WAGE MONTH</label><input type="text" className="form-control" value={formData.addWageMonth} onChange={(e) => handleInputChange('addWageMonth', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">LEAVE GROUP</label><input type="text" className="form-control" value={formData.leaveGroup} onChange={(e) => handleInputChange('leaveGroup', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">MONTHS REMAIN TO WORK IN YEARS</label><input type="number" className="form-control" value={formData.monthsRemainToWorkInYears} onChange={(e) => handleInputChange('monthsRemainToWorkInYears', e.target.value)} /></div>
            </div>
          </div>
        </div>

        <div className="detail-tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`} onClick={() => setActiveTab('custom')}>Custom</button>
            <button className={`tab-btn ${activeTab === 'notes' ? 'active' : ''}`} onClick={() => setActiveTab('notes')}>Notes</button>
          </div>
          <div className="tabs-content">
            {activeTab === 'custom' && (
              <div className="tab-content-wrapper" style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-primary"><i className="fas fa-check"></i> Add</button>
                  <button className="btn btn-secondary"><i className="fas fa-times"></i> Cancel</button>
                  <button className="btn btn-secondary"><i className="fas fa-plus"></i> Insert</button>
                  <button className="btn btn-secondary"><i className="fas fa-trash"></i> Remove</button>
                </div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>LAST MODIFIED</th>
                      <th>LEAVE TYPE</th>
                      <th>FULL YEAR ENTITLEMENT</th>
                      <th>LEAVE ENTITLEMENT TODATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="4" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                        No records added yet
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 'notes' && (<div className="tab-content-wrapper" style={{ padding: '1.5rem' }}><p style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>No notes available</p></div>)}
          </div>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default CreateEmployeeLeaveEnrollment;
