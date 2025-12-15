import React, { useState } from 'react';
import './Enquiries.css';
import Toast from './Toast';

const ViewStockLedger = ({ setCurrentPage }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const stockData = [
    {
      id: 'STK-001',
      itemCode: 'PIPE-CS-100',
      itemName: 'Carbon Steel Pipe 100mm',
      category: 'Piping',
      uom: 'Meters',
      location: 'TOM-11',
      subsidiary: 'TOM Shipyard Pte Ltd',
      openingBalance: 500,
      received: 200,
      issued: 350,
      currentBalance: 350,
      minStock: 100,
      maxStock: 1000,
      avgCost: 45.50,
      totalValue: 15925.00,
      lastTransaction: '2024-12-10',
      status: 'In Stock'
    },
    {
      id: 'STK-002',
      itemCode: 'WELD-E7018',
      itemName: 'Welding Electrode E7018 3.2mm',
      category: 'Consumable Item',
      uom: 'Kg',
      location: 'Mega yard',
      subsidiary: 'TOM Offshore Marine Engineering Pte Ltd',
      openingBalance: 1000,
      received: 500,
      issued: 1200,
      currentBalance: 300,
      minStock: 200,
      maxStock: 2000,
      avgCost: 8.75,
      totalValue: 2625.00,
      lastTransaction: '2024-12-12',
      status: 'Low Stock'
    },
    {
      id: 'STK-003',
      itemCode: 'PLATE-SS-10',
      itemName: 'Stainless Steel Plate 10mm',
      category: 'Material Supply',
      uom: 'Sq.M',
      location: 'Hong Hang Shipyard',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
      openingBalance: 250,
      received: 150,
      issued: 380,
      currentBalance: 20,
      minStock: 50,
      maxStock: 500,
      avgCost: 125.00,
      totalValue: 2500.00,
      lastTransaction: '2024-12-13',
      status: 'Critical'
    },
    {
      id: 'STK-004',
      itemCode: 'BOLT-M16-100',
      itemName: 'Hex Bolt M16x100 Grade 8.8',
      category: 'Fabrication',
      uom: 'Pcs',
      location: 'TOM-13',
      subsidiary: 'TOM Engineering & Trading Pte Ltd',
      openingBalance: 5000,
      received: 2000,
      issued: 3500,
      currentBalance: 3500,
      minStock: 1000,
      maxStock: 10000,
      avgCost: 0.85,
      totalValue: 2975.00,
      lastTransaction: '2024-12-11',
      status: 'In Stock'
    },
    {
      id: 'STK-005',
      itemCode: 'PAINT-EP-BLK',
      itemName: 'Epoxy Paint Black 20L',
      category: 'Consumable Item',
      uom: 'Liters',
      location: 'Singapore (MEP)',
      subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
      openingBalance: 800,
      received: 400,
      issued: 900,
      currentBalance: 300,
      minStock: 200,
      maxStock: 1500,
      avgCost: 35.00,
      totalValue: 10500.00,
      lastTransaction: '2024-12-09',
      status: 'In Stock'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Stock': return '#e8f5e9';
      case 'Low Stock': return '#fff3e0';
      case 'Critical': return '#ffebee';
      case 'Out of Stock': return '#f5f5f5';
      default: return '#f5f5f5';
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'In Stock': return 'badge badge-success';
      case 'Low Stock': return 'badge badge-warning';
      case 'Critical': return 'badge badge-danger';
      case 'Out of Stock': return 'badge badge-secondary';
      default: return 'badge badge-secondary';
    }
  };

  const filteredStock = stockData.filter(stock => {
    const matchesSearch = stock.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         stock.itemCode.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === 'all' || stock.location === locationFilter;
    const matchesCategory = categoryFilter === 'all' || stock.category === categoryFilter;
    return matchesSearch && matchesLocation && matchesCategory;
  });

  const handleViewDetail = (id) => {
    if (setCurrentPage) {
      setCurrentPage('view-stock-ledger-detail');
    }
  };

  return (
    <div className="enquiries-list">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-book" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Stock Ledger</h1>
        </div>
        <div className="page-actions">
          <button className="btn-view-option active">List</button>
          <button className="btn-view-option">Search</button>
          <button className="btn-view-option">Audit Trail</button>
        </div>
      </div>

      <div className="list-controls">
        <div className="search-controls" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
          <label style={{ fontWeight: '600', fontSize: '0.9rem' }}>Search by</label>
          <select 
            className="form-control"
            style={{ width: '180px' }}
          >
            <option value="Item Name">Item Name</option>
            <option value="Item Code">Item Code</option>
            <option value="Category">Category</option>
          </select>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ flex: 1, maxWidth: '400px' }}
          />
          <button 
            className="btn-filter"
            style={{ padding: '0.5rem 2rem' }}
          >
            SEARCH
          </button>
          <select 
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="form-control"
            style={{ width: '180px' }}
          >
            <option value="all">All Locations</option>
            <option value="TOM-11">TOM-11</option>
            <option value="TOM-13">TOM-13</option>
            <option value="Mega yard">Mega yard</option>
            <option value="Hong Hang Shipyard">Hong Hang Shipyard</option>
            <option value="Singapore (MEP)">Singapore (MEP)</option>
          </select>
          <select 
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="form-control"
            style={{ width: '180px' }}
          >
            <option value="all">All Categories</option>
            <option value="Piping">Piping</option>
            <option value="Consumable Item">Consumable Item</option>
            <option value="Material Supply">Material Supply</option>
            <option value="Fabrication">Fabrication</option>
            <option value="Structure">Structure</option>
          </select>
        </div>
      </div>

      <div className="list-filters">
        <div className="list-toolbar">
          <button className="toolbar-btn" title="Print">
            <i className="fas fa-print"></i> PRINT
          </button>
          <button className="toolbar-btn">
            <i className="fas fa-file-excel"></i> EXPORT
          </button>
        </div>
        <div className="list-sort">
          <label>QUICK SORT:</label>
          <select className="form-control">
            <option>All Items</option>
            <option>Low Stock Items</option>
            <option>Critical Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>
        <div className="list-total">
          TOTAL: {filteredStock.length}
        </div>
      </div>

      <div className="enquiries-table-container">
        <table className="enquiries-table">
          <thead>
            <tr>
              <th>EDIT | VIEW</th>
              <th>S.No</th>
              <th>ITEM CODE</th>
              <th>ITEM NAME</th>
              <th>CATEGORY</th>
              <th>UOM</th>
              <th>LOCATION</th>
              <th>OPENING</th>
              <th>RECEIVED</th>
              <th>ISSUED</th>
              <th>BALANCE</th>
              <th>AVG COST</th>
              <th>TOTAL VALUE</th>
              <th>STATUS</th>
              <th>SUBSIDIARY</th>
            </tr>
          </thead>
          <tbody>
            {filteredStock.map((stock, index) => (
              <tr key={stock.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button 
                      className="view-link"
                      onClick={() => handleViewDetail(stock.id)}
                    >
                      Edit
                    </button>
                    <span style={{ color: '#999' }}>|</span>
                    <button 
                      className="view-link"
                      onClick={() => handleViewDetail(stock.id)}
                    >
                      View
                    </button>
                  </div>
                </td>
                <td>{index + 1}</td>
                <td>{stock.itemCode}</td>
                <td>
                  <button 
                    className="view-link"
                    onClick={() => handleViewDetail(stock.id)}
                  >
                    {stock.itemName}
                  </button>
                </td>
                <td>{stock.category}</td>
                <td>{stock.uom}</td>
                <td>{stock.location}</td>
                <td style={{ textAlign: 'right' }}>{stock.openingBalance.toLocaleString()}</td>
                <td style={{ textAlign: 'right', color: '#4caf50' }}>{stock.received.toLocaleString()}</td>
                <td style={{ textAlign: 'right', color: '#f44336' }}>{stock.issued.toLocaleString()}</td>
                <td style={{ textAlign: 'right', fontWeight: '600' }}>{stock.currentBalance.toLocaleString()}</td>
                <td style={{ textAlign: 'right' }}>SGD {stock.avgCost.toFixed(2)}</td>
                <td style={{ textAlign: 'right', fontWeight: '600' }}>SGD {stock.totalValue.toLocaleString('en-SG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td>
                  <span 
                    style={{ 
                      backgroundColor: getStatusColor(stock.status),
                      color: '#333',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      fontSize: '13px',
                      fontWeight: '500'
                    }}
                  >
                    {stock.status}
                  </span>
                </td>
                <td>{stock.subsidiary}</td>
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

export default ViewStockLedger;
