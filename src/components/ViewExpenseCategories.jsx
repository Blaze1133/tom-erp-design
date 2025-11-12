import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewExpenseCategories = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [showInactives, setShowInactives] = useState(false);

  const [expenseCategories] = useState([
    { id: 1, name: '18 Boonlay Rental Cost', description: 'Rental Related Cost Management Fee Stamp Fee & Property Tax', expenseAccount: 'Facilities Related Expenses : Building Rental Cost' },
    { id: 2, name: 'Accommodation/Utilities', description: 'Worker accommodation & SP Services Union Gas', expenseAccount: 'Cost of Sales : Worker Accommodation & Utilities' },
    { id: 3, name: "Bank's Charges", description: '', expenseAccount: 'Finance Cost : Bank Charges' },
    { id: 4, name: 'Broad Band - Internet', description: '', expenseAccount: 'IT Expenses : Broad Band Cost' },
    { id: 5, name: 'COMPUTER', description: '', expenseAccount: 'Facilities Related Expenses : Information & Technology' },
    { id: 6, name: 'DIRECTOR ACCOUNT', description: '', expenseAccount: 'Other Receivable : Amt Due From Director' },
    { id: 7, name: 'Deposit-Vendor', description: 'Deposit For Vendor Prepayment', expenseAccount: 'Deposits Paid / Prepayments : Deposit to Vendor' },
    { id: 8, name: 'JTC RENTAL 11 TUAS', description: 'JTC Lease Rental For 11 Tuas', expenseAccount: 'Current Leases Liabilities : Lease/JTC Land Rent 11 Tuas' },
    { id: 9, name: 'JTC RENTAL 13 TUAS', description: 'JTC Lease Rental For 13 Tuas', expenseAccount: 'Current Leases Liabilities : Lease/JTC Land Rent 13 Tuas' },
    { id: 10, name: 'MC LINK MP6020 2350', description: '', expenseAccount: 'Current Leases Liabilities : Copier Lease-Ricoh MC Link MP6020' },
    { id: 11, name: 'MC-Link Ricoh MP3353/4002B', description: 'COPIER RENTAL', expenseAccount: 'Current Leases Liabilities : Copier Lease-Ricoh MC-Link MP3353/4002B' },
    { id: 12, name: 'Medical Bil', description: "Staff & Worker' Medical", expenseAccount: 'Staff Related Costs : Medical Expenses' },
    { id: 13, name: 'OFFICE MAINTENANCE', description: 'SERVICING, ROYAL FLUSH', expenseAccount: 'Facilities Related Expenses : Office Repairs & Maintenance' },
    { id: 14, name: 'ORIC 370+', description: 'COPIER LEASE ORIC+', expenseAccount: 'Current Leases Liabilities : Copier Lease Oric+370' },
    { id: 15, name: 'ORIC 370+', description: '', expenseAccount: 'Current Leases Liabilities : Copier Lease Oric+370' },
    { id: 16, name: 'ORIC 90-25167', description: 'COPIER LEASE 90-', expenseAccount: 'Current Leases Liabilities : Copier Lease Oric+90 25167' },
    { id: 17, name: 'ORIC 90-27772 TUAS YARD', description: 'COPIER LEASE 90-27772', expenseAccount: 'Current Leases Liabilities : Copier Lease Oric+90 27772' },
    { id: 18, name: 'ORIC 89-', description: 'COPIER LEASE 89-', expenseAccount: 'Current Leases Liabilities : Copier Lease Oric+90 Insurance' },
    { id: 19, name: 'Phone Bill', description: 'Singtel, Starhub', expenseAccount: 'Facilities Related Expenses : Telecommunication' },
    { id: 20, name: 'Property Tax', description: '11,13 Tuas Property Tax', expenseAccount: 'Facilities Related Expenses : Property Tax' },
    { id: 21, name: 'STAFF INSURANCE', description: '', expenseAccount: 'Staff Related Costs : Staff Insurance' },
    { id: 22, name: 'Staff Income TAX', description: '', expenseAccount: 'Cost of Sales : Payroll Purchase' },
    { id: 23, name: 'Stamp Duty/Mortgage Fee', description: 'MERGER FEE', expenseAccount: 'Administration Expenses : Legal/Banker/Merger Fee' },
    { id: 24, name: 'Valuation', description: 'Building Valuation', expenseAccount: 'Facilities Related Expenses : Building Insurance/Valuation' },
    { id: 25, name: 'Vehicle Maintenance', description: 'Insurance, Fuel, Road Tax, Redox Vehicle Parking, Service, Cash Card Topup', expenseAccount: 'Facilities Related Expenses : Motor Vehicle Maintenance' },
    { id: 26, name: 'WATER/ELECTRICITY-OFFICE', description: '11,13 TUAS SP SERVICE', expenseAccount: 'Facilities Related Expenses : Water/Electricity' },
    { id: 27, name: 'Yard Container Rental/Water/Electricity', description: '', expenseAccount: 'Administration Expenses : Yard Container Rental' }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (category) => {
    sessionStorage.setItem('selectedExpenseCategory', JSON.stringify(category));
    setCurrentPage('view-expense-category-detail');
  };

  const handleEdit = (category) => {
    sessionStorage.setItem('selectedExpenseCategory', JSON.stringify(category));
    setCurrentPage('edit-expense-category');
  };

  const handleNew = () => {
    setCurrentPage('new-expense-category');
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-receipt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Expense Categories</h1>
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
          <button className="btn-icon" title="Edit View">
            <i className="fas fa-edit"></i>
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
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '10%', fontSize: '11px', backgroundColor: '#e8eef5' }}>EDIT</th>
              <th style={{ width: '15%', fontSize: '11px', backgroundColor: '#e8eef5' }}>NAME</th>
              <th style={{ width: '35%', fontSize: '11px', backgroundColor: '#e8eef5' }}>DESCRIPTION</th>
              <th style={{ width: '40%', fontSize: '11px', backgroundColor: '#e8eef5' }}>EXPENSE ACCOUNT</th>
            </tr>
          </thead>
          <tbody>
            {expenseCategories.map((category) => (
              <tr key={category.id}>
                <td style={{ fontSize: '13px' }}>
                  <button 
                    className="view-link"
                    onClick={() => handleEdit(category)}
                    style={{ fontSize: '13px' }}
                  >
                    Edit
                  </button>
                </td>
                <td style={{ fontSize: '13px' }}>{category.name}</td>
                <td style={{ fontSize: '13px' }}>{category.description}</td>
                <td style={{ fontSize: '13px' }}>{category.expenseAccount}</td>
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

export default ViewExpenseCategories;
