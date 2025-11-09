import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const IssueReturnAuthorization = ({ onBack }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('items');
  const [expandedSections, setExpandedSections] = useState({
    primary: true,
    sales: true,
    classification: true
  });

  const [formData, setFormData] = useState({
    customForm: 'TOM Return Authorization - Credit',
    rmaAuth: 'To Be Generated',
    customerProject: '',
    po: '',
    memo: '',
    date: new Date().toLocaleDateString('en-GB'),
    status: 'Pending Approval',
    salesRep: '',
    salesEffectiveDate: '',
    createdFrom: '',
    subsidiary: '',
    class: '',
    location: '',
    department: '',
    contactPerson: '',
    hsCode: '',
    countryOfOrigin: ''
  });

  const [items, setItems] = useState([]);

  const customerProjects = [
    '100 Baroid Surface Solutions, Halliburton Energy Services Inc',
    '1000 TEAM LEAD CONSTRUCTION PTE LTD',
    'TOM22-00656 TEAM LEAD CONSTRUCTION PTE LTD : 25-00003-TLC-Nursing Home @ Hougang Ave 1',
    '1001 TECH ONSHORE MEP-PREFABRICATORS PTE LTD',
    'TOM22-00733 TECH ONSHORE MEP-PREFABRICATORS PTE LTD : 25-00010-TOM-Riser Concept',
    'TOM22-00741 TECH ONSHORE MEP-PREFABRICATORS PTE LTD : 25-00015-TOM-TOM Innovation',
    '1002 TECH MARINE OFFSHORE (S) PTE LTD'
  ];

  const salesReps = [
    'MEP049 Camila Shirde',
    'MEP054 Kandasamy Kannan',
    'MEP057 Mahendran S/O Minisamy',
    'MEP074 Sasapu Venkateswara Rao',
    'Praveen Chandraseka',
    'TDQ059 Kumarasamy Madhavan Subbiah',
    'TEA100 Pitchai Balaguru'
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

  const classes = [
    'Consumable Item',
    'Course',
    'Cutting Works',
    'Electrical',
    'Fabrication',
    'Hydrotesting',
    'Installation work',
    'Manpower Supply',
    'Material Supply',
    'Module /Prefab',
    'Piping',
    'Project Works',
    'Refurbishment works',
    'Rental',
    'Repair & Referable',
    'Sale of Scrap Metal',
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

  const departments = [
    'TOM: Human Resource',
    'TOM: Finance: Internal Transfer',
    'TOM: IT',
    'TOM: Logistic',
    'TOM: Operating',
    'TOM: Purchase',
    'TOM: Sales and Marketing',
    'TOM: Security',
    'TOM: TOM INTERNALS: TOM HR',
    'TOM: Nampak Reinsure',
    'TOM: Auction Handover',
    'TOM: Engineering',
    'TOM: Production'
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

  const handleAddItem = () => {
    setItems([...items, {
      id: Date.now(),
      item: '',
      quantity: '',
      units: '',
      description: '',
      price: '',
      unitPrice: '',
      code: '',
      amount: '',
      costRate: '',
      taxAmt: '',
      grossAmt: '',
      options: '',
      closed: '',
      estimatedExtendedCost: '',
      serialNumbers: '',
      hsCode: ''
    }]);
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const calculateTotals = () => {
    const subtotal = items.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
    const discount = 0;
    const taxTotal = items.reduce((sum, item) => sum + (parseFloat(item.taxAmt) || 0), 0);
    const total = subtotal - discount + taxTotal;

    return { subtotal, discount, taxTotal, total };
  };

  const totals = calculateTotals();

  const handleSave = () => {
    if (!formData.customerProject) {
      showToast('Please select a customer/project', 'error');
      return;
    }
    showToast('Return Authorization saved successfully!', 'success');
    if (onBack) onBack();
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (onBack) onBack();
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-undo" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Return Authorization</h1>
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
                  <option value="TOM Return Authorization - Credit">TOM Return Authorization - Credit</option>
                  <option value="Standard Return Authorization - Cash">Standard Return Authorization - Cash</option>
                  <option value="Standard Return Authorization - Credit">Standard Return Authorization - Credit</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">RMA AUTH. #</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.rmaAuth}
                  readOnly
                  style={{ background: '#f5f5f5' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">CUSTOMER : PROJECT <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.customerProject}
                  onChange={(e) => handleInputChange('customerProject', e.target.value)}
                >
                  <option value="">{'<Type then tab>'}</option>
                  {customerProjects.map((project, index) => (
                    <option key={index} value={project}>{project}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">PO #</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.po}
                  onChange={(e) => handleInputChange('po', e.target.value)}
                />
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
                <textarea 
                  className="form-control"
                  value={formData.memo}
                  onChange={(e) => handleInputChange('memo', e.target.value)}
                  rows="2"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">STATUS <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.status}
                  onChange={(e) => handleInputChange('status', e.target.value)}
                >
                  <option value="Pending Approval">Pending Approval</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Sales Information */}
        <div className="form-section">
          <div 
            className="section-title" 
            onClick={() => toggleSection('sales')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div>
              <i className={`fas fa-chevron-${expandedSections.sales ? 'down' : 'right'}`} style={{ marginRight: '10px' }}></i>
              <i className="fas fa-chart-line" style={{ marginRight: '10px' }}></i>
              Sales Information
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          {expandedSections.sales && (
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">SALES REP</label>
                <select 
                  className="form-control"
                  value={formData.salesRep}
                  onChange={(e) => handleInputChange('salesRep', e.target.value)}
                >
                  <option value="">Select...</option>
                  {salesReps.map((rep, index) => (
                    <option key={index} value={rep}>{rep}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">SALES EFFECTIVE DATE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.salesEffectiveDate}
                  onChange={(e) => handleInputChange('salesEffectiveDate', e.target.value)}
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
                <label className="form-label">CLASS</label>
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

              <div className="form-group">
                <label className="form-label">LOCATION</label>
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

              <div className="form-group">
                <label className="form-label">DEPARTMENT <span className="required">*</span></label>
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

              <div className="form-group">
                <label className="form-label">CONTACT PERSON</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.contactPerson}
                  onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">HS CODE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.hsCode}
                  onChange={(e) => handleInputChange('hsCode', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">COUNTRY OF ORIGIN</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.countryOfOrigin}
                  onChange={(e) => handleInputChange('countryOfOrigin', e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        {/* Items Tab */}
        <div className="form-section">
          <div style={{ borderBottom: '2px solid #5b7a9e', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '0' }}>
              <button
                onClick={() => setActiveTab('items')}
                style={{
                  padding: '0.75rem 2rem',
                  border: 'none',
                  background: activeTab === 'items' ? '#5b7a9e' : '#e0e0e0',
                  color: activeTab === 'items' ? 'white' : '#666',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
              >
                Items
              </button>
            </div>
          </div>

          {activeTab === 'items' && (
            <>
              <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                <button className="btn btn-secondary" onClick={handleAddItem}>
                  <i className="fas fa-plus"></i>
                  Add Multiple
                </button>
                <button className="btn btn-secondary">
                  <i className="fas fa-upload"></i>
                  Upsell Items
                </button>
                <button className="btn btn-secondary">
                  <i className="fas fa-eraser"></i>
                  Clear All Lines
                </button>
              </div>

              <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th style={{ width: '40px' }}></th>
                      <th>ITEM <span className="required">*</span></th>
                      <th>QUANTITY</th>
                      <th>UNITS</th>
                      <th>DESCRIPTION</th>
                      <th>PRICE LEVEL</th>
                      <th>UNIT PRICE</th>
                      <th>CODE</th>
                      <th>AMOUNT</th>
                      <th>COST RATE</th>
                      <th>TAX AMT</th>
                      <th>GROSS AMT</th>
                      <th>OPTIONS</th>
                      <th>CLOSED</th>
                      <th>ESTIMATED EXTENDED COST</th>
                      <th>SERIAL/LOT NUMBERS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.length === 0 ? (
                      <tr>
                        <td colSpan="16" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                          No items added. Click "Add Multiple" to add items.
                        </td>
                      </tr>
                    ) : (
                      items.map((item) => (
                        <tr key={item.id}>
                          <td style={{ textAlign: 'center' }}>
                            <button 
                              className="btn-icon" 
                              onClick={() => handleRemoveItem(item.id)}
                              style={{ color: '#dc3545' }}
                            >
                              <i className="fas fa-times"></i>
                            </button>
                          </td>
                          <td><input type="text" className="form-control" style={{ minWidth: '150px' }} /></td>
                          <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                          <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                          <td><input type="text" className="form-control" style={{ minWidth: '200px' }} /></td>
                          <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                          <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                          <td><input type="text" className="form-control" style={{ width: '80px' }} /></td>
                          <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                          <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                          <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                          <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                          <td><input type="text" className="form-control" style={{ width: '100px' }} /></td>
                          <td><input type="checkbox" /></td>
                          <td><input type="text" className="form-control" style={{ width: '120px' }} /></td>
                          <td><input type="text" className="form-control" style={{ minWidth: '150px' }} /></td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Summary - Below table */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>
                <div style={{ background: 'white', padding: '1.25rem', border: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                    SUBTOTAL
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                    ${totals.subtotal.toFixed(2)}
                  </div>
                </div>
                <div style={{ background: 'white', padding: '1.25rem', border: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                    DISCOUNT
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                    ${totals.discount.toFixed(2)}
                  </div>
                </div>
                <div style={{ background: 'white', padding: '1.25rem', border: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                    TAX TOTAL
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                    ${totals.taxTotal.toFixed(2)}
                  </div>
                </div>
                <div style={{ background: 'white', padding: '1.25rem', border: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                    TOTAL
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '600', color: '#4a90e2' }}>
                    ${totals.total.toFixed(2)}
                  </div>
                </div>
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

export default IssueReturnAuthorization;
