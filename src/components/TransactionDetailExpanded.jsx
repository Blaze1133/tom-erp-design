import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const TransactionDetailExpanded = ({ onBackClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Sample expanded Transaction Detail data with more transactions
  const expandedData = {
    transactions: [
      {
        type: 'Bill',
        date: '1/12/2025',
        docNumber: '2025-01558',
        name: 'U Office Chair Equipment Pte Ltd',
        memo: 'Office furniture purchase for new employees',
        account: 'Accounts Payable : Trade Creditors',
        clr: 'F',
        split: 'Split',
        qty: 5,
        amount: 51491.40
      },
      {
        type: 'Bill',
        date: '1/12/2025',
        docNumber: '8464',
        name: 'KIAN HUAT HARDWARE COMPANY',
        memo: 'VAT',
        account: 'GST on Purchases SG',
        clr: 'F',
        split: '20010 - Accounts Payable : Trade Creditors',
        qty: -1,
        amount: 546.75
      },
      {
        type: 'Bill',
        date: '1/12/2025',
        docNumber: '8464',
        name: 'KIAN HUAT HARDWARE COMPANY',
        memo: '50 x 25mm x 2mm thk Aluminium rectangular hollow section for project framework',
        account: 'Cost of Sales : Material Purchase',
        clr: 'F',
        split: '20010 - Accounts Payable : Trade Creditors',
        qty: 50,
        amount: 5475.00
      },
      {
        type: 'Invoice',
        date: '2/12/2025',
        docNumber: 'INV-2025-001',
        name: 'SHINEVO CORPORATION',
        memo: 'Monthly service charges for December 2025',
        account: 'Accounts Receivable : Trade Debtors',
        clr: 'F',
        split: '40000 - Sales Revenue',
        qty: 1,
        amount: 125000.00
      },
      {
        type: 'Payment',
        date: '3/12/2025',
        docNumber: 'PAY-001',
        name: 'TSV SALARY-WAGES',
        memo: 'Monthly salary payment for December 2025',
        account: 'Payroll Expenses : Salaries',
        clr: 'F',
        split: '11110 - TSV DBS SGD 072-004442-8',
        qty: 1,
        amount: -85000.00
      },
      {
        type: 'Journal',
        date: '5/12/2025',
        docNumber: 'JE-2025-012',
        name: 'Monthly Depreciation Entry',
        memo: 'Depreciation for office equipment and machinery',
        account: 'Depreciation Expense',
        clr: 'F',
        split: 'Accumulated Depreciation',
        qty: 1,
        amount: -12500.00
      },
      {
        type: 'Bill',
        date: '7/12/2025',
        docNumber: 'UTIL-001',
        name: 'SP SERVICES LTD',
        memo: 'Electricity bill for November 2025',
        account: 'Utilities Expense',
        clr: 'F',
        split: '20010 - Accounts Payable : Trade Creditors',
        qty: 1,
        amount: 3250.00
      },
      {
        type: 'Check',
        date: '10/12/2025',
        docNumber: 'CHK-001',
        name: 'OFFICE SUPPLIES PTE LTD',
        memo: 'Stationery and office supplies for Q4',
        account: 'Office Supplies Expense',
        clr: 'F',
        split: '11110 - TSV DBS SGD 072-004442-8',
        qty: 1,
        amount: -1850.00
      },
      {
        type: 'Bill',
        date: '12/12/2025',
        docNumber: 'RENT-001',
        name: 'PROPERTY MANAGEMENT PTE LTD',
        memo: 'Office rent for December 2025',
        account: 'Rent Expense',
        clr: 'F',
        split: '20010 - Accounts Payable : Trade Creditors',
        qty: 1,
        amount: 15000.00
      },
      {
        type: 'Invoice',
        date: '15/12/2025',
        docNumber: 'INV-2025-002',
        name: 'TECH MARINE OFFSHORE (S) PTE LTD',
        memo: 'Intercompany service charges',
        account: 'Intercompany Receivables',
        clr: 'F',
        split: 'Intercompany Revenue',
        qty: 1,
        amount: 75000.00
      },
      {
        type: 'Payment',
        date: '18/12/2025',
        docNumber: 'PAY-002',
        name: 'CPF BOARD',
        memo: 'CPF contributions for December 2025',
        account: 'CPF Expense',
        clr: 'F',
        split: '11110 - TSV DBS SGD 072-004442-8',
        qty: 1,
        amount: -18500.00
      },
      {
        type: 'Bill',
        date: '20/12/2025',
        docNumber: 'INS-001',
        name: 'GREAT EASTERN INSURANCE',
        memo: 'Annual insurance premium payment',
        account: 'Insurance Expense',
        clr: 'F',
        split: '20010 - Accounts Payable : Trade Creditors',
        qty: 1,
        amount: 8750.00
      },
      {
        type: 'Journal',
        date: '25/12/2025',
        docNumber: 'JE-2025-013',
        name: 'Accrued Interest Entry',
        memo: 'Accrued interest on bank deposits',
        account: 'Interest Income',
        clr: 'F',
        split: 'Accrued Interest Receivable',
        qty: 1,
        amount: 2500.00
      },
      {
        type: 'Check',
        date: '28/12/2025',
        docNumber: 'CHK-002',
        name: 'MAINTENANCE SERVICES PTE LTD',
        memo: 'Monthly maintenance for office equipment',
        account: 'Maintenance Expense',
        clr: 'F',
        split: '11110 - TSV DBS SGD 072-004442-8',
        qty: 1,
        amount: -4200.00
      },
      {
        type: 'Bill',
        date: '30/12/2025',
        docNumber: 'PROF-001',
        name: 'ACCOUNTING FIRM PTE LTD',
        memo: 'Professional services for year-end audit',
        account: 'Professional Fees',
        clr: 'F',
        split: '20010 - Accounts Payable : Trade Creditors',
        qty: 1,
        amount: 25000.00
      }
    ],
    total: 168462.15
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleRefresh = () => {
    showToast('Transaction Detail Expanded refreshed successfully', 'success');
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
          <h1>Transaction Detail - Expanded View</h1>
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
              Transaction Detail Expanded - 1/12/2025 to 31/12/2025
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
            minWidth: '1400px',
            maxWidth: '100vw'
          }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse', 
              fontSize: 'clamp(9px, 0.9vw, 11px)', 
              fontFamily: 'Arial, sans-serif',
              minWidth: '1400px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#e6e6e6', borderBottom: '1px solid #ccc' }}>
                  <th style={{ textAlign: 'left', padding: '6px 4px', fontWeight: 'bold', fontSize: '10px', color: '#333', borderRight: '1px solid #ccc', width: '50px' }}>TYPE</th>
                  <th style={{ textAlign: 'left', padding: '6px 4px', fontWeight: 'bold', fontSize: '10px', color: '#333', borderRight: '1px solid #ccc', width: '70px' }}>DATE</th>
                  <th style={{ textAlign: 'left', padding: '6px 4px', fontWeight: 'bold', fontSize: '10px', color: '#333', borderRight: '1px solid #ccc', width: '120px' }}>DOCUMENT NUMBER</th>
                  <th style={{ textAlign: 'left', padding: '6px 4px', fontWeight: 'bold', fontSize: '10px', color: '#333', borderRight: '1px solid #ccc', width: '180px' }}>NAME</th>
                  <th style={{ textAlign: 'left', padding: '6px 4px', fontWeight: 'bold', fontSize: '10px', color: '#333', borderRight: '1px solid #ccc', width: '300px' }}>MEMO</th>
                  <th style={{ textAlign: 'left', padding: '6px 4px', fontWeight: 'bold', fontSize: '10px', color: '#333', borderRight: '1px solid #ccc', width: '180px' }}>ACCOUNT</th>
                  <th style={{ textAlign: 'center', padding: '6px 4px', fontWeight: 'bold', fontSize: '10px', color: '#333', borderRight: '1px solid #ccc', width: '35px' }}>CLR</th>
                  <th style={{ textAlign: 'left', padding: '6px 4px', fontWeight: 'bold', fontSize: '10px', color: '#333', borderRight: '1px solid #ccc', width: '150px' }}>SPLIT</th>
                  <th style={{ textAlign: 'center', padding: '6px 4px', fontWeight: 'bold', fontSize: '10px', color: '#333', borderRight: '1px solid #ccc', width: '40px' }}>QTY</th>
                  <th style={{ textAlign: 'right', padding: '6px 4px', fontWeight: 'bold', fontSize: '10px', color: '#333', width: '90px' }}>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                {expandedData.transactions.map((transaction, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f9f9f9' }}>
                    <td style={{ 
                      padding: '3px 4px', 
                      borderRight: '1px solid #ddd',
                      borderBottom: '1px dotted #ddd',
                      fontSize: '10px'
                    }}>
                      {transaction.type}
                    </td>
                    <td style={{ 
                      padding: '3px 4px', 
                      borderRight: '1px solid #ddd',
                      borderBottom: '1px dotted #ddd',
                      fontSize: '10px'
                    }}>
                      {transaction.date}
                    </td>
                    <td style={{ 
                      padding: '3px 4px', 
                      borderRight: '1px solid #ddd',
                      borderBottom: '1px dotted #ddd',
                      fontSize: '10px'
                    }}>
                      {transaction.docNumber}
                    </td>
                    <td style={{ 
                      padding: '3px 4px', 
                      borderRight: '1px solid #ddd',
                      borderBottom: '1px dotted #ddd',
                      fontSize: '10px'
                    }}>
                      {transaction.name}
                    </td>
                    <td style={{ 
                      padding: '3px 4px', 
                      borderRight: '1px solid #ddd',
                      borderBottom: '1px dotted #ddd',
                      fontSize: '10px',
                      maxWidth: '300px',
                      wordWrap: 'break-word'
                    }}>
                      {transaction.memo}
                    </td>
                    <td style={{ 
                      padding: '3px 4px', 
                      borderRight: '1px solid #ddd',
                      borderBottom: '1px dotted #ddd',
                      fontSize: '10px'
                    }}>
                      {transaction.account}
                    </td>
                    <td style={{ 
                      padding: '3px 4px', 
                      textAlign: 'center',
                      borderRight: '1px solid #ddd',
                      borderBottom: '1px dotted #ddd',
                      fontSize: '10px'
                    }}>
                      {transaction.clr}
                    </td>
                    <td style={{ 
                      padding: '3px 4px', 
                      borderRight: '1px solid #ddd',
                      borderBottom: '1px dotted #ddd',
                      fontSize: '10px'
                    }}>
                      {transaction.split}
                    </td>
                    <td style={{ 
                      padding: '3px 4px', 
                      textAlign: 'center',
                      borderRight: '1px solid #ddd',
                      borderBottom: '1px dotted #ddd',
                      fontSize: '10px'
                    }}>
                      {transaction.qty}
                    </td>
                    <td style={{ 
                      padding: '3px 4px', 
                      textAlign: 'right',
                      borderBottom: '1px dotted #ddd',
                      fontSize: '10px'
                    }}>
                      {formatAmount(transaction.amount)}
                    </td>
                  </tr>
                ))}

                {/* Total Row */}
                <tr style={{ 
                  backgroundColor: '#e8e8e8', 
                  borderTop: '2px solid #333',
                  borderBottom: '2px solid #333'
                }}>
                  <td colSpan="9" style={{ 
                    padding: '10px 8px', 
                    fontWeight: 'bold',
                    fontSize: '13px',
                    color: '#333'
                  }}>
                    Total
                  </td>
                  <td style={{ 
                    textAlign: 'right', 
                    padding: '10px 8px',
                    fontWeight: 'bold',
                    fontSize: '13px',
                    color: '#333'
                  }}>
                    {formatAmount(expandedData.total)}
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

export default TransactionDetailExpanded;
