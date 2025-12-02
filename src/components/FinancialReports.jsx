import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const FinancialReports = ({ onIncomeStatementClick, onBalanceSheetClick, onCashFlowStatementClick, onGeneralLedgerClick, onTrialBalanceClick, onTransactionDetailClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const reportCategories = [
    {
      title: 'Core Financial Statements',
      reports: [
        {
          id: 'income-statement',
          title: 'Income Statement',
          description: 'View revenue, expenses, and net income for a specific period',
          icon: 'fas fa-chart-line'
        },
        {
          id: 'balance-sheet',
          title: 'Balance Sheet',
          description: 'Assets, liabilities, and equity at a point in time',
          icon: 'fas fa-balance-scale'
        },
        {
          id: 'cash-flow-statement',
          title: 'Cash Flow Statement',
          description: 'Cash inflows and outflows from operations, investing, and financing',
          icon: 'fas fa-money-bill-wave'
        }
      ]
    },
    {
      title: 'General Ledger & Transactions',
      reports: [
        {
          id: 'general-ledger',
          title: 'General Ledger',
          description: 'Complete record of all financial transactions',
          icon: 'fas fa-book'
        },
        {
          id: 'trial-balance',
          title: 'Trial Balance',
          description: 'List of all accounts with their debit and credit balances',
          icon: 'fas fa-list-alt'
        },
        {
          id: 'transaction-detail',
          title: 'Transaction Detail',
          description: 'Detailed view of individual transactions',
          icon: 'fas fa-receipt'
        }
      ]
    },
    {
      title: 'Exchange Rate & Currency',
      reports: [
        {
          id: 'realized-exchange-gains-losses',
          title: 'Realized Exchange Rate Gains and Losses',
          description: 'Track realized foreign exchange gains and losses',
          icon: 'fas fa-exchange-alt'
        },
        {
          id: 'unrealized-exchange-gains-losses',
          title: 'Unrealized Exchange Rate Gains and Losses',
          description: 'Track unrealized foreign exchange gains and losses',
          icon: 'fas fa-globe-americas'
        },
        {
          id: 'cta-balance-audit',
          title: 'CTA Balance Audit',
          description: 'Cumulative Translation Adjustment balance audit report',
          icon: 'fas fa-search-dollar'
        }
      ]
    },
    {
      title: 'Payroll & Journals',
      reports: [
        {
          id: 'pay-batch-posting-journals',
          title: 'Pay-batch Posting Journals',
          description: 'Journal entries from payroll batch processing',
          icon: 'fas fa-file-invoice-dollar'
        }
      ]
    }
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleReportClick = (report) => {
    if (report.id === 'income-statement' && onIncomeStatementClick) {
      onIncomeStatementClick();
    } else if (report.id === 'balance-sheet' && onBalanceSheetClick) {
      onBalanceSheetClick();
    } else if (report.id === 'cash-flow-statement' && onCashFlowStatementClick) {
      onCashFlowStatementClick();
    } else if (report.id === 'general-ledger' && onGeneralLedgerClick) {
      onGeneralLedgerClick();
    } else if (report.id === 'trial-balance' && onTrialBalanceClick) {
      onTrialBalanceClick();
    } else if (report.id === 'transaction-detail' && onTransactionDetailClick) {
      onTransactionDetailClick();
    } else {
      showToast(`${report.title} report will be available soon`, 'info');
    }
  };

  // Reports are already grouped in categories

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-chart-bar"></i>
          <h1>Financial Reports</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">Export All</button>
          <button className="btn-view-option">Schedule</button>
          <button className="btn-view-option">Settings</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>PERIOD</label>
          <select className="form-control" style={{ width: '200px' }}>
            <option value="current-month">Current Month</option>
            <option value="current-quarter">Current Quarter</option>
            <option value="current-year">Current Year</option>
            <option value="last-month">Last Month</option>
            <option value="last-quarter">Last Quarter</option>
            <option value="last-year">Last Year</option>
            <option value="custom">Custom Range</option>
          </select>
        </div>
        <div className="view-filter">
          <label>SUBSIDIARY</label>
          <select className="form-control" style={{ width: '300px' }}>
            <option value="all">All Subsidiaries</option>
            <option value="tech-onshore">Tech Onshore MEP Prefabricators Pte Ltd</option>
            <option value="tech-marine">Tech Marine Offshore (S) Pte Ltd</option>
            <option value="tom-offshore">TOM Offshore Marine Engineering Pte Ltd</option>
            <option value="tom-shipyard">TOM Shipyard Pte Ltd</option>
          </select>
        </div>
      </div>

      <div className="reports-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '1.5rem', 
        padding: '1.5rem 0' 
      }}>
        {reportCategories.map((category) => (
          <div key={category.title} className="report-category" style={{
            background: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '1.5rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#333',
              marginBottom: '1rem',
              borderBottom: '2px solid #4a90e2',
              paddingBottom: '0.5rem'
            }}>
              {category.title}
            </h3>
            <div className="report-items">
              {category.reports.map((report) => (
                <div 
                  key={report.id} 
                  className="report-item"
                  onClick={() => handleReportClick(report)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1rem',
                    marginBottom: '0.75rem',
                    border: '1px solid #f0f0f0',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    backgroundColor: '#fafafa'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f0f8ff';
                    e.target.style.borderColor = '#4a90e2';
                    e.target.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#fafafa';
                    e.target.style.borderColor = '#f0f0f0';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <div className="report-icon" style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#4a90e2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    flexShrink: 0
                  }}>
                    <i className={report.icon} style={{ color: '#fff', fontSize: '1.2rem' }}></i>
                  </div>
                  <div className="report-content" style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '0.25rem'
                    }}>
                      {report.title}
                    </h4>
                    <p style={{
                      fontSize: '0.85rem',
                      color: '#666',
                      margin: 0,
                      lineHeight: '1.4'
                    }}>
                      {report.description}
                    </p>
                  </div>
                  <div className="report-arrow" style={{
                    marginLeft: '1rem',
                    color: '#4a90e2'
                  }}>
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="reports-footer" style={{
        marginTop: '2rem',
        padding: '1.5rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e0e0e0'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h4 style={{ margin: 0, color: '#333', fontSize: '1rem' }}>Need Help?</h4>
            <p style={{ margin: '0.25rem 0 0 0', color: '#666', fontSize: '0.9rem' }}>
              Contact support for assistance with financial reports or custom report creation.
            </p>
          </div>
          <div>
            <button className="btn btn-secondary" style={{ marginRight: '0.5rem' }}>
              <i className="fas fa-question-circle"></i>
              Help Center
            </button>
            <button className="btn btn-primary">
              <i className="fas fa-plus"></i>
              Custom Report
            </button>
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

export default FinancialReports;
