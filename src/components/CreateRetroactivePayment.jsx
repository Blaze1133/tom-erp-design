import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateRetroactivePayment = ({ onSave, onCancel, selectedPayment }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('notes');
  const [notesView, setNotesView] = useState('Default');
  
  // Form data state
  const [formData, setFormData] = useState({
    inactive: selectedPayment?.inactive || false,
    arrearType: selectedPayment?.arrearType || '',
    subsidiary: selectedPayment?.subsidiary || '',
    arrearAgainstPayGroup: selectedPayment?.arrearAgainstPayGroup || '',
    arrearAgainstWorkCalendar: selectedPayment?.arrearAgainstWorkCalendar || '',
    arrearAgainstYear: selectedPayment?.arrearAgainstYear || '',
    arrearAgainstMonth: selectedPayment?.arrearAgainstMonth || '',
    periodStartDate: selectedPayment?.periodStartDate || '',
    periodEndDate: selectedPayment?.periodEndDate || '',
    payArrearInPayGroup: selectedPayment?.payArrearInPayGroup || '',
    payArrearInWorkCalendar: selectedPayment?.payArrearInWorkCalendar || '',
    payArrearInYear: selectedPayment?.payArrearInYear || '',
    payArrearInMonth: selectedPayment?.payArrearInMonth || '',
    periodStartDays: selectedPayment?.periodStartDays || '',
    periodEndDays: selectedPayment?.periodEndDays || '',
    salaryArrearRateEffectFrom: selectedPayment?.salaryArrearRateEffectFrom || '',
    status: selectedPayment?.status || 'Pending for Approval',
    country: selectedPayment?.country || '',
    retroactivePaymentComponent: selectedPayment?.retroactivePaymentComponent || ''
  });

  const arrearTypeOptions = [
    '- New -',
    'Attendance Arrear',
    'Salary Arrear'
  ];

  const subsidiaryOptions = [
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DQ) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (s) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (SV) Pte Ltd'
  ];

  const workCalendarOptions = [
    '- New -',
    '2021 (MEP)',
    '2021 (TDQ)',
    '2021 (TEA)',
    '2021 (TMO)',
    '2021 (TSV)',
    '2022 MEP',
    '2022 (TDQ)',
    '2022 (TEA)',
    '2022 (TMO)',
    '2022 (TSV)',
    '2023 (MEP)',
    '2023 (TDQ)',
    '2023 (TEA)',
    '2023 (TMO)',
    '2023 (TSV)',
    '2024 (MEP)',
    '2024 (TDQ)',
    '2024 (TEA)',
    '2024 (TMO)',
    '2024 (TSV)'
  ];

  const statusOptions = [
    '- New -',
    'Pending for Approval',
    'Approved',
    'Rejected',
    'Processed',
    'Transfer to Payroll',
    'Loan Close',
    'Pending for loan Repayment'
  ];

  const retroactivePaymentComponentOptions = [
    '- New -',
    'Director\'s Fees',
    'Over Payment',
    'Reimbursement',
    'Staff Loan Deduction'
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
    if (!formData.arrearType || !formData.subsidiary) {
      showToast('Please fill in required fields', 'error');
      return;
    }

    showToast(selectedPayment ? 'Retroactive Payment updated successfully!' : 'Retroactive Payment created successfully!', 'success');
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
          <i className="fas fa-money-bill-wave" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Retroactive Payment</h1>
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
          <div className="form-grid" style={{ gap: '1rem' }}>
            <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input 
                type="checkbox" 
                id="inactive"
                checked={formData.inactive}
                onChange={(e) => handleInputChange('inactive', e.target.checked)}
                style={{ margin: '0' }}
              />
              <label htmlFor="inactive" className="form-label" style={{ margin: '0', cursor: 'pointer' }}>
                INACTIVE
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">PAY ARREAR IN PAY GROUP <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.payArrearInPayGroup}
                onChange={(e) => handleInputChange('payArrearInPayGroup', e.target.value)}
                placeholder="<Type then tab>"
              />
            </div>
            <div className="form-group">
              <label className="form-label">SALARY ARREAR RATE EFFECT FROM</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.salaryArrearRateEffectFrom}
                onChange={(e) => handleInputChange('salaryArrearRateEffectFrom', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">ARREAR TYPE <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.arrearType}
                onChange={(e) => handleInputChange('arrearType', e.target.value)}
              >
                <option value="">Select Arrear Type</option>
                {arrearTypeOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">PAY ARREAR IN WORK CALENDAR <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.payArrearInWorkCalendar}
                onChange={(e) => handleInputChange('payArrearInWorkCalendar', e.target.value)}
                placeholder="<Type then tab>"
              />
            </div>
            <div className="form-group">
              <label className="form-label">STATUS</label>
              <select 
                className="form-control"
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
              >
                {statusOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">SUBSIDIARY <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleInputChange('subsidiary', e.target.value)}
              >
                <option value="">Select Subsidiary</option>
                {subsidiaryOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">PAY ARREAR IN YEAR</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.payArrearInYear}
                onChange={(e) => handleInputChange('payArrearInYear', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">COUNTRY</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
                placeholder="<Type then tab>"
              />
            </div>
            <div className="form-group">
              <label className="form-label">ARREAR AGAINST PAY GROUP <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.arrearAgainstPayGroup}
                onChange={(e) => handleInputChange('arrearAgainstPayGroup', e.target.value)}
              >
                <option value="">Select Pay Group</option>
                <option>EP & Local (MEP)</option>
                <option>EP & Local (TDQ)</option>
                <option>EP & Local (TEA)</option>
                <option>EP & Local (TMO)</option>
                <option>EP & Local (TSV)</option>
                <option>Hourly (MEP)</option>
                <option>Hourly (TDQ)</option>
                <option>Hourly (TEA)</option>
                <option>Hourly (TMO)</option>
                <option>Hourly (TSV)</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">PAY ARREAR IN MONTH <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.payArrearInMonth}
                onChange={(e) => handleInputChange('payArrearInMonth', e.target.value)}
              >
                <option value="">Select Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">RETROACTIVE PAYMENT COMPONENT</label>
              <select 
                className="form-control"
                value={formData.retroactivePaymentComponent}
                onChange={(e) => handleInputChange('retroactivePaymentComponent', e.target.value)}
              >
                <option value="">Select Component</option>
                {retroactivePaymentComponentOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">ARREAR AGAINST WORK CALENDAR <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.arrearAgainstWorkCalendar}
                onChange={(e) => handleInputChange('arrearAgainstWorkCalendar', e.target.value)}
              >
                <option value="">Select Work Calendar</option>
                {workCalendarOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">PERIOD START DAYS</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.periodStartDays}
                onChange={(e) => handleInputChange('periodStartDays', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">ARREAR AGAINST YEAR</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.arrearAgainstYear}
                onChange={(e) => handleInputChange('arrearAgainstYear', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">PERIOD END DAYS</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.periodEndDays}
                onChange={(e) => handleInputChange('periodEndDays', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">ARREAR AGAINST MONTH <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.arrearAgainstMonth}
                onChange={(e) => handleInputChange('arrearAgainstMonth', e.target.value)}
              >
                <option value="">Select Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
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
              <label className="form-label">PERIOD END DATE</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.periodEndDate}
                onChange={(e) => handleInputChange('periodEndDate', e.target.value)}
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1.5rem 0' }} />

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

export default CreateRetroactivePayment;
