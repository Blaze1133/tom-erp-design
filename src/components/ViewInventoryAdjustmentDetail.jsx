import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewInventoryAdjustmentDetail = ({ setCurrentPage, onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('items');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);

  // Dummy data
  const adjustmentData = {
    documentNumber: 'INVADJ2025-001',
    status: 'COMPLETED',
    customForm: 'TOM Inventory Issue to Department',
    refNo: 'INVADJ2025-001',
    customer: 'Engineering Department',
    accountCode: '50100 Cost Of Sales : Material Purcha',
    estimatedTotalValue: '6,825.00',
    postingPeriod: 'Nov 2025',
    date: '8/11/2025',
    memo: 'Monthly material issue for Project Alpha',
    subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
    class: 'TOM : Projects',
    department: 'TOM : Engineering',
    adjustmentLocation: 'Hong Hang Shipyard',
    requestedBy: 'John Smith'
  };

  const items = [
    {
      id: 1,
      item: 'Steel Plates - Grade A',
      displayName: 'Steel Plates',
      description: 'High-grade steel plates for marine construction',
      location: 'Hong Hang Shipyard',
      units: 'pcs',
      onHand: 500,
      newQuantity: 350,
      quantityAdjusted: -150,
      unitCost: 45.50,
      binNumber: 'BIN-A-001',
      memo: 'Issued for Project Alpha',
      serialLotNumber: 'LOT-2025-001',
      expirationDate: '',
      department: 'TOM : Engineering',
      class: 'TOM : Projects',
      customer: 'Project Alpha'
    }
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    } else if (setCurrentPage) {
      setCurrentPage('adjust-inventory');
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (setCurrentPage) {
      setCurrentPage('view-inventory-adjustments');
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-box"></i>
          <div>
            <h1>Inventory Issue/Adjustment</h1>
            <div className="detail-subtitle">
              <span>{adjustmentData.documentNumber}</span>
              <span className="status-badge-detail" style={{ background: '#4caf50' }}>
                {adjustmentData.status}
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
                <label>CUSTOM FORM</label>
                <div className="field-value">{adjustmentData.customForm}</div>
              </div>
              <div className="detail-field">
                <label>ACCOUNT CODE</label>
                <div className="field-value">{adjustmentData.accountCode}</div>
              </div>
              <div className="detail-field">
                <label>POSTING PERIOD</label>
                <div className="field-value">{adjustmentData.postingPeriod}</div>
              </div>
              <div className="detail-field">
                <label>REF NO.</label>
                <div className="field-value">{adjustmentData.refNo}</div>
              </div>
              <div className="detail-field">
                <label>ESTIMATED TOTAL VALUE</label>
                <div className="field-value">${adjustmentData.estimatedTotalValue}</div>
              </div>
              <div className="detail-field">
                <label>MEMO</label>
                <div className="field-value">{adjustmentData.memo || '-'}</div>
              </div>
              <div className="detail-field">
                <label>CUSTOMER</label>
                <div className="field-value">{adjustmentData.customer}</div>
              </div>
              <div className="detail-field">
                <label>DATE</label>
                <div className="field-value">{adjustmentData.date}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification Section */}
        <div className={`detail-section ${classificationCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setClassificationCollapsed(!classificationCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{adjustmentData.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>CLASS</label>
                <div className="field-value">{adjustmentData.class}</div>
              </div>
              <div className="detail-field">
                <label>DEPARTMENT</label>
                <div className="field-value">{adjustmentData.department}</div>
              </div>
              <div className="detail-field">
                <label>ADJUSTMENT LOCATION</label>
                <div className="field-value">{adjustmentData.adjustmentLocation}</div>
              </div>
              <div className="detail-field">
                <label>REQUESTED BY</label>
                <div className="field-value">{adjustmentData.requestedBy || '-'}</div>
              </div>
            </div>
          </div>
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
            {activeTab === 'items' && (
              <div className="items-table-wrapper">
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>ITEM</th>
                      <th>DISPLAY NAME</th>
                      <th>DESCRIPTION</th>
                      <th>LOCATION</th>
                      <th>UNITS</th>
                      <th>ON HAND</th>
                      <th>NEW QUANTITY</th>
                      <th>QTY ADJUSTED</th>
                      <th>UNIT COST</th>
                      <th>BIN NUMBER</th>
                      <th>MEMO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td style={{ color: 'var(--blue-accent)' }}>{item.item}</td>
                        <td>{item.displayName}</td>
                        <td>{item.description}</td>
                        <td>{item.location}</td>
                        <td>{item.units}</td>
                        <td className="amount">{item.onHand}</td>
                        <td className="amount">{item.newQuantity}</td>
                        <td className="amount" style={{ color: item.quantityAdjusted < 0 ? '#dc3545' : '#28a745' }}>
                          {item.quantityAdjusted}
                        </td>
                        <td className="amount">${item.unitCost.toFixed(2)}</td>
                        <td>{item.binNumber}</td>
                        <td>{item.memo}</td>
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

export default ViewInventoryAdjustmentDetail;
