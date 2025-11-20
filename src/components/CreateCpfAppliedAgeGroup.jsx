import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateCpfAppliedAgeGroup = ({ onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  // Form data state
  const [formData, setFormData] = useState({
    refCpfType: '',
    ageGroup: '50 & Below'
  });

  const cpfTypes = [
    'Full and Graduated PR (1st year)',
    'Full and Graduated PR (2nd year)',
    'Permanent Resident (3rd year & Above)',
    'Graduated PR(1st year)',
    'Graduated PR(2nd year)'
  ];

  const ageGroups = [
    '50 & Below',
    'Above 50 to 55',
    'Above 55 to 60',
    'Above 60-65',
    'Above 65 -70',
    'Above 70'
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
    // Basic validation
    if (!formData.refCpfType || !formData.ageGroup) {
      showToast('Please fill in required fields: REF CPF TYPE and AGE GROUP', 'error');
      return;
    }

    showToast('New CPF Applied Age Group created successfully!', 'success');
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

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-users" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>CPF Applied Age Group</h1>
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
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr 1fr', gap: '2rem', marginBottom: '1.5rem', alignItems: 'end' }}>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '5px' }}>ID</label>
              <input 
                type="text" 
                className="form-control"
                value="1"
                disabled
                style={{ background: '#f8f9fa', fontSize: '14px', padding: '8px 12px' }}
              />
            </div>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '5px' }}>
                REF CPF TYPE <span className="required" style={{ color: '#dc3545' }}>*</span>
              </label>
              <select 
                className="form-control"
                value={formData.refCpfType}
                onChange={(e) => handleInputChange('refCpfType', e.target.value)}
                style={{ fontSize: '14px', padding: '8px 12px' }}
              >
                <option value="">- New -</option>
                {cpfTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '5px' }}>
                AGE GROUP <span className="required" style={{ color: '#dc3545' }}>*</span>
              </label>
              <select 
                className="form-control"
                value={formData.ageGroup}
                onChange={(e) => handleInputChange('ageGroup', e.target.value)}
                style={{ fontSize: '14px', padding: '8px 12px' }}
              >
                {ageGroups.map((group, index) => (
                  <option key={index} value={group}>{group}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* New Applied CPF Table Section */}
        <div className="form-section">
          <div style={{
            background: '#6c757d',
            padding: '10px 15px',
            color: 'white',
            fontSize: '14px',
            fontWeight: '500',
            marginBottom: '0',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <i className="fas fa-plus"></i>
            New Applied CPF Table
          </div>
          
          <div className="table-container">
            <table className="enquiries-table">
              <thead>
                <tr style={{ background: '#f8f9fa' }}>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>WAGE RANGE</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>LOWER RANGE</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>UPPER RANGE</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>CONT TOT (ORD)</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>CONT TOTAL (ADD)</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>EMPLOYEE CONT(ORD)</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>EMPLOYEE CONT (ADD)</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>ADDITIONAL FACTOR</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>DEDUCTION</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>EFFECTIVE DATE</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057', fontSize: '11px' }}>END DATE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="11" style={{ textAlign: 'center', padding: '2rem', color: '#6c757d', fontSize: '14px' }}>
                    No Applied CPF Table entries yet. Save the CPF Applied Age Group first, then add table entries.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', gap: '8px', marginTop: '1rem' }}>
            <button className="btn btn-success" disabled style={{ fontSize: '12px', padding: '6px 12px' }}>
              <i className="fas fa-plus"></i>
              Add
            </button>
            <button className="btn btn-secondary" disabled style={{ fontSize: '12px', padding: '6px 12px' }}>
              <i className="fas fa-times"></i>
              Cancel
            </button>
            <button className="btn btn-secondary" disabled style={{ fontSize: '12px', padding: '6px 12px' }}>
              <i className="fas fa-plus-circle"></i>
              Insert
            </button>
            <button className="btn btn-secondary" disabled style={{ fontSize: '12px', padding: '6px 12px' }}>
              <i className="fas fa-trash"></i>
              Remove
            </button>
            <button className="btn btn-secondary" disabled style={{ fontSize: '12px', padding: '6px 12px' }}>
              <i className="fas fa-arrow-up"></i>
              Move Up
            </button>
            <button className="btn btn-secondary" disabled style={{ fontSize: '12px', padding: '6px 12px' }}>
              <i className="fas fa-arrow-down"></i>
              Move Down
            </button>
            <button className="btn btn-secondary" disabled style={{ fontSize: '12px', padding: '6px 12px' }}>
              Move To Top
            </button>
            <button className="btn btn-secondary" disabled style={{ fontSize: '12px', padding: '6px 12px' }}>
              Move To Bottom
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

export default CreateCpfAppliedAgeGroup;
