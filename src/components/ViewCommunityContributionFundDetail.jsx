import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCommunityContributionFundDetail = ({ onBack, onEdit, selectedFund }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('contribution-information');
  const [appliedView, setAppliedView] = useState('Default View');

  // Sample community fund template data based on the uploaded image
  const [templateData] = useState([
    {
      id: 1,
      wageRange: '≤ $2,000',
      higherRange: 2000,
      lowerRange: 0,
      allocationToMosque: 0,
      allocationToMendaki: 0.5,
      monthlyContribution: 0.5
    },
    {
      id: 2,
      wageRange: '> $2,000 to $3,500',
      higherRange: 3500,
      lowerRange: 2000.01,
      allocationToMosque: 0,
      allocationToMendaki: 1,
      monthlyContribution: 1
    },
    {
      id: 3,
      wageRange: '> $3,500 to $5,000',
      higherRange: 5000,
      lowerRange: 3500.01,
      allocationToMosque: 0,
      allocationToMendaki: 1.5,
      monthlyContribution: 1.5
    },
    {
      id: 4,
      wageRange: '> $5,000 to $7,500',
      higherRange: 7500,
      lowerRange: 5000.01,
      allocationToMosque: 0,
      allocationToMendaki: 2,
      monthlyContribution: 2
    },
    {
      id: 5,
      wageRange: '> $7,500',
      higherRange: 999999,
      lowerRange: 7500.01,
      allocationToMosque: 0,
      allocationToMendaki: 3,
      monthlyContribution: 3
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit(selectedFund);
    }
  };

  const handleNewTemplate = () => {
    showToast('New Community Fund Template functionality', 'info');
  };

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
          <i className="fas fa-hand-holding-heart" style={{ fontSize: '20px', color: '#666' }}></i>
          <h1 style={{ margin: '0', fontSize: '24px', fontWeight: '600', color: '#333' }}>Community Contribution Fund</h1>
          <span style={{ fontSize: '18px', color: '#666' }}>{selectedFund?.name || 'CDAC'}</span>
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
          }}>Actions</button>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '20px'
      }}>
        <button 
          onClick={handleEdit}
          style={{
            background: '#007bff',
            color: 'white',
            border: '1px solid #007bff',
            padding: '8px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          Edit
        </button>
        <button style={{
          background: '#6c757d',
          color: 'white',
          border: '1px solid #6c757d',
          padding: '8px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }} onClick={handleBack}>
          Back
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
          Actions
        </button>
      </div>

      {/* Basic Information */}
      <div style={{
        background: 'white',
        borderRadius: '6px',
        marginBottom: '20px',
        border: '1px solid #e9ecef',
        overflow: 'hidden'
      }}>
        <div style={{
          background: '#f8f9fa',
          padding: '15px 20px',
          borderBottom: '1px solid #e9ecef'
        }}>
          <h3 style={{
            margin: '0',
            fontSize: '16px',
            fontWeight: '600',
            color: '#495057'
          }}>NAME</h3>
        </div>
        <div style={{ padding: '20px' }}>
          <span style={{ fontSize: '14px', color: '#333' }}>{selectedFund?.name || 'CDAC'}</span>
        </div>
      </div>

      {/* Contribution Information & Workflow Tabs */}
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
          fontWeight: '600',
          display: 'flex',
          gap: '20px'
        }}>
          <span 
            style={{ 
              cursor: 'pointer',
              borderBottom: activeTab === 'contribution-information' ? '2px solid white' : 'none',
              paddingBottom: '5px'
            }}
            onClick={() => setActiveTab('contribution-information')}
          >
            Contribution Information
          </span>
          <span 
            style={{ 
              cursor: 'pointer',
              borderBottom: activeTab === 'workflow' ? '2px solid white' : 'none',
              paddingBottom: '5px'
            }}
            onClick={() => setActiveTab('workflow')}
          >
            Workflow
          </span>
        </div>
        
        <div style={{ padding: '20px' }}>
          {activeTab === 'contribution-information' && (
            <div>
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
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666' }}>COMMUNITY FUND TEMPLATE</label>
                </div>
                
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    onClick={handleNewTemplate}
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
                    New Community Fund Template
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
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>HIGHER RANGE</th>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>LOWER RANGE</th>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>ALLOCATION TO MOSQUE AND RELIGIOUS EDUCATION COMPONENT</th>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>ALLOCATION TO MENDAKI COMPONENT</th>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>MONTHLY CONTRIBUTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {templateData.map((row) => (
                      <tr key={row.id}>
                        <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>
                          <span 
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
                        <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.higherRange.toLocaleString()}</td>
                        <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.lowerRange}</td>
                        <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.allocationToMosque}</td>
                        <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.allocationToMendaki}</td>
                        <td style={{ padding: '8px', border: '1px solid #dee2e6' }}>{row.monthlyContribution}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'workflow' && (
            <div style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
              Workflow information will be displayed here.
            </div>
          )}
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

export default ViewCommunityContributionFundDetail;
