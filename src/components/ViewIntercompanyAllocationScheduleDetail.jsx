import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewIntercompanyAllocationScheduleDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('source');

  // Dummy data for viewing
  const scheduleData = {
    name: 'Intercompany Revenue Allocation',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    frequency: 'Monthly',
    nextDate: '31/12/2024',
    subsequentDate: 'REMIND FOREVER',
    inactive: false,
    creditAccount: '40000 Intercompany Revenue',
    creditName: 'Cross-Entity Income',
    creditDepartment: 'TOM: Engineering',
    creditLocation: 'Singapore (MEP)',
    creditClass: 'Material Supply',
    sourceLines: [
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
    ],
    destinationLines: [
      {
        id: 1,
        account: '50100 Intercompany Costs',
        name: 'Subsidiary A',
        department: 'TOM: Engineering',
        location: 'Singapore (MEP)',
        class: 'Fabrication',
        weight: '50',
        balance: '60,000.00'
      },
      {
        id: 2,
        account: '50200 Allocation Costs',
        name: 'Subsidiary B',
        department: 'TOM: Production',
        location: 'Mega yard',
        class: 'Material Supply',
        weight: '50',
        balance: '60,000.00'
      }
    ],
    historyLines: [
      {
        id: 'IC-ALLOC-2024-001',
        postingPeriod: 'Dec 2024',
        entryDate: '15/12/2024',
        accountingBook: 'Primary Books',
        journalEntry: 'JE-IC-2024-5678',
        detail: 'View'
      },
      {
        id: 'IC-ALLOC-2024-002',
        postingPeriod: 'Nov 2024',
        entryDate: '15/11/2024',
        accountingBook: 'Primary Books',
        journalEntry: 'JE-IC-2024-5567',
        detail: 'View'
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
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-exchange-alt"></i>
          <div>
            <h1>Intercompany Allocation Schedule</h1>
            <div className="detail-subtitle">
              <span>{scheduleData.name}</span>
              <span className="status-badge" style={{ background: '#48bb78', marginLeft: '10px' }}>ACTIVE</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar" onClick={handleEdit}>
          <i className="fas fa-edit"></i>
          Edit
        </button>
      </div>

      <div className="detail-content">
        {/* Primary Information */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>NAME</label>
                <div className="field-value">{scheduleData.name}</div>
              </div>
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{scheduleData.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>FREQUENCY</label>
                <div className="field-value">{scheduleData.frequency}</div>
              </div>
              <div className="detail-field">
                <label>NEXT DATE</label>
                <div className="field-value">{scheduleData.nextDate}</div>
              </div>
              <div className="detail-field">
                <label>SUBSEQUENT DATE</label>
                <div className="field-value" style={{ color: '#e53e3e', fontWeight: '500' }}>{scheduleData.subsequentDate}</div>
              </div>
              <div className="detail-field">
                <label>INACTIVE</label>
                <div className="field-value">{scheduleData.inactive ? 'Yes' : 'No'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Allocation Details</h3>
          </div>
          <div className="section-body">
            <div className="tabs-container">
              <div className="tabs-header">
                <button 
                  className={`tab-button ${activeTab === 'source' ? 'active' : ''}`}
                  onClick={() => setActiveTab('source')}
                >
                  Source
                </button>
                <button 
                  className={`tab-button ${activeTab === 'destination' ? 'active' : ''}`}
                  onClick={() => setActiveTab('destination')}
                >
                  Destination
                </button>
                <button 
                  className={`tab-button ${activeTab === 'history' ? 'active' : ''}`}
                  onClick={() => setActiveTab('history')}
                >
                  History
                </button>
              </div>

              {/* Source Tab */}
              {activeTab === 'source' && (
                <div className="tab-content">
                  <div style={{ marginBottom: '20px' }}>
                    <div className="detail-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                      <div className="detail-field">
                        <label>CREDIT ACCOUNT</label>
                        <div className="field-value">{scheduleData.creditAccount}</div>
                      </div>
                      <div className="detail-field">
                        <label>CREDIT LOCATION</label>
                        <div className="field-value">{scheduleData.creditLocation}</div>
                      </div>
                      <div className="detail-field">
                        <label>CREDIT NAME</label>
                        <div className="field-value">{scheduleData.creditName}</div>
                      </div>
                      <div className="detail-field">
                        <label>CREDIT CLASS</label>
                        <div className="field-value">{scheduleData.creditClass}</div>
                      </div>
                      <div className="detail-field">
                        <label>CREDIT DEPARTMENT</label>
                        <div className="field-value">{scheduleData.creditDepartment}</div>
                      </div>
                    </div>
                  </div>

                  <div className="items-section" style={{ overflowX: 'auto' }}>
                    <table className="items-table">
                      <thead>
                        <tr>
                          <th style={{ minWidth: '250px' }}>ACCOUNT</th>
                          <th style={{ minWidth: '180px' }}>NAME</th>
                          <th style={{ minWidth: '180px' }}>DEPARTMENT</th>
                          <th style={{ minWidth: '150px' }}>LOCATION</th>
                          <th style={{ minWidth: '150px' }}>CLASS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scheduleData.sourceLines.map((line) => (
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
                </div>
              )}

              {/* Destination Tab */}
              {activeTab === 'destination' && (
                <div className="tab-content">
                  <div className="items-section" style={{ overflowX: 'auto' }}>
                    <table className="items-table">
                      <thead>
                        <tr>
                          <th style={{ minWidth: '250px' }}>ACCOUNT</th>
                          <th style={{ minWidth: '180px' }}>NAME</th>
                          <th style={{ minWidth: '180px' }}>DEPARTMENT</th>
                          <th style={{ minWidth: '150px' }}>LOCATION</th>
                          <th style={{ minWidth: '150px' }}>CLASS</th>
                          <th style={{ minWidth: '120px', textAlign: 'right' }}>WEIGHT</th>
                          <th style={{ minWidth: '120px', textAlign: 'right' }}>BALANCE</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scheduleData.destinationLines.map((line) => (
                          <tr key={line.id}>
                            <td style={{ color: '#4a90e2' }}>{line.account}</td>
                            <td>{line.name}</td>
                            <td>{line.department}</td>
                            <td>{line.location}</td>
                            <td>{line.class}</td>
                            <td style={{ textAlign: 'right', fontWeight: '500' }}>{line.weight}</td>
                            <td style={{ textAlign: 'right', fontWeight: '500' }}>{line.balance}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* History Tab */}
              {activeTab === 'history' && (
                <div className="tab-content">
                  <div className="items-section" style={{ overflowX: 'auto' }}>
                    <table className="items-table">
                      <thead>
                        <tr>
                          <th style={{ minWidth: '100px' }}>ID</th>
                          <th style={{ minWidth: '150px' }}>POSTING PERIOD</th>
                          <th style={{ minWidth: '120px' }}>ENTRY DATE</th>
                          <th style={{ minWidth: '180px' }}>ACCOUNTING BOOK</th>
                          <th style={{ minWidth: '150px' }}>JOURNAL ENTRY</th>
                          <th style={{ minWidth: '120px' }}>DETAIL</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scheduleData.historyLines.map((line) => (
                          <tr key={line.id}>
                            <td>{line.id}</td>
                            <td>{line.postingPeriod}</td>
                            <td>{line.entryDate}</td>
                            <td>{line.accountingBook}</td>
                            <td style={{ color: '#4a90e2' }}>{line.journalEntry}</td>
                            <td><button className="view-link">View</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="detail-footer">
          <button className="btn-toolbar" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn-toolbar" onClick={handleEdit}>
            <i className="fas fa-edit"></i>
            Edit
          </button>
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
