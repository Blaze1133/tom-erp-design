import React, { useState } from 'react';

const EmployeeAccessTabEdit = () => {
  const [accessData, setAccessData] = useState({
    giveAccess: false,
    sendNotificationEmail: false,
    password: '',
    manuallyAssignOrChangePassword: false,
    confirmPassword: '',
    requirePasswordChangeOnNextLogin: false,
    leaveManagementAccess: false,
    employeeCenterPassword: '',
    empCenterDisplayImage: '',
    empPassword: '',
    empInternalId: '',
    geoFencingApplicable: false
  });

  const [roles, setRoles] = useState([
    { id: 1, role: '' }
  ]);

  const handleInputChange = (field, value) => {
    setAccessData(prev => ({ ...prev, [field]: value }));
  };

  const handleRoleChange = (id, value) => {
    setRoles(prev => prev.map(role => 
      role.id === id ? { ...role, role: value } : role
    ));
  };

  const handleAddRole = () => {
    const newRole = {
      id: Date.now(),
      role: ''
    };
    setRoles(prev => [...prev, newRole]);
  };

  const handleRemoveRole = (id) => {
    setRoles(prev => prev.filter(role => role.id !== id));
  };

  return (
    <div className="tab-content-wrapper">
      <div className="detail-content">
        {/* Access Information */}
        <div className="detail-section">
          <div className="detail-grid">
            {/* Left Column */}
            <div>
              <div className="detail-field">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input 
                    type="checkbox" 
                    checked={accessData.giveAccess}
                    onChange={(e) => handleInputChange('giveAccess', e.target.checked)}
                  />
                  GIVE ACCESS
                </label>
              </div>

              <div className="detail-field">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input 
                    type="checkbox" 
                    checked={accessData.sendNotificationEmail}
                    onChange={(e) => handleInputChange('sendNotificationEmail', e.target.checked)}
                  />
                  SEND NOTIFICATION EMAIL
                </label>
              </div>

              <div className="detail-field">
                <label>PASSWORD</label>
                <input 
                  type="password" 
                  className="form-control"
                  value={accessData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input 
                    type="checkbox" 
                    checked={accessData.manuallyAssignOrChangePassword}
                    onChange={(e) => handleInputChange('manuallyAssignOrChangePassword', e.target.checked)}
                  />
                  MANUALLY ASSIGN OR CHANGE PASSWORD
                </label>
              </div>

              <div className="detail-field">
                <label>CONFIRM PASSWORD</label>
                <input 
                  type="password" 
                  className="form-control"
                  value={accessData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input 
                    type="checkbox" 
                    checked={accessData.requirePasswordChangeOnNextLogin}
                    onChange={(e) => handleInputChange('requirePasswordChangeOnNextLogin', e.target.checked)}
                  />
                  REQUIRE PASSWORD CHANGE ON NEXT LOGIN
                </label>
              </div>

              <div className="detail-field">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input 
                    type="checkbox" 
                    checked={accessData.leaveManagementAccess}
                    onChange={(e) => handleInputChange('leaveManagementAccess', e.target.checked)}
                  />
                  LEAVE MANAGEMENT ACCESS
                </label>
              </div>

              <div className="detail-field">
                <label>EMPLOYEE CENTER PASSWORD</label>
                <input 
                  type="password" 
                  className="form-control"
                  value={accessData.employeeCenterPassword}
                  onChange={(e) => handleInputChange('employeeCenterPassword', e.target.value)}
                />
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Password Criteria */}
              <div style={{ 
                background: '#fff3cd', 
                border: '1px solid #ffeaa7', 
                borderRadius: '4px', 
                padding: '0.75rem',
                marginBottom: '1rem',
                fontSize: '0.75rem'
              }}>
                <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Password Criteria</div>
                <div style={{ color: '#856404' }}>
                  <div>🔴 Be at least 12 characters long</div>
                  <div>🔴 Does not contain illegal characters</div>
                  <div>🔴 Must contain at least one of each:</div>
                  <div style={{ marginLeft: '1rem', fontSize: '0.7rem' }}>
                    • Uppercase alpha characters (A, B, ... Z)<br/>
                    • Lowercase alpha characters (a, b, ... z)<br/>
                    • Numeric characters (0, 1, ... 9)<br/>
                    • Non-alphanumeric ASCII characters
                  </div>
                  <div>🔴 New passwords match</div>
                </div>
              </div>

              <div className="detail-field">
                <label>EMP CENTER DISPLAY IMAGE</label>
                <select className="form-control">
                  <option value="">- Type then tab -</option>
                </select>
              </div>

              <div className="detail-field">
                <label>EMP PASSWORD</label>
                <input 
                  type="password" 
                  className="form-control"
                  value={accessData.empPassword}
                  onChange={(e) => handleInputChange('empPassword', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label>EMP INTERNAL ID</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={accessData.empInternalId}
                  onChange={(e) => handleInputChange('empInternalId', e.target.value)}
                />
              </div>

              <div className="detail-field">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input 
                    type="checkbox" 
                    checked={accessData.geoFencingApplicable}
                    onChange={(e) => handleInputChange('geoFencingApplicable', e.target.checked)}
                  />
                  GEO FENCING APPLICABLE
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Roles Section */}
        <div className="detail-section">
          <div className="detail-tabs">
            <div className="tabs-header">
              <button className="tab-btn active">Roles</button>
              <button className="tab-btn">History</button>
            </div>
          </div>

          <div className="items-table-wrapper">
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th>ROLE</th>
                </tr>
              </thead>
              <tbody>
                {roles.map(role => (
                  <tr key={role.id}>
                    <td>
                      <select 
                        className="form-control"
                        value={role.role}
                        onChange={(e) => handleRoleChange(role.id, e.target.value)}
                      >
                        <option value=""></option>
                        <option value="Employee">Employee</option>
                        <option value="Manager">Manager</option>
                        <option value="Admin">Admin</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-actions">
            <button className="btn-table-action" onClick={handleAddRole}>
              <i className="fas fa-plus"></i> Add
            </button>
            <button className="btn-table-action">
              <i className="fas fa-times"></i> Cancel
            </button>
            <button className="btn-table-action">
              <i className="fas fa-plus"></i> Insert
            </button>
            <button className="btn-table-action">
              <i className="fas fa-trash"></i> Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAccessTabEdit;
