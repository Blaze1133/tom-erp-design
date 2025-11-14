import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewYardData = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState({
    dateFrom: '',
    dateTo: '',
    project: '',
    status: 'All',
    shiftType: 'All'
  });

  const [yardDataRecords] = useState([
    {
      id: 1,
      employeeName: 'John Doe',
      employeeId: 'EMP001',
      companyName: 'Tech Onshore MEP Prefabricators Pte Ltd',
      workPermitNo: 'WP123456',
      finNo: 'F1234567A',
      dateIn: '2025-04-01',
      dateOut: '2025-04-01',
      timeIn: '08:00',
      timeOut: '18:00',
      project: '20-0052 Fortis Construction Pte. Ltd',
      shiftType: 'Day',
      recordType: 'In',
      status: 'Posted'
    },
    {
      id: 2,
      employeeName: 'Sarah Lee',
      employeeId: 'EMP003',
      companyName: 'TOM Offshore Marine Engineering Pte Ltd',
      workPermitNo: 'WP345678',
      finNo: 'F3456789C',
      dateIn: '2025-04-01',
      dateOut: '2025-04-01',
      timeIn: '20:00',
      timeOut: '06:00',
      project: '22-0134 Sentosa Development',
      shiftType: 'Night',
      recordType: 'In',
      status: 'Not Posted'
    },
    {
      id: 3,
      employeeName: 'Michael Chen',
      employeeId: 'EMP004',
      companyName: 'Tech Onshore MEP Prefabricators Pte Ltd',
      workPermitNo: 'WP456789',
      finNo: 'F4567890D',
      dateIn: '2025-04-02',
      dateOut: '2025-04-02',
      timeIn: '08:00',
      timeOut: '17:00',
      project: '20-0052 Fortis Construction Pte. Ltd',
      shiftType: 'Day',
      recordType: 'In',
      status: 'Posted'
    },
    {
      id: 4,
      employeeName: 'Raj Kumar',
      employeeId: 'EMP005',
      companyName: 'Tech Marine Offshore (S) Pte Ltd',
      workPermitNo: 'WP567890',
      finNo: 'F5678901E',
      dateIn: '2025-04-02',
      dateOut: '2025-04-02',
      timeIn: '08:30',
      timeOut: '18:30',
      project: '21-0089 Marina Bay Project',
      shiftType: 'Day',
      recordType: 'In',
      status: 'Not Posted'
    },
    {
      id: 5,
      employeeName: 'David Tan',
      employeeId: 'EMP006',
      companyName: 'TOM Shipyard Pte Ltd',
      workPermitNo: 'WP678901',
      finNo: 'F6789012F',
      dateIn: '2025-04-03',
      dateOut: '2025-04-03',
      timeIn: '20:00',
      timeOut: '05:00',
      project: '22-0134 Sentosa Development',
      shiftType: 'Night',
      recordType: 'In',
      status: 'Posted'
    }
  ]);

  const projects = [
    'All',
    '20-0052 Fortis Construction Pte. Ltd',
    '21-0089 Marina Bay Project',
    '22-0134 Sentosa Development'
  ];

  const statuses = ['All', 'Posted', 'Not Posted'];
  const shiftTypes = ['All', 'Day', 'Night'];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleView = (record) => {
    if (onViewClick) {
      onViewClick(record);
    }
  };

  const handleEdit = (record) => {
    if (onEditClick) {
      onEditClick(record);
    }
  };

  const handleDelete = (record) => {
    if (window.confirm(`Are you sure you want to delete the record for ${record.employeeName}?`)) {
      showToast('Record deleted successfully', 'success');
    }
  };

  const handlePost = (record) => {
    if (record.status === 'Posted') {
      showToast('Record is already posted', 'info');
    } else {
      showToast(`Record for ${record.employeeName} posted successfully`, 'success');
    }
  };

  const filteredRecords = yardDataRecords.filter(record => {
    if (filters.project !== '' && filters.project !== 'All' && record.project !== filters.project) return false;
    if (filters.status !== 'All' && record.status !== filters.status) return false;
    if (filters.shiftType !== 'All' && record.shiftType !== filters.shiftType) return false;
    if (searchText && !record.employeeName.toLowerCase().includes(searchText.toLowerCase()) &&
        !record.employeeId.toLowerCase().includes(searchText.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-list"></i>
          <h1>Yard Data Records</h1>
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
            value={viewFilter} 
            onChange={(e) => setViewFilter(e.target.value)}
            className="form-control"
            style={{ width: '250px' }}
          >
            <option value="all">All</option>
            <option value="posted">Posted</option>
            <option value="not-posted">Not Posted</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={onNewClick}>
            <i className="fas fa-plus"></i>
            Import New Data
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
              <option>All Records</option>
              <option>Posted</option>
              <option>Not Posted</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {filteredRecords.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '5%' }}>EDIT | VIEW</th>
              <th style={{ width: '10%' }}>EMPLOYEE NAME</th>
              <th style={{ width: '8%' }}>EMPLOYEE ID</th>
              <th style={{ width: '15%' }}>COMPANY NAME</th>
              <th style={{ width: '8%' }}>WORK PERMIT NO</th>
              <th style={{ width: '8%' }}>FIN NO</th>
              <th style={{ width: '7%' }}>DATE IN</th>
              <th style={{ width: '7%' }}>DATE OUT</th>
              <th style={{ width: '6%' }}>TIME IN</th>
              <th style={{ width: '6%' }}>TIME OUT</th>
              <th style={{ width: '12%' }}>PROJECT</th>
              <th style={{ width: '6%' }}>SHIFT TYPE</th>
              <th style={{ width: '6%' }}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((record) => (
              <tr key={record.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEdit(record)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleView(record)}
                  >
                    View
                  </button>
                </td>
                <td>{record.employeeName}</td>
                <td>{record.employeeId}</td>
                <td>{record.companyName}</td>
                <td>{record.workPermitNo}</td>
                <td>{record.finNo}</td>
                <td>{record.dateIn}</td>
                <td>{record.dateOut}</td>
                <td>{record.timeIn}</td>
                <td>{record.timeOut}</td>
                <td>{record.project}</td>
                <td>{record.shiftType}</td>
                <td>{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
    </div>
  );
};

export default ViewYardData;
