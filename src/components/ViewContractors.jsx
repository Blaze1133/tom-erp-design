import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewContractors = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [searchTerm, setSearchTerm] = useState('');

  const [contractors] = useState([
    {
      id: 1,
      autoNumber: '1097',
      contractorName: 'YEW CHEW',
      status: 'Active',
      createdDate: '2024-01-15'
    },
    {
      id: 2,
      autoNumber: '1096',
      contractorName: 'J172',
      status: 'Active',
      createdDate: '2024-01-20'
    },
    {
      id: 3,
      autoNumber: '1094',
      contractorName: 'GENESIS',
      status: 'Active',
      createdDate: '2024-02-01'
    },
    {
      id: 4,
      autoNumber: '1093',
      contractorName: 'J172A',
      status: 'Active',
      createdDate: '2024-02-05'
    },
    {
      id: 5,
      autoNumber: '1092',
      contractorName: 'J193',
      status: 'Active',
      createdDate: '2024-02-10'
    },
    {
      id: 6,
      autoNumber: '1091',
      contractorName: 'J181',
      status: 'Active',
      createdDate: '2024-02-15'
    },
    {
      id: 7,
      autoNumber: '1090',
      contractorName: 'TOM MEP',
      status: 'Active',
      createdDate: '2024-02-20'
    },
    {
      id: 8,
      autoNumber: '1089',
      contractorName: 'J171A',
      status: 'Active',
      createdDate: '2024-02-25'
    },
    {
      id: 9,
      autoNumber: '1076',
      contractorName: 'CHEN GUAN',
      status: 'Active',
      createdDate: '2024-03-01'
    },
    {
      id: 10,
      autoNumber: '1075',
      contractorName: 'STRAITS',
      status: 'Active',
      createdDate: '2024-03-05'
    },
    {
      id: 11,
      autoNumber: '1074',
      contractorName: 'YSM',
      status: 'Active',
      createdDate: '2024-03-10'
    },
    {
      id: 12,
      autoNumber: '1073',
      contractorName: 'VC ENGINEERING',
      status: 'Active',
      createdDate: '2024-03-15'
    },
    {
      id: 13,
      autoNumber: '1072',
      contractorName: 'PMK',
      status: 'Active',
      createdDate: '2024-03-20'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewContractor = (contractor) => {
    if (onViewClick) {
      onViewClick(contractor);
    }
  };

  const handleEditContractor = (contractor) => {
    if (onEditClick) {
      onEditClick(contractor);
    }
  };

  const handleNewContractor = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  const filteredContractors = contractors.filter(contractor =>
    contractor.contractorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contractor.autoNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-hard-hat"></i>
          <h1>Contractors</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>SEARCH</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
            style={{ width: '250px' }}
            placeholder="Search contractors..."
          />
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewContractor}>
            <i className="fas fa-plus"></i>
            Add Contractor
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
              <option>All Contractors</option>
              <option>Active Contractors</option>
              <option>Inactive Contractors</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {filteredContractors.length}
          </div>
        </div>
      </div>

      {/* Contractors List Section */}
      <div className="form-section" style={{ marginTop: '2rem' }}>
        <h2 className="section-title">
          <i className="fas fa-list"></i>
          Contractors List
        </h2>
        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
        
        <div className="contractors-list-header" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '4px'
        }}>
          <span style={{ fontWeight: 'bold' }}>All Contractors</span>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button className="btn-icon" title="Search">
              <i className="fas fa-search"></i>
            </button>
            <button className="btn btn-primary" onClick={handleNewContractor}>
              <i className="fas fa-plus"></i>
            </button>
            <button className="btn-icon" title="More options">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
        </div>

        <div className="enquiries-table-container">
          <table className="enquiries-table">
            <thead>
              <tr>
                <th style={{ width: '15%' }}>EDIT | VIEW</th>
                <th style={{ width: '20%' }}>Auto Number <i className="fas fa-sort"></i></th>
                <th style={{ width: '35%' }}>Contractor Name <i className="fas fa-sort"></i></th>
                <th style={{ width: '15%' }}>STATUS</th>
                <th style={{ width: '15%' }}>CREATED DATE</th>
              </tr>
            </thead>
            <tbody>
              {filteredContractors.map((contractor) => (
                <tr key={contractor.id}>
                  <td>
                    <button 
                      className="view-link"
                      onClick={() => handleEditContractor(contractor)}
                    >
                      Edit
                    </button>
                    {' | '}
                    <button 
                      className="view-link"
                      onClick={() => handleViewContractor(contractor)}
                    >
                      View
                    </button>
                  </td>
                  <td className="doc-number">{contractor.autoNumber}</td>
                  <td>{contractor.contractorName}</td>
                  <td>
                    <span className={`status-badge ${contractor.status.toLowerCase()}`}>
                      {contractor.status}
                    </span>
                  </td>
                  <td>{contractor.createdDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

export default ViewContractors;
