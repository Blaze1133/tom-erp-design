import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const RealizedExchangeGainsLossesDetail = ({ onBackClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleRefresh = () => {
    showToast('Realized Exchange Rate Gains and Losses Detail refreshed successfully', 'success');
  };

  const handleCustomize = () => {
    showToast('Customization options will be available soon', 'info');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-list-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Realized Exchange Rate Gains and Losses Detail</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={onBackClick}>
            <i className="fas fa-arrow-left"></i>
            Back to Summary
          </button>
          <button className="btn btn-secondary" onClick={handleRefresh}>
            <i className="fas fa-sync"></i>
            Refresh
          </button>
          <button className="btn btn-secondary" onClick={handleCustomize}>
            <i className="fas fa-cog"></i>
            Customize
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Export Options */}
        <div className="list-filters" style={{ marginBottom: '1rem' }}>
          <div className="filter-group">
            <button className="btn-icon" title="Export to Excel" onClick={() => showToast('Export to Excel - Coming Soon', 'info')}>
              <i className="fas fa-file-excel" style={{ color: '#1D6F42' }}></i>
              <span>Excel</span>
            </button>
            <button className="btn-icon" title="Export to PDF" onClick={() => showToast('Export to PDF - Coming Soon', 'info')}>
              <i className="fas fa-file-pdf" style={{ color: '#DC3545' }}></i>
              <span>PDF</span>
            </button>
            <button className="btn-icon" title="Export to Word" onClick={() => showToast('Export to Word - Coming Soon', 'info')}>
              <i className="fas fa-file-word" style={{ color: '#2B579A' }}></i>
              <span>Word</span>
            </button>
            <button className="btn-icon" title="Print Report" onClick={() => showToast('Print Report - Coming Soon', 'info')}>
              <i className="fas fa-print" style={{ color: '#6C757D' }}></i>
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Report Info */}
        <div className="form-section">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '0.5rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <h2 className="section-title" style={{ margin: 0, flex: '1 1 auto', minWidth: '300px' }}>
              <i className="fas fa-table"></i>
              Realized Exchange Rate Gains and Losses Detail - Dec 2025 to Dec 2025
            </h2>
            <span style={{ 
              fontSize: '0.85rem', 
              color: '#666',
              flex: '0 0 auto',
              whiteSpace: 'nowrap',
              textAlign: 'right'
            }}>
              Tech Onshore MEP P...td. (Consolidated)
            </span>
          </div>
          
          <div className="items-table-wrapper" style={{ 
            border: '1px solid #ddd', 
            overflow: 'auto', 
            width: '100%',
            minWidth: '1200px',
            maxWidth: '100vw'
          }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse', 
              fontSize: 'clamp(10px, 1.1vw, 12px)', 
              fontFamily: 'Arial, sans-serif',
              minWidth: '1200px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#e6e6e6', borderBottom: '1px solid #ccc' }}>
                  <th style={{ textAlign: 'left', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333', borderRight: '1px solid #ccc' }}>TRANSACTION DATE</th>
                  <th style={{ textAlign: 'left', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333', borderRight: '1px solid #ccc' }}>TYPE</th>
                  <th style={{ textAlign: 'left', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333', borderRight: '1px solid #ccc' }}>DOCUMENT NUMBER</th>
                  <th style={{ textAlign: 'left', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333', borderRight: '1px solid #ccc' }}>CURRENCY</th>
                  <th style={{ textAlign: 'left', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333', borderRight: '1px solid #ccc' }}>EXCHANGE RATE</th>
                  <th style={{ textAlign: 'right', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333', borderRight: '1px solid #ccc' }}>ORIGINAL AMOUNT</th>
                  <th style={{ textAlign: 'right', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333', borderRight: '1px solid #ccc' }}>REALIZED GAIN/LOSS</th>
                  <th style={{ textAlign: 'left', padding: '6px 8px', fontWeight: 'bold', fontSize: '11px', color: '#333' }}>ACCOUNT</th>
                </tr>
              </thead>
              <tbody>
                {/* No Data Available Message */}
                <tr>
                  <td colSpan="8" style={{ 
                    textAlign: 'center', 
                    padding: '60px 20px',
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #e9ecef'
                  }}>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '15px'
                    }}>
                      <div style={{
                        backgroundColor: '#d1ecf1',
                        border: '1px solid #bee5eb',
                        borderRadius: '4px',
                        padding: '15px 20px',
                        maxWidth: '500px',
                        width: '100%'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          marginBottom: '10px'
                        }}>
                          <i className="fas fa-info-circle" style={{ 
                            color: '#0c5460', 
                            fontSize: '18px' 
                          }}></i>
                          <strong style={{ 
                            color: '#0c5460',
                            fontSize: '14px'
                          }}>
                            No Data Available
                          </strong>
                        </div>
                        <div style={{ 
                          color: '#0c5460',
                          fontSize: '13px',
                          lineHeight: '1.4'
                        }}>
                          There is no data available for the date/period range selected.
                        </div>
                        <div style={{ 
                          color: '#0c5460',
                          fontSize: '13px',
                          marginTop: '8px'
                        }}>
                          Please select a different date/period range or click{' '}
                          <a href="#" style={{ color: '#0c5460', textDecoration: 'underline' }}>
                            Help
                          </a>
                          {' '}to read more about this report.
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Toast 
        message={toast.message} 
        type={toast.type} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
    </div>
  );
};

export default RealizedExchangeGainsLossesDetail;
