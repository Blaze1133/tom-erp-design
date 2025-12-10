import React, { useState, useEffect } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditCustomDeliveryOrder = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
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

  // Form state - Pre-filled with existing data
  const [formData, setFormData] = useState({
    documentNo: 'DOCTOM00145',
    shipDate: '2024-07-01',
    location: 'Singapore (MEP)',
    warehouse: 'MEP Main Warehouse',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    department: 'TOM: Logistic',
    class: 'Material Supply',
    shipMethod: 'Own Transport',
    termsOfShipment: 'FOB (Free On Board)',
    project: 'Marine Equipment Supply - Q1 2024',
    requestedBy: 'MEP01 001 JEGANATHAN SUNDARAVELU',
    refEntity: '109 Bintang Mas Shipping Pte Ltd',
    shippingAddress: '2 Boon Leat Terrace, #08-02\nHarbourside Building 2, Singapore\n119844.',
    status: 'Delivered',
    memo: 'Urgent delivery for marine project',
    items: [
      {
        id: 1,
        itemCode: '12" Divider',
        itemDescription: '12" Divider',
        qty: 100,
        unitType: 'PCS',
        rate: 25.50,
        amount: 2550.00,
        retentionAmount: 255.00,
        deliveredQty: 100,
        memo: 'Delivered on time'
      },
      {
        id: 2,
        itemCode: '110 V Female Connector',
        itemDescription: '110 V Female Connector',
        qty: 200,
        unitType: 'PCS',
        rate: 15.00,
        amount: 3000.00,
        retentionAmount: 300.00,
        deliveredQty: 200,
        memo: ''
      }
    ]
  });

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'Tech Marine Offshore (S) Pte Ltd',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];

  const departments = [
    'TOM: Human Resource',
    'TOM: Finance: Internal Transfer',
    'TOM: IT',
    'TOM: Logistic',
    'TOM: Operating',
    'TOM: Purchase',
    'TOM: Sales and Marketing',
    'TOM: Security'
  ];

  const classes = [
    'Consumable Item',
    'Electrical',
    'Fabrication',
    'Installation work',
    'Manpower Supply',
    'Material Supply',
    'Module /Prefab',
    'Piping',
    'Project Works',
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

  const shipMethods = [
    'DHL Express',
    'FedEx International',
    'UPS Worldwide',
    'Singapore Post',
    'Own Transport',
    'Customer Pickup'
  ];

  const termsOptions = [
    'FOB (Free On Board)',
    'CIF (Cost, Insurance and Freight)',
    'EXW (Ex Works)',
    'DDP (Delivered Duty Paid)',
    'DAP (Delivered At Place)'
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

  const statuses = [
    'Pending Submit',
    'Pending Update Qty',
    'Pending Delivery',
    'Pending Receive',
    'Delivered',
    'Rejected'
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

  const handleProjectSearchChange = (e) => {
    const value = e.target.value;
    setProjectSearch(value);
    handleInputChange('project', value);
    if (value) {
      setFilteredProjects(projectOptions.filter(p => p.toLowerCase().includes(value.toLowerCase())));
    } else {
      setFilteredProjects([]);
    }
  };

  const handleProjectSelect = (project) => {
    handleInputChange('project', project);
    setProjectSearch(project);
    setShowProjectDropdown(false);
  };

  const handleRequestedBySearchChange = (e) => {
    const value = e.target.value;
    setRequestedBySearch(value);
    handleInputChange('requestedBy', value);
    if (value) {
      setFilteredRequestedBy(requestedByOptions.filter(r => r.toLowerCase().includes(value.toLowerCase())));
    } else {
      setFilteredRequestedBy([]);
    }
  };

  const handleRequestedBySelect = (person) => {
    handleInputChange('requestedBy', person);
    setRequestedBySearch(person);
    setShowRequestedByDropdown(false);
  };

  const handleSave = () => {
    showToast('Delivery Order updated successfully!', 'success');
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-tom-custom-delivery-order');
    }
  };

  const handleAddItem = () => {
    const newItem = {
      id: formData.items.length + 1,
      itemCode: '',
      itemDescription: '',
      qty: 0,
      rate: 0.00,
      amount: 0.00,
      retentionAmount: 0.00,
      deliveredQty: 0,
      memo: '',
      unitType: 'PCS'
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
      if (showProjectDropdown) {
        setShowProjectDropdown(false);
      }
      if (showRequestedByDropdown) {
        setShowRequestedByDropdown(false);
      }
    };
    if (activeMenu !== null || showProjectDropdown || showRequestedByDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeMenu, showProjectDropdown, showRequestedByDropdown]);

  const handleInsertAbove = (index) => {
    const newItem = {
      id: Date.now(),
      itemCode: '',
      itemDescription: '',
      qty: 0,
      rate: 0.00,
      amount: 0.00,
      retentionAmount: 0.00,
      deliveredQty: 0,
      memo: '',
      unitType: 'PCS'
    };
    setFormData(prev => ({
      ...prev,
      items: [...prev.items.slice(0, index), newItem, ...prev.items.slice(index)]
    }));
  };

  const handleInsertBelow = (index) => {
    const newItem = {
      id: Date.now(),
      itemCode: '',
      itemDescription: '',
      qty: 0,
      rate: 0.00,
      amount: 0.00,
      retentionAmount: 0.00,
      deliveredQty: 0,
      memo: '',
      unitType: 'PCS'
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
      setActiveMenu(null);
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-truck"></i>
          <div>
            <h1>Edit Delivery Order</h1>
            <div className="detail-subtitle">
              <span>{formData.documentNo}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={() => setCurrentPage && setCurrentPage('view-tom-custom-delivery-order')}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
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
                <label>DOCUMENT NO</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.documentNo}
                  disabled
                  style={{ backgroundColor: '#f5f5f5', cursor: 'not-allowed' }}
                />
              </div>
              <div className="detail-field">
                <label>SHIP DATE <span className="required">*</span></label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.shipDate}
                  onChange={(e) => handleInputChange('shipDate', e.target.value)}
                />
              </div>
              <div className="detail-field">
                <label>LOCATION</label>
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
                <label>WAREHOUSE/LOCATION</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.warehouse}
                  onChange={(e) => handleInputChange('warehouse', e.target.value)}
                  placeholder="Warehouse fulfilling the order"
                />
              </div>
              <div className="detail-field">
                <label>SUBSIDIARY <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.subsidiary}
                  onChange={(e) => handleInputChange('subsidiary', e.target.value)}
                >
                  {subsidiaries.map((sub, index) => (
                    <option key={index} value={sub}>{sub}</option>
                  ))}
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
                  {departments.map((dept, index) => (
                    <option key={index} value={dept}>{dept}</option>
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
                <label>SHIP METHOD</label>
                <select 
                  className="form-control"
                  value={formData.shipMethod}
                  onChange={(e) => handleInputChange('shipMethod', e.target.value)}
                >
                  <option value="">Select...</option>
                  {shipMethods.map((method, index) => (
                    <option key={index} value={method}>{method}</option>
                  ))}
                </select>
              </div>
              <div className="detail-field">
                <label>TERMS OF SHIPMENT</label>
                <select 
                  className="form-control"
                  value={formData.termsOfShipment}
                  onChange={(e) => handleInputChange('termsOfShipment', e.target.value)}
                >
                  <option value="">Select...</option>
                  {termsOptions.map((term, index) => (
                    <option key={index} value={term}>{term}</option>
                  ))}
                </select>
              </div>
              <div className="detail-field" style={{ position: 'relative', zIndex: showProjectDropdown ? 10001 : 'auto' }}>
                <label>PROJECT</label>
                <div style={{ position: 'relative' }}>
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
                        {(filteredProjects.length > 0 ? filteredProjects : projectOptions).map((project, idx) => (
                          <div 
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleProjectSelect(project);
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
                            {project}
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
              </div>
              <div className="detail-field" style={{ position: 'relative', zIndex: showRequestedByDropdown ? 10001 : 'auto' }}>
                <label>REQUESTED BY</label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="text"
                    className="form-control"
                    value={formData.requestedBy}
                    onChange={handleRequestedBySearchChange}
                    onFocus={() => setShowRequestedByDropdown(true)}
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
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowRequestedByDropdown(!showRequestedByDropdown);
                    }}
                  >
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  {showRequestedByDropdown && (
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
                        onClick={() => setShowRequestedByDropdown(false)}
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
                        {(filteredRequestedBy.length > 0 ? filteredRequestedBy : requestedByOptions).map((person, idx) => (
                          <div 
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRequestedBySelect(person);
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
                            {person}
                          </div>
                        ))}
                        {filteredRequestedBy.length === 0 && requestedBySearch && (
                          <div style={{ padding: '20px', textAlign: 'center', color: '#999', fontSize: '13px' }}>
                            No users found
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="detail-field">
                <label>REF ENTITY</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.refEntity}
                  onChange={(e) => handleInputChange('refEntity', e.target.value)}
                  placeholder="Reference entity"
                />
              </div>
              <div className="detail-field">
                <label>STATUS</label>
                <select 
                  className="form-control"
                  value={formData.status}
                  onChange={(e) => handleInputChange('status', e.target.value)}
                >
                  {statuses.map((status, index) => (
                    <option key={index} value={status}>{status}</option>
                  ))}
                </select>
              </div>
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label>MEMO</label>
                <textarea 
                  className="form-control"
                  rows="3"
                  value={formData.memo}
                  onChange={(e) => handleInputChange('memo', e.target.value)}
                  placeholder="Enter memo"
                  style={{ resize: 'vertical', maxWidth: '70%' }}
                />
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Shipping Address */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Shipping Address</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label>SHIPPING ADDRESS</label>
                <textarea 
                  className="form-control"
                  rows="4"
                  value={formData.shippingAddress}
                  onChange={(e) => handleInputChange('shippingAddress', e.target.value)}
                  placeholder="Enter shipping address"
                  style={{ resize: 'vertical' }}
                />
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Lines Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Items</h3>
          </div>
          <div className="section-body">
            {formData.items.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                <p>No items added yet. Click "Add Item" to start adding items to this delivery order.</p>
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table className="detail-items-table" style={{ minWidth: '1800px' }}>
                  <thead>
                    <tr>
                      <th style={{ width: '40px' }}></th>
                      <th>ITEM CODE</th>
                      <th>ITEM DESCRIPTION</th>
                      <th>QTY</th>
                      <th>UNIT TYPE</th>
                      <th>RATE</th>
                      <th>AMOUNT</th>
                      <th>RETENTION AMOUNT</th>
                      <th>DELIVERED QTY</th>
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
                              onClick={(e) => {
                                e.stopPropagation();
                                handleMenuToggle(index, e);
                              }}
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
                            defaultValue={item.itemCode} 
                            style={{ minWidth: '150px', height: '40px' }} 
                          />
                        </td>
                        <td>
                          <textarea 
                            className="form-control" 
                            defaultValue={item.itemDescription} 
                            style={{ minWidth: '250px', minHeight: '40px', resize: 'vertical' }} 
                            rows="2"
                          />
                        </td>
                        <td>
                          <input 
                            type="number" 
                            className="form-control" 
                            defaultValue={item.qty} 
                            style={{ minWidth: '80px', height: '40px' }} 
                          />
                        </td>
                        <td>
                          <select className="form-control" defaultValue={item.unitType} style={{ minWidth: '100px', height: '40px' }}>
                            <option>PCS</option>
                            <option>SET</option>
                            <option>KG</option>
                            <option>M</option>
                            <option>L</option>
                          </select>
                        </td>
                        <td>
                          <input 
                            type="number" 
                            className="form-control" 
                            defaultValue={item.rate} 
                            step="0.01"
                            style={{ minWidth: '120px', height: '40px' }} 
                          />
                        </td>
                        <td>
                          <input 
                            type="number" 
                            className="form-control" 
                            defaultValue={item.amount} 
                            step="0.01"
                            style={{ minWidth: '120px', height: '40px' }} 
                          />
                        </td>
                        <td>
                          <input 
                            type="number" 
                            className="form-control" 
                            defaultValue={item.retentionAmount} 
                            step="0.01"
                            style={{ minWidth: '150px', height: '40px' }} 
                          />
                        </td>
                        <td>
                          <input 
                            type="number" 
                            className="form-control" 
                            defaultValue={item.deliveredQty} 
                            style={{ minWidth: '120px', height: '40px' }} 
                          />
                        </td>
                        <td>
                          <textarea 
                            className="form-control" 
                            defaultValue={item.memo} 
                            style={{ minWidth: '200px', minHeight: '40px', resize: 'vertical' }} 
                            rows="2"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <div style={{ marginTop: '1rem' }}>
              <button className="btn-toolbar" onClick={handleAddItem}>
                <i className="fas fa-plus"></i>
                Add Item
              </button>
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
    </div>
  );
};

export default EditCustomDeliveryOrder;
