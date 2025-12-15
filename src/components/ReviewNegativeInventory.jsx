import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ReviewNegativeInventory = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    asOfDate: '8/11/2025',
    location: 'Singapore (TDQ)'
  });

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  const handleSearch = () => {
    showToast('Searching for negative inventory...', 'success');
  };

  const handleBack = () => {
    setCurrentPage('dashboard');
  };

  return (
    <div className="enquiries-container">
      {toast.show && <Toast message={toast.message} type={toast.type} onClose={() => setToast({ show: false, message: '', type: 'success' })} />}
      
      <div className="detail-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div>
            <h1>Review Negative Inventory</h1>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-toolbar" title="More">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>

      <div className="detail-content">
        <div style={{ display: 'grid', gridTemplateColumns: '300px 300px', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="form-group">
            <label className="form-label">AS OF DATE <span style={{ color: 'red' }}>*</span></label>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <input 
                type="text" 
                className="form-control"
                value={formData.asOfDate}
                onChange={(e) => handleFormChange('asOfDate', e.target.value)}
              />
              <i className="fas fa-calendar" style={{ color: '#666', cursor: 'pointer' }}></i>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">LOCATION</label>
            <select 
              className="form-control"
              value={formData.location}
              onChange={(e) => handleFormChange('location', e.target.value)}
            >
              <option>Singapore (TDQ)</option>
              <option>Bok Seng Yard</option>
              <option>Hong Hang Shipyard</option>
              <option>Mega yard</option>
              <option>MEP MARINE CC</option>
              <option>Shipyards/Construction</option>
              <option>Singapore (TDO)</option>
              <option>Singapore (TEA)</option>
              <option>Singapore (TMO)</option>
              <option>Singapore (TOMS)</option>
              <option>Singapore (TSV)</option>
              <option>Singapore(MEP)</option>
              <option>TOM - 11</option>
              <option>TOM External Workshop</option>
              <option>TOM - 13</option>
            </select>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <table className="enquiries-table">
            <thead>
              <tr>
                <th>ITEM</th>
                <th>SUBSIDIARY</th>
                <th>LOCATION</th>
                <th>QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                  No records to show.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="detail-footer">
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar-primary" onClick={handleSearch}>
          <i className="fas fa-search"></i>
          Search
        </button>
      </div>
    </div>
  );
};

export default ReviewNegativeInventory;
