import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewChartOfAccountDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('workflow');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [restrictionsCollapsed, setRestrictionsCollapsed] = useState(false);
  const [workflowTab, setWorkflowTab] = useState('active');

  // Sample data
  const accountData = {
    number: '',
    name: 'Estimates',
    legalName: '',
    subaccountOf: '',
    type: 'Non Posting',
    currency: '',
    generalRateType: 'Average',
    cashFlowRateType: 'Average',
    inventory: false,
    revalueOpenBalance: false,
    description: '',
    summary: false,
    inactive: false,
    restrictToDepartment: '',
    restrictToClass: '',
    restrictToLocation: '',
    subsidiaries: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    includeChildren: true,
    tomRefAccountNumber: '',
    bankRoutingNumber: '',
    bankAccountNumber: '',
    bankName: '',
    date: '18/12/2025'
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
          <i className="fas fa-book"></i>
          <div>
            <h1>Account</h1>
            <div className="detail-subtitle">
              <span>{accountData.name}</span>
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
              {/* Column 1 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="detail-field">
                  <label>NUMBER</label>
                  <div className="field-value">{accountData.number || '-'}</div>
                </div>
                <div className="detail-field">
                  <label>NAME</label>
                  <div className="field-value">{accountData.name}</div>
                </div>
                <div className="detail-field">
                  <label>LEGAL NAME</label>
                  <div className="field-value">{accountData.legalName || '-'}</div>
                </div>
                <div className="detail-field">
                  <label>SUBACCOUNT OF</label>
                  <div className="field-value">{accountData.subaccountOf || '-'}</div>
                </div>
                <div className="detail-field">
                  <label>TYPE</label>
                  <div className="field-value">{accountData.type}</div>
                </div>
                <div className="detail-field">
                  <label>CURRENCY</label>
                  <div className="field-value">{accountData.currency || '-'}</div>
                </div>
                <div className="detail-field">
                  <label>GENERAL RATE TYPE</label>
                  <div className="field-value">{accountData.generalRateType}</div>
                </div>
              </div>

              {/* Column 2 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="detail-field">
                  <label>CASH FLOW RATE TYPE</label>
                  <div className="field-value">{accountData.cashFlowRateType}</div>
                </div>
                <div className="detail-field">
                  <label>INVENTORY</label>
                  <div className="field-value">{accountData.inventory ? '☑' : '☐'}</div>
                </div>
                <div className="detail-field">
                  <label>REVALUE OPEN BALANCE FOR FOREIGN CURRENCY TRANSACTIONS</label>
                  <div className="field-value">{accountData.revalueOpenBalance ? '☑' : '☐'}</div>
                </div>
                <div className="detail-field">
                  <label>DESCRIPTION</label>
                  <div className="field-value">{accountData.description || '-'}</div>
                </div>
                <div className="detail-field">
                  <label>SUMMARY</label>
                  <div className="field-value">{accountData.summary ? '☑' : '☐'}</div>
                </div>
                <div className="detail-field">
                  <label>INACTIVE</label>
                  <div className="field-value">{accountData.inactive ? '☑' : '☐'}</div>
                </div>
              </div>

              {/* Column 3 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="detail-field">
                  <label>RESTRICT TO DEPARTMENT</label>
                  <div className="field-value">{accountData.restrictToDepartment || '-'}</div>
                </div>
                <div className="detail-field">
                  <label>RESTRICT TO CLASS</label>
                  <div className="field-value">{accountData.restrictToClass || '-'}</div>
                </div>
                <div className="detail-field">
                  <label>RESTRICT TO LOCATION</label>
                  <div className="field-value">{accountData.restrictToLocation || '-'}</div>
                </div>
                <div className="detail-field">
                  <label>SUBSIDIARIES</label>
                  <div className="field-value">{accountData.subsidiaries}</div>
                </div>
                <div className="detail-field">
                  <label>INCLUDE CHILDREN</label>
                  <div className="field-value">{accountData.includeChildren ? '☑' : '☐'}</div>
                </div>
                <div className="detail-field">
                  <label>TOM REF ACCOUNT NUMBER</label>
                  <div className="field-value">{accountData.tomRefAccountNumber || '-'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'workflow' ? 'active' : ''}`}
              onClick={() => setActiveTab('workflow')}
            >
              Workflow
            </button>
            <button 
              className={`tab-btn ${activeTab === 'system-notes' ? 'active' : ''}`}
              onClick={() => setActiveTab('system-notes')}
            >
              System Notes
            </button>
          </div>

          <div className="tabs-content" style={{ padding: '1.5rem' }}>
            {activeTab === 'workflow' && (
              <div>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', borderBottom: '1px solid #e0e0e0' }}>
                  <button 
                    style={{
                      padding: '0.5rem 1rem',
                      border: 'none',
                      background: workflowTab === 'active' ? 'white' : 'transparent',
                      borderBottom: workflowTab === 'active' ? '2px solid #4a90e2' : 'none',
                      cursor: 'pointer',
                      fontWeight: workflowTab === 'active' ? '600' : '400',
                      color: workflowTab === 'active' ? '#4a90e2' : '#666'
                    }}
                    onClick={() => setWorkflowTab('active')}
                  >
                    Active Workflows
                  </button>
                  <button 
                    style={{
                      padding: '0.5rem 1rem',
                      border: 'none',
                      background: workflowTab === 'history' ? 'white' : 'transparent',
                      borderBottom: workflowTab === 'history' ? '2px solid #4a90e2' : 'none',
                      cursor: 'pointer',
                      fontWeight: workflowTab === 'history' ? '600' : '400',
                      color: workflowTab === 'history' ? '#4a90e2' : '#666'
                    }}
                    onClick={() => setWorkflowTab('history')}
                  >
                    Workflow History
                  </button>
                </div>

                {workflowTab === 'active' && (
                  <div className="items-table-wrapper">
                    <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <label style={{ fontSize: '11px', color: '#666', marginRight: '8px' }}>VIEW</label>
                      <select className="form-control" style={{ width: '200px' }}>
                        <option>Default</option>
                      </select>
                      <button className="btn btn-secondary">
                        Customize View
                      </button>
                      <button className="btn btn-secondary">
                        Refresh
                      </button>
                    </div>
                    <table className="detail-items-table">
                      <thead>
                        <tr>
                          <th>WORKFLOW</th>
                          <th>CURRENT STATE</th>
                          <th>DATE ENTERED WORKFLOW</th>
                          <th>DATE ENTERED STATE</th>
                          <th>OPTIONS</th>
                          <th>STATUS</th>
                          <th>CANCEL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                            No records to show.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {workflowTab === 'history' && (
                  <div className="items-table-wrapper">
                    <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <label style={{ fontSize: '11px', color: '#666', marginRight: '8px' }}>VIEW</label>
                      <select className="form-control" style={{ width: '200px' }}>
                        <option>Default</option>
                      </select>
                      <button className="btn btn-secondary">
                        Customize View
                      </button>
                      <button className="btn btn-secondary">
                        Refresh
                      </button>
                    </div>
                    <table className="detail-items-table">
                      <thead>
                        <tr>
                          <th>WORKFLOW</th>
                          <th>STATE NAME INFO</th>
                          <th>DATE ENTERED STATE</th>
                          <th>DATE EXITED STATE</th>
                          <th>OPTIONS</th>
                          <th>LOG</th>
                          <th>NOTES</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                            No records to show.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'system-notes' && (
              <div className="items-table-wrapper">
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <label style={{ fontSize: '11px', color: '#666', marginRight: '8px' }}>VIEW</label>
                  <select className="form-control" style={{ width: '200px' }}>
                    <option>Default</option>
                  </select>
                  <label style={{ fontSize: '11px', color: '#666', marginRight: '8px', marginLeft: '1rem' }}>FIELD</label>
                  <select className="form-control" style={{ width: '200px' }}>
                    <option>- All -</option>
                  </select>
                  <button className="btn btn-secondary">
                    Customize View
                  </button>
                </div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>DATE</th>
                      <th>SET BY</th>
                      <th>CONTEXT</th>
                      <th>TYPE</th>
                      <th>FIELD</th>
                      <th>OLD VALUE</th>
                      <th>NEW VALUE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                        No records to show.
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default ViewChartOfAccountDetail;
