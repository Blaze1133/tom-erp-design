import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const FrameFabrication = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    module: '',
    projectId: '25-000002',
    moduleNo: 'L14-DFMA-016',
    projectName: 'Integrated Transport Hub',
    clientName: '',
    location: '',
    checkListNo: '',
    dateOfInspection: '29-Oct-2025',
    descriptionContents: '',
    // Checklist items
    pmuRackDimensionalVerification: { yes: false, no: true, remarks: '' },
    materialsBrandGrade: { yes: false, no: true, remarks: '' },
    allEdgesDeburred: { yes: false, no: true, remarks: '' },
    boltTorqueVerification: { yes: false, no: true, remarks: '' },
    frameTaggingVerification: { yes: false, no: true, remarks: '' },
    meServicesInstalled: { yes: false, no: true, remarks: '' },
    modulePointVerification: { yes: false, no: true, remarks: '' },
    // Additional fields
    comments: '',
    photo: '',
    name1: '',
    designation1: '',
    checkedBy: '',
    dateTime1: 'dd-MM-yyyy HH:mm:ss',
    name2: '',
    designation2: '',
    company1: '',
    witnessedBy: '',
    dateTime2: 'dd-MM-yyyy HH:mm:ss',
    name3: '',
    designation3: '',
    company2: '',
    approvedBy: '',
    dateTime3: 'dd-MM-yyyy HH:mm:ss',
    section: '',
    instrumentUsed: '0459-24-2M',
    calibrationDate: '19-Mar-2025'
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

  const handleChecklistChange = (item, field, value) => {
    setFormData(prev => ({
      ...prev,
      [item]: {
        ...prev[item],
        [field]: value
      }
    }));
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.clientName || !formData.checkListNo) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    // Store completion status in localStorage to persist across components
    localStorage.setItem('fabricationStatus', 'Completed');
    
    // Update the module status to completed
    showToast('Frame Fabrication completed successfully!', 'success');
    
    // Navigate back to module dashboard after a delay
    setTimeout(() => {
      setCurrentPage('dashboard-module');
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      module: '',
      projectId: '25-000002',
      moduleNo: 'L14-DFMA-016',
      projectName: 'Integrated Transport Hub',
      clientName: '',
      location: '',
      checkListNo: '',
      dateOfInspection: '29-Oct-2025',
      descriptionContents: '',
      pmuRackDimensionalVerification: { yes: false, no: true, remarks: '' },
      materialsBrandGrade: { yes: false, no: true, remarks: '' },
      allEdgesDeburred: { yes: false, no: true, remarks: '' },
      boltTorqueVerification: { yes: false, no: true, remarks: '' },
      frameTaggingVerification: { yes: false, no: true, remarks: '' },
      meServicesInstalled: { yes: false, no: true, remarks: '' },
      modulePointVerification: { yes: false, no: true, remarks: '' },
      comments: '',
      photo: '',
      name1: '',
      designation1: '',
      checkedBy: '',
      dateTime1: 'dd-MM-yyyy HH:mm:ss',
      name2: '',
      designation2: '',
      company1: '',
      witnessedBy: '',
      dateTime2: 'dd-MM-yyyy HH:mm:ss',
      name3: '',
      designation3: '',
      company2: '',
      approvedBy: '',
      dateTime3: 'dd-MM-yyyy HH:mm:ss',
      section: '',
      instrumentUsed: '0459-24-2M',
      calibrationDate: '19-Mar-2025'
    });
    showToast('Form reset successfully', 'success');
  };

  const checklistItems = [
    { key: 'pmuRackDimensionalVerification', label: 'PMU Rack Dimensional Verification' },
    { key: 'materialsBrandGrade', label: 'Materials (Brand/Grade) are of approved type' },
    { key: 'allEdgesDeburred', label: 'All edges are deburred and galvanized applied' },
    { key: 'boltTorqueVerification', label: 'Bolt Torque Verification' },
    { key: 'frameTaggingVerification', label: 'Frame Tagging Verification' },
    { key: 'meServicesInstalled', label: 'M&E Services Installed as per approved drawing' },
    { key: 'modulePointVerification', label: 'Module point Verification' }
  ];

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-industry"></i>
          <h1>Frame Fabrication</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">Form</button>
          <button className="btn-view-option">Checklist</button>
          <button className="btn-view-option">History</button>
        </div>
      </div>

      <div className="quotation-container">
        <div className="form-section">
          {/* Module Header */}
          <div style={{ 
            marginBottom: '2rem', 
            paddingBottom: '1rem', 
            borderBottom: '2px solid #e5e7eb' 
          }}>
            <h2 style={{ 
              margin: 0, 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              color: '#374151' 
            }}>
              Module
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Project ID
              </label>
              <input
                type="text"
                value={formData.projectId}
                onChange={(e) => handleInputChange('projectId', e.target.value)}
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
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Project Name <span style={{ color: '#dc2626' }}>*</span>
              </label>
              <input
                type="text"
                value={formData.projectName}
                onChange={(e) => handleInputChange('projectName', e.target.value)}
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

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '1rem' }}>
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
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Location <span style={{ color: '#dc2626' }}>*</span>
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
                  fontSize: '0.875rem'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Client Name
              </label>
              <input
                type="text"
                value={formData.clientName}
                onChange={(e) => handleInputChange('clientName', e.target.value)}
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

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Check List No <span style={{ color: '#dc2626' }}>*</span>
              </label>
              <input
                type="text"
                value={formData.checkListNo}
                onChange={(e) => handleInputChange('checkListNo', e.target.value)}
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

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Date of Inspection <span style={{ color: '#dc2626' }}>*</span>
            </label>
            <input
              type="text"
              value={formData.dateOfInspection}
              onChange={(e) => handleInputChange('dateOfInspection', e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem'
              }}
            />
          </div>

          {/* Description Comply Header */}
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
              Description Comply
            </h2>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <textarea
              value={formData.descriptionContents}
              onChange={(e) => handleInputChange('descriptionContents', e.target.value)}
              rows={4}
              placeholder="Enter description details..."
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

          {/* Checklist Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: '600' }}>
              Inspection Checklist
            </h3>
            
            <div style={{
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid #e5e7eb'
            }}>
              {/* Header */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '2fr 80px 80px 1fr',
                gap: '1rem',
                padding: '1rem',
                backgroundColor: '#e5e7eb',
                fontWeight: '600',
                fontSize: '0.875rem'
              }}>
                <div>Item</div>
                <div style={{ textAlign: 'center' }}>Yes</div>
                <div style={{ textAlign: 'center' }}>No</div>
                <div>Remarks</div>
              </div>

              {/* Checklist Items */}
              {checklistItems.map((item, index) => (
                <div
                  key={item.key}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 80px 80px 1fr',
                    gap: '1rem',
                    padding: '1rem',
                    borderBottom: index < checklistItems.length - 1 ? '1px solid #e5e7eb' : 'none',
                    backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8f9fa'
                  }}
                >
                  <div style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                    {item.label}
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <input
                      type="radio"
                      name={item.key}
                      checked={formData[item.key]?.yes || false}
                      onChange={() => handleChecklistChange(item.key, 'yes', true)}
                      style={{ transform: 'scale(1.2)' }}
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <input
                      type="radio"
                      name={item.key}
                      checked={formData[item.key]?.no || false}
                      onChange={() => handleChecklistChange(item.key, 'no', true)}
                      style={{ transform: 'scale(1.2)' }}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={formData[item.key]?.remarks || ''}
                      onChange={(e) => handleChecklistChange(item.key, 'remarks', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '0.875rem'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comments and Photo Section */}
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
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Photo
            </label>
            <div style={{
              border: '2px dashed #d1d5db',
              borderRadius: '6px',
              padding: '2rem',
              textAlign: 'center',
              backgroundColor: '#f9fafb'
            }}>
              <i className="fas fa-camera" style={{ fontSize: '2rem', color: '#9ca3af', marginBottom: '1rem' }}></i>
              <p style={{ margin: '0 0 1rem 0', color: '#6b7280', fontSize: '0.875rem' }}>Select Image</p>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleInputChange('photo', e.target.files[0])}
                style={{ display: 'none' }}
                id="photo-upload"
              />
              <label
                htmlFor="photo-upload"
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#4f46e5',
                  color: 'white',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >
                Choose File
              </label>
            </div>
          </div>

          {/* Signature Sections */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Name
              </label>
              <input
                type="text"
                value={formData.name1}
                onChange={(e) => handleInputChange('name1', e.target.value)}
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
                Designation
              </label>
              <input
                type="text"
                value={formData.designation1}
                onChange={(e) => handleInputChange('designation1', e.target.value)}
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

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Checked By
            </label>
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
                Clear
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

          {/* Date-Time and Additional Fields */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Date-Time
              </label>
              <input
                type="text"
                value={formData.dateTime1}
                onChange={(e) => handleInputChange('dateTime1', e.target.value)}
                placeholder="dd-MM-yyyy HH:mm:ss"
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
                Name
              </label>
              <input
                type="text"
                value={formData.name2}
                onChange={(e) => handleInputChange('name2', e.target.value)}
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
                Designation
              </label>
              <input
                type="text"
                value={formData.designation2}
                onChange={(e) => handleInputChange('designation2', e.target.value)}
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

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Company
              </label>
              <input
                type="text"
                value={formData.company1}
                onChange={(e) => handleInputChange('company1', e.target.value)}
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

          {/* Witnessed By Section */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Witnessed By
            </label>
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
                Clear
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

          {/* More Date-Time Fields */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Date-Time
              </label>
              <input
                type="text"
                value={formData.dateTime2}
                onChange={(e) => handleInputChange('dateTime2', e.target.value)}
                placeholder="dd-MM-yyyy HH:mm:ss"
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
                Name
              </label>
              <input
                type="text"
                value={formData.name3}
                onChange={(e) => handleInputChange('name3', e.target.value)}
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
                Designation
              </label>
              <input
                type="text"
                value={formData.designation3}
                onChange={(e) => handleInputChange('designation3', e.target.value)}
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

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Company
              </label>
              <input
                type="text"
                value={formData.company2}
                onChange={(e) => handleInputChange('company2', e.target.value)}
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

          {/* Approved By Section */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Approved By
            </label>
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
                Clear
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

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Date-Time
            </label>
            <input
              type="text"
              value={formData.dateTime3}
              onChange={(e) => handleInputChange('dateTime3', e.target.value)}
              placeholder="dd-MM-yyyy HH:mm:ss"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
              Section
            </label>
            <input
              type="text"
              value={formData.section}
              onChange={(e) => handleInputChange('section', e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem'
              }}
            />
          </div>

          {/* Instrument and Calibration */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Instrument used
              </label>
              <input
                type="text"
                value={formData.instrumentUsed}
                onChange={(e) => handleInputChange('instrumentUsed', e.target.value)}
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
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem' }}>
                Calibration Date
              </label>
              <input
                type="text"
                value={formData.calibrationDate}
                onChange={(e) => handleInputChange('calibrationDate', e.target.value)}
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

export default FrameFabrication;
