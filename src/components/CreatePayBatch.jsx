import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreatePayBatch = ({ onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Form state for new pay batch
  const [formData, setFormData] = useState({
    year: new Date().getFullYear().toString(),
    paymentMethod: 'Regular Payment',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
    workCalendar: '2022 TEA',
    month: 'January',
    payGroup: 'EP & Local (TEA)',
    payBatchMonthPeriod: 'Monthly',
    payPeriodMonthlySet: 'Month Period',
    payDate: '',
    memo: '',
    periodStartDate: '',
    periodEndDate: '',
    startDateFreq: '',
    endDateFreq: '',
    totalPayDays: '',
    // System status fields
    status: 'To Be Generated',
    attendanceSave: false,
    verified: false,
    addedVariable: false,
    adHoc: false,
    run: false,
    commit: false,
    accountPosting: false,
    paySlipEmail: false,
    loaderCheck: false,
    showSalaryOnEss: false,
    otPayment: false,
    payeeEmployeeCount: 0,
    dateOfBirth: '',
    residentialStatus: '',
    employees: []
  });

  // Dropdown options from global rules
  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];

  const paymentMethods = [
    'Regular Payment',
    'Additional Payment'
  ];

  const workCalendars = [
    '2021 (TEA)',
    '2022 TEA',
    'TEA 2023',
    'TEA 2024',
    'TEA 2025'
  ];

  const payGroups = [
    'EP & Local (TEA)',
    'Hourly (TEA)',
    'NVT GROUP'
  ];

  const payBatchMonthPeriods = [
    'Weekly',
    'Bimonthly',
    'Monthly'
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generatePayBatchId = () => {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 1000);
    return `PBATCH${String(timestamp).slice(-5)}${String(randomNum).padStart(3, '0')}`;
  };

  const handleSave = () => {
    // Validation
    if (!formData.year || !formData.paymentMethod || !formData.subsidiary || !formData.workCalendar) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    // Generate new pay batch ID
    const newPayBatchId = generatePayBatchId();
    
    const payBatchData = {
      ...formData,
      id: newPayBatchId,
      createdBy: 'Current User',
      dateCreated: new Date().toLocaleString(),
      status: 'Pay Batch Created'
    };

    showToast(`Pay Batch ${newPayBatchId} created successfully!`, 'success');
    
    // Call parent callback if provided
    if (onSave) {
      setTimeout(() => {
        onSave(payBatchData);
      }, 1500);
    }
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Pay Batch creation cancelled', 'info');
      if (onCancel) {
        onCancel();
      }
    }
  };

  const handleAddEmployee = () => {
    // Get the current form values
    const employeeSelect = document.querySelector('select');
    const selectedEmployee = employeeSelect?.value;
    const selectedText = employeeSelect?.options[employeeSelect.selectedIndex]?.text;
    
    if (!selectedEmployee || selectedEmployee === '') {
      showToast('Please select an employee first', 'error');
      return;
    }

    // Check if employee already exists
    const existingEmployee = formData.employees.find(emp => emp.id === selectedEmployee);
    if (existingEmployee) {
      showToast('Employee already added to this pay batch', 'error');
      return;
    }

    const newEmployee = {
      id: selectedEmployee,
      name: selectedText,
      dateOfBirth: formData.dateOfBirth,
      residentialStatus: formData.residentialStatus
    };

    setFormData(prev => ({
      ...prev,
      employees: [...prev.employees, newEmployee],
      payeeEmployeeCount: prev.employees.length + 1,
      // Clear the form fields
      dateOfBirth: '',
      residentialStatus: ''
    }));

    // Reset the select to default
    if (employeeSelect) {
      employeeSelect.selectedIndex = 0;
    }

    showToast(`Employee ${selectedText} added successfully!`, 'success');
  };

  const handleRemoveEmployee = () => {
    if (formData.employees.length === 0) {
      showToast('No employees to remove', 'info');
      return;
    }

    // Remove the last added employee
    const removedEmployee = formData.employees[formData.employees.length - 1];
    setFormData(prev => ({
      ...prev,
      employees: prev.employees.slice(0, -1),
      payeeEmployeeCount: Math.max(0, prev.employees.length - 1)
    }));

    showToast(`Employee ${removedEmployee.name} removed`, 'info');
  };

  const handleInsertEmployee = () => {
    showToast('Insert Employee functionality - allows inserting at specific position', 'info');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-money-bill-wave" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Pay Batch</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-list"></i>
            List
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-search"></i>
            Search
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-cog"></i>
            Customize
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-ellipsis-h"></i>
            More
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Main Form Fields */}
        <div className="form-section">
          <div className="form-grid" style={{ gridTemplateColumns: '1fr 2fr 1fr', gap: '2rem' }}>
            
            {/* Left Column */}
            <div>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">YEAR</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.year}
                  onChange={(e) => handleInputChange('year', e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">PAYMENT METHOD <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.paymentMethod}
                  onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                >
                  {paymentMethods.map((method, index) => (
                    <option key={index} value={method}>{method}</option>
                  ))}
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">SUBSIDIARY <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.subsidiary}
                  onChange={(e) => handleInputChange('subsidiary', e.target.value)}
                >
                  {subsidiaries.map((subsidiary, index) => (
                    <option key={index} value={subsidiary}>{subsidiary}</option>
                  ))}
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">WORK CALENDAR <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.workCalendar}
                  onChange={(e) => handleInputChange('workCalendar', e.target.value)}
                >
                  {workCalendars.map((calendar, index) => (
                    <option key={index} value={calendar}>{calendar}</option>
                  ))}
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">MONTH <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.month}
                  onChange={(e) => handleInputChange('month', e.target.value)}
                >
                  {months.map((month, index) => (
                    <option key={index} value={month}>{month}</option>
                  ))}
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">PAY GROUP <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.payGroup}
                  onChange={(e) => handleInputChange('payGroup', e.target.value)}
                >
                  {payGroups.map((group, index) => (
                    <option key={index} value={group}>{group}</option>
                  ))}
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">PAYBATCH MONTH PERIOD <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.payBatchMonthPeriod}
                  onChange={(e) => handleInputChange('payBatchMonthPeriod', e.target.value)}
                >
                  {payBatchMonthPeriods.map((period, index) => (
                    <option key={index} value={period}>{period}</option>
                  ))}
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">PAY PERIOD MONTHLY SET <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.payPeriodMonthlySet}
                  onChange={(e) => handleInputChange('payPeriodMonthlySet', e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">PAY DATE <span className="required">*</span></label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.payDate}
                  onChange={(e) => handleInputChange('payDate', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">MEMO</label>
                <textarea 
                  className="form-control"
                  value={formData.memo}
                  onChange={(e) => handleInputChange('memo', e.target.value)}
                  rows="3"
                />
              </div>
            </div>

            {/* Middle Column */}
            <div>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">PERIOD START DATE</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.periodStartDate}
                  onChange={(e) => handleInputChange('periodStartDate', e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">PERIOD END DATE</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.periodEndDate}
                  onChange={(e) => handleInputChange('periodEndDate', e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">START DATE FREQ</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.startDateFreq}
                  onChange={(e) => handleInputChange('startDateFreq', e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">END DATE FREQ</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.endDateFreq}
                  onChange={(e) => handleInputChange('endDateFreq', e.target.value)}
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">TOTAL PAY DAYS</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.totalPayDays}
                  onChange={(e) => handleInputChange('totalPayDays', e.target.value)}
                />
              </div>

              {/* Batch Summary Section */}
              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ color: '#4a90e2', marginBottom: '1rem' }}>Batch Summary</h3>
                <div style={{ 
                  background: '#f8f9fa', 
                  padding: '1rem', 
                  borderRadius: '4px',
                  border: '1px solid #e9ecef'
                }}>
                  <div style={{ 
                    color: '#28a745', 
                    fontWeight: 'bold', 
                    marginBottom: '1rem',
                    fontSize: '14px'
                  }}>
                    PayBatch Status - {formData.status}
                  </div>

                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label className="form-label">PAYEE EMPLOYEE COUNT</label>
                    <input 
                      type="number" 
                      className="form-control"
                      value={formData.payeeEmployeeCount}
                      onChange={(e) => handleInputChange('payeeEmployeeCount', e.target.value)}
                      style={{ backgroundColor: '#e9ecef' }}
                      readOnly
                    />
                  </div>

                  <div className="checkbox-group" style={{ marginBottom: '1rem' }}>
                    <label className="checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={formData.showSalaryOnEss}
                        onChange={(e) => handleInputChange('showSalaryOnEss', e.target.checked)}
                      />
                      <span className="checkmark"></span>
                      SHOW SALARY ON ESS
                    </label>
                  </div>

                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={formData.otPayment}
                        onChange={(e) => handleInputChange('otPayment', e.target.checked)}
                      />
                      <span className="checkmark"></span>
                      OT PAYMENT
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - System Status */}
            <div>
              <h3 style={{ color: '#4a90e2', marginBottom: '1rem' }}>System</h3>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '1rem', 
                borderRadius: '4px',
                border: '1px solid #e9ecef'
              }}>
                <div style={{ 
                  color: '#6c757d', 
                  fontWeight: 'bold', 
                  marginBottom: '1rem',
                  fontSize: '12px'
                }}>
                  STATUS
                </div>
                <div style={{ 
                  color: '#17a2b8', 
                  marginBottom: '1.5rem',
                  fontSize: '14px'
                }}>
                  {formData.status}
                </div>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '8px',
                  fontSize: '12px'
                }}>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={formData.attendanceSave}
                        onChange={(e) => handleInputChange('attendanceSave', e.target.checked)}
                      />
                      <span className="checkmark"></span>
                      ATTENDANCE SAVE
                    </label>
                  </div>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={formData.verified}
                        onChange={(e) => handleInputChange('verified', e.target.checked)}
                      />
                      <span className="checkmark"></span>
                      VERIFIED
                    </label>
                  </div>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={formData.addedVariable}
                        onChange={(e) => handleInputChange('addedVariable', e.target.checked)}
                      />
                      <span className="checkmark"></span>
                      ADDED VARIABLE
                    </label>
                  </div>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={formData.adHoc}
                        onChange={(e) => handleInputChange('adHoc', e.target.checked)}
                      />
                      <span className="checkmark"></span>
                      AD-HOC
                    </label>
                  </div>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={formData.run}
                        onChange={(e) => handleInputChange('run', e.target.checked)}
                      />
                      <span className="checkmark"></span>
                      RUN
                    </label>
                  </div>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={formData.commit}
                        onChange={(e) => handleInputChange('commit', e.target.checked)}
                      />
                      <span className="checkmark"></span>
                      COMMIT
                    </label>
                  </div>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={formData.accountPosting}
                        onChange={(e) => handleInputChange('accountPosting', e.target.checked)}
                      />
                      <span className="checkmark"></span>
                      ACCOUNT POSTING
                    </label>
                  </div>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={formData.paySlipEmail}
                        onChange={(e) => handleInputChange('paySlipEmail', e.target.checked)}
                      />
                      <span className="checkmark"></span>
                      PAY SLIP EMAIL
                    </label>
                  </div>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={formData.loaderCheck}
                        onChange={(e) => handleInputChange('loaderCheck', e.target.checked)}
                      />
                      <span className="checkmark"></span>
                      LOADER CHECK
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Employee Section */}
        <div className="form-section">
          <div className="items-table-wrapper">
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th style={{ width: '40%' }}>EMPLOYEE <span className="required">*</span></th>
                  <th style={{ width: '30%' }}>DATE OF BIRTH</th>
                  <th style={{ width: '30%' }}>RESIDENTIAL STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select 
                      className="form-control"
                      style={{ width: '100%', border: 'none', background: 'transparent' }}
                    >
                      <option value="">- Type then tab -</option>
                      <option value="emp1">TEA001 John Doe</option>
                      <option value="emp2">TEA002 Jane Smith</option>
                      <option value="emp3">TEA003 Mike Johnson</option>
                      <option value="emp4">MEP001 Sarah Wilson</option>
                      <option value="emp5">TOM001 David Brown</option>
                    </select>
                  </td>
                  <td>
                    <input 
                      type="date" 
                      className="form-control"
                      style={{ width: '100%', border: 'none', background: 'transparent' }}
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    />
                  </td>
                  <td>
                    <input 
                      type="text" 
                      className="form-control"
                      style={{ width: '100%', border: 'none', background: 'transparent' }}
                      value={formData.residentialStatus}
                      onChange={(e) => handleInputChange('residentialStatus', e.target.value)}
                      placeholder="Enter status"
                    />
                  </td>
                </tr>
                {formData.employees.map((employee, index) => (
                  <tr key={index}>
                    <td style={{ color: 'var(--blue-accent)' }}>{employee.name}</td>
                    <td>{employee.dateOfBirth}</td>
                    <td>{employee.residentialStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
            <button className="btn btn-success" onClick={handleAddEmployee}>
              <i className="fas fa-plus"></i>
              Add
            </button>
            <button className="btn btn-secondary" onClick={handleRemoveEmployee}>
              <i className="fas fa-times"></i>
              Cancel
            </button>
            <button className="btn btn-secondary" onClick={handleInsertEmployee}>
              <i className="fas fa-plus-circle"></i>
              Insert
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-trash"></i>
              Remove
            </button>
          </div>
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-primary" onClick={handleSave}>
              <i className="fas fa-save"></i>
              Save
            </button>
          </div>
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

export default CreatePayBatch;
