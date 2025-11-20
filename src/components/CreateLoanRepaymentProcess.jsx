import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateLoanRepaymentProcess = ({ onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  // Form data state
  const [formData, setFormData] = useState({
    workCalendar: '2022 MEP',
    month: 'January',
    year: '2022',
    monthStartDate: '1/1/2022',
    monthEndDate: '31/1/2022',
    status: 'Transfer to Payroll',
    employee: 'REP004 Tan Whye Kwang',
    refResignationId: '1588',
    loanCategory: ''
  });

  // Dropdown options from the uploaded images
  const workCalendarOptions = [
    '2022 MEP',
    '2022 TDQ',
    '2022 TEA',
    '2022 TMO',
    '2022 TSV',
    'MEP 2024',
    'MEP 2025',
    'TDQ 2024'
  ];

  const monthOptions = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const refResignationIdOptions = [
    '1588', '1590', '1591', '1592', '1594', '1595', '1596', '1597'
  ];

  const loanCategoryOptions = [
    '- New -',
    'Personal',
    'Marriage',
    'Medical Emergency',
    'Advance',
    'Advance Salary',
    'Contingency Loan'
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

  const handleSave = () => {
    // Basic validation
    if (!formData.workCalendar || !formData.month || !formData.year) {
      showToast('Please fill in required fields: Work Calendar, Month, Year', 'error');
      return;
    }

    showToast('New Loan Repayment Process created successfully!', 'success');
    if (onSave) {
      onSave(formData);
    }
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (onCancel) {
        onCancel();
      }
    }
  };

  const handleAddLoanPayee = () => {
    showToast('Please save the Loan Repayment Process first before adding loan entries', 'info');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-money-check-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Loan Repayment Process</h1>
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
            <i className="fas fa-cog"></i>
            Actions
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
        {/* Loan Repayment Process Information */}
        <div className="form-section">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '5px' }}>
                ID
              </label>
              <input 
                type="text" 
                className="form-control"
                value="Auto-generated"
                disabled
                style={{ fontSize: '14px', padding: '8px 12px', background: '#f8f9fa' }}
              />
            </div>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '5px' }}>
                MONTH END DATE
              </label>
              <input 
                type="text" 
                className="form-control"
                value={formData.monthEndDate}
                onChange={(e) => handleInputChange('monthEndDate', e.target.value)}
                placeholder="Enter month end date"
                style={{ fontSize: '14px', padding: '8px 12px' }}
              />
            </div>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '5px' }}>
                STATUS
              </label>
              <input 
                type="text" 
                className="form-control"
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
                placeholder="Enter status"
                style={{ fontSize: '14px', padding: '8px 12px' }}
              />
            </div>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '5px' }}>
                WORK CALENDAR <span className="required" style={{ color: '#dc3545' }}>*</span>
              </label>
              <select 
                className="form-control"
                value={formData.workCalendar}
                onChange={(e) => handleInputChange('workCalendar', e.target.value)}
                style={{ fontSize: '14px', padding: '8px 12px' }}
              >
                {workCalendarOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '5px' }}>
                EMPLOYEE
              </label>
              <select 
                className="form-control"
                value={formData.employee}
                onChange={(e) => handleInputChange('employee', e.target.value)}
                style={{ fontSize: '14px', padding: '8px 12px' }}
              >
                <option value="REP004 Tan Whye Kwang">REP004 Tan Whye Kwang</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '5px' }}>
                REF RESIGNATION ID
              </label>
              <select 
                className="form-control"
                value={formData.refResignationId}
                onChange={(e) => handleInputChange('refResignationId', e.target.value)}
                style={{ fontSize: '14px', padding: '8px 12px' }}
              >
                {refResignationIdOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '5px' }}>
                MONTH <span className="required" style={{ color: '#dc3545' }}>*</span>
              </label>
              <select 
                className="form-control"
                value={formData.month}
                onChange={(e) => handleInputChange('month', e.target.value)}
                style={{ fontSize: '14px', padding: '8px 12px' }}
              >
                {monthOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '5px' }}>
                LOAN CATEGORY
              </label>
              <select 
                className="form-control"
                value={formData.loanCategory}
                onChange={(e) => handleInputChange('loanCategory', e.target.value)}
                style={{ fontSize: '14px', padding: '8px 12px' }}
              >
                {loanCategoryOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '5px' }}>
                YEAR <span className="required" style={{ color: '#dc3545' }}>*</span>
              </label>
              <input 
                type="number" 
                className="form-control"
                value={formData.year}
                onChange={(e) => handleInputChange('year', e.target.value)}
                placeholder="Enter year"
                style={{ fontSize: '14px', padding: '8px 12px' }}
              />
            </div>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '5px' }}>
                MONTH START DATE
              </label>
              <input 
                type="text" 
                className="form-control"
                value={formData.monthStartDate}
                onChange={(e) => handleInputChange('monthStartDate', e.target.value)}
                placeholder="Enter month start date"
                style={{ fontSize: '14px', padding: '8px 12px' }}
              />
            </div>
          </div>
        </div>

        {/* New Loan-Payee Section */}
        <div className="form-section">
          <div style={{
            background: '#6c757d',
            padding: '10px 15px',
            color: 'white',
            fontSize: '14px',
            fontWeight: '500',
            marginBottom: '0'
          }}>
            New Loan-Payee
          </div>
          
          {/* Editable Table */}
          <div className="table-container">
            <table className="enquiries-table">
              <thead>
                <tr style={{ background: '#f8f9fa' }}>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>LOAN ID</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>EMPLOYEE NAME</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>EMPAY GROUP</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>LOAN AMOUNT</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>MONTH EMI</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>BALANCE TO</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>MONTH-RE PAY AMT</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>PRINCIPAL AMOUNT</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>REMARK</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>BALANCE AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                    <input type="text" style={{ width: '100%', border: 'none', padding: '4px', fontSize: '12px' }} placeholder="Enter Loan ID" />
                  </td>
                  <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                    <select style={{ width: '100%', border: 'none', padding: '4px', fontSize: '12px' }}>
                      <option value="">Select Employee</option>
                      <option value="REP004 Tan Whye Kwang">REP004 Tan Whye Kwang</option>
                    </select>
                  </td>
                  <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                    <input type="text" style={{ width: '100%', border: 'none', padding: '4px', fontSize: '12px' }} placeholder="Enter Group" />
                  </td>
                  <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                    <input type="number" style={{ width: '100%', border: 'none', padding: '4px', fontSize: '12px' }} placeholder="0.00" step="0.01" />
                  </td>
                  <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                    <input type="number" style={{ width: '100%', border: 'none', padding: '4px', fontSize: '12px' }} placeholder="0.00" step="0.01" />
                  </td>
                  <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                    <input type="number" style={{ width: '100%', border: 'none', padding: '4px', fontSize: '12px' }} placeholder="0.00" step="0.01" />
                  </td>
                  <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                    <input type="number" style={{ width: '100%', border: 'none', padding: '4px', fontSize: '12px' }} placeholder="0.00" step="0.01" />
                  </td>
                  <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                    <input type="number" style={{ width: '100%', border: 'none', padding: '4px', fontSize: '12px' }} placeholder="0.00" step="0.01" />
                  </td>
                  <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                    <input type="text" style={{ width: '100%', border: 'none', padding: '4px', fontSize: '12px' }} placeholder="Enter remark" />
                  </td>
                  <td style={{ padding: '4px', border: '1px solid #dee2e6' }}>
                    <input type="number" style={{ width: '100%', border: 'none', padding: '4px', fontSize: '12px' }} placeholder="0.00" step="0.01" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Action Buttons */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #e0e0e0' }}>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-cog"></i>
            Actions
          </button>
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

export default CreateLoanRepaymentProcess;
