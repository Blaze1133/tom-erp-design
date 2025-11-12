import React, { useState } from 'react';
import Toast from './Toast';

const NewCRMList = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [formData, setFormData] = useState({
    buyingReason: 'New Requirement',
    inactive: false
  });

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
    if (!formData.buyingReason) {
      showToast('Please enter Buying Reason', 'error');
      return;
    }
    showToast('CRM List saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (setCurrentPage) setCurrentPage('setup-crm-lists');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-list-ul" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Buying Reason</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary">List</button>
          <button className="btn btn-secondary">More</button>
        </div>
      </div>

      <div className="form-container">
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-primary" onClick={handleSave}>Save</button>
          <button className="btn btn-tertiary" onClick={handleCancel}>Cancel</button>
          <button className="btn btn-secondary">Actions</button>
        </div>

        <div className="form-section">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label required">BUYING REASON</label>
              <input
                type="text"
                className="form-control"
                value={formData.buyingReason}
                onChange={(e) => handleInputChange('buyingReason', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.inactive}
                  onChange={() => handleCheckboxChange('inactive')}
                />
                <span>INACTIVE</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default NewCRMList;
