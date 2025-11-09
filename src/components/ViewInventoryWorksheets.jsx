import React, { useState } from 'react';
import './Enquiries.css';

const ViewInventoryWorksheets = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewType, setViewType] = useState('Search Project');

  // Dummy data for inventory worksheets
  const worksheets = [
    {
      id: 1,
      date: '8/11/2025',
      documentNumber: 'INVWORK2025-001',
      vendor: 'Tech Marine Offshore',
      name: 'Monthly Stock Adjustment',
      account: '50100 Cost Of Sales',
      memo: 'Monthly inventory worksheet for November',
      item: 'Steel Plates',
      itemQty: 150,
      itemUnitPrice: 45.50,
      amount: 6825.00
    },
    {
      id: 2,
      date: '7/11/2025',
      documentNumber: 'INVWORK2025-002',
      vendor: 'TOM Shipyard',
      name: 'Quarterly Review Adjustment',
      account: '50100 Cost Of Sales',
      memo: 'Q4 inventory reconciliation',
      item: 'Welding Equipment',
      itemQty: 25,
      itemUnitPrice: 120.00,
      amount: 3000.00
    },
    {
      id: 3,
      date: '6/11/2025',
      documentNumber: 'INVWORK2025-003',
      vendor: 'MEP Marine CC',
      name: 'Year-End Stock Count',
      account: '50100 Cost Of Sales',
      memo: 'Annual stock verification',
      item: 'Hydraulic Parts',
      itemQty: 300,
      itemUnitPrice: 15.75,
      amount: 4725.00
    }
  ];

  const filteredWorksheets = worksheets.filter(ws =>
    ws.documentNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ws.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ws.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ws.memo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRowClick = (worksheet) => {
    setCurrentPage('view-inventory-worksheet-detail');
  };

  const handleNewTransaction = () => {
    setCurrentPage('adjust-inventory-worksheet');
  };

  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ 
        background: 'white', 
        padding: '16px 24px',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <i className="fas fa-clipboard-list" style={{ fontSize: '20px', color: '#4a90e2' }}></i>
          <h1 style={{ fontSize: '20px', fontWeight: '600', margin: 0, color: '#333' }}>Inventory Worksheets</h1>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={{ 
            padding: '8px 20px', 
            background: '#4a90e2', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            fontSize: '13px',
            fontWeight: '500',
            cursor: 'pointer'
          }}>List</button>
          <button style={{ 
            padding: '8px 20px', 
            background: 'white', 
            color: '#333', 
            border: '1px solid #ddd', 
            borderRadius: '4px',
            fontSize: '13px',
            cursor: 'pointer'
          }}>Search</button>
          <button style={{ 
            padding: '8px 20px', 
            background: 'white', 
            color: '#333', 
            border: '1px solid #ddd', 
            borderRadius: '4px',
            fontSize: '13px',
            cursor: 'pointer'
          }}>Audit Trail</button>
        </div>
      </div>

      {/* Controls Section */}
      <div style={{ background: 'white', padding: '20px 24px', margin: '16px 24px', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <label style={{ fontSize: '12px', fontWeight: '600', color: '#666' }}>VIEW:</label>
              <select 
                value={viewType} 
                onChange={(e) => setViewType(e.target.value)}
                style={{ 
                  padding: '6px 12px', 
                  border: '1px solid #ddd', 
                  borderRadius: '4px',
                  fontSize: '13px',
                  minWidth: '150px'
                }}
              >
                <option>Search Project</option>
                <option>All Worksheets</option>
                <option>By Department</option>
                <option>By Location</option>
              </select>
            </div>
            <button style={{ 
              padding: '6px 16px', 
              background: 'white', 
              color: '#333', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              fontSize: '13px',
              cursor: 'pointer'
            }}>Edit View</button>
          </div>
          <button 
            onClick={handleNewTransaction}
            style={{ 
              padding: '8px 20px', 
              background: '#dc3545', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <i className="fas fa-plus"></i>
            New Transaction
          </button>
        </div>
      </div>

      {/* Filters and Actions */}
      <div style={{ padding: '0 24px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button style={{ 
            padding: '6px 12px', 
            background: 'white', 
            border: '1px solid #ddd', 
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <i className="fas fa-filter"></i>
            FILTERS
          </button>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button style={{ padding: '6px 10px', background: 'white', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}>
              <i className="fas fa-download"></i>
            </button>
            <button style={{ padding: '6px 10px', background: 'white', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}>
              <i className="fas fa-file-excel"></i>
            </button>
            <button style={{ padding: '6px 10px', background: 'white', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}>
              <i className="fas fa-print"></i>
            </button>
            <span style={{ fontSize: '12px', color: '#666', marginLeft: '8px' }}>EDIT</span>
            <span style={{ 
              fontSize: '12px', 
              fontWeight: '600', 
              color: '#666',
              marginLeft: '16px'
            }}>
              QUICK SORT:
            </span>
            <select style={{ 
              padding: '4px 8px', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              fontSize: '12px'
            }}>
              <option>Date</option>
              <option>Document Number</option>
              <option>Amount</option>
            </select>
            <span style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginLeft: '16px' }}>
              TOTAL: {filteredWorksheets.length}
            </span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={{ padding: '0 24px 24px' }}>
        <div style={{ background: 'white', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #e0e0e0' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>EDIT | VIEW</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>DATE</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>DOCUMENT NUMBER</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>VENDOR</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>NAME</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>ACCOUNT</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>MEMO</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>ITEM</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>ITEM QTY</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>ITEM UNIT PRICE</th>
                <th style={{ padding: '12px', textAlign: 'right', fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {filteredWorksheets.length > 0 ? (
                filteredWorksheets.map((worksheet) => (
                  <tr key={worksheet.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '12px' }}>
                      <span 
                        style={{ color: '#4a90e2', cursor: 'pointer', marginRight: '8px', fontSize: '12px' }}
                        onClick={() => setCurrentPage('adjust-inventory-worksheet')}
                      >
                        Edit
                      </span>
                      <span style={{ color: '#999', margin: '0 4px' }}>|</span>
                      <span 
                        style={{ color: '#4a90e2', cursor: 'pointer', marginLeft: '8px', fontSize: '12px' }}
                        onClick={() => handleRowClick(worksheet)}
                      >
                        View
                      </span>
                    </td>
                    <td style={{ padding: '12px' }}>{worksheet.date}</td>
                    <td style={{ padding: '12px', color: '#4a90e2' }}>{worksheet.documentNumber}</td>
                    <td style={{ padding: '12px' }}>{worksheet.vendor}</td>
                    <td style={{ padding: '12px' }}>{worksheet.name}</td>
                    <td style={{ padding: '12px', color: '#4a90e2' }}>{worksheet.account}</td>
                    <td style={{ padding: '12px' }}>{worksheet.memo}</td>
                    <td style={{ padding: '12px' }}>{worksheet.item}</td>
                    <td style={{ padding: '12px', textAlign: 'center' }}>{worksheet.itemQty}</td>
                    <td style={{ padding: '12px', textAlign: 'center' }}>${worksheet.itemUnitPrice.toFixed(2)}</td>
                    <td style={{ padding: '12px', textAlign: 'right', fontWeight: '500' }}>${worksheet.amount.toFixed(2)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="11" style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
                    No records to show.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewInventoryWorksheets;
