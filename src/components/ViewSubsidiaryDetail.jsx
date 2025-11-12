import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewSubsidiaryDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('addresses');

  const subsidiary = JSON.parse(sessionStorage.getItem('selectedSubsidiary') || '{}');

  const [formData] = useState({
    subsidiaryIsInactive: false,
    name: subsidiary.name || 'Tech Onshore MEP Prefabricators Pte Ltd.',
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

  const handleEdit = () => {
    setCurrentPage('edit-subsidiary');
  };

  const handleBack = () => {
    setCurrentPage('view-subsidiaries');
  };

  const handleList = () => {
    setCurrentPage('view-subsidiaries');
  };

  const handleSearch = () => {
    showToast('Search functionality coming soon', 'info');
  };

  const handleCustomize = () => {
    showToast('Customize functionality coming soon', 'info');
  };

  const handleSubsidiarySettings = () => {
    setCurrentPage('setup-subsidiary-settings-detail');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-building" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Subsidiary</h1>
        </div>
        <div className="page-actions">
          <button className="btn-icon" onClick={handleBack} title="Back">
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-icon" onClick={() => showToast('Forward', 'info')} title="Forward">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-view-option" onClick={handleList}>List</button>
          <button className="btn-view-option" onClick={handleSearch}>Search</button>
          <button className="btn-view-option" onClick={handleCustomize}>Customize</button>
          <button className="btn btn-primary" onClick={handleSubsidiarySettings}>
            Subsidiary Settings
          </button>
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
        <button className="btn btn-primary" onClick={handleEdit}>
          <i className="fas fa-edit"></i>
          Edit
        </button>
        <button className="btn btn-secondary" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn btn-secondary">
          <i className="fas fa-ellipsis-h"></i>
          Actions
        </button>
      </div>

      {/* Basic Information Section */}
      <div className="form-section" style={{ padding: '15px 20px', backgroundColor: '#f9f9f9' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px 20px' }}>
          <div className="form-group" style={{ gridColumn: 'span 3', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
            <input
              type="checkbox"
              id="inactive"
              checked={formData.subsidiaryIsInactive}
              disabled
              style={{ width: '14px', height: '14px' }}
            />
            <label htmlFor="inactive" style={{ margin: 0, fontWeight: '500', fontSize: '12px' }}>SUBSIDIARY IS INACTIVE</label>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>NAME *</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.name}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>CURRENCY *</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.currency}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>SALARY PAYABLE ACCOUNT</label>
            <div style={{ fontSize: '13px', color: '#333' }}>21010 Payroll Liabilities : Salary Payable</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>PARENT SUBSIDIARY</label>
            <div style={{ fontSize: '13px', color: '#333' }}>Tech Onshore MEP Prefabricators Pte Ltd.</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>INTERCOMPANY ACCOUNT</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.intercompanyAccount || '-'}</div>
          </div>

          <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              checked={formData.alwaysDisplaySubsidiaryName}
              disabled
              style={{ width: '14px', height: '14px' }}
            />
            <label style={{ margin: 0, fontSize: '12px' }}>ALWAYS DISPLAY SUBSIDIARY NAME</label>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>SUBSIDIARY LOGO (FORMS)</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.subsidiaryLogo}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>EDITION</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.edition}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>CPF SUBMISSION NUMBER (CSN)</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.cpfSubmissionNumber}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>SUBSIDIARY LOGO (IMAGES)</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.subsidiaryLogoImages}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>VAT REGISTRATION NO.</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.vatRegistrationNo}</div>
          </div>

          <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              checked={formData.biometricIntegration}
              disabled
              style={{ width: '14px', height: '14px' }}
            />
            <label style={{ margin: 0, fontSize: '12px' }}>BIOMETRIC INTEGRATION</label>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>WEB SITE</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.webSite}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>ID NUMBER</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.idNumber || '-'}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>AUTHORIZE PERSON PHONE NO</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.authorizePersonPhoneNo || '-'}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>DOCUMENT NUMBER PREFIX</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.documentNumberPrefix}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>PAY SLIP EMAIL FROM</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.paySlipEmailFrom}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>IRAS AUTHORIZED PERSON</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.irasAuthorizedPerson}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>STATE/PROVINCE</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.stateProvince || '-'}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>AUTH. PERSON'S DESIGN.</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.authPersonDesign || '-'}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>PAYMENT MODE</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.paymentMode}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>COUNTRY *</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.country}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>TAX REF. NO./ UEN</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.taxRefNo}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>DEFAULT BANK PRINT</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.defaultBankPrint}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>LEGAL NAME</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.legalName}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>PAYBATCH CSV FILES</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.paybatchCsvFiles}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>STAMP</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.stamp}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>RETURN EMAIL ADDRESS</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.returnEmailAddress}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>ORGANISATION ID TYPE</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.organisationIdType}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>IRBS FOLDER ID</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.irbsFolderId}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>FAX</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.fax || '-'}</div>
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
          {['Addresses', 'Vendor Bill Matching', 'Nexuses', 'Preferences', 'Document Numbers', 'Workflow', 'System Notes'].map((tab) => (
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
            <p>Address information will be displayed here.</p>
          </div>
        )}
        {activeTab === 'vendor-bill-matching' && (
          <div style={{ color: '#666' }}>
            <p>Vendor Bill Matching settings will be displayed here.</p>
          </div>
        )}
        {activeTab === 'nexuses' && (
          <div style={{ color: '#666' }}>
            <p>Nexuses information will be displayed here.</p>
          </div>
        )}
        {activeTab === 'preferences' && (
          <div style={{ color: '#666' }}>
            <p>Preferences will be displayed here.</p>
          </div>
        )}
        {activeTab === 'document-numbers' && (
          <div style={{ color: '#666' }}>
            <p>Document Numbers will be displayed here.</p>
          </div>
        )}
        {activeTab === 'workflow' && (
          <div style={{ color: '#666' }}>
            <p>Workflow information will be displayed here.</p>
          </div>
        )}
        {activeTab === 'system-notes' && (
          <div style={{ color: '#666' }}>
            <p>System Notes will be displayed here.</p>
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
        <button className="btn btn-primary" onClick={handleEdit}>
          <i className="fas fa-edit"></i>
          Edit
        </button>
        <button className="btn btn-secondary" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
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

export default ViewSubsidiaryDetail;
