import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCRMListDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const listData = {
    buyingReason: 'New Requirement',
    inactive: false
  };

  const handleEdit = () => {
    if (onEdit) onEdit();
  };

  const handleBack = () => {
    if (onBack) onBack();
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-list-ul"></i>
          <div>
            <h1>Buying Reason</h1>
            <div className="detail-subtitle">
              <span>{listData.buyingReason}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-action">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-action">List</button>
          <button className="btn-action">More</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary" onClick={handleEdit}>
          <i className="fas fa-edit"></i>
          Edit
        </button>
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar">Actions</button>
      </div>

      <div className="detail-content">
        <div className="detail-section">
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>BUYING REASON</label>
                <div className="field-value">{listData.buyingReason}</div>
              </div>
              <div className="detail-field">
                <label>INACTIVE</label>
                <div className="field-value">{listData.inactive ? '☑' : '☐'}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-footer-actions">
          <button className="btn-toolbar-primary" onClick={handleEdit}>
            <i className="fas fa-edit"></i>
            Edit
          </button>
          <button className="btn-toolbar" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default ViewCRMListDetail;
