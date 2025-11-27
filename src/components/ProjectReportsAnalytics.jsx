import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ProjectReportsAnalytics = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [selectedReport, setSelectedReport] = useState('overview');
  const [dateRange, setDateRange] = useState('this-month');

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const projectStats = {
    totalProjects: 5,
    activeProjects: 3,
    completedProjects: 1,
    delayedProjects: 1,
    totalTasks: 24,
    completedTasks: 12,
    inProgressTasks: 8,
    notStartedTasks: 4,
    totalResources: 15,
    allocatedResources: 12,
    availableResources: 3,
    totalBudget: 2500000,
    spentBudget: 1650000,
    remainingBudget: 850000
  };

  const projectPerformance = [
    { project: 'PRJ001 - MEP Installation', completion: 65, budget: 95, schedule: 'On Track', status: 'In Progress' },
    { project: 'PRJ002 - Offshore Platform', completion: 80, budget: 88, schedule: 'At Risk', status: 'In Progress' },
    { project: 'PRJ003 - Shipyard Fabrication', completion: 100, budget: 98, schedule: 'Completed', status: 'Completed' },
    { project: 'PRJ004 - Industrial Piping', completion: 45, budget: 52, schedule: 'On Track', status: 'In Progress' },
    { project: 'PRJ005 - Refinery Maintenance', completion: 0, budget: 0, schedule: 'Delayed', status: 'Not Started' }
  ];

  const resourceUtilization = [
    { resource: 'John Tan', type: 'Employee', utilization: 85, hours: 160, project: 'PRJ001' },
    { resource: 'Sarah Lim', type: 'Employee', utilization: 95, hours: 180, project: 'PRJ002' },
    { resource: 'Michael Wong', type: 'Employee', utilization: 0, hours: 0, project: '-' },
    { resource: 'Hydraulic Crane - HC-01', type: 'Equipment', utilization: 60, hours: 120, project: 'PRJ003' },
    { resource: 'Welding Machine - WM-05', type: 'Equipment', utilization: 100, hours: 200, project: 'PRJ004' }
  ];

  const milestoneTracking = [
    { milestone: 'MEP Phase 1 Completion', project: 'PRJ001', target: '2024-12-15', status: 'In Progress', completion: 65 },
    { milestone: 'Offshore Platform Delivery', project: 'PRJ002', target: '2024-12-10', status: 'At Risk', completion: 80 },
    { milestone: 'Hull Section Complete', project: 'PRJ003', target: '2024-11-30', status: 'Completed', completion: 100 },
    { milestone: 'Piping Installation Phase 1', project: 'PRJ004', target: '2024-12-20', status: 'In Progress', completion: 45 },
    { milestone: 'Refinery Inspection', project: 'PRJ005', target: '2024-12-25', status: 'Not Started', completion: 0 }
  ];

  const handleExport = () => {
    showToast('Report exported successfully!', 'success');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-chart-line"></i>
          <div>
            <h1>Reports & Analytics</h1>
            <div className="detail-subtitle">
              <span>Project Management Insights</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={handleExport}>
            <i className="fas fa-file-export"></i>
            Export
          </button>
          <button className="btn-action" onClick={handlePrint}>
            <i className="fas fa-print"></i>
            Print
          </button>
        </div>
      </div>

      <div className="detail-toolbar">
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div>
            <label style={{ marginRight: '0.5rem', fontWeight: 'bold' }}>REPORT TYPE:</label>
            <select 
              className="form-control" 
              style={{ width: '250px', display: 'inline-block' }}
              value={selectedReport}
              onChange={(e) => setSelectedReport(e.target.value)}
            >
              <option value="overview">Project Overview</option>
              <option value="performance">Project Performance</option>
              <option value="resources">Resource Utilization</option>
              <option value="milestones">Milestone Tracking</option>
              <option value="budget">Budget Analysis</option>
            </select>
          </div>
          <div>
            <label style={{ marginRight: '0.5rem', fontWeight: 'bold' }}>DATE RANGE:</label>
            <select 
              className="form-control" 
              style={{ width: '150px', display: 'inline-block' }}
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="today">Today</option>
              <option value="this-week">This Week</option>
              <option value="this-month">This Month</option>
              <option value="this-quarter">This Quarter</option>
              <option value="this-year">This Year</option>
            </select>
          </div>
        </div>
      </div>

      <div className="detail-content">
        {/* KPI Dashboard */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem', color: '#333' }}>
            <i className="fas fa-tachometer-alt" style={{ marginRight: '0.5rem', color: '#4a90e2' }}></i>
            Key Performance Indicators
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: '#fff', 
              borderRadius: '8px', 
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #4a90e2'
            }}>
              <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>TOTAL PROJECTS</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#4a90e2' }}>{projectStats.totalProjects}</div>
              <div style={{ fontSize: '0.8rem', color: '#28a745', marginTop: '0.5rem' }}>
                <i className="fas fa-arrow-up"></i> {projectStats.activeProjects} Active
              </div>
            </div>
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: '#fff', 
              borderRadius: '8px', 
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #28a745'
            }}>
              <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>TASK COMPLETION</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#28a745' }}>
                {Math.round((projectStats.completedTasks / projectStats.totalTasks) * 100)}%
              </div>
              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>
                {projectStats.completedTasks} of {projectStats.totalTasks} tasks
              </div>
            </div>
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: '#fff', 
              borderRadius: '8px', 
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #ffc107'
            }}>
              <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>RESOURCE UTILIZATION</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ffc107' }}>
                {Math.round((projectStats.allocatedResources / projectStats.totalResources) * 100)}%
              </div>
              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>
                {projectStats.allocatedResources} of {projectStats.totalResources} allocated
              </div>
            </div>
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: '#fff', 
              borderRadius: '8px', 
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #dc3545'
            }}>
              <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>BUDGET UTILIZATION</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#dc3545' }}>
                {Math.round((projectStats.spentBudget / projectStats.totalBudget) * 100)}%
              </div>
              <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>
                SGD {(projectStats.spentBudget / 1000).toFixed(0)}K spent
              </div>
            </div>
          </div>
        </div>

        {/* Project Performance Table */}
        {selectedReport === 'overview' || selectedReport === 'performance' ? (
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>
              <i className="fas fa-project-diagram" style={{ marginRight: '0.5rem', color: '#4a90e2' }}></i>
              Project Performance
            </h3>
            <div style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              <table className="detail-items-table">
                <thead>
                  <tr>
                    <th>PROJECT</th>
                    <th>COMPLETION %</th>
                    <th>BUDGET USED %</th>
                    <th>SCHEDULE STATUS</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {projectPerformance.map((project, index) => (
                    <tr key={index}>
                      <td>{project.project}</td>
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
                              width: `${project.completion}%`, 
                              backgroundColor: project.completion === 100 ? '#28a745' : '#4a90e2',
                              transition: 'width 0.3s'
                            }}></div>
                          </div>
                          <span style={{ fontSize: '0.85rem', minWidth: '40px' }}>{project.completion}%</span>
                        </div>
                      </td>
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
                              width: `${project.budget}%`, 
                              backgroundColor: project.budget > 90 ? '#dc3545' : project.budget > 70 ? '#ffc107' : '#28a745',
                              transition: 'width 0.3s'
                            }}></div>
                          </div>
                          <span style={{ fontSize: '0.85rem', minWidth: '40px' }}>{project.budget}%</span>
                        </div>
                      </td>
                      <td>
                        <span style={{ 
                          padding: '0.25rem 0.5rem',
                          borderRadius: '4px',
                          fontSize: '0.85rem',
                          backgroundColor: 
                            project.schedule === 'On Track' ? '#d4edda' : 
                            project.schedule === 'At Risk' ? '#fff3cd' : 
                            project.schedule === 'Delayed' ? '#f8d7da' : '#d1ecf1',
                          color: 
                            project.schedule === 'On Track' ? '#155724' : 
                            project.schedule === 'At Risk' ? '#856404' : 
                            project.schedule === 'Delayed' ? '#721c24' : '#0c5460'
                        }}>
                          {project.schedule}
                        </span>
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
          </div>
        ) : null}

        {/* Resource Utilization Table */}
        {selectedReport === 'overview' || selectedReport === 'resources' ? (
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>
              <i className="fas fa-users-cog" style={{ marginRight: '0.5rem', color: '#4a90e2' }}></i>
              Resource Utilization
            </h3>
            <div style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              <table className="detail-items-table">
                <thead>
                  <tr>
                    <th>RESOURCE</th>
                    <th>TYPE</th>
                    <th>UTILIZATION %</th>
                    <th>HOURS</th>
                    <th>CURRENT PROJECT</th>
                  </tr>
                </thead>
                <tbody>
                  {resourceUtilization.map((resource, index) => (
                    <tr key={index}>
                      <td>{resource.resource}</td>
                      <td>
                        <span style={{ 
                          padding: '0.25rem 0.5rem',
                          borderRadius: '4px',
                          backgroundColor: resource.type === 'Employee' ? '#e3f2fd' : '#fff3e0',
                          color: resource.type === 'Employee' ? '#1976d2' : '#f57c00',
                          fontSize: '0.85rem'
                        }}>
                          {resource.type}
                        </span>
                      </td>
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
                              width: `${resource.utilization}%`, 
                              backgroundColor: resource.utilization > 90 ? '#dc3545' : resource.utilization > 70 ? '#ffc107' : '#28a745',
                              transition: 'width 0.3s'
                            }}></div>
                          </div>
                          <span style={{ fontSize: '0.85rem', minWidth: '40px' }}>{resource.utilization}%</span>
                        </div>
                      </td>
                      <td>{resource.hours} hrs</td>
                      <td>{resource.project}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}

        {/* Milestone Tracking Table */}
        {selectedReport === 'overview' || selectedReport === 'milestones' ? (
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>
              <i className="fas fa-flag-checkered" style={{ marginRight: '0.5rem', color: '#4a90e2' }}></i>
              Milestone Tracking
            </h3>
            <div style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              <table className="detail-items-table">
                <thead>
                  <tr>
                    <th>MILESTONE</th>
                    <th>PROJECT</th>
                    <th>TARGET DATE</th>
                    <th>STATUS</th>
                    <th>COMPLETION %</th>
                  </tr>
                </thead>
                <tbody>
                  {milestoneTracking.map((milestone, index) => (
                    <tr key={index}>
                      <td>{milestone.milestone}</td>
                      <td>{milestone.project}</td>
                      <td>{milestone.target}</td>
                      <td>
                        <span className={`status-badge ${milestone.status.toLowerCase().replace(' ', '-')}`}>
                          {milestone.status}
                        </span>
                      </td>
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
                              width: `${milestone.completion}%`, 
                              backgroundColor: milestone.completion === 100 ? '#28a745' : '#4a90e2',
                              transition: 'width 0.3s'
                            }}></div>
                          </div>
                          <span style={{ fontSize: '0.85rem', minWidth: '40px' }}>{milestone.completion}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
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

export default ProjectReportsAnalytics;
