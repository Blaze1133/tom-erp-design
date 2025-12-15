import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CreditVendorReturns = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [vendor, setVendor] = useState('');
  const [selectedReturn, setSelectedReturn] = useState(null);

  const returns = [
    {
      id: 1,
      date: '9/5/2023',
      returnNumber: 'VRATMOS00002',
      vendorName: 'TOKIO MARINE INSURANCE SINGAPORE LTD.',
      memo: 'PO created from PR: # PR23TM0S00076',
      returnTotal: 45.00,
      currency: 'SGD'
    }
  ];

  const handleSubmit = () => {
    if (!vendor) {
      showToast('Please select a vendor', 'error');
      return;
    }
    if (!selectedReturn) {
      showToast('Please select a return to process', 'error');
      return;
    }
    showToast('Vendor return authorization submitted successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      showToast('Changes cancelled', 'info');
    }
  };

  const handleDateClick = (returnItem) => {
    if (setCurrentPage) {
      setCurrentPage('view-vendor-return-detail');
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-undo"></i>
          <div>
            <h1>Refund Vendor Return Authorization</h1>
            <div className="detail-subtitle">
              <span>Process Vendor Returns</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
        </div>
      </div>

      <div className="detail-content">
        {/* Vendor Selection Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Vendor Selection</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>VENDOR</label>
                <select 
                  className="form-control"
                  value={vendor}
                  onChange={(e) => setVendor(e.target.value)}
                >
                  <option value="">Select...</option>
                  <option>TOKIO MARINE INSURANCE SINGAPORE LTD.</option>
                  <option>HALCYON TECHNOLOGY SINGAPORE PTE LTD.</option>
                  <option>SMRT AUTOMOTIVE SERVICES PTE LTD</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Available Returns Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Available Returns</h3>
          </div>
          <div className="section-body">
            <div className="items-table-container">
              <table className="items-table">
                <thead>
                  <tr>
                    <th style={{ width: '8%' }}>CREATED/MODIFIED</th>
                    <th style={{ width: '12%' }}>DATE ▼</th>
                    <th style={{ width: '15%' }}>RETURN #</th>
                    <th style={{ width: '25%' }}>VENDOR NAME</th>
                    <th style={{ width: '25%' }}>MEMO</th>
                    <th style={{ width: '10%' }}>RETURN TOTAL</th>
                    <th style={{ width: '5%' }}>CURRENCY</th>
                  </tr>
                </thead>
                <tbody>
                  {returns.map((returnItem) => (
                    <tr key={returnItem.id}>
                      <td>
                        <input 
                          type="checkbox"
                          checked={selectedReturn?.id === returnItem.id}
                          onChange={() => setSelectedReturn(returnItem)}
                        />
                      </td>
                      <td>
                        <button 
                          onClick={() => handleDateClick(returnItem)}
                          className="view-link"
                        >
                          {returnItem.date}
                        </button>
                      </td>
                      <td>{returnItem.returnNumber}</td>
                      <td>{returnItem.vendorName}</td>
                      <td>{returnItem.memo}</td>
                      <td style={{ textAlign: 'right' }}>
                        {returnItem.returnTotal.toFixed(2)}
                      </td>
                      <td>{returnItem.currency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="detail-footer">
          <button className="btn-toolbar" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn-toolbar-primary" onClick={handleSubmit}>
            <i className="fas fa-save"></i>
            Submit
          </button>
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

export default CreditVendorReturns;
