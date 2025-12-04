import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewVendorPrepayments = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Search Project');

  const [prepayments] = useState([
    {
      id: 1,
      date: '23/12/2021',
      documentNumber: '',
      vendor: 'KEPPEL FELS LIMITED - (50,GULROAD)',
      name: 'KEPPEL FELS LIMITED - (50,GULROAD)',
      account: '11140 ALL Bank Accounts : MEP D&S SGD 003-906132-3',
      memo: '2W WELDING TEST',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: -924.00
    },
    {
      id: 2,
      date: '23/12/2021',
      documentNumber: '',
      vendor: 'KEPPEL FELS LIMITED - (50,GULROAD)',
      name: 'KEPPEL FELS LIMITED - (50,GULROAD)',
      account: '12105 Deposits Paid / Prepayments : Vendor Prepayments',
      memo: '',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: 924.00
    },
    {
      id: 3,
      date: '5/1/2022',
      documentNumber: '300505',
      vendor: 'STEELARIS PTE LTD',
      name: 'STEELARIS PTE LTD',
      account: '11230 ALL Bank Accounts : MEP UOB 9314-301-906-1',
      memo: '',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: -1198.40
    },
    {
      id: 4,
      date: '6/1/2022',
      documentNumber: '300505',
      vendor: 'STEELARIS PTE LTD',
      name: 'STEELARIS PTE LTD',
      account: '12105 Deposits Paid / Prepayments : Vendor Prepayments',
      memo: '',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: 1198.40
    },
    {
      id: 5,
      date: '11/1/2022',
      documentNumber: 'To Print',
      vendor: 'SIN AIK HARDWARE (PTE) LTD',
      name: 'SIN AIK HARDWARE (PTE) LTD',
      account: '11140 ALL Bank Accounts : MEP D&S SGD 003-906132-3',
      memo: '',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: -4007.15
    }
  ]);

  const handleViewPrepayment = (prepayment) => {
    if (setCurrentPage) {
      setCurrentPage('view-vendor-prepayment-detail');
    }
  };

  const handleEditPrepayment = (prepayment) => {
    if (setCurrentPage) {
      setCurrentPage('enter-vendor-prepayment');
    }
  };

  const handleNewTransaction = () => {
    if (setCurrentPage) {
      setCurrentPage('enter-vendor-prepayment');
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-file-invoice-dollar"></i>
          <h1>Vendor Prepayments</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option active">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Customize</button>
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
            <option value="All Prepayments">All Prepayments</option>
            <option value="Pending">Pending</option>
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
            <option>Payee</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {prepayments.length}
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
            {prepayments.map((prepayment) => (
              <tr key={prepayment.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditPrepayment(prepayment)}
                    style={{ marginRight: '4px' }}
                  >
                    Edit
                  </button>
                  <span style={{ color: '#999' }}>|</span>
                  <button 
                    className="view-link"
                    onClick={() => handleViewPrepayment(prepayment)}
                    style={{ marginLeft: '4px' }}
                  >
                    View
                  </button>
                </td>
                <td style={{ textAlign: 'center' }}>
                  {prepayment.documentNumber === '' && <span style={{ color: '#e53e3e' }}>*</span>}
                </td>
                <td>{prepayment.date}</td>
                <td>{prepayment.documentNumber || '-'}</td>
                <td>{prepayment.vendor}</td>
                <td>{prepayment.name}</td>
                <td style={{ fontSize: '11px', color: '#4a90e2' }}>{prepayment.account}</td>
                <td>{prepayment.memo || '-'}</td>
                <td>{prepayment.item || '-'}</td>
                <td>{prepayment.itemQty || '-'}</td>
                <td>{prepayment.itemUnitPrice || '-'}</td>
                <td className="amount" style={{ textAlign: 'right' }}>
                  {prepayment.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
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

export default ViewVendorPrepayments;
