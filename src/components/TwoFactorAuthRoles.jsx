import React, { useState } from 'react';
import Toast from './Toast';

const TwoFactorAuthRoles = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [showInactives, setShowInactives] = useState(false);

  const [roles, setRoles] = useState([
    { id: 1, role: 'A/P Clerk', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 2, role: 'A/R Clerk', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 3, role: 'Accountant', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 4, role: 'Accountant (Reviewer)', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 5, role: 'Administrator', mandatory2FA: true, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 6, role: 'Advanced Partner Center', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 7, role: 'Bookkeeper', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 8, role: 'Buyer', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 9, role: 'CEO', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 10, role: 'CEO(Hands Off)', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 11, role: 'CFO', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 12, role: 'Chief People Officer (CPO)', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 13, role: 'Consultant', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 14, role: 'Custom Employee Centre 2', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 15, role: 'Dashboard Tile File Path Admin Role', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 16, role: 'Data Warehouse Integrator', mandatory2FA: true, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 17, role: 'Developer', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 18, role: 'EIO Script Admin', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 19, role: 'Human Resources Administrator', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 20, role: 'Human Resources Generalist', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 21, role: 'Intranet Manager', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 22, role: 'Issue Administrator', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 23, role: 'Marketing Administrator', mandatory2FA: true, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 24, role: 'Marketing Assistant', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 25, role: 'Marketing Manager', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 26, role: 'Nuvista Script Admin Role', mandatory2FA: true, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 27, role: 'TOM A/R Role', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 28, role: 'TOM Account Role', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 29, role: 'TOM Controller Role', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 30, role: 'TOM Estimation', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 31, role: 'TOM Logistics / Store', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 32, role: 'TOM Purchase', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 33, role: 'TOM Sales Manager', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 34, role: 'TOM Sales Role', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 35, role: 'TOM-Admin', mandatory2FA: true, twoFactorRequired: 'Not required', duration: '30 Days' },
    { id: 36, role: 'TOM-HR Head', mandatory2FA: false, twoFactorRequired: 'Not required', duration: '30 Days' }
  ]);

  const twoFactorOptions = ['Not required', 'Required', 'Optional'];
  const durationOptions = ['30 Days', '60 Days', '90 Days', '180 Days', '1 Year'];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleCheckboxChange = (id) => {
    setRoles(roles.map(role => 
      role.id === id ? { ...role, mandatory2FA: !role.mandatory2FA } : role
    ));
  };

  const handleTwoFactorChange = (id, value) => {
    setRoles(roles.map(role => 
      role.id === id ? { ...role, twoFactorRequired: value } : role
    ));
  };

  const handleDurationChange = (id, value) => {
    setRoles(roles.map(role => 
      role.id === id ? { ...role, duration: value } : role
    ));
  };

  const handleSubmit = () => {
    showToast('Two-Factor Authentication settings saved successfully!', 'success');
  };

  const handleBack = () => {
    if (setCurrentPage) setCurrentPage('setup-users-roles');
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#333', margin: 0 }}>Two-Factor Authentication Roles</h1>
      </div>

      {/* Submit Button */}
      <div style={{ marginBottom: '1rem' }}>
        <button className="btn btn-primary" onClick={handleSubmit} style={{ padding: '0.5rem 1.5rem' }}>
          Submit
        </button>
      </div>

      {/* Show Inactives and Total */}
      <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '1rem 1.5rem', marginBottom: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={showInactives}
            onChange={(e) => setShowInactives(e.target.checked)}
          />
          <span>SHOW INACTIVES</span>
        </label>
        <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#666' }}>TOTAL: 79</span>
      </div>

      {/* Table */}
      <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #e9ecef' }}>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase', width: '30%' }}>ROLE</th>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase', width: '15%' }}>MANDATORY 2FA</th>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase', width: '30%' }}>TWO-FACTOR AUTHENTICATION REQUIRED</th>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase', width: '25%' }}>DURATION OF TRUSTED DEVICE</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role, index) => (
              <tr key={role.id} style={{ borderBottom: '1px solid #e9ecef', backgroundColor: index % 2 === 0 ? 'white' : '#fafbfc' }}>
                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>{role.role}</td>
                <td style={{ padding: '1rem', textAlign: 'center' }}>
                  <input
                    type="checkbox"
                    checked={role.mandatory2FA}
                    onChange={() => handleCheckboxChange(role.id)}
                    style={{ cursor: 'pointer' }}
                  />
                </td>
                <td style={{ padding: '1rem' }}>
                  <select
                    className="form-control"
                    value={role.twoFactorRequired}
                    onChange={(e) => handleTwoFactorChange(role.id, e.target.value)}
                    style={{ width: '100%', fontSize: '0.875rem' }}
                  >
                    {twoFactorOptions.map((option, i) => (
                      <option key={i} value={option}>{option}</option>
                    ))}
                  </select>
                </td>
                <td style={{ padding: '1rem' }}>
                  <select
                    className="form-control"
                    value={role.duration}
                    onChange={(e) => handleDurationChange(role.id, e.target.value)}
                    style={{ width: '100%', fontSize: '0.875rem' }}
                  >
                    {durationOptions.map((option, i) => (
                      <option key={i} value={option}>{option}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default TwoFactorAuthRoles;
