import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const PayrollAdjustments = ({ payrollRunId, onBack, onNext }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('additions');
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    employee: '',
    component: '',
    amount: '',
    remarks: ''
  });

  const [additions, setAdditions] = useState([
    {
      id: 1,
      employeeId: 'TMO008',
      employeeName: 'Natarajan Muruganandham',
      component: 'Performance Bonus',
      amount: 500.00,
      remarks: 'Q1 2024 Performance Bonus',
      addedBy: 'HR Manager',
      addedDate: '01-May-2024'
    },
    {
      id: 2,
      employeeId: 'MEP01',
      employeeName: 'Jeganathan Sundaravelu',
      component: 'Transport Allowance',
      amount: 150.00,
      remarks: 'Monthly transport allowance',
      addedBy: 'HR Manager',
      addedDate: '01-May-2024'
    },
    {
      id: 3,
      employeeId: 'TMO015',
      employeeName: 'Kumar Selvam',
      component: 'Site Allowance',
      amount: 200.00,
      remarks: 'Offshore site allowance',
      addedBy: 'HR Manager',
      addedDate: '01-May-2024'
    }
  ]);

  const [deductions, setDeductions] = useState([
    {
      id: 1,
      employeeId: 'TMO008',
      employeeName: 'Natarajan Muruganandham',
      component: 'Loan Recovery',
      amount: 100.00,
      remarks: 'Monthly loan installment',
      addedBy: 'HR Manager',
      addedDate: '01-May-2024'
    },
    {
      id: 2,
      employeeId: 'TMO020',
      employeeName: 'Ravi Chandran',
      component: 'Advance Adjustment',
      amount: 250.00,
      remarks: 'Salary advance recovery',
      addedBy: 'HR Manager',
      addedDate: '01-May-2024'
    }
  ]);

  const additionComponents = [
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

  const employees = [
    { id: 'TMO008', name: 'Natarajan Muruganandham' },
    { id: 'MEP01', name: 'Jeganathan Sundaravelu' },
    { id: 'TMO015', name: 'Kumar Selvam' },
    { id: 'TMO020', name: 'Ravi Chandran' },
    { id: 'TMO025', name: 'Suresh Kumar' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddAdjustment = () => {
    if (!formData.employee || !formData.component || !formData.amount) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    const selectedEmployee = employees.find(emp => emp.id === formData.employee);
    const newAdjustment = {
      id: activeTab === 'additions' ? additions.length + 1 : deductions.length + 1,
      employeeId: formData.employee,
      employeeName: selectedEmployee.name,
      component: formData.component,
      amount: parseFloat(formData.amount),
      remarks: formData.remarks,
      addedBy: 'HR Manager',
      addedDate: new Date().toLocaleDateString('en-GB')
    };

    if (activeTab === 'additions') {
      setAdditions([...additions, newAdjustment]);
      showToast('Addition added successfully', 'success');
    } else {
      setDeductions([...deductions, newAdjustment]);
      showToast('Deduction added successfully', 'success');
    }

    setFormData({ employee: '', component: '', amount: '', remarks: '' });
    setShowAddForm(false);
  };

  const handleDeleteAdjustment = (id) => {
    if (activeTab === 'additions') {
      setAdditions(additions.filter(item => item.id !== id));
      showToast('Addition removed', 'success');
    } else {
      setDeductions(deductions.filter(item => item.id !== id));
      showToast('Deduction removed', 'success');
    }
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

  const totalAdditions = additions.reduce((sum, item) => sum + item.amount, 0);
  const totalDeductions = deductions.reduce((sum, item) => sum + item.amount, 0);

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
        <button className="btn-toolbar-primary" onClick={handleProceed}>
          <i className="fas fa-arrow-right"></i>
          Proceed to Calculation
        </button>
        <button className="btn-toolbar" onClick={() => setShowAddForm(!showAddForm)}>
          <i className="fas fa-plus"></i>
          Add Adjustment
        </button>
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
                <label>TOTAL ADDITIONS</label>
                <div className="field-value" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>
                  ${totalAdditions.toFixed(2)}
                </div>
              </div>
              <div className="detail-field">
                <label>TOTAL DEDUCTIONS (VARIABLE)</label>
                <div className="field-value" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#dc2626' }}>
                  ${totalDeductions.toFixed(2)}
                </div>
              </div>
              <div className="detail-field">
                <label>EMPLOYEES WITH ADDITIONS</label>
                <div className="field-value" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4a5568' }}>
                  {new Set(additions.map(a => a.employeeId)).size}
                </div>
              </div>
              <div className="detail-field">
                <label>EMPLOYEES WITH DEDUCTIONS</label>
                <div className="field-value" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4a5568' }}>
                  {new Set(deductions.map(d => d.employeeId)).size}
                </div>
              </div>
            </div>
          </div>
        </div>

        {showAddForm && (
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Add {activeTab === 'additions' ? 'Addition' : 'Deduction'}</h3>
            </div>
            <div className="section-body">
              <div className="detail-grid">
                <div className="detail-field">
                  <label>EMPLOYEE <span className="required">*</span></label>
                  <select
                    name="employee"
                    value={formData.employee}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="">Select Employee</option>
                    {employees.map(emp => (
                      <option key={emp.id} value={emp.id}>{emp.id} - {emp.name}</option>
                    ))}
                  </select>
                </div>

                <div className="detail-field">
                  <label>COMPONENT <span className="required">*</span></label>
                  <select
                    name="component"
                    value={formData.component}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="">Select Component</option>
                    {(activeTab === 'additions' ? additionComponents : deductionComponents).map(comp => (
                      <option key={comp} value={comp}>{comp}</option>
                    ))}
                  </select>
                </div>

                <div className="detail-field">
                  <label>AMOUNT <span className="required">*</span></label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="0.00"
                    step="0.01"
                  />
                </div>

                <div className="detail-field">
                  <label>REMARKS</label>
                  <input
                    type="text"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Enter remarks..."
                  />
                </div>
              </div>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                <button className="btn-toolbar-primary" onClick={handleAddAdjustment}>
                  <i className="fas fa-check"></i>
                  Add
                </button>
                <button className="btn-toolbar" onClick={() => setShowAddForm(false)}>
                  <i className="fas fa-times"></i>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Adjustments Details</h3>
          </div>
          <div className="section-body">
            <div className="detail-tabs">
              <div className="tabs-header">
                <button 
                  className={`tab-btn ${activeTab === 'additions' ? 'active' : ''}`}
                  onClick={() => setActiveTab('additions')}
                >
                  Additions (Allowances / Bonuses) • {additions.length}
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'deductions' ? 'active' : ''}`}
                  onClick={() => setActiveTab('deductions')}
                >
                  Deductions (Variable) • {deductions.length}
                </button>
              </div>

              <div className="tabs-content">
                {activeTab === 'additions' && (
                  <div style={{ overflowX: 'auto' }}>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>EMPLOYEE ID</th>
                      <th>EMPLOYEE NAME</th>
                      <th>COMPONENT</th>
                      <th>AMOUNT</th>
                      <th>REMARKS</th>
                      <th>ADDED BY</th>
                      <th>ADDED DATE</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {additions.length === 0 ? (
                      <tr>
                        <td colSpan="8" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                          No additions added yet
                        </td>
                      </tr>
                    ) : (
                      additions.map(item => (
                        <tr key={item.id}>
                          <td>{item.employeeId}</td>
                          <td>{item.employeeName}</td>
                          <td>{item.component}</td>
                          <td style={{ color: '#10b981', fontWeight: 'bold' }}>+${item.amount.toFixed(2)}</td>
                          <td>{item.remarks}</td>
                          <td>{item.addedBy}</td>
                          <td>{item.addedDate}</td>
                          <td>
                            <button 
                              className="btn-table-action"
                              onClick={() => handleDeleteAdjustment(item.id)}
                              style={{ color: '#dc2626' }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
                  </div>
                )}

                {activeTab === 'deductions' && (
                  <div style={{ overflowX: 'auto' }}>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>EMPLOYEE ID</th>
                      <th>EMPLOYEE NAME</th>
                      <th>COMPONENT</th>
                      <th>AMOUNT</th>
                      <th>REMARKS</th>
                      <th>ADDED BY</th>
                      <th>ADDED DATE</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deductions.length === 0 ? (
                      <tr>
                        <td colSpan="8" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                          No deductions added yet
                        </td>
                      </tr>
                    ) : (
                      deductions.map(item => (
                        <tr key={item.id}>
                          <td>{item.employeeId}</td>
                          <td>{item.employeeName}</td>
                          <td>{item.component}</td>
                          <td style={{ color: '#dc2626', fontWeight: 'bold' }}>-${item.amount.toFixed(2)}</td>
                          <td>{item.remarks}</td>
                          <td>{item.addedBy}</td>
                          <td>{item.addedDate}</td>
                          <td>
                            <button 
                              className="btn-table-action"
                              onClick={() => handleDeleteAdjustment(item.id)}
                              style={{ color: '#dc2626' }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
                  </div>
                )}
              </div>
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
                <li><strong>Additions:</strong> One-time or recurring allowances, bonuses, incentives</li>
                <li><strong>Deductions (Variable):</strong> Loan recovery, advance adjustments, penalties</li>
                <li><strong>Fixed Deductions:</strong> CPF, SDL, and other statutory deductions are calculated automatically</li>
                <li>All adjustments can be edited before payroll calculation</li>
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
