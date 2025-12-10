import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewBillPurchaseOrderDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const poData = {
    prId: 'PR-2021-0145',
    project: 'TOM-ONSHORE-TRADING',
    poNumber: 'POTOMO0327',
    vendorName: 'CHIA HOCK HARDWARE TRADING',
    status: 'PENDING BILL',
    date: '8/7/2021',
    refPoNumber: 'POTOMO0327',
    otherComments: 'IF NOT COMPLETE OR DEFECT, INSTRUCTION PERSON CONTACT LET',
    approvalStatus: 'Approved',
    customForm: 'TOM Purchase Order',
    receiveBy: '',
    vendorNumber: '',
    poType: 'Main',
    refNumber: '',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    department: 'MEP',
    class: 'Consumable Item',
    location: 'TOM -11',
    currency: 'SGD',
    purchaseType: 'Non-Critical',
    customCreatedFrom: 'Order to Bill single Vendor',
    exchangeRate: 1.00,
    subtotal: 45.00,
    taxTotal: 3.15,
    total: 48.15,
    items: [
      {
        id: 1,
        item: 'Whistle',
        vendorName: '',
        received: 30,
        billed: 0,
        onHand: 30,
        quantity: 30,
        units: 'Pcs',
        description: '',
        rate: 1.50,
        taxCode: 'GST_SG-7%',
        amount: 45.00,
        taxRate: '7.0%',
        grossAmt: 48.15,
        taxAmt: 3.15
      }
    ]
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('bill-purchase-orders');
    }
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('edit-bill-purchase-order');
    }
  };

  const handleBill = () => {
    showToast('Bill functionality coming soon', 'info');
  };

  const handleAuthorizeReturn = () => {
    showToast('Authorize Return functionality coming soon', 'info');
  };

  const handleEnterPrepayment = () => {
    showToast('Enter Prepayment functionality coming soon', 'info');
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
                background: '#ffc107', 
                color: '#333', 
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
          <button className="btn btn-secondary" onClick={handleBill} style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-file-invoice"></i> Bill
          </button>
          <button className="btn btn-secondary" onClick={handleAuthorizeReturn} style={{ padding: '6px 16px', fontSize: '13px' }}>
            Authorize Return
          </button>
          <button className="btn btn-secondary" onClick={handleEnterPrepayment} style={{ padding: '6px 16px', fontSize: '13px' }}>
            Enter Prepayment
          </button>
          <button className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-times"></i> Close
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
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>PR ID <span style={{ color: '#e53e3e' }}>*</span></div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.prId}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>PROJECT <span style={{ color: '#e53e3e' }}>*</span></div>
                <div style={{ color: '#4a90e2', fontSize: '14px', cursor: 'pointer' }}>{poData.project}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CUSTOM FORM <span style={{ color: '#e53e3e' }}>*</span></div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.customForm}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>RECEIVE BY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.receiveBy || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>VENDOR #</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.vendorNumber || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DATE <span style={{ color: '#e53e3e' }}>*</span></div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.date}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>VENDOR <span style={{ color: '#e53e3e' }}>*</span></div>
                <div style={{ color: '#4a90e2', fontSize: '14px', cursor: 'pointer' }}>{poData.vendorName}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>PO #</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.poNumber}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>PO TYPE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.poType}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>OTHER COMMENTS OR SPECIAL INSTRUCTIONS</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.otherComments}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>REF PO NUMBER</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.refNumber || '-'}</div>
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
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '30px 60px',
              fontSize: '13px'
            }}>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>SUBSIDIARY <span style={{ color: '#e53e3e' }}>*</span></div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.subsidiary}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CLASS</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.class}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>LOCATION</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.location}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DEPARTMENT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.department}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CURRENCY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.currency}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>PURCHASE TYPE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.purchaseType}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CUSTOM CREATED FROM</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{poData.customCreatedFrom}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Items Table */}
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
              <strong>EXCHANGE RATE</strong> 1.00
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
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>OPTIONS</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>CUSTOMER:PROJECT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DEPARTMENT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>CLASS</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>BILLABLE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>MATCH BILL TO RECEIPT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>EXPECTED RECEIPT DATE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>CLOSED</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DO QUANTITY</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>HISTORY</th>
                </tr>
              </thead>
              <tbody>
                {poData.items.map((item) => (
                  <tr key={item.id}>
                    <td style={{ padding: '8px 6px' }}>{item.item}</td>
                    <td style={{ padding: '8px 6px' }}>{item.vendorName || '-'}</td>
                    <td style={{ padding: '8px 6px' }}>{item.received}</td>
                    <td style={{ padding: '8px 6px' }}>{item.billed}</td>
                    <td style={{ padding: '8px 6px' }}>{item.onHand}</td>
                    <td style={{ padding: '8px 6px' }}>{item.quantity}</td>
                    <td style={{ padding: '8px 6px' }}>{item.units}</td>
                    <td style={{ padding: '8px 6px' }}>{item.description || '-'}</td>
                    <td style={{ padding: '8px 6px' }}>{item.rate.toFixed(2)}</td>
                    <td style={{ padding: '8px 6px' }}>{item.taxCode}</td>
                    <td style={{ padding: '8px 6px' }}>{item.amount.toFixed(2)}</td>
                    <td style={{ padding: '8px 6px' }}>{item.taxRate}</td>
                    <td style={{ padding: '8px 6px' }}>{item.grossAmt.toFixed(2)}</td>
                    <td style={{ padding: '8px 6px' }}>{item.taxAmt.toFixed(2)}</td>
                    <td style={{ padding: '8px 6px' }}>-</td>
                    <td style={{ padding: '8px 6px' }}>-</td>
                    <td style={{ padding: '8px 6px' }}>TOM</td>
                    <td style={{ padding: '8px 6px' }}>-</td>
                    <td style={{ padding: '8px 6px' }}>-</td>
                    <td style={{ padding: '8px 6px' }}>-</td>
                    <td style={{ padding: '8px 6px' }}>8/7/2021</td>
                    <td style={{ padding: '8px 6px' }}>-</td>
                    <td style={{ padding: '8px 6px' }}>-</td>
                    <td style={{ padding: '8px 6px', color: '#4a90e2', cursor: 'pointer' }}>History</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Section Below Table */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '20px', 
            marginTop: '30px',
            padding: '0 20px'
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

export default ViewBillPurchaseOrderDetail;
