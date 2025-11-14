import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreateYardData = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [uploadStep, setUploadStep] = useState('upload'); // upload, validate, preview, error
  const [uploadedFile, setUploadedFile] = useState(null);
  const [validationErrors, setValidationErrors] = useState([]);
  const [parsedData, setParsedData] = useState([]);

  const projects = [
    '20-0052 Fortis Construction Pte. Ltd',
    '21-0089 Marina Bay Project',
    '22-0134 Sentosa Development'
  ];

  const shiftTypes = ['Day', 'Night'];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      // Simulate file parsing and validation
      setTimeout(() => {
        simulateFileValidation(file);
      }, 1000);
    }
  };

  const simulateFileValidation = (file) => {
    // Simulate parsing data from file
    const mockData = [
      {
        id: 1,
        employeeName: 'John Doe',
        employeeId: 'EMP001',
        companyName: 'Tech Onshore MEP Prefabricators Pte Ltd',
        workPermitNo: 'WP123456',
        finNo: 'F1234567A',
        dateIn: '2025-04-01',
        dateOut: '2025-04-01',
        timeIn: '08:00',
        timeOut: '18:00',
        project: '20-0052 Fortis Construction Pte. Ltd',
        shiftType: 'Day',
        recordType: 'In',
        status: 'Not Posted',
        valid: true
      },
      {
        id: 2,
        employeeName: 'Ali Khan',
        employeeId: 'EMP002',
        companyName: 'Tech Marine Offshore (S) Pte Ltd',
        workPermitNo: 'WP789012',
        finNo: 'F7890123B',
        dateIn: '2025-04-01',
        dateOut: '2025-04-01',
        timeIn: '08:30',
        timeOut: '17:30',
        project: '21-0089 Marina Bay Project',
        shiftType: 'Day',
        recordType: 'In',
        status: 'Not Posted',
        valid: false,
        error: 'Work Permit Number not found in Employee Master'
      },
      {
        id: 3,
        employeeName: 'Sarah Lee',
        employeeId: 'EMP003',
        companyName: 'TOM Offshore Marine Engineering Pte Ltd',
        workPermitNo: 'WP345678',
        finNo: 'F3456789C',
        dateIn: '2025-04-01',
        dateOut: '2025-04-01',
        timeIn: '20:00',
        timeOut: '06:00',
        project: '22-0134 Sentosa Development',
        shiftType: 'Night',
        recordType: 'In',
        status: 'Not Posted',
        valid: true
      }
    ];

    setParsedData(mockData);
    
    const errors = mockData.filter(item => !item.valid);
    if (errors.length > 0) {
      setValidationErrors(errors);
      setUploadStep('error');
      showToast(`Validation failed: ${errors.length} error(s) found`, 'error');
    } else {
      setUploadStep('preview');
      showToast('File validated successfully', 'success');
    }
  };

  const handleCorrectErrors = () => {
    // Allow user to correct errors inline
    setUploadStep('validate');
  };

  const handleReUpload = () => {
    setUploadedFile(null);
    setParsedData([]);
    setValidationErrors([]);
    setUploadStep('upload');
  };

  const handlePreview = () => {
    setUploadStep('preview');
  };

  const handleSubmit = () => {
    showToast('Yard data successfully submitted to database', 'success');
    // Reset form
    setTimeout(() => {
      handleReUpload();
    }, 2000);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      handleReUpload();
      showToast('Import cancelled', 'info');
    }
  };


  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-file-upload"></i>
          <h1>Yard Data Preparation</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option" onClick={() => setCurrentPage && setCurrentPage('view-yard-data')}>List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>STEP</label>
          <select className="form-control" style={{ width: '250px' }} value={uploadStep} disabled>
            <option value="upload">Upload File</option>
            <option value="error">Validation Errors</option>
            <option value="preview">Preview Data</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-secondary" onClick={handleCancel} style={{ marginRight: '10px' }}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          {uploadStep === 'preview' && (
            <button className="btn btn-primary" onClick={handleSubmit}>
              <i className="fas fa-check"></i>
              Submit
            </button>
          )}
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button className="btn-icon" title="Edit View">
            <i className="fas fa-edit"></i>
            <span>EDIT</span>
          </button>
          <button className="btn-icon" title="Delete">
            <i className="fas fa-times"></i>
          </button>
          <button className="btn-icon" title="Export">
            <i className="fas fa-file-export"></i>
          </button>
          <button className="btn-icon" title="Print">
            <i className="fas fa-print"></i>
          </button>
        </div>
        <div className="filter-right-group">
          <div className="quick-sort">
            <label>QUICK SORT</label>
            <select className="form-control">
              <option>All Records</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {parsedData.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container" style={{ padding: '30px' }}>
        {/* Upload Step */}
        {uploadStep === 'upload' && (
          <div>
            <div className="form-section">
              <h2 className="section-title">Import File</h2>
              <p className="section-subtitle">Upload PDF or Excel file containing yard attendance data</p>
            </div>
            <div className="upload-zone">
              <input
                type="file"
                id="fileUpload"
                accept=".pdf,.xlsx,.xls"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
              <label htmlFor="fileUpload" className="upload-label">
                <i className="fas fa-cloud-upload-alt" style={{ fontSize: '48px', color: '#2196F3', marginBottom: '20px', display: 'block' }}></i>
                <h3>Click to upload or drag and drop</h3>
                <p>PDF or Excel files (Max 10MB)</p>
              </label>
            </div>
            
            <div className="info-box info">
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <i className="fas fa-info-circle" style={{ marginRight: '15px', marginTop: '3px' }}></i>
                <div>
                  <strong>File Requirements:</strong>
                  <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                    <li>Must contain: Employee Name, Work Permit/FIN Number, Date, Time In/Out, Project</li>
                    <li>For Excel: Direct cell reading</li>
                    <li>For PDF: OCR parsing for tabular data</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Error Handling Step */}
        {uploadStep === 'error' && (
          <div>
            <div className="form-section">
              <h2 className="section-title" style={{ color: '#f44336' }}>Validation Errors</h2>
              <p className="section-subtitle">
                {validationErrors.length} record(s) failed validation
              </p>
            </div>
            <div className="info-box error">
              <i className="fas fa-exclamation-triangle" style={{ marginRight: '10px' }}></i>
              <span>Please correct the errors below or re-upload the file</span>
            </div>

            <div style={{ marginTop: '20px' }}>
              <table className="enquiries-table">
                <thead>
                  <tr>
                    <th>EMPLOYEE NAME</th>
                    <th>EMPLOYEE ID</th>
                    <th>WORK PERMIT NO</th>
                    <th>FIN NO</th>
                    <th>ERROR</th>
                  </tr>
                </thead>
                <tbody>
                  {validationErrors.map((item) => (
                    <tr key={item.id}>
                      <td>{item.employeeName}</td>
                      <td>{item.employeeId}</td>
                      <td>{item.workPermitNo}</td>
                      <td>{item.finNo}</td>
                      <td style={{ color: '#f44336' }}>
                        <i className="fas fa-times-circle"></i> {item.error}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

              <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                <button className="btn btn-secondary" onClick={handleReUpload}>
                  <i className="fas fa-upload"></i>
                  Re-upload File
                </button>
                <button className="btn btn-primary" onClick={handleCorrectErrors}>
                  <i className="fas fa-edit"></i>
                  Correct Inline
                </button>
              </div>
            </div>
        )}

        {/* Preview Step */}
        {uploadStep === 'preview' && (
          <div>
            <div className="form-section">
              <h2 className="section-title">Preview Data</h2>
              <p className="section-subtitle">Review data before submission</p>
            </div>
            <div className="info-box success">
              <i className="fas fa-check-circle" style={{ marginRight: '10px' }}></i>
              <span>All {parsedData.length} records validated successfully</span>
            </div>

            <div style={{ marginTop: '20px' }}>
              <table className="enquiries-table">
                <thead>
                  <tr>
                    <th>EMPLOYEE NAME</th>
                    <th>EMPLOYEE ID</th>
                    <th>COMPANY NAME</th>
                    <th>WORK PERMIT NO</th>
                    <th>FIN NO</th>
                    <th>DATE IN</th>
                    <th>DATE OUT</th>
                    <th>TIME IN</th>
                    <th>TIME OUT</th>
                    <th>PROJECT</th>
                    <th>SHIFT TYPE</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {parsedData.filter(item => item.valid).map((item) => (
                    <tr key={item.id}>
                      <td>{item.employeeName}</td>
                      <td>{item.employeeId}</td>
                      <td>{item.companyName}</td>
                      <td>{item.workPermitNo}</td>
                      <td>{item.finNo}</td>
                      <td>{item.dateIn}</td>
                      <td>{item.dateOut}</td>
                      <td>{item.timeIn}</td>
                      <td>{item.timeOut}</td>
                      <td>{item.project}</td>
                      <td>{item.shiftType}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
};

export default CreateYardData;
