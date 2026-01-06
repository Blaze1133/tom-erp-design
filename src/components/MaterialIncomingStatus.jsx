import React, { useEffect, useState, useRef } from 'react';
import Toast from './Toast';
import './Enquiries.css';
import { addStageSubmission } from '../utils/stageSubmissions';

const MaterialIncomingStatus = ({ setCurrentPage, viewOnly = false, viewData = null, returnPageId = '' }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    moduleNo: 'SANYU-CHWP-01',
    poNo: '',
    client: '',
    projectName: '',
    projectNo: '',
    reportNo: '',
    reportDate: '',
    drawingNo: '',
    supplier: '',
    revisionNo: '',
    instrumentUsed: '',
    calibrationDate: '',
    status: 'Accept',
    productNonconformityReportNoDate: '',
    lotConclusion: '',
    totalQty: '',
    acceptedQty: '',
    rejectedQty: '',
    reworkQty: '',
    qcInspectorDate: '',
    qcInspectorSignature: '',
    clientApprovedDate: '',
    clientApprovedSignature: '',
    clientWitnessedDate: '',
    clientWitnessedSignature: ''
  });

  const [inspectionDetails, setInspectionDetails] = useState([
    {
      id: 1,
      sno: '01',
      descriptionOfMaterial: '',
      manufacturer: '',
      poQty: '',
      receiveQty: '',
      millCertificateNo: '',
      heatPlateNo: '',
      receivingResult: 'Accept'
    }
  ]);

  const [supportingDocuments, setSupportingDocuments] = useState([]);

  useEffect(() => {
    if (!viewData) return;
    setFormData(prev => ({ ...prev, ...viewData }));
    if (Array.isArray(viewData.inspectionDetails)) setInspectionDetails(viewData.inspectionDetails);
    if (Array.isArray(viewData.supportingDocuments)) {
      setSupportingDocuments(viewData.supportingDocuments.map((name) => ({ name })));
    }
  }, [viewData]);
  
  // Signature canvas refs
  const qcSignatureRef = useRef(null);
  const clientApprovedSignatureRef = useRef(null);
  const clientWitnessedSignatureRef = useRef(null);
  
  const [isDrawing, setIsDrawing] = useState({
    qc: false,
    clientApproved: false,
    clientWitnessed: false
  });

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
        descriptionOfMaterial: '',
        manufacturer: '',
        poQty: '',
        receiveQty: '',
        millCertificateNo: '',
        heatPlateNo: '',
        receivingResult: 'Accept'
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
      supportingDocuments: supportingDocuments.map(f => f.name)
    };

    // Save to localStorage to update Plant Dashboard
    localStorage.setItem('plantMaterialIncomingStatus', 'Completed');
    localStorage.setItem('plantMaterialIncomingData', JSON.stringify(payload));

    addStageSubmission({
      module: 'Plant',
      stageId: 'plant-material-incoming',
      stageLabel: 'Material Incoming Status',
      payload
    });

    showToast('Material Incoming Status submitted successfully!', 'success');
    
    // Redirect to list view
    setTimeout(() => {
      setCurrentPage('view-material-incoming-statuses');
    }, 1500);
  };

  const startDrawing = (canvasType, e) => {
    const canvas = canvasType === 'qc' ? qcSignatureRef.current : 
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
    const canvas = canvasType === 'qc' ? qcSignatureRef.current : 
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
    const canvas = canvasType === 'qc' ? qcSignatureRef.current : 
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
          <i className="fas fa-clipboard-check"></i>
          <div>
            <h1>Material Incoming Status</h1>
            <div className="detail-subtitle">
              <span>Module No: {formData.moduleNo}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" type="button" onClick={() => setCurrentPage('view-material-incoming-statuses')}>List</button>
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
          {/* Incoming Inspection Header */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Incoming Inspection</h3>
            </div>
            <div className="section-body">
              <div className="detail-grid">
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
                <label>PO NO</label>
                <input
                  type="text"
                  name="poNo"
                  value={formData.poNo}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter PO No"
                />
              </div>

              <div className="detail-field">
                <label>REPORT DATE</label>
                <input
                  type="date"
                  name="reportDate"
                  value={formData.reportDate}
                  onChange={handleInputChange}
                  className="form-control"
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
                <label>SUPPLIER</label>
                <input
                  type="text"
                  name="supplier"
                  value={formData.supplier}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Supplier"
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

          {/* Incoming Inspection Details Table */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Incoming Inspection Details</h3>
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
                    }}>Description of Material</th>
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
                    }}>Manufacturer</th>
                    <th style={{ 
                      padding: '1rem 1.25rem', 
                      fontSize: '0.8125rem', 
                      fontWeight: '700', 
                      color: '#475569',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderBottom: '2px solid #e2e8f0',
                      textAlign: 'center'
                    }}>PO Qty</th>
                    <th style={{ 
                      padding: '1rem 1.25rem', 
                      fontSize: '0.8125rem', 
                      fontWeight: '700', 
                      color: '#475569',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderBottom: '2px solid #e2e8f0',
                      textAlign: 'center'
                    }}>Receive Qty</th>
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
                    }}>Mill Certificate No</th>
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
                    }}>Heat/Plate No</th>
                    <th style={{ 
                      padding: '1rem 1.25rem', 
                      fontSize: '0.8125rem', 
                      fontWeight: '700', 
                      color: '#475569',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderBottom: '2px solid #e2e8f0',
                      textAlign: 'center'
                    }}>Receiving Result</th>
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
                          value={detail.descriptionOfMaterial}
                          onChange={(e) => handleInspectionDetailChange(detail.id, 'descriptionOfMaterial', e.target.value)}
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
                          value={detail.manufacturer}
                          onChange={(e) => handleInspectionDetailChange(detail.id, 'manufacturer', e.target.value)}
                          placeholder="Enter manufacturer"
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
                          type="number"
                          value={detail.poQty}
                          onChange={(e) => handleInspectionDetailChange(detail.id, 'poQty', e.target.value)}
                          placeholder="0"
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
                          type="number"
                          value={detail.receiveQty}
                          onChange={(e) => handleInspectionDetailChange(detail.id, 'receiveQty', e.target.value)}
                          placeholder="0"
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
                          onChange={(e) => handleInspectionDetailChange(detail.id, 'millCertificateNo', e.target.value)}
                          placeholder="Enter certificate no"
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
                          onChange={(e) => handleInspectionDetailChange(detail.id, 'heatPlateNo', e.target.value)}
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
                        <select
                          value={detail.receivingResult}
                          onChange={(e) => handleInspectionDetailChange(detail.id, 'receivingResult', e.target.value)}
                          style={{ 
                            width: '100%', 
                            padding: '0.625rem 0.875rem', 
                            border: '1px solid #e2e8f0', 
                            borderRadius: '6px', 
                            fontSize: '0.875rem',
                            backgroundColor: '#ffffff',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            outline: 'none'
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#4a90e2'}
                          onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        >
                          <option value="Accept">Accept</option>
                          <option value="Reject">Reject</option>
                        </select>
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

          {/* Section */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Inspection Section</h3>
            </div>
            <div className="section-body">
              <div className="detail-grid">
              <div className="detail-field">
                <label>INSTRUMENT USED</label>
                <input
                  type="text"
                  name="instrumentUsed"
                  value={formData.instrumentUsed}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Instrument used"
                />
              </div>

              <div className="detail-field">
                <label>CALIBRATION DATE</label>
                <input
                  type="date"
                  name="calibrationDate"
                  value={formData.calibrationDate}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>

              <div className="detail-field">
                <label>PRODUCT NONCONFORMITY REPORT NO & DATE</label>
                <input
                  type="text"
                  name="productNonconformityReportNoDate"
                  value={formData.productNonconformityReportNoDate}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Report No & Date"
                />
              </div>
              </div>

            <div className="detail-field" style={{ marginTop: '1.5rem' }}>
              <label>STATUS</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="status"
                    value="Accept"
                    checked={formData.status === 'Accept'}
                    onChange={handleInputChange}
                  />
                  <span style={{ fontSize: '0.875rem' }}>Accept</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="status"
                    value="Deviation Accept"
                    checked={formData.status === 'Deviation Accept'}
                    onChange={handleInputChange}
                  />
                  <span style={{ fontSize: '0.875rem' }}>Deviation Accept</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="status"
                    value="Rework"
                    checked={formData.status === 'Rework'}
                    onChange={handleInputChange}
                  />
                  <span style={{ fontSize: '0.875rem' }}>Rework</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="status"
                    value="Reject"
                    checked={formData.status === 'Reject'}
                    onChange={handleInputChange}
                  />
                  <span style={{ fontSize: '0.875rem' }}>Reject</span>
                </label>
              </div>
            </div>
            </div>
          </div>

          {/* Lot Conclusion */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Lot Conclusion</h3>
            </div>
            <div className="section-body">
              <div className="detail-grid">
              <div className="detail-field">
                <label>TOTAL QTY</label>
                <input
                  type="number"
                  name="totalQty"
                  value={formData.totalQty}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Total Qty"
                />
              </div>

              <div className="detail-field">
                <label>ACCEPTED QTY</label>
                <input
                  type="number"
                  name="acceptedQty"
                  value={formData.acceptedQty}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Accepted Qty"
                />
              </div>

              <div className="detail-field">
                <label>REJECTED QTY</label>
                <input
                  type="number"
                  name="rejectedQty"
                  value={formData.rejectedQty}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Rejected Qty"
                />
              </div>

              <div className="detail-field">
                <label>REWORK QTY</label>
                <input
                  type="number"
                  name="reworkQty"
                  value={formData.reworkQty}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter Rework Qty"
                />
              </div>
            </div>
            </div>
          </div>

          {/* QC Inspector */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>QC Inspector</h3>
            </div>
            <div className="section-body">
              <div className="detail-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="detail-field">
                <label>QC INSPECTOR DATE</label>
                <input
                  type="date"
                  name="qcInspectorDate"
                  value={formData.qcInspectorDate}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              </div>

              <div className="detail-field" style={{ marginTop: '1rem' }}>
                <label>QC INSPECTOR SIGNATURE</label>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', maxWidth: '60%' }}>
                  <div style={{ flex: 1 }}>
                    <canvas
                      ref={qcSignatureRef}
                      width={600}
                      height={100}
                      onMouseDown={(e) => startDrawing('qc', e)}
                      onMouseMove={(e) => draw('qc', e)}
                      onMouseUp={() => stopDrawing('qc')}
                      onMouseLeave={() => stopDrawing('qc')}
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
                    onClick={() => clearSignature('qc')}
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
                  name="clientApprovedDate"
                  value={formData.clientApprovedDate}
                  onChange={handleInputChange}
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
                  name="clientWitnessedDate"
                  value={formData.clientWitnessedDate}
                  onChange={handleInputChange}
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

          {/* Supporting Documents */}
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Supporting Document</h3>
            </div>
            <div className="section-body">
              <div className="detail-field">
                <label>UPLOAD DOCUMENTS</label>
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="form-control"
              />
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

export default MaterialIncomingStatus;
