import React, { useState } from 'react';
import './Enquiries.css';

const ItemsPendingFulfillment = () => {
  const [showParameters, setShowParameters] = useState(true);
  const [asOfDate, setAsOfDate] = useState('5/12/2025');
  const [subsidiary, setSubsidiary] = useState('Tech Onshore MEP P. td. (Consolidated)');

  // Sample pending fulfillment data
  const [pendingData] = useState([
    {
      id: 1,
      category: 'Non-Inventory Item',
      items: [
        {
          id: 2,
          subCategory: 'PROJECT ITEM',
          orders: [
            {
              id: 3,
              date: '4/1/2022',
              transactionType: 'Sales Order',
              documentNumber: 'S2100083',
              customer: '613 Keppel Fels Ltd-Prd : 357-1 Drject',
              ordered: 1,
              fulfilled: 0,
              committed: 0
            }
          ]
        }
      ]
    },
    {
      id: 4,
      category: 'Supply Item',
      items: [
        {
          id: 5,
          subCategory: null,
          orders: [
            {
              id: 6,
              date: '2/1/2022',
              transactionType: 'Sales Order',
              documentNumber: 'S2100090',
              customer: '612 Hose Pte Ltd : 22-0001 Supply of Aluminium electrodes',
              ordered: 1,
              fulfilled: 0,
              committed: 0
            }
          ]
        }
      ]
    }
  ]);

  const handleRefresh = () => {
    console.log('Refreshing items pending fulfillment data...');
  };

  const handleCustomize = () => {
    console.log('Customizing report...');
  };

  const calculateTotals = (orders) => {
    return orders.reduce((acc, order) => ({
      ordered: acc.ordered + order.ordered,
      fulfilled: acc.fulfilled + order.fulfilled,
      committed: acc.committed + order.committed
    }), { ordered: 0, fulfilled: 0, committed: 0 });
  };

  return (
    <div className="enquiries-list">
      {/* Header */}
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-clipboard-list" style={{ color: '#007bff' }}></i>
          <h1>Items Pending Fulfillment</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <i className="fas fa-list"></i>
            View Detail
          </button>
          <button className="btn-view-option" onClick={handleRefresh} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <i className="fas fa-sync-alt"></i>
            Refresh
          </button>
          <button className="btn-view-option" onClick={handleCustomize} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <i className="fas fa-cog"></i>
            Customize
          </button>
        </div>
      </div>

      {/* Report Parameters Section */}
      <div style={{ 
        background: 'white', 
        borderRadius: '8px', 
        padding: '1.5rem', 
        marginBottom: '1.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div 
          onClick={() => setShowParameters(!showParameters)}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            cursor: 'pointer',
            marginBottom: showParameters ? '1.5rem' : '0',
            color: '#495057',
            fontWeight: '500'
          }}
        >
          <i className={`fas fa-filter`} style={{ color: '#007bff' }}></i>
          <span>Report Parameters</span>
        </div>

        {showParameters && (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem' 
          }}>
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontSize: '0.75rem', 
                fontWeight: '600', 
                color: '#6c757d',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>AS OF DATE</label>
              <input 
                type="text"
                value={asOfDate}
                onChange={(e) => setAsOfDate(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.6rem 0.75rem',
                  border: '1px solid #ced4da',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  backgroundColor: 'white'
                }}
              />
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontSize: '0.75rem', 
                fontWeight: '600', 
                color: '#6c757d',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>SUBSIDIARY CONTEXT</label>
              <select 
                value={subsidiary}
                onChange={(e) => setSubsidiary(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.6rem 0.75rem',
                  border: '1px solid #ced4da',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}
              >
                <option>Tech Onshore MEP P. td. (Consolidated)</option>
                <option>Tech Marine Offshore (S) Pte Ltd</option>
                <option>TOM Offshore Marine Engineering Pte Ltd</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Export Buttons */}
      <div style={{ 
        background: 'white', 
        borderRadius: '8px', 
        padding: '1rem 1.5rem', 
        marginBottom: '1.5rem',
        display: 'flex',
        gap: '0.75rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <button style={{
          padding: '0.5rem 1rem',
          border: '1px solid #28a745',
          backgroundColor: 'white',
          borderRadius: '6px',
          fontSize: '0.875rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#28a745',
          fontWeight: '500'
        }}>
          <i className="fas fa-file-excel"></i>
          Excel
        </button>
        <button style={{
          padding: '0.5rem 1rem',
          border: '1px solid #dc3545',
          backgroundColor: 'white',
          borderRadius: '6px',
          fontSize: '0.875rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#dc3545',
          fontWeight: '500'
        }}>
          <i className="fas fa-file-pdf"></i>
          PDF
        </button>
        <button style={{
          padding: '0.5rem 1rem',
          border: '1px solid #007bff',
          backgroundColor: 'white',
          borderRadius: '6px',
          fontSize: '0.875rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#007bff',
          fontWeight: '500'
        }}>
          <i className="fas fa-file-word"></i>
          Word
        </button>
        <button style={{
          padding: '0.5rem 1rem',
          border: '1px solid #6c757d',
          backgroundColor: 'white',
          borderRadius: '6px',
          fontSize: '0.875rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#6c757d',
          fontWeight: '500'
        }}>
          <i className="fas fa-print"></i>
          Print
        </button>
      </div>

      {/* Report Content */}
      <div style={{ 
        background: 'white', 
        borderRadius: '8px', 
        padding: '1.5rem', 
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem', 
          marginBottom: '1.5rem',
          paddingBottom: '1rem',
          borderBottom: '2px solid #e9ecef'
        }}>
          <i className="fas fa-table" style={{ color: '#007bff' }}></i>
          <h2 style={{ 
            margin: 0, 
            fontSize: '1rem', 
            fontWeight: '600', 
            color: '#495057' 
          }}>
            Items Pending Fulfillment
          </h2>
          <span style={{ 
            marginLeft: 'auto', 
            fontSize: '0.875rem', 
            color: '#6c757d' 
          }}>
            As of: {asOfDate} | {subsidiary}
          </span>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
            fontSize: '0.875rem'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th style={{
                  padding: '0.75rem 1rem',
                  textAlign: 'left',
                  fontWeight: '600',
                  fontSize: '0.75rem',
                  color: '#6c757d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: '2px solid #dee2e6'
                }}>ITEM</th>
                <th style={{
                  padding: '0.75rem 1rem',
                  textAlign: 'left',
                  fontWeight: '600',
                  fontSize: '0.75rem',
                  color: '#6c757d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: '2px solid #dee2e6'
                }}>DATE</th>
                <th style={{
                  padding: '0.75rem 1rem',
                  textAlign: 'left',
                  fontWeight: '600',
                  fontSize: '0.75rem',
                  color: '#6c757d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: '2px solid #dee2e6'
                }}>TRANSACTION TYPE</th>
                <th style={{
                  padding: '0.75rem 1rem',
                  textAlign: 'left',
                  fontWeight: '600',
                  fontSize: '0.75rem',
                  color: '#6c757d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: '2px solid #dee2e6'
                }}>DOCUMENT NUMBER</th>
                <th style={{
                  padding: '0.75rem 1rem',
                  textAlign: 'left',
                  fontWeight: '600',
                  fontSize: '0.75rem',
                  color: '#6c757d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: '2px solid #dee2e6'
                }}>CUSTOMER</th>
                <th style={{
                  padding: '0.75rem 1rem',
                  textAlign: 'right',
                  fontWeight: '600',
                  fontSize: '0.75rem',
                  color: '#6c757d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: '2px solid #dee2e6'
                }}>ORDERED</th>
                <th style={{
                  padding: '0.75rem 1rem',
                  textAlign: 'right',
                  fontWeight: '600',
                  fontSize: '0.75rem',
                  color: '#6c757d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: '2px solid #dee2e6'
                }}>FULFILLED</th>
                <th style={{
                  padding: '0.75rem 1rem',
                  textAlign: 'right',
                  fontWeight: '600',
                  fontSize: '0.75rem',
                  color: '#6c757d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: '2px solid #dee2e6'
                }}>COMMITTED</th>
              </tr>
            </thead>
            <tbody>
              {pendingData.map((category) => (
                <React.Fragment key={category.id}>
                  {/* Main Category Header */}
                  <tr style={{ backgroundColor: '#e9ecef' }}>
                    <td colSpan="8" style={{
                      padding: '0.75rem 1rem',
                      fontSize: '0.875rem',
                      fontWeight: '700',
                      color: '#212529',
                      borderBottom: '1px solid #dee2e6'
                    }}>
                      <i className="fas fa-minus-square" style={{ marginRight: '0.5rem', color: '#6c757d' }}></i>
                      {category.category}
                    </td>
                  </tr>
                  
                  {/* Items within category */}
                  {category.items.map((item) => (
                    <React.Fragment key={item.id}>
                      {item.subCategory && (
                        <tr style={{ backgroundColor: '#f8f9fa' }}>
                          <td colSpan="8" style={{
                            padding: '0.75rem 1rem 0.75rem 3rem',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            color: '#495057',
                            borderBottom: '1px solid #dee2e6'
                          }}>
                            <i className="fas fa-minus-square" style={{ marginRight: '0.5rem', color: '#6c757d' }}></i>
                            {item.subCategory}
                          </td>
                        </tr>
                      )}
                      
                      {/* Orders */}
                      {item.orders.map((order, index) => (
                        <tr key={order.id} style={{
                          backgroundColor: index % 2 === 0 ? 'white' : '#f8f9fa',
                          transition: 'background-color 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e9ecef'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? 'white' : '#f8f9fa'}
                        >
                          <td style={{
                            padding: '0.75rem 1rem 0.75rem 5rem',
                            fontSize: '0.875rem',
                            color: '#495057',
                            borderBottom: '1px solid #dee2e6'
                          }}></td>
                          <td style={{
                            padding: '0.75rem 1rem',
                            fontSize: '0.875rem',
                            color: '#495057',
                            borderBottom: '1px solid #dee2e6'
                          }}>{order.date}</td>
                          <td style={{
                            padding: '0.75rem 1rem',
                            fontSize: '0.875rem',
                            color: '#495057',
                            borderBottom: '1px solid #dee2e6'
                          }}>{order.transactionType}</td>
                          <td style={{
                            padding: '0.75rem 1rem',
                            fontSize: '0.875rem',
                            color: '#007bff',
                            borderBottom: '1px solid #dee2e6',
                            cursor: 'pointer'
                          }}>{order.documentNumber}</td>
                          <td style={{
                            padding: '0.75rem 1rem',
                            fontSize: '0.875rem',
                            color: '#495057',
                            borderBottom: '1px solid #dee2e6'
                          }}>{order.customer}</td>
                          <td style={{
                            padding: '0.75rem 1rem',
                            fontSize: '0.875rem',
                            textAlign: 'right',
                            color: '#495057',
                            borderBottom: '1px solid #dee2e6'
                          }}>{order.ordered}</td>
                          <td style={{
                            padding: '0.75rem 1rem',
                            fontSize: '0.875rem',
                            textAlign: 'right',
                            color: '#495057',
                            borderBottom: '1px solid #dee2e6'
                          }}>{order.fulfilled}</td>
                          <td style={{
                            padding: '0.75rem 1rem',
                            fontSize: '0.875rem',
                            textAlign: 'right',
                            color: '#495057',
                            borderBottom: '1px solid #dee2e6'
                          }}>{order.committed}</td>
                        </tr>
                      ))}
                      
                      {/* Sub-category Total */}
                      {item.subCategory && (
                        <tr style={{ backgroundColor: '#f8f9fa' }}>
                          <td colSpan="5" style={{
                            padding: '0.75rem 1rem 0.75rem 5rem',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            color: '#212529',
                            borderBottom: '1px solid #dee2e6'
                          }}>Total - {item.subCategory}</td>
                          <td style={{
                            padding: '0.75rem 1rem',
                            fontSize: '0.875rem',
                            textAlign: 'right',
                            fontWeight: '600',
                            color: '#212529',
                            borderBottom: '1px solid #dee2e6'
                          }}>{calculateTotals(item.orders).ordered}</td>
                          <td style={{
                            padding: '0.75rem 1rem',
                            fontSize: '0.875rem',
                            textAlign: 'right',
                            fontWeight: '600',
                            color: '#212529',
                            borderBottom: '1px solid #dee2e6'
                          }}>{calculateTotals(item.orders).fulfilled}</td>
                          <td style={{
                            padding: '0.75rem 1rem',
                            fontSize: '0.875rem',
                            textAlign: 'right',
                            fontWeight: '600',
                            color: '#212529',
                            borderBottom: '1px solid #dee2e6'
                          }}>{calculateTotals(item.orders).committed}</td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                  
                  {/* Category Total */}
                  <tr style={{ backgroundColor: '#e9ecef' }}>
                    <td colSpan="5" style={{
                      padding: '0.75rem 1rem 0.75rem 3rem',
                      fontSize: '0.875rem',
                      fontWeight: '700',
                      color: '#212529',
                      borderBottom: '1px solid #dee2e6'
                    }}>Total - {category.category}</td>
                    <td style={{
                      padding: '0.75rem 1rem',
                      fontSize: '0.875rem',
                      textAlign: 'right',
                      fontWeight: '700',
                      color: '#212529',
                      borderBottom: '1px solid #dee2e6'
                    }}>{category.items.reduce((sum, item) => sum + calculateTotals(item.orders).ordered, 0)}</td>
                    <td style={{
                      padding: '0.75rem 1rem',
                      fontSize: '0.875rem',
                      textAlign: 'right',
                      fontWeight: '700',
                      color: '#212529',
                      borderBottom: '1px solid #dee2e6'
                    }}>{category.items.reduce((sum, item) => sum + calculateTotals(item.orders).fulfilled, 0)}</td>
                    <td style={{
                      padding: '0.75rem 1rem',
                      fontSize: '0.875rem',
                      textAlign: 'right',
                      fontWeight: '700',
                      color: '#212529',
                      borderBottom: '1px solid #dee2e6'
                    }}>{category.items.reduce((sum, item) => sum + calculateTotals(item.orders).committed, 0)}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ItemsPendingFulfillment;
