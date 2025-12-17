import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateAssetNameList = ({ assetData, onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('notes');
  
  const [formData, setFormData] = useState(assetData || {
    name: '',
    inactive: false,
    description: '',
    assetType: '',
    assetSerialNumber: '',
    assetLifetime: '',
    depreciationPeriod: '',
    assetLocation: '',
    assetImage: '',
    availableForLoan: false
  });

  const [userNotes, setUserNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', memo: '', date: '', time: '', type: '', direction: '' });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddNote = () => {
    if (!newNote.memo) {
      showToast('Please fill in memo field', 'error');
      return;
    }
    const note = {
      id: Date.now(),
      title: newNote.title,
      memo: newNote.memo,
      date: newNote.date || new Date().toLocaleDateString(),
      time: newNote.time || new Date().toLocaleTimeString(),
      type: newNote.type,
      direction: newNote.direction
    };
    setUserNotes(prev => [...prev, note]);
    setNewNote({ title: '', memo: '', date: '', time: '', type: '', direction: '' });
  };

  const handleRemoveNote = (id) => {
    setUserNotes(prev => prev.filter(note => note.id !== id));
  };

  const handleSave = () => {
    if (!formData.name) {
      showToast('Please fill in required fields', 'error');
      return;
    }
    showToast('Asset Name List saved successfully!', 'success');
    if (onSave) onSave(formData);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-clipboard-list"></i>
          <div>
            <h1>Asset Name List</h1>
            <div className="detail-subtitle">
              <span>{assetData ? assetData.name : 'New Asset Name List'}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-action">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-action">List</button>
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
        <button className="btn-toolbar" onClick={onCancel}>
          <i className="fas fa-times"></i>
          Cancel
        </button>
      </div>

      <div className="detail-content">
        <div className="detail-section">
          <div className="section-header">
            <h3>Asset Name Details</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>NAME <span className="required">*</span></label>
                <input type="text" className="form-control" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>INACTIVE</label>
                <div className="field-value">
                  <input type="checkbox" checked={formData.inactive} onChange={(e) => handleInputChange('inactive', e.target.checked)} />
                </div>
              </div>
              <div className="detail-field">
                <label>DESCRIPTION</label>
                <textarea className="form-control" value={formData.description} onChange={(e) => handleInputChange('description', e.target.value)} rows="2" />
              </div>
              <div className="detail-field">
                <label>ASSET TYPE</label>
                <select className="form-control" value={formData.assetType} onChange={(e) => handleInputChange('assetType', e.target.value)}>
                  <option value="">Select Type</option>
                  <option value="Computers">Computers</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Equipment">Equipment</option>
                  <option value="Vehicles">Vehicles</option>
                </select>
              </div>
              <div className="detail-field">
                <label>ASSET SERIAL NUMBER</label>
                <input type="text" className="form-control" value={formData.assetSerialNumber} onChange={(e) => handleInputChange('assetSerialNumber', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>ASSET LIFETIME</label>
                <input type="text" className="form-control" value={formData.assetLifetime} onChange={(e) => handleInputChange('assetLifetime', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>DEPRECIATION PERIOD</label>
                <select className="form-control" value={formData.depreciationPeriod} onChange={(e) => handleInputChange('depreciationPeriod', e.target.value)}>
                  <option value="">Select Period</option>
                  <option value="1 Year">1 Year</option>
                  <option value="2 Years">2 Years</option>
                  <option value="3 Years">3 Years</option>
                  <option value="5 Years">5 Years</option>
                </select>
              </div>
              <div className="detail-field">
                <label>ASSET LOCATION</label>
                <select className="form-control" value={formData.assetLocation} onChange={(e) => handleInputChange('assetLocation', e.target.value)}>
                  <option value="">Select Location</option>
                  <option value="Office">Office</option>
                  <option value="Warehouse">Warehouse</option>
                  <option value="Site">Site</option>
                </select>
              </div>
              <div className="detail-field">
                <label>ASSET IMAGE</label>
                <input type="file" className="form-control" onChange={(e) => handleInputChange('assetImage', e.target.files[0])} />
              </div>
              <div className="detail-field">
                <label>AVAILABLE FOR LOAN</label>
                <div className="field-value">
                  <input type="checkbox" checked={formData.availableForLoan} onChange={(e) => handleInputChange('availableForLoan', e.target.checked)} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'notes' ? 'active' : ''}`} onClick={() => setActiveTab('notes')}>Notes</button>
            <button className={`tab-btn ${activeTab === 'workflow' ? 'active' : ''}`} onClick={() => setActiveTab('workflow')}>Workflow</button>
          </div>

          <div className="tabs-content">
            {activeTab === 'notes' && (
              <div className="tab-content-wrapper" style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>User Notes</h4>
                  <button className="btn btn-secondary" style={{ marginBottom: '1rem' }}>Remove all</button>
                </div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>TITLE</th>
                      <th>MEMO <span className="required">*</span></th>
                      <th>DATE</th>
                      <th>TIME</th>
                      <th>TYPE</th>
                      <th>DIRECTION</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userNotes.map((note) => (
                      <tr key={note.id}>
                        <td>{note.title}</td>
                        <td>{note.memo}</td>
                        <td>{note.date}</td>
                        <td>{note.time}</td>
                        <td>{note.type}</td>
                        <td>{note.direction}</td>
                        <td>
                          <button 
                            className="btn btn-sm btn-secondary" 
                            onClick={() => handleRemoveNote(note.id)}
                            style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                    <tr style={{ background: '#f9f9f9' }}>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={newNote.title} 
                          onChange={(e) => setNewNote(prev => ({ ...prev, title: e.target.value }))}
                          placeholder="Enter Title"
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={newNote.memo} 
                          onChange={(e) => setNewNote(prev => ({ ...prev, memo: e.target.value }))}
                          placeholder="Enter Memo"
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={newNote.date} 
                          onChange={(e) => setNewNote(prev => ({ ...prev, date: e.target.value }))}
                          placeholder="Auto-generated"
                          disabled
                          style={{ background: '#f5f5f5' }}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={newNote.time} 
                          onChange={(e) => setNewNote(prev => ({ ...prev, time: e.target.value }))}
                          placeholder="Auto-generated"
                          disabled
                          style={{ background: '#f5f5f5' }}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={newNote.type} 
                          onChange={(e) => setNewNote(prev => ({ ...prev, type: e.target.value }))}
                          placeholder="Enter Type"
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={newNote.direction} 
                          onChange={(e) => setNewNote(prev => ({ ...prev, direction: e.target.value }))}
                          placeholder="Enter Direction"
                        />
                      </td>
                      <td>
                        <button 
                          className="btn btn-sm btn-primary" 
                          onClick={handleAddNote}
                          style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
                        >
                          <i className="fas fa-plus"></i> Add
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'workflow' && (
              <div className="tab-content-wrapper" style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <label>VIEW</label>
                  <select className="form-control" style={{ width: '200px' }}>
                    <option>Default</option>
                  </select>
                  <button className="btn btn-primary">Customize View</button>
                  <button className="btn btn-primary">Refresh</button>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Active Workflows</h4>
                </div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>WORKFLOW</th>
                      <th>CURRENT STATE</th>
                      <th>DATE ENTERED WORKFLOW</th>
                      <th>DATE ENTERED STATE</th>
                      <th>OPTIONS</th>
                      <th>STATUS</th>
                      <th>CANCEL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                        No records to show.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ marginTop: '2rem' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Workflow History</h4>
                </div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>WORKFLOW</th>
                      <th>STATE NAME INFO</th>
                      <th>DATE ENTERED STATE</th>
                      <th>DATE EXITED STATE</th>
                      <th>OPTIONS</th>
                      <th>LOG</th>
                      <th>NOTES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                        No records to show.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default CreateAssetNameList;
