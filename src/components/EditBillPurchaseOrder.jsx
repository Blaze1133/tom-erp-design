import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditBillPurchaseOrder = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Form state with pre-filled data
  const [formData, setFormData] = useState({
    prId: 'PR-2021-0145',
    project: 'TOM-ONSHORE-TRADING',
    poNumber: 'POTOMO0327',
    vendor: 'CHIA HOCK HARDWARE TRADING',
    status: 'PENDING BILL',
    tomCustomerOrder: 'TOM-ONSHORE-TRADING',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    department: 'MEP',
    class: 'Consumable Item',
    location: 'TOM -11',
    currency: 'SGD',
    purchaseType: 'Non-Critical',
    customCreatedFrom: 'Order to Bill single Vendor',
    exchangeRate: 1.00,
    memo: 'M-EXPO-07',
    date: '2021-08-07',
    refPoNumber: 'POTOMO0327',
    otherComments: 'IF NOT COMPLETE OR DEFECT, INSTRUCTION PERSON CONTACT LET',
    approvalStatus: 'Approved',
    items: [
      {
        id: 1,
        item: 'Whistle',
        vendorName: '',
        received: 30,
        billed: 0,
        onHand: 30,
        quantity: 30,
        units: 'Pcs',
        description: '',
        rate: 1.50,
        taxCode: 'GST_SG-7%',
        amount: 45.00,
        taxRate: 7.0,
        grossAmt: 48.15,
        taxAmt: 3.15
      }
    ]
  });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    showToast('Purchase Order updated successfully!', 'success');
    setTimeout(() => {
      if (setCurrentPage) {
        setCurrentPage('view-bill-purchase-order-detail');
      }
    }, 1500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-bill-purchase-order-detail');
      }
    }
  };

  const handleAddItem = () => {
    const newItem = {
      id: formData.items.length + 1,
      item: '',
      vendorName: '',
      received: 0,
      billed: 0,
      onHand: 0,
      quantity: 0,
      units: 'Pcs',
      description: '',
      rate: 0.00,
      taxCode: 'GST_SG-7%',
      amount: 0.00,
      taxRate: 7.0,
      grossAmt: 0.00,
      taxAmt: 0.00
    };
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };

  const handleClearItems = () => {
    if (window.confirm('Are you sure you want to clear all items?')) {
      setFormData(prev => ({
        ...prev,
        items: []
      }));
    }
  };

  const subtotal = formData.items.reduce((sum, item) => sum + item.amount, 0);
  const taxTotal = formData.items.reduce((sum, item) => sum + item.taxAmt, 0);
  const total = subtotal + taxTotal;

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Purchase Order</h1>
          <span style={{ fontSize: '18px', color: '#666', marginLeft: '10px' }}>{formData.poNumber}</span>
          <span style={{ 
            padding: '4px 12px', 
            background: '#ffc107', 
            color: '#333', 
            borderRadius: '3px', 
            fontSize: '12px',
            fontWeight: '600',
            marginLeft: '15px'
          }}>
            {formData.status}
          </span>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-info-circle"></i>
            Primary Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0 1rem 0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label required">PR ID</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.prId}
                onChange={(e) => handleFormChange('prId', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label required">PROJECT</label>
              <select 
                className="form-control"
                value={formData.project}
                onChange={(e) => handleFormChange('project', e.target.value)}
              >
                <option>TOM-ONSHORE-TRADING</option>
                <option>MEP-MARINE-PROJECT-2021</option>
                <option>SHIPYARD-CONSTRUCTION-2021</option>
                <option>OFFSHORE-PLATFORM-UPGRADE</option>
                <option>PIPING-FABRICATION-PROJECT</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label required">CUSTOM FORM</label>
              <select 
                className="form-control"
                value={formData.customForm}
                onChange={(e) => handleFormChange('customForm', e.target.value)}
              >
                <option>TOM Purchase Order</option>
                <option>Standard Drop Ship Purchase Order</option>
                <option>Standard Purchase Order</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">RECEIVE BY</label>
              <input 
                type="text" 
                className="form-control"
                placeholder=""
              />
            </div>

            <div className="form-group">
              <label className="form-label">VENDOR #</label>
              <input 
                type="text" 
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="form-label required">DATE</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleFormChange('date', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label required">VENDOR</label>
              <select 
                className="form-control"
                value={formData.vendor}
                onChange={(e) => handleFormChange('vendor', e.target.value)}
              >
                <option>CHIA HOCK HARDWARE TRADING</option>
                <option>TRONIX WORLD LOGISTICS PTE LTD</option>
                <option>METAL FORMS PRIVATE LIMITED</option>
                <option>MEE DEMAG (S) PTE LTD</option>
                <option>TAT ENG INDUSTRIES PTE LTD</option>
                <option>SUPER GALVANISING PTE LTD</option>
                <option>Techniques Air Conditioning & Refrigeration</option>
                <option>EASTERN SEALAND SUPPLY PTE LTD</option>
                <option>HOE HUAT HARDWARE (S) PTE LTD</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">PO #</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.poNumber}
                onChange={(e) => handleFormChange('poNumber', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">PO TYPE</label>
              <select 
                className="form-control"
              >
                <option>Main</option>
                <option>Sub</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">OTHER COMMENTS OR SPECIAL INSTRUCTIONS</label>
              <textarea 
                className="form-control"
                value={formData.otherComments}
                onChange={(e) => handleFormChange('otherComments', e.target.value)}
                rows="2"
              />
            </div>

            <div className="form-group">
              <label className="form-label">REF PO NUMBER</label>
              <input 
                type="text" 
                className="form-control"
                placeholder="<Type then tab>"
              />
            </div>

            <div className="form-group">
              <label className="form-label">APPROVAL STATUS</label>
              <select 
                className="form-control"
                value={formData.approvalStatus}
                onChange={(e) => handleFormChange('approvalStatus', e.target.value)}
              >
                <option>Approved</option>
                <option>Pending Approval</option>
                <option>Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className="form-section" style={{ marginTop: '1.5rem' }}>
          <h2 className="section-title">
            <i className="fas fa-tags"></i>
            Classification
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0 1rem 0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label required">SUBSIDIARY</label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleFormChange('subsidiary', e.target.value)}
              >
                <option>Tech Onshore MEP Prefabricators Pte Ltd.</option>
                <option>Tech Electric & Automation Pte Ltd</option>
                <option>Tech Marine Offshore (S) Pte Ltd</option>
                <option>Tech Offshore Marine (DQ) Pte Ltd</option>
                <option>Tech Offshore Marine (s) Pte Ltd</option>
                <option>Tech Offshore Marine (SV) Pte Ltd</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">CLASS</label>
              <select 
                className="form-control"
                value={formData.class}
                onChange={(e) => handleFormChange('class', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Consumable Item</option>
                <option>Electrical Works</option>
                <option>Engineering Services</option>
                <option>Fabrication Works</option>
                <option>Installation Works</option>
                <option>Marine Equipment</option>
                <option>Material Supply</option>
                <option>MEP Works</option>
                <option>Mechanical Works</option>
                <option>Piping Works</option>
                <option>Project Management</option>
                <option>Rental Equipment</option>
                <option>Structural Works</option>
                <option>Technical Consultancy</option>
                <option>Testing & Commissioning</option>
                <option>Transportation</option>
                <option>Welding Services</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">LOCATION</label>
              <select 
                className="form-control"
                value={formData.location}
                onChange={(e) => handleFormChange('location', e.target.value)}
              >
                <option>TOM -11</option>
                <option>Singapore(MEP)</option>
                <option>Mega yard</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">DEPARTMENT</label>
              <select 
                className="form-control"
                value={formData.department}
                onChange={(e) => handleFormChange('department', e.target.value)}
              >
                <option>MEP</option>
                <option>Construction</option>
                <option>MEP MARINE</option>
                <option>O&G</option>
                <option>Piping</option>
                <option>Shipyard</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">CURRENCY</label>
              <select 
                className="form-control"
                value={formData.currency}
                onChange={(e) => handleFormChange('currency', e.target.value)}
              >
                <option>SGD</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">PURCHASE TYPE</label>
              <select 
                className="form-control"
                value={formData.purchaseType}
                onChange={(e) => handleFormChange('purchaseType', e.target.value)}
              >
                <option>Non-Critical</option>
                <option>Critical</option>
                <option>Urgent</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">CUSTOM CREATED FROM</label>
              <select 
                className="form-control"
                value={formData.customCreatedFrom}
                onChange={(e) => handleFormChange('customCreatedFrom', e.target.value)}
              >
                <option>Order to Bill single Vendor</option>
                <option>Direct Purchase Order</option>
              </select>
            </div>
          </div>
        </div>

        {/* Items Section */}
        <div className="form-section" style={{ marginTop: '1.5rem' }}>
          <h2 className="section-title">
            <i className="fas fa-list"></i>
            Items
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0 1rem 0' }} />

          <div style={{ marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'center' }}>
            <label style={{ fontSize: '12px', fontWeight: '600' }}>EXCHANGE RATE</label>
            <input 
              type="number" 
              className="form-control"
              value={formData.exchangeRate}
              onChange={(e) => handleFormChange('exchangeRate', e.target.value)}
              style={{ width: '100px' }}
              step="0.01"
            />
          </div>

          <div style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
            <button className="btn btn-secondary" onClick={handleAddItem}>
              <i className="fas fa-plus"></i> Add Multiple
            </button>
            <button className="btn btn-secondary" onClick={handleClearItems}>
              <i className="fas fa-trash"></i> Clear All Lines
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-copy"></i> Copy Previous
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-download"></i> Import
            </button>
          </div>

          <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="items-table" style={{ width: '100%', minWidth: '2000px' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px 6px', fontSize: '11px', minWidth: '150px' }}>ITEM</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>VENDOR NAME</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>RECEIVED</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>BILLED</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>ON HAND</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>QUANTITY</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>UNITS</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DESCRIPTION</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>RATE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>TAX CODE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>AMOUNT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>TAX RATE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>GROSS AMT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>TAX AMT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>OPTIONS</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>CUSTOMER:PROJECT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DEPARTMENT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>CLASS</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>BILLABLE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>MATCH BILL TO RECEIPT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>EXPECTED RECEIPT DATE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>CLOSED</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DO QUANTITY</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>HISTORY</th>
                </tr>
              </thead>
              <tbody>
                {formData.items.map((item, index) => (
                  <tr key={item.id}>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="text" 
                        className="table-input" 
                        value={item.item}
                        style={{ width: '150px' }} 
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="text" 
                        className="table-input" 
                        value={item.vendorName}
                        style={{ width: '100%' }} 
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="number" 
                        className="table-input" 
                        value={item.received}
                        style={{ width: '80px' }} 
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="number" 
                        className="table-input" 
                        value={item.billed}
                        style={{ width: '80px' }} 
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="number" 
                        className="table-input" 
                        value={item.onHand}
                        style={{ width: '80px' }} 
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="number" 
                        className="table-input" 
                        value={item.quantity}
                        style={{ width: '80px' }} 
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <select className="table-input" style={{ width: '80px' }}>
                        <option>Pcs</option>
                        <option>Kg</option>
                        <option>M</option>
                      </select>
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="text" 
                        className="table-input" 
                        value={item.description}
                        style={{ width: '150px' }} 
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="number" 
                        className="table-input" 
                        value={item.rate}
                        style={{ width: '80px' }} 
                        step="0.01"
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <select className="table-input" style={{ width: '100px' }}>
                        <option>GST_SG-7%</option>
                        <option>GST_SG-0%</option>
                      </select>
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="number" 
                        className="table-input" 
                        value={item.amount}
                        style={{ width: '90px' }} 
                        readOnly
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="text" 
                        className="table-input" 
                        value={`${item.taxRate}%`}
                        style={{ width: '60px' }} 
                        readOnly
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="number" 
                        className="table-input" 
                        value={item.grossAmt}
                        style={{ width: '90px' }} 
                        readOnly
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="number" 
                        className="table-input" 
                        value={item.taxAmt}
                        style={{ width: '80px' }} 
                        readOnly
                      />
                    </td>
                    <td style={{ padding: '4px', textAlign: 'center' }}>
                      <button className="btn-icon" title="Remove">
                        <i className="fas fa-trash" style={{ color: '#e53e3e' }}></i>
                      </button>
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="text" 
                        className="table-input" 
                        style={{ width: '120px' }} 
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <select className="table-input" style={{ width: '100px' }}>
                        <option>TOM</option>
                        <option>MEP</option>
                        <option>Construction</option>
                      </select>
                    </td>
                    <td style={{ padding: '4px' }}>
                      <select className="table-input" style={{ width: '150px' }}>
                        <option value="">Select...</option>
                        <option>Consumable Item</option>
                        <option>Electrical Works</option>
                        <option>Engineering Services</option>
                        <option>Fabrication Works</option>
                        <option>Installation Works</option>
                        <option>Marine Equipment</option>
                        <option>Material Supply</option>
                        <option>MEP Works</option>
                        <option>Mechanical Works</option>
                        <option>Piping Works</option>
                        <option>Project Management</option>
                        <option>Rental Equipment</option>
                        <option>Structural Works</option>
                        <option>Technical Consultancy</option>
                        <option>Testing & Commissioning</option>
                        <option>Transportation</option>
                        <option>Welding Services</option>
                      </select>
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="checkbox" 
                        className="table-input" 
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="checkbox" 
                        className="table-input" 
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="date" 
                        className="table-input" 
                        style={{ width: '120px' }} 
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="checkbox" 
                        className="table-input" 
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input 
                        type="number" 
                        className="table-input" 
                        style={{ width: '80px' }} 
                      />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <button 
                        className="view-link"
                        style={{ fontSize: '12px' }}
                      >
                        History
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Section Below Table */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '20px', 
            marginTop: '30px',
            padding: '0 20px'
          }}>
            <div style={{ 
              background: 'white', 
              padding: '20px', 
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
              border: '1px solid #e0e0e0'
            }}>
              <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                SUBTOTAL
              </div>
              <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                ${subtotal.toFixed(2)}
              </div>
            </div>

            <div style={{ 
              background: 'white', 
              padding: '20px', 
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
              border: '1px solid #e0e0e0'
            }}>
              <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                TAX AMOUNT
              </div>
              <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                ${taxTotal.toFixed(2)}
              </div>
            </div>

            <div style={{ 
              background: 'white', 
              padding: '20px', 
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
              border: '1px solid #e0e0e0'
            }}>
              <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                DISCOUNT
              </div>
              <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                $0.00
              </div>
            </div>

            <div style={{ 
              background: 'white', 
              padding: '20px', 
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
              border: '1px solid #e0e0e0'
            }}>
              <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                TOTAL AMOUNT
              </div>
              <div style={{ fontSize: '24px', fontWeight: '600', color: '#e53e3e' }}>
                ${total.toFixed(2)}
              </div>
            </div>
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

export default EditBillPurchaseOrder;
