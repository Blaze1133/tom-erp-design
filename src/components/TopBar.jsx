import React, { useState, useEffect, useRef } from 'react';
import './TopBar.css';

const TopBar = ({ collapsed, setCollapsed, setCurrentPage }) => {
  const [aiSearch, setAiSearch] = useState('');
  const [menuSearch, setMenuSearch] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showRecentActivity, setShowRecentActivity] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [filteredModules, setFilteredModules] = useState([]);
  const searchRef = useRef(null);

  const notifications = [
    { id: 1, type: 'info', message: 'New purchase order #PO-2024-001 created', time: '5 min ago' },
    { id: 2, type: 'success', message: 'Invoice #INV-2024-045 approved', time: '15 min ago' },
    { id: 3, type: 'warning', message: 'Low stock alert for Item #ITM-123', time: '1 hour ago' },
    { id: 4, type: 'info', message: 'New quotation request received', time: '2 hours ago' },
  ];

  const recentActivities = [
    { id: 1, icon: 'fas fa-file-invoice', action: 'Created Invoice', ref: '#INV-2024-046', time: '10 min ago' },
    { id: 2, icon: 'fas fa-shopping-cart', action: 'Updated Sales Order', ref: '#SO-2024-089', time: '25 min ago' },
    { id: 3, icon: 'fas fa-box', action: 'Received Purchase Order', ref: '#PO-2024-002', time: '1 hour ago' },
    { id: 4, icon: 'fas fa-check-circle', action: 'Approved Quotation', ref: '#QT-2024-112', time: '2 hours ago' },
  ];

  // Module names for search functionality with navigation routes
  const modules = [
    { name: 'Accept Customer Payment', icon: 'fas fa-credit-card', category: 'Payments', route: 'accept-customer-payment' },
    { name: 'Adjust Inventory', icon: 'fas fa-boxes', category: 'Inventory', route: 'adjust-inventory' },
    { name: 'Adjust Inventory Worksheet', icon: 'fas fa-clipboard-list', category: 'Inventory', route: 'adjust-inventory-worksheet' },
    { name: 'Approve Return Authorizations', icon: 'fas fa-check-circle', category: 'Returns', route: 'approve-return-authorizations' },
    { name: 'Approve Vendor Payments', icon: 'fas fa-check-double', category: 'Payments', route: 'approve-vendor-payments' },
    { name: 'Approve Vendor Returns', icon: 'fas fa-undo', category: 'Returns', route: 'approve-vendor-returns' },
    { name: 'Assess Finance Charge', icon: 'fas fa-calculator', category: 'Finance', route: 'assess-finance-charge' },
    { name: 'Bill Purchase Orders', icon: 'fas fa-file-invoice-dollar', category: 'Purchasing', route: 'bill-purchase-orders' },
    { name: 'CRM Lists', icon: 'fas fa-list', category: 'CRM', route: 'crm-lists' },
    { name: 'CRM Preferences', icon: 'fas fa-cog', category: 'CRM', route: 'crm-preferences' },
    { name: 'Commit Order Schedule', icon: 'fas fa-calendar-check', category: 'Orders', route: 'commit-order-schedule' },
    { name: 'Commit Orders', icon: 'fas fa-handshake', category: 'Orders', route: 'commit-orders' },
    { name: 'Create Allocation Schedule', icon: 'fas fa-calendar-plus', category: 'Allocation', route: 'create-allocation-schedules' },
    { name: 'Create Asset Issue', icon: 'fas fa-tools', category: 'Assets', route: 'create-asset-issue' },
    { name: 'Create Biometric Data', icon: 'fas fa-fingerprint', category: 'HR', route: 'create-biometric-data' },
    { name: 'Create Career Progression', icon: 'fas fa-chart-line', category: 'HR', route: 'create-career-progression' },
    { name: 'Create Commit Order Schedule', icon: 'fas fa-calendar-alt', category: 'Orders', route: 'create-commit-order-schedule' },
    { name: 'Create Community Contribution Fund', icon: 'fas fa-hands-helping', category: 'HR', route: 'create-community-contribution-fund' },
    { name: 'Create CPF Applied Age Group', icon: 'fas fa-users', category: 'HR', route: 'create-cpf-applied-age-group' },
    { name: 'Create Delivery Order', icon: 'fas fa-truck', category: 'Delivery', route: 'tom-custom-delivery-order' },
    { name: 'Create Customer', icon: 'fas fa-user-plus', category: 'Customers', route: 'create-customer' },
    { name: 'Create Employee', icon: 'fas fa-user-tie', category: 'HR', route: 'create-employee' },
    { name: 'Create Employee Exit', icon: 'fas fa-sign-out-alt', category: 'HR', route: 'create-employee-exit' },
    { name: 'Create Employee Leave', icon: 'fas fa-calendar-times', category: 'HR', route: 'create-employee-leave' },
    { name: 'Create Employee Leave Enrollment', icon: 'fas fa-user-clock', category: 'HR', route: 'create-employee-leave-enrollment' },
    { name: 'Create Employee Leave Reinstatement', icon: 'fas fa-redo', category: 'HR', route: 'create-employee-leave-reinstatement' },
    { name: 'Create Employee Loan', icon: 'fas fa-money-bill-wave', category: 'HR', route: 'create-employee-loan' },
    { name: 'Create Employee PF', icon: 'fas fa-piggy-bank', category: 'HR', route: 'create-employee-pf' },
    { name: 'Create Enquiries', icon: 'fas fa-question-circle', category: 'Sales', route: 'create-enquiries' },
    { name: 'Create Fulfill Order', icon: 'fas fa-shipping-fast', category: 'Orders', route: 'create-fulfill-order' },
    { name: 'Create FWL Qualification', icon: 'fas fa-certificate', category: 'HR', route: 'create-fwl-qualification' },
    { name: 'Create IR8A Year', icon: 'fas fa-file-alt', category: 'HR', route: 'create-ir8a-year' },
    { name: 'Create Intercompany Allocation Schedule', icon: 'fas fa-exchange-alt', category: 'Allocation', route: 'create-intercompany-allocation-schedules' },
    { name: 'Create Invoice', icon: 'fas fa-file-invoice', category: 'Sales', route: 'create-invoices' },
    { name: 'Create Item', icon: 'fas fa-cube', category: 'Inventory', route: 'create-item' },
    { name: 'Create Leave Pay Calendar', icon: 'fas fa-calendar-day', category: 'HR', route: 'create-leave-pay-calendar' },
    { name: 'Create Leave Type', icon: 'fas fa-calendar-minus', category: 'HR', route: 'create-leave-type' },
    { name: 'Create Loan Repayment Process', icon: 'fas fa-coins', category: 'HR', route: 'create-loan-repayment-process' },
    { name: 'Create Manual Entry', icon: 'fas fa-edit', category: 'Accounting', route: 'create-manual-entry' },
    { name: 'Create Pay Batch', icon: 'fas fa-money-check-alt', category: 'Payroll', route: 'create-pay-batch' },
    { name: 'Create Pay Component', icon: 'fas fa-puzzle-piece', category: 'Payroll', route: 'create-pay-component' },
    { name: 'Create Pay Group', icon: 'fas fa-users-cog', category: 'Payroll', route: 'create-pay-group' },
    { name: 'Create Payee Employee', icon: 'fas fa-user-check', category: 'Payroll', route: 'create-payee-employee' },
    { name: 'Create Purchase Requisition', icon: 'fas fa-shopping-cart', category: 'Purchasing', route: 'purchase-requisition' },
    { name: 'Create Retroactive Payment', icon: 'fas fa-history', category: 'Payroll', route: 'create-retroactive-payment' },
    { name: 'Create SDL Master', icon: 'fas fa-graduation-cap', category: 'HR', route: 'create-sdl-master' },
    { name: 'Create Shift Master', icon: 'fas fa-clock', category: 'HR', route: 'create-shift-master' },
    { name: 'Create Statistical Schedule', icon: 'fas fa-chart-bar', category: 'Reports', route: 'create-statistical-schedule' },
    { name: 'Create Vendor', icon: 'fas fa-store', category: 'Vendors', route: 'create-vendor' },
    { name: 'Create Yard Data', icon: 'fas fa-warehouse', category: 'Operations', route: 'create-yard-data' },
    { name: 'Dashboard', icon: 'fas fa-tachometer-alt', category: 'Overview', route: 'dashboard' },
    { name: 'Enter Bills', icon: 'fas fa-receipt', category: 'Purchasing', route: 'enter-bills' },
    { name: 'Enter Cash Sales', icon: 'fas fa-cash-register', category: 'Sales', route: 'enter-cash-sales' },
    { name: 'Enter Purchase Orders', icon: 'fas fa-file-contract', category: 'Purchasing', route: 'enter-purchase-orders' },
    { name: 'Enter Transfer Order', icon: 'fas fa-exchange-alt', category: 'Inventory', route: 'enter-transfer-orders' },
    { name: 'Enter Vendor Credit', icon: 'fas fa-credit-card', category: 'Vendors', route: 'enter-vendor-credit' },
    { name: 'Generate Price Lists', icon: 'fas fa-tags', category: 'Pricing', route: 'generate-price-lists' },
    { name: 'Invoice Sales Orders', icon: 'fas fa-file-invoice-dollar', category: 'Sales', route: 'invoice-sales-orders' },
    { name: 'Issue Credit Memo', icon: 'fas fa-file-minus', category: 'Sales', route: 'issue-credit-memo' },
    { name: 'Issue Customer Refund', icon: 'fas fa-undo-alt', category: 'Customers', route: 'issue-customer-refund' },
    { name: 'Issue Return Authorization', icon: 'fas fa-undo', category: 'Returns', route: 'issue-return-authorization' },
    { name: 'Item Receipt', icon: 'fas fa-clipboard-check', category: 'Inventory', route: 'item-receipt' },
    { name: 'Make Journal Entries', icon: 'fas fa-book', category: 'Accounting', route: 'make-journal-entries' },
    { name: 'Manage Users', icon: 'fas fa-users-cog', category: 'Administration', route: 'manage-users' },
    { name: 'New Chart of Account', icon: 'fas fa-chart-pie', category: 'Accounting', route: 'new-chart-of-account' },
    { name: 'New Class', icon: 'fas fa-layer-group', category: 'Setup', route: 'new-class' },
    { name: 'New Department', icon: 'fas fa-building', category: 'Setup', route: 'new-department' },
    { name: 'New Location', icon: 'fas fa-map-marker-alt', category: 'Setup', route: 'new-location' },
    { name: 'New Subsidiary', icon: 'fas fa-sitemap', category: 'Setup', route: 'new-subsidiary' },
    { name: 'Order Items', icon: 'fas fa-list-ol', category: 'Purchasing', route: 'order-items' },
    { name: 'Pay Bills', icon: 'fas fa-money-bill', category: 'Payments', route: 'pay-bills' },
    { name: 'Quotation', icon: 'fas fa-quote-right', category: 'Sales', route: 'prepare-quotations' },
    { name: 'Receive Orders', icon: 'fas fa-inbox', category: 'Inventory', route: 'receive-orders' },
    { name: 'Sales Order', icon: 'fas fa-shopping-bag', category: 'Sales', route: 'enter-sales-orders' },
    { name: 'Setup Company Information', icon: 'fas fa-building', category: 'Setup', route: 'setup-company-information' },
    { name: 'Transfer Funds', icon: 'fas fa-exchange-alt', category: 'Finance', route: 'transfer-funds' },
    { name: 'View Customers', icon: 'fas fa-users', category: 'Customers', route: 'view-customers' },
    { name: 'View Employees', icon: 'fas fa-id-badge', category: 'HR', route: 'view-employees' },
    { name: 'View Invoices', icon: 'fas fa-file-invoice', category: 'Sales', route: 'view-invoices' },
    { name: 'View Items', icon: 'fas fa-boxes', category: 'Inventory', route: 'view-items' },
    { name: 'View Purchase Orders', icon: 'fas fa-file-contract', category: 'Purchasing', route: 'view-purchase-orders' },
    { name: 'View Sales Orders', icon: 'fas fa-shopping-bag', category: 'Sales', route: 'view-sales-orders' },
    { name: 'View Vendors', icon: 'fas fa-store-alt', category: 'Vendors', route: 'view-vendors' },
    { name: 'Write Checks', icon: 'fas fa-check', category: 'Payments', route: 'write-checks' },
    
    // CRM Module
    { name: 'View Leads', icon: 'fas fa-user-plus', category: 'CRM', route: 'view-leads' },
    { name: 'Create Lead', icon: 'fas fa-user-plus', category: 'CRM', route: 'create-lead' },
    { name: 'View Opportunities', icon: 'fas fa-bullseye', category: 'CRM', route: 'view-opportunities' },
    { name: 'Create Opportunity', icon: 'fas fa-bullseye', category: 'CRM', route: 'create-opportunity' },
    { name: 'View CRM Quotations', icon: 'fas fa-file-alt', category: 'CRM', route: 'view-crm-quotations' },
    { name: 'Create CRM Quotation', icon: 'fas fa-file-alt', category: 'CRM', route: 'create-crm-quotation' },
    { name: 'View CRM Projects', icon: 'fas fa-project-diagram', category: 'CRM', route: 'view-crm-projects' },
    
    // Masters Module
    { name: 'Customer Masters', icon: 'fas fa-users', category: 'Masters', route: 'view-customer-masters' },
    { name: 'Vendor Masters', icon: 'fas fa-store', category: 'Masters', route: 'view-vendor-masters' },
    { name: 'Bank Masters', icon: 'fas fa-university', category: 'Masters', route: 'view-bank-masters' },
    { name: 'View Subsidiaries', icon: 'fas fa-sitemap', category: 'Masters', route: 'setup-subsidiaries' },
    { name: 'View Departments', icon: 'fas fa-building', category: 'Masters', route: 'setup-department' },
    { name: 'View Locations', icon: 'fas fa-map-marker-alt', category: 'Masters', route: 'setup-location' },
    { name: 'View Classes', icon: 'fas fa-layer-group', category: 'Masters', route: 'setup-classes' },
    
    // Purchase Requisitions
    { name: 'View Purchase Requisitions', icon: 'fas fa-file-alt', category: 'Purchasing', route: 'view-purchase-requisition' },
    
    // Delivery Orders
    { name: 'View Delivery Orders', icon: 'fas fa-truck', category: 'Delivery', route: 'view-tom-custom-delivery-order' },
    
    // Journal Entries
    { name: 'View Journal Entries', icon: 'fas fa-book', category: 'Accounting', route: 'view-journal-entries' },
    { name: 'Make Advanced Intercompany Journal', icon: 'fas fa-exchange-alt', category: 'Accounting', route: 'make-advanced-intercompany-journal-entries' },
    { name: 'View Advanced Intercompany Journals', icon: 'fas fa-exchange-alt', category: 'Accounting', route: 'view-advanced-intercompany-journal-entries' },
    
    // Budgets
    { name: 'Set Up Budgets', icon: 'fas fa-calculator', category: 'Accounting', route: 'set-up-budgets' },
    { name: 'View Budgets', icon: 'fas fa-calculator', category: 'Accounting', route: 'view-budgets' },
    
    // Allocation Schedules
    { name: 'View Allocation Schedules', icon: 'fas fa-calendar-alt', category: 'Allocation', route: 'view-allocation-schedules' },
    { name: 'View Intercompany Allocation Schedules', icon: 'fas fa-exchange-alt', category: 'Allocation', route: 'view-intercompany-allocation-schedules' },
    
    // Currency Revaluations
    { name: 'Revalue Open Currency Balances', icon: 'fas fa-dollar-sign', category: 'Finance', route: 'revalue-open-currency-balances' },
    { name: 'View Currency Revaluations', icon: 'fas fa-dollar-sign', category: 'Finance', route: 'view-currency-revaluations' },
    
    // Cash Sales
    { name: 'View Cash Sales', icon: 'fas fa-cash-register', category: 'Sales', route: 'view-cash-sales' },
    
    // Transfer Orders
    { name: 'View Transfer Orders', icon: 'fas fa-exchange-alt', category: 'Inventory', route: 'view-transfer-orders' }
  ];

  // Search functionality
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setAiSearch(value);
    
    if (value.trim()) {
      const filtered = modules.filter(module =>
        module.name.toLowerCase().includes(value.toLowerCase()) ||
        module.category.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredModules(filtered.slice(0, 8)); // Limit to 8 suggestions
      setShowSearchSuggestions(true);
    } else {
      setFilteredModules([]);
      setShowSearchSuggestions(false);
    }
  };

  const handleModuleSelect = (module) => {
    setAiSearch(module.name);
    setShowSearchSuggestions(false);
    
    // Navigate to the selected module
    if (module.route && setCurrentPage) {
      setCurrentPage(module.route);
      // Update URL hash for proper navigation
      window.location.hash = module.route;
    }
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Escape') {
      setShowSearchSuggestions(false);
    }
  };

  // Close search suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`topbar ${collapsed ? 'sidebar-collapsed' : ''}`}>
      <div className="topbar-left">
        <div className="search-container" ref={searchRef}>
          <div className="search-box unified-search">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              placeholder="Search modules..."
              value={aiSearch}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
              className="search-input"
            />
          </div>
          
          {/* Search Suggestions Dropdown */}
          {showSearchSuggestions && filteredModules.length > 0 && (
            <div className="search-suggestions">
              <div className="suggestions-header">
                <span className="suggestions-title">Modules</span>
                <span className="suggestions-count">{filteredModules.length} results</span>
              </div>
              <div className="suggestions-list">
                {filteredModules.map((module, index) => (
                  <div
                    key={index}
                    className="suggestion-item"
                    onClick={() => handleModuleSelect(module)}
                  >
                    <div className="suggestion-icon">
                      <i className={module.icon}></i>
                    </div>
                    <div className="suggestion-content">
                      <div className="suggestion-name">{module.name}</div>
                      <div className="suggestion-category">{module.category}</div>
                    </div>
                  </div>
                ))}
              </div>
              {filteredModules.length === 8 && (
                <div className="suggestions-footer">
                  <span className="more-results">Press Enter to see all results</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="topbar-right">

        {/* Notifications */}
        <div className="topbar-dropdown">
          <button 
            className="topbar-icon-btn notification-btn"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowRecentActivity(false);
              setShowUserMenu(false);
            }}
          >
            <i className="fas fa-bell"></i>
            <span className="notification-badge">4</span>
          </button>
          
          {showNotifications && (
            <div className="dropdown-menu notifications-menu">
              <div className="dropdown-header">
                <h3>Notifications</h3>
                <button className="mark-read-btn">Mark all as read</button>
              </div>
              <div className="dropdown-content">
                {notifications.map((notif) => (
                  <div key={notif.id} className={`notification-item ${notif.type}`}>
                    <div className="notification-icon">
                      <i className={`fas ${
                        notif.type === 'success' ? 'fa-check-circle' :
                        notif.type === 'warning' ? 'fa-exclamation-triangle' :
                        'fa-info-circle'
                      }`}></i>
                    </div>
                    <div className="notification-content">
                      <p className="notification-message">{notif.message}</p>
                      <span className="notification-time">{notif.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="dropdown-footer">
                <button type="button" className="view-all-link">View all notifications</button>
              </div>
            </div>
          )}
        </div>

        {/* Recent Activity */}
        <div className="topbar-dropdown">
          <button 
            className="topbar-icon-btn activity-btn"
            onClick={() => {
              setShowRecentActivity(!showRecentActivity);
              setShowNotifications(false);
              setShowUserMenu(false);
            }}
          >
            <i className="fas fa-clock"></i>
          </button>
          
          {showRecentActivity && (
            <div className="dropdown-menu activity-menu">
              <div className="dropdown-header">
                <h3>Recent Activity</h3>
              </div>
              <div className="dropdown-content">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="activity-item">
                    <div className="activity-icon">
                      <i className={activity.icon}></i>
                    </div>
                    <div className="activity-content">
                      <p className="activity-action">{activity.action}</p>
                      <p className="activity-ref">{activity.ref}</p>
                      <span className="activity-time">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="dropdown-footer">
                <button type="button" className="view-all-link">View all activity</button>
              </div>
            </div>
          )}
        </div>

        {/* User Menu */}
        <div className="topbar-dropdown">
          <button 
            className="topbar-icon-btn user-btn"
            onClick={() => {
              setShowUserMenu(!showUserMenu);
              setShowNotifications(false);
              setShowRecentActivity(false);
            }}
          >
            <i className="fas fa-user-circle"></i>
            <span className="user-name">SU</span>
            <i className="fas fa-chevron-down user-dropdown-arrow"></i>
          </button>
          
          {showUserMenu && (
            <div className="dropdown-menu user-menu">
              <header className="user-info">
                <i className="fas fa-user-circle user-avatar"></i>
                <div>
                  <h4>Super User</h4>
                  <p>admin@tom.sg</p>
                </div>
              </header>
              <nav>
                <button type="button" className="dropdown-item">
                  <i className="fas fa-user"></i>
                  My Profile
                </button>
                <button type="button" className="dropdown-item">
                  <i className="fas fa-cog"></i>
                  Settings
                </button>
                <button type="button" className="dropdown-item">
                  <i className="fas fa-question-circle"></i>
                  Help & Support
                </button>
                <hr className="dropdown-divider" />
                <button type="button" className="dropdown-item logout">
                  <i className="fas fa-sign-out-alt"></i>
                  Logout
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* Overlay to close dropdowns when clicking outside */}
      {(showNotifications || showRecentActivity || showUserMenu) && (
        <div 
          className="topbar-overlay" 
          onClick={() => {
            setShowNotifications(false);
            setShowRecentActivity(false);
            setShowUserMenu(false);
          }}
        ></div>
      )}
    </div>
  );
};

export default TopBar;
