import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Quotation from './components/Quotation';
import SalesOrder from './components/SalesOrder';
import CreateEnquiries from './components/CreateEnquiries';
import ViewEnquiries from './components/ViewEnquiries';
import ViewQuotations from './components/ViewQuotations';
import ViewQuotationDetail from './components/ViewQuotationDetail';
import EditQuotation from './components/EditQuotation';
import ViewSalesOrders from './components/ViewSalesOrders';
import ViewSalesOrderDetail from './components/ViewSalesOrderDetail';
import EditSalesOrder from './components/EditSalesOrder';
import InvoiceSalesOrders from './components/InvoiceSalesOrders';
import InvoiceDetail from './components/InvoiceDetail';
import CreateInvoice from './components/CreateInvoice';
import ViewInvoices from './components/ViewInvoices';
import EnterCashSales from './components/EnterCashSales';
import EnterPurchaseOrders from './components/EnterPurchaseOrders';
import ViewPurchaseOrders from './components/ViewPurchaseOrders';
import ReceiveOrders from './components/ReceiveOrders';
import ViewReceiveOrders from './components/ViewReceiveOrders';
import ItemReceipt from './components/ItemReceipt';
import EnterVendorReturnAuthorizations from './components/EnterVendorReturnAuthorizations';
import ViewVendorReturnAuthorizations from './components/ViewVendorReturnAuthorizations';
import ApproveVendorReturns from './components/ApproveVendorReturns';
import ShipVendorReturns from './components/ShipVendorReturns';
import ViewPurchaseRequisitions from './components/ViewPurchaseRequisitions';
import CreatePurchaseRequisition from './components/CreatePurchaseRequisition';
import ViewPurchaseRequisitionDetail from './components/ViewPurchaseRequisitionDetail';
import OrderRequisitions from './components/OrderRequisitions';
import ViewCustomDeliveryOrders from './components/ViewCustomDeliveryOrders';
import ViewCustomDeliveryOrderDetail from './components/ViewCustomDeliveryOrderDetail';
import CreateCustomDeliveryOrder from './components/CreateCustomDeliveryOrder';
import MakeJournalEntries from './components/MakeJournalEntries';
import ViewJournalEntries from './components/ViewJournalEntries';
import ViewJournalDetail from './components/ViewJournalDetail';
import EditJournalEntry from './components/EditJournalEntry';
import MakeAdvancedIntercompanyJournal from './components/MakeAdvancedIntercompanyJournal';
import ViewAdvancedIntercompanyJournals from './components/ViewAdvancedIntercompanyJournals';
import ViewAdvancedIntercompanyJournalDetail from './components/ViewAdvancedIntercompanyJournalDetail';
import EditAdvancedIntercompanyJournal from './components/EditAdvancedIntercompanyJournal';
import SetUpBudgets from './components/SetUpBudgets';
import ViewBudgets from './components/ViewBudgets';
import CreateAllocationSchedule from './components/CreateAllocationSchedule';
import ViewAllocationSchedules from './components/ViewAllocationSchedules';
import ViewAllocationScheduleDetail from './components/ViewAllocationScheduleDetail';
import CreateIntercompanyAllocationSchedule from './components/CreateIntercompanyAllocationSchedule';
import SetupCompanyInformation from './components/SetupCompanyInformation';
import SubsidiarySettingsManager from './components/SubsidiarySettingsManager';
import SubsidiarySettingsDetail from './components/SubsidiarySettingsDetail';
import ViewSubsidiaries from './components/ViewSubsidiaries';
import ViewSubsidiaryDetail from './components/ViewSubsidiaryDetail';
import EditSubsidiary from './components/EditSubsidiary';
import NewSubsidiary from './components/NewSubsidiary';
import ViewDepartments from './components/ViewDepartments';
import ViewDepartmentDetail from './components/ViewDepartmentDetail';
import EditDepartment from './components/EditDepartment';
import NewDepartment from './components/NewDepartment';
import ViewLocations from './components/ViewLocations';
import ViewLocationDetail from './components/ViewLocationDetail';
import EditLocation from './components/EditLocation';
import NewLocation from './components/NewLocation';
import ViewClasses from './components/ViewClasses';
import ViewClassDetail from './components/ViewClassDetail';
import EditClass from './components/EditClass';
import NewClass from './components/NewClass';
import ViewAccountingLists from './components/ViewAccountingLists';
import ViewAccountingListDetail from './components/ViewAccountingListDetail';
import EditAccountingList from './components/EditAccountingList';
import ViewExpenseCategories from './components/ViewExpenseCategories';
import ViewExpenseCategoryDetail from './components/ViewExpenseCategoryDetail';
import EditExpenseCategory from './components/EditExpenseCategory';
import NewExpenseCategory from './components/NewExpenseCategory';
import ViewExpenseReportPolicies from './components/ViewExpenseReportPolicies';
import NewExpenseReportPolicy from './components/NewExpenseReportPolicy';
import NewChartOfAccount from './components/NewChartOfAccount';
import ViewChartOfAccounts from './components/ViewChartOfAccounts';
import ViewChartOfAccountDetail from './components/ViewChartOfAccountDetail';
import ManageAccountingPeriods from './components/ManageAccountingPeriods';
import InvoicingPreferences from './components/InvoicingPreferences';
import FinanceChargePreferences from './components/FinanceChargePreferences';
import ViewTaxCodes from './components/ViewTaxCodes';
import NewTaxCode from './components/NewTaxCode';
import ViewTaxCodeDetail from './components/ViewTaxCodeDetail';
import CustomerStatusList from './components/CustomerStatusList';
import NewCustomerStatus from './components/NewCustomerStatus';
import ViewCustomerStatusDetail from './components/ViewCustomerStatusDetail';
import CRMLists from './components/CRMLists';
import NewCRMList from './components/NewCRMList';
import ViewCRMListDetail from './components/ViewCRMListDetail';
import CRMPreferences from './components/CRMPreferences';
import ManageUsers from './components/ManageUsers';
import EditUser from './components/EditUser';
import ViewUserVendorDetail from './components/ViewUserVendorDetail';
import ViewRoleDetail from './components/ViewRoleDetail';
import ShowRoleDifferences from './components/ShowRoleDifferences';
import TwoFactorAuthRoles from './components/TwoFactorAuthRoles';
import ManageIntegration from './components/ManageIntegration';
import ViewIntegrationDetail from './components/ViewIntegrationDetail';
import EditIntegration from './components/EditIntegration';
import DocumentNumberSeriesList from './components/DocumentNumberSeriesList';
import ViewDocumentSeriesDetail from './components/ViewDocumentSeriesDetail';
import EditDocumentSeries from './components/EditDocumentSeries';
import ViewIntercompanyAllocationSchedules from './components/ViewIntercompanyAllocationSchedules';
import ViewIntercompanyAllocationScheduleDetail from './components/ViewIntercompanyAllocationScheduleDetail';
import RevalueOpenCurrencyBalances from './components/RevalueOpenCurrencyBalances';
import ReallocateItems from './components/ReallocateItems';
import ViewFulfillOrders from './components/ViewFulfillOrders';
import CreateFulfillOrder from './components/CreateFulfillOrder';
import ViewFulfillOrderDetail from './components/ViewFulfillOrderDetail';
import EditFulfillOrder from './components/EditFulfillOrder';
import ViewCurrencyRevaluations from './components/ViewCurrencyRevaluations';
import ViewCurrencyRevaluationDetail from './components/ViewCurrencyRevaluationDetail';
import EditCurrencyRevaluation from './components/EditCurrencyRevaluation';
import CreateStatisticalSchedule from './components/CreateStatisticalSchedule';
import ViewStatisticalSchedules from './components/ViewStatisticalSchedules';
import MakeStatisticalJournalEntry from './components/MakeStatisticalJournalEntry';
import ViewStatisticalJournalEntries from './components/ViewStatisticalJournalEntries';
import ViewStatisticalJournalEntryDetail from './components/ViewStatisticalJournalEntryDetail';
import ViewEnquiryDetail from './components/ViewEnquiryDetail';
import EditEnquiry from './components/EditEnquiry';
import BillPurchaseOrders from './components/BillPurchaseOrders';
import ViewBillPurchaseOrderDetail from './components/ViewBillPurchaseOrderDetail';
import EditBillPurchaseOrder from './components/EditBillPurchaseOrder';
import EnterBills from './components/EnterBills';
import ViewBills from './components/ViewBills';
import ViewBillDetail from './components/ViewBillDetail';
import PayBills from './components/PayBills';
import ViewBillPaymentDetail from './components/ViewBillPaymentDetail';
import EditBillPayment from './components/EditBillPayment';
import PaySingleVendor from './components/PaySingleVendor';
import ViewVendorPayments from './components/ViewVendorPayments';
import ViewVendorPaymentDetail from './components/ViewVendorPaymentDetail';
import EnterVendorPrepayment from './components/EnterVendorPrepayment';
import ViewVendorPrepayments from './components/ViewVendorPrepayments';
import ViewVendorPrepaymentDetail from './components/ViewVendorPrepaymentDetail';
import EnterVendorCredit from './components/EnterVendorCredit';
import ViewVendorCredits from './components/ViewVendorCredits';
import ViewVendorCreditDetail from './components/ViewVendorCreditDetail';
import CreditVendorReturns from './components/CreditVendorReturns';
import ViewVendorReturnDetail from './components/ViewVendorReturnDetail';
import EditVendorReturn from './components/EditVendorReturn';
import AdjustInventory from './components/AdjustInventory';
import ViewInventoryAdjustments from './components/ViewInventoryAdjustments';
import ViewInventoryAdjustmentDetail from './components/ViewInventoryAdjustmentDetail';
import AdjustInventoryWorksheet from './components/AdjustInventoryWorksheet';
import ViewInventoryWorksheets from './components/ViewInventoryWorksheets';
import ViewInventoryWorksheetDetail from './components/ViewInventoryWorksheetDetail';
import EnterIntercompanyTransferOrder from './components/EnterIntercompanyTransferOrder';
import ViewIntercompanyTransferOrders from './components/ViewIntercompanyTransferOrders';
import ViewIntercompanyTransferOrderDetail from './components/ViewIntercompanyTransferOrderDetail';
import EditIntercompanyTransferOrder from './components/EditIntercompanyTransferOrder';
import OrderItems from './components/OrderItems';
import EnterTransferOrder from './components/EnterTransferOrder';
import ViewTransferOrders from './components/ViewTransferOrders';
import ViewTransferOrderDetail from './components/ViewTransferOrderDetail';
import EditTransferOrder from './components/EditTransferOrder';
import WriteChecks from './components/WriteChecks';
import ViewChecks from './components/ViewChecks';
import ViewCheckDetail from './components/ViewCheckDetail';
import EditCheck from './components/EditCheck';
import MakeDeposit from './components/MakeDeposit';
import ViewDeposits from './components/ViewDeposits';
import ViewDepositDetail from './components/ViewDepositDetail';
import TransferFunds from './components/TransferFunds';
import ViewTransfers from './components/ViewTransfers';
import ViewTransferDetail from './components/ViewTransferDetail';
import ReconcileAccountStatement from './components/ReconcileAccountStatement';
import ReconciledStatements from './components/ReconciledStatements';
import WriteTaxLiability from './components/WriteTaxLiability';
import ViewTaxLiabilities from './components/ViewTaxLiabilities';
import ReconciliationRules from './components/ReconciliationRules';
import ReconcileBankStatement from './components/ReconcileBankStatement';
import CommitOrders from './components/CommitOrders';
import CommitOrderSchedule from './components/CommitOrderSchedule';
import AcceptCustomerPayment from './components/AcceptCustomerPayment';
import ViewCustomerPayments from './components/ViewCustomerPayments';
import ViewCustomerPaymentDetail from './components/ViewCustomerPaymentDetail';
import EditCustomerPayment from './components/EditCustomerPayment';
import IssueCustomerRefund from './components/IssueCustomerRefund';
import IssueReturnAuthorization from './components/IssueReturnAuthorization';
import ViewReturnAuthorizations from './components/ViewReturnAuthorizations';
import ViewReturnAuthorizationDetail from './components/ViewReturnAuthorizationDetail';
import EditReturnAuthorization from './components/EditReturnAuthorization';
import ApproveReturnAuthorizations from './components/ApproveReturnAuthorizations';
import ReceiveReturnedOrder from './components/ReceiveReturnedOrder';
import ViewReturnedOrders from './components/ViewReturnedOrders';
import ViewReturnedOrderDetail from './components/ViewReturnedOrderDetail';
import EditReturnedOrder from './components/EditReturnedOrder';
import IssueCreditMemo from './components/IssueCreditMemo';
import ViewCreditMemos from './components/ViewCreditMemos';
import ViewCreditMemoDetail from './components/ViewCreditMemoDetail';
import EditCreditMemo from './components/EditCreditMemo';
import RefundCashSale from './components/RefundCashSale';
import ViewCashRefunds from './components/ViewCashRefunds';
import ViewCashRefundDetail from './components/ViewCashRefundDetail';
import EditCashRefund from './components/EditCashRefund';
import AssessFinanceCharge from './components/AssessFinanceCharge';
import ViewFinanceCharges from './components/ViewFinanceCharges';
import ViewFinanceChargeDetail from './components/ViewFinanceChargeDetail';
import EditFinanceCharge from './components/EditFinanceCharge';
import RecordCustomerDeposit from './components/RecordCustomerDeposit';
import ViewCustomerDeposits from './components/ViewCustomerDeposits';
import ViewCustomerDepositDetail from './components/ViewCustomerDepositDetail';
import EditCustomerDeposit from './components/EditCustomerDeposit';
import InvoiceBillableCustomers from './components/InvoiceBillableCustomers';
import GenerateStatements from './components/GenerateStatements';
import ViewCustomerStatement from './components/ViewCustomerStatement';
import EditCustomerStatement from './components/EditCustomerStatement';
import PrintIndividualStatement from './components/PrintIndividualStatement';
import GeneratePriceLists from './components/GeneratePriceLists';
import ViewPriceListCustomer from './components/ViewPriceListCustomer';
import EditPriceListCustomer from './components/EditPriceListCustomer';
import IndividualPriceList from './components/IndividualPriceList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handle hash-based navigation
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'create-enquiries':
        return <CreateEnquiries setCurrentPage={setCurrentPage} />;
      case 'view-enquiries':
        return <ViewEnquiries setCurrentPage={setCurrentPage} />;
      case 'prepare-quotations':
        return <Quotation setCurrentPage={setCurrentPage} />;
      case 'view-quotations':
        return <ViewQuotations setCurrentPage={setCurrentPage} />;
      case 'view-quotation-detail':
        return <ViewQuotationDetail setCurrentPage={setCurrentPage} />;
      case 'edit-quotation':
        return <EditQuotation setCurrentPage={setCurrentPage} />;
      case 'enter-sales-orders':
        return <SalesOrder setCurrentPage={setCurrentPage} />;
      case 'view-sales-orders':
        return <ViewSalesOrders setCurrentPage={setCurrentPage} />;
      case 'view-sales-order-detail':
        return <ViewSalesOrderDetail setCurrentPage={setCurrentPage} />;
      case 'edit-sales-order':
        return <EditSalesOrder setCurrentPage={setCurrentPage} />;
      case 'invoice-sales-orders':
        return <InvoiceSalesOrders setCurrentPage={setCurrentPage} />;
      case 'invoice-detail':
        return <InvoiceDetail />;
      case 'create-invoices':
        return <CreateInvoice />;
      case 'view-invoices':
        return <ViewInvoices />;
      case 'enter-cash-sales':
        return <EnterCashSales />;
      case 'enter-purchase-orders':
        return <EnterPurchaseOrders />;
      case 'view-purchase-orders':
        return <ViewPurchaseOrders />;
      case 'receive-orders':
        return <ReceiveOrders setCurrentPage={setCurrentPage} />;
      case 'view-receive-orders':
        return <ViewReceiveOrders />;
      case 'item-receipt':
        return <ItemReceipt />;
      case 'enter-vendor-return-authorizations':
        return <EnterVendorReturnAuthorizations />;
      case 'view-vendor-return-authorizations':
        return <ViewVendorReturnAuthorizations />;
      case 'approve-vendor-returns':
        return <ApproveVendorReturns />;
      case 'ship-vendor-returns':
        return <ShipVendorReturns />;
      case 'purchase-requisition':
        return <CreatePurchaseRequisition />;
      case 'view-purchase-requisition':
        return <ViewPurchaseRequisitions 
          onNewClick={() => setCurrentPage('purchase-requisition')} 
          onViewClick={() => setCurrentPage('view-purchase-requisition-detail')}
          onEditClick={() => setCurrentPage('edit-purchase-requisition')}
        />;
      case 'view-purchase-requisition-detail':
        return <ViewPurchaseRequisitionDetail 
          onBack={() => setCurrentPage('view-purchase-requisition')} 
          onEdit={() => setCurrentPage('edit-purchase-requisition')}
        />;
      case 'edit-purchase-requisition':
        return <CreatePurchaseRequisition />;
      case 'order-requisition':
        return <OrderRequisitions />;
      case 'tom-custom-delivery-order':
        return <CreateCustomDeliveryOrder />;
      case 'view-tom-custom-delivery-order':
        return <ViewCustomDeliveryOrders 
          onNewClick={() => setCurrentPage('tom-custom-delivery-order')} 
          onViewClick={() => setCurrentPage('view-tom-custom-delivery-order-detail')}
          onEditClick={() => setCurrentPage('edit-tom-custom-delivery-order')}
        />;
      case 'view-tom-custom-delivery-order-detail':
        return <ViewCustomDeliveryOrderDetail 
          onBack={() => setCurrentPage('view-tom-custom-delivery-order')} 
          onEdit={() => setCurrentPage('edit-tom-custom-delivery-order')}
        />;
      case 'edit-tom-custom-delivery-order':
        return <CreateCustomDeliveryOrder />;
      case 'chart-of-accounts':
        return <div style={{ padding: '30px' }}><h1>Chart of Accounts - Coming Soon</h1></div>;
      case 'make-journal-entries':
        return <MakeJournalEntries />;
      case 'view-journal-entries':
        return <ViewJournalEntries setCurrentPage={setCurrentPage} />;
      case 'view-journal-detail':
        return <ViewJournalDetail setCurrentPage={setCurrentPage} />;
      case 'edit-journal-entry':
        return <EditJournalEntry setCurrentPage={setCurrentPage} />;
      case 'view-order-items':
        return <div style={{ padding: '30px' }}><h1>{currentPage.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} - Coming Soon</h1></div>;
      case 'make-advanced-intercompany-journal-entries':
        return <MakeAdvancedIntercompanyJournal setCurrentPage={setCurrentPage} />;
      case 'view-advanced-intercompany-journal-entries':
        return <ViewAdvancedIntercompanyJournals setCurrentPage={setCurrentPage} />;
      case 'view-advanced-intercompany-journal-detail':
        return <ViewAdvancedIntercompanyJournalDetail setCurrentPage={setCurrentPage} />;
      case 'edit-advanced-intercompany-journal':
        return <EditAdvancedIntercompanyJournal setCurrentPage={setCurrentPage} />;
      case 'set-up-budgets':
        return <SetUpBudgets setCurrentPage={setCurrentPage} />;
      case 'view-budgets':
        return <ViewBudgets setCurrentPage={setCurrentPage} />;
      case 'create-allocation-schedules':
        return <CreateAllocationSchedule setCurrentPage={setCurrentPage} />;
      case 'view-allocation-schedules':
        return <ViewAllocationSchedules setCurrentPage={setCurrentPage} />;
      case 'view-allocation-schedule-detail':
        return <ViewAllocationScheduleDetail setCurrentPage={setCurrentPage} />;
      case 'create-intercompany-allocation-schedules':
        return <CreateIntercompanyAllocationSchedule setCurrentPage={setCurrentPage} />;
      case 'view-intercompany-allocation-schedules':
        return <ViewIntercompanyAllocationSchedules setCurrentPage={setCurrentPage} />;
      case 'view-intercompany-allocation-schedule-detail':
        return <ViewIntercompanyAllocationScheduleDetail setCurrentPage={setCurrentPage} />;
      case 'revalue-open-currency-balances':
        return <RevalueOpenCurrencyBalances setCurrentPage={setCurrentPage} />;
      case 'view-currency-revaluations':
        return <ViewCurrencyRevaluations setCurrentPage={setCurrentPage} />;
      case 'view-currency-revaluation-detail':
        return <ViewCurrencyRevaluationDetail setCurrentPage={setCurrentPage} />;
      case 'edit-currency-revaluation':
        return <EditCurrencyRevaluation setCurrentPage={setCurrentPage} />;
      case 'create-statistical-schedule':
        return <CreateStatisticalSchedule setCurrentPage={setCurrentPage} />;
      case 'view-statistical-schedules':
        return <ViewStatisticalSchedules setCurrentPage={setCurrentPage} />;
      case 'make-statistical-journal-entries':
        return <MakeStatisticalJournalEntry setCurrentPage={setCurrentPage} />;
      case 'view-statistical-journal-entries':
        return <ViewStatisticalJournalEntries setCurrentPage={setCurrentPage} />;
      case 'view-statistical-journal-entry-detail':
        return <ViewStatisticalJournalEntryDetail setCurrentPage={setCurrentPage} />;
      case 'view-enquiry-detail':
        return <ViewEnquiryDetail setCurrentPage={setCurrentPage} />;
      case 'edit-enquiry':
        return <EditEnquiry setCurrentPage={setCurrentPage} />;
      case 'bill-purchase-orders':
        return <BillPurchaseOrders setCurrentPage={setCurrentPage} />;
      case 'view-bill-purchase-order-detail':
        return <ViewBillPurchaseOrderDetail setCurrentPage={setCurrentPage} />;
      case 'edit-bill-purchase-order':
        return <EditBillPurchaseOrder setCurrentPage={setCurrentPage} />;
      case 'enter-bills':
        return <EnterBills setCurrentPage={setCurrentPage} />;
      case 'view-bills':
        return <ViewBills setCurrentPage={setCurrentPage} />;
      case 'view-bill-detail':
        return <ViewBillDetail setCurrentPage={setCurrentPage} />;
      case 'pay-bills':
        return <PayBills setCurrentPage={setCurrentPage} />;
      case 'view-bill-payment-detail':
        return <ViewBillPaymentDetail setCurrentPage={setCurrentPage} />;
      case 'edit-bill-payment':
        return <EditBillPayment setCurrentPage={setCurrentPage} />;
      case 'pay-single-vendor':
        return <PaySingleVendor setCurrentPage={setCurrentPage} />;
      case 'view-vendor-payments':
        return <ViewVendorPayments setCurrentPage={setCurrentPage} />;
      case 'view-vendor-payment-detail':
        return <ViewVendorPaymentDetail setCurrentPage={setCurrentPage} />;
      case 'enter-vendor-prepayment':
        return <EnterVendorPrepayment setCurrentPage={setCurrentPage} />;
      case 'view-vendor-prepayments':
        return <ViewVendorPrepayments setCurrentPage={setCurrentPage} />;
      case 'view-vendor-prepayment-detail':
        return <ViewVendorPrepaymentDetail setCurrentPage={setCurrentPage} />;
      case 'enter-vendor-credits':
      case 'enter-vendor-credit':
        return <EnterVendorCredit setCurrentPage={setCurrentPage} />;
      case 'view-vendor-credits':
        return <ViewVendorCredits setCurrentPage={setCurrentPage} />;
      case 'view-vendor-credit-detail':
        return <ViewVendorCreditDetail setCurrentPage={setCurrentPage} />;
      case 'credit-vendor-returns':
        return <CreditVendorReturns setCurrentPage={setCurrentPage} />;
      case 'view-vendor-return-detail':
        return <ViewVendorReturnDetail setCurrentPage={setCurrentPage} />;
      case 'edit-vendor-return':
        return <EditVendorReturn setCurrentPage={setCurrentPage} />;
      case 'adjust-inventory':
        return <AdjustInventory setCurrentPage={setCurrentPage} />;
      case 'view-inventory-adjustments':
        return <ViewInventoryAdjustments setCurrentPage={setCurrentPage} />;
      case 'view-inventory-adjustment-detail':
        return <ViewInventoryAdjustmentDetail setCurrentPage={setCurrentPage} />;
      case 'adjust-inventory-worksheet':
        return <AdjustInventoryWorksheet setCurrentPage={setCurrentPage} />;
      case 'view-inventory-worksheets':
        return <ViewInventoryWorksheets setCurrentPage={setCurrentPage} />;
      case 'view-inventory-worksheet-detail':
        return <ViewInventoryWorksheetDetail setCurrentPage={setCurrentPage} />;
      case 'enter-intercompany-transfer-orders':
        return <EnterIntercompanyTransferOrder setCurrentPage={setCurrentPage} />;
      case 'view-intercompany-transfer-orders':
        return <ViewIntercompanyTransferOrders setCurrentPage={setCurrentPage} />;
      case 'view-intercompany-transfer-order-detail':
        return <ViewIntercompanyTransferOrderDetail setCurrentPage={setCurrentPage} />;
      case 'edit-intercompany-transfer-order':
        return <EditIntercompanyTransferOrder setCurrentPage={setCurrentPage} />;
      case 'order-items':
        return <OrderItems setCurrentPage={setCurrentPage} />;
      case 'enter-transfer-orders':
        return <EnterTransferOrder setCurrentPage={setCurrentPage} />;
      case 'view-transfer-orders':
        return <ViewTransferOrders setCurrentPage={setCurrentPage} />;
      case 'view-transfer-order-detail':
        return <ViewTransferOrderDetail setCurrentPage={setCurrentPage} />;
      case 'edit-transfer-order':
        return <EditTransferOrder setCurrentPage={setCurrentPage} />;
      case 'write-checks':
        return <WriteChecks setCurrentPage={setCurrentPage} />;
      case 'view-checks':
        return <ViewChecks setCurrentPage={setCurrentPage} />;
      case 'view-check-detail':
        return <ViewCheckDetail setCurrentPage={setCurrentPage} />;
      case 'edit-check':
        return <EditCheck setCurrentPage={setCurrentPage} />;
      case 'make-deposit':
      case 'make-deposits':
        return <MakeDeposit setCurrentPage={setCurrentPage} />;
      case 'view-deposits':
        return <ViewDeposits setCurrentPage={setCurrentPage} />;
      case 'view-deposit-detail':
        return <ViewDepositDetail setCurrentPage={setCurrentPage} />;
      case 'edit-deposit':
        return <MakeDeposit setCurrentPage={setCurrentPage} />;
      case 'transfer-funds':
        return <TransferFunds setCurrentPage={setCurrentPage} />;
      case 'view-transfers':
        return <ViewTransfers setCurrentPage={setCurrentPage} />;
      case 'view-transfer-detail':
        return <ViewTransferDetail setCurrentPage={setCurrentPage} />;
      case 'edit-transfer':
        return <TransferFunds setCurrentPage={setCurrentPage} />;
      case 'reconcile-bank-statement':
        return <ReconcileBankStatement setCurrentPage={setCurrentPage} />;
      case 'reconcile-account-statement':
        return <ReconcileAccountStatement setCurrentPage={setCurrentPage} />;
      case 'reconciled-statements':
      case 'view-account-reconciliations':
        return <ReconciledStatements setCurrentPage={setCurrentPage} />;
      case 'write-tax-liability':
        return <WriteTaxLiability setCurrentPage={setCurrentPage} />;
      case 'view-tax-liabilities':
        return <ViewTaxLiabilities setCurrentPage={setCurrentPage} />;
      case 'reconciliation-rules':
        return <ReconciliationRules setCurrentPage={setCurrentPage} />;
      case 'commit-orders':
        return <CommitOrders setCurrentPage={setCurrentPage} />;
      case 'view-commit-orders':
        return <div style={{ padding: '30px' }}><h1>View Commit Orders - Coming Soon</h1></div>;
      case 'commit-order-schedule':
        return <CommitOrderSchedule setCurrentPage={setCurrentPage} />;
      case 'reallocate-items':
        return <ReallocateItems setCurrentPage={setCurrentPage} />;
      case 'fulfill-orders':
      case 'view-fulfill-orders':
        return <ViewFulfillOrders setCurrentPage={setCurrentPage} />;
      case 'create-fulfill-order':
        return <CreateFulfillOrder setCurrentPage={setCurrentPage} />;
      case 'view-fulfill-order-detail':
        return <ViewFulfillOrderDetail setCurrentPage={setCurrentPage} />;
      case 'edit-fulfill-order':
        return <EditFulfillOrder setCurrentPage={setCurrentPage} />;
      
      // Customer Payments
      case 'accept-customer-payments':
        return <AcceptCustomerPayment onBack={() => setCurrentPage('view-customer-payments')} />;
      case 'view-customer-payments':
        return <ViewCustomerPayments setCurrentPage={setCurrentPage} />;
      case 'view-customer-payment-detail':
        return <ViewCustomerPaymentDetail setCurrentPage={setCurrentPage} />;
      case 'edit-customer-payment':
        return <EditCustomerPayment setCurrentPage={setCurrentPage} />;
      
      // Customer Refunds
      case 'issue-customer-refund':
        return <IssueCustomerRefund onBack={() => setCurrentPage('dashboard')} />;
      
      // Return Authorizations
      case 'issue-return-authorizations':
        return <IssueReturnAuthorization onBack={() => setCurrentPage('view-return-authorizations')} />;
      case 'view-return-authorizations':
        return <ViewReturnAuthorizations setCurrentPage={setCurrentPage} />;
      case 'view-return-authorization-detail':
        return <ViewReturnAuthorizationDetail setCurrentPage={setCurrentPage} />;
      case 'edit-return-authorization':
        return <EditReturnAuthorization setCurrentPage={setCurrentPage} />;
      case 'approve-return-authorizations':
        return <ApproveReturnAuthorizations setCurrentPage={setCurrentPage} />;
      
      // Receive Returned Orders (Item Receipts)
      case 'receive-returned-order':
        return <ReceiveReturnedOrder onBack={() => setCurrentPage('view-returned-orders')} />;
      case 'view-returned-orders':
        return <ViewReturnedOrders setCurrentPage={setCurrentPage} />;
      case 'view-returned-order-detail':
        return <ViewReturnedOrderDetail setCurrentPage={setCurrentPage} />;
      case 'edit-returned-order':
        return <EditReturnedOrder setCurrentPage={setCurrentPage} />;
      
      // Credit Memos
      case 'issue-credit-memos':
      case 'issue-credit-memo':
        return <IssueCreditMemo onBack={() => setCurrentPage('view-credit-memos')} />;
      case 'view-credit-memos':
        return <ViewCreditMemos setCurrentPage={setCurrentPage} />;
      case 'view-credit-memo-detail':
        return <ViewCreditMemoDetail setCurrentPage={setCurrentPage} />;
      case 'edit-credit-memo':
        return <EditCreditMemo setCurrentPage={setCurrentPage} />;
      
      // Refund Cash Sales
      case 'refund-cash-sales':
      case 'refund-cash-sale':
        return <RefundCashSale onBack={() => setCurrentPage('view-cash-refunds')} />;
      case 'view-cash-refunds':
      case 'view-cash-sale-refunds':
        return <ViewCashRefunds setCurrentPage={setCurrentPage} />;
      case 'view-cash-refund-detail':
        return <ViewCashRefundDetail setCurrentPage={setCurrentPage} />;
      case 'edit-cash-refund':
        return <EditCashRefund setCurrentPage={setCurrentPage} />;
      
      // Assess Finance Charges
      case 'assess-finance-charges':
      case 'assess-finance-charge':
        return <AssessFinanceCharge onBack={() => setCurrentPage('view-finance-charges')} />;
      case 'view-finance-charges':
        return <ViewFinanceCharges setCurrentPage={setCurrentPage} />;
      case 'view-finance-charge-detail':
        return <ViewFinanceChargeDetail setCurrentPage={setCurrentPage} />;
      case 'edit-finance-charge':
        return <EditFinanceCharge setCurrentPage={setCurrentPage} />;
      
      // Record Customer Deposits
      case 'record-customer-deposits':
      case 'record-customer-deposit':
        return <RecordCustomerDeposit onBack={() => setCurrentPage('view-customer-deposits')} />;
      case 'view-customer-deposits':
        return <ViewCustomerDeposits setCurrentPage={setCurrentPage} />;
      case 'view-customer-deposit-detail':
        return <ViewCustomerDepositDetail setCurrentPage={setCurrentPage} />;
      case 'edit-customer-deposit':
        return <EditCustomerDeposit setCurrentPage={setCurrentPage} />;
      
      // Invoice Billable Customers (no list view)
      case 'invoice-billable-customers':
        return <InvoiceBillableCustomers setCurrentPage={setCurrentPage} />;
      
      // Generate Statements
      case 'generate-statements':
        return <GenerateStatements setCurrentPage={setCurrentPage} />;
      case 'view-customer-statement':
        return <ViewCustomerStatement setCurrentPage={setCurrentPage} />;
      case 'edit-customer-statement':
        return <EditCustomerStatement setCurrentPage={setCurrentPage} />;
      
      // Print Individual Statement
      case 'print-individual-statement':
        return <PrintIndividualStatement setCurrentPage={setCurrentPage} />;
      
      // Generate Price Lists
      case 'generate-price-lists':
        return <GeneratePriceLists setCurrentPage={setCurrentPage} />;
      case 'view-price-list-customer':
        return <ViewPriceListCustomer setCurrentPage={setCurrentPage} />;
      case 'edit-price-list-customer':
        return <EditPriceListCustomer setCurrentPage={setCurrentPage} />;
      
      // Individual Price List
      case 'individual-price-list':
        return <IndividualPriceList setCurrentPage={setCurrentPage} />;
      
      case 'view-order-items':
      case 'create-allocation-schedules':
      case 'create-intercompany-allocation-schedules':
      case 'create-allocation-batches':
      case 'create-intercompany-adjustments':
      case 'revalue-open-currency-balances':
      case 'make-statistical-journal-entries':
      case 'create-statistical-schedule':
      case 'view-advanced-intercompany-journal-entries':
      case 'view-budgets':
      case 'view-allocation-schedules':
      case 'view-intercompany-allocation-schedules':
      case 'view-allocation-batches':
      case 'view-intercompany-adjustments':
      case 'view-statistical-journal-entries':
      case 'view-statistical-schedules':
        return <div style={{ padding: '30px' }}><h1>{currentPage.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} - Coming Soon</h1></div>;
      case 'payroll':
        return <div style={{ padding: '30px' }}><h1>Payroll Module - Coming Soon</h1></div>;
      case 'setup':
        return <div style={{ padding: '30px' }}><h1>Setup Module - Coming Soon</h1></div>;
      case 'setup-company':
      case 'setup-company-information':
        return <SetupCompanyInformation setCurrentPage={setCurrentPage} />;
      case 'setup-enable-features':
        return <div style={{ padding: '30px' }}><h1>Setup - Enable Features - Coming Soon</h1></div>;
      case 'setup-subsidiary-settings-manager':
        return <SubsidiarySettingsManager setCurrentPage={setCurrentPage} />;
      case 'setup-subsidiary-settings-detail':
        const subsidiaryData = JSON.parse(sessionStorage.getItem('selectedSubsidiary') || '{}');
        return <SubsidiarySettingsDetail setCurrentPage={setCurrentPage} subsidiary={subsidiaryData} />;
      case 'setup-subsidiaries':
      case 'view-subsidiaries':
        return <ViewSubsidiaries setCurrentPage={setCurrentPage} />;
      case 'view-subsidiary-detail':
        return <ViewSubsidiaryDetail setCurrentPage={setCurrentPage} />;
      case 'edit-subsidiary':
        return <EditSubsidiary setCurrentPage={setCurrentPage} />;
      case 'new-subsidiary':
        return <NewSubsidiary setCurrentPage={setCurrentPage} />;
      case 'setup-department':
      case 'view-departments':
        return <ViewDepartments setCurrentPage={setCurrentPage} />;
      case 'view-department-detail':
        return <ViewDepartmentDetail setCurrentPage={setCurrentPage} />;
      case 'edit-department':
        return <EditDepartment setCurrentPage={setCurrentPage} />;
      case 'new-department':
        return <NewDepartment setCurrentPage={setCurrentPage} />;
      case 'setup-location':
      case 'view-locations':
        return <ViewLocations setCurrentPage={setCurrentPage} />;
      case 'view-location-detail':
        return <ViewLocationDetail setCurrentPage={setCurrentPage} />;
      case 'edit-location':
        return <EditLocation setCurrentPage={setCurrentPage} />;
      case 'new-location':
        return <NewLocation setCurrentPage={setCurrentPage} />;
      case 'setup-classes':
      case 'view-classes':
        return <ViewClasses setCurrentPage={setCurrentPage} />;
      case 'view-class-detail':
        return <ViewClassDetail setCurrentPage={setCurrentPage} />;
      case 'edit-class':
        return <EditClass setCurrentPage={setCurrentPage} />;
      case 'new-class':
        return <NewClass setCurrentPage={setCurrentPage} />;
      case 'setup-accounting':
        return <div style={{ padding: '30px' }}><h1>Setup - Accounting - Coming Soon</h1></div>;
      case 'setup-accounting-list':
        return <ViewAccountingLists setCurrentPage={setCurrentPage} />;
      case 'view-accounting-list-detail':
        return <ViewAccountingListDetail setCurrentPage={setCurrentPage} />;
      case 'edit-accounting-list':
        return <EditAccountingList setCurrentPage={setCurrentPage} />;
      case 'setup-expense-categories':
        return <ViewExpenseCategories setCurrentPage={setCurrentPage} />;
      case 'view-expense-category-detail':
        return <ViewExpenseCategoryDetail setCurrentPage={setCurrentPage} />;
      case 'edit-expense-category':
        return <EditExpenseCategory setCurrentPage={setCurrentPage} />;
      case 'new-expense-category':
        return <NewExpenseCategory setCurrentPage={setCurrentPage} />;
      case 'setup-expense-report-policies':
        return <ViewExpenseReportPolicies setCurrentPage={setCurrentPage} />;
      case 'new-expense-report-policy':
        return <NewExpenseReportPolicy setCurrentPage={setCurrentPage} />;
      case 'edit-expense-report-policy':
        return <NewExpenseReportPolicy setCurrentPage={setCurrentPage} />;
      case 'view-expense-report-policy-detail':
        return <NewExpenseReportPolicy setCurrentPage={setCurrentPage} />;
      case 'setup-chart-of-accounts':
        return <NewChartOfAccount setCurrentPage={setCurrentPage} />;
      case 'view-chart-of-accounts':
        return <ViewChartOfAccounts 
          onNewClick={() => setCurrentPage('setup-chart-of-accounts')}
          onViewClick={() => setCurrentPage('view-account-detail')}
          onEditClick={() => setCurrentPage('setup-chart-of-accounts')}
        />;
      case 'view-account-detail':
        return <ViewChartOfAccountDetail 
          onBack={() => setCurrentPage('view-chart-of-accounts')}
          onEdit={() => setCurrentPage('setup-chart-of-accounts')}
        />;
      case 'edit-account':
        return <div style={{ padding: '30px' }}><h1>Edit Account - Coming Soon</h1></div>;
      case 'new-account':
        return <div style={{ padding: '30px' }}><h1>New Account - Coming Soon</h1></div>;
      case 'setup-manage-accounting-periods':
        return <ManageAccountingPeriods setCurrentPage={setCurrentPage} />;
      case 'setup-accounting-preferences':
        return <div style={{ padding: '30px' }}><h1>Accounting Preferences - Coming Soon</h1></div>;
      case 'setup-invoicing-preferences':
        return <InvoicingPreferences setCurrentPage={setCurrentPage} />;
      case 'setup-finance-charge-preferences':
        return <FinanceChargePreferences setCurrentPage={setCurrentPage} />;
      case 'setup-tax-codes':
        return <ViewTaxCodes setCurrentPage={setCurrentPage} />;
      case 'new-tax-code':
      case 'edit-tax-code':
        return <NewTaxCode setCurrentPage={setCurrentPage} />;
      case 'view-tax-code-detail':
        return <ViewTaxCodeDetail 
          onBack={() => setCurrentPage('setup-tax-codes')}
          onEdit={() => setCurrentPage('edit-tax-code')}
        />;
      case 'setup-customer-status-list':
        return <CustomerStatusList setCurrentPage={setCurrentPage} />;
      case 'new-customer-status':
      case 'edit-customer-status':
        return <NewCustomerStatus setCurrentPage={setCurrentPage} />;
      case 'view-customer-status-detail':
        return <ViewCustomerStatusDetail 
          onBack={() => setCurrentPage('setup-customer-status-list')}
          onEdit={() => setCurrentPage('edit-customer-status')}
        />;
      case 'setup-crm-lists':
        return <CRMLists setCurrentPage={setCurrentPage} />;
      case 'new-crm-list':
      case 'edit-crm-list':
        return <NewCRMList setCurrentPage={setCurrentPage} />;
      case 'view-crm-list-detail':
        return <ViewCRMListDetail 
          onBack={() => setCurrentPage('setup-crm-lists')}
          onEdit={() => setCurrentPage('edit-crm-list')}
        />;
      case 'setup-crm-preferences':
        return <CRMPreferences setCurrentPage={setCurrentPage} />;
      case 'setup-crm':
        return <div style={{ padding: '30px' }}><h1>Setup - CRM - Coming Soon</h1></div>;
      case 'setup-manage-users':
        return <ManageUsers setCurrentPage={setCurrentPage} />;
      case 'edit-user':
        return <EditUser setCurrentPage={setCurrentPage} />;
      case 'view-user-vendor-detail':
        return <ViewUserVendorDetail 
          onBack={() => setCurrentPage('setup-manage-users')}
          onEdit={() => setCurrentPage('edit-user')}
        />;
      case 'view-role-detail':
        return <ViewRoleDetail onBack={() => setCurrentPage('setup-manage-users')} />;
      case 'setup-show-role-differences':
        return <ShowRoleDifferences setCurrentPage={setCurrentPage} />;
      case 'setup-two-factor-auth-roles':
        return <TwoFactorAuthRoles setCurrentPage={setCurrentPage} />;
      case 'setup-users-roles':
        return <div style={{ padding: '30px' }}><h1>Setup - Users/Roles - Coming Soon</h1></div>;
      case 'setup-manage-integration':
        return <ManageIntegration setCurrentPage={setCurrentPage} />;
      case 'view-integration-detail':
        return <ViewIntegrationDetail 
          onBack={() => setCurrentPage('setup-manage-integration')}
          onEdit={() => setCurrentPage('edit-integration')}
        />;
      case 'edit-integration':
      case 'new-integration':
        return <EditIntegration setCurrentPage={setCurrentPage} />;
      case 'setup-integration':
        return <div style={{ padding: '30px' }}><h1>Setup - Integration - Coming Soon</h1></div>;
      case 'setup-document-number-series':
        return <DocumentNumberSeriesList setCurrentPage={setCurrentPage} />;
      case 'view-document-series-detail':
        return <ViewDocumentSeriesDetail 
          onBack={() => setCurrentPage('setup-document-number-series')}
          onEdit={() => setCurrentPage('edit-document-series')}
        />;
      case 'edit-document-series':
      case 'new-document-series':
        return <EditDocumentSeries setCurrentPage={setCurrentPage} />;
      case 'setup-custom':
        return <div style={{ padding: '30px' }}><h1>Setup - Custom - Coming Soon</h1></div>;
      case 'reports':
        return <div style={{ padding: '30px' }}><h1>Reports Module - Coming Soon</h1></div>;
      default:
        return <Dashboard />;
    }
  };

  // Show login screen if not logged in
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <Sidebar 
        collapsed={collapsed} 
        setCollapsed={setCollapsed}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="main-content">
        <div className="content-area">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;
