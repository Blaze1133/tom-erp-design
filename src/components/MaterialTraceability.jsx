import React, { useEffect, useState, useRef } from 'react';
import Toast from './Toast';
import './Enquiries.css';
import { addStageSubmission } from '../utils/stageSubmissions';

const MaterialTraceability = ({ setCurrentPage, viewOnly = false, viewData = null, returnPageId = '' }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    moduleNo: 'SANYU-CHWP-001',
    contractor: 'Tech Onshore Mep Prefabricators Pte Ltd',
    projectName: '24-00221-YSE-Project Sanyu',
    drawingNo: 'SQE-SANYU-CHW-FAB-001',
    projectNo: '24-00221',
    drawingTitle: 'CHWP PUMP SKID - FABRICATION',
    location: 'No.11, Tuas South Street 3',
    reportNo: 'TOM-YSE-2024-00221-IIR-001',
    dateOfInspection: '2024-07-26',
    revisionNo: ''
  });

  const [traceabilityDetails, setTraceabilityDetails] = useState([
    { id: 1, sno: '1', descriptionOfMaterial: '', qty: '15', millCertificateNo: '42123140122', heatPlateNo: 'CB4055', iirNo: 'TOM-YSE-2024-00221-IIR-001', remarks: '' },
    { id: 2, sno: '2', descriptionOfMaterial: '', qty: '2', millCertificateNo: 'HY20240511001', heatPlateNo: '20424018', iirNo: 'TOM-YSE-2024-00221-IIR-001', remarks: '' },
    { id: 3, sno: '3', descriptionOfMaterial: '', qty: '1', millCertificateNo: 'YTDK20231017006G', heatPlateNo: 'GA5287', iirNo: 'TOM-YSE-2024-00221-IIR-001', remarks: '' },
    { id: 4, sno: '4', descriptionOfMaterial: '', qty: '?', millCertificateNo: '24M007 24', heatPlateNo: 'ISC2424077', iirNo: 'TOM-YSE-2024-00221-IIR-001', remarks: '' },
    { id: 5, sno: '5', descriptionOfMaterial: '', qty: '1', millCertificateNo: 'B02405070456', heatPlateNo: '2433149', iirNo: 'TOM-YSE-2024-00221-IIR-001', remarks: '' },
    { id: 6, sno: '6', descriptionOfMaterial: '', qty: '3', millCertificateNo: 'GC20240615616', heatPlateNo: '1/320203999Y', iirNo: 'TOM-YSE-2024-00221-IIR-01A', remarks: '' },
    { id: 7, sno: '7', descriptionOfMaterial: '', qty: '3', millCertificateNo: 'GC20230619131', heatPlateNo: '132020729Y', iirNo: 'TOM-YSE-2024-00221-IIR-01B', remarks: '' }
  ]);

  // Signature canvas refs
  const tomSignatureRef = useRef(null);
  const clientApprovedSignatureRef = useRef(null);
  const clientWitnessedSignatureRef = useRef(null);
  
  const [isDrawing, setIsDrawing] = useState({
    tom: false,
    clientApproved: false,
    clientWitnessed: false
  });

  const [tomDate, setTomDate] = useState('2024-07-26');
  const [clientApprovedDate, setClientApprovedDate] = useState('');
  const [clientWitnessedDate, setClientWitnessedDate] = useState('');

  useEffect(() => {
    if (!viewData) return;
    setFormData(prev => ({ ...prev, ...viewData }));
    if (Array.isArray(viewData.traceabilityDetails)) setTraceabilityDetails(viewData.traceabilityDetails);
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

  const handleTraceabilityDetailChange = (id, field, value) => {
    setTraceabilityDetails(prev =>
      prev.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const addTraceabilityRow = () => {
    const newId = traceabilityDetails.length + 1;
    setTraceabilityDetails(prev => [
      ...prev,
      {
        id: newId,
        sno: `${newId}`,
        descriptionOfMaterial: '',
        qty: '',
        millCertificateNo: '',
        heatPlateNo: '',
        iirNo: '',
        remarks: ''
      }
    ]);
  };

  const removeTraceabilityRow = (id) => {
    if (traceabilityDetails.length > 1) {
      setTraceabilityDetails(prev => prev.filter(item => item.id !== id));
    }
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
      traceabilityDetails,
      tomDate,
      clientApprovedDate,
      clientWitnessedDate
    };

    // Save to localStorage to update Plant Dashboard
    localStorage.setItem('plantMaterialTraceabilityStatus', 'Completed');
    localStorage.setItem('plantMaterialTraceabilityData', JSON.stringify(payload));

    addStageSubmission({
      module: 'Plant',
      stageId: 'plant-material-traceability',
      stageLabel: 'Material Traceability',
      payload
    });

    showToast('Material Traceability submitted successfully!', 'success');
    
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
          <i className="fas fa-barcode"></i>
          <div>
            <h1>Material Traceability</h1>
            <div className="detail-subtitle">
              <span>Module No: {formData.moduleNo}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" type="button" onClick={() => setCurrentPage('view-material-traceabilities')}>List</button>
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
          {/* Material Traceability Header */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Material Traceability</h3>
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
                <label>DRAWING TITLE</label>
                <input
                  type="text"
                  name="drawingTitle"
                  value={formData.drawingTitle}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Drawing Title"
                />
              </div>

              <div className="detail-field">
                <label>LOCATION</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Location"
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
            </div>
          </div>

          {/* Material Traceability Details Table */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Material Traceability Details</h3>
            </div>
            <div className="section-body">

            <div style={{ overflowX: 'auto', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
              <table style={{ width: '100%', minWidth: '1400px', borderCollapse: 'separate', borderSpacing: 0 }}>
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
                    }}>DESCRIPTION OF MATERIAL</th>
                    <th style={{ 
                      padding: '1rem 1.25rem', 
                      fontSize: '0.8125rem', 
                      fontWeight: '700', 
                      color: '#475569',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderBottom: '2px solid #e2e8f0',
                      textAlign: 'center',
                      minWidth: '80px'
                    }}>QTY</th>
                    <th style={{ 
                      padding: '1rem 1.25rem', 
                      fontSize: '0.8125rem', 
                      fontWeight: '700', 
                      color: '#475569',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderBottom: '2px solid #e2e8f0',
                      textAlign: 'left',
                      minWidth: '180px'
                    }}>MILL CERTIFICATE NO</th>
                    <th style={{ 
                      padding: '1rem 1.25rem', 
                      fontSize: '0.8125rem', 
                      fontWeight: '700', 
                      color: '#475569',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderBottom: '2px solid #e2e8f0',
                      textAlign: 'left',
                      minWidth: '150px'
                    }}>HEAT/PLATE NO</th>
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
                    }}>IIR NO</th>
                    <th style={{ 
                      padding: '1rem 1.25rem', 
                      fontSize: '0.8125rem', 
                      fontWeight: '700', 
                      color: '#475569',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderBottom: '2px solid #e2e8f0',
                      textAlign: 'left',
                      minWidth: '150px'
                    }}>REMARKS</th>
                    <th style={{ 
                      padding: '1rem 1.25rem', 
                      fontSize: '0.8125rem', 
                      fontWeight: '700', 
                      color: '#475569',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderBottom: '2px solid #e2e8f0',
                      textAlign: 'center'
                    }}>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {traceabilityDetails.map((detail, index) => (
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
                          value={detail.descriptionOfMaterial}
                          onChange={(e) => handleTraceabilityDetailChange(detail.id, 'descriptionOfMaterial', e.target.value)}
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
                          value={detail.qty}
                          onChange={(e) => handleTraceabilityDetailChange(detail.id, 'qty', e.target.value)}
                          placeholder="Qty"
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
                          value={detail.millCertificateNo}
                          onChange={(e) => handleTraceabilityDetailChange(detail.id, 'millCertificateNo', e.target.value)}
                          placeholder="Enter mill certificate no"
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
                          value={detail.heatPlateNo}
                          onChange={(e) => handleTraceabilityDetailChange(detail.id, 'heatPlateNo', e.target.value)}
                          placeholder="Enter heat/plate no"
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
                          value={detail.iirNo}
                          onChange={(e) => handleTraceabilityDetailChange(detail.id, 'iirNo', e.target.value)}
                          placeholder="Enter IIR no"
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
                          value={detail.remarks}
                          onChange={(e) => handleTraceabilityDetailChange(detail.id, 'remarks', e.target.value)}
                          placeholder="Enter remarks"
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
                          onClick={() => removeTraceabilityRow(detail.id)}
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
                onClick={addTraceabilityRow}
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

export default MaterialTraceability;
