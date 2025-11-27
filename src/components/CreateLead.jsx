import React, { useState } from 'react';
import './Enquiries.css';
import Toast from './Toast';

const CreateLead = ({ onBack }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    industry: '',
    interest: '',
    source: '',
    assignedTo: '',
    subsidiary: '',
    status: 'New',
    address: '',
    website: '',
    companySize: '',
    annualRevenue: '',
    description: '',
    notes: ''
  });

  const industries = [
    'Marine Engineering',
    'Oil & Gas',
    'Shipbuilding',
    'Offshore Engineering',
    'Petrochemical',
    'Manufacturing',
    'Construction'
  ];

  const projectTypes = [
    'Offshore Platform Module',
    'FPSO Module Fabrication',
    'Hull Block Assembly',
    'Process Module',
    'Subsea Module',
    'Piping Systems',
    'Structural Fabrication'
  ];

  const leadSources = [
    'Website Form',
    'Trade Show',
    'Referral',
    'Email Campaign',
    'Cold Call',
    'Social Media',
    'Partner'
  ];

  const salesPersons = [
    'Sarah Lee',
    'David Chen',
    'Michael Tan',
    'Lisa Wong'
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

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ];

  const revenueRanges = [
    'Less than $1M',
    '$1M - $5M',
    '$5M - $10M',
    '$10M - $50M',
    '$50M+'
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

  const handleSave = () => {
    if (!formData.companyName || !formData.contactPerson || !formData.email || !formData.subsidiary) {
      showToast('Please fill in all required fields (Company Name, Contact Person, Email, Subsidiary)', 'error');
      return;
    }
    showToast('Lead created successfully!', 'success');
    setTimeout(() => {
      if (onBack) onBack();
    }, 2000);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Changes cancelled', 'info');
      if (onBack) onBack();
    }
  };

  const handleConvertToOpportunity = () => {
    if (!formData.companyName || !formData.contactPerson || !formData.email || !formData.subsidiary) {
      showToast('Please fill in all required fields before converting to opportunity', 'error');
      return;
    }
    showToast('Lead converted to opportunity successfully!', 'success');
    setTimeout(() => {
      // Navigate to opportunity creation or list
      if (onBack) onBack();
    }, 2000);
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-user-plus" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Create New Lead</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={handleCancel}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-sync"></i>
            Actions
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
              <label className="form-label">COMPANY NAME <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                placeholder="Enter company name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">CONTACT PERSON <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.contactPerson}
                onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                placeholder="Enter contact person name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">PHONE</label>
              <input 
                type="tel" 
                className="form-control"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+65 XXXX XXXX"
              />
            </div>
            <div className="form-group">
              <label className="form-label">EMAIL <span className="required">*</span></label>
              <input 
                type="email" 
                className="form-control"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="contact@company.com"
              />
            </div>
            <div className="form-group">
              <label className="form-label">INDUSTRY</label>
              <select 
                className="form-control"
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
              >
                <option value="">Select Industry</option>
                {industries.map((industry, index) => (
                  <option key={index} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">PROJECT TYPE</label>
              <select 
                className="form-control"
                value={formData.interest}
                onChange={(e) => handleInputChange('interest', e.target.value)}
              >
                <option value="">Select Project Type</option>
                {projectTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">LEAD SOURCE</label>
              <select 
                className="form-control"
                value={formData.source}
                onChange={(e) => handleInputChange('source', e.target.value)}
              >
                <option value="">Select Source</option>
                {leadSources.map((source, index) => (
                  <option key={index} value={source}>{source}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">ASSIGNED TO</label>
              <select 
                className="form-control"
                value={formData.assignedTo}
                onChange={(e) => handleInputChange('assignedTo', e.target.value)}
              >
                <option value="">Select Sales Person</option>
                {salesPersons.map((person, index) => (
                  <option key={index} value={person}>{person}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">SUBSIDIARY <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleInputChange('subsidiary', e.target.value)}
              >
                <option value="">Select Subsidiary</option>
                {subsidiaries.map((subsidiary, index) => (
                  <option key={index} value={subsidiary}>{subsidiary}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">WEBSITE</label>
              <input 
                type="url" 
                className="form-control"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                placeholder="https://www.company.com"
              />
            </div>
            <div className="form-group">
              <label className="form-label">COMPANY SIZE</label>
              <select 
                className="form-control"
                value={formData.companySize}
                onChange={(e) => handleInputChange('companySize', e.target.value)}
              >
                <option value="">Select Size</option>
                {companySizes.map((size, index) => (
                  <option key={index} value={size}>{size}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">ANNUAL REVENUE</label>
              <select 
                className="form-control"
                value={formData.annualRevenue}
                onChange={(e) => handleInputChange('annualRevenue', e.target.value)}
              >
                <option value="">Select Range</option>
                {revenueRanges.map((range, index) => (
                  <option key={index} value={range}>{range}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">ADDRESS</label>
              <textarea 
                className="form-control"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="Enter company address"
                rows="3"
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Additional Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-sticky-note"></i>
            Additional Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">PROJECT DESCRIPTION</label>
              <textarea 
                className="form-control"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Describe the project requirements and scope..."
                rows="4"
              />
            </div>
            <div className="form-group">
              <label className="form-label">NOTES</label>
              <textarea 
                className="form-control"
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                placeholder="Add any additional notes or comments..."
                rows="4"
              />
            </div>
          </div>
        </div>

        {/* Convert to Opportunity Section */}
        <div style={{ 
          marginTop: '2rem', 
          padding: '1.5rem', 
          backgroundColor: '#f8f9fa', 
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '16px', fontWeight: '600' }}>
              <i className="fas fa-lightbulb" style={{ marginRight: '8px', color: '#ffc107' }}></i>
              Ready to Convert?
            </h3>
            <p style={{ margin: 0, fontSize: '14px', color: '#6c757d' }}>
              Convert this lead to an opportunity to track the sales pipeline and create quotations.
            </p>
          </div>
          <button 
            className="btn btn-primary" 
            onClick={handleConvertToOpportunity}
            style={{ 
              padding: '12px 24px',
              fontSize: '15px',
              fontWeight: '600',
              whiteSpace: 'nowrap'
            }}
          >
            <i className="fas fa-arrow-right" style={{ marginRight: '8px' }}></i>
            Convert to Opportunity
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

export default CreateLead;
