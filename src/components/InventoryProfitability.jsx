import React, { useState } from 'react';
import './Enquiries.css';

const InventoryProfitability = () => {
  const [dateRange, setDateRange] = useState('this month');
  const [fromDate, setFromDate] = useState('1/12/2025');
  const [toDate, setToDate] = useState('31/12/2025');
  const [subsidiary, setSubsidiary] = useState('Tech Onshore MEP P...td. (Consolidated)');
  const [column, setColumn] = useState('Total');

  // Sample inventory profitability data
  const [inventoryData] = useState([
    {
      id: 1,
      item: 'Test Item',
      description: '',
      qtySold: 0,
      totalCost: 0.00,
      totalRevenue: 0.00,
      percentOfTotalRevenue: 0.00,
      grossProfit: 0.00,
      grossProfitPercent: 0.00
    }
  ]);

  const totalRow = {
    item: 'Total',
    description: '',
    qtySold: inventoryData.reduce((sum, item) => sum + item.qtySold, 0),
    totalCost: inventoryData.reduce((sum, item) => sum + item.totalCost, 0),
    totalRevenue: inventoryData.reduce((sum, item) => sum + item.totalRevenue, 0),
    percentOfTotalRevenue: 0.00,
    grossProfit: inventoryData.reduce((sum, item) => sum + item.grossProfit, 0),
    grossProfitPercent: 0.00
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const formatPercent = (percent) => {
    return `${percent.toFixed(2)}%`;
  };

  const handleRefresh = () => {
    console.log('Refreshing inventory profitability data...');
  };

  const handleCustomize = () => {
    console.log('Customizing report...');
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '4px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}>
        <h1 style={{
          margin: 0,
          fontSize: '18px',
          fontWeight: '600',
          color: '#333',
          borderBottom: '1px solid #e0e0e0',
          paddingBottom: '10px'
        }}>
          Inventory Profitability
        </h1>

        {/* Table */}
        <div style={{ marginTop: '20px' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '12px'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6' }}>
                <th style={{
                  padding: '8px',
                  textAlign: 'left',
                  fontWeight: '600',
                  fontSize: '11px',
                  color: '#495057',
                  border: '1px solid #dee2e6'
                }}>ITEM</th>
                <th style={{
                  padding: '8px',
                  textAlign: 'left',
                  fontWeight: '600',
                  fontSize: '11px',
                  color: '#495057',
                  border: '1px solid #dee2e6'
                }}>DESCRIPTION</th>
                <th style={{
                  padding: '8px',
                  textAlign: 'right',
                  fontWeight: '600',
                  fontSize: '11px',
                  color: '#495057',
                  border: '1px solid #dee2e6'
                }}>QTY. SOLD</th>
                <th style={{
                  padding: '8px',
                  textAlign: 'right',
                  fontWeight: '600',
                  fontSize: '11px',
                  color: '#495057',
                  border: '1px solid #dee2e6'
                }}>TOTAL COST</th>
                <th style={{
                  padding: '8px',
                  textAlign: 'right',
                  fontWeight: '600',
                  fontSize: '11px',
                  color: '#495057',
                  border: '1px solid #dee2e6'
                }}>TOTAL REVENUE</th>
                <th style={{
                  padding: '8px',
                  textAlign: 'right',
                  fontWeight: '600',
                  fontSize: '11px',
                  color: '#495057',
                  border: '1px solid #dee2e6'
                }}>% OF TOTAL REVENUE</th>
                <th style={{
                  padding: '8px',
                  textAlign: 'right',
                  fontWeight: '600',
                  fontSize: '11px',
                  color: '#495057',
                  border: '1px solid #dee2e6'
                }}>GROSS PROFIT</th>
                <th style={{
                  padding: '8px',
                  textAlign: 'right',
                  fontWeight: '600',
                  fontSize: '11px',
                  color: '#495057',
                  border: '1px solid #dee2e6'
                }}>GROSS PROFIT %</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((item, index) => (
                <tr key={item.id} style={{
                  backgroundColor: 'white',
                  borderBottom: '1px solid #dee2e6'
                }}>
                  <td style={{
                    padding: '8px',
                    fontSize: '12px',
                    border: '1px solid #dee2e6'
                  }}>{item.item}</td>
                  <td style={{
                    padding: '8px',
                    fontSize: '12px',
                    border: '1px solid #dee2e6'
                  }}>{item.description}</td>
                  <td style={{
                    padding: '8px',
                    fontSize: '12px',
                    textAlign: 'right',
                    border: '1px solid #dee2e6'
                  }}>{item.qtySold}</td>
                  <td style={{
                    padding: '8px',
                    fontSize: '12px',
                    textAlign: 'right',
                    border: '1px solid #dee2e6'
                  }}>{formatCurrency(item.totalCost)}</td>
                  <td style={{
                    padding: '8px',
                    fontSize: '12px',
                    textAlign: 'right',
                    border: '1px solid #dee2e6'
                  }}>{formatCurrency(item.totalRevenue)}</td>
                  <td style={{
                    padding: '8px',
                    fontSize: '12px',
                    textAlign: 'right',
                    border: '1px solid #dee2e6'
                  }}>{formatPercent(item.percentOfTotalRevenue)}</td>
                  <td style={{
                    padding: '8px',
                    fontSize: '12px',
                    textAlign: 'right',
                    border: '1px solid #dee2e6'
                  }}>{formatCurrency(item.grossProfit)}</td>
                  <td style={{
                    padding: '8px',
                    fontSize: '12px',
                    textAlign: 'right',
                    border: '1px solid #dee2e6'
                  }}>{formatPercent(item.grossProfitPercent)}</td>
                </tr>
              ))}
              {/* Total Row */}
              <tr style={{
                backgroundColor: '#f8f9fa',
                borderTop: '2px solid #495057',
                fontWeight: '600'
              }}>
                <td style={{
                  padding: '8px',
                  fontSize: '12px',
                  fontWeight: '600',
                  border: '1px solid #dee2e6'
                }}>{totalRow.item}</td>
                <td style={{
                  padding: '8px',
                  fontSize: '12px',
                  border: '1px solid #dee2e6'
                }}>{totalRow.description}</td>
                <td style={{
                  padding: '8px',
                  fontSize: '12px',
                  textAlign: 'right',
                  fontWeight: '600',
                  border: '1px solid #dee2e6'
                }}>{totalRow.qtySold}</td>
                <td style={{
                  padding: '8px',
                  fontSize: '12px',
                  textAlign: 'right',
                  fontWeight: '600',
                  border: '1px solid #dee2e6'
                }}>{formatCurrency(totalRow.totalCost)}</td>
                <td style={{
                  padding: '8px',
                  fontSize: '12px',
                  textAlign: 'right',
                  fontWeight: '600',
                  border: '1px solid #dee2e6'
                }}>{formatCurrency(totalRow.totalRevenue)}</td>
                <td style={{
                  padding: '8px',
                  fontSize: '12px',
                  textAlign: 'right',
                  fontWeight: '600',
                  border: '1px solid #dee2e6'
                }}>{formatPercent(totalRow.percentOfTotalRevenue)}</td>
                <td style={{
                  padding: '8px',
                  fontSize: '12px',
                  textAlign: 'right',
                  fontWeight: '600',
                  border: '1px solid #dee2e6'
                }}>{formatCurrency(totalRow.grossProfit)}</td>
                <td style={{
                  padding: '8px',
                  fontSize: '12px',
                  textAlign: 'right',
                  fontWeight: '600',
                  border: '1px solid #dee2e6'
                }}>{formatPercent(totalRow.grossProfitPercent)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Controls */}
      <div style={{
        backgroundColor: 'white',
        padding: '15px 20px',
        borderRadius: '4px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '15px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <label style={{ fontSize: '12px', fontWeight: '500', color: '#495057' }}>DATE:</label>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              style={{
                padding: '4px 8px',
                border: '1px solid #ced4da',
                borderRadius: '3px',
                fontSize: '12px',
                backgroundColor: 'white'
              }}
            >
              <option value="this month">this month</option>
              <option value="last month">last month</option>
              <option value="this year">this year</option>
              <option value="custom">custom</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <label style={{ fontSize: '12px', fontWeight: '500', color: '#495057' }}>FROM:</label>
            <input
              type="text"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              style={{
                padding: '4px 8px',
                border: '1px solid #ced4da',
                borderRadius: '3px',
                fontSize: '12px',
                width: '80px'
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <label style={{ fontSize: '12px', fontWeight: '500', color: '#495057' }}>TO:</label>
            <input
              type="text"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              style={{
                padding: '4px 8px',
                border: '1px solid #ced4da',
                borderRadius: '3px',
                fontSize: '12px',
                width: '80px'
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <label style={{ fontSize: '12px', fontWeight: '500', color: '#495057' }}>SUBSIDIARY CONTEXT:</label>
            <select
              value={subsidiary}
              onChange={(e) => setSubsidiary(e.target.value)}
              style={{
                padding: '4px 8px',
                border: '1px solid #ced4da',
                borderRadius: '3px',
                fontSize: '12px',
                minWidth: '200px'
              }}
            >
              <option value="Tech Onshore MEP P...td. (Consolidated)">Tech Onshore MEP P...td. (Consolidated)</option>
              <option value="Tech Marine Offshore (S) Pte Ltd">Tech Marine Offshore (S) Pte Ltd</option>
              <option value="TOM Offshore Marine Engineering Pte Ltd">TOM Offshore Marine Engineering Pte Ltd</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <label style={{ fontSize: '12px', fontWeight: '500', color: '#495057' }}>COLUMN:</label>
            <select
              value={column}
              onChange={(e) => setColumn(e.target.value)}
              style={{
                padding: '4px 8px',
                border: '1px solid #ced4da',
                borderRadius: '3px',
                fontSize: '12px'
              }}
            >
              <option value="Total">Total</option>
              <option value="By Location">By Location</option>
              <option value="By Department">By Department</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Find..."
            style={{
              padding: '4px 8px',
              border: '1px solid #ced4da',
              borderRadius: '3px',
              fontSize: '12px',
              width: '100px'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={handleRefresh}
            style={{
              padding: '6px 12px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              fontSize: '12px',
              cursor: 'pointer'
            }}
          >
            Refresh
          </button>
          <button
            onClick={handleCustomize}
            style={{
              padding: '6px 12px',
              border: '1px solid #ced4da',
              backgroundColor: 'white',
              borderRadius: '3px',
              fontSize: '12px',
              cursor: 'pointer'
            }}
          >
            Customize
          </button>
        </div>

        {/* Action Icons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={{
            padding: '6px 8px',
            border: '1px solid #ced4da',
            backgroundColor: 'white',
            borderRadius: '3px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-search" style={{ fontSize: '12px', color: '#6c757d' }}></i>
          </button>
          <button style={{
            padding: '6px 8px',
            border: '1px solid #ced4da',
            backgroundColor: 'white',
            borderRadius: '3px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-filter" style={{ fontSize: '12px', color: '#6c757d' }}></i>
          </button>
          <button style={{
            padding: '6px 8px',
            border: '1px solid #ced4da',
            backgroundColor: 'white',
            borderRadius: '3px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-list" style={{ fontSize: '12px', color: '#6c757d' }}></i>
          </button>
          <button style={{
            padding: '6px 8px',
            border: '1px solid #ced4da',
            backgroundColor: 'white',
            borderRadius: '3px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-chart-bar" style={{ fontSize: '12px', color: '#6c757d' }}></i>
          </button>
          <button style={{
            padding: '6px 8px',
            border: '1px solid #ced4da',
            backgroundColor: 'white',
            borderRadius: '3px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-file-excel" style={{ fontSize: '12px', color: '#28a745' }}></i>
          </button>
          <button style={{
            padding: '6px 8px',
            border: '1px solid #ced4da',
            backgroundColor: 'white',
            borderRadius: '3px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-file-pdf" style={{ fontSize: '12px', color: '#dc3545' }}></i>
          </button>
          <button style={{
            padding: '6px 8px',
            border: '1px solid #ced4da',
            backgroundColor: 'white',
            borderRadius: '3px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-file-word" style={{ fontSize: '12px', color: '#007bff' }}></i>
          </button>
          <button style={{
            padding: '6px 8px',
            border: '1px solid #ced4da',
            backgroundColor: 'white',
            borderRadius: '3px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-print" style={{ fontSize: '12px', color: '#6c757d' }}></i>
          </button>
          <button style={{
            padding: '6px 8px',
            border: '1px solid #ced4da',
            backgroundColor: 'white',
            borderRadius: '3px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-envelope" style={{ fontSize: '12px', color: '#6c757d' }}></i>
          </button>
          <button style={{
            padding: '6px 8px',
            border: '1px solid #ced4da',
            backgroundColor: 'white',
            borderRadius: '3px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-cog" style={{ fontSize: '12px', color: '#6c757d' }}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryProfitability;
