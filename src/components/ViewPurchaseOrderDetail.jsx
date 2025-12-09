import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewPurchaseOrderDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('items');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);
  const [shippingCollapsed, setShippingCollapsed] = useState(false);
  const [billingCollapsed, setBillingCollapsed] = useState(false);

  const poData = {
    poNumber: 'PO-2024-001',
    vendorName: 'Pacific Marine Supplies',
    status: 'APPROVED',
    date: '15/01/2024',
    poType: 'Main',
    refPoNumber: '',
    otherComments: 'Marine Equipment Purchase',
    approvalStatus: 'Approved',
    receiveBy: '30/01/2024',
    refNumber: '',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    department: 'Engineering',
    class: 'Material Supply',
    location: 'Singapore Yard',
    currency: 'SGD',
    purchaseType: 'Critical',
    exchangeRate: 1.00,
    // Shipping
    shippingMethod: 'Air Freight',
    shipTo: 'Main Office',
    fob: 'Singapore',
    // Billing
    vendorAddress: 'Main Vendor Address',
    terms: 'Net 30',
    incoterm: 'FOB',
    // Accounting
    taxId: 'TAX-2024-001',
    // Communication
    toBePrinted: true,
    toBeEmailed: false,
    toBeFaxed: false,
    vendorMessage: 'Please deliver by end of month',
    // Custom
    materialType: 'Steel',
    testTransactionField: 'Test Value',
    materialSpecification: 'Grade A Steel',
    doRecordCreated: false,
    gstType: 'GST 9%',
    subtotal: 8500.00,
    taxTotal: 765.00,
    total: 9265.00,
    items: [
      {
        id: 1,
        item: 'Hydraulic Pumps',
        vendorName: 'Pacific Marine Supplies',
        received: 0,
        billed: 0,
        onHand: 0,
        quantity: 10,
        units: 'Pcs',
        description: 'High Pressure Hydraulic Pumps',
        rate: 850.00,
        taxCode: 'GST_SG-9%',
        amount: 8500.00,
        taxRate: '9.0%',
        grossAmt: 9265.00,
        taxAmt: 765.00
      }
    ]
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-purchase-orders');
    }
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('enter-purchase-orders');
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-invoice"></i>
          <div>
            <h1>Purchase Order</h1>
            <div className="detail-subtitle">
              <span>{poData.poNumber}</span>
              <span>{poData.vendorName}</span>
              <span className="status-badge-detail" style={{ background: '#4caf50' }}>
                {poData.status}
              </span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-action">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-action" onClick={() => setCurrentPage('view-purchase-orders')}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary" onClick={handleEdit}>
          <i className="fas fa-edit"></i>
          Edit
        </button>
        <button className="btn-toolbar" onClick={handleBack}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar">
          Bill
        </button>
        <button className="btn-toolbar">
          Enter Prepayment
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-print"></i>
          Print
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-copy"></i>
          Copy
        </button>
        <div className="toolbar-dropdown" style={{ marginLeft: 'auto' }}>
          <button className="btn-toolbar">
            <i className="fas fa-cog"></i>
            Actions
            <i className="fas fa-chevron-down" style={{ marginLeft: '0.5rem', fontSize: '0.7rem' }}></i>
          </button>
        </div>
      </div>

      <div className="detail-content">
        {/* Primary Information Section */}
        <div className={`detail-section ${primaryInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setPrimaryInfoCollapsed(!primaryInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>PO #</label>
                <div className="field-value">{poData.poNumber}</div>
              </div>
              <div className="detail-field">
                <label>DATE</label>
                <div className="field-value">{poData.date}</div>
              </div>
              <div className="detail-field">
                <label>PO TYPE</label>
                <div className="field-value">{poData.poType}</div>
              </div>
              <div className="detail-field">
                <label>VENDOR</label>
                <div className="field-value" style={{ color: '#4a90e2', cursor: 'pointer' }}>{poData.vendorName}</div>
              </div>
              <div className="detail-field">
                <label>RECEIVE BY</label>
                <div className="field-value">{poData.receiveBy}</div>
              </div>
              <div className="detail-field">
                <label>REF PO NUMBER</label>
                <div className="field-value">{poData.refNumber || '-'}</div>
              </div>
              <div className="detail-field">
                <label>OTHER COMMENTS</label>
                <div className="field-value">{poData.otherComments}</div>
              </div>
              <div className="detail-field">
                <label>APPROVAL STATUS</label>
                <div className="field-value">{poData.approvalStatus}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification Section */}
        <div className={`detail-section ${classificationCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setClassificationCollapsed(!classificationCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{poData.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>DEPARTMENT</label>
                <div className="field-value">{poData.department}</div>
              </div>
              <div className="detail-field">
                <label>CLASS</label>
                <div className="field-value">{poData.class}</div>
              </div>
              <div className="detail-field">
                <label>LOCATION</label>
                <div className="field-value">{poData.location}</div>
              </div>
              <div className="detail-field">
                <label>CURRENCY</label>
                <div className="field-value">{poData.currency}</div>
              </div>
              <div className="detail-field">
                <label>PURCHASE TYPE</label>
                <div className="field-value">{poData.purchaseType}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'items' ? 'active' : ''}`}
              onClick={() => setActiveTab('items')}
            >
              Items
            </button>
            <button 
              className={`tab-btn ${activeTab === 'shipping' ? 'active' : ''}`}
              onClick={() => setActiveTab('shipping')}
            >
              Shipping
            </button>
            <button 
              className={`tab-btn ${activeTab === 'billing' ? 'active' : ''}`}
              onClick={() => setActiveTab('billing')}
            >
              Billing
            </button>
            <button 
              className={`tab-btn ${activeTab === 'accounting' ? 'active' : ''}`}
              onClick={() => setActiveTab('accounting')}
            >
              Accounting
            </button>
            <button 
              className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`}
              onClick={() => setActiveTab('communication')}
            >
              Communication
            </button>
            <button 
              className={`tab-btn ${activeTab === 'related' ? 'active' : ''}`}
              onClick={() => setActiveTab('related')}
            >
              Related Records
            </button>
            <button 
              className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`}
              onClick={() => setActiveTab('system')}
            >
              System Information
            </button>
            <button 
              className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`}
              onClick={() => setActiveTab('custom')}
            >
              Custom
            </button>
            <button 
              className={`tab-btn ${activeTab === 'supplier-received' ? 'active' : ''}`}
              onClick={() => setActiveTab('supplier-received')}
            >
              Supplier Received Items
            </button>
          </div>

          <div className="tabs-content">
            {/* Items Tab */}
            {activeTab === 'items' && (
              <div style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1rem', padding: '0.5rem', background: '#f8f9fa', borderRadius: '4px' }}>
                  <strong>EXCHANGE RATE:</strong> {poData.exchangeRate.toFixed(2)}
                </div>
                <div className="items-table-wrapper">
                    <table className="detail-items-table" style={{ width: '100%' }}>
                      <thead>
                        <tr>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '120px' }}>ITEM</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '120px' }}>VENDOR NAME</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '80px' }}>RECEIVED</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '80px' }}>BILLED</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '80px' }}>ON HAND</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '80px' }}>QUANTITY</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '60px' }}>UNITS</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '150px' }}>DESCRIPTION</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '80px' }}>RATE</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '100px' }}>TAX CODE</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '90px' }}>AMOUNT</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '80px' }}>TAX RATE</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '90px' }}>GROSS AMT</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '80px' }}>TAX AMT</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '80px' }}>OPTIONS</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '150px' }}>CUSTOMER:PROJECT</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '120px' }}>DEPARTMENT</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '100px' }}>CLASS</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '80px' }}>BILLABLE</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '140px' }}>MATCH BILL TO RECEIPT</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '140px' }}>EXPECTED RECEIPT DATE</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '80px' }}>CLOSED</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '100px' }}>DO QUANTITY</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '80px' }}>HISTORY</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '140px' }}>JOB ADMIN CHARGES</th>
                          <th style={{ padding: '10px 12px', fontSize: '11px', minWidth: '120px' }}>ADMIN CHARGES</th>
                        </tr>
                      </thead>
                      <tbody>
                        {poData.items.map((item) => (
                          <tr key={item.id}>
                            <td style={{ padding: '10px 12px' }}>{item.item}</td>
                            <td style={{ padding: '10px 12px' }}>{item.vendorName}</td>
                            <td style={{ padding: '10px 12px' }}>{item.received}</td>
                            <td style={{ padding: '10px 12px' }}>{item.billed}</td>
                            <td style={{ padding: '10px 12px' }}>{item.onHand}</td>
                            <td style={{ padding: '10px 12px' }}>{item.quantity}</td>
                            <td style={{ padding: '10px 12px' }}>{item.units}</td>
                            <td style={{ padding: '10px 12px' }}>{item.description}</td>
                            <td style={{ padding: '10px 12px' }}>{item.rate.toFixed(2)}</td>
                            <td style={{ padding: '10px 12px' }}>{item.taxCode}</td>
                            <td style={{ padding: '10px 12px' }}>{item.amount.toFixed(2)}</td>
                            <td style={{ padding: '10px 12px' }}>{item.taxRate}</td>
                            <td style={{ padding: '10px 12px' }}>{item.grossAmt.toFixed(2)}</td>
                            <td style={{ padding: '10px 12px' }}>{item.taxAmt.toFixed(2)}</td>
                            <td style={{ padding: '10px 12px' }}>-</td>
                            <td style={{ padding: '10px 12px' }}>-</td>
                            <td style={{ padding: '10px 12px' }}>TOM : Human Resource</td>
                            <td style={{ padding: '10px 12px' }}>Fabrication</td>
                            <td style={{ padding: '10px 12px' }}>-</td>
                            <td style={{ padding: '10px 12px' }}>-</td>
                            <td style={{ padding: '10px 12px' }}>10/1/2022</td>
                            <td style={{ padding: '10px 12px' }}>-</td>
                            <td style={{ padding: '10px 12px' }}>-</td>
                            <td style={{ padding: '10px 12px' }}><button className="view-link">History</button></td>
                            <td style={{ padding: '10px 12px' }}>-</td>
                            <td style={{ padding: '10px 12px' }}>-</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                {/* Summary - Sales Enquiry Style */}
                <div className="summary-grid" style={{ marginTop: '2rem' }}>
                  <div className="summary-card">
                    <div className="summary-title">SUBTOTAL</div>
                    <div className="summary-value">${poData.subtotal.toFixed(2)}</div>
                  </div>
                  <div className="summary-card">
                    <div className="summary-title">TAX AMOUNT</div>
                    <div className="summary-value">${poData.taxTotal.toFixed(2)}</div>
                  </div>
                  <div className="summary-card">
                    <div className="summary-title">DISCOUNT</div>
                    <div className="summary-value">$0.00</div>
                  </div>
                  <div className="summary-card" style={{ background: '#f8f9fa' }}>
                    <div className="summary-title">TOTAL AMOUNT</div>
                    <div className="summary-value" style={{ color: '#4a90e2' }}>${poData.total.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Shipping Tab */}
            {activeTab === 'shipping' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-section">
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Shipping Information</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>SHIPPING METHOD</label>
                        <div className="field-value">{poData.shippingMethod || '-'}</div>
                      </div>
                      <div className="detail-field">
                        <label>SHIP TO</label>
                        <div className="field-value">{poData.shipTo || '-'}</div>
                      </div>
                      <div className="detail-field">
                        <label>FOB</label>
                        <div className="field-value">{poData.fob || '-'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-section">
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Billing Information</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>VENDOR ADDRESS</label>
                        <div className="field-value">{poData.vendorAddress || '-'}</div>
                      </div>
                      <div className="detail-field">
                        <label>TERMS</label>
                        <div className="field-value">{poData.terms || '-'}</div>
                      </div>
                      <div className="detail-field">
                        <label>INCOTERM</label>
                        <div className="field-value">{poData.incoterm || '-'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Accounting Tab */}
            {activeTab === 'accounting' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-section">
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Accounting</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>TAX ID</label>
                        <div className="field-value">{poData.taxId || '-'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Related Records Tab */}
            {activeTab === 'related' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-tabs" style={{ marginBottom: '1rem' }}>
                  <div className="tabs-header">
                    <button className="tab-btn active">
                      Receipts & Bills
                    </button>
                    <button className="tab-btn">
                      Approvals
                    </button>
                    <button className="tab-btn">
                      Support Cases
                    </button>
                    <button className="tab-btn">
                      Transformations
                    </button>
                  </div>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <button className="btn-toolbar">Print</button>
                </div>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>DATE</th>
                      <th>TYPE</th>
                      <th>NUMBER</th>
                      <th>STATUS</th>
                      <th>LINK TYPE</th>
                      <th>AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                        No records to show.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Communication Tab */}
            {activeTab === 'communication' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-section">
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Communication</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>TO BE PRINTED</label>
                        <div className="field-value">{poData.toBePrinted ? 'Yes' : 'No'}</div>
                      </div>
                      <div className="detail-field">
                        <label>TO BE EMAILED</label>
                        <div className="field-value">{poData.toBeEmailed ? 'Yes' : 'No'}</div>
                      </div>
                      <div className="detail-field">
                        <label>TO BE FAXED</label>
                        <div className="field-value">{poData.toBeFaxed ? 'Yes' : 'No'}</div>
                      </div>
                      <div className="detail-field">
                        <label>VENDOR MESSAGE</label>
                        <div className="field-value">{poData.vendorMessage || '-'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* System Information Tab */}
            {activeTab === 'system' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-section">
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>System Information</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>DATE CREATED</label>
                        <div className="field-value">15/01/2024 10:30 AM</div>
                      </div>
                      <div className="detail-field">
                        <label>LAST MODIFIED</label>
                        <div className="field-value">15/01/2024 2:45 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Supplier Received Items Tab */}
            {activeTab === 'supplier-received' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-section">
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Received Items</h3>
                  </div>
                  <div className="section-body">
                    <table className="detail-items-table">
                      <thead>
                        <tr>
                          <th>ITEM <span style={{ color: 'red' }}>▲</span></th>
                          <th>COUNT OF QUANTITY</th>
                          <th>MEMO</th>
                          <th>SUM OF AMOUNT (FOREIGN CURRENCY)</th>
                          <th>NAME</th>
                          <th>DOCUMENT NUMBER</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>MANPOWER-MONTHLY</td>
                          <td>1</td>
                          <td>WP Renewal-GOVINDAN RAJENDIRAN,SARKERSHA AWAL</td>
                          <td>123.50</td>
                          <td>KEPPEL HOUSING PTE LTD</td>
                          <td>POTMOS00007</td>
                        </tr>
                        <tr>
                          <td>Renewal Cost-HR : Recruitment Costs</td>
                          <td>1</td>
                          <td>New IPA Application Charge</td>
                          <td>175.00</td>
                          <td>KEPPEL HOUSING PTE LTD</td>
                          <td>POTMOS00087</td>
                        </tr>
                        <tr>
                          <td>Renewal Cost-HR : Recruitment Costs</td>
                          <td>1</td>
                          <td>1st Batch New WP Issuance Application in Keppel Tuas</td>
                          <td>183.20</td>
                          <td>KEPPEL HOUSING PTE LTD</td>
                          <td>POTMOS00093</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Custom Tab */}
            {activeTab === 'custom' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-section">
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Custom Fields</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>MATERIAL TYPE</label>
                        <div className="field-value">{poData.materialType || '-'}</div>
                      </div>
                      <div className="detail-field">
                        <label>TEST TRANSACTION FIELD</label>
                        <div className="field-value">{poData.testTransactionField || '-'}</div>
                      </div>
                      <div className="detail-field">
                        <label>MATERIAL SPECIFICATION</label>
                        <div className="field-value">{poData.materialSpecification || '-'}</div>
                      </div>
                      <div className="detail-field">
                        <label>DO RECORD CREATED</label>
                        <div className="field-value">{poData.doRecordCreated ? 'Yes' : 'No'}</div>
                      </div>
                      <div className="detail-field">
                        <label>GST TYPE</label>
                        <div className="field-value">{poData.gstType || '-'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="detail-footer-actions">
          <button className="btn-toolbar-primary" onClick={handleEdit}>
            <i className="fas fa-edit"></i>
            Edit
          </button>
          <button className="btn-toolbar" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button className="btn-toolbar">
            Bill
          </button>
          <button className="btn-toolbar">
            Enter Prepayment
          </button>
          <button className="btn-toolbar">
            <i className="fas fa-cog"></i>
            Actions
          </button>
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

export default ViewPurchaseOrderDetail;
