import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCareerProgressionDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('workflow');
  const [employeeDetailExpanded, setEmployeeDetailExpanded] = useState(true);
  const [progDetailExpanded, setProgDetailExpanded] = useState(true);
  const [summaryExpanded, setSummaryExpanded] = useState(true);

  const progressionData = {
    id: 1,
    employeeName: '222267 Demo employee',
    progCode: '',
    hireDate: '28/9/2018',
    payGroup: 'NVT GROUP',
    jobTitle: 'accountant',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd',
    country: 'Singapore',
    refAppraisalRecord: '',
    dataUpdated: false,
    status: 'Approved',
    progressionDate: '1/9/2021',
    department: 'TOM : Admin',
    payEffectOn: '1/9/2021',
    reason: '',
    oldSalary: '5,000.00',
    increment: '1,000.00',
    newSalary: '6,000.00',
    name: 1,
    percentIncrement: '20.0%',
    updateSalary: true
  };

  const workflowHistory = [
    {
      workflow: 'Career Progression',
      currentState: 'Approved',
      dateEnteredWorkflow: '30/9/2021 11:14 am',
      dateEnteredState: '30/9/2021 11:15 am',
      options: '',
      status: 'Active',
      cancel: 'Cancel'
    },
    {
      workflow: 'Career Progression',
      currentState: 'Pending Approval/Recheck',
      dateEnteredWorkflow: '30/9/2021 11:14 am',
      dateEnteredState: '30/9/2021 11:15 am',
      options: '',
      status: '',
      cancel: 'Log'
    },
    {
      workflow: 'Career Progression',
      currentState: 'State 1',
      dateEnteredWorkflow: '30/9/2021 11:14 am',
      dateEnteredState: '30/9/2021 11:15 am',
      options: '',
      status: '',
      cancel: 'Log'
    }
  ];

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
          <i className="fas fa-chart-line"></i>
          <div>
            <h1>Career Progression-Salary</h1>
            <div className="detail-subtitle">
              <span>{progressionData.id}</span>
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
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-redo"></i>
        </button>
      </div>

      <div className="detail-content">
        {/* Employee Detail Section */}
        <div className="detail-section" style={{ marginBottom: '1.5rem' }}>
          <div 
            className="section-header" 
            onClick={() => setEmployeeDetailExpanded(!employeeDetailExpanded)}
            style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}
          >
            <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Employee Detail</h3>
            <i className={`fas fa-chevron-${employeeDetailExpanded ? 'up' : 'down'}`}></i>
          </div>
          {employeeDetailExpanded && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', padding: '1.5rem', background: '#f9f9f9', borderRadius: '0 0 8px 8px' }}>
              <div>
                <div className="detail-field" style={{ marginBottom: '1rem' }}>
                  <label>EMPLOYEE NAME</label>
                  <div className="field-value">{progressionData.employeeName}</div>
                </div>
                <div className="detail-field" style={{ marginBottom: '1rem' }}>
                  <label>PROG CODE</label>
                  <div className="field-value">{progressionData.progCode || '-'}</div>
                </div>
                <div className="detail-field">
                  <label>HIRE DATE</label>
                  <div className="field-value">{progressionData.hireDate}</div>
                </div>
              </div>
              <div>
                <div className="detail-field" style={{ marginBottom: '1rem' }}>
                  <label>PAY GROUP</label>
                  <div className="field-value">{progressionData.payGroup}</div>
                </div>
                <div className="detail-field" style={{ marginBottom: '1rem' }}>
                  <label>JOB TITLE</label>
                  <div className="field-value">{progressionData.jobTitle}</div>
                </div>
              </div>
              <div>
                <div className="detail-field" style={{ marginBottom: '1rem' }}>
                  <label>SUBSIDIARY</label>
                  <div className="field-value">{progressionData.subsidiary}</div>
                </div>
                <div className="detail-field">
                  <label>COUNTRY</label>
                  <div className="field-value">{progressionData.country}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Prog Detail Section */}
        <div className="detail-section" style={{ marginBottom: '1.5rem' }}>
          <div 
            className="section-header" 
            onClick={() => setProgDetailExpanded(!progDetailExpanded)}
            style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}
          >
            <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Prog Detail</h3>
            <i className={`fas fa-chevron-${progDetailExpanded ? 'up' : 'down'}`}></i>
          </div>
          {progDetailExpanded && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', padding: '1.5rem', background: '#f9f9f9', borderRadius: '0 0 8px 8px' }}>
              <div>
                <div className="detail-field" style={{ marginBottom: '1rem' }}>
                  <label>REF APPRAISAL RECORD</label>
                  <div className="field-value">{progressionData.refAppraisalRecord || '-'}</div>
                </div>
                <div className="detail-field" style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="checkbox" checked={progressionData.dataUpdated} disabled />
                    DATA UPDATED
                  </label>
                </div>
              </div>
              <div>
                <div className="detail-field" style={{ marginBottom: '1rem' }}>
                  <label>STATUS</label>
                  <div className="field-value">{progressionData.status}</div>
                </div>
              </div>
              <div></div>
            </div>
          )}
        </div>

        {/* Summary Section */}
        <div className="detail-section" style={{ marginBottom: '1.5rem' }}>
          <div 
            className="section-header" 
            onClick={() => setSummaryExpanded(!summaryExpanded)}
            style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}
          >
            <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Summary</h3>
            <i className={`fas fa-chevron-${summaryExpanded ? 'up' : 'down'}`}></i>
          </div>
          {summaryExpanded && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', padding: '1.5rem', background: '#f9f9f9', borderRadius: '0 0 8px 8px' }}>
              <div>
                <div className="detail-field" style={{ marginBottom: '1rem' }}>
                  <label>OLD SALARY</label>
                  <div className="field-value">{progressionData.oldSalary}</div>
                </div>
                <div className="detail-field" style={{ marginBottom: '1rem' }}>
                  <label>NAME</label>
                  <div className="field-value">{progressionData.name}</div>
                </div>
              </div>
              <div>
                <div className="detail-field" style={{ marginBottom: '1rem' }}>
                  <label>INCREMENT</label>
                  <div className="field-value">{progressionData.increment}</div>
                </div>
                <div className="detail-field" style={{ marginBottom: '1rem' }}>
                  <label>% OF INCREMENT</label>
                  <div className="field-value">{progressionData.percentIncrement}</div>
                </div>
              </div>
              <div>
                <div className="detail-field" style={{ marginBottom: '1rem' }}>
                  <label>NEW SALARY</label>
                  <div className="field-value">{progressionData.newSalary}</div>
                </div>
                <div className="detail-field">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="checkbox" checked={progressionData.updateSalary} disabled />
                    UPDATE SALARY
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'workflow' ? 'active' : ''}`}
              onClick={() => setActiveTab('workflow')}
            >
              Workflow
            </button>
            <button 
              className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`}
              onClick={() => setActiveTab('custom')}
            >
              Custom
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'workflow' && (
              <div className="tab-content-wrapper" style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                  <label>VIEW</label>
                  <select className="form-control" style={{ width: '200px' }}>
                    <option>Default</option>
                  </select>
                  <button className="btn btn-primary">Refresh</button>
                </div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>WORKFLOW</th>
                      <th>CURRENT STATE</th>
                      <th>DATE ENTERED WORKFLOW</th>
                      <th>DATE ENTERED STATE ▼</th>
                      <th>OPTIONS</th>
                      <th>STATUS</th>
                      <th>CANCEL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workflowHistory.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.workflow}</td>
                        <td>{item.currentState}</td>
                        <td>{item.dateEnteredWorkflow}</td>
                        <td>{item.dateEnteredState}</td>
                        <td>{item.options}</td>
                        <td>{item.status}</td>
                        <td><button className="view-link">{item.cancel}</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'custom' && (
              <div className="tab-content-wrapper" style={{ padding: '1.5rem' }}>
                <p style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                  No custom data available
                </p>
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

export default ViewCareerProgressionDetail;
