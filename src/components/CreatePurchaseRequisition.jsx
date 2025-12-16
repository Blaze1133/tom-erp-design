import React, { useState, useEffect } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreatePurchaseRequisition = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('lines');
  const [systemInfoSubTab, setSystemInfoSubTab] = useState('system-notes');

  const [isSaved, setIsSaved] = useState(false);
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

  // Form state
  const [formData, setFormData] = useState({
    prId: 'To Be Generated',
    project: '',
    projectManager: '',
    requisitionId: 'To Be Generated',
    amount: 0.00,
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    projectName: '',
    requestedBy: '',
    salesRepresentative: '',
    requestedType: 'Project PR',
    requireDate: '',
    currency: 'SGD',
    exchangeRate: 1.00,
    date: new Date().toISOString().split('T')[0],
    postingPeriod: 'Nov 2024',
    memo: '',
    status: 'Pending Submit',
    approvalRejectionRemarks: '',
    items: []
  });

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'Tech Electric & Automation Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Offshore Marine (DQ) Pte Ltd',
    'Tech Offshore Marine (s) Pte Ltd',
    'Tech Offshore Marine (SV) Pte Ltd'
  ];

  const statusOptions = [
    'Pending Submit',
    'Pending to Process PO',
    'Rejected/Cancelled',
    'Partial Ordered',
    'Fully Ordered',
    'Pending Manager Approval',
    'Pending Logistic Approval',
    'Delivered And Closed'
  ];

  const requestedTypes = [
    '- New -',
    'Project PR',
    'Department PR',
    'Store Requisition'
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

  const salesRepOptions = [
    'John Smith',
    'Sarah Johnson',
    'Michael Chen',
    'Emily Wong',
    'David Kumar'
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

  const handleProjectSearchChange = (e) => {
    const value = e.target.value;
    setProjectSearch(value);
    handleFormChange('projectName', value);
    if (value) {
      setFilteredProjects(projectOptions.filter(p => p.toLowerCase().includes(value.toLowerCase())));
    } else {
      setFilteredProjects([]);
    }
  };

  const handleProjectSelect = (project) => {
    handleFormChange('project', project);
    handleFormChange('projectName', project);
    setProjectSearch(project);
    // Auto-populate project manager based on project
    const projectManagers = {
      'Marine Equipment Supply - Q1 2024': 'John Tan',
      'Offshore Platform Parts Delivery': 'Mary Lim',
      'Fabrication Services Contract': 'Subbiah',
      'Ship Repair Project 2024': 'JEGANATHAN SUNDARAVELU',
      'Piping Installation - Mega Yard': 'Mahendran S/O Minisamy'
    };
    handleFormChange('projectManager', projectManagers[project] || '');
    setShowProjectDropdown(false);
  };

  const handleRequestedBySearchChange = (e) => {
    const value = e.target.value;
    setRequestedBySearch(value);
    handleFormChange('requestedBy', value);
    if (value) {
      setFilteredRequestedBy(requestedByOptions.filter(r => r.toLowerCase().includes(value.toLowerCase())));
    } else {
      setFilteredRequestedBy([]);
    }
  };

  const handleRequestedBySelect = (person) => {
    handleFormChange('requestedBy', person);
    setRequestedBySearch(person);
    setShowRequestedByDropdown(false);
  };

  const handleSaveRequisition = () => {
    setIsSaved(true);
    showToast('Purchase Requisition saved successfully!', 'success');
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-purchase-requisition');
    }
  };

  const handleList = () => {
    if (setCurrentPage) {
      setCurrentPage('view-purchase-requisition');
    }
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to close this transaction? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-purchase-requisition');
      }
    }
  };

  const handleAddItem = () => {
    const newItem = {
      id: formData.items.length + 1,
      itemCategory: '',
      itemCode: '',
      itemDescription: '',
      unitType: 'PCS',
      qty: 0,
      preferredVendor: '',
      preferredSequence: '1',
      unitPrice: 0.00,
      amount: 0.00,
      bidCreated: '',
      memo: '',
      name: '',
      department: '',
      class: '',
      poQuantity: '',
      rclQuantity: ''
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
    };
    if (activeMenu !== null) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeMenu]);

  const handleInsertAbove = (index) => {
    const newItem = {
      id: Date.now(),
      itemCategory: '',
      itemCode: '',
      itemDescription: '',
      unitType: 'PCS',
      qty: 0,
      preferredVendor: '',
      preferredSequence: '1',
      unitPrice: 0.00,
      amount: 0.00,
      bidCreated: '',
      memo: '',
      name: '',
      department: '',
      class: '',
      poQuantity: '',
      rclQuantity: ''
    };
    setFormData(prev => ({
      ...prev,
      items: [...prev.items.slice(0, index), newItem, ...prev.items.slice(index)]
    }));
  };

  const handleInsertBelow = (index) => {
    const newItem = {
      id: Date.now(),
      itemCategory: '',
      itemCode: '',
      itemDescription: '',
      unitType: 'PCS',
      qty: 0,
      preferredVendor: '',
      preferredSequence: '1',
      unitPrice: 0.00,
      amount: 0.00,
      bidCreated: '',
      memo: '',
      name: '',
      department: '',
      class: '',
      poQuantity: '',
      rclQuantity: ''
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

  const calculateSubtotal = () => {
    return formData.items.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-alt"></i>
          <div>
            <h1>Purchase Requisition</h1>
            <div className="detail-subtitle">
              <span># To be generated – New Purchase Requisition</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={handleList}>
            <i className="fas fa-list"></i>
            List
          </button>
          <button className="btn-action">
            <i className="fas fa-search"></i>
            Search
          </button>
          <button className="btn-action">
            <i className="fas fa-cog"></i>
            Customize
          </button>
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
        <button className="btn-toolbar-primary" onClick={handleSaveRequisition}>
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
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>PR ID *</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.prId}
                  onChange={(e) => handleFormChange('prId', e.target.value)}
                />
              </div>
              <div className="detail-field" style={{ position: 'relative', zIndex: showProjectDropdown ? 1001 : 1 }}>
                <label>PROJECT *</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="text"
                    className="form-control"
                    value={formData.project}
                    onChange={(e) => {
                      const value = e.target.value;
                      handleFormChange('project', value);
                      if (value) {
                        setFilteredProjects(projectOptions.filter(p => p.toLowerCase().includes(value.toLowerCase())));
                        setShowProjectDropdown(true);
                      } else {
                        setFilteredProjects([]);
                        setShowProjectDropdown(false);
                      }
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (formData.project) {
                        setFilteredProjects(projectOptions.filter(p => p.toLowerCase().includes(formData.project.toLowerCase())));
                      }
                      setShowProjectDropdown(true);
                    }}
                    onFocus={(e) => {
                      e.stopPropagation();
                      if (formData.project) {
                        setFilteredProjects(projectOptions.filter(p => p.toLowerCase().includes(formData.project.toLowerCase())));
                      }
                      setShowProjectDropdown(true);
                    }}
                    placeholder="Type to search..."
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
                          zIndex: 999 
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowProjectDropdown(false);
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
                        {(filteredProjects.length > 0 ? filteredProjects : projectOptions).map((project, idx) => (
                          <div 
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleProjectSelect(project);
                              setFilteredProjects([]);
                            }}
                            style={{ 
                              padding: '10px 12px', 
                              cursor: 'pointer', 
                              fontSize: '13px',
                              borderBottom: idx < (filteredProjects.length > 0 ? filteredProjects : projectOptions).length - 1 ? '1px solid #f0f0f0' : 'none',
                              backgroundColor: 'white'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                          >
                            {project}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="detail-field">
                <label>PROJECT MANAGER</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.projectManager}
                  disabled
                  style={{ backgroundColor: '#f5f5f5', cursor: 'not-allowed' }}
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
                <label>STATUS *</label>
                <select 
                  className="form-control"
                  value={formData.status}
                  onChange={(e) => handleFormChange('status', e.target.value)}
                >
                  {statusOptions.map((status, index) => (
                    <option key={index} value={status}>{status}</option>
                  ))}
                </select>
              </div>
              <div className="detail-field">
                <label>SALES REPRESENTATIVE</label>
                <select 
                  className="form-control"
                  value={formData.salesRepresentative}
                  onChange={(e) => handleFormChange('salesRepresentative', e.target.value)}
                >
                  <option value="">Select...</option>
                  {salesRepOptions.map((rep, index) => (
                    <option key={index} value={rep}>{rep}</option>
                  ))}
                </select>
              </div>
              <div className="detail-field">
                <label>MEMO</label>
                <textarea 
                  className="form-control"
                  rows="3"
                  value={formData.memo}
                  onChange={(e) => handleFormChange('memo', e.target.value)}
                  placeholder="Enter memo"
                  style={{ resize: 'vertical' }}
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
                  <option value="">Select...</option>
                  {subsidiaries.map((sub, index) => (
                    <option key={index} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>
              <div className="detail-field">
                <label>APPROVAL REJECTION REMARKS</label>
                <textarea 
                  className="form-control"
                  rows="2"
                  value={formData.approvalRejectionRemarks}
                  onChange={(e) => handleFormChange('approvalRejectionRemarks', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>REQUESTED TYPE</label>
                <select 
                  className="form-control"
                  value={formData.requestedType}
                  onChange={(e) => handleFormChange('requestedType', e.target.value)}
                >
                  {requestedTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="detail-field">
                <label>REQUIRE DATE</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.requireDate}
                  onChange={(e) => handleFormChange('requireDate', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Tabbed Interface */}
        <div className="detail-tabs" style={{ marginTop: '2rem' }}>
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'lines' ? 'active' : ''}`} onClick={() => setActiveTab('lines')}>Lines</button>
            <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>Communication</button>
            <button className={`tab-btn ${activeTab === 'system-info' ? 'active' : ''}`} onClick={() => setActiveTab('system-info')}>System Information</button>
            <button className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`} onClick={() => setActiveTab('custom')}>Custom</button>
            <button className={`tab-btn ${activeTab === 'gl-impact' ? 'active' : ''}`} onClick={() => setActiveTab('gl-impact')}>GL Impact</button>
          </div>

          {/* Lines Tab */}
          {activeTab === 'lines' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <h2 className="section-title">
                <i className="fas fa-list"></i>
                Lines
              </h2>
              <div>
            {formData.items.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                <p>No items added yet. Click "Add Item" to start adding items to this requisition.</p>
              </div>
            ) : (
              <div className="items-table-container">
                <table className="items-table">
                  <thead>
                    <tr>
                      <th style={{ width: '40px' }}></th>
                      <th>ITEM CATEGORY</th>
                      <th>ITEM CODE</th>
                      <th>ITEM DESCRIPTION</th>
                      <th>UNIT TYPE</th>
                      <th>QTY</th>
                      <th>PREFERRED VENDOR</th>
                      <th>PREFERRED SEQUENCE</th>
                      <th>UNIT PRICE</th>
                      <th>AMOUNT *</th>
                      <th>BID CREATED</th>
                      <th>NAME</th>
                      <th>DEPARTMENT</th>
                      <th>CLASS</th>
                      <th>PO QUANTITY</th>
                      <th>GRN (RECEIVED ORDER)</th>
                      <th>MEMO</th>
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
                              onClick={(e) => handleMenuToggle(index, e)}
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
                                left: `${menuPosition.left}px`
                              }}
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
                            defaultValue={item.itemCategory} 
                            style={{ minWidth: '150px', height: '40px' }} 
                          />
                        </td>
                        <td>
                          <input 
                            type="text" 
                            className="form-control" 
                            defaultValue={item.itemCode} 
                            style={{ minWidth: '150px', height: '40px' }} 
                          />
                        </td>
                        <td>
                          <textarea 
                            className="form-control" 
                            defaultValue={item.itemDescription} 
                            style={{ 
                              minWidth: '300px', 
                              minHeight: '60px',
                              resize: 'both',
                              overflow: 'auto'
                            }}
                            rows="2"
                          />
                        </td>
                        <td>
                          <input 
                            type="text" 
                            className="form-control" 
                            defaultValue={item.unitType} 
                            style={{ minWidth: '100px', height: '40px' }} 
                          />
                        </td>
                        <td>
                          <input 
                            type="number" 
                            className="form-control" 
                            defaultValue={item.qty} 
                            style={{ minWidth: '100px', height: '40px' }} 
                          />
                        </td>
                        <td>
                          <input 
                            type="text" 
                            className="form-control" 
                            defaultValue={item.preferredVendor} 
                            style={{ minWidth: '200px', height: '40px' }} 
                          />
                        </td>
                        <td>
                          <input 
                            type="text" 
                            className="form-control" 
                            defaultValue={item.preferredSequence} 
                            style={{ minWidth: '100px', height: '40px' }} 
                          />
                        </td>
                        <td>
                          <input 
                            type="number" 
                            className="form-control" 
                            defaultValue={item.unitPrice} 
                            style={{ minWidth: '120px', height: '40px' }} 
                            step="0.01"
                          />
                        </td>
                        <td>
                          <input 
                            type="number" 
                            className="form-control" 
                            defaultValue={item.amount} 
                            style={{ minWidth: '120px', height: '40px' }} 
                            step="0.01"
                          />
                        </td>
                        <td>
                          <input 
                            type="text" 
                            className="form-control" 
                            defaultValue={item.bidCreated} 
                            style={{ minWidth: '150px', height: '40px' }} 
                          />
                        </td>
                        <td>
                          <input 
                            type="text" 
                            className="form-control" 
                            defaultValue={item.memo} 
                            style={{ minWidth: '200px', height: '40px' }} 
                          />
                        </td>
                        <td>
                          <input 
                            type="text" 
                            className="form-control" 
                            defaultValue={item.name} 
                            style={{ minWidth: '180px', height: '40px' }} 
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
                          <select 
                            className="form-control" 
                            defaultValue={item.class} 
                            style={{ minWidth: '180px', height: '40px' }}
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
                        </td>
                        <td>
                          <input 
                            type="text" 
                            className="form-control" 
                            defaultValue={item.poQuantity} 
                            style={{ minWidth: '120px', height: '40px' }} 
                          />
                        </td>
                        <td>
                          <input 
                            type="text" 
                            className="form-control" 
                            defaultValue={item.rclQuantity} 
                            style={{ minWidth: '120px', height: '40px' }} 
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            <div style={{ marginBottom: '1.5rem', marginTop: '1rem' }}>
              <button className="btn btn-primary" onClick={handleAddItem}>
                <i className="fas fa-plus"></i>
                Add Item
              </button>
            </div>
              </div>
            </div>
          )}

          {/* Communication Tab */}
          {activeTab === 'communication' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <div className="detail-section">
                <div className="section-header">
                  <i className="fas fa-chevron-down"></i>
                  <h3>Activities</h3>
                </div>
                <div className="section-body">
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                      <button className="btn-toolbar" style={{ fontSize: '12px', padding: '6px 12px' }}>
                        <i className="fas fa-tasks"></i>
                        New Task
                      </button>
                      <button className="btn-toolbar" style={{ fontSize: '12px', padding: '6px 12px' }}>
                        <i className="fas fa-phone"></i>
                        Log Phone Call
                      </button>
                      <button className="btn-toolbar" style={{ fontSize: '12px', padding: '6px 12px' }}>
                        <i className="fas fa-phone"></i>
                        New Phone Call
                      </button>
                      <button className="btn-toolbar" style={{ fontSize: '12px', padding: '6px 12px' }}>
                        <i className="fas fa-calendar"></i>
                        Log Event
                      </button>
                      <button className="btn-toolbar" style={{ fontSize: '12px', padding: '6px 12px' }}>
                        <i className="fas fa-calendar"></i>
                        New Event
                      </button>
                      <button className="btn-toolbar" style={{ fontSize: '12px', padding: '6px 12px' }}>
                        <i className="fas fa-history"></i>
                        View History
                      </button>
                      <button className="btn-toolbar" style={{ fontSize: '12px', padding: '6px 12px' }}>
                        <i className="fas fa-cog"></i>
                        Customize View
                      </button>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                      <div style={{ flex: 1 }}>
                        <label style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', display: 'block' }}>VIEW</label>
                        <select className="form-control" style={{ height: '32px', fontSize: '13px' }}>
                          <option>Default</option>
                          <option>All Activities</option>
                          <option>Completed</option>
                          <option>Pending</option>
                        </select>
                      </div>
                      <div style={{ flex: 1 }}>
                        <label style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', display: 'block' }}>STATUS</label>
                        <select className="form-control" style={{ height: '32px', fontSize: '13px' }}>
                          <option>All</option>
                          <option>Open</option>
                          <option>Completed</option>
                        </select>
                      </div>
                      <div style={{ flex: 1 }}>
                        <label style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', display: 'block' }}>ACTIVITY TYPE</label>
                        <select className="form-control" style={{ height: '32px', fontSize: '13px' }}>
                          <option>All</option>
                          <option>Task</option>
                          <option>Phone Call</option>
                          <option>Event</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="items-table-container">
                    <table className="items-table">
                      <thead>
                        <tr>
                          <th style={{ minWidth: '100px' }}>EDIT</th>
                          <th style={{ minWidth: '200px' }}>TITLE</th>
                          <th style={{ minWidth: '150px' }}>DATE</th>
                          <th style={{ minWidth: '150px' }}>TIME</th>
                          <th style={{ minWidth: '150px' }}>OWNER</th>
                          <th style={{ minWidth: '120px' }}>STATUS</th>
                          <th style={{ minWidth: '150px' }}>ASSIGNED TO</th>
                          <th style={{ minWidth: '120px' }}>TYPE</th>
                          <th style={{ minWidth: '100px' }}>MARK</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="9" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                            No records to show.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* System Information Tab */}
          {activeTab === 'system-info' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <div className="sub-tabs-header" style={{ borderBottom: '1px solid #e0e0e0', padding: '0 1.5rem', background: '#f8f9fa', marginLeft: '-1.5rem', marginRight: '-1.5rem', marginTop: '-1.5rem' }}>
                <button 
                  className={`sub-tab-btn ${systemInfoSubTab === 'system-notes' ? 'active' : ''}`}
                  onClick={() => setSystemInfoSubTab('system-notes')}
                  style={{
                    padding: '12px 20px',
                    border: 'none',
                    background: systemInfoSubTab === 'system-notes' ? '#fff' : 'transparent',
                    borderBottom: systemInfoSubTab === 'system-notes' ? '2px solid #dc2626' : '2px solid transparent',
                    cursor: 'pointer',
                    fontWeight: systemInfoSubTab === 'system-notes' ? '600' : '400',
                    color: systemInfoSubTab === 'system-notes' ? '#dc2626' : '#666',
                    fontSize: '13px'
                  }}
                >
                  System Notes
                </button>
                <button 
                  className={`sub-tab-btn ${systemInfoSubTab === 'active-workflows' ? 'active' : ''}`}
                  onClick={() => setSystemInfoSubTab('active-workflows')}
                  style={{
                    padding: '12px 20px',
                    border: 'none',
                    background: systemInfoSubTab === 'active-workflows' ? '#fff' : 'transparent',
                    borderBottom: systemInfoSubTab === 'active-workflows' ? '2px solid #dc2626' : '2px solid transparent',
                    cursor: 'pointer',
                    fontWeight: systemInfoSubTab === 'active-workflows' ? '600' : '400',
                    color: systemInfoSubTab === 'active-workflows' ? '#dc2626' : '#666',
                    fontSize: '13px'
                  }}
                >
                  Active Workflows
                </button>
                <button 
                  className={`sub-tab-btn ${systemInfoSubTab === 'workflow-history' ? 'active' : ''}`}
                  onClick={() => setSystemInfoSubTab('workflow-history')}
                  style={{
                    padding: '12px 20px',
                    border: 'none',
                    background: systemInfoSubTab === 'workflow-history' ? '#fff' : 'transparent',
                    borderBottom: systemInfoSubTab === 'workflow-history' ? '2px solid #dc2626' : '2px solid transparent',
                    cursor: 'pointer',
                    fontWeight: systemInfoSubTab === 'workflow-history' ? '600' : '400',
                    color: systemInfoSubTab === 'workflow-history' ? '#dc2626' : '#666',
                    fontSize: '13px'
                  }}
                >
                  Workflow History
                </button>
                <button 
                  className={`sub-tab-btn ${systemInfoSubTab === 'applied-rules' ? 'active' : ''}`}
                  onClick={() => setSystemInfoSubTab('applied-rules')}
                  style={{
                    padding: '12px 20px',
                    border: 'none',
                    background: systemInfoSubTab === 'applied-rules' ? '#fff' : 'transparent',
                    borderBottom: systemInfoSubTab === 'applied-rules' ? '2px solid #dc2626' : '2px solid transparent',
                    cursor: 'pointer',
                    fontWeight: systemInfoSubTab === 'applied-rules' ? '600' : '400',
                    color: systemInfoSubTab === 'applied-rules' ? '#dc2626' : '#666',
                    fontSize: '13px'
                  }}
                >
                  Applied Rules
                </button>
              </div>

              {systemInfoSubTab === 'system-notes' && (
                <div style={{ marginTop: '1.5rem' }}>
                  <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button className="btn-toolbar" style={{ fontSize: '12px', padding: '6px 12px' }}>
                      <i className="fas fa-cog"></i>
                      Customize View
                    </button>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <label style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', display: 'block' }}>VIEW</label>
                      <select className="form-control" style={{ height: '32px', fontSize: '13px' }}>
                        <option>Default</option>
                      </select>
                    </div>
                    <div style={{ flex: 1 }}>
                      <label style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', display: 'block' }}>FIELD</label>
                      <select className="form-control" style={{ height: '32px', fontSize: '13px' }}>
                        <option>&lt;Type then tab&gt;</option>
                      </select>
                    </div>
                  </div>
                  <div className="items-table-container">
                    <table className="items-table">
                      <thead>
                        <tr>
                          <th style={{ minWidth: '150px' }}>DATE</th>
                          <th style={{ minWidth: '150px' }}>SET BY</th>
                          <th style={{ minWidth: '150px' }}>CONTEXT</th>
                          <th style={{ minWidth: '150px' }}>TYPE</th>
                          <th style={{ minWidth: '150px' }}>FIELD</th>
                          <th style={{ minWidth: '200px' }}>OLD VALUE</th>
                          <th style={{ minWidth: '200px' }}>NEW VALUE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                            No records to show.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {systemInfoSubTab === 'active-workflows' && (
                <div style={{ marginTop: '1.5rem' }}>
                  <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button className="btn-toolbar" style={{ fontSize: '12px', padding: '6px 12px', background: '#2196F3', color: 'white' }}>
                      <i className="fas fa-sync"></i>
                      Refresh
                    </button>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <label style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', display: 'block' }}>VIEW</label>
                      <select className="form-control" style={{ height: '32px', fontSize: '13px' }}>
                        <option>Default</option>
                      </select>
                    </div>
                  </div>
                  <div className="items-table-container">
                    <table className="items-table">
                      <thead>
                        <tr>
                          <th style={{ minWidth: '250px' }}>WORKFLOW</th>
                          <th style={{ minWidth: '200px' }}>CURRENT STATE</th>
                          <th style={{ minWidth: '200px' }}>DATE ENTERED WORKFLOW</th>
                          <th style={{ minWidth: '200px' }}>DATE ENTERED STATE</th>
                          <th style={{ minWidth: '150px' }}>OPTIONS</th>
                          <th style={{ minWidth: '120px' }}>STATUS</th>
                          <th style={{ minWidth: '100px' }}>CANCEL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                            No records to show.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {systemInfoSubTab === 'workflow-history' && (
                <div style={{ marginTop: '1.5rem' }}>
                  <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button className="btn-toolbar" style={{ fontSize: '12px', padding: '6px 12px', background: '#2196F3', color: 'white' }}>
                      <i className="fas fa-sync"></i>
                      Refresh
                    </button>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <label style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', display: 'block' }}>VIEW</label>
                      <select className="form-control" style={{ height: '32px', fontSize: '13px' }}>
                        <option>Default</option>
                      </select>
                    </div>
                  </div>
                  <div className="items-table-container">
                    <table className="items-table">
                      <thead>
                        <tr>
                          <th style={{ minWidth: '250px' }}>WORKFLOW</th>
                          <th style={{ minWidth: '200px' }}>STATE NAME INFO</th>
                          <th style={{ minWidth: '200px' }}>DATE ENTERED STATE</th>
                          <th style={{ minWidth: '200px' }}>DATE EXITED STATE</th>
                          <th style={{ minWidth: '150px' }}>OPTIONS</th>
                          <th style={{ minWidth: '100px' }}>LOG</th>
                          <th style={{ minWidth: '100px' }}>NOTES</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                            No records to show.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {systemInfoSubTab === 'applied-rules' && (
                <div style={{ marginTop: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <label style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', display: 'block' }}>VIEW</label>
                      <select className="form-control" style={{ height: '32px', fontSize: '13px' }}>
                        <option>Default</option>
                      </select>
                    </div>
                  </div>
                  <div className="items-table-container">
                    <table className="items-table">
                      <thead>
                        <tr>
                          <th style={{ minWidth: '150px' }}>DATE</th>
                          <th style={{ minWidth: '200px' }}>RULE TYPE</th>
                          <th style={{ minWidth: '300px' }}>DETAILS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="3" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                            No records to show.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Custom Tab */}
          {activeTab === 'custom' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <div className="detail-section">
                <div className="section-header">
                  <i className="fas fa-chevron-down"></i>
                  <h3>Custom Fields</h3>
                </div>
                <div className="section-body">
                  <div className="detail-grid">
                    <div className="detail-field">
                      <label>REF ORDER NO</label>
                      <input 
                        type="text" 
                        className="form-control"
                        placeholder="<Type then tab>"
                      />
                    </div>
                    <div className="detail-field">
                      <label>STORE PERSON</label>
                      <input 
                        type="text" 
                        className="form-control"
                        placeholder="<Type then tab>"
                      />
                    </div>
                    <div className="detail-field">
                      <label>PROJECT MANAGER</label>
                      <input 
                        type="text" 
                        className="form-control"
                        value={formData.projectManager}
                        disabled
                        style={{ backgroundColor: '#f5f5f5', cursor: 'not-allowed' }}
                      />
                    </div>
                    <div className="detail-field">
                      <label>DO RECORD CREATED</label>
                      <input 
                        type="checkbox" 
                        style={{ width: '18px', height: '18px' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* GL Impact Tab */}
          {activeTab === 'gl-impact' && (
            <div className="form-section" style={{ padding: '1.5rem' }}>
              <div className="detail-section">
                <div className="section-header">
                  <i className="fas fa-chevron-down"></i>
                  <h3>GL Impact</h3>
                </div>
                <div className="section-body">
                  <div className="items-table-container">
                    <table className="items-table">
                      <thead>
                        <tr>
                          <th style={{ minWidth: '250px' }}>ACCOUNT</th>
                          <th style={{ minWidth: '150px' }}>AMOUNT (DEBIT)</th>
                          <th style={{ minWidth: '150px' }}>AMOUNT (CREDIT)</th>
                          <th style={{ minWidth: '120px' }}>POSTING</th>
                          <th style={{ minWidth: '200px' }}>MEMO</th>
                          <th style={{ minWidth: '200px' }}>NAME</th>
                          <th style={{ minWidth: '250px' }}>SUBSIDIARY</th>
                          <th style={{ minWidth: '150px' }}>DEPARTMENT</th>
                          <th style={{ minWidth: '150px' }}>CLASS</th>
                          <th style={{ minWidth: '150px' }}>LOCATION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="10" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                            No GL Impact records to show.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="detail-footer-actions">
          <button className="btn-toolbar" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn-toolbar" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn-toolbar-primary" onClick={handleSaveRequisition}>
            <i className="fas fa-save"></i>
            Save
          </button>
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

export default CreatePurchaseRequisition;
