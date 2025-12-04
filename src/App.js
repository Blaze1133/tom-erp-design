import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Quotation from './components/Quotation';
import SalesOrder from './components/SalesOrder';
import CreateEnquiries from './components/CreateEnquiries';
import ViewEnquiries from './components/ViewEnquiries';
import ViewQuotations from './components/ViewQuotations';
import ViewQuotationDetail from './components/ViewQuotationDetail';
import EditQuotation from './components/EditQuotation';
import CreateQuotation from './components/CreateQuotation';
import ViewSalesOrders from './components/ViewSalesOrders';
import ViewSalesOrderDetail from './components/ViewSalesOrderDetail';
import EditSalesOrder from './components/EditSalesOrder';
import InvoiceSalesOrders from './components/InvoiceSalesOrders';
import InvoiceDetail from './components/InvoiceDetail';
import CreateInvoice from './components/CreateInvoice';
import ViewInvoices from './components/ViewInvoices';
import EditInvoice from './components/EditInvoice';
import ViewInvoiceDetail from './components/ViewInvoiceDetail';
import EnterCashSales from './components/EnterCashSales';
import ViewCashSales from './components/ViewCashSales';
import EditCashSale from './components/EditCashSale';
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
import EnableFeatures from './components/EnableFeatures';
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
import ViewProjects from './components/ViewProjects';
import ViewProjectDetail from './components/ViewProjectDetail';
import CreateProject from './components/CreateProject';
import BillPurchaseOrders from './components/BillPurchaseOrders';
import ViewBillPurchaseOrderDetail from './components/ViewBillPurchaseOrderDetail';
import EditBillPurchaseOrder from './components/EditBillPurchaseOrder';
import EnterBills from './components/EnterBills';
import ViewBills from './components/ViewBills';
import ViewBillDetail from './components/ViewBillDetail';
import PayBills from './components/PayBills';
import ApproveVendorPayments from './components/ApproveVendorPayments';
import ViewItems from './components/ViewItems';
import CreateItem from './components/CreateItem';
import ViewItemDetail from './components/ViewItemDetail';
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
import ViewOrderItems from './components/ViewOrderItems';
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
import ViewEmployees from './components/ViewEmployees';
import ViewEmployeeDetail from './components/ViewEmployeeDetail';
import CreateEmployee from './components/CreateEmployee';
import ViewLeavePayCalendars from './components/ViewLeavePayCalendars';
import ViewLeavePayCalendarDetail from './components/ViewLeavePayCalendarDetail';
import CreateLeavePayCalendar from './components/CreateLeavePayCalendar';
import ViewShiftMasters from './components/ViewShiftMasters';
import ViewShiftMasterDetail from './components/ViewShiftMasterDetail';
import CreateShiftMaster from './components/CreateShiftMaster';
import ViewAssetIssues from './components/ViewAssetIssues';
import ViewAssetIssueDetail from './components/ViewAssetIssueDetail';
import CreateAssetIssue from './components/CreateAssetIssue';
import ViewEmployeeLoanApplications from './components/ViewEmployeeLoanApplications';
import ViewEmployeeLoanDetail from './components/ViewEmployeeLoanDetail';
import CreateEmployeeLoan from './components/CreateEmployeeLoan';
import ViewCareerProgressions from './components/ViewCareerProgressions';
import ViewCareerProgressionDetail from './components/ViewCareerProgressionDetail';
import CreateCareerProgression from './components/CreateCareerProgression';
import ViewEmployeeExitProcesses from './components/ViewEmployeeExitProcesses';
import ViewEmployeeExitDetail from './components/ViewEmployeeExitDetail';
import CreateEmployeeExit from './components/CreateEmployeeExit';
import ViewLeaveTypes from './components/ViewLeaveTypes';
import ViewLeaveTypeDetail from './components/ViewLeaveTypeDetail';
import CreateLeaveType from './components/CreateLeaveType';
import ViewEmployeeLeaveApplications from './components/ViewEmployeeLeaveApplications';
import ViewEmployeeLeaveDetail from './components/ViewEmployeeLeaveDetail';
import CreateEmployeeLeave from './components/CreateEmployeeLeave';
import ViewEmployeeLeaveEnrollments from './components/ViewEmployeeLeaveEnrollments';
import ViewEmployeeLeaveEnrollmentDetail from './components/ViewEmployeeLeaveEnrollmentDetail';
import CreateEmployeeLeaveEnrollment from './components/CreateEmployeeLeaveEnrollment';
import ViewEmployeeLeaveReinstatements from './components/ViewEmployeeLeaveReinstatements';
import CreateEmployeeLeaveReinstatement from './components/CreateEmployeeLeaveReinstatement';
import CreateYardData from './components/CreateYardData';
import ViewYardData from './components/ViewYardData';
import ViewYardDataDetail from './components/ViewYardDataDetail';
import CreateBiometricData from './components/CreateBiometricData';
import ViewBiometricData from './components/ViewBiometricData';
import ViewBiometricDataDetail from './components/ViewBiometricDataDetail';
import CreateManualEntry from './components/CreateManualEntry';
import ViewManualEntry from './components/ViewManualEntry';
import ViewManualEntryDetail from './components/ViewManualEntryDetail';
import ViewEmployeeDailyAttendanceList from './components/ViewEmployeeDailyAttendanceList';
import ViewEmployeeDailyAttendanceDetail from './components/ViewEmployeeDailyAttendanceDetail';
import EditEmployeeDailyAttendance from './components/EditEmployeeDailyAttendance';
import ViewPayComponents from './components/ViewPayComponents';
import CreatePayComponent from './components/CreatePayComponent';
import ViewPayComponentDetail from './components/ViewPayComponentDetail';
import ViewPayBatches from './components/ViewPayBatches';
import ViewPayBatchDetail from './components/ViewPayBatchDetail';
import EditPayBatch from './components/EditPayBatch';
import CreatePayBatch from './components/CreatePayBatch';
import ViewPayeeEmployees from './components/ViewPayeeEmployees';
import ViewPayeeEmployeeDetail from './components/ViewPayeeEmployeeDetail';
import EditPayeeEmployee from './components/EditPayeeEmployee';
import CreatePayeeEmployee from './components/CreatePayeeEmployee';
import ViewCpfAppliedAgeGroups from './components/ViewCpfAppliedAgeGroups';
import ViewCpfAppliedAgeGroupDetail from './components/ViewCpfAppliedAgeGroupDetail';
import CreateCpfAppliedAgeGroup from './components/CreateCpfAppliedAgeGroup';
import EditAppliedCpfTable from './components/EditAppliedCpfTable';
import ViewCommunityContributionFunds from './components/ViewCommunityContributionFunds';
import ViewCommunityContributionFundDetail from './components/ViewCommunityContributionFundDetail';
import CreateCommunityContributionFund from './components/CreateCommunityContributionFund';
import EditCommunityContributionFund from './components/EditCommunityContributionFund';
import ViewSdlMasters from './components/ViewSdlMasters';
import ViewSdlMasterDetail from './components/ViewSdlMasterDetail';
import CreateSdlMaster from './components/CreateSdlMaster';
import EditSdlMaster from './components/EditSdlMaster';
import ViewLoanRepaymentProcesses from './components/ViewLoanRepaymentProcesses';
import ViewLoanRepaymentProcessDetail from './components/ViewLoanRepaymentProcessDetail';
import CreateLoanRepaymentProcess from './components/CreateLoanRepaymentProcess';
import EditLoanRepaymentProcess from './components/EditLoanRepaymentProcess';
import ViewFwlQualifications from './components/ViewFwlQualifications';
import ViewFwlQualificationDetail from './components/ViewFwlQualificationDetail';
import CreateFwlQualification from './components/CreateFwlQualification';
import EditFwlQualification from './components/EditFwlQualification';
import ViewIR8AYears from './components/ViewIR8AYears';
import ViewIR8AYearDetail from './components/ViewIR8AYearDetail';
import CreateIR8AYear from './components/CreateIR8AYear';
import ViewEmployeePFs from './components/ViewEmployeePFs';
import ViewEmployeePFDetail from './components/ViewEmployeePFDetail';
import CreateEmployeePF from './components/CreateEmployeePF';
import ViewPayGroups from './components/ViewPayGroups';
import ViewPayGroupDetail from './components/ViewPayGroupDetail';
import CreatePayGroup from './components/CreatePayGroup';
import ViewRetroactivePayments from './components/ViewRetroactivePayments';
import ViewRetroactivePaymentDetail from './components/ViewRetroactivePaymentDetail';
import CreateRetroactivePayment from './components/CreateRetroactivePayment';
import ViewCustomers from './components/ViewCustomers';
import ViewCustomerDetail from './components/ViewCustomerDetail';
import CreateCustomer from './components/CreateCustomer';
import ViewVendors from './components/ViewVendors';
import ViewVendorDetail from './components/ViewVendorDetail';
import CreateVendor from './components/CreateVendor';
import ViewBankMasters from './components/ViewBankMasters';
import ViewBankMasterDetail from './components/ViewBankMasterDetail';
import CreateBankMaster from './components/CreateBankMaster';

