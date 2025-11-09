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
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Statistical Journal</h1>
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
          <button className="btn btn-view-option">
            <i className="fas fa-list"></i>
            List
          </button>
          <button className="btn btn-view-option">
            <i className="fas fa-search"></i>
            Search
          </button>
          <button className="btn btn-view-option">
            <i className="fas fa-cog"></i>
            Customize
          </button>
          <button className="btn btn-view-option">
            <i className="fas fa-ellipsis-h"></i>
            More
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
          
          <div className="form-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
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
              <label className="form-label">Accounting Period</label>
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
            
            <div className="form-group">
              <label className="form-label">Entry No.</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.entryNo}
                disabled
                style={{ background: '#f8f9fa' }}
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
              <label className="form-label required">Date</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
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
          </div>
        </div>

        {/* Statistical Information */}
        <div className="form-section" style={{ marginTop: '1.5rem' }}>
          <h2 className="section-title" style={{ fontSize: '18px', fontWeight: '600' }}>
            <i className="fas fa-chart-line"></i>
            Statistical Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0 1rem 0' }} />
          
          <div className="form-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="form-group">
              <label className="form-label required">Unit of Measure Type</label>
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
            
            <div className="form-group">
              <label className="form-label" style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
                <input 
                  type="checkbox" 
                  checked={formData.absoluteUpdate}
                  onChange={(e) => handleInputChange('absoluteUpdate', e.target.checked)}
                  style={{ marginRight: '8px' }}
                />
                Absolute Update
              </label>
            </div>
            
            <div className="form-group">
              <label className="form-label">Unit of Measure</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.unitOfMeasure}
                onChange={(e) => handleInputChange('unitOfMeasure', e.target.value)}
              />
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
          
          <div className="form-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '500px' }}>
            <div className="form-group">
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

        {/* Lines Table */}
        <div className="form-section" style={{ marginTop: '1.5rem' }}>
          <div style={{ 
            padding: '12px 20px',
            background: '#5b6b8f',
            color: 'white',
            display: 'flex',
            gap: '20px',
            fontSize: '13px',
            fontWeight: '500',
            borderRadius: '4px 4px 0 0'
          }}>
            <div style={{ borderBottom: '2px solid white', paddingBottom: '8px' }}>Lines</div>
            <div style={{ color: '#ccc' }}>Communication</div>
            <div style={{ color: '#ccc' }}>Tax Reporting</div>
          </div>

          <div style={{ background: 'white', padding: '15px', borderLeft: '1px solid #e0e0e0', borderRight: '1px solid #e0e0e0' }}>
            <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '15px' }}>0.00</div>
            
            <button className="btn btn-secondary" onClick={handleClearAllLines} style={{ marginBottom: '15px' }}>
              Clear All Lines
            </button>

            <div className="items-table-wrapper">
              <table className="detail-items-table">
                <thead>
                  <tr>
                    <th style={{width: '16%', padding: '8px 6px'}}>ACCOUNT <span style={{ color: '#e53e3e' }}>*</span></th>
                    <th style={{width: '8%', padding: '8px 6px'}}>AMOUNT <span style={{ color: '#e53e3e' }}>*</span></th>
                    <th style={{width: '12%', padding: '8px 6px'}}>MEMO</th>
                    <th style={{width: '12%', padding: '8px 6px'}}>NAME</th>
                    <th style={{width: '10%', padding: '8px 6px'}}>DEPARTMENT <span style={{ color: '#e53e3e' }}>*</span></th>
                    <th style={{width: '9%', padding: '8px 6px'}}>CLASS</th>
                    <th style={{width: '9%', padding: '8px 6px'}}>LOCATION</th>
                    <th style={{width: '7%', padding: '8px 6px'}}>UNITS <span style={{ color: '#e53e3e' }}>*</span></th>
                    <th style={{width: '10%', padding: '8px 6px'}}>AMOUNT (BASE UNIT)</th>
                  </tr>
                </thead>
                <tbody>
                  {lines.length > 0 ? (
                    lines.map((line) => (
                      <tr key={line.id}>
                        <td style={{ padding: '4px' }}>
                          <input 
                            type="text" 
                            className="table-input" 
                            placeholder="<Type then tab>"
                            style={{width: '100%'}} 
                          />
                        </td>
                        <td style={{ padding: '4px' }}>
                          <input 
                            type="text" 
                            className="table-input" 
                            style={{width: '100%'}} 
                          />
                        </td>
                        <td style={{ padding: '4px' }}>
                          <input 
                            type="text" 
                            className="table-input" 
                            style={{width: '100%'}} 
                          />
                        </td>
                        <td style={{ padding: '4px' }}>
                          <input 
                            type="text" 
                            className="table-input" 
                            style={{width: '100%'}} 
                          />
                        </td>
                        <td style={{ padding: '4px' }}>
                          <select className="table-input" style={{width: '100%'}}>
                            <option value="">Select...</option>
                            <option>Construction</option>
                            <option>MEP</option>
                            <option>MEP MARINE</option>
                            <option>O&G</option>
                            <option>Piping</option>
                            <option>Shipyard</option>
                          </select>
                        </td>
                        <td style={{ padding: '4px' }}>
                          <select className="table-input" style={{width: '100%'}}>
                            <option value="">Select...</option>
                            <option>Consumable Item</option>
                            <option>Material Supply</option>
                            <option>MEP Works</option>
                          </select>
                        </td>
                        <td style={{ padding: '4px' }}>
                          <select className="table-input" style={{width: '100%'}}>
                            <option value="">Select...</option>
                            <option>Singapore(MEP)</option>
                            <option>Mega yard</option>
                          </select>
                        </td>
                        <td style={{ padding: '4px' }}>
                          <input 
                            type="text" 
                            className="table-input" 
                            style={{width: '100%'}} 
                          />
                        </td>
                        <td style={{ padding: '4px' }}>
                          <input 
                            type="text" 
                            className="table-input" 
                            style={{width: '100%'}} 
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
                        No lines added. Click "Add" to add a line.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
              <button className="btn btn-primary" onClick={handleAddLine}>
                <i className="fas fa-plus"></i> Add
              </button>
              <button className="btn btn-secondary">
                <i className="fas fa-times"></i> Cancel
              </button>
              <button className="btn btn-secondary">
                <i className="fas fa-copy"></i> Copy Previous
              </button>
              <button className="btn btn-secondary">
                <i className="fas fa-upload"></i> Insert
              </button>
              <button className="btn btn-secondary">
                <i className="fas fa-trash"></i> Remove
              </button>
            </div>
          </div>
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

export default MakeStatisticalJournalEntry;
