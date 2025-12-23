import React, { useState, useEffect } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const MakeAdvancedIntercompanyJournal = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('lines');
  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  
  const [formData, setFormData] = useState({
    entryNo: 'To Be Generated',
    date: '2025-11-07',
    postingPeriod: 'Nov 2025',
    reversalDate: '',
    deferEntry: false,
    currency: 'SGD',
    outOfBalanceBy: '0.00',
    memo: '',
    subsidiary: '',
    lines: [],
    taxReporting: []
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

  const handleAddLine = () => {
    const newLine = {
      id: formData.lines.length + 1,
      subsidiary: '',
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
      taxAccount: '',
      exchangeRate: '1.00',
      baseCurrency: 'SGD',
      totalAmountBaseCurrency: ''
    };
    setFormData(prev => ({
      ...prev,
      lines: [...prev.lines, newLine]
    }));
  };

  const handleInsertAbove = (index) => {
    const newLine = {
      id: Date.now(),
      subsidiary: '',
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
      taxAccount: '',
      exchangeRate: '1.00',
      baseCurrency: 'SGD',
      totalAmountBaseCurrency: ''
    };
    const newLines = [...formData.lines];
    newLines.splice(index, 0, newLine);
    setFormData(prev => ({ ...prev, lines: newLines }));
  };

  const handleInsertBelow = (index) => {
    const newLine = {
      id: Date.now(),
      subsidiary: '',
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
      taxAccount: '',
      exchangeRate: '1.00',
      baseCurrency: 'SGD',
      totalAmountBaseCurrency: ''
    };
    const newLines = [...formData.lines];
    newLines.splice(index + 1, 0, newLine);
    setFormData(prev => ({ ...prev, lines: newLines }));
  };

  const handleDeleteRow = (index) => {
    if (formData.lines.length === 1) {
      showToast('Cannot delete the last line', 'error');
      return;
    }
    const newLines = formData.lines.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, lines: newLines }));
    showToast('Line deleted', 'success');
  };

  const handleMenuToggle = (index, event) => {
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    setMenuPosition({
      top: rect.bottom + 5,
      left: rect.left
    });
    setActiveMenu(activeMenu === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      if (activeMenu !== null) {
        setActiveMenu(null);
      }
    };
    if (activeMenu !== null) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeMenu]);

  const handleAddTaxReporting = () => {
    const newTax = {
      id: formData.taxReporting.length + 1,
      documentNumber: ''
    };
    setFormData(prev => ({
      ...prev,
      taxReporting: [...prev.taxReporting, newTax]
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

  const calculateTotals = () => {
    const debitTotal = formData.lines.reduce((sum, line) => {
      const debit = parseFloat(line.debit?.replace(/,/g, '') || 0);
      return sum + debit;
    }, 0);
    
    const creditTotal = formData.lines.reduce((sum, line) => {
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
              <span>{formData.entryNo} • {formData.date}</span>
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
        <button className="btn-toolbar" onClick={handleCancel}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
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
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.entryNo}
                  disabled
                />
              </div>
              <div className="detail-field">
                <label>DATE <span className="required">*</span></label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>POSTING PERIOD</label>
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
              <div className="detail-field">
                <label>CURRENCY <span className="required">*</span></label>
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
              <div className="detail-field">
                <label>REVERSAL DATE</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.reversalDate}
                  onChange={(e) => handleInputChange('reversalDate', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>DEBIT</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={debitTotal.toFixed(2)}
                  disabled
                />
              </div>
              <div className="detail-field">
                <label>CREDIT</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={creditTotal.toFixed(2)}
                  disabled
                />
              </div>
              <div className="detail-field">
                <label>OUT OF BALANCE BY</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={(debitTotal - creditTotal).toFixed(2)}
                  disabled
                  style={{ 
                    color: (debitTotal - creditTotal) !== 0 ? '#E53E3E' : '#2D3748',
                    fontWeight: (debitTotal - creditTotal) !== 0 ? '600' : 'normal'
                  }}
                />
              </div>
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label>MEMO</label>
                <textarea 
                  className="form-control"
                  rows="2"
                  value={formData.memo}
                  onChange={(e) => handleInputChange('memo', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={formData.deferEntry}
                    onChange={(e) => handleInputChange('deferEntry', e.target.checked)}
                    style={{ width: 'auto', margin: 0 }}
                  />
                  <span>DEFER ENTRY</span>
                </label>
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
                <label>SUBSIDIARY <span className="required">*</span></label>
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
                  className={`tab-button ${activeTab === 'taxReporting' ? 'active' : ''}`}
                  onClick={() => setActiveTab('taxReporting')}
                >
                  Tax Reporting
                </button>
              </div>

              {/* Lines Tab */}
              {activeTab === 'lines' && (
                <div className="tab-content">
                  {formData.lines.length > 0 ? (
                    <div className="items-section" style={{ overflowX: 'auto' }}>
                      <table className="items-table">
                        <thead>
                          <tr>
                            <th style={{ width: '40px', textAlign: 'center' }}></th>
                            <th style={{ minWidth: '180px' }}>SUBSIDIARY <span className="required">*</span></th>
                            <th style={{ minWidth: '250px' }}>ACCOUNT <span className="required">*</span></th>
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
                            <th style={{ minWidth: '120px' }}>VAT AMT</th>
                            <th style={{ minWidth: '180px' }}>TAX ACCOUNT</th>
                            <th style={{ minWidth: '120px' }}>EXCHANGE RATE <span className="required">*</span></th>
                            <th style={{ minWidth: '120px' }}>BASE CURRENCY</th>
                            <th style={{ minWidth: '150px' }}>TOTAL AMOUNT (BASE CURRENCY)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {formData.lines.map((line, index) => (
                            <tr 
                              key={line.id}
                              className={`table-row-with-actions ${hoveredRow === index ? 'hovered' : ''}`}
                              onMouseEnter={() => setHoveredRow(index)}
                              onMouseLeave={() => setHoveredRow(null)}
                            >
                              <td style={{ textAlign: 'center', position: 'relative' }}>
                                {hoveredRow === index && (
                                  <button 
                                    className="row-actions-btn"
                                    title="Row Actions"
                                    onClick={(e) => handleMenuToggle(index, e)}
                                  >
                                    <i className="fas fa-ellipsis-v"></i>
                                  </button>
                                )}
                                {activeMenu === index && (
                                  <div 
                                    className="row-actions-menu"
                                    style={{
                                      position: 'fixed',
                                      top: `${menuPosition.top}px`,
                                      left: `${menuPosition.left}px`,
                                      display: 'block',
                                      zIndex: 1000
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <button onClick={() => {
                                      handleInsertAbove(index);
                                      setActiveMenu(null);
                                    }}>
                                      <i className="fas fa-arrow-up"></i>
                                      Insert Above
                                    </button>
                                    <button onClick={() => {
                                      handleInsertBelow(index);
                                      setActiveMenu(null);
                                    }}>
                                      <i className="fas fa-arrow-down"></i>
                                      Insert Below
                                    </button>
                                    <button onClick={() => {
                                      handleDeleteRow(index);
                                      setActiveMenu(null);
                                    }} className="delete-action">
                                      <i className="fas fa-trash"></i>
                                      Delete Row
                                    </button>
                                  </div>
                                )}
                              </td>
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
            <div style={{ padding: '2rem', textAlign: 'center', color: '#999', background: '#f9f9f9', borderRadius: '4px' }}>
              <p>No lines added yet. Click "Add Line" to start adding intercompany journal entry lines.</p>
            </div>
          )}
                </div>
              )}

              {/* Tax Reporting Tab */}
              {activeTab === 'taxReporting' && (
                <div className="tab-content">
                  <div style={{ marginBottom: '15px' }}>
                    <label style={{ fontWeight: '600', marginBottom: '8px', display: 'block' }}>DOCUMENT NUMBER</label>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter document number"
                        style={{ maxWidth: '400px' }} 
                      />
                      <button className="btn-toolbar-primary" onClick={() => showToast('Tax reporting saved', 'success')}>
                        <i className="fas fa-check"></i>
                        Save
                      </button>
                    </div>
                  </div>
                  {formData.taxReporting.length > 0 && (
                    <div style={{ marginTop: '20px' }}>
                      <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '10px', color: '#666' }}>Saved Entries:</h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {formData.taxReporting.map((tax) => (
                          <li key={tax.id} style={{ padding: '8px 12px', background: '#f9f9f9', marginBottom: '5px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>{tax.documentNumber}</span>
                            <button 
                              className="btn-icon" 
                              style={{ color: '#dc3545', padding: '4px 8px' }}
                              onClick={() => {
                                const newTaxReporting = formData.taxReporting.filter(t => t.id !== tax.id);
                                setFormData(prev => ({ ...prev, taxReporting: newTaxReporting }));
                                showToast('Entry removed', 'info');
                              }}
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="detail-footer">
          <button className="btn-toolbar" onClick={handleCancel}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn-toolbar-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
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

export default MakeAdvancedIntercompanyJournal;
