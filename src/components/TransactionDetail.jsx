import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const TransactionDetail = ({ onViewDetailClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [fromDate, setFromDate] = useState('1/12/2025');
  const [toDate, setToDate] = useState('31/12/2025');
  const [subsidiary, setSubsidiary] = useState('Tech Onshore MEP P...td. (Consolidated)');
  const [column, setColumn] = useState('Total');

  // Sample Transaction Detail Data
  const transactionData = {
    transactions: [
      {
        type: 'Bill',
        date: '1/12/2025',
        docNumber: '2025-01558',
        name: 'U Office Chair Equipment Pte Ltd',
        memo: '',
        account: 'Accounts Payable : Trade Creditors',
        clr: 'F',
        split: 'Split',
        qty: '',
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
        memo: '50 x 25mm x 2mm thk Aluminium rectangular hollow section',
        account: 'Cost of Sales : Material Purchase',
        clr: 'F',
        split: '20010 - Accounts Payable : Trade Creditors',
        qty: '',
        amount: 5475.00
      },
      {
        type: 'Bill',
        date: '1/12/2025',
        docNumber: '8464',
        name: 'KIAN HUAT HARDWARE COMPANY',
        memo: 'VAT',
        account: 'Accounts Payable : Trade Creditors',
        clr: 'F',
        split: 'Split',
        qty: '',
        amount: -581.75
      },
      {
        type: 'Bill',
        date: '1/12/2025',
        docNumber: 'JTC00-00025987-GBD407R-CLAIMS',
        name: 'STAMFORD TYRES INTERNATIONAL PRIVATE LIMITED',
        memo: 'VAT',
        account: 'GST on Purchases SG',
        clr: 'F',
        split: '20010 - Accounts Payable : Trade Creditors',
        qty: -1,
        amount: 588.67
      },
      {
        type: 'Bill',
        date: '1/12/2025',
        docNumber: 'JTC00-00025987-GBD407R-CLAIMS',
        name: 'STAMFORD TYRES INTERNATIONAL PRIVATE LIMITED',
        memo: 'TYRE BALANCING - 195815',
        account: 'Facilities Related Expenses : Motor Vehicle Maintenance',
        clr: 'F',
        split: '20010 - Accounts Payable : Trade Creditors',
        qty: 2,
        amount: 5836.70
      },
      {
        type: 'Bill',
        date: '1/12/2025',
        docNumber: 'JTC00-00025987-GBD407R-CLAIMS',
        name: 'STAMFORD TYRES INTERNATIONAL PRIVATE LIMITED',
        memo: 'WHEEL ALIGNMENT - 2 WHEELS FOR 10FT VAN',
        account: 'Facilities Related Expenses : Motor Vehicle Maintenance',
        clr: 'F',
        split: '20010 - Accounts Payable : Trade Creditors',
        qty: 1,
        amount: 5359.63
      },
      {
        type: 'Bill',
        date: '1/12/2025',
        docNumber: 'JTC00-00025987-GBD407R-CLAIMS',
        name: 'STAMFORD TYRES INTERNATIONAL PRIVATE LIMITED',
        memo: '',
        account: 'Accounts Payable : Trade Creditors',
        clr: 'F',
        split: 'Split',
        qty: '',
        amount: -56105.00
      },
      {
        type: 'Bill',
        date: '1/12/2025',
        docNumber: 'M2512013-CLAIMS',
        name: 'YI KWANG MATERIAL SUPPLIES PTE LTD',
        memo: 'VAT',
        account: 'GST on Purchases SG',
        clr: 'F',
        split: '20010 - Accounts Payable : Trade Creditors',
        qty: -1,
        amount: 5412.15
      },
      {
        type: 'Bill',
        date: '1/12/2025',
        docNumber: 'M2512013-CLAIMS',
        name: 'YI KWANG MATERIAL SUPPLIES PTE LTD',
        memo: 'SIZE: 100MM(L) x 62MM(H) MATERIAL : 1MMTHICK SS 316 , WITH ETCHING, 4HOLES GOD RED TEXT',
        account: 'Cost of Sales : Consumables',
        clr: 'F',
        split: '20010 - Accounts Payable : Trade Creditors',
        qty: -1,
        amount: 55135.00
      },
      {
        type: 'Bill',
        date: '1/12/2025',
        docNumber: 'M2512013-CLAIMS',
        name: 'YI KWANG MATERIAL SUPPLIES PTE LTD',
        memo: 'VAT',
        account: 'Accounts Payable : Trade Creditors',
        clr: 'F',
        split: 'Split',
        qty: '',
        amount: -56147.15
      },
      {
        type: 'Bill',
        date: '1/12/2025',
        docNumber: 'M2512012-CLAIMS',
        name: 'YI KWANG MATERIAL SUPPLIES PTE LTD',
        memo: 'VAT',
        account: 'GST on Purchases SG',
        clr: 'F',
        split: '20010 - Accounts Payable : Trade Creditors',
        qty: -1,
        amount: 592.25
      },
      {
        type: 'Bill',
        date: '1/12/2025',
        docNumber: 'M2512012-CLAIMS',
        name: 'YI KWANG MATERIAL SUPPLIES PTE LTD',
        memo: 'Size : 355mm Width + 60mm bending on all 4 sides , Height : 200mm Material : 3mmthk clear acrylic box',
        account: 'Cost of Sales : Consumables',
        clr: 'F',
        split: '20010 - Accounts Payable : Trade Creditors',
        qty: 1,
        amount: 5525.00
      }
    ],
    total: -153213.0
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleRefresh = () => {
    showToast('Transaction Detail refreshed successfully', 'success');
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
          <i className="fas fa-receipt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Transaction Detail</h1>
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
              <input 
                type="date"
                className="form-control"
                value="2025-12-01"
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">TO</label>
              <input 
                type="date"
                className="form-control"
                value="2025-12-31"
                onChange={(e) => setToDate(e.target.value)}
              />
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

        {/* Transaction Detail Table */}
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
              Transaction Detail - {fromDate} to {toDate}
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
            minWidth: '1300px',
            maxWidth: '100vw'
          }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse', 
              fontSize: 'clamp(10px, 1.0vw, 12px)', 
              fontFamily: 'Arial, sans-serif', 
              minWidth: '1300px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#e6e6e6', borderBottom: '1px solid #ccc' }}>
                  <th style={{ 
                    textAlign: 'left', 
                    padding: '8px 6px', 
                    fontWeight: 'bold', 
                    fontSize: '11px',
                    color: '#333',
                    borderRight: '1px solid #ccc',
                    width: '60px'
                  }}>
                    TYPE
                  </th>
                  <th style={{ 
                    textAlign: 'left', 
                    padding: '8px 6px', 
                    fontWeight: 'bold', 
                    fontSize: '11px',
                    color: '#333',
                    borderRight: '1px solid #ccc',
                    width: '80px'
                  }}>
                    DATE
                  </th>
                  <th style={{ 
                    textAlign: 'left', 
                    padding: '8px 6px', 
                    fontWeight: 'bold', 
                    fontSize: '11px',
                    color: '#333',
                    borderRight: '1px solid #ccc',
                    width: '120px'
                  }}>
                    DOCUMENT NUMBER
                  </th>
                  <th style={{ 
                    textAlign: 'left', 
                    padding: '8px 6px', 
                    fontWeight: 'bold', 
                    fontSize: '11px',
                    color: '#333',
                    borderRight: '1px solid #ccc',
                    width: '200px'
                  }}>
                    NAME
                  </th>
                  <th style={{ 
                    textAlign: 'left', 
                    padding: '8px 6px', 
                    fontWeight: 'bold', 
                    fontSize: '11px',
                    color: '#333',
                    borderRight: '1px solid #ccc',
                    width: '250px'
                  }}>
                    MEMO
                  </th>
                  <th style={{ 
                    textAlign: 'left', 
                    padding: '8px 6px', 
                    fontWeight: 'bold', 
                    fontSize: '11px',
                    color: '#333',
                    borderRight: '1px solid #ccc',
                    width: '200px'
                  }}>
                    ACCOUNT
                  </th>
                  <th style={{ 
                    textAlign: 'center', 
                    padding: '8px 6px', 
                    fontWeight: 'bold', 
                    fontSize: '11px',
                    color: '#333',
                    borderRight: '1px solid #ccc',
                    width: '40px'
                  }}>
                    CLR
                  </th>
                  <th style={{ 
                    textAlign: 'left', 
                    padding: '8px 6px', 
                    fontWeight: 'bold', 
                    fontSize: '11px',
                    color: '#333',
                    borderRight: '1px solid #ccc',
                    width: '150px'
                  }}>
                    SPLIT
                  </th>
                  <th style={{ 
                    textAlign: 'center', 
                    padding: '8px 6px', 
                    fontWeight: 'bold', 
                    fontSize: '11px',
                    color: '#333',
                    borderRight: '1px solid #ccc',
                    width: '50px'
                  }}>
                    QTY
                  </th>
                  <th style={{ 
                    textAlign: 'right', 
                    padding: '8px 6px', 
                    fontWeight: 'bold', 
                    fontSize: '11px',
                    color: '#333',
                    width: '100px'
                  }}>
                    AMOUNT
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactionData.transactions.map((transaction, index) => (
                  <tr key={index} style={{ backgroundColor: '#fff' }}>
                    <td style={{ 
                      padding: '4px 6px', 
                      borderRight: '1px solid #ddd',
                      borderBottom: '1px dotted #ddd',
                      fontSize: '11px'
                    }}>
                      {transaction.type}
                    </td>
                    <td style={{ 
                      padding: '4px 6px', 
                      borderRight: '1px solid #ddd',
                      borderBottom: '1px dotted #ddd',
                      fontSize: '11px'
                    }}>
                      {transaction.date}
                    </td>
                    <td style={{ 
                      padding: '4px 6px', 
                      borderRight: '1px solid #ddd',
                      borderBottom: '1px dotted #ddd',
                      fontSize: '11px'
                    }}>
                      {transaction.docNumber}
                    </td>
                    <td style={{ 
                      padding: '4px 6px', 
                      borderRight: '1px solid #ddd',
                      borderBottom: '1px dotted #ddd',
                      fontSize: '11px'
                    }}>
                      {transaction.name}
                    </td>
                    <td style={{ 
                      padding: '4px 6px', 
                      borderRight: '1px solid #ddd',
                      borderBottom: '1px dotted #ddd',
                      fontSize: '11px',
                      maxWidth: '250px',
                      wordWrap: 'break-word'
                    }}>
                      {transaction.memo}
                    </td>
                    <td style={{ 
                      padding: '4px 6px', 
                      borderRight: '1px solid #ddd',
                      borderBottom: '1px dotted #ddd',
                      fontSize: '11px'
                    }}>
                      {transaction.account}
                    </td>
                    <td style={{ 
                      padding: '4px 6px', 
                      textAlign: 'center',
                      borderRight: '1px solid #ddd',
                      borderBottom: '1px dotted #ddd',
                      fontSize: '11px'
                    }}>
                      {transaction.clr}
                    </td>
                    <td style={{ 
                      padding: '4px 6px', 
                      borderRight: '1px solid #ddd',
                      borderBottom: '1px dotted #ddd',
                      fontSize: '11px'
                    }}>
                      {transaction.split}
                    </td>
                    <td style={{ 
                      padding: '4px 6px', 
                      textAlign: 'center',
                      borderRight: '1px solid #ddd',
                      borderBottom: '1px dotted #ddd',
                      fontSize: '11px'
                    }}>
                      {transaction.qty}
                    </td>
                    <td style={{ 
                      padding: '4px 6px', 
                      textAlign: 'right',
                      borderBottom: '1px dotted #ddd',
                      fontSize: '11px'
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
                    padding: '12px 8px', 
                    fontWeight: 'bold',
                    fontSize: '14px',
                    color: '#333'
                  }}>
                    Total
                  </td>
                  <td style={{ 
                    textAlign: 'right', 
                    padding: '12px 8px',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    color: '#333'
                  }}>
                    {formatAmount(transactionData.total)}
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

export default TransactionDetail;
