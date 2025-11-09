import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const SetUpBudgets = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  const [formData, setFormData] = useState({
    subsidiary: '',
    year: '2025',
    budgetCategory: 'Labor',
    budgetCategoryType: 'Global',
    currency: 'SGD',
    customerProject: '',
    item: '',
    class: '',
    department: '',
    location: '',
    accountType: 'Income and Expense',
    accounts: []
  });

  const months = ['JAN 2025', 'FEB 2025', 'MAR 2025', 'APR 2025', 'MAY 2025', 'JUN 2025', 
                  'JUL 2025', 'AUG 2025', 'SEP 2025', 'OCT 2025', 'NOV 2025', 'DEC 2025'];

  const [budgetLines] = useState([
    { id: 1, account: '40000 Sales', jan: '', feb: '', mar: '', apr: '', may: '', jun: '', jul: '', aug: '', sep: '', oct: '', nov: '', dec: '', total: '0.00' },
    { id: 2, account: '40100 Sales : Sales', jan: '', feb: '', mar: '', apr: '', may: '', jun: '', jul: '', aug: '', sep: '', oct: '', nov: '', dec: '', total: '0.00' },
    { id: 3, account: '40200 Sales : Working Progress Sales', jan: '', feb: '', mar: '', apr: '', may: '', jun: '', jul: '', aug: '', sep: '', oct: '', nov: '', dec: '', total: '0.00' },
    { id: 4, account: '40320 Sales : Working Progress Sales', jan: '', feb: '', mar: '', apr: '', may: '', jun: '', jul: '', aug: '', sep: '', oct: '', nov: '', dec: '', total: '0.00' },
    { id: 5, account: '40300 Sales : Sales Retention', jan: '', feb: '', mar: '', apr: '', may: '', jun: '', jul: '', aug: '', sep: '', oct: '', nov: '', dec: '', total: '0.00' },
    { id: 6, account: '40350 Sales : Sales Performance Bond', jan: '', feb: '', mar: '', apr: '', may: '', jun: '', jul: '', aug: '', sep: '', oct: '', nov: '', dec: '', total: '0.00' },
    { id: 7, account: '41100 Other Income : Cash Sales Fixed Assets', jan: '', feb: '', mar: '', apr: '', may: '', jun: '', jul: '', aug: '', sep: '', oct: '', nov: '', dec: '', total: '0.00' },
    { id: 8, account: '41110 Other Income : Cash Sales', jan: '', feb: '', mar: '', apr: '', may: '', jun: '', jul: '', aug: '', sep: '', oct: '', nov: '', dec: '', total: '0.00' },
    { id: 9, account: '41120 Other Income : Iras Government Payment', jan: '', feb: '', mar: '', apr: '', may: '', jun: '', jul: '', aug: '', sep: '', oct: '', nov: '', dec: '', total: '0.00' },
    { id: 10, account: '41130 Other Income : Other Income Doubtful Debts Trade Receivables', jan: '', feb: '', mar: '', apr: '', may: '', jun: '', jul: '', aug: '', sep: '', oct: '', nov: '', dec: '', total: '0.00' },
    { id: 11, account: '41140 Other Income : Other Income : Grant Deferred', jan: '', feb: '', mar: '', apr: '', may: '', jun: '', jul: '', aug: '', sep: '', oct: '', nov: '', dec: '', total: '0.00' },
    { id: 12, account: '41150 Other Income : Written-off of Intercompany Balance', jan: '', feb: '', mar: '', apr: '', may: '', jun: '', jul: '', aug: '', sep: '', oct: '', nov: '', dec: '', total: '0.00' },
    { id: 13, account: '41200 Other Income : Other Cash Received', jan: '', feb: '', mar: '', apr: '', may: '', jun: '', jul: '', aug: '', sep: '', oct: '', nov: '', dec: '', total: '0.00' }
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
    showToast('Budget saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-budgets');
      }
    }
  };

  const handleMarkAll = () => {
    showToast('All accounts marked', 'info');
  };

  const handleUnmarkAll = () => {
    showToast('All accounts unmarked', 'info');
  };

  const handleDistribute = () => {
    showToast('Budget distributed across months', 'info');
  };

  const handleFill = () => {
    showToast('Budget filled', 'info');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-chart-line" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Budget</h1>
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
            <i className="fas fa-trash"></i>
            Clear
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-cog"></i>
            Actions
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Filter Section */}
        <div className="form-section">
          <div className="form-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className="form-group">
              <label className="form-label required">Subsidiary</label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleInputChange('subsidiary', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Tech Onshore MEP Prefabricators Pte Ltd.</option>
                <option>Tech Electric & Automation Pte Ltd</option>
                <option>Tech Marine Offshore (S) Pte Ltd</option>
                <option>Tech Offshore Marine (DQ) Pte Ltd</option>
                <option>Tech Offshore Marine (s) Pte Ltd</option>
                <option>Tech Offshore Marine (SV) Pte Ltd</option>
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
                <option>MEP</option>
                <option>Engineering</option>
                <option>Operations</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label required">Year</label>
              <select 
                className="form-control"
                value={formData.year}
                onChange={(e) => handleInputChange('year', e.target.value)}
              >
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Customer/Project</label>
              <input 
                type="text" 
                className="form-control"
                placeholder="<Type then tab>"
                value={formData.customerProject}
                onChange={(e) => handleInputChange('customerProject', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Location</label>
              <select 
                className="form-control"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Singapore</option>
                <option>Malaysia</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label required">Budget Category</label>
              <select 
                className="form-control"
                value={formData.budgetCategory}
                onChange={(e) => handleInputChange('budgetCategory', e.target.value)}
              >
                <option>Labor</option>
                <option>Materials</option>
                <option>Overhead</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Item</label>
              <input 
                type="text" 
                className="form-control"
                placeholder="<Type then tab>"
                value={formData.item}
                onChange={(e) => handleInputChange('item', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Account Type</label>
              <select 
                className="form-control"
                value={formData.accountType}
                onChange={(e) => handleInputChange('accountType', e.target.value)}
              >
                <option>Income and Expense</option>
                <option>Income</option>
                <option>Expense</option>
                <option>Balance Sheet</option>
                <option>Existing</option>
                <option>All</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label required">Budget Category Type</label>
              <select 
                className="form-control"
                value={formData.budgetCategoryType}
                onChange={(e) => handleInputChange('budgetCategoryType', e.target.value)}
              >
                <option>Global</option>
                <option>Department</option>
                <option>Project</option>
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
                <option>Material Supply</option>
              </select>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ marginTop: '20px', marginBottom: '15px', display: 'flex', gap: '10px' }}>
          <button className="btn btn-secondary" onClick={handleMarkAll}>Mark All</button>
          <button className="btn btn-secondary" onClick={handleUnmarkAll}>Unmark All</button>
          <button className="btn btn-secondary" onClick={handleDistribute}>Distribute</button>
          <button className="btn btn-secondary" onClick={handleFill}>Fill</button>
        </div>

        {/* Budget Table */}
        <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
          <table className="detail-items-table" style={{ minWidth: '2000px' }}>
            <thead>
              <tr>
                <th style={{ width: '50px', position: 'sticky', left: 0, background: '#f8f9fa', zIndex: 2 }}>APPLY</th>
                <th style={{ width: '300px', position: 'sticky', left: '50px', background: '#f8f9fa', zIndex: 2 }}>ACCOUNT <span className="required">*</span></th>
                {months.map((month, index) => (
                  <th key={index} style={{ width: '120px', textAlign: 'center' }}>{month}</th>
                ))}
                <th style={{ width: '120px', textAlign: 'right', fontWeight: '700' }}>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {budgetLines.map((line) => (
                <tr key={line.id}>
                  <td style={{ position: 'sticky', left: 0, background: 'white', zIndex: 1 }}>
                    <input type="checkbox" />
                  </td>
                  <td style={{ position: 'sticky', left: '50px', background: 'white', zIndex: 1, color: '#4a90e2' }}>
                    {line.account}
                  </td>
                  <td><input type="text" className="table-input" defaultValue={line.jan} style={{ textAlign: 'right' }} /></td>
                  <td><input type="text" className="table-input" defaultValue={line.feb} style={{ textAlign: 'right' }} /></td>
                  <td><input type="text" className="table-input" defaultValue={line.mar} style={{ textAlign: 'right' }} /></td>
                  <td><input type="text" className="table-input" defaultValue={line.apr} style={{ textAlign: 'right' }} /></td>
                  <td><input type="text" className="table-input" defaultValue={line.may} style={{ textAlign: 'right' }} /></td>
                  <td><input type="text" className="table-input" defaultValue={line.jun} style={{ textAlign: 'right' }} /></td>
                  <td><input type="text" className="table-input" defaultValue={line.jul} style={{ textAlign: 'right' }} /></td>
                  <td><input type="text" className="table-input" defaultValue={line.aug} style={{ textAlign: 'right' }} /></td>
                  <td><input type="text" className="table-input" defaultValue={line.sep} style={{ textAlign: 'right' }} /></td>
                  <td><input type="text" className="table-input" defaultValue={line.oct} style={{ textAlign: 'right' }} /></td>
                  <td><input type="text" className="table-input" defaultValue={line.nov} style={{ textAlign: 'right' }} /></td>
                  <td><input type="text" className="table-input" defaultValue={line.dec} style={{ textAlign: 'right' }} /></td>
                  <td style={{ textAlign: 'right', fontWeight: '600', background: '#f8f9fa' }}>{line.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
            <button className="btn btn-secondary">
              <i className="fas fa-trash"></i>
              Clear
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-cog"></i>
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

export default SetUpBudgets;
