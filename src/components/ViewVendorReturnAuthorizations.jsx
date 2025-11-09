import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewVendorReturnAuthorizations = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');

  const [returns] = useState([
    {
      id: 1,
      date: '17/12/2021',
      documentNumber: 'VRATOM00016',
      vendor: 'EASTERN SEALAND SUPPLY PTE LTD',
      name: 'EASTERN SEALAND SUPPLY PTE LTD',
      memo: 'VOID',
      item: '',
      itemQty: 0,
      itemUnitPrice: 0.00,
      amount: 0.00
    },
    {
      id: 2,
      date: '17/12/2021',
      documentNumber: 'VRATOM00016',
      vendor: 'EASTERN SEALAND SUPPLY PTE LTD',
      name: '12-0052 Fortis Construction Pte. Ltd : Fortis-Project 36A',
      memo: '12" Speed Wrench',
      item: 'Other Consumable xx',
      itemQty: 0,
      itemUnitPrice: 12.50,
      amount: 0.00
    },
    {
      id: 3,
      date: '17/12/2021',
      documentNumber: 'VRATOM00016',
      vendor: 'EASTERN SEALAND SUPPLY PTE LTD',
      name: 'Default Tax Agency SG',
      memo: 'VAT',
      item: '7%s',
      itemQty: 0,
      itemUnitPrice: 7.00,
      amount: 0.00
    },
    {
      id: 4,
      date: '17/12/2021',
      documentNumber: 'VRATOM00017',
      vendor: 'EASTERN SEALAND SUPPLY PTE LTD',
      name: 'EASTERN SEALAND SUPPLY PTE LTD',
      memo: 'VOID',
      item: '',
      itemQty: 0,
      itemUnitPrice: 0.00,
      amount: 0.00
    },
    {
      id: 5,
      date: '17/12/2021',
      documentNumber: 'VRATOM00017',
      vendor: 'EASTERN SEALAND SUPPLY PTE LTD',
      name: 'EASTERN SEALAND SUPPLY PTE LTD',
      memo: 'EASTERN SEALAND INV1329304',
      item: '',
      itemQty: 0,
      itemUnitPrice: 0.00,
      amount: 0.00
    },
    {
      id: 6,
      date: '17/12/2021',
      documentNumber: 'VRATOM00017',
      vendor: 'EASTERN SEALAND SUPPLY PTE LTD',
      name: 'Default Tax Agency SG',
      memo: 'VAT',
      item: '7%s',
      itemQty: 0,
      itemUnitPrice: 7.00,
      amount: 0.00
    },
    {
      id: 7,
      date: '12/1/2022',
      documentNumber: 'VRATOM00010',
      vendor: 'TOKIO MARINE INSURANCE SINGAPORE LTD.',
      name: 'TOKIO MARINE INSURANCE SINGAPORE LTD.',
      memo: 'TOM-90-2021-3364',
      item: '',
      itemQty: 0,
      itemUnitPrice: 0.00,
      amount: 1497.22
    },
    {
      id: 8,
      date: '12/1/2022',
      documentNumber: 'VRATOM00010',
      vendor: 'TOKIO MARINE INSURANCE SINGAPORE LTD.',
      name: 'TOKIO MARINE INSURANCE SINGAPORE LTD.',
      memo: 'Insurance YW78175 From 30/11/2021 To 29/11/2022',
      item: 'Vehicle YM78375',
      itemQty: -1,
      itemUnitPrice: 1399.27,
      amount: -1399.27
    },
    {
      id: 9,
      date: '12/1/2022',
      documentNumber: 'VRATOM00010',
      vendor: 'TOKIO MARINE INSURANCE SINGAPORE LTD.',
      name: 'Default Tax Agency SG',
      memo: 'VAT',
      item: '7%s',
      itemQty: -1,
      itemUnitPrice: 7.00,
      amount: -97.95
    },
    {
      id: 10,
      date: '14/2/2022',
      documentNumber: 'VRATOM00011',
      vendor: "BEN'S EXPRESS ENGINEERING PTE LTD",
      name: "BEN'S EXPRESS ENGINEERING PTE LTD",
      memo: 'PO-2079',
      item: '',
      itemQty: 0,
      itemUnitPrice: 0.00,
      amount: 450.00
    },
    {
      id: 11,
      date: '14/2/2022',
      documentNumber: 'VRATOM00011',
      vendor: "BEN'S EXPRESS ENGINEERING PTE LTD",
      name: "BEN'S EXPRESS ENGINEERING PTE LTD",
      memo: '',
      item: '',
      itemQty: 0,
      itemUnitPrice: 0.00,
      amount: -450.00
    },
    {
      id: 12,
      date: '14/2/2022',
      documentNumber: 'VRATOM00011',
      vendor: "BEN'S EXPRESS ENGINEERING PTE LTD",
      name: 'Default Tax Agency SG',
      memo: 'VAT',
      item: '0%',
      itemQty: -1,
      itemUnitPrice: 0.00,
      amount: 0.00
    },
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = (returnItem) => {
    showToast(`Editing vendor return ${returnItem.documentNumber}`, 'info');
  };

  const handleView = (returnItem) => {
    showToast(`Viewing vendor return ${returnItem.documentNumber}`, 'info');
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-undo"></i>
          <h1>Vendor Return Authorizations</h1>
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
            <option value="all">Search Project</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
          </select>
          <button className="btn-edit-view">Edit View</button>
        </div>
        <button className="btn-new-enquiry" onClick={() => showToast('Opening new vendor return...', 'info')}>
          <i className="fas fa-plus"></i>
          New Transaction
        </button>
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
          TOTAL: 47
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th></th>
              <th>EDIT | VIEW</th>
              <th>*</th>
              <th>DATE ▲</th>
              <th>DOCUMENT NUMBER</th>
              <th>VENDOR</th>
              <th>NAME</th>
              <th>MEMO</th>
              <th>ITEM</th>
              <th>ITEM QTY</th>
              <th>ITEM UNIT PRICE</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {returns.map((returnItem) => (
              <tr key={returnItem.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button 
                      className="view-link"
                      onClick={() => handleEdit(returnItem)}
                    >
                      Edit
                    </button>
                    <span style={{ color: '#999' }}>|</span>
                    <button 
                      className="view-link"
                      onClick={() => handleView(returnItem)}
                    >
                      View
                    </button>
                  </div>
                </td>
                <td>*</td>
                <td>{returnItem.date}</td>
                <td className="doc-number">{returnItem.documentNumber}</td>
                <td>{returnItem.vendor}</td>
                <td>{returnItem.name}</td>
                <td>{returnItem.memo}</td>
                <td>{returnItem.item}</td>
                <td>{returnItem.itemQty}</td>
                <td className="amount">{typeof returnItem.itemUnitPrice === 'number' ? returnItem.itemUnitPrice.toFixed(2) : returnItem.itemUnitPrice}</td>
                <td className="amount">{typeof returnItem.amount === 'number' ? returnItem.amount.toFixed(2) : returnItem.amount}</td>
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

export default ViewVendorReturnAuthorizations;
