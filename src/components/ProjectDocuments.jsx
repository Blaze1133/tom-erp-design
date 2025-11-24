import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ProjectDocuments = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    documentName: '',
    documentType: '',
    moduleNo: '',
    project: '',
    revisionNo: ''
  });
  const [selectedFile, setSelectedFile] = useState(null);

  // Sample document records
  const [documentRecords] = useState([
    {
      id: 1,
      documentName: 'Incoming Inspection report',
      documentType: 'Material Inspection',
      project: 'Integrated Transport Hub',
      revisionNo: '0',
      fileUploaded: 'IR-01.pdf',
      moduleNo: 'L13-DPMA-014'
    },
    {
      id: 2,
      documentName: 'Incoming Inspection report',
      documentType: 'Material Inspection',
      project: 'Integrated Transport Hub',
      revisionNo: '0',
      fileUploaded: 'IR-02.pdf',
      moduleNo: 'L13-DPMA-014'
    },
    {
      id: 3,
      documentName: 'Incoming Inspection report',
      documentType: 'Material Inspection',
      project: 'Integrated Transport Hub',
      revisionNo: '0',
      fileUploaded: 'IR-03.pdf',
      moduleNo: 'L13-DPMA-015'
    },
    {
      id: 4,
      documentName: 'Incoming Inspection report',
      documentType: 'Material Inspection',
      project: 'Integrated Transport Hub',
      revisionNo: '0',
      fileUploaded: 'IR-04.pdf',
      moduleNo: 'L13-DPMA-016'
    },
    {
      id: 5,
      documentName: 'Incoming Inspection report',
      documentType: 'Material Inspection',
      project: 'Integrated Transport Hub',
      revisionNo: '0',
      fileUploaded: 'IR-05.pdf',
      moduleNo: 'L13-DPMA-017'
    }
  ]);

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

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (!formData.documentName || !formData.documentType || !formData.project || !selectedFile) {
      showToast('Please fill in all required fields and select a file', 'error');
      return;
    }

    // Simulate upload process
    showToast('Document uploaded successfully!', 'success');
    
    // Reset form
    setFormData({
      documentName: '',
      documentType: '',
      moduleNo: '',
      project: '',
      revisionNo: ''
    });
    setSelectedFile(null);
    // Reset file input
    document.getElementById('fileInput').value = '';
  };

  const handleReset = () => {
    setFormData({
      documentName: '',
      documentType: '',
      moduleNo: '',
      project: '',
      revisionNo: ''
    });
    setSelectedFile(null);
    // Reset file input
    document.getElementById('fileInput').value = '';
    showToast('Form reset successfully', 'success');
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-file-alt"></i>
          <h1>Project Documents</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Upload Form Section */}
        <div className="form-section" style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div className="form-group">
              <label htmlFor="documentName" style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontSize: '0.875rem', 
                fontWeight: '600', 
                color: '#374151' 
              }}>
                Document Name <span style={{ color: '#dc2626' }}>*</span>
              </label>
              <input
                type="text"
                id="documentName"
                name="documentName"
                value={formData.documentName}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter document name"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem'
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="documentType" style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontSize: '0.875rem', 
                fontWeight: '600', 
                color: '#374151' 
              }}>
                Document Type <span style={{ color: '#dc2626' }}>*</span>
              </label>
              <select
                id="documentType"
                name="documentType"
                value={formData.documentType}
                onChange={handleInputChange}
                className="form-control"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  backgroundColor: 'white'
                }}
              >
                <option value="">Select</option>
                <option value="Material Inspection">Material Inspection</option>
                <option value="Quality Assurance">Quality Assurance</option>
                <option value="Technical Specification">Technical Specification</option>
                <option value="Installation Guide">Installation Guide</option>
                <option value="Test Report">Test Report</option>
                <option value="Compliance Certificate">Compliance Certificate</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="moduleNo" style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontSize: '0.875rem', 
                fontWeight: '600', 
                color: '#374151' 
              }}>
                Module No
              </label>
              <input
                type="text"
                id="moduleNo"
                name="moduleNo"
                value={formData.moduleNo}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter module number"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem'
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="project" style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontSize: '0.875rem', 
                fontWeight: '600', 
                color: '#374151' 
              }}>
                Project <span style={{ color: '#dc2626' }}>*</span>
              </label>
              <select
                id="project"
                name="project"
                value={formData.project}
                onChange={handleInputChange}
                className="form-control"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  backgroundColor: 'white'
                }}
              >
                <option value="">Select</option>
                <option value="Integrated Transport Hub">Integrated Transport Hub</option>
                <option value="Marina Bay Project">Marina Bay Project</option>
                <option value="Changi Terminal Expansion">Changi Terminal Expansion</option>
                <option value="Jurong Industrial Complex">Jurong Industrial Complex</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="revisionNo" style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontSize: '0.875rem', 
                fontWeight: '600', 
                color: '#374151' 
              }}>
                Revision No
              </label>
              <input
                type="text"
                id="revisionNo"
                name="revisionNo"
                value={formData.revisionNo}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter revision number"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '0.875rem'
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="fileInput" style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontSize: '0.875rem', 
                fontWeight: '600', 
                color: '#374151' 
              }}>
                File upload <span style={{ color: '#dc2626' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="file"
                  id="fileInput"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    backgroundColor: 'white'
                  }}
                />
                {selectedFile && (
                  <div style={{ 
                    marginTop: '0.5rem', 
                    fontSize: '0.75rem', 
                    color: '#059669',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    <i className="fas fa-check-circle"></i>
                    Selected: {selectedFile.name}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              onClick={handleSubmit}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
            >
              Submit
            </button>
            <button 
              onClick={handleReset}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#5a6268'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#6c757d'}
            >
              Reset
            </button>
          </div>
        </div>

        {/* Documents List Section */}
        <div className="form-section">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '1rem' 
          }}>
            <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: '600' }}>All Project Documents</h3>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button style={{
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}>
                <i className="fas fa-search"></i>
              </button>
              <button style={{
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                backgroundColor: '#28a745',
                color: 'white',
                cursor: 'pointer'
              }}>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>

          <div className="enquiries-table-container">
            <table className="enquiries-table">
              <thead>
                <tr style={{ backgroundColor: '#f8f9fa' }}>
                  <th style={{ padding: '1rem 0.75rem', textAlign: 'left', fontWeight: '600', fontSize: '0.875rem' }}>
                    Document Name
                  </th>
                  <th style={{ padding: '1rem 0.75rem', textAlign: 'left', fontWeight: '600', fontSize: '0.875rem' }}>
                    Document Type
                  </th>
                  <th style={{ padding: '1rem 0.75rem', textAlign: 'left', fontWeight: '600', fontSize: '0.875rem' }}>
                    Project
                  </th>
                  <th style={{ padding: '1rem 0.75rem', textAlign: 'left', fontWeight: '600', fontSize: '0.875rem' }}>
                    Revision No
                  </th>
                  <th style={{ padding: '1rem 0.75rem', textAlign: 'left', fontWeight: '600', fontSize: '0.875rem' }}>
                    File uploaded
                  </th>
                  <th style={{ padding: '1rem 0.75rem', textAlign: 'left', fontWeight: '600', fontSize: '0.875rem' }}>
                    Module No
                  </th>
                </tr>
              </thead>
              <tbody>
                {documentRecords.map((record) => (
                  <tr key={record.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem 0.75rem', fontSize: '0.875rem' }}>
                      {record.documentName}
                    </td>
                    <td style={{ padding: '1rem 0.75rem', fontSize: '0.875rem' }}>
                      {record.documentType}
                    </td>
                    <td style={{ padding: '1rem 0.75rem', fontSize: '0.875rem' }}>
                      {record.project}
                    </td>
                    <td style={{ padding: '1rem 0.75rem', fontSize: '0.875rem', textAlign: 'center' }}>
                      {record.revisionNo}
                    </td>
                    <td style={{ padding: '1rem 0.75rem', fontSize: '0.875rem' }}>
                      <a 
                        href="#" 
                        style={{ 
                          color: '#4a90e2', 
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <i className="fas fa-file-pdf"></i>
                        {record.fileUploaded}
                      </a>
                    </td>
                    <td style={{ padding: '1rem 0.75rem', fontSize: '0.875rem' }}>
                      {record.moduleNo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default ProjectDocuments;
