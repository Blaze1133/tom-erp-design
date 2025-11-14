import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewAssetIssueDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const assetData = {
    id: 1,
    idNumber: 1,
    employee: '222267 Demo employee',
    issueType: 'Allocation',
    assetName: 'Laptop',
    description: '',
    dateOfIssue: '1/9/2021',
    noOfDays: '',
    collectionDate: '',
    dateOfReturn: '',
    status: 'Issued',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd',
    country: 'Singapore',
    requestDate: '28/9/2021',
    requestingDepartment: 'TOM : Admin',
    issuingDepartment: '',
    memo: '',
    supervisor: 'vikram',
    hrDept: '',
    itAdmin: ''
  };

  const assetItems = [
    {
      id: 1,
      issueType: 'Allocation',
      assetName: 'Laptop',
      description: '',
      status: 'Issued',
      dateOfIssue: '1/9/2021',
      dateOfReturn: ''
    }
  ];

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
          <i className="fas fa-box"></i>
          <div>
            <h1>Asset Issue to Employee</h1>
            <div className="detail-subtitle">
              <span>{assetData.idNumber}</span>
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
        <button className="btn-toolbar">Return</button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
        </button>
      </div>

      <div className="detail-content">
        {/* Main Information Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginBottom: '2rem', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
          <div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>ID</label>
              <div className="field-value">{assetData.idNumber}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>EMPLOYEE</label>
              <div className="field-value">{assetData.employee}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>ISSUE TYPE</label>
              <div className="field-value">{assetData.issueType}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>ASSET NAME</label>
              <div className="field-value">{assetData.assetName}</div>
            </div>
            <div className="detail-field">
              <label>DESCRIPTION</label>
              <div className="field-value">{assetData.description || '-'}</div>
            </div>
            <div className="detail-field" style={{ marginTop: '1rem' }}>
              <label>DATE OF ISSUE</label>
              <div className="field-value">{assetData.dateOfIssue}</div>
            </div>
          </div>

          <div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>NO OF DAYS</label>
              <div className="field-value">{assetData.noOfDays || '-'}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>COLLECTION DATE</label>
              <div className="field-value">{assetData.collectionDate || '-'}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>DATE OF RETURN</label>
              <div className="field-value">{assetData.dateOfReturn || '-'}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>STATUS</label>
              <div className="field-value">{assetData.status}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>SUBSIDIARY</label>
              <div className="field-value">{assetData.subsidiary}</div>
            </div>
            <div className="detail-field">
              <label>COUNTRY</label>
              <div className="field-value">{assetData.country}</div>
            </div>
          </div>

          <div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>REQUEST DATE</label>
              <div className="field-value">{assetData.requestDate}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>REQUESTING DEPARTMENT</label>
              <div className="field-value">{assetData.requestingDepartment}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>ISSUING DEPARTMENT</label>
              <div className="field-value">{assetData.issuingDepartment || '-'}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>MEMO</label>
              <div className="field-value">{assetData.memo || '-'}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>SUPERVISOR</label>
              <div className="field-value">{assetData.supervisor}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>HR DEPT</label>
              <div className="field-value">{assetData.hrDept || '-'}</div>
            </div>
            <div className="detail-field">
              <label>IT ADMIN</label>
              <div className="field-value">{assetData.itAdmin || '-'}</div>
            </div>
          </div>
        </div>

        {/* Assets Table */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 600 }}>Assets</h3>
          <table className="detail-items-table">
            <thead>
              <tr>
                <th>ID ▲</th>
                <th>ISSUE TYPE</th>
                <th>ASSET NAME</th>
                <th>DESCRIPTION</th>
                <th>STATUS</th>
                <th>DATE OF ISSUE</th>
                <th>DATE OF RETURN</th>
              </tr>
            </thead>
            <tbody>
              {assetItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.issueType}</td>
                  <td>{item.assetName}</td>
                  <td>{item.description || '-'}</td>
                  <td>{item.status}</td>
                  <td>{item.dateOfIssue}</td>
                  <td>{item.dateOfReturn || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
};

export default ViewAssetIssueDetail;
