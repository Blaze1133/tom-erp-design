import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateLeaveType = ({ leaveTypeData, onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('notes');
  const [formData, setFormData] = useState(leaveTypeData || {
    leaveName: '',
    id: '',
    entitlementPerYear: 0,
    isCarryForward: false,
    buyBackEncashment: false,
    checkBalance: true,
    is15YearsProrated: true,
    isCompoff: false,
    entitlementCreation: true,
    attachmentRequire: true,
    applicableHalfDay: true,
    considerWeeklyOffInLeaveDays: false,
    isUnpaid: false,
    prorateFull: true,
    subsidiary: '',
    country: 'Singapore',
    attendanceCharacter: '',
    newLeaveType: '',
    leaveGroup: '',
    leaveTypeDepartment: [],
    employmentType: '',
    halfDayLeaveAttendanceCharacter: '',
    halfDayPresentHalfDayLeaveChar: ''
  });

  const subsidiaries = ['Tech Onshore MEP Prefabricators Pte Ltd', 'Tech Marine Offshore (S) Pte Ltd', 'TOM Offshore Marine Engineering Pte Ltd', 'TOM Shipyard Pte Ltd', 'TOM Engineering & Trading Pte Ltd', 'TOM Industrial Services Pte Ltd'];
  const departments = ['TOM : Admin', 'TOM : Finance', 'TOM : Human Resource', 'TOM : IT', 'TOM : Logistic', 'TOM : Purchase', 'TOM : Sales and Marketing', 'TOM : Security', 'TOM : Engineering', 'TOM : Production', 'MEP MARINE', 'MEP', 'O&G', 'Construction'];
  const halfDayChars = ['HEL', 'HHL', 'HL', 'HML', 'HPHAL', 'HPHCL', 'HPHE'];
  const leaveGroups = ['- New -', 'Leave Group 1', 'Leave Group 2', 'Leave Group 3'];
  const employmentTypes = ['Contract', 'Part Timers', 'Permanent', 'Trainee'];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!formData.leaveName || !formData.subsidiary) {
      showToast('Please fill in required fields', 'error');
      return;
    }
    showToast('Leave Type saved successfully!', 'success');
    if (onSave) onSave(formData);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="create-form">
      <div className="quotation-header-clean">
        <div className="page-title-clean">
          <i className="fas fa-calendar-check"></i>
          <div>
            <h1>Leave Type</h1>
            <p className="page-subtitle">{leaveTypeData ? leaveTypeData.leaveName : 'New Leave Type'}</p>
          </div>
        </div>
        <div className="header-actions-clean">
          <button className="btn-clean btn-save" onClick={handleSave}>Save</button>
          <button className="btn-clean btn-cancel" onClick={onCancel}>Cancel</button>
          <button className="btn-clean"><i className="fas fa-cog"></i> Actions</button>
        </div>
      </div>

      <div className="quotation-container-clean">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div className="form-section-clean">
            <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '0.8rem' }}>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label required">LEAVE NAME</label><input type="text" className="form-control" value={formData.leaveName} onChange={(e) => handleInputChange('leaveName', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">ID</label><input type="text" className="form-control" value={formData.id} disabled style={{ background: '#f5f5f5' }} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">ENTITLEMENT PER YEAR</label><input type="number" className="form-control" value={formData.entitlementPerYear} onChange={(e) => handleInputChange('entitlementPerYear', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.3rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={formData.isCarryForward} onChange={(e) => handleInputChange('isCarryForward', e.target.checked)} />IS CARRY FORWARD</label></div>
              <div className="form-group" style={{ marginBottom: '0.3rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={formData.buyBackEncashment} onChange={(e) => handleInputChange('buyBackEncashment', e.target.checked)} />BUY BACK/ENCASHMENT</label></div>
              <div className="form-group" style={{ marginBottom: '0.3rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={formData.checkBalance} onChange={(e) => handleInputChange('checkBalance', e.target.checked)} />CHECK BALANCE</label></div>
              <div className="form-group" style={{ marginBottom: '0.3rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={formData.is15YearsProrated} onChange={(e) => handleInputChange('is15YearsProrated', e.target.checked)} />IS 15 YEARS PRORATED</label></div>
              <div className="form-group" style={{ marginBottom: '0.3rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={formData.isCompoff} onChange={(e) => handleInputChange('isCompoff', e.target.checked)} />IS COMPOFF</label></div>
            </div>
          </div>
          <div className="form-section-clean">
            <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '0.8rem' }}>
              <div className="form-group" style={{ marginBottom: '0.3rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={formData.entitlementCreation} onChange={(e) => handleInputChange('entitlementCreation', e.target.checked)} />ENTITLEMENT CREATION</label></div>
              <div className="form-group" style={{ marginBottom: '0.3rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={formData.attachmentRequire} onChange={(e) => handleInputChange('attachmentRequire', e.target.checked)} />ATTACHMENT REQUIRE</label></div>
              <div className="form-group" style={{ marginBottom: '0.3rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={formData.applicableHalfDay} onChange={(e) => handleInputChange('applicableHalfDay', e.target.checked)} />APPLICABLE HALF DAY</label></div>
              <div className="form-group" style={{ marginBottom: '0.3rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={formData.considerWeeklyOffInLeaveDays} onChange={(e) => handleInputChange('considerWeeklyOffInLeaveDays', e.target.checked)} />CONSIDER WEEKLY OFF IN LEAVE DAYS</label></div>
              <div className="form-group" style={{ marginBottom: '0.3rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={formData.isUnpaid} onChange={(e) => handleInputChange('isUnpaid', e.target.checked)} />IS UNPAID</label></div>
              <div className="form-group" style={{ marginBottom: '0.3rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={formData.prorateFull} onChange={(e) => handleInputChange('prorateFull', e.target.checked)} />PRORATE FULL ENTITLEMENT</label></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label required">SUBSIDIARY</label><select className="form-control" value={formData.subsidiary} onChange={(e) => handleInputChange('subsidiary', e.target.value)}><option value="">Select Subsidiary</option>{subsidiaries.map((sub, idx) => <option key={idx} value={sub}>{sub}</option>)}</select></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">COUNTRY</label><select className="form-control" value={formData.country} onChange={(e) => handleInputChange('country', e.target.value)}><option value="Singapore">Singapore</option><option value="Malaysia">Malaysia</option><option value="Indonesia">Indonesia</option></select></div>
            </div>
          </div>
          <div className="form-section-clean">
            <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '0.8rem' }}>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">ATTENDANCE CHARACTER</label><input type="text" className="form-control" value={formData.attendanceCharacter} onChange={(e) => handleInputChange('attendanceCharacter', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">NEW LEAVE TYPE</label><input type="text" className="form-control" value={formData.newLeaveType} onChange={(e) => handleInputChange('newLeaveType', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">LEAVE GROUP</label><select className="form-control" value={formData.leaveGroup} onChange={(e) => handleInputChange('leaveGroup', e.target.value)}><option value="">Select Group</option>{leaveGroups.map((group, idx) => <option key={idx} value={group}>{group}</option>)}</select></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">LEAVE TYPE DEPARTMENT</label><select multiple className="form-control" value={formData.leaveTypeDepartment} onChange={(e) => handleInputChange('leaveTypeDepartment', Array.from(e.target.selectedOptions, option => option.value))} style={{ height: '100px' }}>{departments.map((dept, idx) => <option key={idx} value={dept}>{dept}</option>)}</select></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">EMPLOYMENT TYPE</label><select className="form-control" value={formData.employmentType} onChange={(e) => handleInputChange('employmentType', e.target.value)}><option value="">Select Type</option>{employmentTypes.map((type, idx) => <option key={idx} value={type}>{type}</option>)}</select></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">HALF DAY LEAVE ATTENDANCE CHARACTER</label><select className="form-control" value={formData.halfDayLeaveAttendanceCharacter} onChange={(e) => handleInputChange('halfDayLeaveAttendanceCharacter', e.target.value)}><option value="">Select Character</option>{halfDayChars.map((char, idx) => <option key={idx} value={char}>{char}</option>)}</select></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">HALF DAY PRESENT HALF DAY LEAVE CHAR</label><select className="form-control" value={formData.halfDayPresentHalfDayLeaveChar} onChange={(e) => handleInputChange('halfDayPresentHalfDayLeaveChar', e.target.value)}><option value="">Select Character</option>{halfDayChars.map((char, idx) => <option key={idx} value={char}>{char}</option>)}</select></div>
            </div>
          </div>
        </div>

        <div className="detail-tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'notes' ? 'active' : ''}`} onClick={() => setActiveTab('notes')}>Notes</button>
            <button className={`tab-btn ${activeTab === 'workflow' ? 'active' : ''}`} onClick={() => setActiveTab('workflow')}>Workflow</button>
            <button className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`} onClick={() => setActiveTab('custom')}>Custom</button>
          </div>
          <div className="tabs-content">
            {activeTab === 'notes' && (<div className="tab-content-wrapper" style={{ padding: '1.5rem' }}><p style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>No notes available</p></div>)}
            {activeTab === 'workflow' && (<div className="tab-content-wrapper" style={{ padding: '1.5rem' }}><p style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>Workflow will be available after saving</p></div>)}
            {activeTab === 'custom' && (<div className="tab-content-wrapper" style={{ padding: '1.5rem' }}><p style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>No custom data available</p></div>)}
          </div>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default CreateLeaveType;
