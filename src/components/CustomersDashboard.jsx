import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const CustomersDashboard = ({ onBack }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [dateRange, setDateRange] = useState('6months');

  const summary = {
    totalCustomers: 1982,
    activeCustomers: 1435,
    totalOutstanding: 45250.0,
    totalCollectedYTD: 128500.0
  };

  const topCustomers = [
    { name: '(Pirtek Asia Pte Ltd)', outstanding: 15000.0, ytd: 52000.0, status: 'Active' },
    { name: '8 Point Engineering Pte Ltd', outstanding: 12300.0, ytd: 41000.0, status: 'Active' },
    { name: '21-0141-Sgit-Supply Of Ss316 Cable Ladders', outstanding: 7950.0, ytd: 35500.0, status: 'Active' }
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-chart-line"></i>
          <div>
            <h1>Customers Dashboard</h1>
            <div className="detail-subtitle">
              <span>Overall Customers & Projects</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={onBack}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-action">
            <i className="fas fa-download"></i>
          </button>
          <button className="btn-action">
            <i className="fas fa-print"></i>
          </button>
        </div>
      </div>

      <div className="detail-toolbar">
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#6b7280' }}>Period:</label>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="form-control"
            style={{ width: '150px' }}
          >
            <option value="1month">Last Month</option>
            <option value="3months">Last 3 Months</option>
            <option value="6months">Last 6 Months</option>
            <option value="1year">Last Year</option>
          </select>
        </div>
      </div>

      <div className="detail-content">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
          <div
            style={{
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              padding: '1.5rem'
            }}
          >
            <div style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
              Total Customers
            </div>
            <div style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1a1a1a' }}>{summary.totalCustomers.toLocaleString()}</div>
          </div>

          <div
            style={{
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              padding: '1.5rem'
            }}
          >
            <div style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
              Active Customers
            </div>
            <div style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1a1a1a' }}>{summary.activeCustomers.toLocaleString()}</div>
          </div>

          <div
            style={{
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              padding: '1.5rem'
            }}
          >
            <div style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
              Total Outstanding
            </div>
            <div style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1a1a1a' }}>${summary.totalOutstanding.toLocaleString()}</div>
          </div>

          <div
            style={{
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              padding: '1.5rem'
            }}
          >
            <div style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
              Collected (YTD)
            </div>
            <div style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1a1a1a' }}>${summary.totalCollectedYTD.toLocaleString()}</div>
          </div>
        </div>

        <div
          style={{
            background: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '6px',
            padding: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ margin: 0, fontSize: '0.9375rem', fontWeight: '600', color: '#1a1a1a' }}>Top Customers</h3>
            <button className="btn-toolbar" onClick={() => showToast('Report export coming soon', 'info')}>
              Export
            </button>
          </div>

          <table className="detail-items-table">
            <thead>
              <tr>
                <th>CUSTOMER</th>
                <th style={{ textAlign: 'right' }}>OUTSTANDING</th>
                <th style={{ textAlign: 'right' }}>COLLECTED (YTD)</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {topCustomers.map((c, idx) => (
                <tr key={idx}>
                  <td>{c.name}</td>
                  <td style={{ textAlign: 'right' }}>${c.outstanding.toLocaleString()}</td>
                  <td style={{ textAlign: 'right' }}>${c.ytd.toLocaleString()}</td>
                  <td>{c.status}</td>
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

export default CustomersDashboard;
