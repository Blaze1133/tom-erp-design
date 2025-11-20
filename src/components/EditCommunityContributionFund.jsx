import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditCommunityContributionFund = ({ onSave, onCancel, selectedFund }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('contribution-information');
  
  // Form data state
  const [formData, setFormData] = useState({
    name: selectedFund?.name || 'CDAC'
  });

  // Sample community fund template data based on the uploaded image
  const [templateData, setTemplateData] = useState([
    {
      id: 1,
      wageRange: '≤ $2,000',
      higherRange: 2000,
      lowerRange: 0,
      allocationToMosque: 0,
      allocationToMendaki: 0.5,
      monthlyContribution: 0.5
    },
    {
      id: 2,
      wageRange: '> $2,000 to $3,500',
      higherRange: 3500,
      lowerRange: 2000.01,
      allocationToMosque: 0,
      allocationToMendaki: 1,
      monthlyContribution: 1
    },
    {
      id: 3,
      wageRange: '> $3,500 to $5,000',
      higherRange: 5000,
      lowerRange: 3500.01,
      allocationToMosque: 0,
      allocationToMendaki: 1.5,
      monthlyContribution: 1.5
    },
    {
      id: 4,
      wageRange: '> $5,000 to $7,500',
      higherRange: 7500,
      lowerRange: 5000.01,
      allocationToMosque: 0,
      allocationToMendaki: 2,
      monthlyContribution: 2
    },
    {
      id: 5,
      wageRange: '> $7,500',
      higherRange: 999999,
      lowerRange: 7500.01,
      allocationToMosque: 0,
      allocationToMendaki: 3,
      monthlyContribution: 3
    }
  ]);

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

    showToast('Community Contribution Fund updated successfully!', 'success');
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
          <span style={{ fontSize: '18px', color: '#666', marginLeft: '10px' }}>{formData.name}</span>
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
              style={{ fontSize: '14px', padding: '8px 12px', maxWidth: '400px' }}
            />
          </div>
        </div>

        {/* Contribution Information & Workflow Tabs */}
        <div className="form-section">
          <div style={{
            background: '#6c757d',
            padding: '12px 20px',
            color: 'white',
            fontSize: '14px',
            fontWeight: '600',
            display: 'flex',
            gap: '20px',
            marginBottom: '0'
          }}>
            <span 
              style={{ 
                cursor: 'pointer',
                borderBottom: activeTab === 'contribution-information' ? '2px solid white' : 'none',
                paddingBottom: '5px'
              }}
              onClick={() => setActiveTab('contribution-information')}
            >
              Contribution Information
            </span>
            <span 
              style={{ 
                cursor: 'pointer',
                borderBottom: activeTab === 'workflow' ? '2px solid white' : 'none',
                paddingBottom: '5px'
              }}
              onClick={() => setActiveTab('workflow')}
            >
              Workflow
            </span>
          </div>
          
          <div style={{ padding: '20px', border: '1px solid #e9ecef', borderTop: 'none' }}>
            {activeTab === 'contribution-information' && (
              <div>
                <h2 className="section-title" style={{ marginBottom: '1rem' }}>
                  New Community Fund Template
                </h2>
                
                {/* Table */}
                <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
                  <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '12px'
                  }}>
                    <thead>
                      <tr style={{ background: '#f8f9fa' }}>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>WAGE RANGE</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>HIGHER RANGE</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>LOWER RANGE</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>ALLOCATION TO MOSQUE AND RELIGIOUS EDUCATION COMPONENT</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>ALLOCATION TO MENDAKI COMPONENT</th>
                        <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>MONTHLY CONTRIBUTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {templateData.map((row) => (
                        <tr key={row.id}>
                          <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.wageRange}</td>
                          <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.higherRange.toLocaleString()}</td>
                          <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.lowerRange}</td>
                          <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.allocationToMosque}</td>
                          <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.allocationToMendaki}</td>
                          <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.monthlyContribution}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
                  <button 
                    onClick={handleAddTemplate}
                    className="btn btn-success" 
                    style={{ fontSize: '12px', padding: '6px 12px' }}
                  >
                    <i className="fas fa-plus"></i>
                    Add
                  </button>
                  <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>
                    <i className="fas fa-times"></i>
                    Cancel
                  </button>
                  <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>
                    <i className="fas fa-plus-circle"></i>
                    Insert
                  </button>
                  <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>
                    <i className="fas fa-trash"></i>
                    Remove
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'workflow' && (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
                Workflow information will be displayed here.
              </div>
            )}
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

export default EditCommunityContributionFund;
