import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewEquipmentMasterDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const equipmentData = {
    equipmentName: 'AIR RECEIVER',
    modelSpec: 'YUEN FEE',
    tagId: 'TOMEQ-AR-004',
    serialNo: 'YF250358S',
    certificateNo: 'AR40910K',
    date: '07/08/2020',
    frequencyOfTesting: 'Yearly',
    renewalDate: '07/08/2027',
    equipmentDetails: 'Vertical Air Receiver Tank',
    equipmentPlacedAt: 'CNC TOM 11 SHOP',
    condition: 'WORKING',
    purchaseDetails: 'Purchased from YUEN FEE Engineering Pte Ltd in 2015'
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('edit-equipment-master');
      sessionStorage.setItem('selectedEquipment', JSON.stringify(equipmentData));
    }
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-equipment-masters');
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-tools"></i>
          <div>
            <h1>Equipment Master</h1>
            <div className="detail-subtitle">
              <span>{equipmentData.tagId}</span>
              <span className="separator">•</span>
              <span>{equipmentData.equipmentName}</span>
              <span className="separator">•</span>
              <span className="status-badge" style={{ 
                backgroundColor: equipmentData.condition === 'WORKING' ? '#4caf50' : 
                               equipmentData.condition === 'SERVICE' ? '#ff9800' : '#f44336',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.75rem'
              }}>
                {equipmentData.condition}
              </span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" title="Back">
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-action" title="Forward">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-action" title="List" onClick={handleBack}>
            <i className="fas fa-list"></i>
          </button>
          <button className="btn-action" title="Search">
            <i className="fas fa-search"></i>
          </button>
          <button className="btn-action" title="Customize">
            <i className="fas fa-cog"></i>
          </button>
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
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-copy"></i>
          Copy
        </button>
        <div className="toolbar-spacer"></div>
        <div className="dropdown">
          <button className="btn-toolbar">
            <i className="fas fa-cog"></i>
            Actions
          </button>
        </div>
      </div>

      <div className="detail-content">
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Equipment Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>EQUIPMENT NAME</label>
                <div className="field-value">{equipmentData.equipmentName}</div>
              </div>

              <div className="detail-field">
                <label>MODEL / SPEC</label>
                <div className="field-value">{equipmentData.modelSpec}</div>
              </div>

              <div className="detail-field">
                <label>TAG ID</label>
                <div className="field-value">{equipmentData.tagId}</div>
              </div>

              <div className="detail-field">
                <label>SERIAL NO.</label>
                <div className="field-value">{equipmentData.serialNo}</div>
              </div>

              <div className="detail-field">
                <label>CERTIFICATE NO.</label>
                <div className="field-value">{equipmentData.certificateNo}</div>
              </div>

              <div className="detail-field">
                <label>DATE</label>
                <div className="field-value">{equipmentData.date}</div>
              </div>

              <div className="detail-field">
                <label>FREQUENCY OF TESTING</label>
                <div className="field-value">{equipmentData.frequencyOfTesting}</div>
              </div>

              <div className="detail-field">
                <label>RENEWAL DATE</label>
                <div className="field-value">{equipmentData.renewalDate}</div>
              </div>

              <div className="detail-field">
                <label>EQUIPMENT DETAILS</label>
                <div className="field-value">{equipmentData.equipmentDetails}</div>
              </div>

              <div className="detail-field">
                <label>EQUIPMENT PLACED AT</label>
                <div className="field-value">{equipmentData.equipmentPlacedAt}</div>
              </div>

              <div className="detail-field">
                <label>CONDITION</label>
                <div className="field-value">{equipmentData.condition}</div>
              </div>

              <div className="detail-field" style={{ gridColumn: '1 / -1' }}>
                <label>PURCHASE DETAILS</label>
                <div className="field-value">{equipmentData.purchaseDetails}</div>
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

      <Toast 
        message={toast.message} 
        type={toast.type} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
    </div>
  );
};

export default ViewEquipmentMasterDetail;
