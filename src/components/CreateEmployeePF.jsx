import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateEmployeePF = ({ onSave, onCancel, selectedEmployeePF }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('notes');
  const [notesView, setNotesView] = useState('Default');
  
  // Form data state
  const [formData, setFormData] = useState({
    customForm: selectedEmployeePF?.customForm || 'Standard Employee PF Form',
    name: selectedEmployeePF?.name || 'Nigeria PF',
    inactive: selectedEmployeePF?.inactive || false,
    effectDate: selectedEmployeePF?.effectDate || '',
    employeeContribution: selectedEmployeePF?.employeeContribution || '',
    employerContribution: selectedEmployeePF?.employerContribution || '',
    pfEmployeeComponent: selectedEmployeePF?.pfEmployeeComponent || '',
    pfEmployerComponent: selectedEmployeePF?.pfEmployerComponent || '',
    pfWagesLimit: selectedEmployeePF?.pfWagesLimit || '',
    limitPfAmountOn15000: selectedEmployeePF?.limitPfAmountOn15000 || false,
    lowerLimitForPf: selectedEmployeePF?.lowerLimitForPf || ''
  });

  const customFormOptions = [
    'Standard Employee PF Form',
    'Custom Employee PF Form'
  ];

  const pfComponentOptions = [
    '- New -',
    'Absent Deduction',
    'Accommodation and Utility',
    'Admin Charges',
    'Advance Salary',
    'Allowance',
    'Allowance Worker',
    'Annual Bonus',
    'Annual Leave',
    'Arrear',
    'Arrear Deduction',
    'Arrear Overtime',
    'Arrear Salary',
    'Basic Salary',
    'Bonus',
    'Canteen',
    'Commission',
    'CPF Employee',
    'CPF Employer',
    'Deduction',
    'Deduction Others',
    'Deduction Salary',
    'Director Fee',
    'Earned Leave',
    'Employee Contribution',
    'Employer Contribution',
    'Festival Bonus',
    'Fixed Allowance',
    'Foreign Worker Levy',
    'Gratuity',
    'Gross Commission',
    'Gross Salary',
    'Holiday Pay',
    'Incentive',
    'Income Tax',
    'Insurance',
    'Leave Encashment',
    'Loan',
    'Loan Deduction',
    'Loan Interest',
    'Loan Repayment',
    'Medical',
    'Medical Allowance',
    'Medical Insurance',
    'Monthly Allowance',
    'Net Salary',
    'No Pay Leave',
    'Notice Pay',
    'Other Allowance',
    'Other Deduction',
    'Overtime',
    'Overtime Allowance',
    'Overtime Hours',
    'Performance Bonus',
    'PF Employee',
    'PF Employer',
    'Provident Fund',
    'Reimbursement',
    'Salary',
    'Salary Advance',
    'SDL',
    'Severance Pay',
    'Shift Allowance',
    'Sick Leave',
    'Special Allowance',
    'Statutory - PF Employee',
    'Statutory - PF Employer',
    'Transport Allowance',
    'Uniform',
    'Variable Allowance',
    'Wages'
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
    if (!formData.name) {
      showToast('Please fill in required fields', 'error');
      return;
    }

    showToast(selectedEmployeePF ? 'Employee PF updated successfully!' : 'Employee PF created successfully!', 'success');
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

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-piggy-bank" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Employee PF</h1>
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
        {/* Primary Information */}
        <div className="form-section">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">CUSTOM FORM <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.customForm}
                onChange={(e) => handleInputChange('customForm', e.target.value)}
              >
                {customFormOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">EMPLOYEE CONTRIBUTION %</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.employeeContribution}
                onChange={(e) => handleInputChange('employeeContribution', e.target.value)}
                step="0.01"
              />
            </div>
            <div className="form-group">
              <label className="form-label">NAME <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">EMPLOYER CONTRIBUTION %</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.employerContribution}
                onChange={(e) => handleInputChange('employerContribution', e.target.value)}
                step="0.01"
              />
            </div>
            <div className="form-group">
              <label className="form-label">INACTIVE</label>
              <input 
                type="checkbox" 
                checked={formData.inactive}
                onChange={(e) => handleInputChange('inactive', e.target.checked)}
                style={{ marginTop: '8px' }}
              />
            </div>
            <div className="form-group">
              <label className="form-label">PF EMPLOYEE COMPONENT</label>
              <select 
                className="form-control"
                value={formData.pfEmployeeComponent}
                onChange={(e) => handleInputChange('pfEmployeeComponent', e.target.value)}
              >
                <option value="">Select Component</option>
                {pfComponentOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">EFFECT DATE</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.effectDate}
                onChange={(e) => handleInputChange('effectDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">PF EMPLOYER COMPONENT</label>
              <select 
                className="form-control"
                value={formData.pfEmployerComponent}
                onChange={(e) => handleInputChange('pfEmployerComponent', e.target.value)}
              >
                <option value="">Select Component</option>
                {pfComponentOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">PF WAGES LIMIT</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.pfWagesLimit}
                onChange={(e) => handleInputChange('pfWagesLimit', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">LIMIT PF AMOUNT ON 15000</label>
              <input 
                type="checkbox" 
                checked={formData.limitPfAmountOn15000}
                onChange={(e) => handleInputChange('limitPfAmountOn15000', e.target.checked)}
                style={{ marginTop: '8px' }}
              />
            </div>
            <div className="form-group">
              <label className="form-label">LOWER LIMIT FOR PF</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.lowerLimitForPf}
                onChange={(e) => handleInputChange('lowerLimitForPf', e.target.value)}
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Notes Section */}
        <div className="form-section">
          <div style={{
            background: '#6c757d',
            padding: '12px 20px',
            color: 'white',
            fontSize: '14px',
            fontWeight: '600',
            display: 'flex',
            gap: '20px',
            marginBottom: '0'
          }}>
            <span 
              style={{ 
                cursor: 'pointer',
                borderBottom: activeTab === 'notes' ? '2px solid white' : 'none',
                paddingBottom: '5px'
              }}
              onClick={() => setActiveTab('notes')}
            >
              Notes
            </span>
            <span 
              style={{ 
                cursor: 'pointer',
                borderBottom: activeTab === 'files' ? '2px solid white' : 'none',
                paddingBottom: '5px'
              }}
              onClick={() => setActiveTab('files')}
            >
              Files
            </span>
            <span 
              style={{ 
                cursor: 'pointer',
                borderBottom: activeTab === 'workflow' ? '2px solid white' : 'none',
                paddingBottom: '5px'
              }}
              onClick={() => setActiveTab('workflow')}
            >
              Workflow
            </span>
            <span 
              style={{ 
                cursor: 'pointer',
                borderBottom: activeTab === 'custom' ? '2px solid white' : 'none',
                paddingBottom: '5px'
              }}
              onClick={() => setActiveTab('custom')}
            >
              Custom
            </span>
          </div>
          
          <div style={{ padding: '20px', border: '1px solid #e9ecef', borderTop: 'none' }}>
            {activeTab === 'notes' && (
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: '#666' }}>VIEW</label>
                    <select 
                      value={notesView}
                      onChange={(e) => setNotesView(e.target.value)}
                      style={{
                        padding: '4px 8px',
                        border: '1px solid #ced4da',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    >
                      <option>Default</option>
                      <option>Summary</option>
                      <option>Detailed</option>
                    </select>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{
                      background: '#28a745',
                      color: 'white',
                      border: '1px solid #28a745',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      New Note
                    </button>
                    <button style={{
                      background: 'white',
                      color: '#495057',
                      border: '1px solid #ced4da',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}>
                      Customize View
                    </button>
                  </div>
                </div>

                <div style={{ overflowX: 'auto' }}>
                  <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '12px'
                  }}>
                    <thead>
                      <tr style={{ background: '#f8f9fa' }}>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>EDIT</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>DATE</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>AUTHOR</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>TITLE</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>MEMO</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>DIRECTION</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>TYPE</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>REMOVE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="8" style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'files' && (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
                No files attached.
              </div>
            )}

            {activeTab === 'workflow' && (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
                Workflow information will be displayed here.
              </div>
            )}

            {activeTab === 'custom' && (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
                No custom fields configured.
              </div>
            )}
          </div>
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-secondary" onClick={handleSave}>
              <i className="fas fa-save"></i>
              Save
            </button>
            <button className="btn btn-secondary">
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

export default CreateEmployeePF;
