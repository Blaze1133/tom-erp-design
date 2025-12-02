import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const IncomeStatement = ({ onViewDetailClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [period, setPeriod] = useState('This Period');
  const [fromDate, setFromDate] = useState('Dec 2025');
  const [toDate, setToDate] = useState('Dec 2025');
  const [subsidiary, setSubsidiary] = useState('Tech Onshore MEP P...td. (Consolidated)');
  const [column, setColumn] = useState('Total');
  const [showDetail, setShowDetail] = useState(false);

  // Sample Income Statement Data
  const incomeStatementData = {
    sales: {
      total: 5214276.58,
      details: {
        '40000 - Sales': {
          total: 5214276.58,
          details: {
            '40100 - Sales': 5214276.58
          }
        }
      }
    },
    purchases: {
      total: 53060.00
    },
    overheads: {
      total: 596.33,
      details: {
        '52000 - Facilities Related Expenses': {
          total: 596.33,
          details: {
            '52500 - Motor Vehicle Maintenance': 596.33
          }
        }
      }
    }
  };

  const grossProfit = incomeStatementData.sales.total - incomeStatementData.purchases.total;
  const operatingProfit = grossProfit - incomeStatementData.overheads.total;
  const netProfit = operatingProfit;

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleRefresh = () => {
    showToast('Income Statement refreshed successfully', 'success');
  };

  const handleCustomize = () => {
    showToast('Customization options will be available soon', 'info');
  };

  const handleExport = () => {
    showToast('Report exported successfully', 'success');
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'SGD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const renderAccountLine = (accountName, amount, level = 0) => (
    <tr key={accountName} style={{ backgroundColor: level > 0 ? '#f8f9fa' : '#fff' }}>
      <td style={{ 
        paddingLeft: `${level * 20 + 15}px`,
        fontWeight: level === 0 ? '600' : '400',
        color: level === 0 ? '#333' : '#555'
      }}>
        {level > 0 && <i className="fas fa-chevron-right" style={{ marginRight: '8px', fontSize: '0.8rem', color: '#999' }}></i>}
        {accountName}
      </td>
      <td style={{ 
        textAlign: 'right', 
        fontWeight: level === 0 ? '600' : '400',
        color: level === 0 ? '#333' : '#555'
      }}>
        {formatCurrency(amount)}
      </td>
    </tr>
  );

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-chart-line" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Income Statement</h1>
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

        {/* Income Statement Table */}
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
              Income Statement - {fromDate} to {toDate}
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
                {/* Sales Section */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ 
                    padding: '4px 8px', 
                    fontWeight: 'bold',
                    borderRight: '1px solid #ddd',
                    borderBottom: '1px solid #ddd'
                  }}>
                    Sales
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
                        40000 - Sales
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
                        borderBottom: '1px dotted #ccc'
                      }}>
                        40100 - Sales.
                      </td>
                      <td style={{ 
                        textAlign: 'right', 
                        padding: '4px 8px',
                        borderBottom: '1px dotted #ccc'
                      }}>
                        S${formatCurrency(5214276.58).replace('SGD', '').replace(' ', '')}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ 
                        padding: '4px 8px', 
                        paddingLeft: '40px',
                        fontWeight: 'bold',
                        borderRight: '1px solid #ddd',
                        borderBottom: '1px dotted #ccc'
                      }}>
                        Total - 40000 - Sales
                      </td>
                      <td style={{ 
                        textAlign: 'right', 
                        padding: '4px 8px',
                        fontWeight: 'bold',
                        borderBottom: '1px dotted #ccc'
                      }}>
                        S${formatCurrency(5214276.58).replace('SGD', '').replace(' ', '')}
                      </td>
                    </tr>
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
                    Total - Sales
                  </td>
                  <td style={{ 
                    textAlign: 'right', 
                    padding: '4px 8px',
                    fontWeight: 'bold',
                    borderBottom: '1px dotted #ccc'
                  }}>
                    S${formatCurrency(incomeStatementData.sales.total).replace('SGD', '').replace(' ', '')}
                  </td>
                </tr>

                {/* Purchases Section */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ 
                    padding: '4px 8px', 
                    fontWeight: 'bold',
                    borderRight: '1px solid #ddd',
                    borderBottom: '1px dotted #ccc'
                  }}>
                    Purchases
                  </td>
                  <td style={{ 
                    textAlign: 'right', 
                    padding: '4px 8px',
                    fontWeight: 'bold',
                    borderBottom: '1px dotted #ccc'
                  }}>
                    S${formatCurrency(incomeStatementData.purchases.total).replace('SGD', '').replace(' ', '')}
                  </td>
                </tr>

                {/* Gross Profit */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ 
                    padding: '4px 8px', 
                    paddingLeft: '20px',
                    fontWeight: 'bold',
                    borderRight: '1px solid #ddd',
                    borderBottom: '1px dotted #ccc'
                  }}>
                    Gross Profit
                  </td>
                  <td style={{ 
                    textAlign: 'right', 
                    padding: '4px 8px',
                    fontWeight: 'bold',
                    borderBottom: '1px dotted #ccc'
                  }}>
                    S${formatCurrency(grossProfit).replace('SGD', '').replace(' ', '')}
                  </td>
                </tr>

                {/* Overheads Section */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ 
                    padding: '4px 8px', 
                    fontWeight: 'bold',
                    borderRight: '1px solid #ddd',
                    borderBottom: '1px solid #ddd'
                  }}>
                    Overheads
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
                        52000 - Facilities Related Expenses
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
                        borderBottom: '1px dotted #ccc'
                      }}>
                        52500 - Motor Vehicle Maintenance
                      </td>
                      <td style={{ 
                        textAlign: 'right', 
                        padding: '4px 8px',
                        borderBottom: '1px dotted #ccc'
                      }}>
                        S${formatCurrency(596.33).replace('SGD', '').replace(' ', '')}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ 
                        padding: '4px 8px', 
                        paddingLeft: '40px',
                        fontWeight: 'bold',
                        borderRight: '1px solid #ddd',
                        borderBottom: '1px dotted #ccc'
                      }}>
                        Total - 52000 - Facilities Related Expenses
                      </td>
                      <td style={{ 
                        textAlign: 'right', 
                        padding: '4px 8px',
                        fontWeight: 'bold',
                        borderBottom: '1px dotted #ccc'
                      }}>
                        S${formatCurrency(596.33).replace('SGD', '').replace(' ', '')}
                      </td>
                    </tr>
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
                    Total - Overheads
                  </td>
                  <td style={{ 
                    textAlign: 'right', 
                    padding: '4px 8px',
                    fontWeight: 'bold',
                    borderBottom: '1px dotted #ccc'
                  }}>
                    S${formatCurrency(incomeStatementData.overheads.total).replace('SGD', '').replace(' ', '')}
                  </td>
                </tr>

                {/* Operating Profit */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ 
                    padding: '4px 8px', 
                    paddingLeft: '20px',
                    fontWeight: 'bold',
                    borderRight: '1px solid #ddd',
                    borderBottom: '1px dotted #ccc'
                  }}>
                    Operating Profit
                  </td>
                  <td style={{ 
                    textAlign: 'right', 
                    padding: '4px 8px',
                    fontWeight: 'bold',
                    borderBottom: '1px dotted #ccc'
                  }}>
                    S${formatCurrency(operatingProfit).replace('SGD', '').replace(' ', '')}
                  </td>
                </tr>

                {/* Net Profit */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ 
                    padding: '6px 8px', 
                    fontWeight: 'bold',
                    fontSize: '14px',
                    borderRight: '1px solid #ddd',
                    borderBottom: '1px solid #ddd'
                  }}>
                    Net Profit/(Loss)
                  </td>
                  <td style={{ 
                    textAlign: 'right', 
                    padding: '6px 8px',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    borderBottom: '1px solid #ddd'
                  }}>
                    S${formatCurrency(netProfit).replace('SGD', '').replace(' ', '')}
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

export default IncomeStatement;
