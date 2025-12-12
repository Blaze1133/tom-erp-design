import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewInvoices = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');

  const [invoices] = useState([
    {
      id: 1,
      date: '15/01/2024',
      documentNumber: 'INV-2024-001',
      vendor: 'Pacific Shipping Ltd',
      name: 'Marine Equipment Supply - Q1 2024',
      account: '10100 Accounts Receivable : Trade Debtors',
      memo: 'Project No: PSL-2024-001',
      item: 'Marine Equipment',
      itemQty: 5,
      itemUnitPrice: 8500.00,
      amount: 42500.00
    },
    {
      id: 2,
      date: '15/01/2024',
      documentNumber: 'INV-2024-001',
      vendor: 'Pacific Shipping Ltd',
      name: 'Tax on Marine Equipment Supply',
      account: '21510 GST on Sales SG',
      memo: 'GST 9%',
      item: 'VAT',
      itemQty: 1,
      itemUnitPrice: 3825.00,
      amount: 3825.00
    },
    {
      id: 3,
      date: '22/01/2024',
      documentNumber: 'INV-2024-002',
      vendor: 'Oceanic Engineering Pte Ltd',
      name: 'Offshore Platform Parts Delivery',
      account: '10100 Accounts Receivable : Trade Debtors',
      memo: 'Project No: OEP-2024-003',
      item: 'Platform Parts',
      itemQty: 12,
      itemUnitPrice: 6200.00,
      amount: 74400.00
    },
    {
      id: 4,
      date: '22/01/2024',
      documentNumber: 'INV-2024-002',
      vendor: 'Oceanic Engineering Pte Ltd',
      name: 'Tax on Platform Parts',
      account: '21510 GST on Sales SG',
      memo: 'GST 9%',
      item: 'VAT',
      itemQty: 1,
      itemUnitPrice: 6696.00,
      amount: 6696.00
    },
    {
      id: 5,
      date: '05/02/2024',
      documentNumber: 'INV-2024-003',
      vendor: 'Marine Construction Co',
      name: 'Fabrication Services Contract',
      account: '10100 Accounts Receivable : Trade Debtors',
      memo: 'Project No: MCC-2024-007',
      item: 'Fabrication Services',
      itemQty: 1,
      itemUnitPrice: 125000.00,
      amount: 125000.00
    },
    {
      id: 6,
      date: '05/02/2024',
      documentNumber: 'INV-2024-003',
      vendor: 'Marine Construction Co',
      name: 'Tax on Fabrication Services',
      account: '21510 GST on Sales SG',
      memo: 'GST 9%',
      item: 'VAT',
      itemQty: 1,
      itemUnitPrice: 11250.00,
      amount: 11250.00
    },
    {
      id: 7,
      date: '18/02/2024',
      documentNumber: 'INV-2024-004',
      vendor: 'Tech Onshore MEP Prefabricators',
      name: 'HVAC System Installation',
      account: '10100 Accounts Receivable : Trade Debtors',
      memo: 'Project No: TOM-2024-012',
      item: 'HVAC Installation',
      itemQty: 3,
      itemUnitPrice: 18500.00,
      amount: 55500.00
    },
    {
      id: 8,
      date: '28/02/2024',
      documentNumber: 'INV-2024-005',
      vendor: 'Singapore Shipyard Services',
      name: 'Hull Repair and Maintenance',
      account: '10100 Accounts Receivable : Trade Debtors',
      memo: 'Project No: SSS-2024-015',
      item: 'Hull Repair',
      itemQty: 8,
      itemUnitPrice: 9800.00,
      amount: 78400.00
    },
    {
      id: 9,
      date: '10/03/2024',
      documentNumber: 'INV-2024-006',
      vendor: 'Asia Marine Solutions',
      name: 'Piping Modification Works',
      account: '10100 Accounts Receivable : Trade Debtors',
      memo: 'Project No: AMS-2024-018',
      item: 'Piping Modification',
      itemQty: 6,
      itemUnitPrice: 12300.00,
      amount: 73800.00
    },
    {
      id: 10,
      date: '25/03/2024',
      documentNumber: 'INV-2024-007',
      vendor: 'Global Offshore Engineering',
      name: 'Structural Steel Supply',
      account: '10100 Accounts Receivable : Trade Debtors',
      memo: 'Project No: GOE-2024-021',
      item: 'Structural Steel',
      itemQty: 15,
      itemUnitPrice: 5600.00,
      amount: 84000.00
    },
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = (invoice) => {
    if (setCurrentPage) {
      setCurrentPage('edit-invoice');
    }
  };

  const handleView = (invoice) => {
    if (setCurrentPage) {
      setCurrentPage('view-invoice-detail');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-file-invoice"></i>
          <h1>Invoices</h1>
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
            <option value="paid">Paid</option>
            <option value="overdue">Overdue</option>
          </select>
          <button className="btn-edit-view">Edit View</button>
        </div>
        <button className="btn-new-enquiry" onClick={() => setCurrentPage('create-invoice')}>
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
            <option>Amount</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {invoices.length}
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
              <th>ACCOUNT</th>
              <th>MEMO</th>
              <th>ITEM</th>
              <th>ITEM QTY</th>
              <th>ITEM UNIT PRICE</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button 
                      className="view-link"
                      onClick={() => handleEdit(invoice)}
                    >
                      Edit
                    </button>
                    <span style={{ color: '#999' }}>|</span>
                    <button 
                      className="view-link"
                      onClick={() => handleView(invoice)}
                    >
                      View
                    </button>
                  </div>
                </td>
                <td>*</td>
                <td>{invoice.date}</td>
                <td className="doc-number">{invoice.documentNumber}</td>
                <td>{invoice.vendor}</td>
                <td>{invoice.name}</td>
                <td>{invoice.account}</td>
                <td>{invoice.memo}</td>
                <td>{invoice.item}</td>
                <td>{invoice.itemQty}</td>
                <td className="amount">{invoice.itemUnitPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                <td className="amount">{invoice.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
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

export default ViewInvoices;
