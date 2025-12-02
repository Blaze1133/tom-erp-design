import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CashFlowStatementDetail = ({ onBackClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Sample detailed Cash Flow data
  const detailedData = {
    operatingActivities: {
      netIncome: [
        {
          type: 'Journal',
          date: '31/12/2025',
          docNumber: '12001',
          name: 'Year End Closing Entry',
          amount: 5211120.25,
          balance: 5211120.25
        }
      ],
      adjustments: {
        accountsReceivable: [
          {
            type: 'Invoice',
            date: '15/12/2025',
            docNumber: 'INV-2025-001',
            name: 'SHINEVO CORPORATION - Outstanding Invoice',
            amount: -521883.39,
            balance: -521883.39
          }
        ],
        otherCurrentAsset: [
          {
            type: 'Journal',
            date: '20/12/2025',
            docNumber: '11995',
            name: 'Prepaid Expenses Adjustment',
            amount: -10713.83,
            balance: -10713.83
          }
        ],
        accountsPayable: [
          {
            type: 'Bill',
            date: '28/12/2025',
            docNumber: 'BILL-2025-045',
            name: 'KIAN HUAT HARDWARE COMPANY',
            amount: 53341.40,
            balance: 53341.40
          }
        ],
        salesTaxPayable: [
          {
            type: 'Journal',
            date: '31/12/2025',
            docNumber: '12005',
            name: 'GST Adjustment Entry',
            amount: 318.25,
            balance: 318.25
          }
        ]
      }
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleRefresh = () => {
    showToast('Cash Flow Statement Detail refreshed successfully', 'success');
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
          <h1>Cash Flow Statement Detail</h1>
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
              Cash Flow Statement Detail - Dec 2025 to Sep 2025
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
                {/* Operating Activities Section */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td colSpan="7" style={{ padding: '4px 8px', fontWeight: 'bold', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa' }}>
                    Operating Activities
                  </td>
                </tr>
                
                {/* Net Income Section */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '3px 8px', paddingLeft: '20px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
                    Net Income
                  </td>
                  <td colSpan="6" style={{ borderBottom: '1px solid #eee' }}></td>
                </tr>
                
                {detailedData.operatingActivities.netIncome.map((transaction, index) => (
                  <tr key={index} style={{ backgroundColor: '#fff' }}>
                    <td style={{ padding: '2px 8px', paddingLeft: '40px', borderBottom: '1px dotted #ddd' }}></td>
                    <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.type}</td>
                    <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.date}</td>
                    <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.docNumber}</td>
                    <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.name}</td>
                    <td style={{ padding: '2px 8px', textAlign: 'right', borderBottom: '1px dotted #ddd' }}>{formatAmount(transaction.amount)}</td>
                    <td style={{ padding: '2px 8px', textAlign: 'right', borderBottom: '1px dotted #ddd' }}>${formatCurrency(transaction.balance)}</td>
                  </tr>
                ))}
                
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '4px 8px', paddingLeft: '30px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    Total - Net Income
                  </td>
                  <td colSpan="5" style={{ borderBottom: '1px solid #ddd' }}></td>
                  <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    $5,211,120.25
                  </td>
                </tr>

                {/* Adjustments to Profit/(Loss) Section */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '3px 8px', paddingLeft: '20px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
                    Adjustments to Profit/(Loss)
                  </td>
                  <td colSpan="6" style={{ borderBottom: '1px solid #eee' }}></td>
                </tr>
                
                {/* Accounts Receivable */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '3px 8px', paddingLeft: '40px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
                    Accounts Receivable
                  </td>
                  <td colSpan="6" style={{ borderBottom: '1px solid #eee' }}></td>
                </tr>
                
                {detailedData.operatingActivities.adjustments.accountsReceivable.map((transaction, index) => (
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
                
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '4px 8px', paddingLeft: '50px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    Total - Accounts Receivable
                  </td>
                  <td colSpan="5" style={{ borderBottom: '1px solid #ddd' }}></td>
                  <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    -$521,883.39
                  </td>
                </tr>

                {/* Other Current Asset */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '3px 8px', paddingLeft: '40px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
                    Other Current Asset
                  </td>
                  <td colSpan="6" style={{ borderBottom: '1px solid #eee' }}></td>
                </tr>
                
                {detailedData.operatingActivities.adjustments.otherCurrentAsset.map((transaction, index) => (
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
                
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '4px 8px', paddingLeft: '50px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    Total - Other Current Asset
                  </td>
                  <td colSpan="5" style={{ borderBottom: '1px solid #ddd' }}></td>
                  <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    -$10,713.83
                  </td>
                </tr>

                {/* Accounts Payable */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '3px 8px', paddingLeft: '40px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
                    Accounts Payable
                  </td>
                  <td colSpan="6" style={{ borderBottom: '1px solid #eee' }}></td>
                </tr>
                
                {detailedData.operatingActivities.adjustments.accountsPayable.map((transaction, index) => (
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
                
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '4px 8px', paddingLeft: '50px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    Total - Accounts Payable
                  </td>
                  <td colSpan="5" style={{ borderBottom: '1px solid #ddd' }}></td>
                  <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    $53,341.40
                  </td>
                </tr>

                {/* Sales Tax Payable */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '3px 8px', paddingLeft: '40px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
                    Sales Tax Payable
                  </td>
                  <td colSpan="6" style={{ borderBottom: '1px solid #eee' }}></td>
                </tr>
                
                {detailedData.operatingActivities.adjustments.salesTaxPayable.map((transaction, index) => (
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
                
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '4px 8px', paddingLeft: '50px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    Total - Sales Tax Payable
                  </td>
                  <td colSpan="5" style={{ borderBottom: '1px solid #ddd' }}></td>
                  <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    $318.25
                  </td>
                </tr>

                {/* Total Adjustments */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '4px 8px', paddingLeft: '30px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    Total Adjustments to Profit/(Loss)
                  </td>
                  <td colSpan="5" style={{ borderBottom: '1px solid #ddd' }}></td>
                  <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    -$211,120.25
                  </td>
                </tr>

                {/* Total Operating Activities */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '4px 8px', paddingLeft: '15px', fontWeight: 'bold', borderBottom: '1px dotted #ccc' }}>
                    Total Operating Activities
                  </td>
                  <td colSpan="5" style={{ borderBottom: '1px dotted #ccc' }}></td>
                  <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px dotted #ccc' }}>
                    $50.00
                  </td>
                </tr>

                {/* Net Change in Cash */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '4px 8px', paddingLeft: '15px', fontWeight: 'bold', borderBottom: '1px dotted #ccc' }}>
                    Net Change in Cash for Period
                  </td>
                  <td colSpan="5" style={{ borderBottom: '1px dotted #ccc' }}></td>
                  <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px dotted #ccc' }}>
                    $50.00
                  </td>
                </tr>

                {/* Cash at Beginning */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '4px 8px', paddingLeft: '15px', fontWeight: 'bold', borderBottom: '1px dotted #ccc' }}>
                    Cash at Beginning of Period
                  </td>
                  <td colSpan="5" style={{ borderBottom: '1px dotted #ccc' }}></td>
                  <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px dotted #ccc' }}>
                    $51,383,701.55
                  </td>
                </tr>

                {/* Cash at End */}
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
                    Cash at End of Period
                  </td>
                  <td colSpan="5" style={{ borderBottom: '2px solid #333' }}></td>
                  <td style={{ 
                    padding: '12px 8px', 
                    textAlign: 'right', 
                    fontWeight: 'bold',
                    fontSize: '15px',
                    color: '#333'
                  }}>
                    $51,383,701.55
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

export default CashFlowStatementDetail;
