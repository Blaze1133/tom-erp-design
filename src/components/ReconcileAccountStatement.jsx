import React, { useState } from 'react';
import './Enquiries.css';

const ReconcileAccountStatement = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('reconcile');
  const [formData, setFormData] = useState({
    account: '',
    currency: 'SGD',
    statementEndDate: '8/31/2025',
    endingStatementBalance: '',
    searchFilter: '',
    showIncludedOnly: false
  });

  const [summaryData] = useState({
    endingStatementBalance: 0.00,
    lastReconciledBalance: 0.00,
    reconciledToThisStatement: 0.00,
    difference: 0.00
  });

  const accountOptions = [
    '11110 ALL Bank Accounts : TSV DBS SGD 072-004442-8',
    '11120 ALL Bank Accounts : TEA DBS SGD 072-004465-7',
    '11130 ALL Bank Accounts : TMO DBS SGD 072-027380-0',
    '11140 ALL Bank Accounts : MEP DBS SGD 003-906132-3',
    '11150 ALL Bank Accounts : TDQ DBS SGD 072-004177-1',
    '11160 ALL Bank Accounts : TMO MAYBANK 0-421-10-2400-6'
  ];

  const handleReconcile = () => {
    console.log('Reconciling statement:', formData);
  };

  const handleViewStatements = () => {
    setCurrentPage('reconciled-statements');
  };

  return (
    <div className="sales-quotation">
      {/* Header */}
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-balance-scale" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <div>
            <h1 style={{ margin: 0 }}>Reconcile Account Statement</h1>
          </div>
        </div>
        <div className="page-actions" style={{ display: 'flex', gap: '12px' }}>
          <button 
            style={{
              padding: '8px 24px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              minWidth: '140px'
            }}
          >
            Match Bank Data
          </button>
          <button 
            onClick={handleViewStatements}
            style={{
              padding: '8px 24px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              minWidth: '180px'
            }}
          >
            Reconciled Statements
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Reconcile Button */}
        <div style={{ marginBottom: '20px' }}>
          <button 
            onClick={handleReconcile}
            style={{
              padding: '10px 28px',
              background: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              minWidth: '120px'
            }}
          >
            Reconcile
          </button>
        </div>

        {/* Main Form */}
        <div className="form-section">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
            {/* Left Column - Form Fields */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div className="form-group">
                <label className="form-label required">ACCOUNT</label>
                <select 
                  className="form-control"
                  value={formData.account}
                  onChange={(e) => setFormData({...formData, account: e.target.value})}
                >
                  <option value="">Select Account</option>
                  {accountOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">CURRENCY</label>
                <input 
                  type="text"
                  className="form-control"
                  value={formData.currency}
                  onChange={(e) => setFormData({...formData, currency: e.target.value})}
                  disabled
                  style={{ background: '#f5f5f5' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">STATEMENT END DATE</label>
                <input 
                  type="text"
                  className="form-control"
                  value={formData.statementEndDate}
                  onChange={(e) => setFormData({...formData, statementEndDate: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label className="form-label required">ENDING STATEMENT BALANCE</label>
                <input 
                  type="text"
                  className="form-control"
                  value={formData.endingStatementBalance}
                  onChange={(e) => setFormData({...formData, endingStatementBalance: e.target.value})}
                  placeholder="0.00"
                />
              </div>
            </div>

            {/* Right Column - Summary Box */}
            <div>
              <div style={{ 
                background: '#5a6c7d', 
                padding: '10px 16px',
                borderRadius: '4px 4px 0 0',
                color: 'white',
                fontWeight: '600',
                fontSize: '13px'
              }}>
                Summary
              </div>
              <div style={{ 
                background: '#f8f9fa', 
                padding: '16px',
                border: '1px solid #dee2e6',
                borderTop: 'none',
                borderRadius: '0 0 4px 4px'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #dee2e6' }}>
                    <span style={{ fontSize: '11px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                      ENDING STATEMENT BALANCE
                    </span>
                    <span style={{ fontSize: '13px', fontWeight: '500', color: '#333' }}>
                      {summaryData.endingStatementBalance.toFixed(2)}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #dee2e6' }}>
                    <span style={{ fontSize: '11px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                      LAST RECONCILED BALANCE
                    </span>
                    <span style={{ fontSize: '13px', fontWeight: '500', color: '#333' }}>
                      {summaryData.lastReconciledBalance.toFixed(2)}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #dee2e6' }}>
                    <span style={{ fontSize: '11px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                      RECONCILED TO THIS STATEMENT
                    </span>
                    <span style={{ fontSize: '13px', fontWeight: '500', color: '#333' }}>
                      {summaryData.reconciledToThisStatement.toFixed(2)}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '6px' }}>
                    <span style={{ fontSize: '11px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.3px', fontWeight: '600' }}>
                      DIFFERENCE
                    </span>
                    <span style={{ fontSize: '13px', fontWeight: '600', color: '#333' }}>
                      {summaryData.difference.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="form-section" style={{ marginTop: '2rem' }}>
          <div style={{ 
            display: 'flex', 
            gap: '0', 
            borderBottom: '2px solid #e0e0e0',
            marginBottom: '0'
          }}>
            <button
              onClick={() => setActiveTab('review')}
              style={{
                padding: '12px 24px',
                background: activeTab === 'review' ? 'white' : '#f5f5f5',
                color: activeTab === 'review' ? '#333' : '#666',
                border: 'none',
                borderBottom: activeTab === 'review' ? '2px solid #4a90e2' : '2px solid transparent',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '14px',
                marginBottom: '-2px'
              }}
            >
              Review
            </button>
            <button
              onClick={() => setActiveTab('reconcile')}
              style={{
                padding: '12px 24px',
                background: activeTab === 'reconcile' ? 'white' : '#f5f5f5',
                color: activeTab === 'reconcile' ? '#333' : '#666',
                border: 'none',
                borderBottom: activeTab === 'reconcile' ? '2px solid #4a90e2' : '2px solid transparent',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '14px',
                marginBottom: '-2px'
              }}
            >
              Reconcile
            </button>
          </div>

          <div style={{ padding: '20px', background: 'white', border: '1px solid #e0e0e0', borderTop: 'none' }}>
            {activeTab === 'reconcile' && (
              <div>
                <p style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>
                  NetSuite includes all cleared transactions by default, unless you exclude any transactions.
                </p>

                {/* Search and Filter */}
                <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', alignItems: 'center' }}>
                  <select 
                    className="form-control"
                    style={{ maxWidth: '200px' }}
                  >
                    <option>All</option>
                    <option>Deposits</option>
                    <option>Checks</option>
                    <option>Transfers</option>
                  </select>
                  <input 
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    value={formData.searchFilter}
                    onChange={(e) => setFormData({...formData, searchFilter: e.target.value})}
                    style={{ maxWidth: '300px' }}
                  />
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#333', margin: 0 }}>
                    <input 
                      type="checkbox"
                      checked={formData.showIncludedOnly}
                      onChange={(e) => setFormData({...formData, showIncludedOnly: e.target.checked})}
                      style={{ width: '18px', height: '18px' }}
                    />
                    Show Included Only
                  </label>
                </div>

                {/* Date Range */}
                <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', color: '#666' }}>From</span>
                  <input 
                    type="text"
                    className="form-control"
                    style={{ maxWidth: '150px' }}
                    placeholder="mm/dd/yyyy"
                  />
                  <span style={{ fontSize: '13px', color: '#666' }}>To</span>
                  <input 
                    type="text"
                    className="form-control"
                    style={{ maxWidth: '150px' }}
                    placeholder="mm/dd/yyyy"
                  />
                </div>

                {/* Table */}
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ 
                    width: '100%', 
                    borderCollapse: 'collapse',
                    fontSize: '13px'
                  }}>
                    <thead>
                      <tr style={{ background: '#f5f5f5', borderBottom: '2px solid #dee2e6' }}>
                        <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px' }}>
                          MATCH GROUP
                        </th>
                        <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px' }}>DATE</th>
                        <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px' }}>TYPE</th>
                        <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px' }}>TRAN NO.</th>
                        <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px' }}>NAME</th>
                        <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px' }}>MEMO</th>
                        <th style={{ padding: '12px', textAlign: 'right', fontWeight: '600', color: '#495057', fontSize: '11px' }}>AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="7" style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
                          No transactions to display. Select an account to begin reconciliation.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'review' && (
              <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
                Review section - No data to display
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReconcileAccountStatement;
