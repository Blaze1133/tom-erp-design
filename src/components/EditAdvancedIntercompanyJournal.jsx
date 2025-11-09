import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditAdvancedIntercompanyJournal = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  const [formData, setFormData] = useState({
    customForm: 'TOM Journal Entry',
    entryNo: 'J48',
    date: '9/22/2021',
    postingPeriod: 'Dec 2021',
    reversalDate: '',
    deferEntry: false,
    currency: 'SGD',
    outOfBalanceBy: '0.00',
    memo: 'CUTECH TEQ INV',
    subsidiary: 'MSR Onshore Tech Pte - Sinopore Pte Ltd',
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
      }
    ]
  });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    showToast('Advanced Intercompany Journal Entry saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-advanced-intercompany-journal-entries');
      }
    }
  };

  const handleVoid = () => {
    if (window.confirm('Are you sure you want to void this journal entry?')) {
      showToast('Journal entry voided', 'info');
    }
  };

  const handleAddLine = () => {
    const newLine = {
      id: formData.lines.length + 1,
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
    };
    setFormData(prev => ({
      ...prev,
      lines: [...prev.lines, newLine]
    }));
  };

  const handleClearAllLines = () => {
    if (window.confirm('Are you sure you want to clear all lines?')) {
      setFormData(prev => ({
        ...prev,
        lines: []
      }));
      showToast('All lines cleared', 'info');
    }
  };

  const calculateTotals = () => {
    const debitTotal = formData.lines.reduce((sum, line) => {
      const debit = parseFloat(line.debit?.replace(/,/g, '') || 0);
      return sum + debit;
    }, 0);
    
    const creditTotal = formData.lines.reduce((sum, line) => {
      const credit = parseFloat(line.credit?.replace(/,/g, '') || 0);
      return sum + credit;
    }, 0);
    
    const outOfBalance = debitTotal - creditTotal;
    
    return { debitTotal, creditTotal, outOfBalance };
  };

  const { debitTotal, creditTotal, outOfBalance } = calculateTotals();

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-exchange-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Advanced Intercompany Journal</h1>
          <span style={{ marginLeft: '10px', fontSize: '20px', fontWeight: '600' }}>{formData.entryNo}</span>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-secondary" onClick={handleVoid}>
            <i className="fas fa-ban"></i>
            Void
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
              <label className="form-label required">Custom Form</label>
              <select 
                className="form-control"
                value={formData.customForm}
                onChange={(e) => handleInputChange('customForm', e.target.value)}
              >
                <option>TOM Journal Entry</option>
                <option>Standard Journal Entry</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label required">Date</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Entry No.</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.entryNo}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">Posting Period</label>
              <select 
                className="form-control"
                value={formData.postingPeriod}
                onChange={(e) => handleInputChange('postingPeriod', e.target.value)}
              >
                <option>Dec 2021</option>
                <option>Jan 2022</option>
                <option>Feb 2022</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Debit</label>
              <input 
                type="text" 
                className="form-control"
                value={debitTotal.toFixed(2)}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">Reversal Date</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.reversalDate}
                onChange={(e) => handleInputChange('reversalDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Credit</label>
              <input 
                type="text" 
                className="form-control"
                value={creditTotal.toFixed(2)}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">Memo</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.memo}
                onChange={(e) => handleInputChange('memo', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Out of Balance By</label>
              <input 
                type="text" 
                className="form-control"
                value={outOfBalance.toFixed(2)}
                disabled
                style={{ 
                  color: outOfBalance !== 0 ? '#E53E3E' : '#2D3748',
                  fontWeight: outOfBalance !== 0 ? '600' : 'normal'
                }}
              />
            </div>
            <div className="form-group">
              <label className="form-label required">Currency</label>
              <select 
                className="form-control"
                value={formData.currency}
                onChange={(e) => handleInputChange('currency', e.target.value)}
              >
                <option>SGD</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
            <div className="form-group" style={{ gridColumn: 'span 1', display: 'flex', alignItems: 'flex-end' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <input 
                  type="checkbox" 
                  checked={formData.deferEntry}
                  onChange={(e) => handleInputChange('deferEntry', e.target.checked)}
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />
                <span style={{ fontSize: '14px', fontWeight: '500' }}>Defer Entry</span>
              </label>
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
            <div className="form-group" style={{ gridColumn: 'span 2', maxWidth: '400px' }}>
              <label className="form-label required">Subsidiary</label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleInputChange('subsidiary', e.target.value)}
              >
                <option value="">Select...</option>
                <option>MSR Onshore Tech Pte - Sinopore Pte Ltd</option>
                <option>Tech Onshore MEP Prefabricators Pte Ltd.</option>
                <option>Tech Electric & Automation Pte Ltd</option>
                <option>Tech Marine Offshore (S) Pte Ltd</option>
                <option>Tech Offshore Marine (DQ) Pte Ltd</option>
                <option>Tech Offshore Marine (s) Pte Ltd</option>
                <option>Tech Offshore Marine (SV) Pte Ltd</option>
              </select>
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

          <div style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
            <button className="btn btn-secondary" onClick={handleClearAllLines}>
              Clear All Lines
            </button>
          </div>

          <button className="add-item-btn" onClick={handleAddLine}>
            <i className="fas fa-plus"></i>
            Add Line
          </button>

          {formData.lines.length > 0 ? (
            <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="detail-items-table" style={{ minWidth: '2000px' }}>
                <thead>
                  <tr>
                    <th style={{width: '10%'}}>SUBSIDIARY <span className="required">*</span></th>
                    <th style={{width: '12%'}}>ACCOUNT <span className="required">*</span></th>
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
                    <th style={{width: '6%'}}>EXCHANGE RATE <span className="required">*</span></th>
                    <th style={{width: '6%'}}>BASE CURRENCY</th>
                    <th style={{width: '6%'}}>TOTAL AMOUNT (BASE CURRENCY)</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.lines.map((line) => (
                    <tr key={line.id}>
                      <td>
                        <select className="table-input" defaultValue={line.subsidiary} style={{width: '100%'}}>
                          <option value="">Select...</option>
                          <option>Tech Onshore MEP</option>
                          <option>Tech Electric & Auto</option>
                          <option>Tech Marine Offshore</option>
                          <option>Tech Offshore (DQ)</option>
                        </select>
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input" 
                          placeholder="<Type then tab>"
                          defaultValue={line.account} 
                          style={{width: '100%'}} 
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input" 
                          defaultValue={line.debit} 
                          style={{width: '100%', textAlign: 'right'}} 
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input" 
                          defaultValue={line.credit} 
                          style={{width: '100%', textAlign: 'right'}} 
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input" 
                          defaultValue={line.taxCode} 
                          style={{width: '100%'}} 
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input" 
                          defaultValue={line.taxRate} 
                          style={{width: '100%', textAlign: 'right'}} 
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input" 
                          defaultValue={line.grossAmt} 
                          style={{width: '100%', textAlign: 'right'}} 
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input" 
                          defaultValue={line.memo} 
                          style={{width: '100%'}} 
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input" 
                          defaultValue={line.name} 
                          style={{width: '100%'}} 
                        />
                      </td>
                      <td>
                        <select className="table-input" defaultValue={line.department} style={{width: '100%'}}>
                          <option value="">Select...</option>
                          <option>MEP</option>
                          <option>Engineering</option>
                          <option>Operations</option>
                        </select>
                      </td>
                      <td>
                        <select className="table-input" defaultValue={line.class} style={{width: '100%'}}>
                          <option value="">Select...</option>
                          <option>Consumable Item</option>
                          <option>Material Supply</option>
                        </select>
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input" 
                          defaultValue={line.location} 
                          style={{width: '100%'}} 
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input" 
                          defaultValue={line.vatAmt} 
                          style={{width: '100%', textAlign: 'right'}} 
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input" 
                          defaultValue={line.taxAccount} 
                          style={{width: '100%'}} 
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input" 
                          defaultValue={line.exchangeRate} 
                          style={{width: '100%', textAlign: 'right'}} 
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input" 
                          defaultValue={line.baseCurrency} 
                          style={{width: '100%'}} 
                          disabled
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input" 
                          defaultValue={line.totalAmountBaseCurrency} 
                          style={{width: '100%', textAlign: 'right'}} 
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-items-message">
              <p>No lines added yet. Click "Add Line" to start adding intercompany journal entry lines.</p>
            </div>
          )}
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-primary" onClick={handleSave}>
              <i className="fas fa-save"></i>
              Save
            </button>
            <button className="btn btn-secondary" onClick={handleVoid}>
              <i className="fas fa-ban"></i>
              Void
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

export default EditAdvancedIntercompanyJournal;
