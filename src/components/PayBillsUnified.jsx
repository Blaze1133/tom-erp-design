import React, { useState, useEffect } from 'react';
import Toast from './Toast';
import './Enquiries.css';

const PayBillsUnified = ({ setCurrentPage }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [paymentMode, setPaymentMode] = useState('pay-bills');
  const [activeTab, setActiveTab] = useState('apply');
  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

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
      amountDue: 231.63
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
      amountDue: 412.02
    }
  ]);

  const [formData, setFormData] = useState({
    apAccount: '20010 Accounts Payable : Trade Creditors',
    customForm: 'TOM Bill Payment',
    transactionNumber: 'To Be Generated',
    payee: '',
    account: '',
    balance: '',
    amount: 0.00,
    currency: 'SGD',
    exchangeRate: 1.00,
    date: '2025-07-11',
    postingPeriod: 'Nov 2025',
    endDate: '',
    startDate: '',
    toBePrinted: false,
    voucher: false,
    check: '',
    memo: '',
    approvalStatus: 'Pending Approval',
    nextApprover: '',
    subsidiary: '',
    department: '',
    class: '',
    location: '',
    approvalStatusSubmit: 'Submit For Approval',
    useBillToAddress: false,
    selectItem: '',
    addressToSelect: '',
    payTo: ''
  });

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleViewBill = (bill) => {
    if (setCurrentPage) {
      setCurrentPage('view-bill-payment-detail');
    }
  };

  const handleSave = () => {
    showToast('Bill payment saved successfully!', 'success');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      if (setCurrentPage) {
        setCurrentPage('view-vendor-payments');
      }
    }
  };

  const handleList = () => {
    if (setCurrentPage) {
      if (paymentMode === 'pay-single-vendor') {
        setCurrentPage('view-single-vendor-payments');
      } else if (paymentMode === 'pay-bills') {
        setCurrentPage('view-multiple-vendor-payments');
      }
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  useEffect(() => {
    const handleClickOutside = () => {
      if (activeMenu !== null) {
        setActiveMenu(null);
      }
    };
    if (activeMenu !== null) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeMenu]);

  const handleMenuToggle = (index, event) => {
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    setMenuPosition({
      top: rect.bottom + 5,
      left: rect.left
    });
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <div className="enquiry-detail">
      {activeMenu !== null && (
        <div 
          className="row-actions-menu"
          style={{
            position: 'fixed',
            top: `${menuPosition.top}px`,
            left: `${menuPosition.left}px`,
            display: 'block',
            zIndex: 1000
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={() => setActiveMenu(null)}>
            <i className="fas fa-arrow-up"></i>
            Insert Above
          </button>
          <button onClick={() => setActiveMenu(null)}>
            <i className="fas fa-arrow-down"></i>
            Insert Below
          </button>
          <button onClick={() => setActiveMenu(null)} className="delete-action">
            <i className="fas fa-trash"></i>
            Delete Row
          </button>
        </div>
      )}

      <div className="detail-header">
        <div className="detail-title">
          <i className="fas fa-money-bill-wave"></i>
          <div>
            <h1>{paymentMode === 'pay-bills' ? 'Bill Payments' : 'Bill Payment'}</h1>
            <div className="detail-subtitle">
              {paymentMode === 'pay-single-vendor' ? (
                <>
                  <span>300444</span>
                  <span style={{ color: '#666', fontSize: '13px', marginLeft: '10px' }}>EQUIPE SERVICES & TECHNOLOGY PTE LTD</span>
                </>
              ) : (
                <span># New Bill Payment</span>
              )}
            </div>
          </div>
        </div>
        <div className="detail-actions">
          <button className="btn-action" onClick={handleList}>List</button>
          <button className="btn-action">Search</button>
          <button className="btn-action">Customize</button>
        </div>
      </div>

      <div className="detail-toolbar">
        <button className="btn-toolbar" onClick={handleCancel}>
          <i className="fas fa-arrow-left"></i>
          Back
        </button>
        <button className="btn-toolbar" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn-toolbar-primary" onClick={handleSave}>
          <i className="fas fa-save"></i>
          Save
        </button>
        {paymentMode === 'pay-bills' && (
          <>
            <button className="btn-toolbar">
              Mark All
            </button>
            <button className="btn-toolbar">
              Unmark All
            </button>
          </>
        )}
      </div>

      <div className="detail-content">
        {/* Payment Mode Filter - Top Left */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <label style={{ fontSize: '13px', fontWeight: '600', color: '#333' }}>PAYMENT TYPE:</label>
          <select 
            className="form-control"
            style={{ maxWidth: '300px' }}
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value)}
          >
            <option value="pay-bills">Pay Bills (Multiple Vendors)</option>
            <option value="pay-single-vendor">Pay Single Vendor</option>
          </select>
        </div>

        {/* Primary Information */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Primary Information</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>A/P ACCOUNT <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.apAccount}
                  onChange={(e) => handleFormChange('apAccount', e.target.value)}
                >
                  <option>20010 Accounts Payable : Trade Creditors</option>
                  <option>20020 Accounts Payable : Intercompany Creditors</option>
                  <option>20025 Other Payable Creditors</option>
                </select>
              </div>

              {paymentMode === 'pay-bills' ? (
                <>
                  <div className="detail-field">
                    <label>POSTING PERIOD</label>
                    <select 
                      className="form-control"
                      value={formData.postingPeriod}
                      onChange={(e) => handleFormChange('postingPeriod', e.target.value)}
                    >
                      <option>Nov 2025</option>
                      <option>Dec 2025</option>
                      <option>Jan 2026</option>
                    </select>
                  </div>

                  <div className="detail-field">
                    <label>END DATE</label>
                    <input 
                      type="date" 
                      className="form-control"
                      value={formData.endDate}
                      onChange={(e) => handleFormChange('endDate', e.target.value)}
                    />
                  </div>

                  <div className="detail-field">
                    <label>ACCOUNT</label>
                    <select 
                      className="form-control"
                      value={formData.account}
                      onChange={(e) => handleFormChange('account', e.target.value)}
                    >
                      <option>11110 ALL Bank ...GD 072-004442-8</option>
                      <option>11120 Bank Account 2</option>
                    </select>
                  </div>

                  <div className="detail-field">
                    <label>AMOUNT</label>
                    <input 
                      type="number" 
                      className="form-control"
                      value={formData.amount}
                      onChange={(e) => handleFormChange('amount', e.target.value)}
                      step="0.01"
                    />
                  </div>

                  <div className="detail-field">
                    <label>BALANCE</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.balance || "-13,405.52"}
                      readOnly
                    />
                  </div>

                  <div className="detail-field">
                    <label>DATE</label>
                    <input 
                      type="date" 
                      className="form-control"
                      value={formData.date}
                      onChange={(e) => handleFormChange('date', e.target.value)}
                    />
                  </div>

                  <div className="detail-field">
                    <label>START DATE</label>
                    <input 
                      type="date" 
                      className="form-control"
                      value={formData.startDate}
                      onChange={(e) => handleFormChange('startDate', e.target.value)}
                    />
                  </div>

                  <div className="detail-field">
                    <label>END DATE</label>
                    <input 
                      type="date" 
                      className="form-control"
                      value={formData.endDate}
                      onChange={(e) => handleFormChange('endDate', e.target.value)}
                    />
                  </div>

                  <div className="detail-field">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '8px' }}>
                      <input 
                        type="checkbox"
                        checked={formData.toBePrinted}
                        onChange={(e) => handleFormChange('toBePrinted', e.target.checked)}
                      />
                      <label style={{ margin: 0, fontSize: '13px' }}>TO BE PRINTED</label>
                    </div>
                  </div>

                  <div className="detail-field">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '8px' }}>
                      <input 
                        type="checkbox"
                        checked={formData.useBillToAddress}
                        onChange={(e) => handleFormChange('useBillToAddress', e.target.checked)}
                      />
                      <label style={{ margin: 0, fontSize: '13px' }}>USE BILL-TO ADDRESS FROM VENDOR</label>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="detail-field">
                    <label>TRANSACTION NUMBER</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.transactionNumber}
                      onChange={(e) => handleFormChange('transactionNumber', e.target.value)}
                    />
                  </div>

                  <div className="detail-field">
                    <label>CHECK #</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.check}
                      onChange={(e) => handleFormChange('check', e.target.value)}
                    />
                  </div>

                  <div className="detail-field">
                    <label>PAYEE <span className="required">*</span></label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.payee}
                      onChange={(e) => handleFormChange('payee', e.target.value)}
                      placeholder="<Type then tab>"
                    />
                  </div>

                  <div className="detail-field">
                    <label>ACCOUNT <span className="required">*</span></label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.account}
                      onChange={(e) => handleFormChange('account', e.target.value)}
                    />
                  </div>

                  <div className="detail-field">
                    <label>AMOUNT</label>
                    <input 
                      type="number" 
                      className="form-control"
                      value={formData.amount}
                      onChange={(e) => handleFormChange('amount', e.target.value)}
                      step="0.01"
                    />
                  </div>

                  <div className="detail-field">
                    <label>BALANCE</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.balance}
                      onChange={(e) => handleFormChange('balance', e.target.value)}
                    />
                  </div>

                  <div className="detail-field">
                    <label>CURRENCY <span className="required">*</span></label>
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

                  <div className="detail-field">
                    <label>EXCHANGE RATE <span className="required">*</span></label>
                    <input 
                      type="number" 
                      className="form-control"
                      value={formData.exchangeRate}
                      onChange={(e) => handleFormChange('exchangeRate', e.target.value)}
                      step="0.01"
                    />
                  </div>

                  <div className="detail-field">
                    <label>DATE <span className="required">*</span></label>
                    <input 
                      type="date" 
                      className="form-control"
                      value={formData.date}
                      onChange={(e) => handleFormChange('date', e.target.value)}
                    />
                  </div>

                  <div className="detail-field">
                    <label>POSTING PERIOD <span className="required">*</span></label>
                    <select 
                      className="form-control"
                      value={formData.postingPeriod}
                      onChange={(e) => handleFormChange('postingPeriod', e.target.value)}
                    >
                      <option>Nov 2025</option>
                      <option>Dec 2025</option>
                      <option>Jan 2026</option>
                    </select>
                  </div>

                  <div className="detail-field">
                    <label>APPROVAL STATUS</label>
                    <select 
                      className="form-control"
                      value={formData.approvalStatus}
                      onChange={(e) => handleFormChange('approvalStatus', e.target.value)}
                    >
                      <option>- New -</option>
                      <option>Submit For Approval</option>
                      <option>Pending Approval</option>
                      <option>Approved</option>
                      <option>Rejected</option>
                      <option>Submitted To Client</option>
                      <option>Updated to Sales Team</option>
                    </select>
                  </div>

                  <div className="detail-field">
                    <label>NEXT APPROVER</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={formData.nextApprover}
                      onChange={(e) => handleFormChange('nextApprover', e.target.value)}
                      placeholder="<Type then tab>"
                    />
                  </div>

                  <div className="detail-field">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '8px' }}>
                      <input 
                        type="checkbox"
                        checked={formData.toBePrinted}
                        onChange={(e) => handleFormChange('toBePrinted', e.target.checked)}
                      />
                      <span style={{ fontSize: '13px', color: '#666' }}>TO BE PRINTED</span>
                    </div>
                  </div>

                  <div className="detail-field">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '8px' }}>
                      <input 
                        type="checkbox"
                        checked={formData.voucher}
                        onChange={(e) => handleFormChange('voucher', e.target.checked)}
                      />
                      <span style={{ fontSize: '13px', color: '#666' }}>VOUCHER</span>
                    </div>
                  </div>

                  <div className="detail-field">
                    <label>MEMO</label>
                    <textarea 
                      className="form-control"
                      value={formData.memo}
                      onChange={(e) => handleFormChange('memo', e.target.value)}
                      rows="2"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className="detail-section">
          <div className="section-header">
            <i className="fas fa-chevron-down"></i>
            <h3>Classification</h3>
          </div>
          <div className="section-body">
            <div className="detail-grid">
              <div className="detail-field">
                <label>SUBSIDIARY {paymentMode === 'pay-bills' && <span className="required">*</span>}</label>
                <select 
                  className="form-control"
                  value={formData.subsidiary}
                  onChange={(e) => handleFormChange('subsidiary', e.target.value)}
                >
                  <option value="">Select...</option>
                  <option>Tech Offshore Marine (SV) Pte Ltd</option>
                  <option>Tech Onshore MEP Prefabricators Pte Ltd.</option>
                  <option>Tech Electric & Automation Pte Ltd</option>
                  <option>Tech Marine Offshore (S) Pte Ltd</option>
                  <option>Tech Offshore Marine (DQ) Pte Ltd</option>
                  <option>Tech Offshore Marine (s) Pte Ltd</option>
                </select>
              </div>

              <div className="detail-field">
                <label>DEPARTMENT <span className="required">*</span></label>
                <select 
                  className="form-control"
                  value={formData.department}
                  onChange={(e) => handleFormChange('department', e.target.value)}
                >
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
            
              <div className="detail-field">
                <label>CLASS</label>
                <select 
                  className="form-control"
                  value={formData.class}
                  onChange={(e) => handleFormChange('class', e.target.value)}
                >
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
            
              <div className="detail-field">
                <label>LOCATION</label>
                <select 
                  className="form-control"
                  value={formData.location}
                  onChange={(e) => handleFormChange('location', e.target.value)}
                >
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

              {paymentMode === 'pay-bills' && (
                <div className="detail-field">
                  <label>SELECT ITEM</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.selectItem}
                    onChange={(e) => handleFormChange('selectItem', e.target.value)}
                  />
                </div>
              )}

              {paymentMode === 'pay-single-vendor' && (
                <div className="detail-field">
                  <label>APPROVAL STATUS</label>
                  <select 
                    className="form-control"
                    value={formData.approvalStatusSubmit}
                    onChange={(e) => handleFormChange('approvalStatusSubmit', e.target.value)}
                  >
                    <option>Submit For Approval</option>
                    <option>Approved</option>
                    <option>Pending Approval</option>
                    <option>Rejected</option>
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bills Table for Pay Bills Mode */}
        {paymentMode === 'pay-bills' && (
          <div className="detail-section">
            <div className="section-header">
              <i className="fas fa-chevron-down"></i>
              <h3>Bills to Pay</h3>
            </div>
            <div className="section-body">
              <div className="items-table-container">
                <table className="items-table">
                  <thead>
                    <tr>
                      <th style={{ width: '30px' }}></th>
                      <th style={{ minWidth: '100px' }}>DATE</th>
                      <th style={{ minWidth: '80px' }}>TYPE</th>
                      <th style={{ minWidth: '60px' }}>ID</th>
                      <th style={{ minWidth: '200px' }}>VENDOR</th>
                      <th style={{ minWidth: '120px' }}>REF NO.</th>
                      <th style={{ minWidth: '80px' }}>CURRENCY</th>
                      <th style={{ minWidth: '120px' }}>EXCHANGE RATE</th>
                      <th style={{ minWidth: '120px' }}>ORIGINAL AMOUNT</th>
                      <th style={{ minWidth: '120px' }}>AMOUNT DUE</th>
                      <th style={{ minWidth: '100px' }}>DISC. DATE</th>
                      <th style={{ minWidth: '100px' }}>DISC. AVAIL</th>
                      <th style={{ minWidth: '100px' }}>DISC. TAKEN</th>
                      <th style={{ minWidth: '100px' }}>PAYMENT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {billPayments.map((bill, index) => (
                      <tr 
                        key={bill.id}
                        className={`table-row-with-actions ${hoveredRow === index ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredRow(index)}
                        onMouseLeave={() => setHoveredRow(null)}
                      >
                        <td style={{ textAlign: 'center', position: 'relative' }}>
                          {hoveredRow === index && (
                            <button 
                              className="row-actions-btn"
                              title="Row Actions"
                              onClick={(e) => handleMenuToggle(index, e)}
                            >
                              <i className="fas fa-ellipsis-v"></i>
                            </button>
                          )}
                          <input type="checkbox" style={{ marginLeft: hoveredRow === index ? '0' : '0' }} />
                        </td>
                        <td>{bill.date}</td>
                        <td>
                          <button 
                            className="view-link"
                            onClick={() => handleViewBill(bill)}
                          >
                            {bill.type}
                          </button>
                        </td>
                        <td></td>
                        <td>{bill.vendor}</td>
                        <td>{bill.refNo}</td>
                        <td>{bill.currency}</td>
                        <td style={{ textAlign: 'right' }}>{bill.exchangeRate.toFixed(2)}</td>
                        <td style={{ textAlign: 'right' }}>{bill.originalAmount.toFixed(2)}</td>
                        <td style={{ textAlign: 'right' }}>
                          <button 
                            className="view-link"
                            onClick={() => handleViewBill(bill)}
                          >
                            {bill.amountDue.toFixed(2)}
                          </button>
                        </td>
                        <td>
                          <input type="text" className="form-control" style={{ minWidth: '100px', height: '32px' }} />
                        </td>
                        <td>
                          <input type="text" className="form-control" style={{ minWidth: '100px', height: '32px' }} />
                        </td>
                        <td>
                          <input type="text" className="form-control" style={{ minWidth: '100px', height: '32px' }} />
                        </td>
                        <td>
                          <input type="number" className="form-control" style={{ minWidth: '100px', height: '32px', textAlign: 'right' }} step="0.01" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tabbed Interface for Pay Single Vendor Mode */}
        {paymentMode === 'pay-single-vendor' && (
          <div className="detail-tabs">
            <div className="tabs-header">
              <button className={`tab-btn ${activeTab === 'apply' ? 'active' : ''}`} onClick={() => setActiveTab('apply')}>Apply</button>
              <button className={`tab-btn ${activeTab === 'payeeAddress' ? 'active' : ''}`} onClick={() => setActiveTab('payeeAddress')}>Payee Address</button>
              <button className={`tab-btn ${activeTab === 'relationships' ? 'active' : ''}`} onClick={() => setActiveTab('relationships')}>Relationships</button>
              <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>Communication</button>
            </div>

            {activeTab === 'apply' && (
              <div className="form-section" style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ fontSize: '11px', color: '#999', marginBottom: '8px', display: 'block', textTransform: 'uppercase', fontWeight: '500', letterSpacing: '0.5px' }}>SELECT ITEM</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    style={{ maxWidth: '400px' }}
                    value={formData.selectItem}
                    onChange={(e) => handleFormChange('selectItem', e.target.value)}
                  />
                </div>

                <div className="items-table-container">
                  <table className="items-table">
                    <thead>
                      <tr>
                        <th style={{ minWidth: '80px' }}>APPLY</th>
                        <th style={{ minWidth: '100px' }}>DATE DUE</th>
                        <th style={{ minWidth: '80px' }}>TYPE</th>
                        <th style={{ minWidth: '120px' }}>REF NO.</th>
                        <th style={{ minWidth: '120px' }}>ORIG. AMT.</th>
                        <th style={{ minWidth: '120px' }}>AMT. DUE</th>
                        <th style={{ minWidth: '80px' }}>CURRENCY</th>
                        <th style={{ minWidth: '100px' }}>DISC. DATE</th>
                        <th style={{ minWidth: '100px' }}>DISC. AVAIL.</th>
                        <th style={{ minWidth: '100px' }}>DISC. TAKEN</th>
                        <th style={{ minWidth: '100px' }}>PAYMENT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="11" style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'payeeAddress' && (
              <div className="form-section" style={{ padding: '1.5rem' }}>
                <div className="detail-grid">
                  <div className="detail-field">
                    <label>ADDRESS TO SELECT</label>
                    <select 
                      className="form-control"
                      value={formData.addressToSelect}
                      onChange={(e) => handleFormChange('addressToSelect', e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option>Primary Address</option>
                      <option>Billing Address</option>
                      <option>Shipping Address</option>
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>PAY TO</label>
                    <textarea 
                      className="form-control"
                      value={formData.payTo}
                      onChange={(e) => handleFormChange('payTo', e.target.value)}
                      rows="4"
                      placeholder="Enter address..."
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'relationships' && (
              <div className="form-section" style={{ padding: '1.5rem' }}>
                <div className="items-table-container">
                  <table className="items-table">
                    <thead>
                      <tr>
                        <th style={{ minWidth: '150px' }}>CONTACT #</th>
                        <th style={{ minWidth: '150px' }}>JOB TITLE</th>
                        <th style={{ minWidth: '200px' }}>EMAIL</th>
                        <th style={{ minWidth: '120px' }}>MAIN PHONE</th>
                        <th style={{ minWidth: '150px' }}>SUBSIDIARY #</th>
                        <th style={{ minWidth: '120px' }}>ROLE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="6" style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'communication' && (
              <div className="form-section" style={{ padding: '1.5rem' }}>
                <div className="items-table-container">
                  <table className="items-table">
                    <thead>
                      <tr>
                        <th style={{ minWidth: '200px' }}>TITLE #</th>
                        <th style={{ minWidth: '150px' }}>LOCATION</th>
                        <th style={{ minWidth: '120px' }}>DATE #</th>
                        <th style={{ minWidth: '80px' }}>ALL DAY</th>
                        <th style={{ minWidth: '100px' }}>START TIME</th>
                        <th style={{ minWidth: '100px' }}>END TIME</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="6" style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                          No records to show.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div style={{ 
          display: 'flex', 
          gap: '0.75rem', 
          padding: '1.5rem 0', 
          borderTop: '1px solid #e0e0e0',
          marginTop: '2rem'
        }}>
          <button 
            className="btn-toolbar"
            onClick={handleCancel}
          >
            <i className="fas fa-times"></i>
            Cancel
          </button>
          <button 
            className="btn-toolbar"
            onClick={handleCancel}
          >
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
          <button 
            className="btn-toolbar-primary"
            onClick={handleSave}
          >
            <i className="fas fa-save"></i>
            Save
          </button>
          <button 
            className="btn-toolbar"
            onClick={handleSave}
          >
            <i className="fas fa-check"></i>
            Submit
          </button>
        </div>
      </div>

      {toast.show && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast({ ...toast, show: false })} 
        />
      )}
    </div>
  );
};

export default PayBillsUnified;
