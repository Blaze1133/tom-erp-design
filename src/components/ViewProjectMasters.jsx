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
      createdDate: '2024-01-15'
    },
    {
      id: 2,
      projectId: 'PRJ002',
      projectName: 'Offshore Platform Module',
      clientName: 'Marine Engineering Ltd',
      poNo: 'PO-2024-002',
      mainCon: 'Main Contractor B',
      status: 'Active',
      createdDate: '2024-01-20'
    },
    {
      id: 3,
      projectId: 'PRJ003',
      projectName: 'Shipyard Fabrication',
      clientName: 'Shipbuilding Corp',
      poNo: 'PO-2024-003',
      mainCon: 'Main Contractor C',
      status: 'Completed',
      createdDate: '2024-02-01'
    },
    {
      id: 4,
      projectId: 'PRJ004',
      projectName: 'Industrial Piping System',
      clientName: 'Industrial Solutions Pte Ltd',
      poNo: 'PO-2024-004',
      mainCon: 'Main Contractor D',
      status: 'Active',
      createdDate: '2024-02-10'
    },
    {
      id: 5,
      projectId: 'PRJ005',
      projectName: 'Refinery Maintenance',
      clientName: 'Oil & Gas Company',
      poNo: 'PO-2024-005',
      mainCon: 'Main Contractor E',
      status: 'In Progress',
      createdDate: '2024-02-15'
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
              <th style={{ width: '10%' }}>EDIT | VIEW</th>
              <th style={{ width: '12%' }}>PROJECT ID</th>
              <th style={{ width: '20%' }}>PROJECT NAME</th>
              <th style={{ width: '18%' }}>CLIENT NAME</th>
              <th style={{ width: '12%' }}>PO NO</th>
              <th style={{ width: '15%' }}>MAIN CON</th>
              <th style={{ width: '8%' }}>STATUS</th>
              <th style={{ width: '10%' }}>CREATED DATE</th>
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
                <td>{project.clientName}</td>
                <td>{project.poNo}</td>
                <td>{project.mainCon}</td>
                <td>
                  <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </td>
                <td>{project.createdDate}</td>
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
