import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewLeaveTypeDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('notes');

  const leaveTypeData = {
    leaveName: 'Annual Leave Executive',
    id: 26,
    entitlementPerYear: 14,
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
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    country: 'Singapore',
    attendanceCharacter: 'E',
    newLeaveType: '',
    leaveGroup: '',
    leaveTypeDepartment: ['TOM : Admin', 'TOM : Finance', 'TOM : Human Resource', 'TOM : IT', 'TOM : Logistic', 'TOM : Purchase', 'TOM : Sales and Marketing'],
    employmentType: '',
    halfDayLeaveAttendanceCharacter: 'HEL',
    halfDayPresentHalfDayLeaveChar: 'HPHE'
  };

  const handleEdit = () => {
    if (onEdit) onEdit();
  };

  const handleBack = () => {
    if (onBack) onBack();
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-calendar-check"></i>
          <div>
            <h1>Leave Type</h1>
            <div className="detail-subtitle"><span>{leaveTypeData.leaveName}</span></div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={handleBack}><i className="fas fa-arrow-left"></i></button>
          <button className="btn-action"><i className="fas fa-arrow-right"></i></button>
          <button className="btn-action">List</button>
          <button className="btn-action">Search</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary" onClick={handleEdit}><i className="fas fa-edit"></i> Edit</button>
        <button className="btn-toolbar" onClick={handleBack}><i className="fas fa-arrow-left"></i> Back</button>
        <button className="btn-toolbar">Update Leave Type</button>
        <button className="btn-toolbar"><i className="fas fa-print"></i></button>
        <div className="toolbar-dropdown" style={{ marginLeft: 'auto' }}>
          <button className="btn-toolbar"><i className="fas fa-cog"></i> Actions <i className="fas fa-chevron-down" style={{ marginLeft: '0.5rem', fontSize: '0.7rem' }}></i></button>
        </div>
      </div>

      <div className="detail-content">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginBottom: '2rem', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
          <div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}><label>LEAVE NAME</label><div className="field-value">{leaveTypeData.leaveName}</div></div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}><label>ID</label><div className="field-value">{leaveTypeData.id}</div></div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}><label>ENTITLEMENT PER YEAR</label><div className="field-value">{leaveTypeData.entitlementPerYear}</div></div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={leaveTypeData.isCarryForward} disabled />IS CARRY FORWARD</label></div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={leaveTypeData.buyBackEncashment} disabled />BUY BACK/ENCASHMENT</label></div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={leaveTypeData.checkBalance} disabled />CHECK BALANCE</label></div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={leaveTypeData.is15YearsProrated} disabled />IS 15 YEARS PRORATED</label></div>
            <div className="detail-field"><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={leaveTypeData.isCompoff} disabled />IS COMPOFF</label></div>
          </div>
          <div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={leaveTypeData.entitlementCreation} disabled />ENTITLEMENT CREATION</label></div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={leaveTypeData.attachmentRequire} disabled />ATTACHMENT REQUIRE</label></div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={leaveTypeData.applicableHalfDay} disabled />APPLICABLE HALF DAY</label></div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={leaveTypeData.considerWeeklyOffInLeaveDays} disabled />CONSIDER WEEKLY OFF IN LEAVE DAYS</label></div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={leaveTypeData.isUnpaid} disabled />IS UNPAID</label></div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={leaveTypeData.prorateFull} disabled />PRORATE FULL ENTITLEMENT</label></div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}><label>SUBSIDIARY</label><div className="field-value">{leaveTypeData.subsidiary}</div></div>
            <div className="detail-field"><label>COUNTRY</label><div className="field-value">{leaveTypeData.country}</div></div>
          </div>
          <div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}><label>ATTENDANCE CHARACTER</label><div className="field-value">{leaveTypeData.attendanceCharacter}</div></div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}><label>NEW LEAVE TYPE</label><div className="field-value">{leaveTypeData.newLeaveType || '-'}</div></div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}><label>LEAVE GROUP</label><div className="field-value">{leaveTypeData.leaveGroup || '-'}</div></div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}><label>LEAVE TYPE DEPARTMENT</label><div className="field-value">{leaveTypeData.leaveTypeDepartment.join(', ')}</div></div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}><label>EMPLOYMENT TYPE</label><div className="field-value">{leaveTypeData.employmentType || '-'}</div></div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}><label>HALF DAY LEAVE ATTENDANCE CHARACTER</label><div className="field-value">{leaveTypeData.halfDayLeaveAttendanceCharacter}</div></div>
            <div className="detail-field"><label>HALF DAY PRESENT HALF DAY LEAVE CHAR</label><div className="field-value">{leaveTypeData.halfDayPresentHalfDayLeaveChar}</div></div>
          </div>
        </div>

        <div className="detail-tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'notes' ? 'active' : ''}`} onClick={() => setActiveTab('notes')}>Notes</button>
            <button className={`tab-btn ${activeTab === 'workflow' ? 'active' : ''}`} onClick={() => setActiveTab('workflow')}>Workflow</button>
            <button className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`} onClick={() => setActiveTab('custom')}>Custom</button>
          </div>
          <div className="tabs-content">
            {activeTab === 'notes' && (
              <div className="tab-content-wrapper" style={{ padding: '1.5rem' }}>
                <p style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>No notes available</p>
              </div>
            )}
            {activeTab === 'workflow' && (
              <div className="tab-content-wrapper" style={{ padding: '1.5rem' }}>
                <p style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>No workflow data available</p>
              </div>
            )}
            {activeTab === 'custom' && (
              <div className="tab-content-wrapper" style={{ padding: '1.5rem' }}>
                <p style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>No custom data available</p>
              </div>
            )}
          </div>
        </div>

        <div className="detail-footer-actions">
          <button className="btn-toolbar-primary" onClick={handleEdit}><i className="fas fa-edit"></i> Edit</button>
          <button className="btn-toolbar" onClick={handleBack}><i className="fas fa-arrow-left"></i> Back</button>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default ViewLeaveTypeDetail;
