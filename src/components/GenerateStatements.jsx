import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const GenerateStatements = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [formData, setFormData] = useState({
    statementDate: '9/11/2025',
    startDate: '9/10/2025',
    restrictByGroup: '',
    includeZeroBalances: false,
    showOnlyOpenTransactions: false,
    statementsInQueue: false,
    form: '- System Preference -'
  });

  const [customers] = useState([
    { id: 27, name: 'Seatrium (SG) Pte. Ltd.', subsidiary: 'Tech Offshore Marine (DO) Pte Ltd', currency: 'SGD', balance: '1,345,523.96' },
    { id: 204, name: 'Keppel Shipyard Limited', subsidiary: 'Tech Marine Offshore (S) Pte Ltd', currency: 'SGD', balance: '22,063.27' },
    { id: 204, name: 'Dowell Schlumberger Eastern Inc.', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', currency: 'USD', balance: '-525.95' },
    { id: 258, name: 'Fortis Construction Pte. Ltd.', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', currency: 'SGD', balance: '283,632.31' },
    { id: 346, name: 'Hong Kong Ship Solution Pte Ltd', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', currency: 'SGD', balance: '11,786.17' },
    { id: 465, name: 'Manuli Fluiconnecto Pte Ltd', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', currency: 'SGD', balance: '414.20' },
    { id: 601, name: 'Pt Geoprindo Intimare', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', currency: 'USD', balance: '25,936.77' },
    { id: 650, name: 'Schlumberger Overseas S.A.', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', currency: 'USD', balance: '22,198.81' },
    { id: 660, name: 'Sdk Consortium', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', currency: 'SGD', balance: '790,396.30' },
    { id: 764, name: 'Thunder Cranes Sdn Bhd', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', currency: 'SGD', balance: '1,625.00' },
    { id: 845, name: 'Mazars Doubtful Debts', subsidiary: 'Tech Marine Offshore (S) Pte Ltd', currency: 'SGD', balance: '-22,063.27' },
    { id: 846, name: 'Pt Dowell Anadrill Schlumberger', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', currency: 'USD', balance: '4,700.00' },
    { id: 861, name: 'GS Metal Engineering Pte Ltd', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', currency: 'SGD', balance: '52,808.34' },
    { id: 888, name: 'Norisk Air Solutions Pte Ltd', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', currency: 'SGD', balance: '17,253.60' },
    { id: 889, name: 'China Construction (South Pacific) Development Co Pte Ltd', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', currency: 'SGD', balance: '981.00' },
    { id: 918, name: 'CHAE KOREA PTE LTD', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', currency: 'SGD', balance: '15,696.00' },
    { id: 937, name: 'Accrued Sales Debtor', subsidiary: 'Tech Electric & Automation Pte Ltd', currency: 'SGD', balance: '804,760.12' },
    { id: 937, name: 'Accrued Sales Debtor', subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.', currency: 'SGD', balance: '2,921,987.20' }
  ]);

  const [selectedCustomers, setSelectedCustomers] = useState([]);

  const forms = [
    '- System Preference -',
    'TOM Customer Form',
    'Standard Customer Form'
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

  const handleCheckboxChange = (field, value) => {
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
    showToast('Printing statements...', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel?')) {
      setCurrentPage('dashboard');
    }
  };

  const handleCustomerClick = (customer) => {
    sessionStorage.setItem('selectedCustomerStatement', JSON.stringify(customer));
    setCurrentPage('view-customer-statement');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Print Statements</h1>
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
          <button className="btn btn-tertiary" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn-secondary" onClick={handleMarkAll}>
            Mark All
          </button>
          <button className="btn btn-secondary" onClick={handleUnmarkAll}>
            Unmark All
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
                <label className="form-label">STATEMENT DATE <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.statementDate}
                  onChange={(e) => handleInputChange('statementDate', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">START DATE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">RESTRICT BY GROUP</label>
                <select 
                  className="form-control"
                  value={formData.restrictByGroup}
                  onChange={(e) => handleInputChange('restrictByGroup', e.target.value)}
                >
                  <option value="">Select...</option>
                </select>
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

            {/* Right Side - Checkboxes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '0.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={formData.showOnlyOpenTransactions}
                  onChange={(e) => handleCheckboxChange('showOnlyOpenTransactions', e.target.checked)}
                  style={{ width: '18px', height: '18px' }}
                />
                <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>SHOW ONLY OPEN TRANSACTIONS</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={formData.statementsInQueue}
                  onChange={(e) => handleCheckboxChange('statementsInQueue', e.target.checked)}
                  style={{ width: '18px', height: '18px' }}
                />
                <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>STATEMENTS IN QUEUE</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={formData.includeZeroBalances}
                  onChange={(e) => handleCheckboxChange('includeZeroBalances', e.target.checked)}
                  style={{ width: '18px', height: '18px' }}
                />
                <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>INCLUDE ZERO BALANCES</span>
              </label>
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
            color: '#666'
          }}>
            Customize
          </div>

          <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th style={{ width: '50px' }}></th>
                  <th>ID #</th>
                  <th>CUSTOMER</th>
                  <th>SUBSIDIARY</th>
                  <th>CURRENCY</th>
                  <th style={{ textAlign: 'right' }}>BALANCE</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => (
                  <tr key={`${customer.id}-${index}`}>
                    <td>
                      <input 
                        type="checkbox" 
                        checked={selectedCustomers.includes(customer.id)}
                        onChange={() => toggleCustomer(customer.id)}
                        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                      />
                    </td>
                    <td>{customer.id}</td>
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
                    <td style={{ fontSize: '0.85rem' }}>{customer.subsidiary}</td>
                    <td>{customer.currency}</td>
                    <td className="amount">{customer.balance}</td>
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

export default GenerateStatements;
