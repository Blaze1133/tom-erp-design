import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewInventoryAdjustments = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');
  const [searchProject, setSearchProject] = useState('');

  const [adjustments] = useState([
    {
      id: 1,
      date: '8/11/2025',
      documentNumber: 'INVADJ2025-001',
      vendor: 'Tech Marine Offshore',
      name: 'Material Issue to Engineering',
      account: '50100 Cost Of Sales',
      memo: 'Monthly material issue for Project Alpha',
      item: 'Steel Plates',
      itemQty: 150,
      itemUnitPrice: 45.50,
      amount: 6825.00
    },
    {
      id: 2,
      date: '7/11/2025',
      documentNumber: 'INVADJ2025-002',
      vendor: 'TOM Shipyard',
      name: 'Inventory Adjustment - Damage',
      account: '50100 Cost Of Sales',
      memo: 'Damaged items write-off',
      item: 'Welding Rods',
      itemQty: 50,
      itemUnitPrice: 12.00,
      amount: 600.00
    },
    {
      id: 3,
      date: '6/11/2025',
      documentNumber: 'INVADJ2025-003',
      vendor: 'MEP Marine CC',
      name: 'Material Transfer to Workshop',
      account: '50100 Cost Of Sales',
      memo: 'Transfer for maintenance work',
      item: 'Hydraulic Oil',
      itemQty: 200,
      itemUnitPrice: 8.75,
      amount: 1750.00
    },
    {
      id: 4,
      date: '5/11/2025',
      documentNumber: 'INVADJ2025-004',
      vendor: 'Tech Marine Offshore',
      name: 'Stock Count Adjustment',
      account: '50100 Cost Of Sales',
      memo: 'Annual stock count variance',
      item: 'Safety Equipment',
      itemQty: 75,
      itemUnitPrice: 25.00,
      amount: 1875.00
    },
    {
      id: 5,
      date: '4/11/2025',
      documentNumber: 'INVADJ2025-005',
      vendor: 'TOM Engineering',
      name: 'Project Material Issue',
      account: '50100 Cost Of Sales',
      memo: 'Material for Project Beta installation',
      item: 'Electrical Cables',
      itemQty: 500,
      itemUnitPrice: 3.50,
      amount: 1750.00
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewAdjustment = (adjustment) => {
    if (setCurrentPage) {
      setCurrentPage('view-inventory-adjustment-detail');
    }
  };

  const handleEditAdjustment = (adjustment) => {
    if (setCurrentPage) {
      setCurrentPage('adjust-inventory');
    }
  };

  const handleNewAdjustment = () => {
    if (setCurrentPage) {
      setCurrentPage('adjust-inventory');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-box"></i>
          <h1>Inventory Issue/Adjustments</h1>
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
            value={searchProject}
            onChange={(e) => setSearchProject(e.target.value)}
            className="form-control"
            style={{ width: '250px' }}
          >
            <option value="">Search Project</option>
            <option value="project1">20-0052 Fortis Construction Pte. Ltd</option>
            <option value="project2">21-0149 GF-OSM-WOODLANDS</option>
            <option value="project3">22-0026 NORT-Lifting</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewAdjustment}>
            <i className="fas fa-plus"></i>
            New Inventory Adjustment
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
              <option>8/11/2025 — 8/11/2025</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {adjustments.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '5%' }}>EDIT | VIEW</th>
              <th style={{ width: '8%' }}>DATE</th>
              <th style={{ width: '10%' }}>DOCUMENT NUMBER</th>
              <th style={{ width: '12%' }}>VENDOR</th>
              <th style={{ width: '15%' }}>NAME</th>
              <th style={{ width: '10%' }}>ACCOUNT</th>
              <th style={{ width: '15%' }}>MEMO</th>
              <th style={{ width: '10%' }}>ITEM</th>
              <th style={{ width: '5%' }}>ITEM QTY</th>
              <th style={{ width: '5%' }}>ITEM UNIT</th>
              <th style={{ width: '5%' }}>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {adjustments.map((adjustment) => (
              <tr key={adjustment.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditAdjustment(adjustment)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleViewAdjustment(adjustment)}
                  >
                    View
                  </button>
                </td>
                <td>{adjustment.date}</td>
                <td className="doc-number">{adjustment.documentNumber}</td>
                <td>{adjustment.vendor}</td>
                <td>{adjustment.name}</td>
                <td>{adjustment.account}</td>
                <td>{adjustment.memo}</td>
                <td>{adjustment.item}</td>
                <td className="amount">{adjustment.itemQty}</td>
                <td>${adjustment.itemUnitPrice.toFixed(2)}</td>
                <td className="amount">${adjustment.amount.toFixed(2)}</td>
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

export default ViewInventoryAdjustments;
