import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewAdvancedIntercompanyJournalDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

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
          <i className="fas fa-file-alt" style={{ fontSize: '18px', color: '#4a90e2' }}></i>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>Advanced Intercompany Journal</div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '4px' }}>
              <span style={{ fontSize: '13px', color: '#666' }}>{journalData.entryNo}</span>
              <span style={{ 
                padding: '2px 10px', 
                background: '#48bb78', 
                color: 'white', 
                borderRadius: '3px', 
                fontSize: '11px',
                fontWeight: '600',
                textTransform: 'uppercase'
              }}>
                APPROVED
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button style={{ padding: '4px 8px', border: 'none', background: 'transparent', cursor: 'pointer' }}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button style={{ padding: '4px 8px', border: 'none', background: 'transparent', cursor: 'pointer' }}>
            <i className="fas fa-arrow-right"></i>
          </button>
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
            <i className="fas fa-print"></i> Print
          </button>
          <button className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-copy"></i> Copy
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
          <div style={{ padding: '25px 20px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '30px 60px',
              fontSize: '13px'
            }}>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>ENTRY NO.</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{journalData.entryNo}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>EXCHANGE RATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>1.00</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>MEMO</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{journalData.memo}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>AMOUNT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{debitTotal.toFixed(2)}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{journalData.date}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>STATUS</div>
                <div style={{ color: '#333', fontSize: '14px' }}>Pending Manager Approval</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CURRENCY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{journalData.currency}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>POSTING PERIOD</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{journalData.postingPeriod}</div>
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
          <div style={{ padding: '25px 20px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '30px 60px',
              fontSize: '13px'
            }}>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>SUBSIDIARY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{journalData.subsidiary}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>REF PROJECT NO.</div>
                <div style={{ color: '#333', fontSize: '14px' }}>-</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>APPROVAL REJECTION REMARKS</div>
                <div style={{ color: '#333', fontSize: '14px' }}>-</div>
              </div>
            </div>
          </div>
        </div>

        {/* Lines Section */}
        <div style={{ 
          background: 'white', 
          borderRadius: '4px', 
          marginBottom: '20px',
          border: '1px solid #e0e0e0',
          overflow: 'hidden'
        }}>
          {/* Tabs */}
          <div style={{ 
            display: 'flex', 
            background: '#4a5568',
            borderBottom: '2px solid #2d3748'
          }}>
            <div style={{ 
              padding: '12px 24px', 
              background: '#5a6c7d',
              color: 'white',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer',
              borderRight: '1px solid #4a5568'
            }}>
              Lines
            </div>
            <div style={{ 
              padding: '12px 24px', 
              background: '#4a5568',
              color: '#cbd5e0',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer',
              borderRight: '1px solid #3a4556'
            }}>
              Communication
            </div>
            <div style={{ 
              padding: '12px 24px', 
              background: '#4a5568',
              color: '#cbd5e0',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer',
              borderRight: '1px solid #3a4556'
            }}>
              System Information
            </div>
            <div style={{ 
              padding: '12px 24px', 
              background: '#4a5568',
              color: '#cbd5e0',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer',
              borderRight: '1px solid #3a4556'
            }}>
              Custom
            </div>
            <div style={{ 
              padding: '12px 24px', 
              background: '#4a5568',
              color: '#cbd5e0',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              GL Impact
            </div>
          </div>
          
          <div style={{ padding: '20px' }}>
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

export default ViewAdvancedIntercompanyJournalDetail;
