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
    project: 'Marine Equipment Supply - Q1 2024',
    date: '02/15/2024',
    shipDate: '02/15/2024',
    status: 'Picked',
    memo: 'Urgent delivery required for marine equipment',
    location: 'Main Warehouse',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
    department: 'TOM: Sales and Marketing',
    class: 'Fabrication',
    // Shipping Address
    attention: 'Jane Smith',
    addressee: 'ACME Corporation',
    address1: '123 Main St',
    address2: 'Suite 100',
    city: 'Singapore',
    state: 'Singapore',
    postalCode: '90210',
    country: 'Singapore',
    phone: '555-555-5555',
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
        quantity: 10,
        units: 'Pcs',
        priceLevel: '',
        rate: 150.00,
        amount: 1500.00,
        taxCode: '',
        grossAmount: 1500.00,
        class: '',
        costEstimateType: 'Fixed',
        estimatedExtendedCost: 0,
        countryOfOrigin: '',
        hsCode: ''
      },
      {
        id: 2,
        item: 'Hydraulic Valve',
        description: 'Industrial hydraulic control valve',
        quantity: 20,
        units: 'Pcs',
        priceLevel: '',
        rate: 75.00,
        amount: 1500.00,
        taxCode: '',
        grossAmount: 1500.00,
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
                  <label>PROJECT</label>
                  <div className="field-value">{deliveryOrderData.project || '-'}</div>
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
                  <label>STATUS</label>
                  <div className="field-value">
                    <span style={{ 
                      background: '#ff9800', 
                      color: 'white', 
                      padding: '4px 8px', 
                      borderRadius: '4px', 
                      fontSize: '11px' 
                    }}>
                      {deliveryOrderData.status}
                    </span>
                  </div>
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
          </div>

          <div className="tabs-content">
            {activeTab === 'items' && (
              <div className="items-table-wrapper" style={{ padding: '1.5rem' }}>
                <table className="detail-items-table" style={{ minWidth: '2200px' }}>
                  <thead>
                    <tr>
                      <th style={{ minWidth: '150px' }}>ITEM</th>
                      <th style={{ minWidth: '400px' }}>DESCRIPTION</th>
                      <th style={{ minWidth: '80px' }}>QTY</th>
                      <th style={{ minWidth: '100px' }}>UNITS</th>
                      <th style={{ minWidth: '120px' }}>PRICE LEVEL</th>
                      <th style={{ minWidth: '100px' }}>RATE</th>
                      <th style={{ minWidth: '100px' }}>AMOUNT</th>
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
                    {deliveryOrderData.items.map((item) => (
                      <tr key={item.id}>
                        <td>{item.item}</td>
                        <td>{item.description}</td>
                        <td><strong>{item.quantity}</strong></td>
                        <td>{item.units}</td>
                        <td>{item.priceLevel || '-'}</td>
                        <td>${item.rate.toFixed(2)}</td>
                        <td>${item.amount.toFixed(2)}</td>
                        <td>{item.taxCode || '-'}</td>
                        <td>${item.grossAmount.toFixed(2)}</td>
                        <td>{item.class || '-'}</td>
                        <td>{item.costEstimateType}</td>
                        <td>${item.estimatedExtendedCost.toFixed(2)}</td>
                        <td>{item.countryOfOrigin || '-'}</td>
                        <td>{item.hsCode || '-'}</td>
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
