import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewBillDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const billData = {
    transactionNumber: 'VENDOR2714',
    referenceNo: 'BALANCE B/F-A1',
    vendor: 'A1 ENGINEERING SERVICES PTE LTD',
    account: '20010 Accounts Payable : Trade Creditors',
    amount: 1802.95,
    currency: 'SGD',
    exchangeRate: 1.00,
    vatRegistration: '',
    tax: 0.00,
    dueDate: '1/1/2021',
    date: '1/1/2021',
    postingPeriod: 'Jan 2021',
    memo: 'Old System opening Balance',
    approvalStatus: 'Approved',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    purchaseType: 'Non Critical',
    expenses: [
      {
        id: 1,
        category: '30301 Equity : Opening Balance',
        account: '',
        amount: 1802.95,
        taxCode: 'GST_SG-7%',
        taxRate: '0.0%',
        taxAmt: 0.00,
        grossAmt: 1802.95,
        memo: 'Old System opening balance',
        department: '',
        class: '',
        location: '',
        customerProject: '',
        billable: false
      }
    ]
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-bills');
    }
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('enter-bills');
    }
  };

  return (
    <div className="sales-quotation">
      {/* Top Header */}
      <div style={{ 
        background: '#f8f9fa', 
        padding: '12px 20px', 
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <i className="fas fa-file-invoice" style={{ fontSize: '18px', color: '#4a90e2' }}></i>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>Bill</div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '4px' }}>
              <span style={{ fontSize: '13px', color: '#666' }}>{billData.transactionNumber}</span>
              <span style={{ 
                padding: '2px 8px', 
                background: '#48bb78', 
                color: 'white', 
                borderRadius: '3px', 
                fontSize: '11px',
                fontWeight: '600'
              }}>
                PAID IN FULL
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>List</button>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>Search</button>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>Customize</button>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>More</button>
        </div>
      </div>

      {/* Action Buttons Bar */}
      <div style={{ 
        background: 'white', 
        padding: '12px 20px', 
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn btn-primary" onClick={handleEdit} style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-edit"></i> Edit
          </button>
          <button className="btn btn-secondary" onClick={handleBack} style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-arrow-left"></i> Back
          </button>
          <button className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '13px' }}>
            Credit
          </button>
          <button className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '13px' }}>
            Authorize Return
          </button>
        </div>
        <div>
          <button className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-cog"></i> Actions
          </button>
        </div>
      </div>

      <div className="quotation-container" style={{ background: '#f8f9fa', padding: '20px' }}>
        {/* Primary Information */}
        <div style={{ 
          background: 'white', 
          borderRadius: '4px', 
          marginBottom: '20px',
          border: '1px solid #e0e0e0'
        }}>
          <div style={{ 
            padding: '15px 20px',
            borderBottom: '1px solid #e0e0e0',
            background: '#f8f9fa',
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '11px', color: '#666' }}></i>
            <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0, color: '#333' }}>Primary Information</h3>
          </div>
          <div style={{ padding: '20px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '30px 60px',
              fontSize: '13px'
            }}>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>TRANSACTION NUMBER</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.transactionNumber}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>EXCHANGE RATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.exchangeRate.toFixed(2)}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DUE DATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.dueDate}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>REFERENCE NO.</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.referenceNo}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>VAT REGISTRATION</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.vatRegistration || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.date}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>VENDOR</div>
                <div style={{ color: '#4a90e2', fontSize: '14px', cursor: 'pointer' }}>{billData.vendor}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>TAX</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.tax.toFixed(2)}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>POSTING PERIOD</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.postingPeriod}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>ACCOUNT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.account}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>MEMO</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.memo}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>APPROVAL STATUS</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.approvalStatus}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>AMOUNT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.amount.toFixed(2)}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DISC. DATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>-</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>APPROVAL STATUS</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.approvalStatus}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CURRENCY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.currency}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" disabled />
                <span style={{ fontSize: '13px', color: '#666' }}>PAYMENT HOLD</span>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>NEXT APPROVER</div>
                <div style={{ color: '#333', fontSize: '14px' }}>-</div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div style={{ 
          background: 'white', 
          borderRadius: '4px', 
          marginBottom: '20px',
          border: '1px solid #e0e0e0'
        }}>
          <div style={{ 
            padding: '15px 20px',
            borderBottom: '1px solid #e0e0e0',
            background: '#f8f9fa',
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '11px', color: '#666' }}></i>
            <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0, color: '#333' }}>Classification</h3>
          </div>
          <div style={{ padding: '20px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '30px 60px',
              fontSize: '13px'
            }}>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>SUBSIDIARY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.subsidiary}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>PURCHASE TYPE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{billData.purchaseType}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Expenses and Items */}
        <div style={{ 
          background: 'white', 
          borderRadius: '4px', 
          marginBottom: '20px',
          border: '1px solid #e0e0e0'
        }}>
          <div style={{ 
            padding: '15px 20px',
            borderBottom: '1px solid #e0e0e0',
            background: '#f8f9fa',
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '11px', color: '#666' }}></i>
            <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0, color: '#333' }}>Expenses and Items</h3>
          </div>
          
          <div style={{ padding: '15px 20px', background: '#f8f9fa', borderBottom: '1px solid #e0e0e0' }}>
            <strong style={{ fontSize: '14px' }}>Expenses {billData.amount.toFixed(2)}</strong>
          </div>

          <div className="items-table-wrapper">
            <table className="detail-items-table" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>CATEGORY</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>ACCOUNT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>AMOUNT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>TAX CODE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>TAX RATE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>TAX AMT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>GROSS AMT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>MEMO</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DEPARTMENT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>CLASS</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>LOCATION</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>CUSTOMER:PROJECT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>BILLABLE</th>
                </tr>
              </thead>
              <tbody>
                {billData.expenses.map((expense) => (
                  <tr key={expense.id}>
                    <td style={{ padding: '8px 6px' }}>{expense.category}</td>
                    <td style={{ padding: '8px 6px' }}>{expense.account || '-'}</td>
                    <td style={{ padding: '8px 6px' }}>{expense.amount.toFixed(2)}</td>
                    <td style={{ padding: '8px 6px' }}>{expense.taxCode}</td>
                    <td style={{ padding: '8px 6px' }}>{expense.taxRate}</td>
                    <td style={{ padding: '8px 6px' }}>{expense.taxAmt.toFixed(2)}</td>
                    <td style={{ padding: '8px 6px' }}>{expense.grossAmt.toFixed(2)}</td>
                    <td style={{ padding: '8px 6px' }}>{expense.memo}</td>
                    <td style={{ padding: '8px 6px' }}>{expense.department || '-'}</td>
                    <td style={{ padding: '8px 6px' }}>{expense.class || '-'}</td>
                    <td style={{ padding: '8px 6px' }}>{expense.location || '-'}</td>
                    <td style={{ padding: '8px 6px' }}>{expense.customerProject || '-'}</td>
                    <td style={{ padding: '8px 6px', textAlign: 'center' }}>{expense.billable ? '✓' : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ padding: '15px 20px', background: '#f8f9fa', borderTop: '1px solid #e0e0e0' }}>
            <strong style={{ fontSize: '14px' }}>Items 0.00</strong>
          </div>

          <div className="items-table-wrapper">
            <table className="detail-items-table" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>ITEM</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>VENDOR NAME</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>QUANTITY</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>UNITS</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DESCRIPTION</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>RATE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>AMOUNT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>TAX CODE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>TAX RATE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>TAX AMT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>GROSS AMT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>OPTIONS</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DEPARTMENT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>CLASS</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>LOCATION</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>CUSTOMER:PROJECT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>BILLABLE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>RECEIPTS</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>HISTORY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="19" style={{ padding: '20px', textAlign: 'center', color: '#999', fontSize: '13px' }}>
                    No records to show.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="footer-actions">
          <button className="btn btn-secondary" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <div>
            <button className="btn btn-primary" onClick={handleEdit}>
              <i className="fas fa-edit"></i>
              Edit
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-cog"></i>
              Actions
            </button>
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

export default ViewBillDetail;
