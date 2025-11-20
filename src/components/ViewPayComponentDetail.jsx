import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewPayComponentDetail = ({ payComponentData, onBackClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Sample data - in real app this would come from props or API
  const componentData = payComponentData || {
    id: 162,
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
    payComponentName: 'Absent Deduction',
    payType: 'Deduction',
    wageType: 'Deduction',
    ir8aCode: '',
    customForm: 'Pay Component Form',
    cpfApplicable: false,
    systemCalculate: false,
    payrollItemCode: 'PRINT S NO',
    isPronated: false,
    payrollExpenseAccount: '50600 Cost Of Sales : Direct Cost-Hourly Salary',
    payrollLiabilityAccount: '56200 Operating Staff Salary-Wages : Local Staff Salary',
    paybackUpdateChange: false,
    country: 'Singapore',
    isLeaveBuyBack: false,
    isTaxApplied: false,
    isBasic: false,
    payrollExpenseAccountIndirect: '50700 Cost Of Sales : In-Direct Cost Fixed Salary',
    payrollExpenseAccountLocal: '56200 Operating Staff Salary-Wages : Local Staff Salary',
    createdDate: '2024-01-15',
    lastModified: '2024-11-19',
    status: 'Active'
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handlePrint = () => {
    showToast('Print functionality initiated');
  };

  const handleExport = () => {
    showToast('Export functionality initiated');
  };

  const handleEdit = () => {
    if (onEditClick) onEditClick(componentData);
  };

  const handleBack = () => {
    if (onBackClick) onBackClick();
  };

  const InfoCard = ({ title, children, icon }) => (
    <div style={{
      background: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      marginBottom: '1.5rem'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        {icon && <i className={icon} style={{ fontSize: '1.1rem' }}></i>}
        <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>{title}</h3>
      </div>
      <div style={{ padding: '1.5rem' }}>
        {children}
      </div>
    </div>
  );

  const InfoRow = ({ label, value, type = 'text' }) => (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.75rem 0',
      borderBottom: '1px solid #f0f0f0'
    }}>
      <span style={{ 
        fontWeight: 500, 
        color: '#495057',
        fontSize: '0.9rem',
        minWidth: '200px'
      }}>
        {label}:
      </span>
      <span style={{ 
        color: '#2c3e50',
        fontWeight: type === 'boolean' ? 600 : 400,
        fontSize: '0.9rem',
        textAlign: 'right',
        flex: 1
      }}>
        {type === 'boolean' ? (
          <span style={{
            background: value ? '#d4edda' : '#f8d7da',
            color: value ? '#155724' : '#721c24',
            padding: '0.25rem 0.75rem',
            borderRadius: '12px',
            fontSize: '0.8rem',
            fontWeight: 500
          }}>
            {value ? 'Yes' : 'No'}
          </span>
        ) : type === 'status' ? (
          <span style={{
            background: value === 'Active' ? '#d4edda' : '#f8d7da',
            color: value === 'Active' ? '#155724' : '#721c24',
            padding: '0.25rem 0.75rem',
            borderRadius: '12px',
            fontSize: '0.8rem',
            fontWeight: 500
          }}>
            {value}
          </span>
        ) : (
          value || 'Not specified'
        )}
      </span>
    </div>
  );

  return (
    <div className="enquiries-list">
      <div className="detail-header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 0',
        borderBottom: '1px solid #e0e0e0',
        marginBottom: '20px'
      }}>
        <div className="detail-title" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <i className="fas fa-folder" style={{ color: '#007bff', fontSize: '20px' }}></i>
          <div>
            <h1 style={{ margin: '0', fontSize: '18px', fontWeight: '600' }}>Pay Component</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '5px' }}>
              <span style={{ 
                background: '#28a745', 
                color: 'white', 
                padding: '2px 8px', 
                borderRadius: '12px', 
                fontSize: '11px',
                fontWeight: '500'
              }}>
                DELIVERED
              </span>
            </div>
          </div>
        </div>
        <div className="detail-actions" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <button onClick={handleBack} style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '5px'
          }}>
            <i className="fas fa-arrow-left" style={{ fontSize: '16px' }}></i>
          </button>
          <button onClick={handleEdit} style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '5px'
          }}>
            <i className="fas fa-arrow-right" style={{ fontSize: '16px' }}></i>
          </button>
          <button style={{
            background: 'none',
            border: '1px solid #ccc',
            padding: '5px 10px',
            cursor: 'pointer',
            borderRadius: '3px',
            fontSize: '12px'
          }}>
            List
          </button>
          <button style={{
            background: 'none',
            border: '1px solid #ccc',
            padding: '5px 10px',
            cursor: 'pointer',
            borderRadius: '3px',
            fontSize: '12px'
          }}>
            Search
          </button>
          <button style={{
            background: 'none',
            border: '1px solid #ccc',
            padding: '5px 10px',
            cursor: 'pointer',
            borderRadius: '3px',
            fontSize: '12px'
          }}>
            Customize
          </button>
        </div>
      </div>

      <div className="action-buttons" style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '20px'
      }}>
        <button onClick={handleEdit} style={{
          background: '#007bff',
          color: 'white',
          border: 'none',
          padding: '8px 15px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <i className="fas fa-edit"></i>
          Edit
        </button>
        <button onClick={handleBack} style={{
          background: '#6c757d',
          color: 'white',
          border: 'none',
          padding: '8px 15px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button onClick={handlePrint} style={{
          background: '#6c757d',
          color: 'white',
          border: 'none',
          padding: '8px 15px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <i className="fas fa-print"></i>
          Print
        </button>
        <button onClick={handleExport} style={{
          background: '#6c757d',
          color: 'white',
          border: 'none',
          padding: '8px 15px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <i className="fas fa-copy"></i>
          Copy
        </button>
        <div style={{ marginLeft: 'auto' }}>
          <button style={{
            background: 'none',
            border: '1px solid #ccc',
            padding: '8px 15px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <i className="fas fa-cog"></i>
            Actions
          </button>
        </div>
      </div>

      <div className="detail-content">
        <div className="collapsible-section" style={{
          border: '1px solid #e0e0e0',
          borderRadius: '4px',
          marginBottom: '15px'
        }}>
          <div className="section-header" style={{
            background: '#f8f9fa',
            padding: '10px 15px',
            borderBottom: '1px solid #e0e0e0',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '12px' }}></i>
            <span style={{ fontWeight: '600', fontSize: '14px' }}>Primary Information</span>
          </div>
          <div className="section-content" style={{ padding: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
              <div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '5px' }}>ID/INTERNAL ID</label>
                  <span style={{ fontSize: '14px' }}>{componentData.id}</span>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '5px' }}>SUBSIDIARY</label>
                  <span style={{ fontSize: '14px' }}>{componentData.subsidiary}</span>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '5px' }}>REF PROJECT NO</label>
                  <span style={{ fontSize: '14px' }}>PC-{componentData.id}</span>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '5px' }}>REF ENTITY</label>
                  <span style={{ fontSize: '14px' }}>{componentData.payType}</span>
                </div>
              </div>
              <div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '5px' }}>DEPARTMENT</label>
                  <span style={{ fontSize: '14px' }}>Payroll</span>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '5px' }}>AMOUNT</label>
                  <span style={{ fontSize: '14px' }}>0.00</span>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '5px' }}>DATE</label>
                  <span style={{ fontSize: '14px' }}>{componentData.createdDate}</span>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '5px' }}>REQUESTED BY</label>
                  <span style={{ fontSize: '14px' }}>System Admin</span>
                </div>
              </div>
              <div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '5px' }}>SHIPPING ADDRESS</label>
                  <span style={{ fontSize: '14px' }}>{componentData.country}</span>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '5px' }}>STATUS</label>
                  <span style={{ fontSize: '14px' }}>{componentData.status}</span>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '5px' }}>MEMO</label>
                  <span style={{ fontSize: '14px' }}>{componentData.payComponentName}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="collapsible-section" style={{
          border: '1px solid #e0e0e0',
          borderRadius: '4px',
          marginBottom: '15px'
        }}>
          <div className="section-header" style={{
            background: '#f8f9fa',
            padding: '10px 15px',
            borderBottom: '1px solid #e0e0e0',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '12px' }}></i>
            <span style={{ fontWeight: '600', fontSize: '14px' }}>Other Info</span>
          </div>
          <div className="section-content" style={{ padding: '20px' }}>
            <div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '5px' }}>CPF APPLICABLE</label>
                <span style={{ fontSize: '14px' }}>{componentData.cpfApplicable ? 'Yes' : 'No'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: '', type: 'success' })}
        />
      )}
    </div>
  );
};

export default ViewPayComponentDetail;
