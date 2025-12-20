import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CorrectTimesheetRecord = ({ record, onBack, onSave }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('corrections');
  const [formData, setFormData] = useState({
    employee: record?.employee || 'TMO008 Natarajan Muruganandham',
    employeeId: record?.employeeId || 'TMO008',
    date: record?.date || '10-Mar-2024',
    subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
    shift: record?.shift || '8 AM To 5 PM',
    dayType: record?.dayType || 'Weekday',
    firstIn: record?.firstIn || '08:00',
    lastOut: record?.lastOut || '01:00',
    project: 'Project A - Marine Fabrication',
    remarks: '',
    correctedBy: 'HR Manager',
    correctionDate: new Date().toLocaleDateString('en-GB')
  });

  const shiftOptions = [
    '8 AM To 5 PM',
    '9 AM To 6 PM',
    '6 AM To 3 PM',
    '2 PM To 11 PM',
    '10 PM To 7 AM',
    'Flexible'
  ];

  const dayTypeOptions = [
    'Weekday',
    'Saturday',
    'Sunday',
    'Public Holiday'
  ];

  const [detailRecords, setDetailRecords] = useState(record?.detailRecords || [
    {
      id: 1,
      project: 'Project A - Marine Fabrication',
      inTime: '08:00',
      outTime: '17:00',
      normalHours: '8.00',
      ot15Hours: '1.00',
      ot20Hours: '0.00'
    },
    {
      id: 2,
      project: 'Project B - Offshore Installation',
      inTime: '18:00',
      outTime: '01:00',
      normalHours: '0.00',
      ot15Hours: '0.00',
      ot20Hours: '7.00'
    }
  ]);

  const [editingRecord, setEditingRecord] = useState(null);

  const projects = [
    'Project A - Marine Fabrication',
    'Project B - Offshore Installation',
    'Project C - MEP Installation',
    'Project D - Repair Works'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditRecord = (record) => {
    setEditingRecord({ ...record });
  };

  const handleUpdateRecord = () => {
    if (!editingRecord) return;

    setDetailRecords(prev => prev.map(rec => 
      rec.id === editingRecord.id ? editingRecord : rec
    ));
    setEditingRecord(null);
    showToast('Work session updated successfully', 'success');
  };

  const handleAddRecord = () => {
    const newRecord = {
      id: detailRecords.length + 1,
      project: formData.project,
      inTime: '',
      outTime: '',
      normalHours: '0.00',
      ot15Hours: '0.00',
      ot20Hours: '0.00'
    };
    setDetailRecords([...detailRecords, newRecord]);
    setEditingRecord(newRecord);
  };

  const handleDeleteRecord = (id) => {
    if (detailRecords.length === 1) {
      showToast('Cannot delete the last work session', 'error');
      return;
    }
    setDetailRecords(prev => prev.filter(rec => rec.id !== id));
    showToast('Work session deleted', 'success');
  };

  const handleSave = () => {
    showToast('Timesheet corrections saved successfully', 'success');
    setTimeout(() => {
      if (onSave) onSave();
    }, 1500);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-edit"></i>
          <div>
            <h1>Correct Timesheet Record</h1>
            <div className="detail-subtitle">
              <span>{formData.employee} • {formData.date}</span>
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
        <button className="btn-toolbar" onClick={onBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn-toolbar" onClick={handleAddRecord}>
          <i className="fas fa-plus"></i>
          Add Work Session
        </button>
      </div>

      <div className="detail-content">
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Employee Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>EMPLOYEE</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.employee}
                  disabled
                />
              </div>
              <div className="detail-field">
                <label>EMPLOYEE ID</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.employeeId}
                  disabled
                />
              </div>
              <div className="detail-field">
                <label>DATE</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.date}
                  disabled
                />
              </div>
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.subsidiary}
                  disabled
                />
              </div>
              <div className="detail-field">
                <label>SHIFT <span className="required">*</span></label>
                <select
                  name="shift"
                  className="form-control"
                  value={formData.shift}
                  onChange={handleInputChange}
                >
                  {shiftOptions.map(shift => (
                    <option key={shift} value={shift}>{shift}</option>
                  ))}
                </select>
              </div>
              <div className="detail-field">
                <label>DAY TYPE <span className="required">*</span></label>
                <select
                  name="dayType"
                  className="form-control"
                  value={formData.dayType}
                  onChange={handleInputChange}
                >
                  {dayTypeOptions.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Time Corrections</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>FIRST IN TIME <span className="required">*</span></label>
                <input
                  type="time"
                  name="firstIn"
                  value={formData.firstIn}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="detail-field">
                <label>LAST OUT TIME <span className="required">*</span></label>
                <input
                  type="time"
                  name="lastOut"
                  value={formData.lastOut}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label>CORRECTION REMARKS <span className="required">*</span></label>
                <textarea
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleInputChange}
                  className="form-control"
                  rows="3"
                  placeholder="Enter detailed reason for correction (required for audit trail)..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Work Sessions</h3>
          </div>
          <div className="section-body">
            <div className="items-section" style={{ overflowX: 'auto', maxWidth: '100%' }}>
            <table className="items-table" style={{ minWidth: '1000px' }}>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>PROJECT</th>
                  <th style={{ width: '12%' }}>IN TIME</th>
                  <th style={{ width: '12%' }}>OUT TIME</th>
                  <th style={{ width: '10%' }}>NORMAL</th>
                  <th style={{ width: '10%' }}>OT 1.5X</th>
                  <th style={{ width: '10%' }}>OT 2.0X</th>
                  <th style={{ width: '16%' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {detailRecords.map((rec) => (
                  <tr key={rec.id}>
                      <td>
                        {editingRecord?.id === rec.id ? (
                          <select
                            value={editingRecord.project}
                            onChange={(e) => setEditingRecord({ ...editingRecord, project: e.target.value })}
                            className="form-control"
                            style={{ width: '100%' }}
                          >
                            {projects.map(proj => (
                              <option key={proj} value={proj}>{proj}</option>
                            ))}
                          </select>
                        ) : (
                          rec.project
                        )}
                      </td>
                      <td>
                        {editingRecord?.id === rec.id ? (
                          <input
                            type="time"
                            value={editingRecord.inTime}
                            onChange={(e) => setEditingRecord({ ...editingRecord, inTime: e.target.value })}
                            className="form-control"
                            style={{ width: '100%' }}
                          />
                        ) : (
                          rec.inTime
                        )}
                      </td>
                      <td>
                        {editingRecord?.id === rec.id ? (
                          <input
                            type="time"
                            value={editingRecord.outTime}
                            onChange={(e) => setEditingRecord({ ...editingRecord, outTime: e.target.value })}
                            className="form-control"
                            style={{ width: '100%' }}
                          />
                        ) : (
                          rec.outTime
                        )}
                      </td>
                      <td>
                        {editingRecord?.id === rec.id ? (
                          <input
                            type="number"
                            value={editingRecord.normalHours}
                            onChange={(e) => setEditingRecord({ ...editingRecord, normalHours: e.target.value })}
                            className="form-control"
                            style={{ width: '80px' }}
                            step="0.01"
                          />
                        ) : (
                          rec.normalHours
                        )}
                      </td>
                      <td>
                        {editingRecord?.id === rec.id ? (
                          <input
                            type="number"
                            value={editingRecord.ot15Hours}
                            onChange={(e) => setEditingRecord({ ...editingRecord, ot15Hours: e.target.value })}
                            className="form-control"
                            style={{ width: '80px' }}
                            step="0.01"
                          />
                        ) : (
                          rec.ot15Hours
                        )}
                      </td>
                      <td>
                        {editingRecord?.id === rec.id ? (
                          <input
                            type="number"
                            value={editingRecord.ot20Hours}
                            onChange={(e) => setEditingRecord({ ...editingRecord, ot20Hours: e.target.value })}
                            className="form-control"
                            style={{ width: '80px' }}
                            step="0.01"
                          />
                        ) : (
                          rec.ot20Hours
                        )}
                      </td>
                    <td>
                      <div style={{ display: 'flex', gap: '4px', justifyContent: 'flex-start' }}>
                          {editingRecord?.id === rec.id ? (
                            <>
                            <button 
                              onClick={handleUpdateRecord}
                              className="btn-table-action"
                              style={{
                                padding: '4px 10px',
                                fontSize: '0.75rem',
                                fontWeight: '500',
                                color: '#374151',
                                backgroundColor: '#fff',
                                border: '1px solid #d1d5db',
                                borderRadius: '3px',
                                cursor: 'pointer'
                              }}
                            >
                              <i className="fas fa-check" style={{ marginRight: '4px' }}></i>Save
                            </button>
                            <button 
                              onClick={() => setEditingRecord(null)}
                              className="btn-table-action"
                              style={{
                                padding: '4px 10px',
                                fontSize: '0.75rem',
                                fontWeight: '500',
                                color: '#374151',
                                backgroundColor: '#fff',
                                border: '1px solid #d1d5db',
                                borderRadius: '3px',
                                cursor: 'pointer'
                              }}
                            >
                              <i className="fas fa-times" style={{ marginRight: '4px' }}></i>Cancel
                            </button>
                            </>
                          ) : (
                            <>
                            <button 
                              onClick={() => handleEditRecord(rec)}
                              className="btn-table-action"
                              style={{
                                padding: '4px 10px',
                                fontSize: '0.75rem',
                                fontWeight: '500',
                                color: '#374151',
                                backgroundColor: '#fff',
                                border: '1px solid #d1d5db',
                                borderRadius: '3px',
                                cursor: 'pointer'
                              }}
                            >
                              <i className="fas fa-edit" style={{ marginRight: '4px' }}></i>Edit
                            </button>
                            <button 
                              onClick={() => handleDeleteRecord(rec.id)}
                              className="btn-table-action"
                              style={{
                                padding: '4px 10px',
                                fontSize: '0.75rem',
                                fontWeight: '500',
                                color: '#dc2626',
                                backgroundColor: '#fff',
                                border: '1px solid #fecaca',
                                borderRadius: '3px',
                                cursor: 'pointer'
                              }}
                            >
                              <i className="fas fa-trash" style={{ marginRight: '4px' }}></i>Delete
                            </button>
                            </>
                          )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Important Notes</h3>
          </div>
          <div className="section-body">
            <div style={{ padding: '1rem', background: '#fef3c7', border: '1px solid #fbbf24', borderRadius: '4px' }}>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#92400e', fontSize: '0.875rem', lineHeight: '1.6' }}>
                <li>All corrections are logged in the audit trail for compliance</li>
                <li>System automatically recalculates Normal, OT 1.5x, and OT 2.0x hours</li>
                <li>Cross-midnight shifts are handled automatically</li>
                <li>Weekend and holiday rates are applied based on day type</li>
                <li>Detailed remarks are mandatory for all corrections</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="detail-footer">
          <button className="btn-toolbar" onClick={onBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn-toolbar-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save Corrections
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

export default CorrectTimesheetRecord;
