import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewSalesOrderDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const orderData = {
    documentNumber: 'S2100067',
    title: '20-0131 Gimi Ms Corporation : 20-0131-Gimi-Fabrication of Cargo Tank Vapour Line (Budgetary)-W',
    statusBadge: 'PENDING BILLING',
    orderNumber: 'S2100067',
    endDate: '',
    customerProject: '20-0131 Gimi Ms Corporation : 20-0131-Gimi-Fabrication of Cargo Tank Vapour Line (Budgetary)-W',
    poNumber: '',
    date: '26/11/2020',
    memo: 'Project No : 20-0131',
    startDate: '',
    salesRep: '',
    opportunity: '',
    salesEffectiveDate: '26/11/2020',
    subsidiary: 'Tech Onshore MEP Prefabricators Pte Ltd.',
    class: 'Piping',
    location: '',
    department: 'MEP',
    forInvoiceGrouping: false,
    approvalStatus: 'Submit For Approval',
    contactPerson: '',
    items: [
      {
        id: 1,
        item: 'Fabrication',
        committed: 1,
        fulfilled: 0,
        invoiced: 0,
        backOrdered: 0,
        quantity: 1,
        units: '',
        description: 'Fabrication of Stainless Steel Piping of Cargo Tank Vapour Line',
        priceLevel: 'Custom',
        rate: 168000.00,
        amount: 168000.00,
        taxRate: '0.0%'
      }
    ],
    subtotal: 168000.00,
    discountItem: '',
    taxTotal: 0.00,
    total: 168000.00
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = () => {
    if (setCurrentPage) {
      setCurrentPage('edit-sales-order');
    }
  };

  const handleBack = () => {
    if (setCurrentPage) {
      setCurrentPage('view-sales-orders');
    }
  };

  return (
    <div className="enquiry-detail">
      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-shopping-cart"></i>
          <div>
            <h1>Sales Order</h1>
            <div className="detail-subtitle">
              <span className="doc-number">{orderData.documentNumber}</span>
              <span style={{ fontSize: '0.9rem' }}>{orderData.title}</span>
              <span className="status-badge" style={{ background: '#ff9800', color: 'white', padding: '4px 12px', borderRadius: '4px' }}>
                {orderData.statusBadge}
              </span>
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action">
            <i className="fas fa-arrow-left"></i>
          </button>
          <button className="btn-action">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-action">List</button>
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
          <i className="fas fa-truck"></i>
          Fulfill
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-file-invoice"></i>
          Bill Remaining
        </button>
        <button className="btn-toolbar">
          <i className="fas fa-times-circle"></i>
          Close Order
        </button>
        <div className="toolbar-dropdown">
          <button className="btn-toolbar">
            Actions
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      </div>

      <div className="detail-content">
        {/* Primary Information */}
        <div className="detail-section">
          <div className="section-header" onClick={(e) => e.currentTarget.parentElement.classList.toggle('collapsed')}>
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>ORDER #</label>
                <div className="field-value">{orderData.orderNumber}</div>
              </div>
              <div className="detail-field">
                <label>END DATE</label>
                <div className="field-value">{orderData.endDate || '-'}</div>
              </div>
              <div className="detail-field" style={{ gridColumn: '1 / -1' }}>
                <label>CUSTOMER:PROJECT</label>
                <div className="field-value">{orderData.customerProject}</div>
              </div>
              <div className="detail-field">
                <label>PO #</label>
                <div className="field-value">{orderData.poNumber || '-'}</div>
              </div>
              <div className="detail-field">
                <label>DATE</label>
                <div className="field-value">{orderData.date}</div>
              </div>
              <div className="detail-field">
                <label>MEMO</label>
                <div className="field-value">{orderData.memo}</div>
              </div>
              <div className="detail-field">
                <label>START DATE</label>
                <div className="field-value">{orderData.startDate || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sales Information */}
        <div className="detail-section">
          <div className="section-header" onClick={(e) => e.currentTarget.parentElement.classList.toggle('collapsed')}>
            <i className="fas fa-chevron-down"></i>
            <h3>Sales Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SALES REP</label>
                <div className="field-value">{orderData.salesRep || '-'}</div>
              </div>
              <div className="detail-field">
                <label>OPPORTUNITY</label>
                <div className="field-value">{orderData.opportunity || '-'}</div>
              </div>
              <div className="detail-field">
                <label>SALES EFFECTIVE DATE</label>
                <div className="field-value">{orderData.salesEffectiveDate}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className="detail-section">
          <div className="section-header" onClick={(e) => e.currentTarget.parentElement.classList.toggle('collapsed')}>
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY</label>
                <div className="field-value">{orderData.subsidiary}</div>
              </div>
              <div className="detail-field">
                <label>CLASS</label>
                <div className="field-value">{orderData.class}</div>
              </div>
              <div className="detail-field">
                <label>LOCATION</label>
                <div className="field-value">{orderData.location || '-'}</div>
              </div>
              <div className="detail-field">
                <label>DEPARTMENT</label>
                <div className="field-value">{orderData.department}</div>
              </div>
              <div className="detail-field">
                <label>FOR INVOICE GROUPING</label>
                <div className="field-value">
                  <input type="checkbox" checked={orderData.forInvoiceGrouping} disabled />
                </div>
              </div>
              <div className="detail-field">
                <label>APPROVAL STATUS</label>
                <div className="field-value">{orderData.approvalStatus}</div>
              </div>
              <div className="detail-field">
                <label>CONTACT PERSON</label>
                <div className="field-value">{orderData.contactPerson || '-'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="detail-tabs">
          <div className="tabs-header">
            <button className="tab-btn active">Items</button>
            <button className="tab-btn">Shipping</button>
            <button className="tab-btn">Billing</button>
            <button className="tab-btn">Accounting</button>
            <button className="tab-btn">Relationships</button>
            <button className="tab-btn">Communication</button>
            <button className="tab-btn">Related Records</button>
            <button className="tab-btn">System Information</button>
            <button className="tab-btn">Custom</button>
          </div>
          <div className="tabs-content">
            <div className="form-grid" style={{ marginBottom: '20px' }}>
              <div className="detail-field">
                <label>DISCOUNT ITEM</label>
                <div className="field-value">{orderData.discountItem || '-'}</div>
              </div>
              <div className="detail-field">
                <label>RATE</label>
                <div className="field-value">-</div>
              </div>
            </div>
            <div className="items-table-wrapper">
              <table className="detail-items-table">
                <thead>
                  <tr>
                    <th>ITEM</th>
                    <th>COMMITTED</th>
                    <th>FULFILLED</th>
                    <th>INVOICED</th>
                    <th>BACK ORDERED</th>
                    <th>QUANTITY</th>
                    <th>UNITS</th>
                    <th>DESCRIPTION</th>
                    <th>PRICE LEVEL</th>
                    <th>RATE</th>
                    <th>AMOUNT</th>
                    <th>TAX RATE</th>
                  </tr>
                </thead>
                <tbody>
                  {orderData.items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.item}</td>
                      <td>{item.committed}</td>
                      <td>{item.fulfilled}</td>
                      <td>{item.invoiced}</td>
                      <td>{item.backOrdered}</td>
                      <td>{item.quantity}</td>
                      <td>{item.units || '-'}</td>
                      <td>{item.description}</td>
                      <td>{item.priceLevel}</td>
                      <td>{item.rate.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                      <td>{item.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                      <td>{item.taxRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Summary Grid - After Items Table */}
        <div className="detail-section">
          <div className="section-header">
            <h3>Summary</h3>
          </div>
          <div className="section-body">
            <div className="summary-grid">
              <div className="summary-card">
                <div className="summary-title">SUBTOTAL</div>
                <div className="summary-value">${orderData.subtotal.toFixed(2)}</div>
              </div>
              <div className="summary-card">
                <div className="summary-title">TAX AMOUNT</div>
                <div className="summary-value">${orderData.taxTotal.toFixed(2)}</div>
              </div>
              <div className="summary-card">
                <div className="summary-title">DISCOUNT</div>
                <div className="summary-value">$0.00</div>
              </div>
              <div className="summary-card" style={{ background: '#f8f9fa' }}>
                <div className="summary-title">TOTAL AMOUNT</div>
                <div className="summary-value" style={{ color: '#4a90e2' }}>${orderData.total.toFixed(2)}</div>
              </div>
            </div>
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

export default ViewSalesOrderDetail;
