import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateAllocationSchedule = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('source');
  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  
  const [formData, setFormData] = useState({
    name: '',
    subsidiary: '',
    frequency: 'End of Period',
    nextDate: '',
    subsequentDate: 'REMIND FOREVER',
    inactive: false,
    sourceLines: [],
    destinationLines: [],
    historyLines: []
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
    showToast('Allocation Schedule saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-allocation-schedules');
      }
    }
  };

  const handleAddSourceLine = () => {
    const newLine = {
      id: formData.sourceLines.length + 1,
      account: '',
      name: '',
      department: '',
      location: '',
      class: ''
    };
    setFormData(prev => ({
      ...prev,
      sourceLines: [...prev.sourceLines, newLine]
    }));
  };

  const handleAddDestinationLine = () => {
    const newLine = {
      id: formData.destinationLines.length + 1,
      account: '',
      name: '',
      department: '',
      location: '',
      class: '',
      weight: '',
      balance: ''
    };
    setFormData(prev => ({
      ...prev,
      destinationLines: [...prev.destinationLines, newLine]
    }));
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
      name: '',
      department: '',
      location: '',
      class: '',
      weight: '',
      balance: ''
    };
    const lines = activeTab === 'source' ? 'sourceLines' : 'destinationLines';
    setFormData(prev => ({
      ...prev,
      [lines]: [
        ...prev[lines].slice(0, index),
        newLine,
        ...prev[lines].slice(index)
      ]
    }));
    setActiveMenu(null);
  };

  const handleInsertBelow = (index) => {
    const newLine = {
      id: Date.now(),
      account: '',
      name: '',
      department: '',
      location: '',
      class: '',
      weight: '',
      balance: ''
    };
    const lines = activeTab === 'source' ? 'sourceLines' : 'destinationLines';
    setFormData(prev => ({
      ...prev,
      [lines]: [
        ...prev[lines].slice(0, index + 1),
        newLine,
        ...prev[lines].slice(index + 1)
      ]
    }));
    setActiveMenu(null);
  };

  const handleDeleteRow = (index) => {
    const lines = activeTab === 'source' ? 'sourceLines' : 'destinationLines';
    setFormData(prev => ({
      ...prev,
      [lines]: prev[lines].filter((_, i) => i !== index)
    }));
    setActiveMenu(null);
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-chart-pie"></i>
          <div>
            <h1>Allocation Schedule</h1>
            <div className="detail-subtitle">
              <span>{formData.name || 'New Allocation Schedule'}</span>
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
              <label>NAME <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
            
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
            
            <div className="detail-field">
              <label>FREQUENCY</label>
              <select 
                className="form-control"
                value={formData.frequency}
                onChange={(e) => handleInputChange('frequency', e.target.value)}
              >
                <option>End of Period</option>
                <option>Never</option>
                <option>Hourly</option>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Every Two Weeks</option>
                <option>Twice a Month</option>
                <option>Every Four Weeks</option>
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Yearly</option>
              </select>
            </div>
            
            <div className="detail-field">
              <label>NEXT DATE</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.nextDate}
                onChange={(e) => handleInputChange('nextDate', e.target.value)}
              />
            </div>
            
            <div className="detail-field">
              <label>SUBSEQUENT DATE</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                  <input 
                    type="radio" 
                    name="subsequentDate"
                    value="REMIND FOREVER"
                    checked={formData.subsequentDate === 'REMIND FOREVER'}
                    onChange={(e) => handleInputChange('subsequentDate', e.target.value)}
                  />
                  <span style={{ color: '#e53e3e', fontWeight: '500' }}>REMIND FOREVER</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                  <input 
                    type="radio" 
                    name="subsequentDate"
                    value="NUMBER REMAINING"
                    checked={formData.subsequentDate === 'NUMBER REMAINING'}
                    onChange={(e) => handleInputChange('subsequentDate', e.target.value)}
                  />
                  NUMBER REMAINING
                </label>
              </div>
            </div>
            
            <div className="detail-field">
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={formData.inactive}
                  onChange={(e) => handleInputChange('inactive', e.target.checked)}
                  style={{ width: 'auto', margin: 0 }}
                />
                <span>INACTIVE</span>
              </label>
            </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Allocation Details</h3>
          </div>
          <div className="section-body">
            <div className="tabs-container">
              <div className="tabs-header">
                <button 
                  className={`tab-button ${activeTab === 'source' ? 'active' : ''}`}
                  onClick={() => setActiveTab('source')}
                >
                  Source
                </button>
                <button 
                  className={`tab-button ${activeTab === 'destination' ? 'active' : ''}`}
                  onClick={() => setActiveTab('destination')}
                >
                  Destination
                </button>
                <button 
                  className={`tab-button ${activeTab === 'history' ? 'active' : ''}`}
                  onClick={() => setActiveTab('history')}
                >
                  History
                </button>
              </div>

              {/* Source Tab */}
              {activeTab === 'source' && (
                <div className="tab-content">
                  <div style={{ marginBottom: '15px' }}>
                    <button className="btn-toolbar" onClick={handleAddSourceLine}>
                      <i className="fas fa-plus"></i>
                      Add Line
                    </button>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <div className="detail-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                      <div className="detail-field">
                        <label>CREDIT ACCOUNT</label>
                        <input type="text" className="form-control" placeholder="<Type then tab>" />
                      </div>
                      <div className="detail-field">
                        <label>CREDIT LOCATION</label>
                        <select className="form-control">
                          <option value="">- None -</option>
                          <option>Hong Hang Shipyard</option>
                          <option>Mega yard</option>
                          <option>Singapore (MEP)</option>
                        </select>
                      </div>
                      <div className="detail-field">
                        <label>CREDIT NAME</label>
                        <input type="text" className="form-control" placeholder="<Type then tab>" />
                      </div>
                      <div className="detail-field">
                        <label>CREDIT CLASS</label>
                        <select className="form-control">
                          <option value="">- None -</option>
                          <option>Consumable Item</option>
                          <option>Fabrication</option>
                          <option>Material Supply</option>
                        </select>
                      </div>
                      <div className="detail-field">
                        <label>CREDIT DEPARTMENT</label>
                        <select className="form-control">
                          <option value="">- None -</option>
                          <option>TOM: Human Resource</option>
                          <option>TOM: Engineering</option>
                          <option>TOM: Production</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="items-section" style={{ overflowX: 'auto' }}>
                    {formData.sourceLines.length > 0 ? (
                      <table className="items-table">
                        <thead>
                          <tr>
                            <th style={{ width: '40px', textAlign: 'center' }}></th>
                            <th style={{ minWidth: '250px' }}>ACCOUNT <span className="required">*</span></th>
                            <th style={{ minWidth: '180px' }}>NAME</th>
                            <th style={{ minWidth: '180px' }}>DEPARTMENT</th>
                            <th style={{ minWidth: '150px' }}>LOCATION</th>
                            <th style={{ minWidth: '150px' }}>CLASS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {formData.sourceLines.map((line, index) => (
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
                                  defaultValue={line.account} 
                                  style={{ minWidth: '250px', height: '40px' }} 
                                />
                              </td>
                              <td>
                                <input 
                                  type="text" 
                                  className="form-control" 
                                  defaultValue={line.name} 
                                  style={{ minWidth: '180px', height: '40px' }} 
                                />
                              </td>
                              <td>
                                <select className="form-control" defaultValue={line.department} style={{ minWidth: '180px', height: '40px' }}>
                                  <option value="">Select...</option>
                                  <option>TOM: Human Resource</option>
                                  <option>TOM: Engineering</option>
                                  <option>TOM: Production</option>
                                </select>
                              </td>
                              <td>
                                <select className="form-control" defaultValue={line.location} style={{ minWidth: '150px', height: '40px' }}>
                                  <option value="">Select...</option>
                                  <option>Hong Hang Shipyard</option>
                                  <option>Mega yard</option>
                                  <option>Singapore (MEP)</option>
                                </select>
                              </td>
                              <td>
                                <select className="form-control" defaultValue={line.class} style={{ minWidth: '150px', height: '40px' }}>
                                  <option value="">Select...</option>
                                  <option>Consumable Item</option>
                                  <option>Fabrication</option>
                                  <option>Material Supply</option>
                                </select>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <div style={{ padding: '2rem', textAlign: 'center', color: '#999', background: '#f9f9f9', borderRadius: '4px' }}>
                        <p>No source lines added yet.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Destination Tab */}
              {activeTab === 'destination' && (
                <div className="tab-content">
                  <div style={{ marginBottom: '15px' }}>
                    <button className="btn-toolbar" onClick={handleAddDestinationLine}>
                      <i className="fas fa-plus"></i>
                      Add Line
                    </button>
                  </div>

                  <div style={{ marginBottom: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                      <input type="checkbox" />
                      <span>VALUES ARE PERCENTAGES</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                      <input type="checkbox" />
                      <span>USE SOURCE/CREDIT ACCOUNT(S)</span>
                    </label>
                  </div>

                  <div className="items-section" style={{ overflowX: 'auto' }}>
                    {formData.destinationLines.length > 0 ? (
                      <table className="items-table">
                        <thead>
                          <tr>
                            <th style={{ width: '40px', textAlign: 'center' }}></th>
                            <th style={{ minWidth: '250px' }}>ACCOUNT <span className="required">*</span></th>
                            <th style={{ minWidth: '180px' }}>NAME</th>
                            <th style={{ minWidth: '180px' }}>DEPARTMENT</th>
                            <th style={{ minWidth: '150px' }}>LOCATION</th>
                            <th style={{ minWidth: '150px' }}>CLASS</th>
                            <th style={{ minWidth: '120px' }}>WEIGHT</th>
                            <th style={{ minWidth: '120px' }}>BALANCE</th>
                          </tr>
                        </thead>
                        <tbody>
                          {formData.destinationLines.map((line, index) => (
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
                                  defaultValue={line.account} 
                                  style={{ minWidth: '250px', height: '40px' }} 
                                />
                              </td>
                              <td>
                                <input 
                                  type="text" 
                                  className="form-control" 
                                  defaultValue={line.name} 
                                  style={{ minWidth: '180px', height: '40px' }} 
                                />
                              </td>
                              <td>
                                <select className="form-control" defaultValue={line.department} style={{ minWidth: '180px', height: '40px' }}>
                                  <option value="">Select...</option>
                                  <option>TOM: Human Resource</option>
                                  <option>TOM: Engineering</option>
                                  <option>TOM: Production</option>
                                </select>
                              </td>
                              <td>
                                <select className="form-control" defaultValue={line.location} style={{ minWidth: '150px', height: '40px' }}>
                                  <option value="">Select...</option>
                                  <option>Hong Hang Shipyard</option>
                                  <option>Mega yard</option>
                                  <option>Singapore (MEP)</option>
                                </select>
                              </td>
                              <td>
                                <select className="form-control" defaultValue={line.class} style={{ minWidth: '150px', height: '40px' }}>
                                  <option value="">Select...</option>
                                  <option>Consumable Item</option>
                                  <option>Fabrication</option>
                                  <option>Material Supply</option>
                                </select>
                              </td>
                              <td>
                                <input 
                                  type="number" 
                                  className="form-control" 
                                  defaultValue={line.weight} 
                                  style={{ minWidth: '120px', height: '40px', textAlign: 'right' }} 
                                />
                              </td>
                              <td>
                                <input 
                                  type="number" 
                                  className="form-control" 
                                  defaultValue={line.balance} 
                                  style={{ minWidth: '120px', height: '40px', textAlign: 'right' }} 
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <div style={{ padding: '2rem', textAlign: 'center', color: '#999', background: '#f9f9f9', borderRadius: '4px' }}>
                        <p>No destination lines added yet.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* History Tab */}
              {activeTab === 'history' && (
                <div className="tab-content">
                  <div className="items-section" style={{ overflowX: 'auto' }}>
                    {formData.historyLines.length > 0 ? (
                      <table className="items-table">
                        <thead>
                          <tr>
                            <th style={{ minWidth: '100px' }}>ID</th>
                            <th style={{ minWidth: '150px' }}>POSTING PERIOD</th>
                            <th style={{ minWidth: '120px' }}>ENTRY DATE</th>
                            <th style={{ minWidth: '180px' }}>ACCOUNTING BOOK</th>
                            <th style={{ minWidth: '150px' }}>JOURNAL ENTRY</th>
                            <th style={{ minWidth: '120px' }}>DETAIL</th>
                          </tr>
                        </thead>
                        <tbody>
                          {formData.historyLines.map((line) => (
                            <tr key={line.id}>
                              <td>{line.id}</td>
                              <td>{line.postingPeriod}</td>
                              <td>{line.entryDate}</td>
                              <td>{line.accountingBook}</td>
                              <td style={{ color: '#4a90e2' }}>{line.journalEntry}</td>
                              <td><button className="view-link">View</button></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <div style={{ padding: '2rem', textAlign: 'center', color: '#999', background: '#f9f9f9', borderRadius: '4px' }}>
                        <p>No records to show.</p>
                      </div>
                    )}
                  </div>
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

export default CreateAllocationSchedule;
