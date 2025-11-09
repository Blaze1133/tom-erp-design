import React from 'react';
import './Enquiries.css';

const ViewInventoryWorksheetDetail = ({ setCurrentPage }) => {
  // Dummy data
  const worksheetData = {
    documentNumber: 'INVWORK2025-001',
    status: 'COMPLETED',
    reference: 'INVWORK2025-001',
    adjustmentAccount: '50100 Cost Of Sales : Material Purcha',
    estimatedTotalValue: '6,825.00',
    transactionOrder: 'First transaction in day',
    date: '8/11/2025',
    postingPeriod: 'Nov 2025',
    memo: 'Monthly inventory worksheet for November',
    subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
    class: 'TOM : Projects',
    location: 'Hong Hang Shipyard',
    department: 'TOM : Engineering',
    requestedBy: 'John Smith'
  };

  const items = [
    {
      id: 1,
      item: 'Steel Plates - Grade A',
      description: 'High-grade steel plates for marine construction',
      units: 'pcs',
      qtyAsOfDateAbove: 500,
      valueAsOfDateAbove: 22750.00,
      newQty: 350,
      newValue: 15925.00
    }
  ];

  const handleEdit = () => {
    setCurrentPage('adjust-inventory-worksheet');
  };

  const handleBack = () => {
    setCurrentPage('view-inventory-worksheets');
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
          <div>
            <div style={{ fontSize: '13px', color: '#666', marginBottom: '2px' }}>Inventory Worksheet</div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>{worksheetData.documentNumber}</span>
              <span style={{ 
                background: '#28a745', 
                color: 'white', 
                padding: '3px 10px', 
                borderRadius: '3px',
                fontSize: '11px',
                fontWeight: '600',
                textTransform: 'uppercase'
              }}>
                {worksheetData.status}
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={handleBack} style={{ 
            padding: '8px 16px', 
            background: 'white', 
            border: '1px solid #ddd', 
            borderRadius: '4px',
            fontSize: '13px',
            cursor: 'pointer'
          }}>List</button>
          <button style={{ 
            padding: '8px 16px', 
            background: 'white', 
            border: '1px solid #ddd', 
            borderRadius: '4px',
            fontSize: '13px',
            cursor: 'pointer'
          }}>Search</button>
          <button style={{ 
            padding: '8px 16px', 
            background: 'white', 
            border: '1px solid #ddd', 
            borderRadius: '4px',
            fontSize: '13px',
            cursor: 'pointer'
          }}>Customize</button>
          <button style={{ 
            padding: '8px 16px', 
            background: 'white', 
            border: '1px solid #ddd', 
            borderRadius: '4px',
            fontSize: '13px',
            cursor: 'pointer'
          }}>More</button>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ 
        background: 'white', 
        padding: '12px 24px', 
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        gap: '8px'
      }}>
        <button onClick={handleEdit} style={{ 
          padding: '8px 16px', 
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
        }}>
          <i className="fas fa-edit"></i> Edit
        </button>
        <button onClick={handleBack} style={{ 
          padding: '8px 16px', 
          background: 'white', 
          color: '#333', 
          border: '1px solid #ddd', 
          borderRadius: '4px',
          fontSize: '13px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <i className="fas fa-arrow-left"></i> Back
        </button>
        <button style={{ 
          padding: '8px 16px', 
          background: 'white', 
          color: '#333', 
          border: '1px solid #ddd', 
          borderRadius: '4px',
          fontSize: '13px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <i className="fas fa-print"></i> Print
        </button>
        <button style={{ 
          padding: '8px 16px', 
          background: 'white', 
          color: '#333', 
          border: '1px solid #ddd', 
          borderRadius: '4px',
          fontSize: '13px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <i className="fas fa-file-pdf"></i> PDF
        </button>
      </div>

      <div style={{ padding: '24px' }}>
        {/* Primary Information */}
        <div style={{ 
          background: 'white', 
          borderRadius: '4px', 
          padding: '20px 24px',
          marginBottom: '16px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: '14px', 
            fontWeight: '600', 
            color: '#4a90e2',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <i className="fas fa-info-circle"></i>
            Primary Information
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', fontWeight: '600' }}>REFERENCE #</div>
              <div style={{ fontSize: '13px', color: '#333' }}>{worksheetData.reference}</div>
            </div>

            <div>
              <div style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', fontWeight: '600' }}>TRANSACTION ORDER</div>
              <div style={{ fontSize: '13px', color: '#333' }}>{worksheetData.transactionOrder}</div>
            </div>

            <div>
              <div style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', fontWeight: '600' }}>POSTING PERIOD</div>
              <div style={{ fontSize: '13px', color: '#333' }}>{worksheetData.postingPeriod}</div>
            </div>

            <div>
              <div style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', fontWeight: '600' }}>ADJUSTMENT ACCOUNT</div>
              <div style={{ fontSize: '13px', color: '#4a90e2' }}>{worksheetData.adjustmentAccount}</div>
            </div>

            <div>
              <div style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', fontWeight: '600' }}>DATE</div>
              <div style={{ fontSize: '13px', color: '#333' }}>{worksheetData.date}</div>
            </div>

            <div>
              <div style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', fontWeight: '600' }}>MEMO</div>
              <div style={{ fontSize: '13px', color: '#333' }}>{worksheetData.memo}</div>
            </div>

            <div>
              <div style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', fontWeight: '600' }}>ESTIMATED TOTAL VALUE</div>
              <div style={{ fontSize: '13px', color: '#333' }}>${worksheetData.estimatedTotalValue}</div>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div style={{ 
          background: 'white', 
          borderRadius: '4px', 
          padding: '20px 24px',
          marginBottom: '16px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: '14px', 
            fontWeight: '600', 
            color: '#4a90e2',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <i className="fas fa-tags"></i>
            Classification
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', fontWeight: '600' }}>SUBSIDIARY</div>
              <div style={{ fontSize: '13px', color: '#333' }}>{worksheetData.subsidiary}</div>
            </div>

            <div>
              <div style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', fontWeight: '600' }}>CLASS</div>
              <div style={{ fontSize: '13px', color: '#333' }}>{worksheetData.class}</div>
            </div>

            <div>
              <div style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', fontWeight: '600' }}>LOCATION</div>
              <div style={{ fontSize: '13px', color: '#333' }}>{worksheetData.location}</div>
            </div>

            <div>
              <div style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', fontWeight: '600' }}>DEPARTMENT</div>
              <div style={{ fontSize: '13px', color: '#333' }}>{worksheetData.department}</div>
            </div>

            <div>
              <div style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', marginBottom: '4px', fontWeight: '600' }}>REQUESTED BY</div>
              <div style={{ fontSize: '13px', color: '#333' }}>{worksheetData.requestedBy}</div>
            </div>
          </div>
        </div>

        {/* Adjustments */}
        <div style={{ 
          background: 'white', 
          borderRadius: '4px', 
          padding: '20px 24px',
          marginBottom: '16px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: '14px', 
            fontWeight: '600', 
            color: '#4a90e2',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <i className="fas fa-list"></i>
            Adjustments
          </h2>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: '#f8f9fa', borderBottom: '1px solid #e0e0e0' }}>
                  <th style={{ padding: '10px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>Item</th>
                  <th style={{ padding: '10px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>Description</th>
                  <th style={{ padding: '10px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>Units</th>
                  <th style={{ padding: '10px', textAlign: 'right', fontSize: '11px', fontWeight: '600', color: '#666' }}>Qty As Of Date Above</th>
                  <th style={{ padding: '10px', textAlign: 'right', fontSize: '11px', fontWeight: '600', color: '#666' }}>Value As Of Date Above</th>
                  <th style={{ padding: '10px', textAlign: 'right', fontSize: '11px', fontWeight: '600', color: '#666' }}>New Qty</th>
                  <th style={{ padding: '10px', textAlign: 'right', fontSize: '11px', fontWeight: '600', color: '#666' }}>New Value</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '10px' }}>{item.item}</td>
                    <td style={{ padding: '10px' }}>{item.description}</td>
                    <td style={{ padding: '10px' }}>{item.units}</td>
                    <td style={{ padding: '10px', textAlign: 'right' }}>{item.qtyAsOfDateAbove}</td>
                    <td style={{ padding: '10px', textAlign: 'right' }}>${item.valueAsOfDateAbove.toFixed(2)}</td>
                    <td style={{ padding: '10px', textAlign: 'right' }}>{item.newQty}</td>
                    <td style={{ padding: '10px', textAlign: 'right' }}>${item.newValue.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ 
            marginTop: '20px', 
            padding: '12px 16px', 
            background: '#f8f9fa', 
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '24px',
            fontSize: '13px'
          }}>
            <div>
              <span style={{ fontWeight: '600', color: '#666' }}>Quantity Difference:</span>
              <span style={{ marginLeft: '8px', color: '#dc3545', fontWeight: '600' }}>-150</span>
            </div>
            <div>
              <span style={{ fontWeight: '600', color: '#666' }}>Value Difference:</span>
              <span style={{ marginLeft: '8px', color: '#dc3545', fontWeight: '600' }}>-$6,825.00</span>
            </div>
            <div>
              <span style={{ fontWeight: '600', color: '#666' }}>Total New Value:</span>
              <span style={{ marginLeft: '8px', fontSize: '14px', fontWeight: '600', color: '#333' }}>$15,925.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewInventoryWorksheetDetail;
