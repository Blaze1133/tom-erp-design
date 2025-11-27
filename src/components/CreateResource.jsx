import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateResource = ({ isEdit = false, onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('details');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [availabilityCollapsed, setAvailabilityCollapsed] = useState(false);
  const [costingCollapsed, setCostingCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);

  const [formData, setFormData] = useState({
    resourceId: isEdit ? 'RES001' : '',
    resourceName: isEdit ? 'John Tan' : '',
    resourceType: isEdit ? 'Employee' : 'Employee',
    department: isEdit ? 'TOM: Engineering' : '',
    role: isEdit ? 'Senior MEP Engineer' : '',
    availability: isEdit ? 'Available' : 'Available',
    currentProject: isEdit ? 'PRJ001 - MEP Installation Project' : '',
    utilizationRate: isEdit ? 85 : 0,
    costPerHour: isEdit ? 75.00 : 0,
    email: '',
    phone: '',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    skills: '',
    certifications: '',
    notes: ''
  });

  const resourceTypes = ['Employee', 'Equipment', 'Contractor', 'Consultant'];
  const availabilityStatuses = ['Available', 'Allocated', 'On Leave', 'Maintenance', 'Unavailable'];

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
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
    'TOM: Engineering',
    'TOM: Production'
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!formData.resourceName.trim()) {
      showToast('Resource name is required', 'error');
      return;
    }
    showToast(`Resource ${isEdit ? 'updated' : 'created'} successfully!`, 'success');
    if (onSave) onSave(formData);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (onCancel) onCancel();
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-users-cog"></i>
          <div>
            <h1>Resource</h1>
            <div className="detail-subtitle">
              <span>{formData.resourceId}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
          <button className="btn-action">More</button>
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
        <div className={`detail-section ${primaryInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setPrimaryInfoCollapsed(!primaryInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>RESOURCE ID <span style={{color: 'orange'}}>*</span></label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="text" className="form-control" value={formData.resourceId} onChange={(e) => handleInputChange('resourceId', e.target.value)} placeholder="To Be Generated" />
                  <label style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
                    <input type="checkbox" style={{ marginRight: '0.25rem' }} />
                    AUTO
                  </label>
                </div>
              </div>
              <div className="detail-field">
                <label>RESOURCE NAME <span style={{color: 'orange'}}>*</span></label>
                <input type="text" className="form-control" value={formData.resourceName} onChange={(e) => handleInputChange('resourceName', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>RESOURCE TYPE <span style={{color: 'orange'}}>*</span></label>
                <select className="form-control" value={formData.resourceType} onChange={(e) => handleInputChange('resourceType', e.target.value)}>
                  {resourceTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>
              <div className="detail-field">
                <label>ROLE <span style={{color: 'orange'}}>*</span></label>
                <input type="text" className="form-control" value={formData.role} onChange={(e) => handleInputChange('role', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>EMAIL</label>
                <input type="email" className="form-control" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>PHONE</label>
                <input type="tel" className="form-control" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} />
              </div>
            </div>
          </div>
        </div>

        {/* Availability Section */}
        <div className={`detail-section ${availabilityCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setAvailabilityCollapsed(!availabilityCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Availability & Allocation</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>AVAILABILITY STATUS <span style={{color: 'orange'}}>*</span></label>
                <select className="form-control" value={formData.availability} onChange={(e) => handleInputChange('availability', e.target.value)}>
                  {availabilityStatuses.map(status => <option key={status} value={status}>{status}</option>)}
                </select>
              </div>
              <div className="detail-field">
                <label>CURRENT PROJECT</label>
                <input type="text" className="form-control" value={formData.currentProject} onChange={(e) => handleInputChange('currentProject', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>UTILIZATION RATE (%)</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={formData.utilizationRate} 
                    onChange={(e) => handleInputChange('utilizationRate', e.target.value)}
                    style={{ flex: 1 }}
                  />
                  <input 
                    type="number" 
                    className="form-control" 
                    value={formData.utilizationRate} 
                    onChange={(e) => handleInputChange('utilizationRate', e.target.value)}
                    style={{ width: '80px' }}
                    min="0"
                    max="100"
                  />
                  <span>%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Costing Section */}
        <div className={`detail-section ${costingCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setCostingCollapsed(!costingCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Costing</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>COST PER HOUR (SGD)</label>
                <input type="number" step="0.01" className="form-control" value={formData.costPerHour} onChange={(e) => handleInputChange('costPerHour', e.target.value)} />
              </div>
            </div>
          </div>
        </div>

        {/* Classification Section */}
        <div className={`detail-section ${classificationCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setClassificationCollapsed(!classificationCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY <span style={{color: 'orange'}}>*</span></label>
                <select className="form-control" value={formData.subsidiary} onChange={(e) => handleInputChange('subsidiary', e.target.value)}>
                  {subsidiaries.map(subsidiary => <option key={subsidiary} value={subsidiary}>{subsidiary}</option>)}
                </select>
              </div>
              <div className="detail-field">
                <label>DEPARTMENT</label>
                <select className="form-control" value={formData.department} onChange={(e) => handleInputChange('department', e.target.value)}>
                  <option value=""></option>
                  {departments.map(dept => <option key={dept} value={dept}>{dept}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`} onClick={() => setActiveTab('details')}>Details</button>
            <button className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => setActiveTab('skills')}>Skills & Certifications</button>
            <button className={`tab-btn ${activeTab === 'allocation-history' ? 'active' : ''}`} onClick={() => setActiveTab('allocation-history')}>Allocation History</button>
            <button className={`tab-btn ${activeTab === 'attachments' ? 'active' : ''}`} onClick={() => setActiveTab('attachments')}>Attachments</button>
            <button className={`tab-btn ${activeTab === 'system-info' ? 'active' : ''}`} onClick={() => setActiveTab('system-info')}>System Information</button>
          </div>

          <div className="tabs-content">
            {activeTab === 'details' && (
              <div>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>NOTES</label>
                    <textarea className="form-control" rows="5" value={formData.notes} onChange={(e) => handleInputChange('notes', e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>SKILLS</label>
                    <textarea className="form-control" rows="4" value={formData.skills} onChange={(e) => handleInputChange('skills', e.target.value)} placeholder="List skills separated by commas" />
                  </div>
                  <div className="detail-field">
                    <label>CERTIFICATIONS</label>
                    <textarea className="form-control" rows="4" value={formData.certifications} onChange={(e) => handleInputChange('certifications', e.target.value)} placeholder="List certifications separated by commas" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'allocation-history' && (
              <div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>PROJECT</th>
                      <th>START DATE</th>
                      <th>END DATE</th>
                      <th>HOURS ALLOCATED</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                        No allocation history to show.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'attachments' && (
              <div>
                <div style={{ marginBottom: '1rem' }}>
                  <button className="btn btn-secondary">
                    <i className="fas fa-upload"></i> Upload File
                  </button>
                </div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>FILE NAME</th>
                      <th>FILE TYPE</th>
                      <th>SIZE</th>
                      <th>UPLOADED BY</th>
                      <th>UPLOADED DATE</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                        No attachments to show.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'system-info' && (
              <div>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>DATE CREATED</label>
                    <input type="text" className="form-control" value={new Date().toLocaleString()} readOnly />
                  </div>
                  <div className="detail-field">
                    <label>CREATED BY</label>
                    <input type="text" className="form-control" value="TOM-Tech" readOnly />
                  </div>
                  <div className="detail-field">
                    <label>LAST MODIFIED</label>
                    <input type="text" className="form-control" value={new Date().toLocaleString()} readOnly />
                  </div>
                  <div className="detail-field">
                    <label>MODIFIED BY</label>
                    <input type="text" className="form-control" value="TOM-Tech" readOnly />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="detail-footer-actions">
          <button className="btn-toolbar-primary" onClick={handleSave}>
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

export default CreateResource;
