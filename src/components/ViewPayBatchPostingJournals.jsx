import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewPayBatchPostingJournals = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('open-bills');
  const [searchProject, setSearchProject] = useState('');

  const [payBatchJournals] = useState([
    {
      id: 1,
      editView: true,
      orderType: '*',
      date: '1/1/2022',
      asOfDate: '',
      period: 'Jan 2022',
      taxPeriod: '',
      documentNumber: '34',
      name: '',
      account: '50600 Cost Of Sales : Direct Cost-Hourly Salary',
      memo: '',
      amount: 0.00,
      materialSpecification: '',
      approvalStatus: '',
      refPostingPaybatch: 'PBATCH00268',
      refPaybatch: ''
    },
    {
      id: 2,
      editView: true,
      orderType: '*',
      date: '18/4/2022',
      asOfDate: '',
      period: 'Apr 2022',
      taxPeriod: '',
      documentNumber: '35',
      name: '',
      account: '50600 Cost Of Sales : Direct Cost-Hourly Salary',
      memo: '',
      amount: 0.00,
      materialSpecification: '',
      approvalStatus: '',
      refPostingPaybatch: 'PBATCH00247',
      refPaybatch: ''
    },
    {
      id: 3,
      editView: true,
      orderType: '*',
      date: '31/1/2022',
      asOfDate: '',
      period: 'Jan 2022',
      taxPeriod: '',
      documentNumber: '36',
      name: '',
      account: '50600 Cost Of Sales : Direct Cost-Hourly Salary',
      memo: 'OT-1.0',
      amount: 6835.86,
      materialSpecification: '',
      approvalStatus: '',
      refPostingPaybatch: 'PBATCH00271',
      refPaybatch: ''
    },
    {
      id: 4,
      editView: true,
      orderType: '*',
      date: '31/1/2022',
      asOfDate: '',
      period: 'Jan 2022',
      taxPeriod: '',
      documentNumber: '37',
      name: '',
      account: '50700 Cost Of Sales : In-Direct Cost Fixed Salary',
      memo: 'Basic salary',
      amount: 4000.00,
      materialSpecification: '',
      approvalStatus: '',
      refPostingPaybatch: 'PBATCH00265',
      refPaybatch: ''
    },
    {
      id: 5,
      editView: true,
      orderType: '*',
      date: '31/1/2022',
      asOfDate: '',
      period: 'Jan 2022',
      taxPeriod: '',
      documentNumber: '38',
      name: '',
      account: '57055 Staff Related Costs : Accommodations/Utilities',
      memo: 'Mileage',
      amount: 193.00,
      materialSpecification: '',
      approvalStatus: '',
      refPostingPaybatch: 'PBATCH00261',
      refPaybatch: ''
    },
    {
      id: 6,
      editView: true,
      orderType: '*',
      date: '28/2/2022',
      asOfDate: '',
      period: 'Feb 2022',
      taxPeriod: '',
      documentNumber: '39',
      name: '',
      account: '50700 Cost Of Sales : In-Direct Cost Fixed Salary',
      memo: 'Basic salary',
      amount: 7200.00,
      materialSpecification: '',
      approvalStatus: '',
      refPostingPaybatch: 'PBATCH00262',
      refPaybatch: ''
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewFilterChange = (value) => {
    setViewFilter(value);
    showToast(`View changed to ${value}`, 'info');
  };

  const handleNewJournal = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  const handleViewJournal = (id) => {
    if (onViewClick) {
      onViewClick(id);
    }
  };

  const handleEditJournal = (id) => {
    if (onEditClick) {
      onEditClick(id);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  // Filter journals based on search
  const filteredJournals = payBatchJournals.filter(journal => {
    if (searchProject === '') return true;
    return journal.account.toLowerCase().includes(searchProject.toLowerCase()) ||
           journal.memo.toLowerCase().includes(searchProject.toLowerCase()) ||
           journal.documentNumber.includes(searchProject) ||
           journal.refPostingPaybatch.toLowerCase().includes(searchProject.toLowerCase());
  });

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px',
        backgroundColor: 'white',
        padding: '15px 20px',
        borderRadius: '4px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <i className="fas fa-file-invoice" style={{ color: '#4a90e2', fontSize: '18px' }}></i>
          <h1 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#333' }}>Pay-batch Posting Journals</h1>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={{
            padding: '6px 12px',
            border: '1px solid #ddd',
            backgroundColor: 'white',
            borderRadius: '3px',
            fontSize: '12px',
            cursor: 'pointer'
          }}>List</button>
          <button style={{
            padding: '6px 12px',
            border: '1px solid #ddd',
            backgroundColor: 'white',
            borderRadius: '3px',
            fontSize: '12px',
            cursor: 'pointer'
          }}>Search</button>
          <button style={{
            padding: '6px 12px',
            border: '1px solid #ddd',
            backgroundColor: 'white',
            borderRadius: '3px',
            fontSize: '12px',
            cursor: 'pointer'
          }}>Audit Trail</button>
        </div>
      </div>

      {/* Controls */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px',
        backgroundColor: 'white',
        padding: '10px 20px',
        borderRadius: '4px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ fontSize: '12px', fontWeight: '500' }}>VIEW:</span>
            <select 
              style={{
                padding: '4px 8px',
                border: '1px solid #ddd',
                borderRadius: '3px',
                fontSize: '12px'
              }}
              value={viewFilter}
              onChange={(e) => handleViewFilterChange(e.target.value)}
            >
              <option value="open-bills">Open Bills</option>
              <option value="all-bills">All Bills</option>
              <option value="pending-approval">Pending Approval</option>
            </select>
          </div>
          <button 
            onClick={handleNewJournal}
            style={{
              padding: '6px 12px',
              backgroundColor: '#4a90e2',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              fontSize: '12px',
              cursor: 'pointer'
            }}
          >
            New Pay-batch Posting Journal
          </button>
        </div>
        <div>
          <button style={{
            padding: '6px 12px',
            border: '1px solid #ddd',
            backgroundColor: 'white',
            borderRadius: '3px',
            fontSize: '12px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <i className="fas fa-filter"></i>
            FILTERS
          </button>
        </div>
      </div>

      {/* Search and Actions */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px',
        backgroundColor: 'white',
        padding: '10px 20px',
        borderRadius: '4px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchProject}
            onChange={(e) => setSearchProject(e.target.value)}
            style={{
              padding: '6px 10px',
              border: '1px solid #ddd',
              borderRadius: '3px',
              fontSize: '12px',
              width: '200px'
            }}
          />
          <div style={{ display: 'flex', gap: '5px' }}>
            <button style={{
              padding: '6px 8px',
              border: '1px solid #ddd',
              backgroundColor: 'white',
              borderRadius: '3px',
              cursor: 'pointer'
            }}>
              <i className="fas fa-edit" style={{ fontSize: '12px' }}></i>
            </button>
            <button style={{
              padding: '6px 8px',
              border: '1px solid #ddd',
              backgroundColor: 'white',
              borderRadius: '3px',
              cursor: 'pointer'
            }}>
              <i className="fas fa-trash" style={{ fontSize: '12px' }}></i>
            </button>
            <button style={{
              padding: '6px 8px',
              border: '1px solid #ddd',
              backgroundColor: 'white',
              borderRadius: '3px',
              cursor: 'pointer'
            }}>
              <i className="fas fa-print" style={{ fontSize: '12px' }}></i>
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ fontSize: '12px' }}>QUICK SORT:</span>
            <select style={{
              padding: '4px 8px',
              border: '1px solid #ddd',
              borderRadius: '3px',
              fontSize: '12px'
            }}>
              <option>Date</option>
              <option>Amount</option>
              <option>Account</option>
            </select>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '12px' }}>34 — 84 of 554</span>
            <div style={{ display: 'flex', gap: '2px' }}>
              <button style={{
                padding: '4px 8px',
                border: '1px solid #ddd',
                backgroundColor: 'white',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '12px'
              }}>‹</button>
              <button style={{
                padding: '4px 8px',
                border: '1px solid #ddd',
                backgroundColor: 'white',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '12px'
              }}>›</button>
            </div>
            <span style={{ fontSize: '12px', fontWeight: 'bold' }}>TOTAL: 554</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '4px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '12px'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6' }}>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', fontSize: '11px', width: '30px' }}>
                <input type="checkbox" />
              </th>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', fontSize: '11px' }}>EDIT | VIEW</th>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', fontSize: '11px' }}>ORDER TYPE</th>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', fontSize: '11px' }}>DATE</th>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', fontSize: '11px' }}>AS-OF DATE</th>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', fontSize: '11px' }}>PERIOD</th>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', fontSize: '11px' }}>TAX PERIOD</th>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', fontSize: '11px' }}>DOCUMENT NUMBER</th>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', fontSize: '11px' }}>NAME</th>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', fontSize: '11px' }}>ACCOUNT</th>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', fontSize: '11px' }}>MEMO</th>
              <th style={{ padding: '8px', textAlign: 'right', fontWeight: '600', fontSize: '11px' }}>AMOUNT</th>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', fontSize: '11px' }}>MATERIAL SPECIFICATION</th>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', fontSize: '11px' }}>APPROVAL STATUS</th>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', fontSize: '11px' }}>REF POSTING PAYBATCH</th>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', fontSize: '11px' }}>REF PAYBATCH</th>
            </tr>
          </thead>
          <tbody>
            {filteredJournals.map((journal, index) => (
              <tr key={journal.id} style={{
                borderBottom: '1px solid #dee2e6',
                backgroundColor: index % 2 === 0 ? 'white' : '#f8f9fa'
              }}>
                <td style={{ padding: '8px' }}>
                  <input type="checkbox" />
                </td>
                <td style={{ padding: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <button 
                      onClick={() => handleEditJournal(journal.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#007bff',
                        cursor: 'pointer',
                        fontSize: '12px',
                        textDecoration: 'underline'
                      }}
                    >
                      Edit
                    </button>
                    <span style={{ color: '#666' }}>|</span>
                    <button 
                      onClick={() => handleViewJournal(journal.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#007bff',
                        cursor: 'pointer',
                        fontSize: '12px',
                        textDecoration: 'underline'
                      }}
                    >
                      View
                    </button>
                  </div>
                </td>
                <td style={{ padding: '8px', fontSize: '12px' }}>{journal.orderType}</td>
                <td style={{ padding: '8px', fontSize: '12px' }}>{journal.date}</td>
                <td style={{ padding: '8px', fontSize: '12px' }}>{journal.asOfDate}</td>
                <td style={{ padding: '8px', fontSize: '12px' }}>{journal.period}</td>
                <td style={{ padding: '8px', fontSize: '12px' }}>{journal.taxPeriod}</td>
                <td style={{ padding: '8px', fontSize: '12px' }}>{journal.documentNumber}</td>
                <td style={{ padding: '8px', fontSize: '12px' }}>{journal.name}</td>
                <td style={{ padding: '8px', fontSize: '12px' }}>{journal.account}</td>
                <td style={{ padding: '8px', fontSize: '12px' }}>{journal.memo}</td>
                <td style={{ padding: '8px', fontSize: '12px', textAlign: 'right' }}>
                  {journal.amount > 0 ? formatCurrency(journal.amount) : '0.00'}
                </td>
                <td style={{ padding: '8px', fontSize: '12px' }}>{journal.materialSpecification}</td>
                <td style={{ padding: '8px', fontSize: '12px' }}>{journal.approvalStatus}</td>
                <td style={{ padding: '8px', fontSize: '12px' }}>{journal.refPostingPaybatch}</td>
                <td style={{ padding: '8px', fontSize: '12px' }}>{journal.refPaybatch}</td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default ViewPayBatchPostingJournals;
