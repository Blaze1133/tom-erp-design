import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewEmployeeLeaveEnrollmentDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('custom');

  const enrollmentData = {
    employeeName: 'TMO001 Al Amin',
    leaveCalendar: 'TMO 2024',
    year: 2024,
    hireDate: '13/8/2011',
    department: 'Shipyard : Keppel Shipyard',
    citizenship: 'Foreigner',
    status: 'Confirmed Employment',
    gender: 'Male',
    yearOfService: '14.27',
    entitlementCreated: true,
    memo: '',
    leaveEffectiveDate: '1/1/2024',
    yearStartDate: '1/1/2024',
    yearEndDate: '31/12/2024',
    monthYear: 12,
    monthProrated: 12,
    employeeSubsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd',
    country: 'Singapore',
    previousLeaveEntitlementId: '["36","78","4"]',
    addWageMonth: '',
    leaveGroup: '',
    monthsRemainToWorkInYears: 161
  };

  const leaveRecords = [
    { edit: 'Edit', lastModified: '3/12/2024 12:05 am', leaveType: 'Annual Leave Workers', fullYearEntitlement: 7, leaveEntitlementTodate: 6 },
    { edit: 'Edit', lastModified: '22/1/2024 10:35 am', leaveType: 'Home Leave', fullYearEntitlement: 365, leaveEntitlementTodate: 365 }
  ];

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-user-check"></i>
          <div>
            <h1>Employee Leave Enrollment</h1>
            <div className="detail-subtitle"><span>{enrollmentData.employeeName}</span></div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={onBack}><i className="fas fa-arrow-left"></i></button>
          <button className="btn-action"><i className="fas fa-arrow-right"></i></button>
          <button className="btn-action">List</button>
          <button className="btn-action">Search</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary" onClick={onEdit}><i className="fas fa-edit"></i> Edit</button>
        <button className="btn-toolbar" onClick={onBack}><i className="fas fa-arrow-left"></i> Back</button>
        <button className="btn-toolbar"><i className="fas fa-print"></i></button>
        <button className="btn-toolbar"><i className="fas fa-redo"></i></button>
      </div>

      <div className="detail-content">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
          <div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>EMPLOYEE NAME</label><div className="field-value">{enrollmentData.employeeName}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>LEAVE CALENDAR</label><div className="field-value">{enrollmentData.leaveCalendar}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>YEAR</label><div className="field-value">{enrollmentData.year}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>HIRE DATE</label><div className="field-value">{enrollmentData.hireDate}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>DEPARTMENT</label><div className="field-value">{enrollmentData.department}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>CITIZENSHIP</label><div className="field-value">{enrollmentData.citizenship}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>STATUS</label><div className="field-value">{enrollmentData.status}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>GENDER</label><div className="field-value">{enrollmentData.gender}</div></div>
            <div className="detail-field"><label>YEAR OF SERVICE</label><div className="field-value">{enrollmentData.yearOfService}</div></div>
          </div>
          <div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><input type="checkbox" checked={enrollmentData.entitlementCreated} disabled />ENTITLEMENT CREATED</label></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>MEMO</label><div className="field-value">{enrollmentData.memo || '-'}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>LEAVE EFFECTIVE DATE (YEAR)</label><div className="field-value">{enrollmentData.leaveEffectiveDate}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>YEAR START DATE</label><div className="field-value">{enrollmentData.yearStartDate}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>YEAR END DATE</label><div className="field-value">{enrollmentData.yearEndDate}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>MONTH(YEAR)</label><div className="field-value">{enrollmentData.monthYear}</div></div>
            <div className="detail-field"><label>MONTH(PRORATED)</label><div className="field-value">{enrollmentData.monthProrated}</div></div>
          </div>
          <div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>EMPLOYEE SUBSIDIARY</label><div className="field-value">{enrollmentData.employeeSubsidiary}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>COUNTRY</label><div className="field-value">{enrollmentData.country}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>PREVIOUS LEAVE ENTITLEMENT ID</label><div className="field-value">{enrollmentData.previousLeaveEntitlementId}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>ADD WAGE MONTH</label><div className="field-value">{enrollmentData.addWageMonth || '-'}</div></div>
            <div className="detail-field" style={{ marginBottom: '0.8rem' }}><label>LEAVE GROUP</label><div className="field-value">{enrollmentData.leaveGroup || '-'}</div></div>
            <div className="detail-field"><label>MONTHS REMAIN TO WORK IN YEARS</label><div className="field-value">{enrollmentData.monthsRemainToWorkInYears}</div></div>
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
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>EDIT</th>
                      <th>LAST MODIFIED</th>
                      <th>LEAVE TYPE ▲</th>
                      <th>FULL YEAR ENTITLEMENT</th>
                      <th>LEAVE ENTITLEMENT TODATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaveRecords.map((record, idx) => (
                      <tr key={idx}>
                        <td><button className="view-link">{record.edit}</button></td>
                        <td>{record.lastModified}</td>
                        <td>{record.leaveType}</td>
                        <td className="amount">{record.fullYearEntitlement}</td>
                        <td className="amount">{record.leaveEntitlementTodate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 'notes' && (<div className="tab-content-wrapper" style={{ padding: '1.5rem' }}><p style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>No notes available</p></div>)}
          </div>
        </div>

        <div className="detail-footer-actions">
          <button className="btn-toolbar-primary" onClick={onEdit}><i className="fas fa-edit"></i> Edit</button>
          <button className="btn-toolbar" onClick={onBack}><i className="fas fa-arrow-left"></i> Back</button>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default ViewEmployeeLeaveEnrollmentDetail;
