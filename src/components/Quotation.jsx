import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const Quotation = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  // Customer project dropdown states
  const [customerProjectHovered, setCustomerProjectHovered] = useState(false);
  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [customerSearch, setCustomerSearch] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  
  // Row actions states
  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  
  // Items state
  const [items, setItems] = useState([
    {
      id: 1,
      item: 'Welding',
      quantity: 4,
      units: 'Kgs',
      description: 'Aluminum Electrodes 3.2mm x 4 kgs',
      priceLevel: 'Custom',
      rate: 15.00,
      amount: 60.00,
      taxCode: 'GST_SG:7%',
      taxRate: '7.0%',
      taxAmount: 4.20,
      grossAmount: 64.20
    }
  ]);

  const [formData, setFormData] = useState({
    // Primary Information
    customForm: 'TOM Supply Quotation',
    estimateNumber: 'To Be Generated',
    customerProject: '',
    title: '',
    date: '3/12/2025',
    status: 'Proposal',
    probability: '50.0%',
    expectedClose: '3/12/2025',
    expires: '1/1/2026',
    memo: '',
    
    // Sales Information
    salesRep: '',
    opportunity: '',
    forecastType: 'Omitted',
    
    // Classification
    subsidiary: '',
    class: '',
    location: '',
    department: '',
    taxesAndDuties: '',
    variation: '',
    approvalStatus: 'Pending Approval',
    contactPerson: '',
    hsCode: '',
    countryOfOrigin: ''
  });

  // Customer options for dropdown
  const customerOptions = [
    '612 Raise Pte Ltd',
    'ABC Corporation',
    'XYZ Industries',
    'Tech Marine Solutions'
  ];

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleSubmit = () => {
    showToast('Quotation saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to close this transaction? Any unsaved changes will be lost.')) {
      showToast('Transaction cancelled', 'error');
    }
  };

  const handleSaveDraft = () => {
    showToast('Draft saved successfully!', 'success');
  };

  const handleConvertToOrder = () => {
    showToast('Quotation converted to sales order!', 'success');
  };

  // Customer project handlers
  const handleCustomerSelect = (customer) => {
    handleInputChange('customerProject', customer);
    setShowCustomerDropdown(false);
    setCustomerSearch('');
  };

  const handleCustomerSearchChange = (e) => {
    const value = e.target.value;
    setCustomerSearch(value);
    handleInputChange('customerProject', value);
    
    if (value) {
      const filtered = customerOptions.filter(customer =>
        customer.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCustomers(filtered);
    } else {
      setFilteredCustomers(customerOptions);
    }
    setShowCustomerDropdown(true);
  };

  const handleAddNewCustomer = () => {
    setShowAddCustomer(true);
    setShowCustomerDropdown(false);
  };

  const handleSaveNewCustomer = (customerData) => {
    // Add the new customer to the options list
    customerOptions.push(customerData.companyName);
    // Set it as selected
    handleInputChange('customerProject', customerData.companyName);
    setShowAddCustomer(false);
    showToast('New customer added successfully!', 'success');
  };

  // Row actions handlers
  const handleMenuToggle = (index, event) => {
    event.stopPropagation();
    if (activeMenu === index) {
      setActiveMenu(null);
    } else {
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + 5,
        left: rect.left + (rect.width / 2) - 80
      });
      setActiveMenu(index);
    }
  };

  const handleInsertAbove = (index) => {
    const newItem = {
      id: Date.now(),
      item: '',
      quantity: 1,
      units: 'Pcs',
      description: '',
      priceLevel: 'Custom',
      rate: 0.00,
      amount: 0.00,
      taxCode: 'GST_SG:7%',
      taxRate: '7.0%',
      taxAmount: 0.00,
      grossAmount: 0.00
    };
    const newItems = [...items.slice(0, index), newItem, ...items.slice(index)];
    setItems(newItems);
  };

  const handleInsertBelow = (index) => {
    const newItem = {
      id: Date.now(),
      item: '',
      quantity: 1,
      units: 'Pcs',
      description: '',
      priceLevel: 'Custom',
      rate: 0.00,
      amount: 0.00,
      taxCode: 'GST_SG:7%',
      taxRate: '7.0%',
      taxAmount: 0.00,
      grossAmount: 0.00
    };
    const newItems = [...items.slice(0, index + 1), newItem, ...items.slice(index + 1)];
    setItems(newItems);
  };

  const handleDeleteRow = (index) => {
    if (window.confirm('Are you sure you want to delete this row?')) {
      setItems(items.filter((_, i) => i !== index));
      showToast('Row deleted successfully', 'success');
    }
  };

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setActiveMenu(null);
      if (showCustomerDropdown && !customerProjectHovered) {
        setShowCustomerDropdown(false);
      }
    };
    if (activeMenu !== null || showCustomerDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeMenu, showCustomerDropdown, customerProjectHovered]);

  // Item management functions
  const addItem = () => {
    const newItem = {
      id: Date.now(),
      item: '',
      quantity: 1,
      units: 'Pcs',
      description: '',
      priceLevel: 'Custom',
      rate: 0.00,
      amount: 0.00,
      taxCode: 'GST_SG:7%',
      taxRate: '7.0%',
      taxAmount: 0.00,
      grossAmount: 0.00
    };
    setItems([...items, newItem]);
  };

  const updateItem = (id, field, value) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        
        // Recalculate amount when quantity or rate changes
        if (field === 'quantity' || field === 'rate') {
          updatedItem.amount = updatedItem.quantity * updatedItem.rate;
        }
        
        // Update tax rate when tax code changes
        if (field === 'taxCode') {
          if (value === 'GST_SG:7%') {
            updatedItem.taxRate = '7.0%';
          } else if (value === 'GST_SG:9%') {
            updatedItem.taxRate = '9.0%';
          } else {
            updatedItem.taxRate = '0.0%';
          }
        }
        
        // Recalculate tax amount and gross amount
        const taxRateNum = parseFloat(updatedItem.taxRate) / 100 || 0;
        updatedItem.taxAmount = updatedItem.amount * taxRateNum;
        updatedItem.grossAmount = updatedItem.amount + updatedItem.taxAmount;
        
        return updatedItem;
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  // Calculate totals
  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + (item.amount || 0), 0);
  };

  const calculateTaxTotal = () => {
    return items.reduce((sum, item) => sum + ((item.amount || 0) * 0.07), 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTaxTotal();
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-invoice"></i>
          <div>
            <h1>Sales Quotation</h1>
            <div className="detail-subtitle">
              <span>New Sales Quotation</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary" onClick={handleSubmit}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn-toolbar" onClick={handleSaveDraft}>
          <i className="fas fa-copy"></i>
          Save Draft
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print
        </button>
        <button className="btn-toolbar" onClick={handleConvertToOrder}>
          <i className="fas fa-exchange-alt"></i>
          Convert to Order
        </button>
        <div className="toolbar-dropdown" style={{ marginLeft: 'auto' }}>
          <button className="btn-toolbar">
            <i className="fas fa-cog"></i>
            Actions
            <i className="fas fa-chevron-down" style={{ marginLeft: '0.5rem', fontSize: '0.7rem' }}></i>
          </button>
        </div>
      </div>

      <div className="detail-content">
        {/* Primary Information Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>CUSTOM FORM <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.customForm}
                  onChange={(e) => handleInputChange('customForm', e.target.value)}
                >
                  <option>TOM Supply Quotation</option>
                  <option>Standard Quotation</option>
                  <option>TOM Service Quotation</option>
                </select>
              </div>
              <div className="detail-field">
                <label>DATE <span className="required">*</span></label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>ESTIMATE #</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.estimateNumber}
                  placeholder="To Be Generated"
                  disabled
                />
              </div>
              <div className="detail-field">
                <label>STATUS <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.status}
                  onChange={(e) => handleInputChange('status', e.target.value)}
                >
                  <option>Proposal</option>
                  <option>Draft</option>
                  <option>Sent</option>
                  <option>Accepted</option>
                  <option>Expired</option>
                </select>
              </div>
              <div className="detail-field">
                <label>CUSTOMER:PROJECT <span className="required">*</span></label>
                <div 
                  className="field-with-external-add" 
                  onMouseEnter={() => setCustomerProjectHovered(true)}
                  onMouseLeave={() => setCustomerProjectHovered(false)}
                >
                  <div className="searchable-dropdown-with-add">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="<Type then tab>"
                      value={formData.customerProject}
                      onChange={handleCustomerSearchChange}
                      onFocus={() => {
                        setShowCustomerDropdown(true);
                        setFilteredCustomers(customerOptions);
                      }}
                    />
                    {showCustomerDropdown && (
                      <>
                        <div 
                          className="dropdown-overlay"
                          onClick={() => setShowCustomerDropdown(false)}
                        />
                        <div className="dropdown-options">
                          {(filteredCustomers.length > 0 ? filteredCustomers : customerOptions).map((customer, index) => (
                            <div
                              key={index}
                              className="dropdown-option"
                              onClick={() => handleCustomerSelect(customer)}
                            >
                              {customer}
                            </div>
                          ))}
                          {customerSearch && !customerOptions.some(c => c.toLowerCase() === customerSearch.toLowerCase()) && (
                            <div className="dropdown-option no-results">
                              No customers found
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                  {customerProjectHovered && (
                    <button 
                      type="button"
                      className="external-add-button"
                      onClick={handleAddNewCustomer}
                      title="Add new customer"
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  )}
                </div>
              </div>
              <div className="detail-field">
                <label>TITLE</label>
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="Enter quotation title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>EXP. CLOSE <span className="required">*</span></label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.expectedClose}
                  onChange={(e) => handleInputChange('expectedClose', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>EXPIRES</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.expires}
                  onChange={(e) => handleInputChange('expires', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>MEMO</label>
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="Enter memo"
                  value={formData.memo}
                  onChange={(e) => handleInputChange('memo', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sales Information Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Sales Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SALES REP</label>
                <select className="form-control">
                  <option>Select...</option>
                  <option>John Doe</option>
                  <option>Jane Smith</option>
                </select>
              </div>
              <div className="detail-field">
                <label>OPPORTUNITY</label>
                <select className="form-control">
                  <option>Select...</option>
                  <option>High Priority</option>
                  <option>Medium Priority</option>
                </select>
              </div>
              <div className="detail-field">
                <label>FORECAST TYPE</label>
                <select 
                  className="form-control"
                  value={formData.forecastType}
                  onChange={(e) => handleInputChange('forecastType', e.target.value)}
                >
                  <option>Omitted</option>
                  <option>Included</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Classification Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.subsidiary}
                  onChange={(e) => handleInputChange('subsidiary', e.target.value)}
                >
                  <option>Select...</option>
                  <option>Tech Onshore MEP Prefabricators Pte Ltd.</option>
                  <option>Tech Marine Offshore (S) Pte Ltd</option>
                  <option>TOM Offshore Marine Engineering Pte Ltd</option>
                </select>
              </div>
              <div className="detail-field">
                <label>CLASS</label>
                <select 
                  className="form-control"
                  value={formData.class}
                  onChange={(e) => handleInputChange('class', e.target.value)}
                >
                  <option>Select...</option>
                  <option>Consumable Item</option>
                  <option>Course</option>
                  <option>Electrical</option>
                  <option>Fabrication</option>
                </select>
              </div>
              <div className="detail-field">
                <label>LOCATION</label>
                <select 
                  className="form-control"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                >
                  <option>Select...</option>
                  <option>Hong Hang Shipyard</option>
                  <option>Mega yard</option>
                  <option>Singapore (MEP)</option>
                </select>
              </div>
              <div className="detail-field">
                <label>DEPARTMENT <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                >
                  <option>Select...</option>
                  <option>TOM: Engineering</option>
                  <option>TOM: Production</option>
                  <option>TOM: Sales and Marketing</option>
                </select>
              </div>
              <div className="detail-field">
                <label>TAXES AND DUTIES</label>
                <textarea 
                  className="form-control"
                  rows="3"
                  placeholder="Quotation does not include any applicable foreign taxes and overhead costs such as but not limited to foreign withholding tax, international tax..."
                  value={formData.taxesAndDuties}
                  onChange={(e) => handleInputChange('taxesAndDuties', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>VARIATION</label>
                <textarea 
                  className="form-control"
                  rows="3"
                  placeholder="Variation to this quotation applies to the scope of work as herein specified, any additional work or incurrence of any other costs not..."
                  value={formData.variation}
                  onChange={(e) => handleInputChange('variation', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>APPROVAL STATUS</label>
                <select 
                  className="form-control"
                  value={formData.approvalStatus}
                  onChange={(e) => handleInputChange('approvalStatus', e.target.value)}
                >
                  <option>Pending Approval</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                </select>
              </div>
              <div className="detail-field">
                <label>CONTACT PERSON</label>
                <select 
                  className="form-control"
                  value={formData.contactPerson}
                  onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                >
                  <option>Select...</option>
                  <option>John Smith</option>
                  <option>Jane Doe</option>
                </select>
              </div>
              <div className="detail-field">
                <label>HS CODE</label>
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="Enter HS code"
                  value={formData.hsCode}
                  onChange={(e) => handleInputChange('hsCode', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>COUNTRY OF ORIGIN</label>
                <select 
                  className="form-control"
                  value={formData.countryOfOrigin}
                  onChange={(e) => handleInputChange('countryOfOrigin', e.target.value)}
                >
                  <option>Select...</option>
                  <option>Singapore</option>
                  <option>Malaysia</option>
                  <option>China</option>
                  <option>India</option>
                  <option>Japan</option>
                  <option>South Korea</option>
                  <option>United States</option>
                  <option>Germany</option>
                  <option>United Kingdom</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Items Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Items</h3>
          </div>
          <div className="section-body">
            <div className="items-table-container">
              <table className="items-table">
                <thead>
                  <tr>
                    <th style={{ width: '12%' }}>ITEM</th>
                    <th style={{ width: '6%' }}>QTY</th>
                    <th style={{ width: '8%' }}>UNITS</th>
                    <th style={{ width: '20%' }}>DESCRIPTION</th>
                    <th style={{ width: '10%' }}>PRICE LEVEL</th>
                    <th style={{ width: '8%' }}>RATE</th>
                    <th style={{ width: '8%' }}>AMOUNT</th>
                    <th style={{ width: '10%' }}>TAX CODE</th>
                    <th style={{ width: '6%' }}>TAX RATE</th>
                    <th style={{ width: '6%' }}>TAX AMT</th>
                    <th style={{ width: '8%' }}>GROSS AMT</th>
                    <th style={{ width: '6%' }}>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr 
                      key={item.id}
                      className={`table-row-with-actions ${hoveredRow === index ? 'hovered' : ''}`}
                      onMouseEnter={() => setHoveredRow(index)}
                      onMouseLeave={() => setHoveredRow(null)}
                    >
                      <td>
                        <input 
                          type="text" 
                          className="form-control"
                          value={item.item}
                          onChange={(e) => updateItem(item.id, 'item', e.target.value)}
                          placeholder="Enter item"
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control"
                          value={item.quantity}
                          onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                          min="0"
                          step="0.01"
                        />
                      </td>
                      <td>
                        <select 
                          className="form-control"
                          value={item.units}
                          onChange={(e) => updateItem(item.id, 'units', e.target.value)}
                        >
                          <option>Kgs</option>
                          <option>Pcs</option>
                          <option>Meters</option>
                          <option>Hours</option>
                        </select>
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control"
                          value={item.description}
                          onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                          placeholder="Enter description"
                        />
                      </td>
                      <td>
                        <select 
                          className="form-control"
                          value={item.priceLevel}
                          onChange={(e) => updateItem(item.id, 'priceLevel', e.target.value)}
                        >
                          <option>Custom</option>
                          <option>Standard</option>
                          <option>Premium</option>
                        </select>
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control"
                          value={item.rate}
                          onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                          min="0"
                          step="0.01"
                        />
                      </td>
                      <td>
                        <strong>${(item.amount || 0).toFixed(2)}</strong>
                      </td>
                      <td>
                        <select 
                          className="form-control"
                          value={item.taxCode}
                          onChange={(e) => updateItem(item.id, 'taxCode', e.target.value)}
                        >
                          <option>GST_SG:7%</option>
                          <option>GST_SG:9%</option>
                          <option>No Tax</option>
                        </select>
                      </td>
                      <td>
                        <span>{item.taxRate || '7.0%'}</span>
                      </td>
                      <td>
                        <strong>${(item.taxAmount || 0).toFixed(2)}</strong>
                      </td>
                      <td>
                        <strong>${(item.grossAmount || 0).toFixed(2)}</strong>
                      </td>
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <button className="btn btn-primary" onClick={addItem}>
                <i className="fas fa-plus"></i>
                Add Item
              </button>
            </div>

            <div className="summary-grid">
              <div className="summary-card">
                <div className="summary-title">Subtotal</div>
                <div className="summary-value">${calculateSubtotal().toFixed(2)}</div>
              </div>
              <div className="summary-card">
                <div className="summary-title">Tax (7%)</div>
                <div className="summary-value">${calculateTaxTotal().toFixed(2)}</div>
              </div>
              <div className="summary-card">
                <div className="summary-title">Discount</div>
                <div className="summary-value">$0.00</div>
              </div>
              <div className="summary-card" style={{ background: 'var(--gray-ultralight)' }}>
                <div className="summary-title">Total Amount</div>
                <div className="summary-value" style={{ color: 'var(--red-primary)' }}>${calculateTotal().toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Customer Modal */}
      {showAddCustomer && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>
                <i className="fas fa-user-plus"></i>
                Add New Customer
              </h2>
              <button 
                className="modal-close"
                onClick={() => setShowAddCustomer(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="modal-body">
              <AddCustomerForm 
                onSave={handleSaveNewCustomer}
                onCancel={() => setShowAddCustomer(false)}
              />
            </div>
          </div>
        </div>
      )}
      
      <Toast 
        message={toast.message} 
        type={toast.type} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
    </div>
  );
};

// Add Customer Form Component
const AddCustomerForm = ({ onSave, onCancel }) => {
  const [customerData, setCustomerData] = useState({
    customerId: 'To Be Generated',
    type: 'COMPANY',
    companyName: '',
    parentCompany: '',
    salesRep: '',
    webAddress: '',
    category: '',
    defaultOrderPriority: '',
    email: '',
    phone: '',
    altPhone: '',
    fax: '',
    primarySubsidiary: '',
    transactionsNeedApproval: false,
    stopSendingSms: false,
    defaultDiscount: '',
    lastSalesActivity: ''
  });

  const handleInputChange = (field, value) => {
    setCustomerData({ ...customerData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customerData.companyName.trim()) {
      alert('Company Name is required');
      return;
    }
    onSave(customerData);
  };

  return (
    <form onSubmit={handleSubmit} className="add-customer-form">
      {/* Primary Information Section */}
      <div className="form-section">
        <div className="section-header">
          <i className="fas fa-chevron-down"></i>
          <h3>Primary Information</h3>
        </div>
        <div className="section-body">
          <div className="form-grid">
            <div className="form-group">
              <label>CUSTOMER ID <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={customerData.customerId}
                disabled
              />
              <div className="form-checkbox">
                <input type="checkbox" id="auto" defaultChecked />
                <label htmlFor="auto">AUTO</label>
              </div>
            </div>
            <div className="form-group">
              <label>TYPE</label>
              <div className="radio-group">
                <label>
                  <input 
                    type="radio" 
                    name="type" 
                    value="COMPANY"
                    checked={customerData.type === 'COMPANY'}
                    onChange={(e) => handleInputChange('type', e.target.value)}
                  />
                  COMPANY
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="type" 
                    value="INDIVIDUAL"
                    checked={customerData.type === 'INDIVIDUAL'}
                    onChange={(e) => handleInputChange('type', e.target.value)}
                  />
                  INDIVIDUAL
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>COMPANY NAME <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={customerData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                placeholder="Enter company name"
              />
            </div>
            <div className="form-group">
              <label>PARENT COMPANY</label>
              <select 
                className="form-control"
                value={customerData.parentCompany}
                onChange={(e) => handleInputChange('parentCompany', e.target.value)}
              >
                <option>&lt;Type then tab&gt;</option>
              </select>
            </div>
            <div className="form-group">
              <label>SALES REP</label>
              <select 
                className="form-control"
                value={customerData.salesRep}
                onChange={(e) => handleInputChange('salesRep', e.target.value)}
              >
                <option>Select...</option>
                <option>John Doe</option>
                <option>Jane Smith</option>
              </select>
            </div>
            <div className="form-group">
              <label>WEB ADDRESS</label>
              <input 
                type="url" 
                className="form-control"
                value={customerData.webAddress}
                onChange={(e) => handleInputChange('webAddress', e.target.value)}
                placeholder="https://"
              />
            </div>
            <div className="form-group">
              <label>CATEGORY</label>
              <select 
                className="form-control"
                value={customerData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
              >
                <option>Select...</option>
                <option>Premium</option>
                <option>Standard</option>
                <option>Basic</option>
              </select>
            </div>
            <div className="form-group">
              <label>DEFAULT ORDER PRIORITY</label>
              <select 
                className="form-control"
                value={customerData.defaultOrderPriority}
                onChange={(e) => handleInputChange('defaultOrderPriority', e.target.value)}
              >
                <option>Select...</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Email | Phone | Address Section */}
      <div className="form-section">
        <div className="section-header">
          <i className="fas fa-chevron-down"></i>
          <h3>Email | Phone | Address</h3>
        </div>
        <div className="section-body">
          <div className="form-grid">
            <div className="form-group">
              <label>EMAIL</label>
              <input 
                type="email" 
                className="form-control"
                value={customerData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter email address"
              />
            </div>
            <div className="form-group">
              <label>PHONE</label>
              <input 
                type="tel" 
                className="form-control"
                value={customerData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Enter phone number"
              />
            </div>
            <div className="form-group">
              <label>ALT. PHONE</label>
              <input 
                type="tel" 
                className="form-control"
                value={customerData.altPhone}
                onChange={(e) => handleInputChange('altPhone', e.target.value)}
                placeholder="Enter alternate phone"
              />
            </div>
            <div className="form-group">
              <label>FAX</label>
              <input 
                type="tel" 
                className="form-control"
                value={customerData.fax}
                onChange={(e) => handleInputChange('fax', e.target.value)}
                placeholder="Enter fax number"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Classification Section */}
      <div className="form-section">
        <div className="section-header">
          <i className="fas fa-chevron-down"></i>
          <h3>Classification</h3>
        </div>
        <div className="section-body">
          <div className="form-grid">
            <div className="form-group">
              <label>PRIMARY SUBSIDIARY <span className="required">*</span></label>
              <select 
                className="form-control"
                value={customerData.primarySubsidiary}
                onChange={(e) => handleInputChange('primarySubsidiary', e.target.value)}
              >
                <option>Select...</option>
                <option>Tech Onshore MEP Prefabricators Pte Ltd</option>
                <option>Tech Marine Offshore (S) Pte Ltd</option>
                <option>TOM Offshore Marine Engineering Pte Ltd</option>
              </select>
            </div>
            <div className="form-group">
              <div className="form-checkbox">
                <input 
                  type="checkbox" 
                  id="transactionsApproval"
                  checked={customerData.transactionsNeedApproval}
                  onChange={(e) => handleInputChange('transactionsNeedApproval', e.target.checked)}
                />
                <label htmlFor="transactionsApproval">TRANSACTIONS NEED APPROVAL</label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-checkbox">
                <input 
                  type="checkbox" 
                  id="stopSms"
                  checked={customerData.stopSendingSms}
                  onChange={(e) => handleInputChange('stopSendingSms', e.target.checked)}
                />
                <label htmlFor="stopSms">STOP SENDING SMS</label>
              </div>
            </div>
            <div className="form-group">
              <label>DEFAULT DISCOUNT</label>
              <select 
                className="form-control"
                value={customerData.defaultDiscount}
                onChange={(e) => handleInputChange('defaultDiscount', e.target.value)}
              >
                <option>Select...</option>
                <option>5%</option>
                <option>10%</option>
                <option>15%</option>
              </select>
            </div>
            <div className="form-group">
              <label>LAST SALES ACTIVITY</label>
              <input 
                type="date" 
                className="form-control"
                value={customerData.lastSalesActivity}
                onChange={(e) => handleInputChange('lastSalesActivity', e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          <i className="fas fa-save"></i>
          Save
        </button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Quotation;
