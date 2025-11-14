import React, { useState } from 'react';
import './EnableFeatures.css';

const EnableFeatures = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('Company');
  const [features, setFeatures] = useState({
    // Company - Classifications
    departments: true,
    locations: true,
    classes: true,
    // Company - Projects
    projects: true,
    // ERP General
    multipleUnitsOfMeasure: true,
    useDeletionReason: false,
    multiSubsidiaryCustomer: true,
    advancedNumbering: false,
    // International
    multiLanguage: false,
    multipleCurrencies: false,
    currencyExchangeRateIntegration: false,
    worldwidePhoneFormatting: false,
    // Data Management
    inlineEditing: false,
    fileCabinet: false,
    enhancedFileSecurity: false,
    duplicateDetectionMerge: false,
    // Access
    ipAddressRules: false,
    // Mobile
    mobilePushNotification: false,
    
    // Accounting - Basic Features
    accounting: true,
    ar: true,
    ap: true,
    accountingPeriods: true,
    glAuditNumbering: false,
    // Accounting - Advanced Features
    expenseAllocation: false,
    dynamicAllocation: false,
    multipleBudgets: false,
    intercompanyTimeExpense: false,
    automatedIntercompanyManagement: false,
    automatedIntercompanyDropShip: false,
    intercompanyFramework: false,
    consolidatedPayments: false,
    inTransitPayments: false,
    vendorPrepayments: false,
    multipleCalendars: false,
    statisticalAccounts: false,
    foreignCurrencyVarianceMapping: false,
    balancingSegments: false,
    installments: false,
    periodEndJournalEntries: false,
    financialExceptionManagement: false,
    // Accounting - Revenue Accounting
    amortization: false,
    // Accounting - Multi-Book Accounting
    adjustmentOnlyBooks: false,
    extendedAccountingPeriodClose: false,
    
    // Tax - Basic
    advancedTaxes: false,
    euOneStopShop: false,
    suiteTax: false,
    
    // Transactions - Basic Features
    estimates: true,
    salesOrders: true,
    returnAuthorizations: true,
    purchaseOrders: true,
    vendorReturnAuthorizations: true,
    // Transactions - Sales
    multiplePrices: false,
    quantityPricing: false,
    grossProfit: false,
    promotionCodes: false,
    suitePromotions: false,
    autoApplyPromotions: false,
    requiredDepositWorkflow: false,
    // Transactions - Shipping & Receiving
    automaticLocationAssignment: false,
    advancedShipping: false,
    fulfillmentRequest: false,
    storePickup: false,
    shippingLabelIntegration: false,
    advancedReceiving: false,
    multipleShippingRoutes: false,
    shippingPartners: false,
    inboundShipmentManagement: false,
    // Transactions - Billing
    billCostsToCustomers: false,
    advancedBilling: false,
    billingOperations: false,
    invoiceGroups: false,
    
    // Items & Inventory - Items
    dropShipmentsSpecialOrders: false,
    multipleVendors: false,
    giftCertificates: false,
    merchandiseHierarchy: false,
    personalizedCatalogViews: false,
    // Items & Inventory - Inventory
    inventory: true,
    multiLocationInventory: true,
    supplyAllocation: false,
    salesChannelAllocation: false,
    standardCosting: false,
    groupAverageCosting: false,
    intercompanyCrossSubsidiaryFulfillment: false,
    centralizedPurchasingBilling: false,
    
    // Employees - Payroll
    paycheckJournal: false,
    // Employees - Time & Expenses
    expenseReports: false,
    approvalRouting: false,
    perEmployeeBillingRates: false,
    billingRateCards: false,
    purchaseRequests: false,
    timeTracking: false,
    weeklyTimesheets: false,
    newWeeklyTimesheetsInterface: false,
    enhancedTimesheetsWageRules: false,
    timeTrackingCRM: false,
    
    // CRM - Basic Features
    crm: true,
    salesForceAutomation: true,
    customerSupportService: true,
    marketingAutomation: false,
    // CRM - Sales
    opportunities: true,
    leadConversion: true,
    advancedForecasting: false,
    teamSelling: false,
    historicalMetrics: false,
    // CRM - Support
    emailCaseCapture: false,
    automatedCaseEscalation: false,
    knowledgeBase: false,
    helpDesk: false,
    // CRM - Marketing
    onlineForms: false,
    mailMerge: false,
    crmTemplateCategories: false,
    captureEmailReplies: false,
    subscriptionCategories: false,
    upsellManager: false,
    salesCampaigns: false,
  });

  const handleFeatureToggle = (featureName) => {
    setFeatures(prev => ({
      ...prev,
      [featureName]: !prev[featureName]
    }));
  };

  const handleSave = () => {
    console.log('Saving features:', features);
    alert('Features saved successfully!');
  };

  const handleCancel = () => {
    setCurrentPage('setup-company');
  };

  const tabs = [
    'Company',
    'Accounting',
    'Tax',
    'Transactions',
    'Items & Inventory',
    'Employees',
    'CRM'
  ];

  return (
    <div className="enable-features-container">
      {/* Header */}
      <div className="enable-features-header">
        <div className="page-title-clean">
          <h1>Enable Features</h1>
        </div>
        <div className="header-actions-clean">
          <button className="btn-clean btn-save" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn-clean btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="enable-features-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="enable-features-content">
        {activeTab === 'Company' && (
          <>
            {/* Classifications Section */}
            <div className="feature-section">
              <h2 className="section-title">Classifications</h2>
              
              <div className="feature-item">
                <div className="feature-checkbox">
                  <input
                    type="checkbox"
                    id="departments"
                    checked={features.departments}
                    onChange={() => handleFeatureToggle('departments')}
                  />
                  <label htmlFor="departments">
                    <strong>DEPARTMENTS</strong>
                  </label>
                </div>
                <p className="feature-description">
                  Track activity by department, division or other category. Departments can be renamed to suit your needs.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input
                    type="checkbox"
                    id="locations"
                    checked={features.locations}
                    onChange={() => handleFeatureToggle('locations')}
                  />
                  <label htmlFor="locations">
                    <strong>LOCATIONS</strong>
                  </label>
                </div>
                <p className="feature-description">
                  Track activity by location. Locations can be renamed to suit your needs.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input
                    type="checkbox"
                    id="classes"
                    checked={features.classes}
                    onChange={() => handleFeatureToggle('classes')}
                  />
                  <label htmlFor="classes">
                    <strong>CLASSES</strong>
                  </label>
                </div>
                <p className="feature-description">
                  Track activity by categories. Classes can be renamed to suit your needs.
                </p>
              </div>
            </div>

            {/* Projects Section */}
            <div className="feature-section">
              <h2 className="section-title">Projects</h2>
              
              <div className="feature-item">
                <div className="feature-checkbox">
                  <input
                    type="checkbox"
                    id="projects"
                    checked={features.projects}
                    onChange={() => handleFeatureToggle('projects')}
                  />
                  <label htmlFor="projects">
                    <strong>PROJECTS</strong>
                  </label>
                </div>
                <p className="feature-description">
                  Track projects independently from customers including activities, time tracking, and billing.
                </p>
              </div>
            </div>

            {/* ERP General Section */}
            <div className="feature-section">
              <h2 className="section-title">ERP General</h2>
              
              <div className="feature-item">
                <div className="feature-checkbox">
                  <input
                    type="checkbox"
                    id="multipleUnitsOfMeasure"
                    checked={features.multipleUnitsOfMeasure}
                    onChange={() => handleFeatureToggle('multipleUnitsOfMeasure')}
                  />
                  <label htmlFor="multipleUnitsOfMeasure">
                    <strong>MULTIPLE UNITS OF MEASURE</strong>
                  </label>
                </div>
                <p className="feature-description">
                  Allow purchase and sale of inventory in different units and the use of non-monetary accounts.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input
                    type="checkbox"
                    id="useDeletionReason"
                    checked={features.useDeletionReason}
                    onChange={() => handleFeatureToggle('useDeletionReason')}
                  />
                  <label htmlFor="useDeletionReason">
                    <strong>USE DELETION REASON</strong>
                  </label>
                </div>
                <p className="feature-description">
                  Record the reason for deleted transactions
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input
                    type="checkbox"
                    id="multiSubsidiaryCustomer"
                    checked={features.multiSubsidiaryCustomer}
                    onChange={() => handleFeatureToggle('multiSubsidiaryCustomer')}
                  />
                  <label htmlFor="multiSubsidiaryCustomer">
                    <strong>MULTI SUBSIDIARY CUSTOMER</strong>
                  </label>
                </div>
                <p className="feature-description">
                  Create customer records across multiple subsidiaries
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input
                    type="checkbox"
                    id="advancedNumbering"
                    checked={features.advancedNumbering}
                    onChange={() => handleFeatureToggle('advancedNumbering')}
                  />
                  <label htmlFor="advancedNumbering">
                    <strong>ADVANCED NUMBERING</strong>
                  </label>
                </div>
                <p className="feature-description">
                  Create and apply multiple numbering rules for transactions.
                </p>
              </div>
            </div>

            {/* International Section */}
            <div className="feature-section">
              <h2 className="section-title">International</h2>
              
              <div className="feature-item">
                <div className="feature-checkbox">
                  <input
                    type="checkbox"
                    id="multiLanguage"
                    checked={features.multiLanguage}
                    onChange={() => handleFeatureToggle('multiLanguage')}
                  />
                  <label htmlFor="multiLanguage">
                    <strong>MULTI-LANGUAGE</strong>
                  </label>
                </div>
                <p className="feature-description">
                  Translate your Web site, item names and descriptions, printed sales transactions and order confirmation email to multiple languages.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input
                    type="checkbox"
                    id="multipleCurrencies"
                    checked={features.multipleCurrencies}
                    onChange={() => handleFeatureToggle('multipleCurrencies')}
                  />
                  <label htmlFor="multipleCurrencies">
                    <strong>MULTIPLE CURRENCIES</strong>
                  </label>
                </div>
                <p className="feature-description">
                  Create transactions for foreign customers and vendors and account for fluctuations in exchange rates.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input
                    type="checkbox"
                    id="currencyExchangeRateIntegration"
                    checked={features.currencyExchangeRateIntegration}
                    onChange={() => handleFeatureToggle('currencyExchangeRateIntegration')}
                  />
                  <label htmlFor="currencyExchangeRateIntegration">
                    <strong>CURRENCY EXCHANGE RATE INTEGRATION</strong>
                  </label>
                </div>
                <p className="feature-description">
                  By checking this box, you are agreeing to Terms for this feature.<br />
                  Automatically update currency exchange rates on a nightly basis. Specify the foreign exchange rate provider through accounting preferences.<br />
                  <em>Foreign Exchange Rate Data by Xignite</em>
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input
                    type="checkbox"
                    id="worldwidePhoneFormatting"
                    checked={features.worldwidePhoneFormatting}
                    onChange={() => handleFeatureToggle('worldwidePhoneFormatting')}
                  />
                  <label htmlFor="worldwidePhoneFormatting">
                    <strong>WORLDWIDE SUPPORT FOR PHONE NUMBER FORMATTING</strong>
                  </label>
                </div>
                <p className="feature-description">
                  Enable international and national phone number formatting for this role. The national phone number formatting is based on local phone number standards.
                </p>
              </div>
            </div>

            {/* Data Management Section */}
            <div className="feature-section">
              <h2 className="section-title">Data Management</h2>
              
              <div className="feature-item">
                <div className="feature-checkbox">
                  <input
                    type="checkbox"
                    id="inlineEditing"
                    checked={features.inlineEditing}
                    onChange={() => handleFeatureToggle('inlineEditing')}
                  />
                  <label htmlFor="inlineEditing">
                    <strong>INLINE EDITING</strong>
                  </label>
                </div>
                <p className="feature-description">
                  Edit records directly from their corresponding lists and from search results.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input
                    type="checkbox"
                    id="fileCabinet"
                    checked={features.fileCabinet}
                    onChange={() => handleFeatureToggle('fileCabinet')}
                  />
                  <label htmlFor="fileCabinet">
                    <strong>FILE CABINET</strong>
                  </label>
                </div>
                <p className="feature-description">
                  Upload and associate documents with your contact, event and task records.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input
                    type="checkbox"
                    id="enhancedFileSecurity"
                    checked={features.enhancedFileSecurity}
                    onChange={() => handleFeatureToggle('enhancedFileSecurity')}
                  />
                  <label htmlFor="enhancedFileSecurity">
                    <strong>ENHANCED FILE SECURITY</strong>
                  </label>
                </div>
                <p className="feature-description">
                  Use employee specific expense folders<br />
                  Expense Report Attachments - Migration Tool
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input
                    type="checkbox"
                    id="duplicateDetectionMerge"
                    checked={features.duplicateDetectionMerge}
                    onChange={() => handleFeatureToggle('duplicateDetectionMerge')}
                  />
                  <label htmlFor="duplicateDetectionMerge">
                    <strong>DUPLICATE DETECTION & MERGE</strong>
                  </label>
                </div>
                <p className="feature-description">
                  Automatically detect duplicate customer, lead, and contact records; merge duplicate records into a designated master record.
                </p>
              </div>

              <div className="related-suiteapps">
                <h3>Related SuiteApps</h3>
                <p>Box Document Management</p>
                <p className="suiteapp-description">Upload documents to Box, and associate them with your NetSuite records.</p>
              </div>
            </div>

            {/* Access Section */}
            <div className="feature-section">
              <h2 className="section-title">Access</h2>
              
              <div className="feature-item">
                <div className="feature-checkbox">
                  <input
                    type="checkbox"
                    id="ipAddressRules"
                    checked={features.ipAddressRules}
                    onChange={() => handleFeatureToggle('ipAddressRules')}
                  />
                  <label htmlFor="ipAddressRules">
                    <strong>IP ADDRESS RULES</strong>
                  </label>
                </div>
                <p className="feature-description">
                  Create rules to restrict employee access based on IP address.
                </p>
              </div>
            </div>

            {/* Mobile Section */}
            <div className="feature-section">
              <h2 className="section-title">Mobile</h2>
              
              <div className="feature-item">
                <div className="feature-checkbox">
                  <input
                    type="checkbox"
                    id="mobilePushNotification"
                    checked={features.mobilePushNotification}
                    onChange={() => handleFeatureToggle('mobilePushNotification')}
                  />
                  <label htmlFor="mobilePushNotification">
                    <strong>MOBILE PUSH NOTIFICATION</strong>
                  </label>
                </div>
                <p className="feature-description">
                  Allow users of NetSuite Mobile products to receive Push Notifications for this company.
                </p>
              </div>
            </div>
          </>
        )}

        {/* Accounting Tab */}
        {activeTab === 'Accounting' && (
          <>
            <div className="feature-section">
              <h2 className="section-title">Basic Features</h2>
              
              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="accounting" checked={features.accounting} onChange={() => handleFeatureToggle('accounting')} />
                  <label htmlFor="accounting"><strong>ACCOUNTING</strong></label>
                </div>
                <p className="feature-description">Use NetSuite to handle your business's accounting.</p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="ar" checked={features.ar} onChange={() => handleFeatureToggle('ar')} />
                  <label htmlFor="ar"><strong>A/R</strong></label>
                </div>
                <p className="feature-description">Invoice your customers when you deliver goods or services and offer them payment terms.</p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="ap" checked={features.ap} onChange={() => handleFeatureToggle('ap')} />
                  <label htmlFor="ap"><strong>A/P</strong></label>
                </div>
                <p className="feature-description">Track bills as they come in for payment based on the vendors' terms.</p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="accountingPeriods" checked={features.accountingPeriods} onChange={() => handleFeatureToggle('accountingPeriods')} />
                  <label htmlFor="accountingPeriods"><strong>ACCOUNTING PERIODS</strong></label>
                </div>
                <p className="feature-description">Post transactions to periods, run reports by period, and close books at period end.</p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="glAuditNumbering" checked={features.glAuditNumbering} onChange={() => handleFeatureToggle('glAuditNumbering')} />
                  <label htmlFor="glAuditNumbering"><strong>GL AUDIT NUMBERING</strong></label>
                </div>
                <p className="feature-description">Gapless numbering for GL posted transactions.</p>
              </div>
            </div>

            <div className="feature-section">
              <h2 className="section-title">Advanced Features</h2>
              
              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="expenseAllocation" checked={features.expenseAllocation} onChange={() => handleFeatureToggle('expenseAllocation')} />
                  <label htmlFor="expenseAllocation"><strong>EXPENSE ALLOCATION</strong></label>
                </div>
                <p className="feature-description">Allow expenses to be allocated.</p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="dynamicAllocation" checked={features.dynamicAllocation} onChange={() => handleFeatureToggle('dynamicAllocation')} />
                  <label htmlFor="dynamicAllocation"><strong>DYNAMIC ALLOCATION</strong></label>
                </div>
                <p className="feature-description">Dynamically calculate the allocation weight based on the current statistical account's balance, when the allocation journal is generated.</p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="multipleBudgets" checked={features.multipleBudgets} onChange={() => handleFeatureToggle('multipleBudgets')} />
                  <label htmlFor="multipleBudgets"><strong>MULTIPLE BUDGETS</strong></label>
                </div>
                <p className="feature-description">Allow creation of multiple budgeting scenarios.</p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="intercompanyTimeExpense" checked={features.intercompanyTimeExpense} onChange={() => handleFeatureToggle('intercompanyTimeExpense')} />
                  <label htmlFor="intercompanyTimeExpense"><strong>INTERCOMPANY TIME AND EXPENSE</strong></label>
                </div>
                <p className="feature-description">Allow creation of intercompany time and expenses.</p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="automatedIntercompanyManagement" checked={features.automatedIntercompanyManagement} onChange={() => handleFeatureToggle('automatedIntercompanyManagement')} />
                  <label htmlFor="automatedIntercompanyManagement"><strong>AUTOMATED INTERCOMPANY MANAGEMENT</strong></label>
                </div>
                <p className="feature-description">Manage intercompany transactions and automatically generate elimination journal entries</p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="automatedIntercompanyDropShip" checked={features.automatedIntercompanyDropShip} onChange={() => handleFeatureToggle('automatedIntercompanyDropShip')} />
                  <label htmlFor="automatedIntercompanyDropShip"><strong>AUTOMATED INTERCOMPANY DROP SHIP</strong></label>
                </div>
                <p className="feature-description">Manage intercompany drop ship workflow and automatically generate elimination journal entries</p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="intercompanyFramework" checked={features.intercompanyFramework} onChange={() => handleFeatureToggle('intercompanyFramework')} />
                  <label htmlFor="intercompanyFramework"><strong>INTERCOMPANY FRAMEWORK</strong></label>
                </div>
                <p className="feature-description">Define criteria for intercompany business workflows.</p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="consolidatedPayments" checked={features.consolidatedPayments} onChange={() => handleFeatureToggle('consolidatedPayments')} />
                  <label htmlFor="consolidatedPayments"><strong>CONSOLIDATED PAYMENTS</strong></label>
                </div>
                <p className="feature-description">Apply payments, credits, and deposits either through top-level customers or individual subcustomers and print consolidated customer statements.</p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="inTransitPayments" checked={features.inTransitPayments} onChange={() => handleFeatureToggle('inTransitPayments')} />
                  <label htmlFor="inTransitPayments"><strong>IN-TRANSIT PAYMENTS</strong></label>
                </div>
                <p className="feature-description">Allow In-Transit Vendor Payments</p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="vendorPrepayments" checked={features.vendorPrepayments} onChange={() => handleFeatureToggle('vendorPrepayments')} />
                  <label htmlFor="vendorPrepayments"><strong>VENDOR PREPAYMENTS</strong></label>
                </div>
                <p className="feature-description">Create and apply Vendor Prepayments</p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="multipleCalendars" checked={features.multipleCalendars} onChange={() => handleFeatureToggle('multipleCalendars')} />
                  <label htmlFor="multipleCalendars"><strong>MULTIPLE CALENDARS</strong></label>
                </div>
                <p className="feature-description">Use different accounting period and tax period rollups for subsidiaries.</p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="statisticalAccounts" checked={features.statisticalAccounts} onChange={() => handleFeatureToggle('statisticalAccounts')} />
                  <label htmlFor="statisticalAccounts"><strong>STATISTICAL ACCOUNTS</strong></label>
                </div>
                <p className="feature-description">Track non-monetary data and its relationship with the financial activity of your organization.</p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="foreignCurrencyVarianceMapping" checked={features.foreignCurrencyVarianceMapping} onChange={() => handleFeatureToggle('foreignCurrencyVarianceMapping')} />
                  <label htmlFor="foreignCurrencyVarianceMapping"><strong>FOREIGN CURRENCY VARIANCE MAPPING</strong></label>
                </div>
                <p className="feature-description">Create posting rules to define which accounts foreign currency variances post to.</p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="balancingSegments" checked={features.balancingSegments} onChange={() => handleFeatureToggle('balancingSegments')} />
                  <label htmlFor="balancingSegments"><strong>BALANCING SEGMENTS</strong></label>
                </div>
                <p className="feature-description">Allow for the creation of balancing segments specific to your business.</p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="installments" checked={features.installments} onChange={() => handleFeatureToggle('installments')} />
                  <label htmlFor="installments"><strong>INSTALLMENTS</strong></label>
                </div>
                <p className="feature-description">Manage installments and related payments for A/R and A/P.</p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="periodEndJournalEntries" checked={features.periodEndJournalEntries} onChange={() => handleFeatureToggle('periodEndJournalEntries')} />
                  <label htmlFor="periodEndJournalEntries"><strong>PERIOD END JOURNAL ENTRIES</strong></label>
                </div>
                <p className="feature-description">Post journal entries to record period end consolidation and year end closing.</p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="financialExceptionManagement" checked={features.financialExceptionManagement} onChange={() => handleFeatureToggle('financialExceptionManagement')} />
                  <label htmlFor="financialExceptionManagement"><strong>FINANCIAL EXCEPTION MANAGEMENT</strong></label>
                </div>
                <p className="feature-description">Monitor your transactions and receive alerts if any fall outside of your usual activity.</p>
              </div>
            </div>

            <div className="feature-section">
              <h2 className="section-title">Revenue Accounting</h2>
              
              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="amortization" checked={features.amortization} onChange={() => handleFeatureToggle('amortization')} />
                  <label htmlFor="amortization"><strong>AMORTIZATION</strong></label>
                </div>
                <p className="feature-description">Allow creation of amortization schedules.</p>
              </div>
            </div>

            <div className="feature-section">
              <h2 className="section-title">Multi-Book Accounting</h2>
              
              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="adjustmentOnlyBooks" checked={features.adjustmentOnlyBooks} onChange={() => handleFeatureToggle('adjustmentOnlyBooks')} />
                  <label htmlFor="adjustmentOnlyBooks"><strong>ADJUSTMENT ONLY BOOKS</strong></label>
                </div>
                <p className="feature-description">Use book specific journals to prepare alternative financial statements.</p>
              </div>

              <div className="feature-item">
                <div className="feature-checkbox">
                  <input type="checkbox" id="extendedAccountingPeriodClose" checked={features.extendedAccountingPeriodClose} onChange={() => handleFeatureToggle('extendedAccountingPeriodClose')} />
                  <label htmlFor="extendedAccountingPeriodClose"><strong>EXTENDED ACCOUNTING PERIOD CLOSE PROCESS</strong></label>
                </div>
                <p className="feature-description">Allows independent closure of accounting periods by accounting book.</p>
              </div>
            </div>
          </>
        )}

        {/* Other tabs - Coming Soon */}
        {!['Company', 'Accounting'].includes(activeTab) && (
          <div className="coming-soon">
            <i className="fas fa-tools"></i>
            <h3>{activeTab} Features - Coming Soon</h3>
            <p>This section is under development.</p>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="enable-features-footer">
        <div className="footer-buttons">
          <button className="btn-clean btn-save" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn-clean btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnableFeatures;
