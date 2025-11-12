import React, { useState } from 'react';
import Toast from './Toast';

const EditUser = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('general');

  const [formData, setFormData] = useState({
    name: 'Camila Vendor',
    email: 'camila@tom.sg',
    role: 'TOM Account Role',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
    department: 'TOM: Operating',
    location: 'Singapore (MEP)',
    supervisor: '',
    phone: '',
    mobilePhone: '',
    fax: '',
    title: '',
    comments: '',
    giveAccess: true,
    sendNotificationEmail: false,
    requirePasswordChange: false,
    loginAccess: true,
    inactive: false
  });

  const roles = ['TOM Account Role', 'Administrator', 'TOM Sales Role', 'TOM Purchase', 'TOM Estimation'];
  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd'
  ];
  const departments = [
    'TOM: Operating',
    'TOM: Finance: Internal Transfer',
    'TOM: IT',
    'TOM: Logistic',
    'TOM: Purchase',
    'TOM: Sales and Marketing'
  ];
  const locations = [
    'Singapore (MEP)',
    'Hong Hang Shipyard',
    'Mega yard',
    'TOM-11',
    'TOM-13'
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field) => {
    setFormData(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSave = () => {
    if (!formData.name || !formData.email) {
      showToast('Please fill in required fields', 'error');
      return;
    }
    showToast('User saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (setCurrentPage) setCurrentPage('setup-manage-users');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-user" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Edit User</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary">List</button>
          <button className="btn btn-secondary">Search</button>
        </div>
      </div>

      <div className="form-container">
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-primary" onClick={handleSave}>Save</button>
          <button className="btn btn-tertiary" onClick={handleCancel}>Cancel</button>
          <button className="btn btn-secondary">Actions</button>
        </div>

        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
            >
              General
            </button>
            <button 
              className={`tab-btn ${activeTab === 'access' ? 'active' : ''}`}
              onClick={() => setActiveTab('access')}
            >
              Access
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'general' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label required">NAME</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">TITLE</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label required">EMAIL</label>
                    <input
                      type="email"
                      className="form-control"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">PHONE</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label required">ROLE</label>
                    <select
                      className="form-control"
                      value={formData.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                    >
                      {roles.map((role, i) => <option key={i}>{role}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">MOBILE PHONE</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.mobilePhone}
                      onChange={(e) => handleInputChange('mobilePhone', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">SUBSIDIARY</label>
                    <select
                      className="form-control"
                      value={formData.subsidiary}
                      onChange={(e) => handleInputChange('subsidiary', e.target.value)}
                    >
                      {subsidiaries.map((sub, i) => <option key={i}>{sub}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">FAX</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.fax}
                      onChange={(e) => handleInputChange('fax', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">DEPARTMENT</label>
                    <select
                      className="form-control"
                      value={formData.department}
                      onChange={(e) => handleInputChange('department', e.target.value)}
                    >
                      {departments.map((dept, i) => <option key={i}>{dept}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">SUPERVISOR</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.supervisor}
                      onChange={(e) => handleInputChange('supervisor', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">LOCATION</label>
                    <select
                      className="form-control"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                    >
                      {locations.map((loc, i) => <option key={i}>{loc}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.inactive}
                        onChange={() => handleCheckboxChange('inactive')}
                      />
                      <span>INACTIVE</span>
                    </label>
                  </div>

                  <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label className="form-label">COMMENTS</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={formData.comments}
                      onChange={(e) => handleInputChange('comments', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'access' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.giveAccess}
                        onChange={() => handleCheckboxChange('giveAccess')}
                      />
                      <span>GIVE ACCESS</span>
                    </label>
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.sendNotificationEmail}
                        onChange={() => handleCheckboxChange('sendNotificationEmail')}
                      />
                      <span>SEND NOTIFICATION EMAIL</span>
                    </label>
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.requirePasswordChange}
                        onChange={() => handleCheckboxChange('requirePasswordChange')}
                      />
                      <span>REQUIRE PASSWORD CHANGE ON NEXT LOGIN</span>
                    </label>
                  </div>
                  <div className="form-group"></div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.loginAccess}
                        onChange={() => handleCheckboxChange('loginAccess')}
                      />
                      <span>LOGIN ACCESS</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
          <button className="btn btn-primary" onClick={handleSave}>Save</button>
          <button className="btn btn-tertiary" onClick={handleCancel}>Cancel</button>
          <button className="btn btn-secondary">Actions</button>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default EditUser;
