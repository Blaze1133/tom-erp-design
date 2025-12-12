import React, { useState, useEffect } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EnterPurchaseOrders = ({ setCurrentPage, isEdit = false, poData = null }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState('items');

  // Vendor dropdown states
  const [vendorHovered, setVendorHovered] = useState(false);
  const [showVendorDropdown, setShowVendorDropdown] = useState(false);
  const [vendorSearch, setVendorSearch] = useState('');
  const [filteredVendors, setFilteredVendors] = useState([]);

  // Form state
  const [formData, setFormData] = useState({
    date: '',
    poNumber: 'To Be Generated',
    poType: 'Main',
    vendor: '',
    otherComments: '',
    approvalStatus: 'Submit For Approval',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    department: '',
    class: '',
    location: '',
    currency: 'SGD',
    purchaseType: 'High',
    exchangeRate: 1.00,
    items: [],
    
    // Shipping Information
    shippingMethod: '',
    shipTo: '',
    shipToSelect: '',
    fob: '',
    
    // Billing Information
    vendorAddress: '',
    vendorSelect: '- Custom -',
    terms: '',
    incoterm: '',
    
    // Accounting
    taxId: '',
    
    // Communication
    toBePrinted: false,
    toBeEmailed: false,
    toBeFaxed: false,
    vendorMessage: '',
    
    // Custom
    materialType: '',
    testTransactionField: '',
    materialSpecification: '',
    doRecordCreated: false,
    gstType: ''
  });

  const [hoveredRow, setHoveredRow] = useState(null);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [selectedItemHistory, setSelectedItemHistory] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  // Vendor options for dropdown
  const vendorOptions = [
    'Pacific Shipping Ltd',
    'Oceanic Engineering Pte Ltd',
    'Marine Construction Co',
    'ABC Corporation',
    'XYZ Industries',
    'Tech Marine Solutions',
    'Global Marine Supplies'
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Vendor handlers
  const handleVendorSelect = (vendor) => {
    handleFormChange('vendor', vendor);
    setShowVendorDropdown(false);
    setVendorSearch('');
  };

  const handleVendorSearchChange = (e) => {
    const value = e.target.value;
    setVendorSearch(value);
    handleFormChange('vendor', value);
    
    if (value) {
      const filtered = vendorOptions.filter(vendor =>
        vendor.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredVendors(filtered);
    } else {
      setFilteredVendors(vendorOptions);
    }
    setShowVendorDropdown(true);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      if (showVendorDropdown && !vendorHovered) {
        setShowVendorDropdown(false);
      }
    };
    if (showVendorDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showVendorDropdown, vendorHovered]);

  // Load existing PO data when editing
  useEffect(() => {
    const editData = sessionStorage.getItem('editPurchaseOrder');
    if (editData) {
      const poData = JSON.parse(editData);
      setFormData({
        date: poData.date || '',
        poNumber: poData.documentNumber || 'To Be Generated',
        poType: poData.poType || 'Main',
        vendor: poData.vendor || '',
        otherComments: poData.memo || '',
        approvalStatus: poData.approvalStatus || 'Submit For Approval',
        subsidiary: poData.subsidiary || 'Tech Onshore MEP Prefabricators Pte Ltd.',
        department: poData.department || '',
        class: poData.class || '',
        location: poData.location || '',
        currency: poData.currency || 'SGD',
        purchaseType: poData.purchaseType || '',
        exchangeRate: poData.exchangeRate || 1.00,
        items: poData.items || [],
        shippingMethod: poData.shippingMethod || '',
        shipTo: poData.shipTo || '',
        shipToSelect: poData.shipToSelect || '',
        fob: poData.fob || '',
        vendorAddress: poData.vendorAddress || '',
        vendorSelect: poData.vendorSelect || '- Custom -',
        terms: poData.terms || '',
        incoterm: poData.incoterm || '',
        taxId: poData.taxId || '',
        toBePrinted: poData.toBePrinted || false,
        toBeEmailed: poData.toBeEmailed || false,
        toBeFaxed: poData.toBeFaxed || false,
        vendorMessage: poData.vendorMessage || '',
        materialType: poData.materialType || '',
        testTransactionField: poData.testTransactionField || '',
        materialSpecification: poData.materialSpecification || '',
        doRecordCreated: poData.doRecordCreated || false,
        gstType: poData.gstType || ''
      });
      // Clear sessionStorage after loading
      sessionStorage.removeItem('editPurchaseOrder');
    }
  }, []);

  const handleSavePurchaseOrder = () => {
    setIsSaved(true);
    showToast('Purchase order saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-purchase-orders');
      }
    }
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-purchase-orders');
    }
  };

  const handleAddItem = () => {
    const newItem = {
      id: formData.items.length + 1,
      item: '',
      vendorName: '',
      received: 0,
      billed: 0,
      onHand: 0,
      quantity: 0,
      units: 'Pcs',
      description: '',
      rate: 0.00,
      taxCode: 'GST_SG-9%',
      amount: 0.00,
      taxRate: '9.0%',
      grossAmt: 0.00,
      taxAmt: 0.00,
      options: '',
      customer: '',
      project: '',
      department: '',
      class: '',
      billable: false,
      matchBillToReceipt: false,
      expectedReceiptDate: '',
      closed: false,
      doQuantity: 0
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
      vendorName: '',
      received: 0,
      billed: 0,
      onHand: 0,
      quantity: 0,
      units: 'Pcs',
      description: '',
      rate: 0.00,
      taxCode: 'GST_SG-9%',
      amount: 0.00,
      taxRate: '9.0%',
      grossAmt: 0.00,
      taxAmt: 0.00,
      options: '',
      customer: '',
      project: '',
      department: '',
      class: '',
      billable: false,
      matchBillToReceipt: false,
      expectedReceiptDate: '',
      closed: false,
      doQuantity: 0
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
      vendorName: '',
      received: 0,
      billed: 0,
      onHand: 0,
      quantity: 0,
      units: 'Pcs',
      description: '',
      rate: 0.00,
      taxCode: 'GST_SG-9%',
      amount: 0.00,
      taxRate: '9.0%',
      grossAmt: 0.00,
      taxAmt: 0.00,
      options: '',
      customer: '',
      project: '',
      department: '',
      class: '',
      billable: false,
      matchBillToReceipt: false,
      expectedReceiptDate: '',
      closed: false,
      doQuantity: 0
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
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-invoice"></i>
          <div>
            <h1>Purchase Order</h1>
            <div className="detail-subtitle">
              <span>{formData.poNumber}</span>
              {formData.vendor && <span>{formData.vendor}</span>}
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-action">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-action" onClick={() => setCurrentPage && setCurrentPage('view-purchase-orders')}>List</button>
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
        <button className="btn-toolbar-primary" onClick={handleSavePurchaseOrder}>
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
              <i className="fas fa-exchange-alt"></i>
              Convert to Receipt
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
                <label>PO #</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.poNumber}
                  disabled
                />
              </div>
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
                <label>PO TYPE</label>
                <select 
                  className="form-control"
                  value={formData.poType}
                  onChange={(e) => handleFormChange('poType', e.target.value)}
                >
                  <option>Main</option>
                  <option>Sub</option>
                </select>
              </div>
              <div className="detail-field" style={{ position: 'relative', zIndex: showVendorDropdown ? 10001 : 'auto' }}>
                <label className="form-label required">VENDOR</label>
                <div 
                  style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
                  onMouseEnter={() => setVendorHovered(true)}
                  onMouseLeave={() => setVendorHovered(false)}
                >
                  <div style={{ position: 'relative', flex: 1 }}>
                    <input 
                      type="text"
                      className="form-control"
                      value={formData.vendor}
                      onChange={handleVendorSearchChange}
                      onFocus={() => setShowVendorDropdown(true)}
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
                      onClick={() => setShowVendorDropdown(!showVendorDropdown)}
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
                            zIndex: 9999 
                          }}
                          onClick={() => setShowVendorDropdown(false)}
                        />
                        <div 
                          style={{ 
                            position: 'fixed',
                            width: '400px',
                            background: 'white', 
                            border: '1px solid #ddd', 
                            borderRadius: '4px', 
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)', 
                            zIndex: 10000, 
                            marginTop: '4px',
                            overflowY: 'auto',
                            maxHeight: '300px'
                          }}
                          ref={(el) => {
                            if (el) {
                              const inputRect = el.parentElement.querySelector('input').getBoundingClientRect();
                              el.style.top = `${inputRect.bottom + 4}px`;
                              el.style.left = `${inputRect.left}px`;
                            }
                          }}
                        >
                          {(filteredVendors.length > 0 ? filteredVendors : vendorOptions).map((vendor, idx) => (
                            <div 
                              key={idx}
                              onClick={() => handleVendorSelect(vendor)}
                              style={{ 
                                padding: '10px 12px', 
                                cursor: 'pointer', 
                                fontSize: '13px',
                                borderBottom: '1px solid #f5f5f5'
                              }}
                              onMouseEnter={(e) => { e.target.style.background = '#f8f9fa'; }}
                              onMouseLeave={(e) => { e.target.style.background = 'transparent'; }}
                            >
                              {vendor}
                            </div>
                          ))}
                          {filteredVendors.length === 0 && vendorSearch && (
                            <div style={{ padding: '20px', textAlign: 'center', color: '#999', fontSize: '13px' }}>
                              No vendors found
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                  {vendorHovered && (
                    <button 
                      type="button"
                      className="btn btn-secondary"
                      style={{ 
                        padding: '0.5rem', 
                        minWidth: 'auto',
                        transition: 'opacity 0.2s'
                      }}
                      onClick={() => showToast('Add new vendor functionality', 'info')}
                      title="Add new vendor"
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  )}
                </div>
              </div>
              <div className="detail-field">
                <label>APPROVAL STATUS</label>
                <select 
                  className="form-control"
                  value={formData.approvalStatus}
                  onChange={(e) => handleFormChange('approvalStatus', e.target.value)}
                >
                  <option>Submit For Approval</option>
                  <option>Pending Approval</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                </select>
              </div>
              <div className="detail-field">
                <label>OTHER COMMENTS</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.otherComments}
                  onChange={(e) => handleFormChange('otherComments', e.target.value)}
                  placeholder="Enter comments"
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
                <label>DEPARTMENT</label>
                <select 
                  className="form-control"
                  value={formData.department}
                  onChange={(e) => handleFormChange('department', e.target.value)}
                >
                  <option value="">Select...</option>
                  <option>TOM: Human Resource</option>
                  <option>TOM: Finance: Internal Transfer</option>
                  <option>TOM: IT</option>
                  <option>TOM: Logistic</option>
                  <option>TOM: Operating</option>
                  <option>TOM: Purchase</option>
                  <option>TOM: Sales and Marketing</option>
                  <option>TOM: Security</option>
                  <option>MEP</option>
                </select>
              </div>
              <div className="detail-field">
                <label>CLASS</label>
                <select 
                  className="form-control"
                  value={formData.class}
                  onChange={(e) => handleFormChange('class', e.target.value)}
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
              <div className="detail-field">
                <label>LOCATION</label>
                <select 
                  className="form-control"
                  value={formData.location}
                  onChange={(e) => handleFormChange('location', e.target.value)}
                >
                  <option value="">Select...</option>
                  <option>Hong Hang Shipyard</option>
                  <option>Mega yard</option>
                  <option>MEP MARINE CC</option>
                  <option>Shipyards/Construction</option>
                  <option>Singapore (MEP)</option>
                  <option>TOM-11</option>
                  <option>TOM External Workshop</option>
                  <option>TOM-13</option>
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
              className={`tab-btn ${activeTab === 'items' ? 'active' : ''}`}
              onClick={() => setActiveTab('items')}
            >
              Items
            </button>
            <button 
              className={`tab-btn ${activeTab === 'shipping' ? 'active' : ''}`}
              onClick={() => setActiveTab('shipping')}
            >
              Shipping
            </button>
            <button 
              className={`tab-btn ${activeTab === 'billing' ? 'active' : ''}`}
              onClick={() => setActiveTab('billing')}
            >
              Billing
            </button>
            <button 
              className={`tab-btn ${activeTab === 'accounting' ? 'active' : ''}`}
              onClick={() => setActiveTab('accounting')}
            >
              Accounting
            </button>
            <button 
              className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`}
              onClick={() => setActiveTab('communication')}
            >
              Communication
            </button>
            <button 
              className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`}
              onClick={() => setActiveTab('system')}
            >
              System Information
            </button>
            <button 
              className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`}
              onClick={() => setActiveTab('custom')}
            >
              Custom
            </button>
            <button 
              className={`tab-btn ${activeTab === 'supplierReceived' ? 'active' : ''}`}
              onClick={() => setActiveTab('supplierReceived')}
            >
              Supplier Received Items
            </button>
          </div>

          <div className="tabs-content">
            {/* Items Tab */}
            {activeTab === 'items' && (
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

                {formData.items.length > 0 ? (
                  <div className="items-table-wrapper" style={{ marginTop: '0' }}>
                    <table className="detail-items-table" style={{ minWidth: '4000px' }}>
                      <thead>
                        <tr>
                          <th style={{ width: '30px' }}></th>
                          <th style={{ minWidth: '150px' }}>ITEM</th>
                          <th style={{ minWidth: '300px' }}>DESCRIPTION</th>
                          <th style={{ minWidth: '150px' }}>VENDOR NAME</th>
                          <th style={{ minWidth: '100px' }}>RECEIVED</th>
                          <th style={{ minWidth: '100px' }}>BILLED</th>
                          <th style={{ minWidth: '100px' }}>ON HAND</th>
                          <th style={{ minWidth: '100px' }}>QUANTITY</th>
                          <th style={{ minWidth: '100px' }}>UNITS</th>
                          <th style={{ minWidth: '100px' }}>RATE</th>
                          <th style={{ minWidth: '120px' }}>TAX CODE</th>
                          <th style={{ minWidth: '100px' }}>AMOUNT</th>
                          <th style={{ minWidth: '100px' }}>TAX RATE</th>
                          <th style={{ minWidth: '100px' }}>GROSS AMT</th>
                          <th style={{ minWidth: '100px' }}>TAX AMT</th>
                          <th style={{ minWidth: '120px' }}>OPTIONS</th>
                          <th style={{ minWidth: '150px' }}>CUSTOMER</th>
                          <th style={{ minWidth: '150px' }}>PROJECT</th>
                          <th style={{ minWidth: '150px' }}>DEPARTMENT</th>
                          <th style={{ minWidth: '150px' }}>CLASS</th>
                          <th style={{ minWidth: '100px' }}>BILLABLE</th>
                          <th style={{ minWidth: '150px' }}>MATCH BILL TO RECEIPT</th>
                          <th style={{ minWidth: '150px' }}>EXPECTED RECEIPT DATE</th>
                          <th style={{ minWidth: '100px' }}>CLOSED</th>
                          <th style={{ minWidth: '100px' }}>DO QUANTITY</th>
                          <th style={{ minWidth: '100px' }}>HISTORY</th>
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
                            <td>
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue={item.item} 
                                style={{ minWidth: '150px', height: '40px' }} 
                              />
                            </td>
                            <td>
                              <textarea 
                                className="form-control" 
                                defaultValue={item.description} 
                                style={{ 
                                  minWidth: '300px', 
                                  minHeight: '60px',
                                  resize: 'both',
                                  overflow: 'auto'
                                }}
                                rows="3"
                              />
                            </td>
                            <td>
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue={item.vendorName} 
                                style={{ minWidth: '150px', height: '40px' }} 
                              />
                            </td>
                            <td>
                              <input 
                                type="number" 
                                className="form-control" 
                                defaultValue={item.received} 
                                style={{ minWidth: '100px', height: '40px' }} 
                              />
                            </td>
                            <td>
                              <input 
                                type="number" 
                                className="form-control" 
                                defaultValue={item.billed} 
                                style={{ minWidth: '100px', height: '40px' }} 
                              />
                            </td>
                            <td>
                              <input 
                                type="number" 
                                className="form-control" 
                                defaultValue={item.onHand} 
                                style={{ minWidth: '100px', height: '40px' }} 
                              />
                            </td>
                            <td>
                              <input 
                                type="number" 
                                className="form-control" 
                                defaultValue={item.quantity} 
                                style={{ minWidth: '100px', height: '40px' }} 
                              />
                            </td>
                            <td>
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue={item.units} 
                                style={{ minWidth: '100px', height: '40px' }} 
                              />
                            </td>
                            <td>
                              <input 
                                type="number" 
                                className="form-control" 
                                defaultValue={item.rate} 
                                style={{ minWidth: '100px', height: '40px' }} 
                                step="0.01"
                              />
                            </td>
                            <td>
                              <select 
                                className="form-control" 
                                defaultValue={item.taxCode} 
                                style={{ minWidth: '120px', height: '40px' }}
                              >
                                <option>GST_SG-9%</option>
                                <option>GST_SG-7%</option>
                                <option>No Tax</option>
                              </select>
                            </td>
                            <td>
                              <input 
                                type="number" 
                                className="form-control" 
                                defaultValue={item.amount} 
                                style={{ minWidth: '100px', height: '40px' }} 
                                step="0.01"
                              />
                            </td>
                            <td>
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue={item.taxRate} 
                                style={{ minWidth: '100px', height: '40px' }} 
                              />
                            </td>
                            <td>
                              <input 
                                type="number" 
                                className="form-control" 
                                defaultValue={item.grossAmt} 
                                style={{ minWidth: '100px', height: '40px' }} 
                                step="0.01"
                              />
                            </td>
                            <td>
                              <input 
                                type="number" 
                                className="form-control" 
                                defaultValue={item.taxAmt} 
                                style={{ minWidth: '100px', height: '40px' }} 
                                step="0.01"
                              />
                            </td>
                            <td>
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue={item.options} 
                                style={{ minWidth: '120px', height: '40px' }} 
                              />
                            </td>
                            <td>
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue={item.customer} 
                                style={{ minWidth: '150px', height: '40px' }} 
                              />
                            </td>
                            <td>
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue={item.project} 
                                style={{ minWidth: '150px', height: '40px' }} 
                              />
                            </td>
                            <td>
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue={item.department} 
                                style={{ minWidth: '150px', height: '40px' }} 
                              />
                            </td>
                            <td>
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue={item.class} 
                                style={{ minWidth: '150px', height: '40px' }} 
                              />
                            </td>
                            <td style={{ textAlign: 'center' }}>
                              <input 
                                type="checkbox" 
                                defaultChecked={item.billable} 
                                style={{ width: '20px', height: '20px', cursor: 'pointer' }} 
                              />
                            </td>
                            <td>
                              <input 
                                type="text" 
                                className="form-control" 
                                defaultValue={item.matchBillToReceipt} 
                                style={{ minWidth: '150px', height: '40px' }} 
                              />
                            </td>
                            <td>
                              <input 
                                type="date" 
                                className="form-control" 
                                defaultValue={item.expectedReceiptDate} 
                                style={{ minWidth: '150px', height: '40px' }} 
                              />
                            </td>
                            <td style={{ textAlign: 'center' }}>
                              <input 
                                type="checkbox" 
                                defaultChecked={item.closed} 
                                style={{ width: '20px', height: '20px', cursor: 'pointer' }} 
                              />
                            </td>
                            <td>
                              <input 
                                type="number" 
                                className="form-control" 
                                defaultValue={item.doQuantity} 
                                style={{ minWidth: '100px', height: '40px' }} 
                              />
                            </td>
                            <td style={{ textAlign: 'center' }}>
                              <button 
                                type="button"
                                className="view-link"
                                onClick={() => {
                                  setSelectedItemHistory(item);
                                  setShowHistoryModal(true);
                                }}
                                title="View item history"
                              >
                                History
                              </button>
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
                      No items added yet. Click "Add Item" to start adding items to this purchase order.
                    </p>
                  </div>
                )}

                <button className="btn btn-primary" onClick={handleAddItem} style={{ marginBottom: '1.5rem' }}>
                  <i className="fas fa-plus"></i>
                  Add Item
                </button>

                {formData.items.length > 0 && (
                  <div className="summary-grid">
                    <div className="summary-card">
                      <div className="summary-title">SUBTOTAL</div>
                      <div className="summary-value">${calculateSubtotal().toFixed(2)}</div>
                    </div>
                    <div className="summary-card">
                      <div className="summary-title">TAX (9%)</div>
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

            {/* Shipping Tab */}
            {activeTab === 'shipping' && (
              <div className="form-section">
                <h2 className="section-title">
                  <i className="fas fa-shipping-fast"></i>
                  Shipping Information
                </h2>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>SHIPPING METHOD</label>
                    <select 
                      className="form-control"
                      value={formData.shippingMethod}
                      onChange={(e) => handleFormChange('shippingMethod', e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option>Air Freight</option>
                      <option>Sea Freight</option>
                      <option>Land Transport</option>
                      <option>Courier</option>
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>SHIP TO</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.shipTo}
                      onChange={(e) => handleFormChange('shipTo', e.target.value)}
                      placeholder="<Type then tab>"
                    />
                  </div>
                  <div className="detail-field">
                    <label>SHIP TO SELECT</label>
                    <select 
                      className="form-control"
                      value={formData.shipToSelect}
                      onChange={(e) => handleFormChange('shipToSelect', e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option>Tech Onshore MEP Prefabricators Pte Ltd.</option>
                      <option>13 Tuas South Street 3</option>
                      <option>Singapore 638031</option>
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>FOB</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.fob}
                      onChange={(e) => handleFormChange('fob', e.target.value)}
                      placeholder="Enter FOB"
                    />
                  </div>
                </div>
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
                    <select 
                      className="form-control"
                      value={formData.vendorSelect}
                      onChange={(e) => handleFormChange('vendorSelect', e.target.value)}
                    >
                      <option>- Custom -</option>
                      <option>Vendor Address 1</option>
                      <option>Vendor Address 2</option>
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>VENDOR ADDRESS</label>
                    <textarea 
                      className="form-control" 
                      rows="3"
                      value={formData.vendorAddress}
                      onChange={(e) => handleFormChange('vendorAddress', e.target.value)}
                      placeholder="Enter vendor address"
                    />
                  </div>
                  <div className="detail-field">
                    <label>TERMS</label>
                    <select 
                      className="form-control"
                      value={formData.terms}
                      onChange={(e) => handleFormChange('terms', e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option>1% 10 Net 30</option>
                      <option>2% 10 Net 30</option>
                      <option>COD</option>
                      <option>Due on receipt</option>
                      <option>Net 10</option>
                      <option>Net 15</option>
                      <option>Net 30</option>
                      <option>Net 60</option>
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>INCOTERM</label>
                    <select 
                      className="form-control"
                      value={formData.incoterm}
                      onChange={(e) => handleFormChange('incoterm', e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option>DAP</option>
                      <option>EXW</option>
                      <option>FOB</option>
                      <option>CIF</option>
                      <option>DDP</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Accounting Tab */}
            {activeTab === 'accounting' && (
              <div className="form-section">
                <h2 className="section-title">
                  <i className="fas fa-calculator"></i>
                  Accounting
                </h2>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>TAX ID</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.taxId}
                      onChange={(e) => handleFormChange('taxId', e.target.value)}
                      placeholder="Enter tax ID"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Communication Tab */}
            {activeTab === 'communication' && (
              <div className="form-section">
                <h2 className="section-title">
                  <i className="fas fa-comments"></i>
                  Communication
                </h2>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>
                      <input 
                        type="checkbox" 
                        checked={formData.toBePrinted}
                        onChange={(e) => handleFormChange('toBePrinted', e.target.checked)}
                        style={{ marginRight: '8px' }}
                      />
                      TO BE PRINTED
                    </label>
                  </div>
                  <div className="detail-field">
                    <label>
                      <input 
                        type="checkbox" 
                        checked={formData.toBeEmailed}
                        onChange={(e) => handleFormChange('toBeEmailed', e.target.checked)}
                        style={{ marginRight: '8px' }}
                      />
                      TO BE E-MAILED
                    </label>
                  </div>
                  <div className="detail-field">
                    <label>
                      <input 
                        type="checkbox" 
                        checked={formData.toBeFaxed}
                        onChange={(e) => handleFormChange('toBeFaxed', e.target.checked)}
                        style={{ marginRight: '8px' }}
                      />
                      TO BE FAXED
                    </label>
                  </div>
                  <div className="detail-field" style={{ gridColumn: '1 / -1' }}>
                    <label>VENDOR MESSAGE</label>
                    <textarea 
                      className="form-control" 
                      rows="4"
                      value={formData.vendorMessage}
                      onChange={(e) => handleFormChange('vendorMessage', e.target.value)}
                      placeholder="Enter vendor message"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* System Information Tab */}
            {activeTab === 'system' && (
              <div className="form-section">
                <h2 className="section-title">
                  <i className="fas fa-info-circle"></i>
                  System Information
                </h2>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>CREATED BY</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value="Admin User"
                      disabled
                    />
                  </div>
                  <div className="detail-field">
                    <label>DATE CREATED</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={new Date().toLocaleDateString()}
                      disabled
                    />
                  </div>
                  <div className="detail-field">
                    <label>LAST MODIFIED BY</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value="Admin User"
                      disabled
                    />
                  </div>
                  <div className="detail-field">
                    <label>LAST MODIFIED</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={new Date().toLocaleDateString()}
                      disabled
                    />
                  </div>
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
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.materialType}
                      onChange={(e) => handleFormChange('materialType', e.target.value)}
                      placeholder="Enter material type"
                    />
                  </div>
                  <div className="detail-field">
                    <label>TEST TRANSACTION FIELD</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.testTransactionField}
                      onChange={(e) => handleFormChange('testTransactionField', e.target.value)}
                      placeholder="Enter test field"
                    />
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
                  <div className="detail-field">
                    <label>
                      <input 
                        type="checkbox" 
                        checked={formData.doRecordCreated}
                        onChange={(e) => handleFormChange('doRecordCreated', e.target.checked)}
                        style={{ marginRight: '8px' }}
                      />
                      DO RECORD CREATED
                    </label>
                  </div>
                  <div className="detail-field">
                    <label>GST TYPE</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.gstType}
                      onChange={(e) => handleFormChange('gstType', e.target.value)}
                      placeholder="Enter GST type"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Supplier Received Items Tab */}
            {activeTab === 'supplierReceived' && (
              <div className="form-section">
                <h2 className="section-title">
                  <i className="fas fa-box"></i>
                  Received Items
                </h2>
                <div style={{ overflowX: 'auto' }}>
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th style={{ minWidth: '200px' }}>ITEM</th>
                        <th style={{ minWidth: '150px' }}>COUNT OF QUANTITY</th>
                        <th style={{ minWidth: '200px' }}>MEMO</th>
                        <th style={{ minWidth: '200px' }}>SUM OF AMOUNT (FOREIGN CURRENCY)</th>
                        <th style={{ minWidth: '200px' }}>NAME</th>
                        <th style={{ minWidth: '180px' }}>DOCUMENT NUMBER</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Supporting Documents */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Supporting Documents</h3>
          </div>
          <div className="section-body">
            <div style={{ 
              padding: '3rem 2rem', 
              background: '#f9fafb', 
              border: '2px dashed #d1d5db', 
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <i className="fas fa-cloud-upload-alt" style={{ fontSize: '3rem', color: '#9ca3af', marginBottom: '1rem', display: 'block' }}></i>
              <p style={{ margin: '0 0 0.5rem 0', color: '#374151', fontSize: '0.95rem', fontWeight: '600' }}>
                No supporting documents attached
              </p>
              <p style={{ margin: '0 0 1.5rem 0', color: '#6b7280', fontSize: '0.875rem' }}>
                Upload invoices, receipts, or other relevant files (PDF, DOC, XLS, JPG, PNG)
              </p>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button className="btn btn-primary" style={{ fontSize: '0.875rem', padding: '0.625rem 1.5rem' }}>
                  <i className="fas fa-paperclip" style={{ marginRight: '0.5rem' }}></i>
                  Attach Document
                </button>
              </div>
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

    {/* Item History Modal */}
    {showHistoryModal && selectedItemHistory && (
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000
        }}
        onClick={() => setShowHistoryModal(false)}
      >
        <div 
          style={{
            background: 'white',
            borderRadius: '8px',
            padding: '2rem',
            maxWidth: '900px',
            width: '90%',
            maxHeight: '80vh',
            overflow: 'auto',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#333' }}>
              <i className="fas fa-history" style={{ marginRight: '0.5rem', color: '#4a90e2' }}></i>
              Item History
            </h2>
            <button 
              onClick={() => setShowHistoryModal(false)}
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#999',
                padding: '0.25rem 0.5rem'
              }}
            >
              ×
            </button>
          </div>

          <div style={{ marginBottom: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '4px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <strong style={{ color: '#666', fontSize: '0.85rem' }}>ITEM:</strong>
                <div style={{ fontSize: '1rem', color: '#333', marginTop: '0.25rem' }}>{selectedItemHistory.item}</div>
              </div>
              <div>
                <strong style={{ color: '#666', fontSize: '0.85rem' }}>DESCRIPTION:</strong>
                <div style={{ fontSize: '1rem', color: '#333', marginTop: '0.25rem' }}>{selectedItemHistory.description || '-'}</div>
              </div>
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="detail-items-table" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '120px' }}>ITEM</th>
                  <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '200px' }}>DESCRIPTION</th>
                  <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '100px' }}>PRICE</th>
                  <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '80px' }}>UNITS</th>
                  <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '100px' }}>QUANTITY</th>
                  <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '120px' }}>DATE</th>
                  <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '150px' }}>DOCUMENT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '10px 12px' }}>{selectedItemHistory.item}</td>
                  <td style={{ padding: '10px 12px' }}>{selectedItemHistory.description || '-'}</td>
                  <td style={{ padding: '10px 12px' }}>{selectedItemHistory.rate ? selectedItemHistory.rate.toFixed(2) : '0.00'}</td>
                  <td style={{ padding: '10px 12px' }}>{selectedItemHistory.units || 'Pcs'}</td>
                  <td style={{ padding: '10px 12px' }}>{selectedItemHistory.quantity || 0}</td>
                  <td style={{ padding: '10px 12px' }}>{new Date().toLocaleDateString()}</td>
                  <td style={{ padding: '10px 12px' }}>Current PO</td>
                </tr>
                <tr>
                  <td colSpan="7" style={{ padding: '2rem', textAlign: 'center', color: '#999', fontSize: '0.9rem' }}>
                    No previous history records found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
            <button 
              className="btn-toolbar"
              onClick={() => setShowHistoryModal(false)}
              style={{ padding: '0.5rem 1.5rem' }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )}
    </div>
  );
};

export default EnterPurchaseOrders;
