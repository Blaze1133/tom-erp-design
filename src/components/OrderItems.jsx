import React, { useState } from 'react';
import './Enquiries.css';

const OrderItems = ({ setCurrentPage }) => {
  const [location, setLocation] = useState('- All -');
  const [department, setDepartment] = useState('');
  const [vendor, setVendor] = useState('- All -');
  const [includePreferredVendor, setIncludePreferredVendor] = useState(true);
  const [includeNonPreferredVendor, setIncludeNonPreferredVendor] = useState(false);
  const [parentItem, setParentItem] = useState('');
  const [minimumQuantity, setMinimumQuantity] = useState('TO BE REPAIRED');

  const locationOptions = [
    '- All -',
    'Bok Seng Yard',
    'Hong Hang Shipyard',
    'Mega yard',
    'MEP MARINE CC',
    'Shipyards/Construction',
    'Singapore (TDQ)',
    'Singapore (TEA)',
    'Singapore(MEP)',
    'TOM -11',
    'TOM External Workshop'
  ];

  const departmentOptions = [
    '',
    'TOM : Facility',
    'TOM : Finance',
    'TOM : Finance : Internal Transfer',
    'TOM : Human Resource',
    'TOM : IT',
    'TOM : Logistic',
    'TOM : Operating'
  ];

  const vendorOptions = [
    '- All -',
    'A1 Engineering Services Pte Ltd',
    'Pacific Shipping Ltd',
    'Oceanic Engineering Pte Ltd',
    'Marine Solutions Co',
    'Tech Supply Chain Pte Ltd'
  ];

  const minimumQuantityOptions = [
    'TO BE REPAIRED',
    'TO BE REPLACED',
    'TO BE TAXED'
  ];

  const handleSubmit = () => {
    console.log('Submitting order items...');
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
          <i className="fas fa-shopping-cart" style={{ fontSize: '20px', color: '#4a90e2' }}></i>
          <h1 style={{ margin: 0, fontSize: '20px', fontWeight: '600' }}>Order Items</h1>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={{
            padding: '8px 16px',
            background: 'white',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '13px'
          }}>
            More
          </button>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px' }}>
        <div style={{ background: 'white', borderRadius: '8px', padding: '24px' }}>
          
          {/* Submit Button at Top */}
          <div style={{ marginBottom: '24px' }}>
            <button 
              onClick={handleSubmit}
              style={{
                padding: '10px 24px',
                background: '#4a90e2',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '500'
              }}
            >
              Submit
            </button>
          </div>

          {/* Filters Section */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '20px',
            marginBottom: '24px'
          }}>
            
            {/* Left Column */}
            <div>
              {/* Location */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ 
                  display: 'block', 
                  fontSize: '11px', 
                  fontWeight: '600', 
                  color: '#666', 
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                  letterSpacing: '0.5px'
                }}>
                  LOCATION
                </label>
                <select 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '13px',
                    cursor: 'pointer',
                    background: 'white'
                  }}
                >
                  {locationOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Department */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ 
                  display: 'block', 
                  fontSize: '11px', 
                  fontWeight: '600', 
                  color: '#666', 
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                  letterSpacing: '0.5px'
                }}>
                  DEPARTMENT
                </label>
                <select 
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '13px',
                    cursor: 'pointer',
                    background: 'white'
                  }}
                >
                  {departmentOptions.map(option => (
                    <option key={option} value={option}>{option || '- Select -'}</option>
                  ))}
                </select>
              </div>

              {/* Vendor */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ 
                  display: 'block', 
                  fontSize: '11px', 
                  fontWeight: '600', 
                  color: '#666', 
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                  letterSpacing: '0.5px'
                }}>
                  VENDOR
                </label>
                <select 
                  value={vendor}
                  onChange={(e) => setVendor(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '13px',
                    cursor: 'pointer',
                    background: 'white'
                  }}
                >
                  {vendorOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Checkboxes */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <input 
                    type="checkbox"
                    checked={includePreferredVendor}
                    onChange={(e) => setIncludePreferredVendor(e.target.checked)}
                    style={{ cursor: 'pointer' }}
                  />
                  <label style={{ margin: 0, fontSize: '13px', cursor: 'pointer' }}>
                    INCLUDE ITEMS WITH NO PREFERRED VENDOR
                  </label>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input 
                    type="checkbox"
                    checked={includeNonPreferredVendor}
                    onChange={(e) => setIncludeNonPreferredVendor(e.target.checked)}
                    style={{ cursor: 'pointer' }}
                  />
                  <label style={{ margin: 0, fontSize: '13px', cursor: 'pointer' }}>
                    INCLUDE ITEMS WHERE VENDOR IS NOT PREFERRED
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Parent Item */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ 
                  display: 'block', 
                  fontSize: '11px', 
                  fontWeight: '600', 
                  color: '#666', 
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                  letterSpacing: '0.5px'
                }}>
                  PARENT ITEM
                </label>
                <input 
                  type="text"
                  value={parentItem}
                  onChange={(e) => setParentItem(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '13px'
                  }}
                />
              </div>

              {/* Minimum Quantity */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ 
                  display: 'block', 
                  fontSize: '11px', 
                  fontWeight: '600', 
                  color: '#666', 
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                  letterSpacing: '0.5px'
                }}>
                  MINIMUM QUANTITY
                </label>
                <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
                  {minimumQuantityOptions.map(option => (
                    <div key={option} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <input 
                        type="radio"
                        name="minimumQuantity"
                        checked={minimumQuantity === option}
                        onChange={() => setMinimumQuantity(option)}
                        style={{ cursor: 'pointer' }}
                      />
                      <label style={{ margin: 0, fontSize: '13px', cursor: 'pointer' }}>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Total */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'flex-end',
            padding: '16px 0',
            borderTop: '1px solid #e0e0e0',
            borderBottom: '1px solid #e0e0e0',
            marginBottom: '20px'
          }}>
            <div style={{ fontSize: '14px', fontWeight: '600' }}>
              <span style={{ color: '#666', marginRight: '12px' }}>TOTAL:</span>
              <span style={{ color: '#333' }}>0.00</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
            <button style={{
              padding: '8px 16px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500'
            }}>
              Mark All
            </button>
            <button style={{
              padding: '8px 16px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500'
            }}>
              Unmark All
            </button>
            <button style={{
              padding: '8px 16px',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500'
            }}>
              Customize
            </button>
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              fontSize: '13px'
            }}>
              <thead>
                <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px' }}></th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px' }}>LOCATION</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px' }}>DEPARTMENT</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px' }}>CLASS</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px' }}>ITEM #</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px' }}>DESCRIPTION</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px' }}>VENDOR</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px' }}>CURRENCY</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#495057', fontSize: '11px' }}>UNITS</th>
                  <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600', color: '#495057', fontSize: '11px' }}>AVAILABLE</th>
                  <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600', color: '#495057', fontSize: '11px' }}>BACK ORDERED</th>
                  <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600', color: '#495057', fontSize: '11px' }}>ON ORDER</th>
                  <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600', color: '#495057', fontSize: '11px' }}>REORDER POINT</th>
                  <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600', color: '#495057', fontSize: '11px' }}>PREFERRED STOCK LEVEL</th>
                  <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600', color: '#495057', fontSize: '11px' }}>QUANTITY</th>
                  <th style={{ padding: '12px', textAlign: 'right', fontWeight: '600', color: '#495057', fontSize: '11px' }}>RATE</th>
                  <th style={{ padding: '12px', textAlign: 'right', fontWeight: '600', color: '#495057', fontSize: '11px' }}>AUTO (FORMULA CURRENCY)</th>
                  <th style={{ padding: '12px', textAlign: 'right', fontWeight: '600', color: '#495057', fontSize: '11px' }}>TOTAL (CURRENCY)</th>
                  <th style={{ padding: '12px', textAlign: 'right', fontWeight: '600', color: '#495057', fontSize: '11px' }}>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="19" style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
                    No records to show.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Submit Button at Bottom */}
          <div style={{ marginTop: '24px' }}>
            <button 
              onClick={handleSubmit}
              style={{
                padding: '10px 24px',
                background: '#4a90e2',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '500'
              }}
            >
              Submit
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrderItems;
