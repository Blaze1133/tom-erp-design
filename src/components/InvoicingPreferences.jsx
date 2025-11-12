import React, { useState } from 'react';
import Toast from './Toast';

const InvoicingPreferences = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('invoicing');
  
  const [formData, setFormData] = useState({
    combineTimeItems: true,
    groupTimeByEmployee: false,
    combineExpenseItems: false,
    groupExpenseByEmployee: false,
    combineBillableItems: true,
    groupBillableTypes: false,
    showBillableSubtotals: false,
    invoicingEmail: '',
    invoiceGroups: [
      'Tech Onshore MEP Prefabricators Pte Ltd.',
      'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Air',
      'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore',
      'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine'
    ]
  });

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
    showToast('Invoicing Preferences saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Changes cancelled', 'info');
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Invoicing Preferences</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary">
            <i className="fas fa-question-circle"></i>
            More
          </button>
        </div>
      </div>

      <div className="form-container">
        {/* Action Buttons */}
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-tertiary" onClick={handleCancel}>
            Cancel
          </button>
        </div>

        {/* Tabs */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'invoicing' ? 'active' : ''}`}
              onClick={() => setActiveTab('invoicing')}
            >
              Invoicing
            </button>
            <button 
              className={`tab-btn ${activeTab === 'invoice-groups' ? 'active' : ''}`}
              onClick={() => setActiveTab('invoice-groups')}
            >
              Invoice Groups
            </button>
            <button 
              className={`tab-btn ${activeTab === 'email' ? 'active' : ''}`}
              onClick={() => setActiveTab('email')}
            >
              Email
            </button>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-bars" style={{ color: '#718096', cursor: 'pointer' }}></i>
            </div>
          </div>

          <div className="tabs-content">
            {activeTab === 'invoicing' && (
              <div style={{ padding: '1.5rem' }}>
                {/* Info Banner */}
                <div style={{ 
                  backgroundColor: '#e3f2fd', 
                  border: '1px solid #90caf9', 
                  borderRadius: '4px', 
                  padding: '1rem', 
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem'
                }}>
                  <i className="fas fa-info-circle" style={{ color: '#1976d2', fontSize: '1.25rem', marginTop: '0.2rem' }}></i>
                  <div style={{ fontSize: '0.875rem', color: '#0d47a1' }}>
                    Below are options for how billable lines appear on invoices. Set the various options until the preview reflects how you would like your invoices to appear.
                  </div>
                </div>

                {/* Checkboxes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.combineTimeItems}
                        onChange={() => handleCheckboxChange('combineTimeItems')}
                      />
                      <span style={{ fontWeight: '600' }}>COMBINE TIME ITEMS ON INVOICES</span>
                    </label>
                    <div style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          checked={formData.groupTimeByEmployee}
                          onChange={() => handleCheckboxChange('groupTimeByEmployee')}
                          disabled={!formData.combineTimeItems}
                        />
                        <span>GROUP TIME BY EMPLOYEE</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.combineExpenseItems}
                        onChange={() => handleCheckboxChange('combineExpenseItems')}
                      />
                      <span style={{ fontWeight: '600' }}>COMBINE EXPENSE ITEMS ON INVOICES</span>
                    </label>
                    <div style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          checked={formData.groupExpenseByEmployee}
                          onChange={() => handleCheckboxChange('groupExpenseByEmployee')}
                          disabled={!formData.combineExpenseItems}
                        />
                        <span>GROUP EXPENSE BY EMPLOYEE</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.combineBillableItems}
                        onChange={() => handleCheckboxChange('combineBillableItems')}
                      />
                      <span style={{ fontWeight: '600' }}>COMBINE BILLABLE ITEMS ON INVOICES</span>
                    </label>
                  </div>

                  <div style={{ marginLeft: '1.5rem' }}>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.groupBillableTypes}
                        onChange={() => handleCheckboxChange('groupBillableTypes')}
                      />
                      <span>GROUP BILLABLE TYPES ON INVOICES</span>
                    </label>
                  </div>

                  <div style={{ marginLeft: '1.5rem' }}>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.showBillableSubtotals}
                        onChange={() => handleCheckboxChange('showBillableSubtotals')}
                      />
                      <span>SHOW BILLABLE SUBTOTALS ON INVOICES</span>
                    </label>
                  </div>
                </div>

                {/* Info Text */}
                <div style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: '#666' }}>
                  <ul style={{ marginLeft: '1.5rem', lineHeight: '1.6' }}>
                    <li>When you choose to add billable subtotals, the subtotaling will happen by whatever column you have used to sort the billable list. The secondary sort will be by the previously sorted column. For example, to sort and subtotal by category, simply click on the category header (on the project header).</li>
                    <li>You can change the order of billable items, expenses, and time by customizing the invoice form and reordering the tabs under the line items tab.</li>
                  </ul>
                </div>

                {/* Preview Section */}
                <div style={{ marginTop: '2rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#4a5568' }}>PREVIEW</h3>
                  <div style={{ 
                    border: '1px solid #e0e0e0', 
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{ backgroundColor: '#e3f2fd', padding: '0.75rem 1rem', borderBottom: '1px solid #e0e0e0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <i className="fas fa-info-circle" style={{ color: '#1976d2' }}></i>
                        <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Invoice</span>
                      </div>
                    </div>
                    <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', maxHeight: '400px', overflow: 'auto' }}>
                      <table style={{ width: '100%', fontSize: '0.75rem', borderCollapse: 'collapse' }}>
                        <thead>
                          <tr style={{ backgroundColor: '#fff', borderBottom: '2px solid #e0e0e0' }}>
                            <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: '600' }}>Service</th>
                            <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: '600' }}>Item</th>
                            <th style={{ padding: '0.5rem', textAlign: 'center', fontWeight: '600' }}>Date</th>
                            <th style={{ padding: '0.5rem', textAlign: 'left', fontWeight: '600' }}>Billed Employee/Quantity/Description</th>
                            <th style={{ padding: '0.5rem', textAlign: 'right', fontWeight: '600' }}>Unit Price/Amount</th>
                            <th style={{ padding: '0.5rem', textAlign: 'right', fontWeight: '600' }}>Tax</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ backgroundColor: '#e8f4f8' }}>
                            <td colSpan="6" style={{ padding: '0.5rem', fontWeight: '600' }}>Billable Items</td>
                          </tr>
                          {[
                            { project: 'Project A', item: 'HP Compaq d230', date: '9/1/2005', qty: '1', price: '323.10', tax: 'Yes' },
                            { project: 'Project A', item: 'Standard Keyboard', date: '9/1/2005', qty: '1', desc: 'Standard Keyboard', price: '35.96', tax: 'Yes' },
                            { project: 'Project B', item: 'HP Compaq d230', date: '9/1/2005', qty: '1', price: '323.10', tax: 'Yes' },
                            { project: 'Project B', item: 'Standard Keyboard', date: '9/1/2005', qty: '1', desc: 'Standard Keyboard', price: '35.96', tax: 'Yes' },
                            { project: 'Project A', item: 'HP Compaq d230', date: '9/5/2005', qty: '1', price: '323.10', tax: 'Yes' },
                            { project: 'Project A', item: 'Standard Keyboard', date: '9/5/2005', qty: '1', desc: 'Standard Keyboard', price: '35.96', tax: 'Yes' }
                          ].map((row, idx) => (
                            <tr key={idx} style={{ borderBottom: '1px solid #e0e0e0' }}>
                              <td style={{ padding: '0.5rem' }}>{row.project}</td>
                              <td style={{ padding: '0.5rem' }}>{row.item}</td>
                              <td style={{ padding: '0.5rem', textAlign: 'center' }}>{row.date}</td>
                              <td style={{ padding: '0.5rem' }}>{row.qty} {row.desc || ''}</td>
                              <td style={{ padding: '0.5rem', textAlign: 'right' }}>{row.price}</td>
                              <td style={{ padding: '0.5rem', textAlign: 'right' }}>{row.tax}</td>
                            </tr>
                          ))}
                          <tr style={{ backgroundColor: '#f0f0f0', fontWeight: '600' }}>
                            <td colSpan="4" style={{ padding: '0.5rem', textAlign: 'right' }}>Total Billable Items</td>
                            <td style={{ padding: '0.5rem', textAlign: 'right' }}>1,436.24</td>
                            <td></td>
                          </tr>
                          <tr style={{ backgroundColor: '#e8f4f8' }}>
                            <td colSpan="6" style={{ padding: '0.5rem', fontWeight: '600' }}>Billable Expenses</td>
                          </tr>
                          <tr style={{ backgroundColor: '#f0f0f0', fontWeight: '600' }}>
                            <td colSpan="4" style={{ padding: '0.5rem', textAlign: 'right' }}>Total Billable Expenses</td>
                            <td style={{ padding: '0.5rem', textAlign: 'right' }}>670.00</td>
                            <td></td>
                          </tr>
                          <tr style={{ backgroundColor: '#e8f4f8' }}>
                            <td colSpan="6" style={{ padding: '0.5rem', fontWeight: '600' }}>Billable Time</td>
                          </tr>
                          <tr style={{ backgroundColor: '#f0f0f0', fontWeight: '600' }}>
                            <td colSpan="4" style={{ padding: '0.5rem', textAlign: 'right' }}>Total Billable Time</td>
                            <td style={{ padding: '0.5rem', textAlign: 'right' }}>2,860.00</td>
                            <td></td>
                          </tr>
                          <tr style={{ borderTop: '2px solid #333' }}>
                            <td colSpan="4" style={{ padding: '0.5rem', textAlign: 'right', fontWeight: '600' }}>Subtotal</td>
                            <td style={{ padding: '0.5rem', textAlign: 'right', fontWeight: '600' }}>4,966.24</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td colSpan="4" style={{ padding: '0.5rem', textAlign: 'right' }}>Tax (CA-SAN MATEO @ 2.5%)</td>
                            <td style={{ padding: '0.5rem', textAlign: 'right' }}>118.49</td>
                            <td></td>
                          </tr>
                          <tr style={{ borderTop: '2px solid #333', fontWeight: '700' }}>
                            <td colSpan="4" style={{ padding: '0.5rem', textAlign: 'right' }}>Total</td>
                            <td style={{ padding: '0.5rem', textAlign: 'right' }}>5,194.73</td>
                            <td></td>
                          </tr>
                          <tr style={{ fontWeight: '700', backgroundColor: '#fff3cd' }}>
                            <td colSpan="4" style={{ padding: '0.5rem', textAlign: 'right' }}>Amount Due</td>
                            <td style={{ padding: '0.5rem', textAlign: 'right' }}>$5,161.73</td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'invoice-groups' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="form-group">
                  <label className="form-label">GROUP INVOICES FOR NEW CUSTOMERS</label>
                  <select 
                    className="form-control"
                    multiple
                    size="6"
                    style={{ height: 'auto' }}
                  >
                    {formData.invoiceGroups.map((group, idx) => (
                      <option key={idx} value={group}>{group}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {activeTab === 'email' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="form-group">
                  <label className="form-label">INVOICING EMAIL</label>
                  <input
                    type="email"
                    className="form-control"
                    value={formData.invoicingEmail}
                    onChange={(e) => handleInputChange('invoicingEmail', e.target.value)}
                    placeholder="Enter email address"
                  />
                  <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
                    To set your subsidiary-level invoicing email address, go to <a href="#" style={{ color: '#3182CE' }}>Subsidiary Settings Manager</a>.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Buttons */}
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-tertiary" onClick={handleCancel}>
            Cancel
          </button>
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

export default InvoicingPreferences;
