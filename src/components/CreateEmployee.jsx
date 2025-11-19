import React, { useState } from 'react';
import Toast from './Toast';
import EmployeeHRSubTabsEdit from './EmployeeHRSubTabsEdit';
import EmployeePayrollTabEdit from './EmployeePayrollTabEdit';
import EmployeeLeaveSwipeTabEdit from './EmployeeLeaveSwipeTabEdit';
import EmployeeAccessTabEdit from './EmployeeAccessTabEdit';
import EmployeeSystemInfoTabEdit from './EmployeeSystemInfoTabEdit';
import EmployeeWorkInjuryTabEdit from './EmployeeWorkInjuryTabEdit';
import EmployeeExitProcessTabEdit from './EmployeeExitProcessTabEdit';
import './Enquiries.css';

const CreateEmployee = ({ employeeData, onSave, onCancel }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('contact');
  const [hrSubTab, setHrSubTab] = useState('basicInfo');
  const [formData, setFormData] = useState(employeeData || {
    customForm: 'HR Employee Form-SINGAPORE',
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
    firstLevelLeaveApprover: '',
    secondLevelLeaveApprover: '',
    thirdLevelLeaveApprover: '',
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

  const customForms = ['HR Employee Form-SINGAPORE', 'Standard Employee Form'];
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
  const payPostingCategories = ['- New -', 'Direct', 'In Direct', 'Local'];

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

  return (
    <div className="create-form">
      <div className="quotation-header-clean">
        <div className="page-title-clean">
          <i className="fas fa-user-plus"></i>
          <div>
            <h1>{employeeData ? 'Edit Employee' : 'Employee'}</h1>
            <p className="page-subtitle">{employeeData ? employeeData.employeeId : 'New Employee'}</p>
          </div>
        </div>
        <div className="header-actions-clean">
          <button className="btn-clean btn-save" onClick={handleSave}>Save</button>
          <button className="btn-clean btn-cancel" onClick={onCancel}>Cancel</button>
          <button className="btn-clean">Search</button>
          <button className="btn-clean"><i className="fas fa-cog"></i> Actions</button>
        </div>
      </div>

      <div className="quotation-container-clean">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          {/* Primary Information */}
          <div className="form-section-clean">
            <div className="section-title-clean">Primary Information</div>
            <div className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="form-group">
                <label className="form-label required">CUSTOM FORM</label>
                <select className="form-control" value={formData.customForm} onChange={(e) => handleInputChange('customForm', e.target.value)}>
                  {customForms.map((form, idx) => <option key={idx} value={form}>{form}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label required">EMPLOYEE ID</label>
                <input type="text" className="form-control" value={formData.employeeId} onChange={(e) => handleInputChange('employeeId', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">MR./MS...</label>
                <select className="form-control" value={formData.mrMs} onChange={(e) => handleInputChange('mrMs', e.target.value)}>
                  <option value="MR">MR</option>
                  <option value="MS">MS</option>
                  <option value="MRS">MRS</option>
                  <option value="DR">DR</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label required">NAME</label>
                <input type="text" className="form-control" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">KNOWN NAME</label>
                <input type="text" className="form-control" value={formData.knownName} onChange={(e) => handleInputChange('knownName', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">INITIALS</label>
                <input type="text" className="form-control" value={formData.initials} onChange={(e) => handleInputChange('initials', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label required">SUBSIDIARY</label>
                <select className="form-control" value={formData.subsidiary} onChange={(e) => handleInputChange('subsidiary', e.target.value)}>
                  <option value="">Select Subsidiary</option>
                  {subsidiaries.map((sub, idx) => <option key={idx} value={sub}>{sub}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">COUNTRY</label>
                <input type="text" className="form-control" value={formData.country} onChange={(e) => handleInputChange('country', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" checked={formData.doNotConsiderInIr8a} onChange={(e) => handleInputChange('doNotConsiderInIr8a', e.target.checked)} />
                  DO NOT CONSIDER IN IR8A
                </label>
              </div>
            </div>
          </div>

          {/* Classification */}
          <div className="form-section-clean">
            <div className="section-title-clean">Classification</div>
            <div className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="form-group">
                <label className="form-label required">DEPARTMENT</label>
                <select className="form-control" value={formData.department} onChange={(e) => handleInputChange('department', e.target.value)}>
                  <option value="">Select Department</option>
                  {departments.map((dept, idx) => <option key={idx} value={dept}>{dept}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">LOCATION</label>
                <select className="form-control" value={formData.location} onChange={(e) => handleInputChange('location', e.target.value)}>
                  <option value="">Select Location</option>
                  {locations.map((loc, idx) => <option key={idx} value={loc}>{loc}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label required">PAY POSTING CATEGORY</label>
                <select className="form-control" value={formData.payPostingCategory} onChange={(e) => handleInputChange('payPostingCategory', e.target.value)}>
                  <option value="">Select Category</option>
                  {payPostingCategories.map((cat, idx) => <option key={idx} value={cat}>{cat}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">EMPLOYEE SIGNATURE</label>
                <input type="text" className="form-control" value={formData.employeeSignature} onChange={(e) => handleInputChange('employeeSignature', e.target.value)} placeholder="<type then tab>" />
              </div>
            </div>
          </div>

          {/* Other Info */}
          <div className="form-section-clean">
            <div className="section-title-clean">Other Info</div>
            <div className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="form-group">
                <label className="form-label">IMAGE</label>
                <input type="text" className="form-control" value={formData.image} onChange={(e) => handleInputChange('image', e.target.value)} placeholder="<type then tab>" />
              </div>
              <div className="form-group">
                <label className="form-label">NOTES</label>
                <textarea className="form-control" value={formData.notes} onChange={(e) => handleInputChange('notes', e.target.value)} rows="3" />
              </div>
              <div className="form-group">
                <label className="form-label">CURRENCY</label>
                <select className="form-control" value={formData.currency} onChange={(e) => handleInputChange('currency', e.target.value)}>
                  <option value="SGD">SGD</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label required">SUPERVISOR</label>
                <input type="text" className="form-control" value={formData.supervisor} onChange={(e) => handleInputChange('supervisor', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">1ST LEVEL LEAVE APPROVER</label>
                <input type="text" className="form-control" value={formData.firstLevelLeaveApprover} onChange={(e) => handleInputChange('firstLevelLeaveApprover', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">2ND LEVEL LEAVE APPROVER</label>
                <input type="text" className="form-control" value={formData.secondLevelLeaveApprover} onChange={(e) => handleInputChange('secondLevelLeaveApprover', e.target.value)} placeholder="<type then tab>" />
              </div>
              <div className="form-group">
                <label className="form-label">3RD LEVEL LEAVE APPROVER</label>
                <input type="text" className="form-control" value={formData.thirdLevelLeaveApprover} onChange={(e) => handleInputChange('thirdLevelLeaveApprover', e.target.value)} placeholder="<type then tab>" />
              </div>
              <div className="form-group">
                <label className="form-label">NAME</label>
                <div className="field-value">{formData.name}</div>
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
            <button className={`tab-btn ${activeTab === 'access' ? 'active' : ''}`} onClick={() => setActiveTab('access')}>Access</button>
            <button className={`tab-btn ${activeTab === 'systemInfo' ? 'active' : ''}`} onClick={() => setActiveTab('systemInfo')}>System Information</button>
            <button className={`tab-btn ${activeTab === 'workInjury' ? 'active' : ''}`} onClick={() => setActiveTab('workInjury')}>Work Injury and Insurance</button>
            <button className={`tab-btn ${activeTab === 'employeeExit' ? 'active' : ''}`} onClick={() => setActiveTab('employeeExit')}>Employee Exit Process</button>
          </div>

          <div className="tabs-content">
            {activeTab === 'contact' && (
              <div className="tab-content-wrapper" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div className="form-group">
                    <label className="form-label required">EMAIL</label>
                    <input type="email" className="form-control" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">MOBILE PHONE</label>
                    <input type="tel" className="form-control" value={formData.mobilePhone} onChange={(e) => handleInputChange('mobilePhone', e.target.value)} />
                  </div>
                  <div className="form-group" style={{ gridRow: 'span 3' }}>
                    <label className="form-label">ADDRESS</label>
                    <textarea className="form-control" value={formData.address} onChange={(e) => handleInputChange('address', e.target.value)} rows="8" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">ALT. EMAIL</label>
                    <input type="email" className="form-control" value={formData.altEmail} onChange={(e) => handleInputChange('altEmail', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">HOME PHONE</label>
                    <input type="tel" className="form-control" value={formData.homePhone} onChange={(e) => handleInputChange('homePhone', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">PHONE</label>
                    <input type="tel" className="form-control" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">FAX</label>
                    <input type="tel" className="form-control" value={formData.fax} onChange={(e) => handleInputChange('fax', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">OFFICE PHONE</label>
                    <input type="tel" className="form-control" value={formData.officePhone} onChange={(e) => handleInputChange('officePhone', e.target.value)} />
                  </div>
                </div>
                <div style={{ borderTop: '1px solid #e8e8e8', paddingTop: '1.5rem' }}>
                  <h4 style={{ marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 600 }}>Address ●</h4>
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th style={{ width: '10%' }}>DEFAULT SHIPPING</th>
                        <th style={{ width: '10%' }}>HOME</th>
                        <th style={{ width: '15%' }}>LABEL</th>
                        <th style={{ width: '55%' }}>ADDRESS</th>
                        <th style={{ width: '10%' }}>EDIT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="5" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>No addresses added yet</td>
                      </tr>
                    </tbody>
                  </table>
                  <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                    <button className="btn btn-primary"><i className="fas fa-check"></i> Add</button>
                    <button className="btn btn-secondary"><i className="fas fa-times"></i> Cancel</button>
                    <button className="btn btn-secondary"><i className="fas fa-plus"></i> Insert</button>
                    <button className="btn btn-secondary"><i className="fas fa-trash"></i> Remove</button>
                  </div>
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
            {activeTab === 'access' && (
              <EmployeeAccessTabEdit />
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
