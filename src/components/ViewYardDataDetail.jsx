import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewYardDataDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [systemInfoCollapsed, setSystemInfoCollapsed] = useState(false);

  // Sample data
  const yardData = {
    employeeName: 'John Doe',
    employeeId: 'EMP001',
    companyName: 'Tech Onshore MEP Prefabricators Pte Ltd',
    workPermitNo: 'WP123456',
    finNo: 'F1234567A',
    dateIn: '2025-04-01',
    dateOut: '2025-04-01',
    timeIn: '08:00',
    timeOut: '18:00',
    project: '20-0052 Fortis Construction Pte. Ltd',
    shiftType: 'Day',
    recordType: 'In',
    status: 'Posted',
    createdBy: 'Admin User',
    createdDate: '2025-04-01 07:30:00',
    lastModifiedBy: 'Admin User',
    lastModifiedDate: '2025-04-01 07:30:00'
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
          <i className="fas fa-clipboard-list"></i>
          <div>
            <h1>Yard Data Record</h1>
            <div className="detail-subtitle">
              <span>{yardData.employeeId}</span>
              <span className="status-badge-detail" style={{ background: '#4caf50' }}>
                {yardData.status}
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
                <div className="field-value">{yardData.employeeName}</div>
              </div>
              <div className="detail-field">
                <label>WORK PERMIT NO</label>
                <div className="field-value">{yardData.workPermitNo}</div>
              </div>
              <div className="detail-field">
                <label>TIME IN</label>
                <div className="field-value">{yardData.timeIn}</div>
              </div>
              <div className="detail-field">
                <label>EMPLOYEE ID</label>
                <div className="field-value">{yardData.employeeId}</div>
              </div>
              <div className="detail-field">
                <label>FIN NO</label>
                <div className="field-value">{yardData.finNo}</div>
              </div>
              <div className="detail-field">
                <label>TIME OUT</label>
                <div className="field-value">{yardData.timeOut}</div>
              </div>
              <div className="detail-field">
                <label>COMPANY NAME</label>
                <div className="field-value">{yardData.companyName}</div>
              </div>
              <div className="detail-field">
                <label>DATE IN</label>
                <div className="field-value">{yardData.dateIn}</div>
              </div>
              <div className="detail-field">
                <label>PROJECT</label>
                <div className="field-value">{yardData.project}</div>
              </div>
              <div className="detail-field">
                <label>SHIFT TYPE</label>
                <div className="field-value">{yardData.shiftType}</div>
              </div>
              <div className="detail-field">
                <label>DATE OUT</label>
                <div className="field-value">{yardData.dateOut}</div>
              </div>
              <div className="detail-field">
                <label>RECORD TYPE</label>
                <div className="field-value">{yardData.recordType}</div>
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
                <div className="field-value">{yardData.createdBy}</div>
              </div>
              <div className="detail-field">
                <label>LAST MODIFIED BY</label>
                <div className="field-value">{yardData.lastModifiedBy}</div>
              </div>
              <div className="detail-field">
                <label>CREATED DATE</label>
                <div className="field-value">{yardData.createdDate}</div>
              </div>
              <div className="detail-field">
                <label>LAST MODIFIED DATE</label>
                <div className="field-value">{yardData.lastModifiedDate}</div>
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

export default ViewYardDataDetail;
