import React, { useState, useEffect } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditJournalEntry = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  
  const [formData, setFormData] = useState({
    entryNo: 'J144',
    date: '2021-02-01',
    postingPeriod: 'Feb 2021',
    reversalDate: '',
    deferEntry: false,
    currency: 'SGD',
    exchangeRate: '1.00',
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
        location: ''
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
        location: ''
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
        department: ''
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
        department: ''
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
    showToast('Journal entry saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-journal-entries');
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
      location: ''
    };
    setFormData(prev => ({
      ...prev,
      lines: [...prev.lines, newLine]
    }));
  };

  const handleInsertAbove = (index) => {
    const newLine = {
      id: Date.now(),
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
      location: ''
    };
    const newLines = [...formData.lines];
    newLines.splice(index, 0, newLine);
    setFormData(prev => ({ ...prev, lines: newLines }));
  };

  const handleInsertBelow = (index) => {
    const newLine = {
      id: Date.now(),
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
      location: ''
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
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-book"></i>
          <div>
            <h1>Journal Entry</h1>
            <div className="detail-subtitle">
              <span>{formData.entryNo} • {formData.date}</span>
              <span className="status-badge success" style={{ marginLeft: '10px' }}>
                PAYMENTS APPLIED
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
                  <option>Feb 2021</option>
                  <option>Mar 2021</option>
                  <option>Apr 2021</option>
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
                <label>EXCHANGE RATE <span className="required">*</span></label>
                <input 
                  type="number" 
                  className="form-control"
                  step="0.01"
                  value={formData.exchangeRate}
                  onChange={(e) => handleInputChange('exchangeRate', e.target.value)}
                />
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

        {/* Lines Section - Same as MakeJournalEntries */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Lines</h3>
          </div>
          <div className="section-body">
            <div style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
              <button className="btn-toolbar" onClick={handleAddLine}>
                <i className="fas fa-plus"></i>
                Add Line
              </button>
              <button className="btn-toolbar" onClick={handleClearAllLines}>
                <i className="fas fa-trash"></i>
                Clear All Lines
              </button>
            </div>

            {formData.lines.length > 0 ? (
              <div className="items-section" style={{ overflowX: 'auto' }}>
                <table className="items-table">
                  <thead>
                    <tr>
                      <th style={{ minWidth: '50px', textAlign: 'center' }}>ACTIONS</th>
                      <th style={{ minWidth: '250px' }}>ACCOUNT <span className="required">*</span></th>
                      <th style={{ minWidth: '120px' }}>DEBIT</th>
                      <th style={{ minWidth: '120px' }}>CREDIT</th>
                      <th style={{ minWidth: '150px' }}>TAX CODE</th>
                      <th style={{ minWidth: '100px' }}>TAX RATE</th>
                      <th style={{ minWidth: '120px' }}>GROSS AMT</th>
                      <th style={{ minWidth: '200px' }}>MEMO</th>
                      <th style={{ minWidth: '180px' }}>NAME</th>
                      <th style={{ minWidth: '180px' }}>DEPARTMENT <span className="required">*</span></th>
                      <th style={{ minWidth: '150px' }}>CLASS</th>
                      <th style={{ minWidth: '150px' }}>LOCATION</th>
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
                            style={{ minWidth: '120px', height: '40px' }} 
                          />
                        </td>
                        <td>
                          <input 
                            type="number" 
                            className="form-control" 
                            defaultValue={line.credit}
                            step="0.01" 
                            style={{ minWidth: '120px', height: '40px' }} 
                          />
                        </td>
                        <td>
                          <select className="form-control" defaultValue={line.taxCode} style={{ minWidth: '150px', height: '40px' }}>
                            <option value="">Select...</option>
                            <option>GST_SG:7%</option>
                            <option>GST_SG:9%</option>
                            <option>No Tax</option>
                          </select>
                        </td>
                        <td>
                          <input 
                            type="text" 
                            className="form-control" 
                            defaultValue={line.taxRate}
                            disabled
                            style={{ minWidth: '100px', height: '40px', background: '#f5f5f5' }} 
                          />
                        </td>
                        <td>
                          <input 
                            type="number" 
                            className="form-control" 
                            defaultValue={line.grossAmt}
                            step="0.01" 
                            style={{ minWidth: '120px', height: '40px' }} 
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
                            <option>TOM: Logistic</option>
                            <option>TOM: Operating</option>
                            <option>TOM: Purchase</option>
                            <option>TOM: Engineering</option>
                            <option>TOM: Production</option>
                          </select>
                        </td>
                        <td>
                          <select className="form-control" defaultValue={line.class} style={{ minWidth: '150px', height: '40px' }}>
                            <option value="">Select...</option>
                            <option>Consumable Item</option>
                            <option>Fabrication</option>
                            <option>Installation work</option>
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#999', background: '#f9f9f9', borderRadius: '4px' }}>
                <p>No lines added yet. Click "Add Line" to start adding journal entry lines.</p>
              </div>
            )}

            {formData.lines.length > 0 && (
              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '2rem', padding: '1rem', background: '#f9f9f9', borderRadius: '4px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <span style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.25rem' }}>Total Debit</span>
                  <strong style={{ fontSize: '1.25rem', color: '#333' }}>${debitTotal.toFixed(2)}</strong>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <span style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.25rem' }}>Total Credit</span>
                  <strong style={{ fontSize: '1.25rem', color: '#333' }}>${creditTotal.toFixed(2)}</strong>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <span style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.25rem' }}>Out of Balance</span>
                  <strong style={{ fontSize: '1.25rem', color: outOfBalance !== 0 ? '#E53E3E' : '#10b981' }}>
                    ${Math.abs(outOfBalance).toFixed(2)}
                  </strong>
                </div>
              </div>
            )}
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

export default EditJournalEntry;
