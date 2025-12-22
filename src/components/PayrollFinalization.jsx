import React, { useState } from 'react';
import Toast from './Toast';
import CustomAlert from './CustomAlert';
import './Enquiries.css';

const PayrollFinalization = ({ payrollRunId, onBack, onFinalize, viewOnly = false }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [generatePayslips, setGeneratePayslips] = useState(true);
  const [sendEmailNotifications, setSendEmailNotifications] = useState(true);
  const [lockPayroll, setLockPayroll] = useState(true);
  const [alert, setAlert] = useState({ show: false, type: 'confirm', title: '', message: '', onConfirm: null, variant: 'warning' });

  const payrollSummary = {
    payrollRunId: payrollRunId || 'PR-2024-05-001',
    subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
    payrollMonth: 'May 2024',
    payGroup: 'Both (Hourly + EP & Local)',
    totalEmployees: 73,
    totalGrossSalary: 125450.00,
    totalDeductions: 28320.50,
    totalNetPayable: 97129.50,
    totalCPFEmployee: 25090.00,
    totalCPFEmployer: 21326.50,
    totalSDL: 376.35,
    paymentDate: '07-Jun-2024',
    approvedBy: 'Finance Manager',
    approvedDate: '05-Jun-2024'
  };

  const handleFinalize = () => {
    setAlert({
      show: true,
      type: 'confirm',
      title: 'Finalize Payroll',
      message: 'Are you sure you want to finalize this payroll?\n\nThis action will:\n• Lock payroll data permanently\n• Generate payslips for all employees\n• Assign payroll reference numbers\n• Prepare data for accounts posting\n\nNo changes will be allowed after finalization without reversal.',
      variant: 'warning',
      onConfirm: () => {
        setAlert({ ...alert, show: false });
        proceedWithFinalization();
      },
      onCancel: () => setAlert({ ...alert, show: false })
    });
  };

  const proceedWithFinalization = () => {
    showToast('Finalizing payroll...', 'info');
    
    setTimeout(() => {
      showToast('Payroll finalized successfully! Generating payslips...', 'success');
      setTimeout(() => {
        if (onFinalize) onFinalize();
      }, 2000);
    }, 1500);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-lock"></i>
          <div>
            <h1>Payroll Finalization</h1>
            <div className="detail-subtitle">
              <span>Payroll Run: {payrollSummary.payrollRunId}</span>
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
          <button className="btn-toolbar-primary" onClick={handleFinalize}>
            <i className="fas fa-lock"></i>
            Finalize Payroll
          </button>
        )}
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print Summary
        </button>
      </div>

      <div className="detail-content">
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Payroll Run Summary</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>PAYROLL RUN ID</label>
                <div className="field-value">{payrollSummary.payrollRunId}</div>
              </div>
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{payrollSummary.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>PAYROLL MONTH</label>
                <div className="field-value">{payrollSummary.payrollMonth}</div>
              </div>
              <div className="detail-field">
                <label>PAY GROUP</label>
                <div className="field-value">{payrollSummary.payGroup}</div>
              </div>
              <div className="detail-field">
                <label>PAYMENT DATE</label>
                <div className="field-value">{payrollSummary.paymentDate}</div>
              </div>
              <div className="detail-field">
                <label>APPROVED BY</label>
                <div className="field-value">{payrollSummary.approvedBy}</div>
              </div>
              <div className="detail-field">
                <label>APPROVED DATE</label>
                <div className="field-value">{payrollSummary.approvedDate}</div>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Financial Summary</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>TOTAL EMPLOYEES</label>
                <div className="field-value" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4a5568' }}>
                  {payrollSummary.totalEmployees}
                </div>
              </div>
              <div className="detail-field">
                <label>TOTAL GROSS SALARY</label>
                <div className="field-value" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>
                  ${payrollSummary.totalGrossSalary.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
              </div>
              <div className="detail-field">
                <label>TOTAL DEDUCTIONS</label>
                <div className="field-value" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#dc2626' }}>
                  ${payrollSummary.totalDeductions.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
              </div>
              <div className="detail-field">
                <label>TOTAL NET PAYABLE</label>
                <div className="field-value" style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1e40af' }}>
                  ${payrollSummary.totalNetPayable.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Statutory Contributions (Singapore)</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>TOTAL CPF EMPLOYEE (20%)</label>
                <div className="field-value" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#4a5568' }}>
                  ${payrollSummary.totalCPFEmployee.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
              </div>
              <div className="detail-field">
                <label>TOTAL CPF EMPLOYER (17%)</label>
                <div className="field-value" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#4a5568' }}>
                  ${payrollSummary.totalCPFEmployer.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
              </div>
              <div className="detail-field">
                <label>TOTAL SDL (0.25%)</label>
                <div className="field-value" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#4a5568' }}>
                  ${payrollSummary.totalSDL.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
              </div>
              <div className="detail-field">
                <label>TOTAL EMPLOYER LIABILITY</label>
                <div className="field-value" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#dc2626' }}>
                  ${(payrollSummary.totalCPFEmployer + payrollSummary.totalSDL).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Finalization Options</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem 0' }}>
                  <input
                    type="checkbox"
                    checked={generatePayslips}
                    onChange={(e) => setGeneratePayslips(e.target.checked)}
                    style={{ marginTop: '0.25rem' }}
                  />
                  <div>
                    <label style={{ fontWeight: '600', fontSize: '13px', color: '#333', marginBottom: '0.25rem', display: 'block' }}>
                      GENERATE PAYSLIPS
                    </label>
                    <small style={{ color: '#666', fontSize: '12px' }}>
                      Generate PDF payslips for all employees
                    </small>
                  </div>
                </div>
              </div>

              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem 0' }}>
                  <input
                    type="checkbox"
                    checked={sendEmailNotifications}
                    onChange={(e) => setSendEmailNotifications(e.target.checked)}
                    style={{ marginTop: '0.25rem' }}
                  />
                  <div>
                    <label style={{ fontWeight: '600', fontSize: '13px', color: '#333', marginBottom: '0.25rem', display: 'block' }}>
                      SEND EMAIL NOTIFICATIONS
                    </label>
                    <small style={{ color: '#666', fontSize: '12px' }}>
                      Email payslips to employees automatically
                    </small>
                  </div>
                </div>
              </div>

              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem 0' }}>
                  <input
                    type="checkbox"
                    checked={lockPayroll}
                    onChange={(e) => setLockPayroll(e.target.checked)}
                    disabled
                    style={{ marginTop: '0.25rem' }}
                  />
                  <div>
                    <label style={{ fontWeight: '600', fontSize: '13px', color: '#333', marginBottom: '0.25rem', display: 'block' }}>
                      LOCK PAYROLL DATA
                    </label>
                    <small style={{ color: '#666', fontSize: '12px' }}>
                      Prevent any modifications (Required - cannot be disabled)
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Important Information</h3>
          </div>
          <div className="section-body">
            <div style={{ padding: '1.25rem', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '6px', marginBottom: '1.5rem' }}>
              <h4 style={{ margin: '0 0 0.75rem 0', color: '#dc2626', fontSize: '14px', fontWeight: '600' }}>
                <i className="fas fa-exclamation-triangle" style={{ marginRight: '0.5rem' }}></i>
                Important - Finalization is Irreversible
              </h4>
              <p style={{ margin: 0, color: '#dc2626', fontSize: '13px', lineHeight: '1.6' }}>
                Once finalized, this payroll cannot be modified without creating a reversal entry. 
                Please ensure all calculations have been reviewed and approved before proceeding.
              </p>
            </div>

            <div style={{ padding: '1.25rem', background: '#f0f9ff', border: '1px solid #bfdbfe', borderRadius: '6px' }}>
              <h4 style={{ margin: '0 0 0.75rem 0', color: '#1e40af', fontSize: '14px', fontWeight: '600' }}>
                <i className="fas fa-info-circle" style={{ marginRight: '0.5rem' }}></i>
                What happens when you finalize?
              </h4>
              <ul style={{ margin: 0, paddingLeft: '1.75rem', color: '#1e40af', fontSize: '13px', lineHeight: '1.8' }}>
                <li>Payroll data is permanently locked</li>
                <li>Payslips are generated for all {payrollSummary.totalEmployees} employees</li>
                <li>Payroll reference numbers are assigned</li>
                <li>Email notifications sent to employees (if enabled)</li>
                <li>Data is prepared for accounts posting</li>
                <li>Audit trail is created for compliance</li>
                <li>System proceeds to next stage: Accounts Posting</li>
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

export default PayrollFinalization;
