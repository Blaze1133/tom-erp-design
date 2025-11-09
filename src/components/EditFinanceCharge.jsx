import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditFinanceCharge = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [formData, setFormData] = useState({
    arAccount: '10100 Accounts Receivable : Trade Debtors',
    transactionNumber: 'FC00001',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    department: '',
    location: '',
    class: '',
    salesRep: '',
    date: '5/11/2025',
    postingPeriod: 'Nov 2025',
    amount: '0.00',
    toBePrinted: 'Respect Customer Preference',
    toBeEmailed: 'Respect Customer Preference',
    toBeFaxed: 'Respect Customer Preference'
  });

  const [selectedInvoices, setSelectedInvoices] = useState([]);
  const [invoices] = useState([
    {
      id: 1,
      selected: false,
      lastChargeInvoice: '18-2917',
      invoice: 'WHC-MEP Prefabricated Modular System',
      customer: '',
      dueDate: '',
      financeChargeDate: '790,996.30',
      currency: 'SGD',
      amountDue: '790,996.30'
    },
    {
      id: 2,
      selected: false,
      lastChargeInvoice: '26-00006',
      invoice: '35-00006-Shenla Construction-Continuum',
      customer: '',
      dueDate: '',
      financeChargeDate: '43,393.28',
      currency: 'SGD',
      amountDue: '43,393.28'
    },
    {
      id: 3,
      selected: false,
      lastChargeInvoice: 'TOM21-00939',
      invoice: '21-0149-GF-GSHI-Martun-PBTM-F27 Project',
      customer: '',
      dueDate: '',
      financeChargeDate: '82,008.34',
      currency: 'SGD',
      amountDue: '82,008.34'
    },
    {
      id: 4,
      selected: false,
      lastChargeInvoice: 'TOM21-00968',
      invoice: '21-0152-China construction - MEP Works ( SGH-HRA)',
      customer: '',
      dueDate: '',
      financeChargeDate: '981.00',
      currency: 'SGD',
      amountDue: '981.00'
    },
    {
      id: 5,
      selected: false,
      lastChargeInvoice: 'TOM22-00173',
      invoice: 'rental 18 Trade Hub 21 # 03-44',
      customer: '',
      dueDate: '',
      financeChargeDate: '11,772.00',
      currency: 'SGD',
      amountDue: '11,772.00'
    },
    {
      id: 6,
      selected: false,
      lastChargeInvoice: 'TOM22-00227',
      invoice: '23-0025-SLB- Electrical Works in onboard vessel VALARIS 115 in Keppel Fels Singapore',
      customer: '',
      dueDate: '',
      financeChargeDate: '12,207.12',
      currency: 'USD',
      amountDue: '12,207.12'
    },
    {
      id: 7,
      selected: false,
      lastChargeInvoice: 'TOM22-00383',
      invoice: '23-0155-Manpower Supply - Technician',
      customer: '',
      dueDate: '',
      financeChargeDate: '3,815.00',
      currency: 'SGD',
      amountDue: '3,815.00'
    },
    {
      id: 8,
      selected: false,
      lastChargeInvoice: 'TOM22-00443',
      invoice: '24-00001-Tengah Depot (J17AA)',
      customer: '',
      dueDate: '',
      financeChargeDate: '199,357.37',
      currency: 'SGD',
      amountDue: '199,357.37'
    },
    {
      id: 9,
      selected: false,
      lastChargeInvoice: 'TOM22-00478',
      invoice: '24-00001-Fortra- Project SGA PJBM',
      customer: '',
      dueDate: '',
      financeChargeDate: '283,632.31',
      currency: 'SGD',
      amountDue: '283,632.31'
    },
    {
      id: 10,
      selected: false,
      lastChargeInvoice: 'TOM22-00521',
      invoice: '24-00013-UTTAMA ENGINEERING- Project OGH',
      customer: '',
      dueDate: '',
      financeChargeDate: '5,095.00',
      currency: 'SGD',
      amountDue: '5,095.00'
    },
    {
      id: 11,
      selected: false,
      lastChargeInvoice: 'TOM22-00531',
      invoice: '24-00016-SHIMTEC-Tengah Depot (J17AA)',
      customer: '',
      dueDate: '',
      financeChargeDate: '46,235.07',
      currency: 'SGD',
      amountDue: '46,235.07'
    },
    {
      id: 12,
      selected: false,
      lastChargeInvoice: 'TOM22-00534',
      invoice: '24-0079-TNC-Fabrication of Module for Crane TG05-GISL',
      customer: '',
      dueDate: '',
      financeChargeDate: '1,628.00',
      currency: 'SGD',
      amountDue: '1,628.00'
    },
    {
      id: 13,
      selected: false,
      lastChargeInvoice: 'TOM22-00542',
      invoice: '24-00017-GUYMRE-J1758- Electrical Services for Jurong Region Line- DPMA Stations',
      customer: '',
      dueDate: '',
      financeChargeDate: '30,625.04',
      currency: 'SGD',
      amountDue: '30,625.04'
    }
  ]);

  const arAccounts = [
    '- New -',
    '10100 Accounts Receivable : Trade Debtors',
    '10200 Accounts Receivable : Contract Assets Debtor',
    '10400 Accounts Receivable : Intercompany Debtors',
    '10700 Accounts Receivable : Other Account Receivables',
    '10900 Accounts Receivable : Other Debtor'
  ];

  const subsidiaries = [
    'Tech Onshore MEP Prefabricators Pte Ltd.',
    'Tech Electric & Automation Pte Ltd',
    'Tech Marine Offshore (S) Pte Ltd',
    'Tech Offshore Marine (DQ) Pte Ltd',
    'Tech Offshore Marine (s) Pte Ltd',
    'Tech Offshore Marine (SV) Pte Ltd'
  ];

  const salesReps = [
    'MEP049 Camila Shirde',
    'MEP054 Kandasamy Kannan',
    'MEP057 Mahendran S/O Minisamy',
    'MEP074 Sasapu Venkateswara Rao',
    'Praveen Chandraseka',
    'TDQ059 Kumarasamy Madhavan Subbiah',
    'TEA100 Pitchai Balaguru'
  ];

  const classes = [
    'Consumable Item',
    'Course',
    'Cutting Works',
    'Electrical',
    'Fabrication',
    'Hydrotesting',
    'Installation work',
    'Manpower Supply',
    'Material Supply',
    'Module /Prefab',
    'Piping',
    'Project Works',
    'Refurbishment works',
    'Rental',
    'Repair & Referable',
    'Sale of Scrap Metal',
    'Structure'
  ];

  const locations = [
    'Hong Hang Shipyard',
    'Mega yard',
    'MEP MARINE CC',
    'Shipyards/Construction',
    'Singapore (MEP)',
    'TOM-11',
    'TOM External Workshop',
    'TOM-13'
  ];

  const departments = [
    'TOM: Human Resource',
    'TOM: Finance: Internal Transfer',
    'TOM: IT',
    'TOM: Logistic',
    'TOM: Operating',
    'TOM: Purchase',
    'TOM: Sales and Marketing',
    'TOM: Security',
    'TOM: TOM INTERNALS: TOM HR',
    'TOM: Nampak Reinsure',
    'TOM: Auction Handover',
    'TOM: Engineering',
    'TOM: Production'
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

  const handleMarkAll = () => {
    setSelectedInvoices(invoices.map(inv => inv.id));
    showToast('All invoices marked', 'info');
  };

  const handleUnmarkAll = () => {
    setSelectedInvoices([]);
    showToast('All invoices unmarked', 'info');
  };

  const toggleInvoice = (id) => {
    setSelectedInvoices(prev => 
      prev.includes(id) 
        ? prev.filter(invId => invId !== id)
        : [...prev, id]
    );
  };

  const handleSave = () => {
    if (selectedInvoices.length === 0) {
      showToast('Please select at least one invoice', 'error');
      return;
    }
    showToast('Finance Charge updated successfully!', 'success');
    setCurrentPage('view-finance-charges');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      setCurrentPage('view-finance-charges');
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice-dollar" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Edit Finance Charge {formData.transactionNumber}</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={() => showToast('List view', 'info')}>
            <i className="fas fa-list"></i>
            List
          </button>
          <button className="btn btn-secondary" onClick={() => showToast('More options', 'info')}>
            More
          </button>
        </div>
      </div>

      <div className="quotation-container">
        <div className="form-section">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">A/R ACCOUNT</label>
              <select 
                className="form-control"
                value={formData.arAccount}
                onChange={(e) => handleInputChange('arAccount', e.target.value)}
              >
                {arAccounts.map((account, index) => (
                  <option key={index} value={account}>{account}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">DATE <span className="required">*</span></label>
              <input 
                type="text" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">TRANSACTION NUMBER</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.transactionNumber}
                readOnly
                style={{ background: '#f5f5f5' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label">POSTING PERIOD</label>
              <select 
                className="form-control"
                value={formData.postingPeriod}
                onChange={(e) => handleInputChange('postingPeriod', e.target.value)}
              >
                <option value="Nov 2025">Nov 2025</option>
                <option value="Dec 2025">Dec 2025</option>
                <option value="Jan 2026">Jan 2026</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">SUBSIDIARY <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleInputChange('subsidiary', e.target.value)}
              >
                {subsidiaries.map((sub, index) => (
                  <option key={index} value={sub}>{sub}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">AMOUNT</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.amount}
                readOnly
                style={{ background: '#f5f5f5' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label">DEPARTMENT <span className="required">*</span></label>
              <select 
                className="form-control"
                value={formData.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
              >
                <option value="">Select...</option>
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">TO BE PRINTED</label>
              <select 
                className="form-control"
                value={formData.toBePrinted}
                onChange={(e) => handleInputChange('toBePrinted', e.target.value)}
              >
                <option value="Respect Customer Preference">Respect Customer Preference</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">LOCATION</label>
              <select 
                className="form-control"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
              >
                <option value="">Select...</option>
                {locations.map((loc, index) => (
                  <option key={index} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">TO BE EMAILED</label>
              <select 
                className="form-control"
                value={formData.toBeEmailed}
                onChange={(e) => handleInputChange('toBeEmailed', e.target.value)}
              >
                <option value="Respect Customer Preference">Respect Customer Preference</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">CLASS</label>
              <select 
                className="form-control"
                value={formData.class}
                onChange={(e) => handleInputChange('class', e.target.value)}
              >
                <option value="">Select...</option>
                {classes.map((cls, index) => (
                  <option key={index} value={cls}>{cls}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">TO BE FAXED</label>
              <select 
                className="form-control"
                value={formData.toBeFaxed}
                onChange={(e) => handleInputChange('toBeFaxed', e.target.value)}
              >
                <option value="Respect Customer Preference">Respect Customer Preference</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">SALES REP</label>
              <select 
                className="form-control"
                value={formData.salesRep}
                onChange={(e) => handleInputChange('salesRep', e.target.value)}
              >
                <option value="">Select...</option>
                {salesReps.map((rep, index) => (
                  <option key={index} value={rep}>{rep}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Invoices Section */}
        <div className="form-section">
          <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <button className="btn btn-secondary" onClick={handleMarkAll}>
              Mark All
            </button>
            <button className="btn btn-secondary" onClick={handleUnmarkAll}>
              Unmark All
            </button>
          </div>

          <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th style={{ width: '50px' }}></th>
                  <th>LAST FINANCE CHARGE</th>
                  <th>CUSTOMER ▲</th>
                  <th style={{ textAlign: 'right' }}>AMT. PAST DUE</th>
                  <th style={{ textAlign: 'right' }}>FINANCE CHARGE DUE</th>
                  <th>CURRENCY</th>
                  <th style={{ textAlign: 'right' }}>AMOUNT TO ASSESS</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td>
                      <input 
                        type="checkbox" 
                        checked={selectedInvoices.includes(invoice.id)}
                        onChange={() => toggleInvoice(invoice.id)}
                        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                      />
                    </td>
                    <td>{invoice.lastChargeInvoice}</td>
                    <td style={{ fontSize: '0.85rem' }}>{invoice.invoice}</td>
                    <td className="amount">{invoice.amountDue}</td>
                    <td className="amount">{invoice.financeChargeDate}</td>
                    <td>{invoice.currency}</td>
                    <td className="amount"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-secondary" onClick={() => showToast('Saved', 'success')}>
              <i className="fas fa-save"></i>
              Save
            </button>
            <button className="btn btn-secondary" onClick={() => showToast('Actions menu', 'info')}>
              Actions
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

export default EditFinanceCharge;
