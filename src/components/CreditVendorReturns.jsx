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

  const handleDateClick = (returnItem) => {
    if (setCurrentPage) {
      setCurrentPage('view-vendor-return-detail');
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-undo" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Refund Vendor Return Authorization</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary">
            More
          </button>
        </div>
      </div>

      <div className="quotation-container">
        <div style={{ 
          background: 'white', 
          borderRadius: '8px', 
          padding: '24px',
          marginBottom: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '11px', color: '#666', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600' }}>
              VENDOR
            </label>
            <select 
              className="form-control"
              value={vendor}
              onChange={(e) => setVendor(e.target.value)}
              style={{ maxWidth: '300px' }}
            >
              <option value="">Select...</option>
              <option>TOKIO MARINE INSURANCE SINGAPORE LTD.</option>
              <option>HALCYON TECHNOLOGY SINGAPORE PTE LTD.</option>
              <option>SMRT AUTOMOTIVE SERVICES PTE LTD</option>
            </select>
          </div>

          <button 
            className="btn btn-primary" 
            onClick={handleSubmit}
            style={{ marginBottom: '20px' }}
          >
            Submit
          </button>

          <div style={{ 
            background: '#f8f9fa', 
            padding: '12px 16px',
            marginBottom: '15px',
            borderRadius: '4px',
            fontSize: '13px',
            fontWeight: '600',
            color: '#333'
          }}>
            Customize
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #e0e0e0' }}>
                  <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>
                    CREATED/MODIFIED
                  </th>
                  <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>
                    DATE ▼
                  </th>
                  <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>
                    RETURN #
                  </th>
                  <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>
                    VENDOR NAME
                  </th>
                  <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>
                    MEMO
                  </th>
                  <th style={{ padding: '10px 8px', textAlign: 'right', fontSize: '11px', fontWeight: '600', color: '#666' }}>
                    RETURN TOTAL
                  </th>
                  <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>
                    CURRENCY
                  </th>
                </tr>
              </thead>
              <tbody>
                {returns.map((returnItem) => (
                  <tr key={returnItem.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '10px 8px' }}>
                      <input 
                        type="checkbox"
                        checked={selectedReturn?.id === returnItem.id}
                        onChange={() => setSelectedReturn(returnItem)}
                      />
                    </td>
                    <td style={{ padding: '10px 8px' }}>
                      <button 
                        onClick={() => handleDateClick(returnItem)}
                        style={{ 
                          background: 'none', 
                          border: 'none', 
                          color: '#4a90e2', 
                          cursor: 'pointer',
                          textDecoration: 'underline',
                          padding: 0,
                          fontSize: '13px'
                        }}
                      >
                        {returnItem.date}
                      </button>
                    </td>
                    <td style={{ padding: '10px 8px' }}>{returnItem.returnNumber}</td>
                    <td style={{ padding: '10px 8px' }}>{returnItem.vendorName}</td>
                    <td style={{ padding: '10px 8px' }}>{returnItem.memo}</td>
                    <td style={{ padding: '10px 8px', textAlign: 'right' }}>
                      {returnItem.returnTotal.toFixed(2)}
                    </td>
                    <td style={{ padding: '10px 8px' }}>{returnItem.currency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button 
            className="btn btn-primary" 
            onClick={handleSubmit}
            style={{ marginTop: '20px' }}
          >
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
