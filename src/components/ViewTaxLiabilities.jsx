import React, { useState } from 'react';
import './Enquiries.css';

const ViewTaxLiabilities = ({ setCurrentPage }) => {
  const [viewType, setViewType] = useState('Vendor Bills');

  // Empty state - no records to show
  const taxLiabilities = [];

  const handleNewTransaction = () => {
    setCurrentPage('write-tax-liability');
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
          <i className="fas fa-file-invoice-dollar" style={{ fontSize: '20px', color: '#4a90e2' }}></i>
          <h1 style={{ margin: 0, fontSize: '20px', fontWeight: '600' }}>Tax Liability Cheques</h1>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            style={{
              padding: '8px 24px',
              background: '#4a90e2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              minWidth: '80px'
            }}
          >
            List
          </button>
          <button 
            style={{
              padding: '8px 24px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              minWidth: '80px'
            }}
          >
            Search
          </button>
          <button 
            style={{
              padding: '8px 24px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              minWidth: '100px'
            }}
          >
            Audit Trail
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div style={{ padding: '24px' }}>
        <div style={{ background: 'white', borderRadius: '8px', padding: '20px' }}>
          
          {/* View and New Transaction */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <label style={{ fontSize: '14px', color: '#333', fontWeight: '500' }}>VIEW:</label>
              <select 
                value={viewType}
                onChange={(e) => setViewType(e.target.value)}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '14px',
                  minWidth: '200px',
                  cursor: 'pointer',
                  background: 'white'
                }}
              >
                <option>Vendor Bills</option>
                <option>All Tax Liabilities</option>
                <option>Recent Tax Liabilities</option>
              </select>
              <button 
                style={{
                  padding: '8px 20px',
                  background: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  minWidth: '120px'
                }}
              >
                Edit View
              </button>
            </div>
            <button 
              onClick={handleNewTransaction}
              style={{
                padding: '8px 24px',
                background: '#4a90e2',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: '500',
                fontSize: '14px',
                minWidth: '160px'
              }}
            >
              <i className="fas fa-plus"></i> New Transaction
            </button>
          </div>

          {/* Filters */}
          <div style={{ marginBottom: '20px' }}>
            <button style={{
              padding: '8px 20px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
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
            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{
                padding: '8px 16px',
                background: 'white',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                minWidth: '40px'
              }}>
                <i className="fas fa-download"></i>
              </button>
              <button style={{
                padding: '8px 16px',
                background: 'white',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                minWidth: '40px'
              }}>
                <i className="fas fa-save"></i>
              </button>
              <button style={{
                padding: '8px 16px',
                background: 'white',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                minWidth: '40px'
              }}>
                <i className="fas fa-print"></i>
              </button>
              <button style={{
                padding: '8px 20px',
                background: 'white',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                minWidth: '60px'
              }}>
                EDIT
              </button>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', color: '#666' }}>QUICK SORT:</span>
              <select style={{
                padding: '8px 16px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                cursor: 'pointer',
                background: 'white',
                minWidth: '150px'
              }}>
                <option>Date</option>
                <option>Document Number</option>
                <option>Amount</option>
              </select>
              <span style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>
                TOTAL: 0
              </span>
            </div>
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              fontSize: '13px'
            }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #dee2e6' }}>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '100px' }}>
                    EDIT | VIEW
                  </th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '100px' }}>ORDER TYPE</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '200px' }}>SUBSIDIARY</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '100px' }}>DATE</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '110px' }}>AS-OF DATE</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '100px' }}>PERIOD</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '110px' }}>TAX PERIOD</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '140px' }}>DOCUMENT NUMBER</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '150px' }}>NAME</th>
                  <th style={{ padding: '14px 12px', textAlign: 'right', fontWeight: '600', color: '#495057', fontSize: '11px', width: '130px' }}>AMOUNT (NET OF TAX)</th>
                  <th style={{ padding: '14px 12px', textAlign: 'right', fontWeight: '600', color: '#495057', fontSize: '11px', width: '100px' }}>TAX TOTAL</th>
                  <th style={{ padding: '14px 12px', textAlign: 'right', fontWeight: '600', color: '#495057', fontSize: '11px', width: '100px' }}>AMOUNT</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '280px' }}>ACCOUNT</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '150px' }}>STATUS</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '150px' }}>MEMO</th>
                  <th style={{ padding: '14px 12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px', width: '200px' }}>MATERIAL SPECIFICATION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="16" style={{ padding: '40px', textAlign: 'center', color: '#999', fontSize: '14px' }}>
                    No records to show.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTaxLiabilities;
