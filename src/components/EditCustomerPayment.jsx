import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditCustomerPayment = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('apply');
  const [expandedSections, setExpandedSections] = useState({
    primary: true,
    classification: true
  });

  const [formData, setFormData] = useState({
    customForm: 'TOM Customer Payment',
    customer: '845 Mazens Doubtful Debts',
    arAccount: 'UNDEPOSITED FUNDS',
    accountType: 'ACCOUNT',
    accountValue: '10100 Accounts Receivable : Trade Debtors',
    payment: 'PVTOMDQ00004',
    balance: '-22,063.27',
    pending: '0.00',
    currency: 'SGD',
    exchangeRate: '1.00',
    date: '31/3/2021',
    postingPeriod: 'Mar 2021',
    memo: 'VOID',
    subsidiary: 'Tech Offshore Marine (DQ) Pte Ltd',
    class: '',
    location: 'Singapore (TDQ)',
    department: '',
    paymentAmount: '0.00',
    autoApply: false,
    paymentMethod: '',
    checkNumber: ''
  });

  const [invoices, setInvoices] = useState([]);

  const customers = [
    '100 Baroid Surface Solutions, Halliburton Energy Services Inc',
    '1000 TEAM LEAD CONSTRUCTION PTE LTD',
    '845 Mazens Doubtful Debts'
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
    showToast('Customer Payment updated successfully!', 'success');
    setTimeout(() => {
      setCurrentPage('view-customer-payments');
    }, 1000);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      setCurrentPage('view-customer-payments');
    }
  };

  const calculateTotals = () => {
    const applied = invoices.reduce((sum, inv) => sum + (parseFloat(inv.payment) || 0), 0);
    const unapplied = parseFloat(formData.paymentAmount) - applied;
    return { applied, unapplied };
  };

  const totals = calculateTotals();

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-money-check-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Payment {formData.payment}</h1>
          <span style={{ 
            marginLeft: '1rem', 
            padding: '0.25rem 0.75rem', 
            background: '#d4edda', 
            color: '#155724',
            borderRadius: '4px',
            fontSize: '0.75rem',
            fontWeight: '600',
            textTransform: 'uppercase'
          }}>
            DEPOSITED
          </span>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
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
            <div className="form-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              <div className="form-group">
                <label className="form-label">CUSTOM FORM <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.customForm}
                  onChange={(e) => handleInputChange('customForm', e.target.value)}
                >
                  <option value="TOM Customer Payment">TOM Customer Payment</option>
                  <option value="Standard Customer Payment">Standard Customer Payment</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">A/R ACCOUNT <span className="required">*</span></label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem' }}>
                    <input 
                      type="radio" 
                      name="arAccount"
                      checked={formData.arAccount === 'UNDEPOSITED FUNDS'}
                      onChange={() => handleInputChange('arAccount', 'UNDEPOSITED FUNDS')}
                      style={{ marginRight: '8px' }}
                    />
                    UNDEPOSITED FUNDS
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem' }}>
                    <input 
                      type="radio" 
                      name="arAccount"
                      checked={formData.arAccount === 'ACCOUNT'}
                      onChange={() => handleInputChange('arAccount', 'ACCOUNT')}
                      style={{ marginRight: '8px' }}
                    />
                    ACCOUNT
                  </label>
                  {formData.arAccount === 'ACCOUNT' && (
                    <select 
                      className="form-control"
                      value={formData.accountValue}
                      onChange={(e) => handleInputChange('accountValue', e.target.value)}
                      style={{ marginTop: '0.5rem' }}
                    >
                      <option value="10100 Accounts Receivable : Trade Debtors">10100 Accounts Receivable : Trade Debtors</option>
                    </select>
                  )}
                </div>
              </div>


              <div className="form-group">
                <label className="form-label">CUSTOMER <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.customer}
                  onChange={(e) => handleInputChange('customer', e.target.value)}
                  list="customers-list"
                />
                <datalist id="customers-list">
                  {customers.map((customer, index) => (
                    <option key={index} value={customer} />
                  ))}
                </datalist>
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

              <div className="form-group">
                <label className="form-label">PAYMENT <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.payment}
                  readOnly
                  style={{ background: '#f5f5f5' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">POSTING PERIOD</label>
                <select 
                  className="form-control"
                  value={formData.postingPeriod}
                  onChange={(e) => handleInputChange('postingPeriod', e.target.value)}
                >
                  <option value="Mar 2021">Mar 2021</option>
                  <option value="Apr 2021">Apr 2021</option>
                  <option value="May 2021">May 2021</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">BALANCE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.balance}
                  readOnly
                  style={{ background: '#f5f5f5' }}
                />
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
                <label className="form-label">PENDING</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.pending}
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
                </select>
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
                <label className="form-label">LOCATION</label>
                <select 
                  className="form-control"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                >
                  {locations.map((loc, index) => (
                    <option key={index} value={loc}>{loc}</option>
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
            </div>
          )}
        </div>

        {/* Tabs Section */}
        <div className="form-section">
          <div style={{ borderBottom: '2px solid #5b7a9e', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '0' }}>
              <button
                onClick={() => setActiveTab('apply')}
                style={{
                  padding: '0.75rem 2rem',
                  border: 'none',
                  background: activeTab === 'apply' ? '#5b7a9e' : '#e0e0e0',
                  color: activeTab === 'apply' ? 'white' : '#666',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}
              >
                Apply
              </button>
              <button
                onClick={() => setActiveTab('payment-method')}
                style={{
                  padding: '0.75rem 2rem',
                  border: 'none',
                  background: activeTab === 'payment-method' ? '#5b7a9e' : '#e0e0e0',
                  color: activeTab === 'payment-method' ? 'white' : '#666',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}
              >
                Payment Method
              </button>
            </div>
          </div>

          {activeTab === 'apply' && (
            <>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label className="form-label">PAYMENT AMOUNT <span className="required">*</span></label>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.paymentAmount}
                    onChange={(e) => handleInputChange('paymentAmount', e.target.value)}
                    style={{ maxWidth: '200px' }}
                  />
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem' }}>
                    AUTO APPLY
                  </button>
                </div>
              </div>

              <div style={{ marginBottom: '1rem', borderBottom: '1px solid #e0e0e0', paddingBottom: '0.5rem' }}>
                <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem', fontWeight: '600' }}>
                  <span style={{ color: '#4a90e2', cursor: 'pointer' }}>Invoices 0.00</span>
                  <span style={{ cursor: 'pointer' }}>Credits 0.00</span>
                  <span style={{ cursor: 'pointer' }}>Deposits 0.00</span>
                </div>
              </div>

              <div className="items-table-wrapper">
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>APPLY</th>
                      <th>DATE</th>
                      <th>TYPE</th>
                      <th>REF NO.</th>
                      <th>GROUPED TO</th>
                      <th>GROUP DATE</th>
                      <th>ORIG. AMT.</th>
                      <th>AMT. DUE</th>
                      <th>CURRENCY</th>
                      <th>DISC. DATE</th>
                      <th>DISC. AVAIL.</th>
                      <th>DISC. TAKEN</th>
                      <th>PAYMENT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="13" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                        No records to show.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Summary - Below table */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>
                <div style={{ background: 'white', padding: '1.25rem', border: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                    TO APPLY
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                    ${parseFloat(formData.paymentAmount).toFixed(2)}
                  </div>
                </div>
                <div style={{ background: 'white', padding: '1.25rem', border: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                    APPLIED
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                    ${totals.applied.toFixed(2)}
                  </div>
                </div>
                <div style={{ background: 'white', padding: '1.25rem', border: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                    UNAPPLIED
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '600', color: '#4a90e2' }}>
                    ${totals.unapplied.toFixed(2)}
                  </div>
                </div>
              </div>
            </>
          )}

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
                  value={formData.checkNumber}
                  onChange={(e) => handleInputChange('checkNumber', e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-primary" onClick={handleSave}>
              <i className="fas fa-save"></i>
              Save
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

export default EditCustomerPayment;
