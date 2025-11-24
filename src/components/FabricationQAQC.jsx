import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const FabricationQAQC = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    moduleNo: 'GERA53-DFMA-10',
    checkListReportNo: 'GERA53-DFMA-10-C/F',
    location: 'GERA53',
    referenceDrawingNo: '',
    instrumentsUsed: '',
    instrumentName: '',
    serialNo: '',
    calibrationDueDate: 'dd-MM-dd yyyy',
    conclusion: '',
    moduleConclusion: 'Accept',
    selectImage: '',
    remarks: '',
    tom: '',
    dateTime: 'dd-MM-dd yyyy HH:mm:ss',
    checkedBy: '',
    signature: '',
    // Additional TOM fields
    tomImages: '',
    client: '',
    witnessedBy: '',
    witnessedByDateTime: 'dd-MM-dd yyyy HH:mm:ss',
    witnessedBySignature: '',
    rto: '',
    approvedBy: '',
    approvedByDateTime: 'dd-MM-dd yyyy HH:mm:ss',
    approvedBySignature: '',
    section2: '',
    projectName2: 'GERA5-2'
  });

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
    // Validate required fields
    if (!formData.referenceDrawingNo || !formData.instrumentsUsed) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    // Store completion status in localStorage to persist across components
    localStorage.setItem('fabricationQAQCStatus', 'Completed');
    
    // Update the module status to completed
    showToast('Fabrication QA & QC completed successfully!', 'success');
    
    // Navigate back to module dashboard after a delay
    setTimeout(() => {
      setCurrentPage('dashboard-module');
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      moduleNo: 'GERA53-DFMA-10',
      checkListReportNo: 'GERA53-DFMA-10-C/F',
      location: 'GERA53',
      referenceDrawingNo: '',
      instrumentsUsed: '',
      instrumentName: '',
      serialNo: '',
      calibrationDueDate: 'dd-MM-dd yyyy',
      conclusion: '',
      moduleConclusion: 'Accept',
      selectImage: '',
      remarks: '',
      tom: '',
      dateTime: 'dd-MM-dd yyyy HH:mm:ss',
      checkedBy: '',
      signature: '',
      // Additional TOM fields
      tomImages: '',
      client: '',
      witnessedBy: '',
      witnessedByDateTime: 'dd-MM-dd yyyy HH:mm:ss',
      witnessedBySignature: '',
      rto: '',
      approvedBy: '',
      approvedByDateTime: 'dd-MM-dd yyyy HH:mm:ss',
      approvedBySignature: '',
      section2: '',
      projectName2: 'GERA5-2'
    });
    showToast('Form reset successfully', 'success');
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-clipboard-check"></i>
          <h1>Fabrication QA & QC</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">Form</button>
          <button className="btn-view-option">QA/QC</button>
          <button className="btn-view-option">History</button>
        </div>
      </div>

      <div className="quotation-container">
        <div className="form-section">
          {/* Basic Information */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '1.5rem' }}>
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
                  fontSize: '0.875rem',
                  backgroundColor: '#f9fafb'
                }}
                readOnly
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Check List / Report No <span style={{ color: '#dc2626' }}>*</span>
              </label>
              <input
                type="text"
                value={formData.checkListReportNo}
                onChange={(e) => handleInputChange('checkListReportNo', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  backgroundColor: '#f9fafb'
                }}
                readOnly
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
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
              readOnly
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Reference Drawing No.
            </label>
            <input
              type="text"
              value={formData.referenceDrawingNo}
              onChange={(e) => handleInputChange('referenceDrawingNo', e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem'
              }}
            />
          </div>

          {/* Instruments Used Header */}
          <div style={{ 
            marginBottom: '2rem', 
            marginTop: '3rem',
            paddingBottom: '1rem', 
            borderBottom: '2px solid #e5e7eb' 
          }}>
            <h2 style={{ 
              margin: 0, 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              color: '#374151' 
            }}>
              Instruments Used
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Instrument Name
              </label>
              <select
                value={formData.instrumentName}
                onChange={(e) => handleInputChange('instrumentName', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem'
                }}
              >
                <option value="">--Select--</option>
                <option value="caliper">Caliper</option>
                <option value="micrometer">Micrometer</option>
                <option value="gauge">Gauge</option>
                <option value="ruler">Ruler</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Serial No.
              </label>
              <input
                type="text"
                value={formData.serialNo}
                onChange={(e) => handleInputChange('serialNo', e.target.value)}
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
                Calibration Due Date
              </label>
              <input
                type="text"
                value={formData.calibrationDueDate}
                onChange={(e) => handleInputChange('calibrationDueDate', e.target.value)}
                placeholder="dd-MM-dd yyyy"
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

          {/* Conclusion Header */}
          <div style={{ 
            marginBottom: '2rem', 
            marginTop: '3rem',
            paddingBottom: '1rem', 
            borderBottom: '2px solid #e5e7eb' 
          }}>
            <h2 style={{ 
              margin: 0, 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              color: '#374151' 
            }}>
              Conclusion
            </h2>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <textarea
              value={formData.conclusion}
              onChange={(e) => handleInputChange('conclusion', e.target.value)}
              rows={4}
              placeholder="Enter conclusion details..."
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem',
                resize: 'vertical'
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Module Conclusion
              </label>
              <select
                value={formData.moduleConclusion}
                onChange={(e) => handleInputChange('moduleConclusion', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem'
                }}
              >
                <option value="Accept">Accept</option>
                <option value="Reject">Reject</option>
                <option value="Conditional Accept">Conditional Accept</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Select Image
              </label>
              <div style={{
                border: '2px dashed #d1d5db',
                borderRadius: '6px',
                padding: '1rem',
                textAlign: 'center',
                backgroundColor: '#f9fafb'
              }}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleInputChange('selectImage', e.target.files[0])}
                  style={{ display: 'none' }}
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#4f46e5',
                    color: 'white',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <i className="fas fa-upload"></i>
                  Select Image
                </label>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Remarks
            </label>
            <textarea
              value={formData.remarks}
              onChange={(e) => handleInputChange('remarks', e.target.value)}
              rows={4}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem',
                resize: 'vertical'
              }}
            />
          </div>

          {/* TOM Section */}
          <div style={{ 
            marginBottom: '2rem', 
            marginTop: '3rem',
            paddingBottom: '1rem', 
            borderBottom: '2px solid #e5e7eb' 
          }}>
            <h2 style={{ 
              margin: 0, 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              color: '#374151' 
            }}>
              TOM
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Date-Time
              </label>
              <input
                type="text"
                value={formData.dateTime}
                onChange={(e) => handleInputChange('dateTime', e.target.value)}
                placeholder="dd-MM-dd yyyy HH:mm:ss"
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

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Checked By
            </label>
            <select
              value={formData.checkedBy}
              onChange={(e) => handleInputChange('checkedBy', e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem'
              }}
            >
              <option value="">Draw your signature</option>
              <option value="signature1">Signature 1</option>
              <option value="signature2">Signature 2</option>
            </select>
          </div>

          {/* Signature Area */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              padding: '2rem',
              backgroundColor: '#f9fafb',
              textAlign: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                fontSize: '0.75rem',
                color: '#10b981',
                cursor: 'pointer'
              }}>
                [Clear]
              </div>
              <p style={{ margin: '0 0 1rem 0', color: '#6b7280', fontSize: '0.875rem' }}>Draw your signature</p>
              <div style={{
                height: '2px',
                backgroundColor: '#374151',
                width: '60%',
                margin: '0 auto'
              }}></div>
            </div>
          </div>

          {/* TOM Images */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              TOM Images
            </label>
            <select
              value={formData.tomImages}
              onChange={(e) => handleInputChange('tomImages', e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem'
              }}
            >
              <option value="">Select Image</option>
              <option value="image1">Image 1</option>
              <option value="image2">Image 2</option>
            </select>
          </div>

          {/* Client Section Header */}
          <div style={{ 
            marginBottom: '2rem', 
            marginTop: '3rem',
            paddingBottom: '1rem', 
            borderBottom: '2px solid #e5e7eb' 
          }}>
            <h2 style={{ 
              margin: 0, 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              color: '#374151' 
            }}>
              Client
            </h2>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Witnessed by
            </label>
            <select
              value={formData.witnessedBy}
              onChange={(e) => handleInputChange('witnessedBy', e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem'
              }}
            >
              <option value="">Draw your signature</option>
              <option value="witness1">Witness 1</option>
              <option value="witness2">Witness 2</option>
            </select>
          </div>

          {/* Witnessed By Signature Area */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              padding: '2rem',
              backgroundColor: '#f9fafb',
              textAlign: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                fontSize: '0.75rem',
                color: '#10b981',
                cursor: 'pointer'
              }}>
                [Clear]
              </div>
              <p style={{ margin: '0 0 1rem 0', color: '#6b7280', fontSize: '0.875rem' }}>Draw your signature</p>
              <div style={{
                height: '2px',
                backgroundColor: '#374151',
                width: '60%',
                margin: '0 auto'
              }}></div>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Date-Time
            </label>
            <input
              type="text"
              value={formData.witnessedByDateTime}
              onChange={(e) => handleInputChange('witnessedByDateTime', e.target.value)}
              placeholder="dd-MM-dd yyyy HH:mm:ss"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              RTO
            </label>
            <input
              type="text"
              value={formData.rto}
              onChange={(e) => handleInputChange('rto', e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Approved by
            </label>
            <select
              value={formData.approvedBy}
              onChange={(e) => handleInputChange('approvedBy', e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem'
              }}
            >
              <option value="">Draw your signature</option>
              <option value="approver1">Approver 1</option>
              <option value="approver2">Approver 2</option>
            </select>
          </div>

          {/* Approved By Signature Area */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              padding: '2rem',
              backgroundColor: '#f9fafb',
              textAlign: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                fontSize: '0.75rem',
                color: '#10b981',
                cursor: 'pointer'
              }}>
                [Clear]
              </div>
              <p style={{ margin: '0 0 1rem 0', color: '#6b7280', fontSize: '0.875rem' }}>Draw your signature</p>
              <div style={{
                height: '2px',
                backgroundColor: '#374151',
                width: '60%',
                margin: '0 auto'
              }}></div>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Date-Time
            </label>
            <input
              type="text"
              value={formData.approvedByDateTime}
              onChange={(e) => handleInputChange('approvedByDateTime', e.target.value)}
              placeholder="dd-MM-dd yyyy HH:mm:ss"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem'
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Section
              </label>
              <input
                type="text"
                value={formData.section2}
                onChange={(e) => handleInputChange('section2', e.target.value)}
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
                Project Name
              </label>
              <input
                type="text"
                value={formData.projectName2}
                onChange={(e) => handleInputChange('projectName2', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  backgroundColor: '#f9fafb'
                }}
                readOnly
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <button 
              onClick={handleSubmit}
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <i className="fas fa-check"></i>
              Submit
            </button>
            <button 
              onClick={handleReset}
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
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

export default FabricationQAQC;
