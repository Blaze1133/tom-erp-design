import React, { useState } from 'react';
import Toast from './Toast';
import AddProjectForm from './AddProjectForm';
import AddCustomerForm from './AddCustomerForm';
import './Enquiries.css';

const SalesOrder = ({ setCurrentPage, isEdit = false }) => {
  const [items, setItems] = useState([]);

  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState('items');

  // Customer dropdown states
  const [customerHovered, setCustomerHovered] = useState(false);
  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [customerSearch, setCustomerSearch] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  
  // Project dropdown states
  const [projectHovered, setProjectHovered] = useState(false);
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);
  const [showAddProject, setShowAddProject] = useState(false);
  const [projectSearch, setProjectSearch] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  
  // Row actions states
  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const [formData, setFormData] = useState({
    // Primary Information
    customForm: 'TOM Performa Invoice',
    orderNumber: isEdit ? 'SO-2024-001' : 'To Be Generated',
    customerProject: '',
    date: '',
    status: 'Pending Approval',
    startDate: '',
    endDate: '',
    poNumber: '',
    memo: '',
    
    // Shipping Information
    shipDate: '',
    shippingCarrier: '',
    shippingMethod: '',
    shipComplete: false,
    shippingAddress: '',
    shipTo: '',
    
    // Billing Information
    terms: '',
    billingSchedule: '',
    refBankPrint: '',
    paymentPeriod: '',
    billingAddress: '',
    billTo: '',
    
    // Accounting
    accountingPeriod: '',
    recognitionPeriod: '',
    
    // Relationships
    partner: '',
    leadSource: '',
    
    // Communication
    emailPreference: 'Default',
    printPreference: 'Default',
    faxPreference: 'Default',
    
    // Sales Information
    salesRep: '',
    opportunity: '',
    salesEffectiveDate: '',
    
    // Classification
    subsidiary: '',
    forInvoiceGrouping: false,
    approvalStatus: 'Submit For Approval',
    contactPerson: '',
    countryOfOrigin: '',
    hsCode: '',
  });

  // Customer options for dropdown
  const customerOptions = [
    '612 Raise Pte Ltd',
    'ABC Corporation',
    'XYZ Industries',
    'Tech Marine Solutions'
  ];
  
  // Project options for dropdown (linked to customers)
  const projectOptions = [
    { id: 1, name: 'Marine Equipment Supply – Q1 2024', customer: '612 Raise Pte Ltd', jobId: 'PRJ-001', startDate: '2024-01-15', location: 'Singapore', vesselName: 'MV Pacific Star', scopeOfWork: 'Supply and installation of marine equipment' },
    { id: 2, name: 'Hull Repair Project', customer: 'ABC Corporation', jobId: 'PRJ-002', startDate: '2024-02-01', location: 'Jurong Port', vesselName: 'MV Ocean Breeze', scopeOfWork: 'Hull repair and maintenance' },
    { id: 3, name: 'Piping System Upgrade', customer: 'XYZ Industries', jobId: 'PRJ-003', startDate: '2024-03-10', location: 'Tuas', vesselName: 'MV Sea Dragon', scopeOfWork: 'Piping system upgrade and testing' }
  ];

  // Customer handlers
  const handleCustomerSelect = (customer) => {
    handleInputChange('customer', customer);
    setShowCustomerDropdown(false);
    setCustomerSearch('');
  };

  const handleCustomerSearchChange = (e) => {
    const value = e.target.value;
    setCustomerSearch(value);
    handleInputChange('customer', value);
    
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
    handleInputChange('customer', customerData.companyName);
    setShowAddCustomer(false);
    showToast('New customer added successfully!', 'success');
  };
  
  // Project handlers
  const handleProjectSelect = (project) => {
    handleInputChange('project', project.name);
    setShowProjectDropdown(false);
    setProjectSearch('');
  };

  const handleProjectSearchChange = (e) => {
    const value = e.target.value;
    setProjectSearch(value);
    handleInputChange('project', value);
    
    if (value) {
      const filtered = projectOptions.filter(project =>
        project.name.toLowerCase().includes(value.toLowerCase()) ||
        project.jobId.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProjects(filtered);
    } else {
      // Filter projects by selected customer if any
      if (formData.customer) {
        const filtered = projectOptions.filter(p => p.customer === formData.customer);
        setFilteredProjects(filtered);
      } else {
        setFilteredProjects(projectOptions);
      }
    }
    setShowProjectDropdown(true);
  };

  const handleAddNewProject = () => {
    setShowAddProject(true);
    setShowProjectDropdown(false);
  };

  const handleSaveNewProject = (projectData) => {
    // Add the new project to the options list
    const newProject = {
      id: projectOptions.length + 1,
      name: projectData.projectName,
      customer: projectData.customer,
      jobId: projectData.jobId,
      startDate: projectData.startDate,
      location: projectData.projectLocation,
      vesselName: projectData.vesselName,
      scopeOfWork: projectData.scopeOfWork
    };
    projectOptions.push(newProject);
    // Set it as selected
    handleInputChange('project', newProject.name);
    setShowAddProject(false);
    showToast('New project added successfully!', 'success');
  };

  const calculateAmount = (item) => {
    return item.quantity * item.rate;
  };

  const calculateTaxAmount = (item) => {
    const amount = calculateAmount(item);
    return amount * 0.10; // 10% tax
  };

  const calculateGrossAmount = (item) => {
    return calculateAmount(item) + calculateTaxAmount(item);
  };

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
  };

  const calculateTotalTax = () => {
    return items.reduce((sum, item) => {
      const amount = parseFloat(item.amount) || 0;
      const taxRate = 9.0; // 9% GST
      return sum + (amount * taxRate / 100);
    }, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTotalTax();
  };

  const addItem = () => {
    setItems([...items, {
      id: Date.now(),
      item: '',
      quantity: 1,
      units: 'Pcs',
      description: '',
      priceLevel: 'Custom',
      rate: 0,
      amount: 0.00,
      taxCode: 'GST_SG-9%',
      grossAmount: 0.00,
      class: '',
      costEstimateType: 'Fixed',
      estimatedExtendedCost: 0.00
    }]);
  };

  const removeItem = (id) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id, field, value) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleInsertAbove = (index) => {
    const newItem = {
      id: Date.now(),
      item: '',
      quantity: 1,
      units: 'Pieces',
      description: '',
      priceLevel: 'Standard',
      rate: 0,
      amount: 0.00,
      taxCode: 'GST_SG-9%',
      grossAmount: 0.00,
      project: '',
      class: '',
      department: '',
      location: '',
      costEstimateType: 'Fixed',
      estimatedExtendedCost: 0.00
    };
    const newItems = [...items.slice(0, index), newItem, ...items.slice(index)];
    setItems(newItems);
  };

  const handleInsertBelow = (index) => {
    const newItem = {
      id: Date.now(),
      item: '',
      quantity: 1,
      units: 'Pieces',
      description: '',
      priceLevel: 'Standard',
      rate: 0,
      amount: 0.00,
      taxCode: 'GST_SG-9%',
      grossAmount: 0.00,
      project: '',
      class: '',
      department: '',
      location: '',
      costEstimateType: 'Fixed',
      estimatedExtendedCost: 0.00
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
      if (showCustomerDropdown && !customerHovered) {
        setShowCustomerDropdown(false);
      }
      if (showProjectDropdown && !projectHovered) {
        setShowProjectDropdown(false);
      }
    };
    if (activeMenu !== null || showCustomerDropdown || showProjectDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeMenu, showCustomerDropdown, showProjectDropdown, customerHovered, projectHovered]);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleSubmit = () => {
    showToast('Sales Order submitted successfully!', 'success');
    setIsSaved(true);
  };

  const handleSaveDraft = () => {
    showToast('Sales Order saved as draft!', 'success');
    setIsSaved(true);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      setFormData({});
      showToast('Changes cancelled', 'info');
    }
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-sales-orders');
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-shopping-cart"></i>
          <div>
            <h1>Sales Order</h1>
            <div className="detail-subtitle">
              {isEdit ? (
                <span>{formData.orderNumber}</span>
              ) : (
                <span># To be generated – New Sales Order</span>
              )}
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
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn-toolbar-primary" onClick={handleSubmit}>
          <i className="fas fa-save"></i>
          Save
        </button>
        {isSaved && (
          <>
            <button className="btn-toolbar" onClick={handleSaveDraft}>
              <i className="fas fa-copy"></i>
              Save Draft
            </button>
            <button className="btn-toolbar">
              <i className="fas fa-print"></i>
              Print
            </button>
            <button className="btn-toolbar">
              <i className="fas fa-exchange-alt"></i>
              Convert to Invoice
            </button>
          </>
        )}
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
                    <option>TOM Performa Invoice</option>
                    <option>Standard Sales Order</option>
                    <option>TOM Service Order</option>
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
                  <label>ORDER #</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.orderNumber}
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
                    <option>Pending Approval</option>
                    <option>Approved</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </div>
                <div className="detail-field" style={{ position: 'relative' }}>
                  <label className="form-label required">Customer</label>
                  <div 
                    style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
                    onMouseEnter={() => setCustomerHovered(true)}
                    onMouseLeave={() => setCustomerHovered(false)}
                  >
                    <div style={{ position: 'relative', flex: 1 }}>
                      <input 
                        type="text"
                        className="form-control"
                        value={formData.customer}
                        onChange={handleCustomerSearchChange}
                        onFocus={() => setShowCustomerDropdown(true)}
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
                        onClick={() => setShowCustomerDropdown(!showCustomerDropdown)}
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
                                onClick={() => handleCustomerSelect(customer)}
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
                    {customerHovered && (
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
                <div className="detail-field" style={{ position: 'relative' }}>
                  <label className="form-label">Project</label>
                  <div 
                    style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
                    onMouseEnter={() => setProjectHovered(true)}
                    onMouseLeave={() => setProjectHovered(false)}
                  >
                    <div style={{ position: 'relative', flex: 1 }}>
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
                        onClick={() => setShowProjectDropdown(!showProjectDropdown)}
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
                              zIndex: 999 
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
                            zIndex: 1000, 
                            marginTop: '4px',
                            overflowY: 'auto',
                            maxHeight: '200px'
                          }}>
                            {(filteredProjects.length > 0 ? filteredProjects : (formData.customer ? projectOptions.filter(p => p.customer === formData.customer) : projectOptions)).map((project, idx) => (
                              <div 
                                key={idx}
                                onClick={() => handleProjectSelect(project)}
                                style={{ 
                                  padding: '10px 12px', 
                                  cursor: 'pointer', 
                                  fontSize: '13px',
                                  borderBottom: '1px solid #f5f5f5'
                                }}
                                onMouseEnter={(e) => e.target.style.background = '#f8f9fa'}
                                onMouseLeave={(e) => e.target.style.background = 'transparent'}
                              >
                                <div style={{ fontWeight: '500' }}>{project.name}</div>
                                <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>
                                  {project.jobId} • {project.customer}
                                </div>
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
                    {projectHovered && (
                      <button 
                        type="button"
                        className="btn btn-secondary"
                        style={{ 
                          padding: '0.5rem', 
                          minWidth: 'auto',
                          transition: 'opacity 0.2s'
                        }}
                        onClick={handleAddNewProject}
                        title="Add new project"
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    )}
                  </div>
                </div>
                <div className="detail-field">
                  <label>START DATE</label>
                  <input 
                    type="date" 
                    className="form-control"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                  />
                </div>
                <div className="detail-field">
                  <label>END DATE</label>
                  <input 
                    type="date" 
                    className="form-control"
                    value={formData.endDate}
                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                  />
                </div>
                <div className="detail-field">
                  <label>PO NUMBER</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.poNumber}
                    onChange={(e) => handleInputChange('poNumber', e.target.value)}
                    placeholder="Enter PO number"
                  />
                </div>
                <div className="detail-field">
                  <label>MEMO</label>
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
                  <label className="form-label">Sales Rep</label>
                  <select 
                    className="form-control"
                    value={formData.salesRep}
                    onChange={(e) => handleInputChange('salesRep', e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option>TEA0021 Subbiah</option>
                    <option>TEA0022 John Tan</option>
                    <option>TEA0023 Mary Lim</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label className="form-label">Opportunity</label>
                  <select 
                    className="form-control"
                    value={formData.opportunity}
                    onChange={(e) => handleInputChange('opportunity', e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option>Marine Project 2024</option>
                    <option>Offshore Platform Build</option>
                    <option>Ship Repair Contract</option>
                  </select>
                </div>
                <div className="detail-field">
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
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1.5rem 0' }} />

          {/* Classification */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Classification</h3>
            </div>
            <div className="section-body">
              <div className="detail-grid">
                <div className="detail-field">
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
                <div className="detail-field">
                  <label className="form-label">Approval Status</label>
                  <select 
                    className="form-control"
                    value={formData.approvalStatus}
                    onChange={(e) => handleInputChange('approvalStatus', e.target.value)}
                  >
                    <option>Submit For Approval</option>
                    <option>Pending Approval</option>
                    <option>Approved</option>
                    <option>Rejected</option>
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
          </div>

          <div className="tabs-content">
            {/* Items Tab */}
            {activeTab === 'items' && (
              <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-boxes"></i>
            Items
          </h2>
          <div className="items-table-wrapper">
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th style={{ width: '30px' }}></th>
                  <th style={{minWidth: '150px'}}>ITEM</th>
                  <th style={{minWidth: '400px'}}>DESC</th>
                  <th style={{minWidth: '80px'}}>QTY</th>
                  <th style={{minWidth: '100px'}}>UNITS</th>
                  <th style={{minWidth: '120px'}}>PRICE LEVEL</th>
                  <th style={{minWidth: '100px'}}>RATE</th>
                  <th style={{minWidth: '100px'}}>AMT</th>
                  <th style={{minWidth: '120px'}}>TAX CODE</th>
                  <th style={{minWidth: '100px'}}>GROSS AMT</th>
                  <th style={{minWidth: '180px'}}>CLASS</th>
                  <th style={{minWidth: '150px'}}>DEPARTMENT</th>
                  <th style={{minWidth: '150px'}}>LOCATION</th>
                  <th style={{minWidth: '180px'}}>COST ESTIMATE TYPE</th>
                  <th style={{minWidth: '180px'}}>EST. EXTENDED COST</th>
                  <th style={{minWidth: '150px'}}>COUNTRY OF ORIGIN</th>
                  <th style={{minWidth: '150px'}}>HS CODE</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
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
                    <td><input type="text" className="form-control" value={item.item} onChange={(e) => updateItem(item.id, 'item', e.target.value)} style={{minWidth: '200px', height: '40px'}} /></td>
                    <td>
                      <textarea 
                        className="form-control"
                        value={item.description}
                        onChange={(e) => updateItem(item.id, 'description', e.target.value)}
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
                    <td><input type="number" className="form-control" value={item.quantity} onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)} style={{minWidth: '100px', height: '40px'}} /></td>
                    <td><input type="text" className="form-control" value={item.units} onChange={(e) => updateItem(item.id, 'units', e.target.value)} style={{minWidth: '120px', height: '40px'}} /></td>
                    <td><input type="text" className="form-control" value={item.priceLevel} onChange={(e) => updateItem(item.id, 'priceLevel', e.target.value)} style={{minWidth: '110px', height: '40px'}} /></td>
                    <td><input type="number" className="form-control" value={item.rate} onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)} style={{minWidth: '120px', height: '40px'}} step="0.01" /></td>
                    <td><input type="number" className="form-control" value={item.amount} onChange={(e) => updateItem(item.id, 'amount', parseFloat(e.target.value) || 0)} style={{minWidth: '120px', height: '40px'}} step="0.01" /></td>
                    <td><input type="text" className="form-control" value={item.taxCode} onChange={(e) => updateItem(item.id, 'taxCode', e.target.value)} style={{minWidth: '110px', height: '40px'}} /></td>
                    <td><input type="number" className="form-control" value={item.grossAmount} onChange={(e) => updateItem(item.id, 'grossAmount', parseFloat(e.target.value) || 0)} style={{minWidth: '110px', height: '40px'}} step="0.01" /></td>
                    <td>
                      <select className="table-input" value={item.class} onChange={(e) => updateItem(item.id, 'class', e.target.value)} style={{width: '100%'}}>
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
                      <select className="table-input" value={item.department} onChange={(e) => updateItem(item.id, 'department', e.target.value)} style={{width: '100%'}}>
                        <option value="">Select...</option>
                        <option>Sales</option>
                        <option>Engineering</option>
                        <option>Operations</option>
                        <option>MEP</option>
                      </select>
                    </td>
                    <td>
                      <select className="table-input" value={item.location} onChange={(e) => updateItem(item.id, 'location', e.target.value)} style={{width: '100%'}}>
                        <option value="">Select...</option>
                        <option>Singapore Yard</option>
                        <option>Johor Facility</option>
                        <option>Batam Workshop</option>
                      </select>
                    </td>
                    <td>
                      <select className="table-input" value={item.costEstimateType} onChange={(e) => updateItem(item.id, 'costEstimateType', e.target.value)} style={{width: '100%'}}>
                        <option>Fixed</option>
                        <option>Variable</option>
                        <option>Estimated</option>
                      </select>
                    </td>
                    <td><input type="number" className="form-control" value={item.estimatedExtendedCost} onChange={(e) => updateItem(item.id, 'estimatedExtendedCost', parseFloat(e.target.value) || 0)} style={{minWidth: '180px', height: '40px'}} step="0.01" /></td>
                    <td>
                      <input 
                        type="text" 
                        className="form-control"
                        value={item.countryOfOrigin || ''}
                        onChange={(e) => updateItem(item.id, 'countryOfOrigin', e.target.value)}
                        placeholder="Country"
                        style={{minWidth: '180px', height: '40px'}}
                      />
                    </td>
                    <td>
                      <input 
                        type="text" 
                        className="form-control"
                        value={item.hsCode || ''}
                        onChange={(e) => updateItem(item.id, 'hsCode', e.target.value)}
                        placeholder="HS Code"
                        style={{minWidth: '180px', height: '40px'}}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="add-item-btn" onClick={addItem}>
            <i className="fas fa-plus"></i>
            Add Item
          </button>

          {/* Summary Grid */}
          {items.length > 0 && (
            <div className="summary-grid">
              <div className="summary-card">
                <div className="summary-title">SUBTOTAL</div>
                <div className="summary-value">${calculateSubtotal().toFixed(2)}</div>
              </div>
              <div className="summary-card">
                <div className="summary-title">TAX AMOUNT</div>
                <div className="summary-value">${calculateTotalTax().toFixed(2)}</div>
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
                <div className="form-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                  <div className="form-group">
                    <label className="form-label">SHIP DATE</label>
                    <input 
                      type="date" 
                      className="form-control"
                      value={formData.shipDate}
                      onChange={(e) => handleInputChange('shipDate', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">SHIPPING CARRIER</label>
                    <select 
                      className="form-control"
                      value={formData.shippingCarrier}
                      onChange={(e) => handleInputChange('shippingCarrier', e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option>UPS</option>
                      <option>More</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">SHIPPING METHOD</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.shippingMethod}
                      onChange={(e) => handleInputChange('shippingMethod', e.target.value)}
                    />
                  </div>
                  <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '1.5rem' }}>
                    <input 
                      type="checkbox" 
                      checked={formData.shipComplete}
                      onChange={(e) => handleInputChange('shipComplete', e.target.checked)}
                      style={{ width: '18px', height: '18px' }}
                    />
                    <label style={{ fontWeight: '600', fontSize: '0.875rem', margin: 0 }}>SHIP COMPLETE</label>
                  </div>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Shipping Address</h4>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '600px' }}>
                  <div className="form-group">
                    <label className="form-label">SHIP TO <span className="required">*</span></label>
                    <select 
                      className="form-control"
                      value={formData.shipTo}
                      onChange={(e) => handleInputChange('shipTo', e.target.value)}
                    >
                      <option value="">- Custom -</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">SHIP TO</label>
                    <textarea 
                      className="form-control"
                      rows="4"
                      value={formData.shippingAddress}
                      onChange={(e) => handleInputChange('shippingAddress', e.target.value)}
                      placeholder="Enter shipping address"
                    />
                  </div>
                  <div>
                    <a href="#" style={{ color: '#4a90e2', fontSize: '0.875rem', textDecoration: 'none' }}>🗺 Map</a>
                  </div>
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div className="form-section">
                <div className="form-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                  <div className="form-group">
                    <label className="form-label">TERMS</label>
                    <select 
                      className="form-control"
                      value={formData.terms}
                      onChange={(e) => handleInputChange('terms', e.target.value)}
                    >
                      <option value=""></option>
                      <option>1% 10 Net 30</option>
                      <option>2% 10 Net 30</option>
                      <option>COD</option>
                      <option>Due on receipt</option>
                      <option>Immediate</option>
                      <option>Net 10</option>
                      <option>Net 15</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">BILLING SCHEDULE</label>
                    <select 
                      className="form-control"
                      value={formData.billingSchedule}
                      onChange={(e) => handleInputChange('billingSchedule', e.target.value)}
                    >
                      <option value=""></option>
                      <option>- New -</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">REF BANK PRINT</label>
                    <select 
                      className="form-control"
                      value={formData.refBankPrint}
                      onChange={(e) => handleInputChange('refBankPrint', e.target.value)}
                    >
                      <option value=""></option>
                      <option>- New -</option>
                      <option>Tech Electric & Automation Pte Ltd,(DBS)</option>
                      <option>Tech Marine Offshore(s) DBS</option>
                      <option>Tech Offshore Marine (DQ) -DBS</option>
                      <option>Tech Offshore Marine (s)(DBS)</option>
                      <option>TOM MEP OCBC</option>
                    </select>
                  </div>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>Billing Address</h4>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '600px' }}>
                  <div className="form-group">
                    <label className="form-label">BILL TO <span className="required">*</span></label>
                    <select 
                      className="form-control"
                      value={formData.billTo}
                      onChange={(e) => handleInputChange('billTo', e.target.value)}
                    >
                      <option value="">- Custom -</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">BILL TO</label>
                    <textarea 
                      className="form-control"
                      rows="4"
                      value={formData.billingAddress}
                      onChange={(e) => handleInputChange('billingAddress', e.target.value)}
                      placeholder="Enter billing address"
                    />
                  </div>
                  <div>
                    <a href="#" style={{ color: '#4a90e2', fontSize: '0.875rem', textDecoration: 'none' }}>🗺 Map</a>
                  </div>
                </div>
              </div>
            )}

            {/* Accounting Tab */}
            {activeTab === 'accounting' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Account Information</h3>
                <div className="form-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                  <div className="form-group">
                    <label className="form-label">CURRENCY <span className="required">*</span></label>
                    <select 
                      className="form-control"
                      value={formData.currency || 'SGD'}
                      onChange={(e) => handleInputChange('currency', e.target.value)}
                    >
                      <option>SGD</option>
                      <option>USD</option>
                      <option>EUR</option>
                      <option>MYR</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">EXCHANGE RATE <span className="required">*</span></label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.exchangeRate || '1.00'}
                      onChange={(e) => handleInputChange('exchangeRate', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">EST. EXTENDED COST</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value="0.00"
                      readOnly
                      style={{ backgroundColor: '#f5f5f5' }}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">EST. GROSS PROFIT</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value="0.00"
                      readOnly
                      style={{ backgroundColor: '#f5f5f5' }}
                    />
                  </div>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Tax Information</h3>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                  <div className="form-group">
                    <label className="form-label">TAX ID</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.taxId || ''}
                      onChange={(e) => handleInputChange('taxId', e.target.value)}
                      placeholder="Enter tax ID"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">EST. GROSS PROFIT PERCENT</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value=""
                      readOnly
                      style={{ backgroundColor: '#f5f5f5' }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Relationships Tab */}
            {activeTab === 'relationships' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Contacts</h3>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                    Remove all
                  </button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                    Clear All Lines
                  </button>
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
                  <button className="btn btn-primary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                    <i className="fas fa-plus"></i> Add
                  </button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                    <i className="fas fa-times"></i> Cancel
                  </button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                    Insert
                  </button>
                  <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                    Remove
                  </button>
                </div>
              </div>
            )}

            {/* Communication Tab */}
            {activeTab === 'communication' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>Messages <span className="required">*</span></h3>
                
                {/* Sub-tabs for Messages */}
                <div style={{ borderBottom: '2px solid #e0e0e0', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0' }}>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: '#fff', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.875rem', cursor: 'pointer' }}>
                      Events
                    </button>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.875rem', cursor: 'pointer' }}>
                      Tasks
                    </button>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.875rem', cursor: 'pointer' }}>
                      Phone Calls
                    </button>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', borderRight: '1px solid rgba(255,255,255,0.1)', fontSize: '0.875rem', cursor: 'pointer' }}>
                      Files
                    </button>
                    <button style={{ padding: '0.75rem 1.25rem', background: '#5b6b8a', color: 'rgba(255,255,255,0.8)', border: 'none', fontSize: '0.875rem', cursor: 'pointer' }}>
                      User Notes
                    </button>
                  </div>
                </div>

                <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <div className="form-group">
                      <label className="form-label">TO BE PRINTED</label>
                      <input 
                        type="checkbox" 
                        style={{ width: '18px', height: '18px' }}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">TO BE EMAILED</label>
                      <input 
                        type="checkbox" 
                        style={{ width: '18px', height: '18px' }}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">TO BE FAXED</label>
                      <input 
                        type="checkbox" 
                        style={{ width: '18px', height: '18px' }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="form-group">
                      <label className="form-label">SELECT MESSAGE</label>
                      <select 
                        className="form-control"
                        value={formData.selectMessage || ''}
                        onChange={(e) => handleInputChange('selectMessage', e.target.value)}
                      >
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
                      <textarea 
                        className="form-control"
                        rows="6"
                        value={formData.customerMessage || ''}
                        onChange={(e) => handleInputChange('customerMessage', e.target.value)}
                        placeholder="Enter customer message"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* System Information Tab */}
            {activeTab === 'system' && (
              <div className="form-section">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#333' }}>System Information</h3>
                <div className="form-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '500px' }}>
                  <div className="form-group">
                    <label className="form-label">REF CUSTOMER</label>
                    <div style={{ position: 'relative' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={formData.refCustomer || ''}
                        onChange={(e) => handleInputChange('refCustomer', e.target.value)}
                        placeholder="< Type then tab >"
                      />
                      <div style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: '0.25rem' }}>
                        <button style={{ background: 'none', border: 'none', padding: '0.25rem', cursor: 'pointer', fontSize: '0.875rem' }}>
                          📋 List
                        </button>
                        <button style={{ background: 'none', border: 'none', padding: '0.25rem', cursor: 'pointer', fontSize: '0.875rem' }}>
                          🔍 Search
                        </button>
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
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.testTransactionField || ''}
                      onChange={(e) => handleInputChange('testTransactionField', e.target.value)}
                      placeholder="Enter test transaction field"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">GST TYPE</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.gstType || ''}
                      onChange={(e) => handleInputChange('gstType', e.target.value)}
                      placeholder="Enter GST type"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Customer Modal */}
      {showAddCustomer && (
        <div className="modal-overlay" onClick={() => setShowAddCustomer(false)}>
          <div className="modal-content" style={{ maxWidth: '900px', width: '90%', maxHeight: '85vh', overflow: 'auto' }} onClick={(e) => e.stopPropagation()}>
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

      {/* Add Project Modal */}
      {showAddProject && (
        <div className="modal-overlay" onClick={() => setShowAddProject(false)}>
          <div className="modal-content" style={{ maxWidth: '900px', width: '90%', maxHeight: '85vh', overflow: 'auto' }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-header" style={{ padding: '1.5rem 2rem', borderBottom: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '600', color: '#333' }}>Add New Project</h2>
              <button className="modal-close-btn" onClick={() => setShowAddProject(false)} style={{ background: 'none', border: 'none', fontSize: '1.75rem', cursor: 'pointer', color: '#666', padding: '0', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                ×
              </button>
            </div>
            
            <div className="modal-body">
              <AddProjectForm 
                onSave={handleSaveNewProject}
                onCancel={() => setShowAddProject(false)}
                customers={customerOptions}
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

export default SalesOrder;
