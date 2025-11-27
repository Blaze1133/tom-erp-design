import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateMilestone = ({ isEdit = false, onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('details');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [scheduleCollapsed, setScheduleCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);

  const [formData, setFormData] = useState({
    milestoneId: isEdit ? 'MS001' : '',
    milestoneName: isEdit ? 'MEP Phase 1 Completion' : '',
    project: isEdit ? 'PRJ001 - MEP Installation Project' : '',
    status: isEdit ? 'In Progress' : 'Not Started',
    targetDate: isEdit ? '2024-12-15' : '',
    actualDate: '',
    completionPercentage: isEdit ? 65 : 0,
    description: '',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    department: '',
    milestoneClass: '',
    notes: '',
    deliverables: ''
  });

  const statuses = ['Not Started', 'In Progress', 'At Risk', 'Completed', 'Delayed'];

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];

  const departments = [
    'TOM: Human Resource',
    'TOM: Finance: Internal Transfer',
    'TOM: IT',
    'TOM: Logistic',
    'TOM: Operating',
    'TOM: Purchase',
    'TOM: Sales and Marketing',
    'TOM: Security',
    'TOM: Engineering',
    'TOM: Production'
  ];

  const classes = [
    'Consumable Item', 'Course', 'Cutting Works', 'Electrical', 'Fabrication',
    'Hydrotesting', 'Installation work', 'Manpower Supply', 'Material Supply',
    'Module /Prefab', 'Piping', 'Project Works', 'Refurbishment works',
    'Rental', 'Repair & Referable', 'Sale of Scrap Metal', 'Structure'
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!formData.milestoneName.trim()) {
      showToast('Milestone name is required', 'error');
      return;
    }
    showToast(`Milestone ${isEdit ? 'updated' : 'created'} successfully!`, 'success');
    if (onSave) onSave(formData);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (onCancel) onCancel();
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-flag-checkered"></i>
          <div>
            <h1>Milestone</h1>
            <div className="detail-subtitle">
              <span>{formData.milestoneId}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
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
        <button className="btn-toolbar" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
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
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>MILESTONE ID <span style={{color: 'orange'}}>*</span></label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="text" className="form-control" value={formData.milestoneId} onChange={(e) => handleInputChange('milestoneId', e.target.value)} placeholder="To Be Generated" />
                  <label style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
                    <input type="checkbox" style={{ marginRight: '0.25rem' }} />
                    AUTO
                  </label>
                </div>
              </div>
              <div className="detail-field">
                <label>MILESTONE NAME <span style={{color: 'orange'}}>*</span></label>
                <input type="text" className="form-control" value={formData.milestoneName} onChange={(e) => handleInputChange('milestoneName', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>PROJECT <span style={{color: 'orange'}}>*</span></label>
                <input type="text" className="form-control" value={formData.project} onChange={(e) => handleInputChange('project', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>STATUS <span style={{color: 'orange'}}>*</span></label>
                <select className="form-control" value={formData.status} onChange={(e) => handleInputChange('status', e.target.value)}>
                  {statuses.map(status => <option key={status} value={status}>{status}</option>)}
                </select>
              </div>
              <div className="detail-field">
                <label>DESCRIPTION</label>
                <textarea className="form-control" rows="3" value={formData.description} onChange={(e) => handleInputChange('description', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>DELIVERABLES</label>
                <textarea className="form-control" rows="3" value={formData.deliverables} onChange={(e) => handleInputChange('deliverables', e.target.value)} />
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Section */}
        <div className={`detail-section ${scheduleCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setScheduleCollapsed(!scheduleCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Schedule</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>TARGET DATE <span style={{color: 'orange'}}>*</span></label>
                <input type="date" className="form-control" value={formData.targetDate} onChange={(e) => handleInputChange('targetDate', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>ACTUAL DATE</label>
                <input type="date" className="form-control" value={formData.actualDate} onChange={(e) => handleInputChange('actualDate', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>COMPLETION PERCENTAGE</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={formData.completionPercentage} 
                    onChange={(e) => handleInputChange('completionPercentage', e.target.value)}
                    style={{ flex: 1 }}
                  />
                  <input 
                    type="number" 
                    className="form-control" 
                    value={formData.completionPercentage} 
                    onChange={(e) => handleInputChange('completionPercentage', e.target.value)}
                    style={{ width: '80px' }}
                    min="0"
                    max="100"
                  />
                  <span>%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification Section */}
        <div className={`detail-section ${classificationCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setClassificationCollapsed(!classificationCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY <span style={{color: 'orange'}}>*</span></label>
                <select className="form-control" value={formData.subsidiary} onChange={(e) => handleInputChange('subsidiary', e.target.value)}>
                  {subsidiaries.map(subsidiary => <option key={subsidiary} value={subsidiary}>{subsidiary}</option>)}
                </select>
              </div>
              <div className="detail-field">
                <label>DEPARTMENT</label>
                <select className="form-control" value={formData.department} onChange={(e) => handleInputChange('department', e.target.value)}>
                  <option value=""></option>
                  {departments.map(dept => <option key={dept} value={dept}>{dept}</option>)}
                </select>
              </div>
              <div className="detail-field">
                <label>MILESTONE CLASS</label>
                <select className="form-control" value={formData.milestoneClass} onChange={(e) => handleInputChange('milestoneClass', e.target.value)}>
                  <option value=""></option>
                  {classes.map(cls => <option key={cls} value={cls}>{cls}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`} onClick={() => setActiveTab('details')}>Details</button>
            <button className={`tab-btn ${activeTab === 'tasks' ? 'active' : ''}`} onClick={() => setActiveTab('tasks')}>Related Tasks</button>
            <button className={`tab-btn ${activeTab === 'attachments' ? 'active' : ''}`} onClick={() => setActiveTab('attachments')}>Attachments</button>
            <button className={`tab-btn ${activeTab === 'comments' ? 'active' : ''}`} onClick={() => setActiveTab('comments')}>Comments</button>
            <button className={`tab-btn ${activeTab === 'system-info' ? 'active' : ''}`} onClick={() => setActiveTab('system-info')}>System Information</button>
          </div>

          <div className="tabs-content">
            {activeTab === 'details' && (
              <div>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>NOTES</label>
                    <textarea className="form-control" rows="5" value={formData.notes} onChange={(e) => handleInputChange('notes', e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tasks' && (
              <div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>TASK ID</th>
                      <th>TASK NAME</th>
                      <th>ASSIGNED TO</th>
                      <th>STATUS</th>
                      <th>COMPLETION %</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                        No related tasks to show.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'attachments' && (
              <div>
                <div style={{ marginBottom: '1rem' }}>
                  <button className="btn btn-secondary">
                    <i className="fas fa-upload"></i> Upload File
                  </button>
                </div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>FILE NAME</th>
                      <th>FILE TYPE</th>
                      <th>SIZE</th>
                      <th>UPLOADED BY</th>
                      <th>UPLOADED DATE</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                        No attachments to show.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'comments' && (
              <div>
                <div style={{ marginBottom: '1rem' }}>
                  <textarea className="form-control" rows="3" placeholder="Add a comment..."></textarea>
                  <button className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                    <i className="fas fa-comment"></i> Add Comment
                  </button>
                </div>
                <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                  No comments yet.
                </div>
              </div>
            )}

            {activeTab === 'system-info' && (
              <div>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>DATE CREATED</label>
                    <input type="text" className="form-control" value={new Date().toLocaleString()} readOnly />
                  </div>
                  <div className="detail-field">
                    <label>CREATED BY</label>
                    <input type="text" className="form-control" value="TOM-Tech" readOnly />
                  </div>
                  <div className="detail-field">
                    <label>LAST MODIFIED</label>
                    <input type="text" className="form-control" value={new Date().toLocaleString()} readOnly />
                  </div>
                  <div className="detail-field">
                    <label>MODIFIED BY</label>
                    <input type="text" className="form-control" value="TOM-Tech" readOnly />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="detail-footer-actions">
          <button className="btn-toolbar-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn-toolbar" onClick={handleCancel}>
            <i className="fas fa-times"></i>
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

export default CreateMilestone;
