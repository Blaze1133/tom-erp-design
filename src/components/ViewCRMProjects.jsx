import React, { useState } from 'react';
import './Enquiries.css';
import Toast from './Toast';

const ViewCRMProjects = ({ onNewClick, onViewClick, onEditClick }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Sample project data converted from quotations
  const [projects] = useState([
    {
      id: 'PRJ-001',
      projectNumber: 'PRJ-2024-001',
      projectName: 'Hull Block Assembly Contract',
      companyName: 'Shipyard Engineering Co',
      contactPerson: 'Lisa Kumar',
      contractValue: 3200000,
      status: 'Active',
      startDate: '2024-12-01',
      expectedEndDate: '2025-06-30',
      actualEndDate: null,
      progress: 15,
      projectManager: 'Sarah Lee',
      quotationId: 'QT-003',
      opportunityId: 'OP-003',
      createdDate: '2024-11-28',
      lastUpdate: '2024-11-25',
      milestones: [
        { name: 'Design Phase', status: 'Completed', dueDate: '2024-12-15' },
        { name: 'Material Procurement', status: 'In Progress', dueDate: '2025-01-15' },
        { name: 'Fabrication', status: 'Pending', dueDate: '2025-04-30' },
        { name: 'Assembly & Testing', status: 'Pending', dueDate: '2025-06-15' },
        { name: 'Delivery', status: 'Pending', dueDate: '2025-06-30' }
      ]
    },
    {
      id: 'PRJ-002',
      projectNumber: 'PRJ-2024-002',
      projectName: 'FPSO Module Fabrication Project',
      companyName: 'Ocean Tech Industries',
      contactPerson: 'Michael Wong',
      contractValue: 2500000,
      status: 'Planning',
      startDate: '2024-12-15',
      expectedEndDate: '2025-08-15',
      actualEndDate: null,
      progress: 5,
      projectManager: 'David Chen',
      quotationId: 'QT-001',
      opportunityId: 'OP-001',
      createdDate: '2024-11-22',
      lastUpdate: '2024-11-24',
      milestones: [
        { name: 'Contract Finalization', status: 'In Progress', dueDate: '2024-12-10' },
        { name: 'Engineering Design', status: 'Pending', dueDate: '2025-01-30' },
        { name: 'Material Sourcing', status: 'Pending', dueDate: '2025-02-28' },
        { name: 'Module Fabrication', status: 'Pending', dueDate: '2025-06-30' },
        { name: 'Testing & Delivery', status: 'Pending', dueDate: '2025-08-15' }
      ]
    },
    {
      id: 'PRJ-003',
      projectNumber: 'PRJ-2023-015',
      projectName: 'Offshore Platform Upgrade',
      companyName: 'Marine Engineering Ltd',
      contactPerson: 'James Wilson',
      contractValue: 1800000,
      status: 'Completed',
      startDate: '2023-08-01',
      expectedEndDate: '2024-02-29',
      actualEndDate: '2024-03-15',
      progress: 100,
      projectManager: 'Michael Tan',
      quotationId: 'QT-2023-012',
      opportunityId: 'OP-2023-008',
      createdDate: '2023-07-20',
      lastUpdate: '2024-03-15',
      milestones: [
        { name: 'Design Phase', status: 'Completed', dueDate: '2023-09-30' },
        { name: 'Material Procurement', status: 'Completed', dueDate: '2023-11-15' },
        { name: 'Fabrication', status: 'Completed', dueDate: '2024-01-31' },
        { name: 'Installation', status: 'Completed', dueDate: '2024-02-28' },
        { name: 'Commissioning', status: 'Completed', dueDate: '2024-03-15' }
      ]
    },
    {
      id: 'PRJ-004',
      projectNumber: 'PRJ-2024-003',
      projectName: 'Subsea Pipeline Module',
      companyName: 'Deep Sea Technologies',
      contactPerson: 'Rachel Chen',
      contractValue: 4200000,
      status: 'Active',
      startDate: '2024-09-01',
      expectedEndDate: '2025-12-31',
      actualEndDate: null,
      progress: 35,
      projectManager: 'Sarah Lee',
      quotationId: 'QT-2024-008',
      opportunityId: 'OP-2024-012',
      createdDate: '2024-08-15',
      lastUpdate: '2024-11-20',
      milestones: [
        { name: 'Detailed Engineering', status: 'Completed', dueDate: '2024-10-31' },
        { name: 'Long Lead Items', status: 'Completed', dueDate: '2024-11-30' },
        { name: 'Module Fabrication', status: 'In Progress', dueDate: '2025-06-30' },
        { name: 'Testing & Inspection', status: 'Pending', dueDate: '2025-09-30' },
        { name: 'Offshore Installation', status: 'Pending', dueDate: '2025-12-31' }
      ]
    },
    {
      id: 'PRJ-005',
      projectNumber: 'PRJ-2024-004',
      projectName: 'Petrochemical Process Module',
      companyName: 'Chemical Industries Pte',
      contactPerson: 'Kevin Lim',
      contractValue: 950000,
      status: 'On Hold',
      startDate: '2024-10-01',
      expectedEndDate: '2025-04-30',
      actualEndDate: null,
      progress: 20,
      projectManager: 'David Chen',
      quotationId: 'QT-2024-010',
      opportunityId: 'OP-2024-015',
      createdDate: '2024-09-20',
      lastUpdate: '2024-11-10',
      milestones: [
        { name: 'Design Review', status: 'Completed', dueDate: '2024-10-31' },
        { name: 'Material Approval', status: 'In Progress', dueDate: '2024-12-15' },
        { name: 'Fabrication Start', status: 'Pending', dueDate: '2025-01-15' },
        { name: 'Module Assembly', status: 'Pending', dueDate: '2025-03-31' },
        { name: 'Final Delivery', status: 'Pending', dueDate: '2025-04-30' }
      ]
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Planning': return '#6c757d';
      case 'Active': return '#007bff';
      case 'On Hold': return '#ffc107';
      case 'Completed': return '#28a745';
      case 'Cancelled': return '#dc3545';
      default: return '#6c757d';
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Planning': return 'badge badge-secondary';
      case 'Active': return 'badge badge-primary';
      case 'On Hold': return 'badge badge-warning';
      case 'Completed': return 'badge badge-success';
      case 'Cancelled': return 'badge badge-danger';
      default: return 'badge badge-secondary';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-SG', {
      style: 'currency',
      currency: 'SGD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.projectNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleUpdateProgress = (projectId) => {
    setToastMessage('Project progress updated successfully!');
    setToastType('success');
    setShowToast(true);
  };

  const handleCreateInvoice = (projectId) => {
    setToastMessage('Invoice created successfully!');
    setToastType('success');
    setShowToast(true);
  };

  const handleScheduleMeeting = (projectId) => {
    setToastMessage('Meeting scheduled successfully!');
    setToastType('success');
    setShowToast(true);
  };

  const totalValue = filteredProjects.reduce((sum, project) => sum + project.contractValue, 0);
  const activeProjects = filteredProjects.filter(project => project.status === 'Active').length;
  const completedProjects = filteredProjects.filter(project => project.status === 'Completed').length;

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-project-diagram"></i>
          <h1>Project Management</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>VIEW</label>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="form-control"
            style={{ width: '250px' }}
          >
            <option value="all">All Statuses</option>
            <option value="Planning">Planning</option>
            <option value="Active">Active</option>
            <option value="On Hold">On Hold</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={onNewClick}>
            <i className="fas fa-plus"></i>
            New Project
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
              <option>Active Only</option>
              <option>This Year</option>
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
              <th style={{ width: '10%' }}>PROJECT NO.</th>
              <th style={{ width: '20%' }}>PROJECT NAME</th>
              <th style={{ width: '15%' }}>COMPANY</th>
              <th style={{ width: '10%' }}>CONTRACT VALUE</th>
              <th style={{ width: '8%' }}>STATUS</th>
              <th style={{ width: '8%' }}>PROGRESS</th>
              <th style={{ width: '10%' }}>END DATE</th>
              <th style={{ width: '11%' }}>PROJECT MANAGER</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project) => (
              <tr key={project.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => onEditClick(project.id)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => onViewClick(project.id)}
                  >
                    View
                  </button>
                </td>
                <td>{project.projectNumber}</td>
                <td>{project.projectName}</td>
                <td>{project.companyName}</td>
                <td className="amount">{formatCurrency(project.contractValue)}</td>
                <td>
                  <span 
                    className={getStatusBadgeClass(project.status)}
                    style={{ backgroundColor: getStatusColor(project.status) }}
                  >
                    {project.status}
                  </span>
                </td>
                <td>{project.progress}%</td>
                <td>{project.actualEndDate || project.expectedEndDate}</td>
                <td>{project.projectManager}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default ViewCRMProjects;
