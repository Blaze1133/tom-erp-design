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
      assignedTo: ['John Tan', 'Michael Lee', 'Sarah Chen'],
      priority: 'High',
      status: 'In Progress',
      dueDate: '2024-12-15',
      completionPercentage: 65,
      isParent: true,
      subTasks: [
        {
          id: 11,
          taskId: 'TSK001-1',
          taskName: 'Electrical Wiring Installation',
          project: 'PRJ001 - MEP Installation Project',
          assignedTo: ['Alex Tan', 'Kevin Wong'],
          priority: 'High',
          status: 'Completed',
          dueDate: '2024-12-08',
          completionPercentage: 100,
          parentTaskId: 'TSK001'
        },
        {
          id: 12,
          taskId: 'TSK001-2',
          taskName: 'Plumbing System Setup',
          project: 'PRJ001 - MEP Installation Project',
          assignedTo: ['Rachel Ng'],
          priority: 'High',
          status: 'In Progress',
          dueDate: '2024-12-12',
          completionPercentage: 70,
          parentTaskId: 'TSK001'
        },
        {
          id: 13,
          taskId: 'TSK001-3',
          taskName: 'HVAC Installation',
          project: 'PRJ001 - MEP Installation Project',
          assignedTo: ['Kevin Lim', 'David Tan'],
          priority: 'Medium',
          status: 'In Progress',
          dueDate: '2024-12-15',
          completionPercentage: 40,
          parentTaskId: 'TSK001'
        }
      ]
    },
    {
      id: 2,
      taskId: 'TSK002',
      taskName: 'Offshore Platform Welding',
      project: 'PRJ002 - Offshore Platform Module',
      assignedTo: ['Sarah Lim', 'James Wong'],
      priority: 'Critical',
      status: 'In Progress',
      dueDate: '2024-12-10',
      completionPercentage: 80,
      isParent: true,
      subTasks: [
        {
          id: 21,
          taskId: 'TSK002-1',
          taskName: 'Structural Welding - Section A',
          project: 'PRJ002 - Offshore Platform Module',
          assignedTo: ['James Wong', 'Peter Tan', 'Ali Rahman'],
          priority: 'Critical',
          status: 'Completed',
          dueDate: '2024-12-05',
          completionPercentage: 100,
          parentTaskId: 'TSK002'
        },
        {
          id: 22,
          taskId: 'TSK002-2',
          taskName: 'Structural Welding - Section B',
          project: 'PRJ002 - Offshore Platform Module',
          assignedTo: ['Peter Tan', 'Kumar Singh'],
          priority: 'Critical',
          status: 'In Progress',
          dueDate: '2024-12-10',
          completionPercentage: 60,
          parentTaskId: 'TSK002'
        }
      ]
    },
    {
      id: 3,
      taskId: 'TSK003',
      taskName: 'Shipyard Fabrication - Hull Section',
      project: 'PRJ003 - Shipyard Fabrication',
      assignedTo: ['Michael Wong'],
      priority: 'Medium',
      status: 'Completed',
      dueDate: '2024-11-30',
      completionPercentage: 100,
      isParent: false,
      subTasks: []
    },
    {
      id: 4,
      taskId: 'TSK004',
      taskName: 'Piping System Installation',
      project: 'PRJ004 - Industrial Piping System',
      assignedTo: ['David Chen', 'Rachel Ng', 'Alex Tan'],
      priority: 'High',
      status: 'In Progress',
      dueDate: '2024-12-20',
      completionPercentage: 45,
      isParent: false,
      subTasks: []
    },
    {
      id: 5,
      taskId: 'TSK005',
      taskName: 'Refinery Maintenance - Inspection',
      project: 'PRJ005 - Refinery Maintenance',
      assignedTo: ['Emily Ng', 'John Tan'],
      priority: 'Medium',
      status: 'Not Started',
      dueDate: '2024-12-25',
      completionPercentage: 0,
      isParent: false,
      subTasks: []
    }
  ]);

  const [expandedTasks, setExpandedTasks] = useState({});

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

  const toggleTaskExpansion = (taskId) => {
    setExpandedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const filteredTasks = tasks.filter(task =>
    task.taskName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.taskId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.assignedTo.some(name => name.toLowerCase().includes(searchTerm.toLowerCase()))
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
              <th style={{ width: '50px' }}>EXPAND</th>
              <th style={{ width: '10%' }}>EDIT | VIEW</th>
              <th style={{ width: '10%' }}>TASK ID</th>
              <th style={{ width: '18%' }}>TASK NAME</th>
              <th style={{ width: '16%' }}>PROJECT</th>
              <th style={{ width: '12%' }}>ASSIGNED TO</th>
              <th style={{ width: '8%' }}>PRIORITY</th>
              <th style={{ width: '10%' }}>STATUS</th>
              <th style={{ width: '8%' }}>DUE DATE</th>
              <th style={{ width: '8%' }}>COMPLETION %</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <React.Fragment key={task.id}>
                <tr>
                  <td style={{ textAlign: 'center' }}>
                    {task.isParent && task.subTasks.length > 0 ? (
                      <button 
                        onClick={() => toggleTaskExpansion(task.taskId)}
                        style={{ 
                          background: 'none', 
                          border: 'none', 
                          cursor: 'pointer',
                          fontSize: '1rem',
                          color: '#4a90e2'
                        }}
                      >
                        <i className={`fas fa-chevron-${expandedTasks[task.taskId] ? 'down' : 'right'}`}></i>
                      </button>
                    ) : (
                      <span style={{ color: '#ccc' }}>—</span>
                    )}
                  </td>
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
                  <td style={{ fontWeight: task.isParent ? '600' : 'normal' }}>
                    {task.taskName}
                    {task.isParent && task.subTasks.length > 0 && (
                      <span style={{ 
                        marginLeft: '0.5rem', 
                        fontSize: '0.75rem', 
                        color: '#6b7280',
                        background: '#f3f4f6',
                        padding: '0.125rem 0.5rem',
                        borderRadius: '3px'
                      }}>
                        {task.subTasks.length} subtasks
                      </span>
                    )}
                  </td>
                  <td>{task.project}</td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      {task.assignedTo.map((employee, idx) => (
                        <span key={idx} style={{ 
                          fontSize: '0.875rem',
                          color: '#374151'
                        }}>
                          {employee}
                        </span>
                      ))}
                    </div>
                  </td>
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

                {/* Expanded Subtasks Row */}
                {expandedTasks[task.taskId] && task.subTasks.length > 0 && (
                  <tr style={{ background: '#f9fafb' }}>
                    <td colSpan="10" style={{ padding: '1.5rem 2rem' }}>
                      <div style={{ marginBottom: '0.75rem', fontSize: '0.875rem', fontWeight: '600', color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Subtasks for {task.taskId}
                      </div>
                      <table style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
                        <thead style={{ background: '#f3f4f6' }}>
                          <tr>
                            <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#6b7280', borderBottom: '1px solid #e5e7eb' }}>TASK ID</th>
                            <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#6b7280', borderBottom: '1px solid #e5e7eb' }}>TASK NAME</th>
                            <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#6b7280', borderBottom: '1px solid #e5e7eb' }}>ASSIGNED TO</th>
                            <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#6b7280', borderBottom: '1px solid #e5e7eb' }}>PRIORITY</th>
                            <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#6b7280', borderBottom: '1px solid #e5e7eb' }}>STATUS</th>
                            <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#6b7280', borderBottom: '1px solid #e5e7eb' }}>DUE DATE</th>
                            <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#6b7280', borderBottom: '1px solid #e5e7eb' }}>COMPLETION</th>
                          </tr>
                        </thead>
                        <tbody>
                          {task.subTasks.map((subtask, idx) => (
                            <tr key={subtask.id} style={{ background: 'white', borderBottom: idx < task.subTasks.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                              <td style={{ padding: '0.75rem', fontSize: '0.8125rem', color: '#4b5563' }}>
                                <span style={{ fontFamily: 'monospace', color: '#6b7280' }}>{subtask.taskId}</span>
                              </td>
                              <td style={{ padding: '0.75rem', fontSize: '0.8125rem', color: '#1f2937' }}>{subtask.taskName}</td>
                              <td style={{ padding: '0.75rem', fontSize: '0.8125rem', color: '#4b5563' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                  {subtask.assignedTo.map((employee, empIdx) => (
                                    <span key={empIdx}>{employee}</span>
                                  ))}
                                </div>
                              </td>
                              <td style={{ padding: '0.75rem', fontSize: '0.8125rem' }}>
                                <span style={{ 
                                  color: getPriorityColor(subtask.priority),
                                  fontWeight: '600'
                                }}>
                                  {subtask.priority}
                                </span>
                              </td>
                              <td style={{ padding: '0.75rem', fontSize: '0.8125rem' }}>
                                <span className={`status-badge ${subtask.status.toLowerCase().replace(' ', '-')}`} style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}>
                                  {subtask.status}
                                </span>
                              </td>
                              <td style={{ padding: '0.75rem', fontSize: '0.8125rem', color: '#4b5563' }}>{subtask.dueDate}</td>
                              <td style={{ padding: '0.75rem', fontSize: '0.8125rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                  <div style={{ 
                                    flex: 1, 
                                    height: '6px', 
                                    backgroundColor: '#e5e7eb', 
                                    borderRadius: '3px',
                                    overflow: 'hidden'
                                  }}>
                                    <div style={{ 
                                      height: '100%', 
                                      width: `${subtask.completionPercentage}%`, 
                                      backgroundColor: subtask.completionPercentage === 100 ? '#10b981' : '#3b82f6',
                                      transition: 'width 0.3s'
                                    }}></div>
                                  </div>
                                  <span style={{ fontSize: '0.75rem', minWidth: '35px', color: '#6b7280' }}>{subtask.completionPercentage}%</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
              </React.Fragment>
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
