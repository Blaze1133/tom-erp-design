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
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-bullseye"></i>
          <h1>Opportunity Management</h1>
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
            value={stageFilter}
            onChange={(e) => setStageFilter(e.target.value)}
            className="form-control"
            style={{ width: '250px' }}
          >
            <option value="all">All Stages</option>
            <option value="Qualification">Qualification</option>
            <option value="Proposal">Proposal</option>
            <option value="Negotiation">Negotiation</option>
            <option value="Closed Won">Closed Won</option>
            <option value="Closed Lost">Closed Lost</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={onNewClick}>
            <i className="fas fa-plus"></i>
            New Opportunity
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
              <option>All Opportunities</option>
              <option>This Quarter</option>
              <option>High Value</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {filteredOpportunities.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '8%' }}>EDIT | VIEW</th>
              <th style={{ width: '8%' }}>OPP ID</th>
              <th style={{ width: '20%' }}>OPPORTUNITY NAME</th>
              <th style={{ width: '15%' }}>COMPANY</th>
              <th style={{ width: '10%' }}>VALUE</th>
              <th style={{ width: '8%' }}>PROBABILITY</th>
              <th style={{ width: '10%' }}>STAGE</th>
              <th style={{ width: '10%' }}>EXPECTED CLOSE</th>
              <th style={{ width: '11%' }}>ASSIGNED TO</th>
            </tr>
          </thead>
          <tbody>
            {filteredOpportunities.map((opp) => (
              <tr key={opp.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => onEditClick(opp.id)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => onViewClick(opp.id)}
                  >
                    View
                  </button>
                </td>
                <td>{opp.id}</td>
                <td>{opp.name}</td>
                <td>{opp.companyName}</td>
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
