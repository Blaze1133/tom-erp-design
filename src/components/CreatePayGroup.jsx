import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreatePayGroup = ({ onSave, onCancel, selectedPayGroup }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('user-notes');
  const [notesView, setNotesView] = useState('Default');
  const [systemNotesView, setSystemNotesView] = useState('Default');
  const [systemNotesField, setSystemNotesField] = useState('- All -');
  
  // Form data state
  const [formData, setFormData] = useState({
    name: selectedPayGroup?.name || 'EP & Local (MEP)',
    calendarDaysCalculation: selectedPayGroup?.calendarDaysCalculation || false,
    subsidiary: selectedPayGroup?.subsidiary || 'Tech Onshore MEP Prefabricators Pte Ltd.',
    country: selectedPayGroup?.country || 'Singapore',
    payrollPeriod: selectedPayGroup?.payrollPeriod || 'Monthly'
  });

  const subsidiaryOptions = [
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DQ) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (s) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (SV) Pte Ltd'
  ];

  const payrollPeriodOptions = [
    '- New -',
    'Weekly',
    'Bimonthly',
    'Monthly'
  ];

  // Sample system notes data for edit mode
  const systemNotesData = selectedPayGroup ? [
    {
      id: 1,
      date: '24/3/2022 12:40 pm',
      setBy: 'TOM-Malta',
      context: 'UI',
      type: 'Change',
      field: 'Calendar Days Calculation',
      oldValue: 'F',
      newValue: 'T'
    },
    {
      id: 2,
      date: '14/1/2022 12:19 pm',
      setBy: 'pratik',
      context: 'UI',
      type: 'Change',
      field: 'Name',
      oldValue: 'EP & Local',
      newValue: 'EP & Local (MEP)'
    },
    {
      id: 3,
      date: '14/1/2022 11:06 am',
      setBy: 'pratik',
      context: 'UI',
      type: 'Change',
      field: 'Name',
      oldValue: 'EP',
      newValue: 'EP & Local'
    },
    {
      id: 4,
      date: '14/1/2022 10:53 am',
      setBy: 'pratik',
      context: 'UI',
      type: 'Set',
      field: 'Name',
      oldValue: '',
      newValue: 'EP'
    },
    {
      id: 5,
      date: '14/1/2022 10:53 am',
      setBy: 'pratik',
      context: 'UI',
      type: 'Create',
      field: 'Record',
      oldValue: '',
      newValue: '20'
    }
  ] : [];

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
    if (!formData.name) {
      showToast('Please fill in required fields', 'error');
      return;
    }

    showToast(selectedPayGroup ? 'Pay Group updated successfully!' : 'Pay Group created successfully!', 'success');
    if (onSave) {
      onSave(formData);
    }
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (onCancel) {
        onCancel();
      }
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-users" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Pay Group</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-cog"></i>
            Actions
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-list"></i>
            List
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-search"></i>
            Search
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-cog"></i>
            Customize
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-ellipsis-h"></i>
            More
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information */}
        <div className="form-section">
          <div className="form-grid" style={{ gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">NAME <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">COUNTRY</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
              />
            </div>
            <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input 
                type="checkbox" 
                id="calendarDaysCalculation"
                checked={formData.calendarDaysCalculation}
                onChange={(e) => handleInputChange('calendarDaysCalculation', e.target.checked)}
                style={{ margin: '0' }}
              />
              <label htmlFor="calendarDaysCalculation" className="form-label" style={{ margin: '0', cursor: 'pointer' }}>
                CALENDAR DAYS CALCULATION
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">PAYROLL PERIOD</label>
              <select 
                className="form-control"
                value={formData.payrollPeriod}
                onChange={(e) => handleInputChange('payrollPeriod', e.target.value)}
              >
                {payrollPeriodOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label">SUBSIDIARY</label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleInputChange('subsidiary', e.target.value)}
              >
                {subsidiaryOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1.5rem 0' }} />

        {/* Notes Section */}
        <div className="form-section">
          <div style={{
            background: '#6c757d',
            padding: '12px 20px',
            color: 'white',
            fontSize: '14px',
            fontWeight: '600',
            display: 'flex',
            gap: '20px',
            marginBottom: '0'
          }}>
            <span 
              style={{ 
                cursor: 'pointer',
                borderBottom: activeTab === 'user-notes' ? '2px solid white' : 'none',
                paddingBottom: '5px'
              }}
              onClick={() => setActiveTab('user-notes')}
            >
              User Notes
            </span>
            <span 
              style={{ 
                cursor: 'pointer',
                borderBottom: activeTab === 'system-notes' ? '2px solid white' : 'none',
                paddingBottom: '5px'
              }}
              onClick={() => setActiveTab('system-notes')}
            >
              System Notes ●
            </span>
          </div>
          
          <div style={{ padding: '20px', border: '1px solid #e9ecef', borderTop: 'none' }}>
            {activeTab === 'user-notes' && (
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: '#666' }}>VIEW</label>
                    <select 
                      value={notesView}
                      onChange={(e) => setNotesView(e.target.value)}
                      style={{
                        padding: '4px 8px',
                        border: '1px solid #ced4da',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    >
                      <option>Default</option>
                      <option>Summary</option>
                      <option>Detailed</option>
                    </select>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{
                      background: '#28a745',
                      color: 'white',
                      border: '1px solid #28a745',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      New Note
                    </button>
                    <button style={{
                      background: 'white',
                      color: '#495057',
                      border: '1px solid #ced4da',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}>
                      Customize View
                    </button>
                  </div>
                </div>

                <div style={{ overflowX: 'auto' }}>
                  <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '12px'
                  }}>
                    <thead>
                      <tr style={{ background: '#f8f9fa' }}>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>EDIT</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>DATE</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>AUTHOR</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>TITLE</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>MEMO</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>DIRECTION</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>TYPE</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>REMOVE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="8" style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'system-notes' && (
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: '#666' }}>VIEW</label>
                    <select 
                      value={systemNotesView}
                      onChange={(e) => setSystemNotesView(e.target.value)}
                      style={{
                        padding: '4px 8px',
                        border: '1px solid #ced4da',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    >
                      <option>Default</option>
                    </select>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: '#666' }}>FIELD</label>
                    <select 
                      value={systemNotesField}
                      onChange={(e) => setSystemNotesField(e.target.value)}
                      style={{
                        padding: '4px 8px',
                        border: '1px solid #ced4da',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    >
                      <option>- All -</option>
                      <option>Calendar Days Calculation</option>
                      <option>Name</option>
                      <option>Record</option>
                    </select>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{
                      background: 'white',
                      color: '#495057',
                      border: '1px solid #ced4da',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}>
                      Customize View
                    </button>
                  </div>
                </div>

                {systemNotesData.length > 0 ? (
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                      fontSize: '11px'
                    }}>
                      <thead>
                        <tr style={{ background: '#f8f9fa' }}>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>DATE ▲</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>SET BY</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>CONTEXT</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>TYPE</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>FIELD</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>OLD VALUE</th>
                          <th style={{ padding: '6px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>NEW VALUE</th>
                        </tr>
                      </thead>
                      <tbody>
                        {systemNotesData.map((note) => (
                          <tr key={note.id}>
                            <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>{note.date}</td>
                            <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>{note.setBy}</td>
                            <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>{note.context}</td>
                            <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>{note.type}</td>
                            <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>{note.field}</td>
                            <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>{note.oldValue}</td>
                            <td style={{ padding: '6px', border: '1px solid #dee2e6' }}>{note.newValue}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
                    No records to show.
                  </div>
                )}
              </div>
            )}
          </div>
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

export default CreatePayGroup;
