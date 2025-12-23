import React from 'react';
import './Enquiries.css';

const PayrollWorkflowDiagram = ({ currentStage, onStageClick, compact = false }) => {
  const stages = [
    { id: 'attendance-verification', label: 'Attendance Verification', icon: 'fa-check-circle' },
    { id: 'payroll-adjustments', label: 'Payroll Adjustments', icon: 'fa-edit' },
    { id: 'payroll-review', label: 'Calculation & Review', icon: 'fa-calculator' },
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

  const getStageColor = (status) => {
    if (status === 'completed') return '#10b981'; // Green
    if (status === 'current') return '#dc2626'; // Red
    return '#9ca3af'; // Gray
  };

  const getStageLabel = (status) => {
    if (status === 'completed') return 'Completed';
    if (status === 'current') return 'In Progress';
    return 'Pending';
  };

  const circleSize = compact ? '60px' : '80px';
  const fontSize = compact ? '1.4rem' : '1.8rem';
  const labelSize = compact ? '0.7rem' : '0.8rem';
  const statusSize = compact ? '0.65rem' : '0.7rem';

  return (
    <div style={{
      padding: compact ? '1rem' : '1.5rem',
      background: '#f8f9fa',
      border: '1px solid #e0e0e0',
      borderRadius: '6px',
      marginBottom: compact ? '1rem' : '1.5rem'
    }}>
      <h3 style={{
        fontSize: compact ? '0.9rem' : '1rem',
        fontWeight: '600',
        color: '#374151',
        marginBottom: compact ? '0.75rem' : '1rem',
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
          const stageColor = getStageColor(status);
          const stageLabel = getStageLabel(status);
          
          return (
            <React.Fragment key={stage.id}>
              <div
                onClick={() => onStageClick && onStageClick(stage.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: onStageClick ? 'pointer' : 'default',
                  transition: 'all 0.2s',
                  flex: '1',
                  minWidth: compact ? '100px' : '120px'
                }}
                onMouseOver={(e) => {
                  if (onStageClick) {
                    const circle = e.currentTarget.querySelector('.workflow-circle');
                    if (circle) {
                      circle.style.transform = 'scale(1.1)';
                      circle.style.boxShadow = `0 4px 12px ${stageColor}66`;
                    }
                  }
                }}
                onMouseOut={(e) => {
                  if (onStageClick) {
                    const circle = e.currentTarget.querySelector('.workflow-circle');
                    if (circle) {
                      circle.style.transform = 'scale(1)';
                      circle.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';
                    }
                  }
                }}
              >
                <div
                  className="workflow-circle"
                  style={{
                    width: circleSize,
                    height: circleSize,
                    borderRadius: '50%',
                    background: stageColor,
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: fontSize,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    transition: 'all 0.2s',
                    marginBottom: compact ? '0.5rem' : '0.75rem'
                  }}
                >
                  <i className={`fas ${stage.icon}`}></i>
                </div>
                <div style={{
                  fontSize: labelSize,
                  fontWeight: '600',
                  lineHeight: '1.3',
                  textAlign: 'center',
                  color: '#374151',
                  maxWidth: compact ? '100px' : '120px'
                }}>
                  {stage.label}
                </div>
                <div style={{
                  fontSize: statusSize,
                  marginTop: '0.25rem',
                  color: stageColor,
                  fontWeight: '500'
                }}>
                  {status === 'completed' && <i className="fas fa-check-circle"></i>}
                  {status === 'current' && <i className="fas fa-spinner fa-pulse"></i>}
                  {status === 'pending' && <i className="fas fa-clock"></i>}
                  {' '}{stageLabel}
                </div>
              </div>
              
              {index < stages.length - 1 && (
                <div style={{
                  width: compact ? '30px' : '40px',
                  height: '3px',
                  background: getStageStatus(stages[index + 1].id) === 'pending' ? '#e5e7eb' : stageColor,
                  position: 'relative',
                  marginTop: compact ? '-40px' : '-50px'
                }}>
                  <i className="fas fa-arrow-right" style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-8px',
                    transform: 'translateY(-50%)',
                    fontSize: '0.9rem',
                    color: getStageStatus(stages[index + 1].id) === 'pending' ? '#e5e7eb' : stageColor
                  }}></i>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
      
      {currentStage === 'completed' && (
        <div style={{
          marginTop: compact ? '1rem' : '1.5rem',
          padding: compact ? '0.5rem' : '0.75rem',
          background: '#ecfdf5',
          border: '1px solid #10b981',
          borderRadius: '4px',
          fontSize: compact ? '0.75rem' : '0.8rem',
          color: '#065f46',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <i className="fas fa-check-circle" style={{ color: '#10b981' }}></i>
          <span><strong>Payroll Completed:</strong> Click on any stage to view its details</span>
        </div>
      )}
    </div>
  );
};

export default PayrollWorkflowDiagram;
