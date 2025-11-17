import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditVendorReturn = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('expenses');

  const [formData, setFormData] = useState({
    authorization: 'Refund Vendor Authorization',
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
  });

  const [expenseItems, setExpenseItems] = useState([
    {
      id: 1,
      item: 'Non Inventoried - Insurance',
      vendorName: 'Foreign Workers Bond',
      quantity: '1',
      units: 'pors',
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
  ]);

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleItemChange = (id, field, value) => {
    setExpenseItems(expenseItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleAddItem = () => {
    const newItem = {
      id: expenseItems.length + 1,
      item: '',
      vendorName: '',
      quantity: '',
      units: '',
      description: '',
      rate: 0,
      amount: 0,
      taxCode: '',
      taxRate: '',
      taxAmt: 0,
      grossAmt: 0,
      options: '',
      department: 'TOM : Human Resource',
      class: '',
      location: '',
      customerProject: '',
      billable: '',
      closed: ''
    };
    setExpenseItems([...expenseItems, newItem]);
    showToast('New item added to table', 'success');
  };

  const handleRemoveItem = (id) => {
    if (expenseItems.length > 1) {
      setExpenseItems(expenseItems.filter(item => item.id !== id));
      showToast('Item removed from table', 'success');
    } else {
      showToast('Cannot remove the last item', 'error');
    }
  };

  const handleClearAllLines = () => {
    if (window.confirm('Are you sure you want to clear all lines?')) {
      setExpenseItems([{
        id: 1,
        item: '',
        vendorName: '',
        quantity: '',
        units: '',
        description: '',
        rate: 0,
        amount: 0,
        taxCode: '',
        taxRate: '',
        taxAmt: 0,
        grossAmt: 0,
        options: '',
        department: 'TOM : Human Resource',
        class: '',
        location: '',
        customerProject: '',
        billable: '',
        closed: ''
      }]);
      showToast('All lines cleared', 'success');
    }
  };

  const handleSave = () => {
    showToast('Vendor return saved successfully!', 'success');
    setTimeout(() => {
      if (setCurrentPage) {
        setCurrentPage('view-vendor-return-detail');
      }
    }, 1000);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-vendor-return-detail');
      }
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
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
              <span style={{ fontSize: '16px', fontWeight: '600', color: '#333' }}>VRATMOS00002</span>
              <span style={{ fontSize: '14px', color: '#666' }}>TOKIO MARINE INSURANCE SINGAPORE LTD.</span>
              <span style={{ 
                background: '#4a90e2', 
                color: 'white', 
                padding: '4px 12px', 
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: '600'
              }}>
                PENDING CREDIT
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>List</button>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>Search</button>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>Customize</button>
          <button className="btn-view-option" style={{ padding: '6px 12px', fontSize: '13px' }}>More</button>
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
          <button className="btn btn-primary" onClick={handleSave} style={{ padding: '6px 16px', fontSize: '13px' }}>
            <i className="fas fa-save"></i> Save
          </button>
          <button className="btn btn-secondary" onClick={handleCancel} style={{ padding: '6px 16px', fontSize: '13px' }}>
            Cancel
          </button>
          <button className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '13px' }}>
            View
          </button>
          <button className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '13px' }}>
            Recalc
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
          borderRadius: '8px', 
          padding: '24px',
          marginBottom: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: '16px', 
            fontWeight: '600', 
            color: '#333', 
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <i className="fas fa-info-circle" style={{ color: '#4a90e2' }}></i>
            Primary Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0 0 20px 0' }} />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px 30px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Custom Form <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <select 
                className="form-control"
                value={formData.authorization}
                onChange={(e) => handleFormChange('authorization', e.target.value)}
              >
                <option>TOM Vendor Return Authorization</option>
                <option>Refund Vendor Authorization</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Amount</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.amount}
                onChange={(e) => handleFormChange('amount', e.target.value)}
                step="0.01"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Tax</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.tax}
                onChange={(e) => handleFormChange('tax', e.target.value)}
                step="0.01"
                readOnly
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Reference No.</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.referenceNo}
                onChange={(e) => handleFormChange('referenceNo', e.target.value)}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Currency <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <select 
                className="form-control"
                value={formData.currency}
                onChange={(e) => handleFormChange('currency', e.target.value)}
              >
                <option>SGD</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>VAT Registration</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.vatRegistration || ''}
                onChange={(e) => handleFormChange('vatRegistration', e.target.value)}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Vendor <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <input 
                type="text" 
                className="form-control"
                value={formData.vendor}
                onChange={(e) => handleFormChange('vendor', e.target.value)}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Exchange Rate <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <input 
                type="number" 
                className="form-control"
                value={formData.exchangeRate}
                onChange={(e) => handleFormChange('exchangeRate', e.target.value)}
                step="0.01"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Memo</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.memo}
                onChange={(e) => handleFormChange('memo', e.target.value)}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Date <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <input 
                type="date" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleFormChange('date', e.target.value)}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Created From</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.createdFrom}
                onChange={(e) => handleFormChange('createdFrom', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Classification */}
        <div style={{ 
          background: 'white', 
          borderRadius: '8px', 
          padding: '24px',
          marginBottom: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: '16px', 
            fontWeight: '600', 
            color: '#333', 
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <i className="fas fa-tags" style={{ color: '#4a90e2' }}></i>
            Classification
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0 0 20px 0' }} />
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 30px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Subsidiary <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleFormChange('subsidiary', e.target.value)}
              >
                <option>Tech Marine Offshore (S) Pte Ltd</option>
                <option>Tech Onshore MEP Prefabricators Pte Ltd.</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Class</label>
              <select 
                className="form-control"
                value={formData.class}
                onChange={(e) => handleFormChange('class', e.target.value)}
              >
                <option value="">Select...</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                Department <span style={{ color: '#e53e3e' }}>*</span>
              </label>
              <select 
                className="form-control"
                value={formData.department}
                onChange={(e) => handleFormChange('department', e.target.value)}
              >
                <option>TOM : Human Resource</option>
                <option>TOM : Finance : Internal Transfer</option>
                <option>TOM : IT</option>
                <option>TOM : Logistic</option>
                <option>TOM : Operating</option>
                <option>TOM : Purchase</option>
                <option>TOM : Sales and Marketing</option>
                <option>TOM : Security</option>
                <option>TOM : Nampak Reinsure</option>
                <option>TOM : Auction Handover</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Location</label>
              <select 
                className="form-control"
                value={formData.location}
                onChange={(e) => handleFormChange('location', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Singapore (TMO)</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Purchase Type</label>
              <select 
                className="form-control"
                value={formData.purchaseType}
                onChange={(e) => handleFormChange('purchaseType', e.target.value)}
              >
                <option value="">Select...</option>
                <option>Critical</option>
                <option>Non Critical</option>
              </select>
            </div>

            <div></div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Material Specification</label>
              <select 
                className="form-control"
                value={formData.materialSpecification}
                onChange={(e) => handleFormChange('materialSpecification', e.target.value)}
              >
                <option value="">Select...</option>
                <option>GST BEHALF OF</option>
                <option>Material Specification</option>
                <option>test2</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>Custom Created From</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.customCreatedFrom}
                onChange={(e) => handleFormChange('customCreatedFrom', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Expenses & Items Section */}
        <div style={{ 
          background: 'white', 
          borderRadius: '8px', 
          padding: '24px',
          marginBottom: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <div style={{ 
            background: '#5a6c7d', 
            padding: '0',
            display: 'flex',
            borderRadius: '8px 8px 0 0',
            marginLeft: '-24px',
            marginRight: '-24px',
            marginTop: '-24px',
            marginBottom: '20px'
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
                borderRadius: '8px 8px 0 0'
              }}
            >
              Expenses & Items
            </button>
            <button 
              onClick={() => setActiveTab('billing')}
              style={{ 
                background: activeTab === 'billing' ? 'white' : 'transparent', 
                border: 'none', 
                padding: '12px 24px', 
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: activeTab === 'billing' ? '600' : '500',
                color: activeTab === 'billing' ? '#333' : 'white',
                borderRadius: '8px 8px 0 0'
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
                fontWeight: activeTab === 'relationships' ? '600' : '500',
                color: activeTab === 'relationships' ? '#333' : 'white',
                borderRadius: '8px 8px 0 0'
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
                fontWeight: activeTab === 'communication' ? '600' : '500',
                color: activeTab === 'communication' ? '#333' : 'white',
                borderRadius: '8px 8px 0 0'
              }}
            >
              Communication
            </button>
            <button 
              onClick={() => setActiveTab('relatedRecords')}
              style={{ 
                background: activeTab === 'relatedRecords' ? 'white' : 'transparent', 
                border: 'none', 
                padding: '12px 24px', 
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: activeTab === 'relatedRecords' ? '600' : '500',
                color: activeTab === 'relatedRecords' ? '#333' : 'white',
                borderRadius: '8px 8px 0 0'
              }}
            >
              Related Records
            </button>
            <button 
              onClick={() => setActiveTab('systemInfo')}
              style={{ 
                background: activeTab === 'systemInfo' ? 'white' : 'transparent', 
                border: 'none', 
                padding: '12px 24px', 
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: activeTab === 'systemInfo' ? '600' : '500',
                color: activeTab === 'systemInfo' ? '#333' : 'white',
                borderRadius: '8px 8px 0 0'
              }}
            >
              System Information
            </button>
            <button 
              onClick={() => setActiveTab('custom')}
              style={{ 
                background: activeTab === 'custom' ? 'white' : 'transparent', 
                border: 'none', 
                padding: '12px 24px', 
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: activeTab === 'custom' ? '600' : '500',
                color: activeTab === 'custom' ? '#333' : 'white',
                borderRadius: '8px 8px 0 0'
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
                fontWeight: activeTab === 'taxReporting' ? '600' : '500',
                color: activeTab === 'taxReporting' ? '#333' : 'white',
                borderRadius: '8px 8px 0 0'
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
                fontWeight: activeTab === 'supplierReceived' ? '600' : '500',
                color: activeTab === 'supplierReceived' ? '#333' : 'white',
                borderRadius: '8px 8px 0 0'
              }}
            >
              Supplier Received Items
            </button>
          </div>

          {/* Expenses & Items Tab */}
          {activeTab === 'expenses' && (
            <div>

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
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn btn-secondary" onClick={handleAddItem} style={{ fontSize: '13px', padding: '6px 16px' }}>Add Multiple</button>
              <button className="btn btn-secondary" onClick={handleClearAllLines} style={{ fontSize: '13px', padding: '6px 16px' }}>Clear All Lines</button>
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
              <thead>
                <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #e0e0e0' }}>
                  <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>ITEM</th>
                  <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>VENDOR NAME</th>
                  <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>QUANTITY</th>
                  <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>UNITS</th>
                  <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>DESCRIPTION</th>
                  <th style={{ padding: '8px 6px', textAlign: 'right', fontSize: '10px', fontWeight: '600', color: '#666' }}>RATE</th>
                  <th style={{ padding: '8px 6px', textAlign: 'right', fontSize: '10px', fontWeight: '600', color: '#666' }}>AMOUNT</th>
                  <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>TAX CODE</th>
                  <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>TAX RATE</th>
                  <th style={{ padding: '8px 6px', textAlign: 'right', fontSize: '10px', fontWeight: '600', color: '#666' }}>TAX AMT</th>
                  <th style={{ padding: '8px 6px', textAlign: 'right', fontSize: '10px', fontWeight: '600', color: '#666' }}>GROSS AMT</th>
                  <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>OPTIONS</th>
                  <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>DEPARTMENT</th>
                  <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>CLASS</th>
                  <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>LOCATION</th>
                  <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>CUSTOMER/PROJECT</th>
                  <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>BILLABLE</th>
                  <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>CLOSED</th>
                </tr>
              </thead>
              <tbody>
                {expenseItems.map((item) => (
                  <tr key={item.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={item.item}
                        onChange={(e) => handleItemChange(item.id, 'item', e.target.value)}
                        style={{ minWidth: '140px', fontSize: '11px' }}
                      />
                    </td>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={item.vendorName}
                        onChange={(e) => handleItemChange(item.id, 'vendorName', e.target.value)}
                        style={{ minWidth: '130px', fontSize: '11px' }}
                      />
                    </td>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={item.quantity}
                        onChange={(e) => handleItemChange(item.id, 'quantity', e.target.value)}
                        style={{ minWidth: '70px', fontSize: '11px' }}
                      />
                    </td>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={item.units}
                        onChange={(e) => handleItemChange(item.id, 'units', e.target.value)}
                        style={{ minWidth: '60px', fontSize: '11px' }}
                      />
                    </td>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={item.description}
                        style={{ minWidth: '180px', fontSize: '11px' }}
                      />
                    </td>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="number" 
                        className="form-control"
                        value={item.rate}
                        style={{ minWidth: '80px', textAlign: 'right', fontSize: '11px' }}
                      />
                    </td>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="number" 
                        className="form-control"
                        value={item.amount}
                        style={{ minWidth: '90px', textAlign: 'right', fontSize: '11px' }}
                      />
                    </td>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={item.taxCode}
                        style={{ minWidth: '90px', fontSize: '11px' }}
                      />
                    </td>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={item.taxRate}
                        style={{ minWidth: '70px', fontSize: '11px' }}
                      />
                    </td>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="number" 
                        className="form-control"
                        value={item.taxAmt}
                        style={{ minWidth: '80px', textAlign: 'right', fontSize: '11px' }}
                      />
                    </td>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="number" 
                        className="form-control"
                        value={item.grossAmt}
                        style={{ minWidth: '90px', textAlign: 'right', fontSize: '11px' }}
                      />
                    </td>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={item.options}
                        style={{ minWidth: '130px', fontSize: '11px' }}
                      />
                    </td>
                    <td style={{ padding: '6px' }}>
                      <select 
                        className="form-control"
                        value={item.department}
                        style={{ minWidth: '150px', fontSize: '11px' }}
                      >
                        <option>TOM : Human Resource</option>
                        <option>TOM : TOM INTERNALS : TOM HR</option>
                        <option>TOM : Finance : Internal Transfer</option>
                        <option>TOM : IT</option>
                        <option>TOM : Logistic</option>
                      </select>
                    </td>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={item.class}
                        style={{ minWidth: '100px', fontSize: '11px' }}
                      />
                    </td>
                    <td style={{ padding: '6px' }}>
                      <select 
                        className="form-control"
                        value={item.location}
                        style={{ minWidth: '120px', fontSize: '11px' }}
                      >
                        <option value="">Select...</option>
                        <option>SGT : TOM INTERNALS : TOM HR</option>
                        <option>Singapore (TMO)</option>
                      </select>
                    </td>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={item.customerProject}
                        style={{ minWidth: '130px', fontSize: '11px' }}
                      />
                    </td>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={item.billable}
                        style={{ minWidth: '70px', fontSize: '11px' }}
                      />
                    </td>
                    <td style={{ padding: '6px' }}>
                      <input 
                        type="text" 
                        className="form-control"
                        value={item.closed}
                        style={{ minWidth: '70px', fontSize: '11px' }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
            <button className="btn btn-primary" onClick={handleAddItem} style={{ fontSize: '13px', padding: '6px 16px' }}>
              <i className="fas fa-plus"></i> Add
            </button>
            <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '6px 16px' }}>
              <i className="fas fa-times"></i> Cancel
            </button>
            <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '6px 16px' }}>
              <i className="fas fa-copy"></i> Copy Previous
            </button>
            <button className="btn btn-secondary" style={{ fontSize: '13px', padding: '6px 16px' }}>
              Insert
            </button>
            <button className="btn btn-secondary" onClick={() => expenseItems.length > 0 && handleRemoveItem(expenseItems[expenseItems.length - 1].id)} style={{ fontSize: '13px', padding: '6px 16px' }}>
              Remove
            </button>
          </div>
            </div>
          )}

          {/* Billing Tab */}
          {activeTab === 'billing' && (
            <div style={{ padding: '20px' }}>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '11px', color: '#666', fontWeight: '600', marginBottom: '0.5rem' }}>VENDOR</div>
                <textarea 
                  className="form-control"
                  rows="3"
                  placeholder="Vendor address..."
                  style={{ fontSize: '13px' }}
                />
              </div>
            </div>
          )}

          {/* Relationships Tab */}
          {activeTab === 'relationships' && (
            <div style={{ padding: '20px' }}>
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
                    <th style={{ padding: '8px', textAlign: 'left' }}>ROLE</th>
                    <th style={{ padding: '8px', textAlign: 'left' }}>REMOVE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="8" style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>No records to show.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Communication Tab */}
          {activeTab === 'communication' && (
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '1rem' }}>Messages</h3>
              <div style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.25rem', fontSize: '11px' }}>
                <button style={{ padding: '4px 8px', background: '#f0f0f0', border: '1px solid #ccc', borderRadius: '3px' }}>Activities</button>
                <button style={{ padding: '4px 8px', background: '#f0f0f0', border: '1px solid #ccc', borderRadius: '3px' }}>Files</button>
                <button style={{ padding: '4px 8px', background: '#f0f0f0', border: '1px solid #ccc', borderRadius: '3px' }}>User Notes</button>
              </div>
              <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>Email</button>
                <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>Attach</button>
                <button className="btn btn-primary" style={{ fontSize: '12px', padding: '6px 12px' }}>Refresh</button>
              </div>
              <table style={{ width: '100%', fontSize: '11px', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #e0e0e0' }}>
                    <th style={{ padding: '8px', textAlign: 'left' }}>DATE</th>
                    <th style={{ padding: '8px', textAlign: 'left' }}>AUTHOR</th>
                    <th style={{ padding: '8px', textAlign: 'left' }}>SUBJECT</th>
                    <th style={{ padding: '8px', textAlign: 'left' }}>TYPE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="4" style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>No records to show.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Related Records Tab */}
          {activeTab === 'relatedRecords' && (
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '1rem' }}>Fulfillments & Credits</h3>
              <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px', marginBottom: '1rem' }}>Print</button>
              <table style={{ width: '100%', fontSize: '11px', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #e0e0e0' }}>
                    <th style={{ padding: '8px', textAlign: 'left' }}>DATE</th>
                    <th style={{ padding: '8px', textAlign: 'left' }}>TYPE</th>
                    <th style={{ padding: '8px', textAlign: 'left' }}>NUMBER</th>
                    <th style={{ padding: '8px', textAlign: 'left' }}>STATUS</th>
                    <th style={{ padding: '8px', textAlign: 'right' }}>AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="5" style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>No records to show.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* System Information Tab */}
          {activeTab === 'systemInfo' && (
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '1rem' }}>System Notes</h3>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontSize: '11px', color: '#666', fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>VIEW</label>
                <select style={{ padding: '6px', border: '1px solid #ccc', borderRadius: '3px', fontSize: '12px' }}>
                  <option>Default</option>
                </select>
              </div>
              <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>Customize View</button>
            </div>
          )}

          {/* Custom Tab */}
          {activeTab === 'custom' && (
            <div style={{ padding: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <label style={{ fontSize: '11px', color: '#666', fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>MATERIAL TYPE</label>
                  <textarea className="form-control" rows="4" placeholder="Type text..." />
                </div>
                <div>
                  <label style={{ fontSize: '11px', color: '#666', fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>TEST TRANSACTION FIELD</label>
                  <input type="text" className="form-control" />
                  <div style={{ marginTop: '1rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                      <input type="checkbox" />
                      DO RECORD CREATED
                    </label>
                  </div>
                  <div style={{ marginTop: '1rem' }}>
                    <label style={{ fontSize: '11px', color: '#666', fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>GST TYPE</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tax Reporting Tab */}
          {activeTab === 'taxReporting' && (
            <div style={{ padding: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <label style={{ fontSize: '11px', color: '#666', fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>DELIVERY TERMS</label>
                  <input type="text" className="form-control" />
                </div>
                <div>
                  <label style={{ fontSize: '11px', color: '#666', fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>REGIME CODE OF SUPPLY</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          )}

          {/* Supplier Received Items Tab */}
          {activeTab === 'supplierReceived' && (
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '600', marginBottom: '1rem' }}>Received Items</h3>
              <table style={{ width: '100%', fontSize: '11px', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #e0e0e0' }}>
                    <th style={{ padding: '8px', textAlign: 'left' }}>ITEM</th>
                    <th style={{ padding: '8px', textAlign: 'left' }}>COUNT OF QUANTITY</th>
                    <th style={{ padding: '8px', textAlign: 'left' }}>MEMO</th>
                    <th style={{ padding: '8px', textAlign: 'right' }}>AMOUNT</th>
                    <th style={{ padding: '8px', textAlign: 'left' }}>NAME</th>
                    <th style={{ padding: '8px', textAlign: 'left' }}>DOCUMENT NUMBER</th>
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
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <div>
            <button className="btn btn-secondary">
              <i className="fas fa-save"></i>
              Save
            </button>
            <button className="btn btn-primary" onClick={handleSave}>
              <i className="fas fa-check"></i>
              Submit
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

export default EditVendorReturn;
