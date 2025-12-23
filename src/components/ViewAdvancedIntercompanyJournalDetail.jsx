import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewAdvancedIntercompanyJournalDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('lines');

  const journalData = {
    entryNo: 'J48',
    currency: 'SGD',
    date: '9/12/2021',
    postingPeriod: 'Dec 2021',
    reversalNo: '',
    reversalDate: '',
    memo: 'CUTECH TEQ INV',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    lines: [
      {
        id: 1,
        subsidiary: 'Tech Onshore MEP',
        account: 'MEP DBS SGD 003-908132-3',
        debit: '4,288.56',
        credit: '',
        taxCode: 'GST_SG_0%',
        taxRate: '0.0%',
        grossAmt: '4,288.56',
        memo: 'DQ INV',
        name: 'CUTECH MARINE SERVICES PTE LTD',
        department: '',
        class: '',
        location: '',
        vatAmt: '0.00',
        taxAccount: 'GST on Purchases SG',
        exchangeRate: '1.00',
        baseCurrency: 'SGD',
        totalAmountBaseCurrency: '4,288.56'
      },
      {
        id: 2,
        subsidiary: 'Tech Onshore MEP',
        account: '14055 Intercompany Receivable : Amt Due From TDQ',
        debit: '',
        credit: '4,288.56',
        taxCode: 'GST_SG_0%',
        taxRate: '0.0%',
        grossAmt: '4,288.56',
        memo: 'DQ INV',
        name: 'CUTECH MARINE SERVICES PTE LTD',
        department: '',
        class: '',
        location: '',
        vatAmt: '0.00',
        taxAccount: 'GST on Purchases SG',
        exchangeRate: '1.00',
        baseCurrency: 'SGD',
        totalAmountBaseCurrency: '4,288.56'
      },
      {
        id: 3,
        subsidiary: 'Tech Offshore (DQ)',
        account: '27740 Amt Due To Holding Non-Trade',
        debit: '4,288.56',
        credit: '',
        taxCode: 'GST_SG_0%',
        taxRate: '0.0%',
        grossAmt: '4,288.56',
        memo: '',
        name: 'CUTECH MARINE SERVICES PTE LTD',
        department: '',
        class: '',
        location: '',
        vatAmt: '0.00',
        taxAccount: 'GST on Purchases SG',
        exchangeRate: '1.00',
        baseCurrency: 'SGD',
        totalAmountBaseCurrency: '4,288.56'
      },
      {
        id: 4,
        subsidiary: 'Tech Offshore (DQ)',
        account: '20010 Accounts Payable : Trade Creditors',
        debit: '',
        credit: '4,288.56',
        taxCode: 'GST_SG_0%',
        taxRate: '0.0%',
        grossAmt: '4,288.56',
        memo: '',
        name: 'CUTECH MARINE SERVICES PTE LTD',
        department: '',
        class: '',
        location: '',
        vatAmt: '0.00',
        taxAccount: 'GST on Purchases SG',
        exchangeRate: '1.00',
        baseCurrency: 'SGD',
        totalAmountBaseCurrency: '4,288.56'
      }
    ]
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('edit-advanced-intercompany-journal');
    }
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-advanced-intercompany-journal-entries');
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
          <i className="fas fa-exchange-alt"></i>
          <div>
            <h1>Advanced Intercompany Journal Entry</h1>
            <div className="detail-subtitle">
              <span>{journalData.entryNo} • {journalData.date}</span>
              <span className="status-badge success" style={{ marginLeft: '10px' }}>
                APPROVED
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
                <label>DOCUMENT NUMBER</label>
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
                <label>REVERSAL DATE</label>
                <div className="field-value">{journalData.reversalDate || '-'}</div>
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

        {/* Tabs Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Transaction Details</h3>
          </div>
          <div className="section-body">
            <div className="tabs-container">
              <div className="tabs-header">
                <button 
                  className={`tab-button ${activeTab === 'lines' ? 'active' : ''}`}
                  onClick={() => setActiveTab('lines')}
                >
                  Lines
                </button>
                <button 
                  className={`tab-button ${activeTab === 'relatedRecords' ? 'active' : ''}`}
                  onClick={() => setActiveTab('relatedRecords')}
                >
                  Related Records
                </button>
                <button 
                  className={`tab-button ${activeTab === 'systemInfo' ? 'active' : ''}`}
                  onClick={() => setActiveTab('systemInfo')}
                >
                  System Information
                </button>
                <button 
                  className={`tab-button ${activeTab === 'glImpact' ? 'active' : ''}`}
                  onClick={() => setActiveTab('glImpact')}
                >
                  GL Impact
                </button>
                <button 
                  className={`tab-button ${activeTab === 'taxReporting' ? 'active' : ''}`}
                  onClick={() => setActiveTab('taxReporting')}
                >
                  Tax Reporting
                </button>
              </div>

              {/* Lines Tab */}
              {activeTab === 'lines' && (
                <div className="tab-content">
                  <div style={{ 
                    padding: '10px 15px', 
                    background: '#EDF2F7',
                    borderRadius: '4px',
                    fontWeight: '600',
                    marginBottom: '15px',
                    fontSize: '14px',
                    color: '#333'
            }}>
              {debitTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ●
            </div>

            <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="detail-items-table" style={{ minWidth: '2000px' }}>
              <thead>
                <tr>
                  <th style={{width: '10%'}}>SUBSIDIARY</th>
                  <th style={{width: '12%'}}>ACCOUNT</th>
                  <th style={{width: '6%'}}>DEBIT</th>
                  <th style={{width: '6%'}}>CREDIT</th>
                  <th style={{width: '6%'}}>TAX CODE</th>
                  <th style={{width: '5%'}}>TAX RATE</th>
                  <th style={{width: '6%'}}>GROSS AMT.</th>
                  <th style={{width: '8%'}}>MEMO</th>
                  <th style={{width: '10%'}}>NAME</th>
                  <th style={{width: '8%'}}>DEPARTMENT</th>
                  <th style={{width: '6%'}}>CLASS</th>
                  <th style={{width: '6%'}}>LOCATION</th>
                  <th style={{width: '5%'}}>VAT AMT</th>
                  <th style={{width: '8%'}}>TAX ACCOUNT</th>
                  <th style={{width: '6%'}}>EXCHANGE RATE</th>
                  <th style={{width: '6%'}}>BASE CURRENCY</th>
                  <th style={{width: '6%'}}>TOTAL AMOUNT (BASE CURRENCY)</th>
                </tr>
              </thead>
              <tbody>
                {journalData.lines.map((line) => (
                  <tr key={line.id}>
                    <td style={{ color: '#4a90e2', fontSize: '13px' }}>{line.subsidiary}</td>
                    <td style={{ color: '#4a90e2' }}>{line.account}</td>
                    <td style={{ textAlign: 'right', fontWeight: '600' }}>{line.debit}</td>
                    <td style={{ textAlign: 'right', fontWeight: '600' }}>{line.credit}</td>
                    <td>{line.taxCode}</td>
                    <td style={{ textAlign: 'right' }}>{line.taxRate}</td>
                    <td style={{ textAlign: 'right' }}>{line.grossAmt}</td>
                    <td>{line.memo}</td>
                    <td style={{ color: '#4a90e2', fontWeight: '500' }}>{line.name}</td>
                    <td>{line.department}</td>
                    <td>{line.class}</td>
                    <td>{line.location}</td>
                    <td style={{ textAlign: 'right' }}>{line.vatAmt}</td>
                    <td>{line.taxAccount}</td>
                    <td style={{ textAlign: 'right' }}>{line.exchangeRate}</td>
                    <td>{line.baseCurrency}</td>
                    <td style={{ textAlign: 'right', fontWeight: '600' }}>{line.totalAmountBaseCurrency}</td>
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
              )}

              {/* Related Records Tab */}
              {activeTab === 'relatedRecords' && (
                <div className="tab-content">
                  <div style={{ marginBottom: '15px' }}>
                    <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '10px' }}>Payments</h4>
                    <div className="items-section" style={{ overflowX: 'auto' }}>
                      <table className="items-table">
                        <thead>
                          <tr>
                            <th style={{ minWidth: '120px' }}>DATE</th>
                            <th style={{ minWidth: '150px' }}>TYPE</th>
                            <th style={{ minWidth: '150px' }}>NUMBER</th>
                            <th style={{ minWidth: '150px' }}>STATUS</th>
                            <th style={{ minWidth: '120px' }}>AMOUNT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="5" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                              No records to show.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* System Information Tab */}
              {activeTab === 'systemInfo' && (
                <div className="tab-content">
                  <div style={{ marginBottom: '15px' }}>
                    <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '10px' }}>System Notes</h4>
                    <div className="items-section" style={{ overflowX: 'auto' }}>
                      <table className="items-table">
                        <thead>
                          <tr>
                            <th style={{ minWidth: '150px' }}>DATE</th>
                            <th style={{ minWidth: '150px' }}>SET BY</th>
                            <th style={{ minWidth: '150px' }}>CONTEXT</th>
                            <th style={{ minWidth: '120px' }}>TYPE</th>
                            <th style={{ minWidth: '150px' }}>FIELD</th>
                            <th style={{ minWidth: '120px' }}>OLD VALUE</th>
                            <th style={{ minWidth: '120px' }}>NEW VALUE</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>22/2/2022 10:48 am</td>
                            <td>TOM-Maha</td>
                            <td>UI</td>
                            <td>Change</td>
                            <td>Impact</td>
                            <td>View</td>
                            <td>View</td>
                          </tr>
                          <tr>
                            <td>18/2/2022 5:18 pm</td>
                            <td>TOM-Maha</td>
                            <td>UI</td>
                            <td>Change</td>
                            <td>Impact</td>
                            <td>View</td>
                            <td>View</td>
                          </tr>
                          <tr>
                            <td>10/2/2022 10:01 am</td>
                            <td>TOM-System Account</td>
                            <td>UI</td>
                            <td>Set</td>
                            <td>Entry No.</td>
                            <td></td>
                            <td>J47</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* GL Impact Tab */}
              {activeTab === 'glImpact' && (
                <div className="tab-content">
                  <div className="items-section" style={{ overflowX: 'auto' }}>
                    <table className="items-table">
                      <thead>
                        <tr>
                          <th style={{ minWidth: '250px' }}>ACCOUNT</th>
                          <th style={{ minWidth: '120px' }}>AMOUNT (DEBIT)</th>
                          <th style={{ minWidth: '120px' }}>AMOUNT (CREDIT)</th>
                          <th style={{ minWidth: '100px' }}>POSTING</th>
                          <th style={{ minWidth: '120px' }}>MEMO</th>
                          <th style={{ minWidth: '180px' }}>NAME</th>
                          <th style={{ minWidth: '180px' }}>SUBSIDIARY</th>
                          <th style={{ minWidth: '150px' }}>DEPARTMENT</th>
                          <th style={{ minWidth: '120px' }}>CLASS</th>
                          <th style={{ minWidth: '120px' }}>LOCATION</th>
                        </tr>
                      </thead>
                      <tbody>
                        {journalData.lines.map((line) => (
                          <tr key={line.id}>
                            <td style={{ color: '#4a90e2' }}>{line.account}</td>
                            <td style={{ textAlign: 'right', fontWeight: '600' }}>{line.debit || '-'}</td>
                            <td style={{ textAlign: 'right', fontWeight: '600' }}>{line.credit || '-'}</td>
                            <td style={{ textAlign: 'center' }}>Yes</td>
                            <td>{line.memo || 'INV'}</td>
                            <td style={{ color: '#4a90e2' }}>{line.name}</td>
                            <td>{line.subsidiary}</td>
                            <td>{line.department || '-'}</td>
                            <td>{line.class || '-'}</td>
                            <td>{line.location || '-'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Tax Reporting Tab */}
              {activeTab === 'taxReporting' && (
                <div className="tab-content">
                  <div style={{ padding: '2rem', textAlign: 'center', color: '#999', background: '#f9f9f9', borderRadius: '4px' }}>
                    <p>No tax reporting entries.</p>
                  </div>
                </div>
              )}
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

export default ViewAdvancedIntercompanyJournalDetail;
