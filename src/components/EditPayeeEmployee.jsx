import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditPayeeEmployee = ({ onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('pay-earning');
  const [basicInfoCollapsed, setBasicInfoCollapsed] = useState(false);
  const [workDaysCollapsed, setWorkDaysCollapsed] = useState(false);
  const [systemCollapsed, setSystemCollapsed] = useState(false);

  // Form data state
  const [formData, setFormData] = useState({
    customForm: 'Payee Employee Singapore',
    refPayrollRecord: 'PBATCH00176',
    payCalendar: '2021 (TSV)',
    employeeCode: 'TSV002',
    employeeName: 'Hossain Anwar',
    dateOfBirth: '1978-05-10',
    ageGroup: '50 & Below',
    department: 'Shipyard : Megayard',
    location: 'Singapore (TSV)',
    hireDate: '2007-02-14',
    empGroup: '',
    status: 'Foreigner',
    shiftType: '8 AM To 5 PM',
    cpfApplicable: true,
    payEntitled: true,
    hourRate: 7.87,
    employeeType: 'MONTHLY',
    employeeWageType: 'MONTHLY',
    workDaysWeek: 5.5,
    offDays: 0,
    compWorkDays: 25,
    presentDays: 25,
    noPayLeave: 0,
    paidDays: 25,
    paidLeave: 0,
    ot1Hour: 0,
    ot2Hour: 0,
    totalEarning: 1500.00,
    deduction: 150.00,
    netIncome: 1350.00,
    cpfOrdWage: 1450.00,
    cpfAwWage: 0.00,
    paidOw: 1450.00,
    paidAw: 0.00,
    cpfCappingAwBal: 102000.00,
    pqQualificationCode: 'Marine WPH Basic Tier-300',
    incomeTaxId: 'G7528160L',
    leftDate: '',
    fixedMonthSalary: 2000.00,
    monthlyBasicPay: 1500.00,
    payeeClass: '',
    paySlipMessage: 'ERROR: Field \'contract_pay_batch_memo\' Not Found',
    attanSave: true,
    payRun: false,
    payCommit: true,
    sendEmail: false,
    mobilePayslip: true,
    publicHoliday: 0.0,
    monthlyTotalSalary: 1500.00,
    payeeCpfType: '',
    mosqueBuilding: '',
    mendakiFund: '',
    monthlyBasicSalary: 1500.00,
    bonusCalendar: ''
  });

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
    showToast('Payee Employee updated successfully!', 'success');
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
          <i className="fas fa-user" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Payee Employee</h1>
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

      <div className="form-content">
        {/* Basic Information Section */}
        <div className={`form-section ${basicInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setBasicInfoCollapsed(!basicInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Basic</h3>
          </div>
          <div className="section-body">
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">CUSTOM FORM <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.customForm}
                  onChange={(e) => handleInputChange('customForm', e.target.value)}
                >
                  <option>Payee Employee Singapore</option>
                  <option>Payee Employee-CONGO</option>
                  <option>Payee Employee-Dubai</option>
                  <option>Payee Employee-India</option>
                  <option>Payee Employee-Indonesia</option>
                  <option>Payee Employee-Nigeria</option>
                  <option>Payee Employee-Philippines</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">EMP GROUP</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.empGroup}
                  onChange={(e) => handleInputChange('empGroup', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">EMPLOYEE WAGE TYPE</label>
                <div className="field-value">{formData.employeeWageType}</div>
              </div>
              <div className="form-group">
                <label className="form-label">REF PAYROLL RECORD</label>
                <div className="field-value">{formData.refPayrollRecord}</div>
              </div>
              <div className="form-group">
                <label className="form-label">STATUS</label>
                <div className="field-value">{formData.status}</div>
              </div>
              <div className="form-group">
                <label className="form-label">CPF APPLICABLE</label>
                <div className="field-value">
                  {formData.cpfApplicable ? (
                    <i className="fas fa-check" style={{ color: '#28a745' }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: '#dc3545' }}></i>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">PAY CALENDAR</label>
                <div className="field-value">{formData.payCalendar}</div>
              </div>
              <div className="form-group">
                <label className="form-label">SHIFT TYPE</label>
                <div className="field-value">{formData.shiftType}</div>
              </div>
              <div className="form-group">
                <label className="form-label">LEFT DATE</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.leftDate}
                  onChange={(e) => handleInputChange('leftDate', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">EMPLOYEE NAME</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.employeeName}
                  onChange={(e) => handleInputChange('employeeName', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">PAY ENTITLED</label>
                <div className="field-value">
                  {formData.payEntitled ? (
                    <i className="fas fa-check" style={{ color: '#28a745' }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: '#dc3545' }}></i>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">FIXED MONTH SALARY</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.fixedMonthSalary}
                  onChange={(e) => handleInputChange('fixedMonthSalary', parseFloat(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">DATE OF BIRTH</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">CPF CAPPING AW BAL</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.cpfCappingAwBal}
                  onChange={(e) => handleInputChange('cpfCappingAwBal', parseFloat(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">MONTHLY BASIC PAY</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.monthlyBasicPay}
                  onChange={(e) => handleInputChange('monthlyBasicPay', parseFloat(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">AGE GROUP</label>
                <select 
                  className="form-control"
                  value={formData.ageGroup}
                  onChange={(e) => handleInputChange('ageGroup', e.target.value)}
                >
                  <option>50 & Below</option>
                  <option>Above 50 to 55</option>
                  <option>Above 55 to 60</option>
                  <option>Above 60-65</option>
                  <option>Above 65 -70</option>
                  <option>Above 70</option>
                  <option>Age 60-75</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">HOUR RATE</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.hourRate}
                  onChange={(e) => handleInputChange('hourRate', parseFloat(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">PAYEE CLASS</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.payeeClass}
                  onChange={(e) => handleInputChange('payeeClass', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">DEPARTMENT</label>
                <select 
                  className="form-control"
                  value={formData.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                >
                  <option value="">Select Department</option>
                  <option>TOM: Human Resource</option>
                  <option>TOM: Finance: Internal Transfer</option>
                  <option>TOM: IT</option>
                  <option>TOM: Logistic</option>
                  <option>TOM: Operating</option>
                  <option>TOM: Purchase</option>
                  <option>TOM: Sales and Marketing</option>
                  <option>TOM: Security</option>
                  <option>TOM: TOM INTERNALS: TOM HR</option>
                  <option>TOM: Nampak Reinsure</option>
                  <option>TOM: Auction Handover</option>
                  <option>TOM: Engineering</option>
                  <option>TOM: Production</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">EMPLOYEE TYPE</label>
                <div className="field-value">{formData.employeeType}</div>
              </div>
              <div className="form-group">
                <label className="form-label">PAY SLIP MESSAGE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.paySlipMessage}
                  onChange={(e) => handleInputChange('paySlipMessage', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">LOCATION</label>
                <select 
                  className="form-control"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                >
                  <option value="">Select Location</option>
                  <option>Hong Hang Shipyard</option>
                  <option>Mega yard</option>
                  <option>MEP MARINE CC</option>
                  <option>Shipyards/Construction</option>
                  <option>Singapore (MEP)</option>
                  <option>TOM-11</option>
                  <option>TOM External Workshop</option>
                  <option>TOM-13</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">HIRE DATE</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.hireDate}
                  onChange={(e) => handleInputChange('hireDate', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Work Days Section */}
        <div className={`form-section ${workDaysCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setWorkDaysCollapsed(!workDaysCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Work Days</h3>
          </div>
          <div className="section-body">
            <div className="form-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {/* Column 1 - Work Days */}
              <div className="form-group">
                <label className="form-label">WORK DAYS WEEK</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.workDaysWeek}
                  onChange={(e) => handleInputChange('workDaysWeek', parseFloat(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">TOTAL EARNING</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.totalEarning}
                  onChange={(e) => handleInputChange('totalEarning', parseFloat(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">TOTAL CPF</label>
                <input 
                  type="number" 
                  className="form-control"
                  placeholder="0.00"
                />
              </div>
              <div className="form-group">
                <label className="form-label">OFF DAYS</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.offDays}
                  onChange={(e) => handleInputChange('offDays', parseInt(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">DEDUCTION</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.deduction}
                  onChange={(e) => handleInputChange('deduction', parseFloat(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">EMPLOYER CPF</label>
                <input 
                  type="number" 
                  className="form-control"
                  placeholder="0.00"
                />
              </div>
              <div className="form-group">
                <label className="form-label">COMP WORK DAYS</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.compWorkDays}
                  onChange={(e) => handleInputChange('compWorkDays', parseInt(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">NET INCOME</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.netIncome}
                  onChange={(e) => handleInputChange('netIncome', parseFloat(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">EMPLOYEE CPF</label>
                <input 
                  type="number" 
                  className="form-control"
                  placeholder="0.00"
                />
              </div>
              <div className="form-group">
                <label className="form-label">PRESENT DAYS</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.presentDays}
                  onChange={(e) => handleInputChange('presentDays', parseInt(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">CPF ORD WAGE</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.cpfOrdWage}
                  onChange={(e) => handleInputChange('cpfOrdWage', parseFloat(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">FUND CONTRIBUTION AMT</label>
                <input 
                  type="number" 
                  className="form-control"
                  placeholder="0.00"
                />
              </div>
              <div className="form-group">
                <label className="form-label">NO PAY LEAVE</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.noPayLeave}
                  onChange={(e) => handleInputChange('noPayLeave', parseInt(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">CPF AW WAGE</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.cpfAwWage}
                  onChange={(e) => handleInputChange('cpfAwWage', parseFloat(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">SDL AMOUNT</label>
                <input 
                  type="number" 
                  className="form-control"
                  placeholder="0.00"
                />
              </div>
              <div className="form-group">
                <label className="form-label">PAID LEAVE</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.paidLeave}
                  onChange={(e) => handleInputChange('paidLeave', parseInt(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">PAID OW</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.paidOw}
                  onChange={(e) => handleInputChange('paidOw', parseFloat(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">FWL</label>
                <input 
                  type="number" 
                  className="form-control"
                  defaultValue="300.00"
                />
              </div>
              <div className="form-group">
                <label className="form-label">PAID DAYS</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.paidDays}
                  onChange={(e) => handleInputChange('paidDays', parseInt(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">PAID AW</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.paidAw}
                  onChange={(e) => handleInputChange('paidAw', parseFloat(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  MANUAL CPF UPDATE
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">OT-1 HOUR</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.ot1Hour}
                  onChange={(e) => handleInputChange('ot1Hour', parseInt(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">SDL APPLIED AMOUNT</label>
                <input 
                  type="number" 
                  className="form-control"
                  defaultValue="1,500.00"
                />
              </div>
              <div className="form-group"></div>
              <div className="form-group">
                <label className="form-label">OT-2 HOUR</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.ot2Hour}
                  onChange={(e) => handleInputChange('ot2Hour', parseInt(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">FUND CONT APPLIED AMT</label>
                <input 
                  type="number" 
                  className="form-control"
                  defaultValue="1,500.00"
                />
              </div>
            </div>
          </div>
        </div>

        {/* System Section */}
        <div className={`form-section ${systemCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setSystemCollapsed(!systemCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>System</h3>
          </div>
          <div className="section-body">
            <div className="form-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              <div className="form-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={formData.attanSave}
                    onChange={(e) => handleInputChange('attanSave', e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  ATTAN SAVE
                </label>
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={formData.payCommit}
                    onChange={(e) => handleInputChange('payCommit', e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  PAY/COMMIT
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">PAYCHECK JOURNAL</label>
                <input type="text" className="form-control" placeholder="Paycheck Journal" />
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={formData.payRun}
                    onChange={(e) => handleInputChange('payRun', e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  PAY RUN
                </label>
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={formData.sendEmail}
                    onChange={(e) => handleInputChange('sendEmail', e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  SEND EMAIL
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">LATENESS MIN</label>
                <input type="number" className="form-control" placeholder="0" />
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  PRORATED PWL
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">CPF EMPLOYER ORD WAGE</label>
                <input type="number" className="form-control" placeholder="0.00" />
              </div>
              <div className="form-group">
                <label className="form-label">PH WORKING MINUTES</label>
                <input type="number" className="form-control" placeholder="0" />
              </div>
              <div className="form-group">
                <label className="form-label">PRORATED PWL DAYS</label>
                <input type="number" className="form-control" placeholder="0" />
              </div>
              <div className="form-group">
                <label className="form-label">TOTAL CPF ORD WAGE</label>
                <input type="number" className="form-control" placeholder="0.00" />
              </div>
              <div className="form-group">
                <label className="form-label">PH WORKING MINUTES LESS</label>
                <input type="number" className="form-control" placeholder="0" />
              </div>
              <div className="form-group">
                <label className="form-label">CLASS</label>
                <select 
                  className="form-control"
                  onChange={(e) => handleInputChange('class', e.target.value)}
                >
                  <option value="">Select Class</option>
                  <option>Consumable Item</option>
                  <option>Course</option>
                  <option>Cutting Works</option>
                  <option>Electrical</option>
                  <option>Fabrication</option>
                  <option>Hydrotesting</option>
                  <option>Installation work</option>
                  <option>Manpower Supply</option>
                  <option>Material Supply</option>
                  <option>Module /Prefab</option>
                  <option>Piping</option>
                  <option>Project Works</option>
                  <option>Refurbishment works</option>
                  <option>Rental</option>
                  <option>Repair & Referable</option>
                  <option>Sale of Scrap Metal</option>
                  <option>Structure</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">TOTAL CPF AW WAGE</label>
                <input type="number" className="form-control" placeholder="0.00" />
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  IS MEAL ALLOWANCE CHECK
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">OT-3 HOUR</label>
                <input type="number" className="form-control" defaultValue="0.00" />
              </div>
              <div className="form-group">
                <label className="form-label">MONTHLY TOTAL SALARY</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.monthlyTotalSalary}
                  onChange={(e) => handleInputChange('monthlyTotalSalary', parseFloat(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">REST DAY WORKING MINUTES</label>
                <input type="text" className="form-control" defaultValue="NoN" />
              </div>
              <div className="form-group">
                <label className="form-label">APP INTERNAL ID</label>
                <input type="text" className="form-control" defaultValue="G1R917B8306dc75080cc85e" />
              </div>
              <div className="form-group">
                <label className="form-label">MONTHLY WORKING DAYS</label>
                <input type="number" className="form-control" placeholder="0" />
              </div>
              <div className="form-group">
                <label className="form-label">REST DAY OT</label>
                <input type="number" className="form-control" defaultValue="0.0" />
              </div>
              <div className="form-group">
                <label className="form-label">SUBSIDIARY</label>
                <select 
                  className="form-control"
                  onChange={(e) => handleInputChange('subsidiary', e.target.value)}
                >
                  <option>Tech Onshore MEP Prefabricators Pte Ltd</option>
                  <option>Tech Marine Offshore (S) Pte Ltd</option>
                  <option>TOM Offshore Marine Engineering Pte Ltd</option>
                  <option>TOM Shipyard Pte Ltd</option>
                  <option>TOM Engineering & Trading Pte Ltd</option>
                  <option>TOM Industrial Services Pte Ltd</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">MONTHLY PAID DAYS</label>
                <input type="number" className="form-control" placeholder="0" />
              </div>
              <div className="form-group">
                <label className="form-label">PAYEE PHW WORKING MINUTES</label>
                <input type="number" className="form-control" defaultValue="0.0" />
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={formData.mobilePayslip}
                    onChange={(e) => handleInputChange('mobilePayslip', e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  MOBILE PAYSLIP
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">PAYEE CPF TYPE</label>
                <select 
                  className="form-control"
                  value={formData.payeeCpfType}
                  onChange={(e) => handleInputChange('payeeCpfType', e.target.value)}
                >
                  <option value="">- New -</option>
                  <option>Full and Graduated PR (1st year)</option>
                  <option>Full and Graduated PR (2nd year)</option>
                  <option>Graduated PR(1st year)</option>
                  <option>Graduated PR(2nd year)</option>
                  <option>Permanent Resident (3rd year & Above)</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">POSTING PAY SEGMENT</label>
                <select className="form-control">
                  <option>In Direct</option>
                  <option>Direct</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">PUBLIC HOLIDAY</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.publicHoliday}
                  onChange={(e) => handleInputChange('publicHoliday', parseFloat(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">MOSQUE BUILDING</label>
                <input type="text" className="form-control" placeholder="Mosque Building" />
              </div>
              <div className="form-group">
                <label className="form-label">BONUS CALENDAR</label>
                <select 
                  className="form-control"
                  value={formData.bonusCalendar}
                  onChange={(e) => handleInputChange('bonusCalendar', e.target.value)}
                >
                  <option value="">- New -</option>
                  <option>2021 (MEP)</option>
                  <option>2021 (TDQ)</option>
                  <option>2021 (TEA)</option>
                  <option>2021 (TMO)</option>
                  <option>2021 (TSV)</option>
                  <option>2022 MEP</option>
                </select>
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  EFT SALARY PAYMENTS UPDATE
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">MENDAKI FUND</label>
                <input type="text" className="form-control" placeholder="Mendaki Fund" />
              </div>
              <div className="form-group">
                <label className="form-label">REMARKS</label>
                <textarea 
                  className="form-control" 
                  rows="3"
                  placeholder="Enter remarks"
                ></textarea>
              </div>
              <div className="form-group">
                <label className="form-label">CPF EMPLOYER ORD WAGE</label>
                <input type="number" className="form-control" placeholder="0.00" />
              </div>
              <div className="form-group">
                <label className="form-label">MONTHLY BASIC SALARY</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.monthlyBasicSalary}
                  onChange={(e) => handleInputChange('monthlyBasicSalary', parseFloat(e.target.value))}
                />
              </div>
              <div className="form-group"></div>
              <div className="form-group">
                <label className="form-label">CPF EMPLOYER AW WAGE</label>
                <input type="number" className="form-control" placeholder="0.00" />
              </div>
              <div className="form-group">
                <label className="form-label">OPENING SALARY PAYEE</label>
                <input type="number" className="form-control" placeholder="0.00" />
              </div>
              <div className="form-group"></div>
              <div className="form-group">
                <label className="form-label">CPF EMPLOYER AW WAGE</label>
                <input type="number" className="form-control" placeholder="0.00" />
              </div>
              <div className="form-group">
                <label className="form-label">OPENING AW BALANCE PAYEE</label>
                <input type="number" className="form-control" placeholder="0.00" />
              </div>
            </div>
          </div>
        </div>

        {/* Pay Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'pay-earning' ? 'active' : ''}`}
              onClick={() => setActiveTab('pay-earning')}
            >
              Pay Earning ●
            </button>
            <button 
              className={`tab-btn ${activeTab === 'pay-deduction' ? 'active' : ''}`}
              onClick={() => setActiveTab('pay-deduction')}
            >
              Pay Deduction ●
            </button>
            <button 
              className={`tab-btn ${activeTab === 'pay-contribution' ? 'active' : ''}`}
              onClick={() => setActiveTab('pay-contribution')}
            >
              Pay Contribution ●
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'pay-earning' && (
              <div>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
                  <button className="btn btn-success">
                    <i className="fas fa-plus"></i>
                    Add
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-times"></i>
                    Cancel
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-plus-circle"></i>
                    Insert
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-trash"></i>
                    Remove
                  </button>
                </div>
                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>EARNING TYPE <span className="required">*</span></th>
                        <th>WAGE TYPE</th>
                        <th>INCLUDE CPF</th>
                        <th>AMOUNT <span className="required">*</span></th>
                        <th>SDL APPLIED</th>
                        <th>FUND APPLIED</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <select className="form-control" style={{ border: 'none', background: 'transparent' }}>
                            <option>Basic salary</option>
                            <option>Overtime</option>
                            <option>Allowance</option>
                          </select>
                        </td>
                        <td>Ordinary</td>
                        <td>Yes</td>
                        <td>
                          <input 
                            type="number" 
                            className="form-control" 
                            defaultValue="1,500.00"
                            style={{ border: 'none', background: 'transparent' }}
                          />
                        </td>
                        <td>Yes</td>
                        <td>Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'pay-deduction' && (
              <div>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
                  <button className="btn btn-success">
                    <i className="fas fa-plus"></i>
                    Add
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-times"></i>
                    Cancel
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-plus-circle"></i>
                    Insert
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-trash"></i>
                    Remove
                  </button>
                </div>
                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>DEDUCTION TYPE</th>
                        <th>WAGE TYPE</th>
                        <th>AMOUNT</th>
                        <th>NET SUITE PAY CODE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>No deductions added</td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'pay-contribution' && (
              <div>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
                  <button className="btn btn-success">
                    <i className="fas fa-plus"></i>
                    Add
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-times"></i>
                    Cancel
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-plus-circle"></i>
                    Insert
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-trash"></i>
                    Remove
                  </button>
                </div>
                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>CONTRIBUTION TYPE</th>
                        <th>WAGE TYPE</th>
                        <th>AMOUNT</th>
                        <th>PAYROLL ITEM CODE</th>
                        <th>HRA GROUP</th>
                        <th>MANUAL UPDATE</th>
                        <th>PRINT S. NO.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>No contributions added</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        <Toast 
          message={toast.message} 
          type={toast.type} 
          show={toast.show} 
          onClose={() => setToast({ ...toast, show: false })} 
        />
      </div>
    </div>
  );
};

export default EditPayeeEmployee;
