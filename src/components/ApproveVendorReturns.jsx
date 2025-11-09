import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ApproveVendorReturns = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [amount, setAmount] = useState('0.00');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [viewFilter, setViewFilter] = useState('all');
  const [currentView, setCurrentView] = useState('list'); // 'list', 'detail', or 'edit'
  const [selectedAuthorization, setSelectedAuthorization] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const [authorizations] = useState([
    {
      id: 1,
      date: '18/7/2022',
      returnNumber: 'VRATOM00022',
      vendorName: 'EVERSAFE ACADEMY PTE LTD',
      memo: 'PO created from PR-# PR22TOM00569',
      returnTotal: 159.99,
      currency: 'SGD'
    },
    {
      id: 2,
      date: '2/4/2022',
      returnNumber: 'VRATOM00020',
      vendorName: 'CHIA HOCK HARDWARE TRADING',
      memo: '',
      returnTotal: 306.02,
      currency: 'SGD'
    },
    {
      id: 3,
      date: '4/3/2022',
      returnNumber: 'VRATOM00013',
      vendorName: 'STARHUB LTD',
      memo: 'Old System opening Balance',
      returnTotal: 2558.68,
      currency: 'SGD'
    },
    {
      id: 4,
      date: '14/2/2022',
      returnNumber: 'VRATOM00011',
      vendorName: "BEN'S EXPRESS ENGINEERING PTE LTD",
      memo: 'PO-2079',
      returnTotal: 450.00,
      currency: 'SGD'
    },
    {
      id: 5,
      date: '12/1/2022',
      returnNumber: 'VRATOM00016',
      vendorName: 'TOKIO MARINE INSURANCE SINGAPORE LTD.',
      memo: 'TOM-PO-2021-3364',
      returnTotal: 1497.22,
      currency: 'SGD'
    }
  ]);

  // Sample expense data
  const expenses = [
    {
      id: 1,
      item: '1',
      itemName: 'Safety Equipment',
      quantity: 1,
      units: 'Pcs',
      description: 'Safety goggles',
      rate: 149.57,
      amount: 149.57,
      taxCode: 'GST_SG-7%',
      tax: 7.5,
      taxAmt: 10.47,
      grossAmt: 159.99,
      department: 'O&G',
      class: 'Material Supply',
      location: 'TOM-11',
      customerServiceOf: 'Project ABC',
      customerId: 'CUST001',
      billable: 'Yes'
    },
    {
      id: 2,
      item: '2',
      itemName: 'Hardware Tools',
      quantity: 2,
      units: 'Set',
      description: 'Wrench set',
      rate: 75.00,
      amount: 150.00,
      taxCode: 'GST_SG-7%',
      tax: 7.5,
      taxAmt: 11.25,
      grossAmt: 161.25,
      department: 'MEP',
      class: 'Consumable Item',
      location: 'TOM-12',
      customerServiceOf: 'Project XYZ',
      customerId: 'CUST002',
      billable: 'Yes'
    }
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleDateClick = (authorization) => {
    setSelectedAuthorization(authorization);
    setCurrentView('detail');
  };

  const handleBack = () => {
    setCurrentView('list');
    setSelectedAuthorization(null);
  };

  const handleSubmit = () => {
    showToast('Vendor return authorizations submitted successfully!', 'success');
  };

  const handleMarkAll = () => {
    showToast('All items marked', 'info');
  };

  const handleUnmarkAll = () => {
    showToast('All items unmarked', 'info');
  };

  const handleApproveReturn = () => {
    showToast('Return approved successfully!', 'success');
    handleBack();
  };

  const handleCancelReturn = () => {
    showToast('Return cancelled', 'info');
  };

  const handleEdit = () => {
    setEditFormData({
      referenceNo: selectedAuthorization?.returnNumber || 'VRATOM00022',
      vendor: selectedAuthorization?.vendorName || 'EVERSAFE ACADEMY PTE LTD',
      date: selectedAuthorization?.date || '18/7/2022',
      memo: selectedAuthorization?.memo || '',
      subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
      class: '',
      location: '',
      department: 'O&G',
      purchaseType: '',
      materialSpecification: '',
      items: expenses
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
            <i className="fas fa-check-circle" style={{ fontSize: '28px', color: '#4a90e2' }}></i>
            <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '600', color: '#2c3e50' }}>Approve Vendor Return Authorizations</h1>
          </div>
          <div>
            <button className="btn btn-secondary" style={{ padding: '10px 20px', fontSize: '14px' }}>
              <i className="fas fa-ellipsis-h" style={{ marginRight: '6px' }}></i>
              More
            </button>
          </div>
        </div>

        <div className="quotation-container">
          {/* Action Buttons */}
          <div style={{ 
            marginBottom: '25px', 
            display: 'flex', 
            gap: '12px',
            padding: '15px 20px',
            background: 'linear-gradient(to right, #f8f9fa, #ffffff)',
            borderRadius: '8px',
            border: '1px solid #e0e0e0'
          }}>
            <button className="btn btn-primary" onClick={handleSubmit} style={{ 
              boxShadow: '0 2px 4px rgba(74, 144, 226, 0.2)',
              fontWeight: '500'
            }}>
              <i className="fas fa-check-circle" style={{ marginRight: '8px' }}></i>
              Submit
            </button>
            <button className="btn btn-secondary" onClick={handleMarkAll}>
              <i className="fas fa-check-square" style={{ marginRight: '8px' }}></i>
              Mark All
            </button>
            <button className="btn btn-secondary" onClick={handleUnmarkAll}>
              <i className="fas fa-square" style={{ marginRight: '8px' }}></i>
              Unmark All
            </button>
          </div>

          {/* Filter Section */}
          <div style={{ 
            padding: '25px', 
            background: '#ffffff',
            borderRadius: '10px', 
            marginBottom: '25px',
            border: '1px solid #e0e0e0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{ 
              fontSize: '16px', 
              fontWeight: '600', 
              color: '#2c3e50', 
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <i className="fas fa-filter" style={{ color: '#4a90e2' }}></i>
              Filter Authorizations
            </h3>
            <div className="form-grid" style={{ marginBottom: '15px' }}>
              <div className="form-group">
                <label className="form-label" style={{ fontWeight: '500', color: '#555' }}>AMOUNT</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  style={{ borderRadius: '6px' }}
                />
              </div>
            </div>
            <div className="form-grid" style={{ marginBottom: '0' }}>
              <div className="form-group">
                <label className="form-label" style={{ fontWeight: '500', color: '#555' }}>DATE</label>
                <select className="form-control" style={{ borderRadius: '6px' }}>
                  <option>All</option>
                  <option>Today</option>
                  <option>This Week</option>
                  <option>This Month</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" style={{ fontWeight: '500', color: '#555' }}>FROM</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  style={{ borderRadius: '6px' }}
                />
              </div>
              <div className="form-group">
                <label className="form-label" style={{ fontWeight: '500', color: '#555' }}>TO</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  style={{ borderRadius: '6px' }}
                />
              </div>
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
                Pending Approvals
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
                    <th style={{ width: '50px', padding: '10px 8px' }}></th>
                    <th style={{ width: '100px', padding: '10px 8px' }}>DATE ▼</th>
                    <th style={{ width: '140px', padding: '10px 8px' }}>RETURN #</th>
                    <th style={{ width: '250px', padding: '10px 8px' }}>VENDOR NAME</th>
                    <th style={{ width: '300px', padding: '10px 8px' }}>MEMO</th>
                    <th style={{ width: '120px', padding: '10px 8px' }}>RETURN TOTAL</th>
                    <th style={{ width: '80px', padding: '10px 8px' }}>CURRENCY</th>
                  </tr>
                </thead>
                <tbody>
                  {authorizations.map((auth) => (
                    <tr key={auth.id}>
                      <td style={{ textAlign: 'center', padding: '8px' }}>
                        <input type="checkbox" />
                      </td>
                      <td style={{ padding: '8px' }}>
                        <button 
                          onClick={() => handleDateClick(auth)}
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
                          {auth.date}
                        </button>
                      </td>
                      <td style={{ fontWeight: '500', color: '#4a90e2', padding: '8px' }}>{auth.returnNumber}</td>
                      <td style={{ padding: '8px' }}>{auth.vendorName}</td>
                      <td style={{ fontSize: '13px', color: '#666', padding: '8px' }}>{auth.memo}</td>
                      <td className="amount" style={{ fontWeight: '600', padding: '8px' }}>{auth.returnTotal.toFixed(2)}</td>
                      <td style={{ padding: '8px' }}>{auth.currency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Action Buttons */}
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
              fontWeight: '500'
            }}>
              <i className="fas fa-check-circle" style={{ marginRight: '8px' }}></i>
              Submit
            </button>
            <button className="btn btn-secondary" onClick={handleMarkAll}>
              <i className="fas fa-check-square" style={{ marginRight: '8px' }}></i>
              Mark All
            </button>
            <button className="btn btn-secondary" onClick={handleUnmarkAll}>
              <i className="fas fa-square" style={{ marginRight: '8px' }}></i>
              Unmark All
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
            <i className="fas fa-edit" style={{ fontSize: '28px', color: '#4a90e2' }}></i>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <h1 style={{ margin: 0, fontSize: '22px', fontWeight: '600', color: '#2c3e50' }}>Edit Vendor Return Authorization</h1>
              <div style={{ fontSize: '15px', color: '#2c3e50', lineHeight: '1.4' }}>
                <span style={{ fontWeight: '600', color: '#4a90e2' }}>
                  {editFormData.referenceNo}
                </span>
                <span style={{ margin: '0 10px', color: '#d0d0d0' }}>•</span>
                <span style={{ color: '#666' }}>
                  {editFormData.vendor}
                </span>
              </div>
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
                <select className="form-control">
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
                  defaultValue="10.47"
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
                  defaultValue="1.00"
                />
              </div>
              <div className="form-group">
                <label className="form-label">GST REGISTRATION</label>
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="Enter GST registration"
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
                <label className="form-label">CREATED FROM</label>
                <input 
                  type="text" 
                  className="form-control"
                  value="Bill #1014808"
                  disabled
                  style={{ color: '#4a90e2' }}
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
              <div className="form-group">
                <label className="form-label">AMOUNT</label>
                <input 
                  type="text" 
                  className="form-control"
                  defaultValue="159.99"
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
                <select className="form-control">
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
                <select className="form-control">
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
                <select className="form-control">
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
                <select className="form-control">
                  <option value="">Select...</option>
                  <option selected>O&G</option>
                  <option>MEP</option>
                  <option>Engineering</option>
                  <option>Operations</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">PURCHASE TYPE</label>
                <select className="form-control">
                  <option value="">Select...</option>
                  <option>- New -</option>
                  <option>Critical</option>
                  <option>Non Critical</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">MATERIAL SPECIFICATION</label>
                <select className="form-control">
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
                  value="Purchase Requisition #PR22TOM00569"
                  disabled
                  style={{ color: '#4a90e2' }}
                />
              </div>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

          {/* Items Table */}
          <div className="form-section">
            <h2 className="section-title">
              <i className="fas fa-box"></i>
              Items
            </h2>
            
            <button className="add-item-btn" style={{ marginBottom: '15px' }}>
              <i className="fas fa-plus"></i>
              Add Item
            </button>

            <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
              <table className="detail-items-table" style={{ minWidth: '100%', fontSize: '13px' }}>
                <thead>
                  <tr>
                    <th style={{width: '4%'}}>ITEM</th>
                    <th style={{width: '8%'}}>QUANTITY</th>
                    <th style={{width: '6%'}}>UNITS</th>
                    <th style={{width: '10%'}}>DESCRIPTION</th>
                    <th style={{width: '6%'}}>RATE</th>
                    <th style={{width: '7%'}}>AMOUNT</th>
                    <th style={{width: '8%'}}>TAX CODE</th>
                    <th style={{width: '5%'}}>TAX</th>
                    <th style={{width: '7%'}}>TAX AMT</th>
                    <th style={{width: '7%'}}>GROSS AMT</th>
                    <th style={{width: '7%'}}>CLASS</th>
                    <th style={{width: '8%'}}>LOCATION</th>
                    <th style={{width: '10%'}}>CUSTOMER PROJECT</th>
                    <th style={{width: '7%'}}>BILLABLE</th>
                  </tr>
                </thead>
                <tbody>
                  {editFormData.items?.map((item) => (
                    <tr key={item.id}>
                      <td><input type="text" className="table-input" defaultValue={item.item} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.quantity} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.units} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.description} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.rate} style={{width: '100%'}} step="0.01" /></td>
                      <td><input type="number" className="table-input" defaultValue={item.amount} style={{width: '100%'}} step="0.01" /></td>
                      <td><input type="text" className="table-input" defaultValue={item.taxCode} style={{width: '100%'}} /></td>
                      <td><input type="text" className="table-input" defaultValue={item.tax + '%'} style={{width: '100%'}} /></td>
                      <td><input type="number" className="table-input" defaultValue={item.taxAmt} style={{width: '100%'}} step="0.01" /></td>
                      <td><input type="number" className="table-input" defaultValue={item.grossAmt} style={{width: '100%'}} step="0.01" /></td>
                      <td>
                        <select className="table-input" defaultValue={item.class} style={{width: '100%'}}>
                          <option value="">Select...</option>
                          <option>Consumable Item</option>
                          <option>Material Supply</option>
                          <option>Fabrication</option>
                        </select>
                      </td>
                      <td>
                        <select className="table-input" defaultValue={item.location} style={{width: '100%'}}>
                          <option value="">Select...</option>
                          <option>TOM-11</option>
                          <option>TOM-12</option>
                          <option>Hong Hang Shipyard</option>
                        </select>
                      </td>
                      <td><input type="text" className="table-input" defaultValue={item.customerServiceOf} style={{width: '100%'}} /></td>
                      <td style={{textAlign: 'center'}}>
                        <input type="checkbox" defaultChecked={item.billable === 'Yes'} />
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

  // Detail View
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
              {selectedAuthorization?.returnNumber || 'VRATOM00022'}
            </span>
            <span style={{ color: '#666', fontSize: '16px' }}>
              {selectedAuthorization?.vendorName || 'EVERSAFE ACADEMY PTE LTD'}
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
              PENDING APPROVAL
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
          <button className="btn btn-secondary" onClick={handleCancelReturn} style={{ 
            minWidth: '140px',
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            Cancel Return
          </button>
          <button className="btn btn-primary" onClick={handleApproveReturn} style={{ 
            minWidth: '140px',
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: '500',
            boxShadow: '0 2px 4px rgba(74, 144, 226, 0.3)'
          }}>
            Approve Return
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
                value={selectedAuthorization?.returnNumber || 'VRATOM00022'}
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
                value="10.47"
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">VENDOR</label>
              <input 
                type="text" 
                className="form-control"
                value={selectedAuthorization?.vendorName || 'EVERSAFE ACADEMY PTE LTD'}
                disabled
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
              <label className="form-label">GST REGISTRATION</label>
              <input 
                type="text" 
                className="form-control"
                value=""
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">DATE</label>
              <input 
                type="text" 
                className="form-control"
                value={selectedAuthorization?.date || '18/7/2022'}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">CREATED FROM</label>
              <input 
                type="text" 
                className="form-control"
                value="Bill #1014808"
                disabled
                style={{ color: '#4a90e2' }}
              />
            </div>
            <div className="form-group">
              <label className="form-label">MEMO</label>
              <input 
                type="text" 
                className="form-control"
                value={selectedAuthorization?.memo || 'PO created from PR-# PR22TOM00569'}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">AMOUNT</label>
              <input 
                type="text" 
                className="form-control"
                value="159.99"
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
                value="Tech Onshore MEP Prefabricators Pte Ltd."
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
                value="O&G"
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
                value="Purchase Requisition #PR22TOM00569"
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
          
          <div style={{ marginBottom: '15px', padding: '10px', background: '#f8f9fa', borderRadius: '6px' }}>
            <div style={{ fontSize: '0.875rem' }}>
              <strong>Expenses:</strong> 0.00 &nbsp;&nbsp;&nbsp; <strong>Items:</strong> 149.57+
            </div>
          </div>

          <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="detail-items-table" style={{ minWidth: '100%', fontSize: '13px' }}>
              <thead>
                <tr>
                  <th style={{width: '3%'}}>ITEM</th>
                  <th style={{width: '12%'}}>ITEM NAME</th>
                  <th style={{width: '4%'}}>QUANTITY</th>
                  <th style={{width: '4%'}}>UNITS</th>
                  <th style={{width: '8%'}}>DESCRIPTION</th>
                  <th style={{width: '5%'}}>RATE</th>
                  <th style={{width: '5%'}}>AMOUNT</th>
                  <th style={{width: '6%'}}>TAX CODE</th>
                  <th style={{width: '4%'}}>TAX</th>
                  <th style={{width: '5%'}}>TAX AMT</th>
                  <th style={{width: '6%'}}>GROSS AMT</th>
                  <th style={{width: '6%'}}>DEPARTMENT</th>
                  <th style={{width: '5%'}}>CLASS</th>
                  <th style={{width: '5%'}}>LOCATION</th>
                  <th style={{width: '12%'}}>CUSTOMER SERVICE OF</th>
                  <th style={{width: '6%'}}>CUSTOMER ID</th>
                  <th style={{width: '4%'}}>BILLABLE</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense) => (
                  <tr key={expense.id}>
                    <td style={{ padding: '8px' }}>{expense.item}</td>
                    <td style={{ padding: '8px', fontSize: '12px' }}>{expense.itemName}</td>
                    <td style={{ padding: '8px', textAlign: 'right' }}>{expense.quantity}</td>
                    <td style={{ padding: '8px' }}>{expense.units}</td>
                    <td style={{ padding: '8px' }}>{expense.description}</td>
                    <td style={{ padding: '8px', textAlign: 'right' }}>{expense.rate.toFixed(2)}</td>
                    <td style={{ padding: '8px', textAlign: 'right' }}>{expense.amount.toFixed(2)}</td>
                    <td style={{ padding: '8px' }}>{expense.taxCode}</td>
                    <td style={{ padding: '8px', textAlign: 'right' }}>{expense.tax}%</td>
                    <td style={{ padding: '8px', textAlign: 'right' }}>{expense.taxAmt.toFixed(2)}</td>
                    <td style={{ padding: '8px', textAlign: 'right', fontWeight: '600' }}>{expense.grossAmt.toFixed(2)}</td>
                    <td style={{ padding: '8px' }}>{expense.department}</td>
                    <td style={{ padding: '8px' }}>{expense.class}</td>
                    <td style={{ padding: '8px' }}>{expense.location}</td>
                    <td style={{ padding: '8px', fontSize: '12px' }}>{expense.customerServiceOf}</td>
                    <td style={{ padding: '8px' }}>{expense.customerId}</td>
                    <td style={{ padding: '8px' }}>{expense.billable}</td>
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

export default ApproveVendorReturns;
