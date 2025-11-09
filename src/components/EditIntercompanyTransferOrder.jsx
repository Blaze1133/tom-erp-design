import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditIntercompanyTransferOrder = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Pre-filled data for editing
  const [formData, setFormData] = useState({
    customForm: 'TOMTransfer_Order',
    refNo: 'ITO2025-001',
    date: '8/11/2025',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    toSubsidiary: 'Tech Marine Offshore (S) Pte Ltd',
    fromLocation: 'TOM -11',
    department: 'TOM : Logistic',
    refProjectNo: 'PRJ-2025-001',
    toLocation: 'MEP MARINE CC',
    employee: 'Sarah Johnson',
    status: 'Pending Approval',
    memo: 'Monthly material transfer for Project Alpha',
    class: 'TOM : Projects',
    useItemCostAsTransferCost: true,
    incoterm: 'DAP'
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
    },
    {
      id: 2,
      item: 'Welding Rods - Type 316',
      available: 1000,
      onHand: 1000,
      quantity: 200,
      transferPrice: 12.00,
      units: 'pcs',
      amount: 2400.00,
      description: 'Stainless steel welding rods',
      expectedReceiptDate: '15/11/2025',
      commit: 'Firm',
      commitmentConfirmed: 'Yes',
      orderPriority: 'Medium',
      options: '',
      closed: false
    }
  ]);

  const customFormOptions = [
    'TOMTransfer_Order',
    'Standard Transfer Order',
    'TOM Transfer Order',
    'TOMTransfer Order'
  ];

  const statusOptions = [
    'Pending Approval',
    'Pending Fulfillment'
  ];

  const incotermOptions = [
    'DAP',
    'EXW'
  ];

  const subsidiaryOptions = [
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'Tech Electric & Automation Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Offshore Marine (DQ) Pte Ltd',
    'Tech Offshore Marine (s) Pte Ltd',
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

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleItemChange = (id, field, value) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
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
    showToast('New item added to table', 'success');
  };

  const handleRemoveItem = (id) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
      showToast('Item removed from table', 'success');
    } else {
      showToast('Cannot remove the last item', 'error');
    }
  };

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
  };

  const handleSave = () => {
    showToast('Intercompany transfer order updated successfully!', 'success');
    setTimeout(() => {
      if (setCurrentPage) {
        setCurrentPage('view-intercompany-transfer-order-detail');
      }
    }, 1000);
  };

  const handleCancel = () => {
    if (setCurrentPage) {
      setCurrentPage('view-intercompany-transfer-order-detail');
    }
  };

  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + (item.amount || 0), 0).toFixed(2);
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
              <div style={{ fontSize: '13px', color: '#666', marginBottom: '2px' }}>Intercompany Transfer Order</div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>{formData.refNo}</span>
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
              <label className="form-label">REF NO.</label>
              <input 
                type="text" 
                className="form-control" 
                value={formData.refNo}
                disabled
              />
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
              <label className="form-label">DATE <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleFormChange('date', e.target.value)}
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
              <label className="form-label">TO SUBSIDIARY <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.toSubsidiary}
                onChange={(e) => handleFormChange('toSubsidiary', e.target.value)}
              >
                <option value=""></option>
                {subsidiaryOptions.map(option => (
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

            <div className="form-group">
              <label className="form-label">FROM LOCATION</label>
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

        {/* Items Section */}
        <div className="form-section">
          <div className="section-title">
            <i className="fas fa-box"></i>
            <span>Items</span>
          </div>

          {/* Tab Navigation */}
          <div style={{ 
            display: 'flex', 
            gap: '2px', 
            borderBottom: '2px solid #e0e0e0',
            marginBottom: '16px'
          }}>
            <button style={{
              padding: '10px 20px',
              background: '#4a90e2',
              color: 'white',
              border: 'none',
              borderRadius: '4px 4px 0 0',
              cursor: 'pointer',
              fontWeight: '500'
            }}>
              Items
            </button>
            <button style={{
              padding: '10px 20px',
              background: '#f5f5f5',
              color: '#666',
              border: 'none',
              borderRadius: '4px 4px 0 0',
              cursor: 'pointer'
            }}>
              Shipping
            </button>
            <button style={{
              padding: '10px 20px',
              background: '#f5f5f5',
              color: '#666',
              border: 'none',
              borderRadius: '4px 4px 0 0',
              cursor: 'pointer'
            }}>
              Communication
            </button>
            <button style={{
              padding: '10px 20px',
              background: '#f5f5f5',
              color: '#666',
              border: 'none',
              borderRadius: '4px 4px 0 0',
              cursor: 'pointer'
            }}>
              Custom
            </button>
          </div>

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
                        className="remove-item-btn"
                        onClick={() => handleRemoveItem(item.id)}
                        title="Remove Item"
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
                        placeholder="Select item"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="table-input"
                        value={item.available}
                        disabled
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="table-input"
                        value={item.onHand}
                        disabled
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
                        disabled
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
        </div>

        {/* Summary Section */}
        <div className="summary-section">
          <div className="summary-box">
            <div className="summary-title">Summary</div>
            <div className="summary-row">
              <span className="summary-label">TOTAL</span>
              <span className="summary-value">{calculateTotal()}</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="footer-actions">
          <button className="btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i> Cancel
          </button>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn-secondary" onClick={handleSave}>
              <i className="fas fa-save"></i> Save
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

export default EditIntercompanyTransferOrder;
