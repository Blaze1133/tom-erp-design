import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCustomerPayments = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Vendor Bills');

  const [payments] = useState([
    {
      id: 1,
      editView: true,
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd.',
      date: '31/3/2021',
      asOfDate: 'Mar 2021',
      period: 'Mar 2021',
      taxPeriod: 'Mar 2021',
      documentNumber: 'PVTOMDQ00004',
      name: '845 Mazens Doubtful Debts',
      amount: '0.00',
      account: '13510 Clearing Accounts : Undeposited Funds',
      memo: 'VOID',
      status: 'Deposited'
    },
    {
      id: 2,
      editView: true,
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd.',
      date: '2/12/2021',
      asOfDate: 'Dec 2021',
      period: 'Dec 2021',
      taxPeriod: 'Dec 2021',
      documentNumber: 'PVTOMDQ0014',
      name: '870 Singapore Transaction Technology Pte Ltd',
      amount: '2,108.07',
      account: '11140 ALL Bank Accounts : MEP DBS SGD 032-904122-2',
      memo: 'TOM/12/21/004',
      status: 'Deposited'
    },
    {
      id: 3,
      editView: true,
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd.',
      date: '5/12/2021',
      asOfDate: 'Dec 2021',
      period: 'Dec 2021',
      taxPeriod: 'Dec 2021',
      documentNumber: 'PVTOMDQ0024',
      name: '680 Sdk Consortium',
      amount: '396,601.31',
      account: '11210 ALL Bank Accounts : MEP OCBC 516-432562-001',
      memo: '',
      status: 'Deposited'
    },
    {
      id: 4,
      editView: true,
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd.',
      date: '9/12/2021',
      asOfDate: 'Dec 2021',
      period: 'Dec 2021',
      taxPeriod: 'Dec 2021',
      documentNumber: 'PVTOMDQ0016',
      name: '101 Bca Academy',
      amount: '441.25',
      account: '11140 ALL Bank Accounts : MEP DBS SGD 032-904122-2',
      memo: 'TOM/12/21/008',
      status: 'Deposited'
    },
    {
      id: 5,
      editView: true,
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd.',
      date: '9/12/2021',
      asOfDate: 'Dec 2021',
      period: 'Dec 2021',
      taxPeriod: 'Dec 2021',
      documentNumber: 'PVTOMDQ0015',
      name: '413 Keppel Fels Limited',
      amount: '90,454.34',
      account: '11140 ALL Bank Accounts : MEP DBS SGD 032-904122-2',
      memo: 'TOM/12/21/008',
      status: 'Deposited'
    },
    {
      id: 6,
      editView: true,
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd.',
      date: '6/12/2021',
      asOfDate: 'Dec 2021',
      period: 'Dec 2021',
      taxPeriod: 'Dec 2021',
      documentNumber: 'PVTEA40007',
      name: '413 Keppel Fels Limited',
      amount: '43,450.56',
      account: '11120 ALL Bank Accounts : TEA DBS SGD 032-904122-3',
      memo: '',
      status: 'Deposited'
    },
    {
      id: 7,
      editView: true,
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd.',
      date: '7/12/2021',
      asOfDate: 'Dec 2021',
      period: 'Dec 2021',
      taxPeriod: 'Dec 2021',
      documentNumber: 'PVTOMDQ0026',
      name: '204 Darvell Schlumberger',
      amount: '3,971.60',
      account: '11305 ALL Bank Accounts : TOM OCBC 501-075-904122-5',
      memo: '',
      status: 'Deposited'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleNew = () => {
    setCurrentPage('accept-customer-payments');
  };

  const handleView = (paymentId) => {
    setCurrentPage('view-customer-payment-detail');
    sessionStorage.setItem('selectedPayment', paymentId);
  };

  const handleEdit = (paymentId) => {
    setCurrentPage('edit-customer-payment');
    sessionStorage.setItem('selectedPayment', paymentId);
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-money-check-alt"></i>
          <h1>Payments</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>VIEW</label>
          <select 
            value={viewFilter}
            onChange={(e) => setViewFilter(e.target.value)}
            className="form-control"
            style={{ width: '250px' }}
          >
            <option value="Vendor Bills">Vendor Bills</option>
            <option value="All Payments">All Payments</option>
            <option value="Deposited">Deposited</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNew}>
            <i className="fas fa-plus"></i>
            New Transaction
          </button>
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button className="btn-icon" title="Edit View">
            <i className="fas fa-edit"></i>
            <span>EDIT</span>
          </button>
          <button className="btn-icon" title="Delete">
            <i className="fas fa-times"></i>
          </button>
          <button className="btn-icon" title="Export">
            <i className="fas fa-file-export"></i>
          </button>
          <button className="btn-icon" title="Print">
            <i className="fas fa-print"></i>
          </button>
        </div>
        <div className="filter-right-group">
          <div className="quick-sort">
            <label>QUICK SORT</label>
            <select className="form-control">
              <option>31/3/2021 — 27/1/2022</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {payments.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
            <thead>
              <tr>
                <th style={{ width: '80px' }}>EDIT | VIEW</th>
                <th>DATE</th>
                <th>DOCUMENT NUMBER</th>
                <th>SUBSIDIARY</th>
                <th>NAME</th>
                <th>ACCOUNT</th>
                <th>MEMO</th>
                <th>AS-OF DATE</th>
                <th>PERIOD</th>
                <th>TAX PERIOD</th>
                <th style={{ textAlign: 'right' }}>AMOUNT</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id}>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button 
                        className="view-link"
                        onClick={() => handleEdit(payment.id)}
                      >
                        Edit
                      </button>
                      <span style={{ color: '#ccc' }}>|</span>
                      <button 
                        className="view-link"
                        onClick={() => handleView(payment.id)}
                      >
                        View
                      </button>
                    </div>
                  </td>
                  <td>{payment.date}</td>
                  <td style={{ color: 'var(--blue-accent)', fontWeight: '500' }}>
                    {payment.documentNumber}
                  </td>
                  <td style={{ fontSize: '0.85rem' }}>{payment.subsidiary}</td>
                  <td>{payment.name}</td>
                  <td style={{ fontSize: '0.85rem' }}>{payment.account}</td>
                  <td style={{ color: '#666' }}>{payment.memo}</td>
                  <td>{payment.asOfDate}</td>
                  <td>{payment.period}</td>
                  <td>{payment.taxPeriod}</td>
                  <td className="amount">{payment.amount}</td>
                  <td>{payment.status}</td>
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

export default ViewCustomerPayments;
