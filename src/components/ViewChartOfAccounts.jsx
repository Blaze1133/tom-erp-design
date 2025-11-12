import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewChartOfAccounts = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('All');
  const [showInactives, setShowInactives] = useState(false);

  const [accounts] = useState([
    {
      id: 1,
      editView: true,
      number: '',
      account: 'Estimates',
      type: 'Non Posting',
      description: '',
      currency: '',
      foreignCurrencyBalance: '',
      balance: ''
    },
    {
      id: 2,
      editView: true,
      number: '',
      account: 'Opportunities',
      type: 'Non Posting',
      description: '',
      currency: '',
      foreignCurrencyBalance: '',
      balance: ''
    },
    {
      id: 3,
      editView: true,
      number: '',
      account: 'Purchase Orders',
      type: 'Non Posting',
      description: '',
      currency: '',
      foreignCurrencyBalance: '',
      balance: ''
    },
    {
      id: 4,
      editView: true,
      number: '',
      account: 'Realized Gain/Loss',
      type: 'Other Expense',
      description: '',
      currency: '',
      foreignCurrencyBalance: '',
      balance: '-26,267.04'
    },
    {
      id: 5,
      editView: true,
      number: '',
      account: 'Return Authorizations',
      type: 'Non Posting',
      description: '',
      currency: '',
      foreignCurrencyBalance: '',
      balance: ''
    },
    {
      id: 6,
      editView: true,
      number: '',
      account: 'Sales Orders',
      type: 'Non Posting',
      description: '',
      currency: '',
      foreignCurrencyBalance: '',
      balance: ''
    },
    {
      id: 7,
      editView: true,
      number: '',
      account: 'Transfer Orders',
      type: 'Non Posting',
      description: '',
      currency: '',
      foreignCurrencyBalance: '',
      balance: ''
    },
    {
      id: 8,
      editView: true,
      number: '',
      account: 'Unapproved Customer Payments',
      type: 'Non Posting',
      description: '',
      currency: '',
      foreignCurrencyBalance: '',
      balance: ''
    },
    {
      id: 9,
      editView: true,
      number: '',
      account: 'Unapproved Expense Reports',
      type: 'Non Posting',
      description: '',
      currency: '',
      foreignCurrencyBalance: '',
      balance: ''
    },
    {
      id: 10,
      editView: true,
      number: '',
      account: 'Unrealized Matching Gain/Loss',
      type: 'Other Expense',
      description: '',
      currency: '',
      foreignCurrencyBalance: '',
      balance: '0.00'
    },
    {
      id: 11,
      editView: true,
      number: '',
      account: '(+Vendor Return Authorizations+)',
      type: 'Non Posting',
      description: '',
      currency: '',
      foreignCurrencyBalance: '',
      balance: ''
    },
    {
      id: 12,
      editView: true,
      number: 'Yes',
      account: '10000 Accounts Receivable',
      type: 'Accounts Receivable',
      description: '',
      currency: '',
      foreignCurrencyBalance: '',
      balance: '9,827,635.64'
    },
    {
      id: 13,
      editView: true,
      number: '',
      account: '10100 Trade Debtors',
      type: 'Accounts Receivable',
      description: '',
      currency: '',
      foreignCurrencyBalance: '',
      balance: '5,158,551.21'
    },
    {
      id: 14,
      editView: true,
      number: '',
      account: '10200 Contract Assets Debtor',
      type: 'Accounts Receivable',
      description: '',
      currency: '',
      foreignCurrencyBalance: '',
      balance: '4,668,084.43'
    },
    {
      id: 15,
      editView: true,
      number: '',
      account: '10400 Intercompany Debtors',
      type: 'Accounts Receivable',
      description: '',
      currency: '',
      foreignCurrencyBalance: '',
      balance: '0.00'
    },
    {
      id: 16,
      editView: true,
      number: '',
      account: '10700 Other Account Receivables',
      type: 'Accounts Receivable',
      description: '',
      currency: '',
      foreignCurrencyBalance: '',
      balance: '0.00'
    },
    {
      id: 17,
      editView: true,
      number: '',
      account: '10900 Other Debtors',
      type: 'Accounts Receivable',
      description: '',
      currency: '',
      foreignCurrencyBalance: '',
      balance: '0.00'
    },
    {
      id: 18,
      editView: true,
      number: 'Yes',
      account: '11000 ALL Bank Accounts',
      type: 'Bank',
      description: '',
      currency: 'SGD',
      foreignCurrencyBalance: '$80.00',
      balance: '2,075,871.90'
    },
    {
      id: 19,
      editView: true,
      number: '',
      account: '11110 TSV DBS SGD 072-004442-8',
      type: 'Bank',
      description: '',
      currency: 'SGD',
      foreignCurrencyBalance: '$8134,613.84',
      balance: '134,613.84'
    },
    {
      id: 20,
      editView: true,
      number: '',
      account: '11120 TEA DBS SGD 072-004445-7',
      type: 'Bank',
      description: '',
      currency: 'SGD',
      foreignCurrencyBalance: '$66,338.52',
      balance: '6,338.52'
    },
    {
      id: 21,
      editView: true,
      number: '',
      account: '11130 TMO DBS SGD 072-025780-0',
      type: 'Bank',
      description: '',
      currency: 'SGD',
      foreignCurrencyBalance: '$8160,411.74',
      balance: '160,411.74'
    },
    {
      id: 22,
      editView: true,
      number: '',
      account: '11140 MEP DBS SGD 003-906123-3',
      type: 'Bank',
      description: '',
      currency: 'SGD',
      foreignCurrencyBalance: '$5935,565.43',
      balance: '935,565.43'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this account?')) {
      showToast('Account deleted successfully!', 'success');
    }
  };

  const filteredAccounts = accounts.filter(account => {
    if (viewFilter === 'All') return true;
    return account.type === viewFilter;
  });

  const handleViewAccount = (account) => {
    if (onViewClick) {
      onViewClick(account);
    }
  };

  const handleEditAccount = (account) => {
    if (onEditClick) {
      onEditClick(account);
    }
  };

  const handleNewAccount = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-book"></i>
          <h1>Chart of Accounts</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Customize</button>
          <button className="btn-view-option">More</button>
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
            <option value="All">All</option>
            <option value="Bank">Bank</option>
            <option value="Accounts Receivable">Accounts Receivable</option>
            <option value="Accounts Payable">Accounts Payable</option>
            <option value="Non Posting">Non Posting</option>
            <option value="Other Expense">Other Expense</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewAccount}>
            <i className="fas fa-plus"></i>
            New
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
          <div className="checkbox-filter">
            <input
              type="checkbox"
              id="showInactives"
              checked={showInactives}
              onChange={(e) => setShowInactives(e.target.checked)}
            />
            <label htmlFor="showInactives">SHOW INACTIVES</label>
          </div>
          <div className="list-total">
            TOTAL: {filteredAccounts.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '8%' }}>EDIT | VIEW</th>
              <th style={{ width: '8%' }}>NUMBER</th>
              <th style={{ width: '20%' }}>ACCOUNT</th>
              <th style={{ width: '12%' }}>TYPE</th>
              <th style={{ width: '20%' }}>DESCRIPTION</th>
              <th style={{ width: '8%' }}>CURRENCY</th>
              <th style={{ width: '12%' }}>FOREIGN CURRENCY BALANCE</th>
              <th style={{ width: '12%' }}>BALANCE</th>
            </tr>
          </thead>
          <tbody>
            {filteredAccounts.map((account) => (
              <tr key={account.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditAccount(account)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleViewAccount(account)}
                  >
                    View
                  </button>
                </td>
                <td>{account.number}</td>
                <td className="doc-number">{account.account}</td>
                <td>{account.type}</td>
                <td>{account.description}</td>
                <td>{account.currency}</td>
                <td className="amount">{account.foreignCurrencyBalance}</td>
                <td className="amount">{account.balance}</td>
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

export default ViewChartOfAccounts;
