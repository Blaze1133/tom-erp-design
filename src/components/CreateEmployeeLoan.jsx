import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateEmployeeLoan = ({ loanData, onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('payScheduled');
  const [formData, setFormData] = useState(loanData || {
    id: '',
    employeeIdName: '',
    loanCategory: 'Personal',
    employeeStatus: 'Confirmed Employment',
    applicationDate: '1/12/2020',
    loanAmount: '12,000.00',
    withInterest: false,
    interestRate: '',
    durationCount: 12,
    amountEmi: '1,000.00',
    beginRepayment: '1/1/2021',
    endRepayment: '1/12/2021',
    repaidLoanAmount: '0.00',
    balanceLoanAmount: '12,000.00',
    memo: '',
    applicationStatus: 'Transfer to Payroll',
    payRecord: '',
    scheduleCreated: false,
    subsidiary: '',
    country: 'Singapore',
    approveByManager: '',
    approveByMd: '',
    supervisor: 'vikram',
    supervisorMd: 'NuVista Consultant 3'
  });

  const [repaymentSchedule] = useState([
    { id: 1, emiDate: '1/1/2021', emiAmount: 1000, loanInterestAmount: 0, principle: 1000, principleLoanAmountRemaining: 11000 },
    { id: 2, emiDate: '1/2/2021', emiAmount: 1000, loanInterestAmount: 0, principle: 1000, principleLoanAmountRemaining: 10000 },
    { id: 3, emiDate: '1/3/2021', emiAmount: 1000, loanInterestAmount: 0, principle: 1000, principleLoanAmountRemaining: 9000 },
    { id: 4, emiDate: '1/4/2021', emiAmount: 1000, loanInterestAmount: 0, principle: 1000, principleLoanAmountRemaining: 8000 }
  ]);

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];

  const applicationStatusOptions = [
    '- New -',
    'Pending for Approval',
    'Approved',
    'Rejected',
    'Processed',
    'Transfer to Payroll',
    'Loan Close',
    'Pending for loan Repayment'
  ];

  const payRecordOptions = [
    '<Type then tab>',
    '15001 - 23114',
    '15001',
    '15002',
    '15003',
    '15004',
    '15005',
    '15006',
    '15007',
    '15008',
    '15009',
    '15010'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!formData.employeeIdName || !formData.subsidiary) {
      showToast('Please fill in required fields', 'error');
      return;
    }
    showToast('Employee Loan Application saved successfully!', 'success');
    if (onSave) onSave(formData);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="create-form">
      <div className="quotation-header-clean">
        <div className="page-title-clean">
          <i className="fas fa-hand-holding-usd"></i>
          <div>
            <h1>Employee Loan Application</h1>
            <p className="page-subtitle">{loanData ? loanData.id : 'New Loan Application'}</p>
          </div>
        </div>
        <div className="header-actions-clean">
          <button className="btn-clean btn-save" onClick={handleSave}>Save</button>
          <button className="btn-clean btn-cancel" onClick={onCancel}>Cancel</button>
          <button className="btn-clean"><i className="fas fa-cog"></i> Actions</button>
        </div>
      </div>

      <div className="quotation-container-clean">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          {/* Left Column */}
          <div className="form-section-clean">
            <div className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="form-group">
                <label className="form-label">ID</label>
                <input type="text" className="form-control" value={formData.id} disabled style={{ background: '#f5f5f5' }} />
              </div>
              <div className="form-group">
                <label className="form-label required">EMPLOYEE ID | NAME</label>
                <select className="form-control" value={formData.employeeIdName} onChange={(e) => handleInputChange('employeeIdName', e.target.value)}>
                  <option value="">Select Employee</option>
                  <option value="222267 Demo employee">222267 Demo employee</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label required">LOAN CATEGORY</label>
                <select className="form-control" value={formData.loanCategory} onChange={(e) => handleInputChange('loanCategory', e.target.value)}>
                  <option value="Personal">Personal</option>
                  <option value="Housing">Housing</option>
                  <option value="Education">Education</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">EMPLOYEE STATUS</label>
                <select className="form-control" value={formData.employeeStatus} onChange={(e) => handleInputChange('employeeStatus', e.target.value)}>
                  <option value="Confirmed Employment">Confirmed Employment</option>
                  <option value="Probation">Probation</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label required">APPLICATION DATE</label>
                <input type="text" className="form-control" value={formData.applicationDate} onChange={(e) => handleInputChange('applicationDate', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label required">LOAN AMOUNT</label>
                <input type="text" className="form-control" value={formData.loanAmount} onChange={(e) => handleInputChange('loanAmount', e.target.value)} />
              </div>
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.withInterest} onChange={(e) => handleInputChange('withInterest', e.target.checked)} />
                  WITH INTEREST
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">INTEREST RATE (%)</label>
                <input type="text" className="form-control" value={formData.interestRate} onChange={(e) => handleInputChange('interestRate', e.target.value)} />
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="form-section-clean">
            <div className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="form-group">
                <label className="form-label required">DURATION COUNT - EMI</label>
                <input type="number" className="form-control" value={formData.durationCount} onChange={(e) => handleInputChange('durationCount', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label required">AMOUNT - EMI</label>
                <input type="text" className="form-control" value={formData.amountEmi} onChange={(e) => handleInputChange('amountEmi', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label required">BEGIN - REPAYMENT</label>
                <input type="text" className="form-control" value={formData.beginRepayment} onChange={(e) => handleInputChange('beginRepayment', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">END - REPAYMENT</label>
                <input type="text" className="form-control" value={formData.endRepayment} onChange={(e) => handleInputChange('endRepayment', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">REPAID LOAN AMOUNT</label>
                <input type="text" className="form-control" value={formData.repaidLoanAmount} onChange={(e) => handleInputChange('repaidLoanAmount', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label required">BALANCE LOAN AMOUNT</label>
                <input type="text" className="form-control" value={formData.balanceLoanAmount} onChange={(e) => handleInputChange('balanceLoanAmount', e.target.value)} />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="form-section-clean">
            <div className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="form-group">
                <label className="form-label">MEMO</label>
                <textarea className="form-control" value={formData.memo} onChange={(e) => handleInputChange('memo', e.target.value)} rows="3" />
              </div>
              <div className="form-group">
                <label className="form-label">APPLICATION STATUS</label>
                <select className="form-control" value={formData.applicationStatus} onChange={(e) => handleInputChange('applicationStatus', e.target.value)}>
                  {applicationStatusOptions.map((status, idx) => (
                    <option key={idx} value={status}>{status}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">PAY RECORD</label>
                <select className="form-control" value={formData.payRecord} onChange={(e) => handleInputChange('payRecord', e.target.value)}>
                  {payRecordOptions.map((record, idx) => (
                    <option key={idx} value={record}>{record}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.scheduleCreated} onChange={(e) => handleInputChange('scheduleCreated', e.target.checked)} />
                  SCHEDULE CREATED
                </label>
              </div>
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
              <div className="form-group">
                <label className="form-label">APPROVE BY MANAGER</label>
                <input type="text" className="form-control" value={formData.approveByManager} onChange={(e) => handleInputChange('approveByManager', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">APPROVE BY MD</label>
                <input type="text" className="form-control" value={formData.approveByMd} onChange={(e) => handleInputChange('approveByMd', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">SUPERVISOR</label>
                <input type="text" className="form-control" value={formData.supervisor} onChange={(e) => handleInputChange('supervisor', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">SUPERVISOR MD</label>
                <input type="text" className="form-control" value={formData.supervisorMd} onChange={(e) => handleInputChange('supervisorMd', e.target.value)} />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'payScheduled' ? 'active' : ''}`} onClick={() => setActiveTab('payScheduled')}>Pay Scheduled</button>
            <button className={`tab-btn ${activeTab === 'repaymentSchedule' ? 'active' : ''}`} onClick={() => setActiveTab('repaymentSchedule')}>Repayment Schedule</button>
            <button className={`tab-btn ${activeTab === 'workflow' ? 'active' : ''}`} onClick={() => setActiveTab('workflow')}>Workflow</button>
            <button className={`tab-btn ${activeTab === 'repaymentDetail' ? 'active' : ''}`} onClick={() => setActiveTab('repaymentDetail')}>Repayment Detail</button>
          </div>

          <div className="tabs-content">
            {activeTab === 'payScheduled' && (
              <div className="tab-content-wrapper" style={{ padding: '1.5rem' }}>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>EMI DATE</th>
                      <th>EMI AMOUNT</th>
                      <th>AMOUNT REMAIN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="3" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                        Schedule will be generated after saving
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'repaymentSchedule' && (
              <div className="tab-content-wrapper" style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                  <label>VIEW</label>
                  <select className="form-control" style={{ width: '200px' }}>
                    <option>Default View</option>
                  </select>
                  <label>LOAN REPAYMENT SCHEDULE</label>
                  <input type="text" className="form-control" style={{ width: '200px' }} />
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-secondary">New Loan Repayment Schedule</button>
                  <button className="btn btn-secondary">Attach</button>
                  <button className="btn btn-secondary">Customize View</button>
                </div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>EDIT</th>
                      <th>ID ▲</th>
                      <th>EMI DATE</th>
                      <th>EMI AMOUNT</th>
                      <th>LOAN INTEREST AMOUNT</th>
                      <th>PRINCIPLE</th>
                      <th>PRINCIPLE LOAN AMOUNT REMAINING</th>
                    </tr>
                  </thead>
                  <tbody>
                    {repaymentSchedule.map((item) => (
                      <tr key={item.id}>
                        <td><button className="view-link">Edit</button></td>
                        <td>{item.id}</td>
                        <td>{item.emiDate}</td>
                        <td className="amount">{item.emiAmount.toLocaleString()}</td>
                        <td className="amount">{item.loanInterestAmount}</td>
                        <td className="amount">{item.principle.toLocaleString()}</td>
                        <td className="amount">{item.principleLoanAmountRemaining.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'workflow' && (
              <div className="tab-content-wrapper" style={{ padding: '1.5rem' }}>
                <p style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                  Workflow will be available after saving
                </p>
              </div>
            )}

            {activeTab === 'repaymentDetail' && (
              <div className="tab-content-wrapper" style={{ padding: '1.5rem' }}>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>PROCESS MONTH</th>
                      <th>YEAR</th>
                      <th>LOAN AMOUNT</th>
                      <th>MONTH EMI</th>
                      <th>BALANCE TO</th>
                      <th>MONTHRE PAY AMT</th>
                      <th>REMARK</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                        No records to show.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default CreateEmployeeLoan;
