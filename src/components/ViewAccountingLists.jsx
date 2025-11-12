import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewAccountingLists = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [showInactives, setShowInactives] = useState(false);

  const [accountingLists] = useState([
    { id: 1, description: 'Legacy', list: 'Budget Category' },
    { id: 2, description: 'Box 1: Rents', list: '1099-MISC Category' },
    { id: 3, description: 'Box 10: Crop Insurance Proceeds', list: '1099-MISC Category' },
    { id: 4, description: 'Box 13: Excess Golden Parachute Payments', list: '1099-MISC Category' },
    { id: 5, description: 'Box 14: Gross Proceeds Paid to an Attorney', list: '1099-MISC Category' },
    { id: 6, description: 'Box 15a: Section 409A Deferrals', list: '1099-MISC Category' },
    { id: 7, description: 'Box 15b: Section 409A Income', list: '1099-MISC Category' },
    { id: 8, description: 'Box 2: Royalties', list: '1099-MISC Category' },
    { id: 9, description: 'Box 3: Other Income', list: '1099-MISC Category' },
    { id: 10, description: 'Box 4: Federal Income Tax Withheld', list: '1099-MISC Category' },
    { id: 11, description: 'Box 5: Fishing Boat Proceeds', list: '1099-MISC Category' },
    { id: 12, description: 'Box 6: Medical and Health Care Payments', list: '1099-MISC Category' },
    { id: 13, description: 'Box 7: Nonemployee Compensation', list: '1099-MISC Category' },
    { id: 14, description: 'Box 8: Substitute Payments', list: '1099-MISC Category' },
    { id: 15, description: 'Box 9: Direct Sales of $5,000 or More', list: '1099-MISC Category' },
    { id: 16, description: 'All work is complete!', list: 'Customer Message' },
    { id: 17, description: "It's been a pleasure working with you!", list: 'Customer Message' },
    { id: 18, description: 'Please remit to above address.', list: 'Customer Message' },
    { id: 19, description: 'Thank you for your business.', list: 'Customer Message' },
    { id: 20, description: 'We appreciate your prompt payment.', list: 'Customer Message' },
    { id: 21, description: 'Direct Owner', list: 'Customer Category' },
    { id: 22, description: 'Oil & Gas', list: 'Customer Category' },
    { id: 23, description: 'Other', list: 'Customer Category' },
    { id: 24, description: 'Shipyard', list: 'Customer Category' },
    { id: 25, description: 'Awarded', list: 'Project Status' },
    { id: 26, description: 'Closed', list: 'Project Status' },
    { id: 27, description: 'In Progress', list: 'Project Status' },
    { id: 28, description: 'On Hold', list: 'Project Status' },
    { id: 29, description: 'Pending', list: 'Project Status' },
    { id: 30, description: 'CAP', list: 'Incoterm' },
    { id: 31, description: 'EXW', list: 'Incoterm' }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (item) => {
    sessionStorage.setItem('selectedAccountingList', JSON.stringify(item));
    setCurrentPage('view-accounting-list-detail');
  };

  const handleEdit = (item) => {
    sessionStorage.setItem('selectedAccountingList', JSON.stringify(item));
    setCurrentPage('edit-accounting-list');
  };

  const handleNew = () => {
    showToast('Please select a list type to create a new entry', 'info');
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-list-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Accounting Lists</h1>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <button 
            className="btn btn-primary"
            onClick={handleNew}
          >
            New
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
          <button className="btn-icon" title="View">
            <i className="fas fa-eye"></i>
          </button>
          <button className="btn-icon" title="Print">
            <i className="fas fa-print"></i>
          </button>
        </div>
        <div className="filter-right-group">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
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
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '15%', fontSize: '11px', backgroundColor: '#e8eef5' }}>EDIT | VIEW</th>
              <th style={{ width: '50%', fontSize: '11px', backgroundColor: '#e8eef5' }}>DESCRIPTION</th>
              <th style={{ width: '35%', fontSize: '11px', backgroundColor: '#e8eef5' }}>LIST</th>
            </tr>
          </thead>
          <tbody>
            {accountingLists.map((item) => (
              <tr key={item.id}>
                <td style={{ fontSize: '13px' }}>
                  <button 
                    className="view-link"
                    onClick={() => handleEdit(item)}
                    style={{ fontSize: '13px' }}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleView(item)}
                    style={{ fontSize: '13px' }}
                  >
                    View
                  </button>
                </td>
                <td style={{ fontSize: '13px' }}>{item.description}</td>
                <td style={{ fontSize: '13px' }}>{item.list}</td>
              </tr>
            ))}
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

export default ViewAccountingLists;
