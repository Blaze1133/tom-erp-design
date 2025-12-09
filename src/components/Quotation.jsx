import React, { useState } from 'react';
import Toast from './Toast';
import AddProjectForm from './AddProjectForm';
import AddCustomerForm from './AddCustomerForm';
import './Enquiries.css';

const Quotation = ({ setCurrentPage, isEdit = false }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [isSaved, setIsSaved] = useState(false);
  
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
  
  // Tab state for Items section
  const [activeTab, setActiveTab] = useState('items');
  
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
      discount: 0,
      retention: 0,
      retentionType: '%',
      taxCode: 'GST_SG:7%',
      taxRate: '7.0%',
      taxAmount: 4.20,
      grossAmount: 64.20
    }
  ]);

  const [formData, setFormData] = useState({
    // Primary Information
    customForm: 'TOM Supply Quotation',
    estimateNumber: isEdit ? 'Q-2024-001' : 'To Be Generated',
    customer: '',
    project: '',
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
  
  // Project options for dropdown (linked to customers)
  const projectOptions = [
    { id: 1, name: 'Marine Equipment Supply – Q1 2024', customer: '612 Raise Pte Ltd', jobId: 'PRJ-001', startDate: '2024-01-15', location: 'Singapore', vesselName: 'MV Pacific Star', scopeOfWork: 'Supply and installation of marine equipment' },
    { id: 2, name: 'Hull Repair Project', customer: 'ABC Corporation', jobId: 'PRJ-002', startDate: '2024-02-01', location: 'Jurong Port', vesselName: 'MV Ocean Breeze', scopeOfWork: 'Hull repair and maintenance' },
    { id: 3, name: 'Piping System Upgrade', customer: 'XYZ Industries', jobId: 'PRJ-003', startDate: '2024-03-10', location: 'Tuas', vesselName: 'MV Sea Dragon', scopeOfWork: 'Piping system upgrade and testing' }
  ];

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleSubmit = () => {
    showToast('Quotation saved successfully!', 'success');
    setIsSaved(true);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to close this transaction? Any unsaved changes will be lost.')) {
      showToast('Transaction cancelled', 'error');
    }
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-quotations');
    }
  };

  const handleSaveDraft = () => {
    showToast('Draft saved successfully!', 'success');
    setIsSaved(true);
  };

  const handleConvertToOrder = () => {
    showToast('Quotation converted to sales order!', 'success');
  };

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
              {isEdit ? (
                <span>{formData.estimateNumber}</span>
              ) : (
                <span># To be generated – New Sales Quotation</span>
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
            <button className="btn-toolbar" onClick={handleConvertToOrder}>
              <i className="fas fa-exchange-alt"></i>
              Convert to Order
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
                  <option>TOM Supply Quotation</option>
                  <option>DFMA Quotation</option>
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
              <div className="detail-field" style={{ position: 'relative', zIndex: showCustomerDropdown ? 10001 : 'auto' }}>
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
                            zIndex: 9999 
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
                          zIndex: 10000, 
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
              <div className="detail-field" style={{ position: 'relative', zIndex: showProjectDropdown ? 10001 : 'auto' }}>
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
                <textarea 
                  className="form-control"
                  placeholder="Enter memo"
                  value={formData.memo}
                  onChange={(e) => handleInputChange('memo', e.target.value)}
                  style={{ 
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
            </div>
          </div>
        </div>

        {/* Items & Additional Information Tabs */}
        <div className="detail-tabs" style={{ marginTop: '2rem' }}>
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'items' ? 'active' : ''}`} onClick={() => setActiveTab('items')}>Items</button>
            <button className={`tab-btn ${activeTab === 'additional' ? 'active' : ''}`} onClick={() => setActiveTab('additional')}>Additional Information</button>
          </div>

          {/* Items Tab Content */}
          {activeTab === 'items' && (
            <div className="tab-content" style={{ padding: '1.5rem' }}>
            <div className="items-table-container" style={{ marginBottom: '1rem' }}>
              <table className="items-table">
                <thead>
                  <tr>
                    <th style={{ width: '30px' }}></th>
                    <th style={{ minWidth: '150px' }}>ITEM</th>
                    <th style={{ minWidth: '400px' }}>DESCRIPTION</th>
                    <th style={{ minWidth: '80px' }}>QTY</th>
                    <th style={{ minWidth: '100px' }}>UNITS</th>
                    <th style={{ minWidth: '120px' }}>PRICE LEVEL</th>
                    <th style={{ minWidth: '100px' }}>RATE</th>
                    <th style={{ minWidth: '100px' }}>AMOUNT</th>
                    <th style={{ minWidth: '100px' }}>DISCOUNT</th>
                    <th style={{ minWidth: '180px' }}>RETENTION</th>
                    <th style={{ minWidth: '120px' }}>TAX CODE</th>
                    <th style={{ minWidth: '80px' }}>TAX RATE</th>
                    <th style={{ minWidth: '100px' }}>TAX AMT</th>
                    <th style={{ minWidth: '100px' }}>GROSS AMT</th>
                    <th style={{ minWidth: '150px' }}>COUNTRY OF ORIGIN</th>
                    <th style={{ minWidth: '150px' }}>HS CODE</th>
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
                          value={item.item}
                          onChange={(e) => updateItem(item.id, 'item', e.target.value)}
                          placeholder="Enter item"
                          style={{ minWidth: '200px', height: '40px' }}
                        />
                      </td>
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
                      <td>
                        <input 
                          type="number" 
                          className="form-control"
                          value={item.quantity}
                          onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                          min="0"
                          step="0.01"
                          style={{ minWidth: '100px', height: '40px' }}
                        />
                      </td>
                      <td>
                        <select 
                          className="form-control"
                          value={item.units}
                          onChange={(e) => updateItem(item.id, 'units', e.target.value)}
                          style={{ minWidth: '120px', height: '40px' }}
                        >
                          <option>Kgs</option>
                          <option>Pcs</option>
                          <option>Meters</option>
                          <option>Hours</option>
                        </select>
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
                        <input 
                          type="number" 
                          className="form-control"
                          value={item.discount || 0}
                          onChange={(e) => updateItem(item.id, 'discount', parseFloat(e.target.value) || 0)}
                          min="0"
                          step="0.01"
                          placeholder="0.00"
                          style={{ minWidth: '100px', height: '40px' }}
                        />
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                          <input 
                            type="number" 
                            className="form-control"
                            value={item.retention || 0}
                            onChange={(e) => updateItem(item.id, 'retention', parseFloat(e.target.value) || 0)}
                            min="0"
                            step="0.01"
                            placeholder="0.00"
                            style={{ minWidth: '80px', height: '40px', flex: 1 }}
                          />
                          <select 
                            className="form-control"
                            value={item.retentionType || '%'}
                            onChange={(e) => updateItem(item.id, 'retentionType', e.target.value)}
                            style={{ minWidth: '60px', height: '40px', width: '60px' }}
                          >
                            <option value="%">%</option>
                            <option value="$">$</option>
                          </select>
                        </div>
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
                      <td>
                        <input 
                          type="text" 
                          className="form-control"
                          value={item.countryOfOrigin || ''}
                          onChange={(e) => updateItem(item.id, 'countryOfOrigin', e.target.value)}
                          placeholder="Country"
                          style={{ minWidth: '180px', height: '40px' }}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control"
                          value={item.hsCode || ''}
                          onChange={(e) => updateItem(item.id, 'hsCode', e.target.value)}
                          placeholder="HS Code"
                          style={{ minWidth: '180px', height: '40px' }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <button className="btn btn-primary" onClick={addItem}>
                <i className="fas fa-plus"></i>
                Add Item
              </button>
            </div>

            <div className="summary-grid" style={{ marginTop: '1rem' }}>
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
          )}

          {/* Additional Information Tab Content */}
          {activeTab === 'additional' && (
            <div className="tab-content" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase' }}>APPROVAL STATUS</label>
                  <select 
                    className="form-control"
                    value={formData.approvalStatus}
                    onChange={(e) => handleInputChange('approvalStatus', e.target.value)}
                    style={{ fontSize: '13px' }}
                  >
                    <option>Pending Approval</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase' }}>CONTACT PERSON</label>
                  <select 
                    className="form-control"
                    value={formData.contactPerson}
                    onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                    style={{ fontSize: '13px' }}
                  >
                    <option>Select...</option>
                    <option>John Smith</option>
                    <option>Jane Doe</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase' }}>TAXES AND DUTIES</label>
                <textarea 
                  className="form-control"
                  rows="3"
                  placeholder="Quotation does not include any applicable foreign taxes and overhead costs such as but not limited to foreign withholding tax, international tax..."
                  value={formData.taxesAndDuties}
                  onChange={(e) => handleInputChange('taxesAndDuties', e.target.value)}
                  style={{ width: '100%', resize: 'vertical', fontSize: '13px' }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase' }}>VARIATION</label>
                <textarea 
                  className="form-control"
                  rows="3"
                  placeholder="Variation to this quotation applies to the scope of work as herein specified, any additional work or incurrence of any other costs not..."
                  value={formData.variation}
                  onChange={(e) => handleInputChange('variation', e.target.value)}
                  style={{ width: '100%', resize: 'vertical', fontSize: '13px' }}
                />
              </div>
            </div>
          )}
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

export default Quotation;
