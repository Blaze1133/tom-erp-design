import React, { useState } from 'react';
import Toast from './Toast';
import PayrollWorkflowDiagram from './PayrollWorkflowDiagram';
import CustomAlert from './CustomAlert';
import './Enquiries.css';

const PayrollCalculationReview = ({ payrollRunId, onBack, onApprove, viewOnly = false }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [expandedRows, setExpandedRows] = useState({});
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [alert, setAlert] = useState({ show: false, type: 'confirm', title: '', message: '', onConfirm: null, variant: 'warning' });
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const initialPayrollData = [
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
          { component: 'Basic Salary', amount: 1700.00, editable: false },
          { component: 'Normal Hours Pay', amount: 1700.00, editable: false },
          { component: 'OT 1.5x Pay', amount: 160.50, editable: true },
          { component: 'OT 2.0x Pay', amount: 142.72, editable: true },
          { component: 'Weekend Pay', amount: 214.08, editable: true },
          { component: 'Holiday Pay', amount: 107.04, editable: true },
          { component: 'Performance Bonus', amount: 500.00, editable: true }
        ],
        deductions: [
          { component: 'CPF Employee (20%)', amount: 680.00, editable: false },
          { component: 'SDL', amount: 8.47, editable: false },
          { component: 'Loan Recovery', amount: 100.00, editable: true }
        ],
        employer: [
          { component: 'CPF Employer (17%)', amount: 578.00, editable: false },
          { component: 'SDL (0.25%)', amount: 8.47, editable: false }
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
          { component: 'Basic Salary', amount: 2200.00, editable: false },
          { component: 'Normal Hours Pay', amount: 2200.00, editable: false },
          { component: 'OT 1.5x Pay', amount: 110.00, editable: true },
          { component: 'Weekend Pay', amount: 110.00, editable: true },
          { component: 'Transport Allowance', amount: 150.00, editable: true }
        ],
        deductions: [
          { component: 'CPF Employee (20%)', amount: 740.00, editable: false },
          { component: 'SDL', amount: 7.71, editable: false }
        ],
        employer: [
          { component: 'CPF Employer (17%)', amount: 629.00, editable: false },
          { component: 'SDL (0.25%)', amount: 7.71, editable: false }
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
          { component: 'Basic Salary', amount: 1800.00, editable: false },
          { component: 'Normal Hours Pay', amount: 1800.00, editable: false },
          { component: 'OT 1.5x Pay', amount: 55.00, editable: true },
          { component: 'Site Allowance', amount: 200.00, editable: true }
        ],
        deductions: [
          { component: 'CPF Employee (20%)', amount: 720.00, editable: false },
          { component: 'SDL', amount: 6.17, editable: false }
        ],
        employer: [
          { component: 'CPF Employer (17%)', amount: 612.00, editable: false },
          { component: 'SDL (0.25%)', amount: 6.17, editable: false }
        ]
      }
    }
  ];

  const [payrollData, setPayrollData] = useState(initialPayrollData);

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

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee.employeeId);
    
    // Create editable breakdown structure
    const editableBreakdown = {
      earnings: employee.breakdown.earnings.map(item => ({ ...item })),
      deductions: employee.breakdown.deductions.map(item => ({ ...item }))
    };
    
    setEditFormData({
      breakdown: editableBreakdown
    });
  };

  const handleCancelEdit = () => {
    setEditingEmployee(null);
    setEditFormData({});
  };

  const handleSaveEdit = () => {
    const updatedData = payrollData.map(emp => {
      if (emp.employeeId === editingEmployee) {
        // Calculate totals from breakdown
        const totalEarnings = editFormData.breakdown.earnings.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
        
        // Get all deductions except CPF and SDL (which are auto-calculated)
        const variableDeductions = editFormData.breakdown.deductions
          .filter(d => d.component !== 'CPF Employee (20%)' && d.component !== 'SDL')
          .reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
        
        const newGrossSalary = totalEarnings;
        const newCPFEmployee = newGrossSalary * 0.20;
        const newSDL = newGrossSalary * 0.0025;
        const newTotalDeductions = newCPFEmployee + newSDL + variableDeductions;
        const newNetSalary = newGrossSalary - newTotalDeductions;
        const newCPFEmployer = newGrossSalary * 0.17;

        // Update calculated fields in breakdown and ensure all amounts are numbers
        const updatedEarningsBreakdown = editFormData.breakdown.earnings.map(item => ({ 
          ...item, 
          amount: parseFloat(item.amount) || 0 
        }));
        const updatedDeductionsBreakdown = editFormData.breakdown.deductions.map(item => {
          if (item.component === 'CPF Employee (20%)') {
            return { ...item, amount: newCPFEmployee };
          } else if (item.component === 'SDL') {
            return { ...item, amount: newSDL };
          }
          return { ...item, amount: parseFloat(item.amount) || 0 };
        });

        const updatedEmployerBreakdown = emp.breakdown.employer.map(item => {
          if (item.component === 'CPF Employer (17%)') {
            return { ...item, amount: newCPFEmployer };
          } else if (item.component === 'SDL (0.25%)') {
            return { ...item, amount: newSDL };
          }
          return { ...item };
        });

        // Extract individual values for backward compatibility
        const ot15Item = updatedEarningsBreakdown.find(e => e.component === 'OT 1.5x Pay');
        const ot20Item = updatedEarningsBreakdown.find(e => e.component === 'OT 2.0x Pay');
        const weekendItem = updatedEarningsBreakdown.find(e => e.component === 'Weekend Pay');
        const holidayItem = updatedEarningsBreakdown.find(e => e.component === 'Holiday Pay');
        
        // Calculate additions (bonuses/allowances) - everything except basic, normal, and OT-related
        const additionsTotal = updatedEarningsBreakdown
          .filter(e => !['Basic Salary', 'Normal Hours Pay', 'OT 1.5x Pay', 'OT 2.0x Pay', 'Weekend Pay', 'Holiday Pay'].includes(e.component))
          .reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);

        return {
          ...emp,
          ot15Pay: ot15Item ? parseFloat(ot15Item.amount) : 0,
          ot20Pay: ot20Item ? parseFloat(ot20Item.amount) : 0,
          weekendPay: weekendItem ? parseFloat(weekendItem.amount) : 0,
          holidayPay: holidayItem ? parseFloat(holidayItem.amount) : 0,
          additions: additionsTotal,
          variableDeductions: variableDeductions,
          grossSalary: newGrossSalary,
          cpfEmployee: newCPFEmployee,
          cpfEmployer: newCPFEmployer,
          sdl: newSDL,
          totalDeductions: newTotalDeductions,
          netSalary: newNetSalary,
          variance: newNetSalary - emp.previousMonth,
          breakdown: {
            earnings: updatedEarningsBreakdown,
            deductions: updatedDeductionsBreakdown,
            employer: updatedEmployerBreakdown
          }
        };
      }
      return emp;
    });

    setPayrollData(updatedData);
    setEditingEmployee(null);
    setEditFormData({});
    showToast('Employee payroll updated successfully', 'success');
  };

  const handleBreakdownFieldChange = (type, index, value) => {
    setEditFormData(prev => {
      const updated = { ...prev };
      updated.breakdown[type][index].amount = value;
      return updated;
    });
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
        {/* Workflow Diagram */}
        <PayrollWorkflowDiagram currentStage="payroll-review" compact={true} />

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
                        {!viewOnly && (
                          <td style={{ textAlign: 'center' }}>
                            <button
                              onClick={() => handleEditEmployee(employee)}
                              className="btn-action"
                              style={{
                                padding: '8px 16px',
                                fontSize: '12px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px'
                              }}
                              title="Edit Employee Payroll"
                            >
                              <i className="fas fa-edit"></i>
                              <span>Edit</span>
                            </button>
                          </td>
                        )}
                      </tr>
                      {expandedRows[employee.employeeId] && (
                        <tr className="detail-row">
                          <td colSpan="12">
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

      {/* Edit Employee Modal */}
      {editingEmployee && editFormData.breakdown && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '6px',
            width: '800px',
            maxWidth: '100%',
            maxHeight: '90vh',
            overflow: 'hidden',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Header */}
            <div style={{ 
              padding: '1.5rem 2rem', 
              borderBottom: '1px solid #e5e7eb',
              background: '#fafafa'
            }}>
              <h3 style={{ 
                margin: 0, 
                fontSize: '1.125rem', 
                fontWeight: '600', 
                color: '#1f2937'
              }}>
                Edit Payroll Components
              </h3>
              <p style={{ 
                margin: '0.25rem 0 0 0', 
                fontSize: '0.875rem', 
                color: '#6b7280'
              }}>
                {payrollData.find(e => e.employeeId === editingEmployee)?.employeeName}
              </p>
            </div>

            {/* Content */}
            <div style={{ 
              flex: 1, 
              overflow: 'auto', 
              padding: '2rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem'
            }}>
              {/* Earnings Section */}
              <div>
                <h4 style={{ 
                  margin: '0 0 1rem 0', 
                  fontSize: '0.875rem', 
                  fontWeight: '600', 
                  color: '#374151',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Earnings Components
                </h4>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {editFormData.breakdown.earnings.map((item, idx) => (
                    <div key={idx}>
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '0.375rem', 
                        fontSize: '0.8125rem', 
                        fontWeight: '500', 
                        color: '#374151'
                      }}>
                        {item.component}
                      </label>
                      <input
                        type="number"
                        value={item.amount}
                        onChange={(e) => handleBreakdownFieldChange('earnings', idx, e.target.value)}
                        style={{
                          width: '100%',
                          padding: '0.625rem 0.75rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '4px',
                          fontSize: '0.875rem',
                          color: '#374151',
                          background: 'white'
                        }}
                        step="0.01"
                        min="0"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Deductions Section */}
              <div>
                <h4 style={{ 
                  margin: '0 0 1rem 0', 
                  fontSize: '0.875rem', 
                  fontWeight: '600', 
                  color: '#374151',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Deduction Components
                </h4>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {editFormData.breakdown.deductions.map((item, idx) => (
                    <div key={idx}>
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '0.375rem', 
                        fontSize: '0.8125rem', 
                        fontWeight: '500', 
                        color: '#374151'
                      }}>
                        {item.component}
                      </label>
                      <input
                        type="number"
                        value={item.amount}
                        onChange={(e) => handleBreakdownFieldChange('deductions', idx, e.target.value)}
                        style={{
                          width: '100%',
                          padding: '0.625rem 0.75rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '4px',
                          fontSize: '0.875rem',
                          color: '#374151',
                          background: 'white'
                        }}
                        step="0.01"
                        min="0"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Info Note */}
            <div style={{ padding: '0 2rem 1rem 2rem' }}>
              <div style={{ padding: '0.75rem 1rem', background: '#eff6ff', borderRadius: '4px', border: '1px solid #bfdbfe' }}>
                <p style={{ margin: 0, fontSize: '0.8125rem', color: '#1e40af', lineHeight: '1.5' }}>
                  <strong>Note:</strong> All fields are editable. CPF, SDL, Gross Salary, Total Deductions, and Net Salary will be recalculated automatically.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div style={{ 
              padding: '1.25rem 2rem', 
              borderTop: '1px solid #e5e7eb',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '0.75rem',
              background: '#fafafa'
            }}>
              <button
                onClick={handleCancelEdit}
                style={{
                  padding: '0.625rem 1.25rem',
                  background: 'white',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#374151'
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                style={{
                  padding: '0.625rem 1.25rem',
                  background: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

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
