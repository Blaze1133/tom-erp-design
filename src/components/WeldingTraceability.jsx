import React, { useState, useRef } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const WeldingTraceability = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    moduleNo: 'SANYU-CHWP-001',
    drawingNo: 'SQE-SANYU-CHW-FAB-001',
    projectName: '24-00221-YSE-Project Sanyu',
    drawingTitle: 'CHWP PUMP SKID - FABRICATION',
    projectNo: '24-00221',
    reportNo: 'TOM-YSE-2024-00221-WTR-001',
    location: 'No.11, Tuas South Street 3',
    dateOfInspection: '2024-08-16',
    contractor: 'Tech Onshore Mep Prefabricators Pte Ltd',
    revisionNo: '01'
  });

  const [traceabilityDetails, setTraceabilityDetails] = useState([
    { id: 1, jointNo: 'J14', drawingNo: 'SQE-SANYU-CHW-FAB-001', size: '125 x 125', materialDescription: 'UC', materialSpecification: 'UC 125 x 125 x 23.6 Kg/m I Beam', materialHeatPlateNo: 'CB4055' },
    { id: 2, jointNo: 'J15', drawingNo: 'SQE-SANYU-CHW-FAB-001', size: '110X110X10', materialDescription: 'BPL', materialSpecification: 'TRUNION BASE PLATE 110X110', materialHeatPlateNo: '132010729Y' },
    { id: 3, jointNo: 'J16', drawingNo: 'SQE-SANYU-CHW-FAB-001', size: '3"', materialDescription: 'P', materialSpecification: '3" GI Pipe - 2.90mm Grade: BS13', materialHeatPlateNo: 'GA5287' },
    { id: 4, jointNo: 'J17', drawingNo: 'SQE-SANYU-CHW-FAB-001', size: '125 x 125', materialDescription: 'UC', materialSpecification: 'UC 125 x 125 x 23.6 Kg/m I Beam', materialHeatPlateNo: 'CB4055' },
    { id: 5, jointNo: 'J18', drawingNo: 'SQE-SANYU-CHW-FAB-001', size: '125 x 125', materialDescription: 'UC', materialSpecification: 'UC 125 x 125 x 23.6 Kg/m I Beam', materialHeatPlateNo: 'CB4055' },
    { id: 6, jointNo: 'J19', drawingNo: 'SQE-SANYU-CHW-FAB-001', size: '105x170x16mm', materialDescription: 'PE', materialSpecification: 'PAD EYE 105x170x16mm Thk', materialHeatPlateNo: '14201C9999Y' },
    { id: 7, jointNo: 'J20', drawingNo: 'SQE-SANYU-CHW-FAB-001', size: '125 x 125', materialDescription: 'UC', materialSpecification: 'UC 125 x 125 x 23.6 Kg/m I Beam', materialHeatPlateNo: 'CB4055' },
    { id: 8, jointNo: 'J21', drawingNo: 'SQE-SANYU-CHW-FAB-001', size: '80X80X6', materialDescription: 'SHS', materialSpecification: 'SQUARE TUBE 80X80X6 Grade: !', materialHeatPlateNo: '20424018' },
    { id: 9, jointNo: 'J22', drawingNo: 'SQE-SANYU-CHW-FAB-001', size: '125 x 125', materialDescription: 'UC', materialSpecification: 'UC 125 x 125 x 23.6 Kg/m I Beam', materialHeatPlateNo: 'CB4055' },
    { id: 10, jointNo: 'J23', drawingNo: 'SQE-SANYU-CHW-FAB-001', size: '125 x 125', materialDescription: 'UC', materialSpecification: 'UC 125 x 125 x 23.6 Kg/m I Beam', materialHeatPlateNo: 'CB4055' },
    { id: 11, jointNo: 'J24', drawingNo: 'SQE-SANYU-CHW-FAB-001', size: '125 x 125', materialDescription: 'UC', materialSpecification: 'UC 125 x 125 x 23.6 Kg/m I Beam', materialHeatPlateNo: 'CB4055' },
    { id: 12, jointNo: 'J25', drawingNo: 'SQE-SANYU-CHW-FAB-001', size: '125 x 125', materialDescription: 'UC', materialSpecification: 'UC 125 x 125 x 23.6 Kg/m I Beam', materialHeatPlateNo: 'CB4055' }
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

  const [tomDate, setTomDate] = useState('2024-08-16');
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
        jointNo: `J${13 + newId}`,
        drawingNo: '',
        size: '',
        materialDescription: '',
        materialSpecification: '',
        materialHeatPlateNo: ''
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
    
    if (!formData.moduleNo) {
      showToast('Module No is required', 'error');
      return;
    }

    // Save to localStorage to update Plant Dashboard
    localStorage.setItem('plantWeldingTraceabilityStatus', 'Completed');
    localStorage.setItem('plantWeldingTraceabilityData', JSON.stringify({
      ...formData,
      traceabilityDetails,
      tomDate,
      clientApprovedDate,
      clientWitnessedDate
    }));

    showToast('Welding Traceability submitted successfully!', 'success');
    
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
          <i className="fas fa-burn"></i>
          <div>
            <h1>Welding Traceability</h1>
            <div className="detail-subtitle">
              <span>Module No: {formData.moduleNo}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" type="button" onClick={() => setCurrentPage('view-welding-traceabilities')}>List</button>
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
          {/* Welding Traceability Header */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Welding Traceability</h3>
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

          {/* Welding Traceability Details Table */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Welding Traceability Details</h3>
            </div>
            <div className="section-body">

            <div style={{ overflowX: 'auto', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
              <table style={{ width: '100%', minWidth: '1600px', borderCollapse: 'separate', borderSpacing: 0 }}>
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
                    }}>JOINT NO</th>
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
                    }}>DRAWING NO</th>
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
                    }}>SIZE(MM)</th>
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
                    }}>MATERIAL DESCRIPTION</th>
                    <th style={{ 
                      padding: '1rem 1.25rem', 
                      fontSize: '0.8125rem', 
                      fontWeight: '700', 
                      color: '#475569',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderBottom: '2px solid #e2e8f0',
                      textAlign: 'left',
                      minWidth: '250px'
                    }}>MATERIAL SPECIFICATION</th>
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
                    }}>MATERIAL HEAT/PLATE NO</th>
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
                      }}>{detail.jointNo}</td>
                      <td style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #f1f5f9' }}>
                        <input
                          type="text"
                          value={detail.drawingNo}
                          onChange={(e) => handleTraceabilityDetailChange(detail.id, 'drawingNo', e.target.value)}
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
                      <td style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #f1f5f9' }}>
                        <input
                          type="text"
                          value={detail.size}
                          onChange={(e) => handleTraceabilityDetailChange(detail.id, 'size', e.target.value)}
                          placeholder="Enter size"
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
                          value={detail.materialDescription}
                          onChange={(e) => handleTraceabilityDetailChange(detail.id, 'materialDescription', e.target.value)}
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
                          value={detail.materialSpecification}
                          onChange={(e) => handleTraceabilityDetailChange(detail.id, 'materialSpecification', e.target.value)}
                          placeholder="Enter specification"
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
                          value={detail.materialHeatPlateNo}
                          onChange={(e) => handleTraceabilityDetailChange(detail.id, 'materialHeatPlateNo', e.target.value)}
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

export default WeldingTraceability;
