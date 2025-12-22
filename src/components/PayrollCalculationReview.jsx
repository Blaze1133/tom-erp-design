import React, { useState } from 'react';
import Toast from './Toast';
import CustomAlert from './CustomAlert';
import './Enquiries.css';

const PayrollCalculationReview = ({ payrollRunId, onBack, onApprove, viewOnly = false }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [expandedRows, setExpandedRows] = useState({});
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [alert, setAlert] = useState({ show: false, type: 'confirm', title: '', message: '', onConfirm: null, variant: 'warning' });

  const payrollData = [
    {
      employeeId: 'TMO008',
      employeeName: 'Natarajan Muruganandham',
      basicSalary: 1700.00,
      normalPay: 1700.00,
      ot15Pay: 160.50,
      ot20Pay: 142.72,
      weekendPay: 214.08,
      holidayPay: 107.04,
      additions: 500.00,
      grossSalary: 2824.34,
      cpfEmployee: 680.00,
      cpfEmployer: 578.00,
      sdl: 8.47,
      variableDeductions: 100.00,
      totalDeductions: 788.47,
      netSalary: 2035.87,
      variance: 335.87,
      previousMonth: 1700.00,
      breakdown: {
        earnings: [
          { component: 'Basic Salary', amount: 1700.00 },
          { component: 'Normal Hours Pay', amount: 1700.00 },
          { component: 'OT 1.5x Pay', amount: 160.50 },
          { component: 'OT 2.0x Pay', amount: 142.72 },
          { component: 'Weekend Pay', amount: 214.08 },
          { component: 'Holiday Pay', amount: 107.04 },
          { component: 'Performance Bonus', amount: 500.00 }
        ],
        deductions: [
          { component: 'CPF Employee (20%)', amount: 680.00 },
          { component: 'SDL', amount: 8.47 },
          { component: 'Loan Recovery', amount: 100.00 }
        ],
        employer: [
          { component: 'CPF Employer (17%)', amount: 578.00 },
          { component: 'SDL (0.25%)', amount: 8.47 }
        ]
      }
    },
    {
      employeeId: 'MEP01',
      employeeName: 'Jeganathan Sundaravelu',
      basicSalary: 2200.00,
      normalPay: 2200.00,
      ot15Pay: 110.00,
      ot20Pay: 0.00,
      weekendPay: 110.00,
      holidayPay: 0.00,
      additions: 150.00,
      grossSalary: 2570.00,
      cpfEmployee: 740.00,
      cpfEmployer: 629.00,
      sdl: 7.71,
      variableDeductions: 0.00,
      totalDeductions: 747.71,
      netSalary: 1822.29,
      variance: -377.71,
      previousMonth: 2200.00,
      breakdown: {
        earnings: [
          { component: 'Basic Salary', amount: 2200.00 },
          { component: 'Normal Hours Pay', amount: 2200.00 },
          { component: 'OT 1.5x Pay', amount: 110.00 },
          { component: 'Weekend Pay', amount: 110.00 },
          { component: 'Transport Allowance', amount: 150.00 }
        ],
        deductions: [
          { component: 'CPF Employee (20%)', amount: 740.00 },
          { component: 'SDL', amount: 7.71 }
        ],
        employer: [
          { component: 'CPF Employer (17%)', amount: 629.00 },
          { component: 'SDL (0.25%)', amount: 7.71 }
        ]
      }
    },
    {
      employeeId: 'TMO015',
      employeeName: 'Kumar Selvam',
      basicSalary: 1800.00,
      normalPay: 1800.00,
      ot15Pay: 55.00,
      ot20Pay: 0.00,
      weekendPay: 0.00,
      holidayPay: 0.00,
      additions: 200.00,
      grossSalary: 2055.00,
      cpfEmployee: 720.00,
      cpfEmployer: 612.00,
      sdl: 6.17,
      variableDeductions: 0.00,
      totalDeductions: 726.17,
      netSalary: 1328.83,
      variance: -471.17,
      previousMonth: 1800.00,
      breakdown: {
        earnings: [
          { component: 'Basic Salary', amount: 1800.00 },
          { component: 'Normal Hours Pay', amount: 1800.00 },
          { component: 'OT 1.5x Pay', amount: 55.00 },
          { component: 'Site Allowance', amount: 200.00 }
        ],
        deductions: [
          { component: 'CPF Employee (20%)', amount: 720.00 },
          { component: 'SDL', amount: 6.17 }
        ],
        employer: [
          { component: 'CPF Employer (17%)', amount: 612.00 },
          { component: 'SDL (0.25%)', amount: 6.17 }
        ]
      }
    }
  ];

  const toggleRowExpansion = (employeeId) => {
    setExpandedRows(prev => ({
      ...prev,
      [employeeId]: !prev[employeeId]
    }));
  };

  const handleApprovePayroll = () => {
    setAlert({
      show: true,
      type: 'confirm',
      title: 'Approve Payroll',
      message: 'Are you sure you want to approve this payroll? Once approved, the payroll will be frozen and cannot be modified.',
      variant: 'warning',
      onConfirm: () => {
        setAlert({ ...alert, show: false });
        proceedWithApproval();
      },
      onCancel: () => setAlert({ ...alert, show: false })
    });
  };

  const proceedWithApproval = () => {
    showToast('Payroll approved successfully! Proceeding to finalization...', 'success');
    setTimeout(() => {
      if (onApprove) onApprove();
    }, 2000);
  };

  const handleSendBack = () => {
    showToast('Payroll sent back for correction', 'info');
    setTimeout(() => {
      if (onBack) onBack();
    }, 1500);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const totalGross = payrollData.reduce((sum, emp) => sum + emp.grossSalary, 0);
  const totalNet = payrollData.reduce((sum, emp) => sum + emp.netSalary, 0);
  const totalCPFEmployee = payrollData.reduce((sum, emp) => sum + emp.cpfEmployee, 0);
  const totalCPFEmployer = payrollData.reduce((sum, emp) => sum + emp.cpfEmployer, 0);
  const totalDeductions = payrollData.reduce((sum, emp) => sum + emp.totalDeductions, 0);

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-invoice-dollar"></i>
          <div>
            <h1>Payroll Calculation & Review</h1>
            <div className="detail-subtitle">
              <span>Payroll Run: {payrollRunId || 'PR-2024-05-001'}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={onBack}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar" onClick={onBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        {!viewOnly && (
          <button className="btn-toolbar-primary" onClick={handleApprovePayroll}>
            <i className="fas fa-check-circle"></i>
            Approve Payroll
          </button>
        )}
        {!viewOnly && (
          <button className="btn-toolbar" onClick={handleSendBack}>
            <i className="fas fa-undo"></i>
            Send Back
          </button>
        )}
      </div>

      <div className="detail-content">
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Payroll Summary</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>TOTAL EMPLOYEES</label>
                <div className="field-value" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4a5568' }}>
                  {payrollData.length}
                </div>
              </div>
              <div className="detail-field">
                <label>TOTAL GROSS SALARY</label>
                <div className="field-value" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>
                  ${totalGross.toFixed(2)}
                </div>
              </div>
              <div className="detail-field">
                <label>TOTAL DEDUCTIONS</label>
                <div className="field-value" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#dc2626' }}>
                  ${totalDeductions.toFixed(2)}
                </div>
              </div>
              <div className="detail-field">
                <label>TOTAL NET PAYABLE</label>
                <div className="field-value" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4a5568' }}>
                  ${totalNet.toFixed(2)}
                </div>
              </div>
              <div className="detail-field">
                <label>TOTAL CPF EMPLOYEE</label>
                <div className="field-value" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#4a5568' }}>
                  ${totalCPFEmployee.toFixed(2)}
                </div>
              </div>
              <div className="detail-field">
                <label>TOTAL CPF EMPLOYER</label>
                <div className="field-value" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#4a5568' }}>
                  ${totalCPFEmployer.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Employee Payroll Details</h3>
          </div>
          <div className="section-body">
            <div style={{ overflowX: 'auto' }}>
              <table className="detail-items-table">
                <thead>
                  <tr>
                    <th style={{ width: '50px' }}>Expand</th>
                    <th>EMPLOYEE ID</th>
                    <th>EMPLOYEE NAME</th>
                    <th>BASIC</th>
                    <th>NORMAL PAY</th>
                    <th>OT PAY</th>
                    <th>ADDITIONS</th>
                    <th>GROSS</th>
                    <th>DEDUCTIONS</th>
                    <th>NET SALARY</th>
                    <th>VARIANCE</th>
                  </tr>
                </thead>
                <tbody>
                  {payrollData.map((employee) => (
                    <React.Fragment key={employee.employeeId}>
                      <tr>
                        <td>
                          <button 
                            className="btn-expand"
                            onClick={() => toggleRowExpansion(employee.employeeId)}
                            style={{ 
                              background: 'none', 
                              border: 'none', 
                              cursor: 'pointer',
                              fontSize: '1rem'
                            }}
                          >
                            <i className={`fas fa-chevron-${expandedRows[employee.employeeId] ? 'down' : 'right'}`}></i>
                          </button>
                        </td>
                        <td>{employee.employeeId}</td>
                        <td>{employee.employeeName}</td>
                        <td>${employee.basicSalary.toFixed(2)}</td>
                        <td>${employee.normalPay.toFixed(2)}</td>
                        <td>${(employee.ot15Pay + employee.ot20Pay + employee.weekendPay + employee.holidayPay).toFixed(2)}</td>
                        <td style={{ color: '#10b981', fontWeight: 'bold' }}>+${employee.additions.toFixed(2)}</td>
                        <td style={{ fontWeight: 'bold' }}>${employee.grossSalary.toFixed(2)}</td>
                        <td style={{ color: '#dc2626', fontWeight: 'bold' }}>-${employee.totalDeductions.toFixed(2)}</td>
                        <td style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>${employee.netSalary.toFixed(2)}</td>
                        <td>
                          <span style={{ color: employee.variance >= 0 ? '#10b981' : '#dc2626', fontWeight: 'bold' }}>
                            {employee.variance >= 0 ? '+' : ''}${employee.variance.toFixed(2)}
                          </span>
                        </td>
                      </tr>
                      {expandedRows[employee.employeeId] && (
                        <tr className="detail-row">
                          <td colSpan="11">
                            <div style={{ padding: '1.5rem', background: '#f8f9fa' }}>
                              <h4 style={{ marginBottom: '1rem', fontSize: '0.95rem', color: '#4a5568' }}>
                                Salary Breakdown - {employee.employeeName}
                              </h4>
                              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
                                <div>
                                  <h5 style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem', borderBottom: '2px solid #10b981', paddingBottom: '0.3rem' }}>
                                    EARNINGS
                                  </h5>
                                  <table style={{ width: '100%', fontSize: '0.85rem' }}>
                                    <tbody>
                                      {employee.breakdown.earnings.map((item, idx) => (
                                        <tr key={idx}>
                                          <td style={{ padding: '0.3rem 0', color: '#4a5568' }}>{item.component}</td>
                                          <td style={{ padding: '0.3rem 0', textAlign: 'right', fontWeight: 'bold' }}>
                                            ${item.amount.toFixed(2)}
                                          </td>
                                        </tr>
                                      ))}
                                      <tr style={{ borderTop: '2px solid #10b981', fontWeight: 'bold' }}>
                                        <td style={{ padding: '0.5rem 0', color: '#10b981' }}>GROSS SALARY</td>
                                        <td style={{ padding: '0.5rem 0', textAlign: 'right', color: '#10b981' }}>
                                          ${employee.grossSalary.toFixed(2)}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div>
                                  <h5 style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem', borderBottom: '2px solid #dc2626', paddingBottom: '0.3rem' }}>
                                    DEDUCTIONS
                                  </h5>
                                  <table style={{ width: '100%', fontSize: '0.85rem' }}>
                                    <tbody>
                                      {employee.breakdown.deductions.map((item, idx) => (
                                        <tr key={idx}>
                                          <td style={{ padding: '0.3rem 0', color: '#4a5568' }}>{item.component}</td>
                                          <td style={{ padding: '0.3rem 0', textAlign: 'right', fontWeight: 'bold' }}>
                                            ${item.amount.toFixed(2)}
                                          </td>
                                        </tr>
                                      ))}
                                      <tr style={{ borderTop: '2px solid #dc2626', fontWeight: 'bold' }}>
                                        <td style={{ padding: '0.5rem 0', color: '#dc2626' }}>TOTAL DEDUCTIONS</td>
                                        <td style={{ padding: '0.5rem 0', textAlign: 'right', color: '#dc2626' }}>
                                          ${employee.totalDeductions.toFixed(2)}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div>
                                  <h5 style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem', borderBottom: '2px solid #4a5568', paddingBottom: '0.3rem' }}>
                                    EMPLOYER CONTRIBUTIONS
                                  </h5>
                                  <table style={{ width: '100%', fontSize: '0.85rem' }}>
                                    <tbody>
                                      {employee.breakdown.employer.map((item, idx) => (
                                        <tr key={idx}>
                                          <td style={{ padding: '0.3rem 0', color: '#4a5568' }}>{item.component}</td>
                                          <td style={{ padding: '0.3rem 0', textAlign: 'right', fontWeight: 'bold' }}>
                                            ${item.amount.toFixed(2)}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                  <div style={{ marginTop: '1rem', padding: '0.75rem', background: '#e0f2fe', borderRadius: '4px' }}>
                                    <div style={{ fontSize: '0.8rem', color: '#0369a1', marginBottom: '0.3rem' }}>NET SALARY</div>
                                    <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#0369a1' }}>
                                      ${employee.netSalary.toFixed(2)}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Review Checklist</h3>
          </div>
          <div className="section-body">
            <div style={{ padding: '1.25rem', background: '#fef3c7', border: '1px solid #fbbf24', borderRadius: '6px' }}>
              <ul style={{ margin: 0, paddingLeft: '1.75rem', color: '#92400e', fontSize: '13px', lineHeight: '1.8' }}>
                <li>Verify gross salary calculations are correct</li>
                <li>Check OT calculations (1.5x and 2.0x rates)</li>
                <li>Confirm CPF contributions (Employee 20%, Employer 17%)</li>
                <li>Review variance from previous month</li>
                <li>Validate all additions and deductions</li>
                <li>Ensure SDL is calculated correctly (0.25%)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Toast 
        message={toast.message} 
        type={toast.type} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />

      <CustomAlert
        show={alert.show}
        type={alert.type}
        title={alert.title}
        message={alert.message}
        variant={alert.variant}
        onConfirm={alert.onConfirm}
        onCancel={alert.onCancel}
      />
    </div>
  );
};

export default PayrollCalculationReview;
