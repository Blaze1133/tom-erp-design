import React, { useState, useEffect } from 'react';
import './Enquiries.css';

const PlantDashboardModule = ({ setCurrentPage }) => {
  const [moduleData, setModuleData] = useState({
    moduleNo: 'SANYU-CHWP-01',
    steps: [
      {
        id: 1,
        name: 'Material Incoming Status',
        status: 'Not Complete',
        progress: '0%'
      },
      {
        id: 2,
        name: 'Material Traceability',
        status: 'Not Complete',
        progress: '0%'
      },
      {
        id: 3,
        name: 'FIT-Up',
        status: 'Not Complete',
        progress: '0%'
      },
      {
        id: 4,
        name: 'Visual Inspection',
        status: 'Not Complete',
        progress: '0%'
      },
      {
        id: 5,
        name: 'Dimensional Inspection',
        status: 'Not Complete',
        progress: '0%'
      },
      {
        id: 6,
        name: 'Welding Traceability',
        status: 'Not Complete',
        progress: '0%'
      },
      {
        id: 7,
        name: 'MEP Components',
        status: 'Not Complete',
        progress: '0%'
      },
      {
        id: 8,
        name: 'Hydrostatic Test',
        status: 'Not Complete',
        progress: '0%'
      }
    ]
  });

  // Check localStorage for completed statuses on component mount
  useEffect(() => {
    const materialIncomingStatus = localStorage.getItem('plantMaterialIncomingStatus');
    const materialTraceabilityStatus = localStorage.getItem('plantMaterialTraceabilityStatus');
    const fitUpStatus = localStorage.getItem('plantFitUpStatus');
    const visualInspectionStatus = localStorage.getItem('plantVisualInspectionStatus');
    const dimensionalInspectionStatus = localStorage.getItem('plantDimensionalInspectionStatus');
    const weldingTraceabilityStatus = localStorage.getItem('plantWeldingTraceabilityStatus');
    const mepComponentsStatus = localStorage.getItem('plantMepComponentsStatus');
    const hydrostaticTestStatus = localStorage.getItem('plantHydrostaticTestStatus');
    
    setModuleData(prev => ({
      ...prev,
      steps: prev.steps.map(step => {
        if (step.name === 'Material Incoming Status' && materialIncomingStatus === 'Completed') {
          return { ...step, status: 'Completed', progress: '100%' };
        }
        if (step.name === 'Material Traceability' && materialTraceabilityStatus === 'Completed') {
          return { ...step, status: 'Completed', progress: '100%' };
        }
        if (step.name === 'FIT-Up' && fitUpStatus === 'Completed') {
          return { ...step, status: 'Completed', progress: '100%' };
        }
        if (step.name === 'Visual Inspection' && visualInspectionStatus === 'Completed') {
          return { ...step, status: 'Completed', progress: '100%' };
        }
        if (step.name === 'Dimensional Inspection' && dimensionalInspectionStatus === 'Completed') {
          return { ...step, status: 'Completed', progress: '100%' };
        }
        if (step.name === 'Welding Traceability' && weldingTraceabilityStatus === 'Completed') {
          return { ...step, status: 'Completed', progress: '100%' };
        }
        if (step.name === 'MEP Components' && mepComponentsStatus === 'Completed') {
          return { ...step, status: 'Completed', progress: '100%' };
        }
        if (step.name === 'Hydrostatic Test' && hydrostaticTestStatus === 'Completed') {
          return { ...step, status: 'Completed', progress: '100%' };
        }
        return step;
      })
    }));
  }, []);

  const getStatusColor = (status) => {
    if (status.includes('Not Complete')) return '#dc3545';
    if (status.includes('In Progress')) return '#ffc107';
    if (status.includes('Completed')) return '#28a745';
    return '#6c757d';
  };

  return (
    <>
      <style>
        {`
          .status-not-complete {
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
            <i className="fas fa-industry"></i>
            <h1>Plant Module Dashboard</h1>
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
              marginBottom: '0.5rem'
            }}>
              <span style={{ fontWeight: '600', color: '#374151', fontSize: '0.875rem' }}>Page: 1 / 1</span>
              <a href="#" style={{ color: '#4a90e2', fontSize: '0.875rem', textDecoration: 'none' }}>Download Here</a>
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
              marginBottom: '0.5rem'
            }}>
              <span style={{ fontWeight: '600', color: '#374151', fontSize: '0.875rem' }}>Page: 1 / 4</span>
              <a href="#" style={{ color: '#4a90e2', fontSize: '0.875rem', textDecoration: 'none' }}>Download Here</a>
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
            <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '600', color: '#374151' }}>Plant Module Process</h3>
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
                  const editBtn = e.currentTarget.querySelector('.edit-btn');
                  if (editBtn) {
                    editBtn.style.opacity = '1';
                    editBtn.style.transform = 'translateX(0)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#ffffff' : '#f8fafc';
                  const editBtn = e.currentTarget.querySelector('.edit-btn');
                  if (editBtn) {
                    editBtn.style.opacity = '0';
                    editBtn.style.transform = 'translateX(10px)';
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
                    style={{
                      display: 'inline-block',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      backgroundColor: step.status === 'Completed' ? '#d4edda' : '#ffcdd2',
                      color: step.status === 'Completed' ? '#155724' : '#d32f2f',
                      border: step.status === 'Completed' ? '1px solid #c3e6cb' : '1px solid #f44336'
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
                    className="edit-btn"
                    onClick={() => {
                      if (step.name === 'Material Incoming Status') {
                        setCurrentPage('material-incoming-status');
                      } else if (step.name === 'Dimensional Inspection') {
                        setCurrentPage('dimensional-inspection');
                      } else if (step.name === 'FIT-Up') {
                        setCurrentPage('fitup-inspection');
                      } else if (step.name === 'Hydrostatic Test') {
                        setCurrentPage('hydrostatic-test');
                      } else if (step.name === 'Material Traceability') {
                        setCurrentPage('material-traceability');
                      } else if (step.name === 'Visual Inspection') {
                        setCurrentPage('visual-inspection');
                      } else if (step.name === 'Welding Traceability') {
                        setCurrentPage('welding-traceability');
                      } else if (step.name === 'MEP Components') {
                        setCurrentPage('mep-components');
                      } else {
                        // Other component forms to be created later
                        alert(`Update form for ${step.name} will be created next`);
                      }
                    }}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#007bff',
                      color: 'white',
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
                    Edit
                  </button>
                  <button 
                    onClick={() => {
                      if (step.name === 'Material Incoming Status') {
                        setCurrentPage('view-material-incoming-statuses');
                      } else if (step.name === 'Dimensional Inspection') {
                        setCurrentPage('view-dimensional-inspections');
                      } else if (step.name === 'FIT-Up') {
                        setCurrentPage('view-fitup-inspections');
                      } else if (step.name === 'Hydrostatic Test') {
                        setCurrentPage('view-hydrostatic-tests');
                      } else if (step.name === 'Material Traceability') {
                        setCurrentPage('view-material-traceabilities');
                      } else if (step.name === 'Visual Inspection') {
                        setCurrentPage('view-visual-inspections');
                      } else if (step.name === 'Welding Traceability') {
                        setCurrentPage('view-welding-traceabilities');
                      } else if (step.name === 'MEP Components') {
                        setCurrentPage('view-piping-inspections');
                      }
                    }}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#007bff',
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

export default PlantDashboardModule;
