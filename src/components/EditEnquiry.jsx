import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditEnquiry = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Form state with pre-filled data
  const [formData, setFormData] = useState({
    documentNumber: 'E22TOM80024',
    customForm: 'Standard Enquiry',
    company: '7 Test Customer',
    customerProject: 'TOM22-00733',
    salesRep: '',
    title: 'Test Enquiry',
    status: 'Proposal',
    probability: '50.0%',
    expectedClose: '2022-07-15',
    winLossReason: '',
    projectedTotal: 1000.00,
    forecastType: 'Omitted',
    weightedTotal: 500.00,
    range: '0.00 TO 1000.00',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    class: 'Engineering Services',
    location: 'Singapore(MEP)',
    department: 'MEP',
    taxTotal: 0.00,
    contactPerson: '',
    lastSalesActivity: '',
    countryOfOrigin: 'Singapore',
    hsCode: '',
    currency: 'SGD',
    exchangeRate: 1.00,
    memo: 'Test enquiry for marine equipment supply',
    items: [
      {
        id: 1,
        item: 'Fabrication',
        quantity: 1,
        units: 'Each',
        description: 'Marine equipment fabrication and installation',
        priceLevel: 'Custom',
        rate: 1000.00,
        amount: 1000.00,
        taxCode: 'GST_SG-9%',
        grossAmount: 1090.00,
        class: 'Fabrication',
        costEstimateType: 'Fixed',
        estimatedExtendedCost: 800.00
      }
    ]
  });

  const handleAddItem = () => {
    const newItem = {
      id: formData.items.length + 1,
      item: '',
      quantity: 0,
      units: 'Pcs',
      description: '',
      priceLevel: 'Custom',
      rate: 0.00,
      amount: 0.00,
      taxCode: 'GST_SG-9%',
      grossAmount: 0.00,
      class: '',
      costEstimateType: 'Fixed',
      estimatedExtendedCost: 0.00
    };
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };

  const calculateSubtotal = () => {
    return formData.items.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
  };

  const calculateTaxAmount = () => {
    return calculateSubtotal() * 0.09;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTaxAmount();
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveEnquiry = () => {
    showToast('Enquiry updated successfully!', 'success');
    setTimeout(() => {
      if (setCurrentPage) {
        setCurrentPage('view-enquiries');
      }
    }, 1500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-enquiries');
      }
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Edit Enquiry</h1>
          <span style={{ fontSize: '18px', color: '#666', marginLeft: '10px' }}>{formData.documentNumber}</span>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" onClick={handleSaveEnquiry}>
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
              <label className="form-label required">Title</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.title}
                onChange={(e) => handleFormChange('title', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label required">Customer</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.company}
                onChange={(e) => handleFormChange('company', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Customer Project</label>
              <select
                className="form-control"
                value={formData.customerProject}
                onChange={(e) => handleFormChange('customerProject', e.target.value)}
              >
                <option value="">Select...</option>
                <option value="100 - 102">100 Baroid Surface Solutions, Halliburton Energy Services Inc</option>
                <option value="1000">1000 TEAM LEAD CONSTRUCTION PTE LTD</option>
                <option value="TOM22-00656">TOM22-00656 TEAM LEAD CONSTRUCTION PTE LTD : 25-00003-TLC-Nursing Home @ Hougang Ave 1</option>
                <option value="1001">1001 TECH ONSHORE MEP-PREFABRICATORS PTE LTD</option>
                <option value="TOM22-00733">TOM22-00733 TECH ONSHORE MEP-PREFABRICATORS PTE LTD : 25-00010-TOM-Riser Concept</option>
                <option value="TOM22-00741">TOM22-00741 TECH ONSHORE MEP-PREFABRICATORS PTE LTD : 25-00015-TOM-TOM Innovation</option>
                <option value="1002">1002 TECH MARINE OFFSHORE (S) PTE LTD</option>
                <option value="1003">1003 TECH ELECTRIC AUTOMATION PTE LTD</option>
                <option value="1004">1004 TECH OFFSHORE MARINE (DO) PTE LTD</option>
                <option value="1005">1005 TECH OFFSHORE MARINE (SV) PTE LTD</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Sales Rep</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.salesRep}
                onChange={(e) => handleFormChange('salesRep', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label required">Status</label>
              <select 
                className="form-control"
                value={formData.status}
                onChange={(e) => handleFormChange('status', e.target.value)}
              >
                <option>In Discussion</option>
                <option>Proposal</option>
                <option>Negotiation</option>
                <option>Closed Won</option>
                <option>Closed Lost</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Probability</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.probability}
                onChange={(e) => handleFormChange('probability', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Expected Close</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.expectedClose}
                onChange={(e) => handleFormChange('expectedClose', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Projected Total</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.projectedTotal}
                onChange={(e) => handleFormChange('projectedTotal', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Forecast Type</label>
              <select 
                className="form-control"
                value={formData.forecastType}
                onChange={(e) => handleFormChange('forecastType', e.target.value)}
              >
                <option>Omitted</option>
                <option>Most Likely</option>
                <option>Best Case</option>
                <option>Worst Case</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Memo</label>
              <textarea 
                className="form-control"
                value={formData.memo}
                onChange={(e) => handleFormChange('memo', e.target.value)}
                rows="3"
              />
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
              <label className="form-label required">Subsidiary</label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleFormChange('subsidiary', e.target.value)}
              >
                <option>Tech Onshore MEP Prefabricators Pte Ltd.</option>
                <option>Tech Electric & Automation Pte Ltd</option>
                <option>Tech Marine Offshore (S) Pte Ltd</option>
                <option>Tech Offshore Marine (DQ) Pte Ltd</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Department</label>
              <select 
                className="form-control"
                value={formData.department}
                onChange={(e) => handleFormChange('department', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Construction</option>
                <option>MEP</option>
                <option>MEP MARINE</option>
                <option>O&G</option>
                <option>Piping</option>
                <option>Shipyard</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Class</label>
              <select 
                className="form-control"
                value={formData.class}
                onChange={(e) => handleFormChange('class', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Consumable Item</option>
                <option>Electrical Works</option>
                <option>Engineering Services</option>
                <option>Installation Works</option>
                <option>Marine Equipment</option>
                <option>Material Supply</option>
                <option>MEP Works</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Location</label>
              <select 
                className="form-control"
                value={formData.location}
                onChange={(e) => handleFormChange('location', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Singapore(MEP)</option>
                <option>Mega yard</option>
                <option>Bok Seng Yard</option>
                <option>Hong Hang Shipyard</option>
              </select>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Items Section */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-boxes"></i>
            Items
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0 1rem 0' }} />
          
          <div className="currency-info">
            <div className="currency-field">
              <label className="form-label required">Currency</label>
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
            <div className="exchange-rate-field">
              <label className="form-label required">Exchange Rate</label>
              <input 
                type="number" 
                className="form-control"
                step="0.01"
                value={formData.exchangeRate}
                onChange={(e) => handleFormChange('exchangeRate', parseFloat(e.target.value) || 1.00)}
              />
            </div>
          </div>
          
          <button className="add-item-btn" onClick={handleAddItem}>
            <i className="fas fa-plus"></i>
            Add Item
          </button>
          
          {formData.items.length > 0 && (
            <>
              <div className="items-table-wrapper">
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>ITEM</th>
                      <th>QTY</th>
                      <th>UNITS</th>
                      <th>DESC</th>
                      <th>PRICE LEVEL</th>
                      <th>RATE</th>
                      <th>AMT</th>
                      <th>TAX CODE</th>
                      <th>GROSS AMT</th>
                      <th>CLASS</th>
                      <th>COST EST. TYPE</th>
                      <th>EST. EXT. COST</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.items.map((item) => (
                      <tr key={item.id}>
                        <td><input type="text" className="table-input" defaultValue={item.item} style={{width: '100%'}} /></td>
                        <td><input type="number" className="table-input" defaultValue={item.quantity} style={{width: '100%'}} /></td>
                        <td><input type="text" className="table-input" defaultValue={item.units} style={{width: '100%'}} /></td>
                        <td><input type="text" className="table-input" defaultValue={item.description} style={{width: '100%'}} /></td>
                        <td><input type="text" className="table-input" defaultValue={item.priceLevel} style={{width: '100%'}} /></td>
                        <td><input type="number" className="table-input" defaultValue={item.rate} style={{width: '100%'}} /></td>
                        <td><input type="number" className="table-input" defaultValue={item.amount} style={{width: '100%'}} /></td>
                        <td><input type="text" className="table-input" defaultValue={item.taxCode} style={{width: '100%'}} /></td>
                        <td><input type="number" className="table-input" defaultValue={item.grossAmount} style={{width: '100%'}} /></td>
                        <td>
                          <select className="table-input" defaultValue={item.class} style={{width: '100%'}}>
                            <option value="">Select...</option>
                            <option>Fabrication</option>
                            <option>Electrical</option>
                            <option>Piping</option>
                            <option>Installation work</option>
                          </select>
                        </td>
                        <td>
                          <select className="table-input" defaultValue={item.costEstimateType} style={{width: '100%'}}>
                            <option>Fixed</option>
                            <option>Variable</option>
                            <option>Estimated</option>
                          </select>
                        </td>
                        <td><input type="number" className="table-input" defaultValue={item.estimatedExtendedCost} style={{width: '100%'}} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="summary-grid">
                <div className="summary-card">
                  <div className="summary-title">SUBTOTAL</div>
                  <div className="summary-value">${calculateSubtotal().toFixed(2)}</div>
                </div>
                <div className="summary-card">
                  <div className="summary-title">TAX AMOUNT</div>
                  <div className="summary-value">${calculateTaxAmount().toFixed(2)}</div>
                </div>
                <div className="summary-card">
                  <div className="summary-title">DISCOUNT</div>
                  <div className="summary-value">$0.00</div>
                </div>
                <div className="summary-card" style={{ background: '#f8f9fa' }}>
                  <div className="summary-title">TOTAL AMOUNT</div>
                  <div className="summary-value" style={{ color: '#4a90e2' }}>${calculateTotal().toFixed(2)}</div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-primary" onClick={handleSaveEnquiry}>
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

export default EditEnquiry;
