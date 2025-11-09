import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ReceiveReturnedOrder = ({ onBack }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [customer, setCustomer] = useState('- All -');
  const [receipts, setReceipts] = useState([]);

  const customers = [
    '- All -',
    'CHIA HOCK HARDWARE TRADING',
    'BNT INTERNATIONAL PTE LTD',
    'METAL FORMS PRIVATE LIMITED',
    '100 Baroid Surface Solutions',
    '1000 TEAM LEAD CONSTRUCTION PTE LTD'
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleCustomize = () => {
    showToast('Customize view coming soon', 'info');
  };

  const handleSubmit = () => {
    const selectedReceipts = receipts.filter(r => r.selected);
    if (selectedReceipts.length === 0) {
      showToast('Please select at least one return authorization to receive', 'error');
      return;
    }
    showToast(`${selectedReceipts.length} return authorization(s) received successfully!`, 'success');
    setReceipts(receipts.filter(r => !r.selected));
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-box-open" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Receive Return Authorization</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={() => showToast('More options coming soon', 'info')}>
            More
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Filter Section */}
        <div style={{ background: 'white', padding: '1.5rem', marginBottom: '1rem', border: '1px solid #e0e0e0' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>

          <div className="form-group" style={{ maxWidth: '300px' }}>
            <label className="form-label">CUSTOMER</label>
            <select 
              className="form-control"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
            >
              {customers.map((cust, index) => (
                <option key={index} value={cust}>{cust}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Table Section */}
        <div style={{ background: 'white', border: '1px solid #e0e0e0' }}>
          <div style={{ 
            padding: '1rem', 
            borderBottom: '1px solid #e0e0e0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <button 
              className="btn btn-secondary" 
              onClick={handleCustomize}
              style={{ fontSize: '0.875rem' }}
            >
              Customize
            </button>
          </div>

          <div className="items-table-wrapper">
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th style={{ width: '40px' }}>RECEIVE</th>
                  <th>DATE ▲</th>
                  <th>RETURN #</th>
                  <th>CUSTOMER : PROJECT NAME</th>
                  <th>MEMO</th>
                  <th style={{ textAlign: 'right' }}>RETURN TOTAL</th>
                  <th>CURRENCY</th>
                </tr>
              </thead>
              <tbody>
                {receipts.length === 0 ? (
                  <tr>
                    <td colSpan="7" style={{ textAlign: 'center', padding: '3rem', color: '#999' }}>
                      No records to show.
                    </td>
                  </tr>
                ) : (
                  receipts.map((receipt) => (
                    <tr key={receipt.id}>
                      <td style={{ textAlign: 'center' }}>
                        <input 
                          type="checkbox" 
                          checked={receipt.selected}
                          style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                        />
                      </td>
                      <td>{receipt.date}</td>
                      <td style={{ color: 'var(--blue-accent)', fontWeight: '500' }}>
                        {receipt.return}
                      </td>
                      <td>{receipt.customerProjectName}</td>
                      <td style={{ color: '#666' }}>{receipt.memo}</td>
                      <td className="amount">{receipt.returnTotal}</td>
                      <td>{receipt.currency}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Bottom Action Button */}
          <div style={{ 
            padding: '1.5rem', 
            borderTop: '1px solid #e0e0e0'
          }}>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
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

export default ReceiveReturnedOrder;
