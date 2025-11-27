import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewTaskDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('details');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [scheduleCollapsed, setScheduleCollapsed] = useState(false);
  const [assignmentCollapsed, setAssignmentCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);

  const taskData = {
    taskId: 'TSK001',
    taskName: 'MEP Installation - Phase 1',
    project: 'PRJ001 - MEP Installation Project',
    status: 'In Progress',
    priority: 'High',
    assignedTo: 'John Tan',
    startDate: '2024-12-01',
    dueDate: '2024-12-15',
    completionPercentage: 65,
    estimatedHours: '120',
    actualHours: '78',
    description: 'Complete MEP installation for Phase 1 including electrical, plumbing, and HVAC systems.',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    department: 'TOM: Engineering',
    taskClass: 'Installation work',
    notes: 'Coordinate with site supervisor for access to installation areas.'
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'Critical': return '#dc3545';
      case 'High': return '#fd7e14';
      case 'Medium': return '#ffc107';
      case 'Low': return '#28a745';
      default: return '#6c757d';
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-tasks"></i>
          <div>
            <h1>Task</h1>
            <div className="detail-subtitle">
              <span>{taskData.taskId}</span>
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
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-copy"></i>
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
                <label>TASK ID</label>
                <div className="field-value">{taskData.taskId}</div>
              </div>
              <div className="detail-field">
                <label>TASK NAME</label>
                <div className="field-value">{taskData.taskName}</div>
              </div>
              <div className="detail-field">
                <label>PROJECT</label>
                <div className="field-value">{taskData.project}</div>
              </div>
              <div className="detail-field">
                <label>STATUS</label>
                <div className="field-value">
                  <span className={`status-badge ${taskData.status.toLowerCase().replace(' ', '-')}`}>
                    {taskData.status}
                  </span>
                </div>
              </div>
              <div className="detail-field">
                <label>PRIORITY</label>
                <div className="field-value">
                  <span style={{ 
                    color: getPriorityColor(taskData.priority),
                    fontWeight: 'bold'
                  }}>
                    {taskData.priority}
                  </span>
                </div>
              </div>
              <div className="detail-field">
                <label>DESCRIPTION</label>
                <div className="field-value">{taskData.description}</div>
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
                <label>START DATE</label>
                <div className="field-value">{taskData.startDate}</div>
              </div>
              <div className="detail-field">
                <label>DUE DATE</label>
                <div className="field-value">{taskData.dueDate}</div>
              </div>
              <div className="detail-field">
                <label>COMPLETION PERCENTAGE</label>
                <div className="field-value">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ 
                      flex: 1, 
                      height: '12px', 
                      backgroundColor: '#e0e0e0', 
                      borderRadius: '6px',
                      overflow: 'hidden'
                    }}>
                      <div style={{ 
                        height: '100%', 
                        width: `${taskData.completionPercentage}%`, 
                        backgroundColor: taskData.completionPercentage === 100 ? '#28a745' : '#4a90e2',
                        transition: 'width 0.3s'
                      }}></div>
                    </div>
                    <span style={{ fontWeight: 'bold', minWidth: '40px' }}>{taskData.completionPercentage}%</span>
                  </div>
                </div>
              </div>
              <div className="detail-field">
                <label>ESTIMATED HOURS</label>
                <div className="field-value">{taskData.estimatedHours} hrs</div>
              </div>
              <div className="detail-field">
                <label>ACTUAL HOURS</label>
                <div className="field-value">{taskData.actualHours} hrs</div>
              </div>
              <div className="detail-field">
                <label>HOURS VARIANCE</label>
                <div className="field-value">
                  <span style={{ color: parseInt(taskData.actualHours) > parseInt(taskData.estimatedHours) ? '#dc3545' : '#28a745' }}>
                    {parseInt(taskData.actualHours) - parseInt(taskData.estimatedHours)} hrs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Assignment Section */}
        <div className={`detail-section ${assignmentCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setAssignmentCollapsed(!assignmentCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Assignment</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>ASSIGNED TO</label>
                <div className="field-value">{taskData.assignedTo}</div>
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
                <label>SUBSIDIARY</label>
                <div className="field-value">{taskData.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>DEPARTMENT</label>
                <div className="field-value">{taskData.department}</div>
              </div>
              <div className="detail-field">
                <label>TASK CLASS</label>
                <div className="field-value">{taskData.taskClass}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`} onClick={() => setActiveTab('details')}>Details</button>
            <button className={`tab-btn ${activeTab === 'attachments' ? 'active' : ''}`} onClick={() => setActiveTab('attachments')}>Attachments</button>
            <button className={`tab-btn ${activeTab === 'comments' ? 'active' : ''}`} onClick={() => setActiveTab('comments')}>Comments</button>
            <button className={`tab-btn ${activeTab === 'time-tracking' ? 'active' : ''}`} onClick={() => setActiveTab('time-tracking')}>Time Tracking</button>
            <button className={`tab-btn ${activeTab === 'system-info' ? 'active' : ''}`} onClick={() => setActiveTab('system-info')}>System Information</button>
          </div>

          <div className="tabs-content">
            {activeTab === 'details' && (
              <div>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>NOTES</label>
                    <div className="field-value">{taskData.notes}</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'attachments' && (
              <div>
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
                <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                  No comments yet.
                </div>
              </div>
            )}

            {activeTab === 'time-tracking' && (
              <div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>DATE</th>
                      <th>EMPLOYEE</th>
                      <th>HOURS</th>
                      <th>DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2024-12-01</td>
                      <td>John Tan</td>
                      <td>8</td>
                      <td>Initial site survey and planning</td>
                    </tr>
                    <tr>
                      <td>2024-12-02</td>
                      <td>John Tan</td>
                      <td>10</td>
                      <td>Electrical conduit installation</td>
                    </tr>
                    <tr>
                      <td>2024-12-03</td>
                      <td>John Tan</td>
                      <td>8</td>
                      <td>Plumbing rough-in work</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'system-info' && (
              <div>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>DATE CREATED</label>
                    <div className="field-value">01/12/2024 09:00 am</div>
                  </div>
                  <div className="detail-field">
                    <label>CREATED BY</label>
                    <div className="field-value">TOM-Tech</div>
                  </div>
                  <div className="detail-field">
                    <label>LAST MODIFIED</label>
                    <div className="field-value">{new Date().toLocaleString()}</div>
                  </div>
                  <div className="detail-field">
                    <label>MODIFIED BY</label>
                    <div className="field-value">TOM-Tech</div>
                  </div>
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

export default ViewTaskDetail;
