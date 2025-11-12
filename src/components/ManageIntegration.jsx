import React, { useState } from 'react';
import Toast from './Toast';

const ManageIntegration = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [showInactives, setShowInactives] = useState(false);

  const [integrations] = useState([
    { 
      id: 1, 
      name: 'Default Web Services Integrations', 
      applicationId: '', 
      state: 'Enabled', 
      createdOn: '' 
    },
    { 
      id: 2, 
      name: 'ESS Portal and Mobile app Token', 
      applicationId: 'B8277CBE-43E8-46C5-8BC4-6E94445B3410', 
      state: 'Enabled', 
      createdOn: '2021-09-27 22:44:44' 
    },
    { 
      id: 3, 
      name: 'ESS PORTAL and Mobile APP', 
      applicationId: '9240D51C-8466-4BD2-8E6B-8CC23A66d646', 
      state: 'Enabled', 
      createdOn: '2021-11-23 01:10:06' 
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (id) => {
    setCurrentPage('view-integration-detail');
  };

  const handleNew = () => {
    setCurrentPage('new-integration');
  };

  const handleRefresh = () => {
    showToast('List refreshed', 'success');
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#333', margin: 0 }}>Integrations</h1>
        <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>
          Set Preferences
        </button>
      </div>

      {/* Action Buttons */}
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
        <button className="btn btn-primary" onClick={handleNew} style={{ padding: '0.5rem 1.5rem' }}>
          New
        </button>
        <button className="btn btn-secondary" onClick={handleRefresh} style={{ padding: '0.5rem 1.5rem' }}>
          Refresh
        </button>
      </div>

      {/* Show Inactives */}
      <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '1rem 1.5rem', marginBottom: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="btn-icon">
            <i className="fas fa-file" style={{ fontSize: '1.1rem' }}></i>
          </button>
          <button className="btn-icon">
            <i className="fas fa-file-excel" style={{ color: '#28a745', fontSize: '1.1rem' }}></i>
          </button>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer', marginLeft: 'auto' }}>
            <input
              type="checkbox"
              checked={showInactives}
              onChange={(e) => setShowInactives(e.target.checked)}
            />
            <span>SHOW INACTIVES</span>
          </label>
        </div>
      </div>

      {/* Table */}
      <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #e9ecef' }}>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase', width: '35%' }}>NAME</th>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase', width: '35%' }}>APPLICATION ID</th>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase', width: '15%' }}>STATE</th>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase', width: '15%' }}>CREATED ON</th>
            </tr>
          </thead>
          <tbody>
            {integrations.map((integration, index) => (
              <tr key={integration.id} style={{ borderBottom: '1px solid #e9ecef', backgroundColor: index % 2 === 0 ? 'white' : '#fafbfc' }}>
                <td style={{ padding: '1rem' }}>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handleView(integration.id); }}
                    style={{ color: '#3182CE', textDecoration: 'none', fontSize: '0.875rem' }}
                  >
                    {integration.name}
                  </a>
                </td>
                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>{integration.applicationId}</td>
                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>{integration.state}</td>
                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>{integration.createdOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default ManageIntegration;
