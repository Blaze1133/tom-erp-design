import React from 'react';
import './Enquiries.css';

const PayrollWorkflowDiagram = ({ currentStage, onStageClick }) => {
  const stages = [
    { id: 'attendance-verification', label: 'Attendance Verification', icon: 'fa-check-circle' },
    { id: 'payroll-adjustments', label: 'Payroll Adjustments', icon: 'fa-edit' },
    { id: 'payroll-calculation', label: 'Payroll Calculation', icon: 'fa-calculator' },
    { id: 'payroll-review', label: 'Payroll Review', icon: 'fa-search' },
    { id: 'payroll-finalization', label: 'Payroll Finalization', icon: 'fa-lock' },
    { id: 'accounts-posting', label: 'Accounts Posting', icon: 'fa-file-invoice-dollar' }
  ];

  const getStageStatus = (stageId) => {
    const currentIndex = stages.findIndex(s => s.id === currentStage);
    const stageIndex = stages.findIndex(s => s.id === stageId);
    
    if (stageIndex < currentIndex) return 'completed';
    if (stageIndex === currentIndex) return 'current';
    return 'pending';
  };

  return (
    <div style={{
      padding: '1.5rem',
      background: '#f8f9fa',
      border: '1px solid #e0e0e0',
      borderRadius: '6px',
      marginBottom: '1.5rem'
    }}>
      <h3 style={{
        fontSize: '1rem',
        fontWeight: '600',
        color: '#374151',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <i className="fas fa-project-diagram"></i>
        Payroll Processing Workflow
      </h3>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.5rem',
        overflowX: 'auto',
        paddingBottom: '0.5rem'
      }}>
        {stages.map((stage, index) => {
          const status = getStageStatus(stage.id);
          
          return (
            <React.Fragment key={stage.id}>
              <div
                onClick={() => onStageClick && onStageClick(stage.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  flex: '1',
                  minWidth: '120px'
                }}
                onMouseOver={(e) => {
                  const circle = e.currentTarget.querySelector('.workflow-circle');
                  if (circle) {
                    circle.style.transform = 'scale(1.1)';
                    circle.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.4)';
                  }
                }}
                onMouseOut={(e) => {
                  const circle = e.currentTarget.querySelector('.workflow-circle');
                  if (circle) {
                    circle.style.transform = 'scale(1)';
                    circle.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';
                  }
                }}
              >
                <div
                  className="workflow-circle"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: '#10b981',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    transition: 'all 0.2s',
                    marginBottom: '0.75rem'
                  }}
                >
                  <i className={`fas ${stage.icon}`}></i>
                </div>
                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  lineHeight: '1.3',
                  textAlign: 'center',
                  color: '#374151',
                  maxWidth: '120px'
                }}>
                  {stage.label}
                </div>
                <div style={{
                  fontSize: '0.7rem',
                  marginTop: '0.25rem',
                  color: '#10b981',
                  fontWeight: '500'
                }}>
                  <i className="fas fa-check-circle"></i> Completed
                </div>
              </div>
              
              {index < stages.length - 1 && (
                <div style={{
                  width: '40px',
                  height: '3px',
                  background: '#10b981',
                  position: 'relative',
                  marginTop: '-50px'
                }}>
                  <i className="fas fa-arrow-right" style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-8px',
                    transform: 'translateY(-50%)',
                    fontSize: '0.9rem',
                    color: '#10b981'
                  }}></i>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
      
      <div style={{
        marginTop: '1.5rem',
        padding: '0.75rem',
        background: '#ecfdf5',
        border: '1px solid #10b981',
        borderRadius: '4px',
        fontSize: '0.8rem',
        color: '#065f46',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <i className="fas fa-check-circle" style={{ color: '#10b981' }}></i>
        <span><strong>Payroll Completed:</strong> Click on any stage to view its details</span>
      </div>
    </div>
  );
};

export default PayrollWorkflowDiagram;
