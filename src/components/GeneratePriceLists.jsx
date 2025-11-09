import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const GeneratePriceLists = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [formData, setFormData] = useState({
    date: '9/11/2025',
    currency: 'All',
    assignedPriceLevelsOnly: false,
    roundQuantities: false,
    form: '- System Preference -'
  });

  const [customers] = useState([
    { id: 3, name: 'Sembcorp Marine Integrated Yard Pte Ltd', currency: 'SGD' },
    { id: '3-0003', name: 'Sembcorp Marine Integrated Yard Pte Ltd : Attend Space-electrical', currency: 'SGD' },
    { id: '3-0005', name: 'Sembcorp Marine Integrated Yard Pte Ltd : 03091230883 Ocean Protector - Electrical (repair vessel)', currency: 'SGD' },
    { id: '3-0004', name: 'Sembcorp Marine Integrated Yard Pte Ltd : TANGGUH SAGO - Electrical works', currency: 'SGD' },
    { id: '3-0005', name: 'Sembcorp Marine Integrated Yard Pte Ltd : ALICE : BWTS INSTALLATION - ELECTRICAL', currency: 'SGD' },
    { id: '3-0006', name: 'Sembcorp Marine Integrated Yard Pte Ltd : 03091230898 ASEAN EXPLORER - Installation of Lan Cable', currency: 'SGD' },
    { id: '3-0007', name: 'Sembcorp Marine Integrated Yard Pte Ltd : L-210 SES ENDEAVOUR (Tug-Craft)', currency: 'SGD' },
    { id: '3-0008', name: 'Sembcorp Marine Integrated Yard Pte Ltd : 03091230487 CLIPPER VANGUARD (Electrical)', currency: 'SGD' },
    { id: '3-0009', name: 'Sembcorp Marine Integrated Yard Pte Ltd : WILBUR SCHIEFERS - BWTS INSTALLATION- ELECTRICAL', currency: 'SGD' },
    { id: '3-0010', name: 'Sembcorp Marine Integrated Yard Pte Ltd : BWTS INSTALLATION = ELECTRICAL REPAIR WORKSHIP, PYEONGTAEK', currency: 'SGD' },
    { id: '3-0011', name: 'Sembcorp Marine Integrated Yard Pte Ltd : NINE SCHEEPERS - Electrical', currency: 'SGD' },
    { id: '3-0012', name: 'Sembcorp Marine Integrated Yard Pte Ltd : LNG VESTA - REMOVAL OF ELECTRICAL COMPONENTS', currency: 'SGD' },
    { id: '3-0013', name: 'Sembcorp Marine Integrated Yard Pte Ltd : BALLAST WATER TREATMENT SYSTEM - LABOUR SUPPLY OF 1 SUPERVISOR & 3 SKILLED WORKER', currency: 'SGD' },
    { id: '3-0014', name: 'Sembcorp Marine Integrated Yard Pte Ltd : GAS SPIRIT - SCRUBBER SYSTEM INSTALLATION', currency: 'SGD' },
    { id: '3-0015', name: 'Sembcorp Marine Integrated Yard Pte Ltd : ARDMORE SEALVALIANT :BWTS INSTALLATION AND MICRO BOILER INSTALLATION', currency: 'SGD' },
    { id: '3-0017', name: 'Sembcorp Marine Integrated Yard Pte Ltd : KARNIOL MOT POWERSHIP TURPIKE (EX LNG VESTA)', currency: 'SGD' },
    { id: '3-0018', name: 'Sembcorp Marine Integrated Yard Pte Ltd : 03091210566 - RSS Endeavour- Electrical works', currency: 'SGD' }
  ]);

  const [selectedCustomers, setSelectedCustomers] = useState([]);

  const currencies = ['All', 'Primary Currency'];
  const forms = ['- System Preference -', 'Standard Price List'];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleCustomer = (customerId) => {
    setSelectedCustomers(prev => {
      if (prev.includes(customerId)) {
        return prev.filter(id => id !== customerId);
      } else {
        return [...prev, customerId];
      }
    });
  };

  const handleMarkAll = () => {
    setSelectedCustomers(customers.map(c => c.id));
    showToast('All customers marked', 'info');
  };

  const handleUnmarkAll = () => {
    setSelectedCustomers([]);
    showToast('All customers unmarked', 'info');
  };

  const handlePrint = () => {
    if (selectedCustomers.length === 0) {
      showToast('Please select at least one customer', 'error');
      return;
    }
    showToast('Printing price lists...', 'success');
  };

  const handleEmail = () => {
    if (selectedCustomers.length === 0) {
      showToast('Please select at least one customer', 'error');
      return;
    }
    showToast('Emailing price lists...', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel?')) {
      setCurrentPage('dashboard');
    }
  };

  const handleCustomerClick = (customer) => {
    sessionStorage.setItem('selectedPriceListCustomer', JSON.stringify(customer));
    setCurrentPage('view-price-list-customer');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-tags" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Generate Price Lists</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={() => showToast('More options', 'info')}>
            More
          </button>
        </div>
      </div>

      <div className="quotation-container">
        <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-primary" onClick={handlePrint}>
            <i className="fas fa-print"></i>
            Print
          </button>
          <button className="btn btn-secondary" onClick={handleEmail}>
            <i className="fas fa-envelope"></i>
            Email
          </button>
          <button className="btn btn-tertiary" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn-secondary" onClick={handleMarkAll}>
            Mark All
          </button>
          <button className="btn btn-secondary" onClick={handleUnmarkAll}>
            Unmark All
          </button>
          <button className="btn btn-secondary" onClick={() => showToast('Customize', 'info')}>
            Customize
          </button>
          <button className="btn btn-secondary" onClick={() => showToast('Actions menu', 'info')}>
            Actions
          </button>
        </div>

        {/* Form Fields */}
        <div className="form-section">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {/* Left Side - Form Fields */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
                <label className="form-label">PRICE LISTS IN QUEUE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value="0"
                  readOnly
                  style={{ background: '#f5f5f5' }}
                  placeholder="0"
                />
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
            </div>

            {/* Right Side - Form and Checkboxes */}
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

        {/* Customers Table */}
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
            <span>Customers 100 ● Items ●</span>
            <span style={{ fontSize: '0.875rem' }}>1 to 100 of 1991</span>
          </div>

          <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th style={{ width: '120px' }}>ID #</th>
                  <th>CUSTOMER</th>
                  <th style={{ width: '100px' }}>CURRENCY</th>
                  <th style={{ width: '50px' }}></th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => (
                  <tr key={`${customer.id}-${index}`}>
                    <td style={{ whiteSpace: 'nowrap' }}>{customer.id}</td>
                    <td>
                      <button 
                        onClick={() => handleCustomerClick(customer)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#4a90e2',
                          cursor: 'pointer',
                          textDecoration: 'underline',
                          padding: 0,
                          textAlign: 'left',
                          fontSize: '0.875rem'
                        }}
                      >
                        {customer.name}
                      </button>
                    </td>
                    <td>{customer.currency}</td>
                    <td style={{ textAlign: 'center' }}>
                      <input 
                        type="checkbox" 
                        checked={selectedCustomers.includes(customer.id)}
                        onChange={() => toggleCustomer(customer.id)}
                        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                      />
                    </td>
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

export default GeneratePriceLists;
