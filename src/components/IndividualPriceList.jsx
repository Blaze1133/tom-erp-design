import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const IndividualPriceList = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);
  const [customerSearch, setCustomerSearch] = useState('');
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);

  const [formData, setFormData] = useState({
    customerProject: '',
    currency: 'All',
    date: '9/11/2025',
    type: '- All -',
    assignedPriceLevelsOnly: false,
    roundQuantities: false,
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

  const currencies = ['All', 'Primary Currency'];
  const forms = ['- System Preference -', 'Standard Price List'];

  const types = [
    '- All -',
    'Inventory Item',
    'Kit/Package',
    'Non-inventory Item',
    'Other Charge'
  ];

  const items = [
    { name: 'AISI 41 30', number: 'AISI 41 30' },
    { name: 'Administrative Charges', number: 'Administrative Charges' },
    { name: 'Angle Bar', number: 'Angle Bar' },
    { name: 'Angle Bar (new)', number: 'Angle Bar (new)' },
    { name: 'Beams', number: 'Beams' },
    { name: 'Blasting', number: 'Blasting' },
    { name: 'C/S Pipe', number: 'C/S Pipe' },
    { name: 'Calibration', number: 'Calibration' },
    { name: 'Channel', number: 'Channel' },
    { name: 'Cutting', number: 'Cutting' },
    { name: 'Debit Note', number: 'Debit Note' },
    { name: 'Design(Skid & Piping)', number: 'Design(Skid & Piping)' },
    { name: 'Electrical Works', number: 'Electrical Works' },
    { name: 'Fabrication', number: 'Fabrication' },
    { name: 'Galvanising', number: 'Galvanising' },
    { name: 'Hollow Section', number: 'Hollow Section' },
    { name: 'Hot Works', number: 'Hot Works' },
    { name: 'Inspection', number: 'Inspection' },
    { name: 'ManPower Supply', number: 'ManPower Supply' },
    { name: 'New Material', number: 'New Material' },
    { name: 'Opening A/R Balance', number: 'Opening A/R Balance' },
    { name: 'Other Consumable', number: 'Other Consumable' },
    { name: 'PQR / WPS Qualification', number: 'PQR / WPS Qualification' },
    { name: 'PROJECT ITEM', number: 'PROJECT ITEM' }
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
    if (!formData.date) {
      showToast('Please enter date', 'error');
      return;
    }
    showToast('Printing individual price list...', 'success');
  };

  const handleEmail = () => {
    if (!formData.customerProject) {
      showToast('Please select a customer/project', 'error');
      return;
    }
    showToast('Emailing price list...', 'success');
  };

  const handleExport = () => {
    if (!formData.customerProject) {
      showToast('Please select a customer/project', 'error');
      return;
    }
    showToast('Exporting price list...', 'success');
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
          <i className="fas fa-tags" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Generate Price List</h1>
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
          <div style={{ display: 'flex' }}>
            <button 
              className="btn btn-primary" 
              onClick={handlePrint}
              style={{ 
                borderTopRightRadius: 0, 
                borderBottomRightRadius: 0,
                borderRight: '1px solid rgba(255,255,255,0.3)'
              }}
            >
              <i className="fas fa-print"></i>
              Print
            </button>
            <button 
              className="btn btn-primary" 
              onClick={() => showToast('Print options', 'info')}
              style={{ 
                borderTopLeftRadius: 0, 
                borderBottomLeftRadius: 0,
                padding: '0.5rem 0.75rem',
                minWidth: 'auto'
              }}
            >
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>

          <button className="btn btn-tertiary" onClick={handleCancel}>
            Cancel
          </button>

          <div style={{ display: 'flex' }}>
            <button 
              className="btn btn-secondary" 
              onClick={handleEmail}
              style={{ 
                borderTopRightRadius: 0, 
                borderBottomRightRadius: 0,
                borderRight: '1px solid rgba(255,255,255,0.3)'
              }}
            >
              <i className="fas fa-envelope"></i>
              Email
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => showToast('Email options', 'info')}
              style={{ 
                borderTopLeftRadius: 0, 
                borderBottomLeftRadius: 0,
                padding: '0.5rem 0.75rem',
                minWidth: 'auto'
              }}
            >
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>

          <button className="btn btn-secondary" onClick={handleExport}>
            Export
          </button>

          <button className="btn btn-secondary" onClick={() => showToast('Actions menu', 'info')}>
            Actions
          </button>
        </div>

        {/* Form Section */}
        <div className="form-section">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
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
                <label className="form-label">CURRENCY</label>
                <select 
                  className="form-control"
                  value={formData.currency}
                  onChange={(e) => handleInputChange('currency', e.target.value)}
                >
                  {currencies.map((currency, index) => (
                    <option key={index} value={currency}>{currency}</option>
                  ))}
                </select>
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
                <label className="form-label">TYPE</label>
                <select 
                  className="form-control"
                  value={formData.type}
                  onChange={(e) => handleInputChange('type', e.target.value)}
                >
                  {types.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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

              <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '0.5rem' }}>
                <input 
                  type="checkbox" 
                  checked={formData.assignedPriceLevelsOnly}
                  onChange={(e) => handleInputChange('assignedPriceLevelsOnly', e.target.checked)}
                  style={{ width: '18px', height: '18px' }}
                />
                <label style={{ fontWeight: '600', fontSize: '0.875rem', margin: 0 }}>ASSIGNED PRICE LEVELS ONLY</label>
              </div>

              <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input 
                  type="checkbox" 
                  checked={formData.roundQuantities}
                  onChange={(e) => handleInputChange('roundQuantities', e.target.checked)}
                  style={{ width: '18px', height: '18px' }}
                />
                <label style={{ fontWeight: '600', fontSize: '0.875rem', margin: 0 }}>ROUND QUANTITIES</label>
              </div>
            </div>
          </div>
        </div>

        {/* Customize Section */}
        <div className="form-section" style={{ marginTop: '2rem' }}>
          <div style={{ 
            background: '#f8f9fa', 
            padding: '1rem', 
            borderRadius: '4px',
            marginBottom: '1rem',
            fontWeight: '600',
            color: '#666',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span>Customize</span>
            <span style={{ fontSize: '0.875rem' }}>1 to 23 of 40</span>
          </div>

          <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th>NAME/NUMBER ●</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td style={{ fontSize: '0.875rem' }}>{item.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default IndividualPriceList;
