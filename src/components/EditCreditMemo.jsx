import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditCreditMemo = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [expandedSections, setExpandedSections] = useState({
    primary: true,
    sales: true,
    classification: true
  });

  const [formData, setFormData] = useState({
    customForm: 'TOM Credit Memo',
    credit: 'CN21TOMHQ00002',
    customerProject: '845 Mazars Doubtful Debts',
    date: '1/1/2021',
    postingPeriod: 'Jan 2021',
    po: '',
    memo: '',
    salesRep: '',
    salesEffectiveDate: '1/1/2021',
    subsidiary: 'Tech Offshore Marine (DQ) Pte Ltd',
    class: '',
    location: 'Singapore (TDQ)',
    department: '',
    contactPerson: '',
    submissionId: '',
    hsCode: '',
    countryOfOrigin: ''
  });

  const [items, setItems] = useState([
    {
      id: 1,
      item: 'Opening A/R Balance',
      quantity: '1',
      units: '',
      description: 'Opening Old A/R Balance',
      priceLevel: 'Custom',
      rate: '4,266.00',
      amount: '4,266.00',
      taxCode: 'GST_SG-9%',
      taxRate: '0.0%',
      grossAmt: '4,266.00',
      taxAmt: '0.00',
      options: '',
      costEstimate: 'Item Defined Cost',
      estExtendedCost: '0.00',
      estGrossProfit: '4,266.00',
      estGrossProfitPercent: '100.0%',
      itemCountryOfOrigin: '',
      hsCode: ''
    }
  ]);

  const customForms = [
    'TOM Credit Memo',
    'Standard Credit Memo'
  ];

  const customers = [
    '100 Baroid Surface Solutions ,Halliburton Energy Services Inc',
    '1000 TEAM LEAD CONSTRUCTION PTE LTD',
    'TOM22-00656 TEAM LEAD CONSTRUCTION PTE LTD : 25-00003-TLC-Nursing Home @ Hougang Ave 1',
    '1001 TECH ONSHORE MEP-PREFABRICATORS PTE LTD',
    'TOM22-00733 TECH ONSHORE MEP-PREFABRICATORS PTE LTD : 25-00010-TOM-Riser Concept',
    'TOM22-00741 TECH ONSHORE MEP-PREFABRICATORS PTE LTD : 25-00015-TOM-TOM Innovation'
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
    const newItem = {
      id: items.length + 1,
      item: '',
      quantity: '',
      units: '',
      description: '',
      priceLevel: '',
      rate: '',
      amount: '',
      taxCode: '',
      taxRate: '',
      grossAmt: '',
      taxAmt: '',
      options: '',
      costEstimate: '',
      estExtendedCost: '',
      estGrossProfit: '',
      estGrossProfitPercent: '',
      itemCountryOfOrigin: '',
      hsCode: ''
    };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const calculateSummary = () => {
    const subtotal = items.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
    const discount = 0;
    const taxTotal = items.reduce((sum, item) => sum + (parseFloat(item.taxAmt) || 0), 0);
    const total = subtotal - discount + taxTotal;

    return { subtotal, discount, taxTotal, total };
  };

  const summary = calculateSummary();

  const handleSave = () => {
    if (!formData.customerProject) {
      showToast('Please select a customer/project', 'error');
      return;
    }
    showToast('Credit Memo updated successfully!', 'success');
    setCurrentPage('view-credit-memos');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      setCurrentPage('view-credit-memos');
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Edit Credit Memo {formData.credit}</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={() => showToast('List view', 'info')}>
            <i className="fas fa-list"></i>
            List
          </button>
          <button className="btn btn-secondary" onClick={() => showToast('Search', 'info')}>
            <i className="fas fa-search"></i>
            Search
          </button>
          <button className="btn btn-secondary" onClick={() => showToast('Customize', 'info')}>
            <i className="fas fa-cog"></i>
            Customize
          </button>
          <button className="btn btn-secondary" onClick={() => showToast('More options', 'info')}>
            More
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
                  {customForms.map((form, index) => (
                    <option key={index} value={form}>{form}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">POSTING PERIOD <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.postingPeriod}
                  onChange={(e) => handleInputChange('postingPeriod', e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="Jan 2021">Jan 2021</option>
                  <option value="Feb 2021">Feb 2021</option>
                  <option value="Nov 2021">Nov 2021</option>
                  <option value="Dec 2021">Dec 2021</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">CREDIT # <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.credit}
                  readOnly
                  style={{ background: '#f5f5f5' }}
                />
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
                <label className="form-label">CUSTOMER:PROJECT <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.customerProject}
                  onChange={(e) => handleInputChange('customerProject', e.target.value)}
                >
                  <option value="">Select...</option>
                  {customers.map((customer, index) => (
                    <option key={index} value={customer}>{customer}</option>
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
                <label className="form-label">LOCATION <span className="required">*</span></label>
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
                <label className="form-label">SUBMISSION ID</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.submissionId}
                  onChange={(e) => handleInputChange('submissionId', e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        {/* Items Section */}
        <div className="form-section">
          <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <button className="btn btn-secondary" onClick={handleAddItem}>
              Add Multiple
            </button>
            <button className="btn btn-secondary">
              Upsell Items
            </button>
            <button className="btn btn-secondary">
              Clear All Lines
            </button>
          </div>

          <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th colSpan="17" style={{ background: '#f8f9fa', padding: '1rem', borderBottom: '2px solid #e0e0e0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <div>
                          <label style={{ fontWeight: '600', marginRight: '0.5rem' }}>DISCOUNT</label>
                          <input type="text" className="form-control" style={{ width: '120px', display: 'inline-block' }} />
                        </div>
                        <div>
                          <label style={{ fontWeight: '600', marginRight: '0.5rem' }}>RATE</label>
                          <input type="text" className="form-control" style={{ width: '120px', display: 'inline-block' }} />
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <div>
                          <span style={{ fontWeight: '600' }}>UNAPPLIED: </span>
                          <span>0.00</span>
                        </div>
                        <div>
                          <span style={{ fontWeight: '600' }}>APPLIED: </span>
                          <span>4,266.00</span>
                        </div>
                        <div>
                          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                            <input type="checkbox" style={{ width: '18px', height: '18px' }} />
                            <span style={{ fontWeight: '600' }}>AUTO APPLY</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>ITEM <span className="required">*</span></th>
                  <th>QUANTITY</th>
                  <th>UNITS</th>
                  <th>DESCRIPTION</th>
                  <th>PRICE LEVEL</th>
                  <th>RATE</th>
                  <th>AMOUNT</th>
                  <th>TAX CODE <span className="required">*</span></th>
                  <th>TAX RATE</th>
                  <th>GROSS AMT</th>
                  <th>TAX AMT</th>
                  <th>OPTIONS</th>
                  <th>COST ESTIMATE</th>
                  <th>EST EXTENDED COST</th>
                  <th>EST GROSS PROFIT</th>
                  <th>EST GROSS PROFIT %</th>
                  <th style={{ width: '100px' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={item.id}>
                    <td>
                      <select className="form-control" style={{ minWidth: '150px' }} value={item.item} readOnly>
                        <option value="">Select...</option>
                        <option value="Opening A/R Balance">Opening A/R Balance</option>
                        <option value="Custom">Custom</option>
                      </select>
                    </td>
                    <td><input type="text" className="form-control" value={item.quantity} readOnly style={{ width: '80px' }} /></td>
                    <td><input type="text" className="form-control" value={item.units} readOnly style={{ width: '80px' }} /></td>
                    <td><input type="text" className="form-control" value={item.description} readOnly style={{ width: '150px' }} /></td>
                    <td><input type="text" className="form-control" value={item.priceLevel} readOnly style={{ width: '100px' }} /></td>
                    <td><input type="text" className="form-control" value={item.rate} readOnly style={{ width: '100px' }} /></td>
                    <td><input type="text" className="form-control" value={item.amount} readOnly style={{ width: '100px' }} /></td>
                    <td>
                      <select className="form-control" style={{ minWidth: '120px' }} value={item.taxCode} readOnly>
                        <option value="">Select...</option>
                        <option value="GST_SG-9%">GST_SG-9%</option>
                        <option value="0.0%">0.0%</option>
                      </select>
                    </td>
                    <td><input type="text" className="form-control" value={item.taxRate} readOnly style={{ width: '80px' }} /></td>
                    <td><input type="text" className="form-control" value={item.grossAmt} readOnly style={{ width: '100px' }} /></td>
                    <td><input type="text" className="form-control" value={item.taxAmt} readOnly style={{ width: '100px' }} /></td>
                    <td><input type="text" className="form-control" value={item.options} readOnly style={{ width: '100px' }} /></td>
                    <td><input type="text" className="form-control" value={item.costEstimate} readOnly style={{ width: '100px' }} /></td>
                    <td><input type="text" className="form-control" value={item.estExtendedCost} readOnly style={{ width: '120px' }} /></td>
                    <td><input type="text" className="form-control" value={item.estGrossProfit} readOnly style={{ width: '120px' }} /></td>
                    <td><input type="text" className="form-control" value={item.estGrossProfitPercent} readOnly style={{ width: '100px' }} /></td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.25rem' }}>
                        <button className="btn btn-primary" style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}>
                          <i className="fas fa-check"></i> Add
                        </button>
                        {items.length > 1 && (
                          <button 
                            className="btn btn-secondary" 
                            onClick={() => handleRemoveItem(item.id)}
                            style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
                          >
                            <i className="fas fa-times"></i>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Section - Below Table */}
        <div className="summary-grid">
          <div className="summary-card">
            <div className="summary-title">Subtotal</div>
            <div className="summary-value">${summary.subtotal.toFixed(2)}</div>
          </div>
          <div className="summary-card">
            <div className="summary-title">Discount</div>
            <div className="summary-value">${summary.discount.toFixed(2)}</div>
          </div>
          <div className="summary-card">
            <div className="summary-title">Tax Total</div>
            <div className="summary-value">${summary.taxTotal.toFixed(2)}</div>
          </div>
          <div className="summary-card" style={{ background: 'var(--gray-ultralight)' }}>
            <div className="summary-title">Total</div>
            <div className="summary-value" style={{ color: 'var(--red-primary)' }}>${summary.total.toFixed(2)}</div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-secondary" onClick={() => showToast('Saved as draft', 'success')}>
              <i className="fas fa-save"></i>
              Save
            </button>
            <button className="btn btn-secondary" onClick={() => showToast('Actions menu', 'info')}>
              Actions
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

export default EditCreditMemo;
