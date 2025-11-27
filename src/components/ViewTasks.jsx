import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewTasks = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [searchTerm, setSearchTerm] = useState('');

  const [tasks] = useState([
    {
      id: 1,
      taskId: 'TSK001',
      taskName: 'MEP Installation - Phase 1',
      project: 'PRJ001 - MEP Installation Project',
      assignedTo: 'John Tan',
      priority: 'High',
      status: 'In Progress',
      dueDate: '2024-12-15',
      completionPercentage: 65
    },
    {
      id: 2,
      taskId: 'TSK002',
      taskName: 'Offshore Platform Welding',
      project: 'PRJ002 - Offshore Platform Module',
      assignedTo: 'Sarah Lim',
      priority: 'Critical',
      status: 'In Progress',
      dueDate: '2024-12-10',
      completionPercentage: 80
    },
    {
      id: 3,
      taskId: 'TSK003',
      taskName: 'Shipyard Fabrication - Hull Section',
      project: 'PRJ003 - Shipyard Fabrication',
      assignedTo: 'Michael Wong',
      priority: 'Medium',
      status: 'Completed',
      dueDate: '2024-11-30',
      completionPercentage: 100
    },
    {
      id: 4,
      taskId: 'TSK004',
      taskName: 'Piping System Installation',
      project: 'PRJ004 - Industrial Piping System',
      assignedTo: 'David Chen',
      priority: 'High',
      status: 'In Progress',
      dueDate: '2024-12-20',
      completionPercentage: 45
    },
    {
      id: 5,
      taskId: 'TSK005',
      taskName: 'Refinery Maintenance - Inspection',
      project: 'PRJ005 - Refinery Maintenance',
      assignedTo: 'Emily Ng',
      priority: 'Medium',
      status: 'Not Started',
      dueDate: '2024-12-25',
      completionPercentage: 0
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewTask = (task) => {
    if (onViewClick) {
      onViewClick(task);
    }
  };

  const handleEditTask = (task) => {
    if (onEditClick) {
      onEditClick(task);
    }
  };

  const handleNewTask = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  const filteredTasks = tasks.filter(task =>
    task.taskName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.taskId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.assignedTo.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-tasks"></i>
          <h1>Tasks</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>SEARCH</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
            style={{ width: '250px' }}
            placeholder="Search tasks..."
          />
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewTask}>
            <i className="fas fa-plus"></i>
            New Task
          </button>
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button className="btn-icon" title="Edit View">
            <i className="fas fa-edit"></i>
            <span>EDIT</span>
          </button>
          <button className="btn-icon" title="Delete">
            <i className="fas fa-times"></i>
          </button>
          <button className="btn-icon" title="Export">
            <i className="fas fa-file-export"></i>
          </button>
          <button className="btn-icon" title="Print">
            <i className="fas fa-print"></i>
          </button>
        </div>
        <div className="filter-right-group">
          <div className="quick-sort">
            <label>QUICK SORT</label>
            <select className="form-control">
              <option>All Tasks</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Not Started</option>
              <option>High Priority</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {filteredTasks.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '10%' }}>EDIT | VIEW</th>
              <th style={{ width: '10%' }}>TASK ID</th>
              <th style={{ width: '20%' }}>TASK NAME</th>
              <th style={{ width: '18%' }}>PROJECT</th>
              <th style={{ width: '12%' }}>ASSIGNED TO</th>
              <th style={{ width: '8%' }}>PRIORITY</th>
              <th style={{ width: '10%' }}>STATUS</th>
              <th style={{ width: '8%' }}>DUE DATE</th>
              <th style={{ width: '8%' }}>COMPLETION %</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <tr key={task.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditTask(task)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleViewTask(task)}
                  >
                    View
                  </button>
                </td>
                <td className="doc-number">{task.taskId}</td>
                <td>{task.taskName}</td>
                <td>{task.project}</td>
                <td>{task.assignedTo}</td>
                <td>
                  <span style={{ 
                    color: getPriorityColor(task.priority),
                    fontWeight: 'bold'
                  }}>
                    {task.priority}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${task.status.toLowerCase().replace(' ', '-')}`}>
                    {task.status}
                  </span>
                </td>
                <td>{task.dueDate}</td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ 
                      flex: 1, 
                      height: '8px', 
                      backgroundColor: '#e0e0e0', 
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{ 
                        height: '100%', 
                        width: `${task.completionPercentage}%`, 
                        backgroundColor: task.completionPercentage === 100 ? '#28a745' : '#4a90e2',
                        transition: 'width 0.3s'
                      }}></div>
                    </div>
                    <span style={{ fontSize: '0.85rem', minWidth: '35px' }}>{task.completionPercentage}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default ViewTasks;
