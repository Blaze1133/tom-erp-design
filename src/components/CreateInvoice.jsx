import React, { useState } from 'react';
import Toast from './Toast';
import AddProjectForm from './AddProjectForm';
import AddCustomerModal from './AddCustomerModal';
import './Enquiries.css';

const CreateInvoice = ({ setCurrentPage, isEdit = false }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState('items');

  // Discount state
  const [discount, setDiscount] = useState('');
  const [confirmedDiscount, setConfirmedDiscount] = useState(0);

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
    invoiceNumber: isEdit ? 'I22TOMDQ00001' : 'To Be Generated',
    postingPeriod: 'Nov 2025',
    customer: isEdit ? 'Pacific Shipping Ltd' : '',
    project: '',
    dueDate: '',
    poNumber: '',
    date: '2025-11-06',
    startDate: '',
    contactPerson: '',
    endDate: '',
    memo: '',
    
    // Sales Information
    salesRep: '',
    salesEffectiveDate: '',
    
    // Classification
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    class: '',
    location: '',
    department: 'MEP',
    forInvoiceGrouping: false,
    
    // Items
    items: [],
    currency: 'SGD',
    exchangeRate: '1.00',
    
    // Shipping Information
    shippingCarrier: '',
    shippingAddress: '',
    
    // Billing Information
    terms: '',
    billingAddress: '',
    refBankPrint: '',
    paymentMode: '',
    
    // Accounting
    account: '10100 Accounts Receivable : Trade Debtors',
    
    // Communication
    toBePrinted: false,
    toBeEmailed: false,
    toBeFaxed: false,
    selectMessage: '',
    customerMessage: '',
    
    // System Information
    amountInWords: '',
    refCustomer: '',
    invoiceType: 'Invoice',
    
    // Custom
    testTransactionField: '',
    gstType: '0'
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
    customerOptions.push(customerData.companyName);
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

  // Calculation functions
  const calculateSubtotal = () => {
    return formData.items.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
  };

  const calculateTaxAmount = () => {
    return formData.items.reduce((sum, item) => {
      const amount = parseFloat(item.amount) || 0;
      const taxRate = 9.0;
      return sum + (amount * taxRate / 100);
    }, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() - confirmedDiscount + calculateTaxAmount();
  };

  const handleConfirmDiscount = () => {
    const discountValue = parseFloat(discount) || 0;
    setConfirmedDiscount(discountValue);
    showToast(`Discount of $${discountValue.toFixed(2)} applied successfully!`, 'success');
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    showToast('Invoice saved successfully!', 'success');
    setIsSaved(true);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Invoice cancelled', 'info');
    }
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-invoices');
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
      estimatedExtendedCost: 0.00,
      countryOfOrigin: '',
      hsCode: ''
    };
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };

  const updateItem = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
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
      estimatedExtendedCost: 0.00,
      countryOfOrigin: '',
      hsCode: ''
    };
    const newItems = [...formData.items.slice(0, index), newItem, ...formData.items.slice(index)];
    setFormData(prev => ({ ...prev, items: newItems }));
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
      estimatedExtendedCost: 0.00,
      countryOfOrigin: '',
      hsCode: ''
    };
    const newItems = [...formData.items.slice(0, index + 1), newItem, ...formData.items.slice(index + 1)];
    setFormData(prev => ({ ...prev, items: newItems }));
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

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-invoice"></i>
          <div>
            <h1>Invoice</h1>
            <div className="detail-subtitle">
              <span>{formData.invoiceNumber}</span>
              {formData.customer && <span>{formData.customer}</span>}
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
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        {isSaved && (
          <>
            <button className="btn-toolbar">
              <i className="fas fa-magic"></i>
              Auto Fill
            </button>
            <button className="btn-toolbar">
              <i className="fas fa-print"></i>
              Print
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
                <label>INVOICE #</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.invoiceNumber}
                  disabled
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
                <label>POSTING PERIOD <span className="required">*</span></label>
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
              <div className="detail-field" style={{ position: 'relative', zIndex: showCustomerDropdown ? 10001 : 'auto' }}>
                <label className="form-label required">CUSTOMER</label>
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

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

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
              <div className="detail-field">
                <label>SALES EFFECTIVE DATE</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.salesEffectiveDate}
                  onChange={(e) => handleInputChange('salesEffectiveDate', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>CREATED FROM</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.createdFrom || ''}
                  onChange={(e) => handleInputChange('createdFrom', e.target.value)}
                  placeholder="Sales Order #"
                />
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

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
                  <option value="">Select...</option>
                  <option>Consumable Item</option>
                  <option>Fabrication</option>
                  <option>Installation work</option>
                </select>
              </div>
              <div className="detail-field">
                <label>LOCATION</label>
                <select 
                  className="form-control"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                >
                  <option value="">Select...</option>
                  <option>Singapore (MEP)</option>
                  <option>Hong Hang Shipyard</option>
                  <option>Mega yard</option>
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
                  <option>MEP</option>
                  <option>Engineering</option>
                  <option>Operations</option>
                </select>
              </div>
              <div className="detail-field">
                <label>CONTACT PERSON</label>
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
          </div>

          <div className="tabs-content">
            {/* Items Tab */}
            {activeTab === 'items' && (
              <div className="form-section">
                <h2 className="section-title">
                  <i className="fas fa-boxes"></i>
                  Items
                </h2>
                
                <div className="detail-grid" style={{ gridTemplateColumns: '1fr 1fr', marginBottom: '1rem' }}>
                  <div className="detail-field">
                    <label>CURRENCY <span className="required">*</span></label>
                    <select 
                      className="form-control"
                      value={formData.currency}
                      onChange={(e) => handleInputChange('currency', e.target.value)}
                    >
                      <option>SGD</option>
                      <option>USD</option>
                      <option>EUR</option>
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>EXCHANGE RATE <span className="required">*</span></label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.exchangeRate}
                      onChange={(e) => handleInputChange('exchangeRate', e.target.value)}
                    />
                  </div>
                </div>

                <div className="items-table-wrapper">
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
                              value={item.item}
                              onChange={(e) => updateItem(item.id, 'item', e.target.value)}
                              style={{ minWidth: '200px', height: '40px' }}
                            />
                          </td>
                          <td>
                            <textarea 
                              className="form-control"
                              value={item.description}
                              onChange={(e) => updateItem(item.id, 'description', e.target.value)}
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
                              style={{ minWidth: '100px', height: '40px' }}
                            />
                          </td>
                          <td>
                            <input 
                              type="text" 
                              className="form-control"
                              value={item.units}
                              onChange={(e) => updateItem(item.id, 'units', e.target.value)}
                              style={{ minWidth: '120px', height: '40px' }}
                            />
                          </td>
                          <td>
                            <input 
                              type="text" 
                              className="form-control"
                              value={item.priceLevel}
                              onChange={(e) => updateItem(item.id, 'priceLevel', e.target.value)}
                              style={{ minWidth: '110px', height: '40px' }}
                            />
                          </td>
                          <td>
                            <input 
                              type="number" 
                              className="form-control"
                              value={item.rate}
                              onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                              style={{ minWidth: '120px', height: '40px' }}
                              step="0.01"
                            />
                          </td>
                          <td>
                            <input 
                              type="number" 
                              className="form-control"
                              value={item.amount}
                              onChange={(e) => updateItem(item.id, 'amount', parseFloat(e.target.value) || 0)}
                              style={{ minWidth: '120px', height: '40px' }}
                              step="0.01"
                            />
                          </td>
                          <td>
                            <input 
                              type="text" 
                              className="form-control"
                              value={item.taxCode}
                              onChange={(e) => updateItem(item.id, 'taxCode', e.target.value)}
                              style={{ minWidth: '110px', height: '40px' }}
                            />
                          </td>
                          <td>
                            <input 
                              type="number" 
                              className="form-control"
                              value={item.grossAmount}
                              onChange={(e) => updateItem(item.id, 'grossAmount', parseFloat(e.target.value) || 0)}
                              style={{ minWidth: '110px', height: '40px' }}
                              step="0.01"
                            />
                          </td>
                          <td>
                            <select 
                              className="form-control"
                              value={item.class}
                              onChange={(e) => updateItem(item.id, 'class', e.target.value)}
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
                              value={item.costEstimateType}
                              onChange={(e) => updateItem(item.id, 'costEstimateType', e.target.value)}
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
                              value={item.estimatedExtendedCost}
                              onChange={(e) => updateItem(item.id, 'estimatedExtendedCost', parseFloat(e.target.value) || 0)}
                              style={{ minWidth: '180px', height: '40px' }}
                              step="0.01"
                            />
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

                <button className="add-item-btn" onClick={handleAddItem}>
                  <i className="fas fa-plus"></i>
                  Add Item
                </button>

                {formData.items.length > 0 && (
                  <div className="summary-grid" style={{ marginTop: '1rem' }}>
                    <div className="summary-card">
                      <div className="summary-title">Subtotal</div>
                      <div className="summary-value">${calculateSubtotal().toFixed(2)}</div>
                    </div>
                    <div className="summary-card">
                      <div className="summary-title">Discount</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <input 
                          type="number" 
                          className="summary-value"
                          value={discount}
                          onChange={(e) => setDiscount(e.target.value)}
                          min="0"
                          step="0.01"
                          placeholder="0.00"
                          style={{ 
                            border: '1px solid #e0e0e0',
                            borderRadius: '4px',
                            padding: '4px 8px',
                            textAlign: 'right',
                            fontSize: '1.25rem',
                            fontWeight: '600',
                            flex: 1,
                            background: '#fff'
                          }}
                        />
                        <button
                          onClick={handleConfirmDiscount}
                          style={{
                            background: '#28a745',
                            border: 'none',
                            borderRadius: '4px',
                            color: 'white',
                            cursor: 'pointer',
                            padding: '6px 10px',
                            fontSize: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minWidth: '32px',
                            height: '32px'
                          }}
                          title="Confirm discount"
                        >
                          <i className="fas fa-check"></i>
                        </button>
                      </div>
                      {confirmedDiscount > 0 && (
                        <div style={{ 
                          fontSize: '0.9rem', 
                          color: '#28a745', 
                          marginTop: '4px',
                          fontWeight: '500'
                        }}>
                          Applied: ${confirmedDiscount.toFixed(2)}
                        </div>
                      )}
                    </div>
                    <div className="summary-card">
                      <div className="summary-title">Tax (9%)</div>
                      <div className="summary-value">${calculateTaxAmount().toFixed(2)}</div>
                    </div>
                    <div className="summary-card" style={{ background: 'var(--gray-ultralight)' }}>
                      <div className="summary-title">Total Amount</div>
                      <div className="summary-value" style={{ color: 'var(--red-primary)' }}>${calculateTotal().toFixed(2)}</div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Shipping Tab */}
            {activeTab === 'shipping' && (
              <div className="form-section">
                <div className="detail-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                  <div className="detail-field">
                    <label>SHIPPING CARRIER</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.shippingCarrier}
                      onChange={(e) => handleInputChange('shippingCarrier', e.target.value)}
                      placeholder="Enter shipping carrier"
                    />
                  </div>
                  <div className="detail-field">
                    <label>SHIPPING ADDRESS</label>
                    <textarea 
                      className="form-control"
                      value={formData.shippingAddress}
                      onChange={(e) => handleInputChange('shippingAddress', e.target.value)}
                      placeholder="Enter shipping address"
                      rows="3"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div className="form-section">
                <div className="detail-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                  <div className="detail-field">
                    <label>TERMS</label>
                    <select 
                      className="form-control"
                      value={formData.terms}
                      onChange={(e) => handleInputChange('terms', e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option>Net 30</option>
                      <option>Net 60</option>
                      <option>Due on Receipt</option>
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>BILLING ADDRESS</label>
                    <textarea 
                      className="form-control"
                      value={formData.billingAddress}
                      onChange={(e) => handleInputChange('billingAddress', e.target.value)}
                      placeholder="Enter billing address"
                      rows="3"
                    />
                  </div>
                  <div className="detail-field">
                    <label>REF BANK PRINT</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.refBankPrint}
                      onChange={(e) => handleInputChange('refBankPrint', e.target.value)}
                    />
                  </div>
                  <div className="detail-field">
                    <label>PAYMENT MODE</label>
                    <select 
                      className="form-control"
                      value={formData.paymentMode}
                      onChange={(e) => handleInputChange('paymentMode', e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option>Bank Transfer</option>
                      <option>Check</option>
                      <option>Cash</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Accounting Tab */}
            {activeTab === 'accounting' && (
              <div className="form-section">
                <div className="detail-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '500px' }}>
                  <div className="detail-field">
                    <label>ACCOUNT</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.account}
                      onChange={(e) => handleInputChange('account', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Communication Tab */}
            {activeTab === 'communication' && (
              <div className="form-section">
                <div className="detail-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                  <div className="detail-field">
                    <div style={{ display: 'flex', gap: '2rem' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <input 
                          type="checkbox"
                          checked={formData.toBePrinted}
                          onChange={(e) => handleInputChange('toBePrinted', e.target.checked)}
                        />
                        TO BE PRINTED
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <input 
                          type="checkbox"
                          checked={formData.toBeEmailed}
                          onChange={(e) => handleInputChange('toBeEmailed', e.target.checked)}
                        />
                        TO BE EMAILED
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <input 
                          type="checkbox"
                          checked={formData.toBeFaxed}
                          onChange={(e) => handleInputChange('toBeFaxed', e.target.checked)}
                        />
                        TO BE FAXED
                      </label>
                    </div>
                  </div>
                  <div className="detail-field">
                    <label>SELECT MESSAGE</label>
                    <select 
                      className="form-control"
                      value={formData.selectMessage}
                      onChange={(e) => handleInputChange('selectMessage', e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option>Standard Message</option>
                      <option>Custom Message</option>
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>CUSTOMER MESSAGE</label>
                    <textarea 
                      className="form-control"
                      value={formData.customerMessage}
                      onChange={(e) => handleInputChange('customerMessage', e.target.value)}
                      placeholder="Enter customer message"
                      rows="4"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* System Information Tab */}
            {activeTab === 'system' && (
              <div className="form-section">
                <div className="detail-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '500px' }}>
                  <div className="detail-field">
                    <label>AMOUNT IN WORDS</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.amountInWords}
                      onChange={(e) => handleInputChange('amountInWords', e.target.value)}
                      disabled
                    />
                  </div>
                  <div className="detail-field">
                    <label>REF CUSTOMER</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.refCustomer}
                      onChange={(e) => handleInputChange('refCustomer', e.target.value)}
                    />
                  </div>
                  <div className="detail-field">
                    <label>INVOICE TYPE</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.invoiceType}
                      onChange={(e) => handleInputChange('invoiceType', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Custom Tab */}
            {activeTab === 'custom' && (
              <div className="form-section">
                <div className="detail-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '600px' }}>
                  <div className="detail-field">
                    <label>TEST TRANSACTION FIELD</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.testTransactionField}
                      onChange={(e) => handleInputChange('testTransactionField', e.target.value)}
                    />
                  </div>
                  <div className="detail-field">
                    <label>GST TYPE</label>
                    <select 
                      className="form-control"
                      value={formData.gstType}
                      onChange={(e) => handleInputChange('gstType', e.target.value)}
                    >
                      <option value="0">0 - Standard</option>
                      <option value="1">1 - Zero Rated</option>
                      <option value="2">2 - Exempt</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Customer Modal */}
      <AddCustomerModal 
        show={showAddCustomer}
        onClose={() => setShowAddCustomer(false)}
        onSave={handleSaveNewCustomer}
      />

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

export default CreateInvoice;
