import React, { useState, useEffect } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditCustomDeliveryOrder = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  
  // Dropdown states
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);
  const [projectSearch, setProjectSearch] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [showRequestedByDropdown, setShowRequestedByDropdown] = useState(false);
  const [requestedBySearch, setRequestedBySearch] = useState('');
  const [filteredRequestedBy, setFilteredRequestedBy] = useState([]);
  const [showVendorDropdown, setShowVendorDropdown] = useState(false);
  const [vendorSearch, setVendorSearch] = useState('');
  const [filteredVendors, setFilteredVendors] = useState([]);

  // Form state - Pre-filled with existing data
  const [formData, setFormData] = useState({
    documentNo: 'DOCTOM00145',
    vendor: 'ABC Manufacturing Ltd',
    poNumber: 'PO-2024-001',
    shipDate: '2024-07-01',
    location: 'Singapore (MEP)',
    warehouse: 'MEP Main Warehouse',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    department: 'TOM: Logistic',
    class: 'Material Supply',
    referenceNo: 'REF-2024-001',
    project: 'Marine Equipment Supply - Q1 2024',
    requestedBy: 'MEP01 001 JEGANATHAN SUNDARAVELU',
    shippingAddress: '2 Boon Leat Terrace, #08-02\nHarbourside Building 2, Singapore\n119844.',
    status: 'Delivered',
    memo: 'Urgent delivery for marine project',
    items: [
      {
        id: 1,
        item: '12" Divider',
        description: '12" Divider',
        quantity: 100,
        units: 'Pcs',
        priceLevel: '',
        rate: 25.50,
        amount: 2550.00,
        taxCode: '',
        grossAmount: 2550.00,
        class: '',
        costEstimateType: 'Fixed',
        estimatedExtendedCost: 0,
        countryOfOrigin: '',
        hsCode: ''
      },
      {
        id: 2,
        item: '110 V Female Connector',
        description: '110 V Female Connector',
        quantity: 200,
        units: 'Pcs',
        priceLevel: '',
        rate: 15.00,
        amount: 3000.00,
        taxCode: '',
        grossAmount: 3000.00,
        class: '',
        costEstimateType: 'Fixed',
        estimatedExtendedCost: 0,
        countryOfOrigin: '',
        hsCode: ''
      }
    ]
  });

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'Tech Marine Offshore (S) Pte Ltd',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];

  const departments = [
    'TOM: Human Resource',
    'TOM: Finance: Internal Transfer',
    'TOM: IT',
    'TOM: Logistic',
    'TOM: Operating',
    'TOM: Purchase',
    'TOM: Sales and Marketing',
    'TOM: Security'
  ];

  const classes = [
    'Consumable Item',
    'Electrical',
    'Fabrication',
    'Installation work',
    'Manpower Supply',
    'Material Supply',
    'Module /Prefab',
    'Piping',
    'Project Works',
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

  const shipMethods = [
    'DHL Express',
    'FedEx International',
    'UPS Worldwide',
    'Singapore Post',
    'Own Transport',
    'Customer Pickup'
  ];

  const termsOptions = [
    'FOB (Free On Board)',
    'CIF (Cost, Insurance and Freight)',
    'EXW (Ex Works)',
    'DDP (Delivered Duty Paid)',
    'DAP (Delivered At Place)'
  ];

  const vendorOptions = [
    'ABC Manufacturing Ltd',
    'Global Supplies Inc',
    'Marine Parts Supplier',
    'Tech Equipment Co',
    'Industrial Solutions Pte Ltd'
  ];

  const projectOptions = [
    'Marine Equipment Supply - Q1 2024',
    'Offshore Platform Parts Delivery',
    'Fabrication Services Contract',
    'Ship Repair Project 2024',
    'Piping Installation - Mega Yard'
  ];

  const requestedByOptions = [
    'MEP01 001 JEGANATHAN SUNDARAVELU',
    'TEA0021 Subbiah',
    'TEA0022 John Tan',
    'TEA0023 Mary Lim',
    'MEP057 Mahendran S/O Minisamy'
  ];

  const statuses = [
    'Pending Submit',
    'Pending Update Qty',
    'Pending Delivery',
    'Pending Receive',
    'Delivered',
    'Rejected'
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

  const handleProjectSearchChange = (e) => {
    const value = e.target.value;
    setProjectSearch(value);
    handleInputChange('project', value);
    if (value) {
      setFilteredProjects(projectOptions.filter(p => p.toLowerCase().includes(value.toLowerCase())));
    } else {
      setFilteredProjects([]);
    }
  };

  const handleProjectSelect = (project) => {
    handleInputChange('project', project);
    setProjectSearch(project);
    setShowProjectDropdown(false);
  };

  const handleRequestedBySearchChange = (e) => {
    const value = e.target.value;
    setRequestedBySearch(value);
    handleInputChange('requestedBy', value);
    if (value) {
      setFilteredRequestedBy(requestedByOptions.filter(r => r.toLowerCase().includes(value.toLowerCase())));
    } else {
      setFilteredRequestedBy([]);
    }
  };

  const handleRequestedBySelect = (person) => {
    handleInputChange('requestedBy', person);
    setRequestedBySearch(person);
    setShowRequestedByDropdown(false);
  };

  const handleSave = () => {
    showToast('Delivery Order updated successfully!', 'success');
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-tom-custom-delivery-order');
    }
  };

  const handleAddItem = () => {
    const newItem = {
      id: formData.items.length + 1,
      item: '',
      description: '',
      quantity: 0,
      units: 'Pcs',
      priceLevel: '',
      rate: 0,
      amount: 0,
      taxCode: '',
      grossAmount: 0,
      class: '',
      costEstimateType: 'Fixed',
      estimatedExtendedCost: 0,
      countryOfOrigin: '',
      hsCode: ''
    };
    
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
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
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveMenu(null);
      if (showProjectDropdown) {
        setShowProjectDropdown(false);
      }
      if (showRequestedByDropdown) {
        setShowRequestedByDropdown(false);
      }
    };
    if (activeMenu !== null || showProjectDropdown || showRequestedByDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeMenu, showProjectDropdown, showRequestedByDropdown]);

  const handleInsertAbove = (index) => {
    const newItem = {
      id: Date.now(),
      item: '',
      description: '',
      quantity: 0,
      units: 'Pcs',
      priceLevel: '',
      rate: 0,
      amount: 0,
      taxCode: '',
      grossAmount: 0,
      class: '',
      costEstimateType: 'Fixed',
      estimatedExtendedCost: 0,
      countryOfOrigin: '',
      hsCode: ''
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
      description: '',
      quantity: 0,
      units: 'Pcs',
      priceLevel: '',
      rate: 0,
      amount: 0,
      taxCode: '',
      grossAmount: 0,
      class: '',
      costEstimateType: 'Fixed',
      estimatedExtendedCost: 0,
      countryOfOrigin: '',
      hsCode: ''
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
      setActiveMenu(null);
    }
  };

  const handleItemChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-truck"></i>
          <div>
            <h1>Edit Delivery Order</h1>
            <div className="detail-subtitle">
              <span>{formData.documentNo}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={() => setCurrentPage && setCurrentPage('view-tom-custom-delivery-order')}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
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
                <label>DOCUMENT NO</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.documentNo}
                  disabled
                  style={{ backgroundColor: '#f5f5f5', cursor: 'not-allowed' }}
                />
              </div>
              <div className="detail-field">
                <label>REFERENCE NO</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.referenceNo}
                  disabled
                  style={{ backgroundColor: '#f5f5f5', cursor: 'not-allowed' }}
                />
              </div>
              <div className="detail-field" style={{ position: 'relative', zIndex: showVendorDropdown ? 1001 : 1 }}>
                <label>VENDOR <span className="required">*</span></label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="text"
                    className="form-control"
                    value={formData.vendor}
                    onChange={(e) => {
                      const value = e.target.value;
                      handleInputChange('vendor', value);
                      setVendorSearch(value);
                      if (value) {
                        setFilteredVendors(vendorOptions.filter(v => v.toLowerCase().includes(value.toLowerCase())));
                        setShowVendorDropdown(true);
                      } else {
                        setFilteredVendors([]);
                        setShowVendorDropdown(false);
                      }
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowVendorDropdown(true);
                      setFilteredVendors(vendorOptions);
                    }}
                    placeholder="Type to search vendor..."
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
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowVendorDropdown(!showVendorDropdown);
                      setFilteredVendors(vendorOptions);
                    }}
                  >
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  {showVendorDropdown && (
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
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowVendorDropdown(false);
                        }}
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
                        zIndex: 10000, 
                        marginTop: '4px',
                        overflowY: 'auto',
                        maxHeight: '200px'
                      }}>
                        {(filteredVendors.length > 0 ? filteredVendors : vendorOptions).map((vendor, idx) => (
                          <div 
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleInputChange('vendor', vendor);
                              setVendorSearch(vendor);
                              setFilteredVendors([]);
                              setShowVendorDropdown(false);
                            }}
                            style={{ 
                              padding: '10px 12px', 
                              cursor: 'pointer', 
                              fontSize: '13px',
                              borderBottom: idx < (filteredVendors.length > 0 ? filteredVendors : vendorOptions).length - 1 ? '1px solid #f0f0f0' : 'none',
                              backgroundColor: 'white'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                          >
                            {vendor}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="detail-field">
                <label>PO NUMBER</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.poNumber}
                  onChange={(e) => handleInputChange('poNumber', e.target.value)}
                  placeholder="Enter PO Number"
                />
              </div>
              <div className="detail-field">
                <label>SHIP DATE <span className="required">*</span></label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.shipDate}
                  onChange={(e) => handleInputChange('shipDate', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>LOCATION</label>
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
              <div className="detail-field">
                <label>WAREHOUSE/LOCATION</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.warehouse}
                  onChange={(e) => handleInputChange('warehouse', e.target.value)}
                  placeholder="Warehouse fulfilling the order"
                />
              </div>
              <div className="detail-field">
                <label>SUBSIDIARY <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.subsidiary}
                  onChange={(e) => handleInputChange('subsidiary', e.target.value)}
                >
                  {subsidiaries.map((sub, index) => (
                    <option key={index} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>
              <div className="detail-field">
                <label>DEPARTMENT</label>
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
              <div className="detail-field">
                <label>CLASS</label>
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
              <div className="detail-field" style={{ position: 'relative', zIndex: showProjectDropdown ? 10001 : 'auto' }}>
                <label>PROJECT</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="text"
                    className="form-control"
                    value={formData.project}
                    onChange={handleProjectSearchChange}
                    onFocus={() => setShowProjectDropdown(true)}
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
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowProjectDropdown(!showProjectDropdown);
                    }}
                  >
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  {showProjectDropdown && (
                    <>
                      <div 
                        style={{ 
                          position: 'fixed', 
                          top: 0, 
                          left: 0, 
                          right: 0, 
                          bottom: 0, 
                          zIndex: 9999 
                        }}
                        onClick={() => setShowProjectDropdown(false)}
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
                        zIndex: 10000, 
                        marginTop: '4px',
                        overflowY: 'auto',
                        maxHeight: '200px'
                      }}>
                        {(filteredProjects.length > 0 ? filteredProjects : projectOptions).map((project, idx) => (
                          <div 
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleProjectSelect(project);
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
                            {project}
                          </div>
                        ))}
                        {filteredProjects.length === 0 && projectSearch && (
                          <div style={{ padding: '20px', textAlign: 'center', color: '#999', fontSize: '13px' }}>
                            No projects found
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="detail-field" style={{ position: 'relative', zIndex: showRequestedByDropdown ? 10001 : 'auto' }}>
                <label>REQUESTED BY</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="text"
                    className="form-control"
                    value={formData.requestedBy}
                    onChange={handleRequestedBySearchChange}
                    onFocus={() => setShowRequestedByDropdown(true)}
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
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowRequestedByDropdown(!showRequestedByDropdown);
                    }}
                  >
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  {showRequestedByDropdown && (
                    <>
                      <div 
                        style={{ 
                          position: 'fixed', 
                          top: 0, 
                          left: 0, 
                          right: 0, 
                          bottom: 0, 
                          zIndex: 9999 
                        }}
                        onClick={() => setShowRequestedByDropdown(false)}
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
                        zIndex: 10000, 
                        marginTop: '4px',
                        overflowY: 'auto',
                        maxHeight: '200px'
                      }}>
                        {(filteredRequestedBy.length > 0 ? filteredRequestedBy : requestedByOptions).map((person, idx) => (
                          <div 
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRequestedBySelect(person);
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
                            {person}
                          </div>
                        ))}
                        {filteredRequestedBy.length === 0 && requestedBySearch && (
                          <div style={{ padding: '20px', textAlign: 'center', color: '#999', fontSize: '13px' }}>
                            No users found
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="detail-field">
                <label>STATUS</label>
                <select 
                  className="form-control"
                  value={formData.status}
                  onChange={(e) => handleInputChange('status', e.target.value)}
                >
                  {statuses.map((status, index) => (
                    <option key={index} value={status}>{status}</option>
                  ))}
                </select>
              </div>
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label>MEMO</label>
                <textarea 
                  className="form-control"
                  rows="3"
                  value={formData.memo}
                  onChange={(e) => handleInputChange('memo', e.target.value)}
                  placeholder="Enter memo"
                  style={{ resize: 'vertical', maxWidth: '70%' }}
                />
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Shipping Address */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Shipping Address</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label>SHIPPING ADDRESS</label>
                <textarea 
                  className="form-control"
                  rows="4"
                  value={formData.shippingAddress}
                  onChange={(e) => handleInputChange('shippingAddress', e.target.value)}
                  placeholder="Enter shipping address"
                  style={{ resize: 'vertical' }}
                />
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Lines Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Items</h3>
          </div>
          <div className="section-body">
            {formData.items.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                <p>No items added yet. Click "Add Item" to start adding items to this delivery order.</p>
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table className="detail-items-table" style={{ minWidth: '2200px' }}>
                  <thead>
                    <tr>
                      <th style={{ width: '30px' }}></th>
                      <th style={{ minWidth: '150px' }}>ITEM</th>
                      <th style={{ minWidth: '400px' }}>DESC</th>
                      <th style={{ minWidth: '80px' }}>QTY</th>
                      <th style={{ minWidth: '100px' }}>UNITS</th>
                      <th style={{ minWidth: '120px' }}>PRICE LEVEL</th>
                      <th style={{ minWidth: '100px' }}>RATE</th>
                      <th style={{ minWidth: '100px' }}>AMT</th>
                      <th style={{ minWidth: '120px' }}>TAX CODE</th>
                      <th style={{ minWidth: '100px' }}>GROSS AMT</th>
                      <th style={{ minWidth: '150px' }}>CLASS</th>
                      <th style={{ minWidth: '150px' }}>COST EST. TYPE</th>
                      <th style={{ minWidth: '150px' }}>EST. EXT. COST</th>
                      <th style={{ minWidth: '150px' }}>COUNTRY OF ORIGIN</th>
                      <th style={{ minWidth: '150px' }}>HS CODE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.items.map((item, index) => (
                      <tr 
                        key={item.id}
                        onMouseEnter={() => setHoveredRow(index)}
                        onMouseLeave={() => setHoveredRow(null)}
                      >
                        <td style={{ position: 'relative' }}>
                          {hoveredRow === index && (
                            <button 
                              className="row-actions-btn"
                              title="Row Actions"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleMenuToggle(index, e);
                              }}
                            >
                              <i className="fas fa-ellipsis-v"></i>
                            </button>
                          )}
                          {activeMenu === index && (
                            <div 
                              className="row-actions-menu"
                              style={{
                                position: 'fixed',
                                top: `${menuPosition.top}px`,
                                left: `${menuPosition.left}px`,
                                display: 'block',
                                zIndex: 10000
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
                          <input 
                            type="text"
                            className="form-control"
                            value={item.item}
                            onChange={(e) => handleItemChange(index, 'item', e.target.value)}
                            style={{ minWidth: '200px', height: '40px' }}
                          />
                        </td>
                        <td>
                          <textarea 
                            className="form-control"
                            value={item.description}
                            onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                            style={{ 
                              minWidth: '300px', 
                              minHeight: '60px',
                              resize: 'both',
                              overflow: 'auto'
                            }}
                            rows="2"
                            onInput={(e) => {
                              e.target.style.height = 'auto';
                              e.target.style.height = Math.max(60, e.target.scrollHeight) + 'px';
                            }}
                          />
                        </td>
                        <td>
                          <input 
                            type="number"
                            className="form-control"
                            value={item.quantity || 0}
                            onChange={(e) => handleItemChange(index, 'quantity', parseFloat(e.target.value) || 0)}
                            style={{ minWidth: '100px', height: '40px' }}
                          />
                        </td>
                        <td>
                          <input 
                            type="text"
                            className="form-control"
                            value={item.units || ''}
                            onChange={(e) => handleItemChange(index, 'units', e.target.value)}
                            style={{ minWidth: '120px', height: '40px' }}
                          />
                        </td>
                        <td>
                          <input 
                            type="text"
                            className="form-control"
                            value={item.priceLevel || ''}
                            onChange={(e) => handleItemChange(index, 'priceLevel', e.target.value)}
                            style={{ minWidth: '110px', height: '40px' }}
                          />
                        </td>
                        <td>
                          <input 
                            type="number"
                            className="form-control"
                            value={item.rate || 0}
                            onChange={(e) => handleItemChange(index, 'rate', parseFloat(e.target.value) || 0)}
                            style={{ minWidth: '120px', height: '40px' }}
                            step="0.01"
                          />
                        </td>
                        <td>
                          <input 
                            type="number"
                            className="form-control"
                            value={item.amount || 0}
                            onChange={(e) => handleItemChange(index, 'amount', parseFloat(e.target.value) || 0)}
                            style={{ minWidth: '120px', height: '40px' }}
                            step="0.01"
                          />
                        </td>
                        <td>
                          <input 
                            type="text"
                            className="form-control"
                            value={item.taxCode || ''}
                            onChange={(e) => handleItemChange(index, 'taxCode', e.target.value)}
                            style={{ minWidth: '110px', height: '40px' }}
                          />
                        </td>
                        <td>
                          <input 
                            type="number"
                            className="form-control"
                            value={item.grossAmount || 0}
                            onChange={(e) => handleItemChange(index, 'grossAmount', parseFloat(e.target.value) || 0)}
                            style={{ minWidth: '110px', height: '40px' }}
                            step="0.01"
                          />
                        </td>
                        <td>
                          <select 
                            className="form-control"
                            value={item.class || ''}
                            onChange={(e) => handleItemChange(index, 'class', e.target.value)}
                            style={{ minWidth: '180px', height: '40px' }}
                          >
                            <option value="">Select...</option>
                            <option>Consumable Item</option>
                            <option>Fabrication</option>
                            <option>Installation work</option>
                          </select>
                        </td>
                        <td>
                          <select 
                            className="form-control"
                            value={item.costEstimateType || 'Fixed'}
                            onChange={(e) => handleItemChange(index, 'costEstimateType', e.target.value)}
                            style={{ minWidth: '180px', height: '40px' }}
                          >
                            <option>Fixed</option>
                            <option>Variable</option>
                            <option>Estimated</option>
                          </select>
                        </td>
                        <td>
                          <input 
                            type="number"
                            className="form-control"
                            value={item.estimatedExtendedCost || 0}
                            onChange={(e) => handleItemChange(index, 'estimatedExtendedCost', parseFloat(e.target.value) || 0)}
                            style={{ minWidth: '180px', height: '40px' }}
                            step="0.01"
                          />
                        </td>
                        <td>
                          <input 
                            type="text"
                            className="form-control"
                            value={item.countryOfOrigin || ''}
                            onChange={(e) => handleItemChange(index, 'countryOfOrigin', e.target.value)}
                            placeholder="Country"
                            style={{ minWidth: '180px', height: '40px' }}
                          />
                        </td>
                        <td>
                          <input 
                            type="text"
                            className="form-control"
                            value={item.hsCode || ''}
                            onChange={(e) => handleItemChange(index, 'hsCode', e.target.value)}
                            placeholder="HS Code"
                            style={{ minWidth: '180px', height: '40px' }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <div style={{ marginTop: '1rem' }}>
              <button className="btn-toolbar" onClick={handleAddItem}>
                <i className="fas fa-plus"></i>
                Add Item
              </button>
            </div>
          </div>
        </div>

      </div>

      {toast.show && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast({ show: false, message: '', type: 'success' })} 
        />
      )}
    </div>
  );
};

export default EditCustomDeliveryOrder;
