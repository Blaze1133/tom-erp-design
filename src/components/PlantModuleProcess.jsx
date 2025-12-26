import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const PlantModuleProcess = ({ setCurrentPage, editData }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState(editData || {
    moduleNo: '',
    materialIncomingStatus: '',
    materialIncomingDate: '',
    dimensionalInspectionStatus: '',
    dimensionalInspectionDate: '',
    fitUpStatus: '',
    fitUpDate: '',
    hydrostaticTestStatus: '',
    hydrostaticTestDate: '',
    materialTraceabilityStatus: '',
    materialTraceabilityDate: '',
    visualInspectionStatus: '',
    visualInspectionDate: '',
    weldingTraceabilityStatus: '',
    weldingTraceabilityDate: '',
    mepStatus: '',
    mepDate: ''
  });

  const statusOptions = [
    'Not Complete',
    'Completed',
    'In Progress',
    'Pending',
    'On Hold'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.moduleNo) {
      setToast({ show: true, message: 'Please enter Module No', type: 'error' });
      return;
    }

    setToast({ 
      show: true, 
      message: 'Plant Module Process saved successfully!', 
      type: 'success' 
    });

    setTimeout(() => {
      setCurrentPage('plant-module-process-list');
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      moduleNo: '',
      materialIncomingStatus: '',
      materialIncomingDate: '',
      dimensionalInspectionStatus: '',
      dimensionalInspectionDate: '',
      fitUpStatus: '',
      fitUpDate: '',
      hydrostaticTestStatus: '',
      hydrostaticTestDate: '',
      materialTraceabilityStatus: '',
      materialTraceabilityDate: '',
      visualInspectionStatus: '',
      visualInspectionDate: '',
      weldingTraceabilityStatus: '',
      weldingTraceabilityDate: '',
      mepStatus: '',
      mepDate: ''
    });
    setToast({ show: true, message: 'Form reset successfully', type: 'success' });
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-industry"></i>
          <div>
            <h1>{editData ? 'Edit Plant Module Process' : 'New Plant Module Process'}</h1>
            <div className="detail-subtitle">
              {editData ? (
                <span>{editData.moduleNo}</span>
              ) : (
                <span>New Module</span>
              )}
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={() => setCurrentPage('plant-module-process-list')}>List</button>
          <button className="btn-action">Search</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <div className="toolbar-left">
          <button type="submit" className="btn-toolbar-primary" onClick={handleSubmit}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button type="button" className="btn-toolbar" onClick={() => setCurrentPage('plant-module-process-list')}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button type="button" className="btn-toolbar" onClick={handleReset}>
            <i className="fas fa-redo"></i>
            Reset
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="detail-content">
        <div className="detail-grid">
          <div className="detail-field">
            <label>MODULE NO <span className="required">*</span></label>
            <input
              type="text"
              name="moduleNo"
              value={formData.moduleNo}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter Module No"
              required
            />
          </div>

          <div className="detail-field">
            <label>MATERIAL INCOMING STATUS</label>
            <select
              name="materialIncomingStatus"
              value={formData.materialIncomingStatus}
              onChange={handleChange}
              className="form-control"
            >
              <option value="">Select Status</option>
              {statusOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="detail-field">
            <label>MATERIAL INCOMING DATE</label>
            <input
              type="date"
              name="materialIncomingDate"
              value={formData.materialIncomingDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="detail-field">
            <label>DIMENSIONAL INSPECTION STATUS</label>
            <select
              name="dimensionalInspectionStatus"
              value={formData.dimensionalInspectionStatus}
              onChange={handleChange}
              className="form-control"
            >
              <option value="">Select Status</option>
              {statusOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="detail-field">
            <label>DIMENSIONAL INSPECTION DATE</label>
            <input
              type="date"
              name="dimensionalInspectionDate"
              value={formData.dimensionalInspectionDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="detail-field">
            <label>FIT UP STATUS</label>
            <select
              name="fitUpStatus"
              value={formData.fitUpStatus}
              onChange={handleChange}
              className="form-control"
            >
              <option value="">Select Status</option>
              {statusOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="detail-field">
            <label>FIT UP DATE</label>
            <input
              type="date"
              name="fitUpDate"
              value={formData.fitUpDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="detail-field">
            <label>HYDROSTATIC TEST STATUS</label>
            <select
              name="hydrostaticTestStatus"
              value={formData.hydrostaticTestStatus}
              onChange={handleChange}
              className="form-control"
            >
              <option value="">Select Status</option>
              {statusOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="detail-field">
            <label>HYDROSTATIC TEST DATE</label>
            <input
              type="date"
              name="hydrostaticTestDate"
              value={formData.hydrostaticTestDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="detail-field">
            <label>MATERIAL TRACEABILITY STATUS</label>
            <select
              name="materialTraceabilityStatus"
              value={formData.materialTraceabilityStatus}
              onChange={handleChange}
              className="form-control"
            >
              <option value="">Select Status</option>
              {statusOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="detail-field">
            <label>MATERIAL TRACEABILITY DATE</label>
            <input
              type="date"
              name="materialTraceabilityDate"
              value={formData.materialTraceabilityDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="detail-field">
            <label>VISUAL INSPECTION STATUS</label>
            <select
              name="visualInspectionStatus"
              value={formData.visualInspectionStatus}
              onChange={handleChange}
              className="form-control"
            >
              <option value="">Select Status</option>
              {statusOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="detail-field">
            <label>VISUAL INSPECTION DATE</label>
            <input
              type="date"
              name="visualInspectionDate"
              value={formData.visualInspectionDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="detail-field">
            <label>WELDING TRACEABILITY STATUS</label>
            <select
              name="weldingTraceabilityStatus"
              value={formData.weldingTraceabilityStatus}
              onChange={handleChange}
              className="form-control"
            >
              <option value="">Select Status</option>
              {statusOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="detail-field">
            <label>WELDING TRACEABILITY DATE</label>
            <input
              type="date"
              name="weldingTraceabilityDate"
              value={formData.weldingTraceabilityDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="detail-field">
            <label>MEP STATUS</label>
            <select
              name="mepStatus"
              value={formData.mepStatus}
              onChange={handleChange}
              className="form-control"
            >
              <option value="">Select Status</option>
              {statusOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="detail-field">
            <label>MEP DATE</label>
            <input
              type="date"
              name="mepDate"
              value={formData.mepDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
      </form>

      <div className="detail-footer">
        <button className="btn-secondary" onClick={() => setCurrentPage('plant-module-process-list')}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-primary" onClick={handleSubmit}>
          <i className="fas fa-save"></i>
          Save
        </button>
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

export default PlantModuleProcess;
