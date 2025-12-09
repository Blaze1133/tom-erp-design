import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EnterVendorReturnAuthorizations = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState('expenses');

  // Form state
  const [formData, setFormData] = useState({
    referenceNo: 'To Be Generated',
    date: '',
    tax: '',
    vendor: '',
    amount: '',
    vatRegistration: '',
    status: 'Pending Approval',
    currency: 'SGD',
    memo: '',
    exchangeRate: 1.00,
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    purchaseType: 'High',
    materialSpecification: '',
    expenses: []
  });

  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveReturn = () => {
    setIsSaved(true);
    showToast('Vendor return authorization saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-vendor-return-authorizations');
      }
    }
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-vendor-return-authorizations');
    }
  };

  const handleAddExpense = () => {
    const newExpense = {
      id: formData.expenses.length + 1,
      account: '',
      amount: 0.00,
      taxCode: '',
      taxRate: '',
      taxAmount: 0.00,
      grossAmount: 0.00,
      memo: '',
      project: '',
      department: '',
      class: '',
      location: '',
      customer: '',
      billable: false
    };
    setFormData(prev => ({
      ...prev,
      expenses: [...prev.expenses, newExpense]
    }));
  };

  const handleInsertAbove = (index) => {
    const newExpense = {
      id: Date.now(),
      account: '',
      amount: 0.00,
      taxCode: '',
      taxRate: '',
      taxAmount: 0.00,
      grossAmount: 0.00,
      memo: '',
      project: '',
      department: '',
      class: '',
      location: '',
      customer: '',
      billable: false
    };
    setFormData(prev => ({
      ...prev,
      expenses: [...prev.expenses.slice(0, index), newExpense, ...prev.expenses.slice(index)]
    }));
  };

  const handleInsertBelow = (index) => {
    const newExpense = {
      id: Date.now(),
      account: '',
      amount: 0.00,
      taxCode: '',
      taxRate: '',
      taxAmount: 0.00,
      grossAmount: 0.00,
      memo: '',
      project: '',
      department: '',
      class: '',
      location: '',
      customer: '',
      billable: false
    };
    setFormData(prev => ({
      ...prev,
      expenses: [...prev.expenses.slice(0, index + 1), newExpense, ...prev.expenses.slice(index + 1)]
    }));
  };

  const handleDeleteRow = (index) => {
    if (window.confirm('Are you sure you want to delete this row?')) {
      setFormData(prev => ({
        ...prev,
        expenses: prev.expenses.filter((_, i) => i !== index)
      }));
      showToast('Row deleted successfully', 'success');
    }
  };

  const handleMenuToggle = (index, event) => {
    event.stopPropagation();
    if (activeMenu === index) {
      setActiveMenu(null);
    } else {
      const rect = event.currentTarget.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX
      });
      setActiveMenu(index);
    }
  };

  // Calculation functions
  const calculateSubtotal = () => {
    return formData.expenses.reduce((sum, expense) => sum + (parseFloat(expense.amount) || 0), 0);
  };

  const calculateTaxAmount = () => {
    return formData.expenses.reduce((sum, expense) => sum + (parseFloat(expense.taxAmount) || 0), 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTaxAmount();
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-undo"></i>
          <div>
            <h1>Vendor Return Authorization</h1>
            <div className="detail-subtitle">
              <span># To be generated – New Vendor Return Authorization</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={() => setCurrentPage('view-vendor-return-authorizations')}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn-toolbar-primary" onClick={handleSaveReturn}>
          <i className="fas fa-save"></i>
          Save
        </button>
        {isSaved && (
          <>
            <button className="btn-toolbar">
              <i className="fas fa-copy"></i>
              Copy
            </button>
            <button className="btn-toolbar">
              <i className="fas fa-print"></i>
              Print
            </button>
            <button className="btn-toolbar">
              <i className="fas fa-redo"></i>
              Recall
            </button>
          </>
        )}
      </div>

      <div className="detail-content">
        {/* Primary Information */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>DATE *</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.date}
                  onChange={(e) => handleFormChange('date', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>REFERENCE NO.</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.referenceNo}
                  disabled
                />
              </div>
              <div className="detail-field">
                <label>TAX</label>
                <select 
                  className="form-control"
                  value={formData.tax}
                  onChange={(e) => handleFormChange('tax', e.target.value)}
                >
                  <option value="">Select Tax Rate</option>
                  <option value="9.0%">9.0%</option>
                  <option value="Zero Rated">Zero Rated</option>
                </select>
              </div>
              <div className="detail-field">
                <label>VENDOR *</label>
                <select 
                  className="form-control"
                  value={formData.vendor}
                  onChange={(e) => handleFormChange('vendor', e.target.value)}
                >
                  <option value="">{'<Type then tab>'}</option>
                  <option>365 PROPERTY SG PTE LTD</option>
                  <option>5MS Enterprise Pte Ltd</option>
                  <option>7-ELEVEN COLD STORAGE</option>
                  <option>8 POINT ENGINEERING PTE LTD</option>
                  <option>818 TRADERS</option>
                  <option>96 CRANE SOLUTIONS PTE LTD</option>
                  <option>A & B SCAFFOLD ENGINEERING PTE LTD</option>
                  <option>EASTERN SEALAND SUPPLY PTE LTD</option>
                  <option>LOH & SONS PAINT CO. (S) PTE. LTD</option>
                  <option>TOKIO MARINE INSURANCE SINGAPORE LTD.</option>
                </select>
              </div>
              <div className="detail-field">
                <label>AMOUNT</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.amount}
                  onChange={(e) => handleFormChange('amount', e.target.value)}
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
              <div className="detail-field">
                <label>STATUS</label>
                <select 
                  className="form-control"
                  value={formData.status}
                  onChange={(e) => handleFormChange('status', e.target.value)}
                >
                  <option>Pending Approval</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                </select>
              </div>
              <div className="detail-field">
                <label>GST REGISTRATION</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.vatRegistration}
                  onChange={(e) => handleFormChange('vatRegistration', e.target.value)}
                  placeholder="Enter GST registration"
                />
              </div>
              <div className="detail-field">
                <label>MEMO</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.memo}
                  onChange={(e) => handleFormChange('memo', e.target.value)}
                  placeholder="Enter memo"
                />
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Classification */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY *</label>
                <select 
                  className="form-control"
                  value={formData.subsidiary}
                  onChange={(e) => handleFormChange('subsidiary', e.target.value)}
                >
                  <option>Tech Onshore MEP Prefabricators Pte Ltd.</option>
                  <option>Tech Marine Offshore (S) Pte Ltd</option>
                  <option>TOM Offshore Marine Engineering Pte Ltd</option>
                  <option>TOM Shipyard Pte Ltd</option>
                  <option>TOM Engineering & Trading Pte Ltd</option>
                  <option>TOM Industrial Services Pte Ltd</option>
                </select>
              </div>
              <div className="detail-field">
                <label>CURRENCY *</label>
                <select 
                  className="form-control"
                  value={formData.currency}
                  onChange={(e) => handleFormChange('currency', e.target.value)}
                >
                  <option>SGD</option>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                  <option>INR</option>
                </select>
              </div>
              <div className="detail-field">
                <label>PURCHASE TYPE</label>
                <select 
                  className="form-control"
                  value={formData.purchaseType}
                  onChange={(e) => handleFormChange('purchaseType', e.target.value)}
                >
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>
              <div className="detail-field">
                <label>MATERIAL SPECIFICATION</label>
                <select 
                  className="form-control"
                  value={formData.materialSpecification}
                  onChange={(e) => handleFormChange('materialSpecification', e.target.value)}
                >
                  <option value="">Select...</option>
                  <option>- New -</option>
                  <option>GST BEHALF OF</option>
                  <option>Material Specification</option>
                  <option>test2</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Tabbed Interface */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'expenses' ? 'active' : ''}`}
              onClick={() => setActiveTab('expenses')}
            >
              Expenses & Items
            </button>
            <button 
              className={`tab-btn ${activeTab === 'billing' ? 'active' : ''}`}
              onClick={() => setActiveTab('billing')}
            >
              Billing
            </button>
            <button 
              className={`tab-btn ${activeTab === 'relationships' ? 'active' : ''}`}
              onClick={() => setActiveTab('relationships')}
            >
              Relationships
            </button>
            <button 
              className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`}
              onClick={() => setActiveTab('communication')}
            >
              Communication
            </button>
            <button 
              className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`}
              onClick={() => setActiveTab('custom')}
            >
              Custom
            </button>
            <button 
              className={`tab-btn ${activeTab === 'tax' ? 'active' : ''}`}
              onClick={() => setActiveTab('tax')}
            >
              Tax Reporting
            </button>
          </div>

          <div className="tabs-content">
            {/* Expenses & Items Tab */}
            {activeTab === 'expenses' && (
              <div className="form-section">
                <div className="detail-grid" style={{ gridTemplateColumns: '1fr', marginBottom: '1.5rem', maxWidth: '400px' }}>
                  <div className="detail-field">
                    <label>EXCHANGE RATE <span className="required">*</span></label>
                    <input 
                      type="number" 
                      className="form-control"
                      step="0.01"
                      value={formData.exchangeRate}
                      onChange={(e) => handleFormChange('exchangeRate', parseFloat(e.target.value) || 1.00)}
                    />
                  </div>
                </div>

                {formData.expenses.length > 0 ? (
                  <div className="items-table-wrapper" style={{ marginTop: '0' }}>
                    <table className="detail-items-table" style={{ minWidth: '2000px' }}>
                      <thead>
                        <tr>
                          <th style={{ width: '30px' }}></th>
                          <th style={{ minWidth: '200px' }}>ACCOUNT *</th>
                          <th style={{ minWidth: '120px' }}>AMOUNT *</th>
                          <th style={{ minWidth: '150px' }}>TAX CODE *</th>
                          <th style={{ minWidth: '100px' }}>TAX RATE</th>
                          <th style={{ minWidth: '120px' }}>TAX AMT</th>
                          <th style={{ minWidth: '120px' }}>GROSS AMT</th>
                          <th style={{ minWidth: '200px' }}>MEMO</th>
                          <th style={{ minWidth: '150px' }}>DEPARTMENT *</th>
                          <th style={{ minWidth: '150px' }}>CLASS</th>
                          <th style={{ minWidth: '150px' }}>LOCATION</th>
                          <th style={{ minWidth: '150px' }}>CUSTOMER</th>
                          <th style={{ minWidth: '100px' }}>BILLABLE</th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.expenses.map((expense, index) => (
                          <tr 
                            key={expense.id} 
                            className="table-row-with-actions"
                            onMouseEnter={() => setHoveredRow(index)}
                            onMouseLeave={() => setHoveredRow(null)}
                          >
                            <td style={{ textAlign: 'center', position: 'relative' }}>
                              {hoveredRow === index && (
                                <button 
                                  className="row-actions-btn" 
                                  title="Row Actions"
                                  onClick={(e) => handleMenuToggle(index, e)}
                                >
                                  <i className="fas fa-ellipsis-v"></i>
                                </button>
                              )}
                              {activeMenu === index && (
                                <div 
                                  className="row-actions-menu" 
                                  style={{ 
                                    top: `${menuPosition.top}px`, 
                                    left: `${menuPosition.left}px`,
                                    display: 'block'
                                  }}
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <button onClick={() => {
                                    handleInsertAbove(index);
                                    setActiveMenu(null);
                                  }}>
                                    <i className="fas fa-arrow-up"></i>
                                    Insert Above
                                  </button>
                                  <button onClick={() => {
                                    handleInsertBelow(index);
                                    setActiveMenu(null);
                                  }}>
                                    <i className="fas fa-arrow-down"></i>
                                    Insert Below
                                  </button>
                                  <button onClick={() => {
                                    handleDeleteRow(index);
                                    setActiveMenu(null);
                                  }} className="delete-action">
                                    <i className="fas fa-trash"></i>
                                    Delete Row
                                  </button>
                                </div>
                              )}
                            </td>
                            <td>
                              <select 
                                className="form-control" 
                                defaultValue={expense.account} 
                                style={{ minWidth: '200px', height: '40px' }}
                              >
                                <option value="">{'<Type then tab>'}</option>
                                <option>Cost of Goods Sold</option>
                                <option>Operating Expenses</option>
                                <option>Materials</option>
                              </select>
                            </td>
                            <td>
                              <input 
                                type="number" 
                                className="form-control" 
                                defaultValue={expense.amount} 
                                style={{ minWidth: '120px', height: '40px' }} 
                                step="0.01"
                              />
                            </td>
                            <td>
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue={expense.taxCode} 
                                placeholder="Tax Code" 
                                style={{ minWidth: '150px', height: '40px' }} 
                              />
                            </td>
                            <td>
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue={expense.taxRate} 
                                placeholder="Rate" 
                                style={{ minWidth: '100px', height: '40px' }} 
                              />
                            </td>
                            <td>
                              <input 
                                type="number" 
                                className="form-control" 
                                defaultValue={expense.taxAmount} 
                                style={{ minWidth: '120px', height: '40px' }} 
                                step="0.01"
                              />
                            </td>
                            <td>
                              <input 
                                type="number" 
                                className="form-control" 
                                defaultValue={expense.grossAmount} 
                                style={{ minWidth: '120px', height: '40px' }} 
                                step="0.01"
                              />
                            </td>
                            <td>
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue={expense.memo} 
                                placeholder="Memo" 
                                style={{ minWidth: '200px', height: '40px' }} 
                              />
                            </td>
                            <td>
                              <select 
                                className="form-control" 
                                defaultValue={expense.department} 
                                style={{ minWidth: '150px', height: '40px' }}
                              >
                                <option value="">Select...</option>
                                <option>TOM: Engineering</option>
                                <option>TOM: Production</option>
                                <option>TOM: Sales and Marketing</option>
                                <option>TOM: Purchase</option>
                                <option>TOM: Operating</option>
                              </select>
                            </td>
                            <td>
                              <select 
                                className="form-control" 
                                defaultValue={expense.class} 
                                style={{ minWidth: '150px', height: '40px' }}
                              >
                                <option value="">Select...</option>
                                <option>Consumable Item</option>
                                <option>Material Supply</option>
                                <option>Fabrication</option>
                                <option>Electrical</option>
                              </select>
                            </td>
                            <td>
                              <select 
                                className="form-control" 
                                defaultValue={expense.location} 
                                style={{ minWidth: '150px', height: '40px' }}
                              >
                                <option value="">Select...</option>
                                <option>Hong Hang Shipyard</option>
                                <option>Mega yard</option>
                                <option>MEP MARINE CC</option>
                                <option>Singapore (MEP)</option>
                                <option>TOM-11</option>
                                <option>TOM-13</option>
                              </select>
                            </td>
                            <td>
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue={expense.customer} 
                                placeholder="Customer" 
                                style={{ minWidth: '150px', height: '40px' }} 
                              />
                            </td>
                            <td style={{ textAlign: 'center' }}>
                              <input 
                                type="checkbox" 
                                defaultChecked={expense.billable}
                                style={{ width: '18px', height: '18px' }}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div style={{ 
                    padding: '3rem', 
                    textAlign: 'center', 
                    background: '#f9fafb', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    marginBottom: '1.5rem'
                  }}>
                    <p style={{ color: '#6b7280', margin: 0 }}>
                      No expenses added yet. Click "Add Expense" to start adding expenses.
                    </p>
                  </div>
                )}

                <button className="btn btn-primary" onClick={handleAddExpense} style={{ marginBottom: '1.5rem' }}>
                  <i className="fas fa-plus"></i>
                  Add Expense
                </button>

                {formData.expenses.length > 0 && (
                  <div className="summary-grid">
                    <div className="summary-card">
                      <div className="summary-title">SUBTOTAL</div>
                      <div className="summary-value">${calculateSubtotal().toFixed(2)}</div>
                    </div>
                    <div className="summary-card">
                      <div className="summary-title">TAX AMOUNT</div>
                      <div className="summary-value">${calculateTaxAmount().toFixed(2)}</div>
                    </div>
                    <div className="summary-card">
                      <div className="summary-title">DISCOUNT</div>
                      <div className="summary-value">$0.00</div>
                    </div>
                    <div className="summary-card" style={{ background: '#f8f9fa' }}>
                      <div className="summary-title">TOTAL AMOUNT</div>
                      <div className="summary-value" style={{ color: '#4a90e2' }}>${calculateTotal().toFixed(2)}</div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div className="form-section">
                <h2 className="section-title">
                  <i className="fas fa-file-invoice-dollar"></i>
                  Billing Information
                </h2>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>VENDOR SELECT</label>
                    <select className="form-control">
                      <option>- Custom -</option>
                      <option>Vendor Address 1</option>
                      <option>Vendor Address 2</option>
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>VENDOR ADDRESS</label>
                    <textarea 
                      className="form-control" 
                      rows="4"
                      placeholder="Vendor address will appear here"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Relationships Tab */}
            {activeTab === 'relationships' && (
              <div className="form-section">
                <h2 className="section-title">
                  <i className="fas fa-users"></i>
                  Contacts
                </h2>
                <div className="items-table-wrapper" style={{ marginTop: '1rem' }}>
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th style={{ minWidth: '200px' }}>CONTACT *</th>
                        <th style={{ minWidth: '150px' }}>JOB TITLE</th>
                        <th style={{ minWidth: '200px' }}>EMAIL</th>
                        <th style={{ minWidth: '150px' }}>MAIN PHONE</th>
                        <th style={{ minWidth: '200px' }}>SUBSIDIARY *</th>
                        <th style={{ minWidth: '100px' }}>ROLE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><input type="text" className="form-control" placeholder="Type to search" style={{ height: '40px' }} /></td>
                        <td><input type="text" className="form-control" style={{ height: '40px' }} /></td>
                        <td><input type="text" className="form-control" style={{ height: '40px' }} /></td>
                        <td><input type="text" className="form-control" style={{ height: '40px' }} /></td>
                        <td><input type="text" className="form-control" style={{ height: '40px' }} /></td>
                        <td><input type="text" className="form-control" style={{ height: '40px' }} /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-primary"><i className="fas fa-check"></i> Add</button>
                  <button className="btn btn-secondary"><i className="fas fa-times"></i> Cancel</button>
                  <button className="btn btn-secondary">Insert</button>
                  <button className="btn btn-secondary">Remove</button>
                </div>
              </div>
            )}

            {/* Communication Tab */}
            {activeTab === 'communication' && (
              <div className="form-section">
                <h2 className="section-title">
                  <i className="fas fa-comments"></i>
                  Messages
                </h2>
                <div style={{ borderBottom: '2px solid #e0e0e0', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0' }}>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: '#fff', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.875rem', cursor: 'pointer' }}>Events</button>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.875rem', cursor: 'pointer' }}>Tasks</button>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.875rem', cursor: 'pointer' }}>Phone Calls</button>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.875rem', cursor: 'pointer' }}>Files</button>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', fontSize: '0.875rem', cursor: 'pointer' }}>User Notes</button>
                  </div>
                </div>
                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th style={{ minWidth: '200px' }}>TITLE *</th>
                        <th style={{ minWidth: '150px' }}>LOCATION</th>
                        <th style={{ minWidth: '150px' }}>DATE *</th>
                        <th style={{ minWidth: '100px' }}>ALL DAY</th>
                        <th style={{ minWidth: '150px' }}>START TIME</th>
                        <th style={{ minWidth: '150px' }}>END TIME</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><input type="text" className="form-control" style={{ height: '40px' }} /></td>
                        <td><input type="text" className="form-control" style={{ height: '40px' }} /></td>
                        <td><input type="date" className="form-control" style={{ height: '40px' }} /></td>
                        <td style={{ textAlign: 'center' }}><input type="checkbox" style={{ width: '18px', height: '18px' }} /></td>
                        <td><input type="time" className="form-control" style={{ height: '40px' }} /></td>
                        <td><input type="time" className="form-control" style={{ height: '40px' }} /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-primary"><i className="fas fa-check"></i> Add</button>
                  <button className="btn btn-secondary"><i className="fas fa-times"></i> Cancel</button>
                  <button className="btn btn-secondary">Insert</button>
                  <button className="btn btn-secondary">Remove</button>
                </div>
              </div>
            )}

            {/* Custom Tab */}
            {activeTab === 'custom' && (
              <div className="form-section">
                <h2 className="section-title">
                  <i className="fas fa-cog"></i>
                  Custom Fields
                </h2>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>MATERIAL TYPE</label>
                    <textarea 
                      className="form-control" 
                      rows="4"
                      placeholder="Type text and format it using the toolbar."
                    />
                  </div>
                  <div className="detail-field">
                    <label>TEST TRANSACTION FIELD</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="detail-field">
                    <label>DO RECORD CREATED</label>
                    <input type="checkbox" style={{ width: '18px', height: '18px' }} />
                  </div>
                </div>
              </div>
            )}

            {/* Tax Reporting Tab */}
            {activeTab === 'tax' && (
              <div className="form-section">
                <h2 className="section-title">
                  <i className="fas fa-file-invoice"></i>
                  Tax Reporting
                </h2>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>TAX INFORMATION</label>
                    <textarea 
                      className="form-control" 
                      rows="4"
                      placeholder="Enter tax reporting information"
                    />
                  </div>
                </div>
              </div>
            )}
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

export default EnterVendorReturnAuthorizations;
