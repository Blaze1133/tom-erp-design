import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditPayBatch = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Form state based on the uploaded images
  const [formData, setFormData] = useState({
    id: 'PBATCH00255',
    year: '2022',
    paymentMethod: 'Regular Payment',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
    workCalendar: '2022 TEA',
    month: 'January',
    payGroup: 'EP & Local (TEA)',
    payBatchMonthPeriod: 'Monthly',
    payPeriodMonthlySet: 'Month Period',
    payDate: '31/1/2022',
    memo: 'TEA JAN 2022 MONTHLY SALARY',
    periodStartDate: '',
    periodEndDate: '',
    createdBy: 'TOM-Maha',
    dateCreated: '28/3/2022 4:17 pm',
    startDateFreq: '',
    endDateFreq: '',
    totalPayDays: '',
    // System status fields
    status: 'Pay Batch Posted',
    attendanceSave: true,
    verified: true,
    addedVariable: true,
    adHoc: true,
    run: true,
    commit: true,
    accountPosting: true,
    paySlipEmail: true,
    loaderCheck: true,
    showSalaryOnEss: true,
    otPayment: true,
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

  const departments = [
    'TOM: Human Resource',
    'TOM: Finance: Internal Transfer',
    'TOM: IT',
    'TOM: Logistic',
    'TOM: Operating',
    'TOM: Purchase',
    'TOM: Sales and Marketing',
    'TOM: Security',
    'TOM: TOM INTERNALS: TOM HR',
    'TOM: Nampak Reinsure',
    'TOM: Auction Handover',
    'TOM: Engineering',
    'TOM: Production'
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

  // Sample employee data from the images
  const [employees] = useState([
    {
      id: 1,
      employeeId: 'TEA101',
      name: 'Ramulu Chettiar Mohan',
      dateJoined: '1/3/1962',
      status: 'Above 55 to 60',
      employeeCount: '248881301',
      payDate: '3/1/2019',
      days: 31,
      totalDays: 31,
      basicSalary: 448.00,
      cpf: 2.00,
      sdl: 4.00,
      total: 1374.00,
      paySlip: 'PaySlip'
    },
    {
      id: 2,
      employeeId: 'TEA102',
      name: 'Gangadevi Krishnamurthy',
      dateJoined: '4/1/1968',
      status: 'Above 55 to 65',
      employeeCount: '564879152',
      payDate: '5/1/2021',
      days: 31,
      totalDays: 31,
      basicSalary: 614.00,
      cpf: 5.00,
      sdl: 5.50,
      total: 1716.00,
      paySlip: 'PaySlip'
    },
    {
      id: 3,
      employeeId: 'TEA103',
      name: 'Radhakrishnan S/O Ramanathan',
      dateJoined: '2/1/1968',
      status: 'Above 50 to 55',
      employeeCount: '564785318',
      payDate: '1/3/2017',
      days: 31,
      totalDays: 31,
      basicSalary: 900.00,
      cpf: 2.00,
      sdl: 4.00,
      total: 1278.00,
      paySlip: 'PaySlip'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    showToast('Pay Batch saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Changes cancelled', 'info');
      window.location.reload();
    }
  };

  const handleEmailPayslip = () => {
    showToast('Email payslip functionality triggered', 'info');
  };

  const handleActions = () => {
    showToast('Actions menu opened', 'info');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-money-bill-wave" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Pay Batch</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary" onClick={handleEmailPayslip}>
            <i className="fas fa-envelope"></i>
            Email Payslip
          </button>
          <button className="btn btn-secondary" onClick={handleActions}>
            <i className="fas fa-cog"></i>
            Actions
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-info-circle"></i>
            Pay Batch Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">ID</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.id}
                onChange={(e) => handleInputChange('id', e.target.value)}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">YEAR <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.year}
                onChange={(e) => handleInputChange('year', e.target.value)}
              />
            </div>
            <div className="form-group">
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
            <div className="form-group">
              <label className="form-label">PERIOD START DATE</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.periodStartDate}
                onChange={(e) => handleInputChange('periodStartDate', e.target.value)}
              />
            </div>
            <div className="form-group">
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
            <div className="form-group">
              <label className="form-label">PERIOD END DATE</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.periodEndDate}
                onChange={(e) => handleInputChange('periodEndDate', e.target.value)}
              />
            </div>
            <div className="form-group">
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
            <div className="form-group">
              <label className="form-label">TOTAL PAY DAYS</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.totalPayDays}
                onChange={(e) => handleInputChange('totalPayDays', e.target.value)}
              />
            </div>
            <div className="form-group">
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
            <div className="form-group">
              <label className="form-label">CREATED BY</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.createdBy}
                onChange={(e) => handleInputChange('createdBy', e.target.value)}
                disabled
              />
            </div>
            <div className="form-group">
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
            <div className="form-group">
              <label className="form-label">DATE CREATED</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.dateCreated}
                onChange={(e) => handleInputChange('dateCreated', e.target.value)}
                disabled
              />
            </div>
            <div className="form-group">
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
            <div className="form-group">
              <label className="form-label">START DATE FREQ</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.startDateFreq}
                onChange={(e) => handleInputChange('startDateFreq', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">PAY PERIOD MONTHLY SET <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.payPeriodMonthlySet}
                onChange={(e) => handleInputChange('payPeriodMonthlySet', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">END DATE FREQ</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.endDateFreq}
                onChange={(e) => handleInputChange('endDateFreq', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">PAY DATE <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.payDate}
                onChange={(e) => handleInputChange('payDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">MEMO</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.memo}
                onChange={(e) => handleInputChange('memo', e.target.value)}
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* System Status */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-cog"></i>
            System Status
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <div style={{ marginBottom: '1.5rem' }}>
            <div className="field-value" style={{ 
              color: '#4caf50', 
              fontWeight: 'bold', 
              fontSize: '16px',
              padding: '10px',
              background: '#e8f5e8',
              borderRadius: '4px',
              textAlign: 'center'
            }}>
              {formData.status}
            </div>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '15px',
            marginBottom: '1rem'
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

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Employee Summary */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-users"></i>
            Batch Summary
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <div className="batch-status" style={{ 
            background: '#e8f5e8', 
            padding: '1rem', 
            borderRadius: '4px', 
            marginBottom: '1rem',
            color: '#2e7d32',
            fontWeight: 'bold'
          }}>
            PayBatch Status - Paybatch Creation Completed
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label className="checkbox-label">
              <input 
                type="checkbox" 
                checked={formData.showSalaryOnEss}
                onChange={(e) => handleInputChange('showSalaryOnEss', e.target.checked)}
              />
              <span className="checkmark"></span>
              SHOW SALARY ON ESS OR PAYMENT
            </label>
          </div>

          {employees.length > 0 ? (
            <div className="items-table-wrapper">
              <table className="detail-items-table">
                <thead>
                  <tr>
                    <th style={{ width: '3%' }}>#</th>
                    <th style={{ width: '8%' }}>EMPLOYEE ID</th>
                    <th style={{ width: '15%' }}>NAME</th>
                    <th style={{ width: '8%' }}>DATE JOINED</th>
                    <th style={{ width: '10%' }}>STATUS</th>
                    <th style={{ width: '10%' }}>EMPLOYEE COUNT</th>
                    <th style={{ width: '8%' }}>PAY DATE</th>
                    <th style={{ width: '5%' }}>DAYS</th>
                    <th style={{ width: '5%' }}>TOTAL DAYS</th>
                    <th style={{ width: '8%' }}>BASIC SALARY</th>
                    <th style={{ width: '5%' }}>CPF</th>
                    <th style={{ width: '5%' }}>SDL</th>
                    <th style={{ width: '8%' }}>TOTAL</th>
                    <th style={{ width: '7%' }}>PAY SLIP</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, index) => (
                    <tr key={employee.id}>
                      <td>{index + 1}</td>
                      <td style={{ color: 'var(--blue-accent)' }}>{employee.employeeId}</td>
                      <td>{employee.name}</td>
                      <td>{employee.dateJoined}</td>
                      <td>{employee.status}</td>
                      <td>{employee.employeeCount}</td>
                      <td>{employee.payDate}</td>
                      <td className="amount">{employee.days}</td>
                      <td className="amount">{employee.totalDays}</td>
                      <td className="amount">{employee.basicSalary.toFixed(2)}</td>
                      <td className="amount">{employee.cpf.toFixed(2)}</td>
                      <td className="amount">{employee.sdl.toFixed(2)}</td>
                      <td className="amount">{employee.total.toFixed(2)}</td>
                      <td>
                        <button className="view-link">{employee.paySlip}</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ 
                textAlign: 'center', 
                padding: '1rem', 
                borderTop: '1px solid #e0e0e0',
                fontSize: '0.9rem',
                color: '#666'
              }}>
                Showing 1 to 10 of 21 entries
              </div>
            </div>
          ) : (
            <div className="empty-items-message">
              <p>No employees in this pay batch.</p>
            </div>
          )}
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
            <button className="btn btn-secondary" onClick={handleEmailPayslip}>
              <i className="fas fa-envelope"></i>
              Email Payslip
            </button>
            <button className="btn btn-secondary" onClick={handleActions}>
              <i className="fas fa-cog"></i>
              Actions
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

export default EditPayBatch;
