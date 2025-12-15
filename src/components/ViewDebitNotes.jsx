import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewDebitNotes = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');

  const [debitNotes] = useState([
    {
      id: 1,
      documentNumber: 'DN-2025-001',
      date: '14/12/2025',
      vendor: 'ABC Supplies Pte Ltd',
      name: 'Debit Note',
      memo: 'Price adjustment',
      item: 'Material',
      itemQty: 10,
      itemUnitPrice: 50.00,
      amount: 500.00
    },
    {
      id: 2,
      documentNumber: 'DN-2025-002',
      date: '13/12/2025',
      vendor: 'XYZ Trading Co',
      name: 'Debit Note',
      memo: 'Quantity variance',
      item: 'Service',
      itemQty: 5,
      itemUnitPrice: 100.00,
      amount: 500.00
    },
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewDebitNote = (debitNote) => {
    if (setCurrentPage) {
      setCurrentPage('view-debit-note-detail');
      sessionStorage.setItem('selectedDebitNote', JSON.stringify(debitNote));
    }
  };

  const handleEdit = (debitNote) => {
    if (setCurrentPage) {
      setCurrentPage('edit-debit-note');
      sessionStorage.setItem('selectedDebitNote', JSON.stringify(debitNote));
    }
  };

  const handleNewDebitNote = () => {
    if (setCurrentPage) {
      setCurrentPage('create-debit-note');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Debit Notes</h1>
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
          <select 
            className="form-control"
            value={viewFilter}
            onChange={(e) => setViewFilter(e.target.value)}
          >
            <option value="all">All Debit Notes</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
          </select>
        </div>
        <button className="btn-new-transaction" onClick={handleNewDebitNote}>
          <i className="fas fa-plus"></i> New Debit Note
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
            <option>Vendor Name</option>
            <option>Amount</option>
            <option>Document Number</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {debitNotes.length}
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th></th>
              <th>EDIT | VIEW</th>
              <th>*</th>
              <th>DATE</th>
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
            {debitNotes.map((debitNote) => (
              <tr key={debitNote.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button 
                      className="view-link"
                      onClick={() => handleEdit(debitNote)}
                    >
                      Edit
                    </button>
                    <span style={{ color: '#999' }}>|</span>
                    <button 
                      className="view-link"
                      onClick={() => handleViewDebitNote(debitNote)}
                    >
                      View
                    </button>
                  </div>
                </td>
                <td>*</td>
                <td>{debitNote.date}</td>
                <td className="doc-number">{debitNote.documentNumber}</td>
                <td>{debitNote.vendor}</td>
                <td>{debitNote.name}</td>
                <td>{debitNote.memo}</td>
                <td>{debitNote.item}</td>
                <td>{debitNote.itemQty}</td>
                <td>{debitNote.itemUnitPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                <td className="amount">{debitNote.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
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

export default ViewDebitNotes;
