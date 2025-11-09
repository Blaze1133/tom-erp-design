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
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-book" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Journal</h1>
          <span style={{ 
            marginLeft: '15px',
            padding: '4px 12px',
            background: '#48BB78',
            color: 'white',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: '600'
          }}>
            {journalData.status}
          </span>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={handleEdit}>
            <i className="fas fa-edit"></i>
            Edit
          </button>
          <button className="btn btn-secondary" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-print"></i>
            Print
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-cog"></i>
            Actions
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information */}
        <div className="form-section">
          <h2 className="section-title" style={{ fontSize: '18px', fontWeight: '600' }}>
            <i className="fas fa-info-circle"></i>
            Primary Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0 1rem 0' }} />
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">ENTRY NO.</label>
              <div className="form-value">{journalData.entryNo}</div>
            </div>
            <div className="form-group">
              <label className="form-label">POSTING PERIOD</label>
              <div className="form-value">{journalData.postingPeriod}</div>
            </div>
            <div className="form-group">
              <label className="form-label">CURRENCY</label>
              <div className="form-value">{journalData.currency}</div>
            </div>
            <div className="form-group">
              <label className="form-label">REVERSAL #</label>
              <div className="form-value">{journalData.reversalNo || '-'}</div>
            </div>
            <div className="form-group">
              <label className="form-label">EXCHANGE RATE</label>
              <div className="form-value">{journalData.exchangeRate}</div>
            </div>
            <div className="form-group">
              <label className="form-label">REVERSAL DATE</label>
              <div className="form-value">{journalData.reversalDate || '-'}</div>
            </div>
            <div className="form-group">
              <label className="form-label">DATE</label>
              <div className="form-value">{journalData.date}</div>
            </div>
            <div className="form-group">
              <label className="form-label">MEMO</label>
              <div className="form-value">{journalData.memo}</div>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className="form-section" style={{ marginTop: '1.5rem' }}>
          <h2 className="section-title" style={{ fontSize: '18px', fontWeight: '600' }}>
            <i className="fas fa-tags"></i>
            Classification
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0 1rem 0' }} />
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">SUBSIDIARY</label>
              <div className="form-value">{journalData.subsidiary}</div>
            </div>
          </div>
        </div>

        {/* Lines Section */}
        <div className="form-section" style={{ marginTop: '1.5rem' }}>
          <h2 className="section-title" style={{ fontSize: '18px', fontWeight: '600' }}>
            <i className="fas fa-list"></i>
            Lines
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0 1rem 0' }} />
          
          <div style={{ 
            padding: '10px 15px', 
            background: '#EDF2F7',
            borderRadius: '6px',
            fontWeight: '600',
            marginBottom: '15px',
            fontSize: '16px'
          }}>
            {debitTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ●
          </div>

          <div className="items-table-wrapper">
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th style={{width: '15%'}}>ACCOUNT</th>
                  <th style={{width: '10%'}}>DEBIT</th>
                  <th style={{width: '10%'}}>CREDIT</th>
                  <th style={{width: '8%'}}>TAX CODE</th>
                  <th style={{width: '7%'}}>TAX RATE</th>
                  <th style={{width: '10%'}}>GROSS AMT.</th>
                  <th style={{width: '10%'}}>MEMO</th>
                  <th style={{width: '12%'}}>NAME</th>
                  <th style={{width: '10%'}}>DEPARTMENT</th>
                  <th style={{width: '8%'}}>CLASS</th>
                </tr>
              </thead>
              <tbody>
                {journalData.lines.map((line) => (
                  <tr key={line.id}>
                    <td style={{ color: '#4a90e2' }}>{line.account}</td>
                    <td style={{ textAlign: 'right', fontWeight: '600' }}>{line.debit}</td>
                    <td style={{ textAlign: 'right', fontWeight: '600' }}>{line.credit}</td>
                    <td>{line.taxCode}</td>
                    <td>{line.taxRate}</td>
                    <td style={{ textAlign: 'right' }}>{line.grossAmt}</td>
                    <td>{line.memo}</td>
                    <td style={{ color: '#4a90e2', fontWeight: '500' }}>{line.name}</td>
                    <td>{line.department}</td>
                    <td>{line.class}</td>
                  </tr>
                ))}
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
            <button className="btn btn-secondary" onClick={handleEdit}>
              <i className="fas fa-edit"></i>
              Edit
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-print"></i>
              Print
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

export default ViewJournalDetail;
