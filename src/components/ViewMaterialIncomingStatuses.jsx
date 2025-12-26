import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewMaterialIncomingStatuses = ({ setCurrentPage, onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');
  const [selectedRecords, setSelectedRecords] = useState([]);

  const [records] = useState([
    {
      id: 1,
      reportNo: 'TOM-YSE-2024-0002-IIR-001.01A.01B',
      moduleNo: 'SANYU-CHWP-01',
      poNo: 'PO/TOM/66882.00956.06968',
      reportDate: '24/07/2024',
      client: 'YSE',
      projectName: '24-0002/1 YSE Project Sanyu',
      drawingNumber: 'DWG-001-2024',
      status: 'COMPLETED'
    },
    {
      id: 2,
      reportNo: 'TOM-YSE-2024-0002-IIR-002.01A.01B',
      moduleNo: 'SANYU-CHWP-02',
      poNo: 'PO/TOM/66882.00956.06969',
      reportDate: '25/07/2024',
      client: 'YSE',
      projectName: '24-0002/1 YSE Project Sanyu',
      drawingNumber: 'DWG-002-2024',
      status: 'IN PROGRESS'
    },
    {
      id: 3,
      reportNo: 'TOM-YSE-2024-0002-IIR-003.01A.01B',
      moduleNo: 'SANYU-CHWP-03',
      poNo: 'PO/TOM/66882.00956.06970',
      reportDate: '26/07/2024',
      client: 'YSE',
      projectName: '24-0002/1 YSE Project Sanyu',
      drawingNumber: 'DWG-003-2024',
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
          <i className="fas fa-clipboard-check" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Material Incoming Status - All Records</h1>
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
          <i className="fas fa-plus"></i> New Material Incoming Status
        </button>
      </div>

      <div className="list-filters">
        <div className="list-sort">
          <label>QUICK SORT:</label>
          <select className="form-control">
            <option>Report Date</option>
            <option>Module No</option>
            <option>Client</option>
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
              <th>REPORT NO</th>
              <th>MODULE NO</th>
              <th>PO NO</th>
              <th>REPORT DATE</th>
              <th>CLIENT</th>
              <th>PROJECT NAME</th>
              <th>DRAWING NUMBER</th>
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
                <td className="doc-number">{record.reportNo}</td>
                <td><strong>{record.moduleNo}</strong></td>
                <td>{record.poNo}</td>
                <td>{record.reportDate}</td>
                <td>{record.client}</td>
                <td>{record.projectName}</td>
                <td>{record.drawingNumber}</td>
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

export default ViewMaterialIncomingStatuses;
