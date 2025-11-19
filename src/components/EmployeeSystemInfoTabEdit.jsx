import React, { useState } from 'react';

const EmployeeSystemInfoTabEdit = () => {
  const [activeSubTab, setActiveSubTab] = useState('systemNotes');
  
  const [systemNotes, setSystemNotes] = useState([
    {
      id: 1,
      date: '27/8/2025 12:31 pm',
      setBy: 'TOM-Maha',
      context: 'UI',
      type: 'Unset',
      field: 'Type of Contribution Fund',
      oldValue: 'SHINDA',
      newValue: ''
    },
    {
      id: 2,
      date: '26/8/2025 10:05 am',
      setBy: 'TOM-Maha',
      context: 'UI',
      type: 'Set',
      field: 'Probation Review Date',
      oldValue: '',
      newValue: '20/9/2025'
    },
    {
      id: 3,
      date: '26/8/2025 10:05 am',
      setBy: 'TOM-Maha',
      context: 'UI',
      type: 'Set',
      field: 'Hourly Rate',
      oldValue: '',
      newValue: '8.92'
    },
    {
      id: 4,
      date: '26/8/2025 10:05 am',
      setBy: 'TOM-Maha',
      context: 'UI',
      type: 'Set',
      field: 'Daily Rate',
      oldValue: '',
      newValue: '71.33'
    },
    {
      id: 5,
      date: '26/8/2025 10:05 am',
      setBy: 'TOM-Maha',
      context: 'UI',
      type: 'Set',
      field: 'Hourly Rate based on - MONTHLY TOTAL SALARY',
      oldValue: '',
      newValue: '8.92'
    },
    {
      id: 6,
      date: '26/8/2025 10:05 am',
      setBy: 'TOM-Maha',
      context: 'UI',
      type: 'Create',
      field: 'Record',
      oldValue: '',
      newValue: 'Employee'
    }
  ]);

  const [customizeView, setCustomizeView] = useState({
    view: 'Default',
    field: ''
  });

  return (
    <div className="tab-content-wrapper">
      <div style={{ padding: '1.5rem', background: '#fff' }}>
        {/* Date Created Info */}
        <div style={{ 
          background: '#f8f9fa', 
          padding: '1rem', 
          borderRadius: '4px',
          marginBottom: '1.5rem',
          border: '1px solid #dee2e6',
          fontSize: '0.9rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong>DATE CREATED:</strong> 26/8/2025 10:05 am
            </div>
            <div>
              <strong>TERMINATED</strong>
            </div>
          </div>
        </div>

        {/* Sub-tabs */}
        <div style={{
          borderBottom: '2px solid #e0e0e0',
          background: '#f8f9fa',
          display: 'flex',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          marginBottom: '1.5rem'
        }}>
          <button
            className={`tab-btn ${activeSubTab === 'systemNotes' ? 'active' : ''}`}
            onClick={() => setActiveSubTab('systemNotes')}
            style={{
              fontSize: '0.8rem',
              padding: '0.5rem 1rem',
              border: 'none',
              background: activeSubTab === 'systemNotes' ? '#4a5568' : 'transparent',
              color: activeSubTab === 'systemNotes' ? '#fff' : '#4a5568',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            System Notes
          </button>
          <button
            className={`tab-btn ${activeSubTab === 'activeWorkflows' ? 'active' : ''}`}
            onClick={() => setActiveSubTab('activeWorkflows')}
            style={{
              fontSize: '0.8rem',
              padding: '0.5rem 1rem',
              border: 'none',
              background: activeSubTab === 'activeWorkflows' ? '#4a5568' : 'transparent',
              color: activeSubTab === 'activeWorkflows' ? '#fff' : '#4a5568',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            Active Workflows
          </button>
          <button
            className={`tab-btn ${activeSubTab === 'workflowHistory' ? 'active' : ''}`}
            onClick={() => setActiveSubTab('workflowHistory')}
            style={{
              fontSize: '0.8rem',
              padding: '0.5rem 1rem',
              border: 'none',
              background: activeSubTab === 'workflowHistory' ? '#4a5568' : 'transparent',
              color: activeSubTab === 'workflowHistory' ? '#fff' : '#4a5568',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            Workflow History
          </button>
        </div>

        {/* System Notes Tab */}
        {activeSubTab === 'systemNotes' && (
          <div>
            {/* Customize View Section */}
            <div style={{ 
              background: '#f8f9fa', 
              padding: '1rem', 
              borderRadius: '4px',
              marginBottom: '1.5rem',
              border: '1px solid #dee2e6'
            }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: '#4a5568', fontWeight: 600 }}>
                Customize View
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">VIEW</label>
                  <select 
                    className="form-control"
                    value={customizeView.view}
                    onChange={(e) => setCustomizeView(prev => ({ ...prev, view: e.target.value }))}
                  >
                    <option value="Default">Default</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">FIELD</label>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="<Type then tab>"
                    value={customizeView.field}
                    onChange={(e) => setCustomizeView(prev => ({ ...prev, field: e.target.value }))}
                  />
                </div>
              </div>
            </div>

            {/* System Notes Table */}
            <div style={{ 
              background: '#f8f9fa', 
              padding: '1rem', 
              borderRadius: '4px',
              border: '1px solid #dee2e6'
            }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ background: '#e9ecef', borderBottom: '2px solid #dee2e6' }}>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>DATE</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>SET BY</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>CONTEXT</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>TYPE</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>FIELD</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>OLD VALUE</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: 600 }}>NEW VALUE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {systemNotes.map((note, index) => (
                      <tr key={note.id} style={{ 
                        borderBottom: '1px solid #dee2e6',
                        background: index % 2 === 0 ? '#fff' : '#f8f9fa'
                      }}>
                        <td style={{ padding: '0.75rem' }}>{note.date}</td>
                        <td style={{ padding: '0.75rem' }}>{note.setBy}</td>
                        <td style={{ padding: '0.75rem' }}>{note.context}</td>
                        <td style={{ padding: '0.75rem' }}>{note.type}</td>
                        <td style={{ padding: '0.75rem' }}>{note.field}</td>
                        <td style={{ padding: '0.75rem' }}>{note.oldValue}</td>
                        <td style={{ padding: '0.75rem' }}>{note.newValue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Active Workflows Tab */}
        {activeSubTab === 'activeWorkflows' && (
          <div style={{ 
            background: '#f8f9fa', 
            padding: '2rem', 
            borderRadius: '4px',
            border: '1px solid #dee2e6',
            textAlign: 'center',
            color: '#6c757d'
          }}>
            <p>No active workflows found</p>
          </div>
        )}

        {/* Workflow History Tab */}
        {activeSubTab === 'workflowHistory' && (
          <div style={{ 
            background: '#f8f9fa', 
            padding: '2rem', 
            borderRadius: '4px',
            border: '1px solid #dee2e6',
            textAlign: 'center',
            color: '#6c757d'
          }}>
            <p>No workflow history available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeSystemInfoTabEdit;
