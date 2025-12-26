import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewVisualInspections = ({ setCurrentPage, onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');
  const [selectedRecords, setSelectedRecords] = useState([]);

  const [records] = useState([
    {
      id: 1,
      moduleNo: 'SANYU-CHWP-001',
      projectName: '24-00221-YSE-Project Sanyu',
      projectNo: '24-00221',
      location: 'No.11, Tuas South Street 3',
      drawingNo: 'SQE-SANYU-CHW-FAB-001',
      contractor: 'Tech Onshore Mep Prefabricators Pte Ltd',
      drawingTitle: 'CHWP PUMP SKID - FABRICATION',
      status: 'COMPLETED'
    },
    {
      id: 2,
      moduleNo: 'SANYU-CHWP-002',
      projectName: '24-00221-YSE-Project Sanyu',
      projectNo: '24-00221',
      location: 'No.11, Tuas South Street 3',
      drawingNo: 'SQE-SANYU-CHW-FAB-002',
      contractor: 'Tech Marine Offshore Pte Ltd',
      drawingTitle: 'CHWP PUMP SKID - ASSEMBLY',
      status: 'IN PROGRESS'
    },
    {
      id: 3,
      moduleNo: 'SANYU-CHWP-003',
      projectName: '24-00221-YSE-Project Sanyu',
      projectNo: '24-00221',
      location: 'No.11, Tuas South Street 3',
      drawingNo: 'SQE-SANYU-CHW-FAB-003',
      contractor: 'Universal Alloy & Steel Pte Ltd',
      drawingTitle: 'CHWP PUMP SKID - TESTING',
      status: 'PENDING'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleSelectRecord = (id) => {
    setSelectedRecords(prev => 
      prev.includes(id) ? prev.filter(recordId => recordId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRecords(records.map(r => r.id));
    } else {
      setSelectedRecords([]);
    }
  };

  const handleEdit = (record) => {
    if (onEditClick) {
      onEditClick(record);
    }
  };

  const handleView = (record) => {
    if (onViewClick) {
      onViewClick(record);
    }
  };

  const handleNewRecord = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  return (
    <div className="enquiries-list">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-eye" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>All Visual Inspections</h1>
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
            <option value="all">All Records</option>
            <option value="completed">Completed</option>
            <option value="in-progress">In Progress</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <button className="btn-new-transaction" onClick={handleNewRecord}>
          <i className="fas fa-plus"></i> New Visual Inspection
        </button>
      </div>

      <div className="list-filters">
        <div className="list-sort">
          <label>QUICK SORT:</label>
          <select className="form-control">
            <option>Module No</option>
            <option>Project Name</option>
            <option>Contractor</option>
            <option>Status</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {records.length}
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th>
                <input 
                  type="checkbox" 
                  onChange={handleSelectAll}
                  checked={selectedRecords.length === records.length}
                />
              </th>
              <th>EDIT | VIEW</th>
              <th>*</th>
              <th>MODULE NO</th>
              <th>PROJECT NAME</th>
              <th>PROJECT NO</th>
              <th>LOCATION</th>
              <th>DRAWING NO</th>
              <th>CONTRACTOR</th>
              <th>DRAWING TITLE</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td>
                  <input 
                    type="checkbox" 
                    checked={selectedRecords.includes(record.id)}
                    onChange={() => handleSelectRecord(record.id)}
                  />
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button 
                      className="view-link"
                      onClick={() => handleEdit(record)}
                    >
                      Edit
                    </button>
                    <span style={{ color: '#999' }}>|</span>
                    <button 
                      className="view-link"
                      onClick={() => handleView(record)}
                    >
                      View
                    </button>
                  </div>
                </td>
                <td>
                  {record.status === 'COMPLETED' ? (
                    <span className="status-badge" style={{ background: '#28a745', color: 'white', padding: '2px 8px', borderRadius: '3px', fontSize: '11px' }}>
                      ✓
                    </span>
                  ) : record.status === 'IN PROGRESS' ? (
                    <span className="status-badge" style={{ background: '#ff9800', color: 'white', padding: '2px 8px', borderRadius: '3px', fontSize: '11px' }}>
                      ⏳
                    </span>
                  ) : (
                    <span>*</span>
                  )}
                </td>
                <td><strong>{record.moduleNo}</strong></td>
                <td>{record.projectName}</td>
                <td>{record.projectNo}</td>
                <td>{record.location}</td>
                <td>{record.drawingNo}</td>
                <td>{record.contractor}</td>
                <td>{record.drawingTitle}</td>
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

export default ViewVisualInspections;
