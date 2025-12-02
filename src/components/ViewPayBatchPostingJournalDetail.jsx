import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewPayBatchPostingJournalDetail = ({ journalId, onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('lines');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);

  // Sample journal data
  const journalData = {
    documentNumber: 'PBATCH00268',
    status: 'REJECTED',
    entryNo: '34',
    currency: 'SGD',
    exchangeRate: '1.00',
    date: '1/1/2022',
    postingPeriod: 'Jan 2022',
    memo: '',
    subsidiary: 'Tech Offshore Marine (SV) Pte Ltd',
    refEmployeeBonusProcess: '',
    refPostingPaybatch: 'PBATCH00268',
    lines: [
      {
        account: '50600 Cost Of Sales : Direct Cost-Hourly Salary',
        debit: 0.00,
        credit: 0.00,
        memo: '',
        name: '',
        department: '',
        history: 'History'
      },
      {
        account: '50600 Cost Of Sales : Direct Cost-Hourly Salary',
        debit: 0.00,
        credit: 0.00,
        memo: '',
        name: '',
        department: '',
        history: 'History'
      }
    ]
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit(journalId);
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <i className="fas fa-file-invoice" style={{ color: '#4a90e2', fontSize: '18px' }}></i>
          <div>
            <h1 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#333' }}>Pay-batch Posting Journal</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '5px' }}>
              <span style={{ fontSize: '14px', color: '#666' }}>{journalData.documentNumber}</span>
              <span style={{
                padding: '2px 8px',
                backgroundColor: '#dc3545',
                color: 'white',
                fontSize: '11px',
                fontWeight: '600',
                borderRadius: '3px'
              }}>
                {journalData.status}
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={handleBack} style={{
            padding: '6px 12px',
            border: '1px solid #ddd',
            backgroundColor: 'white',
            borderRadius: '3px',
            fontSize: '12px',
            cursor: 'pointer'
          }}>←</button>
          <button style={{
            padding: '6px 12px',
            border: '1px solid #ddd',
            backgroundColor: 'white',
            borderRadius: '3px',
            fontSize: '12px',
            cursor: 'pointer'
          }}>→</button>
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
          }}>Customize</button>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '20px'
      }}>
        <button onClick={handleEdit} style={{
          padding: '8px 16px',
          backgroundColor: '#4a90e2',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          fontSize: '12px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <i className="fas fa-edit"></i>
          Edit
        </button>
        <button onClick={handleBack} style={{
          padding: '8px 16px',
          border: '1px solid #ddd',
          backgroundColor: 'white',
          borderRadius: '3px',
          fontSize: '12px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button style={{
          padding: '8px 16px',
          border: '1px solid #ddd',
          backgroundColor: 'white',
          borderRadius: '3px',
          fontSize: '12px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <i className="fas fa-print"></i>
          Print
        </button>
        <button style={{
          padding: '8px 16px',
          border: '1px solid #ddd',
          backgroundColor: 'white',
          borderRadius: '3px',
          fontSize: '12px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <i className="fas fa-cog"></i>
          Actions
        </button>
      </div>

      {/* Primary Information */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '4px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        marginBottom: '20px',
        overflow: 'hidden'
      }}>
        <div 
          onClick={() => setPrimaryInfoCollapsed(!primaryInfoCollapsed)}
          style={{
            padding: '12px 20px',
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #dee2e6',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <i className="fas fa-info-circle" style={{ color: '#6c757d', fontSize: '14px' }}></i>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#495057' }}>Primary Information</span>
          </div>
          <i className={`fas ${primaryInfoCollapsed ? 'fa-chevron-down' : 'fa-chevron-up'}`} style={{ fontSize: '12px', color: '#6c757d' }}></i>
        </div>
        {!primaryInfoCollapsed && (
          <div style={{ padding: '20px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '15px',
              fontSize: '12px'
            }}>
              <div>
                <div style={{ color: '#6c757d', marginBottom: '4px', fontSize: '11px' }}>ENTRY NO.</div>
                <div style={{ color: '#333', fontWeight: '500' }}>{journalData.entryNo}</div>
              </div>
              <div>
                <div style={{ color: '#6c757d', marginBottom: '4px', fontSize: '11px' }}>POSTING PERIOD</div>
                <div style={{ color: '#333', fontWeight: '500' }}>{journalData.postingPeriod}</div>
              </div>
              <div>
                <div style={{ color: '#6c757d', marginBottom: '4px', fontSize: '11px' }}>MEMO</div>
                <div style={{ color: '#333', fontWeight: '500' }}>{journalData.memo || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#6c757d', marginBottom: '4px', fontSize: '11px' }}>CURRENCY</div>
                <div style={{ color: '#333', fontWeight: '500' }}>{journalData.currency}</div>
              </div>
              <div>
                <div style={{ color: '#6c757d', marginBottom: '4px', fontSize: '11px' }}>STATUS</div>
                <div style={{
                  padding: '2px 6px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  fontSize: '10px',
                  fontWeight: '600',
                  borderRadius: '3px',
                  display: 'inline-block'
                }}>{journalData.status}</div>
              </div>
              <div>
                <div style={{ color: '#6c757d', marginBottom: '4px', fontSize: '11px' }}>EXCHANGE RATE</div>
                <div style={{ color: '#333', fontWeight: '500' }}>{journalData.exchangeRate}</div>
              </div>
              <div>
                <div style={{ color: '#6c757d', marginBottom: '4px', fontSize: '11px' }}>DATE</div>
                <div style={{ color: '#333', fontWeight: '500' }}>{journalData.date}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Classification */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '4px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        marginBottom: '20px',
        overflow: 'hidden'
      }}>
        <div 
          onClick={() => setClassificationCollapsed(!classificationCollapsed)}
          style={{
            padding: '12px 20px',
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #dee2e6',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <i className="fas fa-tags" style={{ color: '#6c757d', fontSize: '14px' }}></i>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#495057' }}>Classification</span>
          </div>
          <i className={`fas ${classificationCollapsed ? 'fa-chevron-down' : 'fa-chevron-up'}`} style={{ fontSize: '12px', color: '#6c757d' }}></i>
        </div>
        {!classificationCollapsed && (
          <div style={{ padding: '20px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '15px',
              fontSize: '12px'
            }}>
              <div>
                <div style={{ color: '#6c757d', marginBottom: '4px', fontSize: '11px' }}>SUBSIDIARY</div>
                <div style={{ color: '#333', fontWeight: '500' }}>{journalData.subsidiary}</div>
              </div>
              <div>
                <div style={{ color: '#6c757d', marginBottom: '4px', fontSize: '11px' }}>REF. EMPLOYEE BONUS PROCESS</div>
                <div style={{ color: '#333', fontWeight: '500' }}>{journalData.refEmployeeBonusProcess || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#6c757d', marginBottom: '4px', fontSize: '11px' }}>REF.POSTING PAYBATCH</div>
                <div style={{ color: '#333', fontWeight: '500' }}>{journalData.refPostingPaybatch}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '4px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        {/* Tab Headers */}
        <div style={{
          display: 'flex',
          backgroundColor: '#495057',
          borderBottom: '1px solid #dee2e6'
        }}>
          {['lines', 'communication', 'system', 'gl-impact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '12px 20px',
                border: 'none',
                backgroundColor: activeTab === tab ? '#6c757d' : '#495057',
                color: 'white',
                fontSize: '12px',
                fontWeight: '500',
                cursor: 'pointer',
                textTransform: 'capitalize'
              }}
            >
              {tab === 'lines' ? 'Lines' :
               tab === 'communication' ? 'Communication' :
               tab === 'system' ? 'System Information' :
               'GL Impact'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div style={{ padding: '0' }}>
          {activeTab === 'lines' && (
            <div>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '12px'
              }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6' }}>
                    <th style={{ padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#6c757d' }}>ACCOUNT</th>
                    <th style={{ padding: '10px', textAlign: 'right', fontWeight: '600', fontSize: '11px', color: '#6c757d' }}>DEBIT</th>
                    <th style={{ padding: '10px', textAlign: 'right', fontWeight: '600', fontSize: '11px', color: '#6c757d' }}>CREDIT</th>
                    <th style={{ padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#6c757d' }}>MEMO</th>
                    <th style={{ padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#6c757d' }}>NAME</th>
                    <th style={{ padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#6c757d' }}>DEPARTMENT</th>
                  </tr>
                </thead>
                <tbody>
                  {journalData.lines.map((line, index) => (
                    <tr key={index} style={{
                      borderBottom: '1px solid #dee2e6',
                      backgroundColor: index % 2 === 0 ? 'white' : '#f8f9fa'
                    }}>
                      <td style={{ padding: '10px', fontSize: '12px' }}>{line.account}</td>
                      <td style={{ padding: '10px', fontSize: '12px', textAlign: 'right' }}>{formatCurrency(line.debit)}</td>
                      <td style={{ padding: '10px', fontSize: '12px', textAlign: 'right' }}>{formatCurrency(line.credit)}</td>
                      <td style={{ padding: '10px', fontSize: '12px' }}>{line.memo}</td>
                      <td style={{ padding: '10px', fontSize: '12px' }}>{line.name}</td>
                      <td style={{ padding: '10px', fontSize: '12px' }}>{line.department}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'communication' && (
            <div style={{ padding: '20px', textAlign: 'center', color: '#6c757d' }}>
              <p>No communication records found.</p>
            </div>
          )}

          {activeTab === 'system' && (
            <div style={{ padding: '20px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '15px',
                fontSize: '12px'
              }}>
                <div>
                  <div style={{ color: '#6c757d', marginBottom: '4px', fontSize: '11px' }}>Created Date</div>
                  <div style={{ color: '#333', fontWeight: '500' }}>1/1/2022 10:30 AM</div>
                </div>
                <div>
                  <div style={{ color: '#6c757d', marginBottom: '4px', fontSize: '11px' }}>Created By</div>
                  <div style={{ color: '#333', fontWeight: '500' }}>System Administrator</div>
                </div>
                <div>
                  <div style={{ color: '#6c757d', marginBottom: '4px', fontSize: '11px' }}>Last Modified</div>
                  <div style={{ color: '#333', fontWeight: '500' }}>1/1/2022 10:30 AM</div>
                </div>
                <div>
                  <div style={{ color: '#6c757d', marginBottom: '4px', fontSize: '11px' }}>Modified By</div>
                  <div style={{ color: '#333', fontWeight: '500' }}>System Administrator</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gl-impact' && (
            <div style={{ padding: '20px', textAlign: 'center', color: '#6c757d' }}>
              <p>GL Impact information will be displayed here.</p>
            </div>
          )}
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

export default ViewPayBatchPostingJournalDetail;
