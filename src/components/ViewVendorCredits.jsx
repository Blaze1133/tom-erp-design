import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewVendorCredits = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Search Project');

  const [credits] = useState([
    {
      id: 1,
      date: '1/1/2021',
      documentNumber: 'BALANCE B/F-HALC',
      vendor: 'HALCYON TECHNOLOGY SINGAPORE PTE LTD.',
      name: 'HALCYON TECHNOLOGY SINGAPORE PTE LTD.',
      account: '20010 Accounts Payable : Trade Creditors',
      memo: 'Old System opening Balance',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: -29.47,
      asterisk: true
    },
    {
      id: 2,
      date: '1/1/2021',
      documentNumber: 'BALANCE B/F-HALC',
      vendor: 'HALCYON TECHNOLOGY SINGAPORE PTE LTD.',
      name: '',
      account: '30300 Equity : Opening Balance',
      memo: 'Old System opening Balance',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: 29.47,
      asterisk: true
    },
    {
      id: 3,
      date: '1/1/2021',
      documentNumber: 'BALANCE B/F-HALC',
      vendor: 'HALCYON TECHNOLOGY SINGAPORE PTE LTD.',
      name: 'Default Tax Agency SG',
      account: '13100 GST on Purchases SG',
      memo: 'VAT',
      item: '',
      itemQty: '%',
      itemUnitPrice: '-1',
      amount: 0.00,
      asterisk: true
    },
    {
      id: 4,
      date: '25/3/2021',
      documentNumber: 'MAR TRF060',
      vendor: 'SMRT AUTOMOTIVE SERVICES PTE LTD',
      name: 'SMRT AUTOMOTIVE SERVICES PTE LTD',
      account: '20010 Accounts Payable : Trade Creditors',
      memo: 'Old System opening Balance',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: -368.00,
      asterisk: true
    },
    {
      id: 5,
      date: '25/3/2021',
      documentNumber: 'MAR TRF060',
      vendor: 'SMRT AUTOMOTIVE SERVICES PTE LTD',
      name: '',
      account: '30300 Equity : Opening Balance',
      memo: '',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: 368.00,
      asterisk: true
    }
  ]);

  const handleViewCredit = (credit) => {
    if (setCurrentPage) {
      setCurrentPage('view-vendor-credit-detail');
    }
  };

  const handleEditCredit = (credit) => {
    if (setCurrentPage) {
      setCurrentPage('enter-vendor-credit');
    }
  };

  const handleNewTransaction = () => {
    if (setCurrentPage) {
      setCurrentPage('enter-vendor-credit');
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-file-invoice"></i>
          <h1>Bill Credits</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option active">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <label style={{ fontSize: '13px', fontWeight: '600' }}>VIEW:</label>
          <select 
            className="form-control"
            value={viewFilter}
            onChange={(e) => setViewFilter(e.target.value)}
            style={{ width: '300px' }}
          >
            <option value="Search Project">Search Project</option>
            <option value="All Credits">All Credits</option>
          </select>
          <button 
            className="btn btn-secondary" 
            style={{ 
              padding: '8px 20px', 
              fontSize: '13px',
              height: '38px',
              minWidth: '120px'
            }}
          >
            Edit View
          </button>
          <button 
            className="btn btn-primary" 
            onClick={handleNewTransaction} 
            style={{ 
              padding: '8px 20px', 
              fontSize: '13px',
              height: '38px',
              minWidth: '160px'
            }}
          >
            <i className="fas fa-plus"></i> New Transaction
          </button>
        </div>
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
          TOTAL: {credits.length}
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '100px' }}>EDIT | VIEW</th>
              <th>*</th>
              <th>DATE</th>
              <th>DOCUMENT NUMBER</th>
              <th>VENDOR</th>
              <th>NAME</th>
              <th>ACCOUNT</th>
              <th>MEMO</th>
              <th>ITEM</th>
              <th>ITEM QTY</th>
              <th>ITEM UNIT PRICE</th>
              <th style={{ textAlign: 'right' }}>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {credits.map((credit) => (
              <tr key={credit.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditCredit(credit)}
                    style={{ marginRight: '4px' }}
                  >
                    Edit
                  </button>
                  <span style={{ color: '#999' }}>|</span>
                  <button 
                    className="view-link"
                    onClick={() => handleViewCredit(credit)}
                    style={{ marginLeft: '4px' }}
                  >
                    View
                  </button>
                </td>
                <td style={{ textAlign: 'center' }}>
                  {credit.asterisk && <span style={{ color: '#e53e3e' }}>*</span>}
                </td>
                <td>{credit.date}</td>
                <td>{credit.documentNumber}</td>
                <td>{credit.vendor}</td>
                <td>{credit.name || '-'}</td>
                <td style={{ fontSize: '11px', color: '#4a90e2' }}>{credit.account}</td>
                <td>{credit.memo || '-'}</td>
                <td>{credit.item || '-'}</td>
                <td>{credit.itemQty || '-'}</td>
                <td>{credit.itemUnitPrice || '-'}</td>
                <td className="amount" style={{ textAlign: 'right' }}>
                  {credit.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
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

export default ViewVendorCredits;
