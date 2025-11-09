import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const AdjustInventoryWorksheet = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [formData, setFormData] = useState({
    reference: 'To Be Generated',
    adjustmentAccount: '',
    estimatedTotalValue: '0.00',
    transactionOrder: 'First transaction in day',
    date: '8/11/2025',
    postingPeriod: '',
    memo: '',
    subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
    class: '',
    location: '',
    department: '',
    requestedBy: ''
  });

  const [adjustmentItems, setAdjustmentItems] = useState([
    {
      id: 1,
      item: '',
      description: '',
      units: '',
      qtyAsOfDateAbove: 0,
      valueAsOfDateAbove: 0,
      newQty: '',
      newValue: ''
    }
  ]);

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleItemChange = (id, field, value) => {
    setAdjustmentItems(adjustmentItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleAddItem = () => {
    const newItem = {
      id: adjustmentItems.length + 1,
      item: '',
      description: '',
      units: '',
      qtyAsOfDateAbove: 0,
      valueAsOfDateAbove: 0,
      newQty: '',
      newValue: ''
    };
    setAdjustmentItems([...adjustmentItems, newItem]);
    showToast('New item added to table', 'success');
  };

  const handleRemoveItem = (id) => {
    if (adjustmentItems.length > 1) {
      setAdjustmentItems(adjustmentItems.filter(item => item.id !== id));
      showToast('Item removed from table', 'success');
    } else {
      showToast('Cannot remove the last item', 'error');
    }
  };

  const handleSave = () => {
    showToast('Inventory worksheet saved successfully!', 'success');
    setTimeout(() => {
      if (setCurrentPage) {
        setCurrentPage('view-inventory-worksheet-detail');
      }
    }, 1000);
  };

  const handleCancel = () => {
    if (setCurrentPage) {
      setCurrentPage('view-inventory-worksheets');
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="sales-quotation">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-clipboard-list" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Inventory Worksheet</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i> Save
          </button>
        </div>
      </div>

      <div className="quotation-container" style={{ background: '#f8f9fa', padding: '20px' }}>
        {/* Primary Information */}
        <div style={{ 
          background: 'white', 
          borderRadius: '8px', 
          padding: '24px',
          marginBottom: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: '16px', 
            fontWeight: '600', 
            color: '#333', 
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <i className="fas fa-info-circle" style={{ color: '#4a90e2' }}></i>
            Primary Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0 0 20px 0' }} />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px 30px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Reference #
              </label>
              <input 
                type="text" 
                className="form-control"
                value={formData.reference}
                onChange={(e) => handleFormChange('reference', e.target.value)}
                readOnly
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Transaction Order <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <select 
                className="form-control"
                value={formData.transactionOrder}
                onChange={(e) => handleFormChange('transactionOrder', e.target.value)}
              >
                <option>First transaction in day</option>
                <option>Last transaction in day</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Posting Period</label>
              <select 
                className="form-control"
                value={formData.postingPeriod}
                onChange={(e) => handleFormChange('postingPeriod', e.target.value)}
              >
                <option value="">Select...</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Adjustment Account <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <input 
                type="text" 
                className="form-control"
                value={formData.adjustmentAccount}
                onChange={(e) => handleFormChange('adjustmentAccount', e.target.value)}
                placeholder="<Type then tab>"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Date <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <input 
                type="date" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleFormChange('date', e.target.value)}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Memo</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.memo}
                onChange={(e) => handleFormChange('memo', e.target.value)}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Estimated Total Value</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.estimatedTotalValue}
                onChange={(e) => handleFormChange('estimatedTotalValue', e.target.value)}
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Classification */}
        <div style={{ 
          background: 'white', 
          borderRadius: '8px', 
          padding: '24px',
          marginBottom: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: '16px', 
            fontWeight: '600', 
            color: '#333', 
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <i className="fas fa-tags" style={{ color: '#4a90e2' }}></i>
            Classification
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0 0 20px 0' }} />
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 30px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Subsidiary <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleFormChange('subsidiary', e.target.value)}
              >
                <option>Tech Marine Offshore (S) Pte Ltd</option>
                <option>Tech Onshore MEP Prefabricators Pte Ltd.</option>
                <option>Tech Electric & Automation Pte Ltd</option>
                <option>Tech Marine Offshore (S) Pte Ltd</option>
                <option>Tech Offshore Marine (DQ) Pte Ltd</option>
                <option>Tech Offshore Marine (S) Pte Ltd</option>
                <option>Tech Offshore Marine (SV) Pte Ltd</option>
                <option>TOM Offshore Marine Engineering Pte Ltd</option>
                <option>TOM Shipyard Pte Ltd</option>
                <option>TOM Engineering & Trading Pte Ltd</option>
                <option>TOM Industrial Services Pte Ltd</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Class</label>
              <select 
                className="form-control"
                value={formData.class}
                onChange={(e) => handleFormChange('class', e.target.value)}
              >
                <option value="">Select...</option>
                <option>TOM : Projects</option>
                <option>TOM : Operations</option>
                <option>TOM : Maintenance</option>
                <option>TOM : Administration</option>
                <option>TOM : Sales</option>
                <option>TOM : Engineering</option>
                <option>TOM : Fabrication</option>
                <option>TOM : Installation</option>
                <option>TOM : Repair</option>
                <option>TOM : Consultancy</option>
                <option>TOM : Trading</option>
                <option>TOM : Services</option>
                <option>TOM : Rental</option>
                <option>TOM : Supply</option>
                <option>TOM : Support</option>
                <option>TOM : Quality Control</option>
                <option>TOM : Research & Development</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Location <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <select 
                className="form-control"
                value={formData.location}
                onChange={(e) => handleFormChange('location', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Hong Hang Shipyard</option>
                <option>Mega yard</option>
                <option>MEP MARINE CC</option>
                <option>Shipyards/Construction</option>
                <option>Singapore(MEP)</option>
                <option>TOM -11</option>
                <option>TOM External Workshop</option>
                <option>TOM – 13</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Department <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <select 
                className="form-control"
                value={formData.department}
                onChange={(e) => handleFormChange('department', e.target.value)}
              >
                <option value="">Select...</option>
                <option>TOM : Human Resource</option>
                <option>TOM : Finance : Internal Transfer</option>
                <option>TOM : IT</option>
                <option>TOM : Logistic</option>
                <option>TOM : Operating</option>
                <option>TOM : Purchase</option>
                <option>TOM : Sales and Marketing</option>
                <option>TOM : Security</option>
                <option>TOM : TOM INTERNALS : TOM HR</option>
                <option>TOM : Nampak Reinsure</option>
                <option>TOM : Auction Handover</option>
                <option>TOM : Engineering</option>
                <option>TOM : Production</option>
              </select>
            </div>

            <div>
  <label
    style={{
      display: 'block',
      fontSize: '13px',
      color: '#666',
      marginBottom: '8px',
    }}
  >
    Requested By
  </label>
  <select
    className="form-control"
    value={formData.requestedBy}
    onChange={(e) => handleFormChange('requestedBy', e.target.value)}
  >
    <option value="">-- Select Requested By --</option>
    <option value="MEP01 001 JEGANATHAN SUNDARAVELU">
      MEP01 001 JEGANATHAN SUNDARAVELU
    </option>
  </select>
</div>

          </div>
        </div>

        {/* Adjustments Section */}
        <div style={{ 
          background: 'white', 
          borderRadius: '8px', 
          padding: '24px',
          marginBottom: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ 
              fontSize: '16px', 
              fontWeight: '600', 
              color: '#333', 
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <i className="fas fa-list" style={{ color: '#4a90e2' }}></i>
              Adjustments
            </h2>
            <button style={{
              padding: '6px 16px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '13px',
              cursor: 'pointer'
            }}>
              Customize
            </button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
              <thead>
                <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #e0e0e0' }}>
                  <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>ITEM</th>
                  <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>DESCRIPTION</th>
                  <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>UNITS</th>
                  <th style={{ padding: '8px 6px', textAlign: 'right', fontSize: '10px', fontWeight: '600', color: '#666' }}>QTY AS OF DATE ABOVE</th>
                  <th style={{ padding: '8px 6px', textAlign: 'right', fontSize: '10px', fontWeight: '600', color: '#666' }}>VALUE AS OF DATE ABOVE</th>
                  <th style={{ padding: '8px 6px', textAlign: 'right', fontSize: '10px', fontWeight: '600', color: '#666' }}>NEW QTY</th>
                  <th style={{ padding: '8px 6px', textAlign: 'right', fontSize: '10px', fontWeight: '600', color: '#666' }}>NEW VALUE</th>
                </tr>
              </thead>
              <tbody>
                {adjustmentItems.map((item) => (
                  <tr key={item.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={item.item}
                        onChange={(e) => handleItemChange(item.id, 'item', e.target.value)}
                        style={{ minWidth: '120px', fontSize: '11px' }}
                      />
                    </td>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={item.description}
                        onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                        style={{ minWidth: '150px', fontSize: '11px' }}
                      />
                    </td>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={item.units}
                        onChange={(e) => handleItemChange(item.id, 'units', e.target.value)}
                        style={{ minWidth: '60px', fontSize: '11px' }}
                      />
                    </td>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="number" 
                        className="form-control"
                        value={item.qtyAsOfDateAbove}
                        onChange={(e) => handleItemChange(item.id, 'qtyAsOfDateAbove', e.target.value)}
                        style={{ minWidth: '80px', textAlign: 'right', fontSize: '11px' }}
                      />
                    </td>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="number" 
                        className="form-control"
                        value={item.valueAsOfDateAbove}
                        onChange={(e) => handleItemChange(item.id, 'valueAsOfDateAbove', e.target.value)}
                        style={{ minWidth: '80px', textAlign: 'right', fontSize: '11px' }}
                      />
                    </td>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="number" 
                        className="form-control"
                        value={item.newQty}
                        onChange={(e) => handleItemChange(item.id, 'newQty', e.target.value)}
                        style={{ minWidth: '80px', textAlign: 'right', fontSize: '11px' }}
                      />
                    </td>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="number" 
                        className="form-control"
                        value={item.newValue}
                        onChange={(e) => handleItemChange(item.id, 'newValue', e.target.value)}
                        style={{ minWidth: '80px', textAlign: 'right', fontSize: '11px' }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
            <button className="btn btn-primary" onClick={handleAddItem} style={{ fontSize: '13px', padding: '6px 16px' }}>
              <i className="fas fa-plus"></i> Add
            </button>
            <button className="btn btn-secondary" onClick={() => adjustmentItems.length > 0 && handleRemoveItem(adjustmentItems[adjustmentItems.length - 1].id)} style={{ fontSize: '13px', padding: '6px 16px' }}>
              Remove
            </button>
          </div>
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-secondary">
              <i className="fas fa-save"></i>
              Save
            </button>
            <button className="btn btn-primary" onClick={handleSave}>
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
    </div>
  );
};

export default AdjustInventoryWorksheet;
