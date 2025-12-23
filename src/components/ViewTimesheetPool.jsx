import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewTimesheetPool = ({ onViewClick, onNewClick, onCorrectClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [searchText, setSearchText] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterDateFrom, setFilterDateFrom] = useState('');
  const [filterDateTo, setFilterDateTo] = useState('');
  const [expandedRows, setExpandedRows] = useState({});
  const [selectedRecords, setSelectedRecords] = useState([]);

  const [timesheetRecords, setTimesheetRecords] = useState([
    {
      id: 1,
      employee: 'TMO008 Natarajan Muruganandham',
      employeeId: 'TMO008',
      date: '10-Mar-2024',
      inDate: '10-Mar-2024',
      outDate: '11-Mar-2024',
      day: 'Sunday',
      shift: '8 AM To 5 PM',
      shiftInTime: '8:00 am',
      shiftOutTime: '5:00 pm',
      firstIn: '08:00',
      lastOut: '01:00',
      normalHours: '8.00',
      ot15Hours: '1.00',
      ot20Hours: '7.00',
      weekendHours: '8.00',
      holidayHours: '0.00',
      status: 'Approved',
      dayType: 'Weekend',
      subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
      attendanceStatus: 'P',
      postingStatus: 'Posted',
      earlyGo: '0',
      lateArrival: '0',
      netWorkingHours: '16.00',
      attendanceRemark: 'Cross-midnight shift',
      detailRecords: [
        {
          project: 'Project A - Marine Fabrication',
          inTime: '08:00',
          outTime: '17:00',
          normalHours: '8.00',
          ot15Hours: '1.00',
          ot20Hours: '0.00'
        },
        {
          project: 'Project B - Offshore Installation',
          inTime: '18:00',
          outTime: '01:00',
          normalHours: '0.00',
          ot15Hours: '0.00',
          ot20Hours: '7.00'
        }
      ]
    },
    {
      id: 2,
      employee: 'TMO015 Kumar Selvam',
      employeeId: 'TMO015',
      date: '10-Mar-2024',
      inDate: '10-Mar-2024',
      outDate: '10-Mar-2024',
      day: 'Sunday',
      shift: '8 AM To 5 PM',
      shiftInTime: '8:00 am',
      shiftOutTime: '5:00 pm',
      firstIn: '08:30',
      lastOut: '17:30',
      normalHours: '8.00',
      ot15Hours: '1.00',
      ot20Hours: '0.00',
      weekendHours: '8.00',
      holidayHours: '0.00',
      status: 'OK',
      dayType: 'Weekend',
      subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
      attendanceStatus: 'P',
      postingStatus: 'Not Posted',
      earlyGo: '0',
      lateArrival: '0',
      netWorkingHours: '9.00',
      attendanceRemark: 'Regular weekend shift',
      detailRecords: [
        {
          project: 'Project A - Marine Fabrication',
          inTime: '08:30',
          outTime: '17:30',
          normalHours: '8.00',
          ot15Hours: '1.00',
          ot20Hours: '0.00'
        }
      ]
    },
    {
      id: 3,
      employee: 'TMO022 Ravi Chandran',
      employeeId: 'TMO022',
      date: '10-Mar-2024',
      inDate: '10-Mar-2024',
      outDate: '10-Mar-2024',
      day: 'Sunday',
      shift: '8 AM To 5 PM',
      shiftInTime: '8:00 am',
      shiftOutTime: '5:00 pm',
      firstIn: '07:45',
      lastOut: '16:00',
      normalHours: '8.00',
      ot15Hours: '0.25',
      ot20Hours: '0.00',
      weekendHours: '8.00',
      holidayHours: '0.00',
      status: 'Missing',
      dayType: 'Weekend',
      subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
      attendanceStatus: 'P',
      postingStatus: 'Not Posted',
      earlyGo: '0',
      lateArrival: '15',
      netWorkingHours: '8.25',
      attendanceRemark: 'Missing project allocation',
      detailRecords: []
    },
    {
      id: 4,
      employee: 'TMO031 Suresh Babu',
      employeeId: 'TMO031',
      date: '10-Mar-2024',
      inDate: '10-Mar-2024',
      outDate: '10-Mar-2024',
      day: 'Sunday',
      shift: '8 AM To 5 PM',
      shiftInTime: '8:00 am',
      shiftOutTime: '5:00 pm',
      firstIn: '08:00',
      lastOut: '17:00',
      normalHours: '8.00',
      ot15Hours: '1.00',
      ot20Hours: '0.00',
      weekendHours: '8.00',
      holidayHours: '0.00',
      status: 'Conflict',
      dayType: 'Weekend',
      subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
      attendanceStatus: 'P',
      postingStatus: 'Not Posted',
      earlyGo: '0',
      lateArrival: '0',
      netWorkingHours: '9.00',
      attendanceRemark: 'Overlapping time entries',
      detailRecords: [
        {
          project: 'Project B - Offshore Installation',
          inTime: '08:00',
          outTime: '17:00',
          normalHours: '8.00',
          ot15Hours: '1.00',
          ot20Hours: '0.00'
        }
      ]
    },
    {
      id: 5,
      employee: 'TMO015 Kumar Selvam',
      employeeId: 'TMO015',
      date: '12-Mar-2024',
      inDate: '12-Mar-2024',
      outDate: '',
      day: 'Tuesday',
      shift: '8 AM To 5 PM',
      shiftInTime: '8:00 am',
      shiftOutTime: '5:00 pm',
      firstIn: '08:00',
      lastOut: '',
      normalHours: '0.00',
      ot15Hours: '0.00',
      ot20Hours: '0.00',
      weekendHours: '0.00',
      holidayHours: '0.00',
      status: 'Missing',
      dayType: 'Weekday',
      subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
      attendanceStatus: '',
      postingStatus: 'Not Posted',
      earlyGo: '',
      lateArrival: '',
      netWorkingHours: '0.00',
      attendanceRemark: 'Missing clock out',
      detailRecords: []
    }
  ]);

  const toggleRowExpansion = (recordId) => {
    setExpandedRows(prev => ({
      ...prev,
      [recordId]: !prev[recordId]
    }));
  };

  const handleApprove = (record) => {
    setTimesheetRecords(prev => prev.map(r => 
      r.id === record.id 
        ? { ...r, status: 'Approved' }
        : r
    ));
    showToast(`Timesheet for ${record.employee} on ${record.date} approved successfully`, 'success');
  };

  const handleBulkApprove = () => {
    if (selectedRecords.length === 0) {
      showToast('Please select records to approve', 'error');
      return;
    }
    setTimesheetRecords(prev => prev.map(r => 
      selectedRecords.includes(r.id)
        ? { ...r, status: 'Approved' }
        : r
    ));
    showToast(`${selectedRecords.length} timesheet(s) approved successfully`, 'success');
    setSelectedRecords([]);
  };

  const handleFetchUpdatedRecords = () => {
    showToast('Fetching updated records from data sources...', 'info');
    
    setTimeout(() => {
      const newRecords = [
        {
          id: Date.now(),
          employee: 'TMO045 Ahmed Hassan',
          employeeId: 'TMO045',
          date: '11-Mar-2024',
          inDate: '11-Mar-2024',
          outDate: '11-Mar-2024',
          day: 'Monday',
          shift: '8 AM To 5 PM',
          shiftInTime: '8:00 am',
          shiftOutTime: '5:00 pm',
          firstIn: '08:15',
          lastOut: '17:30',
          normalHours: '8.00',
          ot15Hours: '1.25',
          ot20Hours: '0.00',
          weekendHours: '0.00',
          holidayHours: '0.00',
          status: 'OK',
          postingStatus: 'Not Posted',
          dayType: 'Weekday',
          subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
          attendanceStatus: 'P',
          earlyGo: '0',
          lateArrival: '15',
          netWorkingHours: '9.25',
          attendanceRemark: 'Auto-fetched from biometric',
          detailRecords: [
            {
              project: 'Project C - Hull Repair',
              inTime: '08:15',
              outTime: '17:30',
              normalHours: '8.00',
              ot15Hours: '1.25',
              ot20Hours: '0.00'
            }
          ]
        },
        {
          id: Date.now() + 1,
          employee: 'TMO052 Tan Wei Ming',
          employeeId: 'TMO052',
          date: '11-Mar-2024',
          inDate: '11-Mar-2024',
          outDate: '11-Mar-2024',
          day: 'Monday',
          shift: '8 AM To 5 PM',
          shiftInTime: '8:00 am',
          shiftOutTime: '5:00 pm',
          firstIn: '08:00',
          lastOut: '18:00',
          normalHours: '8.00',
          ot15Hours: '2.00',
          ot20Hours: '0.00',
          weekendHours: '0.00',
          holidayHours: '0.00',
          status: 'OK',
          postingStatus: 'Not Posted',
          dayType: 'Weekday',
          subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
          attendanceStatus: 'P',
          earlyGo: '0',
          lateArrival: '0',
          netWorkingHours: '10.00',
          attendanceRemark: 'Auto-fetched from biometric',
          detailRecords: [
            {
              project: 'Project D - Piping Installation',
              inTime: '08:00',
              outTime: '18:00',
              normalHours: '8.00',
              ot15Hours: '2.00',
              ot20Hours: '0.00'
            }
          ]
        }
      ];
      
      setTimesheetRecords(prev => [...newRecords, ...prev]);
      showToast(`${newRecords.length} new record(s) fetched successfully`, 'success');
    }, 1500);
  };

  const handleCorrect = (record) => {
    if (onCorrectClick) onCorrectClick(record);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Approved': 
        return { backgroundColor: '#6b7280', color: '#fff', border: '1px solid #4b5563' };
      case 'OK': 
        return { backgroundColor: '#10b981', color: '#fff', border: '1px solid #059669' };
      case 'Missing': 
        return { backgroundColor: '#dc2626', color: '#fff', border: '1px solid #b91c1c' };
      case 'Conflict': 
        return { backgroundColor: '#eab308', color: '#fff', border: '1px solid #ca8a04' };
      default: 
        return { backgroundColor: '#e5e7eb', color: '#374151', border: '1px solid #d1d5db' };
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Approved': return '🔒';
      case 'OK': return '✓';
      case 'Missing': return '✗';
      case 'Conflict': return '⚠';
      default: return '';
    }
  };

  const filteredRecords = timesheetRecords.filter(record => {
    if (searchText && !record.employee.toLowerCase().includes(searchText.toLowerCase()) &&
        !record.employeeId.toLowerCase().includes(searchText.toLowerCase())) return false;
    if (filterStatus !== 'all' && record.status !== filterStatus) return false;
    return true;
  });

  const toggleSelectRecord = (recordId) => {
    setSelectedRecords(prev => 
      prev.includes(recordId) 
        ? prev.filter(id => id !== recordId)
        : [...prev, recordId]
    );
  };

  const toggleSelectAll = () => {
    if (selectedRecords.length === filteredRecords.length) {
      setSelectedRecords([]);
    } else {
      setSelectedRecords(filteredRecords.map(r => r.id));
    }
  };


  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-clock"></i>
          <h1>Timesheet Pool - Daily Consolidated View</h1>
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
            <option value="OK">OK - Ready</option>
            <option value="Approved">Approved - Locked</option>
            <option value="Missing">Missing - Block Payroll</option>
            <option value="Conflict">Conflict - Needs Correction</option>
          </select>
        </div>
        <div className="view-filter">
          <label>DATE FROM</label>
          <input 
            type="date" 
            value={filterDateFrom}
            onChange={(e) => setFilterDateFrom(e.target.value)}
            className="form-control"
            style={{ width: '150px' }}
          />
        </div>
        <div className="view-filter">
          <label>DATE TO</label>
          <input 
            type="date" 
            value={filterDateTo}
            onChange={(e) => setFilterDateTo(e.target.value)}
            className="form-control"
            style={{ width: '150px' }}
          />
        </div>
        <div className="view-filter">
          <label>SEARCH</label>
          <input 
            type="text" 
            placeholder="Employee name or ID..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="form-control"
            style={{ width: '250px' }}
          />
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button 
            className="btn-icon" 
            onClick={handleBulkApprove} 
            title="Approve Selected"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: selectedRecords.length > 0 ? '#059669' : '#6b7280',
              backgroundColor: '#fff',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#f9fafb';
              e.currentTarget.style.borderColor = '#9ca3af';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.borderColor = '#d1d5db';
            }}
          >
            <i className="fas fa-check-circle"></i>
            <span>APPROVE SELECTED ({selectedRecords.length})</span>
          </button>
          <button 
            className="btn-list-action" 
            onClick={handleFetchUpdatedRecords}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#374151',
              backgroundColor: '#fff',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#f9fafb';
              e.currentTarget.style.borderColor = '#9ca3af';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.borderColor = '#d1d5db';
            }}
          >
            <i className="fas fa-sync-alt"></i>
            Fetch Updated Records
          </button>
        </div>
        <div className="filter-right-group">
          <div className="list-total">
            Total: {filteredRecords.length} records
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '40px' }}>
                <input 
                  type="checkbox" 
                  checked={selectedRecords.length === filteredRecords.length && filteredRecords.length > 0}
                  onChange={toggleSelectAll}
                />
              </th>
              <th style={{ width: '50px' }}>Expand</th>
              <th>EMPLOYEE</th>
              <th>EMP ID</th>
              <th>BIOMETRIC NUMBER</th>
              <th>IN DATE</th>
              <th>OUT DATE</th>
              <th>DAY</th>
              <th>SHIFT</th>
              <th>SHIFT IN TIME</th>
              <th>SHIFT OUT TIME</th>
              <th>FIRST IN</th>
              <th>LAST OUT</th>
              <th>NET WORKING HOURS</th>
              <th>EARLY GO</th>
              <th>LATE ARRIVAL</th>
              <th>NORMAL</th>
              <th>OT 1.5X</th>
              <th>OT 2.0X</th>
              <th>WEEKEND HRS</th>
              <th>HOLIDAY HRS</th>
              <th>ATTENDANCE REMARK</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((record) => (
              <React.Fragment key={record.id}>
                <tr className={expandedRows[record.id] ? 'expanded-row' : ''}>
                  <td>
                    <input 
                      type="checkbox" 
                      checked={selectedRecords.includes(record.id)}
                      onChange={() => toggleSelectRecord(record.id)}
                    />
                  </td>
                  <td>
                    <button 
                      className="btn-expand"
                      onClick={() => toggleRowExpansion(record.id)}
                      style={{ 
                        background: 'none', 
                        border: 'none', 
                        cursor: 'pointer',
                        fontSize: '1rem'
                      }}
                    >
                      <i className={`fas fa-chevron-${expandedRows[record.id] ? 'down' : 'right'}`}></i>
                    </button>
                  </td>
                  <td>{record.employee}</td>
                  <td>{record.employeeId}</td>
                  <td>{record.employeeId}</td>
                  <td>{record.inDate}</td>
                  <td>{record.outDate || '-'}</td>
                  <td>
                    <span className={`status-badge ${record.dayType === 'Weekend' ? 'warning' : record.dayType === 'Holiday' ? 'error' : 'info'}`}>
                      {record.day}
                    </span>
                  </td>
                  <td>{record.shift}</td>
                  <td>{record.shiftInTime}</td>
                  <td>{record.shiftOutTime}</td>
                  <td>{record.firstIn}</td>
                  <td>{record.lastOut || '-'}</td>
                  <td>{record.netWorkingHours}</td>
                  <td>{record.earlyGo}</td>
                  <td>{record.lateArrival}</td>
                  <td>{record.normalHours}</td>
                  <td>{record.ot15Hours}</td>
                  <td>{record.ot20Hours}</td>
                  <td>{record.weekendHours}</td>
                  <td>{record.holidayHours}</td>
                  <td>{record.attendanceRemark}</td>
                  <td>
                    <span style={{
                      ...getStatusStyle(record.status),
                      padding: '0.35rem 0.75rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}>
                      {getStatusIcon(record.status)} {record.status}
                    </span>
                  </td>
                  <td>
                    {record.status === 'Approved' ? (
                      <span style={{ 
                        color: '#6b7280', 
                        fontSize: '0.875rem',
                        fontWeight: '500'
                      }}>
                        Locked
                      </span>
                    ) : (
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <button 
                          onClick={() => handleApprove(record)}
                          className="btn-table-action"
                          style={{
                            padding: '5px 10px',
                            fontSize: '0.75rem',
                            fontWeight: '500',
                            color: '#374151',
                            backgroundColor: '#fff',
                            border: '1px solid #d1d5db',
                            borderRadius: '3px',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                            transition: 'all 0.2s'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.backgroundColor = '#f9fafb';
                            e.target.style.borderColor = '#9ca3af';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.backgroundColor = '#fff';
                            e.target.style.borderColor = '#d1d5db';
                          }}
                        >
                          Approve
                        </button>
                        <button 
                          onClick={() => handleCorrect(record)}
                          className="btn-table-action"
                          style={{
                            padding: '5px 10px',
                            fontSize: '0.75rem',
                            fontWeight: '500',
                            color: '#374151',
                            backgroundColor: '#fff',
                            border: '1px solid #d1d5db',
                            borderRadius: '3px',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                            transition: 'all 0.2s'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.backgroundColor = '#f9fafb';
                            e.target.style.borderColor = '#9ca3af';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.backgroundColor = '#fff';
                            e.target.style.borderColor = '#d1d5db';
                          }}
                        >
                          Correct
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
                {expandedRows[record.id] && record.detailRecords.length > 0 && (
                  <tr className="detail-row">
                    <td colSpan="13">
                      <div style={{ padding: '1rem', background: '#f8f9fa' }}>
                        <h4 style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: '#4a5568' }}>
                          Work Sessions - {record.employee} - {record.date}
                        </h4>
                        <table style={{ width: '100%', fontSize: '0.85rem' }}>
                          <thead>
                            <tr style={{ background: '#e2e8f0' }}>
                              <th style={{ padding: '0.5rem', textAlign: 'left' }}>PROJECT</th>
                              <th style={{ padding: '0.5rem', textAlign: 'left' }}>IN TIME</th>
                              <th style={{ padding: '0.5rem', textAlign: 'left' }}>OUT TIME</th>
                              <th style={{ padding: '0.5rem', textAlign: 'left' }}>NORMAL</th>
                              <th style={{ padding: '0.5rem', textAlign: 'left' }}>OT 1.5X</th>
                              <th style={{ padding: '0.5rem', textAlign: 'left' }}>OT 2.0X</th>
                            </tr>
                          </thead>
                          <tbody>
                            {record.detailRecords.map((detail, idx) => (
                              <tr key={idx} style={{ borderBottom: '1px solid #e2e8f0' }}>
                                <td style={{ padding: '0.5rem' }}>{detail.project}</td>
                                <td style={{ padding: '0.5rem' }}>{detail.inTime}</td>
                                <td style={{ padding: '0.5rem' }}>{detail.outTime}</td>
                                <td style={{ padding: '0.5rem' }}>{detail.normalHours}</td>
                                <td style={{ padding: '0.5rem' }}>{detail.ot15Hours}</td>
                                <td style={{ padding: '0.5rem' }}>{detail.ot20Hours}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
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

export default ViewTimesheetPool;
