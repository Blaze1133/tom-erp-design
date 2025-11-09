import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewReturnAuthorizations = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Vendor Bills');

  const [returnAuths] = useState([
    {
      id: 1,
      orderType: 'Return Authorization',
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd.',
      date: '15/10/2024',
      asOfDate: 'Oct 2024',
      period: 'Oct 2024',
      taxPeriod: 'Oct 2024',
      documentNumber: 'RMA-2024-001',
      name: '100 Baroid Surface Solutions',
      amountNetOfTax: '5,250.00',
      taxTotal: '367.50',
      amount: '5,617.50',
      memo: 'Defective parts return',
      status: 'Pending Approval',
      materialSpecification: 'Standard',
      approvalStatus: 'Pending'
    },
    {
      id: 2,
      orderType: 'Return Authorization',
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd.',
      date: '18/10/2024',
      asOfDate: 'Oct 2024',
      period: 'Oct 2024',
      taxPeriod: 'Oct 2024',
      documentNumber: 'RMA-2024-002',
      name: '1000 TEAM LEAD CONSTRUCTION PTE LTD',
      amountNetOfTax: '12,800.00',
      taxTotal: '896.00',
      amount: '13,696.00',
      memo: 'Wrong specifications',
      status: 'Approved',
      materialSpecification: 'Custom',
      approvalStatus: 'Approved'
    },
    {
      id: 3,
      orderType: 'Return Authorization',
      subsidiary: 'TOM Offshore Marine Engineering Pte Ltd',
      date: '22/10/2024',
      asOfDate: 'Oct 2024',
      period: 'Oct 2024',
      taxPeriod: 'Oct 2024',
      documentNumber: 'RMA-2024-003',
      name: '1002 TECH MARINE OFFSHORE (S) PTE LTD',
      amountNetOfTax: '8,450.00',
      taxTotal: '591.50',
      amount: '9,041.50',
      memo: 'Quality issues',
      status: 'Pending Approval',
      materialSpecification: 'Standard',
      approvalStatus: 'Pending'
    },
    {
      id: 4,
      orderType: 'Return Authorization',
      subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd.',
      date: '25/10/2024',
      asOfDate: 'Oct 2024',
      period: 'Oct 2024',
      taxPeriod: 'Oct 2024',
      documentNumber: 'RMA-2024-004',
      name: 'TOM22-00733 TECH ONSHORE MEP-PREFABRICATORS',
      amountNetOfTax: '15,600.00',
      taxTotal: '1,092.00',
      amount: '16,692.00',
      memo: 'Damaged during delivery',
      status: 'Approved',
      materialSpecification: 'Premium',
      approvalStatus: 'Approved'
    },
    {
      id: 5,
      orderType: 'Return Authorization',
      subsidiary: 'TOM Shipyard Pte Ltd',
      date: '28/10/2024',
      asOfDate: 'Oct 2024',
      period: 'Oct 2024',
      taxPeriod: 'Oct 2024',
      documentNumber: 'RMA-2024-005',
      name: '1001 TECH ONSHORE MEP-PREFABRICATORS PTE LTD',
      amountNetOfTax: '6,750.00',
      taxTotal: '472.50',
      amount: '7,222.50',
      memo: 'Incorrect quantity shipped',
      status: 'Pending Approval',
      materialSpecification: 'Standard',
      approvalStatus: 'Pending'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleNew = () => {
    setCurrentPage('issue-return-authorizations');
  };

  const handleView = (authId) => {
    setCurrentPage('view-return-authorization-detail');
    sessionStorage.setItem('selectedReturnAuth', authId);
  };

  const handleEdit = (authId) => {
    setCurrentPage('edit-return-authorization');
    sessionStorage.setItem('selectedReturnAuth', authId);
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-undo"></i>
          <h1>Return Authorizations</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>VIEW</label>
          <select 
            value={viewFilter}
            onChange={(e) => setViewFilter(e.target.value)}
            className="form-control"
            style={{ width: '250px' }}
          >
            <option value="Vendor Bills">Vendor Bills</option>
            <option value="All Returns">All Returns</option>
            <option value="Pending Approval">Pending Approval</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNew}>
            <i className="fas fa-plus"></i>
            New Transaction
          </button>
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button className="btn-icon" title="Edit View">
            <i className="fas fa-edit"></i>
            <span>EDIT</span>
          </button>
          <button className="btn-icon" title="Delete">
            <i className="fas fa-times"></i>
          </button>
          <button className="btn-icon" title="Export">
            <i className="fas fa-file-export"></i>
          </button>
          <button className="btn-icon" title="Print">
            <i className="fas fa-print"></i>
          </button>
        </div>
        <div className="filter-right-group">
          <div className="quick-sort">
            <label>QUICK SORT</label>
            <select className="form-control">
              <option>15/10/2024 — 28/10/2024</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {returnAuths.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '100px' }}>EDIT | VIEW</th>
              <th>ORDER TYPE</th>
              <th>SUBSIDIARY</th>
              <th>DATE</th>
              <th>AS-OF DATE</th>
              <th>PERIOD</th>
              <th>TAX PERIOD</th>
              <th>DOCUMENT NUMBER</th>
              <th>NAME</th>
              <th style={{ textAlign: 'right' }}>AMOUNT (NET OF TAX)</th>
              <th style={{ textAlign: 'right' }}>TAX TOTAL</th>
              <th style={{ textAlign: 'right' }}>AMOUNT</th>
              <th>MEMO</th>
              <th>STATUS</th>
              <th>MATERIAL SPECIFICATION</th>
              <th>APPROVAL STATUS</th>
            </tr>
          </thead>
          <tbody>
            {returnAuths.map((auth) => (
              <tr key={auth.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEdit(auth.id)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleView(auth.id)}
                  >
                    View
                  </button>
                </td>
                <td>{auth.orderType}</td>
                <td style={{ fontSize: '0.85rem' }}>{auth.subsidiary}</td>
                <td>{auth.date}</td>
                <td>{auth.asOfDate}</td>
                <td>{auth.period}</td>
                <td>{auth.taxPeriod}</td>
                <td style={{ color: 'var(--blue-accent)', fontWeight: '500' }}>
                  {auth.documentNumber}
                </td>
                <td>{auth.name}</td>
                <td className="amount">{auth.amountNetOfTax}</td>
                <td className="amount">{auth.taxTotal}</td>
                <td className="amount">{auth.amount}</td>
                <td style={{ color: '#666' }}>{auth.memo}</td>
                <td>
                  <span style={{ 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    fontSize: '0.75rem',
                    background: auth.status === 'Approved' ? '#d4edda' : '#fff3cd',
                    color: auth.status === 'Approved' ? '#155724' : '#856404'
                  }}>
                    {auth.status}
                  </span>
                </td>
                <td>{auth.materialSpecification}</td>
                <td>{auth.approvalStatus}</td>
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

export default ViewReturnAuthorizations;
