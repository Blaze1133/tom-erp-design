import React from 'react';

const EmployeeAccessTabView = () => {
  const accessInfo = {
    giveAccess: true,
    sendNotificationEmail: false,
    manuallyAssignOrChangePassword: false,
    requirePasswordChangeOnNextLogin: false,
    leaveManagementAccess: true,
    empCenterDisplayImage: '',
    empInternalId: 'EMP001',
    geoFencingApplicable: false
  };

  const roles = [
    { id: 1, role: 'Employee' }
  ];

  return (
    <div className="tab-content-wrapper">
      <div style={{ padding: '1.5rem', background: '#fff' }}>
        {/* Access Information Section */}
        <div style={{ 
          background: '#f8f9fa', 
          padding: '1rem', 
          borderRadius: '4px',
          marginBottom: '1.5rem',
          border: '1px solid #dee2e6'
        }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#4a5568', fontWeight: 600 }}>
            Access Information
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {/* Left Column */}
            <div>
              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>GIVE ACCESS</label>
                <div className="field-value">{accessInfo.giveAccess ? 'Yes' : 'No'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>SEND NOTIFICATION EMAIL</label>
                <div className="field-value">{accessInfo.sendNotificationEmail ? 'Yes' : 'No'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>MANUALLY ASSIGN OR CHANGE PASSWORD</label>
                <div className="field-value">{accessInfo.manuallyAssignOrChangePassword ? 'Yes' : 'No'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>REQUIRE PASSWORD CHANGE ON NEXT LOGIN</label>
                <div className="field-value">{accessInfo.requirePasswordChangeOnNextLogin ? 'Yes' : 'No'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>LEAVE MANAGEMENT ACCESS</label>
                <div className="field-value">{accessInfo.leaveManagementAccess ? 'Yes' : 'No'}</div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>EMP CENTER DISPLAY IMAGE</label>
                <div className="field-value">{accessInfo.empCenterDisplayImage || '-'}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>EMP INTERNAL ID</label>
                <div className="field-value">{accessInfo.empInternalId}</div>
              </div>

              <div className="detail-field" style={{ marginBottom: '1rem' }}>
                <label>GEO FENCING APPLICABLE</label>
                <div className="field-value">{accessInfo.geoFencingApplicable ? 'Yes' : 'No'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Roles Section */}
        <div style={{ 
          background: '#f8f9fa', 
          padding: '1rem', 
          borderRadius: '4px',
          border: '1px solid #dee2e6'
        }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#4a5568', fontWeight: 600 }}>
            Roles
          </h4>
          <div className="items-table-wrapper">
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th>ROLE</th>
                </tr>
              </thead>
              <tbody>
                {roles.length === 0 ? (
                  <tr>
                    <td style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                      No roles assigned
                    </td>
                  </tr>
                ) : (
                  roles.map((role) => (
                    <tr key={role.id}>
                      <td>{role.role}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAccessTabView;
