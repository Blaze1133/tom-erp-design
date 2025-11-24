import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ModuleWiseTimeTracking = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    productionNo: '',
    moduleNo: ''
  });
  const [selectedModules, setSelectedModules] = useState([]);
  const [showModuleDropdown, setShowModuleDropdown] = useState(false);

  // Sample available modules
  const availableModules = [
    'BLK03-L06-01', 'BLK03-L07-01', 'BLK04-L06-01', 'BLK04-L07-01',
    'L14-CFMA-024', 'L14-CFMA-021', 'TSMVC-L5-CFMA-02', 'TSMVC-L5-CFMA-03'
  ];

  // Sample production records with state management
  const [productionRecords, setProductionRecords] = useState([
    {
      id: 1,
      productionNo: 'TOM-P-10-633',
      contractor: 'TOM',
      contractorName: '',
      noOfModules: 11,
      moduleNo: 'L14-CFMA-024;L14-CFMA-021;L14-CFMA-017;L14-CFMA-018;L14-CFMA-020;L14-CFMA-022;L14-CFMA-023;L14-CFMA-024;L14-CFMA-025;L14-CFMA-026',
      checkIn: 'Check In',
      checkOut: 'Check Out',
      completed: 'Completed',
      status: 'pending'
    },
    {
      id: 2,
      productionNo: 'TOM-P-10-640',
      contractor: 'TOM',
      contractorName: '',
      noOfModules: 11,
      moduleNo: 'L14-CFMA-024;L14-CFMA-021;L14-CFMA-017;L14-CFMA-018;L14-CFMA-020;L14-CFMA-022;L14-CFMA-023;L14-CFMA-024;L14-CFMA-025;L14-CFMA-026',
      checkIn: 'Check In',
      checkOut: 'Check Out',
      completed: 'Completed',
      status: 'pending'
    },
    {
      id: 3,
      productionNo: 'TOM-P-10-609',
      contractor: 'STRAITS',
      contractorName: '',
      noOfModules: 4,
      moduleNo: 'TSMVC-L5-CFMA-02;TSMVC-L5-CFMA-03;TSMVC-L5-CFMA-04;TSMVC-L5-CFMA-05',
      checkIn: 'Check In',
      checkOut: 'Check Out',
      completed: 'Completed',
      status: 'pending'
    },
    {
      id: 4,
      productionNo: 'TOM-P-10-608',
      contractor: 'TOM',
      contractorName: '',
      noOfModules: 4,
      moduleNo: 'TSMVC-U02-CFMA-02;TSMVC-U02-CFMA-03;TSMVC-U02-CFMA-04;TSMVC-U02-CFMA-05',
      checkIn: 'Check In',
      checkOut: 'Check Out',
      completed: 'Completed',
      status: 'pending'
    }
  ]);

  const [manhourModal, setManhourModal] = useState({ show: false, record: null });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const generateProductionNo = () => {
    const timestamp = Date.now().toString().slice(-3);
    return `TOM-P-10-${timestamp}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleModuleSelect = (module) => {
    if (!selectedModules.includes(module)) {
      setSelectedModules(prev => [...prev, module]);
    }
    setShowModuleDropdown(false);
    setFormData(prev => ({ ...prev, moduleNo: '' }));
  };

  const removeModule = (moduleToRemove) => {
    setSelectedModules(prev => prev.filter(module => module !== moduleToRemove));
  };

  const handleSubmit = () => {
    if (selectedModules.length === 0) {
      showToast('Please select at least one module', 'error');
      return;
    }

    const newProductionNo = generateProductionNo();
    showToast(`Production record created successfully! Production No: ${newProductionNo}`, 'success');
    
    // Reset form
    setSelectedModules([]);
    setFormData({ productionNo: '', moduleNo: '' });
  };

  const handleReset = () => {
    setSelectedModules([]);
    setFormData({ productionNo: '', moduleNo: '' });
    showToast('Form reset successfully', 'success');
  };

  const handleCheckIn = (record) => {
    setManhourModal({ show: true, record });
  };

  const handleManhourSubmit = () => {
    // Update the record status to 'checked-in'
    setProductionRecords(prev => 
      prev.map(record => 
        record.id === manhourModal.record.id 
          ? { ...record, status: 'checked-in' }
          : record
      )
    );
    
    showToast('Manhours updated successfully! Status changed to Check In.', 'success');
    setManhourModal({ show: false, record: null });
  };

  const handleCheckOut = (record) => {
    setProductionRecords(prev => 
      prev.map(r => 
        r.id === record.id 
          ? { ...r, status: 'checked-out' }
          : r
      )
    );
    showToast('Checked out successfully!', 'success');
  };

  const handleCompleted = (record) => {
    setProductionRecords(prev => 
      prev.map(r => 
        r.id === record.id 
          ? { ...r, status: 'completed' }
          : r
      )
    );
    showToast('Marked as completed!', 'success');
  };

  const filteredModules = availableModules.filter(module => 
    module.toLowerCase().includes(formData.moduleNo.toLowerCase()) &&
    !selectedModules.includes(module)
  );

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-clock"></i>
          <h1>Module Wise Time Tracking</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Module Selection Form */}
        <div className="form-section">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
            <div className="form-group">
              <label htmlFor="productionNo">Production No</label>
              <input
                type="text"
                id="productionNo"
                name="productionNo"
                value={formData.productionNo}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Auto-generated"
                disabled
              />
            </div>

            <div className="form-group" style={{ position: 'relative' }}>
              <label htmlFor="moduleNo">Module No</label>
              <input
                type="text"
                id="moduleNo"
                name="moduleNo"
                value={formData.moduleNo}
                onChange={handleInputChange}
                onFocus={() => setShowModuleDropdown(true)}
                className="form-control"
                placeholder="Search modules..."
              />
              
              {showModuleDropdown && filteredModules.length > 0 && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  backgroundColor: 'white',
                  border: '1px solid #d0d0d0',
                  borderRadius: '4px',
                  maxHeight: '200px',
                  overflowY: 'auto',
                  zIndex: 1000,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  {filteredModules.map(module => (
                    <div
                      key={module}
                      onClick={() => handleModuleSelect(module)}
                      style={{
                        padding: '0.75rem',
                        cursor: 'pointer',
                        borderBottom: '1px solid #f0f0f0'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                    >
                      {module}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Selected Modules */}
          {selectedModules.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <label>Selected Modules ({selectedModules.length})</label>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem',
                padding: '1rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '4px',
                border: '1px solid #e0e0e0'
              }}>
                {selectedModules.map(module => (
                  <span
                    key={module}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.25rem 0.75rem',
                      backgroundColor: '#4a90e2',
                      color: 'white',
                      borderRadius: '20px',
                      fontSize: '0.875rem'
                    }}
                  >
                    {module}
                    <button
                      onClick={() => removeModule(module)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        padding: 0,
                        marginLeft: '0.25rem'
                      }}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-primary" onClick={handleSubmit}>
              <i className="fas fa-save"></i>
              Submit
            </button>
            <button className="btn btn-secondary" onClick={handleReset}>
              <i className="fas fa-undo"></i>
              Reset
            </button>
          </div>
        </div>

        {/* Production Records Table */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-list"></i>
            Individual Contractor Manhours Tracking Report
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />

          <div className="enquiries-table-container">
            <table className="enquiries-table">
              <thead>
                <tr>
                  <th style={{ width: '12%' }}>Production No <i className="fas fa-sort"></i></th>
                  <th style={{ width: '10%' }}>Contractor <i className="fas fa-sort"></i></th>
                  <th style={{ width: '15%' }}>Contractor Name</th>
                  <th style={{ width: '8%' }}>No of Modules</th>
                  <th style={{ width: '25%' }}>Module No</th>
                  <th style={{ width: '8%' }}>Check In</th>
                  <th style={{ width: '8%' }}>Check Out</th>
                  <th style={{ width: '8%' }}>Completed</th>
                </tr>
              </thead>
              <tbody>
                {productionRecords.map((record) => (
                  <tr key={record.id}>
                    <td className="doc-number">{record.productionNo}</td>
                    <td>{record.contractor}</td>
                    <td>{record.contractorName}</td>
                    <td style={{ textAlign: 'center' }}>{record.noOfModules}</td>
                    <td style={{ fontSize: '0.75rem' }}>{record.moduleNo}</td>
                    <td>
                      <button 
                        className={`btn btn-sm ${record.status === 'pending' ? 'btn-primary' : 'btn-disabled'}`}
                        onClick={() => handleCheckIn(record)}
                        disabled={record.status === 'checked-in' || record.status === 'checked-out' || record.status === 'completed'}
                        style={{
                          minWidth: '80px',
                          borderRadius: '4px',
                          padding: '0.375rem 0.75rem'
                        }}
                      >
                        Check In
                      </button>
                    </td>
                    <td>
                      <button 
                        className={`btn btn-sm ${record.status === 'checked-in' ? 'btn-primary' : 'btn-disabled'}`}
                        onClick={() => handleCheckOut(record)}
                        disabled={record.status !== 'checked-in'}
                        style={{
                          minWidth: '80px',
                          borderRadius: '4px',
                          padding: '0.375rem 0.75rem',
                          backgroundColor: record.status === 'checked-in' ? '#4a90e2' : '#e9ecef',
                          borderColor: record.status === 'checked-in' ? '#4a90e2' : '#e9ecef',
                          color: record.status === 'checked-in' ? 'white' : '#6c757d'
                        }}
                      >
                        Check Out
                      </button>
                    </td>
                    <td>
                      <button 
                        className={`btn btn-sm ${record.status === 'checked-out' ? 'btn-success' : 'btn-disabled'}`}
                        onClick={() => handleCompleted(record)}
                        disabled={record.status !== 'checked-out'}
                        style={{
                          minWidth: '80px',
                          borderRadius: '4px',
                          padding: '0.375rem 0.75rem'
                        }}
                      >
                        Completed
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Manhour Update Modal */}
      {manhourModal.show && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ 
            maxWidth: '500px', 
            width: '90%',
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
            border: 'none'
          }}>
            {/* Modal Header */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '1.5rem 2rem 1rem 2rem',
              borderBottom: '1px solid #f0f0f0',
              marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: '#4a90e2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <i className="fas fa-users" style={{ fontSize: '18px', color: 'white' }}></i>
                </div>
                <h3 style={{ 
                  margin: 0, 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  color: '#2d3748' 
                }}>
                  Manpower Updates of Each Contractor
                </h3>
              </div>
              <button
                onClick={() => setManhourModal({ show: false, record: null })}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  color: '#718096',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f7fafc';
                  e.target.style.color = '#2d3748';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#718096';
                }}
              >
                <i className="fas fa-times" style={{ fontSize: '16px' }}></i>
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '0 2rem 1.5rem 2rem' }}>
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label 
                  htmlFor="manhours" 
                  style={{ 
                    display: 'block',
                    marginBottom: '0.75rem',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#4a5568'
                  }}
                >
                  No of HeadCount <span style={{ color: '#e53e3e' }}>*</span>
                </label>
                <input
                  type="number"
                  id="manhours"
                  placeholder="Enter headcount"
                  defaultValue="1"
                  min="0"
                  step="1"
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#4a90e2';
                    e.target.style.boxShadow = '0 0 0 3px rgba(74, 144, 226, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Modal Footer */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'flex-end', 
                gap: '0.75rem',
                paddingTop: '1rem',
                borderTop: '1px solid #f0f0f0'
              }}>
                <button 
                  onClick={() => setManhourModal({ show: false, record: null })}
                  style={{
                    padding: '0.75rem 1.5rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    color: '#4a5568',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#cbd5e0';
                    e.target.style.backgroundColor = '#f7fafc';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.backgroundColor = 'white';
                  }}
                >
                  Reset
                </button>
                <button 
                  onClick={handleManhourSubmit}
                  style={{
                    padding: '0.75rem 1.5rem',
                    border: 'none',
                    borderRadius: '8px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 4px rgba(40, 167, 69, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#218838';
                    e.target.style.transform = 'translateY(-1px)';
                    e.target.style.boxShadow = '0 4px 8px rgba(40, 167, 69, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#28a745';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 4px rgba(40, 167, 69, 0.2)';
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Toast 
        message={toast.message} 
        type={toast.type} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
    </div>
  );
};

export default ModuleWiseTimeTracking;
