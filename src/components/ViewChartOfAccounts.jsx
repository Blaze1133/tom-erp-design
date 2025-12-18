import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewChartOfAccounts = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [searchTerm, setSearchTerm] = useState('');
  const [accountTypeFilter, setAccountTypeFilter] = useState('All Types');
  const [expandedNodes, setExpandedNodes] = useState({});

  // Hierarchical account data structure based on Excel
  const [accountsData] = useState([
    {
      id: 'assets',
      code: '1000-1999',
      name: 'Assets',
      type: 'Asset',
      isParent: true,
      level: 0,
      children: [
        {
          id: 'current-assets',
          code: '1100-1199',
          name: 'Current Assets',
          type: 'Asset',
          isParent: true,
          level: 1,
          children: [
            { id: 'cash-equiv', code: '1110', name: 'Cash and Cash Equivalents', type: 'Asset', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$50,000.00', balance: '50,000.00' },
            { id: 'acc-receivable', code: '1120', name: 'Accounts Receivable', type: 'Asset', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$120,000.00', balance: '120,000.00' },
            { id: 'inventory', code: '1130', name: 'Inventory', type: 'Asset', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$80,000.00', balance: '80,000.00' },
            { id: 'prepaid-exp', code: '1140', name: 'Prepaid Expenses', type: 'Asset', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$15,000.00', balance: '15,000.00' }
          ]
        },
        {
          id: 'fixed-assets',
          code: '1200-1299',
          name: 'Fixed Assets',
          type: 'Asset',
          isParent: true,
          level: 1,
          children: [
            { id: 'property', code: '1210', name: 'Property, Plant & Equipment', type: 'Asset', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$500,000.00', balance: '500,000.00' },
            { id: 'accum-depreciation', code: '1220', name: 'Accumulated Depreciation', type: 'Asset', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '-$100,000.00', balance: '-100,000.00' }
          ]
        }
      ]
    },
    {
      id: 'liabilities',
      code: '2000-2999',
      name: 'Liabilities',
      type: 'Liability',
      isParent: true,
      level: 0,
      children: [
        {
          id: 'current-liabilities',
          code: '2100-2199',
          name: 'Current Liabilities',
          type: 'Liability',
          isParent: true,
          level: 1,
          children: [
            { id: 'acc-payable', code: '2110', name: 'Accounts Payable', type: 'Liability', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$75,000.00', balance: '75,000.00' },
            { id: 'accrued-exp', code: '2120', name: 'Accrued Expenses', type: 'Liability', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$25,000.00', balance: '25,000.00' },
            { id: 'short-term-debt', code: '2130', name: 'Short-term Debt', type: 'Liability', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$50,000.00', balance: '50,000.00' }
          ]
        },
        {
          id: 'long-term-liabilities',
          code: '2200-2299',
          name: 'Long-term Liabilities',
          type: 'Liability',
          isParent: true,
          level: 1,
          children: [
            { id: 'long-term-debt', code: '2210', name: 'Long-term Debt', type: 'Liability', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$200,000.00', balance: '200,000.00' },
            { id: 'deferred-tax', code: '2220', name: 'Deferred Tax Liabilities', type: 'Liability', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$30,000.00', balance: '30,000.00' }
          ]
        }
      ]
    },
    {
      id: 'equity',
      code: '3000-3999',
      name: 'Equity',
      type: 'Equity',
      isParent: true,
      level: 0,
      children: [
        { id: 'share-capital', code: '3100', name: 'Share Capital', type: 'Equity', level: 1, description: '', currency: 'SGD', foreignCurrencyBalance: '$100,000.00', balance: '100,000.00' },
        { id: 'retained-earnings', code: '3200', name: 'Retained Earnings', type: 'Equity', level: 1, description: '', currency: 'SGD', foreignCurrencyBalance: '$150,000.00', balance: '150,000.00' },
        { id: 'current-year-earnings', code: '3300', name: 'Current Year Earnings', type: 'Equity', level: 1, description: '', currency: 'SGD', foreignCurrencyBalance: '$50,000.00', balance: '50,000.00' }
      ]
    },
    {
      id: 'revenue',
      code: '4000-4999',
      name: 'Revenue',
      type: 'Revenue',
      isParent: true,
      level: 0,
      children: [
        {
          id: 'operating-revenue',
          code: '4100-4199',
          name: 'Operating Revenue',
          type: 'Revenue',
          isParent: true,
          level: 1,
          children: [
            { id: 'sales-revenue', code: '4110', name: 'Sales Revenue', type: 'Revenue', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$300,000.00', balance: '300,000.00' },
            { id: 'service-revenue', code: '4120', name: 'Service Revenue', type: 'Revenue', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$150,000.00', balance: '150,000.00' }
          ]
        },
        {
          id: 'other-revenue',
          code: '4200-4299',
          name: 'Other Revenue',
          type: 'Revenue',
          isParent: true,
          level: 1,
          children: [
            { id: 'interest-income', code: '4210', name: 'Interest Income', type: 'Revenue', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$5,000.00', balance: '5,000.00' },
            { id: 'other-income', code: '4220', name: 'Other Income', type: 'Revenue', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$10,000.00', balance: '10,000.00' }
          ]
        }
      ]
    },
    {
      id: 'expenses',
      code: '5000-5999',
      name: 'Expenses',
      type: 'Expense',
      isParent: true,
      level: 0,
      children: [
        {
          id: 'cost-of-sales',
          code: '5100-5199',
          name: 'Cost of Sales',
          type: 'Expense',
          isParent: true,
          level: 1,
          children: [
            { id: 'materials', code: '5110', name: 'Materials', type: 'Expense', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$100,000.00', balance: '100,000.00' },
            { id: 'labor', code: '5120', name: 'Labor', type: 'Expense', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$80,000.00', balance: '80,000.00' },
            { id: 'overhead', code: '5130', name: 'Overhead', type: 'Expense', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$40,000.00', balance: '40,000.00' }
          ]
        },
        {
          id: 'operating-expenses',
          code: '5200-5299',
          name: 'Operating Expenses',
          type: 'Expense',
          isParent: true,
          level: 1,
          children: [
            { id: 'salaries', code: '5210', name: 'Salaries and Wages', type: 'Expense', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$120,000.00', balance: '120,000.00' },
            { id: 'rent', code: '5220', name: 'Rent', type: 'Expense', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$30,000.00', balance: '30,000.00' },
            { id: 'utilities', code: '5230', name: 'Utilities', type: 'Expense', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$10,000.00', balance: '10,000.00' },
            { id: 'insurance', code: '5240', name: 'Insurance', type: 'Expense', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$15,000.00', balance: '15,000.00' }
          ]
        },
        {
          id: 'admin-expenses',
          code: '5300-5399',
          name: 'Administrative Expenses',
          type: 'Expense',
          isParent: true,
          level: 1,
          children: [
            { id: 'office-supplies', code: '5310', name: 'Office Supplies', type: 'Expense', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$8,000.00', balance: '8,000.00' },
            { id: 'professional-fees', code: '5320', name: 'Professional Fees', type: 'Expense', level: 2, description: '', currency: 'SGD', foreignCurrencyBalance: '$20,000.00', balance: '20,000.00' }
          ]
        }
      ]
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const toggleNode = (nodeId) => {
    setExpandedNodes(prev => ({
      ...prev,
      [nodeId]: !prev[nodeId]
    }));
  };

  const expandAll = () => {
    const allNodes = {};
    const collectNodes = (accounts) => {
      accounts.forEach(account => {
        if (account.isParent) {
          allNodes[account.id] = true;
          if (account.children) {
            collectNodes(account.children);
          }
        }
      });
    };
    collectNodes(accountsData);
    setExpandedNodes(allNodes);
  };

  const collapseAll = () => {
    setExpandedNodes({});
  };

  // Filter accounts based on search and filters
  const filterAccounts = (accounts) => {
    return accounts.map(account => {
      // Check if account matches search term
      const matchesSearch = !searchTerm || 
        account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        account.code.toLowerCase().includes(searchTerm.toLowerCase());

      // Check if account matches type filter
      const matchesType = accountTypeFilter === 'All Types' || account.type === accountTypeFilter;

      // Filter children recursively
      let filteredChildren = [];
      if (account.children) {
        filteredChildren = filterAccounts(account.children);
      }

      // Include account if it matches or has matching children
      if ((matchesSearch && matchesType) || filteredChildren.length > 0) {
        return {
          ...account,
          children: filteredChildren
        };
      }
      return null;
    }).filter(account => account !== null);
  };

  const filteredAccountsData = filterAccounts(accountsData);

  const renderAccountRow = (account, parentExpanded = true) => {
    if (!parentExpanded) return null;

    const isExpanded = expandedNodes[account.id];
    const hasChildren = account.children && account.children.length > 0;
    const indentStyle = { paddingLeft: `${account.level * 30 + 10}px` };

    return (
      <React.Fragment key={account.id}>
        <tr 
          style={{ 
            backgroundColor: account.level === 0 ? '#f8f9fa' : account.level === 1 ? '#fafbfc' : 'white',
            fontWeight: account.isParent ? '600' : '400'
          }}
        >
          <td style={indentStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {hasChildren && (
                <button
                  onClick={() => toggleNode(account.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#4a90e2'
                  }}
                >
                  <i className={`fas fa-chevron-${isExpanded ? 'down' : 'right'}`} style={{ fontSize: '12px' }}></i>
                </button>
              )}
              {!hasChildren && <span style={{ width: '20px', display: 'inline-block' }}></span>}
              <i 
                className={`fas fa-${account.level === 0 ? 'folder' : account.isParent ? 'folder-open' : 'file-alt'}`}
                style={{ 
                  color: account.level === 0 ? '#4a90e2' : account.isParent ? '#6c757d' : '#999',
                  fontSize: '14px'
                }}
              ></i>
              <span style={{ color: account.isParent ? '#333' : '#555' }}>{account.name}</span>
            </div>
          </td>
          <td style={{ color: '#666', fontSize: '13px' }}>{account.code}</td>
          <td>
            <span 
              style={{
                padding: '4px 12px',
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: '500',
                backgroundColor: 
                  account.type === 'Asset' ? '#e3f2fd' :
                  account.type === 'Liability' ? '#fff3e0' :
                  account.type === 'Equity' ? '#f3e5f5' :
                  account.type === 'Revenue' ? '#e8f5e9' :
                  account.type === 'Expense' ? '#ffebee' : '#f5f5f5',
                color:
                  account.type === 'Asset' ? '#1976d2' :
                  account.type === 'Liability' ? '#f57c00' :
                  account.type === 'Equity' ? '#7b1fa2' :
                  account.type === 'Revenue' ? '#388e3c' :
                  account.type === 'Expense' ? '#d32f2f' : '#666'
              }}
            >
              {account.type}
            </span>
          </td>
          <td style={{ color: '#666', fontSize: '13px' }}>{account.description || '-'}</td>
          <td style={{ color: '#666', fontSize: '13px' }}>{account.currency || '-'}</td>
          <td className="amount" style={{ textAlign: 'right', color: '#333', fontSize: '13px' }}>{account.foreignCurrencyBalance || '-'}</td>
          <td className="amount" style={{ textAlign: 'right', color: '#333', fontSize: '13px', fontWeight: '500' }}>{account.balance || '-'}</td>
          <td>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', justifyContent: 'center' }}>
              <button 
                className="view-link"
                onClick={() => onEditClick && onEditClick(account)}
                title="Edit"
                style={{
                  padding: '4px 8px',
                  fontSize: '12px',
                  color: '#4a90e2',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer'
                }}
              >
                <i className="fas fa-edit"></i>
              </button>
              <button 
                className="view-link"
                onClick={() => onViewClick && onViewClick(account)}
                title="View"
                style={{
                  padding: '4px 8px',
                  fontSize: '12px',
                  color: '#28a745',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer'
                }}
              >
                <i className="fas fa-eye"></i>
              </button>
            </div>
          </td>
        </tr>
        {hasChildren && account.children.map(child => renderAccountRow(child, isExpanded))}
      </React.Fragment>
    );
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-sitemap"></i>
          <h1>Chart of Accounts</h1>
        </div>
        <div className="list-actions">
          <button 
            className="btn-view-option" 
            title="Import"
            style={{
              padding: '8px 16px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              background: 'white',
              cursor: 'pointer',
              fontSize: '13px',
              color: '#555',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <i className="fas fa-file-import" style={{ fontSize: '12px' }}></i>
            Import
          </button>
          <button 
            className="btn-view-option" 
            title="Export"
            style={{
              padding: '8px 16px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              background: 'white',
              cursor: 'pointer',
              fontSize: '13px',
              color: '#555',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <i className="fas fa-file-export" style={{ fontSize: '12px' }}></i>
            Export
          </button>
        </div>
      </div>

      <div className="list-controls" style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #e0e0e0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="view-filter">
            <label style={{ fontSize: '11px', color: '#666', marginRight: '8px' }}>SEARCH ACCOUNTS</label>
            <input
              type="text"
              className="form-control"
              placeholder="Search by name or code"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '250px' }}
            />
          </div>
          <div className="view-filter">
            <label style={{ fontSize: '11px', color: '#666', marginRight: '8px' }}>ACCOUNT TYPE</label>
            <select 
              value={accountTypeFilter}
              onChange={(e) => setAccountTypeFilter(e.target.value)}
              className="form-control"
              style={{ width: '180px' }}
            >
              <option value="All Types">All Types</option>
              <option value="Asset">Asset</option>
              <option value="Liability">Liability</option>
              <option value="Equity">Equity</option>
              <option value="Revenue">Revenue</option>
              <option value="Expense">Expense</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => onNewClick && onNewClick()}>
          <i className="fas fa-plus"></i>
          Add Account
        </button>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f7fa' }}>
              <th style={{ width: '26%', textAlign: 'left', padding: '12px 16px' }}>ACCOUNT NAME</th>
              <th style={{ width: '10%', textAlign: 'left', padding: '12px 16px' }}>ACCOUNT CODE</th>
              <th style={{ width: '12%', textAlign: 'left', padding: '12px 16px' }}>TYPE</th>
              <th style={{ width: '15%', textAlign: 'left', padding: '12px 16px' }}>DESCRIPTION</th>
              <th style={{ width: '8%', textAlign: 'left', padding: '12px 16px' }}>CURRENCY</th>
              <th style={{ width: '12%', textAlign: 'right', padding: '12px 16px' }}>FOREIGN CURRENCY BALANCE</th>
              <th style={{ width: '11%', textAlign: 'right', padding: '12px 16px' }}>BALANCE</th>
              <th style={{ width: '6%', textAlign: 'center', padding: '12px 16px' }}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredAccountsData.map(account => renderAccountRow(account, true))}
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
