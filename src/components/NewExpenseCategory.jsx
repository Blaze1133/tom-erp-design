import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const NewExpenseCategory = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('workflow');
  const [showSubsidiaryModal, setShowSubsidiaryModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    expenseAccount: '',
    subsidiaries: [],
    personalCorporateCardExpense: false,
    inactive: false,
    rateIsRequired: false,
    payComponent: '',
    transferToPayroll: false
  });

  const [selectedSubsidiaries, setSelectedSubsidiaries] = useState([
    { name: 'Tech Onshore MEP Prefabricators Pte Ltd.', currency: 'SGD', selected: false },
    { name: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd', currency: 'SGD', selected: false },
    { name: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd', currency: 'SGD', selected: false },
    { name: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DQ) Pte Ltd', currency: 'SGD', selected: false },
    { name: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (s) Pte Ltd', currency: 'SGD', selected: false },
    { name: 'Tech Offshore Marine (SV) Pte Ltd', currency: 'SGD', selected: false }
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

  const handleSubsidiaryToggle = (index) => {
    setSelectedSubsidiaries(prev => 
      prev.map((sub, i) => 
        i === index ? { ...sub, selected: !sub.selected } : sub
      )
    );
  };

  const handleSubsidiaryModalOk = () => {
    const selected = selectedSubsidiaries.filter(s => s.selected).map(s => s.name);
    handleInputChange('subsidiaries', selected);
    setShowSubsidiaryModal(false);
  };

  const handleSave = () => {
    if (!formData.name) {
      showToast('Please enter a name', 'error');
      return;
    }
    if (!formData.expenseAccount) {
      showToast('Please select an expense account', 'error');
      return;
    }
    if (formData.subsidiaries.length === 0) {
      showToast('Please select at least one subsidiary', 'error');
      return;
    }
    showToast('Expense category created successfully!', 'success');
    setTimeout(() => {
      setCurrentPage('setup-expense-categories');
    }, 1500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      setCurrentPage('setup-expense-categories');
    }
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-receipt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Expense Category</h1>
        </div>
        <div className="page-actions">
          <button className="btn-icon" onClick={handleCancel} title="Back">
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-icon" onClick={() => showToast('Forward', 'info')} title="Forward">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-view-option" onClick={() => setCurrentPage('setup-expense-categories')}>List</button>
          <button className="btn-view-option" onClick={() => showToast('Search', 'info')}>Search</button>
          <button className="btn-view-option" onClick={() => showToast('Customize', 'info')}>Customize</button>
        </div>
      </div>

      <div className="form-actions" style={{ 
        padding: '10px 20px', 
        borderBottom: '1px solid #ddd',
        display: 'flex',
        gap: '8px'
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
          <i className="fas fa-search"></i>
          Search
        </button>
        <button className="btn btn-secondary">
          <i className="fas fa-ellipsis-h"></i>
          Actions
        </button>
      </div>

      {/* Basic Information Section */}
      <div className="form-section" style={{ padding: '12px 20px', backgroundColor: '#f9f9f9' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px 20px' }}>
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>NAME *</label>
            <input
              type="text"
              className="form-control"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter name"
              required
              style={{ fontSize: '13px' }}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>EXPENSE ACCOUNT *</label>
            <select
              className="form-control"
              value={formData.expenseAccount}
              onChange={(e) => handleInputChange('expenseAccount', e.target.value)}
              style={{ fontSize: '13px' }}
            >
              <option value="">- Select -</option>
              <option value="52150 Facilities Related Expenses : BL">52150 Facilities Related Expenses : BL</option>
              <option value="11930 - 17400">11930 - 17400</option>
              <option value="53350 Other Operating Expenses : Au">53350 Other Operating Expenses : Au</option>
            </select>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>SUBSIDIARIES *</label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                className="form-control"
                value={formData.subsidiaries.join(', ')}
                placeholder="Select subsidiaries"
                readOnly
                onClick={() => setShowSubsidiaryModal(true)}
                style={{ fontSize: '13px', cursor: 'pointer' }}
              />
            </div>
          </div>

          <div className="form-group" style={{ gridColumn: 'span 1' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>DESCRIPTION</label>
            <textarea
              className="form-control"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows="3"
              style={{ fontSize: '13px', resize: 'vertical' }}
            />
          </div>

          <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input 
                type="checkbox" 
                checked={formData.personalCorporateCardExpense} 
                onChange={(e) => handleInputChange('personalCorporateCardExpense', e.target.checked)}
                style={{ width: '14px', height: '14px' }} 
              />
              <label style={{ margin: 0, fontSize: '12px' }}>PERSONAL CORPORATE CARD EXPENSE</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input 
                type="checkbox" 
                checked={formData.inactive} 
                onChange={(e) => handleInputChange('inactive', e.target.checked)}
                style={{ width: '14px', height: '14px' }} 
              />
              <label style={{ margin: 0, fontSize: '12px' }}>INACTIVE</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input 
                type="checkbox" 
                checked={formData.rateIsRequired} 
                onChange={(e) => handleInputChange('rateIsRequired', e.target.checked)}
                style={{ width: '14px', height: '14px' }} 
              />
              <label style={{ margin: 0, fontSize: '12px' }}>RATE IS REQUIRED</label>
            </div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>APP INTERNAL ID</label>
            <input
              type="text"
              className="form-control"
              value=""
              disabled
              style={{ fontSize: '13px', backgroundColor: '#f0f0f0' }}
            />
          </div>

          <div className="form-group" style={{ gridColumn: 'span 2' }}></div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>PAY COMPONENT</label>
            <select
              className="form-control"
              value={formData.payComponent}
              onChange={(e) => handleInputChange('payComponent', e.target.value)}
              style={{ fontSize: '13px' }}
            >
              <option value="">- Select -</option>
              <option value="- New -">- New -</option>
              <option value="Absent Deduction">Absent Deduction</option>
              <option value="Accommodation and Utility">Accommodation and Utility</option>
              <option value="Admin Charges">Admin Charges</option>
              <option value="Advance Salary">Advance Salary</option>
              <option value="Allowance">Allowance</option>
              <option value="Allowance Worker">Allowance Worker</option>
            </select>
          </div>

          <div className="form-group" style={{ gridColumn: 'span 2' }}></div>

          <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input 
              type="checkbox" 
              checked={formData.transferToPayroll} 
              onChange={(e) => handleInputChange('transferToPayroll', e.target.checked)}
              style={{ width: '14px', height: '14px' }} 
            />
            <label style={{ margin: 0, fontSize: '12px' }}>TRANSFER TO PAYROLL</label>
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
          <button
            className={`tab ${activeTab === 'workflow' ? 'active' : ''}`}
            onClick={() => setActiveTab('workflow')}
            style={{
              padding: '12px 20px',
              backgroundColor: activeTab === 'workflow' ? '#5b7a9e' : '#7a92b0',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500',
              borderRight: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            Workflow
          </button>
          <button
            className={`tab ${activeTab === 'rates' ? 'active' : ''}`}
            onClick={() => setActiveTab('rates')}
            style={{
              padding: '12px 20px',
              backgroundColor: activeTab === 'rates' ? '#5b7a9e' : '#7a92b0',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500',
              borderRight: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            Rates
          </button>
          <button
            className={`tab ${activeTab === 'system-notes' ? 'active' : ''}`}
            onClick={() => setActiveTab('system-notes')}
            style={{
              padding: '12px 20px',
              backgroundColor: activeTab === 'system-notes' ? '#5b7a9e' : '#7a92b0',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500'
            }}
          >
            System Notes
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content" style={{ padding: '20px', minHeight: '150px' }}>
        {activeTab === 'workflow' && (
          <div style={{ color: '#666', fontSize: '13px' }}>
            <p>Workflow information can be configured here.</p>
          </div>
        )}
        {activeTab === 'rates' && (
          <div style={{ color: '#666', fontSize: '13px' }}>
            <p>Rates information can be configured here.</p>
          </div>
        )}
        {activeTab === 'system-notes' && (
          <div style={{ color: '#666', fontSize: '13px' }}>
            <p>System Notes will be displayed here.</p>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="form-actions" style={{ 
        padding: '10px 20px', 
        borderTop: '1px solid #ddd',
        display: 'flex',
        gap: '8px',
        marginTop: '10px'
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

      {/* Subsidiary Modal */}
      {showSubsidiaryModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '20px',
            width: '600px',
            maxHeight: '80vh',
            overflow: 'auto'
          }}>
            <h3 style={{ marginTop: 0, marginBottom: '15px', fontSize: '16px' }}>Select Subsidiaries</h3>
            <table className="enquiries-table" style={{ marginBottom: '15px' }}>
              <thead>
                <tr>
                  <th style={{ fontSize: '11px', backgroundColor: '#e8eef5' }}>SUBSIDIARY</th>
                  <th style={{ fontSize: '11px', backgroundColor: '#e8eef5', width: '100px' }}>CURRENCY</th>
                  <th style={{ fontSize: '11px', backgroundColor: '#e8eef5', width: '80px' }}>INSTALL RATE</th>
                </tr>
              </thead>
              <tbody>
                {selectedSubsidiaries.map((sub, index) => (
                  <tr key={index}>
                    <td style={{ fontSize: '13px' }}>
                      <input
                        type="checkbox"
                        checked={sub.selected}
                        onChange={() => handleSubsidiaryToggle(index)}
                        style={{ marginRight: '8px', width: '14px', height: '14px' }}
                      />
                      {sub.name}
                    </td>
                    <td style={{ fontSize: '13px' }}>{sub.currency}</td>
                    <td style={{ fontSize: '13px' }}></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button onClick={handleSubsidiaryModalOk} style={{
                padding: '8px 20px',
                backgroundColor: '#4a90e2',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '13px',
                cursor: 'pointer'
              }}>
                OK
              </button>
              <button onClick={() => setShowSubsidiaryModal(false)} style={{
                padding: '8px 20px',
                backgroundColor: 'white',
                color: '#333',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '13px',
                cursor: 'pointer'
              }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Toast 
        message={toast.message} 
        type={toast.type} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
    </div>
  );
};

export default NewExpenseCategory;
