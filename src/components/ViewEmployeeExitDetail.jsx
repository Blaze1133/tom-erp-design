import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewEmployeeExitDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const exitData = {
    inactive: false,
    employee: '222267 Demo employee',
    hireDate: '28/9/2018',
    resignedDate: '1/9/2021',
    noticePeriodDays: 30,
    finalReleaseDate: '30/9/2021',
    exitType: 'Voluntary',
    reasonForResignation: 'Better opportunity',
    commentsByEmployee: 'Thank you for the opportunity',
    commentsByReviewer: 'Good employee, will be missed',
    remarksByHr: 'All clearances completed',
    upDocumentsProvided: 'Yes'
  };

  const departmentApprovals = [
    { department: 'IT', approvalReview: 'Approved', currentAssetReceivedList: 'Laptop, Mouse', departmentRemarks: 'All assets returned' }
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
          <i className="fas fa-sign-out-alt"></i>
          <div>
            <h1>Employee Exit Process</h1>
            <div className="detail-subtitle">
              <span>{exitData.employee}</span>
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
      </div>

      <div className="detail-content">
        {/* Main Information Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginBottom: '2rem', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
          <div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" checked={exitData.inactive} disabled />
                INACTIVE
              </label>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>EMPLOYEE</label>
              <div className="field-value">{exitData.employee}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>HIRE DATE</label>
              <div className="field-value">{exitData.hireDate}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>RESIGNED DATE</label>
              <div className="field-value">{exitData.resignedDate}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>NOTICE PERIOD DAYS</label>
              <div className="field-value">{exitData.noticePeriodDays}</div>
            </div>
            <div className="detail-field">
              <label>FINAL RELEASE DATE</label>
              <div className="field-value">{exitData.finalReleaseDate}</div>
            </div>
          </div>

          <div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>EXIT TYPE</label>
              <div className="field-value">{exitData.exitType}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>REASON FOR RESIGNATION</label>
              <div className="field-value">{exitData.reasonForResignation}</div>
            </div>
            <div className="detail-field">
              <label>COMMENTS BY EMPLOYEE</label>
              <div className="field-value">{exitData.commentsByEmployee}</div>
            </div>
          </div>

          <div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>COMMENTS BY REVIEWER</label>
              <div className="field-value">{exitData.commentsByReviewer}</div>
            </div>
            <div className="detail-field" style={{ marginBottom: '1rem' }}>
              <label>REMARKS BY HR</label>
              <div className="field-value">{exitData.remarksByHr}</div>
            </div>
            <div className="detail-field">
              <label>U/P DOCUMENTS PROVIDED</label>
              <div className="field-value">{exitData.upDocumentsProvided}</div>
            </div>
          </div>
        </div>

        {/* Department Approvals Table */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 600 }}>Department Approvals</h3>
          <table className="detail-items-table">
            <thead>
              <tr>
                <th>DEPARTMENT</th>
                <th>APPROVAL REVIEW</th>
                <th>CURRENT ASSET RECEIVED LIST</th>
                <th>DEPARTMENT REMARKS</th>
              </tr>
            </thead>
            <tbody>
              {departmentApprovals.length === 0 ? (
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                    No department approvals added yet
                  </td>
                </tr>
              ) : (
                departmentApprovals.map((approval, idx) => (
                  <tr key={idx}>
                    <td>{approval.department}</td>
                    <td>{approval.approvalReview}</td>
                    <td>{approval.currentAssetReceivedList}</td>
                    <td>{approval.departmentRemarks}</td>
                  </tr>
                ))
              )}
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

export default ViewEmployeeExitDetail;
