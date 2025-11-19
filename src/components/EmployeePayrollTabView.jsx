import React, { useState } from 'react';

const EmployeePayrollTabView = () => {
  const [payrollSubTab, setPayrollSubTab] = useState('earnings');

  const payrollInfo = {
    inPayroll: true,
    payGroup: 'EP & Local (MEP)',
    cpfContribution: true,
    sdlApplicable: true,
    overtimeEntitled: false,
    leaveBuybackEligibility: false,
    awsApplicable: true,
    salaryAmountPaid: '',
    awAmountPaid: '',
    cpfContributionType: 'Full and Graduated PR (1st year)',
    nrIc: 'G7928569P',
    incomeTaxId: 'G7928569P',
    workingShift: '11 AM To 8 PM',
    workDaysInWeek: '5.5',
    payMethod: 'Bank Transfer',
    monthlyBasicSalary: '1,700.00',
    dailyRate: '71.33',
    hourlyRate: '8.92',
    monthlyCpfOwCeiling: '7,400.00',
    annualCpfAwCeiling: '102,000.00',
    paySlipMode: 'e-Mail',
    employeeWageType: 'MONTHLY',
    idTypeOfEmployee: 'Work Permit No',
    monthlyTotalSalary: '1,700.00',
    hourlyRateBased: '8.92'
  };

  const earningRows = [
    {
      id: 1,
      payComponent: 'Basic salary',
      wageType: 'Ordinary',
      ctcPercentage: '',
      amount: '1,700.00',
      salaryFromDate: '20/08/2025',
      expiryDate: '',
      entitledForEiCash: 'Yes'
    }
  ];

  const deductionRows = [
    {
      id: 1,
      componentName: 'Accommodation and Utility',
      amount: '100.00',
      expiryDate: ''
    }
  ];

  const infoBlock = (label, value, span) => (
    <div className="detail-field" style={span ? { gridColumn: `span ${span}` } : undefined}>
      <label>{label}</label>
      <div className="field-value">{value}</div>
    </div>
  );

  const toggleDisplay = (label, checked) => (
    <div className="detail-field" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <label style={{ margin: 0 }}>{label}</label>
      <input type="checkbox" checked={checked} disabled />
    </div>
  );

  return (
    <div className="tab-content-wrapper">
      <div style={{
        padding: '1.5rem',
        background: '#f8f9fa',
        borderBottom: '1px solid #e0e0e0',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem'
      }}>
        <div className="detail-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          {toggleDisplay('IN PAYROLL', payrollInfo.inPayroll)}
          {infoBlock('PAY GROUP', payrollInfo.payGroup)}
          {toggleDisplay('CPF CONTRIBUTION', payrollInfo.cpfContribution)}
          {toggleDisplay('SDL APPLICABLE', payrollInfo.sdlApplicable)}
          {toggleDisplay('OVERTIME ENTITLED', payrollInfo.overtimeEntitled)}
          {toggleDisplay('LEAVE BUY BACK ELIGIBILITY STATUS', payrollInfo.leaveBuybackEligibility)}
          {toggleDisplay('AWS APPLICABLE', payrollInfo.awsApplicable)}
          {infoBlock('SALARY AMOUNT PAID', payrollInfo.salaryAmountPaid)}
          {infoBlock('AW AMOUNT PAID', payrollInfo.awAmountPaid)}
          {infoBlock('CPF CONTRIBUTION TYPE', payrollInfo.cpfContributionType, 2)}
          {infoBlock('NRIC | CPF | FIN ID', payrollInfo.nrIc)}
          {infoBlock('INCOME TAX ID', payrollInfo.incomeTaxId)}
          {infoBlock('EMPLOYEE WORKING SHIFT', payrollInfo.workingShift)}
        </div>

        <div className="detail-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          {infoBlock('WORK DAYS IN WEEK', payrollInfo.workDaysInWeek)}
          {infoBlock('PAY METHOD', payrollInfo.payMethod)}
          {infoBlock('MONTHLY BASIC SALARY', payrollInfo.monthlyBasicSalary)}
          {infoBlock('DAILY RATE', payrollInfo.dailyRate)}
          {infoBlock('HOURLY RATE', payrollInfo.hourlyRate)}
          {infoBlock('MONTHLY CPF OW CEILING', payrollInfo.monthlyCpfOwCeiling)}
          {infoBlock('ANNUAL CPF AW CEILING', payrollInfo.annualCpfAwCeiling)}
          {infoBlock('PAY SLIP MODE', payrollInfo.paySlipMode)}
          {infoBlock('EMPLOYEE WAGE TYPE', payrollInfo.employeeWageType)}
          {infoBlock('ID TYPE OF EMPLOYEE', payrollInfo.idTypeOfEmployee)}
          {infoBlock('MONTHLY TOTAL SALARY', payrollInfo.monthlyTotalSalary)}
          {infoBlock('HOURLY RATE BASED ON - MONTHLY TOTAL SALARY', payrollInfo.hourlyRateBased)}
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
          <div className="items-table-wrapper">
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th>PAY COMPONENT</th>
                  <th>WAGE TYPE</th>
                  <th>% OF CTC AMOUNT</th>
                  <th>AMOUNT</th>
                  <th>SALARY FROM DATE</th>
                  <th>EXPIRY DATE</th>
                  <th>ENTITLED FOR EI-CASH</th>
                </tr>
              </thead>
              <tbody>
                {earningRows.length === 0 ? (
                  <tr>
                    <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                      No earnings available
                    </td>
                  </tr>
                ) : (
                  earningRows.map(row => (
                    <tr key={row.id}>
                      <td>{row.payComponent}</td>
                      <td>{row.wageType}</td>
                      <td>{row.ctcPercentage}</td>
                      <td>{row.amount}</td>
                      <td>{row.salaryFromDate}</td>
                      <td>{row.expiryDate}</td>
                      <td>{row.entitledForEiCash}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {payrollSubTab === 'deductions' && (
          <div className="items-table-wrapper">
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th>COMPONENT NAME</th>
                  <th>AMOUNT</th>
                  <th>EXPIRY DATE</th>
                </tr>
              </thead>
              <tbody>
                {deductionRows.length === 0 ? (
                  <tr>
                    <td colSpan="3" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                      No deductions available
                    </td>
                  </tr>
                ) : (
                  deductionRows.map(row => (
                    <tr key={row.id}>
                      <td>{row.componentName}</td>
                      <td>{row.amount}</td>
                      <td>{row.expiryDate}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeePayrollTabView;
