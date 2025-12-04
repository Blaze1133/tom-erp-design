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
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-book" style={{ color: '#4a90e2', fontSize: '24px' }}></i>
          <h1>Journals</h1>
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
        <button className="btn-new-transaction" onClick={() => setCurrentPage && setCurrentPage('make-journal-entries')}>
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
            <span style={{ fontSize: '12px', color: '#666' }}>1/2/2021 — 23/12/2021</span>
            <button style={{ padding: '4px 8px', border: '1px solid #ddd', background: 'white', borderRadius: '3px' }}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button style={{ padding: '4px 8px', border: '1px solid #ddd', background: 'white', borderRadius: '3px' }}>
              <i className="fas fa-chevron-right"></i>
            </button>
            <span style={{ fontSize: '12px', fontWeight: '600' }}>TOTAL: 885</span>
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

export default ViewJournalEntries;
