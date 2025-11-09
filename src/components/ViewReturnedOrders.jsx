import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewReturnedOrders = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Vendor Bills');

  const [receipts] = useState([
    {
      id: 1,
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd.',
      date: '16/12/2021',
      asOfDate: 'Dec 2021',
      period: 'Dec 2021',
      taxPeriod: 'Dec 2021',
      documentNumber: 'IR00194',
      name: 'CHIA HOCK HARDWARE TRADING',
      amountNetOfTax: '0.00',
      taxTotal: '0.00',
      memo: '',
      materialSpecification: 'Standard',
      approvalStatus: 'Approved'
    },
    {
      id: 2,
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd.',
      date: '5/1/2022',
      asOfDate: 'Jan 2022',
      period: 'Jan 2022',
      taxPeriod: 'Jan 2022',
      documentNumber: 'IR00195',
      name: 'CHIA HOCK HARDWARE TRADING',
      amountNetOfTax: '0.00',
      taxTotal: '0.00',
      memo: '',
      materialSpecification: 'Standard',
      approvalStatus: 'Approved'
    },
    {
      id: 3,
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd.',
      date: '5/1/2022',
      asOfDate: 'Jan 2022',
      period: 'Jan 2022',
      taxPeriod: 'Jan 2022',
      documentNumber: 'IR00096',
      name: 'BNT INTERNATIONAL PTE LTD',
      amountNetOfTax: '0.00',
      taxTotal: '0.00',
      memo: '',
      materialSpecification: 'Standard',
      approvalStatus: 'Approved'
    },
    {
      id: 4,
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd.',
      date: '5/1/2022',
      asOfDate: 'Jan 2022',
      period: 'Jan 2022',
      taxPeriod: 'Jan 2022',
      documentNumber: 'IR00094',
      name: 'METAL FORMS PRIVATE LIMITED',
      amountNetOfTax: '0.00',
      taxTotal: '0.00',
      memo: '',
      materialSpecification: 'Standard',
      approvalStatus: 'Approved'
    },
    {
      id: 5,
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd.',
      date: '5/1/2022',
      asOfDate: 'Jan 2022',
      period: 'Jan 2022',
      taxPeriod: 'Jan 2022',
      documentNumber: 'IR00093',
      name: 'BNT INTERNATIONAL PTE LTD',
      amountNetOfTax: '0.00',
      taxTotal: '0.00',
      memo: '',
      materialSpecification: 'Standard',
      approvalStatus: 'Approved'
    },
    {
      id: 6,
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd.',
      date: '5/1/2022',
      asOfDate: 'Jan 2022',
      period: 'Jan 2022',
      taxPeriod: 'Jan 2022',
      documentNumber: 'IR00092',
      name: 'BNT INTERNATIONAL PTE LTD',
      amountNetOfTax: '0.00',
      taxTotal: '0.00',
      memo: '',
      materialSpecification: 'Standard',
      approvalStatus: 'Approved'
    },
    {
      id: 7,
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd.',
      date: '5/1/2022',
      asOfDate: 'Jan 2022',
      period: 'Jan 2022',
      taxPeriod: 'Jan 2022',
      documentNumber: 'IR00091',
      name: 'BNT INTERNATIONAL PTE LTD',
      amountNetOfTax: '0.00',
      taxTotal: '0.00',
      memo: '',
      materialSpecification: 'Standard',
      approvalStatus: 'Approved'
    },
    {
      id: 8,
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd.',
      date: '5/1/2022',
      asOfDate: 'Jan 2022',
      period: 'Jan 2022',
      taxPeriod: 'Jan 2022',
      documentNumber: 'IR00090',
      name: 'BNT INTERNATIONAL PTE LTD',
      amountNetOfTax: '0.00',
      taxTotal: '0.00',
      memo: '',
      materialSpecification: 'Standard',
      approvalStatus: 'Approved'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleNew = () => {
    setCurrentPage('receive-returned-order');
  };

  const handleView = (receiptId) => {
    setCurrentPage('view-returned-order-detail');
    sessionStorage.setItem('selectedReceipt', receiptId);
  };

  const handleEdit = (receiptId) => {
    setCurrentPage('edit-returned-order');
    sessionStorage.setItem('selectedReceipt', receiptId);
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-box-open"></i>
          <h1>Item Receipts</h1>
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
            <option value="All Receipts">All Receipts</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-secondary" onClick={() => showToast('Edit View coming soon', 'info')}>
            Edit View
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
              <option>16/12/2021 — 17/1/2022</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {receipts.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '100px' }}>EDIT | VIEW</th>
              <th>SUBSIDIARY</th>
              <th>DATE ▲</th>
              <th>AS-OF DATE</th>
              <th>PERIOD</th>
              <th>TAX PERIOD</th>
              <th>DOCUMENT NUMBER</th>
              <th>NAME</th>
              <th style={{ textAlign: 'right' }}>AMOUNT (NET OF TAX)</th>
              <th style={{ textAlign: 'right' }}>TAX TOTAL</th>
              <th>MEMO</th>
              <th>MATERIAL SPECIFICATION</th>
              <th>APPROVAL STATUS</th>
            </tr>
          </thead>
          <tbody>
            {receipts.map((receipt) => (
              <tr key={receipt.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEdit(receipt.id)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleView(receipt.id)}
                  >
                    View
                  </button>
                </td>
                <td style={{ fontSize: '0.85rem' }}>{receipt.subsidiary}</td>
                <td>{receipt.date}</td>
                <td>{receipt.asOfDate}</td>
                <td>{receipt.period}</td>
                <td>{receipt.taxPeriod}</td>
                <td style={{ color: 'var(--blue-accent)', fontWeight: '500' }}>
                  {receipt.documentNumber}
                </td>
                <td>{receipt.name}</td>
                <td className="amount">{receipt.amountNetOfTax}</td>
                <td className="amount">{receipt.taxTotal}</td>
                <td style={{ color: '#666' }}>{receipt.memo}</td>
                <td>{receipt.materialSpecification}</td>
                <td>{receipt.approvalStatus}</td>
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

export default ViewReturnedOrders;
