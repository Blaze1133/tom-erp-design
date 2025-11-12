import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CustomerStatusList = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [showInactives, setShowInactives] = useState(false);

  const [statuses] = useState([
    { id: 1, status: 'Qualified', stage: 'Lead', probability: '10', description: '', includeInLeadReports: 'Yes' },
    { id: 2, status: 'Unqualified', stage: 'Lead', probability: '0', description: '', includeInLeadReports: 'No' },
    { id: 3, status: 'Closed Lost', stage: 'Prospect', probability: '0', description: '', includeInLeadReports: '' },
    { id: 4, status: 'Identified Decision Makers', stage: 'Prospect', probability: '30', description: '', includeInLeadReports: '' },
    { id: 5, status: 'In Discussion', stage: 'Prospect', probability: '20', description: '', includeInLeadReports: '' },
    { id: 6, status: 'In Negotiation', stage: 'Prospect', probability: '75', description: '', includeInLeadReports: '' },
    { id: 7, status: 'Proposal', stage: 'Prospect', probability: '50', description: '', includeInLeadReports: '' },
    { id: 8, status: 'Purchasing', stage: 'Prospect', probability: '90', description: '', includeInLeadReports: '' },
    { id: 9, status: 'Closed Won', stage: 'Customer', probability: '100', description: '', includeInLeadReports: '' },
    { id: 10, status: 'Lost Customer', stage: 'Customer', probability: '0', description: '', includeInLeadReports: '' },
    { id: 11, status: 'Renewal', stage: 'Customer', probability: '100', description: '', includeInLeadReports: '' }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (id) => {
    setCurrentPage('view-customer-status-detail');
  };

  const handleNew = () => {
    setCurrentPage('new-customer-status');
  };

  const handleRefresh = () => {
    showToast('List refreshed', 'success');
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-user-check"></i>
          <h1>Customer Status List</h1>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNew}>New</button>
          <button className="btn btn-secondary" onClick={handleRefresh}>Refresh</button>
        </div>
      </div>

      <div className="list-filters">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={showInactives}
            onChange={(e) => setShowInactives(e.target.checked)}
          />
          <span>SHOW INACTIVES</span>
        </label>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '25%' }}>CUSTOMER STATUS</th>
              <th style={{ width: '15%' }}>STAGE</th>
              <th style={{ width: '15%' }}>PROBABILITY</th>
              <th style={{ width: '25%' }}>DESCRIPTION</th>
              <th style={{ width: '20%' }}>INCLUDE IN LEAD REPORTS</th>
            </tr>
          </thead>
          <tbody>
            {statuses.map((status) => (
              <tr key={status.id} onClick={() => handleView(status.id)} style={{ cursor: 'pointer' }}>
                <td style={{ color: '#3182CE' }}>{status.status}</td>
                <td>{status.stage}</td>
                <td>{status.probability}</td>
                <td>{status.description}</td>
                <td>{status.includeInLeadReports}</td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default CustomerStatusList;
