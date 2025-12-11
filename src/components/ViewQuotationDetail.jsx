import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewQuotationDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('items');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);

  const quotationData = {
    documentNumber: 'Q21TOM00025',
    customer: '612 Raise Pte Ltd',
    project: 'Marine Equipment Supply – Q1 2024',
    status: 'EXPIRED',
    estimate: 'Q21TOM00025',
    quotationStatus: 'Proposal',
    probability: '50.0%',
    title: 'Supply of Aluminum Electrode',
    expClose: '7/1/2022',
    expires: '5/2/2022',
    memo: '',
    date: '7/1/2022',
    salesRep: 'TEA0021 Subbiah',
    opportunity: '',
    forecastType: 'Omitted',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    class: '',
    location: '',
    department: '',
    contactPerson: '',
    validity: 'The validity of this Quotation is (30) days from the date of this Quotation. Beyond the valid date, the Project specifications may no longer be applicable, and a new quotation may be required.',
    leadTime: '➢ Refer to the attached Annex-A',
    gst: 'All prices are subject to GST and our normal Terms and Conditions. TOM is a GST registered company. (GST No. M90362330Y)',
    taxes: 'The withholding tax/GST/VAT is included in this quote.',
    payment: 'Progressive and 30 days upon presentation of invoices.',
    variations: 'The price quoted in this quotation applies to the scope of work as herein specified, any additional work or incurrence of any other costs not mentioned will be billed as extras accordingly.',
    signature: 'Each party represents and warrants that on this date they are duly authorized to bind their respective principles by their signatures below.',
    items: [
      {
        id: 1,
        item: 'Welding',
        quantity: 4,
        units: 'Kgs',
        description: 'Aluminum Electrodes 3.2mm x 4 kgs',
        priceLevel: 'Custom',
        rate: 15.00,
        taxCode: 'GST_SG:7%',
        amount: 60.00,
        taxRate: '7.0%',
        taxAmount: 4.20,
        grossAmount: 64.20
      }
    ],
    subtotal: 60.00,
    taxTotal: 4.20,
    total: 64.20
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-quotations');
    }
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('edit-quotation');
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-invoice"></i>
          <div>
            <h1>Quotation</h1>
            <div className="detail-subtitle">
              <span>{quotationData.documentNumber}</span>
              <span>{quotationData.customer}</span>
              <span className="status-badge-detail" style={{ background: '#f44336' }}>
                {quotationData.status}
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
          <button className="btn-action" onClick={() => setCurrentPage('view-quotations')}>List</button>
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
          <i className="fas fa-file-alt"></i>
          Convert to Order
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
                <label>ESTIMATE #</label>
                <div className="field-value">{quotationData.estimate}</div>
              </div>
              <div className="detail-field">
                <label>STATUS</label>
                <div className="field-value">{quotationData.quotationStatus}</div>
              </div>
              <div className="detail-field">
                <label>CUSTOMER</label>
                <div className="field-value">{quotationData.customer}</div>
              </div>
              <div className="detail-field">
                <label>PROJECT</label>
                <div className="field-value">{quotationData.project}</div>
              </div>
              <div className="detail-field">
                <label>PROBABILITY</label>
                <div className="field-value">{quotationData.probability}</div>
              </div>
              <div className="detail-field">
                <label>TITLE</label>
                <div className="field-value">{quotationData.title}</div>
              </div>
              <div className="detail-field">
                <label>EXP. CLOSE</label>
                <div className="field-value">{quotationData.expClose}</div>
              </div>
              <div className="detail-field">
                <label>EXPIRES</label>
                <div className="field-value">{quotationData.expires}</div>
              </div>
              <div className="detail-field">
                <label>MEMO</label>
                <div className="field-value">{quotationData.memo || '-'}</div>
              </div>
              <div className="detail-field">
                <label>DATE</label>
                <div className="field-value">{quotationData.date}</div>
              </div>
              <div className="detail-field">
                <label>SALES REP</label>
                <div className="field-value">{quotationData.salesRep}</div>
              </div>
              <div className="detail-field">
                <label>OPPORTUNITY</label>
                <div className="field-value">{quotationData.opportunity || '-'}</div>
              </div>
              <div className="detail-field">
                <label>FORECAST TYPE</label>
                <div className="field-value">{quotationData.forecastType}</div>
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
                <div className="field-value">{quotationData.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>CLASS</label>
                <div className="field-value">{quotationData.class || '-'}</div>
              </div>
              <div className="detail-field">
                <label>LOCATION</label>
                <div className="field-value">{quotationData.location || '-'}</div>
              </div>
              <div className="detail-field">
                <label>DEPARTMENT</label>
                <div className="field-value">{quotationData.department || '-'}</div>
              </div>
              <div className="detail-field">
                <label>CONTACT PERSON</label>
                <div className="field-value">{quotationData.contactPerson || '-'}</div>
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
              className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`}
              onClick={() => setActiveTab('communication')}
            >
              Communication
            </button>
            <button 
              className={`tab-btn ${activeTab === 'system-info' ? 'active' : ''}`}
              onClick={() => setActiveTab('system-info')}
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
              className={`tab-btn ${activeTab === 'additional' ? 'active' : ''}`}
              onClick={() => setActiveTab('additional')}
            >
              Additional Information
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'items' && (
              <div className="items-table-wrapper">
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>ITEM</th>
                      <th>QTY</th>
                      <th>UNITS</th>
                      <th>DESCRIPTION</th>
                      <th>PRICE LEVEL</th>
                      <th>RATE</th>
                      <th>AMOUNT</th>
                      <th>TAX CODE</th>
                      <th>TAX RATE</th>
                      <th>TAX AMT</th>
                      <th>GROSS AMT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quotationData.items.map((item) => (
                      <tr key={item.id}>
                        <td>{item.item}</td>
                        <td>{item.quantity}</td>
                        <td>{item.units}</td>
                        <td>{item.description}</td>
                        <td>{item.priceLevel}</td>
                        <td>${item.rate.toFixed(2)}</td>
                        <td>${item.amount.toFixed(2)}</td>
                        <td>{item.taxCode}</td>
                        <td>{item.taxRate}</td>
                        <td>${item.taxAmount.toFixed(2)}</td>
                        <td>${item.grossAmount.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                {/* Summary Grid */}
                <div className="summary-grid" style={{ marginTop: '2rem' }}>
                  <div className="summary-card">
                    <div className="summary-title">SUBTOTAL</div>
                    <div className="summary-value">${quotationData.subtotal.toFixed(2)}</div>
                  </div>
                  <div className="summary-card">
                    <div className="summary-title">TAX AMOUNT</div>
                    <div className="summary-value">${quotationData.taxTotal.toFixed(2)}</div>
                  </div>
                  <div className="summary-card">
                    <div className="summary-title">DISCOUNT</div>
                    <div className="summary-value">$0.00</div>
                  </div>
                  <div className="summary-card" style={{ background: '#f8f9fa' }}>
                    <div className="summary-title">TOTAL AMOUNT</div>
                    <div className="summary-value" style={{ color: '#4a90e2' }}>${quotationData.total.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'communication' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>
                <p>No communication records</p>
              </div>
            )}

            {activeTab === 'system-info' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>
                <p>System information section</p>
              </div>
            )}

            {activeTab === 'custom' && (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>
                <p>Custom fields section</p>
              </div>
            )}

            {activeTab === 'additional' && (
              <div className="tab-content" style={{ padding: '1.5rem' }}>
                <div className="detail-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                  {/* Validity */}
                  <div className="detail-field">
                    <label>VALIDITY</label>
                    <div className="field-value" style={{ whiteSpace: 'pre-wrap', background: '#f5f5f5', padding: '10px', borderRadius: '4px', minHeight: '80px' }}>
                      {quotationData.validity}
                    </div>
                  </div>

                  {/* Lead Time */}
                  <div className="detail-field">
                    <label>LEAD TIME</label>
                    <div className="field-value" style={{ whiteSpace: 'pre-wrap', background: '#f5f5f5', padding: '10px', borderRadius: '4px', minHeight: '60px' }}>
                      {quotationData.leadTime}
                    </div>
                  </div>

                  {/* GST */}
                  <div className="detail-field">
                    <label>GST</label>
                    <div className="field-value" style={{ whiteSpace: 'pre-wrap', background: '#f5f5f5', padding: '10px', borderRadius: '4px', minHeight: '70px' }}>
                      {quotationData.gst}
                    </div>
                  </div>

                  {/* Taxes */}
                  <div className="detail-field">
                    <label>TAXES</label>
                    <div className="field-value" style={{ whiteSpace: 'pre-wrap', background: '#f5f5f5', padding: '10px', borderRadius: '4px', minHeight: '60px' }}>
                      {quotationData.taxes}
                    </div>
                  </div>

                  {/* Payment */}
                  <div className="detail-field">
                    <label>PAYMENT</label>
                    <div className="field-value" style={{ whiteSpace: 'pre-wrap', background: '#f5f5f5', padding: '10px', borderRadius: '4px', minHeight: '60px' }}>
                      {quotationData.payment}
                    </div>
                  </div>

                  {/* Variations */}
                  <div className="detail-field">
                    <label>VARIATIONS</label>
                    <div className="field-value" style={{ whiteSpace: 'pre-wrap', background: '#f5f5f5', padding: '10px', borderRadius: '4px', minHeight: '80px' }}>
                      {quotationData.variations}
                    </div>
                  </div>

                  {/* Signature */}
                  <div className="detail-field">
                    <label>SIGNATURE</label>
                    <div className="field-value" style={{ whiteSpace: 'pre-wrap', background: '#f5f5f5', padding: '10px', borderRadius: '4px', minHeight: '60px' }}>
                      {quotationData.signature}
                    </div>
                  </div>
                </div>
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

export default ViewQuotationDetail;
