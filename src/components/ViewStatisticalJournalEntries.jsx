import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewStatisticalJournalEntries = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewType, setViewType] = useState('Search Project');

  const [journals] = useState([
    {
      id: 1,
      date: '15/10/2024',
      documentNumber: 'SJ-2024-001',
      vendor: 'Tech Onshore MEP',
      name: 'Monthly Headcount Update',
      account: 'Employee Statistics',
      memo: 'October employee count',
      item: 'General UOM',
      itemQty: '150',
      itemUnitPrice: '1.00',
      amount: '150.00'
    },
    {
      id: 2,
      date: '20/10/2024',
      documentNumber: 'SJ-2024-002',
      vendor: 'Tech Marine Offshore',
      name: 'Shipyard Utilization',
      account: 'Capacity Statistics',
      memo: 'Weekly capacity tracking',
      item: 'Tonne',
      itemQty: '2500',
      itemUnitPrice: '1.00',
      amount: '2500.00'
    },
    {
      id: 3,
      date: '25/10/2024',
      documentNumber: 'SJ-2024-003',
      vendor: 'Tech Electric & Automation',
      name: 'Project Hours Tracking',
      account: 'Labor Statistics',
      memo: 'Engineering hours logged',
      item: 'General UOM',
      itemQty: '1200',
      itemUnitPrice: '1.00',
      amount: '1200.00'
    },
    {
      id: 4,
      date: '31/10/2024',
      documentNumber: 'SJ-2024-004',
      vendor: 'Tech Offshore Marine (DQ)',
      name: 'Equipment Usage',
      account: 'Asset Utilization',
      memo: 'Monthly equipment tracking',
      item: 'General UOM',
      itemQty: '85',
      itemUnitPrice: '1.00',
      amount: '85.00'
    },
    {
      id: 5,
      date: '05/11/2024',
      documentNumber: 'SJ-2024-005',
      vendor: 'Tech Onshore MEP',
      name: 'Material Consumption',
      account: 'Inventory Statistics',
      memo: 'Steel usage tracking',
      item: 'Tonne',
      itemQty: '450',
      itemUnitPrice: '1.00',
      amount: '450.00'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = (journal) => {
    if (setCurrentPage) {
      setCurrentPage('make-statistical-journal-entries');
    }
  };

  const handleView = (journal) => {
    if (setCurrentPage) {
      setCurrentPage('view-statistical-journal-entry-detail');
    }
  };

  const handleNewTransaction = () => {
    if (setCurrentPage) {
      setCurrentPage('make-statistical-journal-entries');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-file-alt" style={{ color: '#4a90e2', fontSize: '24px' }}></i>
          <h1>Statistical Journals</h1>
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
            value={viewType}
            onChange={(e) => setViewType(e.target.value)}
          >
            <option>Search Project</option>
            <option>All Journals</option>
          </select>
        </div>
        <button className="btn-new-transaction" onClick={handleNewTransaction}>
          <i className="fas fa-plus"></i> New Transaction
        </button>
      </div>

      <div className="filters-bar" style={{ background: '#f8f9fa', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', borderBottom: '1px solid #e0e0e0' }}>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <button className="btn-filters-toggle" style={{ background: 'transparent', border: 'none', fontSize: '13px', fontWeight: '600', color: '#333', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <i className="fas fa-filter"></i>
            FILTERS
          </button>
        </div>
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
          <button style={{ padding: '4px 8px', border: '1px solid #ddd', background: 'white', borderRadius: '3px' }}>EDIT</button>
          <button style={{ padding: '4px 8px', border: '1px solid #ddd', background: 'white', borderRadius: '3px' }}>
            <i className="fas fa-times"></i>
          </button>
          <span style={{ fontSize: '12px', fontWeight: '600', marginLeft: '15px' }}>TOTAL: {journals.length}</span>
        </div>
      </div>

      <div style={{ background: '#f8f9fa', padding: '10px 20px', fontSize: '12px', color: '#666', borderBottom: '1px solid #e0e0e0' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <span>QUICK SORT</span>
        </div>
      </div>

      <div className="table-container" style={{ background: 'white', overflow: 'hidden' }}>
        {journals.length > 0 ? (
          <div className="table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                  <th style={{ width: '80px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>EDIT | VIEW</th>
                  <th style={{ width: '100px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>DATE</th>
                  <th style={{ width: '120px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>DOCUMENT NUMBER</th>
                  <th style={{ width: '150px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>VENDOR</th>
                  <th style={{ width: '200px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>NAME</th>
                  <th style={{ width: '180px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>ACCOUNT</th>
                  <th style={{ width: '150px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>MEMO</th>
                  <th style={{ width: '120px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>ITEM</th>
                  <th style={{ width: '100px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>ITEM QTY</th>
                  <th style={{ width: '120px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>ITEM UNIT PRICE</th>
                  <th style={{ width: '120px', padding: '10px', textAlign: 'right', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                {journals.map((journal, index) => (
                  <tr key={journal.id} style={{ borderBottom: '1px solid #e9ecef', background: index % 2 === 0 ? 'white' : '#fafbfc' }}>
                    <td style={{ padding: '12px', whiteSpace: 'nowrap' }}>
                      <button 
                        onClick={() => handleEdit(journal)}
                        style={{ color: '#4a90e2', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', textDecoration: 'underline', padding: '0', marginRight: '4px' }}
                      >
                        Edit
                      </button>
                      <span style={{ color: '#999', margin: '0 4px' }}>|</span>
                      <button 
                        onClick={() => handleView(journal)}
                        style={{ color: '#4a90e2', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', textDecoration: 'underline', padding: '0', marginLeft: '4px' }}
                      >
                        View
                      </button>
                    </td>
                    <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{journal.date}</td>
                    <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{journal.documentNumber}</td>
                    <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{journal.vendor}</td>
                    <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{journal.name}</td>
                    <td style={{ padding: '12px', fontSize: '13px', color: '#4a90e2' }}>{journal.account}</td>
                    <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{journal.memo}</td>
                    <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{journal.item}</td>
                    <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{journal.itemQty}</td>
                    <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{journal.itemUnitPrice}</td>
                    <td style={{ padding: '12px', fontSize: '13px', color: '#333', textAlign: 'right' }}>{journal.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
            No records to show.
          </div>
        )}
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

export default ViewStatisticalJournalEntries;
