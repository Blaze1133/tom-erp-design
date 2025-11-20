import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateCommunityContributionFund = ({ onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  // Form data state
  const [formData, setFormData] = useState({
    name: ''
  });

  // Empty template data for new fund
  const [templateData, setTemplateData] = useState([]);

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
    // Basic validation
    if (!formData.name) {
      showToast('Please fill in required fields: Name', 'error');
      return;
    }

    showToast('New Community Contribution Fund created successfully!', 'success');
    if (onSave) {
      onSave(formData);
    }
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (onCancel) {
        onCancel();
      }
    }
  };

  const handleAddTemplate = () => {
    const newTemplate = {
      id: Date.now(),
      wageRange: '',
      higherRange: 0,
      lowerRange: 0,
      allocationToMosque: 0,
      allocationToMendaki: 0,
      monthlyContribution: 0
    };
    setTemplateData(prev => [...prev, newTemplate]);
    showToast('New template row added', 'success');
  };

  const handleRemoveTemplate = (id) => {
    setTemplateData(prev => prev.filter(item => item.id !== id));
    showToast('Template row removed', 'success');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-hand-holding-heart" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Community Contribution Fund</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-cog"></i>
            Actions
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-list"></i>
            List
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-search"></i>
            Search
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-cog"></i>
            Customize
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Basic Information */}
        <div className="form-section">
          <div className="form-group" style={{ marginBottom: '2rem' }}>
            <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '5px' }}>
              NAME <span className="required" style={{ color: '#dc3545' }}>*</span>
            </label>
            <input 
              type="text" 
              className="form-control"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter Community Contribution Fund Name"
              style={{ fontSize: '14px', padding: '8px 12px', maxWidth: '400px' }}
            />
          </div>
        </div>

        {/* New Community Fund Template Section */}
        <div className="form-section">
          <div style={{
            background: '#6c757d',
            padding: '10px 15px',
            color: 'white',
            fontSize: '14px',
            fontWeight: '500',
            marginBottom: '0'
          }}>
            New Community Fund Template
          </div>
          
          {/* Table */}
          <div className="table-container">
            <table className="enquiries-table">
              <thead>
                <tr style={{ background: '#f8f9fa' }}>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>WAGE RANGE</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>HIGHER RANGE</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>LOWER RANGE</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>ALLOCATION TO MOSQUE AND RELIGIOUS EDUCATION COMPONENT</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>ALLOCATION TO MENDAKI COMPONENT</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>MONTHLY CONTRIBUTION</th>
                </tr>
              </thead>
              <tbody>
                {templateData.length === 0 ? (
                  <tr>
                    <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#6c757d', fontSize: '14px' }}>
                      No Community Fund Template entries yet. Save the Community Contribution Fund first, then add template entries.
                    </td>
                  </tr>
                ) : (
                  templateData.map((row) => (
                    <tr key={row.id}>
                      <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.wageRange}</td>
                      <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.higherRange}</td>
                      <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.lowerRange}</td>
                      <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.allocationToMosque}</td>
                      <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.allocationToMendaki}</td>
                      <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.monthlyContribution}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '1rem' }}>
            <button 
              onClick={handleAddTemplate}
              className="btn btn-success" 
              style={{ fontSize: '12px', padding: '6px 12px' }}
              disabled={!formData.name}
            >
              <i className="fas fa-plus"></i>
              Add
            </button>
            <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }} disabled>
              <i className="fas fa-times"></i>
              Cancel
            </button>
            <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }} disabled>
              <i className="fas fa-plus-circle"></i>
              Insert
            </button>
            <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }} disabled>
              <i className="fas fa-trash"></i>
              Remove
            </button>
          </div>
        </div>

        {/* Bottom Action Buttons */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #e0e0e0' }}>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-cog"></i>
            Actions
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

export default CreateCommunityContributionFund;
