import React from 'react';
import './Enquiries.css';

const ReconcileBankStatement = () => {
  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-balance-scale" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Reconcile Bank Statement</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary">
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
        </div>
      </div>

      <div className="quotation-container">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
          padding: '3rem'
        }}>
          <div style={{
            fontSize: '120px',
            color: '#4a90e2',
            marginBottom: '2rem',
            opacity: 0.3
          }}>
            <i className="fas fa-tools"></i>
          </div>
          
          <h2 style={{
            fontSize: '2.5rem',
            color: '#333',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Coming Soon
          </h2>
          
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '600px',
            lineHeight: '1.6'
          }}>
            This feature is currently under development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReconcileBankStatement;
