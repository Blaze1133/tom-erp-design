import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewUserVendorDetail = ({ onBack, onEdit }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [emailPhoneCollapsed, setEmailPhoneCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('subsidiaries');

  const vendorData = {
    vendorId: 'Camila Vendor',
    type: 'Company',
    companyName: 'Camila Vendor',
    webAddress: '',
    category: '',
    comments: '',
    email: 'camila@tom.sg',
    phone: '',
    altPhone: '',
    fax: '',
    address: '',
    primarySubsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.'
  };

  const handleEdit = () => {
    if (onEdit) onEdit();
  };

  const handleBack = () => {
    if (onBack) onBack();
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-building"></i>
          <div>
            <h1>Vendor</h1>
            <div className="detail-subtitle">
              <span>{vendorData.companyName}</span>
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
          <button className="btn-action">View Dashboard</button>
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
        <button className="btn-toolbar">Make Payment</button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-file-alt"></i>
        </button>
        <button className="btn-toolbar">Actions</button>
      </div>

      <div className="detail-content">
        {/* Primary Information */}
        <div className={`detail-section ${primaryInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setPrimaryInfoCollapsed(!primaryInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>VENDOR ID</label>
                <div className="field-value">{vendorData.vendorId}</div>
              </div>
              <div className="detail-field">
                <label>WEB ADDRESS</label>
                <div className="field-value">{vendorData.webAddress || '-'}</div>
              </div>
              <div className="detail-field">
                <label>COMMENTS</label>
                <div className="field-value">{vendorData.comments || '-'}</div>
              </div>
              <div className="detail-field">
                <label>TYPE</label>
                <div className="field-value">{vendorData.type}</div>
              </div>
              <div className="detail-field">
                <label>CATEGORY</label>
                <div className="field-value">{vendorData.category || '-'}</div>
              </div>
              <div className="detail-field"></div>
              <div className="detail-field">
                <label>COMPANY NAME</label>
                <div className="field-value">{vendorData.companyName}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Email | Phone | Address */}
        <div className={`detail-section ${emailPhoneCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setEmailPhoneCollapsed(!emailPhoneCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Email | Phone | Address</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>EMAIL</label>
                <div className="field-value">{vendorData.email}</div>
              </div>
              <div className="detail-field">
                <label>ALT. PHONE</label>
                <div className="field-value">{vendorData.altPhone || '-'}</div>
              </div>
              <div className="detail-field">
                <label>ADDRESS</label>
                <div className="field-value">{vendorData.address || '-'}</div>
              </div>
              <div className="detail-field">
                <label>PHONE</label>
                <div className="field-value">{vendorData.phone || '-'}</div>
              </div>
              <div className="detail-field">
                <label>FAX</label>
                <div className="field-value">{vendorData.fax || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className={`detail-section ${classificationCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setClassificationCollapsed(!classificationCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>PRIMARY SUBSIDIARY</label>
                <div className="field-value">{vendorData.primarySubsidiary}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-section">
          <div className="detail-tabs">
            <div className="tabs-header" style={{ backgroundColor: '#5a6c7d' }}>
              <button 
                className={`tab-btn ${activeTab === 'subsidiaries' ? 'active' : ''}`}
                onClick={() => setActiveTab('subsidiaries')}
                style={{ color: 'white' }}
              >
                Subsidiaries
              </button>
              <button 
                className={`tab-btn ${activeTab === 'relationships' ? 'active' : ''}`}
                onClick={() => setActiveTab('relationships')}
                style={{ color: 'white' }}
              >
                Relationships
              </button>
              <button 
                className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`}
                onClick={() => setActiveTab('communication')}
                style={{ color: 'white' }}
              >
                Communication
              </button>
              <button 
                className={`tab-btn ${activeTab === 'address' ? 'active' : ''}`}
                onClick={() => setActiveTab('address')}
                style={{ color: 'white' }}
              >
                Address
              </button>
              <button 
                className={`tab-btn ${activeTab === 'financial' ? 'active' : ''}`}
                onClick={() => setActiveTab('financial')}
                style={{ color: 'white' }}
              >
                Financial
              </button>
              <button 
                className={`tab-btn ${activeTab === 'preferences' ? 'active' : ''}`}
                onClick={() => setActiveTab('preferences')}
                style={{ color: 'white' }}
              >
                Preferences
              </button>
              <button 
                className={`tab-btn ${activeTab === 'systemInfo' ? 'active' : ''}`}
                onClick={() => setActiveTab('systemInfo')}
                style={{ color: 'white' }}
              >
                System Information
              </button>
              <button 
                className={`tab-btn ${activeTab === 'access' ? 'active' : ''}`}
                onClick={() => setActiveTab('access')}
                style={{ color: 'white' }}
              >
                Access
              </button>
              <button 
                className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`}
                onClick={() => setActiveTab('custom')}
                style={{ color: 'white' }}
              >
                Custom
              </button>
              <button 
                className={`tab-btn ${activeTab === 'timeTracking' ? 'active' : ''}`}
                onClick={() => setActiveTab('timeTracking')}
                style={{ color: 'white' }}
              >
                Time Tracking
              </button>
            </div>

            <div className="tabs-content">
              {activeTab === 'subsidiaries' && (
                <div style={{ padding: '1rem' }}>
                  <div className="items-table-wrapper">
                    <table className="detail-items-table">
                      <thead>
                        <tr>
                          <th>SUBSIDIARY</th>
                          <th>PRIMARY</th>
                          <th>INACTIVE</th>
                          <th>BALANCE</th>
                          <th>BALANCE (BASE)</th>
                          <th>PREPAYMENT BALANCE</th>
                          <th>PREPAYMENT BALANCE (BASE)</th>
                          <th>UNBILLED ORDERS</th>
                          <th>UNBILLED ORDERS (BASE)</th>
                          <th>CREDIT LIMIT</th>
                          <th>TAX CODE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Tech Onshore MEP Prefabricators Pte Ltd.</td>
                          <td>Yes</td>
                          <td></td>
                          <td>0.00 (SGD)</td>
                          <td>0.00 (SGD)</td>
                          <td>0.00 (SGD)</td>
                          <td>0.00 (SGD)</td>
                          <td>0.00 (SGD)</td>
                          <td>0.00 (SGD)</td>
                          <td>(SGD)</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="detail-footer-actions">
          <button className="btn-toolbar-primary" onClick={handleEdit}>
            <i className="fas fa-edit"></i>
            Edit
          </button>
          <button className="btn-toolbar" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn-toolbar">Make Payment</button>
          <button className="btn-toolbar">Actions</button>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default ViewUserVendorDetail;
