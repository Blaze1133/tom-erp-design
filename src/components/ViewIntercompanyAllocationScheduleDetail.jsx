import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewIntercompanyAllocationScheduleDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Dummy data for viewing
  const scheduleData = {
    name: 'Intercompany Revenue Allocation',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    frequency: 'Monthly',
    nextDate: '31/12/2024',
    subsequentDate: 'REMIND FOREVER',
    inactive: false,
    allocationMode: 'Fixed Allocation',
    creditAccount: '40000 Intercompany Revenue',
    creditName: 'Cross-Entity Income',
    creditDepartment: 'MEP',
    creditLocation: 'Singapore',
    creditClass: 'Material Supply',
    allocationLines: [
      {
        id: 1,
        account: '40100 Intercompany Sales',
        name: 'Engineering Services',
        department: 'Engineering',
        location: 'Singapore',
        class: 'Consumable Item'
      },
      {
        id: 2,
        account: '40200 Transfer Pricing',
        name: 'Shared Resources',
        department: 'Operations',
        location: 'Singapore',
        class: 'Material Supply'
      },
      {
        id: 3,
        account: '40300 Service Charges',
        name: 'Management Fees',
        department: 'MEP',
        location: 'Singapore',
        class: 'Consumable Item'
      }
    ]
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-intercompany-allocation-schedules');
    }
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('create-intercompany-allocation-schedules');
    }
  };

  return (
    <div className="sales-quotation">
      {/* Top Header */}
      <div style={{ 
        background: '#f8f9fa', 
        padding: '12px 20px', 
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <i className="fas fa-exchange-alt" style={{ fontSize: '18px', color: '#4a90e2' }}></i>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>Intercompany Allocation Schedule</div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '4px' }}>
              <span style={{ fontSize: '13px', color: '#666' }}>{scheduleData.name}</span>
              <span style={{ 
                padding: '2px 10px', 
                background: '#48bb78', 
                color: 'white', 
                borderRadius: '3px', 
                fontSize: '11px',
                fontWeight: '600',
                textTransform: 'uppercase'
              }}>
                ACTIVE
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button style={{ padding: '4px 8px', border: 'none', background: 'transparent', cursor: 'pointer' }}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button style={{ padding: '4px 8px', border: 'none', background: 'transparent', cursor: 'pointer' }}>
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>List</button>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>Search</button>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>Customize</button>
        </div>
      </div>

      {/* Action Buttons Bar */}
      <div style={{ 
        background: 'white', 
        padding: '12px 20px', 
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn btn-primary" onClick={handleEdit} style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-edit"></i> Edit
          </button>
          <button className="btn btn-secondary" onClick={handleBack} style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-arrow-left"></i> Back
          </button>
          <button className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-print"></i> Print
          </button>
          <button className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-copy"></i> Copy
          </button>
        </div>
        <div>
          <button className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-cog"></i> Actions
          </button>
        </div>
      </div>

      <div className="quotation-container" style={{ background: '#f8f9fa', padding: '20px' }}>
        {/* Primary Information */}
        <div style={{ 
          background: 'white', 
          borderRadius: '4px', 
          marginBottom: '20px',
          border: '1px solid #e0e0e0'
        }}>
          <div style={{ 
            padding: '15px 20px',
            borderBottom: '1px solid #e0e0e0',
            background: '#f8f9fa',
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '11px', color: '#666' }}></i>
            <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0, color: '#333' }}>Primary Information</h3>
          </div>
          <div style={{ padding: '25px 20px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '30px 60px',
              fontSize: '13px'
            }}>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>NAME</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{scheduleData.name}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>SUBSIDIARY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{scheduleData.subsidiary}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>FREQUENCY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{scheduleData.frequency}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>NEXT DATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{scheduleData.nextDate}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>SUBSEQUENT DATE</div>
                <div style={{ color: '#e53e3e', fontSize: '14px', fontWeight: '500' }}>{scheduleData.subsequentDate}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>ALLOCATION MODE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{scheduleData.allocationMode}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>INACTIVE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{scheduleData.inactive ? 'Yes' : 'No'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Allocation Section */}
        <div style={{ 
          background: 'white', 
          borderRadius: '4px', 
          marginBottom: '20px',
          border: '1px solid #e0e0e0'
        }}>
          <div style={{ 
            padding: '15px 20px',
            borderBottom: '1px solid #e0e0e0',
            background: '#f8f9fa',
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '11px', color: '#666' }}></i>
            <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0, color: '#333' }}>Dynamic Allocation</h3>
          </div>
          <div style={{ padding: '25px 20px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '30px 60px',
              fontSize: '13px',
              marginBottom: '30px'
            }}>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CREDIT ACCOUNT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{scheduleData.creditAccount}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CREDIT LOCATION</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{scheduleData.creditLocation}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CREDIT NAME</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{scheduleData.creditName}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CREDIT CLASS</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{scheduleData.creditClass}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CREDIT DEPARTMENT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{scheduleData.creditDepartment}</div>
              </div>
            </div>

          {/* Allocation Lines Table */}
          <div>
            
            {scheduleData.allocationLines.length > 0 ? (
              <div className="items-table-wrapper">
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th style={{width: '25%'}}>ACCOUNT</th>
                      <th style={{width: '20%'}}>NAME</th>
                      <th style={{width: '18%'}}>DEPARTMENT</th>
                      <th style={{width: '18%'}}>LOCATION</th>
                      <th style={{width: '19%'}}>CLASS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleData.allocationLines.map((line) => (
                      <tr key={line.id}>
                        <td style={{ color: '#4a90e2' }}>{line.account}</td>
                        <td>{line.name}</td>
                        <td>{line.department}</td>
                        <td>{line.location}</td>
                        <td>{line.class}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="empty-items-message">
                <p>No allocation lines available.</p>
              </div>
            )}
          </div>
          </div>
        </div>

        <div className="footer-actions">
          <button className="btn btn-secondary" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <div>
            <button className="btn btn-secondary" onClick={handleEdit}>
              <i className="fas fa-edit"></i>
              Edit
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-print"></i>
              Print
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

export default ViewIntercompanyAllocationScheduleDetail;
