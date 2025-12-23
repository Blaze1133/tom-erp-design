import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const MakeStatisticalJournalEntry = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  const [formData, setFormData] = useState({
    customForm: 'TOM Journal Entry',
    entryNo: 'To Be Generated',
    date: '7/11/2025',
    accountingPeriod: '',
    reversalDate: '',
    memo: '',
    unitOfMeasureType: '',
    unitOfMeasure: '',
    absoluteUpdate: false,
    subsidiary: ''
  });

  const [lines, setLines] = useState([]);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

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
      id: lines.length + 1,
      account: '',
      amount: '',
      memo: '',
      name: '',
      department: '',
      class: '',
      location: '',
      units: ''
    };
    setLines([...lines, newLine]);
  };

  const handleClearAllLines = () => {
    setLines([]);
  };

  const handleMenuToggle = (index, event) => {
    event.stopPropagation();
    if (activeMenu === index) {
      setActiveMenu(null);
    } else {
      const rect = event.currentTarget.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX
      });
      setActiveMenu(index);
    }
  };

  const handleInsertAbove = (index) => {
    const newLine = {
      id: Date.now(),
      account: '',
      amount: '',
      memo: '',
      name: '',
      department: '',
      class: '',
      location: '',
      units: ''
    };
    setLines(prev => [
      ...prev.slice(0, index),
      newLine,
      ...prev.slice(index)
    ]);
    setActiveMenu(null);
  };

  const handleInsertBelow = (index) => {
    const newLine = {
      id: Date.now(),
      account: '',
      amount: '',
      memo: '',
      name: '',
      department: '',
      class: '',
      location: '',
      units: ''
    };
    setLines(prev => [
      ...prev.slice(0, index + 1),
      newLine,
      ...prev.slice(index + 1)
    ]);
    setActiveMenu(null);
  };

  const handleDeleteRow = (index) => {
    setLines(prev => prev.filter((_, i) => i !== index));
    setActiveMenu(null);
  };

  const handleSave = () => {
    showToast('Statistical Journal Entry saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-statistical-journal-entries');
      }
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-alt"></i>
          <div>
            <h1>Statistical Journal Entry</h1>
            <div className="detail-subtitle">
              <span>{formData.entryNo}</span>
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
              <label>CUSTOM FORM <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.customForm}
                onChange={(e) => handleInputChange('customForm', e.target.value)}
              >
                <option>TOM Journal Entry</option>
                <option>Standard Journal Entry</option>
              </select>
            </div>
            
            <div className="detail-field">
              <label>ACCOUNTING PERIOD</label>
              <select 
                className="form-control"
                value={formData.accountingPeriod}
                onChange={(e) => handleInputChange('accountingPeriod', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Oct 2024</option>
                <option>Nov 2024</option>
                <option>Dec 2024</option>
                <option>Jan 2025</option>
              </select>
            </div>
            
            <div className="detail-field">
              <label>ENTRY NO.</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.entryNo}
                disabled
                style={{ background: '#f8f9fa' }}
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
              <label>DATE <span className="required">*</span></label>
              <input 
                type="date" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
              />
            </div>
            
            <div className="detail-field">
              <label>MEMO</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.memo}
                onChange={(e) => handleInputChange('memo', e.target.value)}
              />
            </div>
            </div>
          </div>
        </div>

        {/* Statistical Information */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Statistical Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
            <div className="detail-field">
              <label>UNIT OF MEASURE TYPE <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.unitOfMeasureType}
                onChange={(e) => handleInputChange('unitOfMeasureType', e.target.value)}
              >
                <option value="">Select...</option>
                <option>General UOM</option>
                <option>Tonne</option>
              </select>
            </div>
            
            <div className="detail-field">
              <label>UNIT OF MEASURE</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.unitOfMeasure}
                onChange={(e) => handleInputChange('unitOfMeasure', e.target.value)}
              />
            </div>
            
            <div className="detail-field">
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={formData.absoluteUpdate}
                  onChange={(e) => handleInputChange('absoluteUpdate', e.target.checked)}
                  style={{ width: 'auto', margin: 0 }}
                />
                <span>ABSOLUTE UPDATE</span>
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
            <div className="detail-grid" style={{ gridTemplateColumns: '1fr' }}>
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

        {/* Lines */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Lines</h3>
          </div>
          <div className="section-body">
            <div style={{ marginBottom: '15px' }}>
              <button className="btn-toolbar" onClick={handleAddLine}>
                <i className="fas fa-plus"></i>
                Add Line
              </button>
            </div>

            <div className="items-section" style={{ overflowX: 'auto' }}>
              <table className="items-table">
                <thead>
                  <tr>
                    <th style={{ width: '40px', textAlign: 'center' }}></th>
                    <th style={{ minWidth: '200px' }}>ACCOUNT <span className="required">*</span></th>
                    <th style={{ minWidth: '120px' }}>AMOUNT <span className="required">*</span></th>
                    <th style={{ minWidth: '150px' }}>MEMO</th>
                    <th style={{ minWidth: '150px' }}>NAME</th>
                    <th style={{ minWidth: '150px' }}>DEPARTMENT <span className="required">*</span></th>
                    <th style={{ minWidth: '150px' }}>CLASS</th>
                    <th style={{ minWidth: '150px' }}>LOCATION</th>
                    <th style={{ minWidth: '100px' }}>UNITS <span className="required">*</span></th>
                    <th style={{ minWidth: '150px' }}>AMOUNT (BASE UNIT)</th>
                  </tr>
                </thead>
                <tbody>
                  {lines.length > 0 ? (
                    lines.map((line, index) => (
                      <tr key={line.id} className={`table-row-with-actions ${hoveredRow === index ? 'hovered' : ''}`} onMouseEnter={() => setHoveredRow(index)} onMouseLeave={() => setHoveredRow(null)}>
                        <td style={{ textAlign: 'center', position: 'relative' }}>
                          {hoveredRow === index && (
                            <button className="row-actions-btn" title="Row Actions" onClick={(e) => handleMenuToggle(index, e)}>
                              <i className="fas fa-ellipsis-v"></i>
                            </button>
                          )}
                          {activeMenu === index && (
                            <div className="row-actions-menu" style={{ position: 'fixed', top: `${menuPosition.top}px`, left: `${menuPosition.left}px`, display: 'block', zIndex: 1000 }} onClick={(e) => e.stopPropagation()}>
                              <button onClick={() => handleInsertAbove(index)}>
                                <i className="fas fa-arrow-up"></i> Insert Above
                              </button>
                              <button onClick={() => handleInsertBelow(index)}>
                                <i className="fas fa-arrow-down"></i> Insert Below
                              </button>
                              <button onClick={() => handleDeleteRow(index)} className="delete-action">
                                <i className="fas fa-trash"></i> Delete Row
                              </button>
                            </div>
                          )}
                        </td>
                        <td>
                          <input 
                            type="text" 
                            className="form-control" 
                            placeholder="<Type then tab>"
                            style={{ minWidth: '200px', height: '40px' }} 
                          />
                        </td>
                        <td>
                          <input 
                            type="text" 
                            className="form-control" 
                            style={{ minWidth: '120px', height: '40px', textAlign: 'right' }} 
                          />
                        </td>
                        <td>
                          <input 
                            type="text" 
                            className="form-control" 
                            style={{ minWidth: '150px', height: '40px' }} 
                          />
                        </td>
                        <td>
                          <input 
                            type="text" 
                            className="form-control" 
                            style={{ minWidth: '150px', height: '40px' }} 
                          />
                        </td>
                        <td>
                          <select className="form-control" style={{ minWidth: '150px', height: '40px' }}>
                            <option value="">Select...</option>
                            <option>TOM: Human Resource</option>
                            <option>TOM: Engineering</option>
                            <option>TOM: Production</option>
                            <option>TOM: Purchase</option>
                            <option>TOM: Sales and Marketing</option>
                          </select>
                        </td>
                        <td>
                          <select className="form-control" style={{ minWidth: '150px', height: '40px' }}>
                            <option value="">Select...</option>
                            <option>Consumable Item</option>
                            <option>Fabrication</option>
                            <option>Material Supply</option>
                            <option>Piping</option>
                            <option>Structure</option>
                          </select>
                        </td>
                        <td>
                          <select className="form-control" style={{ minWidth: '150px', height: '40px' }}>
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
                            type="text" 
                            className="form-control" 
                            style={{ minWidth: '100px', height: '40px', textAlign: 'right' }} 
                          />
                        </td>
                        <td>
                          <input 
                            type="text" 
                            className="form-control" 
                            style={{ minWidth: '150px', height: '40px', textAlign: 'right' }} 
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="10" style={{ textAlign: 'center', padding: '2rem', color: '#999', background: '#f9f9f9' }}>
                        No lines added yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
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

export default MakeStatisticalJournalEntry;
