import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewBills = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Search Project');

  const [bills] = useState([
    {
      id: 1,
      editView: true,
      date: '1/1/2021',
      documentNumber: 'BALANCE B/F-A1',
      vendor: 'A1 ENGINEERING SERVICES PTE LTD',
      name: '',
      account: '30010 Equity : Opening Balance',
      memo: 'Old System opening Balance',
      item: '',
      itemQuantity: '',
      itemUnitPrice: '',
      amount: 1802.95
    },
    {
      id: 2,
      editView: true,
      date: '1/1/2021',
      documentNumber: 'BALANCE B/F-A1',
      vendor: 'A1 ENGINEERING SERVICES PTE LTD',
      name: 'Default Inv Supply 30',
      account: '31101 CGT : Purchase 30',
      memo: '',
      item: '',
      itemQuantity: '',
      itemUnitPrice: '',
      amount: 0.00
    },
    {
      id: 3,
      editView: true,
      date: '1/1/2021',
      documentNumber: 'BALANCE B/F-A1',
      vendor: 'ACRES KINGS CORPORATION PTE LTD',
      name: 'Default Inv Supply 30',
      account: '31101 CGT : Purchase 30',
      memo: '',
      item: '',
      itemQuantity: '',
      itemUnitPrice: '',
      amount: 38208.70
    },
    {
      id: 4,
      editView: true,
      date: '1/1/2021',
      documentNumber: 'BALANCE B/F-AC',
      vendor: 'ACRES KINGS CORPORATION PTE LTD',
      name: '',
      account: '30010 Equity : Opening Balance',
      memo: 'Old System opening Balance',
      item: '',
      itemQuantity: '',
      itemUnitPrice: '',
      amount: 0.00
    },
    {
      id: 5,
      editView: true,
      date: '1/1/2021',
      documentNumber: 'BALANCE B/F-EV',
      vendor: 'EVERTECH ENGINEERING & SERVICES PTE LTD',
      name: 'Default Inv Supply 30',
      account: '31101 CGT : Purchase 30',
      memo: '',
      item: '',
      itemQuantity: '',
      itemUnitPrice: '',
      amount: 0.00
    },
    {
      id: 6,
      editView: true,
      date: '1/1/2021',
      documentNumber: 'BALANCE B/F-EV',
      vendor: 'EVERTECH ENGINEERING & SERVICES PTE LTD',
      name: '',
      account: '30010 Equity : Opening Balance',
      memo: 'Old System opening Balance',
      item: '',
      itemQuantity: '',
      itemUnitPrice: '',
      amount: 100.00
    },
    {
      id: 7,
      editView: true,
      date: '1/1/2021',
      documentNumber: 'BALANCE B/F-EV01',
      vendor: 'EVERTECH FABRICATION SERVICES PTE LTD',
      name: 'Default Inv Supply 30',
      account: '31101 CGT : Purchase 30',
      memo: '',
      item: '',
      itemQuantity: '',
      itemUnitPrice: '',
      amount: 0.00
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewBill = (bill) => {
    if (setCurrentPage) {
      setCurrentPage('view-bill-detail');
    }
  };

  const handleEditBill = (bill) => {
    if (setCurrentPage) {
      setCurrentPage('enter-bills');
    }
  };

  const handleNewTransaction = () => {
    if (setCurrentPage) {
      setCurrentPage('enter-bills');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-file-invoice"></i>
          <h1>Bills</h1>
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
            <option value="All Bills">All Bills</option>
            <option value="Pending Approval">Pending Approval</option>
          </select>
          <button className="btn-customize">Customize View</button>
          <button className="btn btn-primary" onClick={handleNewTransaction} style={{ marginLeft: '10px' }}>
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
          <button className="toolbar-btn" title="Export to Excel">
            <i className="fas fa-file-excel"></i>
          </button>
          <button className="toolbar-btn" title="Export to PDF">
            <i className="fas fa-file-pdf"></i>
          </button>
          <button className="toolbar-btn" title="Print">
            <i className="fas fa-print"></i>
          </button>
          <button className="toolbar-btn">EDIT</button>
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
          TOTAL: {bills.length}
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th></th>
              <th>EDIT | VIEW</th>
              <th>DATE</th>
              <th>DOCUMENT NUMBER</th>
              <th>VENDOR</th>
              <th>NAME</th>
              <th>ACCOUNT</th>
              <th>MEMO</th>
              <th>ITEM</th>
              <th>ITEM QUANTITY</th>
              <th>ITEM UNIT PRICE</th>
              <th style={{ textAlign: 'right' }}>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill) => (
              <tr key={bill.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditBill(bill)}
                    style={{ marginRight: '4px' }}
                  >
                    Edit
                  </button>
                  <span style={{ color: '#999' }}>|</span>
                  <button 
                    className="view-link"
                    onClick={() => handleViewBill(bill)}
                    style={{ marginLeft: '4px' }}
                  >
                    View
                  </button>
                </td>
                <td>{bill.date}</td>
                <td className="doc-number">{bill.documentNumber}</td>
                <td>{bill.vendor}</td>
                <td>{bill.name || '-'}</td>
                <td>{bill.account}</td>
                <td>{bill.memo || '-'}</td>
                <td>{bill.item || '-'}</td>
                <td>{bill.itemQuantity || '-'}</td>
                <td>{bill.itemUnitPrice || '-'}</td>
                <td className="amount" style={{ textAlign: 'right' }}>
                  {bill.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
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

export default ViewBills;
