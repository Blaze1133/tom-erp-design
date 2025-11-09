import React, { useState } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const PayBills = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const [billPayments] = useState([
    {
      id: 1,
      date: '8/5/2025',
      type: 'Bill',
      refNo: '28119',
      vendor: 'BROTHERS GLOVE MERCHANT',
      currency: 'SGD',
      exchangeRate: 1.00,
      originalAmount: 231.63,
      amountDue: 231.63,
      discDate: '',
      discAvail: '',
      discTaken: '',
      payment: ''
    },
    {
      id: 2,
      date: '7/8/2025',
      type: 'Bill',
      refNo: '37154',
      vendor: 'CHIA HOCK HARDWARE TRADING',
      currency: 'SGD',
      exchangeRate: 1.00,
      originalAmount: 412.02,
      amountDue: 412.02,
      discDate: '',
      discAvail: '',
      discTaken: '',
      payment: ''
    }
  ]);

  const handleViewBill = (bill) => {
    if (setCurrentPage) {
      setCurrentPage('view-bill-payment-detail');
    }
  };

  const handleSave = () => {
    showToast('Bill payment saved successfully!', 'success');
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  return (
    <div className="sales-quotation">
      <div className="page-header">
        <div className="page-title">
          <i className="fas fa-money-bill-wave" style={{ fontSize: '24px', color: '#4a90e2' }}></i>
          <h1>Bill Payments</h1>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save
          </button>
          <button className="btn btn-secondary">
            Cancel
          </button>
          <button className="btn btn-secondary">
            Mark All
          </button>
          <button className="btn btn-secondary">
            Unmark All
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
              <label className="form-label required">A/P ACCOUNT</label>
              <select className="form-control">
                <option>20010 Accounts Payable : Trade Creditors</option>
                <option>20020 Accounts Payable : Intercompany Creditors</option>
                <option>20025 Other Payable Creditors</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">POSTING PERIOD</label>
              <select className="form-control">
                <option>Nov 2025</option>
                <option>Dec 2025</option>
                <option>Jan 2026</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">END DATE</label>
              <input type="date" className="form-control" />
            </div>

            <div className="form-group">
              <label className="form-label">ACCOUNT</label>
              <select className="form-control">
                <option>11110 ALL Bank ...GD 072-004442-8</option>
                <option>11120 Bank Account 2</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">AMOUNT</label>
              <input type="number" className="form-control" defaultValue="0.00" step="0.01" />
            </div>

            <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '24px' }}>
              <input type="checkbox" />
              <label style={{ margin: 0, fontSize: '13px' }}>TO BE PRINTED</label>
            </div>

            <div className="form-group">
              <label className="form-label">BALANCE</label>
              <input type="number" className="form-control" defaultValue="-13,405.52" readOnly />
            </div>

            <div className="form-group">
              <label className="form-label">SUBSIDIARY</label>
              <select className="form-control">
                <option>Tech Offshore Marine (SV) Pte Ltd</option>
                <option>Tech Onshore MEP Prefabricators Pte Ltd.</option>
                <option>Tech Electric & Automation Pte Ltd</option>
                <option>Tech Marine Offshore (S) Pte Ltd</option>
                <option>Tech Offshore Marine (DQ) Pte Ltd</option>
                <option>Tech Offshore Marine (s) Pte Ltd</option>
              </select>
            </div>

            <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '24px' }}>
              <input type="checkbox" />
              <label style={{ margin: 0, fontSize: '13px' }}>USE BILL-TO ADDRESS FROM VENDOR</label>
            </div>

            <div className="form-group">
              <label className="form-label">DATE</label>
              <input type="date" className="form-control" defaultValue="2025-07-11" />
            </div>

            <div className="form-group">
              <label className="form-label">START DATE</label>
              <input type="date" className="form-control" />
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
              <label className="form-label required">DEPARTMENT</label>
              <select className="form-control">
                <option value="">Select...</option>
                <option>TOM</option>
                <option>TOM : Admin</option>
                <option>TOM : Electrical and E&I</option>
                <option>TOM : Facility</option>
                <option>TOM : Finance</option>
                <option>TOM : Finance : Internal Transfer</option>
                <option>TOM : Human Resource</option>
                <option>TOM : IT</option>
                <option>TOM : Logistic</option>
                <option>TOM : Operating</option>
                <option>TOM : Purchase</option>
                <option>TOM : Sales and Marketing</option>
                <option>TOM : Security</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">CLASS</label>
              <select className="form-control">
                <option value="">Select...</option>
                <option>Consumable Item</option>
                <option>Electrical Works</option>
                <option>Engineering Services</option>
                <option>Fabrication Works</option>
                <option>Installation Works</option>
                <option>Marine Equipment</option>
                <option>Material Supply</option>
                <option>MEP Works</option>
                <option>Mechanical Works</option>
                <option>Piping Works</option>
                <option>Project Management</option>
                <option>Rental Equipment</option>
                <option>Structural Works</option>
                <option>Technical Consultancy</option>
                <option>Testing & Commissioning</option>
                <option>Transportation</option>
                <option>Welding Services</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">LOCATION</label>
              <select className="form-control">
                <option value="">Select...</option>
                <option>TOM -11</option>
                <option>Hong Hang Shipyard</option>
                <option>Mega yard</option>
                <option>MEP MARINE CC</option>
                <option>Shipyards/Construction</option>
                <option>Singapore(MEP)</option>
                <option>TOM External Workshop</option>
                <option>TOM - 13</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">SELECT ITEM</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>

        {/* Bills Table */}
        <div className="form-section" style={{ marginTop: '1.5rem' }}>
          <div style={{ 
            padding: '12px 20px', 
            background: '#f8f9fa', 
            borderBottom: '1px solid #e0e0e0',
            marginBottom: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <button className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px' }}>
              Customize
            </button>
          </div>

          <div className="items-table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="items-table" style={{ width: '100%', minWidth: '1400px' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}></th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DATE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>TYPE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>ID</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>VENDOR</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>REF NO.</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>CURRENCY</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>EXCHANGE RATE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>ORIGINAL AMOUNT</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>AMOUNT DUE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DISC. DATE</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DISC. AVAIL</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>DISC. TAKEN</th>
                  <th style={{ padding: '8px 6px', fontSize: '11px' }}>PAYMENT</th>
                </tr>
              </thead>
              <tbody>
                {billPayments.map((bill) => (
                  <tr key={bill.id}>
                    <td style={{ padding: '4px' }}>
                      <input type="checkbox" />
                    </td>
                    <td style={{ padding: '4px' }}>{bill.date}</td>
                    <td style={{ padding: '4px' }}>
                      <button 
                        className="view-link"
                        onClick={() => handleViewBill(bill)}
                      >
                        {bill.type}
                      </button>
                    </td>
                    <td style={{ padding: '4px' }}></td>
                    <td style={{ padding: '4px' }}>{bill.vendor}</td>
                    <td style={{ padding: '4px' }}>{bill.refNo}</td>
                    <td style={{ padding: '4px' }}>{bill.currency}</td>
                    <td style={{ padding: '4px' }}>{bill.exchangeRate.toFixed(2)}</td>
                    <td style={{ padding: '4px', textAlign: 'right' }}>{bill.originalAmount.toFixed(2)}</td>
                    <td style={{ padding: '4px', textAlign: 'right' }}>
                      <button 
                        className="view-link"
                        onClick={() => handleViewBill(bill)}
                      >
                        {bill.amountDue.toFixed(2)}
                      </button>
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input type="text" className="table-input" style={{ width: '100px' }} />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input type="text" className="table-input" style={{ width: '100px' }} />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input type="text" className="table-input" style={{ width: '100px' }} />
                    </td>
                    <td style={{ padding: '4px' }}>
                      <input type="number" className="table-input" style={{ width: '100px' }} step="0.01" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="footer-actions">
          <button className="btn btn-tertiary">
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

export default PayBills;
