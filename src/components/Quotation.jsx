import React, { useState } from 'react';
import Toast from './Toast';

const Quotation = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      item: 'Steel Beams (Grade A)',
      quantity: 10,
      units: 'Pieces',
      description: '',
      priceLevel: 'Standard',
      rate: 120.00,
      taxCode: 'GST 10%',
      class: '',
      costEstimateType: 'Fixed',
      estimatedExtendedCost: 0.00
    },
  ]);

  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  // Customer search states
  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);
  const [customerSearch, setCustomerSearch] = useState('');
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [isHoveringCustomer, setIsHoveringCustomer] = useState(false);
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  const [formData, setFormData] = useState({
    // Primary Information
    customForm: 'Standard Quotation',
    estimateNumber: 'EST-2023-001',
    customerProject: '',
    title: '',
    expires: '',
    date: '',
    expectedClose: '',
    status: 'Draft',
    probability: '',
    memo: '',
    
    // Sales Information
    salesRep: '',
    opportunity: '',
    forecastType: 'Omitted',
    
    // Quotation Details
    subsidiary: '',
    class: '',
    location: '',
    department: '',
    taxesAndDuties: '',
    variations: '',
    approvalStatus: 'Pending',
    contactPerson: '',
    signature: '',
    countryOfOrigin: '',
    hsCode: '',
  });

  // Customer data array
  const allCustomers = [
    'Keppel Offshore & Marine Ltd',
    'Sembcorp Marine Ltd',
    'Jurong Shipyard Pte Ltd',
    'ST Engineering Marine Ltd',
    'Damen Shipyards Singapore',
    'Seatrium Limited',
    'Penguin International Limited',
    'Marco Polo Marine Ltd',
    'Vallianz Holdings Limited',
    'ASL Marine Holdings Ltd',
    'Cosco Shipping Heavy Industry',
    'Yantai CIMC Raffles Offshore',
    'Drydocks World Singapore',
    'PaxOcean Engineering Pte Ltd',
    'Vard Holdings Limited'
  ];

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
    return items.reduce((sum, item) => sum + calculateAmount(item), 0);
  };

  const calculateTotalTax = () => {
    return items.reduce((sum, item) => sum + calculateTaxAmount(item), 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTotalTax();
  };

  const addItem = () => {
    setItems([...items, {
      id: Date.now(),
      item: '',
      quantity: 1,
      units: 'Pieces',
      description: '',
      priceLevel: 'Standard',
      rate: 0,
      taxCode: 'GST 10%',
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

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleSubmit = () => {
    showToast('Quotation submitted successfully!', 'success');
  };

  const handleSaveDraft = () => {
    showToast('Draft saved successfully!', 'success');
  };

  const handleConvertToOrder = () => {
    showToast('Quotation converted to sales order!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to close this transaction? Any unsaved changes will be lost.')) {
      showToast('Transaction cancelled', 'error');
    }
  };

  // Customer search functionality
  const handleCustomerSearch = (searchTerm) => {
    setCustomerSearch(searchTerm);
    if (searchTerm.trim() === '') {
      setFilteredCustomers(allCustomers);
    } else {
      const filtered = allCustomers.filter(customer =>
        customer.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCustomers(filtered);
    }
  };

  const handleSaveNewCustomer = (newCustomerData) => {
    showToast('Customer added successfully!', 'success');
    setShowAddCustomer(false);
    handleInputChange('customerProject', newCustomerData.name);
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Sales Quotation Preparation</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Close Transaction
          </button>
            <button className="btn btn-secondary" onClick={handleSaveDraft}>
              <i className="fas fa-save"></i>
              Save Draft
            </button>
            <button className="btn btn-secondary" onClick={handleConvertToOrder}>
              <i className="fas fa-exchange-alt"></i>
              Convert to Order
            </button>
            <button className="btn btn-primary" onClick={handleSubmit}>
              <i className="fas fa-check"></i>
              Submit
            </button>
        </div>
      </div>

      <div className="form-container">
        {/* Primary Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-user"></i>
            Customer Information
          </h2>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label required">Custom Form</label>
              <select 
                className="form-control"
                value={formData.customForm}
                onChange={(e) => handleInputChange('customForm', e.target.value)}
              >
                <option>Standard Quotation</option>
                <option>TOM Service Quotation</option>
                <option>TOM Supply Quotation</option>
                <option>TOM DfMA Quotation</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Estimate Number</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.estimateNumber}
                readOnly
                placeholder="Auto generated"
              />
            </div>
            <div className="form-group" style={{ position: 'relative' }}>
              <label className="form-label required">Customer Project</label>
              <div 
                style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
                onMouseEnter={() => setIsHoveringCustomer(true)}
                onMouseLeave={() => setIsHoveringCustomer(false)}
              >
                <div style={{ position: 'relative', flex: 1 }}>
                  <input 
                    type="text"
                    className="form-control"
                    value={formData.customerProject}
                    onChange={(e) => handleInputChange('customerProject', e.target.value)}
                    onFocus={() => {
                      setShowCustomerDropdown(true);
                      setFilteredCustomers(allCustomers);
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
                      background: 'none', 
                      border: 'none', 
                      cursor: 'pointer',
                      color: '#666',
                      fontSize: '14px'
                    }}
                    onClick={() => {
                      setShowCustomerDropdown(!showCustomerDropdown);
                      if (!showCustomerDropdown) {
                        setFilteredCustomers(allCustomers);
                      }
                    }}
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
                        background: '#fff', 
                        border: '1px solid #ddd', 
                        borderRadius: '4px', 
                        marginTop: '4px', 
                        zIndex: 1000,
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        maxHeight: '300px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column'
                      }}>
                        <div style={{ padding: '12px', borderBottom: '1px solid #e0e0e0', background: '#f8f9fa' }}>
                          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <i className="fas fa-search" style={{ color: '#666', fontSize: '14px' }}></i>
                            <input 
                              type="text"
                              placeholder="Search customers..."
                              value={customerSearch}
                              onChange={(e) => handleCustomerSearch(e.target.value)}
                              style={{ 
                                flex: 1, 
                                padding: '6px 10px', 
                                border: '1px solid #ddd', 
                                borderRadius: '4px',
                                fontSize: '13px'
                              }}
                            />
                          </div>
                        </div>
                        <div style={{ 
                          flex: 1, 
                          overflowY: 'auto',
                          maxHeight: '200px'
                        }}>
                          {(filteredCustomers.length > 0 ? filteredCustomers : allCustomers).map((customer, idx) => (
                            <div 
                              key={idx}
                              onClick={() => {
                                handleInputChange('customerProject', customer);
                                setShowCustomerDropdown(false);
                                setCustomerSearch('');
                              }}
                              style={{ 
                                padding: '10px 12px', 
                                cursor: 'pointer',
                                fontSize: '13px',
                                borderBottom: '1px solid #f0f0f0',
                                transition: 'background 0.2s'
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
                      </div>
                    </>
                  )}
                </div>
                {isHoveringCustomer && (
                  <button 
                    type="button"
                    className="btn btn-secondary" 
                    style={{ 
                      padding: '8px 16px',
                      fontSize: '14px',
                      minWidth: 'auto',
                      transition: 'opacity 0.2s'
                    }}
                    onClick={() => setShowAddCustomer(true)}
                    title="Add new customer"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                )}
              </div>
            </div>
            <div className="form-group">
              <label className="form-label required">Title</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="Enter quotation title"
              />
            </div>
            <div className="form-group">
              <label className="form-label required">Date</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label required">Expires</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.expires}
                onChange={(e) => handleInputChange('expires', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Expected Close</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.expectedClose}
                onChange={(e) => handleInputChange('expectedClose', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Status</label>
              <select 
                className="form-control"
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
              >
                <option value="Draft">Draft</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Probability (%)</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.probability}
                onChange={(e) => handleInputChange('probability', e.target.value)}
                placeholder="Enter probability"
                min="0"
                max="100"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Memo</label>
              <textarea 
                className="form-control"
                rows="2"
                value={formData.memo}
                onChange={(e) => handleInputChange('memo', e.target.value)}
                placeholder="Enter memo"
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Sales Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-briefcase"></i>
            Sales Information
          </h2>
          <div className="form-grid">
            <div className="form-group">
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
            <div className="form-group">
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
            <div className="form-group">
              <label className="form-label">Forecast Type</label>
              <select 
                className="form-control"
                value={formData.forecastType}
                onChange={(e) => handleInputChange('forecastType', e.target.value)}
              >
                <option>Omitted</option>
                <option>Most Likely</option>
                <option>Best Case</option>
                <option>Worst Case</option>
              </select>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Quotation Details */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-info-circle"></i>
            Quotation Details
          </h2>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Subsidiary</label>
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
            <div className="form-group">
              <label className="form-label">Class</label>
              <select 
                className="form-control"
                value={formData.class}
                onChange={(e) => handleInputChange('class', e.target.value)}
              >
                <option value="">Select Class</option>
                <option value="class1">Marine Engineering</option>
                <option value="class2">Offshore Services</option>
                <option value="class3">Ship Repair</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Location</label>
              <select 
                className="form-control"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
              >
                <option value="">Select Location</option>
                <option value="loc1">Singapore Yard</option>
                <option value="loc2">Johor Facility</option>
                <option value="loc3">Batam Workshop</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Department</label>
              <select 
                className="form-control"
                value={formData.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
              >
                <option value="">Select Department</option>
                <option value="dept1">Sales</option>
                <option value="dept2">Engineering</option>
                <option value="dept3">Operations</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Taxes and Duties</label>
              <textarea 
                className="form-control"
                rows="3"
                value={formData.taxesAndDuties}
                onChange={(e) => handleInputChange('taxesAndDuties', e.target.value)}
                placeholder="Enter taxes and duties"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Variations</label>
              <textarea 
                className="form-control"
                rows="3"
                value={formData.variations}
                onChange={(e) => handleInputChange('variations', e.target.value)}
                placeholder="Enter variations"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Approval Status</label>
              <select 
                className="form-control"
                value={formData.approvalStatus}
                onChange={(e) => handleInputChange('approvalStatus', e.target.value)}
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Contact Person</label>
              <select 
                className="form-control"
                value={formData.contactPerson}
                onChange={(e) => handleInputChange('contactPerson', e.target.value)}
              >
                <option value="">Select Contact</option>
                <option value="contact1">John Smith</option>
                <option value="contact2">Jane Doe</option>
                <option value="contact3">Mike Johnson</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Country of Origin</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.countryOfOrigin}
                onChange={(e) => handleInputChange('countryOfOrigin', e.target.value)}
                placeholder="Enter country of origin"
              />
            </div>
            <div className="form-group">
              <label className="form-label">HS Code</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.hsCode}
                onChange={(e) => handleInputChange('hsCode', e.target.value)}
                placeholder="Enter HS code"
              />
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-boxes"></i>
            Items
          </h2>
          <div className="items-table-wrapper">
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th style={{width: '10%'}}>Item</th>
                  <th style={{width: '7%'}}>Qty</th>
                  <th style={{width: '6%'}}>Units</th>
                  <th style={{width: '12%'}}>Desc</th>
                  <th style={{width: '8%'}}>Price Level</th>
                  <th style={{width: '7%'}}>Rate</th>
                  <th style={{width: '7%'}}>Amt</th>
                  <th style={{width: '8%'}}>Tax Code</th>
                  <th style={{width: '8%'}}>Gross Amt</th>
                  <th style={{width: '9%'}}>Class</th>
                  <th style={{width: '10%'}}>Cost Estimate Type</th>
                  <th style={{width: '8%'}}>Est. Extended Cost</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <select 
                        className="table-input"
                        value={item.item}
                        onChange={(e) => updateItem(item.id, 'item', e.target.value)}
                        style={{width: '100%'}}
                      >
                        <option value="">Select Item</option>
                        <option value="Steel Beams (Grade A)">Steel Beams (Grade A)</option>
                        <option value="Marine Paint (5L)">Marine Paint (5L)</option>
                        <option value="Hydraulic Pumps">Hydraulic Pumps</option>
                        <option value="Welding Equipment">Welding Equipment</option>
                      </select>
                    </td>
                    <td>
                      <input 
                        type="number" 
                        className="table-input"
                        value={item.quantity}
                        onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                        min="1"
                        style={{width: '100%'}}
                      />
                    </td>
                    <td>
                      <select 
                        className="table-input"
                        value={item.units}
                        onChange={(e) => updateItem(item.id, 'units', e.target.value)}
                        style={{width: '100%'}}
                      >
                        <option value="Pieces">Pieces</option>
                        <option value="Kg">Kg</option>
                        <option value="Liters">Liters</option>
                        <option value="Meters">Meters</option>
                      </select>
                    </td>
                    <td>
                      <input 
                        type="text" 
                        className="table-input"
                        value={item.description}
                        onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                        placeholder="Description"
                        style={{width: '100%'}}
                      />
                    </td>
                    <td>
                      <select 
                        className="table-input"
                        value={item.priceLevel}
                        onChange={(e) => updateItem(item.id, 'priceLevel', e.target.value)}
                        style={{width: '100%'}}
                      >
                        <option value="Standard">Standard</option>
                        <option value="Premium">Premium</option>
                        <option value="Bulk">Bulk</option>
                      </select>
                    </td>
                    <td>
                      <input 
                        type="number" 
                        className="table-input"
                        value={item.rate}
                        onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                        step="0.01"
                        min="0"
                        readOnly
                        style={{width: '100%', backgroundColor: '#f0f0f0'}}
                      />
                    </td>
                    <td>
                      <strong>${calculateAmount(item).toFixed(2)}</strong>
                    </td>
                    <td>
                      <select 
                        className="table-input"
                        value={item.taxCode}
                        onChange={(e) => updateItem(item.id, 'taxCode', e.target.value)}
                        style={{width: '100%'}}
                      >
                        <option value="GST 10%">GST 10%</option>
                        <option value="GST 7%">GST 7%</option>
                        <option value="No Tax">No Tax</option>
                      </select>
                    </td>
                    <td>
                      <strong>${calculateGrossAmount(item).toFixed(2)}</strong>
                    </td>
                    <td>
                      <select 
                        className="table-input"
                        value={item.class}
                        onChange={(e) => updateItem(item.id, 'class', e.target.value)}
                        style={{width: '100%'}}
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
                        className="table-input"
                        value={item.costEstimateType}
                        onChange={(e) => updateItem(item.id, 'costEstimateType', e.target.value)}
                        style={{width: '100%'}}
                      >
                        <option value="Fixed">Fixed</option>
                        <option value="Variable">Variable</option>
                        <option value="Estimated">Estimated</option>
                      </select>
                    </td>
                    <td>
                      <input 
                        type="number" 
                        className="table-input"
                        value={item.estimatedExtendedCost}
                        onChange={(e) => updateItem(item.id, 'estimatedExtendedCost', parseFloat(e.target.value) || 0)}
                        step="0.01"
                        min="0"
                        style={{width: '100%'}}
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

          <div className="summary-grid">
            <div className="summary-card">
              <div className="summary-title">Subtotal</div>
              <div className="summary-value">${calculateSubtotal().toFixed(2)}</div>
            </div>
            <div className="summary-card">
              <div className="summary-title">Tax Amount</div>
              <div className="summary-value">${calculateTotalTax().toFixed(2)}</div>
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

        {/* Footer Actions */}
        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Close Transaction
          </button>
          <div>
            <button className="btn btn-secondary" onClick={handleSaveDraft}>
              <i className="fas fa-save"></i>
              Save Draft
            </button>
            <button className="btn btn-secondary" onClick={handleConvertToOrder}>
              <i className="fas fa-exchange-alt"></i>
              Convert to Order
            </button>
            <button className="btn btn-primary" onClick={handleSubmit}>
              <i className="fas fa-check"></i>
              Submit
            </button>
          </div>
        </div>
      </div>
      
      <Toast 
        message={toast.message} 
        type={toast.type} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />

      {/* Add Customer Modal */}
      {showAddCustomer && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '2rem',
            minWidth: '500px',
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflow: 'auto',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ margin: 0, color: 'var(--dark-gray)' }}>
                <i className="fas fa-user-plus" style={{ marginRight: '0.5rem', color: 'var(--blue-accent)' }}></i>
                Add New Customer
              </h2>
              <button 
                onClick={() => setShowAddCustomer(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: 'var(--gray-medium)'
                }}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label required">Customer Name</label>
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="Enter customer name"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Company Type</label>
                <select className="form-control">
                  <option value="Company">Company</option>
                  <option value="Individual">Individual</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control"
                  placeholder="Enter email address"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input 
                  type="tel" 
                  className="form-control"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Primary Subsidiary</label>
                <select className="form-control">
                  <option value="">Select Subsidiary</option>
                  <option value="TOM S">Tech Offshore Marine (S) Pte Ltd</option>
                  <option value="DQ">Tech Offshore Marine (DQ) Pte Ltd</option>
                  <option value="TEA">Tech Electric & Automation Pte Ltd</option>
                  <option value="TMO">Tech Marine Offshore (S) Pte Ltd</option>
                  <option value="SV">Tech Offshore Marine (SV) Pte Ltd</option>
                  <option value="TOM">Tech Onshore MEP Prefabricators Pte Ltd</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Category</label>
                <select className="form-control">
                  <option value="">Select Category</option>
                  <option value="Direct Owner">Direct Owner</option>
                  <option value="Oil & Gas">Oil & Gas</option>
                  <option value="Shipyard">Shipyard</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '2rem' }}>
              <button 
                className="btn btn-tertiary"
                onClick={() => setShowAddCustomer(false)}
              >
                <i className="fas fa-times"></i>
                Cancel
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => handleSaveNewCustomer({ name: 'New Customer' })}
              >
                <i className="fas fa-save"></i>
                Save Customer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quotation;
