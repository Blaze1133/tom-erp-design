import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewExpenseCategoryDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('workflow');

  const category = JSON.parse(sessionStorage.getItem('selectedExpenseCategory') || '{}');

  const [formData] = useState({
    name: category.name || '18 Boonlay Rental Cost',
    description: category.description || 'Rental Related Cost Management Fee\nStamp Fee & Property Tax',
    expenseAccount: '52150 Facilities Related Expenses : BL',
    subsidiaries: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    personalCorporateCardExpense: false,
    inactive: false,
    rateIsRequired: false,
    appInternalId: '9387009a5b-1373a2fba090',
    payComponent: '',
    transferToPayroll: false
  });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = () => {
    setCurrentPage('edit-expense-category');
  };

  const handleBack = () => {
    setCurrentPage('setup-expense-categories');
  };

  return (
    <div className="sales-quotation">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '12px 20px',
        backgroundColor: '#fff',
        borderBottom: '2px solid #e8eef5'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <i className="fas fa-receipt" style={{ fontSize: '20px', color: '#4a90e2' }}></i>
          <h1 style={{ fontSize: '18px', fontWeight: '600', margin: 0 }}>Expense Category</h1>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button className="btn-icon" onClick={handleBack} title="Back" style={{ padding: '6px 10px' }}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-icon" onClick={() => showToast('Forward', 'info')} title="Forward" style={{ padding: '6px 10px' }}>
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-view-option" onClick={() => setCurrentPage('setup-expense-categories')} style={{ padding: '6px 12px', fontSize: '13px' }}>List</button>
          <button className="btn-view-option" onClick={() => showToast('Search', 'info')} style={{ padding: '6px 12px', fontSize: '13px' }}>Search</button>
          <button className="btn-view-option" onClick={() => showToast('Customize', 'info')} style={{ padding: '6px 12px', fontSize: '13px' }}>Customize</button>
        </div>
      </div>

      <div style={{ 
        padding: '10px 20px', 
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        gap: '8px'
      }}>
        <button onClick={handleEdit} style={{
          padding: '7px 16px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '13px',
          fontWeight: '500',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <i className="fas fa-save" style={{ fontSize: '12px' }}></i>
          Edit
        </button>
        <button onClick={handleBack} style={{
          padding: '7px 16px',
          backgroundColor: 'white',
          color: '#333',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '13px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <i className="fas fa-times" style={{ fontSize: '12px' }}></i>
          Cancel
        </button>
        <button style={{
          padding: '7px 16px',
          backgroundColor: 'white',
          color: '#333',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '13px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <i className="fas fa-ellipsis-h" style={{ fontSize: '12px' }}></i>
          Actions
        </button>
      </div>

      {/* Basic Information Section */}
      <div className="form-section" style={{ padding: '12px 20px', backgroundColor: '#f9f9f9' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px 20px' }}>
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>NAME *</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.name}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>EXPENSE ACCOUNT *</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.expenseAccount}</div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>SUBSIDIARIES *</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.subsidiaries}</div>
          </div>

          <div className="form-group" style={{ gridColumn: 'span 1' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>DESCRIPTION</label>
            <div style={{ fontSize: '13px', color: '#333', whiteSpace: 'pre-line' }}>{formData.description}</div>
          </div>

          <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" checked={formData.personalCorporateCardExpense} disabled style={{ width: '14px', height: '14px' }} />
              <label style={{ margin: 0, fontSize: '12px' }}>PERSONAL CORPORATE CARD EXPENSE</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" checked={formData.inactive} disabled style={{ width: '14px', height: '14px' }} />
              <label style={{ margin: 0, fontSize: '12px' }}>INACTIVE</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" checked={formData.rateIsRequired} disabled style={{ width: '14px', height: '14px' }} />
              <label style={{ margin: 0, fontSize: '12px' }}>RATE IS REQUIRED</label>
            </div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>APP INTERNAL ID</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.appInternalId}</div>
          </div>

          <div className="form-group" style={{ gridColumn: 'span 2' }}></div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>PAY COMPONENT</label>
            <div style={{ fontSize: '13px', color: '#333' }}>{formData.payComponent || '-'}</div>
          </div>

          <div className="form-group" style={{ gridColumn: 'span 2' }}></div>

          <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="checkbox" checked={formData.transferToPayroll} disabled style={{ width: '14px', height: '14px' }} />
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
            <p>Workflow information will be displayed here.</p>
          </div>
        )}
        {activeTab === 'rates' && (
          <div style={{ color: '#666', fontSize: '13px' }}>
            <p>Rates information will be displayed here.</p>
          </div>
        )}
        {activeTab === 'system-notes' && (
          <div style={{ color: '#666', fontSize: '13px' }}>
            <p>System Notes will be displayed here.</p>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div style={{ 
        padding: '10px 20px', 
        borderTop: '1px solid #ddd',
        display: 'flex',
        gap: '8px',
        marginTop: '10px'
      }}>
        <button onClick={handleEdit} style={{
          padding: '7px 16px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '13px',
          fontWeight: '500',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <i className="fas fa-save" style={{ fontSize: '12px' }}></i>
          Edit
        </button>
        <button onClick={handleBack} style={{
          padding: '7px 16px',
          backgroundColor: 'white',
          color: '#333',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '13px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <i className="fas fa-times" style={{ fontSize: '12px' }}></i>
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

export default ViewExpenseCategoryDetail;
