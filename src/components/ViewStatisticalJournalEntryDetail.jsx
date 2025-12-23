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
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-alt"></i>
          <div>
            <h1>Statistical Journal Entry</h1>
            <div className="detail-subtitle">
              <span>{journalData.entryNo}</span>
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
                <label>CUSTOM FORM</label>
                <div className="field-value">{journalData.customForm}</div>
              </div>
              <div className="detail-field">
                <label>ACCOUNTING PERIOD</label>
                <div className="field-value">{journalData.accountingPeriod}</div>
              </div>
              <div className="detail-field">
                <label>ENTRY NO.</label>
                <div className="field-value">{journalData.entryNo}</div>
              </div>
              <div className="detail-field">
                <label>REVERSAL DATE</label>
                <div className="field-value">{journalData.reversalDate || '-'}</div>
              </div>
              <div className="detail-field">
                <label>DATE</label>
                <div className="field-value">{journalData.date}</div>
              </div>
              <div className="detail-field">
                <label>MEMO</label>
                <div className="field-value">{journalData.memo}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistical Information */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Statistical Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>UNIT OF MEASURE TYPE</label>
                <div className="field-value">{journalData.unitOfMeasureType}</div>
              </div>
              <div className="detail-field">
                <label>UNIT OF MEASURE</label>
                <div className="field-value">{journalData.unitOfMeasure}</div>
              </div>
              <div className="detail-field">
                <label>ABSOLUTE UPDATE</label>
                <div className="field-value">{journalData.absoluteUpdate ? 'Yes' : 'No'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{journalData.subsidiary}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Lines */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Lines</h3>
          </div>
          <div className="section-body">
            <div className="items-section" style={{ overflowX: 'auto' }}>
              <table className="items-table">
                <thead>
                  <tr>
                    <th style={{ minWidth: '200px' }}>ACCOUNT</th>
                    <th style={{ minWidth: '120px' }}>AMOUNT</th>
                    <th style={{ minWidth: '150px' }}>MEMO</th>
                    <th style={{ minWidth: '150px' }}>NAME</th>
                    <th style={{ minWidth: '150px' }}>DEPARTMENT</th>
                    <th style={{ minWidth: '150px' }}>CLASS</th>
                    <th style={{ minWidth: '150px' }}>LOCATION</th>
                    <th style={{ minWidth: '100px' }}>UNITS</th>
                    <th style={{ minWidth: '150px' }}>AMOUNT (BASE UNIT)</th>
                  </tr>
                </thead>
                <tbody>
                  {journalData.lines.map((line) => (
                    <tr key={line.id}>
                      <td style={{ color: '#4a90e2' }}>{line.account}</td>
                      <td style={{ textAlign: 'right' }}>{line.amount}</td>
                      <td>{line.memo}</td>
                      <td>{line.name}</td>
                      <td>{line.department}</td>
                      <td>{line.class}</td>
                      <td>{line.location}</td>
                      <td style={{ textAlign: 'right' }}>{line.units}</td>
                      <td style={{ textAlign: 'right' }}>{line.amountBaseUnit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

export default ViewStatisticalJournalEntryDetail;
