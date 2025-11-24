import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewMEServices = ({ onUploadClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedService, setSelectedService] = useState('');

  // Sample data - this would come from the imported data
  const [meServices] = useState([
    {
      id: 1,
      moduleNo: 'L14-CFMA-024',
      batch: 'B1',
      projectName: 'Integrated Transport',
      service: 'Tray',
      contra: 'TOM MEP',
      size: '200 X 25',
      completionS: 'Not Completed',
      reasonP: 'N/A',
      complete: '',
      weightage: '1.70000000000000',
      image: '',
      modified: 'vineeth_tom',
      modifiedTime: '27-Oct-2023 11:25:40',
      addedBy: 'vineeth_tom',
      addedTime: '27-Oct-2023 11:25:40'
    },
    {
      id: 2,
      moduleNo: 'L14-CFMA-024',
      batch: 'B1',
      projectName: 'Integrated Transport',
      service: 'Trunking',
      contra: 'TOM MEP',
      size: '50 X 50',
      completionS: 'Not Completed',
      reasonP: 'N/A',
      complete: '',
      weightage: '0.42500000000000',
      image: '',
      modified: 'vineeth_tom',
      modifiedTime: '27-Oct-2023 11:25:40',
      addedBy: 'vineeth_tom',
      addedTime: '27-Oct-2023 11:25:40'
    },
    {
      id: 3,
      moduleNo: 'L14-CFMA-024',
      batch: 'B1',
      projectName: 'Integrated Transport',
      service: 'Trunking',
      contra: 'TOM MEP',
      size: '50 X 50',
      completionS: 'Not Completed',
      reasonP: 'N/A',
      complete: '',
      weightage: '0.42500000000000',
      image: '',
      modified: 'vineeth_tom',
      modifiedTime: '27-Oct-2023 11:25:40',
      addedBy: 'vineeth_tom',
      addedTime: '27-Oct-2023 11:25:40'
    },
    {
      id: 4,
      moduleNo: 'L14-CFMA-024',
      batch: 'B1',
      projectName: 'Integrated Transport',
      service: 'Trunking',
      contra: 'TOM MEP',
      size: '50 X 50',
      completionS: 'Not Completed',
      reasonP: 'N/A',
      complete: '',
      weightage: '0.65000000000000',
      image: '',
      modified: 'vineeth_tom',
      modifiedTime: '27-Oct-2023 11:25:40',
      addedBy: 'vineeth_tom',
      addedTime: '27-Oct-2023 11:25:40'
    },
    {
      id: 5,
      moduleNo: 'L14-CFMA-024',
      batch: 'B1',
      projectName: 'Integrated Transport',
      service: 'Trunking',
      contra: 'TOM MEP',
      size: '200 X 100',
      completionS: 'Not Completed',
      reasonP: 'N/A',
      complete: '',
      weightage: '0.65000000000000',
      image: '',
      modified: 'vineeth_tom',
      modifiedTime: '27-Oct-2023 11:25:40',
      addedBy: 'vineeth_tom',
      addedTime: '27-Oct-2023 11:25:40'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewService = (service) => {
    if (onViewClick) {
      onViewClick(service);
    }
  };

  const handleEditService = (service) => {
    if (onEditClick) {
      onEditClick(service);
    }
  };

  const handleUploadData = () => {
    if (onUploadClick) {
      onUploadClick();
    }
  };

  const filteredServices = meServices.filter(service => {
    const matchesSearch = 
      service.moduleNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.contra.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesProject = !selectedProject || service.projectName === selectedProject;
    const matchesBatch = !selectedBatch || service.batch === selectedBatch;
    const matchesService = !selectedService || service.service === selectedService;

    return matchesSearch && matchesProject && matchesBatch && matchesService;
  });

  // Get unique values for filters
  const uniqueProjects = [...new Set(meServices.map(s => s.projectName))];
  const uniqueBatches = [...new Set(meServices.map(s => s.batch))];
  const uniqueServices = [...new Set(meServices.map(s => s.service))];

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-cogs"></i>
          <h1>M&E Services (Internal)</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div>
            <label>SEARCH</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
              style={{ width: '200px' }}
              placeholder="Search services..."
            />
          </div>
          <div>
            <label>PROJECT</label>
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="form-control"
              style={{ width: '180px' }}
            >
              <option value="">All Projects</option>
              {uniqueProjects.map(project => (
                <option key={project} value={project}>{project}</option>
              ))}
            </select>
          </div>
          <div>
            <label>BATCH</label>
            <select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="form-control"
              style={{ width: '100px' }}
            >
              <option value="">All Batches</option>
              {uniqueBatches.map(batch => (
                <option key={batch} value={batch}>{batch}</option>
              ))}
            </select>
          </div>
          <div>
            <label>SERVICE</label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="form-control"
              style={{ width: '120px' }}
            >
              <option value="">All Services</option>
              {uniqueServices.map(service => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleUploadData}>
            <i className="fas fa-upload"></i>
            Upload Data
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
              <option>Recent First</option>
              <option>Project Name</option>
              <option>Module Number</option>
              <option>Service Type</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {filteredServices.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container" style={{ fontSize: '0.8rem' }}>
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '8%' }}>EDIT | VIEW</th>
              <th style={{ width: '10%' }}>Module_No <i className="fas fa-sort"></i></th>
              <th style={{ width: '5%' }}>Batch</th>
              <th style={{ width: '12%' }}>Project Name</th>
              <th style={{ width: '8%' }}>Service</th>
              <th style={{ width: '8%' }}>Contra</th>
              <th style={{ width: '8%' }}>Size</th>
              <th style={{ width: '10%' }}>Completion_S</th>
              <th style={{ width: '8%' }}>Reason_P</th>
              <th style={{ width: '6%' }}>Complete</th>
              <th style={{ width: '8%' }}>Weightage</th>
              <th style={{ width: '5%' }}>Image</th>
              <th style={{ width: '8%' }}>Modified</th>
              <th style={{ width: '10%' }}>Modified Time</th>
              <th style={{ width: '8%' }}>Added By</th>
              <th style={{ width: '10%' }}>Added Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.map((service) => (
              <tr key={service.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditService(service)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleViewService(service)}
                  >
                    View
                  </button>
                </td>
                <td className="doc-number">{service.moduleNo}</td>
                <td>{service.batch}</td>
                <td>{service.projectName}</td>
                <td>{service.service}</td>
                <td>{service.contra}</td>
                <td>{service.size}</td>
                <td>
                  <span className={`status-badge ${service.completionS === 'Not Completed' ? 'not-completed' : 'completed'}`}>
                    {service.completionS}
                  </span>
                </td>
                <td>{service.reasonP}</td>
                <td>{service.complete}</td>
                <td className="amount">{service.weightage}</td>
                <td>{service.image}</td>
                <td>{service.modified}</td>
                <td>{service.modifiedTime}</td>
                <td>{service.addedBy}</td>
                <td>{service.addedTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Progress Bar */}
      <div style={{ 
        position: 'fixed', 
        bottom: '20px', 
        left: '50%', 
        transform: 'translateX(-50%)',
        background: 'rgba(0,0,0,0.8)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '20px',
        fontSize: '0.875rem',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <span>Showing {filteredServices.length} of {meServices.length}</span>
        <div style={{
          width: '100px',
          height: '4px',
          background: 'rgba(255,255,255,0.3)',
          borderRadius: '2px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${(filteredServices.length / meServices.length) * 100}%`,
            height: '100%',
            background: '#4a90e2',
            borderRadius: '2px'
          }}></div>
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

export default ViewMEServices;
