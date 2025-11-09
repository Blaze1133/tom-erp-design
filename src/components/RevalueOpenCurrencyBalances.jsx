import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const RevalueOpenCurrencyBalances = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  const [formData, setFormData] = useState({
    postingPeriod: 'Nov 2025',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    includeChildren: false,
    currency: 'SGD',
    memo: '',
    class: '',
    department: '',
    location: '',
    accountType: 'All'
  });

  const [accounts] = useState([
    { id: 1, include: true, account: 'ALL Bank Accounts', accountType: 'Bank', currency: 'SGD', lastRunDate: '15/10/2024 10:30 AM', result: 'Success - No adjustment needed' },
    { id: 2, include: true, account: 'ALL Bank Accounts : Credit Card Payment', accountType: 'Bank', currency: 'SGD', lastRunDate: '15/10/2024 10:31 AM', result: 'Success - Adjusted SGD 125.50' },
    { id: 3, include: true, account: 'ALL Bank Accounts : MEP DBS SGD 003-906132-3', accountType: 'Bank', currency: 'SGD', lastRunDate: '15/10/2024 10:32 AM', result: 'Success - No adjustment needed' },
    { id: 4, include: true, account: 'ALL Bank Accounts : MEP DBS USD 003-906132-3', accountType: 'Bank', currency: 'USD', lastRunDate: '15/10/2024 10:33 AM', result: 'Success - Adjusted SGD 2,450.75' },
    { id: 5, include: true, account: 'ALL Bank Accounts : MEP MAYBANK SGD 0421101473', accountType: 'Bank', currency: 'SGD', lastRunDate: '15/10/2024 10:34 AM', result: 'Success - No adjustment needed' },
    { id: 6, include: true, account: 'ALL Bank Accounts : MEP MAYBANK USD 0-421-10-2403-7', accountType: 'Bank', currency: 'USD', lastRunDate: '15/10/2024 10:35 AM', result: 'Success - Adjusted SGD 1,875.20' },
    { id: 7, include: true, account: 'ALL Bank Accounts : MEP OCBC 536-82592-001', accountType: 'Bank', currency: 'SGD', lastRunDate: '15/10/2024 10:36 AM', result: 'Success - No adjustment needed' },
    { id: 8, include: true, account: 'ALL Bank Accounts : MEP RHB SGD 1-80-101516-03', accountType: 'Bank', currency: 'SGD', lastRunDate: '15/10/2024 10:37 AM', result: 'Success - No adjustment needed' },
    { id: 9, include: true, account: 'ALL Bank Accounts : MEP RHB USD 1-80-101516-037', accountType: 'Bank', currency: 'USD', lastRunDate: '15/10/2024 10:38 AM', result: 'Success - Adjusted SGD 3,125.90' },
    { id: 10, include: true, account: 'ALL Bank Accounts : MEP UOB 9314-301-006-1', accountType: 'Bank', currency: 'SGD', lastRunDate: '15/10/2024 10:39 AM', result: 'Success - No adjustment needed' },
    { id: 11, include: true, account: 'ALL Bank Accounts : Petty Cash', accountType: 'Bank', currency: 'SGD', lastRunDate: '15/10/2024 10:40 AM', result: 'Success - No adjustment needed' },
    { id: 12, include: true, account: 'Accounts Payable', accountType: 'Accounts Payable', currency: 'SGD', lastRunDate: '15/10/2024 10:41 AM', result: 'Success - Adjusted SGD 5,680.45' },
    { id: 13, include: true, account: 'Accounts Payable : Intercompany Creditors', accountType: 'Accounts Payable', currency: 'SGD', lastRunDate: '15/10/2024 10:42 AM', result: 'Success - Adjusted SGD 8,250.30' },
    { id: 14, include: true, account: 'Accounts Payable : Trade Creditors', accountType: 'Accounts Payable', currency: 'SGD', lastRunDate: '15/10/2024 10:43 AM', result: 'Success - Adjusted SGD 12,450.80' },
    { id: 15, include: true, account: 'Accounts Receivable', accountType: 'Accounts Receivable', currency: 'SGD', lastRunDate: '15/10/2024 10:44 AM', result: 'Success - Adjusted SGD 15,780.60' },
    { id: 16, include: true, account: 'Accounts Receivable : Intercompany Debtors', accountType: 'Accounts Receivable', currency: 'SGD', lastRunDate: '15/10/2024 10:45 AM', result: 'Success - Adjusted SGD 9,340.25' },
    { id: 17, include: true, account: 'Trade Facility Loans : RCF Loan-RCF0116190C', accountType: 'Other Current Liability', currency: 'SGD', lastRunDate: '15/10/2024 10:46 AM', result: 'Success - No adjustment needed' },
    { id: 18, include: true, account: 'Trade Facility Loans : RHB RCF Loan-00001/39(01)512/01', accountType: 'Other Current Liability', currency: 'SGD', lastRunDate: '15/10/2024 10:47 AM', result: 'Success - No adjustment needed' }
  ]);

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
    showToast('Currency revaluation saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('dashboard');
      }
    }
  };

  const handleMarkAll = () => {
    showToast('All accounts marked', 'success');
  };

  const handleUnmarkAll = () => {
    showToast('All accounts unmarked', 'success');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-dollar-sign" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Month End Currency Revaluation</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-ellipsis-h"></i>
            More
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Filter Section */}
        <div className="form-section">
          <div className="form-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="form-group">
              <label className="form-label required">Posting Period</label>
              <select 
                className="form-control"
                value={formData.postingPeriod}
                onChange={(e) => handleInputChange('postingPeriod', e.target.value)}
              >
                <option>May 2025</option>
                <option>Jun 2025</option>
                <option>Jul 2025</option>
                <option>Aug 2025</option>
                <option>Sep 2025</option>
                <option>Oct 2025</option>
                <option>Nov 2025</option>
                <option>Dec 2025</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Memo</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.memo}
                onChange={(e) => handleInputChange('memo', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label required">Subsidiary</label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleInputChange('subsidiary', e.target.value)}
              >
                <option>Tech Onshore MEP Prefabricators Pte Ltd.</option>
                <option>Tech Electric & Automation Pte Ltd</option>
                <option>Tech Marine Offshore (S) Pte Ltd</option>
                <option>Tech Offshore Marine (DQ) Pte Ltd</option>
                <option>Tech Offshore Marine (s) Pte Ltd</option>
                <option>Tech Offshore Marine (SV) Pte Ltd</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Class</label>
              <select 
                className="form-control"
                value={formData.class}
                onChange={(e) => handleInputChange('class', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Consumable Item</option>
                <option>Electrical Works</option>
                <option>Engineering Services</option>
                <option>Installation Works</option>
                <option>Maintenance Services</option>
                <option>Marine Equipment</option>
                <option>Material Supply</option>
                <option>MEP Works</option>
                <option>Offshore Services</option>
                <option>Piping Works</option>
                <option>Project Management</option>
                <option>Repair & Maintenance</option>
                <option>Safety Equipment</option>
                <option>Shipyard Services</option>
                <option>Steel Fabrication</option>
                <option>Technical Consultancy</option>
                <option>Welding Services</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Currency</label>
              <select 
                className="form-control"
                value={formData.currency}
                onChange={(e) => handleInputChange('currency', e.target.value)}
              >
                <option>SGD</option>
                <option>USD</option>
                <option>EUR</option>
                <option>MYR</option>
                <option>GBP</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Department</label>
              <select 
                className="form-control"
                value={formData.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Construction</option>
                <option>MEP</option>
                <option>MEP MARINE</option>
                <option>O&G</option>
                <option>Piping</option>
                <option>Shipyard</option>
                <option>Shipyard : Keppel Fels</option>
                <option>Shipyard : Keppel Shipyard</option>
                <option>Shipyard : Sembcorp Marine</option>
                <option>Shipyard : SembMarine Admiralty</option>
                <option>Shipyard : SembMarine Tuas</option>
                <option>Shipyard : ST Marine</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Location</label>
              <select 
                className="form-control"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Bok Seng Yard</option>
                <option>Hong Hang Shipyard</option>
                <option>Mega yard</option>
                <option>MEP MARINE CC</option>
                <option>Shipyards/Construction</option>
                <option>Singapore(MEP)</option>
                <option>TOM - 11</option>
                <option>TOM - 12</option>
                <option>TOM - 13</option>
                <option>TOM - 14</option>
                <option>TOM - 15</option>
                <option>TOM - 16</option>
                <option>TOM - 17</option>
                <option>TOM - 18</option>
                <option>TOM - 19</option>
                <option>TOM - 20</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Account Type</label>
              <select 
                className="form-control"
                value={formData.accountType}
                onChange={(e) => handleInputChange('accountType', e.target.value)}
              >
                <option>All</option>
                <option>Accounts Payable</option>
                <option>Accounts Receivable</option>
                <option>Bank</option>
                <option>Credit Card</option>
                <option>Deferred Expense</option>
                <option>Deferred Revenue</option>
                <option>Fixed Asset</option>
                <option>Long Term Liability</option>
                <option>Other Current Asset</option>
                <option>Other Current Liability</option>
              </select>
            </div>
          </div>

          {/* Checkboxes at the bottom */}
          <div style={{ display: 'flex', gap: '30px', marginTop: '20px', paddingLeft: '5px' }}>
            <label style={{ display: 'flex', alignItems: 'center', fontSize: '13px', cursor: 'pointer' }}>
              <input 
                type="checkbox" 
                checked={formData.includeChildren}
                onChange={(e) => handleInputChange('includeChildren', e.target.checked)}
                style={{ marginRight: '8px' }}
              />
              Include Children
            </label>
            <label style={{ display: 'flex', alignItems: 'center', fontSize: '13px', cursor: 'pointer' }}>
              <input 
                type="checkbox" 
                style={{ marginRight: '8px' }}
              />
              Match Source Classification
            </label>
          </div>
        </div>

        {/* Accounts Table */}
        <div className="form-section" style={{ marginTop: '20px' }}>
          {/* Action Buttons in Table Header */}
          <div style={{ 
            background: '#f8f9fa', 
            padding: '12px 15px', 
            borderRadius: '4px 4px 0 0',
            display: 'flex', 
            gap: '10px',
            borderBottom: '1px solid #e0e0e0'
          }}>
            <button className="btn btn-secondary" onClick={handleMarkAll} style={{ padding: '6px 16px', fontSize: '13px' }}>
              Mark All
            </button>
            <button className="btn btn-secondary" onClick={handleUnmarkAll} style={{ padding: '6px 16px', fontSize: '13px' }}>
              Unmark All
            </button>
          </div>
          
          <div className="items-table-wrapper">
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th style={{width: '5%'}}>INCLUDE</th>
                  <th style={{width: '35%'}}>ACCOUNT</th>
                  <th style={{width: '15%'}}>ACCOUNT TYPE</th>
                  <th style={{width: '10%'}}>CURRENCY</th>
                  <th style={{width: '15%'}}>LAST RUN DATE</th>
                  <th style={{width: '20%'}}>RESULT</th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((account) => (
                  <tr key={account.id}>
                    <td style={{ textAlign: 'center' }}>
                      <input 
                        type="checkbox" 
                        defaultChecked={account.include}
                      />
                    </td>
                    <td style={{ color: '#333', fontSize: '13px' }}>{account.account}</td>
                    <td style={{ color: '#333', fontSize: '13px' }}>{account.accountType}</td>
                    <td style={{ color: '#333', fontSize: '13px' }}>{account.currency}</td>
                    <td style={{ color: '#666', fontSize: '13px' }}>{account.lastRunDate}</td>
                    <td style={{ color: '#666', fontSize: '13px' }}>{account.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default RevalueOpenCurrencyBalances;
