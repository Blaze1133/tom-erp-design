import React, { useState } from 'react';
import './Enquiries.css';

const ViewTransfers = ({ setCurrentPage }) => {
  const [viewType, setViewType] = useState('Vendor Bills');

  // Dummy data for transfers
  const transfers = [
    {
      id: 1,
      orderType: 'Transfer',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      date: '3/12/2021',
      asOfDate: 'Dec 2021',
      period: 'Dec 2021',
      taxPeriod: '',
      documentNumber: '9',
      name: '',
      amountNetOfTax: -200000.00,
      taxTotal: '',
      amount: -200000.00,
      account: '11210 ALL Bank Accounts : MEP OCBC 536-82592-001',
      memo: 'MEP OCBC TO DBS',
      status: ''
    },
    {
      id: 2,
      orderType: 'Transfer',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      date: '6/12/2021',
      asOfDate: 'Dec 2021',
      period: 'Dec 2021',
      taxPeriod: '',
      documentNumber: '10',
      name: '',
      amountNetOfTax: -200000.00,
      taxTotal: '',
      amount: -200000.00,
      account: '11210 ALL Bank Accounts : MEP OCBC 536-82592-001',
      memo: 'MEP OCBC TO DBS',
      status: ''
    },
    {
      id: 3,
      orderType: 'Transfer',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      date: '6/12/2021',
      asOfDate: 'Dec 2021',
      period: 'Dec 2021',
      taxPeriod: '',
      documentNumber: '12',
      name: '',
      amountNetOfTax: -138230.00,
      taxTotal: '',
      amount: -138230.00,
      account: '11210 ALL Bank Accounts : MEP USD SGD 003-906132-3',
      memo: 'MEP USD TO SGD',
      status: ''
    },
    {
      id: 4,
      orderType: 'Transfer',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      date: '6/12/2021',
      asOfDate: 'Dec 2021',
      period: 'Dec 2021',
      taxPeriod: '',
      documentNumber: '11',
      name: '',
      amountNetOfTax: -140000.00,
      taxTotal: '',
      amount: -140000.00,
      account: '11210 ALL Bank Accounts : MEP OCBC 536-82592-001',
      memo: 'MEP OCBC TO DBS',
      status: ''
    },
    {
      id: 5,
      orderType: 'Transfer',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      date: '18/12/2021',
      asOfDate: 'Dec 2021',
      period: 'Dec 2021',
      taxPeriod: '',
      documentNumber: '14',
      name: '',
      amountNetOfTax: -30000.00,
      taxTotal: '',
      amount: -30000.00,
      account: '11210 ALL Bank Accounts : MEP OCBC 536-82592-001',
      memo: 'MEP OCBC TO DBS',
      status: ''
    },
    {
      id: 6,
      orderType: 'Transfer',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      date: '21/12/2021',
      asOfDate: 'Dec 2021',
      period: 'Dec 2021',
      taxPeriod: '',
      documentNumber: '13',
      name: '',
      amountNetOfTax: -122841.00,
      taxTotal: '',
      amount: -122841.00,
      account: '11190 ALL Bank Accounts : MEP DBS USD TO SGD 003-906132-3',
      memo: 'MEP DBS USD TO SGD',
      status: ''
    },
    {
      id: 7,
      orderType: 'Transfer',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      date: '23/12/2021',
      asOfDate: 'Dec 2021',
      period: 'Dec 2021',
      taxPeriod: '',
      documentNumber: '15',
      name: '',
      amountNetOfTax: -90000.00,
      taxTotal: '',
      amount: -90000.00,
      account: '11210 ALL Bank Accounts : MEP OCBC TO RHB',
      memo: 'MEP OCBC TO RHB',
      status: ''
    }
  ];

  const handleRowClick = (transfer) => {
    setCurrentPage('view-transfer-detail');
  };

  const handleNewTransaction = () => {
    setCurrentPage('transfer-funds');
  };

  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ 
        background: 'white', 
        padding: '16px 24px',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <i className="fas fa-exchange-alt" style={{ fontSize: '20px', color: '#4a90e2' }}></i>
          <h1 style={{ margin: 0, fontSize: '20px', fontWeight: '600' }}>Transfers</h1>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            style={{
              padding: '8px 24px',
              background: '#4a90e2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              minWidth: '80px'
            }}
          >
            List
          </button>
          <button 
            style={{
              padding: '8px 24px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              minWidth: '80px'
            }}
          >
            Search
          </button>
          <button 
            style={{
              padding: '8px 24px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              minWidth: '100px'
            }}
          >
            Audit Trail
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div style={{ padding: '24px' }}>
        <div style={{ background: 'white', borderRadius: '8px', padding: '20px' }}>
          
          {/* View and New Transaction */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <label style={{ fontSize: '14px', color: '#333', fontWeight: '500' }}>VIEW:</label>
              <select 
                value={viewType}
                onChange={(e) => setViewType(e.target.value)}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '14px',
                  minWidth: '200px',
                  cursor: 'pointer',
                  background: 'white'
                }}
              >
                <option>Vendor Bills</option>
                <option>All Transfers</option>
                <option>Recent Transfers</option>
              </select>
              <button 
                style={{
                  padding: '8px 20px',
                  background: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  minWidth: '120px'
                }}
              >
                Edit View
              </button>
            </div>
            <button 
              onClick={handleNewTransaction}
              style={{
                padding: '8px 24px',
                background: '#4a90e2',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: '500',
                fontSize: '14px',
                minWidth: '160px'
              }}
            >
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
                TOTAL: {transfers.length}
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
                </tr>
              </thead>
              <tbody>
                {transfers.map((transfer) => (
                  <tr 
                    key={transfer.id}
                    style={{ 
                      borderBottom: '1px solid #dee2e6',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    onClick={() => handleRowClick(transfer)}
                  >
                    <td style={{ padding: '14px 12px' }}>
                      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentPage('edit-transfer');
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
                            setCurrentPage('view-transfer-detail');
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
                    <td style={{ padding: '14px 12px', color: '#333', fontSize: '12px' }}>{transfer.orderType}</td>
                    <td style={{ padding: '14px 12px', color: '#333', fontSize: '12px' }}>{transfer.subsidiary}</td>
                    <td style={{ padding: '14px 12px', color: '#333', fontSize: '12px' }}>{transfer.date}</td>
                    <td style={{ padding: '14px 12px', color: '#333', fontSize: '12px' }}>{transfer.asOfDate}</td>
                    <td style={{ padding: '14px 12px', color: '#333', fontSize: '12px' }}>{transfer.period}</td>
                    <td style={{ padding: '14px 12px', color: '#333', fontSize: '12px' }}>{transfer.taxPeriod || '-'}</td>
                    <td style={{ padding: '14px 12px', color: '#4a90e2', fontSize: '12px', fontWeight: '500' }}>{transfer.documentNumber}</td>
                    <td style={{ padding: '14px 12px', color: '#333', fontSize: '12px' }}>{transfer.name || '-'}</td>
                    <td style={{ padding: '14px 12px', color: '#333', textAlign: 'right', fontSize: '12px' }}>
                      {transfer.amountNetOfTax.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                    <td style={{ padding: '14px 12px', color: '#333', textAlign: 'right', fontSize: '12px' }}>
                      {transfer.taxTotal || '-'}
                    </td>
                    <td style={{ 
                      padding: '14px 12px', 
                      color: '#333', 
                      textAlign: 'right', 
                      fontWeight: '400',
                      fontSize: '12px'
                    }}>
                      {transfer.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                    <td style={{ padding: '14px 12px', color: '#4a90e2', fontSize: '12px' }}>{transfer.account}</td>
                    <td style={{ padding: '14px 12px', color: '#666', fontSize: '12px' }}>{transfer.memo}</td>
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

export default ViewTransfers;
