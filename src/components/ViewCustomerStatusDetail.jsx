import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCustomerStatusDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [infoCollapsed, setInfoCollapsed] = useState(false);

  const statusData = {
    status: 'Qualified',
    stage: 'Lead',
    probability: '10.0%',
    description: '',
    includeInLeadReports: true,
    inactive: false
  };

  const handleEdit = () => {
    if (onEdit) onEdit();
  };

  const handleBack = () => {
    if (onBack) onBack();
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-user-check"></i>
          <div>
            <h1>Customer Status</h1>
            <div className="detail-subtitle">
              <span>{statusData.status}</span>
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
        <div className={`detail-section ${infoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setInfoCollapsed(!infoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Status Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>STATUS</label>
                <div className="field-value">{statusData.status}</div>
              </div>
              <div className="detail-field">
                <label>DESCRIPTION</label>
                <div className="field-value">{statusData.description || '-'}</div>
              </div>
              <div className="detail-field">
                <label>STAGE</label>
                <div className="field-value">{statusData.stage}</div>
              </div>
              <div className="detail-field">
                <label>INCLUDE IN LEAD REPORTS</label>
                <div className="field-value">{statusData.includeInLeadReports ? '☑' : '☐'}</div>
              </div>
              <div className="detail-field">
                <label>PROBABILITY</label>
                <div className="field-value">{statusData.probability}</div>
              </div>
              <div className="detail-field">
                <label>INACTIVE</label>
                <div className="field-value">{statusData.inactive ? '☑' : '☐'}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Active Workflows</h3>
          </div>
          <div className="section-body">
            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>VIEW</label>
              <select className="form-control" style={{ width: '150px' }}>
                <option>Default</option>
              </select>
              <button className="btn btn-secondary" style={{ marginLeft: 'auto' }}>Customize View</button>
              <button className="btn btn-secondary">Refresh</button>
            </div>
            <div className="items-table-wrapper">
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
          </div>
        </div>

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

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default ViewCustomerStatusDetail;
