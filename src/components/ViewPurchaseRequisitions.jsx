import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewPurchaseRequisitions = ({ onNewClick, onViewClick, onEditClick }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [viewFilter, setViewFilter] = useState('all');

  const [requisitions] = useState([
    {
      id: 1,
      documentNumber: 'PR24TEA00145',
      vendor: 'Pacific Marine Supplies Pte Ltd',
      name: 'Marine Equipment Purchase',
      account: '50010 Cost of Goods Sold',
      memo: 'Urgent - Project Alpha',
      item: 'Hydraulic Pump Assembly',
      itemQty: '5',
      itemUnit: '850.00',
      price: '850.00',
      amount: 4250.00,
      date: '15/10/2024'
    },
    {
      id: 2,
      documentNumber: 'PR24TOM00156',
      vendor: 'Oceanic Engineering Supplies',
      name: 'Electrical Components',
      account: '50010 Cost of Goods Sold',
      memo: 'Monthly stock replenishment',
      item: 'Circuit Breakers - 100A',
      itemQty: '20',
      itemUnit: '125.50',
      price: '125.50',
      amount: 2510.00,
      date: '18/10/2024'
    },
    {
      id: 3,
      documentNumber: 'PR24TOM00157',
      vendor: 'Industrial Tools & Equipment Ltd',
      name: 'Workshop Tools',
      account: '15000 Fixed Assets',
      memo: 'Capital equipment purchase',
      item: 'Welding Machine - TIG 300A',
      itemQty: '2',
      itemUnit: '3500.00',
      price: '3500.00',
      amount: 7000.00,
      date: '20/10/2024'
    },
    {
      id: 4,
      documentNumber: 'PR24TOMDQ00089',
      vendor: 'Safety Equipment Specialists',
      name: 'PPE Supplies',
      account: '60100 Operating Expenses',
      memo: 'Quarterly safety equipment',
      item: 'Safety Helmets & Vests',
      itemQty: '50',
      itemUnit: '45.00',
      price: '45.00',
      amount: 2250.00,
      date: '22/10/2024'
    },
    {
      id: 5,
      documentNumber: 'PR24TOM00158',
      vendor: 'Marine Paint & Coatings Co',
      name: 'Protective Coatings',
      account: '50010 Cost of Goods Sold',
      memo: 'Project Neptune - Phase 2',
      item: 'Epoxy Marine Paint - 20L',
      itemQty: '15',
      itemUnit: '280.00',
      price: '280.00',
      amount: 4200.00,
      date: '25/10/2024'
    },
    {
      id: 6,
      documentNumber: 'PR24TEA00146',
      vendor: 'Automation Controls Pte Ltd',
      name: 'PLC Components',
      account: '50010 Cost of Goods Sold',
      memo: 'Client: Shipyard Automation',
      item: 'Siemens S7-1200 PLC',
      itemQty: '3',
      itemUnit: '1850.00',
      price: '1850.00',
      amount: 5550.00,
      date: '28/10/2024'
    },
    {
      id: 7,
      documentNumber: 'PR24TOM00159',
      vendor: 'Steel & Metal Suppliers',
      name: 'Raw Materials',
      account: '50010 Cost of Goods Sold',
      memo: 'Fabrication Project - Offshore',
      item: 'Stainless Steel Plates 10mm',
      itemQty: '500',
      itemUnit: '12.50',
      price: '12.50',
      amount: 6250.00,
      date: '30/10/2024'
    },
    {
      id: 8,
      documentNumber: 'PR24TOM00160',
      vendor: 'Office Supplies International',
      name: 'Office Consumables',
      account: '60100 Operating Expenses',
      memo: 'Monthly office supplies',
      item: 'Stationery & Printer Supplies',
      itemQty: '1',
      itemUnit: '450.00',
      price: '450.00',
      amount: 450.00,
      date: '01/11/2024'
    },
  ]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleViewRequisition = (requisition) => {
    if (onViewClick) {
      onViewClick(requisition);
    }
  };

  const handleEditRequisition = (requisition) => {
    if (onEditClick) {
      onEditClick(requisition);
    }
  };

  const handleNewRequisition = () => {
    if (onNewClick) {
      onNewClick();
    }
  };

  return (
    <div className="enquiries-list">
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-file-alt"></i>
          <h1>Purchase Requisitions</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option active">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="view-filter">
          <label>VIEW:</label>
          <select 
            className="form-control"
            value={viewFilter}
            onChange={(e) => setViewFilter(e.target.value)}
          >
            <option value="all">Search Project</option>
            <option value="pending">Pending Submit</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
          <button className="btn-edit-view">Edit View</button>
        </div>
        <button className="btn-new-enquiry" onClick={handleNewRequisition}>
          <i className="fas fa-plus"></i>
          New Purchase Requisition
        </button>
      </div>

      <div className="list-filters">
        <button className="filter-btn">
          <i className="fas fa-filter"></i>
          FILTERS
        </button>
        <div className="list-toolbar">
          <button className="toolbar-btn" title="Export to Excel">
            <i className="fas fa-file-excel"></i>
          </button>
          <button className="toolbar-btn" title="Export to PDF">
            <i className="fas fa-file-pdf"></i>
          </button>
          <button className="toolbar-btn" title="Print">
            <i className="fas fa-print"></i>
          </button>
          <button className="toolbar-btn">EDIT</button>
        </div>
        <div className="list-sort">
          <label>QUICK SORT:</label>
          <select className="form-control">
            <option>10/12/2021 - 1/3/2022</option>
            <option>Date Created</option>
            <option>Document Number</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: 3939
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th></th>
              <th>EDIT</th>
              <th>VIEW</th>
              <th>*</th>
              <th>DATE ▲</th>
              <th>DOCUMENT NUMBER</th>
              <th>VENDOR</th>
              <th>NAME</th>
              <th>ACCOUNT</th>
              <th>MEMO</th>
              <th>ITEM</th>
              <th>ITEM QTY</th>
              <th>ITEM UNIT PRICE</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {requisitions.map((requisition) => (
              <tr key={requisition.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleEditRequisition(requisition)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleViewRequisition(requisition)}
                  >
                    View
                  </button>
                </td>
                <td>*</td>
                <td>{requisition.date}</td>
                <td className="doc-number">{requisition.documentNumber}</td>
                <td>{requisition.vendor}</td>
                <td>{requisition.name}</td>
                <td>{requisition.account}</td>
                <td>{requisition.memo}</td>
                <td>{requisition.item}</td>
                <td>{requisition.itemQty}</td>
                <td>{requisition.price}</td>
                <td className="amount">{requisition.amount.toFixed(2)}</td>
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

export default ViewPurchaseRequisitions;
