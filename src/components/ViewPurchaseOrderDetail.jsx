import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewPurchaseOrderDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('items');

  const poData = {
    poNumber: 'PO-2024-001',
    vendorName: 'Pacific Marine Supplies',
    status: 'APPROVED',
    date: '15/01/2024',
    refPoNumber: '',
    otherComments: 'Marine Equipment Purchase',
    approvalStatus: 'Approved',
    receiveBy: '30/01/2024',
    refNumber: '',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    department: 'Engineering',
    class: 'Material Supply',
    location: 'Singapore Yard',
    currency: 'SGD',
    purchaseType: 'Critical',
    exchangeRate: 1.00,
    subtotal: 8500.00,
    taxTotal: 765.00,
    total: 9265.00,
    items: [
      {
        id: 1,
        item: 'Hydraulic Pumps',
        vendorName: 'Pacific Marine Supplies',
        received: 0,
        billed: 0,
        onHand: 0,
        quantity: 10,
        units: 'Pcs',
        description: 'High Pressure Hydraulic Pumps',
        rate: 850.00,
        taxCode: 'GST_SG-9%',
        amount: 8500.00,
        taxRate: '9.0%',
        grossAmt: 9265.00,
        taxAmt: 765.00
      }
    ]
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-purchase-orders');
    }
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('enter-purchase-orders');
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
              {poData.poNumber} <span style={{ fontSize: '14px', color: '#666', fontWeight: 'normal' }}>{poData.vendorName}</span>
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
                {poData.status}
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
                <div style={{ color: '#4a90e2', fontSize: '14px', cursor: 'pointer' }}>{poData.vendorName}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.date}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>PO#</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.poNumber}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>RECEIVE BY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.receiveBy}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>REF PO NUMBER</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.refNumber || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>OTHER COMMENTS</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.otherComments}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>APPROVAL STATUS</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.approvalStatus}</div>
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
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.subsidiary}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500' }}>CLASS</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.class}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500' }}>LOCATION</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.location}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500' }}>DEPARTMENT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.department}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500' }}>CURRENCY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.currency}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500' }}>PURCHASE TYPE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.purchaseType}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Items Tab */}
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
              <strong>EXCHANGE RATE</strong> {poData.exchangeRate.toFixed(2)}
            </div>
          </div>
          <div className="items-table-wrapper">
            <table className="detail-items-table" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px 6px', fontSize: '11px', minWidth: '150px' }}>ITEM</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>VENDOR NAME</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>RECEIVED</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>BILLED</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>ON HAND</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>QUANTITY</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>UNITS</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DESCRIPTION</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>RATE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>TAX CODE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>AMOUNT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>TAX RATE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>GROSS AMT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>TAX AMT</th>
                </tr>
              </thead>
              <tbody>
                {poData.items.map((item) => (
                  <tr key={item.id}>
                    <td style={{ padding: '8px 6px' }}>{item.item}</td>
                    <td style={{ padding: '8px 6px' }}>{item.vendorName}</td>
                    <td style={{ padding: '8px 6px' }}>{item.received}</td>
                    <td style={{ padding: '8px 6px' }}>{item.billed}</td>
                    <td style={{ padding: '8px 6px' }}>{item.onHand}</td>
                    <td style={{ padding: '8px 6px' }}>{item.quantity}</td>
                    <td style={{ padding: '8px 6px' }}>{item.units}</td>
                    <td style={{ padding: '8px 6px' }}>{item.description}</td>
                    <td style={{ padding: '8px 6px' }}>{item.rate.toFixed(2)}</td>
                    <td style={{ padding: '8px 6px' }}>{item.taxCode}</td>
                    <td style={{ padding: '8px 6px' }}>{item.amount.toFixed(2)}</td>
                    <td style={{ padding: '8px 6px' }}>{item.taxRate}</td>
                    <td style={{ padding: '8px 6px' }}>{item.grossAmt.toFixed(2)}</td>
                    <td style={{ padding: '8px 6px' }}>{item.taxAmt.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Section */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '20px', 
            marginTop: '30px',
            padding: '0 20px 20px 20px'
          }}>
            <div style={{ 
              background: 'white', 
              padding: '20px', 
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
              border: '1px solid #e0e0e0'
            }}>
              <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                SUBTOTAL
              </div>
              <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                ${poData.subtotal.toFixed(2)}
              </div>
            </div>

            <div style={{ 
              background: 'white', 
              padding: '20px', 
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
              border: '1px solid #e0e0e0'
            }}>
              <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                TAX AMOUNT
              </div>
              <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                ${poData.taxTotal.toFixed(2)}
              </div>
            </div>

            <div style={{ 
              background: 'white', 
              padding: '20px', 
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
              border: '1px solid #e0e0e0'
            }}>
              <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                DISCOUNT
              </div>
              <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                $0.00
              </div>
            </div>

            <div style={{ 
              background: 'white', 
              padding: '20px', 
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
              border: '1px solid #e0e0e0'
            }}>
              <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                TOTAL AMOUNT
              </div>
              <div style={{ fontSize: '24px', fontWeight: '600', color: '#e53e3e' }}>
                ${poData.total.toFixed(2)}
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

export default ViewPurchaseOrderDetail;
