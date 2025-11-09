import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const InvoiceDetail = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const invoiceData = {
    status: 'To Be Generated',
    customForm: 'TOM Service Invoice',
    invoiceNumber: 'To Be Generated',
    postingPeriod: 'Nov 2025',
    customerProject: '18-0317 Sdk Consortium : WHC-MEP',
    dueDate: '',
    date: '6/11/2025',
    poNumber: 'SDK/TOM/LOA/00065',
    startDate: '',
    memo: '',
    endDate: '',
    contactPerson: '',
    salesRep: 'MEP057 Mahendran S/O Minisamy',
    salesEffectiveDate: '',
    opportunity: '',
    createdFrom: 'Sales Order #S2200871',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    class: '',
    location: '',
    department: 'MEP',
    countryOfOrigin: '',
    hsCode: '',
    forInvoiceGrouping: false,
    discountItem: '',
    rate: '',
    items: [
      {
        id: 1,
        item: 'Retention-Customer',
        backOrdered: '',
        unbilled: '',
        quantity: '',
        units: '',
        description: '',
        priceLevel: 'Base Price',
        rate: 0.00,
        amount: 472505.00,
        taxCode: 'GST_SG:9%',
        grossAmount: 515030.45,
        class: '',
        costEstimateType: 'Fixed',
        estimatedExtendedCost: 0.00
      }
    ],
    itemsTotal: 472505.00,
    billableItems: 0.00,
    billableExpenses: 0.00,
    billableTime: 0.00,
    subtotal: 472505.00,
    discountItemValue: 0.00,
    taxTotal: 42525.45,
    total: 515030.45
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleSave = () => {
    showToast('Invoice saved successfully!', 'success');
  };

  const handleCancel = () => {
    showToast('Invoice cancelled', 'info');
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-file-invoice" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Invoice</h1>
          <span style={{ marginLeft: '15px', fontSize: '0.9rem', color: '#666', fontWeight: 'normal' }}>{invoiceData.status}</span>
        </div>
        <div className="page-actions">
          <button className="btn btn-tertiary" onClick={handleCancel}>
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button className="btn btn-secondary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save Draft
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-check"></i>
            Submit
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
              <label className="form-label required">Custom Form</label>
              <select className="form-control" value={invoiceData.customForm}>
                <option>TOM Service Invoice</option>
                <option>Standard Invoice</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label required">Posting Period</label>
              <select className="form-control" value={invoiceData.postingPeriod}>
                <option>Nov 2025</option>
                <option>Dec 2025</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Invoice #</label>
              <input 
                type="text" 
                className="form-control"
                value={invoiceData.invoiceNumber}
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">Due Date</label>
              <input 
                type="date" 
                className="form-control"
                value={invoiceData.dueDate}
              />
            </div>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label className="form-label required">Customer:Project</label>
              <select className="form-control" value={invoiceData.customerProject}>
                <option>18-0317 Sdk Consortium : WHC-MEP</option>
                <option>20-0131 Gimi Ms Corporation</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label required">Date</label>
              <input 
                type="date" 
                className="form-control"
                value={invoiceData.date}
              />
            </div>
            <div className="form-group">
              <label className="form-label">PO #</label>
              <input 
                type="text" 
                className="form-control"
                value={invoiceData.poNumber}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Start Date</label>
              <input 
                type="date" 
                className="form-control"
                value={invoiceData.startDate}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Memo</label>
              <input 
                type="text" 
                className="form-control"
                value={invoiceData.memo}
              />
            </div>
            <div className="form-group">
              <label className="form-label">End Date</label>
              <input 
                type="date" 
                className="form-control"
                value={invoiceData.endDate}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Contact Person</label>
              <select className="form-control" value={invoiceData.contactPerson}>
                <option value="">Select...</option>
              </select>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Sales Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-chart-line"></i>
            Sales Information
          </h2>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Sales Rep</label>
              <select className="form-control" value={invoiceData.salesRep}>
                <option>MEP057 Mahendran S/O Minisamy</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Sales Effective Date</label>
              <input 
                type="date" 
                className="form-control"
                value={invoiceData.salesEffectiveDate}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Opportunity</label>
              <select className="form-control" value={invoiceData.opportunity}>
                <option value="">Select...</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Created From</label>
              <div className="field-value" style={{ padding: '8px', background: '#f5f5f5', borderRadius: '4px' }}>
                {invoiceData.createdFrom}
              </div>
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
              <label className="form-label">Subsidiary</label>
              <select className="form-control" value={invoiceData.subsidiary}>
                <option>Tech Onshore MEP Prefabricators Pte Ltd.</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Class</label>
              <select className="form-control" value={invoiceData.class}>
                <option value="">Select...</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Location</label>
              <select className="form-control" value={invoiceData.location}>
                <option value="">Select...</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label required">Department</label>
              <select className="form-control" value={invoiceData.department}>
                <option>MEP</option>
                <option>Engineering</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Country of Origin</label>
              <input 
                type="text" 
                className="form-control"
                value={invoiceData.countryOfOrigin}
                placeholder="Enter country of origin"
              />
            </div>
            <div className="form-group">
              <label className="form-label">HS Code</label>
              <input 
                type="text" 
                className="form-control"
                value={invoiceData.hsCode}
                placeholder="Enter HS code"
              />
            </div>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input 
                  type="checkbox" 
                  checked={invoiceData.forInvoiceGrouping}
                />
                For Invoice Grouping
              </label>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Items Section */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-boxes"></i>
            Items
          </h2>
          
          <button className="add-item-btn" style={{ marginBottom: '15px' }}>
            <i className="fas fa-plus"></i>
            Add Item
          </button>

          <div className="items-table-wrapper">
            <table className="detail-items-table">
              <thead>
                <tr>
                  <th style={{width: '8%'}}>ITEM</th>
                  <th style={{width: '6%'}}>BACK ORDERED</th>
                  <th style={{width: '6%'}}>UNBILLED</th>
                  <th style={{width: '5%'}}>QTY</th>
                  <th style={{width: '5%'}}>UNITS</th>
                  <th style={{width: '10%'}}>DESC</th>
                  <th style={{width: '7%'}}>PRICE LEVEL</th>
                  <th style={{width: '6%'}}>RATE</th>
                  <th style={{width: '6%'}}>AMT</th>
                  <th style={{width: '7%'}}>TAX CODE</th>
                  <th style={{width: '7%'}}>GROSS AMT</th>
                  <th style={{width: '8%'}}>CLASS</th>
                  <th style={{width: '9%'}}>COST ESTIMATE TYPE</th>
                  <th style={{width: '10%'}}>EST. EXTENDED COST</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.items.map((item) => (
                  <tr key={item.id}>
                    <td><input type="text" className="table-input" defaultValue={item.item} style={{width: '100%'}} /></td>
                    <td><input type="number" className="table-input" defaultValue={item.backOrdered} style={{width: '100%'}} /></td>
                    <td><input type="number" className="table-input" defaultValue={item.unbilled} style={{width: '100%'}} /></td>
                    <td><input type="number" className="table-input" defaultValue={item.quantity} style={{width: '100%'}} /></td>
                    <td><input type="text" className="table-input" defaultValue={item.units} style={{width: '100%'}} /></td>
                    <td><input type="text" className="table-input" defaultValue={item.description} style={{width: '100%'}} /></td>
                    <td><input type="text" className="table-input" defaultValue={item.priceLevel} style={{width: '100%'}} /></td>
                    <td><input type="number" className="table-input" defaultValue={item.rate} style={{width: '100%'}} /></td>
                    <td><input type="number" className="table-input" defaultValue={item.amount} style={{width: '100%'}} /></td>
                    <td><input type="text" className="table-input" defaultValue={item.taxCode} style={{width: '100%'}} /></td>
                    <td><input type="number" className="table-input" defaultValue={item.grossAmount} style={{width: '100%'}} /></td>
                    <td>
                      <select className="table-input" defaultValue={item.class} style={{width: '100%'}}>
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
                    </td>
                    <td>
                      <select className="table-input" defaultValue={item.costEstimateType} style={{width: '100%'}}>
                        <option>Fixed</option>
                        <option>Variable</option>
                        <option>Estimated</option>
                      </select>
                    </td>
                    <td><input type="number" className="table-input" defaultValue={item.estimatedExtendedCost} style={{width: '100%'}} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Grid */}
          <div className="summary-grid">
            <div className="summary-card">
              <div className="summary-title">SUBTOTAL</div>
              <div className="summary-value">${invoiceData.subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
            </div>
            <div className="summary-card">
              <div className="summary-title">TAX AMOUNT</div>
              <div className="summary-value">${invoiceData.taxTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
            </div>
            <div className="summary-card">
              <div className="summary-title">DISCOUNT</div>
              <div className="summary-value">$0.00</div>
            </div>
            <div className="summary-card" style={{ background: 'var(--gray-ultralight)' }}>
              <div className="summary-title">TOTAL AMOUNT</div>
              <div className="summary-value" style={{ color: 'var(--red-primary)' }}>${invoiceData.total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
            </div>
          </div>

        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2rem 0' }} />

        {/* Terms & Conditions */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-file-contract"></i>
            Terms & Conditions
          </h2>
          <textarea 
            className="form-control"
            rows="3"
            placeholder="Enter terms and conditions..."
          />
          
          <div className="footer-actions">
            <button className="btn btn-tertiary" onClick={handleCancel}>
              <i className="fas fa-times"></i>
              Cancel
            </button>
            <div>
              <button className="btn btn-secondary" onClick={handleSave}>
                <i className="fas fa-save"></i>
                Save Draft
              </button>
              <button className="btn btn-primary" onClick={handleSave}>
                <i className="fas fa-check"></i>
                Submit
              </button>
            </div>
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

export default InvoiceDetail;
