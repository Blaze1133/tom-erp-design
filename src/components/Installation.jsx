import React, { useState, useRef } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const Installation = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    moduleNo: 'L14-DFMA-015',
    checkListNumber: '',
    dateOfInstallation: '',
    location: 'Integrated Transport Hub',
    // Description checklist items
    locationOfModule: { yes: false, no: false, remarks: '' },
    bottomPositionFromPFL: { yes: false, no: false, remarks: '' },
    frameTaggingVerification: { yes: false, no: false, remarks: '' },
    modulePointVerification: { yes: false, no: false, remarks: '' },
    anchorRodFromBottomEdge: { yes: false, no: false, remarks: '' },
    // Other fields
    comments: '',
    photo: null,
    checkedBy: '',
    checkedByDate: '',
    witnessedBy: '',
    witnessedByDate: '',
    approvedBy: '',
    approvedByDate: ''
  });

  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [photoPreview, setPhotoPreview] = useState(null);
  const [signatures, setSignatures] = useState({
    checkedBy: null,
    witnessedBy: null,
    approvedBy: null
  });

  const checkedByCanvasRef = useRef(null);
  const witnessedByCanvasRef = useRef(null);
  const approvedByCanvasRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState({
    checkedBy: false,
    witnessedBy: false,
    approvedBy: false
  });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const startDrawing = (canvasRef, type) => (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    setIsDrawing(prev => ({ ...prev, [type]: true }));
  };

  const draw = (canvasRef, type) => (e) => {
    if (!isDrawing[type]) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.stroke();
  };

  const stopDrawing = (type) => () => {
    setIsDrawing(prev => ({ ...prev, [type]: false }));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleChecklistChange = (item, field, value) => {
    setFormData(prev => ({
      ...prev,
      [item]: {
        ...prev[item],
        [field]: value,
        // If yes is selected, uncheck no and vice versa
        ...(field === 'yes' && value ? { no: false } : {}),
        ...(field === 'no' && value ? { yes: false } : {})
      }
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        photo: file
      }));
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearSignature = (canvasRef, type) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSignatures(prev => ({
      ...prev,
      [type]: null
    }));
  };

  const handleSubmit = () => {
    // Validation
    if (!formData.moduleNo) {
      showToast('Please enter Module No', 'error');
      return;
    }
    
    if (!formData.checkListNumber) {
      showToast('Please enter Check List Number', 'error');
      return;
    }

    if (!formData.dateOfInstallation) {
      showToast('Please select Date of Installation', 'error');
      return;
    }

    // Save to localStorage
    localStorage.setItem('installationStatus', 'Completed');
    localStorage.setItem('installationCompletedOn', formData.dateOfInstallation);
    
    showToast('Installation details saved successfully!', 'success');
    
    setTimeout(() => {
      setCurrentPage('dashboard-module');
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      moduleNo: 'L14-DFMA-015',
      checkListNumber: '',
      dateOfInstallation: '',
      location: 'Integrated Transport Hub',
      locationOfModule: { yes: false, no: false, remarks: '' },
      bottomPositionFromPFL: { yes: false, no: false, remarks: '' },
      frameTaggingVerification: { yes: false, no: false, remarks: '' },
      modulePointVerification: { yes: false, no: false, remarks: '' },
      anchorRodFromBottomEdge: { yes: false, no: false, remarks: '' },
      comments: '',
      photo: null,
      checkedBy: '',
      checkedByDate: '',
      witnessedBy: '',
      witnessedByDate: '',
      approvedBy: '',
      approvedByDate: ''
    });
    setPhotoPreview(null);
    setSignatures({
      checkedBy: null,
      witnessedBy: null,
      approvedBy: null
    });
    showToast('Form reset successfully', 'info');
  };

  const handleBack = () => {
    setCurrentPage('dashboard-module');
  };

  const checklistItems = [
    { key: 'locationOfModule', label: 'Location Of the Module' },
    { key: 'bottomPositionFromPFL', label: 'Bottom Position of the Module From PFL' },
    { key: 'frameTaggingVerification', label: 'Frame Tagging Verification' },
    { key: 'modulePointVerification', label: 'Module point Verification' },
    { key: 'anchorRodFromBottomEdge', label: 'Anchor Rod 9 mm off at the bottom edge' }
  ];

  return (
    <div className="enquiries-list">
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: '', type: '' })}
        />
      )}

      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-tools"></i>
          <h1>Installation</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">Form</button>
          <button className="btn-view-option">History</button>
        </div>
      </div>

      <div className="quotation-container">
        <div className="form-section">
          {/* Basic Information */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Module No <span style={{ color: '#dc2626' }}>*</span>
              </label>
              <input
                type="text"
                value={formData.moduleNo}
                onChange={(e) => handleInputChange('moduleNo', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem'
                }}
                placeholder="Enter Module No"
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Check List Number <span style={{ color: '#dc2626' }}>*</span>
              </label>
              <input
                type="text"
                value={formData.checkListNumber}
                onChange={(e) => handleInputChange('checkListNumber', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem'
                }}
                placeholder="Enter Check List Number"
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Date of Installation <span style={{ color: '#dc2626' }}>*</span>
              </label>
              <input
                type="date"
                value={formData.dateOfInstallation}
                onChange={(e) => handleInputChange('dateOfInstallation', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  backgroundColor: '#f9fafb'
                }}
                placeholder="Enter Location"
              />
            </div>
          </div>

          {/* Description Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              fontSize: '1rem', 
              fontWeight: '600', 
              marginBottom: '1rem',
              color: '#374151',
              borderBottom: '2px solid #e5e7eb',
              paddingBottom: '0.5rem'
            }}>
              Description
            </h3>

            <div style={{ 
              border: '1px solid #e5e7eb', 
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <th style={{ 
                      padding: '0.75rem', 
                      textAlign: 'left', 
                      fontWeight: '600', 
                      fontSize: '0.875rem',
                      borderBottom: '1px solid #e5e7eb',
                      width: '40%'
                    }}>Item</th>
                    <th style={{ 
                      padding: '0.75rem', 
                      textAlign: 'center', 
                      fontWeight: '600', 
                      fontSize: '0.875rem',
                      borderBottom: '1px solid #e5e7eb',
                      width: '10%'
                    }}>Yes</th>
                    <th style={{ 
                      padding: '0.75rem', 
                      textAlign: 'center', 
                      fontWeight: '600', 
                      fontSize: '0.875rem',
                      borderBottom: '1px solid #e5e7eb',
                      width: '10%'
                    }}>No</th>
                    <th style={{ 
                      padding: '0.75rem', 
                      textAlign: 'left', 
                      fontWeight: '600', 
                      fontSize: '0.875rem',
                      borderBottom: '1px solid #e5e7eb',
                      width: '40%'
                    }}>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {checklistItems.map((item, index) => (
                    <tr key={item.key} style={{ 
                      borderBottom: index < checklistItems.length - 1 ? '1px solid #e5e7eb' : 'none'
                    }}>
                      <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>
                        {item.label}
                      </td>
                      <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={formData[item.key].yes}
                          onChange={(e) => handleChecklistChange(item.key, 'yes', e.target.checked)}
                          style={{ 
                            width: '18px', 
                            height: '18px', 
                            cursor: 'pointer',
                            accentColor: '#4a90e2'
                          }}
                        />
                      </td>
                      <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={formData[item.key].no}
                          onChange={(e) => handleChecklistChange(item.key, 'no', e.target.checked)}
                          style={{ 
                            width: '18px', 
                            height: '18px', 
                            cursor: 'pointer',
                            accentColor: '#dc2626'
                          }}
                        />
                      </td>
                      <td style={{ padding: '0.75rem' }}>
                        <input
                          type="text"
                          value={formData[item.key].remarks}
                          onChange={(e) => handleChecklistChange(item.key, 'remarks', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '0.5rem',
                            border: '1px solid #d1d5db',
                            borderRadius: '4px',
                            fontSize: '0.875rem'
                          }}
                          placeholder="Enter remarks"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Comments */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Comments
            </label>
            <textarea
              value={formData.comments}
              onChange={(e) => handleInputChange('comments', e.target.value)}
              rows={4}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem',
                resize: 'vertical'
              }}
              placeholder="Enter comments"
            />
          </div>

          {/* Photo Upload */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Photo
            </label>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <input
                type="file"
                id="photo"
                accept="image/*"
                onChange={handlePhotoChange}
                style={{ display: 'none' }}
              />
              <label 
                htmlFor="photo" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  background: '#4a90e2',
                  color: 'white',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  border: 'none'
                }}
              >
                <i className="fas fa-cloud-upload-alt"></i>
                Select Image
              </label>
              {photoPreview && (
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <img 
                    src={photoPreview} 
                    alt="Preview" 
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: '6px',
                      border: '2px solid #e5e7eb'
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, photo: null }));
                      setPhotoPreview(null);
                    }}
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      background: '#dc2626',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      fontSize: '0.75rem'
                    }}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Signatures Section */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr 1fr', 
            gap: '2rem', 
            marginBottom: '2rem',
            paddingTop: '2rem',
            borderTop: '2px solid #e5e7eb'
          }}>
            {/* Checked By */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Checked By
              </label>
              <div style={{ position: 'relative', marginBottom: '0.5rem' }}>
                <canvas
                  ref={checkedByCanvasRef}
                  width={300}
                  height={60}
                  onMouseDown={startDrawing(checkedByCanvasRef, 'checkedBy')}
                  onMouseMove={draw(checkedByCanvasRef, 'checkedBy')}
                  onMouseUp={stopDrawing('checkedBy')}
                  onMouseLeave={stopDrawing('checkedBy')}
                  style={{
                    width: '100%',
                    height: '60px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    cursor: 'crosshair',
                    backgroundColor: '#fff'
                  }}
                />
                <button
                  type="button"
                  onClick={() => clearSignature(checkedByCanvasRef, 'checkedBy')}
                  style={{
                    position: 'absolute',
                    top: '5px',
                    right: '5px',
                    padding: '0.25rem 0.5rem',
                    background: '#dc2626',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    cursor: 'pointer'
                  }}
                >
                  Clear
                </button>
              </div>
              <input
                type="date"
                value={formData.checkedByDate}
                onChange={(e) => handleInputChange('checkedByDate', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem'
                }}
              />
            </div>

            {/* Witnessed By */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Witnessed By
              </label>
              <div style={{ position: 'relative', marginBottom: '0.5rem' }}>
                <canvas
                  ref={witnessedByCanvasRef}
                  width={300}
                  height={60}
                  onMouseDown={startDrawing(witnessedByCanvasRef, 'witnessedBy')}
                  onMouseMove={draw(witnessedByCanvasRef, 'witnessedBy')}
                  onMouseUp={stopDrawing('witnessedBy')}
                  onMouseLeave={stopDrawing('witnessedBy')}
                  style={{
                    width: '100%',
                    height: '60px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    cursor: 'crosshair',
                    backgroundColor: '#fff'
                  }}
                />
                <button
                  type="button"
                  onClick={() => clearSignature(witnessedByCanvasRef, 'witnessedBy')}
                  style={{
                    position: 'absolute',
                    top: '5px',
                    right: '5px',
                    padding: '0.25rem 0.5rem',
                    background: '#dc2626',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    cursor: 'pointer'
                  }}
                >
                  Clear
                </button>
              </div>
              <input
                type="date"
                value={formData.witnessedByDate}
                onChange={(e) => handleInputChange('witnessedByDate', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem'
                }}
              />
            </div>

            {/* Approved By */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Approved By
              </label>
              <div style={{ position: 'relative', marginBottom: '0.5rem' }}>
                <canvas
                  ref={approvedByCanvasRef}
                  width={300}
                  height={60}
                  onMouseDown={startDrawing(approvedByCanvasRef, 'approvedBy')}
                  onMouseMove={draw(approvedByCanvasRef, 'approvedBy')}
                  onMouseUp={stopDrawing('approvedBy')}
                  onMouseLeave={stopDrawing('approvedBy')}
                  style={{
                    width: '100%',
                    height: '60px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    cursor: 'crosshair',
                    backgroundColor: '#fff'
                  }}
                />
                <button
                  type="button"
                  onClick={() => clearSignature(approvedByCanvasRef, 'approvedBy')}
                  style={{
                    position: 'absolute',
                    top: '5px',
                    right: '5px',
                    padding: '0.25rem 0.5rem',
                    background: '#dc2626',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    cursor: 'pointer'
                  }}
                >
                  Clear
                </button>
              </div>
              <input
                type="date"
                value={formData.approvedByDate}
                onChange={(e) => handleInputChange('approvedByDate', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem'
                }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'flex-start',
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '2px solid #e5e7eb'
          }}>
            <button
              onClick={handleSubmit}
              style={{
                padding: '0.75rem 2rem',
                background: '#4a90e2',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <i className="fas fa-save"></i>
              Submit
            </button>
            <button
              onClick={handleReset}
              style={{
                padding: '0.75rem 2rem',
                background: '#6b7280',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <i className="fas fa-redo"></i>
              Reset
            </button>
            <button
              onClick={handleBack}
              style={{
                padding: '0.75rem 2rem',
                background: 'white',
                color: '#374151',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <i className="fas fa-times"></i>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
