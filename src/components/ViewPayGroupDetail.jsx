import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewPayGroupDetail = ({ onBack, onEdit, selectedPayGroup }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('user-notes');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [notesView, setNotesView] = useState('Default');
  const [systemNotesView, setSystemNotesView] = useState('Default');
  const [systemNotesField, setSystemNotesField] = useState('- All -');

  // Sample data
  const payGroupData = {
    name: 'EP & Local (MEP)',
    calendarDaysCalculation: true,
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    country: 'Singapore',
    payrollPeriod: 'Monthly',
    systemNotes: [
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
    ]
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit(selectedPayGroup);
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-users"></i>
          <div>
            <h1>Pay Group</h1>
            <div className="detail-subtitle">
              <span>{payGroupData.name}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-action">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-action">List</button>
          <button className="btn-action">Search</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary" onClick={handleEdit}>
          <i className="fas fa-edit"></i>
          Edit
        </button>
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-copy"></i>
          Copy
        </button>
        <div className="toolbar-dropdown" style={{ marginLeft: 'auto' }}>
          <button className="btn-toolbar">
            <i className="fas fa-cog"></i>
            Actions
            <i className="fas fa-chevron-down" style={{ marginLeft: '0.5rem', fontSize: '0.7rem' }}></i>
          </button>
        </div>
      </div>

      <div className="detail-content">
        {/* Primary Information Section */}
        <div className={`detail-section ${primaryInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setPrimaryInfoCollapsed(!primaryInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Pay Group Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>NAME</label>
                <div className="field-value">{payGroupData.name}</div>
              </div>
              <div className="detail-field">
                <label>COUNTRY</label>
                <div className="field-value">{payGroupData.country}</div>
              </div>
              <div className="detail-field">
                <label>CALENDAR DAYS CALCULATION</label>
                <div className="field-value">
                  <input type="checkbox" checked={payGroupData.calendarDaysCalculation} disabled />
                </div>
              </div>
              <div className="detail-field">
                <label>PAYROLL PERIOD</label>
                <div className="field-value">{payGroupData.payrollPeriod}</div>
              </div>
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{payGroupData.subsidiary}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'user-notes' ? 'active' : ''}`}
              onClick={() => setActiveTab('user-notes')}
            >
              User Notes
            </button>
            <button 
              className={`tab-btn ${activeTab === 'system-notes' ? 'active' : ''}`}
              onClick={() => setActiveTab('system-notes')}
            >
              System Notes ●
            </button>
          </div>

          <div className="tabs-content">
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
                      {payGroupData.systemNotes.map((note) => (
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
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="detail-footer-actions">
          <button className="btn-toolbar-primary" onClick={handleEdit}>
            <i className="fas fa-edit"></i>
            Edit
          </button>
          <button className="btn-toolbar" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
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

export default ViewPayGroupDetail;
