import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewPurchaseRequisitionDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('lines');
  const [systemInfoSubTab, setSystemInfoSubTab] = useState('system-notes');
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
                      <th>GRN (RECEIVED ORDER)</th>
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
              <div className="form-section" style={{ padding: '1.5rem' }}>
                <div className="detail-section">
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Activities</h3>
                  </div>
                  <div className="section-body">
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                        <button className="btn-toolbar" style={{ fontSize: '12px', padding: '6px 12px' }}>
                          <i className="fas fa-tasks"></i>
                          New Task
                        </button>
                        <button className="btn-toolbar" style={{ fontSize: '12px', padding: '6px 12px' }}>
                          <i className="fas fa-phone"></i>
                          Log Phone Call
                        </button>
                        <button className="btn-toolbar" style={{ fontSize: '12px', padding: '6px 12px' }}>
                          <i className="fas fa-phone"></i>
                          New Phone Call
                        </button>
                        <button className="btn-toolbar" style={{ fontSize: '12px', padding: '6px 12px' }}>
                          <i className="fas fa-calendar"></i>
                          Log Event
                        </button>
                        <button className="btn-toolbar" style={{ fontSize: '12px', padding: '6px 12px' }}>
                          <i className="fas fa-calendar"></i>
                          New Event
                        </button>
                        <button className="btn-toolbar" style={{ fontSize: '12px', padding: '6px 12px' }}>
                          <i className="fas fa-history"></i>
                          View History
                        </button>
                        <button className="btn-toolbar" style={{ fontSize: '12px', padding: '6px 12px' }}>
                          <i className="fas fa-cog"></i>
                          Customize View
                        </button>
                      </div>
                      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{ flex: 1 }}>
                          <label style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', display: 'block' }}>VIEW</label>
                          <select className="form-control" style={{ height: '32px', fontSize: '13px' }}>
                            <option>Default</option>
                            <option>All Activities</option>
                            <option>Completed</option>
                            <option>Pending</option>
                          </select>
                        </div>
                        <div style={{ flex: 1 }}>
                          <label style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', display: 'block' }}>STATUS</label>
                          <select className="form-control" style={{ height: '32px', fontSize: '13px' }}>
                            <option>All</option>
                            <option>Open</option>
                            <option>Completed</option>
                          </select>
                        </div>
                        <div style={{ flex: 1 }}>
                          <label style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', display: 'block' }}>ACTIVITY TYPE</label>
                          <select className="form-control" style={{ height: '32px', fontSize: '13px' }}>
                            <option>All</option>
                            <option>Task</option>
                            <option>Phone Call</option>
                            <option>Event</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="items-table-container">
                      <table className="items-table">
                        <thead>
                          <tr>
                            <th style={{ minWidth: '100px' }}>EDIT</th>
                            <th style={{ minWidth: '200px' }}>TITLE</th>
                            <th style={{ minWidth: '150px' }}>DATE</th>
                            <th style={{ minWidth: '150px' }}>TIME</th>
                            <th style={{ minWidth: '150px' }}>OWNER</th>
                            <th style={{ minWidth: '120px' }}>STATUS</th>
                            <th style={{ minWidth: '150px' }}>ASSIGNED TO</th>
                            <th style={{ minWidth: '120px' }}>TYPE</th>
                            <th style={{ minWidth: '100px' }}>MARK</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="9" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                              No records to show.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'system-info' && (
              <div className="form-section" style={{ padding: '1.5rem' }}>
                {/* Sub-tabs for System Information */}
                <div className="sub-tabs-header" style={{ borderBottom: '1px solid #e0e0e0', padding: '0 1.5rem', background: '#f8f9fa', marginLeft: '-1.5rem', marginRight: '-1.5rem', marginTop: '-1.5rem' }}>
                  <button 
                    className={`sub-tab-btn ${systemInfoSubTab === 'system-notes' ? 'active' : ''}`}
                    onClick={() => setSystemInfoSubTab('system-notes')}
                    style={{
                      padding: '12px 20px',
                      border: 'none',
                      background: systemInfoSubTab === 'system-notes' ? '#fff' : 'transparent',
                      borderBottom: systemInfoSubTab === 'system-notes' ? '2px solid #dc2626' : '2px solid transparent',
                      cursor: 'pointer',
                      fontWeight: systemInfoSubTab === 'system-notes' ? '600' : '400',
                      color: systemInfoSubTab === 'system-notes' ? '#dc2626' : '#666',
                      fontSize: '13px'
                    }}
                  >
                    System Notes
                  </button>
                  <button 
                    className={`sub-tab-btn ${systemInfoSubTab === 'active-workflows' ? 'active' : ''}`}
                    onClick={() => setSystemInfoSubTab('active-workflows')}
                    style={{
                      padding: '12px 20px',
                      border: 'none',
                      background: systemInfoSubTab === 'active-workflows' ? '#fff' : 'transparent',
                      borderBottom: systemInfoSubTab === 'active-workflows' ? '2px solid #dc2626' : '2px solid transparent',
                      cursor: 'pointer',
                      fontWeight: systemInfoSubTab === 'active-workflows' ? '600' : '400',
                      color: systemInfoSubTab === 'active-workflows' ? '#dc2626' : '#666',
                      fontSize: '13px'
                    }}
                  >
                    Active Workflows
                  </button>
                  <button 
                    className={`sub-tab-btn ${systemInfoSubTab === 'workflow-history' ? 'active' : ''}`}
                    onClick={() => setSystemInfoSubTab('workflow-history')}
                    style={{
                      padding: '12px 20px',
                      border: 'none',
                      background: systemInfoSubTab === 'workflow-history' ? '#fff' : 'transparent',
                      borderBottom: systemInfoSubTab === 'workflow-history' ? '2px solid #dc2626' : '2px solid transparent',
                      cursor: 'pointer',
                      fontWeight: systemInfoSubTab === 'workflow-history' ? '600' : '400',
                      color: systemInfoSubTab === 'workflow-history' ? '#dc2626' : '#666',
                      fontSize: '13px'
                    }}
                  >
                    Workflow History
                  </button>
                  <button 
                    className={`sub-tab-btn ${systemInfoSubTab === 'applied-rules' ? 'active' : ''}`}
                    onClick={() => setSystemInfoSubTab('applied-rules')}
                    style={{
                      padding: '12px 20px',
                      border: 'none',
                      background: systemInfoSubTab === 'applied-rules' ? '#fff' : 'transparent',
                      borderBottom: systemInfoSubTab === 'applied-rules' ? '2px solid #dc2626' : '2px solid transparent',
                      cursor: 'pointer',
                      fontWeight: systemInfoSubTab === 'applied-rules' ? '600' : '400',
                      color: systemInfoSubTab === 'applied-rules' ? '#dc2626' : '#666',
                      fontSize: '13px'
                    }}
                  >
                    Applied Rules
                  </button>
                </div>

                {/* System Notes Sub-tab */}
                {systemInfoSubTab === 'system-notes' && (
                  <div style={{ marginTop: '1.5rem' }}>
                    <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <button className="btn-toolbar" style={{ fontSize: '12px', padding: '6px 12px' }}>
                        <i className="fas fa-cog"></i>
                        Customize View
                      </button>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                      <div style={{ flex: 1 }}>
                        <label style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', display: 'block' }}>VIEW</label>
                        <select className="form-control" style={{ height: '32px', fontSize: '13px' }}>
                          <option>Default</option>
                        </select>
                      </div>
                      <div style={{ flex: 1 }}>
                        <label style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', display: 'block' }}>FIELD</label>
                        <select className="form-control" style={{ height: '32px', fontSize: '13px' }}>
                          <option>&lt;Type then tab&gt;</option>
                        </select>
                      </div>
                    </div>
                    <div className="items-table-container">
                      <table className="items-table">
                        <thead>
                          <tr>
                            <th style={{ minWidth: '150px' }}>DATE</th>
                            <th style={{ minWidth: '150px' }}>SET BY</th>
                            <th style={{ minWidth: '150px' }}>CONTEXT</th>
                            <th style={{ minWidth: '150px' }}>TYPE</th>
                            <th style={{ minWidth: '150px' }}>FIELD</th>
                            <th style={{ minWidth: '200px' }}>OLD VALUE</th>
                            <th style={{ minWidth: '200px' }}>NEW VALUE</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>13/1/2022 3:27 pm</td>
                            <td>TOM-Ramesh</td>
                            <td>Script (Sublet)</td>
                            <td>Change</td>
                            <td>Document Status</td>
                            <td>Pending to Process PO</td>
                            <td>Fully Ordered</td>
                          </tr>
                          <tr>
                            <td>13/1/2022 3:22 pm</td>
                            <td>TOM-Ramesh</td>
                            <td>UI</td>
                            <td>Change</td>
                            <td>Document Status</td>
                            <td>Pending Approval</td>
                            <td>Pending to Process PO</td>
                          </tr>
                          <tr>
                            <td>13/1/2022 2:39 pm</td>
                            <td>TOM-Kavitha</td>
                            <td>UI</td>
                            <td>Change</td>
                            <td>Document Status</td>
                            <td>Pending Submit</td>
                            <td>Pending Approval</td>
                          </tr>
                          <tr>
                            <td>13/1/2022 2:38 pm</td>
                            <td>TOM-Kavitha</td>
                            <td>UI</td>
                            <td>Set</td>
                            <td>Entry No.</td>
                            <td></td>
                            <td>PR21TOM00001</td>
                          </tr>
                          <tr>
                            <td>13/1/2022 2:38 pm</td>
                            <td>TOM-Kavitha</td>
                            <td>UI</td>
                            <td>Set</td>
                            <td>Subsidiary</td>
                            <td></td>
                            <td>Tech Offshore Marine (DQ) Pte Ltd</td>
                          </tr>
                          <tr>
                            <td>13/1/2022 2:38 pm</td>
                            <td>TOM-Kavitha</td>
                            <td>UI</td>
                            <td>Create</td>
                            <td>Record</td>
                            <td></td>
                            <td>8369</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Active Workflows Sub-tab */}
                {systemInfoSubTab === 'active-workflows' && (
                  <div style={{ marginTop: '1.5rem' }}>
                    <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <button className="btn-toolbar" style={{ fontSize: '12px', padding: '6px 12px', background: '#2196F3', color: 'white' }}>
                        <i className="fas fa-sync"></i>
                        Refresh
                      </button>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                      <div style={{ flex: 1 }}>
                        <label style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', display: 'block' }}>VIEW</label>
                        <select className="form-control" style={{ height: '32px', fontSize: '13px' }}>
                          <option>Default</option>
                        </select>
                      </div>
                    </div>
                    <div className="items-table-container">
                      <table className="items-table">
                        <thead>
                          <tr>
                            <th style={{ minWidth: '250px' }}>WORKFLOW</th>
                            <th style={{ minWidth: '200px' }}>CURRENT STATE</th>
                            <th style={{ minWidth: '200px' }}>DATE ENTERED WORKFLOW</th>
                            <th style={{ minWidth: '200px' }}>DATE ENTERED STATE</th>
                            <th style={{ minWidth: '150px' }}>OPTIONS</th>
                            <th style={{ minWidth: '120px' }}>STATUS</th>
                            <th style={{ minWidth: '100px' }}>CANCEL</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Purchase Requisition Approval</td>
                            <td>PR Approved</td>
                            <td>13/1/2022 2:23 pm</td>
                            <td>13/1/2022 3:22 pm</td>
                            <td></td>
                            <td>Active</td>
                            <td><button style={{ color: '#2196F3', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Cancel</button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Workflow History Sub-tab */}
                {systemInfoSubTab === 'workflow-history' && (
                  <div style={{ marginTop: '1.5rem' }}>
                    <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <button className="btn-toolbar" style={{ fontSize: '12px', padding: '6px 12px', background: '#2196F3', color: 'white' }}>
                        <i className="fas fa-sync"></i>
                        Refresh
                      </button>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                      <div style={{ flex: 1 }}>
                        <label style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', display: 'block' }}>VIEW</label>
                        <select className="form-control" style={{ height: '32px', fontSize: '13px' }}>
                          <option>Default</option>
                        </select>
                      </div>
                    </div>
                    <div className="items-table-container">
                      <table className="items-table">
                        <thead>
                          <tr>
                            <th style={{ minWidth: '250px' }}>WORKFLOW</th>
                            <th style={{ minWidth: '200px' }}>STATE NAME INFO</th>
                            <th style={{ minWidth: '200px' }}>DATE ENTERED STATE</th>
                            <th style={{ minWidth: '200px' }}>DATE EXITED STATE</th>
                            <th style={{ minWidth: '150px' }}>OPTIONS</th>
                            <th style={{ minWidth: '100px' }}>LOG</th>
                            <th style={{ minWidth: '100px' }}>NOTES</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Purchase Requisition Approval</td>
                            <td>PR Approved</td>
                            <td>13/1/2022 3:22 pm</td>
                            <td></td>
                            <td></td>
                            <td><button style={{ color: '#2196F3', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Log</button></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Purchase Requisition Approval</td>
                            <td>Pending For Approval (was: Pending For CEO Approval)</td>
                            <td>13/1/2022 2:39 pm</td>
                            <td>13/1/2022 3:22 pm</td>
                            <td></td>
                            <td><button style={{ color: '#2196F3', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Log</button></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Purchase Requisition Approval</td>
                            <td>Submit Purchase Requisition</td>
                            <td>13/1/2022 2:23 pm</td>
                            <td>13/1/2022 2:39 pm</td>
                            <td></td>
                            <td><button style={{ color: '#2196F3', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Log</button></td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Applied Rules Sub-tab */}
                {systemInfoSubTab === 'applied-rules' && (
                  <div style={{ marginTop: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                      <div style={{ flex: 1 }}>
                        <label style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', display: 'block' }}>VIEW</label>
                        <select className="form-control" style={{ height: '32px', fontSize: '13px' }}>
                          <option>Default</option>
                        </select>
                      </div>
                    </div>
                    <div className="items-table-container">
                      <table className="items-table">
                        <thead>
                          <tr>
                            <th style={{ minWidth: '150px' }}>DATE</th>
                            <th style={{ minWidth: '200px' }}>RULE TYPE</th>
                            <th style={{ minWidth: '300px' }}>DETAILS</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="3" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                              No records to show.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'custom' && (
              <div className="form-section" style={{ padding: '1.5rem' }}>
                <div className="detail-section">
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Custom Fields</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>REF ORDER NO</label>
                        <div className="field-value">-</div>
                      </div>
                      <div className="detail-field">
                        <label>STORE PERSON</label>
                        <div className="field-value">-</div>
                      </div>
                      <div className="detail-field">
                        <label>PROJECT MANAGER</label>
                        <div className="field-value">{requisitionData.projectManager}</div>
                      </div>
                      <div className="detail-field">
                        <label>DO RECORD CREATED</label>
                        <div className="field-value">No</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'gl-impact' && (
              <div className="form-section" style={{ padding: '1.5rem' }}>
                <div className="detail-section">
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>GL Impact</h3>
                  </div>
                  <div className="section-body">
                    <div className="items-table-container">
                      <table className="items-table">
                        <thead>
                          <tr>
                            <th style={{ minWidth: '250px' }}>ACCOUNT</th>
                            <th style={{ minWidth: '150px' }}>AMOUNT (DEBIT)</th>
                            <th style={{ minWidth: '150px' }}>AMOUNT (CREDIT)</th>
                            <th style={{ minWidth: '120px' }}>POSTING</th>
                            <th style={{ minWidth: '200px' }}>MEMO</th>
                            <th style={{ minWidth: '200px' }}>NAME</th>
                            <th style={{ minWidth: '250px' }}>SUBSIDIARY</th>
                            <th style={{ minWidth: '150px' }}>DEPARTMENT</th>
                            <th style={{ minWidth: '150px' }}>CLASS</th>
                            <th style={{ minWidth: '150px' }}>LOCATION</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>20010 Accounts Payable : Trade Creditors</td>
                            <td></td>
                            <td>S$25.68</td>
                            <td>No</td>
                            <td></td>
                            <td></td>
                            <td>Tech Onshore MEP Prefabricators Pte Ltd. ; Tech Offshore Marine (DQ) Pte Ltd</td>
                            <td>TOM : Human Resource</td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>53950 Other Operating Expenses : Audit - Operating Exp</td>
                            <td>S$25.68</td>
                            <td></td>
                            <td>No</td>
                            <td></td>
                            <td></td>
                            <td>Tech Onshore MEP Prefabricators Pte Ltd. ; Tech Offshore Marine (DQ) Pte Ltd</td>
                            <td>TOM : Human Resource</td>
                            <td></td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
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