// Production Module Components
import ViewProjectMasters from './components/ViewProjectMasters';
import ViewProjectMasterDetail from './components/ViewProjectMasterDetail';
import CreateProjectMaster from './components/CreateProjectMaster';
import ViewTasks from './components/ViewTasks';
import ViewTaskDetail from './components/ViewTaskDetail';
import CreateTask from './components/CreateTask';
import ViewMilestones from './components/ViewMilestones';
import CreateMilestone from './components/CreateMilestone';
import ViewResources from './components/ViewResources';
import CreateResource from './components/CreateResource';
import GanttChart from './components/GanttChart';
import ProjectReportsAnalytics from './components/ProjectReportsAnalytics';
import ViewSiteLocations from './components/ViewSiteLocations';
import ViewSiteLocationDetail from './components/ViewSiteLocationDetail';
import CreateSiteLocation from './components/CreateSiteLocation';
import ViewContractors from './components/ViewContractors';
import ViewContractorDetail from './components/ViewContractorDetail';
import CreateContractor from './components/CreateContractor';
import UploadDrawings from './components/UploadDrawings';
import ProjectDocuments from './components/ProjectDocuments';
import ScanQRCode from './components/ScanQRCode';
import DashboardModule from './components/DashboardModule';
import FrameFabrication from './components/FrameFabrication';
import TestingAlignment from './components/TestingAlignment';
import FabricationQAQC from './components/FabricationQAQC';
import Packaging from './components/Packaging';
import MEServicesWorkflow from './components/MEServicesWorkflow';
import ModuleWiseTimeTracking from './components/ModuleWiseTimeTracking';
import ProductionDelivery from './components/ProductionDelivery';
import StatusAllModules from './components/StatusAllModules';
import WorkshopDashboardWrapper from './components/WorkshopDashboardWrapper';
import Anchoring from './components/Anchoring';
import Hoisting from './components/Hoisting';
import Positioning from './components/Positioning';
import MEHookup from './components/MEHookup';
import Installation from './components/Installation';
import FinalQAQC from './components/FinalQAQC';
import ProductionDashboardOverall from './components/ProductionDashboardOverall';

// CRM Module Components
import ViewLeads from './components/ViewLeads';
import CreateLead from './components/CreateLead';
import ViewOpportunities from './components/ViewOpportunities';
import CreateOpportunity from './components/CreateOpportunity';
import ViewCRMQuotations from './components/ViewCRMQuotations';
import CreateCRMQuotation from './components/CreateCRMQuotation';
import ViewCRMProjects from './components/ViewCRMProjects';

