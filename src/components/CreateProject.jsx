import React, { useState, useRef, useEffect } from 'react';
import Toast from './Toast';
import SearchableDropdown from './SearchableDropdown';
import { CLASS_OPTIONS, DEPARTMENT_OPTIONS, SUBSIDIARY_OPTIONS, ADJUSTMENT_LOCATION_OPTIONS } from '../constants/dropdownOptions';
import './Enquiries.css';

const CreateProject = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [isSaved, setIsSaved] = useState(false);
  
  const [formData, setFormData] = useState({
    jobId: '',
    projectName: '',
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

  // Sales Person searchable dropdown state
  const [salesPersonSearch, setSalesPersonSearch] = useState('');
  const [salesPersonDropdownOpen, setSalesPersonDropdownOpen] = useState(false);
  const salesPersonDropdownRef = useRef(null);
  
  // Project Manager searchable dropdown state
  const [projectManagerSearch, setProjectManagerSearch] = useState('');
  const [projectManagerDropdownOpen, setProjectManagerDropdownOpen] = useState(false);
  const projectManagerDropdownRef = useRef(null);
  
  // Customer searchable dropdown state
  const [customerSearch, setCustomerSearch] = useState('');
  const [customerDropdownOpen, setCustomerDropdownOpen] = useState(false);
  const customerDropdownRef = useRef(null);

  // Customer options
  const customerOptions = [
    { id: '100-102', name: '100 Baroid Surface Solutions, Halliburton Energy Services Inc' },
    { id: '1000', name: '1000 TEAM LEAD CONSTRUCTION PTE LTD' },
    { id: '1001', name: '1001 TECH ONSHORE MEP-PREFABRICATORS PTE LTD' },
    { id: '1002', name: '1002 TECH MARINE OFFSHORE (S) PTE LTD' },
    { id: '1003', name: '1003 TECH ELECTRIC AUTOMATION PTE LTD' },
    { id: '1004', name: '1004 TECH OFFSHORE MARINE (DO) PTE LTD' },
    { id: '1005', name: '1005 TECH OFFSHORE MARINE (SV) PTE LTD' }
  ];

  // Sales Person options
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

  // Status options
  const statusOptions = ['Planning', 'In Progress', 'On Hold', 'Completed', 'Cancelled'];
  
  // Priority options
  const priorityOptions = ['Low', 'Medium', 'High', 'Critical'];

  // Filter customer options based on search
  const filteredCustomers = customerOptions.filter(customer =>
    customer.name.toLowerCase().includes(customerSearch.toLowerCase())
  );

  // Filter sales person options based on search
  const filteredSalesPersons = salesPersonOptions.filter(person =>
    person.name.toLowerCase().includes(salesPersonSearch.toLowerCase())
  );

  // Filter project manager options based on search
  const filteredProjectManagers = projectManagerOptions.filter(manager =>
    manager.name.toLowerCase().includes(projectManagerSearch.toLowerCase())
  );

  // Handle customer selection
  const handleCustomerSelect = (customer) => {
    handleFormChange('customer', customer.name);
    setCustomerSearch(customer.name);
    setCustomerDropdownOpen(false);
  };

  // Handle customer search input
  const handleCustomerSearchChange = (e) => {
    setCustomerSearch(e.target.value);
    setCustomerDropdownOpen(true);
    if (e.target.value !== formData.customer) {
      handleFormChange('customer', '');
    }
  };

  // Handle sales person selection
  const handleSalesPersonSelect = (person) => {
    handleFormChange('salesPerson', person.name);
    setSalesPersonSearch(person.name);
    setSalesPersonDropdownOpen(false);
  };

  // Handle sales person search input
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
      if (customerDropdownRef.current && !customerDropdownRef.current.contains(event.target)) {
        setCustomerDropdownOpen(false);
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
    <div className="create-enquiry">
      <div className="form-header">
        <div className="form-title">
          <i className="fas fa-project-diagram"></i>
          <h1>Create Project</h1>
        </div>
        <div className="form-actions">
          <button className="btn-action">
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-action">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-action" onClick={() => setCurrentPage('view-projects')}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="form-toolbar">
        <button type="submit" form="project-form" className="btn-toolbar-primary">
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          <i className="fas fa-times"></i>
          Cancel
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-copy"></i>
          Copy
        </button>
      </div>

      <form id="project-form" onSubmit={handleSubmit} className="enquiry-form">
        <div className="form-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label>Job ID *</label>
              <input
                type="text"
                name="jobId"
                value={formData.jobId}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Project Name *</label>
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            {/* Customer Searchable Dropdown */}
            <div className="form-group" ref={customerDropdownRef}>
              <label>Customer *</label>
              <div className="searchable-input-wrapper">
                <input
                  type="text"
                  value={customerSearch}
                  onChange={handleCustomerSearchChange}
                  onFocus={() => setCustomerDropdownOpen(true)}
                  className="form-control"
                  placeholder="Search customer..."
                  required
                />
                <i className="fas fa-search search-icon"></i>
                {customerDropdownOpen && (
                  <div className="searchable-dropdown-menu">
                    {filteredCustomers.length > 0 ? (
                      filteredCustomers.map((customer) => (
                        <div
                          key={customer.id}
                          className="searchable-dropdown-item"
                          onClick={() => handleCustomerSelect(customer)}
                        >
                          {customer.name}
                        </div>
                      ))
                    ) : (
                      <div className="searchable-dropdown-item no-results">
                        No customers found
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Sales Person Searchable Dropdown */}
            <div className="form-group" ref={salesPersonDropdownRef}>
              <label>Sales Person *</label>
              <div className="searchable-input-wrapper">
                <input
                  type="text"
                  value={salesPersonSearch}
                  onChange={handleSalesPersonSearchChange}
                  onFocus={() => setSalesPersonDropdownOpen(true)}
                  className="form-control"
                  placeholder="Search sales person..."
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
                        No sales person found
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Project Manager Searchable Dropdown */}
            <div className="form-group" ref={projectManagerDropdownRef}>
              <label>Project Manager *</label>
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

            <div className="form-group">
              <label>Status</label>
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
            <div className="form-group">
              <label>Priority</label>
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
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Project Location</label>
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
            <div className="form-group">
              <label>Customer Project No</label>
              <input
                type="text"
                name="customerProjectNo"
                value={formData.customerProjectNo}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group full-width">
              <label>Scope of Work</label>
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

        <div className="form-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label>Subsidiary *</label>
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
            <SearchableDropdown
              label="Department"
              options={DEPARTMENT_OPTIONS}
              value={formData.department}
              onChange={(value) => handleFormChange('department', value)}
              placeholder="Select or search department..."
            />
            <SearchableDropdown
              label="Class"
              options={CLASS_OPTIONS}
              value={formData.class}
              onChange={(value) => handleFormChange('class', value)}
              placeholder="Select or search class..."
            />
          </div>
        </div>

        <div className="form-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Financial Information</h3>
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label>Estimated Cost</label>
              <input
                type="number"
                step="0.01"
                name="estimatedCost"
                value={formData.estimatedCost}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Estimated Revenue</label>
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

        <div className="form-footer">
          <button type="submit" className="btn-toolbar-primary">
            <i className="fas fa-save"></i>
            Save
          </button>
          <button type="button" className="btn-toolbar" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
        </div>
      </form>

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
