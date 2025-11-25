import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const StatusAllModules = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  // Sample data for all modules
  const [modulesData] = useState([
    {
      id: 1,
      moduleNo: 'L4-ADM-DFMA-039',
      batch: 'B001',
      materialDelivery: 'Completed',
      materialDeliveryUpdated: 'Not Completed',
      fabrication: 'Completed',
      fabricationUpdated: 'Not Completed',
      meAssembly: 'In Progress',
      meAssemblyUpdated: 'Not Completed',
      mePercentage: '75%',
      fabricationQAQC: 'Not Completed',
      fabricationQAQCUpdated: 'Not Completed',
      testingAlignment: 'Not Completed',
      testingAlignmentUpdated: 'Not Completed',
      packaging: 'Not Completed',
      packagingUpdated: 'Not Completed',
      moduleWiseTimeTracking: 'Not Completed',
      delivery: 'Not Completed',
      deliveryUpdated: 'Not Completed',
      anchoring: 'Not Completed',
      anchoringUpdated: 'Not Completed',
      hoisting: 'Not Completed',
      hoistingUpdated: 'Not Completed',
      positioning: 'Not Completed',
      positioningUpdated: 'Not Completed',
      meHookup: 'Not Completed',
      meHookupUpdated: 'Not Completed',
      installation: 'Not Completed',
      installationUpdated: 'Not Completed',
      finalQAQC: 'Not Completed',
      finalQAQCUpdated: 'Not Completed',
      projectName: 'SGA PLSE Project',
      modifiedTime: '25 Nov 2024 10:30:15',
      modifiedUser: 'admin'
    },
    {
      id: 2,
      moduleNo: 'L4-ADM-DFMA-040',
      batch: 'B001',
      materialDelivery: 'Completed',
      materialDeliveryUpdated: 'Completed',
      fabrication: 'Completed',
      fabricationUpdated: 'Completed',
      meAssembly: 'Completed',
      meAssemblyUpdated: 'In Progress',
      mePercentage: '90%',
      fabricationQAQC: 'In Progress',
      fabricationQAQCUpdated: 'Not Completed',
      testingAlignment: 'Not Completed',
      testingAlignmentUpdated: 'Not Completed',
      packaging: 'Not Completed',
      packagingUpdated: 'Not Completed',
      moduleWiseTimeTracking: 'Not Completed',
      delivery: 'Not Completed',
      deliveryUpdated: 'Not Completed',
      anchoring: 'Not Completed',
      anchoringUpdated: 'Not Completed',
      hoisting: 'Not Completed',
      hoistingUpdated: 'Not Completed',
      positioning: 'Not Completed',
      positioningUpdated: 'Not Completed',
      meHookup: 'Not Completed',
      meHookupUpdated: 'Not Completed',
      installation: 'Not Completed',
      installationUpdated: 'Not Completed',
      finalQAQC: 'Not Completed',
      finalQAQCUpdated: 'Not Completed',
      projectName: 'SGA PLSE Project',
      modifiedTime: '25 Nov 2024 11:15:22',
      modifiedUser: 'supervisor'
    },
    {
      id: 3,
      moduleNo: 'L4-ADM-DFMA-041',
      batch: 'B002',
      materialDelivery: 'Completed',
      materialDeliveryUpdated: 'Completed',
      fabrication: 'Completed',
      fabricationUpdated: 'Completed',
      meAssembly: 'Completed',
      meAssemblyUpdated: 'Completed',
      mePercentage: '100%',
      fabricationQAQC: 'Completed',
      fabricationQAQCUpdated: 'Completed',
      testingAlignment: 'Completed',
      testingAlignmentUpdated: 'In Progress',
      packaging: 'In Progress',
      packagingUpdated: 'Not Completed',
      moduleWiseTimeTracking: 'In Progress',
      delivery: 'Not Completed',
      deliveryUpdated: 'Not Completed',
      anchoring: 'Not Completed',
      anchoringUpdated: 'Not Completed',
      hoisting: 'Not Completed',
      hoistingUpdated: 'Not Completed',
      positioning: 'Not Completed',
      positioningUpdated: 'Not Completed',
      meHookup: 'Not Completed',
      meHookupUpdated: 'Not Completed',
      installation: 'Not Completed',
      installationUpdated: 'Not Completed',
      finalQAQC: 'Not Completed',
      finalQAQCUpdated: 'Not Completed',
      projectName: 'Integrated Transport Hub',
      modifiedTime: '25 Nov 2024 09:45:10',
      modifiedUser: 'engineer'
    },
    {
      id: 4,
      moduleNo: 'L4-ADM-DFMA-042',
      batch: 'B002',
      materialDelivery: 'Completed',
      materialDeliveryUpdated: 'Completed',
      fabrication: 'Completed',
      fabricationUpdated: 'Completed',
      meAssembly: 'Completed',
      meAssemblyUpdated: 'Completed',
      mePercentage: '100%',
      fabricationQAQC: 'Completed',
      fabricationQAQCUpdated: 'Completed',
      testingAlignment: 'Completed',
      testingAlignmentUpdated: 'Completed',
      packaging: 'Completed',
      packagingUpdated: 'Completed',
      moduleWiseTimeTracking: 'Completed',
      delivery: 'Completed',
      deliveryUpdated: 'In Progress',
      anchoring: 'In Progress',
      anchoringUpdated: 'Not Completed',
      hoisting: 'Not Completed',
      hoistingUpdated: 'Not Completed',
      positioning: 'Not Completed',
      positioningUpdated: 'Not Completed',
      meHookup: 'Not Completed',
      meHookupUpdated: 'Not Completed',
      installation: 'Not Completed',
      installationUpdated: 'Not Completed',
      finalQAQC: 'Not Completed',
      finalQAQCUpdated: 'Not Completed',
      projectName: 'Integrated Transport Hub',
      modifiedTime: '25 Nov 2024 08:20:33',
      modifiedUser: 'manager'
    },
    {
      id: 5,
      moduleNo: 'L4-ADM-DFMA-043',
      batch: 'B003',
      materialDelivery: 'In Progress',
      materialDeliveryUpdated: 'Not Completed',
      fabrication: 'Not Completed',
      fabricationUpdated: 'Not Completed',
      meAssembly: 'Not Completed',
      meAssemblyUpdated: 'Not Completed',
      mePercentage: '25%',
      fabricationQAQC: 'Not Completed',
      fabricationQAQCUpdated: 'Not Completed',
      testingAlignment: 'Not Completed',
      testingAlignmentUpdated: 'Not Completed',
      packaging: 'Not Completed',
      packagingUpdated: 'Not Completed',
      moduleWiseTimeTracking: 'Not Completed',
      delivery: 'Not Completed',
      deliveryUpdated: 'Not Completed',
      anchoring: 'Not Completed',
      anchoringUpdated: 'Not Completed',
      hoisting: 'Not Completed',
      hoistingUpdated: 'Not Completed',
      positioning: 'Not Completed',
      positioningUpdated: 'Not Completed',
      meHookup: 'Not Completed',
      meHookupUpdated: 'Not Completed',
      installation: 'Not Completed',
      installationUpdated: 'Not Completed',
      finalQAQC: 'Not Completed',
      finalQAQCUpdated: 'Not Completed',
      projectName: 'Marina Bay Development',
      modifiedTime: '25 Nov 2024 12:05:45',
      modifiedUser: 'technician'
    }
  ]);

  const filteredModules = modulesData.filter(module => {
    const matchesSearch = 
      module.moduleNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      module.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      module.batch.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesProject = !selectedProject || module.projectName === selectedProject;
    
    let matchesStatus = true;
    if (selectedStatus) {
      const statusFields = [
        'materialDelivery', 'materialDeliveryUpdated', 'fabrication', 'fabricationUpdated', 
        'meAssembly', 'meAssemblyUpdated', 'fabricationQAQC', 'fabricationQAQCUpdated', 
        'testingAlignment', 'testingAlignmentUpdated', 'packaging', 'packagingUpdated',
        'moduleWiseTimeTracking', 'delivery', 'deliveryUpdated', 'anchoring', 'anchoringUpdated',
        'hoisting', 'hoistingUpdated', 'positioning', 'positioningUpdated', 'meHookup', 
        'meHookupUpdated', 'installation', 'installationUpdated', 'finalQAQC', 'finalQAQCUpdated'
      ];
      matchesStatus = statusFields.some(field => module[field] === selectedStatus);
    }

    return matchesSearch && matchesProject && matchesStatus;
  });

  // Get unique values for filters
  const uniqueProjects = [...new Set(modulesData.map(m => m.projectName))];

  const getStatusBadgeClass = (status) => {
    return status === 'Completed' ? 'status-completed' : 'status-not-completed';
  };

  return (
      <div className="enquiries-list">
        <div className="list-header">
          <div className="list-title">
            <i className="fas fa-chart-bar"></i>
            <h1>Status All Modules</h1>
          </div>
          <div className="list-actions">
            <button className="btn-view-option">List</button>
            <button className="btn-view-option">Summary</button>
            <button className="btn-view-option">Export</button>
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
                placeholder="Search modules..."
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
              <label>STATUS</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="form-control"
                style={{ width: '150px' }}
              >
                <option value="">All Status</option>
                <option value="Completed">Completed</option>
                <option value="Not Completed">Not Completed</option>
              </select>
            </div>
          </div>
          <div className="list-actions">
            <button className="btn btn-primary" onClick={() => showToast('Export functionality coming soon!')}>
              <i className="fas fa-download"></i>
              Export Report
            </button>
          </div>
        </div>

        <div className="list-filters">
          <div className="filter-group">
            <button className="btn-icon" title="Refresh">
              <i className="fas fa-sync-alt"></i>
              <span>REFRESH</span>
            </button>
            <button className="btn-icon" title="Print">
              <i className="fas fa-print"></i>
            </button>
            <button className="btn-icon" title="Settings">
              <i className="fas fa-cog"></i>
            </button>
          </div>
          <div className="filter-right-group">
            <div className="quick-sort">
              <label>QUICK SORT</label>
              <select className="form-control">
                <option>Module Number</option>
                <option>Project Name</option>
                <option>Completion %</option>
              </select>
            </div>
            <div className="list-total">
              TOTAL: {filteredModules.length}
            </div>
          </div>
        </div>

        <div className="enquiries-table-container">
          <table className="enquiries-table">
            <thead>
              <tr>
                <th>Module No</th>
                <th>Batch</th>
                <th>Material Delivery</th>
                <th>Material Delivery Updated</th>
                <th>Fabrication</th>
                <th>Fabrication Updated</th>
                <th>M&E Assembly</th>
                <th>M&E Assembly Updated</th>
                <th>M&E Percentage</th>
                <th>Fabrication QA/QC</th>
                <th>Fabrication QA/QC Updated</th>
                <th>Testing & Alignment</th>
                <th>Testing & Alignment Updated</th>
                <th>Packaging</th>
                <th>Packaging Updated</th>
                <th>Module Wise Time Tracking</th>
                <th>Delivery</th>
                <th>Delivery Updated</th>
                <th>Anchoring</th>
                <th>Anchoring Updated</th>
                <th>Hoisting</th>
                <th>Hoisting Updated</th>
                <th>Positioning</th>
                <th>Positioning Updated</th>
                <th>M&E Hookup</th>
                <th>M&E Hookup Updated</th>
                <th>Installation</th>
                <th>Installation Updated</th>
                <th>Final QA/QC</th>
                <th>Final QA/QC Updated</th>
                <th>Project Name</th>
                <th>Modified Time</th>
                <th>Modified User</th>
              </tr>
            </thead>
            <tbody>
              {filteredModules.map((module) => (
                <tr key={module.id}>
                  <td className="doc-number">{module.moduleNo}</td>
                  <td>{module.batch}</td>
                  <td><span className="status-badge">{module.materialDelivery}</span></td>
                  <td><span className="status-badge">{module.materialDeliveryUpdated}</span></td>
                  <td><span className="status-badge">{module.fabrication}</span></td>
                  <td><span className="status-badge">{module.fabricationUpdated}</span></td>
                  <td><span className="status-badge">{module.meAssembly}</span></td>
                  <td><span className="status-badge">{module.meAssemblyUpdated}</span></td>
                  <td>{module.mePercentage}</td>
                  <td><span className="status-badge">{module.fabricationQAQC}</span></td>
                  <td><span className="status-badge">{module.fabricationQAQCUpdated}</span></td>
                  <td><span className="status-badge">{module.testingAlignment}</span></td>
                  <td><span className="status-badge">{module.testingAlignmentUpdated}</span></td>
                  <td><span className="status-badge">{module.packaging}</span></td>
                  <td><span className="status-badge">{module.packagingUpdated}</span></td>
                  <td><span className="status-badge">{module.moduleWiseTimeTracking}</span></td>
                  <td><span className="status-badge">{module.delivery}</span></td>
                  <td><span className="status-badge">{module.deliveryUpdated}</span></td>
                  <td><span className="status-badge">{module.anchoring}</span></td>
                  <td><span className="status-badge">{module.anchoringUpdated}</span></td>
                  <td><span className="status-badge">{module.hoisting}</span></td>
                  <td><span className="status-badge">{module.hoistingUpdated}</span></td>
                  <td><span className="status-badge">{module.positioning}</span></td>
                  <td><span className="status-badge">{module.positioningUpdated}</span></td>
                  <td><span className="status-badge">{module.meHookup}</span></td>
                  <td><span className="status-badge">{module.meHookupUpdated}</span></td>
                  <td><span className="status-badge">{module.installation}</span></td>
                  <td><span className="status-badge">{module.installationUpdated}</span></td>
                  <td><span className="status-badge">{module.finalQAQC}</span></td>
                  <td><span className="status-badge">{module.finalQAQCUpdated}</span></td>
                  <td>{module.projectName}</td>
                  <td>{module.modifiedTime}</td>
                  <td>{module.modifiedUser}</td>
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
          <span>Showing {filteredModules.length} of {modulesData.length} modules</span>
          <div style={{
            width: '100px',
            height: '4px',
            background: 'rgba(255,255,255,0.3)',
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${(filteredModules.length / modulesData.length) * 100}%`,
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

export default StatusAllModules;
