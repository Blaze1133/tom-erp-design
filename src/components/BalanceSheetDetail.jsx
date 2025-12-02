import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const BalanceSheetDetail = ({ onBackClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Sample detailed Balance Sheet data matching the images
  const detailedData = {
    currentAssets: {
      bank: {
        '11000 - ALL Bank Accounts': [
          {
            type: 'Check',
            date: '7/1/2025',
            docNumber: '391',
            name: 'TSV SALARY-WAGES',
            amount: -518303.65,
            balance: 563799.47
          },
          {
            type: 'Journal',
            date: '7/1/2025',
            docNumber: '11478',
            name: 'TECH ONSHORE MEP-PREFABRICATORS PTE LTD',
            amount: 5520000.00,
            balance: 5623799.47
          },
          {
            type: 'Bill Payment',
            date: '16/1/2025',
            docNumber: '407',
            name: 'Fullerton Healthcare Group Pte Ltd',
            amount: -5337.14,
            balance: 5272240.33
          },
          {
            type: 'Check',
            date: '17/1/2025',
            docNumber: '401',
            name: 'FOREIGN WORKER LEVY',
            amount: -4630.00,
            balance: 5215890.33
          },
          {
            type: 'Check',
            date: '17/1/2025',
            docNumber: '401',
            name: 'CPF BOARD',
            amount: -1843.00,
            balance: 5164056.33
          },
          {
            type: 'Payment',
            date: '21/1/2025',
            docNumber: 'PYTO0SY0001-4',
            name: 'One Synergy Automation Engineering (S) Pte Ltd - 999-0001 Supply of Electrical Technician- Vessel MV Pioneer (Loc:',
            amount: 5815400.19,
            balance: 5257456.52
          }
        ]
      },
      accountsReceivable: {
        '10000 - Accounts Receivable': [
          {
            type: 'Check',
            date: '27/1/2025',
            docNumber: '392',
            name: 'TSV SALARY-WAGES',
            amount: -4214.00,
            balance: 5623242.52
          },
          {
            type: 'Check',
            date: '27/1/2025',
            docNumber: '393',
            name: 'TSV SALARY-WAGES',
            amount: -4700.00,
            balance: 5618542.52
          },
          {
            type: 'Check',
            date: '27/1/2025',
            docNumber: '394',
            name: 'TSV SALARY-WAGES',
            amount: -3700.00,
            balance: 5614842.52
          }
        ]
      },
      otherCurrentAssets: {
        '11530 - Banker Guarantee/Bond': [
          {
            type: 'Bill Payment',
            date: '4/2/2025',
            docNumber: '387',
            name: 'OS TAX ADVISORY PTE LTD',
            amount: 5345.00,
            balance: 5311890.52
          },
          {
            type: 'Check',
            date: '4/2/2025',
            docNumber: '406',
            name: 'DBS BANK',
            amount: -14.35,
            balance: 5311890.52
          }
        ],
        '12000 - Deposits Paid / Prepayments': [
          {
            type: 'Journal',
            date: '7/2/2025',
            docNumber: '11479',
            name: 'TECH ONSHORE MEP-PREFABRICATORS PTE LTD',
            amount: -5000.00,
            balance: 5313249.75
          },
          {
            type: 'Bill Payment',
            date: '31/2/2025',
            docNumber: '408',
            name: 'ACUMED MEDICAL PTE LTD',
            amount: 50490.47,
            balance: 5413668.28
          }
        ]
      }
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleRefresh = () => {
    showToast('Balance Sheet Detail refreshed successfully', 'success');
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

  const formatAmount = (amount) => {
    const sign = amount >= 0 ? '' : '-';
    return `${sign}$${formatCurrency(amount)}`;
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-list-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Balance Sheet Detail</h1>
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
              Balance Sheet Detail - Dec 2025 to Sep 2025
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
            minWidth: '1000px',
            maxWidth: '100vw'
          }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse', 
              fontSize: 'clamp(10px, 1.1vw, 12px)', 
              fontFamily: 'Arial, sans-serif',
              minWidth: '1000px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#e6e6e6', borderBottom: '1px solid #ccc' }}>
                  <th style={{ textAlign: 'left', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333', borderRight: '1px solid #ccc' }}>FINANCIAL ROW</th>
                  <th style={{ textAlign: 'left', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333', borderRight: '1px solid #ccc' }}>TYPE</th>
                  <th style={{ textAlign: 'left', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333', borderRight: '1px solid #ccc' }}>DATE</th>
                  <th style={{ textAlign: 'left', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333', borderRight: '1px solid #ccc' }}>DOCUMENT NUMBER</th>
                  <th style={{ textAlign: 'left', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333', borderRight: '1px solid #ccc' }}>NAME</th>
                  <th style={{ textAlign: 'right', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333', borderRight: '1px solid #ccc' }}>AMOUNT</th>
                  <th style={{ textAlign: 'right', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333' }}>BALANCE</th>
                </tr>
              </thead>
              <tbody>
                {/* Current Assets Section */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td colSpan="7" style={{ padding: '4px 8px', fontWeight: 'bold', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa' }}>
                    Current Assets
                  </td>
                </tr>
                
                {/* Bank Section */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '3px 8px', paddingLeft: '20px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
                    Bank
                  </td>
                  <td colSpan="6" style={{ borderBottom: '1px solid #eee' }}></td>
                </tr>
                
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '3px 8px', paddingLeft: '40px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
                    11000 - ALL Bank Accounts
                  </td>
                  <td colSpan="6" style={{ borderBottom: '1px solid #eee' }}></td>
                </tr>
                
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '3px 8px', paddingLeft: '60px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
                    11010 - TSV DBS SGD 072-904445-0
                  </td>
                  <td colSpan="6" style={{ borderBottom: '1px solid #eee' }}></td>
                </tr>
                
                {detailedData.currentAssets.bank['11000 - ALL Bank Accounts'].map((transaction, index) => (
                  <tr key={index} style={{ backgroundColor: '#fff' }}>
                    <td style={{ padding: '2px 8px', paddingLeft: '80px', borderBottom: '1px dotted #ddd' }}></td>
                    <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.type}</td>
                    <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.date}</td>
                    <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.docNumber}</td>
                    <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.name}</td>
                    <td style={{ padding: '2px 8px', textAlign: 'right', borderBottom: '1px dotted #ddd' }}>{formatAmount(transaction.amount)}</td>
                    <td style={{ padding: '2px 8px', textAlign: 'right', borderBottom: '1px dotted #ddd' }}>${formatCurrency(transaction.balance)}</td>
                  </tr>
                ))}
                
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '4px 8px', paddingLeft: '50px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    Total - 11010 - TSV DBS SGD 072-904445-0
                  </td>
                  <td colSpan="5" style={{ borderBottom: '1px solid #ddd' }}></td>
                  <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    $541,383,701.55
                  </td>
                </tr>
                
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '4px 8px', paddingLeft: '30px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    Total - 11000 - ALL Bank Accounts
                  </td>
                  <td colSpan="5" style={{ borderBottom: '1px solid #ddd' }}></td>
                  <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    $541,383,701.55
                  </td>
                </tr>

                {/* Accounts Receivable Section */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '3px 8px', paddingLeft: '20px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
                    Accounts Receivable
                  </td>
                  <td colSpan="6" style={{ borderBottom: '1px solid #eee' }}></td>
                </tr>
                
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '3px 8px', paddingLeft: '40px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
                    10000 - Accounts Receivable
                  </td>
                  <td colSpan="6" style={{ borderBottom: '1px solid #eee' }}></td>
                </tr>
                
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '3px 8px', paddingLeft: '60px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
                    10100 - Trade Debtors
                  </td>
                  <td colSpan="6" style={{ borderBottom: '1px solid #eee' }}></td>
                </tr>
                
                {detailedData.currentAssets.accountsReceivable['10000 - Accounts Receivable'].map((transaction, index) => (
                  <tr key={index} style={{ backgroundColor: '#fff' }}>
                    <td style={{ padding: '2px 8px', paddingLeft: '80px', borderBottom: '1px dotted #ddd' }}></td>
                    <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.type}</td>
                    <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.date}</td>
                    <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.docNumber}</td>
                    <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.name}</td>
                    <td style={{ padding: '2px 8px', textAlign: 'right', borderBottom: '1px dotted #ddd' }}>{formatAmount(transaction.amount)}</td>
                    <td style={{ padding: '2px 8px', textAlign: 'right', borderBottom: '1px dotted #ddd' }}>${formatCurrency(transaction.balance)}</td>
                  </tr>
                ))}
                
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '4px 8px', paddingLeft: '50px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    Total - 10100 - Trade Debtors
                  </td>
                  <td colSpan="5" style={{ borderBottom: '1px solid #ddd' }}></td>
                  <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    $45,245,956.55
                  </td>
                </tr>
                
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '4px 8px', paddingLeft: '30px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    Total - 10000 - Accounts Receivable
                  </td>
                  <td colSpan="5" style={{ borderBottom: '1px solid #ddd' }}></td>
                  <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    $59,914,040.98
                  </td>
                </tr>

                {/* Other Current Asset Section */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '3px 8px', paddingLeft: '20px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
                    Other Current Asset
                  </td>
                  <td colSpan="6" style={{ borderBottom: '1px solid #eee' }}></td>
                </tr>
                
                {Object.entries(detailedData.currentAssets.otherCurrentAssets).map(([accountKey, transactions]) => (
                  <React.Fragment key={accountKey}>
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ padding: '3px 8px', paddingLeft: '40px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
                        {accountKey}
                      </td>
                      <td colSpan="6" style={{ borderBottom: '1px solid #eee' }}></td>
                    </tr>
                    
                    {transactions.map((transaction, index) => (
                      <tr key={index} style={{ backgroundColor: '#fff' }}>
                        <td style={{ padding: '2px 8px', paddingLeft: '60px', borderBottom: '1px dotted #ddd' }}></td>
                        <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.type}</td>
                        <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.date}</td>
                        <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.docNumber}</td>
                        <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.name}</td>
                        <td style={{ padding: '2px 8px', textAlign: 'right', borderBottom: '1px dotted #ddd' }}>{formatAmount(transaction.amount)}</td>
                        <td style={{ padding: '2px 8px', textAlign: 'right', borderBottom: '1px dotted #ddd' }}>${formatCurrency(transaction.balance)}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}

                {/* Total Current Assets */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '4px 8px', paddingLeft: '15px', fontWeight: 'bold', borderBottom: '1px dotted #ccc' }}>
                    Total Current Assets
                  </td>
                  <td colSpan="5" style={{ borderBottom: '1px dotted #ccc' }}></td>
                  <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px dotted #ccc' }}>
                    $811,581,283.54
                  </td>
                </tr>

                {/* Total Long Term Liabilities */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '4px 8px', paddingLeft: '15px', fontWeight: 'bold', borderBottom: '1px dotted #ccc' }}>
                    Total Long Term Liabilities
                  </td>
                  <td colSpan="5" style={{ borderBottom: '1px dotted #ccc' }}></td>
                  <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px dotted #ccc' }}>
                    $89,308,063.65
                  </td>
                </tr>

                {/* Total Assets Less Total Liabilities */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '4px 8px', paddingLeft: '15px', fontWeight: 'bold', borderBottom: '1px dotted #ccc' }}>
                    Total Assets Less Total Liabilities
                  </td>
                  <td colSpan="5" style={{ borderBottom: '1px dotted #ccc' }}></td>
                  <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px dotted #ccc' }}>
                    $511,630,720.34
                  </td>
                </tr>

                {/* Capital and Reserves */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td colSpan="7" style={{ padding: '4px 8px', fontWeight: 'bold', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa' }}>
                    Capital and Reserves
                  </td>
                </tr>

                {/* Total Capital and Reserves */}
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
                    Total Capital and Reserves
                  </td>
                  <td colSpan="5" style={{ borderBottom: '2px solid #333' }}></td>
                  <td style={{ 
                    padding: '12px 8px', 
                    textAlign: 'right', 
                    fontWeight: 'bold',
                    fontSize: '15px',
                    color: '#333'
                  }}>
                    $511,630,720.34
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

export default BalanceSheetDetail;
