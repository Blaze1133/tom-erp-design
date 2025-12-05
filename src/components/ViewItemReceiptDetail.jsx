import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewItemReceiptDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const receiptData = {
    documentNumber: 'IR00194',
    vendorName: 'CHIA HOCK HARDWARE TRADING',
    status: 'RECEIVED',
    date: '16/12/2021',
    postingPeriod: 'Dec 2021',
    createdFrom: 'Purchase Order #POTOM00141',
    memo: 'Safety Equipment',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    location: 'Singapore Yard',
    currency: 'SGD',
    exchangeRate: 1.00,
    items: [
      {
        id: 1,
        item: 'safety goggles',
        vendorName: 'CHIA HOCK HARDWARE TRADING',
        description: 'Safety Goggles - Clear Lens',
        quantity: 36,
        units: 'Pcs',
        rate: 12.50,
        amount: 450.00
      },
      {
        id: 2,
        item: 'Whistle',
        vendorName: 'CHIA HOCK HARDWARE TRADING',
        description: 'Safety Whistle',
        quantity: 24,
        units: 'Pcs',
        rate: 3.80,
        amount: 91.20
      },
      {
        id: 3,
        item: 'Head Light',
        vendorName: 'CHIA HOCK HARDWARE TRADING',
        description: 'LED Head Light',
        quantity: 10,
        units: 'Pcs',
        rate: 28.00,
        amount: 280.00
      }
    ]
  };

  const subtotal = receiptData.items.reduce((sum, item) => sum + item.amount, 0);

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-receive-orders');
    }
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('item-receipt');
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
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
          <div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#333' }}>
              {receiptData.documentNumber} <span style={{ fontSize: '14px', color: '#666', fontWeight: 'normal' }}>{receiptData.vendorName}</span>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '4px' }}>
              <span style={{ 
                padding: '3px 10px', 
                background: '#4caf50', 
                color: '#fff', 
                borderRadius: '3px', 
                fontSize: '11px',
                fontWeight: '600'
              }}>
                {receiptData.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons Bar */}
      <div style={{ 
        background: 'white', 
        padding: '12px 20px', 
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn btn-primary" onClick={handleEdit} style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-edit"></i> Edit
          </button>
          <button className="btn btn-secondary" onClick={handleBack} style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-arrow-left"></i> Back
          </button>
          <button className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-print"></i> Print
          </button>
          <button className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-copy"></i> Copy
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
            padding: '12px 20px',
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
          <div style={{ padding: '20px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '30px 60px',
              fontSize: '13px'
            }}>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>VENDOR <span style={{ color: '#e53e3e' }}>*</span></div>
                <div style={{ color: '#4a90e2', fontSize: '14px', cursor: 'pointer' }}>{receiptData.vendorName}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{receiptData.date}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DOCUMENT NUMBER</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{receiptData.documentNumber}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>POSTING PERIOD</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{receiptData.postingPeriod}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CREATED FROM</div>
                <div style={{ color: '#4a90e2', fontSize: '14px', cursor: 'pointer' }}>{receiptData.createdFrom}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>MEMO</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{receiptData.memo}</div>
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
            padding: '12px 20px',
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
          <div style={{ padding: '20px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '30px 60px',
              fontSize: '13px'
            }}>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500' }}>SUBSIDIARY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{receiptData.subsidiary}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500' }}>LOCATION</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{receiptData.location}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500' }}>CURRENCY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{receiptData.currency}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Items Section */}
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
            gap: '8px'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '11px', color: '#666' }}></i>
            <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0, color: '#333' }}>Items</h3>
          </div>
          <div style={{ padding: '15px 20px', background: '#f8f9fa', borderBottom: '1px solid #e0e0e0' }}>
            <div style={{ fontSize: '12px', color: '#666' }}>
              <strong>EXCHANGE RATE</strong> {receiptData.exchangeRate.toFixed(2)}
            </div>
          </div>
          <div className="items-table-wrapper">
            <table className="detail-items-table" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px 6px', fontSize: '11px', minWidth: '150px' }}>ITEM</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>VENDOR NAME</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DESCRIPTION</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>QUANTITY</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>UNITS</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>RATE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                {receiptData.items.map((item) => (
                  <tr key={item.id}>
                    <td style={{ padding: '8px 6px' }}>{item.item}</td>
                    <td style={{ padding: '8px 6px' }}>{item.vendorName}</td>
                    <td style={{ padding: '8px 6px' }}>{item.description}</td>
                    <td style={{ padding: '8px 6px' }}>{item.quantity}</td>
                    <td style={{ padding: '8px 6px' }}>{item.units}</td>
                    <td style={{ padding: '8px 6px' }}>{item.rate.toFixed(2)}</td>
                    <td style={{ padding: '8px 6px' }}>{item.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Section */}
          <div style={{ 
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '20px', 
            marginTop: '30px',
            padding: '0 20px 20px 20px'
          }}>
            <div style={{ 
              background: 'white', 
              padding: '20px', 
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
              border: '1px solid #e0e0e0',
              minWidth: '200px'
            }}>
              <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                TOTAL AMOUNT
              </div>
              <div style={{ fontSize: '24px', fontWeight: '600', color: '#e53e3e' }}>
                ${subtotal.toFixed(2)}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-actions">
          <button className="btn btn-secondary" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <div>
            <button className="btn btn-primary" onClick={handleEdit}>
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

export default ViewItemReceiptDetail;
