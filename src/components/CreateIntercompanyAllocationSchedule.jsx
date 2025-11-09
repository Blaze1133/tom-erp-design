import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateIntercompanyAllocationSchedule = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  const [formData, setFormData] = useState({
    name: '',
    subsidiary: '',
    frequency: 'End of Period',
    nextDate: '',
    subsequentDate: 'REMIND FOREVER',
    inactive: false,
    allocationMode: 'Fixed Allocation',
    creditAccount: '',
    creditName: '',
    creditDepartment: '',
    creditLocation: '',
    creditClass: '',
    allocationLines: []
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
    showToast('Intercompany Allocation Schedule saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-intercompany-allocation-schedules');
      }
    }
  };

  const handleAddLine = () => {
    const newLine = {
      id: formData.allocationLines.length + 1,
      account: '',
      name: '',
      department: '',
      location: '',
      class: ''
    };
    setFormData(prev => ({
      ...prev,
      allocationLines: [...prev.allocationLines, newLine]
    }));
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-exchange-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Intercompany Allocation Schedule</h1>
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
              <label className="form-label required">Name</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
            
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
            
            <div className="form-group">
              <label className="form-label">Frequency</label>
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
            
            <div className="form-group">
              <label className="form-label">Next Date</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.nextDate}
                onChange={(e) => handleInputChange('nextDate', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Subsequent Date</label>
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
            
            <div className="form-group">
              <label className="form-label">Allocation Mode</label>
              <select 
                className="form-control"
                value={formData.allocationMode}
                onChange={(e) => handleInputChange('allocationMode', e.target.value)}
              >
                <option>Fixed Allocation</option>
                <option>Dynamic Allocation</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label" style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
                <input 
                  type="checkbox" 
                  checked={formData.inactive}
                  onChange={(e) => handleInputChange('inactive', e.target.checked)}
                  style={{ marginRight: '8px' }}
                />
                Inactive
              </label>
            </div>
          </div>
        </div>

        {/* Dynamic Allocation Section */}
        <div className="form-section" style={{ marginTop: '1.5rem' }}>
          <h2 className="section-title" style={{ fontSize: '18px', fontWeight: '600' }}>
            <i className="fas fa-layer-group"></i>
            Dynamic Allocation
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0 1rem 0' }} />

          <div>
              <div className="form-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <div className="form-group">
                  <label className="form-label">Credit Account</label>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="<Type then tab>"
                    value={formData.creditAccount}
                    onChange={(e) => handleInputChange('creditAccount', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Credit Location</label>
                  <select className="form-control" value={formData.creditLocation} onChange={(e) => handleInputChange('creditLocation', e.target.value)}>
                    <option value="">- None -</option>
                    <option>Singapore</option>
                    <option>Malaysia</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Credit Name</label>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="<Type then tab>"
                    value={formData.creditName}
                    onChange={(e) => handleInputChange('creditName', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Credit Class</label>
                  <select className="form-control" value={formData.creditClass} onChange={(e) => handleInputChange('creditClass', e.target.value)}>
                    <option value="">- None -</option>
                    <option>Consumable Item</option>
                    <option>Material Supply</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Credit Department</label>
                  <select className="form-control" value={formData.creditDepartment} onChange={(e) => handleInputChange('creditDepartment', e.target.value)}>
                    <option value="">- None -</option>
                    <option>MEP</option>
                    <option>Engineering</option>
                    <option>Operations</option>
                  </select>
                </div>
              </div>

              {/* Allocation Lines Table */}
              <div style={{ marginTop: '20px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                  <button className="btn btn-primary" onClick={handleAddLine}>
                    <i className="fas fa-plus"></i> Add
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-times"></i> Cancel
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-upload"></i> Insert
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-trash"></i> Remove
                  </button>
                </div>

                {formData.allocationLines.length > 0 ? (
                  <div className="items-table-wrapper">
                    <table className="detail-items-table">
                      <thead>
                        <tr>
                          <th style={{width: '25%'}}>ACCOUNT</th>
                          <th style={{width: '20%'}}>NAME</th>
                          <th style={{width: '18%'}}>DEPARTMENT</th>
                          <th style={{width: '18%'}}>LOCATION</th>
                          <th style={{width: '19%'}}>CLASS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.allocationLines.map((line) => (
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
                              <select className="table-input" defaultValue={line.location} style={{width: '100%'}}>
                                <option value="">Select...</option>
                                <option>Singapore</option>
                                <option>Malaysia</option>
                              </select>
                            </td>
                            <td>
                              <select className="table-input" defaultValue={line.class} style={{width: '100%'}}>
                                <option value="">Select...</option>
                                <option>Consumable Item</option>
                                <option>Material Supply</option>
                              </select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="empty-items-message">
                    <p>No allocation lines added yet. Click "Add" to start adding lines.</p>
                  </div>
                )}
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

export default CreateIntercompanyAllocationSchedule;
