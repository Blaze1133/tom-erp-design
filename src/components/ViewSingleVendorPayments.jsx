import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewSingleVendorPayments = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('All');
  const [searchText, setSearchText] = useState('');

  const [payments] = useState([
    {
      id: 1,
      transactionNumber: 'VENDPMT2270',
      date: '3/1/2023',
      payee: 'LAND TRANSPORT AUTHORITY',
      account: '11410 ALL Bank Accounts : Credit Card Payment',
      currency: 'SGD',
      exchangeRate: 1.00,
      check: '1',
      memo: 'VOID',
      balance: '0.00',
      amount: '0.00',
      approvalStatus: 'Approved',
      postingPeriod: 'Jan 2023',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      department: 'TOM : Facility',
      toBePrinted: true,
      voucher: false
    },
    {
      id: 2,
      transactionNumber: 'VENDPMT2271',
      date: '3/1/2023',
      payee: 'SINGAPORE POWER LIMITED',
      account: '11410 ALL Bank Accounts : Credit Card Payment',
      currency: 'SGD',
      exchangeRate: 1.00,
      check: '2',
      memo: 'Electricity Bill Payment',
      balance: '0.00',
      amount: '1,250.00',
      approvalStatus: 'Approved',
      postingPeriod: 'Jan 2023',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      department: 'TOM : Facility',
      toBePrinted: false,
      voucher: false
    },
    {
      id: 3,
      transactionNumber: 'VENDPMT2272',
      date: '5/1/2023',
      payee: 'ABC HARDWARE SUPPLIES',
      account: '11230 ALL Bank Accounts : MEP JOB 9314-301-906-1',
      currency: 'SGD',
      exchangeRate: 1.00,
      check: '3',
      memo: 'Material Purchase',
      balance: '0.00',
      amount: '3,450.75',
      approvalStatus: 'Pending Approval',
      postingPeriod: 'Jan 2023',
      subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
      department: 'TOM : Purchase',
      toBePrinted: false,
      voucher: true
    },
    {
      id: 4,
      transactionNumber: 'VENDPMT2273',
      date: '8/1/2023',
      payee: 'XYZ ENGINEERING PTE LTD',
      account: '11230 ALL Bank Accounts : MEP JOB 9314-301-906-1',
      currency: 'SGD',
      exchangeRate: 1.00,
      check: '4',
      memo: 'Subcontractor Payment',
      balance: '0.00',
      amount: '15,800.00',
      approvalStatus: 'Approved',
      postingPeriod: 'Jan 2023',
      subsidiary: 'TOM Shipyard Pte Ltd',
      department: 'TOM : Operating',
      toBePrinted: true,
      voucher: false
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewPayment = (payment) => {
    if (setCurrentPage) {
      setCurrentPage('view-bill-payment-detail');
    }
  };

  const handleEditPayment = (payment) => {
    if (setCurrentPage) {
      setCurrentPage('pay-single-vendor');
    }
  };

  const handleNewTransaction = () => {
    if (setCurrentPage) {
      setCurrentPage('pay-single-vendor');
    }
  };

  const filteredPayments = payments.filter(payment => {
    if (searchText && !payment.payee.toLowerCase().includes(searchText.toLowerCase()) &&
        !payment.transactionNumber.toLowerCase().includes(searchText.toLowerCase())) return false;
    if (viewFilter !== 'All' && payment.approvalStatus !== viewFilter) return false;
    return true;
  });

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-money-check-alt"></i>
          <h1>Single Vendor Payments</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option active">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>VIEW</label>
          <select 
            className="form-control"
            value={viewFilter}
            onChange={(e) => setViewFilter(e.target.value)}
            style={{ width: '200px' }}
          >
            <option value="All">All</option>
            <option value="Approved">Approved</option>
            <option value="Pending Approval">Pending Approval</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <div className="view-filter">
          <label>SEARCH</label>
          <input 
            type="text" 
            placeholder="Search by payee or transaction number..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="form-control"
            style={{ width: '300px' }}
          />
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button className="btn-icon" title="Edit">
            <i className="fas fa-edit"></i>
            <span>EDIT</span>
          </button>
          <button className="btn-icon" title="View">
            <i className="fas fa-eye"></i>
            <span>VIEW</span>
          </button>
          <button className="btn-icon" onClick={handleNewTransaction}>
            <i className="fas fa-plus"></i>
            <span>NEW</span>
          </button>
        </div>
        <div className="filter-right-group">
          <div className="quick-sort">
            <label>QUICK SORT</label>
            <select className="form-control">
              <option>Date</option>
              <option>Transaction Number</option>
              <option>Payee</option>
              <option>Amount</option>
            </select>
          </div>
          <div className="list-total">
            Total: {filteredPayments.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th>ACTIONS</th>
              <th>TRANSACTION NUMBER</th>
              <th>DATE</th>
              <th>PAYEE</th>
              <th>ACCOUNT</th>
              <th>CURRENCY</th>
              <th>EXCHANGE RATE</th>
              <th>CHECK #</th>
              <th>MEMO</th>
              <th>BALANCE</th>
              <th style={{ textAlign: 'right' }}>AMOUNT</th>
              <th>APPROVAL STATUS</th>
              <th>POSTING PERIOD</th>
              <th>TO BE PRINTED</th>
              <th>VOUCHER</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map((payment) => (
              <tr key={payment.id}>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button 
                      className="btn-table-action"
                      onClick={() => handleEditPayment(payment)}
                      title="Edit"
                    >
                      Edit
                    </button>
                    <span>|</span>
                    <button 
                      className="btn-table-action"
                      onClick={() => handleViewPayment(payment)}
                      title="View"
                    >
                      View
                    </button>
                  </div>
                </td>
                <td className="doc-number">{payment.transactionNumber}</td>
                <td>{payment.date}</td>
                <td>{payment.payee}</td>
                <td style={{ fontSize: '12px' }}>{payment.account}</td>
                <td>{payment.currency}</td>
                <td>{payment.exchangeRate.toFixed(2)}</td>
                <td>{payment.check}</td>
                <td>{payment.memo}</td>
                <td style={{ textAlign: 'right' }}>{payment.balance}</td>
                <td style={{ textAlign: 'right', fontWeight: '500' }}>{payment.amount}</td>
                <td>
                  <span className={`status-badge ${
                    payment.approvalStatus === 'Approved' ? 'success' : 
                    payment.approvalStatus === 'Pending Approval' ? 'warning' : 
                    'error'
                  }`}>
                    {payment.approvalStatus}
                  </span>
                </td>
                <td>{payment.postingPeriod}</td>
                <td>
                  <input type="checkbox" checked={payment.toBePrinted} disabled />
                </td>
                <td>
                  <input type="checkbox" checked={payment.voucher} disabled />
                </td>
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

export default ViewSingleVendorPayments;
