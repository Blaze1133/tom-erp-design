import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateCustomDeliveryOrder = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Form state
  const [formData, setFormData] = useState({
    customForm: 'TOM Custom Inter...ivery Order Form',
    entryNo: 'DOCTOM00002',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    refProjectNo: '20-0052 Fortis Construction Pte. Ltd',
    refEntity: '109 Bintang Mas Shipping Pte Ltd',
    department: 'MEP',
    amount: 0.00,
    date: '7/1/2022',
    memo: 'test do',
    requestedBy: '',
    shippingAddress: '2 Boon Leat Terrace, #08-02\nHarbourside Building 2, Singapore\n119844.',
    status: 'Delivered',
    po: 'Po123',
    items: []
  });

  const customForms = [
    'TOM Custom Inter...ivery Order Form',
    'TOM Custom Internal Delivery Order Form',
    'TOM Custom Vendor Delivery Order Form'
  ];

  const departments = [
    'MEP',
    'MEP MARINE',
    'O&G',
    'Piping',
    'Shipyard',
    'Shipyard : Keppel Fels',
    'Shipyard : Keppel Shipyard',
    'Shipyard : Megayard'
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

  const handleSave = () => {
    showToast('Delivery Order saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Changes cancelled', 'info');
      window.location.reload();
    }
  };

  const handleAddItem = () => {
    const sampleItems = [
      {
        itemCode: '12" Divider',
        itemDescription: '12" Divider',
        qty: 100,
        rate: '',
        amount: '',
        deliveredQty: '',
        memo: '',
        unitType: ''
      },
      {
        itemCode: '110 V Female Connector',
        itemDescription: '110 V Female Connector',
        qty: 200,
        rate: '',
        amount: '',
        deliveredQty: '',
        memo: '',
        unitType: 'Pcs'
      },
      {
        itemCode: 'Cable Gland M20',
        itemDescription: 'Cable Gland M20 - Brass',
        qty: 150,
        rate: '',
        amount: '',
        deliveredQty: '',
        memo: '',
        unitType: 'Pcs'
      }
    ];
    
    const itemIndex = formData.items.length % sampleItems.length;
    const newItem = {
      id: formData.items.length + 1,
      ...sampleItems[itemIndex]
    };
    
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };

  const handleRemoveItem = (id) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== id)
    }));
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-truck"></i>
          <div>
            <h1>Delivery Order</h1>
            <div className="detail-subtitle">
              <span># To be generated – New Delivery Order</span>
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
        <button className="btn-toolbar" onClick={handleCancel}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
      </div>

      <div className="detail-content">

      <div className="quotation-container">
        {/* Primary Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-info-circle"></i>
            Primary Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">CUSTOM FORM <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.customForm}
                onChange={(e) => handleInputChange('customForm', e.target.value)}
              >
                {customForms.map((form, index) => (
                  <option key={index} value={form}>{form}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">DEPARTMENT <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
              >
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">ENTRY NO.</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.entryNo}
                onChange={(e) => handleInputChange('entryNo', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">AMOUNT</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.amount}
                onChange={(e) => handleInputChange('amount', e.target.value)}
                step="0.01"
              />
            </div>
            <div className="form-group">
              <label className="form-label">SUBSIDIARY</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleInputChange('subsidiary', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">REQUESTED BY</label>
              <input 
                type="text" 
                className="form-control"
                placeholder="<Type then tab>"
                value={formData.requestedBy}
                onChange={(e) => handleInputChange('requestedBy', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">REF PROJECT NO</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.refProjectNo}
                onChange={(e) => handleInputChange('refProjectNo', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">SHIPPING ADDRESS</label>
              <textarea 
                className="form-control"
                value={formData.shippingAddress}
                onChange={(e) => handleInputChange('shippingAddress', e.target.value)}
                rows="3"
              />
            </div>
            <div className="form-group">
              <label className="form-label">REF ENTITY</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.refEntity}
                onChange={(e) => handleInputChange('refEntity', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">STATUS</label>
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
            <div className="form-group">
              <label className="form-label">DATE <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">MEMO</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.memo}
                onChange={(e) => handleInputChange('memo', e.target.value)}
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Other Info */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-list"></i>
            Other Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">PO#</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.po}
                onChange={(e) => handleInputChange('po', e.target.value)}
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Lines Section */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-list-ul"></i>
            Lines
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <button className="add-item-btn" onClick={handleAddItem}>
            <i className="fas fa-plus"></i>
            Add Line
          </button>

          {formData.items.length > 0 ? (
            <div className="items-table-wrapper">
              <table className="detail-items-table">
                <thead>
                  <tr>
                    <th style={{ width: '3%' }}>#</th>
                    <th style={{ width: '12%' }}>ITEM CODE</th>
                    <th style={{ width: '15%' }}>ITEM DESCRIPTION</th>
                    <th style={{ width: '8%' }}>QTY</th>
                    <th style={{ width: '8%' }}>RATE</th>
                    <th style={{ width: '10%' }}>AMOUNT</th>
                    <th style={{ width: '10%' }}>DELIVERED QTY</th>
                    <th style={{ width: '12%' }}>MEMO</th>
                    <th style={{ width: '10%' }}>UNIT TYPE</th>
                    <th style={{ width: '5%' }}>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.items.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input"
                          value={item.itemCode}
                          onChange={(e) => {
                            const newItems = [...formData.items];
                            newItems[index].itemCode = e.target.value;
                            setFormData(prev => ({ ...prev, items: newItems }));
                          }}
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input"
                          value={item.itemDescription}
                          onChange={(e) => {
                            const newItems = [...formData.items];
                            newItems[index].itemDescription = e.target.value;
                            setFormData(prev => ({ ...prev, items: newItems }));
                          }}
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="table-input"
                          value={item.qty}
                          onChange={(e) => {
                            const newItems = [...formData.items];
                            newItems[index].qty = e.target.value;
                            setFormData(prev => ({ ...prev, items: newItems }));
                          }}
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input"
                          value={item.rate}
                          onChange={(e) => {
                            const newItems = [...formData.items];
                            newItems[index].rate = e.target.value;
                            setFormData(prev => ({ ...prev, items: newItems }));
                          }}
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input"
                          value={item.amount}
                          onChange={(e) => {
                            const newItems = [...formData.items];
                            newItems[index].amount = e.target.value;
                            setFormData(prev => ({ ...prev, items: newItems }));
                          }}
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input"
                          value={item.deliveredQty}
                          onChange={(e) => {
                            const newItems = [...formData.items];
                            newItems[index].deliveredQty = e.target.value;
                            setFormData(prev => ({ ...prev, items: newItems }));
                          }}
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input"
                          value={item.memo}
                          onChange={(e) => {
                            const newItems = [...formData.items];
                            newItems[index].memo = e.target.value;
                            setFormData(prev => ({ ...prev, items: newItems }));
                          }}
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="table-input"
                          value={item.unitType}
                          onChange={(e) => {
                            const newItems = [...formData.items];
                            newItems[index].unitType = e.target.value;
                            setFormData(prev => ({ ...prev, items: newItems }));
                          }}
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <button 
                          className="btn-icon-danger"
                          onClick={() => handleRemoveItem(item.id)}
                          title="Remove"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-items-message">
              <p>No lines added yet. Click "Add Line" to start adding lines to this delivery order.</p>
            </div>
          )}
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-secondary" onClick={handleSave}>
              <i className="fas fa-save"></i>
              Save
            </button>
            <button className="btn btn-secondary">
              Actions
            </button>
          </div>
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

export default CreateCustomDeliveryOrder;
