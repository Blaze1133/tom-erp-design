import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const GeneralLedgerDetail = ({ onBackClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Sample detailed General Ledger data with transactions
  const detailedData = {
    accounts: [
      {
        accountNumber: '11000',
        accountName: 'ALL Bank Accounts',
        subAccounts: [
          {
            accountNumber: '11110',
            accountName: 'TSV DBS SGD 072-004442-8',
            transactions: [
              {
                type: 'Check',
                date: '1/12/2025',
                docNumber: '391',
                name: 'TSV SALARY-WAGES',
                debit: 0.00,
                credit: 518303.65,
                balance: 563799.47
              },
              {
                type: 'Journal',
                date: '1/12/2025',
                docNumber: '11478',
                name: 'TECH ONSHORE MEP-PREFABRICATORS PTE LTD',
                debit: 5520000.00,
                credit: 0.00,
                balance: 5623799.47
              },
              {
                type: 'Bill Payment',
                date: '16/12/2025',
                docNumber: '407',
                name: 'Fullerton Healthcare Group Pte Ltd',
                debit: 0.00,
                credit: 5337.14,
                balance: 5272240.33
              }
            ],
            totalDebit: 5520000.00,
            totalCredit: 523640.79,
            balance: 5015800.13
          },
          {
            accountNumber: '11120',
            accountName: 'TEA DBS SGD 072-004465-7',
            transactions: [
              {
                type: 'Check',
                date: '2/12/2025',
                docNumber: '392',
                name: 'TEA SALARY-WAGES',
                debit: 0.00,
                credit: 4214.00,
                balance: 5623242.52
              },
              {
                type: 'Journal',
                date: '5/12/2025',
                docNumber: '11480',
                name: 'TECH ONSHORE MEP-PREFABRICATORS PTE LTD',
                debit: 5850000.00,
                credit: 0.00,
                balance: 5846379.50
              }
            ],
            totalDebit: 5850000.00,
            totalCredit: 4214.00,
            balance: 5846379.50
          }
        ]
      }
    ]
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleRefresh = () => {
    showToast('General Ledger Detail refreshed successfully', 'success');
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
          <i className="fas fa-list-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>General Ledger Detail</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={onBackClick}>
            <i className="fas fa-arrow-left"></i>
            Back to Summary
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

        {/* Report Info */}
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
              General Ledger Detail - Dec 2025 to Sep 2025
            </h2>
            <span style={{ 
              fontSize: '0.85rem', 
              color: '#666',
              flex: '0 0 auto',
              whiteSpace: 'nowrap',
              textAlign: 'right'
            }}>
              Tech Onshore MEP P...td. (Consolidated)
            </span>
          </div>
          
          <div className="items-table-wrapper" style={{ 
            border: '1px solid #ddd', 
            overflow: 'auto', 
            width: '100%',
            minWidth: '1200px',
            maxWidth: '100vw'
          }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse', 
              fontSize: 'clamp(10px, 1.0vw, 12px)', 
              fontFamily: 'Arial, sans-serif',
              minWidth: '1200px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#e6e6e6', borderBottom: '1px solid #ccc' }}>
                  <th style={{ textAlign: 'left', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333', borderRight: '1px solid #ccc' }}>ACCOUNT</th>
                  <th style={{ textAlign: 'left', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333', borderRight: '1px solid #ccc' }}>TYPE</th>
                  <th style={{ textAlign: 'left', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333', borderRight: '1px solid #ccc' }}>DATE</th>
                  <th style={{ textAlign: 'left', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333', borderRight: '1px solid #ccc' }}>DOCUMENT NUMBER</th>
                  <th style={{ textAlign: 'left', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333', borderRight: '1px solid #ccc' }}>NAME</th>
                  <th style={{ textAlign: 'right', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333', borderRight: '1px solid #ccc' }}>DEBIT</th>
                  <th style={{ textAlign: 'right', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333', borderRight: '1px solid #ccc' }}>CREDIT</th>
                  <th style={{ textAlign: 'right', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333' }}>BALANCE</th>
                </tr>
              </thead>
              <tbody>
                {detailedData.accounts.map((account) => (
                  <React.Fragment key={account.accountNumber}>
                    {/* Main Account Header */}
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td colSpan="8" style={{ padding: '4px 8px', fontWeight: 'bold', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa' }}>
                        {account.accountNumber} - {account.accountName}
                      </td>
                    </tr>

                    {/* Sub Accounts */}
                    {account.subAccounts.map((subAccount) => (
                      <React.Fragment key={subAccount.accountNumber}>
                        <tr style={{ backgroundColor: '#fff' }}>
                          <td style={{ padding: '3px 8px', paddingLeft: '20px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
                            {subAccount.accountNumber} - {subAccount.accountName}
                          </td>
                          <td colSpan="7" style={{ borderBottom: '1px solid #eee' }}></td>
                        </tr>
                        
                        {/* Transactions */}
                        {subAccount.transactions.map((transaction, index) => (
                          <tr key={index} style={{ backgroundColor: '#fff' }}>
                            <td style={{ padding: '2px 8px', paddingLeft: '40px', borderBottom: '1px dotted #ddd' }}></td>
                            <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.type}</td>
                            <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.date}</td>
                            <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.docNumber}</td>
                            <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.name}</td>
                            <td style={{ padding: '2px 8px', textAlign: 'right', borderBottom: '1px dotted #ddd' }}>
                              {transaction.debit > 0 ? `$${formatCurrency(transaction.debit)}` : ''}
                            </td>
                            <td style={{ padding: '2px 8px', textAlign: 'right', borderBottom: '1px dotted #ddd' }}>
                              {transaction.credit > 0 ? `$${formatCurrency(transaction.credit)}` : ''}
                            </td>
                            <td style={{ padding: '2px 8px', textAlign: 'right', borderBottom: '1px dotted #ddd' }}>
                              ${formatCurrency(transaction.balance)}
                            </td>
                          </tr>
                        ))}
                        
                        {/* Sub Account Total */}
                        <tr style={{ backgroundColor: '#fff' }}>
                          <td style={{ padding: '4px 8px', paddingLeft: '30px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                            Total - {subAccount.accountNumber} - {subAccount.accountName}
                          </td>
                          <td colSpan="4" style={{ borderBottom: '1px solid #ddd' }}></td>
                          <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                            ${formatCurrency(subAccount.totalDebit)}
                          </td>
                          <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                            ${formatCurrency(subAccount.totalCredit)}
                          </td>
                          <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                            ${formatCurrency(subAccount.balance)}
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}

                    {/* Account Total */}
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ padding: '4px 8px', paddingLeft: '15px', fontWeight: 'bold', borderBottom: '1px dotted #ccc' }}>
                        Total - {account.accountNumber} - {account.accountName}
                      </td>
                      <td colSpan="4" style={{ borderBottom: '1px dotted #ccc' }}></td>
                      <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px dotted #ccc' }}>
                        $11,370,000.00
                      </td>
                      <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px dotted #ccc' }}>
                        $527,854.79
                      </td>
                      <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px dotted #ccc' }}>
                        $10,862,179.63
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
                    $11,370,000.00
                  </td>
                  <td style={{ 
                    textAlign: 'right', 
                    padding: '12px 8px',
                    fontWeight: 'bold',
                    fontSize: '15px',
                    borderRight: '1px solid #ccc',
                    color: '#333'
                  }}>
                    $527,854.79
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

export default GeneralLedgerDetail;
