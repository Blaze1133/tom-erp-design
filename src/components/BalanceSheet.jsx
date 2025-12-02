import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const BalanceSheet = ({ onViewDetailClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [fromDate, setFromDate] = useState('Dec 2025');
  const [toDate, setToDate] = useState('Dec 2025');
  const [subsidiary, setSubsidiary] = useState('Tech Onshore MEP P...td. (Consolidated)');
  const [column, setColumn] = useState('Total');
  const [showDetail, setShowDetail] = useState(false);

  // Sample Balance Sheet Data
  const balanceSheetData = {
    currentAssets: {
      bank: {
        '11000 - ALL Bank Accounts': 541383701.55
      },
      accountsReceivable: {
        '10000 - Accounts Receivable': 59914040.98
      },
      otherCurrentAssets: {
        '11530 - Banker Guarantee/Bond': 54250512.93,
        '12000 - Deposits Paid / Prepayments': 53093837.32,
        '13000 - Debtor Purchases': 51297415.77,
        '14000 - Intercompany Receivable': 47061008.52,
        '15000 - Other Receivable': 4580766.47
      },
      total: 811581283.54
    },
    longTermLiabilities: {
      '29500 - Non-Current HP Interest Suspense Account': 87110.41,
      total: 89308063.65
    },
    equity: {
      '30000 - Equity': 52010400.00,
      '30240 - Dividend': -1000000.00,
      '30250 - Other Reserve': -800000.00,
      retainedEarnings: 4912357.23,
      netIncome: 593650369.11,
      total: 511630720.34
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleRefresh = () => {
    showToast('Balance Sheet refreshed successfully', 'success');
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
          <i className="fas fa-balance-scale" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Balance Sheet</h1>
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

        {/* Balance Sheet Table */}
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
              Balance Sheet - {fromDate} to {toDate}
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
            minWidth: '800px',
            maxWidth: '100vw'
          }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse', 
              fontSize: 'clamp(11px, 1.2vw, 13px)', 
              fontFamily: 'Arial, sans-serif', 
              minWidth: '800px'
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
                    FINANCIAL ROW
                  </th>
                  <th style={{ 
                    textAlign: 'right', 
                    padding: '8px 12px', 
                    fontWeight: 'bold', 
                    fontSize: '12px',
                    color: '#333'
                  }}>
                    AMOUNT
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Current Assets Section */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ 
                    padding: '4px 8px', 
                    fontWeight: 'bold',
                    borderRight: '1px solid #ddd',
                    borderBottom: '1px solid #ddd'
                  }}>
                    Current Assets
                  </td>
                  <td style={{ 
                    textAlign: 'right', 
                    padding: '4px 8px',
                    borderBottom: '1px solid #ddd'
                  }}>
                  </td>
                </tr>
                
                {showDetail && (
                  <>
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ 
                        padding: '4px 8px', 
                        paddingLeft: '25px',
                        fontWeight: 'bold',
                        borderRight: '1px solid #ddd',
                        borderBottom: '1px solid #ddd'
                      }}>
                        Bank
                      </td>
                      <td style={{ 
                        textAlign: 'right', 
                        padding: '4px 8px',
                        borderBottom: '1px solid #ddd'
                      }}>
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ 
                        padding: '4px 8px', 
                        paddingLeft: '50px',
                        borderRight: '1px solid #ddd',
                        borderBottom: '1px dotted #ddd'
                      }}>
                        11000 - ALL Bank Accounts
                      </td>
                      <td style={{ 
                        textAlign: 'right', 
                        padding: '4px 8px',
                        borderBottom: '1px dotted #ddd'
                      }}>
                        S${formatCurrency(balanceSheetData.currentAssets.bank['11000 - ALL Bank Accounts'])}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ 
                        padding: '4px 8px', 
                        paddingLeft: '40px',
                        fontWeight: 'bold',
                        borderRight: '1px solid #ddd',
                        borderBottom: '1px solid #ddd'
                      }}>
                        Total - 11000 - ALL Bank Accounts
                      </td>
                      <td style={{ 
                        textAlign: 'right', 
                        padding: '4px 8px',
                        fontWeight: 'bold',
                        borderBottom: '1px solid #ddd'
                      }}>
                        S${formatCurrency(balanceSheetData.currentAssets.bank['11000 - ALL Bank Accounts'])}
                      </td>
                    </tr>
                    
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ 
                        padding: '4px 8px', 
                        paddingLeft: '25px',
                        fontWeight: 'bold',
                        borderRight: '1px solid #ddd',
                        borderBottom: '1px solid #ddd'
                      }}>
                        Accounts Receivable
                      </td>
                      <td style={{ 
                        textAlign: 'right', 
                        padding: '4px 8px',
                        borderBottom: '1px solid #ddd'
                      }}>
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ 
                        padding: '4px 8px', 
                        paddingLeft: '50px',
                        borderRight: '1px solid #ddd',
                        borderBottom: '1px dotted #ddd'
                      }}>
                        10000 - Accounts Receivable
                      </td>
                      <td style={{ 
                        textAlign: 'right', 
                        padding: '4px 8px',
                        borderBottom: '1px dotted #ddd'
                      }}>
                        S${formatCurrency(balanceSheetData.currentAssets.accountsReceivable['10000 - Accounts Receivable'])}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ 
                        padding: '4px 8px', 
                        paddingLeft: '40px',
                        fontWeight: 'bold',
                        borderRight: '1px solid #ddd',
                        borderBottom: '1px solid #ddd'
                      }}>
                        Total - 10000 - Accounts Receivable
                      </td>
                      <td style={{ 
                        textAlign: 'right', 
                        padding: '4px 8px',
                        fontWeight: 'bold',
                        borderBottom: '1px solid #ddd'
                      }}>
                        S${formatCurrency(balanceSheetData.currentAssets.accountsReceivable['10000 - Accounts Receivable'])}
                      </td>
                    </tr>
                    
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ 
                        padding: '4px 8px', 
                        paddingLeft: '25px',
                        fontWeight: 'bold',
                        borderRight: '1px solid #ddd',
                        borderBottom: '1px solid #ddd'
                      }}>
                        Other Current Asset
                      </td>
                      <td style={{ 
                        textAlign: 'right', 
                        padding: '4px 8px',
                        borderBottom: '1px solid #ddd'
                      }}>
                      </td>
                    </tr>
                    {Object.entries(balanceSheetData.currentAssets.otherCurrentAssets).map(([account, amount]) => (
                      <tr key={account} style={{ backgroundColor: '#fff' }}>
                        <td style={{ 
                          padding: '4px 8px', 
                          paddingLeft: '50px',
                          borderRight: '1px solid #ddd',
                          borderBottom: '1px dotted #ddd'
                        }}>
                          {account}
                        </td>
                        <td style={{ 
                          textAlign: 'right', 
                          padding: '4px 8px',
                          borderBottom: '1px dotted #ddd'
                        }}>
                          S${formatCurrency(amount)}
                        </td>
                      </tr>
                    ))}
                  </>
                )}
                
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ 
                    padding: '4px 8px', 
                    paddingLeft: '20px',
                    fontWeight: 'bold',
                    borderRight: '1px solid #ddd',
                    borderBottom: '1px dotted #ccc'
                  }}>
                    Total Current Assets
                  </td>
                  <td style={{ 
                    textAlign: 'right', 
                    padding: '4px 8px',
                    fontWeight: 'bold',
                    borderBottom: '1px dotted #ccc'
                  }}>
                    S${formatCurrency(balanceSheetData.currentAssets.total)}
                  </td>
                </tr>

                {/* Long Term Liabilities Section */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ 
                    padding: '4px 8px', 
                    fontWeight: 'bold',
                    borderRight: '1px solid #ddd',
                    borderBottom: '1px dotted #ccc'
                  }}>
                    Total Long Term Liabilities
                  </td>
                  <td style={{ 
                    textAlign: 'right', 
                    padding: '4px 8px',
                    fontWeight: 'bold',
                    borderBottom: '1px dotted #ccc'
                  }}>
                    S${formatCurrency(balanceSheetData.longTermLiabilities.total)}
                  </td>
                </tr>

                {/* Total Assets Less Total Liabilities */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ 
                    padding: '4px 8px', 
                    fontWeight: 'bold',
                    borderRight: '1px solid #ddd',
                    borderBottom: '1px dotted #ccc'
                  }}>
                    Total Assets Less Total Liabilities
                  </td>
                  <td style={{ 
                    textAlign: 'right', 
                    padding: '4px 8px',
                    fontWeight: 'bold',
                    borderBottom: '1px dotted #ccc'
                  }}>
                    S${formatCurrency(balanceSheetData.equity.total)}
                  </td>
                </tr>

                {/* Capital and Reserves */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ 
                    padding: '4px 8px', 
                    fontWeight: 'bold',
                    borderRight: '1px solid #ddd',
                    borderBottom: '1px solid #ddd'
                  }}>
                    Capital and Reserves
                  </td>
                  <td style={{ 
                    textAlign: 'right', 
                    padding: '4px 8px',
                    borderBottom: '1px solid #ddd'
                  }}>
                  </td>
                </tr>

                {showDetail && (
                  <>
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ 
                        padding: '4px 8px', 
                        paddingLeft: '25px',
                        borderRight: '1px solid #ddd',
                        borderBottom: '1px dotted #ddd'
                      }}>
                        30000 - Equity
                      </td>
                      <td style={{ 
                        textAlign: 'right', 
                        padding: '4px 8px',
                        borderBottom: '1px dotted #ddd'
                      }}>
                        S${formatCurrency(balanceSheetData.equity['30000 - Equity'])}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ 
                        padding: '4px 8px', 
                        paddingLeft: '25px',
                        borderRight: '1px solid #ddd',
                        borderBottom: '1px dotted #ddd'
                      }}>
                        30240 - Dividend
                      </td>
                      <td style={{ 
                        textAlign: 'right', 
                        padding: '4px 8px',
                        borderBottom: '1px dotted #ddd'
                      }}>
                        S${formatCurrency(balanceSheetData.equity['30240 - Dividend'])}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ 
                        padding: '4px 8px', 
                        paddingLeft: '25px',
                        borderRight: '1px solid #ddd',
                        borderBottom: '1px dotted #ddd'
                      }}>
                        30250 - Other Reserve
                      </td>
                      <td style={{ 
                        textAlign: 'right', 
                        padding: '4px 8px',
                        borderBottom: '1px dotted #ddd'
                      }}>
                        S${formatCurrency(balanceSheetData.equity['30250 - Other Reserve'])}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ 
                        padding: '4px 8px', 
                        paddingLeft: '25px',
                        borderRight: '1px solid #ddd',
                        borderBottom: '1px dotted #ddd'
                      }}>
                        Retained Earnings
                      </td>
                      <td style={{ 
                        textAlign: 'right', 
                        padding: '4px 8px',
                        borderBottom: '1px dotted #ddd'
                      }}>
                        S${formatCurrency(balanceSheetData.equity.retainedEarnings)}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ 
                        padding: '4px 8px', 
                        paddingLeft: '25px',
                        borderRight: '1px solid #ddd',
                        borderBottom: '1px dotted #ddd'
                      }}>
                        Net Income
                      </td>
                      <td style={{ 
                        textAlign: 'right', 
                        padding: '4px 8px',
                        borderBottom: '1px dotted #ddd'
                      }}>
                        S${formatCurrency(balanceSheetData.equity.netIncome)}
                      </td>
                    </tr>
                  </>
                )}

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
                  <td style={{ 
                    textAlign: 'right', 
                    padding: '12px 8px',
                    fontWeight: 'bold',
                    fontSize: '15px',
                    color: '#333'
                  }}>
                    S${formatCurrency(balanceSheetData.equity.total)}
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

export default BalanceSheet;
