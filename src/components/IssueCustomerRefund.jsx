import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const IssueCustomerRefund = ({ onBack }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('relationships');
  const [expandedSections, setExpandedSections] = useState({
    primary: true,
    classification: true
  });

  const [formData, setFormData] = useState({
    customForm: 'TOM Customer Refund',
    customer: '',
    account: '',
    arAccount: '',
    toBePrinted: false,
    transactionNumber: 'To Be Generated',
    balance: '0.00',
    refundAmount: '0.00',
    currency: 'SGD',
    exchangeRate: '1.00',
    date: new Date().toLocaleDateString('en-GB'),
    postingPeriod: 'Nov 2025',
    memo: '',
    subsidiary: '',
    class: '',
    location: '',
    department: ''
  });

  const [contacts, setContacts] = useState([]);
  const [applyItems, setApplyItems] = useState([]);

  const customers = [
    '100 Baroid Surface Solutions, Halliburton Energy Services Inc',
    '1000 TEAM LEAD CONSTRUCTION PTE LTD',
    '1002 TECH MARINE OFFSHORE (S) PTE LTD'
  ];

  const arAccounts = [
    '10100 Accounts Receivable : Trade Debtors',
    '10200 Accounts Receivable : Other Debtors',
    '13510 Clearing Accounts : Undeposited Funds'
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
    showToast('Customer Refund saved successfully!', 'success');
    if (onBack) onBack();
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (onBack) onBack();
    }
  };

  const handleAddContact = () => {
    setContacts([...contacts, { id: Date.now(), contact: '', jobTitle: '', email: '', mainPhone: '', subsidiary: '', role: '' }]);
  };

  const handleRemoveContact = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-undo-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Customer Refund</h1>
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
                  <option value="TOM Customer Refund">TOM Customer Refund</option>
                  <option value="Standard Customer Refund">Standard Customer Refund</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">ACCOUNT <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.account}
                  onChange={(e) => handleInputChange('account', e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="- New -">- New -</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">TRANSACTION NUMBER</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.transactionNumber}
                  readOnly
                  style={{ background: '#f5f5f5' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">A/R ACCOUNT <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.arAccount}
                  onChange={(e) => handleInputChange('arAccount', e.target.value)}
                >
                  <option value="">Select...</option>
                  {arAccounts.map((account, index) => (
                    <option key={index} value={account}>{account}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">CUSTOMER <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.customer}
                  onChange={(e) => handleInputChange('customer', e.target.value)}
                >
                  <option value="">Select...</option>
                  {customers.map((customer, index) => (
                    <option key={index} value={customer}>{customer}</option>
                  ))}
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
                <label className="form-label">DATE <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">REFUND AMOUNT</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.refundAmount}
                  onChange={(e) => handleInputChange('refundAmount', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">POSTING PERIOD</label>
                <select 
                  className="form-control"
                  value={formData.postingPeriod}
                  onChange={(e) => handleInputChange('postingPeriod', e.target.value)}
                >
                  <option value="Nov 2025">Nov 2025</option>
                  <option value="Oct 2025">Oct 2025</option>
                  <option value="Sep 2025">Sep 2025</option>
                </select>
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

              <div className="form-group" style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginTop: '1rem' }}>
                  <input 
                    type="checkbox"
                    checked={formData.toBePrinted}
                    onChange={(e) => handleInputChange('toBePrinted', e.target.checked)}
                    style={{ marginRight: '10px', width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                  <span className="form-label" style={{ margin: 0, fontSize: '13px' }}>TO BE PRINTED</span>
                </label>
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
                onClick={() => setActiveTab('relationships')}
                style={{
                  padding: '0.75rem 2rem',
                  border: 'none',
                  background: activeTab === 'relationships' ? '#5b7a9e' : '#e0e0e0',
                  color: activeTab === 'relationships' ? 'white' : '#666',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
              >
                Relationships
              </button>
              <button
                onClick={() => setActiveTab('apply')}
                style={{
                  padding: '0.75rem 2rem',
                  border: 'none',
                  background: activeTab === 'apply' ? '#5b7a9e' : '#e0e0e0',
                  color: activeTab === 'apply' ? 'white' : '#666',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
              >
                Apply
              </button>
            </div>
          </div>

          {activeTab === 'relationships' && (
            <>
              <div style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '1rem' }}>Contacts</h3>
                <button className="btn btn-secondary" onClick={handleAddContact} style={{ marginBottom: '1rem' }}>
                  <i className="fas fa-plus"></i>
                  Add
                </button>
              </div>

              <div className="items-table-wrapper">
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th style={{ width: '40px' }}></th>
                      <th>CONTACT <span className="required">*</span></th>
                      <th>JOB TITLE</th>
                      <th>EMAIL</th>
                      <th>MAIN PHONE</th>
                      <th>SUBSIDIARY <span className="required">*</span></th>
                      <th>ROLE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.length === 0 ? (
                      <tr>
                        <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                          No records to show.
                        </td>
                      </tr>
                    ) : (
                      contacts.map((contact) => (
                        <tr key={contact.id}>
                          <td style={{ textAlign: 'center' }}>
                            <button 
                              className="btn-icon" 
                              onClick={() => handleRemoveContact(contact.id)}
                              style={{ color: '#dc3545' }}
                            >
                              <i className="fas fa-times"></i>
                            </button>
                          </td>
                          <td><input type="text" className="form-control" /></td>
                          <td><input type="text" className="form-control" /></td>
                          <td><input type="text" className="form-control" /></td>
                          <td><input type="text" className="form-control" /></td>
                          <td><input type="text" className="form-control" /></td>
                          <td><input type="text" className="form-control" /></td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === 'apply' && (
            <>
              <div style={{ marginBottom: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '4px' }}>
                <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem' }}>
                  <div>
                    <span style={{ fontWeight: '600' }}>Credits:</span> 0.00
                  </div>
                  <div>
                    <span style={{ fontWeight: '600' }}>Deposits:</span> 0.00
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label className="form-label" style={{ fontSize: '0.75rem' }}>SELECT ITEM</label>
                    <input type="text" className="form-control" style={{ fontSize: '0.875rem' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem' }}>Mark All</button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem' }}>Unmark All</button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem' }}>Customize</button>
                </div>
              </div>

              <div className="items-table-wrapper">
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>APPLY</th>
                      <th>DATE</th>
                      <th>TYPE</th>
                      <th>CREDIT AMT.</th>
                      <th>AMOUNT REMAINING</th>
                      <th>CURRENCY</th>
                      <th>PAYMENT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                        No records to show.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
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

export default IssueCustomerRefund;
