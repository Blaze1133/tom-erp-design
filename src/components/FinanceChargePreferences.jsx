import React, { useState } from 'react';
import Toast from './Toast';

const FinanceChargePreferences = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  const [formData, setFormData] = useState({
    annualRate: '',
    incomeAccount: '',
    taxCode: '',
    gracePeriod: '5',
    minimumFinanceCharge: '1.50',
    assessOnFinanceCharges: true,
    assessFrom: 'dueDate',
    customForm: 'Standard Finance Charge'
  });

  const incomeAccounts = [
    '- New -',
    '40000 Sales',
    '40100 Sales : Sales.',
    '40200 Sales : Working Progress Sales',
    '40250 Sales : Working Progress Sales.',
    '40300 Sales : Sales Retention',
    '40350 Sales : Sales Performance Bond',
    '40400 Sales : Sales Discount',
    '40500 Sales : Sales Returns',
    '41000 Other Income',
    '41100 Other Income : Interest Income',
    '41200 Other Income : Gain on Sale of Assets'
  ];

  const taxCodes = [
    '- New -',
    'GST_SG:0%',
    'GST_SG:4.5%',
    'GST_SG:7%',
    'GST_SG:8%',
    'GST_SG:9%',
    'GST_SG:Zero Rated',
    'GST_SG:Exempt',
    'GST_SG:Out of Scope',
    'Non-Taxable',
    'Taxable'
  ];

  const customForms = [
    'Standard Finance Charge',
    'Standard Product Invoice',
    'Standard Professional Invoice',
    'Standard Progress Invoice',
    'Standard Service Invoice',
    'TOM Debit Note',
    'TOM Jurong Port Service Invoice',
    'TOM Letterhead Invoice',
    'TOM Performa Invoice',
    'TOM Progress Billing Invoice'
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

  const handleCheckboxChange = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSave = () => {
    if (!formData.annualRate) {
      showToast('Please enter Annual Rate %', 'error');
      return;
    }
    if (!formData.incomeAccount) {
      showToast('Please select Income Account', 'error');
      return;
    }
    if (!formData.taxCode) {
      showToast('Please select Tax Code', 'error');
      return;
    }
    showToast('Finance Charge Preferences saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Changes cancelled', 'info');
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-percentage" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Finance Charge Preferences</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary">
            <i className="fas fa-question-circle"></i>
            More
          </button>
        </div>
      </div>

      <div className="form-container">
        {/* Action Buttons */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-tertiary" onClick={handleCancel}>
            Cancel
          </button>
        </div>

        {/* Form Section */}
        <div className="form-section">
          <div className="form-grid">
            {/* Left Column */}
            <div className="form-group">
              <label className="form-label required">ANNUAL RATE %</label>
              <input
                type="number"
                className="form-control"
                value={formData.annualRate}
                onChange={(e) => handleInputChange('annualRate', e.target.value)}
                step="0.01"
                placeholder="Enter annual rate"
              />
            </div>

            {/* Right Column */}
            <div className="form-group">
              <label className="form-label">MINIMUM FINANCE CHARGE</label>
              <input
                type="number"
                className="form-control"
                value={formData.minimumFinanceCharge}
                onChange={(e) => handleInputChange('minimumFinanceCharge', e.target.value)}
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label className="form-label required">INCOME ACCOUNT</label>
              <select
                className="form-control"
                value={formData.incomeAccount}
                onChange={(e) => handleInputChange('incomeAccount', e.target.value)}
              >
                <option value=""></option>
                {incomeAccounts.map((account, idx) => (
                  <option key={idx} value={account}>{account}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.assessOnFinanceCharges}
                  onChange={() => handleCheckboxChange('assessOnFinanceCharges')}
                />
                <span>ASSESS ON FINANCE CHARGES</span>
              </label>
            </div>

            <div className="form-group">
              <label className="form-label required">TAX CODE</label>
              <select
                className="form-control"
                value={formData.taxCode}
                onChange={(e) => handleInputChange('taxCode', e.target.value)}
              >
                <option value=""></option>
                {taxCodes.map((code, idx) => (
                  <option key={idx} value={code}>{code}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">ASSESS FROM</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: '0.25rem' }}>
                <label className="checkbox-label" style={{ marginBottom: '0' }}>
                  <input
                    type="radio"
                    name="assessFrom"
                    value="transactionDate"
                    checked={formData.assessFrom === 'transactionDate'}
                    onChange={(e) => handleInputChange('assessFrom', e.target.value)}
                  />
                  <span>TRANSACTION DATE</span>
                </label>
                <label className="checkbox-label" style={{ marginBottom: '0' }}>
                  <input
                    type="radio"
                    name="assessFrom"
                    value="dueDate"
                    checked={formData.assessFrom === 'dueDate'}
                    onChange={(e) => handleInputChange('assessFrom', e.target.value)}
                  />
                  <span>DUE DATE</span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">GRACE PERIOD</label>
              <input
                type="number"
                className="form-control"
                value={formData.gracePeriod}
                onChange={(e) => handleInputChange('gracePeriod', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">CUSTOM FORM</label>
              <select
                className="form-control"
                value={formData.customForm}
                onChange={(e) => handleInputChange('customForm', e.target.value)}
              >
                {customForms.map((form, idx) => (
                  <option key={idx} value={form}>{form}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
};

export default FinanceChargePreferences;
