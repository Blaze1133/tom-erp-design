import React, { useState } from 'react';

const AddCustomerForm = ({ onSave, onCancel }) => {
  const [customerData, setCustomerData] = useState({
    customerId: 'To Be Generated',
    type: 'COMPANY',
    companyName: '',
    parentCompany: '',
    salesRep: '',
    webAddress: '',
    category: '',
    defaultOrderPriority: '',
    // Individual-specific fields
    salutation: '',
    name: '',
    jobTitle: '',
    email: '',
    phone: '',
    altPhone: '',
    fax: '',
    primarySubsidiary: '',
    transactionsNeedApproval: false,
    stopSendingSms: false,
    defaultDiscount: '',
    lastSalesActivity: ''
  });

  const handleInputChange = (field, value) => {
    setCustomerData({ ...customerData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customerData.companyName.trim()) {
      alert('Company Name is required');
      return;
    }
    onSave(customerData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Primary Information Section */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#333', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '0.5px', paddingBottom: '1rem', borderBottom: '2px solid #e0e0e0' }}>Primary Information</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '500', color: '#666', textTransform: 'uppercase' }}>
              CUSTOMER ID <span style={{ color: '#e53e3e' }}>*</span>
            </label>
            <input 
              type="text" 
              className="form-control"
              value={customerData.customerId}
              disabled
              style={{ marginBottom: '0.5rem' }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" id="auto" defaultChecked />
              <label htmlFor="auto" style={{ fontSize: '0.75rem', margin: 0 }}>AUTO</label>
            </div>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '500', color: '#666', textTransform: 'uppercase' }}>
              TYPE
            </label>
            <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '0.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer' }}>
                <input 
                  type="radio" 
                  name="type" 
                  value="COMPANY"
                  checked={customerData.type === 'COMPANY'}
                  onChange={(e) => handleInputChange('type', e.target.value)}
                />
                COMPANY
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer' }}>
                <input 
                  type="radio" 
                  name="type" 
                  value="INDIVIDUAL"
                  checked={customerData.type === 'INDIVIDUAL'}
                  onChange={(e) => handleInputChange('type', e.target.value)}
                />
                INDIVIDUAL
              </label>
            </div>
          </div>
          {/* Conditional fields based on TYPE */}
          {customerData.type === 'INDIVIDUAL' ? (
            <>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '500', color: '#666', textTransform: 'uppercase' }}>
                  MR./MS.
                </label>
                <select 
                  className="form-control"
                  value={customerData.salutation}
                  onChange={(e) => handleInputChange('salutation', e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Ms.">Ms.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Dr.">Dr.</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '500', color: '#666', textTransform: 'uppercase' }}>
                  NAME <span style={{ color: '#e53e3e' }}>*</span>
                </label>
                <input 
                  type="text" 
                  className="form-control"
                  value={customerData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter full name"
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '500', color: '#666', textTransform: 'uppercase' }}>
                  JOB TITLE
                </label>
                <input 
                  type="text" 
                  className="form-control"
                  value={customerData.jobTitle}
                  onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                  placeholder="Enter job title"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '500', color: '#666', textTransform: 'uppercase' }}>
                  COMPANY NAME
                </label>
                <input 
                  type="text" 
                  className="form-control"
                  value={customerData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder="Enter company name"
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '500', color: '#666', textTransform: 'uppercase' }}>
                  COMPANY NAME <span style={{ color: '#e53e3e' }}>*</span>
                </label>
                <input 
                  type="text" 
                  className="form-control"
                  value={customerData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder="Enter company name"
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '500', color: '#666', textTransform: 'uppercase' }}>
                  PARENT COMPANY
                </label>
                <select 
                  className="form-control"
                  value={customerData.parentCompany}
                  onChange={(e) => handleInputChange('parentCompany', e.target.value)}
                >
                  <option value="">&lt;Type then tab&gt;</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '500', color: '#666', textTransform: 'uppercase' }}>
                  SALES REP
                </label>
                <select 
                  className="form-control"
                  value={customerData.salesRep}
                  onChange={(e) => handleInputChange('salesRep', e.target.value)}
                >
                  <option value="">Select...</option>
                  <option>John Doe</option>
                  <option>Jane Smith</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '500', color: '#666', textTransform: 'uppercase' }}>
                  WEB ADDRESS
                </label>
                <input 
                  type="url" 
                  className="form-control"
                  value={customerData.webAddress}
                  onChange={(e) => handleInputChange('webAddress', e.target.value)}
                  placeholder="https://"
                />
              </div>
            </>
          )}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '500', color: '#666', textTransform: 'uppercase' }}>
              CATEGORY
            </label>
            <select 
              className="form-control"
              value={customerData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
            >
              <option value="">Select...</option>
              <option>Premium</option>
              <option>Standard</option>
              <option>Basic</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '500', color: '#666', textTransform: 'uppercase' }}>
              DEFAULT ORDER PRIORITY
            </label>
            <select 
              className="form-control"
              value={customerData.defaultOrderPriority}
              onChange={(e) => handleInputChange('defaultOrderPriority', e.target.value)}
            >
              <option value="">Select...</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

      {/* Email | Phone | Address Section */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#333', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '0.5px', paddingBottom: '1rem', borderBottom: '2px solid #e0e0e0' }}>Email | Phone | Address</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '500', color: '#666', textTransform: 'uppercase' }}>
              EMAIL
            </label>
            <input 
              type="email" 
              className="form-control"
              value={customerData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter email address"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '500', color: '#666', textTransform: 'uppercase' }}>
              ALT. PHONE
            </label>
            <input 
              type="tel" 
              className="form-control"
              value={customerData.altPhone}
              onChange={(e) => handleInputChange('altPhone', e.target.value)}
              placeholder="Enter alternate phone"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '500', color: '#666', textTransform: 'uppercase' }}>
              PHONE
            </label>
            <input 
              type="tel" 
              className="form-control"
              value={customerData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="Enter phone number"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '500', color: '#666', textTransform: 'uppercase' }}>
              FAX
            </label>
            <input 
              type="tel" 
              className="form-control"
              value={customerData.fax}
              onChange={(e) => handleInputChange('fax', e.target.value)}
              placeholder="Enter fax number"
            />
          </div>
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

      {/* Classification Section */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#333', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '0.5px', paddingBottom: '1rem', borderBottom: '2px solid #e0e0e0' }}>Classification</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '500', color: '#666', textTransform: 'uppercase' }}>
              PRIMARY SUBSIDIARY <span style={{ color: '#e53e3e' }}>*</span>
            </label>
            <select 
              className="form-control"
              value={customerData.primarySubsidiary}
              onChange={(e) => handleInputChange('primarySubsidiary', e.target.value)}
            >
              <option value="">Select...</option>
              <option>Tech Onshore MEP Prefabricators Pte Ltd</option>
              <option>Tech Marine Offshore (S) Pte Ltd</option>
              <option>TOM Offshore Marine Engineering Pte Ltd</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.75rem', fontWeight: '500', color: '#666', textTransform: 'uppercase' }}>
              DEFAULT DISCOUNT
            </label>
            <select 
              className="form-control"
              value={customerData.defaultDiscount}
              onChange={(e) => handleInputChange('defaultDiscount', e.target.value)}
            >
              <option value="">Select...</option>
              <option>5%</option>
              <option>10%</option>
              <option>15%</option>
            </select>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '1.5rem' }}>
            <input 
              type="checkbox" 
              id="transactionsApproval"
              checked={customerData.transactionsNeedApproval}
              onChange={(e) => handleInputChange('transactionsNeedApproval', e.target.checked)}
            />
            <label htmlFor="transactionsApproval" style={{ fontSize: '0.75rem', margin: 0, textTransform: 'uppercase' }}>
              TRANSACTIONS NEED APPROVAL
            </label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '1.5rem' }}>
            <input 
              type="checkbox" 
              id="stopSms"
              checked={customerData.stopSendingSms}
              onChange={(e) => handleInputChange('stopSendingSms', e.target.checked)}
            />
            <label htmlFor="stopSms" style={{ fontSize: '0.75rem', margin: 0, textTransform: 'uppercase' }}>
              STOP SENDING SMS
            </label>
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', paddingTop: '1rem', borderTop: '1px solid #e0e0e0' }}>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn-new-transaction">
          <i className="fas fa-save"></i>
          Save Customer
        </button>
      </div>
    </form>
  );
};

export default AddCustomerForm;
