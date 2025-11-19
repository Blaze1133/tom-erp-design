import React from 'react';

const EmployeeExitProcessTabView = () => {
  const exitInfo = {
    resignationAccepted: false
  };

  return (
    <div className="tab-content-wrapper">
      <div style={{ padding: '1.5rem', background: '#fff' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#4a5568', fontWeight: 600 }}>
          Employee Exit Process
        </h3>
        
        {/* Exit Process Information */}
        <div style={{ 
          background: '#f8f9fa', 
          padding: '1rem', 
          borderRadius: '4px',
          marginBottom: '1.5rem',
          border: '1px solid #dee2e6'
        }}>
          <div className="detail-field" style={{ marginBottom: '1rem' }}>
            <label>RESIGNATION ACCEPTED</label>
            <div className="field-value">{exitInfo.resignationAccepted ? 'Yes' : 'No'}</div>
          </div>
        </div>

        {/* Additional Information */}
        <div style={{ 
          background: '#f8f9fa', 
          padding: '2rem', 
          borderRadius: '4px',
          border: '1px solid #dee2e6',
          textAlign: 'center',
          color: '#6c757d'
        }}>
          <p>No additional exit process information available</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeExitProcessTabView;
