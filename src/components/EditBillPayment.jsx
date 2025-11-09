import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const EditBillPayment = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [formData, setFormData] = useState({
    customForm: 'TOM Vendor Bill',
    transactionNumber: 'VENDBILL15642',
    referenceNo: '28119',
    vendor: 'BROTHERS GLOVE MERCHANT',
    account: '20010 Accounts Payable : Trade Creditors',
    amount: 231.63,
    currency: 'SGD',
    exchangeRate: 1.00,
    vatRegistration: '',
    tax: 19.13,
    discAmt: '',
    discDate: '',
    paymentHold: false,
    dueDate: '2025-08-05',
    date: '2025-08-05',
    postingPeriod: 'May 2025',
    memo: 'PO created from PR-# PR22TOMSV00119',
    approvalStatus: 'Approved',
    nextApprover: '',
    approvalStatus2: 'Approved',
    subsidiary: 'Tech Offshore Marine (SV) Pte Ltd',
    purchaseType: '',
    items: [
      {
        id: 1,
        item: 'GLOVES',
        vendorName: '',
        quantity: 25,
        units: 'Pcs',
        description: 'Impact Gloves Size : L',
        rate: 8.50,
        amount: 211.50,
        taxCode: 'GST_SG-0%',
        taxRate: '0.0%',
        grossAmt: 231.63,
        taxAmt: 19.13,
        options: '',
        department: 'Shipyard Contingency',
        class: '',
        location: '',
        customerProject: 'JML Ltd. - 5009-110035-P-82 EPC for W BULD FPO',
        billable: false,
        receipts: '',
        history: ''
      }
    ]
  });

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddItem = () => {
    const newItem = {
      id: formData.items.length + 1,
      item: '',
      vendorName: '',
      quantity: 0,
      units: 'Pcs',
      description: '',
      rate: 0,
      amount: 0,
      taxCode: 'GST_SG-0%',
      taxRate: '0.0%',
      grossAmt: 0,
      taxAmt: 0,
      options: '',
      department: '',
      class: '',
      location: '',
      customerProject: '',
      billable: false,
      receipts: '',
      history: ''
    };
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };

  const handleRemoveItem = (index) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    showToast('Bill payment saved successfully!', 'success');
    setTimeout(() => {
      if (setCurrentPage) {
        setCurrentPage('view-bill-payment-detail');
      }
    }, 1500);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-bill-payment-detail');
      }
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <div>
            <h1 style={{ margin: 0, marginBottom: '4px' }}>Bill</h1>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>28119</span>
              <span style={{ fontSize: '14px', color: '#666' }}>BROTHERS GLOVE MERCHANT</span>
            </div>
          </div>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn-secondary">
            Void
          </button>
          <button className="btn btn-secondary">
            Rescale
          </button>
          <button className="btn btn-secondary">
            Actions
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
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0 1rem 0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label required">CUSTOM FORM</label>
              <select 
                className="form-control"
                value={formData.customForm}
                onChange={(e) => handleFormChange('customForm', e.target.value)}
              >
                <option>TOM Vendor Bill</option>
                <option>Standard Vendor Bill</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label required">CURRENCY</label>
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

            <div className="form-group">
              <label className="form-label">DUE DATE</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.dueDate}
                onChange={(e) => handleFormChange('dueDate', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">TRANSACTION NUMBER</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.transactionNumber}
                onChange={(e) => handleFormChange('transactionNumber', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label required">EXCHANGE RATE</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.exchangeRate}
                onChange={(e) => handleFormChange('exchangeRate', e.target.value)}
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label className="form-label required">DATE</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.date}
                onChange={(e) => handleFormChange('date', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">REFERENCE NO.</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.referenceNo}
                onChange={(e) => handleFormChange('referenceNo', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">VAT REGISTRATION</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.vatRegistration}
                onChange={(e) => handleFormChange('vatRegistration', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label required">POSTING PERIOD</label>
              <select 
                className="form-control"
                value={formData.postingPeriod}
                onChange={(e) => handleFormChange('postingPeriod', e.target.value)}
              >
                <option>May 2025</option>
                <option>Jun 2025</option>
                <option>Jul 2025</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label required">VENDOR</label>
              <select 
                className="form-control"
                value={formData.vendor}
                onChange={(e) => handleFormChange('vendor', e.target.value)}
              >
                <option>BROTHERS GLOVE MERCHANT</option>
                <option>CHIA HOCK HARDWARE TRADING</option>
                <option>TRONIX WORLD LOGISTICS PTE LTD</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">TAX</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.tax}
                onChange={(e) => handleFormChange('tax', e.target.value)}
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label className="form-label">MEMO</label>
              <textarea 
                className="form-control"
                value={formData.memo}
                onChange={(e) => handleFormChange('memo', e.target.value)}
                rows="2"
              />
            </div>

            <div className="form-group">
              <label className="form-label required">ACCOUNT</label>
              <select 
                className="form-control"
                value={formData.account}
                onChange={(e) => handleFormChange('account', e.target.value)}
              >
                <option>20010 Accounts Payable : Trade Creditors</option>
                <option>20020 Accounts Payable : Intercompany Creditors</option>
                <option>20025 Other Payable Creditors</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">DISC. AMT</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.discAmt}
                onChange={(e) => handleFormChange('discAmt', e.target.value)}
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label className="form-label">APPROVAL STATUS</label>
              <select 
                className="form-control"
                value={formData.approvalStatus}
                onChange={(e) => handleFormChange('approvalStatus', e.target.value)}
              >
                <option>Approved</option>
                <option>Pending Approval</option>
                <option>Rejected</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">AMOUNT</label>
              <input 
                type="number" 
                className="form-control"
                value={formData.amount}
                onChange={(e) => handleFormChange('amount', e.target.value)}
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label className="form-label">DISC. DATE</label>
              <input 
                type="date" 
                className="form-control"
                value={formData.discDate}
                onChange={(e) => handleFormChange('discDate', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">NEXT APPROVER</label>
              <input 
                type="text" 
                className="form-control"
                value={formData.nextApprover}
                onChange={(e) => handleFormChange('nextApprover', e.target.value)}
                placeholder="<Type then tab>"
              />
            </div>

            <div className="form-group">
              <label className="form-label">AVAILABLE VENDOR CREDIT</label>
              <input 
                type="number" 
                className="form-control"
                readOnly
                value="0.00"
              />
            </div>

            <div className="form-group" style={{ gridColumn: 'span 2', display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '24px' }}>
              <input 
                type="checkbox"
                checked={formData.paymentHold}
                onChange={(e) => handleFormChange('paymentHold', e.target.checked)}
              />
              <span style={{ fontSize: '13px', color: '#666' }}>PAYMENT HOLD</span>
            </div>

            <div className="form-group">
              <label className="form-label">APPROVAL STATUS</label>
              <select 
                className="form-control"
                value={formData.approvalStatus2}
                onChange={(e) => handleFormChange('approvalStatus2', e.target.value)}
              >
                <option>Approved</option>
                <option>Pending Approval</option>
                <option>Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className="form-section" style={{ marginTop: '1.5rem' }}>
          <h2 className="section-title">
            <i className="fas fa-tags"></i>
            Classification
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0 1rem 0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label required">SUBSIDIARY</label>
              <select 
                className="form-control"
                value={formData.subsidiary}
                onChange={(e) => handleFormChange('subsidiary', e.target.value)}
              >
                <option>Tech Offshore Marine (SV) Pte Ltd</option>
                <option>Tech Onshore MEP Prefabricators Pte Ltd.</option>
                <option>Tech Electric & Automation Pte Ltd</option>
                <option>Tech Marine Offshore (S) Pte Ltd</option>
                <option>Tech Offshore Marine (DQ) Pte Ltd</option>
                <option>Tech Offshore Marine (s) Pte Ltd</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">PURCHASE TYPE</label>
              <select 
                className="form-control"
                value={formData.purchaseType}
                onChange={(e) => handleFormChange('purchaseType', e.target.value)}
              >
                <option value="">Select...</option>
                <option>- New -</option>
                <option>Critical</option>
                <option>Non Critical</option>
              </select>
            </div>
          </div>
        </div>

        {/* Expenses and Items */}
        <div className="form-section" style={{ marginTop: '1.5rem' }}>
          <h2 className="section-title">
            <i className="fas fa-list"></i>
            Expenses and Items
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '0.5rem 0 1rem 0' }} />

          <div style={{ marginBottom: '15px' }}>
            <strong style={{ fontSize: '14px' }}>Expenses 0.00</strong>
          </div>

          <div style={{ marginBottom: '15px', fontSize: '13px', color: '#666' }}>
            No records to show.
          </div>

          <div style={{ marginTop: '30px', marginBottom: '15px' }}>
            <strong style={{ fontSize: '14px' }}>Items 213.50</strong>
          </div>

          <div style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
            <button className="btn btn-secondary" onClick={handleAddItem}>
              <i className="fas fa-plus"></i> Add
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-copy"></i> Copy Previous
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-download"></i> Insert
            </button>
            <button className="btn btn-secondary" onClick={() => formData.items.length > 0 && handleRemoveItem(formData.items.length - 1)}>
              <i className="fas fa-trash"></i> Remove
            </button>
          </div>

          <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="items-table" style={{ width: '100%', minWidth: '1800px' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>ITEM</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>VENDOR NAME</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>QUANTITY</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>UNITS</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DESCRIPTION</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>RATE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>AMOUNT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>TAX CODE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>TAX RATE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>GROSS AMT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>TAX AMT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>OPTIONS</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DEPARTMENT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>CLASS</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>LOCATION</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>CUSTOMER:PROJECT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>BILLABLE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>RECEIPTS</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>HISTORY</th>
                </tr>
              </thead>
              <tbody>
                {formData.items.map((item, index) => (
                <tr key={item.id}>
                  <td style={{ padding: '4px' }}>
                    <input type="text" className="table-input" value={item.item} style={{ width: '100px' }} />
                  </td>
                  <td style={{ padding: '4px' }}>
                    <input type="text" className="table-input" value={item.vendorName} style={{ width: '100px' }} />
                  </td>
                  <td style={{ padding: '4px' }}>
                    <input type="number" className="table-input" value={item.quantity} style={{ width: '60px' }} />
                  </td>
                  <td style={{ padding: '4px' }}>
                    <select className="table-input" value={item.units} style={{ width: '70px' }}>
                      <option>Pcs</option>
                      <option>Kg</option>
                    </select>
                  </td>
                  <td style={{ padding: '4px' }}>
                    <input type="text" className="table-input" value={item.description} style={{ width: '150px' }} />
                  </td>
                  <td style={{ padding: '4px' }}>
                    <input type="number" className="table-input" value={item.rate} style={{ width: '80px' }} />
                  </td>
                  <td style={{ padding: '4px' }}>
                    <input type="number" className="table-input" value={item.amount} style={{ width: '80px' }} readOnly />
                  </td>
                  <td style={{ padding: '4px' }}>
                    <select className="table-input" value={item.taxCode} style={{ width: '100px' }}>
                      <option>GST_SG-0%</option>
                      <option>GST_SG-7%</option>
                    </select>
                  </td>
                  <td style={{ padding: '4px' }}>
                    <input type="text" className="table-input" value={item.taxRate} style={{ width: '60px' }} readOnly />
                  </td>
                  <td style={{ padding: '4px' }}>
                    <input type="number" className="table-input" value={item.grossAmt} style={{ width: '80px' }} readOnly />
                  </td>
                  <td style={{ padding: '4px' }}>
                    <input type="number" className="table-input" value={item.taxAmt} style={{ width: '80px' }} readOnly />
                  </td>
                  <td style={{ padding: '4px' }}>
                    <input type="text" className="table-input" value={item.options} style={{ width: '80px' }} />
                  </td>
                  <td style={{ padding: '4px' }}>
                    <select className="table-input" value={item.department} style={{ width: '120px' }}>
                      <option value="">Select...</option>
                      <option>Shipyard Contingency</option>
                      <option>TOM</option>
                    </select>
                  </td>
                  <td style={{ padding: '4px' }}>
                    <select className="table-input" value={item.class} style={{ width: '100px' }}>
                      <option value="">Select...</option>
                      <option>Consumable Item</option>
                    </select>
                  </td>
                  <td style={{ padding: '4px' }}>
                    <select className="table-input" value={item.location} style={{ width: '100px' }}>
                      <option value="">Select...</option>
                      <option>TOM -11</option>
                    </select>
                  </td>
                  <td style={{ padding: '4px' }}>
                    <input type="text" className="table-input" value={item.customerProject} style={{ width: '200px' }} />
                  </td>
                  <td style={{ padding: '4px', textAlign: 'center' }}>
                    <input type="checkbox" checked={item.billable} />
                  </td>
                  <td style={{ padding: '4px' }}>
                    <input type="text" className="table-input" value={item.receipts} style={{ width: '80px' }} />
                  </td>
                  <td style={{ padding: '4px' }}>
                    <button className="view-link" style={{ fontSize: '12px' }}>History</button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
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

export default EditBillPayment;
