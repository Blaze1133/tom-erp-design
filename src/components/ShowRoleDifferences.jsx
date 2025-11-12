import React, { useState } from 'react';
import Toast from './Toast';

const ShowRoleDifferences = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [baseRole, setBaseRole] = useState('');
  const [compareToRole, setCompareToRole] = useState('');
  const [onlyShowDifferences, setOnlyShowDifferences] = useState(true);

  const roles = [
    'A/P Clerk',
    'A/R Clerk',
    'Accountant',
    'Accountant (Reviewer)',
    'Administrator',
    'Bookkeeper',
    'Buyer',
    'CEO',
    'Customer Center',
    'Employee Center',
    'Full Access',
    'Intranet Manager',
    'Sales Manager',
    'Sales Representative',
    'Support Manager',
    'Support Representative',
    'TOM Account Role',
    'TOM A/R Role',
    'TOM Estimation',
    'TOM Logistics / Store',
    'TOM Purchase',
    'TOM Sales Manager',
    'TOM Sales Role',
    'TOM-HR Head',
    'Vendor Center'
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleShow = () => {
    if (!baseRole || !compareToRole) {
      showToast('Please select both roles to compare', 'error');
      return;
    }
    showToast('Showing role differences...', 'success');
  };

  const handleCancel = () => {
    if (setCurrentPage) setCurrentPage('setup-users-roles');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-exchange-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Show Permission Differences Between Roles</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary">More</button>
        </div>
      </div>

      <div className="form-container">
        <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-tertiary" onClick={handleCancel}>Cancel</button>
          <button className="btn btn-primary" onClick={handleShow}>Show</button>
        </div>

        <div className="form-section">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
            {/* Left Column */}
            <div>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label className="form-label required">BASE ROLE</label>
                <select
                  className="form-control"
                  value={baseRole}
                  onChange={(e) => setBaseRole(e.target.value)}
                  style={{ width: '100%' }}
                >
                  <option value="">Select a role...</option>
                  {roles.map((role, i) => (
                    <option key={i} value={role}>{role}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label required">COMPARE TO</label>
                <select
                  className="form-control"
                  value={compareToRole}
                  onChange={(e) => setCompareToRole(e.target.value)}
                  size="10"
                  style={{ width: '100%', height: '300px' }}
                >
                  {roles.map((role, i) => (
                    <option key={i} value={role}>{role}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div style={{ paddingTop: '2rem' }}>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={onlyShowDifferences}
                  onChange={(e) => setOnlyShowDifferences(e.target.checked)}
                />
                <span>ONLY SHOW DIFFERENCES</span>
              </label>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '1.5rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '4px', border: '1px solid #e0e0e0' }}>
          <p style={{ margin: 0, color: '#666', fontSize: '0.875rem', textAlign: 'center' }}>
            Select a base role and one or more roles to compare, then click Show to view the differences.
          </p>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default ShowRoleDifferences;
