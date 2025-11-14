import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateBiometricData = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [syncStep, setSyncStep] = useState('sync'); // sync, validate, adjust, preview
  const [biometricData, setBiometricData] = useState([]);
  const [selectedRecords, setSelectedRecords] = useState([]);
  const [bulkProject, setBulkProject] = useState('');
  const [bulkShift, setBulkShift] = useState('');

  const projects = [
    '20-0052 Fortis Construction Pte. Ltd',
    '21-0089 Marina Bay Project',
    '22-0134 Sentosa Development'
  ];

  const shiftTypes = ['Day', 'Night'];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleSyncFromBiometric = () => {
    showToast('Connecting to biometric system...', 'info');
    
    // Simulate API call to biometric system
    setTimeout(() => {
      const mockData = [
        {
          id: 1,
          employeeName: 'John Doe',
          employeeId: 'EMP001',
          companyName: 'Tech Onshore MEP Prefabricators Pte Ltd',
          workPermitNo: 'WP123456',
          finNo: 'F1234567A',
          dateIn: '2025-04-05',
          dateOut: '2025-04-05',
          deviceInTime: '07:58:23',
          deviceOutTime: '18:02:15',
          timeIn: '08:00',
          timeOut: '18:00',
          project: '',
          shiftType: '',
          remarks: '',
          status: 'Not Posted',
          validated: true
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
          deviceInTime: '19:55:10',
          deviceOutTime: '06:05:30',
          timeIn: '20:00',
          timeOut: '06:00',
          project: '',
          shiftType: '',
          remarks: '',
          status: 'Not Posted',
          validated: true
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
          deviceInTime: '08:05:45',
          deviceOutTime: '17:10:20',
          timeIn: '08:00',
          timeOut: '17:00',
          project: '',
          shiftType: '',
          remarks: '',
          status: 'Not Posted',
          validated: true
        },
        {
          id: 4,
          employeeName: 'Unknown Employee',
          employeeId: 'UNKNOWN',
          companyName: '',
          workPermitNo: '',
          finNo: 'F9999999Z',
          dateIn: '2025-04-05',
          dateOut: '2025-04-05',
          deviceInTime: '08:15:00',
          deviceOutTime: '17:00:00',
          timeIn: '08:15',
          timeOut: '17:00',
          project: '',
          shiftType: '',
          remarks: 'Employee not found in master',
          status: 'Not Posted',
          validated: false
        }
      ];

      setBiometricData(mockData);
      setSyncStep('validate');
      showToast(`Successfully synced ${mockData.length} records from biometric system`, 'success');
    }, 2000);
  };

  const handleProceedToAdjust = () => {
    setSyncStep('adjust');
  };

  const handleSelectRecord = (recordId) => {
    setSelectedRecords(prev => {
      if (prev.includes(recordId)) {
        return prev.filter(id => id !== recordId);
      } else {
        return [...prev, recordId];
      }
    });
  };

  const handleSelectAll = () => {
    if (selectedRecords.length === biometricData.filter(r => r.validated).length) {
      setSelectedRecords([]);
    } else {
      setSelectedRecords(biometricData.filter(r => r.validated).map(r => r.id));
    }
  };

  const handleBulkUpdateProject = () => {
    if (selectedRecords.length === 0) {
      showToast('Please select at least one record', 'warning');
      return;
    }
    if (!bulkProject) {
      showToast('Please select a project', 'warning');
      return;
    }

    setBiometricData(prev => prev.map(record => {
      if (selectedRecords.includes(record.id)) {
        return { ...record, project: bulkProject };
      }
      return record;
    }));

    showToast(`Project updated for ${selectedRecords.length} record(s)`, 'success');
    setSelectedRecords([]);
    setBulkProject('');
  };

  const handleBulkUpdateShift = () => {
    if (selectedRecords.length === 0) {
      showToast('Please select at least one record', 'warning');
      return;
    }
    if (!bulkShift) {
      showToast('Please select a shift type', 'warning');
      return;
    }

    setBiometricData(prev => prev.map(record => {
      if (selectedRecords.includes(record.id)) {
        return { ...record, shiftType: bulkShift };
      }
      return record;
    }));

    showToast(`Shift type updated for ${selectedRecords.length} record(s)`, 'success');
    setSelectedRecords([]);
    setBulkShift('');
  };

  const handleIndividualUpdate = (recordId, field, value) => {
    setBiometricData(prev => prev.map(record => {
      if (record.id === recordId) {
        return { ...record, [field]: value };
      }
      return record;
    }));
  };

  const handlePreview = () => {
    const validRecords = biometricData.filter(r => r.validated && r.project && r.shiftType);
    if (validRecords.length === 0) {
      showToast('Please assign project and shift type to at least one record', 'warning');
      return;
    }
    setSyncStep('preview');
  };

  const handleSubmit = () => {
    const validRecords = biometricData.filter(r => r.validated && r.project && r.shiftType);
    showToast(`Successfully imported ${validRecords.length} biometric records`, 'success');
    
    // Reset form
    setTimeout(() => {
      setBiometricData([]);
      setSelectedRecords([]);
      setSyncStep('sync');
    }, 2000);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      setBiometricData([]);
      setSelectedRecords([]);
      setSyncStep('sync');
      showToast('Import cancelled', 'info');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-fingerprint"></i>
          <h1>Biometric Data Preparation</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>STEP</label>
          <select className="form-control" style={{ width: '250px' }} value={syncStep} disabled>
            <option value="sync">Sync from Biometric</option>
            <option value="validate">Validation</option>
            <option value="adjust">Adjust & Verify</option>
            <option value="preview">Preview</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-secondary" onClick={handleCancel} style={{ marginRight: '10px' }}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          {syncStep === 'preview' && (
            <button className="btn btn-primary" onClick={handleSubmit}>
              <i className="fas fa-check"></i>
              Submit
            </button>
          )}
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
            </select>
          </div>
          <div className="list-total">
            TOTAL: {biometricData.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container" style={{ padding: '30px' }}>
        {/* Sync Step */}
        {syncStep === 'sync' && (
          <div>
            <div className="form-section">
              <h2 className="section-title">Pull Data from Biometric System</h2>
              <p className="section-subtitle">Connect to biometric device/server via API</p>
            </div>
            <div className="upload-zone">
              <i className="fas fa-fingerprint" style={{ fontSize: '64px', color: '#2196F3', marginBottom: '20px', display: 'block' }}></i>
              <h3>Biometric System Integration</h3>
              <p style={{ marginBottom: '30px', color: '#666' }}>
                Click the button below to fetch attendance records from the biometric system
              </p>
              <button className="btn btn-primary" onClick={handleSyncFromBiometric} style={{ fontSize: '16px', padding: '12px 30px' }}>
                <i className="fas fa-sync"></i>
                Sync from Biometric System
              </button>
            </div>
            
            <div className="info-box info">
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <i className="fas fa-info-circle" style={{ marginRight: '15px', marginTop: '3px' }}></i>
                <div>
                  <strong>What happens during sync:</strong>
                  <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                    <li>Connects to biometric device/server via secure API</li>
                    <li>Fetches new attendance records since last sync</li>
                    <li>Includes: Employee ID, Timestamp, Swipe Type (In/Out)</li>
                    <li>Validates against Employee Master Table</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Validate Step */}
        {syncStep === 'validate' && (
          <div>
            <div className="form-section">
              <h2 className="section-title">Validation Results</h2>
              <p className="section-subtitle">
                {biometricData.filter(r => r.validated).length} valid / {biometricData.length} total records
              </p>
            </div>
            {biometricData.filter(r => !r.validated).length > 0 && (
              <div className="info-box error">
                <i className="fas fa-exclamation-triangle" style={{ marginRight: '10px' }}></i>
                <span>{biometricData.filter(r => !r.validated).length} record(s) flagged for review</span>
              </div>
            )}

            <div style={{ marginTop: '20px' }}>
              <table className="enquiries-table">
                <thead>
                  <tr>
                    <th>STATUS</th>
                    <th>EMPLOYEE NAME</th>
                    <th>EMPLOYEE ID</th>
                    <th>FIN NO</th>
                    <th>DATE IN</th>
                    <th>DEVICE IN TIME</th>
                    <th>DEVICE OUT TIME</th>
                    <th>REMARKS</th>
                  </tr>
                </thead>
                <tbody>
                  {biometricData.map((record) => (
                    <tr key={record.id} style={{ background: record.validated ? 'transparent' : '#ffebee' }}>
                      <td>
                        {record.validated ? (
                          <i className="fas fa-check-circle" style={{ color: '#4caf50' }}></i>
                        ) : (
                          <i className="fas fa-times-circle" style={{ color: '#f44336' }}></i>
                        )}
                      </td>
                      <td>{record.employeeName}</td>
                      <td>{record.employeeId}</td>
                      <td>{record.finNo}</td>
                      <td>{record.dateIn}</td>
                      <td>{record.deviceInTime}</td>
                      <td>{record.deviceOutTime}</td>
                      <td style={{ color: record.validated ? '#666' : '#f44336' }}>
                        {record.remarks || '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button className="btn btn-primary" onClick={handleProceedToAdjust}>
                <i className="fas fa-arrow-right"></i>
                Proceed to Adjust
              </button>
            </div>
          </div>
        )}

        {/* Adjust Step */}
        {syncStep === 'adjust' && (
          <div>
            <div className="form-section">
              <h2 className="section-title">User Adjustment & Verification</h2>
              <p className="section-subtitle">Assign project and shift type to records</p>
            </div>
              {/* Bulk Update Section */}
              <div className="bulk-update-section" style={{ 
                background: '#f5f5f5', 
                padding: '20px', 
                borderRadius: '4px', 
                marginBottom: '20px' 
              }}>
                <h3 style={{ marginBottom: '15px' }}>Bulk Update</h3>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-end' }}>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label>Select Project</label>
                    <select
                      value={bulkProject}
                      onChange={(e) => setBulkProject(e.target.value)}
                      className="form-input"
                    >
                      <option value="">Choose Project</option>
                      {projects.map((project, index) => (
                        <option key={index} value={project}>{project}</option>
                      ))}
                    </select>
                  </div>
                  <button className="btn-primary" onClick={handleBulkUpdateProject}>
                    <i className="fas fa-tasks"></i>
                    Update Project for Selected
                  </button>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label>Select Shift Type</label>
                    <select
                      value={bulkShift}
                      onChange={(e) => setBulkShift(e.target.value)}
                      className="form-input"
                    >
                      <option value="">Choose Shift</option>
                      {shiftTypes.map((shift, index) => (
                        <option key={index} value={shift}>{shift}</option>
                      ))}
                    </select>
                  </div>
                  <button className="btn-primary" onClick={handleBulkUpdateShift}>
                    <i className="fas fa-clock"></i>
                    Update Shift for Selected
                  </button>
                </div>
              </div>

              <div style={{ marginTop: '20px' }}>
                <table className="enquiries-table">
                <thead>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        checked={selectedRecords.length === biometricData.filter(r => r.validated).length}
                        onChange={handleSelectAll}
                      />
                    </th>
                    <th>EMPLOYEE NAME</th>
                    <th>EMPLOYEE ID</th>
                    <th>DATE IN</th>
                    <th>TIME IN</th>
                    <th>TIME OUT</th>
                    <th>PROJECT</th>
                    <th>SHIFT TYPE</th>
                    <th>REMARKS</th>
                  </tr>
                </thead>
                  <tbody>
                    {biometricData.filter(r => r.validated).map((record) => (
                      <tr key={record.id}>
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedRecords.includes(record.id)}
                            onChange={() => handleSelectRecord(record.id)}
                          />
                        </td>
                        <td>{record.employeeName}</td>
                        <td>{record.employeeId}</td>
                        <td>{record.dateIn}</td>
                        <td>{record.timeIn}</td>
                        <td>{record.timeOut}</td>
                        <td>
                          <select
                            value={record.project}
                            onChange={(e) => handleIndividualUpdate(record.id, 'project', e.target.value)}
                            className="form-input"
                            style={{ minWidth: '200px' }}
                          >
                            <option value="">Select Project</option>
                            {projects.map((project, index) => (
                              <option key={index} value={project}>{project}</option>
                            ))}
                          </select>
                        </td>
                        <td>
                          <select
                            value={record.shiftType}
                            onChange={(e) => handleIndividualUpdate(record.id, 'shiftType', e.target.value)}
                            className="form-input"
                          >
                            <option value="">Select Shift</option>
                            {shiftTypes.map((shift, index) => (
                              <option key={index} value={shift}>{shift}</option>
                            ))}
                          </select>
                        </td>
                        <td>
                          <input
                            type="text"
                            value={record.remarks}
                            onChange={(e) => handleIndividualUpdate(record.id, 'remarks', e.target.value)}
                            className="form-input"
                            placeholder="Add remarks..."
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button className="btn btn-primary" onClick={handlePreview}>
                <i className="fas fa-eye"></i>
                Preview Before Submit
              </button>
            </div>
          </div>
        )}

        {/* Preview Step */}
        {syncStep === 'preview' && (
          <div>
            <div className="form-section">
              <h2 className="section-title">Preview Before Insert</h2>
              <p className="section-subtitle">Final review before database insertion</p>
            </div>
            <div className="info-box success">
              <i className="fas fa-check-circle" style={{ marginRight: '10px' }}></i>
              <span>
                {biometricData.filter(r => r.validated && r.project && r.shiftType).length} records ready for submission
              </span>
            </div>

            <div style={{ marginTop: '20px' }}>
              <table className="enquiries-table">
                <thead>
                  <tr>
                    <th>EMPLOYEE NAME</th>
                    <th>EMPLOYEE ID</th>
                    <th>COMPANY NAME</th>
                    <th>WORK PERMIT NO</th>
                    <th>FIN NO</th>
                    <th>DATE IN</th>
                    <th>DATE OUT</th>
                    <th>TIME IN</th>
                    <th>TIME OUT</th>
                    <th>DEVICE IN</th>
                    <th>DEVICE OUT</th>
                    <th>PROJECT</th>
                    <th>SHIFT TYPE</th>
                    <th>REMARKS</th>
                  </tr>
                </thead>
                <tbody>
                  {biometricData.filter(r => r.validated && r.project && r.shiftType).map((record) => (
                    <tr key={record.id}>
                      <td>{record.employeeName}</td>
                      <td>{record.employeeId}</td>
                      <td>{record.companyName}</td>
                      <td>{record.workPermitNo}</td>
                      <td>{record.finNo}</td>
                      <td>{record.dateIn}</td>
                      <td>{record.dateOut}</td>
                      <td>{record.timeIn}</td>
                      <td>{record.timeOut}</td>
                      <td>{record.deviceInTime}</td>
                      <td>{record.deviceOutTime}</td>
                      <td>{record.project}</td>
                      <td>{record.shiftType}</td>
                      <td>{record.remarks || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
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

export default CreateBiometricData;
