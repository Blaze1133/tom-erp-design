import React, { useState, useRef, useEffect } from 'react';
import Toast from './Toast';
import AddCustomerModal from './AddCustomerModal';
import './Enquiries.css';

const CreateEnquiries = ({ setCurrentPage, headerTitle = "Enquiry" }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [isSaved, setIsSaved] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    customForm: 'TOM Supply Enquiry',
    company: '',
    salesRep: '',
    title: '',
    status: 'In Discussion',
    probability: '20.0%',
    expectedClose: '',
    winLossReason: '',
    projectedTotal: 0.00,
    forecastType: 'Omitted',
    weightedTotal: 0.00,
    range: '0.00 TO 0.00',
    subsidiary: 'Marine Engineering Pte Ltd',
    class: '',
    location: '',
    department: 'Sales',
    taxTotal: 0.00,
    contactPerson: '',
    lastSalesActivity: '',
    countryOfOrigin: '',
    hsCode: '',
    currency: 'SGD',
    exchangeRate: 1.00,
    items: []
  });

  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  
  // Sales Rep searchable dropdown state
  const [salesRepSearch, setSalesRepSearch] = useState('');
  const [salesRepDropdownOpen, setSalesRepDropdownOpen] = useState(false);
  const salesRepDropdownRef = useRef(null);
  
  // Company searchable dropdown state
  const [companySearch, setCompanySearch] = useState('');
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [companyFieldHovered, setCompanyFieldHovered] = useState(false);
  const [showAddCompanyModal, setShowAddCompanyModal] = useState(false);
  const companyDropdownRef = useRef(null);

  // Company options
  const companyOptions = [
    { id: '100-102', name: '100 Baroid Surface Solutions, Halliburton Energy Services Inc' },
    { id: '1000', name: '1000 TEAM LEAD CONSTRUCTION PTE LTD' },
    { id: 'TOM22-00656', name: 'TOM22-00656 TEAM LEAD CONSTRUCTION PTE LTD : 25-00003-TLC-Nursing Home @ Hougang Ave 1' },
    { id: '1001', name: '1001 TECH ONSHORE MEP-PREFABRICATORS PTE LTD' },
    { id: 'TOM22-00733', name: 'TOM22-00733 TECH ONSHORE MEP-PREFABRICATORS PTE LTD : 25-00010-TOM-Riser Concept' },
    { id: 'TOM22-00741', name: 'TOM22-00741 TECH ONSHORE MEP-PREFABRICATORS PTE LTD : 25-00015-TOM-TOM Innovation' },
    { id: '1002', name: '1002 TECH MARINE OFFSHORE (S) PTE LTD' },
    { id: '1003', name: '1003 TECH ELECTRIC AUTOMATION PTE LTD' },
    { id: '1004', name: '1004 TECH OFFSHORE MARINE (DO) PTE LTD' },
    { id: '1005', name: '1005 TECH OFFSHORE MARINE (SV) PTE LTD' }
  ];

  // Sales Rep options
  const salesRepOptions = [
    { id: 'TD0059', name: 'TD0059 Kumarasamy Madhavan Subash' },
    { id: 'TSV025', name: 'TSV025 Sasapu Venkateshwara Rao' },
    { id: 'MEP01', name: 'MEP01 001 JEGANATHAN SUNDARAVELU' },
    { id: 'TOM01', name: 'TOM01 John Smith' },
    { id: 'TOM02', name: 'TOM02 Jane Doe' },
    { id: 'TOM03', name: 'TOM03 Mike Johnson' },
    { id: 'TOM04', name: 'TOM04 Sarah Wilson' },
    { id: 'TOM05', name: 'TOM05 David Brown' }
  ];

  // Filter company options based on search
  const filteredCompanies = companyOptions.filter(company =>
    company.name.toLowerCase().includes(companySearch.toLowerCase())
  );

  // Filter sales rep options based on search
  const filteredSalesReps = salesRepOptions.filter(rep =>
    rep.name.toLowerCase().includes(salesRepSearch.toLowerCase())
  );

  // Handle company selection
  const handleCompanySelect = (company) => {
    handleFormChange('company', company.name);
    setCompanySearch(company.name);
    setCompanyDropdownOpen(false);
  };

  // Handle company search input
  const handleCompanySearchChange = (e) => {
    setCompanySearch(e.target.value);
    setCompanyDropdownOpen(true);
    // Clear the form value if user is typing
    if (e.target.value !== formData.company) {
      handleFormChange('company', '');
    }
  };

  // Handle add new company
  const handleAddNewCompany = () => {
    setShowAddCompanyModal(true);
    setCompanyDropdownOpen(false);
  };

  // Handle sales rep selection
  const handleSalesRepSelect = (rep) => {
    handleFormChange('salesRep', rep.name);
    setSalesRepSearch(rep.name);
    setSalesRepDropdownOpen(false);
  };

  // Handle sales rep search input
  const handleSalesRepSearchChange = (e) => {
    setSalesRepSearch(e.target.value);
    setSalesRepDropdownOpen(true);
    // Clear the form value if user is typing
    if (e.target.value !== formData.salesRep) {
      handleFormChange('salesRep', '');
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (salesRepDropdownRef.current && !salesRepDropdownRef.current.contains(event.target)) {
        setSalesRepDropdownOpen(false);
      }
      if (companyDropdownRef.current && !companyDropdownRef.current.contains(event.target)) {
        setCompanyDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveEnquiry = () => {
    showToast('Enquiry saved successfully!', 'success');
    setIsSaved(true);
  };

  const handleConvertToQuotation = () => {
    showToast('Converting to Quotation...', 'success');
    setTimeout(() => {
      showToast('Successfully converted to Quotation!', 'success');
      setCurrentPage('view-enquiries');
    }, 500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to close this transaction? Any unsaved changes will be lost.')) {
      showToast('Transaction cancelled', 'info');
      // Reset form
      window.location.reload();
    }
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-enquiries');
    }
  };

  const handleAddItem = () => {
    const newItem = {
      id: formData.items.length + 1,
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

  // Calculation functions
  const calculateSubtotal = () => {
    return formData.items.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
  };

  const calculateTaxAmount = () => {
    return formData.items.reduce((sum, item) => {
      const amount = parseFloat(item.amount) || 0;
      const gstRate = parseFloat(item.gst) || 9.0;
      return sum + (amount * gstRate / 100);
    }, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTaxAmount();
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-alt"></i>
          <div>
            <h1>{headerTitle}</h1>
            <div className="detail-subtitle">
              <span># To be generated – New {headerTitle}</span>
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
        {!isSaved ? (
          <button className="btn-toolbar-primary" onClick={handleSaveEnquiry}>
            <i className="fas fa-save"></i>
            Save
          </button>
        ) : (
          <>
            <button className="btn-toolbar">
              <i className="fas fa-print"></i>
              Print
            </button>
            <button className="btn-toolbar">
              <i className="fas fa-copy"></i>
              Copy
            </button>
            <button className="btn-toolbar-primary" onClick={handleConvertToQuotation}>
              <i className="fas fa-exchange-alt"></i>
              Convert to Quotation
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
                  <label>CUSTOM FORM *</label>
                  <select 
                    className="form-control"
                    value={formData.customForm}
                    onChange={(e) => handleFormChange('customForm', e.target.value)}
                  >
                    <option>TOM Supply Enquiry</option>
                    <option>TOM Service Enquiry</option>
                  </select>
                </div>
                <div className="detail-field" style={{ position: 'relative', zIndex: companyDropdownOpen ? 10001 : 'auto' }}>
                  <label className="form-label required">Company</label>
                  <div 
                    style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
                    onMouseEnter={() => setCompanyFieldHovered(true)}
                    onMouseLeave={() => setCompanyFieldHovered(false)}
                  >
                    <div style={{ position: 'relative', flex: 1 }}>
                      <input 
                        type="text"
                        className="form-control"
                        value={formData.company}
                        onChange={(e) => handleFormChange('company', e.target.value)}
                        onFocus={() => {
                          setCompanyDropdownOpen(true);
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
                          setCompanyDropdownOpen(!companyDropdownOpen);
                        }}
                      >
                        <i className="fas fa-chevron-down"></i>
                      </button>
                      {companyDropdownOpen && (
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
                            onClick={() => setCompanyDropdownOpen(false)}
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
                            marginTop: '4px'
                          }}>
                            <div style={{ padding: '10px', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <i className="fas fa-search" style={{ color: '#666', fontSize: '14px' }}></i>
                              <input 
                                type="text"
                                placeholder="Search companies..."
                                value={companySearch}
                                onChange={handleCompanySearchChange}
                                style={{ 
                                  flex: 1, 
                                  padding: '6px 10px', 
                                  border: '1px solid #ddd', 
                                  borderRadius: '4px', 
                                  fontSize: '13px'
                                }}
                              />
                            </div>
                            <div style={{ 
                              overflowY: 'auto',
                              maxHeight: '200px'
                            }}>
                              {(filteredCompanies.length > 0 ? filteredCompanies : companyOptions).map((company, idx) => (
                                <div 
                                  key={idx}
                                  onClick={() => {
                                    handleFormChange('company', company.name);
                                    setCompanyDropdownOpen(false);
                                    setCompanySearch('');
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
                                  {company.name}
                                </div>
                              ))}
                              {filteredCompanies.length === 0 && companySearch && (
                                <div style={{ padding: '20px', textAlign: 'center', color: '#999', fontSize: '13px' }}>
                                  No companies found
                                </div>
                              )}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    {companyFieldHovered && (
                      <button 
                        type="button"
                        className="btn btn-secondary" 
                        style={{ 
                          padding: '0.5rem', 
                          minWidth: 'auto',
                          transition: 'opacity 0.2s'
                        }}
                        onClick={() => setShowAddCompanyModal(true)}
                        title="Add new company"
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    )}
                  </div>
                </div>
                <div className="detail-field">
                  <label>PROBABILITY *</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.probability}
                    onChange={(e) => handleFormChange('probability', e.target.value)}
                  />
                </div>
                <div className="detail-field">
                  <label>OPPORTUNITY #</label>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="To Be Generated"
                    disabled
                  />
                </div>
                <div className="detail-field">
                  <label>CONTACT PERSON</label>
                  <select 
                    className="form-control"
                    value={formData.contactPerson}
                    onChange={(e) => handleFormChange('contactPerson', e.target.value)}
                  >
                    <option value="">Select...</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>EXPECTED CLOSE *</label>
                  <input 
                    type="date" 
                    className="form-control"
                    value={formData.expectedClose}
                    onChange={(e) => handleFormChange('expectedClose', e.target.value)}
                  />
                </div>
                <div className="detail-field">
                  <label>TITLE</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.title}
                    onChange={(e) => handleFormChange('title', e.target.value)}
                  />
                </div>
                <div className="detail-field">
                  <label>STATUS *</label>
                  <select 
                    className="form-control"
                    value={formData.status}
                    onChange={(e) => handleFormChange('status', e.target.value)}
                  >
                    <option>In Discussion</option>
                    <option>Proposal</option>
                    <option>Negotiation</option>
                    <option>Closed Won</option>
                    <option>Closed Lost</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>WIN/LOSS REASON</label>
                  <select 
                    className="form-control"
                    value={formData.winLossReason}
                    onChange={(e) => handleFormChange('winLossReason', e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option>Price</option>
                    <option>Quality</option>
                    <option>Delivery Time</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>DETAILS</label>
                  <textarea 
                    className="form-control"
                    rows="3"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

          {/* Forecasting */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Forecasting</h3>
            </div>
            <div className="section-body">
              <div className="detail-grid">
                <div className="detail-field">
                  <label>PROJECTED TOTAL *</label>
                  <input 
                    type="number" 
                    className="form-control"
                    value={formData.projectedTotal}
                    onChange={(e) => handleFormChange('projectedTotal', parseFloat(e.target.value) || 0)}
                  />
                </div>
                <div className="detail-field">
                  <label>FORECAST TYPE</label>
                  <select 
                    className="form-control"
                    value={formData.forecastType}
                    onChange={(e) => handleFormChange('forecastType', e.target.value)}
                  >
                    <option>Omitted</option>
                    <option>Most Likely</option>
                    <option>Best Case</option>
                    <option>Worst Case</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>WEIGHTED TOTAL</label>
                  <input 
                    type="number" 
                    className="form-control"
                    value={formData.weightedTotal}
                    disabled
                  />
                </div>
                <div className="detail-field">
                  <label>RANGE</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.range}
                    disabled
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
                    <option value="TOM S">Tech Offshore Marine (S) Pte Ltd - "TOM S" (ROC 200709673M)</option>
                    <option value="DQ">Tech Offshore Marine (DQ) Pte Ltd - "DQ" (ROC 200704907R)</option>
                    <option value="TEA">Tech Electric & Automation Pte Ltd - "TEA" (ROC 198700264M)</option>
                    <option value="TMO">Tech Marine Offshore (S) Pte Ltd - "TMO" (ROC 200512260M)</option>
                    <option value="SV">Tech Offshore Marine (SV) Pte Ltd - "SV" (ROC 200608955Z)</option>
                    <option value="TOM">Tech Onshore MEP Prefabricators Pte Ltd - "TOM" (ROC 199507962E)</option>
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
                  </select>
                </div>
                <div className="detail-field">
                  <label>DEPARTMENT *</label>
                  <select 
                    className="form-control"
                    value={formData.department}
                    onChange={(e) => handleFormChange('department', e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option>MEP</option>
                    <option>Engineering</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>TAX TOTAL</label>
                  <input 
                    type="number" 
                    className="form-control"
                    value={formData.taxTotal}
                    disabled
                  />
                </div>
                <div className="detail-field" style={{ position: 'relative', zIndex: salesRepDropdownOpen ? 10001 : 'auto' }}>
                  <label className="form-label">SALES REP</label>
                  <div style={{ position: 'relative', flex: 1 }}>
                    <input 
                      type="text"
                      className="form-control"
                      value={salesRepSearch || formData.salesRep}
                      onChange={(e) => {
                        setSalesRepSearch(e.target.value);
                        handleFormChange('salesRep', e.target.value);
                        setSalesRepDropdownOpen(true);
                      }}
                      onFocus={() => {
                        setSalesRepDropdownOpen(true);
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
                        setSalesRepDropdownOpen(!salesRepDropdownOpen);
                      }}
                    >
                      <i className="fas fa-chevron-down"></i>
                    </button>
                    {salesRepDropdownOpen && (
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
                          onClick={() => setSalesRepDropdownOpen(false)}
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
                          {(filteredSalesReps.length > 0 ? filteredSalesReps : salesRepOptions).map((rep, idx) => (
                            <div 
                              key={idx}
                              onClick={() => {
                                handleFormChange('salesRep', rep.name);
                                setSalesRepSearch(rep.name);
                                setSalesRepDropdownOpen(false);
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
                              {rep.name}
                            </div>
                          ))}
                          {filteredSalesReps.length === 0 && salesRepSearch && (
                            <div style={{ padding: '20px', textAlign: 'center', color: '#999', fontSize: '13px' }}>
                              No sales reps found
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="detail-field">
                  <label>LAST SALES ACTIVITY</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.lastSalesActivity}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

          {/* Items Section */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Items</h3>
            </div>
            <div className="section-body">
              <div className="detail-grid" style={{ marginBottom: '1.5rem' }}>
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
                  <label>EXCHANGE RATE *</label>
                  <input 
                    type="number" 
                    className="form-control"
                    step="0.01"
                    value={formData.exchangeRate}
                    onChange={(e) => handleFormChange('exchangeRate', parseFloat(e.target.value) || 1.00)}
                  />
                </div>
              </div>
              
              {formData.items.length > 0 && (
                <div className="items-table-wrapper" style={{ overflowX: 'auto', marginBottom: '1rem' }}>
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
                        <th style={{ minWidth: '120px' }}>GROSS AMT</th>
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
                              defaultValue={item.item} 
                              style={{ minWidth: '200px', height: '40px' }} 
                            />
                          </td>
                          <td>
                            <textarea 
                              className="form-control" 
                              defaultValue={item.description} 
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
                              defaultValue={item.quantity} 
                              style={{ minWidth: '100px', height: '40px' }} 
                            />
                          </td>
                          <td>
                            <input 
                              type="text" 
                              className="form-control" 
                              defaultValue={item.units} 
                              style={{ minWidth: '120px', height: '40px' }} 
                            />
                          </td>
                          <td>
                            <select 
                              className="form-control" 
                              defaultValue={item.priceLevel} 
                              style={{ minWidth: '110px', height: '40px' }}
                            >
                              <option>Custom</option>
                              <option>Base Price</option>
                              <option>Wholesale</option>
                              <option>Retail</option>
                            </select>
                          </td>
                          <td>
                            <input 
                              type="number" 
                              className="form-control" 
                              defaultValue={item.rate} 
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
                            <select 
                              className="form-control" 
                              defaultValue={item.taxCode} 
                              style={{ minWidth: '110px', height: '40px' }}
                            >
                              <option>GST_SG-9%</option>
                              <option>GST_SG-0%</option>
                              <option>Exempt</option>
                            </select>
                          </td>
                          <td>
                            <input 
                              type="number" 
                              className="form-control" 
                              defaultValue={item.grossAmount} 
                              style={{ minWidth: '110px', height: '40px' }} 
                              step="0.01"
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
                            <select 
                              className="form-control" 
                              defaultValue={item.costEstimateType} 
                              style={{ minWidth: '180px', height: '40px' }}
                            >
                              <option>Fixed</option>
                              <option>Variable</option>
                            </select>
                          </td>
                          <td>
                            <input 
                              type="number" 
                              className="form-control" 
                              defaultValue={item.estimatedExtendedCost} 
                              style={{ minWidth: '180px', height: '40px' }} 
                              step="0.01"
                            />
                          </td>
                          <td>
                            <input 
                              type="text" 
                              className="form-control" 
                              defaultValue={item.countryOfOrigin || ''} 
                              style={{ minWidth: '180px', height: '40px' }} 
                              placeholder="Country"
                            />
                          </td>
                          <td>
                            <input 
                              type="text" 
                              className="form-control" 
                              defaultValue={item.hsCode || ''} 
                              style={{ minWidth: '180px', height: '40px' }} 
                              placeholder="HS Code"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              
              <div style={{ marginBottom: '1.5rem' }}>
                <button className="btn btn-primary" onClick={handleAddItem}>
                  <i className="fas fa-plus"></i>
                  Add Item
                </button>
              </div>

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
                  <div className="summary-card" style={{ background: '#f8f9fa' }}>
                    <div className="summary-title">TOTAL AMOUNT</div>
                    <div className="summary-value" style={{ color: '#4a90e2' }}>${calculateTotal().toFixed(2)}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

          {/* Terms & Conditions */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Terms & Conditions</h3>
            </div>
            <div className="section-body">
              <textarea 
                className="form-control"
                rows="3"
                placeholder="1. Payment due within 30 days of invoice date.&#10;2. Prices valid for 30 days from quotation date.&#10;3. Delivery within 2 weeks after order confirmation."
              />
            </div>
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
            {!isSaved ? (
              <button className="btn-toolbar-primary" onClick={handleSaveEnquiry}>
                <i className="fas fa-save"></i>
                Save
              </button>
            ) : (
              <button className="btn-toolbar-primary" onClick={handleConvertToQuotation}>
                <i className="fas fa-exchange-alt"></i>
                Convert to Quotation
              </button>
            )}
          </div>
        </div>

      {/* Add Customer Modal */}
      <AddCustomerModal 
        show={showAddCompanyModal}
        onClose={() => setShowAddCompanyModal(false)}
        onSave={(customerData) => {
          handleFormChange('company', customerData.companyName || customerData.name);
          showToast('New customer added successfully!', 'success');
        }}
      />

      <Toast 
        message={toast.message} 
        type={toast.type} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
    </div>
  );
};

export default CreateEnquiries;
