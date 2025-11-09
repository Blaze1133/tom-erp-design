import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCustomerPaymentDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('apply');

  const paymentData = {
    documentNumber: 'PVTOMDQ00004',
    status: 'DEPOSITED',
    customer: '845 Mazens Doubtful Debts',
    payment: 'PVTOMDQ00004',
    account: '13510 Accounts Receivable : Trade Debtors',
    accountClearing: '13510 Clearing Accounts : Undeposited Funds',
    balance: '-22,063.27',
    pending: '0.00',
    date: '31/3/2021',
    postingPeriod: 'Mar 2021',
    currency: 'SGD',
    exchangeRate: '1.00',
    memo: 'VOID',
    subsidiary: 'Tech Offshore Marine (DQ) Pte Ltd',
    department: '',
    class: '',
    location: 'Singapore (TDQ)',
    paymentAmount: '0.00',
    appliedTo: '0.00',
    creditsApplied: '0.00',
    depositsApplied: '0.00'
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = () => {
    setCurrentPage('edit-customer-payment');
  };

  const handleBack = () => {
    setCurrentPage('view-customer-payments');
  };

  const handleList = () => {
    setCurrentPage('view-customer-payments');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-money-check-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <div>
            <h1>Payment #{paymentData.documentNumber}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.25rem' }}>
              <span style={{ fontSize: '0.875rem', color: '#666' }}>
                Customer: {paymentData.customer}
              </span>
              <span style={{ 
                padding: '0.25rem 0.75rem', 
                background: '#d4edda', 
                color: '#155724',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: '600',
                textTransform: 'uppercase'
              }}>
                {paymentData.status}
              </span>
            </div>
          </div>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn btn-secondary" onClick={handleList}>
            <i className="fas fa-list"></i>
            List
          </button>
          <button className="btn btn-primary" onClick={handleEdit}>
            <i className="fas fa-edit"></i>
            Edit
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-info-circle"></i>
            Primary Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <div className="form-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="form-group">
              <label className="form-label">CUSTOMER</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {paymentData.customer}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">A/R ACCOUNT</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {paymentData.account}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">PAYMENT #</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none', color: '#4a90e2', fontWeight: '500' }}>
                {paymentData.payment}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">ACCOUNT</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {paymentData.accountClearing}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">BALANCE</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {paymentData.balance}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">DATE</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {paymentData.date}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">PENDING</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {paymentData.pending}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">POSTING PERIOD</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {paymentData.postingPeriod}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">CURRENCY</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {paymentData.currency}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">MEMO</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {paymentData.memo}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">EXCHANGE RATE</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {paymentData.exchangeRate}
              </div>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-tags"></i>
            Classification
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">SUBSIDIARY</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {paymentData.subsidiary}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">CLASS</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {paymentData.class || '-'}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">LOCATION</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {paymentData.location}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">DEPARTMENT</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {paymentData.department || '-'}
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Tabs Section */}
        <div className="form-section">
          <div style={{ borderBottom: '2px solid #5b7a9e', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '0' }}>
              <button
                onClick={() => setActiveTab('apply')}
                style={{
                  padding: '0.75rem 2rem',
                  border: 'none',
                  background: activeTab === 'apply' ? '#5b7a9e' : '#e0e0e0',
                  color: activeTab === 'apply' ? 'white' : '#666',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
              >
                Apply
              </button>
              <button
                onClick={() => setActiveTab('payment-method')}
                style={{
                  padding: '0.75rem 2rem',
                  border: 'none',
                  background: activeTab === 'payment-method' ? '#5b7a9e' : '#e0e0e0',
                  color: activeTab === 'payment-method' ? 'white' : '#666',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
              >
                Payment Method
              </button>
            </div>
          </div>

          {activeTab === 'apply' && (
            <>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label className="form-label">PAYMENT AMOUNT</label>
                <div className="form-control" style={{ background: '#f5f5f5', border: 'none', maxWidth: '200px' }}>
                  {paymentData.paymentAmount}
                </div>
              </div>

              <div style={{ marginBottom: '1rem', borderBottom: '1px solid #e0e0e0', paddingBottom: '0.5rem' }}>
                <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem', fontWeight: '600' }}>
                  <span style={{ color: '#4a90e2' }}>Applied To {paymentData.appliedTo}</span>
                  <span>Credits Applied {paymentData.creditsApplied}</span>
                  <span>Deposits Applied {paymentData.depositsApplied}</span>
                </div>
              </div>

              <div className="items-table-wrapper">
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>DATE</th>
                      <th>TYPE</th>
                      <th>REF NO.</th>
                      <th>GROUPED TO</th>
                      <th>GROUP DATE</th>
                      <th>ORIG. AMT.</th>
                      <th>AMT. DUE</th>
                      <th>CURRENCY</th>
                      <th>DISC. DATE</th>
                      <th>DISC. AVAIL.</th>
                      <th>DISC. TAKEN</th>
                      <th>PAYMENT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="12" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                        No records to show.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Summary - Below table */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>
                <div style={{ background: 'white', padding: '1.25rem', border: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                    TO APPLY
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                    ${paymentData.paymentAmount}
                  </div>
                </div>
                <div style={{ background: 'white', padding: '1.25rem', border: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                    APPLIED
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                    ${paymentData.appliedTo}
                  </div>
                </div>
                <div style={{ background: 'white', padding: '1.25rem', border: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                    UNAPPLIED
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '600', color: '#4a90e2' }}>
                    $0.00
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'payment-method' && (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>
              <p>No payment method information available.</p>
            </div>
          )}
        </div>
      </div>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
    </div>
  );
};

export default ViewCustomerPaymentDetail;
