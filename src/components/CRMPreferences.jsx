import React, { useState } from 'react';
import Toast from './Toast';

const CRMPreferences = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('general');

  const [formData, setFormData] = useState({
    leadStatus: 'Unqualified',
    prospectStatusNew: 'In Discussion',
    prospectStatusEnquiry: 'In Discussion',
    prospectStatusQuotation: 'Proposal',
    customerStatus: 'Closed Won',
    standardSalesRoles: 'Restrict Editing and Viewing',
    restrictByTransactionSalesRepOnly: false,
    defaultQuotationExpiration: '30',
    defaultSalesEffectiveDate: true,
    considerStartsWith: true,
    showIntelligentRecommendations: true,
    preferredLeadForm: 'TOM Customer Form',
    preferredProspectForm: 'TOM Customer Form',
    // Forecasts
    calculateForecastsAsWeighted: true,
    forecastQuarterly: true,
    lowForecastName: 'Worst Case',
    mediumForecastName: 'Most Likely',
    highForecastName: 'Upside',
    defaultForecastType: 'Omitted',
    useQuotationsInForecast: true,
    multipleProjectedAmounts: true,
    forecastAccuracy: 'Friday',
    at: '5:00 pm',
    allowSettingStatusInForecastEditor: true,
    allowSettingProbabilityInForecastEditor: true
  });

  const leadStatuses = ['Unqualified', 'Qualified'];
  const prospectStatuses = ['Closed Lost', 'In Discussion', 'Identified Decision Makers', 'Proposal', 'In Negotiation', 'Purchasing'];
  const customerStatuses = ['Closed Won', 'Lost Customer', 'Renewal'];
  const salesRoles = ['Unrestricted', 'Restrict Editing Only', 'Restrict Editing and Viewing'];
  const forecastTypes = ['Omitted', 'Worst Case', 'Most Likely', 'Upside'];
  const forecastAccuracies = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const leadForms = [
    'Standard Customer Form',
    'Standard Intercompany Customer Form',
    'Standard Lead Form',
    'Standard Pop-up Customer Form',
    'TOM Customer Form',
    'TOM Lead Form'
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field) => {
    setFormData(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSave = () => {
    showToast('CRM Preferences saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (setCurrentPage) setCurrentPage('setup-crm');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-cog" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Sales Preferences</h1>
        </div>
      </div>

      <div className="form-container">
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-primary" onClick={handleSave}>Save</button>
          <button className="btn btn-tertiary" onClick={handleCancel}>Cancel</button>
        </div>

        {/* Tabs */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
            >
              General
            </button>
            <button 
              className={`tab-btn ${activeTab === 'forecasts' ? 'active' : ''}`}
              onClick={() => setActiveTab('forecasts')}
            >
              Forecasts
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'general' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">LEAD STATUS</label>
                    <select className="form-control" value={formData.leadStatus} onChange={(e) => handleInputChange('leadStatus', e.target.value)}>
                      {leadStatuses.map((status, i) => <option key={i}>{status}</option>)}
                    </select>
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="form-label">PROSPECT STATUS - NEW</label>
                    <select className="form-control" value={formData.prospectStatusNew} onChange={(e) => handleInputChange('prospectStatusNew', e.target.value)}>
                      {prospectStatuses.map((status, i) => <option key={i}>{status}</option>)}
                    </select>
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="form-label">PROSPECT STATUS - ENQUIRY</label>
                    <select className="form-control" value={formData.prospectStatusEnquiry} onChange={(e) => handleInputChange('prospectStatusEnquiry', e.target.value)}>
                      {prospectStatuses.map((status, i) => <option key={i}>{status}</option>)}
                    </select>
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="form-label">PROSPECT STATUS - QUOTATION</label>
                    <select className="form-control" value={formData.prospectStatusQuotation} onChange={(e) => handleInputChange('prospectStatusQuotation', e.target.value)}>
                      {prospectStatuses.map((status, i) => <option key={i}>{status}</option>)}
                    </select>
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="form-label">CUSTOMER STATUS</label>
                    <select className="form-control" value={formData.customerStatus} onChange={(e) => handleInputChange('customerStatus', e.target.value)}>
                      {customerStatuses.map((status, i) => <option key={i}>{status}</option>)}
                    </select>
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="form-label">STANDARD SALES ROLES</label>
                    <select className="form-control" value={formData.standardSalesRoles} onChange={(e) => handleInputChange('standardSalesRoles', e.target.value)}>
                      {salesRoles.map((role, i) => <option key={i}>{role}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" checked={formData.restrictByTransactionSalesRepOnly} onChange={() => handleCheckboxChange('restrictByTransactionSalesRepOnly')} />
                      <span>RESTRICT BY TRANSACTION SALES REP ONLY</span>
                    </label>
                  </div>

                  <div className="form-group">
                    <label className="form-label">DEFAULT QUOTATION EXPIRATION (IN DAYS) <span className="required">*</span></label>
                    <input type="number" className="form-control" value={formData.defaultQuotationExpiration} onChange={(e) => handleInputChange('defaultQuotationExpiration', e.target.value)} />
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" checked={formData.defaultSalesEffectiveDate} onChange={() => handleCheckboxChange('defaultSalesEffectiveDate')} />
                      <span>DEFAULT SALES EFFECTIVE DATE TO LINKED SALES EFFECTIVE DATE</span>
                    </label>
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" checked={formData.considerStartsWith} onChange={() => handleCheckboxChange('considerStartsWith')} />
                      <span>CONSIDER "STARTS WITH" MATCHES IN LEAD CONVERSION</span>
                    </label>
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" checked={formData.showIntelligentRecommendations} onChange={() => handleCheckboxChange('showIntelligentRecommendations')} />
                      <span>SHOW INTELLIGENT RECOMMENDATIONS BUTTON FOR ITEM RECOMMENDATIONS</span>
                    </label>
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="form-label">PREFERRED LEAD FORM</label>
                    <select className="form-control" value={formData.preferredLeadForm} onChange={(e) => handleInputChange('preferredLeadForm', e.target.value)}>
                      {leadForms.map((form, i) => <option key={i}>{form}</option>)}
                    </select>
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="form-label">PREFERRED PROSPECT FORM</label>
                    <select className="form-control" value={formData.preferredProspectForm} onChange={(e) => handleInputChange('preferredProspectForm', e.target.value)}>
                      {leadForms.map((form, i) => <option key={i}>{form}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'forecasts' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" checked={formData.calculateForecastsAsWeighted} onChange={() => handleCheckboxChange('calculateForecastsAsWeighted')} />
                      <span>CALCULATE FORECASTS AS WEIGHTED</span>
                    </label>
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label style={{ fontSize: '0.875rem', color: '#666' }}>FORECAST QUARTERLY (VS. MONTHLY)</label>
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="form-label">LOW FORECAST NAME <span className="required">*</span></label>
                    <input type="text" className="form-control" value={formData.lowForecastName} onChange={(e) => handleInputChange('lowForecastName', e.target.value)} />
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="form-label">MEDIUM FORECAST NAME <span className="required">*</span></label>
                    <input type="text" className="form-control" value={formData.mediumForecastName} onChange={(e) => handleInputChange('mediumForecastName', e.target.value)} />
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="form-label">HIGH FORECAST NAME <span className="required">*</span></label>
                    <input type="text" className="form-control" value={formData.highForecastName} onChange={(e) => handleInputChange('highForecastName', e.target.value)} />
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="form-label">DEFAULT FORECAST TYPE</label>
                    <select className="form-control" value={formData.defaultForecastType} onChange={(e) => handleInputChange('defaultForecastType', e.target.value)}>
                      {forecastTypes.map((type, i) => <option key={i}>{type}</option>)}
                    </select>
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" checked={formData.useQuotationsInForecast} onChange={() => handleCheckboxChange('useQuotationsInForecast')} />
                      <span>USE QUOTATIONS IN FORECAST</span>
                    </label>
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" checked={formData.multipleProjectedAmounts} onChange={() => handleCheckboxChange('multipleProjectedAmounts')} />
                      <span>MULTIPLE PROJECTED AMOUNTS</span>
                    </label>
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="form-label">FORECAST ACCURACY (WEEKLY VIEW)</label>
                    <select className="form-control" value={formData.forecastAccuracy} onChange={(e) => handleInputChange('forecastAccuracy', e.target.value)}>
                      {forecastAccuracies.map((day, i) => <option key={i}>{day}</option>)}
                    </select>
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="form-label">AT</label>
                    <select className="form-control" value={formData.at} onChange={(e) => handleInputChange('at', e.target.value)}>
                      <option>5:00 pm</option>
                      <option>6:00 pm</option>
                      <option>7:00 pm</option>
                    </select>
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" checked={formData.allowSettingStatusInForecastEditor} onChange={() => handleCheckboxChange('allowSettingStatusInForecastEditor')} />
                      <span>ALLOW SETTING STATUS IN FORECAST EDITOR</span>
                    </label>
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" checked={formData.allowSettingProbabilityInForecastEditor} onChange={() => handleCheckboxChange('allowSettingProbabilityInForecastEditor')} />
                      <span>ALLOW SETTING PROBABILITY IN FORECAST EDITOR</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-primary" onClick={handleSave}>Save</button>
          <button className="btn btn-tertiary" onClick={handleCancel}>Cancel</button>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default CRMPreferences;
