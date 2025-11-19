import React, { useState } from 'react';

const DisciplinaryRecordModal = ({ isOpen, onClose, record, onSave }) => {
  const [formData, setFormData] = useState({
    employeeName: record?.employeeName || 'MEP01 001 JEGANATHAN SUNDARAVELU',
    isWatch: record?.isWatch || '',
    startDate: record?.startDate || '',
    reviewDate: record?.reviewDate || '',
    endDate: record?.endDate || '',
    memo: record?.memo || '',
    disciplinaryDocument: record?.disciplinaryDocument || null
  });

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({ ...record, ...formData });
    onClose();
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
            maxWidth: '800px',
            width: '90%',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#4a5568', fontWeight: 600 }}>
            Disciplinary Record
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

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label" style={{ fontWeight: 600, marginBottom: '0.5rem', display: 'block' }}>
                EMPLOYEE NAME
              </label>
              <div style={{ 
                padding: '0.75rem', 
                background: '#f8f9fa', 
                borderRadius: '4px',
                color: '#4a5568',
                fontSize: '0.95rem'
              }}>
                {formData.employeeName}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontWeight: 600, marginBottom: '0.5rem', display: 'block' }}>
                IS WATCH
              </label>
              <select 
                className="form-control"
                value={formData.isWatch}
                onChange={(e) => handleChange('isWatch', e.target.value)}
                style={{ fontSize: '0.95rem', padding: '0.75rem' }}
              >
                <option value=""></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontWeight: 600, marginBottom: '0.5rem', display: 'block' }}>
                START DATE
              </label>
              <input 
                type="date" 
                className="form-control"
                value={formData.startDate}
                onChange={(e) => handleChange('startDate', e.target.value)}
                style={{ fontSize: '0.95rem', padding: '0.75rem' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontWeight: 600, marginBottom: '0.5rem', display: 'block' }}>
                REVIEW DATE
              </label>
              <input 
                type="date" 
                className="form-control"
                value={formData.reviewDate}
                onChange={(e) => handleChange('reviewDate', e.target.value)}
                style={{ fontSize: '0.95rem', padding: '0.75rem' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontWeight: 600, marginBottom: '0.5rem', display: 'block' }}>
                END DATE
              </label>
              <input 
                type="date" 
                className="form-control"
                value={formData.endDate}
                onChange={(e) => handleChange('endDate', e.target.value)}
                style={{ fontSize: '0.95rem', padding: '0.75rem' }}
              />
            </div>

            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label" style={{ fontWeight: 600, marginBottom: '0.5rem', display: 'block' }}>
                MEMO
              </label>
              <textarea 
                className="form-control"
                value={formData.memo}
                onChange={(e) => handleChange('memo', e.target.value)}
                rows="4"
                style={{ fontSize: '0.95rem', padding: '0.75rem' }}
              />
            </div>

            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label" style={{ fontWeight: 600, marginBottom: '0.5rem', display: 'block' }}>
                DISCIPLINARY DOCUMENT
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <input 
                  type="file" 
                  className="form-control"
                  onChange={(e) => handleChange('disciplinaryDocument', e.target.files[0])}
                  style={{ fontSize: '0.95rem', padding: '0.75rem', flex: 1 }}
                />
                <button 
                  className="btn btn-secondary"
                  style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', whiteSpace: 'nowrap' }}
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisciplinaryRecordModal;
