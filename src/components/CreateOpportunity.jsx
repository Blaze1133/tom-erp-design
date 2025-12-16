import React, { useState } from 'react';
import './Enquiries.css';
import Toast from './Toast';

const CreateOpportunity = ({ onBack }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [formData, setFormData] = useState({
    opportunityName: '',
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    value: '',
    probability: '50',
    stage: 'Qualification',
    expectedCloseDate: '',
    industry: '',
    projectType: '',
    source: '',
    assignedTo: '',
    subsidiary: '',
    address: '',
    website: '',
    companySize: '',
    annualRevenue: '',
    description: '',
    notes: '',
    competitors: '',
    nextSteps: ''
  });

  const [followUps, setFollowUps] = useState([
    {
      id: 1,
      date: '2024-11-22',
      remarks: 'Initial proposal discussion with client',
      nextFollowUpDate: '2024-11-30',
      status: 'Completed',
      attachment: null
    },
    {
      id: 2,
      date: '2024-11-30',
      remarks: 'Awaiting technical specifications from client',
      nextFollowUpDate: '2024-12-08',
      status: 'Pending',
      attachment: null
    }
  ]);

  const [newFollowUp, setNewFollowUp] = useState({
    date: '',
    activityType: '',
    remarks: '',
    nextFollowUpDate: '',
    status: 'Pending',
    attachment: null
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

  const sources = [
    'Converted Lead',
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

  const stages = [
    'Qualification',
    'Proposal',
    'Negotiation',
    'Closed Won',
    'Closed Lost'
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
    if (!formData.opportunityName || !formData.companyName || !formData.contactPerson || !formData.email || !formData.subsidiary || !formData.value) {
      showToast('Please fill in all required fields (Opportunity Name, Company Name, Contact Person, Email, Subsidiary, Value)', 'error');
      return;
    }
    showToast('Opportunity created successfully!', 'success');
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

  const handleConvertToSalesEnquiry = () => {
    if (!formData.opportunityName || !formData.companyName || !formData.contactPerson || !formData.email || !formData.subsidiary || !formData.value) {
      showToast('Please fill in all required fields before converting to sales enquiry', 'error');
      return;
    }
    showToast('Opportunity converted to sales enquiry successfully!', 'success');
    setTimeout(() => {
      if (onBack) onBack();
    }, 2000);
  };

  const handleAddFollowUp = () => {
    if (!newFollowUp.date || !newFollowUp.activityType || !newFollowUp.remarks) {
      showToast('Please fill in Date, Activity Type, and Remarks for the follow-up', 'error');
      return;
    }
    const followUp = {
      id: followUps.length + 1,
      ...newFollowUp
    };
    setFollowUps([...followUps, followUp]);
    setNewFollowUp({
      date: '',
      activityType: '',
      remarks: '',
      nextFollowUpDate: '',
      status: 'Pending',
      attachment: null
    });
    showToast('Follow-up added successfully!', 'success');
  };

  const handleDeleteFollowUp = (id) => {
    if (window.confirm('Are you sure you want to delete this follow-up?')) {
      setFollowUps(followUps.filter(f => f.id !== id));
      showToast('Follow-up deleted successfully!', 'success');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewFollowUp(prev => ({
        ...prev,
        attachment: file.name
      }));
      showToast('File attached successfully!', 'success');
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-bullseye"></i>
          <div>
            <h1>Create New Opportunity</h1>
            <div className="detail-subtitle">
              <span>New Opportunity Entry</span>
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
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print
        </button>
        <button className="btn-toolbar" onClick={handleConvertToSalesEnquiry}>
          <i className="fas fa-exchange-alt"></i>
          Convert to Sales Enquiry
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
                <label>OPPORTUNITY NAME <span style={{ color: '#dc2626' }}>*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.opportunityName}
                  onChange={(e) => handleInputChange('opportunityName', e.target.value)}
                  placeholder="Enter opportunity name"
                />
              </div>
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
                <label>OPPORTUNITY VALUE <span style={{ color: '#dc2626' }}>*</span></label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.value}
                  onChange={(e) => handleInputChange('value', e.target.value)}
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
              <div className="detail-field">
                <label>PROBABILITY (%)</label>
                <input 
                  type="number" 
                  className="form-control"
                  value={formData.probability}
                  onChange={(e) => handleInputChange('probability', e.target.value)}
                  min="0"
                  max="100"
                />
              </div>
              <div className="detail-field">
                <label>STAGE</label>
                <select 
                  className="form-control"
                  value={formData.stage}
                  onChange={(e) => handleInputChange('stage', e.target.value)}
                >
                  {stages.map((stage, index) => (
                    <option key={index} value={stage}>{stage}</option>
                  ))}
                </select>
              </div>
              <div className="detail-field">
                <label>EXPECTED CLOSE DATE</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.expectedCloseDate}
                  onChange={(e) => handleInputChange('expectedCloseDate', e.target.value)}
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
                  value={formData.projectType}
                  onChange={(e) => handleInputChange('projectType', e.target.value)}
                >
                  <option value="">Select Project Type</option>
                  {projectTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="detail-field">
                <label>SOURCE</label>
                <select 
                  className="form-control"
                  value={formData.source}
                  onChange={(e) => handleInputChange('source', e.target.value)}
                >
                  <option value="">Select Source</option>
                  {sources.map((source, index) => (
                    <option key={index} value={source}>{source}</option>
                  ))}
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
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Additional Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
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
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label>COMPETITORS</label>
                <textarea 
                  className="form-control"
                  value={formData.competitors}
                  onChange={(e) => handleInputChange('competitors', e.target.value)}
                  placeholder="List known competitors for this opportunity..."
                  rows="3"
                />
              </div>
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label>NEXT STEPS</label>
                <textarea 
                  className="form-control"
                  value={formData.nextSteps}
                  onChange={(e) => handleInputChange('nextSteps', e.target.value)}
                  placeholder="Define next steps and action items..."
                  rows="3"
                />
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
            <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                <i className="fas fa-plus-circle" style={{ marginRight: '8px', color: '#dc2626' }}></i>
                Add New Follow-Up
              </h4>
              <div className="detail-grid">
                <div className="detail-field">
                  <label>DATE <span style={{ color: '#dc2626' }}>*</span></label>
                  <input 
                    type="date" 
                    className="form-control"
                    value={newFollowUp.date}
                    onChange={(e) => setNewFollowUp({...newFollowUp, date: e.target.value})}
                  />
                </div>
                <div className="detail-field">
                  <label>ACTIVITY TYPE <span style={{ color: '#dc2626' }}>*</span></label>
                  <select 
                    className="form-control"
                    value={newFollowUp.activityType}
                    onChange={(e) => setNewFollowUp({...newFollowUp, activityType: e.target.value})}
                  >
                    <option value="">Select Activity Type...</option>
                    <option value="Call">Call</option>
                    <option value="Email">Email</option>
                    <option value="Message">Message</option>
                    <option value="Online Meeting">Online Meeting</option>
                    <option value="In-Person Meeting">In-Person Meeting</option>
                    <option value="Site Visit">Site Visit</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="SMS">SMS</option>
                  </select>
                </div>
                <div className="detail-field">
                  <label>NEXT FOLLOW-UP DATE</label>
                  <input 
                    type="date" 
                    className="form-control"
                    value={newFollowUp.nextFollowUpDate}
                    onChange={(e) => setNewFollowUp({...newFollowUp, nextFollowUpDate: e.target.value})}
                  />
                </div>
                <div className="detail-field">
                  <label>STATUS</label>
                  <select 
                    className="form-control"
                    value={newFollowUp.status}
                    onChange={(e) => setNewFollowUp({...newFollowUp, status: e.target.value})}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
                <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                  <label>REMARKS <span style={{ color: '#dc2626' }}>*</span></label>
                  <textarea 
                    className="form-control"
                    value={newFollowUp.remarks}
                    onChange={(e) => setNewFollowUp({...newFollowUp, remarks: e.target.value})}
                    placeholder="Enter follow-up details, what was discussed, client feedback, etc."
                    rows="2"
                  />
                </div>
                <div className="detail-field">
                  <label>ATTACHMENT</label>
                  <input 
                    type="file" 
                    className="form-control"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                  />
                  {newFollowUp.attachment && (
                    <small style={{ color: '#28a745', marginTop: '4px', display: 'block' }}>
                      <i className="fas fa-check-circle"></i> {newFollowUp.attachment}
                    </small>
                  )}
                </div>
              </div>
              <div style={{ marginTop: '1rem', textAlign: 'right' }}>
                <button 
                  className="btn-toolbar-primary" 
                  onClick={handleAddFollowUp}
                  style={{ padding: '8px 16px' }}
                >
                  <i className="fas fa-plus"></i>
                  Add Follow-Up
                </button>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                <i className="fas fa-history" style={{ marginRight: '8px', color: '#4a90e2' }}></i>
                Follow-Up History
              </h4>
              <div className="enquiries-table-container">
                <table className="enquiries-table">
                  <thead>
                    <tr>
                      <th style={{ width: '12%' }}>DATE</th>
                      <th style={{ width: '35%' }}>REMARKS</th>
                      <th style={{ width: '12%' }}>NEXT FOLLOW-UP</th>
                      <th style={{ width: '10%' }}>STATUS</th>
                      <th style={{ width: '15%' }}>ATTACHMENT</th>
                      <th style={{ width: '8%' }}>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {followUps.length === 0 ? (
                      <tr>
                        <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                          <i className="fas fa-inbox" style={{ fontSize: '2rem', marginBottom: '0.5rem', display: 'block' }}></i>
                          No follow-ups recorded yet
                        </td>
                      </tr>
                    ) : (
                      followUps.map((followUp) => (
                        <tr key={followUp.id}>
                          <td>{followUp.date}</td>
                          <td>{followUp.remarks}</td>
                          <td>{followUp.nextFollowUpDate || '-'}</td>
                          <td>
                            <span 
                              className="badge"
                              style={{
                                backgroundColor: followUp.status === 'Completed' ? '#e8f5e9' : 
                                                followUp.status === 'Pending' ? '#fff3e0' : '#ffebee',
                                color: followUp.status === 'Completed' ? '#2e7d32' : 
                                       followUp.status === 'Pending' ? '#f57c00' : '#c62828',
                                padding: '4px 12px',
                                borderRadius: '4px',
                                fontSize: '12px',
                                fontWeight: '500'
                              }}
                            >
                              {followUp.status}
                            </span>
                          </td>
                          <td>
                            {followUp.attachment ? (
                              <a href="#" style={{ color: '#4a90e2', textDecoration: 'none' }}>
                                <i className="fas fa-paperclip"></i> {followUp.attachment}
                              </a>
                            ) : (
                              <span style={{ color: '#999' }}>No attachment</span>
                            )}
                          </td>
                          <td>
                            <button 
                              className="view-link" 
                              onClick={() => handleDeleteFollowUp(followUp.id)}
                              style={{ color: '#dc2626' }}
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Convert to Sales Enquiry Section */}
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
              <i className="fas fa-file-alt" style={{ marginRight: '8px', color: '#28a745' }}></i>
              Ready to Create Sales Enquiry?
            </h3>
            <p style={{ margin: 0, fontSize: '14px', color: '#6c757d' }}>
              Convert this opportunity to a sales enquiry to initiate the formal quotation process.
            </p>
          </div>
          <button 
            className="btn btn-primary" 
            onClick={handleConvertToSalesEnquiry}
            style={{ 
              padding: '12px 24px',
              fontSize: '15px',
              fontWeight: '600',
              whiteSpace: 'nowrap'
            }}
          >
            <i className="fas fa-arrow-right" style={{ marginRight: '8px' }}></i>
            Convert to Sales Enquiry
          </button>
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

export default CreateOpportunity;
