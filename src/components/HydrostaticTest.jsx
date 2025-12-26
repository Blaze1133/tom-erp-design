import React, { useState, useRef } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const HydrostaticTest = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    moduleNo: 'SANYU-CHWP-001',
    contractor: 'Tech Onshore Mep Prefabricators Pte Ltd',
    projectNo: '24-00221',
    reportNo: 'TOM-YSE-2024-00221-HTR-001',
    projectName: '24-00221-YSE-Project Sanyu',
    mfgSINo: '',
    itpNo: 'TOM-YSE-2024-00221 Rev 0',
    productDesignation: '',
    client: 'Yrasmus Engineering Pte Ltd',
    dateOfInspection: '2024-09-17',
    drawingNo: '',
    testRevisionNo: ''
  });

  const [details, setDetails] = useState({
    procedureNo: '',
    pressureGaugeNo: '',
    pressureChartRecorderNo: ''
  });

  const [testPosition, setTestPosition] = useState('Vertical');
  const [testResult, setTestResult] = useState('Acceptable');
  const [supportingDocuments, setSupportingDocuments] = useState([]);

  // Signature canvas refs
  const tomSignatureRef = useRef(null);
  const clientApprovedSignatureRef = useRef(null);
  const clientWitnessedSignatureRef = useRef(null);
  
  const [isDrawing, setIsDrawing] = useState({
    tom: false,
    clientApproved: false,
    clientWitnessed: false
  });

  const [tomDate, setTomDate] = useState('2024-09-17');
  const [clientApprovedDate, setClientApprovedDate] = useState('');
  const [clientWitnessedDate, setClientWitnessedDate] = useState('');

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

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setSupportingDocuments(prev => [...prev, ...files]);
  };

  const removeDocument = (index) => {
    setSupportingDocuments(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.moduleNo) {
      showToast('Module No is required', 'error');
      return;
    }

    // Save to localStorage to update Plant Dashboard
    localStorage.setItem('plantHydrostaticTestStatus', 'Completed');
    localStorage.setItem('plantHydrostaticTestData', JSON.stringify({
      ...formData,
      details,
      testPosition,
      testResult,
      supportingDocuments: supportingDocuments.map(f => f.name),
      tomDate,
      clientApprovedDate,
      clientWitnessedDate
    }));

    showToast('Hydrostatic Test submitted successfully!', 'success');
    
    // Redirect to plant dashboard
    setTimeout(() => {
      setCurrentPage('plant-dashboard');
    }, 1500);
  };

  const startDrawing = (canvasType, e) => {
    const canvas = canvasType === 'tom' ? tomSignatureRef.current : 
                   canvasType === 'clientApproved' ? clientApprovedSignatureRef.current : 
                   clientWitnessedSignatureRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    setIsDrawing({ ...isDrawing, [canvasType]: true });
  };

  const draw = (canvasType, e) => {
    if (!isDrawing[canvasType]) return;
    const canvas = canvasType === 'tom' ? tomSignatureRef.current : 
                   canvasType === 'clientApproved' ? clientApprovedSignatureRef.current : 
                   clientWitnessedSignatureRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.stroke();
  };

  const stopDrawing = (canvasType) => {
    setIsDrawing({ ...isDrawing, [canvasType]: false });
  };

  const clearSignature = (canvasType) => {
    const canvas = canvasType === 'tom' ? tomSignatureRef.current : 
                   canvasType === 'clientApproved' ? clientApprovedSignatureRef.current : 
                   clientWitnessedSignatureRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    showToast('Signature cleared', 'success');
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-tint"></i>
          <div>
            <h1>Hydrostatic Test</h1>
            <div className="detail-subtitle">
              <span>Module No: {formData.moduleNo}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" type="button" onClick={() => setCurrentPage('view-hydrostatic-tests')}>List</button>
          <button className="btn-action" type="button">Search</button>
          <button className="btn-action" type="button">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-toolbar" type="button" onClick={() => setCurrentPage('plant-dashboard')}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn-toolbar" type="button" onClick={() => setCurrentPage('plant-dashboard')}>
            Cancel
          </button>
          <button className="btn-toolbar-primary" type="submit" onClick={handleSubmit}>
            <i className="fas fa-save"></i>
            Save
          </button>
        </div>
      </div>

      <div className="detail-content">
        <form onSubmit={handleSubmit}>
          {/* Hydrostatic Test Header */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Hydrostatic Test</h3>
            </div>
            <div className="section-body">
              <div className="detail-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="detail-field">
                <label>MODULE NO <span className="required">*</span></label>
                <input
                  type="text"
                  name="moduleNo"
                  value={formData.moduleNo}
                  onChange={handleInputChange}
                  className="form-control"
                  readOnly
                />
              </div>

              <div className="detail-field">
                <label>CONTRACTOR</label>
                <input
                  type="text"
                  name="contractor"
                  value={formData.contractor}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Contractor"
                />
              </div>

              <div className="detail-field">
                <label>PROJECT NO</label>
                <input
                  type="text"
                  name="projectNo"
                  value={formData.projectNo}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Project No"
                />
              </div>

              <div className="detail-field">
                <label>REPORT NO</label>
                <input
                  type="text"
                  name="reportNo"
                  value={formData.reportNo}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Report No"
                />
              </div>

              <div className="detail-field">
                <label>PROJECT NAME</label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Project Name"
                />
              </div>

              <div className="detail-field">
                <label>MFG SI NO</label>
                <input
                  type="text"
                  name="mfgSINo"
                  value={formData.mfgSINo}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Mfg SI No"
                />
              </div>

              <div className="detail-field">
                <label>ITP NO</label>
                <input
                  type="text"
                  name="itpNo"
                  value={formData.itpNo}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter ITP No"
                />
              </div>

              <div className="detail-field">
                <label>PRODUCT DESIGNATION</label>
                <input
                  type="text"
                  name="productDesignation"
                  value={formData.productDesignation}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Product Designation"
                />
              </div>

              <div className="detail-field">
                <label>CLIENT</label>
                <input
                  type="text"
                  name="client"
                  value={formData.client}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Client"
                />
              </div>

              <div className="detail-field">
                <label>DATE OF INSPECTION</label>
                <input
                  type="date"
                  name="dateOfInspection"
                  value={formData.dateOfInspection}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              <div className="detail-field">
                <label>DRAWING NO</label>
                <input
                  type="text"
                  name="drawingNo"
                  value={formData.drawingNo}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Drawing No"
                />
              </div>

              <div className="detail-field">
                <label>TEST REVISION NO</label>
                <input
                  type="text"
                  name="testRevisionNo"
                  value={formData.testRevisionNo}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Test Revision No"
                />
              </div>
            </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Details</h3>
            </div>
            <div className="section-body">
              <div className="detail-grid" style={{ gridTemplateColumns: '1fr' }}>
                <div className="detail-field">
                  <label>PROCEDURE NO</label>
                  <input
                    type="text"
                    name="procedureNo"
                    value={details.procedureNo}
                    onChange={handleDetailsChange}
                    className="form-control"
                    placeholder="Enter Procedure No"
                  />
                </div>

                <div className="detail-field">
                  <label>PRESSURE GAUGE NO</label>
                  <input
                    type="text"
                    name="pressureGaugeNo"
                    value={details.pressureGaugeNo}
                    onChange={handleDetailsChange}
                    className="form-control"
                    placeholder="Enter Pressure Gauge No"
                  />
                </div>

                <div className="detail-field">
                  <label>PRESSURE CHART RECORDER NO</label>
                  <input
                    type="text"
                    name="pressureChartRecorderNo"
                    value={details.pressureChartRecorderNo}
                    onChange={handleDetailsChange}
                    className="form-control"
                    placeholder="Enter Pressure Chart Recorder No"
                  />
                </div>

                <div className="detail-field" style={{ marginTop: '1rem' }}>
                  <label>TEST POSITION</label>
                  <div style={{ display: 'flex', gap: '2rem', marginTop: '0.5rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="testPosition"
                        value="Vertical"
                        checked={testPosition === 'Vertical'}
                        onChange={(e) => setTestPosition(e.target.value)}
                      />
                      <span style={{ fontSize: '0.875rem' }}>Vertical</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="testPosition"
                        value="Horizontal"
                        checked={testPosition === 'Horizontal'}
                        onChange={(e) => setTestPosition(e.target.value)}
                      />
                      <span style={{ fontSize: '0.875rem' }}>Horizontal</span>
                    </label>
                  </div>
                </div>

                <div className="detail-field" style={{ marginTop: '1rem' }}>
                  <label>TEST RESULT</label>
                  <div style={{ display: 'flex', gap: '2rem', marginTop: '0.5rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="testResult"
                        value="Acceptable"
                        checked={testResult === 'Acceptable'}
                        onChange={(e) => setTestResult(e.target.value)}
                      />
                      <span style={{ fontSize: '0.875rem' }}>Acceptable</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="testResult"
                        value="UnAcceptable"
                        checked={testResult === 'UnAcceptable'}
                        onChange={(e) => setTestResult(e.target.value)}
                      />
                      <span style={{ fontSize: '0.875rem' }}>UnAcceptable</span>
                    </label>
                  </div>
                </div>

                <div className="detail-field" style={{ marginTop: '1rem' }}>
                  <label>SUPPORTING DOCUMENT</label>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    className="form-control"
                  />
                </div>

                {supportingDocuments.length > 0 && (
                  <div style={{ marginTop: '1rem' }}>
                    <label style={{ fontSize: '0.7rem', fontWeight: '600', color: '#888', textTransform: 'uppercase', letterSpacing: '0.3px', display: 'block', marginBottom: '0.75rem' }}>
                      UPLOADED DOCUMENTS
                    </label>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {supportingDocuments.map((doc, index) => (
                        <li key={index} style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '0.5rem',
                          backgroundColor: '#f9fafb',
                          borderRadius: '4px',
                          marginBottom: '0.5rem'
                        }}>
                          <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                            <i className="fas fa-file" style={{ marginRight: '0.5rem', color: '#4a90e2' }}></i>
                            {doc.name}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeDocument(index)}
                            style={{
                              padding: '0.25rem 0.5rem',
                              backgroundColor: '#dc3545',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '0.75rem'
                            }}
                          >
                            ×
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Prepared By TOM */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Prepared By TOM</h3>
            </div>
            <div className="section-body">
              <div className="detail-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="detail-field">
                <label>TOM DATE</label>
                <input
                  type="date"
                  value={tomDate}
                  onChange={(e) => setTomDate(e.target.value)}
                  className="form-control"
                />
              </div>
              </div>

              <div className="detail-field" style={{ marginTop: '1rem' }}>
                <label>TOM SIGNATURE</label>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', maxWidth: '60%' }}>
                  <div style={{ flex: 1 }}>
                    <canvas
                      ref={tomSignatureRef}
                      width={600}
                      height={100}
                      onMouseDown={(e) => startDrawing('tom', e)}
                      onMouseMove={(e) => draw('tom', e)}
                      onMouseUp={() => stopDrawing('tom')}
                      onMouseLeave={() => stopDrawing('tom')}
                      style={{
                        width: '100%',
                        height: '100px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '8px',
                        backgroundColor: '#ffffff',
                        cursor: 'crosshair',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                      }}
                    />
                    <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#64748b', fontStyle: 'italic' }}>
                      <i className="fas fa-info-circle" style={{ marginRight: '0.25rem' }}></i>
                      Draw your signature using mouse or touch
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => clearSignature('tom')}
                    style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#f1f5f9',
                      color: '#475569',
                      border: '1px solid #e2e8f0',
                      borderRadius: '6px',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#e2e8f0';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#f1f5f9';
                    }}
                  >
                    <i className="fas fa-eraser" style={{ marginRight: '0.5rem' }}></i>
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Approved By Client */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Approved By Client</h3>
            </div>
            <div className="section-body">
              <div className="detail-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="detail-field">
                <label>CLIENT APPROVED DATE</label>
                <input
                  type="date"
                  value={clientApprovedDate}
                  onChange={(e) => setClientApprovedDate(e.target.value)}
                  className="form-control"
                />
              </div>
              </div>

              <div className="detail-field" style={{ marginTop: '1rem' }}>
                <label>CLIENT APPROVED SIGNATURE</label>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', maxWidth: '60%' }}>
                  <div style={{ flex: 1 }}>
                    <canvas
                      ref={clientApprovedSignatureRef}
                      width={600}
                      height={100}
                      onMouseDown={(e) => startDrawing('clientApproved', e)}
                      onMouseMove={(e) => draw('clientApproved', e)}
                      onMouseUp={() => stopDrawing('clientApproved')}
                      onMouseLeave={() => stopDrawing('clientApproved')}
                      style={{
                        width: '100%',
                        height: '100px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '8px',
                        backgroundColor: '#ffffff',
                        cursor: 'crosshair',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                      }}
                    />
                    <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#64748b', fontStyle: 'italic' }}>
                      <i className="fas fa-info-circle" style={{ marginRight: '0.25rem' }}></i>
                      Draw your signature using mouse or touch
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => clearSignature('clientApproved')}
                    style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#f1f5f9',
                      color: '#475569',
                      border: '1px solid #e2e8f0',
                      borderRadius: '6px',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#e2e8f0';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#f1f5f9';
                    }}
                  >
                    <i className="fas fa-eraser" style={{ marginRight: '0.5rem' }}></i>
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Witnessed By Client */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Witnessed By Client</h3>
            </div>
            <div className="section-body">
              <div className="detail-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="detail-field">
                <label>CLIENT WITNESSED DATE</label>
                <input
                  type="date"
                  value={clientWitnessedDate}
                  onChange={(e) => setClientWitnessedDate(e.target.value)}
                  className="form-control"
                />
              </div>
              </div>

              <div className="detail-field" style={{ marginTop: '1rem' }}>
                <label>CLIENT WITNESSED SIGNATURE</label>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', maxWidth: '60%' }}>
                  <div style={{ flex: 1 }}>
                    <canvas
                      ref={clientWitnessedSignatureRef}
                      width={600}
                      height={100}
                      onMouseDown={(e) => startDrawing('clientWitnessed', e)}
                      onMouseMove={(e) => draw('clientWitnessed', e)}
                      onMouseUp={() => stopDrawing('clientWitnessed')}
                      onMouseLeave={() => stopDrawing('clientWitnessed')}
                      style={{
                        width: '100%',
                        height: '100px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '8px',
                        backgroundColor: '#ffffff',
                        cursor: 'crosshair',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                      }}
                    />
                    <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#64748b', fontStyle: 'italic' }}>
                      <i className="fas fa-info-circle" style={{ marginRight: '0.25rem' }}></i>
                      Draw your signature using mouse or touch
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => clearSignature('clientWitnessed')}
                    style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#f1f5f9',
                      color: '#475569',
                      border: '1px solid #e2e8f0',
                      borderRadius: '6px',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#e2e8f0';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#f1f5f9';
                    }}
                  >
                    <i className="fas fa-eraser" style={{ marginRight: '0.5rem' }}></i>
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn-toolbar" type="button" onClick={() => setCurrentPage('plant-dashboard')}>
                <i className="fas fa-arrow-left"></i>
                Back
              </button>
              <button className="btn-toolbar-primary" type="submit" onClick={handleSubmit}>
                <i className="fas fa-save"></i>
                Save
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

export default HydrostaticTest;
