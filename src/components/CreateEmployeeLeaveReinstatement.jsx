import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateEmployeeLeaveReinstatement = ({ reinstatementData, onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState(reinstatementData || {
    employeeName: '',
    calendar: '',
    refLeaveApplication: '',
    leaveType: '',
    approvedLeaveDays: '',
    reinstatementDays: '',
    remark: '',
    entitleRecord: '',
    applicationStatus: 'Applied',
    reinstatUpdated: false
  });

  const leaveTypes = [
    '- New -',
    'Annual Leave Executive',
    'Annual Leave Staff',
    'Annual Leave Workers',
    'Birthday Leave',
    'Childcare Leave',
    'Comp off'
  ];

  const applicationStatuses = [
    'Applied',
    'Approved',
    'Rejected',
    'Pending'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!formData.employeeName || !formData.leaveType) {
      showToast('Please fill in required fields', 'error');
      return;
    }
    showToast('Employee Leave Reinstatement saved successfully!', 'success');
    if (onSave) onSave(formData);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="create-form">
      <div className="quotation-header-clean">
        <div className="page-title-clean">
          <i className="fas fa-undo"></i>
          <div>
            <h1>Employee Leave Reinstatement</h1>
            <p className="page-subtitle">{reinstatementData ? reinstatementData.employeeName : 'New Reinstatement'}</p>
          </div>
        </div>
        <div className="header-actions-clean">
          <button className="btn-clean btn-save" onClick={handleSave}>Save</button>
          <button className="btn-clean btn-save" style={{ marginLeft: '0.5rem' }}>
            <i className="fas fa-chevron-down"></i>
          </button>
          <button className="btn-clean btn-cancel" onClick={onCancel}>Cancel</button>
        </div>
      </div>

      <div className="quotation-container-clean">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Left Column */}
          <div className="form-section-clean">
            <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.2rem' }}>
              <div className="form-group">
                <label className="form-label required">EMPLOYEE NAME</label>
                <select className="form-control" value={formData.employeeName} onChange={(e) => handleInputChange('employeeName', e.target.value)}>
                  <option value="">&lt;Type then tab&gt;</option>
                  <option value="MEP002 Bhuiyan Manik">MEP002 Bhuiyan Manik</option>
                  <option value="MEP003 Boominathan Rajeshkanna">MEP003 Boominathan Rajeshkanna</option>
                  <option value="MEP004 Peraman Ramachandran">MEP004 Peraman Ramachandran</option>
                  <option value="MEP007 annamalai murugan">MEP007 annamalai murugan</option>
                  <option value="MEP008 RAHMAN SAIDUR">MEP008 RAHMAN SAIDUR</option>
                  <option value="MEP0080 Karuppaiya Muthuraman">MEP0080 Karuppaiya Muthuraman</option>
                  <option value="MEP009 sankar saravanan">MEP009 sankar saravanan</option>
                  <option value="MEP01 001 JEGANATHAN SUNDARAVELU">MEP01 001 JEGANATHAN SUNDARAVELU</option>
                  <option value="MEP01 002 KALIYAMOORTHY PRAKASH">MEP01 002 KALIYAMOORTHY PRAKASH</option>
                  <option value="MEP01 003 KARUPPU UDAYAR">MEP01 003 KARUPPU UDAYAR</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">CALENDAR</label>
                <select className="form-control" value={formData.calendar} onChange={(e) => handleInputChange('calendar', e.target.value)}>
                  <option value="">Select Calendar</option>
                  <option value="2022 MEP">2022 MEP</option>
                  <option value="2022 TDQ">2022 TDQ</option>
                  <option value="2022 TEA">2022 TEA</option>
                  <option value="2022 TMO">2022 TMO</option>
                  <option value="2022 TSV">2022 TSV</option>
                  <option value="MEP 2023">MEP 2023</option>
                  <option value="MEP 2024">MEP 2024</option>
                  <option value="MEP 2025">MEP 2025</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">REF LEAVE APPLICATION</label>
                <select className="form-control" value={formData.refLeaveApplication} onChange={(e) => handleInputChange('refLeaveApplication', e.target.value)}>
                  <option value="">&lt;Type then tab&gt;</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label required">LEAVE TYPE</label>
                <select className="form-control" value={formData.leaveType} onChange={(e) => handleInputChange('leaveType', e.target.value)}>
                  <option value="">Select Leave Type</option>
                  {leaveTypes.map((type, idx) => (
                    <option key={idx} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label required">APPROVED LEAVE DAYS</label>
                <input type="number" className="form-control" value={formData.approvedLeaveDays} onChange={(e) => handleInputChange('approvedLeaveDays', e.target.value)} style={{ background: '#f5f5f5' }} disabled />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="form-section-clean">
            <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.2rem' }}>
              <div className="form-group">
                <label className="form-label required">REINSTATEMENT DAYS</label>
                <input type="number" className="form-control" value={formData.reinstatementDays} onChange={(e) => handleInputChange('reinstatementDays', e.target.value)} />
              </div>

              <div className="form-group">
                <label className="form-label">REMARK</label>
                <textarea className="form-control" value={formData.remark} onChange={(e) => handleInputChange('remark', e.target.value)} rows="4" />
              </div>

              <div className="form-group">
                <label className="form-label">ENTITLE RECORD</label>
                <input type="text" className="form-control" value={formData.entitleRecord} onChange={(e) => handleInputChange('entitleRecord', e.target.value)} />
              </div>

              <div className="form-group">
                <label className="form-label">APPLICATION STATUS</label>
                <select className="form-control" value={formData.applicationStatus} onChange={(e) => handleInputChange('applicationStatus', e.target.value)}>
                  {applicationStatuses.map((status, idx) => (
                    <option key={idx} value={status}>{status}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.reinstatUpdated} onChange={(e) => handleInputChange('reinstatUpdated', e.target.checked)} />
                  REINSTAT UPDATED
                </label>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: '0 2rem 2rem', maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '0.5rem' }}>
          <button className="btn-clean btn-save" onClick={handleSave}>Save</button>
          <button className="btn-clean btn-save">
            <i className="fas fa-chevron-down"></i>
          </button>
          <button className="btn-clean btn-cancel" onClick={onCancel}>Cancel</button>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default CreateEmployeeLeaveReinstatement;
