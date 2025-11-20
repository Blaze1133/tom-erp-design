import React, { useState } from 'react';
import './Enquiries.css';

const ViewPayBatches = ({ onNewClick, onViewClick, onEditClick }) => {
  const [searchProject, setSearchProject] = useState('');
  const [showInactives, setShowInactives] = useState(false);

  // Sample pay batch data based on your image
  const [payBatches] = useState([
    {
      id: 'PBATCH00255',
      memo: 'TEA JAN 2022 MONTHLY SALARY',
      showSalarySlipOnEss: 'Yes',
      paybatchMonthPeriod: 'Monthly',
      payPeriodMonthlySet: 'Month Period',
      startDateFreq: '',
      endDateFreq: '',
      totalPayDays: '',
      paymentMethod: 'Regular Payment'
    },
    {
      id: 'PBATCH00256',
      memo: 'TSV FEB 2022 MONTHLY SALARY',
      showSalarySlipOnEss: 'Yes',
      paybatchMonthPeriod: 'Monthly',
      payPeriodMonthlySet: 'Month Period',
      startDateFreq: '',
      endDateFreq: '',
      totalPayDays: '',
      paymentMethod: 'Regular Payment'
    },
    {
      id: 'PBATCH00261',
      memo: 'MEP JAN 2022 STAFF SALARY',
      showSalarySlipOnEss: 'Yes',
      paybatchMonthPeriod: 'Monthly',
      payPeriodMonthlySet: 'Month Period',
      startDateFreq: '',
      endDateFreq: '',
      totalPayDays: '',
      paymentMethod: 'Regular Payment'
    },
    {
      id: 'PBATCH00265',
      memo: 'TMO Staff Salary Jan 2022',
      showSalarySlipOnEss: 'Yes',
      paybatchMonthPeriod: 'Monthly',
      payPeriodMonthlySet: 'Month Period',
      startDateFreq: '',
      endDateFreq: '',
      totalPayDays: '',
      paymentMethod: 'Regular Payment'
    },
    {
      id: 'PBATCH00271',
      memo: 'January Paybatch for TMO Hourly',
      showSalarySlipOnEss: 'Yes',
      paybatchMonthPeriod: 'Monthly',
      payPeriodMonthlySet: 'Month Period',
      startDateFreq: '',
      endDateFreq: '',
      totalPayDays: '',
      paymentMethod: 'Regular Payment'
    }
  ]);

  const handleViewPayBatch = (payBatch) => {
    if (onViewClick) {
      onViewClick(payBatch);
    }
  };

  const handleEditPayBatch = (payBatch) => {
    if (onEditClick) {
      onEditClick(payBatch);
    }
  };

  const handleNewPayBatch = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-folder"></i>
          <h1>Pay Batch List</h1>
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
            value={searchProject}
            onChange={(e) => setSearchProject(e.target.value)}
            className="form-control"
            style={{ width: '250px' }}
          >
            <option value="">Default</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <button className="btn-customize">Customize View</button>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewPayBatch}>
            <i className="fas fa-plus"></i>
            New Pay Batch
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
              <option>Default</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {payBatches.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '8%' }}>EDIT | VIEW</th>
              <th style={{ width: '10%' }}>ID ▲</th>
              <th style={{ width: '20%' }}>MEMO</th>
              <th style={{ width: '8%' }}>SHOW SALARY SLIP ON ESS</th>
              <th style={{ width: '12%' }}>PAYBATCH MONTH PERIOD</th>
              <th style={{ width: '12%' }}>PAY PERIOD MONTHLY SET</th>
              <th style={{ width: '8%' }}>START DATE FREQ</th>
              <th style={{ width: '8%' }}>END DATE FREQ</th>
              <th style={{ width: '8%' }}>TOTAL PAY DAYS</th>
              <th style={{ width: '10%' }}>PAYMENT METHOD</th>
            </tr>
          </thead>
          <tbody>
            {payBatches.map((payBatch, index) => (
              <tr key={payBatch.id}>
                <td>
                  <span 
                    onClick={() => handleEditPayBatch(payBatch)}
                    style={{ 
                      color: '#007bff', 
                      cursor: 'pointer', 
                      textDecoration: 'none',
                      fontSize: '12px'
                    }}
                  >
                    Edit
                  </span>
                  <span style={{ color: '#ccc', margin: '0 5px' }}>|</span>
                  <span 
                    onClick={() => handleViewPayBatch(payBatch)}
                    style={{ 
                      color: '#007bff', 
                      cursor: 'pointer', 
                      textDecoration: 'none',
                      fontSize: '12px'
                    }}
                  >
                    View
                  </span>
                </td>
                <td>{payBatch.id}</td>
                <td>{payBatch.memo}</td>
                <td>{payBatch.showSalarySlipOnEss}</td>
                <td>{payBatch.paybatchMonthPeriod}</td>
                <td>{payBatch.payPeriodMonthlySet}</td>
                <td>{payBatch.startDateFreq}</td>
                <td>{payBatch.endDateFreq}</td>
                <td>{payBatch.totalPayDays}</td>
                <td>{payBatch.paymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewPayBatches;
