import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EnterCashSales = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState('items');

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
  
  const [formData, setFormData] = useState({
    customForm: 'TOM Cash Sale',
    saleNumber: 'To Be Generated',
    endDate: '',
    customerProject: '',
    postingPeriod: 'Nov 2025',
    date: '2025-11-06',
    checkNumber: '',
    startDate: '',
    memo: '',
    salesRep: '',
    opportunity: '',
    salesEffectiveDate: '',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    class: '',
    location: '',
    department: 'MEP',
    countryOfOrigin: '',
    hsCode: '',
    contactPerson: '',
    items: [],
    
    // Shipping Information
    shippingCarrier: 'None',
    shippingAddress: '',
    
    // Billing Information
    billToSelect: 'Maersk Oil',
    billingAddress: '',
    refBankPrint: '',
    paymentMethod: '',
    
    // Accounting
    undepositedFunds: true,
    account: '',
    currency: 'SGD',
    exchangeRate: '1.00',
    extendedCost: '0.00',
    grossProfit: '0.00',
    taxId: '',
    grossProfitPercent: '',
    
    // Relationships
    contacts: [],
    
    // Communication
    toBePrinted: false,
    toBeEmailed: false,
    toBeFaxed: false,
    selectMessage: '',
    customerMessage: '',
    
    // System Information
    refCustomer: '',
    
    // Custom
    testTransactionField: '',
    gstType: ''
  });

  // Customer options for dropdown
  const customerOptions = [
    '612 Raise Pte Ltd',
    'ABC Corporation',
    'XYZ Industries',
    'Tech Marine Solutions',
    'Pacific Shipping Ltd',
    'Oceanic Engineering Pte Ltd',
    'Marine Construction Co'
  ];

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

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    showToast('Cash sale saved successfully!', 'success');
    setIsSaved(true);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Cash sale cancelled', 'info');
    }
  };

  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      item: '',
      quantity: 0,
      units: 'Pcs',
      description: '',
      priceLevel: 'Custom',
      rate: 0.00,
      amount: 0.00,
      taxCode: 'GST_SG-9%',
      grossAmount: 0.00,
      class: '',
      costEstimateType: 'Fixed',
      estimatedExtendedCost: 0.00
    };
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };

  const handleInsertAbove = (index) => {
    const newItem = {
      id: Date.now(),
      item: '',
      quantity: 0,
      units: 'Pcs',
      description: '',
      priceLevel: 'Custom',
      rate: 0.00,
      amount: 0.00,
      taxCode: 'GST_SG-9%',
      grossAmount: 0.00,
      class: '',
      costEstimateType: 'Fixed',
      estimatedExtendedCost: 0.00
    };
    setFormData(prev => ({
      ...prev,
      items: [...prev.items.slice(0, index), newItem, ...prev.items.slice(index)]
    }));
  };

  const handleInsertBelow = (index) => {
    const newItem = {
      id: Date.now(),
      item: '',
      quantity: 0,
      units: 'Pcs',
      description: '',
      priceLevel: 'Custom',
      rate: 0.00,
      amount: 0.00,
      taxCode: 'GST_SG-9%',
      grossAmount: 0.00,
      class: '',
      costEstimateType: 'Fixed',
      estimatedExtendedCost: 0.00
    };
    setFormData(prev => ({
      ...prev,
      items: [...prev.items.slice(0, index + 1), newItem, ...prev.items.slice(index + 1)]
    }));
  };

  const handleDeleteRow = (index) => {
    if (window.confirm('Are you sure you want to delete this row?')) {
      setFormData(prev => ({
        ...prev,
        items: prev.items.filter((_, i) => i !== index)
      }));
      showToast('Row deleted successfully', 'success');
    }
  };

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

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setActiveMenu(null);
    };
    if (activeMenu !== null) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeMenu]);

  // Calculation functions
  const calculateSubtotal = () => {
    return formData.items.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
  };

  const calculateTaxAmount = () => {
    return formData.items.reduce((sum, item) => {
      const amount = parseFloat(item.amount) || 0;
      const taxRate = 9.0; // 9% GST
      return sum + (amount * taxRate / 100);
    }, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTaxAmount();
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-cash-register" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <div>
            <h1>Cash Sale</h1>
            <div className="detail-subtitle">
              <span># To be generated – New Cash Sale</span>
            </div>
          </div>
        </div>
        <div className="page-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-secondary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          {isSaved && (
            <>
              <button className="btn btn-secondary">
                Auto Fill
              </button>
              <button className="btn btn-secondary">
                Actions
              </button>
            </>
          )}
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-info-circle"></i>
            Primary Information
          </h2>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label required">Custom Form</label>
              <select 
                className="form-control"
                value={formData.customForm}
                onChange={(e) => handleInputChange('customForm', e.target.value)}
              >
                <option>TOM Cash Sale</option>
                <option>Standard Cash Sale</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">End Date</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.endDate}
                onChange={(e) => handleInputChange('endDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Sale #</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.saleNumber}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label required">Posting Period</label>
              <select 
                className="form-control"
                value={formData.postingPeriod}
                onChange={(e) => handleInputChange('postingPeriod', e.target.value)}
              >
                <option>Nov 2025</option>
                <option>Dec 2025</option>
                <option>Jan 2026</option>
              </select>
            </div>
            <div className="form-group" style={{ position: 'relative' }}>
              <label className="form-label required">Customer:Project</label>
              <div 
                style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
                onMouseEnter={() => setCustomerProjectHovered(true)}
                onMouseLeave={() => setCustomerProjectHovered(false)}
              >
                <div style={{ position: 'relative', flex: 1 }}>
                  <input 
                    type="text"
                    className="form-control"
                    value={formData.customerProject}
                    onChange={(e) => {
                      const value = e.target.value;
                      handleInputChange('customerProject', value);
                      setCustomerSearch(value);
                      if (value.trim()) {
                        const filtered = customerOptions.filter(customer =>
                          customer.toLowerCase().includes(value.toLowerCase())
                        );
                        setFilteredCustomers(filtered);
                      } else {
                        setFilteredCustomers(customerOptions);
                      }
                      setShowCustomerDropdown(true);
                    }}
                    onFocus={() => {
                      setShowCustomerDropdown(true);
                      setFilteredCustomers(customerOptions);
                    }}
                    placeholder="<Type then tab>"
                  />
                  <button 
                    type="button"
                    style={{ 
                      position: 'absolute', 
                      right: '8px', 
                      top: '50%', 
                      transform: 'translateY(-50%)', 
                      background: 'transparent', 
                      border: 'none', 
                      cursor: 'pointer', 
                      padding: '4px 8px',
                      fontSize: '14px'
                    }}
                    onClick={() => {
                      setShowCustomerDropdown(!showCustomerDropdown);
                    }}
                  >
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  {showCustomerDropdown && (
                    <>
                      <div 
                        style={{ 
                          position: 'fixed', 
                          top: 0, 
                          left: 0, 
                          right: 0, 
                          bottom: 0, 
                          zIndex: 999 
                        }}
                        onClick={() => setShowCustomerDropdown(false)}
                      />
                      <div style={{ 
                        position: 'absolute', 
                        top: '100%', 
                        left: 0, 
                        right: 0, 
                        background: 'white', 
                        border: '1px solid #ddd', 
                        borderRadius: '4px', 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)', 
                        zIndex: 1000, 
                        marginTop: '4px',
                        overflowY: 'auto',
                        maxHeight: '200px'
                      }}>
                        {(filteredCustomers.length > 0 ? filteredCustomers : customerOptions).map((customer, idx) => (
                          <div 
                            key={idx}
                            onClick={() => {
                              handleInputChange('customerProject', customer);
                              setShowCustomerDropdown(false);
                              setCustomerSearch('');
                            }}
                            style={{ 
                              padding: '10px 12px', 
                              cursor: 'pointer', 
                              fontSize: '13px',
                              borderBottom: '1px solid #f5f5f5'
                            }}
                            onMouseEnter={(e) => e.target.style.background = '#f8f9fa'}
                            onMouseLeave={(e) => e.target.style.background = 'transparent'}
                          >
                            {customer}
                          </div>
                        ))}
                        {filteredCustomers.length === 0 && customerSearch && (
                          <div style={{ padding: '20px', textAlign: 'center', color: '#999', fontSize: '13px' }}>
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
                    className="btn btn-secondary"
                    style={{ 
                      padding: '0.5rem', 
                      minWidth: 'auto',
                      transition: 'opacity 0.2s'
                    }}
                    onClick={handleAddNewCustomer}
                    title="Add new customer"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                )}
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Check #</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.checkNumber}
                onChange={(e) => handleInputChange('checkNumber', e.target.value)}
                placeholder="Enter check number"
              />
            </div>
            <div className="form-group">
              <label className="form-label required">Date</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Start Date</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.startDate}
                onChange={(e) => handleInputChange('startDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Memo</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.memo}
                onChange={(e) => handleInputChange('memo', e.target.value)}
                placeholder="Enter memo"
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Sales Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-chart-line"></i>
            Sales Information
          </h2>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Sales Rep</label>
              <select 
                className="form-control"
                value={formData.salesRep}
                onChange={(e) => handleInputChange('salesRep', e.target.value)}
              >
                <option value="">Select...</option>
                <option>John Anderson</option>
                <option>Sarah Chen</option>
                <option>Michael Wong</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Opportunity</label>
              <select 
                className="form-control"
                value={formData.opportunity}
                onChange={(e) => handleInputChange('opportunity', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Q4 Marine Project</option>
                <option>Offshore Expansion</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Sales Effective Date</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.salesEffectiveDate}
                onChange={(e) => handleInputChange('salesEffectiveDate', e.target.value)}
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Classification */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-tags"></i>
            Classification
          </h2>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label required">Subsidiary</label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleInputChange('subsidiary', e.target.value)}
              >
                <option value="">Select...</option>
                <option value="TOM S">Tech Offshore Marine (S) Pte Ltd - "TOM S" (ROC 200709673M)</option>
                <option value="DQ">Tech Offshore Marine (DQ) Pte Ltd - "DQ" (ROC 200704907R)</option>
                <option value="TEA">Tech Electric & Automation Pte Ltd - "TEA" (ROC 198700264M)</option>
                <option value="TMO">Tech Marine Offshore (S) Pte Ltd - "TMO" (ROC 200512260M)</option>
                <option value="SV">Tech Offshore Marine (SV) Pte Ltd - "SV" (ROC 200608955Z)</option>
                <option value="TOM">Tech Onshore MEP Prefabricators Pte Ltd - "TOM" (ROC 199507962E)</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Class</label>
              <select 
                className="form-control"
                value={formData.class}
                onChange={(e) => handleInputChange('class', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Consumable Item</option>
                <option>Course</option>
                <option>Cutting Works</option>
                <option>Electrical</option>
                <option>Fabrication</option>
                <option>Hydrotesting</option>
                <option>Installation work</option>
                <option>Manpower Supply</option>
                <option>Material Supply</option>
                <option>Module /Prefab</option>
                <option>Piping</option>
                <option>Project Works</option>
                <option>Refurbishment works</option>
                <option>Rental</option>
                <option>Repair & Referable</option>
                <option>Sale of Scrap Metal</option>
                <option>Structure</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label required">Location</label>
              <select 
                className="form-control"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Singapore Yard</option>
                <option>Johor Facility</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label required">Department</label>
              <select 
                className="form-control"
                value={formData.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
              >
                <option>MEP</option>
                <option>Engineering</option>
                <option>Operations</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Country of Origin</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.countryOfOrigin}
                onChange={(e) => handleInputChange('countryOfOrigin', e.target.value)}
                placeholder="Enter country of origin"
              />
            </div>
            <div className="form-group">
              <label className="form-label">HS Code</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.hsCode}
                onChange={(e) => handleInputChange('hsCode', e.target.value)}
                placeholder="Enter HS code"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Contact Person</label>
              <select 
                className="form-control"
                value={formData.contactPerson}
                onChange={(e) => handleInputChange('contactPerson', e.target.value)}
              >
                <option value="">Select...</option>
                <option>John Smith</option>
                <option>Jane Doe</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tabbed Interface */}
        <div className="detail-tabs" style={{ marginTop: '2rem' }}>
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'items' ? 'active' : ''}`} onClick={() => setActiveTab('items')}>Items</button>
            <button className={`tab-btn ${activeTab === 'shipping' ? 'active' : ''}`} onClick={() => setActiveTab('shipping')}>Shipping</button>
            <button className={`tab-btn ${activeTab === 'billing' ? 'active' : ''}`} onClick={() => setActiveTab('billing')}>Billing</button>
            <button className={`tab-btn ${activeTab === 'accounting' ? 'active' : ''}`} onClick={() => setActiveTab('accounting')}>Accounting</button>
            <button className={`tab-btn ${activeTab === 'relationships' ? 'active' : ''}`} onClick={() => setActiveTab('relationships')}>Relationships</button>
            <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>Communication</button>
            <button className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`} onClick={() => setActiveTab('system')}>System Information</button>
            <button className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`} onClick={() => setActiveTab('custom')}>Custom</button>
          </div>

          <div className="tabs-content">
            {/* Items Tab */}
            {activeTab === 'items' && (
              <div className="form-section">
                <h2 className="section-title">
                  <i className="fas fa-boxes"></i>
                  Items
                </h2>
                
                <button className="add-item-btn" onClick={handleAddItem}>
                  <i className="fas fa-plus"></i>
                  Add Item
                </button>
          {formData.items.length > 0 ? (
            <div className="items-table-wrapper">
              <table className="detail-items-table">
                <thead>
                  <tr>
                    <th style={{ width: '30px' }}></th>
                    <th style={{minWidth: '200px'}}>ITEM</th>
                    <th style={{minWidth: '100px'}}>QTY</th>
                    <th style={{minWidth: '120px'}}>UNITS</th>
                    <th style={{minWidth: '250px'}}>DESC</th>
                    <th style={{minWidth: '150px'}}>PRICE LEVEL</th>
                    <th style={{minWidth: '120px'}}>RATE</th>
                    <th style={{minWidth: '120px'}}>AMT</th>
                    <th style={{minWidth: '150px'}}>TAX CODE</th>
                    <th style={{minWidth: '120px'}}>GROSS AMT</th>
                    <th style={{minWidth: '180px'}}>CLASS</th>
                    <th style={{minWidth: '180px'}}>COST ESTIMATE TYPE</th>
                    <th style={{minWidth: '180px'}}>EST. EXTENDED COST</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.items.map((item, index) => (
                    <tr 
                      key={item.id}
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
                      <td><input type="text" className="table-input" defaultValue={item.item} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.quantity} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.units} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.description} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.priceLevel} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.rate} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.amount} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.taxCode} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.grossAmount} style={{width: '100%'}} /></td>
                      <td>
                        <select className="table-input" defaultValue={item.class} style={{width: '100%'}}>
                          <option value="">Select...</option>
                          <option>Consumable Item</option>
                          <option>Course</option>
                          <option>Cutting Works</option>
                          <option>Electrical</option>
                          <option>Fabrication</option>
                          <option>Hydrotesting</option>
                          <option>Installation work</option>
                          <option>Manpower Supply</option>
                          <option>Material Supply</option>
                          <option>Module /Prefab</option>
                          <option>Piping</option>
                          <option>Project Works</option>
                          <option>Refurbishment works</option>
                          <option>Rental</option>
                          <option>Repair & Referable</option>
                          <option>Sale of Scrap Metal</option>
                          <option>Structure</option>
                        </select>
                      </td>
                      <td>
                        <select className="table-input" defaultValue={item.costEstimateType} style={{width: '100%'}}>
                          <option>Fixed</option>
                          <option>Variable</option>
                          <option>Estimated</option>
                        </select>
                      </td>
                      <td><input type="number" className="table-input" defaultValue={item.estimatedExtendedCost} style={{width: '100%'}} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-items-message">
              <p>No items added yet. Click "Add Item" to start adding items to this cash sale.</p>
            </div>
          )}

          {/* Summary Grid */}
          {formData.items.length > 0 && (
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
              <div className="summary-card" style={{ background: 'var(--gray-ultralight)' }}>
                <div className="summary-title">TOTAL AMOUNT</div>
                <div className="summary-value" style={{ color: 'var(--red-primary)' }}>${calculateTotal().toFixed(2)}</div>
              </div>
            </div>
          )}
              </div>
            )}

            {/* Shipping Tab */}
            {activeTab === 'shipping' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Shipping Information</h3>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '600px' }}>
                  <div className="form-group">
                    <label className="form-label">SHIPPING CARRIER</label>
                    <select className="form-control" value={formData.shippingCarrier} onChange={(e) => handleInputChange('shippingCarrier', e.target.value)}>
                      <option>None</option>
                      <option>UPS</option>
                      <option>More</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Billing Address</h3>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '600px' }}>
                  <div className="form-group">
                    <label className="form-label">BILL TO SELECT</label>
                    <select className="form-control" value={formData.billToSelect} onChange={(e) => handleInputChange('billToSelect', e.target.value)}>
                      <option>Maersk Oil</option>
                      <option>- Custom -</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">BILL TO</label>
                    <textarea className="form-control" rows="4" value={formData.billingAddress} onChange={(e) => handleInputChange('billingAddress', e.target.value)} placeholder="Enter billing address" />
                  </div>
                  <div><a href="#" style={{ color: '#4a90e2', fontSize: '0.875rem', textDecoration: 'none' }}>🗺 Map</a></div>
                  <div className="form-group">
                    <label className="form-label">REF BANK PRINT</label>
                    <select className="form-control" value={formData.refBankPrint} onChange={(e) => handleInputChange('refBankPrint', e.target.value)}>
                      <option value="">Select...</option>
                      <option>- New -</option>
                      <option>Tech Electric & Automation Pte Ltd,(DBS)</option>
                      <option>Tech Marine Offshore(s) DBS</option>
                      <option>Tech Offshore Marine (DQ) -DBS</option>
                      <option>Tech Offshore Marine (s)(DBS)</option>
                      <option>TOM MEP OCBC</option>
                      <option>TOM(S) DBS BANK SGD</option>
                    </select>
                  </div>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Payment *</h4>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '600px' }}>
                  <div className="form-group">
                    <label className="form-label">PAYMENT METHOD</label>
                    <select className="form-control" value={formData.paymentMethod} onChange={(e) => handleInputChange('paymentMethod', e.target.value)}>
                      <option value="">Select...</option>
                      <option>Cash</option>
                      <option>Check</option>
                      <option>Credit Card</option>
                      <option>Bank Transfer</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Accounting Tab */}
            {activeTab === 'accounting' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Account Information</h3>
                <div className="form-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                  <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="radio" checked={formData.undepositedFunds} onChange={(e) => handleInputChange('undepositedFunds', e.target.checked)} style={{ width: '18px', height: '18px' }} />
                    <label style={{ fontWeight: '600', fontSize: '0.875rem', margin: 0 }}>UNDEPOSITED FUNDS</label>
                  </div>
                  <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="radio" checked={!formData.undepositedFunds} onChange={(e) => handleInputChange('undepositedFunds', !e.target.checked)} style={{ width: '18px', height: '18px' }} />
                    <label style={{ fontWeight: '600', fontSize: '0.875rem', margin: 0 }}>ACCOUNT</label>
                  </div>
                  <div className="form-group">
                    <label className="form-label">CURRENCY <span className="required">*</span></label>
                    <select className="form-control" value={formData.currency} onChange={(e) => handleInputChange('currency', e.target.value)}>
                      <option>SGD</option>
                      <option>USD</option>
                      <option>EUR</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">EXCHANGE RATE <span className="required">*</span></label>
                    <input type="text" className="form-control" value={formData.exchangeRate} onChange={(e) => handleInputChange('exchangeRate', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">EST. EXTENDED COST</label>
                    <input type="text" className="form-control" value={formData.extendedCost} readOnly style={{ backgroundColor: '#f5f5f5' }} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">EST. GROSS PROFIT</label>
                    <input type="text" className="form-control" value={formData.grossProfit} readOnly style={{ backgroundColor: '#f5f5f5' }} />
                  </div>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Tax Information</h3>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                  <div className="form-group">
                    <label className="form-label">TAX ID</label>
                    <input type="text" className="form-control" value={formData.taxId} onChange={(e) => handleInputChange('taxId', e.target.value)} placeholder="Enter tax ID" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">EST. GROSS PROFIT PERCENT</label>
                    <input type="text" className="form-control" value={formData.grossProfitPercent} readOnly style={{ backgroundColor: '#f5f5f5' }} />
                  </div>
                </div>
              </div>
            )}

            {/* Relationships Tab */}
            {activeTab === 'relationships' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Contacts</h3>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Remove all</button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Clear All Lines</button>
                </div>
                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th style={{width: '25%'}}>CONTACT <span className="required">*</span></th>
                        <th style={{width: '20%'}}>JOB TITLE</th>
                        <th style={{width: '20%'}}>EMAIL</th>
                        <th style={{width: '15%'}}>MAIN PHONE</th>
                        <th style={{width: '15%'}}>SUBSIDIARY <span className="required">*</span></th>
                        <th style={{width: '5%'}}>ROLE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><input type="text" className="table-input" placeholder="Type to search" style={{width: '100%'}} /></td>
                        <td><input type="text" className="table-input" style={{width: '100%'}} /></td>
                        <td><input type="text" className="table-input" style={{width: '100%'}} /></td>
                        <td><input type="text" className="table-input" style={{width: '100%'}} /></td>
                        <td><input type="text" className="table-input" style={{width: '100%'}} /></td>
                        <td><input type="text" className="table-input" style={{width: '100%'}} /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-primary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}><i className="fas fa-check"></i> Add</button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}><i className="fas fa-times"></i> Cancel</button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Insert</button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Remove</button>
                </div>
              </div>
            )}

            {/* Communication Tab */}
            {activeTab === 'communication' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Messages <span className="required">*</span></h3>
                <div style={{ borderBottom: '2px solid #e0e0e0', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0' }}>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: '#fff', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.875rem', cursor: 'pointer' }}>Events</button>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.875rem', cursor: 'pointer' }}>Tasks</button>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.875rem', cursor: 'pointer' }}>Phone Calls</button>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.875rem', cursor: 'pointer' }}>Files</button>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', fontSize: '0.875rem', cursor: 'pointer' }}>User Notes</button>
                  </div>
                </div>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <div className="form-group">
                      <label className="form-label">TO BE PRINTED</label>
                      <input type="checkbox" checked={formData.toBePrinted} onChange={(e) => handleInputChange('toBePrinted', e.target.checked)} style={{ width: '18px', height: '18px' }} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">TO BE E-MAILED</label>
                      <input type="checkbox" checked={formData.toBeEmailed} onChange={(e) => handleInputChange('toBeEmailed', e.target.checked)} style={{ width: '18px', height: '18px' }} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">TO BE FAXED</label>
                      <input type="checkbox" checked={formData.toBeFaxed} onChange={(e) => handleInputChange('toBeFaxed', e.target.checked)} style={{ width: '18px', height: '18px' }} />
                    </div>
                  </div>
                  <div>
                    <div className="form-group">
                      <label className="form-label">SELECT MESSAGE</label>
                      <select className="form-control" value={formData.selectMessage} onChange={(e) => handleInputChange('selectMessage', e.target.value)}>
                        <option value=""></option>
                        <option>All work is complete!</option>
                        <option>It's been a pleasure working with you!</option>
                        <option>Please remit to above address.</option>
                        <option>Thank you for your business.</option>
                        <option>We appreciate your prompt payment.</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">CUSTOMER MESSAGE</label>
                      <textarea className="form-control" rows="6" value={formData.customerMessage} onChange={(e) => handleInputChange('customerMessage', e.target.value)} placeholder="Enter customer message" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* System Information Tab */}
            {activeTab === 'system' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>System Information</h3>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '600px' }}>
                  <div className="form-group">
                    <label className="form-label">REF CUSTOMER</label>
                    <div style={{ position: 'relative' }}>
                      <input type="text" className="form-control" value={formData.refCustomer} onChange={(e) => handleInputChange('refCustomer', e.target.value)} placeholder="< Type then tab >" />
                      <div style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: '0.25rem' }}>
                        <button style={{ background: 'none', border: 'none', padding: '0.25rem', cursor: 'pointer', fontSize: '0.875rem' }}>📋 List</button>
                        <button style={{ background: 'none', border: 'none', padding: '0.25rem', cursor: 'pointer', fontSize: '0.875rem' }}>🔍 Search</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Custom Tab */}
            {activeTab === 'custom' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Custom Fields</h3>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '600px' }}>
                  <div className="form-group">
                    <label className="form-label">TEST TRANSACTION FIELD</label>
                    <input type="text" className="form-control" value={formData.testTransactionField} onChange={(e) => handleInputChange('testTransactionField', e.target.value)} placeholder="Enter test transaction field" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">GST TYPE</label>
                    <input type="text" className="form-control" value={formData.gstType} onChange={(e) => handleInputChange('gstType', e.target.value)} placeholder="Enter GST type" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-secondary" onClick={handleSave}>
              <i className="fas fa-save"></i>
              Save
            </button>
            <button className="btn btn-secondary">
              Auto Fill
            </button>
            <button className="btn btn-secondary">
              Actions
            </button>
          </div>
        </div>
      </div>

      {/* Add Customer Modal */}
      {showAddCustomer && (
        <div className="modal-overlay" onClick={() => setShowAddCustomer(false)}>
          <div className="modal-content" style={{ maxWidth: '600px', width: '90%', maxHeight: '85vh', overflow: 'auto' }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-header" style={{ padding: '1.5rem 2rem', borderBottom: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '600', color: '#333' }}>Add New Customer</h2>
              <button className="modal-close-btn" onClick={() => setShowAddCustomer(false)} style={{ background: 'none', border: 'none', fontSize: '1.75rem', cursor: 'pointer', color: '#666', padding: '0', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                ×
              </button>
            </div>
            
            <div className="modal-body" style={{ padding: '2rem' }}>
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
              <input 
                type="text" 
                className="form-control"
                value={customerData.parentCompany}
                onChange={(e) => handleInputChange('parentCompany', e.target.value)}
                placeholder="Enter parent company"
              />
            </div>
            <div className="form-group">
              <label>SALES REP</label>
              <select 
                className="form-control"
                value={customerData.salesRep}
                onChange={(e) => handleInputChange('salesRep', e.target.value)}
              >
                <option value="">Select...</option>
                <option>TEA0021 Subbiah</option>
                <option>TEA0022 John Tan</option>
                <option>TEA0023 Mary Lim</option>
              </select>
            </div>
            <div className="form-group">
              <label>WEB ADDRESS</label>
              <input 
                type="text" 
                className="form-control"
                value={customerData.webAddress}
                onChange={(e) => handleInputChange('webAddress', e.target.value)}
                placeholder="Enter web address"
              />
            </div>
            <div className="form-group">
              <label>CATEGORY</label>
              <select 
                className="form-control"
                value={customerData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Customer</option>
                <option>Vendor</option>
                <option>Partner</option>
              </select>
            </div>
            <div className="form-group">
              <label>DEFAULT ORDER PRIORITY</label>
              <input 
                type="text" 
                className="form-control"
                value={customerData.defaultOrderPriority}
                onChange={(e) => handleInputChange('defaultOrderPriority', e.target.value)}
                placeholder="Enter priority"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Email | Phone | Address */}
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

      {/* Classification */}
      <div className="form-section">
        <div className="section-header">
          <i className="fas fa-chevron-down"></i>
          <h3>Classification</h3>
        </div>
        <div className="section-body">
          <div className="form-grid">
            <div className="form-group">
              <label>PRIMARY SUBSIDIARY</label>
              <select 
                className="form-control"
                value={customerData.primarySubsidiary}
                onChange={(e) => handleInputChange('primarySubsidiary', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Tech Onshore MEP Prefabricators Pte Ltd</option>
                <option>Tech Marine Offshore (S) Pte Ltd</option>
              </select>
            </div>
            <div className="form-group">
              <label>TRANSACTIONS NEED APPROVAL</label>
              <input 
                type="checkbox" 
                checked={customerData.transactionsNeedApproval}
                onChange={(e) => handleInputChange('transactionsNeedApproval', e.target.checked)}
              />
            </div>
            <div className="form-group">
              <label>DEFAULT DISCOUNT %</label>
              <select 
                className="form-control"
                value={customerData.defaultDiscount}
                onChange={(e) => handleInputChange('defaultDiscount', e.target.value)}
              >
                <option value="">Select...</option>
                <option>0%</option>
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
      <div className="modal-footer" style={{ padding: '1.5rem 2rem', borderTop: '1px solid #e0e0e0', display: 'flex', gap: '1rem', justifyContent: 'flex-end', background: '#f8f9fa', marginTop: '2rem' }}>
        <button type="button" className="btn btn-secondary" onClick={onCancel} style={{ padding: '0.65rem 1.5rem', fontSize: '0.875rem' }}>
          Cancel
        </button>
        <button type="submit" className="btn-new-transaction" style={{ padding: '0.65rem 1.5rem', fontSize: '0.875rem' }}>
          <i className="fas fa-save"></i>
          Save
        </button>
      </div>
    </form>
  );
};

export default EnterCashSales;
