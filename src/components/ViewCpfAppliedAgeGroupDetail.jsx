import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCpfAppliedAgeGroupDetail = ({ onBack, onEdit, selectedGroup }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('applied-cpf-table');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [appliedView, setAppliedView] = useState('Default View');
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingGroup, setEditingGroup] = useState({
    id: selectedGroup?.id || '1',
    refCpfType: selectedGroup?.refCpfType || 'Full and Graduated PR (1st year)',
    ageGroup: selectedGroup?.ageGroup || '50 & Below'
  });
  
  // Sample CPF table data based on the uploaded image
  const [cpfTableData, setCpfTableData] = useState([
    {
      id: 1,
      wageRange: '≤ $50',
      lowerRange: 0,
      upperRange: 50,
      contTotOrd: '0.0%',
      maxCpfOrd: '',
      contTotalAdd: '0.0%',
      employeeContOrd: '0.0%',
      maxEmployeeContOrd: '',
      employeeContAdd: '0.0%',
      additionalFactor: 0,
      deduction: 0,
      effectiveDate: '1/1/2000',
      endDate: '31/12/2009'
    },
    {
      id: 2,
      wageRange: '≥ $750',
      lowerRange: 750,
      upperRange: 999999,
      contTotOrd: '22.0%',
      maxCpfOrd: '',
      contTotalAdd: '22.0%',
      employeeContOrd: '5.0%',
      maxEmployeeContOrd: '',
      employeeContAdd: '5.0%',
      additionalFactor: 0,
      deduction: 0,
      effectiveDate: '1/1/2000',
      endDate: '31/12/2009'
    },
    {
      id: 3,
      wageRange: '> $50 to < $750',
      lowerRange: 50.01,
      upperRange: 749.99,
      contTotOrd: '17.0%',
      maxCpfOrd: '',
      contTotalAdd: '17.0%',
      employeeContOrd: '0.0%',
      maxEmployeeContOrd: '',
      employeeContAdd: '0.0%',
      additionalFactor: 0.15,
      deduction: 0,
      effectiveDate: '1/1/2000',
      endDate: '31/12/2009'
    },
    {
      id: 4,
      wageRange: '> $50 to $500',
      lowerRange: 50.01,
      upperRange: 500,
      contTotOrd: '17.0%',
      maxCpfOrd: '',
      contTotalAdd: '17.0%',
      employeeContOrd: '0.0%',
      maxEmployeeContOrd: '',
      employeeContAdd: '0.0%',
      additionalFactor: 0,
      deduction: 0,
      effectiveDate: '1/1/2000',
      endDate: '31/12/2009'
    }
  ]);

  const handleEditRow = (row) => {
    if (onEdit) {
      onEdit(row);
    }
  };

  const handleRemoveRow = (rowId) => {
    setCpfTableData(prev => prev.filter(row => row.id !== rowId));
  };

  const handleNewAppliedCpfTable = () => {
    // Add new row logic
    const newRow = {
      id: Date.now(),
      wageRange: '',
      lowerRange: 0,
      upperRange: 0,
      contTotOrd: '0.0%',
      maxCpfOrd: '',
      contTotalAdd: '0.0%',
      employeeContOrd: '0.0%',
      maxEmployeeContOrd: '',
      employeeContAdd: '0.0%',
      additionalFactor: 0,
      deduction: 0,
      effectiveDate: new Date().toLocaleDateString(),
      endDate: ''
    };
    setCpfTableData(prev => [...prev, newRow]);
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  const handleEditToggle = () => {
    setIsEditMode(!isEditMode);
    if (isEditMode) {
      showToast('Changes saved successfully!', 'success');
    }
  };

  const handleInputChange = (field, value) => {
    setEditingGroup(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // CPF Types and Age Groups for dropdowns
  const cpfTypes = [
    'Full and Graduated PR (1st year)',
    'Full and Graduated PR (2nd year)',
    'Permanent Resident (3rd year & Above)',
    'Graduated PR(1st year)',
    'Graduated PR(2nd year)'
  ];

  const ageGroups = [
    '50 & Below',
    'Above 50 to 55',
    'Above 55 to 60',
    'Above 60-65',
    'Above 65 -70',
    'Above 70'
  ];

  return (
    <div className="enquiry-detail">
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 0',
        borderBottom: '1px solid #e0e0e0',
        marginBottom: '20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <i className="fas fa-users" style={{ fontSize: '20px', color: '#666' }}></i>
          <h1 style={{ margin: '0', fontSize: '24px', fontWeight: '600', color: '#333' }}>CPF Applied Age Group</h1>
          <span style={{ fontSize: '18px', color: '#666' }}>{selectedGroup?.id || '1'}</span>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }} onClick={handleBack}>←</button>
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}>→</button>
          <button style={{
            background: 'none',
            border: '1px solid #ccc',
            padding: '8px 15px',
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '12px'
          }}>List</button>
          <button style={{
            background: 'none',
            border: '1px solid #ccc',
            padding: '8px 15px',
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '12px'
          }}>Search</button>
          <button style={{
            background: 'none',
            border: '1px solid #ccc',
            padding: '8px 15px',
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '12px'
          }}>Customize</button>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '20px'
      }}>
        <button 
          onClick={handleEditToggle}
          style={{
            background: isEditMode ? '#28a745' : '#007bff',
            color: 'white',
            border: `1px solid ${isEditMode ? '#28a745' : '#007bff'}`,
            padding: '8px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          {isEditMode ? 'Save' : 'Edit'}
        </button>
        <button style={{
          background: 'white',
          color: '#495057',
          border: '1px solid #ced4da',
          padding: '8px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          Copy
        </button>
        <button style={{
          background: 'white',
          color: '#495057',
          border: '1px solid #ced4da',
          padding: '8px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          Print
        </button>
      </div>

      {/* Primary Information Section */}
      <div style={{
        background: 'white',
        borderRadius: '6px',
        marginBottom: '20px',
        border: '1px solid #e9ecef',
        overflow: 'hidden'
      }}>
        <div 
          onClick={() => setPrimaryInfoCollapsed(!primaryInfoCollapsed)}
          style={{
            background: '#f8f9fa',
            padding: '15px 20px',
            borderBottom: '1px solid #e9ecef',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <h3 style={{
            margin: '0',
            fontSize: '16px',
            fontWeight: '600',
            color: '#495057'
          }}>Primary Information</h3>
          <span style={{ fontSize: '12px', color: '#666' }}>
            {primaryInfoCollapsed ? '▶' : '▼'}
          </span>
        </div>
        {!primaryInfoCollapsed && (
          <div style={{ padding: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
              <div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>ID</label>
                  <span style={{ fontSize: '14px', color: '#333' }}>{editingGroup.id}</span>
                </div>
              </div>
              <div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>REF CPF TYPE</label>
                  {isEditMode ? (
                    <select 
                      value={editingGroup.refCpfType}
                      onChange={(e) => handleInputChange('refCpfType', e.target.value)}
                      style={{
                        padding: '4px 8px',
                        border: '1px solid #ced4da',
                        borderRadius: '4px',
                        fontSize: '14px',
                        width: '100%'
                      }}
                    >
                      {cpfTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  ) : (
                    <span style={{ fontSize: '14px', color: '#333' }}>{editingGroup.refCpfType}</span>
                  )}
                </div>
              </div>
              <div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>AGE GROUP</label>
                  {isEditMode ? (
                    <select 
                      value={editingGroup.ageGroup}
                      onChange={(e) => handleInputChange('ageGroup', e.target.value)}
                      style={{
                        padding: '4px 8px',
                        border: '1px solid #ced4da',
                        borderRadius: '4px',
                        fontSize: '14px',
                        width: '100%'
                      }}
                    >
                      {ageGroups.map((group, index) => (
                        <option key={index} value={group}>{group}</option>
                      ))}
                    </select>
                  ) : (
                    <span style={{ fontSize: '14px', color: '#333' }}>{editingGroup.ageGroup}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Applied CPF Table Section */}
      <div style={{
        background: 'white',
        borderRadius: '6px',
        marginBottom: '20px',
        border: '1px solid #e9ecef',
        overflow: 'hidden'
      }}>
        <div style={{
          background: '#6c757d',
          padding: '12px 20px',
          color: 'white',
          fontSize: '14px',
          fontWeight: '600'
        }}>
          Applied CPF Table
        </div>
        
        <div style={{ padding: '20px' }}>
          {/* Controls */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '15px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <label style={{ fontSize: '12px', fontWeight: '600', color: '#666' }}>VIEW:</label>
              <select 
                value={appliedView}
                onChange={(e) => setAppliedView(e.target.value)}
                style={{
                  padding: '4px 8px',
                  border: '1px solid #ced4da',
                  borderRadius: '4px',
                  fontSize: '12px'
                }}
              >
                <option>Default View</option>
                <option>Summary View</option>
                <option>Detailed View</option>
              </select>
            </div>
            
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                onClick={handleNewAppliedCpfTable}
                style={{
                  background: '#28a745',
                  color: 'white',
                  border: '1px solid #28a745',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: '500'
                }}
              >
                <i className="fas fa-plus" style={{ marginRight: '5px' }}></i>
                New Applied CPF Table
              </button>
              <button style={{
                background: 'white',
                color: '#495057',
                border: '1px solid #ced4da',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}>
                <i className="fas fa-paperclip" style={{ marginRight: '5px' }}></i>
                Attach
              </button>
              <button style={{
                background: 'white',
                color: '#495057',
                border: '1px solid #ced4da',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}>
                <i className="fas fa-cog" style={{ marginRight: '5px' }}></i>
                Customize View
              </button>
            </div>
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '12px'
            }}>
              <thead>
                <tr style={{ background: '#f8f9fa' }}>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>EDIT</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>WAGE RANGE</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>LOWER RANGE</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>UPPER RANGE</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>CONT TOT (ORD)</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>MAX CPF (ORD)</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>CONT TOTAL (ADD)</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>EMPLOYEE CONT(ORD)</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>MAX EMPLOYEE CONT(ORD)</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>EMPLOYEE CONT (ADD)</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>ADDITIONAL FACTOR</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>DEDUCTION</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>EFFECTIVE DATE</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>END DATE</th>
                  <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>REMOVE</th>
                </tr>
              </thead>
              <tbody>
                {cpfTableData.map((row) => (
                  <tr key={row.id}>
                    <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>
                      <span 
                        onClick={() => handleEditRow(row)}
                        style={{ 
                          color: '#007bff', 
                          cursor: 'pointer', 
                          textDecoration: 'none',
                          fontSize: '12px'
                        }}
                      >
                        Edit
                      </span>
                    </td>
                    <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.wageRange}</td>
                    <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.lowerRange}</td>
                    <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.upperRange}</td>
                    <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.contTotOrd}</td>
                    <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.maxCpfOrd}</td>
                    <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.contTotalAdd}</td>
                    <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.employeeContOrd}</td>
                    <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.maxEmployeeContOrd}</td>
                    <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.employeeContAdd}</td>
                    <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.additionalFactor}</td>
                    <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.deduction}</td>
                    <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.effectiveDate}</td>
                    <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.endDate}</td>
                    <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>
                      <span 
                        onClick={() => handleRemoveRow(row.id)}
                        style={{ 
                          color: '#dc3545', 
                          cursor: 'pointer', 
                          textDecoration: 'none',
                          fontSize: '12px'
                        }}
                      >
                        Remove
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default ViewCpfAppliedAgeGroupDetail;
