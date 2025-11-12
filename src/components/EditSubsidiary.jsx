import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditSubsidiary = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('addresses');

  const subsidiary = JSON.parse(sessionStorage.getItem('selectedSubsidiary') || '{}');

  const [formData, setFormData] = useState({
    subsidiaryIsInactive: false,
    name: subsidiary.name || 'Tech Onshore MEP Prefabricators Pte Ltd.',
    parentSubsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    alwaysDisplaySubsidiaryName: true,
    subsidiaryLogo: 'TOM_LOGO.png',
    subsidiaryLogoImages: 'TOM_LOGO.png',
    webSite: 'https://www.tom.sg',
    documentNumberPrefix: 'TOM',
    stateProvince: '',
    country: 'Singapore',
    legalName: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    returnEmailAddress: 'gaurav@nuvistatech.com',
    fax: '',
    
    // Elimination
    currency: 'SGD',
    intercompanyAccount: '',
    
    // Edition
    edition: 'XX',
    vatRegistrationNo: 'M90362330Y',
    idNumber: '',
    paySlipEmailFrom: 'Praveen Chandraseka',
    authPersonDesign: '',
    taxRefNo: '199507962E',
    paybatchCsvFiles: '1441',
    organisationIdType: 'UEN - Local Company Registration number issued by ACRA',
    salaryPayableAccount: '21010 Payroll Liabilities : Salary Payable',
    
    // LWF Check
    cpfSubmissionNumber: '199507962E-PTE-02',
    biometricIntegration: true,
    authorizePersonPhoneNo: '',
    irasAuthorizedPerson: 'MEP049 Camila Shirde',
    paymentMode: 'All Payment Made by Giro to Tech Onshore MEP-Prefabricators Pte. Ltd. At DBS Bank A/C No.: 003-906132-3, Swift Code: DBSSSGSG',
    defaultBankPrint: 'TOM(S) DBS BANK SGD',
    stamp: 'MEP',
    irbsFolderId: '1441'
  });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    showToast('Subsidiary saved successfully!', 'success');
    setTimeout(() => {
      setCurrentPage('view-subsidiaries');
    }, 1500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      setCurrentPage('view-subsidiaries');
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-building" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Subsidiary</h1>
        </div>
        <div className="page-actions">
          <button className="btn-icon" onClick={handleCancel} title="Back">
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-icon" onClick={() => showToast('Forward', 'info')} title="Forward">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-view-option" onClick={() => setCurrentPage('view-subsidiaries')}>List</button>
          <button className="btn-view-option" onClick={() => showToast('Search', 'info')}>Search</button>
          <button className="btn-view-option" onClick={() => showToast('Customize', 'info')}>Customize</button>
          <button className="btn-icon" title="More">
            <i className="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </div>

      <div className="form-actions" style={{ 
        padding: '15px 20px', 
        borderBottom: '1px solid #ddd',
        display: 'flex',
        gap: '10px'
      }}>
        <button className="btn btn-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn btn-secondary" onClick={handleCancel}>
          <i className="fas fa-times"></i>
          Cancel
        </button>
        <button className="btn btn-secondary">
          <i className="fas fa-ellipsis-h"></i>
          Actions
        </button>
      </div>

      {/* Basic Information Section */}
      <div className="form-section" style={{ padding: '15px 20px', backgroundColor: '#f9f9f9' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px 20px' }}>
          <div className="form-group" style={{ gridColumn: 'span 3', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px' }}>
            <input
              type="checkbox"
              id="inactive"
              checked={formData.subsidiaryIsInactive}
              onChange={(e) => handleInputChange('subsidiaryIsInactive', e.target.checked)}
              style={{ width: '14px', height: '14px' }}
            />
            <label htmlFor="inactive" style={{ margin: 0, fontWeight: '500', fontSize: '12px' }}>SUBSIDIARY IS INACTIVE</label>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>NAME *</label>
            <input
              type="text"
              className="form-control"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>CURRENCY *</label>
            <select
              className="form-control"
              value={formData.currency}
              onChange={(e) => handleInputChange('currency', e.target.value)}
            >
              <option value="SGD">SGD</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>SALARY PAYABLE ACCOUNT</label>
            <input
              type="text"
              className="form-control"
              value={formData.salaryPayableAccount}
              onChange={(e) => handleInputChange('salaryPayableAccount', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>PARENT SUBSIDIARY</label>
            <select
              className="form-control"
              value={formData.parentSubsidiary}
              onChange={(e) => handleInputChange('parentSubsidiary', e.target.value)}
            >
              <option value="Tech Onshore MEP Prefabricators Pte Ltd.">Tech Onshore MEP Prefabricators Pte Ltd.</option>
            </select>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>INTERCOMPANY ACCOUNT</label>
            <input
              type="text"
              className="form-control"
              value={formData.intercompanyAccount}
              onChange={(e) => handleInputChange('intercompanyAccount', e.target.value)}
            />
          </div>

          <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              checked={formData.alwaysDisplaySubsidiaryName}
              onChange={(e) => handleInputChange('alwaysDisplaySubsidiaryName', e.target.checked)}
              style={{ width: '14px', height: '14px' }}
            />
            <label style={{ margin: 0, fontSize: '12px' }}>ALWAYS DISPLAY SUBSIDIARY NAME</label>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>SUBSIDIARY LOGO (FORMS)</label>
            <select
              className="form-control"
              value={formData.subsidiaryLogo}
              onChange={(e) => handleInputChange('subsidiaryLogo', e.target.value)}
            >
              <option value="TOM_LOGO.png">TOM_LOGO.png</option>
            </select>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>EDITION</label>
            <input
              type="text"
              className="form-control"
              value={formData.edition}
              onChange={(e) => handleInputChange('edition', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>CPF SUBMISSION NUMBER (CSN)</label>
            <input
              type="text"
              className="form-control"
              value={formData.cpfSubmissionNumber}
              onChange={(e) => handleInputChange('cpfSubmissionNumber', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>SUBSIDIARY LOGO (IMAGES)</label>
            <select
              className="form-control"
              value={formData.subsidiaryLogoImages}
              onChange={(e) => handleInputChange('subsidiaryLogoImages', e.target.value)}
            >
              <option value="TOM_LOGO.png">TOM_LOGO.png</option>
            </select>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>VAT REGISTRATION NO.</label>
            <input
              type="text"
              className="form-control"
              value={formData.vatRegistrationNo}
              onChange={(e) => handleInputChange('vatRegistrationNo', e.target.value)}
            />
          </div>

          <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              checked={formData.biometricIntegration}
              onChange={(e) => handleInputChange('biometricIntegration', e.target.checked)}
              style={{ width: '14px', height: '14px' }}
            />
            <label style={{ margin: 0, fontSize: '12px' }}>BIOMETRIC INTEGRATION</label>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>WEB SITE</label>
            <input
              type="text"
              className="form-control"
              value={formData.webSite}
              onChange={(e) => handleInputChange('webSite', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>ID NUMBER</label>
            <input
              type="text"
              className="form-control"
              value={formData.idNumber}
              onChange={(e) => handleInputChange('idNumber', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>AUTHORIZE PERSON PHONE NO</label>
            <input
              type="text"
              className="form-control"
              value={formData.authorizePersonPhoneNo}
              onChange={(e) => handleInputChange('authorizePersonPhoneNo', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>DOCUMENT NUMBER PREFIX</label>
            <input
              type="text"
              className="form-control"
              value={formData.documentNumberPrefix}
              onChange={(e) => handleInputChange('documentNumberPrefix', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>PAY SLIP EMAIL FROM</label>
            <input
              type="text"
              className="form-control"
              value={formData.paySlipEmailFrom}
              onChange={(e) => handleInputChange('paySlipEmailFrom', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>IRAS AUTHORIZED PERSON</label>
            <input
              type="text"
              className="form-control"
              value={formData.irasAuthorizedPerson}
              onChange={(e) => handleInputChange('irasAuthorizedPerson', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>STATE/PROVINCE</label>
            <input
              type="text"
              className="form-control"
              value={formData.stateProvince}
              onChange={(e) => handleInputChange('stateProvince', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>AUTH. PERSON'S DESIGN.</label>
            <input
              type="text"
              className="form-control"
              value={formData.authPersonDesign}
              onChange={(e) => handleInputChange('authPersonDesign', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>PAYMENT MODE</label>
            <textarea
              className="form-control"
              value={formData.paymentMode}
              onChange={(e) => handleInputChange('paymentMode', e.target.value)}
              rows="2"
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>COUNTRY *</label>
            <select
              className="form-control"
              value={formData.country}
              onChange={(e) => handleInputChange('country', e.target.value)}
            >
              <option value="Singapore">Singapore</option>
              <option value="Malaysia">Malaysia</option>
            </select>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>TAX REF. NO./ UEN</label>
            <input
              type="text"
              className="form-control"
              value={formData.taxRefNo}
              onChange={(e) => handleInputChange('taxRefNo', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>DEFAULT BANK PRINT</label>
            <select
              className="form-control"
              value={formData.defaultBankPrint}
              onChange={(e) => handleInputChange('defaultBankPrint', e.target.value)}
            >
              <option value="TOM(S) DBS BANK SGD">TOM(S) DBS BANK SGD</option>
            </select>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>LEGAL NAME</label>
            <input
              type="text"
              className="form-control"
              value={formData.legalName}
              onChange={(e) => handleInputChange('legalName', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>PAYBATCH CSV FILES</label>
            <input
              type="text"
              className="form-control"
              value={formData.paybatchCsvFiles}
              onChange={(e) => handleInputChange('paybatchCsvFiles', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>STAMP</label>
            <input
              type="text"
              className="form-control"
              value={formData.stamp}
              onChange={(e) => handleInputChange('stamp', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>RETURN EMAIL ADDRESS</label>
            <input
              type="email"
              className="form-control"
              value={formData.returnEmailAddress}
              onChange={(e) => handleInputChange('returnEmailAddress', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>ORGANISATION ID TYPE</label>
            <select
              className="form-control"
              value={formData.organisationIdType}
              onChange={(e) => handleInputChange('organisationIdType', e.target.value)}
            >
              <option value="- New -">- New -</option>
              <option value="ASGD - Tax Reference number assigned by IRAS">ASGD - Tax Reference number assigned by IRAS</option>
              <option value="ITR - Income Tax Reference number assigned by IRAS">ITR - Income Tax Reference number assigned by IRAS</option>
              <option value="UEN - Business Registration number issued by ACRA">UEN - Business Registration number issued by ACRA</option>
              <option value="UEN - Local Company Registration number issued by ACRA">UEN - Local Company Registration number issued by ACRA</option>
              <option value="UENO - Unique Entity Number Others (e.g. Foreign Company Registration Number)">UENO - Unique Entity Number Others (e.g. Foreign Company Registration Number)</option>
            </select>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>IRBS FOLDER ID</label>
            <input
              type="text"
              className="form-control"
              value={formData.irbsFolderId}
              onChange={(e) => handleInputChange('irbsFolderId', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>FAX</label>
            <input
              type="text"
              className="form-control"
              value={formData.fax}
              onChange={(e) => handleInputChange('fax', e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="tabs-container" style={{ borderBottom: '2px solid #5b7a9e' }}>
        <div className="tabs" style={{ 
          display: 'flex', 
          backgroundColor: '#5b7a9e',
          padding: '0'
        }}>
          {['Addresses', 'Document Numbers'].map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab.toLowerCase().replace(' ', '-') ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
              style={{
                padding: '12px 20px',
                backgroundColor: activeTab === tab.toLowerCase().replace(' ', '-') ? '#5b7a9e' : '#7a92b0',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '500',
                borderRight: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content" style={{ padding: '20px', minHeight: '200px' }}>
        {activeTab === 'addresses' && (
          <div style={{ color: '#666' }}>
            <p>Address information can be edited here.</p>
          </div>
        )}
        {activeTab === 'document-numbers' && (
          <div style={{ color: '#666' }}>
            <p>Document Numbers can be edited here.</p>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="form-actions" style={{ 
        padding: '15px 20px', 
        borderTop: '1px solid #ddd',
        display: 'flex',
        gap: '10px',
        marginTop: '20px'
      }}>
        <button className="btn btn-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        <button className="btn btn-secondary" onClick={handleCancel}>
          <i className="fas fa-times"></i>
          Cancel
        </button>
      </div>

      <Toast 
        message={toast.message} 
        type={toast.type} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
    </div>
  );
};

export default EditSubsidiary;
