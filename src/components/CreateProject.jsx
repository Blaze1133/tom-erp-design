import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateProject = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    jobId: '',
    projectName: '',
    customer: '',
    startDate: '',
    projectLocation: '',
    vesselName: '',
    scopeOfWork: '',
    subsidiary: '',
    projDepartment: '',
    projClass: '',
    customerProjectNo: '',
    estimatedCost: '',
    estimatedRevenue: ''
  });

  const subsidiaryOptions = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];

  const classOptions = [
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

  const departmentOptions = [
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

  const locationOptions = [
    'Hong Hang Shipyard',
    'Mega yard',
    'MEP MARINE CC',
    'Shipyards/Construction',
    'Singapore (MEP)',
    'TOM-11',
    'TOM External Workshop',
    'TOM-13'
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('Project created successfully!', 'success');
    setTimeout(() => {
      if (setCurrentPage) {
        setCurrentPage('view-projects');
      }
    }, 1500);
  };

  const handleCancel = () => {
    if (setCurrentPage) {
      setCurrentPage('view-projects');
    }
  };

  return (
    <div className="create-enquiry">
      <div className="form-header">
        <div className="form-title">
          <i className="fas fa-project-diagram"></i>
          <h1>Create Project</h1>
        </div>
        <div className="form-actions">
          <button className="btn-action">
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-action">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-action" onClick={() => setCurrentPage('view-projects')}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="form-toolbar">
        <button type="submit" form="project-form" className="btn-toolbar-primary">
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          <i className="fas fa-times"></i>
          Cancel
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-copy"></i>
          Copy
        </button>
      </div>

      <form id="project-form" onSubmit={handleSubmit} className="enquiry-form">
        <div className="form-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label>Job ID *</label>
              <input
                type="text"
                name="jobId"
                value={formData.jobId}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Project Name *</label>
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Customer *</label>
              <input
                type="text"
                name="customer"
                value={formData.customer}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Project Location</label>
              <select
                name="projectLocation"
                value={formData.projectLocation}
                onChange={handleInputChange}
                className="form-control"
              >
                <option value="">Select Location</option>
                {locationOptions.map((location, index) => (
                  <option key={index} value={location}>{location}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Vessel Name</label>
              <input
                type="text"
                name="vesselName"
                value={formData.vesselName}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Scope of Work</label>
              <textarea
                name="scopeOfWork"
                value={formData.scopeOfWork}
                onChange={handleInputChange}
                className="form-control"
                rows="3"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label>Subsidiary *</label>
              <select
                name="subsidiary"
                value={formData.subsidiary}
                onChange={handleInputChange}
                className="form-control"
                required
              >
                <option value="">Select Subsidiary</option>
                {subsidiaryOptions.map((subsidiary, index) => (
                  <option key={index} value={subsidiary}>{subsidiary}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Department</label>
              <select
                name="projDepartment"
                value={formData.projDepartment}
                onChange={handleInputChange}
                className="form-control"
              >
                <option value="">Select Department</option>
                {departmentOptions.map((department, index) => (
                  <option key={index} value={department}>{department}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Class</label>
              <select
                name="projClass"
                value={formData.projClass}
                onChange={handleInputChange}
                className="form-control"
              >
                <option value="">Select Class</option>
                {classOptions.map((cls, index) => (
                  <option key={index} value={cls}>{cls}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Customer Project No</label>
              <input
                type="text"
                name="customerProjectNo"
                value={formData.customerProjectNo}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Financial Information</h3>
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label>Estimated Cost</label>
              <input
                type="number"
                step="0.01"
                name="estimatedCost"
                value={formData.estimatedCost}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Estimated Revenue</label>
              <input
                type="number"
                step="0.01"
                name="estimatedRevenue"
                value={formData.estimatedRevenue}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="form-footer">
          <button type="submit" className="btn-toolbar-primary">
            <i className="fas fa-save"></i>
            Save
          </button>
          <button type="button" className="btn-toolbar" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
        </div>
      </form>

      <Toast 
        message={toast.message} 
        type={toast.type} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
    </div>
  );
};

export default CreateProject;
