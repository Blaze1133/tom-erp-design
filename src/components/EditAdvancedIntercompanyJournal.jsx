import React, { useState, useEffect } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditAdvancedIntercompanyJournal = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('lines');
  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  
  const [formData, setFormData] = useState({
    entryNo: 'J48',
    date: '2021-09-22',
    postingPeriod: 'Dec 2021',
    reversalDate: '',
    deferEntry: false,
    currency: 'SGD',
    outOfBalanceBy: '0.00',
    memo: 'CUTECH TEQ INV',
    subsidiary: 'MSR Onshore Tech Pte - Sinopore Pte Ltd',
    taxReporting: [],
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

  const handleClearAllLines = () => {
    if (window.confirm('Are you sure you want to clear all lines?')) {
      setFormData(prev => ({
        ...prev,
        lines: []
      }));
      showToast('All lines cleared', 'info');
    }
  };

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
        <button className="btn-toolbar" onClick={handleVoid}>
          <i className="fas fa-ban"></i>
          Void
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
                  <option>Dec 2021</option>
                  <option>Jan 2022</option>
                  <option>Feb 2022</option>
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
                  value={outOfBalance.toFixed(2)}
                  disabled
                  style={{ 
                    color: outOfBalance !== 0 ? '#E53E3E' : '#2D3748',
                    fontWeight: outOfBalance !== 0 ? '600' : 'normal'
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
                                <select className="form-control" defaultValue={line.subsidiary} style={{ minWidth: '180px', height: '40px' }}>
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
                                  className="form-control" 
                                  placeholder="<Type then tab>"
                                  defaultValue={line.account} 
                                  style={{ minWidth: '250px', height: '40px' }} 
                                />
                              </td>
                              <td>
                                <input 
                                  type="number" 
                                  className="form-control" 
                                  defaultValue={line.debit}
                                  step="0.01"
                                  style={{ minWidth: '120px', height: '40px', textAlign: 'right' }} 
                                />
                              </td>
                              <td>
                                <input 
                                  type="number" 
                                  className="form-control" 
                                  defaultValue={line.credit}
                                  step="0.01"
                                  style={{ minWidth: '120px', height: '40px', textAlign: 'right' }} 
                                />
                              </td>
                              <td>
                                <select className="form-control" defaultValue={line.taxCode} style={{ minWidth: '150px', height: '40px' }}>
                                  <option value="">Select...</option>
                                  <option>GST_SG:7%</option>
                                  <option>GST_SG:9%</option>
                                  <option>GST_SG_0%</option>
                                  <option>No Tax</option>
                                </select>
                              </td>
                              <td>
                                <input 
                                  type="text" 
                                  className="form-control" 
                                  defaultValue={line.taxRate}
                                  disabled
                                  style={{ minWidth: '100px', height: '40px', textAlign: 'right', background: '#f5f5f5' }} 
                                />
                              </td>
                              <td>
                                <input 
                                  type="number" 
                                  className="form-control" 
                                  defaultValue={line.grossAmt}
                                  step="0.01"
                                  style={{ minWidth: '120px', height: '40px', textAlign: 'right' }} 
                                />
                              </td>
                              <td>
                                <input 
                                  type="text" 
                                  className="form-control" 
                                  defaultValue={line.memo}
                                  placeholder="Enter memo"
                                  style={{ minWidth: '200px', height: '40px' }} 
                                />
                              </td>
                              <td>
                                <input 
                                  type="text" 
                                  className="form-control" 
                                  defaultValue={line.name}
                                  placeholder="Enter name"
                                  style={{ minWidth: '180px', height: '40px' }} 
                                />
                              </td>
                              <td>
                                <select className="form-control" defaultValue={line.department} style={{ minWidth: '180px', height: '40px' }}>
                                  <option value="">Select...</option>
                                  <option>TOM: Human Resource</option>
                                  <option>TOM: Finance</option>
                                  <option>TOM: IT</option>
                                  <option>TOM: Engineering</option>
                                  <option>TOM: Production</option>
                                </select>
                              </td>
                              <td>
                                <select className="form-control" defaultValue={line.class} style={{ minWidth: '150px', height: '40px' }}>
                                  <option value="">Select...</option>
                                  <option>Consumable Item</option>
                                  <option>Fabrication</option>
                                  <option>Material Supply</option>
                                  <option>Project Works</option>
                                </select>
                              </td>
                              <td>
                                <select className="form-control" defaultValue={line.location} style={{ minWidth: '150px', height: '40px' }}>
                                  <option value="">Select...</option>
                                  <option>Hong Hang Shipyard</option>
                                  <option>Mega yard</option>
                                  <option>Singapore (MEP)</option>
                                  <option>TOM-11</option>
                                  <option>TOM-13</option>
                                </select>
                              </td>
                              <td>
                                <input 
                                  type="number" 
                                  className="form-control" 
                                  defaultValue={line.vatAmt}
                                  step="0.01"
                                  style={{ minWidth: '120px', height: '40px', textAlign: 'right' }} 
                                />
                              </td>
                              <td>
                                <input 
                                  type="text" 
                                  className="form-control" 
                                  defaultValue={line.taxAccount}
                                  placeholder="Tax account"
                                  style={{ minWidth: '180px', height: '40px' }} 
                                />
                              </td>
                              <td>
                                <input 
                                  type="number" 
                                  className="form-control" 
                                  defaultValue={line.exchangeRate}
                                  step="0.01"
                                  style={{ minWidth: '120px', height: '40px', textAlign: 'right' }} 
                                />
                              </td>
                              <td>
                                <input 
                                  type="text" 
                                  className="form-control" 
                                  defaultValue={line.baseCurrency}
                                  disabled
                                  style={{ minWidth: '120px', height: '40px', background: '#f5f5f5' }} 
                                />
                              </td>
                              <td>
                                <input 
                                  type="number" 
                                  className="form-control" 
                                  defaultValue={line.totalAmountBaseCurrency}
                                  step="0.01"
                                  style={{ minWidth: '150px', height: '40px', textAlign: 'right' }} 
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

              {/* Related Records Tab */}
              {activeTab === 'relatedRecords' && (
                <div className="tab-content">
                  <div style={{ marginBottom: '15px' }}>
                    <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '10px' }}>Payments</h4>
                    <button className="btn-toolbar" style={{ marginBottom: '10px' }}>
                      <i className="fas fa-print"></i>
                      Print
                    </button>
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
                    <div style={{ marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <select className="form-control" style={{ maxWidth: '150px' }}>
                        <option>Default</option>
                        <option>Custom</option>
                      </select>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="<Type then tab>"
                        style={{ maxWidth: '300px' }} 
                      />
                    </div>
                    <button className="btn-toolbar" style={{ marginBottom: '10px' }}>
                      Customize View
                    </button>
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
          <button className="btn-toolbar" onClick={handleVoid}>
            <i className="fas fa-ban"></i>
            Void
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

export default EditAdvancedIntercompanyJournal;
