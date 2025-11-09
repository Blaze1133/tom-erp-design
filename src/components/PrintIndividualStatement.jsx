import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const PrintIndividualStatement = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);
  const [customerSearch, setCustomerSearch] = useState('');

  const [formData, setFormData] = useState({
    customerProject: '',
    subsidiary: '',
    balance: '',
    statementDate: '9/11/2025',
    startDate: '9/10/2025',
    showOnlyOpenTransactions: false,
    form: '- System Preference -'
  });

  const customers = [
    '100 - 102',
    '100 Baroid Surface Solutions ,Halliburton Energy Services Inc',
    '1000 TEAM LEAD CONSTRUCTION PTE LTD',
    'TOM22-00656 TEAM LEAD CONSTRUCTION PTE LTD : 25-00003-TLC-Nursing Home @ Hougang Ave 1',
    '1001 TECH ONSHORE MEP-PREFABRICATORS PTE LTD',
    'TOM22-00733 TECH ONSHORE MEP-PREFABRICATORS PTE LTD : 25-00010-TOM-Riser Concept',
    'TOM22-00741 TECH ONSHORE MEP-PREFABRICATORS PTE LTD : 25-00015-TOM-TOM Innovation'
  ];

  const subsidiaries = [
    'Tech Offshore Marine (DO) Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];

  const forms = [
    '- System Preference -',
    'Standard Statement',
    'TOM Statement'
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

  const handleCustomerSelect = (customer) => {
    setFormData(prev => ({
      ...prev,
      customerProject: customer
    }));
    setShowCustomerDropdown(false);
    setCustomerSearch('');
  };

  const filteredCustomers = customers.filter(customer =>
    customer.toLowerCase().includes(customerSearch.toLowerCase())
  );

  const handlePrint = () => {
    if (!formData.customerProject) {
      showToast('Please select a customer/project', 'error');
      return;
    }
    if (!formData.subsidiary) {
      showToast('Please select a subsidiary', 'error');
      return;
    }
    if (!formData.statementDate) {
      showToast('Please enter statement date', 'error');
      return;
    }
    showToast('Printing individual statement...', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel?')) {
      setCurrentPage('dashboard');
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Print Individual Statement</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={() => showToast('More options', 'info')}>
            More
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Action Buttons */}
        <div style={{ marginBottom: '2rem', display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-primary" onClick={handlePrint}>
            <i className="fas fa-print"></i>
            Print
          </button>
          <button className="btn btn-secondary" onClick={() => showToast('Actions menu', 'info')}>
            Actions
          </button>
        </div>

        {/* Form Section */}
        <div className="form-section">
          <div className="form-grid">
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Customer/Project Field with Dropdown */}
              <div className="form-group" style={{ position: 'relative' }}>
                <label className="form-label">CUSTOMER:PROJECT <span className="required">*</span></label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.customerProject}
                    onChange={(e) => {
                      handleInputChange('customerProject', e.target.value);
                      setShowCustomerDropdown(true);
                    }}
                    onFocus={() => setShowCustomerDropdown(true)}
                    placeholder="< Type then tab >"
                  />
                  <i 
                    className="fas fa-chevron-down" 
                    style={{ 
                      position: 'absolute', 
                      right: '12px', 
                      top: '50%', 
                      transform: 'translateY(-50%)',
                      color: '#666',
                      cursor: 'pointer',
                      pointerEvents: 'none'
                    }}
                  ></i>
                </div>
                
                {showCustomerDropdown && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: '#fff',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    zIndex: 1000,
                    maxHeight: '300px',
                    overflow: 'auto',
                    marginTop: '4px'
                  }}>
                    <div style={{ padding: '0.75rem', borderBottom: '1px solid #e0e0e0', background: '#f8f9fa' }}>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <input 
                          type="text"
                          placeholder="Type & tab..."
                          value={customerSearch}
                          onChange={(e) => setCustomerSearch(e.target.value)}
                          style={{
                            flex: 1,
                            padding: '0.5rem',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '0.875rem'
                          }}
                        />
                        <button 
                          onClick={() => setShowCustomerDropdown(false)}
                          style={{
                            padding: '0.5rem 1rem',
                            background: '#4a90e2',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '0.875rem',
                            fontWeight: '600'
                          }}
                        >
                          Search
                        </button>
                      </div>
                    </div>
                    <div>
                      {filteredCustomers.map((customer, index) => (
                        <div
                          key={index}
                          onClick={() => handleCustomerSelect(customer)}
                          style={{
                            padding: '0.75rem 1rem',
                            cursor: 'pointer',
                            borderBottom: '1px solid #f0f0f0',
                            fontSize: '0.875rem',
                            transition: 'background 0.2s ease'
                          }}
                          onMouseEnter={(e) => e.target.style.background = '#f8f9fa'}
                          onMouseLeave={(e) => e.target.style.background = '#fff'}
                        >
                          {customer}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

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
                <label className="form-label">BALANCE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.balance}
                  onChange={(e) => handleInputChange('balance', e.target.value)}
                  readOnly
                  style={{ background: '#f5f5f5' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">STATEMENT DATE <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.statementDate}
                  onChange={(e) => handleInputChange('statementDate', e.target.value)}
                />
              </div>
            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="form-group">
                <label className="form-label">START DATE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                />
              </div>

              <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '0.5rem' }}>
                <input 
                  type="checkbox" 
                  checked={formData.showOnlyOpenTransactions}
                  onChange={(e) => handleInputChange('showOnlyOpenTransactions', e.target.checked)}
                  style={{ width: '18px', height: '18px' }}
                />
                <label style={{ fontWeight: '600', fontSize: '0.875rem', margin: 0 }}>SHOW ONLY OPEN TRANSACTIONS</label>
              </div>

              <div className="form-group">
                <label className="form-label">FORM</label>
                <select 
                  className="form-control"
                  value={formData.form}
                  onChange={(e) => handleInputChange('form', e.target.value)}
                >
                  {forms.map((form, index) => (
                    <option key={index} value={form}>{form}</option>
                  ))}
                </select>
              </div>
            </div>
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

export default PrintIndividualStatement;
