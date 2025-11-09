import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewStatisticalJournalEntryDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const journalData = {
    customForm: 'TOM Journal Entry',
    entryNo: 'SJ-2024-001',
    date: '15/10/2024',
    accountingPeriod: 'Oct 2024',
    reversalDate: '',
    memo: 'October employee count',
    unitOfMeasureType: 'General UOM',
    unitOfMeasure: 'Employees',
    absoluteUpdate: false,
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    lines: [
      {
        id: 1,
        account: 'Employee Statistics',
        amount: '150.00',
        memo: 'Monthly headcount update',
        name: 'Monthly Headcount Update',
        department: 'MEP',
        class: 'Engineering Services',
        location: 'Singapore(MEP)',
        units: '150',
        amountBaseUnit: '150.00'
      },
      {
        id: 2,
        account: 'Department Statistics',
        amount: '45.00',
        memo: 'Engineering team count',
        name: 'Engineering Department',
        department: 'Engineering',
        class: 'Technical Consultancy',
        location: 'Singapore(MEP)',
        units: '45',
        amountBaseUnit: '45.00'
      },
      {
        id: 3,
        account: 'Department Statistics',
        amount: '35.00',
        memo: 'Operations team count',
        name: 'Operations Department',
        department: 'Operations',
        class: 'Project Management',
        location: 'Singapore(MEP)',
        units: '35',
        amountBaseUnit: '35.00'
      }
    ]
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-statistical-journal-entries');
    }
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('make-statistical-journal-entries');
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
          <i className="fas fa-file-alt" style={{ fontSize: '18px', color: '#4a90e2' }}></i>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>Statistical Journal</div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '4px' }}>
              <span style={{ fontSize: '13px', color: '#666' }}>{journalData.entryNo}</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>List</button>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>Search</button>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>More</button>
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
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CUSTOM FORM</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{journalData.customForm}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>ACCOUNTING PERIOD</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{journalData.accountingPeriod}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>ENTRY NO.</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{journalData.entryNo}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>REVERSAL DATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{journalData.reversalDate || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{journalData.date}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>MEMO</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{journalData.memo}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistical Information */}
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
            <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0, color: '#333' }}>Statistical Information</h3>
          </div>
          <div style={{ padding: '25px 20px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '30px 60px',
              fontSize: '13px'
            }}>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>UNIT OF MEASURE TYPE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{journalData.unitOfMeasureType}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>UNIT OF MEASURE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{journalData.unitOfMeasure}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>ABSOLUTE UPDATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{journalData.absoluteUpdate ? 'Yes' : 'No'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification */}
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
            <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0, color: '#333' }}>Classification</h3>
          </div>
          <div style={{ padding: '25px 20px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '30px 60px',
              fontSize: '13px'
            }}>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>SUBSIDIARY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{journalData.subsidiary}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Lines Table */}
        <div style={{ 
          background: 'white', 
          borderRadius: '4px', 
          marginBottom: '20px',
          border: '1px solid #e0e0e0'
        }}>
          <div style={{ 
            padding: '12px 20px',
            background: '#5b6b8f',
            color: 'white',
            display: 'flex',
            gap: '20px',
            fontSize: '13px',
            fontWeight: '500'
          }}>
            <div style={{ borderBottom: '2px solid white', paddingBottom: '8px' }}>Lines</div>
            <div style={{ color: '#ccc' }}>Communication</div>
            <div style={{ color: '#ccc' }}>Tax Reporting</div>
          </div>
          <div className="items-table-wrapper">
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th style={{width: '16%', padding: '8px 6px'}}>ACCOUNT</th>
                  <th style={{width: '8%', padding: '8px 6px'}}>AMOUNT</th>
                  <th style={{width: '12%', padding: '8px 6px'}}>MEMO</th>
                  <th style={{width: '12%', padding: '8px 6px'}}>NAME</th>
                  <th style={{width: '10%', padding: '8px 6px'}}>DEPARTMENT</th>
                  <th style={{width: '9%', padding: '8px 6px'}}>CLASS</th>
                  <th style={{width: '9%', padding: '8px 6px'}}>LOCATION</th>
                  <th style={{width: '7%', padding: '8px 6px'}}>UNITS</th>
                  <th style={{width: '10%', padding: '8px 6px'}}>AMOUNT (BASE UNIT)</th>
                </tr>
              </thead>
              <tbody>
                {journalData.lines.map((line) => (
                  <tr key={line.id}>
                    <td style={{ padding: '8px 6px', color: '#4a90e2' }}>{line.account}</td>
                    <td style={{ padding: '8px 6px' }}>{line.amount}</td>
                    <td style={{ padding: '8px 6px' }}>{line.memo}</td>
                    <td style={{ padding: '8px 6px' }}>{line.name}</td>
                    <td style={{ padding: '8px 6px' }}>{line.department}</td>
                    <td style={{ padding: '8px 6px' }}>{line.class}</td>
                    <td style={{ padding: '8px 6px' }}>{line.location}</td>
                    <td style={{ padding: '8px 6px' }}>{line.units}</td>
                    <td style={{ padding: '8px 6px' }}>{line.amountBaseUnit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default ViewStatisticalJournalEntryDetail;
