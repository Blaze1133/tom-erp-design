import React, { useState } from 'react';
import './Enquiries.css';

const ReconciledStatements = ({ setCurrentPage }) => {
  const [filterAccount, setFilterAccount] = useState('');
  const [currentPage, setCurrentPageNum] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Dummy data for reconciled statements
  const statements = [
    {
      id: 1,
      closeDate: '30/11/2021',
      account: '11230 ALL Bank Accounts : MEP ICOB 9314-01-906-1',
      status: 'Closed',
      endingStatementBalance: 31071.11
    },
    {
      id: 2,
      closeDate: '31/12/2021',
      account: '11130 ALL Bank Accounts : TMO DBS SGD 072-027380-0',
      status: 'Closed',
      endingStatementBalance: 6123.37
    },
    {
      id: 3,
      closeDate: '31/12/2021',
      account: '11200 ALL Bank Accounts : TDQ OCBC 713-012084-001',
      status: 'Closed',
      endingStatementBalance: 18422.09
    },
    {
      id: 4,
      closeDate: '31/12/2021',
      account: '11150 ALL Bank Accounts : TDQ DBS SGD 072-004177-1',
      status: 'Closed',
      endingStatementBalance: 3591.39
    },
    {
      id: 5,
      closeDate: '31/12/2021',
      account: '11220 ALL Bank Accounts : MEP RHB SGD 1-80-10316-03',
      status: 'Closed',
      endingStatementBalance: 29468.53
    },
    {
      id: 6,
      closeDate: '31/12/2021',
      account: '11190 ALL Bank Accounts : MEP MAYBANK SGD 0421102147-3',
      status: 'Closed',
      endingStatementBalance: 16879.49
    },
    {
      id: 7,
      closeDate: '31/12/2021',
      account: '11210 ALL Bank Accounts : MEP RHB USD 1-80-10316-037',
      status: 'Closed',
      endingStatementBalance: 3648.51
    },
    {
      id: 8,
      closeDate: '31/12/2021',
      account: '11120 ALL Bank Accounts : TEA DBS SGD 072-004465-7',
      status: 'Closed',
      endingStatementBalance: 7338.29
    },
    {
      id: 9,
      closeDate: '31/12/2021',
      account: '11250 ALL Bank Accounts : TOM(S) DBS SGD 072-013584-5',
      status: 'Closed',
      endingStatementBalance: 26608.56
    },
    {
      id: 10,
      closeDate: '31/12/2021',
      account: '11110 ALL Bank Accounts : TSV DBS SGD 072-004442-8',
      status: 'Closed',
      endingStatementBalance: 2965.46
    },
    {
      id: 11,
      closeDate: '31/12/2021',
      account: '11440 ALL Bank Accounts : Petty Cash',
      status: 'Closed',
      endingStatementBalance: 0.00
    },
    {
      id: 12,
      closeDate: '31/12/2021',
      account: '11210 ALL Bank Accounts : MEP OCBC 536-82592-001',
      status: 'Closed',
      endingStatementBalance: 478665.40
    },
    {
      id: 13,
      closeDate: '31/12/2021',
      account: '11230 ALL Bank Accounts : MEP ICOB 9314-01-906-1',
      status: 'Closed',
      endingStatementBalance: 36225.44
    },
    {
      id: 14,
      closeDate: '31/1/2022',
      account: '11210 ALL Bank Accounts : MEP OCBC 536-82592-001',
      status: 'Closed',
      endingStatementBalance: 244810.77
    },
    {
      id: 15,
      closeDate: '31/1/2022',
      account: '11200 ALL Bank Accounts : TDQ OCBC 713-012084-001',
      status: 'Closed',
      endingStatementBalance: 31672.09
    },
    {
      id: 16,
      closeDate: '31/1/2022',
      account: '11220 ALL Bank Accounts : MEP RHB SGD 1-80-10316-03',
      status: 'Closed',
      endingStatementBalance: 26079.02
    },
    {
      id: 17,
      closeDate: '31/1/2022',
      account: '11190 ALL Bank Accounts : MEP MAYBANK SGD 0421102147-3',
      status: 'Closed',
      endingStatementBalance: 14920.49
    },
    {
      id: 18,
      closeDate: '31/1/2022',
      account: '11140 ALL Bank Accounts : MEP DBS SGD 003-906132-3',
      status: 'Closed',
      endingStatementBalance: 813754.32
    },
    {
      id: 19,
      closeDate: '31/12/2021',
      account: '11130 ALL Bank Accounts : TMO DBS SGD 072-027380-0',
      status: 'Closed',
      endingStatementBalance: 6123.37
    },
    {
      id: 20,
      closeDate: '31/12/2021',
      account: '11200 ALL Bank Accounts : TDQ OCBC 713-012084-001',
      status: 'Closed',
      endingStatementBalance: 18422.09
    },
    {
      id: 21,
      closeDate: '31/12/2021',
      account: '11150 ALL Bank Accounts : TDQ DBS SGD 072-004177-1',
      status: 'Closed',
      endingStatementBalance: 3591.39
    },
    {
      id: 22,
      closeDate: '31/12/2021',
      account: '11220 ALL Bank Accounts : MEP RHB SGD 1-80-10316-03',
      status: 'Closed',
      endingStatementBalance: 28468.53
    },
    {
      id: 23,
      closeDate: '31/12/2021',
      account: '11190 ALL Bank Accounts : MEP MAYBANK SGD 0421102147-3',
      status: 'Closed',
      endingStatementBalance: 16879.49
    },
    {
      id: 24,
      closeDate: '31/12/2021',
      account: '11310 ALL Bank Accounts : MEP RHB USD 1-80-10316-037',
      status: 'Closed',
      endingStatementBalance: 3648.51
    },
    {
      id: 25,
      closeDate: '31/12/2021',
      account: '11120 ALL Bank Accounts : TEA DBS SGD 072-004465-7',
      status: 'Closed',
      endingStatementBalance: 7388.29
    },
    {
      id: 26,
      closeDate: '31/12/2021',
      account: '11250 ALL Bank Accounts : TOM(S) DBS SGD 072-013584-5',
      status: 'Closed',
      endingStatementBalance: 26608.56
    },
    {
      id: 27,
      closeDate: '31/12/2021',
      account: '11110 ALL Bank Accounts : TSV DBS SGD 072-004442-8',
      status: 'Closed',
      endingStatementBalance: 2965.46
    },
    {
      id: 28,
      closeDate: '31/12/2021',
      account: '11400 ALL Bank Accounts : Petty Cash',
      status: 'Closed',
      endingStatementBalance: 0.00
    },
    {
      id: 29,
      closeDate: '31/12/2021',
      account: '11210 ALL Bank Accounts : MEP OCBC 536-82592-001',
      status: 'Closed',
      endingStatementBalance: 478665.40
    },
    {
      id: 30,
      closeDate: '31/12/2021',
      account: '11230 ALL Bank Accounts : MEP ICOB 9314-01-906-1',
      status: 'Closed',
      endingStatementBalance: 36225.44
    },
    {
      id: 31,
      closeDate: '31/1/2022',
      account: '11210 ALL Bank Accounts : MEP OCBC 536-82592-001',
      status: 'Closed',
      endingStatementBalance: 244810.77
    }
  ];

  const totalPages = Math.ceil(statements.length / itemsPerPage);

  const handleBack = () => {
    setCurrentPage('reconcile-account-statement');
  };

  const handleDelete = (id) => {
    console.log('Delete statement:', id);
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
          <i className="fas fa-balance-scale" style={{ fontSize: '20px', color: '#4a90e2' }}></i>
          <h1 style={{ margin: 0, fontSize: '20px', fontWeight: '600' }}>Reconciled Statements</h1>
        </div>
      </div>

      {/* Content Area */}
      <div style={{ padding: '24px' }}>
        <div style={{ background: 'white', borderRadius: '8px', padding: '20px' }}>
          
          {/* Filter Section */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <label style={{ fontSize: '14px', color: '#333', fontWeight: '500' }}>FILTER BY ACCOUNT:</label>
              <select 
                value={filterAccount}
                onChange={(e) => setFilterAccount(e.target.value)}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '14px',
                  minWidth: '300px',
                  cursor: 'pointer',
                  background: 'white'
                }}
              >
                <option value="">Select</option>
                <option>11110 ALL Bank Accounts : TSV DBS SGD 072-004442-8</option>
                <option>11120 ALL Bank Accounts : TEA DBS SGD 072-004465-7</option>
                <option>11130 ALL Bank Accounts : TMO DBS SGD 072-027380-0</option>
                <option>11140 ALL Bank Accounts : MEP DBS SGD 003-906132-3</option>
              </select>
            </div>
          </div>

          {/* Pagination Controls */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
            paddingBottom: '12px',
            borderBottom: '1px solid #e0e0e0'
          }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', color: '#666' }}>Go to:</span>
              <select 
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                style={{
                  padding: '6px 12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  background: 'white'
                }}
              >
                <option value="1">1</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <span style={{ fontSize: '14px', color: '#666' }}>of {totalPages}</span>
              <button 
                style={{
                  padding: '6px 12px',
                  background: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
                disabled={currentPage === 1}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button 
                style={{
                  padding: '6px 12px',
                  background: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
                disabled={currentPage === totalPages}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
              <span style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>
                Total: {statements.length}
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
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '80px' }}>
                    
                  </th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '120px' }}>
                    CLOSE DATE
                    <i className="fas fa-sort" style={{ marginLeft: '6px', color: '#999', fontSize: '10px' }}></i>
                  </th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '400px' }}>
                    ACCOUNT
                    <i className="fas fa-sort" style={{ marginLeft: '6px', color: '#999', fontSize: '10px' }}></i>
                  </th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '100px' }}>STATUS</th>
                  <th style={{ padding: '14px 12px', textAlign: 'right', fontWeight: '600', color: '#495057', fontSize: '11px', width: '150px' }}>
                    ENDING STATEMENT BALANCE
                  </th>
                </tr>
              </thead>
              <tbody>
                {statements.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((statement) => (
                  <tr 
                    key={statement.id}
                    style={{ 
                      borderBottom: '1px solid #dee2e6',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <td style={{ padding: '14px 12px' }}>
                      <button 
                        onClick={() => handleDelete(statement.id)}
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
                        Delete
                      </button>
                    </td>
                    <td style={{ padding: '14px 12px', color: '#333', fontSize: '12px' }}>{statement.closeDate}</td>
                    <td style={{ padding: '14px 12px', color: '#4a90e2', fontSize: '12px' }}>{statement.account}</td>
                    <td style={{ padding: '14px 12px', color: '#333', fontSize: '12px' }}>{statement.status}</td>
                    <td style={{ 
                      padding: '14px 12px', 
                      color: '#333', 
                      textAlign: 'right', 
                      fontWeight: '400',
                      fontSize: '12px'
                    }}>
                      {statement.endingStatementBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
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

export default ReconciledStatements;
