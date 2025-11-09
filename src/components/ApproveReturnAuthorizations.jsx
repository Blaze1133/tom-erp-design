import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ApproveReturnAuthorizations = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [amount, setAmount] = useState('0.00');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [dateFilter, setDateFilter] = useState('All');

  const [returnAuths, setReturnAuths] = useState([
    {
      id: 1,
      selected: false,
      date: '15/10/2024',
      return: 'RMA-2024-001',
      customerProjectName: '100 Baroid Surface Solutions, Halliburton Energy Services Inc',
      memo: 'Defective parts return',
      returnTotal: '5,617.50',
      currency: 'SGD'
    },
    {
      id: 2,
      selected: false,
      date: '18/10/2024',
      return: 'RMA-2024-002',
      customerProjectName: '1000 TEAM LEAD CONSTRUCTION PTE LTD',
      memo: 'Wrong specifications',
      returnTotal: '13,696.00',
      currency: 'SGD'
    },
    {
      id: 3,
      selected: false,
      date: '22/10/2024',
      return: 'RMA-2024-003',
      customerProjectName: '1002 TECH MARINE OFFSHORE (S) PTE LTD',
      memo: 'Quality issues',
      returnTotal: '9,041.50',
      currency: 'SGD'
    },
    {
      id: 4,
      selected: false,
      date: '25/10/2024',
      return: 'RMA-2024-004',
      customerProjectName: 'TOM22-00733 TECH ONSHORE MEP-PREFABRICATORS PTE LTD : 25-00010-TOM-Riser Concept',
      memo: 'Damaged during delivery',
      returnTotal: '16,692.00',
      currency: 'SGD'
    },
    {
      id: 5,
      selected: false,
      date: '28/10/2024',
      return: 'RMA-2024-005',
      customerProjectName: '1001 TECH ONSHORE MEP-PREFABRICATORS PTE LTD',
      memo: 'Incorrect quantity shipped',
      returnTotal: '7,222.50',
      currency: 'SGD'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleToggleSelect = (id) => {
    setReturnAuths(returnAuths.map(auth => 
      auth.id === id ? { ...auth, selected: !auth.selected } : auth
    ));
  };

  const handleMarkAll = () => {
    setReturnAuths(returnAuths.map(auth => ({ ...auth, selected: true })));
    showToast('All return authorizations marked', 'info');
  };

  const handleUnmarkAll = () => {
    setReturnAuths(returnAuths.map(auth => ({ ...auth, selected: false })));
    showToast('All return authorizations unmarked', 'info');
  };

  const handleSubmit = () => {
    const selectedAuths = returnAuths.filter(auth => auth.selected);
    if (selectedAuths.length === 0) {
      showToast('Please select at least one return authorization to approve', 'error');
      return;
    }
    showToast(`${selectedAuths.length} return authorization(s) approved successfully!`, 'success');
    // Remove approved items from list
    setReturnAuths(returnAuths.filter(auth => !auth.selected));
  };

  const handleCustomize = () => {
    showToast('Customize view coming soon', 'info');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-check-circle" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Approve Return Authorizations</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={() => showToast('More options coming soon', 'info')}>
            More
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Filter Section */}
        <div style={{ background: 'white', padding: '1.5rem', marginBottom: '1rem', border: '1px solid #e0e0e0' }}>
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem' }}>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
            <button className="btn btn-secondary" onClick={handleMarkAll}>
              Mark All
            </button>
            <button className="btn btn-secondary" onClick={handleUnmarkAll}>
              Unmark All
            </button>
          </div>

          <div className="form-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label">AMOUNT</label>
              <input 
                type="text" 
                className="form-control"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">DATE</label>
              <select 
                className="form-control"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Today">Today</option>
                <option value="This Week">This Week</option>
                <option value="This Month">This Month</option>
                <option value="Custom">Custom Range</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">FROM</label>
              <input 
                type="text" 
                className="form-control"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                placeholder="dd/mm/yyyy"
              />
            </div>

            <div className="form-group">
              <label className="form-label">TO</label>
              <input 
                type="text" 
                className="form-control"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                placeholder="dd/mm/yyyy"
              />
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div style={{ background: 'white', border: '1px solid #e0e0e0' }}>
          <div style={{ 
            padding: '1rem', 
            borderBottom: '1px solid #e0e0e0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <button 
              className="btn btn-secondary" 
              onClick={handleCustomize}
              style={{ fontSize: '0.875rem' }}
            >
              Customize
            </button>
          </div>

          <div className="items-table-wrapper">
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th style={{ width: '40px' }}></th>
                  <th>DATE ▼</th>
                  <th>RETURN #</th>
                  <th>CUSTOMER : PROJECT NAME</th>
                  <th>MEMO</th>
                  <th style={{ textAlign: 'right' }}>RETURN TOTAL</th>
                  <th>CURRENCY</th>
                </tr>
              </thead>
              <tbody>
                {returnAuths.length === 0 ? (
                  <tr>
                    <td colSpan="7" style={{ textAlign: 'center', padding: '3rem', color: '#999' }}>
                      No records to show.
                    </td>
                  </tr>
                ) : (
                  returnAuths.map((auth) => (
                    <tr key={auth.id}>
                      <td style={{ textAlign: 'center' }}>
                        <input 
                          type="checkbox" 
                          checked={auth.selected}
                          onChange={() => handleToggleSelect(auth.id)}
                          style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                        />
                      </td>
                      <td>{auth.date}</td>
                      <td style={{ color: 'var(--blue-accent)', fontWeight: '500' }}>
                        {auth.return}
                      </td>
                      <td>{auth.customerProjectName}</td>
                      <td style={{ color: '#666' }}>{auth.memo}</td>
                      <td className="amount">{auth.returnTotal}</td>
                      <td>{auth.currency}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Bottom Action Buttons */}
          <div style={{ 
            padding: '1.5rem', 
            borderTop: '1px solid #e0e0e0',
            display: 'flex',
            gap: '1rem'
          }}>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
            <button className="btn btn-secondary" onClick={handleMarkAll}>
              Mark All
            </button>
            <button className="btn btn-secondary" onClick={handleUnmarkAll}>
              Unmark All
            </button>
          </div>
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

export default ApproveReturnAuthorizations;
