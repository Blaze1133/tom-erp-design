import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewEnquiryDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('items');
  const [primaryInfoCollapsed, setPrimaryInfoCollapsed] = useState(false);
  const [forecastingCollapsed, setForecastingCollapsed] = useState(false);
  const [classificationCollapsed, setClassificationCollapsed] = useState(false);

  const enquiryData = {
    documentNumber: 'E22TOM80024',
    title: 'Test Enquiry 7 Test Customer',
    status: 'IN PROGRESS',
    opportunity: 'E22TOM00024',
    salesRep: '',
    expectedClose: '15/7/2022',
    actualClose: '',
    customer: 'TOM22-00733 TECH ONSHORE MEP-PREFABRICATORS PTE LTD : 25-00010-TOM-Riser Concept',
    details: '',
    probability: '50.0%',
    winLossReason: '',
    projectedTotal: 1000.00,
    forecastType: 'Omitted',
    weightedTotal: 500.00,
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    department: 'MEP',
    class: 'Fabrication',
    location: 'Singapore (MEP)',
    taxTotal: 90.00,
    contactPerson: '',
    lastSalesActivity: '',
    items: [
      {
        id: 1,
        item: 'Fabrication',
        quantity: 1,
        units: 'Each',
        description: 'Marine equipment fabrication and installation',
        priceLevel: 'Custom',
        rate: 1000.00,
        amount: 1000.00,
        taxCode: 'GST_SG-9%',
        grossAmount: 1090.00,
        class: 'Fabrication',
        costEstimateType: 'Fixed',
        estimatedExtendedCost: 800.00
      }
    ]
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('edit-enquiry');
    }
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-enquiries');
    }
  };

  const handleConvertToQuotation = () => {
    showToast('Converting to Quotation...', 'success');
    setTimeout(() => {
      showToast('Successfully converted to Quotation!', 'success');
      if (setCurrentPage) {
        setCurrentPage('view-enquiries');
      }
    }, 500);
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-file-alt"></i>
          <div>
            <h1>Enquiry</h1>
            <div className="detail-subtitle">
              <span>{enquiryData.documentNumber}</span>
              <span>{enquiryData.title}</span>
              <span className="status-badge-detail" style={{ background: '#ff9800' }}>
                {enquiryData.status}
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
          <button className="btn-action" onClick={() => setCurrentPage('view-enquiries')}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar-primary" onClick={handleConvertToQuotation}>
          <i className="fas fa-exchange-alt"></i>
          Convert to Quotation
        </button>
        <button className="btn-toolbar" onClick={handleEdit}>
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
        {/* Primary Information Section */}
        <div className={`detail-section ${primaryInfoCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setPrimaryInfoCollapsed(!primaryInfoCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>OPPORTUNITY #</label>
                <div className="field-value">{enquiryData.opportunity}</div>
              </div>
              <div className="detail-field">
                <label>CONTACT PERSON</label>
                <div className="field-value">{enquiryData.contactPerson || '-'}</div>
              </div>
              <div className="detail-field">
                <label>EXPECTED CLOSE</label>
                <div className="field-value">{enquiryData.expectedClose}</div>
              </div>
              <div className="detail-field">
                <label>TITLE</label>
                <div className="field-value">{enquiryData.title}</div>
              </div>
              <div className="detail-field">
                <label>STATUS</label>
                <div className="field-value">{enquiryData.status}</div>
              </div>
              <div className="detail-field">
                <label>ACTUAL CLOSE</label>
                <div className="field-value">{enquiryData.actualClose || '-'}</div>
              </div>
              <div className="detail-field">
                <label>COMPANY</label>
                <div className="field-value">{enquiryData.customer}</div>
              </div>
              <div className="detail-field">
                <label>PROBABILITY</label>
                <div className="field-value">{enquiryData.probability}</div>
              </div>
              <div className="detail-field">
                <label>WIN/LOSS REASON</label>
                <div className="field-value">{enquiryData.winLossReason || '-'}</div>
              </div>
              <div className="detail-field">
                <label>DETAILS</label>
                <div className="field-value">{enquiryData.details || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Forecasting Section */}
        <div className={`detail-section ${forecastingCollapsed ? 'collapsed' : ''}`}>
          <div className="section-header" onClick={() => setForecastingCollapsed(!forecastingCollapsed)}>
            <i className="fas fa-chevron-down"></i>
            <h3>Forecasting</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>PROJECTED TOTAL</label>
                <div className="field-value">${enquiryData.projectedTotal.toFixed(2)}</div>
              </div>
              <div className="detail-field">
                <label>FORECAST TYPE</label>
                <div className="field-value">{enquiryData.forecastType}</div>
              </div>
              <div className="detail-field">
                <label>WEIGHTED TOTAL</label>
                <div className="field-value">${enquiryData.weightedTotal.toFixed(2)}</div>
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
                <div className="field-value">{enquiryData.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>CLASS</label>
                <div className="field-value">{enquiryData.class}</div>
              </div>
              <div className="detail-field">
                <label>LOCATION</label>
                <div className="field-value">{enquiryData.location}</div>
              </div>
              <div className="detail-field">
                <label>DEPARTMENT</label>
                <div className="field-value">{enquiryData.department}</div>
              </div>
              <div className="detail-field">
                <label>TAX TOTAL</label>
                <div className="field-value">${enquiryData.taxTotal.toFixed(2)}</div>
              </div>
              <div className="detail-field">
                <label>SALES REP</label>
                <div className="field-value">{enquiryData.salesRep || '-'}</div>
              </div>
              <div className="detail-field">
                <label>LAST SALES ACTIVITY</label>
                <div className="field-value">{enquiryData.lastSalesActivity || '-'}</div>
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
                      <th>GROSS AMT</th>
                      <th>CLASS</th>
                      <th>COST EST. TYPE</th>
                      <th>EST. EXT. COST</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enquiryData.items.map((item) => (
                      <tr key={item.id}>
                        <td>{item.item}</td>
                        <td>{item.quantity}</td>
                        <td>{item.units}</td>
                        <td>{item.description}</td>
                        <td>{item.priceLevel}</td>
                        <td>${item.rate.toFixed(2)}</td>
                        <td>${item.amount.toFixed(2)}</td>
                        <td>{item.taxCode}</td>
                        <td>${item.grossAmount.toFixed(2)}</td>
                        <td>{item.class}</td>
                        <td>{item.costEstimateType}</td>
                        <td>${item.estimatedExtendedCost.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

export default ViewEnquiryDetail;
