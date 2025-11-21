import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewVendors = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');
  const [showInactives, setShowInactives] = useState(false);
  const [quickSort, setQuickSort] = useState('5ms');

  const [vendors] = useState([
    {
      id: 1,
      editView: true,
      name: '5MS Enterprise Pte Ltd',
      duplicate: '',
      category: 'Supplies',
      primarySubsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      primaryContact: '',
      phone: '',
      email: '',
      loginAccess: 'No',
      stopSendingSms: 'No',
      messageMediaLastOptIn: '',
      messageMediaIsKeylink: 'No',
      gstNo: ''
    },
    {
      id: 2,
      editView: true,
      name: '7-ELEVEN COLD STORAGE',
      duplicate: '',
      category: '',
      primarySubsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      primaryContact: '',
      phone: '',
      email: '',
      loginAccess: 'No',
      stopSendingSms: 'No',
      messageMediaLastOptIn: '',
      messageMediaIsKeylink: 'No',
      gstNo: 'M9-000476-P'
    },
    {
      id: 3,
      editView: true,
      name: '8 POINT ENGINEERING PTE LTD',
      duplicate: '',
      category: 'Supplies',
      primarySubsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      primaryContact: '',
      phone: '68639552',
      email: 'admin@8point.com.sg',
      loginAccess: 'No',
      stopSendingSms: 'No',
      messageMediaLastOptIn: '',
      messageMediaIsKeylink: 'No',
      gstNo: ''
    },
    {
      id: 4,
      editView: true,
      name: '96 CRANE SOLUTIONS PTE LTD',
      duplicate: '',
      category: '',
      primarySubsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      primaryContact: '',
      phone: '97311070',
      email: '',
      loginAccess: 'No',
      stopSendingSms: 'No',
      messageMediaLastOptIn: '',
      messageMediaIsKeylink: 'No',
      gstNo: ''
    },
    {
      id: 5,
      editView: true,
      name: '365 PROPERTY SG PTE LTD',
      duplicate: '',
      category: 'Consultant',
      primarySubsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      primaryContact: '',
      phone: '91680998',
      email: 'sgpropertyintl@gmail.com',
      loginAccess: 'No',
      stopSendingSms: 'No',
      messageMediaLastOptIn: '',
      messageMediaIsKeylink: 'No',
      gstNo: ''
    },
    {
      id: 6,
      editView: true,
      name: '818 TRADERS',
      duplicate: '',
      category: '',
      primarySubsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      primaryContact: '',
      phone: '',
      email: '',
      loginAccess: 'No',
      stopSendingSms: 'No',
      messageMediaLastOptIn: '',
      messageMediaIsKeylink: 'No',
      gstNo: ''
    }
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewVendor = (vendor) => {
    if (onViewClick) {
      onViewClick(vendor);
    }
  };

  const handleEditVendor = (vendor) => {
    if (onEditClick) {
      onEditClick(vendor);
    }
  };

  const handleNewVendor = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  const filteredVendors = vendors.filter(vendor => {
    if (viewFilter !== 'all' && vendor.category !== viewFilter) return false;
    return true;
  });

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-truck"></i>
          <h1>Vendors</h1>
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
            style={{ width: '250px' }}
          >
            <option value="all">All</option>
            <option value="Supplies">Supplies</option>
            <option value="Consultant">Consultant</option>
            <option value="Services">Services</option>
          </select>
        </div>
        <div className="list-actions">
          <button className="btn btn-primary" onClick={handleNewVendor}>
            <i className="fas fa-plus"></i>
            New Vendor
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
            <span>Show Inactives</span>
          </label>
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
            <select 
              value={quickSort}
              onChange={(e) => setQuickSort(e.target.value)}
              className="form-control"
            >
              <option value="5ms">5ms — Ace Peripherals</option>
              <option value="all">All Vendors</option>
              <option value="active">Active Only</option>
            </select>
          </div>
          <div className="list-total">
            TOTAL: 2692
          </div>
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th style={{ width: '5%' }}>EDIT | VIEW</th>
              <th style={{ width: '15%' }}>NAME</th>
              <th style={{ width: '8%' }}>DUPLICATE</th>
              <th style={{ width: '10%' }}>CATEGORY</th>
              <th style={{ width: '15%' }}>PRIMARY SUBSIDIARY</th>
              <th style={{ width: '10%' }}>PRIMARY CONTACT</th>
              <th style={{ width: '8%' }}>PHONE</th>
              <th style={{ width: '12%' }}>EMAIL</th>
              <th style={{ width: '6%' }}>LOGIN ACCESS</th>
              <th style={{ width: '8%' }}>STOP SENDING SMS</th>
              <th style={{ width: '12%' }}>MESSAGEMEDIA LAST OPTIN KEYWORD</th>
              <th style={{ width: '8%' }}>MESSAGEMEDIA ISKEYLINK ENTITY</th>
              <th style={{ width: '8%' }}>GST NO</th>
            </tr>
          </thead>
          <tbody>
            {filteredVendors.map((vendor) => (
              <tr key={vendor.id}>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditVendor(vendor)}
                  >
                    Edit
                  </button>
                  {' | '}
                  <button 
                    className="view-link"
                    onClick={() => handleViewVendor(vendor)}
                  >
                    View
                  </button>
                </td>
                <td>{vendor.name}</td>
                <td>{vendor.duplicate}</td>
                <td>{vendor.category}</td>
                <td>{vendor.primarySubsidiary}</td>
                <td>{vendor.primaryContact}</td>
                <td>{vendor.phone}</td>
                <td>{vendor.email}</td>
                <td>{vendor.loginAccess}</td>
                <td>{vendor.stopSendingSms}</td>
                <td>{vendor.messageMediaLastOptIn}</td>
                <td>{vendor.messageMediaIsKeylink}</td>
                <td>{vendor.gstNo}</td>
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

export default ViewVendors;
