import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const UploadDrawings = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    drawingName: '',
    revisionNo: '',
    drawingType: ''
  });
  const [selectedFile, setSelectedFile] = useState(null);

  // Sample drawing records
  const [drawingRecords] = useState([
    {
      id: 1,
      drawingName: 'BLK04-L06-01',
      drawingType: 'M&E Assembly',
      uploadDrawing: 'TSAVC-TOM-SQ-CT-BLK-4-064-TO-3.dwg'
    },
    {
      id: 2,
      drawingName: 'BLK04-L07-01',
      drawingType: 'M&E Assembly',
      uploadDrawing: 'TSAVC-TOM-SQ-CT-BLK-4-APMR-001_007.pdf'
    },
    {
      id: 3,
      drawingName: 'BLK03-L06-01',
      drawingType: 'M&E Assembly',
      uploadDrawing: 'TSAVC-TOM-SQ-CT-BLK-3-064-TO-3.dwg'
    },
    {
      id: 4,
      drawingName: 'BLK03-L07-01',
      drawingType: 'M&E Assembly',
      uploadDrawing: 'TSAVC-TOM-SQ-CT-BLK-3-APMR-001_007.pdf'
    },
    {
      id: 5,
      drawingName: 'BLK03-L06-01',
      drawingType: 'M&E Assembly',
      uploadDrawing: 'TSAVC-TOM-SQ-CT-BLK-3-064-TO-3.dwg'
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
    if (!formData.drawingName || !formData.drawingType || !selectedFile) {
      showToast('Please fill in all required fields and select a file', 'error');
      return;
    }

    // Simulate upload process
    showToast('Drawing uploaded successfully!', 'success');
    
    // Reset form
    setFormData({
      drawingName: '',
      revisionNo: '',
      drawingType: ''
    });
    setSelectedFile(null);
    // Reset file input
    document.getElementById('fileInput').value = '';
  };

  const handleClearAll = () => {
    setFormData({
      drawingName: '',
      revisionNo: '',
      drawingType: ''
    });
    setSelectedFile(null);
    // Reset file input
    document.getElementById('fileInput').value = '';
    showToast('Form cleared successfully', 'success');
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-upload"></i>
          <h1>Upload Drawings</h1>
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
              <label htmlFor="drawingName" style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontSize: '0.875rem', 
                fontWeight: '600', 
                color: '#374151' 
              }}>
                Drawing Name / Module No <span style={{ color: '#dc2626' }}>*</span>
              </label>
              <input
                type="text"
                id="drawingName"
                name="drawingName"
                value={formData.drawingName}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter drawing name or module number"
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
              <label htmlFor="revisionNo" style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontSize: '0.875rem', 
                fontWeight: '600', 
                color: '#374151' 
              }}>
                Revision No <span style={{ color: '#dc2626' }}>*</span>
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
              <label htmlFor="drawingType" style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontSize: '0.875rem', 
                fontWeight: '600', 
                color: '#374151' 
              }}>
                Drawing Type <span style={{ color: '#dc2626' }}>*</span>
              </label>
              <select
                id="drawingType"
                name="drawingType"
                value={formData.drawingType}
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
                <option value="M&E Assembly">M&E Assembly</option>
                <option value="Structural">Structural</option>
                <option value="Electrical">Electrical</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Piping">Piping</option>
                <option value="HVAC">HVAC</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="fileInput" style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontSize: '0.875rem', 
                fontWeight: '600', 
                color: '#374151' 
              }}>
                Upload Drawings <span style={{ color: '#dc2626' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="file"
                  id="fileInput"
                  onChange={handleFileChange}
                  accept=".pdf,.dwg,.jpg,.jpeg,.png"
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
              SAVE
            </button>
            <button 
              onClick={handleClearAll}
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
              CLEAR ALL
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div style={{ 
          textAlign: 'center', 
          padding: '1rem', 
          backgroundColor: '#f8f9fa', 
          borderRadius: '8px',
          marginBottom: '2rem'
        }}>
          <span style={{ 
            fontSize: '1.25rem', 
            fontWeight: '600', 
            color: '#4a90e2' 
          }}>
            12343
          </span>
          <span style={{ 
            marginLeft: '0.5rem', 
            fontSize: '0.875rem', 
            color: '#6c757d' 
          }}>
            Drawings Uploaded
          </span>
        </div>

        {/* Drawings List Section */}
        <div className="form-section">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '1rem' 
          }}>
            <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: '600' }}>All Drawings</h3>
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
                    Drawing Name / Module No
                  </th>
                  <th style={{ padding: '1rem 0.75rem', textAlign: 'left', fontWeight: '600', fontSize: '0.875rem' }}>
                    Drawing Type
                  </th>
                  <th style={{ padding: '1rem 0.75rem', textAlign: 'left', fontWeight: '600', fontSize: '0.875rem' }}>
                    Upload Drawing
                  </th>
                </tr>
              </thead>
              <tbody>
                {drawingRecords.map((record) => (
                  <tr key={record.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem 0.75rem', fontSize: '0.875rem' }}>
                      {record.drawingName}
                    </td>
                    <td style={{ padding: '1rem 0.75rem', fontSize: '0.875rem' }}>
                      {record.drawingType}
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
                        <i className="fas fa-file"></i>
                        {record.uploadDrawing}
                      </a>
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

export default UploadDrawings;
