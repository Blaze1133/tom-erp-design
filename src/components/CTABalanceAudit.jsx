import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CTABalanceAudit = ({ onViewDetailClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [fromDate, setFromDate] = useState('Dec 2025');
  const [toDate, setToDate] = useState('Dec 2025');
  const [subsidiary, setSubsidiary] = useState('Tech Onshore MEP P...td. (Consolidated)');
  const [column, setColumn] = useState('Total');

  // Sample CTA Balance Audit Data
  const ctaData = {
    assets: {
      currentAssets: {
        bank: [
          {
            account: '11110 - TSV DBS SGD 072-004442-8',
            subsidiary: 'Tech Onshore Marine (S) Pte Ltd',
            startingBalance: { localBalance: 5421593.14, generalRate: 1, consolidatedBalance: 5421593.14 },
            netPosting: { localBalance: 50.00, cashFlowRate: 1, generalRate: 1, consolidatedBalance: 50.00 },
            endingBalance: { localBalance: 5421593.14, generalRate: 1, consolidatedBalance: 5421593.14 },
            ctaAnalysis: { beginningRate: 50.00, endingRate: 50.00, netPosting: 50.00, consolidatedCTA: 50.00 }
          },
          {
            account: '11120 - TEA DBS SGD 072-004465-7',
            subsidiary: 'Tech Onshore Automation Pte Ltd',
            startingBalance: { localBalance: -515800.13, generalRate: 1, consolidatedBalance: -515800.13 },
            netPosting: { localBalance: 50.00, cashFlowRate: 1, generalRate: 1, consolidatedBalance: 50.00 },
            endingBalance: { localBalance: -515800.13, generalRate: 1, consolidatedBalance: -515800.13 },
            ctaAnalysis: { beginningRate: 50.00, endingRate: 50.00, netPosting: 50.00, consolidatedCTA: 50.00 }
          },
          {
            account: '11130 - TMO DBS SGD 072-027380-0',
            subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
            startingBalance: { localBalance: 5846379.50, generalRate: 1, consolidatedBalance: 5846379.50 },
            netPosting: { localBalance: 50.00, cashFlowRate: 1, generalRate: 1, consolidatedBalance: 50.00 },
            endingBalance: { localBalance: 5846379.50, generalRate: 1, consolidatedBalance: 5846379.50 },
            ctaAnalysis: { beginningRate: 50.00, endingRate: 50.00, netPosting: 50.00, consolidatedCTA: 50.00 }
          }
        ]
      }
    },
    totals: {
      totalAssets: { startingBalance: 5291946.27, netPosting: 50.00, endingBalance: 5291946.27, ctaAnalysis: 50.00 },
      totalOtherExpense: { startingBalance: 5291946.27, netPosting: 50.00, endingBalance: 5291946.27, ctaAnalysis: 50.00 },
      netOtherIncome: { startingBalance: -51055805.45, netPosting: 50.00, endingBalance: -51055805.45, ctaAnalysis: 50.00 },
      totalEquity: { startingBalance: -511415066.0, netPosting: -4211120.25, endingBalance: -511630726.34, ctaAnalysis: -4211120.25 },
      totalLiabilitiesEquity: { startingBalance: -46488472.6, netPosting: -4232702.29, endingBalance: -46721254.9, ctaAnalysis: -4232702.29 },
      total: { startingBalance: 50.00, netPosting: 50.00, endingBalance: 50.00, ctaAnalysis: 50.00 }
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleRefresh = () => {
    showToast('CTA Balance Audit refreshed successfully', 'success');
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
          <i className="fas fa-balance-scale" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>CTA Balance Audit</h1>
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

        {/* CTA Balance Audit Table */}
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
              CTA Balance Audit - {fromDate} to {toDate}
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
            minWidth: '1600px',
            maxWidth: '100vw'
          }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse', 
              fontSize: 'clamp(9px, 0.8vw, 11px)', 
              fontFamily: 'Arial, sans-serif', 
              minWidth: '1600px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#e6e6e6', borderBottom: '1px solid #ccc' }}>
                  <th rowSpan="2" style={{ 
                    textAlign: 'left', 
                    padding: '6px 4px', 
                    fontWeight: 'bold', 
                    fontSize: '10px',
                    color: '#333',
                    borderRight: '1px solid #ccc',
                    verticalAlign: 'middle',
                    width: '120px'
                  }}>
                    FINANCIAL ROW
                  </th>
                  <th colSpan="4" style={{ 
                    textAlign: 'center', 
                    padding: '6px 4px', 
                    fontWeight: 'bold', 
                    fontSize: '10px',
                    color: '#333',
                    borderRight: '1px solid #ccc',
                    borderBottom: '1px solid #ccc'
                  }}>
                    STARTING BALANCE SHEET (AS OF NOV 2025)
                  </th>
                  <th colSpan="4" style={{ 
                    textAlign: 'center', 
                    padding: '6px 4px', 
                    fontWeight: 'bold', 
                    fontSize: '10px',
                    color: '#333',
                    borderRight: '1px solid #ccc',
                    borderBottom: '1px solid #ccc'
                  }}>
                    NET POSTING (DEC 2025)
                  </th>
                  <th colSpan="4" style={{ 
                    textAlign: 'center', 
                    padding: '6px 4px', 
                    fontWeight: 'bold', 
                    fontSize: '10px',
                    color: '#333',
                    borderRight: '1px solid #ccc',
                    borderBottom: '1px solid #ccc'
                  }}>
                    ENDING BALANCE SHEET (AS OF DEC 2025)
                  </th>
                  <th colSpan="4" style={{ 
                    textAlign: 'center', 
                    padding: '6px 4px', 
                    fontWeight: 'bold', 
                    fontSize: '10px',
                    color: '#333',
                    borderBottom: '1px solid #ccc'
                  }}>
                    CTA ANALYSIS
                  </th>
                </tr>
                <tr style={{ backgroundColor: '#e6e6e6', borderBottom: '1px solid #ccc' }}>
                  <th style={{ textAlign: 'center', padding: '4px 2px', fontWeight: 'bold', fontSize: '9px', color: '#333', borderRight: '1px solid #ccc', width: '80px' }}>Local Balance</th>
                  <th style={{ textAlign: 'center', padding: '4px 2px', fontWeight: 'bold', fontSize: '9px', color: '#333', borderRight: '1px solid #ccc', width: '60px' }}>General Rate</th>
                  <th style={{ textAlign: 'center', padding: '4px 2px', fontWeight: 'bold', fontSize: '9px', color: '#333', borderRight: '1px solid #ccc', width: '80px' }}>Consolidated Balance</th>
                  <th style={{ textAlign: 'center', padding: '4px 2px', fontWeight: 'bold', fontSize: '9px', color: '#333', borderRight: '1px solid #ccc', width: '30px' }}>CTA</th>
                  
                  <th style={{ textAlign: 'center', padding: '4px 2px', fontWeight: 'bold', fontSize: '9px', color: '#333', borderRight: '1px solid #ccc', width: '80px' }}>Local Balance</th>
                  <th style={{ textAlign: 'center', padding: '4px 2px', fontWeight: 'bold', fontSize: '9px', color: '#333', borderRight: '1px solid #ccc', width: '60px' }}>Cash Flow Rate</th>
                  <th style={{ textAlign: 'center', padding: '4px 2px', fontWeight: 'bold', fontSize: '9px', color: '#333', borderRight: '1px solid #ccc', width: '60px' }}>General Rate</th>
                  <th style={{ textAlign: 'center', padding: '4px 2px', fontWeight: 'bold', fontSize: '9px', color: '#333', borderRight: '1px solid #ccc', width: '80px' }}>Consolidated Balance</th>
                  
                  <th style={{ textAlign: 'center', padding: '4px 2px', fontWeight: 'bold', fontSize: '9px', color: '#333', borderRight: '1px solid #ccc', width: '80px' }}>Local Balance</th>
                  <th style={{ textAlign: 'center', padding: '4px 2px', fontWeight: 'bold', fontSize: '9px', color: '#333', borderRight: '1px solid #ccc', width: '60px' }}>General Rate</th>
                  <th style={{ textAlign: 'center', padding: '4px 2px', fontWeight: 'bold', fontSize: '9px', color: '#333', borderRight: '1px solid #ccc', width: '80px' }}>Consolidated Balance</th>
                  <th style={{ textAlign: 'center', padding: '4px 2px', fontWeight: 'bold', fontSize: '9px', color: '#333', borderRight: '1px solid #ccc', width: '30px' }}>CTA</th>
                  
                  <th style={{ textAlign: 'center', padding: '4px 2px', fontWeight: 'bold', fontSize: '9px', color: '#333', borderRight: '1px solid #ccc', width: '60px' }}>Beginning Balance Rate Difference</th>
                  <th style={{ textAlign: 'center', padding: '4px 2px', fontWeight: 'bold', fontSize: '9px', color: '#333', borderRight: '1px solid #ccc', width: '60px' }}>Net Ending Rate Difference</th>
                  <th style={{ textAlign: 'center', padding: '4px 2px', fontWeight: 'bold', fontSize: '9px', color: '#333', borderRight: '1px solid #ccc', width: '60px' }}>Net Posting Consolidated Contribution</th>
                  <th style={{ textAlign: 'center', padding: '4px 2px', fontWeight: 'bold', fontSize: '9px', color: '#333', width: '60px' }}>CTA Contribution</th>
                </tr>
              </thead>
              <tbody>
                {/* CTA Section */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ 
                    padding: '4px 8px', 
                    fontWeight: 'bold',
                    borderRight: '1px solid #ddd',
                    borderBottom: '1px solid #ddd'
                  }}>
                    CTA
                  </td>
                  <td colSpan="16" style={{ borderBottom: '1px solid #ddd' }}></td>
                </tr>

                {/* ASSETS Section */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ 
                    padding: '4px 8px', 
                    paddingLeft: '20px',
                    fontWeight: 'bold',
                    borderRight: '1px solid #ddd',
                    borderBottom: '1px solid #ddd'
                  }}>
                    ASSETS
                  </td>
                  <td colSpan="16" style={{ borderBottom: '1px solid #ddd' }}></td>
                </tr>

                {/* Current Assets */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ 
                    padding: '4px 8px', 
                    paddingLeft: '40px',
                    fontWeight: 'bold',
                    borderRight: '1px solid #ddd',
                    borderBottom: '1px solid #ddd'
                  }}>
                    Current Assets
                  </td>
                  <td colSpan="16" style={{ borderBottom: '1px solid #ddd' }}></td>
                </tr>

                {/* Bank */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ 
                    padding: '4px 8px', 
                    paddingLeft: '60px',
                    fontWeight: 'bold',
                    borderRight: '1px solid #ddd',
                    borderBottom: '1px solid #ddd'
                  }}>
                    Bank
                  </td>
                  <td colSpan="16" style={{ borderBottom: '1px solid #ddd' }}></td>
                </tr>

                {/* Bank Accounts */}
                {ctaData.assets.currentAssets.bank.map((account, index) => (
                  <tr key={index} style={{ backgroundColor: '#fff' }}>
                    <td style={{ 
                      padding: '2px 4px', 
                      paddingLeft: '80px',
                      borderRight: '1px solid #ddd',
                      borderBottom: '1px dotted #ddd',
                      fontSize: '9px'
                    }}>
                      {account.account}<br/>
                      <span style={{ fontSize: '8px', color: '#666' }}>{account.subsidiary}</span>
                    </td>
                    {/* Starting Balance */}
                    <td style={{ textAlign: 'right', padding: '2px 2px', borderRight: '1px solid #ddd', borderBottom: '1px dotted #ddd', fontSize: '9px' }}>
                      {formatAmount(account.startingBalance.localBalance)}
                    </td>
                    <td style={{ textAlign: 'center', padding: '2px 2px', borderRight: '1px solid #ddd', borderBottom: '1px dotted #ddd', fontSize: '9px' }}>
                      {account.startingBalance.generalRate}
                    </td>
                    <td style={{ textAlign: 'right', padding: '2px 2px', borderRight: '1px solid #ddd', borderBottom: '1px dotted #ddd', fontSize: '9px' }}>
                      {formatAmount(account.startingBalance.consolidatedBalance)}
                    </td>
                    <td style={{ textAlign: 'right', padding: '2px 2px', borderRight: '1px solid #ddd', borderBottom: '1px dotted #ddd', fontSize: '9px' }}>
                      {formatAmount(account.netPosting.localBalance)}
                    </td>
                    {/* Net Posting */}
                    <td style={{ textAlign: 'right', padding: '2px 2px', borderRight: '1px solid #ddd', borderBottom: '1px dotted #ddd', fontSize: '9px' }}>
                      {formatAmount(account.netPosting.localBalance)}
                    </td>
                    <td style={{ textAlign: 'center', padding: '2px 2px', borderRight: '1px solid #ddd', borderBottom: '1px dotted #ddd', fontSize: '9px' }}>
                      {account.netPosting.cashFlowRate}
                    </td>
                    <td style={{ textAlign: 'center', padding: '2px 2px', borderRight: '1px solid #ddd', borderBottom: '1px dotted #ddd', fontSize: '9px' }}>
                      {account.netPosting.generalRate}
                    </td>
                    <td style={{ textAlign: 'right', padding: '2px 2px', borderRight: '1px solid #ddd', borderBottom: '1px dotted #ddd', fontSize: '9px' }}>
                      {formatAmount(account.netPosting.consolidatedBalance)}
                    </td>
                    {/* Ending Balance */}
                    <td style={{ textAlign: 'right', padding: '2px 2px', borderRight: '1px solid #ddd', borderBottom: '1px dotted #ddd', fontSize: '9px' }}>
                      {formatAmount(account.endingBalance.localBalance)}
                    </td>
                    <td style={{ textAlign: 'center', padding: '2px 2px', borderRight: '1px solid #ddd', borderBottom: '1px dotted #ddd', fontSize: '9px' }}>
                      {account.endingBalance.generalRate}
                    </td>
                    <td style={{ textAlign: 'right', padding: '2px 2px', borderRight: '1px solid #ddd', borderBottom: '1px dotted #ddd', fontSize: '9px' }}>
                      {formatAmount(account.endingBalance.consolidatedBalance)}
                    </td>
                    <td style={{ textAlign: 'right', padding: '2px 2px', borderRight: '1px solid #ddd', borderBottom: '1px dotted #ddd', fontSize: '9px' }}>
                      {formatAmount(account.ctaAnalysis.beginningRate)}
                    </td>
                    {/* CTA Analysis */}
                    <td style={{ textAlign: 'right', padding: '2px 2px', borderRight: '1px solid #ddd', borderBottom: '1px dotted #ddd', fontSize: '9px' }}>
                      {formatAmount(account.ctaAnalysis.beginningRate)}
                    </td>
                    <td style={{ textAlign: 'right', padding: '2px 2px', borderRight: '1px solid #ddd', borderBottom: '1px dotted #ddd', fontSize: '9px' }}>
                      {formatAmount(account.ctaAnalysis.endingRate)}
                    </td>
                    <td style={{ textAlign: 'right', padding: '2px 2px', borderRight: '1px solid #ddd', borderBottom: '1px dotted #ddd', fontSize: '9px' }}>
                      {formatAmount(account.ctaAnalysis.netPosting)}
                    </td>
                    <td style={{ textAlign: 'right', padding: '2px 2px', borderBottom: '1px dotted #ddd', fontSize: '9px' }}>
                      {formatAmount(account.ctaAnalysis.consolidatedCTA)}
                    </td>
                  </tr>
                ))}

                {/* Totals */}
                <tr style={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>
                  <td style={{ padding: '4px 8px', paddingLeft: '20px', borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' }}>
                    Total
                  </td>
                  <td colSpan="16" style={{ borderBottom: '1px solid #ddd' }}></td>
                </tr>

                {/* Grand Total */}
                <tr style={{ 
                  backgroundColor: '#e8e8e8', 
                  borderTop: '2px solid #333',
                  borderBottom: '2px solid #333'
                }}>
                  <td style={{ 
                    padding: '8px 8px', 
                    fontWeight: 'bold',
                    fontSize: '12px',
                    borderRight: '1px solid #ccc',
                    color: '#333'
                  }}>
                    Total
                  </td>
                  <td style={{ textAlign: 'right', padding: '8px 4px', fontWeight: 'bold', fontSize: '10px', color: '#333', borderRight: '1px solid #ccc' }}>
                    {formatAmount(ctaData.totals.total.startingBalance)}
                  </td>
                  <td colSpan="2" style={{ borderRight: '1px solid #ccc' }}></td>
                  <td style={{ textAlign: 'right', padding: '8px 4px', fontWeight: 'bold', fontSize: '10px', color: '#333', borderRight: '1px solid #ccc' }}>
                    {formatAmount(ctaData.totals.total.netPosting)}
                  </td>
                  <td colSpan="3" style={{ borderRight: '1px solid #ccc' }}></td>
                  <td style={{ textAlign: 'right', padding: '8px 4px', fontWeight: 'bold', fontSize: '10px', color: '#333', borderRight: '1px solid #ccc' }}>
                    {formatAmount(ctaData.totals.total.endingBalance)}
                  </td>
                  <td colSpan="3" style={{ borderRight: '1px solid #ccc' }}></td>
                  <td style={{ textAlign: 'right', padding: '8px 4px', fontWeight: 'bold', fontSize: '10px', color: '#333' }}>
                    {formatAmount(ctaData.totals.total.ctaAnalysis)}
                  </td>
                  <td colSpan="3"></td>
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

export default CTABalanceAudit;
