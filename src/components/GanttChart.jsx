import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const GanttChart = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [selectedProject, setSelectedProject] = useState('all');
  const [viewMode, setViewMode] = useState('month');

  const projects = [
    {
      id: 1,
      projectName: 'MEP Installation Project',
      projectId: 'PRJ001',
      tasks: [
        { id: 1, name: 'Site Survey & Planning', start: '2024-12-01', end: '2024-12-05', progress: 100, color: '#28a745' },
        { id: 2, name: 'MEP Installation - Phase 1', start: '2024-12-06', end: '2024-12-15', progress: 65, color: '#4a90e2' },
        { id: 3, name: 'Quality Inspection', start: '2024-12-16', end: '2024-12-20', progress: 0, color: '#6c757d' },
        { id: 4, name: 'Final Testing & Handover', start: '2024-12-21', end: '2024-12-25', progress: 0, color: '#6c757d' }
      ]
    },
    {
      id: 2,
      projectName: 'Offshore Platform Module',
      projectId: 'PRJ002',
      tasks: [
        { id: 5, name: 'Material Procurement', start: '2024-11-25', end: '2024-12-02', progress: 100, color: '#28a745' },
        { id: 6, name: 'Offshore Platform Welding', start: '2024-12-03', end: '2024-12-10', progress: 80, color: '#ffc107' },
        { id: 7, name: 'Module Assembly', start: '2024-12-11', end: '2024-12-18', progress: 30, color: '#4a90e2' },
        { id: 8, name: 'Final Delivery', start: '2024-12-19', end: '2024-12-22', progress: 0, color: '#6c757d' }
      ]
    },
    {
      id: 3,
      projectName: 'Shipyard Fabrication',
      projectId: 'PRJ003',
      tasks: [
        { id: 9, name: 'Design Review', start: '2024-11-20', end: '2024-11-25', progress: 100, color: '#28a745' },
        { id: 10, name: 'Hull Section Fabrication', start: '2024-11-26', end: '2024-11-30', progress: 100, color: '#28a745' },
        { id: 11, name: 'Surface Treatment', start: '2024-12-01', end: '2024-12-05', progress: 100, color: '#28a745' },
        { id: 12, name: 'Final Inspection', start: '2024-12-06', end: '2024-12-08', progress: 100, color: '#28a745' }
      ]
    }
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const getDaysInMonth = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return days;
  };

  const calculateTaskPosition = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const startDay = start.getDate();
    const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
    
    return {
      left: `${((startDay - 1) / 31) * 100}%`,
      width: `${(duration / 31) * 100}%`
    };
  };

  const filteredProjects = selectedProject === 'all' 
    ? projects 
    : projects.filter(p => p.projectId === selectedProject);

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-chart-gantt"></i>
          <div>
            <h1>Gantt Chart</h1>
            <div className="detail-subtitle">
              <span>Project Timeline Visualization</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">Export</button>
          <button className="btn-action">Print</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div>
            <label style={{ marginRight: '0.5rem', fontWeight: 'bold' }}>PROJECT:</label>
            <select 
              className="form-control" 
              style={{ width: '250px', display: 'inline-block' }}
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
            >
              <option value="all">All Projects</option>
              {projects.map(p => (
                <option key={p.projectId} value={p.projectId}>{p.projectId} - {p.projectName}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={{ marginRight: '0.5rem', fontWeight: 'bold' }}>VIEW:</label>
            <select 
              className="form-control" 
              style={{ width: '150px', display: 'inline-block' }}
              value={viewMode}
              onChange={(e) => setViewMode(e.target.value)}
            >
              <option value="day">Day</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="quarter">Quarter</option>
            </select>
          </div>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <button className="btn-toolbar">
            <i className="fas fa-expand"></i>
            Fullscreen
          </button>
        </div>
      </div>

      <div className="detail-content">
        <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0, color: '#333' }}>
              <i className="fas fa-calendar-alt" style={{ marginRight: '0.5rem', color: '#4a90e2' }}></i>
              December 2024
            </h3>
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '20px', height: '12px', backgroundColor: '#28a745', borderRadius: '2px' }}></div>
                <span>Completed</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '20px', height: '12px', backgroundColor: '#4a90e2', borderRadius: '2px' }}></div>
                <span>In Progress</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '20px', height: '12px', backgroundColor: '#ffc107', borderRadius: '2px' }}></div>
                <span>At Risk</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '20px', height: '12px', backgroundColor: '#6c757d', borderRadius: '2px' }}></div>
                <span>Not Started</span>
              </div>
            </div>
          </div>

          {/* Gantt Chart Container */}
          <div style={{ overflowX: 'auto' }}>
            <div style={{ minWidth: '1200px' }}>
              {/* Timeline Header */}
              <div style={{ display: 'flex', borderBottom: '2px solid #dee2e6', marginBottom: '1rem' }}>
                <div style={{ width: '300px', padding: '0.75rem', fontWeight: 'bold', backgroundColor: '#f8f9fa', borderRight: '1px solid #dee2e6' }}>
                  TASK NAME
                </div>
                <div style={{ flex: 1, display: 'flex', backgroundColor: '#f8f9fa' }}>
                  {getDaysInMonth().map(day => (
                    <div 
                      key={day} 
                      style={{ 
                        flex: 1, 
                        padding: '0.75rem 0.25rem', 
                        textAlign: 'center', 
                        fontSize: '0.85rem',
                        fontWeight: 'bold',
                        borderRight: '1px solid #dee2e6',
                        color: day === new Date().getDate() ? '#4a90e2' : '#333'
                      }}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects and Tasks */}
              {filteredProjects.map(project => (
                <div key={project.id} style={{ marginBottom: '2rem' }}>
                  <div style={{ 
                    padding: '0.75rem', 
                    backgroundColor: '#e3f2fd', 
                    fontWeight: 'bold',
                    borderRadius: '4px',
                    marginBottom: '0.5rem',
                    color: '#1976d2'
                  }}>
                    <i className="fas fa-project-diagram" style={{ marginRight: '0.5rem' }}></i>
                    {project.projectId} - {project.projectName}
                  </div>

                  {project.tasks.map(task => {
                    const position = calculateTaskPosition(task.start, task.end);
                    return (
                      <div key={task.id} style={{ display: 'flex', marginBottom: '0.5rem', alignItems: 'center' }}>
                        <div style={{ 
                          width: '300px', 
                          padding: '0.5rem', 
                          fontSize: '0.9rem',
                          borderRight: '1px solid #dee2e6',
                          backgroundColor: '#fff'
                        }}>
                          {task.name}
                        </div>
                        <div style={{ flex: 1, position: 'relative', height: '40px', backgroundColor: '#f8f9fa' }}>
                          {/* Day dividers */}
                          {getDaysInMonth().map(day => (
                            <div 
                              key={day} 
                              style={{ 
                                position: 'absolute',
                                left: `${((day - 1) / 31) * 100}%`,
                                width: '1px',
                                height: '100%',
                                backgroundColor: '#dee2e6'
                              }}
                            />
                          ))}
                          
                          {/* Today indicator */}
                          <div 
                            style={{ 
                              position: 'absolute',
                              left: `${((new Date().getDate() - 1) / 31) * 100}%`,
                              width: '2px',
                              height: '100%',
                              backgroundColor: '#4a90e2',
                              zIndex: 10
                            }}
                          />

                          {/* Task bar */}
                          <div 
                            style={{ 
                              position: 'absolute',
                              top: '8px',
                              left: position.left,
                              width: position.width,
                              height: '24px',
                              backgroundColor: task.color,
                              borderRadius: '4px',
                              display: 'flex',
                              alignItems: 'center',
                              padding: '0 0.5rem',
                              color: '#fff',
                              fontSize: '0.75rem',
                              fontWeight: 'bold',
                              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                              zIndex: 5
                            }}
                          >
                            <div style={{ 
                              position: 'absolute',
                              left: 0,
                              top: 0,
                              height: '100%',
                              width: `${task.progress}%`,
                              backgroundColor: 'rgba(255,255,255,0.3)',
                              borderRadius: '4px',
                              transition: 'width 0.3s'
                            }}></div>
                            <span style={{ position: 'relative', zIndex: 1 }}>{task.progress}%</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Summary Statistics */}
          <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '1rem', color: '#333' }}>
              <i className="fas fa-chart-bar" style={{ marginRight: '0.5rem', color: '#4a90e2' }}></i>
              Summary Statistics
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4a90e2' }}>
                  {filteredProjects.length}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.25rem' }}>Active Projects</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#28a745' }}>
                  {filteredProjects.reduce((acc, p) => acc + p.tasks.filter(t => t.progress === 100).length, 0)}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.25rem' }}>Completed Tasks</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ffc107' }}>
                  {filteredProjects.reduce((acc, p) => acc + p.tasks.filter(t => t.progress > 0 && t.progress < 100).length, 0)}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.25rem' }}>In Progress</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#6c757d' }}>
                  {filteredProjects.reduce((acc, p) => acc + p.tasks.filter(t => t.progress === 0).length, 0)}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.25rem' }}>Not Started</div>
              </div>
            </div>
          </div>
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

export default GanttChart;
