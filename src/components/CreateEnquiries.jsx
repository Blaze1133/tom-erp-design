import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateEnquiries = ({ setCurrentPage, headerTitle = "Enquiry" }) => {
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
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-alt"></i>
          <div>
            <h1>{headerTitle}</h1>
            <div className="detail-subtitle">
              <span>New {headerTitle}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary" onClick={handleSaveEnquiry}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-copy"></i>
          Copy
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-exchange-alt"></i>
          Convert to Order
        </button>
        <div className="toolbar-dropdown" style={{ marginLeft: 'auto' }}>
          <button className="btn-toolbar">
            <i className="fas fa-cog"></i>
            Actions
            <i className="fas fa-chevron-down" style={{ marginLeft: '0.5rem', fontSize: '0.7rem' }}></i>
          </button>
        </div>
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
                  <label>CUSTOM FORM *</label>
                  <select 
                    className="form-control"
                    value={formData.customForm}
                    onChange={(e) => handleFormChange('customForm', e.target.value)}
                  >
                    <option>TOM Supply Enquiry</option>
                    <option>Standard Enquiry</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>COMPANY *</label>
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
                <div className="detail-field">
                  <label>PROBABILITY *</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.probability}
                    onChange={(e) => handleFormChange('probability', e.target.value)}
                  />
                </div>
                <div className="detail-field">
                  <label>OPPORTUNITY #</label>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="To Be Generated"
                    disabled
                  />
                </div>
                <div className="detail-field">
                  <label>SALES REP</label>
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
                <div className="detail-field">
                  <label>EXPECTED CLOSE *</label>
                  <input 
                    type="date" 
                    className="form-control"
                    value={formData.expectedClose}
                    onChange={(e) => handleFormChange('expectedClose', e.target.value)}
                  />
                </div>
                <div className="detail-field">
                  <label>TITLE</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.title}
                    onChange={(e) => handleFormChange('title', e.target.value)}
                  />
                </div>
                <div className="detail-field">
                  <label>STATUS *</label>
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
                <div className="detail-field">
                  <label>WIN/LOSS REASON</label>
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
                <div className="detail-field">
                  <label>DETAILS</label>
                  <textarea 
                    className="form-control"
                    rows="3"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

          {/* Forecasting */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Forecasting</h3>
            </div>
            <div className="section-body">
              <div className="detail-grid">
                <div className="detail-field">
                  <label>PROJECTED TOTAL *</label>
                  <input 
                    type="number" 
                    className="form-control"
                    value={formData.projectedTotal}
                    onChange={(e) => handleFormChange('projectedTotal', parseFloat(e.target.value) || 0)}
                  />
                </div>
                <div className="detail-field">
                  <label>FORECAST TYPE</label>
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
                <div className="detail-field">
                  <label>WEIGHTED TOTAL</label>
                  <input 
                    type="number" 
                    className="form-control"
                    value={formData.weightedTotal}
                    disabled
                  />
                </div>
                <div className="detail-field">
                  <label>RANGE</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.range}
                    disabled
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
                    <option value="TOM S">Tech Offshore Marine (S) Pte Ltd - "TOM S" (ROC 200709673M)</option>
                    <option value="DQ">Tech Offshore Marine (DQ) Pte Ltd - "DQ" (ROC 200704907R)</option>
                    <option value="TEA">Tech Electric & Automation Pte Ltd - "TEA" (ROC 198700264M)</option>
                    <option value="TMO">Tech Marine Offshore (S) Pte Ltd - "TMO" (ROC 200512260M)</option>
                    <option value="SV">Tech Offshore Marine (SV) Pte Ltd - "SV" (ROC 200608955Z)</option>
                    <option value="TOM">Tech Onshore MEP Prefabricators Pte Ltd - "TOM" (ROC 199507962E)</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>CLASS</label>
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
                <div className="detail-field">
                  <label>LOCATION</label>
                  <select 
                    className="form-control"
                    value={formData.location}
                    onChange={(e) => handleFormChange('location', e.target.value)}
                  >
                    <option value="">Select...</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>DEPARTMENT *</label>
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
                <div className="detail-field">
                  <label>TAX TOTAL</label>
                  <input 
                    type="number" 
                    className="form-control"
                    value={formData.taxTotal}
                    disabled
                  />
                </div>
                <div className="detail-field">
                  <label>CONTACT PERSON</label>
                  <select 
                    className="form-control"
                    value={formData.contactPerson}
                    onChange={(e) => handleFormChange('contactPerson', e.target.value)}
                  >
                    <option value="">Select...</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>LAST SALES ACTIVITY</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.lastSalesActivity}
                    disabled
                  />
                </div>
                <div className="detail-field">
                  <label>COUNTRY OF ORIGIN</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.countryOfOrigin}
                    onChange={(e) => handleFormChange('countryOfOrigin', e.target.value)}
                    placeholder="Enter country of origin"
                  />
                </div>
                <div className="detail-field">
                  <label>HS CODE</label>
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
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

          {/* Items Section */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Items</h3>
            </div>
            <div className="section-body">
              <div className="detail-grid" style={{ marginBottom: '1.5rem' }}>
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
                  <label>EXCHANGE RATE *</label>
                  <input 
                    type="number" 
                    className="form-control"
                    step="0.01"
                    value={formData.exchangeRate}
                    onChange={(e) => handleFormChange('exchangeRate', parseFloat(e.target.value) || 1.00)}
                  />
                </div>
              </div>
              
              {formData.items.length > 0 && (
                <div className="items-table-wrapper" style={{ overflowX: 'auto', marginBottom: '1rem' }}>
                  <table className="detail-items-table" style={{ minWidth: '1800px' }}>
                    <thead>
                      <tr>
                        <th style={{ minWidth: '150px' }}>ITEM</th>
                        <th style={{ minWidth: '80px' }}>QTY</th>
                        <th style={{ minWidth: '100px' }}>UNITS</th>
                        <th style={{ minWidth: '300px' }}>DESC</th>
                        <th style={{ minWidth: '120px' }}>PRICE LEVEL</th>
                        <th style={{ minWidth: '100px' }}>RATE</th>
                        <th style={{ minWidth: '100px' }}>AMT</th>
                        <th style={{ minWidth: '120px' }}>TAX CODE</th>
                        <th style={{ minWidth: '120px' }}>GROSS AMT</th>
                        <th style={{ minWidth: '150px' }}>CLASS</th>
                        <th style={{ minWidth: '150px' }}>COST EST. TYPE</th>
                        <th style={{ minWidth: '150px' }}>EST. EXT. COST</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formData.items.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <input 
                              type="text" 
                              className="form-control" 
                              defaultValue={item.item} 
                              style={{ minWidth: '140px', height: '40px' }} 
                            />
                          </td>
                          <td>
                            <input 
                              type="number" 
                              className="form-control" 
                              defaultValue={item.quantity} 
                              style={{ minWidth: '70px', height: '40px' }} 
                            />
                          </td>
                          <td>
                            <input 
                              type="text" 
                              className="form-control" 
                              defaultValue={item.units} 
                              style={{ minWidth: '90px', height: '40px' }} 
                            />
                          </td>
                          <td>
                            <textarea 
                              className="form-control" 
                              defaultValue={item.description} 
                              style={{ minWidth: '290px', height: '40px', resize: 'vertical' }}
                              rows="2"
                            />
                          </td>
                          <td>
                            <select 
                              className="form-control" 
                              defaultValue={item.priceLevel} 
                              style={{ minWidth: '110px', height: '40px' }}
                            >
                              <option>Custom</option>
                              <option>Base Price</option>
                              <option>Wholesale</option>
                              <option>Retail</option>
                            </select>
                          </td>
                          <td>
                            <input 
                              type="number" 
                              className="form-control" 
                              defaultValue={item.rate} 
                              style={{ minWidth: '90px', height: '40px' }} 
                              step="0.01"
                            />
                          </td>
                          <td>
                            <input 
                              type="number" 
                              className="form-control" 
                              defaultValue={item.amount} 
                              style={{ minWidth: '90px', height: '40px' }} 
                              step="0.01"
                            />
                          </td>
                          <td>
                            <select 
                              className="form-control" 
                              defaultValue={item.taxCode} 
                              style={{ minWidth: '110px', height: '40px' }}
                            >
                              <option>GST_SG-9%</option>
                              <option>GST_SG-0%</option>
                              <option>Exempt</option>
                            </select>
                          </td>
                          <td>
                            <input 
                              type="number" 
                              className="form-control" 
                              defaultValue={item.grossAmount} 
                              style={{ minWidth: '110px', height: '40px' }} 
                              step="0.01"
                            />
                          </td>
                          <td>
                            <select 
                              className="form-control" 
                              defaultValue={item.class} 
                              style={{ minWidth: '140px', height: '40px' }}
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
                            <select 
                              className="form-control" 
                              defaultValue={item.costEstimateType} 
                              style={{ minWidth: '140px', height: '40px' }}
                            >
                              <option>Fixed</option>
                              <option>Variable</option>
                              <option>Estimated</option>
                            </select>
                          </td>
                          <td>
                            <input 
                              type="number" 
                              className="form-control" 
                              defaultValue={item.estimatedExtendedCost} 
                              style={{ minWidth: '140px', height: '40px' }} 
                              step="0.01"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              
              <div style={{ marginBottom: '1.5rem' }}>
                <button className="btn btn-primary" onClick={handleAddItem}>
                  <i className="fas fa-plus"></i>
                  Add Item
                </button>
              </div>

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
                  <div className="summary-card" style={{ background: '#f8f9fa' }}>
                    <div className="summary-title">TOTAL AMOUNT</div>
                    <div className="summary-value" style={{ color: '#4a90e2' }}>${calculateTotal().toFixed(2)}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

          {/* Terms & Conditions */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Terms & Conditions</h3>
            </div>
            <div className="section-body">
              <textarea 
                className="form-control"
                rows="3"
                placeholder="1. Payment due within 30 days of invoice date.&#10;2. Prices valid for 30 days from quotation date.&#10;3. Delivery within 2 weeks after order confirmation."
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="detail-footer-actions">
            <button className="btn-toolbar-primary" onClick={handleSaveEnquiry}>
              <i className="fas fa-save"></i>
              Save
            </button>
            <button className="btn-toolbar" onClick={handleCancel}>
              <i className="fas fa-times"></i>
              Cancel
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

export default CreateEnquiries;
