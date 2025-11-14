import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewBiometricData = ({ onNewClick, onViewClick, onEditClick }) => {
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

  const [biometricRecords] = useState([
    {
      id: 1,
      employeeName: 'John Doe',
      employeeId: 'EMP001',
      companyName: 'Tech Onshore MEP Prefabricators Pte Ltd',
      workPermitNo: 'WP123456',
      finNo: 'F1234567A',
      dateIn: '2025-04-05',
      dateOut: '2025-04-05',
      timeIn: '08:00',
      timeOut: '18:00',
      deviceInTime: '07:58:23',
      deviceOutTime: '18:02:15',
      project: '20-0052 Fortis Construction Pte. Ltd',
      shiftType: 'Day',
      remarks: '',
      status: 'Posted'
    },
    {
      id: 2,
      employeeName: 'Sarah Lee',
      employeeId: 'EMP003',
      companyName: 'TOM Offshore Marine Engineering Pte Ltd',
      workPermitNo: 'WP345678',
      finNo: 'F3456789C',
      dateIn: '2025-04-05',
      dateOut: '2025-04-05',
      timeIn: '20:00',
      timeOut: '06:00',
      deviceInTime: '19:55:10',
      deviceOutTime: '06:05:30',
      project: '22-0134 Sentosa Development',
      shiftType: 'Night',
      remarks: '',
      status: 'Not Posted'
    },
    {
      id: 3,
      employeeName: 'Michael Chen',
      employeeId: 'EMP004',
      companyName: 'Tech Onshore MEP Prefabricators Pte Ltd',
      workPermitNo: 'WP456789',
      finNo: 'F4567890D',
      dateIn: '2025-04-05',
      dateOut: '2025-04-05',
      timeIn: '08:00',
      timeOut: '17:00',
      deviceInTime: '08:05:45',
      deviceOutTime: '17:10:20',
      project: '20-0052 Fortis Construction Pte. Ltd',
      shiftType: 'Day',
      remarks: 'Late arrival',
      status: 'Posted'
    }
  ]);

  const projects = ['All', '20-0052 Fortis Construction Pte. Ltd', '21-0089 Marina Bay Project', '22-0134 Sentosa Development'];
  const statuses = ['All', 'Posted', 'Not Posted'];
  const shiftTypes = ['All', 'Day', 'Night'];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleView = (record) => {
    if (onViewClick) onViewClick(record);
  };

  const handleEdit = (record) => {
    if (onEditClick) onEditClick(record);
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

  const filteredRecords = biometricRecords.filter(record => {
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
          <i className="fas fa-fingerprint"></i>
          <h1>Biometric Data Records</h1>
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
            <i className="fas fa-sync"></i>
            Sync from Biometric
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
              <th style={{ width: '12%' }}>EMPLOYEE NAME</th>
              <th style={{ width: '8%' }}>EMPLOYEE ID</th>
              <th style={{ width: '8%' }}>DATE IN</th>
              <th style={{ width: '6%' }}>TIME IN</th>
              <th style={{ width: '6%' }}>TIME OUT</th>
              <th style={{ width: '8%' }}>DEVICE IN</th>
              <th style={{ width: '8%' }}>DEVICE OUT</th>
              <th style={{ width: '15%' }}>PROJECT</th>
              <th style={{ width: '8%' }}>SHIFT TYPE</th>
              <th style={{ width: '10%' }}>REMARKS</th>
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
                <td>{record.dateIn}</td>
                <td>{record.timeIn}</td>
                <td>{record.timeOut}</td>
                <td>{record.deviceInTime}</td>
                <td>{record.deviceOutTime}</td>
                <td>{record.project}</td>
                <td>{record.shiftType}</td>
                <td>{record.remarks || '-'}</td>
                <td>{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {toast.show && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
      )}
    </div>
  );
};

export default ViewBiometricData;
