import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewVendorPrepaymentDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const prepaymentData = {
    transactionNumber: 'VPREF24',
    payee: 'PROGRESS GALVANIZING PTE LTD',
    purchaseOrder: '',
    account: '11140 ALL Bank Accounts : MEP D&S SGD 003-906132-3',
    balance: '',
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
    status: 'FULLY APPLIED'
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
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-invoice-dollar"></i>
          <div>
            <h1>Vendor Prepayment</h1>
            <div className="detail-subtitle">
              <span>{prepaymentData.transactionNumber}</span>
              <span style={{ color: '#666', fontSize: '13px', marginLeft: '10px' }}>{prepaymentData.payee}</span>
              <span className="status-badge" style={{ background: '#e8f5e9', color: '#2e7d32', padding: '4px 8px', borderRadius: '4px', marginLeft: '10px', fontSize: '11px', fontWeight: '600' }}>
                {prepaymentData.status}
              </span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={handleBack}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary" onClick={handleEdit}>
          <i className="fas fa-edit"></i>
          Edit
        </button>
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar">
          Apply
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print
        </button>
        <div style={{ marginLeft: 'auto' }}>
          <button className="btn-toolbar">
            <i className="fas fa-cog"></i>
            Actions
          </button>
        </div>
      </div>

      <div className="detail-content">
        {/* Primary Information */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>CUSTOM FORM</label>
                <div className="field-value">TOM Vendor Prepayment Form</div>
              </div>

              <div className="detail-field">
                <label>TRANSACTION NUMBER</label>
                <div className="field-value">{prepaymentData.transactionNumber}</div>
              </div>

              <div className="detail-field">
                <label>CHECK #</label>
                <div className="field-value">{prepaymentData.check}</div>
              </div>

              <div className="detail-field">
                <label>PAYEE</label>
                <div className="field-value" style={{ color: '#4a90e2', cursor: 'pointer' }}>{prepaymentData.payee}</div>
              </div>

              <div className="detail-field">
                <label>PURCHASE ORDER</label>
                <div className="field-value">{prepaymentData.purchaseOrder || '-'}</div>
              </div>

              <div className="detail-field">
                <label>ACCOUNT</label>
                <div className="field-value">{prepaymentData.account}</div>
              </div>

              <div className="detail-field">
                <label>BALANCE</label>
                <div className="field-value">{prepaymentData.balance || '-'}</div>
              </div>

              <div className="detail-field">
                <label>PAYMENT AMOUNT</label>
                <div className="field-value">{prepaymentData.paymentAmount.toFixed(2)}</div>
              </div>

              <div className="detail-field">
                <label>CURRENCY</label>
                <div className="field-value">{prepaymentData.currency}</div>
              </div>

              <div className="detail-field">
                <label>EXCHANGE RATE</label>
                <div className="field-value">{prepaymentData.exchangeRate.toFixed(2)}</div>
              </div>

              <div className="detail-field">
                <label>DATE</label>
                <div className="field-value">{prepaymentData.date}</div>
              </div>

              <div className="detail-field">
                <label>POSTING PERIOD</label>
                <div className="field-value">{prepaymentData.postingPeriod}</div>
              </div>

              <div className="detail-field">
                <label>PREPAYMENT ACCOUNT</label>
                <div className="field-value">{prepaymentData.prepaymentAccount}</div>
              </div>

              <div className="detail-field">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '8px' }}>
                  <input type="checkbox" disabled checked={prepaymentData.toBePrinted} />
                  <label style={{ margin: 0, fontSize: '13px' }}>TO BE PRINTED</label>
                </div>
              </div>

              <div className="detail-field">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '8px' }}>
                  <input type="checkbox" disabled checked={prepaymentData.voucher} />
                  <label style={{ margin: 0, fontSize: '13px' }}>VOUCHER</label>
                </div>
              </div>

              <div className="detail-field">
                <label>MEMO</label>
                <div className="field-value">{prepaymentData.memo}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{prepaymentData.subsidiary}</div>
              </div>
              
              <div className="detail-field">
                <label>DEPARTMENT</label>
                <div className="field-value">{prepaymentData.department || '-'}</div>
              </div>

              <div className="detail-field">
                <label>CLASS</label>
                <div className="field-value">{prepaymentData.class || '-'}</div>
              </div>

              <div className="detail-field">
                <label>LOCATION</label>
                <div className="field-value">{prepaymentData.location || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Applied To Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Applied To</h3>
          </div>
          <div className="section-body">
            <div style={{ padding: '15px 20px', background: '#f8f9fa', marginBottom: '15px', borderRadius: '4px' }}>
              <strong style={{ fontSize: '16px', color: '#333' }}>Apply 0.00</strong>
            </div>

            <div className="items-table-container">
              <table className="items-table">
                <thead>
                  <tr>
                    <th style={{ minWidth: '120px' }}>DATE APPLIED</th>
                    <th style={{ minWidth: '100px' }}>TYPE</th>
                    <th style={{ minWidth: '150px' }}>NUMBER</th>
                    <th style={{ minWidth: '100px' }}>DATE</th>
                    <th style={{ minWidth: '150px' }}>ORIGINAL AMOUNT</th>
                    <th style={{ minWidth: '150px' }}>APPLIED AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                      No records to show.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
