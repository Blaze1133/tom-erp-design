import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCustomDeliveryOrderDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [shippingAddressCollapsed, setShippingAddressCollapsed] = useState(false);
  const [itemsCollapsed, setItemsCollapsed] = useState(false);

  // Sample data
  const deliveryOrderData = {
    documentNo: 'DOCTOM00145',
    status: 'DELIVERED',
    shipDate: '01/07/2024',
    location: 'Singapore (MEP)',
    warehouse: 'MEP Main Warehouse',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    department: 'TOM: Logistic',
    class: 'Material Supply',
    shipMethod: 'Own Transport',
    termsOfShipment: 'FOB (Free On Board)',
    project: 'Marine Equipment Supply - Q1 2024',
    requestedBy: 'MEP01 001 JEGANATHAN SUNDARAVELU',
    refEntity: '109 Bintang Mas Shipping Pte Ltd',
    shippingAddress: '2 Boon Leat Terrace, #08-02\nHarbourside Building 2, Singapore\n119844.',
    memo: 'Urgent delivery for marine project',
    items: [
      {
        id: 1,
        itemCode: '12" Divider',
        itemDescription: '12" Divider',
        qty: 100,
        unitType: 'PCS',
        rate: 25.50,
        amount: 2550.00,
        retentionAmount: 255.00,
        deliveredQty: 100,
        memo: 'Delivered on time'
      },
      {
        id: 2,
        itemCode: '110 V Female Connector',
        itemDescription: '110 V Female Connector',
        qty: 200,
        unitType: 'PCS',
        rate: 15.00,
        amount: 3000.00,
        retentionAmount: 300.00,
        deliveredQty: 200,
        memo: ''
      },
      {
        id: 3,
        itemCode: 'Cable Gland M20',
        itemDescription: 'Cable Gland M20 - Brass',
        qty: 150,
        unitType: 'PCS',
        rate: 8.50,
        amount: 1275.00,
        retentionAmount: 127.50,
        deliveredQty: 150,
        memo: ''
      }
    ]
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-truck"></i>
          <div>
            <h1>Delivery Order</h1>
            <div className="detail-subtitle">
              <span>{deliveryOrderData.documentNo}</span>
              <span className="status-badge-detail" style={{ 
                background: deliveryOrderData.status === 'DELIVERED' ? '#4caf50' : '#ff9800',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: '600',
                marginLeft: '10px'
              }}>
                {deliveryOrderData.status}
              </span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-action">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-action" onClick={handleBack}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar-primary" onClick={handleEdit}>
          <i className="fas fa-edit"></i>
          Edit
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-copy"></i>
          Copy
        </button>
        <div style={{ marginLeft: 'auto' }}>
          <button className="btn-toolbar">
            <i className="fas fa-cog"></i>
            Actions
          </button>
        </div>
      </div>

      <div className="detail-content">

        {/* Primary Information Section */}
        <div className={`detail-section ${primaryInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setPrimaryInfoCollapsed(!primaryInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>DOCUMENT NO</label>
                <div className="field-value">{deliveryOrderData.documentNo}</div>
              </div>
              <div className="detail-field">
                <label>SHIP DATE</label>
                <div className="field-value">{deliveryOrderData.shipDate}</div>
              </div>
              <div className="detail-field">
                <label>LOCATION</label>
                <div className="field-value">{deliveryOrderData.location}</div>
              </div>
              <div className="detail-field">
                <label>WAREHOUSE/LOCATION</label>
                <div className="field-value">{deliveryOrderData.warehouse}</div>
              </div>
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{deliveryOrderData.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>DEPARTMENT</label>
                <div className="field-value">{deliveryOrderData.department || '-'}</div>
              </div>
              <div className="detail-field">
                <label>CLASS</label>
                <div className="field-value">{deliveryOrderData.class || '-'}</div>
              </div>
              <div className="detail-field">
                <label>SHIP METHOD</label>
                <div className="field-value">{deliveryOrderData.shipMethod || '-'}</div>
              </div>
              <div className="detail-field">
                <label>TERMS OF SHIPMENT</label>
                <div className="field-value">{deliveryOrderData.termsOfShipment || '-'}</div>
              </div>
              <div className="detail-field">
                <label>PROJECT</label>
                <div className="field-value">{deliveryOrderData.project || '-'}</div>
              </div>
              <div className="detail-field">
                <label>REQUESTED BY</label>
                <div className="field-value">{deliveryOrderData.requestedBy || '-'}</div>
              </div>
              <div className="detail-field">
                <label>REF ENTITY</label>
                <div className="field-value">{deliveryOrderData.refEntity || '-'}</div>
              </div>
              <div className="detail-field">
                <label>STATUS</label>
                <div className="field-value">{deliveryOrderData.status}</div>
              </div>
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label>MEMO</label>
                <div className="field-value">{deliveryOrderData.memo || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Address Section */}
        <div className={`detail-section ${shippingAddressCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setShippingAddressCollapsed(!shippingAddressCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Shipping Address</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                <label>SHIPPING ADDRESS</label>
                <div className="field-value" style={{ whiteSpace: 'pre-line' }}>
                  {deliveryOrderData.shippingAddress || '-'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Items Section */}
        <div className={`detail-section ${itemsCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setItemsCollapsed(!itemsCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Items</h3>
          </div>
          <div className="section-body">
            <div style={{ overflowX: 'auto' }}>
              <table className="detail-items-table">
                <thead>
                  <tr>
                    <th style={{ width: '3%' }}>#</th>
                    <th style={{ width: '12%' }}>ITEM CODE</th>
                    <th style={{ width: '18%' }}>ITEM DESCRIPTION</th>
                    <th style={{ width: '8%' }}>QTY</th>
                    <th style={{ width: '8%' }}>UNIT TYPE</th>
                    <th style={{ width: '10%' }}>RATE</th>
                    <th style={{ width: '10%' }}>AMOUNT</th>
                    <th style={{ width: '12%' }}>RETENTION AMOUNT</th>
                    <th style={{ width: '10%' }}>DELIVERED QTY</th>
                    <th style={{ width: '15%' }}>MEMO</th>
                  </tr>
                </thead>
                <tbody>
                  {deliveryOrderData.items.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.itemCode}</td>
                      <td>{item.itemDescription}</td>
                      <td>{item.qty}</td>
                      <td>{item.unitType || '-'}</td>
                      <td>{item.rate ? item.rate.toFixed(2) : '-'}</td>
                      <td>{item.amount ? item.amount.toFixed(2) : '-'}</td>
                      <td>{item.retentionAmount ? item.retentionAmount.toFixed(2) : '-'}</td>
                      <td>{item.deliveredQty || '-'}</td>
                      <td>{item.memo || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Summary Section */}
            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
              <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '0.5rem', fontWeight: '500' }}>SUBTOTAL</div>
                <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>$0.00</div>
              </div>
              <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '0.5rem', fontWeight: '500' }}>TAX AMOUNT</div>
                <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>$0.00</div>
              </div>
              <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '0.5rem', fontWeight: '500' }}>DISCOUNT</div>
                <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>$0.00</div>
              </div>
              <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '0.5rem', fontWeight: '500' }}>TOTAL AMOUNT</div>
                <div style={{ fontSize: '24px', fontWeight: '600', color: '#2196F3' }}>$0.00</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {toast.show && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast({ show: false, message: '', type: 'success' })} 
        />
      )}
    </div>
  );
};

export default ViewCustomDeliveryOrderDetail;
