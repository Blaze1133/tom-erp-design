import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ModuleEmptyForm = ({ moduleData, onBack, onSubmit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Form state
  const [formData, setFormData] = useState({
    moduleSelection: moduleData?.code || '',
    project: '',
    lineNo: moduleData?.line || '',
    lineSubIndex: '',
    index: moduleData?.position || '',
    status: 'Not Completed',
    dateOfDelivery: '',
    workshopLocation: '13',
    fabricationStartDate: '',
    actualFabStartDate: '',
    fabricationEndDate: '',
    actualFabEndDate: '',
    finalQcDate: '',
    actualFinalQcDate: '',
    finalQcStatus: ''
  });

  const projects = [
    '20-0052 Fortis Construction Pte. Ltd',
    '21-0149 GF-OSM-WOODLANDS',
    '22-0026 NORT-Lifting',
    '22-0089 Keppel Shipyard Project',
    '23-0015 Megayard Construction'
  ];

  const statuses = [
    'Not Completed',
    'In Progress',
    'Completed',
    'On Hold',
    'Pending Review'
  ];

  const workshopLocations = [
    '11',
    '12',
    '13',
    '14',
    '15',
    'External Workshop'
  ];

  const qcStatuses = [
    'Pending',
    'Passed',
    'Failed',
    'Re-inspection Required',
    'Approved'
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

  const handleSubmit = () => {
    // Validation
    if (!formData.moduleSelection) {
      showToast('Please select a module', 'error');
      return;
    }
    if (!formData.project) {
      showToast('Please select a project', 'error');
      return;
    }
    if (!formData.dateOfDelivery) {
      showToast('Please enter date of delivery', 'error');
      return;
    }
    if (!formData.fabricationStartDate) {
      showToast('Please enter fabrication start date', 'error');
      return;
    }
    if (!formData.finalQcDate) {
      showToast('Please enter final QC date', 'error');
      return;
    }

    showToast('Module form submitted successfully!', 'success');
    
    // Call parent submit handler
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset the form?')) {
      setFormData({
        moduleSelection: moduleData?.code || '',
        project: '',
        lineNo: moduleData?.line || '',
        lineSubIndex: '',
        index: moduleData?.position || '',
        status: 'Not Completed',
        dateOfDelivery: '',
        workshopLocation: '13',
        fabricationStartDate: '',
        actualFabStartDate: '',
        fabricationEndDate: '',
        actualFabEndDate: '',
        finalQcDate: '',
        actualFinalQcDate: '',
        finalQcStatus: ''
      });
      showToast('Form reset successfully', 'info');
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-cube" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Module Empty Form</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Module Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-info-circle"></i>
            Module Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">MODULE SELECTION <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.moduleSelection}
                onChange={(e) => handleInputChange('moduleSelection', e.target.value)}
              >
                <option value="">-Select-</option>
                <option value="TSAVC L3-DFMA-06">TSAVC L3-DFMA-06</option>
                <option value="L14-DFMA-010">L14-DFMA-010</option>
                <option value="GERAS-CNC-01">GERAS-CNC-01</option>
                <option value="BLK05-L02-01">BLK05-L02-01</option>
                <option value="CFC-L14-DFMA-25">CFC-L14-DFMA-25</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">PROJECT <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.project}
                onChange={(e) => handleInputChange('project', e.target.value)}
              >
                <option value="">-Select-</option>
                {projects.map((project, index) => (
                  <option key={index} value={project}>{project}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">LINE NO</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.lineNo}
                onChange={(e) => handleInputChange('lineNo', e.target.value)}
                placeholder="LINE-3"
              />
            </div>
            <div className="form-group">
              <label className="form-label">LINE SUB INDEX</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.lineSubIndex}
                onChange={(e) => handleInputChange('lineSubIndex', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">INDEX</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.index}
                onChange={(e) => handleInputChange('index', e.target.value)}
                placeholder="A-3"
              />
            </div>
            <div className="form-group">
              <label className="form-label">STATUS</label>
              <select 
                className="form-control"
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
              >
                {statuses.map((status, index) => (
                  <option key={index} value={status}>{status}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">DATE OF DELIVERY <span className="required">*</span></label>
              <input 
                type="date" 
                className="form-control"
                value={formData.dateOfDelivery}
                onChange={(e) => handleInputChange('dateOfDelivery', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">WORKSHOP LOCATION</label>
              <select 
                className="form-control"
                value={formData.workshopLocation}
                onChange={(e) => handleInputChange('workshopLocation', e.target.value)}
              >
                {workshopLocations.map((location, index) => (
                  <option key={index} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Fabrication Details */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-tools"></i>
            Fabrication Details
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">FABRICATION START DATE <span className="required">*</span></label>
              <input 
                type="date" 
                className="form-control"
                value={formData.fabricationStartDate}
                onChange={(e) => handleInputChange('fabricationStartDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">ACTUAL FAB START DATE</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.actualFabStartDate}
                onChange={(e) => handleInputChange('actualFabStartDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">FABRICATION END DATE</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.fabricationEndDate}
                onChange={(e) => handleInputChange('fabricationEndDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">ACTUAL FAB END DATE</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.actualFabEndDate}
                onChange={(e) => handleInputChange('actualFabEndDate', e.target.value)}
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Quality Control */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-check-circle"></i>
            Quality Control
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">FINAL QC DATE <span className="required">*</span></label>
              <input 
                type="date" 
                className="form-control"
                value={formData.finalQcDate}
                onChange={(e) => handleInputChange('finalQcDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">ACTUAL FINAL QC DATE</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.actualFinalQcDate}
                onChange={(e) => handleInputChange('actualFinalQcDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">FINAL QC STATUS</label>
              <select 
                className="form-control"
                value={formData.finalQcStatus}
                onChange={(e) => handleInputChange('finalQcStatus', e.target.value)}
              >
                <option value="">-Select-</option>
                {qcStatuses.map((status, index) => (
                  <option key={index} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <div>
            <button className="btn btn-success" onClick={handleSubmit}>
              <i className="fas fa-check"></i>
              Submit
            </button>
            <button className="btn btn-secondary" onClick={handleReset}>
              <i className="fas fa-redo"></i>
              Reset
            </button>
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

export default ModuleEmptyForm;
