import React, { useRef, useState } from 'react';

const Sidebar = ({ collapsed, setCollapsed, currentPage, setCurrentPage }) => {
  const salesItemRef = useRef(null);
  const purchasesItemRef = useRef(null);
  const payablesItemRef = useRef(null);
  const inventoryItemRef = useRef(null);
  const financialItemRef = useRef(null);
  const bankItemRef = useRef(null);
  const orderManagementItemRef = useRef(null);
  const customersItemRef = useRef(null);
  const [submenuTop, setSubmenuTop] = useState(100);
  const [purchasesSubmenuTop, setPurchasesSubmenuTop] = useState(100);
  const [payablesSubmenuTop, setPayablesSubmenuTop] = useState(100);
  const [inventorySubmenuTop, setInventorySubmenuTop] = useState(100);
  const [financialSubmenuTop, setFinancialSubmenuTop] = useState(100);
  const [bankSubmenuTop, setBankSubmenuTop] = useState(100);
  const [orderManagementSubmenuTop, setOrderManagementSubmenuTop] = useState(100);
  const [customersSubmenuTop, setCustomersSubmenuTop] = useState(100);
  const [nestedSubmenuTop, setNestedSubmenuTop] = useState({});

  const handleSalesHover = () => {
    if (salesItemRef.current) {
      const rect = salesItemRef.current.getBoundingClientRect();
      setSubmenuTop(rect.top);
    }
  };

  const handlePurchasesHover = () => {
    if (purchasesItemRef.current) {
      const rect = purchasesItemRef.current.getBoundingClientRect();
      setPurchasesSubmenuTop(rect.top);
    }
  };

  const handlePayablesHover = () => {
    if (payablesItemRef.current) {
      const rect = payablesItemRef.current.getBoundingClientRect();
      setPayablesSubmenuTop(rect.top);
    }
  };

  const handleInventoryHover = () => {
    if (inventoryItemRef.current) {
      const rect = inventoryItemRef.current.getBoundingClientRect();
      setInventorySubmenuTop(rect.top);
    }
  };

  const handleBankHover = () => {
    if (bankItemRef.current) {
      const rect = bankItemRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how much space we need (estimate based on number of items)
      const estimatedSubmenuHeight = 350; // Approximate height for Bank submenu
      const spaceBelow = viewportHeight - rect.top;
      
      // If submenu would extend beyond viewport, position it higher
      let topPosition = rect.top;
      if (spaceBelow < estimatedSubmenuHeight) {
        // Position submenu so bottom aligns with viewport bottom with some padding
        topPosition = viewportHeight - estimatedSubmenuHeight - 20;
        // But don't go above the top of viewport
        topPosition = Math.max(20, topPosition);
      }
      
      setBankSubmenuTop(topPosition);
    }
  };

  const handleOrderManagementHover = () => {
    if (orderManagementItemRef.current) {
      const rect = orderManagementItemRef.current.getBoundingClientRect();
      setOrderManagementSubmenuTop(rect.top);
    }
  };

  const handleCustomersHover = () => {
    if (customersItemRef.current) {
      const rect = customersItemRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how much space we need (estimate based on number of items)
      const estimatedSubmenuHeight = 600; // Approximate height for Customers submenu (14 items)
      const spaceBelow = viewportHeight - rect.top;
      
      // If submenu would extend beyond viewport, position it higher
      let topPosition = rect.top;
      if (spaceBelow < estimatedSubmenuHeight) {
        // Position submenu so bottom aligns with viewport bottom with some padding
        topPosition = viewportHeight - estimatedSubmenuHeight - 20;
        // But don't go above the top of viewport
        topPosition = Math.max(20, topPosition);
      }
      
      setCustomersSubmenuTop(topPosition);
    }
  };

  const handleFinancialHover = () => {
    if (financialItemRef.current) {
      const rect = financialItemRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how much space we need (estimate based on number of items)
      const estimatedSubmenuHeight = 450; // Approximate height for Financial submenu
      const spaceBelow = viewportHeight - rect.top;
      
      // If submenu would extend beyond viewport, position it higher
      let topPosition = rect.top;
      if (spaceBelow < estimatedSubmenuHeight) {
        // Position submenu so bottom aligns with viewport bottom with some padding
        topPosition = viewportHeight - estimatedSubmenuHeight - 20;
        // But don't go above the top of viewport
        topPosition = Math.max(20, topPosition);
      }
      
      setFinancialSubmenuTop(topPosition);
    }
  };

  const handleNestedHover = (event, itemId) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setNestedSubmenuTop(prev => ({
      ...prev,
      [itemId]: rect.top
    }));
  };

  const salesSubItems = [
    { 
      id: 'create-enquiries',
      label: 'Create Enquiry',
      hasSubmenu: true,
      submenu: [
        { id: 'view-enquiries', label: 'List' }
      ]
    },
    { 
      id: 'prepare-quotations',
      label: 'Create Quotation',
      hasSubmenu: true,
      submenu: [
        { id: 'view-quotations', label: 'List' }
      ]
    },
    { 
      id: 'enter-sales-orders',
      label: 'Enter Sales Order',
      hasSubmenu: true,
      submenu: [
        { id: 'view-sales-orders', label: 'List' }
      ]
    },
    { id: 'invoice-sales-orders', label: 'Invoice Sales Orders' },
    { 
      id: 'create-invoices',
      label: 'Create Invoices',
      hasSubmenu: true,
      submenu: [
        { id: 'view-invoices', label: 'List' }
      ]
    },
    { id: 'enter-cash-sales', label: 'Enter Cash Sales' },
  ];

  const purchasesSubItems = [
    { 
      id: 'enter-purchase-orders',
      label: 'Enter Purchase Orders',
      hasSubmenu: true,
      submenu: [
        { id: 'view-purchase-orders', label: 'List' }
      ]
    },
    { 
      id: 'receive-orders',
      label: 'Receive Orders',
      hasSubmenu: true,
      submenu: [
        { id: 'view-receive-orders', label: 'List' }
      ]
    },
    { 
      id: 'enter-vendor-return-authorizations',
      label: 'Enter Vendor Return Authorizations',
      hasSubmenu: true,
      submenu: [
        { id: 'view-vendor-return-authorizations', label: 'List' }
      ]
    },
    { id: 'approve-vendor-returns', label: 'Approve Vendor Returns', hideArrow: true },
    { id: 'ship-vendor-returns', label: 'Ship Vendor Returns', hideArrow: true },
    { 
      id: 'purchase-requisition',
      label: 'Purchase Requisition',
      hasSubmenu: true,
      submenu: [
        { id: 'view-purchase-requisition', label: 'List' }
      ]
    },
    { id: 'order-requisition', label: 'Order Requisition' },
    { 
      id: 'tom-custom-delivery-order',
      label: 'TOM Custom Delivery Order',
      hasSubmenu: true,
      submenu: [
        { id: 'view-tom-custom-delivery-order', label: 'List' }
      ]
    },
  ];

  const payablesSubItems = [
    { id: 'bill-purchase-orders', label: 'Bill Purchase Orders', hideArrow: true },
    { 
      id: 'enter-bills',
      label: 'Enter Bills',
      hasSubmenu: true,
      submenu: [
        { id: 'view-bills', label: 'List' }
      ]
    },
    { 
      id: 'pay-bills',
      label: 'Pay Bills',
      hasSubmenu: false,
      hideArrow: true
    },
    { 
      id: 'pay-single-vendor',
      label: 'Pay Single Vendor',
      hasSubmenu: true,
      submenu: [
        { id: 'view-vendor-payments', label: 'List' }
      ]
    },
    { 
      id: 'enter-vendor-prepayment',
      label: 'Enter Vendor Prepayment',
      hasSubmenu: true,
      submenu: [
        { id: 'view-vendor-prepayments', label: 'List' }
      ]
    },
    { 
      id: 'enter-vendor-credits',
      label: 'Enter Vendor Credits',
      hasSubmenu: true,
      submenu: [
        { id: 'view-vendor-credits', label: 'List' }
      ]
    },
    { id: 'credit-vendor-returns', label: 'Credit Vendor Returns', hideArrow: true },
  ];

  const inventorySubItems = [
    { 
      id: 'adjust-inventory',
      label: 'Adjust Inventory',
      hasSubmenu: true,
      submenu: [
        { id: 'view-inventory-adjustments', label: 'List' }
      ]
    },
    { 
      id: 'adjust-inventory-worksheet',
      label: 'Adjust Inventory Worksheet',
      hasSubmenu: true,
      submenu: [
        { id: 'view-inventory-worksheets', label: 'List' }
      ]
    },
    { 
      id: 'enter-intercompany-transfer-orders',
      label: 'Intercompany Transfer',
      hasSubmenu: true,
      submenu: [
        { id: 'view-intercompany-transfer-orders', label: 'List' }
      ]
    },
    { 
      id: 'enter-transfer-orders',
      label: 'Enter Transfer Orders',
      hasSubmenu: true,
      submenu: [
        { id: 'view-transfer-orders', label: 'List' }
      ]
    },
    { 
      id: 'order-items',
      label: 'Order Items',
      hasSubmenu: true,
      submenu: [
        { id: 'view-item-orders', label: 'List' }
      ]
    },
  ];

  const financialSubItems = [
    { 
      id: 'make-journal-entries',
      label: 'Make Journal Entries',
      hasSubmenu: true,
      submenu: [
        { id: 'view-journal-entries', label: 'List' }
      ]
    },
    { 
      id: 'make-advanced-intercompany-journal-entries',
      label: 'Make Advanced Intercompany Journal Entries',
      hasSubmenu: true,
      submenu: [
        { id: 'view-advanced-intercompany-journal-entries', label: 'List' }
      ]
    },
    { 
      id: 'set-up-budgets',
      label: 'Set Up Budgets',
      hasSubmenu: true,
      submenu: [
        { id: 'view-budgets', label: 'List' }
      ]
    },
    { 
      id: 'create-allocation-schedules',
      label: 'Create Allocation Schedules',
      hasSubmenu: true,
      submenu: [
        { id: 'view-allocation-schedules', label: 'List' }
      ]
    },
    { 
      id: 'create-intercompany-allocation-schedules',
      label: 'Create Intercompany Allocation Schedules',
      hasSubmenu: true,
      submenu: [
        { id: 'view-intercompany-allocation-schedules', label: 'List' }
      ]
    },
    { 
      id: 'revalue-open-currency-balances',
      label: 'Revalue Open Currency Balances',
      hasSubmenu: true,
      submenu: [
        { id: 'view-currency-revaluations', label: 'List' }
      ]
    },
    { 
      id: 'make-statistical-journal-entries',
      label: 'Make Statistical Journal Entries',
      hasSubmenu: true,
      submenu: [
        { id: 'view-statistical-journal-entries', label: 'List' }
      ]
    },
    { 
      id: 'create-statistical-schedule',
      label: 'Create Statistical Schedule',
      hasSubmenu: true,
      submenu: [
        { id: 'view-statistical-schedules', label: 'List' }
      ]
    },
  ];

  const bankSubItems = [
    { 
      id: 'write-checks',
      label: 'Write Checks',
      hasSubmenu: true,
      submenu: [
        { id: 'view-checks', label: 'List' }
      ]
    },
    { 
      id: 'make-deposits',
      label: 'Make Deposits',
      hasSubmenu: true,
      submenu: [
        { id: 'view-deposits', label: 'List' }
      ]
    },
    { 
      id: 'transfer-funds',
      label: 'Transfer Funds',
      hasSubmenu: true,
      submenu: [
        { id: 'view-transfers', label: 'List' }
      ]
    },
    { id: 'reconcile-bank-statement', label: 'Reconcile Bank Statement', hideArrow: true },
    { 
      id: 'reconcile-account-statement',
      label: 'Reconcile Account Statement',
      hasSubmenu: true,
      submenu: [
        { id: 'view-account-reconciliations', label: 'List' }
      ]
    },
    { id: 'reconciliation-rules', label: 'Reconciliation Rules', hideArrow: true },
    { 
      id: 'write-tax-liability',
      label: 'Write Tax Liability',
      hasSubmenu: true,
      submenu: [
        { id: 'view-tax-liabilities', label: 'List' }
      ]
    },
  ];

  const orderManagementSubItems = [
    { 
      id: 'commit-orders',
      label: 'Commit Orders',
      hasSubmenu: true,
      submenu: [
        { id: 'commit-order-schedule', label: 'Schedule' }
      ]
    },
    { id: 'reallocate-items', label: 'Reallocate Items', hideArrow: true },
    { 
      id: 'fulfill-orders',
      label: 'Fulfill Orders',
      hasSubmenu: true,
      submenu: [
        { id: 'view-fulfill-orders', label: 'List' }
      ]
    },
  ];

  const customersSubItems = [
    { 
      id: 'accept-customer-payments',
      label: 'Accept Customer Payments',
      hasSubmenu: true,
      submenu: [
        { id: 'view-customer-payments', label: 'List' }
      ]
    },
    { id: 'issue-customer-refund', label: 'Issue Customer Refund', hideArrow: true },
    { 
      id: 'issue-return-authorizations',
      label: 'Issue Return Authorizations',
      hasSubmenu: true,
      submenu: [
        { id: 'view-return-authorizations', label: 'List' }
      ]
    },
    { id: 'approve-return-authorizations', label: 'Approve Return Authorizations', hideArrow: true },
    { 
      id: 'receive-returned-order',
      label: 'Receive Returned Order',
      hasSubmenu: true,
      submenu: [
        { id: 'view-returned-orders', label: 'List' }
      ]
    },
    { 
      id: 'issue-credit-memos',
      label: 'Issue Credit Memos',
      hasSubmenu: true,
      submenu: [
        { id: 'view-credit-memos', label: 'List' }
      ]
    },
    { 
      id: 'refund-cash-sales',
      label: 'Refund Cash Sales',
      hasSubmenu: true,
      submenu: [
        { id: 'view-cash-sale-refunds', label: 'List' }
      ]
    },
    { 
      id: 'assess-finance-charges',
      label: 'Assess Finance Charges',
      hasSubmenu: true,
      submenu: [
        { id: 'view-finance-charges', label: 'List' }
      ]
    },
    { 
      id: 'record-customer-deposits',
      label: 'Record Customer Deposits',
      hasSubmenu: true,
      submenu: [
        { id: 'view-customer-deposits', label: 'List' }
      ]
    },
    { 
      id: 'invoice-billable-customers',
      label: 'Invoice Billable Customers'
    },
    { id: 'generate-statements', label: 'Generate Statements', hideArrow: true },
    { id: 'print-individual-statement', label: 'Print Individual Statement', hideArrow: true },
    { id: 'generate-price-lists', label: 'Generate Price Lists', hideArrow: true },
    { id: 'individual-price-list', label: 'Individual Price List', hideArrow: true },
  ];

  const menuItems = [
    { id: 'dashboard', icon: 'fas fa-tachometer-alt', label: 'Dashboard' },
    { id: 'expenses', icon: 'fas fa-file-invoice-dollar', label: 'Expenses' },
    { id: 'reports', icon: 'fas fa-chart-bar', label: 'Reports' },
  ];

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="logo-container">
        <div className="logo">
          <img 
            className="logo-img" 
            src="https://www.tom.sg/wp-content/uploads/2021/11/tom_logo-300x135.png" 
            alt="TOM Logo"
          />
        </div>
        <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
          <i className="fas fa-chevron-left"></i>
        </button>
      </div>
      
      <div className="nav-menu">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => setCurrentPage(item.id)}
          >
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </div>
        ))}
        
        {/* Sales Menu with Submenu */}
        <div className="nav-item-parent" onMouseEnter={handleSalesHover}>
          <div
            ref={salesItemRef}
            className="nav-item"
          >
            <i className="fas fa-shopping-cart"></i>
            <span>Sales</span>
          </div>
          <div className="submenu" style={{ top: `${submenuTop}px` }}>
            {salesSubItems.map((subItem) => (
              <div key={subItem.id} className="submenu-item-wrapper">
                {subItem.hasSubmenu ? (
                  <>
                    <div
                      className={`submenu-item has-nested ${currentPage === subItem.id ? 'active' : ''}`}
                      onClick={() => setCurrentPage(subItem.id)}
                      onMouseEnter={(e) => handleNestedHover(e, subItem.id)}
                    >
                      <i className="fas fa-chevron-right"></i>
                      <span>{subItem.label}</span>
                      <i className="fas fa-chevron-right nested-arrow"></i>
                    </div>
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[subItem.id] || 0}px` }}>
                      {subItem.submenu.map((nestedItem) => (
                        <div
                          key={nestedItem.id}
                          className={`nested-submenu-item ${currentPage === nestedItem.id ? 'active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentPage(nestedItem.id);
                          }}
                        >
                          <span>{nestedItem.label}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div
                    className={`submenu-item ${currentPage === subItem.id ? 'active' : ''}`}
                    onClick={() => setCurrentPage(subItem.id)}
                  >
                    <i className="fas fa-chevron-right"></i>
                    <span>{subItem.label}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Purchases Menu with Submenu */}
        <div className="nav-item-parent" onMouseEnter={handlePurchasesHover}>
          <div
            ref={purchasesItemRef}
            className="nav-item"
          >
            <i className="fas fa-box"></i>
            <span>Purchases</span>
          </div>
          <div className="submenu" style={{ top: `${purchasesSubmenuTop}px` }}>
            {purchasesSubItems.map((subItem) => (
              <div key={subItem.id} className="submenu-item-wrapper">
                {subItem.hasSubmenu ? (
                  <>
                    <div
                      className={`submenu-item has-nested ${currentPage === subItem.id ? 'active' : ''}`}
                      onClick={() => setCurrentPage(subItem.id)}
                      onMouseEnter={(e) => handleNestedHover(e, `purchases-${subItem.id}`)}
                    >
                      <i className="fas fa-chevron-right"></i>
                      <span>{subItem.label}</span>
                      <i className="fas fa-chevron-right nested-arrow"></i>
                    </div>
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[`purchases-${subItem.id}`] || 0}px` }}>
                      {subItem.submenu.map((nestedItem) => (
                        <div
                          key={nestedItem.id}
                          className={`nested-submenu-item ${currentPage === nestedItem.id ? 'active' : ''}`}
                          onClick={() => setCurrentPage(nestedItem.id)}
                        >
                          <span>{nestedItem.label}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div
                    className={`submenu-item ${currentPage === subItem.id ? 'active' : ''}`}
                    onClick={() => setCurrentPage(subItem.id)}
                  >
                    {!subItem.hideArrow && <i className="fas fa-chevron-right"></i>}
                    <span>{subItem.label}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Payables Menu with Submenu */}
        <div className="nav-item-parent" onMouseEnter={handlePayablesHover}>
          <div
            ref={payablesItemRef}
            className="nav-item"
          >
            <i className="fas fa-file-invoice-dollar"></i>
            <span>Payables</span>
          </div>
          <div className="submenu" style={{ top: `${payablesSubmenuTop}px` }}>
            {payablesSubItems.map((subItem) => (
              <div key={subItem.id} className="submenu-item-wrapper">
                {subItem.hasSubmenu ? (
                  <>
                    <div
                      className={`submenu-item has-nested ${currentPage === subItem.id ? 'active' : ''}`}
                      onClick={() => setCurrentPage(subItem.id)}
                      onMouseEnter={(e) => handleNestedHover(e, `payables-${subItem.id}`)}
                    >
                      <i className="fas fa-chevron-right"></i>
                      <span>{subItem.label}</span>
                      <i className="fas fa-chevron-right nested-arrow"></i>
                    </div>
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[`payables-${subItem.id}`] || 0}px` }}>
                      {subItem.submenu.map((nestedItem) => (
                        <div
                          key={nestedItem.id}
                          className={`nested-submenu-item ${currentPage === nestedItem.id ? 'active' : ''}`}
                          onClick={() => setCurrentPage(nestedItem.id)}
                        >
                          <span>{nestedItem.label}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div
                    className={`submenu-item ${currentPage === subItem.id ? 'active' : ''}`}
                    onClick={() => setCurrentPage(subItem.id)}
                  >
                    {!subItem.hideArrow && <i className="fas fa-chevron-right"></i>}
                    <span>{subItem.label}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Inventory Menu with Submenu */}
        <div className="nav-item-parent" onMouseEnter={handleInventoryHover}>
          <div
            ref={inventoryItemRef}
            className="nav-item"
          >
            <i className="fas fa-boxes"></i>
            <span>Inventory</span>
          </div>
          <div className="submenu" style={{ top: `${inventorySubmenuTop}px` }}>
            {inventorySubItems.map((subItem) => (
              <div key={subItem.id} className="submenu-item-wrapper">
                {subItem.hasSubmenu ? (
                  <>
                    <div
                      className={`submenu-item has-nested ${currentPage === subItem.id ? 'active' : ''}`}
                      onClick={() => setCurrentPage(subItem.id)}
                      onMouseEnter={(e) => handleNestedHover(e, `inventory-${subItem.id}`)}
                    >
                      <i className="fas fa-chevron-right"></i>
                      <span>{subItem.label}</span>
                      <i className="fas fa-chevron-right nested-arrow"></i>
                    </div>
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[`inventory-${subItem.id}`] || 0}px` }}>
                      {subItem.submenu.map((nestedItem) => (
                        <div
                          key={nestedItem.id}
                          className={`nested-submenu-item ${currentPage === nestedItem.id ? 'active' : ''}`}
                          onClick={() => setCurrentPage(nestedItem.id)}
                        >
                          <span>{nestedItem.label}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div
                    className={`submenu-item ${currentPage === subItem.id ? 'active' : ''}`}
                    onClick={() => setCurrentPage(subItem.id)}
                  >
                    {!subItem.hideArrow && <i className="fas fa-chevron-right"></i>}
                    <span>{subItem.label}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Financial Menu with Submenu */}
        <div className="nav-item-parent" onMouseEnter={handleFinancialHover}>
          <div
            ref={financialItemRef}
            className="nav-item"
          >
            <i className="fas fa-dollar-sign"></i>
            <span>Financial</span>
          </div>
          <div className="submenu" style={{ top: `${financialSubmenuTop}px` }}>
            {financialSubItems.map((subItem) => (
              <div key={subItem.id} className="submenu-item-wrapper">
                {subItem.hasSubmenu ? (
                  <>
                    <div
                      className={`submenu-item has-nested ${currentPage === subItem.id ? 'active' : ''}`}
                      onClick={() => setCurrentPage(subItem.id)}
                      onMouseEnter={(e) => handleNestedHover(e, `financial-${subItem.id}`)}
                    >
                      <i className="fas fa-chevron-right"></i>
                      <span>{subItem.label}</span>
                      <i className="fas fa-chevron-right nested-arrow"></i>
                    </div>
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[`financial-${subItem.id}`] || 0}px` }}>
                      {subItem.submenu.map((nestedItem) => (
                        <div
                          key={nestedItem.id}
                          className={`nested-submenu-item ${currentPage === nestedItem.id ? 'active' : ''}`}
                          onClick={() => setCurrentPage(nestedItem.id)}
                        >
                          <span>{nestedItem.label}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div
                    className={`submenu-item ${currentPage === subItem.id ? 'active' : ''}`}
                    onClick={() => setCurrentPage(subItem.id)}
                  >
                    {!subItem.hideArrow && <i className="fas fa-chevron-right"></i>}
                    <span>{subItem.label}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bank Menu with Submenu */}
        <div className="nav-item-parent" onMouseEnter={handleBankHover}>
          <div
            ref={bankItemRef}
            className="nav-item"
          >
            <i className="fas fa-university"></i>
            <span>Bank</span>
          </div>
          <div className="submenu" style={{ top: `${bankSubmenuTop}px` }}>
            {bankSubItems.map((subItem) => (
              <div key={subItem.id} className="submenu-item-wrapper">
                {subItem.hasSubmenu ? (
                  <>
                    <div
                      className={`submenu-item has-nested ${currentPage === subItem.id ? 'active' : ''}`}
                      onClick={() => setCurrentPage(subItem.id)}
                      onMouseEnter={(e) => handleNestedHover(e, `bank-${subItem.id}`)}
                    >
                      <i className="fas fa-chevron-right"></i>
                      <span>{subItem.label}</span>
                      <i className="fas fa-chevron-right nested-arrow"></i>
                    </div>
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[`bank-${subItem.id}`] || 0}px` }}>
                      {subItem.submenu.map((nestedItem) => (
                        <div
                          key={nestedItem.id}
                          className={`nested-submenu-item ${currentPage === nestedItem.id ? 'active' : ''}`}
                          onClick={() => setCurrentPage(nestedItem.id)}
                        >
                          <span>{nestedItem.label}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div
                    className={`submenu-item ${currentPage === subItem.id ? 'active' : ''}`}
                    onClick={() => setCurrentPage(subItem.id)}
                  >
                    {!subItem.hideArrow && <i className="fas fa-chevron-right"></i>}
                    <span>{subItem.label}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Order Management Menu with Submenu */}
        <div className="nav-item-parent" onMouseEnter={handleOrderManagementHover}>
          <div
            ref={orderManagementItemRef}
            className="nav-item"
          >
            <i className="fas fa-clipboard-list"></i>
            <span>Order Management</span>
          </div>
          <div className="submenu" style={{ top: `${orderManagementSubmenuTop}px` }}>
            {orderManagementSubItems.map((subItem) => (
              <div key={subItem.id} className="submenu-item-wrapper">
                {subItem.hasSubmenu ? (
                  <>
                    <div
                      className={`submenu-item has-nested ${currentPage === subItem.id ? 'active' : ''}`}
                      onClick={() => setCurrentPage(subItem.id)}
                      onMouseEnter={(e) => handleNestedHover(e, `order-management-${subItem.id}`)}
                    >
                      <i className="fas fa-chevron-right"></i>
                      <span>{subItem.label}</span>
                      <i className="fas fa-chevron-right nested-arrow"></i>
                    </div>
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[`order-management-${subItem.id}`] || 0}px` }}>
                      {subItem.submenu.map((nestedItem) => (
                        <div
                          key={nestedItem.id}
                          className={`nested-submenu-item ${currentPage === nestedItem.id ? 'active' : ''}`}
                          onClick={() => setCurrentPage(nestedItem.id)}
                        >
                          <span>{nestedItem.label}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div
                    className={`submenu-item ${currentPage === subItem.id ? 'active' : ''}`}
                    onClick={() => setCurrentPage(subItem.id)}
                  >
                    {!subItem.hideArrow && <i className="fas fa-chevron-right"></i>}
                    <span>{subItem.label}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Customers Menu with Submenu */}
        <div className="nav-item-parent" onMouseEnter={handleCustomersHover}>
          <div
            ref={customersItemRef}
            className="nav-item"
          >
            <i className="fas fa-users"></i>
            <span>Customers</span>
          </div>
          <div className="submenu" style={{ top: `${customersSubmenuTop}px` }}>
            {customersSubItems.map((subItem) => (
              <div key={subItem.id} className="submenu-item-wrapper">
                {subItem.hasSubmenu ? (
                  <>
                    <div
                      className={`submenu-item has-nested ${currentPage === subItem.id ? 'active' : ''}`}
                      onClick={() => setCurrentPage(subItem.id)}
                      onMouseEnter={(e) => handleNestedHover(e, `customers-${subItem.id}`)}
                    >
                      <i className="fas fa-chevron-right"></i>
                      <span>{subItem.label}</span>
                      <i className="fas fa-chevron-right nested-arrow"></i>
                    </div>
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[`customers-${subItem.id}`] || 0}px` }}>
                      {subItem.submenu.map((nestedItem) => (
                        <div
                          key={nestedItem.id}
                          className={`nested-submenu-item ${currentPage === nestedItem.id ? 'active' : ''}`}
                          onClick={() => setCurrentPage(nestedItem.id)}
                        >
                          <span>{nestedItem.label}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div
                    className={`submenu-item ${currentPage === subItem.id ? 'active' : ''}`}
                    onClick={() => setCurrentPage(subItem.id)}
                  >
                    {!subItem.hideArrow && <i className="fas fa-chevron-right"></i>}
                    <span>{subItem.label}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
