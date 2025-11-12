import React, { useState } from 'react';
import Toast from './Toast';

const ManageUsers = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [users] = useState([
    { id: 1, name: 'Camila Vendor', email: 'camila@tom.sg', role: 'TOM Account Role', phone: '' },
    { id: 2, name: 'Ghanendra-Nuvista', email: 'narasa@nuvistatech.com', role: 'Administrator', phone: '' },
    { id: 3, name: 'Nuvista - Gaurav', email: 'sudheer@nuvistatech.com', role: 'Administrator', phone: '' },
    { id: 4, name: 'Nuvista - Gaurav', email: 'sudheer@nuvistatech.com', role: 'TOM Account Role', phone: '' },
    { id: 5, name: 'Nuvista - Gaurav', email: 'sudheer@nuvistatech.com', role: 'TOM Sales Role', phone: '' },
    { id: 6, name: 'Nuvista - Gaurav', email: 'sudheer@nuvistatech.com', role: 'TOM Estimation', phone: '' },
    { id: 7, name: 'Nuvista - Gaurav', email: 'sudheer@nuvistatech.com', role: 'TOM Purchase', phone: '' },
    { id: 8, name: 'Nuvista - Gaurav', email: 'sudheer@nuvistatech.com', role: 'TOM Logistics / Store', phone: '' },
    { id: 9, name: 'Nuvista - Gaurav', email: 'sudheer@nuvistatech.com', role: 'TOM Sales Manager', phone: '' },
    { id: 10, name: 'Nuvista - Gaurav', email: 'sudheer@nuvistatech.com', role: 'TOM-HR Head', phone: '' },
    { id: 11, name: 'Nuvista - Gaurav', email: 'sudheer@nuvistatech.com', role: 'TOM A/R Role', phone: '' },
    { id: 12, name: 'Nuvista - Manohar', email: 'manohar@nuvistatech.com', role: 'Administrator', phone: '' },
    { id: 13, name: 'Nuvista Vendor Amitg', email: 'santosh@nuvistatech.com', role: 'Administrator', phone: '' },
    { id: 14, name: 'Nuvista Vendor Amitg', email: 'santosh@nuvistatech.com', role: 'TOM-HR Head', phone: '' },
    { id: 15, name: 'Nuvista Vendor Amitg', email: 'santosh@nuvistatech.com', role: 'TOM Sales Manager', phone: '' }
  ]);

  const handleNameClick = (user) => {
    setCurrentPage('view-user-vendor-detail');
  };

  const handleRoleClick = (role) => {
    setCurrentPage('view-role-detail');
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#333', margin: 0 }}>Manage Users</h1>
      </div>

      {/* Filters Bar */}
      <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '1rem 1.5rem', marginBottom: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: '600', cursor: 'pointer', color: '#666' }}>
            <i className="fas fa-filter"></i>
            FILTERS
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button className="btn-icon">
              <i className="fas fa-file" style={{ fontSize: '1.1rem' }}></i>
            </button>
            <button className="btn-icon">
              <i className="fas fa-file-excel" style={{ color: '#28a745', fontSize: '1.1rem' }}></i>
            </button>
            <button className="btn-icon">
              <i className="fas fa-print" style={{ fontSize: '1.1rem' }}></i>
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.875rem', color: '#666' }}>Camila — Tom-kotbal</span>
              <button className="btn-icon">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="btn-icon">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#666' }}>TOTAL: 63</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #e9ecef' }}>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>NAME ▲</th>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>EMAIL</th>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>ROLE</th>
              <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>PHONE</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} style={{ borderBottom: '1px solid #e9ecef', backgroundColor: index % 2 === 0 ? 'white' : '#fafbfc' }}>
                <td style={{ padding: '1rem' }}>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handleNameClick(user); }}
                    style={{ color: '#3182CE', textDecoration: 'none', fontSize: '0.875rem' }}
                  >
                    {user.name}
                  </a>
                </td>
                <td style={{ padding: '1rem' }}>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handleNameClick(user); }}
                    style={{ color: '#3182CE', textDecoration: 'none', fontSize: '0.875rem' }}
                  >
                    {user.email}
                  </a>
                </td>
                <td style={{ padding: '1rem' }}>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handleRoleClick(user.role); }}
                    style={{ color: '#3182CE', textDecoration: 'none', fontSize: '0.875rem' }}
                  >
                    {user.role}
                  </a>
                </td>
                <td style={{ padding: '1rem', fontSize: '0.875rem' }}>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default ManageUsers;
