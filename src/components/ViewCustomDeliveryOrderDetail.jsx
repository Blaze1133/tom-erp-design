import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCustomDeliveryOrderDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('lines');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [otherInfoCollapsed, setOtherInfoCollapsed] = useState(false);

  // Sample data
  const deliveryOrderData = {
    documentNumber: 'DOCTOM00002',
    status: 'DELIVERED',
    entryNo: 'DOCTOM00002',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    refProjectNo: '20-0052 Fortis Construction Pte. Ltd : Fortis-Project SGA',
    refEntity: '109 Bintang Mas Shipping Pte Ltd',
    department: 'MEP',
    amount: 0.00,
    date: '7/1/2022',
    memo: 'test do',
    requestedBy: '',
    shippingAddress: '2 Boon Leat Terrace, #08-02 Harbourside Building 2, Singapore 119844.',
    po: 'Po123',
    items: [
      {
        id: 1,
        itemCode: '12" Divider',
        itemDescription: '12" Divider',
        qty: 100,
        rate: '',
        amount: '',
        deliveredQty: '',
        memo: '',
        unitType: '',
        history: ''
      },
      {
        id: 2,
        itemCode: '110 V Female Connector',
        itemDescription: '110 V Female Connector',
        qty: 200,
        rate: '',
        amount: '',
        deliveredQty: '',
        memo: '',
        unitType: 'Pcs',
        history: ''
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
            <h1>Custom Delivery Order</h1>
            <div className="detail-subtitle">
              <span>{deliveryOrderData.documentNumber}</span>
              <span className="status-badge-detail" style={{ background: '#4caf50' }}>
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
          <button className="btn-action">List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary" onClick={handleEdit}>
          <i className="fas fa-edit"></i>
          Edit
        </button>
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-copy"></i>
          Copy
        </button>
        <div className="toolbar-dropdown" style={{ marginLeft: 'auto' }}>
          <button className="btn-toolbar">
            <i className="fas fa-cog"></i>
            Actions
            <i className="fas fa-chevron-down" style={{ marginLeft: '0.5rem', fontSize: '0.7rem' }}></i>
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
                <label>ENTRY NO.</label>
                <div className="field-value">{deliveryOrderData.entryNo}</div>
              </div>
              <div className="detail-field">
                <label>DEPARTMENT</label>
                <div className="field-value">{deliveryOrderData.department}</div>
              </div>
              <div className="detail-field">
                <label>SHIPPING ADDRESS</label>
                <div className="field-value">{deliveryOrderData.shippingAddress}</div>
              </div>
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{deliveryOrderData.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>AMOUNT</label>
                <div className="field-value">{deliveryOrderData.amount.toFixed(2)}</div>
              </div>
              <div className="detail-field">
                <label>STATUS</label>
                <div className="field-value">{deliveryOrderData.status}</div>
              </div>
              <div className="detail-field">
                <label>REF PROJECT NO</label>
                <div className="field-value">{deliveryOrderData.refProjectNo}</div>
              </div>
              <div className="detail-field">
                <label>DATE</label>
                <div className="field-value">{deliveryOrderData.date}</div>
              </div>
              <div className="detail-field">
                <label>MEMO</label>
                <div className="field-value">{deliveryOrderData.memo || '-'}</div>
              </div>
              <div className="detail-field">
                <label>REF ENTITY</label>
                <div className="field-value">{deliveryOrderData.refEntity}</div>
              </div>
              <div className="detail-field">
                <label>REQUESTED BY</label>
                <div className="field-value">{deliveryOrderData.requestedBy || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Info Section */}
        <div className={`detail-section ${otherInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setOtherInfoCollapsed(!otherInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Other Info</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>PO#</label>
                <div className="field-value">{deliveryOrderData.po}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'lines' ? 'active' : ''}`}
              onClick={() => setActiveTab('lines')}
            >
              Lines
            </button>
            <button 
              className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`}
              onClick={() => setActiveTab('communication')}
            >
              Communication
            </button>
            <button 
              className={`tab-btn ${activeTab === 'system-info' ? 'active' : ''}`}
              onClick={() => setActiveTab('system-info')}
            >
              System Information
            </button>
            <button 
              className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`}
              onClick={() => setActiveTab('custom')}
            >
              Custom
            </button>
            <button 
              className={`tab-btn ${activeTab === 'gl-impact' ? 'active' : ''}`}
              onClick={() => setActiveTab('gl-impact')}
            >
              GL Impact
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'lines' && (
              <div className="items-table-wrapper">
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>ITEM CODE</th>
                      <th>ITEM DESCRIPTION</th>
                      <th>QTY</th>
                      <th>RATE</th>
                      <th>AMOUNT</th>
                      <th>DELIVERED QTY</th>
                      <th>MEMO</th>
                      <th>UNIT TYPE</th>
                      <th>HISTORY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deliveryOrderData.items.map((item) => (
                      <tr key={item.id}>
                        <td style={{ color: 'var(--blue-accent)' }}>{item.itemCode}</td>
                        <td>{item.itemDescription}</td>
                        <td className="amount">{item.qty}</td>
                        <td className="amount">{item.rate}</td>
                        <td className="amount">{item.amount}</td>
                        <td className="amount">{item.deliveredQty}</td>
                        <td>{item.memo}</td>
                        <td>{item.unitType}</td>
                        <td>
                          {item.history && (
                            <button className="view-link">History</button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'communication' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>No communication records available.</p>
              </div>
            )}

            {activeTab === 'system-info' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>System information will be displayed here.</p>
              </div>
            )}

            {activeTab === 'custom' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>No custom fields configured.</p>
              </div>
            )}

            {activeTab === 'gl-impact' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>GL Impact information will be displayed here.</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="detail-footer-actions">
          <button className="btn-toolbar-primary" onClick={handleEdit}>
            <i className="fas fa-edit"></i>
            Edit
          </button>
          <button className="btn-toolbar" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
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

export default ViewCustomDeliveryOrderDetail;
