import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewVendorPaymentDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const paymentData = {
    documentNumber: '300444',
    vendor: 'EQUIPE SERVICES & TECHNOLOGY PTE LTD',
    transactionNumber: 'VENDPYMT91',
    payee: 'EQUIPE SERVICES & TECHNOLOGY PTE LTD',
    account: '11230 ALL Bank Accounts : MEP JOB 9314-301-906-1 9314-301-956-1',
    balance: '11,905.18',
    amount: 2659.91,
    currency: 'SGD',
    exchangeRate: 1.00,
    date: '1/11/2021',
    postingPeriod: 'Nov 2021',
    toBePrinted: false,
    voucher: false,
    check: '300444',
    memo: 'UOB SGD 199',
    approvalStatus: 'Approved',
    nextApprover: '',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    department: '',
    class: '',
    location: '',
    status: 'APPROVED'
  };

  const appliedBills = [
    {
      id: 1,
      dateCreated: '25/8/2021',
      dateDue: '25/8/2021',
      type: 'Bill',
      refNo: '39967',
      origAmt: 143.38,
      amtDue: 143.38,
      currency: 'SGD',
      discDate: '',
      discAvail: '',
      discTaken: '',
      payment: 143.38
    },
    {
      id: 2,
      dateCreated: '26/8/2021',
      dateDue: '26/8/2021',
      type: 'Bill',
      refNo: '39970',
      origAmt: 643.28,
      amtDue: 643.28,
      currency: 'SGD',
      discDate: '',
      discAvail: '',
      discTaken: '',
      payment: 643.28
    },
    {
      id: 3,
      dateCreated: '23/8/2021',
      dateDue: '23/8/2021',
      type: 'Bill',
      refNo: '39957',
      origAmt: 651.31,
      amtDue: 651.31,
      currency: 'SGD',
      discDate: '',
      discAvail: '',
      discTaken: '',
      payment: 651.31
    },
    {
      id: 4,
      dateCreated: '21/7/2021',
      dateDue: '21/7/2021',
      type: 'Bill',
      refNo: '39847',
      origAmt: 1221.94,
      amtDue: 1221.94,
      currency: 'SGD',
      discDate: '',
      discAvail: '',
      discTaken: '',
      payment: 1221.94
    }
  ];

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-vendor-payments');
    }
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('pay-single-vendor');
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
          <i className="fas fa-money-check-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#333', marginBottom: '4px' }}>Bill Payment</div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '20px', fontWeight: '600', color: '#333' }}>{paymentData.documentNumber}</span>
              <span style={{ fontSize: '16px', color: '#666' }}>{paymentData.vendor}</span>
              <span style={{ 
                padding: '4px 12px', 
                background: '#48bb78', 
                color: 'white', 
                borderRadius: '3px', 
                fontSize: '12px',
                fontWeight: '600'
              }}>
                {paymentData.status}
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
                <div style={{ color: '#333', fontSize: '14px' }}>{paymentData.transactionNumber}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CURRENCY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{paymentData.currency}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CHECK #</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{paymentData.check}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>PAYEE</div>
                <div style={{ color: '#4a90e2', fontSize: '14px', cursor: 'pointer' }}>{paymentData.payee}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>EXCHANGE RATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{paymentData.exchangeRate.toFixed(2)}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>MEMO</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{paymentData.memo}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>ACCOUNT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{paymentData.account}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{paymentData.date}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>APPROVAL STATUS</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{paymentData.approvalStatus}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>BALANCE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{paymentData.balance}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>POSTING PERIOD</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{paymentData.postingPeriod}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>NEXT APPROVER</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{paymentData.nextApprover || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>AMOUNT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{paymentData.amount.toFixed(2)}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" disabled checked={paymentData.toBePrinted} />
                  <span style={{ fontSize: '13px', color: '#666' }}>TO BE PRINTED</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" disabled checked={paymentData.voucher} />
                  <span style={{ fontSize: '13px', color: '#666' }}>VOUCHER</span>
                </div>
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
                <div style={{ color: '#333', fontSize: '14px' }}>{paymentData.subsidiary}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CLASS</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{paymentData.class || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>LOCATION</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{paymentData.location || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DEPARTMENT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{paymentData.department || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Apply Section */}
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
            <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0, color: '#333' }}>Apply</h3>
          </div>
          
          <div style={{ padding: '20px' }}>
            <div style={{ padding: '15px 20px', background: '#f8f9fa', marginBottom: '15px', borderRadius: '4px' }}>
              <strong style={{ fontSize: '16px', color: '#333' }}>Applied To 2,659.91 = </strong>
              <span style={{ fontSize: '14px', color: '#999' }}>Credits Applied 0.00</span>
            </div>

          <div className="items-table-wrapper">
            <table className="detail-items-table" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DATE DUE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>TYPE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>REF NO.</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>ORIG. AMT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>AMT. DUE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>CURRENCY</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DISC. DATE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DISC. AVAIL.</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DISC. TAKEN</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>PAYMENT</th>
                </tr>
              </thead>
              <tbody>
                {appliedBills.map((bill) => (
                  <tr key={bill.id}>
                    <td style={{ padding: '8px 6px' }}>{bill.dateDue}</td>
                    <td style={{ padding: '8px 6px' }}>{bill.type}</td>
                    <td style={{ padding: '8px 6px' }}>{bill.refNo}</td>
                    <td style={{ padding: '8px 6px', textAlign: 'right' }}>{bill.origAmt.toFixed(2)}</td>
                    <td style={{ padding: '8px 6px', textAlign: 'right' }}>{bill.amtDue.toFixed(2)}</td>
                    <td style={{ padding: '8px 6px' }}>{bill.currency}</td>
                    <td style={{ padding: '8px 6px' }}>{bill.discDate || '-'}</td>
                    <td style={{ padding: '8px 6px', textAlign: 'right' }}>{bill.discAvail || '-'}</td>
                    <td style={{ padding: '8px 6px', textAlign: 'right' }}>{bill.discTaken || '-'}</td>
                    <td style={{ padding: '8px 6px', textAlign: 'right' }}>{bill.payment.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

export default ViewVendorPaymentDetail;
