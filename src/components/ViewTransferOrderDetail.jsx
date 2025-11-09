import React from 'react';
import './Enquiries.css';

const ViewTransferOrderDetail = ({ setCurrentPage }) => {
  // Dummy data
  const orderData = {
    documentNumber: 'TO2025-001',
    status: 'PENDING APPROVAL',
    customForm: 'TOMTransfer_Order',
    order: 'TO2025-001',
    date: '8/11/2025',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    fromLocation: 'TOM -11',
    toLocation: 'MEP MARINE CC',
    employee: 'John Smith',
    firmed: false,
    memo: 'Monthly material transfer for Project Alpha',
    useItemCostAsTransferCost: true,
    incoterm: 'DAP',
    department: 'TOM : Engineering',
    class: 'TOM : Projects',
    refProjectNo: 'PRJ-2025-001'
  };

  const items = [
    {
      id: 1,
      item: 'Steel Plates - Grade A',
      available: 500,
      onHand: 500,
      quantity: 150,
      transferPrice: 45.50,
      units: 'pcs',
      amount: 6825.00,
      description: 'High-grade steel plates for marine construction',
      expectedReceiptDate: '15/11/2025',
      commit: 'Firm',
      commitmentConfirmed: 'Yes',
      orderPriority: 'High',
      options: '',
      closed: false
    }
  ];

  const handleEdit = () => {
    setCurrentPage('edit-transfer-order');
  };

  const handleBack = () => {
    setCurrentPage('view-transfer-orders');
  };

  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + item.amount, 0).toFixed(2);
  };

  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ 
        background: 'white', 
        padding: '20px 32px', 
        borderBottom: '1px solid #e0e0e0'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <i className="fas fa-exchange-alt" style={{ fontSize: '28px', color: '#4a90e2' }}></i>
            <div>
              <div style={{ fontSize: '12px', color: '#999', marginBottom: '4px', letterSpacing: '0.5px' }}>Transfer Order</div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>{orderData.documentNumber}</span>
                <span style={{ 
                  background: '#ffc107', 
                  color: '#000', 
                  padding: '4px 12px', 
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {orderData.status}
                </span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={handleBack} style={{ 
              padding: '10px 18px', 
              background: '#4a90e2',
              color: 'white',
              border: 'none', 
              borderRadius: '4px',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer'
            }}>List</button>
            <button style={{ 
              padding: '10px 18px', 
              background: 'white', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              fontSize: '13px',
              cursor: 'pointer'
            }}>Search</button>
            <button style={{ 
              padding: '10px 18px', 
              background: 'white', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              fontSize: '13px',
              cursor: 'pointer'
            }}>Customize</button>
            <button style={{ 
              padding: '10px 18px', 
              background: 'white', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              fontSize: '13px',
              cursor: 'pointer'
            }}>More</button>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={handleEdit} style={{ 
            padding: '10px 20px', 
            background: '#dc3545', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            fontSize: '13px',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <i className="fas fa-edit"></i> Edit
          </button>
          <button onClick={handleBack} style={{ 
            padding: '10px 20px', 
            background: 'white', 
            color: '#333', 
            border: '1px solid #ddd', 
            borderRadius: '4px',
            fontSize: '13px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <i className="fas fa-arrow-left"></i> Back
          </button>
          <button style={{ 
            padding: '10px 20px', 
            background: 'white', 
            color: '#333', 
            border: '1px solid #ddd', 
            borderRadius: '4px',
            fontSize: '13px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <i className="fas fa-print"></i> Print
          </button>
          <button style={{ 
            padding: '10px 20px', 
            background: 'white', 
            color: '#333', 
            border: '1px solid #ddd', 
            borderRadius: '4px',
            fontSize: '13px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <i className="fas fa-file-pdf"></i> PDF
          </button>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px' }}>
        
        {/* Primary Information */}
        <div style={{ background: 'white', borderRadius: '8px', marginBottom: '20px', border: '1px solid #e0e0e0' }}>
          <div style={{ 
            padding: '16px 24px', 
            borderBottom: '1px solid #e0e0e0',
            background: '#fafafa',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '12px', color: '#666' }}></i>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>Primary Information</span>
          </div>
          <div style={{ padding: '24px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '24px 40px',
              fontSize: '13px'
            }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#999', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>CUSTOM FORM</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{orderData.customForm}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#999', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>EMPLOYEE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{orderData.employee}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#999', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>ORDER #</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{orderData.order}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#999', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>STATUS</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{orderData.status}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#999', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>DATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{orderData.date}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#999', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>FIRMED</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{orderData.firmed ? 'Yes' : 'No'}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#999', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>SUBSIDIARY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{orderData.subsidiary}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#999', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>MEMO</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{orderData.memo}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#999', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>FROM LOCATION</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{orderData.fromLocation}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#999', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>TO LOCATION</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{orderData.toLocation}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#999', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>INCOTERM</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{orderData.incoterm}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#999', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>USE ITEM COST AS TRANSFER COST</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{orderData.useItemCostAsTransferCost ? 'Yes' : 'No'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div style={{ background: 'white', borderRadius: '8px', marginBottom: '20px', border: '1px solid #e0e0e0' }}>
          <div style={{ 
            padding: '16px 24px', 
            borderBottom: '1px solid #e0e0e0',
            background: '#fafafa',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '12px', color: '#666' }}></i>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>Classification</span>
          </div>
          <div style={{ padding: '24px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '24px 40px',
              fontSize: '13px'
            }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#999', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>DEPARTMENT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{orderData.department}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#999', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>CLASS</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{orderData.class}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#999', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>REF PROJECT NO</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{orderData.refProjectNo}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Items */}
        <div style={{ background: 'white', borderRadius: '8px', marginBottom: '20px', border: '1px solid #e0e0e0' }}>
          <div style={{ 
            padding: '16px 24px', 
            borderBottom: '1px solid #e0e0e0',
            background: '#fafafa',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '12px', color: '#666' }}></i>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>Items</span>
          </div>
          <div style={{ padding: '24px' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ 
                width: '100%', 
                borderCollapse: 'collapse',
                fontSize: '13px'
              }}>
                <thead>
                  <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#495057' }}>ITEM</th>
                    <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600', color: '#495057' }}>AVAILABLE</th>
                    <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600', color: '#495057' }}>ON HAND</th>
                    <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600', color: '#495057' }}>QUANTITY</th>
                    <th style={{ padding: '12px', textAlign: 'right', fontWeight: '600', color: '#495057' }}>TRANSFER PRICE</th>
                    <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600', color: '#495057' }}>UNITS</th>
                    <th style={{ padding: '12px', textAlign: 'right', fontWeight: '600', color: '#495057' }}>AMOUNT</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#495057' }}>DESCRIPTION</th>
                    <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600', color: '#495057' }}>EXPECTED RECEIPT DATE</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} style={{ borderBottom: '1px solid #dee2e6' }}>
                      <td style={{ padding: '12px', color: '#212529' }}>{item.item}</td>
                      <td style={{ padding: '12px', color: '#212529', textAlign: 'center' }}>{item.available}</td>
                      <td style={{ padding: '12px', color: '#212529', textAlign: 'center' }}>{item.onHand}</td>
                      <td style={{ padding: '12px', color: '#212529', textAlign: 'center', fontWeight: '500' }}>{item.quantity}</td>
                      <td style={{ padding: '12px', color: '#212529', textAlign: 'right' }}>{item.transferPrice.toFixed(2)}</td>
                      <td style={{ padding: '12px', color: '#212529', textAlign: 'center' }}>{item.units}</td>
                      <td style={{ padding: '12px', color: '#212529', textAlign: 'right', fontWeight: '500' }}>{item.amount.toFixed(2)}</td>
                      <td style={{ padding: '12px', color: '#666' }}>{item.description}</td>
                      <td style={{ padding: '12px', color: '#212529', textAlign: 'center' }}>{item.expectedReceiptDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'flex-end',
              paddingTop: '20px',
              marginTop: '20px',
              borderTop: '1px solid #e0e0e0'
            }}>
              <div style={{ 
                background: '#f8f9fa', 
                padding: '16px 24px',
                borderRadius: '6px',
                minWidth: '300px'
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '16px',
                  fontWeight: '600'
                }}>
                  <span style={{ color: '#666' }}>TOTAL</span>
                  <span style={{ color: '#333', fontSize: '18px' }}>{calculateTotal()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTransferOrderDetail;
