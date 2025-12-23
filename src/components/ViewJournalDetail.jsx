import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewJournalDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const journalData = {
    entryNo: 'J144',
    status: 'PAYMENTS APPLIED',
    currency: 'SGD',
    exchangeRate: '1.00',
    date: '1/2/2021',
    postingPeriod: 'Feb 2021',
    reversalNo: '',
    reversalDate: '',
    memo: 'DEPOSIT',
    subsidiary: 'Tech Offshore Marine (DQ) Pte Ltd',
    lines: [
      {
        id: 1,
        account: '12000 Deposits Paid / Prepayments',
        debit: '2,100.00',
        credit: '',
        taxCode: '',
        taxRate: '',
        grossAmt: '',
        memo: '',
        name: 'SENNICORP MARINE INTEGRATED YARD PTE. LTD.',
        department: '',
        class: '',
        location: '',
        vatAmt: '',
        taxAccount: ''
      },
      {
        id: 2,
        account: '51350 Administration Expenses : Yard Container Rental',
        debit: '',
        credit: '2,100.00',
        taxCode: '',
        taxRate: '',
        grossAmt: '',
        memo: '',
        name: '',
        department: '',
        class: '',
        location: '',
        vatAmt: '',
        taxAccount: ''
      },
      {
        id: 3,
        account: '51350 Administration Expenses : Yard Container Rental',
        debit: '2,100.00',
        credit: '',
        taxCode: '',
        taxRate: '',
        grossAmt: '',
        memo: '',
        name: '',
        department: '',
        class: '',
        location: '',
        vatAmt: '',
        taxAccount: ''
      },
      {
        id: 4,
        account: '20010 Accounts Payable : Trade Creditors',
        debit: '',
        credit: '2,100.00',
        taxCode: '',
        taxRate: '',
        grossAmt: '',
        memo: '',
        name: 'SENNICORP MARINE INTEGRATED YARD PTE. LTD.',
        department: '',
        class: '',
        location: '',
        vatAmt: '',
        taxAccount: ''
      }
    ]
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('edit-journal-entry');
    }
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-journal-entries');
    }
  };

  const calculateTotals = () => {
    const debitTotal = journalData.lines.reduce((sum, line) => {
      const debit = parseFloat(line.debit?.replace(/,/g, '') || 0);
      return sum + debit;
    }, 0);
    
    const creditTotal = journalData.lines.reduce((sum, line) => {
      const credit = parseFloat(line.credit?.replace(/,/g, '') || 0);
      return sum + credit;
    }, 0);
    
    return { debitTotal, creditTotal };
  };

  const { debitTotal, creditTotal } = calculateTotals();

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-book"></i>
          <div>
            <h1>Journal Entry</h1>
            <div className="detail-subtitle">
              <span>{journalData.entryNo} • {journalData.date}</span>
              <span className="status-badge success" style={{ marginLeft: '10px' }}>
                {journalData.status}
              </span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar-primary" onClick={handleEdit}>
          <i className="fas fa-edit"></i>
          Edit
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print
        </button>
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
                <label>ENTRY NO.</label>
                <div className="field-value">{journalData.entryNo}</div>
              </div>
              <div className="detail-field">
                <label>DATE</label>
                <div className="field-value">{journalData.date}</div>
              </div>
              <div className="detail-field">
                <label>POSTING PERIOD</label>
                <div className="field-value">{journalData.postingPeriod}</div>
              </div>
              <div className="detail-field">
                <label>CURRENCY</label>
                <div className="field-value">{journalData.currency}</div>
              </div>
              <div className="detail-field">
                <label>EXCHANGE RATE</label>
                <div className="field-value">{journalData.exchangeRate}</div>
              </div>
              <div className="detail-field">
                <label>REVERSAL DATE</label>
                <div className="field-value">{journalData.reversalDate || '-'}</div>
              </div>
              <div className="detail-field">
                <label>DEBIT TOTAL</label>
                <div className="field-value" style={{ fontWeight: '600' }}>${debitTotal.toFixed(2)}</div>
              </div>
              <div className="detail-field">
                <label>CREDIT TOTAL</label>
                <div className="field-value" style={{ fontWeight: '600' }}>${creditTotal.toFixed(2)}</div>
              </div>
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label>MEMO</label>
                <div className="field-value">{journalData.memo}</div>
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
                <div className="field-value">{journalData.subsidiary}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Lines Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Lines</h3>
          </div>
          <div className="section-body">
            <div className="items-section" style={{ overflowX: 'auto' }}>
              <table className="items-table">
                <thead>
                  <tr>
                    <th style={{ minWidth: '250px' }}>ACCOUNT</th>
                    <th style={{ minWidth: '120px' }}>DEBIT</th>
                    <th style={{ minWidth: '120px' }}>CREDIT</th>
                    <th style={{ minWidth: '150px' }}>TAX CODE</th>
                    <th style={{ minWidth: '100px' }}>TAX RATE</th>
                    <th style={{ minWidth: '120px' }}>GROSS AMT.</th>
                    <th style={{ minWidth: '200px' }}>MEMO</th>
                    <th style={{ minWidth: '180px' }}>NAME</th>
                    <th style={{ minWidth: '180px' }}>DEPARTMENT</th>
                    <th style={{ minWidth: '150px' }}>CLASS</th>
                    <th style={{ minWidth: '150px' }}>LOCATION</th>
                  </tr>
                </thead>
                <tbody>
                  {journalData.lines.map((line) => (
                    <tr key={line.id}>
                      <td>{line.account}</td>
                      <td style={{ textAlign: 'right', fontWeight: '600' }}>{line.debit || '-'}</td>
                      <td style={{ textAlign: 'right', fontWeight: '600' }}>{line.credit || '-'}</td>
                      <td>{line.taxCode || '-'}</td>
                      <td>{line.taxRate || '-'}</td>
                      <td style={{ textAlign: 'right' }}>{line.grossAmt || '-'}</td>
                      <td>{line.memo || '-'}</td>
                      <td>{line.name || '-'}</td>
                      <td>{line.department || '-'}</td>
                      <td>{line.class || '-'}</td>
                      <td>{line.location || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '2rem', padding: '1rem', background: '#f9f9f9', borderRadius: '4px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <span style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.25rem' }}>Total Debit</span>
                <strong style={{ fontSize: '1.25rem', color: '#333' }}>${debitTotal.toFixed(2)}</strong>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <span style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.25rem' }}>Total Credit</span>
                <strong style={{ fontSize: '1.25rem', color: '#333' }}>${creditTotal.toFixed(2)}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-footer">
          <button className="btn-toolbar" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn-toolbar-primary" onClick={handleEdit}>
            <i className="fas fa-edit"></i>
            Edit
          </button>
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

export default ViewJournalDetail;
