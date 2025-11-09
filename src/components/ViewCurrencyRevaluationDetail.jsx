import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCurrencyRevaluationDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const revaluationData = {
    docNumber: '22',
    postingPeriod: 'Oct 2021',
    transactionNumber: 'FXREVAL22',
    refNo: '22',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    totalVariance: '0.01',
    memo: '',
    createdFrom: 'Bill #J924421-01',
    currency: 'SGD',
    department: '',
    class: '',
    location: '',
    details: [
      {
        type: 'Bill',
        date: '14/10/2021',
        payee: 'MECH & ELECT RESOURCES',
        currency: 'USD',
        transactionExchangeRate: '1.34785',
        foreignCurrencyBalance: '-3,147.82',
        baseCurrencyBalance: '-0.01',
        roundingGainLoss: '0.01'
      }
    ]
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-currency-revaluations');
    }
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('edit-currency-revaluation');
    }
  };

  return (
    <div className="sales-quotation">
      {/* Top Header */}
      <div style={{ 
        background: '#f8f9fa', 
        padding: '12px 20px', 
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <i className="fas fa-dollar-sign" style={{ fontSize: '18px', color: '#4a90e2' }}></i>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>Currency Revaluation (Rounding Gain/Loss)</div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '4px' }}>
              <span style={{ fontSize: '13px', color: '#666' }}>{revaluationData.docNumber}</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>List</button>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>Search</button>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>More</button>
        </div>
      </div>

      {/* Action Buttons Bar */}
      <div style={{ 
        background: 'white', 
        padding: '12px 20px', 
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn btn-primary" onClick={handleEdit} style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-edit"></i> Edit
          </button>
          <button className="btn btn-secondary" onClick={handleBack} style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-arrow-left"></i> Back
          </button>
        </div>
        <div>
          <button className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-cog"></i> Actions
          </button>
        </div>
      </div>

      <div className="quotation-container" style={{ background: '#f8f9fa', padding: '20px' }}>
        {/* Primary Information */}
        <div style={{ 
          background: 'white', 
          borderRadius: '4px', 
          marginBottom: '20px',
          border: '1px solid #e0e0e0'
        }}>
          <div style={{ 
            padding: '15px 20px',
            borderBottom: '1px solid #e0e0e0',
            background: '#f8f9fa',
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '11px', color: '#666' }}></i>
            <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0, color: '#333' }}>Primary Information</h3>
          </div>
          <div style={{ padding: '25px 20px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '30px 60px',
              fontSize: '13px'
            }}>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>POSTING PERIOD</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{revaluationData.postingPeriod}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>SUBSIDIARY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{revaluationData.subsidiary}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>TOTAL VARIANCE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{revaluationData.totalVariance}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>TRANSACTION NUMBER</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{revaluationData.transactionNumber}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>MEMO</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{revaluationData.memo || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CREATED FROM</div>
                <div style={{ color: '#4a90e2', fontSize: '14px' }}>{revaluationData.createdFrom}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>REF NO.</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{revaluationData.refNo}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CURRENCY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{revaluationData.currency}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div style={{ 
          background: 'white', 
          borderRadius: '4px', 
          marginBottom: '20px',
          border: '1px solid #e0e0e0'
        }}>
          <div style={{ 
            padding: '15px 20px',
            borderBottom: '1px solid #e0e0e0',
            background: '#f8f9fa',
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '11px', color: '#666' }}></i>
            <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0, color: '#333' }}>Classification</h3>
          </div>
          <div style={{ padding: '25px 20px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '30px 60px',
              fontSize: '13px'
            }}>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DEPARTMENT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{revaluationData.department || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CLASS</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{revaluationData.class || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>LOCATION</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{revaluationData.location || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Details Table */}
        <div style={{ 
          background: 'white', 
          borderRadius: '4px', 
          marginBottom: '20px',
          border: '1px solid #e0e0e0'
        }}>
          <div style={{ 
            padding: '12px 20px',
            background: '#5b6b8f',
            color: 'white',
            display: 'flex',
            gap: '20px',
            fontSize: '13px',
            fontWeight: '500'
          }}>
            <div style={{ borderBottom: '2px solid white', paddingBottom: '8px' }}>Details</div>
            <div style={{ color: '#ccc' }}>Applied Rules</div>
            <div style={{ color: '#ccc' }}>Custom</div>
            <div style={{ color: '#ccc' }}>GL Impact</div>
          </div>
          <div className="items-table-wrapper">
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th style={{width: '8%'}}>TYPE</th>
                  <th style={{width: '10%'}}>DATE</th>
                  <th style={{width: '18%'}}>PAYEE</th>
                  <th style={{width: '10%'}}>CURRENCY</th>
                  <th style={{width: '15%'}}>TRANSACTION EXCHANGE RATE</th>
                  <th style={{width: '15%'}}>FOREIGN CURRENCY BALANCE</th>
                  <th style={{width: '12%'}}>BASE CURRENCY BALANCE</th>
                  <th style={{width: '12%'}}>ROUNDING GAIN/LOSS</th>
                </tr>
              </thead>
              <tbody>
                {revaluationData.details.map((detail, index) => (
                  <tr key={index}>
                    <td>{detail.type}</td>
                    <td>{detail.date}</td>
                    <td>{detail.payee}</td>
                    <td>{detail.currency}</td>
                    <td>{detail.transactionExchangeRate}</td>
                    <td>{detail.foreignCurrencyBalance}</td>
                    <td>{detail.baseCurrencyBalance}</td>
                    <td>{detail.roundingGainLoss}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="footer-actions">
          <button className="btn btn-secondary" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <div>
            <button className="btn btn-secondary" onClick={handleEdit}>
              <i className="fas fa-edit"></i>
              Edit
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-cog"></i>
              Actions
            </button>
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

export default ViewCurrencyRevaluationDetail;
