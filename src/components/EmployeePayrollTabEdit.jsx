import React, { useState } from 'react';

const EmployeePayrollTabEdit = () => {
  const [payrollSubTab, setPayrollSubTab] = useState('earnings');

  const [payrollData, setPayrollData] = useState({
    inPayroll: true,
    payGroup: 'EP & Local (MEP)',
    cpfContribution: true,
    sdlApplicable: true,
    overtimeEntitled: false,
    leaveBuybackEligibility: false,
    awsApplicable: true,
    payMethod: 'Bank Transfer',
    monthlyBasicSalary: '1,700.00',
    dailyRate: '71.33',
    hourlyRate: '8.92',
    workDaysInWeek: '5.5',
    employeeWageType: 'MONTHLY',
    idTypeOfEmployee: 'Work Permit No',
    paySlipMode: 'e-Mail',
    cpfContributionType: 'Full and Graduated PR (1st year)',
    workingShift: '11 AM To 8 PM',
    nrIc: 'G7928569P',
    incomeTaxId: 'G7928569P',
    walAmountPaid: '',
    salaryAmountPaid: '',
    awAmountPaid: ''
  });

  const payGroups = [
    'Hourly (MEP)',
    'Hourly (TSV)',
    'EP & Local (MEP)',
    'EP & Local (TMO)',
    'EP & Local (TDQ)',
    'EP & Local (TSV)',
    'NVT GROUP',
    'TestPaygroup'
  ];

  const payMethods = ['- New -', 'Cash', 'Cheque', 'Bank Transfer'];
  const cpfContributionTypes = [
    '- New -',
    'Full and Graduated PR (1st year)',
    'Full and Graduated PR (2nd year)',
    'Graduated PR(1st year)',
    'Graduated PR(2nd year)',
    'Permanent Resident (3rd year & Above)'
  ];
  const workingShifts = [
    '11 AM To 8 PM',
    '8 AM To 5 PM',
    '7 AM To 4 PM',
    '5 AM To 2 PM',
    '10 AM To 7 PM',
    '9 AM To 6 PM',
    '12 PM To 9 PM',
    '1 PM To 10 PM'
  ];
  const paySlipModes = ['- New -', 'e-Mail', 'Hardcopy'];
  const employeeWageTypes = ['- New -', 'Daily', 'Hourly', 'MONTHLY'];
  const employeeIdTypes = ['- New -', 'E PASS', 'FIN (Foreign Identification No.)', 'NRIC', 'S PASS', 'Work Permit No'];
  const wageTypes = ['Ordinary', 'Overtime', 'Allowance'];
  const payComponents = ['Basic salary', 'Overtime', 'Allowance', 'Bonus'];
  const entitlementOptions = ['Yes', 'No'];
  const deductionComponents = ['Accommodation and Utility', 'Advance Recovery', 'Deductions'];

  const handleInputChange = (field, value) => {
    setPayrollData(prev => ({ ...prev, [field]: value }));
  };

  const [earningRows, setEarningRows] = useState([
    {
      id: Date.now(),
      payComponent: 'Basic salary',
      wageType: 'Ordinary',
      ctcPercentage: '',
      amount: '1,700.00',
      salaryFromDate: '',
      expiryDate: '',
      entitledForEiCash: ''
    }
  ]);

  const [deductionRows, setDeductionRows] = useState([
    {
      id: Date.now() + 1,
      componentName: 'Accommodation and Utility',
      amount: '100.00',
      expiryDate: ''
    }
  ]);

  const createEmptyEarning = () => ({
    id: Date.now() + Math.random(),
    payComponent: '',
    wageType: '',
    ctcPercentage: '',
    amount: '',
    salaryFromDate: '',
    expiryDate: '',
    entitledForEiCash: ''
  });

  const createEmptyDeduction = () => ({
    id: Date.now() + Math.random(),
    componentName: '',
    amount: '',
    expiryDate: ''
  });

  const handleEarningChange = (id, field, value) => {
    setEarningRows(prev => prev.map(row => (row.id === id ? { ...row, [field]: value } : row)));
  };

  const handleAddEarning = () => {
    setEarningRows(prev => [...prev, createEmptyEarning()]);
  };

  const handleRemoveEarning = () => {
    setEarningRows(prev => (prev.length > 1 ? prev.slice(0, prev.length - 1) : prev));
  };

  const handleDeductionChange = (id, field, value) => {
    setDeductionRows(prev => prev.map(row => (row.id === id ? { ...row, [field]: value } : row)));
  };

  const handleAddDeduction = () => {
    setDeductionRows(prev => [...prev, createEmptyDeduction()]);
  };

  const handleRemoveDeduction = () => {
    setDeductionRows(prev => (prev.length > 1 ? prev.slice(0, prev.length - 1) : prev));
  };

  const payrollToggle = (field) => (
    <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 500, fontSize: '0.8rem' }}>
      <input
        type="checkbox"
        checked={payrollData[field]}
        onChange={(e) => handleInputChange(field, e.target.checked)}
      />
      {field === 'inPayroll' && 'IN PAYROLL'}
      {field === 'cpfContribution' && 'CPF CONTRIBUTION'}
      {field === 'sdlApplicable' && 'SDL APPLICABLE'}
      {field === 'overtimeEntitled' && 'OVERTIME ENTITLED'}
      {field === 'leaveBuybackEligibility' && 'LEAVE BUY BACK ELIGIBILITY STATUS'}
      {field === 'awsApplicable' && 'AWS APPLICABLE'}
    </label>
  );

  return (
    <div className="tab-content-wrapper">
      <style jsx>{`
        .form-group {
          margin-bottom: 0.5rem;
        }
        .form-label {
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          color: #4a5568;
        }
        .form-control {
          padding: 0.375rem 0.5rem;
          font-size: 0.8rem;
          height: auto;
        }
      `}</style>
      <div style={{
        padding: '1rem',
        background: '#f8f9fa',
        borderBottom: '1px solid #e0e0e0',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '1rem',
        fontSize: '0.85rem'
      }}>
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          <div className="form-group">
            {payrollToggle('inPayroll')}
          </div>
          <div className="form-group">
            <label className="form-label required">PAY GROUP</label>
            <select
              className="form-control"
              value={payrollData.payGroup}
              onChange={(e) => handleInputChange('payGroup', e.target.value)}
            >
              {payGroups.map(group => (
                <option key={group} value={group}>{group}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            {payrollToggle('cpfContribution')}
          </div>
          <div className="form-group">
            {payrollToggle('sdlApplicable')}
          </div>
          <div className="form-group">
            {payrollToggle('overtimeEntitled')}
          </div>
          <div className="form-group">
            {payrollToggle('leaveBuybackEligibility')}
          </div>
          <div className="form-group">
            {payrollToggle('awsApplicable')}
          </div>
          <div className="form-group">
            <label className="form-label">SALARY AMOUNT PAID</label>
            <input
              type="text"
              className="form-control"
              value={payrollData.salaryAmountPaid}
              onChange={(e) => handleInputChange('salaryAmountPaid', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">AW AMOUNT PAID</label>
            <input
              type="text"
              className="form-control"
              value={payrollData.awAmountPaid}
              onChange={(e) => handleInputChange('awAmountPaid', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label required">CPF CONTRIBUTION TYPE</label>
            <select
              className="form-control"
              value={payrollData.cpfContributionType}
              onChange={(e) => handleInputChange('cpfContributionType', e.target.value)}
            >
              {cpfContributionTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label required">NRIC | CPF | FIN ID</label>
            <input
              type="text"
              className="form-control"
              value={payrollData.nrIc}
              onChange={(e) => handleInputChange('nrIc', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">INCOME TAX ID</label>
            <input
              type="text"
              className="form-control"
              value={payrollData.incomeTaxId}
              onChange={(e) => handleInputChange('incomeTaxId', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label required">EMPLOYEE WORKING SHIFT</label>
            <select
              className="form-control"
              value={payrollData.workingShift}
              onChange={(e) => handleInputChange('workingShift', e.target.value)}
            >
              {workingShifts.map(shift => (
                <option key={shift} value={shift}>{shift}</option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '0.75rem' }}>
          <div className="form-group">
            <label className="form-label">WORK DAYS IN WEEK</label>
            <input
              type="text"
              className="form-control"
              value={payrollData.workDaysInWeek}
              onChange={(e) => handleInputChange('workDaysInWeek', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">MONTHLY BASIC SALARY</label>
            <input
              type="text"
              className="form-control"
              value={payrollData.monthlyBasicSalary}
              onChange={(e) => handleInputChange('monthlyBasicSalary', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">HOURLY RATE</label>
            <input
              type="text"
              className="form-control"
              value={payrollData.hourlyRate}
              onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">ANNUAL CPF AW CEILING</label>
            <input type="text" className="form-control" defaultValue="102,000.00" disabled />
          </div>
          <div className="form-group">
            <label className="form-label">EMPLOYEE WAGE TYPE</label>
            <select
              className="form-control"
              value={payrollData.employeeWageType}
              onChange={(e) => handleInputChange('employeeWageType', e.target.value)}
            >
              {employeeWageTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">MONTHLY TOTAL SALARY</label>
            <input type="text" className="form-control" defaultValue="1,700.00" disabled />
          </div>
        </div>

        <div style={{ display: 'grid', gap: '0.75rem' }}>
          <div className="form-group">
            <label className="form-label">PAY METHOD</label>
            <select
              className="form-control"
              value={payrollData.payMethod}
              onChange={(e) => handleInputChange('payMethod', e.target.value)}
            >
              {payMethods.map(method => (
                <option key={method} value={method}>{method}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">DAILY RATE</label>
            <input
              type="text"
              className="form-control"
              value={payrollData.dailyRate}
              onChange={(e) => handleInputChange('dailyRate', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">MONTHLY CPF OW CEILING</label>
            <input type="text" className="form-control" defaultValue="7,400.00" disabled />
          </div>
          <div className="form-group">
            <label className="form-label">PAY SLIP MODE</label>
            <select
              className="form-control"
              value={payrollData.paySlipMode}
              onChange={(e) => handleInputChange('paySlipMode', e.target.value)}
            >
              {paySlipModes.map(mode => (
                <option key={mode} value={mode}>{mode}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">ID TYPE OF EMPLOYEE</label>
            <select
              className="form-control"
              value={payrollData.idTypeOfEmployee}
              onChange={(e) => handleInputChange('idTypeOfEmployee', e.target.value)}
            >
              {employeeIdTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">HOURLY RATE BASED ON - MONTHLY TOTAL SALARY</label>
            <input type="text" className="form-control" defaultValue="8.92" disabled />
          </div>
        </div>
      </div>

      <div style={{
        borderBottom: '2px solid #e0e0e0',
        background: '#f8f9fa',
        display: 'flex',
        gap: '0.5rem',
        padding: '0.5rem 1rem'
      }}>
        <button
          className={`tab-btn ${payrollSubTab === 'earnings' ? 'active' : ''}`}
          onClick={() => setPayrollSubTab('earnings')}
          style={{
            fontSize: '0.8rem',
            padding: '0.5rem 1rem',
            border: 'none',
            background: payrollSubTab === 'earnings' ? '#4a5568' : 'transparent',
            color: payrollSubTab === 'earnings' ? '#fff' : '#4a5568',
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          Employee Pay Earning ●
        </button>
        <button
          className={`tab-btn ${payrollSubTab === 'deductions' ? 'active' : ''}`}
          onClick={() => setPayrollSubTab('deductions')}
          style={{
            fontSize: '0.8rem',
            padding: '0.5rem 1rem',
            border: 'none',
            background: payrollSubTab === 'deductions' ? '#4a5568' : 'transparent',
            color: payrollSubTab === 'deductions' ? '#fff' : '#4a5568',
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          Employee Pay Deduction ●
        </button>
      </div>

      <div style={{ padding: '1.5rem', background: '#fff' }}>
        {payrollSubTab === 'earnings' && (
          <>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#4a5568' }}>New Employee Pay Earning</h3>
            </div>
            <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>PAY COMPONENT</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>WAGE TYPE</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>% OF CTC AMOUNT</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>AMOUNT</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>SALARY FROM DATE</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>EXPIRY DATE</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>ENTITLED FOR EI-CASH</th>
                  </tr>
                </thead>
                <tbody>
                  {earningRows.map(row => (
                    <tr key={row.id} style={{ borderBottom: '1px solid #dee2e6' }}>
                      <td style={{ padding: '0.5rem' }}>
                        <select
                          className="form-control"
                          value={row.payComponent}
                          onChange={(e) => handleEarningChange(row.id, 'payComponent', e.target.value)}
                        >
                          <option value=""></option>
                          {payComponents.map(component => (
                            <option key={component} value={component}>{component}</option>
                          ))}
                        </select>
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <select
                          className="form-control"
                          value={row.wageType}
                          onChange={(e) => handleEarningChange(row.id, 'wageType', e.target.value)}
                        >
                          <option value=""></option>
                          {wageTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <input
                          type="text"
                          className="form-control"
                          value={row.ctcPercentage}
                          onChange={(e) => handleEarningChange(row.id, 'ctcPercentage', e.target.value)}
                        />
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <input
                          type="text"
                          className="form-control"
                          value={row.amount}
                          onChange={(e) => handleEarningChange(row.id, 'amount', e.target.value)}
                        />
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <input
                          type="date"
                          className="form-control"
                          value={row.salaryFromDate}
                          onChange={(e) => handleEarningChange(row.id, 'salaryFromDate', e.target.value)}
                        />
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <input
                          type="date"
                          className="form-control"
                          value={row.expiryDate}
                          onChange={(e) => handleEarningChange(row.id, 'expiryDate', e.target.value)}
                        />
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <select
                          className="form-control"
                          value={row.entitledForEiCash}
                          onChange={(e) => handleEarningChange(row.id, 'entitledForEiCash', e.target.value)}
                        >
                          <option value=""></option>
                          {entitlementOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {payrollSubTab === 'deductions' && (
          <>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#4a5568' }}>New Employee Pay Deduction</h3>
            </div>
            <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>COMPONENT NAME</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>AMOUNT</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left' }}>EXPIRY DATE</th>
                  </tr>
                </thead>
                <tbody>
                  {deductionRows.map(row => (
                    <tr key={row.id} style={{ borderBottom: '1px solid #dee2e6' }}>
                      <td style={{ padding: '0.5rem' }}>
                        <select
                          className="form-control"
                          value={row.componentName}
                          onChange={(e) => handleDeductionChange(row.id, 'componentName', e.target.value)}
                        >
                          <option value=""></option>
                          {deductionComponents.map(component => (
                            <option key={component} value={component}>{component}</option>
                          ))}
                        </select>
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <input
                          type="text"
                          className="form-control"
                          value={row.amount}
                          onChange={(e) => handleDeductionChange(row.id, 'amount', e.target.value)}
                        />
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <input
                          type="date"
                          className="form-control"
                          value={row.expiryDate}
                          onChange={(e) => handleDeductionChange(row.id, 'expiryDate', e.target.value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', padding: '1.5rem', borderTop: '1px solid #e8e8e8' }}>
        <button className="btn btn-primary"><i className="fas fa-check"></i> Save</button>
        <button className="btn btn-secondary"><i className="fas fa-times"></i> Cancel</button>
        <button className="btn btn-secondary"><i className="fas fa-search"></i> Search</button>
        <button className="btn btn-secondary"><i className="fas fa-bars"></i> Actions</button>
      </div>
    </div>
  );
};

export default EmployeePayrollTabEdit;
