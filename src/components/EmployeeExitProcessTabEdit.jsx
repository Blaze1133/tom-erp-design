import React, { useState } from 'react';

const EmployeeExitProcessTabEdit = () => {
  const [exitData, setExitData] = useState({
    resignationAccepted: false
  });

  const handleInputChange = (field, value) => {
    setExitData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="tab-content-wrapper">
      <div style={{ padding: '1.5rem', background: '#fff' }}>
        {/* Exit Process Information */}
        <div style={{ 
          background: '#f8f9fa', 
          padding: '1rem', 
          borderRadius: '4px',
          marginBottom: '1.5rem',
          border: '1px solid #dee2e6'
        }}>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input 
                type="checkbox" 
                checked={exitData.resignationAccepted}
                onChange={(e) => handleInputChange('resignationAccepted', e.target.checked)}
              />
              RESIGNATION ACCEPTED
            </label>
          </div>
        </div>

        {/* Empty state message */}
        <div style={{ 
          background: '#f8f9fa', 
          padding: '2rem', 
          borderRadius: '4px',
          border: '1px solid #dee2e6',
          textAlign: 'center',
          color: '#6c757d'
        }}>
          <p>Additional exit process fields can be configured here</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeExitProcessTabEdit;
