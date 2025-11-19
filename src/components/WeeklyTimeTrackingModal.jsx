import React, { useState } from 'react';

const WeeklyTimeTrackingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    customForm: 'Standard Time Tracking Form',
    employee: 'MEP01 001 JEGANATHAN SUNDARAVE',
    date: '16/11/2025'
  });

  const [timeEntries, setTimeEntries] = useState([
    {
      id: 1,
      customerProject: '',
      billable: false,
      serviceItem: '',
      department: 'MEP MARINE',
      class: '',
      location: 'MEP MARINE CC',
      memo: '',
      approved: false,
      billingClass: ''
    }
  ]);

  const [weeklyTotals] = useState({
    sun: '0:00',
    mon: '0:00',
    tue: '0:00',
    wed: '0:00',
    thu: '0:00',
    fri: '0:00',
    sat: '0:00',
    total: '0:00'
  });

  if (!isOpen) return null;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTimeEntryChange = (id, field, value) => {
    setTimeEntries(prev => prev.map(entry => 
      entry.id === id ? { ...entry, [field]: value } : entry
    ));
  };

  const handleAddEntry = () => {
    const newEntry = {
      id: Date.now(),
      customerProject: '',
      billable: false,
      serviceItem: '',
      department: 'MEP MARINE',
      class: '',
      location: 'MEP MARINE CC',
      memo: '',
      approved: false,
      billingClass: ''
    };
    setTimeEntries(prev => [...prev, newEntry]);
  };

  const handleSave = () => {
    onClose();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '20px',
        boxSizing: 'border-box',
        overflowY: 'auto'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: 'white',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '1000px',
          minHeight: 'auto',
          maxHeight: 'calc(100vh - 40px)',
          overflowY: 'auto',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
          margin: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ 
          padding: '1.5rem', 
          borderBottom: '1px solid #e0e0e0',
          background: '#f8f9fa',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 style={{ fontSize: '1.5rem', color: '#4a5568', fontWeight: 600, margin: 0 }}>
            Weekly Time Tracking
          </h2>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#666',
              padding: '0'
            }}
          >
            ×
          </button>
        </div>

        <div style={{ padding: '1.5rem' }}>
          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <button className="btn btn-primary">Save</button>
            <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button className="btn btn-secondary">Copy from Week</button>
            <button className="btn btn-secondary">Prev Week</button>
            <button className="btn btn-secondary">Next Week</button>
            <button className="btn btn-secondary">Customize Form</button>
          </div>

          {/* Primary Information Section */}
          <div style={{ 
            background: '#f8f9fa', 
            padding: '1rem', 
            borderRadius: '4px',
            marginBottom: '1.5rem',
            border: '1px solid #dee2e6'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '1rem',
              cursor: 'pointer'
            }}>
              <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.8rem' }}></i>
              <h4 style={{ fontSize: '1rem', margin: 0, color: '#4a5568', fontWeight: 600 }}>Primary Information</h4>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">CUSTOM FORM</label>
                <select 
                  className="form-control"
                  value={formData.customForm}
                  onChange={(e) => handleInputChange('customForm', e.target.value)}
                >
                  <option value="Standard Time Tracking Form">Standard Time Tracking Form</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label required">DATE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label required">EMPLOYEE</label>
                <select 
                  className="form-control"
                  value={formData.employee}
                  onChange={(e) => handleInputChange('employee', e.target.value)}
                >
                  <option value="MEP01 001 JEGANATHAN SUNDARAVE">MEP01 001 JEGANATHAN SUNDARAVE</option>
                </select>
              </div>
            </div>
          </div>

          {/* Classification Section */}
          <div style={{ 
            background: '#f8f9fa', 
            padding: '1rem', 
            borderRadius: '4px',
            marginBottom: '1.5rem',
            border: '1px solid #dee2e6'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '1rem',
              cursor: 'pointer'
            }}>
              <i className="fas fa-chevron-down" style={{ marginRight: '0.5rem', fontSize: '0.8rem' }}></i>
              <h4 style={{ fontSize: '1rem', margin: 0, color: '#4a5568', fontWeight: 600 }}>Classification</h4>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">SUBSIDIARY</label>
                <div className="field-value" style={{ padding: '0.5rem', background: 'white', border: '1px solid #ddd', borderRadius: '4px' }}>
                  Tech Onshore MEP Prefabricators Pte Ltd.
                </div>
              </div>
            </div>

            {/* Weekly Totals Display */}
            <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'white', borderRadius: '4px', border: '1px solid #ddd' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '0.5rem', fontSize: '0.85rem', textAlign: 'center' }}>
                <div><strong>SUN</strong><br/>{weeklyTotals.sun}</div>
                <div><strong>MON</strong><br/>{weeklyTotals.mon}</div>
                <div><strong>TUE</strong><br/>{weeklyTotals.tue}</div>
                <div><strong>WED</strong><br/>{weeklyTotals.wed}</div>
                <div><strong>THU</strong><br/>{weeklyTotals.thu}</div>
                <div><strong>FRI</strong><br/>{weeklyTotals.fri}</div>
                <div><strong>SAT</strong><br/>{weeklyTotals.sat}</div>
                <div><strong>TOTAL</strong><br/>{weeklyTotals.total}</div>
              </div>
            </div>
          </div>

          {/* Enter Time Section */}
          <div style={{ 
            background: '#f8f9fa', 
            padding: '1rem', 
            borderRadius: '4px',
            marginBottom: '1.5rem',
            border: '1px solid #dee2e6'
          }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <button 
                className="btn btn-primary" 
                style={{ 
                  background: '#007bff', 
                  color: 'white', 
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  fontSize: '0.9rem'
                }}
              >
                Enter Time
              </button>
              <button 
                className="btn btn-secondary" 
                style={{ 
                  background: '#6c757d', 
                  color: 'white', 
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  fontSize: '0.9rem'
                }}
              >
                Time Details
              </button>
            </div>

            {/* Time Entry Table */}
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: '#e9ecef', borderBottom: '2px solid #dee2e6' }}>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600 }}>CUSTOMER:PROJECT</th>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600 }}>BILLABLE</th>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600 }}>SERVICE ITEM</th>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600 }}>DEPARTMENT</th>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600 }}>CLASS</th>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600 }}>LOCATION</th>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600 }}>MEMO</th>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600 }}>Approved</th>
                    <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: 600 }}>BILLING CLASS</th>
                  </tr>
                </thead>
                <tbody>
                  {timeEntries.map(entry => (
                    <tr key={entry.id} style={{ borderBottom: '1px solid #dee2e6' }}>
                      <td style={{ padding: '0.25rem' }}>
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="<Type then tab>"
                          style={{ fontSize: '0.8rem', padding: '0.25rem' }}
                          value={entry.customerProject}
                          onChange={(e) => handleTimeEntryChange(entry.id, 'customerProject', e.target.value)}
                        />
                      </td>
                      <td style={{ padding: '0.25rem', textAlign: 'center' }}>
                        <input 
                          type="checkbox" 
                          checked={entry.billable}
                          onChange={(e) => handleTimeEntryChange(entry.id, 'billable', e.target.checked)}
                        />
                      </td>
                      <td style={{ padding: '0.25rem' }}>
                        <input 
                          type="text" 
                          className="form-control"
                          style={{ fontSize: '0.8rem', padding: '0.25rem' }}
                          value={entry.serviceItem}
                          onChange={(e) => handleTimeEntryChange(entry.id, 'serviceItem', e.target.value)}
                        />
                      </td>
                      <td style={{ padding: '0.25rem' }}>
                        <div style={{ fontSize: '0.8rem', padding: '0.25rem' }}>{entry.department}</div>
                      </td>
                      <td style={{ padding: '0.25rem' }}>
                        <input 
                          type="text" 
                          className="form-control"
                          style={{ fontSize: '0.8rem', padding: '0.25rem' }}
                          value={entry.class}
                          onChange={(e) => handleTimeEntryChange(entry.id, 'class', e.target.value)}
                        />
                      </td>
                      <td style={{ padding: '0.25rem' }}>
                        <div style={{ fontSize: '0.8rem', padding: '0.25rem' }}>{entry.location}</div>
                      </td>
                      <td style={{ padding: '0.25rem' }}>
                        <input 
                          type="text" 
                          className="form-control"
                          style={{ fontSize: '0.8rem', padding: '0.25rem' }}
                          value={entry.memo}
                          onChange={(e) => handleTimeEntryChange(entry.id, 'memo', e.target.value)}
                        />
                      </td>
                      <td style={{ padding: '0.25rem', textAlign: 'center' }}>
                        <input 
                          type="checkbox" 
                          checked={entry.approved}
                          onChange={(e) => handleTimeEntryChange(entry.id, 'approved', e.target.checked)}
                        />
                      </td>
                      <td style={{ padding: '0.25rem' }}>
                        <input 
                          type="text" 
                          className="form-control"
                          style={{ fontSize: '0.8rem', padding: '0.25rem' }}
                          value={entry.billingClass}
                          onChange={(e) => handleTimeEntryChange(entry.id, 'billingClass', e.target.value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Add Entry Buttons */}
            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-success" onClick={handleAddEntry}>
                <i className="fas fa-check"></i> Add
              </button>
              <button className="btn btn-secondary">
                <i className="fas fa-times"></i> Cancel
              </button>
              <button className="btn btn-secondary">
                <i className="fas fa-copy"></i> Copy Previous
              </button>
              <button className="btn btn-secondary">
                <i className="fas fa-plus"></i> Insert
              </button>
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #e0e0e0' }}>
            <button className="btn btn-primary" onClick={handleSave}>Save</button>
            <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button className="btn btn-secondary">Copy from Week</button>
            <button className="btn btn-secondary">Prev Week</button>
            <button className="btn btn-secondary">Next Week</button>
            <button className="btn btn-secondary">Customize Form</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyTimeTrackingModal;
