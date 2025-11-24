import React, { useState, useRef } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const UploadMEServices = ({ onPreview, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef(null);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    // Validate file type
    const allowedTypes = ['.xlsx', '.xls', '.csv'];
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    
    if (!allowedTypes.includes(fileExtension)) {
      showToast('Please upload a valid Excel or CSV file', 'error');
      return;
    }

    setUploadedFile(file);
    showToast(`File "${file.name}" uploaded successfully! Click "Preview Data" to continue.`, 'success');
  };

  const handleProcessFile = () => {
    if (!uploadedFile) {
      showToast('Please upload a file first', 'error');
      return;
    }

    setIsProcessing(true);
    
    // Simulate file processing
    setTimeout(() => {
      setIsProcessing(false);
      
      // Sample data that would be parsed from the uploaded file
      const sampleData = [
        {
          id: 1,
          projectName: 'SGA PLSE',
          moduleNo: 'UD1-C1',
          subModuleNo: 'LC1-01',
          batch: 'B1',
          serviceType: 'Trunking',
          size: '100 X 50',
          contractors: 'WLE',
          weightageWithT: '0.00',
          parameter: '0.00',
          weightage: 'C.05'
        },
        {
          id: 2,
          projectName: 'SGA PLSE',
          moduleNo: 'UD1-C1',
          subModuleNo: 'LC1-01',
          batch: 'B1',
          serviceType: 'Trunking',
          size: '225 X 50',
          contractors: 'WLE',
          weightageWithT: '0.00',
          parameter: '0.00',
          weightage: 'C.0275'
        },
        {
          id: 3,
          projectName: 'SGA PLSE',
          moduleNo: 'UD1-C1',
          subModuleNo: 'LC1-01',
          batch: 'B1',
          serviceType: 'Trunking',
          size: '100 X 50',
          contractors: 'WLE',
          weightageWithT: '0.00',
          parameter: '0.00',
          weightage: 'C.05'
        },
        {
          id: 4,
          projectName: 'SGA PLSE',
          moduleNo: 'UD1-C1',
          subModuleNo: 'LC1-01',
          batch: 'B1',
          serviceType: 'Trunking',
          size: '100 X 200',
          contractors: 'WLE',
          weightageWithT: '0.00',
          parameter: '0.00',
          weightage: 'C.05'
        },
        {
          id: 5,
          projectName: 'SGA PLSE',
          moduleNo: 'UD1-C1',
          subModuleNo: 'LC1-01',
          batch: 'B1',
          serviceType: 'Trunking',
          size: '75 X 50',
          contractors: 'WLE',
          weightageWithT: '0.00',
          parameter: '0.00',
          weightage: 'C.0375'
        },
        {
          id: 6,
          projectName: 'SGA PLSE',
          moduleNo: 'UD1-C1',
          subModuleNo: 'LC1-01',
          batch: 'B1',
          serviceType: 'Trunking',
          size: '50 X 50',
          contractors: 'WLE',
          weightageWithT: '0.00',
          parameter: '0.00',
          weightage: 'C.025'
        },
        {
          id: 7,
          projectName: 'SGA PLSE',
          moduleNo: 'UD1-C1',
          subModuleNo: 'LC1-01',
          batch: 'B1',
          serviceType: 'Trunking',
          size: '100 X 100',
          contractors: 'WLE',
          weightageWithT: '0.00',
          parameter: '0.00',
          weightage: 'C.05'
        }
      ];

      if (onPreview) {
        onPreview(sampleData, uploadedFile.name);
      }
    }, 2000);
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-upload" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Upload M&E Services Data</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={handleCancel}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button 
            className="btn btn-primary" 
            onClick={handleProcessFile}
            disabled={!uploadedFile || isProcessing}
          >
            {isProcessing ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                Processing...
              </>
            ) : (
              <>
                <i className="fas fa-eye"></i>
                Preview Data
              </>
            )}
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Upload Section */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-cloud-upload-alt"></i>
            Upload M&E Services File
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <div className="upload-instructions" style={{ marginBottom: '2rem' }}>
            <div className="upload-alert alert-info">
              <i className="fas fa-info-circle"></i>
              <div>
                <strong>File Requirements:</strong>
                <ul style={{ margin: '0.5rem 0 0 1rem', paddingLeft: '1rem' }}>
                  <li>Supported formats: Excel (.xlsx, .xls) or CSV (.csv)</li>
                  <li>Required columns: Project Name, Module No, Sub Module No, Batch, Service Type, Size, Contractors, Weightage with T, Parameter, Weightage</li>
                  <li>Maximum file size: 10MB</li>
                </ul>
              </div>
            </div>
          </div>

          <div 
            className={`upload-dropzone ${dragActive ? 'drag-active' : ''} ${uploadedFile ? 'has-file' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            style={{
              border: `2px dashed ${dragActive ? '#4a90e2' : '#d0d0d0'}`,
              borderRadius: '8px',
              padding: '3rem 2rem',
              textAlign: 'center',
              cursor: 'pointer',
              backgroundColor: dragActive ? '#f0f7ff' : uploadedFile ? '#f8f9fa' : '#fafafa',
              transition: 'all 0.3s ease',
              minHeight: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".xlsx,.xls,.csv"
              onChange={handleFileInput}
              style={{ display: 'none' }}
            />
            
            {uploadedFile ? (
              <div style={{ textAlign: 'center' }}>
                <i className="fas fa-file-excel" style={{ fontSize: '3rem', color: '#28a745', marginBottom: '1rem' }}></i>
                <h3 style={{ color: '#28a745', margin: '0 0 0.5rem 0' }}>File Uploaded Successfully!</h3>
                <p style={{ color: '#666', margin: '0 0 1rem 0' }}>{uploadedFile.name}</p>
                <p style={{ color: '#666', fontSize: '0.875rem' }}>
                  Size: {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
                <button 
                  className="btn btn-secondary"
                  onClick={(e) => {
                    e.stopPropagation();
                    setUploadedFile(null);
                  }}
                  style={{ marginTop: '1rem' }}
                >
                  <i className="fas fa-times"></i>
                  Remove File
                </button>
              </div>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <i className="fas fa-cloud-upload-alt" style={{ fontSize: '3rem', color: '#4a90e2', marginBottom: '1rem' }}></i>
                <h3 style={{ color: '#333', margin: '0 0 0.5rem 0' }}>
                  {dragActive ? 'Drop your file here' : 'Drag & drop your file here'}
                </h3>
                <p style={{ color: '#666', margin: '0 0 1rem 0' }}>
                  or <span style={{ color: '#4a90e2', textDecoration: 'underline' }}>click to browse</span>
                </p>
                <p style={{ color: '#888', fontSize: '0.875rem' }}>
                  Supports Excel (.xlsx, .xls) and CSV (.csv) files
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button 
              className="btn btn-primary" 
              onClick={handleProcessFile}
              disabled={!uploadedFile || isProcessing}
            >
              {isProcessing ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Processing...
                </>
              ) : (
                <>
                  <i className="fas fa-eye"></i>
                  Preview Data
                </>
              )}
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

export default UploadMEServices;
