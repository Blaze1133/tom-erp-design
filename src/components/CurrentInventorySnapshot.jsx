import React, { useState } from 'react';
import './Enquiries.css';

const CurrentInventorySnapshot = () => {
  const [showParameters, setShowParameters] = useState(true);
  const [subsidiary, setSubsidiary] = useState('Tech Onshore MEP P...td. (Consolidated)');
  const [itemFilter, setItemFilter] = useState('All Items');

  // Sample inventory data
  const [inventoryData] = useState([
    {
      id: 1,
      item: 'Test Item',
      description: 'Sample Description',
      prefVendor: 'Vendor A',
      locations: {
        bokSengYard: { reorderPt: 0, preferredStock: 0, onHand: 0, onOrder: 0, committed: 0, toOrder: 0, inTransit: 0 },
        hongHangShipyard: { reorderPt: 0, preferredStock: 0, onHand: 0, onOrder: 0, committed: 0, toOrder: 0, inTransit: 0 },
        megaYard: { reorderPt: 0, preferredStock: 0, onHand: 0, onOrder: 0, committed: 0, toOrder: 0, inTransit: 0 },
        shipyardsConstruction: { reorderPt: 0, preferredStock: 0, onHand: 0, onOrder: 0, committed: 0, toOrder: 0, inTransit: 0 },
        singaporeMEP: { reorderPt: 0, preferredStock: 0, onHand: 0, onOrder: 0, committed: 0, toOrder: 0, inTransit: 0 },
        tom11: { reorderPt: 0, preferredStock: 0, onHand: 0, onOrder: 0, committed: 0, toOrder: 0, inTransit: 0 },
        tomExternalWorkshop: { reorderPt: 0, preferredStock: 0, onHand: 0, onOrder: 0, committed: 0, toOrder: 0, inTransit: 0 },
        tom13: { reorderPt: 0, preferredStock: 0, onHand: 0, onOrder: 0, committed: 0, toOrder: 0, inTransit: 0 }
      },
      total: { reorderPt: 0, preferredStock: 0, onHand: 0, onOrder: 0, committed: 0, toOrder: 0, inTransit: 0 }
    }
  ]);

  const locations = [
    { key: 'bokSengYard', label: 'Bok Seng Yard' },
    { key: 'hongHangShipyard', label: 'Hong Hang Shipyard' },
    { key: 'megaYard', label: 'Mega yard' },
    { key: 'shipyardsConstruction', label: 'Shipyards/Construction' },
    { key: 'singaporeMEP', label: 'Singapore(MEP)' },
    { key: 'tom11', label: 'TOM -11' },
    { key: 'tomExternalWorkshop', label: 'TOM External Workshop' },
    { key: 'tom13', label: 'TOM – 13' }
  ];

  const handleRefresh = () => {
    console.log('Refreshing inventory snapshot data...');
  };

  const handleCustomize = () => {
    console.log('Customizing report...');
  };

  return (
    <div className="enquiries-list">
      {/* Header */}
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-warehouse" style={{ color: '#007bff' }}></i>
          <h1>Current Inventory Snapshot</h1>
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
                <option>Tech Onshore MEP P...td. (Consolidated)</option>
                <option>Tech Marine Offshore (S) Pte Ltd</option>
                <option>TOM Offshore Marine Engineering Pte Ltd</option>
              </select>
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
              }}>ITEM FILTER</label>
              <select 
                value={itemFilter}
                onChange={(e) => setItemFilter(e.target.value)}
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
                <option>All Items</option>
                <option>Active Items</option>
                <option>Inactive Items</option>
                <option>Low Stock Items</option>
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
            Current Inventory Snapshot
          </h2>
          <span style={{ 
            marginLeft: 'auto', 
            fontSize: '0.875rem', 
            color: '#6c757d' 
          }}>
            {subsidiary}
          </span>
        </div>

        {/* Table with horizontal scroll */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
            fontSize: '0.75rem',
            minWidth: '2000px'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th rowSpan="2" style={{
                  padding: '0.75rem 0.5rem',
                  textAlign: 'left',
                  fontWeight: '600',
                  fontSize: '0.7rem',
                  color: '#6c757d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: '2px solid #dee2e6',
                  position: 'sticky',
                  left: 0,
                  backgroundColor: '#f8f9fa',
                  zIndex: 2,
                  minWidth: '120px'
                }}>ITEM</th>
                <th rowSpan="2" style={{
                  padding: '0.75rem 0.5rem',
                  textAlign: 'left',
                  fontWeight: '600',
                  fontSize: '0.7rem',
                  color: '#6c757d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: '2px solid #dee2e6',
                  minWidth: '150px'
                }}>DESCRIPTION</th>
                <th rowSpan="2" style={{
                  padding: '0.75rem 0.5rem',
                  textAlign: 'left',
                  fontWeight: '600',
                  fontSize: '0.7rem',
                  color: '#6c757d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: '2px solid #dee2e6',
                  minWidth: '120px'
                }}>PREF. VENDOR</th>
                
                {locations.map((location) => (
                  <th key={location.key} colSpan="7" style={{
                    padding: '0.5rem',
                    textAlign: 'center',
                    fontWeight: '600',
                    fontSize: '0.7rem',
                    color: '#495057',
                    borderBottom: '1px solid #dee2e6',
                    borderLeft: '2px solid #dee2e6'
                  }}>{location.label}</th>
                ))}
                
                <th colSpan="7" style={{
                  padding: '0.5rem',
                  textAlign: 'center',
                  fontWeight: '700',
                  fontSize: '0.7rem',
                  color: '#212529',
                  borderBottom: '1px solid #dee2e6',
                  borderLeft: '2px solid #495057',
                  backgroundColor: '#e9ecef'
                }}>TOTAL</th>
              </tr>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                {[...locations, { key: 'total', label: 'Total' }].map((location, idx) => (
                  <React.Fragment key={location.key}>
                    <th style={{
                      padding: '0.5rem 0.25rem',
                      textAlign: 'center',
                      fontWeight: '600',
                      fontSize: '0.65rem',
                      color: '#6c757d',
                      textTransform: 'uppercase',
                      borderBottom: '2px solid #dee2e6',
                      borderLeft: idx === locations.length ? '2px solid #495057' : (idx === 0 ? '2px solid #dee2e6' : 'none'),
                      backgroundColor: idx === locations.length ? '#e9ecef' : '#f8f9fa',
                      minWidth: '50px'
                    }}>Reorder Pt.</th>
                    <th style={{
                      padding: '0.5rem 0.25rem',
                      textAlign: 'center',
                      fontWeight: '600',
                      fontSize: '0.65rem',
                      color: '#6c757d',
                      textTransform: 'uppercase',
                      borderBottom: '2px solid #dee2e6',
                      backgroundColor: idx === locations.length ? '#e9ecef' : '#f8f9fa',
                      minWidth: '70px'
                    }}>Pref. Stock</th>
                    <th style={{
                      padding: '0.5rem 0.25rem',
                      textAlign: 'center',
                      fontWeight: '600',
                      fontSize: '0.65rem',
                      color: '#6c757d',
                      textTransform: 'uppercase',
                      borderBottom: '2px solid #dee2e6',
                      backgroundColor: idx === locations.length ? '#e9ecef' : '#f8f9fa',
                      minWidth: '60px'
                    }}>On Hand</th>
                    <th style={{
                      padding: '0.5rem 0.25rem',
                      textAlign: 'center',
                      fontWeight: '600',
                      fontSize: '0.65rem',
                      color: '#6c757d',
                      textTransform: 'uppercase',
                      borderBottom: '2px solid #dee2e6',
                      backgroundColor: idx === locations.length ? '#e9ecef' : '#f8f9fa',
                      minWidth: '60px'
                    }}>On Order</th>
                    <th style={{
                      padding: '0.5rem 0.25rem',
                      textAlign: 'center',
                      fontWeight: '600',
                      fontSize: '0.65rem',
                      color: '#6c757d',
                      textTransform: 'uppercase',
                      borderBottom: '2px solid #dee2e6',
                      backgroundColor: idx === locations.length ? '#e9ecef' : '#f8f9fa',
                      minWidth: '70px'
                    }}>Committed</th>
                    <th style={{
                      padding: '0.5rem 0.25rem',
                      textAlign: 'center',
                      fontWeight: '600',
                      fontSize: '0.65rem',
                      color: '#6c757d',
                      textTransform: 'uppercase',
                      borderBottom: '2px solid #dee2e6',
                      backgroundColor: idx === locations.length ? '#e9ecef' : '#f8f9fa',
                      minWidth: '60px'
                    }}>To Order</th>
                    <th style={{
                      padding: '0.5rem 0.25rem',
                      textAlign: 'center',
                      fontWeight: '600',
                      fontSize: '0.65rem',
                      color: '#6c757d',
                      textTransform: 'uppercase',
                      borderBottom: '2px solid #dee2e6',
                      backgroundColor: idx === locations.length ? '#e9ecef' : '#f8f9fa',
                      minWidth: '65px'
                    }}>In Transit</th>
                  </React.Fragment>
                ))}
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((item, index) => (
                <tr key={item.id} style={{
                  backgroundColor: index % 2 === 0 ? 'white' : '#f8f9fa',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e9ecef'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? 'white' : '#f8f9fa'}
                >
                  <td style={{
                    padding: '0.75rem 0.5rem',
                    fontSize: '0.75rem',
                    color: '#495057',
                    borderBottom: '1px solid #dee2e6',
                    position: 'sticky',
                    left: 0,
                    backgroundColor: index % 2 === 0 ? 'white' : '#f8f9fa',
                    zIndex: 1
                  }}>{item.item}</td>
                  <td style={{
                    padding: '0.75rem 0.5rem',
                    fontSize: '0.75rem',
                    color: '#6c757d',
                    borderBottom: '1px solid #dee2e6'
                  }}>{item.description}</td>
                  <td style={{
                    padding: '0.75rem 0.5rem',
                    fontSize: '0.75rem',
                    color: '#6c757d',
                    borderBottom: '1px solid #dee2e6'
                  }}>{item.prefVendor}</td>
                  
                  {locations.map((location, idx) => {
                    const data = item.locations[location.key];
                    return (
                      <React.Fragment key={location.key}>
                        <td style={{
                          padding: '0.5rem 0.25rem',
                          fontSize: '0.75rem',
                          textAlign: 'center',
                          color: '#495057',
                          borderBottom: '1px solid #dee2e6',
                          borderLeft: idx === 0 ? '2px solid #dee2e6' : 'none'
                        }}>{data.reorderPt}</td>
                        <td style={{
                          padding: '0.5rem 0.25rem',
                          fontSize: '0.75rem',
                          textAlign: 'center',
                          color: '#495057',
                          borderBottom: '1px solid #dee2e6'
                        }}>{data.preferredStock}</td>
                        <td style={{
                          padding: '0.5rem 0.25rem',
                          fontSize: '0.75rem',
                          textAlign: 'center',
                          color: '#495057',
                          borderBottom: '1px solid #dee2e6'
                        }}>{data.onHand}</td>
                        <td style={{
                          padding: '0.5rem 0.25rem',
                          fontSize: '0.75rem',
                          textAlign: 'center',
                          color: '#495057',
                          borderBottom: '1px solid #dee2e6'
                        }}>{data.onOrder}</td>
                        <td style={{
                          padding: '0.5rem 0.25rem',
                          fontSize: '0.75rem',
                          textAlign: 'center',
                          color: '#495057',
                          borderBottom: '1px solid #dee2e6'
                        }}>{data.committed}</td>
                        <td style={{
                          padding: '0.5rem 0.25rem',
                          fontSize: '0.75rem',
                          textAlign: 'center',
                          color: '#495057',
                          borderBottom: '1px solid #dee2e6'
                        }}>{data.toOrder}</td>
                        <td style={{
                          padding: '0.5rem 0.25rem',
                          fontSize: '0.75rem',
                          textAlign: 'center',
                          color: '#495057',
                          borderBottom: '1px solid #dee2e6'
                        }}>{data.inTransit}</td>
                      </React.Fragment>
                    );
                  })}
                  
                  {/* Total Column */}
                  <td style={{
                    padding: '0.5rem 0.25rem',
                    fontSize: '0.75rem',
                    textAlign: 'center',
                    color: '#212529',
                    fontWeight: '600',
                    borderBottom: '1px solid #dee2e6',
                    borderLeft: '2px solid #495057',
                    backgroundColor: '#f8f9fa'
                  }}>{item.total.reorderPt}</td>
                  <td style={{
                    padding: '0.5rem 0.25rem',
                    fontSize: '0.75rem',
                    textAlign: 'center',
                    color: '#212529',
                    fontWeight: '600',
                    borderBottom: '1px solid #dee2e6',
                    backgroundColor: '#f8f9fa'
                  }}>{item.total.preferredStock}</td>
                  <td style={{
                    padding: '0.5rem 0.25rem',
                    fontSize: '0.75rem',
                    textAlign: 'center',
                    color: '#212529',
                    fontWeight: '600',
                    borderBottom: '1px solid #dee2e6',
                    backgroundColor: '#f8f9fa'
                  }}>{item.total.onHand}</td>
                  <td style={{
                    padding: '0.5rem 0.25rem',
                    fontSize: '0.75rem',
                    textAlign: 'center',
                    color: '#212529',
                    fontWeight: '600',
                    borderBottom: '1px solid #dee2e6',
                    backgroundColor: '#f8f9fa'
                  }}>{item.total.onOrder}</td>
                  <td style={{
                    padding: '0.5rem 0.25rem',
                    fontSize: '0.75rem',
                    textAlign: 'center',
                    color: '#212529',
                    fontWeight: '600',
                    borderBottom: '1px solid #dee2e6',
                    backgroundColor: '#f8f9fa'
                  }}>{item.total.committed}</td>
                  <td style={{
                    padding: '0.5rem 0.25rem',
                    fontSize: '0.75rem',
                    textAlign: 'center',
                    color: '#212529',
                    fontWeight: '600',
                    borderBottom: '1px solid #dee2e6',
                    backgroundColor: '#f8f9fa'
                  }}>{item.total.toOrder}</td>
                  <td style={{
                    padding: '0.5rem 0.25rem',
                    fontSize: '0.75rem',
                    textAlign: 'center',
                    color: '#212529',
                    fontWeight: '600',
                    borderBottom: '1px solid #dee2e6',
                    backgroundColor: '#f8f9fa'
                  }}>{item.total.inTransit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CurrentInventorySnapshot;
