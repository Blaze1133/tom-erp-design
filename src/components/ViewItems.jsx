import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewItems = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [view, setView] = useState('Basic');

  const items = [
    { id: 1, name: '10FEEN', displayName: '', subtype: 'For Purchase', description: '', basePrice: '', taxSchedule: 'Tax 7%', box: '', row: '' },
    { id: 2, name: '110 V - 4way Expasion Box', displayName: '', subtype: 'For Purchase', description: '', basePrice: '', taxSchedule: 'Tax 7%', box: '', row: '' },
    { id: 3, name: '110 V Baby Grinding Machine', displayName: '', subtype: 'For Purchase', description: '', basePrice: '', taxSchedule: 'Tax 7%', box: '', row: '' },
    { id: 4, name: '110 V Drilling Machine', displayName: '', subtype: 'For Purchase', description: '', basePrice: '', taxSchedule: 'Tax 7%', box: '', row: '' },
    { id: 5, name: '110 V Female Connector', displayName: '', subtype: 'For Purchase', description: '', basePrice: '', taxSchedule: 'Tax 7%', box: '', row: '' },
    { id: 6, name: '110 V Grinding Machine', displayName: '', subtype: 'For Purchase', description: '', basePrice: '', taxSchedule: 'Tax 7%', box: '', row: '' },
    { id: 7, name: '110 V Male Connector', displayName: '', subtype: 'For Purchase', description: '', basePrice: '', taxSchedule: 'Tax 7%', box: '', row: '' },
    { id: 8, name: '110 V- 7 G Machine ( Makita)', displayName: '', subtype: 'For Purchase', description: '', basePrice: '', taxSchedule: 'Tax 7%', box: '', row: '' },
    { id: 9, name: '110V Bulb', displayName: '', subtype: 'For Purchase', description: '', basePrice: '', taxSchedule: 'Tax 7%', box: '', row: '' },
    { id: 10, name: '110V Hand Drilling Machine', displayName: '', subtype: 'For Purchase', description: '', basePrice: '', taxSchedule: 'Tax 7%', box: '', row: '' },
  ];

  const handleNewItem = () => {
    if (setCurrentPage) {
      setCurrentPage('create-item');
    }
  };

  const handleViewItem = (item) => {
    if (setCurrentPage) {
      setCurrentPage('view-item-detail');
    }
  };

  const handleEditItem = (item) => {
    if (setCurrentPage) {
      setCurrentPage('create-item');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-box"></i>
          <h1>Items</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
          <button className="btn-view-option">Web Site Content Manager</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>VIEW</label>
          <select 
            value={view}
            onChange={(e) => setView(e.target.value)}
            className="form-control"
            style={{ width: '200px' }}
          >
            <option>Basic</option>
            <option>Detailed</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewItem}>
            <i className="fas fa-plus"></i>
            New Item
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
              <option>Default</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: {items.length}
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '8%' }}>EDIT | VIEW</th>
              <th style={{ width: '15%' }}>NAME ▲</th>
              <th style={{ width: '12%' }}>DISPLAY NAME</th>
              <th style={{ width: '12%' }}>SUBTYPE</th>
              <th style={{ width: '15%' }}>DESCRIPTION</th>
              <th style={{ width: '10%' }}>BASE PRICE</th>
              <th style={{ width: '12%' }}>TAX SCHEDULE</th>
              <th style={{ width: '8%' }}>BOX</th>
              <th style={{ width: '8%' }}>ROW</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditItem(item)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleViewItem(item)}
                  >
                    View
                  </button>
                </td>
                <td>{item.name}</td>
                <td>{item.displayName}</td>
                <td>{item.subtype}</td>
                <td>{item.description}</td>
                <td>{item.basePrice}</td>
                <td>{item.taxSchedule}</td>
                <td>{item.box}</td>
                <td>{item.row}</td>
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

export default ViewItems;
