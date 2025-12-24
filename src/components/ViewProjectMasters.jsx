import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewProjectMasters = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [searchTerm, setSearchTerm] = useState('');

  const [projects] = useState([
    {
      id: 1,
      projectId: 'PRJ001',
      projectName: 'MEP Installation Project',
      clientName: 'ABC Construction Pte Ltd',
      poNo: 'PO-2024-001',
      mainCon: 'Main Contractor A',
      status: 'Active',
      createdDate: '2024-01-15',
      completionPercentage: 75,
      completedTasks: 15,
      delayedTasks: 2,
      totalTasks: 20,
      health: 'Good',
      upcomingTask: { name: 'Final Inspection', dueDate: '2024-12-28' }
    },
    {
      id: 2,
      projectId: 'PRJ002',
      projectName: 'Offshore Platform Module',
      clientName: 'Marine Engineering Ltd',
      poNo: 'PO-2024-002',
      mainCon: 'Main Contractor B',
      status: 'Active',
      createdDate: '2024-01-20',
      completionPercentage: 45,
      completedTasks: 13,
      delayedTasks: 5,
      totalTasks: 30,
      health: 'At Risk',
      upcomingTask: { name: 'Welding Quality Check', dueDate: '2024-12-26' }
    },
    {
      id: 3,
      projectId: 'PRJ003',
      projectName: 'Shipyard Fabrication',
      clientName: 'Shipbuilding Corp',
      poNo: 'PO-2024-003',
      mainCon: 'Main Contractor C',
      status: 'Completed',
      createdDate: '2024-02-01',
      completionPercentage: 100,
      completedTasks: 25,
      delayedTasks: 0,
      totalTasks: 25,
      health: 'Excellent',
      upcomingTask: null
    },
    {
      id: 4,
      projectId: 'PRJ004',
      projectName: 'Industrial Piping System',
      clientName: 'Industrial Solutions Pte Ltd',
      poNo: 'PO-2024-004',
      mainCon: 'Main Contractor D',
      status: 'Active',
      createdDate: '2024-02-10',
      completionPercentage: 60,
      completedTasks: 11,
      delayedTasks: 1,
      totalTasks: 18,
      health: 'Good',
      upcomingTask: { name: 'Pressure Testing', dueDate: '2024-12-29' }
    },
    {
      id: 5,
      projectId: 'PRJ005',
      projectName: 'Refinery Maintenance',
      clientName: 'Oil & Gas Company',
      poNo: 'PO-2024-005',
      mainCon: 'Main Contractor E',
      status: 'In Progress',
      createdDate: '2024-02-15',
      completionPercentage: 30,
      completedTasks: 12,
      delayedTasks: 8,
      totalTasks: 40,
      health: 'Critical',
      upcomingTask: { name: 'Safety Audit', dueDate: '2024-12-25' }
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewProject = (project) => {
    if (onViewClick) {
      onViewClick(project);
    }
  };

  const handleEditProject = (project) => {
    if (onEditClick) {
      onEditClick(project);
    }
  };

  const handleNewProject = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  const filteredProjects = projects.filter(project =>
    project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.projectId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.clientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getHealthColor = (health) => {
    switch (health) {
      case 'Excellent': return '#10b981';
      case 'Good': return '#3b82f6';
      case 'At Risk': return '#f59e0b';
      case 'Critical': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const activeProjects = projects.filter(p => p.status === 'Active' || p.status === 'In Progress');
  const totalCompleted = projects.reduce((sum, p) => sum + p.completedTasks, 0);
  const totalDelayed = projects.reduce((sum, p) => sum + p.delayedTasks, 0);
  const totalTasks = projects.reduce((sum, p) => sum + p.totalTasks, 0);
  const avgCompletion = totalTasks > 0 ? Math.round((totalCompleted / totalTasks) * 100) : 0;

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-project-diagram"></i>
          <h1>Project Masters</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      {/* Dashboard Metrics - Card Layout with Circular Icons */}
      <div style={{ padding: '1.5rem', background: '#f8f9fa' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {/* Active Projects */}
          <div style={{ 
            background: '#fff',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ fontSize: '11px', color: '#9ca3af', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0.5rem' }}>ACTIVE PROJECTS</div>
              <div style={{ fontSize: '32px', fontWeight: '800', color: '#111827', marginBottom: '0.25rem' }}>{activeProjects.length}</div>
              <div style={{ fontSize: '12px', color: '#10b981', fontWeight: '600' }}>
                <i className="fas fa-arrow-up" style={{ fontSize: '10px' }}></i> {projects.length} Total Projects
              </div>
            </div>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '50%',
              background: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <i className="fas fa-project-diagram" style={{ fontSize: '20px', color: '#fff' }}></i>
            </div>
          </div>

          {/* Overall Completion */}
          <div style={{ 
            background: '#fff',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ fontSize: '11px', color: '#9ca3af', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0.5rem' }}>OVERALL COMPLETION</div>
              <div style={{ fontSize: '32px', fontWeight: '800', color: '#111827', marginBottom: '0.25rem' }}>{avgCompletion}%</div>
              <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: '600' }}>
                {totalCompleted} of {totalTasks} tasks completed
              </div>
            </div>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '50%',
              background: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <i className="fas fa-chart-pie" style={{ fontSize: '20px', color: '#fff' }}></i>
            </div>
          </div>

          {/* Completed Tasks */}
          <div style={{ 
            background: '#fff',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ fontSize: '11px', color: '#9ca3af', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0.5rem' }}>COMPLETED TASKS</div>
              <div style={{ fontSize: '32px', fontWeight: '800', color: '#111827', marginBottom: '0.25rem' }}>{totalCompleted}</div>
              <div style={{ fontSize: '12px', color: '#10b981', fontWeight: '600' }}>
                <i className="fas fa-check" style={{ fontSize: '10px' }}></i> On Track
              </div>
            </div>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '50%',
              background: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <i className="fas fa-check-circle" style={{ fontSize: '20px', color: '#fff' }}></i>
            </div>
          </div>

          {/* Delayed Tasks */}
          <div style={{ 
            background: '#fff',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ fontSize: '11px', color: '#9ca3af', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0.5rem' }}>DELAYED TASKS</div>
              <div style={{ fontSize: '32px', fontWeight: '800', color: '#111827', marginBottom: '0.25rem' }}>{totalDelayed}</div>
              <div style={{ fontSize: '12px', color: '#ef4444', fontWeight: '600' }}>
                <i className="fas fa-exclamation-circle" style={{ fontSize: '10px' }}></i> Needs Attention
              </div>
            </div>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '50%',
              background: '#ef4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <i className="fas fa-exclamation-triangle" style={{ fontSize: '20px', color: '#fff' }}></i>
            </div>
          </div>
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
            placeholder="Search projects..."
          />
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewProject}>
            <i className="fas fa-plus"></i>
            New Project Master
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
              <option>All Projects</option>
              <option>Active Projects</option>
              <option>Completed Projects</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {filteredProjects.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '8%' }}>EDIT | VIEW</th>
              <th style={{ width: '10%' }}>PROJECT ID</th>
              <th style={{ width: '18%' }}>PROJECT NAME</th>
              <th style={{ width: '12%' }}>CLIENT</th>
              <th style={{ width: '8%' }}>HEALTH</th>
              <th style={{ width: '10%' }}>COMPLETION</th>
              <th style={{ width: '12%' }}>TASK STATUS</th>
              <th style={{ width: '18%' }}>UPCOMING TASK</th>
              <th style={{ width: '8%' }}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project) => (
              <tr key={project.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditProject(project)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleViewProject(project)}
                  >
                    View
                  </button>
                </td>
                <td className="doc-number">{project.projectId}</td>
                <td>{project.projectName}</td>
                <td style={{ fontSize: '12px', color: '#666' }}>{project.clientName}</td>
                <td>
                  <span style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '10px',
                    background: `${getHealthColor(project.health)}15`,
                    color: getHealthColor(project.health),
                    fontSize: '11px',
                    fontWeight: '600'
                  }}>
                    <i className="fas fa-circle" style={{ fontSize: '6px' }}></i>
                    {project.health}
                  </span>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ 
                      flex: 1, 
                      height: '6px', 
                      background: '#e0e0e0', 
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <div style={{ 
                        width: `${project.completionPercentage}%`, 
                        height: '100%', 
                        background: project.completionPercentage >= 75 ? '#10b981' : project.completionPercentage >= 50 ? '#3b82f6' : '#f59e0b'
                      }}></div>
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: '600', minWidth: '35px' }}>
                      {project.completionPercentage}%
                    </span>
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '0.5rem', fontSize: '11px' }}>
                    <span style={{ color: '#10b981', fontWeight: '600' }}>
                      <i className="fas fa-check"></i> {project.completedTasks}
                    </span>
                    {project.delayedTasks > 0 && (
                      <span style={{ color: '#ef4444', fontWeight: '600' }}>
                        <i className="fas fa-exclamation-triangle"></i> {project.delayedTasks}
                      </span>
                    )}
                  </div>
                </td>
                <td style={{ fontSize: '11px' }}>
                  {project.upcomingTask ? (
                    <div>
                      <div style={{ fontWeight: '600', color: '#333', marginBottom: '2px' }}>{project.upcomingTask.name}</div>
                      <div style={{ color: '#666' }}>
                        <i className="fas fa-calendar"></i> {new Date(project.upcomingTask.dueDate).toLocaleDateString('en-GB')}
                      </div>
                    </div>
                  ) : (
                    <span style={{ color: '#999' }}>No upcoming tasks</span>
                  )}
                </td>
                <td>
                  <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
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

export default ViewProjectMasters;
