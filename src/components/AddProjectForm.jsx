import React, { useState } from 'react';

const AddProjectForm = ({ onSave, onCancel, customers }) => {
  const [projectData, setProjectData] = useState({
    jobId: '',
    projectName: '',
    customer: '',
    startDate: '',
    projectLocation: '',
    vesselName: '',
    scopeOfWork: ''
  });

  const handleChange = (field, value) => {
    setProjectData({ ...projectData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!projectData.projectName.trim() || !projectData.customer) {
      alert('Project Name and Customer are required');
      return;
    }
    onSave(projectData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '1.5rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#333', textTransform: 'uppercase', marginBottom: '1.25rem', letterSpacing: '0.5px', paddingBottom: '0.75rem', borderBottom: '2px solid #e0e0e0' }}>Project Information</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.25rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
            Job ID <span style={{ color: '#e53e3e' }}>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            value={projectData.jobId}
            onChange={(e) => handleChange('jobId', e.target.value)}
            placeholder="Enter Job ID"
            required
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
            Project Name <span style={{ color: '#e53e3e' }}>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            value={projectData.projectName}
            onChange={(e) => handleChange('projectName', e.target.value)}
            placeholder="Enter Project Name"
            required
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
            Customer <span style={{ color: '#e53e3e' }}>*</span>
          </label>
          <select
            className="form-control"
            value={projectData.customer}
            onChange={(e) => handleChange('customer', e.target.value)}
            required
          >
            <option value="">Select Customer</option>
            {customers.map((customer, idx) => (
              <option key={idx} value={customer}>{customer}</option>
            ))}
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
            Start Date
          </label>
          <input
            type="date"
            className="form-control"
            value={projectData.startDate}
            onChange={(e) => handleChange('startDate', e.target.value)}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
            Project Location
          </label>
          <input
            type="text"
            className="form-control"
            value={projectData.projectLocation}
            onChange={(e) => handleChange('projectLocation', e.target.value)}
            placeholder="Enter Location"
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
            Vessel Name
          </label>
          <input
            type="text"
            className="form-control"
            value={projectData.vesselName}
            onChange={(e) => handleChange('vesselName', e.target.value)}
            placeholder="Enter Vessel Name"
          />
        </div>

        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
            Scope of Work
          </label>
          <textarea
            className="form-control"
            value={projectData.scopeOfWork}
            onChange={(e) => handleChange('scopeOfWork', e.target.value)}
            placeholder="Enter Scope of Work"
            rows="3"
          />
        </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', paddingTop: '1rem', borderTop: '1px solid #e0e0e0' }}>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn-new-transaction">
          Save Project
        </button>
      </div>
    </form>
  );
};

export default AddProjectForm;
