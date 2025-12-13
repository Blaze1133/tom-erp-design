import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const IssueCreditMemo = ({ onBack }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [expandedSections, setExpandedSections] = useState({
    primary: true,
    sales: true,
    classification: true
  });

  const [activeTab, setActiveTab] = useState('items');
  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const [formData, setFormData] = useState({
    credit: 'To Be Generated',
    originalInvoiceNumber: 'INV-2024-001',
    customer: '',
    project: '',
    date: new Date().toLocaleDateString('en-GB'),
    dueDate: '',
    postingPeriod: '',
    po: '',
    memo: '',
    salesRep: '',
    salesEffectiveDate: '',
    subsidiary: '',
    class: '',
    location: '',
    department: '',
    paymentTerms: '',
    contactPerson: '',
    submissionId: '',
    hsCode: '',
    countryOfOrigin: ''
  });

  const [items, setItems] = useState([
    {
      id: 1,
      item: '',
      quantity: '',
      units: '',
      description: '',
      priceLevel: '',
      rate: '',
      amount: '',
      taxCode: '',
      taxRate: '',
      grossAmt: '',
      taxAmt: '',
      options: '',
      costEstimate: '',
      estExtendedCost: '',
      estGrossProfit: '',
      estGrossProfitPercent: '',
      itemCountryOfOrigin: '',
      hsCode: ''
    }
  ]);

  const customers = [
    '100 Baroid Surface Solutions, Halliburton Energy Services Inc',
    '1000 TEAM LEAD CONSTRUCTION PTE LTD',
    '1001 TECH ONSHORE MEP-PREFABRICATORS PTE LTD',
    'ABC Manufacturing Ltd',
    'Global Supplies Inc',
    'Marine Parts Supplier'
  ];

  const projects = [
    'TOM22-00656 TEAM LEAD CONSTRUCTION PTE LTD : 25-00003-TLC-Nursing Home @ Hougang Ave 1',
    'TOM22-00733 TECH ONSHORE MEP-PREFABRICATORS PTE LTD : 25-00010-TOM-Riser Concept',
    'TOM22-00741 TECH ONSHORE MEP-PREFABRICATORS PTE LTD : 25-00015-TOM-TOM Innovation',
    'Marine Equipment Supply - Q1 2024',
    'Offshore Platform Parts Delivery',
    'Ship Repair Project 2024'
  ];

  const paymentTerms = [
    'Net 15',
    'Net 30',
    'Net 45',
    'Net 60',
    'Due on Receipt',
    'COD (Cash on Delivery)',
    '2/10 Net 30'
  ];

  const salesReps = [
    'MEP049 Camila Shirde',
    'MEP054 Kandasamy Kannan',
    'MEP057 Mahendran S/O Minisamy',
    'MEP074 Sasapu Venkateswara Rao',
    'Praveen Chandraseka',
    'TDQ059 Kumarasamy Madhavan Subbiah',
    'TEA100 Pitchai Balaguru'
  ];

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];

  const classes = [
    'Consumable Item',
    'Course',
    'Cutting Works',
    'Electrical',
    'Fabrication',
    'Hydrotesting',
    'Installation work',
    'Manpower Supply',
    'Material Supply',
    'Module /Prefab',
    'Piping',
    'Project Works',
    'Refurbishment works',
    'Rental',
    'Repair & Referable',
    'Sale of Scrap Metal',
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

  const departments = [
    'TOM: Human Resource',
    'TOM: Finance: Internal Transfer',
    'TOM: IT',
    'TOM: Logistic',
    'TOM: Operating',
    'TOM: Purchase',
    'TOM: Sales and Marketing',
    'TOM: Security',
    'TOM: TOM INTERNALS: TOM HR',
    'TOM: Nampak Reinsure',
    'TOM: Auction Handover',
    'TOM: Engineering',
    'TOM: Production'
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

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleAddItem = () => {
    const newItem = {
      id: items.length + 1,
      item: '',
      quantity: '',
      units: '',
      description: '',
      priceLevel: '',
      rate: '',
      amount: '',
      taxCode: '',
      taxRate: '',
      grossAmt: '',
      taxAmt: '',
      options: '',
      costEstimate: '',
      estExtendedCost: '',
      estGrossProfit: '',
      estGrossProfitPercent: '',
      itemCountryOfOrigin: '',
      hsCode: ''
    };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const handleItemChange = (id, field, value) => {
    setItems(prev => prev.map(item => (item.id === id ? { ...item, [field]: value } : item)));
  };

  const handleMenuToggle = (index, e) => {
    e.stopPropagation();
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setMenuPosition({
      top: rect.bottom,
      left: rect.left
    });
    setActiveMenu(activeMenu === index ? null : index);
  };

  const handleInsertAbove = (index) => {
    const newItem = {
      id: Date.now(),
      item: '',
      quantity: '',
      units: '',
      description: '',
      priceLevel: '',
      rate: '',
      amount: '',
      taxCode: '',
      taxRate: '',
      grossAmt: '',
      taxAmt: '',
      options: '',
      costEstimate: '',
      estExtendedCost: '',
      estGrossProfit: '',
      estGrossProfitPercent: '',
      itemCountryOfOrigin: '',
      hsCode: ''
    };
    setItems(prev => [
      ...prev.slice(0, index),
      newItem,
      ...prev.slice(index)
    ]);
    setActiveMenu(null);
  };

  const handleInsertBelow = (index) => {
    const newItem = {
      id: Date.now(),
      item: '',
      quantity: '',
      units: '',
      description: '',
      priceLevel: '',
      rate: '',
      amount: '',
      taxCode: '',
      taxRate: '',
      grossAmt: '',
      taxAmt: '',
      options: '',
      costEstimate: '',
      estExtendedCost: '',
      estGrossProfit: '',
      estGrossProfitPercent: '',
      itemCountryOfOrigin: '',
      hsCode: ''
    };
    setItems(prev => [
      ...prev.slice(0, index + 1),
      newItem,
      ...prev.slice(index + 1)
    ]);
    setActiveMenu(null);
  };

  const handleDeleteRow = (index) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setItems(prev => prev.filter((_, i) => i !== index));
      setActiveMenu(null);
    }
  };

  const calculateSummary = () => {
    const subtotal = items.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
    const discount = 0;
    const taxTotal = items.reduce((sum, item) => sum + (parseFloat(item.taxAmt) || 0), 0);
    const total = subtotal - discount + taxTotal;

    return { subtotal, discount, taxTotal, total };
  };

  const summary = calculateSummary();

  const handleSave = () => {
    if (!formData.customer) {
      showToast('Please select a customer', 'error');
      return;
    }
    showToast('Credit Memo saved successfully!', 'success');
    if (onBack) onBack();
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (onBack) onBack();
    }
  };

  const handleBack = () => {
    if (onBack) onBack();
  };

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      if (activeMenu !== null) {
        setActiveMenu(null);
      }
    };
    
    if (activeMenu !== null) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeMenu]);

  return (
    <div className="enquiry-detail" onClick={() => setActiveMenu(null)}>
      {/* Global Row Actions Menu */}
      {activeMenu !== null && (
        <div 
          className="row-actions-menu"
          style={{
            position: 'fixed',
            top: `${menuPosition.top}px`,
            left: `${menuPosition.left}px`,
            display: 'block',
            zIndex: 1000
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={() => handleInsertAbove(activeMenu)}>
            <i className="fas fa-arrow-up"></i>
            Insert Above
          </button>
          <button onClick={() => handleInsertBelow(activeMenu)}>
            <i className="fas fa-arrow-down"></i>
            Insert Below
          </button>
          <button onClick={() => handleDeleteRow(activeMenu)} className="delete-action">
            <i className="fas fa-trash"></i>
            Delete Row
          </button>
        </div>
      )}
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-minus"></i>
          <div>
            <h1>Credit Memo</h1>
            <div className="detail-subtitle">
              <span>{formData.credit}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={() => showToast('List view', 'info')}>List</button>
          <button className="btn-action" onClick={() => showToast('Search', 'info')}>Search</button>
          <button className="btn-action" onClick={() => showToast('Customize', 'info')}>Customize</button>
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
        <div className="toolbar-dropdown">
          <button className="btn-toolbar" onClick={() => showToast('Actions menu', 'info')}>
            <i className="fas fa-cog"></i>
            Actions
          </button>
        </div>
      </div>

      <div className="detail-content">
        <div className={`detail-section ${expandedSections.primary ? '' : 'collapsed'}`}>
          <div className="section-header" onClick={() => toggleSection('primary')}>
            <i className="fas fa-chevron-down"></i>
            <h3><i className="fas fa-info-circle"></i> Primary Information</h3>
          </div>
          {expandedSections.primary && (
            <div className="section-body">
              <div className="detail-grid">
                <div className="detail-field">
                  <label>CREDIT # <span className="required">*</span></label>
                  <input type="text" className="form-control" value={formData.credit} disabled />
                </div>

                <div className="detail-field">
                  <label>ORIGINAL INVOICE NUMBER</label>
                  <input type="text" className="form-control" value={formData.originalInvoiceNumber} disabled style={{ backgroundColor: '#f5f5f5' }} />
                </div>

                <div className="detail-field">
                  <label>PO #</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.po}
                    onChange={(e) => handleInputChange('po', e.target.value)}
                  />
                </div>

                <div className="detail-field">
                  <label>POSTING PERIOD <span className="required">*</span></label>
                  <select
                    className="form-control"
                    value={formData.postingPeriod}
                    onChange={(e) => handleInputChange('postingPeriod', e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="Jan 2021">Jan 2021</option>
                    <option value="Feb 2021">Feb 2021</option>
                    <option value="Nov 2021">Nov 2021</option>
                    <option value="Dec 2021">Dec 2021</option>
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
                  <label>DUE DATE</label>
                  <input
                    type="date"
                    className="form-control"
                    value={formData.dueDate}
                    onChange={(e) => handleInputChange('dueDate', e.target.value)}
                  />
                </div>

                <div className="detail-field">
                  <label>CUSTOMER <span className="required">*</span></label>
                  <select
                    className="form-control"
                    value={formData.customer}
                    onChange={(e) => handleInputChange('customer', e.target.value)}
                  >
                    <option value="">Select...</option>
                    {customers.map((customer, index) => (
                      <option key={index} value={customer}>{customer}</option>
                    ))}
                  </select>
                </div>

                <div className="detail-field">
                  <label>PROJECT</label>
                  <select
                    className="form-control"
                    value={formData.project}
                    onChange={(e) => handleInputChange('project', e.target.value)}
                  >
                    <option value="">Select...</option>
                    {projects.map((project, index) => (
                      <option key={index} value={project}>{project}</option>
                    ))}
                  </select>
                </div>

                <div className="detail-field">
                  <label>MEMO</label>
                  <textarea
                    className="form-control"
                    value={formData.memo}
                    onChange={(e) => handleInputChange('memo', e.target.value)}
                    rows="2"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={`detail-section ${expandedSections.sales ? '' : 'collapsed'}`}>
          <div className="section-header" onClick={() => toggleSection('sales')}>
            <i className="fas fa-chevron-down"></i>
            <h3><i className="fas fa-chart-line"></i> Sales Information</h3>
          </div>
          {expandedSections.sales && (
            <div className="section-body">
              <div className="detail-grid">
                <div className="detail-field">
                  <label>SALES REP</label>
                  <select
                    className="form-control"
                    value={formData.salesRep}
                    onChange={(e) => handleInputChange('salesRep', e.target.value)}
                  >
                    <option value="">Select...</option>
                    {salesReps.map((rep, index) => (
                      <option key={index} value={rep}>{rep}</option>
                    ))}
                  </select>
                </div>

                <div className="detail-field">
                  <label>SALES EFFECTIVE DATE</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.salesEffectiveDate}
                    onChange={(e) => handleInputChange('salesEffectiveDate', e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={`detail-section ${expandedSections.classification ? '' : 'collapsed'}`}>
          <div className="section-header" onClick={() => toggleSection('classification')}>
            <i className="fas fa-chevron-down"></i>
            <h3><i className="fas fa-tags"></i> Classification</h3>
          </div>
          {expandedSections.classification && (
            <div className="section-body">
              <div className="detail-grid">
                <div className="detail-field">
                  <label>SUBSIDIARY <span className="required">*</span></label>
                  <select
                    className="form-control"
                    value={formData.subsidiary}
                    onChange={(e) => handleInputChange('subsidiary', e.target.value)}
                  >
                    <option value="">Select...</option>
                    {subsidiaries.map((sub, index) => (
                      <option key={index} value={sub}>{sub}</option>
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

                <div className="detail-field">
                  <label>LOCATION <span className="required">*</span></label>
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
                  <label>DEPARTMENT <span className="required">*</span></label>
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
                  <label>PAYMENT TERMS</label>
                  <select
                    className="form-control"
                    value={formData.paymentTerms}
                    onChange={(e) => handleInputChange('paymentTerms', e.target.value)}
                  >
                    <option value="">Select...</option>
                    {paymentTerms.map((term, index) => (
                      <option key={index} value={term}>{term}</option>
                    ))}
                  </select>
                </div>

                <div className="detail-field">
                  <label>COUNTRY OF ORIGIN</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.countryOfOrigin}
                    onChange={(e) => handleInputChange('countryOfOrigin', e.target.value)}
                  />
                </div>

                <div className="detail-field">
                  <label>CONTACT PERSON</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.contactPerson}
                    onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                  />
                </div>

                <div className="detail-field">
                  <label>SUBMISSION ID</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.submissionId}
                    onChange={(e) => handleInputChange('submissionId', e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tabbed Interface for Items */}
        <div className="detail-tabs" style={{ marginTop: '2rem' }}>
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'items' ? 'active' : ''}`} onClick={() => setActiveTab('items')}>Items</button>
            <button className={`tab-btn ${activeTab === 'shipping' ? 'active' : ''}`} onClick={() => setActiveTab('shipping')}>Shipping</button>
            <button className={`tab-btn ${activeTab === 'billing' ? 'active' : ''}`} onClick={() => setActiveTab('billing')}>Billing</button>
            <button className={`tab-btn ${activeTab === 'accounting' ? 'active' : ''}`} onClick={() => setActiveTab('accounting')}>Accounting</button>
            <button className={`tab-btn ${activeTab === 'relationships' ? 'active' : ''}`} onClick={() => setActiveTab('relationships')}>Relationships</button>
            <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>Communication</button>
            <button className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`} onClick={() => setActiveTab('system')}>System Information</button>
            <button className={`tab-btn ${activeTab === 'tax' ? 'active' : ''}`} onClick={() => setActiveTab('tax')}>Tax Reporting</button>
          </div>

          {/* Items Tab */}
          {activeTab === 'items' && (
            <div className="tab-content" style={{ padding: '1.5rem' }}>
              <div style={{ marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'end' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase' }}>DISCOUNT</label>
                    <select className="form-control" style={{ width: '100%' }}>
                      <option value="">Select...</option>
                      <option value="5">5%</option>
                      <option value="10">10%</option>
                      <option value="15">15%</option>
                    </select>
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase' }}>RATE</label>
                    <input type="text" className="form-control" style={{ width: '100%' }} />
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'end' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase' }}>UNAPPLIED</label>
                    <input type="text" className="form-control" value="0.00" readOnly style={{ width: '100%', backgroundColor: '#f5f5f5' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase' }}>APPLIED</label>
                    <input type="text" className="form-control" value="0.00" readOnly style={{ width: '100%', backgroundColor: '#f5f5f5' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingBottom: '0.5rem' }}>
                    <input type="checkbox" id="autoApply" style={{ width: '16px', height: '16px' }} />
                    <label htmlFor="autoApply" style={{ fontSize: '0.875rem', color: '#333', margin: 0, cursor: 'pointer' }}>AUTO APPLY</label>
                  </div>
                </div>
              </div>

              <div className="items-table-container" style={{ overflowX: 'auto' }}>
                <table className="items-table">
                  <thead>
                    <tr>
                      <th style={{width: '30px'}}></th>
                      <th style={{minWidth: '150px'}}>ITEM</th>
                      <th style={{minWidth: '400px'}}>DESCRIPTION</th>
                      <th style={{minWidth: '80px'}}>QUANTITY</th>
                      <th style={{minWidth: '100px'}}>UNITS</th>
                      <th style={{minWidth: '120px'}}>PRICE LEVEL</th>
                      <th style={{minWidth: '100px'}}>RATE</th>
                      <th style={{minWidth: '100px'}}>AMOUNT</th>
                      <th style={{minWidth: '150px'}}>TAX CODE</th>
                      <th style={{minWidth: '100px'}}>TAX RATE</th>
                      <th style={{minWidth: '100px'}}>GROSS AMT</th>
                      <th style={{minWidth: '100px'}}>TAX AMT</th>
                      <th style={{minWidth: '100px'}}>OPTIONS</th>
                      <th style={{minWidth: '150px'}}>COST ESTIMATE TYPE</th>
                      <th style={{minWidth: '150px'}}>EST. EXTENDED COST</th>
                      <th style={{minWidth: '150px'}}>ITEM COUNTRY OF ORIGIN</th>
                      <th style={{minWidth: '150px'}}>HS CODE</th>
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
                        </td>
                        <td>
                          <select
                            className="form-control"
                            value={item.item}
                            onChange={(e) => handleItemChange(item.id, 'item', e.target.value)}
                            style={{minWidth: '150px', height: '40px'}}
                          >
                            <option value="">Select...</option>
                            <option value="Opening A/R Balance">Opening A/R Balance</option>
                            <option value="Custom">Custom</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="form-control"
                            value={item.description}
                            onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                            placeholder="Enter description"
                            style={{ 
                              minWidth: '400px', 
                              minHeight: '60px',
                              resize: 'both',
                              overflow: 'auto'
                            }}
                            rows="3"
                            onInput={(e) => {
                              e.target.style.height = 'auto';
                              e.target.style.height = Math.max(60, e.target.scrollHeight) + 'px';
                            }}
                          />
                        </td>
                        <td><input type="number" className="form-control" value={item.quantity} onChange={(e) => handleItemChange(item.id, 'quantity', e.target.value)} style={{minWidth: '80px', height: '40px', textAlign: 'center'}} /></td>
                        <td>
                          <select className="form-control" value={item.units} onChange={(e) => handleItemChange(item.id, 'units', e.target.value)} style={{minWidth: '100px', height: '40px'}}>
                            <option value="">Select...</option>
                            <option value="Pcs">Pcs</option>
                            <option value="Kg">Kg</option>
                            <option value="m">m</option>
                          </select>
                        </td>
                        <td><input type="text" className="form-control" value={item.priceLevel} onChange={(e) => handleItemChange(item.id, 'priceLevel', e.target.value)} style={{minWidth: '120px', height: '40px'}} /></td>
                        <td><input type="number" className="form-control" value={item.rate} onChange={(e) => handleItemChange(item.id, 'rate', e.target.value)} style={{minWidth: '100px', height: '40px', textAlign: 'right'}} step="0.01" /></td>
                        <td><input type="number" className="form-control" value={item.amount} onChange={(e) => handleItemChange(item.id, 'amount', e.target.value)} style={{minWidth: '100px', height: '40px', textAlign: 'right'}} step="0.01" /></td>
                        <td>
                          <select
                            className="form-control"
                            value={item.taxCode}
                            onChange={(e) => handleItemChange(item.id, 'taxCode', e.target.value)}
                            style={{minWidth: '150px', height: '40px'}}
                          >
                            <option value="">Select...</option>
                            <option value="GST_SG-9%">GST_SG-9%</option>
                            <option value="0.0%">0.0%</option>
                          </select>
                        </td>
                        <td><input type="text" className="form-control" value={item.taxRate} onChange={(e) => handleItemChange(item.id, 'taxRate', e.target.value)} style={{minWidth: '100px', height: '40px', textAlign: 'center'}} readOnly /></td>
                        <td><input type="number" className="form-control" value={item.grossAmt} onChange={(e) => handleItemChange(item.id, 'grossAmt', e.target.value)} style={{minWidth: '100px', height: '40px', textAlign: 'right'}} step="0.01" /></td>
                        <td><input type="number" className="form-control" value={item.taxAmt} onChange={(e) => handleItemChange(item.id, 'taxAmt', e.target.value)} style={{minWidth: '100px', height: '40px', textAlign: 'right'}} step="0.01" /></td>
                        <td><input type="text" className="form-control" value={item.options} onChange={(e) => handleItemChange(item.id, 'options', e.target.value)} style={{minWidth: '100px', height: '40px'}} /></td>
                        <td>
                          <select className="form-control" value={item.costEstimate} onChange={(e) => handleItemChange(item.id, 'costEstimate', e.target.value)} style={{minWidth: '150px', height: '40px'}}>
                            <option value="">Select...</option>
                            <option value="Fixed">Fixed</option>
                            <option value="Variable">Variable</option>
                          </select>
                        </td>
                        <td><input type="number" className="form-control" value={item.estExtendedCost} onChange={(e) => handleItemChange(item.id, 'estExtendedCost', e.target.value)} style={{minWidth: '150px', height: '40px', textAlign: 'right'}} step="0.01" /></td>
                        <td><input type="text" className="form-control" value={item.itemCountryOfOrigin} onChange={(e) => handleItemChange(item.id, 'itemCountryOfOrigin', e.target.value)} style={{minWidth: '150px', height: '40px'}} /></td>
                        <td><input type="text" className="form-control" value={item.hsCode} onChange={(e) => handleItemChange(item.id, 'hsCode', e.target.value)} style={{minWidth: '150px', height: '40px'}} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="summary-grid" style={{ marginTop: '2rem' }}>
                <div className="summary-card">
                  <div className="summary-title">Subtotal</div>
                  <div className="summary-value">${summary.subtotal.toFixed(2)}</div>
                </div>
                <div className="summary-card">
                  <div className="summary-title">Discount</div>
                  <div className="summary-value">${summary.discount.toFixed(2)}</div>
                </div>
                <div className="summary-card">
                  <div className="summary-title">Tax Total</div>
                  <div className="summary-value">${summary.taxTotal.toFixed(2)}</div>
                </div>
                <div className="summary-card">
                  <div className="summary-title">Total</div>
                  <div className="summary-value">${summary.total.toFixed(2)}</div>
                </div>
              </div>

              <div className="detail-toolbar" style={{ justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                <button className="btn-toolbar" onClick={handleCancel}>
                  <i className="fas fa-times"></i>
                  Cancel
                </button>
                <button className="btn-toolbar-primary" onClick={handleSave}>
                  <i className="fas fa-save"></i>
                  Save
                </button>
              </div>
            </div>
          )}

          {/* Shipping Tab */}
          {activeTab === 'shipping' && (
            <div className="tab-content" style={{ padding: '1.5rem' }}>
              <div className="detail-section">
                <div className="section-header">
                  <i className="fas fa-chevron-down"></i>
                  <h3>Shipping Information</h3>
                </div>
                <div className="section-body">
                  <div className="detail-grid">
                    <div className="detail-field">
                      <label>SHIPPING CARRIER</label>
                      <select className="form-control">
                        <option value="">Select...</option>
                        <option value="None">None</option>
                        <option value="FedEx">FedEx</option>
                        <option value="UPS">UPS</option>
                        <option value="DHL">DHL</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Billing Tab */}
          {activeTab === 'billing' && (
            <div className="tab-content" style={{ padding: '1.5rem' }}>
              <div className="detail-section">
                <div className="section-header">
                  <i className="fas fa-chevron-down"></i>
                  <h3>Billing Address</h3>
                </div>
                <div className="section-body">
                  <div className="detail-grid">
                    <div className="detail-field">
                      <label>BILL TO SELECT</label>
                      <select className="form-control">
                        <option value="Custom">- Custom -</option>
                        <option value="Primary">Primary Address</option>
                        <option value="Shipping">Shipping Address</option>
                      </select>
                    </div>
                    <div className="detail-field">
                      <label>BILL TO</label>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <textarea 
                          className="form-control"
                          rows="4"
                          placeholder="Enter billing address"
                          style={{ flex: 1 }}
                        />
                        <button className="btn-toolbar" style={{ padding: '0.5rem 0.75rem' }}>
                          <i className="fas fa-map-marker-alt"></i> Map
                        </button>
                      </div>
                    </div>
                    <div className="detail-field">
                      <label>REF BANK PRINT</label>
                      <select className="form-control">
                        <option value="">Select...</option>
                        <option value="Bank1">Bank 1</option>
                        <option value="Bank2">Bank 2</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Accounting Tab */}
          {activeTab === 'accounting' && (
            <div className="tab-content" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div className="detail-section">
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Account Information</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid" style={{ gridTemplateColumns: '1fr' }}>
                      <div className="detail-field">
                        <label>ACCOUNT</label>
                        <select className="form-control">
                          <option value="">Select...</option>
                          <option value="Receivables">Accounts Receivable</option>
                          <option value="Revenue">Revenue</option>
                        </select>
                      </div>
                      <div className="detail-field">
                        <label>CURRENCY <span className="required">*</span></label>
                        <select className="form-control">
                          <option value="SGD">SGD</option>
                          <option value="USD">USD</option>
                          <option value="EUR">EUR</option>
                        </select>
                      </div>
                      <div className="detail-field">
                        <label>EXCHANGE RATE <span className="required">*</span></label>
                        <input type="number" className="form-control" defaultValue="1.00" step="0.01" />
                      </div>
                      <div className="detail-field">
                        <label>EST. EXTENDED COST</label>
                        <input type="text" className="form-control" defaultValue="0.00" readOnly style={{ backgroundColor: '#f5f5f5' }} />
                      </div>
                      <div className="detail-field">
                        <label>EST. GROSS PROFIT</label>
                        <input type="text" className="form-control" defaultValue="0.00" readOnly style={{ backgroundColor: '#f5f5f5' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="detail-section">
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Tax Information</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid" style={{ gridTemplateColumns: '1fr' }}>
                      <div className="detail-field">
                        <label>TAX ID</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="detail-field">
                        <label>EST. GROSS PROFIT PERCENT</label>
                        <input type="text" className="form-control" readOnly style={{ backgroundColor: '#f5f5f5' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Relationships Tab */}
          {activeTab === 'relationships' && (
            <div className="tab-content" style={{ padding: '1.5rem' }}>
              <div className="detail-section">
                <div className="section-header">
                  <i className="fas fa-chevron-down"></i>
                  <h3>Contacts</h3>
                </div>
                <div className="section-body">
                  <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                    <button className="btn-toolbar">
                      Remove all
                    </button>
                    <button className="btn-toolbar">
                      Clear All Lines
                    </button>
                  </div>
                  <div className="items-table-container" style={{ overflowX: 'auto' }}>
                    <table className="items-table">
                      <thead>
                        <tr>
                          <th style={{minWidth: '200px'}}>CONTACT <span className="required">*</span></th>
                          <th style={{minWidth: '150px'}}>JOB TITLE</th>
                          <th style={{minWidth: '200px'}}>EMAIL</th>
                          <th style={{minWidth: '150px'}}>MAIN PHONE</th>
                          <th style={{minWidth: '200px'}}>SUBSIDIARY <span className="required">*</span></th>
                          <th style={{minWidth: '150px'}}>ROLE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><input type="text" className="form-control" style={{minWidth: '200px', height: '40px'}} /></td>
                          <td><input type="text" className="form-control" style={{minWidth: '150px', height: '40px'}} /></td>
                          <td><input type="email" className="form-control" style={{minWidth: '200px', height: '40px'}} /></td>
                          <td><input type="tel" className="form-control" style={{minWidth: '150px', height: '40px'}} /></td>
                          <td>
                            <select className="form-control" style={{minWidth: '200px', height: '40px'}}>
                              <option value="">Select...</option>
                              <option value="TOM">Tech Onshore MEP Prefabricators Pte Ltd</option>
                              <option value="TEA">Tech Electric & Automation Pte Ltd</option>
                            </select>
                          </td>
                          <td><input type="text" className="form-control" style={{minWidth: '150px', height: '40px'}} /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                    <button className="btn-toolbar" style={{ backgroundColor: '#4CAF50', color: 'white' }}>
                      <i className="fas fa-check"></i> Add
                    </button>
                    <button className="btn-toolbar">
                      <i className="fas fa-times"></i> Cancel
                    </button>
                    <button className="btn-toolbar">
                      <i className="fas fa-plus"></i> Insert
                    </button>
                    <button className="btn-toolbar">
                      <i className="fas fa-trash"></i> Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Communication Tab */}
          {activeTab === 'communication' && (
            <div className="tab-content" style={{ padding: '1.5rem' }}>
              <div className="detail-tabs" style={{ marginTop: 0 }}>
                <div className="tabs-header" style={{ borderBottom: '2px solid #e0e0e0' }}>
                  <button className="tab-btn active" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Messages</button>
                  <button className="tab-btn" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Events</button>
                  <button className="tab-btn" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Tasks</button>
                  <button className="tab-btn" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Phone Calls</button>
                  <button className="tab-btn" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>User Notes</button>
                  <button className="tab-btn" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>Files</button>
                </div>
                <div style={{ padding: '1.5rem 0' }}>
                  <div className="detail-grid">
                    <div className="detail-field">
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <input type="checkbox" style={{ width: '16px', height: '16px' }} />
                        TO BE E-MAILED
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="detail-field">
                      <label>SELECT MESSAGE</label>
                      <select className="form-control">
                        <option value="">Select...</option>
                        <option value="Standard">Standard Message</option>
                        <option value="Custom">Custom Message</option>
                      </select>
                    </div>
                    <div className="detail-field">
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <input type="checkbox" style={{ width: '16px', height: '16px' }} />
                        TO BE PRINTED
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                      <label>CUSTOMER MESSAGE</label>
                      <textarea 
                        className="form-control"
                        rows="4"
                        placeholder="Enter customer message"
                      />
                    </div>
                    <div className="detail-field">
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <input type="checkbox" style={{ width: '16px', height: '16px' }} />
                        TO BE FAXED
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* System Information Tab */}
          {activeTab === 'system' && (
            <div className="tab-content" style={{ padding: '1.5rem' }}>
              <div className="detail-section">
                <div className="section-header">
                  <i className="fas fa-chevron-down"></i>
                  <h3>System Information</h3>
                </div>
                <div className="section-body">
                  <div className="detail-grid">
                    <div className="detail-field">
                      <label>REF CUSTOMER</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="<Type then tab>"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tax Reporting Tab */}
          {activeTab === 'tax' && (
            <div className="tab-content" style={{ padding: '1.5rem' }}>
              <div className="detail-section">
                <div className="section-header">
                  <i className="fas fa-chevron-down"></i>
                  <h3>Tax Reporting</h3>
                </div>
                <div className="section-body">
                  <div className="detail-grid">
                    <div className="detail-field">
                      <label>REFERENCE NO. OF ORIGINAL INVOICE</label>
                      <input 
                        type="text" 
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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

export default IssueCreditMemo;
