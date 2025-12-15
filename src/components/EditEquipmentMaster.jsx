import React, { useState, useEffect } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditEquipmentMaster = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [formData, setFormData] = useState({
    equipment: '',
    equipmentDetails: '',
    serialNo: '',
    certificateNo: '',
    date: '',
    frequencyOfTesting: 'Not Applicable',
    renewalDate: '',
    uploadCertificates: null,
    tagId: '',
    equipmentPlacedAt: '',
    purchaseDetails: '',
    condition: 'WORKING'
  });

  useEffect(() => {
    const savedData = sessionStorage.getItem('selectedEquipment');
    if (savedData) {
      const equipment = JSON.parse(savedData);
      setFormData({
        equipment: equipment.equipmentName || '',
        equipmentDetails: equipment.equipmentDetails || '',
        serialNo: equipment.serialNo || '',
        certificateNo: equipment.certificateNo || '',
        date: equipment.date || '',
        frequencyOfTesting: equipment.frequencyOfTesting || 'Not Applicable',
        renewalDate: equipment.renewalDate || '',
        uploadCertificates: null,
        tagId: equipment.tagId || '',
        equipmentPlacedAt: equipment.equipmentPlacedAt || '',
        purchaseDetails: equipment.purchaseDetails || '',
        condition: equipment.condition || 'WORKING'
      });
    }
  }, []);

  const equipmentOptions = [
    '24DC POWER SOURCE',
    'AIR RECEIVER',
    'ANGLE BAR PUNCHING MACHINE',
    'ASME BLOCK',
    'BABY MACHINE'
  ];

  const frequencyOptions = [
    'Not Applicable',
    'Monthly',
    'Quarterly',
    'Half Yearly',
    'Yearly'
  ];

  const conditionOptions = [
    'WORKING',
    'SERVICE',
    'SCRAP',
    'KIV'
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        uploadCertificates: file
      }));
    }
  };

  const handleSave = () => {
    if (!formData.equipment) {
      showToast('Please select equipment', 'error');
      return;
    }
    if (!formData.serialNo) {
      showToast('Please enter serial number', 'error');
      return;
    }
    if (!formData.equipmentPlacedAt) {
      showToast('Please select equipment placement location', 'error');
      return;
    }

    showToast('Equipment Master updated successfully!', 'success');
    setTimeout(() => {
      if (setCurrentPage) {
        setCurrentPage('view-equipment-master-detail');
      }
    }, 1000);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Changes cancelled', 'info');
      if (setCurrentPage) {
        setCurrentPage('view-equipment-master-detail');
      }
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-tools"></i>
          <div>
            <h1>Equipment Masters</h1>
            <div className="detail-subtitle">
              <span>Edit Equipment Master</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">Actions</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          <i className="fas fa-times"></i>
          Cancel
        </button>
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
                <label>EQUIPMENT <span style={{ color: '#dc2626' }}>*</span></label>
                <select 
                  className="form-control"
                  value={formData.equipment}
                  onChange={(e) => handleInputChange('equipment', e.target.value)}
                >
                  <option value="">Select...</option>
                  {equipmentOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>EQUIPMENT DETAILS</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.equipmentDetails}
                  onChange={(e) => handleInputChange('equipmentDetails', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>SERIAL NO. <span style={{ color: '#dc2626' }}>*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.serialNo}
                  onChange={(e) => handleInputChange('serialNo', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>CERTIFICATE NO.</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.certificateNo}
                  onChange={(e) => handleInputChange('certificateNo', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>DATE</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>FREQUENCY OF TESTING</label>
                <select 
                  className="form-control"
                  value={formData.frequencyOfTesting}
                  onChange={(e) => handleInputChange('frequencyOfTesting', e.target.value)}
                >
                  {frequencyOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field">
                <label>RENEWAL DATE</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.renewalDate}
                  onChange={(e) => handleInputChange('renewalDate', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>UPLOAD CERTIFICATES</label>
                <input 
                  type="file" 
                  className="form-control"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                />
                {formData.uploadCertificates && (
                  <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
                    Selected: {formData.uploadCertificates.name}
                  </div>
                )}
              </div>

              <div className="detail-field">
                <label>TAG ID</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.tagId}
                  onChange={(e) => handleInputChange('tagId', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>EQUIPMENT PLACED AT <span style={{ color: '#dc2626' }}>*</span></label>
                <select 
                  className="form-control"
                  value={formData.equipmentPlacedAt}
                  onChange={(e) => handleInputChange('equipmentPlacedAt', e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="TOM WORKSHOP">TOM WORKSHOP</option>
                  <option value="TOM STORE">TOM STORE</option>
                  <option value="CNC TOM 11 SHOP">CNC TOM 11 SHOP</option>
                  <option value="AIR POWER RESOURCES PTE LTD">AIR POWER RESOURCES PTE LTD</option>
                  <option value="KTUAS - PIPING">KTUAS - PIPING</option>
                  <option value="IN STORE">IN STORE</option>
                </select>
              </div>

              <div className="detail-field">
                <label>CONDITION</label>
                <select 
                  className="form-control"
                  value={formData.condition}
                  onChange={(e) => handleInputChange('condition', e.target.value)}
                >
                  {conditionOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="detail-field" style={{ gridColumn: '1 / -1' }}>
                <label>PURCHASE DETAILS</label>
                <textarea 
                  className="form-control"
                  rows="4"
                  value={formData.purchaseDetails}
                  onChange={(e) => handleInputChange('purchaseDetails', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="detail-footer">
          <button className="btn-toolbar" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn-toolbar-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
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

export default EditEquipmentMaster;
