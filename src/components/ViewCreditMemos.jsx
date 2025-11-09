import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCreditMemos = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Vendor Bills');

  const [memos] = useState([
    {
      id: 1,
      orderType: 'Tech Onshore MEP-Prefabricators Pte Ltd',
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd',
      date: '1/1/2021',
      asOfDate: 'Jan 2021',
      period: 'Jan 2021',
      taxPeriod: 'Jan 2021',
      documentNumber: 'CN21TOMHQ00002',
      name: '845 Mazars Doubtful Debts',
      amountNetOfTax: '-4,266.00',
      taxTotal: '0.00',
      amount: '-4,266.00',
      account: '10100 Accounts Receivable : Trade Debtors',
      status: 'Fully Applied'
    },
    {
      id: 2,
      orderType: 'Tech Onshore MEP-Prefabricators Pte Ltd',
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd',
      date: '30/11/2021',
      asOfDate: 'Nov 2021',
      period: 'Nov 2021',
      taxPeriod: 'Nov 2021',
      documentNumber: 'CN21TOMHQ00002',
      name: '845 Mazars Doubtful Debts',
      amountNetOfTax: '0.00',
      taxTotal: '0.00',
      amount: '0.00',
      account: '10100 Accounts Receivable : Trade Debtors',
      status: 'VOID'
    },
    {
      id: 3,
      orderType: 'Tech Onshore MEP-Prefabricators Pte Ltd',
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd',
      date: '30/11/2021',
      asOfDate: 'Nov 2021',
      period: 'Nov 2021',
      taxPeriod: 'Nov 2021',
      documentNumber: 'CN21TOMHQ00004',
      name: '845 Mazars Doubtful Debts',
      amountNetOfTax: '0.00',
      taxTotal: '0.00',
      amount: '0.00',
      account: '10100 Accounts Receivable : Trade Debtors',
      status: 'Voided'
    },
    {
      id: 4,
      orderType: 'Tech Onshore MEP-Prefabricators Pte Ltd',
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd',
      date: '17/12/2021',
      asOfDate: 'Dec 2021',
      period: 'Dec 2021',
      taxPeriod: 'Dec 2021',
      documentNumber: 'CN22TOMHQ00005',
      name: '649 Schlumberger Oilfield Pte Ltd',
      amountNetOfTax: '0.00',
      taxTotal: '0.00',
      amount: '0.00',
      account: '10100 Accounts Receivable : Trade Debtors',
      status: 'Voided'
    },
    {
      id: 5,
      orderType: 'Tech Onshore MEP-Prefabricators Pte Ltd',
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd',
      date: '23/2/2022',
      asOfDate: 'Feb 2022',
      period: 'Feb 2022',
      taxPeriod: 'Feb 2022',
      documentNumber: 'CN22TOMHQ00007',
      name: '839 Cath-Tech Marine & Offshore Pte Ltd',
      amountNetOfTax: '-341.50',
      taxTotal: '-23.91',
      amount: '-365.41',
      account: '10100 Accounts Receivable : Trade Debtors',
      status: 'Fully Applied'
    },
    {
      id: 6,
      orderType: 'Tech Onshore MEP-Prefabricators Pte Ltd',
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd : Tech Marine Offshore (S) Pte Ltd',
      date: '23/2/2022',
      asOfDate: 'Feb 2022',
      period: 'Feb 2022',
      taxPeriod: 'Feb 2022',
      documentNumber: 'CN22TOMHQ00002',
      name: '1001 TECH ONSHORE MEP-PREFABRICATORS PTE LTD : 721667 GIHL Keppel Shipyard Limited : SS01C/00004 FPSO Prosperity',
      amountNetOfTax: '-149.50',
      taxTotal: '-10.47',
      amount: '-159.97',
      account: '10100 Accounts Receivable : Trade Debtors',
      status: 'Fully Applied'
    },
    {
      id: 7,
      orderType: 'Tech Onshore MEP-Prefabricators Pte Ltd',
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd',
      date: '1/4/2022',
      asOfDate: 'Apr 2022',
      period: 'Apr 2022',
      taxPeriod: 'Apr 2022',
      documentNumber: 'CN22TOMHQ00007',
      name: '3 Sembcorp Marine Integrated Yard Pte Ltd',
      amountNetOfTax: '-67,400.00',
      taxTotal: '-4,718.00',
      amount: '-72,118.00',
      account: '10100 Accounts Receivable : Trade Debtors',
      status: 'Fully Applied'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleNew = () => {
    setCurrentPage('issue-credit-memo');
  };

  const handleView = (memoId) => {
    setCurrentPage('view-credit-memo-detail');
    sessionStorage.setItem('selectedCreditMemo', memoId);
  };

  const handleEdit = (memoId) => {
    setCurrentPage('edit-credit-memo');
    sessionStorage.setItem('selectedCreditMemo', memoId);
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-file-invoice"></i>
          <h1>Credit Memos</h1>
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
            <option value="All Memos">All Memos</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-secondary" onClick={() => showToast('Edit View coming soon', 'info')}>
            Edit View
          </button>
          <button className="btn btn-primary" onClick={handleNew}>
            New Transaction
          </button>
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button className="btn-icon" title="Edit">
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
              <option>1/1/2021 — 15/4/2023</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {memos.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '100px' }}>EDIT | VIEW</th>
              <th>ORDER TYPE</th>
              <th>SUBSIDIARY</th>
              <th>DATE ▲</th>
              <th>AS-OF DATE</th>
              <th>PERIOD</th>
              <th>TAX PERIOD</th>
              <th>DOCUMENT NUMBER</th>
              <th>NAME</th>
              <th style={{ textAlign: 'right' }}>AMOUNT (NET OF TAX)</th>
              <th style={{ textAlign: 'right' }}>TAX TOTAL</th>
              <th style={{ textAlign: 'right' }}>AMOUNT</th>
              <th>ACCOUNT</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {memos.map((memo) => (
              <tr key={memo.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEdit(memo.id)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleView(memo.id)}
                  >
                    View
                  </button>
                </td>
                <td style={{ fontSize: '0.85rem' }}>{memo.orderType}</td>
                <td style={{ fontSize: '0.85rem' }}>{memo.subsidiary}</td>
                <td>{memo.date}</td>
                <td>{memo.asOfDate}</td>
                <td>{memo.period}</td>
                <td>{memo.taxPeriod}</td>
                <td style={{ color: 'var(--blue-accent)', fontWeight: '500' }}>
                  {memo.documentNumber}
                </td>
                <td>{memo.name}</td>
                <td className="amount">{memo.amountNetOfTax}</td>
                <td className="amount">{memo.taxTotal}</td>
                <td className="amount">{memo.amount}</td>
                <td style={{ fontSize: '0.85rem' }}>{memo.account}</td>
                <td>{memo.status}</td>
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

export default ViewCreditMemos;
