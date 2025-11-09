import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const RecordCustomerDeposit = ({ onBack }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [expandedSections, setExpandedSections] = useState({
    primary: true,
    classification: true
  });
  const [activeTab, setActiveTab] = useState('payment-method');

  const [formData, setFormData] = useState({
    customForm: 'TOM Customer Deposit',
    customer: '',
    salesOrder: '',
    deposit: 'To Be Generated',
    paymentAmount: '',
    currency: 'SGD',
    exchangeRate: '1.00',
    date: '9/11/2025',
    postingPeriod: 'Nov 2025',
    undepositedFunds: true,
    account: false,
    accountValue: '',
    memo: '',
    subsidiary: '',
    department: '',
    class: '',
    location: '',
    paymentMethod: '',
    check: ''
  });

  const customForms = [
    'TOM Customer Deposit',
    'Standard Customer Deposit'
  ];

  const customers = [
    '100 Baroid Surface Solutions ,Halliburton Energy Services Inc',
    '1000 TEAM LEAD CONSTRUCTION PTE LTD',
    'TOM22-00656 TEAM LEAD CONSTRUCTION PTE LTD : 25-00003-TLC-Nursing Home @ Hougang Ave 1',
    '1001 TECH ONSHORE MEP-PREFABRICATORS PTE LTD',
    'TOM22-00733 TECH ONSHORE MEP-PREFABRICATORS PTE LTD : 25-00010-TOM-Riser Concept',
    'TOM22-00741 TECH ONSHORE MEP-PREFABRICATORS PTE LTD : 25-00015-TOM-TOM Innovation'
  ];

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];

  const classes = [
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

  const locations = [
    'Hong Hang Shipyard',
    'Mega yard',
    'MEP MARINE CC',
    'Shipyards/Construction',
    'Singapore (MEP)',
    'TOM-11',
    'TOM External Workshop',
    'TOM-13'
  ];

  const departments = [
    'TOM: Human Resource',
    'TOM: Finance: Internal Transfer',
    'TOM: IT',
    'TOM: Logistic',
    'TOM: Operating',
    'TOM: Purchase',
    'TOM: Sales and Marketing',
    'TOM: Security',
    'TOM: TOM INTERNALS: TOM HR',
    'TOM: Nampak Reinsure',
    'TOM: Auction Handover',
    'TOM: Engineering',
    'TOM: Production'
  ];

  const paymentMethods = [
    'American Express',
    'Cash',
    'Check',
    'Discover',
    'Giro',
    'Master Card',
    'VISA'
  ];

  const tabs = [
    { id: 'payment-method', label: 'Payment Method' },
    { id: 'relationships', label: 'Relationships' },
    { id: 'communication', label: 'Communication' }
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

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSave = () => {
    if (!formData.customer) {
      showToast('Please select a customer', 'error');
      return;
    }
    showToast('Customer Deposit saved successfully!', 'success');
    if (onBack) onBack();
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (onBack) onBack();
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-hand-holding-usd" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Customer Deposit</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={() => showToast('List view', 'info')}>
            <i className="fas fa-list"></i>
            List
          </button>
          <button className="btn btn-secondary" onClick={() => showToast('Search', 'info')}>
            <i className="fas fa-search"></i>
            Search
          </button>
          <button className="btn btn-secondary" onClick={() => showToast('Customize', 'info')}>
            <i className="fas fa-cog"></i>
            Customize
          </button>
          <button className="btn btn-secondary" onClick={() => showToast('More options', 'info')}>
            More
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information */}
        <div className="form-section">
          <div 
            className="section-title" 
            onClick={() => toggleSection('primary')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div>
              <i className={`fas fa-chevron-${expandedSections.primary ? 'down' : 'right'}`} style={{ marginRight: '10px' }}></i>
              <i className="fas fa-info-circle" style={{ marginRight: '10px' }}></i>
              Primary Information
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          {expandedSections.primary && (
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">CUSTOM FORM <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.customForm}
                  onChange={(e) => handleInputChange('customForm', e.target.value)}
                >
                  {customForms.map((form, index) => (
                    <option key={index} value={form}>{form}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">PAYMENT AMOUNT <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.paymentAmount}
                  onChange={(e) => handleInputChange('paymentAmount', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">CUSTOMER <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.customer}
                  onChange={(e) => handleInputChange('customer', e.target.value)}
                >
                  <option value="">- Type then tab -</option>
                  {customers.map((customer, index) => (
                    <option key={index} value={customer}>{customer}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">POSTING PERIOD</label>
                <select 
                  className="form-control"
                  value={formData.postingPeriod}
                  onChange={(e) => handleInputChange('postingPeriod', e.target.value)}
                >
                  <option value="Nov 2025">Nov 2025</option>
                  <option value="Dec 2025">Dec 2025</option>
                  <option value="Jan 2026">Jan 2026</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">SALES ORDER</label>
                <select 
                  className="form-control"
                  value={formData.salesOrder}
                  onChange={(e) => handleInputChange('salesOrder', e.target.value)}
                >
                  <option value="">Select...</option>
                </select>
              </div>

              <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input 
                    type="radio" 
                    name="depositAccount"
                    checked={formData.undepositedFunds}
                    onChange={() => {
                      handleInputChange('undepositedFunds', true);
                      handleInputChange('account', false);
                    }}
                    style={{ width: '18px', height: '18px' }}
                  />
                  <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>UNDEPOSITED FUNDS</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input 
                    type="radio" 
                    name="depositAccount"
                    checked={formData.account}
                    onChange={() => {
                      handleInputChange('undepositedFunds', false);
                      handleInputChange('account', true);
                    }}
                    style={{ width: '18px', height: '18px' }}
                  />
                  <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>ACCOUNT</span>
                </label>
                {formData.account && (
                  <select 
                    className="form-control"
                    value={formData.accountValue}
                    onChange={(e) => handleInputChange('accountValue', e.target.value)}
                    style={{ marginTop: '0.5rem' }}
                  >
                    <option value="">Select Account...</option>
                    <option value="Cash">Cash</option>
                    <option value="Bank">Bank</option>
                  </select>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">DEPOSIT <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.deposit}
                  readOnly
                  style={{ background: '#f5f5f5' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">CURRENCY <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.currency}
                  onChange={(e) => handleInputChange('currency', e.target.value)}
                >
                  <option value="SGD">SGD</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">MEMO</label>
                <textarea 
                  className="form-control"
                  value={formData.memo}
                  onChange={(e) => handleInputChange('memo', e.target.value)}
                  rows="2"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">EXCHANGE RATE <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.exchangeRate}
                  onChange={(e) => handleInputChange('exchangeRate', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">DATE <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        {/* Classification */}
        <div className="form-section">
          <div 
            className="section-title" 
            onClick={() => toggleSection('classification')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div>
              <i className={`fas fa-chevron-${expandedSections.classification ? 'down' : 'right'}`} style={{ marginRight: '10px' }}></i>
              <i className="fas fa-tags" style={{ marginRight: '10px' }}></i>
              Classification
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          {expandedSections.classification && (
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">SUBSIDIARY <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.subsidiary}
                  onChange={(e) => handleInputChange('subsidiary', e.target.value)}
                >
                  <option value="">Select...</option>
                  {subsidiaries.map((sub, index) => (
                    <option key={index} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">CLASS</label>
                <select 
                  className="form-control"
                  value={formData.class}
                  onChange={(e) => handleInputChange('class', e.target.value)}
                >
                  <option value="">Select...</option>
                  {classes.map((cls, index) => (
                    <option key={index} value={cls}>{cls}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">DEPARTMENT <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                >
                  <option value="">Select...</option>
                  {departments.map((dept, index) => (
                    <option key={index} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">LOCATION</label>
                <select 
                  className="form-control"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                >
                  <option value="">Select...</option>
                  {locations.map((loc, index) => (
                    <option key={index} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Tabs Section */}
        <div className="form-section">
          <div className="tabs-header" style={{ borderBottom: '2px solid #4a90e2', marginBottom: '1.5rem', display: 'flex' }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.75rem 1.5rem',
                  border: 'none',
                  background: activeTab === tab.id ? '#4a90e2' : '#f5f5f5',
                  color: activeTab === tab.id ? '#fff' : '#666',
                  fontWeight: activeTab === tab.id ? '600' : '400',
                  cursor: 'pointer',
                  borderRadius: '4px 4px 0 0',
                  marginRight: '0.25rem',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{ minHeight: '150px', padding: '1rem 0' }}>
            {activeTab === 'payment-method' && (
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">PAYMENT METHOD</label>
                  <select 
                    className="form-control"
                    value={formData.paymentMethod}
                    onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                  >
                    <option value="">Select...</option>
                    {paymentMethods.map((method, index) => (
                      <option key={index} value={method}>{method}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">CHECK #</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.check}
                    onChange={(e) => handleInputChange('check', e.target.value)}
                  />
                </div>
              </div>
            )}

            {activeTab === 'relationships' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>
                No relationship data available
              </div>
            )}

            {activeTab === 'communication' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>
                No communication data available
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-secondary" onClick={() => showToast('Saved', 'success')}>
              <i className="fas fa-save"></i>
              Save
            </button>
            <button className="btn btn-secondary" onClick={() => showToast('Actions menu', 'info')}>
              Actions
            </button>
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

export default RecordCustomerDeposit;
