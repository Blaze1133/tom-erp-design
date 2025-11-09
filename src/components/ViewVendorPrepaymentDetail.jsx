import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewVendorPrepaymentDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const prepaymentData = {
    toPrint: 'KEPPEL FELS LIMITED - (50,GULROAD)',
    transactionNumber: 'VPREF24',
    payee: 'KEPPEL FELS LIMITED - (50,GULROAD)',
    purchaseOrder: '',
    account: '11140 ALL Bank Accounts : MEP D&S SGD 003-906132-3',
    paymentAmount: 924.00,
    currency: 'SGD',
    exchangeRate: 1.00,
    date: '23/12/2021',
    postingPeriod: 'Dec 2021',
    prepaymentAccount: '12105 Vendor Prepayments',
    toBePrinted: true,
    voucher: false,
    check: 'To Print',
    memo: '2W WELDING TEST',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    department: '',
    class: '',
    location: '',
    status: 'PAID'
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-vendor-prepayments');
    }
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('enter-vendor-prepayment');
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
          <i className="fas fa-file-invoice-dollar" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#333', marginBottom: '4px' }}>Vendor Prepayment</div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', color: '#666' }}>To Print</span>
              <span style={{ fontSize: '16px', color: '#333' }}>{prepaymentData.toPrint}</span>
              <span style={{ 
                padding: '4px 12px', 
                background: '#48bb78', 
                color: 'white', 
                borderRadius: '3px', 
                fontSize: '12px',
                fontWeight: '600'
              }}>
                {prepaymentData.status}
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>List</button>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>Search</button>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>Customize</button>
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
            Apply
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
                <div style={{ color: '#333', fontSize: '14px' }}>{prepaymentData.transactionNumber}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CURRENCY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{prepaymentData.currency}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" disabled checked={prepaymentData.toBePrinted} />
                  <span style={{ fontSize: '13px', color: '#666' }}>TO BE PRINTED</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" disabled checked={prepaymentData.voucher} />
                  <span style={{ fontSize: '13px', color: '#666' }}>VOUCHER</span>
                </div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>PAYEE</div>
                <div style={{ color: '#4a90e2', fontSize: '14px', cursor: 'pointer' }}>{prepaymentData.payee}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>EXCHANGE RATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{prepaymentData.exchangeRate.toFixed(2)}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CHECK #</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{prepaymentData.check}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>PURCHASE ORDER</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{prepaymentData.purchaseOrder || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{prepaymentData.date}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>MEMO</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{prepaymentData.memo}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>ACCOUNT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{prepaymentData.account}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>POSTING PERIOD</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{prepaymentData.postingPeriod}</div>
              </div>
              <div style={{ gridColumn: 'span 1' }}></div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>PAYMENT AMOUNT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{prepaymentData.paymentAmount.toFixed(2)}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>PREPAYMENT ACCOUNT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{prepaymentData.prepaymentAccount}</div>
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
                <div style={{ color: '#333', fontSize: '14px' }}>{prepaymentData.subsidiary}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CLASS</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{prepaymentData.class || '-'}</div>
              </div>
              <div style={{ gridColumn: 'span 1' }}></div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DEPARTMENT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{prepaymentData.department || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>LOCATION</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{prepaymentData.location || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Applied To Section */}
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
            <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0, color: '#333' }}>Applied To</h3>
          </div>
          
          <div style={{ padding: '20px' }}>
            <div style={{ padding: '15px 20px', background: '#f8f9fa', marginBottom: '15px', borderRadius: '4px' }}>
              <strong style={{ fontSize: '16px', color: '#333' }}>Apply 0.00</strong>
            </div>

            <div className="items-table-wrapper">
              <table className="detail-items-table" style={{ width: '100%' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '8px 6px', fontSize: '11px' }}>DATE APPLIED</th>
                    <th style={{ padding: '8px 6px', fontSize: '11px' }}>TYPE</th>
                    <th style={{ padding: '8px 6px', fontSize: '11px' }}>NUMBER</th>
                    <th style={{ padding: '8px 6px', fontSize: '11px' }}>DATE</th>
                    <th style={{ padding: '8px 6px', fontSize: '11px' }}>ORIGINAL AMOUNT</th>
                    <th style={{ padding: '8px 6px', fontSize: '11px' }}>APPLIED AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="6" style={{ padding: '20px', textAlign: 'center', color: '#999', fontSize: '13px' }}>
                      No records to show.
                    </td>
                  </tr>
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

export default ViewVendorPrepaymentDetail;
