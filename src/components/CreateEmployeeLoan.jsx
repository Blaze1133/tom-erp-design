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

  const [payScheduleRows, setPayScheduleRows] = useState([]);
  const [newPaySchedule, setNewPaySchedule] = useState({ emiDate: '', emiAmount: '', loanInterestAmount: '', principle: '', principleLoanAmountRemaining: '' });

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

  const handleAddPaySchedule = () => {
    if (!newPaySchedule.emiAmount || !newPaySchedule.principle) {
      showToast('Please fill in EMI Amount and Principle', 'error');
      return;
    }
    const newRow = {
      id: Date.now(),
      emiDate: newPaySchedule.emiDate || new Date().toLocaleDateString(),
      emiAmount: newPaySchedule.emiAmount,
      loanInterestAmount: newPaySchedule.loanInterestAmount,
      principle: newPaySchedule.principle,
      principleLoanAmountRemaining: newPaySchedule.principleLoanAmountRemaining
    };
    setPayScheduleRows(prev => [...prev, newRow]);
    setNewPaySchedule({ emiDate: '', emiAmount: '', loanInterestAmount: '', principle: '', principleLoanAmountRemaining: '' });
  };

  const handleRemovePaySchedule = (id) => {
    setPayScheduleRows(prev => prev.filter(row => row.id !== id));
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
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-hand-holding-usd"></i>
          <div>
            <h1>Employee Loan Application</h1>
            <div className="detail-subtitle">
              <span>{loanData ? loanData.id : 'New Loan Application'}</span>
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
        <div className="detail-section">
          <div className="section-header">
            <h3>Loan Application Details</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>ID</label>
                <input type="text" className="form-control" value={formData.id} disabled style={{ background: '#f5f5f5' }} />
              </div>
              <div className="detail-field">
                <label>EMPLOYEE ID | NAME <span className="required">*</span></label>
                <select className="form-control" value={formData.employeeIdName} onChange={(e) => handleInputChange('employeeIdName', e.target.value)}>
                  <option value="">Select Employee</option>
                  <option value="222267 Demo employee">222267 Demo employee</option>
                </select>
              </div>
              <div className="detail-field">
                <label>LOAN CATEGORY <span className="required">*</span></label>
                <select className="form-control" value={formData.loanCategory} onChange={(e) => handleInputChange('loanCategory', e.target.value)}>
                  <option value="Personal">Personal</option>
                  <option value="Housing">Housing</option>
                  <option value="Education">Education</option>
                </select>
              </div>
              <div className="detail-field">
                <label>EMPLOYEE STATUS</label>
                <select className="form-control" value={formData.employeeStatus} onChange={(e) => handleInputChange('employeeStatus', e.target.value)}>
                  <option value="Confirmed Employment">Confirmed Employment</option>
                  <option value="Probation">Probation</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
              <div className="detail-field">
                <label>APPLICATION DATE <span className="required">*</span></label>
                <input type="text" className="form-control" value={formData.applicationDate} onChange={(e) => handleInputChange('applicationDate', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>LOAN AMOUNT <span className="required">*</span></label>
                <input type="text" className="form-control" value={formData.loanAmount} onChange={(e) => handleInputChange('loanAmount', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>WITH INTEREST</label>
                <div className="field-value">
                  <input type="checkbox" checked={formData.withInterest} onChange={(e) => handleInputChange('withInterest', e.target.checked)} />
                </div>
              </div>
              <div className="detail-field">
                <label>INTEREST RATE (%)</label>
                <input type="text" className="form-control" value={formData.interestRate} onChange={(e) => handleInputChange('interestRate', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>DURATION COUNT - EMI <span className="required">*</span></label>
                <input type="number" className="form-control" value={formData.durationCount} onChange={(e) => handleInputChange('durationCount', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>AMOUNT - EMI <span className="required">*</span></label>
                <input type="text" className="form-control" value={formData.amountEmi} onChange={(e) => handleInputChange('amountEmi', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>BEGIN - REPAYMENT <span className="required">*</span></label>
                <input type="text" className="form-control" value={formData.beginRepayment} onChange={(e) => handleInputChange('beginRepayment', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>END - REPAYMENT</label>
                <input type="text" className="form-control" value={formData.endRepayment} onChange={(e) => handleInputChange('endRepayment', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>REPAID LOAN AMOUNT</label>
                <input type="text" className="form-control" value={formData.repaidLoanAmount} onChange={(e) => handleInputChange('repaidLoanAmount', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>BALANCE LOAN AMOUNT <span className="required">*</span></label>
                <input type="text" className="form-control" value={formData.balanceLoanAmount} onChange={(e) => handleInputChange('balanceLoanAmount', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>APPLICATION STATUS</label>
                <select className="form-control" value={formData.applicationStatus} onChange={(e) => handleInputChange('applicationStatus', e.target.value)}>
                  {applicationStatusOptions.map((status, idx) => (
                    <option key={idx} value={status}>{status}</option>
                  ))}
                </select>
              </div>
              <div className="detail-field">
                <label>PAY RECORD</label>
                <select className="form-control" value={formData.payRecord} onChange={(e) => handleInputChange('payRecord', e.target.value)}>
                  {payRecordOptions.map((record, idx) => (
                    <option key={idx} value={record}>{record}</option>
                  ))}
                </select>
              </div>
              <div className="detail-field">
                <label>SCHEDULE CREATED</label>
                <div className="field-value">
                  <input type="checkbox" checked={formData.scheduleCreated} onChange={(e) => handleInputChange('scheduleCreated', e.target.checked)} />
                </div>
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
              <div className="detail-field">
                <label>APPROVE BY MANAGER</label>
                <input type="text" className="form-control" value={formData.approveByManager} onChange={(e) => handleInputChange('approveByManager', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>APPROVE BY MD</label>
                <input type="text" className="form-control" value={formData.approveByMd} onChange={(e) => handleInputChange('approveByMd', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>SUPERVISOR</label>
                <input type="text" className="form-control" value={formData.supervisor} onChange={(e) => handleInputChange('supervisor', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>SUPERVISOR MD</label>
                <input type="text" className="form-control" value={formData.supervisorMd} onChange={(e) => handleInputChange('supervisorMd', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>MEMO</label>
                <textarea className="form-control" value={formData.memo} onChange={(e) => handleInputChange('memo', e.target.value)} rows="2" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'payScheduled' ? 'active' : ''}`} onClick={() => setActiveTab('payScheduled')}>Pay Scheduled</button>
            {loanData && (
              <>
                <button className={`tab-btn ${activeTab === 'repaymentSchedule' ? 'active' : ''}`} onClick={() => setActiveTab('repaymentSchedule')}>Repayment Schedule</button>
                <button className={`tab-btn ${activeTab === 'workflow' ? 'active' : ''}`} onClick={() => setActiveTab('workflow')}>Workflow</button>
                <button className={`tab-btn ${activeTab === 'repaymentDetail' ? 'active' : ''}`} onClick={() => setActiveTab('repaymentDetail')}>Repayment Detail</button>
              </>
            )}
          </div>

          <div className="tabs-content">
            {activeTab === 'payScheduled' && (
              <div className="tab-content-wrapper" style={{ padding: '1.5rem' }}>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>EMI DATE</th>
                      <th>EMI AMOUNT</th>
                      <th>LOAN INTEREST AMOUNT</th>
                      <th>PRINCIPLE</th>
                      <th>PRINCIPLE LOAN AMOUNT REMAINING</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payScheduleRows.map((row) => (
                      <tr key={row.id}>
                        <td>{row.emiDate}</td>
                        <td>{row.emiAmount}</td>
                        <td>{row.loanInterestAmount}</td>
                        <td>{row.principle}</td>
                        <td>{row.principleLoanAmountRemaining}</td>
                        <td>
                          <button 
                            className="btn btn-sm btn-secondary" 
                            onClick={() => handleRemovePaySchedule(row.id)}
                            style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                    <tr style={{ background: '#f9f9f9' }}>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={newPaySchedule.emiDate} 
                          disabled
                          placeholder="Auto-generated"
                          style={{ background: '#f5f5f5' }}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={newPaySchedule.emiAmount} 
                          onChange={(e) => setNewPaySchedule(prev => ({ ...prev, emiAmount: e.target.value }))}
                          placeholder="Enter EMI Amount"
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={newPaySchedule.loanInterestAmount} 
                          onChange={(e) => setNewPaySchedule(prev => ({ ...prev, loanInterestAmount: e.target.value }))}
                          placeholder="Enter Interest Amount"
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={newPaySchedule.principle} 
                          onChange={(e) => setNewPaySchedule(prev => ({ ...prev, principle: e.target.value }))}
                          placeholder="Enter Principle"
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={newPaySchedule.principleLoanAmountRemaining} 
                          onChange={(e) => setNewPaySchedule(prev => ({ ...prev, principleLoanAmountRemaining: e.target.value }))}
                          placeholder="Enter Remaining Amount"
                        />
                      </td>
                      <td>
                        <button 
                          className="btn btn-sm btn-primary" 
                          onClick={handleAddPaySchedule}
                          style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
                        >
                          <i className="fas fa-plus"></i> Add
                        </button>
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
