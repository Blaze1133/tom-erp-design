import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewResources = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [searchTerm, setSearchTerm] = useState('');

  const [resources] = useState([
    {
      id: 1,
      resourceId: 'RES001',
      resourceName: 'John Tan',
      resourceType: 'Employee',
      department: 'TOM: Engineering',
      role: 'Senior MEP Engineer',
      availability: 'Available',
      currentProject: 'PRJ001 - MEP Installation Project',
      utilizationRate: 85,
      costPerHour: 75.00
    },
    {
      id: 2,
      resourceId: 'RES002',
      resourceName: 'Sarah Lim',
      resourceType: 'Employee',
      department: 'TOM: Production',
      role: 'Welding Specialist',
      availability: 'Allocated',
      currentProject: 'PRJ002 - Offshore Platform Module',
      utilizationRate: 95,
      costPerHour: 65.00
    },
    {
      id: 3,
      resourceId: 'RES003',
      resourceName: 'Hydraulic Crane - HC-01',
      resourceType: 'Equipment',
      department: 'TOM: Logistic',
      role: 'Heavy Lifting Equipment',
      availability: 'Available',
      currentProject: '-',
      utilizationRate: 60,
      costPerHour: 150.00
    },
    {
      id: 4,
      resourceId: 'RES004',
      resourceName: 'Michael Wong',
      resourceType: 'Employee',
      department: 'TOM: Production',
      role: 'Fabrication Supervisor',
      availability: 'On Leave',
      currentProject: 'PRJ003 - Shipyard Fabrication',
      utilizationRate: 0,
      costPerHour: 80.00
    },
    {
      id: 5,
      resourceId: 'RES005',
      resourceName: 'Welding Machine - WM-05',
      resourceType: 'Equipment',
      department: 'TOM: Production',
      role: 'Welding Equipment',
      availability: 'Allocated',
      currentProject: 'PRJ004 - Industrial Piping System',
      utilizationRate: 100,
      costPerHour: 45.00
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewResource = (resource) => {
    if (onViewClick) {
      onViewClick(resource);
    }
  };

  const handleEditResource = (resource) => {
    if (onEditClick) {
      onEditClick(resource);
    }
  };

  const handleNewResource = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  const filteredResources = resources.filter(resource =>
    resource.resourceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.resourceId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.resourceType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getAvailabilityColor = (availability) => {
    switch(availability) {
      case 'Available': return '#28a745';
      case 'Allocated': return '#ffc107';
      case 'On Leave': return '#dc3545';
      case 'Maintenance': return '#6c757d';
      default: return '#6c757d';
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-users-cog"></i>
          <h1>Resources</h1>
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
            placeholder="Search resources..."
          />
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewResource}>
            <i className="fas fa-plus"></i>
            New Resource
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
              <option>All Resources</option>
              <option>Available</option>
              <option>Allocated</option>
              <option>Employees Only</option>
              <option>Equipment Only</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {filteredResources.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '10%' }}>EDIT | VIEW</th>
              <th style={{ width: '10%' }}>RESOURCE ID</th>
              <th style={{ width: '15%' }}>RESOURCE NAME</th>
              <th style={{ width: '10%' }}>TYPE</th>
              <th style={{ width: '12%' }}>DEPARTMENT</th>
              <th style={{ width: '12%' }}>ROLE</th>
              <th style={{ width: '10%' }}>AVAILABILITY</th>
              <th style={{ width: '15%' }}>CURRENT PROJECT</th>
              <th style={{ width: '8%' }}>UTILIZATION %</th>
            </tr>
          </thead>
          <tbody>
            {filteredResources.map((resource) => (
              <tr key={resource.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditResource(resource)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleViewResource(resource)}
                  >
                    View
                  </button>
                </td>
                <td className="doc-number">{resource.resourceId}</td>
                <td>{resource.resourceName}</td>
                <td>
                  <span style={{ 
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    backgroundColor: resource.resourceType === 'Employee' ? '#e3f2fd' : '#fff3e0',
                    color: resource.resourceType === 'Employee' ? '#1976d2' : '#f57c00',
                    fontSize: '0.85rem'
                  }}>
                    {resource.resourceType}
                  </span>
                </td>
                <td>{resource.department}</td>
                <td>{resource.role}</td>
                <td>
                  <span style={{ 
                    color: getAvailabilityColor(resource.availability),
                    fontWeight: 'bold'
                  }}>
                    {resource.availability}
                  </span>
                </td>
                <td>{resource.currentProject}</td>
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
                        width: `${resource.utilizationRate}%`, 
                        backgroundColor: resource.utilizationRate > 90 ? '#dc3545' : resource.utilizationRate > 70 ? '#ffc107' : '#28a745',
                        transition: 'width 0.3s'
                      }}></div>
                    </div>
                    <span style={{ fontSize: '0.85rem', minWidth: '35px' }}>{resource.utilizationRate}%</span>
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

export default ViewResources;
