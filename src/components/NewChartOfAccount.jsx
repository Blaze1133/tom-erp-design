import React, { useState } from 'react';
import Toast from './Toast';

const NewChartOfAccount = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Form state
  const [formData, setFormData] = useState({
    number: '',
    name: 'Estimates',
    legalName: '',
    subaccountOf: '',
    type: 'Non Posting',
    currency: '',
    generalRateType: 'Average',
    cashFlowRateType: 'Average',
    inventory: false,
    revalueOpenBalance: false,
    description: '',
    summary: false,
    inactive: false,
    restrictToDepartment: '',
    restrictToClass: '',
    restrictToLocation: '',
    subsidiaries: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    includeChildren: true,
    tomRefAccountNumber: ''
  });

  const accountTypes = [
    'Non Posting',
    'Accounts Receivable',
    'Accounts Payable',
    'Bank',
    'Other Expense',
    'Other Current Asset',
    'Fixed Asset',
    'Other Current Liability',
    'Long Term Liability',
    'Equity',
    'Income',
    'Cost of Goods Sold',
    'Expense',
    'Other Income',
    'Other Asset'
  ];

  const generalRateTypes = ['Average', 'Current', 'Historical'];
  const cashFlowRateTypes = ['Average', 'Current', 'Historical'];
  const currencies = ['SGD', 'USD', 'EUR', 'MYR', 'CNY'];

  const classes = [
    '- New -',
    'Consumable Item',
    'Course',
    'Cutting Works',
    'Electrical',
    'Fabrication',
    'Hydrotesting',
    'Installation work',
    'Manpower Supply',
    'Material Supply',
    'Module /Prefab',
    'Piping',
    'Project Works',
    'Refurbishment works',
    'Rental',
    'Repair & Referable',
    'Sale of Scrap Metal',
    'Structure'
  ];

  const departments = [
    '- New -',
    'Construction',
    'MEP',
    'MEP MARINE',
    'O&G',
    'Piping',
    'Shipyard',
    'Shipyard : Keppel Fels',
    'Shipyard : Keppel Shipyard',
    'Shipyard : Megayard'
  ];

  const locations = [
    '- New -',
    'Bok Seng Yard',
    'Hong Hang Shipyard',
    'Mega yard',
    'MEP MARINE CC',
    'Shipyards/Construction',
    'Singapore (MEP)',
    'TOM-11',
    'TOM External Workshop',
    'TOM-13'
  ];

  const subsidiariesList = [
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'Tech Marine Offshore (S) Pte Ltd',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
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
    if (!formData.name) {
      showToast('Please enter account name', 'error');
      return;
    }
    showToast('Chart of Account saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Changes cancelled', 'info');
      window.location.reload();
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-book" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Account</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
        </div>
      </div>

      <div className="form-container">
        <div className="form-section">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">NUMBER</label>
              <input
                type="text"
                className="form-control"
                value={formData.number}
                onChange={(e) => handleInputChange('number', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">GENERAL RATE TYPE</label>
              <select
                className="form-control"
                value={formData.generalRateType}
                onChange={(e) => handleInputChange('generalRateType', e.target.value)}
              >
                {generalRateTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">RESTRICT TO DEPARTMENT</label>
              <select
                className="form-control"
                value={formData.restrictToDepartment}
                onChange={(e) => handleInputChange('restrictToDepartment', e.target.value)}
              >
                <option value=""></option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label required">NAME</label>
              <input
                type="text"
                className="form-control"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">CASH FLOW RATE TYPE</label>
              <select
                className="form-control"
                value={formData.cashFlowRateType}
                onChange={(e) => handleInputChange('cashFlowRateType', e.target.value)}
              >
                {cashFlowRateTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">RESTRICT TO CLASS</label>
              <select
                className="form-control"
                value={formData.restrictToClass}
                onChange={(e) => handleInputChange('restrictToClass', e.target.value)}
              >
                <option value=""></option>
                {classes.map(cls => (
                  <option key={cls} value={cls}>{cls}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">LEGAL NAME</label>
              <input
                type="text"
                className="form-control"
                value={formData.legalName}
                onChange={(e) => handleInputChange('legalName', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.inventory}
                  onChange={() => handleCheckboxChange('inventory')}
                />
                <span>INVENTORY</span>
              </label>
            </div>

            <div className="form-group">
              <label className="form-label">RESTRICT TO LOCATION</label>
              <select
                className="form-control"
                value={formData.restrictToLocation}
                onChange={(e) => handleInputChange('restrictToLocation', e.target.value)}
              >
                <option value=""></option>
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">SUBACCOUNT OF</label>
              <select
                className="form-control"
                value={formData.subaccountOf}
                onChange={(e) => handleInputChange('subaccountOf', e.target.value)}
              >
                <option value=""></option>
                <option value="Estimates">Estimates</option>
                <option value="Opportunities">Opportunities</option>
              </select>
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.revalueOpenBalance}
                  onChange={() => handleCheckboxChange('revalueOpenBalance')}
                />
                <span>REVALUE OPEN BALANCE FOR FOREIGN CURRENCY TRANSACTIONS</span>
              </label>
            </div>

            <div className="form-group">
              <label className="form-label required">SUBSIDIARIES</label>
              <select
                className="form-control"
                value={formData.subsidiaries}
                onChange={(e) => handleInputChange('subsidiaries', e.target.value)}
              >
                {subsidiariesList.map(subsidiary => (
                  <option key={subsidiary} value={subsidiary}>{subsidiary}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">TYPE</label>
              <select
                className="form-control"
                value={formData.type}
                onChange={(e) => handleInputChange('type', e.target.value)}
              >
                {accountTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">DESCRIPTION</label>
              <textarea
                className="form-control"
                rows="3"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.includeChildren}
                  onChange={() => handleCheckboxChange('includeChildren')}
                />
                <span>INCLUDE CHILDREN</span>
              </label>
            </div>

            <div className="form-group">
              <label className="form-label">CURRENCY</label>
              <select
                className="form-control"
                value={formData.currency}
                onChange={(e) => handleInputChange('currency', e.target.value)}
              >
                <option value=""></option>
                {currencies.map(currency => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.summary}
                  onChange={() => handleCheckboxChange('summary')}
                />
                <span>SUMMARY</span>
              </label>
              <label className="checkbox-label" style={{ marginTop: '0.5rem' }}>
                <input
                  type="checkbox"
                  checked={formData.inactive}
                  onChange={() => handleCheckboxChange('inactive')}
                />
                <span>INACTIVE</span>
              </label>
            </div>

            <div className="form-group">
              <label className="form-label">TOM REF ACCOUNT NUMBER</label>
              <input
                type="text"
                className="form-control"
                value={formData.tomRefAccountNumber}
                onChange={(e) => handleInputChange('tomRefAccountNumber', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Workflow Section */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-project-diagram"></i>
            Workflow
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0' }} />
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ marginRight: '1rem', fontSize: '0.875rem', fontWeight: '500' }}>VIEW</label>
            <select className="form-control" style={{ width: '200px', display: 'inline-block' }}>
              <option>Default</option>
            </select>
            <button className="btn btn-secondary" style={{ marginLeft: '1rem' }}>
              Customize View
            </button>
            <button className="btn btn-secondary" style={{ marginLeft: '0.5rem' }}>
              Refresh
            </button>
          </div>
          <div className="table-responsive">
            <table className="items-table">
              <thead>
                <tr>
                  <th>WORKFLOW</th>
                  <th>CURRENT STATE</th>
                  <th>DATE ENTERED WORKFLOW</th>
                  <th>DATE ENTERED STATE</th>
                  <th>OPTIONS</th>
                  <th>STATUS</th>
                  <th>CANCEL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                    No records to show.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* System Notes Section */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-sticky-note"></i>
            System Notes
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0' }} />
          <div style={{ marginBottom: '1rem' }}>
            <button className="btn btn-secondary">
              Customize View
            </button>
            <button className="btn btn-secondary" style={{ marginLeft: '0.5rem' }}>
              Refresh
            </button>
          </div>
          <div style={{ backgroundColor: '#f8f9fa', padding: '2rem', textAlign: 'center', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
            <p style={{ color: '#6c757d', margin: 0 }}>No records to show.</p>
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

export default NewChartOfAccount;
