import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewSubsidiaries = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [showFilters, setShowFilters] = useState(false);
  const [showInactives, setShowInactives] = useState(false);

  const [subsidiaries] = useState([
    {
      id: 1,
      name: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      elimination: 'No',
      biometricIntegration: 'Yes',
      paymentMode: 'All Payment Made by Giro to Tech Onshore MEP-Prefabricators Pte. Ltd. At DBS Bank A/C No.: 003-906132-3, Swift Code: DBSSSGSG',
      stamp: ''
    },
    {
      id: 2,
      name: 'Tech Electric & Automation Pte Ltd',
      elimination: 'No',
      biometricIntegration: 'Yes',
      paymentMode: 'All Payment Made by Giro to Tech Electric & Automation Pte Ltd. At DBS Bank A/C No.: 072-004465-7, Swift Code: DBSSSGSG',
      stamp: ''
    },
    {
      id: 3,
      name: 'Tech Marine Offshore (S) Pte Ltd',
      elimination: 'No',
      biometricIntegration: 'Yes',
      paymentMode: 'All Payment Made by Giro to Tech Marine Offshore (S) Pte Ltd. At DBS Bank A/C No.: 072-027380-0',
      stamp: ''
    },
    {
      id: 4,
      name: 'Tech Offshore Marine (DQ) Pte Ltd',
      elimination: 'No',
      biometricIntegration: 'Yes',
      paymentMode: 'All Payment Made by Giro to Tech Offshore Marine (DQ) Pte Ltd At DBS Bank A/C No.: 072-004177-1',
      stamp: ''
    },
    {
      id: 5,
      name: 'Tech Offshore Marine (s) Pte Ltd',
      elimination: 'No',
      biometricIntegration: 'Yes',
      paymentMode: 'All Payment Made by Giro to Tech Offshore Marine (s) Pte Ltd. At DBS Bank A/C No.: 072-023886-6, Swift Code: DBSSSGSG',
      stamp: ''
    },
    {
      id: 6,
      name: 'Tech Offshore Marine (SV) Pte Ltd',
      elimination: 'No',
      biometricIntegration: 'Yes',
      paymentMode: 'All Payment Made by Cheque to Tech Offshore Marine (SV) Pte Ltd At DBS Bank A/C No.: 072-004442-8',
      stamp: ''
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (subsidiary) => {
    sessionStorage.setItem('selectedSubsidiary', JSON.stringify(subsidiary));
    setCurrentPage('view-subsidiary-detail');
  };

  const handleEdit = (subsidiary) => {
    sessionStorage.setItem('selectedSubsidiary', JSON.stringify(subsidiary));
    setCurrentPage('edit-subsidiary');
  };

  const handleNew = () => {
    setCurrentPage('new-subsidiary');
  };

  const handleCustomizeView = () => {
    showToast('Customize View functionality coming soon', 'info');
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-building" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Subsidiaries</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
          <button 
            className="btn btn-primary"
            onClick={() => setCurrentPage('setup-subsidiary-settings-manager')}
            style={{ marginLeft: '10px' }}
          >
            Subsidiary Settings Manager
          </button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>VIEW</label>
          <select 
            className="form-control"
            style={{ width: '200px' }}
          >
            <option value="default">Subsidiary Default</option>
            <option value="custom1">Custom View 1</option>
            <option value="custom2">Custom View 2</option>
          </select>
          <button 
            className="btn btn-secondary"
            onClick={handleCustomizeView}
            style={{ marginLeft: '10px' }}
          >
            Customize View
          </button>
          <button 
            className="btn btn-primary"
            onClick={handleNew}
            style={{ marginLeft: '10px' }}
          >
            New Subsidiary
          </button>
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button 
            className="btn-icon" 
            title="Filters"
            onClick={() => setShowFilters(!showFilters)}
          >
            <i className="fas fa-filter"></i>
            <span>FILTERS</span>
          </button>
          <button className="btn-icon" title="Edit View">
            <i className="fas fa-edit"></i>
          </button>
          <button className="btn-icon" title="View">
            <i className="fas fa-eye"></i>
          </button>
          <button className="btn-icon" title="Issue">
            <i className="fas fa-file-alt"></i>
          </button>
        </div>
        <div className="filter-right-group">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <input
              type="checkbox"
              id="showInactives"
              checked={showInactives}
              onChange={(e) => setShowInactives(e.target.checked)}
              style={{ width: '14px', height: '14px' }}
            />
            <label htmlFor="showInactives" style={{ margin: 0, fontSize: '12px', fontWeight: '500' }}>SHOW INACTIVES</label>
          </div>
          <div className="list-total" style={{ fontSize: '12px', fontWeight: '600' }}>
            TOTAL: {subsidiaries.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '8%', fontSize: '11px', backgroundColor: '#e8eef5' }}>EDIT | VIEW</th>
              <th style={{ width: '8%', fontSize: '11px', backgroundColor: '#e8eef5' }}>NAME</th>
              <th style={{ width: '25%', fontSize: '11px', backgroundColor: '#e8eef5' }}></th>
              <th style={{ width: '10%', fontSize: '11px', backgroundColor: '#e8eef5' }}>ELIMINATION</th>
              <th style={{ width: '12%', fontSize: '11px', backgroundColor: '#e8eef5' }}>BIOMETRIC INTEGRATION</th>
              <th style={{ width: '30%', fontSize: '11px', backgroundColor: '#e8eef5' }}>PAYMENT MODE</th>
              <th style={{ width: '7%', fontSize: '11px', backgroundColor: '#e8eef5' }}>STAMP</th>
            </tr>
          </thead>
          <tbody>
            {subsidiaries.map((subsidiary) => (
              <tr key={subsidiary.id}>
                <td style={{ fontSize: '13px' }}>
                  <button 
                    className="view-link"
                    onClick={() => handleEdit(subsidiary)}
                    style={{ fontSize: '13px' }}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleView(subsidiary)}
                    style={{ fontSize: '13px' }}
                  >
                    View
                  </button>
                </td>
                <td colSpan="2" style={{ fontSize: '13px' }}>{subsidiary.name}</td>
                <td style={{ fontSize: '13px' }}>{subsidiary.elimination}</td>
                <td style={{ fontSize: '13px' }}>{subsidiary.biometricIntegration}</td>
                <td style={{ fontSize: '13px' }}>{subsidiary.paymentMode}</td>
                <td>
                  {subsidiary.stamp && (
                    <img 
                      src={subsidiary.stamp} 
                      alt="Stamp" 
                      style={{ width: '40px', height: '40px' }}
                    />
                  )}
                </td>
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

export default ViewSubsidiaries;
