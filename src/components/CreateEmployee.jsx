import React, { useState } from 'react';
import Toast from './Toast';
import EmployeeHRSubTabsEdit from './EmployeeHRSubTabsEdit';
import EmployeePayrollTabEdit from './EmployeePayrollTabEdit';
import EmployeeLeaveSwipeTabEdit from './EmployeeLeaveSwipeTabEdit';
import EmployeeSystemInfoTabEdit from './EmployeeSystemInfoTabEdit';
import EmployeeWorkInjuryTabEdit from './EmployeeWorkInjuryTabEdit';
import EmployeeExitProcessTabEdit from './EmployeeExitProcessTabEdit';
import './Enquiries.css';

const CreateEmployee = ({ employeeData, onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('contact');
  const [hrSubTab, setHrSubTab] = useState('basicInfo');
  const [addressRows, setAddressRows] = useState([]);
  const [newAddress, setNewAddress] = useState({
    defaultShipping: false,
    home: false,  
    label: '',
    address: ''
  });
  const [formData, setFormData] = useState(employeeData || {
    employeeId: '',
    mrMs: 'MR',
    name: '',
    knownName: '',
    initials: '',
    subsidiary: '',
    country: 'Singapore',
    doNotConsiderInIr8a: false,
    department: '',
    location: '',
    payPostingCategory: '',
    currency: 'SGD',
    supervisor: '',
    image: '',
    notes: '',
    employeeSignature: '',
    email: '',
    altEmail: '',
    phone: '',
    officePhone: '',
    mobilePhone: '',
    homePhone: '',
    fax: '',
    address: ''
  });

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'TOM Offshore Marine Engineering Pte Ltd',
    'TOM Shipyard Pte Ltd',
    'TOM Engineering & Trading Pte Ltd',
    'TOM Industrial Services Pte Ltd'
  ];
  const departments = [
    'TOM: Human Resource', 'TOM: Finance: Internal Transfer', 'TOM: IT', 'TOM: Logistic',
    'TOM: Operating', 'TOM: Purchase', 'TOM: Sales and Marketing', 'TOM: Security',
    'TOM: TOM INTERNALS: TOM HR', 'TOM: Nampak Reinsure', 'TOM: Auction Handover',
    'TOM: Engineering', 'TOM: Production', 'MEP MARINE', 'MEP', 'O&G'
  ];
  const locations = [
    'Hong Hang Shipyard', 'Mega yard', 'MEP MARINE CC', 'Shipyards/Construction',
    'Singapore (MEP)', 'TOM-11', 'TOM External Workshop', 'TOM-13'
  ];
  const payPostingCategories = ['Daily', 'Monthly', 'Local'];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!formData.name || !formData.subsidiary) {
      showToast('Please fill in required fields', 'error');
      return;
    }
    showToast('Employee saved successfully!', 'success');
    if (onSave) onSave(formData);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleAddAddress = () => {
    if (!newAddress.label || !newAddress.address) {
      showToast('Please fill in Label and Address fields', 'error');
      return;
    }
    setAddressRows([...addressRows, { ...newAddress, id: Date.now() }]);
    setNewAddress({ defaultShipping: false, home: false, label: '', address: '' });
    showToast('Address added successfully!', 'success');
  };

  const handleRemoveAddress = (id) => {
    setAddressRows(addressRows.filter(row => row.id !== id));
    showToast('Address removed successfully!', 'success');
  };

  const handleCancelAddress = () => {
    setNewAddress({ defaultShipping: false, home: false, label: '', address: '' });
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-user-plus"></i>
          <div>
            <h1>{employeeData ? 'Edit Employee' : 'Employee'}</h1>
            <div className="detail-subtitle">
              <span>{employeeData ? employeeData.employeeId : '# To be generated – New Employee'}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar" onClick={onCancel}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar" onClick={onCancel}>
          Cancel
        </button>
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
      </div>

      <div className="detail-content">
        {/* Primary Information Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>EMPLOYEE ID <span className="required">*</span></label>
                <input type="text" className="form-control" value={formData.employeeId} onChange={(e) => handleInputChange('employeeId', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>MR./MS...</label>
                <select className="form-control" value={formData.mrMs} onChange={(e) => handleInputChange('mrMs', e.target.value)}>
                  <option value="MR">MR</option>
                  <option value="MS">MS</option>
                  <option value="MRS">MRS</option>
                  <option value="DR">DR</option>
                </select>
              </div>
              <div className="detail-field">
                <label>NAME <span className="required">*</span></label>
                <input type="text" className="form-control" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>KNOWN NAME</label>
                <input type="text" className="form-control" value={formData.knownName} onChange={(e) => handleInputChange('knownName', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>INITIALS</label>
                <input type="text" className="form-control" value={formData.initials} onChange={(e) => handleInputChange('initials', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>COUNTRY</label>
                <input type="text" className="form-control" value={formData.country} onChange={(e) => handleInputChange('country', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>DO NOT CONSIDER IN IR8A</label>
                <div className="field-value">
                  <input type="checkbox" checked={formData.doNotConsiderInIr8a} onChange={(e) => handleInputChange('doNotConsiderInIr8a', e.target.checked)} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY <span className="required">*</span></label>
                <select className="form-control" value={formData.subsidiary} onChange={(e) => handleInputChange('subsidiary', e.target.value)}>
                  <option value="">Select Subsidiary</option>
                  {subsidiaries.map((sub, idx) => <option key={idx} value={sub}>{sub}</option>)}
                </select>
              </div>
              <div className="detail-field">
                <label>DEPARTMENT <span className="required">*</span></label>
                <select className="form-control" value={formData.department} onChange={(e) => handleInputChange('department', e.target.value)}>
                  <option value="">Select Department</option>
                  {departments.map((dept, idx) => <option key={idx} value={dept}>{dept}</option>)}
                </select>
              </div>
              <div className="detail-field">
                <label>LOCATION</label>
                <select className="form-control" value={formData.location} onChange={(e) => handleInputChange('location', e.target.value)}>
                  <option value="">Select Location</option>
                  {locations.map((loc, idx) => <option key={idx} value={loc}>{loc}</option>)}
                </select>
              </div>
              <div className="detail-field">
                <label>PAY POSTING CATEGORY <span className="required">*</span></label>
                <select className="form-control" value={formData.payPostingCategory} onChange={(e) => handleInputChange('payPostingCategory', e.target.value)}>
                  <option value="">Select Category</option>
                  {payPostingCategories.map((cat, idx) => <option key={idx} value={cat}>{cat}</option>)}
                </select>
              </div>
              <div className="detail-field">
                <label>EMPLOYEE SIGNATURE</label>
                <input type="text" className="form-control" value={formData.employeeSignature} onChange={(e) => handleInputChange('employeeSignature', e.target.value)} placeholder="<type then tab>" />
              </div>
            </div>
          </div>
        </div>

        {/* Other Info Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Other Info</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>IMAGE</label>
                <input type="text" className="form-control" value={formData.image} onChange={(e) => handleInputChange('image', e.target.value)} placeholder="<type then tab>" />
              </div>
              <div className="detail-field">
                <label>CURRENCY</label>
                <select className="form-control" value={formData.currency} onChange={(e) => handleInputChange('currency', e.target.value)}>
                  <option value="SGD">SGD</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
              <div className="detail-field">
                <label>SUPERVISOR <span className="required">*</span></label>
                <input type="text" className="form-control" value={formData.supervisor} onChange={(e) => handleInputChange('supervisor', e.target.value)} />
              </div>
              <div className="detail-field">
                <label>NOTES</label>
                <textarea className="form-control" value={formData.notes} onChange={(e) => handleInputChange('notes', e.target.value)} rows="3" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => setActiveTab('contact')}>Contact/Address</button>
            <button className={`tab-btn ${activeTab === 'humanResources' ? 'active' : ''}`} onClick={() => setActiveTab('humanResources')}>Human Resources</button>
            <button className={`tab-btn ${activeTab === 'payroll' ? 'active' : ''}`} onClick={() => setActiveTab('payroll')}>Payroll</button>
            <button className={`tab-btn ${activeTab === 'leaveSwipe' ? 'active' : ''}`} onClick={() => setActiveTab('leaveSwipe')}>Leave/Swipe</button>
            <button className={`tab-btn ${activeTab === 'systemInfo' ? 'active' : ''}`} onClick={() => setActiveTab('systemInfo')}>System Information</button>
            <button className={`tab-btn ${activeTab === 'workInjury' ? 'active' : ''}`} onClick={() => setActiveTab('workInjury')}>Work Injury and Insurance</button>
            <button className={`tab-btn ${activeTab === 'employeeExit' ? 'active' : ''}`} onClick={() => setActiveTab('employeeExit')}>Employee Exit Process</button>
          </div>

          <div className="tabs-content">
            {activeTab === 'contact' && (
              <div className="tab-content-wrapper" style={{ padding: '1.5rem' }}>
                <div className="detail-grid" style={{ marginBottom: '1.5rem' }}>
                  <div className="detail-field">
                    <label>EMAIL <span className="required">*</span></label>
                    <input type="email" className="form-control" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} />
                  </div>
                  <div className="detail-field">
                    <label>ALT. EMAIL</label>
                    <input type="email" className="form-control" value={formData.altEmail} onChange={(e) => handleInputChange('altEmail', e.target.value)} />
                  </div>
                  <div className="detail-field">
                    <label>PHONE</label>
                    <input type="tel" className="form-control" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} />
                  </div>
                  <div className="detail-field">
                    <label>MOBILE PHONE</label>
                    <input type="tel" className="form-control" value={formData.mobilePhone} onChange={(e) => handleInputChange('mobilePhone', e.target.value)} />
                  </div>
                  <div className="detail-field">
                    <label>HOME PHONE</label>
                    <input type="tel" className="form-control" value={formData.homePhone} onChange={(e) => handleInputChange('homePhone', e.target.value)} />
                  </div>
                  <div className="detail-field">
                    <label>OFFICE PHONE</label>
                    <input type="tel" className="form-control" value={formData.officePhone} onChange={(e) => handleInputChange('officePhone', e.target.value)} />
                  </div>
                  <div className="detail-field">
                    <label>FAX</label>
                    <input type="tel" className="form-control" value={formData.fax} onChange={(e) => handleInputChange('fax', e.target.value)} />
                  </div>
                  <div className="detail-field" style={{ gridColumn: 'span 2' }}>
                    <label>ADDRESS</label>
                    <textarea className="form-control" value={formData.address} onChange={(e) => handleInputChange('address', e.target.value)} rows="4" />
                  </div>
                </div>
                <div style={{ borderTop: '1px solid #e0e0e0', paddingTop: '1.5rem' }}>
                  <h4 style={{ marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600, color: '#333' }}>Address ●</h4>
                  
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th style={{ width: '10%' }}>DEFAULT SHIPPING</th>
                        <th style={{ width: '10%' }}>HOME</th>
                        <th style={{ width: '20%' }}>LABEL</th>
                        <th style={{ width: '50%' }}>ADDRESS</th>
                        <th style={{ width: '10%' }}>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {addressRows.map((row) => (
                        <tr key={row.id}>
                          <td style={{ textAlign: 'center' }}>{row.defaultShipping ? 'Yes' : 'No'}</td>
                          <td style={{ textAlign: 'center' }}>{row.home ? 'Yes' : 'No'}</td>
                          <td>{row.label}</td>
                          <td style={{ whiteSpace: 'pre-line' }}>{row.address}</td>
                          <td style={{ textAlign: 'center' }}>
                            <button 
                              className="btn btn-sm btn-secondary" 
                              onClick={() => handleRemoveAddress(row.id)}
                              style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                      {/* Editable Row */}
                      <tr style={{ background: '#f8f9fa' }}>
                        <td style={{ textAlign: 'center', padding: '0.5rem' }}>
                          <input 
                            type="checkbox" 
                            checked={newAddress.defaultShipping} 
                            onChange={(e) => setNewAddress({...newAddress, defaultShipping: e.target.checked})} 
                          />
                        </td>
                        <td style={{ textAlign: 'center', padding: '0.5rem' }}>
                          <input 
                            type="checkbox" 
                            checked={newAddress.home} 
                            onChange={(e) => setNewAddress({...newAddress, home: e.target.checked})} 
                          />
                        </td>
                        <td style={{ padding: '0.5rem' }}>
                          <input 
                            type="text" 
                            className="form-control" 
                            value={newAddress.label} 
                            onChange={(e) => setNewAddress({...newAddress, label: e.target.value})} 
                            placeholder="e.g., Home, Office"
                            style={{ fontSize: '0.85rem', padding: '0.4rem' }}
                          />
                        </td>
                        <td style={{ padding: '0.5rem' }}>
                          <textarea 
                            className="form-control" 
                            value={newAddress.address} 
                            onChange={(e) => setNewAddress({...newAddress, address: e.target.value})} 
                            rows="2"
                            placeholder="Enter full address"
                            style={{ fontSize: '0.85rem', padding: '0.4rem' }}
                          />
                        </td>
                        <td style={{ textAlign: 'center', padding: '0.5rem' }}>
                          <button 
                            className="btn btn-sm btn-primary" 
                            onClick={handleAddAddress}
                            style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {activeTab === 'humanResources' && (
              <EmployeeHRSubTabsEdit hrSubTab={hrSubTab} setHrSubTab={setHrSubTab} />
            )}
            {activeTab === 'payroll' && (
              <EmployeePayrollTabEdit />
            )}
            {activeTab === 'leaveSwipe' && (
              <EmployeeLeaveSwipeTabEdit />
            )}
            {activeTab === 'systemInfo' && (
              <EmployeeSystemInfoTabEdit />
            )}
            {activeTab === 'workInjury' && (
              <EmployeeWorkInjuryTabEdit />
            )}
            {activeTab === 'employeeExit' && (
              <EmployeeExitProcessTabEdit />
            )}
            {activeTab !== 'contact' && activeTab !== 'humanResources' && activeTab !== 'payroll' && activeTab !== 'leaveSwipe' && activeTab !== 'access' && activeTab !== 'systemInfo' && activeTab !== 'workInjury' && activeTab !== 'employeeExit' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>Content for {activeTab} tab</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default CreateEmployee;
