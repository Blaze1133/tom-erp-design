import React, { useState } from 'react';
import Toast from './Toast';
import PayrollWorkflowDiagram from './PayrollWorkflowDiagram';
import './Enquiries.css';

const ViewPayrollRunDetail = ({ onBack, onEdit, onProcess, payrollRunData }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [processingOptionsCollapsed, setProcessingOptionsCollapsed] = useState(false);
  const [employeesCollapsed, setEmployeesCollapsed] = useState(false);

  // Sample data - will be replaced with actual data passed as props
  const data = payrollRunData || {
    id: 'PR-2024-04-001',
    subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
    payrollMonth: 'April 2024',
    payGroup: 'Hourly',
    payrollCalendar: 'Monthly - Last Day',
    cutoffDate: '30-Apr-2024',
    paymentDate: '07-May-2024',
    description: 'Regular monthly payroll run for hourly employees',
    employeeCount: 28,
    status: 'Completed',
    stage: 'Accounts Verified',
    createdBy: 'HR Manager',
    createdDate: '01-May-2024',
    includeNewJoiners: true,
    includeResignations: true,
    autoApproveAttendance: false,
    employees: [
      {
        id: 1,
        employeeId: 'EMP001',
        name: 'John Tan Wei Ming',
        department: 'TOM: Operating',
        designation: 'Technician',
        daysWorked: 22,
        overtimeHours: 8.5,
        basicPay: 2800.00,
        overtimePay: 340.00,
        allowances: 200.00,
        deductions: 150.00,
        netPay: 3190.00
      },
      {
        id: 2,
        employeeId: 'EMP002',
        name: 'Mary Lim Siew Hoon',
        department: 'TOM: Logistic',
        designation: 'Supervisor',
        daysWorked: 22,
        overtimeHours: 5.0,
        basicPay: 3200.00,
        overtimePay: 200.00,
        allowances: 300.00,
        deductions: 180.00,
        netPay: 3520.00
      },
      {
        id: 3,
        employeeId: 'EMP003',
        name: 'Kumar Rajesh',
        department: 'TOM: Operating',
        designation: 'Operator',
        daysWorked: 20,
        overtimeHours: 12.0,
        basicPay: 2600.00,
        overtimePay: 480.00,
        allowances: 150.00,
        deductions: 120.00,
        netPay: 3110.00
      }
    ]
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

  const handleProcess = () => {
    if (onProcess) {
      onProcess(data.stage, false); // false = not view-only, enable action buttons
    } else {
      showToast('Processing payroll run...', 'info');
    }
  };

  const handleStageClick = (stageId) => {
    showToast(`Opening ${stageId} in view-only mode...`, 'info');
    // Map workflow diagram stage IDs to actual stage names
    const stageNameMap = {
      'attendance-verification': 'Attendance Verification',
      'payroll-adjustments': 'Adjustments',
      'payroll-calculation': 'Payroll Review',
      'payroll-review': 'Payroll Review',
      'payroll-finalization': 'Finalization',
      'accounts-posting': 'Accounts Verified'
    };
    
    const stageName = stageNameMap[stageId] || stageId;
    if (onProcess) {
      onProcess(stageName, true); // true indicates view-only mode
    }
  };

  const getCurrentStage = () => {
    const stageMapping = {
      'Attendance Verification': 'attendance-verification',
      'Payroll Adjustments': 'payroll-adjustments',
      'Payroll Calculation': 'payroll-calculation',
      'Payroll Review': 'payroll-review',
      'Payroll Finalization': 'payroll-finalization',
      'Accounts Posting': 'accounts-posting',
      'Accounts Verified': 'accounts-posting'
    };
    return stageMapping[data.stage] || 'attendance-verification';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return '#4caf50';
      case 'In Progress': return '#ff9800';
      case 'Draft': return '#2196f3';
      case 'Cancelled': return '#f44336';
      default: return '#999';
    }
  };

  const totalBasicPay = data.employees.reduce((sum, emp) => sum + emp.basicPay, 0);
  const totalOvertimePay = data.employees.reduce((sum, emp) => sum + emp.overtimePay, 0);
  const totalAllowances = data.employees.reduce((sum, emp) => sum + emp.allowances, 0);
  const totalDeductions = data.employees.reduce((sum, emp) => sum + emp.deductions, 0);
  const totalNetPay = data.employees.reduce((sum, emp) => sum + emp.netPay, 0);

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-calculator"></i>
          <div>
            <h1>Payroll Run</h1>
            <div className="detail-subtitle">
              <span>{data.id}</span>
              <span className="status-badge-detail" style={{ 
                background: getStatusColor(data.status),
                color: 'white',
                padding: '4px 12px',
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: '600',
                marginLeft: '10px'
              }}>
                {data.status}
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
          <button className="btn-action" onClick={handleBack}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        {data.status !== 'Completed' && (
          <button className="btn-toolbar-primary" onClick={handleProcess}>
            <i className="fas fa-play"></i>
            Process Payroll
          </button>
        )}
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-download"></i>
          Export
        </button>
        <div style={{ marginLeft: 'auto' }}>
          <button className="btn-toolbar">
            <i className="fas fa-cog"></i>
            Actions
          </button>
        </div>
      </div>

      <div className="detail-content">
        {data.status === 'Completed' && data.stage === 'Accounts Verified' && (
          <PayrollWorkflowDiagram 
            currentStage={getCurrentStage()}
            onStageClick={handleStageClick}
          />
        )}

        {/* Primary Information Section */}
        <div className={`detail-section ${primaryInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setPrimaryInfoCollapsed(!primaryInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Payroll Run Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>PAYROLL RUN ID</label>
                <div className="field-value">{data.id}</div>
              </div>
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{data.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>PAYROLL MONTH</label>
                <div className="field-value">{data.payrollMonth}</div>
              </div>
              <div className="detail-field">
                <label>PAY GROUP</label>
                <div className="field-value">{data.payGroup}</div>
              </div>
              <div className="detail-field">
                <label>PAYROLL CALENDAR</label>
                <div className="field-value">{data.payrollCalendar}</div>
              </div>
              <div className="detail-field">
                <label>CUTOFF DATE</label>
                <div className="field-value">{data.cutoffDate}</div>
              </div>
              <div className="detail-field">
                <label>PAYMENT DATE</label>
                <div className="field-value">{data.paymentDate}</div>
              </div>
              <div className="detail-field">
                <label>EMPLOYEE COUNT</label>
                <div className="field-value">{data.employeeCount}</div>
              </div>
              <div className="detail-field">
                <label>CURRENT STAGE</label>
                <div className="field-value">
                  <span className="status-badge info">{data.stage}</span>
                </div>
              </div>
              <div className="detail-field">
                <label>STATUS</label>
                <div className="field-value">
                  <span className="status-badge" style={{ 
                    background: getStatusColor(data.status),
                    color: 'white'
                  }}>
                    {data.status}
                  </span>
                </div>
              </div>
              <div className="detail-field">
                <label>CREATED BY</label>
                <div className="field-value">{data.createdBy}</div>
              </div>
              <div className="detail-field">
                <label>CREATED DATE</label>
                <div className="field-value">{data.createdDate}</div>
              </div>
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label>DESCRIPTION</label>
                <div className="field-value">{data.description || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Processing Options Section */}
        <div className={`detail-section ${processingOptionsCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setProcessingOptionsCollapsed(!processingOptionsCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Processing Options</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>INCLUDE NEW JOINERS</label>
                <div className="field-value">
                  <span className={`status-badge ${data.includeNewJoiners ? 'success' : 'default'}`}>
                    {data.includeNewJoiners ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
              <div className="detail-field">
                <label>INCLUDE RESIGNATIONS</label>
                <div className="field-value">
                  <span className={`status-badge ${data.includeResignations ? 'success' : 'default'}`}>
                    {data.includeResignations ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
              <div className="detail-field">
                <label>AUTO-APPROVE ATTENDANCE</label>
                <div className="field-value">
                  <span className={`status-badge ${data.autoApproveAttendance ? 'success' : 'default'}`}>
                    {data.autoApproveAttendance ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Employees Section */}
        <div className={`detail-section ${employeesCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setEmployeesCollapsed(!employeesCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Employees ({data.employees.length})</h3>
          </div>
          <div className="section-body">
            <div style={{ overflowX: 'auto' }}>
              <table className="detail-items-table">
                <thead>
                  <tr>
                    <th style={{ minWidth: '100px' }}>EMPLOYEE ID</th>
                    <th style={{ minWidth: '200px' }}>NAME</th>
                    <th style={{ minWidth: '150px' }}>DEPARTMENT</th>
                    <th style={{ minWidth: '150px' }}>DESIGNATION</th>
                    <th style={{ minWidth: '100px', textAlign: 'right' }}>DAYS WORKED</th>
                    <th style={{ minWidth: '100px', textAlign: 'right' }}>OT HOURS</th>
                    <th style={{ minWidth: '120px', textAlign: 'right' }}>BASIC PAY</th>
                    <th style={{ minWidth: '120px', textAlign: 'right' }}>OT PAY</th>
                    <th style={{ minWidth: '120px', textAlign: 'right' }}>ALLOWANCES</th>
                    <th style={{ minWidth: '120px', textAlign: 'right' }}>DEDUCTIONS</th>
                    <th style={{ minWidth: '120px', textAlign: 'right' }}>NET PAY</th>
                  </tr>
                </thead>
                <tbody>
                  {data.employees.map((employee) => (
                    <tr key={employee.id}>
                      <td>{employee.employeeId}</td>
                      <td>{employee.name}</td>
                      <td>{employee.department}</td>
                      <td>{employee.designation}</td>
                      <td style={{ textAlign: 'right' }}>{employee.daysWorked}</td>
                      <td style={{ textAlign: 'right' }}>{employee.overtimeHours.toFixed(1)}</td>
                      <td style={{ textAlign: 'right' }}>${employee.basicPay.toFixed(2)}</td>
                      <td style={{ textAlign: 'right' }}>${employee.overtimePay.toFixed(2)}</td>
                      <td style={{ textAlign: 'right' }}>${employee.allowances.toFixed(2)}</td>
                      <td style={{ textAlign: 'right' }}>${employee.deductions.toFixed(2)}</td>
                      <td style={{ textAlign: 'right', fontWeight: '600' }}>${employee.netPay.toFixed(2)}</td>
                    </tr>
                  ))}
                  <tr style={{ borderTop: '2px solid #333', fontWeight: '600', background: '#f5f5f5' }}>
                    <td colSpan="6" style={{ textAlign: 'right', paddingRight: '1rem' }}>TOTALS:</td>
                    <td style={{ textAlign: 'right' }}>${totalBasicPay.toFixed(2)}</td>
                    <td style={{ textAlign: 'right' }}>${totalOvertimePay.toFixed(2)}</td>
                    <td style={{ textAlign: 'right' }}>${totalAllowances.toFixed(2)}</td>
                    <td style={{ textAlign: 'right' }}>${totalDeductions.toFixed(2)}</td>
                    <td style={{ textAlign: 'right', fontWeight: '700', fontSize: '15px' }}>${totalNetPay.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
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
    </div>
  );
};

export default ViewPayrollRunDetail;
