import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewDeliveryOrderDetail = ({ setCurrentPage, onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('items');
  const [headerCollapsed, setHeaderCollapsed] = useState(false);
  const [shippingCollapsed, setShippingCollapsed] = useState(false);
  const [customFieldsCollapsed, setCustomFieldsCollapsed] = useState(false);

  // Sample delivery order data
  const deliveryOrderData = {
    transactionNumber: 'DO-000123',
    customer: 'ACME Corporation',
    date: '02/15/2024',
    shipDate: '02/15/2024',
    status: 'Picked',
    createdFrom: 'SO-2024-001',
    memo: 'Urgent delivery required for marine equipment',
    location: 'Main Warehouse',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
    department: 'TOM: Sales and Marketing',
    class: 'Fabrication',
    shipMethod: 'DHL',
    trackingNumber: '1234567890',
    carrier: 'Perdybee',
    termsOfShipment: 'FOB',
    // Shipping Address
    attention: 'Jane Smith',
    addressee: 'ACME Corporation',
    address1: '123 Main St',
    address2: 'Anytown',
    city: 'CA',
    state: '90210',
    postalCode: 'United States',
    country: 'United States',
    phone: '555-555-5555',
    // Custom Fields
    deliveryNoteNumber: '######',
    deliveryRoute: 'Route 1',
    driverName: 'John Doe',
    vehicleNumber: 'ABC-1234',
    internalDeliveryReference: 'INT-REF-001',
    deliveryTimeIn: '09:00',
    deliveryTimeOut: '17:00',
    // Package Details
    packageCount: 5,
    packageWeight: 150.5,
    packageType: 'Box',
    shippingCost: 250.00,
    referenceNumbers: 'REF-001, REF-002',
    // Items
    items: [
      {
        id: 1,
        item: 'Marine Pump Assembly',
        description: 'High-pressure marine pump with mounting bracket',
        committedQuantity: 10,
        quantity: 10,
        uom: 'Pcs',
        binNumber: 'A-01-05',
        serialLotNumber: 'SN-2024-001',
        itemWeight: 15.5
      },
      {
        id: 2,
        item: 'Hydraulic Valve',
        description: 'Industrial hydraulic control valve',
        committedQuantity: 20,
        quantity: 20,
        uom: 'Pcs',
        binNumber: 'B-02-10',
        serialLotNumber: 'SN-2024-002',
        itemWeight: 5.2
      }
    ]
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (setCurrentPage) {
      setCurrentPage('view-delivery-orders');
    }
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    } else if (setCurrentPage) {
      setCurrentPage('edit-delivery-order');
    }
  };

  const handlePrint = () => {
    showToast('Printing delivery order...', 'success');
  };

  const handleCopy = () => {
    showToast('Delivery order copied', 'success');
  };

  const handleConfirmFulfillment = () => {
    if (window.confirm('Are you sure you want to confirm this fulfillment?')) {
      showToast('Fulfillment confirmed successfully!', 'success');
    }
  };

  const getStatusBadgeColor = (status) => {
    switch(status) {
      case 'Picked':
        return '#ff9800';
      case 'Packed':
        return '#2196f3';
      case 'Shipped':
        return '#4caf50';
      default:
        return '#999';
    }
  };

  return (
    <div className="enquiry-detail">
      {/* Header */}
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-truck" style={{ color: '#4a90e2' }}></i>
          <div>
            <h1>Delivery Order / Item Fulfillment</h1>
            <div className="detail-subtitle">
              <span>{deliveryOrderData.transactionNumber}</span>
              <span style={{ color: '#4a90e2', cursor: 'pointer' }}>
                Created From {deliveryOrderData.createdFrom}
              </span>
              <span 
                className="status-badge-detail" 
                style={{ background: getStatusBadgeColor(deliveryOrderData.status) }}
              >
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
          <button className="btn-action" onClick={() => setCurrentPage('view-delivery-orders')}>
            List
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="detail-toolbar">
        <button 
          className="btn-toolbar" 
          onClick={handleConfirmFulfillment}
          style={{ background: '#4caf50', color: 'white' }}
        >
          <i className="fas fa-check-circle"></i>
          Confirm Fulfillment
        </button>
        <button className="btn-toolbar-primary" onClick={handleEdit}>
          <i className="fas fa-edit"></i>
          Edit
        </button>
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar" onClick={handlePrint}>
          <i className="fas fa-print"></i>
          Print
        </button>
        <button className="btn-toolbar" onClick={handleCopy}>
          <i className="fas fa-copy"></i>
          Copy
        </button>
      </div>

      {/* Content */}
      <div className="detail-content">
        {/* Primary Information Section */}
        <div className="detail-section">
          <div 
            className="section-header" 
            onClick={() => setHeaderCollapsed(!headerCollapsed)}
            style={{ cursor: 'pointer' }}
          >
            <i className={`fas fa-chevron-${headerCollapsed ? 'right' : 'down'}`}></i>
            <h3>Primary Information</h3>
          </div>
          {!headerCollapsed && (
            <div className="section-body">
              <div className="detail-grid">
                <div className="detail-field">
                  <label>CUSTOMER</label>
                  <div className="field-value">{deliveryOrderData.customer}</div>
                </div>
                <div className="detail-field">
                  <label>DATE</label>
                  <div className="field-value">{deliveryOrderData.date}</div>
                </div>
                <div className="detail-field">
                  <label>SHIP DATE</label>
                  <div className="field-value">{deliveryOrderData.shipDate}</div>
                </div>
                <div className="detail-field">
                  <label>CREATED FROM</label>
                  <div className="field-value" style={{ color: '#4a90e2', cursor: 'pointer' }}>
                    {deliveryOrderData.createdFrom}
                  </div>
                </div>
                <div className="detail-field">
                  <label>SHIP METHOD</label>
                  <div className="field-value">{deliveryOrderData.shipMethod}</div>
                </div>
                <div className="detail-field">
                  <label>CARRIER</label>
                  <div className="field-value">{deliveryOrderData.carrier}</div>
                </div>
                <div className="detail-field">
                  <label>TRACKING NUMBER</label>
                  <div className="field-value">{deliveryOrderData.trackingNumber}</div>
                </div>
                <div className="detail-field">
                  <label>TERMS OF SHIPMENT</label>
                  <div className="field-value">{deliveryOrderData.termsOfShipment}</div>
                </div>
                <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                  <label>MEMO</label>
                  <div className="field-value">{deliveryOrderData.memo || '-'}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Classification Section */}
        <div className="detail-section">
          <div 
            className="section-header" 
            onClick={() => setShippingCollapsed(!shippingCollapsed)}
            style={{ cursor: 'pointer' }}
          >
            <i className={`fas fa-chevron-${shippingCollapsed ? 'right' : 'down'}`}></i>
            <h3>Classification</h3>
          </div>
          {!shippingCollapsed && (
            <div className="section-body">
              <div className="detail-grid">
                <div className="detail-field">
                  <label>SUBSIDIARY</label>
                  <div className="field-value">{deliveryOrderData.subsidiary}</div>
                </div>
                <div className="detail-field">
                  <label>LOCATION</label>
                  <div className="field-value">{deliveryOrderData.location}</div>
                </div>
                <div className="detail-field">
                  <label>DEPARTMENT</label>
                  <div className="field-value">{deliveryOrderData.department}</div>
                </div>
                <div className="detail-field">
                  <label>CLASS</label>
                  <div className="field-value">{deliveryOrderData.class}</div>
                </div>
              </div>
            </div>
          )}
        </div>


        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'items' ? 'active' : ''}`}
              onClick={() => setActiveTab('items')}
            >
              Items
            </button>
            <button 
              className={`tab-btn ${activeTab === 'packages' ? 'active' : ''}`}
              onClick={() => setActiveTab('packages')}
            >
              Packages
            </button>
            <button 
              className={`tab-btn ${activeTab === 'shipping' ? 'active' : ''}`}
              onClick={() => setActiveTab('shipping')}
            >
              Shipping Address
            </button>
            <button 
              className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`}
              onClick={() => setActiveTab('custom')}
            >
              Custom Fields
            </button>
            <button 
              className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`}
              onClick={() => setActiveTab('system')}
            >
              System Information
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'items' && (
              <div className="items-table-wrapper" style={{ padding: '1.5rem' }}>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Description</th>
                      <th>Committed Qty</th>
                      <th>Quantity</th>
                      <th>UOM</th>
                      <th>Bin Number</th>
                      <th>Serial/Lot Number</th>
                      <th>Weight (kg)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deliveryOrderData.items.map((item) => (
                      <tr key={item.id}>
                        <td>{item.item}</td>
                        <td>{item.description}</td>
                        <td>{item.committedQuantity}</td>
                        <td><strong>{item.quantity}</strong></td>
                        <td>{item.uom}</td>
                        <td>{item.binNumber}</td>
                        <td>{item.serialLotNumber}</td>
                        <td>{item.itemWeight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'packages' && (
              <div className="items-table-wrapper" style={{ padding: '1.5rem' }}>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>Package Count</th>
                      <th>Package Weight (kg)</th>
                      <th>Package Type</th>
                      <th>Shipping Cost</th>
                      <th>Reference Numbers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{deliveryOrderData.packageCount}</td>
                      <td>{deliveryOrderData.packageWeight}</td>
                      <td>{deliveryOrderData.packageType}</td>
                      <td>${deliveryOrderData.shippingCost.toFixed(2)}</td>
                      <td>{deliveryOrderData.referenceNumbers}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="items-table-wrapper" style={{ padding: '1.5rem' }}>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>Attention</th>
                      <th>Addressee</th>
                      <th>Address 1</th>
                      <th>Address 2</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Postal Code</th>
                      <th>Country</th>
                      <th>Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{deliveryOrderData.attention}</td>
                      <td>{deliveryOrderData.addressee}</td>
                      <td>{deliveryOrderData.address1}</td>
                      <td>{deliveryOrderData.address2}</td>
                      <td>{deliveryOrderData.city}</td>
                      <td>{deliveryOrderData.state}</td>
                      <td>{deliveryOrderData.postalCode}</td>
                      <td>{deliveryOrderData.country}</td>
                      <td>{deliveryOrderData.phone}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'custom' && (
              <div className="items-table-wrapper" style={{ padding: '1.5rem' }}>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>Delivery Note Number</th>
                      <th>Delivery Route</th>
                      <th>Driver Name</th>
                      <th>Vehicle Number</th>
                      <th>Internal Delivery Reference</th>
                      <th>Delivery Time In</th>
                      <th>Delivery Time Out</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{deliveryOrderData.deliveryNoteNumber}</td>
                      <td>{deliveryOrderData.deliveryRoute}</td>
                      <td>{deliveryOrderData.driverName}</td>
                      <td>{deliveryOrderData.vehicleNumber}</td>
                      <td>{deliveryOrderData.internalDeliveryReference}</td>
                      <td>{deliveryOrderData.deliveryTimeIn}</td>
                      <td>{deliveryOrderData.deliveryTimeOut}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'system' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                  <div className="detail-field">
                    <label>CREATED BY</label>
                    <div className="field-value">Admin User</div>
                  </div>
                  <div className="detail-field">
                    <label>CREATED DATE</label>
                    <div className="field-value">04/27/2024 9:30 AM</div>
                  </div>
                  <div className="detail-field">
                    <label>LAST MODIFIED BY</label>
                    <div className="field-value">Admin User</div>
                  </div>
                  <div className="detail-field">
                    <label>LAST MODIFIED DATE</label>
                    <div className="field-value">04/27/2024 9:30 AM</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions Outside Tabs */}
        <div className="detail-footer-actions">
          <button className="btn-toolbar" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn-toolbar-primary" onClick={handleEdit}>
            <i className="fas fa-edit"></i>
            Edit
          </button>
        </div>
      </div>

      <Toast 
        show={toast.show} 
        message={toast.message} 
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
};

export default ViewDeliveryOrderDetail;
