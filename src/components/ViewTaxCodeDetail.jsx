import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewTaxCodeDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);

  const taxCodeData = {
    taxCode: '9%',
    description: 'GST 9%',
    rate: '9.0%',
    effectiveFrom: '',
    validUntil: '',
    subsidiaries: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    includeChildren: true,
    reverseChargeCode: '',
    taxAgency: 'Default Tax Agency SG',
    taxType: 'GST_SG',
    purchaseTaxAccount: 'GST on Purchases SG',
    salesTaxAccount: 'GST on Sales SG',
    availableOn: 'Both',
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
          <i className="fas fa-percentage"></i>
          <div>
            <h1>Tax Code</h1>
            <div className="detail-subtitle">
              <span>{taxCodeData.taxCode}</span>
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
        <div className={`detail-section ${primaryInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setPrimaryInfoCollapsed(!primaryInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Tax Code Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>TAX CODE</label>
                <div className="field-value">{taxCodeData.taxCode}</div>
              </div>
              <div className="detail-field">
                <label>REVERSE CHARGE CODE</label>
                <div className="field-value">{taxCodeData.reverseChargeCode || '-'}</div>
              </div>
              <div className="detail-field">
                <label>AVAILABLE ON</label>
                <div className="field-value">{taxCodeData.availableOn}</div>
              </div>
              <div className="detail-field">
                <label>DESCRIPTION</label>
                <div className="field-value">{taxCodeData.description}</div>
              </div>
              <div className="detail-field">
                <label>TAX AGENCY</label>
                <div className="field-value">{taxCodeData.taxAgency}</div>
              </div>
              <div className="detail-field">
                <label>INACTIVE</label>
                <div className="field-value">{taxCodeData.inactive ? '☑' : '☐'}</div>
              </div>
              <div className="detail-field">
                <label>RATE</label>
                <div className="field-value">{taxCodeData.rate}</div>
              </div>
              <div className="detail-field">
                <label>TAX TYPE</label>
                <div className="field-value">{taxCodeData.taxType}</div>
              </div>
              <div className="detail-field">
                <label>INCLUDE CHILDREN</label>
                <div className="field-value">{taxCodeData.includeChildren ? '☑' : '☐'}</div>
              </div>
              <div className="detail-field">
                <label>EFFECTIVE FROM</label>
                <div className="field-value">{taxCodeData.effectiveFrom || '-'}</div>
              </div>
              <div className="detail-field">
                <label>PURCHASE TAX ACCOUNT</label>
                <div className="field-value">{taxCodeData.purchaseTaxAccount}</div>
              </div>
              <div className="detail-field">
                <label>SUBSIDIARIES</label>
                <div className="field-value">{taxCodeData.subsidiaries}</div>
              </div>
              <div className="detail-field">
                <label>VALID UNTIL</label>
                <div className="field-value">{taxCodeData.validUntil || '-'}</div>
              </div>
              <div className="detail-field">
                <label>SALES TAX ACCOUNT</label>
                <div className="field-value">{taxCodeData.salesTaxAccount}</div>
              </div>
            </div>
          </div>
        </div>

        {/* History Table */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>History</h3>
          </div>
          <div className="section-body">
            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>VIEW</label>
              <select className="form-control" style={{ width: '150px' }}>
                <option>Default</option>
              </select>
              <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>FIELD</label>
              <select className="form-control" style={{ width: '150px' }}>
                <option>- All -</option>
              </select>
              <button className="btn btn-secondary" style={{ marginLeft: 'auto' }}>Customize View</button>
            </div>

            <div className="items-table-wrapper">
              <table className="detail-items-table">
                <thead>
                  <tr>
                    <th>DATE ▼</th>
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
                    <td>2/1/2025 1:33 pm</td>
                    <td>Praveen Chandraseka</td>
                    <td>UI</td>
                    <td>Change</td>
                    <td>Default</td>
                    <td>T</td>
                    <td>F</td>
                  </tr>
                  <tr>
                    <td>14/8/2024 10:20 am</td>
                    <td>TOM-Maha</td>
                    <td>UI</td>
                    <td>Change</td>
                    <td>Default</td>
                    <td>F</td>
                    <td>T</td>
                  </tr>
                  <tr>
                    <td>26/6/2024 4:42 pm</td>
                    <td>Praveen Chandraseka</td>
                    <td>UI</td>
                    <td>Change</td>
                    <td>Default</td>
                    <td>T</td>
                    <td>F</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ textAlign: 'right', marginTop: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
              1 to 25 of 36
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

export default ViewTaxCodeDetail;
