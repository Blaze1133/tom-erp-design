import React, { useState, useEffect } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewPlantModules = ({ setCurrentPage, onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');
  const [selectedRecords, setSelectedRecords] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Load plant modules from localStorage
    const savedModules = JSON.parse(localStorage.getItem('plantModules') || '[]');
    
    // If no modules exist, create default ones
    if (savedModules.length === 0) {
      const defaultModules = [
        {
          id: 1,
          moduleNo: 'SANYU-CHWP-001',
          materialIncomingStatus: 'Not Complete',
          materialIncomingDate: '',
          dimensionalInspectionStatus: 'Not Complete',
          dimensionalInspectionDate: '',
          fitUpStatus: 'Not Complete',
          fitUpDate: ''
        },
        {
          id: 2,
          moduleNo: 'SANYU-CHWP-001',
          materialIncomingStatus: 'Completed',
          materialIncomingDate: '2024-07-24',
          dimensionalInspectionStatus: 'Completed',
          dimensionalInspectionDate: '2024-07-22',
          fitUpStatus: 'Completed',
          fitUpDate: '2024-07-22'
        },
        {
          id: 3,
          moduleNo: 'SANYU-CHWP-001',
          materialIncomingStatus: 'Completed',
          materialIncomingDate: '',
          dimensionalInspectionStatus: 'Completed',
          dimensionalInspectionDate: '',
          fitUpStatus: 'Completed',
          fitUpDate: ''
        }
      ];
      setRecords(defaultModules);
    } else {
      setRecords(savedModules);
    }
  }, []);

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
      setSelectedRecords(records.map(r => r.id || r.moduleNo));
    } else {
      setSelectedRecords([]);
    }
  };

  const handleEdit = (record) => {
    if (onEditClick) {
      onEditClick(record);
    } else {
      setCurrentPage('plant-module');
    }
  };

  const handleView = (record) => {
    if (onViewClick) {
      onViewClick(record);
    } else {
      setCurrentPage('plant-module');
    }
  };

  const handleNewRecord = () => {
    if (onNewClick) {
      onNewClick();
    } else {
      setCurrentPage('plant-module');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-industry" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>All Plant Modules</h1>
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
            <option value="not-complete">Not Complete</option>
          </select>
        </div>
        <button className="btn-new-transaction" onClick={handleNewRecord}>
          <i className="fas fa-plus"></i> New Plant Module
        </button>
      </div>

      <div className="list-filters">
        <div className="list-sort">
          <label>QUICK SORT:</label>
          <select className="form-control">
            <option>Module No</option>
            <option>Material Incoming Status</option>
            <option>Dimensional Inspection Status</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {records.length}
        </div>
      </div>

      <div className="enquiries-table-container">
        <div style={{ overflowX: 'auto' }}>
          <table className="enquiries-table" style={{ minWidth: '1800px' }}>
            <thead>
              <tr>
                <th style={{ minWidth: '50px' }}>
                  <input 
                    type="checkbox" 
                    onChange={handleSelectAll}
                    checked={selectedRecords.length === records.length && records.length > 0}
                  />
                </th>
                <th style={{ minWidth: '150px' }}>MODULE NO</th>
                <th style={{ minWidth: '180px' }}>MATERIAL INCOMING STATUS</th>
                <th style={{ minWidth: '180px' }}>MATERIAL INCOMING DATE</th>
                <th style={{ minWidth: '200px' }}>DIMENSIONAL INSPECTION STATUS</th>
                <th style={{ minWidth: '200px' }}>DIMENSIONAL INSPECTION DATE</th>
                <th style={{ minWidth: '150px' }}>FIT UP STATUS</th>
                <th style={{ minWidth: '150px' }}>FIT UP DATE</th>
              </tr>
            </thead>
            <tbody>
              {records.length === 0 ? (
                <tr>
                  <td colSpan="8" style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                    No plant modules found. Create a new module.
                  </td>
                </tr>
              ) : (
                records.map((record, index) => (
                  <tr key={record.id || index}>
                    <td>
                      <input 
                        type="checkbox" 
                        checked={selectedRecords.includes(record.id || record.moduleNo)}
                        onChange={() => handleSelectRecord(record.id || record.moduleNo)}
                      />
                    </td>
                    <td>
                      <button 
                        className="view-link"
                        onClick={() => handleEdit(record)}
                        style={{ fontWeight: '600' }}
                      >
                        {record.moduleNo}
                      </button>
                    </td>
                    <td>
                      <span style={{ 
                        color: record.materialIncomingStatus === 'Completed' ? '#059669' : 
                               record.materialIncomingStatus === 'Not Complete' ? '#dc2626' : '#64748b',
                        fontWeight: '500'
                      }}>
                        {record.materialIncomingStatus || '-'}
                      </span>
                    </td>
                    <td>{record.materialIncomingDate || '-'}</td>
                    <td>
                      <span style={{ 
                        color: record.dimensionalInspectionStatus === 'Completed' ? '#059669' : 
                               record.dimensionalInspectionStatus === 'Not Complete' ? '#dc2626' : '#64748b',
                        fontWeight: '500'
                      }}>
                        {record.dimensionalInspectionStatus || '-'}
                      </span>
                    </td>
                    <td>{record.dimensionalInspectionDate || '-'}</td>
                    <td>
                      <span style={{ 
                        color: record.fitUpStatus === 'Completed' ? '#059669' : 
                               record.fitUpStatus === 'Not Complete' ? '#dc2626' : '#64748b',
                        fontWeight: '500'
                      }}>
                        {record.fitUpStatus || '-'}
                      </span>
                    </td>
                    <td>{record.fitUpDate || '-'}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
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

export default ViewPlantModules;
