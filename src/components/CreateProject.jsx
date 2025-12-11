import React, { useState, useRef, useEffect } from 'react';
import Toast from './Toast';
import SearchableDropdown from './SearchableDropdown';
import AddProjectForm from './AddProjectForm';
import AddCustomerForm from './AddCustomerForm';
import { CLASS_OPTIONS, DEPARTMENT_OPTIONS, SUBSIDIARY_OPTIONS, ADJUSTMENT_LOCATION_OPTIONS } from '../constants/dropdownOptions';
import './Enquiries.css';

const CreateProject = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [isSaved, setIsSaved] = useState(false);
  
  const [formData, setFormData] = useState({
    projectId: '',
    projectDescription: '',
    projectName: '',
    secondaryProjectName: '',
    customer: '',
    salesPerson: '',
    projectManager: '',
    startDate: '',
    endDate: '',
    projectLocation: '',
    scopeOfWork: '',
    subsidiary: '',
    department: '',
    class: '',
    customerProjectNo: '',
    estimatedCost: '',
    estimatedRevenue: '',
    status: 'Planning',
    priority: 'Medium'
  });

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

  // Sales Representative searchable dropdown state
  const [salesPersonSearch, setSalesPersonSearch] = useState('');
  const [salesPersonDropdownOpen, setSalesPersonDropdownOpen] = useState(false);
  
  // Secondary Project Name edit state
  const [secondaryProjectNameHovered, setSecondaryProjectNameHovered] = useState(false);
  const [secondaryProjectNameEditable, setSecondaryProjectNameEditable] = useState(false);
  const salesPersonDropdownRef = useRef(null);
  
  // Project Manager searchable dropdown state
  const [projectManagerSearch, setProjectManagerSearch] = useState('');
  const [projectManagerDropdownOpen, setProjectManagerDropdownOpen] = useState(false);
  const projectManagerDropdownRef = useRef(null);

  // Customer options for dropdown
  const customerOptions = [
    '612 Raise Pte Ltd',
    '100 Baroid Surface Solutions, Halliburton Energy Services Inc',
    '1000 TEAM LEAD CONSTRUCTION PTE LTD',
    '1001 TECH ONSHORE MEP-PREFABRICATORS PTE LTD',
    '1002 TECH MARINE OFFSHORE (S) PTE LTD',
    '1003 TECH ELECTRIC AUTOMATION PTE LTD',
    '1004 TECH OFFSHORE MARINE (DO) PTE LTD',
    '1005 TECH OFFSHORE MARINE (SV) PTE LTD'
  ];

  // Sales Representative options
  const salesPersonOptions = [
    { id: 'TD0059', name: 'TD0059 Kumarasamy Madhavan Subash' },
    { id: 'TSV025', name: 'TSV025 Sasapu Venkateshwara Rao' },
    { id: 'MEP01', name: 'MEP01 001 JEGANATHAN SUNDARAVELU' },
    { id: 'TOM01', name: 'TOM01 John Smith' },
    { id: 'TOM02', name: 'TOM02 Jane Doe' }
  ];

  // Project Manager options
  const projectManagerOptions = [
    { id: 'PM001', name: 'PM001 Michael Chen' },
    { id: 'PM002', name: 'PM002 Sarah Williams' },
    { id: 'PM003', name: 'PM003 David Kumar' },
    { id: 'PM004', name: 'PM004 Lisa Anderson' },
    { id: 'PM005', name: 'PM005 Robert Lee' }
  ];

  // Project options for dropdown (linked to customers)
  const projectOptions = [
    { id: 1, name: 'Marine Equipment Supply – Q1 2024', customer: '612 Raise Pte Ltd', jobId: 'PRJ-001', startDate: '2024-01-15', location: 'Singapore', scopeOfWork: 'Supply and installation of marine equipment' },
    { id: 2, name: 'Hull Repair Project', customer: '1000 TEAM LEAD CONSTRUCTION PTE LTD', jobId: 'PRJ-002', startDate: '2024-02-01', location: 'Jurong Port', scopeOfWork: 'Hull repair and maintenance' },
    { id: 3, name: 'Piping System Upgrade', customer: '1001 TECH ONSHORE MEP-PREFABRICATORS PTE LTD', jobId: 'PRJ-003', startDate: '2024-03-10', location: 'Tuas', scopeOfWork: 'Piping system upgrade and testing' }
  ];

  // Status options
  const statusOptions = ['Planning', 'In Progress', 'On Hold', 'Completed', 'Cancelled'];
  
  // Priority options
  const priorityOptions = ['Low', 'Medium', 'High', 'Critical'];


  // Filter sales representative options based on search
  const filteredSalesPersons = salesPersonOptions.filter(person =>
    person.name.toLowerCase().includes(salesPersonSearch.toLowerCase())
  );

  // Filter project manager options based on search
  const filteredProjectManagers = projectManagerOptions.filter(manager =>
    manager.name.toLowerCase().includes(projectManagerSearch.toLowerCase())
  );

  // Customer handlers
  const handleCustomerSelect = (customer) => {
    handleFormChange('customer', customer);
    setShowCustomerDropdown(false);
    setCustomerSearch('');
  };

  const handleCustomerSearchChange = (e) => {
    const value = e.target.value;
    setCustomerSearch(value);
    handleFormChange('customer', value);
    
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

  // Project handlers
  const handleProjectSelect = (project) => {
    handleFormChange('project', project.name);
    setShowProjectDropdown(false);
    setProjectSearch('');
  };

  const handleProjectSearchChange = (e) => {
    const value = e.target.value;
    setProjectSearch(value);
    handleFormChange('project', value);
    
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

  const handleSaveNewCustomer = (customerData) => {
    // Add the new customer to the options list
    customerOptions.push(customerData.companyName);
    // Set it as selected
    handleFormChange('customer', customerData.companyName);
    setShowAddCustomer(false);
    showToast('New customer added successfully!', 'success');
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
      scopeOfWork: projectData.scopeOfWork
    };
    projectOptions.push(newProject);
    // Set it as selected
    handleFormChange('project', newProject.name);
    setShowAddProject(false);
    showToast('New project added successfully!', 'success');
  };

  // Handle sales representative selection
  const handleSalesPersonSelect = (person) => {
    handleFormChange('salesPerson', person.name);
    setSalesPersonSearch(person.name);
    setSalesPersonDropdownOpen(false);
  };

  // Handle sales representative search input
  const handleSalesPersonSearchChange = (e) => {
    setSalesPersonSearch(e.target.value);
    setSalesPersonDropdownOpen(true);
    if (e.target.value !== formData.salesPerson) {
      handleFormChange('salesPerson', '');
    }
  };

  // Handle project manager selection
  const handleProjectManagerSelect = (manager) => {
    handleFormChange('projectManager', manager.name);
    setProjectManagerSearch(manager.name);
    setProjectManagerDropdownOpen(false);
  };

  // Handle project manager search input
  const handleProjectManagerSearchChange = (e) => {
    setProjectManagerSearch(e.target.value);
    setProjectManagerDropdownOpen(true);
    if (e.target.value !== formData.projectManager) {
      handleFormChange('projectManager', '');
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (salesPersonDropdownRef.current && !salesPersonDropdownRef.current.contains(event.target)) {
        setSalesPersonDropdownOpen(false);
      }
      if (projectManagerDropdownRef.current && !projectManagerDropdownRef.current.contains(event.target)) {
        setProjectManagerDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleFormChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaved(true);
    showToast('Project created successfully!', 'success');
    setTimeout(() => {
      if (setCurrentPage) {
        setCurrentPage('view-projects');
      }
    }, 1500);
  };

  const handleCancel = () => {
    if (setCurrentPage) {
      setCurrentPage('view-projects');
    }
  };

  const handleSave = () => {
    setIsSaved(true);
    showToast('Project saved successfully!', 'success');
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-project-diagram"></i>
          <div>
            <h1>Project</h1>
            <div className="detail-subtitle">
              <span># To be generated – New Project</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={() => setCurrentPage && setCurrentPage('view-projects')}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar" onClick={handleCancel}>
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
              <i className="fas fa-copy"></i>
              Copy
            </button>
            <button className="btn-toolbar">
              <i className="fas fa-print"></i>
              Print
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
          <div className="section-body" style={{ padding: '1rem' }}>
            <div className="detail-grid" style={{ gap: '0.5rem' }}>
              {/* Project ID */}
              <div className="detail-field">
                <label>PROJECT ID <span style={{ color: 'red' }}>*</span></label>
                <input
                  type="text"
                  name="projectId"
                  value={formData.projectId}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="e.g., TOM-001"
                  required
                />
              </div>
              
              {/* Project Name */}
              <div className="detail-field">
                <label>PROJECT NAME <span style={{ color: 'red' }}>*</span></label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter project name"
                  required
                />
              </div>
              
              {/* Customer Dropdown */}
              <div className="detail-field" style={{ position: 'relative', zIndex: showCustomerDropdown ? 10001 : 'auto' }}>
                <label className="form-label required">Customer <span style={{ color: 'red' }}>*</span></label>
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
                          backgroundColor: '#ffffff', 
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
                                borderBottom: '1px solid #f5f5f5',
                                backgroundColor: '#ffffff'
                              }}
                              onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                              onMouseLeave={(e) => e.target.style.backgroundColor = '#ffffff'}
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

            {/* Sales Representative Searchable Dropdown */}
            <div className="detail-field" ref={salesPersonDropdownRef} style={{ position: 'relative', zIndex: salesPersonDropdownOpen ? 1001 : 1 }}>
              <label>SALES REPRESENTATIVE <span style={{ color: 'red' }}>*</span></label>
              <div className="searchable-input-wrapper">
                <input
                  type="text"
                  value={salesPersonSearch}
                  onChange={handleSalesPersonSearchChange}
                  onFocus={() => setSalesPersonDropdownOpen(true)}
                  className="form-control"
                  placeholder="Search sales representative..."
                  required
                />
                <i className="fas fa-search search-icon"></i>
                {salesPersonDropdownOpen && (
                  <div className="searchable-dropdown-menu">
                    {filteredSalesPersons.length > 0 ? (
                      filteredSalesPersons.map((person) => (
                        <div
                          key={person.id}
                          className="searchable-dropdown-item"
                          onClick={() => handleSalesPersonSelect(person)}
                        >
                          {person.name}
                        </div>
                      ))
                    ) : (
                      <div className="searchable-dropdown-item no-results">
                        No sales representative found
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Project Manager Searchable Dropdown */}
            <div className="detail-field" ref={projectManagerDropdownRef} style={{ position: 'relative', zIndex: projectManagerDropdownOpen ? 1001 : 1 }}>
              <label>PROJECT MANAGER <span style={{ color: 'red' }}>*</span></label>
              <div className="searchable-input-wrapper">
                <input
                  type="text"
                  value={projectManagerSearch}
                  onChange={handleProjectManagerSearchChange}
                  onFocus={() => setProjectManagerDropdownOpen(true)}
                  className="form-control"
                  placeholder="Search project manager..."
                  required
                />
                <i className="fas fa-search search-icon"></i>
                {projectManagerDropdownOpen && (
                  <div className="searchable-dropdown-menu">
                    {filteredProjectManagers.length > 0 ? (
                      filteredProjectManagers.map((manager) => (
                        <div
                          key={manager.id}
                          className="searchable-dropdown-item"
                          onClick={() => handleProjectManagerSelect(manager)}
                        >
                          {manager.name}
                        </div>
                      ))
                    ) : (
                      <div className="searchable-dropdown-item no-results">
                        No project manager found
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="detail-field">
              <label>STATUS</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="form-control"
              >
                {statusOptions.map((status, index) => (
                  <option key={index} value={status}>{status}</option>
                ))}
              </select>
            </div>
            <div className="detail-field">
              <label>PRIORITY</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                className="form-control"
              >
                {priorityOptions.map((priority, index) => (
                  <option key={index} value={priority}>{priority}</option>
                ))}
              </select>
            </div>
            <div className="detail-field">
              <label>PROJECT LOCATION</label>
              <select
                name="projectLocation"
                value={formData.projectLocation}
                onChange={handleInputChange}
                className="form-control"
              >
                <option value="">Select Location</option>
                {ADJUSTMENT_LOCATION_OPTIONS.map((location, index) => (
                  <option key={index} value={location}>{location}</option>
                ))}
              </select>
            </div>
            <div className="detail-field full-width">
              <label>PROJECT DESCRIPTION</label>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter project description"
                rows="3"
                style={{ 
                  minHeight: '60px',
                  resize: 'both',
                  overflow: 'auto'
                }}
              />
            </div>
            <div className="detail-field full-width">
              <label>SCOPE OF WORK</label>
              <textarea
                name="scopeOfWork"
                value={formData.scopeOfWork}
                onChange={handleInputChange}
                className="form-control"
                rows="3"
              />
            </div>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY <span style={{ color: 'red' }}>*</span></label>
                <select
                  name="subsidiary"
                  value={formData.subsidiary}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                >
                  <option value="">Select Subsidiary</option>
                  {SUBSIDIARY_OPTIONS.map((subsidiary, index) => (
                    <option key={index} value={subsidiary}>{subsidiary}</option>
                  ))}
                </select>
              </div>
              <div className="detail-field">
                <SearchableDropdown
                  label="DEPARTMENT"
                  options={DEPARTMENT_OPTIONS}
                  value={formData.department}
                  onChange={(value) => handleFormChange('department', value)}
                  placeholder="Select or search department..."
                />
              </div>
              <div className="detail-field">
                <SearchableDropdown
                  label="CLASS"
                  options={CLASS_OPTIONS}
                  value={formData.class}
                  onChange={(value) => handleFormChange('class', value)}
                  placeholder="Select or search class..."
                />
              </div>
              <div className="detail-field">
                <label>SECONDARY PROJECT NAME</label>
                <div 
                  style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  onMouseEnter={() => setSecondaryProjectNameHovered(true)}
                  onMouseLeave={() => setSecondaryProjectNameHovered(false)}
                >
                  <input
                    type="text"
                    name="secondaryProjectName"
                    value={formData.secondaryProjectName || formData.projectName}
                    className="form-control"
                    readOnly={!secondaryProjectNameEditable}
                    onChange={(e) => setFormData({ ...formData, secondaryProjectName: e.target.value })}
                    style={{ 
                      background: secondaryProjectNameEditable ? '#fff' : '#f5f5f5', 
                      cursor: secondaryProjectNameEditable ? 'text' : 'not-allowed',
                      flex: 1
                    }}
                    placeholder="Same as Project Name"
                  />
                  {secondaryProjectNameHovered && (
                    <button
                      type="button"
                      onClick={() => setSecondaryProjectNameEditable(!secondaryProjectNameEditable)}
                      style={{
                        position: 'absolute',
                        right: '10px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: secondaryProjectNameEditable ? '#28a745' : '#007bff',
                        fontSize: '14px',
                        padding: '4px 8px'
                      }}
                      title={secondaryProjectNameEditable ? 'Lock' : 'Edit'}
                    >
                      <i className={secondaryProjectNameEditable ? 'fas fa-check' : 'fas fa-edit'}></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Information */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Financial Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>START DATE</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="detail-field">
                <label>END DATE</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="detail-field">
                <label>ESTIMATED COST</label>
                <input
                  type="number"
                  step="0.01"
                  name="estimatedCost"
                  value={formData.estimatedCost}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="detail-field">
                <label>ESTIMATED REVENUE</label>
                <input
                  type="number"
                  step="0.01"
                  name="estimatedRevenue"
                  value={formData.estimatedRevenue}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
            </div>
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
            <div className="modal-body" style={{ padding: '2rem' }}>
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

export default CreateProject;
