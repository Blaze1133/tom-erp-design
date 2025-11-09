import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const MakeJournalEntries = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  const [formData, setFormData] = useState({
    customForm: 'TOM Journal Entry',
    entryNo: 'To Be Generated',
    date: '2025-11-07',
    postingPeriod: 'Nov 2025',
    reversalDate: '',
    deferEntry: false,
    currency: 'SGD',
    exchangeRate: '1.00',
    memo: '',
    subsidiary: '',
    lines: []
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
    showToast('Journal entry saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Journal entry cancelled', 'info');
    }
  };

  const handleAddLine = () => {
    const newLine = {
      id: formData.lines.length + 1,
      account: '',
      debit: '',
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
          <i className="fas fa-book" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Journal Entry</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-secondary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
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
                type="date" 
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
                <option>Nov 2025</option>
                <option>Dec 2025</option>
                <option>Jan 2026</option>
              </select>
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
              <label className="form-label">Reversal Date</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.reversalDate}
                onChange={(e) => handleInputChange('reversalDate', e.target.value)}
              />
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
            <div className="form-group">
              <label className="form-label required">Exchange Rate</label>
              <input 
                type="number" 
                className="form-control"
                step="0.01"
                value={formData.exchangeRate}
                onChange={(e) => handleInputChange('exchangeRate', e.target.value)}
              />
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
            <div className="items-table-wrapper">
              <table className="detail-items-table">
                <thead>
                  <tr>
                    <th style={{width: '15%'}}>ACCOUNT <span className="required">*</span></th>
                    <th style={{width: '10%'}}>DEBIT</th>
                    <th style={{width: '10%'}}>CREDIT</th>
                    <th style={{width: '10%'}}>TAX CODE</th>
                    <th style={{width: '8%'}}>TAX RATE</th>
                    <th style={{width: '10%'}}>GROSS AMT</th>
                    <th style={{width: '12%'}}>MEMO</th>
                    <th style={{width: '12%'}}>NAME</th>
                    <th style={{width: '13%'}}>DEPARTMENT <span className="required">*</span></th>
                  </tr>
                </thead>
                <tbody>
                  {formData.lines.map((line) => (
                    <tr key={line.id}>
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
                          style={{width: '100%'}} 
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input" 
                          defaultValue={line.credit} 
                          style={{width: '100%'}} 
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
                          style={{width: '100%'}} 
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input" 
                          defaultValue={line.grossAmt} 
                          style={{width: '100%'}} 
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
                          <option>O&G</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-items-message">
              <p>No lines added yet. Click "Add Line" to start adding journal entry lines.</p>
            </div>
          )}
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-secondary" onClick={handleSave}>
              <i className="fas fa-save"></i>
              Save
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

export default MakeJournalEntries;
