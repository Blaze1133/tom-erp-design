import React, { useState } from 'react';
import Toast from './Toast';
import PayrollWorkflowDiagram from './PayrollWorkflowDiagram';
import CustomAlert from './CustomAlert';
import './Enquiries.css';

const PayrollAccountsPosting = ({ payrollRunId, onBack, onComplete, viewOnly = false }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('summary');
  const [postingDate, setPostingDate] = useState('');
  const [postingRemarks, setPostingRemarks] = useState('');
  const [alert, setAlert] = useState({ show: false, type: 'confirm', title: '', message: '', onConfirm: null, variant: 'warning' });

  const payrollSummary = {
    payrollRunId: payrollRunId || 'PR-2024-05-001',
    subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
    payrollMonth: 'May 2024',
    totalNetPayable: 97129.50,
    totalGrossSalary: 125450.00,
    totalDeductions: 28320.50,
    totalCPFEmployee: 25090.00,
    totalCPFEmployer: 21326.50,
    totalSDL: 376.35,
    finalizedDate: '05-Jun-2024',
    paymentDate: '07-Jun-2024'
  };

  const journalEntries = [
    {
      account: 'Salary Expense',
      accountCode: '6100',
      debit: 125450.00,
      credit: 0.00,
      description: 'Gross salary expense for May 2024'
    },
    {
      account: 'OT Expense',
      accountCode: '6110',
      debit: 0.00,
      credit: 0.00,
      description: 'Overtime expense (included in gross)'
    },
    {
      account: 'CPF Employer Expense',
      accountCode: '6200',
      debit: 21326.50,
      credit: 0.00,
      description: 'CPF employer contribution (17%)'
    },
    {
      account: 'SDL Expense',
      accountCode: '6210',
      debit: 376.35,
      credit: 0.00,
      description: 'Skills Development Levy (0.25%)'
    },
    {
      account: 'Payroll Payable',
      accountCode: '2100',
      debit: 0.00,
      credit: 97129.50,
      description: 'Net salary payable to employees'
    },
    {
      account: 'CPF Payable',
      accountCode: '2110',
      debit: 0.00,
      credit: 46416.50,
      description: 'CPF payable (Employee + Employer)'
    },
    {
      account: 'SDL Payable',
      accountCode: '2120',
      debit: 0.00,
      credit: 376.35,
      description: 'SDL payable to IRAS'
    },
    {
      account: 'Other Deductions Payable',
      accountCode: '2130',
      debit: 0.00,
      credit: 2230.50,
      description: 'Loan recovery, advance adjustments, etc.'
    }
  ];

  const totalDebit = journalEntries.reduce((sum, entry) => sum + entry.debit, 0);
  const totalCredit = journalEntries.reduce((sum, entry) => sum + entry.credit, 0);
  const isBalanced = Math.abs(totalDebit - totalCredit) < 0.01;

  const handlePostToAccounts = () => {
    if (!postingDate) {
      showToast('Please select posting date', 'error');
      return;
    }

    if (!isBalanced) {
      showToast('Journal entries are not balanced. Cannot post to accounts.', 'error');
      return;
    }

    setAlert({
      show: true,
      type: 'confirm',
      title: 'Confirm Accounts Posting',
      message: `Are you sure you want to post this payroll to accounts?\n\nTotal Debit: $${totalDebit.toFixed(2)}\nTotal Credit: $${totalCredit.toFixed(2)}\n\nThis action will create journal entries in the accounting system.`,
      variant: 'warning',
      onConfirm: () => {
        setAlert({ ...alert, show: false });
        proceedWithPosting();
      },
      onCancel: () => setAlert({ ...alert, show: false })
    });
  };

  const proceedWithPosting = () => {
    showToast('Posting to accounts...', 'info');
    
    setTimeout(() => {
      const journalVoucherNo = 'JV-2024-' + Math.floor(Math.random() * 10000);
      showToast(`Posted successfully! Journal Voucher: ${journalVoucherNo}`, 'success');
      setTimeout(() => {
        if (onComplete) onComplete();
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
          <i className="fas fa-file-invoice"></i>
          <div>
            <h1>Accounts Posting</h1>
            <div className="detail-subtitle">
              <span>Payroll Run: {payrollSummary.payrollRunId}</span>
              <span className="status-badge-detail" style={{ 
                background: isBalanced ? '#10b981' : '#dc2626',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: '600',
                marginLeft: '10px'
              }}>
                {isBalanced ? 'BALANCED' : 'NOT BALANCED'}
              </span>
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
          <button className="btn-toolbar-primary" onClick={handlePostToAccounts} disabled={!isBalanced || !postingDate}>
            <i className="fas fa-check-circle"></i>
            Post to Accounts
          </button>
        )}
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print Journal
        </button>
      </div>

      <div className="detail-content">
        {/* Workflow Diagram */}
        <PayrollWorkflowDiagram currentStage="accounts-posting" compact={true} />

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Payroll Summary</h3>
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
                <label>FINALIZED DATE</label>
                <div className="field-value">{payrollSummary.finalizedDate}</div>
              </div>
              <div className="detail-field">
                <label>PAYMENT DATE</label>
                <div className="field-value">{payrollSummary.paymentDate}</div>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Posting Details</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>POSTING DATE <span className="required">*</span></label>
                <input
                  type="date"
                  value={postingDate}
                  onChange={(e) => setPostingDate(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label>POSTING REMARKS</label>
                <textarea
                  value={postingRemarks}
                  onChange={(e) => setPostingRemarks(e.target.value)}
                  className="form-control"
                  rows="2"
                  placeholder="Enter posting remarks..."
                  style={{ resize: 'vertical' }}
                />
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Financial Details</h3>
          </div>
          <div className="section-body">
            <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'summary' ? 'active' : ''}`}
              onClick={() => setActiveTab('summary')}
            >
              Financial Summary
            </button>
            <button 
              className={`tab-btn ${activeTab === 'journal' ? 'active' : ''}`}
              onClick={() => setActiveTab('journal')}
            >
              Journal Entries
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'summary' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>TOTAL GROSS SALARY</label>
                    <div className="field-value" style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#10b981' }}>
                      ${payrollSummary.totalGrossSalary.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </div>
                  </div>
                  <div className="detail-field">
                    <label>TOTAL CPF EMPLOYER</label>
                    <div className="field-value" style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#4a5568' }}>
                      ${payrollSummary.totalCPFEmployer.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </div>
                  </div>
                  <div className="detail-field">
                    <label>TOTAL SDL</label>
                    <div className="field-value" style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#4a5568' }}>
                      ${payrollSummary.totalSDL.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </div>
                  </div>
                  <div className="detail-field">
                    <label>TOTAL EXPENSE</label>
                    <div className="field-value" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#dc2626' }}>
                      ${(payrollSummary.totalGrossSalary + payrollSummary.totalCPFEmployer + payrollSummary.totalSDL).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '2rem', padding: '1rem', background: '#f8f9fa', borderRadius: '4px' }}>
                  <h4 style={{ marginBottom: '1rem', fontSize: '0.95rem', color: '#4a5568' }}>Liabilities Breakdown</h4>
                  <div className="detail-grid">
                    <div className="detail-field">
                      <label>NET SALARY PAYABLE</label>
                      <div className="field-value" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                        ${payrollSummary.totalNetPayable.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                    <div className="detail-field">
                      <label>CPF PAYABLE (EMPLOYEE + EMPLOYER)</label>
                      <div className="field-value" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                        ${(payrollSummary.totalCPFEmployee + payrollSummary.totalCPFEmployer).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                    <div className="detail-field">
                      <label>SDL PAYABLE</label>
                      <div className="field-value" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                        ${payrollSummary.totalSDL.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                    <div className="detail-field">
                      <label>OTHER DEDUCTIONS PAYABLE</label>
                      <div className="field-value" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                        ${(payrollSummary.totalDeductions - payrollSummary.totalCPFEmployee - payrollSummary.totalSDL).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'journal' && (
              <div className="items-table-wrapper">
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>ACCOUNT CODE</th>
                      <th>ACCOUNT NAME</th>
                      <th>DESCRIPTION</th>
                      <th style={{ textAlign: 'right' }}>DEBIT</th>
                      <th style={{ textAlign: 'right' }}>CREDIT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {journalEntries.map((entry, idx) => (
                      <tr key={idx}>
                        <td>{entry.accountCode}</td>
                        <td style={{ fontWeight: 600 }}>{entry.account}</td>
                        <td>{entry.description}</td>
                        <td style={{ textAlign: 'right', color: entry.debit > 0 ? '#10b981' : '#999', fontWeight: entry.debit > 0 ? 'bold' : 'normal' }}>
                          {entry.debit > 0 ? `$${entry.debit.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '-'}
                        </td>
                        <td style={{ textAlign: 'right', color: entry.credit > 0 ? '#dc2626' : '#999', fontWeight: entry.credit > 0 ? 'bold' : 'normal' }}>
                          {entry.credit > 0 ? `$${entry.credit.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '-'}
                        </td>
                      </tr>
                    ))}
                    <tr style={{ borderTop: '2px solid #4a5568', fontWeight: 'bold', background: '#f8f9fa' }}>
                      <td colSpan="3" style={{ textAlign: 'right', paddingRight: '1rem' }}>TOTAL</td>
                      <td style={{ textAlign: 'right', color: '#10b981', fontSize: '1.1rem' }}>
                        ${totalDebit.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </td>
                      <td style={{ textAlign: 'right', color: '#dc2626', fontSize: '1.1rem' }}>
                        ${totalCredit.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </td>
                    </tr>
                    <tr style={{ fontWeight: 'bold', background: isBalanced ? '#d1fae5' : '#fee2e2' }}>
                      <td colSpan="3" style={{ textAlign: 'right', paddingRight: '1rem' }}>
                        {isBalanced ? 'BALANCED ✓' : 'DIFFERENCE'}
                      </td>
                      <td colSpan="2" style={{ textAlign: 'right', color: isBalanced ? '#10b981' : '#dc2626', fontSize: '1.1rem' }}>
                        ${Math.abs(totalDebit - totalCredit).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Accounts Posting Information</h3>
          </div>
          <div className="section-body">
            <div style={{ padding: '1.25rem', background: '#f0f9ff', border: '1px solid #bfdbfe', borderRadius: '6px' }}>
              <ul style={{ margin: 0, paddingLeft: '1.75rem', color: '#1e40af', fontSize: '13px', lineHeight: '1.8' }}>
                <li><strong>Salary Expense:</strong> Total gross salary paid to employees</li>
                <li><strong>CPF Employer Expense:</strong> Employer's CPF contribution (17% of OW)</li>
                <li><strong>SDL Expense:</strong> Skills Development Levy (0.25% of gross wages)</li>
                <li><strong>Payroll Payable:</strong> Net salary to be paid to employees</li>
                <li><strong>CPF Payable:</strong> Total CPF (Employee 20% + Employer 17%) to be paid to CPF Board</li>
                <li><strong>SDL Payable:</strong> SDL to be paid to IRAS</li>
                <li>Journal entries follow Singapore accounting standards</li>
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

export default PayrollAccountsPosting;
