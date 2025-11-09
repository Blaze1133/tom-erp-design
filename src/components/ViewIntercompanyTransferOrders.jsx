import React, { useState } from 'react';
import './Enquiries.css';

const ViewIntercompanyTransferOrders = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewType, setViewType] = useState('Search Project');

  // Dummy data for intercompany transfer orders
  const transferOrders = [
    {
      id: 1,
      date: '8/11/2025',
      documentNumber: 'ITO2025-001',
      vendor: 'Tech Marine Offshore (S) Pte Ltd',
      name: 'Material Transfer to MEP',
      account: 'Intercompany Transfer',
      memo: 'Monthly material transfer for Project Alpha',
      item: 'Steel Plates',
      itemQty: 150,
      itemUnitPrice: 45.50,
      amount: 6825.00
    },
    {
      id: 2,
      date: '7/11/2025',
      documentNumber: 'ITO2025-002',
      vendor: 'Tech Electric & Automation Pte Ltd',
      name: 'Equipment Transfer',
      account: 'Intercompany Transfer',
      memo: 'Transfer electrical equipment to shipyard',
      item: 'Electrical Cables',
      itemQty: 500,
      itemUnitPrice: 3.50,
      amount: 1750.00
    },
    {
      id: 3,
      date: '6/11/2025',
      documentNumber: 'ITO2025-003',
      vendor: 'Tech Offshore Marine (DQ) Pte Ltd',
      name: 'Hydraulic Components Transfer',
      account: 'Intercompany Transfer',
      memo: 'Transfer for maintenance work',
      item: 'Hydraulic Oil',
      itemQty: 200,
      itemUnitPrice: 8.75,
      amount: 1750.00
    },
    {
      id: 4,
      date: '5/11/2025',
      documentNumber: 'ITO2025-004',
      vendor: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      name: 'Safety Equipment Transfer',
      account: 'Intercompany Transfer',
      memo: 'Safety equipment for new project',
      item: 'Safety Equipment',
      itemQty: 75,
      itemUnitPrice: 25.00,
      amount: 1875.00
    },
    {
      id: 5,
      date: '4/11/2025',
      documentNumber: 'ITO2025-005',
      vendor: 'Tech Offshore Marine (SV) Pte Ltd',
      name: 'Welding Materials Transfer',
      account: 'Intercompany Transfer',
      memo: 'Material for Project Beta installation',
      item: 'Welding Rods',
      itemQty: 300,
      itemUnitPrice: 12.00,
      amount: 3600.00
    },
    {
      id: 6,
      date: '3/11/2025',
      documentNumber: 'ITO2025-006',
      vendor: 'Tech Marine Offshore (S) Pte Ltd',
      name: 'Paint & Coating Transfer',
      account: 'Intercompany Transfer',
      memo: 'Coating materials for hull painting',
      item: 'Marine Paint',
      itemQty: 120,
      itemUnitPrice: 45.00,
      amount: 5400.00
    }
  ];

  const filteredOrders = transferOrders.filter(order =>
    order.documentNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.memo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRowClick = (order) => {
    setCurrentPage('view-intercompany-transfer-order-detail');
  };

  const handleNewTransaction = () => {
    setCurrentPage('enter-intercompany-transfer-orders');
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
          <i className="fas fa-exchange-alt" style={{ fontSize: '20px', color: '#4a90e2' }}></i>
          <h1 style={{ margin: 0, fontSize: '20px', fontWeight: '600' }}>Intercompany Transfer Orders</h1>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            style={{
              padding: '8px 16px',
              background: '#4a90e2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: '500'
            }}
          >
            <i className="fas fa-list"></i> List
          </button>
          <button 
            style={{
              padding: '8px 16px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px'
            }}
          >
            <i className="fas fa-search"></i> Search
          </button>
          <button 
            style={{
              padding: '8px 16px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px'
            }}
          >
            <i className="fas fa-file-alt"></i> Audit Trail
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div style={{ padding: '24px' }}>
        <div style={{ background: 'white', borderRadius: '8px', padding: '20px' }}>
          
          {/* View and New Transaction */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <label style={{ fontSize: '13px', color: '#666', fontWeight: '500' }}>VIEW:</label>
              <select 
                value={viewType}
                onChange={(e) => setViewType(e.target.value)}
                style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '13px',
                  minWidth: '200px',
                  cursor: 'pointer'
                }}
              >
                <option>Search Project</option>
                <option>All Transfer Orders</option>
                <option>Pending Approval</option>
                <option>Pending Fulfillment</option>
              </select>
              <button 
                style={{
                  padding: '8px 16px',
                  background: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '13px'
                }}
              >
                Edit View
              </button>
            </div>
            <button 
              onClick={handleNewTransaction}
              style={{
                padding: '8px 20px',
                background: '#4a90e2',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: '500',
                fontSize: '13px'
              }}
            >
              <i className="fas fa-plus"></i> New Transaction
            </button>
          </div>

          {/* Filters */}
          <div style={{ marginBottom: '20px' }}>
            <button style={{
              padding: '8px 16px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <i className="fas fa-filter"></i> FILTERS
            </button>
          </div>

          {/* Action Buttons and Sort */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
            paddingBottom: '12px',
            borderBottom: '1px solid #e0e0e0'
          }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{
                padding: '6px 12px',
                background: 'white',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '13px'
              }}>
                <i className="fas fa-file-alt"></i>
              </button>
              <button style={{
                padding: '6px 12px',
                background: 'white',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '13px'
              }}>
                <i className="fas fa-save"></i>
              </button>
              <button style={{
                padding: '6px 12px',
                background: 'white',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '13px'
              }}>
                <i className="fas fa-print"></i>
              </button>
              <button style={{
                padding: '6px 12px',
                background: 'white',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '13px'
              }}>
                EDIT
              </button>
              <button style={{
                padding: '6px 12px',
                background: 'white',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '13px'
              }}>
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', color: '#666' }}>QUICK SORT:</span>
              <select style={{
                padding: '6px 12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '13px',
                cursor: 'pointer'
              }}>
                <option>Date</option>
                <option>Document Number</option>
                <option>Amount</option>
              </select>
              <span style={{ fontSize: '13px', color: '#666', fontWeight: '500' }}>TOTAL: {filteredOrders.length}</span>
            </div>
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              fontSize: '13px',
              tableLayout: 'fixed'
            }}>
              <thead>
                <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                  <th style={{ padding: '12px 8px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '90px' }}>
                    EDIT | VIEW
                  </th>
                  <th style={{ padding: '12px 8px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '30px' }}>
                    <i className="fas fa-circle" style={{ fontSize: '6px', marginRight: '4px' }}></i>
                  </th>
                  <th style={{ padding: '12px 8px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '90px' }}>DATE ▲</th>
                  <th style={{ padding: '12px 8px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '130px' }}>DOCUMENT NUMBER</th>
                  <th style={{ padding: '12px 8px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '180px' }}>VENDOR</th>
                  <th style={{ padding: '12px 8px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '160px' }}>NAME</th>
                  <th style={{ padding: '12px 8px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '200px' }}>MEMO</th>
                  <th style={{ padding: '12px 8px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '120px' }}>ITEM</th>
                  <th style={{ padding: '12px 8px', textAlign: 'center', fontWeight: '600', color: '#495057', fontSize: '11px', width: '80px' }}>ITEM QTY</th>
                  <th style={{ padding: '12px 8px', textAlign: 'right', fontWeight: '600', color: '#495057', fontSize: '11px', width: '110px' }}>ITEM UNIT PRICE</th>
                  <th style={{ padding: '12px 8px', textAlign: 'right', fontWeight: '600', color: '#495057', fontSize: '11px', width: '100px' }}>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.length === 0 ? (
                  <tr>
                    <td colSpan="11" style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
                      No records to show.
                    </td>
                  </tr>
                ) : (
                  filteredOrders.map((order) => (
                    <tr 
                      key={order.id}
                      style={{ 
                        borderBottom: '1px solid #dee2e6',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                      onClick={() => handleRowClick(order)}
                    >
                      <td style={{ padding: '12px 8px' }}>
                        <div style={{ display: 'flex', gap: '4px' }}>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentPage('edit-intercompany-transfer-order');
                            }}
                            style={{
                              padding: '0',
                              background: 'none',
                              border: 'none',
                              color: '#4a90e2',
                              cursor: 'pointer',
                              fontSize: '12px',
                              textDecoration: 'underline'
                            }}
                          >
                            Edit
                          </button>
                          <span style={{ color: '#999' }}>|</span>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentPage('view-intercompany-transfer-order-detail');
                            }}
                            style={{
                              padding: '0',
                              background: 'none',
                              border: 'none',
                              color: '#4a90e2',
                              cursor: 'pointer',
                              fontSize: '12px',
                              textDecoration: 'underline'
                            }}
                          >
                            View
                          </button>
                        </div>
                      </td>
                      <td style={{ padding: '12px 8px' }}>
                        <i className="fas fa-circle" style={{ fontSize: '6px', color: '#999' }}></i>
                      </td>
                      <td style={{ padding: '12px 8px', color: '#212529' }}>{order.date}</td>
                      <td style={{ padding: '12px 8px', color: '#4a90e2', fontWeight: '500' }}>{order.documentNumber}</td>
                      <td style={{ padding: '12px 8px', color: '#212529' }}>{order.vendor}</td>
                      <td style={{ padding: '12px 8px', color: '#212529' }}>{order.name}</td>
                      <td style={{ padding: '12px 8px', color: '#666', fontSize: '12px' }}>{order.memo}</td>
                      <td style={{ padding: '12px 8px', color: '#212529' }}>{order.item}</td>
                      <td style={{ padding: '12px 8px', color: '#212529', textAlign: 'center' }}>{order.itemQty}</td>
                      <td style={{ padding: '12px 8px', color: '#212529', textAlign: 'right' }}>{order.itemUnitPrice.toFixed(2)}</td>
                      <td style={{ padding: '12px 8px', color: '#212529', textAlign: 'right', fontWeight: '500' }}>
                        {order.amount.toFixed(2)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewIntercompanyTransferOrders;
