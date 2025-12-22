import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const PayrollAdjustments = ({ payrollRunId, onBack, onNext, viewOnly = false }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [searchText, setSearchText] = useState('');

  // Employee data with adjustments
  const [employees, setEmployees] = useState([
    {
      id: 'TMO008',
      name: 'Natarajan Muruganandham',
      department: 'TOM: Operating',
      designation: 'Technician',
      basicSalary: 2800.00,
      bonus: 500.00,
      bonusComponent: 'Performance Bonus',
      bonusRemarks: 'Q1 2024 Performance',
      deduction: 100.00,
      deductionComponent: 'Loan Recovery',
      deductionRemarks: 'Monthly installment'
    },
    {
      id: 'MEP01',
      name: 'Jeganathan Sundaravelu',
      department: 'TOM: Engineering',
      designation: 'Engineer',
      basicSalary: 3200.00,
      bonus: 150.00,
      bonusComponent: 'Transport Allowance',
      bonusRemarks: 'Monthly transport',
      deduction: 0,
      deductionComponent: '',
      deductionRemarks: ''
    },
    {
      id: 'TMO015',
      name: 'Kumar Selvam',
      department: 'TOM: Operating',
      designation: 'Operator',
      basicSalary: 2600.00,
      bonus: 200.00,
      bonusComponent: 'Site Allowance',
      bonusRemarks: 'Offshore site',
      deduction: 0,
      deductionComponent: '',
      deductionRemarks: ''
    },
    {
      id: 'TMO020',
      name: 'Ravi Chandran',
      department: 'TOM: Logistic',
      designation: 'Supervisor',
      basicSalary: 3000.00,
      bonus: 0,
      bonusComponent: '',
      bonusRemarks: '',
      deduction: 250.00,
      deductionComponent: 'Advance Adjustment',
      deductionRemarks: 'Salary advance'
    },
    {
      id: 'TMO025',
      name: 'Suresh Kumar',
      department: 'TOM: Production',
      designation: 'Technician',
      basicSalary: 2700.00,
      bonus: 0,
      bonusComponent: '',
      bonusRemarks: '',
      deduction: 0,
      deductionComponent: '',
      deductionRemarks: ''
    }
  ]);

  const bonusComponents = [
    'Performance Bonus',
    'Incentive',
    'Transport Allowance',
    'Site Allowance',
    'Special OT',
    'Commission',
    'Arrears',
    'Other Allowance'
  ];

  const deductionComponents = [
    'Loan Recovery',
    'Advance Adjustment',
    'Penalty',
    'Damage Recovery',
    'Uniform Deduction',
    'Tool Deduction',
    'Other Deduction'
  ];

  const handleCellChange = (employeeId, field, value) => {
    setEmployees(employees.map(emp => 
      emp.id === employeeId ? { ...emp, [field]: value } : emp
    ));
  };

  const handleProceed = () => {
    showToast('Adjustments saved. Proceeding to payroll calculation...', 'success');
    setTimeout(() => {
      if (onNext) onNext();
    }, 2000);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchText.toLowerCase()) ||
    emp.id.toLowerCase().includes(searchText.toLowerCase())
  );

  const totalBonus = employees.reduce((sum, emp) => sum + (parseFloat(emp.bonus) || 0), 0);
  const totalDeductions = employees.reduce((sum, emp) => sum + (parseFloat(emp.deduction) || 0), 0);
  const employeesWithBonus = employees.filter(emp => (parseFloat(emp.bonus) || 0) > 0).length;
  const employeesWithDeductions = employees.filter(emp => (parseFloat(emp.deduction) || 0) > 0).length;

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-dollar-sign"></i>
          <div>
            <h1>Payroll Adjustments</h1>
            <div className="detail-subtitle">
              <span>Payroll Run: {payrollRunId || 'PR-2024-05-001'}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={onBack}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar" onClick={onBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        {!viewOnly && (
          <button className="btn-toolbar-primary" onClick={handleProceed}>
            <i className="fas fa-arrow-right"></i>
            Proceed to Calculation
          </button>
        )}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search employees..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              fontSize: '13px',
              width: '250px'
            }}
          />
        </div>
      </div>

      <div className="detail-content">
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Adjustment Summary</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>TOTAL BONUS/ALLOWANCES</label>
                <div className="field-value" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>
                  ${totalBonus.toFixed(2)}
                </div>
              </div>
              <div className="detail-field">
                <label>TOTAL DEDUCTIONS</label>
                <div className="field-value" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#dc2626' }}>
                  ${totalDeductions.toFixed(2)}
                </div>
              </div>
              <div className="detail-field">
                <label>EMPLOYEES WITH BONUS</label>
                <div className="field-value" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4a5568' }}>
                  {employeesWithBonus}
                </div>
              </div>
              <div className="detail-field">
                <label>EMPLOYEES WITH DEDUCTIONS</label>
                <div className="field-value" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4a5568' }}>
                  {employeesWithDeductions}
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Employee Adjustments Grid ({filteredEmployees.length} employees)</h3>
          </div>
          <div className="section-body">
            <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
              <table className="detail-items-table" style={{ fontSize: '12px' }}>
                <thead>
                  <tr style={{ background: '#f8f9fa' }}>
                    <th style={{ minWidth: '100px', position: 'sticky', left: 0, background: '#f8f9fa', zIndex: 1 }}>EMP ID</th>
                    <th style={{ minWidth: '200px', position: 'sticky', left: '100px', background: '#f8f9fa', zIndex: 1 }}>EMPLOYEE NAME</th>
                    <th style={{ minWidth: '150px' }}>DEPARTMENT</th>
                    <th style={{ minWidth: '120px' }}>DESIGNATION</th>
                    <th style={{ minWidth: '120px', textAlign: 'right' }}>BASIC SALARY</th>
                    <th style={{ minWidth: '150px', background: '#e8f5e9' }}>BONUS COMPONENT</th>
                    <th style={{ minWidth: '120px', textAlign: 'right', background: '#e8f5e9' }}>BONUS AMOUNT</th>
                    <th style={{ minWidth: '150px', background: '#e8f5e9' }}>BONUS REMARKS</th>
                    <th style={{ minWidth: '180px', background: '#ffebee' }}>DEDUCTION COMPONENT</th>
                    <th style={{ minWidth: '140px', textAlign: 'right', background: '#ffebee' }}>DEDUCTION AMOUNT</th>
                    <th style={{ minWidth: '180px', background: '#ffebee' }}>DEDUCTION REMARKS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.map(emp => (
                    <tr key={emp.id}>
                      <td style={{ position: 'sticky', left: 0, background: 'white', fontWeight: '600' }}>{emp.id}</td>
                      <td style={{ position: 'sticky', left: '100px', background: 'white', fontWeight: '500' }}>{emp.name}</td>
                      <td>{emp.department}</td>
                      <td>{emp.designation}</td>
                      <td style={{ textAlign: 'right', fontWeight: '600' }}>${emp.basicSalary.toFixed(2)}</td>
                      <td style={{ background: '#f1f8f4' }}>
                        {viewOnly ? (
                          emp.bonusComponent
                        ) : (
                          <select
                            value={emp.bonusComponent}
                            onChange={(e) => handleCellChange(emp.id, 'bonusComponent', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '0.4rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '4px',
                              fontSize: '12px'
                            }}
                          >
                            <option value="">Select...</option>
                            {bonusComponents.map(comp => (
                              <option key={comp} value={comp}>{comp}</option>
                            ))}
                          </select>
                        )}
                      </td>
                      <td style={{ textAlign: 'right', background: '#f1f8f4' }}>
                        {viewOnly ? (
                          <span style={{ color: '#10b981', fontWeight: '600' }}>
                            {emp.bonus > 0 ? `$${parseFloat(emp.bonus).toFixed(2)}` : '-'}
                          </span>
                        ) : (
                          <input
                            type="number"
                            value={emp.bonus}
                            onChange={(e) => handleCellChange(emp.id, 'bonus', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '0.4rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '4px',
                              textAlign: 'right',
                              fontSize: '12px',
                              fontWeight: '600',
                              color: '#10b981'
                            }}
                            step="0.01"
                            min="0"
                          />
                        )}
                      </td>
                      <td style={{ background: '#f1f8f4' }}>
                        {viewOnly ? (
                          emp.bonusRemarks
                        ) : (
                          <input
                            type="text"
                            value={emp.bonusRemarks}
                            onChange={(e) => handleCellChange(emp.id, 'bonusRemarks', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '0.4rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '4px',
                              fontSize: '12px'
                            }}
                            placeholder="Remarks..."
                          />
                        )}
                      </td>
                      <td style={{ background: '#fef2f2' }}>
                        {viewOnly ? (
                          emp.deductionComponent
                        ) : (
                          <select
                            value={emp.deductionComponent}
                            onChange={(e) => handleCellChange(emp.id, 'deductionComponent', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '0.4rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '4px',
                              fontSize: '12px'
                            }}
                          >
                            <option value="">Select...</option>
                            {deductionComponents.map(comp => (
                              <option key={comp} value={comp}>{comp}</option>
                            ))}
                          </select>
                        )}
                      </td>
                      <td style={{ textAlign: 'right', background: '#fef2f2' }}>
                        {viewOnly ? (
                          <span style={{ color: '#dc2626', fontWeight: '600' }}>
                            {emp.deduction > 0 ? `$${parseFloat(emp.deduction).toFixed(2)}` : '-'}
                          </span>
                        ) : (
                          <input
                            type="number"
                            value={emp.deduction}
                            onChange={(e) => handleCellChange(emp.id, 'deduction', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '0.4rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '4px',
                              textAlign: 'right',
                              fontSize: '12px',
                              fontWeight: '600',
                              color: '#dc2626'
                            }}
                            step="0.01"
                            min="0"
                          />
                        )}
                      </td>
                      <td style={{ background: '#fef2f2' }}>
                        {viewOnly ? (
                          emp.deductionRemarks
                        ) : (
                          <input
                            type="text"
                            value={emp.deductionRemarks}
                            onChange={(e) => handleCellChange(emp.id, 'deductionRemarks', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '0.4rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '4px',
                              fontSize: '12px'
                            }}
                            placeholder="Remarks..."
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Important Notes</h3>
          </div>
          <div className="section-body">
            <div style={{ padding: '1.25rem', background: '#f0f9ff', border: '1px solid #bfdbfe', borderRadius: '6px' }}>
              <ul style={{ margin: 0, paddingLeft: '1.75rem', color: '#1e40af', fontSize: '13px', lineHeight: '1.8' }}>
                <li><strong>Excel-like Grid:</strong> Edit bonus and deduction amounts directly in the table cells</li>
                <li><strong>Bonus/Allowances:</strong> Select component type and enter amount for one-time or recurring bonuses</li>
                <li><strong>Deductions (Variable):</strong> Enter loan recovery, advance adjustments, penalties, etc.</li>
                <li><strong>Fixed Deductions:</strong> CPF, SDL, and other statutory deductions are calculated automatically</li>
                <li><strong>Search:</strong> Use the search box to quickly find specific employees</li>
                <li>All changes are saved automatically and can be modified before proceeding to calculation</li>
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
    </div>
  );
};

export default PayrollAdjustments;
