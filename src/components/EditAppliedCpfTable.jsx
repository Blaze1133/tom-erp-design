import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditAppliedCpfTable = ({ onSave, onCancel, selectedRow }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  // Form data state
  const [formData, setFormData] = useState({
    inactive: selectedRow?.inactive || false,
    ageGroupReference: selectedRow?.ageGroupReference || '1',
    wageRange: selectedRow?.wageRange || '≤ $50',
    lowerRange: selectedRow?.lowerRange || 0,
    upperRange: selectedRow?.upperRange || 50,
    contTotOrd: selectedRow?.contTotOrd || '0.0%',
    contTotalAdd: selectedRow?.contTotalAdd || '0.0%',
    employeeContOrd: selectedRow?.employeeContOrd || '0.0%',
    employeeContAdd: selectedRow?.employeeContAdd || '0.0%',
    additionalFactor: selectedRow?.additionalFactor || 0,
    deduction: selectedRow?.deduction || 0,
    effectiveDate: selectedRow?.effectiveDate || '1/1/2000',
    endDate: selectedRow?.endDate || '31/12/2009'
  });

  // Wage range options from the uploaded image
  const wageRangeOptions = [
    '≤ $50',
    '> $50 to $500',
    '> $500 to < $750',
    '1-10001',
    'PF',
    'PF 12-12 %',
    '≥ $750'
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
    if (!formData.wageRange || !formData.effectiveDate) {
      showToast('Please fill in required fields: Wage Range and Effective Date', 'error');
      return;
    }

    showToast('Applied CPF Table updated successfully!', 'success');
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
          <i className="fas fa-edit" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Applied CPF Table</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
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
          <button className="btn btn-secondary">
            <i className="fas fa-ellipsis-h"></i>
            More
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Applied CPF Table Details */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-table"></i>
            Applied CPF Table Details
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">
                <input 
                  type="checkbox" 
                  checked={formData.inactive}
                  onChange={(e) => handleInputChange('inactive', e.target.checked)}
                  style={{ marginRight: '8px' }}
                />
                INACTIVE
              </label>
            </div>

            <div className="form-group">
              <label className="form-label">AGE GROUP REFERENCE</label>
              <select 
                className="form-control"
                value={formData.ageGroupReference}
                onChange={(e) => handleInputChange('ageGroupReference', e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">WAGE RANGE <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.wageRange}
                onChange={(e) => handleInputChange('wageRange', e.target.value)}
              >
                {wageRangeOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">LOWER RANGE</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.lowerRange}
                onChange={(e) => handleInputChange('lowerRange', parseFloat(e.target.value) || 0)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">UPPER RANGE</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.upperRange}
                onChange={(e) => handleInputChange('upperRange', parseFloat(e.target.value) || 0)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">CONT TOT (ORD)</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.contTotOrd}
                onChange={(e) => handleInputChange('contTotOrd', e.target.value)}
                placeholder="0.0%"
              />
            </div>

            <div className="form-group">
              <label className="form-label">CONT TOTAL (ADD)</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.contTotalAdd}
                onChange={(e) => handleInputChange('contTotalAdd', e.target.value)}
                placeholder="0.0%"
              />
            </div>

            <div className="form-group">
              <label className="form-label">EMPLOYEE CONT(ORD)</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.employeeContOrd}
                onChange={(e) => handleInputChange('employeeContOrd', e.target.value)}
                placeholder="0.0%"
              />
            </div>

            <div className="form-group">
              <label className="form-label">EMPLOYEE CONT (ADD)</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.employeeContAdd}
                onChange={(e) => handleInputChange('employeeContAdd', e.target.value)}
                placeholder="0.0%"
              />
            </div>

            <div className="form-group">
              <label className="form-label">ADDITIONAL FACTOR</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.additionalFactor}
                onChange={(e) => handleInputChange('additionalFactor', parseFloat(e.target.value) || 0)}
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label className="form-label">DEDUCTION</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.deduction}
                onChange={(e) => handleInputChange('deduction', parseFloat(e.target.value) || 0)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">EFFECTIVE DATE <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.effectiveDate}
                onChange={(e) => handleInputChange('effectiveDate', e.target.value)}
                placeholder="1/1/2000"
              />
            </div>

            <div className="form-group">
              <label className="form-label">END DATE <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.endDate}
                onChange={(e) => handleInputChange('endDate', e.target.value)}
                placeholder="31/12/2009"
              />
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-sticky-note"></i>
            Notes
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <div className="detail-tabs">
            <div className="tabs-header">
              <button className="tab-btn active">User Notes</button>
              <button className="tab-btn">System Notes ●</button>
            </div>
            
            <div className="tabs-content">
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                  <label className="form-label">VIEW</label>
                  <select className="form-control" style={{ width: '150px' }}>
                    <option>Default</option>
                  </select>
                </div>
                
                <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
                  <button className="btn btn-success">
                    <i className="fas fa-plus"></i>
                    New Note
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-cog"></i>
                    Customize View
                  </button>
                </div>
              </div>

              <div className="table-container">
                <table className="enquiries-table">
                  <thead>
                    <tr>
                      <th>EDIT</th>
                      <th>DATE</th>
                      <th>AUTHOR</th>
                      <th>TITLE</th>
                      <th>MEMO</th>
                      <th>DIRECTION</th>
                      <th>TYPE</th>
                      <th>REMOVE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="8" style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
                        No records to show.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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

export default EditAppliedCpfTable;
