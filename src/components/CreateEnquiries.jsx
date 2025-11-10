import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateEnquiries = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Form state
  const [formData, setFormData] = useState({
    customForm: 'Standard Enquiry',
    company: '',
    salesRep: '',
    title: '',
    status: 'In Discussion',
    probability: '20.0%',
    expectedClose: '',
    winLossReason: '',
    projectedTotal: 0.00,
    forecastType: 'Omitted',
    weightedTotal: 0.00,
    range: '0.00 TO 0.00',
    subsidiary: 'Marine Engineering Pte Ltd',
    class: '',
    location: '',
    department: 'Sales',
    taxTotal: 0.00,
    contactPerson: '',
    lastSalesActivity: '',
    countryOfOrigin: '',
    hsCode: '',
    currency: 'SGD',
    exchangeRate: 1.00,
    items: []
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

  const handleSaveEnquiry = () => {
    showToast('Enquiry saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to close this transaction? Any unsaved changes will be lost.')) {
      showToast('Transaction cancelled', 'info');
      // Reset form
      window.location.reload();
    }
  };

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

  // Calculation functions
  const calculateSubtotal = () => {
    return formData.items.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
  };

  const calculateTaxAmount = () => {
    return formData.items.reduce((sum, item) => {
      const amount = parseFloat(item.amount) || 0;
      const gstRate = parseFloat(item.gst) || 9.0;
      return sum + (amount * gstRate / 100);
    }, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTaxAmount();
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Create Enquiry</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Close Transaction
          </button>
            <button className="btn btn-secondary" onClick={handleSaveEnquiry}>
              <i className="fas fa-save"></i>
              Save Draft
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-exchange-alt"></i>
              Convert to Order
            </button>
            <button className="btn btn-primary" onClick={handleSaveEnquiry}>
              <i className="fas fa-check"></i>
              Submit
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
            <div className="form-grid">
                <div className="form-group">
                  <label className="form-label required">Custom Form</label>
                  <select 
                    className="form-control"
                    value={formData.customForm}
                    onChange={(e) => handleFormChange('customForm', e.target.value)}
                  >
                    <option>TOM Supply Enquiry</option>
                    <option>Standard Enquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label required">Company</label>
                  <select
                    className="form-control"
                    value={formData.company}
                    onChange={(e) => handleFormChange('company', e.target.value)}
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
                  <label className="form-label required">Probability</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.probability}
                    onChange={(e) => handleFormChange('probability', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Opportunity #</label>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="To Be Generated"
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Sales Rep</label>
                  <select 
                    className="form-control"
                    value={formData.salesRep}
                    onChange={(e) => handleFormChange('salesRep', e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option>TD0059 Kumarasamy Madhavan Subash</option>
                    <option>TSV025 Sasapu Venkateshwara Rao</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label required">Expected Close</label>
                  <input 
                    type="date" 
                    className="form-control"
                    value={formData.expectedClose}
                    onChange={(e) => handleFormChange('expectedClose', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Title</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.title}
                    onChange={(e) => handleFormChange('title', e.target.value)}
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
                  <label className="form-label">Win/Loss Reason</label>
                  <select 
                    className="form-control"
                    value={formData.winLossReason}
                    onChange={(e) => handleFormChange('winLossReason', e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option>Price</option>
                    <option>Quality</option>
                    <option>Delivery Time</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Details</label>
                  <textarea 
                    className="form-control"
                    rows="3"
                  />
                </div>
              </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

          {/* Forecasting */}
          <div className="form-section">
            <h2 className="section-title">
              <i className="fas fa-chart-line"></i>
              Forecasting
            </h2>
            <div className="form-grid">
                <div className="form-group">
                  <label className="form-label required">Projected Total</label>
                  <input 
                    type="number" 
                    className="form-control"
                    value={formData.projectedTotal}
                    onChange={(e) => handleFormChange('projectedTotal', parseFloat(e.target.value) || 0)}
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
                  <label className="form-label">Weighted Total</label>
                  <input 
                    type="number" 
                    className="form-control"
                    value={formData.weightedTotal}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Range</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.range}
                    disabled
                  />
                </div>
              </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

          {/* Classification */}
          <div className="form-section">
            <h2 className="section-title">
              <i className="fas fa-tags"></i>
              Classification
            </h2>
            <div className="form-grid">
                <div className="form-group">
                  <label className="form-label required">Subsidiary</label>
                  <select 
                    className="form-control"
                    value={formData.subsidiary}
                    onChange={(e) => handleFormChange('subsidiary', e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="TOM S">Tech Offshore Marine (S) Pte Ltd - "TOM S" (ROC 200709673M)</option>
                    <option value="DQ">Tech Offshore Marine (DQ) Pte Ltd - "DQ" (ROC 200704907R)</option>
                    <option value="TEA">Tech Electric & Automation Pte Ltd - "TEA" (ROC 198700264M)</option>
                    <option value="TMO">Tech Marine Offshore (S) Pte Ltd - "TMO" (ROC 200512260M)</option>
                    <option value="SV">Tech Offshore Marine (SV) Pte Ltd - "SV" (ROC 200608955Z)</option>
                    <option value="TOM">Tech Onshore MEP Prefabricators Pte Ltd - "TOM" (ROC 199507962E)</option>
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
                </div>
                <div className="form-group">
                  <label className="form-label">Location</label>
                  <select 
                    className="form-control"
                    value={formData.location}
                    onChange={(e) => handleFormChange('location', e.target.value)}
                  >
                    <option value="">Select...</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label required">Department</label>
                  <select 
                    className="form-control"
                    value={formData.department}
                    onChange={(e) => handleFormChange('department', e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option>MEP</option>
                    <option>Engineering</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Tax Total</label>
                  <input 
                    type="number" 
                    className="form-control"
                    value={formData.taxTotal}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Contact Person</label>
                  <select 
                    className="form-control"
                    value={formData.contactPerson}
                    onChange={(e) => handleFormChange('contactPerson', e.target.value)}
                  >
                    <option value="">Select...</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Last Sales Activity</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.lastSalesActivity}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Country of Origin</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.countryOfOrigin}
                    onChange={(e) => handleFormChange('countryOfOrigin', e.target.value)}
                    placeholder="Enter country of origin"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">HS Code</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.hsCode}
                    onChange={(e) => handleFormChange('hsCode', e.target.value)}
                    placeholder="Enter HS code"
                  />
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
              {formData.items.length > 0 ? (
                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th style={{width: '8%'}}>ITEM</th>
                        <th style={{width: '7%'}}>QTY</th>
                        <th style={{width: '6%'}}>UNITS</th>
                        <th style={{width: '12%'}}>DESC</th>
                        <th style={{width: '8%'}}>PRICE LEVEL</th>
                        <th style={{width: '7%'}}>RATE</th>
                        <th style={{width: '7%'}}>AMT</th>
                        <th style={{width: '8%'}}>TAX CODE</th>
                        <th style={{width: '8%'}}>GROSS AMT</th>
                        <th style={{width: '9%'}}>CLASS</th>
                        <th style={{width: '10%'}}>COST ESTIMATE TYPE</th>
                        <th style={{width: '10%'}}>EST. EXTENDED COST</th>
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
              ) : (
                <div className="empty-items-message">
                  <p>No items added yet. Click "Add Item" to start adding items to this enquiry.</p>
                </div>
              )}

          {/* Summary Grid */}
          {formData.items.length > 0 && (
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
              <div className="summary-card" style={{ background: 'var(--gray-ultralight)' }}>
                <div className="summary-title">TOTAL AMOUNT</div>
                <div className="summary-value" style={{ color: 'var(--red-primary)' }}>${calculateTotal().toFixed(2)}</div>
              </div>
            </div>
          )}
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

          {/* Terms & Conditions */}
          <div className="form-section">
            <h2 className="section-title">
              <i className="fas fa-file-contract"></i>
              Terms & Conditions
            </h2>
            <textarea 
              className="form-control"
              rows="3"
              placeholder="1. Payment due within 30 days of invoice date.&#10;2. Prices valid for 30 days from quotation date.&#10;3. Delivery within 2 weeks after order confirmation."
            />
            
            <div className="footer-actions">
              <button className="btn btn-tertiary" onClick={handleCancel}>
                <i className="fas fa-times"></i>
                Close Transaction
              </button>
              <div>
                <button className="btn btn-secondary" onClick={handleSaveEnquiry}>
                  <i className="fas fa-save"></i>
                  Save Draft
                </button>
                <button className="btn btn-secondary">
                  <i className="fas fa-exchange-alt"></i>
                  Convert to Order
                </button>
                <button className="btn btn-primary" onClick={handleSaveEnquiry}>
                  <i className="fas fa-check"></i>
                  Submit
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

export default CreateEnquiries;
