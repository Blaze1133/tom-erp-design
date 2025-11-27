import React, { useState } from 'react';
import './Enquiries.css';
import Toast from './Toast';

const ViewCRMQuotations = ({ onNewClick, onViewClick, onEditClick }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Sample quotation data
  const [quotations] = useState([
    {
      id: 'QT-001',
      quotationNumber: 'QUO-2024-001',
      opportunityId: 'OP-001',
      opportunityName: 'FPSO Module Fabrication Project',
      companyName: 'Ocean Tech Industries',
      contactPerson: 'Michael Wong',
      totalAmount: 2500000,
      status: 'Sent',
      validUntil: '2024-12-15',
      createdDate: '2024-11-20',
      sentDate: '2024-11-22',
      assignedTo: 'David Chen',
      revision: 1,
      items: [
        { description: 'Module Fabrication', quantity: 1, unitPrice: 1800000, total: 1800000 },
        { description: 'Piping Systems', quantity: 1, unitPrice: 450000, total: 450000 },
        { description: 'Electrical Systems', quantity: 1, unitPrice: 250000, total: 250000 }
      ]
    },
    {
      id: 'QT-002',
      quotationNumber: 'QUO-2024-002',
      opportunityId: 'OP-002',
      opportunityName: 'Offshore Platform Module',
      companyName: 'Maritime Solutions Pte Ltd',
      contactPerson: 'John Tan',
      totalAmount: 1800000,
      status: 'Under Review',
      validUntil: '2024-12-30',
      createdDate: '2024-11-18',
      sentDate: '2024-11-20',
      assignedTo: 'Sarah Lee',
      revision: 2,
      items: [
        { description: 'Platform Module', quantity: 1, unitPrice: 1200000, total: 1200000 },
        { description: 'MEP Systems', quantity: 1, unitPrice: 600000, total: 600000 }
      ]
    },
    {
      id: 'QT-003',
      quotationNumber: 'QUO-2024-003',
      opportunityId: 'OP-003',
      opportunityName: 'Hull Block Assembly Contract',
      companyName: 'Shipyard Engineering Co',
      contactPerson: 'Lisa Kumar',
      totalAmount: 3200000,
      status: 'Accepted',
      validUntil: '2024-11-28',
      createdDate: '2024-10-25',
      sentDate: '2024-10-28',
      assignedTo: 'Sarah Lee',
      revision: 1,
      items: [
        { description: 'Hull Block Assembly', quantity: 4, unitPrice: 650000, total: 2600000 },
        { description: 'Welding & Finishing', quantity: 1, unitPrice: 400000, total: 400000 },
        { description: 'Quality Inspection', quantity: 1, unitPrice: 200000, total: 200000 }
      ]
    },
    {
      id: 'QT-004',
      quotationNumber: 'QUO-2024-004',
      opportunityId: 'OP-004',
      opportunityName: 'Subsea Module Development',
      companyName: 'Offshore Dynamics Pte',
      contactPerson: 'Amanda Ng',
      totalAmount: 950000,
      status: 'Draft',
      validUntil: '2025-01-15',
      createdDate: '2024-11-15',
      sentDate: null,
      assignedTo: 'Michael Tan',
      revision: 1,
      items: [
        { description: 'Subsea Module', quantity: 1, unitPrice: 750000, total: 750000 },
        { description: 'Pressure Testing', quantity: 1, unitPrice: 200000, total: 200000 }
      ]
    },
    {
      id: 'QT-005',
      quotationNumber: 'QUO-2024-005',
      opportunityId: 'OP-005',
      opportunityName: 'Process Module Upgrade',
      companyName: 'Petrochemical Systems Ltd',
      contactPerson: 'Robert Lim',
      totalAmount: 1200000,
      status: 'Rejected',
      validUntil: '2024-11-30',
      createdDate: '2024-10-20',
      sentDate: '2024-10-22',
      assignedTo: 'David Chen',
      revision: 3,
      items: [
        { description: 'Process Module Upgrade', quantity: 1, unitPrice: 900000, total: 900000 },
        { description: 'Control Systems', quantity: 1, unitPrice: 300000, total: 300000 }
      ]
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Draft': return '#f5f5f5';
      case 'Sent': return '#e3f2fd';
      case 'Under Review': return '#fff3e0';
      case 'Accepted': return '#e8f5e9';
      case 'Rejected': return '#ffebee';
      case 'Expired': return '#fce4ec';
      default: return '#f5f5f5';
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Draft': return 'badge badge-secondary';
      case 'Sent': return 'badge badge-primary';
      case 'Under Review': return 'badge badge-warning';
      case 'Accepted': return 'badge badge-success';
      case 'Rejected': return 'badge badge-danger';
      case 'Expired': return 'badge badge-warning';
      default: return 'badge badge-secondary';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-SG', {
      style: 'currency',
      currency: 'SGD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const filteredQuotations = quotations.filter(quote => {
    const matchesSearch = quote.quotationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quote.opportunityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quote.companyName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || quote.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSendQuotation = (quoteId) => {
    setToastMessage('Quotation sent successfully!');
    setToastType('success');
    setShowToast(true);
  };

  const handleConvertToProject = (quoteId) => {
    setToastMessage('Quotation converted to project successfully!');
    setToastType('success');
    setShowToast(true);
  };

  const handleCreateRevision = (quoteId) => {
    setToastMessage('New revision created successfully!');
    setToastType('success');
    setShowToast(true);
  };

  const totalValue = filteredQuotations.reduce((sum, quote) => sum + quote.totalAmount, 0);
  const acceptedValue = filteredQuotations
    .filter(quote => quote.status === 'Accepted')
    .reduce((sum, quote) => sum + quote.totalAmount, 0);

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-file-invoice-dollar"></i>
          <h1>Quotation Management</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>VIEW</label>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="form-control"
            style={{ width: '250px' }}
          >
            <option value="all">All Statuses</option>
            <option value="Draft">Draft</option>
            <option value="Sent">Sent</option>
            <option value="Under Review">Under Review</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
            <option value="Expired">Expired</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={onNewClick}>
            <i className="fas fa-plus"></i>
            New Quotation
          </button>
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button className="btn-icon" title="Edit View">
            <i className="fas fa-edit"></i>
            <span>EDIT</span>
          </button>
          <button className="btn-icon" title="Delete">
            <i className="fas fa-times"></i>
          </button>
          <button className="btn-icon" title="Export">
            <i className="fas fa-file-export"></i>
          </button>
          <button className="btn-icon" title="Print">
            <i className="fas fa-print"></i>
          </button>
        </div>
        <div className="filter-right-group">
          <div className="quick-sort">
            <label>QUICK SORT</label>
            <select className="form-control">
              <option>All Quotations</option>
              <option>This Month</option>
              <option>Pending</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {filteredQuotations.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '8%' }}>EDIT | VIEW</th>
              <th style={{ width: '12%' }}>QUOTATION NO.</th>
              <th style={{ width: '20%' }}>OPPORTUNITY</th>
              <th style={{ width: '15%' }}>COMPANY</th>
              <th style={{ width: '10%' }}>TOTAL AMOUNT</th>
              <th style={{ width: '8%' }}>STATUS</th>
              <th style={{ width: '10%' }}>VALID UNTIL</th>
              <th style={{ width: '6%' }}>REV</th>
              <th style={{ width: '11%' }}>ASSIGNED TO</th>
            </tr>
          </thead>
          <tbody>
            {filteredQuotations.map((quote) => (
              <tr key={quote.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => onEditClick(quote.id)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => onViewClick(quote.id)}
                  >
                    View
                  </button>
                </td>
                <td>{quote.quotationNumber}</td>
                <td>{quote.opportunityName}</td>
                <td>{quote.companyName}</td>
                <td className="amount">{formatCurrency(quote.totalAmount)}</td>
                <td>
                  <span 
                    className={getStatusBadgeClass(quote.status)}
                    style={{ 
                      backgroundColor: getStatusColor(quote.status),
                      color: '#333',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      fontSize: '13px',
                      fontWeight: '500'
                    }}
                  >
                    {quote.status}
                  </span>
                </td>
                <td>{quote.validUntil}</td>
                <td>{quote.revision}</td>
                <td>{quote.assignedTo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default ViewCRMQuotations;
