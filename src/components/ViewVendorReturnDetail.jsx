import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewVendorReturnDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('expenses');
  const [itemsSubTab, setItemsSubTab] = useState('items');
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [selectedItemHistory, setSelectedItemHistory] = useState(null);

  const returnData = {
    returnNumber: 'VRATMOS00002',
    vendorName: 'TOKIO MARINE INSURANCE SINGAPORE LTD.',
    status: 'PENDING CREDIT',
    referenceNo: 'VRATMOS00002',
    vendor: 'TOKIO MARINE INSURANCE SINGAPORE LTD.',
    date: '9/5/2023',
    amount: 45.00,
    currency: 'SGD',
    exchangeRate: 1.00,
    createdFrom: 'Purchase Order: #POTM0S00076',
    tax: 0.00,
    memo: 'PO created from PR: # PR23TM0S00076',
    subsidiary: 'Tech Marine Offshore (S) Pte Ltd',
    department: 'TOM : Nampak Reinsure',
    purchaseType: '',
    class: '',
    location: '',
    materialSpecification: '',
    customCreatedFrom: 'Purchase Requisition: #PR23TM0S00076'
  };

  const expenseItems = [];

  const itemsData = [
    {
      id: 1,
      item: 'Bond Recruitment : Insurance',
      vendorName: '',
      quantity: 1,
      units: 'pers',
      description: 'Foreign Workers Bond\n\nNur Ali Mohammad (G8110637T)',
      rate: 45.00,
      amount: 45.00,
      taxCode: 'GST_SG:0%',
      taxRate: '0.0%',
      taxAmt: 0.00,
      grossAmt: 45.00,
      options: '',
      department: 'TOM : Human Resource',
      class: '',
      location: '',
      customer: '',
      project: '884-1 TOM INTERNALS : TOM HR',
      billable: 'Yes',
      closed: '',
      statisticalProcedure: ''
    }
  ];

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('edit-vendor-return');
    }
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('credit-vendor-returns');
    }
  };

  return (
    <div className="sales-quotation">
      {/* Top Header */}
      <div style={{ 
        background: '#f8f9fa', 
        padding: '12px 20px', 
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <i className="fas fa-undo" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '4px' }}>Vendor Return Authorization</div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '16px', fontWeight: '600', color: '#333' }}>{returnData.returnNumber}</span>
              <span style={{ fontSize: '14px', color: '#666' }}>{returnData.vendorName}</span>
              <span style={{ 
                background: '#4a90e2', 
                color: 'white', 
                padding: '4px 12px', 
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: '600'
              }}>
                {returnData.status}
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>List</button>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>Search</button>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>Customize</button>
        </div>
      </div>

      {/* Action Buttons Bar */}
      <div style={{ 
        background: 'white', 
        padding: '12px 20px', 
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn btn-primary" onClick={handleEdit} style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-edit"></i> Edit
          </button>
          <button className="btn btn-secondary" onClick={handleBack} style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-arrow-left"></i> Back
          </button>
          <button className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-times"></i> Close
          </button>
          <button className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '13px' }}>
            Refund
          </button>
        </div>
        <div>
          <button className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-print"></i>
          </button>
          <button className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '13px', marginLeft: '10px' }}>
            <i className="fas fa-cog"></i> Actions
          </button>
        </div>
      </div>

      <div className="quotation-container" style={{ background: '#f8f9fa', padding: '20px' }}>
        {/* Primary Information */}
        <div style={{ 
          background: 'white', 
          borderRadius: '4px', 
          marginBottom: '20px',
          border: '1px solid #e0e0e0'
        }}>
          <div style={{ 
            padding: '15px 20px',
            borderBottom: '1px solid #e0e0e0',
            background: '#f8f9fa',
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '11px', color: '#666' }}></i>
            <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0, color: '#333' }}>Primary Information</h3>
          </div>
          <div style={{ padding: '20px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '30px 60px',
              fontSize: '13px'
            }}>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>REFERENCE NO.</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{returnData.referenceNo}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CURRENCY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{returnData.currency}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>TAX</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{returnData.tax.toFixed(2)}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>VENDOR</div>
                <div style={{ color: '#4a90e2', fontSize: '14px', cursor: 'pointer' }}>{returnData.vendor}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>EXCHANGE RATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{returnData.exchangeRate.toFixed(2)}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>VAT REGISTRATION</div>
                <div style={{ color: '#333', fontSize: '14px' }}>-</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{returnData.date}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CREATED FROM</div>
                <div style={{ color: '#4a90e2', fontSize: '14px', cursor: 'pointer' }}>{returnData.createdFrom}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>MEMO</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{returnData.memo}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>AMOUNT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{returnData.amount.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div style={{ 
          background: 'white', 
          borderRadius: '4px', 
          marginBottom: '20px',
          border: '1px solid #e0e0e0'
        }}>
          <div style={{ 
            padding: '15px 20px',
            borderBottom: '1px solid #e0e0e0',
            background: '#f8f9fa',
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            cursor: 'pointer'
          }}>
            <i className="fas fa-chevron-down" style={{ fontSize: '11px', color: '#666' }}></i>
            <h3 style={{ fontSize: '13px', fontWeight: '600', margin: 0, color: '#333' }}>Classification</h3>
          </div>
          <div style={{ padding: '20px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '30px 60px',
              fontSize: '13px'
            }}>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>SUBSIDIARY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{returnData.subsidiary}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CLASS</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{returnData.class || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DEPARTMENT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{returnData.department}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>LOCATION</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{returnData.location || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>PURCHASE TYPE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{returnData.purchaseType || '-'}</div>
              </div>
              <div></div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>MATERIAL SPECIFICATION</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{returnData.materialSpecification || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CUSTOM CREATED FROM</div>
                <div style={{ color: '#4a90e2', fontSize: '14px', cursor: 'pointer' }}>{returnData.customCreatedFrom}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div style={{ 
          background: 'white', 
          borderRadius: '4px', 
          marginBottom: '20px',
          border: '1px solid #e0e0e0'
        }}>
          <div style={{ 
            background: '#5a6c7d', 
            padding: '0',
            display: 'flex',
            borderRadius: '4px 4px 0 0',
            overflowX: 'auto'
          }}>
            <button 
              onClick={() => setActiveTab('expenses')}
              style={{ 
                background: activeTab === 'expenses' ? 'white' : 'transparent', 
                border: 'none', 
                padding: '10px 20px', 
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: activeTab === 'expenses' ? '600' : '500',
                color: activeTab === 'expenses' ? '#333' : 'white',
                borderRadius: '4px 4px 0 0',
                whiteSpace: 'nowrap'
              }}
            >
              Expenses & Items
            </button>
            <button 
              onClick={() => setActiveTab('billing')}
              style={{ 
                background: activeTab === 'billing' ? 'white' : 'transparent', 
                border: 'none', 
                padding: '10px 20px', 
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: activeTab === 'billing' ? '600' : '500',
                color: activeTab === 'billing' ? '#333' : 'white',
                borderRadius: '4px 4px 0 0',
                whiteSpace: 'nowrap'
              }}
            >
              Billing
            </button>
            <button 
              onClick={() => setActiveTab('relationships')}
              style={{ 
                background: activeTab === 'relationships' ? 'white' : 'transparent', 
                border: 'none', 
                padding: '10px 20px', 
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: activeTab === 'relationships' ? '600' : '500',
                color: activeTab === 'relationships' ? '#333' : 'white',
                borderRadius: '4px 4px 0 0',
                whiteSpace: 'nowrap'
              }}
            >
              Relationships
            </button>
            <button 
              onClick={() => setActiveTab('communication')}
              style={{ 
                background: activeTab === 'communication' ? 'white' : 'transparent', 
                border: 'none', 
                padding: '10px 20px', 
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: activeTab === 'communication' ? '600' : '500',
                color: activeTab === 'communication' ? '#333' : 'white',
                borderRadius: '4px 4px 0 0',
                whiteSpace: 'nowrap'
              }}
            >
              Communication
            </button>
            <button 
              onClick={() => setActiveTab('relatedRecords')}
              style={{ 
                background: activeTab === 'relatedRecords' ? 'white' : 'transparent', 
                border: 'none', 
                padding: '10px 20px', 
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: activeTab === 'relatedRecords' ? '600' : '500',
                color: activeTab === 'relatedRecords' ? '#333' : 'white',
                borderRadius: '4px 4px 0 0',
                whiteSpace: 'nowrap'
              }}
            >
              Related Records
            </button>
            <button 
              onClick={() => setActiveTab('systemInfo')}
              style={{ 
                background: activeTab === 'systemInfo' ? 'white' : 'transparent', 
                border: 'none', 
                padding: '10px 20px', 
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: activeTab === 'systemInfo' ? '600' : '500',
                color: activeTab === 'systemInfo' ? '#333' : 'white',
                borderRadius: '4px 4px 0 0',
                whiteSpace: 'nowrap'
              }}
            >
              System Information
            </button>
            <button 
              onClick={() => setActiveTab('custom')}
              style={{ 
                background: activeTab === 'custom' ? 'white' : 'transparent', 
                border: 'none', 
                padding: '10px 20px', 
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: activeTab === 'custom' ? '600' : '500',
                color: activeTab === 'custom' ? '#333' : 'white',
                borderRadius: '4px 4px 0 0',
                whiteSpace: 'nowrap'
              }}
            >
              Custom
            </button>
            <button 
              onClick={() => setActiveTab('taxReporting')}
              style={{ 
                background: activeTab === 'taxReporting' ? 'white' : 'transparent', 
                border: 'none', 
                padding: '10px 20px', 
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: activeTab === 'taxReporting' ? '600' : '500',
                color: activeTab === 'taxReporting' ? '#333' : 'white',
                borderRadius: '4px 4px 0 0',
                whiteSpace: 'nowrap'
              }}
            >
              Tax Reporting
            </button>
            <button 
              onClick={() => setActiveTab('supplierReceived')}
              style={{ 
                background: activeTab === 'supplierReceived' ? 'white' : 'transparent', 
                border: 'none', 
                padding: '10px 20px', 
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: activeTab === 'supplierReceived' ? '600' : '500',
                color: activeTab === 'supplierReceived' ? '#333' : 'white',
                borderRadius: '4px 4px 0 0',
                whiteSpace: 'nowrap'
              }}
            >
              Supplier Received Items
            </button>
          </div>

          <div style={{ padding: '20px' }}>
            {/* Expenses Tab */}
            {activeTab === 'expenses' && (
              <>
                {/* Sub-tabs for Expenses and Items */}
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', borderBottom: '2px solid #e0e0e0' }}>
                  <button
                    onClick={() => setItemsSubTab('expenses')}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      borderBottom: itemsSubTab === 'expenses' ? '3px solid #4a90e2' : '3px solid transparent',
                      padding: '0.5rem 1rem',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: itemsSubTab === 'expenses' ? '600' : '500',
                      color: itemsSubTab === 'expenses' ? '#4a90e2' : '#666'
                    }}
                  >
                    Expenses 0.00
                  </button>
                  <button
                    onClick={() => setItemsSubTab('items')}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      borderBottom: itemsSubTab === 'items' ? '3px solid #4a90e2' : '3px solid transparent',
                      padding: '0.5rem 1rem',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: itemsSubTab === 'items' ? '600' : '500',
                      color: itemsSubTab === 'items' ? '#4a90e2' : '#666'
                    }}
                  >
                    Items 45.00
                  </button>
                </div>

                {/* Expenses Sub-tab */}
                {itemsSubTab === 'expenses' && (
                  <div style={{ overflowX: 'auto' }}>
                    <table className="detail-items-table" style={{ width: '100%' }}>
                      <thead>
                        <tr>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '150px' }}>ACCOUNT</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '100px' }}>AMOUNT</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '120px' }}>TAX CODE</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '100px' }}>TAX RATE</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '100px' }}>TAX AMT</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '100px' }}>GROSS AMT</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '200px' }}>MEMO</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '150px' }}>DEPARTMENT</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '120px' }}>CLASS</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '120px' }}>LOCATION</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '120px' }}>CUSTOMER</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '100px' }}>BILLABLE</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '100px' }}>HISTORY</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="13" style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>
                            No records to show.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Items Sub-tab */}
                {itemsSubTab === 'items' && (
                  <div style={{ overflowX: 'auto' }}>
                    <table className="detail-items-table" style={{ width: '100%' }}>
                      <thead>
                        <tr>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '150px' }}>ITEM</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '120px' }}>VENDOR NAME</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '80px' }}>QUANTITY</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '80px' }}>UNITS</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '200px' }}>DESCRIPTION</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '100px' }}>RATE</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '100px' }}>AMOUNT</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '120px' }}>TAX CODE</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '100px' }}>TAX RATE</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '100px' }}>TAX AMT</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '100px' }}>GROSS AMT</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '120px' }}>OPTIONS</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '150px' }}>DEPARTMENT</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '120px' }}>CLASS</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '120px' }}>LOCATION</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '120px' }}>CUSTOMER</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '120px' }}>PROJECT</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '100px' }}>BILLABLE</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '100px' }}>CLOSED</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '180px' }}>STATISTICAL PROCEDURE FOR PURCHASES</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '100px' }}>HISTORY</th>
                        </tr>
                      </thead>
                      <tbody>
                        {itemsData.map((item) => (
                          <tr key={item.id}>
                            <td style={{ padding: '10px 12px' }}>{item.item}</td>
                            <td style={{ padding: '10px 12px' }}>{item.vendorName || '-'}</td>
                            <td style={{ padding: '10px 12px' }}>{item.quantity}</td>
                            <td style={{ padding: '10px 12px' }}>{item.units}</td>
                            <td style={{ padding: '10px 12px', whiteSpace: 'pre-line' }}>{item.description}</td>
                            <td style={{ padding: '10px 12px', textAlign: 'right' }}>{item.rate.toFixed(2)}</td>
                            <td style={{ padding: '10px 12px', textAlign: 'right' }}>{item.amount.toFixed(2)}</td>
                            <td style={{ padding: '10px 12px' }}>{item.taxCode}</td>
                            <td style={{ padding: '10px 12px' }}>{item.taxRate}</td>
                            <td style={{ padding: '10px 12px', textAlign: 'right' }}>{item.taxAmt.toFixed(2)}</td>
                            <td style={{ padding: '10px 12px', textAlign: 'right' }}>{item.grossAmt.toFixed(2)}</td>
                            <td style={{ padding: '10px 12px' }}>{item.options || '-'}</td>
                            <td style={{ padding: '10px 12px' }}>{item.department}</td>
                            <td style={{ padding: '10px 12px' }}>{item.class || '-'}</td>
                            <td style={{ padding: '10px 12px' }}>{item.location || '-'}</td>
                            <td style={{ padding: '10px 12px' }}>{item.customer || '-'}</td>
                            <td style={{ padding: '10px 12px' }}>{item.project}</td>
                            <td style={{ padding: '10px 12px' }}>{item.billable}</td>
                            <td style={{ padding: '10px 12px' }}>{item.closed || '-'}</td>
                            <td style={{ padding: '10px 12px' }}>{item.statisticalProcedure || '-'}</td>
                            <td style={{ padding: '10px 12px', textAlign: 'center' }}>
                              <button 
                                className="view-link"
                                onClick={() => {
                                  setSelectedItemHistory(item);
                                  setShowHistoryModal(true);
                                }}
                              >
                                History
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '11px', color: '#666', fontWeight: '600', marginBottom: '0.5rem' }}>VENDOR</div>
                  <div style={{ fontSize: '13px', color: '#333' }}>20 McCallum Street, #09-01, Tokio Marine Centre Singapore 069046 <a href="#" style={{ color: '#4a90e2', marginLeft: '0.5rem' }}>Map</a></div>
                </div>
              </div>
            )}

            {/* Relationships Tab */}
            {activeTab === 'relationships' && (
              <div>
                <h3 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '1rem' }}>Contacts</h3>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', fontSize: '12px' }}>
                  <input type="text" placeholder="<Type then tab>" style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '3px', width: '200px' }} />
                  <select style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '3px', width: '150px' }}>
                    <option>Default</option>
                  </select>
                  <select style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '3px', width: '150px' }}>
                    <option>Default</option>
                  </select>
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>New Contact</button>
                  <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>Attach</button>
                  <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>Update Primary</button>
                  <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>Customize View</button>
                </div>
                <table style={{ width: '100%', fontSize: '11px', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #e0e0e0' }}>
                      <th style={{ padding: '8px', textAlign: 'left' }}>EDIT</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>NAME</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>COMPANY</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>JOB TITLE</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>PHONE</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>EMAIL</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>STOP SENDING SMS</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>MESSAGE/MEDIA LAST OPT/IN KEYWORD</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>MESSAGE/MEDIA IS/KEY/LINK ENTITY</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>ROLE</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>REMOVE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="11" style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>No records to show.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Communication Tab */}
            {activeTab === 'communication' && (
              <div>
                <h3 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '1rem' }}>Messages</h3>
                <div style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.25rem', fontSize: '11px' }}>
                  <button style={{ padding: '4px 8px', background: '#f0f0f0', border: '1px solid #ccc', borderRadius: '3px' }}>Activities</button>
                  <button style={{ padding: '4px 8px', background: '#f0f0f0', border: '1px solid #ccc', borderRadius: '3px' }}>Files</button>
                  <button style={{ padding: '4px 8px', background: '#f0f0f0', border: '1px solid #ccc', borderRadius: '3px' }}>User Notes</button>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <select style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '12px', marginBottom: '0.5rem' }}>
                    <option>Default</option>
                  </select>
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>Email</button>
                  <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>Attach</button>
                  <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>Letter</button>
                  <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>PDF</button>
                  <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>Fax</button>
                  <button className="btn btn-primary" style={{ fontSize: '12px', padding: '6px 12px' }}>Refresh</button>
                  <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>View History</button>
                  <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>Customize View</button>
                </div>
                <table style={{ width: '100%', fontSize: '11px', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #e0e0e0' }}>
                      <th style={{ padding: '8px', textAlign: 'left' }}>#</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>VIEW</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>DATE</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>AUTHOR</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>PRIMARY RECIPIENT</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>SUBJECT</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>TYPE</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>FILES</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>ATTACHMENTS</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>INTERNAL ONLY</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>REMOVE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="11" style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>No records to show.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Related Records Tab */}
            {activeTab === 'relatedRecords' && (
              <div>
                <h3 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '1rem' }}>Fulfillments & Credits</h3>
                <div style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.25rem', fontSize: '11px' }}>
                  <button style={{ padding: '4px 8px', background: '#f0f0f0', border: '1px solid #ccc', borderRadius: '3px' }}>Transformations</button>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px', marginBottom: '1rem' }}>Print</button>
                </div>
                <table style={{ width: '100%', fontSize: '11px', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #e0e0e0' }}>
                      <th style={{ padding: '8px', textAlign: 'left' }}>DATE</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>TYPE</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>NUMBER</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>STATUS</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>LINK TYPE</th>
                      <th style={{ padding: '8px', textAlign: 'right' }}>AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="6" style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>No records to show.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* System Information Tab */}
            {activeTab === 'systemInfo' && (
              <div>
                <h3 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '1rem' }}>System Notes</h3>
                <div style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.25rem', fontSize: '11px' }}>
                  <button style={{ padding: '4px 8px', background: '#f0f0f0', border: '1px solid #ccc', borderRadius: '3px' }}>Active Workflows</button>
                  <button style={{ padding: '4px 8px', background: '#f0f0f0', border: '1px solid #ccc', borderRadius: '3px' }}>Workflow History</button>
                </div>
                <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div>
                      <label style={{ fontSize: '11px', color: '#666', fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>VIEW</label>
                      <select style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '12px' }}>
                        <option>Default</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: '11px', color: '#666', fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>FIELD #</label>
                      <input type="text" placeholder="<Type then tab>" style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '12px', width: '200px' }} />
                    </div>
                  </div>
                </div>
                <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px', marginBottom: '1rem' }}>Customize View</button>
                <div style={{ fontSize: '12px', color: '#666', marginTop: '1rem' }}>LOADING</div>
              </div>
            )}

            {/* Custom Tab */}
            {activeTab === 'custom' && (
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: '#666', fontWeight: '600', marginBottom: '0.5rem' }}>MATERIAL TYPE</div>
                    <div style={{ fontSize: '13px', color: '#333' }}>-</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#666', fontWeight: '600', marginBottom: '0.5rem' }}>DO RECORD CREATED</div>
                    <div style={{ fontSize: '13px', color: '#333' }}>-</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#666', fontWeight: '600', marginBottom: '0.5rem' }}>TEST TRANSACTION FIELD</div>
                    <div style={{ fontSize: '13px', color: '#333' }}>-</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#666', fontWeight: '600', marginBottom: '0.5rem' }}>GST TYPE</div>
                    <div style={{ fontSize: '13px', color: '#333' }}>0</div>
                  </div>
                </div>
              </div>
            )}

            {/* Tax Reporting Tab */}
            {activeTab === 'taxReporting' && (
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: '#666', fontWeight: '600', marginBottom: '0.5rem' }}>DELIVERY TERMS</div>
                    <div style={{ fontSize: '13px', color: '#333' }}>-</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#666', fontWeight: '600', marginBottom: '0.5rem' }}>REGIME CODE OF SUPPLY</div>
                    <div style={{ fontSize: '13px', color: '#333' }}>-</div>
                  </div>
                </div>
              </div>
            )}

            {/* Supplier Received Items Tab */}
            {activeTab === 'supplierReceived' && (
              <div>
                <h3 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '1rem' }}>Received Items</h3>
                <table style={{ width: '100%', fontSize: '11px', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #e0e0e0' }}>
                      <th style={{ padding: '8px', textAlign: 'left' }}>ITEM ▲</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>COUNT OF QUANTITY</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>MEMO</th>
                      <th style={{ padding: '8px', textAlign: 'right' }}>SUM OF AMOUNT (FOREIGN CURRENCY)</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>NAME</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>DOCUMENT NUMBER</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                      <td style={{ padding: '8px' }}>Bond Recruitment</td>
                      <td style={{ padding: '8px' }}>1</td>
                      <td style={{ padding: '8px' }}>Bond New WP Issuance 1. Annadura Anand 2. Soosairaj Anandha Charli</td>
                      <td style={{ padding: '8px', textAlign: 'right' }}>90.00</td>
                      <td style={{ padding: '8px' }}>TOKIO MARINE INSURANCE SINGAPORE LTD.</td>
                      <td style={{ padding: '8px' }}>POTOM06493</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                      <td style={{ padding: '8px' }}>Bond Recruitment</td>
                      <td style={{ padding: '8px' }}>1</td>
                      <td style={{ padding: '8px' }}>Bond-MOBARAK & AHAMMAD BANUZI</td>
                      <td style={{ padding: '8px', textAlign: 'right' }}>100.00</td>
                      <td style={{ padding: '8px' }}>TOKIO MARINE INSURANCE SINGAPORE LTD.</td>
                      <td style={{ padding: '8px' }}>POTMOS00012</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                      <td style={{ padding: '8px' }}>Bond Recruitment</td>
                      <td style={{ padding: '8px' }}>1</td>
                      <td style={{ padding: '8px' }}>WP Renewal, Foreign Workers Bond DQ Persons</td>
                      <td style={{ padding: '8px', textAlign: 'right' }}>180.00</td>
                      <td style={{ padding: '8px' }}>TOKIO MARINE INSURANCE SINGAPORE LTD.</td>
                      <td style={{ padding: '8px' }}>POTOMDQ00170</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                      <td style={{ padding: '8px' }}>Bond Recruitment</td>
                      <td style={{ padding: '8px' }}>1</td>
                      <td style={{ padding: '8px' }}>Bond-FOREIGN WORKERS BOND</td>
                      <td style={{ padding: '8px', textAlign: 'right' }}>270.00</td>
                      <td style={{ padding: '8px' }}>TOKIO MARINE INSURANCE SINGAPORE LTD.</td>
                      <td style={{ padding: '8px' }}>POTEA00038</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                      <td style={{ padding: '8px' }}>Bond Recruitment</td>
                      <td style={{ padding: '8px' }}>1</td>
                      <td style={{ padding: '8px' }}>Bond-Foreign Workers Bond</td>
                      <td style={{ padding: '8px', textAlign: 'right' }}>90.00</td>
                      <td style={{ padding: '8px' }}>TOKIO MARINE INSURANCE SINGAPORE LTD.</td>
                      <td style={{ padding: '8px' }}>POTMOS00024</td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ marginTop: '1rem', fontSize: '11px', color: '#666', textAlign: 'right' }}>1 to 25 of 42</div>
              </div>
            )}
          </div>
        </div>

        <div className="footer-actions">
          <button className="btn btn-secondary" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <div>
            <button className="btn btn-primary" onClick={handleEdit}>
              <i className="fas fa-edit"></i>
              Edit
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-cog"></i>
              Actions
            </button>
          </div>
        </div>
      </div>

      {toast.show && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast({ show: false, message: '', type: 'success' })} 
        />
      )}

      {/* Item History Modal */}
      {showHistoryModal && selectedItemHistory && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000
          }}
          onClick={() => setShowHistoryModal(false)}
        >
          <div 
            style={{
              background: 'white',
              borderRadius: '8px',
              padding: '2rem',
              maxWidth: '900px',
              width: '90%',
              maxHeight: '80vh',
              overflow: 'auto',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#333' }}>
                <i className="fas fa-history" style={{ marginRight: '0.5rem', color: '#4a90e2' }}></i>
                Item History
              </h2>
              <button 
                onClick={() => setShowHistoryModal(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#999',
                  padding: '0.25rem 0.5rem'
                }}
              >
                ×
              </button>
            </div>

            <div style={{ marginBottom: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '4px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <strong style={{ color: '#666', fontSize: '0.85rem' }}>ITEM:</strong>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '0.25rem' }}>{selectedItemHistory.item}</div>
                </div>
                <div>
                  <strong style={{ color: '#666', fontSize: '0.85rem' }}>DESCRIPTION:</strong>
                  <div style={{ fontSize: '1rem', color: '#333', marginTop: '0.25rem' }}>{selectedItemHistory.description}</div>
                </div>
              </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table className="detail-items-table" style={{ width: '100%' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '120px' }}>ITEM</th>
                    <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '200px' }}>DESCRIPTION</th>
                    <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '100px' }}>PRICE</th>
                    <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '80px' }}>UNITS</th>
                    <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '100px' }}>QUANTITY</th>
                    <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '120px' }}>DATE</th>
                    <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '150px' }}>DOCUMENT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '10px 12px' }}>{selectedItemHistory.item}</td>
                    <td style={{ padding: '10px 12px' }}>{selectedItemHistory.description}</td>
                    <td style={{ padding: '10px 12px' }}>{selectedItemHistory.rate.toFixed(2)}</td>
                    <td style={{ padding: '10px 12px' }}>{selectedItemHistory.units}</td>
                    <td style={{ padding: '10px 12px' }}>{selectedItemHistory.quantity}</td>
                    <td style={{ padding: '10px 12px' }}>{new Date().toLocaleDateString()}</td>
                    <td style={{ padding: '10px 12px' }}>Current VRA</td>
                  </tr>
                  <tr>
                    <td colSpan="7" style={{ padding: '2rem', textAlign: 'center', color: '#999', fontSize: '0.9rem' }}>
                      No previous history records found
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
              <button 
                className="btn-toolbar"
                onClick={() => setShowHistoryModal(false)}
                style={{ padding: '0.5rem 1.5rem' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewVendorReturnDetail;
