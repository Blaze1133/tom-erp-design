import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewSdlMasterDetail = ({ onBack, onEdit, selectedSdl }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('user-notes');

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
      onEdit(selectedSdl);
    }
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
          <i className="fas fa-percentage" style={{ fontSize: '20px', color: '#666' }}></i>
          <h1 style={{ margin: '0', fontSize: '24px', fontWeight: '600', color: '#333' }}>SDL Master</h1>
          <span style={{ fontSize: '18px', color: '#666' }}>{selectedSdl?.name || '$0-$800'}</span>
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

      {/* SDL Master Information */}
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
          }}>SDL Master Information</h3>
        </div>
        <div style={{ padding: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>MONTHLY REMUNERATION</label>
                <span style={{ fontSize: '14px', color: '#333' }}>{selectedSdl?.name || '$0-$800'}</span>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>INACTIVE</label>
                <span style={{ fontSize: '14px', color: '#333' }}>No</span>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>HIGH RANGE</label>
                <span style={{ fontSize: '14px', color: '#333' }}>{selectedSdl?.highRange || 800}</span>
              </div>
            </div>
            <div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>LOW RANGE</label>
                <span style={{ fontSize: '14px', color: '#333' }}>{selectedSdl?.lowRange || 0}</span>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>SDL PAYABLE(%)</label>
                <span style={{ fontSize: '14px', color: '#333' }}>{selectedSdl?.sdlPayable || '5.0%'}</span>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '5px' }}>MAX/MIN SDL</label>
                <span style={{ fontSize: '14px', color: '#333' }}>{selectedSdl?.maxMinSdl || 2}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Section */}
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
              borderBottom: activeTab === 'user-notes' ? '2px solid white' : 'none',
              paddingBottom: '5px'
            }}
            onClick={() => setActiveTab('user-notes')}
          >
            Notes
          </span>
          <span 
            style={{ 
              cursor: 'pointer',
              borderBottom: activeTab === 'files' ? '2px solid white' : 'none',
              paddingBottom: '5px'
            }}
            onClick={() => setActiveTab('files')}
          >
            Files
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
          {activeTab === 'user-notes' && (
            <div>
              <div style={{
                background: '#6c757d',
                padding: '10px 15px',
                color: 'white',
                fontSize: '14px',
                fontWeight: '500',
                marginBottom: '15px',
                display: 'flex',
                gap: '20px'
              }}>
                <span style={{ 
                  borderBottom: '2px solid white',
                  paddingBottom: '5px'
                }}>
                  User Notes
                </span>
                <span style={{ cursor: 'pointer' }}>
                  System Notes ●
                </span>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#666' }}>VIEW</label>
                  <select style={{
                    padding: '4px 8px',
                    border: '1px solid #ced4da',
                    borderRadius: '4px',
                    fontSize: '12px'
                  }}>
                    <option>Default</option>
                  </select>
                </div>
                
                <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
                  <button style={{
                    background: '#28a745',
                    color: 'white',
                    border: '1px solid #28a745',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    New Note
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

              <div style={{ overflowX: 'auto' }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '12px'
                }}>
                  <thead>
                    <tr style={{ background: '#f8f9fa' }}>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>EDIT</th>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>DATE</th>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>AUTHOR</th>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>TITLE</th>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>MEMO</th>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>DIRECTION</th>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>TYPE</th>
                      <th style={{ padding: '8px', border: '1px solid #dee2e6', fontWeight: '600', color: '#495057' }}>REMOVE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="8" style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
                        No records to show.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'files' && (
            <div style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
              Files information will be displayed here.
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

export default ViewSdlMasterDetail;
