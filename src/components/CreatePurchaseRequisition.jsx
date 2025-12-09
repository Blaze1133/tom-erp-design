import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreatePurchaseRequisition = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [isSaved, setIsSaved] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  // Form state
  const [formData, setFormData] = useState({
    amount: 0.00,
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    refProjectNo: '',
    requestedBy: '',
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
    'Enquiry PR',
    'Store Requisition'
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

  const handleSaveRequisition = () => {
    setIsSaved(true);
    showToast('Purchase Requisition saved successfully!', 'success');
  };

  const handleBack = () => {
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
      const rect = event.currentTarget.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX
      });
      setActiveMenu(index);
    }
  };

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
          <button className="btn-action" onClick={() => setCurrentPage && setCurrentPage('view-purchase-requisition')}>List</button>
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
                <label>POSTING PERIOD</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.postingPeriod}
                  onChange={(e) => handleFormChange('postingPeriod', e.target.value)}
                />
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
              <div className="detail-field">
                <label>AMOUNT</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={calculateSubtotal().toFixed(2)}
                  disabled
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
                <label>REF PROJECT NO.</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.refProjectNo}
                  onChange={(e) => handleFormChange('refProjectNo', e.target.value)}
                  placeholder="<Type then Tab>"
                />
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
                <label>REQUESTED BY</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.requestedBy}
                  onChange={(e) => handleFormChange('requestedBy', e.target.value)}
                  placeholder="<Type then Tab>"
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

        {/* Items Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Lines</h3>
          </div>
          <div className="section-body">
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
                      <th>MEMO</th>
                      <th>NAME</th>
                      <th>DEPARTMENT</th>
                      <th>CLASS</th>
                      <th>PO QUANTITY</th>
                      <th>RCL QUANTITY</th>
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
                          <button
                            className="row-menu-btn"
                            onClick={(e) => handleMenuToggle(index, e)}
                            style={{ 
                              opacity: hoveredRow === index ? 1 : 0,
                              transition: 'opacity 0.2s'
                            }}
                          >
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          {activeMenu === index && (
                            <div 
                              className="row-menu"
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

            {formData.items.length > 0 && (
              <div className="summary-grid">
                <div className="summary-card" style={{ background: '#f8f9fa' }}>
                  <div className="summary-title">TOTAL AMOUNT</div>
                  <div className="summary-value" style={{ color: '#4a90e2' }}>${calculateSubtotal().toFixed(2)}</div>
                </div>
              </div>
            )}
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
