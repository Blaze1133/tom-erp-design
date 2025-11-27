import React, { useState } from 'react';
import './Enquiries.css';
import Toast from './Toast';

const ViewLeads = ({ onNewClick, onViewClick, onEditClick }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [subsidiaryFilter, setSubsidiaryFilter] = useState('all');

  // Sample lead data
  const [leads] = useState([
    {
      id: 'LD-001',
      companyName: 'Maritime Solutions Pte Ltd',
      contactPerson: 'John Tan',
      phone: '+65 9123 4567',
      email: 'john.tan@maritime.com.sg',
      industry: 'Marine Engineering',
      interest: 'Offshore Platform Module',
      status: 'New',
      source: 'Website Form',
      assignedTo: 'Sarah Lee',
      subsidiary: 'TOM Offshore Marine Engineering Pte Ltd',
      createdDate: '2024-11-25',
      lastContact: '2024-11-25'
    },
    {
      id: 'LD-002',
      companyName: 'Ocean Tech Industries',
      contactPerson: 'Michael Wong',
      phone: '+65 8765 4321',
      email: 'm.wong@oceantech.sg',
      industry: 'Oil & Gas',
      interest: 'FPSO Module Fabrication',
      status: 'Contacted',
      source: 'Trade Show',
      assignedTo: 'David Chen',
      subsidiary: 'TOM Shipyard Pte Ltd',
      createdDate: '2024-11-20',
      lastContact: '2024-11-23'
    },
    {
      id: 'LD-003',
      companyName: 'Shipyard Engineering Co',
      contactPerson: 'Lisa Kumar',
      phone: '+65 9876 5432',
      email: 'lisa.k@shipyard.com',
      industry: 'Shipbuilding',
      interest: 'Hull Block Assembly',
      status: 'Qualified',
      source: 'Referral',
      assignedTo: 'Sarah Lee',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
      createdDate: '2024-11-15',
      lastContact: '2024-11-24'
    },
    {
      id: 'LD-004',
      companyName: 'Petrochemical Systems Ltd',
      contactPerson: 'Robert Lim',
      phone: '+65 8123 9876',
      email: 'r.lim@petrochem.sg',
      industry: 'Petrochemical',
      interest: 'Process Module',
      status: 'Converted',
      source: 'Email Campaign',
      assignedTo: 'David Chen',
      subsidiary: 'TOM Engineering & Trading Pte Ltd',
      createdDate: '2024-11-10',
      lastContact: '2024-11-22'
    },
    {
      id: 'LD-005',
      companyName: 'Offshore Dynamics Pte',
      contactPerson: 'Amanda Ng',
      phone: '+65 9234 5678',
      email: 'amanda@offshore.sg',
      industry: 'Offshore Engineering',
      interest: 'Subsea Module',
      status: 'Disqualified',
      source: 'Cold Call',
      assignedTo: 'Sarah Lee',
      subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
      createdDate: '2024-11-08',
      lastContact: '2024-11-18'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'New': return '#e3f2fd';
      case 'Contacted': return '#fff3e0';
      case 'Qualified': return '#e8f5e9';
      case 'Converted': return '#e0f2f1';
      case 'Disqualified': return '#ffebee';
      default: return '#f5f5f5';
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'New': return 'badge badge-primary';
      case 'Contacted': return 'badge badge-warning';
      case 'Qualified': return 'badge badge-success';
      case 'Converted': return 'badge badge-info';
      case 'Disqualified': return 'badge badge-danger';
      default: return 'badge badge-secondary';
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    const matchesSubsidiary = subsidiaryFilter === 'all' || lead.subsidiary === subsidiaryFilter;
    return matchesSearch && matchesStatus && matchesSubsidiary;
  });

  const handleConvertToOpportunity = (leadId) => {
    setToastMessage('Lead converted to opportunity successfully!');
    setToastType('success');
    setShowToast(true);
  };

  const handleAssignLead = (leadId) => {
    setToastMessage('Lead assigned successfully!');
    setToastType('success');
    setShowToast(true);
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-user-plus"></i>
          <h1>Lead Management</h1>
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
            style={{ width: '200px' }}
          >
            <option value="all">All Statuses</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Qualified">Qualified</option>
            <option value="Converted">Converted</option>
            <option value="Disqualified">Disqualified</option>
          </select>
        </div>
        <div className="view-filter">
          <label>SUBSIDIARY</label>
          <select 
            value={subsidiaryFilter}
            onChange={(e) => setSubsidiaryFilter(e.target.value)}
            className="form-control"
            style={{ width: '300px' }}
          >
            <option value="all">All Subsidiaries</option>
            <option value="Tech Onshore MEP Prefabricators Pte Ltd">Tech Onshore MEP Prefabricators Pte Ltd</option>
            <option value="Tech Marine Offshore (S) Pte Ltd">Tech Marine Offshore (S) Pte Ltd</option>
            <option value="TOM Offshore Marine Engineering Pte Ltd">TOM Offshore Marine Engineering Pte Ltd</option>
            <option value="TOM Shipyard Pte Ltd">TOM Shipyard Pte Ltd</option>
            <option value="TOM Engineering & Trading Pte Ltd">TOM Engineering & Trading Pte Ltd</option>
            <option value="TOM Industrial Services Pte Ltd">TOM Industrial Services Pte Ltd</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={onNewClick}>
            <i className="fas fa-plus"></i>
            New Lead
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
              <option>All Leads</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {filteredLeads.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '7%' }}>EDIT | VIEW</th>
              <th style={{ width: '7%' }}>LEAD ID</th>
              <th style={{ width: '12%' }}>COMPANY NAME</th>
              <th style={{ width: '10%' }}>CONTACT PERSON</th>
              <th style={{ width: '9%' }}>PHONE</th>
              <th style={{ width: '12%' }}>EMAIL</th>
              <th style={{ width: '8%' }}>INDUSTRY</th>
              <th style={{ width: '7%' }}>STATUS</th>
              <th style={{ width: '7%' }}>SOURCE</th>
              <th style={{ width: '8%' }}>ASSIGNED TO</th>
              <th style={{ width: '13%' }}>SUBSIDIARY</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead) => (
              <tr key={lead.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => onEditClick(lead.id)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => onViewClick(lead.id)}
                  >
                    View
                  </button>
                </td>
                <td>{lead.id}</td>
                <td>{lead.companyName}</td>
                <td>{lead.contactPerson}</td>
                <td>{lead.phone}</td>
                <td>{lead.email}</td>
                <td>{lead.industry}</td>
                <td>
                  <span 
                    className={getStatusBadgeClass(lead.status)}
                    style={{ 
                      backgroundColor: getStatusColor(lead.status),
                      color: '#333',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      fontSize: '13px',
                      fontWeight: '500'
                    }}
                  >
                    {lead.status}
                  </span>
                </td>
                <td>{lead.source}</td>
                <td>{lead.assignedTo}</td>
                <td>{lead.subsidiary}</td>
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

export default ViewLeads;
