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
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-exchange-alt" style={{ color: '#4a90e2', fontSize: '24px' }}></i>
          <h1>Advanced Intercompany Journals</h1>
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
          <select className="form-control">
            <option>Search Project</option>
            <option>All Journals</option>
          </select>
        </div>
        <button className="btn-new-transaction" onClick={() => setCurrentPage && setCurrentPage('make-advanced-intercompany-journal-entries')}>
          <i className="fas fa-plus"></i> New Transaction
        </button>
      </div>

      <div className="filters-bar" style={{ background: '#f8f9fa', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <button className="btn-filters-toggle" style={{ background: 'transparent', border: 'none', fontSize: '13px', fontWeight: '600', color: '#333', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <i className="fas fa-caret-down"></i>
          FILTERS
        </button>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button style={{ padding: '4px 8px', border: '1px solid #ddd', background: 'white', borderRadius: '3px' }}>
            <i className="fas fa-download"></i>
          </button>
          <button style={{ padding: '4px 8px', border: '1px solid #ddd', background: 'white', borderRadius: '3px' }}>
            <i className="fas fa-file-pdf"></i>
          </button>
          <button style={{ padding: '4px 8px', border: '1px solid #ddd', background: 'white', borderRadius: '3px' }}>
            <i className="fas fa-print"></i>
          </button>
          <button style={{ padding: '4px 8px', border: '1px solid #ddd', background: 'white', borderRadius: '3px', fontSize: '12px' }}>Edit</button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '15px' }}>
            <span style={{ fontSize: '12px', color: '#666', fontWeight: '500' }}>QUICK SORT</span>
            <select style={{ padding: '4px 8px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '12px' }}>
              <option>Date</option>
              <option>Document Number</option>
            </select>
            <span style={{ fontSize: '12px', color: '#666' }}>9/12/2021 — 1/3/2022</span>
            <button style={{ padding: '4px 8px', border: '1px solid #ddd', background: 'white', borderRadius: '3px' }}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button style={{ padding: '4px 8px', border: '1px solid #ddd', background: 'white', borderRadius: '3px' }}>
              <i className="fas fa-chevron-right"></i>
            </button>
            <span style={{ fontSize: '12px', fontWeight: '600' }}>TOTAL: 783</span>
          </div>
        </div>
      </div>

      <div className="table-container" style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div className="table-wrapper" style={{ overflowX: 'auto' }}>
          <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                <th style={{ width: '40px', padding: '10px', textAlign: 'center' }}>
                  <input type="checkbox" />
                </th>
                <th style={{ width: '100px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>EDIT | VIEW</th>
                <th style={{ width: '100px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>
                  <span style={{ marginRight: '5px' }}>*</span>
                  DATE <i className="fas fa-caret-up" style={{ fontSize: '10px', marginLeft: '3px' }}></i>
                </th>
                <th style={{ width: '130px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>DOCUMENT NUMBER</th>
                <th style={{ width: '120px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>VENDOR</th>
                <th style={{ width: '200px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>NAME</th>
                <th style={{ width: '250px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>ACCOUNT</th>
                <th style={{ width: '150px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>MEMO</th>
                <th style={{ width: '100px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>ITEM</th>
                <th style={{ width: '80px', padding: '10px', textAlign: 'center', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>ITEM QTY</th>
                <th style={{ width: '110px', padding: '10px', textAlign: 'right', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>ITEM UNIT PRICE</th>
                <th style={{ width: '110px', padding: '10px', textAlign: 'right', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {journals.map((journal, index) => (
                <tr key={journal.id} style={{ borderBottom: '1px solid #e9ecef', background: index % 2 === 0 ? 'white' : '#fafbfc' }}>
                  <td style={{ padding: '12px', textAlign: 'center' }}>
                    <input type="checkbox" />
                  </td>
                  <td style={{ padding: '12px', whiteSpace: 'nowrap' }}>
                    <button 
                      className="action-link"
                      onClick={() => handleEditJournal(journal)}
                      style={{ color: '#4a90e2', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', textDecoration: 'underline', padding: '0', marginRight: '4px' }}
                    >
                      Edit
                    </button>
                    <span style={{ color: '#999', margin: '0 4px' }}>|</span>
                    <button 
                      className="action-link"
                      onClick={() => handleViewJournal(journal)}
                      style={{ color: '#4a90e2', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', textDecoration: 'underline', padding: '0', marginLeft: '4px' }}
                    >
                      View
                    </button>
                  </td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{journal.date}</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ color: '#4a90e2', fontWeight: '500', fontSize: '13px' }}>{journal.documentNumber}</span>
                  </td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{journal.vendor}</td>
                  <td style={{ padding: '12px', color: '#4a90e2', fontWeight: '400', fontSize: '13px' }}>{journal.name}</td>
                  <td style={{ padding: '12px', color: '#4a90e2', fontSize: '13px' }}>{journal.account}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{journal.memo}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{journal.item}</td>
                  <td style={{ padding: '12px', textAlign: 'center', fontSize: '13px', color: '#333' }}>{journal.itemQty}</td>
                  <td style={{ padding: '12px', textAlign: 'right', fontSize: '13px', color: '#333' }}>{journal.itemUnitPrice}</td>
                  <td style={{ padding: '12px', textAlign: 'right', fontWeight: '500', fontSize: '13px', color: '#333' }}>
                    {journal.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
