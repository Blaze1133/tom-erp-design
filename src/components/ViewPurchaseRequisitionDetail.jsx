import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewPurchaseRequisitionDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('lines');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);

  // Sample data
  const requisitionData = {
    documentNumber: 'PR24TEA00145',
    status: 'PENDING MANAGER APPROVAL',
    prId: 'PR24TEA00145',
    project: 'Marine Equipment Supply - Q1 2024',
    projectManager: 'John Tan',
    requisitionId: 'PR24TEA00145',
    amount: 4250.00,
    currency: 'SGD',
    exchangeRate: 1.00,
    date: '15/10/2024',
    postingPeriod: 'Oct 2024',
    memo: 'Urgent - Project Alpha Marine Equipment',
    statusDetail: 'Pending Manager Approval',
    subsidiary: 'Tech Electric & Automation Pte Ltd',
    projectName: 'Marine Equipment Supply - Q1 2024',
    requestedBy: 'MEP01 001 JEGANATHAN SUNDARAVELU',
    salesRepresentative: 'John Smith',
    requestedType: 'Project PR',
    requireDate: '30/10/2024',
    approvalRejectionRemarks: '',
    items: [
      {
        id: 1,
        itemCategory: 'Mechanical',
        itemCode: 'HYD-PUMP-500',
        itemDescription: 'Hydraulic Pump Assembly - High Pressure 500 Bar with Control Valve',
        unitType: 'PCS',
        qty: 5,
        preferredVendor: 'Pacific Marine Supplies Pte Ltd',
        preferredSequence: 'Pacific Marine Supplies',
        unitPrice: 850.00,
        amount: 4250.00,
        bidCreated: '',
        memo: 'Required for offshore platform installation',
        name: 'Project Alpha - Marine Operations',
        department: 'Engineering',
        class: 'Material Supply',
        poQuantity: '',
        rclQuantity: '',
        history: ''
      },
      {
        id: 2,
        itemCategory: 'Mechanical',
        itemCode: 'SEAL-KIT-HYD',
        itemDescription: 'Hydraulic Seal Kit - Complete Set for 500 Bar Pumps',
        unitType: 'SET',
        qty: 10,
        preferredVendor: 'Pacific Marine Supplies Pte Ltd',
        preferredSequence: 'Pacific Marine Supplies',
        unitPrice: 125.00,
        amount: 1250.00,
        bidCreated: '',
        memo: 'Spare parts for maintenance',
        name: 'Project Alpha - Marine Operations',
        department: 'Engineering',
        class: 'Material Supply',
        poQuantity: '',
        rclQuantity: '',
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
          <i className="fas fa-file-alt"></i>
          <div>
            <h1>Purchase Requisition</h1>
            <div className="detail-subtitle">
              <span>{requisitionData.documentNumber}</span>
              <span className="status-badge-detail" style={{ background: '#4caf50' }}>
                {requisitionData.status}
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
                <label>PR ID</label>
                <div className="field-value">{requisitionData.prId}</div>
              </div>
              <div className="detail-field">
                <label>PROJECT</label>
                <div className="field-value" style={{ color: 'var(--blue-accent)', cursor: 'pointer' }}>{requisitionData.project}</div>
              </div>
              <div className="detail-field">
                <label>PROJECT MANAGER</label>
                <div className="field-value">{requisitionData.projectManager}</div>
              </div>
              <div className="detail-field">
                <label>DATE</label>
                <div className="field-value">{requisitionData.date}</div>
              </div>
              <div className="detail-field">
                <label>STATUS</label>
                <div className="field-value">{requisitionData.statusDetail}</div>
              </div>
              <div className="detail-field">
                <label>SALES REPRESENTATIVE</label>
                <div className="field-value">{requisitionData.salesRepresentative}</div>
              </div>
              <div className="detail-field">
                <label>MEMO</label>
                <div className="field-value">{requisitionData.memo || '-'}</div>
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
                <div className="field-value">{requisitionData.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>APPROVAL REJECTION REMARKS</label>
                <div className="field-value">{requisitionData.approvalRejectionRemarks || '-'}</div>
              </div>
              <div className="detail-field">
                <label>REQUESTED TYPE</label>
                <div className="field-value">{requisitionData.requestedType}</div>
              </div>
              <div className="detail-field">
                <label>REQUIRE DATE</label>
                <div className="field-value">{requisitionData.requireDate || '-'}</div>
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
                      <th>ITEM CATEGORY</th>
                      <th>ITEM CODE</th>
                      <th>ITEM DESCRIPTION</th>
                      <th>UNIT TYPE</th>
                      <th>PREFERRED VENDOR</th>
                      <th>PREFERRED SEQUENCE</th>
                      <th>ITEM UNIT PRICE</th>
                      <th>AMOUNT</th>
                      <th>BID CREATED</th>
                      <th>NAME</th>
                      <th>DEPARTMENT</th>
                      <th>CLASS</th>
                      <th>PO QUANTITY</th>
                      <th>RCL QUANTITY</th>
                      <th>HISTORY</th>
                      <th>MEMO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requisitionData.items.map((item) => (
                      <tr key={item.id}>
                        <td>{item.itemCategory}</td>
                        <td style={{ color: 'var(--blue-accent)' }}>{item.itemCode}</td>
                        <td>{item.itemDescription}</td>
                        <td>{item.unitType}</td>
                        <td style={{ color: 'var(--blue-accent)' }}>{item.preferredVendor}</td>
                        <td style={{ color: 'var(--blue-accent)' }}>{item.preferredSequence}</td>
                        <td className="amount">{item.unitPrice.toFixed(2)}</td>
                        <td className="amount">{item.amount.toFixed(2)}</td>
                        <td>{item.bidCreated}</td>
                        <td>{item.name}</td>
                        <td>{item.department}</td>
                        <td>{item.class}</td>
                        <td>{item.poQuantity}</td>
                        <td>{item.rclQuantity}</td>
                        <td>
                          {item.history && (
                            <button className="view-link">History</button>
                          )}
                        </td>
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

export default ViewPurchaseRequisitionDetail;
