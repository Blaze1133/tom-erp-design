import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCurrencyRevaluations = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewType, setViewType] = useState('Search Project');

  const [revaluations] = useState([
    {
      id: 1,
      date: '14/10/2024',
      docNumber: '22',
      vendor: 'MECH & ELECT RESOURCES',
      name: 'MECH & ELECT RESOURCES',
      account: '59400 Rounding Gain/Loss',
      memo: 'Monthly FX Revaluation',
      item: 'Engineering Services',
      itemQty: '1',
      itemUnitPrice: '2,450.00',
      amount: '-0.01'
    },
    {
      id: 2,
      date: '14/10/2024',
      docNumber: '22',
      vendor: 'MECH & ELECT RESOURCES',
      name: 'MECH & ELECT RESOURCES',
      account: '20910 Accounts Payable : Trade Creditors',
      memo: 'Monthly FX Revaluation',
      item: 'MEP Works',
      itemQty: '1',
      itemUnitPrice: '2,450.00',
      amount: '-0.01'
    },
    {
      id: 3,
      date: '21/10/2024',
      docNumber: '14',
      vendor: 'Schlumberger Overseas S.A.',
      name: '650 Schlumberger Overseas S.A.',
      account: '59400 Rounding Gain/Loss',
      memo: 'USD Currency Adjustment',
      item: 'Offshore Services',
      itemQty: '2',
      itemUnitPrice: '5,200.00',
      amount: '-0.01'
    },
    {
      id: 4,
      date: '21/10/2024',
      docNumber: '14',
      vendor: 'Schlumberger Overseas S.A.',
      name: '650 Schlumberger Overseas S.A.',
      account: '10100 Accounts Receivable : Trade Debtors',
      memo: 'USD Currency Adjustment',
      item: 'Offshore Services',
      itemQty: '2',
      itemUnitPrice: '5,200.00',
      amount: '0.01'
    },
    {
      id: 5,
      date: '7/11/2024',
      docNumber: '5',
      vendor: 'Dowell Schlumberger Eastern Inc.',
      name: '204 Dowell Schlumberger Eastern Inc.',
      account: 'Realized Gain/Loss',
      memo: 'FX Gain on Payment',
      item: 'Technical Consultancy',
      itemQty: '1',
      itemUnitPrice: '8,500.00',
      amount: '-48.36'
    },
    {
      id: 6,
      date: '7/11/2024',
      docNumber: '5',
      vendor: 'Dowell Schlumberger Eastern Inc.',
      name: '204 Dowell Schlumberger Eastern Inc.',
      account: '10100 Accounts Receivable : Trade Debtors',
      memo: 'FX Gain on Payment',
      item: 'Technical Consultancy',
      itemQty: '1',
      itemUnitPrice: '8,500.00',
      amount: '48.36'
    },
    {
      id: 7,
      date: '17/11/2024',
      docNumber: '6',
      vendor: 'Schlumberger Oilfield (S) Pte Ltd',
      name: '649 Schlumberger Oilfield (S) Pte Ltd',
      account: 'Realized Gain/Loss',
      memo: 'Quarter End Revaluation',
      item: 'Marine Equipment',
      itemQty: '5',
      itemUnitPrice: '12,450.00',
      amount: '-1,990.21'
    },
    {
      id: 8,
      date: '17/11/2024',
      docNumber: '6',
      vendor: 'Schlumberger Oilfield (S) Pte Ltd',
      name: '649 Schlumberger Oilfield (S) Pte Ltd',
      account: '10100 Accounts Receivable : Trade Debtors',
      memo: 'Quarter End Revaluation',
      item: 'Marine Equipment',
      itemQty: '5',
      itemUnitPrice: '12,450.00',
      amount: '1,990.21'
    },
    {
      id: 9,
      date: '17/11/2024',
      docNumber: '10',
      vendor: 'Schlumberger Oilfield (S) Pte Ltd',
      name: '649 Schlumberger Oilfield (S) Pte Ltd',
      account: 'Realized Gain/Loss',
      memo: 'Invoice Payment FX',
      item: 'Shipyard Services',
      itemQty: '3',
      itemUnitPrice: '6,780.00',
      amount: '-0.19'
    },
    {
      id: 10,
      date: '17/11/2024',
      docNumber: '10',
      vendor: 'Schlumberger Oilfield (S) Pte Ltd',
      name: '649 Schlumberger Oilfield (S) Pte Ltd',
      account: '10100 Accounts Receivable : Trade Debtors',
      memo: 'Invoice Payment FX',
      item: 'Shipyard Services',
      itemQty: '3',
      itemUnitPrice: '6,780.00',
      amount: '0.19'
    },
    {
      id: 11,
      date: '23/11/2024',
      docNumber: '7',
      vendor: 'Dowell Schlumberger Eastern Inc.',
      name: '204 Dowell Schlumberger Eastern Inc.',
      account: 'Realized Gain/Loss',
      memo: 'Monthly Adjustment',
      item: 'Installation Works',
      itemQty: '2',
      itemUnitPrice: '4,250.00',
      amount: '0.97'
    },
    {
      id: 12,
      date: '23/11/2024',
      docNumber: '7',
      vendor: 'Dowell Schlumberger Eastern Inc.',
      name: '204 Dowell Schlumberger Eastern Inc.',
      account: '10100 Accounts Receivable : Trade Debtors',
      memo: 'Monthly Adjustment',
      item: 'Installation Works',
      itemQty: '2',
      itemUnitPrice: '4,250.00',
      amount: '-0.97'
    },
    {
      id: 13,
      date: '23/11/2024',
      docNumber: '17',
      vendor: 'Halliburton Singapore Pte Ltd',
      name: '319 Halliburton Singapore Pte Ltd',
      account: '59400 Rounding Gain/Loss',
      memo: 'Year End Revaluation',
      item: 'Piping Works',
      itemQty: '4',
      itemUnitPrice: '9,850.00',
      amount: '0.01'
    },
    {
      id: 14,
      date: '23/11/2024',
      docNumber: '17',
      vendor: 'Halliburton Singapore Pte Ltd',
      name: '319 Halliburton Singapore Pte Ltd',
      account: '10100 Accounts Receivable : Trade Debtors',
      memo: 'Year End Revaluation',
      item: 'Piping Works',
      itemQty: '4',
      itemUnitPrice: '9,850.00',
      amount: '-0.01'
    },
    {
      id: 15,
      date: '28/11/2024',
      docNumber: '23',
      vendor: 'Keppel Shipyard Ltd',
      name: 'Keppel Shipyard Ltd',
      account: 'Realized Gain/Loss',
      memo: 'EUR Payment Adjustment',
      item: 'Steel Fabrication',
      itemQty: '10',
      itemUnitPrice: '15,600.00',
      amount: '-125.45'
    },
    {
      id: 16,
      date: '28/11/2024',
      docNumber: '23',
      vendor: 'Keppel Shipyard Ltd',
      name: 'Keppel Shipyard Ltd',
      account: '10100 Accounts Receivable : Trade Debtors',
      memo: 'EUR Payment Adjustment',
      item: 'Steel Fabrication',
      itemQty: '10',
      itemUnitPrice: '15,600.00',
      amount: '125.45'
    },
    {
      id: 17,
      date: '30/11/2024',
      docNumber: '25',
      vendor: 'Sembcorp Marine Ltd',
      name: 'Sembcorp Marine Ltd',
      account: '59400 Rounding Gain/Loss',
      memo: 'Month End FX',
      item: 'Welding Services',
      itemQty: '6',
      itemUnitPrice: '7,890.00',
      amount: '0.02'
    },
    {
      id: 18,
      date: '30/11/2024',
      docNumber: '25',
      vendor: 'Sembcorp Marine Ltd',
      name: 'Sembcorp Marine Ltd',
      account: '20910 Accounts Payable : Trade Creditors',
      memo: 'Month End FX',
      item: 'Welding Services',
      itemQty: '6',
      itemUnitPrice: '7,890.00',
      amount: '-0.02'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = (revaluation) => {
    if (setCurrentPage) {
      setCurrentPage('edit-currency-revaluation');
    }
  };

  const handleView = (revaluation) => {
    if (setCurrentPage) {
      setCurrentPage('view-currency-revaluation-detail');
    }
  };

  const handleNewTransaction = () => {
    if (setCurrentPage) {
      setCurrentPage('revalue-open-currency-balances');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-dollar-sign" style={{ color: '#4a90e2', fontSize: '24px' }}></i>
          <h1>Currency Revaluations</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option active">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="filters-section" style={{ background: '#f8f9fa', padding: '15px 20px', marginBottom: '0' }}>
        <div className="filter-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div className="filter-group" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <label style={{ fontWeight: '500', fontSize: '13px', color: '#666' }}>VIEW:</label>
              <select 
                className="filter-select" 
                style={{ padding: '6px 12px', border: '1px solid #ddd', borderRadius: '4px' }}
                value={viewType}
                onChange={(e) => setViewType(e.target.value)}
              >
                <option>Search Project</option>
                <option>All Revaluations</option>
              </select>
            </div>
            <button className="btn-filter" style={{ padding: '6px 16px', border: '1px solid #ddd', background: 'white', borderRadius: '4px', fontSize: '13px' }}>Edit View</button>
            <button className="btn-filter-primary" onClick={handleNewTransaction} style={{ padding: '8px 20px', background: '#4a90e2', color: 'white', border: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: '500' }}>
              <i className="fas fa-plus"></i> New Transaction
            </button>
          </div>
        </div>
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
          <span style={{ fontSize: '12px', fontWeight: '600', marginLeft: '15px' }}>TOTAL: {revaluations.length}</span>
        </div>
      </div>

      <div style={{ background: '#f8f9fa', padding: '10px 20px', fontSize: '12px', color: '#666', borderBottom: '1px solid #e0e0e0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>QUICK SORT</span>
          <span>14/10/2024 — 30/11/2024</span>
        </div>
      </div>

      <div className="table-container" style={{ background: 'white', overflow: 'hidden' }}>
        <div className="table-wrapper" style={{ overflowX: 'auto' }}>
          <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                <th style={{ width: '80px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>EDIT | VIEW</th>
                <th style={{ width: '100px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>DATE</th>
                <th style={{ width: '120px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>DOCUMENT NUMBER</th>
                <th style={{ width: '150px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>VENDOR</th>
                <th style={{ width: '200px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>NAME</th>
                <th style={{ width: '250px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>ACCOUNT</th>
                <th style={{ width: '150px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>MEMO</th>
                <th style={{ width: '150px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>ITEM</th>
                <th style={{ width: '100px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>ITEM QTY</th>
                <th style={{ width: '120px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>ITEM UNIT PRICE</th>
                <th style={{ width: '120px', padding: '10px', textAlign: 'right', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {revaluations.map((revaluation, index) => (
                <tr key={revaluation.id} style={{ borderBottom: '1px solid #e9ecef', background: index % 2 === 0 ? 'white' : '#fafbfc' }}>
                  <td style={{ padding: '12px', whiteSpace: 'nowrap' }}>
                    <button 
                      onClick={() => handleEdit(revaluation)}
                      style={{ color: '#4a90e2', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', textDecoration: 'underline', padding: '0', marginRight: '4px' }}
                    >
                      Edit
                    </button>
                    <span style={{ color: '#999', margin: '0 4px' }}>|</span>
                    <button 
                      onClick={() => handleView(revaluation)}
                      style={{ color: '#4a90e2', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', textDecoration: 'underline', padding: '0', marginLeft: '4px' }}
                    >
                      View
                    </button>
                  </td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{revaluation.date}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{revaluation.docNumber}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{revaluation.vendor}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{revaluation.name}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#4a90e2' }}>{revaluation.account}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{revaluation.memo}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{revaluation.item}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{revaluation.itemQty}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{revaluation.itemUnitPrice}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333', textAlign: 'right' }}>{revaluation.amount}</td>
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

export default ViewCurrencyRevaluations;
