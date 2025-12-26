import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewPlantModuleProcesses = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');
  const [quickSort, setQuickSort] = useState('date');

  const mockData = [
    {
      id: 1,
      moduleNo: 'SANYU-CHWP-01',
      materialIncomingStatus: 'Not Complete',
      materialIncomingDate: '24-Jul-2024',
      dimensionalInspectionStatus: 'Not Complete',
      dimensionalInspectionDate: '22-Jul-2024',
      fitUpStatus: 'Not Complete',
      fitUpDate: '22-Jul-2024',
      hydrostaticTestStatus: 'Not Complete',
      hydrostaticTestDate: '',
      materialTraceabilityStatus: 'Not Complete',
      materialTraceabilityDate: '',
      visualInspectionStatus: 'Not Complete',
      visualInspectionDate: '',
      weldingTraceabilityStatus: 'Not Complete',
      weldingTraceabilityDate: '',
      mepStatus: 'Not Complete',
      mepDate: ''
    },
    {
      id: 2,
      moduleNo: 'SANYU-CHWP-001',
      materialIncomingStatus: 'Completed',
      materialIncomingDate: '24-Jul-2024',
      dimensionalInspectionStatus: 'Completed',
      dimensionalInspectionDate: '22-Jul-2024',
      fitUpStatus: 'Completed',
      fitUpDate: '22-Jul-2024',
      hydrostaticTestStatus: 'Completed',
      hydrostaticTestDate: '25-Jul-2024',
      materialTraceabilityStatus: 'Completed',
      materialTraceabilityDate: '26-Jul-2024',
      visualInspectionStatus: 'Completed',
      visualInspectionDate: '27-Jul-2024',
      weldingTraceabilityStatus: 'Completed',
      weldingTraceabilityDate: '28-Jul-2024',
      mepStatus: 'Completed',
      mepDate: '30-Jul-2024'
    },
    {
      id: 3,
      moduleNo: 'TOM-P-001',
      materialIncomingStatus: 'Not Completed',
      materialIncomingDate: '',
      dimensionalInspectionStatus: 'Not Completed',
      dimensionalInspectionDate: '',
      fitUpStatus: 'Not Completed',
      fitUpDate: '',
      hydrostaticTestStatus: 'Not Completed',
      hydrostaticTestDate: '',
      materialTraceabilityStatus: 'Not Completed',
      materialTraceabilityDate: '',
      visualInspectionStatus: 'Not Completed',
      visualInspectionDate: '',
      weldingTraceabilityStatus: 'Not Completed',
      weldingTraceabilityDate: '',
      mepStatus: 'Not Completed',
      mepDate: ''
    }
  ];

  const [modules] = useState(mockData);

  const handleViewModule = (module) => {
    if (onViewClick) onViewClick(module);
  };

  const handleEditModule = (module) => {
    if (onEditClick) onEditClick(module);
  };

  return (
    <div className="enquiries-list">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-industry" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Plant Module Process</h1>
        </div>
        <div className="page-actions">
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
            <option value="all">All Plant Modules</option>
            <option value="completed">Completed Modules</option>
            <option value="in-progress">In Progress</option>
            <option value="not-complete">Not Complete</option>
          </select>
        </div>
        <button className="btn-new-transaction" onClick={onNewClick}>
          <i className="fas fa-plus"></i> New Plant Module Process
        </button>
      </div>

      <div className="list-filters">
        <div className="list-toolbar">
          <button className="toolbar-btn" title="Edit">
            <i className="fas fa-edit"></i> EDIT
          </button>
          <button className="toolbar-btn" title="Delete">
            <i className="fas fa-times"></i>
          </button>
          <button className="toolbar-btn" title="Attach">
            <i className="fas fa-paperclip"></i>
          </button>
          <button className="toolbar-btn" title="Print">
            <i className="fas fa-print"></i>
          </button>
        </div>
        <div className="list-sort">
          <label>QUICK SORT:</label>
          <select 
            className="form-control"
            value={quickSort}
            onChange={(e) => setQuickSort(e.target.value)}
          >
            <option value="date">Date</option>
            <option value="module">Module No</option>
            <option value="status">Status</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {modules.length}
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th></th>
              <th>EDIT | VIEW</th>
              <th>MODULE NO</th>
              <th>MATERIAL INCOMING</th>
              <th>DIMENSIONAL INSPECTION</th>
              <th>FIT UP</th>
              <th>HYDROSTATIC TEST</th>
              <th>MATERIAL TRACEABILITY</th>
              <th>VISUAL INSPECTION</th>
              <th>WELDING TRACEABILITY</th>
              <th>MEP STATUS</th>
            </tr>
          </thead>
          <tbody>
            {modules.map((module) => (
              <tr key={module.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button 
                      className="view-link"
                      onClick={() => handleEditModule(module)}
                    >
                      Edit
                    </button>
                    <span style={{ color: '#999' }}>|</span>
                    <button 
                      className="view-link"
                      onClick={() => handleViewModule(module)}
                    >
                      View
                    </button>
                  </div>
                </td>
                <td className="doc-number">{module.moduleNo}</td>
                <td>
                  <span className={`status-badge ${
                    module.materialIncomingStatus === 'Completed' ? 'status-completed' :
                    module.materialIncomingStatus === 'In Progress' ? 'status-in-progress' :
                    'status-not-complete'
                  }`}>
                    {module.materialIncomingStatus}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${
                    module.dimensionalInspectionStatus === 'Completed' ? 'status-completed' :
                    module.dimensionalInspectionStatus === 'In Progress' ? 'status-in-progress' :
                    'status-not-complete'
                  }`}>
                    {module.dimensionalInspectionStatus}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${
                    module.fitUpStatus === 'Completed' ? 'status-completed' :
                    module.fitUpStatus === 'In Progress' ? 'status-in-progress' :
                    'status-not-complete'
                  }`}>
                    {module.fitUpStatus}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${
                    module.hydrostaticTestStatus === 'Completed' ? 'status-completed' :
                    module.hydrostaticTestStatus === 'In Progress' ? 'status-in-progress' :
                    'status-not-complete'
                  }`}>
                    {module.hydrostaticTestStatus}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${
                    module.materialTraceabilityStatus === 'Completed' ? 'status-completed' :
                    module.materialTraceabilityStatus === 'In Progress' ? 'status-in-progress' :
                    'status-not-complete'
                  }`}>
                    {module.materialTraceabilityStatus}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${
                    module.visualInspectionStatus === 'Completed' ? 'status-completed' :
                    module.visualInspectionStatus === 'In Progress' ? 'status-in-progress' :
                    'status-not-complete'
                  }`}>
                    {module.visualInspectionStatus}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${
                    module.weldingTraceabilityStatus === 'Completed' ? 'status-completed' :
                    module.weldingTraceabilityStatus === 'In Progress' ? 'status-in-progress' :
                    'status-not-complete'
                  }`}>
                    {module.weldingTraceabilityStatus}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${
                    module.mepStatus === 'Completed' ? 'status-completed' :
                    module.mepStatus === 'In Progress' ? 'status-in-progress' :
                    'status-not-complete'
                  }`}>
                    {module.mepStatus}
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

export default ViewPlantModuleProcesses;