// Reports Module Components
import FinancialReports from './components/FinancialReports';
import IncomeStatement from './components/IncomeStatement';
import IncomeStatementDetail from './components/IncomeStatementDetail';
import BalanceSheet from './components/BalanceSheet';
import BalanceSheetDetail from './components/BalanceSheetDetail';
import CashFlowStatement from './components/CashFlowStatement';
import CashFlowStatementDetail from './components/CashFlowStatementDetail';
import GeneralLedger from './components/GeneralLedger';
import GeneralLedgerDetail from './components/GeneralLedgerDetail';
import TrialBalance from './components/TrialBalance';
import TrialBalanceDetail from './components/TrialBalanceDetail';
import TransactionDetail from './components/TransactionDetail';
import TransactionDetailExpanded from './components/TransactionDetailExpanded';
import RealizedExchangeGainsLosses from './components/RealizedExchangeGainsLosses';
import RealizedExchangeGainsLossesDetail from './components/RealizedExchangeGainsLossesDetail';
import UnrealizedExchangeGainsLosses from './components/UnrealizedExchangeGainsLosses';
import CTABalanceAudit from './components/CTABalanceAudit';
import ViewPayBatchPostingJournals from './components/ViewPayBatchPostingJournals';
import ViewPayBatchPostingJournalDetail from './components/ViewPayBatchPostingJournalDetail';
import CreatePayBatchPostingJournal from './components/CreatePayBatchPostingJournal';
import InventoryProfitability from './components/InventoryProfitability';

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
      case 'create-quotation':
        return <CreateQuotation setCurrentPage={setCurrentPage} />;
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
        return <ViewInvoices setCurrentPage={setCurrentPage} />;
      case 'edit-invoice':
        return <EditInvoice setCurrentPage={setCurrentPage} />;
      case 'view-invoice-detail':
        return <ViewInvoiceDetail setCurrentPage={setCurrentPage} />;
      case 'enter-cash-sales':
        return <EnterCashSales setCurrentPage={setCurrentPage} />;
      case 'view-cash-sales':
        return <ViewCashSales setCurrentPage={setCurrentPage} />;
      case 'edit-cash-sale':
        return <EditCashSale setCurrentPage={setCurrentPage} />;
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
        return <ViewOrderItems setCurrentPage={setCurrentPage} />;
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
      case 'create-project':
        return <CreateProject setCurrentPage={setCurrentPage} />;
      case 'view-projects':
        return <ViewProjects setCurrentPage={setCurrentPage} />;
      case 'view-project-detail':
        return <ViewProjectDetail setCurrentPage={setCurrentPage} />;
      case 'edit-project':
        return <CreateProject setCurrentPage={setCurrentPage} />;
      
      // Project Masters (Project Management Module)
      case 'view-project-masters':
        return <ViewProjectMasters 
          onNewClick={() => setCurrentPage('create-project-master')} 
          onViewClick={() => setCurrentPage('view-project-master-detail')}
          onEditClick={() => setCurrentPage('edit-project-master')}
        />;
      case 'create-project-master':
        return <CreateProjectMaster 
          onSave={() => setCurrentPage('view-project-masters')}
          onCancel={() => setCurrentPage('view-project-masters')}
        />;
      case 'view-project-master-detail':
        return <ViewProjectMasterDetail 
          onBack={() => setCurrentPage('view-project-masters')} 
          onEdit={() => setCurrentPage('edit-project-master')}
        />;
      case 'edit-project-master':
        return <CreateProjectMaster 
          isEdit={true}
          onSave={() => setCurrentPage('view-project-masters')}
          onCancel={() => setCurrentPage('view-project-master-detail')}
        />;
      
      // Tasks (Project Management Module)
      case 'view-tasks':
        return <ViewTasks 
          onNewClick={() => setCurrentPage('create-task')} 
          onViewClick={() => setCurrentPage('view-task-detail')}
          onEditClick={() => setCurrentPage('edit-task')}
        />;
      case 'create-task':
        return <CreateTask 
          onSave={() => setCurrentPage('view-tasks')}
          onCancel={() => setCurrentPage('view-tasks')}
        />;
      case 'view-task-detail':
        return <ViewTaskDetail 
          onBack={() => setCurrentPage('view-tasks')} 
          onEdit={() => setCurrentPage('edit-task')}
        />;
      case 'edit-task':
        return <CreateTask 
          isEdit={true}
          onSave={() => setCurrentPage('view-tasks')}
          onCancel={() => setCurrentPage('view-task-detail')}
        />;
      
      // Milestones (Project Management Module)
      case 'view-milestones':
        return <ViewMilestones 
          onNewClick={() => setCurrentPage('create-milestone')} 
          onViewClick={() => setCurrentPage('view-milestone-detail')}
          onEditClick={() => setCurrentPage('edit-milestone')}
        />;
      case 'create-milestone':
        return <CreateMilestone 
          onSave={() => setCurrentPage('view-milestones')}
          onCancel={() => setCurrentPage('view-milestones')}
        />;
      case 'edit-milestone':
        return <CreateMilestone 
          isEdit={true}
          onSave={() => setCurrentPage('view-milestones')}
          onCancel={() => setCurrentPage('view-milestones')}
        />;
      
      // Resources (Project Management Module)
      case 'view-resources':
        return <ViewResources 
          onNewClick={() => setCurrentPage('create-resource')} 
          onViewClick={() => setCurrentPage('view-resource-detail')}
          onEditClick={() => setCurrentPage('edit-resource')}
        />;
      case 'create-resource':
        return <CreateResource 
          onSave={() => setCurrentPage('view-resources')}
          onCancel={() => setCurrentPage('view-resources')}
        />;
      case 'edit-resource':
        return <CreateResource 
          isEdit={true}
          onSave={() => setCurrentPage('view-resources')}
          onCancel={() => setCurrentPage('view-resources')}
        />;
      
      // Gantt Chart (Project Management Module)
      case 'gantt-chart':
        return <GanttChart />;
      
      // Reports & Analytics (Project Management Module)
      case 'project-reports-analytics':
        return <ProjectReportsAnalytics />;
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
      case 'approve-vendor-payments':
        return <ApproveVendorPayments setCurrentPage={setCurrentPage} />;
      case 'view-items':
        return <ViewItems setCurrentPage={setCurrentPage} />;
      case 'create-item':
        return <CreateItem setCurrentPage={setCurrentPage} />;
      case 'view-item-detail':
        return <ViewItemDetail setCurrentPage={setCurrentPage} />;
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
      case 'bank-master':
        return <CreateBankMaster onBack={() => setCurrentPage('view-bank-masters')} />;
      case 'view-bank-masters':
        return <ViewBankMasters 
          onNewClick={() => setCurrentPage('bank-master')} 
          onViewClick={() => setCurrentPage('view-bank-master-detail')}
          onEditClick={() => setCurrentPage('edit-bank-master')}
        />;
      case 'view-bank-master-detail':
        return <ViewBankMasterDetail 
          onBack={() => setCurrentPage('view-bank-masters')} 
          onEdit={() => setCurrentPage('edit-bank-master')}
        />;
      case 'edit-bank-master':
        return <CreateBankMaster onBack={() => setCurrentPage('view-bank-masters')} />;
      
      // CRM Module Cases
      case 'view-leads':
        return <ViewLeads 
          onNewClick={() => setCurrentPage('create-lead')} 
          onViewClick={() => setCurrentPage('view-lead-detail')}
          onEditClick={() => setCurrentPage('edit-lead')}
        />;
      case 'create-lead':
        return <CreateLead onBack={() => setCurrentPage('view-leads')} />;
      case 'view-opportunities':
        return <ViewOpportunities 
          onNewClick={() => setCurrentPage('create-opportunity')} 
          onViewClick={() => setCurrentPage('view-opportunity-detail')}
          onEditClick={() => setCurrentPage('edit-opportunity')}
        />;
      case 'create-opportunity':
        return <CreateOpportunity onBack={() => setCurrentPage('view-opportunities')} />;
      case 'view-crm-quotations':
        return <ViewCRMQuotations 
          onNewClick={() => setCurrentPage('create-crm-quotation')} 
          onViewClick={() => setCurrentPage('view-crm-quotation-detail')}
          onEditClick={() => setCurrentPage('edit-crm-quotation')}
        />;
      case 'create-crm-quotation':
        return <CreateCRMQuotation onBack={() => setCurrentPage('view-crm-quotations')} />;
      case 'view-crm-projects':
        return <ViewCRMProjects 
          onNewClick={() => setCurrentPage('create-crm-project')} 
          onViewClick={() => setCurrentPage('view-crm-project-detail')}
          onEditClick={() => setCurrentPage('edit-crm-project')}
        />;
      
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
      case 'view-manual-entry-detail':
        return <ViewManualEntryDetail setCurrentPage={setCurrentPage} />;
      
      // Employee Daily Attendance List
      case 'employee-daily-attendance-list':
      case 'view-employee-daily-attendance-list':
        return <ViewEmployeeDailyAttendanceList 
          onViewClick={() => setCurrentPage('view-employee-daily-attendance-detail')}
          onEditClick={() => setCurrentPage('edit-employee-daily-attendance')}
          setCurrentPage={setCurrentPage} 
        />;
      case 'view-employee-daily-attendance-detail':
        return <ViewEmployeeDailyAttendanceDetail 
          onBack={() => setCurrentPage('view-employee-daily-attendance-list')}
          onEdit={() => setCurrentPage('edit-employee-daily-attendance')}
          setCurrentPage={setCurrentPage} 
        />;
      case 'edit-employee-daily-attendance':
        return <EditEmployeeDailyAttendance 
          onBack={() => setCurrentPage('view-employee-daily-attendance-list')}
          onSave={() => setCurrentPage('view-employee-daily-attendance-list')}
          setCurrentPage={setCurrentPage} 
        />;
      
      // Individual Price List
      case 'individual-price-list':
        return <IndividualPriceList setCurrentPage={setCurrentPage} />;
      
      case 'view-allocation-schedules':
      case 'view-intercompany-allocation-schedules':
      case 'view-allocation-batches':
      case 'view-intercompany-adjustments':
      case 'view-statistical-journal-entries':
      case 'view-statistical-schedules':
        return <div style={{ padding: '30px' }}><h1>{currentPage.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} - Coming Soon</h1></div>;
      case 'payroll':
        return <div style={{ padding: '30px' }}><h1>Payroll Module - Coming Soon</h1></div>;
      case 'hr':
        return <div style={{ padding: '30px' }}><h1>HR Module - Coming Soon</h1></div>;
      
      // HR - Employee Master
      case 'hr-employee-master':
        return <ViewEmployees 
          onNewClick={() => setCurrentPage('hr-employee-master-new')}
          onViewClick={() => setCurrentPage('hr-employee-master-view')}
          onEditClick={() => setCurrentPage('hr-employee-master-edit')}
        />;
      case 'hr-employee-master-view':
        return <ViewEmployeeDetail 
          onBack={() => setCurrentPage('hr-employee-master')}
          onEdit={() => setCurrentPage('hr-employee-master-edit')}
        />;
      case 'hr-employee-master-new':
        return <CreateEmployee 
          onSave={() => setCurrentPage('hr-employee-master')}
          onCancel={() => setCurrentPage('hr-employee-master')}
        />;
      case 'hr-employee-master-edit':
        return <CreateEmployee 
          employeeData={{
            employeeId: 'MEP01 001',
            name: 'JEGANATHAN SUNDARAVELU',
            subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
            department: 'MEP MARINE'
          }}
          onSave={() => setCurrentPage('hr-employee-master-view')}
          onCancel={() => setCurrentPage('hr-employee-master-view')}
        />;
      
      // HR - Leave Pay Calendar
      case 'hr-leave-pay-calendar':
        return <ViewLeavePayCalendars 
          onNewClick={() => setCurrentPage('hr-leave-pay-calendar-new')}
          onViewClick={() => setCurrentPage('hr-leave-pay-calendar-view')}
          onEditClick={() => setCurrentPage('hr-leave-pay-calendar-edit')}
        />;
      case 'hr-leave-pay-calendar-view':
        return <ViewLeavePayCalendarDetail 
          onBack={() => setCurrentPage('hr-leave-pay-calendar')}
          onEdit={() => setCurrentPage('hr-leave-pay-calendar-edit')}
        />;
      case 'hr-leave-pay-calendar-new':
        return <CreateLeavePayCalendar 
          onSave={() => setCurrentPage('hr-leave-pay-calendar')}
          onCancel={() => setCurrentPage('hr-leave-pay-calendar')}
        />;
      case 'hr-leave-pay-calendar-edit':
        return <CreateLeavePayCalendar 
          calendarData={{
            name: '2021 (MEP)',
            year: 2021,
            subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.'
          }}
          onSave={() => setCurrentPage('hr-leave-pay-calendar-view')}
          onCancel={() => setCurrentPage('hr-leave-pay-calendar-view')}
        />;
      
      // HR - Shift Master
      case 'hr-shift-master':
        return <ViewShiftMasters 
          onNewClick={() => setCurrentPage('hr-shift-master-new')}
          onViewClick={() => setCurrentPage('hr-shift-master-view')}
          onEditClick={() => setCurrentPage('hr-shift-master-edit')}
        />;
      case 'hr-shift-master-view':
        return <ViewShiftMasterDetail 
          onBack={() => setCurrentPage('hr-shift-master')}
          onEdit={() => setCurrentPage('hr-shift-master-edit')}
        />;
      case 'hr-shift-master-new':
        return <CreateShiftMaster 
          onSave={() => setCurrentPage('hr-shift-master')}
          onCancel={() => setCurrentPage('hr-shift-master')}
        />;
      case 'hr-shift-master-edit':
        return <CreateShiftMaster 
          shiftData={{
            name: '1 PM To 10 PM',
            subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd',
            shiftType: 'Night Shift'
          }}
          onSave={() => setCurrentPage('hr-shift-master-view')}
          onCancel={() => setCurrentPage('hr-shift-master-view')}
        />;
      
      // HR - Asset Issue to Employee
      case 'hr-asset-issue-to-employee':
        return <ViewAssetIssues 
          onNewClick={() => setCurrentPage('hr-asset-issue-new')}
          onViewClick={() => setCurrentPage('hr-asset-issue-view')}
          onEditClick={() => setCurrentPage('hr-asset-issue-edit')}
        />;
      case 'hr-asset-issue-view':
        return <ViewAssetIssueDetail 
          onBack={() => setCurrentPage('hr-asset-issue-to-employee')}
          onEdit={() => setCurrentPage('hr-asset-issue-edit')}
        />;
      case 'hr-asset-issue-new':
        return <CreateAssetIssue 
          onSave={() => setCurrentPage('hr-asset-issue-to-employee')}
          onCancel={() => setCurrentPage('hr-asset-issue-to-employee')}
        />;
      case 'hr-asset-issue-edit':
        return <CreateAssetIssue 
          assetData={{
            id: 1,
            employee: '222267 Demo employee',
            assetName: 'Laptop',
            subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd'
          }}
          onSave={() => setCurrentPage('hr-asset-issue-view')}
          onCancel={() => setCurrentPage('hr-asset-issue-view')}
        />;
      
      // HR - Employee Loan Application
      case 'hr-employee-loan-application':
        return <ViewEmployeeLoanApplications 
          onNewClick={() => setCurrentPage('hr-employee-loan-new')}
          onViewClick={() => setCurrentPage('hr-employee-loan-view')}
          onEditClick={() => setCurrentPage('hr-employee-loan-edit')}
        />;
      case 'hr-employee-loan-view':
        return <ViewEmployeeLoanDetail 
          onBack={() => setCurrentPage('hr-employee-loan-application')}
          onEdit={() => setCurrentPage('hr-employee-loan-edit')}
        />;
      case 'hr-employee-loan-new':
        return <CreateEmployeeLoan 
          onSave={() => setCurrentPage('hr-employee-loan-application')}
          onCancel={() => setCurrentPage('hr-employee-loan-application')}
        />;
      case 'hr-employee-loan-edit':
        return <CreateEmployeeLoan 
          loanData={{
            id: 1,
            employeeIdName: '222267 Demo employee',
            loanAmount: '12,000.00',
            subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd'
          }}
          onSave={() => setCurrentPage('hr-employee-loan-view')}
          onCancel={() => setCurrentPage('hr-employee-loan-view')}
        />;
      
      // HR - Career Progress Salary
      case 'hr-career-progress-salary':
        return <ViewCareerProgressions 
          onNewClick={() => setCurrentPage('hr-career-progress-new')}
          onViewClick={() => setCurrentPage('hr-career-progress-view')}
          onEditClick={() => setCurrentPage('hr-career-progress-edit')}
        />;
      case 'hr-career-progress-view':
        return <ViewCareerProgressionDetail 
          onBack={() => setCurrentPage('hr-career-progress-salary')}
          onEdit={() => setCurrentPage('hr-career-progress-edit')}
        />;
      case 'hr-career-progress-new':
        return <CreateCareerProgression 
          onSave={() => setCurrentPage('hr-career-progress-salary')}
          onCancel={() => setCurrentPage('hr-career-progress-salary')}
        />;
      case 'hr-career-progress-edit':
        return <CreateCareerProgression 
          progressionData={{
            id: 1,
            employeeName: '222267 Demo employee',
            subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd',
            oldSalary: '5,000.00',
            increment: '1,000.00'
          }}
          onSave={() => setCurrentPage('hr-career-progress-view')}
          onCancel={() => setCurrentPage('hr-career-progress-view')}
        />;
      
      // HR - Employee Exit Process
      case 'hr-employee-exit-process':
        return <ViewEmployeeExitProcesses 
          onNewClick={() => setCurrentPage('hr-employee-exit-new')}
          onViewClick={() => setCurrentPage('hr-employee-exit-view')}
          onEditClick={() => setCurrentPage('hr-employee-exit-edit')}
        />;
      case 'hr-employee-exit-view':
        return <ViewEmployeeExitDetail 
          onBack={() => setCurrentPage('hr-employee-exit-process')}
          onEdit={() => setCurrentPage('hr-employee-exit-edit')}
        />;
      case 'hr-employee-exit-new':
        return <CreateEmployeeExit 
          onSave={() => setCurrentPage('hr-employee-exit-process')}
          onCancel={() => setCurrentPage('hr-employee-exit-process')}
        />;
      case 'hr-employee-exit-edit':
        return <CreateEmployeeExit 
          exitData={{
            employee: '222267 Demo employee',
            hireDate: '2018-09-28',
            resignedDate: '2021-09-01',
            exitType: 'Voluntary'
          }}
          onSave={() => setCurrentPage('hr-employee-exit-view')}
          onCancel={() => setCurrentPage('hr-employee-exit-view')}
        />;
      
      // HR - Leave Type
      case 'hr-leave-type':
        return <ViewLeaveTypes 
          onNewClick={() => setCurrentPage('hr-leave-type-new')}
          onViewClick={() => setCurrentPage('hr-leave-type-view')}
          onEditClick={() => setCurrentPage('hr-leave-type-edit')}
        />;
      case 'hr-leave-type-view':
        return <ViewLeaveTypeDetail 
          onBack={() => setCurrentPage('hr-leave-type')}
          onEdit={() => setCurrentPage('hr-leave-type-edit')}
        />;
      case 'hr-leave-type-new':
        return <CreateLeaveType 
          onSave={() => setCurrentPage('hr-leave-type')}
          onCancel={() => setCurrentPage('hr-leave-type')}
        />;
      case 'hr-leave-type-edit':
        return <CreateLeaveType 
          leaveTypeData={{
            leaveName: 'Annual Leave Executive',
            id: 26,
            entitlementPerYear: 14,
            subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.'
          }}
          onSave={() => setCurrentPage('hr-leave-type-view')}
          onCancel={() => setCurrentPage('hr-leave-type-view')}
        />;
      
      // HR - Employee Leave Application
      case 'hr-employee-leave-application':
        return <ViewEmployeeLeaveApplications 
          onNewClick={() => setCurrentPage('hr-employee-leave-new')}
          onViewClick={() => setCurrentPage('hr-employee-leave-view')}
          onEditClick={() => setCurrentPage('hr-employee-leave-edit')}
        />;
      case 'hr-employee-leave-view':
        return <ViewEmployeeLeaveDetail 
          onBack={() => setCurrentPage('hr-employee-leave-application')}
          onEdit={() => setCurrentPage('hr-employee-leave-edit')}
        />;
      case 'hr-employee-leave-new':
        return <CreateEmployeeLeave 
          onSave={() => setCurrentPage('hr-employee-leave-application')}
          onCancel={() => setCurrentPage('hr-employee-leave-application')}
        />;
      case 'hr-employee-leave-edit':
        return <CreateEmployeeLeave 
          leaveData={{
            id: 'LRC000023',
            employee: 'MEP059 Muruganandam Kayalvizhi',
            subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
            applyLeaveType: 'Annual Leave Executive'
          }}
          onSave={() => setCurrentPage('hr-employee-leave-view')}
          onCancel={() => setCurrentPage('hr-employee-leave-view')}
        />;
      
      // HR - Employee Leave Enrollment
      case 'hr-employee-leave-enrollment':
        return <ViewEmployeeLeaveEnrollments 
          onNewClick={() => setCurrentPage('hr-employee-leave-enrollment-new')}
          onViewClick={() => setCurrentPage('hr-employee-leave-enrollment-view')}
          onEditClick={() => setCurrentPage('hr-employee-leave-enrollment-edit')}
        />;
      case 'hr-employee-leave-enrollment-view':
        return <ViewEmployeeLeaveEnrollmentDetail 
          onBack={() => setCurrentPage('hr-employee-leave-enrollment')}
          onEdit={() => setCurrentPage('hr-employee-leave-enrollment-edit')}
        />;
      case 'hr-employee-leave-enrollment-new':
        return <CreateEmployeeLeaveEnrollment 
          onSave={() => setCurrentPage('hr-employee-leave-enrollment')}
          onCancel={() => setCurrentPage('hr-employee-leave-enrollment')}
        />;
      case 'hr-employee-leave-enrollment-edit':
        return <CreateEmployeeLeaveEnrollment 
          enrollmentData={{
            employeeName: 'TMO001 Al Amin',
            leaveCalendar: 'TMO 2024',
            year: 2024
          }}
          onSave={() => setCurrentPage('hr-employee-leave-enrollment-view')}
          onCancel={() => setCurrentPage('hr-employee-leave-enrollment-view')}
        />;
      
      // HR - Employee Leave Reinstatement
      case 'hr-employee-leave-reinstatement':
        return <ViewEmployeeLeaveReinstatements 
          onNewClick={() => setCurrentPage('hr-employee-leave-reinstatement-new')}
          onViewClick={() => setCurrentPage('hr-employee-leave-reinstatement-view')}
          onEditClick={() => setCurrentPage('hr-employee-leave-reinstatement-edit')}
        />;
      case 'hr-employee-leave-reinstatement-new':
        return <CreateEmployeeLeaveReinstatement 
          onSave={() => setCurrentPage('hr-employee-leave-reinstatement')}
          onCancel={() => setCurrentPage('hr-employee-leave-reinstatement')}
        />;
      case 'hr-employee-leave-reinstatement-edit':
        return <CreateEmployeeLeaveReinstatement 
          reinstatementData={{
            employeeName: 'MEP002 Bhuiyan Manik',
            leaveType: 'Annual Leave Executive'
          }}
          onSave={() => setCurrentPage('hr-employee-leave-reinstatement')}
          onCancel={() => setCurrentPage('hr-employee-leave-reinstatement')}
        />;
      // Production Module Cases
      case 'production-project-masters':
        return <ViewProjectMasters 
          onNewClick={() => setCurrentPage('create-project-master')}
          onViewClick={() => setCurrentPage('view-project-master-detail')}
          onEditClick={() => setCurrentPage('create-project-master')}
        />;
      case 'create-project-master':
        return <CreateProjectMaster />;
      case 'view-project-master-detail':
        return <ViewProjectMasterDetail 
          onBack={() => setCurrentPage('production-project-masters')}
          onEdit={() => setCurrentPage('create-project-master')}
        />;
      case 'production-site-locations':
        return <ViewSiteLocations 
          onNewClick={() => setCurrentPage('create-site-location')}
          onViewClick={() => setCurrentPage('view-site-location-detail')}
          onEditClick={() => setCurrentPage('create-site-location')}
        />;
      case 'create-site-location':
        return <CreateSiteLocation />;
      case 'view-site-location-detail':
        return <ViewSiteLocationDetail 
          onBack={() => setCurrentPage('production-site-locations')}
          onEdit={() => setCurrentPage('create-site-location')}
        />;
      case 'production-contractors':
        return <ViewContractors 
          onNewClick={() => setCurrentPage('create-contractor')}
          onViewClick={() => setCurrentPage('view-contractor-detail')}
          onEditClick={() => setCurrentPage('create-contractor')}
        />;
      case 'create-contractor':
        return <CreateContractor />;
      case 'view-contractor-detail':
        return <ViewContractorDetail 
          onBack={() => setCurrentPage('production-contractors')}
          onEdit={() => setCurrentPage('create-contractor')}
        />;
      case 'production-upload-drawings':
        return <UploadDrawings />;
      case 'production-project-documents':
        return <ProjectDocuments />;
      case 'scan-qr-code':
        return <ScanQRCode setCurrentPage={setCurrentPage} />;
      case 'dashboard-module':
        return <DashboardModule setCurrentPage={setCurrentPage} />;
      case 'status-all-modules':
        return <StatusAllModules setCurrentPage={setCurrentPage} />;
      case 'frame-fabrication':
        return <FrameFabrication setCurrentPage={setCurrentPage} />;
      case 'testing-alignment':
        return <TestingAlignment setCurrentPage={setCurrentPage} />;
      case 'fabrication-qa-qc':
        return <FabricationQAQC setCurrentPage={setCurrentPage} />;
      case 'packaging':
        return <Packaging setCurrentPage={setCurrentPage} />;
      case 'production-delivery':
        return <ProductionDelivery />;
      case 'anchoring':
        return <Anchoring setCurrentPage={setCurrentPage} />;
      case 'hoisting':
        return <Hoisting setCurrentPage={setCurrentPage} />;
      case 'positioning':
        return <Positioning setCurrentPage={setCurrentPage} />;
      case 'me-hookup':
        return <MEHookup setCurrentPage={setCurrentPage} />;
      case 'installation':
        return <Installation setCurrentPage={setCurrentPage} />;
      case 'final-qa-qc':
        return <FinalQAQC setCurrentPage={setCurrentPage} />;
      case 'production-me-services':
        return <MEServicesWorkflow />;
      case 'production-time-tracking':
        return <ModuleWiseTimeTracking />;
      case 'module-wise-time-tracking':
        return <ModuleWiseTimeTracking />;
      case 'production-workshop-dashboard':
        return <WorkshopDashboardWrapper />;
      case 'production-dashboard-overall':
        return <ProductionDashboardOverall />;
      case 'setup':
        return <div style={{ padding: '30px' }}><h1>Setup Module - Coming Soon</h1></div>;
      case 'setup-company':
      case 'setup-company-information':
        return <SetupCompanyInformation setCurrentPage={setCurrentPage} />;
      case 'setup-enable-features':
        return <EnableFeatures setCurrentPage={setCurrentPage} />;
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
      case 'setup-crm-enquiry':
        return <CreateEnquiries setCurrentPage={setCurrentPage} headerTitle="CRM Enquiry" />;
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
      
      // Payroll - Yard Data
      case 'create-yard-data':
        return <CreateYardData />;
      case 'view-yard-data':
        return <ViewYardData 
          onNewClick={() => setCurrentPage('create-yard-data')}
          onViewClick={() => setCurrentPage('view-yard-data-detail')}
          onEditClick={() => setCurrentPage('create-yard-data')}
        />;
      case 'view-yard-data-detail':
        return <ViewYardDataDetail 
          onBack={() => setCurrentPage('view-yard-data')}
          onEdit={() => setCurrentPage('create-yard-data')}
        />;
      
      // Payroll - Biometric Data
      case 'create-biometric-data':
        return <CreateBiometricData />;
      case 'view-biometric-data':
        return <ViewBiometricData 
          onNewClick={() => setCurrentPage('create-biometric-data')}
          onViewClick={() => setCurrentPage('view-biometric-data-detail')}
          onEditClick={() => setCurrentPage('create-biometric-data')}
        />;
      case 'view-biometric-data-detail':
        return <ViewBiometricDataDetail 
          onBack={() => setCurrentPage('view-biometric-data')}
          onEdit={() => setCurrentPage('create-biometric-data')}
        />;
      
      // Payroll - Manual Entry
      case 'create-manual-entry':
        return <CreateManualEntry />;
      case 'view-manual-entry':
        return <ViewManualEntry 
          onNewClick={() => setCurrentPage('create-manual-entry')}
          onViewClick={() => setCurrentPage('view-manual-entry-detail')}
          onEditClick={() => setCurrentPage('create-manual-entry')}
        />;
      case 'view-manual-entry-detail':
        return <ViewManualEntryDetail 
          onBack={() => setCurrentPage('view-manual-entry')}
          onEdit={() => setCurrentPage('create-manual-entry')}
        />;
      
      // Reports Module
      case 'financial-reports':
        return <FinancialReports 
          onIncomeStatementClick={() => setCurrentPage('income-statement')}
          onBalanceSheetClick={() => setCurrentPage('balance-sheet')}
          onCashFlowStatementClick={() => setCurrentPage('cash-flow-statement')}
          onGeneralLedgerClick={() => setCurrentPage('general-ledger')}
          onTrialBalanceClick={() => setCurrentPage('trial-balance')}
          onTransactionDetailClick={() => setCurrentPage('transaction-detail')}
        />;
      case 'income-statement':
        return <IncomeStatement 
          onViewDetailClick={() => setCurrentPage('income-statement-detail')}
        />;
      case 'income-statement-detail':
        return <IncomeStatementDetail 
          onBackClick={() => setCurrentPage('income-statement')}
        />;
      case 'balance-sheet':
        return <BalanceSheet 
          onViewDetailClick={() => setCurrentPage('balance-sheet-detail')}
        />;
      case 'balance-sheet-detail':
        return <BalanceSheetDetail 
          onBackClick={() => setCurrentPage('balance-sheet')}
        />;
      case 'cash-flow-statement':
        return <CashFlowStatement 
          onViewDetailClick={() => setCurrentPage('cash-flow-statement-detail')}
        />;
      case 'cash-flow-statement-detail':
        return <CashFlowStatementDetail 
          onBackClick={() => setCurrentPage('cash-flow-statement')}
        />;
      case 'general-ledger':
        return <GeneralLedger 
          onViewDetailClick={() => setCurrentPage('general-ledger-detail')}
        />;
      case 'general-ledger-detail':
        return <GeneralLedgerDetail 
          onBackClick={() => setCurrentPage('general-ledger')}
        />;
      case 'trial-balance':
        return <TrialBalance 
          onViewDetailClick={() => setCurrentPage('trial-balance-detail')}
        />;
      case 'trial-balance-detail':
        return <TrialBalanceDetail 
          onBackClick={() => setCurrentPage('trial-balance')}
        />;
      case 'transaction-detail':
        return <TransactionDetail 
          onViewDetailClick={() => setCurrentPage('transaction-detail-expanded')}
        />;
      case 'transaction-detail-expanded':
        return <TransactionDetailExpanded 
          onBackClick={() => setCurrentPage('transaction-detail')}
        />;
      case 'realized-exchange-gains-losses':
        return <RealizedExchangeGainsLosses 
          onViewDetailClick={() => setCurrentPage('realized-exchange-gains-losses-detail')}
        />;
      case 'realized-exchange-gains-losses-detail':
        return <RealizedExchangeGainsLossesDetail 
          onBackClick={() => setCurrentPage('realized-exchange-gains-losses')}
        />;
      case 'unrealized-exchange-gains-losses':
        return <UnrealizedExchangeGainsLosses 
          onViewDetailClick={() => setCurrentPage('unrealized-exchange-gains-losses-detail')}
        />;
      case 'cta-balance-audit':
        return <CTABalanceAudit 
          onViewDetailClick={() => setCurrentPage('cta-balance-audit-detail')}
        />;
      case 'inventory-profitability':
        return <InventoryProfitability />;
      case 'pay-batch-posting-journals':
        return <ViewPayBatchPostingJournals 
          onNewClick={() => setCurrentPage('pay-batch-posting-journal-new')}
          onViewClick={(id) => setCurrentPage('pay-batch-posting-journal-view')}
          onEditClick={(id) => setCurrentPage('pay-batch-posting-journal-edit')}
        />;
      case 'pay-batch-posting-journal-new':
        return <CreatePayBatchPostingJournal 
          onBack={() => setCurrentPage('pay-batch-posting-journals')}
          onSave={() => {
            setCurrentPage('pay-batch-posting-journals');
          }}
        />;
      case 'pay-batch-posting-journal-edit':
        return <CreatePayBatchPostingJournal 
          journalId="34"
          onBack={() => setCurrentPage('pay-batch-posting-journals')}
          onSave={() => {
            setCurrentPage('pay-batch-posting-journals');
          }}
        />;
      case 'pay-batch-posting-journal-view':
        return <ViewPayBatchPostingJournalDetail 
          journalId="34"
          onBack={() => setCurrentPage('pay-batch-posting-journals')}
          onEdit={(id) => setCurrentPage('pay-batch-posting-journal-edit')}
        />;
      
      // Payroll - Pay Component
      case 'payroll-pay-component':
        return <ViewPayComponents 
          onNewClick={() => setCurrentPage('payroll-pay-component-new')}
          onViewClick={() => setCurrentPage('payroll-pay-component-view')}
          onEditClick={() => setCurrentPage('payroll-pay-component-edit')}
        />;
      case 'payroll-pay-component-view':
        return <ViewPayComponentDetail 
          onBackClick={() => setCurrentPage('payroll-pay-component')}
          onEditClick={() => setCurrentPage('payroll-pay-component-edit')}
        />;
      case 'payroll-pay-component-new':
        return <CreatePayComponent 
          onSave={() => setCurrentPage('payroll-pay-component')}
          onCancel={() => setCurrentPage('payroll-pay-component')}
        />;
      case 'payroll-pay-component-edit':
        return <CreatePayComponent 
          payComponentData={{
            id: 162,
            payComponentName: 'Absent Deduction',
            payType: 'Deduction'
          }}
          onSave={() => setCurrentPage('payroll-pay-component')}
          onCancel={() => setCurrentPage('payroll-pay-component')}
        />;
      
      // Payroll - Pay Batch
      case 'payroll-pay-batch':
        return <ViewPayBatches 
          onNewClick={() => setCurrentPage('payroll-pay-batch-new')}
          onViewClick={() => setCurrentPage('payroll-pay-batch-view')}
          onEditClick={() => setCurrentPage('payroll-pay-batch-edit')}
        />;
      case 'payroll-pay-batch-view':
        return <ViewPayBatchDetail 
          onBackClick={() => setCurrentPage('payroll-pay-batch')}
          onEditClick={() => setCurrentPage('payroll-pay-batch-edit')}
        />;
      case 'payroll-pay-batch-new':
        return <CreatePayBatch 
          onSave={() => setCurrentPage('payroll-pay-batch')}
          onCancel={() => setCurrentPage('payroll-pay-batch')}
        />;
      case 'payroll-pay-batch-edit':
        return <EditPayBatch />;
      
      // Payroll - Payee Employee
      case 'payroll-payee-employee':
        return <ViewPayeeEmployees 
          onNewClick={() => setCurrentPage('payroll-payee-employee-new')}
          onViewClick={() => setCurrentPage('payroll-payee-employee-view')}
          onEditClick={() => setCurrentPage('payroll-payee-employee-edit')}
        />;
      case 'payroll-payee-employee-view':
        return <ViewPayeeEmployeeDetail 
          onBack={() => setCurrentPage('payroll-payee-employee')}
          onEdit={() => setCurrentPage('payroll-payee-employee-edit')}
        />;
      case 'payroll-payee-employee-new':
        return <CreatePayeeEmployee 
          onSave={() => setCurrentPage('payroll-payee-employee')}
          onCancel={() => setCurrentPage('payroll-payee-employee')}
        />;
      case 'payroll-payee-employee-edit':
        return <EditPayeeEmployee 
          onSave={() => setCurrentPage('payroll-payee-employee')}
          onCancel={() => setCurrentPage('payroll-payee-employee')}
        />;

      // CPF Applied Age Group Routes
      case 'payroll-cpf-applied-age-group':
        return <ViewCpfAppliedAgeGroups 
          onNewClick={() => setCurrentPage('payroll-cpf-applied-age-group-new')}
          onViewClick={() => setCurrentPage('payroll-cpf-applied-age-group-view')}
          onEditClick={() => setCurrentPage('payroll-cpf-applied-age-group-view')}
        />;
      case 'payroll-cpf-applied-age-group-view':
        return <ViewCpfAppliedAgeGroupDetail 
          onBack={() => setCurrentPage('payroll-cpf-applied-age-group')}
          onEdit={(row) => setCurrentPage('payroll-cpf-applied-age-group-edit-table')}
        />;
      case 'payroll-cpf-applied-age-group-new':
        return <CreateCpfAppliedAgeGroup 
          onSave={() => setCurrentPage('payroll-cpf-applied-age-group')}
          onCancel={() => setCurrentPage('payroll-cpf-applied-age-group')}
        />;
      case 'payroll-cpf-applied-age-group-edit-table':
        return <EditAppliedCpfTable 
          onSave={() => setCurrentPage('payroll-cpf-applied-age-group-view')}
          onCancel={() => setCurrentPage('payroll-cpf-applied-age-group-view')}
        />;

      // Community Contribution Fund Routes
      case 'payroll-community-contribution-fund':
        return <ViewCommunityContributionFunds 
          onNewClick={() => setCurrentPage('payroll-community-contribution-fund-new')}
          onViewClick={() => setCurrentPage('payroll-community-contribution-fund-view')}
          onEditClick={() => setCurrentPage('payroll-community-contribution-fund-edit')}
        />;
      case 'payroll-community-contribution-fund-view':
        return <ViewCommunityContributionFundDetail 
          onBack={() => setCurrentPage('payroll-community-contribution-fund')}
          onEdit={() => setCurrentPage('payroll-community-contribution-fund-edit')}
        />;
      case 'payroll-community-contribution-fund-new':
        return <CreateCommunityContributionFund 
          onSave={() => setCurrentPage('payroll-community-contribution-fund')}
          onCancel={() => setCurrentPage('payroll-community-contribution-fund')}
        />;
      case 'payroll-community-contribution-fund-edit':
        return <EditCommunityContributionFund 
          onSave={() => setCurrentPage('payroll-community-contribution-fund-view')}
          onCancel={() => setCurrentPage('payroll-community-contribution-fund-view')}
        />;

      // SDL Master Routes
      case 'payroll-sdl-master':
        return <ViewSdlMasters 
          onNewClick={() => setCurrentPage('payroll-sdl-master-new')}
          onViewClick={() => setCurrentPage('payroll-sdl-master-view')}
          onEditClick={() => setCurrentPage('payroll-sdl-master-edit')}
        />;
      case 'payroll-sdl-master-view':
        return <ViewSdlMasterDetail 
          onBack={() => setCurrentPage('payroll-sdl-master')}
          onEdit={() => setCurrentPage('payroll-sdl-master-edit')}
        />;
      case 'payroll-sdl-master-new':
        return <CreateSdlMaster 
          onSave={() => setCurrentPage('payroll-sdl-master')}
          onCancel={() => setCurrentPage('payroll-sdl-master')}
        />;
      case 'payroll-sdl-master-edit':
        return <EditSdlMaster 
          onSave={() => setCurrentPage('payroll-sdl-master-view')}
          onCancel={() => setCurrentPage('payroll-sdl-master-view')}
        />;

      // Loan Repayment Process Routes
      case 'payroll-loan-repayment-process':
        return <ViewLoanRepaymentProcesses 
          onNewClick={() => setCurrentPage('payroll-loan-repayment-process-new')}
          onViewClick={() => setCurrentPage('payroll-loan-repayment-process-view')}
          onEditClick={() => setCurrentPage('payroll-loan-repayment-process-edit')}
        />;
      case 'payroll-loan-repayment-process-view':
        return <ViewLoanRepaymentProcessDetail 
          onBack={() => setCurrentPage('payroll-loan-repayment-process')}
          onEdit={() => setCurrentPage('payroll-loan-repayment-process-edit')}
        />;
      case 'payroll-loan-repayment-process-new':
        return <CreateLoanRepaymentProcess 
          onSave={() => setCurrentPage('payroll-loan-repayment-process')}
          onCancel={() => setCurrentPage('payroll-loan-repayment-process')}
        />;
      case 'payroll-loan-repayment-process-edit':
        return <EditLoanRepaymentProcess 
          onSave={() => setCurrentPage('payroll-loan-repayment-process-view')}
          onCancel={() => setCurrentPage('payroll-loan-repayment-process-view')}
        />;

      // FWL Qualification Routes (HR)
      case 'hr-fwl-qualification':
        return <ViewFwlQualifications 
          onNewClick={() => setCurrentPage('hr-fwl-qualification-new')}
          onViewClick={() => setCurrentPage('hr-fwl-qualification-view')}
          onEditClick={() => setCurrentPage('hr-fwl-qualification-edit')}
        />;
      case 'hr-fwl-qualification-view':
        return <ViewFwlQualificationDetail 
          onBack={() => setCurrentPage('hr-fwl-qualification')}
          onEdit={() => setCurrentPage('hr-fwl-qualification-edit')}
        />;
      case 'hr-fwl-qualification-new':
        return <CreateFwlQualification 
          onSave={() => setCurrentPage('hr-fwl-qualification')}
          onCancel={() => setCurrentPage('hr-fwl-qualification')}
        />;
      case 'hr-fwl-qualification-edit':
        return <EditFwlQualification 
          onSave={() => setCurrentPage('hr-fwl-qualification-view')}
          onCancel={() => setCurrentPage('hr-fwl-qualification-view')}
        />;

      // FWL Qualification Routes (Payroll)
      case 'payroll-fwl-qualification':
        return <ViewFwlQualifications 
          onNewClick={() => setCurrentPage('payroll-fwl-qualification-new')}
          onViewClick={() => setCurrentPage('payroll-fwl-qualification-view')}
          onEditClick={() => setCurrentPage('payroll-fwl-qualification-edit')}
        />;
      case 'payroll-fwl-qualification-view':
        return <ViewFwlQualificationDetail 
          onBack={() => setCurrentPage('payroll-fwl-qualification')}
          onEdit={() => setCurrentPage('payroll-fwl-qualification-edit')}
        />;
      case 'payroll-fwl-qualification-new':
        return <CreateFwlQualification 
          onSave={() => setCurrentPage('payroll-fwl-qualification')}
          onCancel={() => setCurrentPage('payroll-fwl-qualification')}
        />;
      case 'payroll-fwl-qualification-edit':
        return <EditFwlQualification 
          onSave={() => setCurrentPage('payroll-fwl-qualification-view')}
          onCancel={() => setCurrentPage('payroll-fwl-qualification-view')}
        />;

      // IR8A Year Routes (Payroll)
      case 'payroll-ir8a-year':
        return <ViewIR8AYears 
          onNewClick={() => setCurrentPage('payroll-ir8a-year-new')}
          onViewClick={() => setCurrentPage('payroll-ir8a-year-view')}
          onEditClick={() => setCurrentPage('payroll-ir8a-year-edit')}
        />;
      case 'payroll-ir8a-year-view':
        return <ViewIR8AYearDetail 
          onBack={() => setCurrentPage('payroll-ir8a-year')}
          onEdit={() => setCurrentPage('payroll-ir8a-year-edit')}
        />;
      case 'payroll-ir8a-year-new':
        return <CreateIR8AYear 
          onSave={() => setCurrentPage('payroll-ir8a-year')}
          onCancel={() => setCurrentPage('payroll-ir8a-year')}
        />;
      case 'payroll-ir8a-year-edit':
        return <CreateIR8AYear 
          onSave={() => setCurrentPage('payroll-ir8a-year-view')}
          onCancel={() => setCurrentPage('payroll-ir8a-year-view')}
        />;

      // Employee PF Routes (Payroll)
      case 'payroll-employee-pf':
        return <ViewEmployeePFs 
          onNewClick={() => setCurrentPage('payroll-employee-pf-new')}
          onViewClick={() => setCurrentPage('payroll-employee-pf-view')}
          onEditClick={() => setCurrentPage('payroll-employee-pf-edit')}
        />;
      case 'payroll-employee-pf-view':
        return <ViewEmployeePFDetail 
          onBack={() => setCurrentPage('payroll-employee-pf')}
          onEdit={() => setCurrentPage('payroll-employee-pf-edit')}
        />;
      case 'payroll-employee-pf-new':
        return <CreateEmployeePF 
          onSave={() => setCurrentPage('payroll-employee-pf')}
          onCancel={() => setCurrentPage('payroll-employee-pf')}
        />;
      case 'payroll-employee-pf-edit':
        return <CreateEmployeePF 
          onSave={() => setCurrentPage('payroll-employee-pf-view')}
          onCancel={() => setCurrentPage('payroll-employee-pf-view')}
        />;

      // Pay Group Routes (Payroll)
      case 'payroll-pay-group':
        return <ViewPayGroups 
          onNewClick={() => setCurrentPage('payroll-pay-group-new')}
          onViewClick={() => setCurrentPage('payroll-pay-group-view')}
          onEditClick={() => setCurrentPage('payroll-pay-group-edit')}
        />;
      case 'payroll-pay-group-view':
        return <ViewPayGroupDetail 
          onBack={() => setCurrentPage('payroll-pay-group')}
          onEdit={() => setCurrentPage('payroll-pay-group-edit')}
        />;
      case 'payroll-pay-group-new':
        return <CreatePayGroup 
          onSave={() => setCurrentPage('payroll-pay-group')}
          onCancel={() => setCurrentPage('payroll-pay-group')}
        />;
      case 'payroll-pay-group-edit':
        return <CreatePayGroup 
          onSave={() => setCurrentPage('payroll-pay-group-view')}
          onCancel={() => setCurrentPage('payroll-pay-group-view')}
        />;

      // Retroactive Payment Routes (Payroll)
      case 'payroll-retroactive-payment':
        return <ViewRetroactivePayments 
          onNewClick={() => setCurrentPage('payroll-retroactive-payment-new')}
          onViewClick={() => setCurrentPage('payroll-retroactive-payment-view')}
          onEditClick={() => setCurrentPage('payroll-retroactive-payment-edit')}
        />;
      case 'payroll-retroactive-payment-view':
        return <ViewRetroactivePaymentDetail 
          onBack={() => setCurrentPage('payroll-retroactive-payment')}
          onEdit={() => setCurrentPage('payroll-retroactive-payment-edit')}
        />;
      case 'payroll-retroactive-payment-new':
        return <CreateRetroactivePayment 
          onSave={() => setCurrentPage('payroll-retroactive-payment')}
          onCancel={() => setCurrentPage('payroll-retroactive-payment')}
        />;
      case 'payroll-retroactive-payment-edit':
        return <CreateRetroactivePayment 
          onSave={() => setCurrentPage('payroll-retroactive-payment-view')}
          onCancel={() => setCurrentPage('payroll-retroactive-payment-view')}
        />;

      // Masters - Customer Masters
      case 'view-customer-masters':
        return <ViewCustomers 
          onNewClick={() => setCurrentPage('create-customer-master')}
          onViewClick={() => setCurrentPage('view-customer-master-detail')}
          onEditClick={() => setCurrentPage('edit-customer-master')}
        />;
      case 'view-customer-master-detail':
        return <ViewCustomerDetail 
          onBack={() => setCurrentPage('view-customer-masters')}
          onEdit={() => setCurrentPage('edit-customer-master')}
        />;
      case 'create-customer-master':
        return <CreateCustomer 
          isEdit={false}
          onSave={() => setCurrentPage('view-customer-masters')}
          onCancel={() => setCurrentPage('view-customer-masters')}
        />;
      case 'edit-customer-master':
        return <CreateCustomer 
          isEdit={true}
          onSave={() => setCurrentPage('view-customer-master-detail')}
          onCancel={() => setCurrentPage('view-customer-master-detail')}
        />;

      // Masters - Vendor Masters
      case 'view-vendor-masters':
        return <ViewVendors 
          onNewClick={() => setCurrentPage('create-vendor-master')}
          onViewClick={() => setCurrentPage('view-vendor-master-detail')}
          onEditClick={() => setCurrentPage('edit-vendor-master')}
        />;
      case 'view-vendor-master-detail':
        return <ViewVendorDetail 
          onBack={() => setCurrentPage('view-vendor-masters')}
          onEdit={() => setCurrentPage('edit-vendor-master')}
        />;
      case 'create-vendor-master':
        return <CreateVendor 
          isEdit={false}
          onSave={() => setCurrentPage('view-vendor-masters')}
          onCancel={() => setCurrentPage('view-vendor-masters')}
        />;
      case 'edit-vendor-master':
        return <CreateVendor 
          isEdit={true}
          onSave={() => setCurrentPage('view-vendor-master-detail')}
          onCancel={() => setCurrentPage('view-vendor-master-detail')}
        />;
      
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
      <TopBar 
        collapsed={collapsed} 
        setCollapsed={setCollapsed}
        setCurrentPage={setCurrentPage}
      />
      <div className="main-content">
        {renderPage()}
        <div style={{
          marginTop: '3rem',
          paddingTop: '1.5rem',
          paddingBottom: '1rem',
          borderTop: '1px solid #e5e7eb',
          textAlign: 'center',
          fontSize: '0.875rem',
          color: '#6b7280'
        }}>
          © 2025 All Rights Reserved @ Infocom IT Solutions Pte Ltd
        </div>
      </div>
    </div>
  );
}

export default App;
