import React, { useState } from 'react';
import Toast from './Toast';
import PayrollWorkflowDiagram from './PayrollWorkflowDiagram';
import './Enquiries.css';

const PayrollAdjustments = ({ payrollRunId, onBack, onNext, viewOnly = false }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [searchText, setSearchText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [tempBonuses, setTempBonuses] = useState([]);
  const [tempDeductions, setTempDeductions] = useState([]);
  const [newBonus, setNewBonus] = useState({ component: '', amount: '', remarks: '' });
  const [newDeduction, setNewDeduction] = useState({ component: '', amount: '', remarks: '' });
  const [expandedRows, setExpandedRows] = useState({});

  // Employee data with adjustments (now supporting multiple bonuses and deductions)
  const [employees, setEmployees] = useState([
    {
      id: 'TMO008',
      name: 'Natarajan Muruganandham',
      department: 'TOM: Operating',
      designation: 'Technician',
      basicSalary: 2800.00,
      bonuses: [
        { component: 'Performance Bonus', amount: 500.00, remarks: 'Q1 2024 Performance' }
      ],
      deductions: [
        { component: 'Loan Recovery', amount: 100.00, remarks: 'Monthly installment' }
      ]
    },
    {
      id: 'MEP01',
      name: 'Jeganathan Sundaravelu',
      department: 'TOM: Engineering',
      designation: 'Engineer',
      basicSalary: 3200.00,
      bonuses: [
        { component: 'Transport Allowance', amount: 150.00, remarks: 'Monthly transport' }
      ],
      deductions: []
    },
    {
      id: 'TMO015',
      name: 'Kumar Selvam',
      department: 'TOM: Operating',
      designation: 'Operator',
      basicSalary: 2600.00,
      bonuses: [
        { component: 'Site Allowance', amount: 200.00, remarks: 'Offshore site' }
      ],
      deductions: []
    },
    {
      id: 'TMO020',
      name: 'Ravi Chandran',
      department: 'TOM: Logistic',
      designation: 'Supervisor',
      basicSalary: 3000.00,
      bonuses: [],
      deductions: [
        { component: 'Advance Adjustment', amount: 250.00, remarks: 'Salary advance' }
      ]
    },
    {
      id: 'TMO025',
      name: 'Suresh Kumar',
      department: 'TOM: Production',
      designation: 'Technician',
      basicSalary: 2700.00,
      bonuses: [],
      deductions: []
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

  // Calculate totals from arrays
  const totalBonus = employees.reduce((sum, emp) => 
    sum + emp.bonuses.reduce((bonusSum, bonus) => bonusSum + (parseFloat(bonus.amount) || 0), 0), 0
  );
  const totalDeductions = employees.reduce((sum, emp) => 
    sum + emp.deductions.reduce((dedSum, ded) => dedSum + (parseFloat(ded.amount) || 0), 0), 0
  );
  const employeesWithBonus = employees.filter(emp => emp.bonuses.length > 0).length;
  const employeesWithDeductions = employees.filter(emp => emp.deductions.length > 0).length;

  // Helper functions for managing adjustments
  const openAddModal = (employeeId) => {
    const emp = employees.find(e => e.id === employeeId);
    setSelectedEmployee(emp);
    setTempBonuses([...emp.bonuses]);
    setTempDeductions([...emp.deductions]);
    setNewBonus({ component: '', amount: '', remarks: '' });
    setNewDeduction({ component: '', amount: '', remarks: '' });
    setShowModal(true);
  };

  const handleAddBonus = () => {
    if (!newBonus.component || !newBonus.amount) {
      showToast('Please fill in component and amount for bonus', 'error');
      return;
    }
    setTempBonuses([...tempBonuses, { ...newBonus, amount: parseFloat(newBonus.amount) }]);
    setNewBonus({ component: '', amount: '', remarks: '' });
    showToast('Bonus added. You can add more or save all changes.', 'success');
  };

  const handleAddDeduction = () => {
    if (!newDeduction.component || !newDeduction.amount) {
      showToast('Please fill in component and amount for deduction', 'error');
      return;
    }
    setTempDeductions([...tempDeductions, { ...newDeduction, amount: parseFloat(newDeduction.amount) }]);
    setNewDeduction({ component: '', amount: '', remarks: '' });
    showToast('Deduction added. You can add more or save all changes.', 'success');
  };

  const handleRemoveTempBonus = (index) => {
    setTempBonuses(tempBonuses.filter((_, i) => i !== index));
  };

  const handleRemoveTempDeduction = (index) => {
    setTempDeductions(tempDeductions.filter((_, i) => i !== index));
  };

  const handleSaveAllAdjustments = () => {
    setEmployees(employees.map(emp => {
      if (emp.id === selectedEmployee.id) {
        return { ...emp, bonuses: tempBonuses, deductions: tempDeductions };
      }
      return emp;
    }));

    showToast('All adjustments saved successfully', 'success');
    setShowModal(false);
  };

  const updateBonus = (employeeId, index, field, value) => {
    setEmployees(employees.map(emp => {
      if (emp.id === employeeId) {
        const updatedBonuses = [...emp.bonuses];
        updatedBonuses[index] = { ...updatedBonuses[index], [field]: value };
        return { ...emp, bonuses: updatedBonuses };
      }
      return emp;
    }));
  };

  const updateDeduction = (employeeId, index, field, value) => {
    setEmployees(employees.map(emp => {
      if (emp.id === employeeId) {
        const updatedDeductions = [...emp.deductions];
        updatedDeductions[index] = { ...updatedDeductions[index], [field]: value };
        return { ...emp, deductions: updatedDeductions };
      }
      return emp;
    }));
  };

  const removeBonus = (employeeId, index) => {
    setEmployees(employees.map(emp => 
      emp.id === employeeId 
        ? { ...emp, bonuses: emp.bonuses.filter((_, i) => i !== index) }
        : emp
    ));
  };

  const removeDeduction = (employeeId, index) => {
    setEmployees(employees.map(emp => 
      emp.id === employeeId 
        ? { ...emp, deductions: emp.deductions.filter((_, i) => i !== index) }
        : emp
    ));
  };

  const getTotalBonus = (employee) => {
    return employee.bonuses.reduce((sum, bonus) => sum + (parseFloat(bonus.amount) || 0), 0);
  };

  const getTotalDeduction = (employee) => {
    return employee.deductions.reduce((sum, ded) => sum + (parseFloat(ded.amount) || 0), 0);
  };

  const toggleRow = (employeeId) => {
    setExpandedRows(prev => ({
      ...prev,
      [employeeId]: !prev[employeeId]
    }));
  };

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
        {/* Workflow Diagram */}
        <PayrollWorkflowDiagram currentStage="payroll-adjustments" compact={true} />

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
                    <th style={{ width: '40px' }}></th>
                    <th style={{ minWidth: '100px' }}>EMP ID</th>
                    <th style={{ minWidth: '200px' }}>EMPLOYEE NAME</th>
                    <th style={{ minWidth: '150px' }}>DEPARTMENT</th>
                    <th style={{ minWidth: '120px' }}>DESIGNATION</th>
                    <th style={{ minWidth: '120px', textAlign: 'right' }}>BASIC SALARY</th>
                    <th style={{ minWidth: '80px', textAlign: 'center', background: '#e8f5e9' }}>BONUSES</th>
                    <th style={{ minWidth: '120px', textAlign: 'right', background: '#e8f5e9' }}>TOTAL BONUS</th>
                    <th style={{ minWidth: '100px', textAlign: 'center', background: '#ffebee' }}>DEDUCTIONS</th>
                    <th style={{ minWidth: '120px', textAlign: 'right', background: '#ffebee' }}>TOTAL DEDUCTION</th>
                    <th style={{ minWidth: '100px', textAlign: 'center' }}>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.map(emp => (
                    <React.Fragment key={emp.id}>
                      {/* Main Summary Row */}
                      <tr style={{ borderBottom: expandedRows[emp.id] ? 'none' : '1px solid #e5e7eb' }}>
                        <td style={{ textAlign: 'center', padding: '8px' }}>
                          <button
                            onClick={() => toggleRow(emp.id)}
                            style={{
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              padding: '4px',
                              color: '#6b7280',
                              fontSize: '12px'
                            }}
                          >
                            <i className={`fas fa-chevron-${expandedRows[emp.id] ? 'down' : 'right'}`}></i>
                          </button>
                        </td>
                        <td style={{ fontWeight: '600' }}>{emp.id}</td>
                        <td style={{ fontWeight: '500' }}>{emp.name}</td>
                        <td>{emp.department}</td>
                        <td>{emp.designation}</td>
                        <td style={{ textAlign: 'right', fontWeight: '600' }}>${emp.basicSalary.toFixed(2)}</td>
                        <td style={{ textAlign: 'center', background: '#f1f8f4', fontWeight: '600', fontSize: '13px' }}>
                          {emp.bonuses.length}
                        </td>
                        <td style={{ textAlign: 'right', background: '#f1f8f4', fontWeight: '600', color: '#10b981' }}>
                          ${getTotalBonus(emp).toFixed(2)}
                        </td>
                        <td style={{ textAlign: 'center', background: '#fef2f2', fontWeight: '600', fontSize: '13px' }}>
                          {emp.deductions.length}
                        </td>
                        <td style={{ textAlign: 'right', background: '#fef2f2', fontWeight: '600', color: '#dc2626' }}>
                          ${getTotalDeduction(emp).toFixed(2)}
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          {!viewOnly && (
                            <button
                              onClick={() => openAddModal(emp.id)}
                              style={{
                                padding: '6px 12px',
                                background: '#4a90e2',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '11px',
                                fontWeight: '600'
                              }}
                              title="Add Adjustments"
                            >
                              Add
                            </button>
                          )}
                        </td>
                      </tr>
                      
                      {/* Expanded Detail Row */}
                      {expandedRows[emp.id] && (
                        <tr style={{ background: '#f9fafb', borderBottom: '2px solid #e5e7eb' }}>
                          <td colSpan="11" style={{ padding: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                              {/* Bonuses Section */}
                              <div>
                                <h4 style={{ margin: '0 0 0.75rem 0', fontSize: '13px', fontWeight: '600', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                  <i className="fas fa-plus-circle"></i>
                                  BONUSES & ALLOWANCES
                                </h4>
                                {emp.bonuses.length > 0 ? (
                                  <table style={{ width: '100%', fontSize: '12px', borderCollapse: 'separate', borderSpacing: 0, background: 'white', border: '1px solid #e5e7eb', borderRadius: '6px', overflow: 'hidden' }}>
                                    <thead>
                                      <tr style={{ background: '#f0fdf4' }}>
                                        <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#065f46', borderBottom: '1px solid #d1fae5' }}>COMPONENT</th>
                                        <th style={{ padding: '12px', textAlign: 'right', fontWeight: '600', fontSize: '11px', color: '#065f46', borderBottom: '1px solid #d1fae5' }}>AMOUNT</th>
                                        <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#065f46', borderBottom: '1px solid #d1fae5' }}>REMARKS</th>
                                        {!viewOnly && <th style={{ padding: '12px', width: '90px', fontSize: '11px', color: '#065f46', borderBottom: '1px solid #d1fae5', textAlign: 'center' }}>ACTION</th>}
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {emp.bonuses.map((bonus, idx) => (
                                        <tr key={idx} style={{ borderBottom: idx < emp.bonuses.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                                          <td style={{ padding: '12px', fontWeight: '500' }}>{bonus.component}</td>
                                          <td style={{ padding: '12px', textAlign: 'right', fontWeight: '600', color: '#10b981', fontSize: '13px' }}>
                                            ${parseFloat(bonus.amount).toFixed(2)}
                                          </td>
                                          <td style={{ padding: '12px', color: '#6b7280', fontSize: '11px' }}>{bonus.remarks || '-'}</td>
                                          {!viewOnly && (
                                            <td style={{ padding: '12px', textAlign: 'center' }}>
                                              <button
                                                onClick={() => removeBonus(emp.id, idx)}
                                                style={{
                                                  padding: '6px 12px',
                                                  background: '#dc2626',
                                                  color: 'white',
                                                  border: 'none',
                                                  borderRadius: '4px',
                                                  cursor: 'pointer',
                                                  fontSize: '11px',
                                                  fontWeight: '500'
                                                }}
                                              >
                                                Remove
                                              </button>
                                            </td>
                                          )}
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                ) : (
                                  <p style={{ margin: 0, color: '#9ca3af', fontSize: '12px', fontStyle: 'italic', padding: '1rem', background: 'white', borderRadius: '4px', border: '1px solid #e5e7eb' }}>No bonuses added</p>
                                )}
                              </div>
                              
                              {/* Deductions Section */}
                              <div>
                                <h4 style={{ margin: '0 0 0.75rem 0', fontSize: '13px', fontWeight: '600', color: '#dc2626', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                  <i className="fas fa-minus-circle"></i>
                                  DEDUCTIONS
                                </h4>
                                {emp.deductions.length > 0 ? (
                                  <table style={{ width: '100%', fontSize: '12px', borderCollapse: 'separate', borderSpacing: 0, background: 'white', border: '1px solid #e5e7eb', borderRadius: '6px', overflow: 'hidden' }}>
                                    <thead>
                                      <tr style={{ background: '#fef2f2' }}>
                                        <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#991b1b', borderBottom: '1px solid #fecaca' }}>COMPONENT</th>
                                        <th style={{ padding: '12px', textAlign: 'right', fontWeight: '600', fontSize: '11px', color: '#991b1b', borderBottom: '1px solid #fecaca' }}>AMOUNT</th>
                                        <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#991b1b', borderBottom: '1px solid #fecaca' }}>REMARKS</th>
                                        {!viewOnly && <th style={{ padding: '12px', width: '90px', fontSize: '11px', color: '#991b1b', borderBottom: '1px solid #fecaca', textAlign: 'center' }}>ACTION</th>}
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {emp.deductions.map((ded, idx) => (
                                        <tr key={idx} style={{ borderBottom: idx < emp.deductions.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                                          <td style={{ padding: '12px', fontWeight: '500' }}>{ded.component}</td>
                                          <td style={{ padding: '12px', textAlign: 'right', fontWeight: '600', color: '#dc2626', fontSize: '13px' }}>
                                            ${parseFloat(ded.amount).toFixed(2)}
                                          </td>
                                          <td style={{ padding: '12px', color: '#6b7280', fontSize: '11px' }}>{ded.remarks || '-'}</td>
                                          {!viewOnly && (
                                            <td style={{ padding: '12px', textAlign: 'center' }}>
                                              <button
                                                onClick={() => removeDeduction(emp.id, idx)}
                                                style={{
                                                  padding: '6px 12px',
                                                  background: '#dc2626',
                                                  color: 'white',
                                                  border: 'none',
                                                  borderRadius: '4px',
                                                  cursor: 'pointer',
                                                  fontSize: '11px',
                                                  fontWeight: '500'
                                                }}
                                              >
                                                Remove
                                              </button>
                                            </td>
                                          )}
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                ) : (
                                  <p style={{ margin: 0, color: '#9ca3af', fontSize: '12px', fontStyle: 'italic', padding: '1rem', background: 'white', borderRadius: '4px', border: '1px solid #e5e7eb' }}>No deductions added</p>
                                )}
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
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

      {/* Add Adjustments Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '6px',
            width: '1000px',
            maxWidth: '100%',
            maxHeight: '90vh',
            overflow: 'hidden',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Header */}
            <div style={{ 
              padding: '1.5rem 2rem', 
              borderBottom: '1px solid #e5e7eb',
              background: '#fafafa'
            }}>
              <h3 style={{ 
                margin: 0, 
                fontSize: '1.125rem', 
                fontWeight: '600', 
                color: '#1f2937'
              }}>
                {selectedEmployee?.name}
              </h3>
              <p style={{ 
                margin: '0.25rem 0 0 0', 
                fontSize: '0.875rem', 
                color: '#6b7280'
              }}>
                {selectedEmployee?.id} • {selectedEmployee?.designation}
              </p>
            </div>
            
            {/* Content */}
            <div style={{ 
              flex: 1, 
              overflow: 'auto', 
              padding: '2rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem'
            }}>
              {/* Bonuses Section */}
              <div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ 
                    margin: '0 0 0.25rem 0', 
                    fontSize: '0.875rem', 
                    fontWeight: '600', 
                    color: '#374151',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Bonuses & Allowances
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#9ca3af' }}>
                    Add performance bonuses, allowances, and other earnings
                  </p>
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.375rem', fontSize: '0.8125rem', fontWeight: '500', color: '#4b5563' }}>
                    Component
                  </label>
                  <select
                    value={newBonus.component}
                    onChange={(e) => setNewBonus({ ...newBonus, component: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.625rem 0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '4px',
                      fontSize: '0.875rem',
                      color: '#374151',
                      background: 'white'
                    }}
                  >
                    <option value="">Select component</option>
                    {bonusComponents.map(comp => (
                      <option key={comp} value={comp}>{comp}</option>
                    ))}
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.375rem', fontSize: '0.8125rem', fontWeight: '500', color: '#4b5563' }}>
                      Amount
                    </label>
                    <input
                      type="number"
                      value={newBonus.amount}
                      onChange={(e) => setNewBonus({ ...newBonus, amount: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.625rem 0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '0.875rem',
                        color: '#374151'
                      }}
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.375rem', fontSize: '0.8125rem', fontWeight: '500', color: '#4b5563' }}>
                      Remarks
                    </label>
                    <input
                      type="text"
                      value={newBonus.remarks}
                      onChange={(e) => setNewBonus({ ...newBonus, remarks: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.625rem 0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '0.875rem',
                        color: '#374151'
                      }}
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <button
                  onClick={handleAddBonus}
                  style={{
                    width: '100%',
                    padding: '0.625rem',
                    background: '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    marginBottom: '1.5rem'
                  }}
                >
                  + Add Bonus
                </button>

                {/* Current Bonuses List */}
                {tempBonuses.length > 0 && (
                  <div>
                    <div style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: '600', 
                      color: '#6b7280', 
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Added ({tempBonuses.length})
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {tempBonuses.map((bonus, idx) => (
                        <div key={idx} style={{ 
                          padding: '0.75rem', 
                          background: 'white',
                          border: '1px solid #e5e7eb',
                          borderRadius: '4px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start'
                        }}>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: '500', fontSize: '0.8125rem', color: '#1f2937', marginBottom: '0.125rem' }}>
                              {bonus.component}
                            </div>
                            <div style={{ fontSize: '0.875rem', color: '#10b981', fontWeight: '600' }}>
                              ${parseFloat(bonus.amount).toFixed(2)}
                            </div>
                            {bonus.remarks && (
                              <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
                                {bonus.remarks}
                              </div>
                            )}
                          </div>
                          <button
                            onClick={() => handleRemoveTempBonus(idx)}
                            style={{
                              padding: '0.25rem 0.5rem',
                              background: 'transparent',
                              color: '#9ca3af',
                              border: 'none',
                              cursor: 'pointer',
                              fontSize: '0.875rem'
                            }}
                            title="Remove"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Deductions Section */}
              <div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ 
                    margin: '0 0 0.25rem 0', 
                    fontSize: '0.875rem', 
                    fontWeight: '600', 
                    color: '#374151',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Deductions
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#9ca3af' }}>
                    Add loan recovery, penalties, and other deductions
                  </p>
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.375rem', fontSize: '0.8125rem', fontWeight: '500', color: '#4b5563' }}>
                    Component
                  </label>
                  <select
                    value={newDeduction.component}
                    onChange={(e) => setNewDeduction({ ...newDeduction, component: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.625rem 0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '4px',
                      fontSize: '0.875rem',
                      color: '#374151',
                      background: 'white'
                    }}
                  >
                    <option value="">Select component</option>
                    {deductionComponents.map(comp => (
                      <option key={comp} value={comp}>{comp}</option>
                    ))}
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.375rem', fontSize: '0.8125rem', fontWeight: '500', color: '#4b5563' }}>
                      Amount
                    </label>
                    <input
                      type="number"
                      value={newDeduction.amount}
                      onChange={(e) => setNewDeduction({ ...newDeduction, amount: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.625rem 0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '0.875rem',
                        color: '#374151'
                      }}
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.375rem', fontSize: '0.8125rem', fontWeight: '500', color: '#4b5563' }}>
                      Remarks
                    </label>
                    <input
                      type="text"
                      value={newDeduction.remarks}
                      onChange={(e) => setNewDeduction({ ...newDeduction, remarks: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.625rem 0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '0.875rem',
                        color: '#374151'
                      }}
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <button
                  onClick={handleAddDeduction}
                  style={{
                    width: '100%',
                    padding: '0.625rem',
                    background: '#ef4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    marginBottom: '1.5rem'
                  }}
                >
                  + Add Deduction
                </button>

                {/* Current Deductions List */}
                {tempDeductions.length > 0 && (
                  <div>
                    <div style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: '600', 
                      color: '#6b7280', 
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Added ({tempDeductions.length})
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {tempDeductions.map((ded, idx) => (
                        <div key={idx} style={{ 
                          padding: '0.75rem', 
                          background: 'white',
                          border: '1px solid #e5e7eb',
                          borderRadius: '4px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start'
                        }}>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: '500', fontSize: '0.8125rem', color: '#1f2937', marginBottom: '0.125rem' }}>
                              {ded.component}
                            </div>
                            <div style={{ fontSize: '0.875rem', color: '#ef4444', fontWeight: '600' }}>
                              ${parseFloat(ded.amount).toFixed(2)}
                            </div>
                            {ded.remarks && (
                              <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
                                {ded.remarks}
                              </div>
                            )}
                          </div>
                          <button
                            onClick={() => handleRemoveTempDeduction(idx)}
                            style={{
                              padding: '0.25rem 0.5rem',
                              background: 'transparent',
                              color: '#9ca3af',
                              border: 'none',
                              cursor: 'pointer',
                              fontSize: '0.875rem'
                            }}
                            title="Remove"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div style={{ 
              padding: '1.25rem 2rem', 
              borderTop: '1px solid #e5e7eb',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '0.75rem',
              background: '#fafafa'
            }}>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  padding: '0.625rem 1.25rem',
                  background: 'white',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#374151'
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSaveAllAdjustments}
                style={{
                  padding: '0.625rem 1.25rem',
                  background: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

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
