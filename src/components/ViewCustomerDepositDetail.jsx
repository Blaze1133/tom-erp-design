import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewCustomerDepositDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('items');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [salesInfoCollapsed, setSalesInfoCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);

  const depositData = {
    deposit: 'CD00001',
    customer: '1000 TEAM LEAD CONSTRUCTION PTE LTD',
    salesOrder: '',
    date: '9/11/2025',
    postingPeriod: 'Nov 2025',
    paymentAmount: '5000.00',
    currency: 'SGD',
    exchangeRate: '1.00',
    memo: '',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
    class: '',
    location: '',
    department: '',
    paymentMethod: 'Cash',
    check: ''
  };

  const items = [
    {
      id: 1,
      item: 'Opening A/R Balance',
      quantity: 1,
      units: '',
      description: 'Opening Old A/R Balance',
      priceLevel: 'Custom',
      rate: '4,266.00',
      amount: '4,266.00',
      taxCode: 'GST_SG-9%',
      taxRate: '0.0%',
      grossAmt: '4,266.00',
      taxAmt: '0.00',
      options: '',
      costEstimate: 'Item Defined Cost',
      estExtendedCost: '0.00',
      estGrossProfit: '4,266.00',
      estGrossProfitPercent: '100.0%'
    }
  ];

  const tabs = [
    { id: 'items', label: 'Items' },
    { id: 'shipping', label: 'Shipping' },
    { id: 'billing', label: 'Billing' },
    { id: 'accounting', label: 'Accounting' },
    { id: 'relationships', label: 'Relationships' },
    { id: 'communication', label: 'Communication' },
    { id: 'related-records', label: 'Related Records' },
    { id: 'system-info', label: 'System Information' },
    { id: 'custom', label: 'Custom' },
    { id: 'tax-reporting', label: 'Tax Reporting' }
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = () => {
    setCurrentPage('edit-customer-deposit');
  };

  const handleBack = () => {
    setCurrentPage('view-customer-deposits');
  };

  const handleList = () => {
    setCurrentPage('view-customer-deposits');
  };

  const calculateSummary = () => {
    const subtotal = items.reduce((sum, item) => sum + parseFloat(item.amount.replace(/,/g, '')), 0);
    const discount = 0;
    const taxTotal = items.reduce((sum, item) => sum + parseFloat(item.taxAmt.replace(/,/g, '')), 0);
    const total = subtotal - discount + taxTotal;

    return { subtotal, discount, taxTotal, total };
  };

  const summary = calculateSummary();

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-invoice"></i>
          <div>
            <h1>Customer Deposit</h1>
            <div className="detail-subtitle">
              <span>{depositData.deposit}</span>
              <span style={{ marginLeft: '1rem', color: '#666' }}>{depositData.customer}</span>
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
          <button className="btn-action" onClick={handleList}>List</button>
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
        {/* Primary Information */}
        <div className={`detail-section ${primaryInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setPrimaryInfoCollapsed(!primaryInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>DEPOSIT #</label>
                <div className="field-value">{depositData.deposit}</div>
              </div>
              <div className="detail-field">
                <label>CUSTOMER</label>
                <div className="field-value">{depositData.customer}</div>
              </div>
              <div className="detail-field">
                <label>SALES ORDER</label>
                <div className="field-value">{depositData.salesOrder || '-'}</div>
              </div>
              <div className="detail-field">
                <label>DATE</label>
                <div className="field-value">{depositData.date}</div>
              </div>
              <div className="detail-field">
                <label>POSTING PERIOD</label>
                <div className="field-value">{depositData.postingPeriod}</div>
              </div>
              <div className="detail-field">
                <label>PAYMENT AMOUNT</label>
                <div className="field-value">{depositData.paymentAmount}</div>
              </div>
              <div className="detail-field">
                <label>CURRENCY</label>
                <div className="field-value">{depositData.currency}</div>
              </div>
              <div className="detail-field">
                <label>EXCHANGE RATE</label>
                <div className="field-value">{depositData.exchangeRate}</div>
              </div>
              <div className="detail-field">
                <label>MEMO</label>
                <div className="field-value">{depositData.memo || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sales Information */}
        <div className={`detail-section ${salesInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setSalesInfoCollapsed(!salesInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Sales Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>PAYMENT METHOD</label>
                <div className="field-value">{depositData.paymentMethod || '-'}</div>
              </div>
              <div className="detail-field">
                <label>CHECK #</label>
                <div className="field-value">{depositData.check || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className={`detail-section ${classificationCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setClassificationCollapsed(!classificationCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{depositData.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>CLASS</label>
                <div className="field-value">{depositData.class || '-'}</div>
              </div>
              <div className="detail-field">
                <label>LOCATION</label>
                <div className="field-value">{depositData.location || '-'}</div>
              </div>
              <div className="detail-field">
                <label>DEPARTMENT</label>
                <div className="field-value">{depositData.department || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="detail-section">
          <div className="tabs-header">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tabs-content">
            {activeTab === 'items' && (
              <>
                <div className="items-table-wrapper">
                  <table className="detail-items-table">
                    <thead>
                      <tr>
                        <th colSpan="16" style={{ background: '#f8f9fa', padding: '1rem', borderBottom: '2px solid #e0e0e0' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                              <div>
                                <span style={{ fontWeight: '600' }}>DISCOUNT: </span>
                                <span>-</span>
                              </div>
                              <div>
                                <span style={{ fontWeight: '600' }}>RATE: </span>
                                <span>-</span>
                              </div>
                            </div>
                            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                              <div>
                                <span style={{ fontWeight: '600' }}>UNAPPLIED: </span>
                                <span>0.00</span>
                              </div>
                              <div>
                                <span style={{ fontWeight: '600' }}>APPLIED: </span>
                                <span>4,266.00</span>
                              </div>
                            </div>
                          </div>
                        </th>
                      </tr>
                      <tr>
                        <th>ITEM</th>
                        <th>QUANTITY</th>
                        <th>UNITS</th>
                        <th>DESCRIPTION</th>
                        <th>PRICE LEVEL</th>
                        <th>RATE</th>
                        <th>AMOUNT</th>
                        <th>TAX CODE</th>
                        <th>TAX RATE</th>
                        <th>GROSS AMT</th>
                        <th>TAX AMT</th>
                        <th>OPTIONS</th>
                        <th>COST ESTIMATE</th>
                        <th>EST EXTENDED COST</th>
                        <th>EST GROSS PROFIT</th>
                        <th>EST GROSS PROFIT %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr key={item.id}>
                          <td style={{ color: 'var(--blue-accent)' }}>{item.item}</td>
                          <td>{item.quantity}</td>
                          <td>{item.units || '-'}</td>
                          <td>{item.description}</td>
                          <td>{item.priceLevel}</td>
                          <td className="amount">{item.rate}</td>
                          <td className="amount">{item.amount}</td>
                          <td>{item.taxCode}</td>
                          <td>{item.taxRate}</td>
                          <td className="amount">{item.grossAmt}</td>
                          <td className="amount">{item.taxAmt}</td>
                          <td>{item.options || '-'}</td>
                          <td>{item.costEstimate}</td>
                          <td className="amount">{item.estExtendedCost}</td>
                          <td className="amount">{item.estGrossProfit}</td>
                          <td>{item.estGrossProfitPercent}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Summary Section - Below Table */}
                <div className="summary-grid">
                  <div className="summary-card">
                    <div className="summary-title">Subtotal</div>
                    <div className="summary-value">${summary.subtotal.toFixed(2)}</div>
                  </div>
                  <div className="summary-card">
                    <div className="summary-title">Discount</div>
                    <div className="summary-value">${summary.discount.toFixed(2)}</div>
                  </div>
                  <div className="summary-card">
                    <div className="summary-title">Tax Total</div>
                    <div className="summary-value">${summary.taxTotal.toFixed(2)}</div>
                  </div>
                  <div className="summary-card" style={{ background: 'var(--gray-ultralight)' }}>
                    <div className="summary-title">Total</div>
                    <div className="summary-value" style={{ color: 'var(--red-primary)' }}>${summary.total.toFixed(2)}</div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'shipping' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>No shipping information available.</p>
              </div>
            )}

            {activeTab === 'billing' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>No billing information available.</p>
              </div>
            )}

            {activeTab === 'accounting' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>No accounting information available.</p>
              </div>
            )}

            {activeTab === 'relationships' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>No relationship records available.</p>
              </div>
            )}

            {activeTab === 'communication' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>No communication records available.</p>
              </div>
            )}

            {activeTab === 'related-records' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>No related records available.</p>
              </div>
            )}

            {activeTab === 'system-info' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>System information not available.</p>
              </div>
            )}

            {activeTab === 'custom' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>No custom fields configured.</p>
              </div>
            )}

            {activeTab === 'tax-reporting' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                <p>Tax reporting information not available.</p>
              </div>
            )}
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

export default ViewCustomerDepositDetail;
