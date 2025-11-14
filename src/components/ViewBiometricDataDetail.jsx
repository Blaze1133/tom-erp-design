import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewBiometricDataDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [systemInfoCollapsed, setSystemInfoCollapsed] = useState(false);

  const biometricData = {
    employeeName: 'John Doe',
    employeeId: 'EMP001',
    companyName: 'Tech Onshore MEP Prefabricators Pte Ltd',
    workPermitNo: 'WP123456',
    finNo: 'F1234567A',
    dateIn: '2025-04-05',
    dateOut: '2025-04-05',
    timeIn: '08:00',
    timeOut: '18:00',
    deviceInTime: '07:58:23',
    deviceOutTime: '18:02:15',
    project: '20-0052 Fortis Construction Pte. Ltd',
    shiftType: 'Day',
    remarks: '',
    status: 'Posted',
    createdBy: 'System (Biometric Sync)',
    createdDate: '2025-04-05 08:00:00',
    lastModifiedBy: 'Admin User',
    lastModifiedDate: '2025-04-05 09:15:00'
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
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
          <i className="fas fa-fingerprint"></i>
          <div>
            <h1>Biometric Data Record</h1>
            <div className="detail-subtitle">
              <span>{biometricData.employeeId}</span>
              <span className="status-badge-detail" style={{ background: '#4caf50' }}>
                {biometricData.status}
              </span>
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
          <button className="btn-action">Customize</button>
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
          Print
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-copy"></i>
          Copy
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
        {/* Primary Information Section */}
        <div className={`detail-section ${primaryInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setPrimaryInfoCollapsed(!primaryInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>EMPLOYEE NAME</label>
                <div className="field-value">{biometricData.employeeName}</div>
              </div>
              <div className="detail-field">
                <label>WORK PERMIT NO</label>
                <div className="field-value">{biometricData.workPermitNo}</div>
              </div>
              <div className="detail-field">
                <label>TIME IN</label>
                <div className="field-value">{biometricData.timeIn}</div>
              </div>
              <div className="detail-field">
                <label>EMPLOYEE ID</label>
                <div className="field-value">{biometricData.employeeId}</div>
              </div>
              <div className="detail-field">
                <label>FIN NO</label>
                <div className="field-value">{biometricData.finNo}</div>
              </div>
              <div className="detail-field">
                <label>TIME OUT</label>
                <div className="field-value">{biometricData.timeOut}</div>
              </div>
              <div className="detail-field">
                <label>COMPANY NAME</label>
                <div className="field-value">{biometricData.companyName}</div>
              </div>
              <div className="detail-field">
                <label>DATE IN</label>
                <div className="field-value">{biometricData.dateIn}</div>
              </div>
              <div className="detail-field">
                <label>DEVICE IN TIME</label>
                <div className="field-value">{biometricData.deviceInTime}</div>
              </div>
              <div className="detail-field">
                <label>PROJECT</label>
                <div className="field-value">{biometricData.project}</div>
              </div>
              <div className="detail-field">
                <label>DATE OUT</label>
                <div className="field-value">{biometricData.dateOut}</div>
              </div>
              <div className="detail-field">
                <label>DEVICE OUT TIME</label>
                <div className="field-value">{biometricData.deviceOutTime}</div>
              </div>
              <div className="detail-field">
                <label>SHIFT TYPE</label>
                <div className="field-value">{biometricData.shiftType}</div>
              </div>
              <div className="detail-field">
                <label>REMARKS</label>
                <div className="field-value">{biometricData.remarks || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* System Information Section */}
        <div className={`detail-section ${systemInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setSystemInfoCollapsed(!systemInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>System Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>CREATED BY</label>
                <div className="field-value">{biometricData.createdBy}</div>
              </div>
              <div className="detail-field">
                <label>LAST MODIFIED BY</label>
                <div className="field-value">{biometricData.lastModifiedBy}</div>
              </div>
              <div className="detail-field">
                <label>CREATED DATE</label>
                <div className="field-value">{biometricData.createdDate}</div>
              </div>
              <div className="detail-field">
                <label>LAST MODIFIED DATE</label>
                <div className="field-value">{biometricData.lastModifiedDate}</div>
              </div>
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
        message={toast.message} 
        type={toast.type} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
    </div>
  );
};

export default ViewBiometricDataDetail;
