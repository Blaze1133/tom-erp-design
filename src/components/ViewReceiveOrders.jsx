import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewReceiveOrders = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');

  const [itemReceipts] = useState([
    {
      id: 1,
      date: '16/12/2021',
      documentNumber: 'IR00194',
      vendor: 'CHIA HOCK HARDWARE TRADING',
      name: 'CHIA HOCK HARDWARE TRADING',
      memo: 'Safety Equipment',
      item: 'safety goggles',
      itemQty: 36,
      itemUnitPrice: 12.50
    },
    {
      id: 2,
      date: '16/12/2021',
      documentNumber: 'IR00194',
      vendor: 'CHIA HOCK HARDWARE TRADING',
      name: 'CHIA HOCK HARDWARE TRADING',
      memo: 'Safety Equipment',
      item: 'Whistle',
      itemQty: 24,
      itemUnitPrice: 3.80
    },
    {
      id: 3,
      date: '16/12/2021',
      documentNumber: 'IR00194',
      vendor: 'CHIA HOCK HARDWARE TRADING',
      name: 'CHIA HOCK HARDWARE TRADING',
      memo: 'Safety Equipment',
      item: 'Head Light',
      itemQty: 10,
      itemUnitPrice: 28.00
    },
    {
      id: 4,
      date: '5/1/2022',
      documentNumber: 'IR00086',
      vendor: 'BNT INTERNATIONAL PTE LTD',
      name: 'BNT INTERNATIONAL PTE LTD',
      memo: 'Channel Materials',
      item: 'Channe-x',
      itemQty: 110,
      itemUnitPrice: 45.00
    },
    {
      id: 5,
      date: '5/1/2022',
      documentNumber: 'IR00086',
      vendor: 'BNT INTERNATIONAL PTE LTD',
      name: 'BNT INTERNATIONAL PTE LTD',
      memo: 'Channel Materials',
      item: 'Channe-x',
      itemQty: 130,
      itemUnitPrice: 45.00
    },
    {
      id: 6,
      date: '5/1/2022',
      documentNumber: 'IR00087',
      vendor: 'BNT INTERNATIONAL PTE LTD',
      name: 'BNT INTERNATIONAL PTE LTD',
      memo: 'Unistrut Components',
      item: 'Unistrut Accessories',
      itemQty: 5000,
      itemUnitPrice: 2.50
    },
    {
      id: 7,
      date: '5/1/2022',
      documentNumber: 'IR00088',
      vendor: 'BNT INTERNATIONAL PTE LTD',
      name: 'BNT INTERNATIONAL PTE LTD',
      memo: 'Structural Materials',
      item: 'Unistrut',
      itemQty: 200,
      itemUnitPrice: 38.00
    },
    {
      id: 8,
      date: '5/1/2022',
      documentNumber: 'IR00089',
      vendor: 'BNT INTERNATIONAL PTE LTD',
      name: 'BNT INTERNATIONAL PTE LTD',
      memo: 'Structural Materials',
      item: 'Unistrut',
      itemQty: 500,
      itemUnitPrice: 38.00
    },
    {
      id: 9,
      date: '5/1/2022',
      documentNumber: 'IR00090',
      vendor: 'BNT INTERNATIONAL PTE LTD',
      name: 'BNT INTERNATIONAL PTE LTD',
      memo: 'Additional Order',
      item: 'Unistrut',
      itemQty: 300,
      itemUnitPrice: 38.00
    },
    {
      id: 10,
      date: '8/1/2022',
      documentNumber: 'IR00095',
      vendor: 'LOH & SONS PAINT CO. (S) PTE. LTD',
      name: 'LOH & SONS PAINT CO. (S) PTE. LTD',
      memo: 'Marine Paint Supply',
      item: 'Galvanizing Spray',
      itemQty: 48,
      itemUnitPrice: 8.56
    },
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = (receipt) => {
    showToast(`Editing item receipt ${receipt.documentNumber}`, 'info');
  };

  const handleView = (receipt) => {
    showToast(`Viewing item receipt ${receipt.documentNumber}`, 'info');
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-box-open"></i>
          <h1>Item Receipts</h1>
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
            <option value="received">Received</option>
          </select>
          <button className="btn-edit-view">Edit View</button>
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
          TOTAL: 14210
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
            </tr>
          </thead>
          <tbody>
            {itemReceipts.map((receipt) => (
              <tr key={receipt.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button 
                      className="view-link"
                      onClick={() => handleEdit(receipt)}
                    >
                      Edit
                    </button>
                    <span style={{ color: '#999' }}>|</span>
                    <button 
                      className="view-link"
                      onClick={() => handleView(receipt)}
                    >
                      View
                    </button>
                  </div>
                </td>
                <td>*</td>
                <td>{receipt.date}</td>
                <td className="doc-number">{receipt.documentNumber}</td>
                <td>{receipt.vendor}</td>
                <td>{receipt.name}</td>
                <td>{receipt.memo}</td>
                <td>{receipt.item}</td>
                <td>{receipt.itemQty}</td>
                <td className="amount">{typeof receipt.itemUnitPrice === 'number' ? receipt.itemUnitPrice.toFixed(2) : receipt.itemUnitPrice}</td>
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

export default ViewReceiveOrders;
