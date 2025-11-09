import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ShipVendorReturns = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [selectedVendor, setSelectedVendor] = useState('- All -');
  const [currentView, setCurrentView] = useState('list'); // 'list', 'detail', or 'edit'
  const [selectedReturn, setSelectedReturn] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const [vendorReturns] = useState([
    {
      id: 1,
      date: '2/4/2022',
      returnNumber: 'VRATOM00019',
      vendorName: 'CHIA HOCK HARDWARE TRADING',
      memo: 'INV 35228 RE UPDATE',
      returnTotal: 306.02,
      currency: 'SGD',
      checked: false
    },
    {
      id: 2,
      date: '28/4/2022',
      returnNumber: 'VRATOM00018',
      vendorName: 'WEICON South East Asia Pte Ltd',
      memo: '',
      returnTotal: 509.05,
      currency: 'SGD',
      checked: false
    }
  ]);

  // Sample items data
  const itemsData = [
    {
      id: 1,
      item: 'PROJECT ITEM',
      vendorName: 'CHIA HOCK HARDWARE TRADING',
      quantity: 34,
      units: 'Each',
      description: 'D-Ring 3 Ton',
      rate: 5.50,
      amount: 187.00,
      taxCode: 'GST_SG:7%',
      taxRate: 7.0,
      taxAmt: 13.09,
      grossAmt: 200.09,
      options: '',
      department: '',
      class: '',
      location: '',
      customerProject: 'TOM21-00062 Ogas Solutions Singapore Pte. Ltd. (A Seawolf Company) – 22-0020-OGAS-Fabrication of Pipe Stack Module M07',
      billable: '',
      closed: '',
      history: 'History'
    },
    {
      id: 2,
      item: 'PROJECT ITEM',
      vendorName: 'CHIA HOCK HARDWARE TRADING',
      quantity: 18,
      units: 'Each',
      description: 'Lashing Belt 3 Ton x 5 mtr',
      rate: 5.50,
      amount: 99.00,
      taxCode: 'GST_SG:7%',
      taxRate: 7.0,
      taxAmt: 6.93,
      grossAmt: 105.93,
      options: '',
      department: '',
      class: '',
      location: '',
      customerProject: 'TOM21-00062 Ogas Solutions Singapore Pte. Ltd. (A Seawolf Company) – 22-0020-OGAS-Fabrication of Pipe Stack Module M07',
      billable: '',
      closed: '',
      history: 'History'
    }
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleSubmit = () => {
    showToast('Vendor returns shipped successfully!', 'success');
  };

  const handleDateClick = (returnItem) => {
    setSelectedReturn(returnItem);
    setCurrentView('detail');
  };

  const handleBack = () => {
    setCurrentView('list');
    setSelectedReturn(null);
  };

  const handleEdit = () => {
    setEditFormData({
      referenceNo: 'VRATOM00019',
      vendor: 'CHIA HOCK HARDWARE TRADING',
      date: '2/4/2022',
      amount: '306.02',
      currency: 'SGD',
      exchangeRate: '1.00',
      tax: '20.02',
      createdFrom: 'Bill #35228',
      memo: 'INV 35228 RE UPDATE',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd',
      department: '',
      class: '',
      location: '',
      purchaseType: '',
      materialSpecification: '',
      customCreatedFrom: 'Purchase Requisition #PR22TOM00157',
      items: itemsData
    });
    setCurrentView('edit');
  };

  // List View
  if (currentView === 'list') {
    return (
      <div className="sales-quotation">
        <div className="page-header" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '20px 30px',
          borderBottom: '2px solid #e0e0e0',
          background: '#ffffff'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <i className="fas fa-shipping-fast" style={{ fontSize: '28px', color: '#4a90e2' }}></i>
            <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '600', color: '#2c3e50' }}>Ship Vendor Return Authorization</h1>
          </div>
        </div>

        <div className="quotation-container">
        {/* Vendor Filter Section */}
        <div style={{ 
          marginBottom: '25px', 
          display: 'flex', 
          gap: '15px',
          alignItems: 'center',
          padding: '15px 20px',
          background: 'linear-gradient(to right, #f8f9fa, #ffffff)',
          borderRadius: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <label style={{ fontWeight: '500', color: '#555', fontSize: '14px' }}>VENDOR:</label>
            <select 
              className="form-control" 
              value={selectedVendor}
              onChange={(e) => setSelectedVendor(e.target.value)}
              style={{ 
                minWidth: '250px',
                borderRadius: '6px',
                padding: '8px 12px'
              }}
            >
              <option>- All -</option>
              <option>CHIA HOCK HARDWARE TRADING</option>
              <option>WEICON South East Asia Pte Ltd</option>
              <option>EVERSAFE ACADEMY PTE LTD</option>
              <option>TOKIO MARINE INSURANCE SINGAPORE LTD.</option>
            </select>
          </div>
        </div>

        {/* Table Section */}
        <div style={{ 
          background: '#ffffff',
          borderRadius: '10px',
          border: '1px solid #e0e0e0',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
          <div style={{ 
            padding: '20px', 
            borderBottom: '1px solid #e0e0e0',
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            background: '#fafbfc'
          }}>
            <h3 style={{ 
              fontSize: '16px', 
              fontWeight: '600', 
              color: '#2c3e50',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <i className="fas fa-list" style={{ color: '#4a90e2' }}></i>
              Vendor Returns to Ship
            </h3>
            <button className="btn btn-secondary" style={{ fontSize: '14px' }}>
              <i className="fas fa-cog" style={{ marginRight: '6px' }}></i>
              Customize
            </button>
          </div>

          <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="detail-items-table" style={{ minWidth: '100%', fontSize: '14px' }}>
              <thead>
                <tr>
                  <th style={{ width: '50px', padding: '12px 8px' }}>RETURN</th>
                  <th style={{ width: '120px', padding: '12px 8px' }}>DATE</th>
                  <th style={{ width: '150px', padding: '12px 8px' }}>RETURN #</th>
                  <th style={{ width: '280px', padding: '12px 8px' }}>VENDOR NAME</th>
                  <th style={{ width: '300px', padding: '12px 8px' }}>MEMO</th>
                  <th style={{ width: '140px', padding: '12px 8px' }}>RETURN TOTAL</th>
                  <th style={{ width: '100px', padding: '12px 8px' }}>CURRENCY</th>
                </tr>
              </thead>
              <tbody>
                {vendorReturns.map((returnItem) => (
                  <tr key={returnItem.id}>
                    <td style={{ textAlign: 'center', padding: '10px 8px' }}>
                      <input type="checkbox" defaultChecked={returnItem.checked} />
                    </td>
                    <td style={{ padding: '10px 8px' }}>
                      <button 
                        onClick={() => handleDateClick(returnItem)}
                        style={{ 
                          color: '#4a90e2', 
                          cursor: 'pointer', 
                          border: 'none', 
                          background: 'none', 
                          textDecoration: 'underline', 
                          fontWeight: '500',
                          padding: 0
                        }}
                      >
                        {returnItem.date}
                      </button>
                    </td>
                    <td style={{ fontWeight: '500', color: '#4a90e2', padding: '10px 8px' }}>
                      {returnItem.returnNumber}
                    </td>
                    <td style={{ padding: '10px 8px' }}>{returnItem.vendorName}</td>
                    <td style={{ fontSize: '13px', color: '#666', padding: '10px 8px' }}>
                      {returnItem.memo}
                    </td>
                    <td className="amount" style={{ fontWeight: '600', padding: '10px 8px', textAlign: 'right' }}>
                      {returnItem.returnTotal.toFixed(2)}
                    </td>
                    <td style={{ padding: '10px 8px' }}>{returnItem.currency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Submit Button */}
        <div style={{ 
          marginTop: '25px', 
          display: 'flex', 
          gap: '12px',
          padding: '15px 20px',
          background: 'linear-gradient(to right, #f8f9fa, #ffffff)',
          borderRadius: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <button className="btn btn-primary" onClick={handleSubmit} style={{ 
            boxShadow: '0 2px 4px rgba(74, 144, 226, 0.2)',
            fontWeight: '500',
            padding: '10px 24px'
          }}>
            <i className="fas fa-check-circle" style={{ marginRight: '8px' }}></i>
            Submit
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
  }

  // Edit View
  if (currentView === 'edit') {
    return (
      <div className="sales-quotation">
        <div className="page-header" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '20px 30px',
          borderBottom: '2px solid #e0e0e0',
          background: '#ffffff'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <i className="fas fa-edit" style={{ fontSize: '26px', color: '#4a90e2' }}></i>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <h1 style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: '#2c3e50' }}>Edit Vendor Return Authorization</h1>
              <span style={{ fontWeight: '700', color: '#4a90e2', fontSize: '18px' }}>
                {editFormData.referenceNo}
              </span>
              <span style={{ color: '#666', fontSize: '16px' }}>
                {editFormData.vendor}
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button className="btn btn-secondary" onClick={() => setCurrentView('detail')} style={{ 
              minWidth: '120px',
              padding: '10px 20px',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              <i className="fas fa-times" style={{ marginRight: '8px' }}></i>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={() => { showToast('Changes saved successfully!', 'success'); setCurrentView('detail'); }} style={{ 
              minWidth: '120px',
              padding: '10px 20px',
              fontSize: '14px',
              fontWeight: '500',
              boxShadow: '0 2px 4px rgba(74, 144, 226, 0.3)'
            }}>
              <i className="fas fa-save" style={{ marginRight: '8px' }}></i>
              Save
            </button>
          </div>
        </div>

        <div className="quotation-container">
          {/* Primary Information */}
          <div className="form-section">
            <h2 className="section-title">
              <i className="fas fa-info-circle"></i>
              Primary Information
            </h2>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">REFERENCE NO.</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={editFormData.referenceNo}
                  disabled
                />
              </div>
              <div className="form-group">
                <label className="form-label">CURRENCY</label>
                <select className="form-control" defaultValue={editFormData.currency}>
                  <option>SGD</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">TAX</label>
                <input 
                  type="text" 
                  className="form-control"
                  defaultValue={editFormData.tax}
                />
              </div>
              <div className="form-group">
                <label className="form-label">VENDOR</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={editFormData.vendor}
                  disabled
                />
              </div>
              <div className="form-group">
                <label className="form-label">EXCHANGE RATE</label>
                <input 
                  type="text" 
                  className="form-control"
                  defaultValue={editFormData.exchangeRate}
                />
              </div>
              <div className="form-group">
                <label className="form-label">CREATED FROM</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={editFormData.createdFrom}
                  disabled
                  style={{ color: '#4a90e2' }}
                />
              </div>
              <div className="form-group">
                <label className="form-label">DATE</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={editFormData.date}
                  disabled
                />
              </div>
              <div className="form-group">
                <label className="form-label">AMOUNT</label>
                <input 
                  type="text" 
                  className="form-control"
                  defaultValue={editFormData.amount}
                />
              </div>
              <div className="form-group">
                <label className="form-label">MEMO</label>
                <input 
                  type="text" 
                  className="form-control"
                  defaultValue={editFormData.memo}
                />
              </div>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

          {/* Classification */}
          <div className="form-section">
            <h2 className="section-title">
              <i className="fas fa-tags"></i>
              Classification
            </h2>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">SUBSIDIARY</label>
                <select className="form-control" defaultValue={editFormData.subsidiary}>
                  <option value="">Select...</option>
                  <option value="TOM S">Tech Offshore Marine (S) Pte Ltd - "TOM S" (ROC 200709673M)</option>
                  <option value="DQ">Tech Offshore Marine (DQ) Pte Ltd - "DQ" (ROC 200704907R)</option>
                  <option value="TEA">Tech Electric & Automation Pte Ltd - "TEA" (ROC 198700264M)</option>
                  <option value="TMO">Tech Marine Offshore (S) Pte Ltd - "TMO" (ROC 200512260M)</option>
                  <option value="SV">Tech Offshore Marine (SV) Pte Ltd - "SV" (ROC 200608955Z)</option>
                  <option value="TOM" selected>Tech Onshore MEP Prefabricators Pte Ltd - "TOM" (ROC 199507962E)</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">CLASS</label>
                <select className="form-control" defaultValue={editFormData.class}>
                  <option value="">Select...</option>
                  <option>Consumable Item</option>
                  <option>Course</option>
                  <option>Cutting Works</option>
                  <option>Electrical</option>
                  <option>Fabrication</option>
                  <option>Hydrotesting</option>
                  <option>Installation work</option>
                  <option>Manpower Supply</option>
                  <option>Material Supply</option>
                  <option>Module /Prefab</option>
                  <option>Piping</option>
                  <option>Project Works</option>
                  <option>Refurbishment works</option>
                  <option>Rental</option>
                  <option>Repair & Referable</option>
                  <option>Sale of Scrap Metal</option>
                  <option>Structure</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">LOCATION</label>
                <select className="form-control" defaultValue={editFormData.location}>
                  <option value="">Select...</option>
                  <option>Hong Hang Shipyard</option>
                  <option>Mega yard</option>
                  <option>MEP MARINE CC</option>
                  <option>Shipyards/Construction</option>
                  <option>Singapore(MEP)</option>
                  <option>TOM -11</option>
                  <option>TOM External Workshop</option>
                  <option>TOM – 13</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">DEPARTMENT</label>
                <select className="form-control" defaultValue={editFormData.department}>
                  <option value="">Select...</option>
                  <option>O&G</option>
                  <option>MEP</option>
                  <option>Engineering</option>
                  <option>Operations</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">PURCHASE TYPE</label>
                <select className="form-control" defaultValue={editFormData.purchaseType}>
                  <option value="">Select...</option>
                  <option>- New -</option>
                  <option>Critical</option>
                  <option>Non Critical</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">MATERIAL SPECIFICATION</label>
                <select className="form-control" defaultValue={editFormData.materialSpecification}>
                  <option value="">Select...</option>
                  <option>- New -</option>
                  <option>GST BEHALF OF</option>
                  <option>Material Specification</option>
                  <option>test2</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">CUSTOM CREATED FROM</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={editFormData.customCreatedFrom}
                  disabled
                  style={{ color: '#4a90e2' }}
                />
              </div>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

          {/* Expenses & Items */}
          <div className="form-section">
            <h2 className="section-title">
              <i className="fas fa-receipt"></i>
              Expenses & Items
            </h2>

            <button className="add-item-btn" style={{ marginBottom: '15px' }}>
              <i className="fas fa-plus"></i>
              Add Item
            </button>

            <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="detail-items-table" style={{ minWidth: '100%', fontSize: '13px' }}>
                <thead>
                  <tr>
                    <th style={{width: '8%'}}>ITEM</th>
                    <th style={{width: '10%'}}>VENDOR NAME</th>
                    <th style={{width: '5%'}}>QUANTITY</th>
                    <th style={{width: '5%'}}>UNITS</th>
                    <th style={{width: '10%'}}>DESCRIPTION</th>
                    <th style={{width: '5%'}}>RATE</th>
                    <th style={{width: '5%'}}>AMOUNT</th>
                    <th style={{width: '7%'}}>TAX CODE</th>
                    <th style={{width: '5%'}}>TAX RATE</th>
                    <th style={{width: '5%'}}>TAX AMT</th>
                    <th style={{width: '6%'}}>GROSS AMT</th>
                    <th style={{width: '5%'}}>OPTIONS</th>
                    <th style={{width: '6%'}}>DEPARTMENT</th>
                    <th style={{width: '5%'}}>CLASS</th>
                    <th style={{width: '6%'}}>LOCATION</th>
                    <th style={{width: '14%'}}>CUSTOMER:PROJECT</th>
                    <th style={{width: '4%'}}>BILLABLE</th>
                    <th style={{width: '4%'}}>CLOSED</th>
                    <th style={{width: '5%'}}>HISTORY</th>
                  </tr>
                </thead>
                <tbody>
                  {editFormData.items?.map((item) => (
                    <tr key={item.id}>
                      <td><input type="text" className="table-input" defaultValue={item.item} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.vendorName} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.quantity} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.units} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.description} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.rate} style={{width: '100%'}} step="0.01" /></td>
                      <td><input type="number" className="table-input" defaultValue={item.amount} style={{width: '100%'}} step="0.01" /></td>
                      <td><input type="text" className="table-input" defaultValue={item.taxCode} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.taxRate + '%'} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.taxAmt} style={{width: '100%'}} step="0.01" /></td>
                      <td><input type="number" className="table-input" defaultValue={item.grossAmt} style={{width: '100%'}} step="0.01" /></td>
                      <td><input type="text" className="table-input" defaultValue={item.options} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.department} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.class} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.location} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.customerProject} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.billable} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.closed} style={{width: '100%'}} /></td>
                      <td style={{ padding: '8px' }}>
                        <span style={{ color: '#4a90e2', cursor: 'pointer', textDecoration: 'underline' }}>
                          {item.history}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
  }

  // Detail View (Read-only)
  return (
    <div className="sales-quotation">
      <div className="page-header" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '20px 30px',
        borderBottom: '2px solid #e0e0e0',
        background: '#ffffff'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <i className="fas fa-file-alt" style={{ fontSize: '26px', color: '#4a90e2' }}></i>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <h1 style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: '#2c3e50' }}>Vendor Return Authorization</h1>
            <span style={{ fontWeight: '700', color: '#4a90e2', fontSize: '18px' }}>
              {selectedReturn?.returnNumber || 'VRATOM00019'}
            </span>
            <span style={{ color: '#666', fontSize: '16px' }}>
              {selectedReturn?.vendorName || 'CHIA HOCK HARDWARE TRADING'}
            </span>
            <span style={{ 
              padding: '4px 12px', 
              background: '#fff3cd', 
              color: '#856404', 
              borderRadius: '4px',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.5px'
            }}>
              PENDING RETURN
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button className="btn btn-secondary" onClick={handleEdit} style={{ 
            minWidth: '120px',
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            <i className="fas fa-edit" style={{ marginRight: '8px' }}></i>
            Edit
          </button>
          <button className="btn btn-secondary" onClick={handleBack} style={{ 
            minWidth: '120px',
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i>
            Back
          </button>
        </div>
      </div>

      <div className="quotation-container">
        {/* Primary Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-info-circle"></i>
            Primary Information
          </h2>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">REFERENCE NO.</label>
              <input 
                type="text" 
                className="form-control"
                value="VRATOM00019"
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">CURRENCY</label>
              <input 
                type="text" 
                className="form-control"
                value="SGD"
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">TAX</label>
              <input 
                type="text" 
                className="form-control"
                value="20.02"
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">VENDOR</label>
              <input 
                type="text" 
                className="form-control"
                value="CHIA HOCK HARDWARE TRADING"
                disabled
                style={{ color: '#4a90e2', cursor: 'pointer' }}
              />
            </div>
            <div className="form-group">
              <label className="form-label">EXCHANGE RATE</label>
              <input 
                type="text" 
                className="form-control"
                value="1.00"
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">CREATED FROM</label>
              <input 
                type="text" 
                className="form-control"
                value="Bill #35228"
                disabled
                style={{ color: '#4a90e2', cursor: 'pointer' }}
              />
            </div>
            <div className="form-group">
              <label className="form-label">DATE</label>
              <input 
                type="text" 
                className="form-control"
                value="2/4/2022"
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">AMOUNT</label>
              <input 
                type="text" 
                className="form-control"
                value="306.02"
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">MEMO</label>
              <input 
                type="text" 
                className="form-control"
                value="INV 35228 RE UPDATE"
                disabled
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Classification */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-tags"></i>
            Classification
          </h2>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">SUBSIDIARY</label>
              <input 
                type="text" 
                className="form-control"
                value="Tech Onshore MEP Prefabricators Pte Ltd"
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">CLASS</label>
              <input 
                type="text" 
                className="form-control"
                value=""
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">LOCATION</label>
              <input 
                type="text" 
                className="form-control"
                value=""
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">DEPARTMENT</label>
              <input 
                type="text" 
                className="form-control"
                value=""
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">PURCHASE TYPE</label>
              <input 
                type="text" 
                className="form-control"
                value=""
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">MATERIAL SPECIFICATION</label>
              <input 
                type="text" 
                className="form-control"
                value=""
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">CUSTOM CREATED FROM</label>
              <input 
                type="text" 
                className="form-control"
                value="Purchase Requisition #PR22TOM00157"
                disabled
                style={{ color: '#4a90e2', cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Expenses & Items */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-receipt"></i>
            Expenses & Items
          </h2>

          <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="detail-items-table" style={{ minWidth: '100%', fontSize: '13px' }}>
              <thead>
                <tr>
                  <th style={{width: '8%'}}>ITEM</th>
                  <th style={{width: '10%'}}>VENDOR NAME</th>
                  <th style={{width: '5%'}}>QUANTITY</th>
                  <th style={{width: '5%'}}>UNITS</th>
                  <th style={{width: '10%'}}>DESCRIPTION</th>
                  <th style={{width: '5%'}}>RATE</th>
                  <th style={{width: '5%'}}>AMOUNT</th>
                  <th style={{width: '7%'}}>TAX CODE</th>
                  <th style={{width: '5%'}}>TAX RATE</th>
                  <th style={{width: '5%'}}>TAX AMT</th>
                  <th style={{width: '6%'}}>GROSS AMT</th>
                  <th style={{width: '5%'}}>OPTIONS</th>
                  <th style={{width: '6%'}}>DEPARTMENT</th>
                  <th style={{width: '5%'}}>CLASS</th>
                  <th style={{width: '6%'}}>LOCATION</th>
                  <th style={{width: '14%'}}>CUSTOMER:PROJECT</th>
                  <th style={{width: '4%'}}>BILLABLE</th>
                  <th style={{width: '4%'}}>CLOSED</th>
                  <th style={{width: '5%'}}>HISTORY</th>
                </tr>
              </thead>
              <tbody>
                {itemsData.map((item) => (
                  <tr key={item.id}>
                    <td style={{ padding: '8px' }}>{item.item}</td>
                    <td style={{ padding: '8px' }}>{item.vendorName}</td>
                    <td style={{ padding: '8px', textAlign: 'right' }}>{item.quantity}</td>
                    <td style={{ padding: '8px' }}>{item.units}</td>
                    <td style={{ padding: '8px' }}>{item.description}</td>
                    <td style={{ padding: '8px', textAlign: 'right' }}>{item.rate.toFixed(2)}</td>
                    <td style={{ padding: '8px', textAlign: 'right' }}>{item.amount.toFixed(2)}</td>
                    <td style={{ padding: '8px' }}>{item.taxCode}</td>
                    <td style={{ padding: '8px', textAlign: 'right' }}>{item.taxRate}%</td>
                    <td style={{ padding: '8px', textAlign: 'right' }}>{item.taxAmt.toFixed(2)}</td>
                    <td style={{ padding: '8px', textAlign: 'right', fontWeight: '600' }}>{item.grossAmt.toFixed(2)}</td>
                    <td style={{ padding: '8px' }}>{item.options}</td>
                    <td style={{ padding: '8px' }}>{item.department}</td>
                    <td style={{ padding: '8px' }}>{item.class}</td>
                    <td style={{ padding: '8px' }}>{item.location}</td>
                    <td style={{ padding: '8px', fontSize: '12px' }}>{item.customerProject}</td>
                    <td style={{ padding: '8px' }}>{item.billable}</td>
                    <td style={{ padding: '8px' }}>{item.closed}</td>
                    <td style={{ padding: '8px' }}>
                      <span style={{ color: '#4a90e2', cursor: 'pointer', textDecoration: 'underline' }}>
                        {item.history}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default ShipVendorReturns;
