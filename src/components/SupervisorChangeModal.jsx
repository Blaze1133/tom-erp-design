import React, { useState } from 'react';

const SupervisorChangeModal = ({ isOpen, onClose, record, onSave }) => {
  const [effectiveDate, setEffectiveDate] = useState(record?.effectiveDate || '2025-08-20');

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({ ...record, effectiveDate });
    onClose();
  };

  return (
    <>
      {/* Modal Overlay */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={onClose}
      >
        {/* Modal Content */}
        <div 
          style={{
            background: 'white',
            borderRadius: '8px',
            padding: '2rem',
            maxWidth: '600px',
            width: '90%',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#4a5568', fontWeight: 600 }}>
            Supervisor Change History
          </h2>

          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
            <button 
              className="btn btn-primary"
              onClick={handleSave}
              style={{ fontSize: '0.95rem', padding: '0.6rem 1.5rem' }}
            >
              Save
            </button>
            <button 
              className="btn btn-secondary"
              onClick={onClose}
              style={{ fontSize: '0.95rem', padding: '0.6rem 1.5rem' }}
            >
              Cancel
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label" style={{ fontWeight: 600, marginBottom: '0.5rem', display: 'block' }}>
                EMPLOYEE
              </label>
              <div style={{ 
                padding: '0.75rem', 
                background: '#f8f9fa', 
                borderRadius: '4px',
                color: '#4a5568',
                fontSize: '0.95rem'
              }}>
                MEP01 001 JEGANATHAN SUNDARAVELU
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontWeight: 600, marginBottom: '0.5rem', display: 'block' }}>
                SUPERVISOR
              </label>
              <div style={{ 
                padding: '0.75rem', 
                background: '#f8f9fa', 
                borderRadius: '4px',
                color: '#4a5568',
                fontSize: '0.95rem'
              }}>
                MEP057 Mahendran S/O Minisamy
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontWeight: 600, marginBottom: '0.5rem', display: 'block' }}>
                VALID RANGE
              </label>
              <div style={{ 
                padding: '0.75rem', 
                background: '#f8f9fa', 
                borderRadius: '4px',
                color: '#4a5568',
                fontSize: '0.95rem'
              }}>
                31/3/2024 - Any
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontWeight: 600, marginBottom: '0.5rem', display: 'block' }}>
                EFFECTIVE DATE
              </label>
              <input 
                type="date" 
                className="form-control" 
                value={effectiveDate}
                onChange={(e) => setEffectiveDate(e.target.value)}
                style={{ fontSize: '0.95rem', padding: '0.75rem' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupervisorChangeModal;
