import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreatePublicHoliday = ({ onBack, onSave, calendarData }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [notesCollapsed, setNotesCollapsed] = useState(false);
  const [formData, setFormData] = useState({
    inactive: false,
    refCalendar: calendarData?.name || '2021 (MEP)',
    date: '',
    description: '',
    appInternalId: '',
    notes: []
  });

  const [noteForm, setNoteForm] = useState({
    title: '',
    memo: '',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNoteChange = (e) => {
    const { name, value } = e.target;
    setNoteForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddNote = () => {
    if (noteForm.memo) {
      setFormData(prev => ({
        ...prev,
        notes: [...prev.notes, { ...noteForm, id: Date.now() }]
      }));
      setNoteForm({
        title: '',
        memo: '',
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })
      });
    }
  };

  const handleRemoveAllNotes = () => {
    if (window.confirm('Are you sure you want to remove all notes?')) {
      setFormData(prev => ({
        ...prev,
        notes: []
      }));
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleSave = () => {
    if (!formData.date || !formData.description) {
      showToast('Please fill in Date and Description', 'error');
      return;
    }

    showToast('Public Holiday saved successfully', 'success');
    setTimeout(() => {
      if (onSave) onSave(formData);
      if (onBack) onBack();
    }, 1500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (onBack) onBack();
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-calendar-day"></i>
          <div>
            <h1>Public Holiday</h1>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={handleCancel}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
          <button className="btn-action">More</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn-toolbar" style={{ marginLeft: '0.5rem' }}>
          <i className="fas fa-chevron-down"></i>
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          Cancel
        </button>
      </div>

      <div className="detail-content">
        <div className="detail-section">
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>
                  <input
                    type="checkbox"
                    name="inactive"
                    checked={formData.inactive}
                    onChange={handleInputChange}
                    style={{ marginRight: '0.5rem' }}
                  />
                  INACTIVE
                </label>
              </div>
              <div className="detail-field">
                <label>DESCRIPTION <span style={{ color: 'red' }}>*</span></label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter description"
                />
              </div>
              <div className="detail-field">
                <label>REF CALENDAR</label>
                <div className="field-value">{formData.refCalendar}</div>
              </div>
              <div className="detail-field">
                <label>APP INTERNAL ID</label>
                <input
                  type="text"
                  name="appInternalId"
                  value={formData.appInternalId}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="detail-field">
                <label>DATE <span style={{ color: 'red' }}>*</span></label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        <div className="detail-tabs" style={{ marginTop: '0' }}>
          <div className="tabs-header">
            <button className="tab-btn active">Notes</button>
            <button className="tab-btn">Files</button>
            <div style={{ marginLeft: 'auto' }}>
              <button style={{ background: 'transparent', border: 'none', color: '#666', cursor: 'pointer' }}>
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>

          <div className="tab-content" style={{ padding: '1.5rem', background: '#f5f5f5' }}>
            <div className={`detail-section ${notesCollapsed ? 'collapsed' : ''}`}>
              <div className="section-header" onClick={() => setNotesCollapsed(!notesCollapsed)}>
                <i className="fas fa-chevron-down"></i>
                <h3>User Notes</h3>
              </div>
              <div className="section-body">
                <div style={{ marginBottom: '1rem' }}>
                  <button className="btn-clear-lines" onClick={handleRemoveAllNotes}>
                    Remove all
                  </button>
                </div>

                <div className="items-table-container">
                  <table className="items-table" style={{ background: 'white' }}>
                    <thead>
                      <tr style={{ background: '#e8e8e8' }}>
                        <th style={{minWidth: '150px'}}>TITLE</th>
                        <th style={{minWidth: '300px'}}>MEMO <span style={{ color: 'red' }}>*</span></th>
                        <th style={{minWidth: '120px'}}>DATE</th>
                        <th style={{minWidth: '100px'}}>TIME</th>
                        <th style={{minWidth: '100px'}}>TYPE</th>
                        <th style={{minWidth: '100px'}}>DIRECTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ background: '#fff' }}>
                        <td>
                          <input
                            type="text"
                            name="title"
                            value={noteForm.title}
                            onChange={handleNoteChange}
                            className="form-control"
                            style={{ width: '100%', border: '1px solid #ddd' }}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="memo"
                            value={noteForm.memo}
                            onChange={handleNoteChange}
                            className="form-control"
                            style={{ width: '100%', border: '1px solid #ddd' }}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            name="date"
                            value={noteForm.date}
                            onChange={handleNoteChange}
                            className="form-control"
                            style={{ width: '100%', border: '1px solid #ddd' }}
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            name="time"
                            value={noteForm.time}
                            onChange={handleNoteChange}
                            className="form-control"
                            style={{ width: '100%', border: '1px solid #ddd' }}
                          />
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      {formData.notes.map((note) => (
                        <tr key={note.id} style={{ background: '#fff' }}>
                          <td>{note.title}</td>
                          <td>{note.memo}</td>
                          <td>{note.date}</td>
                          <td>{note.time}</td>
                          <td></td>
                          <td></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn-toolbar-primary" onClick={handleAddNote}>
                    <i className="fas fa-check"></i> Add
                  </button>
                  <button className="btn-toolbar">
                    <i className="fas fa-times"></i> Cancel
                  </button>
                  <button className="btn-toolbar" style={{ marginLeft: 'auto' }}>
                    <i className="fas fa-plus"></i> Insert
                  </button>
                  <button className="btn-toolbar">
                    <i className="fas fa-trash"></i> Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-toolbar" style={{ marginTop: '2rem', justifyContent: 'flex-start' }}>
          <button className="btn-toolbar-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn-toolbar" style={{ marginLeft: '0.5rem' }}>
            <i className="fas fa-chevron-down"></i>
          </button>
          <button className="btn-toolbar" onClick={handleCancel}>
            Cancel
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

export default CreatePublicHoliday;
