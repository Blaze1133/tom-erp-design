import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ApproveVendorPayments = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [selectedView, setSelectedView] = useState('Vendor Payments for Approval');
  const [selectedAction, setSelectedAction] = useState('');

  const [payments] = useState([
    // Sample data - empty for now as per "No records to show"
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleAction = (action) => {
    setSelectedAction(action);
    showToast(`Action selected: ${action}`, 'info');
  };

  return (
    <div className="enquiries-list">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-check-circle" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Approve Vendor Payment</h1>
        </div>
        <div className="page-actions">
          <button className="btn-view-option active">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>VIEW:</label>
          <select 
            className="form-control"
            value={selectedView}
            onChange={(e) => setSelectedView(e.target.value)}
          >
            <option>Vendor Payments for Approval</option>
            <option>TOM Vendor Payments for Approval</option>
          </select>
        </div>
        <div className="view-filter" style={{ marginLeft: '1rem' }}>
          <label>ACTION:</label>
          <select 
            className="form-control"
            value={selectedAction}
            onChange={(e) => handleAction(e.target.value)}
            style={{ minWidth: '400px' }}
          >
            <option value="">Select Action...</option>
            <option value="approve">Pending for CEO Approval → Approve (Vendor Bill Payment Process)</option>
            <option value="reject">Pending for CEO Approval → Reject (Vendor Bill Payment Process)</option>
            <option value="submit">Submit Vendor Bill → Submit Approval (Vendor Bill Payment Process)</option>
          </select>
        </div>
      </div>

      <div className="list-filters">
        <div className="list-toolbar">
          <button className="toolbar-btn" title="Edit">
            <i className="fas fa-edit"></i> EDIT
          </button>
          <button className="toolbar-btn" title="Delete">
            <i className="fas fa-times"></i>
          </button>
          <button className="toolbar-btn" title="Attach">
            <i className="fas fa-paperclip"></i>
          </button>
          <button className="toolbar-btn" title="Print">
            <i className="fas fa-print"></i>
          </button>
        </div>
        <div className="list-sort">
          <label>QUICK SORT:</label>
          <select className="form-control">
            <option>Date</option>
            <option>Document Number</option>
            <option>Name</option>
            <option>Amount</option>
            <option>Status</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {payments.length}
        </div>
      </div>

      {/* Table */}
      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '40px' }}>SELECT</th>
              <th style={{ width: '100px' }}>DATE</th>
              <th style={{ width: '140px' }}>DOCUMENT NUMBER</th>
              <th style={{ width: '180px' }}>NAME</th>
              <th style={{ width: '150px' }}>MEMO</th>
              <th style={{ width: '100px' }}>STATUS</th>
              <th style={{ width: '80px' }}>CURRENCY</th>
              <th style={{ width: '120px', textAlign: 'right' }}>AMOUNT</th>
              <th style={{ width: '120px' }}>PURCHASE TYPE</th>
              <th style={{ width: '150px' }}>MATERIAL SPECIFICATION</th>
              <th style={{ width: '120px' }}>APPROVAL STATUS</th>
              <th style={{ width: '140px' }}>REF POSTING PAYBATCH</th>
              <th style={{ width: '120px' }}>REF PAYBATCH</th>
              <th style={{ width: '140px' }}>REF. POSTING PAYBATCH</th>
              <th style={{ width: '100px' }}>REJECTED BY</th>
              <th style={{ width: '140px' }}>FINAL APPROVED BY</th>
              <th style={{ width: '180px' }}>PAY TAGGED TO CALENDAR EMPLOYEE</th>
              <th style={{ width: '120px' }}>PAYMENT MODE</th>
              <th style={{ width: '200px' }}>COMPANY ADDRESS</th>
              <th style={{ width: '80px' }}>TYPE</th>
              <th style={{ width: '120px' }}>REF PO NUMBER</th>
              <th style={{ width: '120px' }}>REF ORDER NO</th>
              <th style={{ width: '180px' }}>APPROVAL REJECTION REMARKS</th>
              <th style={{ width: '100px' }}>ISSUED DATE</th>
              <th style={{ width: '100px' }}>RECEIVED DATE</th>
              <th style={{ width: '140px' }}>PROJECT MANAGER</th>
              <th style={{ width: '120px' }}>STORE PERSON</th>
              <th style={{ width: '120px' }}>REF PR NO</th>
            </tr>
          </thead>
          <tbody>
            {payments.length === 0 ? (
              <tr>
                <td colSpan="28" style={{ textAlign: 'center', padding: '3rem', color: '#999', fontSize: '0.875rem' }}>
                  No records to show.
                </td>
              </tr>
            ) : (
              payments.map((payment) => (
                <tr key={payment.id}>
                  <td><input type="checkbox" /></td>
                  <td>{payment.date}</td>
                  <td className="doc-number">{payment.documentNumber}</td>
                  <td>{payment.name}</td>
                  <td>{payment.memo}</td>
                  <td>{payment.status}</td>
                  <td>{payment.currency}</td>
                  <td className="amount" style={{ textAlign: 'right' }}>{payment.amount}</td>
                  <td>{payment.purchaseType}</td>
                  <td>{payment.materialSpecification}</td>
                  <td>{payment.approvalStatus}</td>
                  <td>{payment.refPostingPaybatch}</td>
                  <td>{payment.refPaybatch}</td>
                  <td>{payment.refPostingPaybatch2}</td>
                  <td>{payment.rejectedBy}</td>
                  <td>{payment.finalApprovedBy}</td>
                  <td>{payment.payTaggedToCalendarEmployee}</td>
                  <td>{payment.paymentMode}</td>
                  <td>{payment.companyAddress}</td>
                  <td>{payment.type}</td>
                  <td>{payment.refPoNumber}</td>
                  <td>{payment.refOrderNo}</td>
                  <td>{payment.approvalRejectionRemarks}</td>
                  <td>{payment.issuedDate}</td>
                  <td>{payment.receivedDate}</td>
                  <td>{payment.projectManager}</td>
                  <td>{payment.storePerson}</td>
                  <td>{payment.refPrNo}</td>
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

export default ApproveVendorPayments;
