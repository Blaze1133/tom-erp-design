import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewVendorPayments = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Search Project');

  const [payments] = useState([
    {
      id: 1,
      date: '1/11/2021',
      documentNumber: '300444',
      vendor: 'EQUIPE SERVICES & TECHNOLOGY PTE LTD',
      name: 'EQUIPE SERVICES & TECHNOLOGY PTE LTD',
      account: '11230 ALL Bank Accounts : MEP JOB 9314-301-906-1',
      memo: 'UOB SGD 199',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: -2659.91
    },
    {
      id: 2,
      date: '1/11/2021',
      documentNumber: '300444',
      vendor: 'EQUIPE SERVICES & TECHNOLOGY PTE LTD',
      name: 'EQUIPE SERVICES & TECHNOLOGY PTE LTD',
      account: '20010 Accounts Payable : Trade Creditors',
      memo: '',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: -2.65
    },
    {
      id: 3,
      date: '1/11/2021',
      documentNumber: '300449',
      vendor: 'BENMARK SINGAPORE PTE LTD',
      name: 'BENMARK SINGAPORE PTE LTD',
      account: '11230 ALL Bank Accounts : MEP JOB 9314-301-906-1',
      memo: 'JULY 2021 INV',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: -1353.57
    },
    {
      id: 4,
      date: '1/11/2021',
      documentNumber: '300449',
      vendor: 'BENMARK SINGAPORE PTE LTD',
      name: 'BENMARK SINGAPORE PTE LTD',
      account: '20010 Accounts Payable : Trade Creditors',
      memo: '',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: -1353.57
    },
    {
      id: 5,
      date: '1/11/2021',
      documentNumber: '300451',
      vendor: 'GRANDHOME SCAFFOLD ENTERPRISE',
      name: 'GRANDHOME SCAFFOLD ENTERPRISE',
      account: '11230 ALL Bank Accounts : MEP JOB 9314-301-906-1',
      memo: 'TOM-PO-2021-2828',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: -950.16
    },
    {
      id: 6,
      date: '1/11/2021',
      documentNumber: '300452',
      vendor: 'CHYE HIN HARDWARE PTE LTD',
      name: 'CHYE HIN HARDWARE PTE LTD',
      account: '11230 ALL Bank Accounts : MEP JOB 9314-301-906-1',
      memo: 'TOM-PO-2021-0520',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: -218.28
    },
    {
      id: 7,
      date: '5/11/2021',
      documentNumber: '300453',
      vendor: 'PROGRESS GALVANIZING PTE LTD',
      name: 'PROGRESS GALVANIZING PTE LTD',
      account: '11230 ALL Bank Accounts : MEP JOB 9314-301-906-1',
      memo: 'NOV 2021 INV',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: -1506.13
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewPayment = (payment) => {
    if (setCurrentPage) {
      setCurrentPage('view-vendor-payment-detail');
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

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-money-check-alt"></i>
          <h1>Bill Payments</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option active">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>VIEW:</label>
          <select 
            className="form-control"
            value={viewFilter}
            onChange={(e) => setViewFilter(e.target.value)}
          >
            <option value="Search Project">Search Project</option>
            <option value="All Payments">All Payments</option>
            <option value="Pending Approval">Pending Approval</option>
          </select>
        </div>
        <button className="btn-new-transaction" onClick={handleNewTransaction}>
          <i className="fas fa-plus"></i> New Transaction
        </button>
      </div>

      <div className="list-filters">
        <button className="filter-btn">
          <i className="fas fa-filter"></i>
          FILTERS
        </button>
        <div className="list-toolbar">
          <button className="toolbar-btn">EDIT</button>
          <button className="toolbar-btn">VIEW</button>
          <button className="toolbar-btn" title="Export to Excel">
            <i className="fas fa-file-excel"></i>
          </button>
          <button className="toolbar-btn" title="Export to PDF">
            <i className="fas fa-file-pdf"></i>
          </button>
          <button className="toolbar-btn" title="Print">
            <i className="fas fa-print"></i>
          </button>
        </div>
        <div className="list-sort">
          <label>QUICK SORT:</label>
          <select className="form-control">
            <option>Date</option>
            <option>Document Number</option>
            <option>Vendor</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {payments.length}
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '100px' }}>EDIT | VIEW</th>
              <th>DATE</th>
              <th>DOCUMENT NUMBER</th>
              <th>VENDOR</th>
              <th>NAME</th>
              <th>ACCOUNT</th>
              <th>MEMO</th>
              <th style={{ textAlign: 'right' }}>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditPayment(payment)}
                    style={{ marginRight: '4px' }}
                  >
                    Edit
                  </button>
                  <span style={{ color: '#999' }}>|</span>
                  <button 
                    className="view-link"
                    onClick={() => handleViewPayment(payment)}
                    style={{ marginLeft: '4px' }}
                  >
                    View
                  </button>
                </td>
                <td>{payment.date}</td>
                <td className="doc-number">{payment.documentNumber}</td>
                <td>{payment.vendor}</td>
                <td>{payment.name}</td>
                <td style={{ fontSize: '12px' }}>{payment.account}</td>
                <td>{payment.memo || '-'}</td>
                <td className="amount" style={{ textAlign: 'right' }}>
                  {payment.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
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

export default ViewVendorPayments;
