import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const PlantModulesDashboard = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState('all');

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const projects = [
    { id: 'all', name: 'All Projects' },
    { id: 'sanyu', name: 'SANYU Project' },
    { id: 'chiller', name: 'Chiller Plant' },
    { id: 'cooling', name: 'Cooling Tower' }
  ];

  const plantModules = [
    {
      id: 1,
      moduleNo: 'SANYU-CHWP-01',
      project: 'SANYU Project',
      type: 'Chilled Water Pipe',
      materialIncoming: 'Completed',
      materialTraceability: 'Completed',
      fitUp: 'In Progress',
      visualInspection: 'Not Completed',
      dimensionalInspection: 'Not Completed',
      weldingTraceability: 'Not Completed',
      mepComponents: 'Not Completed',
      hydrostaticTest: 'Not Completed'
    },
    {
      id: 2,
      moduleNo: 'SANYU-CHWP-02',
      project: 'SANYU Project',
      type: 'Chilled Water Pipe',
      materialIncoming: 'Completed',
      materialTraceability: 'Completed',
      fitUp: 'Completed',
      visualInspection: 'Completed',
      dimensionalInspection: 'In Progress',
      weldingTraceability: 'Not Completed',
      mepComponents: 'Not Completed',
      hydrostaticTest: 'Not Completed'
    },
    {
      id: 3,
      moduleNo: 'CT-MODULE-01',
      project: 'Cooling Tower',
      type: 'Cooling Tower Module',
      materialIncoming: 'Completed',
      materialTraceability: 'Completed',
      fitUp: 'Completed',
      visualInspection: 'Completed',
      dimensionalInspection: 'Completed',
      weldingTraceability: 'Completed',
      mepComponents: 'Completed',
      hydrostaticTest: 'Completed'
    },
    {
      id: 4,
      moduleNo: 'CHILLER-01',
      project: 'Chiller Plant',
      type: 'Chiller Module',
      materialIncoming: 'Completed',
      materialTraceability: 'Completed',
      fitUp: 'Not Completed',
      visualInspection: 'Not Completed',
      dimensionalInspection: 'Not Completed',
      weldingTraceability: 'Not Completed',
      mepComponents: 'Not Completed',
      hydrostaticTest: 'Not Completed'
    },
    {
      id: 5,
      moduleNo: 'SANYU-CHWP-03',
      project: 'SANYU Project',
      type: 'Chilled Water Pipe',
      materialIncoming: 'Not Completed',
      materialTraceability: 'Not Completed',
      fitUp: 'Not Completed',
      visualInspection: 'Not Completed',
      dimensionalInspection: 'Not Completed',
      weldingTraceability: 'Not Completed',
      mepComponents: 'Not Completed',
      hydrostaticTest: 'Not Completed'
    }
  ];

  const moduleStats = [
    {
      id: 1,
      title: 'Material Incoming Completed',
      count: 4,
      total: 5,
      color: '#ff9800'
    },
    {
      id: 2,
      title: 'Material Traceability Completed',
      count: 4,
      total: 5,
      color: '#ff9800'
    },
    {
      id: 3,
      title: 'FIT-Up Completed',
      count: 2,
      total: 5,
      color: '#ff9800'
    },
    {
      id: 4,
      title: 'Visual Inspection Completed',
      count: 2,
      total: 5,
      color: '#ff9800'
    },
    {
      id: 5,
      title: 'Dimensional Inspection Completed',
      count: 1,
      total: 5,
      color: '#ff9800'
    },
    {
      id: 6,
      title: 'Welding Traceability Completed',
      count: 1,
      total: 5,
      color: '#ff9800'
    },
    {
      id: 7,
      title: 'MEP Components Completed',
      count: 1,
      total: 5,
      color: '#ff9800'
    },
    {
      id: 8,
      title: 'Hydrostatic Test Completed',
      count: 1,
      total: 5,
      color: '#ff9800'
    }
  ];

  const filteredModules = plantModules.filter(module => {
    const matchesProject = selectedProject === 'all' || module.project === projects.find(p => p.id === selectedProject)?.name;
    const matchesSearch = module.moduleNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         module.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         module.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesProject && matchesSearch;
  });

  const getProgressPercentage = (count, total) => {
    return total > 0 ? Math.round((count / total) * 100) : 0;
  };

  const CircularProgress = ({ count, total, color, size = 180 }) => {
    const percentage = getProgressPercentage(count, total);
    const radius = (size - 20) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div style={{ position: 'relative', width: size, height: size }}>        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#f0f0f0"
            strokeWidth="12"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 0.5s ease'
            }}
          />
        </svg>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#374151' }}>
            {count}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-industry"></i>
          <h1>PLANT MODULES DASHBOARD</h1>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary">
            <i className="fas fa-sync-alt"></i>
            Refresh
          </button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div>
            <label>PROJECT</label>
            <select 
              className="form-control"
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              style={{ width: '200px' }}
            >
              {projects.map(project => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>SEARCH</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
              style={{ width: '300px' }}
              placeholder="Search modules..."
            />
          </div>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={() => showToast('Export functionality coming soon!')}>
            <i className="fas fa-download"></i>
            Export Report
          </button>
        </div>
      </div>

      <div className="info-bar" style={{
        backgroundColor: '#f8f9fa',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        marginBottom: '2rem',
        border: '1px solid #e5e7eb'
      }}>
        <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#374151' }}>
          No. of Plant Modules : <span style={{ color: '#4a90e2' }}>{filteredModules.length}</span>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        {moduleStats.map((stat) => (
          <div
            key={stat.id}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb',
              display: 'flex',
              alignItems: 'center',
              gap: '2rem'
            }}
          >
            <div style={{ flex: '1' }}>
              <h3 style={{
                margin: 0,
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#374151',
                lineHeight: '1.5'
              }}>
                {stat.title}
              </h3>
            </div>
            <div style={{ flex: '0 0 auto' }}>
              <CircularProgress
                count={stat.count}
                total={stat.total}
                color={stat.color}
                size={180}
              />
            </div>
          </div>
        ))}
      </div>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        border: '1px solid #e5e7eb',
        marginBottom: '2rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem'
        }}>
          <h2 style={{
            margin: 0,
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#374151'
          }}>
            Status All Modules
          </h2>
          <button
            className="btn btn-danger"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem'
            }}
            onClick={() => showToast('View Details functionality coming soon!')}
          >
            <i className="fas fa-eye"></i>
            View Details
          </button>
        </div>

        <div className="enquiries-table-container" style={{ maxHeight: '500px', overflowY: 'auto' }}>
          <table className="enquiries-table">
            <thead>
              <tr>
                <th>Module No.</th>
                <th>Project</th>
                <th>Type</th>
                <th>Material Incoming</th>
                <th>Material Traceability</th>
                <th>FIT-Up</th>
                <th>Visual Inspection</th>
                <th>Dimensional Inspection</th>
                <th>Welding Traceability</th>
                <th>MEP Components</th>
                <th>Hydrostatic Test</th>
              </tr>
            </thead>
            <tbody>
              {filteredModules.map((module) => (
                <tr key={module.id}>
                  <td className="doc-number">{module.moduleNo}</td>
                  <td>{module.project}</td>
                  <td>{module.type}</td>
                  <td>
                    <span className="status-badge" style={{
                      backgroundColor: module.materialIncoming === 'Completed' ? '#d4edda' : '#ffcdd2',
                      color: module.materialIncoming === 'Completed' ? '#155724' : '#d32f2f',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {module.materialIncoming}
                    </span>
                  </td>
                  <td>
                    <span className="status-badge" style={{
                      backgroundColor: module.materialTraceability === 'Completed' ? '#d4edda' : module.materialTraceability === 'In Progress' ? '#fff3cd' : '#ffcdd2',
                      color: module.materialTraceability === 'Completed' ? '#155724' : module.materialTraceability === 'In Progress' ? '#856404' : '#d32f2f',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {module.materialTraceability}
                    </span>
                  </td>
                  <td>
                    <span className="status-badge" style={{
                      backgroundColor: module.fitUp === 'Completed' ? '#d4edda' : module.fitUp === 'In Progress' ? '#fff3cd' : '#ffcdd2',
                      color: module.fitUp === 'Completed' ? '#155724' : module.fitUp === 'In Progress' ? '#856404' : '#d32f2f',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {module.fitUp}
                    </span>
                  </td>
                  <td>
                    <span className="status-badge" style={{
                      backgroundColor: module.visualInspection === 'Completed' ? '#d4edda' : module.visualInspection === 'In Progress' ? '#fff3cd' : '#ffcdd2',
                      color: module.visualInspection === 'Completed' ? '#155724' : module.visualInspection === 'In Progress' ? '#856404' : '#d32f2f',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {module.visualInspection}
                    </span>
                  </td>
                  <td>
                    <span className="status-badge" style={{
                      backgroundColor: module.dimensionalInspection === 'Completed' ? '#d4edda' : module.dimensionalInspection === 'In Progress' ? '#fff3cd' : '#ffcdd2',
                      color: module.dimensionalInspection === 'Completed' ? '#155724' : module.dimensionalInspection === 'In Progress' ? '#856404' : '#d32f2f',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {module.dimensionalInspection}
                    </span>
                  </td>
                  <td>
                    <span className="status-badge" style={{
                      backgroundColor: module.weldingTraceability === 'Completed' ? '#d4edda' : module.weldingTraceability === 'In Progress' ? '#fff3cd' : '#ffcdd2',
                      color: module.weldingTraceability === 'Completed' ? '#155724' : module.weldingTraceability === 'In Progress' ? '#856404' : '#d32f2f',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {module.weldingTraceability}
                    </span>
                  </td>
                  <td>
                    <span className="status-badge" style={{
                      backgroundColor: module.mepComponents === 'Completed' ? '#d4edda' : module.mepComponents === 'In Progress' ? '#fff3cd' : '#ffcdd2',
                      color: module.mepComponents === 'Completed' ? '#155724' : module.mepComponents === 'In Progress' ? '#856404' : '#d32f2f',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {module.mepComponents}
                    </span>
                  </td>
                  <td>
                    <span className="status-badge" style={{
                      backgroundColor: module.hydrostaticTest === 'Completed' ? '#d4edda' : module.hydrostaticTest === 'In Progress' ? '#fff3cd' : '#ffcdd2',
                      color: module.hydrostaticTest === 'Completed' ? '#155724' : module.hydrostaticTest === 'In Progress' ? '#856404' : '#d32f2f',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {module.hydrostaticTest}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredModules.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '3rem',
            color: '#6c757d'
          }}>
            <i className="fas fa-inbox" style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.3 }}></i>
            <p style={{ fontSize: '1.125rem', fontWeight: '500', margin: 0 }}>No plant modules found</p>
          </div>
        )}
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

export default PlantModulesDashboard;
