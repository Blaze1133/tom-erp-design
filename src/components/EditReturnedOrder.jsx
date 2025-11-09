import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditReturnedOrder = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('items');
  const [expandedSections, setExpandedSections] = useState({
    primary: true,
    classification: true
  });

  const [formData, setFormData] = useState({
    customForm: 'TOM Item Receipt',
    reference: 'IR00194',
    vendor: 'CHIA HOCK HARDWARE TRADING',
    createdFrom: 'Purchase Order #POTOM00077',
    date: '16/12/2021',
    postingPeriod: 'Dec 2021',
    memo: '',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    currency: 'SGD',
    exchangeRate: '1.00'
  });

  const [items, setItems] = useState([
    {
      id: 1,
      selected: true,
      item: 'safety goggles',
      vendorName: 'safety goggles',
      description: 'safety goggles',
      toLocation: 'TOM - 13',
      onHand: 0,
      remaining: 36,
      quantity: 36,
      units: 'Pcs',
      options: '',
      rate: '',
      currency: 'SGD',
      doQuantity: ''
    },
    {
      id: 2,
      selected: true,
      item: 'Whistle',
      vendorName: 'Whistle',
      description: 'Whistle',
      toLocation: 'TOM - 13',
      onHand: 0,
      remaining: 24,
      quantity: 24,
      units: 'Pcs',
      options: '',
      rate: '',
      currency: 'SGD',
      doQuantity: ''
    },
    {
      id: 3,
      selected: true,
      item: 'Head Light',
      vendorName: 'LED',
      description: 'LED',
      toLocation: 'TOM - 13',
      onHand: 0,
      remaining: 10,
      quantity: 10,
      units: 'Pcs',
      options: '',
      rate: '',
      currency: 'SGD',
      doQuantity: ''
    }
  ]);

  const vendors = [
    'CHIA HOCK HARDWARE TRADING',
    'BNT INTERNATIONAL PTE LTD',
    'METAL FORMS PRIVATE LIMITED'
  ];

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
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

  const tabs = [
    { id: 'items', label: 'Items & Expenses', icon: 'fas fa-box' },
    { id: 'relationships', label: 'Relationships', icon: 'fas fa-link' },
    { id: 'communication', label: 'Communication', icon: 'fas fa-comments' },
    { id: 'system', label: 'System Information', icon: 'fas fa-info-circle' },
    { id: 'custom', label: 'Custom', icon: 'fas fa-cog' }
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

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleToggleItem = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, selected: !item.selected } : item
    ));
  };

  const handleMarkAll = () => {
    setItems(items.map(item => ({ ...item, selected: true })));
    showToast('All items marked', 'info');
  };

  const handleUnmarkAll = () => {
    setItems(items.map(item => ({ ...item, selected: false })));
    showToast('All items unmarked', 'info');
  };

  const handleSave = () => {
    if (!formData.vendor) {
      showToast('Please select a vendor', 'error');
      return;
    }
    showToast('Item Receipt updated successfully!', 'success');
    setCurrentPage('view-returned-orders');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      setCurrentPage('view-returned-orders');
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-box-open" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Edit Item Receipt {formData.reference} {formData.vendor}</h1>
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
          <div 
            className="section-title" 
            onClick={() => toggleSection('primary')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div>
              <i className={`fas fa-chevron-${expandedSections.primary ? 'down' : 'right'}`} style={{ marginRight: '10px' }}></i>
              <i className="fas fa-info-circle" style={{ marginRight: '10px' }}></i>
              Primary Information
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          {expandedSections.primary && (
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">CUSTOM FORM <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.customForm}
                  onChange={(e) => handleInputChange('customForm', e.target.value)}
                >
                  <option value="TOM Item Receipt">TOM Item Receipt</option>
                  <option value="Standard Item Receipt">Standard Item Receipt</option>
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
                <label className="form-label">REFERENCE #</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.reference}
                  readOnly
                  style={{ background: '#f5f5f5' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">POSTING PERIOD</label>
                <select 
                  className="form-control"
                  value={formData.postingPeriod}
                  onChange={(e) => handleInputChange('postingPeriod', e.target.value)}
                >
                  <option value="Dec 2021">Dec 2021</option>
                  <option value="Nov 2021">Nov 2021</option>
                  <option value="Oct 2021">Oct 2021</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">VENDOR <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.vendor}
                  onChange={(e) => handleInputChange('vendor', e.target.value)}
                >
                  <option value="">Select...</option>
                  {vendors.map((vendor, index) => (
                    <option key={index} value={vendor}>{vendor}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">MEMO</label>
                <textarea 
                  className="form-control"
                  value={formData.memo}
                  onChange={(e) => handleInputChange('memo', e.target.value)}
                  rows="2"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">CREATED FROM</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.createdFrom}
                  onChange={(e) => handleInputChange('createdFrom', e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        {/* Classification */}
        <div className="form-section">
          <div 
            className="section-title" 
            onClick={() => toggleSection('classification')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div>
              <i className={`fas fa-chevron-${expandedSections.classification ? 'down' : 'right'}`} style={{ marginRight: '10px' }}></i>
              <i className="fas fa-tags" style={{ marginRight: '10px' }}></i>
              Classification
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          {expandedSections.classification && (
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">SUBSIDIARY <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.subsidiary}
                  onChange={(e) => handleInputChange('subsidiary', e.target.value)}
                >
                  <option value="">Select...</option>
                  {subsidiaries.map((sub, index) => (
                    <option key={index} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">CURRENCY</label>
                <select 
                  className="form-control"
                  value={formData.currency}
                  onChange={(e) => handleInputChange('currency', e.target.value)}
                >
                  <option value="SGD">SGD</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="form-section">
          <div style={{ borderBottom: '2px solid #5b7a9e', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '0' }}>
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '0.75rem 2rem',
                    border: 'none',
                    background: activeTab === tab.id ? '#5b7a9e' : '#e0e0e0',
                    color: activeTab === tab.id ? 'white' : '#666',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {activeTab === 'items' && (
            <>
              <div style={{ marginBottom: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '4px' }}>
                <div style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: '600' }}>EXCHANGE RATE <span className="required">*</span></span>
                </div>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.exchangeRate}
                  onChange={(e) => handleInputChange('exchangeRate', e.target.value)}
                  style={{ maxWidth: '200px' }}
                />
              </div>

              <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                <button className="btn btn-secondary" onClick={handleMarkAll}>
                  Mark All
                </button>
                <button className="btn btn-secondary" onClick={handleUnmarkAll}>
                  Unmark All
                </button>
              </div>

              <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th style={{ width: '40px' }}>RECEIVE</th>
                      <th>ITEM</th>
                      <th>VENDOR NAME</th>
                      <th>DESCRIPTION</th>
                      <th>TO LOCATION</th>
                      <th>ON HAND</th>
                      <th>REMAINING</th>
                      <th>QUANTITY</th>
                      <th>UNITS</th>
                      <th>OPTIONS</th>
                      <th>RATE</th>
                      <th>CURRENCY</th>
                      <th>DO QUANTITY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td style={{ textAlign: 'center' }}>
                          <input 
                            type="checkbox" 
                            checked={item.selected}
                            onChange={() => handleToggleItem(item.id)}
                            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                          />
                        </td>
                        <td style={{ color: 'var(--blue-accent)', fontWeight: '500' }}>{item.item}</td>
                        <td>{item.vendorName}</td>
                        <td>{item.description}</td>
                        <td>
                          <select className="form-control" value={item.toLocation} style={{ minWidth: '150px' }}>
                            {locations.map((loc, index) => (
                              <option key={index} value={loc}>{loc}</option>
                            ))}
                          </select>
                        </td>
                        <td>{item.onHand}</td>
                        <td>{item.remaining}</td>
                        <td><input type="text" className="form-control" value={item.quantity} style={{ width: '80px' }} /></td>
                        <td>{item.units}</td>
                        <td><input type="text" className="form-control" value={item.options} style={{ width: '100px' }} /></td>
                        <td><input type="text" className="form-control" value={item.rate} style={{ width: '100px' }} /></td>
                        <td>{item.currency}</td>
                        <td><input type="text" className="form-control" value={item.doQuantity} style={{ width: '80px' }} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>

        {/* Footer Actions */}
        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-primary" onClick={handleSave}>
              <i className="fas fa-save"></i>
              Save
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

export default EditReturnedOrder;
