import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditCurrencyRevaluation = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [formData, setFormData] = useState({
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
    location: ''
  });

  const [details] = useState([
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
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    showToast('Currency revaluation updated successfully!', 'success');
    setTimeout(() => {
      if (setCurrentPage) {
        setCurrentPage('view-currency-revaluations');
      }
    }, 1500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-currency-revaluations');
      }
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-dollar-sign" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Currency Revaluation (Rounding Gain/Loss)</h1>
          <span style={{ fontSize: '18px', color: '#666', marginLeft: '10px' }}>{formData.docNumber}</span>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information */}
        <div className="form-section">
          <h2 className="section-title" style={{ fontSize: '18px', fontWeight: '600' }}>
            <i className="fas fa-info-circle"></i>
            Primary Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0 1rem 0' }} />
          
          <div className="form-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="form-group">
              <label className="form-label">Posting Period</label>
              <select 
                className="form-control"
                value={formData.postingPeriod}
                onChange={(e) => handleInputChange('postingPeriod', e.target.value)}
              >
                <option>Oct 2021</option>
                <option>Nov 2021</option>
                <option>Dec 2021</option>
                <option>Jan 2022</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Subsidiary</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.subsidiary}
                disabled
                style={{ background: '#f8f9fa' }}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Total Variance</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.totalVariance}
                disabled
                style={{ background: '#f8f9fa' }}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Transaction Number</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.transactionNumber}
                disabled
                style={{ background: '#f8f9fa' }}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Memo</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.memo}
                onChange={(e) => handleInputChange('memo', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Created From</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.createdFrom}
                disabled
                style={{ background: '#f8f9fa' }}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Ref No.</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.refNo}
                disabled
                style={{ background: '#f8f9fa' }}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Currency</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.currency}
                disabled
                style={{ background: '#f8f9fa' }}
              />
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className="form-section" style={{ marginTop: '1.5rem' }}>
          <h2 className="section-title" style={{ fontSize: '18px', fontWeight: '600' }}>
            <i className="fas fa-tags"></i>
            Classification
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0 1rem 0' }} />
          
          <div className="form-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="form-group">
              <label className="form-label">Department <span style={{ color: '#e53e3e' }}>*</span></label>
              <select 
                className="form-control"
                value={formData.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Construction</option>
                <option>MEP</option>
                <option>MEP MARINE</option>
                <option>O&G</option>
                <option>Piping</option>
                <option>Shipyard</option>
                <option>Shipyard : Keppel Fels</option>
                <option>Shipyard : Keppel Shipyard</option>
                <option>Shipyard : Sembcorp Marine</option>
                <option>Shipyard : SembMarine Admiralty</option>
                <option>Shipyard : SembMarine Tuas</option>
                <option>Shipyard : ST Marine</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Class</label>
              <select 
                className="form-control"
                value={formData.class}
                onChange={(e) => handleInputChange('class', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Consumable Item</option>
                <option>Electrical Works</option>
                <option>Engineering Services</option>
                <option>Installation Works</option>
                <option>Maintenance Services</option>
                <option>Marine Equipment</option>
                <option>Material Supply</option>
                <option>MEP Works</option>
                <option>Offshore Services</option>
                <option>Piping Works</option>
                <option>Project Management</option>
                <option>Repair & Maintenance</option>
                <option>Safety Equipment</option>
                <option>Shipyard Services</option>
                <option>Steel Fabrication</option>
                <option>Technical Consultancy</option>
                <option>Welding Services</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Location</label>
              <select 
                className="form-control"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Bok Seng Yard</option>
                <option>Hong Hang Shipyard</option>
                <option>Mega yard</option>
                <option>MEP MARINE CC</option>
                <option>Shipyards/Construction</option>
                <option>Singapore(MEP)</option>
                <option>TOM - 11</option>
                <option>TOM - 12</option>
                <option>TOM - 13</option>
                <option>TOM - 14</option>
                <option>TOM - 15</option>
                <option>TOM - 16</option>
                <option>TOM - 17</option>
                <option>TOM - 18</option>
                <option>TOM - 19</option>
                <option>TOM - 20</option>
              </select>
            </div>
          </div>
        </div>

        {/* Details Table */}
        <div className="form-section" style={{ marginTop: '1.5rem' }}>
          <div style={{ 
            padding: '12px 20px',
            background: '#5b6b8f',
            color: 'white',
            display: 'flex',
            gap: '20px',
            fontSize: '13px',
            fontWeight: '500',
            borderRadius: '4px 4px 0 0'
          }}>
            <div style={{ borderBottom: '2px solid white', paddingBottom: '8px' }}>Details</div>
            <div style={{ color: '#ccc' }}>Applied Rules</div>
            <div style={{ color: '#ccc' }}>Custom</div>
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
                {details.map((detail, index) => (
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
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-primary" onClick={handleSave}>
              <i className="fas fa-save"></i>
              Save
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

export default EditCurrencyRevaluation;
