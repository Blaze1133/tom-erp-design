import React, { useState, useEffect } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const PlantModule = ({ setCurrentPage, moduleData }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    moduleNo: 'SANYU-CHWP-001',
    materialIncomingStatus: 'Completed',
    materialIncomingDate: '2024-07-24',
    dimensionalInspectionStatus: 'Completed',
    dimensionalInspectionDate: '2024-07-22',
    fitUpStatus: 'Completed',
    fitUpDate: '2024-07-22',
    hydrostaticTestStatus: 'Completed',
    hydrostaticTestDate: '2024-09-17',
    materialTraceabilityStatus: 'Completed',
    materialTraceabilityDate: '2024-07-26',
    visualInspectionStatus: 'Completed',
    visualInspectionDate: '2024-07-22',
    weldingTraceabilityStatus: 'Completed',
    weldingTraceabilityDate: '2024-08-16',
    mepStatus: 'Completed',
    mepDate: '2025-06-09'
  });

  useEffect(() => {
    if (moduleData) {
      setFormData(moduleData);
    }
  }, [moduleData]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.moduleNo) {
      showToast('Module No is required', 'error');
      return;
    }

    // Save to localStorage
    const existingModules = JSON.parse(localStorage.getItem('plantModules') || '[]');
    const moduleIndex = existingModules.findIndex(m => m.moduleNo === formData.moduleNo);
    
    if (moduleIndex >= 0) {
      existingModules[moduleIndex] = formData;
    } else {
      existingModules.push(formData);
    }
    
    localStorage.setItem('plantModules', JSON.stringify(existingModules));

    showToast('Plant Module updated successfully!', 'success');
    
    // Redirect to list view
    setTimeout(() => {
      setCurrentPage('view-plant-modules');
    }, 1500);
  };

  const handleCancel = () => {
    setCurrentPage('view-plant-modules');
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-industry"></i>
          <div>
            <h1>Plant Module</h1>
            <div className="detail-subtitle">
              <span>Module No: {formData.moduleNo}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" type="button" onClick={() => setCurrentPage('view-plant-modules')}>List</button>
          <button className="btn-action" type="button">Search</button>
          <button className="btn-action" type="button">Customize</button>
        </div>
      </div>

      <div className="detail-content">
        <form onSubmit={handleSubmit}>
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Plant Module</h3>
            </div>
            <div className="section-body">
              <div className="detail-grid" style={{ gridTemplateColumns: '1fr' }}>
                
                {/* Module No */}
                <div className="detail-field">
                  <label>MODULE NO <span className="required">*</span></label>
                  <input
                    type="text"
                    name="moduleNo"
                    value={formData.moduleNo}
                    onChange={handleInputChange}
                    className="form-control"
                    style={{ maxWidth: '500px' }}
                  />
                </div>

                {/* Material Incoming Status */}
                <div className="detail-field" style={{ marginTop: '1.5rem' }}>
                  <label>MATERIAL INCOMING STATUS</label>
                  <input
                    type="text"
                    name="materialIncomingStatus"
                    value={formData.materialIncomingStatus}
                    onChange={handleInputChange}
                    className="form-control"
                    style={{ maxWidth: '500px' }}
                  />
                </div>

                {/* Material Incoming Date */}
                <div className="detail-field" style={{ marginTop: '1.5rem' }}>
                  <label>MATERIAL INCOMING DATE</label>
                  <input
                    type="date"
                    name="materialIncomingDate"
                    value={formData.materialIncomingDate}
                    onChange={handleInputChange}
                    className="form-control"
                    style={{ maxWidth: '500px' }}
                  />
                </div>

                {/* Dimensional Inspection Status */}
                <div className="detail-field" style={{ marginTop: '1.5rem' }}>
                  <label>DIMENSIONAL INSPECTION STATUS</label>
                  <input
                    type="text"
                    name="dimensionalInspectionStatus"
                    value={formData.dimensionalInspectionStatus}
                    onChange={handleInputChange}
                    className="form-control"
                    style={{ maxWidth: '500px' }}
                  />
                </div>

                {/* Dimensional Inspection Date */}
                <div className="detail-field" style={{ marginTop: '1.5rem' }}>
                  <label>DIMENSIONAL INSPECTION DATE</label>
                  <input
                    type="date"
                    name="dimensionalInspectionDate"
                    value={formData.dimensionalInspectionDate}
                    onChange={handleInputChange}
                    className="form-control"
                    style={{ maxWidth: '500px' }}
                  />
                </div>

                {/* FIT Up Status */}
                <div className="detail-field" style={{ marginTop: '1.5rem' }}>
                  <label>FIT UP STATUS</label>
                  <input
                    type="text"
                    name="fitUpStatus"
                    value={formData.fitUpStatus}
                    onChange={handleInputChange}
                    className="form-control"
                    style={{ maxWidth: '500px' }}
                  />
                </div>

                {/* FIT Up Date */}
                <div className="detail-field" style={{ marginTop: '1.5rem' }}>
                  <label>FIT UP DATE</label>
                  <input
                    type="date"
                    name="fitUpDate"
                    value={formData.fitUpDate}
                    onChange={handleInputChange}
                    className="form-control"
                    style={{ maxWidth: '500px' }}
                  />
                </div>

                {/* Hydrostatic Test Status */}
                <div className="detail-field" style={{ marginTop: '1.5rem' }}>
                  <label>HYDROSTATIC TEST STATUS</label>
                  <input
                    type="text"
                    name="hydrostaticTestStatus"
                    value={formData.hydrostaticTestStatus}
                    onChange={handleInputChange}
                    className="form-control"
                    style={{ maxWidth: '500px' }}
                  />
                </div>

                {/* Hydrostatic Test Date */}
                <div className="detail-field" style={{ marginTop: '1.5rem' }}>
                  <label>HYDROSTATIC TEST DATE</label>
                  <input
                    type="date"
                    name="hydrostaticTestDate"
                    value={formData.hydrostaticTestDate}
                    onChange={handleInputChange}
                    className="form-control"
                    style={{ maxWidth: '500px' }}
                  />
                </div>

                {/* Material Traceability Status */}
                <div className="detail-field" style={{ marginTop: '1.5rem' }}>
                  <label>MATERIAL TRACEABILITY STATUS</label>
                  <input
                    type="text"
                    name="materialTraceabilityStatus"
                    value={formData.materialTraceabilityStatus}
                    onChange={handleInputChange}
                    className="form-control"
                    style={{ maxWidth: '500px' }}
                  />
                </div>

                {/* Material Traceability Date */}
                <div className="detail-field" style={{ marginTop: '1.5rem' }}>
                  <label>MATERIAL TRACEABILITY DATE</label>
                  <input
                    type="date"
                    name="materialTraceabilityDate"
                    value={formData.materialTraceabilityDate}
                    onChange={handleInputChange}
                    className="form-control"
                    style={{ maxWidth: '500px' }}
                  />
                </div>

                {/* Visual Inspection Status */}
                <div className="detail-field" style={{ marginTop: '1.5rem' }}>
                  <label>VISUAL INSPECTION STATUS</label>
                  <input
                    type="text"
                    name="visualInspectionStatus"
                    value={formData.visualInspectionStatus}
                    onChange={handleInputChange}
                    className="form-control"
                    style={{ maxWidth: '500px' }}
                  />
                </div>

                {/* Visual Inspection Date */}
                <div className="detail-field" style={{ marginTop: '1.5rem' }}>
                  <label>VISUAL INSPECTION DATE</label>
                  <input
                    type="date"
                    name="visualInspectionDate"
                    value={formData.visualInspectionDate}
                    onChange={handleInputChange}
                    className="form-control"
                    style={{ maxWidth: '500px' }}
                  />
                </div>

                {/* Welding Traceability Status */}
                <div className="detail-field" style={{ marginTop: '1.5rem' }}>
                  <label>WELDING TRACEABILITY STATUS</label>
                  <input
                    type="text"
                    name="weldingTraceabilityStatus"
                    value={formData.weldingTraceabilityStatus}
                    onChange={handleInputChange}
                    className="form-control"
                    style={{ maxWidth: '500px' }}
                  />
                </div>

                {/* Welding Traceability Date */}
                <div className="detail-field" style={{ marginTop: '1.5rem' }}>
                  <label>WELDING TRACEABILITY DATE</label>
                  <input
                    type="date"
                    name="weldingTraceabilityDate"
                    value={formData.weldingTraceabilityDate}
                    onChange={handleInputChange}
                    className="form-control"
                    style={{ maxWidth: '500px' }}
                  />
                </div>

                {/* MEP Status */}
                <div className="detail-field" style={{ marginTop: '1.5rem' }}>
                  <label>MEP STATUS</label>
                  <input
                    type="text"
                    name="mepStatus"
                    value={formData.mepStatus}
                    onChange={handleInputChange}
                    className="form-control"
                    style={{ maxWidth: '500px' }}
                  />
                </div>

                {/* MEP Date */}
                <div className="detail-field" style={{ marginTop: '1.5rem' }}>
                  <label>MEP DATE</label>
                  <input
                    type="date"
                    name="mepDate"
                    value={formData.mepDate}
                    onChange={handleInputChange}
                    className="form-control"
                    style={{ maxWidth: '500px' }}
                  />
                </div>

              </div>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                type="submit"
                style={{
                  padding: '0.75rem 2rem',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
              >
                Update
              </button>
              <button 
                type="button"
                onClick={handleCancel}
                style={{
                  padding: '0.75rem 2rem',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#5a6268'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#6c757d'}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
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

export default PlantModule;
