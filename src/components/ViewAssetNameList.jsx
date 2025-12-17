import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewAssetNameList = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Default');
  const [showInactives, setShowInactives] = useState(false);

  const [assetNames] = useState([
    {
      id: 1,
      name: 'Laptop',
      assetType: 'Computers',
      assetSerialNumber: '',
      description: '',
      assetLifetime: '',
      depreciationPeriod: '',
      assetLocation: '',
      assetImage: '',
      inactive: false
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleView = (asset) => {
    if (onViewClick) {
      onViewClick(asset);
    }
  };

  const handleEdit = (asset) => {
    if (onEditClick) {
      onEditClick(asset);
    }
  };

  const handleNewAssetName = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-clipboard-list"></i>
          <h1>Asset Name List</h1>
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
            value={viewFilter} 
            onChange={(e) => setViewFilter(e.target.value)}
            className="form-control"
            style={{ width: '200px' }}
          >
            <option value="Default">Default</option>
          </select>
          <button className="btn btn-secondary" style={{ marginLeft: '1rem' }}>Customize View</button>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewAssetName}>
            New Asset Name List
          </button>
        </div>
      </div>

      <div className="list-filters">
        <div className="filter-group">
          <button className="btn-icon" title="Export">
            <i className="fas fa-file-export"></i>
          </button>
          <button className="btn-icon" title="Excel">
            <i className="fas fa-file-excel"></i>
          </button>
          <button className="btn-icon" title="PDF">
            <i className="fas fa-file-pdf"></i>
          </button>
          <button className="btn-icon" title="Print">
            <i className="fas fa-print"></i>
          </button>
          <label className="checkbox-label">
            <input 
              type="checkbox" 
              checked={showInactives}
              onChange={(e) => setShowInactives(e.target.checked)}
            />
            SHOW INACTIVES
          </label>
          <button className="btn-icon" title="Edit">
            <span>EDIT</span>
          </button>
          <button className="btn-icon" title="Delete">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="filter-right-group">
          <div className="quick-sort">
            <label>QUICK SORT</label>
            <select className="form-control">
              <option>All Assets</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {assetNames.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '10%' }}>EDIT | VIEW</th>
              <th style={{ width: '20%' }}>NAME ▲</th>
              <th style={{ width: '20%' }}>ASSET TYPE</th>
              <th style={{ width: '25%' }}>ASSET SERIAL NUMBER</th>
            </tr>
          </thead>
          <tbody>
            {assetNames.map((asset) => (
              <tr key={asset.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEdit(asset)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleView(asset)}
                  >
                    View
                  </button>
                </td>
                <td>{asset.name}</td>
                <td>{asset.assetType}</td>
                <td>{asset.assetSerialNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
};

export default ViewAssetNameList;
