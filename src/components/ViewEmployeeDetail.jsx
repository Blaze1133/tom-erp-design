import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewEmployeeDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('contact');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);
  const [otherInfoCollapsed, setOtherInfoCollapsed] = useState(false);

  const employeeData = {
    employeeId: 'MEP01 001',
    status: 'ACTIVE',
    mrMs: 'MR',
    name: 'JEGANATHAN SUNDARAVELU',
    knownName: 'SUNDARAVELU',
    initials: 'J',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    department: 'MEP MARINE',
    location: 'MEP MARINE CC',
    payPostingCategory: 'Jn Direct',
    currency: 'SGD',
    supervisor: 'MEP057 Mahendran S/O Minisamy',
    email: 'tom@tom.sg',
    phone: '',
    address: 'MR JEGANATHAN SUNDARAVELU\n6 TUAS SOUTH STREET 15\nCDPL DORMITORY\n608567\nSingapore'
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
          <i className="fas fa-user"></i>
          <div>
            <h1>Employee</h1>
            <div className="detail-subtitle">
              <span>{employeeData.employeeId}</span>
              <span className="status-badge-detail" style={{ background: '#4caf50' }}>
                {employeeData.status}
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
          <button className="btn-action">
            <i className="fas fa-question-circle"></i>
          </button>
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
        <button className="btn-toolbar">Leave Enrollment</button>
        <button className="btn-toolbar">Career Prog-Salary</button>
        <button className="btn-toolbar">Career Prog-Status</button>
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
        {/* Primary Information Section */}
        <div className={`detail-section ${primaryInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setPrimaryInfoCollapsed(!primaryInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>EMPLOYEE ID</label>
                <div className="field-value">{employeeData.employeeId}</div>
              </div>
              <div className="detail-field">
                <label>MR./MS...</label>
                <div className="field-value">{employeeData.mrMs}</div>
              </div>
              <div className="detail-field">
                <label>NAME</label>
                <div className="field-value">{employeeData.name}</div>
              </div>
              <div className="detail-field">
                <label>KNOWN NAME</label>
                <div className="field-value">{employeeData.knownName}</div>
              </div>
              <div className="detail-field">
                <label>INITIALS</label>
                <div className="field-value">{employeeData.initials}</div>
              </div>
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{employeeData.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>COUNTRY</label>
                <div className="field-value">Singapore</div>
              </div>
              <div className="detail-field">
                <label>DO NOT CONSIDER IN IR8A</label>
                <div className="field-value">
                  <input type="checkbox" disabled />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification Section */}
        <div className={`detail-section ${classificationCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setClassificationCollapsed(!classificationCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>DEPARTMENT</label>
                <div className="field-value">{employeeData.department}</div>
              </div>
              <div className="detail-field">
                <label>LOCATION</label>
                <div className="field-value">{employeeData.location}</div>
              </div>
              <div className="detail-field">
                <label>PAY POSTING CATEGORY</label>
                <div className="field-value">{employeeData.payPostingCategory}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Info Section */}
        <div className={`detail-section ${otherInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setOtherInfoCollapsed(!otherInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Other Info</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>IMAGE</label>
                <div className="field-value"></div>
              </div>
              <div className="detail-field">
                <label>NOTES</label>
                <div className="field-value"></div>
              </div>
              <div className="detail-field">
                <label>CURRENCY</label>
                <div className="field-value">{employeeData.currency}</div>
              </div>
              <div className="detail-field">
                <label>SUPERVISOR</label>
                <div className="field-value">{employeeData.supervisor}</div>
              </div>
              <div className="detail-field">
                <label>1ST LEVEL LEAVE APPROVER</label>
                <div className="field-value">{employeeData.supervisor}</div>
              </div>
              <div className="detail-field">
                <label>2ND LEVEL LEAVE APPROVER</label>
                <div className="field-value"></div>
              </div>
              <div className="detail-field">
                <label>3RD LEVEL LEAVE APPROVER</label>
                <div className="field-value"></div>
              </div>
              <div className="detail-field">
                <label>NAME</label>
                <div className="field-value">{employeeData.name}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveTab('contact')}
            >
              Contact/Address
            </button>
            <button 
              className={`tab-btn ${activeTab === 'humanResources' ? 'active' : ''}`}
              onClick={() => setActiveTab('humanResources')}
            >
              Human Resources
            </button>
            <button 
              className={`tab-btn ${activeTab === 'payroll' ? 'active' : ''}`}
              onClick={() => setActiveTab('payroll')}
            >
              Payroll
            </button>
            <button 
              className={`tab-btn ${activeTab === 'leaveSwipe' ? 'active' : ''}`}
              onClick={() => setActiveTab('leaveSwipe')}
            >
              Leave/Swipe
            </button>
            <button 
              className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`}
              onClick={() => setActiveTab('communication')}
            >
              Communication
            </button>
            <button 
              className={`tab-btn ${activeTab === 'access' ? 'active' : ''}`}
              onClick={() => setActiveTab('access')}
            >
              Access
            </button>
            <button 
              className={`tab-btn ${activeTab === 'systemInfo' ? 'active' : ''}`}
              onClick={() => setActiveTab('systemInfo')}
            >
              System Information
            </button>
            <button 
              className={`tab-btn ${activeTab === 'relatedRecords' ? 'active' : ''}`}
              onClick={() => setActiveTab('relatedRecords')}
            >
              Related Records
            </button>
            <button 
              className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`}
              onClick={() => setActiveTab('custom')}
            >
              Custom
            </button>
            <button 
              className={`tab-btn ${activeTab === 'workInjury' ? 'active' : ''}`}
              onClick={() => setActiveTab('workInjury')}
            >
              Work Injury and Insurance
            </button>
            <button 
              className={`tab-btn ${activeTab === 'employeeExit' ? 'active' : ''}`}
              onClick={() => setActiveTab('employeeExit')}
            >
              Employee Exit Process
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'contact' && (
              <div className="tab-content-wrapper">
                <div className="detail-grid" style={{ padding: '1.5rem' }}>
                  <div className="detail-field">
                    <label>EMAIL</label>
                    <div className="field-value link-text">{employeeData.email}</div>
                  </div>
                  <div className="detail-field">
                    <label>HOME PHONE</label>
                    <div className="field-value"></div>
                  </div>
                  <div className="detail-field">
                    <label>ALT. EMAIL</label>
                    <div className="field-value link-text">{employeeData.email}</div>
                  </div>
                  <div className="detail-field">
                    <label>FAX</label>
                    <div className="field-value"></div>
                  </div>
                  <div className="detail-field">
                    <label>PHONE</label>
                    <div className="field-value">{employeeData.phone}</div>
                  </div>
                  <div className="detail-field">
                    <label>ADDRESS</label>
                    <div className="field-value" style={{ whiteSpace: 'pre-line' }}>{employeeData.address}</div>
                  </div>
                  <div className="detail-field">
                    <label>OFFICE PHONE</label>
                    <div className="field-value"></div>
                  </div>
                  <div className="detail-field">
                    <label>MOBILE PHONE</label>
                    <div className="field-value"></div>
                  </div>
                </div>

                <div style={{ padding: '1.5rem', borderTop: '1px solid #e8e8e8' }}>
                  <h4 style={{ marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 600 }}>Address ●</h4>
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>DEFAULT SHIPPING</th>
                        <th>HOME</th>
                        <th>LABEL</th>
                        <th>ADDRESS</th>
                        <th>EDIT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Yes</td>
                        <td>Yes</td>
                        <td>6 TUAS SOUTH STREET 15</td>
                        <td>
                          MR JEGANATHAN SUNDARAVELU<br/>
                          6 TUAS SOUTH STREET 15<br/>
                          CDPL DORMITORY<br/>
                          608567<br/>
                          Singapore
                        </td>
                        <td>
                          <button className="view-link">
                            <i className="fas fa-edit"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab !== 'contact' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>Content for {activeTab} tab will be displayed here.</p>
              </div>
            )}
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

export default ViewEmployeeDetail;
