import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewIR8AYearDetail = ({ onBack, onEdit, selectedIR8AYear }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('notes');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [notesView, setNotesView] = useState('Default');

  // Sample data
  const ir8aYearData = {
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    payCalendar: '2022 MEP',
    year: '2022',
    payGroup: 'Hourly (MEP)',
    className: '',
    employersTaxRefNo: '199507962E',
    employerName: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    organisationIdType: 'UEN - Local Company Registration number issued by ACRA',
    orgIdNo: '',
    nameOfAuthorizedPerson: 'MEP004 Camila Spinde',
    designationOfAuthorizedPerson: 'EXECUTIVE DIRECTOR',
    telephoneNumber: '96714249',
    authorizedEmailId: 'camila@tom.sg',
    ir8aApiResponse: 'C:StatusCode":"200","desc":{"errors":[],"warnings":[],"info":{"errors":[],"warnings":[]}}',
    dataProcess: true,
    irasAssessmentYearData: [
      {
        id: 538,
        employeeName: 'MEP004 Peraman Ramachandran',
        dateOfApproval: '1/1/2022',
        directorsFees: '1/1/2022',
        grossCommissionPaidFrom: '',
        dateOfDeclarationOfBonus: '',
        ir8aSubmitted: 'No',
        benefitInKind: '',
        esopEsow: ''
      },
      {
        id: 539,
        employeeName: 'MEP005 veerabadhran kalaivanan',
        dateOfApproval: '1/1/2022',
        directorsFees: '1/1/2022',
        grossCommissionPaidFrom: '',
        dateOfDeclarationOfBonus: '',
        ir8aSubmitted: 'No',
        benefitInKind: '',
        esopEsow: ''
      },
      {
        id: 540,
        employeeName: 'MEP007 Annamalai murugan',
        dateOfApproval: '1/1/2022',
        directorsFees: '1/1/2022',
        grossCommissionPaidFrom: '',
        dateOfDeclarationOfBonus: '',
        ir8aSubmitted: 'No',
        benefitInKind: '',
        esopEsow: ''
      },
      {
        id: 541,
        employeeName: 'MEP008 RAHMAN SAIDUR',
        dateOfApproval: '1/1/2022',
        directorsFees: '1/1/2022',
        grossCommissionPaidFrom: '',
        dateOfDeclarationOfBonus: '',
        ir8aSubmitted: 'No',
        benefitInKind: '',
        esopEsow: ''
      },
      {
        id: 542,
        employeeName: 'MEP011 murugesan rajan',
        dateOfApproval: '1/1/2022',
        directorsFees: '1/1/2022',
        grossCommissionPaidFrom: '',
        dateOfDeclarationOfBonus: '',
        ir8aSubmitted: 'No',
        benefitInKind: '',
        esopEsow: ''
      }
    ]
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit(selectedIR8AYear);
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
          <i className="fas fa-file-alt"></i>
          <div>
            <h1>IR8A Year</h1>
            <div className="detail-subtitle">
              <span>{ir8aYearData.subsidiary}</span>
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
          <i className="fas fa-copy"></i>
          Corp Login
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-file-alt"></i>
          IR8A Direct Submission
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
            <h3>IR8A Year Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{ir8aYearData.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>EMPLOYER NAME</label>
                <div className="field-value">{ir8aYearData.employerName}</div>
              </div>
              <div className="detail-field">
                <label>PAY CALENDAR</label>
                <div className="field-value">{ir8aYearData.payCalendar}</div>
              </div>
              <div className="detail-field">
                <label>TELEPHONE NUMBER</label>
                <div className="field-value">{ir8aYearData.telephoneNumber}</div>
              </div>
              <div className="detail-field">
                <label>YEAR</label>
                <div className="field-value">{ir8aYearData.year}</div>
              </div>
              <div className="detail-field">
                <label>AUTHORIZED EMAIL ID</label>
                <div className="field-value">{ir8aYearData.authorizedEmailId}</div>
              </div>
              <div className="detail-field">
                <label>PAY GROUP</label>
                <div className="field-value">{ir8aYearData.payGroup}</div>
              </div>
              <div className="detail-field">
                <label>IR8A API RESPONSE</label>
                <div className="field-value" style={{ fontSize: '11px', wordBreak: 'break-all' }}>
                  {ir8aYearData.ir8aApiResponse}
                </div>
              </div>
              <div className="detail-field">
                <label>CLASS NAME</label>
                <div className="field-value">{ir8aYearData.className || '-'}</div>
              </div>
              <div className="detail-field">
                <label>DATA PROCESS</label>
                <div className="field-value">
                  <input type="checkbox" checked={ir8aYearData.dataProcess} disabled />
                </div>
              </div>
              <div className="detail-field">
                <label>EMPLOYER'S TAX REF. NO. / UEN</label>
                <div className="field-value">{ir8aYearData.employersTaxRefNo}</div>
              </div>
              <div className="detail-field">
                <label>ORGANISATION ID TYPE</label>
                <div className="field-value">{ir8aYearData.organisationIdType}</div>
              </div>
              <div className="detail-field">
                <label>ORG ID NO</label>
                <div className="field-value">{ir8aYearData.orgIdNo || '-'}</div>
              </div>
              <div className="detail-field">
                <label>NAME OF AUTHORIZED PERSON</label>
                <div className="field-value">{ir8aYearData.nameOfAuthorizedPerson}</div>
              </div>
              <div className="detail-field">
                <label>DESIGNATION OF AUTHORIZED PERSON</label>
                <div className="field-value">{ir8aYearData.designationOfAuthorizedPerson}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'notes' ? 'active' : ''}`}
              onClick={() => setActiveTab('notes')}
            >
              Notes
            </button>
            <button 
              className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`}
              onClick={() => setActiveTab('custom')}
            >
              Custom
            </button>
            <button 
              className={`tab-btn ${activeTab === 'workflow' ? 'active' : ''}`}
              onClick={() => setActiveTab('workflow')}
            >
              Workflow
            </button>
            <button 
              className={`tab-btn ${activeTab === 'iras-assessment' ? 'active' : ''}`}
              onClick={() => setActiveTab('iras-assessment')}
            >
              IRAS Assessment Year
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'notes' && (
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: '#666' }}>VIEW</label>
                    <select 
                      value={notesView}
                      onChange={(e) => setNotesView(e.target.value)}
                      style={{
                        padding: '4px 8px',
                        border: '1px solid #ced4da',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    >
                      <option>Default</option>
                      <option>Summary</option>
                      <option>Detailed</option>
                    </select>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{
                      background: '#28a745',
                      color: 'white',
                      border: '1px solid #28a745',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      New Note
                    </button>
                    <button style={{
                      background: 'white',
                      color: '#495057',
                      border: '1px solid #ced4da',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}>
                      Customize View
                    </button>
                  </div>
                </div>

                <div style={{ overflowX: 'auto' }}>
                  <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '12px'
                  }}>
                    <thead>
                      <tr style={{ background: '#f8f9fa' }}>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>EDIT</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>DATE</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>AUTHOR</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>TITLE</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>MEMO</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>DIRECTION</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>TYPE</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>REMOVE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="8" style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'custom' && (
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: '#666' }}>VIEW</label>
                    <select 
                      style={{
                        padding: '4px 8px',
                        border: '1px solid #ced4da',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    >
                      <option>Default View</option>
                    </select>
                    <span style={{ fontSize: '12px', color: '#666' }}>IR8A DETAIL</span>
                    <span style={{ fontSize: '12px', color: '#666' }}>&lt;type then tab&gt;</span>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{
                      background: '#28a745',
                      color: 'white',
                      border: '1px solid #28a745',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      New IR8A Detail
                    </button>
                    <button style={{
                      background: 'white',
                      color: '#495057',
                      border: '1px solid #ced4da',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}>
                      Attach
                    </button>
                    <button style={{
                      background: 'white',
                      color: '#495057',
                      border: '1px solid #ced4da',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}>
                      Customize View
                    </button>
                  </div>
                </div>

                <div style={{ overflowX: 'auto' }}>
                  <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '11px'
                  }}>
                    <thead>
                      <tr style={{ background: '#f8f9fa' }}>
                        <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '40px' }}>EDIT</th>
                        <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '40px' }}>ID ▲</th>
                        <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '180px' }}>EMPLOYEE NAME</th>
                        <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '120px' }}>DATE OF APPROVAL DIRECTOR'S FEES</th>
                        <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '120px' }}>GROSS COMMISSION PAID FROM</th>
                        <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '120px' }}>DATE OF DECLARATION OF BONUS</th>
                        <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '80px' }}>IR8A SUBMITTED</th>
                        <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '80px' }}>BENEFIT IN KIND</th>
                        <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '80px' }}>ESOP / ESOW</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ir8aYearData.irasAssessmentYearData.map((item) => (
                        <tr key={item.id}>
                          <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>
                            <button className="view-link" style={{ fontSize: '10px' }}>Edit</button>
                          </td>
                          <td style={{ padding: '6px', border: '1px solid #dee2e6', color: 'var(--blue-accent)' }}>{item.id}</td>
                          <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>{item.employeeName}</td>
                          <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>{item.dateOfApproval}</td>
                          <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>{item.grossCommissionPaidFrom}</td>
                          <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>{item.dateOfDeclarationOfBonus}</td>
                          <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>{item.ir8aSubmitted}</td>
                          <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>{item.benefitInKind}</td>
                          <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>{item.esopEsow}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div style={{ textAlign: 'right', marginTop: '10px', fontSize: '12px', color: '#666' }}>
                  1 to 25 of 83
                </div>
              </div>
            )}

            {activeTab === 'workflow' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>Workflow information will be displayed here.</p>
              </div>
            )}

            {activeTab === 'iras-assessment' && (
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: '#666' }}>VIEW</label>
                    <select 
                      style={{
                        padding: '4px 8px',
                        border: '1px solid #ced4da',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    >
                      <option>Default View</option>
                    </select>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{
                      background: '#28a745',
                      color: 'white',
                      border: '1px solid #28a745',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      New IR8A Detail
                    </button>
                    <button style={{
                      background: 'white',
                      color: '#495057',
                      border: '1px solid #ced4da',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}>
                      Attach
                    </button>
                    <button style={{
                      background: 'white',
                      color: '#495057',
                      border: '1px solid #ced4da',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}>
                      Customize View
                    </button>
                  </div>
                </div>

                <div style={{ overflowX: 'auto' }}>
                  <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '11px'
                  }}>
                    <thead>
                      <tr style={{ background: '#f8f9fa' }}>
                        <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '40px' }}>EDIT</th>
                        <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '40px' }}>ID ▲</th>
                        <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '180px' }}>EMPLOYEE NAME</th>
                        <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '120px' }}>DATE OF APPROVAL DIRECTOR'S FEES</th>
                        <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '120px' }}>GROSS COMMISSION PAID FROM</th>
                        <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '120px' }}>DATE OF DECLARATION OF BONUS</th>
                        <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '80px' }}>IR8A SUBMITTED</th>
                        <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '80px' }}>BENEFIT IN KIND</th>
                        <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', minWidth: '80px' }}>ESOP / ESOW</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ir8aYearData.irasAssessmentYearData.map((item) => (
                        <tr key={item.id}>
                          <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>
                            <button className="view-link" style={{ fontSize: '10px' }}>Edit</button>
                          </td>
                          <td style={{ padding: '6px', border: '1px solid #dee2e6', color: 'var(--blue-accent)' }}>{item.id}</td>
                          <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>{item.employeeName}</td>
                          <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>{item.dateOfApproval}</td>
                          <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>{item.grossCommissionPaidFrom}</td>
                          <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>{item.dateOfDeclarationOfBonus}</td>
                          <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>{item.ir8aSubmitted}</td>
                          <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>{item.benefitInKind}</td>
                          <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>{item.esopEsow}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div style={{ textAlign: 'right', marginTop: '10px', fontSize: '12px', color: '#666' }}>
                  1 to 25 of 83
                </div>
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
        message={toast.message} 
        type={toast.type} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
    </div>
  );
};

export default ViewIR8AYearDetail;
