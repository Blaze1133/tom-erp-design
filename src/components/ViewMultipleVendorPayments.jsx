import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewMultipleVendorPayments = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('All');
  const [searchText, setSearchText] = useState('');

  const [payments] = useState([
    {
      id: 1,
      transactionNumber: 'VENDPMT2280',
      date: '10/1/2023',
      batchName: 'January 2023 Batch 1',
      totalVendors: 5,
      totalAmount: '25,450.00',
      currency: 'SGD',
      account: '11230 ALL Bank Accounts : MEP JOB 9314-301-906-1',
      approvalStatus: 'Approved',
      postingPeriod: 'Jan 2023',
      subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
      memo: 'Monthly vendor payments - Batch 1',
      processedBy: 'Finance Manager',
      vendors: 'EQUIPE SERVICES, BENMARK, GRANDHOME, CHYE HIN, PROGRESS'
    },
    {
      id: 2,
      transactionNumber: 'VENDPMT2281',
      date: '15/1/2023',
      batchName: 'January 2023 Batch 2',
      totalVendors: 8,
      totalAmount: '42,150.75',
      currency: 'SGD',
      account: '11410 ALL Bank Accounts : Credit Card Payment',
      approvalStatus: 'Pending Approval',
      postingPeriod: 'Jan 2023',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      memo: 'Subcontractor payments - Batch 2',
      processedBy: 'Accounts Payable',
      vendors: 'ABC HARDWARE, XYZ ENGINEERING, SINGAPORE POWER, LTA, Others'
    },
    {
      id: 3,
      transactionNumber: 'VENDPMT2282',
      date: '20/1/2023',
      batchName: 'January 2023 Batch 3',
      totalVendors: 12,
      totalAmount: '68,920.50',
      currency: 'SGD',
      account: '11230 ALL Bank Accounts : MEP JOB 9314-301-906-1',
      approvalStatus: 'Approved',
      postingPeriod: 'Jan 2023',
      subsidiary: 'TOM Shipyard Pte Ltd',
      memo: 'Material suppliers payment',
      processedBy: 'Finance Manager',
      vendors: 'Multiple suppliers (12 vendors)'
    },
    {
      id: 4,
      transactionNumber: 'VENDPMT2283',
      date: '25/1/2023',
      batchName: 'January 2023 Batch 4',
      totalVendors: 6,
      totalAmount: '31,200.00',
      currency: 'SGD',
      account: '11410 ALL Bank Accounts : Credit Card Payment',
      approvalStatus: 'Approved',
      postingPeriod: 'Jan 2023',
      subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
      memo: 'Utility and service payments',
      processedBy: 'Finance Manager',
      vendors: 'SP SERVICES, CITY GAS, STARHUB, SINGTEL, M1, OTHERS'
    },
    {
      id: 5,
      transactionNumber: 'VENDPMT2284',
      date: '28/1/2023',
      batchName: 'January 2023 Batch 5',
      totalVendors: 10,
      totalAmount: '55,780.25',
      currency: 'SGD',
      account: '11230 ALL Bank Accounts : MEP JOB 9314-301-906-1',
      approvalStatus: 'Pending Approval',
      postingPeriod: 'Jan 2023',
      subsidiary: 'TOM Engineering & Trading Pte Ltd',
      memo: 'End of month vendor payments',
      processedBy: 'Accounts Payable',
      vendors: 'Various vendors (10 total)'
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
      setCurrentPage('pay-multiple-vendors');
    }
  };

  const handleNewTransaction = () => {
    if (setCurrentPage) {
      setCurrentPage('pay-multiple-vendors');
    }
  };

  const filteredPayments = payments.filter(payment => {
    if (searchText && !payment.batchName.toLowerCase().includes(searchText.toLowerCase()) &&
        !payment.transactionNumber.toLowerCase().includes(searchText.toLowerCase()) &&
        !payment.vendors.toLowerCase().includes(searchText.toLowerCase())) return false;
    if (viewFilter !== 'All' && payment.approvalStatus !== viewFilter) return false;
    return true;
  });

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-money-check-alt"></i>
          <h1>Multiple Vendor Payments</h1>
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
            placeholder="Search by batch name, transaction number, or vendors..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="form-control"
            style={{ width: '350px' }}
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
              <option>Batch Name</option>
              <option>Total Amount</option>
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
              <th>BATCH NAME</th>
              <th>TOTAL VENDORS</th>
              <th>VENDORS</th>
              <th>ACCOUNT</th>
              <th>CURRENCY</th>
              <th style={{ textAlign: 'right' }}>TOTAL AMOUNT</th>
              <th>APPROVAL STATUS</th>
              <th>POSTING PERIOD</th>
              <th>SUBSIDIARY</th>
              <th>PROCESSED BY</th>
              <th>MEMO</th>
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
                <td style={{ fontWeight: '500' }}>{payment.batchName}</td>
                <td style={{ textAlign: 'center' }}>
                  <span className="status-badge info">{payment.totalVendors}</span>
                </td>
                <td style={{ fontSize: '12px' }}>{payment.vendors}</td>
                <td style={{ fontSize: '12px' }}>{payment.account}</td>
                <td>{payment.currency}</td>
                <td style={{ textAlign: 'right', fontWeight: '500', color: '#059669' }}>{payment.totalAmount}</td>
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
                <td style={{ fontSize: '12px' }}>{payment.subsidiary}</td>
                <td>{payment.processedBy}</td>
                <td>{payment.memo}</td>
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

export default ViewMultipleVendorPayments;
