import React, { useState } from 'react';

const TimeTrackingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    customForm: 'Standard Time Tracking Form',
    employee: 'MEP01 001 JEGANATHAN SUNDARAVE',
    date: '19/11/2025',
    duration: '',
    customerProject: '',
    serviceItem: '',
    billable: false,
    memo: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
            Time Tracking
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
            <button className="btn btn-secondary">Prev Week</button>
            <button className="btn btn-secondary">Next Week</button>
            <button className="btn btn-secondary">Customize Form</button>
            <button className="btn btn-secondary"><i className="fas fa-print"></i></button>
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
                <label className="form-label">SERVICE ITEM</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="<Type then tab>"
                  value={formData.serviceItem}
                  onChange={(e) => handleInputChange('serviceItem', e.target.value)}
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
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input 
                    type="checkbox" 
                    checked={formData.billable}
                    onChange={(e) => handleInputChange('billable', e.target.checked)}
                  />
                  BILLABLE
                </label>
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
                <label className="form-label">MEMO</label>
                <textarea 
                  className="form-control" 
                  rows="3"
                  value={formData.memo}
                  onChange={(e) => handleInputChange('memo', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label required">DURATION</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.duration}
                    onChange={(e) => handleInputChange('duration', e.target.value)}
                  />
                  <button className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem' }}>
                    <i className="fas fa-clock"></i>
                  </button>
                  <button className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem' }}>
                    <i className="fas fa-calendar"></i>
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">CUSTOMER:PROJECT</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="<Type then tab>"
                  value={formData.customerProject}
                  onChange={(e) => handleInputChange('customerProject', e.target.value)}
                />
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">SUBSIDIARY</label>
                <div className="field-value" style={{ padding: '0.5rem', background: 'white', border: '1px solid #ddd', borderRadius: '4px' }}>
                  Tech Onshore MEP Prefabricators Pte Ltd.
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">CLASS</label>
                <select className="form-control">
                  <option value=""></option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">BILLING SUBSIDIARY</label>
                <select className="form-control">
                  <option value=""></option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label required">LOCATION</label>
                <select className="form-control">
                  <option value="MEP MARINE CC">MEP MARINE CC</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label required">DEPARTMENT</label>
                <select className="form-control">
                  <option value="MEP MARINE">MEP MARINE</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">BILLING CLASS</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            {/* Additional Fields */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
              <div className="form-group">
                <label className="form-label">IN TIME</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label className="form-label">REF COUNTRY</label>
                <select className="form-control">
                  <option value=""></option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" />
                  TIME SHEET APPROVED
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">TIME TO TEST</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" />
                  TIMESHEET REJECTED
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">SERVICE ITEM FROM TASK</label>
                <input type="text" className="form-control" placeholder="<Type then tab>" />
              </div>
              <div className="form-group">
                <label className="form-label">OVS ALLOWANCE</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label className="form-label">OUT TIME</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label className="form-label">REF PARENT</label>
                <select className="form-control">
                  <option value=""></option>
                </select>
              </div>
            </div>
          </div>

          {/* Time Details Section */}
          <div style={{ 
            background: '#f8f9fa', 
            padding: '1rem', 
            borderRadius: '4px',
            marginBottom: '1.5rem',
            border: '1px solid #dee2e6'
          }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: '#4a5568', fontWeight: 600 }}>Time Details</h4>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: '#e9ecef', borderBottom: '2px solid #dee2e6' }}>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>Customer:Project</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>Service Item</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>Sun, 16</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>Mon, 17</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>Tue, 18</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>Wed, 19</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>Thu, 20</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>Fri, 21</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>Sat, 22</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                    <td style={{ padding: '0.5rem' }}></td>
                    <td style={{ padding: '0.5rem' }}></td>
                    <td style={{ padding: '0.5rem' }}>0:00</td>
                    <td style={{ padding: '0.5rem' }}>0:00</td>
                    <td style={{ padding: '0.5rem' }}>0:00</td>
                    <td style={{ padding: '0.5rem' }}>0:00</td>
                    <td style={{ padding: '0.5rem' }}>0:00</td>
                    <td style={{ padding: '0.5rem' }}>0:00</td>
                    <td style={{ padding: '0.5rem' }}>0:00</td>
                    <td style={{ padding: '0.5rem' }}>0:00</td>
                  </tr>
                  <tr style={{ background: '#f8f9fa', fontWeight: 600 }}>
                    <td style={{ padding: '0.75rem' }} colSpan="2">Totals</td>
                    <td style={{ padding: '0.75rem' }}>0:00</td>
                    <td style={{ padding: '0.75rem' }}>0:00</td>
                    <td style={{ padding: '0.75rem' }}>0:00</td>
                    <td style={{ padding: '0.75rem' }}>0:00</td>
                    <td style={{ padding: '0.75rem' }}>0:00</td>
                    <td style={{ padding: '0.75rem' }}>0:00</td>
                    <td style={{ padding: '0.75rem' }}>0:00</td>
                    <td style={{ padding: '0.75rem' }}>0:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #e0e0e0' }}>
            <button className="btn btn-primary" onClick={handleSave}>Save</button>
            <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button className="btn btn-secondary">Prev Week</button>
            <button className="btn btn-secondary">Next Week</button>
            <button className="btn btn-secondary">Customize Form</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTrackingModal;
