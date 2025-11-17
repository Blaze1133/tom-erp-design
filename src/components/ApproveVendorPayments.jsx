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
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-check-circle"></i>
          <h1>Approve Vendor Payment</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">More</button>
        </div>
      </div>

      {/* View and Action Dropdowns */}
      <div style={{ padding: '1.5rem 2rem', background: '#fff', borderBottom: '1px solid #e0e0e0' }}>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
          <div style={{ flex: '0 0 400px' }}>
            <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>VIEW</label>
            <select 
              className="form-control"
              value={selectedView}
              onChange={(e) => setSelectedView(e.target.value)}
              style={{ fontSize: '13px' }}
            >
              <option>Vendor Payments for Approval</option>
              <option>TOM Vendor Payments for Approval</option>
            </select>
          </div>
          <div style={{ flex: '0 0 400px' }}>
            <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>ACTION</label>
            <select 
              className="form-control"
              value={selectedAction}
              onChange={(e) => handleAction(e.target.value)}
              style={{ fontSize: '13px' }}
            >
              <option value="">Select Action...</option>
              <option value="approve">Pending for CEO Approval → Approve (Vendor Bill Payment Process)</option>
              <option value="reject">Pending for CEO Approval → Reject (Vendor Bill Payment Process)</option>
              <option value="submit">Submit Vendor Bill → Submit Approval (Vendor Bill Payment Process)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Customize bar */}
      <div style={{ padding: '15px 20px', background: '#f8f9fa', borderBottom: '1px solid #e0e0e0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button className="btn-customize">Customize</button>
          <div style={{ fontSize: '13px', color: '#666' }}>
            0 records
          </div>
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
