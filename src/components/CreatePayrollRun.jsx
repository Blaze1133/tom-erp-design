import React, { useState } from 'react';
import Toast from './Toast';
import CustomAlert from './CustomAlert';
import './Enquiries.css';

const CreatePayrollRun = ({ onBack, setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [alert, setAlert] = useState({ show: false, type: 'confirm', title: '', message: '', onConfirm: null, variant: 'warning' });
  const [formData, setFormData] = useState({
    subsidiary: '',
    payrollMonth: '',
    payGroup: '',
    payrollCalendar: '',
    cutoffDate: '',
    paymentDate: '',
    description: '',
    includeNewJoiners: true,
    includeResignations: true,
    autoApproveAttendance: false
  });

  const subsidiaries = [
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];

  const payGroups = [
    'Hourly',
    'EP & Local',
    'Both (Hourly + EP & Local)'
  ];

  const calendarMasters = [
    {
      id: 1,
      name: '2021 (MEP)',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
      year: 2021,
      startDate: '1/1/2021',
      endDate: '31/12/2021',
      inactive: false
    },
    {
      id: 2,
      name: '2021 (TDQ)',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd : Tech Offshore Marine (DQ) Pte Ltd',
      year: 2021,
      startDate: '1/1/2021',
      endDate: '31/12/2021',
      inactive: false
    },
    {
      id: 3,
      name: '2021 (TEA)',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd : Tech Electric & Automation Pte Ltd',
      year: 2021,
      startDate: '1/1/2021',
      endDate: '31/12/2021',
      inactive: false
    },
    {
      id: 4,
      name: '2021 (TMO)',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd : Tech Marine Offshore (S) Pte Ltd',
      year: 2021,
      startDate: '1/1/2021',
      endDate: '31/12/2021',
      inactive: false
    },
    {
      id: 5,
      name: '2021 (TSV)',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd : Tech Offshore Marine (SV) Pte Ltd',
      year: 2021,
      startDate: '1/1/2021',
      endDate: '31/12/2021',
      inactive: false
    },
    {
      id: 6,
      name: '2022 MEP',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
      year: 2022,
      startDate: '1/1/2022',
      endDate: '31/12/2022',
      inactive: false
    },
    {
      id: 7,
      name: '2022 TDQ',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd : Tech Offshore Marine (DQ) Pte Ltd',
      year: 2022,
      startDate: '1/1/2022',
      endDate: '31/12/2022',
      inactive: false
    },
    {
      id: 8,
      name: '2022 TEA',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd : Tech Electric & Automation Pte Ltd',
      year: 2022,
      startDate: '1/1/2022',
      endDate: '31/12/2022',
      inactive: false
    },
    {
      id: 9,
      name: '2022 TMO',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd : Tech Marine Offshore (S) Pte Ltd',
      year: 2022,
      startDate: '1/1/2022',
      endDate: '31/12/2022',
      inactive: false
    },
    {
      id: 10,
      name: '2022 TSV',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd : Tech Offshore Marine (SV) Pte Ltd',
      year: 2022,
      startDate: '1/1/2022',
      endDate: '31/12/2022',
      inactive: false
    },
    {
      id: 11,
      name: 'MEP 2023',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
      year: 2023,
      startDate: '1/1/2023',
      endDate: '31/12/2023',
      inactive: false
    },
    {
      id: 12,
      name: 'MEP 2024',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
      year: 2024,
      startDate: '1/1/2024',
      endDate: '31/12/2024',
      inactive: false
    },
    {
      id: 13,
      name: 'MEP 2025',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
      year: 2025,
      startDate: '1/1/2025',
      endDate: '31/12/2025',
      inactive: false
    }
  ];

  const activeCalendars = calendarMasters.filter(cal => !cal.inactive);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    if (!formData.subsidiary || !formData.payrollMonth || !formData.payGroup || !formData.payrollCalendar) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    showToast('Payroll Run created successfully! Pulling approved attendance...', 'success');
    setTimeout(() => {
      if (onBack) onBack();
      if (setCurrentPage) setCurrentPage('view-payroll-runs');
    }, 2000);
  };

  const handleCancel = () => {
    setAlert({
      show: true,
      type: 'confirm',
      title: 'Cancel Payroll Run',
      message: 'Are you sure you want to cancel? Any unsaved changes will be lost.',
      variant: 'warning',
      onConfirm: () => {
        setAlert({ ...alert, show: false });
        if (onBack) onBack();
        if (setCurrentPage) setCurrentPage('view-payroll-runs');
      },
      onCancel: () => setAlert({ ...alert, show: false })
    });
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-calculator"></i>
          <div>
            <h1>Create Payroll Run</h1>
            <div className="detail-subtitle">
              <span>Define payroll parameters and pull approved attendance</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={() => setCurrentPage && setCurrentPage('view-payroll-runs')}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar" onClick={handleCancel}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar-primary" onClick={handleSubmit}>
          <i className="fas fa-save"></i>
          Create Payroll Run
        </button>
      </div>

      <div className="detail-content">
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Payroll Run Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY <span className="required">*</span></label>
                <select
                  name="subsidiary"
                  value={formData.subsidiary}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="">Select Subsidiary</option>
                  {subsidiaries.map(sub => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>PAYROLL MONTH <span className="required">*</span></label>
                <input
                  type="month"
                  name="payrollMonth"
                  value={formData.payrollMonth}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              <div className="detail-field">
                <label>PAY GROUP <span className="required">*</span></label>
                <select
                  name="payGroup"
                  value={formData.payGroup}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="">Select Pay Group</option>
                  {payGroups.map(pg => (
                    <option key={pg} value={pg}>{pg}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>PAYROLL CALENDAR <span className="required">*</span></label>
                <select
                  name="payrollCalendar"
                  value={formData.payrollCalendar}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="">Select Calendar</option>
                  {activeCalendars.map(cal => (
                    <option key={cal.id} value={cal.name}>{cal.name} - {cal.year}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>CUTOFF DATE <span className="required">*</span></label>
                <input
                  type="date"
                  name="cutoffDate"
                  value={formData.cutoffDate}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              <div className="detail-field">
                <label>PAYMENT DATE <span className="required">*</span></label>
                <input
                  type="date"
                  name="paymentDate"
                  value={formData.paymentDate}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label>DESCRIPTION</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="form-control"
                  rows="3"
                  placeholder="Enter payroll run description..."
                  style={{ resize: 'vertical', maxWidth: '70%' }}
                />
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Processing Options</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem 0' }}>
                  <input
                    type="checkbox"
                    name="includeNewJoiners"
                    checked={formData.includeNewJoiners}
                    onChange={handleInputChange}
                    style={{ marginTop: '0.25rem' }}
                  />
                  <div>
                    <label style={{ fontWeight: '600', fontSize: '13px', color: '#333', marginBottom: '0.25rem', display: 'block' }}>
                      INCLUDE NEW JOINERS
                    </label>
                    <small style={{ color: '#666', fontSize: '12px' }}>
                      Include employees who joined during this payroll period
                    </small>
                  </div>
                </div>
              </div>

              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem 0' }}>
                  <input
                    type="checkbox"
                    name="includeResignations"
                    checked={formData.includeResignations}
                    onChange={handleInputChange}
                    style={{ marginTop: '0.25rem' }}
                  />
                  <div>
                    <label style={{ fontWeight: '600', fontSize: '13px', color: '#333', marginBottom: '0.25rem', display: 'block' }}>
                      INCLUDE RESIGNATIONS
                    </label>
                    <small style={{ color: '#666', fontSize: '12px' }}>
                      Include employees who resigned during this payroll period
                    </small>
                  </div>
                </div>
              </div>

              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem 0' }}>
                  <input
                    type="checkbox"
                    name="autoApproveAttendance"
                    checked={formData.autoApproveAttendance}
                    onChange={handleInputChange}
                    style={{ marginTop: '0.25rem' }}
                  />
                  <div>
                    <label style={{ fontWeight: '600', fontSize: '13px', color: '#333', marginBottom: '0.25rem', display: 'block' }}>
                      AUTO-APPROVE ATTENDANCE
                    </label>
                    <small style={{ color: '#666', fontSize: '12px' }}>
                      Automatically approve all pending attendance records
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>System Actions</h3>
          </div>
          <div className="section-body">
            <div style={{ padding: '1.25rem', background: '#f0f9ff', border: '1px solid #bfdbfe', borderRadius: '6px' }}>
              <h4 style={{ margin: '0 0 0.75rem 0', color: '#1e40af', fontSize: '14px', fontWeight: '600' }}>
                <i className="fas fa-info-circle" style={{ marginRight: '0.5rem' }}></i>
                What happens when you create this payroll run?
              </h4>
              <ul style={{ margin: 0, paddingLeft: '1.75rem', color: '#1e40af', fontSize: '13px', lineHeight: '1.8' }}>
                <li>System creates a new Payroll Run ID</li>
                <li>Pulls all approved attendance records for selected period and pay group</li>
                <li>Validates employee eligibility (active status, pay group match)</li>
                <li>Prepares attendance data for verification</li>
                <li>Locks approved timesheets for this payroll run</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Toast 
        message={toast.message} 
        type={toast.type} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />

      <CustomAlert
        show={alert.show}
        type={alert.type}
        title={alert.title}
        message={alert.message}
        variant={alert.variant}
        onConfirm={alert.onConfirm}
        onCancel={alert.onCancel}
      />
    </div>
  );
};

export default CreatePayrollRun;
