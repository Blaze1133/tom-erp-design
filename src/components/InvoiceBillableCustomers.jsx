import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const InvoiceBillableCustomers = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [expandedSections, setExpandedSections] = useState({
    options: true
  });

  const [formData, setFormData] = useState({
    invoiceDate: '9/11/2025',
    account: 'Use System Preference',
    form: 'TOM Service Invoice',
    toBePrinted: 'Respect Customer Preference',
    toBeEmailed: 'Respect Customer Preference',
    toBeFaxed: 'Respect Customer Preference'
  });

  const [options, setOptions] = useState({
    expenses: true,
    items: true,
    time: true,
    creditCardApproved: false,
    showInvoices: true,
    doNotApplyGrouping: false
  });

  const [customers] = useState([]);

  const accounts = [
    'Use System Preference',
    'Respect Customer Preference',
    '10100 Accounts Receivable : Trade Debtors',
    '10200 Accounts Receivable : Contract Assets Debtor',
    '10400 Accounts Receivable : Intercompany Debtors',
    '10700 Accounts Receivable : Other Account Receivables',
    '10900 Accounts Receivable : Other Debtor'
  ];

  const forms = [
    'TOM Service Invoice',
    'FedEx Commercial Invoice',
    'Standard Cash Sale',
    'Standard Finance Charge',
    'TOM Cash Sale',
    'TOM Debit Note',
    'TOM Jurong Port Service Invoice',
    'TOM Letterhead Invoice'
  ];

  const printOptions = [
    'Respect Customer Preference',
    'Yes',
    'No'
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

  const handleOptionChange = (option, value) => {
    setOptions(prev => ({
      ...prev,
      [option]: value
    }));
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSubmit = () => {
    showToast('Invoice processing initiated', 'success');
  };

  const handleMarkAll = () => {
    showToast('All customers marked', 'info');
  };

  const handleUnmarkAll = () => {
    showToast('All customers unmarked', 'info');
  };

  const handleCustomize = () => {
    showToast('Customize options', 'info');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice-dollar" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Invoice Customers</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={() => showToast('More options', 'info')}>
            More
          </button>
        </div>
      </div>

      <div className="quotation-container">
        <div style={{ marginBottom: '1.5rem' }}>
          <button className="btn btn-primary" onClick={handleSubmit}>
            <i className="fas fa-check"></i>
            Submit
          </button>
        </div>

        {/* Options Section */}
        <div className="form-section">
          <div 
            className="section-title" 
            onClick={() => toggleSection('options')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div>
              <i className={`fas fa-chevron-${expandedSections.options ? 'down' : 'right'}`} style={{ marginRight: '10px' }}></i>
              <i className="fas fa-cog" style={{ marginRight: '10px' }}></i>
              Options
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          {expandedSections.options && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              {/* Left Side - Dropdowns and Inputs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="form-group">
                  <label className="form-label">INVOICE DATE <span className="required">*</span></label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.invoiceDate}
                    onChange={(e) => handleInputChange('invoiceDate', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">ACCOUNT</label>
                  <select 
                    className="form-control"
                    value={formData.account}
                    onChange={(e) => handleInputChange('account', e.target.value)}
                  >
                    {accounts.map((account, index) => (
                      <option key={index} value={account}>{account}</option>
                    ))}
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

                <div className="form-group">
                  <label className="form-label">TO BE PRINTED</label>
                  <select 
                    className="form-control"
                    value={formData.toBePrinted}
                    onChange={(e) => handleInputChange('toBePrinted', e.target.value)}
                  >
                    {printOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">TO BE EMAILED</label>
                  <select 
                    className="form-control"
                    value={formData.toBeEmailed}
                    onChange={(e) => handleInputChange('toBeEmailed', e.target.value)}
                  >
                    {printOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">TO BE FAXED</label>
                  <select 
                    className="form-control"
                    value={formData.toBeFaxed}
                    onChange={(e) => handleInputChange('toBeFaxed', e.target.value)}
                  >
                    {printOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Right Side - Checkboxes */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '0.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={options.expenses}
                    onChange={(e) => handleOptionChange('expenses', e.target.checked)}
                    style={{ width: '18px', height: '18px' }}
                  />
                  <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>EXPENSES</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={options.items}
                    onChange={(e) => handleOptionChange('items', e.target.checked)}
                    style={{ width: '18px', height: '18px' }}
                  />
                  <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>ITEMS</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={options.time}
                    onChange={(e) => handleOptionChange('time', e.target.checked)}
                    style={{ width: '18px', height: '18px' }}
                  />
                  <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>TIME</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={options.creditCardApproved}
                    onChange={(e) => handleOptionChange('creditCardApproved', e.target.checked)}
                    style={{ width: '18px', height: '18px' }}
                  />
                  <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>CREDIT CARD APPROVED</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={options.showInvoices}
                    onChange={(e) => handleOptionChange('showInvoices', e.target.checked)}
                    style={{ width: '18px', height: '18px' }}
                  />
                  <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>SHOW INVOICES</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={options.doNotApplyGrouping}
                    onChange={(e) => handleOptionChange('doNotApplyGrouping', e.target.checked)}
                    style={{ width: '18px', height: '18px' }}
                  />
                  <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>DO NOT APPLY GROUPING</span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Customers Table */}
        <div className="form-section">
          <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ fontWeight: '600', fontSize: '0.875rem' }}>BILL DATE</div>
            <select className="form-control" style={{ width: '150px' }}>
              <option>All</option>
            </select>
            <div style={{ fontWeight: '600', fontSize: '0.875rem', marginLeft: '2rem' }}>FROM</div>
            <input type="text" className="form-control" style={{ width: '150px' }} />
            <div style={{ fontWeight: '600', fontSize: '0.875rem' }}>TO</div>
            <input type="text" className="form-control" style={{ width: '150px' }} />
          </div>

          <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
            <button className="btn btn-secondary" onClick={handleMarkAll}>
              Mark All
            </button>
            <button className="btn btn-secondary" onClick={handleUnmarkAll}>
              Unmark All
            </button>
            <button className="btn btn-secondary" onClick={handleCustomize}>
              Customize
            </button>
          </div>

          <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th style={{ width: '50px' }}></th>
                  <th>PROCESS</th>
                  <th>CUSTOMER:PROJECT ▲</th>
                  <th>SUBSIDIARY</th>
                  <th style={{ textAlign: 'right' }}>ESTIMATE</th>
                  <th>INVOICE CURRENCY</th>
                </tr>
              </thead>
              <tbody>
                {customers.length === 0 ? (
                  <tr>
                    <td colSpan="6" style={{ textAlign: 'center', padding: '3rem', color: '#999' }}>
                      No records to show.
                    </td>
                  </tr>
                ) : (
                  customers.map((customer) => (
                    <tr key={customer.id}>
                      <td>
                        <input 
                          type="checkbox" 
                          style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                        />
                      </td>
                      <td>{customer.process}</td>
                      <td>{customer.customerProject}</td>
                      <td>{customer.subsidiary}</td>
                      <td className="amount">{customer.estimate}</td>
                      <td>{customer.currency}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Summary Cards Below Table */}
          <div className="summary-cards" style={{ 
            display: 'flex', 
            gap: '1rem', 
            marginTop: '1.5rem',
            justifyContent: 'flex-end'
          }}>
            <div className="summary-card" style={{
              background: '#f8f9fa',
              padding: '1rem 1.5rem',
              borderRadius: '4px',
              minWidth: '150px',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '0.75rem', 
                fontWeight: '600', 
                color: '#666',
                marginBottom: '0.5rem',
                letterSpacing: '0.5px'
              }}>
                COUNT
              </div>
              <div style={{ 
                fontSize: '1.25rem', 
                fontWeight: '600', 
                color: '#333'
              }}>
                0
              </div>
            </div>
            <div className="summary-card" style={{
              background: '#f8f9fa',
              padding: '1rem 1.5rem',
              borderRadius: '4px',
              minWidth: '150px',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '0.75rem', 
                fontWeight: '600', 
                color: '#666',
                marginBottom: '0.5rem',
                letterSpacing: '0.5px'
              }}>
                TOTAL
              </div>
              <div style={{ 
                fontSize: '1.25rem', 
                fontWeight: '600', 
                color: '#4a90e2'
              }}>
                0.00
              </div>
            </div>
          </div>
        </div>

        {/* Footer Submit Button */}
        <div style={{ marginTop: '2rem' }}>
          <button className="btn btn-primary" onClick={handleSubmit}>
            <i className="fas fa-check"></i>
            Submit
          </button>
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

export default InvoiceBillableCustomers;
