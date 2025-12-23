import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewJournalEntries = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [journals] = useState([
    {
      id: 1,
      date: '15/01/2024',
      documentNumber: 'JE-2024-001',
      vendor: 'Pacific Marine Supplies',
      name: 'Oceanic Engineering Pte Ltd',
      account: '10100 Accounts Receivable',
      memo: 'Invoice Payment',
      item: 'Marine Equipment',
      itemQty: '5',
      itemUnitPrice: '1,250.00',
      amount: '6,250.00'
    },
    {
      id: 2,
      date: '18/01/2024',
      documentNumber: 'JE-2024-002',
      vendor: '',
      name: 'Singapore Shipyard Supplies',
      account: '50100 Cost of Sales',
      memo: 'Material Purchase',
      item: 'Steel Plates',
      itemQty: '100',
      itemUnitPrice: '85.00',
      amount: '8,500.00'
    },
    {
      id: 3,
      date: '22/01/2024',
      documentNumber: 'JE-2024-003',
      vendor: 'Tech Solutions Ltd',
      name: '',
      account: '60200 Operating Expenses',
      memo: 'Software License',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: '2,400.00'
    },
    {
      id: 4,
      date: '25/01/2024',
      documentNumber: 'JE-2024-004',
      vendor: '',
      name: 'Maritime Services Corp',
      account: '12000 Prepaid Expenses',
      memo: 'Insurance Premium',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: '15,000.00'
    },
    {
      id: 5,
      date: '28/01/2024',
      documentNumber: 'JE-2024-005',
      vendor: 'Global Shipping Inc',
      name: 'Harbor Logistics Pte Ltd',
      account: '20100 Accounts Payable',
      memo: 'Freight Charges',
      item: 'Shipping Container',
      itemQty: '3',
      itemUnitPrice: '3,200.00',
      amount: '-9,600.00'
    },
    {
      id: 6,
      date: '02/02/2024',
      documentNumber: 'JE-2024-006',
      vendor: '',
      name: '',
      account: '51100 Payroll Expenses',
      memo: 'January Salary',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: '-45,800.00'
    },
    {
      id: 7,
      date: '05/02/2024',
      documentNumber: 'JE-2024-007',
      vendor: 'Industrial Equipment Co',
      name: 'Precision Engineering Ltd',
      account: '15000 Fixed Assets',
      memo: 'Equipment Purchase',
      item: 'CNC Machine',
      itemQty: '1',
      itemUnitPrice: '125,000.00',
      amount: '125,000.00'
    },
    {
      id: 8,
      date: '08/02/2024',
      documentNumber: 'JE-2024-008',
      vendor: '',
      name: 'Coastal Construction Pte Ltd',
      account: '40100 Sales Revenue',
      memo: 'Project Milestone',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: '78,500.00'
    },
    {
      id: 9,
      date: '12/02/2024',
      documentNumber: 'JE-2024-009',
      vendor: 'Energy Solutions Ltd',
      name: '',
      account: '60300 Utilities',
      memo: 'Electricity Bill',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: '-3,250.00'
    },
    {
      id: 10,
      date: '15/02/2024',
      documentNumber: 'JE-2024-010',
      vendor: '',
      name: 'Metro Transport Services',
      account: '60400 Transportation',
      memo: 'Vehicle Maintenance',
      item: 'Service Parts',
      itemQty: '12',
      itemUnitPrice: '180.00',
      amount: '-2,160.00'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewJournal = (journal) => {
    if (setCurrentPage) {
      setCurrentPage('view-journal-detail');
    }
  };

  const handleEditJournal = (journal) => {
    if (setCurrentPage) {
      setCurrentPage('edit-journal-entry');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-book" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Journal Entries</h1>
        </div>
        <div className="page-actions">
          <button className="btn-view-option active">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>VIEW:</label>
          <select className="form-control">
            <option>Search Project</option>
            <option>All Journals</option>
            <option>This Month</option>
            <option>This Quarter</option>
          </select>
        </div>
        <button className="btn-new-transaction" onClick={() => setCurrentPage && setCurrentPage('make-journal-entries')}>
          <i className="fas fa-plus"></i> New Transaction
        </button>
      </div>

      <div className="list-filters">
        <div className="list-toolbar">
          <button className="toolbar-btn" title="Edit">
            <i className="fas fa-edit"></i> EDIT
          </button>
          <button className="toolbar-btn" title="Delete">
            <i className="fas fa-times"></i>
          </button>
          <button className="toolbar-btn" title="Attach">
            <i className="fas fa-paperclip"></i>
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
            <option>Amount</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {journals.length}
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
              <th>ITEM QTY</th>
              <th>ITEM UNIT PRICE</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {journals.map((journal) => (
              <tr key={journal.id}>
                <td style={{ width: '30px' }}>
                  <input type="checkbox" style={{ cursor: 'pointer' }} />
                </td>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditJournal(journal)}
                    style={{ marginRight: '4px' }}
                  >
                    Edit
                  </button>
                  <span style={{ color: '#999' }}>|</span>
                  <button 
                    className="view-link"
                    onClick={() => handleViewJournal(journal)}
                    style={{ marginLeft: '4px' }}
                  >
                    View
                  </button>
                </td>
                <td>{journal.date}</td>
                <td className="doc-number">{journal.documentNumber}</td>
                <td>{journal.vendor || '-'}</td>
                <td>{journal.name || '-'}</td>
                <td style={{ fontSize: '12px' }}>{journal.account}</td>
                <td>{journal.memo}</td>
                <td>{journal.item || '-'}</td>
                <td style={{ textAlign: 'center' }}>{journal.itemQty || '-'}</td>
                <td style={{ textAlign: 'right' }}>{journal.itemUnitPrice || '-'}</td>
                <td style={{ textAlign: 'right', fontWeight: '500' }}>
                  {journal.amount}
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

export default ViewJournalEntries;
