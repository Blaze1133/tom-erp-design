import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const NewChartOfAccount = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [restrictionsCollapsed, setRestrictionsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('workflow');
  const [workflowTab, setWorkflowTab] = useState('active');

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
    tomRefAccountNumber: '',
    bankRoutingNumber: '',
    bankAccountNumber: '',
    bankName: '',
    date: new Date().toLocaleDateString('en-GB')
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
      if (setCurrentPage) {
        setCurrentPage('view-chart-of-accounts');
      }
    }
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-chart-of-accounts');
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-book"></i>
          <div>
            <h1>Account</h1>
            <div className="detail-subtitle">
              <span style={{ color: '#999', fontStyle: 'italic' }}># To be generated – New Account</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          <i className="fas fa-times"></i>
          Cancel
        </button>
      </div>

      <div className="detail-content">
        {/* Primary Information Section */}
        <div className={`detail-section ${primaryInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setPrimaryInfoCollapsed(!primaryInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
              {/* Column 1 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="detail-field">
                  <label>NUMBER <span style={{ color: 'red' }}>*</span></label>
                  <input type="text" className="form-control" value={formData.number} onChange={(e) => handleInputChange('number', e.target.value)} />
                </div>
                <div className="detail-field">
                  <label>NAME <span style={{ color: 'red' }}>*</span></label>
                  <input type="text" className="form-control" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} required />
                </div>
                <div className="detail-field">
                  <label>LEGAL NAME</label>
                  <input type="text" className="form-control" value={formData.legalName} onChange={(e) => handleInputChange('legalName', e.target.value)} />
                </div>
                <div className="detail-field">
                  <label>SUBACCOUNT OF</label>
                  <select className="form-control" value={formData.subaccountOf} onChange={(e) => handleInputChange('subaccountOf', e.target.value)}>
                    <option value=""></option>
                    <option value="Estimates">Estimates</option>
                    <option value="Opportunities">Opportunities</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>TYPE <span style={{ color: 'red' }}>*</span></label>
                  <select className="form-control" value={formData.type} onChange={(e) => handleInputChange('type', e.target.value)}>
                    {accountTypes.map(type => (<option key={type} value={type}>{type}</option>))}
                  </select>
                </div>
                <div className="detail-field">
                  <label>CURRENCY <span style={{ color: 'red' }}>*</span></label>
                  <select className="form-control" value={formData.currency} onChange={(e) => handleInputChange('currency', e.target.value)}>
                    <option value=""></option>
                    {currencies.map(currency => (<option key={currency} value={currency}>{currency}</option>))}
                  </select>
                </div>
              </div>

              {/* Column 2 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="detail-field">
                  <label>GENERAL RATE TYPE</label>
                  <select className="form-control" value={formData.generalRateType} onChange={(e) => handleInputChange('generalRateType', e.target.value)}>
                    {generalRateTypes.map(type => (<option key={type} value={type}>{type}</option>))}
                  </select>
                </div>
                <div className="detail-field">
                  <label>CASH FLOW RATE TYPE</label>
                  <select className="form-control" value={formData.cashFlowRateType} onChange={(e) => handleInputChange('cashFlowRateType', e.target.value)}>
                    {cashFlowRateTypes.map(type => (<option key={type} value={type}>{type}</option>))}
                  </select>
                </div>
                <div className="detail-field">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="checkbox" checked={formData.inventory} onChange={() => handleCheckboxChange('inventory')} style={{ width: 'auto', margin: 0 }} />
                    <span>INVENTORY</span>
                  </label>
                </div>
                <div className="detail-field">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="checkbox" checked={formData.revalueOpenBalance} onChange={() => handleCheckboxChange('revalueOpenBalance')} style={{ width: 'auto', margin: 0 }} />
                    <span>REVALUE OPEN BALANCE FOR FOREIGN CURRENCY TRANSACTIONS</span>
                  </label>
                </div>
                <div className="detail-field">
                  <label>DESCRIPTION</label>
                  <textarea className="form-control" rows="4" value={formData.description} onChange={(e) => handleInputChange('description', e.target.value)} />
                </div>
                <div className="detail-field">
                  <label>DATE</label>
                  <input type="date" className="form-control" value={formData.date} onChange={(e) => handleInputChange('date', e.target.value)} />
                </div>
                <div className="detail-field">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="checkbox" checked={formData.summary} onChange={() => handleCheckboxChange('summary')} style={{ width: 'auto', margin: 0 }} />
                    <span>SUMMARY</span>
                  </label>
                </div>
                <div className="detail-field">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="checkbox" checked={formData.inactive} onChange={() => handleCheckboxChange('inactive')} style={{ width: 'auto', margin: 0 }} />
                    <span>INACTIVE</span>
                  </label>
                </div>
                <div className="detail-field">
                  <label>BANK NAME</label>
                  <input type="text" className="form-control" value={formData.bankName} onChange={(e) => handleInputChange('bankName', e.target.value)} />
                </div>
              </div>

              {/* Column 3 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="detail-field">
                  <label>BANK ROUTING NUMBER</label>
                  <input type="text" className="form-control" value={formData.bankRoutingNumber} onChange={(e) => handleInputChange('bankRoutingNumber', e.target.value)} />
                </div>
                <div className="detail-field">
                  <label>BANK ACCOUNT NUMBER</label>
                  <input type="text" className="form-control" value={formData.bankAccountNumber} onChange={(e) => handleInputChange('bankAccountNumber', e.target.value)} />
                </div>
                <div className="detail-field">
                  <label>RESTRICT TO DEPARTMENT</label>
                  <select className="form-control" value={formData.restrictToDepartment} onChange={(e) => handleInputChange('restrictToDepartment', e.target.value)}>
                    <option value=""></option>
                    {departments.map(dept => (<option key={dept} value={dept}>{dept}</option>))}
                  </select>
                </div>
                <div className="detail-field">
                  <label>RESTRICT TO CLASS</label>
                  <select className="form-control" value={formData.restrictToClass} onChange={(e) => handleInputChange('restrictToClass', e.target.value)}>
                    <option value=""></option>
                    {classes.map(cls => (<option key={cls} value={cls}>{cls}</option>))}
                  </select>
                </div>
                <div className="detail-field">
                  <label>RESTRICT TO LOCATION</label>
                  <select className="form-control" value={formData.restrictToLocation} onChange={(e) => handleInputChange('restrictToLocation', e.target.value)}>
                    <option value=""></option>
                    {locations.map(loc => (<option key={loc} value={loc}>{loc}</option>))}
                  </select>
                </div>
                <div className="detail-field">
                  <label>SUBSIDIARIES <span style={{ color: 'red' }}>*</span></label>
                  <select className="form-control" value={formData.subsidiaries} onChange={(e) => handleInputChange('subsidiaries', e.target.value)}>
                    {subsidiariesList.map(subsidiary => (<option key={subsidiary} value={subsidiary}>{subsidiary}</option>))}
                  </select>
                </div>
                <div className="detail-field">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="checkbox" checked={formData.includeChildren} onChange={() => handleCheckboxChange('includeChildren')} style={{ width: 'auto', margin: 0 }} />
                    <span>INCLUDE CHILDREN</span>
                  </label>
                </div>
                <div className="detail-field">
                  <label>TOM REF ACCOUNT NUMBER</label>
                  <input type="text" className="form-control" value={formData.tomRefAccountNumber} onChange={(e) => handleInputChange('tomRefAccountNumber', e.target.value)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default NewChartOfAccount;
