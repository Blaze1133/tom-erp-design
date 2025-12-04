import React, { useState } from 'react';
import './Enquiries.css';

const ViewChecks = ({ setCurrentPage }) => {
  const [viewType, setViewType] = useState('Search Project');

  // Dummy data for checks
  const checks = [
    {
      id: 1,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      checkDate: '1/11/2021',
      accountingPeriod: 'Nov 2021',
      tranPeriod: 'Nov 2021',
      tranNumber: '300450',
      documentNumber: '',
      name: 'TECH MARINE ENGINEERING (SN) PTE LTD',
      amountNetOfTax: -900.00,
      taxTotal: 0.00,
      amount: -900.00,
      account: '11230 ALL Bank Accounts : NEP UOB 9314-301-906-1',
      memo: 'TSN AUDIT FEE',
      status: 'Submit For Approval'
    },
    {
      id: 2,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      checkDate: '13/11/2021',
      accountingPeriod: 'Nov 2021',
      tranPeriod: 'Nov 2021',
      tranNumber: '300457',
      documentNumber: '',
      name: 'BUMBO PTE LTD',
      amountNetOfTax: -105.00,
      taxTotal: 0.00,
      amount: 105.00,
      account: '11230 ALL Bank Accounts : WAGES MONTHLY POOL',
      memo: 'NOV 2021 INV',
      status: 'Submit For Approval'
    },
    {
      id: 3,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      checkDate: '26/11/2021',
      accountingPeriod: 'Nov 2021',
      tranPeriod: 'Nov 2021',
      tranNumber: '300465',
      documentNumber: '',
      name: 'UOB BANK',
      amountNetOfTax: -350.00,
      taxTotal: 0.00,
      amount: -350.00,
      account: '11230 ALL Bank Accounts : NEP UOB 9314-301-906-1',
      memo: 'YP90939R',
      status: 'Submit For Approval'
    },
    {
      id: 4,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      checkDate: '26/11/2021',
      accountingPeriod: 'Nov 2021',
      tranPeriod: 'Nov 2021',
      tranNumber: '300468',
      documentNumber: '',
      name: 'UOB BANK',
      amountNetOfTax: -350.00,
      taxTotal: 0.00,
      amount: -350.00,
      account: '11230 HP Loan Current Liabilities : HP Loan : UOB 6746196',
      memo: 'YP90939R',
      status: 'Submit For Approval'
    },
    {
      id: 5,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. (TECH ONSHORE MEP Pte Ltd.)',
      checkDate: '1/12/2021',
      accountingPeriod: 'Dec 2021',
      tranPeriod: 'Dec 2021',
      tranNumber: '/',
      documentNumber: '',
      name: 'TRAJAN Scheduler module',
      amountNetOfTax: 2000.00,
      taxTotal: 0.00,
      amount: 2000.00,
      account: '23920 Amount Due to TSN Trade : 23920 : SALARY',
      memo: 'DEC 2021 SALARY',
      status: 'Submit For Approval'
    },
    {
      id: 6,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      checkDate: '1/12/2021',
      accountingPeriod: 'Dec 2021',
      tranPeriod: 'Dec 2021',
      tranNumber: '23',
      documentNumber: '',
      name: 'OCBC BANK',
      amountNetOfTax: -4417.61,
      taxTotal: 0.00,
      amount: -4417.61,
      account: '11230 ALL Bank Accounts : NEP UOB 9314-301-906-1',
      memo: 'LTNS INTEREST',
      status: 'Submit For Approval'
    },
    {
      id: 7,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      checkDate: '1/12/2021',
      accountingPeriod: 'Dec 2021',
      tranPeriod: 'Dec 2021',
      tranNumber: '24',
      documentNumber: '',
      name: 'OCBC BANK',
      amountNetOfTax: -62500.00,
      taxTotal: 0.00,
      amount: -62500.00,
      account: '11230 ALL Bank Accounts : 11230 LOAN REPAYMENT',
      memo: '1234 LOAN REPAYMENT',
      status: 'Submit For Approval'
    },
    {
      id: 8,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      checkDate: '1/12/2021',
      accountingPeriod: 'Dec 2021',
      tranPeriod: 'Dec 2021',
      tranNumber: '23',
      documentNumber: '',
      name: 'OCBC BANK',
      amountNetOfTax: -500200.22,
      taxTotal: 0.00,
      amount: -500200.22,
      account: '11230 ALL Bank Accounts : Invoice Advance Facilities at OCBC BANK 001',
      memo: 'IPTPT1/08/5556',
      status: 'Submit For Approval'
    },
    {
      id: 9,
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      checkDate: '1/12/2021',
      accountingPeriod: 'Dec 2021',
      tranPeriod: 'Dec 2021',
      tranNumber: '300511',
      documentNumber: '',
      name: 'FIXED STOP SALARY',
      amountNetOfTax: 54500.00,
      taxTotal: 0.00,
      amount: 54500.00,
      account: '11230 ALL Bank Accounts : WAGES MONTHLY POOL',
      memo: 'NOV 2021',
      status: 'Submit For Approval'
    }
  ];

  const handleRowClick = (check) => {
    setCurrentPage('view-check-detail');
  };

  const handleNewTransaction = () => {
    setCurrentPage('write-checks');
  };

  return (
    <div className="enquiries-list">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-money-check" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Checks</h1>
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
                <option>Search Project</option>
                <option>All Checks</option>
                <option>Recent Checks</option>
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
                TOTAL: {checks.length}
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
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '100px' }}>CHECK DATE</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '120px' }}>ACCT'G PERIOD</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '110px' }}>TRAN PERIOD</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '110px' }}>TRAN NUMBER</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '120px' }}>DOCUMENT NUMBER</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '200px' }}>NAME</th>
                  <th style={{ padding: '14px 12px', textAlign: 'right', fontWeight: '600', color: '#495057', fontSize: '11px', width: '130px' }}>AMOUNT (NET OF TAX)</th>
                  <th style={{ padding: '14px 12px', textAlign: 'right', fontWeight: '600', color: '#495057', fontSize: '11px', width: '100px' }}>TAX TOTAL</th>
                  <th style={{ padding: '14px 12px', textAlign: 'right', fontWeight: '600', color: '#495057', fontSize: '11px', width: '100px' }}>AMOUNT</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '280px' }}>ACCOUNT</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '150px' }}>MEMO</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '150px' }}>STATUS/DESCRIPTION</th>
                </tr>
              </thead>
              <tbody>
                {checks.map((check) => (
                  <tr 
                    key={check.id}
                    style={{ 
                      borderBottom: '1px solid #dee2e6',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    onClick={() => handleRowClick(check)}
                  >
                    <td style={{ padding: '14px 12px' }}>
                      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentPage('edit-check');
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
                            setCurrentPage('view-check-detail');
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
                    <td style={{ padding: '14px 12px', color: '#333', fontSize: '12px' }}>{check.checkDate}</td>
                    <td style={{ padding: '14px 12px', color: '#333', fontSize: '12px' }}>{check.accountingPeriod}</td>
                    <td style={{ padding: '14px 12px', color: '#333', fontSize: '12px' }}>{check.tranPeriod}</td>
                    <td style={{ padding: '14px 12px', color: '#4a90e2', fontSize: '12px', fontWeight: '500' }}>{check.tranNumber}</td>
                    <td style={{ padding: '14px 12px', color: '#333', fontSize: '12px' }}>{check.documentNumber || '-'}</td>
                    <td style={{ padding: '14px 12px', color: '#333', fontSize: '12px' }}>{check.name}</td>
                    <td style={{ padding: '14px 12px', color: '#333', textAlign: 'right', fontSize: '12px' }}>
                      {check.amountNetOfTax.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                    <td style={{ padding: '14px 12px', color: '#333', textAlign: 'right', fontSize: '12px' }}>
                      {check.taxTotal.toFixed(2)}
                    </td>
                    <td style={{ 
                      padding: '14px 12px', 
                      color: '#333', 
                      textAlign: 'right', 
                      fontWeight: '400',
                      fontSize: '12px'
                    }}>
                      {check.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                    <td style={{ padding: '14px 12px', color: '#4a90e2', fontSize: '12px' }}>{check.account}</td>
                    <td style={{ padding: '14px 12px', color: '#666', fontSize: '12px' }}>{check.memo}</td>
                    <td style={{ padding: '14px 12px', color: '#666', fontSize: '12px' }}>{check.status}</td>
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

export default ViewChecks;
