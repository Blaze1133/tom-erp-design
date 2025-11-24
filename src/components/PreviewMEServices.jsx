import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const PreviewMEServices = ({ data, fileName, onImport, onCancel, onSettings }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [isImporting, setIsImporting] = useState(false);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map(item => item.id));
    }
    setSelectAll(!selectAll);
  };

  const handleRowSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleImport = () => {
    if (selectedRows.length === 0) {
      showToast('Please select at least one row to import', 'error');
      return;
    }

    setIsImporting(true);
    
    // Simulate import process
    setTimeout(() => {
      setIsImporting(false);
      showToast(`Processing complete! ${selectedRows.length} records ready for import.`, 'success');
      
      // Small delay before calling onImport to show the processing complete message
      setTimeout(() => {
        if (onImport) {
          const selectedData = data.filter(item => selectedRows.includes(item.id));
          onImport(selectedData);
        }
      }, 1000);
    }, 2000);
  };

  const handleSettings = () => {
    if (onSettings) {
      onSettings();
    }
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
          <i className="fas fa-eye" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Import Data for M&E Service (Internal)</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={handleSettings}>
            <i className="fas fa-cog"></i>
            Settings
          </button>
          <button 
            className="btn btn-primary" 
            onClick={handleImport}
            disabled={selectedRows.length === 0 || isImporting}
          >
            {isImporting ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                Importing...
              </>
            ) : (
              <>
                <i className="fas fa-download"></i>
                Import
              </>
            )}
          </button>
          <button className="btn btn-tertiary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* File Info Section */}
        <div className="form-section">
          <div className="preview-header" style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '1rem',
            padding: '1rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '4px',
            border: '1px solid #e0e0e0'
          }}>
            <div>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>
                <i className="fas fa-file-excel" style={{ color: '#28a745', marginRight: '0.5rem' }}></i>
                {fileName}
              </h3>
              <p style={{ margin: 0, color: '#666', fontSize: '0.875rem' }}>
                {data.length} records found • {selectedRows.length} selected
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <button className="btn-icon" title="Filter">
                <i className="fas fa-filter"></i>
                <span>Filter</span>
              </button>
              <button className="btn-icon" title="Find & Replace">
                <i className="fas fa-search"></i>
                <span>Find & Replace</span>
              </button>
              <button className="btn-icon" title="Define Cols">
                <i className="fas fa-columns"></i>
                <span>Define Cols</span>
              </button>
              <button className="btn-icon" title="Map Columns">
                <i className="fas fa-map"></i>
                <span>Map Columns</span>
              </button>
              <button className="btn-icon" title="Add Column">
                <i className="fas fa-plus"></i>
                <span>Add Column</span>
              </button>
              <button className="btn-icon" title="Sort Suggestions">
                <i className="fas fa-sort"></i>
                <span>Sort Suggestions</span>
              </button>
            </div>
          </div>

          {/* Data Preview Table */}
          <div className="preview-table-container" style={{ 
            maxHeight: '600px', 
            overflowY: 'auto',
            border: '1px solid #e0e0e0',
            borderRadius: '4px'
          }}>
            <table className="enquiries-table" style={{ fontSize: '0.875rem' }}>
              <thead style={{ position: 'sticky', top: 0, backgroundColor: '#f8f9fa', zIndex: 10 }}>
                <tr>
                  <th style={{ width: '40px', textAlign: 'center' }}>
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                      style={{ cursor: 'pointer' }}
                    />
                  </th>
                  <th style={{ width: '40px' }}>#</th>
                  <th style={{ width: '120px' }}>Project Name</th>
                  <th style={{ width: '100px' }}>Module No</th>
                  <th style={{ width: '120px' }}>Sub Module No</th>
                  <th style={{ width: '60px' }}>Batch</th>
                  <th style={{ width: '100px' }}>Service Type</th>
                  <th style={{ width: '80px' }}>Size</th>
                  <th style={{ width: '100px' }}>Contractors</th>
                  <th style={{ width: '120px' }}>Weightage with T</th>
                  <th style={{ width: '100px' }}>Parameter</th>
                  <th style={{ width: '100px' }}>Weightage</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr 
                    key={item.id}
                    style={{ 
                      backgroundColor: selectedRows.includes(item.id) ? '#e3f2fd' : 'transparent',
                      cursor: 'pointer'
                    }}
                    onClick={() => handleRowSelect(item.id)}
                  >
                    <td style={{ textAlign: 'center' }}>
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(item.id)}
                        onChange={() => handleRowSelect(item.id)}
                        onClick={(e) => e.stopPropagation()}
                        style={{ cursor: 'pointer' }}
                      />
                    </td>
                    <td>{index + 1}</td>
                    <td>{item.projectName}</td>
                    <td>{item.moduleNo}</td>
                    <td>{item.subModuleNo}</td>
                    <td>{item.batch}</td>
                    <td>{item.serviceType}</td>
                    <td>{item.size}</td>
                    <td>{item.contractors}</td>
                    <td>{item.weightageWithT}</td>
                    <td>{item.parameter}</td>
                    <td>{item.weightage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Import Summary */}
          <div className="import-summary" style={{ 
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '4px',
            border: '1px solid #e0e0e0'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>Import Summary:</strong>
                <span style={{ marginLeft: '1rem', color: '#666' }}>
                  {selectedRows.length} of {data.length} records selected for import
                </span>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    setSelectedRows(data.map(item => item.id));
                    setSelectAll(true);
                  }}
                >
                  Select All
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    setSelectedRows([]);
                    setSelectAll(false);
                  }}
                >
                  Clear Selection
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-secondary" onClick={handleSettings}>
              <i className="fas fa-cog"></i>
              Settings
            </button>
            <button 
              className="btn btn-primary" 
              onClick={handleImport}
              disabled={selectedRows.length === 0 || isImporting}
            >
              {isImporting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Importing...
                </>
              ) : (
                <>
                  <i className="fas fa-download"></i>
                  Import ({selectedRows.length})
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

export default PreviewMEServices;
