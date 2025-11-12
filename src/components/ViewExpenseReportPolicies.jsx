import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewExpenseReportPolicies = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [showInactives, setShowInactives] = useState(false);
  const [view, setView] = useState('Default');

  const [policies] = useState([]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleNew = () => {
    setCurrentPage('new-expense-report-policy');
  };

  const handleEdit = (policy) => {
    sessionStorage.setItem('selectedExpenseReportPolicy', JSON.stringify(policy));
    setCurrentPage('edit-expense-report-policy');
  };

  const handleView = (policy) => {
    sessionStorage.setItem('selectedExpenseReportPolicy', JSON.stringify(policy));
    setCurrentPage('view-expense-report-policy-detail');
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-file-invoice" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Expense Report Policies</h1>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button className="btn-view-option" onClick={() => showToast('List', 'info')}>List</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label style={{ fontSize: '12px', fontWeight: '500', marginRight: '8px' }}>VIEW</label>
          <select 
            className="form-control" 
            value={view}
            onChange={(e) => setView(e.target.value)}
            style={{ width: '150px', fontSize: '13px', marginRight: '10px' }}
          >
            <option>Default</option>
          </select>
          <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>
            Customize View
          </button>
          <button 
            className="btn btn-primary"
            onClick={handleNew}
            style={{ marginLeft: '10px' }}
          >
            New Expense Report Policy
          </button>
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button className="btn-icon" title="Filters">
            <i className="fas fa-filter"></i>
            <span>FILTERS</span>
          </button>
          <button className="btn-icon" title="Edit View">
            <i className="fas fa-edit"></i>
          </button>
          <button className="btn-icon" title="Export">
            <i className="fas fa-file-export"></i>
          </button>
          <button className="btn-icon" title="View">
            <i className="fas fa-eye"></i>
          </button>
          <button className="btn-icon" title="Print">
            <i className="fas fa-print"></i>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: '15px' }}>
            <input
              type="checkbox"
              id="showInactives"
              checked={showInactives}
              onChange={(e) => setShowInactives(e.target.checked)}
              style={{ width: '14px', height: '14px' }}
            />
            <label htmlFor="showInactives" style={{ margin: 0, fontSize: '12px', fontWeight: '500' }}>SHOW INACTIVES</label>
          </div>
        </div>
        <div style={{ fontSize: '13px', fontWeight: '500' }}>TOTAL: {policies.length}</div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '8%', fontSize: '11px', backgroundColor: '#e8eef5' }}>EDIT | VIEW</th>
              <th style={{ width: '12%', fontSize: '11px', backgroundColor: '#e8eef5' }}>NAME</th>
              <th style={{ width: '10%', fontSize: '11px', backgroundColor: '#e8eef5' }}>START DATE</th>
              <th style={{ width: '10%', fontSize: '11px', backgroundColor: '#e8eef5' }}>END DATE</th>
              <th style={{ width: '10%', fontSize: '11px', backgroundColor: '#e8eef5' }}>SUBSIDIARY</th>
              <th style={{ width: '10%', fontSize: '11px', backgroundColor: '#e8eef5' }}>DEPARTMENT</th>
              <th style={{ width: '10%', fontSize: '11px', backgroundColor: '#e8eef5' }}>LOCATION</th>
              <th style={{ width: '10%', fontSize: '11px', backgroundColor: '#e8eef5' }}>CUSTOMER</th>
              <th style={{ width: '10%', fontSize: '11px', backgroundColor: '#e8eef5' }}>EXPENSE CATEGORY</th>
              <th style={{ width: '8%', fontSize: '11px', backgroundColor: '#e8eef5' }}>BILLABLE</th>
              <th style={{ width: '8%', fontSize: '11px', backgroundColor: '#e8eef5' }}>LIMIT TYPE</th>
              <th style={{ width: '8%', fontSize: '11px', backgroundColor: '#e8eef5' }}>ACTION</th>
              <th style={{ width: '10%', fontSize: '11px', backgroundColor: '#e8eef5' }}>MAXIMUM AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {policies.length === 0 ? (
              <tr>
                <td colSpan="13" style={{ textAlign: 'center', padding: '40px', color: '#999', fontSize: '13px' }}>
                  No records to show.
                </td>
              </tr>
            ) : (
              policies.map((policy) => (
                <tr key={policy.id}>
                  <td style={{ fontSize: '13px' }}>
                    <button 
                      className="view-link"
                      onClick={() => handleEdit(policy)}
                      style={{ fontSize: '13px' }}
                    >
                      Edit
                    </button>
                    {' | '}
                    <button 
                      className="view-link"
                      onClick={() => handleView(policy)}
                      style={{ fontSize: '13px' }}
                    >
                      View
                    </button>
                  </td>
                  <td style={{ fontSize: '13px' }}>{policy.name}</td>
                  <td style={{ fontSize: '13px' }}>{policy.startDate}</td>
                  <td style={{ fontSize: '13px' }}>{policy.endDate}</td>
                  <td style={{ fontSize: '13px' }}>{policy.subsidiary}</td>
                  <td style={{ fontSize: '13px' }}>{policy.department}</td>
                  <td style={{ fontSize: '13px' }}>{policy.location}</td>
                  <td style={{ fontSize: '13px' }}>{policy.customer}</td>
                  <td style={{ fontSize: '13px' }}>{policy.expenseCategory}</td>
                  <td style={{ fontSize: '13px' }}>{policy.billable}</td>
                  <td style={{ fontSize: '13px' }}>{policy.limitType}</td>
                  <td style={{ fontSize: '13px' }}>{policy.action}</td>
                  <td style={{ fontSize: '13px' }}>{policy.maximumAmount}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
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

export default ViewExpenseReportPolicies;
