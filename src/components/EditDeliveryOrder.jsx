import React, { useState, useRef, useEffect } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditDeliveryOrder = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('items');
  const [headerCollapsed, setHeaderCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);

  // Form state with pre-filled data
  const [formData, setFormData] = useState({
    transactionNumber: 'DO-000123',
    customer: 'ACME Corporation',
    date: '2024-02-15',
    shipDate: '2024-02-15',
    status: 'Picked',
    createdFrom: 'SO-2024-001',
    memo: 'Urgent delivery required for marine equipment',
    location: 'Main Warehouse',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
    department: 'TOM: Sales and Marketing',
    class: 'Fabrication',
    shipMethod: 'DHL',
    trackingNumber: '1234567890',
    carrier: 'Perdybee',
    termsOfShipment: 'FOB',
    // Shipping Address
    attention: 'Jane Smith',
    addressee: 'ACME Corporation',
    address1: '123 Main St',
    address2: 'Anytown',
    city: 'CA',
    state: '90210',
    postalCode: 'United States',
    country: 'United States',
    phone: '555-555-5555',
    // Custom Fields
    deliveryNoteNumber: '######',
    deliveryRoute: 'Route 1',
    driverName: 'John Doe',
    vehicleNumber: 'ABC-1234',
    internalDeliveryReference: 'INT-REF-001',
    deliveryTimeIn: '09:00',
    deliveryTimeOut: '17:00',
    // Package Details
    packageCount: 5,
    packageWeight: 150.5,
    packageType: 'Box',
    shippingCost: 250.00,
    referenceNumbers: 'REF-001, REF-002',
    items: [
      {
        id: 1,
        item: 'Marine Pump Assembly',
        description: 'High-pressure marine pump with mounting bracket',
        committedQuantity: 10,
        quantity: 10,
        uom: 'Pcs',
        binNumber: 'A-01-05',
        serialLotNumber: 'SN-2024-001',
        itemWeight: 15.5
      },
      {
        id: 2,
        item: 'Hydraulic Valve',
        description: 'Industrial hydraulic control valve',
        committedQuantity: 20,
        quantity: 20,
        uom: 'Pcs',
        binNumber: 'B-02-10',
        serialLotNumber: 'SN-2024-002',
        itemWeight: 5.2
      }
    ]
  });

  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleItemChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const handleSave = () => {
    showToast('Delivery Order updated successfully!', 'success');
    setTimeout(() => {
      if (setCurrentPage) {
        setCurrentPage('view-delivery-order-detail');
      }
    }, 1500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Changes cancelled', 'info');
      setCurrentPage('view-delivery-order-detail');
    }
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-delivery-orders');
    }
  };

  const handleAddItem = () => {
    const newItem = {
      id: formData.items.length + 1,
      item: '',
      description: '',
      committedQuantity: 0,
      quantity: 0,
      uom: 'Pcs',
      binNumber: '',
      serialLotNumber: '',
      itemWeight: 0
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

  const handleInsertAbove = (index) => {
    const newItem = {
      id: Date.now(),
      item: '',
      description: '',
      committedQuantity: 0,
      quantity: 0,
      uom: 'Pcs',
      binNumber: '',
      serialLotNumber: '',
      itemWeight: 0
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
      description: '',
      committedQuantity: 0,
      quantity: 0,
      uom: 'Pcs',
      binNumber: '',
      serialLotNumber: '',
      itemWeight: 0
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

  const getStatusBadgeColor = (status) => {
    switch(status) {
      case 'Picked':
        return '#ff9800';
      case 'Packed':
        return '#2196f3';
      case 'Shipped':
        return '#4caf50';
      default:
        return '#999';
    }
  };

  return (
    <div className="enquiry-detail">
      {/* Header */}
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-truck" style={{ color: '#4a90e2' }}></i>
          <div>
            <h1>Delivery Order / Item Fulfillment</h1>
            <div className="detail-subtitle">
              <span>{formData.transactionNumber}</span>
              <span style={{ color: '#4a90e2', cursor: 'pointer' }}>
                Created From {formData.createdFrom}
              </span>
              <span 
                className="status-badge-detail" 
                style={{ background: getStatusBadgeColor(formData.status) }}
              >
                {formData.status}
              </span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-action">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-action" onClick={() => setCurrentPage('view-delivery-orders')}>
            List
          </button>
        </div>
      </div>

      {/* Toolbar */}
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
      </div>

      {/* Content */}
      <div className="detail-content">
        {/* Primary Information Section */}
        <div className="detail-section">
          <div 
            className="section-header" 
            onClick={() => setHeaderCollapsed(!headerCollapsed)}
            style={{ cursor: 'pointer' }}
          >
            <i className={`fas fa-chevron-${headerCollapsed ? 'right' : 'down'}`}></i>
            <h3>Primary Information</h3>
          </div>
          {!headerCollapsed && (
            <div className="section-body">
              <div className="detail-grid">
                <div className="detail-field">
                  <label>CUSTOMER *</label>
                  <input 
                    type="text"
                    className="form-control"
                    value={formData.customer}
                    onChange={(e) => handleFormChange('customer', e.target.value)}
                  />
                </div>
                <div className="detail-field">
                  <label>DATE</label>
                  <input 
                    type="date"
                    className="form-control"
                    value={formData.date}
                    onChange={(e) => handleFormChange('date', e.target.value)}
                  />
                </div>
                <div className="detail-field">
                  <label>SHIP DATE</label>
                  <input 
                    type="date"
                    className="form-control"
                    value={formData.shipDate}
                    onChange={(e) => handleFormChange('shipDate', e.target.value)}
                  />
                </div>
                <div className="detail-field">
                  <label>CREATED FROM</label>
                  <input 
                    type="text"
                    className="form-control"
                    value={formData.createdFrom}
                    onChange={(e) => handleFormChange('createdFrom', e.target.value)}
                  />
                </div>
                <div className="detail-field">
                  <label>SHIP METHOD</label>
                  <select 
                    className="form-control"
                    value={formData.shipMethod}
                    onChange={(e) => handleFormChange('shipMethod', e.target.value)}
                  >
                    <option value="DHL">DHL</option>
                    <option value="FedEx">FedEx</option>
                    <option value="UPS">UPS</option>
                    <option value="Local Courier">Local Courier</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>CARRIER</label>
                  <input 
                    type="text"
                    className="form-control"
                    value={formData.carrier}
                    onChange={(e) => handleFormChange('carrier', e.target.value)}
                  />
                </div>
                <div className="detail-field">
                  <label>TRACKING NUMBER</label>
                  <input 
                    type="text"
                    className="form-control"
                    value={formData.trackingNumber}
                    onChange={(e) => handleFormChange('trackingNumber', e.target.value)}
                  />
                </div>
                <div className="detail-field">
                  <label>TERMS OF SHIPMENT</label>
                  <select 
                    className="form-control"
                    value={formData.termsOfShipment}
                    onChange={(e) => handleFormChange('termsOfShipment', e.target.value)}
                  >
                    <option value="FOB">FOB (Free on Board)</option>
                    <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                    <option value="CFR">CFR (Cost and Freight)</option>
                    <option value="EXW">EXW (Ex Works)</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>STATUS</label>
                  <select 
                    className="form-control"
                    value={formData.status}
                    onChange={(e) => handleFormChange('status', e.target.value)}
                  >
                    <option value="Picked">Picked</option>
                    <option value="Packed">Packed</option>
                    <option value="Shipped">Shipped</option>
                  </select>
                </div>
                <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                  <label>MEMO</label>
                  <textarea 
                    className="form-control"
                    value={formData.memo}
                    onChange={(e) => handleFormChange('memo', e.target.value)}
                    rows="3"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Classification Section */}
        <div className="detail-section">
          <div 
            className="section-header" 
            onClick={() => setClassificationCollapsed(!classificationCollapsed)}
            style={{ cursor: 'pointer' }}
          >
            <i className={`fas fa-chevron-${classificationCollapsed ? 'right' : 'down'}`}></i>
            <h3>Classification</h3>
          </div>
          {!classificationCollapsed && (
            <div className="section-body">
              <div className="detail-grid">
                <div className="detail-field">
                  <label>SUBSIDIARY *</label>
                  <select 
                    className="form-control"
                    value={formData.subsidiary}
                    onChange={(e) => handleFormChange('subsidiary', e.target.value)}
                  >
                    <option>Tech Onshore MEP Prefabricators Pte Ltd</option>
                    <option>Tech Marine Offshore (S) Pte Ltd</option>
                    <option>TOM Shipyard Pte Ltd</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>LOCATION *</label>
                  <select 
                    className="form-control"
                    value={formData.location}
                    onChange={(e) => handleFormChange('location', e.target.value)}
                  >
                    <option>Main Warehouse</option>
                    <option>Singapore (MEP)</option>
                    <option>TOM-11</option>
                    <option>Mega yard</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>DEPARTMENT</label>
                  <select 
                    className="form-control"
                    value={formData.department}
                    onChange={(e) => handleFormChange('department', e.target.value)}
                  >
                    <option>TOM: Sales and Marketing</option>
                    <option>TOM: Operating</option>
                    <option>TOM: Logistic</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>CLASS</label>
                  <select 
                    className="form-control"
                    value={formData.class}
                    onChange={(e) => handleFormChange('class', e.target.value)}
                  >
                    <option>Fabrication</option>
                    <option>Installation work</option>
                    <option>Material Supply</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'items' ? 'active' : ''}`}
              onClick={() => setActiveTab('items')}
            >
              Items
            </button>
            <button 
              className={`tab-btn ${activeTab === 'packages' ? 'active' : ''}`}
              onClick={() => setActiveTab('packages')}
            >
              Packages
            </button>
            <button 
              className={`tab-btn ${activeTab === 'shipping' ? 'active' : ''}`}
              onClick={() => setActiveTab('shipping')}
            >
              Shipping Address
            </button>
            <button 
              className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`}
              onClick={() => setActiveTab('custom')}
            >
              Custom Fields
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'items' && (
              <div style={{ padding: '1.5rem' }}>
                <button className="add-item-btn" onClick={handleAddItem}>
                  <i className="fas fa-plus"></i>
                  Add Item
                </button>

                <div className="items-table-wrapper" style={{ overflowX: 'auto', marginBottom: '1rem' }}>
                  <table className="detail-items-table" style={{ minWidth: '1800px' }}>
                    <thead>
                      <tr>
                        <th style={{ width: '30px' }}></th>
                        <th style={{ minWidth: '150px' }}>ITEM</th>
                        <th style={{ minWidth: '300px' }}>DESCRIPTION</th>
                        <th style={{ minWidth: '100px' }}>COMMITTED QTY</th>
                        <th style={{ minWidth: '100px' }}>QUANTITY</th>
                        <th style={{ minWidth: '100px' }}>UOM</th>
                        <th style={{ minWidth: '120px' }}>BIN NUMBER</th>
                        <th style={{ minWidth: '150px' }}>SERIAL/LOT NUMBER</th>
                        <th style={{ minWidth: '100px' }}>WEIGHT (KG)</th>
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
                              onChange={(e) => handleItemChange(index, 'item', e.target.value)}
                              style={{ minWidth: '200px', height: '40px' }}
                            />
                          </td>
                          <td>
                            <textarea 
                              className="form-control"
                              value={item.description}
                              onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                              style={{ 
                                minWidth: '300px', 
                                minHeight: '60px',
                                resize: 'both',
                                overflow: 'auto'
                              }}
                              rows="2"
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
                              value={item.committedQuantity}
                              onChange={(e) => handleItemChange(index, 'committedQuantity', e.target.value)}
                              style={{ minWidth: '100px', height: '40px' }}
                            />
                          </td>
                          <td>
                            <input 
                              type="number"
                              className="form-control"
                              value={item.quantity}
                              onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                              style={{ minWidth: '100px', height: '40px' }}
                            />
                          </td>
                          <td>
                            <select 
                              className="form-control"
                              value={item.uom}
                              onChange={(e) => handleItemChange(index, 'uom', e.target.value)}
                              style={{ minWidth: '100px', height: '40px' }}
                            >
                              <option value="Pcs">Pcs</option>
                              <option value="Kg">Kg</option>
                              <option value="Ltr">Ltr</option>
                              <option value="Box">Box</option>
                              <option value="Set">Set</option>
                            </select>
                          </td>
                          <td>
                            <input 
                              type="text"
                              className="form-control"
                              value={item.binNumber}
                              onChange={(e) => handleItemChange(index, 'binNumber', e.target.value)}
                              style={{ minWidth: '120px', height: '40px' }}
                            />
                          </td>
                          <td>
                            <input 
                              type="text"
                              className="form-control"
                              value={item.serialLotNumber}
                              onChange={(e) => handleItemChange(index, 'serialLotNumber', e.target.value)}
                              style={{ minWidth: '150px', height: '40px' }}
                            />
                          </td>
                          <td>
                            <input 
                              type="number"
                              className="form-control"
                              value={item.itemWeight}
                              onChange={(e) => handleItemChange(index, 'itemWeight', e.target.value)}
                              style={{ minWidth: '100px', height: '40px' }}
                              step="0.01"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'packages' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                  <div className="detail-field">
                    <label>PACKAGE COUNT</label>
                    <input 
                      type="number"
                      className="form-control"
                      value={formData.packageCount}
                      onChange={(e) => handleFormChange('packageCount', e.target.value)}
                    />
                  </div>
                  <div className="detail-field">
                    <label>PACKAGE WEIGHT (KG)</label>
                    <input 
                      type="number"
                      className="form-control"
                      value={formData.packageWeight}
                      onChange={(e) => handleFormChange('packageWeight', e.target.value)}
                    />
                  </div>
                  <div className="detail-field">
                    <label>PACKAGE TYPE</label>
                    <select 
                      className="form-control"
                      value={formData.packageType}
                      onChange={(e) => handleFormChange('packageType', e.target.value)}
                    >
                      <option value="Box">Box</option>
                      <option value="Pallet">Pallet</option>
                      <option value="Crate">Crate</option>
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>SHIPPING COST</label>
                    <input 
                      type="number"
                      className="form-control"
                      value={formData.shippingCost}
                      onChange={(e) => handleFormChange('shippingCost', e.target.value)}
                    />
                  </div>
                  <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                    <label>REFERENCE NUMBERS</label>
                    <input 
                      type="text"
                      className="form-control"
                      value={formData.referenceNumbers}
                      onChange={(e) => handleFormChange('referenceNumbers', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>ATTENTION</label>
                    <input 
                      type="text"
                      className="form-control"
                      value={formData.attention}
                      onChange={(e) => handleFormChange('attention', e.target.value)}
                    />
                  </div>
                  <div className="detail-field">
                    <label>ADDRESSEE</label>
                    <input 
                      type="text"
                      className="form-control"
                      value={formData.addressee}
                      onChange={(e) => handleFormChange('addressee', e.target.value)}
                    />
                  </div>
                  <div className="detail-field">
                    <label>ADDRESS 1</label>
                    <input 
                      type="text"
                      className="form-control"
                      value={formData.address1}
                      onChange={(e) => handleFormChange('address1', e.target.value)}
                    />
                  </div>
                  <div className="detail-field">
                    <label>ADDRESS 2</label>
                    <input 
                      type="text"
                      className="form-control"
                      value={formData.address2}
                      onChange={(e) => handleFormChange('address2', e.target.value)}
                    />
                  </div>
                  <div className="detail-field">
                    <label>CITY</label>
                    <input 
                      type="text"
                      className="form-control"
                      value={formData.city}
                      onChange={(e) => handleFormChange('city', e.target.value)}
                    />
                  </div>
                  <div className="detail-field">
                    <label>STATE</label>
                    <input 
                      type="text"
                      className="form-control"
                      value={formData.state}
                      onChange={(e) => handleFormChange('state', e.target.value)}
                    />
                  </div>
                  <div className="detail-field">
                    <label>POSTAL CODE</label>
                    <input 
                      type="text"
                      className="form-control"
                      value={formData.postalCode}
                      onChange={(e) => handleFormChange('postalCode', e.target.value)}
                    />
                  </div>
                  <div className="detail-field">
                    <label>COUNTRY</label>
                    <input 
                      type="text"
                      className="form-control"
                      value={formData.country}
                      onChange={(e) => handleFormChange('country', e.target.value)}
                    />
                  </div>
                  <div className="detail-field">
                    <label>PHONE</label>
                    <input 
                      type="text"
                      className="form-control"
                      value={formData.phone}
                      onChange={(e) => handleFormChange('phone', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'custom' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                  <div className="detail-field">
                    <label>DELIVERY NOTE NUMBER</label>
                    <input 
                      type="text"
                      className="form-control"
                      value={formData.deliveryNoteNumber}
                      onChange={(e) => handleFormChange('deliveryNoteNumber', e.target.value)}
                    />
                  </div>
                  <div className="detail-field">
                    <label>DELIVERY ROUTE</label>
                    <input 
                      type="text"
                      className="form-control"
                      value={formData.deliveryRoute}
                      onChange={(e) => handleFormChange('deliveryRoute', e.target.value)}
                    />
                  </div>
                  <div className="detail-field">
                    <label>DRIVER NAME</label>
                    <input 
                      type="text"
                      className="form-control"
                      value={formData.driverName}
                      onChange={(e) => handleFormChange('driverName', e.target.value)}
                    />
                  </div>
                  <div className="detail-field">
                    <label>VEHICLE NUMBER</label>
                    <input 
                      type="text"
                      className="form-control"
                      value={formData.vehicleNumber}
                      onChange={(e) => handleFormChange('vehicleNumber', e.target.value)}
                    />
                  </div>
                  <div className="detail-field">
                    <label>INTERNAL DELIVERY REFERENCE</label>
                    <input 
                      type="text"
                      className="form-control"
                      value={formData.internalDeliveryReference}
                      onChange={(e) => handleFormChange('internalDeliveryReference', e.target.value)}
                    />
                  </div>
                  <div className="detail-field">
                    <label>DELIVERY TIME IN</label>
                    <input 
                      type="time"
                      className="form-control"
                      value={formData.deliveryTimeIn}
                      onChange={(e) => handleFormChange('deliveryTimeIn', e.target.value)}
                    />
                  </div>
                  <div className="detail-field">
                    <label>DELIVERY TIME OUT</label>
                    <input 
                      type="time"
                      className="form-control"
                      value={formData.deliveryTimeOut}
                      onChange={(e) => handleFormChange('deliveryTimeOut', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions Outside Tabs */}
        <div className="detail-footer-actions">
          <button className="btn-toolbar" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn-toolbar-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
        </div>
      </div>

      <Toast 
        show={toast.show} 
        message={toast.message} 
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
};

export default EditDeliveryOrder;
