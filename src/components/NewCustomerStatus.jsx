import React, { useState } from 'react';
import Toast from './Toast';

const NewCustomerStatus = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [formData, setFormData] = useState({
    status: 'Qualified',
    stage: 'Lead',
    probability: '10.0%',
    description: '',
    includeInLeadReports: true,
    inactive: false
  });

  const stages = ['Lead', 'Prospect', 'Customer'];

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
    if (!formData.status) {
      showToast('Please enter Status', 'error');
      return;
    }
    showToast('Customer Status saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (setCurrentPage) setCurrentPage('setup-customer-status-list');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-user-check" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Customer Status</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary">List</button>
          <button className="btn btn-secondary">Search</button>
        </div>
      </div>

      <div className="form-container">
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-primary" onClick={handleSave}>Save</button>
          <button className="btn btn-tertiary" onClick={handleCancel}>Back</button>
          <button className="btn btn-secondary">Actions</button>
        </div>

        <div className="form-section">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label required">STATUS</label>
              <input type="text" className="form-control" value={formData.status} onChange={(e) => handleInputChange('status', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">DESCRIPTION</label>
              <textarea className="form-control" rows="2" value={formData.description} onChange={(e) => handleInputChange('description', e.target.value)} />
            </div>

            <div className="form-group">
              <label className="form-label">STAGE</label>
              <select className="form-control" value={formData.stage} onChange={(e) => handleInputChange('stage', e.target.value)}>
                {stages.map((stage, i) => <option key={i} value={stage}>{stage}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" checked={formData.includeInLeadReports} onChange={() => handleCheckboxChange('includeInLeadReports')} />
                <span>INCLUDE IN LEAD REPORTS</span>
              </label>
            </div>

            <div className="form-group">
              <label className="form-label required">PROBABILITY</label>
              <input type="text" className="form-control" value={formData.probability} onChange={(e) => handleInputChange('probability', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" checked={formData.inactive} onChange={() => handleCheckboxChange('inactive')} />
                <span>INACTIVE</span>
              </label>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>Active Workflows</span>
            <span style={{ fontSize: '0.875rem', color: '#666' }}>Workflow History</span>
          </div>
          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>VIEW</label>
            <select className="form-control" style={{ width: '150px' }}>
              <option>Default</option>
            </select>
            <button className="btn btn-secondary" style={{ marginLeft: 'auto' }}>Customize View</button>
            <button className="btn btn-secondary">Refresh</button>
          </div>
          <div className="table-responsive">
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
                  <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>No records to show.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default NewCustomerStatus;
