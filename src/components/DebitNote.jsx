import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const DebitNote = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('sales');
  const [systemSubTab, setSystemSubTab] = useState('notes');
  const [isSaved, setIsSaved] = useState(false);

  const [formData, setFormData] = useState({
    customForm: 'TOM Non-Inventory Part Form',
    displayNameCode: '',
    primarySaleUnit: '',
    itemNameNumber: 'Debit Note',
    primaryUnitsType: '',
    subitemOf: '',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
    department: '',
    location: '',
    class: '',
    itemCategory: '',
    includeChildren: false,
    upcCode: '',
    primaryBaseUnit: '',
    salesDescription: '',
    costEstimateType: 'Item Defined Cost',
    minimumQuantity: '',
    itemDefinedCost: '',
    maximumQuantity: '',
    billingSchedule: '',
    incomeAccount: '40200 Sales : Working Progress Sales',
    priceVarianceAccount: '',
    quantityVarianceAccount: '',
    exchangeRateVarianceAccount: '',
    taxSchedule: 'Tax 7%'
  });

  const [pricingData, setPricingData] = useState({
    quantityPricingSchedule: '',
    calculateQuantityDiscounts: 'By Line Quantity',
    pricingGroup: '',
    useMarginalRates: false,
    currencies: {
      SGD: { basePrice: '', altPrice1: '', altPrice2: '', altPrice3: '' },
      CAD: { basePrice: '', altPrice1: '', altPrice2: '', altPrice3: '' },
      EUR: { basePrice: '', altPrice1: '', altPrice2: '', altPrice3: '' },
      GBP: { basePrice: '', altPrice1: '', altPrice2: '', altPrice3: '' },
      INR: { basePrice: '', altPrice1: '', altPrice2: '', altPrice3: '' },
      Indonesia: { basePrice: '', altPrice1: '', altPrice2: '', altPrice3: '' },
      MYR: { basePrice: '', altPrice1: '', altPrice2: '', altPrice3: '' },
      USD: { basePrice: '', altPrice1: '', altPrice2: '', altPrice3: '' }
    }
  });

  const [activities, setActivities] = useState([]);

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Electric & Automation Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Offshore Marine (DQ) Pte Ltd',
    'Tech Offshore Marine (s) Pte Ltd',
    'Tech Offshore Marine (SV) Pte Ltd'
  ];

  const customForms = [
    'TOM Non-Inventory Part Form',
    'Standard Non-Inventory Part Form'
  ];

  const primaryUnitsTypes = [
    'General UOM',
    'Tonne'
  ];

  const subitemOfOptions = [
    'Cash Card Vehicles',
    'Currency Exchange',
    'Customer Deposit : Customer Deposit Receivables',
    'Deposit Receivables',
    'Finance',
    'Finance : Accounting Fees',
    'Finance : Bank Annual Fee'
  ];

  const itemCategories = [
    '- New -',
    'Consumable',
    'Material',
    'Other',
    'Rental',
    'Service',
    'Fixed Asset'
  ];

  const costEstimateTypes = [
    'Item Defined Cost'
  ];

  const calculateQuantityDiscountsOptions = [
    'By Line Quantity',
    'By Overall Item Quantity',
    'By Overall Parent Quantity',
    'By Overall Schedule Quantity'
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

  const handlePricingChange = (currency, field, value) => {
    setPricingData(prev => ({
      ...prev,
      currencies: {
        ...prev.currencies,
        [currency]: {
          ...prev.currencies[currency],
          [field]: value
        }
      }
    }));
  };

  const handleSave = () => {
    if (!formData.subsidiary) {
      showToast('Please select a subsidiary', 'error');
      return;
    }
    setIsSaved(true);
    showToast('Debit Note saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Changes cancelled', 'info');
      if (setCurrentPage) {
        setCurrentPage('view-debit-notes');
      }
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-invoice"></i>
          <div>
            <h1>Debit Note</h1>
            <div className="detail-subtitle">
              <span>New Debit Note</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">Actions</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          <i className="fas fa-times"></i>
          Cancel
        </button>
      </div>

      <div className="detail-content">
        {/* Primary Information Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>CUSTOM FORM</label>
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

              <div className="detail-field">
                <label>DISPLAY NAME/CODE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.displayNameCode}
                  onChange={(e) => handleInputChange('displayNameCode', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>PRIMARY SALE UNIT</label>
                <select 
                  className="form-control"
                  value={formData.primarySaleUnit}
                  onChange={(e) => handleInputChange('primarySaleUnit', e.target.value)}
                >
                  <option value="">Select...</option>
                </select>
              </div>

              <div className="detail-field">
                <label>ITEM NAME/NUMBER <span style={{ color: '#dc2626' }}>*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.itemNameNumber}
                  onChange={(e) => handleInputChange('itemNameNumber', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>PRIMARY UNITS TYPE</label>
                <select 
                  className="form-control"
                  value={formData.primaryUnitsType}
                  onChange={(e) => handleInputChange('primaryUnitsType', e.target.value)}
                >
                  <option value="">Select...</option>
                  {primaryUnitsTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>SUBITEM OF</label>
                <select 
                  className="form-control"
                  value={formData.subitemOf}
                  onChange={(e) => handleInputChange('subitemOf', e.target.value)}
                >
                  <option value="">Select...</option>
                  {subitemOfOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Classification Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY <span style={{ color: '#dc2626' }}>*</span></label>
                <select 
                  className="form-control"
                  value={formData.subsidiary}
                  onChange={(e) => handleInputChange('subsidiary', e.target.value)}
                >
                  {subsidiaries.map((subsidiary, index) => (
                    <option key={index} value={subsidiary}>{subsidiary}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>DEPARTMENT</label>
                <select 
                  className="form-control"
                  value={formData.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                >
                  <option value="">Select...</option>
                </select>
              </div>

              <div className="detail-field">
                <label>LOCATION</label>
                <select 
                  className="form-control"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                >
                  <option value="">Select...</option>
                </select>
              </div>

              <div className="detail-field">
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input 
                    type="checkbox"
                    checked={formData.includeChildren}
                    onChange={(e) => handleInputChange('includeChildren', e.target.checked)}
                    style={{ marginRight: '8px' }}
                  />
                  INCLUDE CHILDREN
                </label>
              </div>

              <div className="detail-field">
                <label>CLASS</label>
                <select 
                  className="form-control"
                  value={formData.class}
                  onChange={(e) => handleInputChange('class', e.target.value)}
                >
                  <option value="">Select...</option>
                </select>
              </div>

              <div className="detail-field">
                <label>ITEM CATEGORY</label>
                <select 
                  className="form-control"
                  value={formData.itemCategory}
                  onChange={(e) => handleInputChange('itemCategory', e.target.value)}
                >
                  {itemCategories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>UPC CODE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.upcCode}
                  onChange={(e) => handleInputChange('upcCode', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>PRIMARY BASE UNIT</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.primaryBaseUnit}
                  onChange={(e) => handleInputChange('primaryBaseUnit', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'sales' ? 'active' : ''}`} onClick={() => setActiveTab('sales')}>
              Sales / Pricing
            </button>
            <button className={`tab-btn ${activeTab === 'accounting' ? 'active' : ''}`} onClick={() => setActiveTab('accounting')}>
              Accounting
            </button>
            <button className={`tab-btn ${activeTab === 'related' ? 'active' : ''}`} onClick={() => setActiveTab('related')}>
              Related Records
            </button>
            <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>
              Communication
            </button>
            <button className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`} onClick={() => setActiveTab('system')}>
              System Information
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'sales' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-section">
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Sales</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>SALES DESCRIPTION</label>
                        <textarea 
                          className="form-control"
                          rows="3"
                          value={formData.salesDescription}
                          onChange={(e) => handleInputChange('salesDescription', e.target.value)}
                        />
                      </div>

                      <div className="detail-field">
                        <label>COST ESTIMATE TYPE</label>
                        <select 
                          className="form-control"
                          value={formData.costEstimateType}
                          onChange={(e) => handleInputChange('costEstimateType', e.target.value)}
                        >
                          {costEstimateTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      <div className="detail-field">
                        <label>MINIMUM QUANTITY</label>
                        <input 
                          type="number" 
                          className="form-control"
                          value={formData.minimumQuantity}
                          onChange={(e) => handleInputChange('minimumQuantity', e.target.value)}
                        />
                      </div>

                      <div className="detail-field">
                        <label>ITEM DEFINED COST</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.itemDefinedCost}
                          onChange={(e) => handleInputChange('itemDefinedCost', e.target.value)}
                        />
                      </div>

                      <div className="detail-field">
                        <label>MAXIMUM QUANTITY</label>
                        <input 
                          type="number" 
                          className="form-control"
                          value={formData.maximumQuantity}
                          onChange={(e) => handleInputChange('maximumQuantity', e.target.value)}
                        />
                      </div>

                      <div className="detail-field">
                        <label>BILLING SCHEDULE</label>
                        <select 
                          className="form-control"
                          value={formData.billingSchedule}
                          onChange={(e) => handleInputChange('billingSchedule', e.target.value)}
                        >
                          <option value="">Select...</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="detail-section" style={{ marginTop: '2rem' }}>
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Pricing</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid" style={{ marginBottom: '1.5rem' }}>
                      <div className="detail-field">
                        <label>QUANTITY PRICING SCHEDULE</label>
                        <select 
                          className="form-control"
                          value={pricingData.quantityPricingSchedule}
                          onChange={(e) => setPricingData(prev => ({ ...prev, quantityPricingSchedule: e.target.value }))}
                        >
                          <option value="">Select...</option>
                        </select>
                      </div>

                      <div className="detail-field">
                        <label>CALCULATE QUANTITY DISCOUNTS</label>
                        <select 
                          className="form-control"
                          value={pricingData.calculateQuantityDiscounts}
                          onChange={(e) => setPricingData(prev => ({ ...prev, calculateQuantityDiscounts: e.target.value }))}
                        >
                          {calculateQuantityDiscountsOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>

                      <div className="detail-field">
                        <label>PRICING GROUP</label>
                        <select 
                          className="form-control"
                          value={pricingData.pricingGroup}
                          onChange={(e) => setPricingData(prev => ({ ...prev, pricingGroup: e.target.value }))}
                        >
                          <option value="">Select...</option>
                        </select>
                      </div>

                      <div className="detail-field">
                        <label style={{ display: 'flex', alignItems: 'center' }}>
                          <input 
                            type="checkbox"
                            checked={pricingData.useMarginalRates}
                            onChange={(e) => setPricingData(prev => ({ ...prev, useMarginalRates: e.target.checked }))}
                            style={{ marginRight: '8px' }}
                          />
                          USE MARGINAL RATES
                        </label>
                      </div>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                      <table className="items-table">
                        <thead>
                          <tr>
                            <th style={{ minWidth: '120px' }}>PRICE LEVEL</th>
                            <th style={{ minWidth: '100px' }}>DEFAULT DISCOUNT %</th>
                            <th style={{ minWidth: '100px' }}>QTY 0</th>
                            <th style={{ minWidth: '100px' }}>QTY</th>
                            <th style={{ minWidth: '100px' }}>QTY</th>
                            <th style={{ minWidth: '100px' }}>QTY</th>
                            <th style={{ minWidth: '100px' }}>QTY</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="7" style={{ padding: '0.5rem', background: '#f5f5f5', fontWeight: '600' }}>
                              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <button style={{ padding: '0.25rem 0.5rem', background: '#5b6b8a', color: 'white', border: 'none', cursor: 'pointer' }}>SGD</button>
                                <button style={{ padding: '0.25rem 0.5rem', background: 'transparent', border: 'none', cursor: 'pointer' }}>CAD</button>
                                <button style={{ padding: '0.25rem 0.5rem', background: 'transparent', border: 'none', cursor: 'pointer' }}>EUR</button>
                                <button style={{ padding: '0.25rem 0.5rem', background: 'transparent', border: 'none', cursor: 'pointer' }}>GBP</button>
                                <button style={{ padding: '0.25rem 0.5rem', background: 'transparent', border: 'none', cursor: 'pointer' }}>INR</button>
                                <button style={{ padding: '0.25rem 0.5rem', background: 'transparent', border: 'none', cursor: 'pointer' }}>Indonesia</button>
                                <button style={{ padding: '0.25rem 0.5rem', background: 'transparent', border: 'none', cursor: 'pointer' }}>MYR</button>
                                <button style={{ padding: '0.25rem 0.5rem', background: 'transparent', border: 'none', cursor: 'pointer' }}>USD</button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Default Discount %</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Base Price</td>
                            <td></td>
                            <td><input type="text" className="form-control" style={{ height: '32px' }} /></td>
                            <td><input type="text" className="form-control" style={{ height: '32px' }} /></td>
                            <td><input type="text" className="form-control" style={{ height: '32px' }} /></td>
                            <td><input type="text" className="form-control" style={{ height: '32px' }} /></td>
                            <td><input type="text" className="form-control" style={{ height: '32px' }} /></td>
                          </tr>
                          <tr>
                            <td>Alternate Price 1</td>
                            <td></td>
                            <td><input type="text" className="form-control" style={{ height: '32px' }} /></td>
                            <td><input type="text" className="form-control" style={{ height: '32px' }} /></td>
                            <td><input type="text" className="form-control" style={{ height: '32px' }} /></td>
                            <td><input type="text" className="form-control" style={{ height: '32px' }} /></td>
                            <td><input type="text" className="form-control" style={{ height: '32px' }} /></td>
                          </tr>
                          <tr>
                            <td>Alternate Price 2</td>
                            <td></td>
                            <td><input type="text" className="form-control" style={{ height: '32px' }} /></td>
                            <td><input type="text" className="form-control" style={{ height: '32px' }} /></td>
                            <td><input type="text" className="form-control" style={{ height: '32px' }} /></td>
                            <td><input type="text" className="form-control" style={{ height: '32px' }} /></td>
                            <td><input type="text" className="form-control" style={{ height: '32px' }} /></td>
                          </tr>
                          <tr>
                            <td>Alternate Price 3</td>
                            <td></td>
                            <td><input type="text" className="form-control" style={{ height: '32px' }} /></td>
                            <td><input type="text" className="form-control" style={{ height: '32px' }} /></td>
                            <td><input type="text" className="form-control" style={{ height: '32px' }} /></td>
                            <td><input type="text" className="form-control" style={{ height: '32px' }} /></td>
                            <td><input type="text" className="form-control" style={{ height: '32px' }} /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'accounting' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-section">
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Accounts</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>INCOME ACCOUNT</label>
                        <select 
                          className="form-control"
                          value={formData.incomeAccount}
                          onChange={(e) => handleInputChange('incomeAccount', e.target.value)}
                        >
                          <option>40200 Sales : Working Progress Sales</option>
                        </select>
                      </div>

                      <div className="detail-field">
                        <label>PRICE VARIANCE ACCOUNT</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.priceVarianceAccount}
                          onChange={(e) => handleInputChange('priceVarianceAccount', e.target.value)}
                          placeholder="<Type then tab>"
                        />
                      </div>

                      <div className="detail-field">
                        <label>QUANTITY VARIANCE ACCOUNT</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.quantityVarianceAccount}
                          onChange={(e) => handleInputChange('quantityVarianceAccount', e.target.value)}
                          placeholder="<Type then tab>"
                        />
                      </div>

                      <div className="detail-field">
                        <label>EXCHANGE RATE VARIANCE ACCOUNT</label>
                        <input 
                          type="text" 
                          className="form-control"
                          value={formData.exchangeRateVarianceAccount}
                          onChange={(e) => handleInputChange('exchangeRateVarianceAccount', e.target.value)}
                          placeholder="<Type then tab>"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="detail-section" style={{ marginTop: '2rem' }}>
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Tax / Tariff</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>TAX SCHEDULE <span style={{ color: '#dc2626' }}>*</span></label>
                        <select 
                          className="form-control"
                          value={formData.taxSchedule}
                          onChange={(e) => handleInputChange('taxSchedule', e.target.value)}
                        >
                          <option>Tax 7%</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'related' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-section">
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Transactions</h3>
                  </div>
                  <div className="section-body">
                    <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <div>
                        <label style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}>VIEW</label>
                        <select className="form-control" style={{ width: 'auto', display: 'inline-block' }}>
                          <option>Item</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}>TYPE</label>
                        <select className="form-control" style={{ width: 'auto', display: 'inline-block' }}>
                          <option>- All -</option>
                        </select>
                      </div>
                      <button className="btn-toolbar">Edit</button>
                      <button className="btn-toolbar">Customize View</button>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                      <table className="items-table">
                        <thead>
                          <tr>
                            <th>DATE</th>
                            <th>TYPE</th>
                            <th>DOCUMENT NUMBER</th>
                            <th>NAME</th>
                            <th>QUANTITY</th>
                            <th>RATE</th>
                            <th>AMOUNT</th>
                            <th>PURCHASE TYPE</th>
                            <th>MATERIAL SPECIFICATION</th>
                            <th>APPROVAL STATUS</th>
                            <th>REF POSTING PAYBATCH</th>
                            <th>REF PAYBATCH</th>
                            <th>REF.POSTING PAYBATCH</th>
                            <th>CURRENCY</th>
                            <th>REJECTED BY</th>
                            <th>FINAL APPROVED BY</th>
                            <th>PAY TAGGED TO CALENDER EMPLOYEE</th>
                            <th>PAYMENT MODE</th>
                            <th>COMPANY ADDRESS</th>
                            <th>TYPE</th>
                            <th>REF PO NUMBER</th>
                            <th>REF ORDER NO</th>
                            <th>APPROVAL REJECTION REMARKS</th>
                            <th>ISSUED DATE</th>
                            <th>RECEIVED DATE</th>
                            <th>PROJECT MANAGER</th>
                            <th>STORE PERSON</th>
                            <th>REF PR NO</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="28" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                              No records to show.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'communication' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-section">
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Activities</h3>
                  </div>
                  <div className="section-body">
                    <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <button className="btn-toolbar">New Task</button>
                      <button className="btn-toolbar">Log Task</button>
                      <button className="btn-toolbar">New Phone Call</button>
                      <button className="btn-toolbar">Log Phone Call</button>
                      <button className="btn-toolbar">New Event</button>
                      <button className="btn-toolbar">Log Event</button>
                      <button className="btn-toolbar">View History</button>
                      <button className="btn-toolbar">Customize View</button>
                    </div>

                    <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <div>
                        <label style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}>VIEW</label>
                        <select className="form-control" style={{ width: 'auto', display: 'inline-block' }}>
                          <option>Default</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}>STATUS</label>
                        <select className="form-control" style={{ width: 'auto', display: 'inline-block' }}>
                          <option>- All -</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}>ACTIVITY TYPE</label>
                        <select className="form-control" style={{ width: 'auto', display: 'inline-block' }}>
                          <option>- All -</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', borderBottom: '2px solid #e0e0e0' }}>
                      <button style={{ padding: '0.5rem 1rem', background: 'transparent', border: 'none', borderBottom: '2px solid #5b6b8a', fontWeight: '600', cursor: 'pointer' }}>
                        Files
                      </button>
                      <button style={{ padding: '0.5rem 1rem', background: 'transparent', border: 'none', cursor: 'pointer' }}>
                        User Notes
                      </button>
                    </div>

                    <div className="items-table-wrapper">
                      <table className="items-table">
                        <thead>
                          <tr>
                            <th>EDIT</th>
                            <th>TITLE</th>
                            <th>DATE</th>
                            <th>TIME</th>
                            <th>OWNER</th>
                            <th>STATUS</th>
                            <th>ASSIGNED TO</th>
                            <th>TYPE</th>
                            <th>MARK</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="9" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                              No records to show.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'system' && (
              <div style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <label style={{ display: 'flex', alignItems: 'center', marginRight: '2rem' }}>
                    <input type="checkbox" style={{ marginRight: '8px' }} />
                    INACTIVE
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '8px' }} />
                    CHANGE UNIT
                  </label>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '2px solid #e0e0e0' }}>
                  <button 
                    style={{ 
                      padding: '0.5rem 1rem', 
                      background: 'transparent', 
                      border: 'none', 
                      borderBottom: systemSubTab === 'notes' ? '2px solid #5b6b8a' : 'none', 
                      fontWeight: systemSubTab === 'notes' ? '600' : 'normal', 
                      cursor: 'pointer' 
                    }}
                    onClick={() => setSystemSubTab('notes')}
                  >
                    System Notes
                  </button>
                  <button 
                    style={{ 
                      padding: '0.5rem 1rem', 
                      background: 'transparent', 
                      border: 'none', 
                      borderBottom: systemSubTab === 'workflows' ? '2px solid #5b6b8a' : 'none', 
                      fontWeight: systemSubTab === 'workflows' ? '600' : 'normal', 
                      cursor: 'pointer' 
                    }}
                    onClick={() => setSystemSubTab('workflows')}
                  >
                    Active Workflows
                  </button>
                  <button 
                    style={{ 
                      padding: '0.5rem 1rem', 
                      background: 'transparent', 
                      border: 'none', 
                      borderBottom: systemSubTab === 'history' ? '2px solid #5b6b8a' : 'none', 
                      fontWeight: systemSubTab === 'history' ? '600' : 'normal', 
                      cursor: 'pointer' 
                    }}
                    onClick={() => setSystemSubTab('history')}
                  >
                    Workflow History
                  </button>
                </div>

                {systemSubTab === 'notes' && (
                  <div className="detail-section">
                    <div className="section-body">
                      <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div>
                          <label style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}>VIEW</label>
                          <select className="form-control" style={{ width: 'auto', display: 'inline-block' }}>
                            <option>Default</option>
                          </select>
                        </div>
                        <div>
                          <label style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}>FIELD</label>
                          <select className="form-control" style={{ width: 'auto', display: 'inline-block' }}>
                            <option>- All -</option>
                          </select>
                        </div>
                        <button className="btn-toolbar">Customize View</button>
                      </div>

                      <div style={{ overflowX: 'auto' }}>
                        <table className="items-table">
                          <thead>
                            <tr>
                              <th>DATE</th>
                              <th>SET BY</th>
                              <th>CONTEXT</th>
                              <th>TYPE</th>
                              <th>FIELD</th>
                              <th>OLD VALUE</th>
                              <th>NEW VALUE</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                                No records to show.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {systemSubTab === 'workflows' && (
                  <div className="detail-section">
                    <div className="section-body">
                      <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div>
                          <label style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}>VIEW</label>
                          <select className="form-control" style={{ width: 'auto', display: 'inline-block' }}>
                            <option>Default</option>
                          </select>
                        </div>
                        <button className="btn-toolbar">Customize View</button>
                        <button className="btn-toolbar" style={{ marginLeft: 'auto' }}>Refresh</button>
                      </div>

                      <div style={{ overflowX: 'auto' }}>
                        <table className="items-table">
                          <thead>
                            <tr>
                              <th>WORKFLOW</th>
                              <th>CURRENT STATE</th>
                              <th>DATE ENTERED WORKFLOW</th>
                              <th>DATE ENTERED STATE</th>
                              <th>OPTIONS</th>
                              <th>STATUS</th>
                              <th>CANCEL</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                                No records to show.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {systemSubTab === 'history' && (
                  <div className="detail-section">
                    <div className="section-body">
                      <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div>
                          <label style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}>VIEW</label>
                          <select className="form-control" style={{ width: 'auto', display: 'inline-block' }}>
                            <option>Default</option>
                          </select>
                        </div>
                        <button className="btn-toolbar">Customize View</button>
                        <button className="btn-toolbar" style={{ marginLeft: 'auto' }}>Refresh</button>
                      </div>

                      <div style={{ overflowX: 'auto' }}>
                        <table className="items-table">
                          <thead>
                            <tr>
                              <th>WORKFLOW</th>
                              <th>STATE NAME INFO</th>
                              <th>DATE ENTERED STATE</th>
                              <th>DATE EXITED STATE</th>
                              <th>OPTIONS</th>
                              <th>LOG</th>
                              <th>NOTES</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                                No records to show.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="detail-footer">
          <button className="btn-toolbar" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn-toolbar-primary" onClick={handleSave}>
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

export default DebitNote;
