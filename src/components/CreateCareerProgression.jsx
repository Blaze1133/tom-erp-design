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
    <div className="create-form">
      <div className="quotation-header-clean">
        <div className="page-title-clean">
          <i className="fas fa-chart-line"></i>
          <div>
            <h1>Career Progression-Salary</h1>
            <p className="page-subtitle">{progressionData ? progressionData.id : 'New Career Progression'}</p>
          </div>
        </div>
        <div className="header-actions-clean">
          <button className="btn-clean btn-save" onClick={handleSave}>Save</button>
          <button className="btn-clean btn-cancel" onClick={onCancel}>Cancel</button>
          <button className="btn-clean"><i className="fas fa-cog"></i> Actions</button>
        </div>
      </div>

      <div className="quotation-container-clean">
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
                <div className="form-group">
                  <label className="form-label required">EMPLOYEE NAME</label>
                  <select className="form-control" value={formData.employeeName} onChange={(e) => handleInputChange('employeeName', e.target.value)}>
                    <option value="">Select Employee</option>
                    <option value="222267 Demo employee">222267 Demo employee</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">PROG CODE</label>
                  <select className="form-control" value={formData.progCode} onChange={(e) => handleInputChange('progCode', e.target.value)}>
                    <option value="">Select Code</option>
                    {progCodeOptions.map((code, idx) => (
                      <option key={idx} value={code}>{code}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">HIRE DATE</label>
                  <input type="date" className="form-control" value={formData.hireDate} onChange={(e) => handleInputChange('hireDate', e.target.value)} />
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label className="form-label">PAY GROUP</label>
                  <input type="text" className="form-control" value={formData.payGroup} onChange={(e) => handleInputChange('payGroup', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">JOB TITLE</label>
                  <input type="text" className="form-control" value={formData.jobTitle} onChange={(e) => handleInputChange('jobTitle', e.target.value)} />
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label className="form-label required">SUBSIDIARY</label>
                  <select className="form-control" value={formData.subsidiary} onChange={(e) => handleInputChange('subsidiary', e.target.value)}>
                    <option value="">Select Subsidiary</option>
                    {subsidiaries.map((sub, idx) => (
                      <option key={idx} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">COUNTRY</label>
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
                <div className="form-group">
                  <label className="form-label">REF APPRAISAL RECORD</label>
                  <select className="form-control" value={formData.refAppraisalRecord} onChange={(e) => handleInputChange('refAppraisalRecord', e.target.value)}>
                    <option value="">Select Record</option>
                  </select>
                </div>
                <div className="form-group">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="checkbox" checked={formData.dataUpdated} onChange={(e) => handleInputChange('dataUpdated', e.target.checked)} />
                    DATA UPDATED
                  </label>
                </div>
                <div className="form-group">
                  <label className="form-label required">PROGRESSION DATE</label>
                  <input type="text" className="form-control" value={formData.progressionDate} onChange={(e) => handleInputChange('progressionDate', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">DEPARTMENT</label>
                  <select className="form-control" value={formData.department} onChange={(e) => handleInputChange('department', e.target.value)}>
                    <option value="">Select Department</option>
                    {departments.map((dept, idx) => (
                      <option key={idx} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label className="form-label">STATUS</label>
                  <select className="form-control" value={formData.status} onChange={(e) => handleInputChange('status', e.target.value)}>
                    <option value="Approved">Approved</option>
                    <option value="Pending">Pending</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label required">PAY EFFECT ON</label>
                  <input type="text" className="form-control" value={formData.payEffectOn} onChange={(e) => handleInputChange('payEffectOn', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">REASON</label>
                  <select className="form-control" value={formData.reason} onChange={(e) => handleInputChange('reason', e.target.value)}>
                    <option value="">Select Reason</option>
                    <option value="Merit Increment">Merit Increment</option>
                    <option value="Promotion">Promotion</option>
                    <option value="Annual Increment">Annual Increment</option>
                  </select>
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
                <div className="form-group">
                  <label className="form-label required">OLD SALARY</label>
                  <input type="text" className="form-control" value={formData.oldSalary} onChange={(e) => handleInputChange('oldSalary', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">NAME</label>
                  <input type="text" className="form-control" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} />
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label className="form-label required">INCREMENT</label>
                  <input type="text" className="form-control" value={formData.increment} onChange={(e) => handleInputChange('increment', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">% OF INCREMENT</label>
                  <input type="text" className="form-control" value={formData.percentIncrement} disabled style={{ background: '#f5f5f5' }} />
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label className="form-label">NEW SALARY</label>
                  <input type="text" className="form-control" value={formData.newSalary} disabled style={{ background: '#f5f5f5' }} />
                </div>
                <div className="form-group">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="checkbox" checked={formData.updateSalary} onChange={(e) => handleInputChange('updateSalary', e.target.checked)} />
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
