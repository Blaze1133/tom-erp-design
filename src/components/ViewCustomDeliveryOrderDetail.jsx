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
    referenceNo: 'REF-2024-001',
    project: 'Marine Equipment Supply - Q1 2024',
    requestedBy: 'MEP01 001 JEGANATHAN SUNDARAVELU',
    shippingAddress: '2 Boon Leat Terrace, #08-02\nHarbourside Building 2, Singapore\n119844.',
    memo: 'Urgent delivery for marine project',
    items: [
      {
        id: 1,
        item: '12" Divider',
        description: '12" Divider',
        quantity: 100,
        units: 'Pcs',
        priceLevel: '',
        rate: 25.50,
        amount: 2550.00,
        taxCode: '',
        grossAmount: 2550.00,
        class: '',
        costEstimateType: 'Fixed',
        estimatedExtendedCost: 0,
        countryOfOrigin: '',
        hsCode: ''
      },
      {
        id: 2,
        item: '110 V Female Connector',
        description: '110 V Female Connector',
        quantity: 200,
        units: 'Pcs',
        priceLevel: '',
        rate: 15.00,
        amount: 3000.00,
        taxCode: '',
        grossAmount: 3000.00,
        class: '',
        costEstimateType: 'Fixed',
        estimatedExtendedCost: 0,
        countryOfOrigin: '',
        hsCode: ''
      },
      {
        id: 3,
        item: 'Cable Gland M20',
        description: 'Cable Gland M20 - Brass',
        quantity: 150,
        units: 'Pcs',
        priceLevel: '',
        rate: 8.50,
        amount: 1275.00,
        taxCode: '',
        grossAmount: 1275.00,
        class: '',
        costEstimateType: 'Fixed',
        estimatedExtendedCost: 0,
        countryOfOrigin: '',
        hsCode: ''
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
                <label>REFERENCE NO</label>
                <div className="field-value">{deliveryOrderData.referenceNo || '-'}</div>
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
                <label>PROJECT</label>
                <div className="field-value">{deliveryOrderData.project || '-'}</div>
              </div>
              <div className="detail-field">
                <label>REQUESTED BY</label>
                <div className="field-value">{deliveryOrderData.requestedBy || '-'}</div>
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
              <table className="detail-items-table" style={{ minWidth: '2200px' }}>
                <thead>
                  <tr>
                    <th style={{ minWidth: '50px' }}>#</th>
                    <th style={{ minWidth: '150px' }}>ITEM</th>
                    <th style={{ minWidth: '400px' }}>DESC</th>
                    <th style={{ minWidth: '80px' }}>QTY</th>
                    <th style={{ minWidth: '100px' }}>UNITS</th>
                    <th style={{ minWidth: '120px' }}>PRICE LEVEL</th>
                    <th style={{ minWidth: '100px' }}>RATE</th>
                    <th style={{ minWidth: '100px' }}>AMT</th>
                    <th style={{ minWidth: '120px' }}>TAX CODE</th>
                    <th style={{ minWidth: '100px' }}>GROSS AMT</th>
                    <th style={{ minWidth: '150px' }}>CLASS</th>
                    <th style={{ minWidth: '150px' }}>COST EST. TYPE</th>
                    <th style={{ minWidth: '150px' }}>EST. EXT. COST</th>
                    <th style={{ minWidth: '150px' }}>COUNTRY OF ORIGIN</th>
                    <th style={{ minWidth: '150px' }}>HS CODE</th>
                  </tr>
                </thead>
                <tbody>
                  {deliveryOrderData.items.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.item}</td>
                      <td style={{ whiteSpace: 'pre-line' }}>{item.description}</td>
                      <td>{item.quantity}</td>
                      <td>{item.units || '-'}</td>
                      <td>{item.priceLevel || '-'}</td>
                      <td style={{ textAlign: 'right' }}>{item.rate ? item.rate.toFixed(2) : '-'}</td>
                      <td style={{ textAlign: 'right' }}>{item.amount ? item.amount.toFixed(2) : '-'}</td>
                      <td>{item.taxCode || '-'}</td>
                      <td style={{ textAlign: 'right' }}>{item.grossAmount ? item.grossAmount.toFixed(2) : '-'}</td>
                      <td>{item.class || '-'}</td>
                      <td>{item.costEstimateType || '-'}</td>
                      <td style={{ textAlign: 'right' }}>{item.estimatedExtendedCost ? item.estimatedExtendedCost.toFixed(2) : '-'}</td>
                      <td>{item.countryOfOrigin || '-'}</td>
                      <td>{item.hsCode || '-'}</td>
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
