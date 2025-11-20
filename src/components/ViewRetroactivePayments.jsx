import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewRetroactivePayments = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');

  const [retroactivePayments] = useState([
    // Empty list as shown in screenshot - "No records to show"
  ]);

  const handleViewRetroactivePayment = (payment) => {
    if (onViewClick) {
      onViewClick(payment);
    }
  };

  const handleEditRetroactivePayment = (payment) => {
    if (onEditClick) {
      onEditClick(payment);
    }
  };

  const handleNewRetroactivePayment = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-money-bill-wave"></i>
          <h1>Retroactive Payment List</h1>
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
            <option value="all">Default</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <button className="btn-customize">Customize View</button>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewRetroactivePayment}>
            <i className="fas fa-plus"></i>
            New Retroactive Payment
          </button>
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button className="btn-icon" title="Show Inactives">
            <i className="fas fa-eye-slash"></i>
            <span>SHOW INACTIVES</span>
          </button>
          <button className="btn-icon" title="Edit">
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
              <option>Arrear Type</option>
              <option>Period Start Date</option>
              <option>Country</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {retroactivePayments.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '12%' }}>EDIT | VIEW</th>
              <th style={{ width: '12%' }}>ARREAR TYPE</th>
              <th style={{ width: '18%' }}>ARREAR AGAINST PAY GROUP</th>
              <th style={{ width: '18%' }}>ARREAR AGAINST WORK CALENDAR</th>
              <th style={{ width: '12%' }}>ARREAR AGAINST YEAR</th>
              <th style={{ width: '15%' }}>PERIOD START DATE</th>
              <th style={{ width: '18%' }}>SALARY ARREAR RATE EFFECT FROM</th>
              <th style={{ width: '10%' }}>COUNTRY</th>
            </tr>
          </thead>
          <tbody>
            {retroactivePayments.length === 0 ? (
              <tr>
                <td colSpan="8" style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
                  No records to show.
                </td>
              </tr>
            ) : (
              retroactivePayments.map((payment) => (
                <tr key={payment.id}>
                  <td>
                    <button 
                      className="view-link"
                      onClick={() => handleEditRetroactivePayment(payment)}
                    >
                      Edit
                    </button>
                    {' | '}
                    <button 
                      className="view-link"
                      onClick={() => handleViewRetroactivePayment(payment)}
                    >
                      View
                    </button>
                  </td>
                  <td>{payment.arrearType}</td>
                  <td>{payment.arrearAgainstPayGroup}</td>
                  <td>{payment.arrearAgainstWorkCalendar}</td>
                  <td>{payment.arrearAgainstYear}</td>
                  <td>{payment.periodStartDate}</td>
                  <td>{payment.salaryArrearRateEffectFrom}</td>
                  <td>{payment.country}</td>
                </tr>
              ))
            )}
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

export default ViewRetroactivePayments;
