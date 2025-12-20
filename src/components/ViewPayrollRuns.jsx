import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewPayrollRuns = ({ onViewClick, onNewClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [searchText, setSearchText] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const payrollRuns = [
    {
      id: 'PR-2024-03-001',
      subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
      payrollMonth: 'March 2024',
      payGroup: 'EP & Local',
      cutoffDate: '31-Mar-2024',
      paymentDate: '07-Apr-2024',
      employeeCount: 45,
      status: 'Completed',
      stage: 'Accounts Verified',
      createdBy: 'HR Manager',
      createdDate: '01-Apr-2024'
    },
    {
      id: 'PR-2024-04-001',
      subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
      payrollMonth: 'April 2024',
      payGroup: 'Hourly',
      cutoffDate: '30-Apr-2024',
      paymentDate: '07-May-2024',
      employeeCount: 28,
      status: 'In Progress',
      stage: 'Payroll Review',
      createdBy: 'HR Manager',
      createdDate: '01-May-2024'
    },
    {
      id: 'PR-2024-04-002',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
      payrollMonth: 'April 2024',
      payGroup: 'EP & Local',
      cutoffDate: '30-Apr-2024',
      paymentDate: '07-May-2024',
      employeeCount: 32,
      status: 'In Progress',
      stage: 'Attendance Verification',
      createdBy: 'HR Manager',
      createdDate: '01-May-2024'
    },
    {
      id: 'PR-2024-05-001',
      subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
      payrollMonth: 'May 2024',
      payGroup: 'Both',
      cutoffDate: '31-May-2024',
      paymentDate: '07-Jun-2024',
      employeeCount: 73,
      status: 'Draft',
      stage: 'Created',
      createdBy: 'HR Manager',
      createdDate: '01-Jun-2024'
    }
  ];

  const handleView = (record) => {
    if (onViewClick) onViewClick(record);
  };

  const handleProcess = (record) => {
    showToast(`Processing payroll run ${record.id}...`, 'info');
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Completed': return 'success';
      case 'In Progress': return 'warning';
      case 'Draft': return 'info';
      case 'Cancelled': return 'error';
      default: return 'default';
    }
  };

  const filteredRecords = payrollRuns.filter(record => {
    if (searchText && !record.id.toLowerCase().includes(searchText.toLowerCase()) &&
        !record.subsidiary.toLowerCase().includes(searchText.toLowerCase())) return false;
    if (filterStatus !== 'all' && record.status !== filterStatus) return false;
    return true;
  });

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-calculator"></i>
          <h1>Payroll Runs</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option active">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>STATUS FILTER</label>
          <select 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
            className="form-control"
            style={{ width: '200px' }}
          >
            <option value="all">All Status</option>
            <option value="Draft">Draft</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
        <div className="view-filter">
          <label>SEARCH</label>
          <input 
            type="text" 
            placeholder="Search by ID or subsidiary..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="form-control"
            style={{ width: '300px' }}
          />
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button className="btn-icon" onClick={onNewClick} title="New Payroll Run">
            <i className="fas fa-plus"></i>
            <span>NEW PAYROLL RUN</span>
          </button>
          <button className="btn-icon" title="Export">
            <i className="fas fa-file-excel"></i>
            <span>EXPORT</span>
          </button>
        </div>
        <div className="filter-right-group">
          <div className="list-total">
            Total: {filteredRecords.length} runs
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th>PAYROLL RUN ID</th>
              <th>SUBSIDIARY</th>
              <th>PAYROLL MONTH</th>
              <th>PAY GROUP</th>
              <th>CUTOFF DATE</th>
              <th>PAYMENT DATE</th>
              <th>EMPLOYEES</th>
              <th>CURRENT STAGE</th>
              <th>STATUS</th>
              <th>CREATED BY</th>
              <th>CREATED DATE</th>
              <th>VIEW | PROCESS</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((record) => (
              <tr key={record.id}>
                <td>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handleView(record); }}
                    style={{ color: '#dc2626', textDecoration: 'none', fontWeight: 600 }}
                  >
                    {record.id}
                  </a>
                </td>
                <td>{record.subsidiary}</td>
                <td>{record.payrollMonth}</td>
                <td>{record.payGroup}</td>
                <td>{record.cutoffDate}</td>
                <td>{record.paymentDate}</td>
                <td>{record.employeeCount}</td>
                <td>
                  <span className="status-badge info">
                    {record.stage}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${getStatusBadgeClass(record.status)}`}>
                    {record.status}
                  </span>
                </td>
                <td>{record.createdBy}</td>
                <td>{record.createdDate}</td>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleView(record)}
                  >
                    View
                  </button>
                  {record.status === 'In Progress' && (
                    <>
                      {' | '}
                      <button 
                        className="view-link"
                        onClick={() => handleProcess(record)}
                      >
                        Process
                      </button>
                    </>
                  )}
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

export default ViewPayrollRuns;
