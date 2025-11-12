import React, { useState } from 'react';
import Toast from './Toast';

const ManageAccountingPeriods = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [showInactives, setShowInactives] = useState(false);
  const [expandedYears, setExpandedYears] = useState(['FY 2024']);
  const [selectedPeriod, setSelectedPeriod] = useState(null);

  const periods = [
    {
      year: 'FY 2020',
      quarters: []
    },
    {
      year: 'FY 2021',
      quarters: []
    },
    {
      year: 'FY 2022',
      quarters: []
    },
    {
      year: 'FY 2023',
      quarters: []
    },
    {
      year: 'FY 2024',
      quarters: [
        {
          name: 'Q1 2024',
          months: [
            { name: 'Jan 2024', periodClose: true, apTransactions: true, arTransactions: true, allGLTransactions: true },
            { name: 'Feb 2024', periodClose: true, apTransactions: true, arTransactions: true, allGLTransactions: true },
            { name: 'Mar 2024', periodClose: true, apTransactions: true, arTransactions: true, allGLTransactions: true }
          ]
        },
        {
          name: 'Q2 2024',
          months: [
            { name: 'Apr 2024', periodClose: true, apTransactions: true, arTransactions: true, allGLTransactions: true },
            { name: 'May 2024', periodClose: true, apTransactions: true, arTransactions: true, allGLTransactions: true },
            { name: 'Jun 2024', periodClose: true, apTransactions: true, arTransactions: true, allGLTransactions: true }
          ]
        },
        {
          name: 'Q3 2024',
          months: [
            { name: 'Jul 2024', periodClose: true, apTransactions: true, arTransactions: true, allGLTransactions: true },
            { name: 'Aug 2024', periodClose: true, apTransactions: true, arTransactions: true, allGLTransactions: true },
            { name: 'Sep 2024', periodClose: true, apTransactions: true, arTransactions: true, allGLTransactions: true }
          ]
        },
        {
          name: 'Q4 2024',
          months: [
            { name: 'Oct 2024', periodClose: true, apTransactions: true, arTransactions: true, allGLTransactions: true },
            { name: 'Nov 2024', periodClose: true, apTransactions: true, arTransactions: true, allGLTransactions: true },
            { name: 'Dec 2024', periodClose: true, apTransactions: true, arTransactions: true, allGLTransactions: true }
          ]
        }
      ]
    }
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const toggleYear = (year) => {
    setExpandedYears(prev => 
      prev.includes(year) 
        ? prev.filter(y => y !== year)
        : [...prev, year]
    );
  };

  const handlePeriodClick = (monthName) => {
    setSelectedPeriod(monthName);
  };

  const handleClosePeriod = () => {
    setSelectedPeriod(null);
  };

  const handleSetupFullYear = () => {
    showToast('Set Up Full Year clicked', 'info');
  };

  const handleExpandAll = () => {
    setExpandedYears(periods.map(p => p.year));
  };

  const handleCollapseAll = () => {
    setExpandedYears([]);
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-calendar-alt" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Manage Accounting Periods</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary">
            <i className="fas fa-cog"></i>
            Setup
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-search"></i>
            Search
          </button>
        </div>
      </div>

      <div className="form-container">
        {/* Action Buttons */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <button className="btn btn-primary" onClick={handleSetupFullYear}>
            Set Up Full Year
          </button>
          <button className="btn btn-secondary">
            New Year Only
          </button>
          <button className="btn btn-secondary">
            New Quarter Only
          </button>
          <button className="btn btn-secondary">
            Base Period
          </button>
          <button className="btn btn-secondary">
            Close Multiple Periods
          </button>
        </div>

        {/* Controls */}
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button className="btn-icon" title="Print">
            <i className="fas fa-print"></i>
          </button>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={showInactives}
              onChange={(e) => setShowInactives(e.target.checked)}
            />
            <span>SHOW INACTIVES</span>
          </label>
          <div style={{ marginLeft: 'auto' }}>
            <select className="form-control" style={{ width: '200px', display: 'inline-block' }}>
              <option>New Year Only</option>
              <option>All Periods</option>
            </select>
          </div>
        </div>

        {/* Periods Table */}
        <div className="table-responsive">
          <table className="items-table">
            <thead>
              <tr>
                <th style={{ width: '25%' }}>
                  PERIOD NAME
                  <button onClick={handleExpandAll} style={{ marginLeft: '1rem', background: 'none', border: 'none', color: '#3182CE', cursor: 'pointer', fontSize: '0.75rem' }}>
                    <i className="fas fa-plus-square"></i> EXPAND ALL
                  </button>
                  <button onClick={handleCollapseAll} style={{ marginLeft: '0.5rem', background: 'none', border: 'none', color: '#3182CE', cursor: 'pointer', fontSize: '0.75rem' }}>
                    <i className="fas fa-minus-square"></i> COLLAPSE ALL
                  </button>
                </th>
                <th style={{ width: '10%' }}>CHECKLIST</th>
                <th style={{ width: '15%' }}>PERIOD CLOSE</th>
                <th style={{ width: '15%' }}>A/P TRANSACTIONS</th>
                <th style={{ width: '15%' }}>A/R TRANSACTIONS</th>
                <th style={{ width: '15%' }}>ALL G/L TRANSACTIONS</th>
                <th style={{ width: '5%' }}>ALLOW NON-G/L CHANGES</th>
              </tr>
            </thead>
            <tbody>
              {periods.map((period) => (
                <React.Fragment key={period.year}>
                  <tr style={{ backgroundColor: '#f8f9fa', fontWeight: '600' }}>
                    <td>
                      <button
                        onClick={() => toggleYear(period.year)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: '0.5rem' }}
                      >
                        <i className={`fas fa-${expandedYears.includes(period.year) ? 'minus' : 'plus'}-square`} style={{ color: '#3182CE' }}></i>
                      </button>
                      {period.year}
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  {expandedYears.includes(period.year) && period.quarters.map((quarter) => (
                    <React.Fragment key={quarter.name}>
                      <tr style={{ backgroundColor: '#e9ecef' }}>
                        <td style={{ paddingLeft: '2rem' }}>{quarter.name}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      {quarter.months.map((month) => (
                        <tr key={month.name}>
                          <td style={{ paddingLeft: '3rem' }}>
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handlePeriodClick(month.name);
                              }}
                              style={{ color: '#3182CE', textDecoration: 'none' }}
                            >
                              {month.name}
                            </a>
                          </td>
                          <td></td>
                          <td style={{ textAlign: 'center' }}>
                            {month.periodClose && <i className="fas fa-lock" style={{ color: '#718096' }}></i>}
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            {month.apTransactions && <i className="fas fa-lock" style={{ color: '#718096' }}></i>}
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            {month.arTransactions && <i className="fas fa-lock" style={{ color: '#718096' }}></i>}
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            {month.allGLTransactions && <i className="fas fa-lock" style={{ color: '#718096' }}></i>}
                          </td>
                          <td></td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Period Detail Modal/Panel */}
      {selectedPeriod && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            width: '90%',
            maxWidth: '1000px',
            maxHeight: '90vh',
            overflow: 'auto',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}>
            <div className="sales-quotation">
              <div className="page-header">
                <div className="page-title">
                  <i className="fas fa-calendar"></i>
                  <h1>Base Period</h1>
                </div>
                <div className="page-actions">
                  <button className="btn btn-secondary">
                    <i className="fas fa-list"></i>
                    List
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-search"></i>
                    Search
                  </button>
                </div>
              </div>

              <div className="form-container">
                <div className="form-section">
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label required">PERIOD NAME</label>
                      <input
                        type="text"
                        className="form-control"
                        value={selectedPeriod}
                        readOnly
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label required">SUBPERIOD OF</label>
                      <select className="form-control">
                        <option>Q1 2024</option>
                        <option>Q2 2024</option>
                        <option>Q3 2024</option>
                        <option>Q4 2024</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label required">START DATE</label>
                      <input
                        type="text"
                        className="form-control"
                        value="1/1/2024"
                        readOnly
                      />
                    </div>

                    <div className="form-group">
                      <label className="checkbox-label">
                        <input type="checkbox" />
                        <span>PERIOD IS ADJUSTMENT</span>
                      </label>
                    </div>

                    <div className="form-group">
                      <label className="form-label required">END DATE</label>
                      <input
                        type="text"
                        className="form-control"
                        value="31/1/2024"
                        readOnly
                      />
                    </div>

                    <div className="form-group">
                      <label className="checkbox-label">
                        <input type="checkbox" />
                        <span>INACTIVE</span>
                      </label>
                    </div>

                    <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                      <label className="checkbox-label">
                        <input type="checkbox" />
                        <span>ALLOW NON-G/L CHANGES</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Workflow and Notes Tabs */}
                <div className="form-section">
                  <div className="detail-tabs">
                    <div className="tabs-header">
                      <button className="tab-btn active">
                        Workflow
                      </button>
                      <button className="tab-btn">
                        Notes
                      </button>
                      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                        <i className="fas fa-bars" style={{ color: '#718096', cursor: 'pointer' }}></i>
                      </div>
                    </div>

                    <div className="tabs-content">
                      <div style={{ backgroundColor: '#f0f4f8', padding: '1rem', borderBottom: '1px solid #e0e0e0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Active Workflows</span>
                            <span style={{ fontSize: '0.875rem', color: '#718096' }}>Workflow History</span>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.75rem' }}>
                          <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>VIEW</label>
                          <select className="form-control" style={{ width: '150px' }}>
                            <option>Default</option>
                          </select>
                          <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.4rem 0.8rem' }}>
                            Customize View
                          </button>
                          <button className="btn btn-secondary" style={{ fontSize: '0.875rem', padding: '0.4rem 0.8rem' }}>
                            Refresh
                          </button>
                        </div>
                      </div>
                      <div className="table-responsive">
                        <table className="items-table">
                          <thead>
                            <tr>
                              <th>WORKFLOW</th>
                              <th>CURRENT STATE</th>
                              <th>DATE ENTERED WORKFLOW</th>
                              <th>DATE ENTERED STATE</th>
                              <th>OPTIONS</th>
                              <th>STATUS</th>
                              <th>CANCEL</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                                No records to show.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #e0e0e0' }}>
                  <button className="btn btn-tertiary" onClick={handleClosePeriod}>
                    <i className="fas fa-times"></i>
                    Cancel
                  </button>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="btn btn-primary">
                      <i className="fas fa-save"></i>
                      Save
                    </button>
                    <button className="btn btn-secondary">
                      <i className="fas fa-cog"></i>
                      Actions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
};

export default ManageAccountingPeriods;
