import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateManualEntry = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formStep, setFormStep] = useState('entry'); // entry, preview
  
  // Common details
  const [commonDetails, setCommonDetails] = useState({
    project: '',
    date: '',
    shiftType: ''
  });

  // Selected employees with their time details
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [availableEmployees] = useState([
    { id: 1, name: 'John Doe', employeeId: 'EMP001', finNo: 'F1234567A', workPermitNo: 'WP123456', companyName: 'Tech Onshore MEP Prefabricators Pte Ltd', designation: 'Technician' },
    { id: 2, name: 'Sarah Lee', employeeId: 'EMP003', finNo: 'F3456789C', workPermitNo: 'WP345678', companyName: 'TOM Offshore Marine Engineering Pte Ltd', designation: 'Engineer' },
    { id: 3, name: 'Michael Chen', employeeId: 'EMP004', finNo: 'F4567890D', workPermitNo: 'WP456789', companyName: 'Tech Onshore MEP Prefabricators Pte Ltd', designation: 'Supervisor' },
    { id: 4, name: 'Raj Kumar', employeeId: 'EMP005', finNo: 'F5678901E', workPermitNo: 'WP567890', companyName: 'Tech Marine Offshore (S) Pte Ltd', designation: 'Welder' },
    { id: 5, name: 'David Tan', employeeId: 'EMP006', finNo: 'F6789012F', workPermitNo: 'WP678901', companyName: 'TOM Shipyard Pte Ltd', designation: 'Fitter' }
  ]);

  const [searchText, setSearchText] = useState('');
  const [globalTimeIn, setGlobalTimeIn] = useState('08:00');
  const [globalTimeOut, setGlobalTimeOut] = useState('18:00');

  const projects = [
    '20-0052 Fortis Construction Pte. Ltd',
    '21-0089 Marina Bay Project',
    '22-0134 Sentosa Development'
  ];

  const shiftTypes = ['Day', 'Night'];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleCommonDetailChange = (field, value) => {
    setCommonDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleSelectEmployee = (employee) => {
    const isSelected = selectedEmployees.find(e => e.id === employee.id);
    if (isSelected) {
      setSelectedEmployees(prev => prev.filter(e => e.id !== employee.id));
    } else {
      setSelectedEmployees(prev => [...prev, {
        ...employee,
        timeIn: globalTimeIn,
        timeOut: globalTimeOut
      }]);
    }
  };

  const handleSelectAll = () => {
    const filtered = getFilteredEmployees();
    if (selectedEmployees.length === filtered.length) {
      setSelectedEmployees([]);
    } else {
      setSelectedEmployees(filtered.map(emp => ({
        ...emp,
        timeIn: globalTimeIn,
        timeOut: globalTimeOut
      })));
    }
  };

  const handleApplyGlobalTime = () => {
    if (selectedEmployees.length === 0) {
      showToast('Please select at least one employee', 'warning');
      return;
    }
    setSelectedEmployees(prev => prev.map(emp => ({
      ...emp,
      timeIn: globalTimeIn,
      timeOut: globalTimeOut
    })));
    showToast('Time applied to all selected employees', 'success');
  };

  const handleIndividualTimeChange = (employeeId, field, value) => {
    setSelectedEmployees(prev => prev.map(emp => {
      if (emp.id === employeeId) {
        return { ...emp, [field]: value };
      }
      return emp;
    }));
  };

  const getFilteredEmployees = () => {
    return availableEmployees.filter(emp => 
      emp.name.toLowerCase().includes(searchText.toLowerCase()) ||
      emp.employeeId.toLowerCase().includes(searchText.toLowerCase()) ||
      emp.finNo.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const handlePreview = () => {
    if (!commonDetails.project) {
      showToast('Please select a project', 'warning');
      return;
    }
    if (!commonDetails.date) {
      showToast('Please select a date', 'warning');
      return;
    }
    if (!commonDetails.shiftType) {
      showToast('Please select a shift type', 'warning');
      return;
    }
    if (selectedEmployees.length === 0) {
      showToast('Please select at least one employee', 'warning');
      return;
    }

    // Validate time in < time out
    const invalidTimes = selectedEmployees.filter(emp => emp.timeIn >= emp.timeOut);
    if (invalidTimes.length > 0) {
      showToast('Time Out must be greater than Time In for all employees', 'error');
      return;
    }

    setFormStep('preview');
  };

  const handleSubmit = () => {
    showToast(`Successfully created ${selectedEmployees.length} manual attendance entries`, 'success');
    
    // Reset form
    setTimeout(() => {
      setCommonDetails({ project: '', date: '', shiftType: '' });
      setSelectedEmployees([]);
      setFormStep('entry');
    }, 2000);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      setCommonDetails({ project: '', date: '', shiftType: '' });
      setSelectedEmployees([]);
      setFormStep('entry');
      showToast('Entry cancelled', 'info');
    }
  };

  const handleBackToEntry = () => {
    setFormStep('entry');
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-keyboard"></i>
          <h1>Manual Attendance Entry</h1>
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
          <select className="form-control" style={{ width: '250px' }} value={formStep} disabled>
            <option value="entry">Entry</option>
            <option value="preview">Preview</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-secondary" onClick={handleCancel} style={{ marginRight: '10px' }}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          {formStep === 'preview' && (
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
            TOTAL: {selectedEmployees.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container" style={{ padding: '30px' }}>
        {/* Entry Step */}
        {formStep === 'entry' && (
          <>
            {/* Common Details Section */}
            <div>
              <div className="form-section">
                <h2 className="section-title">Common Details</h2>
                <p className="section-subtitle">Enter shared information for all employees</p>
              </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Project <span className="required">*</span></label>
                    <select
                      value={commonDetails.project}
                      onChange={(e) => handleCommonDetailChange('project', e.target.value)}
                      className="form-input"
                    >
                      <option value="">Select Project</option>
                      {projects.map((project, index) => (
                        <option key={index} value={project}>{project}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Date <span className="required">*</span></label>
                    <input
                      type="date"
                      value={commonDetails.date}
                      onChange={(e) => handleCommonDetailChange('date', e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Shift Type <span className="required">*</span></label>
                    <select
                      value={commonDetails.shiftType}
                      onChange={(e) => handleCommonDetailChange('shiftType', e.target.value)}
                      className="form-input"
                    >
                      <option value="">Select Shift Type</option>
                      {shiftTypes.map((shift, index) => (
                        <option key={index} value={shift}>{shift}</option>
                      ))}
                    </select>
                  </div>
                </div>
            </div>

            {/* Global Time Settings */}
            <div style={{ marginTop: '30px' }}>
              <div className="form-section">
                <h2 className="section-title">Global Time Settings</h2>
                <p className="section-subtitle">Set default time for all selected employees</p>
              </div>
                <div className="form-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                  <div className="form-group">
                    <label>Time In</label>
                    <input
                      type="time"
                      value={globalTimeIn}
                      onChange={(e) => setGlobalTimeIn(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Time Out</label>
                    <input
                      type="time"
                      value={globalTimeOut}
                      onChange={(e) => setGlobalTimeOut(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group" style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <button className="btn btn-primary" onClick={handleApplyGlobalTime} style={{ width: '100%' }}>
                      <i className="fas fa-clock"></i>
                      Apply to Selected
                    </button>
                  </div>
                </div>
            </div>

            {/* Employee Selection */}
            <div style={{ marginTop: '30px' }}>
              <div className="form-section">
                <h2 className="section-title">Select Employees</h2>
                <p className="section-subtitle">{selectedEmployees.length} employee(s) selected</p>
              </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <input
                    type="text"
                    placeholder="Search by name, ID, or FIN..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div style={{ marginTop: '15px' }}>
                  <table className="enquiries-table">
                  <thead>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          checked={selectedEmployees.length === getFilteredEmployees().length && getFilteredEmployees().length > 0}
                          onChange={handleSelectAll}
                        />
                      </th>
                      <th>EMPLOYEE NAME</th>
                      <th>EMPLOYEE ID</th>
                      <th>FIN NO</th>
                      <th>COMPANY</th>
                      <th>DESIGNATION</th>
                      <th>TIME IN</th>
                      <th>TIME OUT</th>
                    </tr>
                  </thead>
                    <tbody>
                      {getFilteredEmployees().map((employee) => {
                        const selected = selectedEmployees.find(e => e.id === employee.id);
                        return (
                          <tr key={employee.id} style={{ background: selected ? '#e3f2fd' : 'transparent' }}>
                            <td>
                              <input
                                type="checkbox"
                                checked={!!selected}
                                onChange={() => handleSelectEmployee(employee)}
                              />
                            </td>
                            <td>{employee.name}</td>
                            <td>{employee.employeeId}</td>
                            <td>{employee.finNo}</td>
                            <td>{employee.companyName}</td>
                            <td>{employee.designation}</td>
                            <td>
                              {selected ? (
                                <input
                                  type="time"
                                  value={selected.timeIn}
                                  onChange={(e) => handleIndividualTimeChange(employee.id, 'timeIn', e.target.value)}
                                  className="form-input"
                                />
                              ) : '-'}
                            </td>
                            <td>
                              {selected ? (
                                <input
                                  type="time"
                                  value={selected.timeOut}
                                  onChange={(e) => handleIndividualTimeChange(employee.id, 'timeOut', e.target.value)}
                                  className="form-input"
                                />
                              ) : '-'}
                            </td>
                          </tr>
                        );
                      })}
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
          </>
        )}

        {/* Preview Step */}
        {formStep === 'preview' && (
          <div>
            <div className="form-section">
              <h2 className="section-title">Preview Entries</h2>
              <p className="section-subtitle">Review before submission</p>
            </div>
            <div className="info-box success">
              <i className="fas fa-check-circle" style={{ marginRight: '10px' }}></i>
              <span>{selectedEmployees.length} entries ready for submission</span>
            </div>

            <div className="info-box info" style={{ marginTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <i className="fas fa-info-circle" style={{ marginRight: '15px', marginTop: '3px' }}></i>
                <div>
                  <strong>Common Details:</strong>
                  <div style={{ marginTop: '10px' }}>
                    <p><strong>Project:</strong> {commonDetails.project}</p>
                    <p><strong>Date:</strong> {commonDetails.date}</p>
                    <p><strong>Shift Type:</strong> {commonDetails.shiftType}</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '20px' }}>
              <table className="enquiries-table">
                <thead>
                  <tr>
                    <th>EMPLOYEE NAME</th>
                    <th>EMPLOYEE ID</th>
                    <th>FIN NO</th>
                    <th>WORK PERMIT NO</th>
                    <th>COMPANY NAME</th>
                    <th>PROJECT</th>
                    <th>DATE</th>
                    <th>TIME IN</th>
                    <th>TIME OUT</th>
                    <th>SHIFT TYPE</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedEmployees.map((employee) => (
                    <tr key={employee.id}>
                      <td>{employee.name}</td>
                      <td>{employee.employeeId}</td>
                      <td>{employee.finNo}</td>
                      <td>{employee.workPermitNo}</td>
                      <td>{employee.companyName}</td>
                      <td>{commonDetails.project}</td>
                      <td>{commonDetails.date}</td>
                      <td>{employee.timeIn}</td>
                      <td>{employee.timeOut}</td>
                      <td>{commonDetails.shiftType}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'space-between' }}>
              <button className="btn btn-secondary" onClick={handleBackToEntry}>
                <i className="fas fa-arrow-left"></i>
                Back to Edit
              </button>
            </div>
          </div>
        )}
      </div>

      {toast.show && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
      )}
    </div>
  );
};

export default CreateManualEntry;
