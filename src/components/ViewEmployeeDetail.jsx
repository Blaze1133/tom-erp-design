import React, { useState } from 'react';
import Toast from './Toast';
import EmployeePayrollTabView from './EmployeePayrollTabView';
import EmployeeLeaveSwipeTabView from './EmployeeLeaveSwipeTabView';
import EmployeeAccessTabView from './EmployeeAccessTabView';
import EmployeeSystemInfoTabView from './EmployeeSystemInfoTabView';
import EmployeeWorkInjuryTabView from './EmployeeWorkInjuryTabView';
import EmployeeExitProcessTabView from './EmployeeExitProcessTabView';
import './Enquiries.css';

const ViewEmployeeDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('contact');
  const [hrSubTab, setHrSubTab] = useState('basicInfo');
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

            {activeTab === 'payroll' && (
              <EmployeePayrollTabView />
            )}
            {activeTab === 'leaveSwipe' && (
              <EmployeeLeaveSwipeTabView />
            )}
            {activeTab === 'access' && (
              <EmployeeAccessTabView />
            )}
            {activeTab === 'systemInfo' && (
              <EmployeeSystemInfoTabView />
            )}
            {activeTab === 'workInjury' && (
              <EmployeeWorkInjuryTabView />
            )}
            {activeTab === 'employeeExit' && (
              <EmployeeExitProcessTabView />
            )}
            {activeTab === 'humanResources' && (
              <div className="tab-content-wrapper">
                {/* Top section with key HR fields - Above sub-tabs */}
                <div style={{ 
                  padding: '1.5rem', 
                  background: '#f8f9fa', 
                  borderBottom: '1px solid #e0e0e0',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.5rem'
                }}>
                  <div>
                    <div className="detail-field" style={{ marginBottom: '1rem' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', marginBottom: '0.25rem', display: 'block' }}>
                        EMP NATIONALITY <span style={{ color: 'red' }}>*</span>
                      </label>
                      <div style={{ fontSize: '0.9rem', color: '#333', padding: '0.5rem', background: 'white', border: '1px solid #ddd', borderRadius: '4px' }}>
                        INDIAN
                      </div>
                    </div>
                    <div className="detail-field" style={{ marginBottom: '1rem' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', marginBottom: '0.25rem', display: 'block' }}>
                        IS DUTY ROSTER
                      </label>
                      <div style={{ fontSize: '0.9rem', color: '#333', padding: '0.5rem' }}>
                        <input type="checkbox" disabled style={{ marginRight: '0.5rem' }} />
                      </div>
                    </div>
                    <div className="detail-field">
                      <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', marginBottom: '0.25rem', display: 'block' }}>
                        CURRENT AGE
                      </label>
                      <div style={{ fontSize: '0.9rem', color: '#333', padding: '0.5rem', background: '#f5f5f5', border: '1px solid #ddd', borderRadius: '4px' }}>
                        40
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="detail-field" style={{ marginBottom: '1rem' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', marginBottom: '0.25rem', display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" checked disabled style={{ marginRight: '0.5rem' }} />
                        EXEMPTION FOR BIOMETRIC
                      </label>
                    </div>
                    <div className="detail-field">
                      <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', marginBottom: '0.25rem', display: 'block' }}>
                        BIO-METRIC NUMBER
                      </label>
                      <div style={{ fontSize: '0.9rem', color: '#333', padding: '0.5rem', background: 'white', border: '1px solid #ddd', borderRadius: '4px' }}>
                        MEP01 001
                      </div>
                    </div>
                  </div>
                </div>

                {/* HR Sub-tabs - Horizontal scrollable */}
                <div style={{ 
                  borderBottom: '2px solid #e0e0e0', 
                  background: '#f8f9fa',
                  overflowX: 'auto',
                  whiteSpace: 'nowrap',
                  display: 'flex'
                }}>
                  <button 
                    className={`tab-btn ${hrSubTab === 'basicInfo' ? 'active' : ''}`}
                    onClick={() => setHrSubTab('basicInfo')}
                    style={{ 
                      fontSize: '0.8rem', 
                      padding: '0.75rem 1.25rem',
                      border: 'none',
                      background: hrSubTab === 'basicInfo' ? '#4a5568' : 'transparent',
                      color: hrSubTab === 'basicInfo' ? 'white' : '#4a5568',
                      cursor: 'pointer',
                      fontWeight: 500,
                      transition: 'all 0.2s',
                      borderRadius: '0'
                    }}
                  >
                    Basic Info ●
                  </button>
                  <button 
                    className={`tab-btn ${hrSubTab === 'jobInfo' ? 'active' : ''}`}
                    onClick={() => setHrSubTab('jobInfo')}
                    style={{ 
                      fontSize: '0.8rem', 
                      padding: '0.75rem 1.25rem',
                      border: 'none',
                      background: hrSubTab === 'jobInfo' ? '#4a5568' : 'transparent',
                      color: hrSubTab === 'jobInfo' ? 'white' : '#4a5568',
                      cursor: 'pointer',
                      fontWeight: 500,
                      transition: 'all 0.2s',
                      borderRadius: '0'
                    }}
                  >
                    Job Info ●
                  </button>
                  <button 
                    className={`tab-btn ${hrSubTab === 'bankInfo' ? 'active' : ''}`}
                    onClick={() => setHrSubTab('bankInfo')}
                    style={{ 
                      fontSize: '0.8rem', 
                      padding: '0.75rem 1.25rem',
                      border: 'none',
                      background: hrSubTab === 'bankInfo' ? '#4a5568' : 'transparent',
                      color: hrSubTab === 'bankInfo' ? 'white' : '#4a5568',
                      cursor: 'pointer',
                      fontWeight: 500,
                      transition: 'all 0.2s',
                      borderRadius: '0'
                    }}
                  >
                    Bank Info ●
                  </button>
                  <button 
                    className={`tab-btn ${hrSubTab === 'education' ? 'active' : ''}`}
                    onClick={() => setHrSubTab('education')}
                    style={{ 
                      fontSize: '0.8rem', 
                      padding: '0.75rem 1.25rem',
                      border: 'none',
                      background: hrSubTab === 'education' ? '#4a5568' : 'transparent',
                      color: hrSubTab === 'education' ? 'white' : '#4a5568',
                      cursor: 'pointer',
                      fontWeight: 500,
                      transition: 'all 0.2s',
                      borderRadius: '0'
                    }}
                  >
                    Education
                  </button>
                  <button 
                    className={`tab-btn ${hrSubTab === 'certification' ? 'active' : ''}`}
                    onClick={() => setHrSubTab('certification')}
                    style={{ 
                      fontSize: '0.8rem', 
                      padding: '0.75rem 1.25rem',
                      border: 'none',
                      background: hrSubTab === 'certification' ? '#4a5568' : 'transparent',
                      color: hrSubTab === 'certification' ? 'white' : '#4a5568',
                      cursor: 'pointer',
                      fontWeight: 500,
                      transition: 'all 0.2s',
                      borderRadius: '0'
                    }}
                  >
                    Employee Certification
                  </button>
                  <button 
                    className={`tab-btn ${hrSubTab === 'emergencyContacts' ? 'active' : ''}`}
                    onClick={() => setHrSubTab('emergencyContacts')}
                    style={{ 
                      fontSize: '0.8rem', 
                      padding: '0.75rem 1.25rem',
                      border: 'none',
                      background: hrSubTab === 'emergencyContacts' ? '#4a5568' : 'transparent',
                      color: hrSubTab === 'emergencyContacts' ? 'white' : '#4a5568',
                      cursor: 'pointer',
                      fontWeight: 500,
                      transition: 'all 0.2s',
                      borderRadius: '0'
                    }}
                  >
                    Emergency Contacts
                  </button>
                  <button 
                    className={`tab-btn ${hrSubTab === 'supervisorChangeHist' ? 'active' : ''}`}
                    onClick={() => setHrSubTab('supervisorChangeHist')}
                    style={{ 
                      fontSize: '0.8rem', 
                      padding: '0.75rem 1.25rem',
                      border: 'none',
                      background: hrSubTab === 'supervisorChangeHist' ? '#4a5568' : 'transparent',
                      color: hrSubTab === 'supervisorChangeHist' ? 'white' : '#4a5568',
                      cursor: 'pointer',
                      fontWeight: 500,
                      transition: 'all 0.2s',
                      borderRadius: '0'
                    }}
                  >
                    Supervisor Change Hist. ●
                  </button>
                  <button 
                    className={`tab-btn ${hrSubTab === 'disciplinaryWatches' ? 'active' : ''}`}
                    onClick={() => setHrSubTab('disciplinaryWatches')}
                    style={{ 
                      fontSize: '0.8rem', 
                      padding: '0.75rem 1.25rem',
                      border: 'none',
                      background: hrSubTab === 'disciplinaryWatches' ? '#4a5568' : 'transparent',
                      color: hrSubTab === 'disciplinaryWatches' ? 'white' : '#4a5568',
                      cursor: 'pointer',
                      fontWeight: 500,
                      transition: 'all 0.2s',
                      borderRadius: '0'
                    }}
                  >
                    Disciplinary Watches
                  </button>
                  <button 
                    className={`tab-btn ${hrSubTab === 'expenseReportCurrencies' ? 'active' : ''}`}
                    onClick={() => setHrSubTab('expenseReportCurrencies')}
                    style={{ 
                      fontSize: '0.8rem', 
                      padding: '0.75rem 1.25rem',
                      border: 'none',
                      background: hrSubTab === 'expenseReportCurrencies' ? '#4a5568' : 'transparent',
                      color: hrSubTab === 'expenseReportCurrencies' ? 'white' : '#4a5568',
                      cursor: 'pointer',
                      fontWeight: 500,
                      transition: 'all 0.2s',
                      borderRadius: '0'
                    }}
                  >
                    Expense Report Currencies
                  </button>
                  <button 
                    className={`tab-btn ${hrSubTab === 'companyDocuments' ? 'active' : ''}`}
                    onClick={() => setHrSubTab('companyDocuments')}
                    style={{ 
                      fontSize: '0.8rem', 
                      padding: '0.75rem 1.25rem',
                      border: 'none',
                      background: hrSubTab === 'companyDocuments' ? '#4a5568' : 'transparent',
                      color: hrSubTab === 'companyDocuments' ? 'white' : '#4a5568',
                      cursor: 'pointer',
                      fontWeight: 500,
                      transition: 'all 0.2s',
                      borderRadius: '0'
                    }}
                  >
                    Company Documents
                  </button>
                  <button 
                    className={`tab-btn ${hrSubTab === 'languageKnown' ? 'active' : ''}`}
                    onClick={() => setHrSubTab('languageKnown')}
                    style={{ 
                      fontSize: '0.8rem', 
                      padding: '0.75rem 1.25rem',
                      border: 'none',
                      background: hrSubTab === 'languageKnown' ? '#4a5568' : 'transparent',
                      color: hrSubTab === 'languageKnown' ? 'white' : '#4a5568',
                      cursor: 'pointer',
                      fontWeight: 500,
                      transition: 'all 0.2s',
                      borderRadius: '0'
                    }}
                  >
                    Language Known
                  </button>
                  <button 
                    className={`tab-btn ${hrSubTab === 'previousExperience' ? 'active' : ''}`}
                    onClick={() => setHrSubTab('previousExperience')}
                    style={{ 
                      fontSize: '0.8rem', 
                      padding: '0.75rem 1.25rem',
                      border: 'none',
                      background: hrSubTab === 'previousExperience' ? '#4a5568' : 'transparent',
                      color: hrSubTab === 'previousExperience' ? 'white' : '#4a5568',
                      cursor: 'pointer',
                      fontWeight: 500,
                      transition: 'all 0.2s',
                      borderRadius: '0'
                    }}
                  >
                    Previous Professional Experience
                  </button>
                  <button 
                    className={`tab-btn ${hrSubTab === 'corporateCards' ? 'active' : ''}`}
                    onClick={() => setHrSubTab('corporateCards')}
                    style={{ 
                      fontSize: '0.8rem', 
                      padding: '0.75rem 1.25rem',
                      border: 'none',
                      background: hrSubTab === 'corporateCards' ? '#4a5568' : 'transparent',
                      color: hrSubTab === 'corporateCards' ? 'white' : '#4a5568',
                      cursor: 'pointer',
                      fontWeight: 500,
                      transition: 'all 0.2s',
                      borderRadius: '0'
                    }}
                  >
                    Corporate Cards
                  </button>
                </div>

                <div style={{ padding: '1.5rem', background: 'white' }}>
                  {/* Basic Info Sub-tab */}
                  {hrSubTab === 'basicInfo' && (
                    <div className="detail-grid">
                          <div className="detail-field">
                            <label>GENDER</label>
                            <div className="field-value">Male</div>
                          </div>
                          <div className="detail-field">
                            <label>BIRTH DATE</label>
                            <div className="field-value">15/7/1984</div>
                          </div>
                          <div className="detail-field">
                            <label>MARITAL STATUS</label>
                            <div className="field-value">Married</div>
                          </div>
                          <div className="detail-field">
                            <label>EMP RESIDENTIAL STATUS</label>
                            <div className="field-value">Foreigner</div>
                          </div>
                          <div className="detail-field">
                            <label>ORIGIN COUNTRY</label>
                            <div className="field-value">India</div>
                          </div>
                          <div className="detail-field">
                            <label>ETHNIC RACE</label>
                            <div className="field-value">Indian</div>
                          </div>
                          <div className="detail-field">
                            <label>EMP NATIONALITY</label>
                            <div className="field-value">INDIAN</div>
                          </div>
                          <div className="detail-field">
                            <label>IS DUTY ROSTER</label>
                            <div className="field-value">
                              <input type="checkbox" disabled />
                            </div>
                          </div>
                          <div className="detail-field">
                            <label>CURRENT AGE</label>
                            <div className="field-value">40</div>
                          </div>
                          <div className="detail-field">
                            <label>EXEMPTION FOR BIOMETRIC</label>
                            <div className="field-value">
                              <input type="checkbox" checked disabled />
                            </div>
                          </div>
                          <div className="detail-field">
                            <label>BIO-METRIC NUMBER</label>
                            <div className="field-value">MEP01 001</div>
                          </div>
                          <div className="detail-field">
                            <label>TYPE OF CONTRIBUTION FUND</label>
                            <div className="field-value"></div>
                          </div>
                          <div className="detail-field">
                            <label>WORK PASS NO</label>
                            <div className="field-value">0 33770502</div>
                          </div>
                          <div className="detail-field">
                            <label>FWL CATEGORY</label>
                            <div className="field-value">Marine WPH Basic Tier-300</div>
                          </div>
                          <div className="detail-field">
                            <label>PASSPORT ID</label>
                            <div className="field-value">W8876552</div>
                          </div>
                          <div className="detail-field">
                            <label>SINGAPORE PERMIT RESIDENCE START DATE</label>
                            <div className="field-value">20/8/2025</div>
                          </div>
                          <div className="detail-field">
                            <label>PASSPORT EXPIRY DATE</label>
                            <div className="field-value"></div>
                          </div>
                          <div className="detail-field">
                            <label>SINGAPORE PERMIT RESIDENCE END DATE</label>
                            <div className="field-value">20/8/2026</div>
                          </div>
                          <div className="detail-field">
                            <label>EXPENSE LIMIT</label>
                            <div className="field-value"></div>
                          </div>
                          <div className="detail-field">
                            <label>WORK PERMIT/PASS TYPE</label>
                            <div className="field-value">WORK PERMIT</div>
                          </div>
                          <div className="detail-field">
                            <label>EXPENSE APPROVER</label>
                            <div className="field-value"></div>
                          </div>
                          <div className="detail-field">
                            <label>WORK PERMIT START DATE</label>
                            <div className="field-value">20/8/2025</div>
                          </div>
                          <div className="detail-field">
                            <label>WORK PERMIT END DATE</label>
                            <div className="field-value">20/8/2026</div>
                          </div>
                        </div>
                  )}

                  {/* Job Info Sub-tab */}
                  {hrSubTab === 'jobInfo' && (
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>HIRE DATE</label>
                        <div className="field-value">20/8/2025</div>
                      </div>
                      <div className="detail-field">
                        <label>EMPLOYEE STATUS</label>
                        <div className="field-value">Permanent</div>
                      </div>
                      <div className="detail-field">
                        <label>PROBATION (IN MONTH)</label>
                        <div className="field-value">1</div>
                      </div>
                      <div className="detail-field">
                        <label>EMPLOYMENT TYPE</label>
                        <div className="field-value">Permanent</div>
                      </div>
                      <div className="detail-field">
                        <label>CONFIRMATION DATE</label>
                        <div className="field-value"></div>
                      </div>
                      <div className="detail-field">
                        <label>JOB TITLE</label>
                        <div className="field-value">SUPERVISOR</div>
                      </div>
                      <div className="detail-field">
                        <label>JOB DESCRIPTION</label>
                        <div className="field-value">Supervisor</div>
                      </div>
                      <div className="detail-field">
                        <label>SALES REP</label>
                        <div className="field-value"></div>
                      </div>
                      <div className="detail-field">
                        <label>TERMINATION DATE / LAST WORKING DAY</label>
                        <div className="field-value"></div>
                      </div>
                      <div className="detail-field">
                        <label>CONTRACT END DATE</label>
                        <div className="field-value"></div>
                      </div>
                      <div className="detail-field">
                        <label>RESIGNATION DATE</label>
                        <div className="field-value"></div>
                      </div>
                      <div className="detail-field">
                        <label>NOTICE PERIOD</label>
                        <div className="field-value">0</div>
                      </div>
                      <div className="detail-field" style={{ gridColumn: 'span 3' }}>
                        <label>RESIGNATION REMARKS</label>
                        <div className="field-value"></div>
                      </div>
                      <div className="detail-field">
                        <label>EFFECTIVE START DATE</label>
                        <div className="field-value">20/8/2025</div>
                      </div>
                      <div className="detail-field">
                        <label>YEAR END DATE</label>
                        <div className="field-value">31/12/2025</div>
                      </div>
                      <div className="detail-field">
                        <label>PAY ADD WAGE MONTH</label>
                        <div className="field-value">5</div>
                      </div>
                      <div className="detail-field">
                        <label>EMPLOYEE START DATE</label>
                        <div className="field-value">1/1/2025</div>
                      </div>
                      <div className="detail-field">
                        <label>LEAVE/PAY CALENDAR</label>
                        <div className="field-value">MEP 2025</div>
                      </div>
                      <div className="detail-field">
                        <label>WORK SITE</label>
                        <div className="field-value"></div>
                      </div>
                    </div>
                  )}

                    {/* Bank Info Sub-tab */}
                    {hrSubTab === 'bankInfo' && (
                      <div className="detail-grid">
                        <div className="detail-field">
                          <label>BRANCH ID</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>BANK NAME</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>BANK ACCOUNT NO</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>BANK NUMBER/ BANK CODE</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>BANK ACCOUNT NAME</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>BIC CODE</label>
                          <div className="field-value"></div>
                        </div>
                      </div>
                    )}

                    {/* Education Sub-tab */}
                    {hrSubTab === 'education' && (
                      <div className="detail-grid">
                        <div className="detail-field">
                          <label>LEVEL OF EDUCATION</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>DEGREE</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>DATE CONFERRED</label>
                          <div className="field-value"></div>
                        </div>
                      </div>
                    )}


                    {/* Employee Certification Sub-tab */}
                    {hrSubTab === 'certification' && (
                      <div className="detail-grid">
                        <div className="detail-field">
                          <label>SECTOR</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>SSIC - TRANSFER NO</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>SSIC GT EXPIRY DATE</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>SSDC - HOT WORK CERT NO</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>SSIC HT EXPIRY DATE</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>SSSC - SHIPYARD SAFETY SUPERVISOR CERT NO</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>BCSS CERT NO</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>CSOC EXPIRY DATE</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>REST DAY</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>RIGGER / SIGNAL MAN CERT NO</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>LIFTING SUPERVISOR - CERT NO</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>CSOC ATTACHMENT</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>CSOC CERT NO</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>CONSTRUCTION SUPERVISOR CERT NO</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>CORE TRADE TEST DATE</label>
                          <div className="field-value"></div>
                        </div>
                      </div>
                    )}

                    {/* Emergency Contacts Sub-tab */}
                    {hrSubTab === 'emergencyContacts' && (
                      <div className="detail-grid">
                        <div className="detail-field">
                          <label>NAME</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>RELATIONSHIP</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>EMERGENCY ADDRESS</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>EMERGENCY PHONE</label>
                          <div className="field-value"></div>
                        </div>
                      </div>
                    )}


                    {/* Supervisor Change History Sub-tab */}
                    {hrSubTab === 'supervisorChangeHist' && (
                      <div style={{ padding: '2rem', background: 'white' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#4a5568' }}>Supervisor Change History</h2>
                        <div className="detail-grid" style={{ marginBottom: '2rem' }}>
                          <div className="detail-field">
                            <label>EMPLOYEE</label>
                            <div className="field-value">MEP01 001 JEGANATHAN SUNDARAVELU</div>
                          </div>
                          <div className="detail-field">
                            <label>SUPERVISOR</label>
                            <div className="field-value">MEP057 Mahendran S/O Minisamy</div>
                          </div>
                          <div className="detail-field">
                            <label>VALID RANGE</label>
                            <div className="field-value">31/3/2024 - Any</div>
                          </div>
                          <div className="detail-field">
                            <label>EFFECTIVE DATE</label>
                            <div className="field-value">20/8/2025</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Disciplinary Watches Sub-tab */}
                    {hrSubTab === 'disciplinaryWatches' && (
                      <div className="detail-grid">
                        <div className="detail-field">
                          <label>IS WATCH</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>START DATE</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>REVIEW DATE</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>END DATE</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>MEMO</label>
                          <div className="field-value"></div>
                        </div>
                        <div className="detail-field">
                          <label>DISCIPLINARY DOCUMENT</label>
                          <div className="field-value"></div>
                        </div>
                      </div>
                    )}

                    {/* Expense Report Currencies Sub-tab */}
                    {hrSubTab === 'expenseReportCurrencies' && (
                      <div className="items-table-wrapper">
                        <table className="detail-items-table">
                          <thead>
                            <tr>
                              <th>CURRENCY</th>
                              <th>EXCHANGE RATE</th>
                              <th>EFFECTIVE DATE</th>
                              <th>REMARKS</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="4" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                                No expense report currency records available
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Company Documents Sub-tab */}
                    {hrSubTab === 'companyDocuments' && (
                      <div className="items-table-wrapper">
                        <table className="detail-items-table">
                          <thead>
                            <tr>
                              <th>DOCUMENT NAME</th>
                              <th>DOCUMENT TYPE</th>
                              <th>ISSUE DATE</th>
                              <th>EXPIRY DATE</th>
                              <th>REMARKS</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="5" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                                No company document records available
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Language Known Sub-tab */}
                    {hrSubTab === 'languageKnown' && (
                      <div className="items-table-wrapper">
                        <table className="detail-items-table">
                          <thead>
                            <tr>
                              <th>LANGUAGE</th>
                              <th>PROFICIENCY LEVEL</th>
                              <th>READING</th>
                              <th>WRITING</th>
                              <th>SPEAKING</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="5" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                                No language records available
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Previous Professional Experience Sub-tab */}
                    {hrSubTab === 'previousExperience' && (
                      <div className="items-table-wrapper">
                        <table className="detail-items-table">
                          <thead>
                            <tr>
                              <th>COMPANY NAME</th>
                              <th>DESIGNATION</th>
                              <th>FROM DATE</th>
                              <th>TO DATE</th>
                              <th>REMARKS</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="5" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                                No previous experience records available
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Corporate Cards Sub-tab */}
                    {hrSubTab === 'corporateCards' && (
                      <div className="items-table-wrapper">
                        <table className="detail-items-table">
                          <thead>
                            <tr>
                              <th>CARD NUMBER</th>
                              <th>CARD TYPE</th>
                              <th>ISSUE DATE</th>
                              <th>EXPIRY DATE</th>
                              <th>REMARKS</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="5" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                                No corporate card records available
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
                </div>
              </div>
            )}

            {activeTab !== 'contact' && activeTab !== 'humanResources' && (
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
