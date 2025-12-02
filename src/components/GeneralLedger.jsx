import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const GeneralLedger = ({ onViewDetailClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [fromDate, setFromDate] = useState('Dec 2025');
  const [toDate, setToDate] = useState('Dec 2025');
  const [subsidiary, setSubsidiary] = useState('Tech Onshore MEP P...td. (Consolidated)');
  const [column, setColumn] = useState('Total');
  const [showDetail, setShowDetail] = useState(false);

  // Sample General Ledger Data
  const generalLedgerData = {
    accounts: [
      {
        accountNumber: '11000',
        accountName: 'ALL Bank Accounts',
        subAccounts: [
          {
            accountNumber: '11110',
            accountName: 'TSV DBS SGD 072-004442-8',
            debit: 0.00,
            credit: 0.00,
            balance: 5015800.13
          },
          {
            accountNumber: '11120',
            accountName: 'TEA DBS SGD 072-004465-7',
            debit: 0.00,
            credit: 0.00,
            balance: 5846379.50
          },
          {
            accountNumber: '11130',
            accountName: 'TMO DBS SGD 072-027380-0',
            debit: 0.00,
            credit: 0.00,
            balance: 5829233.52
          },
          {
            accountNumber: '11140',
            accountName: 'MEP DBS SGD 003-006132-3',
            debit: 0.00,
            credit: 0.00,
            balance: 5823084.68
          },
          {
            accountNumber: '11150',
            accountName: 'TDQ DBS SGD 072-004177-1',
            debit: 0.00,
            credit: 0.00,
            balance: 5637111.63
          },
          {
            accountNumber: '11190',
            accountName: 'MEP MAYBANK SGD 0421021473',
            debit: 0.00,
            credit: 0.00,
            balance: 5674562.11
          },
          {
            accountNumber: '11200',
            accountName: 'TDQ OCBC 713-032084-001',
            debit: 0.00,
            credit: 0.00,
            balance: 5245985.25
          },
          {
            accountNumber: '11210',
            accountName: 'MEP OCBC 536-82592-001',
            debit: 0.00,
            credit: 0.00,
            balance: 5620631.44
          },
          {
            accountNumber: '11220',
            accountName: 'MEP RHB SGD 1-80-101516-03',
            debit: 0.00,
            credit: 0.00,
            balance: 5311895.18
          },
          {
            accountNumber: '11230',
            accountName: 'MEP UOB 9314-301-906-1',
            debit: 0.00,
            credit: 0.00,
            balance: 5812752.19
          },
          {
            accountNumber: '11250',
            accountName: 'TOM(S) DBS SGD 072-013944-5',
            debit: 0.00,
            credit: 0.00,
            balance: 5593.37
          },
          {
            accountNumber: '11260',
            accountName: 'TOM(S) DBS USD 072-013944-5',
            debit: 0.00,
            credit: 0.00,
            balance: 55500.67
          },
          {
            accountNumber: '11270',
            accountName: 'TSV DBS USD 072-004442-8',
            debit: 0.00,
            credit: 0.00,
            balance: 551182.58
          },
          {
            accountNumber: '11280',
            accountName: 'TEA DBS USD 072-004465-7',
            debit: 0.00,
            credit: 0.00,
            balance: 531365.91
          },
          {
            accountNumber: '11290',
            accountName: 'TMO DBS USD 072-027380-0',
            debit: 0.00,
            credit: 0.00,
            balance: 571365.91
          }
        ],
        totalDebit: 0.00,
        totalCredit: 0.00,
        totalBalance: 541383701.55
      }
    ]
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleRefresh = () => {
    showToast('General Ledger refreshed successfully', 'success');
  };

  const handleCustomize = () => {
    showToast('Customization options will be available soon', 'info');
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(Math.abs(amount));
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-book" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>General Ledger</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={onViewDetailClick}>
            <i className="fas fa-list-ul"></i>
            View Detail
          </button>
          <button className="btn btn-secondary" onClick={handleRefresh}>
            <i className="fas fa-sync"></i>
            Refresh
          </button>
          <button className="btn btn-secondary" onClick={handleCustomize}>
            <i className="fas fa-cog"></i>
            Customize
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Report Controls */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-filter"></i>
            Report Parameters
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <div className="form-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className="form-group">
              <label className="form-label">FROM</label>
              <select 
                className="form-control"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              >
                <option value="Dec 2025">Dec 2025</option>
                <option value="Nov 2025">Nov 2025</option>
                <option value="Oct 2025">Oct 2025</option>
                <option value="Sep 2025">Sep 2025</option>
                <option value="Aug 2025">Aug 2025</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">TO</label>
              <select 
                className="form-control"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              >
                <option value="Dec 2025">Dec 2025</option>
                <option value="Nov 2025">Nov 2025</option>
                <option value="Oct 2025">Oct 2025</option>
                <option value="Sep 2025">Sep 2025</option>
                <option value="Aug 2025">Aug 2025</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">SUBSIDIARY CONTEXT</label>
              <select 
                className="form-control"
                value={subsidiary}
                onChange={(e) => setSubsidiary(e.target.value)}
              >
                <option value="Tech Onshore MEP P...td. (Consolidated)">Tech Onshore MEP P...td. (Consolidated)</option>
                <option value="Tech Marine Offshore (S) Pte Ltd">Tech Marine Offshore (S) Pte Ltd</option>
                <option value="TOM Offshore Marine Engineering Pte Ltd">TOM Offshore Marine Engineering Pte Ltd</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">COLUMN</label>
              <select 
                className="form-control"
                value={column}
                onChange={(e) => setColumn(e.target.value)}
              >
                <option value="Total">Total</option>
                <option value="Class">Class</option>
                <option value="Class (Hierarchy)">Class (Hierarchy)</option>
                <option value="Department">Department</option>
                <option value="Department (Hierarchy)">Department (Hierarchy)</option>
                <option value="Location">Location</option>
                <option value="Location (Hierarchy)">Location (Hierarchy)</option>
                <option value="Subsidiary">Subsidiary</option>
              </select>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0' }} />

        {/* Export Options */}
        <div className="list-filters" style={{ marginBottom: '1rem' }}>
          <div className="filter-group">
            <button className="btn-icon" title="Export to Excel" onClick={() => showToast('Export to Excel - Coming Soon', 'info')}>
              <i className="fas fa-file-excel" style={{ color: '#1D6F42' }}></i>
              <span>Excel</span>
            </button>
            <button className="btn-icon" title="Export to PDF" onClick={() => showToast('Export to PDF - Coming Soon', 'info')}>
              <i className="fas fa-file-pdf" style={{ color: '#DC3545' }}></i>
              <span>PDF</span>
            </button>
            <button className="btn-icon" title="Export to Word" onClick={() => showToast('Export to Word - Coming Soon', 'info')}>
              <i className="fas fa-file-word" style={{ color: '#2B579A' }}></i>
              <span>Word</span>
            </button>
            <button className="btn-icon" title="Print Report" onClick={() => showToast('Print Report - Coming Soon', 'info')}>
              <i className="fas fa-print" style={{ color: '#6C757D' }}></i>
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* General Ledger Table */}
        <div className="form-section">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '0.5rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <h2 className="section-title" style={{ margin: 0, flex: '1 1 auto', minWidth: '300px' }}>
              <i className="fas fa-table"></i>
              General Ledger - {fromDate} to {toDate}
            </h2>
            <span style={{ 
              fontSize: '0.85rem', 
              color: '#666',
              flex: '0 0 auto',
              whiteSpace: 'nowrap',
              textAlign: 'right'
            }}>
              {subsidiary}
            </span>
          </div>
          
          <div className="items-table-wrapper" style={{ 
            border: '1px solid #ddd', 
            overflow: 'auto', 
            width: '100%', 
            minWidth: '1100px',
            maxWidth: '100vw'
          }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse', 
              fontSize: 'clamp(10px, 1.1vw, 13px)', 
              fontFamily: 'Arial, sans-serif', 
              minWidth: '1100px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#e6e6e6', borderBottom: '1px solid #ccc' }}>
                  <th style={{ 
                    textAlign: 'left', 
                    padding: '8px 12px', 
                    fontWeight: 'bold', 
                    fontSize: '12px',
                    color: '#333',
                    borderRight: '1px solid #ccc'
                  }}>
                    ACCOUNT
                  </th>
                  <th style={{ 
                    textAlign: 'left', 
                    padding: '8px 12px', 
                    fontWeight: 'bold', 
                    fontSize: '12px',
                    color: '#333',
                    borderRight: '1px solid #ccc'
                  }}>
                    TYPE
                  </th>
                  <th style={{ 
                    textAlign: 'left', 
                    padding: '8px 12px', 
                    fontWeight: 'bold', 
                    fontSize: '12px',
                    color: '#333',
                    borderRight: '1px solid #ccc'
                  }}>
                    DATE
                  </th>
                  <th style={{ 
                    textAlign: 'left', 
                    padding: '8px 12px', 
                    fontWeight: 'bold', 
                    fontSize: '12px',
                    color: '#333',
                    borderRight: '1px solid #ccc'
                  }}>
                    DOCUMENT NUMBER
                  </th>
                  <th style={{ 
                    textAlign: 'left', 
                    padding: '8px 12px', 
                    fontWeight: 'bold', 
                    fontSize: '12px',
                    color: '#333',
                    borderRight: '1px solid #ccc'
                  }}>
                    NAME
                  </th>
                  <th style={{ 
                    textAlign: 'right', 
                    padding: '8px 12px', 
                    fontWeight: 'bold', 
                    fontSize: '12px',
                    color: '#333',
                    borderRight: '1px solid #ccc'
                  }}>
                    DEBIT
                  </th>
                  <th style={{ 
                    textAlign: 'right', 
                    padding: '8px 12px', 
                    fontWeight: 'bold', 
                    fontSize: '12px',
                    color: '#333',
                    borderRight: '1px solid #ccc'
                  }}>
                    CREDIT
                  </th>
                  <th style={{ 
                    textAlign: 'right', 
                    padding: '8px 12px', 
                    fontWeight: 'bold', 
                    fontSize: '12px',
                    color: '#333'
                  }}>
                    BALANCE
                  </th>
                </tr>
              </thead>
              <tbody>
                {generalLedgerData.accounts.map((account) => (
                  <React.Fragment key={account.accountNumber}>
                    {/* Main Account Header */}
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ 
                        padding: '4px 8px', 
                        fontWeight: 'bold',
                        borderRight: '1px solid #ddd',
                        borderBottom: '1px solid #ddd'
                      }}>
                        {account.accountNumber} - {account.accountName}
                      </td>
                      <td colSpan="7" style={{ borderBottom: '1px solid #ddd' }}></td>
                    </tr>

                    {/* Sub Accounts */}
                    {account.subAccounts.map((subAccount) => (
                      <React.Fragment key={subAccount.accountNumber}>
                        <tr style={{ backgroundColor: '#fff' }}>
                          <td style={{ 
                            padding: '4px 8px', 
                            paddingLeft: '25px',
                            fontWeight: 'bold',
                            borderRight: '1px solid #ddd',
                            borderBottom: '1px solid #ddd'
                          }}>
                            {subAccount.accountNumber} - {subAccount.accountName}
                          </td>
                          <td colSpan="7" style={{ borderBottom: '1px solid #ddd' }}></td>
                        </tr>
                        
                        <tr style={{ backgroundColor: '#fff' }}>
                          <td style={{ 
                            padding: '4px 8px', 
                            paddingLeft: '40px',
                            fontWeight: 'bold',
                            borderRight: '1px solid #ddd',
                            borderBottom: '1px solid #ddd'
                          }}>
                            Total - {subAccount.accountNumber} - {subAccount.accountName}
                          </td>
                          <td colSpan="4" style={{ borderBottom: '1px solid #ddd' }}></td>
                          <td style={{ 
                            textAlign: 'right', 
                            padding: '4px 8px',
                            fontWeight: 'bold',
                            borderRight: '1px solid #ddd',
                            borderBottom: '1px solid #ddd'
                          }}>
                            ${formatCurrency(subAccount.debit)}
                          </td>
                          <td style={{ 
                            textAlign: 'right', 
                            padding: '4px 8px',
                            fontWeight: 'bold',
                            borderRight: '1px solid #ddd',
                            borderBottom: '1px solid #ddd'
                          }}>
                            ${formatCurrency(subAccount.credit)}
                          </td>
                          <td style={{ 
                            textAlign: 'right', 
                            padding: '4px 8px',
                            fontWeight: 'bold',
                            borderBottom: '1px solid #ddd'
                          }}>
                            ${formatCurrency(subAccount.balance)}
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}

                    {/* Account Total */}
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ 
                        padding: '4px 8px', 
                        paddingLeft: '20px',
                        fontWeight: 'bold',
                        borderRight: '1px solid #ddd',
                        borderBottom: '1px dotted #ccc'
                      }}>
                        Total - {account.accountNumber} - {account.accountName}
                      </td>
                      <td colSpan="4" style={{ borderBottom: '1px dotted #ccc' }}></td>
                      <td style={{ 
                        textAlign: 'right', 
                        padding: '4px 8px',
                        fontWeight: 'bold',
                        borderRight: '1px solid #ddd',
                        borderBottom: '1px dotted #ccc'
                      }}>
                        ${formatCurrency(account.totalDebit)}
                      </td>
                      <td style={{ 
                        textAlign: 'right', 
                        padding: '4px 8px',
                        fontWeight: 'bold',
                        borderRight: '1px solid #ddd',
                        borderBottom: '1px dotted #ccc'
                      }}>
                        ${formatCurrency(account.totalCredit)}
                      </td>
                      <td style={{ 
                        textAlign: 'right', 
                        padding: '4px 8px',
                        fontWeight: 'bold',
                        borderBottom: '1px dotted #ccc'
                      }}>
                        ${formatCurrency(account.totalBalance)}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}

                {/* Grand Total */}
                <tr style={{ 
                  backgroundColor: '#e8e8e8', 
                  borderTop: '2px solid #333',
                  borderBottom: '2px solid #333'
                }}>
                  <td style={{ 
                    padding: '12px 8px', 
                    fontWeight: 'bold',
                    fontSize: '15px',
                    borderRight: '1px solid #ccc',
                    color: '#333'
                  }}>
                    Grand Total
                  </td>
                  <td colSpan="4" style={{ borderBottom: '2px solid #333' }}></td>
                  <td style={{ 
                    textAlign: 'right', 
                    padding: '12px 8px',
                    fontWeight: 'bold',
                    fontSize: '15px',
                    borderRight: '1px solid #ccc',
                    color: '#333'
                  }}>
                    $0.00
                  </td>
                  <td style={{ 
                    textAlign: 'right', 
                    padding: '12px 8px',
                    fontWeight: 'bold',
                    fontSize: '15px',
                    borderRight: '1px solid #ccc',
                    color: '#333'
                  }}>
                    $0.00
                  </td>
                  <td style={{ 
                    textAlign: 'right', 
                    padding: '12px 8px',
                    fontWeight: 'bold',
                    fontSize: '15px',
                    color: '#333'
                  }}>
                    $541,383,701.55
                  </td>
                </tr>
              </tbody>
            </table>
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

export default GeneralLedger;
