import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const IncomeStatementDetail = ({ onBackClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Sample detailed data matching the images
  const detailedData = {
    sales: {
      '40000 - Sales': {
        '40100 - Sales': [
          {
            type: 'Invoice',
            date: '1/12/2025',
            docNumber: '12TOM01268',
            name: '938 SHINEVO CORPORATION-TOM22-00531 24-00016-SHINEVO-Tengah Depot (3173A)',
            clr: 'F',
            split: '10100 - Accounts Receivable : Trade Debtors',
            amount: 5049350.00
          },
          {
            type: 'Invoice',
            date: '1/12/2025',
            docNumber: '12TOM01289',
            name: '938 SHINEVO CORPORATION-TOM22-00431 24-00001-Tengah Depot (3173A)',
            clr: 'F',
            split: '10100 - Accounts Receivable : Trade Debtors',
            amount: 5164926.58
          }
        ]
      }
    },
    purchases: {
      '50000 - Cost of Sales': {
        '50100 - Material Purchase': [
          {
            type: 'Bill',
            date: '1/12/2025',
            docNumber: '8464',
            name: 'KIAN HUAT HARDWARE COMPANY',
            clr: 'F',
            split: '20010 - Accounts Payable : Trade Creditors',
            amount: 475.00
          }
        ],
        '50200 - Machinery/Transport Rental': [
          {
            type: 'Bill',
            date: '1/12/2025',
            docNumber: '104',
            name: 'HUT SERVICE PTE LTD',
            clr: 'F',
            split: '20010 - Accounts Payable : Trade Creditors',
            amount: 51100.00
          }
        ],
        '50500 - Consumables': [
          {
            type: 'Bill',
            date: '1/12/2025',
            docNumber: 'M2512012-CLAIMS',
            name: 'YI KWANG MATERIAL SUPPLIES PTE LTD',
            clr: 'F',
            split: '20010 - Accounts Payable : Trade Creditors',
            amount: 525.00
          },
          {
            type: 'Bill',
            date: '1/12/2025',
            docNumber: '2025-01558',
            name: 'U Office Chair Equipment Pte Ltd',
            clr: 'F',
            split: '20010 - Accounts Payable : Trade Creditors',
            amount: 51460.00
          },
          {
            type: 'Bill',
            date: '2/12/2025',
            docNumber: '13728',
            name: 'SIN HEAP CHUAN HARDWARE & ENGINEERING PTE LTD',
            clr: 'F',
            split: '20010 - Accounts Payable : Trade Creditors',
            amount: 5400.00
          }
        ]
      }
    },
    overheads: {
      '52000 - Facilities Related Expenses': {
        '52500 - Motor Vehicle Maintenance': [
          {
            type: 'Bill',
            date: '1/12/2025',
            docNumber: 'JTC00-00025987-GBD407R-CLAIMS',
            name: 'STAMFORD TYRES INTERNATIONAL PRIVATE LIMITED',
            clr: 'F',
            split: '20010 - Accounts Payable : Trade Creditors',
            amount: 596.33
          }
        ]
      }
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleRefresh = () => {
    showToast('Income Statement Detail refreshed successfully', 'success');
  };

  const handleCustomize = () => {
    showToast('Customization options will be available soon', 'info');
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const calculateTotals = () => {
    let salesTotal = 0;
    let purchasesTotal = 0;
    let overheadsTotal = 0;

    // Calculate sales total
    Object.values(detailedData.sales).forEach(category => {
      Object.values(category).forEach(transactions => {
        transactions.forEach(transaction => {
          salesTotal += transaction.amount;
        });
      });
    });

    // Calculate purchases total
    Object.values(detailedData.purchases).forEach(category => {
      Object.values(category).forEach(transactions => {
        transactions.forEach(transaction => {
          purchasesTotal += transaction.amount;
        });
      });
    });

    // Calculate overheads total
    Object.values(detailedData.overheads).forEach(category => {
      Object.values(category).forEach(transactions => {
        transactions.forEach(transaction => {
          overheadsTotal += transaction.amount;
        });
      });
    });

    return {
      sales: salesTotal,
      purchases: purchasesTotal,
      overheads: overheadsTotal,
      grossProfit: salesTotal - purchasesTotal,
      operatingProfit: salesTotal - purchasesTotal - overheadsTotal,
      netProfit: salesTotal - purchasesTotal - overheadsTotal
    };
  };

  const totals = calculateTotals();

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-list-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Income Statement Detail</h1>
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
              Income Statement Detail - Dec 2025 to Sep 2025
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
                  <th style={{ textAlign: 'center', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333', borderRight: '1px solid #ccc' }}>CLR</th>
                  <th style={{ textAlign: 'left', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333', borderRight: '1px solid #ccc' }}>SPLIT</th>
                  <th style={{ textAlign: 'right', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333' }}>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                {/* Sales Section */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td colSpan="8" style={{ padding: '4px 8px', fontWeight: 'bold', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa' }}>
                    Sales
                  </td>
                </tr>
                
                {Object.entries(detailedData.sales).map(([categoryKey, category]) => (
                  <React.Fragment key={categoryKey}>
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ padding: '3px 8px', paddingLeft: '20px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
                        {categoryKey}
                      </td>
                      <td colSpan="7" style={{ borderBottom: '1px solid #eee' }}></td>
                    </tr>
                    
                    {Object.entries(category).map(([subCategoryKey, transactions]) => (
                      <React.Fragment key={subCategoryKey}>
                        <tr style={{ backgroundColor: '#fff' }}>
                          <td style={{ padding: '3px 8px', paddingLeft: '40px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
                            {subCategoryKey}
                          </td>
                          <td colSpan="7" style={{ borderBottom: '1px solid #eee' }}></td>
                        </tr>
                        
                        {transactions.map((transaction, index) => (
                          <tr key={index} style={{ backgroundColor: '#fff' }}>
                            <td style={{ padding: '2px 8px', paddingLeft: '60px', borderBottom: '1px dotted #ddd' }}></td>
                            <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.type}</td>
                            <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.date}</td>
                            <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.docNumber}</td>
                            <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.name}</td>
                            <td style={{ padding: '2px 8px', textAlign: 'center', borderBottom: '1px dotted #ddd' }}>{transaction.clr}</td>
                            <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.split}</td>
                            <td style={{ padding: '2px 8px', textAlign: 'right', borderBottom: '1px dotted #ddd' }}>{formatCurrency(transaction.amount)}</td>
                          </tr>
                        ))}
                        
                        <tr style={{ backgroundColor: '#fff' }}>
                          <td style={{ padding: '3px 8px', paddingLeft: '50px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                            Total - {subCategoryKey}
                          </td>
                          <td colSpan="6" style={{ borderBottom: '1px solid #ddd' }}></td>
                          <td style={{ padding: '3px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                            {formatCurrency(transactions.reduce((sum, t) => sum + t.amount, 0))}
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                    
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ padding: '4px 8px', paddingLeft: '30px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                        Total - {categoryKey}
                      </td>
                      <td colSpan="6" style={{ borderBottom: '1px solid #ddd' }}></td>
                      <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                        {formatCurrency(Object.values(category).flat().reduce((sum, t) => sum + t.amount, 0))}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
                
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '4px 8px', paddingLeft: '15px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    Total - Sales
                  </td>
                  <td colSpan="6" style={{ borderBottom: '1px solid #ddd' }}></td>
                  <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    {formatCurrency(totals.sales)}
                  </td>
                </tr>

                {/* Purchases Section */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td colSpan="8" style={{ padding: '4px 8px', fontWeight: 'bold', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa' }}>
                    Purchases
                  </td>
                </tr>
                
                {Object.entries(detailedData.purchases).map(([categoryKey, category]) => (
                  <React.Fragment key={categoryKey}>
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ padding: '3px 8px', paddingLeft: '20px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
                        {categoryKey}
                      </td>
                      <td colSpan="7" style={{ borderBottom: '1px solid #eee' }}></td>
                    </tr>
                    
                    {Object.entries(category).map(([subCategoryKey, transactions]) => (
                      <React.Fragment key={subCategoryKey}>
                        <tr style={{ backgroundColor: '#fff' }}>
                          <td style={{ padding: '3px 8px', paddingLeft: '40px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
                            {subCategoryKey}
                          </td>
                          <td colSpan="7" style={{ borderBottom: '1px solid #eee' }}></td>
                        </tr>
                        
                        {transactions.map((transaction, index) => (
                          <tr key={index} style={{ backgroundColor: '#fff' }}>
                            <td style={{ padding: '2px 8px', paddingLeft: '60px', borderBottom: '1px dotted #ddd' }}></td>
                            <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.type}</td>
                            <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.date}</td>
                            <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.docNumber}</td>
                            <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.name}</td>
                            <td style={{ padding: '2px 8px', textAlign: 'center', borderBottom: '1px dotted #ddd' }}>{transaction.clr}</td>
                            <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.split}</td>
                            <td style={{ padding: '2px 8px', textAlign: 'right', borderBottom: '1px dotted #ddd' }}>{formatCurrency(transaction.amount)}</td>
                          </tr>
                        ))}
                        
                        <tr style={{ backgroundColor: '#fff' }}>
                          <td style={{ padding: '3px 8px', paddingLeft: '50px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                            Total - {subCategoryKey}
                          </td>
                          <td colSpan="6" style={{ borderBottom: '1px solid #ddd' }}></td>
                          <td style={{ padding: '3px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                            {formatCurrency(transactions.reduce((sum, t) => sum + t.amount, 0))}
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                    
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ padding: '4px 8px', paddingLeft: '30px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                        Total - {categoryKey}
                      </td>
                      <td colSpan="6" style={{ borderBottom: '1px solid #ddd' }}></td>
                      <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                        {formatCurrency(Object.values(category).flat().reduce((sum, t) => sum + t.amount, 0))}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
                
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '4px 8px', paddingLeft: '15px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    Total - Purchases
                  </td>
                  <td colSpan="6" style={{ borderBottom: '1px solid #ddd' }}></td>
                  <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                    {formatCurrency(totals.purchases)}
                  </td>
                </tr>

                {/* Gross Profit */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '4px 8px', paddingLeft: '15px', fontWeight: 'bold', borderBottom: '1px dotted #ccc' }}>
                    Gross Profit
                  </td>
                  <td colSpan="6" style={{ borderBottom: '1px dotted #ccc' }}></td>
                  <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px dotted #ccc' }}>
                    {formatCurrency(totals.grossProfit)}
                  </td>
                </tr>

                {/* Overheads Section */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td colSpan="8" style={{ padding: '4px 8px', fontWeight: 'bold', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa' }}>
                    Overheads
                  </td>
                </tr>
                
                {Object.entries(detailedData.overheads).map(([categoryKey, category]) => (
                  <React.Fragment key={categoryKey}>
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ padding: '3px 8px', paddingLeft: '20px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
                        {categoryKey}
                      </td>
                      <td colSpan="7" style={{ borderBottom: '1px solid #eee' }}></td>
                    </tr>
                    
                    {Object.entries(category).map(([subCategoryKey, transactions]) => (
                      <React.Fragment key={subCategoryKey}>
                        <tr style={{ backgroundColor: '#fff' }}>
                          <td style={{ padding: '3px 8px', paddingLeft: '40px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
                            {subCategoryKey}
                          </td>
                          <td colSpan="7" style={{ borderBottom: '1px solid #eee' }}></td>
                        </tr>
                        
                        {transactions.map((transaction, index) => (
                          <tr key={index} style={{ backgroundColor: '#fff' }}>
                            <td style={{ padding: '2px 8px', paddingLeft: '60px', borderBottom: '1px dotted #ddd' }}></td>
                            <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.type}</td>
                            <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.date}</td>
                            <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.docNumber}</td>
                            <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.name}</td>
                            <td style={{ padding: '2px 8px', textAlign: 'center', borderBottom: '1px dotted #ddd' }}>{transaction.clr}</td>
                            <td style={{ padding: '2px 8px', borderBottom: '1px dotted #ddd' }}>{transaction.split}</td>
                            <td style={{ padding: '2px 8px', textAlign: 'right', borderBottom: '1px dotted #ddd' }}>{formatCurrency(transaction.amount)}</td>
                          </tr>
                        ))}
                        
                        <tr style={{ backgroundColor: '#fff' }}>
                          <td style={{ padding: '3px 8px', paddingLeft: '50px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                            Total - {subCategoryKey}
                          </td>
                          <td colSpan="6" style={{ borderBottom: '1px solid #ddd' }}></td>
                          <td style={{ padding: '3px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                            {formatCurrency(transactions.reduce((sum, t) => sum + t.amount, 0))}
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                    
                    <tr style={{ backgroundColor: '#fff' }}>
                      <td style={{ padding: '4px 8px', paddingLeft: '30px', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                        Total - {categoryKey}
                      </td>
                      <td colSpan="6" style={{ borderBottom: '1px solid #ddd' }}></td>
                      <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
                        {formatCurrency(Object.values(category).flat().reduce((sum, t) => sum + t.amount, 0))}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
                
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '4px 8px', paddingLeft: '15px', fontWeight: 'bold', borderBottom: '1px dotted #ccc' }}>
                    Total - Overheads
                  </td>
                  <td colSpan="6" style={{ borderBottom: '1px dotted #ccc' }}></td>
                  <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px dotted #ccc' }}>
                    {formatCurrency(totals.overheads)}
                  </td>
                </tr>

                {/* Operating Profit */}
                <tr style={{ backgroundColor: '#fff' }}>
                  <td style={{ padding: '4px 8px', paddingLeft: '15px', fontWeight: 'bold', borderBottom: '1px dotted #ccc' }}>
                    Operating Profit
                  </td>
                  <td colSpan="6" style={{ borderBottom: '1px dotted #ccc' }}></td>
                  <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 'bold', borderBottom: '1px dotted #ccc' }}>
                    {formatCurrency(totals.operatingProfit)}
                  </td>
                </tr>

                {/* Net Profit */}
                <tr style={{ 
                  backgroundColor: '#e8e8e8', 
                  borderTop: '2px solid #333',
                  borderBottom: '2px solid #333'
                }}>
                  <td style={{ 
                    padding: '12px 8px', 
                    fontWeight: 'bold', 
                    fontSize: '15px', 
                    borderBottom: '2px solid #333',
                    color: '#333'
                  }}>
                    Net Profit/(Loss)
                  </td>
                  <td colSpan="6" style={{ borderBottom: '2px solid #333' }}></td>
                  <td style={{ 
                    padding: '12px 8px', 
                    textAlign: 'right', 
                    fontWeight: 'bold', 
                    fontSize: '15px', 
                    borderBottom: '2px solid #333',
                    color: '#333'
                  }}>
                    {formatCurrency(totals.netProfit)}
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

export default IncomeStatementDetail;
