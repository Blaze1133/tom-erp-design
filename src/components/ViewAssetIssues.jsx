import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewAssetIssues = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('Default');

  const [assetIssues] = useState([
    {
      id: 1,
      idNumber: 1,
      employee: '222267 Demo employee',
      assetName: 'Laptop',
      description: '',
      status: 'Issued',
      dateOfIssue: '1/9/2021',
      dateOfReturn: '',
      memo: '',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd. : Tech Electric & Automation Pte Ltd',
      country: 'Singapore',
      requestDate: '28/9/2021',
      requestingDepartment: 'TOM : Admin',
      issuingDepartment: '',
      supervisor: 'vikram',
      hrDept: '',
      itAdmin: ''
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

  const handleNewAssetIssue = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-box"></i>
          <h1>Asset Issue to Employee List</h1>
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
          <button className="btn btn-primary" onClick={handleNewAssetIssue}>
            New Asset Issue to Employee
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
          <div className="list-total">
            TOTAL: {assetIssues.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '5%' }}>EDIT | VIEW</th>
              <th style={{ width: '5%' }}>ID ▲</th>
              <th style={{ width: '12%' }}>EMPLOYEE</th>
              <th style={{ width: '10%' }}>ASSET NAME</th>
              <th style={{ width: '12%' }}>DESCRIPTION</th>
              <th style={{ width: '8%' }}>STATUS</th>
              <th style={{ width: '8%' }}>DATE OF ISSUE</th>
              <th style={{ width: '8%' }}>DATE OF RETURN</th>
              <th style={{ width: '10%' }}>MEMO</th>
              <th style={{ width: '15%' }}>SUBSIDIARY</th>
              <th style={{ width: '8%' }}>COUNTRY</th>
              <th style={{ width: '8%' }}>REQUEST DATE</th>
              <th style={{ width: '12%' }}>REQUESTING DEPARTMENT</th>
              <th style={{ width: '12%' }}>ISSUING DEPARTMENT</th>
              <th style={{ width: '8%' }}>SUPERVISOR</th>
              <th style={{ width: '8%' }}>HR DEPT</th>
              <th style={{ width: '8%' }}>IT ADMIN</th>
            </tr>
          </thead>
          <tbody>
            {assetIssues.map((asset) => (
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
                <td>{asset.idNumber}</td>
                <td>{asset.employee}</td>
                <td>{asset.assetName}</td>
                <td>{asset.description}</td>
                <td>{asset.status}</td>
                <td>{asset.dateOfIssue}</td>
                <td>{asset.dateOfReturn}</td>
                <td>{asset.memo}</td>
                <td>{asset.subsidiary}</td>
                <td>{asset.country}</td>
                <td>{asset.requestDate}</td>
                <td>{asset.requestingDepartment}</td>
                <td>{asset.issuingDepartment}</td>
                <td>{asset.supervisor}</td>
                <td>{asset.hrDept}</td>
                <td>{asset.itAdmin}</td>
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

export default ViewAssetIssues;
