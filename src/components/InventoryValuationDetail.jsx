import React, { useState } from 'react';
import './Enquiries.css';

const InventoryValuationDetail = ({ onBackClick }) => {
  const [showParameters, setShowParameters] = useState(true);
  const [asOfDate, setAsOfDate] = useState('Dec 2025');
  const [subsidiary, setSubsidiary] = useState('Tech Onshore MEP P...td. (Consolidated)');

  // Sample inventory valuation detail data
  const [inventoryData] = useState([
    {
      id: 1,
      item: 'Inventory Item',
      children: [
        {
          id: 2,
          item: 'Test Item',
          transactions: []
        }
      ]
    }
  ]);

  const handleRefresh = () => {
    console.log('Refreshing inventory valuation detail data...');
  };

  const handleCustomize = () => {
    console.log('Customizing report...');
  };

  const handleBackToSummary = () => {
    if (onBackClick) {
      onBackClick();
    }
  };

  return (
    <div className="enquiries-list">
      {/* Header */}
      <div className="list-header">
        <div className="list-title">
          <i className="fas fa-box-open" style={{ color: '#007bff' }}></i>
          <h1>Inventory Valuation Detail</h1>
        </div>
        <div className="list-actions">
          <button className="btn-view-option" onClick={handleBackToSummary} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <i className="fas fa-arrow-left"></i>
            Back to Summary
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
              <select 
                value={asOfDate}
                onChange={(e) => setAsOfDate(e.target.value)}
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
                <option>Dec 2025</option>
                <option>Nov 2025</option>
                <option>Oct 2025</option>
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
            Inventory Valuation Detail
          </h2>
          <span style={{ 
            marginLeft: 'auto', 
            fontSize: '0.875rem', 
            color: '#6c757d' 
          }}>
            {subsidiary}
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
                }}>DESCRIPTION</th>
                <th style={{
                  padding: '0.75rem 1rem',
                  textAlign: 'right',
                  fontWeight: '600',
                  fontSize: '0.75rem',
                  color: '#6c757d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: '2px solid #dee2e6'
                }}>QTY</th>
                <th style={{
                  padding: '0.75rem 1rem',
                  textAlign: 'right',
                  fontWeight: '600',
                  fontSize: '0.75rem',
                  color: '#6c757d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: '2px solid #dee2e6'
                }}>UNIT VALUE</th>
                <th style={{
                  padding: '0.75rem 1rem',
                  textAlign: 'right',
                  fontWeight: '600',
                  fontSize: '0.75rem',
                  color: '#6c757d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: '2px solid #dee2e6'
                }}>INV. VALUE</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((category) => (
                <React.Fragment key={category.id}>
                  {/* Category Header */}
                  <tr style={{ backgroundColor: '#e9ecef' }}>
                    <td colSpan="8" style={{
                      padding: '0.75rem 1rem',
                      fontSize: '0.875rem',
                      fontWeight: '700',
                      color: '#212529',
                      borderBottom: '1px solid #dee2e6'
                    }}>
                      <i className="fas fa-minus-square" style={{ marginRight: '0.5rem', color: '#6c757d' }}></i>
                      {category.item}
                    </td>
                  </tr>
                  
                  {/* Sub-items */}
                  {category.children.map((item) => (
                    <React.Fragment key={item.id}>
                      <tr style={{ backgroundColor: '#f8f9fa' }}>
                        <td colSpan="8" style={{
                          padding: '0.75rem 1rem 0.75rem 3rem',
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          color: '#495057',
                          borderBottom: '1px solid #dee2e6'
                        }}>
                          <i className="fas fa-minus-square" style={{ marginRight: '0.5rem', color: '#6c757d' }}></i>
                          {item.item}
                        </td>
                      </tr>
                      
                      {/* Item Total */}
                      <tr style={{ backgroundColor: 'white' }}>
                        <td colSpan="8" style={{
                          padding: '0.75rem 1rem 0.75rem 5rem',
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          color: '#212529',
                          borderBottom: '1px solid #dee2e6'
                        }}>Total - {item.item}</td>
                      </tr>
                    </React.Fragment>
                  ))}
                  
                  {/* Category Total */}
                  <tr style={{ backgroundColor: '#f8f9fa' }}>
                    <td colSpan="8" style={{
                      padding: '0.75rem 1rem 0.75rem 3rem',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#212529',
                      borderBottom: '1px solid #dee2e6'
                    }}>Total - {category.item}</td>
                  </tr>
                </React.Fragment>
              ))}
              
              {/* Grand Total */}
              <tr style={{
                backgroundColor: '#e9ecef',
                borderTop: '3px solid #495057'
              }}>
                <td colSpan="8" style={{
                  padding: '0.75rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  color: '#212529',
                  borderBottom: '2px solid #495057'
                }}>Total</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryValuationDetail;
