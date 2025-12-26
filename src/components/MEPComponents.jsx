import React, { useState } from 'react';
import Toast from './Toast';
import PipingInspectionModal from './PipingInspectionModal';
import './Enquiries.css';

const MEPComponents = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    moduleNo: 'SANYU-CHWP-001',
    piping: 'No',
    flange: 'No',
    status: ''
  });

  const [showPipingModal, setShowPipingModal] = useState(false);
  const [pipingInspectionData, setPipingInspectionData] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Open Piping Inspection modal when Piping is set to Yes
    if (name === 'piping' && value === 'Yes') {
      setShowPipingModal(true);
    }
  };

  const handlePipingInspectionSubmit = (pipingData) => {
    setPipingInspectionData(pipingData);
    setShowPipingModal(false);
    
    // Save piping inspection to localStorage for the list view
    const existingInspections = JSON.parse(localStorage.getItem('pipingInspections') || '[]');
    const newInspection = {
      id: Date.now(),
      moduleNo: formData.moduleNo,
      ...pipingData,
      createdAt: new Date().toISOString(),
      status: 'COMPLETED'
    };
    existingInspections.push(newInspection);
    localStorage.setItem('pipingInspections', JSON.stringify(existingInspections));
    
    showToast('Piping Inspection submitted successfully!', 'success');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.moduleNo) {
      showToast('Module No is required', 'error');
      return;
    }

    // Update status based on selections
    let status = 'Completed';
    if (formData.piping === 'Yes' && !pipingInspectionData) {
      status = 'Pending - Piping Inspection Required';
    }

    const finalData = {
      ...formData,
      status,
      pipingInspectionData
    };

    // Save to localStorage to update Plant Dashboard
    localStorage.setItem('plantMEPComponentsStatus', status);
    localStorage.setItem('plantMEPComponentsData', JSON.stringify(finalData));

    showToast('MEP Components submitted successfully!', 'success');
    
    // Redirect to plant dashboard
    setTimeout(() => {
      setCurrentPage('plant-dashboard');
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      moduleNo: 'SANYU-CHWP-001',
      piping: 'No',
      flange: 'No',
      status: ''
    });
    setPipingInspectionData(null);
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-cogs"></i>
          <div>
            <h1>MEP Components</h1>
            <div className="detail-subtitle">
              <span>Module No: {formData.moduleNo}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" type="button" onClick={() => setCurrentPage('plant-dashboard')}>Back</button>
          <button className="btn-action" type="button">Search</button>
          <button className="btn-action" type="button">Customize</button>
        </div>
      </div>

      <div className="detail-content">
        <form onSubmit={handleSubmit}>
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>MEP Components</h3>
            </div>
            <div className="section-body">
              <div className="detail-grid" style={{ gridTemplateColumns: '1fr' }}>
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

                <div className="detail-field" style={{ marginTop: '1.5rem' }}>
                  <label style={{ marginBottom: '0.75rem', display: 'block' }}>PIPING</label>
                  <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="piping"
                        value="Yes"
                        checked={formData.piping === 'Yes'}
                        onChange={handleInputChange}
                        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                      />
                      <span style={{ fontSize: '0.95rem', color: '#333' }}>Yes</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="piping"
                        value="No"
                        checked={formData.piping === 'No'}
                        onChange={handleInputChange}
                        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                      />
                      <span style={{ fontSize: '0.95rem', color: '#333' }}>No</span>
                    </label>
                  </div>
                </div>

                <div className="detail-field" style={{ marginTop: '1.5rem' }}>
                  <label style={{ marginBottom: '0.75rem', display: 'block' }}>FLANGE</label>
                  <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="flange"
                        value="Yes"
                        checked={formData.flange === 'Yes'}
                        onChange={handleInputChange}
                        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                      />
                      <span style={{ fontSize: '0.95rem', color: '#333' }}>Yes</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="flange"
                        value="No"
                        checked={formData.flange === 'No'}
                        onChange={handleInputChange}
                        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                      />
                      <span style={{ fontSize: '0.95rem', color: '#333' }}>No</span>
                    </label>
                  </div>
                </div>

                <div className="detail-field" style={{ marginTop: '1.5rem' }}>
                  <label>STATUS</label>
                  <input
                    type="text"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Status will be auto-generated"
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
                Submit
              </button>
              <button 
                type="button"
                onClick={handleReset}
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
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Piping Inspection Modal */}
      {showPipingModal && (
        <PipingInspectionModal
          moduleNo={formData.moduleNo}
          onClose={() => setShowPipingModal(false)}
          onSubmit={handlePipingInspectionSubmit}
        />
      )}

      <Toast 
        message={toast.message} 
        type={toast.type} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
    </div>
  );
};

export default MEPComponents;
