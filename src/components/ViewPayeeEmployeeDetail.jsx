import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewPayeeEmployeeDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('pay-earning');
  const [basicInfoCollapsed, setBasicInfoCollapsed] = useState(false);
  const [workDaysCollapsed, setWorkDaysCollapsed] = useState(false);
  const [salaryCollapsed, setSalaryCollapsed] = useState(false);
  const [cpfCollapsed, setCpfCollapsed] = useState(false);
  const [systemCollapsed, setSystemCollapsed] = useState(false);

  // Sample employee data
  const employeeData = {
    refPayrollRecord: 'PBATCH00176',
    payCalendar: '2021 (TSV)',
    employeeCode: 'TSV002',
    employeeName: 'Hossain Anwar',
    dateOfBirth: '5/10/1978',
    ageGroup: '50 & Below',
    department: 'Shipyard : Megayard',
    location: 'Singapore (TSV)',
    hireDate: '14/2/2007',
    empGroup: '',
    status: 'Foreigner',
    shiftType: '8 AM To 5 PM',
    cpfApplicable: true,
    payEntitled: true,
    hourRate: 7.87,
    employeeType: 'MONTHLY',
    employeeWageType: 'MONTHLY',
    workDaysWeek: 5.5,
    offDays: 0,
    compWorkDays: 25,
    presentDays: 25,
    noPayLeave: 0,
    paidDays: 25,
    paidLeave: 0,
    ot1Hour: 0,
    ot2Hour: 0,
    totalEarning: 1500.00,
    deduction: 150.00,
    netIncome: 1350.00,
    cpfOrdWage: 1450.00,
    cpfAwWage: 0.00,
    paidOw: 1450.00,
    paidAw: 0.00,
    cpfCappingAwBal: 102000.00,
    pqQualificationCode: 'Marine WPH Basic Tier-300',
    incomeTaxId: 'G7528160L',
    cpfApplicableField: true,
    leftDate: '',
    fixedMonthSalary: 2000.00,
    monthlyBasicPay: 1500.00,
    payeeClass: '',
    paySlipMessage: 'ERROR: Field \'contract_pay_batch_memo\' Not Found',
    totalCpf: '',
    employerCpf: '',
    employeeCpf: '',
    fundContributionAmt: '',
    sdlAmount: '',
    fwl: 300.00,
    manualCpfUpdate: false,
    attanSave: true,
    payRun: false,
    proRatedPwl: false,
    proRatedPwlDays: '',
    class: '',
    ot3Hour: 0.00,
    externalId: 'G1R917B8306dc75080cc85e',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (SV) Pte Ltd',
    mobilePayslip: true,
    publicHoliday: 0.0,
    eftSalaryPaymentsUpdate: false,
    cpfEmployerOrdWage: '',
    cpfEmployerAwWage: '',
    cpfEmployerAddWage: '',
    payCommit: true,
    sendEmail: false,
    cpfEmployerOsdWage: '',
    totalCpfOrdWage: '',
    totalCpfAwWage: '',
    monthlyTotalSalary: 1500.00,
    monthlyWorkingDays: '',
    monthlyPaidDays: '',
    payeeCpfType: '',
    mosqueBuilding: '',
    mendakiFund: '',
    monthlyBasicSalary: 1500.00,
    openingSalaryPayee: '',
    openingAwBalancePayee: ''
  };

  // Pay Earning data
  const [payEarnings] = useState([
    {
      id: 1,
      earningType: 'Basic Salary',
      wageType: 'Ordinary',
      includesCpf: 'Yes',
      amount: 1500.00,
      netSuitePayCode: '920',
      hraGroup: 'A Gross Salary, Fees, Leave Pay, Wages, OT',
      sdlApplied: 'Yes',
      fundApplied: 'Yes'
    }
  ]);

  // Pay Deduction data
  const [payDeductions] = useState([
    {
      id: 1,
      deductionType: 'Utility',
      wageType: 'Ordinary',
      amount: 50.00,
      netSuitePayCode: '1158'
    },
    {
      id: 2,
      deductionType: 'Accommodation and Utility',
      wageType: 'Ordinary',
      amount: 100.00,
      netSuitePayCode: '1158'
    }
  ]);

  // Pay Contribution data
  const [payContributions] = useState([
    {
      id: 1,
      contributionType: 'Statutory - FWL',
      wageType: 'Ordinary',
      amount: 300.00,
      payrollItemCode: '903',
      hraGroup: '',
      manualUpdate: 'No',
      printSNo: ''
    }
  ]);

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

  const handleNewPayEarning = () => {
    showToast('New Pay Earning functionality will be implemented', 'info');
  };

  const handleNewPayDeduction = () => {
    showToast('New Pay Deduction functionality will be implemented', 'info');
  };

  const handleNewPayContribution = () => {
    showToast('New Pay Contribution functionality will be implemented', 'info');
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-user"></i>
          <div>
            <h1>Payee Employee</h1>
            <div className="detail-subtitle">
              <span>{employeeData.employeeCode} {employeeData.employeeName}</span>
              <span className="status-badge-detail" style={{ background: '#17a2b8' }}>
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
          <i className="fas fa-file-alt"></i>
          Pay Slip
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-sync"></i>
          Refresh
        </button>
      </div>

      <div className="detail-content">

        {/* Basic Information Section */}
        <div className={`detail-section ${basicInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setBasicInfoCollapsed(!basicInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Basic</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>REF PAYROLL RECORD</label>
                <div className="field-value">{employeeData.refPayrollRecord}</div>
              </div>
              <div className="detail-field">
                <label>STATUS</label>
                <div className="field-value">{employeeData.status}</div>
              </div>
              <div className="detail-field">
                <label>PQ QUALIFICATION CODE</label>
                <div className="field-value">{employeeData.pqQualificationCode}</div>
              </div>
              <div className="detail-field">
                <label>PAY CALENDAR</label>
                <div className="field-value">{employeeData.payCalendar}</div>
              </div>
              <div className="detail-field">
                <label>SHIFT TYPE</label>
                <div className="field-value">{employeeData.shiftType}</div>
              </div>
              <div className="detail-field">
                <label>INCOME TAX ID</label>
                <div className="field-value">{employeeData.incomeTaxId}</div>
              </div>
              <div className="detail-field">
                <label>EMPLOYEE CODE</label>
                <div className="field-value">{employeeData.employeeCode}</div>
              </div>
              <div className="detail-field">
                <label>PAY ENTITLED</label>
                <div className="field-value">
                  {employeeData.payEntitled ? (
                    <i className="fas fa-check" style={{ color: '#28a745' }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: '#dc3545' }}></i>
                  )}
                </div>
              </div>
              <div className="detail-field">
                <label>CPF APPLICABLE</label>
                <div className="field-value">
                  {employeeData.cpfApplicable ? (
                    <i className="fas fa-check" style={{ color: '#28a745' }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: '#dc3545' }}></i>
                  )}
                </div>
              </div>
              <div className="detail-field">
                <label>EMPLOYEE NAME</label>
                <div className="field-value">{employeeData.employeeName}</div>
              </div>
              <div className="detail-field">
                <label>CPF CAPPING AW BAL</label>
                <div className="field-value">{employeeData.cpfCappingAwBal.toFixed(2)}</div>
              </div>
              <div className="detail-field">
                <label>LEFT DATE</label>
                <div className="field-value">{employeeData.leftDate || '-'}</div>
              </div>
              <div className="detail-field">
                <label>DATE OF BIRTH</label>
                <div className="field-value">{employeeData.dateOfBirth}</div>
              </div>
              <div className="detail-field">
                <label>HOUR RATE</label>
                <div className="field-value">{employeeData.hourRate}</div>
              </div>
              <div className="detail-field">
                <label>FIXED MONTH SALARY</label>
                <div className="field-value">{employeeData.fixedMonthSalary.toFixed(2)}</div>
              </div>
              <div className="detail-field">
                <label>AGE GROUP</label>
                <div className="field-value">{employeeData.ageGroup}</div>
              </div>
              <div className="detail-field">
                <label>EMPLOYEE TYPE</label>
                <div className="field-value">{employeeData.employeeType}</div>
              </div>
              <div className="detail-field">
                <label>MONTHLY BASIC PAY</label>
                <div className="field-value">{employeeData.monthlyBasicPay.toFixed(2)}</div>
              </div>
              <div className="detail-field">
                <label>DEPARTMENT</label>
                <div className="field-value">{employeeData.department}</div>
              </div>
              <div className="detail-field">
                <label>EMPLOYEE WAGE TYPE</label>
                <div className="field-value">{employeeData.employeeWageType}</div>
              </div>
              <div className="detail-field">
                <label>PAYEE CLASS</label>
                <div className="field-value">{employeeData.payeeClass || '-'}</div>
              </div>
              <div className="detail-field">
                <label>LOCATION</label>
                <div className="field-value">{employeeData.location}</div>
              </div>
              <div className="detail-field">
                <label>HIRE DATE</label>
                <div className="field-value">{employeeData.hireDate}</div>
              </div>
              <div className="detail-field">
                <label>PAY SLIP MESSAGE</label>
                <div className="field-value" style={{ color: '#dc3545' }}>{employeeData.paySlipMessage}</div>
              </div>
              <div className="detail-field">
                <label>EMP GROUP</label>
                <div className="field-value">{employeeData.empGroup || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Work Days Section */}
        <div className={`detail-section ${workDaysCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setWorkDaysCollapsed(!workDaysCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Work Days</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>WORK DAYS WEEK</label>
                <div className="field-value">{employeeData.workDaysWeek}</div>
              </div>
              <div className="detail-field">
                <label>TOTAL EARNING</label>
                <div className="field-value">{employeeData.totalEarning.toFixed(2)}</div>
              </div>
              <div className="detail-field">
                <label>TOTAL CPF</label>
                <div className="field-value">{employeeData.totalCpf || '-'}</div>
              </div>
              <div className="detail-field">
                <label>OFF DAYS</label>
                <div className="field-value">{employeeData.offDays}</div>
              </div>
              <div className="detail-field">
                <label>DEDUCTION</label>
                <div className="field-value">{employeeData.deduction.toFixed(2)}</div>
              </div>
              <div className="detail-field">
                <label>EMPLOYER CPF</label>
                <div className="field-value">{employeeData.employerCpf || '-'}</div>
              </div>
              <div className="detail-field">
                <label>COMP WORK DAYS</label>
                <div className="field-value">{employeeData.compWorkDays}</div>
              </div>
              <div className="detail-field">
                <label>NET INCOME</label>
                <div className="field-value">{employeeData.netIncome.toFixed(2)}</div>
              </div>
              <div className="detail-field">
                <label>EMPLOYEE CPF</label>
                <div className="field-value">{employeeData.employeeCpf || '-'}</div>
              </div>
              <div className="detail-field">
                <label>PRESENT DAYS</label>
                <div className="field-value">{employeeData.presentDays}</div>
              </div>
              <div className="detail-field">
                <label>CPF ORD WAGE</label>
                <div className="field-value">{employeeData.cpfOrdWage.toFixed(2)}</div>
              </div>
              <div className="detail-field">
                <label>FUND CONTRIBUTION AMT</label>
                <div className="field-value">{employeeData.fundContributionAmt || '-'}</div>
              </div>
              <div className="detail-field">
                <label>NO PAY LEAVE</label>
                <div className="field-value">{employeeData.noPayLeave}</div>
              </div>
              <div className="detail-field">
                <label>CPF AW WAGE</label>
                <div className="field-value">{employeeData.cpfAwWage.toFixed(2)}</div>
              </div>
              <div className="detail-field">
                <label>SDL AMOUNT</label>
                <div className="field-value">{employeeData.sdlAmount || '-'}</div>
              </div>
              <div className="detail-field">
                <label>PAID DAYS</label>
                <div className="field-value">{employeeData.paidDays}</div>
              </div>
              <div className="detail-field">
                <label>PAID OW</label>
                <div className="field-value">{employeeData.paidOw.toFixed(2)}</div>
              </div>
              <div className="detail-field">
                <label>FWL</label>
                <div className="field-value">{employeeData.fwl.toFixed(2)}</div>
              </div>
              <div className="detail-field">
                <label>PAID LEAVE</label>
                <div className="field-value">{employeeData.paidLeave}</div>
              </div>
              <div className="detail-field">
                <label>PAID AW</label>
                <div className="field-value">{employeeData.paidAw.toFixed(2)}</div>
              </div>
              <div className="detail-field">
                <label>MANUAL CPF UPDATE</label>
                <div className="field-value">
                  {employeeData.manualCpfUpdate ? (
                    <i className="fas fa-check" style={{ color: '#28a745' }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: '#dc3545' }}></i>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Section */}
        <div className={`detail-section ${systemCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setSystemCollapsed(!systemCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>System</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>ATTAN SAVE</label>
                <div className="field-value">
                  {employeeData.attanSave ? (
                    <i className="fas fa-check" style={{ color: '#28a745' }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: '#dc3545' }}></i>
                  )}
                </div>
              </div>
              <div className="detail-field">
                <label>PAY/COMMIT</label>
                <div className="field-value">
                  {employeeData.payCommit ? (
                    <i className="fas fa-check" style={{ color: '#28a745' }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: '#dc3545' }}></i>
                  )}
                </div>
              </div>
              <div className="detail-field">
                <label>PAYCHECK JOURNAL</label>
                <div className="field-value">-</div>
              </div>
              <div className="detail-field">
                <label>PAY RUN</label>
                <div className="field-value">
                  {employeeData.payRun ? (
                    <i className="fas fa-check" style={{ color: '#28a745' }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: '#dc3545' }}></i>
                  )}
                </div>
              </div>
              <div className="detail-field">
                <label>SEND EMAIL</label>
                <div className="field-value">
                  {employeeData.sendEmail ? (
                    <i className="fas fa-check" style={{ color: '#28a745' }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: '#dc3545' }}></i>
                  )}
                </div>
              </div>
              <div className="detail-field">
                <label>LATENESS MIN</label>
                <div className="field-value">-</div>
              </div>
              <div className="detail-field">
                <label>MOBILE PAYSLIP</label>
                <div className="field-value">
                  {employeeData.mobilePayslip ? (
                    <i className="fas fa-check" style={{ color: '#28a745' }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: '#dc3545' }}></i>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'pay-earning' ? 'active' : ''}`}
              onClick={() => setActiveTab('pay-earning')}
            >
              Pay Earning ●
            </button>
            <button 
              className={`tab-btn ${activeTab === 'pay-deduction' ? 'active' : ''}`}
              onClick={() => setActiveTab('pay-deduction')}
            >
              Pay Deduction ●
            </button>
            <button 
              className={`tab-btn ${activeTab === 'pay-contribution' ? 'active' : ''}`}
              onClick={() => setActiveTab('pay-contribution')}
            >
              Pay Contribution ●
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'pay-earning' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 'bold', marginRight: '0.5rem' }}>VIEW</label>
                      <select className="form-control" style={{ width: '200px', fontSize: '12px' }}>
                        <option>Default View</option>
                        <option>Custom View</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 'bold', marginRight: '0.5rem' }}>PAY EARNING</label>
                      <select className="form-control" style={{ width: '200px', fontSize: '12px' }}>
                        <option>&lt;Type then tab&gt;</option>
                        <option>Basic Salary</option>
                        <option>Overtime</option>
                        <option>Allowance</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
                  <button className="btn btn-primary" onClick={handleNewPayEarning}>
                    <i className="fas fa-plus"></i>
                    New Pay Earning
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-paperclip"></i>
                    Attach
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-cog"></i>
                    Customize View
                  </button>
                </div>

                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th style={{ width: '5%' }}>EDIT</th>
                        <th style={{ width: '15%' }}>EARNING TYPE</th>
                        <th style={{ width: '10%' }}>WAGE TYPE</th>
                        <th style={{ width: '10%' }}>INCLUDE CPF</th>
                        <th style={{ width: '10%' }}>AMOUNT</th>
                        <th style={{ width: '15%' }}>NET SUITE PAY CODE</th>
                        <th style={{ width: '20%' }}>HRA GROUP</th>
                        <th style={{ width: '8%' }}>SDL APPLIED</th>
                        <th style={{ width: '7%' }}>FUND APPLIED</th>
                      </tr>
                    </thead>
                    <tbody>
                      {payEarnings.map((earning) => (
                        <tr key={earning.id}>
                          <td>
                            <button className="view-link">Edit</button>
                          </td>
                          <td>{earning.earningType}</td>
                          <td>{earning.wageType}</td>
                          <td>{earning.includesCpf}</td>
                          <td className="amount">{earning.amount.toFixed(2)}</td>
                          <td>{earning.netSuitePayCode}</td>
                          <td>{earning.hraGroup}</td>
                          <td>{earning.sdlApplied}</td>
                          <td>{earning.fundApplied}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'pay-deduction' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 'bold', marginRight: '0.5rem' }}>VIEW</label>
                      <select className="form-control" style={{ width: '200px', fontSize: '12px' }}>
                        <option>Custom Default View</option>
                        <option>Default View</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 'bold', marginRight: '0.5rem' }}>PAY DEDUCTION</label>
                      <select className="form-control" style={{ width: '200px', fontSize: '12px' }}>
                        <option>&lt;Type then tab&gt;</option>
                        <option>Utility</option>
                        <option>Accommodation and Utility</option>
                        <option>Loan Deduction</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
                  <button className="btn btn-primary" onClick={handleNewPayDeduction}>
                    <i className="fas fa-plus"></i>
                    New Pay Deduction
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-paperclip"></i>
                    Attach
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-cog"></i>
                    Customize View
                  </button>
                </div>

                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th style={{ width: '8%' }}>EDIT</th>
                        <th style={{ width: '25%' }}>DEDUCTION TYPE</th>
                        <th style={{ width: '20%' }}>WAGE TYPE</th>
                        <th style={{ width: '15%' }}>AMOUNT</th>
                        <th style={{ width: '32%' }}>NET SUITE PAY CODE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {payDeductions.map((deduction) => (
                        <tr key={deduction.id}>
                          <td>
                            <button className="view-link">Edit</button>
                          </td>
                          <td>{deduction.deductionType}</td>
                          <td>{deduction.wageType}</td>
                          <td className="amount">{deduction.amount.toFixed(2)}</td>
                          <td>{deduction.netSuitePayCode}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'pay-contribution' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 'bold', marginRight: '0.5rem' }}>VIEW</label>
                      <select className="form-control" style={{ width: '200px', fontSize: '12px' }}>
                        <option>Default View</option>
                        <option>Custom View</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 'bold', marginRight: '0.5rem' }}>PAY CONTRIBUTION</label>
                      <select className="form-control" style={{ width: '200px', fontSize: '12px' }}>
                        <option>&lt;Type then tab&gt;</option>
                        <option>Statutory - FWL</option>
                        <option>CPF Contribution</option>
                        <option>SDL Contribution</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
                  <button className="btn btn-primary" onClick={handleNewPayContribution}>
                    <i className="fas fa-plus"></i>
                    New Pay Contribution
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-paperclip"></i>
                    Attach
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-cog"></i>
                    Customize View
                  </button>
                </div>

                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th style={{ width: '5%' }}>EDIT</th>
                        <th style={{ width: '18%' }}>CONTRIBUTION TYPE</th>
                        <th style={{ width: '12%' }}>WAGE TYPE</th>
                        <th style={{ width: '10%' }}>AMOUNT</th>
                        <th style={{ width: '15%' }}>PAYROLL ITEM CODE</th>
                        <th style={{ width: '12%' }}>HRA GROUP</th>
                        <th style={{ width: '13%' }}>MANUAL UPDATE</th>
                        <th style={{ width: '15%' }}>PRINT S. NO.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {payContributions.map((contribution) => (
                        <tr key={contribution.id}>
                          <td>
                            <button className="view-link">Edit</button>
                          </td>
                          <td>{contribution.contributionType}</td>
                          <td>{contribution.wageType}</td>
                          <td className="amount">{contribution.amount.toFixed(2)}</td>
                          <td>{contribution.payrollItemCode}</td>
                          <td>{contribution.hraGroup}</td>
                          <td>{contribution.manualUpdate}</td>
                          <td>{contribution.printSNo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
          <button className="btn-toolbar">
            <i className="fas fa-file-alt"></i>
            Pay Slip
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

export default ViewPayeeEmployeeDetail;
