import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewProjects = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('All Projects');

  const [projects] = useState([
    {
      id: 1,
      jobId: 'PRO-00003',
      name: 'TOM Project',
      customer: '13 Test Arjun',
      status: 'Closed',
      startDate: '4/10/2021',
      projectLocation: '',
      vesselName: '',
      scopeOfWork: '',
      projClass: '',
      customerProjectNo: '',
      subsidiary: 'Tech Electric & Automation Pte Ltd'
    },
    {
      id: 2,
      jobId: 'PRO-00004',
      name: 'Marine Equipment Installation',
      customer: 'Keppel Fels',
      status: 'In Progress',
      startDate: '15/8/2022',
      projectLocation: 'Singapore',
      vesselName: 'FPSO-001',
      scopeOfWork: 'Installation and Testing',
      projClass: 'Installation work',
      customerProjectNo: 'KEP-2022-001',
      subsidiary: 'TOM Offshore Marine Engineering Pte Ltd'
    },
    {
      id: 3,
      jobId: 'PRO-00005',
      name: 'Fabrication Project',
      customer: 'Seamax Offshore Services',
      status: 'Planning',
      startDate: '20/9/2022',
      projectLocation: 'Mega yard',
      vesselName: 'Platform-A',
      scopeOfWork: 'Structural Fabrication',
      projClass: 'Fabrication',
      customerProjectNo: 'SEA-FAB-001',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewProject = (project) => {
    if (setCurrentPage) {
      setCurrentPage('view-project-detail');
    }
  };

  const handleEditProject = (project) => {
    if (setCurrentPage) {
      setCurrentPage('edit-project');
    }
  };

  const handleNewProject = () => {
    if (setCurrentPage) {
      setCurrentPage('create-project');
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case 'closed':
        return 'status-badge status-closed';
      case 'in progress':
        return 'status-badge status-in-progress';
      case 'planning':
        return 'status-badge status-planning';
      default:
        return 'status-badge status-proposal';
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-project-diagram"></i>
          <h1>Projects</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option active">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>VIEW:</label>
          <select 
            className="form-control"
            value={viewFilter}
            onChange={(e) => setViewFilter(e.target.value)}
          >
            <option value="All Projects">All Projects</option>
            <option value="Active Projects">Active Projects</option>
            <option value="Closed Projects">Closed Projects</option>
            <option value="Planning">Planning</option>
          </select>
          <button className="btn-customize">Customize View</button>
          <button className="btn btn-primary" onClick={handleNewProject} style={{ marginLeft: '10px' }}>
            <i className="fas fa-plus"></i> New Project
          </button>
        </div>
      </div>

      <div className="list-filters">
        <button className="filter-btn">
          <i className="fas fa-filter"></i>
          FILTERS
        </button>
        <div className="list-toolbar">
          <button className="toolbar-btn" title="Export to Excel">
            <i className="fas fa-file-excel"></i>
          </button>
          <button className="toolbar-btn" title="Export to PDF">
            <i className="fas fa-file-pdf"></i>
          </button>
          <button className="toolbar-btn" title="Print">
            <i className="fas fa-print"></i>
          </button>
          <button className="toolbar-btn">EDIT</button>
        </div>
        <div className="list-sort">
          <label>QUICK SORT:</label>
          <select className="form-control">
            <option>Start Date</option>
            <option>Project Name</option>
            <option>Customer Name</option>
            <option>Status</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {projects.length}
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th></th>
              <th>EDIT | VIEW</th>
              <th>JOB ID</th>
              <th>NAME</th>
              <th>CUSTOMER</th>
              <th>STATUS</th>
              <th>START DATE ▲</th>
              <th>PROJECT LOCATION</th>
              <th>VESSEL NAME</th>
              <th>SCOPE OF WORK</th>
              <th>PROJ CLASS</th>
              <th>CUSTOMER PROJECT NO</th>
              <th>SUBSIDIARY</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditProject(project)}
                    style={{ marginRight: '4px' }}
                  >
                    Edit
                  </button>
                  <span style={{ color: '#999' }}>|</span>
                  <button 
                    className="view-link"
                    onClick={() => handleViewProject(project)}
                    style={{ marginLeft: '4px' }}
                  >
                    View
                  </button>
                </td>
                <td className="doc-number">{project.jobId}</td>
                <td>{project.name}</td>
                <td>{project.customer}</td>
                <td>
                  <span className={getStatusBadgeClass(project.status)}>{project.status}</span>
                </td>
                <td>{project.startDate}</td>
                <td>{project.projectLocation}</td>
                <td>{project.vesselName}</td>
                <td>{project.scopeOfWork}</td>
                <td>{project.projClass}</td>
                <td>{project.customerProjectNo}</td>
                <td>{project.subsidiary}</td>
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

export default ViewProjects;
