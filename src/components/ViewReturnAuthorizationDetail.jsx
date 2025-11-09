import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const ViewReturnAuthorizationDetail = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeTab, setActiveTab] = useState('items');

  const authData = {
    customForm: 'TOM Return Authorization - Credit',
    rmaAuth: 'RMA-2024-001',
    customerProject: '100 Baroid Surface Solutions, Halliburton Energy Services Inc',
    po: 'PO-2024-1234',
    memo: 'Defective parts return',
    date: '15/10/2024',
    status: 'Pending Approval',
    salesRep: 'MEP049 Camila Shirde',
    salesEffectiveDate: '15/10/2024',
    createdFrom: 'Sales Order #S2024-001',
    subsidiary: 'Tech Onshore MEP-Prefabricators Pte Ltd.',
    class: 'Fabrication',
    location: 'Singapore (MEP)',
    department: 'TOM: Production',
    contactPerson: 'John Doe',
    hsCode: '7308.90.90',
    countryOfOrigin: 'Singapore'
  };

  const items = [
    {
      id: 1,
      item: 'Fabrication Services',
      quantity: '10',
      units: 'Each',
      description: 'Custom fabrication work for structural components',
      priceLevel: 'Base Price',
      unitPrice: '525.00',
      code: 'FAB-001',
      amount: '5,250.00',
      costRate: '350.00',
      taxAmt: '367.50',
      grossAmt: '5,617.50',
      options: 'Standard',
      closed: false,
      estimatedExtendedCost: '3,500.00',
      serialNumbers: 'SN-001 to SN-010'
    }
  ];

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const handleEdit = () => {
    setCurrentPage('edit-return-authorization');
  };

  const handleBack = () => {
    setCurrentPage('view-return-authorizations');
  };

  const handleList = () => {
    setCurrentPage('view-return-authorizations');
  };

  const calculateTotals = () => {
    const subtotal = items.reduce((sum, item) => sum + parseFloat(item.amount.replace(/,/g, '')), 0);
    const discount = 0;
    const taxTotal = items.reduce((sum, item) => sum + parseFloat(item.taxAmt.replace(/,/g, '')), 0);
    const total = subtotal - discount + taxTotal;

    return { subtotal, discount, taxTotal, total };
  };

  const totals = calculateTotals();

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-undo" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Return Authorization #{authData.rmaAuth}</h1>
          <span style={{
            marginLeft: '1rem',
            padding: '0.5rem 1rem',
            background: authData.status === 'Approved' ? '#d4edda' : '#fff3cd',
            color: authData.status === 'Approved' ? '#155724' : '#856404',
            borderRadius: '4px',
            fontSize: '0.875rem',
            fontWeight: '600'
          }}>
            {authData.status}
          </span>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={handleList}>
            <i className="fas fa-list"></i>
            List
          </button>
          <button className="btn btn-secondary" onClick={handleEdit}>
            <i className="fas fa-edit"></i>
            Edit
          </button>
          <button className="btn btn-secondary" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
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
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">CUSTOMER : PROJECT</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {authData.customerProject}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">RMA AUTH. #</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none', color: '#4a90e2', fontWeight: '500' }}>
                {authData.rmaAuth}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">PO #</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {authData.po}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">DATE</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {authData.date}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">MEMO</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {authData.memo}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">STATUS</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {authData.status}
              </div>
            </div>
          </div>
        </div>

        {/* Sales Information */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-chart-line"></i>
            Sales Information
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">SALES REP</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {authData.salesRep}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">SALES EFFECTIVE DATE</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {authData.salesEffectiveDate}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">CREATED FROM</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {authData.createdFrom}
              </div>
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className="form-section">
          <h2 className="section-title">
            <i className="fas fa-tags"></i>
            Classification
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0 1.5rem 0' }} />
          
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">SUBSIDIARY</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {authData.subsidiary}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">CLASS</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {authData.class}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">LOCATION</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {authData.location}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">DEPARTMENT</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {authData.department}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">CONTACT PERSON</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {authData.contactPerson}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">HS CODE</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {authData.hsCode}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">COUNTRY OF ORIGIN</label>
              <div className="form-control" style={{ background: '#f5f5f5', border: 'none' }}>
                {authData.countryOfOrigin}
              </div>
            </div>
          </div>
        </div>

        {/* Items Tab */}
        <div className="form-section">
          <div style={{ borderBottom: '2px solid #5b7a9e', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '0' }}>
              <button
                onClick={() => setActiveTab('items')}
                style={{
                  padding: '0.75rem 2rem',
                  border: 'none',
                  background: activeTab === 'items' ? '#5b7a9e' : '#e0e0e0',
                  color: activeTab === 'items' ? 'white' : '#666',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
              >
                Items
              </button>
            </div>
          </div>

          {activeTab === 'items' && (
            <>
              <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
                <table className="detail-items-table">
                  <thead>
                    <tr>
                      <th>ITEM</th>
                      <th>QUANTITY</th>
                      <th>UNITS</th>
                      <th>DESCRIPTION</th>
                      <th>PRICE LEVEL</th>
                      <th>UNIT PRICE</th>
                      <th>CODE</th>
                      <th>AMOUNT</th>
                      <th>COST RATE</th>
                      <th>TAX AMT</th>
                      <th>GROSS AMT</th>
                      <th>OPTIONS</th>
                      <th>CLOSED</th>
                      <th>ESTIMATED EXTENDED COST</th>
                      <th>SERIAL/LOT NUMBERS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td>{item.item}</td>
                        <td>{item.quantity}</td>
                        <td>{item.units}</td>
                        <td>{item.description}</td>
                        <td>{item.priceLevel}</td>
                        <td className="amount">{item.unitPrice}</td>
                        <td>{item.code}</td>
                        <td className="amount">{item.amount}</td>
                        <td className="amount">{item.costRate}</td>
                        <td className="amount">{item.taxAmt}</td>
                        <td className="amount">{item.grossAmt}</td>
                        <td>{item.options}</td>
                        <td>{item.closed ? 'Yes' : 'No'}</td>
                        <td className="amount">{item.estimatedExtendedCost}</td>
                        <td>{item.serialNumbers}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Summary - Below table */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>
                <div style={{ background: 'white', padding: '1.25rem', border: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                    SUBTOTAL
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                    ${totals.subtotal.toFixed(2)}
                  </div>
                </div>
                <div style={{ background: 'white', padding: '1.25rem', border: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                    DISCOUNT
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                    ${totals.discount.toFixed(2)}
                  </div>
                </div>
                <div style={{ background: 'white', padding: '1.25rem', border: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                    TAX TOTAL
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
                    ${totals.taxTotal.toFixed(2)}
                  </div>
                </div>
                <div style={{ background: 'white', padding: '1.25rem', border: '1px solid #e0e0e0' }}>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
                    TOTAL
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: '600', color: '#4a90e2' }}>
                    ${totals.total.toFixed(2)}
                  </div>
                </div>
              </div>
            </>
          )}
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

export default ViewReturnAuthorizationDetail;
