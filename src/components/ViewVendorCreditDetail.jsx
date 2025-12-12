import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewVendorCreditDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('items');

  const creditData = {
    transactionNumber: 'VENDCRED10',
    referenceNo: 'BALANCE B/F-HALC',
    vendor: 'HALCYON TECHNOLOGY SINGAPORE PTE LTD.',
    account: '20010 Accounts Pa... Trade Creditors',
    amount: 29.47,
    createdFrom: '',
    dueDate: '',
    currency: 'SGD',
    exchangeRate: 1.00,
    vatRegistration: '',
    date: '1/1/2021',
    postingPeriod: 'Jan 2021',
    memo: 'Old System opening Balance',
    tax: 0.00,
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    purchaseType: '',
    approvalStatus: 'Submit For Approval',
    materialSpecification: '',
    customCreatedFrom: ''
  };

  const expenseLines = [
    {
      account: '30300 Equity : Opening Balance',
      amount: 29.47,
      taxCode: 'GST-SGD-%',
      taxRate: '0.0%',
      taxAmt: 0.00,
      grossAmt: 0.00,
      memo: 'Old System opening Balance',
      department: '',
      class: '',
      location: '',
      customer: '',
      billable: ''
    }
  ];

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-vendor-credits');
    }
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('enter-vendor-credit');
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
          <i className="fas fa-file-invoice" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#333', marginBottom: '4px' }}>Bill Credit</div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '16px', fontWeight: '600', color: '#333' }}>{creditData.referenceNo}</span>
              <span style={{ fontSize: '14px', color: '#666' }}>{creditData.vendor}</span>
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
        </div>
        <div>
          <button className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '13px' }}>
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
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>TRANSACTION NUMBER</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{creditData.transactionNumber}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CREATED FROM</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{creditData.createdFrom || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DUE DATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{creditData.dueDate || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>REFERENCE NO.</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{creditData.referenceNo}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CURRENCY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{creditData.currency}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>DATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{creditData.date}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>VENDOR</div>
                <div style={{ color: '#4a90e2', fontSize: '14px', cursor: 'pointer' }}>{creditData.vendor}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>EXCHANGE RATE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{creditData.exchangeRate.toFixed(2)}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>POSTING PERIOD</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{creditData.postingPeriod}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>ACCOUNT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{creditData.account}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>VAT REGISTRATION</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{creditData.vatRegistration || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>MEMO</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{creditData.memo}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>AMOUNT</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{creditData.amount.toFixed(2)}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>TAX</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{creditData.tax.toFixed(2)}</div>
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
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '30px 60px',
              fontSize: '13px'
            }}>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>SUBSIDIARY</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{creditData.subsidiary}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>APPROVAL STATUS</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{creditData.approvalStatus}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>CUSTOM CREATED FROM</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{creditData.customCreatedFrom || '-'}</div>
              </div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>PURCHASE TYPE</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{creditData.purchaseType || '-'}</div>
              </div>
              <div style={{ gridColumn: 'span 2' }}></div>
              <div>
                <div style={{ color: '#999', fontSize: '10px', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>MATERIAL SPECIFICATION</div>
                <div style={{ color: '#333', fontSize: '14px' }}>{creditData.materialSpecification || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Items Tab Section */}
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
              onClick={() => setActiveTab('items')}
              style={{ 
                background: activeTab === 'items' ? 'white' : 'transparent', 
                border: 'none', 
                padding: '12px 24px', 
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: activeTab === 'items' ? '600' : '400',
                color: activeTab === 'items' ? '#333' : 'white',
                borderRadius: '4px 4px 0 0'
              }}
            >
              Items
            </button>
            <button 
              onClick={() => setActiveTab('billing')}
              style={{ 
                background: activeTab === 'billing' ? 'white' : 'transparent', 
                border: 'none', 
                padding: '12px 24px', 
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: activeTab === 'billing' ? '600' : '400',
                color: activeTab === 'billing' ? '#333' : 'white',
                borderRadius: '4px 4px 0 0'
              }}
            >
              Billing
            </button>
            <button 
              onClick={() => setActiveTab('relationships')}
              style={{ 
                background: activeTab === 'relationships' ? 'white' : 'transparent', 
                border: 'none', 
                padding: '12px 24px', 
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: activeTab === 'relationships' ? '600' : '400',
                color: activeTab === 'relationships' ? '#333' : 'white',
                borderRadius: '4px 4px 0 0'
              }}
            >
              Relationships
            </button>
            <button 
              onClick={() => setActiveTab('communication')}
              style={{ 
                background: activeTab === 'communication' ? 'white' : 'transparent', 
                border: 'none', 
                padding: '12px 24px', 
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: activeTab === 'communication' ? '600' : '400',
                color: activeTab === 'communication' ? '#333' : 'white',
                borderRadius: '4px 4px 0 0'
              }}
            >
              Communication
            </button>
            <button 
              onClick={() => setActiveTab('custom')}
              style={{ 
                background: activeTab === 'custom' ? 'white' : 'transparent', 
                border: 'none', 
                padding: '12px 24px', 
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: activeTab === 'custom' ? '600' : '400',
                color: activeTab === 'custom' ? '#333' : 'white',
                borderRadius: '4px 4px 0 0'
              }}
            >
              Custom
            </button>
            <button 
              onClick={() => setActiveTab('taxReporting')}
              style={{ 
                background: activeTab === 'taxReporting' ? 'white' : 'transparent', 
                border: 'none', 
                padding: '12px 24px', 
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: activeTab === 'taxReporting' ? '600' : '400',
                color: activeTab === 'taxReporting' ? '#333' : 'white',
                borderRadius: '4px 4px 0 0'
              }}
            >
              Tax Reporting
            </button>
            <button 
              onClick={() => setActiveTab('supplierReceived')}
              style={{ 
                background: activeTab === 'supplierReceived' ? 'white' : 'transparent', 
                border: 'none', 
                padding: '12px 24px', 
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: activeTab === 'supplierReceived' ? '600' : '400',
                color: activeTab === 'supplierReceived' ? '#333' : 'white',
                borderRadius: '4px 4px 0 0'
              }}
            >
              Supplier Received Items
            </button>
          </div>

          <div style={{ padding: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '1.5rem', padding: '1rem', background: '#f8f9fa', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>UNAPPLIED</label>
                <div style={{ 
                  padding: '8px 12px', 
                  border: '1px solid #ddd', 
                  borderRadius: '4px', 
                  background: '#fff',
                  fontSize: '14px',
                  color: '#333'
                }}>0.00</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '11px', fontWeight: '600', color: '#666', textTransform: 'uppercase' }}>APPLIED</label>
                <div style={{ 
                  padding: '8px 12px', 
                  border: '1px solid #ddd', 
                  borderRadius: '4px', 
                  background: '#fff',
                  fontSize: '14px',
                  color: '#333'
                }}>29.47</div>
              </div>
            </div>

            {/* Sub-tabs for Expenses, Items, Apply */}
            <div style={{ 
              display: 'flex', 
              gap: '0', 
              borderBottom: '1px solid #dee2e6', 
              marginBottom: '1.5rem',
              background: '#fff'
            }}>
              <button 
                style={{ 
                  padding: '1rem 2rem', 
                  border: 'none', 
                  background: '#fff',
                  borderBottom: '2px solid #4a90e2',
                  fontWeight: '600',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  color: '#4a90e2',
                  transition: 'all 0.2s ease'
                }}
              >
                Expenses 29.47
              </button>
              <button 
                style={{ 
                  padding: '1rem 2rem', 
                  border: 'none', 
                  background: 'transparent',
                  borderBottom: '2px solid transparent',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  color: '#6c757d',
                  transition: 'all 0.2s ease'
                }}
              >
                Items 0.00
              </button>
              <button 
                style={{ 
                  padding: '1rem 2rem', 
                  border: 'none', 
                  background: 'transparent',
                  borderBottom: '2px solid transparent',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  color: '#6c757d',
                  transition: 'all 0.2s ease'
                }}
              >
                Apply 29.47
              </button>
            </div>

            <div style={{ overflowX: 'auto', padding: '0 0 1.5rem 0' }}>
              <table className="detail-items-table" style={{ minWidth: '2200px', borderCollapse: 'separate', borderSpacing: 0 }}>
                <thead>
                  <tr>
                    <th style={{ minWidth: '180px' }}>ACCOUNT</th>
                    <th style={{ minWidth: '120px' }}>AMOUNT</th>
                    <th style={{ minWidth: '100px' }}>TAX CODE</th>
                    <th style={{ minWidth: '100px' }}>TAX RATE</th>
                    <th style={{ minWidth: '100px' }}>TAX AMT</th>
                    <th style={{ minWidth: '120px' }}>GROSS AMT</th>
                    <th style={{ minWidth: '250px' }}>MEMO</th>
                    <th style={{ minWidth: '150px' }}>DEPARTMENT</th>
                    <th style={{ minWidth: '150px' }}>CLASS</th>
                    <th style={{ minWidth: '150px' }}>LOCATION</th>
                    <th style={{ minWidth: '150px' }}>CUSTOMER</th>
                    <th style={{ minWidth: '100px' }}>BILLABLE</th>
                    <th style={{ minWidth: '100px' }}>HISTORY</th>
                  </tr>
                </thead>
                <tbody>
                  {expenseLines.map((line, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #e0e0e0' }}>
                      <td style={{ padding: '10px 8px' }}>{line.account}</td>
                      <td style={{ padding: '10px 8px' }}>{line.amount.toFixed(2)}</td>
                      <td style={{ padding: '10px 8px' }}>{line.taxCode}</td>
                      <td style={{ padding: '10px 8px' }}>{line.taxRate}</td>
                      <td style={{ padding: '10px 8px' }}>{line.taxAmt.toFixed(2)}</td>
                      <td style={{ padding: '10px 8px' }}>{line.grossAmt.toFixed(2)}</td>
                      <td style={{ padding: '10px 8px' }}>{line.memo}</td>
                      <td style={{ padding: '10px 8px' }}>{line.department || '-'}</td>
                      <td style={{ padding: '10px 8px' }}>{line.class || '-'}</td>
                      <td style={{ padding: '10px 8px' }}>{line.location || '-'}</td>
                      <td style={{ padding: '10px 8px' }}>{line.customer || '-'}</td>
                      <td style={{ padding: '10px 8px' }}>{line.billable || '-'}</td>
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

export default ViewVendorCreditDetail;
