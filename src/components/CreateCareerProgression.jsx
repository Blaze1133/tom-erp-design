import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateCareerProgression = ({ progressionData, onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('workflow');
  const [employeeDetailExpanded, setEmployeeDetailExpanded] = useState(true);
  const [progDetailExpanded, setProgDetailExpanded] = useState(true);
  const [summaryExpanded, setSummaryExpanded] = useState(true);

  const [formData, setFormData] = useState(progressionData || {
    id: '',
    employeeName: '',
    progCode: '',
    hireDate: '28/9/2018',
    payGroup: 'NVT GROUP',
    jobTitle: 'accountant',
    subsidiary: '',
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
  });

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];

  const departments = [
    'TOM : Admin',
    'TOM : Electrical and E&I',
    'TOM : Facility',
    'TOM : Finance',
    'TOM : Finance : Internal Transfer',
    'TOM : Human Resource',
    'TOM : IT',
    'TOM : Logistic',
    'TOM : Operating',
    'TOM : Purchase',
    'TOM : Sales and Marketing',
    'TOM : Security',
    'TOM : Engineering',
    'TOM : Production',
    'MEP MARINE',
    'MEP',
    'O&G',
    'Construction'
  ];

  const progCodeOptions = ['- New -', 'CHGSAL', 'OTHER'];

  const handleInputChange = (field, value) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      
      // Calculate percentage increment when old salary or increment changes
      if (field === 'oldSalary' || field === 'increment') {
        const oldSal = parseFloat((field === 'oldSalary' ? value : updated.oldSalary).replace(/,/g, '')) || 0;
        const incr = parseFloat((field === 'increment' ? value : updated.increment).replace(/,/g, '')) || 0;
        const newSal = oldSal + incr;
        const percent = oldSal > 0 ? ((incr / oldSal) * 100).toFixed(1) : '0.0';
        
        updated.newSalary = newSal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        updated.percentIncrement = `${percent}%`;
      }
      
      return updated;
    });
  };

  const handleSave = () => {
    if (!formData.employeeName || !formData.subsidiary) {
      showToast('Please fill in required fields', 'error');
      return;
    }
    showToast('Career Progression saved successfully!', 'success');
    if (onSave) onSave(formData);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-chart-line"></i>
          <div>
            <h1>Career Progression-Salary</h1>
            <div className="detail-subtitle">
              <span>{progressionData ? progressionData.id : 'New Career Progression'}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">
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
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn-toolbar" onClick={onCancel}>
          <i className="fas fa-times"></i>
          Cancel
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-cog"></i>
          Actions
        </button>
      </div>

      <div className="detail-content">
        {/* Employee Detail Section */}
        <div className="detail-section">
          <div 
            className="section-header" 
            onClick={() => setEmployeeDetailExpanded(!employeeDetailExpanded)}
          >
            <i className={`fas fa-chevron-${employeeDetailExpanded ? 'down' : 'right'}`}></i>
            <h3>Employee Detail</h3>
          </div>
          {employeeDetailExpanded && (
            <div className="section-body">
              <div className="detail-grid">
                <div className="detail-field">
                  <label>EMPLOYEE NAME <span className="required">*</span></label>
                  <select className="form-control" value={formData.employeeName} onChange={(e) => handleInputChange('employeeName', e.target.value)}>
                    <option value="">Select Employee</option>
                    <option value="222267 Demo employee">222267 Demo employee</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>PROG CODE</label>
                  <select className="form-control" value={formData.progCode} onChange={(e) => handleInputChange('progCode', e.target.value)}>
                    <option value="">Select Code</option>
                    {progCodeOptions.map((code, idx) => (
                      <option key={idx} value={code}>{code}</option>
                    ))}
                  </select>
                </div>
                <div className="detail-field">
                  <label>HIRE DATE</label>
                  <input type="date" className="form-control" value={formData.hireDate} onChange={(e) => handleInputChange('hireDate', e.target.value)} />
                </div>
                <div className="detail-field">
                  <label>PAY GROUP</label>
                  <input type="text" className="form-control" value={formData.payGroup} onChange={(e) => handleInputChange('payGroup', e.target.value)} />
                </div>
                <div className="detail-field">
                  <label>JOB TITLE</label>
                  <input type="text" className="form-control" value={formData.jobTitle} onChange={(e) => handleInputChange('jobTitle', e.target.value)} />
                </div>
                <div className="detail-field">
                  <label>SUBSIDIARY <span className="required">*</span></label>
                  <select className="form-control" value={formData.subsidiary} onChange={(e) => handleInputChange('subsidiary', e.target.value)}>
                    <option value="">Select Subsidiary</option>
                    {subsidiaries.map((sub, idx) => (
                      <option key={idx} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
                <div className="detail-field">
                  <label>COUNTRY</label>
                  <select className="form-control" value={formData.country} onChange={(e) => handleInputChange('country', e.target.value)}>
                    <option value="Singapore">Singapore</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Indonesia">Indonesia</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Prog Detail Section */}
        <div className="detail-section">
          <div 
            className="section-header" 
            onClick={() => setProgDetailExpanded(!progDetailExpanded)}
          >
            <i className={`fas fa-chevron-${progDetailExpanded ? 'down' : 'right'}`}></i>
            <h3>Prog Detail</h3>
          </div>
          {progDetailExpanded && (
            <div className="section-body">
              <div className="detail-grid">
                <div className="detail-field">
                  <label>REF APPRAISAL RECORD</label>
                  <select className="form-control" value={formData.refAppraisalRecord} onChange={(e) => handleInputChange('refAppraisalRecord', e.target.value)}>
                    <option value="">Select Record</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>PROGRESSION DATE <span className="required">*</span></label>
                  <input type="text" className="form-control" value={formData.progressionDate} onChange={(e) => handleInputChange('progressionDate', e.target.value)} />
                </div>
                <div className="detail-field">
                  <label>DEPARTMENT</label>
                  <select className="form-control" value={formData.department} onChange={(e) => handleInputChange('department', e.target.value)}>
                    <option value="">Select Department</option>
                    {departments.map((dept, idx) => (
                      <option key={idx} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                <div className="detail-field">
                  <label>PAY EFFECT ON <span className="required">*</span></label>
                  <input type="text" className="form-control" value={formData.payEffectOn} onChange={(e) => handleInputChange('payEffectOn', e.target.value)} />
                </div>
                <div className="detail-field">
                  <label>REASON</label>
                  <select className="form-control" value={formData.reason} onChange={(e) => handleInputChange('reason', e.target.value)}>
                    <option value="">- New -</option>
                    <option value="Merit Increment">Merit Increment</option>
                    <option value="Promotion">Promotion</option>
                    <option value="Salary Adjustment">Salary Adjustment</option>
                    <option value="Market Adjustment">Market Adjustment</option>
                    <option value="Annual Increment">Annual Increment</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>DATA UPDATED</label>
                  <div className="field-value">
                    <input type="checkbox" checked={formData.dataUpdated} onChange={(e) => handleInputChange('dataUpdated', e.target.checked)} />
                  </div>
                </div>
                <div className="detail-field">
                  <label>STATUS</label>
                  <select className="form-control" value={formData.status} onChange={(e) => handleInputChange('status', e.target.value)}>
                    <option value="Approved">Approved</option>
                    <option value="Pending">Pending</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Summary Section */}
        <div className="detail-section">
          <div 
            className="section-header" 
            onClick={() => setSummaryExpanded(!summaryExpanded)}
          >
            <i className={`fas fa-chevron-${summaryExpanded ? 'down' : 'right'}`}></i>
            <h3>Summary</h3>
          </div>
          {summaryExpanded && (
            <div className="section-body">
              <div className="detail-grid">
                <div className="detail-field">
                  <label>OLD SALARY <span className="required">*</span></label>
                  <input type="text" className="form-control" value={formData.oldSalary} onChange={(e) => handleInputChange('oldSalary', e.target.value)} />
                </div>
                <div className="detail-field">
                  <label>NAME</label>
                  <input type="text" className="form-control" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} />
                </div>
                <div className="detail-field">
                  <label>INCREMENT <span className="required">*</span></label>
                  <input type="text" className="form-control" value={formData.increment} onChange={(e) => handleInputChange('increment', e.target.value)} />
                </div>
                <div className="detail-field">
                  <label>% OF INCREMENT</label>
                  <input type="text" className="form-control" value={formData.percentIncrement} disabled style={{ background: '#f5f5f5' }} />
                </div>
                <div className="detail-field">
                  <label>NEW SALARY</label>
                  <input type="text" className="form-control" value={formData.newSalary} disabled style={{ background: '#f5f5f5' }} />
                </div>
                <div className="detail-field">
                  <label>UPDATE SALARY</label>
                  <div className="field-value">
                    <input type="checkbox" checked={formData.updateSalary} onChange={(e) => handleInputChange('updateSalary', e.target.checked)} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'workflow' ? 'active' : ''}`} onClick={() => setActiveTab('workflow')}>Workflow</button>
            <button className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`} onClick={() => setActiveTab('custom')}>Custom</button>
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
                    {progressionData ? (
                      <>
                        <tr>
                          <td>Career Progression</td>
                          <td>Approved</td>
                          <td>30/9/2021 11:14 am</td>
                          <td>30/9/2021 11:15 am</td>
                          <td></td>
                          <td>Active</td>
                          <td><button className="view-link">Cancel</button></td>
                        </tr>
                        <tr>
                          <td>Career Progression</td>
                          <td>Pending Approval/Recheck</td>
                          <td>30/9/2021 11:14 am</td>
                          <td>30/9/2021 11:15 am</td>
                          <td></td>
                          <td></td>
                          <td><button className="view-link">Log</button></td>
                        </tr>
                        <tr>
                          <td>Career Progression</td>
                          <td>State 1</td>
                          <td>30/9/2021 11:14 am</td>
                          <td>30/9/2021 11:15 am</td>
                          <td></td>
                          <td></td>
                          <td><button className="view-link">Log</button></td>
                        </tr>
                      </>
                    ) : (
                      <tr>
                        <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                          Workflow will be available after saving
                        </td>
                      </tr>
                    )}
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
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default CreateCareerProgression;
