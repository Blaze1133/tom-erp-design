import React, { useState } from 'react';
import './Enquiries.css';

const ViewDeposits = ({ setCurrentPage }) => {
  const [viewType, setViewType] = useState('Vendor Bills');

  // Dummy data for deposits
  const deposits = [
    {
      id: 1,
      orderType: 'Deposit',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      date: '31/3/2021',
      asOfDate: 'Mar 2021',
      period: 'Mar 2021',
      taxPeriod: '',
      documentNumber: '237',
      name: '',
      amountNetOfTax: 0.00,
      taxTotal: '',
      amount: 0.00,
      account: '11180 ALL Bank Accounts : TDQ DBS SGD 072-904177-1',
      memo: 'FROM TSV',
      status: 'VOID'
    },
    {
      id: 2,
      orderType: 'Deposit',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. (DQ)',
      date: '2/12/2021',
      asOfDate: 'Dec 2021',
      period: 'Dec 2021',
      taxPeriod: '',
      documentNumber: '32',
      name: '',
      amountNetOfTax: 15000.00,
      taxTotal: '',
      amount: 15000.00,
      account: '11180 ALL Bank Accounts : TDQ DBS SGD 072-904177-1',
      memo: 'FROM TSV',
      status: ''
    },
    {
      id: 3,
      orderType: 'Deposit',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      date: '2/12/2021',
      asOfDate: 'Dec 2021',
      period: 'Dec 2021',
      taxPeriod: '',
      documentNumber: '26',
      name: '',
      amountNetOfTax: 345582.50,
      taxTotal: '',
      amount: 345582.50,
      account: '11210 ALL Bank Accounts : MEP OCBC 501-136001',
      memo: 'INV ADV IPTPT1136001',
      status: ''
    },
    {
      id: 4,
      orderType: 'Deposit',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      date: '2/12/2021',
      asOfDate: 'Dec 2021',
      period: 'Dec 2021',
      taxPeriod: '',
      documentNumber: '10',
      name: '',
      amountNetOfTax: 1488.00,
      taxTotal: '',
      amount: 1488.00,
      account: '11180 ALL Bank Accounts : MEP DBS SGD 930-142-3',
      memo: 'CASH DEPOSIT',
      status: ''
    },
    {
      id: 5,
      orderType: 'Deposit',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      date: '2/12/2021',
      asOfDate: 'Dec 2021',
      period: 'Dec 2021',
      taxPeriod: '',
      documentNumber: '9',
      name: '',
      amountNetOfTax: 0.00,
      taxTotal: '',
      amount: 0.00,
      account: '11180 ALL Bank Accounts : MEP DBS SGD 930-142-3',
      memo: 'VOID',
      status: 'VOID'
    },
    {
      id: 6,
      orderType: 'Deposit',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      date: '3/12/2021',
      asOfDate: 'Dec 2021',
      period: 'Dec 2021',
      taxPeriod: '',
      documentNumber: '13',
      name: '',
      amountNetOfTax: 0.00,
      taxTotal: '',
      amount: 0.00,
      account: '11180 ALL Bank Accounts : MEP DBS SGD 930-142-3',
      memo: 'VOID',
      status: 'VOID'
    },
    {
      id: 7,
      orderType: 'Deposit',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      date: '3/12/2021',
      asOfDate: 'Dec 2021',
      period: 'Dec 2021',
      taxPeriod: '',
      documentNumber: '12',
      name: '',
      amountNetOfTax: 0.00,
      taxTotal: '',
      amount: 0.00,
      account: '11180 ALL Bank Accounts',
      memo: 'VOID',
      status: 'VOID'
    }
  ];

  const handleRowClick = (deposit) => {
    setCurrentPage('view-deposit-detail');
  };

  const handleNewTransaction = () => {
    setCurrentPage('make-deposit');
  };

  return (
    <div className="enquiries-list">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-university" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Deposits</h1>
        </div>
        <div className="page-actions">
          <button className="btn-view-option active">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      {/* Content Area */}
      <div style={{ padding: '24px' }}>
        <div style={{ background: 'white', borderRadius: '8px', padding: '20px' }}>
          
          {/* View and New Transaction */}
          <div className="list-controls">
            <div className="view-filter">
              <label>VIEW:</label>
              <select 
                className="form-control"
                value={viewType}
                onChange={(e) => setViewType(e.target.value)}
              >
                <option>Vendor Bills</option>
                <option>All Deposits</option>
                <option>Recent Deposits</option>
              </select>
            </div>
            <button className="btn-new-transaction" onClick={handleNewTransaction}>
              <i className="fas fa-plus"></i> New Transaction
            </button>
          </div>

          {/* Filters */}
          <div style={{ marginBottom: '20px' }}>
            <button style={{
              padding: '8px 20px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <i className="fas fa-filter"></i> FILTERS
            </button>
          </div>

          {/* Action Buttons and Sort */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
            paddingBottom: '12px',
            borderBottom: '1px solid #e0e0e0'
          }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{
                padding: '8px 16px',
                background: 'white',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                minWidth: '40px'
              }}>
                <i className="fas fa-download"></i>
              </button>
              <button style={{
                padding: '8px 16px',
                background: 'white',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                minWidth: '40px'
              }}>
                <i className="fas fa-save"></i>
              </button>
              <button style={{
                padding: '8px 16px',
                background: 'white',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                minWidth: '40px'
              }}>
                <i className="fas fa-print"></i>
              </button>
              <button style={{
                padding: '8px 20px',
                background: 'white',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                minWidth: '60px'
              }}>
                EDIT
              </button>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', color: '#666' }}>QUICK SORT:</span>
              <select style={{
                padding: '8px 16px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                cursor: 'pointer',
                background: 'white',
                minWidth: '150px'
              }}>
                <option>Date</option>
                <option>Document Number</option>
                <option>Amount</option>
              </select>
              <span style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>
                TOTAL: {deposits.length}
              </span>
            </div>
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              fontSize: '13px'
            }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #dee2e6' }}>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '100px' }}>
                    EDIT | VIEW
                  </th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '100px' }}>ORDER TYPE</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '200px' }}>SUBSIDIARY</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '100px' }}>DATE</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '110px' }}>AS-OF DATE</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '100px' }}>PERIOD</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '110px' }}>TAX PERIOD</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '140px' }}>DOCUMENT NUMBER</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '150px' }}>NAME</th>
                  <th style={{ padding: '14px 12px', textAlign: 'right', fontWeight: '600', color: '#495057', fontSize: '11px', width: '130px' }}>AMOUNT (NET OF TAX)</th>
                  <th style={{ padding: '14px 12px', textAlign: 'right', fontWeight: '600', color: '#495057', fontSize: '11px', width: '100px' }}>TAX TOTAL</th>
                  <th style={{ padding: '14px 12px', textAlign: 'right', fontWeight: '600', color: '#495057', fontSize: '11px', width: '100px' }}>AMOUNT</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '280px' }}>ACCOUNT</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '150px' }}>MEMO</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '150px' }}>MATERIAL SPECIFICATION</th>
                </tr>
              </thead>
              <tbody>
                {deposits.map((deposit) => (
                  <tr 
                    key={deposit.id}
                    style={{ 
                      borderBottom: '1px solid #dee2e6',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    onClick={() => handleRowClick(deposit)}
                  >
                    <td style={{ padding: '14px 12px' }}>
                      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentPage('edit-deposit');
                          }}
                          style={{
                            padding: '0',
                            background: 'none',
                            border: 'none',
                            color: '#4a90e2',
                            cursor: 'pointer',
                            fontSize: '12px',
                            textDecoration: 'none',
                            fontWeight: '400'
                          }}
                        >
                          Edit
                        </button>
                        <span style={{ color: '#ccc' }}>|</span>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentPage('view-deposit-detail');
                          }}
                          style={{
                            padding: '0',
                            background: 'none',
                            border: 'none',
                            color: '#4a90e2',
                            cursor: 'pointer',
                            fontSize: '12px',
                            textDecoration: 'none',
                            fontWeight: '400'
                          }}
                        >
                          View
                        </button>
                      </div>
                    </td>
                    <td style={{ padding: '14px 12px', color: '#333', fontSize: '12px' }}>{deposit.orderType}</td>
                    <td style={{ padding: '14px 12px', color: '#333', fontSize: '12px' }}>{deposit.subsidiary}</td>
                    <td style={{ padding: '14px 12px', color: '#333', fontSize: '12px' }}>{deposit.date}</td>
                    <td style={{ padding: '14px 12px', color: '#333', fontSize: '12px' }}>{deposit.asOfDate}</td>
                    <td style={{ padding: '14px 12px', color: '#333', fontSize: '12px' }}>{deposit.period}</td>
                    <td style={{ padding: '14px 12px', color: '#333', fontSize: '12px' }}>{deposit.taxPeriod || '-'}</td>
                    <td style={{ padding: '14px 12px', color: '#4a90e2', fontSize: '12px', fontWeight: '500' }}>{deposit.documentNumber}</td>
                    <td style={{ padding: '14px 12px', color: '#333', fontSize: '12px' }}>{deposit.name || '-'}</td>
                    <td style={{ padding: '14px 12px', color: '#333', textAlign: 'right', fontSize: '12px' }}>
                      {deposit.amountNetOfTax.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                    <td style={{ padding: '14px 12px', color: '#333', textAlign: 'right', fontSize: '12px' }}>
                      {deposit.taxTotal || '-'}
                    </td>
                    <td style={{ 
                      padding: '14px 12px', 
                      color: '#333', 
                      textAlign: 'right', 
                      fontWeight: '400',
                      fontSize: '12px'
                    }}>
                      {deposit.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                    <td style={{ padding: '14px 12px', color: '#4a90e2', fontSize: '12px' }}>{deposit.account}</td>
                    <td style={{ padding: '14px 12px', color: '#666', fontSize: '12px' }}>{deposit.memo}</td>
                    <td style={{ padding: '14px 12px', color: '#666', fontSize: '12px' }}>{deposit.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDeposits;
