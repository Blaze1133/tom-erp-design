import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewEmployeeLoanDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('payScheduled');

  const loanData = {
    id: 1,
    employeeIdName: '222267 Demo employee',
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
    scheduleCreated: true,
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd',
    country: 'Singapore',
    approveByManager: '',
    approveByMd: '',
    supervisor: 'vikram',
    supervisorMd: 'NuVista Consultant 3'
  };

  const repaymentSchedule = [
    { id: 1, emiDate: '1/1/2021', emiAmount: 1000, loanInterestAmount: 0, principle: 1000, principleLoanAmountRemaining: 11000 },
    { id: 2, emiDate: '1/2/2021', emiAmount: 1000, loanInterestAmount: 0, principle: 1000, principleLoanAmountRemaining: 10000 },
    { id: 3, emiDate: '1/3/2021', emiAmount: 1000, loanInterestAmount: 0, principle: 1000, principleLoanAmountRemaining: 9000 },
    { id: 4, emiDate: '1/4/2021', emiAmount: 1000, loanInterestAmount: 0, principle: 1000, principleLoanAmountRemaining: 8000 },
    { id: 5, emiDate: '1/5/2021', emiAmount: 1000, loanInterestAmount: 0, principle: 1000, principleLoanAmountRemaining: 7000 },
    { id: 6, emiDate: '1/6/2021', emiAmount: 1000, loanInterestAmount: 0, principle: 1000, principleLoanAmountRemaining: 6000 },
    { id: 7, emiDate: '1/7/2021', emiAmount: 1000, loanInterestAmount: 0, principle: 1000, principleLoanAmountRemaining: 5000 },
    { id: 8, emiDate: '1/8/2021', emiAmount: 1000, loanInterestAmount: 0, principle: 1000, principleLoanAmountRemaining: 4000 },
    { id: 9, emiDate: '1/9/2021', emiAmount: 1000, loanInterestAmount: 0, principle: 1000, principleLoanAmountRemaining: 3000 },
    { id: 10, emiDate: '1/10/2021', emiAmount: 1000, loanInterestAmount: 0, principle: 1000, principleLoanAmountRemaining: 2000 },
    { id: 11, emiDate: '1/11/2021', emiAmount: 1000, loanInterestAmount: 0, principle: 1000, principleLoanAmountRemaining: 1000 },
    { id: 12, emiDate: '1/12/2021', emiAmount: 1000, loanInterestAmount: 0, principle: 1000, principleLoanAmountRemaining: 0 }
  ];

  const payScheduled = [
    { emiDate: '1/1/2021', emiAmount: 1000, amountRemain: 11000 },
    { emiDate: '1/2/2021', emiAmount: 1000, amountRemain: 10000 },
    { emiDate: '1/3/2021', emiAmount: 1000, amountRemain: 9000 },
    { emiDate: '1/4/2021', emiAmount: 1000, amountRemain: 8000 },
    { emiDate: '1/5/2021', emiAmount: 1000, amountRemain: 7000 },
    { emiDate: '1/6/2021', emiAmount: 1000, amountRemain: 6000 },
    { emiDate: '1/7/2021', emiAmount: 1000, amountRemain: 5000 },
    { emiDate: '1/8/2021', emiAmount: 1000, amountRemain: 4000 },
    { emiDate: '1/9/2021', emiAmount: 1000, amountRemain: 3000 },
    { emiDate: '1/10/2021', emiAmount: 1000, amountRemain: 2000 },
    { emiDate: '1/11/2021', emiAmount: 1000, amountRemain: 1000 },
    { emiDate: '1/12/2021', emiAmount: 1000, amountRemain: 0 }
  ];

  const workflow = {
    workflow: 'Employee Loan Application Workflow',
    currentState: 'Transfer to Payroll',
    dateEnteredWorkflow: '28/9/2021 3:56 pm',
    dateEnteredState: '28/9/2021 3:56 pm',
    status: 'Active',
    cancel: 'Cancel'
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
          <i className="fas fa-hand-holding-usd"></i>
          <div>
            <h1>Employee Loan Application</h1>
            <div className="detail-subtitle">
              <span>{loanData.id}</span>
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
        <div className="toolbar-dropdown" style={{ marginLeft: 'auto' }}>
          <button className="btn-toolbar">
            <i className="fas fa-cog"></i>
            Actions
            <i className="fas fa-chevron-down" style={{ marginLeft: '0.5rem', fontSize: '0.7rem' }}></i>
          </button>
        </div>
      </div>

      <div className="detail-content">
        {/* Main Information Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginBottom: '2rem', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
          <div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>ID</label>
              <div className="field-value">{loanData.id}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>EMPLOYEE ID | NAME</label>
              <div className="field-value">{loanData.employeeIdName}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>LOAN CATEGORY</label>
              <div className="field-value">{loanData.loanCategory}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>EMPLOYEE STATUS</label>
              <div className="field-value">{loanData.employeeStatus}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>APPLICATION DATE</label>
              <div className="field-value">{loanData.applicationDate}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>LOAN AMOUNT</label>
              <div className="field-value">{loanData.loanAmount}</div>
            </div>
            <div className="detail-field">
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={loanData.withInterest} disabled />
                WITH INTEREST
              </label>
            </div>
            <div className="detail-field" style={{ marginTop: '1rem' }}>
              <label>INTEREST RATE (%)</label>
              <div className="field-value">{loanData.interestRate || '-'}</div>
            </div>
          </div>

          <div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>DURATION COUNT - EMI</label>
              <div className="field-value">{loanData.durationCount}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>AMOUNT - EMI</label>
              <div className="field-value">{loanData.amountEmi}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>BEGIN - REPAYMENT</label>
              <div className="field-value">{loanData.beginRepayment}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>END - REPAYMENT</label>
              <div className="field-value">{loanData.endRepayment}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>REPAID LOAN AMOUNT</label>
              <div className="field-value">{loanData.repaidLoanAmount}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>BALANCE LOAN AMOUNT</label>
              <div className="field-value">{loanData.balanceLoanAmount}</div>
            </div>
          </div>

          <div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>MEMO</label>
              <div className="field-value">{loanData.memo || '-'}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>APPLICATION STATUS</label>
              <div className="field-value">{loanData.applicationStatus}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>PAY RECORD</label>
              <div className="field-value">{loanData.payRecord || '-'}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={loanData.scheduleCreated} disabled />
                SCHEDULE CREATED
              </label>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>SUBSIDIARY</label>
              <div className="field-value">{loanData.subsidiary}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>COUNTRY</label>
              <div className="field-value">{loanData.country}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>APPROVE BY MANAGER</label>
              <div className="field-value">{loanData.approveByManager || '-'}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>APPROVE BY MD</label>
              <div className="field-value">{loanData.approveByMd || '-'}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>SUPERVISOR</label>
              <div className="field-value">{loanData.supervisor}</div>
            </div>
            <div className="detail-field">
              <label>SUPERVISOR MD</label>
              <div className="field-value">{loanData.supervisorMd}</div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'payScheduled' ? 'active' : ''}`}
              onClick={() => setActiveTab('payScheduled')}
            >
              Pay Scheduled
            </button>
            <button 
              className={`tab-btn ${activeTab === 'repaymentSchedule' ? 'active' : ''}`}
              onClick={() => setActiveTab('repaymentSchedule')}
            >
              Repayment Schedule
            </button>
            <button 
              className={`tab-btn ${activeTab === 'workflow' ? 'active' : ''}`}
              onClick={() => setActiveTab('workflow')}
            >
              Workflow
            </button>
            <button 
              className={`tab-btn ${activeTab === 'repaymentDetail' ? 'active' : ''}`}
              onClick={() => setActiveTab('repaymentDetail')}
            >
              Repayment Detail
            </button>
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
                    {payScheduled.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.emiDate}</td>
                        <td className="amount">{item.emiAmount.toLocaleString()}</td>
                        <td className="amount">{item.amountRemain.toLocaleString()}</td>
                      </tr>
                    ))}
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
                    <tr>
                      <td>{workflow.workflow}</td>
                      <td>{workflow.currentState}</td>
                      <td>{workflow.dateEnteredWorkflow}</td>
                      <td>{workflow.dateEnteredState}</td>
                      <td></td>
                      <td>{workflow.status}</td>
                      <td><button className="view-link">{workflow.cancel}</button></td>
                    </tr>
                  </tbody>
                </table>
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

export default ViewEmployeeLoanDetail;
