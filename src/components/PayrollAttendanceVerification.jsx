import React, { useState } from 'react';
import Toast from './Toast';
import CustomAlert from './CustomAlert';
import PayrollWorkflowDiagram from './PayrollWorkflowDiagram';
import './Enquiries.css';

const PayrollAttendanceVerification = ({ payrollRunId, onBack, onConfirm, viewOnly = false }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [alert, setAlert] = useState({ show: false, type: 'confirm', title: '', message: '', onConfirm: null, variant: 'warning' });

  const [attendanceData, setAttendanceData] = useState([
    {
      employeeId: 'TMO008',
      employeeName: 'Natarajan Muruganandham',
      workingDays: 22,
      normalHours: 176.00,
      ot15Hours: 12.00,
      ot20Hours: 8.00,
      weekendHours: 16.00,
      holidayHours: 8.00,
      totalHours: 220.00,
      remarks: ''
    },
    {
      employeeId: 'MEP01',
      employeeName: 'Jeganathan Sundaravelu',
      workingDays: 20,
      normalHours: 160.00,
      ot15Hours: 8.00,
      ot20Hours: 0.00,
      weekendHours: 8.00,
      holidayHours: 0.00,
      totalHours: 176.00,
      remarks: ''
    },
    {
      employeeId: 'TMO015',
      employeeName: 'Kumar Selvam',
      workingDays: 18,
      normalHours: 144.00,
      ot15Hours: 4.00,
      ot20Hours: 0.00,
      weekendHours: 0.00,
      holidayHours: 0.00,
      totalHours: 148.00,
      remarks: ''
    },
    {
      employeeId: 'TMO020',
      employeeName: 'Ravi Chandran',
      workingDays: 22,
      normalHours: 176.00,
      ot15Hours: 24.00,
      ot20Hours: 16.00,
      weekendHours: 24.00,
      holidayHours: 8.00,
      totalHours: 248.00,
      remarks: ''
    },
    {
      employeeId: 'TMO025',
      employeeName: 'Suresh Kumar',
      workingDays: 22,
      normalHours: 176.00,
      ot15Hours: 8.00,
      ot20Hours: 4.00,
      weekendHours: 8.00,
      holidayHours: 0.00,
      totalHours: 196.00,
      remarks: ''
    }
  ]);

  const handleConfirmAttendance = () => {
    setAlert({
      show: true,
      type: 'confirm',
      title: 'Confirm Attendance',
      message: 'All attendance records are verified. Do you want to proceed with confirmation? This will lock the attendance for this payroll run.',
      variant: 'success',
      onConfirm: () => {
        setAlert({ ...alert, show: false });
        proceedWithConfirmation();
      },
      onCancel: () => setAlert({ ...alert, show: false })
    });
  };

  const proceedWithConfirmation = () => {
    showToast('Attendance confirmed and locked for this payroll run', 'success');
    setTimeout(() => {
      if (onConfirm) onConfirm();
    }, 2000);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const toggleSelectEmployee = (employeeId) => {
    setSelectedEmployees(prev => 
      prev.includes(employeeId) 
        ? prev.filter(id => id !== employeeId)
        : [...prev, employeeId]
    );
  };

  const toggleSelectAll = () => {
    if (selectedEmployees.length === attendanceData.length) {
      setSelectedEmployees([]);
    } else {
      setSelectedEmployees(attendanceData.map(emp => emp.employeeId));
    }
  };

  const totalEmployees = attendanceData.length;
  const totalNormalHours = attendanceData.reduce((sum, emp) => sum + emp.normalHours, 0);
  const totalOTHours = attendanceData.reduce((sum, emp) => sum + emp.ot15Hours + emp.ot20Hours, 0);

  return (
    <div className="detail-view">
      <div className="detail-header">
        <div className="detail-title-section">
          <i className="fas fa-check-circle" style={{ fontSize: '1.5rem', color: '#4a5568' }}></i>
          <div>
            <h1>Attendance Verification</h1>
            <p className="detail-subtitle">
              Payroll Run: {payrollRunId || 'PR-2024-05-001'} • Final confirmation before payroll calculation
            </p>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-icon" onClick={onBack}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar" onClick={onBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        {!viewOnly && (
          <button className="btn-toolbar-primary" onClick={handleConfirmAttendance}>
            <i className="fas fa-check"></i>
            Confirm Attendance
          </button>
        )}
      </div>

      <div className="detail-content">
        {/* Workflow Diagram */}
        <PayrollWorkflowDiagram currentStage="attendance-verification" compact={true} />

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <span>ATTENDANCE SUMMARY</span>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>TOTAL EMPLOYEES</label>
                <div className="field-value" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4a5568' }}>
                  {totalEmployees}
                </div>
              </div>
              <div className="detail-field">
                <label>TOTAL NORMAL HOURS</label>
                <div className="field-value" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4a5568' }}>
                  {totalNormalHours.toFixed(2)}
                </div>
              </div>
              <div className="detail-field">
                <label>TOTAL OT HOURS</label>
                <div className="field-value" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4a5568' }}>
                  {totalOTHours.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <span>EMPLOYEE ATTENDANCE DETAILS</span>
          </div>
          <div className="section-body">
            <div className="items-table-wrapper">
              <table className="detail-items-table">
                <thead>
                  <tr>
                    <th style={{ width: '40px' }}>
                      <input 
                        type="checkbox" 
                        checked={selectedEmployees.length === attendanceData.length && attendanceData.length > 0}
                        onChange={toggleSelectAll}
                      />
                    </th>
                    <th>EMPLOYEE ID</th>
                    <th>EMPLOYEE NAME</th>
                    <th>WORKING DAYS</th>
                    <th>NORMAL HOURS</th>
                    <th>OT 1.5X</th>
                    <th>OT 2.0X</th>
                    <th>WEEKEND HOURS</th>
                    <th>HOLIDAY HOURS</th>
                    <th>TOTAL HOURS</th>
                    <th>REMARKS</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.map((employee) => (
                    <tr key={employee.employeeId}>
                      <td>
                        <input 
                          type="checkbox" 
                          checked={selectedEmployees.includes(employee.employeeId)}
                          onChange={() => toggleSelectEmployee(employee.employeeId)}
                        />
                      </td>
                      <td>{employee.employeeId}</td>
                      <td>{employee.employeeName}</td>
                      <td>{employee.workingDays}</td>
                      <td>{employee.normalHours.toFixed(2)}</td>
                      <td>{employee.ot15Hours.toFixed(2)}</td>
                      <td>{employee.ot20Hours.toFixed(2)}</td>
                      <td>{employee.weekendHours.toFixed(2)}</td>
                      <td>{employee.holidayHours.toFixed(2)}</td>
                      <td style={{ fontWeight: 'bold' }}>{employee.totalHours.toFixed(2)}</td>
                      <td>{employee.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <div className="section-body">
            <div style={{ padding: '1rem', background: '#f0f9ff', border: '1px solid #bfdbfe', borderRadius: '4px' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#1e40af', fontSize: '0.9rem' }}>
                <i className="fas fa-info-circle"></i> Attendance Verification Process
              </h4>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#1e40af', fontSize: '0.85rem', lineHeight: '1.8' }}>
                <li><strong>Review:</strong> Review all employee attendance records for accuracy</li>
                <li><strong>Verification:</strong> Verify working days, normal hours, overtime hours, and other attendance data</li>
                <li><strong>Confirmation:</strong> Once verified, confirm attendance to lock the data for this payroll run</li>
                <li><strong>After Confirmation:</strong> Attendance data is locked and system proceeds to Payroll Adjustments stage</li>
              </ul>
            </div>
          </div>
        </div>

        {!viewOnly && (
          <div className="detail-footer">
            <button className="btn-toolbar" onClick={onBack}>
              <i className="fas fa-arrow-left"></i>
              Back
            </button>
            <button className="btn-toolbar-primary" onClick={handleConfirmAttendance}>
              <i className="fas fa-check-circle"></i>
              Confirm Attendance
            </button>
          </div>
        )}
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

export default PayrollAttendanceVerification;
