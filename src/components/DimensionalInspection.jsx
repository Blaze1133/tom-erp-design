import React, { useEffect, useState, useRef } from 'react';
import Toast from './Toast';
import './Enquiries.css';
import { addStageSubmission } from '../utils/stageSubmissions';

const DimensionalInspection = ({ setCurrentPage, viewOnly = false, viewData = null, returnPageId = '' }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    moduleNo: 'SANYU-CHWP-001',
    contractor: 'Tech Onshore Mep Prefabricators Pte Ltd',
    projectName: '24-00221-YSE-Project Sanyu',
    projectNo: '24-00221',
    itpNo: 'TOM-YSE-2024-ITP-02021',
    productDescription: 'CHWP PUMP SKID - FABRICATION',
    reportNo: 'TOM-YSE-2024-00221-DIR-001',
    dateOfInspection: '2024-07-22',
    section: '',
    revisionNo: ''
  });

  const [inspectionDetails, setInspectionDetails] = useState([
    { id: 1, sno: '1', description: 'L1', requiredDimension: '3444', actualDimension: '3437', deviation: '7', drawingNo: 'SQE-SANYU-CHW-FAB-001' },
    { id: 2, sno: '2', description: 'L2', requiredDimension: '631', actualDimension: '627', deviation: '-4', drawingNo: 'SQE-SANYU-CHW-FAB-001' },
    { id: 3, sno: '3', description: 'L3', requiredDimension: '317', actualDimension: '317', deviation: '0', drawingNo: 'SQE-SANYU-CHW-FAB-001' },
    { id: 4, sno: '4', description: 'L4', requiredDimension: '4892', actualDimension: '4887', deviation: '-4', drawingNo: 'SQE-SANYU-CHW-FAB-001' },
    { id: 5, sno: '5', description: 'L5', requiredDimension: '1761', actualDimension: '1758', deviation: '-3', drawingNo: 'SQE-SANYU-CHW-FAB-001' },
    { id: 6, sno: '6', description: 'L6', requiredDimension: '1073', actualDimension: '1071', deviation: '2', drawingNo: 'SQE-SANYU-CHW-FAB-001' },
    { id: 7, sno: '7', description: 'L7', requiredDimension: '865', actualDimension: '863', deviation: '-2', drawingNo: 'SQE-SANYU-CHW-FAB-001' },
    { id: 8, sno: '8', description: 'L8', requiredDimension: '1361', actualDimension: '1358', deviation: '-3', drawingNo: 'SQE-SANYU-CHW-FAB-001' },
    { id: 9, sno: '9', description: 'L9', requiredDimension: '1270', actualDimension: '1265', deviation: '-5', drawingNo: 'SQE-SANYU-CHW-FAB-001' },
    { id: 10, sno: '10', description: 'L10', requiredDimension: '583', actualDimension: '580', deviation: '-3', drawingNo: 'SQE-SANYU-CHW-FAB-001' }
  ]);

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

  const [tomDate, setTomDate] = useState('');
  const [clientApprovedDate, setClientApprovedDate] = useState('');
  const [clientWitnessedDate, setClientWitnessedDate] = useState('');

  useEffect(() => {
    if (!viewData) return;
    setFormData(prev => ({ ...prev, ...viewData }));
    if (Array.isArray(viewData.inspectionDetails)) setInspectionDetails(viewData.inspectionDetails);
    if (Array.isArray(viewData.supportingDocuments)) {
      setSupportingDocuments(viewData.supportingDocuments.map((name) => ({ name })));
    }
    if (viewData.tomDate != null) setTomDate(viewData.tomDate);
    if (viewData.clientApprovedDate != null) setClientApprovedDate(viewData.clientApprovedDate);
    if (viewData.clientWitnessedDate != null) setClientWitnessedDate(viewData.clientWitnessedDate);
  }, [viewData]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleBack = () => {
    if (viewOnly) {
      setCurrentPage(returnPageId || 'production-plant-stages');
      return;
    }
    setCurrentPage('plant-dashboard');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInspectionDetailChange = (id, field, value) => {
    setInspectionDetails(prev =>
      prev.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const addInspectionRow = () => {
    const newId = inspectionDetails.length + 1;
    setInspectionDetails(prev => [
      ...prev,
      {
        id: newId,
        sno: String(newId).padStart(2, '0'),
        description: '',
        requiredDimension: '',
        actualDimension: '',
        deviation: '',
        drawingNo: ''
      }
    ]);
  };

  const removeInspectionRow = (id) => {
    if (inspectionDetails.length > 1) {
      setInspectionDetails(prev => prev.filter(item => item.id !== id));
    }
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

    if (viewOnly) return;
    
    if (!formData.moduleNo) {
      showToast('Module No is required', 'error');
      return;
    }

    const payload = {
      ...formData,
      inspectionDetails,
      supportingDocuments: supportingDocuments.map(f => f.name),
      tomDate,
      clientApprovedDate,
      clientWitnessedDate
    };

    // Save to localStorage to update Plant Dashboard
    localStorage.setItem('plantDimensionalInspectionStatus', 'Completed');
    localStorage.setItem('plantDimensionalInspectionData', JSON.stringify(payload));

    addStageSubmission({
      module: 'Plant',
      stageId: 'plant-dimensional-inspection',
      stageLabel: 'Dimensional Inspection',
      payload
    });

    showToast('Dimensional Inspection submitted successfully!', 'success');
    
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
    <div className={`enquiry-detail ${viewOnly ? 'view-only-stage' : ''}`}>
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-ruler-combined"></i>
          <div>
            <h1>Dimensional Inspection</h1>
            <div className="detail-subtitle">
              <span>Module No: {formData.moduleNo}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" type="button" onClick={() => setCurrentPage('view-dimensional-inspections')}>List</button>
          <button className="btn-action" type="button">Search</button>
          <button className="btn-action" type="button">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-toolbar view-only-back" type="button" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn-toolbar" type="button" onClick={handleBack}>
            Cancel
          </button>
          <button className="btn-toolbar-primary" type="submit" onClick={handleSubmit} disabled={viewOnly}>
            <i className="fas fa-save"></i>
            Save
          </button>
        </div>
      </div>

      <div className="detail-content">
        <form onSubmit={handleSubmit}>
          <fieldset disabled={viewOnly} style={{ border: 0, padding: 0, margin: 0 }}>
          {/* Dimensional Inspection Header */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Dimensional Inspection</h3>
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
                <label>PRODUCT DESCRIPTION</label>
                <input
                  type="text"
                  name="productDescription"
                  value={formData.productDescription}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Product Description"
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
                  placeholder="Enter Project NO"
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
                <label>DATE OF INSPECTION</label>
                <input
                  type="date"
                  name="dateOfInspection"
                  value={formData.dateOfInspection}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
            </div>
            </div>
          </div>

          {/* Dimensional Inspection Details Table */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Dimensional Inspection Details</h3>
            </div>
            <div className="section-body">

            <div style={{ overflowX: 'auto', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
              <table style={{ width: '100%', minWidth: '1200px', borderCollapse: 'separate', borderSpacing: 0 }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8fafc' }}>
                    <th style={{ 
                      padding: '1rem 1.25rem', 
                      fontSize: '0.8125rem', 
                      fontWeight: '700', 
                      color: '#475569',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderBottom: '2px solid #e2e8f0',
                      textAlign: 'left',
                      whiteSpace: 'nowrap'
                    }}>S.NO</th>
                    <th style={{ 
                      padding: '1rem 1.25rem', 
                      fontSize: '0.8125rem', 
                      fontWeight: '700', 
                      color: '#475569',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderBottom: '2px solid #e2e8f0',
                      textAlign: 'left',
                      minWidth: '200px'
                    }}>Description</th>
                    <th style={{ 
                      padding: '1rem 1.25rem', 
                      fontSize: '0.8125rem', 
                      fontWeight: '700', 
                      color: '#475569',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderBottom: '2px solid #e2e8f0',
                      textAlign: 'center',
                      minWidth: '150px'
                    }}>Required Dimension(mm)</th>
                    <th style={{ 
                      padding: '1rem 1.25rem', 
                      fontSize: '0.8125rem', 
                      fontWeight: '700', 
                      color: '#475569',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderBottom: '2px solid #e2e8f0',
                      textAlign: 'center',
                      minWidth: '150px'
                    }}>Actual Dimension(mm)</th>
                    <th style={{ 
                      padding: '1rem 1.25rem', 
                      fontSize: '0.8125rem', 
                      fontWeight: '700', 
                      color: '#475569',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderBottom: '2px solid #e2e8f0',
                      textAlign: 'center',
                      minWidth: '120px'
                    }}>Deviation(mm)</th>
                    <th style={{ 
                      padding: '1rem 1.25rem', 
                      fontSize: '0.8125rem', 
                      fontWeight: '700', 
                      color: '#475569',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderBottom: '2px solid #e2e8f0',
                      textAlign: 'left',
                      minWidth: '120px'
                    }}>Drawing No</th>
                    <th style={{ 
                      padding: '1rem 1.25rem', 
                      fontSize: '0.8125rem', 
                      fontWeight: '700', 
                      color: '#475569',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderBottom: '2px solid #e2e8f0',
                      textAlign: 'center'
                    }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {inspectionDetails.map((detail, index) => (
                    <tr key={detail.id} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                      <td style={{ 
                        padding: '1.25rem 1.25rem', 
                        fontSize: '0.875rem',
                        color: '#1e293b',
                        fontWeight: '600',
                        borderBottom: '1px solid #f1f5f9'
                      }}>{detail.sno}</td>
                      <td style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #f1f5f9' }}>
                        <input
                          type="text"
                          value={detail.description}
                          onChange={(e) => handleInspectionDetailChange(detail.id, 'description', e.target.value)}
                          placeholder="Enter description"
                          style={{ 
                            width: '100%', 
                            padding: '0.625rem 0.875rem', 
                            border: '1px solid #e2e8f0', 
                            borderRadius: '6px', 
                            fontSize: '0.875rem',
                            backgroundColor: '#ffffff',
                            transition: 'all 0.2s',
                            outline: 'none'
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#4a90e2'}
                          onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                      </td>
                      <td style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #f1f5f9' }}>
                        <input
                          type="text"
                          value={detail.requiredDimension}
                          onChange={(e) => handleInspectionDetailChange(detail.id, 'requiredDimension', e.target.value)}
                          placeholder="0.00"
                          style={{ 
                            width: '100%', 
                            padding: '0.625rem 0.875rem', 
                            border: '1px solid #e2e8f0', 
                            borderRadius: '6px', 
                            fontSize: '0.875rem',
                            backgroundColor: '#ffffff',
                            textAlign: 'center',
                            transition: 'all 0.2s',
                            outline: 'none'
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#4a90e2'}
                          onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                      </td>
                      <td style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #f1f5f9' }}>
                        <input
                          type="text"
                          value={detail.actualDimension}
                          onChange={(e) => handleInspectionDetailChange(detail.id, 'actualDimension', e.target.value)}
                          placeholder="0.00"
                          style={{ 
                            width: '100%', 
                            padding: '0.625rem 0.875rem', 
                            border: '1px solid #e2e8f0', 
                            borderRadius: '6px', 
                            fontSize: '0.875rem',
                            backgroundColor: '#ffffff',
                            textAlign: 'center',
                            transition: 'all 0.2s',
                            outline: 'none'
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#4a90e2'}
                          onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                      </td>
                      <td style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #f1f5f9' }}>
                        <input
                          type="text"
                          value={detail.deviation}
                          onChange={(e) => handleInspectionDetailChange(detail.id, 'deviation', e.target.value)}
                          placeholder="0.00"
                          style={{ 
                            width: '100%', 
                            padding: '0.625rem 0.875rem', 
                            border: '1px solid #e2e8f0', 
                            borderRadius: '6px', 
                            fontSize: '0.875rem',
                            backgroundColor: '#ffffff',
                            textAlign: 'center',
                            transition: 'all 0.2s',
                            outline: 'none'
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#4a90e2'}
                          onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                      </td>
                      <td style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #f1f5f9' }}>
                        <input
                          type="text"
                          value={detail.drawingNo}
                          onChange={(e) => handleInspectionDetailChange(detail.id, 'drawingNo', e.target.value)}
                          placeholder="Enter drawing no"
                          style={{ 
                            width: '100%', 
                            padding: '0.625rem 0.875rem', 
                            border: '1px solid #e2e8f0', 
                            borderRadius: '6px', 
                            fontSize: '0.875rem',
                            backgroundColor: '#ffffff',
                            transition: 'all 0.2s',
                            outline: 'none'
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#4a90e2'}
                          onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                      </td>
                      <td style={{ padding: '1rem 1.25rem', textAlign: 'center', borderBottom: '1px solid #f1f5f9' }}>
                        <button
                          type="button"
                          onClick={() => removeInspectionRow(detail.id)}
                          style={{
                            padding: '0.5rem 0.75rem',
                            backgroundColor: '#fee2e2',
                            color: '#dc2626',
                            border: '1px solid #fecaca',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            transition: 'all 0.2s'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#dc2626';
                            e.target.style.color = 'white';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#fee2e2';
                            e.target.style.color = '#dc2626';
                          }}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <button
                type="button"
                onClick={addInspectionRow}
                className="btn-toolbar"
              >
                <i className="fas fa-plus"></i>
                Add New
              </button>
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

          {/* Client Approved By */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Client Approved By</h3>
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

          {/* Client Witnessed By */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Client Witnessed By</h3>
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

          {/* Section and Supporting Documents */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Section</h3>
            </div>
            <div className="section-body">
              <div className="detail-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div className="detail-field">
                  <label>SUPPORTING DOCUMENT</label>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    className="form-control"
                  />
                </div>

                <div className="detail-field">
                  <label>REVISION NO</label>
                  <input
                    type="text"
                    name="revisionNo"
                    value={formData.revisionNo}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Enter Revision No"
                  />
                </div>
              </div>

            {supportingDocuments.length > 0 && (
              <div style={{ marginTop: '1.5rem' }}>
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

          {/* Bottom Buttons */}
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn-toolbar" type="button" onClick={() => setCurrentPage('plant-dashboard')}>
                <i className="fas fa-arrow-left"></i>
                Back
              </button>
              <button className="btn-toolbar-primary" type="submit" onClick={handleSubmit} disabled={viewOnly}>
                <i className="fas fa-save"></i>
                Save
              </button>
            </div>
          </div>
          </fieldset>
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

export default DimensionalInspection;
