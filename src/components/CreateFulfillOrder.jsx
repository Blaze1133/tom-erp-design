import React, { useState, useEffect } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateFulfillOrder = ({ setCurrentPage, isEdit = false }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('items');

  const [formData, setFormData] = useState({
    customForm: 'TOM Item Fulfillment',
    toBeGenerated: true,
    date: '8/11/2025',
    postingPeriod: 'Nov 2025',
    customer: '21-0162 Piping Modification Works',
    createdFrom: 'Sales Order #S2100065',
    memo: ''
  });

  const [items, setItems] = useState([
    {
      id: 1,
      fulfill: true,
      item: 'Fabrication',
      description: 'To provide qualified skilled Supervisor, technicians, consumables, and necessary hand tools to carry out the following scope of work.\nDwg No: P2107-06001-0100-DG-0001\nScope of Work:\nMakeup an interface spool for HRP001 to C01 SPHL\n>Carry out Fit-up and Fabricating to Swelling the Flange and Pipe Spool\n>To carry out Fit-up works.\n>To conduct inspection with client and TOM QC before welding.\n>To carry out Fit-up in line with qualified and proposed WPS and issued as per ASME Sec IX\n>To carry out 100% RT, & RT to the weld point with in-house certificate.\n>To carry out hydro test with in-house certificate.\n>To carry out NDT as per the weld joint.',
      location: '',
      onHand: '',
      remaining: 1,
      committed: '',
      quantity: 1,
      units: '',
      options: ''
    }
  ]);

  const customForms = [
    'TOM Item Fulfillment',
    'Standard Item Fulfillment',
    'TOM Transfer Item Fulfillment',
    'TOM Work Completion Certificate'
  ];

  const postingPeriods = [
    'Nov 2025',
    'Oct 2025',
    'Sep 2025',
    'Aug 2025'
  ];

  const tabs = [
    { id: 'items', label: 'Items', icon: 'fas fa-box' },
    { id: 'shipping', label: 'Shipping', icon: 'fas fa-shipping-fast' },
    { id: 'packages', label: 'Packages', icon: 'fas fa-cube' },
    { id: 'relationships', label: 'Relationships', icon: 'fas fa-link' },
    { id: 'communication', label: 'Communication', icon: 'fas fa-comments' },
    { id: 'system-info', label: 'System Information', icon: 'fas fa-info-circle' },
    { id: 'custom', label: 'Custom', icon: 'fas fa-cog' }
  ];

  useEffect(() => {
    // Load data from sessionStorage if coming from list view
    const storedData = sessionStorage.getItem('fulfillOrderData');
    if (storedData) {
      const orderData = JSON.parse(storedData);
      setFormData(prev => ({
        ...prev,
        customer: orderData.customerProject,
        createdFrom: `Sales Order #${orderData.orderNo}`,
        memo: orderData.memo
      }));
      sessionStorage.removeItem('fulfillOrderData');
    }
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
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

  const handleMarkAll = () => {
    setItems(items.map(item => ({ ...item, fulfill: true })));
    showToast('All items marked', 'info');
  };

  const handleUnmarkAll = () => {
    setItems(items.map(item => ({ ...item, fulfill: false })));
    showToast('All items unmarked', 'info');
  };

  const handleSave = () => {
    if (!formData.customForm) {
      showToast('Please select a custom form', 'error');
      return;
    }
    showToast(isEdit ? 'Item Fulfillment updated successfully!' : 'Item Fulfillment saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      setCurrentPage('view-fulfill-orders');
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Item Fulfillment</h1>
          {formData.toBeGenerated && (
            <span style={{ 
              marginLeft: '1rem', 
              padding: '0.25rem 0.75rem', 
              background: '#fff3cd', 
              color: '#856404',
              borderRadius: '4px',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}>
              To Be Generated
            </span>
          )}
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
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
              <label className="form-label">DATE <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">TO BE GENERATED</label>
              <input 
                type="checkbox" 
                checked={formData.toBeGenerated}
                onChange={(e) => handleInputChange('toBeGenerated', e.target.checked)}
                style={{ width: 'auto', marginTop: '0.5rem' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label">POSTING PERIOD</label>
              <select 
                className="form-control"
                value={formData.postingPeriod}
                onChange={(e) => handleInputChange('postingPeriod', e.target.value)}
              >
                {postingPeriods.map((period, index) => (
                  <option key={index} value={period}>{period}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">CUSTOMER</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.customer}
                readOnly
                style={{ background: '#f5f5f5' }}
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

            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label">CREATED FROM</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.createdFrom}
                readOnly
                style={{ background: '#f5f5f5', color: '#4a90e2', fontWeight: '500' }}
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Tabs Section */}
        <div className="form-section">
          <div style={{ borderBottom: '2px solid #e0e0e0', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto' }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    border: 'none',
                    background: activeTab === tab.id ? '#4a90e2' : 'transparent',
                    color: activeTab === tab.id ? 'white' : '#666',
                    borderBottom: activeTab === tab.id ? '3px solid #4a90e2' : '3px solid transparent',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <i className={tab.icon}></i>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Items Tab Content */}
          {activeTab === 'items' && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: '600', color: '#333' }}>
                  <i className="fas fa-box" style={{ marginRight: '0.5rem', color: '#4a90e2' }}></i>
                  Items
                </h3>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-secondary" onClick={handleMarkAll}>
                    <i className="fas fa-check-square"></i>
                    Mark All
                  </button>
                  <button className="btn btn-secondary" onClick={handleUnmarkAll}>
                    <i className="fas fa-square"></i>
                    Unmark All
                  </button>
                </div>
              </div>

              <div className="items-table-container">
                <table className="items-table">
                  <thead>
                    <tr>
                      <th style={{ width: '50px' }}>FULFILL</th>
                      <th>ITEM</th>
                      <th>DESCRIPTION</th>
                      <th>LOCATION</th>
                      <th style={{ textAlign: 'right' }}>ON HAND</th>
                      <th style={{ textAlign: 'right' }}>REMAINING</th>
                      <th style={{ textAlign: 'right' }}>COMMITTED</th>
                      <th style={{ textAlign: 'right' }}>QUANTITY</th>
                      <th>UNITS</th>
                      <th>OPTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td style={{ textAlign: 'center' }}>
                          <input 
                            type="checkbox" 
                            checked={item.fulfill}
                            onChange={(e) => handleItemChange(item.id, 'fulfill', e.target.checked)}
                            style={{ cursor: 'pointer' }}
                          />
                        </td>
                        <td>{item.item}</td>
                        <td>
                          <div style={{ maxWidth: '400px', whiteSpace: 'pre-wrap', fontSize: '0.8rem', lineHeight: '1.4' }}>
                            {item.description}
                          </div>
                        </td>
                        <td>
                          <select 
                            className="form-control"
                            value={item.location}
                            onChange={(e) => handleItemChange(item.id, 'location', e.target.value)}
                            style={{ minWidth: '150px' }}
                          >
                            <option value=""></option>
                            <option value="Hong Hang Shipyard">Hong Hang Shipyard</option>
                            <option value="Mega yard">Mega yard</option>
                            <option value="MEP MARINE CC">MEP MARINE CC</option>
                            <option value="Singapore (MEP)">Singapore (MEP)</option>
                            <option value="TOM-11">TOM-11</option>
                          </select>
                        </td>
                        <td style={{ textAlign: 'right' }}>{item.onHand}</td>
                        <td style={{ textAlign: 'right' }}>{item.remaining}</td>
                        <td style={{ textAlign: 'right' }}>{item.committed}</td>
                        <td style={{ textAlign: 'right' }}>
                          <input 
                            type="number" 
                            className="form-control"
                            value={item.quantity}
                            onChange={(e) => handleItemChange(item.id, 'quantity', e.target.value)}
                            style={{ width: '80px', textAlign: 'right' }}
                          />
                        </td>
                        <td>{item.units}</td>
                        <td>{item.options}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Other Tabs Placeholder */}
          {activeTab !== 'items' && (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>
              <i className="fas fa-info-circle" style={{ fontSize: '2rem', marginBottom: '1rem' }}></i>
              <p>{tabs.find(t => t.id === activeTab)?.label} section - Coming soon</p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="footer-actions" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          padding: '1.5rem 0',
          borderTop: '1px solid #e0e0e0',
          marginTop: '2rem'
        }}>
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="btn btn-secondary" onClick={handleSave}>
              <i className="fas fa-save"></i>
              Save
            </button>
          </div>
        </div>
      </div>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
    </div>
  );
};

export default CreateFulfillOrder;
