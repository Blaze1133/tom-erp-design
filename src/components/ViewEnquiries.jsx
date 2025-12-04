import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewEnquiries = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Opportunity Status');

  const [enquiries] = useState([
    {
      id: 1,
      documentNumber: 'E22TOM80024',
      title: 'Test Enquiry',
      customer: '7 Test Customer',
      salesRep: '',
      date: '15/7/2022',
      expectedClose: '15/7/2022',
      enquiryStatus: 'Proposal',
      probability: '50.0%',
      forecastType: 'Omitted',
      projectedTotal: 1000.00,
      approvalStatus: 'Submit For Approval'
    },
    {
      id: 2,
      documentNumber: 'E22TOM80026',
      title: 'Potential Supply',
      customer: 'Keppel Fels',
      salesRep: 'T20029 Kumarasamy Nadhavan Subbiah',
      date: '19/8/2022',
      expectedClose: '19/8/2022',
      enquiryStatus: 'Proposal',
      probability: '50.0%',
      forecastType: 'Most Likely',
      projectedTotal: 1948.36,
      approvalStatus: 'Submit For Approval'
    },
    {
      id: 3,
      documentNumber: 'E22TOM80002',
      title: 'Fabrication and Install',
      customer: '400 Keppel Fels Fabrication & Installation',
      salesRep: 'T20029 Kumarasamy Nadhavan Subbiah',
      date: '19/8/2022',
      expectedClose: '19/8/2022',
      enquiryStatus: 'In Discussion',
      probability: '50.0%',
      forecastType: 'Omitted',
      projectedTotal: 32800.00,
      approvalStatus: 'Submit For Approval'
    },
    {
      id: 4,
      documentNumber: 'E22TOM80028',
      title: 'Machining Works',
      customer: '702 Seamax Offshore Services (S) Pte Ltd',
      salesRep: 'TSV025 Sasaju Venkateswarlu Rao',
      date: '24/8/2022',
      expectedClose: '24/8/2022',
      enquiryStatus: 'Proposal',
      probability: '50.0%',
      forecastType: 'Most Likely',
      projectedTotal: 1200.00,
      approvalStatus: 'Submit For Approval'
    },
    {
      id: 5,
      documentNumber: 'E22TOM80029',
      title: 'Machining Works',
      customer: '702 Seamax Offshore Services (S) Pte Ltd',
      salesRep: 'TSV025 Sasaju Venkateswarlu Rao',
      date: '24/8/2022',
      expectedClose: '24/8/2022',
      enquiryStatus: 'Proposal',
      probability: '50.0%',
      forecastType: 'Most Likely',
      projectedTotal: 1000.00,
      approvalStatus: 'Submit For Approval'
    },
    {
      id: 6,
      documentNumber: 'E22TOM80030',
      title: 'Room Cool Env - RL, Hin Retainer',
      customer: '702 Seamax Offshore Services (S) Pte Ltd',
      salesRep: 'TSV025 Sasaju Venkateswarlu Rao',
      date: '1/9/2022',
      expectedClose: '1/9/2022',
      enquiryStatus: 'Proposal',
      probability: '50.0%',
      forecastType: 'Omitted',
      projectedTotal: 136.00,
      approvalStatus: 'Submit For Approval'
    },
    {
      id: 7,
      documentNumber: 'E22TOM80031',
      title: '',
      customer: '898 Norton Air Solutions Pte Ltd',
      salesRep: '',
      date: '7/3/2023',
      expectedClose: '7/3/2023',
      enquiryStatus: 'In Discussion',
      probability: '20.0%',
      forecastType: 'Omitted',
      projectedTotal: 1275.00,
      approvalStatus: 'Submit For Approval'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewEnquiry = (enquiry) => {
    if (setCurrentPage) {
      setCurrentPage('view-enquiry-detail');
    }
  };

  const handleEditEnquiry = (enquiry) => {
    if (setCurrentPage) {
      setCurrentPage('edit-enquiry');
    }
  };

  const handleNewEnquiry = () => {
    if (setCurrentPage) {
      setCurrentPage('create-enquiries');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-file-alt"></i>
          <h1>Enquiries</h1>
        </div>
        <div className="list-actions">
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
            value={viewFilter}
            onChange={(e) => setViewFilter(e.target.value)}
          >
            <option value="Opportunity Status">Opportunity Status</option>
            <option value="all">All Enquiries</option>
            <option value="proposal">Proposal</option>
            <option value="discussion">In Discussion</option>
          </select>
        </div>
        <button className="btn-new-transaction" onClick={handleNewEnquiry}>
          <i className="fas fa-plus"></i> New Enquiry
        </button>
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
            <option>7/1/2022 — 31/1/2022</option>
            <option>Expected Close</option>
            <option>Date Created</option>
            <option>Customer Name</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {enquiries.length}
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th></th>
              <th>EDIT | VIEW</th>
              <th>TITLE</th>
              <th>DOCUMENT NUMBER</th>
              <th>CUSTOMER</th>
              <th>SALES REP</th>
              <th>DATE</th>
              <th>EXPECTED CLOSE ▲</th>
              <th>ENQUIRY STATUS</th>
              <th>PROBABILITY</th>
              <th>FORECAST TYPE</th>
              <th>PROJECTED TOTAL</th>
              <th>APPROVAL STATUS</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry) => (
              <tr key={enquiry.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditEnquiry(enquiry)}
                    style={{ marginRight: '4px' }}
                  >
                    Edit
                  </button>
                  <span style={{ color: '#999' }}>|</span>
                  <button 
                    className="view-link"
                    onClick={() => handleViewEnquiry(enquiry)}
                    style={{ marginLeft: '4px' }}
                  >
                    View
                  </button>
                </td>
                <td>{enquiry.title}</td>
                <td className="doc-number">{enquiry.documentNumber}</td>
                <td>{enquiry.customer}</td>
                <td>{enquiry.salesRep}</td>
                <td>{enquiry.date}</td>
                <td>{enquiry.expectedClose}</td>
                <td>
                  <span className="status-badge status-proposal">{enquiry.enquiryStatus}</span>
                </td>
                <td>{enquiry.probability}</td>
                <td>{enquiry.forecastType}</td>
                <td className="amount">{enquiry.projectedTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                <td className="approval-status">{enquiry.approvalStatus}</td>
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

export default ViewEnquiries;
