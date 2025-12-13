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
    notes: '',
    followUpDate: '',
    followUpNotes: ''
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
      if (onBack) onBack();
    }, 2000);
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-user-plus"></i>
          <div>
            <h1>Create New Lead</h1>
            <div className="detail-subtitle">
              <span>New Lead Entry</span>
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
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn-toolbar" onClick={handleConvertToOpportunity}>
          <i className="fas fa-exchange-alt"></i>
          Convert to Opportunity
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
        {/* Primary Information Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>COMPANY NAME <span style={{ color: '#dc2626' }}>*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder="Enter company name"
                />
              </div>
              <div className="detail-field">
                <label>CONTACT PERSON <span style={{ color: '#dc2626' }}>*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.contactPerson}
                  onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                  placeholder="Enter contact person name"
                />
              </div>
              <div className="detail-field">
                <label>PHONE</label>
                <input 
                  type="tel" 
                  className="form-control"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+65 XXXX XXXX"
                />
              </div>
              <div className="detail-field">
                <label>EMAIL <span style={{ color: '#dc2626' }}>*</span></label>
                <input 
                  type="email" 
                  className="form-control"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="contact@company.com"
                />
              </div>
              <div className="detail-field">
                <label>INDUSTRY</label>
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
              <div className="detail-field">
                <label>PROJECT TYPE</label>
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
              <div className="detail-field">
                <label>LEAD SOURCE</label>
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
              <div className="detail-field">
                <label>STATUS</label>
                <select 
                  className="form-control"
                  value={formData.status}
                  onChange={(e) => handleInputChange('status', e.target.value)}
                >
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Qualified">Qualified</option>
                  <option value="Converted">Converted</option>
                  <option value="Disqualified">Disqualified</option>
                </select>
              </div>
              <div className="detail-field">
                <label>ASSIGNED TO</label>
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
              <div className="detail-field">
                <label>WEBSITE</label>
                <input 
                  type="url" 
                  className="form-control"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  placeholder="https://www.company.com"
                />
              </div>
              <div className="detail-field">
                <label>COMPANY SIZE</label>
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
              <div className="detail-field">
                <label>ANNUAL REVENUE</label>
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
                  <option value="">Select Subsidiary</option>
                  {subsidiaries.map((subsidiary, index) => (
                    <option key={index} value={subsidiary}>{subsidiary}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Follow-Up Information Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Follow-Up Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>FOLLOW-UP DATE</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.followUpDate}
                  onChange={(e) => handleInputChange('followUpDate', e.target.value)}
                />
              </div>
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label>FOLLOW-UP NOTES</label>
                <textarea 
                  className="form-control"
                  value={formData.followUpNotes}
                  onChange={(e) => handleInputChange('followUpNotes', e.target.value)}
                  placeholder="e.g., Call back after 7 days, Send proposal, Schedule meeting..."
                  rows="3"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Additional Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label>ADDRESS</label>
                <textarea 
                  className="form-control"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Enter company address"
                  rows="3"
                />
              </div>
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label>PROJECT DESCRIPTION</label>
                <textarea 
                  className="form-control"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe the project requirements and scope..."
                  rows="4"
                />
              </div>
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label>NOTES</label>
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

export default CreateLead;
