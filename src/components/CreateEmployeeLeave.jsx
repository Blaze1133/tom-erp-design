import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateEmployeeLeave = ({ leaveData, onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('notes');
  const [formData, setFormData] = useState(leaveData || {
    id: '',
    employee: '',
    subsidiary: '',
    country: 'Singapore',
    leaveCalendar: '',
    workDays: 0,
    department: '',
    shiftType: '',
    joiningDate: '',
    supervisor: '',
    applyLeaveOn: '',
    applyLeaveType: '',
    leaveCreatedBy: '',
    leaveFrom: '',
    amPm: 'Full Day',
    leaveTo: '',
    amPm2: 'Full Day',
    currentBalance: '',
    requestedDays: 0,
    attachments: '',
    remark: '',
    approverRemark: '',
    rejectionRemarks: '',
    contactDetailsAndAddress: '',
    leaveApplicationStatus: 'Approved',
    appInternalId: '',
    entitlementRecord: '',
    appId: '',
    finalApprovedBy: '',
    rejectedBy: '',
    nextApprover: '',
    nextCanceler: '',
    finalCancelledBy: '',
    entitleUpdated: false,
    attUpdated: false,
    mobileAppApprovalCheck: false,
    mobileAppRejectionCheck: false,
    inactive: false
  });

  const subsidiaries = ['Tech Onshore MEP Prefabricators Pte Ltd', 'Tech Marine Offshore (S) Pte Ltd', 'TOM Offshore Marine Engineering Pte Ltd', 'TOM Shipyard Pte Ltd', 'TOM Engineering & Trading Pte Ltd', 'TOM Industrial Services Pte Ltd'];
  const departments = ['TOM : Admin', 'TOM : Finance', 'TOM : Human Resource', 'TOM : IT', 'TOM : Logistic', 'TOM : Purchase', 'TOM : Sales and Marketing', 'TOM : Security', 'TOM : Engineering', 'TOM : Production', 'MEP MARINE', 'MEP', 'O&G', 'Construction'];
  const leaveCalendars = ['2022 MEP', '2022 TDQ', '2022 TEA', '2022 TMO', '2022 TSV', 'MEP 2023', 'MEP 2024', 'MEP 2025'];
  const leaveStatuses = ['Approved', 'Rejected', 'Approval Pending From HR / C3', 'Approval Pending From Supervisor / 1', 'Cancelled', 'Partially Cancelled', 'Approval Pending from Finance / 2', 'Approval Pending from Department Head / 3'];
  const amPmOptions = ['Full Day', 'AM', 'PM'];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!formData.employee || !formData.subsidiary) {
      showToast('Please fill in required fields', 'error');
      return;
    }
    showToast('Employee Leave Application saved successfully!', 'success');
    if (onSave) onSave(formData);
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
            <h1>Employee Leave Application</h1>
            <p className="page-subtitle">{leaveData ? leaveData.id : 'New Leave Application'}</p>
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
            <h4 style={{ marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 600, color: '#888' }}>Basic</h4>
            <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '0.8rem' }}>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">ID</label><input type="text" className="form-control" value={formData.id} disabled style={{ background: '#f5f5f5' }} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label required">EMPLOYEE</label><select className="form-control" value={formData.employee} onChange={(e) => handleInputChange('employee', e.target.value)}><option value="">Select Employee</option><option value="MEP059 Muruganandam Kayalvizhi">MEP059 Muruganandam Kayalvizhi</option></select></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label required">SUBSIDIARY</label><select className="form-control" value={formData.subsidiary} onChange={(e) => handleInputChange('subsidiary', e.target.value)}><option value="">Select Subsidiary</option>{subsidiaries.map((sub, idx) => <option key={idx} value={sub}>{sub}</option>)}</select></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">COUNTRY</label><select className="form-control" value={formData.country} onChange={(e) => handleInputChange('country', e.target.value)}><option value="Singapore">Singapore</option><option value="Malaysia">Malaysia</option><option value="Indonesia">Indonesia</option></select></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">LEAVE CALENDAR</label><select className="form-control" value={formData.leaveCalendar} onChange={(e) => handleInputChange('leaveCalendar', e.target.value)}><option value="">Select Calendar</option>{leaveCalendars.map((cal, idx) => <option key={idx} value={cal}>{cal}</option>)}</select></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">WORK DAYS</label><input type="number" className="form-control" value={formData.workDays} onChange={(e) => handleInputChange('workDays', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">DEPARTMENT</label><select className="form-control" value={formData.department} onChange={(e) => handleInputChange('department', e.target.value)}><option value="">Select Department</option>{departments.map((dept, idx) => <option key={idx} value={dept}>{dept}</option>)}</select></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">SHIFT TYPE</label><input type="text" className="form-control" value={formData.shiftType} onChange={(e) => handleInputChange('shiftType', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">JOINING DATE</label><input type="date" className="form-control" value={formData.joiningDate} onChange={(e) => handleInputChange('joiningDate', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">SUPERVISOR</label><input type="text" className="form-control" value={formData.supervisor} onChange={(e) => handleInputChange('supervisor', e.target.value)} /></div>
            </div>
          </div>
          <div className="form-section-clean">
            <h4 style={{ marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 600, color: '#888' }}>Leave Request</h4>
            <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '0.8rem' }}>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label required">APPLY LEAVE ON</label><input type="date" className="form-control" value={formData.applyLeaveOn} onChange={(e) => handleInputChange('applyLeaveOn', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label required">APPLY LEAVE TYPE</label><input type="text" className="form-control" value={formData.applyLeaveType} onChange={(e) => handleInputChange('applyLeaveType', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">LEAVE CREATED BY</label><input type="text" className="form-control" value={formData.leaveCreatedBy} onChange={(e) => handleInputChange('leaveCreatedBy', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label required">LEAVE FROM</label><input type="date" className="form-control" value={formData.leaveFrom} onChange={(e) => handleInputChange('leaveFrom', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">AM / PM</label><select className="form-control" value={formData.amPm} onChange={(e) => handleInputChange('amPm', e.target.value)}>{amPmOptions.map((opt, idx) => <option key={idx} value={opt}>{opt}</option>)}</select></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label required">LEAVE TO</label><input type="date" className="form-control" value={formData.leaveTo} onChange={(e) => handleInputChange('leaveTo', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">AM / PM.</label><select className="form-control" value={formData.amPm2} onChange={(e) => handleInputChange('amPm2', e.target.value)}>{amPmOptions.map((opt, idx) => <option key={idx} value={opt}>{opt}</option>)}</select></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">CURRENT BALANCE</label><input type="text" className="form-control" value={formData.currentBalance} disabled style={{ background: '#f5f5f5' }} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">REQUESTED DAYS</label><input type="number" className="form-control" value={formData.requestedDays} onChange={(e) => handleInputChange('requestedDays', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">ATTACHMENTS</label><select className="form-control" value={formData.attachments} onChange={(e) => handleInputChange('attachments', e.target.value)}><option value="">Select Attachment</option></select></div>
            </div>
          </div>
          <div className="form-section-clean">
            <h4 style={{ marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 600, color: '#888' }}>Status</h4>
            <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '0.8rem' }}>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">LEAVE APPLICATION STATUS</label><select className="form-control" value={formData.leaveApplicationStatus} onChange={(e) => handleInputChange('leaveApplicationStatus', e.target.value)}>{leaveStatuses.map((status, idx) => <option key={idx} value={status}>{status}</option>)}</select></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">APP INTERNAL ID</label><input type="text" className="form-control" value={formData.appInternalId} disabled style={{ background: '#f5f5f5' }} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">ENTITLEMENT RECORD</label><input type="text" className="form-control" value={formData.entitlementRecord} onChange={(e) => handleInputChange('entitlementRecord', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">APP ID</label><input type="text" className="form-control" value={formData.appId} onChange={(e) => handleInputChange('appId', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">FINAL APPROVED BY</label><input type="text" className="form-control" value={formData.finalApprovedBy} onChange={(e) => handleInputChange('finalApprovedBy', e.target.value)} /></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">REJECTED BY</label><select className="form-control" value={formData.rejectedBy} onChange={(e) => handleInputChange('rejectedBy', e.target.value)}><option value="">Select</option></select></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">NEXT APPROVER</label><select className="form-control" value={formData.nextApprover} onChange={(e) => handleInputChange('nextApprover', e.target.value)}><option value="">Select</option></select></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">NEXT CANCELER</label><select className="form-control" value={formData.nextCanceler} onChange={(e) => handleInputChange('nextCanceler', e.target.value)}><option value="">Select</option></select></div>
              <div className="form-group" style={{ marginBottom: '0.5rem' }}><label className="form-label">FINAL CANCELLED BY</label><select className="form-control" value={formData.finalCancelledBy} onChange={(e) => handleInputChange('finalCancelledBy', e.target.value)}><option value="">Select</option></select></div>
              <div className="form-group" style={{ marginBottom: '0.3rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={formData.entitleUpdated} onChange={(e) => handleInputChange('entitleUpdated', e.target.checked)} />ENTITLE UPDATED</label></div>
              <div className="form-group" style={{ marginBottom: '0.3rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={formData.attUpdated} onChange={(e) => handleInputChange('attUpdated', e.target.checked)} />ATT-UPDATED</label></div>
              <div className="form-group" style={{ marginBottom: '0.3rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={formData.mobileAppApprovalCheck} onChange={(e) => handleInputChange('mobileAppApprovalCheck', e.target.checked)} />MOBILE APP APPROVAL CHECK</label></div>
              <div className="form-group" style={{ marginBottom: '0.3rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={formData.mobileAppRejectionCheck} onChange={(e) => handleInputChange('mobileAppRejectionCheck', e.target.checked)} />MOBILE APP REJECTION CHECK</label></div>
              <div className="form-group" style={{ marginBottom: '0.3rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={formData.inactive} onChange={(e) => handleInputChange('inactive', e.target.checked)} />INACTIVE</label></div>
            </div>
          </div>
        </div>

        <div className="detail-tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'notes' ? 'active' : ''}`} onClick={() => setActiveTab('notes')}>Notes</button>
            <button className={`tab-btn ${activeTab === 'currentEntitlement' ? 'active' : ''}`} onClick={() => setActiveTab('currentEntitlement')}>Current Entitlement</button>
            <button className={`tab-btn ${activeTab === 'workflow' ? 'active' : ''}`} onClick={() => setActiveTab('workflow')}>Workflow</button>
            <button className={`tab-btn ${activeTab === 'myCalendar' ? 'active' : ''}`} onClick={() => setActiveTab('myCalendar')}>My Calendar</button>
          </div>
          <div className="tabs-content">
            {activeTab === 'notes' && (
              <div className="tab-content-wrapper" style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                  <label>VIEW</label>
                  <select className="form-control" style={{ width: '200px' }}>
                    <option>Default</option>
                  </select>
                  <button className="btn btn-secondary">New Note</button>
                  <button className="btn btn-secondary">Customize View</button>
                </div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>EDIT</th>
                      <th>DATE</th>
                      <th>AUTHOR</th>
                      <th>TITLE</th>
                      <th>MEMO</th>
                      <th>DIRECTION</th>
                      <th>TYPE</th>
                      <th>REMOVE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="8" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                        No records to show.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 'currentEntitlement' && (<div className="tab-content-wrapper" style={{ padding: '1.5rem' }}><p style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>Current entitlement data will be displayed here</p></div>)}
            {activeTab === 'workflow' && (<div className="tab-content-wrapper" style={{ padding: '1.5rem' }}><p style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>Workflow will be available after saving</p></div>)}
            {activeTab === 'myCalendar' && (<div className="tab-content-wrapper" style={{ padding: '1.5rem' }}><p style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>Calendar data will be displayed here</p></div>)}
          </div>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default CreateEmployeeLeave;
