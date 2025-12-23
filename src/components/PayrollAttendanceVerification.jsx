import React, { useState } from 'react';
import Toast from './Toast';
import CustomAlert from './CustomAlert';
import PayrollWorkflowDiagram from './PayrollWorkflowDiagram';
import './Enquiries.css';

const PayrollAttendanceVerification = ({ payrollRunId, onBack, onConfirm, viewOnly = false }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [showExceptionsOnly, setShowExceptionsOnly] = useState(false);
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
      hasException: false,
      exceptionType: '',
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
      hasException: false,
      exceptionType: '',
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
      hasException: true,
      exceptionType: 'Missing Attendance',
      remarks: '4 days missing attendance records'
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
      hasException: true,
      exceptionType: 'Excessive OT',
      remarks: 'OT hours exceed 40 hours threshold'
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
      hasException: false,
      exceptionType: '',
      remarks: ''
    }
  ]);

  const handleConfirmAttendance = () => {
    const exceptionsCount = attendanceData.filter(emp => emp.hasException).length;
    
    if (exceptionsCount > 0) {
      setAlert({
        show: true,
        type: 'alert',
        title: 'Cannot Confirm Attendance',
        message: `There are ${exceptionsCount} employee(s) with exceptions. Please resolve all exceptions before confirming attendance. You can send employees back to timesheet for correction.`,
        variant: 'error',
        onConfirm: () => {
          setAlert({ ...alert, show: false });
        }
      });
      return;
    }

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

  const handleSendBackToTimesheet = () => {
    const selectedExceptions = selectedEmployees.filter(empId => {
      const emp = attendanceData.find(e => e.employeeId === empId);
      return emp && emp.hasException;
    });

    if (selectedExceptions.length === 0) {
      showToast('Please select employees with exceptions to send back', 'error');
      return;
    }

    // Get employee names for the confirmation message
    const employeeNames = selectedExceptions.map(empId => {
      const emp = attendanceData.find(e => e.employeeId === empId);
      return emp ? `${emp.employeeId} - ${emp.employeeName}` : empId;
    }).join(', ');

    setAlert({
      show: true,
      type: 'confirm',
      title: 'Send Back to Timesheet',
      message: `Send ${selectedExceptions.length} employee(s) back to timesheet for correction?\n\nEmployees: ${employeeNames}\n\nTheir attendance records will be:\n• Unlocked for editing in timesheet\n• Marked as "Pending Correction"\n• Removed from this payroll run temporarily\n• Available for re-submission after correction`,
      variant: 'warning',
      onConfirm: () => {
        setAlert({ ...alert, show: false });
        processSendBack(selectedExceptions);
      },
      onCancel: () => setAlert({ ...alert, show: false })
    });
  };

  const processSendBack = (employeeIds) => {
    // Simulate sending back to timesheet
    showToast('Processing send back request...', 'info');
    
    setTimeout(() => {
      // Remove sent-back employees from the attendance data
      setAttendanceData(prevData => 
        prevData.filter(emp => !employeeIds.includes(emp.employeeId))
      );
      
      // In a real application, this would:
      // 1. Update attendance status to "Pending Correction" in database
      // 2. Unlock timesheet records
      // 3. Send notification to supervisors
      // 4. Create audit log entry
      
      showToast(`Successfully sent ${employeeIds.length} employee(s) back to timesheet. They have been removed from this payroll run.`, 'success');
      setSelectedEmployees([]);
      
      // Show additional info
      setTimeout(() => {
        showToast('Supervisors have been notified to correct the attendance records', 'info');
      }, 2000);
    }, 1000);
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
    const filteredData = showExceptionsOnly 
      ? attendanceData.filter(emp => emp.hasException)
      : attendanceData;
    
    if (selectedEmployees.length === filteredData.length) {
      setSelectedEmployees([]);
    } else {
      setSelectedEmployees(filteredData.map(emp => emp.employeeId));
    }
  };

  const filteredData = showExceptionsOnly 
    ? attendanceData.filter(emp => emp.hasException)
    : attendanceData;

  const totalEmployees = attendanceData.length;
  const totalExceptions = attendanceData.filter(emp => emp.hasException).length;
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
        {!viewOnly && totalExceptions > 0 && (
          <button className="btn-toolbar" onClick={handleSendBackToTimesheet} style={{ background: '#f59e0b', color: 'white', border: 'none' }}>
            <i className="fas fa-undo"></i>
            Send Back to Timesheet
          </button>
        )}
        {!viewOnly && (
          <button className="btn-toolbar-primary" onClick={handleConfirmAttendance}>
            <i className="fas fa-check"></i>
            Confirm Attendance
          </button>
        )}
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer', marginLeft: '1rem' }}>
          <input 
            type="checkbox" 
            checked={showExceptionsOnly}
            onChange={(e) => setShowExceptionsOnly(e.target.checked)}
          />
          Show Exceptions Only
        </label>
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
                <label>EXCEPTIONS</label>
                <div className="field-value" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: totalExceptions > 0 ? '#dc2626' : '#10b981' }}>
                  {totalExceptions}
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

        {totalExceptions > 0 && (
          <div className="detail-section">
            <div className="section-body">
              <div style={{ padding: '1rem', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '4px' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#dc2626', fontSize: '0.9rem' }}>
                  <i className="fas fa-exclamation-triangle"></i> Attention Required
                </h4>
                <p style={{ margin: '0 0 0.5rem 0', color: '#dc2626', fontSize: '0.85rem' }}>
                  {totalExceptions} employee(s) have exceptions. You must resolve all exceptions before confirming attendance.
                </p>
                <p style={{ margin: 0, color: '#dc2626', fontSize: '0.85rem', fontWeight: '600' }}>
                  <i className="fas fa-info-circle"></i> Select employees with exceptions and click "Send Back to Timesheet" to unlock their records for correction.
                </p>
              </div>
            </div>
          </div>
        )}

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
                        checked={selectedEmployees.length === filteredData.length && filteredData.length > 0}
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
                    <th>EXCEPTION</th>
                    <th>REMARKS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((employee) => (
                    <tr key={employee.employeeId} className={employee.hasException ? 'exception-row' : ''}>
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
                      <td>
                        {employee.hasException ? (
                          <span className="status-badge error">
                            <i className="fas fa-exclamation-triangle"></i> {employee.exceptionType}
                          </span>
                        ) : (
                          <span className="status-badge success">
                            <i className="fas fa-check"></i> OK
                          </span>
                        )}
                      </td>
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
                <li><strong>Exceptions:</strong> Employees with exceptions (missing attendance, excessive OT, etc.) must be sent back to timesheet for correction</li>
                <li><strong>Send Back:</strong> Select employees with exceptions and click "Send Back to Timesheet" to unlock their records</li>
                <li><strong>Confirmation:</strong> Only employees with "OK" status can be confirmed. All exceptions must be resolved first</li>
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
            {totalExceptions > 0 && (
              <button className="btn-toolbar" onClick={handleSendBackToTimesheet} style={{ background: '#f59e0b', color: 'white', border: 'none' }}>
                <i className="fas fa-undo"></i>
                Send Back to Timesheet ({selectedEmployees.filter(empId => {
                  const emp = attendanceData.find(e => e.employeeId === empId);
                  return emp && emp.hasException;
                }).length})
              </button>
            )}
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

      <style jsx>{`
        .exception-row {
          background-color: #fef2f2 !important;
        }
        .exception-row:hover {
          background-color: #fee2e2 !important;
        }
      `}</style>
    </div>
  );
};

export default PayrollAttendanceVerification;
