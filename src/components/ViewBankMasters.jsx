import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewBankMasters = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Default');
  const [showInactives, setShowInactives] = useState(false);

  const [bankMasters] = useState([
    {
      id: 1,
      name: 'CITIBANK',
      bankId: '',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.'
    },
    {
      id: 2,
      name: 'CITIBANK',
      bankId: '',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd'
    },
    {
      id: 3,
      name: 'DBS',
      bankId: 'DB5356589XXX',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.'
    },
    {
      id: 4,
      name: 'DBS',
      bankId: '',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd'
    },
    {
      id: 5,
      name: 'DBS',
      bankId: '',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DQ) Pte Ltd'
    },
    {
      id: 6,
      name: 'HSBC',
      bankId: '',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DQ) Pte Ltd'
    },
    {
      id: 7,
      name: 'MAYBANK',
      bankId: '7232',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.'
    },
    {
      id: 8,
      name: 'MAYBANK',
      bankId: '',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.'
    },
    {
      id: 9,
      name: 'OCBC',
      bankId: '',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.'
    },
    {
      id: 10,
      name: 'OCBC',
      bankId: '7329',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DQ) Pte Ltd'
    },
    {
      id: 11,
      name: 'OCBC',
      bankId: '7339',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd'
    },
    {
      id: 12,
      name: 'OCBC',
      bankId: '7339',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd'
    },
    {
      id: 13,
      name: 'POSB',
      bankId: '',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.'
    },
    {
      id: 14,
      name: 'POSB',
      bankId: '',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Marine Offshore (S) Pte Ltd'
    },
    {
      id: 15,
      name: 'POSB',
      bankId: '',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (s) Pte Ltd'
    },
    {
      id: 16,
      name: 'POSB',
      bankId: '',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DQ) Pte Ltd'
    },
    {
      id: 17,
      name: 'POSB',
      bankId: '',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DQ) Pte Ltd'
    },
    {
      id: 18,
      name: 'UOB',
      bankId: '',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Offshore Marine (DQ) Pte Ltd'
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewBank = (bank) => {
    if (onViewClick) {
      onViewClick(bank);
    }
  };

  const handleEditBank = (bank) => {
    if (onEditClick) {
      onEditClick(bank);
    }
  };

  const handleNewBank = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-university"></i>
          <h1>Bank Master List</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option active">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>VIEW</label>
          <select 
            value={viewFilter}
            onChange={(e) => setViewFilter(e.target.value)}
            className="form-control"
            style={{ width: '200px' }}
          >
            <option value="Default">Default</option>
            <option value="All">All</option>
            <option value="Active">Active Only</option>
          </select>
          <button className="btn-customize">Customize View</button>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewBank}>
            <i className="fas fa-plus"></i>
            New Bank Master
          </button>
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <label className="checkbox-label">
            <input 
              type="checkbox" 
              checked={showInactives}
              onChange={(e) => setShowInactives(e.target.checked)}
            />
            <span>SHOW INACTIVES</span>
          </label>
        </div>
        <div className="filter-group">
          <button className="btn-icon" title="Edit">
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
              <option>Name A-Z</option>
              <option>Name Z-A</option>
              <option>Recently Modified</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {bankMasters.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '10%' }}>EDIT | VIEW</th>
              <th style={{ width: '20%' }}>NAME</th>
              <th style={{ width: '20%' }}>BANK ID</th>
              <th style={{ width: '50%' }}>SUBSIDIARY</th>
            </tr>
          </thead>
          <tbody>
            {bankMasters.map((bank) => (
              <tr key={bank.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditBank(bank)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleViewBank(bank)}
                  >
                    View
                  </button>
                </td>
                <td>{bank.name}</td>
                <td>{bank.bankId}</td>
                <td>{bank.subsidiary}</td>
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

export default ViewBankMasters;
