import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const SetupCompanyInformation = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('addresses');

  const [formData, setFormData] = useState({
    companyName: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    legalName: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    companyLogoForms: 'TOM_LOGO.png',
    companyLogoPages: 'TOM_LOGO.png',
    displayLogoInternally: true,
    website: 'https://www.tom.sg',
    country: 'Singapore',
    returnEmailAddress: 'gaurav@nuvistatech.com',
    fax: '',
    currency: 'SGD',
    vatRegistrationNo: 'M90362330Y',
    firstFiscalMonth: 'January',
    timeZone: '(GMT+08:00) Kuala Lumpur, Singapore',
    accountId: '7091073',
    dataCenter: 'AP Osaka 1',
    idNumber: '3',
    paySlipEmailFrom: 'Praveen Chandraseka',
    authPersonDesign: '',
    taxRefNo: '199507962E',
    paybatchCsvFiles: '1444',
    organisationIdType: 'UEN - Local Company Registration number issued by ACRA',
    salaryPayableAccount: '21010 Payroll Liabilities : Salary Payable',
    uwfCheck: false,
    cpfSubmissionNumber: '199507962E-PTE-02',
    biometricIntegration: true,
    authorizePersonPhoneNo: '',
    irasAuthorizedPerson: 'MEP049 Camila Shirde',
    paymentMode: 'All Payment Mode by Giro to Tech Onshore MEP-Prefabricators Pte. Ltd. At DBS Bank A/C No.: 003-906132-3, Swift Code: DBSSSGSG',
    defaultBankPrint: 'TOM(S) DBS BANK SGD',
    stamp: 'MEP',
    irbaFolderId: '1441',
    address: 'Tech Onshore MEP Prefabricators Pte Ltd.\n13 Tuas South Street 3\nSingapore 638018\nSingapore',
    returnAddress: 'Tech Onshore MEP Prefabricators Pte Ltd.\n13\nTuas South Street 3\nSingapore 638018\nSingapore',
    shippingAddress: 'Tech Onshore MEP Prefabricators Pte Ltd.\n13 Tuas South Street 3\nSingapore 638018\nSingapore',
    customerCenterLogin: 'https://7091073.app.netsuite.com/app/login/secure/privatelogin.nl?c=7091073',
    restlets: 'https://7091073.restlets.api.netsuite.com',
    netsuiteUi: 'https://7091073.app.netsuite.com',
    externalForms: 'https://7091073.extforms.netsuite.com',
    suiteTalk: 'https://7091073.suitetalk.api.netsuite.com'
  });

  const logoOptions = [
    'TOM_LOGO.png',
    'TEA',
    'TMO',
    'TOM DQ',
    'TOM S',
    'TSV',
    'Venkat.png',
    'Employee Signature for Print on Quotation.png'
  ];

  const organisationIdTypes = [
    '- New -',
    'ASGD - Tax Reference number assigned by IRAS',
    'ITR - Income Tax Reference number assigned by IRAS',
    'UEN - Business Registration number issued by ACRA',
    'UEN - Local Company Registration number issued by ACRA',
    'UENO - Unique Entity Number Others (e.g. Foreign Company Registration Number)'
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const timeZones = [
    '(GMT+08:00) Kuala Lumpur, Singapore',
    '(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi'
  ];

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
    showToast('Company Information saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      setCurrentPage('setup-company');
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-building" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Company Information</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Main Form Fields - Two Column Layout */}
        <div className="form-section">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 3rem' }}>
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">COMPANY NAME <span className="required">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">LEGAL NAME</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.legalName}
                  onChange={(e) => handleInputChange('legalName', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">COMPANY LOGO (FORMS)</label>
                <select 
                  className="form-control"
                  value={formData.companyLogoForms}
                  onChange={(e) => handleInputChange('companyLogoForms', e.target.value)}
                >
                  {logoOptions.map((logo, index) => (
                    <option key={index} value={logo}>{logo}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">COMPANY LOGO (PAGES)</label>
                <select 
                  className="form-control"
                  value={formData.companyLogoPages}
                  onChange={(e) => handleInputChange('companyLogoPages', e.target.value)}
                >
                  {logoOptions.map((logo, index) => (
                    <option key={index} value={logo}>{logo}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center' }}>
                  <input 
                    type="checkbox" 
                    checked={formData.displayLogoInternally}
                    onChange={(e) => handleInputChange('displayLogoInternally', e.target.checked)}
                    style={{ marginRight: '8px', width: 'auto' }}
                  />
                  DISPLAY LOGO INTERNALLY
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">WEB SITE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">COUNTRY/STATE/PROVINCE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">COUNTRY</label>
                <select 
                  className="form-control"
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                >
                  <option>Singapore</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">RETURN EMAIL ADDRESS <span className="required">*</span></label>
                <input 
                  type="email" 
                  className="form-control"
                  value={formData.returnEmailAddress}
                  onChange={(e) => handleInputChange('returnEmailAddress', e.target.value)}
                />
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
                <label className="form-label">CURRENCY</label>
                <select 
                  className="form-control"
                  value={formData.currency}
                  onChange={(e) => handleInputChange('currency', e.target.value)}
                >
                  <option>SGD</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">VAT REGISTRATION NO.</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.vatRegistrationNo}
                  onChange={(e) => handleInputChange('vatRegistrationNo', e.target.value)}
                />
              </div>
            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">ID NUMBER</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.idNumber}
                  onChange={(e) => handleInputChange('idNumber', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">PAY SLIP EMAIL FROM</label>
                <select 
                  className="form-control"
                  value={formData.paySlipEmailFrom}
                  onChange={(e) => handleInputChange('paySlipEmailFrom', e.target.value)}
                >
                  <option>Praveen Chandraseka</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">AUTH. PERSON'S DESIGN.</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.authPersonDesign}
                  onChange={(e) => handleInputChange('authPersonDesign', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">TAX REF. NO./ UEN</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.taxRefNo}
                  onChange={(e) => handleInputChange('taxRefNo', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">PAYBATCH CSV FILES</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.paybatchCsvFiles}
                  onChange={(e) => handleInputChange('paybatchCsvFiles', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">ORGANISATION ID TYPE</label>
                <select 
                  className="form-control"
                  value={formData.organisationIdType}
                  onChange={(e) => handleInputChange('organisationIdType', e.target.value)}
                >
                  {organisationIdTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">SALARY PAYABLE ACCOUNT</label>
                <select 
                  className="form-control"
                  value={formData.salaryPayableAccount}
                  onChange={(e) => handleInputChange('salaryPayableAccount', e.target.value)}
                >
                  <option>{formData.salaryPayableAccount}</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center' }}>
                  <input 
                    type="checkbox" 
                    checked={formData.uwfCheck}
                    onChange={(e) => handleInputChange('uwfCheck', e.target.checked)}
                    style={{ marginRight: '8px', width: 'auto' }}
                  />
                  UWF CHECK
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">CPF SUBMISSION NUMBER (CSN)</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.cpfSubmissionNumber}
                  onChange={(e) => handleInputChange('cpfSubmissionNumber', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center' }}>
                  <input 
                    type="checkbox" 
                    checked={formData.biometricIntegration}
                    onChange={(e) => handleInputChange('biometricIntegration', e.target.checked)}
                    style={{ marginRight: '8px', width: 'auto' }}
                  />
                  BIOMETRIC INTEGRATION
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">AUTHORIZE PERSON PHONE NO</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={formData.authorizePersonPhoneNo}
                  onChange={(e) => handleInputChange('authorizePersonPhoneNo', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">IRAS AUTHORIZED PERSON</label>
                <select 
                  className="form-control"
                  value={formData.irasAuthorizedPerson}
                  onChange={(e) => handleInputChange('irasAuthorizedPerson', e.target.value)}
                >
                  <option>{formData.irasAuthorizedPerson}</option>
                </select>
              </div>
            </div>
          </div>

          {/* Full Width Fields */}
          <div style={{ marginTop: '1rem' }}>
            <div className="form-group">
              <label className="form-label">PAYMENT MODE</label>
              <textarea 
                className="form-control"
                value={formData.paymentMode}
                onChange={(e) => handleInputChange('paymentMode', e.target.value)}
                rows="3"
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0 1.5rem', marginTop: '1rem' }}>
            <div className="form-group">
              <label className="form-label">DEFAULT BANK PRINT</label>
              <select 
                className="form-control"
                value={formData.defaultBankPrint}
                onChange={(e) => handleInputChange('defaultBankPrint', e.target.value)}
              >
                <option>{formData.defaultBankPrint}</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">STAMP</label>
              <select 
                className="form-control"
                value={formData.stamp}
                onChange={(e) => handleInputChange('stamp', e.target.value)}
              >
                <option>MEP</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">IRBA FOLDER ID</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.irbaFolderId}
                onChange={(e) => handleInputChange('irbaFolderId', e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="form-section" style={{ marginTop: '2rem' }}>
          <h2 className="section-title">
            <i className="fas fa-cog"></i>
            Configuration
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0 1rem 0' }} />
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">FIRST FISCAL MONTH <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.firstFiscalMonth}
                onChange={(e) => handleInputChange('firstFiscalMonth', e.target.value)}
              >
                {months.map((month, index) => (
                  <option key={index} value={month}>{month}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">TIME ZONE</label>
              <select 
                className="form-control"
                value={formData.timeZone}
                onChange={(e) => handleInputChange('timeZone', e.target.value)}
              >
                {timeZones.map((tz, index) => (
                  <option key={index} value={tz}>{tz}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">ACCOUNT ID</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.accountId}
                onChange={(e) => handleInputChange('accountId', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">DATA CENTER</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.dataCenter}
                onChange={(e) => handleInputChange('dataCenter', e.target.value)}
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Tabs Section */}
        <div className="tabs-container">
          <div className="tabs-header">
            <button 
              className={`tab-button ${activeTab === 'addresses' ? 'active' : ''}`}
              onClick={() => setActiveTab('addresses')}
            >
              Addresses
            </button>
            <button 
              className={`tab-button ${activeTab === 'urls' ? 'active' : ''}`}
              onClick={() => setActiveTab('urls')}
            >
              Company URLs
            </button>
            <button 
              className={`tab-button ${activeTab === 'notes' ? 'active' : ''}`}
              onClick={() => setActiveTab('notes')}
            >
              System Notes
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'addresses' && (
              <div className="form-section">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">ADDRESS</label>
                    <textarea 
                      className="form-control"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      rows="5"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">RETURN ADDRESS</label>
                    <textarea 
                      className="form-control"
                      value={formData.returnAddress}
                      onChange={(e) => handleInputChange('returnAddress', e.target.value)}
                      rows="5"
                    />
                  </div>
                  <div className="form-group" style={{ gridColumn: 'span 2' }}>
                    <label className="form-label">SHIPPING ADDRESS</label>
                    <textarea 
                      className="form-control"
                      value={formData.shippingAddress}
                      onChange={(e) => handleInputChange('shippingAddress', e.target.value)}
                      rows="5"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'urls' && (
              <div className="form-section">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">CUSTOMER CENTER LOGIN</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.customerCenterLogin}
                      onChange={(e) => handleInputChange('customerCenterLogin', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">RESTLETS</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.restlets}
                      onChange={(e) => handleInputChange('restlets', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">NETSUITE UI</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.netsuiteUi}
                      onChange={(e) => handleInputChange('netsuiteUi', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">EXTERNAL FORMS</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.externalForms}
                      onChange={(e) => handleInputChange('externalForms', e.target.value)}
                    />
                  </div>
                  <div className="form-group" style={{ gridColumn: 'span 2' }}>
                    <label className="form-label">SUITETALK (SOAP AND REST WEB SERVICES)</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.suiteTalk}
                      onChange={(e) => handleInputChange('suiteTalk', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="form-section">
                <div className="system-notes-header" style={{ marginBottom: '1rem' }}>
                  <div className="form-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                    <div className="form-group">
                      <label className="form-label">VIEW</label>
                      <select className="form-control">
                        <option>Default</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">FIELD</label>
                      <select className="form-control">
                        <option>- All -</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th>DATE</th>
                        <th>SET BY</th>
                        <th>CONTEXT</th>
                        <th>TYPE</th>
                        <th>FIELD</th>
                        <th>OLD VALUE</th>
                        <th>NEW VALUE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>17/2/2023 5:42 pm</td>
                        <td>Ghanendra-Nuvista</td>
                        <td>UI</td>
                        <td>Change</td>
                        <td>Federal Identification Number</td>
                        <td>199507962E</td>
                        <td>M90362330Y</td>
                      </tr>
                      <tr>
                        <td>2/2/2022 2:32 pm</td>
                        <td>TOM-Praveen</td>
                        <td>UI</td>
                        <td>Change</td>
                        <td>Federal Identification Number</td>
                        <td>M90362330Y</td>
                        <td>199507962E</td>
                      </tr>
                      <tr>
                        <td>12/11/2021 11:33 am</td>
                        <td>Nuvista Consultant1 Nuvista Consultant1</td>
                        <td>UI</td>
                        <td>Set</td>
                        <td>URL</td>
                        <td></td>
                        <td>https://www.tom.sg</td>
                      </tr>
                      <tr>
                        <td>7/11/2021 6:13 pm</td>
                        <td>Nuvista Consultant1 Nuvista Consultant1</td>
                        <td>UI</td>
                        <td>Set</td>
                        <td>Federal Identification Number</td>
                        <td></td>
                        <td>M90362330Y</td>
                      </tr>
                      <tr>
                        <td>27/9/2021 8:14 pm</td>
                        <td>Gaurav</td>
                        <td>UI</td>
                        <td>Set</td>
                        <td>Subsidiary Logo (Pages)</td>
                        <td></td>
                        <td>TOM_LOGO.png</td>
                      </tr>
                      <tr>
                        <td>27/9/2021 8:14 pm</td>
                        <td>Gaurav</td>
                        <td>UI</td>
                        <td>Set</td>
                        <td>Subsidiary Logo (Forms)</td>
                        <td></td>
                        <td>TOM_LOGO.png</td>
                      </tr>
                      <tr>
                        <td>27/9/2021 8:14 pm</td>
                        <td>Gaurav</td>
                        <td>UI</td>
                        <td>Change</td>
                        <td>Display Logo Internally</td>
                        <td>F</td>
                        <td>T</td>
                      </tr>
                      <tr>
                        <td>12/8/2021 10:34 am</td>
                        <td>Gaurav</td>
                        <td>UI</td>
                        <td>Change</td>
                        <td>Email</td>
                        <td>praveen@tom.sg</td>
                        <td>gaurav@nuvistatech.com</td>
                      </tr>
                      <tr>
                        <td>12/8/2021 10:34 am</td>
                        <td>Gaurav</td>
                        <td>UI</td>
                        <td>Change</td>
                        <td>Time Zone</td>
                        <td>(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi</td>
                        <td>(GMT+08:00) Kuala Lumpur, Singapore</td>
                      </tr>
                      <tr>
                        <td>6/8/2021 10:29 pm</td>
                        <td>Praveen Chandraseka</td>
                        <td>UI</td>
                        <td>Set</td>
                        <td>Time Zone</td>
                        <td></td>
                        <td>(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-primary" onClick={handleSave}>
              <i className="fas fa-save"></i>
              Save
            </button>
          </div>
        </div>
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

export default SetupCompanyInformation;
