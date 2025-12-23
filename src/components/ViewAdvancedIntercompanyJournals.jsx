import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewAdvancedIntercompanyJournals = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [journals] = useState([
    {
      id: 1,
      date: '9/12/2021',
      documentNumber: 'J48',
      vendor: '',
      name: 'CUTECH HOLDING SERVICES PTE LTD',
      account: '11130 ALL Bank Accounts : MEP DBS SGD 003-908132-3',
      memo: '',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: '-4,288.56'
    },
    {
      id: 2,
      date: '22/12/2021',
      documentNumber: 'J37',
      vendor: '',
      name: 'ACUMEN MEDICAL PTE LTD',
      account: '11140 ALL Bank Accounts : MEP DBS SGD 003-908132-3',
      memo: 'OCT 2021 INV',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: '-429.63'
    },
    {
      id: 3,
      date: '31/12/2021',
      documentNumber: 'J144',
      vendor: '',
      name: 'TECH OFFSHORE MARINE (DQ) PTE LTD',
      account: '40210 Intercompany Revenue',
      memo: 'HRP 085 TO CONTRACT',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: '600,000.00'
    },
    {
      id: 4,
      date: '3/1/2022',
      documentNumber: 'J100',
      vendor: '',
      name: 'Tech Offshore Marine (SV) Pte Ltd',
      account: '23400 Intercompany Payable : Amt Due To Subsidiary Trade : Amount Due to TSV',
      memo: 'MEP 085 TO TSV',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: '-20,000.00'
    },
    {
      id: 5,
      date: '3/1/2022',
      documentNumber: 'J101',
      vendor: '',
      name: 'TECH OFFSHORE MARINE (DQ) PTE LTD',
      account: '14240 Intercompany Receivable : Amt Due From Subsidiary : Amt Due From TDQ',
      memo: 'MEP 085 TO TDQ DBS',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: '28,000.00'
    },
    {
      id: 6,
      date: '3/1/2022',
      documentNumber: 'J102',
      vendor: '',
      name: 'TECH ELECTRIC & AUTOMATION PTE LTD',
      account: '14240 Intercompany Receivable : Amt Due From Subsidiary : Amt Due From TEA',
      memo: 'MEP 085 TO TEA DBS',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: '-42,000.00'
    },
    {
      id: 7,
      date: '3/1/2022',
      documentNumber: 'J103',
      vendor: '',
      name: 'TECH MARINE OFFSHORE (S) PTE LTD',
      account: '14245 Intercompany Receivable : Amt Due From Subsidiary : Amt Due From TMO',
      memo: 'MEP 085 TO TMO DBS',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: '18,000.00'
    },
    {
      id: 8,
      date: '9/1/2022',
      documentNumber: 'J261',
      vendor: '',
      name: 'EVYWELL OILFIELD ENGINEERING PTE LTD',
      account: '20010 Accounts Payable : Trade Creditors',
      memo: 'CINZ111410 2021 INV EVYWELL',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: '-10,700.00'
    },
    {
      id: 9,
      date: '7/1/2022',
      documentNumber: 'J289',
      vendor: '',
      name: '206 Ong Aloys Trading Pte Ltd',
      account: '14240 Intercompany Receivable : Amt Due From Subsidiary : Amt Due From TDQ',
      memo: 'MEP 085 TO TDQ DBS',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: '-3,623.08'
    },
    {
      id: 10,
      date: '8/1/2022',
      documentNumber: 'J164',
      vendor: '',
      name: 'TECH OFFSHORE MARINE (DQ) PTE LTD',
      account: '14240 Intercompany Receivable : Amt Due From Subsidiary : Amt Due From TDQ',
      memo: 'MEP 085 TO TDQ DBS',
      item: '',
      itemQty: '',
      itemUnitPrice: '',
      amount: '44,000.00'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewJournal = (journal) => {
    if (setCurrentPage) {
      setCurrentPage('view-advanced-intercompany-journal-detail');
    }
  };

  const handleEditJournal = (journal) => {
    if (setCurrentPage) {
      setCurrentPage('edit-advanced-intercompany-journal');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-exchange-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Advanced Intercompany Journals</h1>
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
        <button className="btn-new-transaction" onClick={() => setCurrentPage && setCurrentPage('make-advanced-intercompany-journal-entries')}>
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
                <td>{journal.memo || '-'}</td>
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

export default ViewAdvancedIntercompanyJournals;
