import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewEmployeeLeaveDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('notes');

  const leaveData = {
    id: 'LRC000023',
    employee: 'MEP059 Muruganandam Kayalvizhi',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    country: 'Singapore',
    leaveCalendar: '2022 MEP',
    workDays: 5,
    department: 'TOM : Finance',
    shiftType: '8AM to 5PM 8Days',
    joiningDate: '1/7/2020',
    supervisor: 'MEP045 Mayandi K Goutham Vijay',
    applyLeaveOn: '7/3/2022',
    applyLeaveType: 'Annual Leave Executive',
    leaveCreatedBy: 'Praveen Chandraseka',
    leaveFrom: '14/3/2022',
    amPm: 'Full Day',
    leaveTo: '25/3/2022',
    amPm2: 'Full Day',
    currentBalance: '',
    requestedDays: 10,
    attachments: '',
    remark: '',
    approverRemark: '',
    rejectionRemarks: '',
    contactDetailsAndAddress: '',
    leaveApplicationStatus: 'Approved',
    appInternalId: 'GYc3BaHe3e7471aaa3f3d',
    entitlementRecord: 492,
    appId: '',
    finalApprovedBy: 'Praveen Chandraseka',
    rejectedBy: '',
    nextApprover: '',
    nextCanceler: '',
    finalCancelledBy: '',
    entitleUpdated: true,
    attUpdated: true,
    mobileAppApprovalCheck: true,
    mobileAppRejectionCheck: false,
    inactive: false
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
          <i className="fas fa-calendar-alt"></i>
          <div>
            <h1>Employee Leave Application</h1>
            <div className="detail-subtitle"><span>{leaveData.id}</span></div>
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
        <button className="btn-toolbar">Print</button>
        <button className="btn-toolbar">Cancel Leave</button>
        <button className="btn-toolbar">Apply For Leave Cancellation</button>
        <button className="btn-toolbar"><i className="fas fa-print"></i></button>
        <button className="btn-toolbar"><i className="fas fa-redo"></i></button>
        <div className="toolbar-dropdown" style={{ marginLeft: 'auto' }}>
          <button className="btn-toolbar"><i className="fas fa-cog"></i> Actions <i className="fas fa-chevron-down" style={{ marginLeft: '0.5rem', fontSize: '0.7rem' }}></i></button>
        </div>
      </div>

      <div className="detail-content">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
          <div>
            <h4 style={{ marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 600, color: '#888' }}>Basic</h4>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>ID</label><div className="field-value">{leaveData.id}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>EMPLOYEE</label><div className="field-value">{leaveData.employee}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>SUBSIDIARY</label><div className="field-value">{leaveData.subsidiary}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>COUNTRY</label><div className="field-value">{leaveData.country}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>LEAVE CALENDAR</label><div className="field-value">{leaveData.leaveCalendar}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>WORK DAYS</label><div className="field-value">{leaveData.workDays}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>DEPARTMENT</label><div className="field-value">{leaveData.department}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>SHIFT TYPE</label><div className="field-value">{leaveData.shiftType}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>JOINING DATE</label><div className="field-value">{leaveData.joiningDate}</div></div>
            <div className="detail-field"><label>SUPERVISOR</label><div className="field-value">{leaveData.supervisor}</div></div>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 600, color: '#888' }}>Leave Request</h4>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>APPLY LEAVE ON</label><div className="field-value">{leaveData.applyLeaveOn}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>APPLY LEAVE TYPE</label><div className="field-value">{leaveData.applyLeaveType}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>LEAVE CREATED BY</label><div className="field-value">{leaveData.leaveCreatedBy}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>LEAVE FROM</label><div className="field-value">{leaveData.leaveFrom}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>AM / PM</label><div className="field-value">{leaveData.amPm}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>LEAVE TO</label><div className="field-value">{leaveData.leaveTo}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>AM / PM.</label><div className="field-value">{leaveData.amPm2}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>CURRENT BALANCE</label><div className="field-value">{leaveData.currentBalance || '-'}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>REQUESTED DAYS</label><div className="field-value">{leaveData.requestedDays}</div></div>
            <div className="detail-field"><label>ATTACHMENTS</label><div className="field-value">{leaveData.attachments || '-'}</div></div>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 600, color: '#888' }}>Status</h4>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>LEAVE APPLICATION STATUS</label><div className="field-value">{leaveData.leaveApplicationStatus}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>APP INTERNAL ID</label><div className="field-value">{leaveData.appInternalId}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>ENTITLEMENT RECORD</label><div className="field-value">{leaveData.entitlementRecord}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>APP ID</label><div className="field-value">{leaveData.appId || '-'}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>FINAL APPROVED BY</label><div className="field-value">{leaveData.finalApprovedBy}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>REJECTED BY</label><div className="field-value">{leaveData.rejectedBy || '-'}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>NEXT APPROVER</label><div className="field-value">{leaveData.nextApprover || '-'}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>NEXT CANCELER</label><div className="field-value">{leaveData.nextCanceler || '-'}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>FINAL CANCELLED BY</label><div className="field-value">{leaveData.finalCancelledBy || '-'}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.5rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={leaveData.entitleUpdated} disabled />ENTITLE UPDATED</label></div>
            <div className="detail-field" style={{ marginBottom: '0.5rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={leaveData.attUpdated} disabled />ATT-UPDATED</label></div>
            <div className="detail-field" style={{ marginBottom: '0.5rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={leaveData.mobileAppApprovalCheck} disabled />MOBILE APP APPROVAL CHECK</label></div>
            <div className="detail-field" style={{ marginBottom: '0.5rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={leaveData.mobileAppRejectionCheck} disabled />MOBILE APP REJECTION CHECK</label></div>
            <div className="detail-field"><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={leaveData.inactive} disabled />INACTIVE</label></div>
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
            {activeTab === 'workflow' && (<div className="tab-content-wrapper" style={{ padding: '1.5rem' }}><p style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>Workflow data will be displayed here</p></div>)}
            {activeTab === 'myCalendar' && (<div className="tab-content-wrapper" style={{ padding: '1.5rem' }}><p style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>Calendar data will be displayed here</p></div>)}
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

export default ViewEmployeeLeaveDetail;
