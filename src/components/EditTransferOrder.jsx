import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditTransferOrder = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('items');

  const [formData, setFormData] = useState({
    customForm: 'TOMTransfer_Order',
    order: 'TO2025-001',
    date: '8/11/2025',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    fromLocation: 'TOM -11',
    toLocation: 'MEP MARINE CC',
    employee: 'John Smith',
    status: 'Pending Approval',
    firmed: false,
    memo: 'Monthly material transfer for Project Alpha',
    useItemCostAsTransferCost: true,
    incoterm: 'DAP',
    department: 'TOM : Engineering',
    class: 'TOM : Projects',
    refProjectNo: 'PRJ-2025-001'
  });

  const [items, setItems] = useState([
    {
      id: 1,
      item: 'Steel Plates - Grade A',
      available: 500,
      onHand: 500,
      quantity: 150,
      transferPrice: 45.50,
      units: 'pcs',
      amount: 6825.00,
      description: 'High-grade steel plates for marine construction',
      expectedReceiptDate: '15/11/2025',
      commit: 'Firm',
      commitmentConfirmed: 'Yes',
      orderPriority: 'High',
      options: '',
      closed: false
    }
  ]);

  const customFormOptions = [
    'TOMTransfer_Order',
    'Standard Transfer Order',
    'TOM Transfer Order'
  ];

  const statusOptions = [
    'Pending Approval',
    'Pending Fulfillment',
    'Pending Receipt'
  ];

  const incotermOptions = [
    'DAP',
    'EXW',
    'FOB',
    'CIF'
  ];

  const subsidiaryOptions = [
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'Tech Electric & Automation Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Offshore Marine (DQ) Pte Ltd',
    'Tech Offshore Marine (SV) Pte Ltd'
  ];

  const locationOptions = [
    'Bok Seng Yard',
    'Hong Hang Shipyard',
    'MEP MARINE CC',
    'Mega yard',
    'Shipyards/Construction',
    'Singapore(MEP)',
    'TOM -11',
    'TOM External Workshop'
  ];

  const departmentOptions = [
    'TOM : Facility',
    'TOM : Finance',
    'TOM : Finance : Internal Transfer',
    'TOM : Human Resource',
    'TOM : IT',
    'TOM : Logistic',
    'TOM : Operating'
  ];

  const classOptions = [
    'TOM : Projects',
    'TOM : Operations',
    'TOM : Maintenance',
    'TOM : Engineering'
  ];

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleItemChange = (id, field, value) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleAddItem = () => {
    const newItem = {
      id: items.length + 1,
      item: '',
      available: 0,
      onHand: 0,
      quantity: '',
      transferPrice: 0,
      units: '',
      amount: 0,
      description: '',
      expectedReceiptDate: '',
      commit: '',
      commitmentConfirmed: '',
      orderPriority: '',
      options: '',
      closed: false
    };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const handleSave = () => {
    setToast({ show: true, message: 'Transfer Order saved successfully!', type: 'success' });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
  };

  const calculateTaxAmount = () => {
    const subtotal = calculateSubtotal();
    // Assuming 9% tax rate (you can modify this as needed)
    return subtotal * 0.09;
  };

  const calculateDiscount = () => {
    // You can implement discount logic here
    // For now, returning 0 but can be modified based on business rules
    return 0;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const tax = calculateTaxAmount();
    const discount = calculateDiscount();
    return subtotal + tax - discount;
  };

  const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
  };

  return (
    <div className="quotation-container">
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: '', type: 'success' })}
        />
      )}

      {/* Header */}
      <div style={{ background: 'white', padding: '16px 24px', borderBottom: '1px solid #e0e0e0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <i className="fas fa-exchange-alt" style={{ fontSize: '20px', color: '#4a90e2' }}></i>
            <div>
              <div style={{ fontSize: '13px', color: '#666', marginBottom: '2px' }}>Transfer Order</div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>{formData.order}</span>
                <span style={{ 
                  background: '#ffc107', 
                  color: '#333', 
                  padding: '3px 10px', 
                  borderRadius: '3px',
                  fontSize: '11px',
                  fontWeight: '600',
                  textTransform: 'uppercase'
                }}>
                  {formData.status}
                </span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ padding: '8px 16px', background: 'white', border: '1px solid #ddd', borderRadius: '4px', fontSize: '13px', cursor: 'pointer' }}>List</button>
            <button style={{ padding: '8px 16px', background: 'white', border: '1px solid #ddd', borderRadius: '4px', fontSize: '13px', cursor: 'pointer' }}>Search</button>
            <button style={{ padding: '8px 16px', background: 'white', border: '1px solid #ddd', borderRadius: '4px', fontSize: '13px', cursor: 'pointer' }}>Customize</button>
            <button style={{ padding: '8px 16px', background: 'white', border: '1px solid #ddd', borderRadius: '4px', fontSize: '13px', cursor: 'pointer' }}>More</button>
          </div>
        </div>
      </div>

      {/* Main Form */}
      <div className="form-content">
        {/* Primary Information Section */}
        <div className="form-section">
          <div className="section-title">
            <i className="fas fa-info-circle"></i>
            <span>Primary Information</span>
          </div>
          <hr style={{ margin: '12px 0 20px 0', border: 'none', borderTop: '1px solid #e0e0e0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">CUSTOM FORM <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.customForm}
                onChange={(e) => handleFormChange('customForm', e.target.value)}
              >
                {customFormOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">EMPLOYEE</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.employee}
                onChange={(e) => handleFormChange('employee', e.target.value)}
                placeholder="< type then tab >"
              />
            </div>

            <div className="form-group">
              <label className="form-label">ORDER # <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control" 
                value={formData.order}
                disabled
              />
            </div>

            <div className="form-group">
              <label className="form-label">STATUS <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.status}
                onChange={(e) => handleFormChange('status', e.target.value)}
              >
                {statusOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">DATE <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleFormChange('date', e.target.value)}
              />
            </div>

            <div className="form-group">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '28px' }}>
                <input 
                  type="checkbox"
                  checked={formData.firmed}
                  onChange={(e) => handleFormChange('firmed', e.target.checked)}
                />
                <label style={{ margin: 0, fontWeight: 'normal', fontSize: '13px' }}>FIRMED</label>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">SUBSIDIARY <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleFormChange('subsidiary', e.target.value)}
              >
                {subsidiaryOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">MEMO</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.memo}
                onChange={(e) => handleFormChange('memo', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">FROM LOCATION <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.fromLocation}
                onChange={(e) => handleFormChange('fromLocation', e.target.value)}
              >
                <option value=""></option>
                {locationOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                <input 
                  type="checkbox"
                  checked={formData.useItemCostAsTransferCost}
                  onChange={(e) => handleFormChange('useItemCostAsTransferCost', e.target.checked)}
                />
                <label style={{ margin: 0, fontWeight: 'normal', fontSize: '13px' }}>USE ITEM COST AS TRANSFER COST</label>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">TO LOCATION <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.toLocation}
                onChange={(e) => handleFormChange('toLocation', e.target.value)}
              >
                <option value=""></option>
                {locationOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">INCOTERM <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.incoterm}
                onChange={(e) => handleFormChange('incoterm', e.target.value)}
              >
                {incotermOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Classification Section */}
        <div className="form-section">
          <div className="section-title">
            <i className="fas fa-tags"></i>
            <span>Classification</span>
          </div>
          <hr style={{ margin: '12px 0 20px 0', border: 'none', borderTop: '1px solid #e0e0e0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">DEPARTMENT <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.department}
                onChange={(e) => handleFormChange('department', e.target.value)}
              >
                <option value=""></option>
                {departmentOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">CLASS</label>
              <select 
                className="form-control"
                value={formData.class}
                onChange={(e) => handleFormChange('class', e.target.value)}
              >
                <option value=""></option>
                {classOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">REF PROJECT NO</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.refProjectNo}
                onChange={(e) => handleFormChange('refProjectNo', e.target.value)}
                placeholder="< type then tab >"
              />
            </div>
          </div>
        </div>

        {/* Items Section with Tabs */}
        <div className="form-section">
          <div className="section-title">
            <i className="fas fa-box"></i>
            <span>Items</span>
          </div>

          {/* Tabs */}
          <div style={{ 
            display: 'flex', 
            gap: '0', 
            borderBottom: '2px solid #e0e0e0',
            marginTop: '16px',
            marginBottom: '16px'
          }}>
            <button
              onClick={() => setActiveTab('items')}
              style={{
                padding: '12px 24px',
                background: activeTab === 'items' ? '#4a90e2' : '#f5f5f5',
                color: activeTab === 'items' ? 'white' : '#666',
                border: 'none',
                borderBottom: activeTab === 'items' ? '2px solid #4a90e2' : 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '14px'
              }}
            >
              Items
            </button>
            <button
              onClick={() => setActiveTab('shipping')}
              style={{
                padding: '12px 24px',
                background: activeTab === 'shipping' ? '#4a90e2' : '#f5f5f5',
                color: activeTab === 'shipping' ? 'white' : '#666',
                border: 'none',
                borderBottom: activeTab === 'shipping' ? '2px solid #4a90e2' : 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '14px'
              }}
            >
              Shipping
            </button>
            <button
              onClick={() => setActiveTab('communication')}
              style={{
                padding: '12px 24px',
                background: activeTab === 'communication' ? '#4a90e2' : '#f5f5f5',
                color: activeTab === 'communication' ? 'white' : '#666',
                border: 'none',
                borderBottom: activeTab === 'communication' ? '2px solid #4a90e2' : 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '14px'
              }}
            >
              Communication
            </button>
            <button
              onClick={() => setActiveTab('custom')}
              style={{
                padding: '12px 24px',
                background: activeTab === 'custom' ? '#4a90e2' : '#f5f5f5',
                color: activeTab === 'custom' ? 'white' : '#666',
                border: 'none',
                borderBottom: activeTab === 'custom' ? '2px solid #4a90e2' : 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '14px'
              }}
            >
              Custom
            </button>
          </div>

          {activeTab === 'items' && (
            <>
              <div style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
                <button className="add-item-btn" onClick={handleAddItem}>
                  <i className="fas fa-plus"></i> Add Multiple
                </button>
              </div>

              <div className="items-table-wrapper">
                <table className="items-table">
                  <thead>
                    <tr>
                      <th style={{ width: '40px' }}></th>
                      <th>ITEM <span className="required">*</span></th>
                      <th>AVAILABLE</th>
                      <th>ON HAND</th>
                      <th>QUANTITY <span className="required">*</span></th>
                      <th>TRANSFER PRICE</th>
                      <th>UNITS</th>
                      <th>AMOUNT</th>
                      <th>DESCRIPTION</th>
                      <th>EXPECTED RECEIPT DATE</th>
                      <th>COMMIT</th>
                      <th>COMMITMENT CONFIRMED</th>
                      <th>ORDER PRIORITY</th>
                      <th>OPTIONS</th>
                      <th>CLOSED</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: '#dc3545',
                              cursor: 'pointer',
                              fontSize: '16px'
                            }}
                          >
                            <i className="fas fa-times"></i>
                          </button>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="table-input"
                            value={item.item}
                            onChange={(e) => handleItemChange(item.id, 'item', e.target.value)}
                            placeholder="< type then tab >"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="table-input"
                            value={item.available}
                            readOnly
                            style={{ background: '#f5f5f5' }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="table-input"
                            value={item.onHand}
                            readOnly
                            style={{ background: '#f5f5f5' }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="table-input"
                            value={item.quantity}
                            onChange={(e) => handleItemChange(item.id, 'quantity', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="table-input"
                            value={item.transferPrice}
                            onChange={(e) => handleItemChange(item.id, 'transferPrice', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="table-input"
                            value={item.units}
                            onChange={(e) => handleItemChange(item.id, 'units', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="table-input"
                            value={item.amount}
                            onChange={(e) => handleItemChange(item.id, 'amount', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="table-input"
                            value={item.description}
                            onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="table-input"
                            value={item.expectedReceiptDate}
                            onChange={(e) => handleItemChange(item.id, 'expectedReceiptDate', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="table-input"
                            value={item.commit}
                            onChange={(e) => handleItemChange(item.id, 'commit', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="table-input"
                            value={item.commitmentConfirmed}
                            onChange={(e) => handleItemChange(item.id, 'commitmentConfirmed', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="table-input"
                            value={item.orderPriority}
                            onChange={(e) => handleItemChange(item.id, 'orderPriority', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="table-input"
                            value={item.options}
                            onChange={(e) => handleItemChange(item.id, 'options', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={item.closed}
                            onChange={(e) => handleItemChange(item.id, 'closed', e.target.checked)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Summary */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'flex-end',
                marginTop: '16px',
                padding: '16px',
                background: '#f8f9fa',
                borderRadius: '4px'
              }}>
                <div style={{ 
                  display: 'flex', 
                  gap: '40px',
                  minWidth: '600px',
                  justifyContent: 'space-between'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#666',
                      marginBottom: '4px'
                    }}>
                      SUBTOTAL
                    </div>
                    <div style={{ 
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#333'
                    }}>
                      {formatCurrency(calculateSubtotal())}
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#666',
                      marginBottom: '4px'
                    }}>
                      TAX AMOUNT
                    </div>
                    <div style={{ 
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#333'
                    }}>
                      {formatCurrency(calculateTaxAmount())}
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#666',
                      marginBottom: '4px'
                    }}>
                      DISCOUNT
                    </div>
                    <div style={{ 
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#333'
                    }}>
                      {formatCurrency(calculateDiscount())}
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#666',
                      marginBottom: '4px'
                    }}>
                      TOTAL AMOUNT
                    </div>
                    <div style={{ 
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#d32f2f'
                    }}>
                      {formatCurrency(calculateTotal())}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab !== 'items' && (
            <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} section - Coming Soon
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="footer-actions">
          <button className="btn-tertiary" onClick={() => setCurrentPage('view-transfer-orders')}>
            Cancel
          </button>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn-secondary" onClick={handleSave}>
              Save
            </button>
            <button className="btn-primary" onClick={handleSave}>
              <i className="fas fa-check"></i> Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTransferOrder;
