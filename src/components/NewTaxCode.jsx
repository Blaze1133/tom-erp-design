import React, { useState } from 'react';
import Toast from './Toast';

const NewTaxCode = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [formData, setFormData] = useState({
    taxCode: '9%',
    description: 'GST 9%',
    rate: '9.0%',
    effectiveFrom: '',
    validUntil: '',
    subsidiaries: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    includeChildren: true,
    reverseChargeCode: '',
    notionalRateDerivedFrom: '',
    taxAgency: 'Default Tax Agency SG',
    taxType: 'GST_SG',
    purchaseTaxAccount: 'GST on Purchases SG',
    salesTaxAccount: 'GST on Sales SG',
    availableOn: 'Both',
    appliesToServiceItems: false,
    export: false,
    exempt: false,
    defaultCode: false,
    excludeFromVatReports: false,
    inactive: false,
    import: false,
    appliesToDigitalServices: false,
    deemedSupply: false,
    nonResident: false,
    purchaserIssuedInvoice: false,
    nonDeductible: false,
    nonDeductibleExpenseAccount: '',
    deferred: '',
    appliesToDirectCostServiceItems: false
  });

  const subsidiariesList = ['Tech Onshore MEP Prefabricators Pte Ltd.', 'Tech Marine Offshore (S) Pte Ltd', 'TOM Offshore Marine Engineering Pte Ltd', 'TOM Shipyard Pte Ltd'];
  const notionalRateOptions = ['0% (0%)', '4.5% (4.5%)', '7% (7%)', '8% (8%)', '9% (9%)'];
  const taxAgencies = ['Default Tax Agency SG', 'IRAS'];
  const taxTypes = ['GST_SG', 'VAT', 'Sales Tax'];
  const availableOnOptions = ['Both', 'Purchase Transactions', 'Sales Transactions'];
  const deferredOptions = ['Input Tax', 'Input and Output Tax'];

  const historyData = [
    { date: '2/1/2025 1:33 pm', setBy: 'Praveen Chandraseka', context: 'UI', type: 'Change', field: 'Default', oldValue: 'T', newValue: 'F' },
    { date: '14/8/2024 10:20 am', setBy: 'TOM-Maha', context: 'UI', type: 'Change', field: 'Default', oldValue: 'F', newValue: 'T' },
    { date: '26/6/2024 4:42 pm', setBy: 'Praveen Chandraseka', context: 'UI', type: 'Change', field: 'Default', oldValue: 'T', newValue: 'F' },
    { date: '6/12/2023 3:00 pm', setBy: 'TOM-Maha', context: 'UI', type: 'Set', field: 'Partial Tax Credit', oldValue: '', newValue: 'F' },
    { date: '6/12/2023 3:00 pm', setBy: 'TOM-Maha', context: 'UI', type: 'Change', field: 'Default', oldValue: 'F', newValue: 'T' },
    { date: '6/12/2023 3:00 pm', setBy: 'TOM-Maha', context: 'UI', type: 'Set', field: 'Applies to Digital Services', oldValue: '', newValue: 'F' },
    { date: '6/12/2023 3:00 pm', setBy: 'TOM-Maha', context: 'UI', type: 'Set', field: 'Deemed Supply', oldValue: '', newValue: 'F' }
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
    if (!formData.taxCode || !formData.rate) {
      showToast('Please fill required fields', 'error');
      return;
    }
    showToast('Tax Code saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (setCurrentPage) setCurrentPage('setup-tax-codes');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-percentage" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Tax Code</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSave}>Save</button>
        </div>
      </div>

      <div className="form-container">
        <div className="form-section">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label required">TAX CODE</label>
              <input type="text" className="form-control" value={formData.taxCode} onChange={(e) => handleInputChange('taxCode', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">REVERSE CHARGE CODE</label>
              <input type="text" className="form-control" value={formData.reverseChargeCode} onChange={(e) => handleInputChange('reverseChargeCode', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label required">AVAILABLE ON</label>
              <select className="form-control" value={formData.availableOn} onChange={(e) => handleInputChange('availableOn', e.target.value)}>
                {availableOnOptions.map((opt, i) => <option key={i}>{opt}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">DESCRIPTION</label>
              <textarea className="form-control" rows="2" value={formData.description} onChange={(e) => handleInputChange('description', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">NOTIONAL RATE DERIVED FROM</label>
              <select className="form-control" value={formData.notionalRateDerivedFrom} onChange={(e) => handleInputChange('notionalRateDerivedFrom', e.target.value)}>
                <option value=""></option>
                {notionalRateOptions.map((opt, i) => <option key={i}>{opt}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" checked={formData.import} onChange={() => handleCheckboxChange('import')} />
                <span>IMPORT</span>
              </label>
            </div>

            <div className="form-group">
              <label className="form-label required">RATE</label>
              <input type="text" className="form-control" value={formData.rate} onChange={(e) => handleInputChange('rate', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" checked={formData.appliesToServiceItems} onChange={() => handleCheckboxChange('appliesToServiceItems')} />
                <span>APPLIES TO SERVICE ITEMS</span>
              </label>
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" checked={formData.appliesToDigitalServices} onChange={() => handleCheckboxChange('appliesToDigitalServices')} />
                <span>APPLIES TO DIGITAL SERVICES</span>
              </label>
            </div>

            <div className="form-group">
              <label className="form-label">EFFECTIVE FROM</label>
              <input type="date" className="form-control" value={formData.effectiveFrom} onChange={(e) => handleInputChange('effectiveFrom', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" checked={formData.export} onChange={() => handleCheckboxChange('export')} />
                <span>EXPORT</span>
              </label>
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" checked={formData.deemedSupply} onChange={() => handleCheckboxChange('deemedSupply')} />
                <span>DEEMED SUPPLY</span>
              </label>
            </div>

            <div className="form-group">
              <label className="form-label">VALID UNTIL</label>
              <input type="date" className="form-control" value={formData.validUntil} onChange={(e) => handleInputChange('validUntil', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" checked={formData.exempt} onChange={() => handleCheckboxChange('exempt')} />
                <span>EXEMPT</span>
              </label>
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" checked={formData.nonResident} onChange={() => handleCheckboxChange('nonResident')} />
                <span>NON RESIDENT</span>
              </label>
            </div>

            <div className="form-group">
              <label className="form-label">SUBSIDIARIES</label>
              <select className="form-control" value={formData.subsidiaries} onChange={(e) => handleInputChange('subsidiaries', e.target.value)}>
                {subsidiariesList.map((sub, i) => <option key={i}>{sub}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" checked={formData.defaultCode} onChange={() => handleCheckboxChange('defaultCode')} />
                <span>DEFAULT CODE</span>
              </label>
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" checked={formData.purchaserIssuedInvoice} onChange={() => handleCheckboxChange('purchaserIssuedInvoice')} />
                <span>PURCHASER ISSUED INVOICE</span>
              </label>
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" checked={formData.includeChildren} onChange={() => handleCheckboxChange('includeChildren')} />
                <span>INCLUDE CHILDREN</span>
              </label>
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" checked={formData.excludeFromVatReports} onChange={() => handleCheckboxChange('excludeFromVatReports')} />
                <span>EXCLUDE FROM VAT REPORTS</span>
              </label>
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" checked={formData.nonDeductible} onChange={() => handleCheckboxChange('nonDeductible')} />
                <span>NON-DEDUCTIBLE</span>
              </label>
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" checked={formData.inactive} onChange={() => handleCheckboxChange('inactive')} />
                <span>INACTIVE</span>
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">NON-DEDUCTIBLE EXPENSE ACCOUNT</label>
              <input type="text" className="form-control" placeholder="<Type then tab>" value={formData.nonDeductibleExpenseAccount} onChange={(e) => handleInputChange('nonDeductibleExpenseAccount', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" checked={formData.appliesToDirectCostServiceItems} onChange={() => handleCheckboxChange('appliesToDirectCostServiceItems')} />
                <span>APPLIES TO DIRECT COST SERVICE ITEMS</span>
              </label>
            </div>

            <div className="form-group">
              <label className="form-label required">TAX AGENCY</label>
              <select className="form-control" value={formData.taxAgency} onChange={(e) => handleInputChange('taxAgency', e.target.value)}>
                {taxAgencies.map((agency, i) => <option key={i}>{agency}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">DEFERRED</label>
              <select className="form-control" value={formData.deferred} onChange={(e) => handleInputChange('deferred', e.target.value)}>
                <option value=""></option>
                {deferredOptions.map((opt, i) => <option key={i}>{opt}</option>)}
              </select>
            </div>
            <div className="form-group"></div>

            <div className="form-group">
              <label className="form-label required">TAX TYPE</label>
              <select className="form-control" value={formData.taxType} onChange={(e) => handleInputChange('taxType', e.target.value)}>
                {taxTypes.map((type, i) => <option key={i}>{type}</option>)}
              </select>
            </div>
            <div className="form-group"></div>
            <div className="form-group"></div>

            <div className="form-group">
              <label className="form-label">PURCHASE TAX ACCOUNT</label>
              <input type="text" className="form-control" value={formData.purchaseTaxAccount} readOnly />
            </div>
            <div className="form-group"></div>
            <div className="form-group"></div>

            <div className="form-group">
              <label className="form-label">SALES TAX ACCOUNT</label>
              <input type="text" className="form-control" value={formData.salesTaxAccount} readOnly />
            </div>
          </div>
        </div>

        {/* History Table */}
        <div className="form-section">
          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>VIEW</label>
            <select className="form-control" style={{ width: '150px' }}>
              <option>Default</option>
            </select>
            <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>FIELD</label>
            <select className="form-control" style={{ width: '150px' }}>
              <option>- All -</option>
            </select>
            <button className="btn btn-secondary" style={{ marginLeft: 'auto' }}>Customize View</button>
          </div>

          <div className="table-responsive">
            <table className="items-table">
              <thead>
                <tr>
                  <th>DATE ▼</th>
                  <th>SET BY</th>
                  <th>CONTEXT</th>
                  <th>TYPE</th>
                  <th>FIELD</th>
                  <th>OLD VALUE</th>
                  <th>NEW VALUE</th>
                </tr>
              </thead>
              <tbody>
                {historyData.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.date}</td>
                    <td>{row.setBy}</td>
                    <td>{row.context}</td>
                    <td>{row.type}</td>
                    <td>{row.field}</td>
                    <td>{row.oldValue}</td>
                    <td>{row.newValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ textAlign: 'right', marginTop: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
            1 to 25 of 36
          </div>
        </div>
      </div>

      <Toast show={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </div>
  );
};

export default NewTaxCode;
