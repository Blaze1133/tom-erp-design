import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewDimensionalInspections = ({ setCurrentPage, onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');
  const [selectedRecords, setSelectedRecords] = useState([]);

  const [records] = useState([
    {
      id: 1,
      moduleNo: 'SANYU-CHWP-001',
      projectName: '24-00221-YSE-Project Sanyu',
      projectNo: '24-00221',
      itpNo: 'TOM-YSE-2024-ITP-02021',
      contractor: 'Tech Onshore Mep Prefabricators Pte Ltd',
      productDescription: 'CHWP PUMP SKID - FABRICATION',
      reportNo: 'TOM-YSE-2024-00221-DIR-001',
      status: 'COMPLETED'
    },
    {
      id: 2,
      moduleNo: 'SANYU-CHWP-002',
      projectName: '24-00221-YSE-Project Sanyu',
      projectNo: '24-00221',
      itpNo: 'TOM-YSE-2024-ITP-02022',
      contractor: 'Tech Marine Offshore Pte Ltd',
      productDescription: 'CHWP PUMP SKID - ASSEMBLY',
      reportNo: 'TOM-YSE-2024-00221-DIR-002',
      status: 'IN PROGRESS'
    },
    {
      id: 3,
      moduleNo: 'SANYU-CHWP-003',
      projectName: '24-00221-YSE-Project Sanyu',
      projectNo: '24-00221',
      itpNo: 'TOM-YSE-2024-ITP-02023',
      contractor: 'Universal Alloy & Steel Pte Ltd',
      productDescription: 'CHWP PUMP SKID - TESTING',
      reportNo: 'TOM-YSE-2024-00221-DIR-003',
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
          <i className="fas fa-ruler-combined" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>All Dimensional Inspections</h1>
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
          <i className="fas fa-plus"></i> New Dimensional Inspection
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
              <th>ITP NO</th>
              <th>CONTRACTOR</th>
              <th>PRODUCT DESCRIPTION</th>
              <th>REPORT NO</th>
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
                <td>{record.itpNo}</td>
                <td>{record.contractor}</td>
                <td>{record.productDescription}</td>
                <td className="doc-number">{record.reportNo}</td>
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

export default ViewDimensionalInspections;
