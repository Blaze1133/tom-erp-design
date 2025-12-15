import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewDebitNoteDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('sales');
  const [systemSubTab, setSystemSubTab] = useState('notes');

  const debitNoteData = {
    documentNumber: 'DN-2025-001',
    date: '14/12/2025',
    customForm: 'TOM Non-Inventory Part Form',
    displayNameCode: '',
    primarySaleUnit: '',
    itemNameNumber: 'Debit Note',
    primaryUnitsType: 'General UOM',
    subitemOf: '',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
    department: 'TOM: Operating',
    location: 'TOM-11',
    class: 'Consumable Item',
    itemCategory: 'Material',
    includeChildren: false,
    upcCode: '',
    primaryBaseUnit: '',
    salesDescription: 'Price adjustment for material variance',
    costEstimateType: 'Item Defined Cost',
    minimumQuantity: '10',
    itemDefinedCost: '50.00',
    maximumQuantity: '100',
    billingSchedule: '',
    incomeAccount: '40200 Sales : Working Progress Sales',
    priceVarianceAccount: '',
    quantityVarianceAccount: '',
    exchangeRateVarianceAccount: '',
    taxSchedule: 'Tax 7%',
    quantityPricingSchedule: '',
    calculateQuantityDiscounts: 'By Line Quantity',
    pricingGroup: '',
    useMarginalRates: false
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('edit-debit-note');
      sessionStorage.setItem('selectedDebitNote', JSON.stringify(debitNoteData));
    }
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-debit-notes');
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-invoice"></i>
          <div>
            <h1>Debit Note</h1>
            <div className="detail-subtitle">
              <span>{debitNoteData.documentNumber}</span>
              <span className="separator">•</span>
              <span>{debitNoteData.itemNameNumber}</span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" title="Back">
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-action" title="Forward">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-action" title="List" onClick={handleBack}>
            <i className="fas fa-list"></i>
          </button>
          <button className="btn-action" title="Search">
            <i className="fas fa-search"></i>
          </button>
          <button className="btn-action" title="Customize">
            <i className="fas fa-cog"></i>
          </button>
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
        <div className="toolbar-spacer"></div>
        <div className="dropdown">
          <button className="btn-toolbar">
            <i className="fas fa-cog"></i>
            Actions
          </button>
        </div>
      </div>

      <div className="detail-content">
        {/* Primary Information Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>CUSTOM FORM</label>
                <div className="field-value">{debitNoteData.customForm}</div>
              </div>

              <div className="detail-field">
                <label>DISPLAY NAME/CODE</label>
                <div className="field-value">{debitNoteData.displayNameCode || '-'}</div>
              </div>

              <div className="detail-field">
                <label>PRIMARY SALE UNIT</label>
                <div className="field-value">{debitNoteData.primarySaleUnit || '-'}</div>
              </div>

              <div className="detail-field">
                <label>ITEM NAME/NUMBER</label>
                <div className="field-value">{debitNoteData.itemNameNumber}</div>
              </div>

              <div className="detail-field">
                <label>PRIMARY UNITS TYPE</label>
                <div className="field-value">{debitNoteData.primaryUnitsType}</div>
              </div>

              <div className="detail-field">
                <label>SUBITEM OF</label>
                <div className="field-value">{debitNoteData.subitemOf || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification Section */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{debitNoteData.subsidiary}</div>
              </div>

              <div className="detail-field">
                <label>DEPARTMENT</label>
                <div className="field-value">{debitNoteData.department}</div>
              </div>

              <div className="detail-field">
                <label>LOCATION</label>
                <div className="field-value">{debitNoteData.location}</div>
              </div>

              <div className="detail-field">
                <label>INCLUDE CHILDREN</label>
                <div className="field-value">{debitNoteData.includeChildren ? 'Yes' : 'No'}</div>
              </div>

              <div className="detail-field">
                <label>CLASS</label>
                <div className="field-value">{debitNoteData.class}</div>
              </div>

              <div className="detail-field">
                <label>ITEM CATEGORY</label>
                <div className="field-value">{debitNoteData.itemCategory}</div>
              </div>

              <div className="detail-field">
                <label>UPC CODE</label>
                <div className="field-value">{debitNoteData.upcCode || '-'}</div>
              </div>

              <div className="detail-field">
                <label>PRIMARY BASE UNIT</label>
                <div className="field-value">{debitNoteData.primaryBaseUnit || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button className={`tab-btn ${activeTab === 'sales' ? 'active' : ''}`} onClick={() => setActiveTab('sales')}>
              Sales / Pricing
            </button>
            <button className={`tab-btn ${activeTab === 'accounting' ? 'active' : ''}`} onClick={() => setActiveTab('accounting')}>
              Accounting
            </button>
            <button className={`tab-btn ${activeTab === 'related' ? 'active' : ''}`} onClick={() => setActiveTab('related')}>
              Related Records
            </button>
            <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>
              Communication
            </button>
            <button className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`} onClick={() => setActiveTab('system')}>
              System Information
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'sales' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-section">
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Sales</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>SALES DESCRIPTION</label>
                        <div className="field-value">{debitNoteData.salesDescription}</div>
                      </div>

                      <div className="detail-field">
                        <label>COST ESTIMATE TYPE</label>
                        <div className="field-value">{debitNoteData.costEstimateType}</div>
                      </div>

                      <div className="detail-field">
                        <label>MINIMUM QUANTITY</label>
                        <div className="field-value">{debitNoteData.minimumQuantity}</div>
                      </div>

                      <div className="detail-field">
                        <label>ITEM DEFINED COST</label>
                        <div className="field-value">{debitNoteData.itemDefinedCost}</div>
                      </div>

                      <div className="detail-field">
                        <label>MAXIMUM QUANTITY</label>
                        <div className="field-value">{debitNoteData.maximumQuantity}</div>
                      </div>

                      <div className="detail-field">
                        <label>BILLING SCHEDULE</label>
                        <div className="field-value">{debitNoteData.billingSchedule || '-'}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="detail-section" style={{ marginTop: '2rem' }}>
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Pricing</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>QUANTITY PRICING SCHEDULE</label>
                        <div className="field-value">{debitNoteData.quantityPricingSchedule || '-'}</div>
                      </div>

                      <div className="detail-field">
                        <label>CALCULATE QUANTITY DISCOUNTS</label>
                        <div className="field-value">{debitNoteData.calculateQuantityDiscounts}</div>
                      </div>

                      <div className="detail-field">
                        <label>PRICING GROUP</label>
                        <div className="field-value">{debitNoteData.pricingGroup || '-'}</div>
                      </div>

                      <div className="detail-field">
                        <label>USE MARGINAL RATES</label>
                        <div className="field-value">{debitNoteData.useMarginalRates ? 'Yes' : 'No'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'accounting' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-section">
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Accounts</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>INCOME ACCOUNT</label>
                        <div className="field-value">{debitNoteData.incomeAccount}</div>
                      </div>

                      <div className="detail-field">
                        <label>PRICE VARIANCE ACCOUNT</label>
                        <div className="field-value">{debitNoteData.priceVarianceAccount || '-'}</div>
                      </div>

                      <div className="detail-field">
                        <label>QUANTITY VARIANCE ACCOUNT</label>
                        <div className="field-value">{debitNoteData.quantityVarianceAccount || '-'}</div>
                      </div>

                      <div className="detail-field">
                        <label>EXCHANGE RATE VARIANCE ACCOUNT</label>
                        <div className="field-value">{debitNoteData.exchangeRateVarianceAccount || '-'}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="detail-section" style={{ marginTop: '2rem' }}>
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Tax / Tariff</h3>
                  </div>
                  <div className="section-body">
                    <div className="detail-grid">
                      <div className="detail-field">
                        <label>TAX SCHEDULE</label>
                        <div className="field-value">{debitNoteData.taxSchedule}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'related' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-section">
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Transactions</h3>
                  </div>
                  <div className="section-body">
                    <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <div>
                        <label style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}>VIEW</label>
                        <select className="form-control" style={{ width: 'auto', display: 'inline-block' }}>
                          <option>Item</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}>TYPE</label>
                        <select className="form-control" style={{ width: 'auto', display: 'inline-block' }}>
                          <option>- All -</option>
                        </select>
                      </div>
                      <button className="btn-toolbar">Edit</button>
                      <button className="btn-toolbar">Customize View</button>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                      <table className="items-table">
                        <thead>
                          <tr>
                            <th>DATE</th>
                            <th>TYPE</th>
                            <th>DOCUMENT NUMBER</th>
                            <th>NAME</th>
                            <th>QUANTITY</th>
                            <th>RATE</th>
                            <th>AMOUNT</th>
                            <th>PURCHASE TYPE</th>
                            <th>MATERIAL SPECIFICATION</th>
                            <th>APPROVAL STATUS</th>
                            <th>REF POSTING PAYBATCH</th>
                            <th>REF PAYBATCH</th>
                            <th>REF.POSTING PAYBATCH</th>
                            <th>CURRENCY</th>
                            <th>REJECTED BY</th>
                            <th>FINAL APPROVED BY</th>
                            <th>PAY TAGGED TO CALENDER EMPLOYEE</th>
                            <th>PAYMENT MODE</th>
                            <th>COMPANY ADDRESS</th>
                            <th>TYPE</th>
                            <th>REF PO NUMBER</th>
                            <th>REF ORDER NO</th>
                            <th>APPROVAL REJECTION REMARKS</th>
                            <th>ISSUED DATE</th>
                            <th>RECEIVED DATE</th>
                            <th>PROJECT MANAGER</th>
                            <th>STORE PERSON</th>
                            <th>REF PR NO</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="28" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                              No records to show.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'communication' && (
              <div style={{ padding: '1.5rem' }}>
                <div className="detail-section">
                  <div className="section-header">
                    <i className="fas fa-chevron-down"></i>
                    <h3>Activities</h3>
                  </div>
                  <div className="section-body">
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', borderBottom: '2px solid #e0e0e0' }}>
                      <button style={{ padding: '0.5rem 1rem', background: 'transparent', border: 'none', borderBottom: '2px solid #5b6b8a', fontWeight: '600', cursor: 'pointer' }}>
                        Activities
                      </button>
                      <button style={{ padding: '0.5rem 1rem', background: 'transparent', border: 'none', cursor: 'pointer' }}>
                        Files
                      </button>
                      <button style={{ padding: '0.5rem 1rem', background: 'transparent', border: 'none', cursor: 'pointer' }}>
                        User Notes
                      </button>
                    </div>

                    <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <div>
                        <label style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}>VIEW</label>
                        <select className="form-control" style={{ width: 'auto', display: 'inline-block' }}>
                          <option>Default</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}>STATUS</label>
                        <select className="form-control" style={{ width: 'auto', display: 'inline-block' }}>
                          <option>- All -</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}>ACTIVITY TYPE</label>
                        <select className="form-control" style={{ width: 'auto', display: 'inline-block' }}>
                          <option>- All -</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <button className="btn-toolbar">New Task</button>
                      <button className="btn-toolbar">Log Task</button>
                      <button className="btn-toolbar">New Phone Call</button>
                      <button className="btn-toolbar">Log Phone Call</button>
                      <button className="btn-toolbar">New Event</button>
                      <button className="btn-toolbar">Log Event</button>
                      <button className="btn-toolbar">View History</button>
                      <button className="btn-toolbar">Customize View</button>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                      <table className="items-table">
                        <thead>
                          <tr>
                            <th>EDIT</th>
                            <th>TITLE</th>
                            <th>DATE</th>
                            <th>TIME</th>
                            <th>OWNER</th>
                            <th>STATUS</th>
                            <th>ASSIGNED TO</th>
                            <th>TYPE</th>
                            <th>MARK</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="9" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                              No records to show.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'system' && (
              <div style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <label style={{ display: 'flex', alignItems: 'center', marginRight: '2rem' }}>
                    <input type="checkbox" style={{ marginRight: '8px' }} />
                    INACTIVE
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" style={{ marginRight: '8px' }} />
                    CHANGE UNIT
                  </label>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '2px solid #e0e0e0' }}>
                  <button 
                    style={{ 
                      padding: '0.5rem 1rem', 
                      background: 'transparent', 
                      border: 'none', 
                      borderBottom: systemSubTab === 'notes' ? '2px solid #5b6b8a' : 'none', 
                      fontWeight: systemSubTab === 'notes' ? '600' : 'normal', 
                      cursor: 'pointer' 
                    }}
                    onClick={() => setSystemSubTab('notes')}
                  >
                    System Notes
                  </button>
                  <button 
                    style={{ 
                      padding: '0.5rem 1rem', 
                      background: 'transparent', 
                      border: 'none', 
                      borderBottom: systemSubTab === 'workflows' ? '2px solid #5b6b8a' : 'none', 
                      fontWeight: systemSubTab === 'workflows' ? '600' : 'normal', 
                      cursor: 'pointer' 
                    }}
                    onClick={() => setSystemSubTab('workflows')}
                  >
                    Active Workflows
                  </button>
                  <button 
                    style={{ 
                      padding: '0.5rem 1rem', 
                      background: 'transparent', 
                      border: 'none', 
                      borderBottom: systemSubTab === 'history' ? '2px solid #5b6b8a' : 'none', 
                      fontWeight: systemSubTab === 'history' ? '600' : 'normal', 
                      cursor: 'pointer' 
                    }}
                    onClick={() => setSystemSubTab('history')}
                  >
                    Workflow History
                  </button>
                </div>

                {systemSubTab === 'notes' && (
                  <div className="detail-section">
                    <div className="section-body">
                      <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div>
                          <label style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}>VIEW</label>
                          <select className="form-control" style={{ width: 'auto', display: 'inline-block' }}>
                            <option>Default</option>
                          </select>
                        </div>
                        <div>
                          <label style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}>FIELD</label>
                          <select className="form-control" style={{ width: 'auto', display: 'inline-block' }}>
                            <option>- All -</option>
                          </select>
                        </div>
                        <button className="btn-toolbar">Customize View</button>
                      </div>

                      <div style={{ overflowX: 'auto' }}>
                        <table className="items-table">
                          <thead>
                            <tr>
                              <th>DATE</th>
                              <th>SET BY</th>
                              <th>CONTEXT</th>
                              <th>TYPE</th>
                              <th>FIELD</th>
                              <th>OLD VALUE</th>
                              <th>NEW VALUE</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                                No records to show.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {systemSubTab === 'workflows' && (
                  <div className="detail-section">
                    <div className="section-body">
                      <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div>
                          <label style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}>VIEW</label>
                          <select className="form-control" style={{ width: 'auto', display: 'inline-block' }}>
                            <option>Default</option>
                          </select>
                        </div>
                        <button className="btn-toolbar">Customize View</button>
                        <button className="btn-toolbar" style={{ marginLeft: 'auto' }}>Refresh</button>
                      </div>

                      <div style={{ overflowX: 'auto' }}>
                        <table className="items-table">
                          <thead>
                            <tr>
                              <th>WORKFLOW</th>
                              <th>CURRENT STATE</th>
                              <th>DATE ENTERED WORKFLOW</th>
                              <th>DATE ENTERED STATE</th>
                              <th>OPTIONS</th>
                              <th>STATUS</th>
                              <th>CANCEL</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                                No records to show.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {systemSubTab === 'history' && (
                  <div className="detail-section">
                    <div className="section-body">
                      <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div>
                          <label style={{ marginRight: '0.5rem', fontSize: '0.875rem' }}>VIEW</label>
                          <select className="form-control" style={{ width: 'auto', display: 'inline-block' }}>
                            <option>Default</option>
                          </select>
                        </div>
                        <button className="btn-toolbar">Customize View</button>
                        <button className="btn-toolbar" style={{ marginLeft: 'auto' }}>Refresh</button>
                      </div>

                      <div style={{ overflowX: 'auto' }}>
                        <table className="items-table">
                          <thead>
                            <tr>
                              <th>WORKFLOW</th>
                              <th>STATE NAME INFO</th>
                              <th>DATE ENTERED STATE</th>
                              <th>DATE EXITED STATE</th>
                              <th>OPTIONS</th>
                              <th>LOG</th>
                              <th>NOTES</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                                No records to show.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="detail-footer-actions">
          <button className="btn-toolbar-primary" onClick={handleEdit}>
            <i className="fas fa-edit"></i>
            Edit
          </button>
          <button className="btn-toolbar" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            Back
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

export default ViewDebitNoteDetail;
