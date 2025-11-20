import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreatePayComponent = ({ payComponentData, onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  const [formData, setFormData] = useState({
    subsidiary: payComponentData?.subsidiary || 'Tech Onshore MEP Prefabricators Pte Ltd',
    payComponentName: payComponentData?.payComponentName || '',
    payType: payComponentData?.payType || 'Deduction',
    wageType: payComponentData?.wageType || 'Deduction',
    ir8aCode: payComponentData?.ir8aCode || '',
    customForm: payComponentData?.customForm || 'Pay Component Form',
    cpfApplicable: payComponentData?.cpfApplicable || false,
    systemCalculate: payComponentData?.systemCalculate || false,
    payrollItemCode: payComponentData?.payrollItemCode || '',
    isPronated: payComponentData?.isPronated || false,
    payrollExpenseAccount: payComponentData?.payrollExpenseAccount || '50600 Cost Of Sales : Direct Cost-Hourly Salary',
    payrollLiabilityAccount: payComponentData?.payrollLiabilityAccount || '',
    paybackUpdateChange: payComponentData?.paybackUpdateChange || false,
    country: payComponentData?.country || 'Singapore',
    isLeaveBuyBack: payComponentData?.isLeaveBuyBack || false,
    isTaxApplied: payComponentData?.isTaxApplied || false,
    isBasic: payComponentData?.isBasic || false,
    payrollExpenseAccountIndirect: payComponentData?.payrollExpenseAccountIndirect || '50700 Cost Of Sales : In-Direct Cost Fixed Salary',
    payrollExpenseAccountLocal: payComponentData?.payrollExpenseAccountLocal || '56200 Operating Staff Salary-Wages : Local Staff Salary'
  });

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];

  const payTypes = [
    '- New -',
    'Core: Fixed',
    'Core: Variable',
    'Non-Core : Ad Hoc',
    'Deduction',
    'Employer Contribution',
    'Commission'
  ];

  const wageTypes = [
    '- New -',
    'Ordinary',
    'Additional',
    'Deduction'
  ];

  const ir8aCodes = [
    '- New -',
    'A-Gross Salary, Fees, Leave Pay, Wages, OT',
    'B-Bonus',
    'C-Director\'s Fees',
    'D.1.i-Others -Allowance - Transport',
    'D.1.ii-Others-Allowance - Entertainment',
    'D.1.iii-Others -Allowance - Others'
  ];

  const customForms = [
    'Pay Component Form',
    'Standard Pay Component Form'
  ];

  const payrollExpenseAccounts = [
    '50600 Cost Of Sales : Direct Cost-Hourly Salary',
    '50026 Cost Of Sales : Worker Accommodation & Utilities',
    '50026 Cost Of Sales : Workers-Bond/Insurance/NOM-HR Exp',
    '52400 Facilities Related Expenses : Telecommunication',
    '56200 Operating Staff Salary-Wages : Local Staff Salary'
  ];

  const payrollLiabilityAccounts = [
    '20510 Customer Deposits/Refunds : Customer Deposits',
    '20520 Customer Deposits/Refunds : Refunds Payable',
    '21010 Payroll Liabilities : Salary Payable',
    '21020 Payroll Liabilities : Payroll Cpf/Fund Payable',
    '21030 Payroll Liabilities : Foreign Worker Levy',
    '21040 Payroll Liabilities : Annual Leave Liability',
    '21510 GST on Sales SG'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleSave = () => {
    // Validation
    if (!formData.payComponentName.trim()) {
      showToast('Pay Component Name is required', 'error');
      return;
    }

    showToast('Pay Component saved successfully!');
    setTimeout(() => {
      if (onSave) onSave(formData);
    }, 1500);
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
  };

  return (
    <div className="enquiry-form">
      <div className="form-header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 0',
        borderBottom: '1px solid #e0e0e0',
        marginBottom: '20px'
      }}>
        <div className="form-title" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <h1 style={{ margin: '0', fontSize: '24px', fontWeight: '600', color: '#333' }}>Pay Component</h1>
          <span style={{ fontSize: '18px', color: '#666' }}>{payComponentData ? 'Edit' : 'New'}</span>
        </div>
        <div className="form-actions" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}>←</button>
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}>→</button>
          <button style={{
            background: 'none',
            border: '1px solid #ccc',
            padding: '8px 15px',
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '12px'
          }}>List</button>
          <button style={{
            background: 'none',
            border: '1px solid #ccc',
            padding: '8px 15px',
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '12px'
          }}>Search</button>
          <button style={{
            background: 'none',
            border: '1px solid #ccc',
            padding: '8px 15px',
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '12px'
          }}>Customize</button>
          <button style={{
            background: 'none',
            border: '1px solid #ccc',
            padding: '8px 15px',
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '12px'
          }}>More</button>
        </div>
      </div>

      <div className="form-content">
        {/* Basic Information Section */}
        <div className="form-section" style={{
          background: 'white',
          borderRadius: '6px',
          marginBottom: '20px',
          border: '1px solid #e9ecef',
          overflow: 'hidden'
        }}>
          <div style={{
            background: '#f8f9fa',
            padding: '15px 20px',
            borderBottom: '1px solid #e9ecef'
          }}>
            <h3 style={{
              margin: '0',
              fontSize: '16px',
              fontWeight: '600',
              color: '#495057'
            }}>Basic Information</h3>
          </div>
          <div style={{ padding: '20px' }}>
          <div className="form-grid">
            <div className="form-column">
              <div className="form-group">
                <label className="form-label">ID</label>
                <input
                  type="text"
                  className="form-control disabled"
                  value={payComponentData?.id || '162'}
                  disabled
                />
              </div>

              <div className="form-group">
                <label className="form-label required">SUBSIDIARY *</label>
                <select
                  className="form-control"
                  value={formData.subsidiary}
                  onChange={(e) => handleInputChange('subsidiary', e.target.value)}
                >
                  {subsidiaries.map(sub => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label required">PAY COMPONENT NAME *</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.payComponentName}
                  onChange={(e) => handleInputChange('payComponentName', e.target.value)}
                  placeholder="Enter pay component name"
                />
              </div>

              <div className="form-group">
                <label className="form-label required">PAY TYPE *</label>
                <select
                  className="form-control"
                  value={formData.payType}
                  onChange={(e) => handleInputChange('payType', e.target.value)}
                >
                  {payTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-column">
              <div className="form-group">
                <label className="form-label">WAGE TYPE</label>
                <select
                  className="form-control"
                  value={formData.wageType}
                  onChange={(e) => handleInputChange('wageType', e.target.value)}
                >
                  {wageTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">IR8A CODE</label>
                <select
                  className="form-control"
                  value={formData.ir8aCode}
                  onChange={(e) => handleInputChange('ir8aCode', e.target.value)}
                >
                  <option value="">Select IR8A Code</option>
                  {ir8aCodes.map(code => (
                    <option key={code} value={code}>{code}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label required">CUSTOM FORM *</label>
                <select
                  className="form-control"
                  value={formData.customForm}
                  onChange={(e) => handleInputChange('customForm', e.target.value)}
                >
                  {customForms.map(form => (
                    <option key={form} value={form}>{form}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">COUNTRY</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                />
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Configuration Section */}
        <div className="form-section" style={{
          background: 'white',
          borderRadius: '6px',
          marginBottom: '20px',
          border: '1px solid #e9ecef',
          overflow: 'hidden'
        }}>
          <div style={{
            background: '#f8f9fa',
            padding: '15px 20px',
            borderBottom: '1px solid #e9ecef'
          }}>
            <h3 style={{
              margin: '0',
              fontSize: '16px',
              fontWeight: '600',
              color: '#495057'
            }}>Configuration</h3>
          </div>
          <div style={{ padding: '20px' }}>
            <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div className="form-column">
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label className="form-label" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    <input
                      type="checkbox"
                      checked={formData.cpfApplicable}
                      onChange={(e) => handleInputChange('cpfApplicable', e.target.checked)}
                      style={{ marginRight: '5px' }}
                    />
                    CPF APPLICABLE
                  </label>
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label className="form-label" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    <input
                      type="checkbox"
                      checked={formData.systemCalculate}
                      onChange={(e) => handleInputChange('systemCalculate', e.target.checked)}
                      style={{ marginRight: '5px' }}
                    />
                    SYSTEM CALCULATE
                  </label>
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label className="form-label" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    <input
                      type="checkbox"
                      checked={formData.isLeaveBuyBack}
                      onChange={(e) => handleInputChange('isLeaveBuyBack', e.target.checked)}
                      style={{ marginRight: '5px' }}
                    />
                    IS LEAVE BUY BACK
                  </label>
                </div>
              </div>

              <div className="form-column">
                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label className="form-label" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    <input
                      type="checkbox"
                      checked={formData.isTaxApplied}
                      onChange={(e) => handleInputChange('isTaxApplied', e.target.checked)}
                      style={{ marginRight: '5px' }}
                    />
                    IS TAX APPLIED
                  </label>
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label className="form-label" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    <input
                      type="checkbox"
                      checked={formData.isBasic}
                      onChange={(e) => handleInputChange('isBasic', e.target.checked)}
                      style={{ marginRight: '5px' }}
                    />
                    IS BASIC
                  </label>
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label className="form-label" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    <input
                      type="checkbox"
                      checked={formData.paybackUpdateChange}
                      onChange={(e) => handleInputChange('paybackUpdateChange', e.target.checked)}
                      style={{ marginRight: '5px' }}
                    />
                    PAYBACK UPDATE CHANGE
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Account Settings Section */}
        <div className="form-section" style={{
          background: 'white',
          borderRadius: '6px',
          marginBottom: '20px',
          border: '1px solid #e9ecef',
          overflow: 'hidden'
        }}>
          <div style={{
            background: '#f8f9fa',
            padding: '15px 20px',
            borderBottom: '1px solid #e9ecef'
          }}>
            <h3 style={{
              margin: '0',
              fontSize: '16px',
              fontWeight: '600',
              color: '#495057'
            }}>Account Settings</h3>
          </div>
          <div style={{ padding: '20px' }}>
          <div className="form-grid">
            <div className="form-column">
              <div className="form-group">
                <label className="form-label">PAYROLL EXPENSE ACCOUNT</label>
                <select
                  className="form-control"
                  value={formData.payrollExpenseAccount}
                  onChange={(e) => handleInputChange('payrollExpenseAccount', e.target.value)}
                >
                  {payrollExpenseAccounts.map(account => (
                    <option key={account} value={account}>{account}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">PAYROLL LIABILITY ACCOUNT</label>
                <select
                  className="form-control"
                  value={formData.payrollLiabilityAccount}
                  onChange={(e) => handleInputChange('payrollLiabilityAccount', e.target.value)}
                >
                  <option value="">Select Account</option>
                  {payrollLiabilityAccounts.map(account => (
                    <option key={account} value={account}>{account}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="form-actions-bottom" style={{
        display: 'flex',
        gap: '10px',
        paddingTop: '20px',
        borderTop: '1px solid #e0e0e0',
        marginTop: '20px'
      }}>
        <button 
          className="btn-save" 
          onClick={handleSave}
          style={{
            background: '#007bff',
            color: 'white',
            border: '1px solid #007bff',
            padding: '8px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          Save
        </button>
        <button 
          className="btn-cancel" 
          onClick={handleCancel}
          style={{
            background: '#6c757d',
            color: 'white',
            border: '1px solid #6c757d',
            padding: '8px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          Cancel
        </button>
        <button 
          className="btn-actions"
          style={{
            background: 'white',
            color: '#495057',
            border: '1px solid #ced4da',
            padding: '8px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          Actions
        </button>
      </div>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: '', type: 'success' })}
        />
      )}
    </div>
  );
};

export default CreatePayComponent;
