import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewLoanRepaymentProcessDetail = ({ onBack, onEdit, selectedProcess }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('new-loan-payee');
  const [loanPayeeView, setLoanPayeeView] = useState('Default View');

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit(selectedProcess);
    }
  };

  return (
    <div className="enquiry-detail">
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 0',
        borderBottom: '1px solid #e0e0e0',
        marginBottom: '20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <i className="fas fa-money-check-alt" style={{ fontSize: '20px', color: '#666' }}></i>
          <h1 style={{ margin: '0', fontSize: '24px', fontWeight: '600', color: '#333' }}>Loan Repayment Process</h1>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }} onClick={handleBack}>←</button>
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}>→</button>
          <button style={{
            background: 'none',
            border: '1px solid #ccc',
            padding: '8px 15px',
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '12px'
          }}>List</button>
          <button style={{
            background: 'none',
            border: '1px solid #ccc',
            padding: '8px 15px',
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '12px'
          }}>Search</button>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '20px'
      }}>
        <button 
          onClick={handleEdit}
          style={{
            background: '#007bff',
            color: 'white',
            border: '1px solid #007bff',
            padding: '8px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          Edit
        </button>
        <button style={{
          background: '#6c757d',
          color: 'white',
          border: '1px solid #6c757d',
          padding: '8px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }} onClick={handleBack}>
          Back
        </button>
        <button style={{
          background: 'white',
          color: '#495057',
          border: '1px solid #ced4da',
          padding: '8px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          Print
        </button>
        <button style={{
          background: 'white',
          color: '#495057',
          border: '1px solid #ced4da',
          padding: '8px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          Actions
        </button>
      </div>

      {/* Loan Repayment Process Information */}
      <div style={{
        background: 'white',
        borderRadius: '6px',
        marginBottom: '20px',
        border: '1px solid #e9ecef',
        overflow: 'hidden'
      }}>
        <div style={{ padding: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>ID</label>
                <span style={{ fontSize: '14px', color: '#333' }}>{selectedProcess?.id || '1'}</span>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>WORK CALENDAR</label>
                <span style={{ fontSize: '14px', color: '#333' }}>{selectedProcess?.workCalendar || '2022 MEP'}</span>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>MONTH</label>
                <span style={{ fontSize: '14px', color: '#333' }}>{selectedProcess?.month || 'January'}</span>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>YEAR</label>
                <span style={{ fontSize: '14px', color: '#333' }}>{selectedProcess?.year || '2022'}</span>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>MONTH START DATE</label>
                <span style={{ fontSize: '14px', color: '#333' }}>1/1/2022</span>
              </div>
            </div>
            <div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>MONTH END DATE</label>
                <span style={{ fontSize: '14px', color: '#333' }}>31/1/2022</span>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>STATUS</label>
                <span style={{ fontSize: '14px', color: '#333' }}>{selectedProcess?.status || 'Transfer to Payroll'}</span>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>EMPLOYEE</label>
                <span style={{ fontSize: '14px', color: '#333' }}>REP004 Tan Whye Kwang</span>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>REF RESIGNATION ID</label>
                <span style={{ fontSize: '14px', color: '#333' }}>1588</span>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>LOAN CATEGORY</label>
                <span style={{ fontSize: '14px', color: '#333' }}>Personal</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Loan-Payee Section */}
      <div style={{
        background: 'white',
        borderRadius: '6px',
        marginBottom: '20px',
        border: '1px solid #e9ecef',
        overflow: 'hidden'
      }}>
        <div style={{
          background: '#6c757d',
          padding: '12px 20px',
          color: 'white',
          fontSize: '14px',
          fontWeight: '600',
          display: 'flex',
          gap: '20px'
        }}>
          <span 
            style={{ 
              cursor: 'pointer',
              borderBottom: activeTab === 'new-loan-payee' ? '2px solid white' : 'none',
              paddingBottom: '5px'
            }}
            onClick={() => setActiveTab('new-loan-payee')}
          >
            New Loan-Payee
          </span>
          <span 
            style={{ 
              cursor: 'pointer',
              borderBottom: activeTab === 'attach' ? '2px solid white' : 'none',
              paddingBottom: '5px'
            }}
            onClick={() => setActiveTab('attach')}
          >
            Attach
          </span>
          <span 
            style={{ 
              cursor: 'pointer',
              borderBottom: activeTab === 'customize-view' ? '2px solid white' : 'none',
              paddingBottom: '5px'
            }}
            onClick={() => setActiveTab('customize-view')}
          >
            Customize View
          </span>
        </div>
        
        <div style={{ padding: '20px' }}>
          {activeTab === 'new-loan-payee' && (
            <div>
              {/* Controls */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '15px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666' }}>VIEW:</label>
                  <select 
                    value={loanPayeeView}
                    onChange={(e) => setLoanPayeeView(e.target.value)}
                    style={{
                      padding: '4px 8px',
                      border: '1px solid #ced4da',
                      borderRadius: '4px',
                      fontSize: '12px'
                    }}
                  >
                    <option>Default View</option>
                    <option>Summary View</option>
                    <option>Detailed View</option>
                  </select>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666' }}>LOAN-PAYEE</label>
                </div>
              </div>

              {/* Table */}
              <div style={{ overflowX: 'auto' }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '12px'
                }}>
                  <thead>
                    <tr style={{ background: '#f8f9fa' }}>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>EDIT</th>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>LOAN ID</th>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>EMPLOYEE NAME</th>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>EMPAY GROUP</th>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>LOAN AMOUNT</th>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>MONTH EMI</th>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>BALANCE TO</th>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>MONTH-RE PAY AMT</th>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>PRINCIPAL AMOUNT</th>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>REMARK</th>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>BALANCE AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="11" style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
                        No records to show.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'attach' && (
            <div style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
              Attach functionality will be displayed here.
            </div>
          )}

          {activeTab === 'customize-view' && (
            <div style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
              Customize View options will be displayed here.
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

export default ViewLoanRepaymentProcessDetail;
