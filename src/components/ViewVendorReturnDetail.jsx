import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewVendorReturnDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('expenses');

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

  const expenseItems = [
    {
      item: 'Non Inventoried - Insurance',
      vendorName: 'Foreign Workers Bond',
      quantity: '1 pors',
      units: '',
      description: 'Non All Motorised (GR1180/F)',
      rate: 45.00,
      amount: 45.00,
      taxCode: 'GST-SGD-%',
      taxRate: '0.0%',
      taxAmt: 0.00,
      grossAmt: 45.00,
      options: 'TOM - Human Insurance',
      department: 'TOM : TOM INTERNALS : TOM HR',
      class: '',
      location: '',
      customerProject: '',
      billable: '',
      closed: ''
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
            borderRadius: '4px 4px 0 0'
          }}>
            <button 
              onClick={() => setActiveTab('expenses')}
              style={{ 
                background: activeTab === 'expenses' ? 'white' : 'transparent', 
                border: 'none', 
                padding: '12px 24px', 
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                color: activeTab === 'expenses' ? '#333' : 'white',
                borderRadius: '4px 4px 0 0'
              }}
            >
              Expenses & Items
            </button>
            <button 
              onClick={() => setActiveTab('billing')}
              style={{ 
                background: 'transparent', 
                border: 'none', 
                padding: '12px 24px', 
                cursor: 'pointer',
                fontSize: '14px',
                color: 'white'
              }}
            >
              Billing
            </button>
            <button 
              onClick={() => setActiveTab('relationships')}
              style={{ 
                background: 'transparent', 
                border: 'none', 
                padding: '12px 24px', 
                cursor: 'pointer',
                fontSize: '14px',
                color: 'white'
              }}
            >
              Relationships
            </button>
          </div>

          <div style={{ padding: '20px' }}>
            <div style={{ 
              background: '#f8f9fa', 
              padding: '12px 20px', 
              marginBottom: '15px',
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <strong style={{ fontSize: '14px' }}>Expenses 0.00 &nbsp;&nbsp; Items 45.00 ▼</strong>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                <thead>
                  <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #e0e0e0' }}>
                    <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>ITEM</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>VENDOR NAME</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>QUANTITY</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>UNITS</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>DESCRIPTION</th>
                    <th style={{ padding: '10px 8px', textAlign: 'right', fontSize: '10px', fontWeight: '600', color: '#666' }}>RATE</th>
                    <th style={{ padding: '10px 8px', textAlign: 'right', fontSize: '10px', fontWeight: '600', color: '#666' }}>AMOUNT</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>TAX CODE</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>TAX RATE</th>
                    <th style={{ padding: '10px 8px', textAlign: 'right', fontSize: '10px', fontWeight: '600', color: '#666' }}>TAX AMT</th>
                    <th style={{ padding: '10px 8px', textAlign: 'right', fontSize: '10px', fontWeight: '600', color: '#666' }}>GROSS AMT</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>OPTIONS</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>DEPARTMENT</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>CLASS</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>LOCATION</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>CUSTOMER/PROJECT</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>BILLABLE</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>CLOSED</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>HISTORY</th>
                  </tr>
                </thead>
                <tbody>
                  {expenseItems.map((item, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #e0e0e0' }}>
                      <td style={{ padding: '10px 8px' }}>{item.item}</td>
                      <td style={{ padding: '10px 8px' }}>{item.vendorName}</td>
                      <td style={{ padding: '10px 8px' }}>{item.quantity}</td>
                      <td style={{ padding: '10px 8px' }}>{item.units || '-'}</td>
                      <td style={{ padding: '10px 8px' }}>{item.description}</td>
                      <td style={{ padding: '10px 8px', textAlign: 'right' }}>{item.rate.toFixed(2)}</td>
                      <td style={{ padding: '10px 8px', textAlign: 'right' }}>{item.amount.toFixed(2)}</td>
                      <td style={{ padding: '10px 8px' }}>{item.taxCode}</td>
                      <td style={{ padding: '10px 8px' }}>{item.taxRate}</td>
                      <td style={{ padding: '10px 8px', textAlign: 'right' }}>{item.taxAmt.toFixed(2)}</td>
                      <td style={{ padding: '10px 8px', textAlign: 'right' }}>{item.grossAmt.toFixed(2)}</td>
                      <td style={{ padding: '10px 8px' }}>{item.options}</td>
                      <td style={{ padding: '10px 8px' }}>{item.department}</td>
                      <td style={{ padding: '10px 8px' }}>{item.class || '-'}</td>
                      <td style={{ padding: '10px 8px' }}>{item.location || '-'}</td>
                      <td style={{ padding: '10px 8px' }}>{item.customerProject || '-'}</td>
                      <td style={{ padding: '10px 8px' }}>{item.billable || '-'}</td>
                      <td style={{ padding: '10px 8px' }}>{item.closed || '-'}</td>
                      <td style={{ padding: '10px 8px' }}>
                        <button style={{ color: '#4a90e2', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                          History
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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

      <Toast 
        message={toast.message} 
        type={toast.type} 
        show={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
    </div>
  );
};

export default ViewVendorReturnDetail;
