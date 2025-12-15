import React, { useState } from 'react';
import './Enquiries.css';
import Toast from './Toast';

const ViewOpportunities = ({ onNewClick, onViewClick, onEditClick }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [searchTerm, setSearchTerm] = useState('');
  const [stageFilter, setStageFilter] = useState('all');

  // Sample opportunity data
  const [opportunities] = useState([
    {
      id: 'OP-001',
      name: 'FPSO Module Fabrication Project',
      companyName: 'Ocean Tech Industries',
      contactPerson: 'Michael Wong',
      value: 2500000,
      probability: 75,
      stage: 'Proposal',
      expectedCloseDate: '2024-12-15',
      assignedTo: 'David Chen',
      source: 'Converted Lead',
      createdDate: '2024-11-20',
      lastActivity: '2024-11-24',
      description: 'Large scale FPSO module fabrication including piping and electrical systems'
    },
    {
      id: 'OP-002',
      name: 'Offshore Platform Module',
      companyName: 'Maritime Solutions Pte Ltd',
      contactPerson: 'John Tan',
      value: 1800000,
      probability: 60,
      stage: 'Negotiation',
      expectedCloseDate: '2024-12-30',
      assignedTo: 'Sarah Lee',
      source: 'Converted Lead',
      createdDate: '2024-11-15',
      lastActivity: '2024-11-25',
      description: 'Offshore platform module with advanced MEP systems'
    },
    {
      id: 'OP-003',
      name: 'Hull Block Assembly Contract',
      companyName: 'Shipyard Engineering Co',
      contactPerson: 'Lisa Kumar',
      value: 3200000,
      probability: 85,
      stage: 'Closed Won',
      expectedCloseDate: '2024-11-28',
      assignedTo: 'Sarah Lee',
      source: 'Converted Lead',
      createdDate: '2024-10-20',
      lastActivity: '2024-11-22',
      description: 'Multi-phase hull block assembly project for new vessel construction'
    },
    {
      id: 'OP-004',
      name: 'Subsea Module Development',
      companyName: 'Offshore Dynamics Pte',
      contactPerson: 'Amanda Ng',
      value: 950000,
      probability: 25,
      stage: 'Qualification',
      expectedCloseDate: '2025-01-15',
      assignedTo: 'Michael Tan',
      source: 'Direct Inquiry',
      createdDate: '2024-11-10',
      lastActivity: '2024-11-20',
      description: 'Specialized subsea module for deep water operations'
    },
    {
      id: 'OP-005',
      name: 'Process Module Upgrade',
      companyName: 'Petrochemical Systems Ltd',
      contactPerson: 'Robert Lim',
      value: 1200000,
      probability: 40,
      stage: 'Closed Lost',
      expectedCloseDate: '2024-11-30',
      assignedTo: 'David Chen',
      source: 'Converted Lead',
      createdDate: '2024-10-15',
      lastActivity: '2024-11-18',
      description: 'Petrochemical process module modernization project'
    }
  ]);

  const getStageColor = (stage) => {
    switch (stage) {
      case 'Qualification': return '#f5f5f5';
      case 'Proposal': return '#e3f2fd';
      case 'Negotiation': return '#fff3e0';
      case 'Closed Won': return '#e8f5e9';
      case 'Closed Lost': return '#ffebee';
      default: return '#f5f5f5';
    }
  };

  const getStageBadgeClass = (stage) => {
    switch (stage) {
      case 'Qualification': return 'badge badge-secondary';
      case 'Proposal': return 'badge badge-primary';
      case 'Negotiation': return 'badge badge-warning';
      case 'Closed Won': return 'badge badge-success';
      case 'Closed Lost': return 'badge badge-danger';
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

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = opp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.contactPerson.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStage = stageFilter === 'all' || opp.stage === stageFilter;
    return matchesSearch && matchesStage;
  });

  const handleCreateQuotation = (oppId) => {
    setToastMessage('Quotation created successfully!');
    setToastType('success');
    setShowToast(true);
  };

  const handleUpdateStage = (oppId) => {
    setToastMessage('Opportunity stage updated successfully!');
    setToastType('success');
    setShowToast(true);
  };

  const totalValue = filteredOpportunities.reduce((sum, opp) => sum + opp.value, 0);
  const weightedValue = filteredOpportunities.reduce((sum, opp) => sum + (opp.value * opp.probability / 100), 0);

  return (
    <div className="enquiries-list">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-bullseye" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Opportunity Management</h1>
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
            value={stageFilter}
            onChange={(e) => setStageFilter(e.target.value)}
            className="form-control"
          >
            <option value="all">All Stages</option>
            <option value="Qualification">Qualification</option>
            <option value="Proposal">Proposal</option>
            <option value="Negotiation">Negotiation</option>
            <option value="Closed Won">Closed Won</option>
            <option value="Closed Lost">Closed Lost</option>
          </select>
        </div>
        <button className="btn-new-transaction" onClick={onNewClick}>
          <i className="fas fa-plus"></i> New Opportunity
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
            <option>All Opportunities</option>
            <option>This Quarter</option>
            <option>High Value</option>
            <option>Expected Close Date</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {filteredOpportunities.length}
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th></th>
              <th>EDIT | VIEW</th>
              <th>*</th>
              <th>OPP ID</th>
              <th>OPPORTUNITY NAME</th>
              <th>COMPANY</th>
              <th>CONTACT PERSON</th>
              <th>VALUE</th>
              <th>PROBABILITY</th>
              <th>STAGE</th>
              <th>EXPECTED CLOSE</th>
              <th>ASSIGNED TO</th>
            </tr>
          </thead>
          <tbody>
            {filteredOpportunities.map((opp) => (
              <tr key={opp.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button 
                      className="view-link"
                      onClick={() => onEditClick(opp.id)}
                    >
                      Edit
                    </button>
                    <span style={{ color: '#999' }}>|</span>
                    <button 
                      className="view-link"
                      onClick={() => onViewClick(opp.id)}
                    >
                      View
                    </button>
                  </div>
                </td>
                <td>
                  {opp.stage === 'Closed Won' ? (
                    <span className="status-badge" style={{ background: '#4caf50', color: 'white' }}>WON</span>
                  ) : opp.stage === 'Closed Lost' ? (
                    <span className="status-badge" style={{ background: '#f44336', color: 'white' }}>LOST</span>
                  ) : (
                    <span>*</span>
                  )}
                </td>
                <td className="doc-number">{opp.id}</td>
                <td>{opp.name}</td>
                <td>{opp.companyName}</td>
                <td>{opp.contactPerson}</td>
                <td className="amount">{formatCurrency(opp.value)}</td>
                <td>{opp.probability}%</td>
                <td>
                  <span 
                    className={getStageBadgeClass(opp.stage)}
                    style={{ 
                      backgroundColor: getStageColor(opp.stage),
                      color: '#333',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      fontSize: '13px',
                      fontWeight: '500'
                    }}
                  >
                    {opp.stage}
                  </span>
                </td>
                <td>{opp.expectedCloseDate}</td>
                <td>{opp.assignedTo}</td>
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

export default ViewOpportunities;
