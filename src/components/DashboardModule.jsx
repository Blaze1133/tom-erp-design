import React, { useState, useEffect } from 'react';
import './Enquiries.css';

const DashboardModule = ({ setCurrentPage }) => {
  const [moduleData, setModuleData] = useState({
    moduleNo: 'GERA53-DFMA-10',
    steps: [
      {
        id: 1,
        name: 'Fabrication',
        status: 'Not Completed',
        progress: '0%'
      },
      {
        id: 2,
        name: 'M&E Assembly',
        status: 'Not Completed',
        progress: '0%'
      },
      {
        id: 3,
        name: 'Testing & Alignment',
        status: 'Not Completed',
        progress: '0%'
      },
      {
        id: 4,
        name: 'Fabrication QA & QC',
        status: 'Not Completed',
        progress: '0%'
      },
      {
        id: 5,
        name: 'Packaging',
        status: 'Not Completed',
        progress: '0%'
      },
      {
        id: 6,
        name: 'Delivery',
        status: 'Not Completed',
        progress: '0%'
      },
      {
        id: 7,
        name: 'QA/QC Documents',
        status: 'Not Completed',
        progress: '0%'
      }
    ]
  });

  // Check localStorage for completed statuses on component mount
  useEffect(() => {
    const fabricationStatus = localStorage.getItem('fabricationStatus');
    const testingAlignmentStatus = localStorage.getItem('testingAlignmentStatus');
    const fabricationQAQCStatus = localStorage.getItem('fabricationQAQCStatus');
    const packagingStatus = localStorage.getItem('packagingStatus');
    const deliveryStatus = localStorage.getItem('deliveryStatus');
    
    setModuleData(prev => ({
      ...prev,
      steps: prev.steps.map(step => {
        if (step.name === 'Fabrication' && fabricationStatus === 'Completed') {
          return { ...step, status: 'Completed', progress: '100%' };
        }
        if (step.name === 'Testing & Alignment' && testingAlignmentStatus === 'Completed') {
          return { ...step, status: 'Completed', progress: '100%' };
        }
        if (step.name === 'Fabrication QA & QC' && fabricationQAQCStatus === 'Completed') {
          return { ...step, status: 'Completed', progress: '100%' };
        }
        if (step.name === 'Packaging' && packagingStatus === 'Completed') {
          return { ...step, status: 'Completed', progress: '100%' };
        }
        if (step.name === 'Delivery' && deliveryStatus === 'Completed') {
          return { ...step, status: 'Completed', progress: '100%' };
        }
        return step;
      })
    }));
  }, []);

  const getStatusColor = (status) => {
    if (status.includes('Not Completed')) return '#dc3545';
    if (status.includes('In Progress')) return '#ffc107';
    if (status.includes('Completed')) return '#28a745';
    return '#6c757d';
  };

  const getStatusBadgeClass = (status) => {
    if (status.includes('Not Completed')) return 'badge badge-danger';
    if (status.includes('In Progress')) return 'badge badge-warning';
    if (status.includes('Completed')) return 'badge badge-success';
    return 'badge badge-secondary';
  };

  return (
    <>
      <style>
        {`
          .status-not-completed {
            background-color: #ffcdd2 !important;
            color: #d32f2f !important;
            border: 1px solid #f44336 !important;
          }
          .status-completed {
            background-color: #d4edda !important;
            color: #155724 !important;
            border: 1px solid #c3e6cb !important;
          }
        `}
      </style>
      <div className="enquiries-list">
        <div className="list-header">
          <div className="list-title">
            <i className="fas fa-tachometer-alt"></i>
            <h1>Dashboard - Module</h1>
          </div>
          <div className="list-actions">
            <button className="btn-view-option">Overview</button>
            <button className="btn-view-option">Details</button>
            <button className="btn-view-option">Reports</button>
          </div>
        </div>

      <div className="quotation-container">
        {/* Module Header */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '2rem',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            margin: '0 0 1rem 0', 
            fontSize: '1.5rem', 
            fontWeight: '600',
            color: '#374151'
          }}>
            Module No.
          </h2>
          <div style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#4a90e2',
            marginBottom: '1rem'
          }}>
            {moduleData.moduleNo}
          </div>
        </div>

        {/* Drawing Previews */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          
          {/* Shop Drawing Card */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <h3 style={{ 
                margin: 0, 
                fontSize: '1.25rem', 
                fontWeight: '600',
                color: '#374151'
              }}>
                Shop Drawing
              </h3>
              <button style={{
                padding: '0.5rem',
                backgroundColor: '#f3f4f6',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                cursor: 'pointer'
              }}>
                <i className="fas fa-expand-alt"></i>
              </button>
            </div>

            {/* Drawing Preview */}
            <div style={{
              width: '100%',
              height: '200px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              marginBottom: '1rem',
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 400 300\'%3E%3Crect width=\'400\' height=\'300\' fill=\'%23f8f9fa\'/%3E%3Cg fill=\'%236c757d\'%3E%3Cline x1=\'50\' y1=\'50\' x2=\'350\' y2=\'50\' stroke=\'%236c757d\' stroke-width=\'2\'/%3E%3Cline x1=\'50\' y1=\'50\' x2=\'50\' y2=\'250\' stroke=\'%236c757d\' stroke-width=\'2\'/%3E%3Cline x1=\'50\' y1=\'250\' x2=\'350\' y2=\'250\' stroke=\'%236c757d\' stroke-width=\'2\'/%3E%3Cline x1=\'350\' y1=\'50\' x2=\'350\' y2=\'250\' stroke=\'%236c757d\' stroke-width=\'2\'/%3E%3Cline x1=\'100\' y1=\'100\' x2=\'300\' y2=\'100\' stroke=\'%236c757d\' stroke-width=\'1\'/%3E%3Cline x1=\'100\' y1=\'150\' x2=\'300\' y2=\'150\' stroke=\'%236c757d\' stroke-width=\'1\'/%3E%3Cline x1=\'100\' y1=\'200\' x2=\'300\' y2=\'200\' stroke=\'%236c757d\' stroke-width=\'1\'/%3E%3Ctext x=\'200\' y=\'30\' text-anchor=\'middle\' font-size=\'14\' fill=\'%236c757d\'%3EShop Drawing%3C/text%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '2px dashed #dee2e6'
            }}>
            </div>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{ fontWeight: '600', color: '#374151' }}>Module No.</span>
              <span style={{ 
                backgroundColor: '#e5e7eb', 
                padding: '0.25rem 0.75rem', 
                borderRadius: '20px',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>
                {moduleData.moduleNo}
              </span>
            </div>
          </div>

          {/* Fabrication Drawing Card */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <h3 style={{ 
                margin: 0, 
                fontSize: '1.25rem', 
                fontWeight: '600',
                color: '#374151'
              }}>
                Fabrication Drawing
              </h3>
              <button style={{
                padding: '0.5rem',
                backgroundColor: '#f3f4f6',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                cursor: 'pointer'
              }}>
                <i className="fas fa-expand-alt"></i>
              </button>
            </div>

            {/* Drawing Preview */}
            <div style={{
              width: '100%',
              height: '200px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              marginBottom: '1rem',
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 400 300\'%3E%3Crect width=\'400\' height=\'300\' fill=\'%23f8f9fa\'/%3E%3Cg fill=\'%236c757d\'%3E%3Ccircle cx=\'100\' cy=\'100\' r=\'30\' stroke=\'%236c757d\' stroke-width=\'2\' fill=\'none\'/%3E%3Ccircle cx=\'300\' cy=\'100\' r=\'30\' stroke=\'%236c757d\' stroke-width=\'2\' fill=\'none\'/%3E%3Cline x1=\'130\' y1=\'100\' x2=\'270\' y2=\'100\' stroke=\'%236c757d\' stroke-width=\'3\'/%3E%3Crect x=\'180\' y=\'80\' width=\'40\' height=\'40\' stroke=\'%236c757d\' stroke-width=\'2\' fill=\'none\'/%3E%3Ctext x=\'200\' y=\'30\' text-anchor=\'middle\' font-size=\'14\' fill=\'%236c757d\'%3EFabrication Drawing%3C/text%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '2px dashed #dee2e6'
            }}>
            </div>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{ fontWeight: '600', color: '#374151' }}>Module No.</span>
              <span style={{ 
                backgroundColor: '#e5e7eb', 
                padding: '0.25rem 0.75rem', 
                borderRadius: '20px',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>
                {moduleData.moduleNo}
              </span>
            </div>
          </div>
        </div>

        {/* Status Table */}
        <div className="form-section" style={{ marginBottom: '2rem' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '2rem' 
          }}>
            <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '600', color: '#374151' }}>Production Status</h3>
            <button 
              onClick={() => setCurrentPage('production-time-tracking')}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#4a90e2',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <i className="fas fa-clock"></i>
              Update Status
            </button>
          </div>

          <div style={{ 
            backgroundColor: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb'
          }}>
            {moduleData.steps.map((step, index) => (
              <div 
                key={step.id} 
                className="status-row"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1.5rem 2rem',
                  borderBottom: index < moduleData.steps.length - 1 ? '1px solid #f1f5f9' : 'none',
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8fafc',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f0f9ff';
                  const updateBtn = e.currentTarget.querySelector('.update-btn');
                  if (updateBtn) {
                    updateBtn.style.opacity = '1';
                    updateBtn.style.transform = 'translateX(0)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#ffffff' : '#f8fafc';
                  const updateBtn = e.currentTarget.querySelector('.update-btn');
                  if (updateBtn) {
                    updateBtn.style.opacity = '0';
                    updateBtn.style.transform = 'translateX(10px)';
                  }
                }}
              >
                <div style={{ 
                  flex: '1', 
                  fontSize: '1.1rem', 
                  fontWeight: '600',
                  color: '#374151'
                }}>
                  {step.name}
                </div>
                <div style={{ 
                  flex: '0 0 250px',
                  textAlign: 'center',
                  marginRight: '2rem'
                }}>
                  <span 
                    className={step.status.includes('Completed') ? 'status-completed' : 'status-not-completed'}
                    style={{
                      display: 'inline-block',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '600'
                    }}
                  >
                    {step.status}
                  </span>
                </div>
                <div style={{ 
                  flex: '0 0 200px',
                  display: 'flex',
                  gap: '0.75rem',
                  justifyContent: 'flex-end',
                  alignItems: 'center'
                }}>
                  <button 
                    className="update-btn"
                    onClick={() => {
                      if (step.name === 'Fabrication') {
                        setCurrentPage('frame-fabrication');
                      } else if (step.name === 'Testing & Alignment') {
                        setCurrentPage('testing-alignment');
                      } else if (step.name === 'Fabrication QA & QC') {
                        setCurrentPage('fabrication-qa-qc');
                      } else if (step.name === 'Packaging') {
                        setCurrentPage('packaging');
                      } else if (step.name === 'Delivery') {
                        setCurrentPage('production-delivery');
                      } else {
                        // For other steps, show a placeholder message
                        alert(`Update form for ${step.name} is coming soon!`);
                      }
                    }}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#ffc107',
                      color: '#212529',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      opacity: '0',
                      transform: 'translateX(10px)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <i className="fas fa-edit"></i>
                    Update
                  </button>
                  <button style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#17a2b8',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    <i className="fas fa-file-alt"></i>
                    Report
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
    </>
  );
};

export default DashboardModule;
