import React, { useRef, useState } from 'react';

const Sidebar = ({ collapsed, setCollapsed, currentPage, setCurrentPage }) => {
  const salesItemRef = useRef(null);
  const crmItemRef = useRef(null);
  const projectManagementItemRef = useRef(null);
  const purchasesItemRef = useRef(null);
  const payablesItemRef = useRef(null);
  const inventoryItemRef = useRef(null);
  const financialItemRef = useRef(null);
  const bankItemRef = useRef(null);
  const orderManagementItemRef = useRef(null);
  const customersItemRef = useRef(null);
  const payrollItemRef = useRef(null);
  const productionItemRef = useRef(null);
  const masterTablesItemRef = useRef(null);
  const drawingsDocumentsItemRef = useRef(null);
  const setupItemRef = useRef(null);
  const mastersItemRef = useRef(null);
  const reportsItemRef = useRef(null);
  const hrItemRef = useRef(null);
  const [submenuTop, setSubmenuTop] = useState(100);
  const [crmSubmenuTop, setCrmSubmenuTop] = useState(100);
  const [projectManagementSubmenuTop, setProjectManagementSubmenuTop] = useState(100);
  const [mastersSubmenuTop, setMastersSubmenuTop] = useState(100);
  const [reportsSubmenuTop, setReportsSubmenuTop] = useState(100);
  const [purchasesSubmenuTop, setPurchasesSubmenuTop] = useState(100);
  const [payablesSubmenuTop, setPayablesSubmenuTop] = useState(100);
  const [inventorySubmenuTop, setInventorySubmenuTop] = useState(100);
  const [financialSubmenuTop, setFinancialSubmenuTop] = useState(100);
  const [bankSubmenuTop, setBankSubmenuTop] = useState(100);
  const [orderManagementSubmenuTop, setOrderManagementSubmenuTop] = useState(100);
  const [customersSubmenuTop, setCustomersSubmenuTop] = useState(100);
  const [payrollSubmenuTop, setPayrollSubmenuTop] = useState(100);
  const [productionSubmenuTop, setProductionSubmenuTop] = useState(100);
  const [masterTablesSubmenuTop, setMasterTablesSubmenuTop] = useState(100);
  const [drawingsDocumentsSubmenuTop, setDrawingsDocumentsSubmenuTop] = useState(100);
  const [setupSubmenuTop, setSetupSubmenuTop] = useState(100);
  const [hrSubmenuTop, setHrSubmenuTop] = useState(100);
  const [nestedSubmenuTop, setNestedSubmenuTop] = useState({});

  // Helper function to calculate dynamic submenu position
  const calculateSubmenuPosition = (rect, submenuItems) => {
    const itemHeight = 44; // Height per menu item
    const padding = 16; // Top and bottom padding
    const estimatedHeight = submenuItems.length * itemHeight + padding;
    const maxSubmenuHeight = Math.min(estimatedHeight, window.innerHeight * 0.7); // 70vh max
    
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - rect.top;
    const spaceAbove = rect.top;
    
    // If submenu fits below, position it at menu item level
    if (maxSubmenuHeight <= spaceBelow - 20) {
      return rect.top;
    }
    
    // If submenu fits above, position it to end at menu item bottom
    if (maxSubmenuHeight <= spaceAbove - 20) {
      return Math.max(10, rect.bottom - maxSubmenuHeight);
    }
    
    // Submenu doesn't fit either way - position to maximize visibility
    if (spaceAbove > spaceBelow) {
      return Math.max(10, viewportHeight - maxSubmenuHeight - 10);
    } else {
      return rect.top;
    }
  };

  const handleSalesHover = () => {
    if (salesItemRef.current) {
      const rect = salesItemRef.current.getBoundingClientRect();
      setSubmenuTop(calculateSubmenuPosition(rect, salesSubItems));
    }
  };

  const handleCrmHover = () => {
    if (crmItemRef.current) {
      const rect = crmItemRef.current.getBoundingClientRect();
      setCrmSubmenuTop(calculateSubmenuPosition(rect, crmSubItems));
    }
  };

  const handleProjectManagementHover = () => {
    if (projectManagementItemRef.current) {
      const rect = projectManagementItemRef.current.getBoundingClientRect();
      setProjectManagementSubmenuTop(calculateSubmenuPosition(rect, projectManagementSubItems));
    }
  };

  const handlePurchasesHover = () => {
    if (purchasesItemRef.current) {
      const rect = purchasesItemRef.current.getBoundingClientRect();
      setPurchasesSubmenuTop(calculateSubmenuPosition(rect, purchasesSubItems));
    }
  };

  const handlePayablesHover = () => {
    if (payablesItemRef.current) {
      const rect = payablesItemRef.current.getBoundingClientRect();
      setPayablesSubmenuTop(calculateSubmenuPosition(rect, payablesSubItems));
    }
  };

  const handleInventoryHover = () => {
    if (inventoryItemRef.current) {
      const rect = inventoryItemRef.current.getBoundingClientRect();
      setInventorySubmenuTop(calculateSubmenuPosition(rect, inventorySubItems));
    }
  };

  const handleBankHover = () => {
    if (bankItemRef.current) {
      const rect = bankItemRef.current.getBoundingClientRect();
      setBankSubmenuTop(calculateSubmenuPosition(rect, bankSubItems));
    }
  };

  const handleOrderManagementHover = () => {
    if (orderManagementItemRef.current) {
      const rect = orderManagementItemRef.current.getBoundingClientRect();
      setOrderManagementSubmenuTop(calculateSubmenuPosition(rect, orderManagementSubItems));
    }
  };

  const handleCustomersHover = () => {
    if (customersItemRef.current) {
      const rect = customersItemRef.current.getBoundingClientRect();
      setCustomersSubmenuTop(calculateSubmenuPosition(rect, customersSubItems));
    }
  };

  const handleProductionHover = () => {
    if (productionItemRef.current) {
      const rect = productionItemRef.current.getBoundingClientRect();
      setProductionSubmenuTop(calculateSubmenuPosition(rect, productionSubItems));
    }
  };

  const handleMasterTablesHover = () => {
    if (masterTablesItemRef.current) {
      const rect = masterTablesItemRef.current.getBoundingClientRect();
      setMasterTablesSubmenuTop(calculateSubmenuPosition(rect, []));
    }
  };

  const handleDrawingsDocumentsHover = () => {
    if (drawingsDocumentsItemRef.current) {
      const rect = drawingsDocumentsItemRef.current.getBoundingClientRect();
      setDrawingsDocumentsSubmenuTop(calculateSubmenuPosition(rect, []));
    }
  };

  const handleSetupHover = () => {
    if (setupItemRef.current) {
      const rect = setupItemRef.current.getBoundingClientRect();
      setSetupSubmenuTop(calculateSubmenuPosition(rect, setupSubItems));
    }
  };

  const handlePayrollHover = () => {
    if (payrollItemRef.current) {
      const rect = payrollItemRef.current.getBoundingClientRect();
      setPayrollSubmenuTop(calculateSubmenuPosition(rect, payrollSubItems));
    }
  };

  const handleHrHover = () => {
    if (hrItemRef.current) {
      const rect = hrItemRef.current.getBoundingClientRect();
      setHrSubmenuTop(calculateSubmenuPosition(rect, hrSubItems));
    }
  };

  const handleMastersHover = () => {
    if (mastersItemRef.current) {
      const rect = mastersItemRef.current.getBoundingClientRect();
      setMastersSubmenuTop(calculateSubmenuPosition(rect, mastersSubItems));
    }
  };

  const handleReportsHover = () => {
    if (reportsItemRef.current) {
      const rect = reportsItemRef.current.getBoundingClientRect();
      setReportsSubmenuTop(calculateSubmenuPosition(rect, reportsSubItems));
    }
  };

  const handleFinancialHover = () => {
    if (financialItemRef.current) {
      const rect = financialItemRef.current.getBoundingClientRect();
      setFinancialSubmenuTop(calculateSubmenuPosition(rect, financialSubItems));
    }
  };

  const handleNestedHover = (event, itemId) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const nestedSubmenuHeight = 200; // Max height we set in CSS
    
    // Always try to align with the parent item first
    let position = rect.top;
    
    // Only adjust if it would go significantly off-screen
    if (rect.top + nestedSubmenuHeight > viewportHeight - 20) {
      // Calculate how much we need to move up
      const overhang = (rect.top + nestedSubmenuHeight) - (viewportHeight - 20);
      position = rect.top - overhang;
      
      // But don't go above a reasonable minimum
      position = Math.max(20, position);
    }
    
    setNestedSubmenuTop(prev => ({
      ...prev,
      [itemId]: position
    }));
  };

  const crmSubItems = [
    { id: 'view-leads', label: 'Lead Management', hideArrow: true },
    { id: 'view-opportunities', label: 'Opportunity Management', hideArrow: true }
  ];

  const projectManagementSubItems = [
    { 
      id: 'view-project-masters',
      label: 'Project Masters',
      hideArrow: true
    },
    { 
      id: 'view-tasks',
      label: 'Tasks',
      hideArrow: true
    },
    { 
      id: 'view-milestones',
      label: 'Milestones',
      hideArrow: true
    },
    { 
      id: 'view-resources',
      label: 'Resources',
      hideArrow: true
    },
    { id: 'gantt-chart', label: 'Gantt Chart', hideArrow: true },
    { id: 'project-reports-analytics', label: 'Reports & Analytics', hideArrow: true }
  ];

  const salesSubItems = [
    { 
      id: 'create-enquiries',
      label: 'Sales Enquiry',
      hasSubmenu: true,
      submenu: [
        { id: 'view-enquiries', label: 'List' }
      ]
    },
    { 
      id: 'prepare-quotations',
      label: 'Sales Quotation',
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
    { 
      id: 'create-project',
      label: 'Project',
      hasSubmenu: true,
      submenu: [
        { id: 'view-projects', label: 'List' }
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
    { 
      id: 'enter-cash-sales',
      label: 'Enter Cash Sales',
      hasSubmenu: true,
      submenu: [
        { id: 'view-cash-sales', label: 'List' }
      ]
    },
  ];

  const purchasesSubItems = [
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
      id: 'vendor-returns',
      label: 'Vendor Returns',
      hasSubmenu: true,
      submenu: [
        { id: 'enter-vendor-return-authorizations', label: 'Enter Vendor Return Authorizations' },
        { id: 'approve-vendor-returns', label: 'Approve Vendor Returns' },
        { id: 'ship-vendor-returns', label: 'Ship Vendor Returns' }
      ]
    },
    { 
      id: 'tom-custom-delivery-order',
      label: 'Delivery Order',
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
      id: 'approve-vendor-payments',
      label: 'Approve Vendor Payments',
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
      id: 'view-items',
      label: 'Items',
      hasSubmenu: false,
      hideArrow: true
    },
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
        { id: 'view-order-items', label: 'List' },
        { id: 'order-items', label: 'New Order Items' }
      ]
    },
  ];

  const financialSubItems = [
    { 
      id: 'view-chart-of-accounts',
      label: 'Chart of Accounts',
      hideArrow: true
    },
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

  const payrollSubItems = [
    { 
      id: 'payroll-setup',
      label: 'Payroll Setup',
      hasSubmenu: true,
      submenu: [
        { id: 'payroll-pay-component', label: 'Pay Component' },
        { id: 'payroll-pay-group', label: 'Pay Group' },
        { id: 'payroll-employee-pf', label: 'Employee PF' },
        { id: 'payroll-fwl-qualification', label: 'FWL Qualification' }
      ]
    },
    { 
      id: 'payroll-processing',
      label: 'Payroll Processing',
      hasSubmenu: true,
      submenu: [
        { id: 'payroll-pay-batch', label: 'Pay Batch' },
        { id: 'payroll-payee-employee', label: 'Payee Employee' },
        { id: 'payroll-retroactive-payment', label: 'Retroactive Payment' }
      ]
    },
    { 
      id: 'payroll-statutory',
      label: 'Statutory & Compliance',
      hasSubmenu: true,
      submenu: [
        { id: 'payroll-cpf-applied-age-group', label: 'CPF Applied Age Group' },
        { id: 'payroll-community-contribution-fund', label: 'Community Contribution Fund' },
        { id: 'payroll-sdl-master', label: 'SDL Master' },
        { id: 'payroll-ir8a-year', label: 'IR8A Year' }
      ]
    },
    { 
      id: 'payroll-data-prep',
      label: 'Data Preparation',
      hasSubmenu: true,
      submenu: [
        { id: 'view-yard-data', label: 'Yard Data' },
        { id: 'view-biometric-data', label: 'Biometric Data' },
        { id: 'view-manual-entry', label: 'Manual Entry' },
        { id: 'employee-daily-attendance-list', label: 'Employee Daily Attendance List' }
      ]
    },
    { 
      id: 'payroll-others',
      label: 'Others',
      hasSubmenu: true,
      submenu: [
        { id: 'payroll-loan-repayment-process', label: 'Loan Repayment Process' }
      ]
    }
  ];

  const hrSubItems = [
    { 
      id: 'hr-masters',
      label: 'Masters',
      hasSubmenu: true,
      submenu: [
        { id: 'hr-employee-master', label: 'Employee Master' },
        { id: 'hr-employee-profile', label: 'Employee Profile' },
        { id: 'hr-fwl-qualification', label: 'FWL Qualification' },
        { id: 'hr-shift-master', label: 'Shift Master' },
        { id: 'hr-asset-issue-to-employee', label: 'Asset Issue to Employee' },
        { id: 'hr-employee-loan-application', label: 'Employee Loan Application' },
        { id: 'hr-career-progress-salary', label: 'Career Progress Salary' },
        { id: 'hr-employee-exit-process', label: 'Employee Exit Process' }
      ]
    },
    {
      id: 'hr-leave',
      label: 'Leave',
      hasSubmenu: true,
      submenu: [
        { id: 'hr-leave-type', label: 'Leave Type' },
        { id: 'hr-employee-leave-application', label: 'Employee Leave Application' },
        { id: 'hr-employee-leave-enrollment', label: 'Employee Leave Enrollment' },
        { id: 'hr-employee-leave-reinstatement', label: 'Employee Leave Reinstatement' }
      ]
    }
  ];

  const setupSubItems = [
    { 
      id: 'setup-company', 
      label: 'Company',
      hasSubmenu: true,
      submenu: [
        { id: 'setup-company-information', label: 'Company Information' },
        { id: 'setup-enable-features', label: 'Enable Features' },
        { id: 'setup-subsidiary-settings-manager', label: 'Subsidiary Settings Manager' }
      ]
    },
    {
      id: 'setup-accounting',
      label: 'Accounting',
      hasSubmenu: true,
      submenu: [
        { id: 'setup-accounting-list', label: 'Accounting List' },
        { id: 'setup-expense-categories', label: 'Expense Categories' },
        { id: 'setup-expense-report-policies', label: 'Expense Report Policies' },
        { id: 'setup-manage-accounting-periods', label: 'Manage Accounting Periods' },
        { id: 'setup-accounting-preferences', label: 'Accounting Preferences' },
        { id: 'setup-invoicing-preferences', label: 'Invoicing Preferences' },
        { id: 'setup-finance-charge-preferences', label: 'Finance Charge Preferences' },
        { id: 'setup-tax-codes', label: 'Tax Codes' }
      ]
    },
    {
      id: 'setup-crm',
      label: 'CRM',
      hasSubmenu: true,
      submenu: [
        { id: 'setup-customer-status-list', label: 'Customer Status List' },
        { id: 'setup-crm-lists', label: 'CRM Lists' },
        { id: 'setup-crm-preferences', label: 'CRM Preferences' },
        { id: 'setup-crm-enquiry', label: 'CRM Enquiry' }
      ]
    },
    {
      id: 'setup-users-roles',
      label: 'Users/Roles',
      hasSubmenu: true,
      submenu: [
        { id: 'setup-manage-users', label: 'Manage Users' },
        { id: 'setup-show-role-differences', label: 'Show Role Differences' },
        { id: 'setup-two-factor-auth-roles', label: 'Two Factor Authentication Roles' }
      ]
    },
    {
      id: 'setup-integration',
      label: 'Integration',
      hasSubmenu: true,
      submenu: [
        { id: 'setup-manage-integration', label: 'Manage Integration' }
      ]
    },
    {
      id: 'setup-custom',
      label: 'Custom',
      hasSubmenu: true,
      submenu: [
        { id: 'setup-document-number-series', label: 'Document Number Series' }
      ]
    }
  ];

  const mastersSubItems = [
    { id: 'view-customer-masters', label: 'Customer Masters', hideArrow: true },
    { id: 'view-vendor-masters', label: 'Vendor Masters', hideArrow: true },
    { id: 'view-bank-masters', label: 'Bank Masters', hideArrow: true },
    { id: 'setup-subsidiaries', label: 'Subsidiary', hideArrow: true },
    { id: 'setup-department', label: 'Department', hideArrow: true },
    { id: 'setup-location', label: 'Location', hideArrow: true },
    { id: 'setup-classes', label: 'Classes', hideArrow: true }
  ];

  const reportsSubItems = [
    { 
      id: 'financial-reports',
      label: 'Financial',
      hasSubmenu: true,
      submenu: [
        { id: 'income-statement', label: 'Income Statement' },
        { id: 'balance-sheet', label: 'Balance Sheet' },
        { id: 'cash-flow-statement', label: 'Cash Flow Statement' },
        { id: 'general-ledger', label: 'General Ledger' },
        { id: 'trial-balance', label: 'Trial Balance' },
        { id: 'transaction-detail', label: 'Transaction Detail' },
        { id: 'realized-exchange-gains-losses', label: 'Realized Exchange Rate Gains and Losses' },
        { id: 'unrealized-exchange-gains-losses', label: 'Unrealized Exchange Rate Gains and Losses' },
        { id: 'cta-balance-audit', label: 'CTA Balance Audit' },
        { id: 'pay-batch-posting-journals', label: 'Pay-batch Posting Journals' }
      ]
    },
    { 
      id: 'inventory-reports',
      label: 'Inventory',
      hasSubmenu: true,
      submenu: [
        { id: 'inventory-profitability', label: 'Inventory Profitability' },
        { id: 'inventory-summary', label: 'Inventory Summary' },
        { id: 'inventory-valuation', label: 'Inventory Valuation' },
        { id: 'stock-movement', label: 'Stock Movement Report' },
        { id: 'low-stock-report', label: 'Low Stock Report' },
        { id: 'inventory-aging', label: 'Inventory Aging Report' },
        { id: 'abc-analysis', label: 'ABC Analysis' },
        { id: 'inventory-turnover', label: 'Inventory Turnover Report' },
        { id: 'dead-stock-report', label: 'Dead Stock Report' },
        { id: 'inventory-reconciliation', label: 'Inventory Reconciliation' },
        { id: 'warehouse-summary', label: 'Warehouse Summary' }
      ]
    }
  ];

  const productionSubItems = [
    { id: 'scan-qr-code', label: 'Scan QR Code', hideArrow: true },
    { 
      id: 'production-dashboard',
      label: 'Dashboard',
      hasSubmenu: true,
      submenu: [
        { id: 'production-dashboard-overall', label: 'Overall Dashboard' },
        { id: 'dashboard-module', label: 'Module Dashboard' },
        { id: 'production-workshop-dashboard', label: 'Workshop Dashboard' }
      ]
    },
    { id: 'status-all-modules', label: 'Status All Modules', hideArrow: true },
    { 
      id: 'production-stages',
      label: 'Production Stages',
      hasSubmenu: true,
      submenu: [
        { id: 'frame-fabrication', label: 'Fabrication' },
        { id: 'production-me-services', label: 'M&E Assembly' },
        { id: 'testing-alignment', label: 'Testing & Alignment' },
        { id: 'fabrication-qa-qc', label: 'Fabrication QA & QC' },
        { id: 'packaging', label: 'Packaging' },
        { id: 'production-delivery', label: 'Delivery' },
        { id: 'anchoring', label: 'Anchoring' },
        { id: 'hoisting', label: 'Hoisting' },
        { id: 'positioning', label: 'Positioning' },
        { id: 'me-hookup', label: 'M&E Hookup' },
        { id: 'installation', label: 'Installation' },
        { id: 'final-qa-qc', label: 'Final QA QC' }
      ]
    },
    { 
      id: 'production-master-tables',
      label: 'Master Tables',
      hasSubmenu: true,
      submenu: [
        { id: 'production-project-masters', label: 'Project Masters' },
        { id: 'production-site-locations', label: 'Site Locations' },
        { id: 'production-contractors', label: 'Contractors' }
      ]
    },
    { 
      id: 'production-drawings-documents',
      label: 'Drawings & Documents',
      hasSubmenu: true,
      submenu: [
        { id: 'production-upload-drawings', label: 'Upload Drawings' },
        { id: 'production-project-documents', label: 'Project Documents' }
      ]
    },
    { id: 'production-time-tracking', label: 'Module Wise Time Tracking', hideArrow: true }
  ];

  const menuItems = [
    { id: 'dashboard', icon: 'fas fa-tachometer-alt', label: 'Dashboard' },
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
        
        {/* CRM Menu with Submenu */}
        <div className="nav-item-parent" onMouseEnter={handleCrmHover}>
          <div
            ref={crmItemRef}
            className="nav-item"
          >
            <i className="fas fa-users"></i>
            <span>CRM</span>
          </div>
          <div className="submenu" style={{ top: `${crmSubmenuTop}px`, '--submenu-top': `${crmSubmenuTop}px` }}>
            {crmSubItems.map((subItem) => (
              <div key={subItem.id} className="submenu-item-wrapper">
                {subItem.hasSubmenu ? (
                  <>
                    <div
                      className={`submenu-item has-nested ${currentPage === subItem.id ? 'active' : ''}`}
                      onClick={() => setCurrentPage(subItem.id)}
                      onMouseEnter={(e) => handleNestedHover(e, `crm-${subItem.id}`)}
                    >
                      <i className="fas fa-chevron-right"></i>
                      <span>{subItem.label}</span>
                      <i className="fas fa-chevron-right nested-arrow"></i>
                    </div>
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[`crm-${subItem.id}`] || 0}px`, '--nested-submenu-top': `${nestedSubmenuTop[`crm-${subItem.id}`] || 0}px` }}>
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
                    {!subItem.hideArrow && <i className="fas fa-chevron-right"></i>}
                    <span>{subItem.label}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sales Menu with Submenu */}
        <div className="nav-item-parent" onMouseEnter={handleSalesHover}>
          <div
            ref={salesItemRef}
            className="nav-item"
          >
            <i className="fas fa-shopping-cart"></i>
            <span>Sales</span>
          </div>
          <div className="submenu" style={{ top: `${submenuTop}px`, '--submenu-top': `${submenuTop}px` }}>
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
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[subItem.id] || 0}px`, '--nested-submenu-top': `${nestedSubmenuTop[subItem.id] || 0}px` }}>
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

        {/* Project Management Menu with Submenu */}
        <div className="nav-item-parent" onMouseEnter={handleProjectManagementHover}>
          <div
            ref={projectManagementItemRef}
            className="nav-item"
          >
            <i className="fas fa-tasks"></i>
            <span>Project Management</span>
          </div>
          <div className="submenu" style={{ top: `${projectManagementSubmenuTop}px`, '--submenu-top': `${projectManagementSubmenuTop}px` }}>
            {projectManagementSubItems.map((subItem) => (
              <div key={subItem.id} className="submenu-item-wrapper">
                {subItem.hasSubmenu ? (
                  <>
                    <div
                      className={`submenu-item has-nested ${currentPage === subItem.id ? 'active' : ''}`}
                      onClick={() => setCurrentPage(subItem.id)}
                      onMouseEnter={(e) => handleNestedHover(e, `pm-${subItem.id}`)}
                    >
                      <i className="fas fa-chevron-right"></i>
                      <span>{subItem.label}</span>
                      <i className="fas fa-chevron-right nested-arrow"></i>
                    </div>
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[`pm-${subItem.id}`] || 0}px`, '--nested-submenu-top': `${nestedSubmenuTop[`pm-${subItem.id}`] || 0}px` }}>
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
                    {!subItem.hideArrow && <i className="fas fa-chevron-right"></i>}
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
          <div className="submenu" style={{ top: `${purchasesSubmenuTop}px`, '--submenu-top': `${purchasesSubmenuTop}px` }}>
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
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[`purchases-${subItem.id}`] !== undefined ? nestedSubmenuTop[`purchases-${subItem.id}`] : 100}px` }}>
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
          <div className="submenu" style={{ top: `${payablesSubmenuTop}px`, '--submenu-top': `${payablesSubmenuTop}px` }}>
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
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[`payables-${subItem.id}`] || 0}px`, '--nested-submenu-top': `${nestedSubmenuTop[`payables-${subItem.id}`] || 0}px` }}>
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
          <div className="submenu" style={{ top: `${inventorySubmenuTop}px`, '--submenu-top': `${inventorySubmenuTop}px` }}>
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
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[`inventory-${subItem.id}`] || 0}px`, '--nested-submenu-top': `${nestedSubmenuTop[`inventory-${subItem.id}`] || 0}px` }}>
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
          <div className="submenu" style={{ top: `${financialSubmenuTop}px`, '--submenu-top': `${financialSubmenuTop}px` }}>
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
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[`financial-${subItem.id}`] || 0}px`, '--nested-submenu-top': `${nestedSubmenuTop[`financial-${subItem.id}`] || 0}px` }}>
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
          <div className="submenu" style={{ top: `${bankSubmenuTop}px`, '--submenu-top': `${bankSubmenuTop}px` }}>
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
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[`bank-${subItem.id}`] || 0}px`, '--nested-submenu-top': `${nestedSubmenuTop[`bank-${subItem.id}`] || 0}px` }}>
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
          <div className="submenu" style={{ top: `${orderManagementSubmenuTop}px`, '--submenu-top': `${orderManagementSubmenuTop}px` }}>
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
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[`order-management-${subItem.id}`] || 0}px`, '--nested-submenu-top': `${nestedSubmenuTop[`order-management-${subItem.id}`] || 0}px` }}>
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
          <div className="submenu" style={{ top: `${customersSubmenuTop}px`, '--submenu-top': `${customersSubmenuTop}px` }}>
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
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[`customers-${subItem.id}`] || 0}px`, '--nested-submenu-top': `${nestedSubmenuTop[`customers-${subItem.id}`] || 0}px` }}>
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
        
        {/* Payroll Menu with Submenu */}
        <div className="nav-item-parent" onMouseEnter={handlePayrollHover}>
          <div
            ref={payrollItemRef}
            className="nav-item"
          >
            <i className="fas fa-money-bill-wave"></i>
            <span>Payroll</span>
          </div>
          <div className="submenu" style={{ top: `${payrollSubmenuTop}px`, '--submenu-top': `${payrollSubmenuTop}px` }}>
            {payrollSubItems.map((subItem) => (
              <div key={subItem.id} className="submenu-item-wrapper">
                {subItem.hasSubmenu ? (
                  <>
                    <div
                      className={`submenu-item has-nested ${currentPage === subItem.id ? 'active' : ''}`}
                      onClick={() => setCurrentPage(subItem.id)}
                      onMouseEnter={(e) => handleNestedHover(e, `payroll-${subItem.id}`)}
                    >
                      <i className="fas fa-chevron-right"></i>
                      <span>{subItem.label}</span>
                      <i className="fas fa-chevron-right nested-arrow"></i>
                    </div>
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[`payroll-${subItem.id}`] || 0}px`, '--nested-submenu-top': `${nestedSubmenuTop[`payroll-${subItem.id}`] || 0}px` }}>
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
        
        {/* HR Menu with Submenu */}
        <div className="nav-item-parent" onMouseEnter={handleHrHover}>
          <div
            ref={hrItemRef}
            className="nav-item"
          >
            <i className="fas fa-user-tie"></i>
            <span>HR</span>
          </div>
          <div className="submenu" style={{ top: `${hrSubmenuTop}px`, '--submenu-top': `${hrSubmenuTop}px` }}>
            {hrSubItems.map((subItem) => (
              <div key={subItem.id} className="submenu-item-wrapper">
                {subItem.hasSubmenu ? (
                  <>
                    <div
                      className={`submenu-item has-nested ${currentPage === subItem.id ? 'active' : ''}`}
                      onClick={() => setCurrentPage(subItem.id)}
                      onMouseEnter={(e) => handleNestedHover(e, `hr-${subItem.id}`)}
                    >
                      <i className="fas fa-chevron-right"></i>
                      <span>{subItem.label}</span>
                      <i className="fas fa-chevron-right nested-arrow"></i>
                    </div>
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[`hr-${subItem.id}`] || 0}px`, '--nested-submenu-top': `${nestedSubmenuTop[`hr-${subItem.id}`] || 0}px` }}>
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
        
        {/* Production Menu with Submenu */}
        <div className="nav-item-parent" onMouseEnter={handleProductionHover}>
          <div
            ref={productionItemRef}
            className="nav-item"
          >
            <i className="fas fa-industry"></i>
            <span>Production</span>
          </div>
          <div className="submenu" style={{ top: `${productionSubmenuTop}px`, '--submenu-top': `${productionSubmenuTop}px` }}>
            {productionSubItems.map((subItem) => (
              <div key={subItem.id} className="submenu-item-wrapper">
                {subItem.hasSubmenu ? (
                  <>
                    <div
                      className={`submenu-item has-nested ${currentPage === subItem.id ? 'active' : ''}`}
                      onClick={() => setCurrentPage(subItem.id)}
                      onMouseEnter={(e) => handleNestedHover(e, `production-${subItem.id}`)}
                    >
                      <i className="fas fa-chevron-right"></i>
                      <span>{subItem.label}</span>
                      <i className="fas fa-chevron-right nested-arrow"></i>
                    </div>
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[`production-${subItem.id}`] || 0}px`, '--nested-submenu-top': `${nestedSubmenuTop[`production-${subItem.id}`] || 0}px` }}>
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
        
        
        {/* Masters Menu with Submenu */}
        <div className="nav-item-parent" onMouseEnter={handleMastersHover}>
          <div
            ref={mastersItemRef}
            className="nav-item"
          >
            <i className="fas fa-database"></i>
            <span>Masters</span>
          </div>
          <div className="submenu" style={{ top: `${mastersSubmenuTop}px`, '--submenu-top': `${mastersSubmenuTop}px` }}>
            {mastersSubItems.map((subItem) => (
              <div key={subItem.id} className="submenu-item-wrapper">
                {subItem.hasSubmenu ? (
                  <>
                    <div
                      className={`submenu-item has-nested ${currentPage === subItem.id ? 'active' : ''}`}
                      onClick={() => setCurrentPage(subItem.id)}
                      onMouseEnter={(e) => handleNestedHover(e, `masters-${subItem.id}`)}
                    >
                      <i className="fas fa-chevron-right"></i>
                      <span>{subItem.label}</span>
                      <i className="fas fa-chevron-right nested-arrow"></i>
                    </div>
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[`masters-${subItem.id}`] || 0}px`, '--nested-submenu-top': `${nestedSubmenuTop[`masters-${subItem.id}`] || 0}px` }}>
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
                    <i className="fas fa-chevron-right"></i>
                    <span>{subItem.label}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Reports Menu with Submenu */}
        <div className="nav-item-parent" onMouseEnter={handleReportsHover}>
          <div
            ref={reportsItemRef}
            className="nav-item"
          >
            <i className="fas fa-chart-bar"></i>
            <span>Reports</span>
          </div>
          <div className="submenu" style={{ top: `${reportsSubmenuTop}px`, '--submenu-top': `${reportsSubmenuTop}px` }}>
            {reportsSubItems.map((subItem) => (
              <div key={subItem.id} className="submenu-item-wrapper">
                {subItem.hasSubmenu ? (
                  <>
                    <div
                      className={`submenu-item has-nested ${currentPage === subItem.id ? 'active' : ''}`}
                      onClick={() => setCurrentPage(subItem.id)}
                      onMouseEnter={(e) => handleNestedHover(e, `reports-${subItem.id}`)}
                    >
                      <i className="fas fa-chevron-right"></i>
                      <span>{subItem.label}</span>
                      <i className="fas fa-chevron-right nested-arrow"></i>
                    </div>
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[`reports-${subItem.id}`] || 0}px`, '--nested-submenu-top': `${nestedSubmenuTop[`reports-${subItem.id}`] || 0}px` }}>
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
                    {!subItem.hideArrow && <i className="fas fa-chevron-right"></i>}
                    <span>{subItem.label}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Setup Menu with Submenu */}
        <div className="nav-item-parent" onMouseEnter={handleSetupHover}>
          <div
            ref={setupItemRef}
            className="nav-item"
          >
            <i className="fas fa-cog"></i>
            <span>Setup</span>
          </div>
          <div className="submenu" style={{ top: `${setupSubmenuTop}px`, '--submenu-top': `${setupSubmenuTop}px` }}>
            {setupSubItems.map((subItem) => (
              <div key={subItem.id} className="submenu-item-wrapper">
                {subItem.hasSubmenu ? (
                  <>
                    <div
                      className={`submenu-item has-nested ${currentPage === subItem.id ? 'active' : ''}`}
                      onClick={() => setCurrentPage(subItem.id)}
                      onMouseEnter={(e) => handleNestedHover(e, `setup-${subItem.id}`)}
                    >
                      <i className="fas fa-chevron-right"></i>
                      <span>{subItem.label}</span>
                      <i className="fas fa-chevron-right nested-arrow"></i>
                    </div>
                    <div className="nested-submenu" style={{ top: `${nestedSubmenuTop[`setup-${subItem.id}`] || 0}px`, '--nested-submenu-top': `${nestedSubmenuTop[`setup-${subItem.id}`] || 0}px` }}>
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
