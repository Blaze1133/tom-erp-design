import React, { useState } from 'react';
import './Enquiries.css';
import Toast from './Toast';

const ViewStockLedgerDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('transactions');

  const stockData = {
    id: 'STK-001',
    itemCode: 'PIPE-CS-100',
    itemName: 'Carbon Steel Pipe 100mm',
    category: 'Piping',
    uom: 'Meters',
    location: 'TOM-11',
    subsidiary: 'TOM Shipyard Pte Ltd',
    department: 'TOM: Production',
    openingBalance: 500,
    received: 200,
    issued: 350,
    currentBalance: 350,
    minStock: 100,
    maxStock: 1000,
    reorderLevel: 150,
    avgCost: 45.50,
    totalValue: 15925.00,
    lastTransaction: '2024-12-10',
    status: 'In Stock'
  };

  const transactions = [
    { 
      date: '2024-12-10', 
      transactionType: 'Issue', 
      referenceNo: 'ISS-2024-125', 
      quantity: 50, 
      unitCost: 45.50, 
      totalCost: 2275.00, 
      balance: 350,
      issuedTo: 'Project Alpha - Hull Assembly',
      remarks: 'Material issued for hull fabrication'
    },
    { 
      date: '2024-12-08', 
      transactionType: 'Receipt', 
      referenceNo: 'PO-2024-089', 
      quantity: 100, 
      unitCost: 45.00, 
      totalCost: 4500.00, 
      balance: 400,
      supplier: 'Steel Supply Co.',
      remarks: 'Purchase order delivery'
    },
    { 
      date: '2024-12-05', 
      transactionType: 'Issue', 
      referenceNo: 'ISS-2024-118', 
      quantity: 75, 
      unitCost: 46.00, 
      totalCost: 3450.00, 
      balance: 300,
      issuedTo: 'Project Beta - Piping Work',
      remarks: 'Material issued for piping installation'
    },
    { 
      date: '2024-12-03', 
      transactionType: 'Receipt', 
      referenceNo: 'PO-2024-082', 
      quantity: 100, 
      unitCost: 46.00, 
      totalCost: 4600.00, 
      balance: 375,
      supplier: 'Metal Works Ltd.',
      remarks: 'Purchase order delivery'
    },
    { 
      date: '2024-12-01', 
      transactionType: 'Adjustment', 
      referenceNo: 'ADJ-2024-015', 
      quantity: -25, 
      unitCost: 45.50, 
      totalCost: -1137.50, 
      balance: 275,
      remarks: 'Stock adjustment - damaged material written off'
    },
    { 
      date: '2024-11-28', 
      transactionType: 'Issue', 
      referenceNo: 'ISS-2024-105', 
      quantity: 100, 
      unitCost: 45.50, 
      totalCost: 4550.00, 
      balance: 300,
      issuedTo: 'Project Gamma - Structure',
      remarks: 'Material issued for structural work'
    },
    { 
      date: '2024-11-25', 
      transactionType: 'Receipt', 
      referenceNo: 'PO-2024-075', 
      quantity: 200, 
      unitCost: 45.50, 
      totalCost: 9100.00, 
      balance: 400,
      supplier: 'Steel Supply Co.',
      remarks: 'Bulk purchase order delivery'
    },
    { 
      date: '2024-11-20', 
      transactionType: 'Transfer In', 
      referenceNo: 'TRF-2024-032', 
      quantity: 50, 
      unitCost: 45.50, 
      totalCost: 2275.00, 
      balance: 200,
      remarks: 'Transfer from Mega yard warehouse'
    },
    { 
      date: '2024-11-15', 
      transactionType: 'Issue', 
      referenceNo: 'ISS-2024-092', 
      quantity: 150, 
      unitCost: 45.50, 
      totalCost: 6825.00, 
      balance: 150,
      issuedTo: 'Project Delta - Fabrication',
      remarks: 'Material issued for fabrication work'
    },
    { 
      date: '2024-11-01', 
      transactionType: 'Opening Balance', 
      referenceNo: 'OB-2024-11', 
      quantity: 300, 
      unitCost: 45.50, 
      totalCost: 13650.00, 
      balance: 300,
      remarks: 'Opening balance for November 2024'
    }
  ];

  const monthlyMovement = [
    { month: 'December 2024', opening: 300, received: 200, issued: 150, adjustment: -25, closing: 325 },
    { month: 'November 2024', opening: 500, received: 250, issued: 250, adjustment: 0, closing: 500 },
    { month: 'October 2024', opening: 450, received: 300, issued: 250, adjustment: 0, closing: 500 },
    { month: 'September 2024', opening: 400, received: 200, issued: 150, adjustment: 0, closing: 450 }
  ];

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-stock-ledger');
    }
  };

  const getTransactionColor = (type) => {
    switch (type) {
      case 'Receipt':
      case 'Transfer In':
        return '#4caf50';
      case 'Issue':
      case 'Transfer Out':
        return '#f44336';
      case 'Adjustment':
        return '#ff9800';
      case 'Opening Balance':
        return '#2196f3';
      default:
        return '#333';
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-book"></i>
          <div>
            <h1>Stock Ledger - Item Details</h1>
            <div className="detail-subtitle">
              <span>{stockData.itemCode} - {stockData.itemName}</span>
              <span 
                className="status-badge"
                style={{ 
                  backgroundColor: stockData.status === 'In Stock' ? '#e8f5e9' : '#ffebee',
                  color: '#333',
                  padding: '4px 12px',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontWeight: '500',
                  marginLeft: '1rem'
                }}
              >
                {stockData.status}
              </span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-file-export"></i>
          Export
        </button>
      </div>

      <div className="detail-content">
        {/* Item Information */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Item Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>ITEM CODE</label>
                <div className="field-value">{stockData.itemCode}</div>
              </div>
              <div className="detail-field">
                <label>ITEM NAME</label>
                <div className="field-value">{stockData.itemName}</div>
              </div>
              <div className="detail-field">
                <label>CATEGORY</label>
                <div className="field-value">{stockData.category}</div>
              </div>
              <div className="detail-field">
                <label>UNIT OF MEASURE</label>
                <div className="field-value">{stockData.uom}</div>
              </div>
              <div className="detail-field">
                <label>LOCATION</label>
                <div className="field-value">{stockData.location}</div>
              </div>
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{stockData.subsidiary}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stock Summary */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Stock Summary</h3>
          </div>
          <div className="section-body">
            <div className="items-table-container">
              <table className="items-table">
                <thead>
                  <tr>
                    <th style={{ width: '12%' }}>OPENING BALANCE</th>
                    <th style={{ width: '12%' }}>RECEIVED</th>
                    <th style={{ width: '12%' }}>ISSUED</th>
                    <th style={{ width: '12%' }}>CURRENT BALANCE</th>
                    <th style={{ width: '12%' }}>MIN STOCK</th>
                    <th style={{ width: '12%' }}>MAX STOCK</th>
                    <th style={{ width: '14%' }}>AVG COST</th>
                    <th style={{ width: '14%' }}>TOTAL VALUE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ textAlign: 'right' }}>{stockData.openingBalance.toLocaleString()}</td>
                    <td style={{ textAlign: 'right', color: '#4caf50', fontWeight: '600' }}>{stockData.received.toLocaleString()}</td>
                    <td style={{ textAlign: 'right', color: '#f44336', fontWeight: '600' }}>{stockData.issued.toLocaleString()}</td>
                    <td style={{ textAlign: 'right', fontWeight: '700', fontSize: '14px' }}>{stockData.currentBalance.toLocaleString()}</td>
                    <td style={{ textAlign: 'right' }}>{stockData.minStock.toLocaleString()}</td>
                    <td style={{ textAlign: 'right' }}>{stockData.maxStock.toLocaleString()}</td>
                    <td style={{ textAlign: 'right' }}>SGD {stockData.avgCost.toFixed(2)}</td>
                    <td style={{ textAlign: 'right', fontWeight: '600' }}>SGD {stockData.totalValue.toLocaleString('en-SG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-section">
          <div className="tabs-container">
            {['transactions', 'monthly'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{ 
                  background: activeTab === tab ? 'white' : 'transparent', 
                  border: 'none', 
                  padding: '10px 20px', 
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: activeTab === tab ? '600' : '500',
                  color: activeTab === tab ? '#333' : 'white',
                  borderRadius: '4px 4px 0 0',
                  whiteSpace: 'nowrap',
                  textTransform: 'capitalize'
                }}
              >
                {tab === 'transactions' ? 'Transaction History' : 'Monthly Movement'}
              </button>
            ))}
          </div>

          <div className="section-body">
            {/* Transaction History Tab */}
            {activeTab === 'transactions' && (
              <div>
                <h3 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '1rem' }}>Transaction History</h3>
                <div className="items-table-container">
                  <table className="items-table">
                    <thead>
                      <tr>
                        <th style={{ width: '8%' }}>DATE</th>
                        <th style={{ width: '10%' }}>TYPE</th>
                        <th style={{ width: '12%' }}>REFERENCE NO</th>
                        <th style={{ width: '8%' }}>QUANTITY</th>
                        <th style={{ width: '10%' }}>UNIT COST</th>
                        <th style={{ width: '10%' }}>TOTAL COST</th>
                        <th style={{ width: '8%' }}>BALANCE</th>
                        <th style={{ width: '34%' }}>REMARKS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((txn, index) => (
                        <tr key={index}>
                          <td>{new Date(txn.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                          <td>
                            <span style={{ 
                              color: getTransactionColor(txn.transactionType),
                              fontWeight: '600'
                            }}>
                              {txn.transactionType}
                            </span>
                          </td>
                          <td>{txn.referenceNo}</td>
                          <td style={{ 
                            textAlign: 'right',
                            color: txn.quantity > 0 ? '#4caf50' : '#f44336',
                            fontWeight: '600'
                          }}>
                            {txn.quantity > 0 ? '+' : ''}{txn.quantity.toLocaleString()}
                          </td>
                          <td style={{ textAlign: 'right' }}>SGD {txn.unitCost.toFixed(2)}</td>
                          <td style={{ textAlign: 'right' }}>SGD {txn.totalCost.toLocaleString('en-SG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                          <td style={{ textAlign: 'right', fontWeight: '600' }}>{txn.balance.toLocaleString()}</td>
                          <td>{txn.remarks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Monthly Movement Tab */}
            {activeTab === 'monthly' && (
              <div>
                <h3 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '1rem' }}>Monthly Stock Movement</h3>
                <div className="items-table-container">
                  <table className="items-table">
                    <thead>
                      <tr>
                        <th style={{ width: '20%' }}>MONTH</th>
                        <th style={{ width: '16%' }}>OPENING BALANCE</th>
                        <th style={{ width: '16%' }}>RECEIVED</th>
                        <th style={{ width: '16%' }}>ISSUED</th>
                        <th style={{ width: '16%' }}>ADJUSTMENT</th>
                        <th style={{ width: '16%' }}>CLOSING BALANCE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {monthlyMovement.map((month, index) => (
                        <tr key={index}>
                          <td style={{ fontWeight: '600' }}>{month.month}</td>
                          <td style={{ textAlign: 'right' }}>{month.opening.toLocaleString()}</td>
                          <td style={{ textAlign: 'right', color: '#4caf50', fontWeight: '600' }}>{month.received.toLocaleString()}</td>
                          <td style={{ textAlign: 'right', color: '#f44336', fontWeight: '600' }}>{month.issued.toLocaleString()}</td>
                          <td style={{ textAlign: 'right', color: month.adjustment < 0 ? '#f44336' : '#4caf50' }}>
                            {month.adjustment !== 0 ? (month.adjustment > 0 ? '+' : '') + month.adjustment.toLocaleString() : '-'}
                          </td>
                          <td style={{ textAlign: 'right', fontWeight: '700', fontSize: '14px' }}>{month.closing.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="detail-footer">
          <button className="btn-toolbar" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn-toolbar">
            <i className="fas fa-print"></i>
            Print Ledger
          </button>
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

export default ViewStockLedgerDetail;
