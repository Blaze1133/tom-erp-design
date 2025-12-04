import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewBudgets = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [budgets] = useState([
    {
      id: 1,
      account: '40000 Sales',
      year: '2025',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      department: 'Engineering',
      class: 'Material Supply',
      location: 'Singapore',
      customer: 'Pacific Marine Ltd',
      currency: 'SGD',
      amount: '125,000.00',
      category: 'Labor',
      global: 'Yes',
      item: 'Marine Equipment'
    },
    {
      id: 2,
      account: '40100 Sales : Sales',
      year: '2025',
      subsidiary: 'Tech Electric & Automation Pte Ltd',
      department: 'Operations',
      class: 'Consumable Item',
      location: 'Singapore',
      customer: 'Oceanic Engineering Pte Ltd',
      currency: 'SGD',
      amount: '85,500.00',
      category: 'Materials',
      global: 'No',
      item: 'Electrical Components'
    },
    {
      id: 3,
      account: '50100 Cost Of Sales',
      year: '2025',
      subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
      department: 'MEP',
      class: 'Material Supply',
      location: 'Malaysia',
      customer: 'Harbor Logistics Pte Ltd',
      currency: 'SGD',
      amount: '210,000.00',
      category: 'Overhead',
      global: 'Yes',
      item: 'Steel Plates'
    },
    {
      id: 4,
      account: '60200 Operating Expenses',
      year: '2025',
      subsidiary: 'Tech Offshore Marine (DQ) Pte Ltd',
      department: 'Engineering',
      class: 'Consumable Item',
      location: 'Singapore',
      customer: 'Maritime Services Corp',
      currency: 'USD',
      amount: '45,800.00',
      category: 'Labor',
      global: 'No',
      item: 'Tools & Equipment'
    },
    {
      id: 5,
      account: '41100 Other Income',
      year: '2024',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      department: 'Operations',
      class: 'Material Supply',
      location: 'Singapore',
      customer: 'Coastal Construction Pte Ltd',
      currency: 'SGD',
      amount: '95,200.00',
      category: 'Materials',
      global: 'Yes',
      item: 'Prefab Components'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = (budget) => {
    if (setCurrentPage) {
      setCurrentPage('set-up-budgets');
    }
  };

  const handleView = (budget) => {
    if (setCurrentPage) {
      setCurrentPage('set-up-budgets');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-chart-line" style={{ color: '#4a90e2', fontSize: '24px' }}></i>
          <h1>Budgets</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option active">List</button>
          <button className="btn-view-option">Search</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>VIEW:</label>
          <select className="form-control">
            <option>Default</option>
            <option>All Budgets</option>
          </select>
        </div>
        <button className="btn-new-transaction" onClick={() => setCurrentPage && setCurrentPage('set-up-budgets')}>
          <i className="fas fa-plus"></i> New Budget
        </button>
      </div>

      <div className="filters-bar" style={{ background: '#f8f9fa', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <button className="btn-filters-toggle" style={{ background: 'transparent', border: 'none', fontSize: '13px', fontWeight: '600', color: '#333', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <i className="fas fa-plus"></i>
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
          <span style={{ fontSize: '12px', fontWeight: '600', marginLeft: '15px' }}>TOTAL: {budgets.length}</span>
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
                <th style={{ width: '120px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>ACCOUNT</th>
                <th style={{ width: '100px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>YEAR</th>
                <th style={{ width: '200px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>SUBSIDIARY</th>
                <th style={{ width: '150px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>DEPARTMENT</th>
                <th style={{ width: '120px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>CLASS</th>
                <th style={{ width: '120px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>LOCATION</th>
                <th style={{ width: '150px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>CUSTOMER</th>
                <th style={{ width: '100px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>CURRENCY</th>
                <th style={{ width: '120px', padding: '10px', textAlign: 'right', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>AMOUNT</th>
                <th style={{ width: '150px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>CATEGORY</th>
                <th style={{ width: '120px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>GLOBAL</th>
                <th style={{ width: '100px', padding: '10px', textAlign: 'left', fontWeight: '600', fontSize: '11px', color: '#666', textTransform: 'uppercase' }}>ITEM</th>
              </tr>
            </thead>
            <tbody>
              {budgets.map((budget, index) => (
                <tr key={budget.id} style={{ borderBottom: '1px solid #e9ecef', background: index % 2 === 0 ? 'white' : '#fafbfc' }}>
                  <td style={{ padding: '12px', textAlign: 'center' }}>
                    <input type="checkbox" />
                  </td>
                  <td style={{ padding: '12px', whiteSpace: 'nowrap' }}>
                    <button 
                      onClick={() => handleEdit(budget)}
                      style={{ color: '#4a90e2', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', textDecoration: 'underline', padding: '0', marginRight: '4px' }}
                    >
                      Edit
                    </button>
                    <span style={{ color: '#999', margin: '0 4px' }}>|</span>
                    <button 
                      onClick={() => handleView(budget)}
                      style={{ color: '#4a90e2', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', textDecoration: 'underline', padding: '0', marginLeft: '4px' }}
                    >
                      View
                    </button>
                  </td>
                  <td style={{ padding: '12px', color: '#4a90e2', fontSize: '13px' }}>{budget.account}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{budget.year}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{budget.subsidiary}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{budget.department}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{budget.class}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{budget.location}</td>
                  <td style={{ padding: '12px', color: '#4a90e2', fontSize: '13px' }}>{budget.customer}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{budget.currency}</td>
                  <td style={{ padding: '12px', textAlign: 'right', fontWeight: '500', fontSize: '13px', color: '#333' }}>{budget.amount}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{budget.category}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{budget.global}</td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>{budget.item}</td>
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

export default ViewBudgets;
